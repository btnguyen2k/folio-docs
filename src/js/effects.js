/*
 * folio-docs — EFFECTS (behavior that pure HTML/CSS cannot provide).
 *
 * This file is intentionally tiny and contains NO content/data. Its only job is
 * the light/dark theme toggle, which needs JavaScript because the choice is
 * persisted in localStorage across page loads.
 *
 * (The mobile navigation drawer is pure CSS — see css/styles.css. The initial
 * theme is applied by a small inline script in each page's <head> so there is no
 * flash of the wrong theme before this file loads.)
 *
 * Keep DATA concerns out of this file — those live in mock-data.js / search.js.
 */
(function () {
  "use strict";

  document.addEventListener("click", function (event) {
    var toggle = event.target.closest("[data-theme-toggle]");
    if (!toggle) return;
    var isDark = document.documentElement.classList.toggle("dark");
    try {
      localStorage.setItem("theme", isDark ? "dark" : "light");
    } catch (e) {
      /* ignore storage errors (e.g. private mode) */
    }
  });
})();
