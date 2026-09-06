// ─────────────────────────────────────────────────────────────────────────────
// Provider comparisons ("battles").
//
// TopGLP1's comparison METHOD is decision-first, not a scored winner meter:
// each page opens with "choose A if / choose B if", then goes deep — a full
// spec table, a cost breakdown over time, a pricing analysis, medication and
// formulation notes, side-by-side pros/cons, a "match by your priority"
// recommender, and a per-matchup FAQ. The goal is a page a reader can actually
// make a decision from, with the numbers shown, not a thin bullet list.
//
// Pricing reuses the shared provider data and is provider-reported; we flag
// where a figure isn't publicly fixed instead of inventing one.
// ─────────────────────────────────────────────────────────────────────────────

export type Side = "a" | "b" | "even";

export interface BattleEdge {
  dimension: string;
  leader: Side;
  note: string;
}

export interface BattleScenario {
  priority: string;
  pick: "a" | "b";
  why: string;
}

/** One row of the cost-over-time breakdown. */
export interface CostRow {
  label: string;
  a: string;
  b: string;
}

export interface BattleFaq {
  q: string;
  a: string;
}

export interface Battle {
  slug: string;
  a: string;
  b: string;
  title: string;
  description: string;
  intro: string;
  /** Our recommended pick (provider id) — shown as an "Our pick" banner. */
  winner: string;
  /** One-line reason the pick is our default recommendation. */
  winnerReason: string;
  chooseA: string;
  chooseB: string;
  /** Prose analysis of the pricing difference. */
  pricingAnalysis: string[];
  /** Concrete cost breakdown rows. */
  costRows: CostRow[];
  /** Notes on medications/formulations offered. */
  medicationNotes: string[];
  edges: BattleEdge[];
  scenarios: BattleScenario[];
  faqs: BattleFaq[];
  bottomLine: string;
}

