"use client";

import { useEffect, useState } from "react";
import { useApp } from "@/components/providers/AppProviders";
import { Icon } from "@/components/ui/Icon";
import { airQualityMeta, fetchWeather, weatherIcon, type WeatherBundle } from "@/lib/weather";
import type { City } from "@/types/destination";

const REFRESH_MS = 60 * 60 * 1000;
type CityState = WeatherBundle | "loading" | "error";

/** 도시별 현재 날씨 + 대표 도시의 5일 예보·공기질 */
export function WeatherSection({ cities }: { cities: City[] }) {
  const { lang, t } = useApp();
  // 결과를 요청 조건(도시 목록·언어)과 함께 저장해, 조건이 바뀌면 "불러오는 중"으로 보이게 한다
  const key = `${cities.map((c) => c.name).join("|")}:${lang}`;
  const [result, setResult] = useState<{ key: string; list: CityState[] } | null>(null);
  const byCity: CityState[] = result?.key === key ? result.list : cities.map(() => "loading");
  const locale = lang === "en" ? "en-US" : "ko-KR";

  useEffect(() => {
    let alive = true;
    const load = () =>
      Promise.all(cities.map((c) => fetchWeather(c.name, lang).catch(() => "error" as const)))
        .then((list) => { if (alive) setResult({ key, list }); });
    load();
    const timer = window.setInterval(load, REFRESH_MS); // 1시간마다 갱신
    return () => { alive = false; window.clearInterval(timer); };
  }, [cities, lang, key]);

  const lead = typeof byCity[0] === "object" ? byCity[0] : null;
  const cityLabel = (c: City) => (lang === "en" ? c.name : c.nameKo || c.name);
  const localTime = lead
    ? new Intl.DateTimeFormat(locale, { year: "numeric", month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit", hour12: false })
        .format(new Date(lead.current.time))
    : "";

  return (
    <>
      <p className="weather-time">{t("quickInfo.localTime")} {localTime}</p>
      <div className="weather-display">
        {cities.map((c, i) => {
          const w = byCity[i];
          return (
            <div className="weather-city-card" key={c.name}>
              <h4 className="weather-city-name">{cityLabel(c)}</h4>
              {w === "loading" && <div className="weather-loading">{t("quickInfo.loading")}</div>}
              {w === "error" && <div className="weather-error">{t("quickInfo.unavailable")}</div>}
              {typeof w === "object" && (
                <div className="weather-info">
                  <div className="weather-icon-temp">
                    <span className="weather-icon-large"><Icon name={weatherIcon(w.current.weatherCode)} /></span>
                    <div className="weather-temp">{Math.round(w.current.temperature)}°C</div>
                  </div>
                  <div className="weather-details">
                    <span className="weather-detail-item">
                      <span className="weather-detail-label">{t("quickInfo.apparentTemp")}</span>
                      <span className="weather-detail-value">{Math.round(w.current.apparentTemperature)}°C</span>
                    </span>
                    <span className="weather-detail-item">
                      <span className="weather-detail-label">{t("quickInfo.humidity")}</span>
                      <span className="weather-detail-value">{Math.round(w.current.humidity)}%</span>
                    </span>
                    <span className="weather-detail-item">
                      <span className="weather-detail-label">{t("quickInfo.windSpeed")}</span>
                      <span className="weather-detail-value">{Math.round(w.current.windSpeed)} km/h</span>
                    </span>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      <h4 className="sub">{t("sections.forecast")}</h4>
      <div className="forecast-list">
        {!lead && <p className="insight-empty">{byCity[0] === "loading" ? t("quickInfo.loading") : t("quickInfo.unavailable")}</p>}
        {lead?.daily.map((d) => (
          <article className="forecast-card" key={d.date}>
            <div className="forecast-card__day">
              {new Intl.DateTimeFormat(locale, { weekday: "short", month: "short", day: "numeric" }).format(new Date(d.date))}
            </div>
            <div className="forecast-card__icon"><Icon name={weatherIcon(d.weatherCode)} /></div>
            <div className="forecast-card__temps">{Math.round(d.tempMax)}° / {Math.round(d.tempMin)}°</div>
            <div className="forecast-card__rain">{t("quickInfo.precipitation")}: {Math.round(d.rainChance)}%</div>
          </article>
        ))}
      </div>

      <h4 className="sub">{t("sections.airQuality")}</h4>
      <div className="air-quality-panel">
        {lead?.airQuality ? (() => {
          const aq = lead.airQuality;
          const meta = airQualityMeta(aq.aqi, lang);
          return (
            <>
              <div className={`air-quality-badge air-quality-badge--${meta.tone}`}>{meta.label} · AQI {Math.round(aq.aqi)}</div>
              <p className="air-quality-summary">{t("airQuality.summary")}</p>
              <ul className="air-quality-metrics">
                <li><strong>{t("quickInfo.pm25")}</strong><span>{Math.round(aq.pm25)} μg/m³</span></li>
                <li><strong>{t("quickInfo.uvIndex")}</strong><span>{Math.round(aq.uvIndex)}</span></li>
                <li><strong>AQI</strong><span>{Math.round(aq.aqi)}</span></li>
              </ul>
            </>
          );
        })() : (
          <div className="air-quality-badge">{byCity[0] === "loading" ? t("quickInfo.loading") : t("quickInfo.unavailable")}</div>
        )}
      </div>
    </>
  );
}
