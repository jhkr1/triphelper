// 나라별 주요 관광지 데이터를 만들어 src/data/attractions.ts 로 저장한다.
// 실행 (컨테이너 /app/web): node scripts/build-attractions.mjs
// 일부 나라만 다시 받기: ONLY=russia,japan node scripts/build-attractions.mjs (나머지 나라는 기존 데이터 유지)
//
// 관광지 목록(아래 CURATED, 영어 위키백과 문서 제목)은 사람이 정하고,
// 위키백과에서 사진·좌표·한국어 이름·한 줄 설명만 가져온다. (자동 수집은 행정구역·사건 문서가 섞여 쓰지 않음)
// 무료 공개 API만 사용하며, 요청 사이에 쉬어 서버 부담을 줄인다.
import fs from "node:fs";
import path from "node:path";
import { destinations } from "../src/data/destinations.ts";
import { attractions as existing } from "../src/data/attractions.ts";

const OUT = path.resolve(import.meta.dirname, "../src/data/attractions.ts");
const UA = { "User-Agent": "TripHelper-data-builder/1.0 (https://triphelper.kr)" };

const CURATED = {
  "south-korea": ["Gyeongbokgung", "N Seoul Tower", "Bukchon Hanok Village", "Myeong-dong", "Haeundae Beach", "Gamcheon Culture Village", "Seongsan Ilchulbong", "Hallasan"],
  japan: ["Sensō-ji", "Tokyo Skytree", "Meiji Shrine", "Shibuya Crossing", "Fushimi Inari-taisha", "Kinkaku-ji", "Kiyomizu-dera", "Osaka Castle"],
  france: ["Eiffel Tower", "Louvre", "Notre-Dame de Paris", "Arc de Triomphe", "Palace of Versailles", "Mont-Saint-Michel", "Sacré-Cœur, Paris", "Promenade des Anglais"],
  spain: ["Sagrada Família", "Park Güell", "Alhambra", "Museo del Prado", "Plaza Mayor, Madrid", "Seville Cathedral", "Casa Batlló", "La Rambla, Barcelona"],
  "united-states": ["Statue of Liberty", "Times Square", "Central Park", "Golden Gate Bridge", "Hollywood Sign", "Alcatraz Island", "Metropolitan Museum of Art", "Grand Canyon"],
  italy: ["Colosseum", "Trevi Fountain", "Pantheon, Rome", "Vatican Museums", "Florence Cathedral", "Grand Canal (Venice)", "St Mark's Basilica", "Leaning Tower of Pisa"],
  turkey: ["Hagia Sophia", "Sultan Ahmed Mosque", "Topkapı Palace", "Grand Bazaar, Istanbul", "Basilica Cistern", "Galata Tower", "Göreme National Park", "Pamukkale"],
  mexico: ["Teotihuacan", "Chichen Itza", "Zócalo", "National Museum of Anthropology (Mexico)", "Palacio de Bellas Artes", "Frida Kahlo Museum", "Xochimilco", "Tulum"],
  "united-kingdom": ["Big Ben", "Tower of London", "Tower Bridge", "British Museum", "Buckingham Palace", "London Eye", "Edinburgh Castle", "Stonehenge"],
  germany: ["Brandenburg Gate", "Neuschwanstein Castle", "Cologne Cathedral", "Reichstag building", "Museum Island", "East Side Gallery", "Marienplatz", "Heidelberg Castle"],
  greece: ["Acropolis of Athens", "Parthenon", "Acropolis Museum", "Santorini", "Mykonos", "Meteora", "Delphi", "Knossos"],
  austria: ["Schönbrunn Palace", "St. Stephen's Cathedral, Vienna", "Hofburg", "Belvedere, Vienna", "Vienna State Opera", "Hallstatt", "Mirabell Palace", "Hohensalzburg Fortress"],
  china: ["Forbidden City", "Great Wall of China", "Temple of Heaven", "Summer Palace", "The Bund", "Yu Garden", "Oriental Pearl Tower", "Terracotta Army"],
  canada: ["CN Tower", "Niagara Falls", "Stanley Park", "Granville Island", "Old Quebec", "Notre-Dame Basilica (Montreal)", "Banff National Park", "Lake Louise (Alberta)"],
  hungary: ["Hungarian Parliament Building", "Buda Castle", "Fisherman's Bastion", "Széchenyi Chain Bridge", "St. Stephen's Basilica", "Matthias Church", "Széchenyi thermal bath", "Heroes' Square (Budapest)"],
  switzerland: ["Matterhorn", "Jungfraujoch", "Chillon Castle", "Kapellbrücke", "Rhine Falls", "Zytglogge", "Jet d'Eau", "Lake Geneva"],
  netherlands: ["Rijksmuseum", "Van Gogh Museum", "Anne Frank House", "Dam Square", "Keukenhof", "Kinderdijk", "Zaanse Schans", "Mauritshuis"],
  portugal: ["Belém Tower", "Jerónimos Monastery", "Pena Palace", "Praça do Comércio", "Livraria Lello", "Dom Luís I Bridge", "Cabo da Roca", "Lisbon Cathedral"],
  philippines: ["Intramuros", "Fort Santiago", "Rizal Park", "Boracay", "Chocolate Hills", "Puerto Princesa Subterranean River National Park", "Mayon", "El Nido, Palawan"],
  vietnam: ["Hạ Long Bay", "Hội An Ancient Town", "Hoàn Kiếm Lake", "Imperial City of Huế", "Củ Chi tunnels", "Bến Thành Market", "Mỹ Sơn", "Phong Nha-Kẻ Bàng National Park"],
  australia: ["Sydney Opera House", "Sydney Harbour Bridge", "Bondi Beach", "Uluru", "Great Barrier Reef", "Twelve Apostles (Victoria)", "Federation Square", "Daintree Rainforest"],
  thailand: ["Grand Palace", "Wat Arun", "Wat Pho", "Chatuchak Weekend Market", "Wat Phra That Doi Suthep", "Ayutthaya Historical Park", "Phi Phi Islands", "Wat Rong Khun"],
  taiwan: ["Taipei 101", "National Palace Museum", "Chiang Kai-shek Memorial Hall", "Shilin Night Market", "Bangka Lungshan Temple", "Jiufen", "Sun Moon Lake", "Taroko National Park"],
  "hong-kong": ["Victoria Peak", "Victoria Harbour", "Tian Tan Buddha", "Former Kowloon-Canton Railway Clock Tower", "Temple Street Night Market", "Avenue of Stars, Hong Kong", "Man Mo Temple", "Hong Kong Disneyland"],
  singapore: ["Marina Bay Sands", "Gardens by the Bay", "Merlion", "Sentosa", "Singapore Botanic Gardens", "Chinatown, Singapore", "Raffles Hotel", "Clarke Quay"],
  malaysia: ["Petronas Towers", "Batu Caves", "Merdeka Square, Kuala Lumpur", "Kuala Lumpur Tower", "George Town, Penang", "Malacca City", "Langkawi", "Mount Kinabalu"],
  russia: ["Red Square", "Saint Basil's Cathedral", "Moscow Kremlin", "Bolshoi Theatre", "Hermitage Museum", "Peterhof Palace", "Church of the Savior on Spilled Blood", "Lake Baikal"],
  "new-zealand": ["Milford Sound", "Hobbiton Movie Set", "Waitomo Glowworm Caves", "Sky Tower (Auckland)", "Lake Tekapo", "Aoraki / Mount Cook", "Tongariro Alpine Crossing", "Museum of New Zealand Te Papa Tongarewa"],
  guam: ["Tumon Bay", "Two Lovers Point", "Ritidian Point", "Fort Nuestra Señora de la Soledad", "Dulce Nombre de Maria Cathedral Basilica", "Plaza de España (Hagåtña)", "War in the Pacific National Historical Park", "Guam Museum"],
  mongolia: ["Sükhbaatar Square", "Gandantegchinlen Monastery", "Chinggis Khaan Equestrian Statue", "Gorkhi-Terelj National Park", "Erdene Zuu Monastery", "Khövsgöl Lake", "Khongoryn Els", "Bogd Khan Palace Museum"],
  "czech-republic": ["Prague Castle", "Charles Bridge", "Old Town Square", "Prague astronomical clock", "St. Vitus Cathedral", "Český Krumlov Castle", "Karlštejn", "Sedlec Ossuary"],
  "united-arab-emirates": ["Burj Khalifa", "Sheikh Zayed Grand Mosque", "Palm Jumeirah", "Burj Al Arab", "Louvre Abu Dhabi", "Museum of the Future", "Al Fahidi Historical Neighbourhood", "Dubai Creek"],
  laos: ["Kuang Si Falls", "Wat Xieng Thong", "Mount Phousi", "Pha That Luang", "Patuxai", "Vang Vieng", "Plain of Jars", "Wat Phou"],
  macau: ["Ruins of Saint Paul's", "Senado Square", "A-Ma Temple", "Macau Tower", "Guia Fortress", "Mount Fortress", "Taipa Houses–Museum", "Cotai Strip"],
  saipan: ["Managaha", "Mount Tapochau", "Banzai Cliff", "Suicide Cliff", "American Memorial Park", "Tinian", "Laulau Bay"],
  croatia: ["Walls of Dubrovnik", "Plitvice Lakes National Park", "Diocletian's Palace", "Krka National Park", "St. Mark's Church, Zagreb", "Zagreb Cathedral", "Sea Organ", "Hvar (town)"],
  uzbekistan: ["Registan", "Gur-e-Amir", "Shah-i-Zinda", "Bibi-Khanym Mosque", "Po-i-Kalyan", "Ark of Bukhara", "Itchan Kala", "Chorsu Bazaar"],
  indonesia: ["Borobudur","Prambanan", "Tanah Lot", "Uluwatu Temple", "Ubud", "Mount Bromo", "Komodo National Park", "National Monument (Indonesia)"],
};

