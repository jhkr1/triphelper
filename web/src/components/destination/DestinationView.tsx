"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import Link from "next/link";
import { useApp } from "@/components/providers/AppProviders";
import { ExchangeSection } from "@/components/destination/ExchangeSection";
import { WeatherSection } from "@/components/destination/WeatherSection";
import { PhraseCards } from "@/components/destination/PhraseCards";
import { AttractionsSection } from "@/components/destination/AttractionsSection";
import { Icon } from "@/components/ui/Icon";
import { flagUrl } from "@/lib/geo";
import { toPlannerCountry } from "@/lib/trip-model";
import type { Attraction, Destination, EssentialItem, InfoItem, Phrase } from "@/types/destination";
import type { Lang, MessageKey } from "@/i18n/messages";

interface Props {
  destination: Destination;
  phrases: Phrase[];
  attractions: Attraction[];
  no: number;
  total: number;
}

interface Chapter {
  key: string;
  label: string;
  body: ReactNode;
}

const pad = (n: number) => String(n).padStart(2, "0");

/** 한국어 기본값 + 영어 값(…En)이 있으면 영어 화면에서 사용 */
function pick<K extends "manners" | "souvenirs" | "market" | "essentials" | "visa">(d: Destination, key: K, lang: Lang) {
  const en = d[`${key}En` as const] as Destination[K] | undefined;
  return (lang === "en" && en?.length ? en : d[key]) as Destination[K];
}

/** 상품 링크가 붙은 필수템은 추천 상품(현재 숨김)으로 분리 */
const isProduct = (item: EssentialItem) => Boolean(item.link || item.iframe);

function Items({ items }: { items: { title: string; description?: string }[] }) {
  return (
    <ol className="items">
      {items.map((x) => (
        <li key={x.title}>
          <b>{x.title}</b>
          {x.description && <p>{x.description}</p>}
        </li>
      ))}
    </ol>
  );
}

function languageName(code: string, lang: Lang) {
  try {
    return new Intl.DisplayNames([lang], { type: "language" }).of(code) ?? code;
  } catch {
    return code;
  }
}

