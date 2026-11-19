-- 게시판: 일정의 '사본'을 게시글로 올린다 (원본 일정을 고쳐도 게시글은 그대로, 원하면 다시 올려 갱신)
-- 공개 범위: public(게시판 목록 + 링크) · unlisted(링크를 가진 사람만) · private(나만)
-- 링크 공유 글은 표에서 목록으로 읽을 수 없고, 추측할 수 없는 공유 코드로 get_post()를 불러야만 한 건을 볼 수 있다.

create table public.posts (
  id uuid primary key default gen_random_uuid(),
  -- 주소에 쓰는 공유 코드: 무작위 16자 (base64url)
  share_code text not null unique default replace(replace(replace(encode(extensions.gen_random_bytes(12), 'base64'), '+', '-'), '/', '_'), '=', ''),
  user_id uuid not null default auth.uid() references public.profiles (id) on delete cascade,
  trip_id uuid references public.trips (id) on delete set null,   -- 어느 내 일정에서 올렸는지 (다시 올리기용)
  title text not null check (char_length(btrim(title)) between 1 and 60),
  summary text not null default '' check (char_length(summary) <= 500),
  country text not null,
  city text not null default '',
  nights int not null default 0 check (nights between 0 and 29),
  month int check (month between 1 and 12),                        -- 여행한 달 (공개를 고른 경우만)
  tags text[] not null default '{}' check (cardinality(tags) <= 6),
  place_count int not null default 0 check (place_count between 0 and 500),
  preview jsonb not null default '[]',                             -- 목록 카드용 동선 좌표 (날짜별, 줄인 것)
  data jsonb not null,                                             -- 게시한 순간의 일정 (메모·숙소·날짜는 고른 만큼만)
  visibility text not null default 'public' check (visibility in ('public', 'unlisted', 'private')),
  published_at timestamptz,                                        -- 처음 '전체 공개'한 때 (목록 정렬)
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint posts_data_size check (octet_length(data::text) <= 200000),
  constraint posts_preview_size check (octet_length(preview::text) <= 20000)
);

create index posts_board_idx on public.posts (country, published_at desc) where visibility = 'public';
create index posts_all_idx on public.posts (published_at desc) where visibility = 'public';
create index posts_user_idx on public.posts (user_id, updated_at desc);
create index posts_trip_idx on public.posts (trip_id);

alter table public.posts enable row level security;

-- 표로 읽기: 전체 공개 글, 또는 내 글 (링크 공유 글은 get_post로만)
create policy "전체 공개 글이나 내 글 읽기" on public.posts for select
  using (visibility = 'public' or user_id = auth.uid());
create policy "내 글 올리기" on public.posts for insert to authenticated
  with check (user_id = auth.uid()
    and (trip_id is null or exists (select 1 from public.trips t where t.id = trip_id and t.user_id = auth.uid())));
create policy "내 글 고치기" on public.posts for update to authenticated
  using (user_id = auth.uid()) with check (user_id = auth.uid());
create policy "내 글 지우기" on public.posts for delete to authenticated
  using (user_id = auth.uid());

-- 사용자가 쓸 수 있는 칸만 (공유 코드·주인·시각은 DB가 정함)
revoke insert, update on public.posts from anon, authenticated;
grant insert (trip_id, title, summary, country, city, nights, month, tags, place_count, preview, data, visibility) on public.posts to authenticated;
grant update (title, summary, country, city, nights, month, tags, place_count, preview, data, visibility) on public.posts to authenticated;

-- 시각은 DB가 정하고, 글 수·올리는 속도 제한 (한 사람 100개, 하루 30번)
create function public.guard_post() returns trigger
language plpgsql set search_path = ''
as $$
begin
  new.updated_at := now();
  if tg_op = 'INSERT' then
    if (select count(*) from public.posts where user_id = new.user_id) >= 100 then
      raise exception '게시글은 한 사람당 100개까지 올릴 수 있습니다.' using errcode = 'P0001';
    end if;
    if (select count(*) from public.posts where user_id = new.user_id and created_at > now() - interval '1 day') >= 30 then
      raise exception '오늘은 더 올릴 수 없어요. 내일 다시 시도해 주세요.' using errcode = 'P0001';
    end if;
    new.created_at := now();
    new.published_at := case when new.visibility = 'public' then now() end;
  else
    new.created_at := old.created_at;
    new.share_code := old.share_code;
    new.published_at := coalesce(old.published_at, case when new.visibility = 'public' then now() end);
  end if;
  return new;
end;
$$;

create trigger posts_guard
  before insert or update on public.posts
  for each row execute function public.guard_post();

-- 공유 코드로 글 한 건 (전체 공개·링크 공유, 또는 내 글). 로그인 없이도 부를 수 있다.
create function public.get_post(code text)
returns table (
  id uuid, share_code text, user_id uuid, title text, summary text, country text, city text, nights int, month int,
  tags text[], place_count int, data jsonb, visibility text, published_at timestamptz, updated_at timestamptz,
  nickname text, avatar_url text
)
language sql stable security definer set search_path = ''
as $$
  select p.id, p.share_code, p.user_id, p.title, p.summary, p.country, p.city, p.nights, p.month,
         p.tags, p.place_count, p.data, p.visibility, p.published_at, p.updated_at,
         pr.nickname, pr.avatar_url
    from public.posts p
    join public.profiles pr on pr.id = p.user_id
   where p.share_code = code
     and (p.visibility in ('public', 'unlisted') or p.user_id = auth.uid())
$$;

revoke all on function public.get_post(text) from public;
grant execute on function public.get_post(text) to anon, authenticated;

-- 이제 일정(trips)은 늘 나만 본다 (공개는 게시글로)
drop policy "공개 일정이나 내 일정 읽기" on public.trips;
create policy "내 일정만 읽기" on public.trips for select using (user_id = auth.uid());
