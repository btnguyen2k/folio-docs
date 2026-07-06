# Copilot instructions for folio-docs

## What this repository is

`folio-docs` is a **web template for building web-based technical documentation,
user guides, and similar sites** (see `README.md`).

The template is built with **pure HTML, CSS, JavaScript, and Tailwind CSS** — no
server-side framework or SPA framework. All template source lives under `src/`.

It is at an early, skeleton stage: `src/` currently holds only a placeholder
`EMPTY` file and no real templates exist yet.

## Tech stack and constraints

- **Output is static assets**: hand-authored HTML, CSS, and vanilla JavaScript.
- **Styling is Tailwind CSS.** Prefer Tailwind utility classes in markup over
  hand-written CSS; add custom CSS only when a utility approach is impractical.
- Keep client-side JavaScript plain/vanilla — do not introduce React, Vue,
  Svelte, or a bundler-heavy SPA framework unless the maintainer asks.
- All template source files go under `src/`.

## Current state (read before assuming tooling exists)

- No `package.json`, build script, test runner, or linter is configured yet.
- Do **not** invent or reference `npm run build`/`npm test` commands until the
  corresponding tooling is actually added to the repo. (A Tailwind build step will
  likely be the first tooling added; update this file when it lands.)
- The `.gitignore` is the standard Node.js template, signalling a Node-based
  toolchain (e.g., the Tailwind CLI) is expected, but nothing is installed yet.

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
