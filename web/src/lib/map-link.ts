import type { LatLng } from "@/types/destination";
import { parseLocation, type ParsedLocation, type PlusRef } from "@/lib/geo";
import { recoverPlusCode } from "@/lib/pluscode";
import { authEnabled, authStore, db } from "@/lib/supabase";

/*
 * 붙여 넣은 좌표·지도 링크·플러스 코드 → 위치 (지도 검색에 없는 곳을 넣을 때)
 *
 * 휴대폰 구글 지도 '공유' 링크(maps.app.goo.gl/…)는 열어 봐야 진짜 주소가 나오는데,
 * 브라우저는 다른 사이트의 넘김(redirect) 주소를 읽을 수 없어(CORS) Supabase Edge Function이 대신 연다
 * (supabase/functions/resolve-map-link). 넘어간 주소에는 좌표 대신 플러스 코드가 오는 경우가 많다.
 */

/**
 * - ParsedLocation: 위치를 읽음
 * - "login": 공유 링크인데 로그인하지 않음 (Edge Function은 로그인한 사람만)
 * - "short": 공유 링크를 열지 못함
 * - "plus":  플러스 코드의 기준 지역을 찾지 못함
 * - null:    좌표·링크가 아님 (이름으로 검색할 것)
 */
export type ReadResult = ParsedLocation | "login" | "short" | "plus" | null;

/** 오류 결과를 사용자 문구로 */
export const readErrorText: Record<"login" | "short" | "plus", string> = {
  login: "휴대폰 '공유' 링크는 로그인하면 바로 읽을 수 있어요. 로그인 없이 쓰려면 구글 지도에서 그 자리를 길게 눌러 나온 좌표를 복사해 주세요.",
  short: "공유 링크를 열지 못했어요. 잠시 뒤 다시 시도하거나, 구글 지도에서 그 자리를 길게 눌러 나온 좌표를 복사해 주세요.",
  plus: "플러스 코드의 지역을 찾지 못했어요. 지역 이름까지 함께 붙여 넣어 주세요 (예: HXCG+75W 서울특별시).",
};

/** near: 여행지 중심 (지역 이름 없는 짧은 플러스 코드의 기준점) */
export async function readLocation(text: string, near: LatLng): Promise<ReadResult> {
  let r = parseLocation(text);
  if (r === "short") {
    const opened = await expandMapLink(text.trim());
    if (opened === "login" || opened === null) return opened ?? "short";
    r = parseLocation(opened);
    if (!r || r === "short") return "short";
  }
  if (r && "plus" in r) return (await fromPlusCode(r, near)) ?? "plus";
  return r;
}

/** 짧은 플러스 코드: 지역 이름이 있으면 그 지역을, 없으면 여행지 중심을 기준점으로 */
async function fromPlusCode({ plus, locality }: PlusRef, near: LatLng): Promise<ParsedLocation | null> {
  const ref = (locality && (await geocodeLocality(locality).catch(() => null))) || near;
  const location = recoverPlusCode(plus, ref);
  return location ? { location } : null;
}

async function geocodeLocality(q: string): Promise<LatLng | null> {
  const r = await fetch(`https://nominatim.openstreetmap.org/search?format=jsonv2&limit=1&accept-language=ko&q=${encodeURIComponent(q)}`, {
    headers: { Accept: "application/json" },
  });
  if (!r.ok) return null;
  const [hit] = (await r.json()) as { lat: string; lon: string }[];
  return hit ? { lat: Number(hit.lat), lng: Number(hit.lon) } : null;
}

/** 공유 링크를 열어 넘어가는 주소를 받는다 (로그인한 사람만) */
async function expandMapLink(url: string): Promise<string | "login" | null> {
  if (!authEnabled || authStore.getSnapshot().status !== "in") return "login";
  try {
    const { data, error } = await (await db()).functions.invoke<{ url?: string }>("resolve-map-link", { body: { url } });
    return !error && typeof data?.url === "string" ? data.url : null;
  } catch {
    return null;
  }
}