/** 한국어 문서가 없거나 문서 제목이 어색한 곳의 화면용 한국어 이름 (영어 문서 제목 → 표기) */
const DISPLAY_NAMES = {
  "N Seoul Tower": "N서울타워",
  "Kinkaku-ji": "킨카쿠지(금각사)",
  "Frida Kahlo Museum": "프리다 칼로 박물관",
  Tulum: "툴룸 유적",
  "Granville Island": "그랜빌 아일랜드",
  "Notre-Dame Basilica (Montreal)": "몬트리올 노트르담 대성당",
  "Jet d'Eau": "제트 분수",
  "Fort Santiago": "산티아고 요새",
  "Wat Phra That Doi Suthep": "왓 프라탓 도이수텝",
  "Wat Rong Khun": "왓 롱쿤(백색 사원)",
  "The Big Buddha (Hong Kong)": "톈탄 대불",
  "Tian Tan Buddha": "톈탄 대불",
  "Temple Street, Hong Kong": "템플 스트리트 야시장",
  "Temple Street Night Market": "템플 스트리트 야시장",
  "Avenue of Stars, Hong Kong": "스타의 거리",
  "Uluwatu Temple": "울루와뚜 사원",
  "Göreme Historical National Park": "괴레메 국립공원",
  "Göreme National Park": "괴레메 국립공원",
  "Hội An Old Town": "호이안 구시가지",
  "Hội An Ancient Town": "호이안 구시가지",
  "Mỹ Sơn": "미선 유적",
  "Waitomo Glowworm Cave": "와이토모 반딧불이 동굴",
  "Waitomo Glowworm Caves": "와이토모 반딧불이 동굴",
  "Tongariro Alpine Crossing": "통가리로 알파인 크로싱",
  "Tumon Bay": "투몬 만",
  "Two Lovers Point": "사랑의 절벽",
  "Ritidian Point": "리티디안 포인트",
  "Guam National Wildlife Refuge": "리티디안 포인트",
  "Fort Nuestra Señora de la Soledad": "솔레다드 요새",
  "Dulce Nombre de Maria Cathedral Basilica": "하갓냐 대성당",
  "Plaza de España (Hagåtña)": "스페인 광장",
  "Khongoryn Els": "홍고린 엘스 사구",
  "Karlštejn": "카를슈테인 성",
  "Karlštejn Castle": "카를슈테인 성",
  "Museum of the Future": "미래 박물관",
  "Kuang Si Falls": "꽝시 폭포",
  "Patuxai": "빠뚜싸이",
  "Guia Fortress": "기아 요새",
  "Fortaleza do Monte": "몬테 요새",
  "Mount Fortress": "몬테 요새",
  "Taipa Houses–Museum": "타이파 주택 박물관",
  "Krka National Park": "크르카 국립공원",
  "Gur-e-Amir": "구르 에미르",
  "Shah-i-Zinda": "샤히진다",
  "Po-i-Kalyan": "포이 칼론",
  "Ark of Bukhara": "부하라 아르크",
  "Chorsu Bazaar": "초르수 바자르",
  "Tinian": "티니안섬",
  "Laulau Bay": "라우라우 베이",
};

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
async function json(url) {
  for (let i = 0; i < 3; i++) {
    const r = await fetch(url, { headers: UA });
    if (r.ok) return r.json();
    await sleep(1500 * (i + 1));
  }
  throw new Error(`failed: ${url}`);
}

