"use client";

import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { Icon } from "@/components/ui/Icon";
import { UserAvatar } from "@/components/ui/UserAvatar";
import { PostThumb } from "@/components/board/RouteThumb";
import { flagUrl } from "@/lib/geo";
import { authEnabled } from "@/lib/supabase";
import { listPosts, NIGHT_FILTERS, PAGE_SIZE, timeAgo, type NightFilter, type PostSummary } from "@/lib/posts";

export interface BoardCountry { slug: string; name: string; countryCode: string }

const nightsText = (n: number) => (n ? `${n}박 ${n + 1}일` : "당일치기");
type State = { status: "loading" } | { status: "error" } | { status: "done"; items: PostSummary[]; more: boolean };

/** 나라별 여행 동선 게시판 (전체 공개 글, 최신순). 필터는 주소(?country=&nights=)에 남겨 공유·뒤로 가기가 되게 */
export function BoardList({ countries }: { countries: BoardCountry[] }) {
  const [country, setCountry] = useState<string>("");
  const [nights, setNights] = useState<NightFilter>("all");
  const [ready, setReady] = useState(false);
  const [state, setState] = useState<State>({ status: "loading" });
  const [loadingMore, setLoadingMore] = useState(false);
  const countryOf = (slug: string) => countries.find((c) => c.slug === slug);

  // 주소에서 처음 필터 읽기 (정적 페이지라 브라우저에서)
  useEffect(() => {
    const q = new URLSearchParams(window.location.search);
    const c = q.get("country") ?? "";
    const n = q.get("nights") as NightFilter | null;
    // 외부(주소)에서 값을 한 번 가져오는 것이라 effect 안에서 state를 정한다
    // eslint-disable-next-line react-hooks/set-state-in-effect
    if (countries.some((x) => x.slug === c)) setCountry(c);
    if (n && NIGHT_FILTERS.some((x) => x.id === n)) setNights(n);
    setReady(true);
  }, [countries]);

  const load = useCallback(async (before?: string) => {
    const items = await listPosts({ country: country || undefined, nights, before });
    return { items, more: items.length === PAGE_SIZE };
  }, [country, nights]);

  useEffect(() => {
    if (!ready || !authEnabled) return;
    let alive = true;
    const q = new URLSearchParams();
    if (country) q.set("country", country);
    if (nights !== "all") q.set("nights", nights);
    history.replaceState(null, "", `${window.location.pathname}${q.size ? `?${q}` : ""}`);
    load().then((r) => { if (alive) setState({ status: "done", ...r }); }, () => { if (alive) setState({ status: "error" }); });
    return () => { alive = false; };
  }, [ready, country, nights, load]);

  async function more() {
    if (state.status !== "done") return;
    setLoadingMore(true);
    try {
      const r = await load(state.items.at(-1)?.publishedAt);
      setState({ status: "done", items: [...state.items, ...r.items], more: r.more });
    } finally { setLoadingMore(false); }
  }

  const pick = (c: string) => { setState({ status: "loading" }); setCountry(c); };
  const pickNights = (n: NightFilter) => { setState({ status: "loading" }); setNights(n); };
  const current = countryOf(country);

  return (
    <div className="board">
      <div className="board__hd">
        <div>
          <h1>{current ? `${current.name} 여행 동선` : "여행 동선 게시판"}</h1>
          <p>다른 여행자의 동선을 보고, 마음에 들면 내 일정으로 가져와 고쳐 보세요.</p>
        </div>
        <Link className="btn btn--pri" href="/trip/">내 동선 올리기</Link>
      </div>

      <div className="board__filters">
        <label className="board__country">
          <span className="sr-only">나라</span>
          {current && (
            // eslint-disable-next-line @next/next/no-img-element -- 작은 외부 국기 이미지
            <img src={flagUrl(current.countryCode)} alt="" />
          )}
          <select value={country} onChange={(e) => pick(e.target.value)} aria-label="나라">
            <option value="">모든 나라</option>
            {countries.map((c) => <option key={c.slug} value={c.slug}>{c.name}</option>)}
          </select>
        </label>
        <div className="board__chips" role="group" aria-label="여행 기간">
          {NIGHT_FILTERS.map((f) => (
            <button key={f.id} type="button" aria-pressed={nights === f.id} onClick={() => pickNights(f.id)}>{f.label}</button>
          ))}
        </div>
      </div>

      {!authEnabled ? (
        <p className="board__msg">게시판을 준비하고 있어요.</p>
      ) : state.status === "loading" ? (
        <div className="board__grid" aria-busy="true">
          {Array.from({ length: 6 }, (_, i) => <div key={i} className="pcard pcard--skel" />)}
        </div>
      ) : state.status === "error" ? (
        <p className="board__msg">목록을 불러오지 못했어요. 잠시 뒤 다시 시도해 주세요.</p>
      ) : !state.items.length ? (
        <div className="board__empty">
          <Icon name="pin" />
          <p><b>{current ? `${current.name} 동선이 아직 없어요.` : "아직 올라온 동선이 없어요."}</b><br />첫 번째로 내 여행 동선을 올려 보세요.</p>
          <Link className="btn btn--pri" href="/trip/">내 여행에서 올리기</Link>
        </div>
      ) : (
        <>
          <ul className="board__grid">
            {state.items.map((p) => {
              const c = countryOf(p.country);
              return (
                <li key={p.shareCode}>
                  <Link className="pcard" href={`/board/post/?c=${encodeURIComponent(p.shareCode)}`}>
                    <PostThumb covers={p.covers} preview={p.preview} label={p.title} />
                    <div className="pcard__body">
                      <b className="pcard__title">{p.title}</b>
                      <span className="pcard__meta">
                        {c && (
                          // eslint-disable-next-line @next/next/no-img-element -- 작은 외부 국기 이미지
                          <img src={flagUrl(c.countryCode)} alt="" />
                        )}
                        {[p.city || c?.name, nightsText(p.nights), p.month ? `${p.month}월` : null, `장소 ${p.placeCount}곳`].filter(Boolean).join(" · ")}
                      </span>
                      {p.tags.length > 0 && <span className="pcard__tags">{p.tags.map((t) => <i key={t}>#{t}</i>)}</span>}
                      <span className="pcard__by">
                        <UserAvatar id={p.userId} src={p.avatar} size={20} />
                        {p.nickname} · {timeAgo(p.publishedAt)}
                        {p.commentCount > 0 && <em className="pcard__cmt" aria-label={`댓글 ${p.commentCount}개`}><Icon name="message" />{p.commentCount}</em>}
                      </span>
                    </div>
                  </Link>
                </li>
              );
            })}
          </ul>
          {state.more && (
            <div className="board__more">
              <button className="btn" type="button" onClick={more} disabled={loadingMore}>{loadingMore ? "불러오는 중…" : "더 보기"}</button>
            </div>
          )}
        </>
      )}
    </div>
  );
}
