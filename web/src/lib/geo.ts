import type { LatLng } from "@/types/destination";

/** 지도 라이브러리(MapLibre, D3)는 [경도, 위도] 순서를 쓴다. 변환은 이 함수로만 한다. */
export type LngLatTuple = [lng: number, lat: number];

export const toLngLatTuple = (p: LatLng): LngLatTuple => [p.lng, p.lat];
export const fromLngLatTuple = ([lng, lat]: LngLatTuple): LatLng => ({ lat, lng });

/** 두 지점 사이 거리(m) */
export function distanceMeters(a: LatLng, b: LatLng): number {
  const rad = (x: number) => (x * Math.PI) / 180;
  const h =
    Math.sin(rad(b.lat - a.lat) / 2) ** 2 +
    Math.cos(rad(a.lat)) * Math.cos(rad(b.lat)) * Math.sin(rad(b.lng - a.lng) / 2) ** 2;
  return 2 * 6371000 * Math.asin(Math.sqrt(h));
}

/** 도보 시간(분), 분당 80m 기준 */
export const walkingMinutes = (meters: number) => Math.max(1, Math.round(meters / 80));

export const formatDistance = (meters: number) =>
  meters < 1000 ? `${Math.round(meters)}m` : `${(meters / 1000).toFixed(1)}km`;

/** 이 거리까지는 걸어가는 것으로 안내 (그 이상은 대중교통 길찾기 링크) */
export const WALKABLE_METERS = 1200;

/**
 * 실제 길찾기는 지도 앱에 맡긴다 (무료, 키 불필요).
 * 한국은 구글 대중교통 경로가 제공되지 않아 카카오맵, 해외는 구글 지도.
 */
export function directionsUrl(
  from: { name: string; location: LatLng },
  to: { name: string; location: LatLng },
  countryCode: string,
  mode: "walk" | "transit",
): string {
  const { lat: aLat, lng: aLng } = from.location;
  const { lat: bLat, lng: bLng } = to.location;
  if (countryCode === "kr") {
    const clean = (s: string) => encodeURIComponent(s.replace(/[,/]/g, " "));
    return `https://map.kakao.com/link/by/${mode === "walk" ? "walk" : "traffic"}/${clean(from.name)},${aLat},${aLng}/${clean(to.name)},${bLat},${bLng}`;
  }
  return `https://www.google.com/maps/dir/?api=1&origin=${aLat},${aLng}&destination=${bLat},${bLng}&travelmode=${mode === "walk" ? "walking" : "transit"}`;
}

/**
 * 붙여 넣은 좌표·지도 링크에서 위치를 읽는다 (지도 검색에 없는 숙소용).
 * - 좌표: "35.6938, 139.7679" · "35°41'37.8"N 139°46'04.7"E"
 * - 구글 지도 주소: 장소 핀(!3d…!4d…) > 화면 가운데(@위도,경도) > ?q= · ?query= · ?ll= (애플 지도)
 *   /maps/place/이름/ 이 있으면 이름도 함께
 * - 휴대폰 '공유'의 짧은 링크(maps.app.goo.gl)는 열어 봐야 좌표가 나오는데 서버 없이는 열 수 없어 "short"
 */
export type ParsedLocation = { location: LatLng; name?: string };

export function parseLocation(text: string): ParsedLocation | "short" | null {
  const s = text.trim();
  if (!s) return null;
  if (/^(https?:\/\/)?(maps\.app\.goo\.gl|goo\.gl\/maps|g\.co\/kgs)\//i.test(s)) return "short";
  const ok = (lat: number, lng: number): ParsedLocation | null =>
    Number.isFinite(lat) && Number.isFinite(lng) && Math.abs(lat) <= 90 && Math.abs(lng) <= 180 && !(lat === 0 && lng === 0)
      ? { location: { lat, lng } } : null;

  // 도·분·초
  const dms = s.match(/(\d{1,2})°\s*(\d{1,2})['′]\s*([\d.]+)["″]?\s*([NS])[\s,]*(\d{1,3})°\s*(\d{1,2})['′]\s*([\d.]+)["″]?\s*([EW])/i);
  if (dms) {
    const deg = (d: string, m: string, sec: string, h: string) =>
      (Number(d) + Number(m) / 60 + Number(sec) / 3600) * (/[SW]/i.test(h) ? -1 : 1);
    return ok(deg(dms[1], dms[2], dms[3], dms[4]), deg(dms[5], dms[6], dms[7], dms[8]));
  }
  // 소수 좌표만 (위도, 경도)
  const pair = s.match(/^\(?\s*(-?\d{1,2}\.\d+)\s*[,\s]\s*(-?\d{1,3}\.\d+)\s*\)?$/);
  if (pair) return ok(Number(pair[1]), Number(pair[2]));

  if (!/^https?:\/\//i.test(s)) return null;
  const num = "(-?\\d{1,3}\\.\\d+)";
  const found =
    s.match(new RegExp(`!3d${num}!4d${num}`)) ??
    s.match(new RegExp(`@${num},${num}`)) ??
    s.match(new RegExp(`[?&](?:q|query|ll|destination|center)=${num}(?:,|%2C)\\s*${num}`, "i"));
  if (!found) return null;
  const r = ok(Number(found[1]), Number(found[2]));
  if (!r) return null;
  const place = s.match(/\/maps\/place\/([^/@?]+)/);
  if (place) {
    try {
      const name = decodeURIComponent(place[1].replace(/\+/g, " ")).split(",")[0].trim();
      if (name && !/^-?\d/.test(name)) r.name = name.slice(0, 80);
    } catch { /* 이름은 없어도 된다 */ }
  }
  return r;
}

/** 국기 이미지 (Windows에서는 국기 이모지가 글자로 보여서 이미지 사용) */
export const flagUrl = (countryCode: string, height: 20 | 40 | 80 = 40) =>
  `https://flagcdn.com/h${height}/${countryCode}.png`;
