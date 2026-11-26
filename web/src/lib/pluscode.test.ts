import { describe, expect, it } from "vitest";
import { decodePlusCode, readPlusCode, recoverPlusCode } from "@/lib/pluscode";
import { parseLocation } from "@/lib/geo";
import { readLocation } from "@/lib/map-link";

// 포시즌스 호텔 서울 (광화문). 구글 지도 공유 링크를 열면 "HXCG+75W 서울특별시"로 넘어간다
const FOUR_SEASONS = { lat: 37.5707, lng: 126.9754 };
const SEOUL = { lat: 37.5665, lng: 126.978 };
const close = (p: { lat: number; lng: number } | null, q: { lat: number; lng: number }) => {
  expect(p).not.toBeNull();
  expect(p!.lat).toBeCloseTo(q.lat, 3);
  expect(p!.lng).toBeCloseTo(q.lng, 3);
};

describe("플러스 코드", () => {
  it("모양 검사: 전체·짧은 코드, 틀린 글자·자리", () => {
    expect(readPlusCode("8q98hxcg+75w")).toEqual({ code: "8Q98HXCG+75W", full: true });
    expect(readPlusCode("HXCG+75W")).toEqual({ code: "HXCG+75W", full: false });
    expect(readPlusCode("HXCG75W")).toBeNull();      // + 없음
    expect(readPlusCode("HXC+75W")).toBeNull();      // + 앞이 홀수
    expect(readPlusCode("HXCA+75W")).toBeNull();     // A는 쓰지 않는 글자
    expect(readPlusCode("HXCG+7")).toBeNull();       // + 뒤 한 글자
  });
  it("전체 코드 → 칸 가운데", () => {
    close(decodePlusCode("8Q98HXCG+75W"), FOUR_SEASONS);
  });
  it("짧은 코드는 기준점 근처로 되살린다", () => {
    close(recoverPlusCode("HXCG+75W", SEOUL), FOUR_SEASONS);
  });
  it("기준점이 1도 경계 너머(0.5도 안)에 있어도 가까운 쪽으로", () => {
    close(recoverPlusCode("HXCG+75W", { lat: 38.05, lng: 127.4 }), FOUR_SEASONS);
  });
});

describe("parseLocation: 플러스 코드", () => {
  it("공유 링크를 열면 나오는 주소 → 짧은 코드 + 지역 이름", () => {
    const opened = "https://www.google.com/maps/search/HXCG%2B75W+%EC%84%9C%EC%9A%B8%ED%8A%B9%EB%B3%84%EC%8B%9C?entry=tts&g_ep=EgoyMDI2MTEyMy4wIPu8ASoASAFQAw%3D%3D";
    expect(parseLocation(opened)).toEqual({ plus: "HXCG+75W", locality: "서울특별시" });
  });
  it("앱에서 복사한 코드 글자", () => {
    expect(parseLocation("HXCG+75W 서울특별시")).toEqual({ plus: "HXCG+75W", locality: "서울특별시" });
    expect(parseLocation("HXCG+75W")).toEqual({ plus: "HXCG+75W" });
    const full = parseLocation("8Q98HXCG+75W");
    close(full && typeof full === "object" && "location" in full ? full.location : null, FOUR_SEASONS);
  });
  it("장소 이름 링크에 플러스 코드가 없으면 null", () => {
    expect(parseLocation("https://www.google.com/maps/place/Four+Seasons+Hotel+Seoul")).toBeNull();
  });
});

describe("readLocation", () => {
  it("지역 이름 없는 짧은 코드는 여행지 중심을 기준으로 (네트워크 없이)", async () => {
    const r = await readLocation("HXCG+75W", SEOUL);
    close(r && typeof r === "object" ? r.location : null, FOUR_SEASONS);
  });
  it("로그인하지 않으면 공유 링크는 'login'", async () => {
    expect(await readLocation("https://maps.app.goo.gl/wjVmXMVDs5Db7RCX7", SEOUL)).toBe("login");
  });
  it("이름은 null (이름으로 검색)", async () => {
    expect(await readLocation("포시즌스 호텔 서울", SEOUL)).toBeNull();
  });
});
