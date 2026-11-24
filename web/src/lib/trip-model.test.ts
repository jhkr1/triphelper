import { describe, expect, it } from "vitest";
import { addDays, dayLabel, insertAt, nightsBetween, nextSlot, setStay, timeBetween, tripName } from "@/lib/trip-model";
import { place, trip } from "@/lib/test-fixtures";

describe("날짜 계산", () => {
  it("addDays는 달·해를 넘긴다", () => {
    expect(addDays("2026-12-30", 3)).toBe("2027-01-02");
    expect(addDays("2028-02-28", 1)).toBe("2028-02-29"); // 윤년
    expect(addDays("2026-03-01", -1)).toBe("2026-02-28");
  });
  it("nightsBetween은 박 수", () => {
    expect(nightsBetween("2026-12-04", "2026-12-08")).toBe(4);
    expect(nightsBetween("2026-12-04", "2026-12-04")).toBe(0);
  });
  it("dayLabel은 'M.DD 요일'", () => {
    expect(dayLabel("2026-12-04", 0)).toBe("12.04 금");
    expect(dayLabel("2026-12-04", 3)).toBe("12.07 월");
  });
});

describe("시간 정하기", () => {
  it("nextSlot: 마지막 일정 1시간 뒤, 비면 10:00, 23시를 넘지 않음", () => {
    expect(nextSlot([])).toBe("10:00");
    expect(nextSlot([place("a", "09:00"), place("b", "14:30")])).toBe("15:30");
    expect(nextSlot([place("a", "23:10")])).toBe("23:10");
  });
  it("timeBetween: 틈이 있으면 1시간 뒤, 없으면 가운데(5분 단위)", () => {
    expect(timeBetween("09:00", "12:00")).toBe("10:00");
    expect(timeBetween("09:00", "09:40")).toBe("09:20");
    expect(timeBetween(undefined, "09:00")).toBe("08:00");
    expect(timeBetween(undefined, undefined)).toBe("10:00");
  });
  it("insertAt: 시간이 앞뒤 사이에 맞으면 그대로, 아니면 바꿔서 시간순 유지", () => {
    const list = [place("a", "09:00"), place("b", "12:00")];
    expect(insertAt(list, place("x", "10:30"), 1).map((p) => `${p.id}${p.time}`)).toEqual(["a09:00", "x10:30", "b12:00"]);
    expect(insertAt(list, place("x", "18:00"), 1)[1].time).toBe("10:00");
  });
});

describe("setStay (숙소)", () => {
  it("뒤에 이어지는 빈 밤도 같은 숙소로 채우고, 마지막 날은 비운다", () => {
    const t = trip([[], [], [], []]); // 3박
    const { trip: out, filled } = setStay(t, 0, { time: "", name: "호텔", category: "숙소" });
    expect(filled).toBe(2);
    expect(out.days.map((d) => d.stay?.name ?? null)).toEqual(["호텔", "호텔", "호텔", null]);
  });
  it("다른 숙소가 정해진 밤에서 멈춘다", () => {
    const t = trip([[], [], [], []]);
    t.days[2].stay = { ...place("h2"), name: "다른 호텔", category: "숙소" };
    const { trip: out } = setStay(t, 0, { time: "", name: "호텔", category: "숙소" });
    expect(out.days.map((d) => d.stay?.name ?? null)).toEqual(["호텔", "호텔", "다른 호텔", null]);
  });
});

it("tripName: 붙인 이름 → 도시 → 나라", () => {
  expect(tripName({ title: " 신혼여행 ", city: "방콕" }, "태국")).toBe("신혼여행");
  expect(tripName({ city: "방콕" }, "태국")).toBe("방콕 여행");
  expect(tripName({ city: "" }, "태국")).toBe("태국 여행");
});
