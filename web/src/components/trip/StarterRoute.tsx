"use client";

import Link from "next/link";
import { useEffect, useState, type ReactNode } from "react";
import { dayColor } from "@/components/trip/TripMap";
import { isWikimediaImage } from "@/lib/photos";
import { findStarterPost, type Post } from "@/lib/posts";
import type { Trip } from "@/types/trip";

/** '비어 있는 채로 시작'을 누른 일정은 다시 묻지 않는다 (이 브라우저에서만) */
const offKey = (t: Trip) => `triphelper:starter-off:${t.cloud?.id ?? "local"}:${t.country}`;
function isOff(t: Trip) {
  try { return localStorage.getItem(offKey(t)) === "1"; } catch { return false; }
}

/** 나라별로 한 번 불러온 추천 동선 (되돌리기로 카드가 다시 나올 때 깜빡이지 않게) */
const starterCache = new Map<string, Post | null>();

/**
 * 빈 일정에 보여 주는 '추천 동선으로 시작' 카드.
 * 그 나라에 운영 계정의 추천 동선이 있을 때만 보인다 (없으면 fallback). 넣으면 여행 도시도 동선의 도시로 바뀐다.
 */
export function StarterRoute({ trip, countryName, onApply, fallback }: {
  trip: Trip;
  countryName: string;
  onApply: (p: Post) => void;
  /** 이 나라에 추천 동선이 없을 때 대신 보여 줄 것 (불러오는 동안에는 아무것도 보이지 않음) */
  fallback?: ReactNode;
}) {
  const [found, setFound] = useState<{ country: string; post: Post | null } | null>(null);
  const [off, setOff] = useState<string | null>(null); // 이번에 닫은 일정 (localStorage를 못 쓰는 환경 대비)

  useEffect(() => {
    if (starterCache.has(trip.country)) return;
    let alive = true;
    const country = trip.country;
    findStarterPost(country).then(
      (post) => { starterCache.set(country, post); if (alive) setFound({ country, post }); },
      () => { if (alive) setFound({ country, post: null }); }, // 못 불러오면 조용히 숨긴다 (다음에 다시 시도)
    );
    return () => { alive = false; };
  }, [trip.country]);

  const cached = starterCache.get(trip.country);
  const loaded = cached !== undefined || found?.country === trip.country;
  const post = cached ?? (found?.country === trip.country ? found.post : null);
  if (!loaded) return null;
  if (!post) return <>{fallback}</>;
  if (off === offKey(trip) || isOff(trip)) return null;

  const places = post.data.days.flatMap((d) => d.places);
  const covers = [...new Set(places.filter((p) => !["식당", "공항", "숙소"].includes(p.category) && isWikimediaImage(p.image)).map((p) => p.image!))].slice(0, 3);
  const nights = post.nights ? `${post.nights}박 ${post.nights + 1}일` : "당일치기";
  const title = post.title.replace(/^.*? · /, ""); // "방콕 3박 4일 · " 앞부분은 아래 설명 줄과 겹친다

  function dismiss() {
    const key = offKey(trip);
    try { localStorage.setItem(key, "1"); } catch { /* 이번 화면에서만 닫힌다 */ }
    setOff(key);
  }

  return (
    <section className="starter" aria-labelledby="starter-title">
      <div className="starter__hd">
        <h2 id="starter-title">아직 일정이 비어 있어요</h2>
        <p>{post.city || countryName} 추천 동선을 그대로 넣고 시작할 수 있어요. 넣은 뒤에 장소를 빼거나 순서를 바꿔 내 일정으로 고쳐 쓰세요.</p>
      </div>

      <article className="starter__card">
        {covers.length > 0 && (
          <div className={`starter__covers starter__covers--${covers.length}`} aria-hidden="true">
            {/* eslint-disable-next-line @next/next/no-img-element -- 위키미디어 외부 이미지 */}
            {covers.map((src) => <img key={src} src={src} alt="" loading="lazy" />)}
          </div>
        )}
        <div className="starter__body">
          <span className="starter__meta">TripHelper 추천 · {post.city ? `${post.city} · ` : ""}{nights} · 장소 {post.placeCount}곳</span>
          <h3>{title}</h3>
          <ol className="starter__days">
            {post.data.days.map((d, i) => (
              <li key={i}>
                <span className="starter__dot" style={{ background: dayColor(i) }} aria-hidden="true" />
                <b>{i + 1}일차</b>
                <span className="starter__route">{d.places.map((p) => p.name).join(" → ")}</span>
              </li>
            ))}
          </ol>
          <p className="starter__note">
            시간과 메모(복장 규정, 여는 요일 등)도 함께 들어가요.
            {/* 빈 일정은 새로 만들 때 나라의 첫 도시로 정해져 있어서, 동선의 도시로 바꾼다 */}
            {post.city && trip.city !== post.city && ` 여행 도시는 ${post.city}(으)로 바뀌어요.`}
            {trip.days.length < post.data.days.length && ` 지금 일정은 ${trip.days.length}일이라 ${post.data.days.length}일로 늘어나요.`}
            {trip.days.length > post.data.days.length && ` 남는 ${trip.days.length - post.data.days.length}일은 비워 둘게요.`}
          </p>
          <div className="starter__acts">
            <button className="btn btn--pri" type="button" onClick={() => onApply(post)}>이 동선으로 시작</button>
            <Link className="btn" href={`/board/post/?c=${encodeURIComponent(post.shareCode)}`}>자세히 보기</Link>
          </div>
        </div>
      </article>

      <p className="starter__skip">
        직접 짜고 싶다면 <button type="button" onClick={dismiss}>비어 있는 채로 시작</button>하세요.
      </p>
    </section>
  );
}
