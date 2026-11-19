"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { authEnabled, authStore, enabledProviders, PROVIDERS, signIn, signOut, type ProviderId } from "@/lib/supabase";

/** 소셜 로그인 버튼 모양 (각 회사 안내에 맞춘 색) */
function ProviderMark({ id }: { id: ProviderId }) {
  if (id === "kakao") {
    return <svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 3C6.5 3 2 6.6 2 11c0 2.8 1.8 5.3 4.6 6.7l-1 3.7c-.1.3.3.6.6.4l4.4-2.9c.5.1.9.1 1.4.1 5.5 0 10-3.6 10-8S17.5 3 12 3Z" /></svg>;
  }
  if (id === "naver") {
    return <svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M15.6 12.6 8.1 2H2v20h6.4V11.4L15.9 22H22V2h-6.4z" /></svg>;
  }
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path fill="#4285F4" d="M23.5 12.3c0-.8-.1-1.6-.2-2.3H12v4.5h6.5a5.6 5.6 0 0 1-2.4 3.6v3h3.9c2.3-2.1 3.5-5.2 3.5-8.8Z" />
      <path fill="#34A853" d="M12 24c3.2 0 6-1.1 7.9-2.9l-3.9-3c-1.1.7-2.4 1.2-4 1.2-3.1 0-5.7-2.1-6.7-4.9h-4v3.1A12 12 0 0 0 12 24Z" />
      <path fill="#FBBC05" d="M5.3 14.4a7.2 7.2 0 0 1 0-4.7V6.6h-4a12 12 0 0 0 0 10.8l4-3Z" />
      <path fill="#EA4335" d="M12 4.8c1.8 0 3.3.6 4.6 1.8l3.4-3.4A12 12 0 0 0 1.3 6.6l4 3.1C6.3 6.9 8.9 4.8 12 4.8Z" />
    </svg>
  );
}

/** 상단 바의 로그인 / 내 계정 메뉴. Supabase 설정이 없으면 아무것도 그리지 않는다 */
export function AccountMenu() {
  const auth = useSyncExternalStore(authStore.subscribe, authStore.getSnapshot, authStore.getServerSnapshot);
  const [open, setOpen] = useState(false);
  const [error, setError] = useState("");
  const boxRef = useRef<HTMLDivElement>(null);

  // 바깥을 누르거나 Esc를 누르면 닫기
  useEffect(() => {
    if (!open) return;
    const onDown = (e: PointerEvent) => { if (!boxRef.current?.contains(e.target as Node)) setOpen(false); };
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(false); };
    document.addEventListener("pointerdown", onDown);
    document.addEventListener("keydown", onKey);
    return () => { document.removeEventListener("pointerdown", onDown); document.removeEventListener("keydown", onKey); };
  }, [open]);

  if (!authEnabled || auth.status === "loading") return null;

  const providers = PROVIDERS.filter((p) => enabledProviders().includes(p.id));
  const me = auth.status === "in" ? auth.me : null;

  return (
    <div className="acct" ref={boxRef}>
      <button className={me ? "pill acct__me" : "pill"} type="button" aria-expanded={open} aria-haspopup="true" onClick={() => { setError(""); setOpen((o) => !o); }}>
        {me ? (
          me.avatar
            // eslint-disable-next-line @next/next/no-img-element -- 소셜 계정 프로필 사진 (외부 주소)
            ? <img className="acct__avatar" src={me.avatar} alt="" referrerPolicy="no-referrer" />
            : <span className="acct__avatar acct__avatar--text" aria-hidden="true">{me.nickname.slice(0, 1)}</span>
        ) : null}
        <span className={me ? "acct__name" : undefined}>{me ? me.nickname : "로그인"}</span>
      </button>

      {open && (
        <div className="acct__menu" role="dialog" aria-label={me ? "내 계정" : "로그인"}>
          {me ? (
            <>
              <p className="acct__hello"><b>{me.nickname}</b>님</p>
              <button type="button" className="acct__item" onClick={async () => { await signOut(); setOpen(false); }}>로그아웃</button>
            </>
          ) : (
            <>
              <p className="acct__title">로그인하고 일정을 저장하세요</p>
              <p className="acct__sub">어느 기기에서든 내 여행을 이어서 짜고, 게시판에 공유할 수 있어요.</p>
              {providers.map((p) => (
                <button
                  key={p.id}
                  type="button"
                  className={`acct__sso acct__sso--${p.id}`}
                  onClick={() => signIn(p.id).catch(() => setError("로그인 화면을 열지 못했습니다. 잠시 뒤 다시 시도해 주세요."))}
                >
                  <ProviderMark id={p.id} />{p.label}로 계속하기
                </button>
              ))}
              {error && <p className="acct__err" role="alert">{error}</p>}
            </>
          )}
        </div>
      )}
    </div>
  );
}
