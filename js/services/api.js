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

  const countryProfiles = {
    "South Korea": {
      capital: "Seoul",
      capitalKo: "서울",
      region: "Asia · Eastern Asia",
      regionKo: "아시아 · 동아시아",
      population: 51700000,
      languages: ["Korean"],
      languagesKo: ["한국어"],
      drivingSide: "right",
      currencies: ["KRW"],
    },
    Japan: {
      capital: "Tokyo",
      capitalKo: "도쿄",
      region: "Asia · Eastern Asia",
      regionKo: "아시아 · 동아시아",
      population: 124500000,
      languages: ["Japanese"],
      languagesKo: ["일본어"],
      drivingSide: "left",
      currencies: ["JPY"],
    },
    France: {
      capital: "Paris",
      capitalKo: "파리",
      region: "Europe · Western Europe",
      regionKo: "유럽 · 서유럽",
      population: 68000000,
      languages: ["French"],
      languagesKo: ["프랑스어"],
      drivingSide: "right",
      currencies: ["EUR"],
    },
    Spain: {
      capital: "Madrid",
      capitalKo: "마드리드",
      region: "Europe · Southern Europe",
      regionKo: "유럽 · 남유럽",
      population: 48600000,
      languages: ["Spanish"],
      languagesKo: ["스페인어"],
      drivingSide: "right",
      currencies: ["EUR"],
    },
    "United States": {
      capital: "Washington, D.C.",
      capitalKo: "워싱턴 D.C.",
      region: "Americas · North America",
      regionKo: "아메리카 · 북아메리카",
      population: 335000000,
      languages: ["English"],
      languagesKo: ["영어"],
      drivingSide: "right",
      currencies: ["USD"],
    },
    Italy: {
      capital: "Rome",
      capitalKo: "로마",
      region: "Europe · Southern Europe",
      regionKo: "유럽 · 남유럽",
      population: 58900000,
      languages: ["Italian"],
      languagesKo: ["이탈리아어"],
      drivingSide: "right",
      currencies: ["EUR"],
    },
    Turkey: {
      capital: "Ankara",
      capitalKo: "앙카라",
      region: "Asia · Western Asia",
      regionKo: "아시아 · 서아시아",
      population: 85300000,
      languages: ["Turkish"],
      languagesKo: ["튀르키예어"],
      drivingSide: "right",
      currencies: ["TRY"],
    },
    Mexico: {
      capital: "Mexico City",
      capitalKo: "멕시코시티",
      region: "Americas · North America",
      regionKo: "아메리카 · 북아메리카",
      population: 129000000,
      languages: ["Spanish"],
      languagesKo: ["스페인어"],
      drivingSide: "right",
      currencies: ["MXN"],
    },
    "United Kingdom": {
      capital: "London",
      capitalKo: "런던",
      region: "Europe · Northern Europe",
      regionKo: "유럽 · 북유럽",
      population: 67700000,
      languages: ["English"],
      languagesKo: ["영어"],
      drivingSide: "left",
      currencies: ["GBP"],
    },
    Germany: {
      capital: "Berlin",
      capitalKo: "베를린",
      region: "Europe · Western Europe",
      regionKo: "유럽 · 서유럽",
      population: 84300000,
      languages: ["German"],
      languagesKo: ["독일어"],
      drivingSide: "right",
      currencies: ["EUR"],
    },
    Greece: {
      capital: "Athens",
      capitalKo: "아테네",
      region: "Europe · Southern Europe",
      regionKo: "유럽 · 남유럽",
      population: 10400000,
      languages: ["Greek"],
      languagesKo: ["그리스어"],
      drivingSide: "right",
      currencies: ["EUR"],
    },
    Austria: {
      capital: "Vienna",
      capitalKo: "빈",
      region: "Europe · Western Europe",
      regionKo: "유럽 · 서유럽",
      population: 9100000,
      languages: ["German"],
      languagesKo: ["독일어"],
      drivingSide: "right",
      currencies: ["EUR"],
    },
    China: {
      capital: "Beijing",
      capitalKo: "베이징",
      region: "Asia · Eastern Asia",
      regionKo: "아시아 · 동아시아",
      population: 1410000000,
      languages: ["Chinese"],
      languagesKo: ["중국어"],
      drivingSide: "right",
      currencies: ["CNY"],
    },
    Canada: {
      capital: "Ottawa",
      capitalKo: "오타와",
      region: "Americas · North America",
      regionKo: "아메리카 · 북아메리카",
      population: 40000000,
      languages: ["English", "French"],
      languagesKo: ["영어", "프랑스어"],
      drivingSide: "right",
      currencies: ["CAD"],
    },
    Hungary: {
      capital: "Budapest",
      capitalKo: "부다페스트",
      region: "Europe · Central Europe",
      regionKo: "유럽 · 중앙유럽",
      population: 9600000,
      languages: ["Hungarian"],
      languagesKo: ["헝가리어"],
      drivingSide: "right",
      currencies: ["HUF"],
    },
    Switzerland: {
      capital: "Bern",
      capitalKo: "베른",
      region: "Europe · Western Europe",
      regionKo: "유럽 · 서유럽",
      population: 8900000,
      languages: ["German", "French", "Italian", "Romansh"],
      languagesKo: ["독일어", "프랑스어", "이탈리아어", "로만슈어"],
      drivingSide: "right",
      currencies: ["CHF"],
    },
    Netherlands: {
      capital: "Amsterdam",
      capitalKo: "암스테르담",
      region: "Europe · Western Europe",
      regionKo: "유럽 · 서유럽",
      population: 17900000,
      languages: ["Dutch"],
      languagesKo: ["네덜란드어"],
      drivingSide: "right",
      currencies: ["EUR"],
    },
    Portugal: {
      capital: "Lisbon",
      capitalKo: "리스본",
      region: "Europe · Southern Europe",
      regionKo: "유럽 · 남유럽",
      population: 10400000,
      languages: ["Portuguese"],
      languagesKo: ["포르투갈어"],
      drivingSide: "right",
      currencies: ["EUR"],
    },
    Philippines: {
      capital: "Manila",
      capitalKo: "마닐라",
      region: "Asia · South-Eastern Asia",
      regionKo: "아시아 · 동남아시아",
      population: 114000000,
      languages: ["Filipino", "English"],
      languagesKo: ["필리핀어", "영어"],
      drivingSide: "right",
      currencies: ["PHP"],
    },
    Vietnam: {
      capital: "Hanoi",
      capitalKo: "하노이",
      region: "Asia · South-Eastern Asia",
      regionKo: "아시아 · 동남아시아",
      population: 100300000,
      languages: ["Vietnamese"],
      languagesKo: ["베트남어"],
      drivingSide: "right",
      currencies: ["VND"],
    },
    Australia: {
      capital: "Canberra",
      capitalKo: "캔버라",
      region: "Oceania · Australia and New Zealand",
      regionKo: "오세아니아 · 호주/뉴질랜드",
      population: 26700000,
      languages: ["English"],
      languagesKo: ["영어"],
      drivingSide: "left",
      currencies: ["AUD"],
    },
    Thailand: {
      capital: "Bangkok",
      capitalKo: "방콕",
      region: "Asia · South-Eastern Asia",
      regionKo: "아시아 · 동남아시아",
      population: 71600000,
      languages: ["Thai"],
      languagesKo: ["태국어"],
      drivingSide: "left",
      currencies: ["THB"],
    },
    Taiwan: {
      capital: "Taipei",
      capitalKo: "타이베이",
      region: "Asia · Eastern Asia",
      regionKo: "아시아 · 동아시아",
      population: 23400000,
      languages: ["Mandarin Chinese"],
      languagesKo: ["중국어"],
      drivingSide: "right",
      currencies: ["TWD"],
    },
    "Hong Kong": {
      capital: "Hong Kong",
      capitalKo: "홍콩",
      region: "Asia · Eastern Asia",
      regionKo: "아시아 · 동아시아",
      population: 7500000,
      languages: ["Chinese", "English"],
      languagesKo: ["중국어", "영어"],
      drivingSide: "left",
      currencies: ["HKD"],
    },
    Singapore: {
      capital: "Singapore",
      capitalKo: "싱가포르",
      region: "Asia · South-Eastern Asia",
      regionKo: "아시아 · 동남아시아",
      population: 5900000,
      languages: ["English", "Malay", "Mandarin Chinese", "Tamil"],
      languagesKo: ["영어", "말레이어", "중국어", "타밀어"],
      drivingSide: "left",
      currencies: ["SGD"],
    },
    Malaysia: {
      capital: "Kuala Lumpur",
      capitalKo: "쿠알라룸푸르",
      region: "Asia · South-Eastern Asia",
      regionKo: "아시아 · 동남아시아",
      population: 34500000,
      languages: ["Malay"],
      languagesKo: ["말레이어"],
      drivingSide: "left",
      currencies: ["MYR"],
    },
    Indonesia: {
      capital: "Jakarta",
      capitalKo: "자카르타",
      region: "Asia · South-Eastern Asia",
      regionKo: "아시아 · 동남아시아",
      population: 281000000,
      languages: ["Indonesian"],
      languagesKo: ["인도네시아어"],
      drivingSide: "left",
      currencies: ["IDR"],
    },
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
    const localProfile = countryProfiles[lookupName] || countryProfiles[destination.nameEn];

    if (localProfile) {
      return localProfile;
    }

    throw new Error("Country profile unavailable");
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
