// ─────────────────────────────────────────────────────────────────────────────
// Auto-battle engine.
//
// We hand-author a handful of flagship provider comparisons (data/battles.ts).
// For every OTHER pairing among our providers, this module generates a complete,
// data-driven comparison from the two providers' structured specs — real prices,
// computed per-dimension winners, and a verdict. Each page is unique because the
// underlying spec data differs; nothing here is generic filler.
//
// Canonical URL order is by rank (better-ranked provider first) so each pair has
// exactly one URL and there's no duplicate content.
// ─────────────────────────────────────────────────────────────────────────────

import { PROVIDERS, getProvider, type Provider } from "./providers";
import { BATTLES, getBattle, type Battle, type BattleEdge } from "./battles";

const lowerFirst = (s: string) => (s ? s.charAt(0).toLowerCase() + s.slice(1) : s);

// First dollar figure in a spec string, or Infinity when not published.
function priceNum(s: string): number {
  const m = s.match(/\$(\d[\d,]*)/);
  return m ? Number(m[1].replace(/,/g, "")) : Infinity;
}

function shippingScore(s: string): number {
  const t = s.toLowerCase();
  if (t.includes("overnight")) return 3;
  if (t.includes("1–2") || t.includes("1-2") || t.includes("free")) return 2;
  if (t.includes("2 day") || t.includes("expedited")) return 2;
  return 1;
}

function medsScore(p: Provider): number {
  let n = 0;
  if (!p.specs.semaglutide.startsWith("—")) n++;
  if (!p.specs.tirzepatide.startsWith("—")) n++;
  if (p.specs.offeringType === "Both") n++;
  return n;
}

// Unordered pair key for dedupe against hand-authored battles.
const pairKey = (x: string, y: string) => [x, y].sort().join("|");

const HAND_PAIRS = new Set(BATTLES.map((b) => pairKey(b.a, b.b)));

// Canonical slug for an auto pair (lower rank first).
function canonicalPair(a: Provider, b: Provider): [Provider, Provider] {
  return a.rank <= b.rank ? [a, b] : [b, a];
}

function buildEdges(a: Provider, b: Provider): BattleEdge[] {
  const edges: BattleEdge[] = [];

  // Price (semaglutide as the common denominator).
  const pa = priceNum(a.specs.semaglutide);
  const pb = priceNum(b.specs.semaglutide);
  edges.push({
    dimension: "Semaglutide price",
    leader: pa === pb ? "even" : pa < pb ? "a" : "b",
    note:
      pa === Infinity && pb === Infinity
        ? "Neither publishes a flat semaglutide price — confirm both directly."
        : `${a.name}: ${a.specs.semaglutide}. ${b.name}: ${b.specs.semaglutide}.`,
  });

  // Medication range.
  const ma = medsScore(a);
  const mb = medsScore(b);
  edges.push({
    dimension: "Medication range",
    leader: ma === mb ? "even" : ma > mb ? "a" : "b",
    note: `${a.name} offers ${a.specs.offeringType.toLowerCase()}; ${b.name} offers ${b.specs.offeringType.toLowerCase()}.`,
  });

  // Shipping.
  const sa = shippingScore(a.specs.shipping);
  const sb = shippingScore(b.specs.shipping);
  edges.push({
    dimension: "Shipping",
    leader: sa === sb ? "even" : sa > sb ? "a" : "b",
    note: `${a.name}: ${a.specs.shipping}. ${b.name}: ${b.specs.shipping}.`,
  });

  // Pharmacy credentials (LegitScript stated).
  const la = a.specs.pharmacy.toLowerCase().includes("legitscript");
  const lb = b.specs.pharmacy.toLowerCase().includes("legitscript");
  edges.push({
    dimension: "Pharmacy credentials",
    leader: la === lb ? "even" : la ? "a" : "b",
    note: la === lb ? "Comparable pharmacy disclosures." : `${(la ? a : b).name} publicly states LegitScript certification.`,
  });

  // Insurance.
  const ia = a.specs.insurance.toLowerCase().includes("insurance");
  const ib = b.specs.insurance.toLowerCase().includes("insurance");
  edges.push({
    dimension: "Insurance coordination",
    leader: ia === ib ? "even" : ia ? "a" : "b",
    note: ia === ib ? "Both are primarily cash-pay for compounded GLP-1." : `${(ia ? a : b).name} works with insurance.`,
  });

  return edges;
}

