#!/bin/sh
# Supabase 마이그레이션 적용 (브라우저 SQL 편집기 대신)
# 준비: supabase/.env 파일에 아래 한 줄 (Supabase → Connect → Session pooler 주소, 비밀번호 포함)
#   SUPABASE_DB_URL=postgresql://postgres.xxxx:비밀번호@aws-0-xx.pooler.supabase.com:5432/postgres
# 사용:
#   sh scripts/db-push.sh --dry-run   적용할 마이그레이션 목록만 보기
#   sh scripts/db-push.sh             적용
#   sh scripts/db-push.sh --repair    (처음 한 번) 이미 손으로 적용한 마이그레이션을 '적용됨'으로 기록
set -e
cd "$(dirname "$0")/.."
[ -f supabase/.env ] || { echo "supabase/.env 에 SUPABASE_DB_URL 을 넣어 주세요"; exit 1; }
. ./supabase/.env
[ -n "$SUPABASE_DB_URL" ] || { echo "SUPABASE_DB_URL 이 비어 있어요"; exit 1; }
run() { MSYS_NO_PATHCONV=1 docker exec -w /app triphelper-dev npx --yes supabase@2 "$@"; }
if [ "$1" = "--repair" ]; then
  versions=$(ls supabase/migrations | sed -n 's/^\([0-9]\{14\}\)_.*\.sql$/\1/p' | tr '\n' ' ')
  run migration repair --status applied $versions --db-url "$SUPABASE_DB_URL"
else
  run db push --db-url "$SUPABASE_DB_URL" "$@"
fi
