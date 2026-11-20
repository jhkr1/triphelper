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
  if (/railway|station|bus_station|ferry_terminal|pier/.test(k)) return "교통";
  if (/tourism|historic|museum|attraction|viewpoint|park|place_of_worship|leisure|place\/(locality|square|quarter|neighbourhood)/.test(k)) return "명소";
  return "";
}

/** 1차: 지도 검색 (여행하는 나라 안에서, 도시 주변 우선) */
async function searchMap(query: string, countryCode: string, center: LatLng): Promise<PlaceCandidate[]> {
  const viewbox = `${center.lng - 0.4},${center.lat + 0.3},${center.lng + 0.4},${center.lat - 0.3}`;
  const url = `https://nominatim.openstreetmap.org/search?format=jsonv2&limit=3&accept-language=ko&extratags=1&countrycodes=${countryCode}&viewbox=${viewbox}&q=${encodeURIComponent(query)}`;
  const r = await fetch(url, { headers: { Accept: "application/json" } });
  if (!r.ok) throw new Error(String(r.status));
  const raw = (await r.json()) as NominatimResult[];
  // "お台場海浜公園"을 찾았는데 같은 이름의 역이 먼저 나오는 경우: 역을 찾는 게 아니면 역·정류장은 뒤로
  const wantsStation = /(駅|역|station)\s*$/i.test(query.trim());
  const isStop = (x: NominatimResult) => x.category === "railway" || x.type === "bus_stop" || x.type === "station";
  const list = wantsStation ? raw : [...raw.filter((x) => !isStop(x)), ...raw.filter(isStop)];
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

async function searchPhoton(query: string, countryCode: string, center: LatLng, stay: boolean, tags: string[] = []): Promise<PlaceCandidate[]> {
  const params = new URLSearchParams({ q: query, limit: "8", lat: String(center.lat), lon: String(center.lng) });
  (stay ? STAY_TAGS : tags).forEach((t) => params.append("osm_tag", t));
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

/** 장소 종류 말 (단어 끝에 붙은 것만). 빈 값은 지운다 */
const PLACE_WORDS: [string, string][] = Object.entries({
  상점가: "", 상가: "", 거리: "", 골목: "", 선착장: "", 승선장: "", 나루터: "", 수상버스: "water bus", 유람선: "cruise", 시장: "market", 공원: "park", 신사: "shrine", 신궁: "shrine", 사원: "temple", 타워: "tower", 박물관: "museum", 미술관: "museum",
}).sort((a, b) => b[0].length - a[0].length);

/** 검색어에 이런 말이 있으면 그 종류의 장소만 찾는다 ("아사쿠사 수상버스 선착장" → 아사쿠사의 여객선 터미널) */
const KIND_TAGS: [RegExp, string[]][] = [
  [/선착장|승선장|나루터|수상\s*버스|유람선|페리/, ["amenity:ferry_terminal", "man_made:pier"]],
];
export const kindTags = (query: string) => KIND_TAGS.find(([re]) => re.test(query))?.[1] ?? [];

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
  // 장소 종류를 뜻하는 일반 단어는 지도 이름과 잘 안 맞아 정리한다 ("나카미세 상점가" → "nakamise")
  for (const [ko, en] of PLACE_WORDS) s = s.replace(new RegExp(`${[...ko].join("\\s*")}(?=\\s|$)`, "g"), ` ${en} `);
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

/** 도시를 정한 일정에서 이보다 먼 결과는 "이곳이 맞나요?" 확인을 거친다 (같은 이름의 다른 지역 방지) */
const FAR_METERS = 50_000;

/**
 * 장소 찾기. 관광지·식당: 지도 검색 → Photon → 영문으로 바꿔 Photon → 위키백과
 * 숙소(stay): 지도 검색과 Photon(숙소만)을 함께 → 없으면 영문으로 바꿔 다시
 * nearCity: 도시를 정한 일정이면 true. 결과가 모두 도시에서 멀면 다른 방법으로도 찾아 가까운 곳을 앞에 둔다
 *   (예: "나카미세 상점가" → 한국어 이름이 붙은 곳은 시즈오카 누마즈뿐. 영문 "nakamise"로 찾으면 아사쿠사)
 */
export async function searchPlace(
  query: string, countryCode: string, center: LatLng, kind: "place" | "stay" = "place", nearCity = false,
): Promise<PlaceCandidate[]> {
  const stay = kind === "stay";
  const nom = (q: string) => searchMap(q, countryCode, center).catch(() => [] as PlaceCandidate[]);
  const photon = (q: string) => searchPhoton(q, countryCode, center, stay).catch(() => [] as PlaceCandidate[]);
  const far = (c: PlaceCandidate) => nearCity && distanceMeters(center, c.location) > FAR_METERS;
  const noneNear = (list: PlaceCandidate[]) => !list.some((x) => !far(x));

  let results: PlaceCandidate[];
  if (stay) {
    const [a, b] = await Promise.all([nom(query), photon(query)]);
    results = mergeCandidates(a.filter((x) => x.category === "숙소"), b);
  } else {
    results = await nom(query);
    if (noneNear(results)) results = mergeCandidates(results, await photon(query));
  }
  if (noneNear(results)) {
    const latin = await toLatin(query, countryCode).catch(() => null);
    if (latin) {
      // 종류가 분명하면(선착장 등) 그 종류만 이름 앞부분으로 먼저 찾는다
      const tags = stay ? [] : kindTags(query);
      const typed = tags.length ? await searchPhoton(latin, countryCode, center, false, tags).catch(() => []) : [];
      const more = typed.length ? typed : await photon(latin);
      results = mergeCandidates(results, more.map((x) => ({ ...x, needsConfirm: true })));
    }
  }
  if (!results.length && !stay) {
    try { results = await searchWikipedia(query); } catch { /* 위치 없이 추가 */ }
  }
  // 도시 가까운 곳 먼저, 먼 곳은 확인을 거친다
  results = [...results.filter((x) => !far(x)), ...results.filter(far).map((x) => ({ ...x, needsConfirm: true }))];
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

/** 위키데이터 항목의 좌표(P625)와 나라 코드(P17 → P297, 소문자) */
async function wikidataPlace(qid: string): Promise<{ center?: LatLng; country?: string }> {
  type Claims = Record<string, { mainsnak: { datavalue?: { value: unknown } } }[]>;
  const get = (ids: string) => fetch(`https://www.wikidata.org/w/api.php?action=wbgetentities&format=json&origin=*&props=claims&ids=${ids}`)
    .then((r) => r.json() as Promise<{ entities?: Record<string, { claims?: Claims }> }>);
  const claims = (await get(qid)).entities?.[qid]?.claims ?? {};
  const coord = claims.P625?.[0]?.mainsnak.datavalue?.value as { latitude: number; longitude: number } | undefined;
  const countryId = (claims.P17?.[0]?.mainsnak.datavalue?.value as { id?: string } | undefined)?.id;
  const iso = countryId ? (await get(countryId)).entities?.[countryId]?.claims?.P297?.[0]?.mainsnak.datavalue?.value : undefined;
  return {
    ...(coord ? { center: { lat: coord.latitude, lng: coord.longitude } } : {}),
    ...(typeof iso === "string" ? { country: iso.toLowerCase() } : {}),
  };
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

  // 위키백과 문서 → 위키데이터(좌표 · 나라). 지도 검색이 잠시 막혀도(요청 제한) 찾을 수 있다.
  // "오사카"는 좌표 없는 문서라 "오사카시"도 함께, "도쿄"처럼 위키백과 좌표가 없으면 위키데이터 좌표로
  const wk = await fetch(
    `https://ko.wikipedia.org/w/api.php?action=query&format=json&origin=*&redirects=1&prop=coordinates|pageprops&ppprop=wikibase_item&titles=${encodeURIComponent(query)}|${encodeURIComponent(`${query}시`)}`,
  ).then((r) => r.json() as Promise<{ query?: { pages?: Record<string, { title: string; coordinates?: { lat: number; lon: number }[]; pageprops?: { wikibase_item?: string } }> } }>).catch(() => null);
  const pages = Object.values(wk?.query?.pages ?? {}).filter((p) => p.pageprops?.wikibase_item);
  // 입력한 이름 그대로의 문서를 먼저
  pages.sort((x, y) => Number(flat(y.title) === f) - Number(flat(x.title) === f));
  for (const p of pages) {
    const wd = await wikidataPlace(p.pageprops!.wikibase_item!).catch(() => null);
    if (!wd || wd.country !== countryCode) continue;
    const c = p.coordinates?.[0];
    const center = c ? { lat: c.lat, lng: c.lon } : wd.center;
    if (center) return { name: query, center };
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

/* 사진은 lib/photos.ts (placePhoto) */
export { isWikimediaImage } from "@/lib/photos";
