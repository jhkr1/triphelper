"use client";

import { useCallback, useEffect, useRef, useState, useSyncExternalStore } from "react";
import { Icon } from "@/components/ui/Icon";
import { authStore } from "@/lib/supabase";
import { deleteTrip, flushSave, listMyTrips, loadTrip, syncStatusStore, type SyncStatus, type TripMeta } from "@/lib/trip-sync";
import type { PlannerCountry } from "@/lib/trip-model";
import type { Trip } from "@/types/trip";

/** "방금" · "3분 전" · "2시간 전" · "11.19" */
function ago(iso: string) {
  const s = (Date.now() - Date.parse(iso)) / 1000;
  if (s < 60) return "방금";
  if (s < 3600) return `${Math.floor(s / 60)}분 전`;
  if (s < 86400) return `${Math.floor(s / 3600)}시간 전`;
  const d = new Date(iso);
  return `${d.getMonth() + 1}.${d.getDate()}`;
}

/** 저장 상태 (제목 아래 작은 글씨) */
export function SyncBadge() {
  const s: SyncStatus = useSyncExternalStore(syncStatusStore.subscribe, syncStatusStore.getSnapshot, syncStatusStore.getServerSnapshot);
  // "방금 저장" 문구가 오래 남지 않도록 1분마다 다시 그림
  const [, tick] = useState(0);
  useEffect(() => { const t = window.setInterval(() => tick((n) => n + 1), 60_000); return () => window.clearInterval(t); }, []);
  if (s.state === "off") return null;
  const text = {
    idle: "장소를 담으면 자동으로 저장돼요",
    pending: "저장 대기 중…",
    saving: "저장 중…",
    saved: s.state === "saved" ? `저장됨 · ${ago(s.at)}` : "",
    error: s.state === "error" ? s.message : "",
  }[s.state];
  return <span className={`sync sync--${s.state}`} role="status" aria-live="polite"><i className="sync__dot" aria-hidden="true" />{text}</span>;
}

interface Props {
  trip: Trip;
  countries: PlannerCountry[];
  onOpened: (t: Trip) => void;
  onNew: () => void;
  toast: (msg: string) => void;
}

/** 내 여행 목록: 로그인했을 때만. 열기 · 새로 만들기 · 지우기 */
export function MyTrips({ trip, countries, onOpened, onNew, toast }: Props) {
  const auth = useSyncExternalStore(authStore.subscribe, authStore.getSnapshot, authStore.getServerSnapshot);
  const me = auth.status === "in" ? auth.me : null;
  const [open, setOpen] = useState(false);
  const [list, setList] = useState<TripMeta[] | null>(null);
  const [failed, setFailed] = useState(false);
  const [busy, setBusy] = useState<string | null>(null);
  const boxRef = useRef<HTMLDivElement>(null);

  const refresh = useCallback(async () => {
    if (!me) return;
    setFailed(false);
    try {
      await flushSave(); // 지금 일정도 목록에 최신으로 보이게
      setList(await listMyTrips(me.id));
    } catch { setFailed(true); }
  }, [me]);

  useEffect(() => {
    if (!open) return;
    const onDown = (e: PointerEvent) => { if (!boxRef.current?.contains(e.target as Node)) setOpen(false); };
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(false); };
    document.addEventListener("pointerdown", onDown);
    document.addEventListener("keydown", onKey);
    return () => { document.removeEventListener("pointerdown", onDown); document.removeEventListener("keydown", onKey); };
  }, [open]);

  if (!me) return null;
  const countryName = (slug: string) => countries.find((c) => c.slug === slug)?.name ?? slug;

  async function openTrip(id: string) {
    if (!me || id === trip.cloud?.id) { setOpen(false); return; }
    setBusy(id);
    try {
      await flushSave();
      onOpened(await loadTrip(id, me.id));
      setOpen(false);
    } catch {
      toast("일정을 불러오지 못했어요. 잠시 뒤 다시 시도해 주세요.");
    } finally { setBusy(null); }
  }

  async function remove(t: TripMeta) {
    const name = t.title || `${countryName(t.country)} 여행`;
    if (!confirm(`"${name}"을(를) 삭제할까요? 되돌릴 수 없습니다.`)) return;
    setBusy(t.id);
    try {
      await deleteTrip(t.id);
      setList((l) => l?.filter((x) => x.id !== t.id) ?? null);
      if (t.id === trip.cloud?.id) onNew(); // 지금 보던 일정을 지웠으면 새 일정으로
      toast(`"${name}"을(를) 삭제했어요`);
    } catch {
      toast("삭제하지 못했어요");
    } finally { setBusy(null); }
  }

  return (
    <div className="mytrips" ref={boxRef}>
      <button className="btn" type="button" aria-expanded={open} onClick={() => { if (!open) refresh(); setOpen(!open); }}>
        내 여행 목록
      </button>
      {open && (
        <div className="mytrips__panel" role="dialog" aria-label="내 여행 목록">
          <div className="mytrips__hd">
            <b>내 여행 목록</b>
            <button type="button" className="mytrips__new" onClick={async () => { await flushSave(); onNew(); setOpen(false); }}>
              <Icon name="plus" />새 여행
            </button>
          </div>
          {failed ? (
            <p className="mytrips__msg">목록을 불러오지 못했어요. <button type="button" onClick={refresh}>다시 시도</button></p>
          ) : !list ? (
            <p className="mytrips__msg">불러오는 중…</p>
          ) : !list.length ? (
            <p className="mytrips__msg">아직 저장된 여행이 없어요. 장소를 담으면 자동으로 저장돼요.</p>
          ) : (
            <ul className="mytrips__list">
              {list.map((t) => {
                const current = t.id === trip.cloud?.id;
                return (
                  <li key={t.id} className={current ? "is-current" : undefined}>
                    <button type="button" className="mytrips__open" onClick={() => openTrip(t.id)} disabled={busy === t.id} aria-current={current || undefined}>
                      <b>{t.title || `${countryName(t.country)} 여행`}</b>
                      <small>
                        {countryName(t.country)} · {t.nights ? `${t.nights}박 ${t.nights + 1}일` : "당일"} · {ago(t.updatedAt)} 수정
                        {current && " · 지금 보는 중"}
                      </small>
                    </button>
                    <button type="button" className="icon-btn" aria-label={`${t.title || "이 여행"} 삭제`} onClick={() => remove(t)} disabled={busy === t.id}>
                      <Icon name="x" />
                    </button>
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      )}
    </div>
  );
}
