// 테스트용 일정 만들기 (*.test.ts 에서만 쓴다)
import type { Place, Trip } from "@/types/trip";

export const place = (id: string, time = "10:00", extra: Partial<Place> = {}): Place => ({ id, time, name: `장소 ${id}`, category: "명소", ...extra });

export function trip(days: Place[][], extra: Partial<Trip> = {}): Trip {
  return {
    country: "thailand",
    city: "방콕",
    center: { lat: 13.75, lng: 100.5 },
    start: "2026-12-04",
    end: `2026-12-${String(3 + days.length).padStart(2, "0")}`,
    days: days.map((places) => ({ places })),
    basket: [],
    checklist: { bags: {}, done: [] },
    ...extra,
  };
}
