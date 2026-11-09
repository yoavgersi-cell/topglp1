// ─────────────────────────────────────────────────────────────────────────────
// Pillar: "Online weight-loss injections — cash-pay vs insurance, compared"
//
// Conversion-focused buyer's guide for the "cheapest/best online weight-loss
// injection" and "embody vs ro" query clusters. Deliberately framed around the
// two business MODELS (cash-pay compounded vs insurance/branded membership) with
// Embody and Ro as the exemplars and Hims as the real-world "compounding cliff"
// example — so it complements, not cannibalizes, the /compare/embody-vs-ro
// decision tool and the /best-glp1-providers ranking, both cross-linked.
//
// Pricing is provider-reported and moves fast; every figure is caveated as
// "confirm current" and nothing is invented. Clinical EEAT traces to SURMOUNT /
// STEP sources. Hims's 2026 shift traces to a cited source.
// ─────────────────────────────────────────────────────────────────────────────

import type { Block, GuideSection } from "./glp1-weight-loss-guide";

export type { Block, GuideSection };

export const INJ_REVIEWED = "2026-11-09";

export const INJ_META = {
  path: "/online-weight-loss-injections",
  title: "Cheapest Online Weight-Loss Injections 2026: Embody vs Ro",
  description:
    "The cheapest online weight-loss injection in 2026: compounded cash-pay (Embody) vs brand-name + insurance (Ro, Hims), compared on price, meds, insurance and intake — with the real numbers.",
  h1: "Online weight-loss injections in 2026: cash-pay vs insurance, honestly compared",
  dek:
    "Two very different models now dominate online GLP-1 care: flat-rate cash-pay compounded programs like Embody, and brand-name, insurance-first memberships like Ro. We compare them head-to-head on real monthly cost, medications, insurance support and intake speed — and explain where Hims fits after its 2026 shift — so you can pick the right one.",
  readTime: "22 min read",
};

