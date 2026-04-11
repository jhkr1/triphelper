(() => {
  const { translations, commonProducts, destinations } = window.TripHelperData;
  const { normalize, escapeHtml, formatLocalTimestamp } = window.TripHelperUtils;
  const api = window.TripHelperApi;
  const ui = window.TripHelperUI;

  const state = {
    currentLanguage: localStorage.getItem("language") || "ko",
    currentTheme: localStorage.getItem("theme") || "light",
    activeDestination: null,
    requestId: 0,
    refreshTimers: [],
  };

  const elements = {
    languageToggle: document.getElementById("language-toggle"),
    results: document.querySelector(".results"),
    searchButton: document.getElementById("search-button"),
    searchInput: document.getElementById("search-input"),
    template: document.getElementById("destination-template"),
    themeToggle: document.getElementById("theme-toggle"),
  };

  function translate(key, params = {}) {
    let text = translations[state.currentLanguage]?.[key] || translations.ko?.[key] || key;
    Object.entries(params).forEach(([param, value]) => {
      text = text.replace(`{${param}}`, value);
    });
    return text;
  }

  function getAvailableDestinationNames() {
    return destinations
      .map((destination) => state.currentLanguage === "en" ? destination.nameEn : destination.name)
      .join(", ");
  }

  function findDestination(query) {
    const normalized = normalize(query);

    return destinations.find((destination) => {
      const keywords = destination.keywords || [];
      return keywords.some((keyword) => normalize(keyword).includes(normalized) || normalized.includes(normalize(keyword)))
        || normalize(destination.name).includes(normalized)
        || normalize(destination.nameEn).includes(normalized);
    });
  }

  function clearRefreshTimers() {
    state.refreshTimers.forEach((timer) => clearInterval(timer));
    state.refreshTimers = [];
  }

  function renderInitialPlaceholder() {
    elements.results.innerHTML = `
      <div class="results__placeholder">
        <h2>${escapeHtml(translate("results.placeholder.title"))}</h2>
        <p>${escapeHtml(translate("results.placeholder.description"))}</p>
      </div>
    `;
  }

  function renderNoResult(query) {
    const message = query === translate("results.emptyInput")
      ? translate("results.emptyInput")
      : translate("results.noResult", { query });

    elements.results.innerHTML = `
      <div class="results__placeholder">
        <h2>${escapeHtml(message)}</h2>
        <p>${escapeHtml(translate("results.noResultTip"))}</p>
        <p class="no-result__tip">${escapeHtml(translate("results.available", { destinations: getAvailableDestinationNames() }))}</p>
      </div>
    `;
  }

  async function hydrateDestination(destination, root, requestId) {
    if (!root) return;

    const factsList = root.querySelector(".facts-list");
    const forecastList = root.querySelector(".forecast-list");
    const airQualityPanel = root.querySelector(".air-quality-panel");
    const weatherTime = root.querySelector(".weather-time__value");
    const cities = destination.weather?.cities || [];

    factsList.innerHTML = `<li>${escapeHtml(translate("quickInfo.loading"))}</li>`;
    forecastList.innerHTML = `<p class="insight-empty">${escapeHtml(translate("quickInfo.loading"))}</p>`;
    airQualityPanel.querySelector(".air-quality-badge").textContent = translate("quickInfo.loading");
    airQualityPanel.querySelector(".air-quality-summary").textContent = "";
    airQualityPanel.querySelector(".air-quality-metrics").innerHTML = "";

    try {
      const profile = await api.fetchCountryProfile(destination);
      if (requestId !== state.requestId) return;
      ui.renderCountryFacts(factsList, profile, translate, state.currentLanguage);
    } catch (error) {
      if (requestId !== state.requestId) return;
      ui.renderCountryFacts(factsList, null, translate, state.currentLanguage);
    }

    const loadExchange = async () => {
      const exchange = await api.fetchExchangeBundle(destination.currency?.code || "USD", state.currentLanguage);
      if (requestId !== state.requestId) return;
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
        const label = state.currentLanguage === "en" ? city.name : (city.nameKo || city.name);
        const card = Array.from(root.querySelectorAll(".weather-city-card"))
          .find((element) => element.dataset.cityName === city.name);
        if (card) {
          ui.renderWeatherCard(card, label, bundle, translate, state.currentLanguage);
        }
      });

      const leadBundle = bundles[0];
      if (leadBundle?.current?.time) {
        weatherTime.textContent = formatLocalTimestamp(leadBundle.current.time, state.currentLanguage);
      }
      ui.renderForecast(forecastList, leadBundle?.daily, translate, state.currentLanguage);
      ui.renderAirQuality(airQualityPanel, leadBundle?.airQuality, translate, state.currentLanguage);
    };

    await Promise.all([loadExchange(), loadWeather()]);
    if (requestId !== state.requestId) return;

    const exchangeTimer = setInterval(loadExchange, 60 * 60 * 1000);
    const weatherTimer = setInterval(loadWeather, 60 * 60 * 1000);
    state.refreshTimers.push(exchangeTimer, weatherTimer);
  }

  function renderDestination(destination) {
    clearRefreshTimers();
    state.activeDestination = destination;
    state.requestId += 1;
    const requestId = state.requestId;

    const view = ui.renderDestinationShell({
      destination,
      template: elements.template,
      language: state.currentLanguage,
      translate,
      commonProducts,
    });

    elements.results.innerHTML = "";
    elements.results.appendChild(view.fragment);
    hydrateDestination(destination, elements.results.querySelector(".destination"), requestId);
  }

  function handleSearch() {
    const query = elements.searchInput.value.trim();
    if (!query) {
      renderNoResult(translate("results.emptyInput"));
      return;
    }

    const destination = findDestination(query);
    if (!destination) {
      renderNoResult(query);
      return;
    }

    const url = new URL(window.location.href);
    url.searchParams.set("q", query);
    window.history.replaceState({}, "", url);
    renderDestination(destination);
  }

  function updateTranslations() {
    document.documentElement.lang = state.currentLanguage;
    document.documentElement.setAttribute("data-theme", state.currentTheme);

    document.querySelectorAll("[data-i18n]").forEach((element) => {
      const key = element.getAttribute("data-i18n");
      element.textContent = translate(key);
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
      const key = element.getAttribute("data-i18n-placeholder");
      element.placeholder = translate(key);
    });

    if (elements.themeToggle) {
      elements.themeToggle.querySelector(".control-button__text").textContent =
        state.currentTheme === "dark" ? translate("controls.lightMode") : translate("controls.darkMode");
      elements.themeToggle.querySelector(".control-button__icon").textContent = state.currentTheme === "dark" ? "☀️" : "🌙";
    }

    if (elements.languageToggle) {
      elements.languageToggle.querySelector(".control-button__text").textContent =
        state.currentLanguage === "ko" ? translate("controls.languageEn") : translate("controls.language");
    }
  }

  function toggleTheme() {
    state.currentTheme = state.currentTheme === "light" ? "dark" : "light";
    localStorage.setItem("theme", state.currentTheme);
    updateTranslations();

    if (state.activeDestination) {
      renderDestination(state.activeDestination);
    }
  }

  function toggleLanguage() {
    state.currentLanguage = state.currentLanguage === "ko" ? "en" : "ko";
    localStorage.setItem("language", state.currentLanguage);
    updateTranslations();

    if (state.activeDestination) {
      renderDestination(state.activeDestination);
    } else {
      renderInitialPlaceholder();
    }
  }

  function initializeFromQuery() {
    const params = new URLSearchParams(window.location.search);
    const query = params.get("q");
    if (!query) return;

    elements.searchInput.value = query;
    const destination = findDestination(query);
    if (destination) {
      renderDestination(destination);
    }
  }

  document.addEventListener("DOMContentLoaded", () => {
    updateTranslations();
    renderInitialPlaceholder();
    initializeFromQuery();

    elements.searchButton?.addEventListener("click", handleSearch);
    elements.searchInput?.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        handleSearch();
      }
    });
    elements.themeToggle?.addEventListener("click", toggleTheme);
    elements.languageToggle?.addEventListener("click", toggleLanguage);

    const logoImage = document.querySelector(".hero__logo-image");
    logoImage?.addEventListener("click", () => {
      clearRefreshTimers();
      state.activeDestination = null;
      elements.searchInput.value = "";
      window.history.replaceState({}, "", window.location.pathname);
      renderInitialPlaceholder();
      elements.searchInput.focus({ preventScroll: true });
      window.scrollTo({ top: 0, behavior: "smooth" });
    });

    if ("speechSynthesis" in window) {
      window.speechSynthesis.getVoices();
    }
  });
})();
