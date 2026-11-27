import { describe, expect, it } from "vitest";
import { putBack, removedPlaces, versionDiff, whenLabel } from "@/lib/trip-versions";
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

describe("removedPlaces · putBack (뺀 장소)", () => {
  // 기록은 최신 것부터: v3(지금과 같음) ← v2(a 뺌) ← v1(b가 2일차에 있었음)
  const v1 = { createdAt: "t1", userId: "u1", data: trip([[place("a", "09:00"), place("x", "10:00")], [place("b", "12:00")]]) };
  const v2 = { createdAt: "t2", userId: "u2", data: trip([[place("x", "10:00")], [place("b", "12:00")]]) };
  const v3 = { createdAt: "t3", userId: "u1", data: trip([[place("x", "10:00")], []]) };
  const now = trip([[place("x", "10:00")], []]);

  it("최근에 뺀 것부터, 있던 자리와 뺀 사람 · 시각", () => {
    const r = removedPlaces([v3, v2, v1], now);
    expect(r.map((x) => [x.place.id, x.day, x.index, x.at, x.by])).toEqual([
      ["b", 1, 0, "t3", "u1"],
      ["a", 0, 0, "t2", "u2"],
    ]);
  });

  it("아직 저장 전에 뺀 장소는 시각이 없다 (방금)", () => {
    const r = removedPlaces([v3, v2, v1], trip([[], []]));
    expect(r[0]).toMatchObject({ place: { id: "x" }, day: 0 });
    expect(r[0].at).toBeUndefined();
  });

  it("원래 날의 원래 자리로, 그날이 없으면 여행지 바구니로", () => {
    const [b, a] = removedPlaces([v3, v2, v1], now);
    expect(putBack(now, a).days[0].places.map((p) => p.id)).toEqual(["a", "x"]);
    const oneDay = trip([[place("x")]]);
    expect(putBack(oneDay, b).basket?.map((p) => p.id)).toEqual(["b"]);
    expect(putBack(putBack(now, a), a).days[0].places).toHaveLength(2); // 두 번 넣지 않는다
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
