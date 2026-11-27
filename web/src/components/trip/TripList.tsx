"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { Icon } from "@/components/ui/Icon";
import { DAY_COLORS } from "@/components/trip/TripMap";
import { authSettled } from "@/lib/supabase";
import { removeMember, ROLE_LABEL } from "@/lib/trip-collab";
import { deleteTrip, duplicateTrip, flushSave, listMyTrips, type TripMeta } from "@/lib/trip-sync";
import { LOADING, tripStore } from "@/lib/trip-store";
import { ddayLabel, groupTrips, rangeLabel } from "@/lib/trip-list";
import { flagUrl } from "@/lib/geo";
import { todayIso, type PlannerCountry } from "@/lib/trip-model";
import { timeAgo } from "@/lib/posts";

const tripHref = (id: string) => `/trip/?id=${encodeURIComponent(id)}`;

/**
 * 내 여행 목록 (/trips/). 헤더의 [내 여행]이 여기로 온다.
 * - 저장된 여행이 하나 이하면 목록 없이 플래너로 바로 간다 (?all이면 그래도 목록을 보여 준다: 플래너의 [내 여행 목록])
 * - 마지막으로 고친 여행을 "이어서 짜기"로 크게, 나머지는 다가오는 · 날짜 안 정한 · 지난 여행
 */
export function TripList({ countries }: { countries: PlannerCountry[] }) {
  const router = useRouter();
  const showAll = useSearchParams().has("all");
  const [me, setMe] = useState<string | null>(null);
  const [list, setList] = useState<TripMeta[] | null>(null);
  const [failed, setFailed] = useState(false);
  const [busy, setBusy] = useState<string | null>(null);
  const [notice, setNotice] = useState("");

  const load = useCallback(async (account: string, redirect: boolean) => {
    setFailed(false);
    try {
      await flushSave(); // 방금 고친 일정도 목록에 최신으로
      const trips = await listMyTrips(account);
      if (redirect && trips.length <= 1) {
        router.replace(trips[0] ? tripHref(trips[0].id) : "/trip/");
        return;
      }
      setList(trips);
    } catch { setFailed(true); }
  }, [router]);

  useEffect(() => {
    let alive = true;
    authSettled().then((auth) => {
      if (!alive) return;
      if (auth.status !== "in") { router.replace("/trip/"); return; }
      setMe(auth.me.id);
      void load(auth.me.id, !showAll);
    });
    return () => { alive = false; };
  }, [load, router, showAll]);

  const country = (slug: string) => countries.find((c) => c.slug === slug);
  const nameOf = (t: TripMeta) => t.title || `${t.city || country(t.country)?.name || t.country} 여행`;

  async function duplicate(t: TripMeta) {
    if (!me) return;
    setBusy(t.id);
    try {
      const copy = await duplicateTrip(t.id, me, countries);
      router.push(tripHref(copy.cloud!.id));
    } catch (e) {
      const message = (e as { message?: string } | null)?.message ?? "";
      setNotice(/100개/.test(message) ? "일정은 100개까지 저장할 수 있어요. 안 쓰는 일정을 지운 뒤 다시 해 주세요." : "복제하지 못했어요. 잠시 뒤 다시 시도해 주세요.");
      setBusy(null);
    }
  }

  async function remove(t: TripMeta) {
    if (!me) return;
    const name = nameOf(t);
    const owner = t.role === "owner";
    // 내 일정은 지우고, 함께 짜는 남의 일정에서는 나간다
    if (!confirm(owner ? `"${name}"을(를) 삭제할까요? 되돌릴 수 없습니다. 함께 짜는 사람들에게서도 사라져요.`
      : `"${name}"에서 나갈까요? 다시 들어오려면 새 초대 링크가 필요해요.`)) return;
    setBusy(t.id);
    try {
      if (owner) await deleteTrip(t.id); else await removeMember(t.id, me);
      // 이 기기에 열려 있던 일정이면 비워서, 다음에 플래너를 열 때 없는 일정을 저장하려 하지 않게
      const open = tripStore.getSnapshot();
      if (open && open !== LOADING && open.cloud?.id === t.id) tripStore.clear();
      setList((l) => l?.filter((x) => x.id !== t.id) ?? null);
      setNotice(owner ? `"${name}"을(를) 삭제했어요` : `"${name}"에서 나왔어요`);
    } catch {
      setNotice(owner ? "삭제하지 못했어요" : "나가지 못했어요");
    } finally { setBusy(null); }
  }

  if (failed) {
    return (
      <div className="wrap">
        <p className="board__msg">여행 목록을 불러오지 못했어요. <button type="button" className="tl-retry" onClick={() => me && load(me, false)}>다시 시도</button></p>
      </div>
    );
  }
  if (!list) return <div className="wrap"><p className="board__msg">여행 목록을 불러오는 중…</p></div>;

  const today = todayIso();
  const g = groupTrips(list, today);
  const shared = list.filter((t) => t.people.length).length;
  const card = (t: TripMeta) => (
    <TripCard key={t.id} trip={t} name={nameOf(t)} countryCode={country(t.country)?.countryCode} today={today}
      busy={busy === t.id} onDuplicate={() => duplicate(t)} onRemove={() => remove(t)} />
  );

  return (
    <div className="wrap">
      <div className="tl-hd">
        <div>
          <h1>내 여행</h1>
          <p>
            {list.length ? `여행 ${list.length}개` : "아직 저장된 여행이 없어요"}
            {shared ? ` 중 ${shared}개는 다른 사람과 함께 짜고 있어요.` : list.length ? "" : ". 새 여행을 만들어 보세요."}
          </p>
        </div>
        <Link className="btn btn--pri" href="/trip/?new=1">+ 새 여행 만들기</Link>
      </div>
      {notice && <p className="tl-notice" role="status">{notice}</p>}

      {g.resume && <Resume trip={g.resume} name={nameOf(g.resume)} countryCode={country(g.resume.country)?.countryCode} today={today} />}

      {g.upcoming.length > 0 && (
        <section className="tl-sec" aria-labelledby="tl-next">
          <h2 id="tl-next">다가오는 여행</h2>
          <ul className="trips">{g.upcoming.map(card)}</ul>
        </section>
      )}
      {g.undated.length > 0 && (
        <section className="tl-sec" aria-labelledby="tl-undated">
          <h2 id="tl-undated">날짜를 아직 안 정한 여행</h2>
          <ul className="trips">{g.undated.map(card)}</ul>
        </section>
      )}
      {g.past.length > 0 && (
        <section className="tl-sec tl-sec--past" aria-labelledby="tl-past">
          <h2 id="tl-past">지난 여행</h2>
          <ul className="trips">{g.past.map(card)}</ul>
        </section>
      )}
    </div>
  );
}

