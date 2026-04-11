window.TripHelperUI = (() => {
  const {
    escapeHtml,
    formatCompactNumber,
    formatDate,
    formatLocalTimestamp,
    getAirQualityMeta,
    getWeatherIcon,
  } = window.TripHelperUtils;

  function renderObjectList(list, items, language) {
    list.innerHTML = "";

    items.forEach((item) => {
      const li = document.createElement("li");

      if (typeof item === "object" && item !== null) {
        if (list.classList.contains("info-list--products") && (item.link || item.iframe || item.image)) {
          const card = document.createElement("div");
          card.className = "product-card";

          const title = document.createElement("strong");
          title.className = "product-title";
          title.textContent = item.title || "";
          card.appendChild(title);

          if (item.iframe) {
            const iframeWrapper = document.createElement("div");
            iframeWrapper.className = "product-iframe-wrapper";
            iframeWrapper.innerHTML = item.iframe;
            card.appendChild(iframeWrapper);
          } else if (item.image) {
            const imageWrapper = document.createElement("div");
            imageWrapper.className = "product-image-wrapper";
            const img = document.createElement("img");
            img.src = item.image;
            img.alt = item.title || "";
            img.loading = "lazy";
            imageWrapper.appendChild(img);
            card.appendChild(imageWrapper);
          }

          li.appendChild(card);
        } else {
          const title = document.createElement("strong");
          title.className = "list-item-title";
          title.textContent = item.title || "";
          li.appendChild(title);

          if (item.description) {
            const description = document.createElement("span");
            description.className = "list-item-description";
            description.textContent = ` - ${item.description}`;
            li.appendChild(description);
          }
        }
      } else {
        li.textContent = item;
      }

      list.appendChild(li);
    });
  }

  function speakPhrase(text, languageCode) {
    if (!("speechSynthesis" in window)) return;

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = languageCode || "en-US";
    utterance.rate = 0.96;
    utterance.pitch = 1.02;

    const voices = window.speechSynthesis.getVoices();
    const matchedVoice = voices.find((voice) => voice.lang === languageCode)
      || voices.find((voice) => voice.lang.startsWith((languageCode || "en").slice(0, 2)));

    if (matchedVoice) {
      utterance.voice = matchedVoice;
    }

    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(utterance);
  }

  function renderPhraseList(list, phrases, language, languageCode) {
    list.innerHTML = "";

    phrases.forEach((phrase) => {
      const li = document.createElement("li");
      const pronunciation = language === "en" && phrase.pronunciationEn ? phrase.pronunciationEn : phrase.pronunciation;
      const meaning = language === "en" && phrase.meaningEn ? phrase.meaningEn : phrase.meaning;

      li.innerHTML = `
        <span class="phrase-list__source">${escapeHtml(phrase.source)}</span>
        <span class="phrase-list__pronunciation">(${escapeHtml(pronunciation)})</span>
        <span class="phrase-list__meaning">- ${escapeHtml(meaning)}</span>
      `;

      const button = document.createElement("button");
      button.className = "phrase-list__speaker";
      button.type = "button";
      button.textContent = "🔊";
      button.setAttribute("aria-label", language === "en" ? "Listen to pronunciation" : "발음 듣기");
      button.addEventListener("click", () => speakPhrase(phrase.source, languageCode));
      li.appendChild(button);
      list.appendChild(li);
    });
  }

  function createWeatherCardShell(cityName, loadingText) {
    return `
      <div class="weather-city-header">
        <h4 class="weather-city-name">${escapeHtml(cityName)}</h4>
        <div class="weather-loading">${escapeHtml(loadingText)}</div>
      </div>
    `;
  }

  function renderWeatherCard(element, cityLabel, bundle, translate, language) {
    if (!bundle?.current) {
      element.innerHTML = `
        <div class="weather-city-header">
          <h4 class="weather-city-name">${escapeHtml(cityLabel)}</h4>
          <div class="weather-error">${escapeHtml(translate("quickInfo.unavailable"))}</div>
        </div>
      `;
      return;
    }

    const { current } = bundle;
    element.innerHTML = `
      <div class="weather-city-header">
        <h4 class="weather-city-name">${escapeHtml(cityLabel)}</h4>
      </div>
      <div class="weather-info">
        <div class="weather-icon-temp">
          <span class="weather-icon-large">${getWeatherIcon(current.weather_code)}</span>
          <div class="weather-temp">${Math.round(current.temperature_2m)}°C</div>
        </div>
        <div class="weather-details">
          <span class="weather-detail-item">
            <span class="weather-detail-label">${escapeHtml(translate("quickInfo.apparentTemp"))}</span>
            <span class="weather-detail-value">${Math.round(current.apparent_temperature)}°C</span>
          </span>
          <span class="weather-detail-item">
            <span class="weather-detail-label">${escapeHtml(translate("quickInfo.humidity"))}</span>
            <span class="weather-detail-value">${Math.round(current.relative_humidity_2m)}%</span>
          </span>
          <span class="weather-detail-item">
            <span class="weather-detail-label">${escapeHtml(translate("quickInfo.windSpeed"))}</span>
            <span class="weather-detail-value">${Math.round(current.wind_speed_10m)} km/h</span>
          </span>
        </div>
      </div>
    `;
  }

  function renderCountryFacts(list, profile, translate, language) {
    if (!profile) {
      list.innerHTML = `<li>${escapeHtml(translate("quickInfo.unavailable"))}</li>`;
      return;
    }

    const items = [
      { label: translate("quickInfo.capital"), value: profile.capital || "-" },
      { label: translate("quickInfo.population"), value: profile.population ? formatCompactNumber(profile.population, language) : "-" },
      { label: translate("quickInfo.region"), value: profile.region || "-" },
      { label: translate("quickInfo.languages"), value: profile.languages?.join(", ") || "-" },
      {
        label: translate("quickInfo.drivingSide"),
        value: profile.drivingSide ? (language === "en" ? profile.drivingSide : profile.drivingSide === "left" ? "좌측통행" : "우측통행") : "-",
      },
    ];

    list.innerHTML = items.map((item) => `
      <li>
        <strong class="list-item-title">${escapeHtml(item.label)}</strong>
        <span class="list-item-description"> - ${escapeHtml(item.value)}</span>
      </li>
    `).join("");
  }

  function renderForecast(list, forecast, translate, language) {
    if (!forecast?.length) {
      list.innerHTML = `<p class="insight-empty">${escapeHtml(translate("quickInfo.unavailable"))}</p>`;
      return;
    }

    list.innerHTML = forecast.map((day) => `
      <article class="forecast-card">
        <div class="forecast-card__day">${escapeHtml(formatDate(day.date, language, { weekday: "short", month: "short", day: "numeric" }))}</div>
        <div class="forecast-card__icon">${getWeatherIcon(day.weatherCode)}</div>
        <div class="forecast-card__temps">${Math.round(day.tempMax)}° / ${Math.round(day.tempMin)}°</div>
        <div class="forecast-card__rain">${escapeHtml(translate("quickInfo.precipitation"))}: ${Math.round(day.rainChance ?? 0)}%</div>
      </article>
    `).join("");
  }

  function renderAirQuality(panel, airQuality, translate, language) {
    const badge = panel.querySelector(".air-quality-badge");
    const summary = panel.querySelector(".air-quality-summary");
    const metrics = panel.querySelector(".air-quality-metrics");

    if (!airQuality?.aqi && airQuality?.aqi !== 0) {
      badge.textContent = translate("quickInfo.unavailable");
      badge.className = "air-quality-badge";
      summary.textContent = translate("quickInfo.unavailable");
      metrics.innerHTML = "";
      return;
    }

    const meta = getAirQualityMeta(airQuality.aqi, language);
    badge.textContent = `${meta.label} · AQI ${Math.round(airQuality.aqi)}`;
    badge.className = `air-quality-badge air-quality-badge--${meta.tone}`;
    summary.textContent = language === "en"
      ? `PM2.5 and UV are based on the latest hourly forecast for the lead city.`
      : `대표 도시 기준 최신 시간대 예보로 PM2.5와 UV 지수를 보여줍니다.`;

    metrics.innerHTML = `
      <li><strong>${escapeHtml(translate("quickInfo.pm25"))}</strong><span>${Math.round(airQuality.pm25 ?? 0)} μg/m³</span></li>
      <li><strong>${escapeHtml(translate("quickInfo.uvIndex"))}</strong><span>${Math.round(airQuality.uvIndex ?? 0)}</span></li>
      <li><strong>AQI</strong><span>${Math.round(airQuality.aqi)}</span></li>
    `;
  }

  function setupCalculator(root, exchange, language) {
    const input = root.querySelector(".calculator-input");
    const code = root.querySelector(".calculator-currency-code");
    const result = root.querySelector(".calculator-result");
    const unit = root.querySelector(".calculator-result-unit");
    const calculatorEl = root.querySelector(".currency-calculator");

    if (!input || !code || !result || !unit) return;

    // 동일 통화이거나 환율 정보가 없으면 계산기 숨김
    if (!exchange?.rate || exchange.from === exchange.to) {
      if (calculatorEl) calculatorEl.style.display = "none";
      return;
    }

    if (calculatorEl) calculatorEl.style.display = "";
    code.textContent = exchange.from;
    unit.textContent = ` ${exchange.to}`;
    input.value = "";

    const update = () => {
      const numericValue = Number(input.value);
      if (!input.value || Number.isNaN(numericValue)) {
        result.textContent = "0";
        return;
      }

      const converted = numericValue * exchange.rate;
      // 결과가 1 이상이면 정수, 미만이면 소수점 4자리
      const digits = converted >= 1 ? 0 : 4;
      result.textContent = converted.toLocaleString(language === "en" ? "en-US" : "ko-KR", {
        minimumFractionDigits: 0,
        maximumFractionDigits: digits,
      });
    };

    input.oninput = update;
    input.onchange = update;
    update();
  }

  function renderExchange(root, exchange, translate, language) {
    const label = root.querySelector(".currency-rate__label");
    const value = root.querySelector(".currency-rate__value");
    const unit = root.querySelector(".currency-rate__unit");
    const time = root.querySelector(".currency-rate-time__value");
    const canvas = root.querySelector(".currency-chart");
    const chartContainer = root.querySelector(".currency-chart-container");

    if (!value) return;

    if (!exchange?.rate) {
      value.textContent = translate("quickInfo.unavailable");
      return;
    }

    if (label) label.textContent = `1 ${exchange.from} =`;
    if (unit) unit.textContent = ` ${exchange.to}`;
    // rate >= 1 이면 정수 표시 (예: 1,741), 미만이면 소수점 4자리까지
    value.textContent = exchange.rate.toLocaleString(language === "en" ? "en-US" : "ko-KR", {
      minimumFractionDigits: 0,
      maximumFractionDigits: exchange.rate >= 1 ? 0 : 4,
    });
    if (time) time.textContent = formatLocalTimestamp(exchange.updatedAt, language);

    setupCalculator(root, exchange, language);

    // 동일 통화(예: KRW→KRW)이거나 history가 없으면 차트 숨김
    if (chartContainer) {
      const shouldShowChart = exchange.from !== exchange.to && exchange.history?.length > 1;
      chartContainer.style.display = shouldShowChart ? "block" : "none";
      if (shouldShowChart) {
        window.TripHelperCharts.renderExchangeChart(canvas, exchange.history, language, exchange.from, exchange.to);
      }
    }
  }

  function renderDestinationShell({ destination, template, language, translate, commonProducts }) {
    const fragment = template.content.cloneNode(true);
    const root = fragment.querySelector(".destination");

    root.querySelector(".destination__flag").textContent = destination.flag || "";
    root.querySelector(".destination__country").textContent = language === "en" ? destination.nameEn : destination.name;
    root.querySelector(".destination__summary").textContent = language === "en" && destination.summaryEn ? destination.summaryEn : destination.summary;

    const currencyInfo = root.querySelector(".currency-info");
    if (destination.currency && currencyInfo) {
      const currencyName = language === "en" && destination.currency.nameEn ? destination.currency.nameEn : destination.currency.name;
      currencyInfo.textContent = `${destination.currency.symbol} ${destination.currency.code} (${currencyName})`;
    }

    const manners = language === "en" && destination.mannersEn ? destination.mannersEn : destination.manners;
    const souvenirs = language === "en" && destination.souvenirsEn ? destination.souvenirsEn : destination.souvenirs;
    const market = language === "en" && destination.marketEn ? destination.marketEn : destination.market;
    const visa = language === "en" && destination.visaEn ? destination.visaEn : destination.visa;
    const allEssentials = language === "en" && destination.essentialsEn ? destination.essentialsEn : destination.essentials;
    const essentials = allEssentials.filter((item) => !item.link && !item.iframe && !item.image);
    const destinationProducts = (language === "en" && destination.essentialsEn ? destination.essentialsEn : destination.essentials)
      .filter((item) => item.link || item.iframe || item.image)
      .map((item) => ({ ...item, title: language === "en" && item.titleEn ? item.titleEn : item.title }));
    const localizedCommonProducts = commonProducts.map((item) => ({
      ...item,
      title: language === "en" && item.titleEn ? item.titleEn : item.title,
    }));

    renderObjectList(root.querySelector(".info-list--manners"), manners, language);
    renderObjectList(root.querySelector(".info-list--souvenirs"), souvenirs, language);
    renderObjectList(root.querySelector(".info-list--market"), market, language);
    renderObjectList(root.querySelector(".info-list--essentials"), essentials, language);
    renderObjectList(root.querySelector(".info-list--visa"), visa || [], language);
    renderObjectList(root.querySelector(".info-list--products"), [...localizedCommonProducts, ...destinationProducts], language);
    renderPhraseList(root.querySelector(".phrase-list"), destination.phrases, language, destination.languageCode);

    const visaSection = root.querySelector(".info-list--visa")?.closest(".info-card");
    if (visaSection && (!visa || !visa.length)) {
      visaSection.style.display = "none";
    }

    const weatherDisplay = root.querySelector(".weather-display");
    weatherDisplay.innerHTML = "";
    (destination.weather?.cities || []).forEach((city) => {
      const card = document.createElement("div");
      card.className = "weather-city-card";
      card.dataset.cityName = city.name;
      const cityLabel = language === "en" ? city.name : (city.nameKo || city.name);
      card.innerHTML = createWeatherCardShell(cityLabel, translate("quickInfo.loading"));
      weatherDisplay.appendChild(card);
    });

    root.querySelectorAll("[data-i18n]").forEach((element) => {
      const key = element.getAttribute("data-i18n");
      element.textContent = translate(key);
    });

    return {
      fragment,
      root,
    };
  }

  return {
    renderAirQuality,
    renderCountryFacts,
    renderDestinationShell,
    renderExchange,
    renderForecast,
    renderObjectList,
    renderWeatherCard,
  };
})();
