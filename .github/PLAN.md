# folio-docs — page design plan

## Project

Web template for building web-based technical documentation / user guides.
Stack: pure HTML + CSS + vanilla JS + Tailwind CSS. Source under `src/`.

## Information architecture

- A **Category** contains multiple **Articles**.
- An **Article** belongs to exactly one **Category**.

## Pages to design (7)

1. **Home / Landing** — entry point; hero, intro, links into categories/articles.
2. **Category** — lists the articles within a single category.
3. **Article** — a single documentation article (belongs to a category).
4. **Search / Search Results** — full-page search experience and results list.
5. **Changelog** — release notes (aligns with repo `RELEASE-NOTES.md`).
6. **About / Contact** — project info and contact details.
7. **404 / Not Found** — friendly error page.

## Shared layout (decided)

All pages share common chrome:
- Persistent **header**.
- Persistent **footer**.
- **Sidebar navigation** (categories/articles) with a **collapsible mobile** version.
Implement as reusable partials/markup so every page reuses the same structure.

## Theming (decided)

- Support **light + dark** themes with a user **toggle**.
- Use Tailwind's `dark:` variant (class strategy) and persist the choice (e.g., localStorage).

## Home behavior (decided)

- **Home/Landing doubles as the top-level categories index** — it lists all
  categories (no separate index page). Total pages remain **7**.

## Data (decided)

- Keep all **mock/sample data in a separate `.js` file** (`src/mock-data.js`)
  rather than inline in pages. Pages read categories/articles from this module so
  content is centralized and easy to swap out.

## Architecture principles (v2 — static-first)

- **Maximize HTML/CSS:** every page ships complete static HTML chrome (header,
  sidebar, footer) and content that developers edit directly. No JS builds layout.
- **Minimize JS**, used only for:
  - **mock data** — `src/mock-data.js` (search index) consumed by `src/js/search.js`.
  - **effects impossible in pure CSS** — `src/js/effects.js` (theme persistence).
- **Clear separation:** data JS (`mock-data.js`/`search.js`) is kept apart from
  effect JS (`effects.js`) so developers know exactly what to touch.
- **Pure-CSS interactions:** mobile nav drawer uses a checkbox + `:has()` (no JS);
  theme is applied pre-paint by a tiny inline `<head>` script, toggled by effects.js.

## Status

Implemented. All 7 pages built under `src/` and verified rendering (incl. edge
cases) via a headless jsdom pass.

### File map

- `src/index.html` — Home / categories index
- `src/category.html`, `src/article.html`, `src/search.html`,
  `src/changelog.html`, `src/about.html`, `src/404.html`
- `src/css/styles.css` — prose styles + pure-CSS mobile drawer (`:has()`)
- `src/js/effects.js` — theme-toggle persistence (the only effect JS)
- `src/mock-data.js` — search index (data only)
- `src/js/search.js` — search feature (only data-consuming script; search page only)

Every page ships **complete static HTML** for header, sidebar, footer and
content. JS is limited to theme persistence (`effects.js`) and search
(`mock-data.js` + `search.js`). Tailwind is loaded via the Play CDN (no build
step). Pages open directly from the filesystem.
