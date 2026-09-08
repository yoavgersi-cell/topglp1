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
  standout: string;
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
    standout: "A properly regulated UK pharmacy (GPhC + CQC) with a strong service record and fast delivery",
    pros: [
      "GPhC-registered and CQC-regulated — verifiable UK credentials",
      "Clinician assessment on every order",
      "Fast, frequently next-day delivery",
      "Long-established, with tens of thousands of service reviews",
    ],
    cons: [
      "A private, cash-pay service — not an NHS route",
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
];

export function getUkProvider(slug: string): UkProvider | undefined {
  return UK_PROVIDERS.find((p) => p.slug === slug);
}

export const UK_CHAMPION = UK_PROVIDERS.find((p) => p.champion) ?? UK_PROVIDERS[0];
