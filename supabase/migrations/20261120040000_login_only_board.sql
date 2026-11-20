-- 동선 게시판 · 내 여행은 로그인한 사람만.
-- 단, 받은 링크로 여는 글 한 건(get_post · get_comments, 공유 코드 필요)은 로그인 없이 그대로 볼 수 있다.

-- 게시글 목록: 로그인한 사람만 (전체 공개 글 + 내 글)
drop policy "전체 공개 글이나 내 글 읽기" on public.posts;
create policy "로그인한 사람: 전체 공개 글이나 내 글 읽기" on public.posts for select to authenticated
  using (visibility = 'public' or user_id = auth.uid());
revoke select on public.posts from anon;

-- 프로필(닉네임)도 로그인한 사람만. 링크로 연 글의 글쓴이·댓글 닉네임은 security definer RPC가 함께 돌려준다
drop policy "프로필은 누구나 읽기" on public.profiles;
create policy "로그인한 사람만 프로필 읽기" on public.profiles for select to authenticated using (true);
revoke select on public.profiles from anon;
