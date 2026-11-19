-- 공개 전 보안 보강
-- 1) 시각은 DB가 정한다: 게시한 시각·만든 시각을 사용자가 조작해 게시판 맨 위에 고정하지 못하게
-- 2) 용량 제한: 일정 크기·개수, 댓글 쓰는 속도
-- 3) 사용자가 고칠 수 있는 칸을 좁힌다: 프로필은 닉네임만, 일정은 내용·공개 여부만

------------------------------------------------------------
-- 1) 시각
------------------------------------------------------------
create or replace function public.touch_trip() returns trigger
language plpgsql set search_path = ''
as $$
begin
  new.updated_at := now();
  if tg_op = 'INSERT' then
    new.created_at := now();
    new.published_at := case when new.visibility = 'public' then now() end;
  else
    new.created_at := old.created_at;
    -- 처음 공개한 시각은 한 번 정해지면 그대로 (비공개로 돌렸다 다시 공개해도 맨 위로 올라가지 않음)
    new.published_at := coalesce(old.published_at, case when new.visibility = 'public' then now() end);
  end if;
  return new;
end;
$$;

------------------------------------------------------------
-- 2) 용량 제한
------------------------------------------------------------
-- 일정 하나는 200KB까지 (보통 일정은 수 KB)
alter table public.trips add constraint trips_data_size check (octet_length(data::text) <= 200000);

-- 한 사람이 가진 일정은 100개까지
create function public.limit_trips() returns trigger
language plpgsql set search_path = ''
as $$
begin
  if (select count(*) from public.trips where user_id = new.user_id) >= 100 then
    raise exception '일정은 한 사람당 100개까지 저장할 수 있습니다.' using errcode = 'P0001';
  end if;
  return new;
end;
$$;

create trigger trips_limit
  before insert on public.trips
  for each row execute function public.limit_trips();

-- 댓글: 시각은 DB가 정하고, 1분에 5개 · 하루 200개까지
create function public.guard_comment() returns trigger
language plpgsql set search_path = ''
as $$
begin
  new.created_at := now();
  if (select count(*) from public.comments where user_id = new.user_id and created_at > now() - interval '1 minute') >= 5 then
    raise exception '댓글을 너무 빨리 쓰고 있어요. 잠시 뒤 다시 시도해 주세요.' using errcode = 'P0001';
  end if;
  if (select count(*) from public.comments where user_id = new.user_id and created_at > now() - interval '1 day') >= 200 then
    raise exception '오늘 쓸 수 있는 댓글 수를 넘었습니다.' using errcode = 'P0001';
  end if;
  return new;
end;
$$;

create trigger comments_guard
  before insert on public.comments
  for each row execute function public.guard_comment();

------------------------------------------------------------
-- 3) 고칠 수 있는 칸 제한 (열 단위 권한)
------------------------------------------------------------
-- 프로필: 닉네임만 (사진 주소는 로그인할 때 DB가 소셜 계정에서 가져온 값만)
revoke update on public.profiles from anon, authenticated;
grant update (nickname) on public.profiles to authenticated;
alter table public.profiles add constraint profiles_nickname_trim check (nickname = btrim(nickname));

-- 일정: 내용·공개 여부만 (주인·시각은 못 바꿈)
revoke insert, update on public.trips from anon, authenticated;
grant insert (title, country, city, nights, data, visibility) on public.trips to authenticated;
grant update (title, country, city, nights, data, visibility) on public.trips to authenticated;

-- 댓글: 쓰기는 일정·본문만, 고치기는 없음
revoke insert, update on public.comments from anon, authenticated;
grant insert (trip_id, body) on public.comments to authenticated;

-- 프로필은 가입할 때 DB가 만들고, 지우기는 회원 탈퇴(auth.users 삭제)로만
revoke insert, delete on public.profiles from anon, authenticated;
