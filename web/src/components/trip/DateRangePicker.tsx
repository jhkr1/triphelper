"use client";

import { useEffect, useRef, useState, type KeyboardEvent } from "react";
import { Icon } from "@/components/ui/Icon";
import { addDays, dateParts, nightsBetween, todayIso } from "@/lib/trip-model";

/** 여행 기간 최대 30일 (29박) */
export const MAX_NIGHTS = 29;
const WEEK = ["일", "월", "화", "수", "목", "금", "토"];

const pad = (n: number) => String(n).padStart(2, "0");
const isoOf = (y: number, m: number, d: number) => `${y}-${pad(m)}-${pad(d)}`;
const shiftMonth = ({ y, m }: { y: number; m: number }, n: number) => {
  const t = y * 12 + (m - 1) + n;
  return { y: Math.floor(t / 12), m: (t % 12) + 1 };
};
const monthOf = (iso: string) => ({ y: Number(iso.slice(0, 4)), m: Number(iso.slice(5, 7)) });
const sameMonth = (a: { y: number; m: number }, b: { y: number; m: number }) => a.y === b.y && a.m === b.m;

/** 그 달의 칸: 1일 앞의 빈칸은 null */
function cells(y: number, m: number): (string | null)[] {
  const first = new Date(Date.UTC(y, m - 1, 1)).getUTCDay();
  const count = new Date(Date.UTC(y, m, 0)).getUTCDate();
  return [...Array<null>(first).fill(null), ...Array.from({ length: count }, (_, i) => isoOf(y, m, i + 1))];
}

/** "12.10(수)" */
export const shortDate = (iso: string) => { const p = dateParts(iso); return `${p.m}.${p.d}(${p.w})`; };

interface Props {
  start: string;
  /** 가는 날만 고르고 오는 날을 고르는 중이면 "" */
  end: string;
  onChange: (start: string, end: string) => void;
}

/**
 * 여행 날짜 달력: 가는 날 → 오는 날 순서로 누르면 그 사이가 칠해진다 (같은 날을 두 번 누르면 당일치기).
 * 지난 날짜와 30일을 넘는 날은 고를 수 없다. 넓은 화면은 두 달, 좁은 화면은 한 달씩.
 * 키보드: 방향키로 하루·한 주, PageUp/PageDown으로 한 달, Enter/스페이스로 고르기.
 */
export function DateRangePicker({ start, end, onChange }: Props) {
  const today = todayIso();
  const [view, setView] = useState(() => monthOf(start || today));
  const [focus, setFocus] = useState(start || today);
  const [hover, setHover] = useState<string | null>(null);
  const boxRef = useRef<HTMLDivElement>(null);
  const moved = useRef(false); // 키보드로 옮겼을 때만 포커스를 따라간다

  const picking = Boolean(start && !end);
  const limit = picking ? addDays(start, MAX_NIGHTS) : null;
  const isDisabled = (d: string) => d < today || (limit !== null && d > limit);
  const rangeEnd = end || (picking && hover && hover >= start ? hover : "");

  useEffect(() => {
    if (!moved.current) return;
    moved.current = false;
    boxRef.current?.querySelector<HTMLButtonElement>(`[data-d="${focus}"]`)?.focus();
  }, [focus, view]);

  function choose(d: string) {
    setFocus(d);
    if (!start || end || d < start) onChange(d, ""); // 처음 고르거나 다시 고르기 → 가는 날
    else onChange(start, d);                          // 가는 날 다음 → 오는 날
  }

  function goMonth(n: number) {
    const next = shiftMonth(view, n);
    setView(next);
    const first = isoOf(next.y, next.m, 1);
    setFocus(first < today ? today : first);
  }

  function onKeyDown(e: KeyboardEvent) {
    const step = { ArrowLeft: -1, ArrowRight: 1, ArrowUp: -7, ArrowDown: 7 }[e.key];
    let next: string | null = null;
    if (step) next = addDays(focus, step);
    else if (e.key === "PageUp" || e.key === "PageDown") {
      const mo = shiftMonth(monthOf(focus), e.key === "PageUp" ? -1 : 1);
      next = isoOf(mo.y, mo.m, Math.min(Number(focus.slice(8)), new Date(Date.UTC(mo.y, mo.m, 0)).getUTCDate()));
    }
    if (!next) return;
    e.preventDefault();
    if (next < today) next = today;
    moved.current = true;
    setFocus(next);
    // 보이는 두 달 밖으로 나가면 달을 넘긴다
    const fm = monthOf(next);
    if (!sameMonth(fm, view) && !sameMonth(fm, shiftMonth(view, 1))) setView(next < isoOf(view.y, view.m, 1) ? fm : shiftMonth(fm, -1));
  }

  const status = picking
    ? `${shortDate(start)} 출발 · 오는 날을 고르세요`
    : start && end
      ? `${shortDate(start)} – ${shortDate(end)} · ${nightsBetween(start, end) ? `${nightsBetween(start, end)}박 ${nightsBetween(start, end) + 1}일` : "당일치기"}`
      : "가는 날을 고르세요";

  return (
    <div className="drp" ref={boxRef}>
      <div className="drp__nav">
        <button type="button" className="drp__arrow" onClick={() => goMonth(-1)} disabled={sameMonth(view, monthOf(today))} aria-label="이전 달">
          <Icon name="arrowUp" style={{ transform: "rotate(-90deg)" }} />
        </button>
        <p className="drp__status" role="status" aria-live="polite">{status}</p>
        <button type="button" className="drp__arrow" onClick={() => goMonth(1)} aria-label="다음 달">
          <Icon name="arrowUp" style={{ transform: "rotate(90deg)" }} />
        </button>
      </div>
      <div className="drp__months" onKeyDown={onKeyDown} onPointerLeave={() => setHover(null)}>
        {[view, shiftMonth(view, 1)].map((mo, k) => (
          <div className={k ? "drp__month drp__month--2" : "drp__month"} key={`${mo.y}-${mo.m}`}>
            <p className="drp__title">{mo.y}년 {mo.m}월</p>
            <div className="drp__grid" role="group" aria-label={`${mo.y}년 ${mo.m}월`}>
              {WEEK.map((w, i) => <span key={w} className={`drp__wd${i === 0 ? " sun" : i === 6 ? " sat" : ""}`} aria-hidden="true">{w}</span>)}
              {cells(mo.y, mo.m).map((d, i) => {
                if (!d) return <span key={`b${i}`} />;
                const off = isDisabled(d);
                const isStart = d === start, isEnd = d === rangeEnd;
                const inRange = Boolean(start && rangeEnd && d > start && d < rangeEnd);
                const wd = (i % 7);
                const p = dateParts(d);
                const cls = ["drp__day", wd === 0 && "sun", wd === 6 && "sat", d === today && "today", inRange && "in",
                  isStart && "start", isEnd && "end", isStart && rangeEnd && rangeEnd !== start && "has-end", off && "off"].filter(Boolean).join(" ");
                return (
                  <button
                    key={d}
                    type="button"
                    data-d={d}
                    className={cls}
                    disabled={off}
                    tabIndex={d === focus ? 0 : -1}
                    aria-pressed={isStart || isEnd}
                    aria-label={`${p.y}년 ${p.m}월 ${p.d}일 ${p.w}요일${isStart ? ", 가는 날" : isEnd ? ", 오는 날" : ""}${d === today ? ", 오늘" : ""}`}
                    onClick={() => choose(d)}
                    onPointerEnter={() => setHover(d)}
                    onFocus={() => setFocus(d)}
                  >
                    <span>{p.d}</span>
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
