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

/** 이 일정의 가장 최근 기록 (= 마지막으로 저장된 모습) */
export async function latestVersionId(tripId: string): Promise<number | null> {
  const { data, error } = await (await db()).from("trip_versions").select("id").eq("trip_id", tripId)
    .order("id", { ascending: false }).limit(1).maybeSingle();
  if (error) throw error;
  return data?.id ?? null;
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
