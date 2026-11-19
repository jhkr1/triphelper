"use client";

import { useEffect, useId, useLayoutEffect, useRef, useState, type KeyboardEvent } from "react";
import { Icon } from "@/components/ui/Icon";

const PANEL_H = 320; // 펼친 패널 높이(대략). 위/아래 방향을 정할 때 쓴다

const PERIODS = ["오전", "오후"];
const HOURS = Array.from({ length: 12 }, (_, i) => i + 1); // 1~12
const MINUTES = Array.from({ length: 12 }, (_, i) => i * 5); // 0, 5, … 55

const pad = (n: number) => String(n).padStart(2, "0");

/** "14:30" → "오후 2:30" */
export function formatTime(time: string): string {
  const [h, m] = time.split(":").map(Number);
  const h12 = h % 12 === 0 ? 12 : h % 12;
  return `${h < 12 ? "오전" : "오후"} ${h12}:${pad(m)}`;
}

/** "HH:MM" ↔ 휠 위치(오전/오후, 시, 분 인덱스). 분은 5분 단위로 맞춘다 */
function toWheels(time: string) {
  const [h, m] = time.split(":").map(Number);
  const h12 = h % 12 === 0 ? 12 : h % 12;
  return { p: h < 12 ? 0 : 1, h: h12 - 1, m: Math.min(11, Math.round(m / 5)) };
}
function fromWheels({ p, h, m }: { p: number; h: number; m: number }) {
  const h12 = HOURS[h];
  const h24 = (h12 % 12) + (p === 1 ? 12 : 0);
  return `${pad(h24)}:${pad(MINUTES[m])}`;
}

/* ───────── 휠 한 줄 ───────── */

interface WheelProps {
  items: string[];
  index: number;
  onChange: (i: number) => void;
  label: string;
}

function Wheel({ items, index, onChange, label }: WheelProps) {
  const ref = useRef<HTMLDivElement>(null);
  const settle = useRef<number | undefined>(undefined);
  const frame = useRef(0);
  // 칸 높이는 CSS(--wh-item)가 정한다. 화면 폭에 따라 달라지므로 실제 크기를 잰다
  const itemH = () => (ref.current?.querySelector<HTMLElement>(".wh__item")?.offsetHeight || 40);

  // 가운데에서 멀수록 흐리고 작게: 휠이 굴러가는 느낌
  const paint = () => {
    const el = ref.current;
    if (!el) return;
    const center = el.scrollTop / itemH();
    el.querySelectorAll<HTMLElement>(".wh__item").forEach((item, i) => {
      const d = Math.min(Math.abs(i - center), 3);
      item.style.opacity = String(1 - d * 0.28);
      item.style.transform = `scale(${1 - d * 0.08})`;
    });
  };

  // 처음 열릴 때만 현재 값 위치로 스크롤 (이후엔 사용자의 스크롤이 기준)
  useLayoutEffect(() => {
    if (ref.current) ref.current.scrollTop = index * itemH();
    paint();
    // eslint-disable-next-line react-hooks/exhaustive-deps -- 열릴 때 한 번만
  }, []);
  useEffect(() => () => { window.clearTimeout(settle.current); cancelAnimationFrame(frame.current); }, []);

  const go = (i: number) => {
    const next = Math.max(0, Math.min(items.length - 1, i));
    const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
    ref.current?.scrollTo({ top: next * itemH(), behavior: reduce ? "auto" : "smooth" });
    onChange(next);
  };

  const onScroll = () => {
    cancelAnimationFrame(frame.current);
    frame.current = requestAnimationFrame(paint);
    // 스크롤이 멈추면(스냅 완료) 가운데 칸을 값으로
    window.clearTimeout(settle.current);
    settle.current = window.setTimeout(() => {
      const el = ref.current;
      if (el) onChange(Math.max(0, Math.min(items.length - 1, Math.round(el.scrollTop / itemH()))));
    }, 90);
  };

  const onKeyDown = (e: KeyboardEvent) => {
    const step = { ArrowUp: -1, ArrowDown: 1, PageUp: -3, PageDown: 3 }[e.key];
    if (step) { e.preventDefault(); go(index + step); }
    else if (e.key === "Home") { e.preventDefault(); go(0); }
    else if (e.key === "End") { e.preventDefault(); go(items.length - 1); }
  };

  return (
    <div
      ref={ref}
      className="wh"
      role="spinbutton"
      tabIndex={0}
      aria-label={label}
      aria-valuenow={index}
      aria-valuemin={0}
      aria-valuemax={items.length - 1}
      aria-valuetext={items[index]}
      onScroll={onScroll}
      onKeyDown={onKeyDown}
    >
      {items.map((t, i) => (
        <div key={t} className="wh__item" aria-hidden="true" onClick={() => go(i)}>{t}</div>
      ))}
    </div>
  );
}

