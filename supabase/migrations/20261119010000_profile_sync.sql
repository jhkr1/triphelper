-- 소셜 계정 정보(닉네임·사진)가 나중에 들어오면 프로필에도 반영한다.
-- 예: 처음엔 카카오 동의항목이 없어 '여행자'로 가입 → 동의항목을 켠 뒤 다시 로그인하면 카카오 닉네임으로 바뀜.
-- 사진은 항상 최신으로, 닉네임은 아직 기본값('여행자')일 때만 바꾼다 (나중에 직접 바꾼 닉네임은 지키기 위해).

create function public.sync_profile_from_auth() returns trigger
language plpgsql security definer set search_path = ''
as $$
declare
  nick text := left(coalesce(
    nullif(new.raw_user_meta_data ->> 'nickname', ''),
    nullif(new.raw_user_meta_data ->> 'name', ''),
    nullif(new.raw_user_meta_data ->> 'full_name', ''),
    nullif(new.raw_user_meta_data ->> 'user_name', '')
  ), 30);
  pic text := coalesce(new.raw_user_meta_data ->> 'avatar_url', new.raw_user_meta_data ->> 'picture');
begin
  update public.profiles p
     set nickname = case when p.nickname = '여행자' and nick is not null then nick else p.nickname end,
         avatar_url = coalesce(pic, p.avatar_url)
   where p.id = new.id;
  return new;
end;
$$;

create trigger on_auth_user_updated
  after update of raw_user_meta_data on auth.users
  for each row
  when (old.raw_user_meta_data is distinct from new.raw_user_meta_data)
  execute function public.sync_profile_from_auth();
