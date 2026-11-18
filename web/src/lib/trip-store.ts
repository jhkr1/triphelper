import type { Trip } from "@/types/trip";

/**
 * 내 여행 일정 저장소. 브라우저(localStorage)에 자동 저장되고, React에서는 useSyncExternalStore로 읽는다.
 * - 서버에서 미리 그릴 때: LOADING
 * - 저장된 일정이 없을 때: null (화면에서 기본 일정을 만들어 넣음)
 */
export const LOADING = "loading" as const;
export type TripSnapshot = Trip | null | typeof LOADING;

const KEY = "th-trip";
const listeners = new Set<() => void>();
let current: Trip | null | undefined; // undefined = 아직 읽지 않음

function read(): Trip | null {
  try {
    const raw = localStorage.getItem(KEY);
    return raw ? (JSON.parse(raw) as Trip) : null;
  } catch {
    return null;
  }
}

export const tripStore = {
  subscribe(onChange: () => void) {
    listeners.add(onChange);
    const onStorage = (e: StorageEvent) => {
      if (e.key === KEY) { current = read(); onChange(); }
    };
    window.addEventListener("storage", onStorage);
    return () => {
      listeners.delete(onChange);
      window.removeEventListener("storage", onStorage);
    };
  },
  getSnapshot(): TripSnapshot {
    if (current === undefined) current = read();
    return current;
  },
  getServerSnapshot(): TripSnapshot {
    return LOADING;
  },
  set(next: Trip) {
    current = next;
    try { localStorage.setItem(KEY, JSON.stringify(next)); } catch { /* 저장 공간 부족 등 */ }
    listeners.forEach((l) => l());
  },
  update(fn: (trip: Trip) => Trip) {
    const now = tripStore.getSnapshot();
    if (now && now !== LOADING) tripStore.set(fn(now));
  },
};