/* ───────── 시간 고르기 ───────── */

interface Props {
  value: string; // "HH:MM"
  onChange: (value: string) => void;
  label: string;
  /** 버튼 모양: field = 입력칸처럼, inline = 일정 카드 안의 시간 글자처럼 */
  variant?: "field" | "inline";
}

/**
 * 오전/오후 · 시 · 분 세 줄을 굴려서 고르는 시간 선택기.
 * 기본 <input type="time">의 브라우저 팝업은 모양을 바꿀 수 없어 직접 만든다.
 */
export function TimePicker({ value, onChange, label, variant = "field" }: Props) {
  const [open, setOpen] = useState(false);
  const [up, setUp] = useState(false); // 아래 공간이 모자라면 위로 펼친다
  const [draft, setDraft] = useState(() => toWheels(value));
  const rootRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const panelId = useId();

  const close = () => { setOpen(false); triggerRef.current?.focus(); };
  const confirm = () => { onChange(fromWheels(draft)); close(); };

  useEffect(() => {
    if (!open) return;
    const onDown = (e: PointerEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: globalThis.KeyboardEvent) => {
      if (e.key === "Escape") { setOpen(false); triggerRef.current?.focus(); }
    };
    document.addEventListener("pointerdown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  function toggle() {
    if (open) { setOpen(false); return; }
    const r = triggerRef.current?.getBoundingClientRect();
    if (r) setUp(window.innerHeight - r.bottom < PANEL_H && r.top > window.innerHeight - r.bottom);
    setDraft(toWheels(value));
    setOpen(true);
  }

  return (
    <div className={`tp tp--${variant}`} ref={rootRef}>
      <button
        ref={triggerRef}
        type="button"
        className="tp__btn"
        aria-label={`${label}: ${formatTime(value)}`}
        aria-expanded={open}
        aria-controls={panelId}
        onClick={toggle}
      >
        {variant === "field" && <Icon name="clock" />}
        <span>{variant === "field" ? formatTime(value) : value}</span>
      </button>
      {open && (
        <>
          <div className="tp__scrim" aria-hidden="true" onClick={() => setOpen(false)} />
          <div
            className={up ? "tp__panel tp__panel--up" : "tp__panel"}
            id={panelId}
            role="dialog"
            aria-label={label}
            onKeyDown={(e) => { e.stopPropagation(); if (e.key === "Enter") { e.preventDefault(); confirm(); } }}
            // 일정 카드는 끌어서 옮길 수 있으므로, 휠을 굴리는 동작이 카드 끌기로 번지지 않게 막는다
            onMouseDown={(e) => e.stopPropagation()}
            onTouchStart={(e) => e.stopPropagation()}
          >
            <p className="tp__title">{label}</p>
            <div className="tp__wheels">
              <div className="tp__band" aria-hidden="true" />
              <Wheel items={PERIODS} index={draft.p} label="오전/오후" onChange={(p) => setDraft((d) => ({ ...d, p }))} />
              <Wheel items={HOURS.map(String)} index={draft.h} label="시" onChange={(h) => setDraft((d) => ({ ...d, h }))} />
              <span className="tp__colon" aria-hidden="true">:</span>
              <Wheel items={MINUTES.map(pad)} index={draft.m} label="분" onChange={(m) => setDraft((d) => ({ ...d, m }))} />
            </div>
            <div className="tp__foot">
              <button type="button" className="tp__cancel" onClick={close}>취소</button>
              <button type="button" className="tp__ok" onClick={confirm}>확인</button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
