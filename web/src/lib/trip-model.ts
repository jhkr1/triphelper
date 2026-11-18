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

/** 관광지를 일정에 담을 때: 장소가 가장 적은 날에, 그날 마지막 일정 1시간 뒤(없으면 10:00)로 */
export function addAttraction(trip: Trip, a: Attraction): { trip: Trip; day: number } {
  const day = trip.days.reduce((best, d, i) => (d.places.length < trip.days[best].places.length ? i : best), 0);
  const last = trip.days[day].places.at(-1)?.time;
  const time = last ? `${String(Math.min(Number(last.slice(0, 2)) + 1, 23)).padStart(2, "0")}:${last.slice(3)}` : "10:00";
  const place: Place = { id: newId(), time, name: a.name, category: "명소", location: a.location, wiki: a.wiki };
  return {
    trip: { ...trip, days: trip.days.map((d, i) => (i === day ? { places: sortByTime([...d.places, place]) } : d)) },
    day,
  };
}

/* ───────── 공유 링크 (서버 없이 주소 안에 일정 담기) ───────── */

type SharedPlace = [time: string, name: string, category: PlaceCategory, lat?: number, lng?: number, wiki?: string, image?: string];
interface SharedTrip { v: 1; c: string; ci: string; ce: [number, number]; s: string; e: string; d: SharedPlace[][] }

const toBase64Url = (s: string) => btoa(String.fromCharCode(...new TextEncoder().encode(s))).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
const fromBase64Url = (s: string) =>
  new TextDecoder().decode(Uint8Array.from(atob(s.replace(/-/g, "+").replace(/_/g, "/")), (c) => c.charCodeAt(0)));

export function encodeShare(trip: Trip): string {
  const data: SharedTrip = {
    v: 1, c: trip.country, ci: trip.city, ce: [trip.center.lat, trip.center.lng], s: trip.start, e: trip.end,
    d: trip.days.map((day) => day.places.map((p) => [p.time, p.name, p.category, p.location?.lat, p.location?.lng, p.wiki, p.image])),
  };
  return toBase64Url(JSON.stringify(data));
}

/** 공유 링크의 일정을 내 일정으로 만든다 (체크리스트는 공유하지 않으므로 나라 기본값) */
export function decodeShare(code: string, countryOf: (slug: string) => PlannerCountry | undefined): Trip | null {
  try {
    const s = JSON.parse(fromBase64Url(code)) as SharedTrip;
    const country = countryOf(s.c);
    if (s.v !== 1 || !country || nightsBetween(s.s, s.e) < 0) return null;
    return {
      country: s.c, city: s.ci, center: { lat: s.ce[0], lng: s.ce[1] }, start: s.s, end: s.e,
      days: s.d.map((places) => ({
        places: places.map(([time, name, category, lat, lng, wiki, image]) => ({
          id: newId(), time, name, category,
          ...(lat != null && lng != null ? { location: { lat, lng } } : {}),
          ...(wiki ? { wiki } : {}), ...(image ? { image } : {}),
        })),
      })),
      checklist: checklistFor(country),
    };
  } catch {
    return null;
  }
}
