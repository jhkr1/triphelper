#!/bin/sh
# 주간 현황 보기: 가입자 · 일정 · 게시글 · 댓글 · 함께 짜기 등 (전체 / 최근 7일 / 그 전 7일)
# 사용: sh scripts/stats.sh
# DB에서 읽기만 한다 (supabase/.env 의 SUPABASE_DB_URL 필요). 내용은 scripts/sql/stats.sql
set -e
cd "$(dirname "$0")/.."
echo "TripHelper 현황 · $(date '+%Y-%m-%d %H:%M')"
sh scripts/db-sql.sh scripts/sql/stats.sql | grep -v "^Connecting"
