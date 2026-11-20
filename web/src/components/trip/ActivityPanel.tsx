"use client";

import { useCallback, useEffect, useState } from "react";
import { UserAvatar } from "@/components/ui/UserAvatar";
import { listActivity, watchActivity, type Activity } from "@/lib/trip-collab";
import { timeAgo } from "@/lib/posts";

/** 함께 짜는 일정의 최근 활동: 누가 무엇을 했는지 (새 활동이 생기면 바로 갱신) */
export function ActivityPanel({ tripId }: { tripId: string }) {
  const [items, setItems] = useState<Activity[] | null>(null);
  const [failed, setFailed] = useState(false);
  const [all, setAll] = useState(false);

  const load = useCallback(() => {
    listActivity(tripId).then((x) => { setItems(x); setFailed(false); }, () => setFailed(true));
  }, [tripId]);

  useEffect(() => {
    // 열 때 불러오고, 새 활동 알림이 오면 다시 불러온다 (DB 값을 화면에 옮기는 것)
    // eslint-disable-next-line react-hooks/set-state-in-effect
    load();
    return watchActivity(tripId, load);
  }, [tripId, load]);

  const shown = items ? (all ? items : items.slice(0, 6)) : [];

  return (
    <div className="card activity" aria-labelledby="activity-title">
      <h3 id="activity-title">최근 활동</h3>
      {failed ? (
        <p className="activity__msg">활동을 불러오지 못했어요.</p>
      ) : !items ? (
        <p className="activity__msg">불러오는 중…</p>
      ) : !items.length ? (
        <p className="activity__msg">아직 활동이 없어요. 누군가 일정을 고치면 여기에 남아요.</p>
      ) : (
        <>
          <ol className="activity__list">
            {shown.map((a) => (
              <li key={a.id}>
                <UserAvatar id={a.userId} src={a.avatar} size={24} />
                <p>
                  <b>{a.nickname}</b> {a.text}
                  <time dateTime={a.createdAt} title={new Date(a.createdAt).toLocaleString("ko-KR")}>{timeAgo(a.createdAt)}</time>
                </p>
              </li>
            ))}
          </ol>
          {items.length > 6 && (
            <button type="button" className="activity__more" onClick={() => setAll((x) => !x)}>
              {all ? "접기" : `${items.length - 6}개 더 보기`}
            </button>
          )}
        </>
      )}
    </div>
  );
}