function Flag({ code, size }: { code?: string; size: number }) {
  if (!code) return null;
  // eslint-disable-next-line @next/next/no-img-element -- 작은 외부 국기 이미지
  return <img className="fl" src={flagUrl(code)} alt="" style={{ height: size }} />;
}

const placeCount = (t: TripMeta) => t.dayCounts.reduce((s, n) => s + n, 0);

/** 마지막으로 고친 여행: 크게, 날짜별 장소 수까지 */
function Resume({ trip: t, name, countryCode, today }: { trip: TripMeta; name: string; countryCode?: string; today: string }) {
  const dday = ddayLabel(t, today);
  const soon = dday !== null && (dday === "D-DAY" || dday === "여행 중" || Number(dday.slice(2)) <= 7);
  return (
    <section className="resume" aria-labelledby="resume-title">
      <div>
        <div className="resume__top">
          <Flag code={countryCode} size={24} />
          <h2 id="resume-title">{name}</h2>
          {dday && <span className={soon ? "dday dday--soon" : "dday"}>{dday}</span>}
          {t.people.length > 0 && <span className="tl-with">{t.people.slice(0, 2).join(", ")}{t.people.length > 2 ? ` 외 ${t.people.length - 2}명` : ""}와 함께</span>}
        </div>
        <p className="resume__meta">
          {rangeLabel(t)} · 장소 {placeCount(t)}곳{t.stays ? ` · 숙소 ${t.stays}곳` : ""}
        </p>
      </div>
      <div className="resume__side">
        <Link className="btn btn--pri" href={tripHref(t.id)}>이어서 짜기</Link>
        <small>{timeAgo(t.updatedAt)} 고쳤어요</small>
      </div>
      {t.dayCounts.length > 1 && (
        <ul className="resume__route" aria-label="날짜별 장소 수">
          {t.dayCounts.map((n, i) => (
            <li key={i}><i style={{ background: DAY_COLORS[i % DAY_COLORS.length] }} aria-hidden="true" />{i + 1}일차 {n}곳</li>
          ))}
        </ul>
      )}
    </section>
  );
}

function TripCard({ trip: t, name, countryCode, today, busy, onDuplicate, onRemove }: {
  trip: TripMeta; name: string; countryCode?: string; today: string; busy: boolean; onDuplicate: () => void; onRemove: () => void;
}) {
  const [menu, setMenu] = useState(false);
  const boxRef = useRef<HTMLLIElement>(null);
  useEffect(() => {
    if (!menu) return;
    const onDown = (e: PointerEvent) => { if (!boxRef.current?.contains(e.target as Node)) setMenu(false); };
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setMenu(false); };
    document.addEventListener("pointerdown", onDown);
    document.addEventListener("keydown", onKey);
    return () => { document.removeEventListener("pointerdown", onDown); document.removeEventListener("keydown", onKey); };
  }, [menu]);
  const dday = ddayLabel(t, today);
  const owner = t.role === "owner";
  return (
    <li className="trip" ref={boxRef} aria-busy={busy || undefined}>
      <Link className="trip__open" href={tripHref(t.id)}>
        <span className="trip__name"><Flag code={countryCode} size={18} />{name}</span>
        <span className="trip__meta">{rangeLabel(t)}</span>
        <span className="trip__foot">
          {dday && <span className="dday">{dday}</span>}
          {/* 남의 일정이면 내 권한, 내 일정을 함께 짜는 중이면 몇 명과 함께인지 */}
          {!owner ? <span className="tl-with">{ROLE_LABEL[t.role]}</span>
            : t.people.length > 0 && <span className="tl-with">{t.people.length}명과 함께</span>}
          <span>장소 {placeCount(t)}곳 · {t.posted ? "게시판에 올림" : `${timeAgo(t.updatedAt)} 고침`}</span>
        </span>
      </Link>
      <button type="button" className="icon-btn" aria-label={`${name} 더 보기`} aria-expanded={menu} aria-haspopup="menu" disabled={busy} onClick={() => setMenu((m) => !m)}>
        <Icon name="more" />
      </button>
      {menu && (
        <div className="trip__menu" role="menu">
          <button type="button" role="menuitem" onClick={() => { setMenu(false); onDuplicate(); }}>복제</button>
          <button type="button" role="menuitem" className="is-danger" onClick={() => { setMenu(false); onRemove(); }}>{owner ? "삭제" : "나가기"}</button>
        </div>
      )}
    </li>
  );
}
