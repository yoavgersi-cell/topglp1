// ─────────────────────────────────────────────────────────────────────────────
// Pillar: "Tirzepatide for Weight Loss — the complete 2026 guide"
//
// Buyer-intent mega-guide for the fastest-rising term in the category
// (Mounjaro searches up ~159% since late 2024 while Ozempic fell ~32%).
// Complements, rather than duplicates, the clinical /medications/tirzepatide
// reference: this is the results-cost-how-to-get-it-and-who-to-get-it-from
// guide, with a top-3 providers block. Every clinical and price figure traces
// to a source key in sources.ts; nothing is invented, and investigational or
// uncertain items are flagged as such.
// ─────────────────────────────────────────────────────────────────────────────

import type { Block, GuideSection } from "./glp1-weight-loss-guide";

export type { Block, GuideSection };

export const TIRZ_REVIEWED = "2026-11-09";

export const TIRZ_META = {
  path: "/tirzepatide-weight-loss",
  title: "Tirzepatide for Weight Loss: Results, Cost & How to Get It (2026)",
  description:
    "Tirzepatide — Mounjaro, Zepbound and compounded — is the most effective GLP-1 for weight loss. What the trials show (~20%), what it costs, how to get it, side effects, and the top providers.",
  h1: "Tirzepatide for weight loss: the complete 2026 guide",
  dek:
    "Tirzepatide is the most effective weight-loss medication on the market — the molecule in Mounjaro and Zepbound, and the one that beat semaglutide head-to-head. Here's the honest, cited guide to what it does, what it costs, how to get it safely, and who we rate highest to get it from.",
  readTime: "48 min read",
};

