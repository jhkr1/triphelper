-- 일정 기록: 일정 내용(data)이 바뀌어 저장될 때마다 그 시점의 일정을 남긴다 → 최근 활동의 [이때 보기] · 되돌리기
-- - 남기는 것은 DB 트리거만 한다 (브라우저가 기록을 꾸며 넣을 수 없다). 일정마다 최근 100개만 남긴다.
-- - 읽기: 그 일정의 주인 · 멤버 (활동 기록과 같다). 쓰기 · 고치기 · 지우기 권한은 아무에게도 없다.
-- - 활동 기록(trip_activity)은 저장 직후 남기므로, 남길 때 그 사람의 가장 최근 기록을 version_id로 잇는다.
-- - 준비물은 split_trip_checklist 트리거가 data에서 떼어 낸 뒤라 여기에 들어오지 않는다.

create table public.trip_versions (
  id bigint generated always as identity primary key,
  trip_id uuid not null references public.trips (id) on delete cascade,
  -- 이 내용으로 바꾼 사람 (탈퇴하면 비운다)
  user_id uuid references public.profiles (id) on delete set null,
  data jsonb not null,
  created_at timestamptz not null default now()
);
create index trip_versions_trip_idx on public.trip_versions (trip_id, id desc);
alter table public.trip_versions enable row level security;
create policy "일정 사람들이 기록 보기" on public.trip_versions for select to authenticated
  using (public.trip_role(trip_id) is not null);
revoke all on public.trip_versions from public, anon, authenticated;
grant select on public.trip_versions to authenticated;

create function public.keep_trip_version() returns trigger
language plpgsql security definer set search_path = ''
as $$
begin
  if tg_op = 'UPDATE' and new.data is not distinct from old.data then
    return null; -- 이름 · 공개 범위만 바뀐 저장 등
  end if;
  insert into public.trip_versions (trip_id, user_id, data) values (new.id, auth.uid(), new.data);
  delete from public.trip_versions
   where trip_id = new.id
     and id < (select min(id) from (select id from public.trip_versions where trip_id = new.id order by id desc limit 100) last100);
  return null;
end;
$$;
revoke all on function public.keep_trip_version() from public, anon, authenticated;
create trigger trips_keep_version after insert or update of data on public.trips
  for each row execute function public.keep_trip_version();

-- 지금 있는 일정은 지금 모습을 첫 기록으로
insert into public.trip_versions (trip_id, user_id, data, created_at)
  select id, user_id, data, updated_at from public.trips;

-- 활동 기록 ↔ 그 저장으로 남은 일정 기록
alter table public.trip_activity
  add column version_id bigint references public.trip_versions (id) on delete set null;

create or replace function public.stamp_activity() returns trigger
language plpgsql security definer set search_path = ''
as $$
begin
  new.created_at := now();
  new.version_id := (select id from public.trip_versions
                      where trip_id = new.trip_id and user_id = auth.uid()
                      order by id desc limit 1);
  return new;
end;
$$;
revoke all on function public.stamp_activity() from public, anon, authenticated;
