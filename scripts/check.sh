#!/bin/sh
# 타입 검사 + 린트 + 단위 테스트 (Node는 Docker 컨테이너 triphelper-dev 안에서만 돈다)
# 통과하면 "OK" 한 줄, 실패하면 오류만 출력한다.
MSYS_NO_PATHCONV=1 docker exec -w /app/web triphelper-dev sh -c '
  npx tsc --noEmit -p . && npx eslint src --quiet &&
  { out=$(npx vitest run --reporter=dot 2>&1) || { echo "$out"; exit 1; }; }
' && echo OK