/** 영어 위키백과 문서 → 좌표·사진·한국어 문서 제목 */
async function lookupEn(titles) {
  const params = {
    action: "query", format: "json", redirects: "1", titles: titles.join("|"),
    prop: "coordinates|pageimages|langlinks|pageprops", ppprop: "wikibase_item", colimit: "max", piprop: "thumbnail", pithumbsize: "480", lllang: "ko", lllimit: "max",
  };
  // 위키백과는 결과가 많으면 나눠서 준다(continue) → 끝까지 이어받아 문서별로 합친다
  let d = await json("https://en.wikipedia.org/w/api.php?" + new URLSearchParams(params));
  const merged = d.query?.pages ?? {};
  const renames = [...(d.query?.normalized ?? []), ...(d.query?.redirects ?? [])]; // 첫 응답에만 있음
  while (d.continue) {
    await sleep(300);
    d = await json("https://en.wikipedia.org/w/api.php?" + new URLSearchParams({ ...params, ...d.continue }));
    for (const [id, p] of Object.entries(d.query?.pages ?? {})) {
      const m = (merged[id] ??= p);
      if (p.coordinates) m.coordinates = p.coordinates;
      if (p.thumbnail) m.thumbnail = p.thumbnail;
      if (p.langlinks) m.langlinks = p.langlinks;
      if (p.pageprops) m.pageprops = p.pageprops;
    }
  }
  await fillFromWikidata(Object.values(merged));
  d.query = { ...d.query, pages: merged };
  // 요청한 제목 → 실제 문서 제목 (넘겨주기·정규화 반영)
  const alias = new Map(renames.map((r) => [r.from, r.to]));
  const resolve = (t) => { let x = t; for (let i = 0; i < 3 && alias.has(x); i++) x = alias.get(x); return x; };
  const pages = new Map(Object.values(d.query?.pages ?? {}).map((p) => [p.title, p]));
  return titles.map((t) => ({ requested: t, page: pages.get(resolve(t)) }));
}

