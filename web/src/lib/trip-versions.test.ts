import { describe, expect, it } from "vitest";
import { versionDiff, whenLabel } from "@/lib/trip-versions";
import { place, trip } from "@/lib/test-fixtures";

describe("versionDiff (예전 일정과 지금 비교)", () => {
  it("빠진 장소 · 옮긴 장소 · 그 뒤에 넣은 장소", () => {
    const then = trip([[place("a"), place("b")], [place("c")]]);
    const now = trip([[place("b")], [place("c"), place("d")]], { basket: [place("a")] });
    const d = versionDiff({ ...then }, { ...now });
    expect([...d.back]).toEqual([]);
    expect(d.moved.get("a")).toBe("여행지 바구니");
    expect(d.later.map((p) => p.id)).toEqual(["d"]);

    const gone = versionDiff(then, trip([[place("b")], [place("a")]]));
    expect([...gone.back]).toEqual(["c"]);
    expect(gone.moved.get("a")).toBe("2일차");
  });
});

describe("whenLabel", () => {
  const now = new Date(2026, 10, 27, 15, 0);
  it("오늘 · 어제 · 그 전", () => {
    expect(whenLabel(new Date(2026, 10, 27, 9, 5).toISOString(), now)).toBe("오늘 09:05");
    expect(whenLabel(new Date(2026, 10, 26, 21, 10).toISOString(), now)).toBe("어제 21:10");
    expect(whenLabel(new Date(2026, 10, 20, 8, 0).toISOString(), now)).toBe("11월 20일 08:00");
  });
});
