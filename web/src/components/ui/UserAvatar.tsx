import { useId } from "react";

/*
 * 프로필 그림. 소셜 계정 사진은 쓰지 않고, 사용자마다 정해진 '여행 친구' 캐릭터를 보여 준다.
 * 둥근 얼굴 + 모자(버킷햇 · 비니 · 모자 · 밀짚모자 · 탐험모) + 가끔 선글라스, 색 8가지.
 * 같은 사람은 어디서나 같은 그림 (사용자 id로 고른다). src는 나중에 직접 올린 사진용.
 */

/** 캐릭터 몸 색과 그 배경(옅은 색) */
const BODY = [
  ["#3b82f6", "#dbeafe"], ["#10b981", "#d1fae5"], ["#f59e0b", "#fef3c7"], ["#8b5cf6", "#ede9fe"],
  ["#f43f5e", "#ffe4e6"], ["#0ea5e9", "#e0f2fe"], ["#ec4899", "#fce7f3"], ["#14b8a6", "#ccfbf1"],
] as const;
/** 모자 색 (몸 색과 겹치지 않게 고른다) */
const HAT = ["#1e3a8a", "#fde68a", "#ffffff", "#ef4444", "#065f46", "#f97316"];
const INK = "#1f2937";

/** 문자열 → 0 이상 정수 (FNV-1a) */
function hash(s: string) {
  let h = 2166136261;
  for (let i = 0; i < s.length; i++) h = Math.imul(h ^ s.charCodeAt(i), 16777619);
  return h >>> 0;
}

function Hat({ kind, color }: { kind: number; color: string }) {
  const line = color === "#ffffff" ? { stroke: "#e2e8f0", strokeWidth: 1 } : {};
  switch (kind) {
    case 0: // 버킷햇
      return (
        <g fill={color} {...line}>
          <ellipse cx="32" cy="25" rx="21" ry="4.8" />
          <path d="M20.5 25c.4-7.6 5.2-12 11.5-12s11.1 4.4 11.5 12Z" />
        </g>
      );
    case 1: // 방울 비니
      return (
        <g fill={color} {...line}>
          <path d="M15.6 28a16.4 15 0 0 1 32.8 0Z" />
          <rect x="14.6" y="25.4" width="34.8" height="5.4" rx="2.7" />
          <circle cx="32" cy="11.6" r="3.8" />
        </g>
      );
    case 2: // 챙 모자
      return (
        <g fill={color} {...line}>
          <path d="M16.4 28a15.6 14.4 0 0 1 31.2 0Z" />
          <path d="M40 25.6h11.6a2 2 0 0 1 .2 4L40 30Z" />
          <circle cx="32" cy="14" r="1.6" fill={INK} opacity=".25" stroke="none" />
        </g>
      );
    case 3: // 밀짚모자
      return (
        <g {...line}>
          <ellipse cx="32" cy="25.5" rx="25" ry="5.2" fill={color} />
          <path d="M22 25.5c.2-6.6 4.4-10.6 10-10.6s9.8 4 10 10.6Z" fill={color} />
          <rect x="22.2" y="21.4" width="19.6" height="3.4" rx="1" fill="#f43f5e" stroke="none" />
        </g>
      );
    default: // 탐험모 (사파리)
      return (
        <g fill={color} {...line}>
          <path d="M11 27.5c5-2.2 12.4-3.2 21-3.2s16 1 21 3.2c-5.6 1.4-12.8 2-21 2s-15.4-.6-21-2Z" />
          <path d="M19.6 25.4C20 17.4 25 12.6 32 12.6s12 4.8 12.4 12.8Z" />
          <rect x="19.8" y="22" width="24.4" height="2.6" rx="1" fill={INK} opacity=".18" stroke="none" />
        </g>
      );
  }
}

interface Props {
  /** 사용자 id (그림·색을 고르는 기준) */
  id: string;
  /** 직접 올린 사진 (없으면 기본 그림) */
  src?: string;
  size?: number;
  className?: string;
}

export function UserAvatar({ id, src, size = 28, className }: Props) {
  const clip = useId();
  const cls = className ? `uav ${className}` : "uav";
  if (src) {
    // eslint-disable-next-line @next/next/no-img-element -- 사용자가 올린 프로필 사진
    return <img className={cls} src={src} alt="" width={size} height={size} referrerPolicy="no-referrer" />;
  }
  const h = hash(id);
  const [body, bg] = BODY[h % BODY.length];
  const hat = Math.floor(h / 8) % 5;
  let hatColor = HAT[Math.floor(h / 40) % HAT.length];
  // 빨강·분홍 몸에 빨간 모자는 묻히니 남색으로
  if (hatColor === "#ef4444" && (body === "#f43f5e" || body === "#ec4899")) hatColor = HAT[0];
  const shades = Math.floor(h / 240) % 4 === 0; // 넷 중 하나는 선글라스

  return (
    <svg className={cls} viewBox="0 0 64 64" width={size} height={size} aria-hidden="true" focusable="false">
      <defs><clipPath id={clip}><circle cx="32" cy="32" r="32" /></clipPath></defs>
      <g clipPath={`url(#${clip})`}>
        <rect width="64" height="64" fill={bg} />
        {/* 몸과 가방 끈 */}
        <ellipse cx="32" cy="66" rx="20" ry="13" fill={body} />
        <path d="M22.5 55.5 26 64M41.5 55.5 38 64" stroke={INK} strokeOpacity=".25" strokeWidth="2.4" strokeLinecap="round" />
        {/* 얼굴 */}
        <circle cx="32" cy="38" r="17" fill={body} />
        <ellipse cx="32" cy="42" rx="11.5" ry="9.5" fill="#fff" opacity=".22" />
        {shades ? (
          <g fill={INK}>
            <rect x="21.4" y="34" width="9.4" height="6.6" rx="3" />
            <rect x="33.2" y="34" width="9.4" height="6.6" rx="3" />
            <rect x="30" y="35.4" width="4" height="1.6" rx=".8" />
            <rect x="23" y="35.2" width="3" height="1.4" rx=".7" fill="#fff" opacity=".55" />
          </g>
        ) : (
          <g fill={INK}>
            <ellipse cx="26" cy="37.6" rx="2.3" ry="2.7" />
            <ellipse cx="38" cy="37.6" rx="2.3" ry="2.7" />
            <circle cx="26.8" cy="36.6" r=".8" fill="#fff" />
            <circle cx="38.8" cy="36.6" r=".8" fill="#fff" />
          </g>
        )}
        <ellipse cx="21.6" cy="43.4" rx="3.2" ry="2" fill="#ff7a93" opacity=".55" />
        <ellipse cx="42.4" cy="43.4" rx="3.2" ry="2" fill="#ff7a93" opacity=".55" />
        <path d="M29.2 43.6q2.8 2.8 5.6 0" fill="none" stroke={INK} strokeWidth="1.7" strokeLinecap="round" />
        <Hat kind={hat} color={hatColor} />
      </g>
    </svg>
  );
}
