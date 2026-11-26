#!/bin/sh
# Supabase Edge Function 올리기 (supabase/functions/ 아래 함수)
# 준비 (처음 한 번):
#   1) Supabase 대시보드 → 오른쪽 위 계정 → Account preferences → Access Tokens → Generate new token
#   2) supabase/.env 에 한 줄 추가 (이 파일은 git에 올라가지 않는다)
#        SUPABASE_ACCESS_TOKEN=sbp_...
#   프로젝트 ref는 web/.env.local 의 NEXT_PUBLIC_SUPABASE_URL (https://<ref>.supabase.co) 에서 읽는다.
# 사용:
#   sh scripts/fn-deploy.sh                    모든 함수
#   sh scripts/fn-deploy.sh resolve-map-link   하나만
# 로그인 확인은 함수 안에서 직접 한다 (공개 키 sb_publishable_ 는 JWT가 아니라 --no-verify-jwt)
set -e
cd "$(dirname "$0")/.."
[ -f supabase/.env ] || { echo "supabase/.env 파일이 없어요"; exit 1; }
. ./supabase/.env
SUPABASE_ACCESS_TOKEN=$(printf %s "$SUPABASE_ACCESS_TOKEN" | tr -d '\r') # 윈도우 줄바꿈(CRLF)이면 끝의 \r 제거
[ -n "$SUPABASE_ACCESS_TOKEN" ] || { echo "supabase/.env 에 SUPABASE_ACCESS_TOKEN 을 넣어 주세요 (맨 위 설명 참고)"; exit 1; }
ref=$(sed -n 's#^NEXT_PUBLIC_SUPABASE_URL=https://\([a-z0-9]*\)\.supabase\.co.*#\1#p' web/.env.local | tr -d '\r')
[ -n "$ref" ] || { echo "web/.env.local 에서 프로젝트 주소를 찾지 못했어요"; exit 1; }
MSYS_NO_PATHCONV=1 docker exec -w /app -e SUPABASE_ACCESS_TOKEN="$SUPABASE_ACCESS_TOKEN" triphelper-dev \
  npx --yes supabase@2 functions deploy "$@" --project-ref "$ref" --no-verify-jwt --use-api
