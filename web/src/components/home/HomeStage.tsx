"use client";

import { useCallback, useEffect, useMemo, useRef, useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import { useApp } from "@/components/providers/AppProviders";
import { Globe } from "@/components/home/Globe";
import { PaperPlane, flyPlane, resetPlane } from "@/components/home/PaperPlane";
import { filterDestinations, findDestination, type DestinationSummary } from "@/lib/destinations";
import { flagUrl } from "@/lib/geo";
import type { MessageKey } from "@/i18n/messages";

const ROTATE_THEN_OPEN_MS = 1000;
const PLANE_FLIGHT_MS = 950;
/** 접혀 있을 때 보여 줄 인기 여행지 수 (목록 앞에서부터) */
const POPULAR_COUNT = 10;
const CONTINENTS = ["Asia", "Europe", "Americas", "Oceania"];

/** 첫 화면: 검색 · 인기 여행지 · 지구본. 나라를 고르면 지구본이 돌아간 뒤 나라 페이지로 이동한다. */
export function HomeStage({ list }: { list: DestinationSummary[] }) {
  const { lang, t } = useApp();
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [message, setMessage] = useState("");
  const [activeSlug, setActiveSlug] = useState<string | null>(null);
  const openTimer = useRef<number | undefined>(undefined);
  const planeRef = useRef<HTMLDivElement>(null);
  const globeRef = useRef<HTMLDivElement>(null);

  const labelOf = useCallback((d: DestinationSummary) => (lang === "en" ? d.nameEn : d.name), [lang]);

  const [showAll, setShowAll] = useState(false);
  // 더 보기/접기 버튼은 펼침 상태마다 다른 자리에 새로 그려지므로, 누른 뒤 새 버튼으로 초점을 옮긴다
  const toggleRef = useRef<HTMLButtonElement>(null);
  const refocusToggle = useRef(false);
  const toggleAll = (next: boolean) => { refocusToggle.current = true; setShowAll(next); };
  useEffect(() => {
    if (!refocusToggle.current) return;
    refocusToggle.current = false;
    toggleRef.current?.focus();
  }, [showAll]);
  const matches = query.trim() ? filterDestinations(list, query) : null;
  // 대륙별 묶음. 순서는 CONTINENTS, 대륙 안에서는 목록(인기) 순서
  const groups = useMemo(
    () => CONTINENTS.map((c) => [c, list.filter((d) => d.continent === c)] as const).filter(([, items]) => items.length > 0),
    [list],
  );

  const select = useCallback((d: DestinationSummary) => {
    setMessage("");
    setActiveSlug(d.slug);
    window.clearTimeout(openTimer.current);
    const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!reduce && planeRef.current && globeRef.current) flyPlane(planeRef.current, globeRef.current, PLANE_FLIGHT_MS);
    openTimer.current = window.setTimeout(() => router.push(`/destinations/${d.slug}/`), reduce ? 0 : ROTATE_THEN_OPEN_MS);
  }, [router]);

  useEffect(() => () => window.clearTimeout(openTimer.current), []);

  // 지구본을 확대하면 지구본이 비행기 자리까지 커지므로 비행기를 숨긴다 (매 프레임 호출이라 렌더링 없이 클래스만 바꾼다)
  // 단, 날아가는 중(확대를 되돌리며 나라로 가는 중)에는 숨기지 않는다
  const onGlobeZoom = useCallback((k: number) => {
    const plane = planeRef.current;
    if (!plane || plane.classList.contains("is-flying")) return;
    plane.classList.toggle("is-hidden", k > 1.02);
  }, []);

  // 뒤로 가기(bfcache)로 돌아오면 날아간 비행기를 제자리로
  useEffect(() => {
    const onShow = (e: PageTransitionEvent) => {
      if (!e.persisted) return;
      setActiveSlug(null);
      if (planeRef.current) resetPlane(planeRef.current);
    };
    window.addEventListener("pageshow", onShow);
    return () => window.removeEventListener("pageshow", onShow);
  }, []);

  // 기존 주소 호환: /?q=일본 → 일본 페이지
  useEffect(() => {
    const q = new URLSearchParams(window.location.search).get("q");
    if (!q) return;
    const d = findDestination(list, q);
    if (d) router.replace(`/destinations/${d.slug}/`);
  }, [list, router]);

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    const q = query.trim();
    if (!q) { setMessage(t("results.emptyInput")); return; }
    const d = findDestination(list, q);
    if (!d) {
      setMessage(`${t("results.noResult", { query: q })} ${t("results.available", { destinations: list.map(labelOf).join(", ") })}`);
      return;
    }
    select(d);
  }

  const chip = (d: DestinationSummary) => (
    <button key={d.slug} type="button" className={d.slug === activeSlug ? "chip on" : "chip"} onClick={() => select(d)}>
      {/* eslint-disable-next-line @next/next/no-img-element -- 작은 외부 국기 이미지, 최적화 불필요 */}
      <img className="fl" src={flagUrl(d.countryCode)} alt="" />
      {labelOf(d)}
    </button>
  );

  return (
    <section className="stage" id="stage">
      <div className="stage__copy">
        <p className="badge"><span aria-hidden="true">✦</span> {t("hero.badge")}</p>
        <h1>{t("hero.title")}</h1>
        <p className="stage__sub">{t("hero.sub")}</p>
        <form className="search" role="search" onSubmit={onSubmit}>
          <label className="sr-only" htmlFor="search-input">{t("search.label")}</label>
          <input
            id="search-input"
            type="search"
            autoComplete="off"
            placeholder={t("search.placeholder")}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button type="submit">{t("search.button")}</button>
        </form>
        <p className="search__msg" role="status" aria-live="polite">{message}</p>
        {matches ? (
          // 입력하는 동안: 검색어와 맞는 나라만
          <div className="chips" aria-label={t("chips.matches")}>{matches.map(chip)}</div>
        ) : showAll ? (
          <div className="chip-groups" id="all-destinations" aria-label={t("chips.all")}>
            {groups.map(([continent, items]) => (
              <div className="chip-group" key={continent}>
                <p className="chip-group__name">{t(`continent.${continent}` as MessageKey)}</p>
                <div className="chips">{items.map(chip)}</div>
              </div>
            ))}
            <div>
              <button type="button" className="chip chip--toggle" aria-expanded="true" aria-controls="all-destinations" ref={toggleRef} onClick={() => toggleAll(false)}>
                {t("chips.less")}
              </button>
            </div>
          </div>
        ) : (
          <div className="chips" aria-label={t("chips.label")}>
            {list.slice(0, POPULAR_COUNT).map(chip)}
            {list.length > POPULAR_COUNT && (
              <button type="button" className="chip chip--toggle" aria-expanded="false" ref={toggleRef} onClick={() => toggleAll(true)}>
                {t("chips.more", { count: list.length - POPULAR_COUNT })}
              </button>
            )}
          </div>
        )}
      </div>
      <figure className="globe-wrap">
        <div className="globe-stage" ref={globeRef}>
          <PaperPlane ref={planeRef} />
          <Globe list={list} activeSlug={activeSlug} labelOf={labelOf} onSelect={select} ariaLabel={t("globe.label")} zoomInLabel={t("globe.zoomIn")} zoomOutLabel={t("globe.zoomOut")} onZoom={onGlobeZoom} />
        </div>
        <figcaption>{t("globe.hint")}</figcaption>
      </figure>
    </section>
  );
}
