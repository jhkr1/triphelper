import { describe, expect, it } from "vitest";
import { parseLocation, type ParsedLocation } from "@/lib/geo";

const near = (r: ReturnType<typeof parseLocation>, lat: number, lng: number): ParsedLocation => {
  if (!r || r === "short" || !("location" in r)) throw new Error(`위치를 못 읽음: ${JSON.stringify(r)}`);
  expect(r.location.lat).toBeCloseTo(lat, 4);
  expect(r.location.lng).toBeCloseTo(lng, 4);
  return r;
};

describe("parseLocation (붙여 넣은 좌표·지도 링크)", () => {
  it("구글 지도에서 복사한 소수 좌표", () => {
    near(parseLocation("35.6938479, 139.7679817"), 35.6938479, 139.7679817);
    near(parseLocation(" 35.6938,139.7679 "), 35.6938, 139.7679);
    near(parseLocation("-33.8568, 151.2153"), -33.8568, 151.2153); // 남반구
  });
  it("도·분·초 좌표", () => {
    near(parseLocation(`35°41'37.8"N 139°46'04.7"E`), 35.69383, 139.76797);
    near(parseLocation(`33°51'24.5"S 151°12'55.1"E`), -33.85681, 151.21531);
  });
  it("구글 지도 장소 링크: 화면 가운데(@)보다 장소 핀(!3d!4d)을, 이름도 함께", () => {
    const r = near(parseLocation(
      "https://www.google.com/maps/place/Aka+Hotel/@35.6900,139.7600,17z/data=!3m1!4b1!4m9!3m8!1s0x0:0x0!8m2!3d35.6938479!4d139.7679817!16s",
    ), 35.6938479, 139.7679817);
    expect(r.name).toBe("Aka Hotel");
  });
  it("이름에 주소가 붙은 링크는 쉼표 앞만 이름으로", () => {
    const r = near(parseLocation("https://www.google.com/maps/place/Hotel+Gracery,+1-19-1+Kabukicho/@35.69,139.70,17z"), 35.69, 139.7);
    expect(r.name).toBe("Hotel Gracery");
  });
  it("그 밖의 지도 링크 (@ · q= · query= · 애플 지도 ll=)", () => {
    near(parseLocation("https://www.google.com/maps/@35.6938,139.7679,17z"), 35.6938, 139.7679);
    near(parseLocation("https://maps.google.com/?q=35.6938,139.7679"), 35.6938, 139.7679);
    near(parseLocation("https://www.google.com/maps/search/?api=1&query=35.6938%2C139.7679"), 35.6938, 139.7679);
    near(parseLocation("https://maps.apple.com/?ll=35.6938,139.7679&q=Hotel"), 35.6938, 139.7679);
  });
  it("휴대폰 공유용 짧은 링크는 'short'", () => {
    expect(parseLocation("https://maps.app.goo.gl/AbCdEf123")).toBe("short");
    expect(parseLocation("https://goo.gl/maps/xyz")).toBe("short");
  });
  it("숙소 이름·범위 밖 값은 좌표가 아님", () => {
    expect(parseLocation("Hilton Tokyo")).toBeNull();
    expect(parseLocation("도요코인 신주쿠 2")).toBeNull();
    expect(parseLocation("95.1, 139.7")).toBeNull();
    expect(parseLocation("https://www.booking.com/hotel/jp/aka.html")).toBeNull();
  });
});
