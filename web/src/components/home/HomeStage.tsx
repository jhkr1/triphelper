"use client";

import { useCallback, useEffect, useRef, useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import { useApp } from "@/components/providers/AppProviders";
import { Globe } from "@/components/home/Globe";
import { findDestination, type DestinationSummary } from "@/lib/destinations";
import { flagUrl } from "@/lib/geo";

const ROTATE_THEN_OPEN_MS = 1000;

/** 첫 화면: 검색 · 인기 여행지 · 지구본. 나라를 고르면 지구본이 돌아간 뒤 나라 페이지로 이동한다. */
export function HomeStage({ list }: { list: DestinationSummary[] }) {
  const { lang, t } = useApp();
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [message, setMessage] = useState("");
  const [activeSlug, setActiveSlug] = useState<string | null>(null);
  const openTimer = useRef<number | undefined>(undefined);

  const labelOf = useCallback((d: DestinationSummary) => (lang === "en" ? d.nameEn : d.name), [lang]);

  const select = useCallback((d: DestinationSummary) => {
    setMessage("");
    setActiveSlug(d.slug);
    window.clearTimeout(openTimer.current);
    const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
    openTimer.current = window.setTimeout(() => router.push(`/destinations/${d.slug}/`), reduce ? 0 : ROTATE_THEN_OPEN_MS);
  }, [router]);

  useEffect(() => () => window.clearTimeout(openTimer.current), []);

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
        <div className="chips" aria-label={t("chips.label")}>
          {list.slice(0, 10).map((d) => (
            <button key={d.slug} type="button" className={d.slug === activeSlug ? "chip on" : "chip"} onClick={() => select(d)}>
              {/* eslint-disable-next-line @next/next/no-img-element -- 작은 외부 국기 이미지, 최적화 불필요 */}
              <img className="fl" src={flagUrl(d.countryCode)} alt="" />
              {labelOf(d)}
            </button>
          ))}
        </div>
      </div>
      <figure className="globe-wrap">
        <Globe list={list} activeSlug={activeSlug} labelOf={labelOf} onSelect={select} ariaLabel={t("globe.label")} zoomInLabel={t("globe.zoomIn")} zoomOutLabel={t("globe.zoomOut")} />
        <figcaption>{t("globe.hint")}</figcaption>
      </figure>
    </section>
  );
}
