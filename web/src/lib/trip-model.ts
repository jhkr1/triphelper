import type { Attraction, Destination, LatLng } from "@/types/destination";
import type { Checklist, Place, PlaceCategory, Trip, TripDay } from "@/types/trip";

/** 플래너에 필요한 나라 정보 (서버에서 골라 클라이언트로 넘김) */
export interface PlannerCountry {
  slug: string;
  name: string;
  countryCode: string;
  center: LatLng;
  currencyCode: string;
  currencyName: string;
  visa: string;
  cities: { name: string; nameKo: string }[];
  essentials: string[];
}

/** 나라 데이터에서 플래너에 필요한 부분만 고른다 */
export function toPlannerCountry(d: Destination): PlannerCountry {
  return {
    slug: d.slug,
    name: d.name,
    countryCode: d.countryCode,
    center: d.center,
    currencyCode: d.currency.code,
    currencyName: d.currency.name,
    visa: d.visa[0]?.title ?? "",
    cities: d.cities,
    essentials: d.essentials.filter((x) => !x.link && !x.iframe).map((x) => x.title),
  };
}

/* ───────── 날짜 ───────── */

const WEEKDAYS = "일월화수목금토";

export function addDays(iso: string, n: number): string {
  const d = new Date(`${iso}T00:00:00Z`);
  d.setUTCDate(d.getUTCDate() + n);
  return d.toISOString().slice(0, 10);
}

export const nightsBetween = (start: string, end: string) =>
  Math.round((Date.parse(`${end}T00:00:00Z`) - Date.parse(`${start}T00:00:00Z`)) / 864e5);

export function dateParts(iso: string) {
  const d = new Date(`${iso}T00:00:00Z`);
  return { y: d.getUTCFullYear(), m: d.getUTCMonth() + 1, d: d.getUTCDate(), w: WEEKDAYS[d.getUTCDay()] };
}

/** "12.10 목" */
export function dayLabel(start: string, index: number) {
  const p = dateParts(addDays(start, index));
  return `${p.m}.${String(p.d).padStart(2, "0")} ${p.w}`;
}

const todayIso = () => new Date().toISOString().slice(0, 10);

/* ───────── 만들기 ───────── */

export const newId = () => Math.random().toString(36).slice(2, 10);

export function checklistFor(country: PlannerCountry): Checklist {
  const bags: Checklist["bags"] = {
    "기내용 가방": {
      "서류 · 결제": ["여권", "여행자 보험", `현지 통화 현금 (${country.currencyCode})`, "해외결제 카드"],
      "전자기기": ["보조배터리", "휴대폰 충전기"],
    },
    "캐리어": { "의류": ["속옷", "겉옷", "양말"], "세면 · 약": ["칫솔 · 치약", "상비약"] },
    "보조 가방": { "기타": ["접이식 장바구니"] },
  };
  if (country.essentials.length) bags["캐리어"][`${country.name} 필수템`] = country.essentials.slice(0, 6);
  return { bags, done: [] };
}

export function createTrip(country: PlannerCountry, city: string, center: LatLng, start: string, end: string): Trip {
  return {
    country: country.slug,
    city,
    center,
    start,
    end,
    days: Array.from({ length: nightsBetween(start, end) + 1 }, () => ({ places: [] })),
    checklist: checklistFor(country),
  };
}

/** 처음 들어온 사람에게 보여 줄 빈 일정: 한 달 뒤 출발, 3박 4일 */
export function defaultTrip(country: PlannerCountry): Trip {
  const start = addDays(todayIso(), 30);
  const city = country.cities[0];
  return createTrip(country, city ? city.nameKo || city.name : "", country.center, start, addDays(start, 3));
}

/** 예시 일정 (도쿄 3박 4일) */
export function sampleTrip(japan: PlannerCountry): Trip {
  const start = addDays(todayIso(), 7);
  const p = (time: string, name: string, category: PlaceCategory, lat: number, lng: number, wiki: string, duration = "", memo = ""): Place =>
    ({ id: newId(), time, name, category, duration, memo, location: { lat, lng }, wiki });
  const days: TripDay[] = [
    { places: [
      p("10:30", "하네다공항 도착", "공항", 35.5494, 139.7798, "도쿄 국제공항", "1시간", "입국 심사 후 스이카(교통카드) 구입"),
      p("13:00", "신주쿠", "명소", 35.6938, 139.7034, "신주쿠", "1시간 30분"),
      p("16:00", "도쿄 도청 전망대", "명소", 35.6896, 139.6917, "도쿄도청사", "1시간", "무료 입장 · 해 질 무렵 추천"),
    ] },
    { places: [
      p("10:00", "센소지 · 아사쿠사", "명소", 35.7148, 139.7967, "센소지", "2시간", "비 오면 나카미세 상점가 위주로"),
      p("14:00", "도쿄 스카이트리", "명소", 35.7101, 139.8107, "도쿄 스카이트리", "2시간"),
    ] },
    { places: [p("11:00", "시부야 스크램블 스퀘어", "쇼핑", 35.6585, 139.7022, "시부야 스크램블 스퀘어", "2시간")] },
    { places: [p("09:00", "츠키지 장외시장", "식당", 35.6654, 139.7707, "쓰키지 시장", "1시간 30분")] },
  ];
  return { ...createTrip(japan, "도쿄", { lat: 35.68, lng: 139.75 }, start, addDays(start, 3)), days };
}

