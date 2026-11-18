(() => {
  const { translations, commonProducts, destinations } = window.TripHelperData;
  const { normalize, escapeHtml, flagImg, formatLocalTimestamp } = window.TripHelperUtils;
  const api = window.TripHelperApi;
  const ui = window.TripHelperUI;
  const Globe = window.TripHelperGlobe;

  const reduceMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const store = {
    get(key) { try { return localStorage.getItem(key); } catch { return null; } },
    set(key, value) { try { localStorage.setItem(key, value); } catch { /* ignore */ } },
  };

  // 지구본 좌표가 있는 목적지 목록 (검색/칩/지구본 공통)
  const list = Globe.buildList(destinations);

  const state = {
    currentLanguage: store.get("language") === "en" ? "en" : "ko",
    currentTheme: store.get("theme") === "dark" ? "dark" : "light",
    activeDestination: null,
    requestId: 0,
    refreshTimers: [],
    exchange: null,
  };

  const elements = {
    brand: document.getElementById("brand"),
    chips: document.getElementById("chips"),
    languageToggle: document.getElementById("language-toggle"),
    message: document.getElementById("msg"),
    results: document.getElementById("result"),
    searchForm: document.getElementById("search-form"),
    searchInput: document.getElementById("search-input"),
    stage: document.getElementById("stage"),
    themeToggle: document.getElementById("theme-toggle"),
  };

  const isEn = () => state.currentLanguage === "en";
  const destName = (destination) => (isEn() ? destination.nameEn : destination.name);

  function translate(key, params = {}) {
    let text = translations[state.currentLanguage]?.[key] || translations.ko?.[key] || key;
    Object.entries(params).forEach(([param, value]) => {
      text = text.replace(`{${param}}`, value);
    });
    return text;
  }

  function getAvailableDestinationNames() {
    return list.map(destName).join(", ");
  }

  function findDestination(query) {
    const normalized = normalize(query).replace(/\s+/g, "");
    if (!normalized) return null;
    const flat = (text) => normalize(text).replace(/\s+/g, "");

    return list.find((destination) => {
      const keywords = destination.keywords || [];
      return keywords.some((keyword) => flat(keyword).includes(normalized) || normalized.includes(flat(keyword)))
        || flat(destination.name).includes(normalized)
        || flat(destination.nameEn).includes(normalized);
    }) || null;
  }

  function clearRefreshTimers() {
    state.refreshTimers.forEach((timer) => clearInterval(timer));
    state.refreshTimers = [];
  }

  /* ---------- 지구본 / 칩 ---------- */
  const globe = Globe.create({
    selector: "#globe",
    list,
    getActive: () => state.activeDestination,
    getLabel: destName,
    onSelect: (destination) => selectDestination(destination),
  });

  function renderChips() {
    elements.chips.innerHTML = list.slice(0, 10).map((destination) => `
      <button type="button" class="chip${state.activeDestination === destination ? " on" : ""}" data-name="${escapeHtml(destination.name)}">${flagImg(destination)}${escapeHtml(destName(destination))}</button>
    `).join("");
  }

  elements.chips.addEventListener("click", (event) => {
    const button = event.target.closest(".chip");
    if (!button) return;
    const destination = list.find((item) => item.name === button.dataset.name);
    if (destination) selectDestination(destination);
  });

  /* ---------- 실시간 데이터 채우기 ---------- */
  async function hydrateDestination(destination, root, requestId) {
    if (!root) return;

    const factsList = root.querySelector(".facts-list");
    const forecastList = root.querySelector(".forecast-list");
    const airQualityPanel = root.querySelector(".air-quality-panel");
    const weatherTime = root.querySelector(".weather-time__value");
    const cities = destination.weather?.cities || [];
    const hasWeather = Boolean(forecastList && airQualityPanel);
    const hasExchange = Boolean(root.querySelector(".currency-rate__value"));

    factsList.innerHTML = `<li>${escapeHtml(translate("quickInfo.loading"))}</li>`;
    if (hasWeather) {
      forecastList.innerHTML = `<p class="insight-empty">${escapeHtml(translate("quickInfo.loading"))}</p>`;
      airQualityPanel.querySelector(".air-quality-badge").textContent = translate("quickInfo.loading");
      airQualityPanel.querySelector(".air-quality-summary").textContent = "";
      airQualityPanel.querySelector(".air-quality-metrics").innerHTML = "";
    }

    const loadFacts = async () => {
      try {
        const profile = await api.fetchCountryProfile(destination);
        if (requestId !== state.requestId) return;
        ui.renderCountryFacts(factsList, profile, translate, state.currentLanguage);
      } catch (error) {
        if (requestId !== state.requestId) return;
        ui.renderCountryFacts(factsList, null, translate, state.currentLanguage);
      }
    };

    const loadExchange = async () => {
      const exchange = await api.fetchExchangeBundle(destination.currency?.code || "USD", state.currentLanguage);
      if (requestId !== state.requestId) return;
      state.exchange = exchange;
      ui.renderExchange(root, exchange, translate, state.currentLanguage);
    };

    const loadWeather = async () => {
      const bundles = await Promise.all(cities.map(async (city) => {
        try {
          return await api.fetchWeatherBundle(city, state.currentLanguage);
        } catch (error) {
          return null;
        }
      }));

      if (requestId !== state.requestId) return;

      bundles.forEach((bundle, index) => {
        const city = cities[index];
        const label = isEn() ? city.name : (city.nameKo || city.name);
        const card = Array.from(root.querySelectorAll(".weather-city-card"))
          .find((element) => element.dataset.cityName === city.name);
        if (card) ui.renderWeatherCard(card, label, bundle, translate, state.currentLanguage);
      });

      const leadBundle = bundles[0];
      if (leadBundle?.current?.time) {
        weatherTime.textContent = formatLocalTimestamp(leadBundle.current.time, state.currentLanguage);
      }
      ui.renderForecast(forecastList, leadBundle?.daily, translate, state.currentLanguage);
      ui.renderAirQuality(airQualityPanel, leadBundle?.airQuality, translate, state.currentLanguage);
    };

    const jobs = [loadFacts()];
    if (hasExchange) jobs.push(loadExchange().catch(() => {}));
    if (hasWeather) jobs.push(loadWeather().catch(() => {}));
    await Promise.all(jobs);
    if (requestId !== state.requestId) return;

    // 1시간마다 환율/날씨 갱신
    if (hasExchange) state.refreshTimers.push(setInterval(() => loadExchange().catch(() => {}), 60 * 60 * 1000));
    if (hasWeather) state.refreshTimers.push(setInterval(() => loadWeather().catch(() => {}), 60 * 60 * 1000));
  }

  /* ---------- 결과 화면 ---------- */
  function renderDestination(destination) {
    clearRefreshTimers();
    state.activeDestination = destination;
    state.exchange = null;
    state.requestId += 1;
    const requestId = state.requestId;

    const root = ui.renderDestination({
      container: elements.results,
      destination,
      index: destination.no,
      total: list.length,
      language: state.currentLanguage,
      translate,
      commonProducts,
      onBack: scrollToStage,
    });

    hydrateDestination(destination, root, requestId);
  }

  function scrollToStage() {
    elements.stage.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth" });
  }

  function selectDestination(destination, { scroll = true } = {}) {
    globe?.stop();
    elements.message.textContent = "";
    globe?.rotateTo(destination.coord);

    const url = new URL(window.location.href);
    url.searchParams.set("q", destination.name);
    url.searchParams.delete("c");
    window.history.replaceState({}, "", url);

    state.activeDestination = destination;
    renderChips();
    renderDestination(destination);
    globe?.draw();

    if (scroll) {
      setTimeout(
        () => elements.results.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth" }),
        reduceMotion ? 0 : 900,
      );
    }
  }

  function handleSearch(event) {
    event?.preventDefault();
    const query = elements.searchInput.value.trim();
    if (!query) {
      elements.message.textContent = translate("results.emptyInput");
      return;
    }

    const destination = findDestination(query);
    if (!destination) {
      elements.message.textContent = `${translate("results.noResult", { query })} ${translate("results.available", { destinations: getAvailableDestinationNames() })}`;
      return;
    }

    selectDestination(destination);
  }

  function resetToHome() {
    clearRefreshTimers();
    state.activeDestination = null;
    state.exchange = null;
    state.requestId += 1;
    elements.searchInput.value = "";
    elements.message.textContent = "";
    elements.results.hidden = true;
    elements.results.innerHTML = "";
    window.history.replaceState({}, "", window.location.pathname);
    renderChips();
    globe?.draw();
    elements.searchInput.focus({ preventScroll: true });
    window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" });
  }

  /* ---------- 테마 / 언어 ---------- */
  function updateTranslations() {
    document.documentElement.lang = state.currentLanguage;
    document.documentElement.setAttribute("data-theme", state.currentTheme);

    document.querySelectorAll("[data-i18n]").forEach((element) => {
      element.textContent = translate(element.getAttribute("data-i18n"));
    });
    document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
      element.placeholder = translate(element.getAttribute("data-i18n-placeholder"));
    });
    elements.chips.setAttribute("aria-label", translate("chips.label"));
    document.getElementById("globe")?.setAttribute("aria-label", translate("globe.label"));

    const dark = state.currentTheme === "dark";
    elements.themeToggle.querySelector(".control-button__text").textContent =
      dark ? translate("controls.lightMode") : translate("controls.darkMode");
    elements.themeToggle.querySelector(".control-button__icon").textContent = dark ? "☀️" : "🌙";
    elements.themeToggle.setAttribute("aria-label", dark ? translate("controls.lightMode") : translate("controls.darkMode"));
    elements.languageToggle.querySelector(".control-button__text").textContent =
      isEn() ? translate("controls.language") : translate("controls.languageEn");
  }

  function toggleTheme() {
    state.currentTheme = state.currentTheme === "light" ? "dark" : "light";
    store.set("theme", state.currentTheme);
    updateTranslations();

    // 차트는 캔버스라서 색을 다시 그려야 함 (데이터는 재사용)
    const root = elements.results.querySelector(".destination");
    if (root && state.exchange) ui.renderExchange(root, state.exchange, translate, state.currentLanguage);
  }

  function toggleLanguage() {
    state.currentLanguage = isEn() ? "ko" : "en";
    store.set("language", state.currentLanguage);
    updateTranslations();
    renderChips();
    globe?.draw();
    if (state.activeDestination) renderDestination(state.activeDestination);
  }

  /* ---------- 시작 ---------- */
  function initializeFromQuery() {
    const params = new URLSearchParams(window.location.search);
    const query = params.get("q") || params.get("c");
    if (!query) return;

    elements.searchInput.value = query;
    const destination = findDestination(query);
    if (destination) selectDestination(destination);
  }

  document.addEventListener("DOMContentLoaded", () => {
    updateTranslations();
    renderChips();
    globe?.draw();
    initializeFromQuery();

    elements.searchForm.addEventListener("submit", handleSearch);
    elements.themeToggle.addEventListener("click", toggleTheme);
    elements.languageToggle.addEventListener("click", toggleLanguage);
    elements.brand.addEventListener("click", resetToHome);

    if ("speechSynthesis" in window) window.speechSynthesis.getVoices();
  });
})();
