-- TripHelper 첫 DB 구조: 회원 프로필 · 여행 일정 · 댓글
-- Supabase 대시보드 → SQL Editor 에 통째로 붙여 넣고 Run.
-- 권한은 행 단위 보안(RLS)으로 DB가 직접 막는다: 브라우저에 들어가는 공개 키로는 남의 비공개 일정을 읽거나 고칠 수 없다.

------------------------------------------------------------
-- 프로필: 로그인하면 자동으로 한 줄 생김 (카카오·구글·네이버 이름/사진)
------------------------------------------------------------
create table public.profiles (
  id uuid primary key references auth.users (id) on delete cascade,
  nickname text not null default '여행자' check (char_length(nickname) between 1 and 30),
  avatar_url text,
  created_at timestamptz not null default now()
);

alter table public.profiles enable row level security;

-- 게시판에 글쓴이 이름을 보여 줘야 하므로 프로필은 누구나 읽을 수 있다 (이메일은 여기 없음)
create policy "프로필은 누구나 읽기" on public.profiles for select using (true);
create policy "내 프로필만 고치기" on public.profiles for update
  using (id = auth.uid()) with check (id = auth.uid());

-- 새 회원이 생기면 소셜 로그인 정보로 프로필을 만든다
create function public.handle_new_user() returns trigger
language plpgsql security definer set search_path = ''
as $$
begin
  insert into public.profiles (id, nickname, avatar_url)
  values (
    new.id,
    left(coalesce(
      nullif(new.raw_user_meta_data ->> 'nickname', ''),
      nullif(new.raw_user_meta_data ->> 'name', ''),
      nullif(new.raw_user_meta_data ->> 'full_name', ''),
      nullif(new.raw_user_meta_data ->> 'user_name', ''),
      '여행자'
    ), 30),
    coalesce(new.raw_user_meta_data ->> 'avatar_url', new.raw_user_meta_data ->> 'picture')
  );
  return new;
end;
$$;

create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function public.handle_new_user();

------------------------------------------------------------
-- 여행 일정: 일정 전체(JSON) + 게시판 목록용 정보
------------------------------------------------------------
create table public.trips (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null default auth.uid() references public.profiles (id) on delete cascade,
  title text not null default '' check (char_length(title) <= 60),
  country text not null,           -- 나라 slug (예: japan) → 나라별 게시판
  city text not null default '',
  nights int not null default 0 check (nights between 0 and 29),
  data jsonb not null,             -- 앱의 Trip 객체 그대로 (체크리스트 포함)
  visibility text not null default 'private' check (visibility in ('private', 'public')),
  published_at timestamptz,        -- 처음 게시판에 올린 때 (목록 정렬용)
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index trips_user_idx on public.trips (user_id, updated_at desc);
create index trips_board_idx on public.trips (country, published_at desc) where visibility = 'public';

alter table public.trips enable row level security;

create policy "공개 일정이나 내 일정 읽기" on public.trips for select
  using (visibility = 'public' or user_id = auth.uid());
create policy "내 일정 만들기" on public.trips for insert to authenticated
  with check (user_id = auth.uid());
create policy "내 일정 고치기" on public.trips for update to authenticated
  using (user_id = auth.uid()) with check (user_id = auth.uid());
create policy "내 일정 지우기" on public.trips for delete to authenticated
  using (user_id = auth.uid());

-- 고친 시각 · 처음 공개한 시각 자동 기록
create function public.touch_trip() returns trigger
language plpgsql set search_path = ''
as $$
begin
  new.updated_at := now();
  if new.visibility = 'public' and new.published_at is null then
    new.published_at := now();
  end if;
  return new;
end;
$$;

create trigger trips_touch
  before insert or update on public.trips
  for each row execute function public.touch_trip();

------------------------------------------------------------
-- 댓글: 공개 일정에만 달 수 있음
------------------------------------------------------------
create table public.comments (
  id uuid primary key default gen_random_uuid(),
  trip_id uuid not null references public.trips (id) on delete cascade,
  user_id uuid not null default auth.uid() references public.profiles (id) on delete cascade,
  body text not null check (char_length(btrim(body)) between 1 and 1000),
  created_at timestamptz not null default now()
);

create index comments_trip_idx on public.comments (trip_id, created_at);

alter table public.comments enable row level security;

-- 볼 수 있는 일정(공개 또는 내 일정)의 댓글만 읽기
create policy "볼 수 있는 일정의 댓글 읽기" on public.comments for select
  using (exists (select 1 from public.trips t where t.id = trip_id and (t.visibility = 'public' or t.user_id = auth.uid())));
create policy "공개 일정에 댓글 쓰기" on public.comments for insert to authenticated
  with check (user_id = auth.uid()
    and exists (select 1 from public.trips t where t.id = trip_id and t.visibility = 'public'));
-- 내 댓글, 또는 내 일정에 달린 댓글은 지울 수 있다
create policy "내 댓글이나 내 일정의 댓글 지우기" on public.comments for delete to authenticated
  using (user_id = auth.uid()
    or exists (select 1 from public.trips t where t.id = trip_id and t.user_id = auth.uid()));
