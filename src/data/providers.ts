// ─────────────────────────────────────────────────────────────────────────────
// Telehealth GLP-1 providers.
//
// The provider set (and pricing) is shared with our sister properties, but the
// structured specs, pros/cons, blurbs and framing here are authored for a
// GLP-1-first audience and power our own comparison method (data/battles.ts).
//
// Pricing note: figures are provider-reported and change often (and shift with
// FDA shortage status). Where a provider doesn't publish a fixed price we say so
// rather than inventing one — that honesty is part of the credibility.
//
// A "#" affiliateUrl is a placeholder pending the live tracking link.
// ─────────────────────────────────────────────────────────────────────────────

export interface ProviderSpecs {
  /** Headline entry price. */
  startingPrice: string;
  /** Compounded semaglutide pricing, or "—"/note if not offered. */
  semaglutide: string;
  /** Tirzepatide pricing, or "—"/note if not offered. */
  tirzepatide: string;
  /** GLP-1 + GIP or other formulation note. */
  gipOption: string;
  offeringType: "Compounded" | "Branded" | "Both";
  /** New-patient promo, or "—". */
  firstMonthOffer: string;
  /** Billing model. */
  billing: string;
  /** What the monthly price includes. */
  included: string[];
  /** Lab-work requirement. */
  labs: string;
  /** Shipping detail. */
  shipping: string;
  /** Refill cadence. */
  refills: string;
  /** State availability. */
  states: string;
  /** Pharmacy type / accreditation. */
  pharmacy: string;
  /** Prescriber model. */
  clinicians: string;
  /** Insurance stance. */
  insurance: string;
  /** Consult type. */
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
  pros: string[];
  cons: string[];
  affiliateUrl: string;
  ctaText: string;
  specs: ProviderSpecs;
}

