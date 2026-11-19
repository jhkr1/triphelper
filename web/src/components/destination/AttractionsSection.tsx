"use client";

import { useState, useSyncExternalStore } from "react";
import Link from "next/link";
import { useApp } from "@/components/providers/AppProviders";
import { Icon } from "@/components/ui/Icon";
import { LOADING, tripStore } from "@/lib/trip-store";
import { addToBasket, addDays, createTrip, defaultTrip, type PlannerCountry } from "@/lib/trip-model";
import type { Attraction } from "@/types/destination";

interface Props {
  attractions: Attraction[];
  country: PlannerCountry;
}

/** 주요 관광지 사진 카드 + "일정에 담기" (내 여행의 여행지 바구니에 모아 두고, 날짜·순서는 내 여행에서 드래그로 정한다) */
export function AttractionsSection({ attractions, country }: Props) {
  const { lang, t } = useApp();
  const trip = useSyncExternalStore(tripStore.subscribe, tripStore.getSnapshot, tripStore.getServerSnapshot);
  const [notice, setNotice] = useState<string | null>(null);
  const currentTrip = trip && trip !== LOADING ? trip : null;
  const sameCountry = currentTrip?.country === country.slug;
  const inTrip = new Set(sameCountry ? [...(currentTrip.basket ?? []), ...currentTrip.days.flatMap((d) => d.places)].map((p) => p.wiki ?? p.name) : []);

  function add(a: Attraction) {
    let base = currentTrip;
    if (!base || base.country !== country.slug) {
      const hasPlaces = base?.days.some((d) => d.places.length);
      if (hasPlaces && !confirm(t("attractions.newTripConfirm", { country: country.name }))) return;
      // 관광지가 있는 도시로 새 일정 (도시 정보가 없으면 나라 기본값)
      const start = addDays(new Date().toISOString().slice(0, 10), 30);
      base = a.city ? createTrip(country, a.city, a.location, start, addDays(start, 3)) : defaultTrip(country);
    }
    tripStore.set(addToBasket(base, a));
    setNotice(t("attractions.addedToast", { name: a.name }));
  }

  return (
    <>
      <div className="attr-grid">
        {attractions.map((a) => {
          const added = inTrip.has(a.wiki);
          return (
            <article className="attr" key={a.wiki}>
              {/* eslint-disable-next-line @next/next/no-img-element -- 위키미디어 외부 이미지 */}
              <img className="attr__img" src={a.image} alt={a.name} loading="lazy" />
              <div className="attr__body">
                <h3 className="attr__name">{lang === "en" ? a.nameEn : a.name}</h3>
                {a.city && <p className="attr__city"><Icon name="pin" />{a.city}</p>}
                {lang === "ko" && a.summary && <p className="attr__summary">{a.summary}</p>}
                <button type="button" className={added ? "attr__add attr__add--done" : "attr__add"} onClick={() => add(a)} disabled={added}>
                  {added ? t("attractions.added") : <><Icon name="calendar" />{t("attractions.add")}</>}
                </button>
              </div>
            </article>
          );
        })}
      </div>
      <p className="attr__credit">{t("attractions.credit")}</p>
      <p className="attr__notice" role="status" aria-live="polite">
        {notice && <>{notice} <Link href="/trip/">{t("attractions.viewTrip")}</Link></>}
      </p>
    </>
  );
}
