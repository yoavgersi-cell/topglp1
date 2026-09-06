// ─────────────────────────────────────────────────────────────────────────────
// Telehealth GLP-1 providers.
//
// These are the affiliate partners TopGLP1 features. The provider set is shared
// with our sister properties (same partners, same pricing), but the ranking,
// blurbs, structured specs and framing here are written for a GLP-1-first
// audience and power our own comparison method (see data/battles.ts).
//
// A "#" affiliateUrl is a placeholder pending the live tracking link.
// ─────────────────────────────────────────────────────────────────────────────

export interface ProviderSpecs {
  /** Headline entry price. */
  startingPrice: string;
  /** Semaglutide pricing, or "—" if not offered. */
  semaglutide: string;
  /** Tirzepatide pricing, or "—" if not offered. */
  tirzepatide: string;
  offeringType: "Compounded" | "Branded" | "Both";
  medications: string[];
  shipping: string;
  insurance: string;
  consult: string;
  /** The single thing this provider does best. */
  standout: string;
  /** An honest caveat. */
  watchOut: string;
}

export interface Provider {
  id: string;
  name: string;
  slug: string;
  rank: number;
  tagline: string;
  logo: string;
  rating: number;
  ratingLabel: string;
  reviewCount: number;
  glp1Focus: string;
  highlights: string[];
  affiliateUrl: string;
  ctaText: string;
  specs: ProviderSpecs;
}

