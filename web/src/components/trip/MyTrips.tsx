"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import { syncStatusStore, type SyncStatus } from "@/lib/trip-sync";

/** "방금" · "3분 전" · "2시간 전" · "11.19" */
function ago(iso: string) {
  const s = (Date.now() - Date.parse(iso)) / 1000;
  if (s < 60) return "방금";
  if (s < 3600) return `${Math.floor(s / 60)}분 전`;
  if (s < 86400) return `${Math.floor(s / 3600)}시간 전`;
  const d = new Date(iso);
  return `${d.getMonth() + 1}.${d.getDate()}`;
}

/** 저장 상태 (제목 아래 작은 글씨) */
export function SyncBadge() {
  const s: SyncStatus = useSyncExternalStore(syncStatusStore.subscribe, syncStatusStore.getSnapshot, syncStatusStore.getServerSnapshot);
  // "방금 저장" 문구가 오래 남지 않도록 1분마다 다시 그림
  const [, tick] = useState(0);
  useEffect(() => { const t = window.setInterval(() => tick((n) => n + 1), 60_000); return () => window.clearInterval(t); }, []);
  if (s.state === "off") return null;
  const text = {
    idle: "장소를 담으면 자동으로 저장돼요",
    pending: "저장 대기 중…",
    saving: "저장 중…",
    saved: s.state === "saved" ? `저장됨 · ${ago(s.at)}` : "",
    error: s.state === "error" ? s.message : "",
  }[s.state];
  return <span className={`sync sync--${s.state}`} role="status" aria-live="polite"><i className="sync__dot" aria-hidden="true" />{text}</span>;
}
