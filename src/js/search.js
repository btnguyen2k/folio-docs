/*
 * folio-docs — SEARCH (the only data-consuming page script).
 *
 * Reads the search index from window.MOCK_DATA (see mock-data.js), filters and
 * ranks it against the `?q=` query, and renders results into #search-results.
 * This is JavaScript because client-side filtering/ranking cannot be expressed
 * in pure HTML/CSS.
 *
 * This file contains DATA/search logic only — no UI effects (those are in
 * effects.js). It runs only on search.html.
 */
(function () {
  "use strict";

  var data = window.MOCK_DATA || { categories: [] };
  var input = document.getElementById("search-input");
  var results = document.getElementById("search-results");
  if (!results) return;

  function escapeHtml(str) {
    return String(str == null ? "" : str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  function getQuery() {
    return (new URLSearchParams(window.location.search).get("q") || "").trim();
  }

  // Flatten the index into { category, article } records.
  function flatten() {
    var out = [];
    data.categories.forEach(function (category) {
      (category.articles || []).forEach(function (article) {
        out.push({ category: category, article: article });
      });
    });
    return out;
  }

  function search(query) {
    var needle = query.toLowerCase();
    return flatten()
      .map(function (record) {
        var a = record.article;
        var fields = [
          { text: a.title, weight: 5 },
          { text: a.summary || "", weight: 3 },
          { text: (a.tags || []).join(" "), weight: 2 },
          { text: record.category.title, weight: 2 },
        ];
        var score = 0;
        fields.forEach(function (f) {
          if (f.text.toLowerCase().indexOf(needle) !== -1) score += f.weight;
        });
        return { record: record, score: score };
      })
      .filter(function (r) {
        return r.score > 0;
      })
      .sort(function (x, y) {
        return y.score - x.score;
      });
  }

  function resultCard(record) {
    var c = record.category;
    var a = record.article;
    return (
      '<a href="' +
      escapeHtml(a.url) +
      '" class="block rounded-xl border border-slate-200 bg-white p-5 transition hover:border-indigo-300 hover:shadow-sm dark:border-slate-800 dark:bg-slate-800/50 dark:hover:border-indigo-500/50">' +
      '<span class="text-xs font-medium uppercase tracking-wide text-indigo-600 dark:text-indigo-300">' +
      escapeHtml(c.title) +
      "</span>" +
      '<h3 class="mt-1 font-semibold text-slate-900 dark:text-white">' +
      escapeHtml(a.title) +
      "</h3>" +
      '<p class="mt-1 text-sm text-slate-500 dark:text-slate-400">' +
      escapeHtml(a.summary || "") +
      "</p>" +
      "</a>"
    );
  }

  function render() {
    var query = getQuery();
    if (input && !input.value) input.value = query;

    if (!query) {
      results.innerHTML =
        '<p class="text-slate-500 dark:text-slate-400">Type a query above to search the documentation.</p>';
      return;
    }

    var matches = search(query);
    if (matches.length === 0) {
      results.innerHTML =
        '<div class="rounded-xl border border-dashed border-slate-300 p-10 text-center dark:border-slate-700">' +
        '<p class="text-slate-600 dark:text-slate-300">No results for <strong>&ldquo;' +
        escapeHtml(query) +
        '&rdquo;</strong>.</p>' +
        '<p class="mt-1 text-sm text-slate-500 dark:text-slate-400">Try a different keyword.</p>' +
        "</div>";
      return;
    }

    results.innerHTML =
      '<p class="mb-4 text-sm text-slate-500 dark:text-slate-400">' +
      matches.length +
      " result" +
      (matches.length === 1 ? "" : "s") +
      " for <strong>&ldquo;" +
      escapeHtml(query) +
      '&rdquo;</strong></p>' +
      '<div class="grid gap-4">' +
      matches
        .map(function (m) {
          return resultCard(m.record);
        })
        .join("") +
      "</div>";
  }

  render();
})();
