#!/usr/bin/env node
// ─────────────────────────────────────────────────────────────────────────────
// SEO / GEO health check for Top GLP-1.
//
// Deterministic guardian: validates every SEO/GEO invariant the site relies on
// so nothing silently regresses. Run it after `next build`:
//
//     npm run build && node scripts/seo-audit.mjs
//
// It reads the built static HTML in .next/server/app plus a few source files,
// prints a grouped PASS / WARN / FAIL report, and exits non-zero if any FAIL.
// The daily SEO Routine runs this, auto-fixes the safe failures, and reports
// the rest. No network, no server needed.
// ─────────────────────────────────────────────────────────────────────────────

import { readFileSync, readdirSync, existsSync, statSync } from "node:fs";
import { join, relative } from "node:path";

const ROOT = process.cwd();
const APP = join(ROOT, ".next", "server", "app");

const fails = [];
const warns = [];
const passes = [];
const fail = (m) => fails.push(m);
const warn = (m) => warns.push(m);
const pass = (m) => passes.push(m);

// Non-HTML routes that are emitted by route handlers / metadata files
// (no .html file) but are legitimate link targets.
const EXTRA_ROUTES = new Set([
  "/robots.txt",
  "/sitemap.xml",
  "/llms.txt",
  "/favicon.ico",
  "/icon",
  "/apple-icon",
  "/opengraph-image",
  "/manifest.webmanifest",
]);

function walk(dir, out = []) {
  if (!existsSync(dir)) return out;
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    const s = statSync(p);
    if (s.isDirectory()) walk(p, out);
    else if (name.endsWith(".html")) out.push(p);
  }
  return out;
}

// filepath .next/server/app/reviews/embody.html -> route /reviews/embody
function fileToRoute(file) {
  let r = "/" + relative(APP, file).replace(/\\/g, "/").replace(/\.html$/, "");
  if (r === "/index") r = "/";
  r = r.replace(/\/index$/, "");
  return r;
}

function count(hay, needleRe) {
  return (hay.match(needleRe) || []).length;
}

function readIf(p) {
  try {
    return readFileSync(p, "utf8");
  } catch {
    return null;
  }
}

// ── 1. Built output present ──────────────────────────────────────────────────
if (!existsSync(APP)) {
  console.error(
    "✗ No build output at .next/server/app — run `npm run build` first.",
  );
  process.exit(2);
}

const htmlFiles = walk(APP);
if (htmlFiles.length === 0) {
  console.error("✗ Build output has no HTML pages.");
  process.exit(2);
}

// Valid-route set for internal-link checking.
const routes = new Set(EXTRA_ROUTES);
for (const f of htmlFiles) routes.add(fileToRoute(f));

// ── 2. Per-page checks ───────────────────────────────────────────────────────
let pagesChecked = 0;
let pagesClean = 0;
const brokenLinks = new Map(); // href -> [pages]
// Buckets for repetitive, template-level findings (summarized, not spammed).
const longTitles = [];
const longDescs = [];
const thinDescs = [];
const noJsonLd = [];

for (const file of htmlFiles) {
  const route = fileToRoute(file);
  // Skip Next.js internal special pages (global error, 404) — they legitimately
  // have no canonical/description and aren't indexable routes.
  if (route.startsWith("/_")) continue;
  const html = readFileSync(file, "utf8");
  pagesChecked++;
  let ok = true;

  // One H1.
  const h1s = count(html, /<h1[\s>]/gi);
  if (h1s === 0) {
    fail(`${route}: no <h1>`);
    ok = false;
  } else if (h1s > 1) {
    fail(`${route}: ${h1s} <h1> tags (should be exactly 1)`);
    ok = false;
  }

  // Canonical.
  if (!/<link[^>]+rel="canonical"/i.test(html)) {
    fail(`${route}: missing canonical link`);
    ok = false;
  }

  // Title.
  const titleM = html.match(/<title>([^<]*)<\/title>/i);
  const title = titleM ? titleM[1].trim() : "";
  if (!title) {
    fail(`${route}: missing/empty <title>`);
    ok = false;
  } else if (title.length > 78) {
    longTitles.push(`${route} (${title.length})`);
  }

  // Meta description.
  const descM = html.match(
    /<meta[^>]+name="description"[^>]+content="([^"]*)"/i,
  );
  const desc = descM ? descM[1].trim() : "";
  if (!desc) {
    fail(`${route}: missing meta description`);
    ok = false;
  } else if (desc.length > 205) {
    longDescs.push(`${route} (${desc.length})`);
  } else if (desc.length < 60) {
    thinDescs.push(`${route} (${desc.length})`);
  }

  // At least one JSON-LD structured-data block.
  if (!/application\/ld\+json/i.test(html)) {
    noJsonLd.push(route);
  }

  // Collect internal links for the cross-page 404 check.
  for (const m of html.matchAll(/href="(\/[^"#?]*)(?:[#?][^"]*)?"/g)) {
    let href = m[1];
    if (href.length > 1 && href.endsWith("/")) href = href.slice(0, -1);
    if (/\.(png|jpg|jpeg|svg|webp|ico|xml|txt|json|css|js|woff2?|webmanifest)$/i.test(href))
      continue;
    if (!routes.has(href)) {
      if (!brokenLinks.has(href)) brokenLinks.set(href, new Set());
      brokenLinks.get(href).add(route);
    }
  }

  if (ok) pagesClean++;
}
pass(`${pagesChecked} pages scanned, ${pagesClean} clean on required tags`);