/**
 * 일부 영어 문서는 좌표·대표 사진을 위키데이터에서 끌어와 보여 줘서 위키백과 조회로는 나오지 않는다.
 * 그런 문서는 위키데이터(P625 좌표, P18 사진)에서 채운다.
 */
async function fillFromWikidata(pages) {
  const need = pages.filter((p) => p.pageprops?.wikibase_item && (!p.coordinates?.length || !p.thumbnail));
  if (!need.length) return;
  await sleep(300);
  const ids = need.map((p) => p.pageprops.wikibase_item);
  const d = await json(`https://www.wikidata.org/w/api.php?action=wbgetentities&format=json&props=claims&ids=${ids.join("|")}`);
  for (const p of need) {
    const claims = d.entities?.[p.pageprops.wikibase_item]?.claims ?? {};
    const coord = claims.P625?.[0]?.mainsnak?.datavalue?.value;
    const file = claims.P18?.[0]?.mainsnak?.datavalue?.value;
    if (!p.coordinates?.length && coord) p.coordinates = [{ lat: coord.latitude, lon: coord.longitude }];
    if (!p.thumbnail && file) {
      p.thumbnail = { source: `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(file.replace(/ /g, "_"))}?width=480` };
    }
  }
}

/** 한국어 문서의 짧은 설명 */
async function koDescriptions(titles) {
  const out = {};
  for (let i = 0; i < titles.length; i += 40) {
    const d = await json("https://ko.wikipedia.org/w/api.php?" + new URLSearchParams({
      action: "query", format: "json", redirects: "1", prop: "description|extracts", exintro: "1", explaintext: "1", exsentences: "1",
      titles: titles.slice(i, i + 40).join("|"),
    }));
    for (const p of Object.values(d.query?.pages ?? {})) {
      // 짧은 설명이 있으면 그것을, 없으면 첫 문장. 괄호(원어 표기 등)는 빼고, 괄호 안에서 잘린 문장은 버린다
      let text = (p.description || p.extract || "").replace(/\s*\([^)]*\)/g, "").replace(/\s+/g, " ").trim();
      if (text.includes("(")) text = "";
      if (text.length < 8) text = "";
      if (text) out[p.title] = text.length > 70 ? `${text.slice(0, 68)}…` : text;
    }
    await sleep(400);
  }
  return out;
}

