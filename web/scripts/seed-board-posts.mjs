// 게시판을 채울 '추천 동선' 글을 만든다 (운영 계정 TripHelper 이름으로 올라감).
// 실행 (컨테이너 /app/web): node scripts/seed-board-posts.mjs [나라slug,…]
//   → ../supabase/.temp/seed-posts.sql 을 만든다. 적용: (호스트) sh scripts/db-sql.sh supabase/.temp/seed-posts.sql
//   같은 제목의 운영 계정 글은 지우고 다시 넣는다 (다시 실행해도 겹치지 않음).
//   DB는 한 사람이 하루 30개까지만 글을 넣게 막는다(지우는 글도 같은 날 넣었으면 센다) → 많이 고칠 때는 나라를 나눠 날을 달리 실행한다.
//   동선 데이터: seed-routes.mjs (태국·프랑스·베트남), seed-routes-more.mjs (25개국), seed-routes-new.mjs (괌·몽골·체코·아랍에미리트·라오스·마카오·사이판·크로아티아·우즈베키스탄)
//
// 동선(장소 고르기·순서·시간·메모)은 직접 짠 것이고, 좌표·사진만 위키백과에서 가져온다.
// 장소는 영어 위키백과 문서 제목으로 적는다 (좌표가 있는 문서만). 메모에는 확실한 정보(복장 규정·휴관일 등)만 적는다.
import fs from "node:fs";
import path from "node:path";
import { OSM, ROUTES as FIRST } from "./seed-routes.mjs";
import { MORE_OSM, MORE_ROUTES } from "./seed-routes-more.mjs";
import { NEW_OSM, NEW_ROUTES } from "./seed-routes-new.mjs";

const ROUTES = [...FIRST, ...MORE_ROUTES, ...NEW_ROUTES];

/** 운영 계정 (로그인 수단 없음, 닉네임 TripHelper). DB에서 직접 만들었다 */
const OPERATOR = "7d1f0c3e-5a2b-4c8e-9f10-0a7e5b1c2d3e";
const OUT = path.resolve(import.meta.dirname, "../../supabase/.temp/seed-posts.sql");
const UA = { "User-Agent": "TripHelper-data-builder/1.0 (https://jhkr1.github.io/triphelper/)" };

async function osmLocation(q) {
  await sleep(1100);
  const d = await json("https://nominatim.openstreetmap.org/search?" + new URLSearchParams({ q, format: "json", limit: "1" }));
  return d[0] ? { lat: +(+d[0].lat).toFixed(5), lng: +(+d[0].lon).toFixed(5) } : undefined;
}

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
async function json(url) {
  for (let i = 0; i < 3; i++) {
    const r = await fetch(url, { headers: UA });
    if (r.ok) return r.json();
    await sleep(1500 * (i + 1));
  }
  throw new Error(`failed: ${url}`);
}

/** 영어 위키백과 문서 → 좌표·사진·한국어 문서 제목 (없으면 위키데이터 좌표) */
async function lookup(titles) {
  const out = new Map();
  for (let i = 0; i < titles.length; i += 20) {
    const chunk = titles.slice(i, i + 20);
    const d = await json("https://en.wikipedia.org/w/api.php?" + new URLSearchParams({
      action: "query", format: "json", redirects: "1", titles: chunk.join("|"),
      prop: "coordinates|pageimages|langlinks|pageprops", ppprop: "wikibase_item", piprop: "thumbnail", pithumbsize: "480", lllang: "ko",
    }));
    const alias = new Map([...(d.query?.normalized ?? []), ...(d.query?.redirects ?? [])].map((r) => [r.from, r.to]));
    const pages = new Map(Object.values(d.query?.pages ?? {}).map((p) => [p.title, p]));
    for (const t of chunk) {
      let x = t; for (let k = 0; k < 3 && alias.has(x); k++) x = alias.get(x);
      const p = pages.get(x);
      if (!p || p.missing !== undefined) continue;
      let loc = p.coordinates?.[0];
      if (!loc && p.pageprops?.wikibase_item) {
        const w = await json(`https://www.wikidata.org/w/api.php?action=wbgetentities&format=json&props=claims&ids=${p.pageprops.wikibase_item}`);
        const c = w.entities?.[p.pageprops.wikibase_item]?.claims?.P625?.[0]?.mainsnak?.datavalue?.value;
        if (c) loc = { lat: c.latitude, lon: c.longitude };
      }
      out.set(t, {
        title: p.title,
        ko: p.langlinks?.[0]?.["*"],
        location: loc ? { lat: +loc.lat.toFixed(5), lng: +loc.lon.toFixed(5) } : undefined,
        image: p.thumbnail?.source,
      });
    }
    await sleep(1000);
  }
  return out;
}

