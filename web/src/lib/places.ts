import type { LatLng } from "@/types/destination";
import type { PlaceCategory } from "@/types/trip";
import { distanceMeters } from "@/lib/geo";

/*
 * 장소 검색·도시 확인·근처 추천·사진. 모두 무료이고 API 키가 필요 없다.
 * - OpenStreetMap Nominatim: 초당 1회 제한 → 사용자가 "추가/적용"을 누를 때만 호출
 * - 위키백과: 띄어쓰기에 덜 민감하고 좌표와 대표 사진을 함께 준다
 */

const flat = (s: string) => s.replace(/\s+/g, "").toLowerCase();

export interface PlaceCandidate {
  name: string;
  /** 주소 요약 (후보 고르기 화면에 표시) */
  sub: string;
  location: LatLng;
  category: PlaceCategory;
  importance: number;
  wiki?: string;
  /** 사용자에게 "이곳이 맞나요?"를 확인해야 하는 결과 */
  needsConfirm?: boolean;
}

interface NominatimResult {
  lat: string;
  lon: string;
  name?: string;
  display_name: string;
  category: string;
  type: string;
  addresstype?: string;
  importance?: number;
  extratags?: { wikipedia?: string } | null;
}

function categoryOf(r: Pick<NominatimResult, "category" | "type">): PlaceCategory {
  const k = `${r.category}/${r.type}`;
  if (/restaurant|cafe|fast_food|food_court|bar|pub/.test(k)) return "식당";
  if (/^shop\/|mall|department_store|marketplace/.test(k)) return "쇼핑";
  if (/hotel|hostel|guest_house|apartment/.test(k)) return "숙소";
  if (/aeroway|aerodrome/.test(k)) return "공항";
  if (/railway|station|bus_station/.test(k)) return "교통";
  if (/tourism|historic|museum|attraction|viewpoint|park|place_of_worship|leisure|place\/(locality|square|quarter|neighbourhood)/.test(k)) return "명소";
  return "";
}

/** 1차: 지도 검색 (여행하는 나라 안에서, 도시 주변 우선) */
async function searchMap(query: string, countryCode: string, center: LatLng): Promise<PlaceCandidate[]> {
  const viewbox = `${center.lng - 0.4},${center.lat + 0.3},${center.lng + 0.4},${center.lat - 0.3}`;
  const url = `https://nominatim.openstreetmap.org/search?format=jsonv2&limit=3&accept-language=ko&extratags=1&countrycodes=${countryCode}&viewbox=${viewbox}&q=${encodeURIComponent(query)}`;
  const r = await fetch(url, { headers: { Accept: "application/json" } });
  if (!r.ok) throw new Error(String(r.status));
  const list = (await r.json()) as NominatimResult[];
  return list.map((x) => {
    const category = categoryOf(x);
    // 사진: 지도 데이터에 연결된 위키백과 문서(예: "ja:道頓堀") → 없으면 입력한 이름으로 한국어 위키백과
    // (식당·가게는 로고 같은 엉뚱한 사진이 붙을 수 있어 이름 검색은 하지 않음)
    const wiki = x.extratags?.wikipedia || (category === "식당" || category === "쇼핑" ? undefined : query);
    return {
      name: (x.name || x.display_name.split(",")[0]).split(";")[0],
      sub: x.display_name.split(",").slice(1, 4).join(",").trim(),
      location: { lat: Number(x.lat), lng: Number(x.lon) },
      category,
      importance: x.importance ?? 0,
      ...(wiki ? { wiki } : {}),
    };
  });
}

interface WikiSummary {
  title: string;
  coordinates?: { lat: number; lon: number };
  thumbnail?: { source: string };
  content_urls?: { desktop?: { page?: string } };
}

const summaryUrl = (lang: string, title: string) =>
  `https://${lang}.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(title.replace(/ /g, "_"))}`;

/** 2차: 위키백과 (유명 관광지 좌표 + 사진). 이름이 정확히 같을 때만 자동 확정 */
async function searchWikipedia(query: string): Promise<PlaceCandidate[]> {
  const s = await fetch(
    `https://ko.wikipedia.org/w/api.php?action=query&list=search&srlimit=1&format=json&origin=*&srsearch=${encodeURIComponent(query)}`,
  ).then((r) => r.json() as Promise<{ query?: { search?: { title: string }[] } }>);
  const title = s.query?.search?.[0]?.title;
  if (!title) return [];
  const d = (await fetch(summaryUrl("ko", title)).then((r) => r.json())) as WikiSummary;
  if (!d.coordinates) return [];
  return [{
    name: d.title,
    sub: "위키백과 검색 결과",
    location: { lat: d.coordinates.lat, lng: d.coordinates.lon },
    category: "명소",
    importance: 1,
    wiki: d.title,
    // 예: "돈키호테 시부야" → "시부야" 같은 오탐 방지
    needsConfirm: flat(d.title) !== flat(query),
  }];
}