export const sortByTime = (places: Place[]) => [...places].sort((a, b) => a.time.localeCompare(b.time));

/** "HH:MM"에 시간을 더한다 (23시를 넘기지 않음) */
export function addHours(time: string, hours: number): string {
  const [h, m] = time.split(":").map(Number);
  return `${String(Math.min(h + hours, 23)).padStart(2, "0")}:${String(m).padStart(2, "0")}`;
}

/** 그날 다음 일정으로 제안할 시간: 마지막 일정 1시간 뒤, 비어 있으면 10:00 */
export function nextSlot(places: Place[]): string {
  const last = sortByTime(places).at(-1)?.time;
  return last ? addHours(last, 1) : "10:00";
}

const toMin = (t: string) => { const [h, m] = t.split(":").map(Number); return h * 60 + m; };
const fromMin = (n: number) => `${String(Math.floor(n / 60)).padStart(2, "0")}:${String(n % 60).padStart(2, "0")}`;

/** 두 일정 사이에 넣을 시간: 앞 일정 1시간 뒤, 그럴 틈이 없으면 두 시간의 가운데(5분 단위) */
export function timeBetween(prev?: string, next?: string): string {
  if (!prev && !next) return "10:00";
  if (!prev) return fromMin(Math.max(0, toMin(next!) - 60));
  if (!next) return addHours(prev, 1);
  const p = toMin(prev), n = toMin(next);
  if (p + 60 < n) return fromMin(p + 60);
  return fromMin(p + Math.max(0, Math.floor((n - p) / 2 / 5) * 5));
}

/**
 * 장소를 목록의 index 자리에 넣는다. 드래그한 순서가 기준이라, 원래 시간이 앞뒤 일정 사이에 맞으면 그대로 두고
 * 어긋나면 그 사이 시간으로 바꾼다 (그래서 목록은 언제나 시간순을 유지한다).
 */
export function insertAt(places: Place[], place: Place, index: number): Place[] {
  const list = places.filter((p) => p.id !== place.id);
  const i = Math.max(0, Math.min(index, list.length));
  const prev = list[i - 1]?.time, next = list[i]?.time;
  const fits = Boolean(place.time) && (!prev || prev <= place.time) && (!next || place.time <= next);
  return [...list.slice(0, i), { ...place, time: fits ? place.time : timeBetween(prev, next) }, ...list.slice(i)];
}

/** 관광지를 여행지 바구니에 담는다 (이미 일정이나 여행지 바구니에 있으면 그대로) */
export function addToBasket(trip: Trip, a: Attraction): Trip {
  const all = [...(trip.basket ?? []), ...trip.days.flatMap((d) => d.places)];
  if (all.some((p) => (p.wiki ?? p.name) === a.wiki || p.name === a.name)) return trip;
  const place: Place = { id: newId(), time: "", name: a.name, category: "명소", location: a.location, wiki: a.wiki };
  return { ...trip, basket: [...(trip.basket ?? []), place] };
}

/* ───────── 공유 링크 (서버 없이 주소 안에 일정 담기) ─────────
 * 새 링크: #z=  일정을 짧게 줄여(중복 제거·좌표 반올림) 압축한 뒤 base64url
 * 예전 링크: #t=  압축 없는 JSON (계속 열 수 있게 읽기만 지원)
 * 메신저(카카오톡 등)가 긴 주소를 다루다 잘리는 일을 줄이려고 최대한 짧게 만든다.
 */

type SharedPlace = [time: string, name: string, category: PlaceCategory, lat?: number, lng?: number, wiki?: string, image?: string];
interface SharedTrip { v: 1; c: string; ci: string; ce: [number, number]; s: string; e: string; d: SharedPlace[][]; b?: SharedPlace[] }

