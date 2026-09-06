// ─────────────────────────────────────────────────────────────────────────────
// Site-wide brand configuration for TopGLP1.
//
// TopGLP1 is an independent, education-first resource focused specifically on
// GLP-1 medications: how the drugs work, dosing, side effects, cost, and how
// to access treatment. Provider comparisons exist but sit BELOW the science —
// the site's reason to exist is being the clearest GLP-1 explainer on the web.
// ─────────────────────────────────────────────────────────────────────────────

export const SITE = {
  name: "TopGLP1",
  domain: "topglp1.io",
  url: "https://www.topglp1.io",
  // Short, spoken-brand tagline used in the header and OG.
  tagline: "The independent guide to GLP-1 medications",
  // One-sentence description used across metadata.
  description:
    "TopGLP1 is an independent, science-first guide to GLP-1 medications — how semaglutide, tirzepatide and retatrutide work, dosing schedules, side effects, real-world results, cost, and how to get treatment safely.",
  team: "TopGLP1 Editorial Team",
  // Contact / editorial identity used in schema and the footer.
  email: "editorial@topglp1.io",
  founded: "2026",
  locale: "en_US",
} as const;

// A stable "content reviewed" date shown across evergreen pages. Bump when the
// medical content is re-reviewed so on-page "Last reviewed" lines, schema
// dateModified and the sitemap lastmod all move together.
export const CONTENT_REVIEWED = "2026-09-01";

// Absolute URL helper for canonical / OpenGraph / schema.
export function absoluteUrl(path: string): string {
  if (path === "/") return SITE.url;
  return `${SITE.url}${path.startsWith("/") ? path : `/${path}`}`;
}
