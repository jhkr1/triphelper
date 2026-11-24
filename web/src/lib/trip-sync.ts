import type { RealtimeChannel, SupabaseClient } from "@supabase/supabase-js";
import { authEnabled, authStore, db, dbForAccount, type AuthSnapshot } from "@/lib/supabase";
import { LOADING, tripStore } from "@/lib/trip-store";
import { describeChanges, mergeTrips, stableJson } from "@/lib/trip-merge";
import { checklistFor, nightsBetween, tripName, TRIP_TITLE_MAX, type PlannerCountry } from "@/lib/trip-model";
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
 * - 준비물은 사람마다 따로: 본인만 읽을 수 있는 trip_checklists에 저장
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

const TRIP_FIELDS = "data, updated_at, user_id, trip_checklists(checklist)";

export async function loadTrip(id: string, me: string, countries: PlannerCountry[]): Promise<Trip> {
  const sb = await db();
  const { data, error } = await sb.from("trips").select(TRIP_FIELDS)
    .eq("id", id).eq("trip_checklists.user_id", me).single();
  if (error) throw error;
  const remote = data.data as Data;
  const access = await accessOf(id, data.user_id, me);
  const country = countries.find((entry) => entry.slug === remote.country);
  const checklist = data.trip_checklists[0]?.checklist as Checklist | undefined;
  if (me !== userId) throw new Error("계정이 변경됐어요.");
  const trip: Trip = { ...remote, checklist: checklist ?? (country ? checklistFor(country) : { bags: {}, done: [] }),
    cloud: { id, userId: me, savedAt: data.updated_at, ...access } };
  adopt(trip);
  return trip;
}

/**
 * 일정 복제: 같은 내용을 내 새 일정으로 바로 저장해서 돌려준다 (남의 함께 짜는 일정도 내 것으로).
 * 함께 짜는 사람·보기 링크·게시글·활동 기록은 따라가지 않고, 준비물은 내 것만 복사한다.
 */
export async function duplicateTrip(id: string, me: string, countries: PlannerCountry[]): Promise<Trip> {
  await flushSave(); // 지금 고치던 내용까지 복사되게
  const sb = await db();
  const { data, error } = await sb.from("trips").select(TRIP_FIELDS)
    .eq("id", id).eq("trip_checklists.user_id", me).single();
  if (error) throw error;
  const remote = data.data as Data;
  const country = countries.find((entry) => entry.slug === remote.country);
  const checklist = data.trip_checklists[0]?.checklist as Checklist | undefined;
  const suffix = " (사본)";
  const copy: Data = {
    ...remote,
    title: `${tripName(remote, country?.name ?? "").slice(0, TRIP_TITLE_MAX - suffix.length)}${suffix}`,
    checklist: checklist ?? (country ? checklistFor(country) : { bags: {}, done: [] }),
  };
  if (me !== userId) throw new Error("계정이 변경됐어요.");
  const saved = await sb.from("trips").insert(rowOf(copy)).select("id, updated_at").single();
  if (saved.error) throw saved.error;
  const trip: Trip = { ...copy, cloud: { id: saved.data.id, userId: me, savedAt: saved.data.updated_at, role: "owner", shared: false } };
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
  if (!t.cloud) return true;
  if (t.cloud.userId !== userId) return false;
  // DB와 맞춘 기준을 아직 모르면(새로 고침 직후) pull이 받아 올 때까지 기다린다 (바뀐 것 없이 다시 저장하지 않게)
  if (base?.id !== t.cloud.id) return false;
  const role = roleOf(t);
  const tripDirty = role !== "viewer" && sharedKey(payload(t), role === "owner") !== sharedKey(base.data, role === "owner");
  const listDirty = role !== "owner" && checklistKey(t) !== savedChecklist;
  return tripDirty || listDirty;
}

