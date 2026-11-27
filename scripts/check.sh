#!/bin/sh
# 타입 검사 + 린트 + 단위 테스트 (Node는 Docker 컨테이너 triphelper-dev 안에서만 돈다)
# 통과하면 "OK" 한 줄, 실패하면 오류만 출력한다.
MSYS_NO_PATHCONV=1 docker exec -w /app/web triphelper-dev sh -c '
  npx tsc --noEmit -p . && npx eslint src --quiet &&
  { out=$(npx vitest run --reporter=dot 2>&1) || { echo "$out"; exit 1; }; }
' && echo OK
status=$?
# 개발 서버(Turbopack)가 고장 났으면 알려 준다. 고장 나도 서버는 켜져 있어 화면 이동만 조용히 안 되는 일이 있었다.
# (로그는 dev.sh로 다시 켤 때마다 새로 쓰므로 지금 켜진 서버의 기록만 본다)
if MSYS_NO_PATHCONV=1 docker exec triphelper-dev grep -qs "An unexpected Turbopack error" /tmp/next-dev.log 2>/dev/null; then
  echo "주의: 개발 서버가 고장 났어요 (Turbopack 오류) → sh scripts/dev.sh 로 다시 켜세요"
fi
exit $status
