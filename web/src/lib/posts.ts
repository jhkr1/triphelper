import { supabase } from "@/lib/supabase";
import { checklistFor, createTrip, dateParts, newId, nightsBetween, placeholderStart, addDays, type PlannerCountry } from "@/lib/trip-model";
import type { LatLng } from "@/types/destination";
import type { Place, Trip, TripDay } from "@/types/trip";

/*
 * 게시판: 일정의 사본을 게시글로 올린다.
 * - 메모·숙소·날짜는 올리는 사람이 고른 만큼만 사본에 넣는다 (예약번호·묵는 곳·여행 날짜가 남에게 보이지 않게)
 * - 공개 범위: public(게시판 + 링크) · unlisted(링크를 가진 사람만) · private(나만)
 * - 글 한 건은 공유 코드로 get_post()를 불러 읽는다 (링크 공유 글은 표에서 목록으로 읽을 수 없음)
 */

export type Visibility = "public" | "unlisted" | "private";

export const VISIBILITY: { id: Visibility; label: string; desc: string }[] = [
  { id: "public", label: "전체 공개", desc: "게시판 목록에 보이고, 누구나 볼 수 있어요" },
  { id: "unlisted", label: "링크 공유", desc: "목록에는 안 보이고, 링크를 받은 사람만 볼 수 있어요" },
  { id: "private", label: "나만 보기", desc: "나만 볼 수 있어요" },
];

export const TAGS = ["혼자", "친구", "커플", "가족", "아이와", "부모님과", "첫 여행", "맛집", "쇼핑", "자연", "역사·문화", "가성비", "뚜벅이", "렌터카"];
export const MAX_TAGS = 6;

/** 게시글에 넣는 장소 (메모는 고른 경우만) */
export type PostPlace = Pick<Place, "time" | "name" | "category" | "duration" | "location" | "wiki" | "image" | "memo">;

export interface PostData {
  v: 1;
  country: string;
  city: string;
  center: LatLng;
  nights: number;
  /** 정확한 날짜를 공개한 경우만 */
  start?: string;
  end?: string;
  days: { places: PostPlace[]; stay?: PostPlace }[];
}

export interface PublishOptions {
  title: string;
  summary: string;
  tags: string[];
  visibility: Visibility;
  /** 장소 메모 공개 */
  memo: boolean;
  /** 숙소 공개 */
  stay: boolean;
  /** 날짜: 정확히 · 달만 · 숨김 */
  dates: "exact" | "month" | "none";
}

export interface PostSummary {
  shareCode: string;
  title: string;
  country: string;
  city: string;
  nights: number;
  month: number | null;
  tags: string[];
  placeCount: number;
  preview: [number, number][][];
  publishedAt: string;
  nickname: string;
  avatar?: string;
}

export interface Post extends Omit<PostSummary, "preview" | "publishedAt"> {
  id: string;
  userId: string;
  summary: string;
  data: PostData;
  visibility: Visibility;
  publishedAt: string | null;
  updatedAt: string;
}

/** 내 일정에서 이미 올린 글 (다시 올리면 이 글을 고친다) */
export interface MyPostRef {
  id: string;
  shareCode: string;
  title: string;
  summary: string;
  tags: string[];
  visibility: Visibility;
}

/* ───────── 사본 만들기 ───────── */

const round5 = (n: number) => Math.round(n * 1e5) / 1e5;
const round3 = (n: number) => Math.round(n * 1e3) / 1e3;

function toPostPlace(p: Place, withMemo: boolean): PostPlace {
  return {
    time: p.time, name: p.name, category: p.category,
    ...(p.duration ? { duration: p.duration } : {}),
    ...(p.location ? { location: { lat: round5(p.location.lat), lng: round5(p.location.lng) } } : {}),
    ...(p.wiki ? { wiki: p.wiki } : {}),
    ...(p.image ? { image: p.image } : {}),
    ...(withMemo && p.memo?.trim() ? { memo: p.memo.trim().slice(0, 500) } : {}),
  };
}

export const defaultTitle = (t: Trip, countryName: string) => {
  const n = nightsBetween(t.start, t.end);
  return `${t.city || countryName} ${n ? `${n}박 ${n + 1}일` : "당일치기"}`;
};

export const placeCount = (t: Trip) => t.days.reduce((s, d) => s + d.places.length, 0);

/** 일정 → 게시글 칸들 (고른 개인정보만) */
export function buildPost(t: Trip, o: PublishOptions) {
  const nights = Math.max(0, Math.min(29, nightsBetween(t.start, t.end)));
  const lastNight = t.days.length - 2;
  const data: PostData = {
    v: 1, country: t.country, city: t.city, center: { lat: round5(t.center.lat), lng: round5(t.center.lng) }, nights,
    ...(o.dates === "exact" && !t.datesUnset ? { start: t.start, end: t.end } : {}),
    days: t.days.map((d, i) => ({
      places: d.places.map((p) => toPostPlace(p, o.memo)),
      ...(o.stay && d.stay && i <= lastNight ? { stay: toPostPlace(d.stay, false) } : {}),
    })),
  };
  // 목록 카드의 동선 그림: 날짜별 좌표 (소수 3자리 ≈ 100m, 날짜마다 최대 30곳)
  const preview = t.days.map((d) => d.places.filter((p) => p.location).slice(0, 30).map((p) => [round3(p.location!.lat), round3(p.location!.lng)]));
  return {
    title: o.title.trim().slice(0, 60),
    summary: o.summary.trim().slice(0, 500),
    country: t.country,
    city: t.city,
    nights,
    month: o.dates !== "none" && !t.datesUnset ? dateParts(t.start).m : null,
    tags: o.tags.slice(0, MAX_TAGS),
    place_count: placeCount(t),
    preview,
    data,
    visibility: o.visibility,
  };
}

