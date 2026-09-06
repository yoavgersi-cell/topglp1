// ─────────────────────────────────────────────────────────────────────────────
// Medication-vs-medication comparisons (e.g. Ozempic vs Wegovy).
//
// These target the highest-volume GLP-1 searches. Same decision-first method as
// our provider battles, but the substance is clinical: drug class, brands,
// average weight loss, dosing, approval status and the trials behind them —
// every clinical claim cited to NEJM or the FDA via `sources`.
// ─────────────────────────────────────────────────────────────────────────────

export interface MedSpecRow {
  label: string;
  a: string;
  b: string;
}

export interface MedFaq {
  q: string;
  a: string;
}

export interface MedComparison {
  slug: string;
  title: string;
  description: string;
  intro: string;
  /** Display names. */
  aName: string;
  bName: string;
  /** Optional link target (medication slug) for each side. */
  aMedSlug?: string;
  bMedSlug?: string;
  /** "a" | "b" — our recommended pick, with a nuance. */
  winner: "a" | "b" | "depends";
  winnerReason: string;
  chooseA: string;
  chooseB: string;
  specRows: MedSpecRow[];
  efficacy: string[];
  safety: string;
  cost: string;
  faqs: MedFaq[];
  /** Source keys from data/sources.ts. */
  sources: string[];
}

