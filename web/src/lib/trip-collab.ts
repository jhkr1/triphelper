import { db } from "@/lib/supabase";
import { withBase } from "@/lib/site";
import type { TripRole } from "@/types/trip";

/*
 * 함께 짜는 일정: 초대 링크 · 멤버 · 활동 기록.
 * 권한은 DB가 막는다 (supabase/migrations/20261120050000_trip_members.sql)
 */

export type MemberRole = Exclude<TripRole, "owner">;

export const ROLE_LABEL: Record<TripRole, string> = { owner: "주인", editor: "함께 편집", viewer: "보기만" };

export interface Member {
  userId: string;
  role: TripRole;
  nickname: string;
  avatar?: string;
}

export interface Invite {
  code: string;
  role: MemberRole;
  expiresAt: string;
}

export interface Activity {
  id: number;
  userId: string;
  text: string;
  createdAt: string;
  nickname: string;
  avatar?: string;
}

const message = (e: unknown) => {
  const m = e && typeof e === "object" && "message" in e ? String((e as { message: unknown }).message) : String(e);
  return /만료|10명|로그인/.test(m) ? m : "잠시 뒤 다시 시도해 주세요.";
};

type Profile = { nickname: string; avatar_url: string | null } | null;
const person = (p: Profile) => ({ nickname: p?.nickname ?? "여행자", ...(p?.avatar_url ? { avatar: p.avatar_url } : {}) });

/** 주인 + 멤버 (주인이 맨 앞) */
export async function listMembers(tripId: string): Promise<Member[]> {
  const sb = await db();
  const [owner, members] = await Promise.all([
    sb.from("trips").select("user_id, profiles!trips_user_id_fkey(nickname, avatar_url)").eq("id", tripId).single(),
    sb.from("trip_members").select("user_id, role, profiles(nickname, avatar_url)").eq("trip_id", tripId).order("joined_at"),
  ]);
  if (owner.error) throw owner.error;
  if (members.error) throw members.error;
  const o = owner.data as unknown as { user_id: string; profiles: Profile };
  return [
    { userId: o.user_id, role: "owner", ...person(o.profiles) },
    ...(members.data as unknown as { user_id: string; role: MemberRole; profiles: Profile }[]).map((m) => ({ userId: m.user_id, role: m.role, ...person(m.profiles) })),
  ];
}

export async function setMemberRole(tripId: string, userId: string, role: MemberRole) {
  const { error } = await (await db()).from("trip_members").update({ role }).eq("trip_id", tripId).eq("user_id", userId);
  if (error) throw new Error(message(error));
}

/** 주인이 멤버를 내보내거나, 멤버가 스스로 나간다 */
export async function removeMember(tripId: string, userId: string) {
  const { error } = await (await db()).from("trip_members").delete().eq("trip_id", tripId).eq("user_id", userId);
  if (error) throw new Error(message(error));
}

export async function listInvites(tripId: string): Promise<Invite[]> {
  const { data, error } = await (await db()).from("trip_invites").select("code, role, expires_at")
    .eq("trip_id", tripId).gt("expires_at", new Date().toISOString()).order("created_at", { ascending: false });
  if (error) throw error;
  return (data ?? []).map((r) => ({ code: r.code, role: r.role as MemberRole, expiresAt: r.expires_at }));
}

export async function createInvite(tripId: string, role: MemberRole): Promise<Invite> {
  const { data, error } = await (await db()).from("trip_invites").insert({ trip_id: tripId, role }).select("code, role, expires_at").single();
  if (error) throw new Error(message(error));
  return { code: data.code, role: data.role as MemberRole, expiresAt: data.expires_at };
}

export async function deleteInvite(code: string) {
  const { error } = await (await db()).from("trip_invites").delete().eq("code", code);
  if (error) throw new Error(message(error));
}

/** 초대 받기 → 일정 id */
export async function acceptInvite(code: string): Promise<string> {
  const { data, error } = await (await db()).rpc("accept_invite", { invite: code });
  if (error) throw new Error(message(error));
  return data as string;
}

export const inviteUrl = (origin: string, code: string) => `${origin}${withBase("/trip/")}?invite=${encodeURIComponent(code)}`;

export async function listActivity(tripId: string, limit = 30): Promise<Activity[]> {
  const { data, error } = await (await db()).from("trip_activity").select("id, user_id, text, created_at, profiles(nickname, avatar_url)")
    .eq("trip_id", tripId).order("created_at", { ascending: false }).limit(limit);
  if (error) throw error;
  return (data as unknown as { id: number; user_id: string; text: string; created_at: string; profiles: Profile }[])
    .map((r) => ({ id: r.id, userId: r.user_id, text: r.text, createdAt: r.created_at, ...person(r.profiles) }));
}

/** 새 활동이 생기면 알림 (돌려준 함수를 부르면 그만 받음) */
export function watchActivity(tripId: string, onNew: () => void): () => void {
  let stop = () => {};
  let stopped = false;
  db().then((sb) => {
    if (stopped) return;
    const ch = sb.channel(`activity-${tripId}`)
      .on("postgres_changes", { event: "INSERT", schema: "public", table: "trip_activity", filter: `trip_id=eq.${tripId}` }, onNew)
      .subscribe();
    stop = () => { sb.removeChannel(ch); };
  }).catch(() => {});
  return () => { stopped = true; stop(); };
}
