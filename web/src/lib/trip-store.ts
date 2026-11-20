import { authEnabled, authStore } from "@/lib/supabase";
import type { Trip } from "@/types/trip";

/**
 * 내 여행 일정 저장소. 브라우저(localStorage)에 자동 저장되고, React에서는 useSyncExternalStore로 읽는다.
 * - 서버에서 미리 그릴 때: LOADING
 * - 저장된 일정이 없을 때: null (화면에서 기본 일정을 만들어 넣음)
 */
export const LOADING = "loading" as const;
export type TripSnapshot = Trip | null | typeof LOADING;

const KEY = "th-trip";

/** 저장된 일정에 빠진 칸이 있어도 화면이 깨지지 않게 채운다 (예전 형식·손상된 데이터) */
export function normalizeTrip(t: Trip): Trip {
  const checklist = t.checklist && typeof t.checklist.bags === "object" ? t.checklist : { bags: {}, done: [] };
  return {
    ...t,
    days: Array.isArray(t.days) && t.days.length ? t.days : [{ places: [] }],
    checklist: { bags: checklist.bags ?? {}, done: Array.isArray(checklist.done) ? checklist.done : [] },
  };
}
const listeners = new Set<() => void>();
let current: Trip | null | undefined; // undefined = 아직 읽지 않음

let currentKey: string | null = null;
function storageKey() {
  const auth = authStore.getSnapshot();
  return auth.status === "in" ? KEY + ":" + auth.me.id : KEY + ":guest";
}

function read(key: string): Trip | null {
  try {
    let raw = localStorage.getItem(key);
    if (!raw) {
      const legacy = localStorage.getItem(KEY);
      if (legacy) {
        const old = JSON.parse(legacy) as Trip;
        if (old.cloud ? key === KEY + ":" + old.cloud.userId : !authEnabled) {
          localStorage.setItem(key, legacy);
          localStorage.removeItem(KEY);
          raw = legacy;
        }
      }
    }
    return raw ? normalizeTrip(JSON.parse(raw) as Trip) : null;
  } catch {
    return null;
  }
}

export const tripStore = {
  subscribe(onChange: () => void) {
    listeners.add(onChange);
    const onStorage = (e: StorageEvent) => {
      if (e.key === storageKey() || e.key === null) { current = undefined; onChange(); }
    };
    const unsubscribe = authStore.subscribe(onChange);
    window.addEventListener("storage", onStorage);
    return () => {
      unsubscribe();
      listeners.delete(onChange);
      window.removeEventListener("storage", onStorage);
    };
  },
  getSnapshot(): TripSnapshot {
    const key = storageKey();
    if (current === undefined || key !== currentKey) {
      currentKey = key;
      current = read(key);
    }
    return current;
  },
  getServerSnapshot(): TripSnapshot {
    return LOADING;
  },
  set(next: Trip) {
    const key = storageKey();
    if (next.cloud && key !== KEY + ":" + next.cloud.userId) return;
    currentKey = key;
    current = normalizeTrip(next);
    try { localStorage.setItem(key, JSON.stringify(current)); } catch { /* 저장 공간 부족 등 */ }
    listeners.forEach((l) => l());
  },
  /** 이 기기에 저장된 일정을 지운다 (로그아웃) → 화면에서 기본 일정을 새로 만든다 */
  clear(account?: string) {
    const key = account ? KEY + ":" + account : storageKey();
    if (currentKey === key) current = null;
    try { localStorage.removeItem(key); } catch { /* ignore */ }
    listeners.forEach((l) => l());
  },
  update(fn: (trip: Trip) => Trip) {
    const now = tripStore.getSnapshot();
    if (now && now !== LOADING) tripStore.set(fn(now));
  },
};
