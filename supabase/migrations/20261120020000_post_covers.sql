-- 게시판 카드의 대표 사진: 올릴 때 장소 사진(위키백과) 주소를 최대 3장 골라 둔다.
-- 아무 주소나 넣어 방문자를 추적하지 못하게 위키미디어 사진 주소만 받는다.

create or replace function public.valid_covers(c text[]) returns boolean
language sql immutable set search_path = ''
as $$
  select cardinality(c) <= 3
     and coalesce(bool_and(length(u) <= 500 and u ~ '^https://(upload|thumb)\.wikimedia\.org/[^\s"''<>]+$'), true)
    from unnest(c) as u
$$;

alter table public.posts add column covers text[] not null default '{}'
  constraint posts_covers_check check (public.valid_covers(covers));

grant insert (covers) on public.posts to authenticated;
grant update (covers) on public.posts to authenticated;
