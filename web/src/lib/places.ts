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
  if (/hotel|hostel|guest_house|apartment|motel|chalet/.test(k)) return "숙소";
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

/* ───────── Photon (OpenStreetMap 기반, 철자가 조금 달라도 찾아 줌) ─────────
 * Nominatim은 이름이 정확해야 하지만 Photon은 "toyoko inn shinjuku"처럼 일부·영문 이름도 잘 찾는다.
 * 대신 한국어 이름이 없는 해외 숙소가 많아, 한국어로 쓰면 아래 toLatin()으로 영문을 만들어 한 번 더 찾는다.
 */

const STAY_TAGS = ["tourism:hotel", "tourism:hostel", "tourism:guest_house", "tourism:motel", "tourism:apartment", "tourism:chalet"];

interface PhotonFeature {
  geometry: { coordinates: [number, number] };
  properties: {
    name?: string; osm_key: string; osm_value: string; countrycode?: string;
    city?: string; district?: string; locality?: string; street?: string; housenumber?: string;
  };
}

async function searchPhoton(query: string, countryCode: string, center: LatLng, stay: boolean): Promise<PlaceCandidate[]> {
  const params = new URLSearchParams({ q: query, limit: "8", lat: String(center.lat), lon: String(center.lng) });
  if (stay) STAY_TAGS.forEach((t) => params.append("osm_tag", t));
  const r = await fetch(`https://photon.komoot.io/api/?${params}`);
  if (!r.ok) throw new Error(String(r.status));
  const { features } = (await r.json()) as { features: PhotonFeature[] };
  return features
    .filter((f) => f.properties.name && f.properties.countrycode?.toLowerCase() === countryCode)
    .slice(0, 4)
    .map((f) => {
      const p = f.properties;
      const [lng, lat] = f.geometry.coordinates;
      return {
        name: p.name!,
        sub: [p.street && [p.street, p.housenumber].filter(Boolean).join(" "), p.district ?? p.locality, p.city].filter(Boolean).join(", "),
        location: { lat, lng },
        category: categoryOf({ category: p.osm_key, type: p.osm_value }),
        importance: 0,
      };
    });
}

/* ───────── 한국어 → 영문 (해외 숙소 이름 찾기용) ───────── */

const HANGUL = /[가-힣]/;

/** 숙소 이름에 자주 나오는 말 (붙여 써도, 띄어 써도 찾음) */
const STAY_WORDS: [string, string][] = Object.entries({
  게스트하우스: "guesthouse", 호스텔: "hostel", 호텔: "hotel", 리조트: "resort", 료칸: "ryokan", 레지던스: "residence", 아파트먼트: "apartment",
  도요코인: "Toyoko Inn", 토요코인: "Toyoko Inn", 도미인: "Dormy Inn", 아파: "APA", 슈퍼: "Super", 그레이서리: "Gracery", 그레이스리: "Gracery",
  미쓰이가든: "Mitsui Garden", 미츠이가든: "Mitsui Garden", 소테츠프레사: "Sotetsu Fresa", 소테쓰프레사: "Sotetsu Fresa", 다이와로이넷: "Daiwa Roynet",
  리치몬드: "Richmond", 칸데오: "Candeo", 비아인: "Via Inn", 호시노야: "Hoshinoya", 오모: "OMO", 미야코: "Miyako", 프린스: "Prince", 뉴오타니: "New Otani",
  힐튼: "Hilton", 힐턴: "Hilton", 콘래드: "Conrad", 메리어트: "Marriott", 코트야드: "Courtyard", 하얏트: "Hyatt", 이비스: "ibis", 노보텔: "Novotel",
  머큐어: "Mercure", 소피텔: "Sofitel", 홀리데이인: "Holiday Inn", 인터컨티넨탈: "InterContinental", 크라운플라자: "Crowne Plaza", 쉐라톤: "Sheraton",
  웨스틴: "Westin", 리츠칼튼: "Ritz-Carlton", 포시즌스: "Four Seasons", 페닌슐라: "Peninsula", 만다린오리엔탈: "Mandarin Oriental", 샹그릴라: "Shangri-La",
  베스트웨스턴: "Best Western", 라마다: "Ramada", 롯데: "Lotte", 신라: "Shilla", 나인트리: "Nine Tree", 앰배서더: "Ambassador", 시티: "City", 그랜드: "Grand",
}).sort((a, b) => b[0].length - a[0].length);

// 한글 로마자 표기 (자모 → 소리)
const INITIAL = ["g", "kk", "n", "d", "tt", "r", "m", "b", "pp", "s", "ss", "", "j", "jj", "ch", "k", "t", "p", "h"];
const MEDIAL = ["a", "ae", "ya", "yae", "eo", "e", "yeo", "ye", "o", "wa", "wae", "oe", "yo", "u", "wo", "we", "wi", "yu", "eu", "ui", "i"];
const FINAL = ["", "k", "k", "k", "n", "n", "n", "t", "l", "k", "m", "l", "l", "l", "p", "l", "m", "p", "p", "t", "t", "ng", "t", "t", "k", "t", "p", "t"];

