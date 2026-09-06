// ─────────────────────────────────────────────────────────────────────────────
// Long-form educational guides — TopGLP1's pillar content.
//
// Each guide is an independent, plain-language explainer on one GLP-1 topic.
// Sections are rendered in order. Body strings are plain paragraphs; a "list"
// section renders bullet items. This content is authored for TopGLP1 and is
// educational, not medical advice.
// ─────────────────────────────────────────────────────────────────────────────

export interface GuideSection {
  heading: string;
  /** Paragraphs of body copy. */
  body?: string[];
  /** Optional bullet list rendered after the body. */
  list?: string[];
}

export interface Guide {
  slug: string;
  title: string;
  /** SEO/meta description and card subtitle. */
  description: string;
  /** Short label for the category chip. */
  category: string;
  readTime: string;
  keyTakeaways: string[];
  sections: GuideSection[];
  /** Related guide slugs and medication slugs for internal linking. */
  relatedGuides?: string[];
  relatedMeds?: string[];
}

export const GUIDES: Guide[] = [
  {
    slug: "how-glp1-medications-work",
    title: "How GLP-1 Medications Actually Work",
    description:
      "A clear, jargon-free explanation of what GLP-1 is, how drugs like semaglutide and tirzepatide use it, and why they curb appetite so effectively.",
    category: "Basics",
    readTime: "7 min read",
    keyTakeaways: [
      "GLP-1 is a natural gut hormone released when you eat.",
      "The medications are long-acting mimics of that hormone.",
      "They work on three fronts: slower stomach emptying, less appetite, better insulin response.",
      "Newer drugs add a second (GIP) or third (glucagon) receptor for more effect.",
    ],
    sections: [
      {
        heading: "The hormone behind the hype",
        body: [
          "GLP-1 stands for glucagon-like peptide-1. It's a hormone your intestines release within minutes of eating. Its job is to tell your body, in several ways at once, that food has arrived: release insulin, slow digestion, and signal fullness to the brain.",
          "The catch is that natural GLP-1 breaks down almost immediately — within a couple of minutes. GLP-1 medications are engineered versions of the same hormone that resist that breakdown, so a once-weekly injection keeps the “I've eaten” signal switched on for days.",
        ],
      },
      {
        heading: "Three things the drugs do",
        body: [
          "Understanding the mechanism makes the side effects and the results make sense.",
        ],
        list: [
          "Slower stomach emptying: food leaves your stomach more gradually, so you feel full sooner and for longer. This is also why nausea is the most common side effect.",
          "Reduced appetite: GLP-1 acts on appetite centers in the brain, dialing down hunger and the constant “food noise” many people describe. Portions shrink naturally rather than through willpower.",
          "Smarter insulin release: the drugs prompt insulin only when blood sugar is high, which is why the same molecules treat type 2 diabetes without causing frequent low blood sugar on their own.",
        ],
      },
      {
        heading: "Why the newer drugs lose more weight",
        body: [
          "Semaglutide targets one receptor: GLP-1. Tirzepatide adds a second, GIP, which appears to amplify the appetite and metabolic effects — and in trials it produces more weight loss on average. The investigational drug retatrutide adds a third target, glucagon, which is thought to increase the body's energy expenditure on top of appetite suppression.",
          "More targets generally means more effect, but also underscores that these are powerful metabolic drugs, not simple appetite pills. That's why they're prescription-only and dosed carefully.",
        ],
      },
      {
        heading: "What it feels like day to day",
        body: [
          "Most people don't feel a dramatic “kick.” Instead they notice they're satisfied with less food, think about snacking far less, and lose interest in second helpings. Cravings for high-fat, high-sugar foods often fade. Because the effect is on appetite rather than energy, there's no stimulant buzz.",
          "The flip side: if you barely feel hungry, it's easy to under-eat protein or skip meals, which can cost you muscle. That's why nutrition and resistance exercise matter throughout treatment.",
        ],
      },
    ],
    relatedGuides: ["glp1-side-effects-and-how-to-manage-them", "glp1-dosing-schedule-explained"],
    relatedMeds: ["semaglutide", "tirzepatide", "retatrutide"],
  },
  {
    slug: "glp1-dosing-schedule-explained",
    title: "GLP-1 Dosing Schedules Explained",
    description:
      "Why GLP-1 doses start low and step up slowly, what the typical semaglutide and tirzepatide schedules look like, and how to handle a rough week.",
    category: "Treatment",
    readTime: "6 min read",
    keyTakeaways: [
      "Every GLP-1 starts low and increases every 4 weeks to limit nausea.",
      "The starter dose isn't meant to cause much weight loss — it's for tolerance.",
      "You don't always need the maximum dose to get results.",
      "Slowing down escalation is a normal, safe response to side effects.",
    ],
    sections: [
      {
        heading: "Why the slow ramp-up",
        body: [
          "Every GLP-1 medication is dose-escalated: you start at a low dose and increase it in steps, usually every four weeks. This isn't bureaucracy — it's the single most important thing that determines whether your first two months are tolerable.",
          "Starting at a full dose overwhelms the gut and causes severe nausea and vomiting. The gradual schedule lets your digestive system adapt to slower emptying before the appetite effect is turned up.",
        ],
      },
      {
        heading: "The typical semaglutide (Wegovy) schedule",
        list: [
          "Weeks 1–4: 0.25 mg weekly (starter — tolerance, not weight loss)",
          "Weeks 5–8: 0.5 mg weekly",
          "Weeks 9–12: 1.0 mg weekly",
          "Weeks 13–16: 1.7 mg weekly",
          "Week 17 onward: 2.4 mg weekly (maintenance)",
        ],
      },
      {
        heading: "The typical tirzepatide (Zepbound) schedule",
        list: [
          "Weeks 1–4: 2.5 mg weekly (starter)",
          "Weeks 5–8: 5 mg weekly (first therapeutic dose)",
          "Weeks 9–12: 7.5 mg weekly",
          "Weeks 13–16: 10 mg weekly",
          "Then, if needed: 12.5 mg → 15 mg weekly",
        ],
      },
      {
        heading: "You may not need the top dose",
        body: [
          "The maximum dose is a ceiling, not a target. Plenty of people reach their goal weight and feel great at an intermediate dose — 1.0 mg semaglutide or 5–10 mg tirzepatide — and never go higher. The right dose is the lowest one that keeps you progressing with manageable side effects.",
        ],
      },
      {
        heading: "When a week is rough",
        body: [
          "If a dose increase brings side effects you can't live with, the standard move is to hold at your current dose for another few weeks rather than push up, or to step back down. This is normal and safe, and a good clinician expects it. What you should not do is double up after a missed dose or accelerate the schedule to “catch up.”",
          "Compounded products can differ in concentration between pharmacies, so dose by the milligrams your prescriber specifies, not by lines on the syringe.",
        ],
      },
    ],
    relatedGuides: ["glp1-side-effects-and-how-to-manage-them", "how-glp1-medications-work"],
    relatedMeds: ["semaglutide", "tirzepatide"],
  },
  {
    slug: "glp1-side-effects-and-how-to-manage-them",
    title: "GLP-1 Side Effects and How to Manage Them",
    description:
      "The common and serious side effects of GLP-1 medications, why they happen, practical ways to reduce them, and the warning signs that mean call a doctor.",
    category: "Safety",
    readTime: "8 min read",
    keyTakeaways: [
      "Nausea is the most common effect and usually fades as your body adapts.",
      "Smaller, lower-fat meals and hydration prevent most GI misery.",
      "Serious risks are rare but real: pancreatitis, gallbladder issues, dehydration.",
      "A personal/family history of medullary thyroid cancer or MEN 2 is a hard stop.",
    ],
    sections: [
      {
        heading: "The common ones (and why)",
        body: [
          "Most GLP-1 side effects are gastrointestinal and stem directly from the drug slowing your stomach. They're usually worst in the first week of a new dose and improve as you adapt.",
        ],
        list: [
          "Nausea — the most common; typically peaks early and after each dose increase",
          "Constipation — very common; fiber and fluids help",
          "Diarrhea — less common but happens",
          "Vomiting, burping, reflux",
          "Fatigue, especially while eating much less during escalation",
        ],
      },
      {
        heading: "Practical ways to feel better",
        list: [
          "Eat smaller meals and stop the moment you feel full — pushing past fullness is the fastest route to nausea.",
          "Go easy on greasy, fried and very rich foods, which sit heavily in a slow-emptying stomach.",
          "Stay hydrated; vomiting and diarrhea can dehydrate you quickly.",
          "Prioritize protein so appetite loss doesn't cost you muscle.",
          "For constipation: fluids, fiber, movement, and a clinician-approved stool softener if needed.",
        ],
      },
      {
        heading: "The serious risks to know",
        body: [
          "These are uncommon, but you should recognize them.",
        ],
        list: [
          "Pancreatitis: severe, persistent abdominal pain, sometimes radiating to the back, with vomiting — stop the drug and seek care.",
          "Gallbladder problems: rapid weight loss raises gallstone risk; watch for right-upper-abdomen pain, especially after fatty meals.",
          "Dehydration and kidney strain from prolonged vomiting or diarrhea.",
          "Thyroid C-cell tumors were seen in rodent studies, prompting a boxed warning; the human relevance is unclear, but a personal or family history of medullary thyroid carcinoma or MEN 2 is a contraindication.",
        ],
      },
      {
        heading: "When to call a doctor",
        body: [
          "Get medical attention for severe or persistent abdominal pain, ongoing vomiting that prevents you from keeping fluids down, signs of an allergic reaction, a lump or swelling in the neck, or vision changes. Routine early nausea usually doesn't require a call — but anything severe, persistent, or frightening does.",
        ],
      },
      {
        heading: "\"Ozempic face\" and muscle loss",
        body: [
          "Rapid weight loss from any cause can leave facial skin looking deflated — the “Ozempic face” headlines. It's really just fast fat loss, not a unique drug effect. More important medically is muscle loss: because you're eating far less, you can shed lean mass along with fat. Adequate protein and resistance training are the antidote and are worth taking seriously from week one.",
        ],
      },
    ],
    relatedGuides: ["what-to-eat-on-glp1-medications", "glp1-dosing-schedule-explained"],
    relatedMeds: ["semaglutide", "tirzepatide", "compounded-glp1"],
  },
  {
    slug: "glp1-cost-and-insurance",
    title: "GLP-1 Cost and Insurance: What You'll Actually Pay",
    description:
      "Branded list prices, why compounded GLP-1 is so much cheaper, how insurance coverage really works for obesity vs diabetes, and ways to lower the bill.",
    category: "Cost",
    readTime: "7 min read",
    keyTakeaways: [
      "Branded GLP-1 lists around $1,000–$1,350/month without insurance.",
      "Compounded versions run roughly $100–$300/month cash.",
      "Insurance often covers GLP-1 for diabetes but excludes it for obesity.",
      "Manufacturer savings cards and cash-price vials can cut branded costs.",
    ],
    sections: [
      {
        heading: "The three ways to pay",
        body: [
          "GLP-1 pricing confuses people because there are really three separate markets: branded drugs through insurance, branded drugs paid in cash, and compounded drugs through telehealth. What you pay depends entirely on which lane you're in.",
        ],
      },
      {
        heading: "Branded, list price",
        body: [
          "Without any discount, Wegovy and Zepbound list in the ballpark of $1,000–$1,350 a month. Almost nobody should pay full list — manufacturers offer cash programs and savings cards, and lower-priced single-dose vials have appeared for some strengths — but the sticker explains why cost is the number-one reason people look for alternatives.",
        ],
      },
      {
        heading: "Compounded, cash",
        body: [
          "Compounded semaglutide and tirzepatide through telehealth typically run $100–$300 a month, sometimes less for semaglutide. This is the same active molecule prepared by a compounding pharmacy rather than the branded finished product. It's the reason the telehealth GLP-1 boom exists — but the trade-off is that compounded products aren't individually FDA-reviewed, so the pharmacy's legitimacy matters, and availability shifts with FDA shortage rules.",
        ],
      },
      {
        heading: "How insurance really behaves",
        body: [
          "The single most important quirk: many plans cover GLP-1 drugs for type 2 diabetes (Ozempic, Mounjaro) but specifically exclude them for weight loss (Wegovy, Zepbound). Even when obesity coverage exists, prior authorization and step-therapy requirements are common. Check your plan's formulary for the exact brand and indication before assuming anything.",
        ],
      },
      {
        heading: "Ways to lower the bill",
        list: [
          "Manufacturer savings cards for eligible, commercially insured patients",
          "Manufacturer cash/self-pay programs for those without coverage",
          "Lower-cost single-dose vials where offered",
          "Compounded GLP-1 through a vetted, licensed telehealth clinic",
          "HSA/FSA dollars, which usually apply to prescribed treatment",
          "Asking your clinician to document a covered indication if you medically qualify",
        ],
      },
    ],
    relatedGuides: ["how-to-get-glp1-through-telehealth", "compounded-vs-branded-glp1"],
    relatedMeds: ["semaglutide", "tirzepatide", "compounded-glp1"],
  },
  {
    slug: "glp1-results-timeline",
    title: "GLP-1 Results Timeline: What to Expect Month by Month",
    description:
      "A realistic month-by-month picture of GLP-1 weight loss — when appetite changes start, when the scale moves, plateaus, and what maintenance looks like.",
    category: "Results",
    readTime: "6 min read",
    keyTakeaways: [
      "Appetite often drops in week 1–2, before the scale moves much.",
      "Most trial weight loss accrues over the first 6–9 months.",
      "Plateaus are normal and often line up with dose steps.",
      "Stopping usually leads to regain — GLP-1 is a long-term therapy.",
    ],
    sections: [
      {
        heading: "Weeks 1–4: appetite before the scale",
        body: [
          "On the starter dose, the point isn't weight loss — it's tolerance. Still, many people notice reduced hunger and less “food noise” within the first week or two. Early scale movement is often modest and partly water. Side effects, if they come, are usually at their most noticeable here.",
        ],
      },
      {
        heading: "Months 2–4: the steady descent",
        body: [
          "As you step up to therapeutic doses, weight loss typically becomes steadier — often in the range of a few pounds a month, though it varies widely. This is where habits set now (protein, resistance training, sleep) pay off later by protecting muscle and making the loss sustainable.",
        ],
      },
      {
        heading: "Months 5–9: most of the results",
        body: [
          "In the major trials, the bulk of average weight loss accumulated across roughly the first six to nine months before curves began to flatten. For semaglutide that averaged around 15% of body weight; for tirzepatide, up to ~20%+ at higher doses. Your own result depends on dose, consistency, starting point and biology.",
        ],
      },
      {
        heading: "Plateaus are normal",
        body: [
          "Weight loss is rarely linear. Plateaus of a few weeks are expected and often coincide with being between dose steps or with your body reaching a new set point. A genuine, sustained plateau is a reason to talk to your clinician about dose, nutrition or activity — not necessarily a sign the drug has “stopped working.”",
        ],
      },
      {
        heading: "Maintenance and stopping",
        body: [
          "GLP-1 medications treat the biology of appetite, and that biology returns when you stop. Studies consistently show most people regain a large share of lost weight within a year of discontinuation. For that reason these drugs are generally used as long-term therapy, with dose sometimes adjusted for maintenance rather than stopped outright. Any plan to come off should be a deliberate conversation with your prescriber.",
        ],
      },
    ],
    relatedGuides: ["what-to-eat-on-glp1-medications", "how-glp1-medications-work"],
    relatedMeds: ["semaglutide", "tirzepatide"],
  },
  {
    slug: "what-to-eat-on-glp1-medications",
    title: "What to Eat on GLP-1 Medications",
    description:
      "How to eat well when your appetite is suppressed — protein targets, foods that ease nausea, what to limit, and how to protect muscle while losing fat.",
    category: "Nutrition",
    readTime: "7 min read",
    keyTakeaways: [
      "Protein first — it protects muscle and keeps you satisfied.",
      "Small, frequent, lower-fat meals reduce nausea.",
      "Hydration and fiber prevent the two most common GI complaints.",
      "Under-eating is a real risk when hunger nearly disappears.",
    ],
    sections: [
      {
        heading: "The new challenge: eating enough of the right things",
        body: [
          "On most diets the struggle is eating less. On GLP-1 medications the struggle flips: your appetite may drop so much that the risk becomes eating too little, and specifically too little protein. Since you'll eat less overall, the quality of every bite matters more.",
        ],
      },
      {
        heading: "Protein first, every meal",
        body: [
          "Protein preserves muscle during weight loss and is the most filling macronutrient, which works with the drug rather than against it. Aim to build each meal around a protein source and eat it first. Many clinicians suggest a target in the range of 60–100+ grams a day depending on your size and goals — ask your provider for a number that fits you.",
        ],
        list: [
          "Eggs, Greek yogurt, cottage cheese",
          "Chicken, fish, lean beef, tofu, tempeh",
          "Protein shakes when solid food feels like too much",
          "Beans and lentils (also add fiber for regularity)",
        ],
      },
      {
        heading: "Foods that ease a queasy stomach",
        body: [
          "When nausea hits, plain and low-fat wins. Because the drug slows stomach emptying, heavy, greasy meals sit uncomfortably.",
        ],
        list: [
          "Smaller portions eaten slowly, stopping at the first sign of fullness",
          "Bland, lower-fat foods (broths, toast, rice, bananas) on rough days",
          "Ginger or peppermint tea, which some people find settling",
          "Limiting fried, very rich, and heavily sugary foods",
        ],
      },
      {
        heading: "Don't forget fiber and fluids",
        body: [
          "Constipation is one of the most common complaints, and it's usually a fluid-and-fiber problem. Vegetables, fruit, whole grains and legumes, plus plenty of water, prevent most of it. If you're relying on shakes, make sure you're still getting fiber somewhere.",
        ],
      },
      {
        heading: "Alcohol and appetite",
        body: [
          "Many people find their desire for alcohol drops on GLP-1 medications — an effect researchers are actively studying. Beyond that, alcohol is empty calories and can worsen nausea and dehydration, so it's worth going easy while you adjust.",
        ],
      },
    ],
    relatedGuides: ["glp1-results-timeline", "glp1-side-effects-and-how-to-manage-them"],
    relatedMeds: ["semaglutide", "tirzepatide"],
  },
  {
    slug: "how-to-get-glp1-through-telehealth",
    title: "How to Get GLP-1 Through Telehealth (Safely)",
    description:
      "A step-by-step look at how online GLP-1 programs work, how to tell a legitimate clinic from a risky one, and what questions to ask before you pay.",
    category: "Access",
    readTime: "6 min read",
    keyTakeaways: [
      "Legitimate programs require a real prescriber and a medical intake.",
      "Look for state licensure and LegitScript certification.",
      "Avoid anyone selling GLP-1 without a prescription or as \"research\" chemicals.",
      "Clear dosing instructions and a way to reach a clinician are non-negotiable.",
    ],
    sections: [
      {
        heading: "How online GLP-1 programs work",
        body: [
          "The typical flow is: you complete a medical intake questionnaire, sometimes with lab work or a video visit; a licensed clinician reviews your history and, if appropriate, writes a prescription; and a pharmacy ships the medication to your door with dosing instructions. For branded drugs the clinic may also help with insurance; for compounded drugs it's usually cash-pay.",
        ],
      },
      {
        heading: "How to spot a legitimate clinic",
        list: [
          "A real, licensed prescriber reviews your case — not just a checkout page",
          "The pharmacy is state-licensed; LegitScript certification is a strong signal",
          "Transparent pricing, dosing instructions, and a way to reach a clinician with questions",
          "Clear medical screening that can turn you away if GLP-1 isn't safe for you",
        ],
      },
      {
        heading: "Red flags to walk away from",
        list: [
          "Selling GLP-1 with no prescription or medical review",
          "Products labeled \"research use only\" or \"not for human consumption\"",
          "Unlabeled vials, no dosing guidance, or no clinician to contact",
          "Prices that seem too good to be true with no verifiable pharmacy",
        ],
      },
      {
        heading: "Questions worth asking before you pay",
        list: [
          "Is this branded or compounded, and which molecule (semaglutide or tirzepatide)?",
          "What pharmacy fills it, and is it state-licensed?",
          "What exactly does the monthly price include — medication, visits, shipping?",
          "How do I reach a clinician if I have side effects?",
          "What happens to my plan if the medication's shortage status changes?",
        ],
      },
    ],
    relatedGuides: ["glp1-cost-and-insurance", "compounded-vs-branded-glp1"],
    relatedMeds: ["compounded-glp1", "semaglutide", "tirzepatide"],
  },
  {
    slug: "compounded-vs-branded-glp1",
    title: "Compounded vs Branded GLP-1: The Honest Comparison",
    description:
      "The real differences between compounded and branded GLP-1 — price, quality oversight, legality and availability — so you can choose with eyes open.",
    category: "Access",
    readTime: "6 min read",
    keyTakeaways: [
      "Same active molecule; the difference is manufacturing and oversight.",
      "Branded = FDA-approved finished product, higher cost.",
      "Compounded = far cheaper, quality depends on the pharmacy.",
      "Compounding legality narrows as FDA shortages resolve.",
    ],
    sections: [
      {
        heading: "What's actually different",
        body: [
          "The confusion is understandable, so here's the core fact: compounded and branded GLP-1 usually contain the same active molecule (semaglutide or tirzepatide). The difference isn't the drug — it's how it's made and regulated. Branded products are manufactured and FDA-approved as finished drugs. Compounded products are prepared by compounding pharmacies and are not individually FDA-reviewed.",
        ],
      },
      {
        heading: "Price",
        body: [
          "This is compounding's whole appeal. Branded GLP-1 lists around $1,000+/month; compounded versions commonly run $100–$300/month cash. For many people that gap is the difference between starting treatment and not.",
        ],
      },
      {
        heading: "Quality and oversight",
        body: [
          "Branded drugs come off a single, FDA-inspected production line with consistent quality. Compounded drugs vary by pharmacy — a reputable, state-licensed, LegitScript-certified pharmacy is very different from an anonymous website. The medical risks of the molecule are the same either way; the added variable with compounding is trust in the source.",
        ],
      },
      {
        heading: "Legality and availability",
        body: [
          "Compounding is legal in defined situations — most importantly when a drug is on the FDA's official shortage list, and for patient-specific prescriptions. As branded supply catches up and drugs leave the shortage list, the legal basis for mass compounding narrows, and programs may change what they offer, sometimes quickly. Branded availability is more stable but far more expensive.",
        ],
      },
      {
        heading: "So which should you choose?",
        body: [
          "If cost is the barrier and you're comfortable vetting a legitimate telehealth clinic, compounded GLP-1 makes treatment accessible. If you specifically want an FDA-approved finished product, have coverage, or prefer maximum manufacturing consistency, branded is the choice. Neither is “fake” — they're different trade-offs of price, oversight and stability.",
        ],
      },
    ],
    relatedGuides: ["glp1-cost-and-insurance", "how-to-get-glp1-through-telehealth"],
    relatedMeds: ["compounded-glp1", "semaglutide", "tirzepatide"],
  },
];

export function getGuide(slug: string): Guide | undefined {
  return GUIDES.find((g) => g.slug === slug);
}

export const GUIDE_SLUGS = GUIDES.map((g) => g.slug);
