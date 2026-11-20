import type { RealtimeChannel } from "@supabase/supabase-js";
import { authEnabled, authStore, db, type AuthSnapshot } from "@/lib/supabase";
import { LOADING, tripStore } from "@/lib/trip-store";
import { describeChanges, mergeTrips, stableJson } from "@/lib/trip-merge";
import { nightsBetween } from "@/lib/trip-model";
import type { Checklist, Trip, TripRole } from "@/types/trip";

/*
 * 내 일정 자동 저장 (로그인했을 때만).
 * - 일정이 바뀌면 1.5초 기다렸다가 DB에 저장 (계속 고치는 동안은 기다림)
 * - 처음 저장하면 DB id를 일정에 붙여 두고(trip.cloud), 그다음부터는 같은 줄을 고친다
 * - 아직 아무것도 담지 않은 빈 일정은 저장하지 않는다 (들어올 때마다 빈 일정이 쌓이지 않게)
 * - 로그아웃하면 이 기기에 남은 일정을 지운다 (공용 컴퓨터에서 내 일정이 남지 않게. DB에는 그대로 있음)
 *
 * 함께 짜는 일정
 * - 저장은 "마지막으로 맞춘 뒤 아무도 안 고쳤을 때만" 한다. 그사이 누가 저장했으면 장소 단위로 합친 뒤 다시 저장
 * - 다른 사람이 저장하면 실시간으로 알림을 받아 합친다
 * - 준비물은 사람마다 따로: 주인 것은 일정 안, 멤버 것은 trip_members.checklist
 * - 보기만 하는 멤버는 일정을 저장하지 않는다 (준비물만)
 * - 저장할 때 "누가 무엇을 했는지" 활동 기록을 남긴다
 */

export interface TripMeta {
  id: string;
  title: string;
  country: string;
  city: string;
  nights: number;
  updatedAt: string;
  role: TripRole;
  /** 남의 일정이면 주인 닉네임 */
  ownerName?: string;
}

export type SyncStatus =
  | { state: "off" }       // 로그인 안 함 (이 기기에만 저장)
  | { state: "idle" }      // 저장할 게 없음 (빈 일정)
  | { state: "pending" }   // 곧 저장
  | { state: "saving" }
  | { state: "saved"; at: string }
  | { state: "error"; message: string };

type Data = Omit<Trip, "cloud">;

const DEBOUNCE_MS = 1500;

/** DB에 넣는 내용: 연결 정보(cloud)는 빼고 */
const payload = (t: Trip): Data => { const { cloud: _, ...data } = t; return data; }; // eslint-disable-line @typescript-eslint/no-unused-vars
const roleOf = (t: Trip): TripRole => t.cloud?.role ?? "owner";
/** 비교용 문자열. 주인은 준비물까지 일정에 저장하고, 멤버는 준비물을 따로 저장한다 */
const sharedKey = (t: Data, withChecklist: boolean) => { const { checklist, ...rest } = t; return stableJson(withChecklist ? { ...rest, checklist } : rest); };
const checklistKey = (t: Data) => stableJson(t.checklist);
const hasContent = (t: Trip) =>
  t.days.some((d) => d.places.length || d.stay) || Boolean(t.basket?.length) || t.checklist.done.length > 0;

/* ───────── DB ───────── */

type TripRow = { id: string; title: string; country: string; city: string; nights: number; updated_at: string; user_id: string; profiles: { nickname: string } | null };

/** 내 일정 + 함께 짜는 일정 */
export async function listMyTrips(me: string): Promise<TripMeta[]> {
  const sb = await db();
  const [trips, mine] = await Promise.all([
    sb.from("trips").select("id, title, country, city, nights, updated_at, user_id, profiles!trips_user_id_fkey(nickname)").order("updated_at", { ascending: false }),
    sb.from("trip_members").select("trip_id, role").eq("user_id", me),
  ]);
  if (trips.error) throw trips.error;
  const roles = new Map((mine.data ?? []).map((m) => [m.trip_id as string, m.role as TripRole]));
  return ((trips.data ?? []) as unknown as TripRow[]).map((r) => {
    const role: TripRole = r.user_id === me ? "owner" : roles.get(r.id) ?? "viewer";
    return {
      id: r.id, title: r.title, country: r.country, city: r.city, nights: r.nights, updatedAt: r.updated_at, role,
      ...(role !== "owner" && r.profiles?.nickname ? { ownerName: r.profiles.nickname } : {}),
    };
  });
}

/** 멤버의 첫 준비물: 주인의 목록을 빈 체크 상태로 */
const blankChecklist = (c: Checklist | undefined): Checklist => ({ bags: c?.bags ?? {}, done: [] });

