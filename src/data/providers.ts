// ─────────────────────────────────────────────────────────────────────────────
// Telehealth GLP-1 providers.
//
// These are the affiliate partners TopGLP1 features. The provider set is shared
// with our sister properties (same partners), but the ranking, blurbs and
// framing here are written for a GLP-1-first audience: we lead with what each
// clinic actually prescribes and how it's priced, not generic "weight loss."
//
// A "#" affiliateUrl is a placeholder pending the live tracking link.
// ─────────────────────────────────────────────────────────────────────────────

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
  /** GLP-1-specific one-liner on what they offer. */
  glp1Focus: string;
  highlights: string[];
  affiliateUrl: string;
  ctaText: string;
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
  },
];

export function getProvider(id: string): Provider | undefined {
  return PROVIDERS.find((p) => p.id === id);
}
