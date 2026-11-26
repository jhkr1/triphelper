-- 주간 현황: 항목별 전체 · 최근 7일 · 그 전 7일 (sh scripts/stats.sh)
-- 운영자가 올린 추천 동선(닉네임 TripHelper)은 '사용자 게시글'에서 뺀다.
-- db-sql.sh는 한 문장만 실행하므로 하나의 select로 만든다. 읽기만 한다.
with
  op as (select id from public.profiles where nickname = 'TripHelper'),
  w as (select now() - interval '7 days' as d7, now() - interval '14 days' as d14),
  items(ord, item) as (values
    (1, '가입자'), (2, '일정을 고친 사람(명)'), (3, '새 일정'), (4, '사용자 게시글'), (5, '댓글'),
    (6, '글 저장'), (7, '함께 짜기 초대 링크'), (8, '함께 짜기 참여'), (9, '보기 링크')),
  rows as (
              select 1 as ord, created_at as at, null::uuid as who from auth.users
    union all select 2, updated_at, user_id from public.trips -- 일정의 마지막 고친 시각 (멤버가 고친 것도 주인 일정으로 셈)
    union all select 3, created_at, null from public.trips
    union all select 4, created_at, null from public.posts where user_id not in (select id from op)
    union all select 5, created_at, null from public.comments
    union all select 6, created_at, null from public.post_saves
    union all select 7, created_at, null from public.trip_invites
    union all select 8, joined_at, null from public.trip_members
    union all select 9, created_at, null from public.trip_view_links
  )
select i.item as "항목",
       -- 2번은 사람 수(같은 사람의 여러 일정은 한 명), 나머지는 건수
       case when i.ord = 2 then count(distinct r.who) else count(r.ord) end as "전체",
       case when i.ord = 2 then count(distinct r.who) filter (where r.at >= w.d7) else count(r.ord) filter (where r.at >= w.d7) end as "최근 7일",
       case when i.ord = 2 then count(distinct r.who) filter (where r.at >= w.d14 and r.at < w.d7)
            else count(r.ord) filter (where r.at >= w.d14 and r.at < w.d7) end as "그 전 7일"
  from items i cross join w
  left join rows r on r.ord = i.ord
 group by i.ord, i.item, w.d7, w.d14
 order by i.ord
