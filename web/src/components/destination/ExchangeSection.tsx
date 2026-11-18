"use client";

import { useEffect, useState } from "react";
import { useApp } from "@/components/providers/AppProviders";
import { ExchangeChart } from "@/components/destination/ExchangeChart";
import { fetchExchange, formatRate, type ExchangeBundle } from "@/lib/exchange";

const REFRESH_MS = 60 * 60 * 1000;

/** 환율 · 계산기 · 7일 추이 */
export function ExchangeSection({ currencyCode }: { currencyCode: string }) {
  const { lang, t, theme } = useApp();
  // 결과를 요청 조건(통화·언어)과 함께 저장해, 조건이 바뀌면 이전 결과 대신 "불러오는 중"으로 보이게 한다
  const key = `${currencyCode}:${lang}`;
  const [result, setResult] = useState<{ key: string; data: ExchangeBundle | null; failed: boolean } | null>(null);
  const [amount, setAmount] = useState("");
  const data = result?.key === key ? result.data : null;
  const failed = result?.key === key && result.failed;

  useEffect(() => {
    let alive = true;
    const load = () =>
      fetchExchange(currencyCode, lang)
        .then((d) => { if (alive) setResult({ key, data: d, failed: false }); })
        .catch(() => { if (alive) setResult({ key, data: null, failed: true }); });
    load();
    const timer = window.setInterval(load, REFRESH_MS); // 1시간마다 갱신
    return () => { alive = false; window.clearInterval(timer); };
  }, [currencyCode, lang, key]);

  const locale = lang === "en" ? "en-US" : "ko-KR";
  const numeric = Number(amount);
  const converted = data && amount && !Number.isNaN(numeric) ? numeric * data.rate : 0;
  // API는 날짜만 주므로 시각 없이 표시 (UTC 자정이 한국 시각 09:00으로 보이지 않게)
  const dateOnly = data ? /^\d{4}-\d{2}-\d{2}$/.test(data.updatedAt) : false;
  const asOf = data
    ? new Intl.DateTimeFormat(locale, { year: "numeric", month: "2-digit", day: "2-digit", ...(dateOnly ? { timeZone: "UTC" } : {}) })
        .format(new Date(data.updatedAt))
    : "";

  return (
    <>
      <div className="rate">
        <div className="currency-rate">
          {data && <span className="currency-rate__label">1 {data.from} =</span>}
          <span className="currency-rate__value">
            {failed ? t("quickInfo.unavailable") : data ? formatRate(data.rate, lang) : t("quickInfo.loading")}
          </span>
          {data && <span className="currency-rate__unit"> {data.to}</span>}
        </div>
        {data && <div className="currency-rate-time">{t("quickInfo.rateTime")} {asOf}</div>}
      </div>
      {data && <p className="rate-note">{t(data.fallback ? "quickInfo.rateFallback" : "quickInfo.rateNote")}</p>}

      {data && data.from !== data.to && (
        <>
          <div className="currency-calculator">
            <div className="calculator-input-group">
              <input
                type="number"
                className="calculator-input"
                min={0}
                step="0.01"
                inputMode="decimal"
                placeholder={t("quickInfo.calculatorPlaceholder")}
                aria-label={t("quickInfo.calculatorPlaceholder")}
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
              <span className="calculator-currency-code">{data.from}</span>
              <span className="calculator-equals">=</span>
              <span className="calculator-result">
                {converted.toLocaleString(locale, { maximumFractionDigits: converted >= 1 || converted === 0 ? 0 : 4 })}
              </span>
              <span className="calculator-result-unit"> {data.to}</span>
            </div>
          </div>
          {data.history.length > 1 && (
            <div className="currency-chart-container">
              <h4 className="currency-chart__title">{t("quickInfo.exchangeRate")}</h4>
              <ExchangeChart history={data.history} from={data.from} to={data.to} lang={lang} theme={theme} />
            </div>
          )}
        </>
      )}
    </>
  );
}
