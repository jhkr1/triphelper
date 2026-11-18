"use client";

import { createContext, useCallback, useContext, useEffect, useLayoutEffect, useMemo, useSyncExternalStore, type ReactNode } from "react";
import { translate, LANGS, type Lang, type MessageKey } from "@/i18n/messages";
import { createLocalSetting } from "@/lib/local-setting";

export type Theme = "light" | "dark";

interface AppContextValue {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (key: MessageKey, params?: Record<string, string | number>) => string;
  theme: Theme;
  toggleTheme: () => void;
}

const AppContext = createContext<AppContextValue | null>(null);

// 기존 사이트와 같은 저장 키를 써서 사용자의 설정을 그대로 이어받는다
const langSetting = createLocalSetting<Lang>("language", "ko", LANGS);
const themeSetting = createLocalSetting<Theme>("theme", "light", ["light", "dark"]);

/**
 * 언어(한/영)와 테마(라이트/다크)를 앱 전체에 제공한다.
 * 서버에서 미리 그린 HTML은 한국어·라이트 기준이고, 저장된 설정은 브라우저에서 적용한다.
 * (테마는 layout의 인라인 스크립트가 그리기 전에 먼저 적용해 깜빡임을 막는다)
 */
export function AppProviders({ children }: { children: ReactNode }) {
  const lang = useSyncExternalStore(langSetting.subscribe, langSetting.getSnapshot, langSetting.getServerSnapshot);
  const theme = useSyncExternalStore(themeSetting.subscribe, themeSetting.getSnapshot, themeSetting.getServerSnapshot);

  // 개발 모드(Strict Mode)에서 다시 마운트될 때도 테마 속성을 유지
  useLayoutEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = useCallback((next: Lang) => langSetting.set(next), []);
  const toggleTheme = useCallback(() => themeSetting.set(themeSetting.getSnapshot() === "dark" ? "light" : "dark"), []);

  const value = useMemo<AppContextValue>(
    () => ({ lang, setLang, t: (key, params) => translate(lang, key, params), theme, toggleTheme }),
    [lang, setLang, theme, toggleTheme],
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useApp(): AppContextValue {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error("useApp must be used inside <AppProviders>");
  return ctx;
}
