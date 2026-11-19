import { authStore, supabase, type AuthSnapshot } from "@/lib/supabase";
import { LOADING, tripStore } from "@/lib/trip-store";
import { nightsBetween } from "@/lib/trip-model";
import type { Trip } from "@/types/trip";

/*
 * 내 일정 자동 저장 (로그인했을 때만).
 * - 일정이 바뀌면 1.5초 기다렸다가 DB에 저장 (계속 고치는 동안은 기다림)
 * - 처음 저장하면 DB id를 일정에 붙여 두고(trip.cloud), 그다음부터는 같은 줄을 고친다
 * - 아직 아무것도 담지 않은 빈 일정은 저장하지 않는다 (들어올 때마다 빈 일정이 쌓이지 않게)
 * - 로그아웃하면 이 기기에 남은 일정을 지운다 (공용 컴퓨터에서 내 일정이 남지 않게. DB에는 그대로 있음)
 */

export interface TripMeta {
  id: string;
  title: string;
  country: string;
  city: string;
  nights: number;
  updatedAt: string;
}

export type SyncStatus =
  | { state: "off" }       // 로그인 안 함 (이 기기에만 저장)
  | { state: "idle" }      // 저장할 게 없음 (빈 일정)
  | { state: "pending" }   // 곧 저장
  | { state: "saving" }
  | { state: "saved"; at: string }
  | { state: "error"; message: string };

const DEBOUNCE_MS = 1500;

/** DB에 넣는 내용: 연결 정보(cloud)는 빼고 */
const payload = (t: Trip) => { const { cloud: _, ...data } = t; return data; }; // eslint-disable-line @typescript-eslint/no-unused-vars
const contentKey = (t: Trip) => JSON.stringify(payload(t));
const hasContent = (t: Trip) =>
  t.days.some((d) => d.places.length || d.stay) || Boolean(t.basket?.length) || t.checklist.done.length > 0;

/* ───────── DB ───────── */

const metaOf = (r: { id: string; title: string; country: string; city: string; nights: number; updated_at: string }): TripMeta =>
  ({ id: r.id, title: r.title, country: r.country, city: r.city, nights: r.nights, updatedAt: r.updated_at });

export async function listMyTrips(userId: string): Promise<TripMeta[]> {
  const { data, error } = await supabase!.from("trips")
    .select("id, title, country, city, nights, updated_at").eq("user_id", userId).order("updated_at", { ascending: false });
  if (error) throw error;
  return (data ?? []).map(metaOf);
}

export async function loadTrip(id: string, userId: string): Promise<Trip> {
  const { data, error } = await supabase!.from("trips").select("data, updated_at").eq("id", id).single();
  if (error) throw error;
  return { ...(data.data as Trip), cloud: { id, userId, savedAt: data.updated_at } };
}

export async function deleteTrip(id: string) {
  const { error } = await supabase!.from("trips").delete().eq("id", id);
  if (error) throw error;
}

async function writeTrip(t: Trip, userId: string): Promise<{ id: string; savedAt: string }> {
  const row = {
    title: t.city ? `${t.city} 여행` : "",
    country: t.country,
    city: t.city,
    nights: Math.max(0, Math.min(29, nightsBetween(t.start, t.end))),
    data: payload(t),
  };
  const q = t.cloud?.userId === userId
    ? supabase!.from("trips").update(row).eq("id", t.cloud.id).select("id, updated_at").single()
    : supabase!.from("trips").insert(row).select("id, updated_at").single();
  const { data, error } = await q;
  if (error) throw error;
  return { id: data.id, savedAt: data.updated_at };
}

/* ───────── 자동 저장 ───────── */

let status: SyncStatus = { state: "off" };
const statusListeners = new Set<() => void>();
function setStatus(s: SyncStatus) { status = s; statusListeners.forEach((l) => l()); }

export const syncStatusStore = {
  subscribe(l: () => void) { statusListeners.add(l); return () => { statusListeners.delete(l); }; },
  getSnapshot: () => status,
  getServerSnapshot: (): SyncStatus => ({ state: "off" }),
};

let userId: string | null = null;
let timer: number | undefined;
let lastSavedKey = "";
let running: Promise<void> | null = null;
let started = false;

function currentTrip(): Trip | null {
  const t = tripStore.getSnapshot();
  return t && t !== LOADING ? t : null;
}

