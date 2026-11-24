import { describe, expect, it } from "vitest";
import { buildPost, fillTripFromPost, type Post, type PublishOptions } from "@/lib/posts";
import { place, trip } from "@/lib/test-fixtures";

const opts = (o: Partial<PublishOptions> = {}): PublishOptions =>
  ({ title: " 방콕 첫 여행 ", summary: "", tags: [], visibility: "public", memo: false, stay: false, dates: "month", ...o }) as PublishOptions;

describe("buildPost (게시판에 올릴 사본)", () => {
  const stay = { ...place("h"), name: "호텔 (예약번호 1234)", category: "숙소" as const };
  const t = trip([[place("a", "09:00", { memo: "비밀 메모", location: { lat: 13.123456, lng: 100.987654 } })], [place("b")]]);
  t.days[0].stay = stay;

  it("메모·숙소는 고른 경우에만 넣는다 (기본은 빼서 남에게 보이지 않게)", () => {
    const p = buildPost(t, opts());
    expect(p.data.days[0].places[0].memo).toBeUndefined();
    expect(p.data.days[0].stay).toBeUndefined();
    const withAll = buildPost(t, opts({ memo: true, stay: true }));
    expect(withAll.data.days[0].places[0].memo).toBe("비밀 메모");
    expect(withAll.data.days[0].stay?.name).toBe("호텔 (예약번호 1234)");
  });

  it("정확한 날짜는 'exact'일 때만, 날짜 미정이면 달도 넣지 않는다", () => {
    expect(buildPost(t, opts()).data.start).toBeUndefined();
    expect(buildPost(t, opts()).month).toBe(12);
    expect(buildPost(t, opts({ dates: "exact" })).data.start).toBe("2026-12-04");
    expect(buildPost({ ...t, datesUnset: true }, opts({ dates: "exact" })).month).toBeNull();
  });

  it("제목은 다듬고 60자로 자르며, 동선 그림 좌표는 소수 3자리", () => {
    const p = buildPost(t, opts({ title: ` ${"가".repeat(80)} ` }));
    expect(p.title).toHaveLength(60);
    expect(buildPost(t, opts()).title).toBe("방콕 첫 여행");
    expect(p.preview[0][0]).toEqual([13.123, 100.988]);
    expect(p.place_count).toBe(2);
    expect(p.nights).toBe(1);
  });
});

describe("fillTripFromPost (추천 동선으로 시작)", () => {
  const post = {
    data: {
      v: 1, country: "thailand", city: "방콕", center: { lat: 13.7, lng: 100.5 }, nights: 2,
      days: [{ places: [place("p1")] }, { places: [place("p2")] }, { places: [place("p3")] }],
    },
  } as unknown as Post;

  it("일정이 짧으면 날짜를 늘리고(가는 날은 그대로) 도시를 동선에 맞춘다", () => {
    const t = trip([[], []], { city: "치앙마이", title: "내 여행" });
    const out = fillTripFromPost(t, post);
    expect(out.days.map((d) => d.places.map((p) => p.name))).toEqual([["장소 p1"], ["장소 p2"], ["장소 p3"]]);
    expect(out.start).toBe(t.start);
    expect(out.end).toBe("2026-12-06");
    expect(out.city).toBe("방콕");
    expect(out.title).toBe("내 여행");
  });

  it("일정이 길면 남는 날은 비우고, 정해 둔 숙소는 남기되 마지막 날 숙소는 없다", () => {
    const t = trip([[], [], [], [], []]);
    t.days[0].stay = { ...place("h"), name: "내 호텔", category: "숙소" };
    t.days[4].stay = { ...place("h2"), name: "잘못 남은 숙소", category: "숙소" };
    const out = fillTripFromPost(t, post);
    expect(out.days).toHaveLength(5);
    expect(out.days[3].places).toEqual([]);
    expect(out.days[0].stay?.name).toBe("내 호텔");
    expect(out.days[4].stay).toBeUndefined();
    expect(out.end).toBe(t.end);
  });

  it("넣은 장소마다 새 id (같은 동선을 두 번 넣어도 겹치지 않게)", () => {
    const a = fillTripFromPost(trip([[]]), post).days[0].places[0].id;
    const b = fillTripFromPost(trip([[]]), post).days[0].places[0].id;
    expect(a).not.toBe(b);
    expect(a).not.toBe("p1");
  });
});