/** 장소 찾기: 지도 검색 → 없으면 위키백과 */
export async function searchPlace(query: string, countryCode: string, center: LatLng): Promise<PlaceCandidate[]> {
  let results: PlaceCandidate[] = [];
  try { results = await searchMap(query, countryCode, center); } catch { /* 2차 검색으로 */ }
  if (!results.length) {
    try { results = await searchWikipedia(query); } catch { /* 위치 없이 추가 */ }
  }
  return results;
}

/** 후보가 하나이거나 1위가 확실히 앞서면 바로 확정 */
export const isConfident = (results: PlaceCandidate[]) =>
  results.length > 0 && !results[0].needsConfirm &&
  (results.length === 1 || results[0].importance - results[1].importance > 0.15);

/* ───────── 도시 확인 ───────── */

const PLACE_TYPES = ["city", "town", "village", "municipality", "state", "province", "region", "county", "island", "borough"];

export interface CityResult {
  name: string;
  center: LatLng;
  /** 정확히 일치하지 않아 가장 가까운 결과를 쓴 경우의 실제 이름 */
  approxName?: string;
}

/** 그 나라 안의 실제 도시인지 확인하고 중심 좌표를 받는다. 정확한 이름 → 위키백과(○○, ○○시) → 가장 비슷한 결과 순 */
export async function findCity(query: string, countryCode: string): Promise<CityResult | null> {
  const nom = await fetch(
    `https://nominatim.openstreetmap.org/search?format=jsonv2&limit=5&accept-language=ko&countrycodes=${countryCode}&q=${encodeURIComponent(query)}`,
  ).then((r) => r.json() as Promise<NominatimResult[]>).catch(() => []);
  const places = nom.filter((r) => r.addresstype && PLACE_TYPES.includes(r.addresstype));
  const f = flat(query);
  const exact = places.find((r) => [f, `${f}시`, `${f}부`, `${f}도`, `${f}광역시`, `${f}특별시`].includes(flat(r.name ?? "")));
  if (exact) return { name: query, center: { lat: Number(exact.lat), lng: Number(exact.lon) } };

  // "오사카"는 좌표 없는 문서라 "오사카시"도 함께 확인
  const wk = await fetch(
    `https://ko.wikipedia.org/w/api.php?action=query&format=json&origin=*&redirects=1&prop=coordinates&titles=${encodeURIComponent(query)}|${encodeURIComponent(`${query}시`)}`,
  ).then((r) => r.json() as Promise<{ query?: { pages?: Record<string, { coordinates?: { lat: number; lon: number }[] }> } }>).catch(() => null);
  const page = Object.values(wk?.query?.pages ?? {}).find((p) => p.coordinates?.length);
  if (page?.coordinates) {
    const { lat, lon } = page.coordinates[0];
    const rv = await fetch(`https://nominatim.openstreetmap.org/reverse?format=jsonv2&zoom=3&lat=${lat}&lon=${lon}`)
      .then((r) => r.json() as Promise<{ address?: { country_code?: string } }>).catch(() => null);
    if (rv?.address?.country_code === countryCode) return { name: query, center: { lat, lng: lon } };
  }
  const near = places[0];
  if (near) return { name: near.name ?? query, center: { lat: Number(near.lat), lng: Number(near.lon) }, approxName: near.name };
  return null;
}

/* ───────── 근처 추천 ───────── */

export interface NearbyPlace {
  name: string;
  wiki?: string;
  image: string;
  location: LatLng;
  meters: number;
  kind: "landmark" | "image" | "tree" | "bag" | "eye";
}

// 관광지로 볼 만한 문서만 남기고(역·회사·학교·사건 등 제외), 문서 분량과 한국어 문서 유무로 유명도 순위
const KEEP = /temple|shrine|museum|park|garden|tower|castle|palace|market|square|cathedral|church|basilica|mosque|theat(re|er)|opera|gallery|monument|memorial|sculpture|statue|amusement|shopping|mall|department store|landmark|observation|zoo|aquarium|fountain|gate|plaza|historic|heritage|attraction|bridge|art/i;
const SKIP = /station|railway|subway|metro|company|corporation|school|university|college|hospital|embassy|hotel|apartment|fire|attack|incident|arrondissement|ward|neighbourhood|objects|weapon/i;
const KIND: [RegExp, NearbyPlace["kind"]][] = [[/museum|gallery|art/i, "image"], [/park|garden|zoo/i, "tree"], [/shopping|mall|market|department/i, "bag"], [/tower|observation|skyscraper/i, "eye"]];

