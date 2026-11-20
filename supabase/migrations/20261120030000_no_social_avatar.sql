-- 프로필 사진: 소셜 계정(카카오) 사진을 받지도 저장하지도 않는다.
-- 실제 얼굴이 게시판·댓글에 드러나지 않게, 기본 그림(사이트가 정하는 여행 캐릭터)을 쓴다.
-- avatar_url 칸은 나중에 직접 올린 사진용으로 남겨 둔다 (지금은 사용자가 고칠 수 없음).

-- 새 회원: 무작위 닉네임만
create or replace function public.handle_new_user() returns trigger
language plpgsql security definer set search_path = ''
as $$
begin
  insert into public.profiles (id, nickname) values (new.id, public.random_nickname());
  return new;
end;
$$;

-- 다시 로그인할 때 사진을 가져오던 동작 없애기
drop trigger if exists on_auth_user_updated on auth.users;
drop function if exists public.sync_profile_from_auth();

-- 이미 저장된 소셜 사진 주소 지우기 (프로필, 그리고 로그인 정보에 남은 사본)
update public.profiles set avatar_url = null where avatar_url is not null;
update auth.users
   set raw_user_meta_data = raw_user_meta_data - 'avatar_url' - 'picture'
 where raw_user_meta_data ?| array['avatar_url', 'picture'];
update auth.identities
   set identity_data = identity_data - 'avatar_url' - 'picture'
 where identity_data ?| array['avatar_url', 'picture'];
