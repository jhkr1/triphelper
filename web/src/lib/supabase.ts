import type { SupabaseClient, User } from "@supabase/supabase-js";

/*
 * Supabase (로그인 · 일정 저장 · 게시판). 브라우저에서 바로 부르는 정적 사이트 구조라 공개 키(publishable key)만 쓴다.
 * 권한은 DB의 행 단위 보안(RLS)이 막는다 → supabase/migrations/*.sql
 * 값은 web/.env.local (개발), Netlify 환경 변수 (배포)에 넣는다. 비어 있으면 로그인 기능만 숨기고 나머지는 그대로 동작.
 *
 * 라이브러리(압축 후 약 70KB)는 처음부터 싣지 않고 필요할 때 불러온다:
 * 저장된 로그인 정보가 있을 때 · 로그인 버튼을 누를 때 · 게시판처럼 DB가 필요한 화면에서.
 * 로그인한 적 없는 방문자는 메인·나라 페이지에서 받지 않는다.
 */
const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const key = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;

export const authEnabled = Boolean(url && key);

let client: Promise<SupabaseClient | null> | null = null;
/** 로그인 정보 없이 시작했다가 나중에 라이브러리를 받게 되면(게시판 등) 그때 로그인 상태 살피기를 붙인다 */
let pendingListen: ((c: SupabaseClient | null) => void) | null = null;

/** Supabase 클라이언트 (처음 부를 때 라이브러리를 받는다). 설정이 없으면 null */
export function getSupabase(): Promise<SupabaseClient | null> {
  if (!client) {
    client = url && key && typeof window !== "undefined"
      ? import("@supabase/supabase-js").then(({ createClient }) =>
          createClient(url, key, { auth: { flowType: "pkce", detectSessionInUrl: true, persistSession: true } }))
      : Promise.resolve(null);
    client.then((c) => { const f = pendingListen; pendingListen = null; f?.(c); }, () => {});
  }
  return client;
}

/** DB를 쓰는 함수용: 설정이 없으면 오류 */
export async function db(): Promise<SupabaseClient> {
  const c = await getSupabase();
  if (!c) throw new Error("로그인 기능이 꺼져 있어요");
  return c;
}

/** supabase-js가 로그인 정보를 저장하는 이름 (sb-<프로젝트>-auth-token) */
const STORAGE_KEY = url ? `sb-${new URL(url).hostname.split(".")[0]}-auth-token` : "";

/** 이 브라우저에 로그인 정보가 남아 있거나, 소셜 로그인에서 막 돌아온 참인지 (라이브러리 없이 확인) */
function mayBeSignedIn() {
  if (new URLSearchParams(window.location.search).has("code")) return true;
  try { return Boolean(localStorage.getItem(STORAGE_KEY)); } catch { return false; }
}

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
  const supabase = await getSupabase();
  if (!supabase) return;
  // 글 보기(?c=코드)처럼 주소의 검색어가 있어야 하는 화면으로 돌아오도록 함께 넘긴다 (#은 빼고)
  const redirectTo = window.location.origin + window.location.pathname + window.location.search;
  const { error } = await supabase.auth.signInWithOAuth({
    // 네이버는 Supabase 기본 제공이 아니라 직접 등록한 공급자(custom:naver)
    provider: (provider === "naver" ? "custom:naver" : provider) as "kakao",
    options: {
      redirectTo,
      // 카카오에는 닉네임만 요청 (이메일은 비즈 앱 전용, 프로필 사진은 개인정보라 받지 않음)
      ...(provider === "kakao" ? { scopes: "profile_nickname" } : {}),
    },
  });
  if (error) throw error;
}

export async function signOut() {
  await (await getSupabase())?.auth.signOut();
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

/** 닉네임·사진은 DB 프로필에서만 (소셜 계정 사진은 쓰지 않음, 없으면 기본 그림) */
async function loadMe(u: User) {
  const { data } = await (await db()).from("profiles").select("nickname, avatar_url").eq("id", u.id).maybeSingle();
  const avatar = data?.avatar_url;
  setSnapshot({ status: "in", me: { id: u.id, nickname: data?.nickname ?? "여행자", ...(avatar ? { avatar } : {}) } });
}

function start() {
  if (started) return;
  started = true;
  if (!authEnabled || typeof window === "undefined") { snapshot = OUT; return; }
  // 로그인한 적이 없으면 라이브러리를 받지 않고 바로 '로그아웃 상태'
  // (다른 화면이 DB를 쓰려고 라이브러리를 받으면 그때 로그인 상태를 이어서 살핀다)
  if (!mayBeSignedIn()) snapshot = OUT;
  const listen = (supabase: SupabaseClient | null) => {
    if (!supabase) { setSnapshot(OUT); return; }
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
  };
  if (snapshot !== OUT) getSupabase().then(listen, () => setSnapshot(OUT));
  else if (client) client.then(listen, () => {});
  else pendingListen = listen;
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