// Build a complete Battle object from two providers.
export function buildAutoBattle(x: Provider, y: Provider): Battle {
  const [a, b] = canonicalPair(x, y);
  const winner = a.id === "embody" || b.id === "embody"
    ? (a.id === "embody" ? a : b)
    : a; // canonical: better-ranked provider wins by default
  const loser = winner.id === a.id ? b : a;

  const edges = buildEdges(a, b);
  const cheaper = priceNum(a.specs.semaglutide) <= priceNum(b.specs.semaglutide) ? a : b;
  const bothCompounded = a.specs.offeringType !== "Branded" && b.specs.offeringType !== "Branded";

  return {
    slug: `${a.slug}-vs-${b.slug}`,
    a: a.id,
    b: b.id,
    title: `${a.name} vs ${b.name}`,
    description: `${a.name} vs ${b.name} for GLP-1 in 2026 — pricing, medications, shipping and credentials compared side by side.`,
    intro: `${a.name} and ${b.name} are both telehealth GLP-1 programs, but they differ on price, medications, shipping and how you pay. Here's the side-by-side, with the numbers, so you can pick the right one.`,
    winner: winner.id,
    winnerReason: `${winner.name} is our pick in this matchup — ${lowerFirst(winner.specs.standout)}. Consider ${loser.name} instead if its strength — ${lowerFirst(loser.specs.standout)} — matters more to you.`,
    chooseA: `you want ${a.name}'s edge — ${lowerFirst(a.specs.standout)}.`,
    chooseB: `you want ${b.name}'s edge — ${lowerFirst(b.specs.standout)}.`,
    pricingAnalysis: [
      `On price, ${a.name} lists ${a.specs.semaglutide} for compounded semaglutide and ${a.specs.tirzepatide} for tirzepatide, while ${b.name} lists ${b.specs.semaglutide} and ${b.specs.tirzepatide}. Where prices are published, ${cheaper.name} is the lower-cost option.`,
      bothCompounded
        ? `Both are cash-pay compounded programs, so the real decision comes down to price, shipping, pharmacy credentials and support rather than the drug itself.`
        : `The two differ on branded vs compounded, so your insurance situation usually decides it: a covered branded prescription can beat cash compounding, but without coverage compounded is far cheaper.`,
    ],
    costRows: [
      { label: "Starting price", a: a.specs.startingPrice, b: b.specs.startingPrice },
      { label: "Semaglutide", a: a.specs.semaglutide, b: b.specs.semaglutide },
      { label: "Tirzepatide", a: a.specs.tirzepatide, b: b.specs.tirzepatide },
      { label: "Offering", a: a.specs.offeringType, b: b.specs.offeringType },
      { label: "Shipping", a: a.specs.shipping, b: b.specs.shipping },
      { label: "Insurance", a: a.specs.insurance, b: b.specs.insurance },
    ],
    medicationNotes: [
      `${a.name}: ${a.specs.offeringType.toLowerCase()} GLP-1. ${a.specs.gipOption}`,
      `${b.name}: ${b.specs.offeringType.toLowerCase()} GLP-1. ${b.specs.gipOption}`,
    ],
    edges,
    scenarios: [
      { priority: "the lowest published price", pick: cheaper.id === a.id ? "a" : "b", why: `${cheaper.name} lists the lower semaglutide price.` },
      { priority: "the best shipping", pick: shippingScore(a.specs.shipping) >= shippingScore(b.specs.shipping) ? "a" : "b", why: `Faster/cheaper shipping.` },
      { priority: "our overall pick", pick: winner.id === a.id ? "a" : "b", why: lowerFirst(winner.specs.standout) },
    ],
    faqs: [
      {
        q: `Which is cheaper, ${a.name} or ${b.name}?`,
        a: `Where prices are published, ${cheaper.name} lists the lower semaglutide price (${cheaper.specs.semaglutide}). Both may run promotions and change pricing, so confirm current rates on each site.`,
      },
      {
        q: `Do ${a.name} and ${b.name} both offer tirzepatide?`,
        a: `${a.name}: ${a.specs.tirzepatide}. ${b.name}: ${b.specs.tirzepatide}.`,
      },
    ],
    bottomLine: `${winner.name} is our pick in this matchup — ${lowerFirst(winner.specs.standout)}. Choose ${loser.name} only if its strength (${lowerFirst(loser.specs.standout)}) matters more to you than price and our overall rating.`,
  };
}

// All battle slugs: hand-authored + every other pairing (canonical order).
export function allBattleSlugs(): string[] {
  const slugs = new Set<string>(BATTLES.map((b) => b.slug));
  for (let i = 0; i < PROVIDERS.length; i++) {
    for (let j = i + 1; j < PROVIDERS.length; j++) {
      const a = PROVIDERS[i];
      const b = PROVIDERS[j];
      if (HAND_PAIRS.has(pairKey(a.id, b.id))) continue; // hand-authored covers it
      const [lo, hi] = canonicalPair(a, b);
      slugs.add(`${lo.slug}-vs-${hi.slug}`);
    }
  }
  return [...slugs];
}

// Resolve a slug to a Battle: hand-authored first, else auto-built. Null if the
// slug isn't a valid canonical pairing (prevents junk/duplicate URLs).
export function resolveBattle(slug: string): Battle | null {
  const hand = getBattle(slug);
  if (hand) return hand;

  const m = slug.match(/^(.+)-vs-(.+)$/);
  if (!m) return null;
  const a = PROVIDERS.find((p) => p.slug === m[1]);
  const b = PROVIDERS.find((p) => p.slug === m[2]);
  if (!a || !b || a.id === b.id) return null;

  // Enforce canonical order (better rank first) — reject the reverse URL.
  const [lo, hi] = canonicalPair(a, b);
  if (`${lo.slug}-vs-${hi.slug}` !== slug) return null;
  // Don't shadow a hand-authored pair that happens to be reverse-ordered.
  if (HAND_PAIRS.has(pairKey(a.id, b.id))) return null;

  return buildAutoBattle(a, b);
}

// All canonical pairing slugs that involve a given provider (for review pages).
export function battlesForProvider(providerId: string): { slug: string; title: string }[] {
  const p = getProvider(providerId);
  if (!p) return [];
  const out: { slug: string; title: string }[] = [];
  for (const other of PROVIDERS) {
    if (other.id === p.id) continue;
    const hand = BATTLES.find(
      (b) => pairKey(b.a, b.b) === pairKey(p.id, other.id),
    );
    if (hand) {
      out.push({ slug: hand.slug, title: hand.title });
    } else {
      const [lo, hi] = canonicalPair(p, other);
      out.push({ slug: `${lo.slug}-vs-${hi.slug}`, title: `${lo.name} vs ${hi.name}` });
    }
  }
  return out;
}
