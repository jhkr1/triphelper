"use client";

import { useState, type FormEvent } from "react";
import { findCity } from "@/lib/places";
import { addDays, nightsBetween, placeholderStart, type PlannerCountry } from "@/lib/trip-model";
import { DateRangePicker, shortDate } from "@/components/trip/DateRangePicker";
import { Icon } from "@/components/ui/Icon";
import type { LatLng } from "@/types/destination";
import type { Trip } from "@/types/trip";

export interface SetupResult {
  country: PlannerCountry;
  city: string;
  center: LatLng;
  start: string;
  end: string;
  /** 정확히 일치하지 않아 가장 가까운 도시로 설정된 경우 */
  approxName?: string;
  /** 가는 날을 비워 둔 경우: 기간만 정하고 날짜는 미정 */
  datesUnset: boolean;
}

/** 기간 빠른 선택 (박 수) */
const QUICK_NIGHTS = [
  { nights: 0, label: "당일" },
  { nights: 1, label: "1박 2일" },
  { nights: 2, label: "2박 3일" },
  { nights: 3, label: "3박 4일" },
  { nights: 4, label: "4박 5일" },
];

interface Props {
  trip: Trip;
  countries: PlannerCountry[];
  onApply: (r: SetupResult) => void;
  onCancel: () => void;
}

/** 여행 설정: 나라 · 도시(자유 입력) · 기간 · 날짜 (날짜는 비워 두면 '날짜 미정') */
export function TripSetup({ trip, countries, onApply, onCancel }: Props) {
  const [countrySlug, setCountrySlug] = useState(trip.country);
  const [city, setCity] = useState(trip.city);
  // 날짜 미정 일정은 날짜 칸을 비워서 보여 준다 (임시 날짜를 정해진 것처럼 채우지 않게)
  const [start, setStart] = useState(trip.datesUnset ? "" : trip.start);
  const [end, setEnd] = useState(trip.datesUnset ? "" : trip.end);
  const [nights, setNights] = useState(nightsBetween(trip.start, trip.end));
  // 날짜 미정 일정은 달력을 펼친 채로 연다 ("날짜 정하기"로 들어온 경우)
  const [calOpen, setCalOpen] = useState(Boolean(trip.datesUnset));
  const [hint, setHint] = useState("");
  const [busy, setBusy] = useState(false);
  const country = countries.find((c) => c.slug === countrySlug)!;
  const suggestions = country.cities.map((c) => c.nameKo || c.name);

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    // 가는 날이 비어 있으면 날짜 미정: 임시 출발일 + 고른 기간
    const datesUnset = !start;
    const from = start || placeholderStart();
    const to = start ? end || addDays(start, nights) : addDays(from, nights);
    const n = nightsBetween(from, to);
    if (n < 0) return setHint("오는 날이 가는 날보다 빠릅니다.");
    if (n > 29) return setHint("여행 기간은 최대 30일까지 설정할 수 있습니다.");

    const name = city.trim();
    const placeChanged = countrySlug !== trip.country || name !== trip.city;
    const total = trip.days.reduce((a, d) => a + d.places.length, 0);
    // 로그인해서 저장된 일정은 그대로 '내 여행 목록'에 남고 새 여행이 만들어지므로 묻지 않는다
    if (placeChanged && total && !trip.cloud && !confirm("여행지를 바꾸면 담은 장소가 모두 지워집니다. 계속할까요?")) return;
    const lost = trip.days.slice(n + 1).reduce((a, d) => a + d.places.length, 0);
    if (!placeChanged && lost && !confirm(`줄어든 날짜에 담긴 장소 ${lost}곳이 지워집니다. 계속할까요?`)) return;

    if (!placeChanged) return onApply({ country, city: trip.city, center: trip.center, start: from, end: to, datesUnset });
    if (!name) return onApply({ country, city: "", center: country.center, start: from, end: to, datesUnset }); // 나라 전체

    // 그 나라 안의 실제 도시인지 확인하고 중심 좌표를 받아 옴
    setBusy(true);
    const found = await findCity(name, country.countryCode);
    setBusy(false);
    if (!found) return setHint(`"${name}"을(를) ${country.name}에서 찾지 못했습니다. 도시 이름을 확인해 주세요.`);
    onApply({ country, city: found.name, center: found.center, start: from, end: to, approxName: found.approxName, datesUnset });
  }

  return (
    <form className="card setup" onSubmit={onSubmit}>
      <div className="setup__grid">
        <label>나라
          <select value={countrySlug} onChange={(e) => { setCountrySlug(e.target.value); setCity(""); }}>
            {countries.map((c) => <option key={c.slug} value={c.slug}>{c.name}</option>)}
          </select>
        </label>
        <label>도시
          <input
            list="trip-city-list"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            autoComplete="off"
            placeholder={suggestions.length ? `예: ${suggestions.slice(0, 3).join(", ")}` : "도시 이름 (비우면 나라 전체)"}
          />
          <datalist id="trip-city-list">{suggestions.map((s) => <option key={s} value={s} />)}</datalist>
        </label>
        <div className="setup__dates">
          <span className="setup__lbl" id="trip-dates-lbl">여행 날짜</span>
          <button type="button" className="setup__datebtn" aria-expanded={calOpen} aria-labelledby="trip-dates-lbl trip-dates-val" onClick={() => setCalOpen((o) => !o)}>
            <Icon name="calendar" />
            <span id="trip-dates-val">
              {!start ? `날짜 미정 · ${nights ? `${nights}박 ${nights + 1}일` : "당일"}`
                : `${shortDate(start)} – ${shortDate(end || addDays(start, nights))} · ${nights ? `${nights}박 ${nights + 1}일` : "당일"}`}
            </span>
          </button>
        </div>
      </div>
      {calOpen && (
        <DateRangePicker
          start={start}
          end={end}
          onChange={(s, e) => {
            setStart(s);
            setEnd(e);
            setHint("");
            if (e) setNights(nightsBetween(s, e));
          }}
        />
      )}
      <div className="setup__nights" role="group" aria-label="여행 기간">
        {QUICK_NIGHTS.map((q) => (
          <button
            key={q.nights}
            type="button"
            aria-pressed={nights === q.nights}
            onClick={() => { setNights(q.nights); if (start) setEnd(addDays(start, q.nights)); }}
          >
            {q.label}
          </button>
        ))}
        {start && (
          <button type="button" className="setup__unset" onClick={() => { setStart(""); setEnd(""); }}>
            날짜 미정으로 두기
          </button>
        )}
      </div>
      <p className={hint ? "setup__hint err" : "setup__hint"} role="status">
        {hint || (!start
          ? `날짜를 아직 모르면 기간만 골라 두세요. 나중에 날짜를 정하면 날씨 예보도 보여 드려요.`
          : !end ? `오는 날을 고르지 않으면 ${nights ? `${nights}박 ${nights + 1}일` : "당일"}로 정합니다.` : "")}
      </p>
      <div className="setup__act">
        <button type="button" className="btn" onClick={onCancel}>취소</button>
        <button type="submit" className="btn btn--pri" disabled={busy}>{busy ? "도시 확인 중…" : "적용"}</button>
      </div>
    </form>
  );
}
