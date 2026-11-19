import { createClient, type SupabaseClient, type User } from "@supabase/supabase-js";

/*
 * Supabase (로그인 · 일정 저장 · 게시판). 브라우저에서 바로 부르는 정적 사이트 구조라 공개 키(publishable key)만 쓴다.
 * 권한은 DB의 행 단위 보안(RLS)이 막는다 → supabase/migrations/*.sql
 * 값은 web/.env.local (개발), Netlify 환경 변수 (배포)에 넣는다. 비어 있으면 로그인 기능만 숨기고 나머지는 그대로 동작.
 */
const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const key = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;

export const supabase: SupabaseClient | null =
  url && key && typeof window !== "undefined"
    ? createClient(url, key, { auth: { flowType: "pkce", detectSessionInUrl: true, persistSession: true } })
    : null;

export const authEnabled = Boolean(url && key);

/* ───────── 로그인 방식 ───────── */

export type ProviderId = "kakao" | "google" | "naver";

export const PROVIDERS: { id: ProviderId; label: string }[] = [
  { id: "kakao", label: "카카오" },
  { id: "google", label: "구글" },
  { id: "naver", label: "네이버" },
];

/** 대시보드에서 설정을 마친 방식만 보여 준다 (예: NEXT_PUBLIC_AUTH_PROVIDERS=kakao,google) */
export const enabledProviders = (): ProviderId[] =>
  (process.env.NEXT_PUBLIC_AUTH_PROVIDERS ?? "kakao")
    .split(",").map((s) => s.trim()).filter((s): s is ProviderId => PROVIDERS.some((p) => p.id === s));

/** 소셜 로그인 화면으로 이동. 돌아오면 지금 페이지로 온다 */
export async function signIn(provider: ProviderId) {
  if (!supabase) return;
  const redirectTo = window.location.origin + window.location.pathname;
  const { error } = await supabase.auth.signInWithOAuth({
    // 네이버는 Supabase 기본 제공이 아니라 직접 등록한 공급자(custom:naver)
    provider: (provider === "naver" ? "custom:naver" : provider) as "kakao",
    options: {
      redirectTo,
      // 카카오 이메일은 비즈 앱만 받을 수 있어 닉네임·사진만 요청 (Supabase에서 'Allow users without an email' 켜기)
      ...(provider === "kakao" ? { scopes: "profile_nickname profile_image" } : {}),
    },
  });
  if (error) throw error;
}

export async function signOut() {
  await supabase?.auth.signOut();
}

/* ───────── 로그인 상태 (React에서 useSyncExternalStore로 읽음) ───────── */

export interface Me {
  id: string;
  nickname: string;
  avatar?: string;
}

export type AuthSnapshot = { status: "loading" } | { status: "out" } | { status: "in"; me: Me };

const LOADING: AuthSnapshot = { status: "loading" };
const OUT: AuthSnapshot = { status: "out" };
let snapshot: AuthSnapshot = LOADING;
const listeners = new Set<() => void>();
let started = false;

function setSnapshot(next: AuthSnapshot) {
  if (JSON.stringify(next) === JSON.stringify(snapshot)) return;
  snapshot = next;
  listeners.forEach((l) => l());
}

/** 닉네임은 DB 프로필(가입할 때 정해진 무작위 "~한 여행자")에서, 사진이 없으면 소셜 계정 사진 */
async function loadMe(u: User) {
  const { data } = await supabase!.from("profiles").select("nickname, avatar_url").eq("id", u.id).maybeSingle();
  const m = u.user_metadata ?? {};
  const avatar = data?.avatar_url ?? [m.avatar_url, m.picture].find((x) => typeof x === "string" && x);
  setSnapshot({ status: "in", me: { id: u.id, nickname: data?.nickname ?? "여행자", ...(avatar ? { avatar } : {}) } });
}

function start() {
  if (started) return;
  started = true;
  if (!supabase) { snapshot = OUT; return; }
  supabase.auth.onAuthStateChange((event, session) => {
    if (!session?.user) setSnapshot(OUT);
    // 이 콜백 안에서 바로 DB를 부르면 인증 잠금과 엉켜 멈출 수 있어(Supabase 안내) 다음 차례로 미룬다
    else if (snapshot.status !== "in" || snapshot.me.id !== session.user.id) {
      const user = session.user;
      setTimeout(() => { loadMe(user).catch(() => setSnapshot({ status: "in", me: { id: user.id, nickname: "여행자" } })); }, 0);
    }
    // 소셜 로그인에서 돌아온 주소의 ?code= 를 지운다
    if (event === "SIGNED_IN" && new URLSearchParams(window.location.search).has("code")) {
      const u = new URL(window.location.href);
      u.searchParams.delete("code");
      history.replaceState(null, "", u.pathname + u.search + u.hash);
    }
  });
}

export const authStore = {
  subscribe(onChange: () => void) {
    start();
    listeners.add(onChange);
    return () => { listeners.delete(onChange); };
  },
  getSnapshot: (): AuthSnapshot => snapshot,
  getServerSnapshot: (): AuthSnapshot => LOADING,
};
