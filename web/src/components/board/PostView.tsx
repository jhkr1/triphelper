"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { Fragment, useEffect, useMemo, useRef, useState, useSyncExternalStore } from "react";
import { Icon } from "@/components/ui/Icon";
import { UserAvatar } from "@/components/ui/UserAvatar";
import { Comments } from "@/components/board/Comments";
import { TripMap, dayColor } from "@/components/trip/TripMap";
import { Leg, PlacePhoto } from "@/components/trip/Itinerary";
import { flagUrl } from "@/lib/geo";
import { authEnabled, authStore } from "@/lib/supabase";
import { LOADING, tripStore } from "@/lib/trip-store";
import { flushSave } from "@/lib/trip-sync";
import { dayLabel, type PlannerCountry } from "@/lib/trip-model";
import { deletePost, getPost, postDays, postToTrip, postUrl, setPostVisibility, VISIBILITY, type Post, type Visibility } from "@/lib/posts";
import type { Place } from "@/types/trip";

type State = { status: "loading" } | { status: "missing" } | { status: "error" } | { status: "done"; post: Post };

const nightsText = (n: number) => (n ? `${n}박 ${n + 1}일` : "당일치기");

/** 장소 한 곳 (읽기 전용) */
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

/** 게시글 보기: 지도 + 날짜별 동선. 링크 복사 · 내 일정으로 가져오기 · (글쓴이) 공개 범위 바꾸기 · 삭제 */
export function PostView({ countries }: { countries: PlannerCountry[] }) {
  const router = useRouter();
  const auth = useSyncExternalStore(authStore.subscribe, authStore.getSnapshot, authStore.getServerSnapshot);
  const meId = auth.status === "in" ? auth.me.id : null;
  const [state, setState] = useState<State>({ status: "loading" });
  const [mapDay, setMapDay] = useState<"all" | number>("all");
  const [toastMsg, setToastMsg] = useState("");
  const [busy, setBusy] = useState(false);
  const toastTimer = useRef<number | undefined>(undefined);
  const toast = (m: string) => { setToastMsg(m); window.clearTimeout(toastTimer.current); toastTimer.current = window.setTimeout(() => setToastMsg(""), 2200); };

  // 로그인 상태가 정해진 뒤 불러온다 (내 글이면 고치기·삭제 버튼이 보여야 하므로)
  useEffect(() => {
    if (auth.status === "loading" && authEnabled) return;
    const code = new URLSearchParams(window.location.search).get("c") ?? "";
    let alive = true;
    if (!code || !authEnabled) {
      // 주소에 글 코드가 없으면 바로 '없음' (외부 값인 주소를 읽어 정하는 것)
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setState({ status: "missing" });
      return;
    }
    getPost(code).then(
      (post) => { if (alive) setState(post ? { status: "done", post } : { status: "missing" }); },
      () => { if (alive) setState({ status: "error" }); },
    );
    return () => { alive = false; };
  }, [auth.status, meId]);

  const post = state.status === "done" ? state.post : null;
  const days = useMemo(() => (post ? postDays(post.data) : []), [post]);
  const country = post ? countries.find((c) => c.slug === post.country) : undefined;
  const mine = Boolean(post && meId && post.userId === meId);

  if (state.status === "loading") return <p className="board__msg">불러오는 중…</p>;
  if (state.status === "error") return <p className="board__msg">글을 불러오지 못했어요. 잠시 뒤 다시 시도해 주세요.</p>;
  if (!post) {
    return (
      <div className="board__empty">
        <Icon name="pin" />
        <p><b>글을 찾을 수 없어요.</b><br />글쓴이가 삭제했거나 주소가 잘못되었을 수 있어요.</p>
        <Link className="btn btn--pri" href="/board/">게시판으로</Link>
      </div>
    );
  }

  async function copyLink() {
    try {
      await navigator.clipboard.writeText(postUrl(window.location.origin, post!.shareCode));
      toast("링크를 복사했어요");
    } catch { toast("이 환경에서는 복사할 수 없어요"); }
  }

  async function importTrip() {
    if (!country) return;
    const cur = tripStore.getSnapshot();
    const t = cur && cur !== LOADING ? cur : null;
    const unsaved = t && !t.cloud && t.days.some((d) => d.places.length);
    if (unsaved && !confirm("지금 '내 여행'에 있는 일정이 이 동선으로 바뀝니다. 로그인하지 않은 상태라 지금 일정은 지워져요. 계속할까요?")) return;
    await flushSave(); // 저장된 일정은 '내 여행 목록'에 남는다
    tripStore.set(postToTrip(post!, country));
    router.push("/trip/");
  }

  async function changeVisibility(v: Visibility) {
    setBusy(true);
    try {
      await setPostVisibility(post!.id, v);
      setState({ status: "done", post: { ...post!, visibility: v } });
      toast(`'${VISIBILITY.find((x) => x.id === v)!.label}'로 바꿨어요`);
    } catch (e) { toast(e instanceof Error ? e.message : "바꾸지 못했어요"); } finally { setBusy(false); }
  }

  async function remove() {
    if (!confirm("이 글을 삭제할까요? 되돌릴 수 없어요. (내 여행의 원래 일정은 그대로 남아요)")) return;
    setBusy(true);
    try {
      await deletePost(post!.id);
      router.push(`/board/${post!.country ? `?country=${post!.country}` : ""}`);
    } catch (e) { toast(e instanceof Error ? e.message : "삭제하지 못했어요"); setBusy(false); }
  }

  const when = post.data.start && post.data.end
    ? `${post.data.start.replaceAll("-", ".")} – ${post.data.end.slice(5).replace("-", ".")}`
    : post.month ? `${post.month}월 여행` : null;
  const vis = VISIBILITY.find((v) => v.id === post.visibility)!;

  return (
    <div className="post">
      <Link className="post__back" href={`/board/?country=${post.country}`}>← {country?.name ?? ""} 동선 게시판</Link>

      <header className="post__hd">
        {post.visibility !== "public" && <span className={`post__vis post__vis--${post.visibility}`}>{vis.label} 글</span>}
        <h1>{post.title}</h1>
        <p className="post__meta">
          {country && (
            // eslint-disable-next-line @next/next/no-img-element -- 작은 외부 국기 이미지
            <img src={flagUrl(country.countryCode)} alt="" />
          )}
          {[country?.name, post.city, nightsText(post.nights), when, `장소 ${post.placeCount}곳`].filter(Boolean).join(" · ")}
        </p>
        {post.tags.length > 0 && <p className="post__tags">{post.tags.map((t) => <span key={t}>#{t}</span>)}</p>}
        <p className="post__by">
          <UserAvatar id={post.userId} src={post.avatar} size={28} />
          <b>{post.nickname}</b>
        </p>
        {post.summary && <p className="post__summary">{post.summary}</p>}

        <div className="post__acts">
          <button className="btn btn--pri" type="button" onClick={importTrip} disabled={!country}>내 일정으로 가져오기</button>
          <button className="btn" type="button" onClick={copyLink}><Icon name="link" />링크 복사</button>
          {mine && (
            <>
              <label className="post__visedit">
                <span className="sr-only">공개 범위</span>
                <select value={post.visibility} disabled={busy} onChange={(e) => changeVisibility(e.target.value as Visibility)} aria-label="공개 범위">
                  {VISIBILITY.map((v) => <option key={v.id} value={v.id}>{v.label}</option>)}
                </select>
              </label>
              <button className="btn post__del" type="button" onClick={remove} disabled={busy}>삭제</button>
            </>
          )}
        </div>
        {mine && <p className="post__hint">{vis.desc}. 내용을 고치려면 내 여행에서 일정을 고친 뒤 다시 &lsquo;게시판에 올리기&rsquo;를 누르세요.</p>}
      </header>

      <section className="post__map">
        <TripMap days={days} mapDay={mapDay} onMapDayChange={setMapDay} center={post.data.center} />
      </section>

      <section className="post__days">
        {days.map((d, i) => {
          const prevStay = days[i - 1]?.stay;
          const stay = i < days.length - 1 ? d.stay : undefined;
          return (
            <div className="card post__day" key={i}>
              <h2><span style={{ background: dayColor(i) }} aria-hidden="true" />Day {i + 1}{post.data.start && <small>{dayLabel(post.data.start, i)}</small>}</h2>
              {!d.places.length && !stay && !prevStay ? (
                <p className="board__msg">이날은 비워 두었어요.</p>
              ) : (
                <ol className="tl" style={{ "--dc": dayColor(i) } as React.CSSProperties}>
                  {prevStay && <StayItem stay={prevStay} label="숙소에서 출발" />}
                  {prevStay && d.places[0] && <Leg from={prevStay} to={d.places[0]} countryCode={country?.countryCode ?? ""} />}
                  {d.places.map((p, j) => (
                    <Fragment key={p.id}>
                      {j > 0 && <Leg from={d.places[j - 1]} to={p} countryCode={country?.countryCode ?? ""} />}
                      <Stop p={p} n={j + 1} color={dayColor(i)} />
                    </Fragment>
                  ))}
                  {stay && d.places.length > 0 && <Leg from={d.places[d.places.length - 1]} to={stay} countryCode={country?.countryCode ?? ""} />}
                  {stay && <StayItem stay={stay} label={`Day ${i + 1} 밤 숙소`} />}
                </ol>
              )}
            </div>
          );
        })}
      </section>

      <Comments post={post} />

      <div className={toastMsg ? "toast on" : "toast"} role="status" aria-live="polite">{toastMsg}</div>
    </div>
  );
}