async function saveNow() {
  window.clearTimeout(timer);
  timer = undefined;
  const t = currentTrip();
  if (!userId || !t) return;
  if (!t.cloud && !hasContent(t)) { setStatus({ state: "idle" }); return; }
  const key = contentKey(t);
  if (key === lastSavedKey && t.cloud?.userId === userId) { setStatus({ state: "saved", at: t.cloud.savedAt }); return; }
  setStatus({ state: "saving" });
  try {
    const { id, savedAt } = await writeTrip(t, userId);
    lastSavedKey = key;
    const now = currentTrip();
    // 저장하는 사이에 다른 일정으로 바뀌지 않았으면 DB 연결 정보를 붙인다 (내용은 그동안 바뀌었을 수 있으니 그대로 두고 연결만)
    if (now && (now === t || (now.cloud?.id ?? null) === (t.cloud?.id ?? null))) {
      tripStore.set({ ...now, cloud: { id, userId: userId!, savedAt } });
    }
    setStatus({ state: "saved", at: savedAt });
    if (now && contentKey(now) !== key) schedule(); // 저장하는 동안 또 고쳤으면 한 번 더
  } catch (e) {
    const message = e instanceof Error ? e.message : String(e);
    setStatus({ state: "error", message: /100개/.test(message) ? "일정은 100개까지 저장할 수 있어요" : "저장하지 못했어요" });
  }
}

function schedule() {
  if (!userId) return;
  const t = currentTrip();
  if (!t) return;
  if (!t.cloud && !hasContent(t)) { setStatus({ state: "idle" }); return; }
  if (contentKey(t) === lastSavedKey && t.cloud?.userId === userId) return;
  setStatus({ state: "pending" });
  window.clearTimeout(timer);
  timer = window.setTimeout(() => { running = saveNow().finally(() => { running = null; }); }, DEBOUNCE_MS);
}

/** 기다리는 저장이 있으면 지금 저장하고 끝날 때까지 기다린다 (다른 일정을 열기 전 등) */
export async function flushSave() {
  if (timer !== undefined) await saveNow();
  else if (running) await running;
}

/** 다른 기기에서 더 최근에 고친 일정이면 DB 내용으로 바꾼다 */
async function pullIfNewer() {
  const t = currentTrip();
  if (!userId || !t?.cloud || t.cloud.userId !== userId) return;
  const { data } = await supabase!.from("trips").select("data, updated_at").eq("id", t.cloud.id).maybeSingle();
  if (!data) { tripStore.set(payload(t) as Trip); return; } // DB에서 지워짐 → 연결만 끊고 이 기기 내용은 남김 (다시 저장하면 새 일정)
  if (data.updated_at > t.cloud.savedAt) {
    const fresh: Trip = { ...(data.data as Trip), cloud: { id: t.cloud.id, userId, savedAt: data.updated_at } };
    lastSavedKey = contentKey(fresh);
    tripStore.set(fresh);
    setStatus({ state: "saved", at: data.updated_at });
  } else {
    lastSavedKey = contentKey(t);
    setStatus({ state: "saved", at: t.cloud.savedAt });
  }
}

function onAuth(a: AuthSnapshot) {
  const next = a.status === "in" ? a.me.id : null;
  if (a.status === "loading" || next === userId) return;
  const prev = userId;
  userId = next;
  lastSavedKey = "";
  if (!next) {
    window.clearTimeout(timer);
    setStatus({ state: "off" });
    // 로그아웃: 이 기기의 내 일정은 지운다 (화면은 기본 일정으로 다시 시작)
    if (prev && currentTrip()?.cloud?.userId === prev) tripStore.clear();
    return;
  }
  const t = currentTrip();
  // 다른 계정의 일정이 남아 있으면 연결을 끊고 새 일정으로 저장되게 한다
  if (t?.cloud && t.cloud.userId !== next) tripStore.set(payload(t) as Trip);
  pullIfNewer().catch(() => {}).finally(schedule);
}

/** 플래너가 열릴 때 한 번 호출 */
export function startTripSync() {
  if (started || !supabase) return;
  started = true;
  tripStore.subscribe(schedule);
  const check = () => onAuth(authStore.getSnapshot());
  authStore.subscribe(check);
  check();
  // 탭을 닫거나 다른 앱으로 갈 때 기다리던 저장을 바로
  document.addEventListener("visibilitychange", () => { if (document.visibilityState === "hidden") flushSave(); });
}
