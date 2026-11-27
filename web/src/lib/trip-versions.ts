import { db } from "@/lib/supabase";
import type { Place, Trip } from "@/types/trip";

/*
 * 일정 기록 (DB trip_versions): 일정 내용이 바뀌어 저장될 때마다 DB 트리거가 그 시점의 일정을 남긴다.
 * 최근 활동의 [이때 보기]로 예전 일정을 보고, 그 시점으로 되돌릴 수 있다.
 */

export type TripContent = Omit<Trip, "cloud" | "checklist">;

export interface TripVersion {
  id: number;
  createdAt: string;
  data: TripContent;
}

export async function getVersion(id: number): Promise<TripVersion> {
  const { data, error } = await (await db()).from("trip_versions").select("id, created_at, data").eq("id", id).single();
  if (error) throw error;
  const { checklist: _, ...content } = data.data as Trip; // eslint-disable-line @typescript-eslint/no-unused-vars
  return { id: data.id, createdAt: data.created_at, data: content };
}

export interface VersionRow extends TripVersion { userId: string | null }

/** 이 일정의 최근 기록 (최신 것부터, DB에 남는 10묶음) */
export async function listVersions(tripId: string): Promise<VersionRow[]> {
  const { data, error } = await (await db()).from("trip_versions").select("id, created_at, user_id, data").eq("trip_id", tripId)
    .order("id", { ascending: false }).limit(10);
  if (error) throw error;
  return (data as { id: number; created_at: string; user_id: string | null; data: Trip }[]).map((r) => {
    const { checklist: _, ...content } = r.data; // eslint-disable-line @typescript-eslint/no-unused-vars
    return { id: r.id, createdAt: r.created_at, userId: r.user_id, data: content };
  });
}

/** 일정에서 뺀 장소: 마지막으로 있던 자리와, 누가 언제 뺐는지 */
export interface RemovedPlace {
  place: Place;
  /** 있던 날 (-1 = 여행지 바구니) */
  day: number;
  /** 그날 안의 순서 */
  index: number;
  /** 뺀 저장의 시각 · 사람. 아직 저장 전이면 없음 (방금 뺌) */
  at?: string;
  by?: string | null;
}

/**
 * 기록(versions, 최신 것부터)에는 있는데 지금 일정(now)에는 없는 장소들 (최근에 뺀 것부터).
 * 장소마다 그 장소가 있던 가장 최근 기록의 자리를 쓰고, 그보다 하나 새로운 기록을 "뺀 때"로 본다.
 */
export function removedPlaces(versions: { createdAt: string; userId: string | null; data: TripContent }[], now: TripContent): RemovedPlace[] {
  const current = new Set(where(now).keys());
  const out: RemovedPlace[] = [];
  const seen = new Set<string>();
  versions.forEach((v, i) => {
    const newer = versions[i - 1];
    const addAll = (places: Place[], day: number) => places.forEach((place, index) => {
      if (current.has(place.id) || seen.has(place.id)) return;
      seen.add(place.id);
      out.push({ place, day, index, ...(newer ? { at: newer.createdAt, by: newer.userId } : {}) });
    });
    v.data.days.forEach((d, day) => addAll(d.places, day));
    addAll(v.data.basket ?? [], -1);
  });
  return out;
}

/** 뺀 장소를 원래 날의 원래 자리에 다시 넣는다. 그날이 없어졌으면 여행지 바구니로. 이미 있으면 그대로 */
export function putBack<T extends TripContent>(trip: T, r: RemovedPlace): T {
  if (where(trip).has(r.place.id)) return trip;
  if (r.day < 0 || r.day >= trip.days.length) {
    const basket = [...(trip.basket ?? [])];
    basket.splice(r.day < 0 ? Math.min(r.index, basket.length) : basket.length, 0, r.place);
    return { ...trip, basket };
  }
  return {
    ...trip,
    days: trip.days.map((d, i) => {
      if (i !== r.day) return d;
      const places = [...d.places];
      places.splice(Math.min(r.index, places.length), 0, r.place);
      return { ...d, places };
    }),
  };
}

/** 예전 일정(then)과 지금(now)의 장소 차이 */
export interface VersionDiff {
  /** 예전에는 있었는데 지금은 빠진 장소 (되돌리면 다시 생김) */
  back: Set<string>;
  /** 지금은 다른 날에 있는 장소 → 지금 있는 날 이름 ("1일차" · "여행지 바구니") */
  moved: Map<string, string>;
  /** 그 뒤에 새로 넣은 장소 (되돌리면 빠짐) */
  later: Place[];
}

function where(t: TripContent): Map<string, { place: Place; day: number }> {
  const m = new Map<string, { place: Place; day: number }>();
  t.days.forEach((d, day) => d.places.forEach((place) => m.set(place.id, { place, day })));
  (t.basket ?? []).forEach((place) => m.set(place.id, { place, day: -1 }));
  return m;
}

export function versionDiff(then: TripContent, now: TripContent): VersionDiff {
  const a = where(then), b = where(now);
  const back = new Set<string>();
  const moved = new Map<string, string>();
  for (const [id, x] of a) {
    const y = b.get(id);
    if (!y) back.add(id);
    else if (y.day !== x.day) moved.set(id, y.day < 0 ? "여행지 바구니" : `${y.day + 1}일차`);
  }
  const later = [...b.values()].filter((y) => !a.has(y.place.id)).map((y) => y.place);
  return { back, moved, later };
}

/** "어제 21:10" · "11월 20일 09:05" · "오늘 14:32" */
export function whenLabel(iso: string, now = new Date()): string {
  const d = new Date(iso);
  const hm = d.toLocaleTimeString("ko-KR", { hour: "2-digit", minute: "2-digit", hour12: false });
  const day = (x: Date) => new Date(x.getFullYear(), x.getMonth(), x.getDate()).getTime();
  const diff = Math.round((day(now) - day(d)) / 86_400_000);
  if (diff === 0) return `오늘 ${hm}`;
  if (diff === 1) return `어제 ${hm}`;
  return `${d.getMonth() + 1}월 ${d.getDate()}일 ${hm}`;
}
