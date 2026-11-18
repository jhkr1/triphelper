"use client";

import { Fragment, useEffect, useState, type FormEvent } from "react";
import { Icon, type IconName } from "@/components/ui/Icon";
import { dayColor } from "@/components/trip/TripMap";
import { dayLabel, newId, sortByTime, addDays, addHours, nextSlot } from "@/lib/trip-model";
import { TimePicker } from "@/components/trip/TimePicker";
import { fetchNearby, getPhoto, isConfident, searchPlace, type NearbyPlace, type Photo, type PlaceCandidate } from "@/lib/places";
import { directionsUrl, distanceMeters, formatDistance, walkingMinutes, WALKABLE_METERS } from "@/lib/geo";
import { weatherIcon, type DailyForecast } from "@/lib/weather";
import type { Place, Trip } from "@/types/trip";

interface Props {
  trip: Trip;
  countryCode: string;
  day: number;
  onDayChange: (i: number) => void;
  forecast: Record<string, DailyForecast>;
  rateText: string;
  onAddDay: () => void;
  onRemoveDay: (i: number) => void;
  /** 선택한 날의 장소 목록 바꾸기 */
  updatePlaces: (fn: (places: Place[]) => Place[]) => void;
  onPickRequest: (placeId: string) => void;
  toast: (msg: string) => void;
}

/* ───────── 사진 ───────── */

function PlacePhoto({ place }: { place: Place }) {
  const [result, setResult] = useState<{ key: string; photo: Photo | null } | null>(null);
  const key = place.wiki ?? "";
  useEffect(() => {
    if (!key) return;
    let alive = true;
    getPhoto(key).then((photo) => { if (alive) setResult({ key, photo }); });
    return () => { alive = false; };
  }, [key]);

  if (place.image && !place.wiki) {
    return (
      <figure className="stop__ph">
        {/* eslint-disable-next-line @next/next/no-img-element -- 위키미디어 외부 이미지 */}
        <img src={place.image} alt="" loading="lazy" />
        <figcaption>사진: 위키백과</figcaption>
      </figure>
    );
  }
  if (!key) return null;
  if (result?.key !== key) return <div className="stop__ph stop__ph--loading" />;
  if (!result.photo) return null;
  return (
    <figure className="stop__ph">
      {/* eslint-disable-next-line @next/next/no-img-element -- 위키미디어 외부 이미지 */}
      <img src={result.photo.src} alt={place.name} loading="lazy" />
      <figcaption>사진: <a href={result.photo.page} target="_blank" rel="noopener noreferrer">위키백과</a></figcaption>
    </figure>
  );
}

/* ───────── 근처 추천 ───────── */

type NearState = { status: "loading" } | { status: "done"; items: NearbyPlace[] } | { status: "error"; why: string };
const nearCache = new Map<string, NearState>();
const nearKey = (p: Place) => (p.location ? `${p.location.lat.toFixed(4)},${p.location.lng.toFixed(4)}` : "");

function loadNearby(place: Place, exclude: Set<string>, onDone: () => void) {
  const key = nearKey(place);
  if (!key || (nearCache.has(key) && nearCache.get(key)!.status !== "error")) return;
  nearCache.set(key, { status: "loading" });
  fetchNearby(place.location!, exclude)
    .then((items) => nearCache.set(key, { status: "done", items }))
    .catch((err: unknown) => nearCache.set(key, { status: "error", why: err instanceof Error ? err.message : String(err) }))
    .finally(onDone);
}

const KIND_ICON: Record<NearbyPlace["kind"], IconName> = { landmark: "landmark", image: "image", tree: "tree", bag: "bag", eye: "eye" };