/** v2 장소: 위키 문서 이름이 장소 이름과 같으면 1, 뒤쪽 빈 값은 생략 */
type CompactPlace = [time: string, name: string, category: PlaceCategory, lat?: number | null, lng?: number | null, wiki?: string | 1 | null, image?: string | null];
interface CompactTrip { v: 2; c: string; ci: string; ce: [number, number]; s: string; e: string; d: CompactPlace[][]; b?: CompactPlace[] }

const bytesToBase64Url = (bytes: Uint8Array) => {
  let bin = "";
  for (let i = 0; i < bytes.length; i += 0x8000) bin += String.fromCharCode(...bytes.subarray(i, i + 0x8000));
  return btoa(bin).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
};
const base64UrlToBytes = (s: string) => Uint8Array.from(atob(s.replace(/-/g, "+").replace(/_/g, "/")), (c) => c.charCodeAt(0));

async function pipeBytes(bytes: Uint8Array, stream: CompressionStream | DecompressionStream): Promise<Uint8Array> {
  const out = new Response(new Blob([bytes as BlobPart]).stream().pipeThrough(stream));
  return new Uint8Array(await out.arrayBuffer());
}

/** 좌표는 소수 5자리(약 1m)면 충분하다 */
const round5 = (n: number) => Math.round(n * 1e5) / 1e5;

function toCompact(p: Place): CompactPlace {
  const row: CompactPlace = [
    p.time, p.name, p.category,
    p.location ? round5(p.location.lat) : null, p.location ? round5(p.location.lng) : null,
    p.wiki ? (p.wiki === p.name ? 1 : p.wiki) : null, p.image ?? null,
  ];
  while (row.length > 3 && row[row.length - 1] == null) row.pop();
  return row;
}

const fromCompact = ([time, name, category, lat, lng, wiki, image]: CompactPlace): Place => ({
  id: newId(), time, name, category,
  ...(lat != null && lng != null ? { location: { lat, lng } } : {}),
  ...(wiki ? { wiki: wiki === 1 ? name : wiki } : {}), ...(image ? { image } : {}),
});

/** 공유 링크 주소 (#z=...) */
export async function shareUrl(siteUrl: string, trip: Trip): Promise<string> {
  const data: CompactTrip = {
    v: 2, c: trip.country, ci: trip.city, ce: [round5(trip.center.lat), round5(trip.center.lng)], s: trip.start, e: trip.end,
    d: trip.days.map((day) => day.places.map(toCompact)),
    ...(trip.basket?.length ? { b: trip.basket.map(toCompact) } : {}),
  };
  const packed = await pipeBytes(new TextEncoder().encode(JSON.stringify(data)), new CompressionStream("deflate-raw"));
  return `${siteUrl}/trip/#z=${bytesToBase64Url(packed)}`;
}

function toTrip(s: { c: string; ci: string; ce: [number, number]; s: string; e: string }, days: Place[][], basket: Place[], country: PlannerCountry): Trip {
  return {
    country: s.c, city: s.ci, center: { lat: s.ce[0], lng: s.ce[1] }, start: s.s, end: s.e,
    days: days.map((places) => ({ places })),
    ...(basket.length ? { basket } : {}),
    checklist: checklistFor(country),
  };
}

/**
 * 주소의 # 부분(공유 링크)에서 일정을 읽는다. 체크리스트는 공유하지 않으므로 나라 기본값.
 * 공유 링크가 아니면 "none", 읽을 수 없으면(잘린 링크 등) "invalid".
 */
export async function readSharedTrip(hash: string, countryOf: (slug: string) => PlannerCountry | undefined): Promise<Trip | "none" | "invalid"> {
  const params = new URLSearchParams(hash.replace(/^#/, ""));
  const z = params.get("z");
  const t = params.get("t");
  if (!z && !t) return "none";
  try {
    if (z) {
      const json = new TextDecoder().decode(await pipeBytes(base64UrlToBytes(z), new DecompressionStream("deflate-raw")));
      const s = JSON.parse(json) as CompactTrip;
      const country = countryOf(s.c);
      if (s.v !== 2 || !country || nightsBetween(s.s, s.e) < 0) return "invalid";
      return toTrip(s, s.d.map((places) => places.map(fromCompact)), (s.b ?? []).map(fromCompact), country);
    }
    const s = JSON.parse(new TextDecoder().decode(base64UrlToBytes(t!))) as SharedTrip;
    const country = countryOf(s.c);
    if (s.v !== 1 || !country || nightsBetween(s.s, s.e) < 0) return "invalid";
    const fromV1 = ([time, name, category, lat, lng, wiki, image]: SharedPlace): Place => fromCompact([time, name, category, lat, lng, wiki, image]);
    return toTrip(s, s.d.map((places) => places.map(fromV1)), (s.b ?? []).map(fromV1), country);
  } catch {
    return "invalid";
  }
}
