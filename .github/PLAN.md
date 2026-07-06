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

## Status

Planning complete. Ready to design pages. No page implemented yet
(`src/` holds only placeholder `EMPTY`).
