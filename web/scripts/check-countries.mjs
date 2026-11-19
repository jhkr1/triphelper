// 나라 데이터 완성도 검사. 빌드 전에 자동으로 돈다 (package.json 의 prebuild).
// 직접 실행 (컨테이너 /app/web): npm run check:countries
//
// - 오류: 화면이 깨지거나 비는 문제 → 빌드를 멈춘다
// - 경고: 품질 문제(번역 개수 불일치, 관광지 부족, 확인일 없음·오래됨 등) → 알려만 준다
import { destinations } from "../src/data/destinations.ts";
import { phraseSets } from "../src/data/phrases.ts";
import { attractions } from "../src/data/attractions.ts";
import { FALLBACK_USD } from "../src/lib/exchange.ts";

/** 확인일이 이보다 오래되면 경고 (비자·여행경보·결제 정보는 자주 바뀐다) */
const REVIEW_MAX_DAYS = 365;
/** 관광지가 이보다 적으면 경고 */
const MIN_ATTRACTIONS = 6;
/** 작성 중 표시가 남아 있으면 오류 */
const PLACEHOLDER = /작성 필요|TODO|TBD|FIXME/i;

const errors = [];
const warnings = [];
const err = (slug, msg) => errors.push(`${slug}: ${msg}`);
const warn = (slug, msg) => warnings.push(`${slug}: ${msg}`);

const isBlank = (v) => typeof v !== "string" || v.trim() === "";
const daysSince = (iso) => Math.floor((Date.now() - new Date(`${iso}T00:00:00Z`).getTime()) / 86_400_000);

const seenSlugs = new Set();
const seenCodes = new Set();

