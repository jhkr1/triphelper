-- 닉네임은 소셜 계정 이름 대신 무작위 "~한 여행자 / ~한 방랑자 …"로 정한다 (형용사 40 × 이름 10 = 400가지).
-- 실명이 게시판에 드러나지 않게 하고, 귀엽게. 사진만 소셜 계정에서 가져온다.

create or replace function public.random_nickname() returns text
language sql volatile set search_path = ''
as $$
  select (array[
    '설레는', '느긋한', '용감한', '호기심 많은', '부지런한', '즐거운', '씩씩한', '상냥한', '배고픈', '졸린',
    '신나는', '엉뚱한', '행복한', '반짝이는', '수줍은', '낭만적인', '자유로운', '든든한', '꼼꼼한', '대담한',
    '산뜻한', '포근한', '명랑한', '다정한', '느릿느릿한', '두근두근한', '말랑한', '깜찍한', '여유로운', '용기 있는',
    '들뜬', '꿈꾸는', '노래하는', '산책하는', '길 잃은', '사진 찍는', '맛집 찾는', '짐 싸는', '창가 자리의', '햇살 같은'
  ])[1 + floor(random() * 40)::int]
  || ' ' ||
  (array['여행자', '방랑자', '모험가', '탐험가', '나그네', '배낭여행자', '산책가', '유랑자', '길동무', '순례자'])[1 + floor(random() * 10)::int]
$$;

-- 새 회원: 무작위 닉네임 + 소셜 계정 사진
create or replace function public.handle_new_user() returns trigger
language plpgsql security definer set search_path = ''
as $$
begin
  insert into public.profiles (id, nickname, avatar_url)
  values (
    new.id,
    public.random_nickname(),
    coalesce(new.raw_user_meta_data ->> 'avatar_url', new.raw_user_meta_data ->> 'picture')
  );
  return new;
end;
$$;

-- 다시 로그인할 때는 사진만 최신으로 (닉네임은 그대로)
create or replace function public.sync_profile_from_auth() returns trigger
language plpgsql security definer set search_path = ''
as $$
begin
  update public.profiles p
     set avatar_url = coalesce(new.raw_user_meta_data ->> 'avatar_url', new.raw_user_meta_data ->> 'picture', p.avatar_url)
   where p.id = new.id;
  return new;
end;
$$;

alter table public.profiles alter column nickname set default public.random_nickname();

-- 이미 '여행자'로 가입한 회원도 무작위 닉네임으로
update public.profiles set nickname = public.random_nickname() where nickname = '여행자';
