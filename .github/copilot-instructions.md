# Copilot instructions for folio-docs

## What this repository is

`folio-docs` is a **web template for building web-based technical documentation,
user guides, and similar sites** (see `README.md`).

The template is built with **pure HTML, CSS, JavaScript, and Tailwind CSS** — no
server-side framework or SPA framework. All template source lives under `src/`.

## Architecture (static-first)

- **Every page is complete static HTML.** Header, sidebar navigation, footer and
  page content are authored directly in each `src/*.html` file — no JavaScript
  builds or injects the layout. Edit the markup to change a page.
- **JavaScript is deliberately minimal and used for only two things**, kept in
  clearly separated files:
  - **Data:** `src/mock-data.js` is the search index (data only, no behavior),
    consumed by `src/js/search.js` (the only data-consuming page script, loaded
    on `search.html` only).
  - **Effects:** `src/js/effects.js` handles the light/dark theme toggle
    persistence (`localStorage`) — the only behavior CSS can't provide. It is
    loaded on every page and must stay free of any content/data.
- **Prefer HTML/CSS over JS.** The mobile nav drawer is pure CSS (a hidden
  `#nav-toggle` checkbox + `:has()` in `src/css/styles.css`), not JS. Only add JS
  for mock data or for effects genuinely impossible in HTML/CSS.
- The initial theme is applied by a tiny inline `<head>` script on each page to
  avoid a flash before `effects.js` loads.

## Tech stack and constraints

- **Output is static assets**: hand-authored HTML, CSS, and vanilla JavaScript.
- **Styling is Tailwind CSS**, loaded via the Play CDN (`cdn.tailwindcss.com`)
  with `darkMode: 'class'`. Prefer Tailwind utility classes in markup; put custom
  CSS in `src/css/styles.css` only when utilities can't express it (currently the
  drawer and `.doc-prose` article styles).
- Keep client-side JavaScript plain/vanilla — do not introduce React, Vue,
  Svelte, or a bundler-heavy SPA framework unless the maintainer asks.
- All template source files go under `src/`.

## Content model

- A **Category** contains multiple **Articles**; an **Article** belongs to one
  Category. Pages: Home (also the categories index), Category, Article, Search,
  Changelog, About/Contact, 404.
- The static pages and `mock-data.js` (the search index) both describe the same
  articles; keep them in sync when adding/renaming content.

## Current state

- No `package.json`, build step, test runner, or linter is configured. Pages run
  directly from the filesystem or any static server (`cd src && npx serve .`).
- Do **not** invent `npm run build`/`npm test` commands — none exist yet.

## Conventions

- **Branches:** `main` is the release/default branch; `dev` is the active
  development branch. Base new work on `dev`.
- **Docs files:** top-level docs use `UPPER-CASE.md` names (`README.md`,
  `RELEASE-NOTES.md`, `LICENSE.md`). Record user-facing changes in
  `RELEASE-NOTES.md`.
- **License:** MIT. Keep new files compatible with it.

## Guidance for changes

- When introducing tooling (e.g., Tailwind CSS), use that ecosystem's official
  setup and update this file once real build/test/lint commands exist.
