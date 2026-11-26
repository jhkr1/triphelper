import type { LatLng } from "@/types/destination";

/*
 * 플러스 코드 (Open Location Code): 구글 지도가 위치를 짧은 글자로 나타내는 공개 규격.
 *   전체 코드: 8Q98HXCG+75W        (그 자체로 위치)
 *   짧은 코드: HXCG+75W 서울특별시  (앞 4글자를 빼고 지역 이름을 붙임 → 기준점이 있어야 위치를 안다)
 * 구글 지도 휴대폰 '공유' 링크를 열면 좌표 대신 이 짧은 코드가 나오는 경우가 많다.
 * 규격: https://github.com/google/open-location-code/blob/main/Documentation/Specification/specification.md
 */

const ALPHABET = "23456789CFGHJMPQRVWX";
const SEP = 8; // '+' 앞 글자 수 (전체 코드)
/** 앞 10글자는 위도·경도 한 쌍씩: 한 쌍이 나누는 크기(도) */
const PAIR_RES = [20, 1, 0.05, 0.0025, 0.000125];
const GRID_ROWS = 5;
const GRID_COLS = 4;

export interface PlusCode { code: string; full: boolean }

/** 플러스 코드 모양이면 대문자로 정리해 돌려준다 */
export function readPlusCode(text: string): PlusCode | null {
  const code = text.trim().toUpperCase();
  const sep = code.indexOf("+");
  if (sep < 2 || sep > SEP || sep % 2 === 1 || code.indexOf("+", sep + 1) >= 0) return null;
  const head = code.slice(0, sep), tail = code.slice(sep + 1);
  if (![...head, ...tail].every((c) => ALPHABET.includes(c))) return null; // '0' 채움 코드는 받지 않음
  if (tail.length === 1 || tail.length > 7) return null;
  const full = sep === SEP;
  if (!full && tail.length < 2) return null;
  // 첫 글자는 위도 0~8(→ -90~90), 둘째 글자는 경도 0~17
  if (full && (ALPHABET.indexOf(head[0]) > 8 || ALPHABET.indexOf(head[1]) > 17)) return null;
  return { code, full };
}

/** 전체 코드 → 그 칸의 가운데 */
export function decodePlusCode(code: string): LatLng | null {
  const p = readPlusCode(code);
  if (!p?.full) return null;
  const digits = p.code.replace("+", "");
  let lat = -90, lng = -180;
  let latRes = 0, lngRes = 0;
  for (let i = 0; i < Math.min(10, digits.length); i += 2) {
    const r = PAIR_RES[i / 2];
    lat += ALPHABET.indexOf(digits[i]) * r;
    if (i + 1 < digits.length) lng += ALPHABET.indexOf(digits[i + 1]) * r;
    latRes = lngRes = r;
  }
  for (let i = 10; i < digits.length; i++) {
    latRes /= GRID_ROWS; lngRes /= GRID_COLS;
    const v = ALPHABET.indexOf(digits[i]);
    lat += Math.floor(v / GRID_COLS) * latRes;
    lng += (v % GRID_COLS) * lngRes;
  }
  return { lat: lat + latRes / 2, lng: lng + lngRes / 2 };
}

/** 위치 → 앞 n글자 (짧은 코드를 되살릴 때 기준점의 앞부분으로 쓴다) */
function encodePrefix(p: LatLng, n: number): string {
  let lat = Math.min(Math.max(p.lat, -90), 90 - 1e-9) + 90;
  let lng = ((((p.lng + 180) % 360) + 360) % 360);
  let out = "";
  for (let i = 0; i < n / 2; i++) {
    const r = PAIR_RES[i];
    const a = Math.floor(lat / r), b = Math.floor(lng / r);
    out += ALPHABET[a] + ALPHABET[b];
    lat -= a * r; lng -= b * r;
  }
  return out;
}

/**
 * 코드 → 위치. 짧은 코드는 기준점(ref)에서 가장 가까운 칸으로 되살린다.
 * (앞 4글자를 뺀 코드는 기준점이 실제 위치에서 위도·경도 0.5도(약 50km) 안이어야 맞다)
 */
export function recoverPlusCode(code: string, ref: LatLng): LatLng | null {
  const p = readPlusCode(code);
  if (!p) return null;
  if (p.full) return decodePlusCode(p.code);
  const pad = SEP - p.code.indexOf("+");
  const res = 20 ** (2 - pad / 2); // 뺀 글자가 나누던 크기
  const c = decodePlusCode(encodePrefix(ref, pad) + p.code);
  if (!c) return null;
  const half = res / 2;
  let { lat, lng } = c;
  if (ref.lat + half < lat && lat - res >= -90) lat -= res;
  else if (ref.lat - half > lat && lat + res <= 90) lat += res;
  if (ref.lng + half < lng) lng -= res;
  else if (ref.lng - half > lng) lng += res;
  return { lat, lng: ((((lng + 180) % 360) + 360) % 360) - 180 };
}