// Summarize repetitive, template-level findings into one line each instead of
// flooding the report with hundreds of near-identical warnings.
function summarize(label, arr, limit = 5) {
  if (arr.length === 0) return;
  if (arr.length <= limit) {
    for (const x of arr) warn(`${label}: ${x}`);
  } else {
    warn(`${label}: ${arr.length} pages (e.g. ${arr.slice(0, 3).join("; ")}) — likely a template-level fix`);
  }
}
summarize("Long title", longTitles);
summarize("Long meta description", longDescs);
summarize("Thin meta description", thinDescs);
summarize("No JSON-LD", noJsonLd);

// ── 3. Internal link integrity ───────────────────────────────────────────────
if (brokenLinks.size === 0) {
  pass("No broken internal links");
} else {
  for (const [href, pagesSet] of brokenLinks) {
    const pages = [...pagesSet];
    const where = pages.slice(0, 3).join(", ") + (pages.length > 3 ? ` +${pages.length - 3} more` : "");
    fail(`Broken internal link ${href} (linked from ${where})`);
  }
}

// ── 4. Schema-specific checks (money pages) ──────────────────────────────────
// Review pages that ship verified external reviews should carry an
// AggregateRating; medical pages should carry MedicalWebPage + lastReviewed.
const embody = readIf(join(APP, "reviews", "embody.html"));
if (embody) {
  if (/"@type":"AggregateRating"/.test(embody)) pass("Review pages: AggregateRating present (embody)");
  else fail("reviews/embody: AggregateRating schema missing");
  if (/"@type":"Product"/.test(embody)) pass("Review pages: Product schema present (embody)");
  else fail("reviews/embody: Product schema missing");
}
const sema = readIf(join(APP, "medications", "semaglutide.html"));
if (sema) {
  if (/"@type":"MedicalWebPage"/.test(sema) && /"lastReviewed"/.test(sema) && /"reviewedBy"/.test(sema))
    pass("Medical pages: MedicalWebPage + lastReviewed + reviewedBy present");
  else fail("medications/semaglutide: MedicalWebPage/lastReviewed/reviewedBy incomplete");
}

// ── 5. Global source invariants ──────────────────────────────────────────────
const robots = readIf(join(ROOT, "src", "app", "robots.ts"));
if (robots) {
  const needed = ["GPTBot", "ClaudeBot", "PerplexityBot", "Google-Extended", "OAI-SearchBot"];
  const missing = needed.filter((b) => !robots.includes(b));
  if (missing.length) fail(`robots.ts: AI crawlers missing: ${missing.join(", ")}`);
  else pass("robots.ts: all key AI crawlers allowed");
  if (!/sitemap/i.test(robots)) fail("robots.ts: no sitemap reference");
} else warn("robots.ts not found");

if (existsSync(join(ROOT, "src", "app", "llms.txt", "route.ts"))) pass("llms.txt route present");
else fail("llms.txt route missing");

if (existsSync(join(ROOT, "src", "app", "sitemap.ts"))) pass("sitemap route present");
else fail("sitemap.ts missing");

const seo = readIf(join(ROOT, "src", "lib", "seo.tsx"));
if (seo) {
  if (seo.includes("lastReviewed") && seo.includes("reviewedBy")) pass("seo.tsx: medical review signals wired");
  else fail("seo.tsx: lastReviewed/reviewedBy not wired in articleSchema");
}

// hreflang reciprocity.
const home = readIf(join(ROOT, "src", "app", "page.tsx"));
const uk = readIf(join(ROOT, "src", "app", "uk", "page.tsx"));
if (home && uk) {
  const homeOk = home.includes('"en-GB"') && home.includes("languages");
  const ukOk = uk.includes('"en-US"') && uk.includes("languages");
  if (homeOk && ukOk) pass("hreflang: US ↔ UK reciprocal");
  else fail(`hreflang reciprocity broken (home:${homeOk ? "ok" : "MISSING"}, uk:${ukOk ? "ok" : "MISSING"})`);
}

// Content freshness.
const site = readIf(join(ROOT, "src", "lib", "site.ts"));
if (site) {
  const m = site.match(/CONTENT_REVIEWED\s*=\s*"([0-9]{4}-[0-9]{2}-[0-9]{2})"/);
  if (m) {
    const ageDays = Math.floor((Date.now() - new Date(m[1]).getTime()) / 86400000);
    if (ageDays > 90) fail(`CONTENT_REVIEWED is ${ageDays} days old (${m[1]}) — stale`);
    else if (ageDays > 45) warn(`CONTENT_REVIEWED is ${ageDays} days old (${m[1]}) — consider refreshing`);
    else pass(`Content freshness OK (reviewed ${m[1]}, ${ageDays}d ago)`);
  } else warn("Could not parse CONTENT_REVIEWED");
}

// ── Report ───────────────────────────────────────────────────────────────────
const line = "─".repeat(64);
console.log(`\n${line}\nTop GLP-1 — SEO / GEO health check  (${new Date().toISOString().slice(0, 10)})\n${line}`);
console.log(`\n✓ PASS (${passes.length})`);
for (const p of passes) console.log(`  ✓ ${p}`);
if (warns.length) {
  console.log(`\n⚠ WARN (${warns.length})`);
  for (const w of warns) console.log(`  ⚠ ${w}`);
}
if (fails.length) {
  console.log(`\n✗ FAIL (${fails.length})`);
  for (const f of fails) console.log(`  ✗ ${f}`);
}
console.log(`\n${line}`);
if (fails.length) {
  console.log(`RESULT: FAIL — ${fails.length} issue(s) need fixing, ${warns.length} warning(s).`);
  process.exit(1);
}
console.log(`RESULT: PASS — all invariants hold${warns.length ? `, ${warns.length} warning(s) to review.` : "."}`);
process.exit(0);
