import type { Lang } from "@/i18n/messages";

export interface RatePoint {
  /** YYYY-MM-DD */
  date: string;
  rate: number;
}

export interface ExchangeBundle {
  from: string;
  to: string;
  rate: number;
  history: RatePoint[];
  /** API가 주는 기준일(YYYY-MM-DD). 대략값일 때는 ISO 시각 */
  updatedAt: string;
  /** 환율 서버에 연결하지 못해 대략값을 쓴 경우 */
  fallback?: boolean;
}

const BASE_URL = "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api";

/** 환율 서버에 연결하지 못할 때 쓰는 대략값 (1단위 = USD 기준) */
export const FALLBACK_USD: Record<string, number> = {
  USD: 1, EUR: 1.08, JPY: 0.0067, GBP: 1.27, CNY: 0.14, KRW: 0.00074, TRY: 0.026, MXN: 0.059, CAD: 0.73, CHF: 1.1,
  AUD: 0.66, TWD: 0.031, HKD: 0.13, SGD: 0.74, MYR: 0.22, IDR: 0.000061, PHP: 0.018, VND: 0.000039, THB: 0.027, HUF: 0.0028, RUB: 0.012, NZD: 0.59,
  MNT: 0.00029, CZK: 0.043, AED: 0.27, LAK: 0.000046,
};

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

function lastNDates(n: number): string[] {
  return Array.from({ length: n }, (_, i) => {
    const d = new Date();
    d.setDate(d.getDate() - (n - 1 - i));
    return d.toISOString().slice(0, 10);
  });
}

type CurrencyFile = { date?: string } & Record<string, Record<string, number> | string | undefined>;

/**
 * 현지 통화 → 원화 환율과 최근 7일 추이.
 * 영어 화면에서는 기존 사이트와 같이 USD → 현지 통화로 보여 준다.
 */
export async function fetchExchange(currencyCode: string, lang: Lang): Promise<ExchangeBundle> {
  const from = lang === "en" ? "USD" : currencyCode;
  const to = lang === "en" ? currencyCode : "KRW";
  const dates = lastNDates(7);

  if (from === to) {
    return { from, to, rate: 1, history: dates.map((date) => ({ date, rate: 1 })), updatedAt: dates[6] };
  }

  const f = from.toLowerCase();
  const t = to.toLowerCase();
  const rateOf = (file: CurrencyFile | null) => (file?.[f] as Record<string, number> | undefined)?.[t];

  try {
    // 최신 + 과거 6일치를 병렬로 요청 (마지막은 latest 태그)
    const files = await Promise.all(
      dates.map((date, i) => fetchJson<CurrencyFile>(`${BASE_URL}@${i === 6 ? "latest" : date}/v1/currencies/${f}.json`).catch(() => null)),
    );
    const latest = rateOf(files[6]);
    if (latest == null) throw new Error(`환율 데이터 없음: ${from} → ${to}`);
    return {
      from,
      to,
      rate: latest,
      history: dates.map((date, i) => ({ date, rate: rateOf(files[i]) ?? latest })),
      updatedAt: (files[6]?.date as string | undefined) ?? dates[6],
    };
  } catch {
    const a = FALLBACK_USD[from];
    const b = FALLBACK_USD[to];
    const rate = a && b ? a / b : 1;
    return { from, to, rate, history: dates.map((date) => ({ date, rate })), updatedAt: new Date().toISOString(), fallback: true };
  }
}

/** 1 이상이면 소수점 2자리, 1 미만(동·루피아 등)은 4자리까지 */
export function formatRate(rate: number, lang: Lang): string {
  return rate.toLocaleString(lang === "en" ? "en-US" : "ko-KR", {
    minimumFractionDigits: rate >= 1 ? 2 : 0,
    maximumFractionDigits: rate >= 1 ? 2 : 4,
  });
}
