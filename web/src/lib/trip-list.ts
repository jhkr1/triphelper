import { dateParts, nightsBetween } from "@/lib/trip-model";
import type { TripMeta } from "@/lib/trip-sync";

/*
 * 내 여행 목록 화면 (/trips/): 마지막으로 고친 여행 하나를 "이어서 짜기"로 크게,
 * 나머지는 다가오는 여행 · 날짜 안 정한 여행 · 지난 여행으로 나눈다.
 */

export interface TripGroups {
  resume: TripMeta | null;
  upcoming: TripMeta[];
  undated: TripMeta[];
  past: TripMeta[];
}

/** list는 최근에 고친 것부터 (listMyTrips 순서) */
export function groupTrips(list: TripMeta[], today: string): TripGroups {
  const [resume = null, ...rest] = list;
  const dated = rest.filter((t) => !t.datesUnset && t.start);
  return {
    resume,
    upcoming: dated.filter((t) => (t.end || t.start) >= today).sort((a, b) => a.start.localeCompare(b.start)),
    undated: rest.filter((t) => t.datesUnset || !t.start),
    past: dated.filter((t) => (t.end || t.start) < today).sort((a, b) => b.start.localeCompare(a.start)),
  };
}

/** 출발까지 남은 날 (D-7 → 7, 여행 중이면 0, 지났으면 음수) */
export function daysUntil(start: string, today: string): number {
  return nightsBetween(today, start);
}

/** "D-7" · "D-DAY" · "여행 중" · null(지난 여행) */
export function ddayLabel(t: Pick<TripMeta, "start" | "end" | "datesUnset">, today: string): string | null {
  if (t.datesUnset || !t.start) return null;
  const n = daysUntil(t.start, today);
  if (n > 0) return `D-${n}`;
  if (n === 0) return "D-DAY";
  return (t.end || t.start) >= today ? "여행 중" : null;
}

/** "12월 4일(금) – 8일(화), 4박 5일" · 날짜 미정이면 "날짜 미정, 3박 4일" */
export function rangeLabel(t: Pick<TripMeta, "start" | "end" | "datesUnset" | "nights">): string {
  const n = t.datesUnset || !t.start || !t.end ? t.nights : nightsBetween(t.start, t.end);
  const length = n ? `${n}박 ${n + 1}일` : "당일";
  if (t.datesUnset || !t.start) return `날짜 미정, ${length}`;
  const a = dateParts(t.start), b = dateParts(t.end || t.start);
  const from = `${a.m}월 ${a.d}일(${a.w})`;
  const to = a.y !== b.y ? `${b.y}년 ${b.m}월 ${b.d}일(${b.w})` : a.m !== b.m ? `${b.m}월 ${b.d}일(${b.w})` : `${b.d}일(${b.w})`;
  return n ? `${from} – ${to}, ${length}` : `${from}, ${length}`;
}
