"use client";

import { Fragment } from "react";
import { Icon } from "@/components/ui/Icon";
import { dayColor } from "@/components/trip/TripMap";
import { Leg, PlacePhoto } from "@/components/trip/Itinerary";
import { dayLabel } from "@/lib/trip-model";
import type { Place, TripDay } from "@/types/trip";

/* 읽기 전용 날짜별 동선 (게시글 보기 · 보기 전용 링크) */

function Stop({ p, n, color }: { p: Place; n: number; color: string }) {
  return (
    <li className="stop stop--ro" style={{ "--dc": color } as React.CSSProperties}>
      <span className="stop__n" aria-hidden="true"><i>{n}</i></span>
      <div className="stop__body">
        <PlacePhoto place={p} />
        <div className="stop__txt">
          {p.time && <div className="stop__time">{p.time}</div>}
          <div className="stop__name"><span>{p.name}</span>{p.category && <span className="tag">{p.category}</span>}</div>
          {p.duration && <div className="tags"><span className="tag">{p.duration} 머묾</span></div>}
          {p.memo && <p className="stop__memo stop__memo--ro">{p.memo}</p>}
        </div>
      </div>
    </li>
  );
}

function StayItem({ stay, label }: { stay: Place; label: string }) {
  return (
    <li className="stay stay--from">
      <span className="stay__ic" aria-hidden="true"><Icon name="bed" /></span>
      <div className="stay__body"><small>{label}</small><b>{stay.name}</b></div>
    </li>
  );
}

/** start: 날짜를 밝힌 경우 첫날 (Day 옆에 날짜 표시) */
export function RouteDays({ days, start, countryCode }: { days: TripDay[]; start?: string; countryCode: string }) {
  return (
    <section className="post__days">
      {days.map((d, i) => {
        const prevStay = days[i - 1]?.stay;
        const stay = i < days.length - 1 ? d.stay : undefined;
        return (
          <div className="card post__day" key={i}>
            <h2><span style={{ background: dayColor(i) }} aria-hidden="true" />{i + 1}일차{start && <small>{dayLabel(start, i)}</small>}</h2>
            {!d.places.length && !stay && !prevStay ? (
              <p className="board__msg">이날은 비워 두었어요.</p>
            ) : (
              <ol className="tl" style={{ "--dc": dayColor(i) } as React.CSSProperties}>
                {prevStay && <StayItem stay={prevStay} label="숙소에서 출발" />}
                {prevStay && d.places[0] && <Leg from={prevStay} to={d.places[0]} countryCode={countryCode} />}
                {d.places.map((p, j) => (
                  <Fragment key={p.id}>
                    {j > 0 && <Leg from={d.places[j - 1]} to={p} countryCode={countryCode} />}
                    <Stop p={p} n={j + 1} color={dayColor(i)} />
                  </Fragment>
                ))}
                {stay && d.places.length > 0 && <Leg from={d.places[d.places.length - 1]} to={stay} countryCode={countryCode} />}
                {stay && <StayItem stay={stay} label={`${i + 1}일차 밤 숙소`} />}
              </ol>
            )}
          </div>
        );
      })}
    </section>
  );
}
