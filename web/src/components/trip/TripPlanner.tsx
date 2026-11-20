"use client";

import { useCallback, useEffect, useRef, useState, useSyncExternalStore } from "react";
import { Icon } from "@/components/ui/Icon";
import { TripMap } from "@/components/trip/TripMap";
import { Itinerary } from "@/components/trip/Itinerary";
import { ChecklistPanel } from "@/components/trip/ChecklistPanel";
import { TripSetup, type SetupResult } from "@/components/trip/TripSetup";
import { LOADING, tripStore } from "@/lib/trip-store";
import { startTripSync } from "@/lib/trip-sync";
import { MyTrips, SyncBadge } from "@/components/trip/MyTrips";
import { PublishDialog } from "@/components/board/PublishDialog";
import { authStore } from "@/lib/supabase";
import {
  addDays, createTrip, dateParts, defaultTrip, nightsBetween, readSharedTrip, sampleTrip, shareUrl, withDatesUnset, type PlannerCountry,
} from "@/lib/trip-model";
import { fetchExchange, formatRate } from "@/lib/exchange";
import { fetchDailyForecast, type DailyForecast } from "@/lib/weather";
import { flagUrl } from "@/lib/geo";
import type { LatLng } from "@/types/destination";
import type { Place, Trip } from "@/types/trip";

const SITE_URL = "https://triphelper.kr";
const DEFAULT_COUNTRY = "south-korea";

/** 내 여행: 여행 설정 · 일정표(지도) · 체크리스트. 일정은 브라우저에 자동 저장된다. */
export function TripPlanner({ countries }: { countries: PlannerCountry[] }) {
  const snapshot = useSyncExternalStore(tripStore.subscribe, tripStore.getSnapshot, tripStore.getServerSnapshot);
  const countryOf = useCallback((slug: string) => countries.find((c) => c.slug === slug), [countries]);

  // 처음 열 때: 공유 링크(#z= / 예전 #t=) → 나라 페이지에서 온 경우(?country=) → 저장된 일정 → 기본 일정
  // 공유 링크는 압축을 풀어야 해서 비동기로 읽는다. 개발 모드에서 effect가 두 번 돌아도 한 번만 처리한다.
  const opened = useRef(false);
  const ready = useRef(false); // 처음 열기 처리가 끝났는지
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
  return <PlannerBody trip={snapshot} countries={countries} countryOf={countryOf} />;
}

