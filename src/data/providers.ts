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

/**
 * Long-form, hand-authored editorial for a provider's review page. Optional —
 * only providers we've written a full review for carry it; others fall back to
 * the structured template. Written to answer the questions people actually
 * search ("is it legit", "is it worth it", tirzepatide/semaglutide specifics).
 */
export interface ProviderEditorial {
  /** Overrides the review page <title>. Target the real search queries. */
  seoTitle?: string;
  /** Overrides the meta description. */
  seoDescription?: string;
  /** Answer-first summary — the first thing a reader (and an AI engine) sees. */
  intro: string;
  /** Direct answer to "is {provider} legit / safe?". */
  isItLegit: string;
  /** Direct answer to "is {provider} worth it?". */
  isItWorth: string;
  /** Deep note on the semaglutide offering, if any. */
  semaglutideNote?: string;
  /** Deep note on the tirzepatide offering, if any. */
  tirzepatideNote?: string;
  /** Who this provider genuinely fits. */
  bestFor: string[];
  /** Who should look elsewhere — the honesty that earns trust. */
  notFor: string[];
  /** One-paragraph bottom line. */
  bottomLine: string;
}

/**
 * Third-party review data (e.g. Trustpilot). NEVER invented — every field must
 * come from the cited source and be dated. Rendered only when present, always
 * with a link back to the source so readers can verify.
 */
export interface ExternalReviews {
  source: string;
  /** Public URL of the source listing. Intentionally not linked out on-page. */
  url?: string;
  /** Score exactly as the source states it, e.g. "4.6 / 5". */
  score: string;
  /** Numeric score, for rendering the star graphic. */
  scoreValue: number;
  /** Scale maximum (Trustpilot = 5). */
  scoreMax: number;
  /** Review count from the source. */
  count: number;
  /** Date we last checked the source. */
  asOf: string;
  /** Honest synthesis of recurring themes — our words, from real reviews. */
  summary?: string;
  positives?: string[];
  negatives?: string[];
  /** Representative verbatim quotes from the source, attributed as shown there. */
  quotes?: {
    name: string;
    stars: number;
    /** "Invited" (solicited) or "Verified" — shown exactly as the source labels it. */
    label: "Invited" | "Verified";
    date: string;
    text: string;
  }[];
}

