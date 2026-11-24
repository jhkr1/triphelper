import type { Place, Trip } from "@/types/trip";

/*
 * 함께 짜는 일정에서 동시에 고친 내용 합치기 (3방향 병합).
 * base   = 내가 마지막으로 DB와 맞춘 내용
 * local  = 그 뒤 내가 고친 내용
 * remote = 그사이 다른 사람이 저장한 내용
 * 장소는 id로 하나씩 비교한다: 내가 바꾼 장소는 내 것, 아니면 상대 것. 한쪽에서 지운 장소는 지운다.
 * 날짜·도시 같은 일정 정보와 날짜별 숙소도 "내가 바꿨으면 내 것, 아니면 상대 것".
 * 준비물(checklist)은 사람마다 따로라 늘 내 것을 쓴다.
 */

type Data = Omit<Trip, "cloud">;

/** 장소가 있는 자리: 날짜 번호(-1 = 여행지 바구니)와 그날 안의 순서 */
interface Spot { place: Place; day: number; index: number }

/**
 * 항목 순서와 상관없는 JSON 문자열. DB(jsonb)는 저장할 때 항목 순서를 바꾸므로,
 * 같은 내용인지 비교할 때는 늘 이것을 쓴다 (undefined인 칸은 없는 것으로 본다).
 */
export function stableJson(v: unknown): string {
  if (Array.isArray(v)) return `[${v.map((x) => (x === undefined ? "null" : stableJson(x))).join(",")}]`;
  if (v && typeof v === "object") {
    const o = v as Record<string, unknown>;
    return `{${Object.keys(o).filter((k) => o[k] !== undefined).sort().map((k) => `${JSON.stringify(k)}:${stableJson(o[k])}`).join(",")}}`;
  }
  return JSON.stringify(v) ?? "null";
}
const same = (a: unknown, b: unknown) => stableJson(a) === stableJson(b);

function spots(t: Data): Map<string, Spot> {
  const m = new Map<string, Spot>();
  t.days.forEach((d, day) => d.places.forEach((place, index) => m.set(place.id, { place, day, index })));
  (t.basket ?? []).forEach((place, index) => m.set(place.id, { place, day: -1, index }));
  return m;
}

/** 일정 정보 칸 하나: 내가 바꿨으면 내 것, 아니면 상대 것 */
function pick<K extends keyof Data>(k: K, base: Data, local: Data, remote: Data): Data[K] {
  return same(local[k], base[k]) ? remote[k] : local[k];
}

export function mergeTrips(base: Data, local: Data, remote: Data): Data {
  const b = spots(base), l = spots(local), r = spots(remote);
  const out: Spot[] = [];
  // 상대 쪽 순서를 기준으로 담고, 내가 새로 넣은 장소를 뒤에 붙인다 (자리는 index로 다시 정렬)
  for (const [id, rs] of r) {
    const bs = b.get(id), ls = l.get(id);
    if (!bs) { out.push(rs); continue; }        // 상대가 새로 넣음
    if (!ls) continue;                           // 내가 지움
    const mine = !same(ls.place, bs.place) || ls.day !== bs.day || ls.index !== bs.index;
    out.push(mine ? ls : rs);                    // 둘 다 바꿨으면 내 것 (나중에 저장한 쪽)
  }
  for (const [id, ls] of l) {
    if (!b.has(id) && !r.has(id)) out.push(ls); // 내가 새로 넣음
  }
  // 상대가 지운 장소(r에 없고 b에 있음)는 out에 들어가지 않는다

  // 날짜 수: 내가 날짜를 늘리거나 줄였으면 내 것, 아니면 상대 것
  const dayCount = local.days.length !== base.days.length ? local.days.length : remote.days.length;
  const days = Array.from({ length: Math.max(1, dayCount) }, (_, i) => {
    const bStay = base.days[i]?.stay, lStay = local.days[i]?.stay, rStay = remote.days[i]?.stay;
    const stay = same(lStay, bStay) ? rStay : lStay;
    return { places: [] as Place[], ...(stay ? { stay } : {}) };
  });
  const basket: Place[] = [];
  out
    .sort((x, y) => x.index - y.index)
    .forEach((s) => {
      if (s.day < 0) basket.push(s.place);
      else days[Math.min(s.day, days.length - 1)].places.push(s.place);
    });
  // 마지막 날 밤에는 숙소가 없다
  if (days.length) { const last = days[days.length - 1]; delete last.stay; }

  return {
    ...remote,
    country: pick("country", base, local, remote),
    city: pick("city", base, local, remote),
    title: pick("title", base, local, remote),
    center: pick("center", base, local, remote),
    start: pick("start", base, local, remote),
    end: pick("end", base, local, remote),
    datesUnset: pick("datesUnset", base, local, remote),
    days,
    basket,
    checklist: local.checklist,
  };
}