function NearbyPanel({ place, state, inTrip, onTake }: { place: Place; state: NearState | undefined; inTrip: Set<string>; onTake: (n: NearbyPlace) => void }) {
  if (!state || state.status === "loading") return <p className="near__msg">주변 1km의 장소를 찾는 중…</p>;
  if (state.status === "error") return <p className="near__msg">추천을 불러오지 못했습니다. 다시 시도해 주세요. <small>({state.why})</small></p>;
  if (!state.items.length) return <p className="near__msg">주변에서 추천할 곳을 찾지 못했습니다.</p>;
  return (
    <>
      <p className="near__hd">{place.name} 주변 1km · 유명한 순</p>
      <div className="near__list">
        {state.items.map((x) => (
          <div className="nc" key={x.name}>
            <div className="nc__img" style={{ backgroundImage: `url("${x.image}")` }}>{!x.image && <Icon name={KIND_ICON[x.kind]} />}</div>
            <div className="nc__body">
              <b>{x.name}</b>
              <small>도보 약 {walkingMinutes(x.meters)}분 · {formatDistance(x.meters)}</small>
              {inTrip.has(x.name)
                ? <button type="button" disabled>담음</button>
                : <button type="button" onClick={() => onTake(x)}>+ 일정에 담기</button>}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

/* ───────── 장소 사이 이동 ───────── */

/** 앞 장소 → 다음 장소: 가까우면 도보 시간, 멀면 거리 + 대중교통 길찾기(지도 앱) */
function Leg({ from, to, countryCode }: { from: Place; to: Place; countryCode: string }) {
  if (!from.location || !to.location) return null;
  const meters = distanceMeters(from.location, to.location);
  const walk = meters <= WALKABLE_METERS;
  const a = { name: from.name, location: from.location };
  const b = { name: to.name, location: to.location };
  const appName = countryCode === "kr" ? "카카오맵" : "구글 지도";
  return (
    <li className="leg" aria-label={`${from.name}에서 ${to.name}까지`}>
      <span className="leg__line" aria-hidden="true" />
      <span className="leg__info">
        <Icon name={walk ? "walk" : "transit"} />
        {walk ? `도보 약 ${walkingMinutes(meters)}분 · ${formatDistance(meters)}` : `약 ${formatDistance(meters)}`}
        <a href={directionsUrl(a, b, countryCode, walk ? "walk" : "transit")} target="_blank" rel="noopener noreferrer" title={`${appName}에서 길찾기`}>
          {walk ? "길찾기" : "대중교통 길찾기"}<span className="sr-only"> ({appName}, 새 창)</span>
        </a>
      </span>
    </li>
  );
}

/* ───────── 일정표 ───────── */

export function Itinerary({ trip, countryCode, day, onDayChange, forecast, rateText, onAddDay, onRemoveDay, updatePlaces, onPickRequest, toast }: Props) {
  const places = trip.days[day]?.places ?? [];
  const w = forecast[addDays(trip.start, day)];
  const [openNear, setOpenNear] = useState<string | null>(null);
  const [, setNearTick] = useState(0);
  const refreshNear = () => setNearTick((n) => n + 1);
  const inTrip = new Set(trip.days.flatMap((d) => d.places.flatMap((p) => [p.name, p.wiki].filter((x): x is string => Boolean(x)))));

  // 장소 추가
  // 직접 고르기 전에는 그날 마지막 일정 1시간 뒤를 제안한다
  const [timeOverride, setTimeOverride] = useState<string | null>(null);
  const time = timeOverride ?? nextSlot(places);
  const [name, setName] = useState("");
  const [busy, setBusy] = useState(false);
  const [choices, setChoices] = useState<{ query: string; time: string; list: PlaceCandidate[] } | null>(null);

  const addPlace = (p: Omit<Place, "id">) => {
    updatePlaces((list) => sortByTime([...list, { id: newId(), ...p }]));
    setChoices(null);
    setTimeOverride(null); // 다음 추가 시간은 다시 자동 제안
  };
  const fromCandidate = (c: PlaceCandidate, t: string, n: string): Omit<Place, "id"> =>
    ({ time: t, name: n, category: c.category, location: c.location, ...(c.wiki ? { wiki: c.wiki } : {}) });

  async function onAdd(e: FormEvent) {
    e.preventDefault();
    const n = name.trim();
    if (!n) return;
    setBusy(true);
    const results = await searchPlace(n, countryCode, trip.center);
    setBusy(false);
    setName("");
    if (isConfident(results)) {
      addPlace(fromCandidate(results[0], time, n));
      toast(`지도에 표시했습니다 · ${results[0].name}`);
    } else if (results.length) {
      setChoices({ query: n, time, list: results });
    } else {
      addPlace({ time, name: n, category: "" });
      toast("위치를 찾지 못했습니다. 지도에서 직접 지정할 수 있습니다.");
    }
  }

  function takeNearby(from: Place, x: NearbyPlace) {
    const t = addHours(from.time, 1); // 기준 장소 1시간 뒤로 제안
    addPlace({
      time: t, name: x.name, category: "명소", memo: `${from.name}에서 도보 약 ${walkingMinutes(x.meters)}분`,
      location: x.location, ...(x.wiki ? { wiki: x.wiki } : { image: x.image }),
    });
    toast(`${x.name} 담음`);
  }

  function toggleNear(p: Place) {
    const key = nearKey(p);
    setOpenNear((cur) => (cur === key ? null : key));
    loadNearby(p, inTrip, refreshNear);
  }

  return (
    <div className="card">
      <div className="days" role="tablist" aria-label="날짜">
        {trip.days.map((_, i) => (
          <button key={i} className="day" role="tab" aria-selected={i === day} onClick={() => { setTimeOverride(null); onDayChange(i); }}>
            <b>Day {i + 1}</b><span>{dayLabel(trip.start, i)}</span>
          </button>
        ))}
        <button className="day day--add" type="button" onClick={onAddDay}>+ 날짜 추가</button>
      </div>

      <div className="daybar">
        {w ? (
          <span className="wx"><Icon name={weatherIcon(w.weatherCode)} /><b>{Math.round(w.tempMax)}° / {Math.round(w.tempMin)}° · 강수 {Math.round(w.rainChance)}%</b></span>
        ) : (
          <span className="wx muted"><Icon name="calendar" />날씨 예보는 여행 16일 전부터 표시됩니다</span>
        )}
        <span className="sep">|</span>
        <span>환율 {rateText}</span>
        <button type="button" className="day-del" disabled={trip.days.length < 2} onClick={() => onRemoveDay(day)}>
          <Icon name="x" />이 날 삭제
        </button>
      </div>

      <ol className="tl">
        {places.length === 0 && <li className="empty-trip">담은 장소가 없습니다. 아래에서 추가하세요.</li>}
        {places.map((p, i) => {
          const key = nearKey(p);
          const open = Boolean(key) && openNear === key;
          const prev = places[i - 1];
          return (
            <Fragment key={p.id}>
            {prev && <Leg from={prev} to={p} countryCode={countryCode} />}
            <li className="stop" style={{ "--dc": dayColor(day) } as React.CSSProperties}>
              <div className="stop__n"><i>{i + 1}</i></div>
              <div className="stop__body">
                <PlacePhoto place={p} />
                <div className="stop__txt">
                  <div className="stop__time">
                    <TimePicker
                      variant="inline"
                      value={p.time}
                      label={`${p.name} 시간 변경`}
                      onChange={(v) => updatePlaces((list) => sortByTime(list.map((x) => (x.id === p.id ? { ...x, time: v } : x))))}
                    />
                  </div>
                  <div className="stop__name">
                    <span>{p.name}</span>
                    {p.category && <span className="tag">{p.category}</span>}
                  </div>
                  <div className="tags">
                    {p.duration && <span className="tag"><Icon name="clock" />{p.duration}</span>}
                    {!p.location && (
                      <button type="button" className="tag tag--warn" onClick={() => onPickRequest(p.id)}>
                        <Icon name="pin" />위치 미지정 · 지도에서 지정
                      </button>
                    )}
                  </div>
                  {p.memo && <p className="stop__memo">{p.memo}</p>}
                  {p.location && (
                    <button
                      type="button"
                      className="near-btn"
                      aria-expanded={open}
                      onClick={() => toggleNear(p)}
                      onPointerEnter={() => loadNearby(p, inTrip, refreshNear)} // 마우스를 올리면 미리 불러오기
                    >
                      근처 추천
                    </button>
                  )}
                </div>
              </div>
              <button className="icon-btn" type="button" aria-label={`${p.name} 삭제`} onClick={() => updatePlaces((list) => list.filter((x) => x.id !== p.id))}>
                <Icon name="x" />
              </button>
              {open && (
                <div className="near">
                  <NearbyPanel place={p} state={nearCache.get(key)} inTrip={inTrip} onTake={(x) => takeNearby(p, x)} />
                </div>
              )}
            </li>
            </Fragment>
          );
        })}
      </ol>

      <form className="add" onSubmit={onAdd}>
        <TimePicker value={time} onChange={setTimeOverride} label="방문 시간" />
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="가고 싶은 장소를 입력하세요" aria-label="장소 이름" autoComplete="off" />
        <button className="btn btn--pri" type="submit" disabled={busy}>{busy ? "위치 찾는 중…" : "+ 추가"}</button>
      </form>

      {choices && (
        <div className="choices">
          <p>{choices.list.length > 1 ? `"${choices.query}" 후보가 여러 개입니다. 위치를 선택하세요.` : `"${choices.query}"이(가) 이곳이 맞나요?`}</p>
          {choices.list.map((c, i) => (
            <button key={i} type="button" onClick={() => addPlace(fromCandidate(c, choices.time, choices.query))}>
              <b>{c.name}</b><small>{c.sub}</small>
            </button>
          ))}
          <button type="button" className="none" onClick={() => addPlace({ time: choices.time, name: choices.query, category: "" })}>
            위치 없이 추가
          </button>
        </div>
      )}
    </div>
  );
}
