// 구글 지도 '공유' 짧은 링크(maps.app.goo.gl/…)를 열어 넘어가는 주소를 돌려준다.
// 브라우저는 다른 사이트의 넘김 주소를 읽을 수 없어서(CORS) 이 함수가 대신 연다. 위치 계산은 브라우저가 한다.
//
// 지키는 것
// - 구글 지도 짧은 링크만 받는다 (아무 주소나 대신 여는 통로가 되지 않게). 넘김도 구글 주소로만 따라간다.
// - 로그인한 사람만 (요청의 로그인 토큰을 Supabase 인증 서버에 확인)
// - 우리 사이트에서만 부를 수 있게 (CORS)
//
// 올리기: sh scripts/fn-deploy.sh

const ALLOWED_ORIGINS = ["https://jhkr1.github.io", "http://localhost:3000"];

/** 받는 링크: 휴대폰 공유 링크 */
const isShortLink = (u: URL) =>
  u.protocol === "https:" && (u.hostname === "maps.app.goo.gl" || (u.hostname === "goo.gl" && u.pathname.startsWith("/maps/")));

/** 따라가도 되는 넘김: 구글 주소만 */
const isGoogle = (u: URL) =>
  u.protocol === "https:" && (isShortLink(u) || /^(www\.|maps\.|consent\.)?google\.[a-z.]{2,6}$/.test(u.hostname));

/** 구글 지도 주소에 닿았는지 (여기서 멈추고 돌려준다) */
const isMapPage = (u: URL) => /(^|\.)google\.[a-z.]+$/.test(u.hostname) && u.hostname !== "consent.google.com" &&
  (u.pathname.startsWith("/maps") || u.hostname.startsWith("maps."));

function cors(req: Request): Record<string, string> {
  const origin = req.headers.get("origin") ?? "";
  return {
    "Access-Control-Allow-Origin": ALLOWED_ORIGINS.includes(origin) ? origin : ALLOWED_ORIGINS[0],
    "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    Vary: "Origin",
  };
}

const json = (req: Request, status: number, body: unknown) =>
  new Response(JSON.stringify(body), { status, headers: { ...cors(req), "Content-Type": "application/json" } });

/** 로그인한 사람인지: 요청의 토큰으로 Supabase 인증 서버에 물어본다 */
async function signedIn(req: Request): Promise<boolean> {
  const auth = req.headers.get("authorization") ?? "";
  const apikey = req.headers.get("apikey") ?? "";
  const base = Deno.env.get("SUPABASE_URL");
  if (!base || !auth.startsWith("Bearer ") || !apikey) return false;
  const r = await fetch(`${base}/auth/v1/user`, { headers: { Authorization: auth, apikey } });
  return r.ok;
}

/** 넘김을 최대 5번까지 따라가 구글 지도 주소를 찾는다 */
async function resolve(start: URL): Promise<string | null> {
  let cur = start;
  for (let hop = 0; hop < 5; hop++) {
    const r = await fetch(cur, { redirect: "manual", signal: AbortSignal.timeout(5000), headers: { "Accept-Language": "ko" } });
    await r.body?.cancel();
    const loc = r.headers.get("location");
    if (r.status < 300 || r.status >= 400 || !loc) return null;
    let next = new URL(loc, cur);
    // 쿠키 동의 화면(유럽 등)으로 넘어가면 원래 가려던 주소(continue)를 꺼낸다
    if (next.hostname === "consent.google.com") {
      const cont = next.searchParams.get("continue");
      if (!cont) return null;
      next = new URL(cont);
    }
    if (!isGoogle(next)) return null;
    if (isMapPage(next)) return next.toString();
    cur = next;
  }
  return null;
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: cors(req) });
  if (req.method !== "POST") return json(req, 405, { error: "method" });
  if (!(await signedIn(req))) return json(req, 401, { error: "login" });

  let link: URL;
  try {
    const { url } = await req.json();
    link = new URL(String(url).trim());
  } catch {
    return json(req, 400, { error: "url" });
  }
  if (!isShortLink(link)) return json(req, 400, { error: "url" });

  try {
    const url = await resolve(link);
    return url ? json(req, 200, { url }) : json(req, 422, { error: "resolve" });
  } catch {
    return json(req, 502, { error: "fetch" });
  }
});
