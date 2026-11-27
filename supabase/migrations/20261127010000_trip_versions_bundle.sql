-- 일정 기록을 "작업 묶음 10개"로: 같은 사람이 10분 안에 연달아 고친 저장은 기록 하나로 합치고, 일정마다 최근 10묶음만 남긴다.
-- - 합칠 때는 그 기록의 내용과 시각을 마지막 저장으로 바꾼다 (= 그 작업이 끝난 직후의 모습)
-- - 활동 기록(trip_activity)은 지워진 묶음에 이어진 것을 함께 지운다.
--   기록 기능 전에 남은 활동(version_id 없음)은 그대로 둔다 (화면에는 최근 10묶음만 보인다)
-- - 그보다 짧은 실수는 화면의 [되돌리기] · Ctrl+Z가 맡는다

create or replace function public.keep_trip_version() returns trigger
language plpgsql security definer set search_path = ''
as $$
declare
  last public.trip_versions%rowtype;
  keep_from bigint;
begin
  if tg_op = 'UPDATE' and new.data is not distinct from old.data then
    return null; -- 이름 · 공개 범위만 바뀐 저장 등
  end if;

  select * into last from public.trip_versions where trip_id = new.id order by id desc limit 1;
  if found and last.user_id is not distinct from auth.uid() and last.created_at > now() - interval '10 minutes' then
    update public.trip_versions set data = new.data, created_at = now() where id = last.id;
  else
    insert into public.trip_versions (trip_id, user_id, data) values (new.id, auth.uid(), new.data);
  end if;

  select min(id) into keep_from
    from (select id from public.trip_versions where trip_id = new.id order by id desc limit 10) last10;
  delete from public.trip_versions where trip_id = new.id and id < keep_from;
  delete from public.trip_activity
   where trip_id = new.id and version_id < keep_from;
  return null;
end;
$$;
revoke all on function public.keep_trip_version() from public, anon, authenticated;

-- 지금 쌓인 것도 같은 규칙으로 정리 (일정마다 최근 10개)
delete from public.trip_versions v
 where v.id < (select min(id) from (select id from public.trip_versions w where w.trip_id = v.trip_id order by id desc limit 10) last10);
delete from public.trip_activity a
 where a.version_id < (select min(id) from (select id from public.trip_versions w where w.trip_id = a.trip_id order by id desc limit 10) last10);
