-- 게시글 저장(북마크): 마음에 드는 남의 동선을 모아 두고 나중에 다시 보거나 내 일정으로 가져온다.
-- 볼 수 있는 글(전체 공개 · 링크 공유)만 저장할 수 있고, 저장 목록은 나만 본다.
-- 글의 저장 수(save_count)는 목록 카드에 보이고, 나중에 인기순 정렬의 기준이 된다.

create table public.post_saves (
  user_id uuid not null default auth.uid() references public.profiles (id) on delete cascade,
  post_id uuid not null references public.posts (id) on delete cascade,
  created_at timestamptz not null default now(),
  primary key (user_id, post_id)
);

create index post_saves_user_idx on public.post_saves (user_id, created_at desc);
create index post_saves_post_idx on public.post_saves (post_id);

alter table public.post_saves enable row level security;

create policy "내 저장 보기" on public.post_saves for select to authenticated
  using (user_id = auth.uid());
create policy "볼 수 있는 남의 글 저장" on public.post_saves for insert to authenticated
  with check (user_id = auth.uid()
    and exists (select 1 from public.posts p where p.id = post_id
                  and p.visibility in ('public', 'unlisted') and p.user_id <> auth.uid()));
create policy "내 저장 지우기" on public.post_saves for delete to authenticated
  using (user_id = auth.uid());

revoke all on public.post_saves from anon;
revoke insert, update on public.post_saves from authenticated;
grant insert (post_id) on public.post_saves to authenticated;

-- 시각은 DB가 정하고, 한 사람 1000개까지 · 1분에 30번까지
create function public.guard_post_save() returns trigger
language plpgsql set search_path = ''
as $$
begin
  new.created_at := now();
  if (select count(*) from public.post_saves where user_id = new.user_id) >= 1000 then
    raise exception '저장은 1000개까지 할 수 있어요. 안 보는 글을 지운 뒤 다시 시도해 주세요.' using errcode = 'P0001';
  end if;
  if (select count(*) from public.post_saves where user_id = new.user_id and created_at > now() - interval '1 minute') >= 30 then
    raise exception '너무 빨리 저장하고 있어요. 잠시 뒤 다시 시도해 주세요.' using errcode = 'P0001';
  end if;
  return new;
end;
$$;

create trigger post_saves_guard
  before insert on public.post_saves
  for each row execute function public.guard_post_save();

------------------------------------------------------------
-- 글의 저장 수 (DB만 바꾼다)
------------------------------------------------------------
alter table public.posts add column save_count int not null default 0;

create function public.count_post_saves() returns trigger
language plpgsql security definer set search_path = ''
as $$
begin
  if tg_op = 'INSERT' then
    update public.posts set save_count = save_count + 1 where id = new.post_id;
  else
    update public.posts set save_count = greatest(save_count - 1, 0) where id = old.post_id;
  end if;
  return null;
end;
$$;

revoke all on function public.count_post_saves() from public, anon, authenticated;

create trigger post_saves_count
  after insert or delete on public.post_saves
  for each row execute function public.count_post_saves();

-- 댓글 수·저장 수만 바뀐 경우엔 글의 '고친 시각'을 그대로 둔다 (두 칸은 사용자가 못 고친다)
create or replace function public.guard_post() returns trigger
language plpgsql set search_path = ''
as $$
begin
  if tg_op = 'UPDATE' and (new.comment_count is distinct from old.comment_count
                           or new.save_count is distinct from old.save_count) then
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
    new.save_count := 0;
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
-- 글 한 건: 저장 수와 '내가 저장했는지'를 함께 (돌려주는 칸이 바뀌어 다시 만든다)
------------------------------------------------------------
drop function public.get_post(text);
create function public.get_post(code text)
returns table (
  id uuid, share_code text, user_id uuid, title text, summary text, country text, city text, nights int, month int,
  tags text[], place_count int, data jsonb, visibility text, published_at timestamptz, updated_at timestamptz,
  comment_count int, nickname text, avatar_url text, save_count int, saved boolean
)
language sql stable security definer set search_path = ''
as $$
  select p.id, p.share_code, p.user_id, p.title, p.summary, p.country, p.city, p.nights, p.month,
         p.tags, p.place_count, p.data, p.visibility, p.published_at, p.updated_at,
         p.comment_count, pr.nickname, pr.avatar_url, p.save_count,
         exists (select 1 from public.post_saves s where s.post_id = p.id and s.user_id = auth.uid())
    from public.posts p
    join public.profiles pr on pr.id = p.user_id
   where p.share_code = code
     and (p.visibility in ('public', 'unlisted') or p.user_id = auth.uid())
$$;

revoke all on function public.get_post(text) from public;
grant execute on function public.get_post(text) to anon, authenticated;

------------------------------------------------------------
-- 내가 저장한 글 목록 (저장한 순서, 최신 먼저). 링크 공유 글도 포함 (링크를 받아 저장한 것)
-- before: 이전 페이지 마지막 글을 저장한 시각
------------------------------------------------------------
create function public.my_saved_posts(before timestamptz default null, size int default 18)
returns table (
  share_code text, user_id uuid, title text, country text, city text, nights int, month int, tags text[],
  place_count int, preview jsonb, covers text[], published_at timestamptz, comment_count int, save_count int,
  nickname text, avatar_url text, saved_at timestamptz
)
language sql stable security definer set search_path = ''
as $$
  select p.share_code, p.user_id, p.title, p.country, p.city, p.nights, p.month, p.tags,
         p.place_count, p.preview, p.covers, coalesce(p.published_at, p.created_at), p.comment_count, p.save_count,
         pr.nickname, pr.avatar_url, s.created_at
    from public.post_saves s
    join public.posts p on p.id = s.post_id
    join public.profiles pr on pr.id = p.user_id
   where s.user_id = auth.uid()
     and p.visibility in ('public', 'unlisted')
     and (before is null or s.created_at < before)
   order by s.created_at desc
   limit least(greatest(size, 1), 50)
$$;

revoke all on function public.my_saved_posts(timestamptz, int) from public, anon;
grant execute on function public.my_saved_posts(timestamptz, int) to authenticated;