export const MED_COMPARISONS: MedComparison[] = [
  {
    slug: "semaglutide-vs-tirzepatide",
    title: "Semaglutide vs Tirzepatide",
    description:
      "The two leading GLP-1 medications compared — average weight loss, how they work, dosing, side effects and cost, with the trial data behind each.",
    intro:
      "This is the central question in GLP-1 treatment. Semaglutide (Wegovy/Ozempic) targets one gut-hormone receptor; tirzepatide (Zepbound/Mounjaro) targets two. In head-to-head data, tirzepatide produces more weight loss on average — but semaglutide has the longer track record and landmark cardiovascular-outcome evidence. Here's how to choose.",
    aName: "Semaglutide",
    bName: "Tirzepatide",
    aMedSlug: "semaglutide",
    bMedSlug: "tirzepatide",
    winner: "b",
    winnerReason:
      "For maximum average weight loss, tirzepatide is the stronger choice — a head-to-head trial (SURMOUNT-5) confirmed it beats semaglutide. Choose semaglutide if you value the longer track record and proven cardiovascular benefit.",
    chooseA: "you want the longest track record and proven cardiovascular-event reduction (SELECT).",
    chooseB: "you want the highest average weight loss and didn't reach your goal on semaglutide.",
    specRows: [
      { label: "Drug class", a: "GLP-1 receptor agonist", b: "Dual GIP/GLP-1 receptor agonist" },
      { label: "Brand names", a: "Wegovy, Ozempic, Rybelsus", b: "Zepbound, Mounjaro" },
      { label: "Route", a: "Weekly injection (or daily oral)", b: "Weekly injection" },
      { label: "Avg. weight loss", a: "~15% (STEP 1, 68 wks)", b: "~15–21% (SURMOUNT-1, 72 wks)" },
      { label: "Head-to-head", a: "Less weight loss in SURMOUNT-5", b: "Superior weight loss in SURMOUNT-5" },
      { label: "Cardiovascular data", a: "20% MACE reduction (SELECT)", b: "Strong metabolic data; CV outcomes maturing" },
      { label: "Approval", a: "FDA-approved", b: "FDA-approved" },
    ],
    efficacy: [
      "In their pivotal trials, semaglutide 2.4 mg produced about 15% average weight loss over 68 weeks (STEP 1), while tirzepatide reached roughly 15%, 19% and up to ~21% across its 5, 10 and 15 mg doses over 72 weeks (SURMOUNT-1). A direct head-to-head trial, SURMOUNT-5, found tirzepatide produced greater average weight loss than semaglutide.",
      "So on the single question of 'which takes off more weight on average,' tirzepatide wins. But semaglutide's SELECT trial showed a 20% reduction in major cardiovascular events in adults with obesity and existing heart disease — the kind of hard-outcome evidence tirzepatide is still accumulating. If cardiovascular protection is your priority, that tilts things back toward semaglutide.",
    ],
    safety:
      "Side-effect profiles are very similar — mostly gastrointestinal (nausea, constipation, diarrhea), worst during dose escalation, plus the same class warnings (pancreatitis, gallbladder, thyroid C-cell boxed warning). Neither is safe with a personal/family history of medullary thyroid carcinoma or MEN 2.",
    cost:
      "Branded, both list around $1,000+/month cash. Compounded versions are far cheaper — our top pick Embody offers compounded semaglutide at $69/mo and tirzepatide at $119/mo, flat.",
    faqs: [
      {
        q: "Is tirzepatide better than semaglutide?",
        a: "For average weight loss, head-to-head data (SURMOUNT-5) favor tirzepatide. But semaglutide has longer real-world use and proven cardiovascular-event reduction. 'Better' depends on your goal, tolerability and cost.",
      },
      {
        q: "Can I switch from semaglutide to tirzepatide?",
        a: "Many people do, often to push past a plateau. It's a clinical decision — a prescriber will restart dose escalation on the new drug rather than matching your old dose.",
      },
    ],
    sources: ["step-1", "surmount-1", "surmount-5", "select"],
  },
  {
    slug: "ozempic-vs-wegovy",
    title: "Ozempic vs Wegovy",
    description:
      "Ozempic and Wegovy are the same drug — semaglutide. Here's what actually differs: approved use, maximum dose, and which to ask for.",
    intro:
      "One of the most-searched GLP-1 questions, with a surprising answer: Ozempic and Wegovy are the same molecule, semaglutide, from the same manufacturer. What differs is what they're approved for and how high they're dosed — which determines which one you should be prescribed.",
    aName: "Ozempic",
    bName: "Wegovy",
    aMedSlug: "semaglutide",
    bMedSlug: "semaglutide",
    winner: "b",
    winnerReason:
      "For weight loss specifically, Wegovy is the right product — it's FDA-approved for weight management and dosed higher (up to 2.4 mg). Ozempic is the same drug approved for type 2 diabetes.",
    chooseA: "you have type 2 diabetes — Ozempic is the approved and commonly covered option.",
    chooseB: "your goal is weight loss — Wegovy is the approved, higher-dose product for that.",
    specRows: [
      { label: "Active molecule", a: "Semaglutide", b: "Semaglutide" },
      { label: "FDA-approved for", a: "Type 2 diabetes", b: "Chronic weight management" },
      { label: "Max dose", a: "2.0 mg weekly", b: "2.4 mg weekly" },
      { label: "Route", a: "Weekly injection", b: "Weekly injection" },
      { label: "Avg. weight loss", a: "Meaningful, but dosed for glucose", b: "~15% (STEP 1)" },
      { label: "Insurance coverage", a: "Often covered (diabetes)", b: "Often excluded (weight loss)" },
    ],
    efficacy: [
      "Because they're the same molecule, the biology is identical. The practical differences are dose and indication: Wegovy goes up to 2.4 mg and is studied and approved specifically for weight management (about 15% average loss in STEP 1), while Ozempic tops out at 2.0 mg and is approved for type 2 diabetes.",
      "This is why people are sometimes prescribed Ozempic 'off-label' for weight loss — but Wegovy is the on-label, higher-dose product for that goal, and using the right one can matter for both results and insurance.",
    ],
    safety:
      "Identical safety profile — they're the same drug: GI side effects during escalation, and the same pancreatitis, gallbladder and thyroid C-cell warnings.",
    cost:
      "Both are branded and expensive without insurance (~$1,000+/mo). Coverage is more common for Ozempic (diabetes) than Wegovy (weight loss). Compounded semaglutide is the low-cost alternative to either.",
    faqs: [
      {
        q: "Are Ozempic and Wegovy the same thing?",
        a: "Chemically, yes — both are semaglutide. They differ in approved use (diabetes vs weight loss) and maximum dose (2.0 vs 2.4 mg).",
      },
      {
        q: "Which is better for weight loss?",
        a: "Wegovy — it's approved for weight management and dosed higher. Ozempic is the same drug approved for diabetes.",
      },
    ],
    sources: ["step-1", "select"],
  },
  {
    slug: "zepbound-vs-wegovy",
    title: "Zepbound vs Wegovy",
    description:
      "The two FDA-approved weight-loss injections head to head — Zepbound (tirzepatide) vs Wegovy (semaglutide): average results, dosing and cost.",
    intro:
      "If you're choosing between the two branded weight-loss shots, this is the matchup. Zepbound is tirzepatide (dual GIP/GLP-1); Wegovy is semaglutide (GLP-1). Both are FDA-approved specifically for weight management — and a head-to-head trial gives Zepbound the edge on average weight loss.",
    aName: "Zepbound",
    bName: "Wegovy",
    aMedSlug: "tirzepatide",
    bMedSlug: "semaglutide",
    winner: "a",
    winnerReason:
      "For average weight loss, Zepbound (tirzepatide) is the stronger pick — SURMOUNT-5 showed it outperforming semaglutide. Wegovy remains excellent and has longer cardiovascular-outcome evidence.",
    chooseA: "you want the highest average weight loss of the two approved brands.",
    chooseB: "you value the longer track record and proven cardiovascular-event reduction.",
    specRows: [
      { label: "Molecule", a: "Tirzepatide (GIP/GLP-1)", b: "Semaglutide (GLP-1)" },
      { label: "Approved for", a: "Chronic weight management", b: "Chronic weight management" },
      { label: "Avg. weight loss", a: "~15–21% (SURMOUNT-1)", b: "~15% (STEP 1)" },
      { label: "Head-to-head", a: "Superior in SURMOUNT-5", b: "Less than tirzepatide in SURMOUNT-5" },
      { label: "Dosing", a: "Weekly, 2.5 → 15 mg", b: "Weekly, 0.25 → 2.4 mg" },
      { label: "Cardiovascular data", a: "Maturing", b: "20% MACE reduction (SELECT)" },
    ],
    efficacy: [
      "Both are approved specifically for weight loss, so this is a cleaner comparison than Ozempic vs Wegovy. In SURMOUNT-1, tirzepatide reached up to ~21% average weight loss; in STEP 1, semaglutide reached ~15%. The head-to-head SURMOUNT-5 trial confirmed tirzepatide's average advantage.",
      "That said, 'more on average' isn't 'better for everyone.' Semaglutide's SELECT cardiovascular-outcomes data is a real point in its favor, and plenty of people reach their goal on Wegovy with good tolerability.",
    ],
    safety:
      "Similar GI-dominant side effects and identical class warnings (pancreatitis, gallbladder, thyroid C-cell). Rapid weight loss on either raises gallbladder-symptom risk.",
    cost:
      "Both list around $1,000–$1,350/mo cash; manufacturer savings and single-dose vials can help. Compounded tirzepatide ($119/mo at Embody) and semaglutide ($69/mo) are the low-cost routes to the same molecules.",
    faqs: [
      {
        q: "Is Zepbound more effective than Wegovy?",
        a: "On average, yes — head-to-head SURMOUNT-5 data favor Zepbound (tirzepatide) for weight loss. Individual results vary, and Wegovy has stronger cardiovascular-outcome evidence.",
      },
      {
        q: "Do they have the same side effects?",
        a: "Broadly yes — mostly gastrointestinal, worst during dose escalation, with the same class warnings.",
      },
    ],
    sources: ["surmount-1", "step-1", "surmount-5", "select"],
  },
  {
    slug: "mounjaro-vs-ozempic",
    title: "Mounjaro vs Ozempic",
    description:
      "The two leading diabetes GLP-1 injections compared — Mounjaro (tirzepatide) vs Ozempic (semaglutide): blood-sugar control, weight loss and dosing.",
    intro:
      "For type 2 diabetes, Mounjaro (tirzepatide) and Ozempic (semaglutide) are the headline options. Both lower blood sugar and drive weight loss; tirzepatide's dual mechanism tends to produce more of both, but semaglutide has deep outcome data.",
    aName: "Mounjaro",
    bName: "Ozempic",
    aMedSlug: "tirzepatide",
    bMedSlug: "semaglutide",
    winner: "a",
    winnerReason:
      "For A1C reduction and weight loss combined, Mounjaro (tirzepatide) tends to edge Ozempic — but both are excellent, and Ozempic has the longer cardiovascular-outcomes record.",
    chooseA: "you want maximum combined A1C and weight reduction.",
    chooseB: "you want the longest track record and established cardiovascular-outcome data.",
    specRows: [
      { label: "Molecule", a: "Tirzepatide (GIP/GLP-1)", b: "Semaglutide (GLP-1)" },
      { label: "Approved for", a: "Type 2 diabetes", b: "Type 2 diabetes" },
      { label: "Weight loss (secondary)", a: "Higher on average", b: "Strong" },
      { label: "Dosing", a: "Weekly, 2.5 → 15 mg", b: "Weekly, up to 2.0 mg" },
      { label: "Cardiovascular data", a: "Maturing", b: "Established (SELECT in obesity)" },
      { label: "Weight-loss sibling", a: "Zepbound", b: "Wegovy" },
    ],
    efficacy: [
      "In diabetes trials, tirzepatide has generally delivered strong A1C reductions plus more weight loss than semaglutide, reflecting its dual GIP/GLP-1 action. Semaglutide remains highly effective and is backed by extensive outcome data.",
      "For many patients the choice comes down to coverage, tolerability and whether maximum weight loss (favoring Mounjaro) or the longest track record (favoring Ozempic) matters more.",
    ],
    safety:
      "Comparable GI side effects and the same class warnings. In diabetes, watch for low blood sugar when combined with insulin or sulfonylureas.",
    cost:
      "Both are branded diabetes drugs, often covered by insurance for type 2 diabetes; cash prices are high. Compounded tirzepatide/semaglutide are cheaper but are used for weight loss, not as diabetes substitutes without clinician guidance.",
    faqs: [
      {
        q: "Which lowers blood sugar more, Mounjaro or Ozempic?",
        a: "Head-to-head diabetes data generally favor tirzepatide (Mounjaro) for A1C reduction and weight loss, though both are very effective.",
      },
    ],
    sources: ["surmount-1", "step-1", "select"],
  },
  {
    slug: "semaglutide-vs-liraglutide",
    title: "Semaglutide vs Liraglutide",
    description:
      "The weekly modern GLP-1 vs the original daily one — semaglutide (Wegovy) vs liraglutide (Saxenda): results, convenience and cost.",
    intro:
      "Liraglutide (Saxenda) was the first GLP-1 widely used for weight loss; semaglutide (Wegovy) is the newer, weekly successor. Semaglutide generally wins on both weight loss and convenience — but liraglutide, now available as a generic, still has a role.",
    aName: "Semaglutide",
    bName: "Liraglutide",
    aMedSlug: "semaglutide",
    bMedSlug: "liraglutide",
    winner: "a",
    winnerReason:
      "Semaglutide wins for most people — more average weight loss and a once-weekly injection instead of daily. Liraglutide's edge is cost (generic) and availability.",
    chooseA: "you want more weight loss and the convenience of a weekly shot.",
    chooseB: "you want a lower-cost generic option or can't access weekly agents.",
    specRows: [
      { label: "Molecule", a: "Semaglutide", b: "Liraglutide" },
      { label: "Dosing frequency", a: "Once weekly", b: "Once daily" },
      { label: "Avg. weight loss", a: "~15% (STEP 1)", b: "~8% (SCALE)" },
      { label: "Brand names", a: "Wegovy, Ozempic", b: "Saxenda, Victoza" },
      { label: "Generic available", a: "No", b: "Yes (in some markets)" },
      { label: "Approval", a: "FDA-approved", b: "FDA-approved" },
    ],
    efficacy: [
      "In trials, semaglutide 2.4 mg produced about 15% average weight loss (STEP 1) versus roughly 8% for liraglutide 3.0 mg (SCALE). Semaglutide is also once-weekly rather than a daily injection, which most people prefer.",
      "Liraglutide's advantages are practical: it's older, well understood, and increasingly available as a lower-cost generic, making it a reasonable option when weekly agents are unavailable or unaffordable.",
    ],
    safety:
      "Similar GI side effects and the same class warnings. Liraglutide's daily dosing means some people experience side effects more constantly.",
    cost:
      "Branded Saxenda is expensive; generic liraglutide can be cheaper where available. Compounded semaglutide ($69/mo) is often the most affordable effective route overall.",
    faqs: [
      {
        q: "Is semaglutide better than liraglutide?",
        a: "For weight loss, yes on average — more loss (~15% vs ~8%) and weekly instead of daily dosing. Liraglutide's edge is cost as a generic.",
      },
    ],
    sources: ["step-1", "scale-obesity"],
  },
  {
    slug: "tirzepatide-vs-retatrutide",
    title: "Tirzepatide vs Retatrutide",
    description:
      "The most effective approved GLP-1 vs the experimental triple-agonist — what the data show, and why only one is actually available.",
    intro:
      "This matchup is really 'now vs later.' Tirzepatide is the most effective FDA-approved GLP-1-class drug you can get today. Retatrutide is an investigational triple agonist with the highest weight loss seen in trials — but it is not approved and not legally available. For anyone choosing treatment now, that decides it.",
    aName: "Tirzepatide",
    bName: "Retatrutide",
    aMedSlug: "tirzepatide",
    bMedSlug: "retatrutide",
    winner: "a",
    winnerReason:
      "Tirzepatide wins by default for anyone seeking treatment today — retatrutide is investigational and cannot be legally or safely obtained. Watch retatrutide's phase-3 results for the future.",
    chooseA: "you want effective, FDA-approved treatment you can actually start now.",
    chooseB: "you're tracking the research — but it isn't an option to use yet.",
    specRows: [
      { label: "Mechanism", a: "Dual GIP/GLP-1", b: "Triple GIP/GLP-1/glucagon" },
      { label: "Avg. weight loss", a: "~15–21% (SURMOUNT-1)", b: "~24% at 48 wks (phase 2)" },
      { label: "Approval status", a: "FDA-approved", b: "Investigational (not approved)" },
      { label: "Availability", a: "Available now", b: "Clinical trials only" },
      { label: "Route", a: "Weekly injection", b: "Weekly injection (in trials)" },
    ],
    efficacy: [
      "On the numbers, retatrutide's phase-2 trial reported the highest average weight loss of any drug in this class — around 24% at 48 weeks at the top dose — edging tirzepatide's ~21%. Its added glucagon activity is thought to raise energy expenditure on top of appetite suppression.",
      "But early phase-2 data are not a finished safety and efficacy picture, and retatrutide has not completed phase-3 or been approved. It cannot be legally prescribed or compounded — anything sold online as 'retatrutide' is unregulated and dangerous. Tirzepatide is the effective option you can actually and safely use today.",
    ],
    safety:
      "Tirzepatide's safety profile is established (GI side effects, class warnings). Retatrutide's full safety profile is still under study — one of the main reasons approval takes years.",
    cost:
      "Tirzepatide is available branded (~$1,000+/mo) or compounded ($119/mo at Embody). Retatrutide has no legal market and no legitimate price.",
    faqs: [
      {
        q: "Can I get retatrutide now?",
        a: "No. It's investigational and not FDA-approved. Any site selling it for personal use is operating outside the law and quality controls. The only legitimate access is an enrolled clinical trial.",
      },
      {
        q: "Is retatrutide better than tirzepatide?",
        a: "Early data show more average weight loss, but it's unproven at phase 3 and unavailable. For real-world treatment today, tirzepatide is the effective, approved choice.",
      },
    ],
    sources: ["surmount-1", "retatrutide-p2"],
  },
];

export function getMedComparison(slug: string): MedComparison | undefined {
  return MED_COMPARISONS.find((m) => m.slug === slug);
}

export const MED_COMPARISON_SLUGS = MED_COMPARISONS.map((m) => m.slug);
