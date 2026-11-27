"use client";

import { useCallback, useEffect, useRef, useState, useSyncExternalStore } from "react";
import { Icon } from "@/components/ui/Icon";
import { TripMap } from "@/components/trip/TripMap";
import { Itinerary } from "@/components/trip/Itinerary";
import { ChecklistPanel } from "@/components/trip/ChecklistPanel";
import { TripSetup, type SetupResult } from "@/components/trip/TripSetup";
import { LOADING, normalizeTrip, tripStore } from "@/lib/trip-store";
import { flushSave, loadTrip, noteActivity, startTripSync } from "@/lib/trip-sync";
import { acceptInvite } from "@/lib/trip-collab";
import { CollabDialog } from "@/components/trip/CollabDialog";
import { ActivityPanel } from "@/components/trip/ActivityPanel";
import { MyTrips, SyncBadge } from "@/components/trip/MyTrips";
import { PublishDialog } from "@/components/board/PublishDialog";
import { SharedTripView } from "@/components/trip/SharedTripView";
import { authSettled, authStore } from "@/lib/supabase";
import { getViewLink, makeViewLink, viewUrl } from "@/lib/trip-link";
import {
  addDays, createTrip, dateParts, defaultTrip, nightsBetween, readSharedTrip, sampleTrip, shareUrl, tripName, TRIP_TITLE_MAX, withDatesUnset, type PlannerCountry,
} from "@/lib/trip-model";
import { fetchExchange, formatRate } from "@/lib/exchange";
import { fetchDailyForecast, type DailyForecast } from "@/lib/weather";
import { flagUrl } from "@/lib/geo";
import { applyChange, contentOf, createUndoHistory, type ChangeOpts } from "@/lib/trip-undo";
import { getVersion, putBack, versionDiff, whenLabel, type TripVersion, type VersionDiff } from "@/lib/trip-versions";
import { eul } from "@/lib/trip-merge";
import { BASE_PATH } from "@/lib/site";
import type { LatLng } from "@/types/destination";
import type { Place, Trip } from "@/types/trip";
import { StarterRoute } from "@/components/trip/StarterRoute";
import { fillTripFromPost, type Post } from "@/lib/posts";

/** 알림 안의 버튼 (예: 되돌리기) */
interface ToastAction { label: string; run: () => void }

const DEFAULT_COUNTRY = "south-korea";

/** 내 여행. 보기 전용 링크(?v=코드)로 열었으면 그 일정을 읽기 전용으로 보여 준다 */
export function TripPlanner({ countries }: { countries: PlannerCountry[] }) {
  // 이 화면은 로그인 확인 뒤(브라우저)에만 그려지므로 처음 값을 주소에서 바로 읽는다
  const [viewCode, setViewCode] = useState(() => (typeof window === "undefined" ? null : new URLSearchParams(window.location.search).get("v")));
  if (viewCode) {
    return (
      <SharedTripView
        code={viewCode}
        countries={countries}
        onDone={() => { history.replaceState(null, "", window.location.pathname); setViewCode(null); }}
      />
    );
  }
  return <PlannerMain countries={countries} />;
}