async function cityCenters(d) {
  const out = [];
  for (const c of d.cities) {
    const g = await json(`https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(c.name)}&count=5&language=en`);
    const hit = (g.results ?? []).find((r) => r.country_code?.toLowerCase() === d.countryCode);
    if (hit) out.push({ name: c.nameKo || c.name, lat: hit.latitude, lng: hit.longitude });
    await sleep(250);
  }
  return out;
}

const km = (a, b) => {
  const r = (x) => (x * Math.PI) / 180;
  const h = Math.sin(r(b.lat - a.lat) / 2) ** 2 + Math.cos(r(a.lat)) * Math.cos(r(b.lat)) * Math.sin(r(b.lng - a.lng) / 2) ** 2;
  return 2 * 6371 * Math.asin(Math.sqrt(h));
};

const ONLY = process.env.ONLY ? new Set(process.env.ONLY.split(",").map((x) => x.trim())) : null;
const result = {};
const missing = [];
for (const d of destinations) {
  if (ONLY && !ONLY.has(d.slug)) {
    if (existing[d.slug]) result[d.slug] = existing[d.slug];
    continue;
  }
  const titles = CURATED[d.slug] ?? [];
  const found = await lookupEn(titles);
  await sleep(400);
  const cities = await cityCenters(d);
  const list = [];
  for (const { requested, page } of found) {
    if (!page || page.missing !== undefined || !page.coordinates?.length || !page.thumbnail) {
      missing.push(`${d.slug}: ${requested}${page ? (page.coordinates ? " (사진 없음)" : " (좌표 없음)") : " (문서 없음)"}`);
      continue;
    }
    const location = { lat: +page.coordinates[0].lat.toFixed(5), lng: +page.coordinates[0].lon.toFixed(5) };
    const ko = page.langlinks?.[0]?.["*"];
    const nearest = cities.map((c) => ({ c, dist: km(c, location) })).sort((a, b) => a.dist - b.dist)[0];
    list.push({
      // 화면용 이름: 직접 정한 한국어 표기 → 한국어 문서 제목(구분용 괄호 제거) → 영어 제목
      name: DISPLAY_NAMES[page.title] ?? DISPLAY_NAMES[requested] ?? (ko ? ko.replace(/\s*\([^)]*\)$/, "") : page.title),
      nameEn: page.title,
      wiki: ko || `en:${page.title}`,
      image: page.thumbnail.source,
      location,
      city: nearest && nearest.dist < 60 ? nearest.c.name : "",
    });
  }
  const desc = await koDescriptions(list.filter((a) => !a.wiki.startsWith("en:")).map((a) => a.wiki));
  result[d.slug] = list.map((a) => ({ ...a, summary: desc[a.wiki] ?? "" }));
  console.log(`${d.slug} (${result[d.slug].length}): ${result[d.slug].map((a) => `${a.name}${a.city ? `·${a.city}` : ""}`).join(", ")}`);
}

const body = `// 나라별 주요 관광지. 목록은 scripts/build-attractions.mjs 의 CURATED에서 정하고,
// 사진·좌표·한국어 이름·설명은 위키백과에서 가져온다. 사진은 위키미디어 공용 이미지이며 출처는 각 위키백과 문서다.
import type { Attraction } from "@/types/destination";

export const attractions: Record<string, Attraction[]> = ${JSON.stringify(result, null, 2)};
`;
fs.writeFileSync(OUT, body);
console.log(`\nsaved ${Object.values(result).flat().length} attractions → ${path.relative(process.cwd(), OUT)}`);
if (missing.length) console.log(`빠진 항목 ${missing.length}개:\n  ${missing.join("\n  ")}`);
