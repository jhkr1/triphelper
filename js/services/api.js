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

    const endDate = new Date();
    const startDate = new Date();
    startDate.setDate(endDate.getDate() - 6);

    const start = startDate.toISOString().slice(0, 10);
    const end = endDate.toISOString().slice(0, 10);

    try {
      const [latest, history] = await Promise.all([
        fetchJson(`https://api.frankfurter.app/latest?from=${from}&to=${to}`),
        fetchJson(`https://api.frankfurter.app/${start}..${end}?from=${from}&to=${to}`),
      ]);

      const latestRate = latest.rates?.[to];
      const historyPoints = Object.entries(history.rates || {})
        .map(([date, rates]) => ({
          date,
          rate: rates?.[to],
        }))
        .filter((point) => typeof point.rate === "number");

      return {
        from,
        to,
        rate: latestRate,
        history: historyPoints.length ? historyPoints : buildFlatHistory(latestRate || 1),
        updatedAt: latest.date || new Date().toISOString(),
      };
    } catch (error) {
      const baseFallback = fallbackRates[from];
      const targetFallback = fallbackRates[to];
      const rate = baseFallback && targetFallback ? targetFallback / baseFallback : 1;

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
