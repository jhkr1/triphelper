import { describe, expect, it } from "vitest";
import { createUndoHistory } from "@/lib/trip-undo";
import { stableJson } from "@/lib/trip-merge";
import { place, trip } from "@/lib/test-fixtures";
import type { Trip } from "@/types/trip";

const ids = (t: Trip) => t.days.map((d) => d.places.map((p) => p.id));
const sameTrip = (a: Trip, b: Trip) => expect(stableJson(a)).toBe(stableJson(b));

describe("되돌리기 · 다시 하기", () => {
  const start = trip([[place("a", "09:00"), place("b", "11:00")], [place("c")]]);

  it("뺀 장소가 원래 날, 원래 자리로 돌아온다", () => {
    const h = createUndoHistory();
    const removed = { ...start, days: [{ places: [start.days[0].places[1]] }, start.days[1]] }; // a 뺌
    h.record(start, removed);
    sameTrip(h.undo(removed)!, start);
    expect(ids(h.redo(start)!)).toEqual([["b"], ["c"]]);
  });

  it("바뀐 것이 없으면 남기지 않는다", () => {
    const h = createUndoHistory();
    expect(h.record(start, { ...start })).toBeNull();
    expect(h.canUndo()).toBe(false);
  });

  it("그사이 다른 곳에서 고친 것은 남긴다 (내 변경만 거꾸로)", () => {
    const h = createUndoHistory();
    const removed = trip([[start.days[0].places[1]], start.days[1].places]); // a 뺌
    h.record(start, removed);
    // 그 뒤 함께 짜는 사람이 2일차에 d를 넣었다
    const now = trip([[start.days[0].places[1]], [...start.days[1].places, place("d", "15:00")]]);
    expect(ids(h.undo(now)!)).toEqual([["a", "b"], ["c", "d"]]);
  });

  it("날짜를 지운 것을 되돌리면 그날의 장소·숙소와 날짜 수가 돌아온다", () => {
    const h = createUndoHistory();
    const three = trip([[place("a")], [place("b")], [place("c")]]);
    three.days[1].stay = place("hotel");
    const removedDay = { ...three, end: "2026-12-05", days: [three.days[0], three.days[2]] };
    h.record(three, removedDay);
    const back = h.undo(removedDay)!;
    expect(ids(back)).toEqual([["a"], ["b"], ["c"]]);
    expect(back.days[1].stay?.id).toBe("hotel");
    expect(back.end).toBe(three.end);
  });

  it("같은 group의 연속 변경은 한 번에 되돌린다 (메모 입력)", () => {
    const h = createUndoHistory();
    const memo = (m: string) => trip([[place("a", "09:00", { memo: m }), place("b", "11:00")], [place("c")]]);
    h.record(start, memo("체"), "memo:a", 1000);
    h.record(memo("체"), memo("체크인"), "memo:a", 1500);
    sameTrip(h.undo(memo("체크인"))!, start);
    expect(h.canUndo()).toBe(false);
  });

  it("새로 고치면 다시 하기 목록은 지운다", () => {
    const h = createUndoHistory();
    const one = trip([[place("a")]]), two = trip([[place("a"), place("b")]]);
    h.record(one, two);
    h.undo(two);
    expect(h.canRedo()).toBe(true);
    h.record(one, trip([[]]));
    expect(h.canRedo()).toBe(false);
  });

  it("알림의 [되돌리기]: 그 뒤에 다른 변경이 있어도 그 변경만 되돌린다", () => {
    const h = createUndoHistory();
    const removed = trip([[start.days[0].places[1]], start.days[1].places]); // a 뺌
    const id = h.record(start, removed)!;
    const added = trip([[start.days[0].places[1]], [...start.days[1].places, place("d")]]); // 이어서 d 넣음
    h.record(removed, added);
    expect(ids(h.revert(id, added)!)).toEqual([["a", "b"], ["c", "d"]]);
  });

  it("준비물과 저장 연결 정보는 건드리지 않는다", () => {
    const h = createUndoHistory();
    const cloud = { id: "t1", userId: "u1", savedAt: "x", role: "owner" as const, shared: false };
    const before = { ...start, cloud };
    const after = { ...trip([[place("b")], [place("c")]]), cloud };
    h.record(before, after);
    const now = { ...after, checklist: { bags: { 여권: true }, done: ["여권"] }, cloud: { ...cloud, savedAt: "y" } } as unknown as Trip;
    const back = h.undo(now)!;
    expect(back.checklist).toEqual(now.checklist);
    expect(back.cloud?.savedAt).toBe("y");
  });
});
