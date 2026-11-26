"use client";

import { useEffect, useId, useRef, useState, useSyncExternalStore, type KeyboardEvent, type PointerEvent } from "react";
import { usePathname } from "next/navigation";
import { Icon } from "@/components/ui/Icon";
import { createLocalSetting } from "@/lib/local-setting";
import { HELP, helpPageOf, type HelpPage } from "@/components/help/help-content";

/*
 * 화면 구석에 떠 있는 사용법(?) 버튼.
 * - 끌어서 놓으면 가장 가까운 구석에 붙고, 그 자리를 기억한다 (다음에 와도 그 자리)
 * - 누르면 지금 보고 있는 페이지의 사용법이 먼저 열린다
 * - 키보드: 화살표로 구석 옮기기, Enter·Space로 열기, Esc로 닫기
 */

type Corner = "tl" | "tr" | "bl" | "br";
const CORNERS = ["tl", "tr", "bl", "br"] as const;
const cornerSetting = createLocalSetting<Corner>("help-corner", "br", CORNERS);
/** 이만큼 넘게 움직이면 끌기, 아니면 누르기 */
const DRAG_PX = 6;

export function HelpButton() {
  const pathname = usePathname();
  const corner = useSyncExternalStore(cornerSetting.subscribe, cornerSetting.getSnapshot, cornerSetting.getServerSnapshot);
  // 연 주소를 기억해, 다른 페이지로 가면 저절로 닫힌 것으로 본다
  const [openAt, setOpenAt] = useState<string | null>(null);
  const open = openAt === pathname;
  const setOpen = (v: boolean) => setOpenAt(v ? pathname : null);
  const [page, setPage] = useState<HelpPage>("home");
  const btnRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const drag = useRef<{ sx: number; sy: number; moved: boolean } | null>(null);
  const suppressClick = useRef(false);
  const titleId = useId();
  const here = helpPageOf(pathname);

  const show = () => { setPage(here); setOpen(true); };
  const hide = (focusButton = true) => { setOpen(false); if (focusButton) btnRef.current?.focus(); };

  // 열리면 닫기 버튼에 포커스, Esc로 닫기, Tab은 패널 안에서만 돈다
  useEffect(() => {
    if (!open) return;
    panelRef.current?.querySelector<HTMLElement>(".help__x")?.focus();
    const onKey = (e: globalThis.KeyboardEvent) => {
      if (e.key === "Escape") { e.preventDefault(); hide(); return; }
      if (e.key !== "Tab" || !panelRef.current) return;
      const list = [...panelRef.current.querySelectorAll<HTMLElement>("button, summary, a[href]")].filter((el) => el.offsetParent !== null);
      if (!list.length) return;
      const first = list[0], last = list[list.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]); // eslint-disable-line react-hooks/exhaustive-deps

  /* ── 끌기 ── 움직이는 동안은 transform으로 따라오고, 놓으면 가까운 구석으로 붙으며 미끄러진다 */
  function onPointerDown(e: PointerEvent<HTMLButtonElement>) {
    if (e.button !== 0) return;
    e.currentTarget.setPointerCapture(e.pointerId);
    drag.current = { sx: e.clientX, sy: e.clientY, moved: false };
  }
  function onPointerMove(e: PointerEvent<HTMLButtonElement>) {
    const d = drag.current;
    if (!d) return;
    const dx = e.clientX - d.sx, dy = e.clientY - d.sy;
    if (!d.moved && Math.hypot(dx, dy) < DRAG_PX) return;
    if (!d.moved) { d.moved = true; setOpen(false); }
    const el = e.currentTarget;
    el.classList.add("help__fab--drag");
    el.style.transform = `translate(${dx}px, ${dy}px)`;
  }
  function onPointerUp(e: PointerEvent<HTMLButtonElement>) {
    const d = drag.current;
    drag.current = null;
    if (!d?.moved) return;
    suppressClick.current = true; // 끌기 뒤에 오는 click은 열기로 치지 않는다
    const el = e.currentTarget;
    const before = el.getBoundingClientRect();
    const cx = before.left + before.width / 2, cy = before.top + before.height / 2;
    const next: Corner = `${cy < window.innerHeight / 2 ? "t" : "b"}${cx < window.innerWidth / 2 ? "l" : "r"}`;
    // 새 구석 자리로 옮긴 뒤, 놓은 자리에서 미끄러져 가게 (FLIP)
    el.dataset.corner = next;
    el.style.transform = "";
    const after = el.getBoundingClientRect();
    el.style.transform = `translate(${before.left - after.left}px, ${before.top - after.top}px)`;
    requestAnimationFrame(() => {
      el.classList.remove("help__fab--drag");
      el.style.transform = "";
    });
    cornerSetting.set(next);
  }
  function onKeyDown(e: KeyboardEvent<HTMLButtonElement>) {
    const v = e.key === "ArrowUp" ? "t" : e.key === "ArrowDown" ? "b" : null;
    const h = e.key === "ArrowLeft" ? "l" : e.key === "ArrowRight" ? "r" : null;
    if (!v && !h) return;
    e.preventDefault();
    cornerSetting.set(`${v ?? corner[0]}${h ?? corner[1]}` as Corner);
  }

  const section = HELP[page];
  return (
    <>
      <button
        ref={btnRef}
        type="button"
        className="help__fab"
        data-corner={corner}
        aria-label={open ? "사용법 닫기" : "사용법 보기 (화살표 키로 자리를 옮길 수 있어요)"}
        aria-expanded={open}
        aria-controls={open ? "help-panel" : undefined}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
        onKeyDown={onKeyDown}
        onClick={() => {
          if (suppressClick.current) { suppressClick.current = false; return; }
          if (open) hide(false); else show();
        }}
      >
        <span aria-hidden="true">?</span>
      </button>

      {open && (
        <>
          <div className="help__scrim" onClick={() => hide()} aria-hidden="true" />
          <div ref={panelRef} id="help-panel" className="help__panel" data-corner={corner} role="dialog" aria-modal="true" aria-labelledby={titleId}>
            <div className="help__grab" aria-hidden="true" />
            <div className="help__head">
              <div>
                <h2 id={titleId}>사용법</h2>
                <p>궁금한 걸 눌러 보세요</p>
              </div>
              <button type="button" className="help__x" onClick={() => hide()} aria-label="사용법 닫기"><Icon name="x" /></button>
            </div>
            <div className="help__tabs" role="tablist" aria-label="페이지별 사용법">
              {(Object.keys(HELP) as HelpPage[]).map((id) => (
                <button key={id} type="button" role="tab" aria-selected={page === id} onClick={() => setPage(id)}>
                  {HELP[id].label}{id === here && <span className="help__here">지금 화면</span>}
                </button>
              ))}
            </div>
            <div className="help__body" role="tabpanel" key={page}>
              {section.groups.map((g) => (
                <section key={g.name}>
                  <h3>{g.name}</h3>
                  {g.items.map((it) => (
                    <details key={it.q}>
                      <summary>{it.q}</summary>
                      <div className="help__ans">{it.a}</div>
                    </details>
                  ))}
                </section>
              ))}
            </div>
          </div>
        </>
      )}
    </>
  );
}
