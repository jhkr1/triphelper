"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { Icon } from "@/components/ui/Icon";
import { UserAvatar } from "@/components/ui/UserAvatar";
import { TripMap } from "@/components/trip/TripMap";
import { RouteDays } from "@/components/trip/RouteDays";
import { flagUrl } from "@/lib/geo";
import { authStore, enabledProviders, signIn } from "@/lib/supabase";
import { LOADING, tripStore } from "@/lib/trip-store";
import { flushSave } from "@/lib/trip-sync";
import { checklistFor, nightsBetween, tripName, type PlannerCountry } from "@/lib/trip-model";
import { getSharedTrip, viewUrl, type SharedTrip } from "@/lib/trip-link";
import { timeAgo } from "@/lib/posts";

type State = { status: "loading" } | { status: "missing" } | { status: "error" } | { status: "done"; shared: SharedTrip };

const nightsText = (n: number) => (n ? `${n}박 ${n + 1}일` : "당일치기");

/**
 * 보기 전용 링크(/trip/?v=코드)로 연 일정. 로그인 없이 볼 수 있고, 원본이라 주인이 고치면 다시 열 때 반영된다.
 * onDone: 내 일정으로 가져온 뒤 플래너로 돌아가기
 */
export function SharedTripView({ code, countries, onDone }: { code: string; countries: PlannerCountry[]; onDone: () => void }) {
  const auth = useSyncExternalStore(authStore.subscribe, authStore.getSnapshot, authStore.getServerSnapshot);
  const meId = auth.status === "in" ? auth.me.id : null;
  const [state, setState] = useState<State>({ status: "loading" });
  const [mapDay, setMapDay] = useState<"all" | number>("all");
  const [toastMsg, setToastMsg] = useState("");
  const toastTimer = useRef<number | undefined>(undefined);
  const toast = (m: string) => { setToastMsg(m); window.clearTimeout(toastTimer.current); toastTimer.current = window.setTimeout(() => setToastMsg(""), 2200); };
  useEffect(() => () => window.clearTimeout(toastTimer.current), []);

  useEffect(() => {
    let alive = true;
    getSharedTrip(code).then(
      (shared) => { if (alive) setState(shared ? { status: "done", shared } : { status: "missing" }); },
      () => { if (alive) setState({ status: "error" }); },
    );
    return () => { alive = false; };
  }, [code]);

  if (state.status === "loading") return <div className="wrap"><p className="board__msg">일정을 불러오는 중…</p></div>;
  if (state.status === "error") return <div className="wrap"><p className="board__msg">일정을 불러오지 못했어요. 잠시 뒤 다시 시도해 주세요.</p></div>;
  if (state.status === "missing") {
    return (
      <div className="wrap">
        <div className="board__empty">
          <Icon name="pin" />
          <p><b>일정을 찾을 수 없어요.</b><br />만든 사람이 링크를 껐거나 새 링크로 바꿨을 수 있어요.</p>
          <button className="btn btn--pri" type="button" onClick={onDone}>내 여행으로</button>
        </div>
      </div>
    );
  }

  const { trip, updatedAt, nickname, avatar } = state.shared;
  const country = countries.find((c) => c.slug === trip.country);
  const places = trip.days.reduce((s, d) => s + d.places.length, 0);
  const when = !trip.datesUnset && trip.start && trip.end
    ? `${trip.start.replaceAll("-", ".")} – ${trip.end.slice(5).replace("-", ".")}`
    : null;

  async function copyLink() {
    try {
      await navigator.clipboard.writeText(viewUrl(window.location.origin, code));
      toast("링크를 복사했어요");
    } catch { toast("이 환경에서는 복사할 수 없어요"); }
  }

  async function importTrip() {
    if (!country) return;
    // 내 여행은 로그인해야 쓸 수 있다: 로그인한 뒤 이 링크로 돌아오면 다시 누른다
    if (!meId) {
      const provider = enabledProviders()[0];
      if (provider) signIn(provider).catch(() => toast("로그인 화면을 열지 못했어요"));
      return;
    }
    const cur = tripStore.getSnapshot();
    const t = cur && cur !== LOADING ? cur : null;
    const unsaved = t && !t.cloud && t.days.some((d) => d.places.length);
    if (unsaved && !confirm("지금 '내 여행'에 있는 저장되지 않은 일정이 이 일정으로 바뀝니다. 계속할까요?")) return;
    await flushSave(); // 저장된 일정은 '내 여행 목록'에 남는다
    const active = authStore.getSnapshot();
    if (active.status !== "in" || active.me.id !== meId) return;
    // 사본으로 가져온다: 이제부터는 내 일정 (원본과 연결되지 않음)
    tripStore.set({ ...trip, checklist: checklistFor(country) });
    onDone();
  }

  return (
    <div className="wrap"><div className="post">
      <header className="post__hd">
        <span className="post__vis post__vis--unlisted">보기 전용</span>
        <h1>{tripName(trip, country?.name ?? "")}</h1>
        <p className="post__meta">
          {country && (
            // eslint-disable-next-line @next/next/no-img-element -- 작은 외부 국기 이미지
            <img src={flagUrl(country.countryCode)} alt="" />
          )}
          {[country?.name, trip.city, nightsText(Math.max(0, nightsBetween(trip.start, trip.end))), when, `장소 ${places}곳`].filter(Boolean).join(" · ")}
        </p>
        <p className="post__by">
          <UserAvatar id={nickname} src={avatar} size={28} />
          <b>{nickname}</b>님의 일정 · {timeAgo(updatedAt)} 수정
        </p>
        <div className="post__acts">
          <button className="btn btn--pri" type="button" onClick={importTrip} disabled={!country}>{meId ? "내 일정으로 가져오기" : "로그인하고 내 일정으로 가져오기"}</button>
          <button className="btn" type="button" onClick={copyLink}><Icon name="link" />링크 복사</button>
        </div>
        <p className="post__hint">만든 사람이 일정을 고치면 이 링크에도 바로 반영돼요. 가져오면 내 일정으로 복사되어 따로 고칠 수 있어요.</p>
      </header>

      <section className="post__map">
        <TripMap days={trip.days} mapDay={mapDay} onMapDayChange={setMapDay} center={trip.center} />
      </section>

      <RouteDays days={trip.days} start={trip.datesUnset ? undefined : trip.start} countryCode={country?.countryCode ?? ""} />

      <div className={toastMsg ? "toast on" : "toast"} role="status" aria-live="polite">{toastMsg}</div>
    </div></div>
  );
}
