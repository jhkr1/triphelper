#!/bin/sh
# 개발 서버 다시 켜기 (파일 변경은 폴링으로 감지: next.config.ts의 NEXT_POLL)
# 사용: sh scripts/dev.sh [미리 열어 둘 경로, 기본 /]
#   예) sh scripts/dev.sh /trip/
# 지운 페이지가 타입 검사에 남지 않게 .next/dev/types도 비운다
# Turbopack 디스크 캐시(.next/dev/cache)도 비운다: 꼬인 캐시를 다시 불러와 개발 서버가 멈추는 일이 있었다
# ("task is missing in memory or persistent storage"). 다시 켠 직후 첫 컴파일만 몇 초 느려진다.
docker exec triphelper-dev sh -c 'pkill -f "next dev"; pkill -f next-server; rm -rf /app/web/.next/dev/types /app/web/.next/dev/cache' 2>/dev/null
MSYS_NO_PATHCONV=1 docker exec -d -w /app/web -e NEXT_POLL=1 triphelper-dev sh -c 'npm run dev > /tmp/next-dev.log 2>&1'
i=0
until curl -s -o /dev/null http://localhost:3000/ || [ $i -ge 40 ]; do i=$((i+1)); sleep 1; done
# 첫 컴파일을 미리 끝내 두어 브라우저에서 기다리지 않게
curl -s -o /dev/null -w "dev ${1:-/} %{http_code}\n" "http://localhost:3000${1:-/}"