export const BATTLES: Battle[] = [
  {
    slug: "embody-vs-ro",
    a: "embody",
    b: "ro",
    title: "Embody vs Ro",
    description:
      "Embody's flat-price compounded GLP-1 versus Ro's branded, insurance-friendly access. A cash-price vs FDA-approved decision, broken down by real cost.",
    intro:
      "This is the clearest example of the two roads into GLP-1 treatment. Embody is a cash-pay compounding route built for low, predictable pricing — $69/mo semaglutide, $119/mo tirzepatide, flat. Ro is a branded route built around FDA-approved medication and insurance, where your real cost depends almost entirely on your coverage. Below we put actual numbers to both.",
    winner: "embody",
    winnerReason:
      "Embody's flat, cash-price GLP-1 is the realistic pick for most people — the only reason to choose Ro is if your insurance genuinely covers branded GLP-1.",
    chooseA: "you're paying cash and want the lowest, most predictable monthly price with fast shipping.",
    chooseB: "you want an FDA-approved branded medication and think your insurance may cover it.",
    pricingAnalysis: [
      "The gap here is driven by the product type, not a discount war. Embody dispenses compounded semaglutide and tirzepatide, which sidesteps the branded list price entirely — so it can charge a flat $69–$119 a month, cash. Ro dispenses the branded, FDA-approved drugs (Wegovy, Zepbound, Ozempic, Mounjaro), whose cash list price sits near $1,000+/month before any insurance or manufacturer savings.",
      "That means the two are only comparable once you know your insurance situation. If your plan covers GLP-1 for weight loss, Ro can get you a branded medication for an insurance copay that may undercut cash compounding — and you get an FDA-approved finished product. If your plan excludes weight-loss GLP-1 (extremely common), Ro's route can cost many times what Embody charges, and Embody becomes the realistic way to actually start.",
      "One honest caveat on Embody's side: compounded medications are not FDA-approved finished products, and the FDA has flagged risks with unapproved and poorly made compounds. Embody mitigates this by using 503A pharmacies and stating LegitScript certification — but the trade-off for the low price is real and worth understanding.",
    ],
    costRows: [
      { label: "Semaglutide, month 1", a: "$69 (flat)", b: "Insurance copay, or ~$1,000+ cash" },
      { label: "Semaglutide, ongoing monthly", a: "$69/mo flat", b: "Depends on insurance; high without it" },
      { label: "Tirzepatide, ongoing monthly", a: "$119/mo flat", b: "Depends on insurance; high without it" },
      { label: "~6-month semaglutide (cash, no insurance)", a: "~$414", b: "Potentially $6,000+ at branded cash list" },
      { label: "Shipping", a: "Free 1–2 day", b: "Via pharmacy; varies" },
      { label: "What you get", a: "Compounded (not FDA-approved finished drug)", b: "FDA-approved branded medication" },
    ],
    medicationNotes: [
      "Embody offers compounded semaglutide (the molecule in Wegovy/Ozempic) and compounded tirzepatide (the GLP-1/GIP molecule in Zepbound/Mounjaro). Same active ingredients as the brands; different manufacturing and oversight.",
      "Ro offers the branded, FDA-approved versions and can help route you to the right one based on your diagnosis and insurance — an advantage if you specifically want an FDA-reviewed finished product.",
    ],
    edges: [
      { dimension: "Price without insurance", leader: "a", note: "Embody's flat $69/mo semaglutide is far below branded cash pricing." },
      { dimension: "FDA-approved product", leader: "b", note: "Ro dispenses branded, FDA-approved GLP-1; Embody is compounded." },
      { dimension: "Insurance coordination", leader: "b", note: "Ro is built to work with insurance; Embody is cash-only." },
      { dimension: "Price transparency", leader: "a", note: "Embody publishes flat prices; Ro's cost hinges on your coverage." },
      { dimension: "Shipping speed", leader: "a", note: "Embody advertises free 1–2 day shipping." },
    ],
    scenarios: [
      { priority: "You want the lowest cash price", pick: "a", why: "Flat $69/mo semaglutide with shipping included." },
      { priority: "Your insurance likely covers GLP-1", pick: "b", why: "Ro can route you to a covered branded prescription." },
      { priority: "You specifically want brand-name Wegovy or Zepbound", pick: "b", why: "Ro dispenses the FDA-approved branded drugs." },
      { priority: "You want predictable, no-surprises billing", pick: "a", why: "Embody's flat pricing means no coverage guesswork." },
    ],
    faqs: [
      {
        q: "Is Embody's compounded semaglutide the same drug as Ro's Wegovy?",
        a: "The active molecule is the same (semaglutide). The difference is that Ro's is the FDA-approved branded finished product, while Embody's is compounded by a pharmacy and not individually FDA-reviewed. Expect similar effects if the compound is genuine and correctly dosed, but the oversight differs.",
      },
      {
        q: "Which is cheaper if I have no insurance?",
        a: "Embody, by a wide margin. Cash-pay branded GLP-1 through Ro can run over $1,000/month, versus Embody's flat $69–$119. Without coverage, compounding is usually the only affordable route.",
      },
      {
        q: "Which is safer?",
        a: "Both use licensed clinicians. Ro's advantage is an FDA-approved finished product with consistent manufacturing. Embody's mitigation is 503A pharmacies and stated LegitScript certification. Neither removes the medication's own class risks — see our semaglutide and tirzepatide guides.",
      },
    ],
    bottomLine:
      "If your insurance covers GLP-1, Ro's branded route is compelling and gives you an FDA-approved product. If it doesn't — which is common for weight loss — Embody's flat compounded pricing is the pragmatic way to actually start treatment, at roughly a tenth of branded cash cost.",
  },
  {
    slug: "embody-vs-altrx",
    a: "embody",
    b: "altrx",
    title: "Embody vs altRx",
    description:
      "The two lowest-priced compounded GLP-1 programs, head to head — with the actual monthly numbers, formulations and trade-offs laid out.",
    intro:
      "Both are cash-pay compounding programs at the value end of the market, so this comes down to specifics. Embody leans on flat, transparent pricing ($69 semaglutide, $119 tirzepatide) and fast shipping. altRx edges it on the absolute entry structure ($89 semaglutide, $149 for the GLP-1/GIP option), adds financing, and uniquely offers brand-name Wegovy and Zepbound alongside the compounded options.",
    winner: "embody",
    winnerReason:
      "Embody edges it on the lowest flat monthly price and fastest shipping — altRx is the pick only if you specifically want financing or a brand-name off-ramp.",
    chooseA: "you value flat, predictable pricing and fast 1–2 day shipping above all.",
    chooseB: "you want financing, or the option to move to brand-name Wegovy/Zepbound later.",
    pricingAnalysis: [
      "On the headline monthly numbers, Embody is a touch cheaper: $69/mo semaglutide versus altRx's $89/mo, and $119/mo tirzepatide versus altRx's $149/mo for the GLP-1/GIP option. Over six months of semaglutide that's roughly $414 (Embody) versus $534 (altRx) — a real but not enormous gap.",
      "altRx narrows or reverses that advantage in two ways. First, it offers Buy Now, Pay Later, which matters if cash flow — not total cost — is your constraint. Second, it's one of the few programs that also sells brand-name Wegovy and Zepbound, so you're not locked into compounded if you later want (or your clinician recommends) the FDA-approved product.",
      "Both are compounded-first, cash-pay, and both lean on the same compounding safeguards. So this is less 'which is legit' and more 'do I want the lowest flat rate (Embody) or maximum flexibility and a brand-name off-ramp (altRx)'.",
    ],
    costRows: [
      { label: "Semaglutide, monthly", a: "$69/mo flat", b: "$89/mo" },
      { label: "Tirzepatide / GLP-1+GIP, monthly", a: "$119/mo flat", b: "From $149/mo" },
      { label: "~6-month semaglutide total", a: "~$414", b: "~$534" },
      { label: "Financing", a: "—", b: "Buy Now, Pay Later" },
      { label: "Brand-name option", a: "No", b: "Yes — Wegovy, Zepbound" },
      { label: "Shipping", a: "Free 1–2 day", b: "Included" },
    ],
    medicationNotes: [
      "Both offer compounded semaglutide and compounded tirzepatide (the GLP-1/GIP dual agonist).",
      "altRx additionally offers brand-name Wegovy and Zepbound — useful if you want a path to an FDA-approved finished product without switching providers.",
    ],
    edges: [
      { dimension: "Lowest monthly price", leader: "a", note: "Embody's $69/$119 flat rate undercuts altRx's $89/$149." },
      { dimension: "Brand-name option", leader: "b", note: "altRx also offers brand Wegovy and Zepbound; Embody is compounded-only." },
      { dimension: "Pricing transparency", leader: "a", note: "Embody's flat, published pricing is very easy to reason about." },
      { dimension: "Payment flexibility", leader: "b", note: "altRx offers Buy Now, Pay Later." },
      { dimension: "Shipping", leader: "a", note: "Embody's free 1–2 day shipping is a standout." },
    ],
    scenarios: [
      { priority: "You want the lowest monthly price", pick: "a", why: "Embody's $69/$119 flat structure is cheapest." },
      { priority: "You want the option to switch to brand later", pick: "b", why: "altRx carries both compounded and branded." },
      { priority: "You want to spread payments out", pick: "b", why: "altRx offers Buy Now, Pay Later." },
      { priority: "You want the fastest delivery", pick: "a", why: "Embody advertises free 1–2 day shipping." },
    ],
    faqs: [
      {
        q: "Is the $20/month difference worth it?",
        a: "Purely on price, Embody wins by about $120 over six months of semaglutide. But if you value financing or want a brand-name off-ramp, altRx's extras can justify the small premium. It depends which you weight more.",
      },
      {
        q: "Do both offer tirzepatide?",
        a: "Yes. Embody lists compounded tirzepatide at $119/mo flat; altRx offers a compounded GLP-1/GIP option from $149/mo. Both also offer semaglutide.",
      },
      {
        q: "Can I get brand-name Zepbound from either?",
        a: "From altRx, yes — it offers brand Wegovy and Zepbound alongside compounded. Embody is compounded-only.",
      },
    ],
    bottomLine:
      "Two strong value picks with the same core model. Choose Embody for the lowest flat price and fastest shipping; choose altRx if you want financing or a brand-name option in reserve. The monthly difference is modest, so let the extras decide.",
  },
  {
    slug: "altrx-vs-ro",
    a: "altrx",
    b: "ro",
    title: "altRx vs Ro",
    description:
      "altRx's low-cost compounded (plus brand) program versus Ro's established branded, insurance-first platform — compared on cost, product and support.",
    intro:
      "altRx and Ro both offer brand-name GLP-1 — but they approach it from opposite directions. altRx leads with cheap compounded options ($89 semaglutide) and adds brand on top; Ro is a branded-first, insurance-coordinated platform with a long track record. The deciding variable, again, is your insurance.",
    winner: "altrx",
    winnerReason:
      "For cash payers, altRx's low compounded pricing wins; Ro only pulls ahead if you have solid GLP-1 insurance coverage.",
    chooseA: "you want the lowest cash price with the flexibility of brand-name if you need it.",
    chooseB: "you have GLP-1 coverage and want an established, insurance-first branded platform.",
    pricingAnalysis: [
      "altRx's compounded entry at $89/mo is the anchor: for a cash payer, that's dramatically less than branded GLP-1's ~$1,000+/month list that Ro works within. Even altRx's brand-name options benefit from its financing.",
      "Ro's value proposition isn't a low cash price — it's coverage. If your insurance pays for GLP-1, Ro's job is to get you the branded drug for a copay and handle the prior-authorization paperwork, which can make it cheaper than any cash compounder and gets you an FDA-approved product. Without coverage, that advantage evaporates.",
      "So the honest framing: altRx wins decisively for cash payers and people who want a compounded-or-brand choice in one place; Ro wins for insured patients who want branded medication and don't want to manage the insurance fight themselves.",
    ],
    costRows: [
      { label: "Entry price (cash)", a: "$89/mo (compounded)", b: "Insurance copay, or ~$1,000+ cash" },
      { label: "Brand-name access", a: "Yes (Wegovy, Zepbound)", b: "Yes (Wegovy, Zepbound, Ozempic, Mounjaro)" },
      { label: "Financing", a: "Buy Now, Pay Later", b: "—" },
      { label: "Insurance help", a: "Cash-focused", b: "Insurance + prior-auth navigation" },
      { label: "~6-month cost, no insurance", a: "~$534 (compounded semaglutide)", b: "Potentially $6,000+ at branded cash" },
    ],
    medicationNotes: [
      "altRx spans compounded semaglutide/tirzepatide and brand-name Wegovy/Zepbound.",
      "Ro focuses on the branded, FDA-approved GLP-1 line and is built to maximize insurance-covered access to them.",
    ],
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
    faqs: [
      {
        q: "If I have insurance, is Ro automatically cheaper?",
        a: "Often, but not always — it depends on whether your plan covers GLP-1 for weight loss specifically (many exclude it) and your copay. If covered, Ro's branded route can beat cash compounding. If excluded, altRx's $89/mo compounded is usually far cheaper.",
      },
      {
        q: "Does altRx also do brand-name?",
        a: "Yes. altRx is unusual in offering both compounded GLP-1 and brand-name Wegovy/Zepbound, so you're not locked into one route.",
      },
    ],
    bottomLine:
      "Coverage is the deciding factor. With GLP-1 insurance, Ro shines and gets you an FDA-approved product. Paying out of pocket, altRx's compounded pricing (with a brand option in reserve) is the value play.",
  },
  {
    slug: "embody-vs-trimrx",
    a: "embody",
    b: "trimrx",
    title: "Embody vs TrimRX",
    description:
      "Flat, transparent compounded pricing versus a guidance-heavy compounded program — compared on price clarity, support and credentials.",
    intro:
      "Both are compounded, cash-pay GLP-1 programs, so the split here is about pricing style and support. Embody optimizes for a flat, published price you can plan around ($69/$119). TrimRX leans into ongoing clinical guidance and flexible plans rather than a single headline number.",
    winner: "embody",
    winnerReason:
      "Embody wins on transparent flat pricing, fast shipping and clearly stated pharmacy credentials — choose TrimRX only if you want heavier ongoing guidance.",
    chooseA: "you know what you want and value flat pricing plus fast shipping.",
    chooseB: "you'd rather have more hand-holding and ongoing clinical check-ins.",
    pricingAnalysis: [
      "Embody's pricing is its pitch: $69/mo semaglutide and $119/mo tirzepatide, flat, with shipping included and no intro-then-hike surprise. You can forecast a full year of cost on a napkin.",
      "TrimRX doesn't publish one flat number — it markets 'competitive' pricing across flexible plans, with ongoing clinical guidance folded in. That can be great value if the guidance keeps you on track, but it means you'll need to check the current plan price rather than read it off a chart.",
      "If total transparency and the lowest predictable rate matter most, Embody has the edge. If you'd trade a little price clarity for more clinical contact through your journey, TrimRX's model is designed for exactly that.",
    ],
    costRows: [
      { label: "Semaglutide, monthly", a: "$69/mo flat", b: "Competitive (confirm current plan)" },
      { label: "Tirzepatide, monthly", a: "$119/mo flat", b: "Compounded (plan-dependent)" },
      { label: "Pricing model", a: "Flat, published", b: "Flexible plans, guidance included" },
      { label: "Ongoing clinical guidance", a: "Standard follow-up", b: "Emphasized throughout" },
      { label: "Shipping", a: "Free 1–2 day", b: "Included" },
    ],
    medicationNotes: [
      "Both offer compounded semaglutide and compounded tirzepatide.",
      "Neither offers brand-name; if you want an FDA-approved finished product, look at altRx or Ro instead.",
    ],
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
    faqs: [
      {
        q: "Why doesn't TrimRX show a flat price like Embody?",
        a: "TrimRX markets flexible plans with guidance included rather than a single rate, so the price depends on the plan you choose. Embody instead commits to one flat monthly number. Confirm TrimRX's current pricing at signup.",
      },
      {
        q: "Do both use accredited pharmacies?",
        a: "Both use US compounding pharmacies. Embody specifically publicizes LegitScript certification and 503A pharmacies; if that documentation matters to you, it's a point in Embody's favor.",
      },
    ],
    bottomLine:
      "Pick Embody for transparent pricing, speed and clearly stated pharmacy credentials. Pick TrimRX if ongoing clinical guidance matters more to you than a published flat rate.",
  },
  {
    slug: "altrx-vs-trimrx",
    a: "altrx",
    b: "trimrx",
    title: "altRx vs TrimRX",
    description:
      "The lowest-cost compounded entry with brand options versus a flexible, guidance-first compounded plan — the numbers and trade-offs.",
    intro:
      "Two value-oriented compounded programs. altRx pushes the entry price down ($89 semaglutide), adds financing, and keeps a brand-name option in reserve. TrimRX competes on flexible plans and ongoing clinical guidance rather than a headline rate.",
    winner: "altrx",
    winnerReason:
      "altRx's clear, low, financeable pricing and brand-name option make it the safer default; TrimRX is for those who value ongoing guidance over price certainty.",
    chooseA: "price, financing, and the option to switch to brand-name matter most.",
    chooseB: "you want flexible plans with ongoing clinical support.",
    pricingAnalysis: [
      "altRx gives you a number you can anchor on — $89/mo compounded semaglutide, $149/mo for the GLP-1/GIP option — plus Buy Now, Pay Later if cash flow is tight. Over six months of semaglutide that's about $534, and you keep the option to move to brand-name Wegovy/Zepbound without switching providers.",
      "TrimRX doesn't lead with a single price; it bundles ongoing clinical guidance into flexible plans. For someone who wants more support and expects to adjust their plan, that structure can be worth more than shaving a few dollars off the monthly rate.",
      "Net: altRx for price certainty, financing and a brand off-ramp; TrimRX for a more guided, adjustable experience.",
    ],
    costRows: [
      { label: "Semaglutide, monthly", a: "$89/mo", b: "Competitive (confirm current plan)" },
      { label: "GLP-1 + GIP, monthly", a: "From $149/mo", b: "Compounded (plan-dependent)" },
      { label: "Financing", a: "Buy Now, Pay Later", b: "—" },
      { label: "Brand-name option", a: "Yes — Wegovy, Zepbound", b: "No" },
      { label: "Ongoing guidance", a: "Standard follow-up", b: "Emphasized throughout" },
    ],
    medicationNotes: [
      "altRx: compounded semaglutide/tirzepatide plus brand-name Wegovy/Zepbound.",
      "TrimRX: compounded semaglutide and tirzepatide, with ongoing guidance; no brand-name option.",
    ],
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
    faqs: [
      {
        q: "Which is cheaper?",
        a: "altRx publishes a clear $89/mo compounded entry; TrimRX's price depends on the plan you pick, so you'll need to confirm it. For a known, low, financeable rate, altRx is the safer bet.",
      },
      {
        q: "Does either offer brand-name GLP-1?",
        a: "altRx does (Wegovy, Zepbound). TrimRX is compounded-only.",
      },
    ],
    bottomLine:
      "altRx wins on price certainty, financing and optionality; TrimRX wins on guidance and flexibility. If cost and a brand off-ramp matter, altRx; if support is the priority, TrimRX.",
  },
  {
    slug: "healthrx-vs-embody",
    a: "healthrx",
    b: "embody",
    title: "HealthRx vs Embody",
    description:
      "A $99 overnight-shipped semaglutide plan versus flat-priced compounded semaglutide and tirzepatide — commitment and shipping vs flexibility and range.",
    intro:
      "Both are compounded, cash-pay, LegitScript-forward programs with 503A pharmacies — but they trade off differently. HealthRx pairs a low semaglutide price with free overnight cold-chain shipping, at the cost of a 12-month prepay and no tirzepatide. Embody keeps pricing flat and month-friendly ($69/$119) and offers tirzepatide too.",
    winner: "embody",
    winnerReason:
      "Embody is the better default — a lower flat semaglutide price, no year-long prepay, and tirzepatide available too; pick HealthRx only if overnight cold-chain shipping is a must-have.",
    chooseA: "you only want semaglutide, will prepay a year, and value overnight cold-chain shipping.",
    chooseB: "you want tirzepatide as an option and prefer flat monthly pricing without a long commitment.",
    pricingAnalysis: [
      "On semaglutide alone, Embody's $69/mo flat actually beats HealthRx's $99/mo — but there's a catch on both sides. HealthRx's $99 rate is tied to a 12-month prepaid plan, so you're committing up front (roughly $1,188 for the year) in exchange for premium overnight cold-chain shipping. Embody's $69 is month-to-month with free 1–2 day shipping and no lock-in.",
      "The bigger practical difference is range: HealthRx is semaglutide-only, while Embody also offers compounded tirzepatide at $119/mo. If you might want to step up to the more powerful GLP-1/GIP molecule, HealthRx can't take you there without switching providers.",
      "So HealthRx makes sense if you specifically want semaglutide, value overnight temperature-controlled shipping, and are comfortable prepaying a year. Embody is the more flexible, lower-monthly, wider-range pick.",
    ],
    costRows: [
      { label: "Semaglutide, monthly", a: "$99/mo (12-mo prepaid)", b: "$69/mo flat, month-to-month" },
      { label: "Upfront commitment", a: "~$1,188 (annual prepay)", b: "None (monthly)" },
      { label: "Tirzepatide available", a: "No", b: "Yes — $119/mo" },
      { label: "Shipping", a: "Free overnight, cold-chain", b: "Free 1–2 day" },
      { label: "Pharmacy credentials", a: "503A, LegitScript", b: "503A, LegitScript" },
    ],
    medicationNotes: [
      "HealthRx offers compounded semaglutide only.",
      "Embody offers compounded semaglutide and compounded tirzepatide, so you can escalate to the dual GLP-1/GIP agonist if needed.",
    ],
    edges: [
      { dimension: "Semaglutide monthly price", leader: "b", note: "Embody's $69/mo flat undercuts HealthRx's $99/mo prepaid rate." },
      { dimension: "Tirzepatide availability", leader: "b", note: "Embody offers compounded tirzepatide; HealthRx is semaglutide-only." },
      { dimension: "Shipping", leader: "a", note: "HealthRx advertises free overnight cold-chain shipping." },
      { dimension: "Commitment", leader: "b", note: "HealthRx's best price needs a 12-month prepay; Embody stays flexible." },
      { dimension: "Pharmacy credentials", leader: "even", note: "Both highlight LegitScript certification and 503A pharmacies." },
    ],
    scenarios: [
      { priority: "You want the fastest, temperature-controlled shipping", pick: "a", why: "HealthRx's overnight cold-chain is a genuine differentiator." },
      { priority: "You want tirzepatide as an option", pick: "b", why: "Embody offers compounded tirzepatide; HealthRx doesn't." },
      { priority: "You don't want a year-long commitment", pick: "b", why: "Embody's flat monthly pricing avoids the prepay." },
      { priority: "You want the lowest sticker on semaglutide", pick: "b", why: "Embody's $69/mo flat beats the prepaid $99/mo." },
    ],
    faqs: [
      {
        q: "Is HealthRx's $99 really more than Embody's $69?",
        a: "Yes — on semaglutide, Embody's $69/mo flat is cheaper, and it's month-to-month. HealthRx's $99/mo also requires a 12-month prepay. HealthRx's counter-argument is premium overnight cold-chain shipping.",
      },
      {
        q: "Can I get tirzepatide from HealthRx?",
        a: "No — HealthRx is semaglutide-only. For compounded tirzepatide, Embody ($119/mo) is the pick here.",
      },
    ],
    bottomLine:
      "HealthRx is compelling if you want semaglutide with premium overnight shipping and will prepay a year. Embody is the more flexible pick, adds tirzepatide, and has the lower flat semaglutide price — the better default for most people.",
  },
  {
    slug: "ro-vs-found",
    a: "ro",
    b: "found",
    title: "Ro vs Found",
    description:
      "Two insurance-friendly, branded GLP-1 platforms — one a large general telehealth brand, the other pairing medication with behavior coaching.",
    intro:
      "If you're going the branded, insurance route, Ro and Found are natural rivals. Ro is a big, general telehealth platform focused on clinician-reviewed prescriptions and insurance navigation. Found wraps the medication in structured habit coaching for people who want behavior change alongside the drug.",
    winner: "ro",
    winnerReason:
      "For a lean, medication-first branded experience, Ro is the default; choose Found only if you specifically want structured coaching.",
    chooseA: "you mainly want efficient, clinician-reviewed access to branded GLP-1.",
    chooseB: "you want medication plus structured behavioral coaching in one program.",
    pricingAnalysis: [
      "Neither publishes a simple flat drug price, because both are branded and insurance-dependent — your real cost is the medication (via insurance or cash) plus a membership. So the pricing question is less 'which drug is cheaper' and more 'what does the membership buy you'.",
      "Ro's membership buys clinician review, follow-ups and insurance/prior-auth navigation, kept fairly lean and medication-first. Found's membership buys the medication pathway plus structured behavior coaching — more program, more touchpoints, and correspondingly a fee that sits on top of the drug.",
      "If you just want the prescription handled efficiently, Ro's leaner model is easier to justify. If you know behavior change is your sticking point (not just appetite), Found's coaching may be worth the added membership.",
    ],
    costRows: [
      { label: "Drug pricing", a: "Branded, insurance-dependent", b: "Branded, insurance-dependent" },
      { label: "Membership", a: "Yes (medication-first)", b: "Yes (includes coaching)" },
      { label: "Behavior coaching", a: "—", b: "Included" },
      { label: "Insurance navigation", a: "Yes", b: "Yes" },
      { label: "First-timer offer", a: "Varies", b: "Up to $100 off membership" },
    ],
    medicationNotes: [
      "Both route to branded, FDA-approved GLP-1 where prescribed and covered.",
      "Found's differentiator isn't the drug — it's the structured coaching layered on top.",
    ],
    edges: [
      { dimension: "Coaching / behavior change", leader: "b", note: "Found builds habit coaching into the program." },
      { dimension: "Platform scale", leader: "a", note: "Ro is a large, established telehealth brand." },
      { dimension: "Insurance coordination", leader: "even", note: "Both work with insurance for branded GLP-1." },
      { dimension: "Simplicity", leader: "a", note: "Ro keeps it focused on the prescription and follow-ups." },
      { dimension: "Membership value", leader: "even", note: "Different value: Ro is leaner; Found bundles coaching." },
    ],
    scenarios: [
      { priority: "You want coaching with your meds", pick: "b", why: "Found integrates behavioral coaching." },
      { priority: "You want the leanest, medication-first experience", pick: "a", why: "Ro focuses on clinician-reviewed prescriptions." },
      { priority: "You want a large, well-known platform", pick: "a", why: "Ro's scale reassures many first-timers." },
      { priority: "You struggle with habits, not just appetite", pick: "b", why: "Found's coaching targets behavior change." },
    ],
    faqs: [
      {
        q: "Do both take insurance?",
        a: "Both are built around branded GLP-1 and work with insurance, including prior-authorization support. Your out-of-pocket depends on your plan's GLP-1 coverage.",
      },
      {
        q: "Is Found worth the extra membership for coaching?",
        a: "If behavior and habits are your real obstacle, the structured coaching can add value beyond the medication. If you just want the prescription managed, Ro's leaner model is usually the better fit.",
      },
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
      "Flat-priced, focused compounded GLP-1 versus a broader compounded GLP-1/GIP program with longevity add-ons — compared on cost and scope.",
    intro:
      "Embody keeps things narrow and cheap: compounded semaglutide and tirzepatide at flat prices ($69/$119). wellmedr widens the aperture — compounded GLP-1/GIP plus a longevity stack (NAD+, B12) and other men's-health services — for people who want more than weight loss, opening with a 50%-off first month.",
    winner: "embody",
    winnerReason:
      "Embody's focused, flat-priced GLP-1 is the cleaner pick unless you genuinely want wellmedr's longevity add-ons.",
    chooseA: "you want a focused, low-cost, flat-priced GLP-1 program and nothing else.",
    chooseB: "you want GLP-1 alongside longevity and broader wellness services.",
    pricingAnalysis: [
      "Embody's flat $69/$119 is easy to model for a full year and includes free fast shipping. wellmedr's headline is a 50%-off first month, which lowers the entry cost but makes the true ongoing price the number to check — and the optional NAD+/B12 and other add-ons can push your real monthly spend well above the core GLP-1 line.",
      "If your goal is purely affordable, predictable GLP-1, Embody is the cleaner math. If you actually want the longevity extras and would otherwise buy them separately, wellmedr's bundle can be efficient — but only if you'll use what you're paying for.",
      "Both are compounded and cash-pay, so this is a scope decision more than a legitimacy one: focused-and-flat (Embody) versus broad-and-bundled (wellmedr).",
    ],
    costRows: [
      { label: "Semaglutide, monthly", a: "$69/mo flat", b: "Compounded (plan-dependent)" },
      { label: "Tirzepatide / GLP-1+GIP", a: "$119/mo flat", b: "Compounded GLP-1/GIP" },
      { label: "First-month offer", a: "Flat (no intro hike)", b: "50% off first month" },
      { label: "Add-on services", a: "None (GLP-1 only)", b: "NAD+, B12, broader men's health" },
      { label: "Shipping", a: "Free 1–2 day", b: "Included" },
    ],
    medicationNotes: [
      "Embody: compounded semaglutide and tirzepatide, nothing else.",
      "wellmedr: compounded tirzepatide (GLP-1/GIP) plus optional NAD+/B12 microdosing and a broader platform (TRT, hair, sexual health).",
    ],
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
    faqs: [
      {
        q: "Will wellmedr cost more than Embody long-term?",
        a: "Potentially, yes — the 50%-off first month lowers entry cost, but the ongoing rate plus optional add-ons (NAD+, B12) can exceed Embody's flat $69/$119. Confirm wellmedr's ongoing price and skip add-ons you won't use.",
      },
      {
        q: "Does Embody offer NAD+ or other extras?",
        a: "No — Embody is GLP-1-only by design. If you want a bundled longevity/wellness stack, that's wellmedr's lane.",
      },
    ],
    bottomLine:
      "Embody is the cleaner, cheaper, GLP-1-only pick. wellmedr makes sense if you actually want the longevity add-ons — otherwise you're paying for breadth you won't use.",
  },
];

export function getBattle(slug: string): Battle | undefined {
  return BATTLES.find((b) => b.slug === slug);
}

export const BATTLE_SLUGS = BATTLES.map((b) => b.slug);
