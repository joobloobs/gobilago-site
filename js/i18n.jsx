/* Gobilago.com — locale routing and shared UI copy. */
(function () {
  const React = window.React;
  const root = document.documentElement;
  const supported = ["en", "fr"];
  const detected = (root.lang || "en").toLowerCase().split("-")[0];
  const lang = supported.includes(detected) ? detected : "en";
  const route = root.dataset.route || "home";

  const routes = {
    home: { en: "/", fr: "/fr/" },
    terms: { en: "/terms.html", fr: "/fr/terms.html" },
    privacy: { en: "/privacy.html", fr: "/fr/privacy.html" },
  };

  function urlFor(targetLang, targetRoute = route) {
    const routeMap = routes[targetRoute] || routes.home;
    return routeMap[targetLang] || routes.home[targetLang] || "/";
  }

  const alternateLang = lang === "fr" ? "en" : "fr";
  const alternateUrl = urlFor(alternateLang);
  const rememberLanguage = () => localStorage.setItem("gb-lang", alternateLang);

  window.I18n = window.I18n || {};
  window.GobilagoLocale = {
    lang,
    route,
    routes,
    alternateLang,
    alternateUrl,
    urlFor,
    rememberLanguage,
  };
  window.LangContext = React.createContext({ lang, alternateLang, alternateUrl, rememberLanguage });
})();
