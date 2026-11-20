-- 댓글을 일정(trips)이 아니라 게시글(posts)에 단다.
-- 읽기: 공유 코드로 get_comments()를 불러야만 (링크 공유 글의 댓글이 표에서 새어 나가지 않게)
-- 쓰기: 볼 수 있는 글(전체 공개 · 링크 공유 · 내 글)에 로그인한 사람만
-- 고치기: 내 댓글만 · 지우기: 내 댓글, 또는 내 글에 달린 댓글

drop table if exists public.comments cascade;

create table public.comments (
  id uuid primary key default gen_random_uuid(),
  post_id uuid not null references public.posts (id) on delete cascade,
  user_id uuid not null default auth.uid() references public.profiles (id) on delete cascade,
  body text not null check (char_length(btrim(body)) between 1 and 1000),
  created_at timestamptz not null default now(),
  edited_at timestamptz
);

create index comments_post_idx on public.comments (post_id, created_at);
create index comments_user_idx on public.comments (user_id, created_at);

alter table public.comments enable row level security;

-- 표로 읽기는 내 댓글과 내 글의 댓글만 (지우기·고치기용). 글의 댓글 목록은 get_comments로
create policy "내 댓글이나 내 글의 댓글 읽기" on public.comments for select to authenticated
  using (user_id = auth.uid()
    or exists (select 1 from public.posts p where p.id = post_id and p.user_id = auth.uid()));
create policy "볼 수 있는 글에 댓글 쓰기" on public.comments for insert to authenticated
  with check (user_id = auth.uid()
    and exists (select 1 from public.posts p where p.id = post_id
                  and (p.visibility in ('public', 'unlisted') or p.user_id = auth.uid())));
create policy "내 댓글 고치기" on public.comments for update to authenticated
  using (user_id = auth.uid()) with check (user_id = auth.uid());
create policy "내 댓글이나 내 글의 댓글 지우기" on public.comments for delete to authenticated
  using (user_id = auth.uid()
    or exists (select 1 from public.posts p where p.id = post_id and p.user_id = auth.uid()));

revoke all on public.comments from anon;
revoke insert, update on public.comments from authenticated;
grant insert (post_id, body) on public.comments to authenticated;
grant update (body) on public.comments to authenticated;

-- 시각은 DB가 정하고, 1분에 5개 · 하루 200개까지
create or replace function public.guard_comment() returns trigger
language plpgsql set search_path = ''
as $$
begin
  if tg_op = 'UPDATE' then
    new.post_id := old.post_id;
    new.created_at := old.created_at;
    new.edited_at := case when new.body is distinct from old.body then now() else old.edited_at end;
    return new;
  end if;
  new.created_at := now();
  new.edited_at := null;
  if (select count(*) from public.comments where user_id = new.user_id and created_at > now() - interval '1 minute') >= 5 then
    raise exception '댓글을 너무 빨리 쓰고 있어요. 잠시 뒤 다시 시도해 주세요.' using errcode = 'P0001';
  end if;
  if (select count(*) from public.comments where user_id = new.user_id and created_at > now() - interval '1 day') >= 200 then
    raise exception '오늘 쓸 수 있는 댓글 수를 넘었습니다.' using errcode = 'P0001';
  end if;
  if (select count(*) from public.comments where post_id = new.post_id) >= 500 then
    raise exception '이 글에는 더 이상 댓글을 달 수 없어요.' using errcode = 'P0001';
  end if;
  return new;
end;
$$;

create trigger comments_guard
  before insert or update on public.comments
  for each row execute function public.guard_comment();

------------------------------------------------------------
-- 게시글의 댓글 수 (목록 카드에 표시). DB만 바꾼다.
------------------------------------------------------------
alter table public.posts add column comment_count int not null default 0;

create function public.count_comments() returns trigger
language plpgsql security definer set search_path = ''
as $$
begin
  if tg_op = 'INSERT' then
    update public.posts set comment_count = comment_count + 1 where id = new.post_id;
  else
    update public.posts set comment_count = greatest(comment_count - 1, 0) where id = old.post_id;
  end if;
  return null;
end;
$$;

revoke all on function public.count_comments() from public, anon, authenticated;

create trigger comments_count
  after insert or delete on public.comments
  for each row execute function public.count_comments();

-- 댓글 수만 바뀐 경우(사용자는 이 칸을 못 고친다)엔 글의 '고친 시각'을 그대로 둔다
create or replace function public.guard_post() returns trigger
language plpgsql set search_path = ''
as $$
begin
  if tg_op = 'UPDATE' and new.comment_count is distinct from old.comment_count then
    return new;
  end if;
  new.updated_at := now();
  if tg_op = 'INSERT' then
    if (select count(*) from public.posts where user_id = new.user_id) >= 100 then
      raise exception '게시글은 한 사람당 100개까지 올릴 수 있습니다.' using errcode = 'P0001';
    end if;
    if (select count(*) from public.posts where user_id = new.user_id and created_at > now() - interval '1 day') >= 30 then
      raise exception '오늘은 더 올릴 수 없어요. 내일 다시 시도해 주세요.' using errcode = 'P0001';
    end if;
    new.created_at := now();
    new.comment_count := 0;
    new.published_at := case when new.visibility = 'public' then now() end;
  else
    new.created_at := old.created_at;
    new.share_code := old.share_code;
    new.published_at := coalesce(old.published_at, case when new.visibility = 'public' then now() end);
  end if;
  return new;
end;
$$;

------------------------------------------------------------
-- 공유 코드로 글의 댓글 목록 (볼 수 있는 글만). 로그인 없이도 부를 수 있다.
------------------------------------------------------------
create function public.get_comments(code text)
returns table (id uuid, user_id uuid, body text, created_at timestamptz, edited_at timestamptz, nickname text, avatar_url text)
language sql stable security definer set search_path = ''
as $$
  select c.id, c.user_id, c.body, c.created_at, c.edited_at, pr.nickname, pr.avatar_url
    from public.posts p
    join public.comments c on c.post_id = p.id
    join public.profiles pr on pr.id = c.user_id
   where p.share_code = code
     and (p.visibility in ('public', 'unlisted') or p.user_id = auth.uid())
   order by c.created_at
   limit 500
$$;

revoke all on function public.get_comments(text) from public;
grant execute on function public.get_comments(text) to anon, authenticated;

-- 글 한 건에도 댓글 수를 함께 (돌려주는 칸이 바뀌어 다시 만든다)
drop function public.get_post(text);
create function public.get_post(code text)
returns table (
  id uuid, share_code text, user_id uuid, title text, summary text, country text, city text, nights int, month int,
  tags text[], place_count int, data jsonb, visibility text, published_at timestamptz, updated_at timestamptz,
  comment_count int, nickname text, avatar_url text
)
language sql stable security definer set search_path = ''
as $$
  select p.id, p.share_code, p.user_id, p.title, p.summary, p.country, p.city, p.nights, p.month,
         p.tags, p.place_count, p.data, p.visibility, p.published_at, p.updated_at,
         p.comment_count, pr.nickname, pr.avatar_url
    from public.posts p
    join public.profiles pr on pr.id = p.user_id
   where p.share_code = code
     and (p.visibility in ('public', 'unlisted') or p.user_id = auth.uid())
$$;

revoke all on function public.get_post(text) from public;
grant execute on function public.get_post(text) to anon, authenticated;
