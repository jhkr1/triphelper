"use client";

import { useEffect } from "react";
import { useApp } from "@/components/providers/AppProviders";
import { Icon } from "@/components/ui/Icon";
import type { Phrase } from "@/types/destination";

function speak(text: string, languageCode: string) {
  if (!("speechSynthesis" in window)) return;
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = languageCode || "en-US";
  utterance.rate = 0.96;
  utterance.pitch = 1.02;
  const voices = window.speechSynthesis.getVoices();
  const voice = voices.find((v) => v.lang === languageCode) ?? voices.find((v) => v.lang.startsWith(languageCode.slice(0, 2)));
  if (voice) utterance.voice = voice;
  window.speechSynthesis.cancel();
  window.speechSynthesis.speak(utterance);
}

/** 필수 회화 카드 + 발음 듣기(브라우저 음성 합성) */
export function PhraseCards({ phrases, languageCode }: { phrases: Phrase[]; languageCode: string }) {
  const { lang, t } = useApp();

  // 일부 브라우저는 목소리 목록을 미리 불러와야 첫 재생부터 올바른 언어로 읽는다
  useEffect(() => {
    if ("speechSynthesis" in window) window.speechSynthesis.getVoices();
  }, []);

  return (
    <div className="phr">
      {phrases.map((p) => (
        <div key={p.source}>
          <b lang={languageCode}>{p.source}</b>
          <i>{lang === "en" ? p.pronunciationEn : p.pronunciation}</i>
          <span>{lang === "en" ? p.meaningEn : p.meaning}</span>
          <button className="speak" type="button" aria-label={`${t("ui.listen")}: ${p.source}`} onClick={() => speak(p.source, languageCode)}>
            <Icon name="volume" />
          </button>
        </div>
      ))}
    </div>
  );
}
