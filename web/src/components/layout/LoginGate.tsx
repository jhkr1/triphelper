"use client";

import { useState, useSyncExternalStore, type ReactNode } from "react";
import { authEnabled, authStore, enabledProviders, PROVIDERS, signIn } from "@/lib/supabase";

interface Props {
  title: string;
  desc: string;
  /** 일정 공유 링크(#z= · 예전 #t=)로 열었으면 로그인 없이 보여 준다 */
  allowSharedLink?: boolean;
  children: ReactNode;
}

/** 로그인한 사람에게만 children을 보여 주고, 아니면 로그인 안내를 보여 준다 */
export function LoginGate({ title, desc, allowSharedLink, children }: Props) {
  const auth = useSyncExternalStore(authStore.subscribe, authStore.getSnapshot, authStore.getServerSnapshot);
  // 공유 링크 표시(#z= 등)는 열자마자 주소에서 지워지므로 처음 값을 기억해 둔다
  const [guest] = useState(() => Boolean(allowSharedLink) && typeof window !== "undefined" && /^#(z|t)=/.test(window.location.hash));
  const [err, setErr] = useState("");

  if (!authEnabled) return <>{children}</>;
  // 첫 화면(서버에서 만든 HTML과 맞춰야 함)은 로그인 상태를 모르니 '불러오는 중'
  if (auth.status === "loading") return <p className="gate__wait">불러오는 중…</p>;
  if (auth.status === "in" || guest) return <>{children}</>;

  const providers = PROVIDERS.filter((p) => enabledProviders().includes(p.id));
  return (
    <section className="gate" aria-labelledby="gate-title">
      <h1 id="gate-title">{title}</h1>
      <p>{desc}</p>
      <div className="gate__btns">
        {providers.map((p) => (
          <button
            key={p.id}
            type="button"
            className={`acct__sso acct__sso--${p.id}`}
            onClick={() => signIn(p.id).catch(() => setErr("로그인 화면을 열지 못했어요. 잠시 뒤 다시 시도해 주세요."))}
          >
            {p.label}로 로그인
          </button>
        ))}
      </div>
      {err && <p className="gate__err" role="alert">{err}</p>}
      <small>친구에게 받은 일정·게시글 링크는 로그인 없이 볼 수 있어요.</small>
    </section>
  );
}
