"use client";

// DARK MODE OFF: 다크 모드를 켜면 아래 두 줄을 이것으로 바꾼다
// import { createContext, useCallback, useContext, useLayoutEffect, useMemo, useSyncExternalStore, type ReactNode } from "react";
// import { createLocalSetting } from "@/lib/local-setting";
import { createContext, useContext, useMemo, type ReactNode } from "react";
import { translate, type Lang, type MessageKey } from "@/i18n/messages";

export type Theme = "light" | "dark";

interface AppContextValue {
  /** 사이트는 한국어 전용 (예전 영어 번역 코드가 참고하는 값이라 남겨 둠) */
  lang: Lang;
  t: (key: MessageKey, params?: Record<string, string | number>) => string;
  theme: Theme;
  toggleTheme: () => void;
}

const AppContext = createContext<AppContextValue | null>(null);

// 한국어 전용 사이트: 예전에 English를 골라 저장해 둔 사람도 한국어로 보인다
const LANG: Lang = "ko";
// DARK MODE OFF — 다크 모드는 꺼 둠 (2026-11-20): 지도 가독성과 파란 강조색이 어두운 바탕과 맞지 않아서. 다시 켜려면 'DARK MODE OFF' 주석을 찾아 푼다.
// const themeSetting = createLocalSetting<Theme>("theme", "light", ["light", "dark"]);
const THEME: Theme = "light";
const noop = () => {};

/**
 * 테마(라이트/다크)와 문구(t)를 앱 전체에 제공한다. 언어는 한국어로 고정.
 * 서버에서 미리 그린 HTML은 라이트 기준이고, 저장된 테마는 브라우저에서 적용한다.
 * (테마는 layout의 인라인 스크립트가 그리기 전에 먼저 적용해 깜빡임을 막는다)
 */
export function AppProviders({ children }: { children: ReactNode }) {
  // DARK MODE OFF: 늘 밝은 모드. 다크 모드를 켜면 아래 주석을 풀고 이 두 줄을 지운다
  const theme = THEME;
  const toggleTheme = noop;
  // const theme = useSyncExternalStore(themeSetting.subscribe, themeSetting.getSnapshot, themeSetting.getServerSnapshot);
  //
  // // 개발 모드(Strict Mode)에서 다시 마운트될 때도 테마 속성을 유지
  // useLayoutEffect(() => {
  //   document.documentElement.setAttribute("data-theme", theme);
  // }, [theme]);
  //
  // const toggleTheme = useCallback(() => themeSetting.set(themeSetting.getSnapshot() === "dark" ? "light" : "dark"), []);

  const value = useMemo<AppContextValue>(
    () => ({ lang: LANG, t: (key, params) => translate(LANG, key, params), theme, toggleTheme }),
    [theme, toggleTheme],
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useApp(): AppContextValue {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error("useApp must be used inside <AppProviders>");
  return ctx;
}