/** 여행 설정 · 일정표(지도) · 체크리스트. 일정은 브라우저에 자동 저장된다. */
function PlannerMain({ countries }: { countries: PlannerCountry[] }) {
  const snapshot = useSyncExternalStore(tripStore.subscribe, tripStore.getSnapshot, tripStore.getServerSnapshot);
  const countryOf = useCallback((slug: string) => countries.find((c) => c.slug === slug), [countries]);

  // 처음 열 때: 공유 링크(#z= / 예전 #t=) → 나라 페이지에서 온 경우(?country=) → 저장된 일정 → 기본 일정
  // 공유 링크는 압축을 풀어야 해서 비동기로 읽는다. 개발 모드에서 effect가 두 번 돌아도 한 번만 처리한다.
  const opened = useRef(false);
  const ready = useRef(false); // 처음 열기 처리가 끝났는지
  const [notice, setNotice] = useState("");
  useEffect(() => { startTripSync(); }, []); // 로그인했으면 DB에 자동 저장
  // 로그아웃 등으로 이 기기의 일정이 지워지면 기본 일정으로 다시 시작
  useEffect(() => {
    if (snapshot === null && ready.current) tripStore.set(defaultTrip(countryOf(DEFAULT_COUNTRY) ?? countries[0]));
  }, [snapshot, countries, countryOf]);
  useEffect(() => {
    if (opened.current) return;
    opened.current = true;
    let cancelled = false;
    (async () => {
      // 일정 저장 칸이 계정마다 달라서 로그인 확인이 끝난 뒤에 연다
      // (먼저 넣으면 비로그인 칸에 들어갔다가, 로그인이 확인되는 순간 내 계정 칸의 일정이나 기본 일정으로 바뀐다)
      const auth = await authSettled();
      if (cancelled) return;
      // 함께 짜기 초대 링크(?invite=): 멤버가 되고 그 일정을 연다 (이 화면은 로그인해야 열린다)
      const invite = new URLSearchParams(window.location.search).get("invite");
      if (invite && auth.status === "in") {
        history.replaceState(null, "", window.location.pathname);
        try {
          const id = await acceptInvite(invite);
          await flushSave();
          const t = await loadTrip(id, auth.me.id, countries);
          if (cancelled) return;
          tripStore.set(t);
          setNotice(`${tripName(t, countryOf(t.country)?.name ?? "")}에 함께하게 됐어요`);
        } catch (e) {
          setNotice(e instanceof Error ? e.message : "초대 링크를 열지 못했어요");
        }
        ready.current = true;
        return;
      }
      const shared = await readSharedTrip(window.location.hash, countryOf);
      if (cancelled) return;
      const wanted = new URLSearchParams(window.location.search).get("country");
      const saved = tripStore.getSnapshot();
      const savedTrip = saved && saved !== LOADING ? saved : null;
      // DB에 저장된 일정은 바꿔도 '내 여행 목록'에 남으므로 묻지 않는다
      const keep = (t: Trip | null) => !t?.days.some((d) => d.places.length) || Boolean(t?.cloud);
      if (shared !== "none" && shared !== "invalid") {
        if (keep(savedTrip) || confirm("공유받은 일정으로 바꿀까요? 지금 일정은 지워집니다.")) tripStore.set(shared);
        history.replaceState(null, "", window.location.pathname);
      } else if (wanted && countryOf(wanted) && savedTrip?.country !== wanted) {
        if (keep(savedTrip) || confirm(`${countryOf(wanted)!.name} 여행으로 새 일정을 만들까요? 지금 일정은 지워집니다.`)) {
          tripStore.set(defaultTrip(countryOf(wanted)!));
        }
      } else if (!savedTrip) {
        // 처음 온 사람의 기본 여행지: 한국 · 서울 (나라 데이터의 첫 도시)
        tripStore.set(defaultTrip(countryOf(DEFAULT_COUNTRY) ?? countries[0]));
      }
      ready.current = true;
    })();
    return () => { cancelled = true; opened.current = false; };
  }, [countries, countryOf]);

  if (snapshot === LOADING || snapshot === null) {
    return <div className="wrap"><p style={{ color: "var(--mute)" }}>일정을 불러오는 중…</p></div>;
  }
  return <PlannerBody trip={snapshot} countries={countries} countryOf={countryOf} notice={notice} />;
}

/**
 * 여행 이름: 누르면 그 자리에서 고친다 (Enter·칸 밖 누르기: 저장, Esc: 취소).
 * 비우거나 기본 이름과 같게 하면 붙인 이름을 지워 "도시 여행"으로 돌아간다.
 */
function TripTitle({ name, auto, canEdit, onRename }: { name: string; auto: string; canEdit: boolean; onRename: (title: string) => void }) {
  const [draft, setDraft] = useState<string | null>(null); // null: 고치는 중이 아님
  if (!canEdit) return <span className="trip-name">{name}</span>;
  if (draft === null) {
    return (
      <button type="button" className="trip-name trip-name--btn" onClick={() => setDraft(name)} aria-label={`여행 이름 바꾸기: ${name}`}>
        {name}
      </button>
    );
  }
  const save = () => {
    const to = draft.trim();
    setDraft(null);
    if ((to || auto) === name) return;
    onRename(to === auto ? "" : to);
  };
  return (
    <input
      autoFocus
      className="trip-name__in"
      value={draft}
      maxLength={TRIP_TITLE_MAX}
      placeholder={auto}
      aria-label="여행 이름 (비우면 기본 이름)"
      onFocus={(e) => e.currentTarget.select()}
      onChange={(e) => setDraft(e.target.value)}
      onKeyDown={(e) => {
        if (e.key === "Enter") { e.preventDefault(); save(); }
        if (e.key === "Escape") setDraft(null);
      }}
      onBlur={save}
    />
  );
}

