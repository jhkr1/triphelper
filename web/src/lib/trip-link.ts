import { db } from "@/lib/supabase";
import { BASE_PATH } from "@/lib/site";
import type { Trip } from "@/types/trip";

/*
 * 보기 전용 링크: 저장된 원본 일정에 공유 코드를 붙여, 받은 사람이 로그인 없이 지금의 일정을 본다.
 * 사본이 아니라서 주인이 고치면 링크로 보는 내용도 바뀐다. 주인만 만들고 끄거나 새 코드로 바꾼다.
 * 권한은 DB가 막는다 (supabase/migrations/20261120070000_trip_view_links.sql)
 * DB에 저장되지 않은 일정은 예전처럼 일정 전체를 주소에 담는 링크(#z=)를 쓴다.
 */

/** 링크로 보는 일정: 준비물·여행지 바구니는 빠져 있다 */
export interface SharedTrip {
  trip: Omit<Trip, "checklist" | "cloud" | "basket">;
  updatedAt: string;
  nickname: string;
  avatar?: string;
}

export const viewUrl = (origin: string, code: string) => `${origin}${BASE_PATH}/trip/?v=${encodeURIComponent(code)}`;

const message = (e: unknown, fallback: string) => {
  const m = e && typeof e === "object" && "message" in e ? String((e as { message: unknown }).message) : "";
  return /주인만/.test(m) ? m : fallback;
};

/** 이 일정에 켜져 있는 보기 링크 코드 (없으면 null). 주인·멤버가 읽을 수 있다 */
export async function getViewLink(tripId: string): Promise<string | null> {
  const { data, error } = await (await db()).from("trip_view_links").select("code").eq("trip_id", tripId).maybeSingle();
  if (error) throw error;
  return (data?.code as string | undefined) ?? null;
}

/** 보기 링크 만들기 (이미 있으면 그대로). renew면 새 코드로 바꿔 예전 링크를 막는다. 주인만 */
export async function makeViewLink(tripId: string, renew = false): Promise<string> {
  const { data, error } = await (await db()).rpc("trip_view_link", { t: tripId, renew });
  if (error) throw new Error(message(error, "링크를 만들지 못했어요. 잠시 뒤 다시 시도해 주세요."));
  return data as string;
}

/** 보기 링크 끄기. 주인만 */
export async function removeViewLink(tripId: string) {
  const { error } = await (await db()).rpc("remove_trip_view_link", { t: tripId });
  if (error) throw new Error(message(error, "링크를 끄지 못했어요. 잠시 뒤 다시 시도해 주세요."));
}

/** 링크로 일정 읽기 (로그인 없이). 링크가 꺼졌거나 잘못됐으면 null */
export async function getSharedTrip(code: string): Promise<SharedTrip | null> {
  const { data, error } = await (await db()).rpc("get_shared_trip", { code });
  if (error) throw error;
  const row = (data as { data: SharedTrip["trip"]; updated_at: string; nickname: string; avatar_url: string | null }[] | null)?.[0];
  if (!row) return null;
  return { trip: row.data, updatedAt: row.updated_at, nickname: row.nickname, ...(row.avatar_url ? { avatar: row.avatar_url } : {}) };
}
