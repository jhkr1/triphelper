window.TripHelperUI = (() => {
  const {
    escapeHtml,
    flagImg,
    formatCompactNumber,
    formatDate,
    formatLocalTimestamp,
    getAirQualityMeta,
    getWeatherIcon,
  } = window.TripHelperUtils;

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

    const capital = language === "en" ? profile.capital : (profile.capitalKo || profile.capital);
    const region = language === "en" ? profile.region : (profile.regionKo || profile.region);
    const languages = language === "en" ? profile.languages : (profile.languagesKo || profile.languages);
    const items = [
      { label: translate("quickInfo.capital"), value: capital || "-" },
      { label: translate("quickInfo.population"), value: profile.population ? formatCompactNumber(profile.population, language) : "-" },
      { label: translate("quickInfo.region"), value: region || "-" },
      { label: translate("quickInfo.languages"), value: languages?.join(", ") || "-" },
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
    // 1 이상이면 소수점 2자리(예: 1,462.66), 1 미만(동, 루피아 등)은 4자리까지 표시
    value.textContent = exchange.rate.toLocaleString(language === "en" ? "en-US" : "ko-KR", {
      minimumFractionDigits: exchange.rate >= 1 ? 2 : 0,
      maximumFractionDigits: exchange.rate >= 1 ? 2 : 4,
    });
    if (time) {
      // 환율 API는 "날짜"만 주므로 시각은 표시하지 않는다 (UTC 자정을 한국 시각 09:00으로 오해하지 않도록)
      const dateOnly = /^\d{4}-\d{2}-\d{2}$/.test(exchange.updatedAt || "");
      time.textContent = formatDate(exchange.updatedAt, language, {
        year: "numeric", month: "2-digit", day: "2-digit", ...(dateOnly ? { timeZone: "UTC" } : {}),
      });
    }
    const note = root.querySelector(".rate-note");
    if (note) note.textContent = translate(exchange.fallback ? "quickInfo.rateFallback" : "quickInfo.rateNote");

    setupCalculator(root, exchange, language);

    // 동일 통화(예: KRW→KRW)이거나 history가 없으면 차트 숨김
    if (chartContainer) {
      const shouldShowChart = exchange.from !== exchange.to && exchange.history?.length > 1;
      chartContainer.hidden = !shouldShowChart;
      if (shouldShowChart) {
        window.TripHelperCharts.renderExchangeChart(canvas, exchange.history, language, exchange.from, exchange.to);
      }
    }
  }

  const itemTitle = (x) => (typeof x === "object" && x !== null ? x.title : x) || "";
  const itemDesc = (x) => (typeof x === "object" && x !== null ? x.description : "") || "";
  const pick = (destination, key, language) => (language === "en" && destination[`${key}En`] ? destination[`${key}En`] : destination[key]) || [];
  const isProduct = (item) => item && typeof item === "object" && (item.link || item.iframe || item.image);

  function itemsHtml(arr) {
    return `<ol class="items">${arr.map((x) => `<li><b>${escapeHtml(itemTitle(x))}</b>${itemDesc(x) ? `<p>${escapeHtml(itemDesc(x))}</p>` : ""}</li>`).join("")}</ol>`;
  }

  function productsHtml(products) {
    return `<ul class="products">${products.map((item) => {
      let media = "";
      if (item.iframe) media = `<div class="product-iframe-wrapper">${item.iframe}</div>`;
      else if (item.image) media = `<div class="product-image-wrapper"><img src="${escapeHtml(item.image)}" alt="${escapeHtml(item.title)}" loading="lazy"></div>`;
      return `<li><div class="product-card"><strong class="product-title">${escapeHtml(item.title)}</strong>${media}</div></li>`;
    }).join("")}</ul>`;
  }

  function observeChapters(root) {
    const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
    const reveal = new IntersectionObserver((entries) => entries.forEach((entry) => {
      if (entry.isIntersecting) { entry.target.classList.add("in"); reveal.unobserve(entry.target); }
    }), { threshold: 0.12 });
    root.querySelectorAll(".reveal").forEach((el) => {
      // 이미 화면 안에 있는 요소는 즉시 표시
      if (reduce || el.getBoundingClientRect().top < innerHeight) el.classList.add("in"); else reveal.observe(el);
    });

    const links = root.querySelectorAll(".toc a");
    const spy = new IntersectionObserver((entries) => entries.forEach((entry) => {
      if (entry.isIntersecting) links.forEach((a) => a.classList.toggle("on", a.dataset.k === entry.target.id.slice(3)));
    }), { rootMargin: "-30% 0px -60% 0px" });
    root.querySelectorAll(".chap").forEach((el) => spy.observe(el));
  }

  function languageName(code, language) {
    try { return new Intl.DisplayNames([language], { type: "language" }).of(code); } catch { return code || "-"; }
  }

  // 결과 화면(에디토리얼) 전체를 container에 그린다. 실시간 데이터 자리는 비워두고 app.js가 채운다.
  function renderDestination({ container, destination, index, total, language, translate, commonProducts, onBack }) {
    const en = language === "en";
    const currency = destination.currency || {};
    const manners = pick(destination, "manners", language);
    const visa = pick(destination, "visa", language);
    const allEssentials = pick(destination, "essentials", language);
    const essentials = allEssentials.filter((item) => !isProduct(item));
    const products = [
      ...commonProducts.map((item) => ({ ...item, title: en && item.titleEn ? item.titleEn : item.title })),
      ...allEssentials.filter(isProduct).map((item) => ({ ...item, title: en && item.titleEn ? item.titleEn : item.title })),
    ];
    const cities = destination.weather?.cities || [];
    const showExchange = currency.code && currency.code !== "KRW";

    const chapters = [];
    if (showExchange) {
      chapters.push({ key: "exchange", label: translate("sections.exchange"), body: `
        <div class="rate">
          <div class="currency-rate">
            <span class="currency-rate__label"></span><span class="currency-rate__value">${escapeHtml(translate("quickInfo.loading"))}</span><span class="currency-rate__unit"> KRW</span>
          </div>
          <div class="currency-rate-time"><span>${escapeHtml(translate("quickInfo.rateTime"))}</span> <span class="currency-rate-time__value"></span></div>
        </div>
        <p class="rate-note"></p>
        <div class="currency-calculator">
          <div class="calculator-input-group">
            <input type="number" class="calculator-input" placeholder="${escapeHtml(translate("quickInfo.calculatorPlaceholder"))}" aria-label="${escapeHtml(translate("quickInfo.calculatorPlaceholder"))}" min="0" step="0.01" />
            <span class="calculator-currency-code"></span>
            <span class="calculator-equals">=</span>
            <span class="calculator-result"></span>
            <span class="calculator-result-unit"></span>
          </div>
        </div>
        <div class="currency-chart-container" hidden>
          <h4 class="currency-chart__title">${escapeHtml(translate("quickInfo.exchangeRate"))}</h4>
          <canvas class="currency-chart"></canvas>
        </div>` });
    }
    if (cities.length) {
      chapters.push({ key: "weather", label: translate("sections.weather"), body: `
        <p class="weather-time"><span>${escapeHtml(translate("quickInfo.localTime"))}</span> <span class="weather-time__value"></span></p>
        <div class="weather-display">${cities.map((city) => `
          <div class="weather-city-card" data-city-name="${escapeHtml(city.name)}">${createWeatherCardShell(en ? city.name : (city.nameKo || city.name), translate("quickInfo.loading"))}</div>`).join("")}
        </div>
        <h4 class="sub">${escapeHtml(translate("sections.forecast"))}</h4>
        <div class="forecast-list"></div>
        <h4 class="sub">${escapeHtml(translate("sections.airQuality"))}</h4>
        <div class="air-quality-panel">
          <div class="air-quality-badge"></div>
          <p class="air-quality-summary"></p>
          <ul class="air-quality-metrics"></ul>
        </div>` });
    }
    chapters.push({ key: "facts", label: translate("sections.facts"), body: `<ul class="facts-list"></ul>` });

    if (manners.length) {
      const [first, ...rest] = manners;
      chapters.push({ key: "manners", label: translate("sections.manners"), body:
        `<blockquote class="pull"><small>${escapeHtml(translate("ui.insight").toUpperCase())}</small><b>${escapeHtml(itemTitle(first))}</b><p>${escapeHtml(itemDesc(first))}</p></blockquote>${rest.length ? itemsHtml(rest) : ""}` });
    }
    [["souvenirs", pick(destination, "souvenirs", language)], ["market", pick(destination, "market", language)], ["essentials", essentials], ["visa", visa]]
      .forEach(([key, arr]) => { if (arr.length) chapters.push({ key, label: translate(`sections.${key}`), body: itemsHtml(arr) }); });

    const phrases = destination.phrases || [];
    if (phrases.length) {
      chapters.push({ key: "phrases", label: translate("sections.phrases"), body: `<div class="phr">${phrases.map((p, i) => `
        <div><b>${escapeHtml(p.source)}</b><i>${escapeHtml(en && p.pronunciationEn ? p.pronunciationEn : p.pronunciation)}</i><span>${escapeHtml(en && p.meaningEn ? p.meaningEn : p.meaning)}</span>
          <button class="speak" type="button" data-i="${i}" aria-label="${escapeHtml(translate("ui.listen"))}">🔊</button></div>`).join("")}</div>` });
    }
    // TODO: 쿠팡 파트너스 상품이 표시되지 않아 임시로 숨김. 복구하려면 아래 주석을 해제하세요.
    // if (products.length) {
    //   chapters.push({ key: "products", label: translate("sections.products"), body:
    //     `<p class="affiliate-disclosure">${escapeHtml(translate("affiliate.disclosure"))}</p>${productsHtml(products)}` });
    // }

    const pad = (n) => String(n).padStart(2, "0");
    container.hidden = false;
    container.innerHTML = `
      <article class="ed destination">
        <p class="kicker reveal">NO. ${pad(index)} / ${total} · DESTINATION</p>
        <h2 class="ed__title reveal"><span aria-hidden="true">${flagImg(destination)}</span>${escapeHtml(en ? destination.nameEn : destination.name)}</h2>
        <p class="ed__lede reveal">${escapeHtml(en && destination.summaryEn ? destination.summaryEn : destination.summary)}</p>
        <dl class="meta reveal">
          <div><dt>${escapeHtml(translate("quickInfo.currency"))}</dt><dd>${escapeHtml(en && currency.nameEn ? currency.nameEn : currency.name)} · ${escapeHtml(currency.code)} ${escapeHtml(currency.symbol || "")}</dd></div>
          <div><dt>${escapeHtml(translate("quickInfo.languages"))}</dt><dd>${escapeHtml(languageName(destination.languageCode, language))}</dd></div>
          ${visa.length ? `<div><dt>${escapeHtml(translate("ui.visa"))}</dt><dd>${escapeHtml(itemTitle(visa[0]))}</dd></div>` : ""}
        </dl>
        <div class="ed__body">
          <nav class="toc" aria-label="chapters"><ol>${chapters.map((c, i) => `<li><a href="#ch-${c.key}" data-k="${c.key}"><b>${pad(i + 1)}</b>${escapeHtml(c.label)}</a></li>`).join("")}</ol></nav>
          <div class="chapters">
            ${chapters.map((c, i) => `<section class="chap reveal" id="ch-${c.key}"><div class="chap__head"><span class="chap__no">${pad(i + 1)}</span><h3>${escapeHtml(c.label)}</h3></div>${c.body}</section>`).join("")}
            <button class="back" type="button">${escapeHtml(translate("ui.back"))}</button>
          </div>
        </div>
      </article>`;

    container.querySelector(".back").addEventListener("click", onBack);
    container.querySelectorAll(".speak").forEach((button) => {
      button.addEventListener("click", () => speakPhrase(phrases[Number(button.dataset.i)].source, destination.languageCode));
    });
    observeChapters(container);
    return container.querySelector(".destination");
  }

  return {
    renderAirQuality,
    renderCountryFacts,
    renderDestination,
    renderExchange,
    renderForecast,
    renderWeatherCard,
  };
})();
