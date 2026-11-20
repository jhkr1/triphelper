#!/bin/sh
# 개발 서버 다시 켜기 (파일 변경은 폴링으로 감지: next.config.ts의 NEXT_POLL)
# 사용: sh scripts/dev.sh [미리 열어 둘 경로, 기본 /]
#   예) sh scripts/dev.sh /trip/
# 지운 페이지가 타입 검사에 남지 않게 .next/dev/types도 비운다
docker exec triphelper-dev sh -c 'pkill -f "next dev"; pkill -f next-server; rm -rf /app/web/.next/dev/types' 2>/dev/null
MSYS_NO_PATHCONV=1 docker exec -d -w /app/web -e NEXT_POLL=1 triphelper-dev sh -c 'npm run dev > /tmp/next-dev.log 2>&1'
i=0
until curl -s -o /dev/null http://localhost:3000/ || [ $i -ge 40 ]; do i=$((i+1)); sleep 1; done
# 첫 컴파일을 미리 끝내 두어 브라우저에서 기다리지 않게
curl -s -o /dev/null -w "dev ${1:-/} %{http_code}\n" "http://localhost:3000${1:-/}"