/* ───────── DB ───────── */

const message = (e: unknown) => {
  const m = e && typeof e === "object" && "message" in e ? String((e as { message: unknown }).message) : String(e);
  return /100개|오늘은/.test(m) ? m : "잠시 뒤 다시 시도해 주세요.";
};

export async function findMyPostForTrip(tripId: string): Promise<MyPostRef | null> {
  const { data, error } = await supabase!.from("posts")
    .select("id, share_code, title, summary, tags, visibility").eq("trip_id", tripId).order("updated_at", { ascending: false }).limit(1).maybeSingle();
  if (error) throw error;
  return data ? { id: data.id, shareCode: data.share_code, title: data.title, summary: data.summary, tags: data.tags, visibility: data.visibility } : null;
}

/** 올리기 (existingId가 있으면 그 글을 새 내용으로 고친다). 공유 코드를 돌려준다 */
export async function publishPost(t: Trip, o: PublishOptions, existingId?: string): Promise<string> {
  const row = buildPost(t, o);
  const q = existingId
    ? supabase!.from("posts").update(row).eq("id", existingId).select("share_code").single()
    : supabase!.from("posts").insert({ ...row, trip_id: t.cloud?.id ?? null }).select("share_code").single();
  const { data, error } = await q;
  if (error) throw new Error(message(error));
  return data.share_code;
}

export async function setPostVisibility(id: string, visibility: Visibility) {
  const { error } = await supabase!.from("posts").update({ visibility }).eq("id", id);
  if (error) throw new Error(message(error));
}

export async function deletePost(id: string) {
  const { error } = await supabase!.from("posts").delete().eq("id", id);
  if (error) throw new Error(message(error));
}

type Row = {
  share_code: string; title: string; country: string; city: string; nights: number; month: number | null; tags: string[];
  place_count: number; preview: [number, number][][]; published_at: string; profiles: { nickname: string; avatar_url: string | null } | null;
};

export const NIGHT_FILTERS = [
  { id: "all", label: "전체", min: 0, max: 29 },
  { id: "short", label: "당일 · 1박", min: 0, max: 1 },
  { id: "mid", label: "2~3박", min: 2, max: 3 },
  { id: "long", label: "4박 이상", min: 4, max: 29 },
] as const;
export type NightFilter = (typeof NIGHT_FILTERS)[number]["id"];

export const PAGE_SIZE = 18;

/** 게시판 목록 (전체 공개 글만, 최신순). before: 이전 페이지 마지막 글의 게시 시각 */
export async function listPosts(opts: { country?: string; nights?: NightFilter; before?: string }): Promise<PostSummary[]> {
  const f = NIGHT_FILTERS.find((x) => x.id === (opts.nights ?? "all"))!;
  let q = supabase!.from("posts")
    .select("share_code, title, country, city, nights, month, tags, place_count, preview, published_at, profiles(nickname, avatar_url)")
    .eq("visibility", "public").gte("nights", f.min).lte("nights", f.max)
    .order("published_at", { ascending: false }).limit(PAGE_SIZE);
  if (opts.country) q = q.eq("country", opts.country);
  if (opts.before) q = q.lt("published_at", opts.before);
  const { data, error } = await q;
  if (error) throw error;
  return (data as unknown as Row[]).map((r) => ({
    shareCode: r.share_code, title: r.title, country: r.country, city: r.city, nights: r.nights, month: r.month, tags: r.tags,
    placeCount: r.place_count, preview: r.preview ?? [], publishedAt: r.published_at,
    nickname: r.profiles?.nickname ?? "여행자", ...(r.profiles?.avatar_url ? { avatar: r.profiles.avatar_url } : {}),
  }));
}

/** 공유 코드로 글 한 건 (전체 공개·링크 공유, 또는 내 글). 없거나 볼 수 없으면 null */
export async function getPost(code: string): Promise<Post | null> {
  const { data, error } = await supabase!.rpc("get_post", { code });
  if (error) throw error;
  const r = (data as Record<string, unknown>[] | null)?.[0];
  if (!r) return null;
  return {
    id: r.id as string, shareCode: r.share_code as string, userId: r.user_id as string, title: r.title as string, summary: r.summary as string,
    country: r.country as string, city: r.city as string, nights: r.nights as number, month: (r.month as number | null) ?? null,
    tags: (r.tags as string[]) ?? [], placeCount: r.place_count as number, data: r.data as PostData, visibility: r.visibility as Visibility,
    publishedAt: (r.published_at as string | null) ?? null, updatedAt: r.updated_at as string,
    nickname: (r.nickname as string) ?? "여행자", ...(r.avatar_url ? { avatar: r.avatar_url as string } : {}),
  };
}

/* ───────── 보기 · 가져오기 ───────── */

/** 지도·동선 그리기용 날짜 목록 (장소에 id를 붙임) */
export const postDays = (d: PostData): TripDay[] =>
  d.days.map((x) => ({
    places: x.places.map((p) => ({ ...p, id: newId() })),
    ...(x.stay ? { stay: { ...x.stay, id: newId() } } : {}),
  }));

/** 남의 동선을 내 새 일정으로 (날짜는 미정으로, 체크리스트는 나라 기본값) */
export function postToTrip(p: Post, country: PlannerCountry): Trip {
  const start = placeholderStart();
  const base = createTrip(country, p.data.city, p.data.center, start, addDays(start, p.data.nights));
  return { ...base, datesUnset: true, days: postDays(p.data), checklist: checklistFor(country) };
}

/** 게시판 주소 */
export const postUrl = (origin: string, code: string) => `${origin}/board/post/?c=${encodeURIComponent(code)}`;
