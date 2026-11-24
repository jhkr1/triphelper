import { describe, expect, it } from "vitest";
import { describeChanges, mergeTrips, stableJson } from "@/lib/trip-merge";
import { place, trip } from "@/lib/test-fixtures";

const ids = (t: ReturnType<typeof trip>) => t.days.map((d) => d.places.map((p) => p.id));

describe("stableJson", () => {
  it("항목 순서가 달라도 같은 문자열 (DB jsonb는 순서를 바꾼다)", () => {
    expect(stableJson({ b: 1, a: { d: 2, c: 3 } })).toBe(stableJson({ a: { c: 3, d: 2 }, b: 1 }));
  });
  it("undefined 칸은 없는 것으로 본다", () => {
    expect(stableJson({ a: 1, b: undefined })).toBe(stableJson({ a: 1 }));
  });
  it("배열 순서는 그대로 비교한다", () => {
    expect(stableJson([1, 2])).not.toBe(stableJson([2, 1]));
  });
});

describe("mergeTrips (함께 짜는 일정 동시 수정)", () => {
  const base = trip([[place("a", "09:00"), place("b", "11:00")], [place("c")]]);

  it("양쪽이 서로 다른 장소를 추가하면 둘 다 남는다", () => {
    const local = trip([[...base.days[0].places, place("mine", "13:00")], base.days[1].places]);
    const remote = trip([base.days[0].places, [...base.days[1].places, place("theirs", "12:00")]]);
    expect(ids(mergeTrips(base, local, remote))).toEqual([["a", "b", "mine"], ["c", "theirs"]]);
  });

  it("한쪽에서 지운 장소는 지운다", () => {
    const local = trip([[base.days[0].places[0]], base.days[1].places]); // b 지움
    const remote = trip([base.days[0].places, []]); // c 지움
    expect(ids(mergeTrips(base, local, remote))).toEqual([["a"], []]);
  });

  it("같은 장소를 둘 다 고치면 내 것 (나중에 저장한 쪽)", () => {
    const local = trip([[{ ...base.days[0].places[0], memo: "내 메모" }, base.days[0].places[1]], base.days[1].places]);
    const remote = trip([[{ ...base.days[0].places[0], memo: "상대 메모" }, base.days[0].places[1]], base.days[1].places]);
    expect(mergeTrips(base, local, remote).days[0].places[0].memo).toBe("내 메모");
  });

  it("내가 안 바꾼 장소는 상대가 고친 내용을 받는다", () => {
    const remote = trip([[{ ...base.days[0].places[0], time: "08:00" }, base.days[0].places[1]], base.days[1].places]);
    expect(mergeTrips(base, base, remote).days[0].places[0].time).toBe("08:00");
  });

  it("일정 정보는 내가 바꾼 칸만 내 것", () => {
    const local = { ...base, title: "내 이름" };
    const remote = { ...base, city: "치앙마이" };
    const out = mergeTrips(base, local, remote);
    expect(out.title).toBe("내 이름");
    expect(out.city).toBe("치앙마이");
  });

  it("준비물은 늘 내 것", () => {
    const local = { ...base, checklist: { bags: {}, done: ["여권"] } };
    const remote = { ...base, checklist: { bags: {}, done: [] } };
    expect(mergeTrips(base, local, remote).checklist.done).toEqual(["여권"]);
  });

  it("내가 날짜를 줄이는 사이 상대가 그날에 넣은 장소는 마지막 날로 모이고, 마지막 날 숙소는 없다", () => {
    const stay = place("s", "", { category: "숙소" });
    const b = trip([[place("a")], [place("c")]]);
    b.days[0].stay = stay;
    const local = { ...b, days: [{ places: [place("a")], stay }] }; // 하루로 줄임 (c도 함께 빠짐)
    const remote = { ...b, days: [b.days[0], { places: [place("c"), place("r", "12:00")] }] }; // 상대가 2일차에 r 추가
    const out = mergeTrips(b, local, remote);
    expect(ids(out)).toEqual([["a", "r"]]);
    expect(out.days[0].stay).toBeUndefined();
  });
});

describe("describeChanges (활동 기록 문장)", () => {
  const base = trip([[place("a")], [place("b")]]);

  it("추가·삭제를 한국어 조사에 맞게 적는다", () => {
    const local = trip([[place("a"), { ...place("n"), name: "왓포" }], []]);
    expect(describeChanges(base, local)).toEqual(["1일차에 왓포를 추가했어요", "장소 b를 뺐어요"]);
  });

  it("날짜 탭을 끌어 옮기면 장소마다가 아니라 가장 멀리 움직인 날 한 줄로", () => {
    const b3 = trip([[place("a")], [place("b")], [place("c")]]);
    const local = trip([[place("b")], [place("c")], [place("a")]]); // 1일차를 맨 뒤로
    expect(describeChanges(b3, local)).toEqual(["1일차 일정을 3일차로 옮겼어요"]);
  });

  it("너무 많으면 limit 개만", () => {
    const local = trip([Array.from({ length: 9 }, (_, i) => place(`x${i}`)), [place("b")]]);
    expect(describeChanges(base, local, 3)).toHaveLength(3);
  });
});
