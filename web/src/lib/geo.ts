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

/** 국기 이미지 (Windows에서는 국기 이모지가 글자로 보여서 이미지 사용) */
export const flagUrl = (countryCode: string, height: 20 | 40 | 80 = 40) =>
  `https://flagcdn.com/h${height}/${countryCode}.png`;
