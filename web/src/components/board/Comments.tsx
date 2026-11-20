"use client";

import { useEffect, useRef, useState, useSyncExternalStore, type FormEvent, type KeyboardEvent } from "react";
import { UserAvatar } from "@/components/ui/UserAvatar";
import { authEnabled, authStore, enabledProviders, PROVIDERS, signIn } from "@/lib/supabase";
import { addComment, COMMENT_MAX, deleteComment, editComment, listComments, timeAgo, type Comment, type Post } from "@/lib/posts";

type State = { s: "loading" } | { s: "error" } | { s: "done"; items: Comment[] };

function Avatar({ c }: { c: { userId: string; avatar?: string } }) {
  return <UserAvatar id={c.userId} src={c.avatar} size={32} className="cmt__av" />;
}

/** 글자 입력칸 (Ctrl/⌘+Enter로 보내기). 글자 수가 많아지면 남은 수를 보여 준다 */
function CommentBox({ value, onChange, onSubmit, onCancel, busy, label, submitText, autoFocus }: {
  value: string; onChange: (v: string) => void; onSubmit: () => void; onCancel?: () => void;
  busy: boolean; label: string; submitText: string; autoFocus?: boolean;
}) {
  const ref = useRef<HTMLTextAreaElement>(null);
  // 내용에 맞춰 높이를 늘린다
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.style.height = "auto";
    el.style.height = `${Math.min(el.scrollHeight + 2, 320)}px`;
  }, [value]);
  useEffect(() => {
    if (!autoFocus) return;
    const el = ref.current;
    el?.focus();
    el?.setSelectionRange(el.value.length, el.value.length);
  }, [autoFocus]);

  const onKey = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && (e.ctrlKey || e.metaKey)) { e.preventDefault(); onSubmit(); }
    if (e.key === "Escape" && onCancel) { e.preventDefault(); e.stopPropagation(); onCancel(); }
  };
  const left = COMMENT_MAX - value.length;
  const submit = (e: FormEvent) => { e.preventDefault(); onSubmit(); };

  return (
    <form className="cmt__form" onSubmit={submit}>
      <textarea
        ref={ref}
        value={value}
        rows={2}
        maxLength={COMMENT_MAX}
        aria-label={label}
        placeholder="이 동선에 대한 생각이나 궁금한 점을 남겨 주세요"
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={onKey}
        disabled={busy}
      />
      <div className="cmt__formbar">
        <small aria-live="polite">{left <= 100 ? `${left}자 남음` : "Ctrl+Enter로 등록"}</small>
        {onCancel && <button type="button" className="btn btn--sm" onClick={onCancel} disabled={busy}>취소</button>}
        <button type="submit" className="btn btn--pri btn--sm" disabled={busy || !value.trim()}>{busy ? "보내는 중…" : submitText}</button>
      </div>
    </form>
  );
}