interface GeoPage {
  title: string;
  description?: string;
  length?: number;
  thumbnail?: { source: string };
  coordinates?: { lat: number; lon: number }[];
  langlinks?: { "*": string }[];
}

/** 위키백과 위치 검색 1회로 반경 1km 명소 + 사진 + 한국어 이름 (보통 1초 안팎) */
export async function fetchNearby(from: LatLng, exclude: Set<string>): Promise<NearbyPlace[]> {
  const url = "https://en.wikipedia.org/w/api.php?" + new URLSearchParams({
    action: "query", format: "json", origin: "*", generator: "geosearch", ggscoord: `${from.lat}|${from.lng}`, ggsradius: "1000", ggslimit: "50",
    prop: "coordinates|pageimages|description|langlinks|info", colimit: "max", piprop: "thumbnail", pithumbsize: "330", lllang: "ko", lllimit: "max",
  });
  const ctrl = new AbortController();
  const timer = setTimeout(() => ctrl.abort(), 8000);
  let data: { query?: { pages?: Record<string, GeoPage> } };
  try {
    const r = await fetch(url, { signal: ctrl.signal });
    if (!r.ok) throw new Error(`위키백과 ${r.status}`);
    data = await r.json();
  } catch (err) {
    throw new Error(err instanceof Error && err.name === "AbortError" ? "응답 시간 초과" : String(err));
  } finally {
    clearTimeout(timer);
  }

  return Object.values(data.query?.pages ?? {})
    .filter((p) => p.thumbnail && p.coordinates?.length && !SKIP.test(p.description ?? "") && KEEP.test(`${p.description ?? ""} ${p.title}`))
    .map((p) => {
      const ko = p.langlinks?.[0]?.["*"];
      const location = { lat: p.coordinates![0].lat, lng: p.coordinates![0].lon };
      const meters = distanceMeters(from, location);
      const kind = KIND.find(([re]) => re.test(p.description ?? ""))?.[1] ?? "landmark";
      const score = Math.log10(p.length || 1) * 10 + (ko ? 8 : 0) - meters / 250;
      return { name: ko || p.title, wiki: ko, image: p.thumbnail!.source, location, meters, kind, score };
    })
    .filter((x) => x.meters > 40 && !exclude.has(x.name) && !(x.wiki && exclude.has(x.wiki)))
    .sort((a, b) => b.score - a.score)
    .slice(0, 4)
    .map((x) => ({ name: x.name, wiki: x.wiki, image: x.image, location: x.location, meters: x.meters, kind: x.kind }));
}

/* ───────── 사진 ───────── */

export interface Photo {
  src: string;
  page: string;
}

const PHOTO_KEY = "th-photos";
const photoCache = new Map<string, Promise<Photo | null>>();

/** "도쿄 타워"는 한국어 위키백과에서, "ja:道頓堀"처럼 언어가 붙으면 그 언어 위키백과에서 대표 사진을 찾는다. 결과는 브라우저에 저장 */
export function getPhoto(title: string): Promise<Photo | null> {
  if (!photoCache.has(title)) {
    let saved: Record<string, Photo | null> = {};
    try { saved = JSON.parse(localStorage.getItem(PHOTO_KEY) || "{}"); } catch { /* ignore */ }
    if (title in saved) {
      photoCache.set(title, Promise.resolve(saved[title]));
    } else {
      const [, lang = "ko", name = title] = title.match(/^([a-z]{2,3}):(.+)$/) ?? [];
      const request = fetch(summaryUrl(lang, name))
        .then((r) => (r.ok ? (r.json() as Promise<WikiSummary>) : null))
        .then((d) => {
          const photo = d?.thumbnail?.source ? { src: d.thumbnail.source, page: d.content_urls?.desktop?.page ?? "" } : null;
          try {
            const all = JSON.parse(localStorage.getItem(PHOTO_KEY) || "{}");
            all[title] = photo;
            localStorage.setItem(PHOTO_KEY, JSON.stringify(all));
          } catch { /* ignore */ }
          return photo;
        })
        .catch(() => { photoCache.delete(title); return null; });
      photoCache.set(title, request);
    }
  }
  return photoCache.get(title)!;
}