const rowOf = (t: Trip) => ({
  title: (t.title?.trim() || (t.city ? `${t.city} 여행` : "")).slice(0, 60),
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
  const account = userId;
  if (!account || !t || (t.cloud && t.cloud.userId !== account)) return;
  if (!t.cloud && !hasContent(t)) { setStatus({ state: "idle" }); return; }
  if (!dirty(t)) { if (t.cloud) setStatus({ state: "saved", at: t.cloud.savedAt }); return; }
  setStatus({ state: "saving" });
  try {
    const sb = await dbForAccount(account);
    if (account !== userId) return;
    if (!t.cloud) {
      const { data, error } = await sb.from("trips").insert(rowOf(t)).select("id, updated_at").single();
      if (error) throw error;
      finish(t, { ...t, cloud: { id: data.id, userId: account, savedAt: data.updated_at, role: "owner", shared: false } });
      return;
    }
    const role = roleOf(t);
    const id = t.cloud.id;
    // 멤버의 준비물은 따로
    if (role !== "owner" && checklistKey(t) !== savedChecklist) {
      const { error } = await sb.from("trip_checklists").upsert({ trip_id: id, user_id: account, checklist: t.checklist });
      if (error) throw error;
      if (account !== userId) return;
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
      if (account !== userId) return;
      if (data) {
        const saved: Trip = { ...local, cloud: { ...local.cloud!, savedAt: data.updated_at } };
        finish(t, saved);
        if (saved.cloud!.shared && before) logActivity(sb, id, describeChanges(before, payload(t)));
        return;
      }
      const remote = await sb.from("trips").select("data, updated_at").eq("id", id).maybeSingle();
      if (remote.error) throw remote.error;
      if (!remote.data) throw new Error("gone");
      if (account !== userId) return;
      local = mergeInto(local, { ...remote.data.data, checklist: local.checklist } as Data, remote.data.updated_at);
      base = { id, data: remote.data.data as Data };
    }
    throw new Error("conflict");
  } catch (e) {
    if (account !== userId) return;
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
  if (saved.cloud?.userId !== userId) return;
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

async function logActivity(sb: SupabaseClient, tripId: string, lines: string[]) {
  if (!lines.length) return;
  try { await sb.from("trip_activity").insert(lines.map((text) => ({ trip_id: tripId, text }))); } catch { /* 기록은 실패해도 저장에는 영향 없음 */ }
}

function schedule() {
  if (!userId) return;
  const t = currentTrip();
  if (!t) return;
  if (!t.cloud && !hasContent(t)) { setStatus({ state: "idle" }); return; }
  if (!dirty(t)) return;
  setStatus({ state: "pending" });
  window.clearTimeout(timer);
  timer = window.setTimeout(() => { void flushSave(); }, DEBOUNCE_MS);
}

/** 기다리는 저장이 있으면 지금 저장하고 끝날 때까지 기다린다 (다른 일정을 열기 전 등) */
export async function flushSave() {
  while (running) await running;
  if (timer !== undefined) {
    running = saveNow().finally(() => { running = null; });
    await running;
  }
}

/** 함께 짜기를 시작했을 때(초대 링크를 만들었을 때) 지금 일정에 표시 */
export function markShared() {
  const t = currentTrip();
  if (t?.cloud && !t.cloud.shared) tripStore.set({ ...t, cloud: { ...t.cloud, shared: true } });
}

/** 이 일정에서 나의 권한과 함께 짜는 중인지 (주인이 권한을 바꾸거나 멤버가 들고 날 수 있다) */
async function accessOf(tripId: string, ownerId: string, me: string): Promise<{ role: TripRole; shared: boolean }> {
  const sb = await db();
  if (ownerId === me) {
    const { count } = await sb.from("trip_members").select("user_id", { count: "exact", head: true }).eq("trip_id", tripId);
    return { role: "owner", shared: (count ?? 0) > 0 };
  }
  const { data } = await sb.from("trip_members").select("role").eq("trip_id", tripId).eq("user_id", me).maybeSingle();
  return { role: (data?.role as TripRole) ?? "viewer", shared: true };
}

/** DB에 더 최근 내용이 있으면 받아서 합친다 (다른 기기 · 다른 멤버가 고친 경우) */
async function pull() {
  const t = currentTrip();
  if (!userId || !t?.cloud || t.cloud.userId !== userId) return;
  if (running) await running;
  const { data, error } = await (await db()).from("trips").select(TRIP_FIELDS)
    .eq("id", t.cloud.id).eq("trip_checklists.user_id", t.cloud.userId).maybeSingle();
  if (error) throw error;
  if (userId !== t.cloud.userId) return;
  const found = currentTrip();
  if (!found?.cloud || found.cloud.id !== t.cloud.id) return;
  if (!data) { tripStore.clear(); return; }
  const access = await accessOf(found.cloud.id, data.user_id, userId).catch(() => null);
  if (userId !== found.cloud.userId || currentTrip() !== found) return;
  const changed = access && (access.role !== roleOf(found) || access.shared !== Boolean(found.cloud.shared));
  const now: Trip & { cloud: NonNullable<Trip["cloud"]> } = changed ? { ...found, cloud: { ...found.cloud, ...access } } : { ...found, cloud: found.cloud };
  if (changed) tripStore.set(now);
  const remote: Data = { ...data.data, checklist: data.trip_checklists[0]?.checklist ?? now.checklist };
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
  window.clearTimeout(timer);
  timer = undefined;
  window.clearTimeout(pullTimer);
  if (prev && !next) tripStore.clear(prev);
  if (!next) {
    setStatus({ state: "off" });
    watch(null).catch(() => {});
    return;
  }
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