/** 예전 일정으로 되돌리기 전에 무엇이 바뀌는지 알려 주는 확인 창 */
function RestoreDialog({ when, diff, onConfirm, onClose }: { when: string; diff: VersionDiff; onConfirm: () => void; onClose: () => void }) {
  const okRef = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    const back = document.activeElement as HTMLElement | null;
    okRef.current?.focus();
    return () => back?.focus();
  }, []);
  const parts = [
    diff.back.size ? `장소 ${diff.back.size}곳이 다시 생기고` : "",
    diff.later.length ? `그 뒤에 넣은 ${diff.later.length}곳(${diff.later.slice(0, 2).map((p) => p.name).join(", ")}${diff.later.length > 2 ? " 등" : ""})은 빠져요` : "",
    diff.moved.size ? `${diff.moved.size}곳은 그때 자리로 돌아가요` : "",
  ].filter(Boolean);
  return (
    <div className="pub" role="presentation" onPointerDown={(e) => { if (e.target === e.currentTarget) onClose(); }}>
      <div
        className="pub__box restore"
        role="dialog"
        aria-modal="true"
        aria-labelledby="restore-title"
        onKeyDown={(e) => {
          if (e.key === "Escape") { e.stopPropagation(); onClose(); }
          if (e.key === "Tab") { e.preventDefault(); (document.activeElement === okRef.current ? e.currentTarget.querySelector<HTMLElement>("button") : okRef.current)?.focus(); }
        }}
      >
        <div className="pub__hd">
          <h2 id="restore-title">{when} 일정으로 되돌릴까요?</h2>
        </div>
        <p className="restore__what">{parts.length ? `${parts.join(", ")}.` : "날짜·숙소·메모 등이 그때로 돌아가요."}</p>
        <p className="pub__msg">지금 일정도 기록에 남으니 언제든 다시 돌아올 수 있어요. 준비물 체크는 그대로예요.</p>
        <div className="pub__act">
          <button className="btn" type="button" onClick={onClose}>취소</button>
          <button className="btn btn--pri" type="button" ref={okRef} onClick={onConfirm}>되돌리기</button>
        </div>
      </div>
    </div>
  );
}

/** [이때 보기]로 보고 있는 예전 일정 */
interface Peek { tripId: string; version: TripVersion }