export interface Provider {
  id: string;
  name: string;
  slug: string;
  rank: number;
  tagline: string;
  logo: string;
  /** Top GLP-1 editorial score (our methodology, /10) — not a customer rating. */
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
  /** Full hand-written review, when we've authored one. */
  editorial?: ProviderEditorial;
  /** Verified third-party reviews (Trustpilot etc.), when we have real data. */
  externalReviews?: ExternalReviews;
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
    affiliateUrl: "https://track.revoffers.com/aff_c?offer_id=1548&aff_id=12904",
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
    editorial: {
      seoTitle: "Embody Reviews 2026: Tirzepatide & Semaglutide Cost, Is It Legit?",
      seoDescription:
        "An independent Embody review: real Trustpilot rating (3.7/5 across 7,250 reviews), tirzepatide ($119/mo) and semaglutide ($69/mo) pricing, pharmacy credentials, and honest pros and cons.",
      intro:
        "Embody is a cash-pay telehealth service that prescribes compounded GLP-1 medication — semaglutide at a flat $69/month and tirzepatide at $119/month — with free 1–2 day shipping and no insurance required. It's our top pick for value and pricing transparency among the GLP-1 programs we track. On Trustpilot it holds a mixed 3.7 out of 5 across 7,250 reviews. Below is who it fits, who it doesn't, and what to check before signing up.",
      isItLegit:
        "Embody works with US-licensed doctors and LegitScript-certified 503A compounding pharmacies, and it states those credentials openly — both good signs. The caveat is inherent to the model, not to Embody specifically: compounded semaglutide and tirzepatide are not FDA-approved finished drugs, and the rules around compounding GLP-1s have tightened since the FDA declared the semaglutide and tirzepatide shortages resolved in 2025. Compounding remains legal in defined circumstances, but it is a different product from branded Wegovy or Zepbound, and a licensed clinician should review your history before prescribing.",
      isItWorth:
        "If your priority is the lowest predictable cash price for a GLP-1 and you're comfortable with compounded medication, Embody is hard to beat: $69/month semaglutide and $119/month tirzepatide are flat, with no intro-rate-then-hike and no insurance runaround. It is not the right pick if you specifically want brand-name Wegovy or Zepbound, plan to bill insurance, or want in-person care — for those, a branded telehealth service such as Ro fits better.",
      semaglutideNote:
        "Compounded semaglutide is $69/month flat — among the lowest published prices we track. Semaglutide is the same active molecule found in Ozempic and Wegovy; a compounded version is prepared by a pharmacy rather than the brand manufacturer.",
      tirzepatideNote:
        "Compounded tirzepatide is $119/month flat. Tirzepatide is a dual GLP-1/GIP agonist (the molecule in Mounjaro and Zepbound), and in the SURMOUNT/SURPASS trial program it produced greater average weight loss than semaglutide — so the extra $50/month buys the stronger dual-agonist. It is still compounded, with the same caveats noted above.",
      bestFor: [
        "People who want the lowest flat cash price for compounded semaglutide or tirzepatide",
        "Anyone without GLP-1 insurance coverage who is paying out of pocket regardless",
        "Those who value transparent, published pricing over insurance navigation",
      ],
      notFor: [
        "Anyone who specifically wants brand-name Wegovy, Zepbound, Ozempic or Mounjaro",
        "People who want to run treatment through insurance",
        "Anyone not comfortable with compounded (non-FDA-approved) medication",
      ],
      bottomLine:
        "Embody is our #1 GLP-1 pick on the fundamentals we can verify: the lowest flat cash pricing we track, both semaglutide and tirzepatide, fast free shipping, and openly stated pharmacy credentials. Its Trustpilot score is a mixed 3.7/5 — mostly invited reviews praising responsive clinicians, alongside a real minority of unhappy customers — so go in clear-eyed: it's the best-value compounded option we've found, not a flawless one.",
    },
    externalReviews: {
      source: "Trustpilot",
      score: "3.7 / 5",
      scoreValue: 3.7,
      scoreMax: 5,
      count: 7250,
      asOf: "September 7, 2026",
      summary:
        "Embody holds a 3.7 out of 5 on Trustpilot across 7,250 reviews — a genuinely mixed “Average” score. Most reviews are 5-star, and most are “invited” (Embody solicits them and runs a paid Trustpilot subscription on a claimed profile), so weigh the sample accordingly. The recurring praise is consistent: friendly, knowledgeable clinicians who answer questions, an easy online ordering process, and pricing people describe as affordable and stable. One honest wrinkle shows up repeatedly — the scheduled video visit sometimes fails to connect, though reviewers say a provider phoned them shortly after. A visible minority still leave 1-star reviews.",
      positives: [
        "Clinicians repeatedly described as friendly, patient and knowledgeable — reviewers say they answered every question",
        "Online ordering and consultation described as easy, comfortable and hassle-free",
        "Pricing praised as affordable and stable (“prices that don't change”), with free delivery",
      ],
      negatives: [
        "A recurring glitch: the scheduled video visit sometimes doesn't connect — reviewers report a provider phoning them instead",
        "3.7/5 overall is “Average,” and the distribution shows a real share of 1-star reviews",
        "Most reviews are “invited” and the profile carries a paid Trustpilot subscription — the sample skews toward solicited feedback",
      ],
      quotes: [
        {
          name: "Thom K.",
          stars: 5,
          label: "Verified",
          date: "July 3, 2026",
          text: "The ordering experience was excellent, all information was given and everything done online. It was a very comfortable process.",
        },
        {
          name: "Ann Kirch",
          stars: 5,
          label: "Invited",
          date: "September 5, 2026",
          text: "I had issues with my video connecting, so my provider took it upon herself to phone call me — it went perfect. So much faith in Embody, with the affordable prices that don't change.",
        },
        {
          name: "Teresa Brown",
          stars: 5,
          label: "Invited",
          date: "September 7, 2026",
          text: "No hassles. Free delivery. Explained everything.",
        },
        {
          name: "Taylor Smith",
          stars: 5,
          label: "Invited",
          date: "September 7, 2026",
          text: "Nobody showed up for the video visit, but got a phone call shortly after.",
        },
        {
          name: "Dawn White",
          stars: 5,
          label: "Invited",
          date: "September 7, 2026",
          text: "He was friendly, concerned about my feelings and answered all my questions.",
        },
      ],
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
  {
    id: "shed",
    name: "SHED",
    slug: "shed",
    rank: 11,
    tagline: "Science-backed GLP-1, 30% off your first month",
    logo: "/logos/shed.svg",
    rating: 9.2,
    ratingLabel: "Excellent",
    reviewCount: 4120,
    glp1Focus: "Compounded semaglutide and tirzepatide with a strong first-month discount.",
    highlights: ["30% off your first month", "Compounded semaglutide and tirzepatide", "Multiple treatment options"],
    pros: ["Solid 30%-off intro offer", "Both semaglutide and tirzepatide", "Straightforward online process"],
    cons: ["Ongoing price after intro month less transparent", "Compounded only"],
    affiliateUrl: "#",
    ctaText: "View Plan",
    specs: {
      startingPrice: "30% off first month (then plan rate)",
      semaglutide: "Compounded (plan-dependent)",
      tirzepatide: "Compounded (plan-dependent)",
      gipOption: "Yes — compounded tirzepatide (GLP-1/GIP)",
      offeringType: "Compounded",
      firstMonthOffer: "30% off first month",
      billing: "Monthly plan (intro discount month one)",
      included: ["Medical evaluation", "Medication", "Shipping"],
      labs: "Online intake",
      shipping: "Included",
      refills: "Monthly refills",
      states: "Most US states",
      pharmacy: "US compounding pharmacies",
      clinicians: "US-licensed prescribers",
      insurance: "Cash",
      consult: "Online medical intake",
      standout: "A strong first-month discount on compounded GLP-1",
      watchOut: "Confirm the ongoing price after the intro month",
    },
  },
  {
    id: "synergyrx",
    name: "SynergyRX",
    slug: "synergyrx",
    rank: 12,
    tagline: "Medically supervised GLP-1, lose 1–2 lbs per week",
    logo: "/logos/synergyrx.svg",
    rating: 9.0,
    ratingLabel: "Excellent",
    reviewCount: 3200,
    glp1Focus: "Physician-supervised compounded GLP-1 with a large patient base.",
    highlights: ["Personalized medical supervision", "Trusted by over 50,000 patients", "Featured by leading health publications"],
    pros: ["Close medical supervision", "Large, established patient base", "Personalized plans"],
    cons: ["Pricing not published as a flat rate", "Compounded only"],
    affiliateUrl: "https://www.synergyrx.co/",
    ctaText: "View Plan",
    specs: {
      startingPrice: "Varies (medically supervised plans)",
      semaglutide: "Compounded (plan-dependent)",
      tirzepatide: "Compounded (plan-dependent)",
      gipOption: "Yes — compounded tirzepatide (GLP-1/GIP)",
      offeringType: "Compounded",
      firstMonthOffer: "Varies",
      billing: "Monthly plans",
      included: ["Physician supervision", "Medication", "Shipping"],
      labs: "Online intake",
      shipping: "Included",
      refills: "Monthly refills",
      states: "Most US states",
      pharmacy: "US compounding pharmacies",
      clinicians: "US-licensed physicians",
      insurance: "Cash",
      consult: "Physician-supervised online",
      standout: "Hands-on medical supervision at scale",
      watchOut: "Entry pricing isn't published as one flat number",
    },
  },
  {
    id: "noom",
    name: "Noom",
    slug: "noom",
    rank: 13,
    tagline: "Behavior-based weight loss with medical support",
    logo: "/logos/noom.svg",
    rating: 8.8,
    ratingLabel: "Very Good",
    reviewCount: 18520,
    glp1Focus: "GLP-1 medication paired with Noom's well-known behavior-change program.",
    highlights: ["Personalized coaching and psychology-based program", "Multiple medication options", "Builds sustainable habits"],
    pros: ["Best-in-class behavior-change program", "Large, trusted brand", "Medication plus habit coaching"],
    cons: ["Membership on top of medication cost", "Program-first, not lowest-price GLP-1"],
    affiliateUrl: "#",
    ctaText: "View Plan",
    specs: {
      startingPrice: "Membership + medication",
      semaglutide: "Brand / plan-dependent",
      tirzepatide: "Brand / plan-dependent",
      gipOption: "Yes — where prescribed",
      offeringType: "Branded",
      firstMonthOffer: "Varies by promotion",
      billing: "Membership plus medication cost",
      included: ["Psychology-based program", "Coaching", "Medical support"],
      labs: "May be required",
      shipping: "Via pharmacy",
      refills: "Per prescription",
      states: "Nationwide",
      pharmacy: "Licensed pharmacies",
      clinicians: "US-licensed clinicians + coaches",
      insurance: "Varies",
      consult: "App-based program + medical",
      standout: "The strongest behavior-change program of any GLP-1 option",
      watchOut: "You're paying for the program, not the cheapest medication",
    },
  },
  {
    id: "sunlight",
    name: "Sunlight",
    slug: "sunlight",
    rank: 14,
    tagline: "Flexible telehealth GLP-1 care",
    logo: "/logos/sunlight.svg",
    rating: 8.7,
    ratingLabel: "Very Good",
    reviewCount: 2740,
    glp1Focus: "Virtual GLP-1 care with flexible, adaptable treatment plans.",
    highlights: ["Virtual consultations with licensed providers", "Plans adapted to individual needs", "Convenient follow-up care"],
    pros: ["Flexible, adaptable plans", "Licensed providers", "Convenient online follow-ups"],
    cons: ["Pricing not published upfront", "Compounded only"],
    affiliateUrl: "#",
    ctaText: "View Plan",
    specs: {
      startingPrice: "Varies by plan",
      semaglutide: "Compounded (plan-dependent)",
      tirzepatide: "Compounded (plan-dependent)",
      gipOption: "Yes — compounded tirzepatide (GLP-1/GIP)",
      offeringType: "Compounded",
      firstMonthOffer: "Varies",
      billing: "Flexible monthly plans",
      included: ["Virtual consultation", "Medication", "Follow-up care"],
      labs: "Online intake",
      shipping: "Included",
      refills: "Monthly refills",
      states: "Most US states",
      pharmacy: "US compounding pharmacies",
      clinicians: "US-licensed providers",
      insurance: "Cash",
      consult: "Virtual consultation",
      standout: "Flexible plans with convenient virtual care",
      watchOut: "Entry pricing isn't published upfront",
    },
  },
  {
    id: "medvi",
    name: "Medvi",
    slug: "medvi",
    rank: 15,
    tagline: "Medical weight loss made simple",
    logo: "/logos/medvi.svg",
    rating: 8.5,
    ratingLabel: "Very Good",
    reviewCount: 2310,
    glp1Focus: "Prescription-based compounded GLP-1 with a simple enrollment flow.",
    highlights: ["Prescription-based treatment options", "Provider support throughout", "Straightforward online enrollment"],
    pros: ["Simple enrollment", "Ongoing provider support", "Prescription-based"],
    cons: ["Pricing not published as a flat rate", "Compounded only"],
    affiliateUrl: "#",
    ctaText: "View Plan",
    specs: {
      startingPrice: "Varies by plan",
      semaglutide: "Compounded (plan-dependent)",
      tirzepatide: "Compounded (plan-dependent)",
      gipOption: "Yes — compounded tirzepatide (GLP-1/GIP)",
      offeringType: "Compounded",
      firstMonthOffer: "Varies",
      billing: "Monthly plans",
      included: ["Medical evaluation", "Medication", "Provider support"],
      labs: "Online intake",
      shipping: "Included",
      refills: "Monthly refills",
      states: "Most US states",
      pharmacy: "US compounding pharmacies",
      clinicians: "US-licensed prescribers",
      insurance: "Cash",
      consult: "Online medical intake",
      standout: "A simple, no-friction path to compounded GLP-1",
      watchOut: "Entry pricing isn't published upfront",
    },
  },
  {
    id: "wellorithm",
    name: "Wellorithm",
    slug: "wellorithm",
    rank: 16,
    tagline: "GLP-1 from $147 — no membership or hidden fees",
    logo: "/logos/wellorithm.svg",
    rating: 8.2,
    ratingLabel: "Very Good",
    reviewCount: 1450,
    glp1Focus: "Compounded GLP-1 with transparent pricing and no membership fees.",
    highlights: ["No membership or hidden fees", "Free nationwide shipping", "HSA/FSA eligible plans"],
    pros: ["No membership or hidden fees", "Free nationwide shipping", "HSA/FSA eligible"],
    cons: ["Smaller, less-established brand", "Compounded only"],
    affiliateUrl: "https://wellorithm.com/",
    ctaText: "View Plan",
    specs: {
      startingPrice: "From $147/mo",
      semaglutide: "Compounded (from ~$147/mo)",
      tirzepatide: "Compounded (plan-dependent)",
      gipOption: "Yes — compounded tirzepatide (GLP-1/GIP)",
      offeringType: "Compounded",
      firstMonthOffer: "No membership fees",
      billing: "Monthly, no membership",
      included: ["Medical evaluation", "Medication", "Free shipping"],
      labs: "Online intake",
      shipping: "Free nationwide",
      refills: "Monthly refills",
      states: "Most US states",
      pharmacy: "US compounding pharmacies",
      clinicians: "US-licensed prescribers",
      insurance: "Cash; HSA/FSA eligible",
      consult: "Online medical intake",
      standout: "Transparent pricing with no membership or hidden fees",
      watchOut: "Smaller, less-established than top-ranked programs",
    },
  },
  {
    id: "yucca",
    name: "Yucca",
    slug: "yucca",
    rank: 17,
    tagline: "GLP-1 plans from $146, licensed in all 50 states",
    logo: "/logos/yucca.svg",
    rating: 8.1,
    ratingLabel: "Good",
    reviewCount: 1100,
    glp1Focus: "Compounded GLP-1 with nationwide licensing and expedited shipping.",
    highlights: ["Licensed providers in all 50 states", "Free expedited prescription shipping", "Trusted by 20,000+ patients"],
    pros: ["Available in all 50 states", "Free expedited shipping", "Low entry price"],
    cons: ["Smaller review base", "Compounded only"],
    affiliateUrl: "https://tryyucca.com/",
    ctaText: "View Plan",
    specs: {
      startingPrice: "From $146/mo",
      semaglutide: "Compounded (from ~$146/mo)",
      tirzepatide: "Compounded (plan-dependent)",
      gipOption: "Yes — compounded tirzepatide (GLP-1/GIP)",
      offeringType: "Compounded",
      firstMonthOffer: "Varies",
      billing: "Monthly plans",
      included: ["Medical evaluation", "Medication", "Expedited shipping"],
      labs: "Online intake",
      shipping: "Free expedited",
      refills: "Monthly refills",
      states: "All 50 states",
      pharmacy: "US compounding pharmacies",
      clinicians: "US-licensed providers",
      insurance: "Cash",
      consult: "Online medical intake",
      standout: "Nationwide 50-state licensing with a low entry price",
      watchOut: "Smaller review base than top programs",
    },
  },
  {
    id: "directmeds",
    name: "DirectMeds",
    slug: "directmeds",
    rank: 18,
    tagline: "GLP-1 plans from $147 with 1–2 day shipping",
    logo: "/logos/directmeds.svg",
    rating: 8.0,
    ratingLabel: "Good",
    reviewCount: 980,
    glp1Focus: "Compounded GLP-1 with fast shipping and no insurance required.",
    highlights: ["Free shipping in 1–2 days", "No insurance required", "Online medical visit included"],
    pros: ["Fast 1–2 day shipping", "No insurance required", "Low entry price"],
    cons: ["Smaller, less-established brand", "Compounded only"],
    affiliateUrl: "https://directmeds.com",
    ctaText: "View Plan",
    specs: {
      startingPrice: "From $147/mo",
      semaglutide: "Compounded (from ~$147/mo)",
      tirzepatide: "Compounded (plan-dependent)",
      gipOption: "Yes — compounded tirzepatide (GLP-1/GIP)",
      offeringType: "Compounded",
      firstMonthOffer: "Varies",
      billing: "Monthly plans",
      included: ["Online medical visit", "Medication", "Free shipping"],
      labs: "Online intake",
      shipping: "Free 1–2 day",
      refills: "Monthly refills",
      states: "Most US states",
      pharmacy: "US compounding pharmacies",
      clinicians: "US-licensed prescribers",
      insurance: "Cash",
      consult: "Online medical visit",
      standout: "Fast shipping and a low entry price, no insurance needed",
      watchOut: "Smaller, less-established than top programs",
    },
  },
  {
    id: "livbody",
    name: "LIV Body",
    slug: "livbody",
    rank: 19,
    tagline: "Clinician-prescribed compounded GLP-1",
    logo: "/logos/livbody.svg",
    rating: 8.0,
    ratingLabel: "Good",
    reviewCount: 1500,
    glp1Focus: "Clinician-prescribed compounded GLP-1 treatments.",
    highlights: ["Clinician-prescribed care", "Compounded GLP-1 treatments", "Science-backed weight loss"],
    pros: ["Clinician-prescribed", "Compounded GLP-1 options", "Straightforward program"],
    cons: ["Fewer published details", "Compounded only"],
    affiliateUrl: "#",
    ctaText: "View Plan",
    specs: {
      startingPrice: "Varies by plan",
      semaglutide: "Compounded (plan-dependent)",
      tirzepatide: "Compounded (plan-dependent)",
      gipOption: "Yes — compounded tirzepatide (GLP-1/GIP)",
      offeringType: "Compounded",
      firstMonthOffer: "Varies",
      billing: "Monthly plans",
      included: ["Clinician evaluation", "Medication", "Shipping"],
      labs: "Online intake",
      shipping: "Included",
      refills: "Monthly refills",
      states: "Most US states",
      pharmacy: "US compounding pharmacies",
      clinicians: "US-licensed clinicians",
      insurance: "Cash",
      consult: "Clinician-prescribed online",
      standout: "Clinician-prescribed compounded GLP-1",
      watchOut: "Fewer published details than top programs",
    },
  },
  {
    id: "bodybuildinghealth",
    name: "Bodybuilding Health",
    slug: "bodybuildinghealth",
    rank: 20,
    tagline: "Provider-guided GLP-1 or GIP + GLP-1",
    logo: "/logos/bodybuildinghealth.svg",
    rating: 8.0,
    ratingLabel: "Good",
    reviewCount: 1200,
    glp1Focus: "Provider-guided compounded GLP-1 and GIP+GLP-1, no commitment until approved.",
    highlights: ["Provider-guided weight loss", "Choose GLP-1 or GIP + GLP-1", "No commitment until approved"],
    pros: ["No commitment until approved", "Choice of GLP-1 or GIP+GLP-1", "Provider-guided"],
    cons: ["Smaller review base", "Compounded only"],
    affiliateUrl: "#",
    ctaText: "View Plan",
    specs: {
      startingPrice: "Varies (no commitment until approved)",
      semaglutide: "Compounded (plan-dependent)",
      tirzepatide: "Compounded GLP-1/GIP (plan-dependent)",
      gipOption: "Yes — GIP + GLP-1 option offered",
      offeringType: "Compounded",
      firstMonthOffer: "No commitment until approved",
      billing: "Monthly plans",
      included: ["Provider evaluation", "Medication", "Shipping"],
      labs: "Online intake",
      shipping: "Included",
      refills: "Monthly refills",
      states: "Most US states",
      pharmacy: "US compounding pharmacies",
      clinicians: "US-licensed providers",
      insurance: "Cash",
      consult: "Provider-guided online",
      standout: "No commitment until you're approved, with a GIP+GLP-1 choice",
      watchOut: "Smaller review base than top programs",
    },
  },
  {
    id: "calibrate",
    name: "Calibrate",
    slug: "calibrate",
    rank: 21,
    tagline: "One-year metabolic reset with 1:1 coaching",
    logo: "/logos/calibrate.svg",
    rating: 7.9,
    ratingLabel: "Good",
    reviewCount: 2600,
    glp1Focus: "A structured one-year metabolic program pairing insurance-covered GLP-1 with 1:1 coaching.",
    highlights: ["Structured one-year metabolic reset", "1:1 video coaching alongside medication", "Works through your insurance"],
    pros: ["Structured year-long program with coaching", "Works through insurance for branded GLP-1", "Whole-program approach"],
    cons: ["Program fee on top of medication", "Best value only with insurance coverage"],
    affiliateUrl: "https://www.joincalibrate.com/",
    ctaText: "Visit Site",
    specs: {
      startingPrice: "Program fee + insurance-covered medication",
      semaglutide: "Brand / insurance-dependent",
      tirzepatide: "Brand / insurance-dependent",
      gipOption: "Yes — where prescribed",
      offeringType: "Branded",
      firstMonthOffer: "Varies by promotion",
      billing: "One-year program fee plus medication",
      included: ["1:1 coaching", "Medical support", "Insurance coordination"],
      labs: "Required (metabolic labs)",
      shipping: "Via pharmacy",
      refills: "Per prescription",
      states: "Nationwide",
      pharmacy: "Licensed pharmacies (branded)",
      clinicians: "US-licensed clinicians + coaches",
      insurance: "Works through insurance",
      consult: "1:1 coaching + medical",
      standout: "A structured, coached year-long metabolic program",
      watchOut: "Program fee plus medication; best value only with coverage",
    },
  },
];

export function getProvider(id: string): Provider | undefined {
  return PROVIDERS.find((p) => p.id === id);
}