export const INJ_SECTIONS: GuideSection[] = [
  {
    id: "overview",
    heading: "The quick verdict",
    summary:
      "For the lowest cash price with no insurance needed, a flat-rate compounded program like Embody wins — compounded semaglutide around $69/month and tirzepatide around $119/month, flat, with no separate membership fee. For FDA-approved brand-name pens (Wegovy, Zepbound) and insurance help, a membership model like Ro wins — but you pay a membership (~$149/month month-to-month) plus the medication separately. Hims, once a compounded-value option, moved to branded-focused in 2026. Match the model to your priority: cash-pay simplicity, or branded meds through insurance.",
    blocks: [
      {
        type: "callout",
        title: "Informational, not medical advice",
        text: "This guide is for information only and isn't medical advice. GLP-1 medications are prescription drugs that require evaluation by a licensed clinician, who decides whether treatment is appropriate for you. Prices are provider-reported and change often — confirm current pricing and terms on each provider's own site before you sign up.",
      },
      {
        type: "keytakeaways",
        items: [
          "**Cheapest cash-pay, no insurance needed:** a flat-rate compounded specialist like **Embody** — roughly **$69/month** compounded semaglutide and **$119/month** compounded tirzepatide, flat, with no separate membership fee and no price hikes as your dose climbs.",
          "**Best for brand-name meds + insurance help:** a membership model like **Ro** — FDA-approved **Wegovy, Zepbound and Ozempic** with an insurance coverage check and prior-authorization concierge, but you pay a **membership (~$149/month month-to-month, less if prepaid)** plus the medication cost separately.",
          "**The hidden-fee difference is the whole story.** Compounded programs bundle everything into one flat price; membership programs split the bill into a platform fee and a separate drug cost, so the real monthly total is higher and more variable than the headline membership fee.",
          "**Hims changed lanes in 2026.** Once a compounded-value player, Hims reportedly settled with Novo Nordisk and moved away from compounded semaglutide for new patients toward branded GLP-1 — a live example of the 'compounding cliff' this guide explains.",
          "**Match the model to your situation.** No insurance and want the lowest predictable price? Cash-pay compounded. Have coverage or specifically want brand-name Wegovy/Zepbound? Insurance-first membership. That single question decides most of it.",
        ],
      },
      {
        type: "p",
        text: "If you're searching for the cheapest online weight-loss injection — or trying to settle 'embody vs ro weight loss' — the most useful thing to understand first is that you're not really choosing between two companies. You're choosing between two business models, and almost every online GLP-1 provider in the US sits in one camp or the other. Get the model right and the specific provider is an easy second step.",
      },
      {
        type: "p",
        text: "On one side are the cash-pay compounded specialists — Embody is our top-rated example — built around flat monthly pricing, no insurance, fast online intake, and compounded semaglutide or tirzepatide from partner pharmacies. On the other side are the brand-name, insurance-first platforms — Ro is the best-known — built around FDA-approved branded pens with an insurance concierge, funded by a recurring membership fee that sits on top of whatever you pay for the drug. This guide compares the two directly, with the real numbers, and shows you which fits.",
      },
      {
        type: "table",
        caption: "Snapshot: the two models at a glance",
        headers: ["", "Embody (cash-pay compounded)", "Ro (insurance + branded)"],
        rows: [
          ["Model", "Flat monthly cash-pay", "Membership + medication cost"],
          ["Medications", "Compounded semaglutide & tirzepatide", "Brand Wegovy, Zepbound, Ozempic"],
          ["Monthly price", "~$69 (sema) / ~$119 (tirz), flat", "~$149 membership + drug cost"],
          ["Insurance", "Not needed (cash only)", "Coverage check + prior-auth help"],
          ["Intake", "Fast, asynchronous online form", "Online; insurance steps add time"],
        ],
      },
      {
        type: "p",
        text: "Want the pure two-provider head-to-head as a quick decision tool? See our [Embody vs Ro comparison](/compare/embody-vs-ro). Want the full ranked field? That's our [best GLP-1 providers](/best-glp1-providers) page. This guide is the deeper 'which model, and why' companion to both.",
      },
    ],
  },

  {
    id: "models",
    heading: "How the two models actually work",
    summary:
      "Cash-pay compounded programs (Embody) charge one flat monthly fee that includes the medication, with no insurance and no separate membership — simple and predictable. Insurance-first membership programs (Ro) charge a recurring platform fee for clinical care and insurance support, while the FDA-approved branded drug is billed separately through a pharmacy. The first optimizes for a low, fixed cash price; the second for branded access and working with your plan.",
    blocks: [
      {
        type: "p",
        text: "The two models solve the same problem — getting you a GLP-1 injection with a prescription — in opposite ways. Understanding the mechanics is what makes the cost section later make sense.",
      },
      {
        type: "h3",
        text: "The cash-pay compounded model (Embody)",
      },
      {
        type: "p",
        text: "A cash-pay compounded program is built for simplicity and price. You complete an online intake, a licensed clinician reviews it and, if appropriate, prescribes, and compounded semaglutide or tirzepatide ships to you — all for one flat monthly fee that already includes the medication. There's no insurance to navigate and, critically, no separate membership charge: the price you see is the price you pay. With Embody, that's roughly $69/month for compounded semaglutide and $119/month for compounded tirzepatide, flat. Because it's a single bundled price, your monthly cost is predictable from day one, which is a big part of why this model has become the default for people paying out of pocket.",
      },
      {
        type: "h3",
        text: "The insurance-first membership model (Ro)",
      },
      {
        type: "p",
        text: "An insurance-first membership platform is built around FDA-approved branded medication and getting your insurance to help pay for it. You pay a recurring membership fee for the clinical care, platform and — the real value here — an insurance coverage check and a concierge that handles prior-authorization paperwork. The branded drug itself (Wegovy, Zepbound, Ozempic) is billed separately, either through your insurance or at a cash price. So your bill has two parts: the membership (around $149/month month-to-month with Ro, lower if you prepay several months) and the medication. If your insurance covers the drug, your out-of-pocket can drop dramatically; if it doesn't, you're paying the membership plus a cash drug price.",
      },
      {
        type: "callout",
        title: "The core trade-off in one line",
        text: "Cash-pay compounded (Embody) gives you one low, flat, predictable price and no insurance hassle — but compounded, not brand-name, medication. Insurance-first membership (Ro) gives you FDA-approved branded pens and help using your insurance — but a membership fee on top of a separate, variable drug cost. Neither is 'better'; they're built for different buyers.",
      },
      {
        type: "p",
        text: "This split maps onto a question we cover in depth elsewhere — the difference between the actual medications — in our guide to [compounded vs branded GLP-1](/guides/compounded-vs-branded-glp1). Here, the point is the business model: one bundles everything into a flat cash price, the other unbundles care from drug and leans on insurance.",
      },
    ],
  },

  {
    id: "cost",
    heading: "Cost breakdown and hidden fees",
    summary:
      "Compare the real monthly total, not the headline number. Embody's flat price is the total — roughly $69–$119/month depending on the drug. Ro's total is the membership (~$149/month month-to-month) plus the medication billed separately (a branded pen can run a few hundred dollars cash, or far less with insurance). Over six months, the flat cash-pay route is usually cheapest without insurance; the membership route can win if your plan covers the branded drug.",
    blocks: [
      {
        type: "p",
        text: "This is where the models diverge most, and where the 'hidden fees' live. The trick is to compare the all-in monthly total, because a low membership fee can hide a high total once the medication is added.",
      },
      {
        type: "h3",
        text: "Embody: the flat price is the whole price",
      },
      {
        type: "p",
        text: "Embody's pricing is refreshingly boring, which is the point. Compounded semaglutide is about **$69/month** and compounded tirzepatide about **$119/month**, flat, with the medication and shipping included and no separate membership. There's no intro-rate-then-hike, and — importantly — no price increase as your dose titrates up, because it's a flat monthly rate rather than a per-milligram one. For 'embody glp1 pricing monthly,' that's genuinely the number: one line on your statement.",
      },
      {
        type: "h3",
        text: "Ro: two bills, and the drug is the bigger one",
      },
      {
        type: "p",
        text: "Ro's bill has two parts. First, the **membership**: about **$149/month month-to-month**, dropping if you prepay (reported tiers fall to roughly $74–$99/month on longer prepaid plans). Second, the **medication**, billed separately: a branded GLP-1 at cash price can run from a couple hundred dollars to several hundred per month depending on the drug and dose (for 'ro wegovy cash price without insurance,' expect a few hundred dollars for a Wegovy pen, with higher doses and Zepbound costing more). The catch — and the answer to 'ro body membership cost' — is that the membership is only part of the story; the real monthly total is membership plus drug. Where Ro shines is coverage: with its insurance check and prior-auth help, some commercially insured patients pay far less out of pocket for the branded drug, occasionally a low copay, which can make the two-part bill cheaper than any cash price. All of these figures move — confirm current pricing at ro.co.",
      },
      {
        type: "table",
        caption: "Estimated 6-month cost, cash-pay, no insurance (illustrative — confirm current pricing)",
        headers: ["Route", "Monthly (all-in)", "~6-month total", "Notes"],
        rows: [
          ["Embody compounded semaglutide", "~$69 flat", "~$414", "Medication included; no membership"],
          ["Embody compounded tirzepatide", "~$119 flat", "~$714", "Flat as dose titrates up"],
          ["Ro membership + branded pen (cash)", "~$149 + drug", "Often ~$2,000+", "Drug billed separately; varies by dose"],
          ["Ro with insurance covering the drug", "~$149 + low copay", "Much lower", "Depends entirely on your plan"],
        ],
      },
      {
        type: "callout",
        title: "The honest cost takeaway",
        text: "Without insurance, a flat-rate compounded program like Embody is almost always the cheapest online weight-loss injection, because there's no membership and the compounded drug is far cheaper than branded. With insurance that covers the branded drug, a membership model like Ro can win on total cost. Your insurance situation is the deciding variable — so check it first.",
      },
      {
        type: "p",
        text: "If price is your main concern, our [cheapest GLP-1](/cheapest-glp1) and [cheapest tirzepatide](/cheapest-tirzepatide) pages track the lowest verified cash prices, and our [cost and insurance guide](/guides/glp1-cost-and-insurance) walks through checking coverage.",
      },
    ],
  },

  {
    id: "medications",
    heading: "Compounded vs FDA brand-name: what you're actually injecting",
    summary:
      "Compounded semaglutide and tirzepatide contain the same active molecules as Wegovy and Zepbound, but they're prepared by compounding pharmacies rather than manufactured as FDA-approved finished drugs — a different regulatory category with its own safety considerations. Branded pens are the FDA-approved finished products. After the FDA declared the GLP-1 shortages resolved, the rules around compounding tightened, which is reshaping the market.",
    blocks: [
      {
        type: "p",
        text: "The models differ on price, but the thing you're injecting differs too, and that's worth understanding clearly — without either the fear-mongering or the hand-waving.",
      },
      {
        type: "h3",
        text: "Same molecule, different category",
      },
      {
        type: "p",
        text: "Compounded semaglutide is the same active molecule as branded Wegovy and Ozempic; compounded tirzepatide is the same molecule as Zepbound and Mounjaro. The difference isn't the drug — it's how it's made and regulated. Branded pens are FDA-approved finished products, manufactured and tested as a specific product. Compounded versions are prepared by compounding pharmacies for individual patients and are not individually FDA-approved finished drugs. For 'compounded semaglutide vs brand wegovy' and 'compounded tirzepatide vs zepbound cost,' the practical summary is: expect similar effects from a genuine, correctly dosed compound, at a much lower price, but with a different layer of regulatory oversight and a reliance on the specific pharmacy's quality.",
      },
      {
        type: "h3",
        text: "The shortage context and the 'compounding cliff'",
      },
      {
        type: "p",
        text: "Large-scale compounding of GLP-1s grew during the period when branded supply couldn't meet demand and the drugs were on the FDA's shortage list. Once the FDA declared the semaglutide and tirzepatide shortages resolved, the legal basis for mass compounding narrowed — compounding remains permitted in defined circumstances (such as a genuine clinical need for a customized formulation), but the blanket 'the branded drug is in shortage' justification went away. This is the 'compounding cliff,' and it's actively reshaping which providers offer what. Reputable cash-pay programs continue to operate within the rules, but the landscape is tightening, which is exactly the backdrop to Hims's 2026 shift (next section).",
      },
      {
        type: "h3",
        text: "Dose ceilings vs flat-rate titration",
      },
      {
        type: "p",
        text: "One practical nuance between the models: how dose increases are handled. Branded treatment titrates through defined strengths up to the drug's approved maximum. Flat-rate compounded programs often let your dose increase without the price changing — a real advantage, since you're not paying more as you climb — but some compounded programs cap the maximum dose they'll provide, so if you need a high dose, confirm the ceiling before committing. With a branded route, you have the full approved dose range but pay accordingly. Neither is universally better; it depends on the dose you end up needing.",
      },
      {
        type: "callout",
        title: "Safety, said plainly",
        text: "Compounded GLP-1 from a legitimate, clinician-backed telehealth pharmacy is a widely used, reasonable route — but it's a different regulatory category from the branded finished drug, and quality depends on the pharmacy. Use a provider transparent about its pharmacies and credentials, and never buy unregulated 'research peptide' products, which are a genuine danger. Our [provider safety check](/tools/glp1-provider-safety-check) helps you vet a service.",
      },
    ],
  },

  {
    id: "intake",
    heading: "Consultation and intake speed",
    summary:
      "Cash-pay compounded programs typically use fast, asynchronous online intake — you fill out a medical form, a clinician reviews it, and medication ships, often within days. Insurance-first membership programs add steps: the same clinical intake plus an insurance coverage check and prior-authorization process that, while valuable, takes longer. If speed and simplicity matter most, cash-pay is usually faster; if using your insurance matters most, the extra steps are the price of that.",
    blocks: [
      {
        type: "p",
        text: "How quickly you can actually start, and how much friction is involved, also splits along the model lines.",
      },
      {
        type: "h3",
        text: "Cash-pay: fast and asynchronous",
      },
      {
        type: "p",
        text: "Cash-pay compounded programs like Embody are generally built for speed. The intake is asynchronous — you complete an online medical questionnaire on your own time, a licensed clinician reviews it (not always a live video call), and if you're approved the medication ships, often arriving within a few days. There's no insurance back-and-forth to slow things down. For people who value getting started quickly and with minimal friction, this is the faster path, and it's a big part of the model's appeal.",
      },
      {
        type: "h3",
        text: "Insurance-first: more steps, more support",
      },
      {
        type: "p",
        text: "Membership platforms like Ro run the same kind of clinical intake, but then add the insurance layer: a coverage check for the branded drug and, if needed, a prior-authorization process with your insurer. That's genuinely valuable — prior auth is tedious and Ro's concierge handling it is a real service — but it takes time, and approval isn't guaranteed. Lab requirements can also vary by provider and by your health history on either model. The trade is straightforward: you accept more steps and a bit more wait in exchange for the chance of your insurance covering an FDA-approved drug.",
      },
      {
        type: "callout",
        title: "Which is faster for you",
        text: "If your priority is starting quickly with no insurance hassle, the cash-pay compounded route is usually fastest. If your priority is getting your insurance to pay for a branded pen, the membership route's extra steps are the cost of that benefit — worth it if coverage comes through, slower if it doesn't.",
      },
    ],
  },

  {
    id: "hims",
    heading: "Where Hims fits now (and the compounding cliff)",
    summary:
      "Hims was a prominent low-cost compounded GLP-1 option, but in 2026 it reportedly settled with Novo Nordisk and moved away from compounded semaglutide for new patients, shifting toward branded GLP-1 at a membership-plus-medication price. That makes it a real-world example of the compounding cliff rather than a like-for-like Embody competitor today. If you're comparing 'embody vs hims,' know that they may no longer be the same kind of offer.",
    blocks: [
      {
        type: "p",
        text: "A lot of people arrive comparing 'embody vs hims weight loss injection,' expecting two cheap compounded programs. That comparison made sense until recently — but Hims's situation changed in 2026, and the honest answer requires explaining how.",
      },
      {
        type: "p",
        text: "Hims & Hers built much of its weight-loss business on low-cost compounded semaglutide. In 2026, however, Hims reportedly reached a settlement with Novo Nordisk (the maker of Wegovy and Ozempic) and moved away from offering compounded semaglutide to new patients, shifting its focus toward branded GLP-1 medication. Reported pricing moved toward a membership-plus-branded-medication structure (on the order of a roughly $149 membership plus the branded drug cost), rather than the flat compounded deal it was once known for. Reports differ on the details and the situation has been in flux, so anyone considering Hims should confirm exactly what's on offer and at what price directly — but the direction of travel is clear.",
      },
      {
        type: "p",
        text: "This is why Hims is most useful here as an illustration rather than a straight competitor. It's a live example of the compounding cliff: as the shortage-era justification for mass compounding narrowed and brand-makers pushed back, a major player pivoted from compounded value to branded access. For your decision, the takeaway is practical — don't assume Hims is still a cheap compounded option; check its current model, and compare it on the same cash-pay-vs-insurance axis as everything else in this guide.",
      },
      {
        type: "callout",
        title: "The lesson, not just the news",
        text: "The Hims shift is a reminder that the cheap-compounded landscape can change quickly. It's a reason to choose a provider you can actually stay with, to read current terms rather than old reviews, and to understand which model you're buying into — because the model, more than the brand, determines what happens to your access and price over time.",
      },
    ],
  },

  {
    id: "head-to-head",
    heading: "The full head-to-head comparison",
    summary:
      "Side by side on the metrics that matter: Embody leads on flat cash price, speed and predictability; Ro leads on FDA-approved branded medication and insurance support; Hims now sits closer to the branded/membership side after its 2026 shift. The right pick comes down to whether you're paying cash and want the lowest fixed price, or using insurance and want branded pens.",
    blocks: [
      {
        type: "p",
        text: "Here's everything in one table. Figures are provider-reported and change — confirm current terms on each site — but the shape of the comparison is stable.",
      },
      {
        type: "table",
        caption: "Embody vs Ro vs Hims — the key metrics",
        headers: ["Metric", "Embody", "Ro", "Hims (2026)"],
        rows: [
          ["Model", "Cash-pay compounded", "Membership + insurance", "Branded-focused (shifted 2026)"],
          ["Medication type", "Compounded sema / tirz", "Brand Wegovy, Zepbound, Ozempic", "Branded GLP-1 (largely)"],
          ["Monthly price", "~$69 / ~$119 flat", "~$149 membership + drug", "~$149 membership + branded drug"],
          ["Membership fee", "None", "~$149/mo (less if prepaid)", "~$149/mo (reported)"],
          ["Insurance support", "No (cash only)", "Yes — check + prior auth", "Varies — confirm"],
          ["Titration / dose", "Flat price as dose rises; confirm ceiling", "Full approved dose range", "Per branded dosing"],
          ["Intake speed", "Fast, asynchronous", "Online + insurance steps", "Online"],
          ["Best for", "Lowest cash price, no insurance", "Branded meds + using insurance", "Confirm current offer"],
          ["Cancellation", "Confirm current terms", "Confirm current terms", "Confirm current terms"],
        ],
      },
      {
        type: "p",
        text: "For a deeper, decision-first take on the two-way matchup specifically, our [Embody vs Ro comparison](/compare/embody-vs-ro) walks through the scenarios. And for the fully scored field across every provider we track, see [best GLP-1 providers](/best-glp1-providers).",
      },
    ],
  },

  {
    id: "who-should",
    heading: "Which should you choose?",
    summary:
      "Choose a cash-pay compounded program (Embody) if you don't have GLP-1 insurance coverage, want the lowest predictable price, value speed, and are comfortable with compounded medication. Choose an insurance-first membership (Ro) if you have coverage or specifically want FDA-approved branded pens and want help using your insurance. Your insurance status is the single biggest deciding factor.",
    blocks: [
      {
        type: "p",
        text: "Strip away the detail and the decision is usually simple. It comes down to one question and a couple of preferences.",
      },
      {
        type: "h3",
        text: "Go cash-pay compounded (like Embody) if…",
      },
      {
        type: "ul",
        items: [
          "You **don't have insurance that covers GLP-1 for weight loss** (which is common) and you're paying out of pocket regardless.",
          "You want the **lowest, most predictable monthly price** — a single flat fee with no membership and no dose-based hikes.",
          "You value **speed and simplicity** — fast asynchronous intake, no insurance paperwork.",
          "You're **comfortable with compounded medication** from a legitimate, transparent provider.",
        ],
      },
      {
        type: "h3",
        text: "Go insurance-first membership (like Ro) if…",
      },
      {
        type: "ul",
        items: [
          "You **have insurance that might cover** a branded GLP-1, or your diabetes/prediabetes makes coverage more likely — the coverage check and prior-auth help can save you a lot.",
          "You **specifically want FDA-approved branded pens** (Wegovy, Zepbound, Ozempic) rather than compounded medication.",
          "You're willing to **pay a membership fee and accept more steps** in exchange for branded access and insurance support.",
        ],
      },
      {
        type: "p",
        text: "Still unsure? Our [2-minute match quiz](/find-your-match) narrows it to your situation, and the [Embody review](/reviews/embody) and [Ro review](/reviews/ro) go deeper on each. The honest meta-point: check whether your insurance covers a branded GLP-1 first — that one fact usually points you straight to the right model.",
      },
    ],
  },

  {
    id: "verdict",
    heading: "The bottom line, and our top picks",
    summary:
      "For most people paying cash, a flat-rate compounded program like Embody is the cheapest, simplest online weight-loss injection — one predictable price, fast intake, no membership. For branded pens and insurance help, a membership model like Ro is the better fit, accepting a membership plus a separate drug cost. Hims now sits on the branded side after its 2026 shift. Below are the specific programs we rate highest.",
    blocks: [
      {
        type: "p",
        text: "Pulling it together: there's no single 'best online GLP-1 provider in the US' — there's the best one for your situation, and the model decides it. If you're paying out of pocket and want the lowest, most predictable price with the least hassle, a flat-rate compounded program like Embody is almost always the answer, and it's our top-rated provider overall. If you have insurance that may cover a branded drug, or you specifically want FDA-approved pens, an insurance-first membership like Ro earns its fee through branded access and coverage support.",
      },
      {
        type: "p",
        text: "Whichever model fits, pick a provider you can actually stay with — because, as our guide to [stopping a GLP-1](/stopping-glp1) explains, the results depend on ongoing treatment, so a sustainable monthly cost matters more than a flashy first-month deal. Here are the programs we rate highest, scored by our independent methodology; the component pulls their current details live from our data.",
      },
      {
        type: "callout",
        title: "One last honest note",
        text: "Prices and even business models in this space change fast — Hims is proof. Treat specific numbers here as a well-researched starting point, confirm current pricing on each provider's own site, and make sure a licensed clinician is actually evaluating you. That's what separates a safe, smart purchase from a regretted one.",
      },
    ],
    readMore: {
      href: "/compare/embody-vs-ro",
      label: "See the full Embody vs Ro head-to-head",
    },
  },
];

