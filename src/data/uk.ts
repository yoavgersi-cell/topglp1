// ─────────────────────────────────────────────────────────────────────────────
// UK weight-loss providers — COMPLIANCE-FIRST.
//
// UK law (Human Medicines Regulations 2012) and the CAP Code (rule 12.12) ban
// advertising prescription-only medicines to the public. The MHRA/ASA/GPhC
// treat medicine NAMES, the term "GLP-1", "weight-loss injection/pen/jab",
// medicine prices and pen imagery as prohibited references.
//
// So this data is deliberately PROVIDER-LED and medicine-free: we promote a
// regulated weight-loss SERVICE (which is allowed), never a medicine. No drug
// names, no drug prices, no "GLP-1". Trustpilot ratings describe the PROVIDER,
// which is fine. Anything commercial here should still be checked via the ASA's
// free CAP Copy Advice service before scaling.
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
  /** Provider-level positioning — no medicine references. */
  tagline: string;
  /** Regulatory credentials — the UK trust signal that matters most. */
  regulated: string;
  /** How the service works, in medicine-free terms. */
  howItWorks: string[];
  minBmi: string;
  delivery: string;
  /** How the service is structured (compare axis). */
  serviceModel: string;
  /** Money-back / guarantee, if any. */
  moneyBack?: string;
  standout: string;
  /** An honest caveat (compare axis). */
  watchOut: string;
  pros: string[];
  cons: string[];
  /** Provider Trustpilot rating (about the service — allowed). Verified only. */
  trustpilot?: {
    score: string;
    scoreValue: number;
    scoreMax: number;
    count: number;
    asOf: string;
    /** Service-focused quotes only — never medicine references. */
    quotes?: { name: string; stars: number; label: "Invited" | "Verified" | "Unprompted"; date: string; text: string }[];
  };
}

export const UK_PROVIDERS: UkProvider[] = [
  {
    id: "medexpress",
    name: "MedExpress",
    slug: "medexpress",
    url: "#",
    ctaText: "Check your eligibility",
    champion: true,
    tagline: "A GPhC-registered UK online pharmacy and medical weight-loss service",
    regulated: "GPhC-registered online pharmacy (UK), CQC-regulated",
    howItWorks: [
      "Complete a short online health assessment",
      "A prescriber reviews whether treatment is suitable for you",
      "If approved, your order is dispatched discreetly to your door",
    ],
    minBmi: "You may be suitable from a BMI of 25 — a clinician decides",
    delivery: "Home delivery, frequently next-day, no subscription required",
    serviceModel: "Pay-as-you-go online pharmacy — no subscription lock-in",
    standout: "A properly regulated UK pharmacy (GPhC + CQC) with a strong service record and fast delivery",
    watchOut: "It's a straightforward pharmacy rather than an app-based coaching programme, and list prices change — check the current cost at checkout",
    pros: [
      "GPhC-registered and CQC-regulated — verifiable UK credentials",
      "Clinician assessment on every order",
      "Fast, frequently next-day delivery",
      "No subscription lock-in — order as you need",
      "Long-established, with tens of thousands of service reviews",
    ],
    cons: [
      "A private, cash-pay service — not an NHS route",
      "A pharmacy rather than an app-based coaching programme",
      "Suitability is decided by a clinician; not everyone will be approved",
    ],
    trustpilot: {
      score: "4.3 / 5",
      scoreValue: 4.3,
      scoreMax: 5,
      count: 54868,
      asOf: "September 8, 2026",
      quotes: [
        {
          name: "rene tranter",
          stars: 5,
          label: "Unprompted",
          date: "September 3, 2026",
          text: "Straightforward process. Covered relevant details before approving the order. Delivery was within 24 hours by first-class mail.",
        },
        {
          name: "JJ",
          stars: 5,
          label: "Invited",
          date: "July 29, 2026",
          text: "Always an excellent service. Great ordering process and speedy delivery service.",
        },
        {
          name: "Kerry",
          stars: 5,
          label: "Invited",
          date: "October 1, 2025",
          text: "Easy to complete the questions and answers — informative website that answered all my questions.",
        },
        {
          name: "Sarah",
          stars: 5,
          label: "Invited",
          date: "December 18, 2025",
          text: "Quick delivery, helpful agents to answer any questions.",
        },
      ],
    },
  },
  {
    id: "voy",
    name: "Voy",
    slug: "voy",
    url: "#",
    ctaText: "Check your eligibility",
    tagline: "A clinically supported, app-based UK weight-loss programme",
    regulated: "Clinician-led UK weight-loss service, supplied via a registered pharmacy",
    howItWorks: [
      "Complete an online health assessment",
      "A clinician reviews whether the programme is suitable for you",
      "If approved, treatment and app-based coaching are set up, with ongoing support",
    ],
    minBmi: "Suitability is assessed by a clinician based on your BMI and history",
    delivery: "Home delivery with automatic refills (cancel anytime)",
    serviceModel: "Subscription programme with app tracking and coaching",
    moneyBack: "180-day money-back promise",
    standout: "One of the highest Trustpilot ratings in the UK, an app-based coaching programme, and a 180-day money-back promise",
    watchOut: "Subscription model — some reviewers were surprised by monthly price increases, so check the ongoing cost before committing",
    pros: [
      "Very high Trustpilot rating, largely from verified customers",
      "App-based programme with weight tracking and coaching support",
      "180-day money-back promise",
      "Trusted by 100,000+ UK customers",
    ],
    cons: [
      "Subscription model — reviewers report monthly price increases",
      "More of an ongoing programme than a simple pharmacy",
    ],
    trustpilot: {
      score: "4.7 / 5",
      scoreValue: 4.7,
      scoreMax: 5,
      count: 25825,
      asOf: "September 8, 2026",
      quotes: [
        {
          name: "Diane Kay",
          stars: 5,
          label: "Verified",
          date: "September 5, 2026",
          text: "Great service, advice and support.",
        },
        {
          name: "Rachel McCormack",
          stars: 5,
          label: "Verified",
          date: "September 7, 2026",
          text: "Excellent interaction. I felt as though I had been listened to.",
        },
        {
          name: "Donna",
          stars: 5,
          label: "Verified",
          date: "September 5, 2026",
          text: "From filling out the application to delivery, the response was very quick and good.",
        },
        {
          name: "Mel Hardy",
          stars: 4,
          label: "Verified",
          date: "July 20, 2026",
          text: "Great customer service. I signed up for 6 months but was unaware how much the price would increase every month — they were accommodating and let me cancel early.",
        },
      ],
    },
  },
];

