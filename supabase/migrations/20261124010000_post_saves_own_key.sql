-- post_saves의 기본 키가 (user_id, post_id)이면 API(PostgREST)가 이 표를 posts↔profiles '다대다 연결표'로 본다.
-- 그러면 posts에서 profiles(...)를 붙이는 기존 게시판 목록이 "관계가 둘"이라며 실패한다 (PGRST201).
-- comments처럼 자체 번호를 기본 키로 두고, 한 사람이 같은 글을 두 번 저장하지 못하게 하는 건 unique로 한다.

alter table public.post_saves drop constraint post_saves_pkey;
alter table public.post_saves add column id bigint generated always as identity primary key;
alter table public.post_saves add constraint post_saves_user_post_key unique (user_id, post_id);

notify pgrst, 'reload schema';