export const INJ_FAQS: { q: string; a: string }[] = [
  {
    q: "What is the cheapest online weight-loss injection provider in the US?",
    a: "For cash-pay with no insurance, a flat-rate compounded specialist is almost always cheapest — Embody, our top-rated example, runs about $69/month for compounded semaglutide and $119/month for compounded tirzepatide, flat, with the medication included and no membership fee. Membership-plus-branded models like Ro can beat that only if your insurance covers the branded drug. Compounded medication isn't an FDA-approved finished drug, which is the trade-off for the lower price. Confirm current pricing before signing up.",
  },
  {
    q: "Is Embody weight loss legit and safe?",
    a: "Embody is a real cash-pay telehealth service: US-licensed clinicians review your intake and, if appropriate, prescribe, and it dispenses through compounding pharmacies, stating credentials like LegitScript certification. It's our top-rated provider on price and transparency. The honest caveat isn't Embody specifically — it's that compounded GLP-1 is pharmacy-prepared and not an FDA-approved finished drug. As with any provider, a clinician should evaluate you first. See our full Embody review for the detail, including its third-party rating.",
  },
  {
    q: "How does Embody compare to Ro for weight loss?",
    a: "They're built on opposite models. Embody is cash-pay compounded: one flat monthly price (~$69 semaglutide / ~$119 tirzepatide), no insurance, fast intake — cheapest if you're paying out of pocket. Ro is an insurance-first membership: FDA-approved branded pens (Wegovy, Zepbound, Ozempic) with a coverage check and prior-auth help, but a ~$149/month membership plus the drug cost separately. Pick Embody for the lowest cash price, Ro for branded meds and insurance support. See our Embody vs Ro comparison for the full breakdown.",
  },
  {
    q: "How much is Ro's membership, and what's the real total cost?",
    a: "Ro's membership is around $149/month month-to-month, dropping to roughly $74–$99/month if you prepay several months. But that's only part of the bill — the branded medication is billed separately, so your real monthly total is the membership plus the drug. Without insurance, a branded pen can add a few hundred dollars a month; with insurance that covers it, your out-of-pocket for the drug can be far lower. Confirm current pricing at ro.co, as it changes.",
  },
  {
    q: "Does Ro cover the cost of Wegovy if my insurance denies it?",
    a: "Ro doesn't pay for your medication — it's a telehealth platform, not an insurer. What it provides is an insurance coverage check and a prior-authorization concierge that handles the paperwork to try to get your plan to cover a branded drug like Wegovy. If your insurance denies coverage, you'd pay the cash price for the drug (plus the membership). If keeping costs down without insurance is the priority, a cash-pay compounded program is usually cheaper. Confirm Ro's current services and any guarantees directly.",
  },
  {
    q: "Is Embody vs Hims still a fair comparison in 2026?",
    a: "Less than it used to be. Hims was a prominent low-cost compounded semaglutide option, but in 2026 it reportedly settled with Novo Nordisk and moved away from compounded semaglutide for new patients toward branded GLP-1 at a membership-plus-medication price. So Embody (cash-pay compounded) and Hims may no longer be the same kind of offer. If you're weighing them, confirm exactly what Hims currently provides and at what price, and compare on the cash-pay-vs-insurance axis.",
  },
  {
    q: "Compounded semaglutide vs brand-name Wegovy — what's the difference?",
    a: "Same active molecule (semaglutide), different category. Wegovy is the FDA-approved, factory-manufactured finished product; compounded semaglutide is prepared by a compounding pharmacy and isn't an individually FDA-approved finished drug. Expect similar effects from a genuine, correctly dosed compound at a much lower price, but with a different regulatory layer and reliance on the pharmacy's quality. The same logic applies to compounded tirzepatide vs brand Zepbound. Our compounded vs branded guide covers it in depth.",
  },
  {
    q: "Can you switch from brand Wegovy to compounded semaglutide online?",
    a: "Many people do move between branded and compounded versions of the same molecule, but it's a clinical decision, not a DIY swap — a licensed clinician should review your history, current dose and reasons for switching and set an appropriate plan. The active drug is the same (semaglutide), so the switch is usually about cost and access rather than a different medication. Talk to a prescriber before changing, and never buy unregulated 'research' product to bridge a gap.",
  },
  {
    q: "GLP-1 injection vs weight-loss pill — which costs less?",
    a: "Today, compounded GLP-1 injections through cash-pay telehealth are generally the lowest-cost effective option (around $69–$119/month). Oral GLP-1 pills are expanding and are great for the needle-averse, but pricing varies and the most effective medications remain injectables for now. Branded options — pill or pen — cost more without insurance. The cheapest route for most cash-pay patients remains a flat-rate compounded injection; see our GLP-1 pills guide for where oral options fit.",
  },
  {
    q: "How do I get a Wegovy pen online in the US?",
    a: "For a branded Wegovy pen, the usual online route is an insurance-first telehealth membership like Ro: you complete an intake, it runs an insurance coverage check and handles prior authorization, and if approved the branded pen is dispensed through a pharmacy (billed to insurance or at cash price). You can also get a prescription from your own doctor. If you don't have coverage and want the lowest price, a compounded semaglutide program is cheaper, though it's not the branded pen. All routes require a real prescription after a medical review.",
  },
];

