import type { IconName } from "@/components/ui/Icon";
import type { Lang } from "@/i18n/messages";

export interface CurrentWeather {
  time: string;
  temperature: number;
  apparentTemperature: number;
  humidity: number;
  windSpeed: number;
  weatherCode: number;
}

export interface DailyForecast {
  date: string;
  weatherCode: number;
  tempMax: number;
  tempMin: number;
  rainChance: number;
}

export interface AirQuality {
  aqi: number;
  pm25: number;
  uvIndex: number;
}

export interface WeatherBundle {
  current: CurrentWeather;
  daily: DailyForecast[];
  airQuality: AirQuality | null;
}

const cache = new Map<string, Promise<unknown>>();
function fetchJson<T>(url: string): Promise<T> {
  if (!cache.has(url)) {
    const request = fetch(url).then((r) => {
      if (!r.ok) throw new Error(`Request failed: ${r.status}`);
      return r.json();
    });
    request.catch(() => cache.delete(url));
    cache.set(url, request);
  }
  return cache.get(url) as Promise<T>;
}

interface GeocodeResponse { results?: { latitude: number; longitude: number }[] }
interface ForecastResponse {
  current: {
    time: string; temperature_2m: number; apparent_temperature: number;
    relative_humidity_2m: number; wind_speed_10m: number; weather_code: number;
  };
  daily: {
    time: string[]; weather_code: number[]; temperature_2m_max: number[];
    temperature_2m_min: number[]; precipitation_probability_max: (number | null)[];
  };
}
interface AirResponse { current?: { us_aqi?: number; pm2_5?: number; uv_index?: number } }

/** Open-Meteo(무료, 키 불필요)로 도시의 현재 날씨·5일 예보·공기질을 가져온다. */
export async function fetchWeather(cityName: string, lang: Lang): Promise<WeatherBundle> {
  const geo = await fetchJson<GeocodeResponse>(
    `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(cityName)}&count=1&language=${lang}`,
  );
  const place = geo.results?.[0];
  if (!place) throw new Error("Location not found");
  const { latitude, longitude } = place;

  const [w, air] = await Promise.all([
    fetchJson<ForecastResponse>(
      `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}` +
        "&current=temperature_2m,apparent_temperature,relative_humidity_2m,wind_speed_10m,weather_code" +
        "&daily=weather_code,temperature_2m_max,temperature_2m_min,precipitation_probability_max&forecast_days=5&timezone=auto",
    ),
    fetchJson<AirResponse>(
      `https://air-quality-api.open-meteo.com/v1/air-quality?latitude=${latitude}&longitude=${longitude}&current=us_aqi,pm2_5,uv_index&timezone=auto`,
    ).catch(() => null),
  ]);

  return {
    current: {
      time: w.current.time,
      temperature: w.current.temperature_2m,
      apparentTemperature: w.current.apparent_temperature,
      humidity: w.current.relative_humidity_2m,
      windSpeed: w.current.wind_speed_10m,
      weatherCode: w.current.weather_code,
    },
    daily: w.daily.time.map((date, i) => ({
      date,
      weatherCode: w.daily.weather_code[i],
      tempMax: w.daily.temperature_2m_max[i],
      tempMin: w.daily.temperature_2m_min[i],
      rainChance: w.daily.precipitation_probability_max[i] ?? 0,
    })),
    airQuality: air?.current?.us_aqi != null
      ? { aqi: air.current.us_aqi, pm25: air.current.pm2_5 ?? 0, uvIndex: air.current.uv_index ?? 0 }
      : null,
  };
}

/** 좌표 기준 최대 16일 일별 예보 (여행 일정의 날짜별 날씨) */
export async function fetchDailyForecast(lat: number, lng: number): Promise<DailyForecast[]> {
  const w = await fetchJson<Pick<ForecastResponse, "daily">>(
    `https://api.open-meteo.com/v1/forecast?latitude=${lat.toFixed(2)}&longitude=${lng.toFixed(2)}` +
      "&daily=weather_code,temperature_2m_max,temperature_2m_min,precipitation_probability_max&forecast_days=16&timezone=auto",
  );
  return w.daily.time.map((date, i) => ({
    date,
    weatherCode: w.daily.weather_code[i],
    tempMax: w.daily.temperature_2m_max[i],
    tempMin: w.daily.temperature_2m_min[i],
    rainChance: w.daily.precipitation_probability_max[i] ?? 0,
  }));
}

/** WMO 날씨 코드 → 선 아이콘 이름 (이모지 대신) */
export function weatherIcon(code: number): IconName {
  if (code === 0) return "sun";
  if (code === 1 || code === 2) return "cloudSun";
  if (code === 3) return "cloud";
  if (code === 45 || code === 48) return "fog";
  if ([71, 73, 75, 77, 85, 86].includes(code)) return "snow";
  if ([95, 96, 99].includes(code)) return "storm";
  if (code >= 51 && code <= 82) return "rain";
  return "cloudSun";
}

export type AirTone = "good" | "moderate" | "careful" | "bad" | "danger";

export function airQualityMeta(aqi: number, lang: Lang): { label: string; tone: AirTone } {
  const levels: { max: number; ko: string; en: string; tone: AirTone }[] = [
    { max: 50, ko: "좋음", en: "Good", tone: "good" },
    { max: 100, ko: "보통", en: "Moderate", tone: "moderate" },
    { max: 150, ko: "민감군 주의", en: "Sensitive", tone: "careful" },
    { max: 200, ko: "나쁨", en: "Unhealthy", tone: "bad" },
    { max: 300, ko: "매우 나쁨", en: "Very Unhealthy", tone: "bad" },
    { max: Infinity, ko: "위험", en: "Hazardous", tone: "danger" },
  ];
  const level = levels.find((l) => aqi <= l.max) ?? levels[0];
  return { label: level[lang], tone: level.tone };
}
