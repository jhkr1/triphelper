window.TripHelperUtils = (() => {
  function escapeHtml(text) {
    if (text == null) return "";
    const div = document.createElement("div");
    div.textContent = text;
    return div.innerHTML;
  }

  function normalize(text = "") {
    return String(text).trim().toLowerCase();
  }

  function formatDate(dateLike, language, options = {}) {
    const date = typeof dateLike === "string" ? new Date(dateLike) : dateLike;
    if (!(date instanceof Date) || Number.isNaN(date.getTime())) {
      return "";
    }

    return new Intl.DateTimeFormat(language === "en" ? "en-US" : "ko-KR", options).format(date);
  }

  function formatCompactNumber(value, language) {
    if (typeof value !== "number" || Number.isNaN(value)) {
      return "-";
    }

    return new Intl.NumberFormat(language === "en" ? "en-US" : "ko-KR").format(value);
  }

  function formatLocalTimestamp(isoTime, language) {
    if (!isoTime) return "";
    const normalized = isoTime.replace("T", " ");
    const date = new Date(isoTime);

    if (Number.isNaN(date.getTime())) {
      return normalized.slice(0, 16);
    }

    return `${formatDate(date, language, {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    })} ${formatDate(date, language, {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    })}`;
  }

  function getWeatherIcon(code) {
    if (code === 0) return "☀️";
    if ([1, 2].includes(code)) return "🌤️";
    if (code === 3) return "☁️";
    if ([45, 48].includes(code)) return "🌫️";
    if ([51, 53, 55, 56, 57].includes(code)) return "🌦️";
    if ([61, 63, 65, 66, 67, 80, 81, 82].includes(code)) return "🌧️";
    if ([71, 73, 75, 77, 85, 86].includes(code)) return "❄️";
    if ([95, 96, 99].includes(code)) return "⛈️";
    return "🌤️";
  }

  function getAirQualityMeta(index, language) {
    const labels = language === "en"
      ? [
          { max: 50, label: "Good", tone: "good" },
          { max: 100, label: "Moderate", tone: "moderate" },
          { max: 150, label: "Sensitive", tone: "careful" },
          { max: 200, label: "Unhealthy", tone: "bad" },
          { max: 300, label: "Very Unhealthy", tone: "bad" },
          { max: Infinity, label: "Hazardous", tone: "danger" },
        ]
      : [
          { max: 50, label: "좋음", tone: "good" },
          { max: 100, label: "보통", tone: "moderate" },
          { max: 150, label: "민감군 주의", tone: "careful" },
          { max: 200, label: "나쁨", tone: "bad" },
          { max: 300, label: "매우 나쁨", tone: "bad" },
          { max: Infinity, label: "위험", tone: "danger" },
        ];

    const numericIndex = typeof index === "number" ? index : Number(index);
    const safeIndex = Number.isFinite(numericIndex) ? numericIndex : 0;
    return labels.find((item) => safeIndex <= item.max) || labels[0];
  }

  function buildDailyForecast(daily) {
    if (!daily?.time?.length) return [];

    return daily.time.map((time, index) => ({
      date: time,
      weatherCode: daily.weather_code?.[index],
      tempMax: daily.temperature_2m_max?.[index],
      tempMin: daily.temperature_2m_min?.[index],
      rainChance: daily.precipitation_probability_max?.[index],
    }));
  }

  function pickCurrentAirQuality(data) {
    if (data?.current?.us_aqi != null) {
      return {
        aqi: data.current.us_aqi,
        pm25: data.current.pm2_5,
        uvIndex: data.current.uv_index,
        time: data.current.time,
      };
    }

    if (!data?.hourly?.time?.length) return null;

    return {
      aqi: data.hourly.us_aqi?.[0],
      pm25: data.hourly.pm2_5?.[0],
      uvIndex: data.hourly.uv_index?.[0],
      time: data.hourly.time?.[0],
    };
  }

  // Windows에서는 국기 이모지가 글자로 보이므로, 이모지에서 국가 코드를 뽑아 이미지로 표시
  function flagImg(destination) {
    const flag = destination?.flag || "";
    if (!flag) return "";
    const code = [...flag].map((c) => String.fromCharCode(c.codePointAt(0) - 0x1f1e6 + 97)).join("");
    return `<img class="fl" src="https://flagcdn.com/h40/${code}.png" alt="" onerror="this.replaceWith(document.createTextNode('${flag}'))">`;
  }

  return {
    flagImg,
    buildDailyForecast,
    escapeHtml,
    formatCompactNumber,
    formatDate,
    formatLocalTimestamp,
    getAirQualityMeta,
    getWeatherIcon,
    normalize,
    pickCurrentAirQuality,
  };
})();