export const INJ_HOWTO = {
  name: "How to choose and start an online weight-loss injection",
  steps: [
    {
      name: "Check your insurance first",
      text: "Find out whether your plan covers a branded GLP-1 for weight loss. That single fact usually decides your model — covered points you toward an insurance-first membership; not covered points toward flat-rate cash-pay compounded.",
    },
    {
      name: "Pick your model",
      text: "Choose cash-pay compounded (like Embody) for the lowest predictable price with no insurance, or an insurance-first membership (like Ro) for FDA-approved branded pens and coverage help.",
    },
    {
      name: "Compare the all-in monthly total",
      text: "Add any membership fee to the medication cost — don't compare a flat compounded price against a membership fee alone. Confirm current pricing on each provider's own site.",
    },
    {
      name: "Vet the provider",
      text: "Check that a licensed clinician evaluates you, that compounded medication comes from transparent, credentialed pharmacies, and read current terms (including cancellation). Never use unregulated 'research' sellers.",
    },
    {
      name: "Complete a real medical intake",
      text: "Do the clinical questionnaire honestly so a clinician can screen for contraindications and prescribe appropriately — and, on an insurance route, let the coverage check and prior-auth run.",
    },
    {
      name: "Plan for the long term",
      text: "Because results depend on ongoing treatment, choose a provider and price you can sustain, and plan for maintenance rather than a short course.",
    },
  ],
};

export const INJ_SOURCE_KEYS = [
  "surmount-1",
  "step-1",
  "surmount-4",
  "fda-unapproved-glp1",
  "hims-novo-2026",
  "niddk-obesity-meds",
];
