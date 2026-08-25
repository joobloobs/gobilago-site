/* Gobilago.com — Terms & Privacy shared renderer. */
(function () {
  const React = window.React;
  const { useState, useEffect } = React;
  const h = React.createElement;
  const DS = window.GobilagoDesignSystem_a1fc6c;
  const { Logo, Button } = DS;
  const locale = window.GobilagoLocale;
  const ui = locale.ui;
  const Ico = (n, p = {}) => h("i", { "data-lucide": n, ...p });
  const homeUrl = (hash = "") => locale.urlFor(locale.lang, "home") + hash;
  const LOGO_SRC = "ds/gobilago-design-system-a1fc6c20-5385-4629-921c-c442dc25b4f5/gobilogo.png";

  function Brand({ size = 28, showWordmark = true }) {
    return h("span", { style: { display: "inline-flex", alignItems: "center", gap: size * 0.34 } },
      h("img", { src: LOGO_SRC, alt: "Gobilago", width: size, height: size,
        style: { width: size, height: size, borderRadius: size * 0.25, flex: "none", display: "block" } }),
      showWordmark && h("span", {
        style: { fontFamily: "var(--font-display)", fontWeight: 800, letterSpacing: "-0.03em", fontSize: size * 0.92, lineHeight: 1, color: "var(--text-strong)" }
      }, "Gobilago"));
  }

  function LegalNav({ theme, setTheme }) {
    return h("header", { className: "nav is-scrolled" },
      h("div", { className: "container nav-inner" },
        h("a", { href: homeUrl(), className: "nav-logo", "aria-label": ui.home }, h(Logo, { size: 28 })),
        h("nav", { className: "nav-links" },
          h("a", { href: homeUrl("#principle") }, ui.method),
          h("a", { href: homeUrl("#features") }, ui.features),
          h("a", { href: homeUrl("#roadmap") }, ui.story)),
        h("div", { className: "nav-actions" },
          h("button", { className: "nav-theme", "aria-label": ui.theme, onClick: () => setTheme(theme === "dark" ? "light" : "dark") },
            Ico(theme === "dark" ? "sun" : "moon")),
          h("a", {
            className: "nav-theme",
            href: locale.alternateUrl,
            onClick: locale.rememberLanguage,
            "aria-label": ui.language,
            style: { fontFamily: "var(--font-mono, monospace)", fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.05em" },
          }, locale.alternateLang.toUpperCase()),
          h("span", { className: "nav-hide-sm" },
            h(Button, { variant: "primary", size: "sm", icon: Ico("apple"), as: "a", href: homeUrl("#get") }, ui.getApp)))));
  }

  function LegalFooter() {
    const year = new Date().getFullYear();
    return h("footer", { className: "footer" },
      h("div", { className: "container footer-inner" },
        h("div", { className: "footer-brand" },
          h(Logo, { size: 30 }),
          h("p", null, ui.brand)),
        h("div", { className: "footer-cols" },
          h("div", null, h("h4", null, ui.product),
            h("a", { href: homeUrl("#principle") }, ui.method),
            h("a", { href: homeUrl("#types") }, ui.studying),
            h("a", { href: homeUrl("#features") }, ui.features)),
          h("div", null, h("h4", null, ui.legal),
            h("a", { href: locale.urlFor(locale.lang, "terms") }, ui.terms),
            h("a", { href: locale.urlFor(locale.lang, "privacy") }, ui.privacy)),
          h("div", null, h("h4", null, ui.contact),
            h("a", { href: locale.urlFor(locale.lang, "support") }, ui.support),
            h("a", { href: "mailto:contact@gobilago.com" }, "contact@gobilago.com"))),
        h("div", { className: "footer-foot" },
          h("span", { className: "gb-mono" }, "© " + year + " Gobilago"),
          h("span", null, ui.made))));
  }

  function Section({ id, num, title, children }) {
    return h("section", { className: "legal-section", id },
      h("h2", null, h("span", { className: "legal-num" }, num), title), children);
  }
  function P(...kids) { return h("p", null, ...kids); }
  function UL(items) { return h("ul", null, items.map((it, i) => h("li", { key: i }, it))); }
  function Callout(text) {
    return h("div", { className: "legal-callout" }, Ico("info"), h("p", null, text));
  }

  function LegalPage({ doc }) {
    const [theme, setThemeState] = useState(() => localStorage.getItem("gobilago-theme") || "light");
    const setTheme = (mode) => { setThemeState(mode); localStorage.setItem("gobilago-theme", mode); };
    useEffect(() => {
      document.documentElement.setAttribute("data-theme", theme);
      document.documentElement.setAttribute("data-warm", "on");
      if (window.lucide) window.lucide.createIcons();
    }, [theme]);
    useEffect(() => { if (window.lucide) window.lucide.createIcons(); });

    const meta = doc.meta || (ui.lastUpdated + " " + doc.updated + " · " + ui.effective + " " + doc.updated);
    return h(React.Fragment, null,
      h(LegalNav, { theme, setTheme }),
      h("main", null,
        h("div", { className: "container legal-hero" },
          h("div", { className: "legal-wrap" },
            h("aside", { className: "legal-toc" },
              h("h4", null, ui.toc),
              doc.sections.map((section, i) => h("a", { key: i, href: "#" + section.id }, section.title))),
            h("article", { className: "legal-body" },
              h("h1", null, doc.title),
              h("p", { className: "legal-meta" }, meta),
              h("div", { className: "legal-intro" }, doc.intro),
              doc.sections.map((section, i) => h(Section, {
                key: i,
                id: section.id,
                num: String(i + 1).padStart(2, "0"),
                title: section.title,
              }, section.body)))))),
      h(LegalFooter, null));
  }

  window.LegalKit = { LegalPage, P, UL, Callout, h };
})();
