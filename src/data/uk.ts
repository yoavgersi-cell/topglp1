// ─────────────────────────────────────────────────────────────────────────────
// UK GLP-1 data.
//
// The UK market is a different product from the US one: there is NO legal
// compounded-GLP-1 market here (the MHRA actively enforces against it) — access
// is brand-only (Mounjaro, Wegovy) via prescription, on the NHS (heavily
// restricted) or privately. Everything below is authored for a UK audience and
// priced in GBP.
//
// Pricing is provider-reported and changes often (there have been list-price
// changes in 2025–26). We show ranges and say "verify current price" rather than
// inventing a precise figure. Third-party ratings (Trustpilot) are added only
// from a cited, dated source — never invented.
// ─────────────────────────────────────────────────────────────────────────────

export interface UkProvider {
  id: string;
  name: string;
  slug: string;
  /** Affiliate/outbound URL. "#" until the live tracking link is in. */
  url: string;
  ctaText: string;
  /** True for our lead UK pick. */
  champion?: boolean;
  tagline: string;
  /** Regulatory credentials — the UK trust signal that matters most. */
  regulated: string;
  /** Medications offered. */
  meds: string[];
  /** Provider-reported monthly price ranges (GBP). */
  price: { mounjaro?: string; wegovy?: string; wegovyPill?: string };
  minBmi: string;
  delivery: string;
  included: string[];
  standout: string;
  watchOut: string;
  pros: string[];
  cons: string[];
  /**
   * Verified third-party reviews (Trustpilot). Added only once confirmed from a
   * dated source — left undefined until then so nothing is invented.
   */
  trustpilot?: {
    score: string;
    scoreValue: number;
    scoreMax: number;
    count: number;
    asOf: string;
  };
}

export const UK_PROVIDERS: UkProvider[] = [
  {
    id: "medexpress",
    name: "MedExpress",
    slug: "medexpress",
    url: "#",
    ctaText: "Check eligibility",
    champion: true,
    tagline: "GPhC-registered UK online pharmacy with fast, often next-day delivery",
    regulated: "GPhC-registered online pharmacy (UK), CQC-regulated",
    meds: ["Mounjaro (tirzepatide)", "Wegovy injection (semaglutide)", "Wegovy pill (oral semaglutide)", "Orlos (orlistat)"],
    price: {
      mounjaro: "from ~£179.99/mo (varies by dose, up to ~£309.99)",
      wegovy: "from ~£99.99/mo (varies by dose, up to ~£279.99)",
      wegovyPill: "oral semaglutide available — price varies by dose",
    },
    minBmi: "Assessed from BMI 25 (with risk factors) — clinician decides",
    delivery: "Home delivery, frequently next-day",
    included: ["Online clinician assessment", "Medication", "Home delivery"],
    standout: "A properly regulated UK pharmacy (GPhC + CQC) offering the full brand range with quick delivery",
    watchOut: "Prices are list-price and change; cheaper headline doses may not include everything — compare the checkout total",
    pros: [
      "GPhC-registered and CQC-regulated — verifiable UK credentials",
      "Full brand range: Mounjaro, Wegovy injection and the Wegovy pill",
      "Fast, frequently next-day delivery",
      "Clinician assessment on every order",
    ],
    cons: [
      "Brand-name only (as with all legal UK options) — no cheap compounded route",
      "List prices change with manufacturer pricing; confirm today's cost at checkout",
      "Cash-pay private service — not an NHS route",
    ],
    // trustpilot: added once verified from the live Trustpilot profile (~4.3/5).
  },
];

export function getUkProvider(slug: string): UkProvider | undefined {
  return UK_PROVIDERS.find((p) => p.slug === slug);
}

export const UK_CHAMPION = UK_PROVIDERS.find((p) => p.champion) ?? UK_PROVIDERS[0];
