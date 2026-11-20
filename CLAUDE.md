# TripHelper

여행 플래너 + 나라별 여행 동선 게시판. 사용자 대상 문구는 모두 한국어(언어 전환 없음).

## 구조
- `web/` Next.js 16 (App Router, `output: "export"` 정적 사이트, trailingSlash) + React 19 + TypeScript. Netlify 배포(base `web`, publish `out`).
  - Next 16은 예전과 다르다: 코드 쓰기 전에 컨테이너의 `node_modules/next/dist/docs/` 해당 문서를 읽는다 (`web/AGENTS.md`).
  - `src/app/` 페이지: `/` 지구본, `/destinations/[slug]/`, `/trip/` 플래너, `/board/` 게시판, `/board/post/?c=코드` 글 보기
  - `src/components/{trip,board,destination,home,layout,ui}`, `src/lib/` (상태·DB·외부 API)
  - `src/data/destinations.ts` 나라 데이터(8천 줄, 검색 제외됨 `.ignore`)
- `supabase/migrations/` DB 변경 (RLS·열 단위 권한·security definer RPC). 파일명 `YYYYMMDDHHMMSS_이름.sql`
- 서버 없음: 데이터는 브라우저에서 Supabase(supabase-js)로 직접. 비밀값은 `web/.env.local`(커밋 금지).

## 명령 (호스트에는 Node가 없다. Node는 Docker 컨테이너 `triphelper-dev`에서만)
- 검사: `sh scripts/check.sh` → 통과하면 `OK` 한 줄
- 개발 서버 다시 켜기: `sh scripts/dev.sh [/경로/]` (http://localhost:3000)
  - 파일 수정은 폴링으로 자동 반영. **새 페이지 폴더를 추가했을 때만** 다시 켠다.
  - 페이지를 지운 뒤 check.sh가 `.next/dev/types` 오류를 내면 dev.sh로 다시 켠다 (그 폴더를 비운다)
- DB 마이그레이션: `sh scripts/db-push.sh --dry-run` → `sh scripts/db-push.sh` (`supabase/.env`의 `SUPABASE_DB_URL` 필요)
- git push는 사용자가 직접 한다. 커밋은 main에.

## 규칙
- 게시판 글은 일정의 '사본'. 공개 범위는 public / unlisted 두 가지. 링크 공유 글·댓글은 공유 코드로 RPC(`get_post`, `get_comments`)를 통해서만 읽는다.
- 프로필: 소셜 계정 사진을 받거나 저장하지 않는다. 기본 그림은 `components/ui/UserAvatar.tsx`.
- 아이콘: `components/ui/Icon.tsx` (사이트 전용 그림은 `TripIcon.tsx`). 글자가 있는 버튼에는 아이콘을 붙이지 않는다(링크 공유·복사는 예외).
- 사용자가 입력하는 키·비밀번호를 대신 입력하지 않는다.
