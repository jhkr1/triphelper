"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useApp } from "@/components/providers/AppProviders";
import { Icon } from "@/components/ui/Icon";

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

/** 상단 바: 로고(홈), 다크 모드, 언어 전환. solid는 지구본이 없는 페이지에서 배경을 깐다. */
export function TopBar({ solid = false }: { solid?: boolean }) {
  const { lang, setLang, t, theme, toggleTheme } = useApp();
  const pathname = usePathname();
  const dark = theme === "dark";
  const themeLabel = dark ? t("controls.lightMode") : t("controls.darkMode");

  return (
    <header className={solid ? "top top--solid" : "top"}>
      <Link className="brand" href="/" aria-label="TripHelper">
        <BrandMark />
        <span className="brand__word"><i>trip</i>helper</span>
      </Link>
      <div className="top__actions">
        <nav className="top__nav" aria-label="주 메뉴">
          <Link href="/trip/" aria-current={pathname.startsWith("/trip") ? "page" : undefined}>{t("nav.trip")}</Link>
        </nav>
        <button className="pill" type="button" onClick={toggleTheme} aria-label={themeLabel}>
          <Icon name={dark ? "sun" : "moon"} />
          <span className="pill__text">{themeLabel}</span>
        </button>
        <button className="pill" type="button" onClick={() => setLang(lang === "ko" ? "en" : "ko")}>
          <Icon name="globe" />
          <span className="pill__text">{lang === "ko" ? t("controls.languageEn") : t("controls.language")}</span>
        </button>
      </div>
    </header>
  );
}

export function Footer() {
  const { t } = useApp();
  return (
    <footer className="foot footer">
      <p>{t("footer.text")}</p>
    </footer>
  );
}
