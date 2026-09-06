// ─────────────────────────────────────────────────────────────────────────────
// Provider comparisons ("battles").
//
// TopGLP1's comparison METHOD is deliberately decision-first, not a scored
// winner meter: each page opens with "choose A if / choose B if", lays out an
// at-a-glance spec table (built from provider.specs), maps trade-offs by
// dimension, and then routes YOU to a pick based on YOUR priority. The point is
// to help a reader decide, not to crown a winner.
//
// Pricing comes from the shared provider data; the analysis below is authored
// per matchup for TopGLP1.
// ─────────────────────────────────────────────────────────────────────────────

export type Side = "a" | "b" | "even";

export interface BattleEdge {
  dimension: string;
  leader: Side;
  note: string;
}

export interface BattleScenario {
  /** The reader's priority, e.g. "You want the lowest possible price". */
  priority: string;
  pick: "a" | "b";
  why: string;
}

export interface Battle {
  slug: string;
  /** Provider ids. */
  a: string;
  b: string;
  title: string;
  description: string;
  intro: string;
  chooseA: string;
  chooseB: string;
  edges: BattleEdge[];
  scenarios: BattleScenario[];
  bottomLine: string;
}

export const BATTLES: Battle[] = [
  {
    slug: "embody-vs-ro",
    a: "embody",
    b: "ro",
    title: "Embody vs Ro",
    description:
      "Embody's flat-price compounded GLP-1 versus Ro's branded, insurance-friendly access. A cash-price vs FDA-approved decision.",
    intro:
      "This is the clearest example of the two roads into GLP-1 treatment. Embody is a cash-pay compounding route built for low, predictable pricing. Ro is a branded route built around FDA-approved medication and insurance. Neither is 'better' in the abstract — it depends on whether your insurance will play ball.",
    chooseA: "you're paying cash and want the lowest, most predictable monthly price with fast shipping.",
    chooseB: "you want an FDA-approved branded medication and think your insurance may cover it.",
    edges: [
      { dimension: "Price without insurance", leader: "a", note: "Embody's flat $69/mo semaglutide is hard to beat; Ro's branded pricing is steep unless insurance helps." },
      { dimension: "FDA-approved product", leader: "b", note: "Ro dispenses branded, FDA-approved GLP-1; Embody is compounded (not an FDA-approved finished product)." },
      { dimension: "Insurance coordination", leader: "b", note: "Ro is built to work with insurance; Embody is cash-only." },
      { dimension: "Price transparency", leader: "a", note: "Embody publishes flat prices; Ro's cost depends on your coverage." },
      { dimension: "Shipping speed", leader: "a", note: "Embody advertises free 1–2 day shipping." },
    ],
    scenarios: [
      { priority: "You want the lowest cash price", pick: "a", why: "Flat $69/mo semaglutide with shipping included." },
      { priority: "Your insurance likely covers GLP-1", pick: "b", why: "Ro can route you to a covered branded prescription." },
      { priority: "You specifically want brand-name Wegovy or Zepbound", pick: "b", why: "Ro dispenses the FDA-approved branded drugs." },
      { priority: "You want predictable, no-surprises billing", pick: "a", why: "Embody's flat pricing means no coverage guesswork." },
    ],
    bottomLine:
      "If your insurance covers GLP-1, Ro's branded route is compelling. If it doesn't — which is common for weight loss — Embody's flat compounded pricing is the pragmatic way to actually start treatment.",
  },
  {
    slug: "embody-vs-altrx",
    a: "embody",
    b: "altrx",
    title: "Embody vs altRx",
    description:
      "The two lowest-priced compounded GLP-1 programs, head to head. Flat pricing and shipping vs the cheapest entry point plus brand-name options.",
    intro:
      "Both are cash-pay compounding programs at the value end of the market, so this comes down to details: Embody leans on flat, transparent pricing and fast shipping; altRx edges it on the absolute entry price and adds brand-name options for people who may want to switch later.",
    chooseA: "you value flat, predictable pricing and fast 1–2 day shipping above all.",
    chooseB: "you want the lowest possible entry price and the option to move to brand-name later.",
    edges: [
      { dimension: "Lowest entry price", leader: "even", note: "Both start low — Embody at $69/mo semaglutide, altRx at $89/mo but with financing." },
      { dimension: "Brand-name option", leader: "b", note: "altRx also offers brand Wegovy and Zepbound; Embody is compounded-only." },
      { dimension: "Pricing transparency", leader: "a", note: "Embody's flat, published pricing is very easy to reason about." },
      { dimension: "Payment flexibility", leader: "b", note: "altRx offers Buy Now, Pay Later." },
      { dimension: "Shipping", leader: "a", note: "Embody's free 1–2 day shipping is a standout." },
    ],
    scenarios: [
      { priority: "You want flat, no-math pricing", pick: "a", why: "Embody's $69/$119 flat structure is the simplest." },
      { priority: "You want the option to switch to brand later", pick: "b", why: "altRx carries both compounded and branded." },
      { priority: "You want to spread payments out", pick: "b", why: "altRx offers Buy Now, Pay Later." },
      { priority: "You want the fastest delivery", pick: "a", why: "Embody advertises free 1–2 day shipping." },
    ],
    bottomLine:
      "Two strong value picks. Choose Embody for flat pricing and speed; choose altRx if you want the lowest entry price, financing, or a path to brand-name medication down the line.",
  },
  {
    slug: "altrx-vs-ro",
    a: "altrx",
    b: "ro",
    title: "altRx vs Ro",
    description:
      "altRx's low-cost compounded (plus brand) program versus Ro's established branded, insurance-first platform.",
    intro:
      "altRx and Ro both offer brand-name GLP-1 — but they approach it from opposite directions. altRx leads with cheap compounded options and adds brand on top; Ro is a branded-first, insurance-coordinated platform with a long track record.",
    chooseA: "you want the lowest cash price with the flexibility of brand-name if you need it.",
    chooseB: "you want a established, insurance-first platform focused on FDA-approved medication.",
    edges: [
      { dimension: "Cash price", leader: "a", note: "altRx's compounded entry from $89/mo undercuts branded cash pricing." },
      { dimension: "Insurance coordination", leader: "b", note: "Ro is purpose-built around insurance coverage." },
      { dimension: "Track record / scale", leader: "b", note: "Ro is a large, well-known telehealth platform." },
      { dimension: "Financing", leader: "a", note: "altRx offers Buy Now, Pay Later." },
      { dimension: "Product breadth", leader: "even", note: "Both offer branded GLP-1; altRx adds compounded options." },
    ],
    scenarios: [
      { priority: "You're paying cash", pick: "a", why: "altRx's compounded pricing is far cheaper than branded cash cost." },
      { priority: "You have GLP-1 insurance coverage", pick: "b", why: "Ro is designed to maximize covered branded access." },
      { priority: "You want a big, established brand", pick: "b", why: "Ro's scale and track record reassure many first-timers." },
      { priority: "You want maximum medication flexibility", pick: "a", why: "altRx spans compounded and branded in one place." },
    ],
    bottomLine:
      "Coverage is the deciding factor. With GLP-1 insurance, Ro shines. Paying out of pocket, altRx's compounded pricing (with a brand option in reserve) is the value play.",
  },
  {
    slug: "embody-vs-trimrx",
    a: "embody",
    b: "trimrx",
    title: "Embody vs TrimRX",
    description:
      "Flat, transparent compounded pricing versus a guidance-heavy compounded program. Two cash-pay routes with different service models.",
    intro:
      "Both are compounded, cash-pay GLP-1 programs, so the split here is about pricing style and support. Embody optimizes for a flat, published price you can plan around. TrimRX leans into ongoing clinical guidance rather than a one-and-done prescription.",
    chooseA: "you know what you want and value flat pricing plus fast shipping.",
    chooseB: "you'd rather have more hand-holding and ongoing clinical check-ins.",
    edges: [
      { dimension: "Price transparency", leader: "a", note: "Embody's flat published pricing is easy to plan around." },
      { dimension: "Ongoing clinical guidance", leader: "b", note: "TrimRX emphasizes continued guidance over the plan." },
      { dimension: "Shipping speed", leader: "a", note: "Embody's free 1–2 day shipping is quick." },
      { dimension: "Pharmacy credentials", leader: "a", note: "Embody highlights LegitScript certification and 503A pharmacies." },
      { dimension: "Plan flexibility", leader: "b", note: "TrimRX advertises flexible, adjustable plans." },
    ],
    scenarios: [
      { priority: "You want the clearest pricing", pick: "a", why: "Embody's flat rate removes guesswork." },
      { priority: "You want more clinical support", pick: "b", why: "TrimRX builds around ongoing guidance." },
      { priority: "You want documented pharmacy credentials", pick: "a", why: "Embody publishes LegitScript / 503A details." },
      { priority: "You expect to adjust your plan often", pick: "b", why: "TrimRX emphasizes flexibility." },
    ],
    bottomLine:
      "Pick Embody for transparent pricing, speed and clear pharmacy credentials. Pick TrimRX if ongoing clinical guidance matters more to you than a published flat rate.",
  },
  {
    slug: "altrx-vs-trimrx",
    a: "altrx",
    b: "trimrx",
    title: "altRx vs TrimRX",
    description:
      "The lowest-cost compounded entry with brand options versus a flexible, guidance-first compounded plan.",
    intro:
      "Two value-oriented compounded programs. altRx pushes the entry price down and keeps a brand-name option in reserve; TrimRX competes on flexible plans and ongoing clinical guidance rather than a headline price.",
    chooseA: "price and the option to switch to brand-name matter most.",
    chooseB: "you want flexible plans with ongoing clinical support.",
    edges: [
      { dimension: "Entry price", leader: "a", note: "altRx publishes a low $89/mo compounded entry." },
      { dimension: "Brand-name option", leader: "a", note: "altRx also offers brand Wegovy/Zepbound; TrimRX is compounded-only." },
      { dimension: "Ongoing guidance", leader: "b", note: "TrimRX leans into continued clinical guidance." },
      { dimension: "Financing", leader: "a", note: "altRx offers Buy Now, Pay Later." },
      { dimension: "Plan flexibility", leader: "b", note: "TrimRX advertises flexible, adjustable plans." },
    ],
    scenarios: [
      { priority: "You want the lowest entry price", pick: "a", why: "altRx starts at $89/mo with financing." },
      { priority: "You may want brand-name later", pick: "a", why: "altRx spans compounded and branded." },
      { priority: "You value ongoing clinical support", pick: "b", why: "TrimRX centers continued guidance." },
      { priority: "You want an adaptable plan", pick: "b", why: "TrimRX emphasizes flexibility." },
    ],
    bottomLine:
      "altRx wins on price and optionality; TrimRX wins on guidance and flexibility. If cost is the barrier, altRx; if support is the priority, TrimRX.",
  },
  {
    slug: "healthrx-vs-embody",
    a: "healthrx",
    b: "embody",
    title: "HealthRx vs Embody",
    description:
      "A $99 overnight-shipped semaglutide plan versus flat-priced compounded semaglutide and tirzepatide. Shipping and commitment vs flexibility.",
    intro:
      "Both are compounded, cash-pay, LegitScript-forward programs — but they trade off differently. HealthRx pairs a low semaglutide price with overnight cold-chain shipping, at the cost of a 12-month prepay and no tirzepatide. Embody keeps pricing flat and month-friendly and offers tirzepatide too.",
    chooseA: "you only want semaglutide, will prepay a year, and value overnight cold-chain shipping.",
    chooseB: "you want tirzepatide as an option and prefer flat monthly pricing without a long commitment.",
    edges: [
      { dimension: "Semaglutide price", leader: "even", note: "Close — HealthRx $99/mo (prepaid) vs Embody $69/mo flat." },
      { dimension: "Tirzepatide availability", leader: "b", note: "Embody offers compounded tirzepatide; HealthRx is semaglutide-only." },
      { dimension: "Shipping", leader: "a", note: "HealthRx advertises free overnight cold-chain shipping." },
      { dimension: "Commitment", leader: "b", note: "HealthRx's best price needs a 12-month prepay; Embody stays flexible." },
      { dimension: "Pharmacy credentials", leader: "even", note: "Both highlight LegitScript certification and 503A pharmacies." },
    ],
    scenarios: [
      { priority: "You want the fastest, temperature-controlled shipping", pick: "a", why: "HealthRx's overnight cold-chain is a genuine differentiator." },
      { priority: "You want tirzepatide as an option", pick: "b", why: "Embody offers compounded tirzepatide; HealthRx doesn't." },
      { priority: "You don't want a year-long commitment", pick: "b", why: "Embody's flat monthly pricing avoids the prepay." },
      { priority: "You want the lowest sticker on semaglutide", pick: "b", why: "Embody's $69/mo flat edges the prepaid $99/mo." },
    ],
    bottomLine:
      "HealthRx is compelling if you want semaglutide with premium overnight shipping and will prepay. Embody is the more flexible pick, adds tirzepatide, and has the lower flat semaglutide price.",
  },
  {
    slug: "ro-vs-found",
    a: "ro",
    b: "found",
    title: "Ro vs Found",
    description:
      "Two insurance-friendly, branded GLP-1 platforms — one a large general telehealth brand, the other pairing medication with behavior coaching.",
    intro:
      "If you're going the branded, insurance route, Ro and Found are natural rivals. Ro is a big, general telehealth platform focused on clinician-reviewed prescriptions. Found wraps the medication in structured habit coaching for people who want behavior change alongside the drug.",
    chooseA: "you mainly want efficient, clinician-reviewed access to branded GLP-1.",
    chooseB: "you want medication plus structured behavioral coaching in one program.",
    edges: [
      { dimension: "Coaching / behavior change", leader: "b", note: "Found builds habit coaching into the program." },
      { dimension: "Platform scale", leader: "a", note: "Ro is a large, established telehealth brand." },
      { dimension: "Insurance coordination", leader: "even", note: "Both work with insurance for branded GLP-1." },
      { dimension: "Simplicity", leader: "a", note: "Ro keeps it focused on the prescription and follow-ups." },
      { dimension: "Membership cost", leader: "a", note: "Found layers a membership fee on top of medication." },
    ],
    scenarios: [
      { priority: "You want coaching with your meds", pick: "b", why: "Found integrates behavioral coaching." },
      { priority: "You want the leanest, medication-first experience", pick: "a", why: "Ro focuses on clinician-reviewed prescriptions." },
      { priority: "You want a large, well-known platform", pick: "a", why: "Ro's scale reassures many first-timers." },
      { priority: "You struggle with habits, not just appetite", pick: "b", why: "Found's coaching targets behavior change." },
    ],
    bottomLine:
      "Both lean on insurance for branded GLP-1. Choose Found if coaching and habit change are the point; choose Ro for a simpler, medication-first branded experience at scale.",
  },
  {
    slug: "embody-vs-wellmedr",
    a: "embody",
    b: "wellmedr",
    title: "Embody vs wellmedr",
    description:
      "Flat-priced, focused compounded GLP-1 versus a broader compounded GLP-1/GIP program with longevity add-ons.",
    intro:
      "Embody keeps things narrow and cheap: compounded semaglutide and tirzepatide at flat prices. wellmedr widens the aperture — compounded GLP-1/GIP plus a longevity stack (NAD+, B12) and other men's-health services — for people who want more than weight loss.",
    chooseA: "you want a focused, low-cost, flat-priced GLP-1 program and nothing else.",
    chooseB: "you want GLP-1 alongside longevity and broader wellness services.",
    edges: [
      { dimension: "Price focus", leader: "a", note: "Embody's flat pricing is lean and transparent." },
      { dimension: "Breadth of services", leader: "b", note: "wellmedr adds NAD+/B12 and a broader platform." },
      { dimension: "Shipping speed", leader: "a", note: "Embody advertises free 1–2 day shipping." },
      { dimension: "First-month offer", leader: "b", note: "wellmedr promotes 50% off the first month." },
      { dimension: "Simplicity", leader: "a", note: "Embody avoids add-on upsells." },
    ],
    scenarios: [
      { priority: "You just want affordable GLP-1", pick: "a", why: "Embody is focused and flat-priced." },
      { priority: "You want a longevity/wellness stack too", pick: "b", why: "wellmedr bundles NAD+/B12 and more." },
      { priority: "You want the biggest first-month discount", pick: "b", why: "wellmedr promotes 50% off month one." },
      { priority: "You want to avoid upsells", pick: "a", why: "Embody keeps the offering narrow." },
    ],
    bottomLine:
      "Embody is the cleaner, cheaper, GLP-1-only pick. wellmedr makes sense if you actually want the longevity add-ons — otherwise you're paying for breadth you won't use.",
  },
];

export function getBattle(slug: string): Battle | undefined {
  return BATTLES.find((b) => b.slug === slug);
}

export const BATTLE_SLUGS = BATTLES.map((b) => b.slug);
