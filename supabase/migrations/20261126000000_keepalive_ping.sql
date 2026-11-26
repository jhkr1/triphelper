-- 무료 요금제 일시 정지 막기: GitHub Actions(.github/workflows/keepalive.yml)가 며칠마다 부르는 아주 작은 함수.
-- 로그인 없이(공개 키) 부를 수 있어야 하는데, 공개 키로 읽을 수 있는 표가 없어서 따로 둔다.
-- 아무 데이터도 읽거나 바꾸지 않고 1만 돌려준다 (DB까지 요청이 닿기만 하면 된다).
create function public.ping() returns int
language sql stable set search_path = ''
as $$ select 1 $$;

revoke all on function public.ping() from public;
grant execute on function public.ping() to anon, authenticated;