export const TIRZ_SECTIONS: GuideSection[] = [
  {
    id: "overview",
    heading: "The short version, up front",
    summary:
      "Tirzepatide is the most effective weight-loss drug currently available — a dual GLP-1/GIP medication sold as Zepbound (for weight) and Mounjaro (for diabetes), and compounded by telehealth pharmacies. In trials it produced up to about 20–21% average weight loss and beat semaglutide head-to-head. It works while you take it, costs anywhere from about $119/month compounded to roughly $1,000/month at brand list, and needs a prescription. This guide covers results, cost, how to get it, side effects, and who to get it from.",
    blocks: [
      {
        type: "keytakeaways",
        items: [
          "**It's the most effective option.** In the SURMOUNT-1 trial, tirzepatide produced about **15–21% mean weight loss** across doses over 72 weeks — and in the head-to-head SURMOUNT-5 trial it beat semaglutide (roughly **20% vs 14%**).",
          "**One molecule, several names.** Tirzepatide is sold as **Zepbound** (FDA-approved for weight management) and **Mounjaro** (approved for type 2 diabetes), and is also available as **compounded tirzepatide** through telehealth. Same active drug, different label and price.",
          "**It's a dual agonist.** Unlike semaglutide (a GLP-1 drug), tirzepatide activates **two** gut-hormone receptors — GLP-1 and GIP — which is the leading explanation for why it tends to out-perform single-hormone drugs.",
          "**Cost ranges widely.** Compounded tirzepatide runs from about **$119/month** through the programs we rate highest; brand-name Zepbound is roughly **$299–$449/month** on Lilly's self-pay vials (by dose) and around **$1,000+/month** at retail list.",
          "**It's ongoing treatment, not a cure.** Stop it and most of the weight comes back — SURMOUNT-4 showed about **14% regain** within a year of stopping. Plan for maintenance from the start.",
          "**It needs a real prescription.** Tirzepatide is prescription-only, carries real side effects and a boxed warning, and should be prescribed and monitored by a licensed clinician — never bought as an unregulated 'research' product.",
        ],
      },
      {
        type: "p",
        text: "If you've been researching weight-loss medication, you've noticed the conversation shifting. For a couple of years 'Ozempic' was the word everyone used; now the attention is moving to tirzepatide — the drug in Mounjaro and Zepbound — and for a simple reason: in head-to-head testing, it's the most effective weight-loss medication available. Search interest reflects it. Mounjaro searches have climbed sharply while Ozempic's have fallen, and more people arrive asking specifically about tirzepatide rather than GLP-1 drugs in general.",
      },
      {
        type: "p",
        text: "This guide is the complete, honest answer to the questions that follow once you've landed on tirzepatide: how well does it actually work, what does it cost, how do you get it without getting scammed, what are the side effects really like, and — the part most 'guides' skip — who should you actually get it from. We've written it the way we write everything on this site: with the real trial numbers, the real prices, the trade-offs stated plainly, and no pretending the drug is magic or risk-free. It's long because the decision deserves it.",
      },
      {
        type: "p",
        text: "A quick orientation before we go deep. Tirzepatide is a once-weekly injection. It's a prescription medicine, not a supplement, and it works by turning down appetite at a level your body can't do on its own. It is genuinely, measurably more effective than the older GLP-1 drugs for most people — but it is not a one-time fix, it has real side effects, and the price you pay depends enormously on which version you get and how. All of that is what the rest of this guide unpacks.",
      },
      {
        type: "callout",
        title: "A note on what this guide is — and isn't",
        text: "This is an independent, evidence-based guide to help you make an informed decision. It is not medical advice, and it can't replace a licensed clinician who knows your history. Tirzepatide isn't right for everyone, and only a prescriber can decide whether it's right for you. Use this to get smart; use a doctor to get a prescription.",
      },
      {
        type: "p",
        text: "For the wider picture on how these drugs fit together, see our [complete GLP-1 weight-loss guide](/glp1-weight-loss-guide); for the clinical reference on the molecule itself, our [tirzepatide medication page](/medications/tirzepatide); and if you're weighing it against the alternative, our [semaglutide vs tirzepatide comparison](/vs/semaglutide-vs-tirzepatide).",
      },
    ],
  },

  {
    id: "names",
    heading: "Mounjaro, Zepbound, compounded — what's the difference?",
    summary:
      "They're all tirzepatide — the same molecule. Zepbound is the version FDA-approved for weight management; Mounjaro is approved for type 2 diabetes; compounded tirzepatide is pharmacy-prepared and sold through telehealth, usually the cheapest route. The drug is the same; what differs is the label, the FDA approval, the price, and how you get it.",
    blocks: [
      {
        type: "p",
        text: "The single most confusing thing about tirzepatide is that it goes by several names, and people reasonably assume they're different drugs. They're not. Mounjaro, Zepbound and compounded tirzepatide are all the same active molecule — tirzepatide. What differs is the branding, what the FDA approved each one for, the price, and how you obtain it. Clearing this up is the first step to not overpaying or getting confused.",
      },
      {
        type: "h3",
        text: "Zepbound — the weight-loss brand",
      },
      {
        type: "p",
        text: "Zepbound is Eli Lilly's brand of tirzepatide that the FDA approved specifically for chronic weight management, in adults with obesity (a BMI of 30 or higher) or overweight (27 or higher) with a weight-related condition. If you're taking tirzepatide for weight loss through the official, branded route, Zepbound is the product. It comes as pre-filled pens and, more recently, as lower-cost self-pay vials through Lilly's direct platform.",
      },
      {
        type: "h3",
        text: "Mounjaro — the diabetes brand",
      },
      {
        type: "p",
        text: "Mounjaro is Lilly's brand of the exact same molecule, approved for type 2 diabetes rather than weight loss. Because it's the same drug, people with diabetes who take Mounjaro often lose significant weight as well — which is why 'Mounjaro weight loss' is such a common search even though weight loss isn't its official indication. If you don't have diabetes, the weight-loss route is Zepbound (or compounded), not Mounjaro.",
      },
      {
        type: "h3",
        text: "Compounded tirzepatide — the telehealth route",
      },
      {
        type: "p",
        text: "Compounded tirzepatide is tirzepatide prepared by a compounding pharmacy rather than manufactured as a finished branded product by Lilly. It's the version most telehealth weight-loss programs dispense, and it's usually the cheapest way to access the drug — often a fraction of the brand price. The important caveat: compounded medications are not individually FDA-approved finished drugs, and the rules around compounding GLP-1s tightened after the FDA declared the tirzepatide shortage resolved. Compounding remains legal in defined circumstances, but it's a different regulatory category from branded Zepbound — something we cover in full in our [compounded vs branded GLP-1 guide](/guides/compounded-vs-branded-glp1).",
      },
      {
        type: "table",
        caption: "The three ways to get tirzepatide",
        headers: ["Name", "FDA-approved for", "Typical route", "Relative cost"],
        rows: [
          ["Zepbound", "Chronic weight management", "Brand, via prescription / LillyDirect", "$$$ (brand)"],
          ["Mounjaro", "Type 2 diabetes", "Brand, via prescription", "$$$ (brand)"],
          ["Compounded tirzepatide", "Not a finished-drug approval", "Telehealth compounding pharmacy", "$ (lowest)"],
        ],
      },
      {
        type: "p",
        text: "If you're wondering why one drug has three identities in the first place, it comes down to how medicines are approved and sold. A manufacturer runs separate trials and gets separate approvals for each use — diabetes and obesity — and markets each under its own brand, which is how the same molecule became both Mounjaro and Zepbound. Compounding, meanwhile, grew during the period when branded supply couldn't meet demand, and continues in a narrower form now. The upshot for you is simply that 'which tirzepatide' is really a question about label, approval, price and access — not about getting a better or worse version of the active drug.",
      },
      {
        type: "callout",
        title: "The practical takeaway",
        text: "If you want the FDA-approved finished product and can afford it (or have coverage), Zepbound is the weight-loss brand. If you want the lowest price and you're comfortable with compounded medication from a legitimate telehealth provider, compounded tirzepatide is usually far cheaper. Either way it's the same molecule doing the same thing in your body.",
      },
    ],
  },

  {
    id: "how-it-works",
    heading: "How tirzepatide works (and why it beats older drugs)",
    summary:
      "Tirzepatide is a 'dual agonist' — it activates two gut-hormone receptors, GLP-1 and GIP, where semaglutide activates only GLP-1. Both reduce appetite, slow stomach emptying and quiet 'food noise,' but hitting two pathways is the leading explanation for why tirzepatide tends to produce more weight loss. It manages appetite while you take it; it doesn't permanently reset it.",
    blocks: [
      {
        type: "p",
        text: "To understand why tirzepatide works so well — and why it isn't permanent — it helps to understand what it actually does. The short version: it borrows the body's own appetite-regulating hormones and amplifies them, at a strength and duration your body would never produce on its own.",
      },
      {
        type: "h3",
        text: "Two hormones, not one",
      },
      {
        type: "p",
        text: "The older drugs like semaglutide (Ozempic, Wegovy) mimic a single gut hormone called GLP-1, which signals fullness to the brain, slows how fast your stomach empties, and quiets the constant background pull toward food many people describe as 'food noise.' Tirzepatide does all of that too — but it also activates a second receptor, GIP. That's what 'dual agonist' means: it works on two gut-hormone pathways at once, where semaglutide works on one. The leading explanation for tirzepatide's greater weight loss is exactly this dual action, though researchers are still mapping precisely how the two signals combine.",
      },
      {
        type: "p",
        text: "GIP is the interesting newcomer here. On its own it's a gut hormone involved in how the body handles glucose and fat after eating, and for years its role in weight was unclear. The practical discovery behind tirzepatide is that adding GIP activation to GLP-1 activation produces more weight loss and better blood-sugar control than GLP-1 alone — the two together appear to do more than either does by itself. You don't need the molecular detail to make a decision; the thing that matters is that this dual mechanism is the best current explanation for why tirzepatide tops the single-hormone drugs in head-to-head testing, and why the next generation of drugs is chasing even more targets at once.",
      },
      {
        type: "h3",
        text: "What it feels like",
      },
      {
        type: "p",
        text: "In practice, people on tirzepatide describe feeling full faster and for longer, thinking about food far less, and finding it genuinely easy — rather than a daily battle — to eat less. That's not willpower suddenly appearing; it's the drug turning down the biological signals that drive appetite. Meals that used to feel too small become plenty. The mental chatter about snacks quiets down. For people who've spent years fighting their own hunger, that shift is often the most striking part.",
      },
      {
        type: "h3",
        text: "The catch built into the mechanism",
      },
      {
        type: "p",
        text: "Here's the part that matters for planning: tirzepatide manages your appetite while the drug is in your system. It doesn't permanently rewire your set point. The appetite suppression is an active, ongoing effect of an active, ongoing medication — which is precisely why stopping leads to regain, and why the drug is best understood as a treatment for a chronic condition rather than a course you finish. We come back to this in the maintenance section, because it's the single most important thing to understand before you start. For the deeper mechanism, see our guide to [how GLP-1 medications work](/guides/how-glp1-medications-work).",
      },
    ],
  },

  {
    id: "results",
    heading: "How well it works: the trial results",
    summary:
      "In SURMOUNT-1, tirzepatide produced about 15% to 21% mean weight loss across doses over 72 weeks — up to roughly a fifth of body weight on the highest dose. It also improves blood sugar, blood pressure and other markers, and has shown benefits in sleep apnea and heart failure. These are among the largest weight-loss results ever seen from a medication.",
    blocks: [
      {
        type: "p",
        text: "Tirzepatide's reputation rests on real numbers from large, well-run trials — not marketing. Here's what the evidence actually shows, because 'the most effective' only means something with the figures attached.",
      },
      {
        type: "h3",
        text: "SURMOUNT-1 — the pivotal weight-loss trial",
      },
      {
        type: "p",
        text: "SURMOUNT-1 was the key trial in adults with obesity but without diabetes. Over 72 weeks, tirzepatide produced a mean weight loss of roughly **15% to 21% across the dose range** — up to about **20–21% of body weight** on the highest (15 mg) dose, versus a few percent on placebo. To put that in context, losing a fifth of your body weight with a medication was, until this generation of drugs, essentially unheard of outside of surgery. These are among the largest weight-loss results ever recorded for a drug.",
      },
      {
        type: "statgrid",
        stats: [
          { value: "~20–21%", label: "Mean weight loss on the highest tirzepatide dose over 72 weeks (SURMOUNT-1)" },
          { value: "72 weeks", label: "Trial length over which the full effect built up — this is not a quick fix" },
          { value: "Dual-hormone", label: "Tirzepatide acts on GLP-1 and GIP; semaglutide acts on GLP-1 alone" },
        ],
      },
      {
        type: "h3",
        text: "A broad, consistent trial program",
      },
      {
        type: "p",
        text: "SURMOUNT-1 wasn't a one-off. Tirzepatide has been tested across a whole program of trials — in people with and without diabetes, against placebo and against semaglutide directly, and in studies of what happens when treatment continues or stops. The striking thing is how consistent the picture is: large weight loss while people take it, maintained or extended when they stay on it, and substantially regained when they come off. That consistency across different populations and study designs is a big part of why clinicians and regulators treat the effect as real and robust rather than a fluke of one trial. It's also why we can state the numbers with confidence rather than hedging — the evidence base here is unusually strong for weight-loss medicine.",
      },
      {
        type: "h3",
        text: "Beyond the scale",
      },
      {
        type: "p",
        text: "Weight is the headline, but tirzepatide moves other things too. Across its trial program it improved blood sugar (it's a powerful diabetes drug as Mounjaro), blood pressure, cholesterol and other cardiometabolic markers. It has also shown benefits in conditions linked to excess weight — improving obstructive sleep apnea and showing benefit in a form of heart failure (HFpEF) in dedicated trials. We cover the full range of these uses in our guide to [GLP-1 beyond weight loss](/glp1-beyond-weight-loss); the point here is that the weight loss comes with broader metabolic improvements, not in isolation.",
      },
      {
        type: "h3",
        text: "The honest caveats",
      },
      {
        type: "p",
        text: "Two things to keep in perspective. First, these are averages — individual results vary, and some people lose much more or less than the mean. Second, the results built up over 72 weeks of continuous treatment; this is a slow, steady process, not an overnight transformation, and it depends on staying on the drug. The trials that stopped the drug (which we'll get to) show the weight returns. Tirzepatide is remarkably effective, but it's effective as an ongoing treatment, and going in expecting a permanent fix from a temporary course is the most common way people end up disappointed.",
      },
    ],
  },

  {
    id: "vs-semaglutide",
    heading: "Tirzepatide vs semaglutide: which is better?",
    summary:
      "In the SURMOUNT-5 head-to-head trial, tirzepatide produced greater average weight loss than semaglutide — roughly 20% versus 14%. Tirzepatide is the more effective drug for most people, but semaglutide has a longer track record, strong cardiovascular-outcome evidence, and may be cheaper or better tolerated for some. The best choice depends on your goals, tolerance and budget, with a clinician.",
    blocks: [
      {
        type: "p",
        text: "The question almost everyone asks: is tirzepatide better than semaglutide (Ozempic/Wegovy)? For raw weight loss, the honest answer is yes for most people — and unusually, we don't have to guess, because the two were tested directly against each other.",
      },
      {
        type: "h3",
        text: "The head-to-head trial",
      },
      {
        type: "p",
        text: "SURMOUNT-5 compared tirzepatide against semaglutide 2.4 mg directly, in adults with obesity and without diabetes. Tirzepatide produced **greater average weight loss** — on the order of **about 20% versus about 14%** over 72 weeks. That's a meaningful gap: tirzepatide didn't just edge it out, it produced clearly more weight loss head-to-head. For the single question 'which drug takes off more weight,' the trial is about as clear as medicine gets.",
      },
      {
        type: "table",
        caption: "Tirzepatide vs semaglutide at a glance",
        headers: ["", "Tirzepatide", "Semaglutide"],
        rows: [
          ["Brands", "Zepbound, Mounjaro", "Wegovy, Ozempic"],
          ["Mechanism", "Dual GLP-1 + GIP", "GLP-1 only"],
          ["Mean weight loss (pivotal trials)", "~15–21% (SURMOUNT-1)", "~14.9% (STEP 1)"],
          ["Head-to-head (SURMOUNT-5)", "~20% (greater)", "~14%"],
          ["Track record", "Newer", "Longer, large CV-outcomes data"],
        ],
      },
      {
        type: "h3",
        text: "Why semaglutide might still be your pick",
      },
      {
        type: "p",
        text: "More weight loss isn't the only thing that matters, and semaglutide remains an excellent, appropriate choice for many people. It has a longer track record, and it has strong cardiovascular-outcome evidence — a large trial showed semaglutide reduced major cardiac events in people with established heart disease. It may also be cheaper for you, more available, or better tolerated: some people get on better with one drug than the other, and the 'best' drug is the one you can afford, access and stick with. If cost or your insurance points to semaglutide, that's a perfectly good path.",
      },
      {
        type: "p",
        text: "The bottom line: tirzepatide is the more effective drug for weight loss on the evidence, and it's our default recommendation when it's accessible — but semaglutide is a strong, proven alternative, and the right answer is individual. Our full [semaglutide vs tirzepatide comparison](/vs/semaglutide-vs-tirzepatide) goes deeper on the trade-offs.",
      },
    ],
  },

  {
    id: "diabetes",
    heading: "Tirzepatide for diabetes and blood sugar",
    summary:
      "Tirzepatide is also a powerful type 2 diabetes drug — that's what Mounjaro is approved for. In its diabetes trial program it produced strong reductions in A1C (long-term blood sugar) alongside weight loss. For people living with both excess weight and type 2 diabetes or prediabetes, it can address both problems at once, which is a major part of why it's prescribed so widely.",
    blocks: [
      {
        type: "p",
        text: "It's easy to forget, in all the weight-loss attention, that tirzepatide started life as a diabetes drug — and remains one of the most effective ever made. That dual identity isn't a side note; it's central to why the medication matters and who benefits most.",
      },
      {
        type: "h3",
        text: "A powerful glucose-lowering drug",
      },
      {
        type: "p",
        text: "As Mounjaro, tirzepatide is FDA-approved for type 2 diabetes, and in its SURPASS trial program it produced strong reductions in A1C — the marker of long-term blood sugar control — along with significant weight loss. The same dual GLP-1/GIP action that drives appetite suppression also improves how the body handles glucose and insulin. For many people with type 2 diabetes, it lowers blood sugar more effectively than older options while helping with weight, rather than causing the weight gain some diabetes drugs do.",
      },
      {
        type: "h3",
        text: "Why the overlap matters",
      },
      {
        type: "p",
        text: "Excess weight and type 2 diabetes are deeply linked — most type 2 diabetes is driven by insulin resistance tied to weight, and losing weight often improves blood sugar dramatically. A drug that does both at once is unusually valuable: it treats the diabetes and the underlying weight problem together, rather than managing one while ignoring the other. This is also why insurance tends to cover tirzepatide more readily for diabetes (Mounjaro) than for weight loss (Zepbound) — the diabetes indication is long-established.",
      },
      {
        type: "p",
        text: "A few honest clarifications. Tirzepatide is not insulin and works through a completely different mechanism; it's generally used in type 2, not type 1, diabetes. If you have diabetes, your care should be managed by a clinician who can coordinate it with your other medications — combining it with insulin or sulfonylureas, for instance, can raise the risk of low blood sugar and may require dose adjustments. And if you have prediabetes, the weight loss and glucose improvement tirzepatide produces can meaningfully lower your risk of progressing to full diabetes. We cover the broader health effects in our guide to [GLP-1 beyond weight loss](/glp1-beyond-weight-loss).",
      },
      {
        type: "callout",
        title: "The practical point",
        text: "If you have both excess weight and type 2 diabetes or prediabetes, tirzepatide is especially worth discussing with your clinician — it's one of the few treatments that targets both at once, and your diabetes may also make coverage easier to obtain.",
      },
    ],
  },

  {
    id: "who-its-for",
    heading: "Who tirzepatide is for — and who it isn't",
    summary:
      "Zepbound is approved for adults with a BMI of 30+, or 27+ with a weight-related condition such as high blood pressure, type 2 diabetes, high cholesterol or sleep apnea. It isn't for people seeking to lose a few vanity pounds, those who are pregnant or planning pregnancy, or anyone with certain thyroid-cancer or pancreatitis history. A clinician confirms candidacy.",
    blocks: [
      {
        type: "p",
        text: "Tirzepatide is a serious medication for a medical problem, not a cosmetic shortcut — and the people it's approved and appropriate for reflects that. Here's who it's designed for, and who should steer clear.",
      },
      {
        type: "h3",
        text: "You may be a candidate if…",
      },
      {
        type: "ul",
        items: [
          "You have a **BMI of 30 or higher** (the clinical definition of obesity), or",
          "A **BMI of 27 or higher** along with a weight-related health condition — high blood pressure, type 2 diabetes, high cholesterol, obstructive sleep apnea or similar, and",
          "You've found that diet and lifestyle changes alone haven't been enough to reach or maintain a healthier weight, which is the norm rather than a personal failing.",
        ],
      },
      {
        type: "p",
        text: "Check your own number first with our [BMI and eligibility checker](/tools/am-i-eligible-for-glp1), and read the full clinical criteria in our guide to [whether you qualify for GLP-1](/guides/do-you-qualify-for-glp1). These give an estimate; a prescriber makes the actual call.",
      },
      {
        type: "h3",
        text: "It's probably not for you if…",
      },
      {
        type: "ul",
        items: [
          "You're looking to lose a few 'vanity' pounds rather than treat clinical excess weight — the risk-benefit balance doesn't favor it, and responsible providers won't prescribe it for that.",
          "You're **pregnant, planning pregnancy, or breastfeeding** — tirzepatide isn't used in pregnancy, and it can reduce the effectiveness of oral birth control, so this needs a specific conversation with your clinician.",
          "You have a personal or family history of **medullary thyroid carcinoma** or the genetic syndrome **MEN 2** — tirzepatide carries a boxed warning and is contraindicated in these cases.",
          "You have a history of **pancreatitis** or certain other conditions — these require careful clinician judgment.",
        ],
      },
      {
        type: "p",
        text: "One nuance worth adding: eligibility isn't only about a number on a chart. Two people with the same BMI can be very different candidates depending on their health history, their other medications, and what they've already tried. That's why the BMI thresholds are a starting filter, not the final word — a good clinician weighs your whole picture, including the risks of staying at your current weight, which for many people are themselves significant. If you're close to the threshold, or you have a weight-related condition, don't rule yourself out on the number alone; it's exactly the kind of case worth putting in front of a prescriber.",
      },
      {
        type: "callout",
        title: "The honest gatekeeping point",
        text: "A good provider screens you before prescribing — that's a feature, not a hurdle. If a service is willing to hand you tirzepatide with no real medical review, that's a red flag about the provider, not a convenience. The screening exists because the drug has real contraindications and real risks.",
      },
    ],
  },

  {
    id: "groups",
    heading: "Tirzepatide for specific groups",
    summary:
      "Most tirzepatide users are women, and emerging research suggests factors like menopause and hormone therapy may influence response. It's also relevant for people with PCOS (where insulin resistance drives weight), older adults (where protecting muscle is extra important), and anyone with a higher starting BMI. The core drug is the same; what changes is the surrounding plan.",
    blocks: [
      {
        type: "p",
        text: "Tirzepatide works across a wide range of people, but a few groups have specific considerations worth calling out — not because the drug is different for them, but because the surrounding plan should be.",
      },
      {
        type: "h3",
        text: "Women and menopause",
      },
      {
        type: "p",
        text: "Women make up the large majority of people taking these medications, and research is starting to look at how factors specific to women affect results. A 2026 study reported that, among women on semaglutide, those also taking hormone therapy saw significantly greater weight loss beginning around nine months — though the researchers noted a randomized trial would be needed to confirm a direct effect, so treat it as an interesting signal rather than settled fact. The broader, practical point stands: menopause shifts metabolism and body composition, and for many women that's exactly when weight becomes harder to manage and a medication like tirzepatide becomes worth discussing. If you're navigating menopause, it's a reasonable thing to raise with your clinician alongside any hormone therapy.",
      },
      {
        type: "h3",
        text: "PCOS and insulin resistance",
      },
      {
        type: "p",
        text: "Polycystic ovary syndrome is often driven by insulin resistance, the same underlying problem tirzepatide improves. Many people with PCOS struggle with weight in a way that reflects their biology rather than their effort, and the drug's effect on insulin sensitivity and appetite can be particularly relevant. It isn't a PCOS-specific treatment and should be managed by a clinician familiar with your full picture, but the mechanism overlaps meaningfully with what drives weight gain in PCOS.",
      },
      {
        type: "h3",
        text: "Older adults and muscle",
      },
      {
        type: "p",
        text: "For older adults, the weight loss is valuable but protecting muscle becomes even more important — we naturally lose muscle with age, and rapid weight loss can accelerate that if protein and resistance training are neglected. The medication is appropriate for many older adults, but the plan around it should lean hard on protein intake and strength work to preserve function and metabolic rate. Our [muscle-loss guide](/glp1-muscle-loss) is especially relevant here.",
      },
      {
        type: "h3",
        text: "Higher starting BMI",
      },
      {
        type: "p",
        text: "People starting at a higher BMI often have the most to gain and frequently see large absolute losses — but, as the maintenance section explains, bigger losses can mean a bigger gap for the body to try to reclaim if treatment stops. For this group especially, going in with a long-term maintenance mindset from day one matters most.",
      },
      {
        type: "callout",
        title: "The common thread",
        text: "The drug itself doesn't change for these groups — the plan around it does. Whatever your situation, the fundamentals hold: a proper medical review, slow titration, protein and muscle, patience, and a maintenance plan. A clinician who knows your specific history is the person to tailor it.",
      },
    ],
  },

  {
    id: "cost",
    heading: "What tirzepatide costs in 2026",
    summary:
      "Cost depends entirely on the route. Compounded tirzepatide runs from about $119/month through the programs we rate highest. Brand-name Zepbound is roughly $299–$449/month on Lilly's self-pay vials depending on dose (with refill-timing terms), and around $1,000+/month at retail list before insurance. Insurance coverage for weight loss is improving but still patchy.",
    blocks: [
      {
        type: "p",
        text: "Price is where the different versions of tirzepatide diverge the most — from around a hundred dollars a month to over a thousand, for the same molecule. Knowing the routes is the difference between overpaying badly and getting a fair price. These are the figures as of late 2026; always confirm current pricing, because it moves.",
      },
      {
        type: "h3",
        text: "Compounded tirzepatide — usually the cheapest",
      },
      {
        type: "p",
        text: "Through legitimate telehealth programs, compounded tirzepatide is the lowest-cost route — starting around **$119/month** with the value leaders we track (for example, flat-priced programs that publish their rates), and commonly in the low-to-mid hundreds elsewhere. This is why so many people access tirzepatide through telehealth rather than the pharmacy brand: the price difference is large. The trade-off is that it's compounded, not the FDA-approved finished product — covered in the names section above and in our [compounded vs branded guide](/guides/compounded-vs-branded-glp1).",
      },
      {
        type: "h3",
        text: "Brand-name Zepbound — the official route",
      },
      {
        type: "p",
        text: "For branded Zepbound, Eli Lilly's self-pay vials through its direct platform are priced by dose — roughly **$299/month for the lowest dose, $399 for the mid dose, and about $449 for higher doses** when you refill within the required window, with higher 'regular' prices if you miss it. At full retail list, before any discount or insurance, branded tirzepatide runs around **$1,000 or more per month**. So even within the official brand, the self-pay vials have made Zepbound far cheaper than the old list-price route — though still well above most compounded options.",
      },
      {
        type: "table",
        caption: "Tirzepatide cost by route (approximate, late 2026)",
        headers: ["Route", "Typical monthly cost", "Notes"],
        rows: [
          ["Compounded (telehealth)", "~$119–$300+/mo", "Lowest cost; compounded, not FDA-approved finished drug"],
          ["Zepbound self-pay vials (LillyDirect)", "~$299–$449/mo by dose", "Brand; refill-timing terms apply"],
          ["Zepbound/Mounjaro retail list", "~$1,000+/mo", "Before insurance or savings programs"],
          ["With insurance coverage", "Varies (copay)", "Depends on your plan; weight-loss coverage is patchy"],
        ],
      },
      {
        type: "h3",
        text: "Insurance and the real-world price",
      },
      {
        type: "p",
        text: "Insurance coverage for weight-loss medication is improving but still inconsistent — many plans cover tirzepatide for diabetes (Mounjaro) more readily than for weight loss (Zepbound), and some don't cover weight-loss drugs at all. If you have coverage, your copay can be far lower than any cash price; if you don't, the compounded route is usually the most affordable. Our [cost and insurance guide](/guides/glp1-cost-and-insurance) walks through checking your coverage, and the [cheapest tirzepatide](/cheapest-tirzepatide) page tracks the lowest cash prices we can verify.",
      },
      {
        type: "h3",
        text: "How to pay less without cutting corners",
      },
      {
        type: "p",
        text: "A few legitimate levers genuinely lower the cost. Check your insurance first — even a plan that doesn't obviously cover weight loss may cover tirzepatide for diabetes or prediabetes, and a covered copay beats every cash price. If you're paying cash, compare the flat-priced compounded programs, which tend to undercut both the brand and the tiered or intro-then-hike offers; a transparent flat monthly rate you can sustain is usually the best long-term value. Manufacturer self-pay vials are the cheapest branded route if you specifically want the finished product. And once you've lost weight, a lower maintenance dose is often cheaper than the full dose, which can bring the ongoing cost down. What doesn't belong on this list is an unregulated 'research' seller — that's not a saving, it's a risk.",
      },
      {
        type: "callout",
        title: "Don't let price push you somewhere dangerous",
        text: "The gap between compounded and brand is real and legitimate — but it should never push you toward an unregulated 'research peptide' seller. Cheap tirzepatide from a legitimate, clinician-backed telehealth pharmacy is reasonable; 'tirzepatide' from an anonymous online vial shop is a serious safety risk, covered in the how-to-get section below.",
      },
    ],
  },

  {
    id: "how-to-get",
    heading: "How to get tirzepatide safely",
    summary:
      "Three legitimate routes: a telehealth program (usually compounded, lowest cost, fully online), your own doctor plus a pharmacy (for branded Zepbound/Mounjaro, best if you have coverage), or Lilly's self-pay vials. All require a real prescription after a medical review. Avoid anonymous 'research peptide' sellers entirely — that's the one genuinely dangerous route.",
    blocks: [
      {
        type: "p",
        text: "Getting tirzepatide legitimately is straightforward, and there's one route to avoid entirely. Here are the real options, and the trap.",
      },
      {
        type: "h3",
        text: "Route 1: a telehealth program (most common)",
      },
      {
        type: "p",
        text: "The most popular route is an online weight-loss program: you complete a medical intake, a licensed clinician reviews your history and, if appropriate, prescribes, and the medication — usually compounded tirzepatide — ships to your door. It's fully online, generally the cheapest, and fast. The quality varies a lot between providers, which is exactly why we rate them; our [top picks are in the providers section below](#top-providers), and you can compare the full field on our [best GLP-1 providers](/best-glp1-providers) page or buy [tirzepatide online, compared](/tirzepatide-online).",
      },
      {
        type: "h3",
        text: "Route 2: your doctor and a pharmacy (branded)",
      },
      {
        type: "p",
        text: "If you want branded Zepbound or Mounjaro — the FDA-approved finished product — the classic route is your own doctor (or a telehealth service that prescribes brand) writing a prescription you fill at a pharmacy. This is the best path if you have insurance that covers it, since your copay may beat every cash price. Without coverage, the brand is the priciest route unless you use the self-pay vials.",
      },
      {
        type: "h3",
        text: "Route 3: Lilly's self-pay vials",
      },
      {
        type: "p",
        text: "Eli Lilly sells Zepbound self-pay vials directly, at the by-dose prices covered in the cost section. This is a legitimate middle path: the real branded product, cheaper than retail list, without needing insurance — though still generally pricier than compounded, and subject to refill-timing terms.",
      },
      {
        type: "h3",
        text: "The route to avoid: 'research' tirzepatide",
      },
      {
        type: "p",
        text: "You'll find sellers offering 'research-grade tirzepatide' or 'tirzepatide peptides' online, no prescription needed, often labeled 'not for human consumption' as a legal shield. Avoid these completely. It's an unregulated product of unknown purity, dose and sterility, with no clinician, no pharmacist and no recourse — strictly more dangerous than a prescription, not a clever shortcut. The entire point of the legitimate routes is that someone qualified is checking the drug and checking you. Our [provider safety check](/tools/glp1-provider-safety-check) can help you vet a service before you trust it.",
      },
      {
        type: "callout",
        title: "The one rule that keeps you safe",
        text: "Every legitimate route involves a real prescription after a real medical review by a licensed clinician. If a seller skips that, walk away — no matter how cheap or convenient it looks. That single rule rules out essentially every dangerous option.",
      },
    ],
  },

  {
    id: "side-effects",
    heading: "Side effects and how to manage them",
    summary:
      "The most common tirzepatide side effects are gastrointestinal — nausea, diarrhea, constipation, vomiting — usually mildest when the dose is increased slowly and often easing over time. Rare but serious risks include pancreatitis and gallbladder problems, and a boxed warning about thyroid tumors seen in animals. Slow titration, smaller meals and staying hydrated help most people tolerate it.",
    blocks: [
      {
        type: "p",
        text: "Tirzepatide is effective, but it's not side-effect-free, and going in informed is how you tolerate it well. Here's the honest picture.",
      },
      {
        type: "h3",
        text: "The common ones (mostly digestive)",
      },
      {
        type: "p",
        text: "The most common side effects are gastrointestinal: **nausea, diarrhea, constipation, vomiting, and indigestion.** They're a direct result of how the drug works — it slows stomach emptying — and they're usually worst in the first days after a dose increase, then settle. For most people they're mild to moderate and improve as the body adjusts, especially when the dose is raised slowly rather than rushed. A minority find them bad enough to stop, but the large majority tolerate the drug with sensible management.",
      },
      {
        type: "h3",
        text: "How to manage them",
      },
      {
        type: "ul",
        items: [
          "**Go slow on dose increases.** Most side effects track with titration; a slower climb to higher doses is the single biggest lever on tolerability. Don't rush to the top dose.",
          "**Eat smaller, slower meals.** Because your stomach empties more slowly, large or rich meals trigger nausea. Smaller portions, eaten slowly, and stopping when full help a lot.",
          "**Go easy on fatty, greasy and very sugary foods**, which tend to worsen nausea and digestive upset.",
          "**Stay hydrated**, especially if you have any vomiting or diarrhea — dehydration is a real risk and can affect your kidneys.",
          "**Talk to your clinician** about persistent or severe symptoms rather than pushing through — the dose can be held or adjusted.",
        ],
      },
      {
        type: "p",
        text: "Our dedicated guide to [GLP-1 side effects and how to manage them](/guides/glp1-side-effects-and-how-to-manage-them) goes deeper on each one.",
      },
      {
        type: "h3",
        text: "The rare but serious risks",
      },
      {
        type: "p",
        text: "Less commonly, tirzepatide is associated with more serious issues: **pancreatitis** (inflammation of the pancreas), **gallbladder problems**, kidney issues (often linked to dehydration from vomiting or diarrhea), and allergic reactions. It also carries a **boxed warning** — the FDA's strongest — because related drugs caused thyroid C-cell tumors in rodents; whether this applies to humans isn't established, but it's why anyone with a personal or family history of medullary thyroid cancer or MEN 2 shouldn't take it. These are reasons the drug needs a prescriber and monitoring, not reasons to panic: serious events are uncommon, but you should know the warning signs (such as severe, persistent abdominal pain) and seek care if they occur.",
      },
      {
        type: "p",
        text: "One more worth naming: because rapid weight loss can take muscle along with fat, protecting your muscle matters — see our guide to [GLP-1 and muscle loss](/glp1-muscle-loss). It's not a classic 'side effect,' but it's a real consideration for keeping your results healthy.",
      },
    ],
  },

  {
    id: "dosing",
    heading: "Dosing and how titration works",
    summary:
      "Tirzepatide is a once-weekly injection that starts low and steps up slowly — typically beginning at 2.5 mg and increasing roughly monthly as tolerated, up to a maximum of 15 mg. The low start isn't the treatment dose; it's there to let your body adjust and minimize side effects. Your clinician sets and adjusts the schedule based on your response and tolerance.",
    blocks: [
      {
        type: "p",
        text: "Tirzepatide dosing follows a deliberate, gradual schedule, and understanding it prevents a common mistake — expecting big results from the starting dose, which isn't designed to deliver them.",
      },
      {
        type: "h3",
        text: "The titration ladder",
      },
      {
        type: "p",
        text: "Tirzepatide is injected **once a week**, and the dose is increased in steps over months. The branded schedule typically **starts at 2.5 mg**, which is an introductory dose meant to let your body adjust — not a therapeutic weight-loss dose. After about four weeks it steps up (commonly to 5 mg), then continues increasing roughly every four weeks as tolerated, through 7.5, 10, 12.5 and up to a **maximum of 15 mg**. The idea is to reach an effective dose while keeping side effects manageable, which is why the climb is slow.",
      },
      {
        type: "table",
        caption: "Typical tirzepatide titration (branded schedule)",
        headers: ["Phase", "Dose", "Purpose"],
        rows: [
          ["Starting (≈ month 1)", "2.5 mg weekly", "Let the body adjust — not a treatment dose"],
          ["Step up (≈ month 2)", "5 mg weekly", "First therapeutic dose"],
          ["Further steps", "7.5 → 10 → 12.5 mg", "Increase ~monthly as tolerated"],
          ["Maximum", "15 mg weekly", "Highest approved dose"],
        ],
      },
      {
        type: "p",
        text: "Two things to keep in mind. First, you don't necessarily need the maximum dose — many people do well at a middle dose, and the right dose is the lowest one that gives you good results with tolerable side effects. Second, compounded programs may structure doses somewhat differently, but the same slow-titration principle applies. Never adjust your own dose or try to rush the schedule to speed up results — that's the fast track to miserable side effects. Our [dosing schedule guide](/guides/glp1-dosing-schedule-explained) covers this in more detail. Always follow your prescriber's specific plan.",
      },
    ],
  },

  {
    id: "injecting",
    heading: "Injecting tirzepatide: the practical side",
    summary:
      "Tirzepatide is a once-weekly injection under the skin — pre-filled pens or vials with a syringe — usually in the abdomen, thigh or upper arm, rotating the spot each week. Pick a consistent day, store it as directed (refrigerated, with a limited room-temperature window), dispose of needles in a sharps container, and follow your provider's guidance on a missed dose. Most people find it far easier than they feared.",
    blocks: [
      {
        type: "p",
        text: "The word 'injection' puts a lot of people off before they start, so it's worth demystifying. The practical reality is simpler and less daunting than most expect.",
      },
      {
        type: "h3",
        text: "How it's given",
      },
      {
        type: "p",
        text: "Tirzepatide is a subcutaneous injection — meaning just under the skin, not into muscle or vein — taken once a week. Branded Zepbound and Mounjaro come as pre-filled single-dose pens; many compounded versions come as a vial you draw into a small syringe. The needle is short and fine, and the usual injection sites are the abdomen (a couple of inches from the navel), the front of the thigh, or the back of the upper arm. It's the kind of injection people do at home routinely, and most are surprised by how quick and nearly painless it is after the first time.",
      },
      {
        type: "h3",
        text: "Making it a habit",
      },
      {
        type: "ul",
        items: [
          "**Pick a consistent day of the week** and stick to it — a weekly routine is easy to remember and keeps your dosing steady. You can take it any time of day, with or without food.",
          "**Rotate your injection site** each week (and spots within an area) rather than using the same exact place every time, which keeps the skin healthy.",
          "**Store it as directed** — tirzepatide is generally kept refrigerated, with a limited window at room temperature; check your product's specific storage instructions and don't freeze it.",
          "**Use a sharps container** for used needles and pens rather than household trash, and follow local disposal rules.",
          "**For a missed dose, follow your provider's or the label's guidance** — there's typically a window within which you can take it late, after which you skip and resume your schedule. Don't double up, and confirm the specifics for your product rather than guessing.",
        ],
      },
      {
        type: "p",
        text: "If needle anxiety is a real barrier for you, two things help: the newer oral GLP-1 options (covered in our [GLP-1 pills guide](/glp1-pills)) are expanding, and many people find that the first injection dissolves the fear — the anticipation is almost always worse than the reality. Your provider can walk you through the first one, and pen devices in particular are designed to make it close to foolproof.",
      },
      {
        type: "callout",
        title: "The reassurance most people need",
        text: "Millions of people inject GLP-1 medication at home every week. The pens especially are built to be simple and near-painless, and the weekly schedule makes it an easy routine. If the needle is the only thing holding you back, it's worth not letting it be the deciding factor.",
      },
    ],
  },

  {
    id: "timeline",
    heading: "What to expect: a realistic timeline",
    summary:
      "Appetite usually drops within the first weeks, but meaningful weight loss builds gradually over months as the dose increases — the big trial results came over 72 weeks. Expect a steady trend with normal week-to-week fluctuations and possible plateaus, not a straight line. Patience and staying the course matter more than any single week on the scale.",
    blocks: [
      {
        type: "p",
        text: "People want to know how fast it works, and the honest answer is: appetite changes fast, but weight loss is a marathon. Setting the right expectations prevents the disappointment that makes people quit early.",
      },
      {
        type: "h3",
        text: "The first weeks",
      },
      {
        type: "p",
        text: "Many people notice reduced appetite and less 'food noise' within the first weeks, even on the low starting dose. Early weight loss is often modest, because the starting dose is introductory. This is the adjustment phase — your body is getting used to the drug, side effects (if any) are most likely now, and the scale may move only a little. That's normal and not a sign the drug isn't working.",
      },
      {
        type: "h3",
        text: "The months that follow",
      },
      {
        type: "p",
        text: "As the dose steps up over the following months, the weight loss builds. Remember the trial context: the roughly 15–21% results came over **72 weeks** of treatment. So meaningful results accumulate over many months, not weeks — a steady downward trend with normal fluctuations, not a straight line. Expect some weeks with no change, and possibly a plateau or two along the way; these are part of the process, not failures. The people who do best are the ones who judge progress over months and keep going through the flat stretches.",
      },
      {
        type: "callout",
        title: "The mindset that works",
        text: "Weigh the trend, not the day. Week-to-week the scale bounces for all sorts of reasons; what matters is the direction over months. Pair the drug with solid protein, some resistance training and decent sleep, and you'll both lose more and keep more muscle. Our [results timeline guide](/guides/glp1-results-timeline) breaks the phases down further.",
      },
    ],
  },

  {
    id: "diet-and-lifestyle",
    heading: "What to eat (and do) on tirzepatide",
    summary:
      "The drug handles your appetite; your job is to make the calories you do eat count and protect your muscle. Prioritize protein at every meal, eat plenty of fiber and vegetables, stay well hydrated, go easy on greasy and very sugary foods that worsen nausea, be cautious with alcohol, and add resistance training. Done well, this means more fat loss, less muscle loss, and fewer side effects.",
    blocks: [
      {
        type: "p",
        text: "Tirzepatide does the hard part — turning down your appetite — but what you eat and do while you're on it determines whether you lose fat and keep muscle, or lose weight the wrong way and feel worse doing it. Because you'll be eating less, the quality of what you eat matters more, not less.",
      },
      {
        type: "h3",
        text: "Protein first, every meal",
      },
      {
        type: "p",
        text: "This is the single most important habit on tirzepatide. When you lose weight, some of it can come from muscle unless you actively protect it — and muscle is what keeps your metabolism up and your body strong. Eating enough protein, spread across meals, is the main defense. Build each meal around a protein source (meat, fish, eggs, dairy, legumes, tofu), and hit it first when your appetite is small and you can only manage a little. A common target is roughly 1.2–1.6 g of protein per kg of body weight, but confirm the right number for you with a clinician or dietitian.",
      },
      {
        type: "h3",
        text: "Fiber, vegetables and hydration",
      },
      {
        type: "p",
        text: "After protein, prioritize fiber and vegetables — they help with fullness, digestion (constipation is a common side effect), and overall nutrition on fewer calories. And drink more water than you think you need: the drug can suppress thirst along with appetite, and any nausea, vomiting or diarrhea raises the risk of dehydration, which can affect your kidneys. Staying well hydrated also tends to reduce how rough the side effects feel.",
      },
      {
        type: "h3",
        text: "What to go easy on",
      },
      {
        type: "ul",
        items: [
          "**Greasy, fatty and fried foods** — they sit heavily when your stomach empties slowly and are a common nausea trigger.",
          "**Very sugary foods and big, rich meals** — these also worsen nausea and digestive discomfort; smaller, simpler meals go down far better.",
          "**Alcohol** — many people find their tolerance drops on tirzepatide, and alcohol adds empty calories and can worsen nausea. Be cautious and see how you respond.",
        ],
      },
      {
        type: "h3",
        text: "Move — especially resistance training",
      },
      {
        type: "p",
        text: "You don't have to become an athlete, but adding some resistance training (weights, bands, bodyweight work) at least twice a week is the other half of protecting muscle. Combined with enough protein, it's what turns 'weight loss' into 'fat loss with your strength intact.' Any movement you'll actually keep doing helps; strength work specifically guards the muscle that keeps your results healthy and your metabolism up. Our guides to [what to eat on GLP-1 medications](/guides/what-to-eat-on-glp1-medications) and [protecting muscle](/glp1-muscle-loss) go deeper on both.",
      },
      {
        type: "callout",
        title: "The simple version",
        text: "Protein first, plenty of fiber and water, go easy on greasy and sugary food and alcohol, and lift something twice a week. That's most of the lifestyle playbook — and it both improves your results and makes the side effects easier to live with.",
      },
    ],
  },

  {
    id: "long-term-safety",
    heading: "Is tirzepatide safe long-term?",
    summary:
      "The honest answer: the track record is reassuring and still growing. Tirzepatide and its drug class have been used for years, with large trials behind them, and the serious risks are known and uncommon. Very-long-term (decades) data is still accumulating because weight-loss use is relatively new. The sensible approach is ongoing use with clinician monitoring — not fear of a well-studied drug, but not complacency either.",
    blocks: [
      {
        type: "p",
        text: "If you're considering taking a medication for the long haul, 'is it safe over years?' is exactly the right question. Here's the balanced answer, without the hype of the boosters or the alarm of the skeptics.",
      },
      {
        type: "h3",
        text: "What's reassuring",
      },
      {
        type: "p",
        text: "Tirzepatide has been studied in large, rigorous trials across tens of thousands of people, and the broader GLP-1 drug class has been in use for well over a decade, much of it in diabetes. The common side effects are well characterized and mostly manageable, and the serious ones are uncommon and known — which means they can be screened for and watched. For the related drug semaglutide, a major cardiovascular-outcomes trial even showed a reduction in heart problems, which is the opposite of a safety red flag. None of that is nothing: a drug with this much trial data behind it is far from a leap into the unknown.",
      },
      {
        type: "h3",
        text: "What we're still learning",
      },
      {
        type: "p",
        text: "At the same time, honesty requires acknowledging the limits. Using these drugs specifically for weight management, at scale, is relatively recent, so data stretching across decades of continuous use is still accumulating. We have strong multi-year evidence; we don't yet have the kind of 20-year picture we have for, say, statins. That's not a reason for alarm — it's a reason for the sensible approach that applies to any long-term medication: take it under the care of a clinician who monitors you, report new symptoms, and keep the decision under review rather than on autopilot.",
      },
      {
        type: "h3",
        text: "The balanced takeaway",
      },
      {
        type: "p",
        text: "Put the two together and the position is straightforward. Tirzepatide is a well-studied drug with a reassuring safety profile so far and real, known risks that a prescriber screens and monitors for. For most appropriate candidates, the risks of ongoing obesity — heart disease, diabetes, and the rest — are themselves serious and well documented, which is the other side of the ledger people sometimes forget. The reasonable path isn't fear or blind faith; it's informed, monitored, long-term use with a clinician, revisited over time as more data arrives. If you have specific risk factors, those are exactly what the medical review and your ongoing check-ins are for.",
      },
      {
        type: "callout",
        title: "How to think about it",
        text: "Weigh the known, monitored risks of the drug against the known risks of untreated obesity — not against an imaginary risk-free alternative. For many people the balance favors treatment, but it's a genuinely individual call, and it belongs with a clinician who can factor in your health, not a website.",
      },
    ],
  },

  {
    id: "maintenance",
    heading: "Staying on it, stopping, and keeping the weight off",
    summary:
      "Tirzepatide works while you take it; stop and most of the weight returns — SURMOUNT-4 showed about 14% regain within a year of stopping, while continuing maintained the loss. Plan for the long term from the start: continued treatment (often at a maintenance dose) is the most proven way to hold your results, with muscle protection and strong habits as support.",
    blocks: [
      {
        type: "p",
        text: "This is the part that should shape your whole decision, so we won't bury it: tirzepatide is ongoing treatment for a chronic condition, not a course you finish. The evidence on stopping is clear and worth knowing before you start.",
      },
      {
        type: "p",
        text: "In the **SURMOUNT-4** trial, people who had lost weight on tirzepatide and then switched to placebo **regained about 14% of their body weight** over the following year, while those who kept taking it **continued to lose** — and a 2026 analysis found that the health improvements (blood pressure, blood sugar, cholesterol) reversed in step with the regain. In other words, the drug's benefits, on the scale and in your bloodwork, depend on continuing it. Expecting to take tirzepatide for a while, stop, and keep the results easily is planning against the evidence.",
      },
      {
        type: "p",
        text: "That doesn't mean you can never stop — it means you should plan for maintenance from day one. The most proven way to hold your loss is to stay on some form of treatment, often at a lower maintenance dose that can be cheaper and gentler than the full dose. Protecting muscle (protein plus resistance training), keeping the habits that supported your loss, and monitoring your weight all help, but none has matched continued medication in a trial. If you do decide to come off it, do it with a plan and your clinician — we cover exactly how in our dedicated guide to [what happens when you stop a GLP-1](/stopping-glp1).",
      },
      {
        type: "p",
        text: "It's worth sitting with what this means before you start, because it reframes the whole decision. Tirzepatide isn't a project with a finish line — 'take it for six months, hit the goal, and I'm done.' It's closer to a long-term relationship with a treatment, the way someone manages blood pressure or cholesterol. That's not a reason to avoid it; the results are real and the health benefits are real. But it does mean the right question at the outset isn't just 'can I lose the weight on this,' which the answer is almost certainly yes — it's 'can I sustain a version of this for the long term,' whether that's continued medication, a maintenance dose, or a carefully planned and monitored step-down. People who go in with that framing make better choices about which provider and price to commit to, and are far less likely to be blindsided by regain a year later.",
      },
      {
        type: "callout",
        title: "Choose a program you can stay with",
        text: "Because maintenance is the real game, the smartest move is to start with a provider and a price you could realistically sustain long-term — not the flashiest first-month deal. A sustainable monthly cost beats a cheap start you can't keep up, because stopping is what undoes the results.",
      },
    ],
  },

  {
    id: "alternatives",
    heading: "Tirzepatide vs the other options",
    summary:
      "Tirzepatide is the most effective medication, but it's not the only path. Semaglutide is a cheaper, proven alternative; older drugs like liraglutide are less effective; oral GLP-1 pills are emerging for the needle-averse; bariatric surgery is more invasive but durable for some; and newer drugs like retatrutide show even larger losses in trials but aren't approved yet. The right choice depends on effectiveness, cost, access and your preferences.",
    blocks: [
      {
        type: "p",
        text: "Tirzepatide leads on effectiveness, but a good decision means knowing the alternatives honestly — some are cheaper, some are more durable, and some are still over the horizon.",
      },
      {
        type: "h3",
        text: "Semaglutide (Ozempic, Wegovy)",
      },
      {
        type: "p",
        text: "The main alternative, covered in the comparison section above: slightly less weight loss on average (about 14.9% in STEP 1 versus tirzepatide's ~15–21%, and less head-to-head), but a longer track record, strong cardiovascular-outcome data, and often lower cost or easier access. For many people semaglutide is the right, sensible choice — especially if cost or coverage points that way. It's not a downgrade; it's a proven, highly effective drug that happens to be second on raw weight loss.",
      },
      {
        type: "h3",
        text: "Older GLP-1 drugs and oral options",
      },
      {
        type: "p",
        text: "Liraglutide (Saxenda) is an older, daily GLP-1 injection that's less effective than the weekly drugs — largely superseded, though still used. More interesting is the arrival of oral GLP-1 options: pills that avoid injections entirely, which matter a lot for the needle-averse. These are expanding quickly, and we cover them in our [GLP-1 pills guide](/glp1-pills). For now, the injectables remain more effective, but the oral pipeline is one of the biggest shifts to watch.",
      },
      {
        type: "h3",
        text: "Bariatric surgery",
      },
      {
        type: "p",
        text: "For people with severe obesity, bariatric surgery remains a powerful, more durable option — it tends to produce large, lasting weight loss without a weekly medication. It's also more invasive, with real risks and a bigger commitment. Notably, recent research found that people who don't tolerate or don't respond well enough to drugs like tirzepatide can still achieve substantial weight loss with surgery — so the two aren't mutually exclusive, and surgery is a legitimate path to discuss with a specialist if medication isn't enough.",
      },
      {
        type: "h3",
        text: "What's coming next",
      },
      {
        type: "p",
        text: "The pipeline is moving fast. Retatrutide — an investigational 'triple agonist' — produced even larger weight loss than tirzepatide in early (phase 2) trials, on the order of up to the low-to-mid 20s percent, but it is not yet FDA-approved and is still in late-stage testing, so it isn't something you can get as a treatment today. An oral form of tirzepatide is also in development. We track these honestly on our [retatrutide page](/medications/retatrutide) — the key rule is that an investigational drug is not an available treatment, and anyone selling 'retatrutide' now is selling an unapproved, unregulated product.",
      },
      {
        type: "callout",
        title: "The honest summary",
        text: "Tirzepatide is the most effective medication you can actually get today. Semaglutide is the strong, proven runner-up. Surgery is the more durable option for severe obesity. Oral pills and next-generation drugs are coming but aren't the better choice yet. For most people choosing now, it's tirzepatide or semaglutide — and this guide is about getting tirzepatide right.",
      },
    ],
  },

  {
    id: "top-providers",
    heading: "The best providers for tirzepatide",
    summary:
      "Because most people access tirzepatide through telehealth, who you choose matters — on price, transparency, pharmacy credentials and support. Our top picks are scored by an independent methodology across cost, clinical quality, medications offered and transparency. Below are the three we rate highest for tirzepatide; compare the full field on our best-providers page.",
    blocks: [
      {
        type: "p",
        text: "Since the telehealth route is how most people actually get tirzepatide, the provider you choose is one of the biggest decisions here — it determines your price, whether the pharmacy credentials are solid, how transparent the pricing is, and what support you get. We score the field independently across cost, clinical quality, the medications offered, user experience and transparency; our rankings aren't for sale, and a commission (where we earn one) never changes them. See exactly [how we review](/how-we-review).",
      },
      {
        type: "p",
        text: "Here are the three programs we rate highest overall — all of which offer tirzepatide. The component below pulls their current details and pricing live from our provider data.",
      },
      {
        type: "callout",
        title: "How to read these picks",
        text: "Use these as a vetted starting point, not the end of your research. The right provider depends on your priorities — lowest price, brand-name access, insurance, or specific support — so read the full reviews and, if you're unsure, take our 2-minute match quiz. Confirm current pricing on each provider's own site, since promotions change.",
      },
      {
        type: "p",
        text: "Want a wider comparison or a personalized pick? See the [full best-providers ranking](/best-glp1-providers), compare [tirzepatide programs side by side](/tirzepatide-online), or take the [2-minute match quiz](/find-your-match) to narrow it to your situation.",
      },
    ],
  },

  {
    id: "mistakes",
    heading: "Common mistakes to avoid",
    summary:
      "The avoidable errors: rushing the dose and triggering needless side effects, expecting fast results and quitting early, stopping with no maintenance plan, neglecting protein and muscle, buying unregulated 'research' tirzepatide to save money, and choosing a provider on a flashy first-month deal rather than a sustainable price. Each is easy to sidestep once you know it.",
    blocks: [
      {
        type: "p",
        text: "Most people who have a bad experience with tirzepatide made an avoidable mistake, not an unlucky one. Here are the common ones, so you can skip them.",
      },
      {
        type: "ul",
        items: [
          "**Rushing the dose.** Climbing to higher doses too fast is the number-one cause of miserable side effects. Slow titration is the whole point — let your body adjust.",
          "**Expecting overnight results and quitting early.** The big results came over 72 weeks. Judging the drug by the first few weeks, or a single plateau, and giving up is how people walk away before it works.",
          "**Stopping with no plan.** Coming off the drug without a maintenance strategy is the fast track to regaining most of what you lost. Plan maintenance before you start.",
          "**Ignoring protein and muscle.** Losing weight fast without enough protein or any resistance training costs you muscle, which hurts your metabolism and your results. Protect it.",
          "**Chasing the lowest price into danger.** Legitimate compounded tirzepatide is a reasonable way to save; anonymous 'research peptide' vials are not. Never trade a prescription and a pharmacist for a cheaper unregulated product.",
          "**Picking a provider on the first-month deal.** A cheap intro rate that balloons later is worse than a slightly higher flat price you can sustain — because maintenance is where the results are kept or lost.",
        ],
      },
      {
        type: "p",
        text: "None of these are hard to avoid once you know them. The theme running through all of them is the same: tirzepatide rewards patience, a plan, and a sustainable setup — and punishes shortcuts.",
      },
    ],
  },

  {
    id: "myths",
    heading: "Myths and misconceptions, cleared up",
    summary:
      "Tirzepatide attracts a lot of noise. The common myths — that it's the 'easy way out,' that needing it long-term is a failure, that it's 'just water weight,' that compounded means fake, or that it inevitably ruins your face — mostly fall apart against the evidence. Clearing them up helps you make the decision on facts rather than headlines.",
    blocks: [
      {
        type: "p",
        text: "Few drugs attract as much commentary — and as much nonsense — as this one. Here are the myths worth dismantling before they shape your decision.",
      },
      {
        type: "h3",
        text: "\"It's the easy way out\"",
      },
      {
        type: "p",
        text: "This one says more about how we think about obesity than about the drug. Tirzepatide treats a biological problem — the appetite and metabolic signals that make weight so hard to lose and keep off. Using an effective medical treatment for a medical condition isn't cheating any more than taking blood-pressure medication is. And it's hardly effortless: you still have to eat well, protect muscle, manage side effects and stay the course. 'Easy way out' is a judgment, not a fact.",
      },
      {
        type: "h3",
        text: "\"Needing it long-term means it failed\"",
      },
      {
        type: "p",
        text: "The opposite is true — needing ongoing treatment is how chronic conditions work, not a sign of failure. We don't say blood-pressure medication 'failed' because the pressure rises again when you stop it. Obesity behaves the same way, which is exactly what the regain data shows. Planning for long-term treatment is realism, not defeat.",
      },
      {
        type: "h3",
        text: "\"It's just water weight\"",
      },
      {
        type: "p",
        text: "No. The weight loss in the trials is real fat loss measured over many months, and body-composition studies show most of it is fat (with some muscle, which is why protein and training matter). This isn't a diuretic effect or a temporary whoosh — it's sustained loss driven by eating less over time.",
      },
      {
        type: "h3",
        text: "\"Compounded means fake or dangerous\"",
      },
      {
        type: "p",
        text: "Compounded tirzepatide from a legitimate, clinician-backed pharmacy is the same molecule, prepared by a licensed compounding pharmacy — not a counterfeit. It is a different regulatory category from the branded finished drug, with real caveats we've covered honestly, and quality depends on the pharmacy. The danger isn't 'compounded' as a category; it's unregulated 'research peptide' sellers, which are a different thing entirely.",
      },
      {
        type: "h3",
        text: "\"It ruins your face and body\"",
      },
      {
        type: "p",
        text: "'Ozempic face' refers to the facial volume loss that can come with any significant, rapid weight loss — it isn't unique to these drugs, and it's largely a function of how fast and how much you lose. Losing at a sensible pace, protecting muscle, and keeping skin and nutrition in mind all help. It's a real cosmetic consideration worth knowing about, not an inevitable disfigurement.",
      },
      {
        type: "callout",
        title: "The point of clearing these up",
        text: "Decide on the evidence, not the discourse. Tirzepatide is a powerful, legitimate medical treatment with real benefits and real trade-offs — the honest picture is more useful than either the hype or the sneering, and it's what this whole guide is built on.",
      },
    ],
  },

  {
    id: "verdict",
    heading: "The bottom line",
    summary:
      "Tirzepatide is the most effective weight-loss medication available — up to ~20% in trials, and the winner head-to-head against semaglutide. It's not magic: it has real side effects, needs a prescription, works only while you take it, and costs anywhere from ~$119/month compounded to ~$1,000 at brand list. Used properly, with a maintenance plan and a provider you can stay with, it's a genuinely powerful tool.",
    blocks: [
      {
        type: "p",
        text: "Pull it all together and the picture is clear:",
      },
      {
        type: "ul",
        items: [
          "**It's the most effective option.** Up to around 20–21% weight loss in trials, and it beat semaglutide head-to-head. For raw effectiveness, tirzepatide is the leader.",
          "**It's one molecule under several names.** Zepbound (weight), Mounjaro (diabetes) and compounded tirzepatide are the same drug — the difference is the label, the approval and the price.",
          "**Cost ranges enormously.** From about $119/month compounded to roughly $1,000+/month at brand list, with self-pay vials and insurance in between. The route you choose is the biggest lever on price.",
          "**It's ongoing treatment, not a cure.** Stop and most of the weight returns. Plan for maintenance from the start, and choose a provider and price you can sustain.",
          "**It needs doing right.** A real prescription, slow titration, protein and muscle, patience over months, and no unregulated shortcuts.",
        ],
      },
      {
        type: "p",
        text: "If tirzepatide is right for you — and that's a decision for you and a clinician — the practical next steps are to confirm you're a candidate, pick a legitimate provider at a price you can stay with, and go in with realistic expectations and a maintenance plan. Start with our [top providers above](#top-providers) or the [full ranking](/best-glp1-providers), check the [cheapest verified prices](/cheapest-tirzepatide), or take the [2-minute match quiz](/find-your-match) to narrow it to your situation. Whatever you choose, make it a decision built on the evidence — which is exactly what this guide is for.",
      },
    ],
    readMore: {
      href: "/best-glp1-providers",
      label: "Compare the GLP-1 programs we rate highest",
    },
  },
];