function PlannerBody({ trip, countries, countryOf }: { trip: Trip; countries: PlannerCountry[]; countryOf: (s: string) => PlannerCountry | undefined }) {
  const country = countryOf(trip.country) ?? countries[0];
  const [tab, setTab] = useState<"plan" | "check">("plan");
  const [day, setDay] = useState(0);
  const [mapDay, setMapDay] = useState<"all" | number>("all");
  const [setupOpen, setSetupOpen] = useState(false);
  const auth = useSyncExternalStore(authStore.subscribe, authStore.getSnapshot, authStore.getServerSnapshot);
  const [publishOpen, setPublishOpen] = useState(false);
  const closePublish = useCallback(() => setPublishOpen(false), []);
  const [pickTarget, setPickTarget] = useState<{ day: number; id: string } | null>(null);
  const [toastMsg, setToastMsg] = useState<{ text: string; n: number } | null>(null);
  // 공유 링크는 압축이 비동기라 일정이 바뀔 때마다 미리 만들어 둔다.
  // 누르는 순간 바로 공유 창·복사를 열어야 휴대폰(특히 사파리)이 막지 않는다.
  const [link, setLink] = useState<{ trip: Trip; url: string } | null>(null);
  useEffect(() => {
    let cancelled = false;
    shareUrl(SITE_URL, trip).then((url) => { if (!cancelled) setLink({ trip, url }); }, () => {});
    return () => { cancelled = true; };
  }, [trip]);
  const toastTimer = useRef<number | undefined>(undefined);
  const safeDay = Math.min(day, trip.days.length - 1);

  const toast = useCallback((text: string) => {
    setToastMsg((t) => ({ text, n: (t?.n ?? 0) + 1 }));
    window.clearTimeout(toastTimer.current);
    toastTimer.current = window.setTimeout(() => setToastMsg(null), 2000);
  }, []);
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

  /* 일정 바꾸기 */
  const update = (fn: (t: Trip) => Trip) => tripStore.update(fn);
  const updatePlaces = (fn: (places: Place[]) => Place[]) =>
    update((t) => ({ ...t, days: t.days.map((d, i) => (i === safeDay ? { ...d, places: fn(d.places) } : d)) }));

  function applySetup(r: SetupResult) {
    const n = nightsBetween(r.start, r.end);
    const placeChanged = r.country.slug !== trip.country || r.city !== trip.city;
    if (placeChanged) {
      tripStore.set(withDatesUnset(createTrip(r.country, r.city, r.center, r.start, r.end), r.datesUnset));
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
    const n = trip.days[i].places.length;
    const label = `${i + 1}일차`;
    if (!confirm(`${label}를 삭제할까요?\n${n ? `담은 장소 ${n}곳도 함께 삭제되고, ` : ""}이후 일정은 하루씩 앞당겨집니다.`)) return;
    update((t) => {
      const days = t.days.filter((_, j) => j !== i);
      const { stay: _, ...last } = days[days.length - 1]; // eslint-disable-line @typescript-eslint/no-unused-vars
      return { ...t, end: addDays(t.end, -1), days: [...days.slice(0, -1), last] };
    });
    const next = Math.min(i, trip.days.length - 2);
    setDay(next);
    if (mapDay !== "all") setMapDay(next);
    toast(`${label}를 삭제했습니다`);
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

  async function share() {
    const ready = link?.trip === trip ? link.url : null;
    const url = ready ?? shareUrl(SITE_URL, trip);
    // 휴대폰: 기본 공유 창(카카오톡·문자 등). 컴퓨터는 공유 창보다 복사가 익숙하므로 복사한다.
    if (ready && navigator.share && matchMedia("(pointer: coarse)").matches) {
      try {
        await navigator.share({ title: `${trip.city || country.name} 여행 일정`, url: ready });
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
        try {
          await navigator.clipboard.write([new ClipboardItem({ "text/plain": url.then((u) => new Blob([u], { type: "text/plain" })) })]);
        } catch {
          await navigator.clipboard.writeText(await url);
        }
      }
      toast("공유 링크를 복사했습니다");
    } catch {
      toast("이 환경에서는 복사할 수 없습니다");
    }
  }


  const a = dateParts(trip.start);
  const b = dateParts(trip.end);
  const nights = nightsBetween(trip.start, trip.end);
  const totalPlaces = trip.days.reduce((s, d) => s + d.places.length, 0);

  return (
    <div className="wrap">
      <div className="hd">
        <div>
          <h1>
            {/* eslint-disable-next-line @next/next/no-img-element -- 작은 외부 국기 이미지 */}
            <img className="fl" style={{ height: ".7em" }} src={flagUrl(country.countryCode)} alt="" />
            {trip.city || country.name} 여행
          </h1>
          {trip.datesUnset ? (
            <p>
              날짜 미정 · {nights}박 {nights + 1}일
              <button type="button" className="date-cta" onClick={openSetup}>날짜 정하기</button>
            </p>
          ) : (
            <p>{a.y}.{a.m}.{a.d} ({a.w}) – {b.m}.{b.d} ({b.w}) · {nights}박 {nights + 1}일</p>
          )}
          <SyncBadge />
        </div>
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
          <MyTrips
            trip={trip}
            countries={countries}
            onOpened={(t) => { tripStore.set(t); setDay(0); setMapDay("all"); setSetupOpen(false); toast(`${t.city || countryOf(t.country)?.name || ""} 여행을 열었어요`); }}
            onNew={() => { tripStore.set(defaultTrip(country)); setDay(0); setMapDay("all"); setSetupOpen(true); }}
            toast={toast}
          />
          <button className="btn edit-trip" type="button" aria-expanded={setupOpen} onClick={() => setSetupOpen((o) => !o)}>
            여행 설정
          </button>
          {auth.status === "in" && (
            <button
              className="btn"
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

      {setupOpen && <TripSetup trip={trip} countries={countries} onApply={applySetup} onCancel={() => setSetupOpen(false)} />}

      {totalPlaces === 0 && !setupOpen && countryOf("japan") && (
        <div className="sample-cta">
          <span>어떻게 쓰는지 보고 싶다면 예시 일정(도쿄 3박 4일)을 불러와 보세요.</span>
          <button className="btn" type="button" onClick={() => { tripStore.set(sampleTrip(countryOf("japan")!)); setDay(0); setMapDay("all"); }}>
            예시 일정 보기
          </button>
        </div>
      )}

      <div className="seg" role="tablist" aria-label="내 여행">
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
            rateText={rateText}
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
          </aside>
        </section>
      ) : (
        <ChecklistPanel
          checklist={trip.checklist}
          onChange={(checklist) => update((t) => ({ ...t, checklist }))}
          countryName={country.name}
          rainyDay={rainyDay}
        />
      )}

      <div className={toastMsg ? "toast on" : "toast"} role="status" aria-live="polite">{toastMsg?.text}</div>
    </div>
  );
}