/** 나라 정보 페이지 본문 (에디토리얼 레이아웃) */
export function DestinationView({ destination: d, phrases, attractions, no, total }: Props) {
  const { lang, t } = useApp();
  const rootRef = useRef<HTMLElement>(null);
  const [activeKey, setActiveKey] = useState<string>("");
  const en = lang === "en";

  const manners = pick(d, "manners", lang);
  const visa = pick(d, "visa", lang);
  const essentials = pick(d, "essentials", lang).filter((x) => !isProduct(x));
  const p = d.profile;
  const facts: { label: MessageKey; value: string }[] = [
    { label: "quickInfo.capital", value: en ? p.capital : p.capitalKo },
    { label: "quickInfo.population", value: p.population.toLocaleString(en ? "en-US" : "ko-KR") },
    { label: "quickInfo.region", value: en ? p.region : p.regionKo },
    { label: "quickInfo.languages", value: (en ? p.languages : p.languagesKo).join(", ") },
    { label: "quickInfo.drivingSide", value: t(p.drivingSide === "left" ? "quickInfo.leftDriving" : "quickInfo.rightDriving") },
  ];

  const chapters: Chapter[] = [];
  if (attractions.length) {
    chapters.push({
      key: "attractions",
      label: t("sections.attractions"),
      body: <AttractionsSection attractions={attractions} country={toPlannerCountry(d)} />,
    });
  }
  if (d.currency.code !== "KRW") {
    chapters.push({ key: "exchange", label: t("sections.exchange"), body: <ExchangeSection currencyCode={d.currency.code} /> });
  }
  if (d.cities.length) {
    chapters.push({ key: "weather", label: t("sections.weather"), body: <WeatherSection cities={d.cities} /> });
  }
  chapters.push({
    key: "facts",
    label: t("sections.facts"),
    body: (
      <ul className="facts-list">
        {facts.map((f) => (
          <li key={f.label}>
            <strong className="list-item-title">{t(f.label)}</strong>
            <span className="list-item-description">{f.value}</span>
          </li>
        ))}
      </ul>
    ),
  });
  if (manners.length) {
    const [first, ...rest] = manners;
    chapters.push({
      key: "manners",
      label: t("sections.manners"),
      body: (
        <>
          <blockquote className="pull">
            <small>{t("ui.insight").toUpperCase()}</small>
            <b>{first.title}</b>
            <p>{first.description}</p>
          </blockquote>
          {rest.length > 0 && <Items items={rest} />}
        </>
      ),
    });
  }
  const lists: [string, MessageKey, (InfoItem | EssentialItem)[]][] = [
    ["souvenirs", "sections.souvenirs", pick(d, "souvenirs", lang)],
    ["market", "sections.market", pick(d, "market", lang)],
    ["essentials", "sections.essentials", essentials],
    ["visa", "sections.visa", visa],
  ];
  for (const [key, label, items] of lists) {
    if (items.length) chapters.push({ key, label: t(label), body: <Items items={items} /> });
  }
  if (phrases.length) {
    chapters.push({ key: "phrases", label: t("sections.phrases"), body: <PhraseCards phrases={phrases} languageCode={d.languageCode} /> });
  }
  // 추천 여행용품(쿠팡 파트너스): 상품이 표시되지 않는 문제로 임시로 숨김

  // 등장 연출 + 목차 현재 위치 표시
  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
    const reveal = new IntersectionObserver((entries) => entries.forEach((e) => {
      if (e.isIntersecting) { e.target.classList.add("in"); reveal.unobserve(e.target); }
    }), { threshold: 0.12 });
    root.querySelectorAll(".reveal").forEach((el) => {
      if (reduce || el.getBoundingClientRect().top < innerHeight) el.classList.add("in");
      else reveal.observe(el);
    });
    const spy = new IntersectionObserver((entries) => entries.forEach((e) => {
      if (e.isIntersecting) setActiveKey(e.target.id.replace(/^ch-/, ""));
    }), { rootMargin: "-30% 0px -60% 0px" });
    root.querySelectorAll(".chap").forEach((el) => spy.observe(el));
    return () => { reveal.disconnect(); spy.disconnect(); };
  }, [lang]);

  return (
    <section className="paper paper--page results" ref={rootRef}>
      <article className="ed destination">
        <Link className="crumb" href="/"><Icon name="globe" />{t("ui.back")}</Link>
        <p className="kicker reveal">NO. {pad(no)} / {total} · {t("ui.destination")}</p>
        <h1 className="ed__title reveal">
          {/* eslint-disable-next-line @next/next/no-img-element -- 작은 외부 국기 이미지 */}
          <img className="fl" src={flagUrl(d.countryCode, 80)} alt="" />
          {en ? d.nameEn : d.name}
        </h1>
        <p className="ed__lede reveal">{en ? d.summaryEn : d.summary}</p>
        <dl className="meta reveal">
          <div>
            <dt>{t("quickInfo.currency")}</dt>
            <dd>{en ? d.currency.nameEn : d.currency.name} · {d.currency.code} {d.currency.symbol}</dd>
          </div>
          <div>
            <dt>{t("quickInfo.languages")}</dt>
            <dd>{languageName(d.languageCode, lang)}</dd>
          </div>
          {visa[0] && (
            <div>
              <dt>{t("ui.visa")}</dt>
              <dd>{visa[0].title}</dd>
            </div>
          )}
        </dl>
        <Link className="dest-cta reveal" href={`/trip/?country=${d.slug}`}>
          <Icon name="calendar" />{t("trip.planHere", { country: en ? d.nameEn : d.name })}
        </Link>
        <div className="ed__body">
          <nav className="toc" aria-label="chapters">
            <ol>
              {chapters.map((c, i) => (
                <li key={c.key}>
                  <a href={`#ch-${c.key}`} className={activeKey === c.key ? "on" : undefined}>
                    <b>{pad(i + 1)}</b>{c.label}
                  </a>
                </li>
              ))}
            </ol>
          </nav>
          <div className="chapters">
            {chapters.map((c, i) => (
              <section className="chap reveal" id={`ch-${c.key}`} key={c.key}>
                <div className="chap__head">
                  <span className="chap__no">{pad(i + 1)}</span>
                  <h2>{c.label}</h2>
                </div>
                {c.body}
              </section>
            ))}
            <Link className="back" href="/"><Icon name="arrowUp" />{t("ui.back")}</Link>
          </div>
        </div>
      </article>
    </section>
  );
}
