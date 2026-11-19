"use client";

import Link from "next/link";
import { useEffect, useRef, useState, type FormEvent } from "react";
import { Icon } from "@/components/ui/Icon";
import { LOADING, tripStore } from "@/lib/trip-store";
import { flushSave } from "@/lib/trip-sync";
import {
  defaultTitle, findMyPostForTrip, MAX_TAGS, placeCount, postUrl, publishPost, TAGS, VISIBILITY,
  type MyPostRef, type PublishOptions, type Visibility,
} from "@/lib/posts";
import type { Trip } from "@/types/trip";

interface Props {
  trip: Trip;
  countryName: string;
  onClose: () => void;
}

type Step = { s: "loading" } | { s: "form"; existing: MyPostRef | null } | { s: "sending" } | { s: "done"; code: string; updated: boolean };

/**
 * 게시판에 올리기: 제목·소개·태그·공개 범위, 그리고 남에게 보일 개인정보(메모·숙소·날짜)를 고른다.
 * 이 일정에서 이미 올린 글이 있으면 그 글을 새 내용으로 고치거나, 새 글로 올릴 수 있다.
 */
export function PublishDialog({ trip, countryName, onClose }: Props) {
  const [step, setStep] = useState<Step>({ s: "loading" });
  const [mode, setMode] = useState<"update" | "new">("update");
  const [err, setErr] = useState("");
  const [o, setO] = useState<PublishOptions>({
    title: defaultTitle(trip, countryName), summary: "", tags: [], visibility: "public",
    memo: false, stay: false, dates: trip.datesUnset ? "none" : "month",
  });
  const boxRef = useRef<HTMLDivElement>(null);
  const hasStay = trip.days.some((d) => d.stay);
  const hasMemo = trip.days.some((d) => d.places.some((p) => p.memo?.trim()));

  // 열 때: 기다리던 저장을 마치고, 이 일정에서 올린 글이 있는지 확인
  useEffect(() => {
    let alive = true;
    (async () => {
      await flushSave();
      const cur = tripStore.getSnapshot();
      const id = cur && cur !== LOADING ? cur.cloud?.id : undefined;
      const existing = id ? await findMyPostForTrip(id).catch(() => null) : null;
      if (!alive) return;
      if (existing) setO((x) => ({ ...x, title: existing.title, summary: existing.summary, tags: existing.tags, visibility: existing.visibility }));
      setStep({ s: "form", existing });
    })();
    return () => { alive = false; };
  }, []);

  // Esc로 닫기, 열릴 때 창 안으로 초점
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", onKey);
    boxRef.current?.focus();
    return () => document.removeEventListener("keydown", onKey);
  }, [onClose]);

  const set = <K extends keyof PublishOptions>(k: K, v: PublishOptions[K]) => setO((x) => ({ ...x, [k]: v }));
  const toggleTag = (t: string) => set("tags", o.tags.includes(t) ? o.tags.filter((x) => x !== t) : o.tags.length < MAX_TAGS ? [...o.tags, t] : o.tags);

  async function submit(e: FormEvent) {
    e.preventDefault();
    if (step.s !== "form") return;
    if (!o.title.trim()) { setErr("제목을 적어 주세요"); return; }
    const existing = mode === "update" ? step.existing : null;
    setErr("");
    setStep({ s: "sending" });
    try {
      const cur = tripStore.getSnapshot();
      const latest = cur && cur !== LOADING ? cur : trip;
      const code = await publishPost(latest, o, existing?.id);
      setStep({ s: "done", code, updated: Boolean(existing) });
    } catch (e2) {
      setErr(e2 instanceof Error ? e2.message : "올리지 못했어요");
      setStep({ s: "form", existing: step.existing });
    }
  }

  return (
    <div className="pub" role="presentation" onPointerDown={(e) => { if (e.target === e.currentTarget) onClose(); }}>
      <div className="pub__box" role="dialog" aria-modal="true" aria-labelledby="pub-title" tabIndex={-1} ref={boxRef}>
        <div className="pub__hd">
          <h2 id="pub-title">게시판에 올리기</h2>
          <button type="button" className="icon-btn" aria-label="닫기" onClick={onClose}><Icon name="x" /></button>
        </div>

        {step.s === "loading" && <p className="pub__msg">준비하는 중…</p>}

        {step.s === "done" && (
          <div className="pub__done">
            <p><b>{step.updated ? "게시글을 새 내용으로 바꿨어요." : "게시판에 올렸어요!"}</b></p>
            <p className="pub__msg">{VISIBILITY.find((v) => v.id === o.visibility)!.desc}.</p>
            <div className="pub__link">
              <input readOnly value={postUrl(window.location.origin, step.code)} aria-label="게시글 주소" onFocus={(e) => e.currentTarget.select()} />
              <button type="button" className="btn" onClick={() => navigator.clipboard.writeText(postUrl(window.location.origin, step.code)).catch(() => {})}>
                <Icon name="copy" />복사
              </button>
            </div>
            <div className="pub__act">
              <button type="button" className="btn" onClick={onClose}>닫기</button>
              <Link className="btn btn--pri" href={`/board/post/?c=${encodeURIComponent(step.code)}`}>글 보러 가기</Link>
            </div>
          </div>
        )}

        {(step.s === "form" || step.s === "sending") && (
          <form className="pub__form" onSubmit={submit}>
            {step.s === "form" && step.existing && (
              <fieldset className="pub__mode">
                <legend>이 일정으로 올린 글이 있어요 · <Link href={`/board/post/?c=${encodeURIComponent(step.existing.shareCode)}`}>보기</Link></legend>
                <label><input type="radio" name="mode" checked={mode === "update"} onChange={() => setMode("update")} /> 그 글을 지금 내용으로 바꾸기</label>
                <label><input type="radio" name="mode" checked={mode === "new"} onChange={() => setMode("new")} /> 새 글로 하나 더 올리기</label>
              </fieldset>
            )}

            <label className="pub__field">
              <span>제목</span>
              <input value={o.title} maxLength={60} onChange={(e) => set("title", e.target.value)} required />
            </label>
            <label className="pub__field">
              <span>소개 <small>(선택)</small></span>
              <textarea value={o.summary} maxLength={500} rows={3} onChange={(e) => set("summary", e.target.value)} placeholder="어떤 여행이었는지, 이 동선의 좋은 점이나 팁을 적어 주세요" />
            </label>

            <fieldset className="pub__tags">
              <legend>태그 <small>(최대 {MAX_TAGS}개)</small></legend>
              {TAGS.map((t) => (
                <button key={t} type="button" aria-pressed={o.tags.includes(t)} onClick={() => toggleTag(t)} disabled={!o.tags.includes(t) && o.tags.length >= MAX_TAGS}>#{t}</button>
              ))}
            </fieldset>

            <fieldset className="pub__vis">
              <legend>공개 범위</legend>
              {VISIBILITY.map((v) => (
                <label key={v.id} className={o.visibility === v.id ? "is-on" : undefined}>
                  <input type="radio" name="vis" value={v.id} checked={o.visibility === v.id} onChange={() => set("visibility", v.id as Visibility)} />
                  <b>{v.label}</b><small>{v.desc}</small>
                </label>
              ))}
            </fieldset>

            <fieldset className="pub__privacy">
              <legend>남에게 보여 줄 정보</legend>
              <label>
                <input type="checkbox" checked={o.memo} onChange={(e) => set("memo", e.target.checked)} disabled={!hasMemo} />
                장소 메모도 공개 <small>{hasMemo ? "예약번호·연락처가 적혀 있지 않은지 확인하세요" : "적은 메모가 없어요"}</small>
              </label>
              <label>
                <input type="checkbox" checked={o.stay} onChange={(e) => set("stay", e.target.checked)} disabled={!hasStay} />
                숙소 이름·위치도 공개 <small>{hasStay ? "날짜와 함께 보이면 묵는 곳이 드러날 수 있어요" : "넣은 숙소가 없어요"}</small>
              </label>
              <div className="pub__dates" role="radiogroup" aria-label="여행 날짜 공개">
                <span>여행 날짜</span>
                {trip.datesUnset ? (
                  <small>날짜 미정 일정이에요 (기간만 보여요)</small>
                ) : (
                  ([["month", "몇 월인지만"], ["exact", "정확한 날짜"], ["none", "숨기기"]] as const).map(([id, label]) => (
                    <label key={id}><input type="radio" name="dates" checked={o.dates === id} onChange={() => set("dates", id)} /> {label}</label>
                  ))
                )}
              </div>
            </fieldset>

            <p className="pub__msg">장소 {placeCount(trip)}곳 · 체크리스트와 여행지 바구니는 올라가지 않아요.</p>
            {err && <p className="pub__err" role="alert">{err}</p>}
            <div className="pub__act">
              <button type="button" className="btn" onClick={onClose}>취소</button>
              <button type="submit" className="btn btn--pri" disabled={step.s === "sending"}>
                {step.s === "sending" ? "올리는 중…" : step.s === "form" && step.existing && mode === "update" ? "글 바꾸기" : "올리기"}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
