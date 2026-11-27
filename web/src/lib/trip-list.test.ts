import { describe, expect, it } from "vitest";
import { ddayLabel, groupTrips, rangeLabel } from "@/lib/trip-list";
import type { TripMeta } from "@/lib/trip-sync";

const meta = (id: string, start: string, end: string, extra: Partial<TripMeta> = {}): TripMeta => ({
  id, title: id, country: "japan", city: "", nights: 3, updatedAt: "", role: "owner",
  start, end, datesUnset: false, dayCounts: [], stays: 0, people: [], posted: false, ...extra,
});

describe("groupTrips (내 여행 목록 묶기)", () => {
  const today = "2026-11-27";
  it("맨 앞(최근에 고친 것)은 이어서 짜기, 나머지는 다가오는 · 날짜 미정 · 지난 여행", () => {
    const g = groupTrips([
      meta("tokyo", "2026-12-04", "2026-12-08"),
      meta("osaka", "2026-09-12", "2026-09-15"),
      meta("paris", "2026-12-30", "2027-01-02", { datesUnset: true }),
      meta("busan", "2027-02-14", "2027-02-15"),
      meta("bangkok", "2027-01-20", "2027-01-24"),
      meta("now", "2026-11-25", "2026-11-28"), // 여행 중
    ], today);
    expect(g.resume?.id).toBe("tokyo");
    expect(g.upcoming.map((t) => t.id)).toEqual(["now", "bangkok", "busan"]);
    expect(g.undated.map((t) => t.id)).toEqual(["paris"]);
    expect(g.past.map((t) => t.id)).toEqual(["osaka"]);
  });
  it("여행이 없으면 모두 비어 있다", () => {
    expect(groupTrips([], today)).toEqual({ resume: null, upcoming: [], undated: [], past: [] });
  });
});

describe("ddayLabel · rangeLabel", () => {
  const today = "2026-11-27";
  it("남은 날 · 당일 · 여행 중 · 지난 여행 · 날짜 미정", () => {
    expect(ddayLabel(meta("a", "2026-12-04", "2026-12-08"), today)).toBe("D-7");
    expect(ddayLabel(meta("a", "2026-11-27", "2026-11-30"), today)).toBe("D-DAY");
    expect(ddayLabel(meta("a", "2026-11-25", "2026-11-28"), today)).toBe("여행 중");
    expect(ddayLabel(meta("a", "2026-09-12", "2026-09-15"), today)).toBeNull();
    expect(ddayLabel(meta("a", "2026-12-04", "2026-12-08", { datesUnset: true }), today)).toBeNull();
  });
  it("같은 달 · 다른 달 · 해를 넘김 · 당일 · 날짜 미정", () => {
    expect(rangeLabel(meta("a", "2026-12-04", "2026-12-08"))).toBe("12월 4일(금) – 8일(화), 4박 5일");
    expect(rangeLabel(meta("a", "2026-11-29", "2026-12-01"))).toBe("11월 29일(일) – 12월 1일(화), 2박 3일");
    expect(rangeLabel(meta("a", "2026-12-30", "2027-01-02"))).toBe("12월 30일(수) – 2027년 1월 2일(토), 3박 4일");
    expect(rangeLabel(meta("a", "2026-12-04", "2026-12-04"))).toBe("12월 4일(금), 당일");
    expect(rangeLabel(meta("a", "2026-12-04", "2026-12-08", { datesUnset: true, nights: 3 }))).toBe("날짜 미정, 3박 4일");
  });
});