export const PROVIDERS: Provider[] = [
  {
    id: "altrx",
    name: "altRx",
    slug: "altrx",
    rank: 2,
    tagline: "The most affordable GLP-1 program, from $89/month",
    logo: "/logos/altrx.svg",
    rating: 9.6,
    ratingLabel: "Excellent",
    reviewCount: 14200,
    glp1Focus: "Compounded semaglutide and tirzepatide, plus brand-name Zepbound and Wegovy.",
    highlights: [
      "Compounded GLP-1 from $89/mo, GLP-1 + GIP from $149/mo",
      "Brand-name options too — Zepbound and Wegovy",
      "No insurance required; Buy Now, Pay Later available",
    ],
    pros: [
      "Lowest published compounded entry price in our list",
      "Rare option to choose compounded OR brand-name in one place",
      "Buy Now, Pay Later spreads the cost",
      "No insurance needed to start",
    ],
    cons: [
      "Compounded products aren't FDA-approved finished drugs",
      "Brand-name pricing depends on insurance/eligibility",
    ],
    affiliateUrl: "#",
    ctaText: "View Plan",
    specs: {
      startingPrice: "$89/mo (compounded semaglutide)",
      semaglutide: "$89/mo (compounded)",
      tirzepatide: "From $149/mo (compounded GLP-1 + GIP)",
      gipOption: "Yes — compounded tirzepatide (GLP-1 + GIP) from $149/mo",
      offeringType: "Both",
      firstMonthOffer: "Buy Now, Pay Later financing available",
      billing: "Monthly plans; multi-month options",
      included: ["Online medical evaluation", "Medication", "Shipping", "Dose adjustments"],
      labs: "Online intake; labs may be requested for some patients",
      shipping: "Included",
      refills: "Monthly refills",
      states: "Most US states",
      pharmacy: "US compounding pharmacies (503A); brand via licensed pharmacies",
      clinicians: "US-licensed prescribers",
      insurance: "Cash; Buy Now, Pay Later available",
      consult: "Asynchronous online medical intake",
      standout: "Lowest compounded entry price and brand-name options under one roof",
      watchOut: "As with any compounded product, quality rests on the pharmacy",
    },
  },
  {
    id: "embody",
    name: "embody",
    slug: "embody",
    rank: 1,
    tagline: "Compounded GLP-1 from $69/month, shipped in 1–2 days",
    logo: "/logos/embody.svg",
    rating: 9.9,
    ratingLabel: "Exceptional",
    reviewCount: 3650,
    glp1Focus: "Flat-priced compounded semaglutide and tirzepatide with fast shipping.",
    highlights: [
      "Semaglutide $69/mo, tirzepatide $119/mo — flat pricing",
      "Free 1–2 day shipping, no insurance required",
      "Licensed doctors, LegitScript-certified, 503A pharmacies",
    ],
    pros: [
      "Flat, published pricing with no tiers to decode",
      "Both semaglutide and tirzepatide offered",
      "Free 1–2 day shipping",
      "LegitScript certification and 503A pharmacies stated upfront",
    ],
    cons: [
      "Compounded only — no brand-name Wegovy/Zepbound",
      "Cash-pay only (no insurance billing)",
    ],
    affiliateUrl: "#",
    ctaText: "View Plan",
    specs: {
      startingPrice: "$69/mo (compounded semaglutide)",
      semaglutide: "$69/mo flat (compounded)",
      tirzepatide: "$119/mo flat (compounded)",
      gipOption: "Yes — tirzepatide is a GLP-1/GIP dual agonist, $119/mo",
      offeringType: "Compounded",
      firstMonthOffer: "Flat pricing (no intro-then-hike model)",
      billing: "Monthly, flat rate",
      included: ["Visit with licensed doctor", "Medication", "Free 1–2 day shipping"],
      labs: "Online intake",
      shipping: "Free 1–2 day shipping",
      refills: "Monthly refills",
      states: "Most US states",
      pharmacy: "503A pharmacies; LegitScript-certified",
      clinicians: "US-licensed doctors",
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
    pros: [
      "Access to FDA-approved branded GLP-1 (Wegovy, Zepbound, Ozempic, Mounjaro)",
      "Insurance coordination and prior-auth help",
      "Large, established telehealth platform",
      "Clinician review on every plan",
    ],
    cons: [
      "Can be expensive without insurance coverage",
      "Membership fee on top of medication",
      "Branded supply can be affected by shortages",
    ],
    affiliateUrl: "#",
    ctaText: "View Plan",
    specs: {
      startingPrice: "Membership + medication (insurance-dependent)",
      semaglutide: "Brand Wegovy / Ozempic (price depends on insurance)",
      tirzepatide: "Brand Zepbound / Mounjaro (price depends on insurance)",
      gipOption: "Yes — brand tirzepatide (Zepbound/Mounjaro)",
      offeringType: "Branded",
      firstMonthOffer: "Varies by promotion",
      billing: "Membership plus medication cost",
      included: ["Clinician review", "Ongoing support", "Insurance navigation"],
      labs: "May be required depending on plan",
      shipping: "Via partner/retail pharmacy",
      refills: "Per prescription",
      states: "Nationwide",
      pharmacy: "Licensed retail/mail pharmacies (FDA-approved branded drugs)",
      clinicians: "US-licensed clinicians",
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
    pros: [
      "Ongoing clinical guidance, not a one-and-done script",
      "Both semaglutide and tirzepatide offered",
      "Flexible, adjustable plans",
    ],
    cons: [
      "Entry pricing not published as a single flat number",
      "Compounded only",
    ],
    affiliateUrl: "#",
    ctaText: "View Plan",
    specs: {
      startingPrice: "Competitive (varies by plan — not a single flat number)",
      semaglutide: "Compounded (plan-dependent)",
      tirzepatide: "Compounded (plan-dependent)",
      gipOption: "Yes — compounded tirzepatide (GLP-1/GIP)",
      offeringType: "Compounded",
      firstMonthOffer: "Varies by plan",
      billing: "Flexible monthly plans",
      included: ["Medical evaluation", "Medication", "Ongoing clinical guidance"],
      labs: "Online intake; guidance-led follow-up",
      shipping: "Included",
      refills: "Monthly refills",
      states: "Most US states",
      pharmacy: "US compounding pharmacies",
      clinicians: "US-licensed prescribers",
      insurance: "Cash",
      consult: "Online intake with ongoing clinical guidance",
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
    pros: [
      "Strong 50%-off first-month offer",
      "GLP-1 paired with longevity add-ons (NAD+, B12)",
      "Board-certified specialists",
      "One platform for multiple men's-health / wellness needs",
    ],
    cons: [
      "Add-on services can inflate the real monthly cost",
      "Compounded only",
    ],
    affiliateUrl: "#",
    ctaText: "View Plan",
    specs: {
      startingPrice: "50% off first month (then plan rate)",
      semaglutide: "Compounded (plan-dependent)",
      tirzepatide: "Compounded GLP-1/GIP",
      gipOption: "Yes — compounded tirzepatide (GLP-1/GIP)",
      offeringType: "Compounded",
      firstMonthOffer: "50% off first month",
      billing: "Monthly plan (intro discount month one)",
      included: ["Specialist evaluation", "Medication", "Optional NAD+/B12 add-ons"],
      labs: "Online intake; AI-assisted",
      shipping: "Included",
      refills: "Monthly refills",
      states: "Most US states",
      pharmacy: "US compounding pharmacies",
      clinicians: "Board-certified specialists",
      insurance: "Cash",
      consult: "AI-assisted intake with specialist review",
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
    pros: [
      "Low $99/mo semaglutide on the annual plan",
      "Free overnight cold-chain shipping",
      "LegitScript-certified; 503A pharmacies",
    ],
    cons: [
      "Best price requires a 12-month prepay",
      "Semaglutide only — no tirzepatide",
    ],
    affiliateUrl: "https://track.revoffers.com/aff_c?offer_id=1630&aff_id=12905&url_id=12442",
    ctaText: "Check Eligibility",
    specs: {
      startingPrice: "$99/mo (12-month prepaid plan)",
      semaglutide: "$99/mo (compounded, 12-month prepaid)",
      tirzepatide: "— (not offered)",
      gipOption: "No",
      offeringType: "Compounded",
      firstMonthOffer: "Best rate via 12-month prepay",
      billing: "12-month prepaid for the lowest rate",
      included: ["Clinician consult", "Medication", "Free overnight cold-chain shipping"],
      labs: "Online intake",
      shipping: "Free overnight, cold-chain",
      refills: "Monthly shipments on the annual plan",
      states: "Most US states",
      pharmacy: "503A pharmacies; LegitScript-certified",
      clinicians: "US-licensed clinicians",
      insurance: "Cash",
      consult: "Online clinician consult",
      standout: "Overnight cold-chain shipping and a low semaglutide price",
      watchOut: "Lowest price needs a 12-month prepay; semaglutide only",
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
    pros: [
      "Sizable $200-off first-month offer",
      "Both semaglutide and tirzepatide",
      "Ships within ~2 days",
    ],
    cons: [
      "Ongoing price may step up after the intro month",
      "Compounded only",
    ],
    affiliateUrl: "https://track.revoffers.com/aff_c?offer_id=1286&aff_id=12905",
    ctaText: "Get Started",
    specs: {
      startingPrice: "$200 off first month (then plan rate)",
      semaglutide: "Compounded (plan-dependent)",
      tirzepatide: "Compounded (plan-dependent)",
      gipOption: "Yes — compounded tirzepatide (GLP-1/GIP)",
      offeringType: "Compounded",
      firstMonthOffer: "$200 off first month",
      billing: "Monthly plan (intro discount month one)",
      included: ["Personalized plan", "Medication", "Shipping"],
      labs: "Online intake",
      shipping: "Ships within ~2 days",
      refills: "Monthly refills",
      states: "Most US states",
      pharmacy: "US compounding pharmacies",
      clinicians: "US-licensed prescribers",
      insurance: "Cash",
      consult: "Personalized online plan",
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
    pros: [
      "Medication paired with structured behavior coaching",
      "Works with major insurance",
      "Whole-person program, not just a prescription",
    ],
    cons: [
      "Membership fee sits on top of medication cost",
      "Best value depends on insurance coverage",
    ],
    affiliateUrl: "https://joinfound.com/",
    ctaText: "View Plan",
    specs: {
      startingPrice: "Membership + medication (up to $100 off)",
      semaglutide: "Brand / insurance-dependent",
      tirzepatide: "Brand / insurance-dependent",
      gipOption: "Yes — brand tirzepatide where prescribed",
      offeringType: "Branded",
      firstMonthOffer: "Up to $100 off membership",
      billing: "Membership plus medication cost",
      included: ["Medical evaluation", "Behavior coaching", "Ongoing support"],
      labs: "May be required",
      shipping: "Fast delivery via pharmacy",
      refills: "Per prescription",
      states: "Nationwide",
      pharmacy: "Licensed pharmacies (branded)",
      clinicians: "US-licensed clinicians + coaches",
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
    pros: [
      "Physician-prescribed compounded GLP-1",
      "Both semaglutide and tirzepatide",
      "Nationwide home delivery",
    ],
    cons: [
      "Fewer published details than top-ranked programs",
      "Compounded only",
    ],
    affiliateUrl: "https://skinnyrx.com/",
    ctaText: "View Plan",
    specs: {
      startingPrice: "Varies (not published as a flat rate)",
      semaglutide: "Compounded (plan-dependent)",
      tirzepatide: "Compounded (plan-dependent)",
      gipOption: "Yes — compounded tirzepatide (GLP-1/GIP)",
      offeringType: "Compounded",
      firstMonthOffer: "Varies",
      billing: "Monthly plans",
      included: ["Physician evaluation", "Medication", "Home delivery"],
      labs: "Online intake",
      shipping: "Nationwide home delivery",
      refills: "Monthly refills",
      states: "Nationwide",
      pharmacy: "US compounding pharmacies",
      clinicians: "US-licensed physicians",
      insurance: "Cash",
      consult: "Physician-prescribed online",
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
    pros: [
      "Strong insurance and prior-authorization support",
      "Integrated WeightWatchers behavioral program",
      "Clinician-led, brand-name focused",
    ],
    cons: [
      "Best value only if insurance covers GLP-1",
      "Membership fee plus medication cost",
    ],
    affiliateUrl: "https://www.weightwatchers.com/us/clinic",
    ctaText: "Visit Site",
    specs: {
      startingPrice: "Membership (branded, insurance-dependent)",
      semaglutide: "Brand / insurance-dependent",
      tirzepatide: "Brand / insurance-dependent",
      gipOption: "Yes — brand tirzepatide where prescribed",
      offeringType: "Branded",
      firstMonthOffer: "Varies by promotion",
      billing: "Membership plus medication cost",
      included: ["Clinician visits", "Prior-auth support", "WeightWatchers program"],
      labs: "May be required",
      shipping: "Via partner pharmacy",
      refills: "Per prescription",
      states: "Nationwide",
      pharmacy: "Licensed pharmacies (branded)",
      clinicians: "US-licensed clinicians",
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
