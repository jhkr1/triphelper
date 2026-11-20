import type { LatLng } from "@/types/destination";
import type { Place, PlaceCategory } from "@/types/trip";
import { distanceMeters } from "@/lib/geo";

/**
 * 가까운 순으로 정리: 하루 일정의 순서를 이동 거리(직선)가 가장 짧게 바꾼다.
 * 전날 밤 숙소에서 출발해 그날 밤 숙소로 들어가는 경로로 계산한다 (없으면 그 끝은 열어 둔다).
 * 식당·공항·교통 일정과 위치가 없는 장소는 제자리(같은 순번·같은 시간)를 지키고, 나머지가 남은 자리를 채운다.
 * 시간은 자리에 붙어 있어서, 원래 시간들을 새 순서에 차례대로 다시 붙인다.
 */

const FIXED: PlaceCategory[] = ["식당", "공항", "교통", "숙소"];
const isMovable = (p: Place) => Boolean(p.location) && !FIXED.includes(p.category);

/** 모든 순서를 다 따져 보는 최대 개수 (8! = 40320가지) */
const EXACT_LIMIT = 8;
/** 이만큼(m)도 줄지 않으면 정리하지 않는다 */
const MIN_GAIN = 50;

export const canReorder = (places: Place[]) => places.filter(isMovable).length >= 2;

export interface RouteOrder {
  /** 새 순서 (시간은 자리에 맞게 다시 붙임) */
  places: Place[];
  /** 정리 전·후 총 이동 거리(m) */
  before: number;
  after: number;
}

function pathLength(points: (LatLng | undefined)[]): number {
  let total = 0, last: LatLng | undefined;
  for (const p of points) {
    if (!p) continue; // 위치가 없는 장소는 건너뛰고 앞뒤를 잇는다
    if (last) total += distanceMeters(last, p);
    last = p;
  }
  return total;
}

/** 정리할 게 없거나 거의 줄지 않으면 null */
export function nearestOrder(places: Place[], from?: LatLng, to?: LatLng): RouteOrder | null {
  const slots = places.flatMap((p, i) => (isMovable(p) ? [i] : []));
  if (slots.length < 2) return null;
  const items = slots.map((i) => places[i]);

  // perm[k] = slots[k] 자리에 들어갈 items의 번호
  const points = places.map((p) => p.location);
  const cost = (perm: number[]) => {
    slots.forEach((s, k) => { points[s] = items[perm[k]].location; });
    return pathLength([from, ...points, to]);
  };

  const identity = items.map((_, k) => k);
  const before = cost(identity);
  const best = slots.length <= EXACT_LIMIT ? exactOrder(identity, cost) : improve(greedy(places, slots, items, from), cost);
  const after = cost(best);
  if (before - after < MIN_GAIN) return null;

  const order = [...places];
  slots.forEach((s, k) => { order[s] = { ...items[best[k]], time: places[s].time }; });
  return { places: order, before, after };
}

/** 모든 순서를 따져 가장 짧은 것 (Heap 알고리즘) */
function exactOrder(identity: number[], cost: (perm: number[]) => number): number[] {
  const a = [...identity], c = a.map(() => 0);
  let best = [...a], bestCost = cost(a);
  let i = 0;
  while (i < a.length) {
    if (c[i] < i) {
      const j = i % 2 === 0 ? 0 : c[i];
      [a[j], a[i]] = [a[i], a[j]];
      const d = cost(a);
      if (d < bestCost) { bestCost = d; best = [...a]; }
      c[i]++;
      i = 0;
    } else {
      c[i] = 0;
      i++;
    }
  }
  return best;
}

/** 자리를 앞에서부터 채우며, 바로 앞 지점에서 가장 가까운 장소를 고른다 */
function greedy(places: Place[], slots: number[], items: Place[], from?: LatLng): number[] {
  const left = new Set(items.map((_, k) => k));
  const perm: number[] = [];
  let last = from;
  let s = 0;
  places.forEach((p, i) => {
    if (slots[s] !== i) { if (p.location) last = p.location; return; }
    let pick = [...left][0];
    if (last) {
      let bestD = Infinity;
      for (const k of left) {
        const d = distanceMeters(last, items[k].location!);
        if (d < bestD) { bestD = d; pick = k; }
      }
    }
    left.delete(pick);
    perm.push(pick);
    last = items[pick].location;
    s++;
  });
  return perm;
}

/** 구간 뒤집기(2-opt)와 맞바꾸기로 더 줄지 않을 때까지 다듬는다 */
function improve(start: number[], cost: (perm: number[]) => number): number[] {
  let perm = start, bestCost = cost(perm);
  for (let round = 0; round < 50; round++) {
    let better = false;
    for (let i = 0; i < perm.length - 1; i++) {
      for (let j = i + 1; j < perm.length; j++) {
        const reversed = [...perm.slice(0, i), ...perm.slice(i, j + 1).reverse(), ...perm.slice(j + 1)];
        const swapped = [...perm];
        [swapped[i], swapped[j]] = [swapped[j], swapped[i]];
        for (const cand of [reversed, swapped]) {
          const d = cost(cand);
          if (d < bestCost - 1e-6) { bestCost = d; perm = cand; better = true; }
        }
      }
    }
    if (!better) break;
  }
  return perm;
}