/** 게시글 댓글: 누구나 읽고, 로그인하면 쓰기. 내 댓글은 고치기·지우기, 글쓴이는 자기 글의 댓글 지우기 */
export function Comments({ post }: { post: Post }) {
  const auth = useSyncExternalStore(authStore.subscribe, authStore.getSnapshot, authStore.getServerSnapshot);
  const me = auth.status === "in" ? auth.me : null;
  const [state, setState] = useState<State>({ s: "loading" });
  const [draft, setDraft] = useState("");
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState("");
  const [editing, setEditing] = useState<{ id: string; body: string } | null>(null);
  const [confirmDel, setConfirmDel] = useState<string | null>(null);
  const [rowBusy, setRowBusy] = useState<string | null>(null);

  useEffect(() => {
    let alive = true;
    listComments(post.shareCode).then(
      (items) => { if (alive) setState({ s: "done", items }); },
      () => { if (alive) setState({ s: "error" }); },
    );
    return () => { alive = false; };
  }, [post.shareCode, me?.id]);

  const items = state.s === "done" ? state.items : [];
  const setItems = (f: (x: Comment[]) => Comment[]) => setState((st) => (st.s === "done" ? { s: "done", items: f(st.items) } : st));

  async function send() {
    if (!me || !draft.trim() || busy) return;
    setBusy(true); setErr("");
    try {
      const { id, createdAt } = await addComment(post.id, draft);
      setItems((x) => [...x, { id, userId: me.id, body: draft.trim(), createdAt, editedAt: null, nickname: me.nickname, ...(me.avatar ? { avatar: me.avatar } : {}) }]);
      setDraft("");
    } catch (e) { setErr(e instanceof Error ? e.message : "댓글을 올리지 못했어요"); } finally { setBusy(false); }
  }

  async function saveEdit() {
    if (!editing || !editing.body.trim()) return;
    setRowBusy(editing.id); setErr("");
    try {
      const editedAt = await editComment(editing.id, editing.body);
      const { id, body } = editing;
      setItems((x) => x.map((c) => (c.id === id ? { ...c, body: body.trim(), editedAt } : c)));
      setEditing(null);
    } catch (e) { setErr(e instanceof Error ? e.message : "고치지 못했어요"); } finally { setRowBusy(null); }
  }

  async function remove(id: string) {
    setRowBusy(id); setErr("");
    try {
      await deleteComment(id);
      setItems((x) => x.filter((c) => c.id !== id));
      setConfirmDel(null);
    } catch (e) { setErr(e instanceof Error ? e.message : "지우지 못했어요"); } finally { setRowBusy(null); }
  }

  const provider = PROVIDERS.find((p) => p.id === enabledProviders()[0]);

  return (
    <section className="card cmt" aria-labelledby="cmt-title">
      <h2 id="cmt-title">댓글 {state.s === "done" && <span>{items.length}</span>}</h2>

      {state.s === "loading" && <p className="cmt__msg">댓글을 불러오는 중…</p>}
      {state.s === "error" && <p className="cmt__msg">댓글을 불러오지 못했어요.</p>}
      {state.s === "done" && items.length === 0 && <p className="cmt__msg">아직 댓글이 없어요. 첫 댓글을 남겨 보세요.</p>}

      {items.length > 0 && (
        <ul className="cmt__list">
          {items.map((c) => {
            const mineC = me?.id === c.userId;
            const canDelete = mineC || me?.id === post.userId;
            const isEditing = editing?.id === c.id;
            return (
              <li key={c.id} className="cmt__item">
                <Avatar c={c} />
                <div className="cmt__main">
                  <p className="cmt__hd">
                    <b>{c.nickname}</b>
                    {c.userId === post.userId && <span className="cmt__badge">글쓴이</span>}
                    <time dateTime={c.createdAt} title={new Date(c.createdAt).toLocaleString("ko-KR")}>{timeAgo(c.createdAt)}</time>
                    {c.editedAt && <small>(수정됨)</small>}
                  </p>
                  {isEditing ? (
                    <CommentBox
                      value={editing.body}
                      onChange={(body) => setEditing({ id: c.id, body })}
                      onSubmit={saveEdit}
                      onCancel={() => setEditing(null)}
                      busy={rowBusy === c.id}
                      label="댓글 고치기"
                      submitText="저장"
                      autoFocus
                    />
                  ) : (
                    <p className="cmt__body">{c.body}</p>
                  )}
                  {!isEditing && confirmDel === c.id ? (
                    <p className="cmt__confirm" role="group" aria-label="댓글 삭제 확인">
                      <span>이 댓글을 지울까요?</span>
                      <button type="button" className="btn btn--sm cmt__danger" onClick={() => remove(c.id)} disabled={rowBusy === c.id}>지우기</button>
                      <button type="button" className="btn btn--sm" onClick={() => setConfirmDel(null)}>취소</button>
                    </p>
                  ) : !isEditing && (mineC || canDelete) && (
                    <p className="cmt__acts">
                      {mineC && (
                        <button type="button" onClick={() => { setConfirmDel(null); setEditing({ id: c.id, body: c.body }); }}>
                          고치기
                        </button>
                      )}
                      {canDelete && (
                        <button type="button" onClick={() => { setEditing(null); setConfirmDel(c.id); }}>
                          지우기
                        </button>
                      )}
                    </p>
                  )}
                </div>
              </li>
            );
          })}
        </ul>
      )}

      {err && <p className="cmt__err" role="alert">{err}</p>}

      {me ? (
        <div className="cmt__write">
          <Avatar c={{ userId: me.id, avatar: me.avatar }} />
          <CommentBox value={draft} onChange={setDraft} onSubmit={send} busy={busy} label="댓글 쓰기" submitText="등록" />
        </div>
      ) : authEnabled && auth.status !== "loading" && provider ? (
        <div className="cmt__login">
          <p>로그인하면 댓글을 남길 수 있어요.</p>
          <button type="button" className={`acct__sso acct__sso--${provider.id}`} onClick={() => signIn(provider.id).catch(() => setErr("로그인 화면을 열지 못했어요"))}>
            {provider.label}로 로그인
          </button>
        </div>
      ) : null}
    </section>
  );
}
