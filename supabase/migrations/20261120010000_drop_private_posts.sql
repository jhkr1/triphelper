-- 게시글의 '나만 보기'를 없앤다: 혼자 보는 일정은 이미 '내 여행'에 있고,
-- 게시판에 올렸는데 목록에 안 보이는 혼란만 생긴다. 공개 범위는 전체 공개 · 링크 공유 두 가지.
-- 이미 '나만 보기'인 글은 '링크 공유'로 (링크는 글쓴이만 알고 있으므로 지금처럼 남에게 안 보인다)

update public.posts set visibility = 'unlisted' where visibility = 'private';

alter table public.posts drop constraint posts_visibility_check;
alter table public.posts add constraint posts_visibility_check check (visibility in ('public', 'unlisted'));
