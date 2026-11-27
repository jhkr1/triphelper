import type { Trip } from "@/types/trip";
import { mergeTrips, stableJson } from "@/lib/trip-merge";

/*
 * 되돌리기 · 다시 하기 (Ctrl+Z · Ctrl+Shift+Z, 알림의 [되돌리기])
 * - 이 브라우저 화면 안에서만 기억한다 (새로 고침하면 사라짐). 준비물(checklist)은 사람마다 따로라 다루지 않는다.
 * - 되돌릴 때 예전 일정을 통째로 덮어쓰지 않는다: "그 한 번의 변경"만 거꾸로 적용한다.
 *   그래서 그사이 함께 짜는 사람이 고친 것이나 내가 다른 곳에서 고친 것은 남는다 (3방향 병합 mergeTrips).
 */

type Content = Omit<Trip, "cloud" | "checklist">;

/** 일정을 바꿀 때 덧붙이는 정보 */
export interface ChangeOpts {
  /** 알림에 보일 문장. 있으면 알림에 [되돌리기]를 붙인다 (빼기·지우기처럼 되돌리고 싶을 수 있는 변경) */
  undo?: string;
  /** 이어지는 변경을 되돌리기 한 번으로 묶을 이름 (예: 같은 칸을 연달아 고칠 때) */
  group?: string;
}

export interface UndoStep {
  id: number;
  before: Content;
  after: Content;
  /** 같은 group의 변경이 이어지면 한 번으로 묶는다 (예: 메모를 고치는 동안) */
  group?: string;
  at: number;
}

const LIMIT = 50;
/** 같은 group의 변경을 하나로 묶는 시간 */
const GROUP_MS = 1500;

export function contentOf(t: Trip): Content {
  const { cloud: _c, checklist: _k, ...rest } = t; // eslint-disable-line @typescript-eslint/no-unused-vars
  return rest;
}

/** 지금 일정(now)에 from → to 변경을 적용한다. 그사이 바뀐 다른 부분은 그대로 둔다 */
export function applyChange(now: Trip, from: Content, to: Content): Trip {
  const k = now.checklist;
  const merged = mergeTrips({ ...from, checklist: k }, { ...to, checklist: k }, { ...contentOf(now), checklist: k });
  return { ...merged, checklist: k, ...(now.cloud ? { cloud: now.cloud } : {}) };
}

export function createUndoHistory() {
  let past: UndoStep[] = [];
  let future: UndoStep[] = [];
  let nextId = 1;
  const listeners = new Set<() => void>();
  const emit = () => listeners.forEach((l) => l());

  return {
    subscribe(fn: () => void) { listeners.add(fn); return () => { listeners.delete(fn); }; },
    canUndo: () => past.length > 0,
    canRedo: () => future.length > 0,

    /** 일정을 바꿀 때마다 부른다. 바뀐 것이 없으면 남기지 않는다. 남긴 단계의 id를 돌려준다 */
    record(before: Trip, after: Trip, group?: string, now = Date.now()): number | null {
      const b = contentOf(before), a = contentOf(after);
      if (stableJson(b) === stableJson(a)) return null;
      const last = past[past.length - 1];
      if (group && last && last.group === group && now - last.at < GROUP_MS) {
        past[past.length - 1] = { ...last, after: a, at: now };
      } else {
        past = [...past.slice(-(LIMIT - 1)), { id: nextId++, before: b, after: a, group, at: now }];
      }
      future = [];
      emit();
      return past[past.length - 1].id;
    },

    /** 마지막 변경을 되돌린 일정 (되돌릴 것이 없으면 null) */
    undo(now: Trip): Trip | null {
      const step = past[past.length - 1];
      if (!step) return null;
      past = past.slice(0, -1);
      future = [...future, step];
      emit();
      return applyChange(now, step.after, step.before);
    },

    redo(now: Trip): Trip | null {
      const step = future[future.length - 1];
      if (!step) return null;
      future = future.slice(0, -1);
      past = [...past, step];
      emit();
      return applyChange(now, step.before, step.after);
    },

    /**
     * 특정 변경 하나를 되돌린다 (알림의 [되돌리기]).
     * 그 뒤에 다른 변경이 있었어도 그 변경만 거꾸로 적용하고, 되돌린 것도 한 번의 변경으로 남긴다.
     */
    revert(id: number, now: Trip): Trip | null {
      const top = past[past.length - 1];
      if (top?.id === id) return this.undo(now);
      const step = past.find((s) => s.id === id);
      if (!step) return null;
      const next = applyChange(now, step.after, step.before);
      this.record(now, next);
      return next;
    },

    /** 다른 일정을 열었을 때 */
    clear() {
      if (!past.length && !future.length) return;
      past = [];
      future = [];
      emit();
    },
  };
}

export type UndoHistory = ReturnType<typeof createUndoHistory>;