/** 받침에 맞는 조사: 을/를, (으)로 (한글이 아니면 받침 없는 쪽) */
function jong(word: string): number {
  const c = word.trim().slice(-1).charCodeAt(0);
  return c >= 0xac00 && c <= 0xd7a3 ? (c - 0xac00) % 28 : 0;
}
const eul = (w: string) => `${w}${jong(w) ? "을" : "를"}`;
const ro = (w: string) => { const j = jong(w); return `${w}${j && j !== 8 ? "으로" : "로"}`; }; // 8 = ㄹ 받침

/**
 * 날짜별 장소 묶음이 그대로 자리만 바뀌었으면 (Day 탭 끌기) 가장 멀리 움직인 날을 돌려준다.
 * 날짜 수가 같고, 지금의 각 날이 예전의 어느 날과 장소 구성이 똑같을 때만.
 */
function dayMove(base: Data, local: Data): { from: number; to: number } | null {
  if (base.days.length !== local.days.length) return null;
  const key = (d: Data["days"][number]) => d.places.map((p) => p.id).join(",");
  const left = base.days.map(key);
  const used = new Set<number>();
  let best: { from: number; to: number } | null = null;
  for (let to = 0; to < local.days.length; to++) {
    const k = key(local.days[to]);
    // 같은 자리가 맞으면 그 자리를 먼저 (빈 날끼리 엉뚱하게 짝짓지 않게)
    const from = left[to] === k && !used.has(to) ? to : left.findIndex((x, j) => x === k && !used.has(j));
    if (from < 0) return null;
    used.add(from);
    if (k !== "" && from !== to && (!best || Math.abs(from - to) > Math.abs(best.from - best.to))) best = { from, to };
  }
  return best;
}

/** 활동 기록에 남길 문장들: base → local 사이에 "내가" 바꾼 것 (많으면 앞의 몇 개만) */
export function describeChanges(base: Data, local: Data, limit = 5): string[] {
  const b = spots(base), l = spots(local);
  const lines: string[] = [];
  const where = (s: Spot) => (s.day < 0 ? "여행지 바구니" : `${s.day + 1}일차`);
  // Day 탭을 끌어 날짜 순서를 바꿨으면 장소마다 "옮겼어요" 대신 한 줄로
  const moved = dayMove(base, local);
  if (moved) lines.push(`${moved.from + 1}일차 일정을 ${ro(`${moved.to + 1}일차`)} 옮겼어요`);
  for (const [id, ls] of l) {
    const bs = b.get(id);
    if (!bs) lines.push(`${where(ls)}에 ${eul(ls.place.name)} 추가했어요`);
    else if (ls.day !== bs.day) { if (!moved) lines.push(`${eul(ls.place.name)} ${ro(where(ls))} 옮겼어요`); }
    else if ((ls.place.memo ?? "") !== (bs.place.memo ?? "")) lines.push(`${ls.place.name} 메모를 고쳤어요`);
    else if (ls.place.time !== bs.place.time) lines.push(`${ls.place.name} 시간을 ${ls.place.time}로 바꿨어요`);
  }
  for (const [id, bs] of b) if (!l.has(id)) lines.push(`${eul(bs.place.name)} 뺐어요`);
  local.days.forEach((d, i) => {
    const before = base.days[i]?.stay;
    if (d.stay && d.stay.name !== before?.name) lines.push(`${i + 1}일차 밤 숙소를 ${ro(d.stay.name)} 정했어요`);
    else if (!d.stay && before) lines.push(`${i + 1}일차 밤 숙소를 뺐어요`);
  });
  if (local.days.length !== base.days.length) lines.push(`여행 기간을 ${local.days.length}일로 바꿨어요`);
  else if (local.start !== base.start && !local.datesUnset) lines.push("여행 날짜를 바꿨어요");
  if ((local.title ?? "") !== (base.title ?? "")) lines.push(local.title ? `여행 이름을 ${ro(local.title)} 바꿨어요` : "여행 이름을 기본 이름으로 되돌렸어요");
  if (local.city !== base.city) lines.push(`도시를 ${ro(local.city || "나라 전체")} 바꿨어요`);
  return lines.slice(0, limit).map((s) => s.slice(0, 120));
}
