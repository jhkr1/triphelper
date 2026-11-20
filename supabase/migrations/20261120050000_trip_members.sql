-- 함께 짜는 일정: 주인이 초대 링크를 보내면 받은 사람이 멤버(편집 · 보기만)가 된다.
-- - 일정 읽기: 주인 + 멤버 / 고치기: 주인 + 편집 멤버 / 지우기: 주인만
-- - 준비물(체크리스트)은 사람마다 따로: 주인 것은 trips.data 안, 멤버 것은 trip_members.checklist
-- - 활동 기록: "누가 무엇을 했는지" (일정마다 최근 200개)

------------------------------------------------------------
-- 멤버 (주인은 trips.user_id라 여기에 없다)
------------------------------------------------------------
create table public.trip_members (
  trip_id uuid not null references public.trips (id) on delete cascade,
  user_id uuid not null references public.profiles (id) on delete cascade,
  role text not null check (role in ('editor', 'viewer')),
  checklist jsonb,
  joined_at timestamptz not null default now(),
  primary key (trip_id, user_id),
  constraint trip_members_checklist_size check (checklist is null or octet_length(checklist::text) <= 50000)
);
create index trip_members_user_idx on public.trip_members (user_id);

-- 권한 확인 함수 (정책 안에서 표끼리 서로 부르며 맴돌지 않게 security definer)
create function public.trip_role(t uuid) returns text
language sql stable security definer set search_path = ''
as $$
  select case
    when exists (select 1 from public.trips where id = t and user_id = auth.uid()) then 'owner'
    else (select role from public.trip_members where trip_id = t and user_id = auth.uid())
  end
$$;
revoke all on function public.trip_role(uuid) from public;
grant execute on function public.trip_role(uuid) to authenticated;

alter table public.trip_members enable row level security;
-- 같은 일정의 사람들끼리는 멤버 목록을 본다
create policy "같은 일정 멤버 보기" on public.trip_members for select to authenticated
  using (public.trip_role(trip_id) is not null);
-- 내 준비물만 고친다
create policy "내 준비물 고치기" on public.trip_members for update to authenticated
  using (user_id = auth.uid()) with check (user_id = auth.uid());
-- 주인은 멤버를 내보내고, 멤버는 스스로 나간다
create policy "멤버 내보내기 · 나가기" on public.trip_members for delete to authenticated
  using (user_id = auth.uid() or public.trip_role(trip_id) = 'owner');
-- 주인은 멤버 권한(편집 · 보기만)을 바꾼다
create policy "멤버 권한 바꾸기" on public.trip_members for update to authenticated
  using (public.trip_role(trip_id) = 'owner') with check (public.trip_role(trip_id) = 'owner');

revoke all on public.trip_members from anon;
revoke insert, update on public.trip_members from authenticated;
grant update (checklist, role) on public.trip_members to authenticated;
-- 멤버는 자기 권한을 못 올리고, 주인은 남의 준비물을 못 고친다
create function public.guard_member() returns trigger
language plpgsql set search_path = ''
as $$
begin
  if new.user_id = auth.uid() then
    new.role := old.role;
  else
    new.checklist := old.checklist;
  end if;
  return new;
end;
$$;
create trigger trip_members_guard before update on public.trip_members
  for each row execute function public.guard_member();

------------------------------------------------------------
-- 일정 권한: 주인 + 멤버
------------------------------------------------------------
drop policy "내 일정만 읽기" on public.trips;
create policy "내 일정이나 함께 짜는 일정 읽기" on public.trips for select to authenticated
  using (user_id = auth.uid() or public.trip_role(id) is not null);
drop policy "내 일정 고치기" on public.trips;
create policy "주인이나 편집 멤버가 고치기" on public.trips for update to authenticated
  using (public.trip_role(id) in ('owner', 'editor'))
  with check (public.trip_role(id) in ('owner', 'editor'));

-- 멤버가 저장해도 주인의 준비물(data.checklist)은 그대로 둔다
create function public.keep_owner_checklist() returns trigger
language plpgsql set search_path = ''
as $$
begin
  if auth.uid() is distinct from old.user_id then
    new.data := jsonb_set(new.data, '{checklist}', coalesce(old.data -> 'checklist', '{"bags":{},"done":[]}'::jsonb));
  end if;
  return new;
end;
$$;
create trigger trips_keep_owner_checklist before update on public.trips
  for each row execute function public.keep_owner_checklist();