function PlannerBody({ trip: saved, countries, countryOf, notice }: { trip: Trip; countries: PlannerCountry[]; countryOf: (s: string) => PlannerCountry | undefined; notice: string }) {
  // 예전 일정을 보는 동안 화면에는 그 일정을 보기 전용으로 그린다 (저장된 지금 일정은 그대로). 다른 일정으로 바뀌면 닫힌다
  const [peekState, setPeek] = useState<Peek | null>(null);
  const peek = peekState && peekState.tripId === saved.cloud?.id ? peekState : null;
  const trip: Trip = peek
    ? normalizeTrip({ ...peek.version.data, checklist: saved.checklist, ...(saved.cloud ? { cloud: saved.cloud } : {}) })
    : saved;
  const diff = peek ? versionDiff(peek.version.data, contentOf(saved)) : null;
  const country = countryOf(trip.country) ?? countries[0];
  const [tab, setTab] = useState<"plan" | "check">("plan");
  const [day, setDay] = useState(0);
  const [mapDay, setMapDay] = useState<"all" | number>("all");
  const [setupOpen, setSetupOpen] = useState(false);
  const auth = useSyncExternalStore(authStore.subscribe, authStore.getSnapshot, authStore.getServerSnapshot);
  const [publishOpen, setPublishOpen] = useState(false);
  const [collabOpen, setCollabOpen] = useState(false);
  const closeCollab = useCallback(() => setCollabOpen(false), []);
  // 함께 짜는 일정에서 나의 권한: 보기만이면 일정은 고칠 수 없다 (준비물은 내 것이라 고칠 수 있음)
  const role = trip.cloud?.role ?? "owner";
  const viewer = role === "viewer" || peek !== null;
  const closePublish = useCallback(() => setPublishOpen(false), []);
  const [pickTarget, setPickTarget] = useState<{ day: number; id: string } | null>(null);
  const [toastMsg, setToastMsg] = useState<{ text: string; n: number; action?: ToastAction } | null>(null);
  // 공유 링크는 압축이 비동기라 일정이 바뀔 때마다 미리 만들어 둔다. 주소는 지금 열린 사이트 기준 (로컬에서 만든 링크가 배포 사이트의 없는 주소로 가지 않도록)
  // 누르는 순간 바로 공유 창·복사를 열어야 휴대폰(특히 사파리)이 막지 않는다.
  const [link, setLink] = useState<{ trip: Trip; url: string } | null>(null);
  useEffect(() => {
    let cancelled = false;
    shareUrl(window.location.origin + BASE_PATH, trip).then((url) => { if (!cancelled) setLink({ trip, url }); }, () => {});
    return () => { cancelled = true; };
  }, [trip]);
  // 저장된 일정의 보기 전용 링크 (짧은 주소). 켜져 있는지 미리 알아 둔다 (code: null = 꺼짐)
  const cloudId = trip.cloud?.id ?? null;
  const [viewLink, setViewLink] = useState<{ tripId: string; code: string | null } | null>(null);
  useEffect(() => {
    if (!cloudId) return;
    let cancelled = false;
    getViewLink(cloudId).then((code) => { if (!cancelled) setViewLink({ tripId: cloudId, code }); }, () => {});
    return () => { cancelled = true; };
  }, [cloudId]);
  const viewCode = viewLink && viewLink.tripId === cloudId ? viewLink.code : undefined; // undefined = 아직 모름
  const toastTimer = useRef<number | undefined>(undefined);
  const safeDay = Math.min(day, trip.days.length - 1);

  // action: 알림 안의 버튼 (되돌리기 등). 누를 시간을 주려고 더 오래 보인다
  const toast = useCallback((text: string, action?: ToastAction) => {
    setToastMsg((t) => ({ text, n: (t?.n ?? 0) + 1, ...(action ? { action } : {}) }));
    window.clearTimeout(toastTimer.current);
    toastTimer.current = window.setTimeout(() => setToastMsg(null), action ? 8000 : 2000);
  }, [setToastMsg]); // setToastMsg는 바뀌지 않지만 React Compiler가 의존성으로 보므로 적어 둔다
  useEffect(() => () => window.clearTimeout(toastTimer.current), []);

  /* 실시간 환율 (현지 통화 → 원) */
  const [rate, setRate] = useState<{ code: string; text: string } | null>(null);
  useEffect(() => {
    let alive = true;
    const code = country.currencyCode;
    if (code === "KRW") return;
    fetchExchange(code, "ko")
      .then((ex) => { if (alive) setRate({ code, text: `1 ${code} = ${formatRate(ex.rate, "ko")}원` }); })
      .catch(() => { if (alive) setRate({ code, text: "불러오지 못함" }); });
    return () => { alive = false; };
  }, [country.currencyCode]);
  const rateText = country.currencyCode === "KRW" ? "원화 사용" : rate?.code === country.currencyCode ? rate.text : "불러오는 중…";

  /* 날짜별 날씨 예보 (최대 16일 후까지) */
  const forecastKey = `${trip.center.lat.toFixed(2)},${trip.center.lng.toFixed(2)}`;
  const [forecast, setForecast] = useState<{ key: string; byDate: Record<string, DailyForecast> } | null>(null);
  useEffect(() => {
    let alive = true;
    fetchDailyForecast(trip.center.lat, trip.center.lng)
      .then((list) => { if (alive) setForecast({ key: forecastKey, byDate: Object.fromEntries(list.map((d) => [d.date, d])) }); })
      .catch(() => { /* 예보 없이 표시 */ });
    return () => { alive = false; };
  }, [forecastKey, trip.center.lat, trip.center.lng]);
  // 날짜 미정이면 날짜별 예보를 붙일 수 없다
  const byDate = !trip.datesUnset && forecast?.key === forecastKey ? forecast.byDate : {};
  const rainyIndex = trip.days.findIndex((_, i) => (byDate[addDays(trip.start, i)]?.rainChance ?? 0) >= 50);
  const rainyDay = rainyIndex >= 0
    ? (() => { const f = byDate[addDays(trip.start, rainyIndex)]; return { index: rainyIndex, start: trip.start, text: `강수 ${Math.round(f.rainChance)}% · 최저 ${Math.round(f.tempMin)}°` }; })()
    : null;

  /* 일정 바꾸기: 바꿀 때마다 되돌리기 기록을 남긴다 (opts.undo가 있으면 알림에 [되돌리기]) */
  const [history] = useState(createUndoHistory);
  const update = (fn: (t: Trip) => Trip, opts: ChangeOpts = {}) => {
    if (peek) { toast("예전 일정을 보는 중이에요. [지금 일정으로]를 누르면 고칠 수 있어요"); return; }
    if (viewer) { toast("보기만 할 수 있는 일정이에요"); return; }
    commit(fn, opts);
  };
  const commit = (fn: (t: Trip) => Trip, opts: ChangeOpts = {}) => {
    const step: { id: number | null } = { id: null };
    tripStore.update((t) => {
      const next = fn(t);
      step.id = history.record(t, next, opts.group);
      return next;
    });
    const id = step.id;
    if (opts.undo && id !== null) {
      toast(opts.undo, { label: "되돌리기", run: () => tripStore.update((t) => history.revert(id, t) ?? t) });
    }
  };
  const updatePlaces = (fn: (places: Place[]) => Place[], opts?: ChangeOpts) =>
    update((t) => ({ ...t, days: t.days.map((d, i) => (i === safeDay ? { ...d, places: fn(d.places) } : d)) }), opts);
  /** 다른 일정으로 바꿀 때: 앞 일정의 되돌리기 기록은 버린다 */
  const replaceTrip = (t: Trip) => { history.clear(); setPeek(null); tripStore.set(t); };

  /* 최근 활동의 [이때 보기] → 예전 일정 보기 → 되돌리기 */
  const [restoreOpen, setRestoreOpen] = useState(false);
  async function openPeek(versionId: number) {
    if (!saved.cloud) return;
    const tripId = saved.cloud.id;
    try {
      const version = await getVersion(versionId);
      setPeek({ tripId, version });
      setTab("plan");
      setDay(0);
      setMapDay("all");
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch {
      toast("그때의 일정을 불러오지 못했어요");
    }
  }
  function restorePeek() {
    if (!peek) return;
    const label = `${whenLabel(peek.version.createdAt)} 일정으로 되돌렸어요`;
    const data = peek.version.data;
    setRestoreOpen(false);
    setPeek(null);
    noteActivity(label);
    // 지금 일정 → 그때 일정. 되돌린 것도 한 번의 변경이라 [되돌리기]·Ctrl+Z로 다시 돌아올 수 있다
    commit((t) => applyChange(t, contentOf(t), data), { undo: label });
  }
  // 저장 연결이 다른 일정으로 바뀌면(다른 기기에서 고른 일정 등) 기록을 버린다. 처음 저장되어 id가 생길 때는 그대로
  const lastCloud = useRef(cloudId);
  useEffect(() => {
    if (lastCloud.current && cloudId !== lastCloud.current) history.clear();
    lastCloud.current = cloudId;
  }, [cloudId, history]);

  // Ctrl+Z 되돌리기 · Ctrl+Shift+Z (Ctrl+Y) 다시 하기. 글자를 고치는 칸 안에서는 브라우저의 글자 되돌리기를 그대로 둔다
  const keyRef = useRef<(e: KeyboardEvent) => void>(() => {});
  const onUndoKey = (e: KeyboardEvent) => {
    if (viewer || tab !== "plan" || !(e.ctrlKey || e.metaKey) || e.altKey) return;
    const k = e.key.toLowerCase();
    const redo = (k === "z" && e.shiftKey) || (k === "y" && !e.shiftKey);
    if (!redo && !(k === "z" && !e.shiftKey)) return;
    const el = e.target as HTMLElement | null;
    if (el && (el.isContentEditable || /^(INPUT|TEXTAREA|SELECT)$/.test(el.tagName))) return;
    e.preventDefault();
    const now = tripStore.getSnapshot();
    if (!now || now === LOADING) return;
    const next = redo ? history.redo(now) : history.undo(now);
    if (!next) { toast(redo ? "다시 할 것이 없어요" : "되돌릴 것이 없어요"); return; }
    tripStore.set(next);
    toast(redo ? "다시 했어요" : "되돌렸어요");
  };
  useEffect(() => { keyRef.current = onUndoKey; });
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => keyRef.current(e);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  function applySetup(r: SetupResult) {
    const n = nightsBetween(r.start, r.end);
    const placeChanged = r.country.slug !== trip.country || r.city !== trip.city;
    if (placeChanged) {
      replaceTrip(withDatesUnset(createTrip(r.country, r.city, r.center, r.start, r.end), r.datesUnset));
      setMapDay("all");
    } else {
      update((t) => {
        const days = t.days.slice(0, n + 1);
        while (days.length < n + 1) days.push({ places: [] });
        // 줄어든 일정의 새 마지막 날은 밤이 없으므로 숙소를 뺀다
        const { stay: _, ...last } = days[n]; // eslint-disable-line @typescript-eslint/no-unused-vars
        days[n] = last;
        return withDatesUnset({ ...t, start: r.start, end: r.end, days }, r.datesUnset);
      });
    }
    setDay((d) => Math.min(d, n));
    setSetupOpen(false);
    toast(`${r.city || r.country.name} 여행 · ${r.datesUnset ? "날짜 미정 · " : ""}${n}박 ${n + 1}일로 설정했습니다${r.approxName ? ` (가장 가까운 결과: ${r.approxName})` : ""}`);
  }

  /** 여행 설정 열기: 일정표 아래쪽에서 눌러도 보이도록 설정 칸으로 스크롤 */
  function openSetup() {
    setSetupOpen(true);
    requestAnimationFrame(() => document.querySelector(".setup")?.scrollIntoView({ behavior: "smooth", block: "start" }));
  }

  function addDay() {
    update((t) => ({ ...t, end: addDays(t.end, 1), days: [...t.days, { places: [] }] }));
    setDay(trip.days.length);
    if (mapDay !== "all") setMapDay(trip.days.length);
  }

  function removeDay(i: number) {
    if (trip.days.length < 2) return toast("여행은 최소 하루가 필요합니다");
    // 묻지 않고 지운 뒤 알림의 [되돌리기]·Ctrl+Z로 되살릴 수 있게 한다
    const n = trip.days[i].places.length;
    const label = `${i + 1}일차`;
    update((t) => {
      const days = t.days.filter((_, j) => j !== i);
      const { stay: _, ...last } = days[days.length - 1]; // eslint-disable-line @typescript-eslint/no-unused-vars
      return { ...t, end: addDays(t.end, -1), days: [...days.slice(0, -1), last] };
    }, { undo: `${label}를 삭제했어요${n ? ` (장소 ${n}곳)` : ""}` });
    const next = Math.min(i, trip.days.length - 2);
    setDay(next);
    if (mapDay !== "all") setMapDay(next);
  }

  function onPicked(p: LatLng) {
    if (!pickTarget) return;
    update((t) => ({
      ...t,
      days: t.days.map((d, i) => (i !== pickTarget.day ? d : {
        ...d,
        places: d.places.map((x) => (x.id === pickTarget.id ? { ...x, location: p } : x)),
        ...(d.stay?.id === pickTarget.id ? { stay: { ...d.stay, location: p } } : {}),
      })),
    }));
    setPickTarget(null);
    toast("위치를 지정했습니다");
  }

  /**
   * 링크 공유
   * - DB에 저장된 일정: 보기 전용 링크(짧은 주소). 주인은 없으면 만들고, 멤버는 주인이 켜 둔 링크가 있을 때만
   * - 그 밖(저장 전 · 링크 공유로 받은 일정 등): 일정 전체를 주소에 담은 링크
   */
  async function share() {
    const origin = window.location.origin;
    let failed = "";
    let url: string | Promise<string>;
    let done = "공유 링크를 복사했습니다";
    if (cloudId && (role === "owner" || viewCode)) {
      void flushSave(); // 방금 고친 내용이 링크에 보이도록 기다리던 저장을 바로
      url = viewCode
        ? viewUrl(origin, viewCode)
        : makeViewLink(cloudId).then(
            (code) => { setViewLink({ tripId: cloudId, code }); return viewUrl(origin, code); },
            (e: unknown) => { failed = e instanceof Error ? e.message : "링크를 만들지 못했어요"; throw e; },
          );
      done = "보기 링크를 복사했습니다 · 일정을 고치면 받은 사람에게도 반영돼요";
    } else {
      url = link?.trip === trip ? link.url : shareUrl(origin + BASE_PATH, trip);
    }
    // 휴대폰: 기본 공유 창(카카오톡·문자 등). 컴퓨터는 공유 창보다 복사가 익숙하므로 복사한다.
    if (typeof url === "string" && navigator.share && matchMedia("(pointer: coarse)").matches) {
      try {
        await navigator.share({ title: `${tripName(trip, country.name)} 일정`, url });
        return;
      } catch (e) {
        if ((e as DOMException).name === "AbortError") return; // 공유 창을 닫은 경우
      }
    }
    try {
      if (typeof url === "string") {
        await navigator.clipboard.writeText(url);
      } else {
        // 링크가 아직 준비 중이면 완성될 링크(Promise)를 바로 넘겨 '누른 순간'의 복사로 처리되게 한다 (사파리)
        const pending = url;
        try {
          await navigator.clipboard.write([new ClipboardItem({ "text/plain": pending.then((u) => new Blob([u], { type: "text/plain" })) })]);
        } catch {
          await navigator.clipboard.writeText(await pending);
        }
      }
      toast(done);
    } catch {
      toast(failed || "이 환경에서는 복사할 수 없습니다");
    }
  }


  const a = dateParts(trip.start);
  const b = dateParts(trip.end);
  const nights = nightsBetween(trip.start, trip.end);
  const totalPlaces = trip.days.reduce((s, d) => s + d.places.length, 0);

  // 추천 동선이 없는 나라의 빈 일정: 쓰는 법을 보여 주는 예시 일정(도쿄)
  const japan = countryOf("japan");
  const sampleCta = japan ? (
    <div className="sample-cta">
      <span>어떻게 쓰는지 보고 싶다면 예시 일정(도쿄 3박 4일)을 불러와 보세요.</span>
      <button className="btn" type="button" onClick={() => { replaceTrip(sampleTrip(japan)); setDay(0); setMapDay("all"); }}>
        예시 일정 보기
      </button>
    </div>
  ) : null;

  /** 빈 일정에 추천 동선 채우기 (되돌리기는 채우기 전 일정으로) */
  function startFromPost(p: Post) {
    update((t) => fillTripFromPost(t, p), { undo: `추천 동선 ${p.placeCount}곳을 넣었어요` });
    setDay(0);
    setMapDay("all");
  }

  return (
    <>
    {/* 예전 일정 보기: 헤더 아래 얇은 흰 띠 (스크롤해도 따라온다). 바뀐 장소는 일정표 안에 표시 */}
    {peek && (
      <div className="peekbar" role="region" aria-label="예전 일정 보기">
        <div className="peekbar__in">
          <b>{whenLabel(peek.version.createdAt)}의 일정</b>
          <button className="btn btn--quiet" type="button" onClick={() => setPeek(null)}>지금 일정으로</button>
          {role !== "viewer" && (
            <button className="btn btn--pri" type="button" onClick={() => setRestoreOpen(true)}>이 시점으로 되돌리기</button>
          )}
        </div>
      </div>
    )}
    <div className={viewer ? "wrap is-viewer" : "wrap"}>
      <div className="hd">
        <div className="hd__main">
          {/* 어떤 여행을 보는지 고르기: 제목 바로 위 */}
          <MyTrips
            trip={trip}
            countries={countries}
            onOpened={(t) => { replaceTrip(t); setDay(0); setMapDay("all"); setSetupOpen(false); toast(`${tripName(t, countryOf(t.country)?.name ?? "")}을(를) 열었어요`); }}
            onNew={() => { replaceTrip(defaultTrip(country)); setDay(0); setMapDay("all"); setSetupOpen(true); }}
            toast={toast}
          />
          <h1>
            {/* eslint-disable-next-line @next/next/no-img-element -- 작은 외부 국기 이미지 */}
            <img className="fl" style={{ height: ".7em" }} src={flagUrl(country.countryCode)} alt="" />
            <TripTitle
              name={tripName(trip, country.name)}
              auto={tripName({ city: trip.city }, country.name)}
              canEdit={!viewer}
              onRename={(title) => {
                update((t) => ({ ...t, title: title || undefined }));
                toast(title ? "여행 이름을 바꿨어요" : "여행 이름을 기본 이름으로 되돌렸어요");
              }}
            />
          </h1>
          {/* 이 여행의 날짜·도시 고치기: 날짜 줄 끝 */}
          <p className="hd__meta">
            {trip.datesUnset ? <>날짜 미정 · {nights}박 {nights + 1}일</> : <>{a.y}.{a.m}.{a.d} ({a.w}) – {b.m}.{b.d} ({b.w}) · {nights}박 {nights + 1}일</>}
            {trip.datesUnset && !viewer ? (
              <button type="button" className="date-cta" onClick={openSetup}>날짜 정하기</button>
            ) : !viewer && (
              <button type="button" className="hd__set" aria-expanded={setupOpen} onClick={() => setSetupOpen((o) => !o)}>여행 설정</button>
            )}
          </p>
          <SyncBadge />
          {notice && <p className="collab-notice" role="status">{notice}</p>}
          {role === "viewer" && <p className="viewer-note">보기만 할 수 있는 일정이에요. 준비물은 내 것만 따로 챙길 수 있어요.</p>}
        </div>
        {/* 다른 사람에게 보여 주기: 링크 공유만 진하게 (예전 일정을 보는 동안에는 숨긴다) */}
        <div className="hd__share" role="group" aria-label="공유" hidden={peek !== null}>
          {auth.status === "in" && (
            <button
              className="btn btn--quiet"
              type="button"
              onClick={() => setCollabOpen(true)}
              disabled={!trip.cloud}
              title={!trip.cloud ? "장소를 담아 저장하면 함께 짤 수 있어요" : undefined}
            >
              {role === "owner" ? "함께 짜기" : "함께 짜는 사람"}
            </button>
          )}
          {auth.status === "in" && (
            <button
              className="btn btn--quiet"
              type="button"
              onClick={() => setPublishOpen(true)}
              disabled={totalPlaces === 0}
              title={totalPlaces === 0 ? "장소를 담으면 올릴 수 있어요" : undefined}
            >
              게시판에 올리기
            </button>
          )}
          <button className="btn btn--pri" type="button" onClick={share}><Icon name="link" />링크 공유</button>
        </div>
      </div>

      {publishOpen && <PublishDialog trip={trip} countryName={country.name} onClose={closePublish} />}
      {collabOpen && trip.cloud && auth.status === "in" && (
        <CollabDialog
          trip={trip}
          meId={auth.me.id}
          onClose={closeCollab}
          onLeft={() => { setCollabOpen(false); replaceTrip(defaultTrip(country)); setDay(0); toast("일정에서 나왔어요"); }}
          toast={toast}
          viewCode={viewCode}
          onViewCode={(code) => setViewLink({ tripId: trip.cloud!.id, code })}
        />
      )}

      {setupOpen && <TripSetup trip={trip} countries={countries} onApply={applySetup} onCancel={() => setSetupOpen(false)} />}

      {/* 빈 일정: 그 나라 추천 동선이 있으면 그걸로 시작하게, 없으면 예시 일정 안내 */}
      {totalPlaces === 0 && !setupOpen && !viewer && (
        <StarterRoute trip={trip} countryName={country.name} onApply={startFromPost} fallback={sampleCta} />
      )}

      {restoreOpen && peek && (
        <RestoreDialog when={whenLabel(peek.version.createdAt)} diff={diff!} onConfirm={restorePeek} onClose={() => setRestoreOpen(false)} />
      )}

      <div className="seg" role="tablist" aria-label="내 여행" hidden={peek !== null}>
        <button role="tab" aria-selected={tab === "plan"} onClick={() => setTab("plan")}>일정표</button>
        <button role="tab" aria-selected={tab === "check"} onClick={() => setTab("check")}>체크리스트</button>
      </div>

      {tab === "plan" ? (
        <section className="grid">
          <TripMap
            days={trip.days}
            mapDay={mapDay}
            onMapDayChange={(d) => { setMapDay(d); if (d !== "all") setDay(d); }}
            center={trip.center}
            onPick={pickTarget ? onPicked : undefined}
          />
          <Itinerary
            trip={trip}
            countryCode={country.countryCode}
            day={safeDay}
            onDayChange={(i) => { setDay(i); if (mapDay !== "all") setMapDay(i); }}
            forecast={byDate}
            onAddDay={addDay}
            onRemoveDay={removeDay}
            updatePlaces={updatePlaces}
            updateTrip={update}
            onPickRequest={(id) => {
              setPickTarget({ day: safeDay, id });
              document.querySelector(".trip-map")?.scrollIntoView({ behavior: "smooth", block: "center" });
              toast("지도에서 위치를 선택하세요");
            }}
            onOpenSetup={openSetup}
            toast={toast}
            marks={diff ?? undefined}
          />
          <aside className="side">
            <div className="card">
              <h3>여행 한눈에</h3>
              <div className="kv">
                <div><span>통화</span><b>{country.currencyName} ({country.currencyCode})</b></div>
                <div><span>환율</span><b>{rateText}</b></div>
                <div><span>비자</span><b>{country.visa || "-"}</b></div>
                <div><span>등록한 장소</span><b>{totalPlaces}곳</b></div>
              </div>
            </div>
            {trip.cloud && (
              <ActivityPanel
                tripId={trip.cloud.id}
                meId={auth.status === "in" ? auth.me.id : undefined}
                peeking={peek?.version.id}
                onPeek={openPeek}
                now={contentOf(saved)}
                canEdit={role !== "viewer"}
                onPutBack={(r) => {
                  if (peek) setPeek(null); // 예전 일정을 보던 중이면 지금 일정으로 돌아와서 넣는다
                  commit((t) => putBack(t, r), { undo: `${eul(r.place.name)} 다시 넣었어요` });
                }}
              />
            )}
          </aside>
        </section>
      ) : (
        <ChecklistPanel
          checklist={trip.checklist}
          onChange={(checklist) => tripStore.update((t) => ({ ...t, checklist }))}
          countryName={country.name}
          rainyDay={rainyDay}
        />
      )}

      <div className={`toast${toastMsg ? " on" : ""}${toastMsg?.action ? " toast--act" : ""}`} role="status" aria-live="polite">
        {toastMsg?.text}
        {toastMsg?.action && (
          <button type="button" onClick={() => { toastMsg.action!.run(); setToastMsg(null); }}>{toastMsg.action.label}</button>
        )}
      </div>
    </div>
    </>
  );
}
