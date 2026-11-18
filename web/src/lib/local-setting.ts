/**
 * localStorage 값 하나를 React의 외부 저장소(useSyncExternalStore)로 다룬다.
 * 서버에서 미리 그릴 때는 기본값을, 브라우저에서는 저장된 값을 쓰고 다른 탭의 변경도 반영한다.
 */
export function createLocalSetting<T extends string>(key: string, fallback: T, allowed: readonly T[]) {
  const listeners = new Set<() => void>();

  const read = (): T => {
    try {
      const v = localStorage.getItem(key) as T | null;
      return v && allowed.includes(v) ? v : fallback;
    } catch {
      return fallback;
    }
  };

  return {
    subscribe(onChange: () => void) {
      listeners.add(onChange);
      const onStorage = (e: StorageEvent) => { if (e.key === key) onChange(); };
      window.addEventListener("storage", onStorage);
      return () => {
        listeners.delete(onChange);
        window.removeEventListener("storage", onStorage);
      };
    },
    getSnapshot: read,
    getServerSnapshot: (): T => fallback,
    set(value: T) {
      try { localStorage.setItem(key, value); } catch { /* 저장소를 못 쓰는 환경 */ }
      listeners.forEach((l) => l());
    },
  };
}