export const TIRZ_FAQS: { q: string; a: string }[] = [
  {
    q: "Is tirzepatide better than semaglutide (Ozempic/Wegovy) for weight loss?",
    a: "For most people, yes — on raw weight loss. In the SURMOUNT-5 head-to-head trial, tirzepatide produced greater average weight loss than semaglutide (roughly 20% vs 14% over 72 weeks). Tirzepatide is a dual GLP-1/GIP drug, while semaglutide works on GLP-1 alone. That said, semaglutide has a longer track record and strong cardiovascular-outcome data, and may be cheaper or better tolerated for some — so the best choice is individual, made with a clinician.",
  },
  {
    q: "What's the difference between Mounjaro, Zepbound and compounded tirzepatide?",
    a: "They're all the same molecule — tirzepatide. Zepbound is the brand FDA-approved for weight management; Mounjaro is the brand approved for type 2 diabetes; compounded tirzepatide is pharmacy-prepared and dispensed through telehealth, usually the cheapest route. The drug is identical; what differs is the label, the FDA approval, the price and how you get it.",
  },
  {
    q: "How much weight can you lose on tirzepatide?",
    a: "In SURMOUNT-1, tirzepatide produced about 15% to 21% mean weight loss across doses over 72 weeks — up to roughly a fifth of body weight on the highest (15 mg) dose. These are averages; individuals lose more or less. The results built up over about 72 weeks of continuous treatment, so it's a gradual process, not an overnight change.",
  },
  {
    q: "How much does tirzepatide cost?",
    a: "It depends on the route. Compounded tirzepatide runs from about $119/month through the value-leading telehealth programs we track. Brand-name Zepbound self-pay vials are roughly $299–$449/month by dose (with refill-timing terms), and retail list price is around $1,000+/month before insurance. With insurance that covers it, your copay may be far lower. Always confirm current pricing, as it changes.",
  },
  {
    q: "How do I get tirzepatide for weight loss?",
    a: "Three legitimate routes: a telehealth program (complete a medical intake, a clinician reviews and prescribes, compounded tirzepatide ships to you — usually cheapest); your own doctor plus a pharmacy for branded Zepbound/Mounjaro (best with insurance); or Lilly's self-pay Zepbound vials. All require a real prescription after a medical review. Avoid anonymous 'research peptide' sellers entirely — that's the one genuinely dangerous route.",
  },
  {
    q: "Is compounded tirzepatide safe and legal?",
    a: "Compounded tirzepatide from a legitimate, clinician-backed telehealth pharmacy is a widely used, reasonable route, but it's a different regulatory category from branded Zepbound: compounded medications aren't individually FDA-approved finished drugs, and the rules tightened after the FDA declared the tirzepatide shortage resolved. Use a provider that works with licensed pharmacies and prescribers and is transparent about it — and never buy unregulated 'research' tirzepatide, which is a real safety risk.",
  },
  {
    q: "What are the main side effects of tirzepatide?",
    a: "The most common are gastrointestinal — nausea, diarrhea, constipation, vomiting and indigestion — usually worst after a dose increase and often easing with time, especially when the dose is raised slowly. Rare but serious risks include pancreatitis, gallbladder problems and kidney issues (often from dehydration), plus a boxed warning about thyroid tumors seen in animals. Slow titration, smaller meals, avoiding greasy food and staying hydrated help most people tolerate it.",
  },
  {
    q: "Do you gain the weight back after stopping tirzepatide?",
    a: "Most people do. In the SURMOUNT-4 trial, people who stopped tirzepatide regained about 14% of their body weight within a year, while those who continued kept losing — and the health improvements reversed with the regain. This is biology, not willpower: the drug suppresses appetite while you take it. Plan for maintenance, often at a lower dose, from the start. See our full guide on stopping a GLP-1 for how to manage it.",
  },
  {
    q: "How is tirzepatide dosed?",
    a: "It's a once-weekly injection that starts low and steps up slowly. The branded schedule typically begins at 2.5 mg (an introductory dose, not a treatment dose), increases to 5 mg after about four weeks, then continues up roughly monthly as tolerated through 7.5, 10 and 12.5 mg to a maximum of 15 mg. Many people do well below the maximum. Your clinician sets and adjusts the schedule — never rush it yourself.",
  },
  {
    q: "Who should not take tirzepatide?",
    a: "It isn't for people seeking to lose just a few pounds, anyone pregnant, planning pregnancy or breastfeeding, or those with a personal or family history of medullary thyroid cancer or MEN 2 (it carries a boxed warning and is contraindicated there). A history of pancreatitis and certain other conditions also require careful clinician judgment. A prescriber screens for these before prescribing — which is exactly why a legitimate medical review matters.",
  },
  {
    q: "How fast does tirzepatide work?",
    a: "Appetite often drops within the first weeks, even on the starting dose, but meaningful weight loss builds gradually over months as the dose increases — the big trial results came over about 72 weeks. Expect a steady downward trend with normal week-to-week fluctuations and possible plateaus, not a straight line. Judge progress over months, not days.",
  },
  {
    q: "Is Mounjaro approved for weight loss?",
    a: "Mounjaro is FDA-approved for type 2 diabetes, not weight loss, though people taking it for diabetes often lose significant weight because it's the same molecule as Zepbound. For weight loss specifically, the FDA-approved branded version is Zepbound; compounded tirzepatide is the common lower-cost route. If you don't have diabetes, the weight-loss path is Zepbound or compounded, not Mounjaro.",
  },
  {
    q: "Where do you inject tirzepatide, and does it hurt?",
    a: "It's a once-weekly subcutaneous injection (just under the skin), usually in the abdomen, front of the thigh, or back of the upper arm, rotating the site each week. The needle is short and fine, and most people find it quick and nearly painless — the anticipation is almost always worse than the reality. Branded Zepbound and Mounjaro come as easy-to-use pens; many compounded versions use a vial and small syringe. Pick a consistent day each week and store it as directed.",
  },
  {
    q: "What should you eat on tirzepatide?",
    a: "Because you'll eat less, make it count: prioritize protein at every meal (a common target is roughly 1.2–1.6 g/kg of body weight, confirmed with a clinician) to protect muscle, plus plenty of fiber and vegetables, and drink more water than usual since the drug can suppress thirst. Go easy on greasy, fried and very sugary foods and large rich meals, which worsen nausea, and be cautious with alcohol. Adding resistance training twice a week helps you lose fat rather than muscle.",
  },
  {
    q: "Can you drink alcohol on tirzepatide?",
    a: "There's no absolute ban, but many people find their alcohol tolerance drops on tirzepatide, and alcohol adds empty calories and can worsen nausea and digestive side effects. If you do drink, go slow and see how you respond, and raise any concerns with your clinician — especially if you take other medications or have liver or blood-sugar issues.",
  },
  {
    q: "Is there an oral (pill) version of tirzepatide?",
    a: "Not as an approved weight-loss product yet — tirzepatide is currently a once-weekly injection. Oral GLP-1 options are expanding quickly (we cover them in our GLP-1 pills guide), and an oral form of tirzepatide is in development, but for now the effective, available tirzepatide is the injection. If needles are your main barrier, it's worth knowing the pens are designed to be simple and nearly painless.",
  },
  {
    q: "How long do you have to stay on tirzepatide?",
    a: "There's no fixed course — it's treatment for a chronic condition, so the realistic framing is long-term, often at a lower maintenance dose once you reach your goal. The trials show that stopping leads to regaining most of the weight, so most people stay on some form of treatment to hold their results. You can stop, but it should be planned with your clinician and a maintenance strategy, not an abrupt quit. See our guide on stopping a GLP-1 for the details.",
  },
  {
    q: "Is tirzepatide safe to take long-term?",
    a: "The track record is reassuring and still growing. Tirzepatide has been studied in large trials, and its drug class has been used for over a decade (much of it in diabetes), with well-characterized, mostly manageable side effects and uncommon serious risks that a clinician screens and monitors for. What we don't yet have is multi-decade data for weight-loss use specifically, since that's relatively new. The sensible approach is informed, monitored, long-term use with a clinician — weighing the drug's known risks against the real risks of untreated obesity, which are themselves significant.",
  },
];