for (const d of destinations) {
  const s = d.slug || "(slug 없음)";

  // 식별 정보
  if (!/^[a-z0-9-]+$/.test(d.slug ?? "")) err(s, "slug는 소문자·숫자·하이픈만 쓸 수 있습니다");
  if (seenSlugs.has(d.slug)) err(s, "slug가 중복됩니다");
  seenSlugs.add(d.slug);
  if (!/^[a-z]{2}$/.test(d.countryCode ?? "")) err(s, `countryCode는 소문자 2글자여야 합니다 (지금: ${d.countryCode})`);
  if (seenCodes.has(d.countryCode)) err(s, `countryCode ${d.countryCode}가 중복됩니다`);
  seenCodes.add(d.countryCode);
  if (d.isoNumeric !== null && !Number.isInteger(d.isoNumeric)) err(s, "isoNumeric은 정수이거나 null(지도 데이터가 없는 곳)이어야 합니다");
  if (!(Math.abs(d.center?.lat) <= 90 && Math.abs(d.center?.lng) <= 180)) err(s, "center 좌표가 범위를 벗어났습니다");
  if (!/^[a-z]{2,3}-[A-Z]{2}$/.test(d.languageCode ?? "")) err(s, `languageCode 형식이 아닙니다 (예: ja-JP, 지금: ${d.languageCode})`);

  // 이름·소개 (한/영)
  for (const key of ["name", "nameEn", "flag", "summary", "summaryEn"]) if (isBlank(d[key])) err(s, `${key}가 비어 있습니다`);
  if (!d.keywords?.length) err(s, "검색 키워드(keywords)가 없습니다");

  // 통화
  const c = d.currency ?? {};
  for (const key of ["code", "name", "nameEn", "symbol"]) if (isBlank(c[key])) err(s, `currency.${key}가 비어 있습니다`);
  if (c.code && FALLBACK_USD[c.code] == null) warn(s, `환율 대체값이 없습니다 (src/lib/exchange.ts FALLBACK_USD 에 ${c.code} 추가)`);

  // 도시 (날씨 검색용)
  if (!d.cities?.length) err(s, "도시(cities)가 없습니다 (날씨에 필요)");
  d.cities?.forEach((city, i) => { if (isBlank(city.name) || isBlank(city.nameKo)) err(s, `cities[${i}]의 이름이 비어 있습니다`); });

  // 정보 섹션: 한국어는 필수, 영어는 같은 개수여야 자연스럽다
  // (필수템 중 상품 링크 항목은 설명이 없고 영어판에 없을 수 있어 설명 있는 항목만 센다)
  for (const key of ["manners", "souvenirs", "market", "essentials", "visa"]) {
    const ko = (d[key] ?? []).filter((x) => x.description !== undefined);
    const en = (d[`${key}En`] ?? []).filter((x) => x.description !== undefined);
    if (!ko.length) err(s, `${key}가 비어 있습니다`);
    if (!en.length) (key === "visa" ? err : warn)(s, `${key}En(영어)이 비어 있습니다`);
    else if (ko.length !== en.length) warn(s, `${key} 한국어 ${ko.length}개 / 영어 ${en.length}개로 개수가 다릅니다`);
    for (const item of [...(d[key] ?? []), ...(d[`${key}En`] ?? [])]) {
      if (isBlank(item.title)) err(s, `${key} 항목 제목이 비어 있습니다`);
      if (item.description !== undefined && isBlank(item.description)) err(s, `${key} "${item.title}" 설명이 비어 있습니다`);
    }
  }

  // 국가 프로필
  const p = d.profile ?? {};
  for (const key of ["capital", "capitalKo", "region", "regionKo"]) if (isBlank(p[key])) err(s, `profile.${key}가 비어 있습니다`);
  if (!(p.population > 0)) err(s, "profile.population이 없습니다");
  if (!p.languages?.length || !p.languagesKo?.length) err(s, "profile.languages(Ko)가 비어 있습니다");
  if (p.drivingSide !== "left" && p.drivingSide !== "right") err(s, "profile.drivingSide는 left 또는 right여야 합니다");
  if (!isBlank(p.region) && !["Asia", "Europe", "Americas", "Oceania", "Africa"].includes(p.region.split(" · ")[0])) {
    warn(s, `profile.region의 대륙(${p.region.split(" · ")[0]})이 메인 화면 대륙 묶음에 없습니다`);
  }

  // 회화
  const phrases = phraseSets[d.phraseSet];
  if (!phrases) err(s, `회화 세트 "${d.phraseSet}"가 src/data/phrases.ts 에 없습니다`);
  else if (!phrases.length) err(s, `회화 세트 "${d.phraseSet}"가 비어 있습니다`);

  // 관광지
  const count = attractions[d.slug]?.length ?? 0;
  if (count === 0) warn(s, "관광지가 없습니다 (scripts/build-attractions.mjs 의 CURATED에 추가 후 ONLY=slug 로 실행)");
  else if (count < MIN_ATTRACTIONS) warn(s, `관광지가 ${count}곳뿐입니다 (권장 ${MIN_ATTRACTIONS}곳 이상)`);

  // 작성 중 표시
  if (PLACEHOLDER.test(JSON.stringify(d))) err(s, "'작성 필요'·TODO 같은 작성 중 표시가 남아 있습니다");

  // 마지막 확인일
  if (!d.reviewedAt) warn(s, "확인일(reviewedAt)이 없습니다 — 비자·여행경보 등을 확인한 뒤 날짜를 넣어 주세요");
  else if (!/^\d{4}-\d{2}-\d{2}$/.test(d.reviewedAt) || Number.isNaN(daysSince(d.reviewedAt))) err(s, `reviewedAt 형식이 아닙니다 (YYYY-MM-DD, 지금: ${d.reviewedAt})`);
  else if (daysSince(d.reviewedAt) > REVIEW_MAX_DAYS) warn(s, `확인한 지 ${daysSince(d.reviewedAt)}일이 지났습니다 (마지막 확인 ${d.reviewedAt}) — 비자·여행경보 등을 다시 확인해 주세요`);
}

// 관광지 데이터에만 있고 나라 목록에는 없는 항목 (나라를 지웠는데 관광지만 남은 경우)
for (const slug of Object.keys(attractions)) if (!seenSlugs.has(slug)) warn(slug, "관광지 데이터는 있지만 나라 목록(destinations.ts)에 없습니다");

// 결과: 같은 내용의 경고가 많으면 나라 이름을 묶어서 보여 준다
const grouped = (list) => {
  const byMsg = new Map();
  for (const line of list) {
    const i = line.indexOf(": ");
    const [slug, msg] = [line.slice(0, i), line.slice(i + 2)];
    byMsg.set(msg, [...(byMsg.get(msg) ?? []), slug]);
  }
  return [...byMsg].map(([msg, slugs]) => (slugs.length > 3 ? `${msg}\n      → ${slugs.length}개국: ${slugs.join(", ")}` : slugs.map((sl) => `${sl}: ${msg}`).join("\n  ")));
};

console.log(`나라 데이터 검사: ${destinations.length}개국`);
if (warnings.length) console.log(`\n경고 ${warnings.length}개 (빌드는 계속됩니다)\n  ${grouped(warnings).join("\n  ")}`);
if (errors.length) {
  console.error(`\n오류 ${errors.length}개 — 고친 뒤 다시 빌드하세요\n  ${errors.join("\n  ")}`);
  process.exit(1);
}
console.log(`\n오류 없음${warnings.length ? "" : ", 경고 없음"}`);