export const PROVIDERS: Provider[] = [
  {
    id: "altrx",
    name: "altRx",
    slug: "altrx",
    rank: 1,
    tagline: "The most affordable GLP-1 program, from $89/month",
    logo: "/logos/altrx.svg",
    rating: 9.8,
    ratingLabel: "Exceptional",
    reviewCount: 14200,
    glp1Focus: "Compounded semaglutide and tirzepatide, plus brand-name Zepbound and Wegovy.",
    highlights: [
      "Compounded GLP-1 from $89/mo, GLP-1 + GIP from $149/mo",
      "Brand-name options too — Zepbound and Wegovy",
      "No insurance required; Buy Now, Pay Later available",
    ],
    affiliateUrl: "#",
    ctaText: "View Plan",
    specs: {
      startingPrice: "$89/mo",
      semaglutide: "$89/mo (compounded)",
      tirzepatide: "$149/mo (compounded GLP-1 + GIP)",
      offeringType: "Both",
      medications: ["Compounded semaglutide", "Compounded tirzepatide", "Brand Wegovy", "Brand Zepbound"],
      shipping: "Included",
      insurance: "Cash; Buy Now, Pay Later available",
      consult: "Online medical intake",
      standout: "Lowest compounded entry price and brand-name options under one roof",
      watchOut: "As with any compounded product, quality rests on the pharmacy",
    },
  },
  {
    id: "embody",
    name: "embody",
    slug: "embody",
    rank: 2,
    tagline: "Compounded GLP-1 from $69/month, shipped in 1–2 days",
    logo: "/logos/embody.svg",
    rating: 9.1,
    ratingLabel: "Excellent",
    reviewCount: 3650,
    glp1Focus: "Flat-priced compounded semaglutide and tirzepatide with fast shipping.",
    highlights: [
      "Semaglutide $69/mo, tirzepatide $119/mo — flat pricing",
      "Free 1–2 day shipping, no insurance required",
      "Licensed doctors, LegitScript-certified, 503A pharmacies",
    ],
    affiliateUrl: "#",
    ctaText: "View Plan",
    specs: {
      startingPrice: "$69/mo",
      semaglutide: "$69/mo (compounded)",
      tirzepatide: "$119/mo (compounded)",
      offeringType: "Compounded",
      medications: ["Compounded semaglutide", "Compounded tirzepatide"],
      shipping: "Free 1–2 day",
      insurance: "Cash only",
      consult: "Online visit with licensed doctors",
      standout: "Flat, transparent pricing with LegitScript-certified 503A pharmacies",
      watchOut: "Compounded only — no brand-name option",
    },
  },
  {
    id: "ro",
    name: "Ro",
    slug: "ro",
    rank: 3,
    tagline: "Simple online GLP-1 care with brand-name access",
    logo: "/logos/ro.svg",
    rating: 9.5,
    ratingLabel: "Excellent",
    reviewCount: 8430,
    glp1Focus: "Clinician-reviewed access to branded GLP-1 medications and insurance coordination.",
    highlights: [
      "Licensed providers review every treatment plan",
      "Help navigating branded GLP-1 access and insurance",
      "Convenient online follow-ups and support",
    ],
    affiliateUrl: "#",
    ctaText: "View Plan",
    specs: {
      startingPrice: "Varies (branded, insurance-dependent)",
      semaglutide: "Brand Wegovy / Ozempic (insurance-dependent)",
      tirzepatide: "Brand Zepbound / Mounjaro (insurance-dependent)",
      offeringType: "Branded",
      medications: ["Brand Wegovy", "Brand Zepbound", "Brand Ozempic", "Brand Mounjaro"],
      shipping: "Varies by pharmacy",
      insurance: "Works with insurance",
      consult: "Clinician-reviewed treatment plan",
      standout: "Established platform for FDA-approved branded GLP-1 with insurance help",
      watchOut: "Can be expensive without insurance coverage",
    },
  },
  {
    id: "trimrx",
    name: "TrimRX",
    slug: "trimrx",
    rank: 4,
    tagline: "Affordable access to GLP-1 programs",
    logo: "/logos/trimrx.svg",
    rating: 9.4,
    ratingLabel: "Excellent",
    reviewCount: 5840,
    glp1Focus: "Compounded semaglutide and tirzepatide with ongoing clinical guidance.",
    highlights: [
      "Competitive monthly pricing",
      "Flexible treatment plans available",
      "Ongoing clinical guidance included",
    ],
    affiliateUrl: "#",
    ctaText: "View Plan",
    specs: {
      startingPrice: "Competitive (varies by plan)",
      semaglutide: "Compounded (varies)",
      tirzepatide: "Compounded (varies)",
      offeringType: "Compounded",
      medications: ["Compounded semaglutide", "Compounded tirzepatide"],
      shipping: "Included",
      insurance: "Cash",
      consult: "Ongoing clinical guidance",
      standout: "Ongoing clinical guidance rather than a one-and-done script",
      watchOut: "Entry pricing is less transparent upfront",
    },
  },
  {
    id: "wellmedr",
    name: "wellmedr",
    slug: "wellmedr",
    rank: 5,
    tagline: "AI-driven telehealth: compounded GLP-1/GIP + longevity care",
    logo: "/logos/wellmedr.svg",
    rating: 8.9,
    ratingLabel: "Very Good",
    reviewCount: 2980,
    glp1Focus: "Compounded tirzepatide (GLP-1/GIP) with add-on longevity and micronutrient support.",
    highlights: [
      "Compounded GLP-1/GIP (tirzepatide) — 50% off first month",
      "GLP-1 + NAD+/B12 microdose; board-certified specialists",
      "Broader platform: TRT, NAD+, hair & sexual health",
    ],
    affiliateUrl: "#",
    ctaText: "View Plan",
    specs: {
      startingPrice: "50% off first month",
      semaglutide: "Compounded (varies)",
      tirzepatide: "Compounded GLP-1/GIP",
      offeringType: "Compounded",
      medications: ["Compounded tirzepatide (GLP-1/GIP)", "NAD+/B12 microdose add-ons"],
      shipping: "Included",
      insurance: "Cash",
      consult: "Board-certified specialists, AI-assisted intake",
      standout: "GLP-1 paired with a broader longevity and wellness stack",
      watchOut: "Add-on services can add cost beyond the core GLP-1",
    },
  },
  {
    id: "healthrx",
    name: "HealthRx",
    slug: "healthrx",
    rank: 6,
    tagline: "GLP-1 program from $99/month with overnight delivery",
    logo: "/logos/healthrx.svg",
    rating: 9.0,
    ratingLabel: "Excellent",
    reviewCount: 2100,
    glp1Focus: "Compounded semaglutide with cold-chain overnight shipping.",
    highlights: [
      "Semaglutide from $99/mo on a 12-month prepaid plan",
      "Free overnight cold-chain shipping on every plan",
      "LegitScript-certified; licensed 503A pharmacies",
    ],
    affiliateUrl: "https://track.revoffers.com/aff_c?offer_id=1630&aff_id=12905&url_id=12442",
    ctaText: "Check Eligibility",
    specs: {
      startingPrice: "$99/mo (12-month prepaid)",
      semaglutide: "$99/mo (compounded, prepaid plan)",
      tirzepatide: "—",
      offeringType: "Compounded",
      medications: ["Compounded semaglutide"],
      shipping: "Free overnight cold-chain",
      insurance: "Cash",
      consult: "Clinician consult",
      standout: "Overnight cold-chain shipping and a low semaglutide price",
      watchOut: "Lowest price needs a 12-month prepay; semaglutide only (no tirzepatide)",
    },
  },
  {
    id: "sprout",
    name: "Sprout",
    slug: "sprout",
    rank: 7,
    tagline: "Save $200 on your first month",
    logo: "/logos/sprout.svg",
    rating: 8.4,
    ratingLabel: "Very Good",
    reviewCount: 1890,
    glp1Focus: "Personalized GLP-1 treatment plans with prescriptions shipped within 2 days.",
    highlights: [
      "Personalized GLP-1 treatment plans",
      "Prescription shipped within 2 days",
      "Designed around your health goals",
    ],
    affiliateUrl: "https://track.revoffers.com/aff_c?offer_id=1286&aff_id=12905",
    ctaText: "Get Started",
    specs: {
      startingPrice: "$200 off first month",
      semaglutide: "Compounded (varies)",
      tirzepatide: "Compounded (varies)",
      offeringType: "Compounded",
      medications: ["Compounded semaglutide", "Compounded tirzepatide"],
      shipping: "Ships within 2 days",
      insurance: "Cash",
      consult: "Personalized plan",
      standout: "Strong first-month discount and fast dispatch",
      watchOut: "Intro pricing may step up after the first month",
    },
  },
  {
    id: "found",
    name: "Found",
    slug: "found",
    rank: 8,
    tagline: "Up to $100 off your membership plan",
    logo: "/logos/found.svg",
    rating: 8.0,
    ratingLabel: "Good",
    reviewCount: 3200,
    glp1Focus: "GLP-1 medications paired with behavior coaching; works with major insurance.",
    highlights: [
      "GLP-1 medication plus habit coaching",
      "Affordable GLP-1 delivered fast",
      "Covered by major insurance plans",
    ],
    affiliateUrl: "https://joinfound.com/",
    ctaText: "View Plan",
    specs: {
      startingPrice: "Membership + medication",
      semaglutide: "Brand / insurance-dependent",
      tirzepatide: "Brand / insurance-dependent",
      offeringType: "Branded",
      medications: ["Brand GLP-1", "Behavior coaching"],
      shipping: "Fast delivery",
      insurance: "Works with major insurance",
      consult: "Medical + behavioral coaching",
      standout: "Medication paired with structured habit coaching",
      watchOut: "Membership fee sits on top of medication cost",
    },
  },
  {
    id: "skinnyrx",
    name: "skinnyRx",
    slug: "skinnyrx",
    rank: 9,
    tagline: "Physician-prescribed GLP-1 weight loss",
    logo: "/logos/skinnyrx.svg",
    rating: 8.0,
    ratingLabel: "Good",
    reviewCount: 2100,
    glp1Focus: "Compounded semaglutide and tirzepatide with nationwide home delivery.",
    highlights: [
      "Physician-prescribed GLP-1 medications",
      "Compounded semaglutide and tirzepatide",
      "Fast home delivery nationwide",
    ],
    affiliateUrl: "https://skinnyrx.com/",
    ctaText: "View Plan",
    specs: {
      startingPrice: "Varies",
      semaglutide: "Compounded (varies)",
      tirzepatide: "Compounded (varies)",
      offeringType: "Compounded",
      medications: ["Compounded semaglutide", "Compounded tirzepatide"],
      shipping: "Nationwide home delivery",
      insurance: "Cash",
      consult: "Physician-prescribed",
      standout: "Straightforward physician-prescribed compounded GLP-1",
      watchOut: "Fewer published details than top-ranked programs",
    },
  },
  {
    id: "sequence",
    name: "Sequence by WeightWatchers",
    slug: "sequence",
    rank: 10,
    tagline: "Clinician-led GLP-1 with insurance coordination",
    logo: "/logos/sequence.svg",
    rating: 8.3,
    ratingLabel: "Very Good",
    reviewCount: 1500,
    glp1Focus: "Branded GLP-1 access with prior-authorization help and behavioral support.",
    highlights: [
      "Clinician-led GLP-1 telehealth from WeightWatchers",
      "Insurance coordination and prior-auth support",
      "Integrated WeightWatchers behavioral program",
    ],
    affiliateUrl: "https://www.weightwatchers.com/us/clinic",
    ctaText: "Visit Site",
    specs: {
      startingPrice: "Membership (branded, insurance-dependent)",
      semaglutide: "Brand / insurance-dependent",
      tirzepatide: "Brand / insurance-dependent",
      offeringType: "Branded",
      medications: ["Brand GLP-1", "WeightWatchers behavioral program"],
      shipping: "Varies by pharmacy",
      insurance: "Works with insurance + prior-auth support",
      consult: "Clinician-led",
      standout: "Prior-authorization support and the WeightWatchers program built in",
      watchOut: "Best value only materializes if your insurance covers GLP-1",
    },
  },
];

export function getProvider(id: string): Provider | undefined {
  return PROVIDERS.find((p) => p.id === id);
}
