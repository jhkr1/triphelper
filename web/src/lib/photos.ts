import type { Place } from "@/types/trip";
import { distanceMeters } from "@/lib/geo";

/*
 * 장소 사진 찾기 (모두 무료, 키 없음, 저장·공유해도 되는 위키미디어 사진만).
 * 1) 저장된 위키백과 문서(place.wiki) — 문서가 없거나 이름이 다른 곳(예: 공원인데 "○○역")이면 건너뛴다
 * 2) 좌표 주변 위키백과 문서 중 이름이 맞는 것 (위키백과 문서 없이 담은 장소)
 *    → 문서 대표 사진이 지도·로고(svg/png)면 위키데이터의 대표 사진(P18)을 쓴다
 * 3) 그래도 없으면 위키미디어 공용에서 그 자리 80m 안에서 찍힌 사진 ("근처 사진", 식당·숙소·역은 제외)
 * 결과는 브라우저에 저장한다 (못 찾은 결과는 3일 뒤 다시 찾음)
 */

export interface Photo {
  src: string;
  /** 사진 출처 페이지 */
  page: string;
  /** 캡션: "위키백과" | "위키미디어" | "근처 사진" */
  credit: string;
}

export function isWikimediaImage(src: unknown): src is string {
  return typeof src === "string" && /^https:\/\/(upload|thumb)\.wikimedia\.org\/[^\s"'<>\\]+$/u.test(src);
}

const SIZE = 400;
const STORE = "th-photos-v2";
const MISS_TTL = 3 * 24 * 3600 * 1000;
const memory = new Map<string, Promise<Photo | null>>();

type Saved = Record<string, { p: Photo | null; t: number }>;
function readStore(): Saved {
  try { return JSON.parse(localStorage.getItem(STORE) || "{}"); } catch { return {}; }
}
function writeStore(key: string, p: Photo | null) {
  try {
    const all = readStore();
    all[key] = { p, t: Date.now() };
    const keys = Object.keys(all);
    if (keys.length > 600) keys.sort((a, b) => all[a].t - all[b].t).slice(0, keys.length - 600).forEach((k) => delete all[k]);
    localStorage.setItem(STORE, JSON.stringify(all));
    localStorage.removeItem("th-photos"); // 예전 저장 방식 (못 찾은 결과가 영구 저장돼 있었음)
  } catch { /* 저장 못 해도 동작 */ }
}

/* ───────── 이름 비교 ───────── */

const norm = (s: string) => s.normalize("NFKC").toLowerCase().replace(/\(.*?\)|（.*?）/g, "").replace(/[\s·・,.'"’\-_/]/g, "");
const STATION = /(駅|역|station)$/i;

/** 같은 곳을 가리키는 이름인지: 한쪽이 다른 쪽을 충분히 품으면 같다고 본다 ("仲見世" ⊂ "仲見世商店街"). 역은 역끼리만 */
function sameName(title: string, name: string): boolean {
  const a = norm(title), b = norm(name);
  if (a.length < 2 || b.length < 2) return false;
  if (STATION.test(a) !== STATION.test(b)) return false;
  if (a === b) return true;
  // 짧은 쪽이 3글자 이상이고 긴 쪽의 40% 이상일 때만 ("公園" ⊂ "上野公園" 같은 일반 명사는 제외)
  const [short, long] = a.length < b.length ? [a, b] : [b, a];
  return short.length >= 3 && short.length / long.length >= 0.4 && long.includes(short);
}

/** 이름 글자로 위키백과 언어 고르기 */
function langsFor(name: string, hint?: string): string[] {
  const out: string[] = [];
  if (hint) out.push(hint);
  if (/[가-힣]/.test(name)) out.push("ko");
  if (/[ぁ-ゟ゠-ヿ]/.test(name)) out.push("ja");
  else if (/[一-鿿]/.test(name)) out.push("ja", "zh");
  if (/[a-z]/i.test(name)) out.push("en");
  out.push("ko", "en");
  return [...new Set(out)].slice(0, 3);
}

/* ───────── 위키백과·위키데이터·공용 ───────── */

interface WikiPage {
  title: string;
  missing?: string;
  fullurl?: string;
  thumbnail?: { source: string };
  pageprops?: { wikibase_item?: string; disambiguation?: string };
  coordinates?: { lat: number; lon: number }[];
  langlinks?: { lang: string; "*": string }[];
}

/* 위키미디어는 한꺼번에 많이 부르면 잠시 막는다(429) → 동시에 2개까지만, 막히면 한 번 쉬었다 다시 */
let running = 0;
const waiting: (() => void)[] = [];
async function slot<T>(fn: () => Promise<T>): Promise<T> {
  if (running >= 2) await new Promise<void>((r) => waiting.push(r));
  running++;
  try { return await fn(); } finally { running--; waiting.shift()?.(); }
}

const api = <T,>(host: string, params: Record<string, string>): Promise<T> => slot(async () => {
  const url = `https://${host}/w/api.php?` + new URLSearchParams({ format: "json", origin: "*", maxlag: "5", ...params });
  let r = await fetch(url);
  if (r.status === 429 || r.status === 503) { await new Promise((ok) => setTimeout(ok, 1500)); r = await fetch(url); }
  if (!r.ok) throw new Error(String(r.status));
  return r.json() as Promise<T>;
});

/** 주소 뒤의 추적용 ?utm_… 은 뺀다 (게시판 표지 주소 길이 제한 500자) */
const clean = (src: string) => src.replace(/\?utm_[^#]*$/, "");

const PAGE_PROPS = { prop: "pageimages|pageprops|info", piprop: "thumbnail", pithumbsize: String(SIZE), ppprop: "wikibase_item|disambiguation", inprop: "url" };

/** 지도·로고·문장(svg/png/gif)이 아닌 사진인지 */
const isPhotoFile = (src: string) => /\.(jpe?g|webp)(\/|$)/i.test(src) && !/(location|map|locator|logo|flag|emblem)/i.test(src);

/** 위키데이터 대표 사진(P18) → 공용 썸네일 */
async function wikidataPhoto(qid: string): Promise<Photo | null> {
  const d = await api<{ claims?: { P18?: { mainsnak: { datavalue?: { value: string } } }[] } }>("www.wikidata.org", {
    action: "wbgetclaims", entity: qid, property: "P18",
  });
  const file = d.claims?.P18?.[0]?.mainsnak.datavalue?.value;
  return file ? commonsFile(file, "위키미디어") : null;
}

async function commonsFile(file: string, credit: string): Promise<Photo | null> {
  const d = await api<{ query?: { pages?: Record<string, { imageinfo?: { thumburl?: string; descriptionurl?: string }[] }> } }>("commons.wikimedia.org", {
    action: "query", titles: `File:${file.replace(/^File:/, "")}`, prop: "imageinfo", iiprop: "url", iiurlwidth: String(SIZE),
  });
  const info = Object.values(d.query?.pages ?? {})[0]?.imageinfo?.[0];
  return info?.thumburl && isWikimediaImage(info.thumburl) ? { src: clean(info.thumburl), page: info.descriptionurl ?? "", credit } : null;
}

/** 문서 하나 → 사진: 문서 사진이 진짜 사진이면 그것, 아니면 위키데이터 대표 사진 */
async function pagePhoto(p: WikiPage): Promise<Photo | null> {
  const thumb = p.thumbnail?.source;
  if (thumb && isPhotoFile(thumb) && isWikimediaImage(thumb)) return { src: clean(thumb), page: p.fullurl ?? "", credit: "위키백과" };
  const qid = p.pageprops?.wikibase_item;
  const wd = qid ? await wikidataPhoto(qid).catch(() => null) : null;
  if (wd) return wd;
  // 위키데이터에 사진이 없으면 png 사진이라도 (지도·로고는 제외)
  return thumb && isWikimediaImage(thumb) && !/\.svg/i.test(thumb) && !/(location|map|locator|logo|flag|emblem)/i.test(thumb)
    ? { src: clean(thumb), page: p.fullurl ?? "", credit: "위키백과" } : null;
}

/** 저장된 문서 이름("도쿄 타워" 또는 "ja:道頓堀")으로 */
async function fromTitle(wiki: string, name: string): Promise<Photo | null | undefined> {
  const [, lang = "ko", title = wiki] = wiki.match(/^([a-z]{2,3}):(.+)$/) ?? [];
  const d = await api<{ query?: { pages?: Record<string, WikiPage> } }>(`${lang}.wikipedia.org`, { action: "query", redirects: "1", titles: title, ...PAGE_PROPS });
  const page = Object.values(d.query?.pages ?? {})[0];
  // 문서가 없음 · 동음이의 문서 · 다른 곳(공원을 찾았는데 역 문서) → 다른 방법으로
  if (!page || page.missing !== undefined || page.pageprops?.disambiguation !== undefined) return undefined;
  if (STATION.test(norm(page.title)) !== STATION.test(norm(name))) return undefined;
  return pagePhoto(page);
}

/** 좌표 주변(1.5km) 위키백과 문서 중 이름이 맞는 가장 가까운 곳 */
async function fromNearby(place: Place, langs: string[]): Promise<Photo | null> {
  const loc = place.location!;
  // 가장 그럴듯한 언어부터 하나씩 (찾으면 멈춤)
  for (const lang of langs) {
    const pages = await api<{ query?: { pages?: Record<string, WikiPage> } }>(`${lang}.wikipedia.org`, {
      action: "query", generator: "geosearch", ggscoord: `${loc.lat}|${loc.lng}`, ggsradius: "1500", ggslimit: "60",
      colimit: "max", lllang: "ko", lllimit: "max", ...PAGE_PROPS, prop: `${PAGE_PROPS.prop}|coordinates|langlinks`,
    }).then((d) => Object.values(d.query?.pages ?? {})).catch(() => [] as WikiPage[]);
    const matches = pages
      .filter((p) => sameName(p.title, place.name) || (p.langlinks?.[0] && sameName(p.langlinks[0]["*"], place.name)))
      .map((p) => ({ p, m: p.coordinates?.[0] ? distanceMeters(loc, { lat: p.coordinates[0].lat, lng: p.coordinates[0].lon }) : 9999 }))
      .sort((a, b) => a.m - b.m);
    for (const { p } of matches.slice(0, 2)) {
      const photo = await pagePhoto(p).catch(() => null);
      if (photo) return photo;
    }
  }
  return null;
}

/** 이름으로 위키백과 검색 (주변 검색 40~60곳 밖에 있는 문서용) */
async function fromSearch(place: Place, lang: string): Promise<Photo | null> {
  const d = await api<{ query?: { pages?: Record<string, WikiPage & { index?: number }> } }>(`${lang}.wikipedia.org`, {
    action: "query", generator: "search", gsrsearch: place.name, gsrlimit: "3", ...PAGE_PROPS, prop: `${PAGE_PROPS.prop}|coordinates`,
  });
  const loc = place.location;
  const page = Object.values(d.query?.pages ?? {})
    .sort((a, b) => (a.index ?? 0) - (b.index ?? 0))
    .find((p) => p.pageprops?.disambiguation === undefined && (loc
      // 위치를 알면: 문서에도 좌표가 있고 3km 안 (같은 이름의 다른 지역 문서 방지)
      ? sameName(p.title, place.name) && Boolean(p.coordinates?.[0]) && distanceMeters(loc, { lat: p.coordinates![0].lat, lng: p.coordinates![0].lon }) < 3000
      // 위치를 모르면: 이름이 정확히 같을 때만
      : norm(p.title) === norm(place.name)));
  return page ? pagePhoto(page) : null;
}

/** 위키미디어 공용: 그 자리 80m 안에서 찍힌 사진 */
async function fromCommonsNearby(place: Place): Promise<Photo | null> {
  const loc = place.location!;
  const d = await api<{ query?: { geosearch?: { title: string }[] } }>("commons.wikimedia.org", {
    action: "query", list: "geosearch", gsnamespace: "6", gscoord: `${loc.lat}|${loc.lng}`, gsradius: "80", gslimit: "10",
  });
  const file = d.query?.geosearch?.map((x) => x.title).find((t) => /\.(jpe?g)$/i.test(t) && !/(map|logo|sign|menu|receipt|ticket|document)/i.test(t));
  return file ? commonsFile(file, "근처 사진") : null;
}

const NO_NEARBY_PHOTO = new Set(["식당", "숙소", "교통", "공항"]);

const keyOf = (p: Place) =>
  `${p.wiki ?? ""}|${p.name}|${p.location ? `${p.location.lat.toFixed(4)},${p.location.lng.toFixed(4)}` : ""}`;

async function resolve(place: Place): Promise<Photo | null> {
  if (place.wiki) {
    // 문서는 맞는데 사진이 없으면 아래(주변 문서·근처 사진)에서 다시 찾는다
    const r = await fromTitle(place.wiki, place.name).catch(() => undefined);
    if (r) return r;
  }
  const hint = place.wiki?.match(/^([a-z]{2,3}):/)?.[1];
  const langs = langsFor(place.name, hint);
  if (place.location) {
    const near = await fromNearby(place, langs).catch(() => null);
    if (near) return near;
  }
  // 식당·숙소는 같은 이름의 다른 곳(체인점·회사 문서)이 걸리기 쉬워 이름 검색을 하지 않는다
  if (NO_NEARBY_PHOTO.has(place.category)) return null;
  const found = await fromSearch(place, langs[0]).catch(() => null);
  if (found) return found;
  if (!place.location) return null;
  return fromCommonsNearby(place).catch(() => null);
}

/** 장소 사진 (같은 장소는 한 번만 찾는다) */
export function placePhoto(place: Place): Promise<Photo | null> {
  if (isWikimediaImage(place.image) && !place.wiki) {
    return Promise.resolve({ src: place.image, page: "", credit: "위키백과" });
  }
  const key = keyOf(place);
  if (!memory.has(key)) {
    const saved = readStore()[key];
    if (saved && (saved.p || Date.now() - saved.t < MISS_TTL)) {
      memory.set(key, Promise.resolve(saved.p));
    } else {
      memory.set(key, resolve(place).then(
        (p) => { writeStore(key, p); return p; },
        () => { memory.delete(key); return null; },
      ));
    }
  }
  return memory.get(key)!;
}

/** 화면에서 지금 이 장소 사진을 이미 알고 있으면 바로 (깜빡임 줄이기) */
export function knownPhoto(place: Place): Photo | null | undefined {
  if (isWikimediaImage(place.image) && !place.wiki) return { src: place.image, page: "", credit: "위키백과" };
  const s = readStore()[keyOf(place)];
  return s && (s.p || Date.now() - s.t < MISS_TTL) ? s.p : undefined;
}