/** 한글 → 로마자. 일본 지명은 한국어 표기 관례에 맞춰 바꾼다 (신주쿠 → shinjuku, 삿포로 → sapporo, 츠키지 → tsukiji) */
export function romanize(text: string, japan: boolean): string {
  const syl = [...text].map((ch) => {
    const c = ch.charCodeAt(0) - 0xac00;
    if (c < 0 || c > 11171) return null;
    return { i: Math.floor(c / 588), m: Math.floor((c % 588) / 28), f: c % 28 };
  });
  let out = "";
  [...text].forEach((ch, k) => {
    const s = syl[k];
    if (!s) { out += ch; return; }
    let ini = INITIAL[s.i], med = MEDIAL[s.m];
    if (japan) {
      if (s.m === 18 && (s.i === 10 || s.i === 14)) ini = "ts";                         // 쓰·츠 → tsu
      if (s.m === 18 && s.i === 12) ini = "z";                                            // 즈 → zu
      if (med === "eu") med = "u";                                                        // 스 → su
      if (med === "eo") med = "o";
      if (ini === "s" && med === "i") ini = "sh";                                          // 시 → shi
      if (s.i === 18 && s.m === 13) ini = "f";                                             // 후 → fu
    }
    let fin = FINAL[s.f];
    const next = syl[k + 1];
    if (japan && (s.f === 19 || s.f === 20) && next) fin = (INITIAL[next.i] || "")[0] ?? ""; // 삿포 → sappo (촉음)
    if (japan && fin === "ng") fin = "n";
    out += ini + med + fin;
  });
  return out;
}

/** 위키백과 문서 연결로 한국어 지명 → 영문 (긴자 → Ginza, 난바 → Namba) */
async function wikiEnglish(words: string[]): Promise<Record<string, string>> {
  if (!words.length) return {};
  const url = "https://ko.wikipedia.org/w/api.php?" + new URLSearchParams({
    action: "query", format: "json", origin: "*", redirects: "1", prop: "langlinks", lllang: "en", lllimit: "max", titles: words.join("|"),
  });
  const d = await fetch(url).then((r) => r.json() as Promise<{
    query?: { redirects?: { from: string; to: string }[]; pages?: Record<string, { title: string; langlinks?: { "*": string }[] }> };
  }>);
  const byTitle = new Map(Object.values(d.query?.pages ?? {}).map((p) => [p.title, p.langlinks?.[0]?.["*"]]));
  const result: Record<string, string> = {};
  for (const w of words) {
    const to = d.query?.redirects?.find((x) => x.from === w)?.to ?? w;
    const en = byTitle.get(to);
    // "Shibuya, Tokyo"·"APA Group (Japan)" → 앞부분만. 동네 이름이 아닌 회사·대학 문서 등은 버린다
    if (en && to === w) result[w] = en.replace(/\s*\(.*\)$/, "").split(",")[0];
  }
  return result;
}

/** "아파호텔 신주쿠" → "APA hotel shinjuku". 바꿀 게 없으면 null */
export async function toLatin(query: string, countryCode: string): Promise<string | null> {
  if (!HANGUL.test(query)) return null;
  let s = query;
  for (const [ko, en] of STAY_WORDS) s = s.replace(new RegExp([...ko].join("\\s*"), "g"), ` ${en} `);
  const rest = [...new Set(s.match(/[가-힣]+/g) ?? [])];
  let dict: Record<string, string> = {};
  try { dict = await wikiEnglish(rest.slice(0, 10)); } catch { /* 로마자로만 */ }
  s = s.replace(/[가-힣]+/g, (w) => dict[w] ?? romanize(w, countryCode === "jp"));
  s = s.replace(/\s+/g, " ").trim();
  return s && s !== query ? s : null;
}

/** 이미 찾은 후보와 100m 안에 있으면 같은 곳으로 본다 */
function mergeCandidates(a: PlaceCandidate[], b: PlaceCandidate[]): PlaceCandidate[] {
  const out = [...a];
  for (const c of b) if (!out.some((x) => distanceMeters(x.location, c.location) < 100)) out.push(c);
  return out;
}

/**
 * 장소 찾기. 관광지·식당: 지도 검색 → Photon → 위키백과
 * 숙소(stay): 지도 검색과 Photon(숙소만)을 함께 → 없고 한국어로 썼으면 영문으로 바꿔 다시 (이때는 맞는지 사용자 확인)
 */
export async function searchPlace(query: string, countryCode: string, center: LatLng, kind: "place" | "stay" = "place"): Promise<PlaceCandidate[]> {
  const stay = kind === "stay";
  const nom = (q: string) => searchMap(q, countryCode, center).catch(() => [] as PlaceCandidate[]);
  const photon = (q: string) => searchPhoton(q, countryCode, center, stay).catch(() => [] as PlaceCandidate[]);

  let results: PlaceCandidate[];
  if (stay) {
    const [a, b] = await Promise.all([nom(query), photon(query)]);
    results = mergeCandidates(a.filter((x) => x.category === "숙소"), b);
  } else {
    results = await nom(query);
    if (!results.length) results = await photon(query);
  }
  if (!results.length) {
    const latin = await toLatin(query, countryCode).catch(() => null);
    if (latin) results = (await photon(latin)).map((x) => ({ ...x, needsConfirm: true }));
  }
  if (!results.length && !stay) {
    try { results = await searchWikipedia(query); } catch { /* 위치 없이 추가 */ }
  }
  return results.slice(0, 5);
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
