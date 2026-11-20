#!/bin/sh
# SQL 파일을 Supabase DB에 실행 (확인·조회용. 스키마 변경은 마이그레이션 + db-push.sh로)
# 사용: sh scripts/db-sql.sh 파일.sql
# 접속 주소는 supabase/.env의 SUPABASE_DB_URL (출력에서 비밀번호는 가린다)
set -e
cd "$(dirname "$0")/.."
[ -f "$1" ] || { echo "SQL 파일을 지정해 주세요"; exit 1; }
. ./supabase/.env
docker cp "$1" triphelper-dev:/tmp/db-sql.sql >/dev/null
MSYS_NO_PATHCONV=1 docker exec -w /app triphelper-dev npx --yes supabase@2 db query --db-url "$SUPABASE_DB_URL" -f /tmp/db-sql.sql 2>&1 \
  | grep -v "new version of Supabase CLI\|recommend updating" | sed "s#postgres\.[a-z0-9]*:[^@]*@#<db>@#g"
