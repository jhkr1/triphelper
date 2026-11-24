"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useApp } from "@/components/providers/AppProviders";
import { AccountMenu } from "@/components/layout/AccountMenu";

export function BrandMark({ size = 34 }: { size?: number }) {
  return (
    <svg viewBox="0 0 64 64" width={size} height={size} aria-hidden="true">
      <defs>
        <linearGradient id="brand-grad" x1="0" y1="1" x2="1" y2="0">
          <stop offset="0" stopColor="#1d4ed8" />
          <stop offset="1" stopColor="#38bdf8" />
        </linearGradient>
      </defs>
      <ellipse cx="32" cy="60" rx="13" ry="2.6" fill="#000" opacity=".18" />
      <path d="M32 4C19.8 4 10 13.6 10 25.6 10 41 32 58 32 58s22-17 22-32.4C54 13.6 44.2 4 32 4Z" fill="url(#brand-grad)" />
      <path d="M20 27 43 15 35 38 31 30Z" fill="#fff" />
      <path d="M31 30 43 15" stroke="#2563eb" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

/** 상단 바: 로고(홈), 주 메뉴, 계정·설정 메뉴(다크 모드·언어 포함). solid는 지구본이 없는 페이지에서 배경을 깐다. */
export function TopBar({ solid = false }: { solid?: boolean }) {
  const { t } = useApp();
  const pathname = usePathname();

  return (
    <header className={solid ? "top top--solid" : "top"}>
      <Link className="brand" href="/" aria-label="TripHelper">
        <BrandMark />
        <span className="brand__word"><i>trip</i>helper</span>
      </Link>
      <div className="top__actions">
        <nav className="top__nav" aria-label="주 메뉴">
          <Link href="/trip/" aria-current={pathname.startsWith("/trip") ? "page" : undefined}>{t("nav.trip")}</Link>
          <Link href="/board/" aria-current={pathname.startsWith("/board") ? "page" : undefined}>{t("nav.board")}</Link>
        </nav>
        <AccountMenu />
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="foot footer">
      {/* 연도는 빌드할 때 정해진다 (해가 바뀐 직후 열면 브라우저 연도와 다를 수 있어 경고를 끈다) */}
      <p suppressHydrationWarning>© {new Date().getFullYear()} TripHelper. 여행의 모든 순간을 함께합니다.</p>
      <p className="foot__links"><Link href="/privacy/">개인정보처리방침</Link></p>
    </footer>
  );
}
