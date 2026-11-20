"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { Icon } from "@/components/ui/Icon";
import { UserAvatar } from "@/components/ui/UserAvatar";
import {
  createInvite, deleteInvite, inviteUrl, listInvites, listMembers, removeMember, ROLE_LABEL, setMemberRole,
  type Invite, type Member, type MemberRole,
} from "@/lib/trip-collab";
import { markShared } from "@/lib/trip-sync";
import type { Trip } from "@/types/trip";

interface Props {
  trip: Trip;
  meId: string;
  onClose: () => void;
  /** 멤버가 이 일정에서 나갔을 때 */
  onLeft: () => void;
  toast: (msg: string) => void;
}

const INVITE_HINT: Record<MemberRole, string> = {
  editor: "장소를 넣고 옮기고 고칠 수 있어요",
  viewer: "일정을 보기만 하고, 준비물은 각자 챙겨요",
};

/** 함께 짜기: 주인은 초대 링크를 만들고 멤버를 관리, 멤버는 사람 목록을 보고 나갈 수 있다 */
export function CollabDialog({ trip, meId, onClose, onLeft, toast }: Props) {
  const tripId = trip.cloud!.id;
  const owner = (trip.cloud!.role ?? "owner") === "owner";
  const [members, setMembers] = useState<Member[] | null>(null);
  const [invites, setInvites] = useState<Invite[]>([]);
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState("");
  const [confirmLeave, setConfirmLeave] = useState(false);
  const boxRef = useRef<HTMLDivElement>(null);

  const refresh = useCallback(async () => {
    try {
      const [m, i] = await Promise.all([listMembers(tripId), owner ? listInvites(tripId) : Promise.resolve([])]);
      setMembers(m);
      setInvites(i);
    } catch { setErr("목록을 불러오지 못했어요"); }
  }, [tripId, owner]);

  useEffect(() => {
    // 열 때 한 번 불러온다 (DB 값을 화면에 옮기는 것)
    // eslint-disable-next-line react-hooks/set-state-in-effect
    refresh();
  }, [refresh]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", onKey);
    boxRef.current?.focus();
    return () => document.removeEventListener("keydown", onKey);
  }, [onClose]);

  async function run(fn: () => Promise<void>) {
    setBusy(true); setErr("");
    try { await fn(); } catch (e) { setErr(e instanceof Error ? e.message : "잠시 뒤 다시 시도해 주세요."); } finally { setBusy(false); }
  }

  const copy = (code: string) =>
    navigator.clipboard.writeText(inviteUrl(window.location.origin, code)).then(() => toast("초대 링크를 복사했어요"), () => toast("이 환경에서는 복사할 수 없어요"));

  const make = (role: MemberRole) => run(async () => {
    const inv = await createInvite(tripId, role);
    setInvites((x) => [inv, ...x]);
    markShared();
    copy(inv.code);
  });

  const expires = (iso: string) => { const d = new Date(iso); return `${d.getMonth() + 1}월 ${d.getDate()}일까지`; };

  return (
    <div className="pub" role="presentation" onPointerDown={(e) => { if (e.target === e.currentTarget) onClose(); }}>
      <div className="pub__box collab" role="dialog" aria-modal="true" aria-labelledby="collab-title" tabIndex={-1} ref={boxRef}>
        <div className="pub__hd">
          <h2 id="collab-title">{owner ? "함께 짜기" : "함께 짜는 사람"}</h2>
          <button type="button" className="icon-btn" aria-label="닫기" onClick={onClose}><Icon name="x" /></button>
        </div>

        {owner && (
          <section className="collab__invite" aria-labelledby="collab-invite">
            <h3 id="collab-invite">초대 링크 보내기</h3>
            <p className="pub__msg">링크를 받은 사람이 로그인하면 이 일정에 들어와요. 링크는 7일 동안 쓸 수 있어요.</p>
            <div className="collab__make">
              {(["editor", "viewer"] as const).map((r) => (
                <button key={r} type="button" className="collab__opt" onClick={() => make(r)} disabled={busy}>
                  <b>{ROLE_LABEL[r]} 링크 만들기</b>
                  <small>{INVITE_HINT[r]}</small>
                </button>
              ))}
            </div>
            {invites.length > 0 && (
              <ul className="collab__invites">
                {invites.map((i) => (
                  <li key={i.code}>
                    <span><b>{ROLE_LABEL[i.role]}</b> 링크 · {expires(i.expiresAt)}</span>
                    <button type="button" className="btn btn--sm" onClick={() => copy(i.code)}><Icon name="copy" />복사</button>
                    <button type="button" className="btn btn--sm" disabled={busy}
                      onClick={() => run(async () => { await deleteInvite(i.code); setInvites((x) => x.filter((y) => y.code !== i.code)); })}>
                      없애기
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </section>
        )}

        <section aria-labelledby="collab-people">
          <h3 id="collab-people">사람 {members && <span>{members.length}</span>}</h3>
          {!members ? (
            <p className="pub__msg">불러오는 중…</p>
          ) : (
            <ul className="collab__people">
              {members.map((m) => (
                <li key={m.userId}>
                  <UserAvatar id={m.userId} src={m.avatar} size={32} />
                  <span className="collab__name"><b>{m.nickname}</b>{m.userId === meId && <small>나</small>}</span>
                  {owner && m.role !== "owner" ? (
                    <>
                      <label className="collab__role">
                        <span className="sr-only">{m.nickname} 권한</span>
                        <select value={m.role} disabled={busy}
                          onChange={(e) => { const role = e.target.value as MemberRole; run(async () => { await setMemberRole(tripId, m.userId, role); setMembers((x) => x?.map((y) => (y.userId === m.userId ? { ...y, role } : y)) ?? null); }); }}>
                          <option value="editor">{ROLE_LABEL.editor}</option>
                          <option value="viewer">{ROLE_LABEL.viewer}</option>
                        </select>
                      </label>
                      <button type="button" className="btn btn--sm" disabled={busy}
                        onClick={() => run(async () => { await removeMember(tripId, m.userId); setMembers((x) => x?.filter((y) => y.userId !== m.userId) ?? null); toast(`${m.nickname}님을 내보냈어요`); })}>
                        내보내기
                      </button>
                    </>
                  ) : (
                    <span className="collab__tag">{ROLE_LABEL[m.role]}</span>
                  )}
                </li>
              ))}
            </ul>
          )}
        </section>

        {err && <p className="pub__err" role="alert">{err}</p>}

        {!owner && (
          <div className="collab__leave">
            {confirmLeave ? (
              <>
                <span>이 일정에서 나갈까요? 다시 들어오려면 새 초대 링크가 필요해요.</span>
                <button type="button" className="btn btn--sm post__del" disabled={busy}
                  onClick={() => run(async () => { await removeMember(tripId, meId); onLeft(); })}>
                  나가기
                </button>
                <button type="button" className="btn btn--sm" onClick={() => setConfirmLeave(false)}>취소</button>
              </>
            ) : (
              <button type="button" className="btn btn--sm" onClick={() => setConfirmLeave(true)}>이 일정에서 나가기</button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