export async function loadTrip(id: string, me: string): Promise<Trip> {
  const sb = await db();
  const { data, error } = await sb.from("trips").select("data, updated_at, user_id").eq("id", id).single();
  if (error) throw error;
  const remote = data.data as Data;
  let role: TripRole = "owner";
  let checklist = remote.checklist;
  let shared = false;
  if (data.user_id === me) {
    const { count } = await sb.from("trip_members").select("user_id", { count: "exact", head: true }).eq("trip_id", id);
    shared = (count ?? 0) > 0;
  } else {
    const { data: m } = await sb.from("trip_members").select("role, checklist").eq("trip_id", id).eq("user_id", me).maybeSingle();
    role = (m?.role as TripRole) ?? "viewer";
    checklist = (m?.checklist as Checklist | null) ?? blankChecklist(remote.checklist);
    shared = true;
  }
  const trip: Trip = { ...remote, checklist, cloud: { id, userId: me, savedAt: data.updated_at, role, shared } };
  adopt(trip);
  return trip;
}

export async function deleteTrip(id: string) {
  const { error } = await (await db()).from("trips").delete().eq("id", id);
  if (error) throw error;
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
let running: Promise<void> | null = null;
let started = false;
/** 마지막으로 DB와 맞춘 일정 내용 (함께 짤 때 합치는 기준, 저장할 것이 있는지 비교) */
let base: { id: string; data: Data } | null = null;
/** 멤버의 준비물을 마지막으로 저장한 내용 */
let savedChecklist = "";

function currentTrip(): Trip | null {
  const t = tripStore.getSnapshot();
  return t && t !== LOADING ? t : null;
}

/** 방금 DB와 맞춘 일정을 기준으로 삼는다 */
function adopt(t: Trip) {
  if (!t.cloud) return;
  base = { id: t.cloud.id, data: payload(t) };
  if (roleOf(t) !== "owner") savedChecklist = checklistKey(t);
}

/** 지금 일정에 저장할 것이 남았는지 */
function dirty(t: Trip): boolean {
  if (!t.cloud || t.cloud.userId !== userId) return true;
  // DB와 맞춘 기준을 아직 모르면(새로 고침 직후) pull이 받아 올 때까지 기다린다 (바뀐 것 없이 다시 저장하지 않게)
  if (base?.id !== t.cloud.id) return false;
  const role = roleOf(t);
  const tripDirty = role !== "viewer" && sharedKey(payload(t), role === "owner") !== sharedKey(base.data, role === "owner");
  const listDirty = role !== "owner" && checklistKey(t) !== savedChecklist;
  return tripDirty || listDirty;
}

const rowOf = (t: Trip) => ({
  title: t.city ? `${t.city} 여행` : "",
  country: t.country,
  city: t.city,
  nights: Math.max(0, Math.min(29, nightsBetween(t.start, t.end))),
  data: payload(t),
});

/** 남의 저장과 합친다 (내 준비물은 그대로) */
function mergeInto(local: Trip, remote: Data, remoteAt: string): Trip {
  const cloud = { ...local.cloud!, savedAt: remoteAt };
  const mineBase = base?.id === cloud.id ? base.data : payload(local);
  return { ...mergeTrips(mineBase, payload(local), remote), cloud };
}

async function saveNow() {
  window.clearTimeout(timer);
  timer = undefined;
  const t = currentTrip();
  if (!userId || !t) return;
  if (!t.cloud && !hasContent(t)) { setStatus({ state: "idle" }); return; }
  if (!dirty(t)) { if (t.cloud) setStatus({ state: "saved", at: t.cloud.savedAt }); return; }
  setStatus({ state: "saving" });
  try {
    const sb = await db();
    // 처음 저장: 새 일정 (다른 계정의 일정이었으면 onAuth에서 연결을 끊어 둠)
    if (!t.cloud || t.cloud.userId !== userId) {
      const { data, error } = await sb.from("trips").insert(rowOf(t)).select("id, updated_at").single();
      if (error) throw error;
      finish(t, { ...t, cloud: { id: data.id, userId, savedAt: data.updated_at, role: "owner", shared: false } });
      return;
    }
    const role = roleOf(t);
    const id = t.cloud.id;
    // 멤버의 준비물은 따로
    if (role !== "owner" && checklistKey(t) !== savedChecklist) {
      const { error } = await sb.from("trip_members").update({ checklist: t.checklist }).eq("trip_id", id).eq("user_id", userId);
      if (error) throw error;
      savedChecklist = checklistKey(t);
    }
    const owner = role === "owner";
    if (role === "viewer" || (base?.id === id && sharedKey(payload(t), owner) === sharedKey(base.data, owner))) {
      finish(t, t);
      return;
    }
    const before = base?.id === id ? base.data : null;
    let local = t;
    // 마지막으로 맞춘 뒤 아무도 안 고쳤을 때만 저장. 누가 먼저 저장했으면 합친 뒤 다시 (최대 3번)
    for (let attempt = 0; attempt < 3; attempt++) {
      const { data, error } = await sb.from("trips").update(rowOf(local)).eq("id", id).eq("updated_at", local.cloud!.savedAt)
        .select("updated_at").maybeSingle();
      if (error) throw error;
      if (data) {
        const saved: Trip = { ...local, cloud: { ...local.cloud!, savedAt: data.updated_at } };
        finish(t, saved);
        if (saved.cloud!.shared && before) logActivity(id, describeChanges(before, payload(t)));
        return;
      }
      const remote = await sb.from("trips").select("data, updated_at").eq("id", id).maybeSingle();
      if (remote.error) throw remote.error;
      if (!remote.data) throw new Error("gone");
      local = mergeInto(local, remote.data.data as Data, remote.data.updated_at);
      base = { id, data: remote.data.data as Data };
    }
    throw new Error("conflict");
  } catch (e) {
    const message = e instanceof Error ? e.message : String(e);
    setStatus({
      state: "error",
      message: /100개/.test(message) ? "일정은 100개까지 저장할 수 있어요"
        : message === "gone" ? "이 일정에 더 이상 접근할 수 없어요"
        : "저장하지 못했어요",
    });
  }
}

/** 저장 끝: 그사이 다른 일정으로 바뀌지 않았으면 연결 정보와 합친 내용을 반영 */
function finish(original: Trip, saved: Trip) {
  adopt(saved);
  const now = currentTrip();
  if (now && (now === original || (now.cloud?.id ?? null) === (original.cloud?.id ?? null))) {
    // 저장하는 동안 또 고쳤으면 그 내용은 남기고 연결 정보만, 아니면 저장한(합친) 내용으로
    tripStore.set(now === original ? saved : { ...now, cloud: saved.cloud });
  }
  setStatus({ state: "saved", at: saved.cloud!.savedAt });
  const after = currentTrip();
  if (after && dirty(after)) schedule();
}

async function logActivity(tripId: string, lines: string[]) {
  if (!lines.length) return;
  try { await (await db()).from("trip_activity").insert(lines.map((text) => ({ trip_id: tripId, text }))); } catch { /* 기록은 실패해도 저장에는 영향 없음 */ }
}

function schedule() {
  if (!userId) return;
  const t = currentTrip();
  if (!t) return;
  if (!t.cloud && !hasContent(t)) { setStatus({ state: "idle" }); return; }
  if (!dirty(t)) return;
  setStatus({ state: "pending" });
  window.clearTimeout(timer);
  timer = window.setTimeout(() => { running = saveNow().finally(() => { running = null; }); }, DEBOUNCE_MS);
}

/** 기다리는 저장이 있으면 지금 저장하고 끝날 때까지 기다린다 (다른 일정을 열기 전 등) */
export async function flushSave() {
  if (timer !== undefined) await saveNow();
  else if (running) await running;
}

/** 함께 짜기를 시작했을 때(초대 링크를 만들었을 때) 지금 일정에 표시 */
export function markShared() {
  const t = currentTrip();
  if (t?.cloud && !t.cloud.shared) tripStore.set({ ...t, cloud: { ...t.cloud, shared: true } });
}

/** 이 일정에서 나의 권한과 함께 짜는 중인지 (주인이 권한을 바꾸거나 멤버가 들고 날 수 있다) */
async function accessOf(tripId: string, ownerId: string): Promise<{ role: TripRole; shared: boolean }> {
  const sb = await db();
  if (ownerId === userId) {
    const { count } = await sb.from("trip_members").select("user_id", { count: "exact", head: true }).eq("trip_id", tripId);
    return { role: "owner", shared: (count ?? 0) > 0 };
  }
  const { data } = await sb.from("trip_members").select("role").eq("trip_id", tripId).eq("user_id", userId!).maybeSingle();
  return { role: (data?.role as TripRole) ?? "viewer", shared: true };
}

/** DB에 더 최근 내용이 있으면 받아서 합친다 (다른 기기 · 다른 멤버가 고친 경우) */
async function pull() {
  const t = currentTrip();
  if (!userId || !t?.cloud || t.cloud.userId !== userId) return;
  if (running) await running;
  const { data } = await (await db()).from("trips").select("data, updated_at, user_id").eq("id", t.cloud.id).maybeSingle();
  const found = currentTrip();
  if (!found?.cloud || found.cloud.id !== t.cloud.id) return;
  if (!data) { tripStore.set(payload(found) as Trip); return; } // 지워졌거나 멤버에서 빠짐 → 연결만 끊고 이 기기 내용은 남김
  const access = await accessOf(found.cloud.id, data.user_id).catch(() => null);
  const changed = access && (access.role !== roleOf(found) || access.shared !== Boolean(found.cloud.shared));
  const now: Trip & { cloud: NonNullable<Trip["cloud"]> } = changed ? { ...found, cloud: { ...found.cloud, ...access } } : { ...found, cloud: found.cloud };
  if (changed) tripStore.set(now);
  const remote = data.data as Data;
  if (data.updated_at === now.cloud.savedAt) {
    // 마지막 저장 그대로: DB 내용이 합치는 기준 (내 준비물은 그대로)
    if (base?.id !== now.cloud.id) adopt({ ...remote, checklist: now.checklist, cloud: now.cloud });
    if (dirty(now)) schedule(); else setStatus({ state: "saved", at: now.cloud.savedAt });
    return;
  }
  if (data.updated_at < now.cloud.savedAt) return;
  // 기준을 알면 합치고, 모르면(새로 고침 직후) 받은 내용을 그대로 (멤버는 내 준비물을 지킨다)
  const next: Trip = base?.id === now.cloud.id
    ? mergeInto(now, remote, data.updated_at)
    : { ...remote, checklist: roleOf(now) === "owner" ? remote.checklist : now.checklist, cloud: { ...now.cloud, savedAt: data.updated_at } };
  base = { id: now.cloud.id, data: remote };
  if (roleOf(now) !== "owner" && !savedChecklist) savedChecklist = checklistKey(now);
  tripStore.set(next);
  if (dirty(next)) schedule(); else setStatus({ state: "saved", at: data.updated_at });
}

/* ───────── 실시간: 지금 보는 일정을 다른 사람이 저장하면 받아 온다 ───────── */

let channel: RealtimeChannel | null = null;
let watchingId: string | null = null;
let pullTimer: number | undefined;

async function watch(id: string | null) {
  if (id === watchingId) return;
  watchingId = id;
  const sb = await db();
  if (channel) { sb.removeChannel(channel); channel = null; }
  if (!id) return;
  channel = sb.channel(`trip-${id}`)
    .on("postgres_changes", { event: "UPDATE", schema: "public", table: "trips", filter: `id=eq.${id}` }, (p) => {
      const at = (p.new as { updated_at?: string }).updated_at;
      if (at && at === currentTrip()?.cloud?.savedAt) return; // 내가 방금 저장한 것
      window.clearTimeout(pullTimer);
      pullTimer = window.setTimeout(() => { pull().catch(() => {}); }, 300);
    })
    .subscribe();
}

function onTripChange() {
  const t = currentTrip();
  watch(userId && t?.cloud?.userId === userId ? t.cloud.id : null).catch(() => {});
  schedule();
}

function onAuth(a: AuthSnapshot) {
  const next = a.status === "in" ? a.me.id : null;
  if (a.status === "loading" || next === userId) return;
  const prev = userId;
  userId = next;
  base = null;
  savedChecklist = "";
  if (!next) {
    window.clearTimeout(timer);
    setStatus({ state: "off" });
    watch(null).catch(() => {});
    // 로그아웃: 이 기기의 내 일정은 지운다 (화면은 기본 일정으로 다시 시작)
    if (prev && currentTrip()?.cloud?.userId === prev) tripStore.clear();
    return;
  }
  const t = currentTrip();
  // 다른 계정의 일정이 남아 있으면 연결을 끊고 새 일정으로 저장되게 한다
  if (t?.cloud && t.cloud.userId !== next) tripStore.set(payload(t) as Trip);
  pull().catch(() => {}).finally(onTripChange);
}

/** 플래너가 열릴 때 한 번 호출 */
export function startTripSync() {
  if (started || !authEnabled) return;
  started = true;
  tripStore.subscribe(onTripChange);
  const check = () => onAuth(authStore.getSnapshot());
  authStore.subscribe(check);
  check();
  // 탭을 닫거나 다른 앱으로 갈 때 기다리던 저장을 바로, 돌아오면 그사이 바뀐 것을 받아 온다
  document.addEventListener("visibilitychange", () => {
    if (document.visibilityState === "hidden") flushSave();
    else pull().catch(() => {});
  });
}
