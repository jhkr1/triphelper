-- 권한 조이기: 쓰지 않는 권한을 회수한다 (지금 막혀 있는 것도 '다른 설정 하나가 어긋나면 열리는' 구멍을 남기지 않게).
-- 동작은 바뀌지 않는다: 화면에서 쓰는 읽기·쓰기는 모두 RLS 규칙과 열 단위 권한으로 따로 열려 있다.

------------------------------------------------------------
-- 1) 표 권한: Supabase 기본값으로 붙어 있던 TRUNCATE·TRIGGER·REFERENCES 회수
--    TRUNCATE(표 비우기)는 RLS를 거치지 않는다. 앱은 쓰지 않는다.
------------------------------------------------------------
revoke truncate, trigger, references on all tables in schema public from anon, authenticated;

-- 로그인하지 않은 사람에게 남아 있던 읽기·지우기 (RLS 규칙이 없어 실제로는 막혀 있었다)
revoke select, delete on public.trips from anon;
revoke delete on public.posts from anon;

-- 앞으로 만드는 표·함수에도 붙지 않게 (마이그레이션은 postgres 역할로 실행된다)
--   새 RPC 함수는 마이그레이션에서 grant execute ... to authenticated (필요하면 anon) 를 꼭 적는다
alter default privileges for role postgres in schema public
  revoke truncate, trigger, references on tables from anon, authenticated;
alter default privileges for role postgres in schema public
  revoke execute on functions from public, anon, authenticated;

------------------------------------------------------------
-- 2) 트리거 함수: 직접 부를 일이 없다 (트리거로 실행될 때는 실행 권한을 보지 않는다)
--    handle_new_user·count_* 는 관리자 권한(security definer)으로 돈다
------------------------------------------------------------
revoke execute on function
  public.handle_new_user(),
  public.count_comments(),
  public.count_post_saves(),
  public.guard_comment(),
  public.guard_post(),
  public.guard_post_save(),
  public.limit_trips(),
  public.prune_activity(),
  public.split_trip_checklist(),
  public.stamp_activity(),
  public.touch_trip()
from public, anon, authenticated;

------------------------------------------------------------
-- 3) 프로필 고치기 규칙: 다른 규칙처럼 로그인한 사람에게만 (열 권한이 이미 authenticated뿐이라 동작은 같다)
------------------------------------------------------------
alter policy "내 프로필만 고치기" on public.profiles to authenticated;