export function getUkProvider(slug: string): UkProvider | undefined {
  return UK_PROVIDERS.find((p) => p.slug === slug);
}

export const UK_CHAMPION = UK_PROVIDERS.find((p) => p.champion) ?? UK_PROVIDERS[0];

// ── Provider-vs-provider comparisons (compliant: provider names only) ─────────
// Canonical ordering keeps the champion first so slugs and "our pick" are stable.
function orderPair(a: UkProvider, b: UkProvider): [UkProvider, UkProvider] {
  if (a.champion && !b.champion) return [a, b];
  if (b.champion && !a.champion) return [b, a];
  return a.slug < b.slug ? [a, b] : [b, a];
}

export function ukBattleSlugs(): string[] {
  const slugs: string[] = [];
  for (let i = 0; i < UK_PROVIDERS.length; i++) {
    for (let j = i + 1; j < UK_PROVIDERS.length; j++) {
      const [a, b] = orderPair(UK_PROVIDERS[i], UK_PROVIDERS[j]);
      slugs.push(`${a.slug}-vs-${b.slug}`);
    }
  }
  return slugs;
}

export function resolveUkBattle(slug: string): { a: UkProvider; b: UkProvider; pick: UkProvider } | null {
  const m = slug.match(/^(.+)-vs-(.+)$/);
  if (!m) return null;
  const p1 = getUkProvider(m[1]);
  const p2 = getUkProvider(m[2]);
  if (!p1 || !p2 || p1.id === p2.id) return null;
  const [a, b] = orderPair(p1, p2);
  // Our pick is the champion; if neither is champion, the higher-ranked (a).
  const pick = a.champion ? a : b.champion ? b : a;
  return { a, b, pick };
}

export function ukBattlesForProvider(slug: string): { slug: string; title: string }[] {
  const p = getUkProvider(slug);
  if (!p) return [];
  return UK_PROVIDERS.filter((x) => x.id !== p.id).map((x) => {
    const [a, b] = orderPair(p, x);
    return { slug: `${a.slug}-vs-${b.slug}`, title: `${a.name} vs ${b.name}` };
  });
}