const isWikimediaImage = (s) => typeof s === "string" && s.length <= 500 && /^https:\/\/(upload|thumb)\.wikimedia\.org\/[^\s"'<>\\]+$/u.test(s);
const round3 = (n) => Math.round(n * 1e3) / 1e3;
const sq = (s) => `'${String(s).replaceAll("'", "''")}'`;
const arr = (a) => `array[${a.map(sq).join(",")}]::text[]`;

const only = process.argv[2] ? new Set(process.argv[2].split(",")) : null;
const routes = ROUTES.filter((r) => !only || only.has(r.country));
const info = await lookup([...new Set(routes.flatMap((r) => r.days.flat().map((p) => p[0])))]);
for (const [en, q] of Object.entries({ ...OSM, ...MORE_OSM, ...NEW_OSM })) {
  if (!routes.some((r) => r.days.flat().some((p) => p[0] === en))) continue;
  const w = info.get(en);
  if (w?.location) continue;
  const location = await osmLocation(q);
  if (location) info.set(en, { ...(w ?? {}), location, osm: true });
}

const problems = [];
const rows = routes.map((r) => {
  const days = r.days.map((list) => ({
    places: list.map(([en, name, time, category, duration, memo]) => {
      const w = info.get(en);
      if (!w?.location) problems.push(`${r.country}: ${en} ${w ? "(좌표 없음)" : "(문서 없음)"}`);
      return {
        time, name, category,
        ...(duration ? { duration } : {}),
        ...(w?.location ? { location: w.location } : {}),
        // 위키백과 문서가 없는 곳은 wiki를 비운다 (사진은 화면에서 좌표 근처 사진으로 찾는다)
        ...(w?.title ? { wiki: w.ko || `en:${w.title}` } : {}),
        ...(isWikimediaImage(w?.image) ? { image: w.image } : {}),
        ...(memo ? { memo } : {}),
      };
    }),
  }));
  const located = days.flatMap((d) => d.places).filter((p) => p.location);
  const center = located.length
    ? { lat: +(located.reduce((s, p) => s + p.location.lat, 0) / located.length).toFixed(5), lng: +(located.reduce((s, p) => s + p.location.lng, 0) / located.length).toFixed(5) }
    : { lat: 0, lng: 0 };
  // 카드 대표 사진: 식당·공항을 뺀 장소에서 앞에서부터 3장
  const covers = [...new Set(days.flatMap((d) => d.places).filter((p) => p.image && !["식당", "공항", "숙소"].includes(p.category)).map((p) => p.image))].slice(0, 3);
  const preview = days.map((d) => d.places.filter((p) => p.location).slice(0, 30).map((p) => [round3(p.location.lat), round3(p.location.lng)]));
  const data = { v: 1, country: r.country, city: r.city, center, nights: r.nights, days };
  return { ...r, covers, preview, data, placeCount: days.reduce((s, d) => s + d.places.length, 0) };
});

if (problems.length) {
  console.error("좌표를 못 찾은 장소:\n  " + problems.join("\n  "));
  process.exit(1);
}

const values = rows.map((r) => `(${[
  sq(OPERATOR), sq(r.title), sq(r.summary), sq(r.country), sq(r.city), r.nights, "null", arr(r.tags), r.placeCount,
  `${sq(JSON.stringify(r.preview))}::jsonb`, arr(r.covers), `${sq(JSON.stringify(r.data))}::jsonb`, sq("public"),
].join(", ")})`);

// 한 문장으로 (db-sql.sh는 여러 문장을 한 번에 못 돌린다): 같은 제목의 운영 계정 글을 지우고 새로 넣는다
const sql = `with old as (
  delete from public.posts where user_id = ${sq(OPERATOR)} and title in (${rows.map((r) => sq(r.title)).join(", ")})
)
insert into public.posts (user_id, title, summary, country, city, nights, month, tags, place_count, preview, covers, data, visibility)
values
${values.join(",\n")}
returning share_code, title, place_count, cardinality(covers) as covers;
`;
fs.mkdirSync(path.dirname(OUT), { recursive: true });
fs.writeFileSync(OUT, sql);
for (const r of rows) console.log(`${r.title} — 장소 ${r.placeCount}곳, 사진 ${r.covers.length}장`);
console.log(`→ ${path.relative(process.cwd(), OUT)}`);