------------------------------------------------------------
-- 초대 링크 (주인만 만들고 지운다. 받은 사람은 accept_invite로만 쓴다)
------------------------------------------------------------
create table public.trip_invites (
  code text primary key default replace(replace(replace(encode(extensions.gen_random_bytes(12), 'base64'), '+', '-'), '/', '_'), '=', ''),
  trip_id uuid not null references public.trips (id) on delete cascade,
  role text not null check (role in ('editor', 'viewer')),
  created_by uuid not null default auth.uid() references public.profiles (id) on delete cascade,
  created_at timestamptz not null default now(),
  expires_at timestamptz not null default now() + interval '7 days'
);
create index trip_invites_trip_idx on public.trip_invites (trip_id);
alter table public.trip_invites enable row level security;
create policy "주인만 초대 링크 보기" on public.trip_invites for select to authenticated
  using (public.trip_role(trip_id) = 'owner');
create policy "주인만 초대 링크 만들기" on public.trip_invites for insert to authenticated
  with check (created_by = auth.uid() and public.trip_role(trip_id) = 'owner');
create policy "주인만 초대 링크 지우기" on public.trip_invites for delete to authenticated
  using (public.trip_role(trip_id) = 'owner');
revoke all on public.trip_invites from anon;
revoke insert, update on public.trip_invites from authenticated;
grant insert (trip_id, role) on public.trip_invites to authenticated;

-- 초대 받기: 코드가 맞고 만료 전이면 멤버로 넣고 일정 id를 돌려준다 (이미 멤버면 권한만 그대로)
create function public.accept_invite(invite text) returns uuid
language plpgsql security definer set search_path = ''
as $$
declare inv public.trip_invites;
begin
  if auth.uid() is null then raise exception '로그인이 필요해요.' using errcode = 'P0001'; end if;
  select * into inv from public.trip_invites where code = invite and expires_at > now();
  if inv is null then raise exception '초대 링크가 만료되었거나 잘못되었어요.' using errcode = 'P0001'; end if;
  if exists (select 1 from public.trips where id = inv.trip_id and user_id = auth.uid()) then return inv.trip_id; end if;
  if not exists (select 1 from public.trip_members where trip_id = inv.trip_id and user_id = auth.uid()) then
    if (select count(*) from public.trip_members where trip_id = inv.trip_id) >= 10 then
      raise exception '한 일정은 10명까지 함께 짤 수 있어요.' using errcode = 'P0001';
    end if;
    insert into public.trip_members (trip_id, user_id, role) values (inv.trip_id, auth.uid(), inv.role);
  end if;
  return inv.trip_id;
end;
$$;
revoke all on function public.accept_invite(text) from public;
grant execute on function public.accept_invite(text) to authenticated;

------------------------------------------------------------
-- 활동 기록
------------------------------------------------------------
create table public.trip_activity (
  id bigint generated always as identity primary key,
  trip_id uuid not null references public.trips (id) on delete cascade,
  user_id uuid not null default auth.uid() references public.profiles (id) on delete cascade,
  text text not null check (char_length(text) between 1 and 120),
  created_at timestamptz not null default now()
);
create index trip_activity_trip_idx on public.trip_activity (trip_id, created_at desc);
alter table public.trip_activity enable row level security;
create policy "일정 사람들이 활동 기록 보기" on public.trip_activity for select to authenticated
  using (public.trip_role(trip_id) is not null);
create policy "고칠 수 있는 사람이 활동 남기기" on public.trip_activity for insert to authenticated
  with check (user_id = auth.uid() and public.trip_role(trip_id) in ('owner', 'editor'));
revoke all on public.trip_activity from anon;
revoke insert, update, delete on public.trip_activity from authenticated;
grant insert (trip_id, text) on public.trip_activity to authenticated;

-- 시각은 DB가 정하고(stamp), 일정마다 최근 200개만 남긴다(prune)
create function public.prune_activity() returns trigger
language plpgsql security definer set search_path = ''
as $$
begin
  delete from public.trip_activity
   where trip_id = new.trip_id
     and id not in (select id from public.trip_activity where trip_id = new.trip_id order by created_at desc, id desc limit 200);
  return null;
end;
$$;
create function public.stamp_activity() returns trigger
language plpgsql set search_path = ''
as $$
begin
  new.created_at := now();
  return new;
end;
$$;
create trigger trip_activity_stamp before insert on public.trip_activity
  for each row execute function public.stamp_activity();
create trigger trip_activity_prune after insert on public.trip_activity
  for each row execute function public.prune_activity();

------------------------------------------------------------
-- 실시간: 다른 멤버가 저장하면 바로 알 수 있게 (행 단위 보안이 그대로 적용된다)
------------------------------------------------------------
alter publication supabase_realtime add table public.trips, public.trip_activity;
revoke all on function public.prune_activity() from public, anon, authenticated;