export const TIRZ_HOWTO = {
  name: "How to start tirzepatide for weight loss, safely",
  steps: [
    {
      name: "Confirm you're a candidate",
      text: "Check your BMI and the clinical criteria (generally BMI 30+, or 27+ with a weight-related condition) with a tool and then a clinician, who makes the actual decision.",
    },
    {
      name: "Choose a legitimate route",
      text: "Pick a reputable telehealth program (usually compounded, lowest cost), your own doctor plus a pharmacy for branded Zepbound/Mounjaro, or Lilly's self-pay vials — all requiring a real prescription. Never use unregulated 'research' sellers.",
    },
    {
      name: "Complete a real medical review",
      text: "Do the intake honestly so a licensed clinician can screen for contraindications and prescribe appropriately. A service that skips this is a red flag.",
    },
    {
      name: "Start low and titrate slowly",
      text: "Begin at the low introductory dose and increase only as your clinician directs — slow titration is the biggest lever on side effects. Don't rush to a higher dose.",
    },
    {
      name: "Support the drug",
      text: "Prioritize protein, add resistance training to protect muscle, eat smaller meals to ease nausea, and stay hydrated. Judge progress over months.",
    },
    {
      name: "Plan maintenance from the start",
      text: "Because stopping leads to regain, choose a provider and price you can sustain, and plan for ongoing treatment (often a maintenance dose) with your clinician rather than a short course.",
    },
  ],
};

export const TIRZ_SOURCE_KEYS = [
  "surmount-1",
  "surmount-5",
  "surmount-4",
  "surmount-4-posthoc",
  "step-1",
  "lilly-direct-pricing",
  "gallup-glp1-2026",
  "niddk-obesity-meds",
];
