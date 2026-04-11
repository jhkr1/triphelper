window.TripHelperApi = (() => {
  const {
    buildDailyForecast,
    pickCurrentAirQuality,
  } = window.TripHelperUtils;

  const jsonCache = new Map();

  const countryLookup = {
    "South Korea": "South Korea",
    "United States": "United States",
    "United Kingdom": "United Kingdom",
    "Hong Kong": "Hong Kong",
    "Taiwan": "Taiwan",
    "Singapore": "Singapore",
  };

  const fallbackRates = {
    USD: 1,
    EUR: 1.08,
    JPY: 0.0067,
    GBP: 1.27,
    CNY: 0.14,
    KRW: 0.00074,
    TRY: 0.026,
    MXN: 0.059,
    CAD: 0.73,
    CHF: 1.10,
    AUD: 0.66,
    TWD: 0.031,
    HKD: 0.13,
    SGD: 0.74,
    MYR: 0.22,
    IDR: 0.000061,
    PHP: 0.018,
    VND: 0.000039,
    THB: 0.027,
    HUF: 0.0028,
  };

  async function fetchJson(url) {
    if (jsonCache.has(url)) {
      return jsonCache.get(url);
    }

    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Request failed: ${response.status}`);
    }

    const data = await response.json();
    jsonCache.set(url, data);
    return data;
  }

  async function geocodeCity(cityName, language) {
    const url = `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(cityName)}&count=1&language=${language === "en" ? "en" : "ko"}`;
    const data = await fetchJson(url);

    if (!data.results?.length) {
      throw new Error("Location not found");
    }

    return data.results[0];
  }

  async function fetchWeatherBundle(city, language) {
    const cityName = typeof city === "string" ? city : city.name;
    const location = await geocodeCity(cityName, language);
    const { latitude, longitude } = location;

    const weatherUrl = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,apparent_temperature,relative_humidity_2m,wind_speed_10m,weather_code&daily=weather_code,temperature_2m_max,temperature_2m_min,precipitation_probability_max&forecast_days=5&timezone=auto`;
    const airQualityUrl = `https://air-quality-api.open-meteo.com/v1/air-quality?latitude=${latitude}&longitude=${longitude}&current=us_aqi,pm2_5,uv_index&timezone=auto`;

    const [weatherData, airQualityData] = await Promise.all([
      fetchJson(weatherUrl),
      fetchJson(airQualityUrl),
    ]);

    return {
      city,
      location,
      current: weatherData.current,
      daily: buildDailyForecast(weatherData.daily),
      airQuality: pickCurrentAirQuality(airQualityData),
      timezone: weatherData.timezone,
    };
  }

  async function fetchCountryProfile(destination) {
    const lookupName = countryLookup[destination.nameEn] || destination.nameEn;
    const url = `https://restcountries.com/v3.1/name/${encodeURIComponent(lookupName)}?fields=name,capital,region,subregion,population,languages,currencies,car`;
    const data = await fetchJson(url);

    if (!Array.isArray(data) || !data.length) {
      throw new Error("Country profile unavailable");
    }

    const match = data.find((country) => country.name?.common === lookupName) || data[0];

    return {
      capital: match.capital?.[0] || null,
      region: [match.region, match.subregion].filter(Boolean).join(" · "),
      population: match.population ?? null,
      languages: Object.values(match.languages || {}),
      drivingSide: match.car?.side || null,
      currencies: Object.keys(match.currencies || {}),
    };
  }

  function buildFlatHistory(rate) {
    return Array.from({ length: 7 }, (_, index) => {
      const date = new Date();
      date.setDate(date.getDate() - (6 - index));
      return {
        date: date.toISOString().slice(0, 10),
        rate,
      };
    });
  }

  async function fetchExchangeBundle(currencyCode, language) {
    const from = language === "en" ? "USD" : currencyCode;
    const to = language === "en" ? currencyCode : "KRW";

    if (!currencyCode || from === to) {
      return {
        from,
        to,
        rate: 1,
        history: buildFlatHistory(1),
        updatedAt: new Date().toISOString(),
      };
    }

    const fromLower = from.toLowerCase();
    const toLower = to.toLowerCase();
    const baseUrl = "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api";

    // 최근 7일 날짜 배열 생성 (오래된 날짜 → 최신 순)
    const dates = Array.from({ length: 7 }, (_, i) => {
      const d = new Date();
      d.setDate(d.getDate() - (6 - i));
      return d.toISOString().slice(0, 10);
    });

    try {
      // 최신 + 과거 6일치 병렬 요청 (마지막 인덱스는 "latest" 태그 사용)
      const results = await Promise.all(
        dates.map((date, i) => {
          const tag = i === 6 ? "latest" : date;
          return fetchJson(`${baseUrl}@${tag}/v1/currencies/${fromLower}.json`).catch(() => null);
        })
      );

      const latestResult = results[6];
      const latestRate = latestResult?.[fromLower]?.[toLower];

      if (latestRate == null) {
        throw new Error(`환율 데이터 없음: ${from} → ${to}`);
      }

      const history = dates.map((date, i) => {
        const rate = results[i]?.[fromLower]?.[toLower] ?? latestRate;
        return { date, rate };
      });

      return {
        from,
        to,
        rate: latestRate,
        history,
        updatedAt: latestResult?.date || new Date().toISOString(),
      };
    } catch (error) {
      // fallback: 하드코딩된 대략 환율 사용 (baseFallback / targetFallback = 1단위 환산)
      const baseFallback = fallbackRates[from];
      const targetFallback = fallbackRates[to];
      const rate = baseFallback && targetFallback ? baseFallback / targetFallback : 1;

      return {
        from,
        to,
        rate,
        history: buildFlatHistory(rate),
        updatedAt: new Date().toISOString(),
        fallback: true,
      };
    }
  }

  return {
    fetchCountryProfile,
    fetchExchangeBundle,
    fetchWeatherBundle,
  };
})();
