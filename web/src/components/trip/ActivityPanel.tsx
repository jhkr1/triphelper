"use client";

import { useCallback, useEffect, useState } from "react";
import { UserAvatar } from "@/components/ui/UserAvatar";
import { listActivity, watchActivity, type Activity } from "@/lib/trip-collab";
import { listVersions, removedPlaces, type RemovedPlace, type TripContent, type VersionRow } from "@/lib/trip-versions";
import { timeAgo } from "@/lib/posts";

/**
 * 한 번의 작업 묶음 (DB가 같은 사람의 10분 안 연속 저장을 기록 하나로 합친다 → 같은 versionId).
 * 기록 기능 전의 활동은 versionId가 없어 같은 사람 · 같은 시각끼리 묶는다.
 */
interface Group { key: string; first: Activity; lines: string[]; versionId?: number }

function groupOf(items: Activity[]): Group[] {
  const out: Group[] = [];
  const byVersion = new Map<number, Group>();
  for (const a of items) {
    const g = a.versionId !== undefined ? byVersion.get(a.versionId) : undefined;
    const last = out[out.length - 1];
    if (g) g.lines.push(a.text);
    else if (a.versionId === undefined && last && last.versionId === undefined && last.first.userId === a.userId && last.first.createdAt === a.createdAt) {
      last.lines.push(a.text);
    } else {
      const ng: Group = { key: String(a.id), first: a, lines: [a.text], ...(a.versionId !== undefined ? { versionId: a.versionId } : {}) };
      out.push(ng);
      if (a.versionId !== undefined) byVersion.set(a.versionId, ng);
    }
  }
  return out;
}

/** DB에 남기는 작업 묶음 수와 같다 */
const MAX_GROUPS = 10;
const SHOWN = 5;

/**
 * 최근 활동: 누가 무엇을 바꿨는지 (새 활동이 생기면 바로 갱신).
 * 저장마다 [이때 보기]로 그때의 일정을 볼 수 있다. 가장 최근 저장은 "지금".
 */
export function ActivityPanel({ tripId, meId, peeking, onPeek, now, canEdit, onPutBack }: {
  tripId: string;
  meId?: string;
  /** 지금 보고 있는 예전 기록 */
  peeking?: number;
  onPeek: (versionId: number, at: string) => void;
  /** 지금 일정 (뺀 장소를 찾는 기준. 예전 일정을 보는 중에도 지금 것) */
  now: TripContent;
  canEdit: boolean;
  onPutBack: (r: RemovedPlace) => void;
}) {
  const [state, setState] = useState<{ items: Activity[]; versions: VersionRow[] } | null>(null);
  const [failed, setFailed] = useState(false);
  const [all, setAll] = useState(false);
  const [tab, setTab] = useState<"log" | "gone">("log");

  const load = useCallback(() => {
    Promise.all([listActivity(tripId), listVersions(tripId)])
      .then(([items, versions]) => { setState({ items, versions }); setFailed(false); }, () => setFailed(true));
  }, [tripId]);

  // 뺀 장소: 기록(최근 10묶음)에는 있는데 지금 일정에는 없는 장소
  const gone = state ? removedPlaces(state.versions, now) : [];
  const names = new Map(state?.items.map((a) => [a.userId, a.nickname]) ?? []);
  const who = (id?: string | null) => (id && id === meId ? "나" : (id && names.get(id)) || "함께 짜는 사람");

  useEffect(() => {
    // 열 때 불러오고, 새 활동 알림이 오면 다시 불러온다 (DB 값을 화면에 옮기는 것)
    // eslint-disable-next-line react-hooks/set-state-in-effect
    load();
    return watchActivity(tripId, load);
  }, [tripId, load]);

  const groups = state ? groupOf(state.items).slice(0, MAX_GROUPS) : [];
  const shown = all ? groups : groups.slice(0, SHOWN);

  return (
    <div className="card activity" aria-labelledby="activity-title">
      <div className="activity__hd">
        <h3 id="activity-title">최근 활동</h3>
        {state && !failed && (
          <div className="activity__tabs" role="tablist" aria-label="최근 활동 보기">
            <button type="button" role="tab" aria-selected={tab === "log"} onClick={() => setTab("log")}>활동</button>
            <button type="button" role="tab" aria-selected={tab === "gone"} onClick={() => setTab("gone")}>뺀 장소{gone.length ? ` ${gone.length}` : ""}</button>
          </div>
        )}
      </div>
      {failed ? (
        <p className="activity__msg">활동을 불러오지 못했어요.</p>
      ) : !state ? (
        <p className="activity__msg">불러오는 중…</p>
      ) : tab === "gone" ? (
        !gone.length ? (
          <p className="activity__msg">최근에 뺀 장소가 없어요. 장소를 빼면 여기서 다시 넣을 수 있어요.</p>
        ) : (
          <>
            <ul className="gone">
              {gone.map((r) => (
                <li key={r.place.id}>
                  <div>
                    <b>{r.place.name}</b>
                    <small>
                      {r.day < 0 ? "여행지 바구니" : `${r.day + 1}일차${r.place.time ? ` ${r.place.time}` : ""}`}
                      {" · "}{r.at ? `${who(r.by)} · ${timeAgo(r.at)}` : "방금"}
                    </small>
                  </div>
                  {canEdit && <button type="button" className="btn" onClick={() => onPutBack(r)}>다시 넣기</button>}
                </li>
              ))}
            </ul>
            <p className="activity__msg">원래 날의 원래 자리로 돌아가요. 그날이 없어졌으면 여행지 바구니로 들어가요.</p>
          </>
        )
      ) : !groups.length ? (
        <p className="activity__msg">아직 활동이 없어요. 일정을 고치면 여기에 남고, 그때의 일정으로 되돌릴 수 있어요.</p>
      ) : (
        <>
          <ol className="activity__list">
            {shown.map((g) => {
              const isNow = g.versionId !== undefined && g.versionId === state.versions[0]?.id;
              const on = g.versionId !== undefined && g.versionId === peeking;
              return (
                <li key={g.key} className="act--group" aria-current={on ? "true" : undefined}>
                  <UserAvatar id={g.first.userId} src={g.first.avatar} size={24} />
                  <div className={on ? "act--on" : undefined}>
                    <ul className="act__lines">
                      {g.lines.map((text, i) => (
                        <li key={i}>{i === 0 && <><b>{g.first.userId === meId ? "나" : g.first.nickname}</b>{" "}</>}{text}</li>
                      ))}
                    </ul>
                    <div className="act__foot">
                      <time dateTime={g.first.createdAt} title={new Date(g.first.createdAt).toLocaleString("ko-KR")}>{timeAgo(g.first.createdAt)}</time>
                      {g.versionId === undefined ? null
                        : g.versionId === peeking ? <span className="act__now">보는 중</span>
                        : isNow ? <span className="act__now">지금</span>
                        : <button type="button" className="act__see" onClick={() => onPeek(g.versionId!, g.first.createdAt)}>이때 보기</button>}
                    </div>
                  </div>
                </li>
              );
            })}
          </ol>
          {groups.length > SHOWN && (
            <button type="button" className="activity__more" onClick={() => setAll((x) => !x)}>
              {all ? "접기" : `${groups.length - SHOWN}개 더 보기`}
            </button>
          )}
        </>
      )}
    </div>
  );
}
