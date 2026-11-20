-- 보기 전용 링크: 원본 일정(trips)에 공유 코드를 붙여, 받은 사람이 로그인 없이 "지금의" 일정을 본다.
-- - 사본을 만들지 않는다: 주인이 고치면 링크로 보는 내용도 바뀐다
-- - 일정마다 링크는 하나. 주인만 만들고(trip_view_link) 끄거나(remove_trip_view_link) 새 코드로 바꾼다(renew)
-- - 받은 사람은 추측할 수 없는 코드로 get_shared_trip()을 불러야만 읽는다 (표를 직접 읽을 수 없음)
-- - 준비물(trip_checklists)과 여행지 바구니(data.basket)는 보여 주지 않는다
-- trips에 열을 두지 않는 이유: trips를 고치면 updated_at이 바뀌어 함께 짜는 일정의 저장 충돌 검사가 헛돈다

create table public.trip_view_links (
  trip_id uuid primary key references public.trips (id) on delete cascade,
  code text not null unique default replace(replace(replace(encode(extensions.gen_random_bytes(12), 'base64'), '+', '-'), '/', '_'), '=', ''),
  created_at timestamptz not null default now()
);

alter table public.trip_view_links enable row level security;
-- 같은 일정의 사람들(주인 · 멤버)은 링크를 보고 복사할 수 있다
create policy "일정 사람들이 보기 링크 보기" on public.trip_view_links for select to authenticated
  using (public.trip_role(trip_id) is not null);
revoke all on public.trip_view_links from public, anon, authenticated;
grant select on public.trip_view_links to authenticated;

-- 링크 만들기 (이미 있으면 그대로, renew면 새 코드로 바꿔 예전 링크를 막는다). 주인만
create function public.trip_view_link(t uuid, renew boolean default false) returns text
language plpgsql security definer set search_path = ''
as $$
declare c text;
begin
  if auth.uid() is null or public.trip_role(t) is distinct from 'owner' then
    raise exception '일정 주인만 보기 링크를 만들 수 있어요.' using errcode = 'P0001';
  end if;
  if renew then delete from public.trip_view_links where trip_id = t; end if;
  insert into public.trip_view_links (trip_id) values (t) on conflict (trip_id) do nothing;
  select code into c from public.trip_view_links where trip_id = t;
  return c;
end;
$$;
revoke all on function public.trip_view_link(uuid, boolean) from public, anon;
grant execute on function public.trip_view_link(uuid, boolean) to authenticated;

-- 링크 끄기. 주인만
create function public.remove_trip_view_link(t uuid) returns void
language plpgsql security definer set search_path = ''
as $$
begin
  if auth.uid() is null or public.trip_role(t) is distinct from 'owner' then
    raise exception '일정 주인만 보기 링크를 끌 수 있어요.' using errcode = 'P0001';
  end if;
  delete from public.trip_view_links where trip_id = t;
end;
$$;
revoke all on function public.remove_trip_view_link(uuid) from public, anon;
grant execute on function public.remove_trip_view_link(uuid) to authenticated;

-- 링크로 보기 (로그인 없이). 일정 id·주인 id는 내보내지 않는다
create function public.get_shared_trip(code text)
returns table (country text, city text, nights int, data jsonb, updated_at timestamptz, nickname text, avatar_url text)
language sql stable security definer set search_path = ''
as $$
  select t.country, t.city, t.nights, t.data - 'basket' - 'checklist', t.updated_at, p.nickname, p.avatar_url
    from public.trip_view_links l
    join public.trips t on t.id = l.trip_id
    join public.profiles p on p.id = t.user_id
   where l.code = get_shared_trip.code
$$;
revoke all on function public.get_shared_trip(text) from public;
grant execute on function public.get_shared_trip(text) to anon, authenticated;
