(() => {
  // <stdin>
  (() => {
    var e = document.body, o, i;
    function t() {
      return parseInt(localStorage.getItem("wcTheme") || 2);
    }
    function n() {
      return Boolean(window.wc.darkLightEnabled);
    }
    function s() {
      if (!n())
        return console.debug("User theming disabled."), { isDarkTheme: window.wc.isSiteThemeDark, themeMode: window.wc.isSiteThemeDark ? 1 : 0 };
      console.debug("User theming enabled.");
      let s2, o2 = t();
      switch (console.debug(`User's theme variation: ${o2}`), o2) {
        case 0:
          s2 = false;
          break;
        case 1:
          s2 = true;
          break;
        default:
          window.matchMedia("(prefers-color-scheme: dark)").matches ? s2 = true : window.matchMedia("(prefers-color-scheme: light)").matches ? s2 = false : s2 = window.wc.isSiteThemeDark;
          break;
      }
      return s2 && !e.classList.contains("dark") ? (console.debug("Applying Wowchemy dark theme"), document.body.classList.add("dark")) : !s2 && e.classList.contains("dark") && (console.debug("Applying Wowchemy light theme"), document.body.classList.remove("dark")), { isDarkTheme: s2, themeMode: o2 };
    }
    o = true, i = false, window.wc = { darkLightEnabled: o, isSiteThemeDark: i }, window.netlifyIdentity && window.netlifyIdentity.on("init", (e2) => {
      e2 || window.netlifyIdentity.on("login", () => {
        document.location.href = "/admin/";
      });
    }), s(), window.PlotlyConfig = { MathJaxConfig: "local" };
  })();
})();
/*! Copyright 2016-present George Cushen (https://georgecushen.com/) */
/*! License: https://github.com/wowchemy/wowchemy-hugo-modules/blob/main/LICENSE.md */
/*! Wowchemy v5.0.0-beta.3 | https://wowchemy.com/ */
