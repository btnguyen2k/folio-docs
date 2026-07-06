/*
 * folio-docs — MOCK DATA (search index).
 *
 * This is the only content that lives in JavaScript. It powers the client-side
 * search on search.html (search cannot be done in pure HTML/CSS). Every other
 * page is authored as static HTML.
 *
 * To build your own site: replace these entries so each one points (via `url`)
 * at one of your real documentation pages. Keep this list in sync with the
 * articles you publish. This file contains DATA only — no behavior. Search
 * behavior lives in js/search.js; UI effects live in js/effects.js.
 *
 * Loaded as a classic script; exposes `window.MOCK_DATA`.
 */
window.MOCK_DATA = {
  categories: [
    {
      id: "getting-started",
      title: "Getting Started",
      icon: "🚀",
      articles: [
        {
          id: "introduction",
          title: "Introduction",
          summary: "What folio-docs is, who it is for, and what you can build with it.",
          tags: ["overview", "concepts"],
          url: "article.html?category=getting-started&article=introduction",
        },
        {
          id: "installation",
          title: "Installation",
          summary: "Download the template and serve it locally in under a minute.",
          tags: ["setup", "cli"],
          url: "article.html?category=getting-started&article=installation",
        },
        {
          id: "project-structure",
          title: "Project Structure",
          summary: "How pages, shared layout and mock data fit together.",
          tags: ["concepts", "structure"],
          url: "article.html?category=getting-started&article=project-structure",
        },
      ],
    },
    {
      id: "guides",
      title: "Guides",
      icon: "📘",
      articles: [
        {
          id: "writing-articles",
          title: "Writing Articles",
          summary: "Add a new article page and link it in the navigation.",
          tags: ["content", "how-to"],
          url: "article.html?category=guides&article=writing-articles",
        },
        {
          id: "theming",
          title: "Theming & Dark Mode",
          summary: "Customize colors and use the built-in light/dark toggle.",
          tags: ["styling", "tailwind"],
          url: "article.html?category=guides&article=theming",
        },
      ],
    },
    {
      id: "reference",
      title: "Reference",
      icon: "⚙️",
      articles: [
        {
          id: "data-model",
          title: "Data Model",
          summary: "The shape of categories and articles used by search.",
          tags: ["reference", "data"],
          url: "article.html?category=reference&article=data-model",
        },
      ],
    },
  ],
};
