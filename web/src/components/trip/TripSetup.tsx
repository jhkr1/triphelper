"use client";

import { useState, type FormEvent } from "react";
import { findCity } from "@/lib/places";
import { nightsBetween, type PlannerCountry } from "@/lib/trip-model";
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
}

interface Props {
  trip: Trip;
  countries: PlannerCountry[];
  onApply: (r: SetupResult) => void;
  onCancel: () => void;
}

/** 여행 설정: 나라 · 도시(자유 입력) · 날짜 */
export function TripSetup({ trip, countries, onApply, onCancel }: Props) {
  const [countrySlug, setCountrySlug] = useState(trip.country);
  const [city, setCity] = useState(trip.city);
  const [start, setStart] = useState(trip.start);
  const [end, setEnd] = useState(trip.end);
  const [hint, setHint] = useState("");
  const [busy, setBusy] = useState(false);
  const country = countries.find((c) => c.slug === countrySlug)!;
  const suggestions = country.cities.map((c) => c.nameKo || c.name);

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (!start || !end) return setHint("날짜를 입력하세요.");
    const n = nightsBetween(start, end);
    if (n < 0) return setHint("오는 날이 가는 날보다 빠릅니다.");
    if (n > 29) return setHint("여행 기간은 최대 30일까지 설정할 수 있습니다.");

    const name = city.trim();
    const placeChanged = countrySlug !== trip.country || name !== trip.city;
    const total = trip.days.reduce((a, d) => a + d.places.length, 0);
    if (placeChanged && total && !confirm("여행지를 바꾸면 담은 장소가 모두 지워집니다. 계속할까요?")) return;
    const lost = trip.days.slice(n + 1).reduce((a, d) => a + d.places.length, 0);
    if (!placeChanged && lost && !confirm(`줄어든 날짜에 담긴 장소 ${lost}곳이 지워집니다. 계속할까요?`)) return;

    if (!placeChanged) return onApply({ country, city: trip.city, center: trip.center, start, end });
    if (!name) return onApply({ country, city: "", center: country.center, start, end }); // 나라 전체

    // 그 나라 안의 실제 도시인지 확인하고 중심 좌표를 받아 옴
    setBusy(true);
    const found = await findCity(name, country.countryCode);
    setBusy(false);
    if (!found) return setHint(`"${name}"을(를) ${country.name}에서 찾지 못했습니다. 도시 이름을 확인해 주세요.`);
    onApply({ country, city: found.name, center: found.center, start, end, approxName: found.approxName });
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
        <label>가는 날
          <input type="date" required value={start} onChange={(e) => { setStart(e.target.value); if (end < e.target.value) setEnd(e.target.value); }} />
        </label>
        <label>오는 날
          <input type="date" required value={end} min={start} onChange={(e) => setEnd(e.target.value)} />
        </label>
      </div>
      <p className={hint ? "setup__hint err" : "setup__hint"} role="status">{hint}</p>
      <div className="setup__act">
        <button type="button" className="btn" onClick={onCancel}>취소</button>
        <button type="submit" className="btn btn--pri" disabled={busy}>{busy ? "도시 확인 중…" : "적용"}</button>
      </div>
    </form>
  );
}
