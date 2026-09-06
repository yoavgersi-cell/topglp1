// ─────────────────────────────────────────────────────────────────────────────
// GLP-1 medication reference data — the editorial backbone of TopGLP1.
//
// Every field here is written to be a plain-language, independent explainer of a
// specific medication. Content is authored for TopGLP1 (not adapted from any
// other property) and is intentionally education-first: mechanism, dosing,
// side effects, results and cost come before any provider recommendation.
//
// Medical accuracy note: doses and approvals reflect widely published, general
// information as of 2026 and are summarized for a general audience. This is
// educational content, not medical advice — see the disclaimer page.
// ─────────────────────────────────────────────────────────────────────────────

export type MedStatus = "fda-approved" | "investigational" | "compounded";

export interface DoseStep {
  /** e.g. "Weeks 1–4" or "Maintenance". */
  phase: string;
  /** e.g. "0.25 mg once weekly". */
  dose: string;
  /** Optional short note on the step. */
  note?: string;
}

export interface TrialResult {
  name: string;
  result: string;
}

export interface MedFaq {
  q: string;
  a: string;
}

export interface Medication {
  slug: string;
  /** Generic / common name, e.g. "Semaglutide". */
  name: string;
  /** Drug class descriptor, e.g. "GLP-1 receptor agonist". */
  drugClass: string;
  /** How it's given. */
  route: "Subcutaneous injection" | "Oral tablet" | "Injection or oral";
  status: MedStatus;
  statusLabel: string;
  /** Brand names people search for. */
  brandNames: string[];
  /** One-sentence hook used on cards and hero. */
  oneLiner: string;
  /** 2–3 short paragraphs. */
  summary: string[];
  keyTakeaways: string[];
  howItWorks: string[];
  efficacy: {
    headline: string;
    detail: string;
    trials: TrialResult[];
  };
  dosing: {
    intro: string;
    schedule: DoseStep[];
    notes: string[];
  };
  sideEffects: {
    common: string[];
    serious: string[];
    management: string;
  };
  cost: {
    brandedRange: string;
    compoundedRange?: string;
    insuranceNote: string;
  };
  whoFor: string[];
  whoNotFor: string[];
  faqs: MedFaq[];
  /** Provider ids (see providers.ts) most relevant to this medication. */
  relatedProviders: string[];
  /** Accent hex used on the medication page hero. */
  accent: string;
}

export const MEDICATIONS: Medication[] = [
  {
    slug: "semaglutide",
    name: "Semaglutide",
    drugClass: "GLP-1 receptor agonist",
    route: "Injection or oral",
    status: "fda-approved",
    statusLabel: "FDA-approved",
    brandNames: ["Ozempic", "Wegovy", "Rybelsus"],
    oneLiner:
      "The most widely prescribed GLP-1 — sold as Wegovy for weight loss, Ozempic for type 2 diabetes, and Rybelsus as a daily pill.",
    summary: [
      "Semaglutide is a once-weekly GLP-1 receptor agonist and the medication most people mean when they say “the weight-loss shot.” The same molecule is marketed under three brand names: Wegovy (approved for chronic weight management), Ozempic (approved for type 2 diabetes), and Rybelsus (a daily oral tablet for type 2 diabetes).",
      "In its landmark weight-management trial, adults without diabetes lost on average roughly 15% of their starting body weight over 68 weeks alongside diet and activity changes — a result that moved GLP-1 medications from the diabetes clinic into mainstream obesity care.",
      "Because branded supply has been tight and expensive, semaglutide is also the molecule most commonly dispensed as a compounded preparation through telehealth clinics, which is why pricing and legality vary so much depending on how you access it.",
    ],
    keyTakeaways: [
      "One molecule, three brands: Wegovy (weight loss), Ozempic (diabetes), Rybelsus (oral diabetes).",
      "Once-weekly injection; average ~15% body-weight reduction over 68 weeks in the STEP trials.",
      "Dose is escalated slowly over 16+ weeks to limit nausea.",
      "Widely available as a lower-cost compounded version through telehealth.",
    ],
    howItWorks: [
      "GLP-1 (glucagon-like peptide-1) is a hormone your gut releases after you eat. Semaglutide is a long-acting mimic of that hormone. It binds the same receptors, but instead of breaking down in minutes it stays active for about a week.",
      "Three effects drive weight loss: it slows how quickly the stomach empties (so you feel full longer), it acts on appetite centers in the brain to reduce hunger and food “noise,” and it prompts the pancreas to release insulin only when blood sugar is high — which is why the same drug also lowers glucose in diabetes.",
      "The net result for most people is smaller portions, fewer cravings, and less preoccupation with food, without the jittery stimulant feeling of older appetite suppressants.",
    ],
    efficacy: {
      headline: "~15% average body-weight loss at 68 weeks (STEP 1).",
      detail:
        "In the STEP program of randomized trials, adults with overweight or obesity but without diabetes lost an average of about 15% of body weight on 2.4 mg weekly semaglutide, versus ~2.4% on placebo. People with type 2 diabetes tend to lose somewhat less. Results depend heavily on reaching and staying on the maintenance dose.",
      trials: [
        { name: "STEP 1 (no diabetes)", result: "~14.9% mean weight loss vs 2.4% placebo over 68 weeks" },
        { name: "STEP 2 (type 2 diabetes)", result: "~9.6% mean weight loss on 2.4 mg" },
        { name: "SELECT (cardiovascular)", result: "20% reduction in major cardiovascular events in adults with existing heart disease" },
      ],
    },
    dosing: {
      intro:
        "Wegovy uses a fixed 16-week escalation to the maintenance dose. Doses are stepped up slowly so your gut adapts — rushing the schedule is the main cause of severe nausea.",
      schedule: [
        { phase: "Weeks 1–4", dose: "0.25 mg once weekly", note: "Starter dose — not meant to cause much weight loss yet." },
        { phase: "Weeks 5–8", dose: "0.5 mg once weekly" },
        { phase: "Weeks 9–12", dose: "1.0 mg once weekly" },
        { phase: "Weeks 13–16", dose: "1.7 mg once weekly" },
        { phase: "Week 17+", dose: "2.4 mg once weekly", note: "Maintenance dose for weight management." },
      ],
      notes: [
        "Ozempic (diabetes) tops out lower, typically at 1.0–2.0 mg weekly.",
        "Rybelsus is a daily tablet (7 mg or 14 mg) taken on an empty stomach with a small sip of water, then nothing by mouth for 30 minutes.",
        "If a dose causes intolerable side effects, clinicians often hold you at the current step longer rather than pushing up.",
      ],
    },
    sideEffects: {
      common: [
        "Nausea (most common, usually worst in the first weeks and after each dose increase)",
        "Constipation or diarrhea",
        "Vomiting and burping",
        "Reduced appetite and early fullness",
        "Fatigue during escalation",
      ],
      serious: [
        "Pancreatitis (severe, persistent abdominal pain — stop and seek care)",
        "Gallbladder problems, especially with rapid weight loss",
        "Boxed warning for thyroid C-cell tumors seen in rodents; avoid with a personal/family history of medullary thyroid carcinoma or MEN 2",
        "Dehydration from vomiting/diarrhea, which can affect the kidneys",
      ],
      management:
        "Most GI side effects fade as your body adapts. Eating smaller, lower-fat meals, stopping when full, and staying hydrated help. Persistent severe abdominal pain, signs of an allergic reaction, or vision changes warrant prompt medical attention.",
    },
    cost: {
      brandedRange: "$1,000–$1,350/month list price for Wegovy without insurance (manufacturer cash programs can lower this)",
      compoundedRange: "$150–$300/month typical through telehealth (availability varies with FDA shortage status)",
      insuranceNote:
        "Coverage for weight loss specifically is inconsistent — many plans cover Ozempic for diabetes but exclude Wegovy for obesity. Prior authorization is common.",
    },
    whoFor: [
      "Adults with a BMI ≥ 30, or ≥ 27 with a weight-related condition",
      "People who want a well-studied, once-weekly option with the longest track record",
      "People with type 2 diabetes (as Ozempic/Rybelsus)",
    ],
    whoNotFor: [
      "Anyone with a history of medullary thyroid carcinoma or MEN 2",
      "People with a history of pancreatitis (use caution, discuss with a clinician)",
      "People who are pregnant or trying to conceive",
    ],
    faqs: [
      {
        q: "Is Ozempic the same as Wegovy?",
        a: "Chemically, yes — both are semaglutide. They differ in approved use and maximum dose: Wegovy is approved and dosed for weight management (up to 2.4 mg), while Ozempic is approved for type 2 diabetes (up to 2.0 mg).",
      },
      {
        q: "How fast does semaglutide work?",
        a: "Appetite changes often appear within the first week or two, but meaningful weight loss builds over months as you reach the maintenance dose. Most trial weight loss accrues over the first 6–9 months.",
      },
      {
        q: "What happens if I stop?",
        a: "Studies show most people regain a large share of lost weight within a year of stopping, because the underlying appetite drivers return. GLP-1 therapy is generally treated as long-term, not a short course.",
      },
    ],
    relatedProviders: ["embody", "altrx", "ro", "trimrx", "healthrx"],
    accent: "#0E9488",
  },
  {
    slug: "tirzepatide",
    name: "Tirzepatide",
    drugClass: "Dual GIP/GLP-1 receptor agonist",
    route: "Subcutaneous injection",
    status: "fda-approved",
    statusLabel: "FDA-approved",
    brandNames: ["Mounjaro", "Zepbound"],
    oneLiner:
      "A dual-hormone injection (Zepbound for weight loss, Mounjaro for diabetes) that has produced the largest average weight loss of any approved GLP-1-class drug so far.",
    summary: [
      "Tirzepatide is a once-weekly injection that activates two gut-hormone receptors instead of one: GLP-1 and GIP. It's sold as Zepbound for chronic weight management and Mounjaro for type 2 diabetes.",
      "In head-to-head weight-management trials it has produced larger average weight loss than semaglutide — roughly 20–23% at the highest dose — making it the current benchmark for efficacy among approved medications.",
      "Like semaglutide, it's dosed by slow escalation and is also widely dispensed in compounded form through telehealth, though the legality of compounding shifts with the medication's FDA shortage status.",
    ],
    keyTakeaways: [
      "Activates two receptors (GIP + GLP-1), not just one.",
      "Zepbound = weight loss; Mounjaro = type 2 diabetes.",
      "Highest average weight loss of approved options (~20–23% at 15 mg).",
      "Once-weekly injection with a 5-step dose escalation.",
    ],
    howItWorks: [
      "Tirzepatide is a single molecule that switches on two receptors. The GLP-1 side does what semaglutide does — slows stomach emptying, reduces appetite, and improves insulin response. The GIP side is thought to add further appetite and metabolic benefits and may help the body tolerate the GLP-1 effect.",
      "The practical takeaway is that combining the two pathways appears to unlock more weight loss for many people than GLP-1 alone, though it also means dose escalation and side-effect management still matter.",
    ],
    efficacy: {
      headline: "Up to ~20–23% average body-weight loss at the highest dose.",
      detail:
        "In the SURMOUNT weight-management program, adults without diabetes lost an average of about 15% (5 mg), 19% (10 mg) and 21–23% (15 mg) of body weight over 72 weeks. A direct comparison trial (SURMOUNT-5) found tirzepatide outperformed semaglutide for weight loss.",
      trials: [
        { name: "SURMOUNT-1", result: "~15%–21% mean weight loss across doses over 72 weeks" },
        { name: "SURMOUNT-5 (vs semaglutide)", result: "Greater average weight loss than 2.4 mg semaglutide" },
        { name: "SURPASS (diabetes)", result: "Strong A1C reduction plus weight loss in type 2 diabetes" },
      ],
    },
    dosing: {
      intro:
        "Zepbound starts low and increases every 4 weeks as tolerated. Not everyone needs the maximum dose — many people reach their goal at 5 or 10 mg.",
      schedule: [
        { phase: "Weeks 1–4", dose: "2.5 mg once weekly", note: "Starter dose." },
        { phase: "Weeks 5–8", dose: "5 mg once weekly", note: "First therapeutic dose." },
        { phase: "Weeks 9–12", dose: "7.5 mg once weekly" },
        { phase: "Weeks 13–16", dose: "10 mg once weekly" },
        { phase: "As needed", dose: "12.5 mg → 15 mg once weekly", note: "Increase only if more effect is needed and tolerated." },
      ],
      notes: [
        "Escalation is paused or slowed if side effects are significant.",
        "A single-dose vial form has been offered at lower cash prices for some strengths.",
      ],
    },
    sideEffects: {
      common: [
        "Nausea",
        "Diarrhea and constipation",
        "Vomiting",
        "Reduced appetite",
        "Injection-site reactions",
      ],
      serious: [
        "Pancreatitis",
        "Gallbladder disease",
        "Same thyroid C-cell tumor boxed warning as other GLP-1 drugs",
        "Severe GI reactions leading to dehydration",
      ],
      management:
        "The side-effect profile is similar to semaglutide and generally improves with time and slow dose increases. Because efficacy is higher, rapid weight loss makes gallbladder symptoms worth watching for.",
    },
    cost: {
      brandedRange: "$1,000–$1,300/month list for Zepbound; lower-cost single-dose vials available in some cases",
      compoundedRange: "$200–$400/month typical through telehealth when available",
      insuranceNote:
        "Diabetes coverage (Mounjaro) is more common than obesity coverage (Zepbound). Manufacturer savings cards can substantially cut branded cash cost for eligible patients.",
    },
    whoFor: [
      "People who want the highest average weight loss among approved drugs",
      "People who didn't reach their goal on semaglutide",
      "Adults with type 2 diabetes (as Mounjaro)",
    ],
    whoNotFor: [
      "Anyone with medullary thyroid carcinoma or MEN 2 history",
      "People with prior pancreatitis (discuss risk)",
      "People who are pregnant or breastfeeding",
    ],
    faqs: [
      {
        q: "Is tirzepatide better than semaglutide?",
        a: "For average weight loss, head-to-head data favor tirzepatide. But “better” depends on tolerability, cost, and access — many people do very well on semaglutide, and side effects are similar.",
      },
      {
        q: "What's the difference between Mounjaro and Zepbound?",
        a: "Same molecule. Mounjaro is FDA-approved for type 2 diabetes; Zepbound is approved for weight management. The brand your clinician prescribes usually follows your diagnosis and insurance.",
      },
    ],
    relatedProviders: ["embody", "altrx", "wellmedr", "trimrx", "healthrx"],
    accent: "#2563EB",
  },
  {
    slug: "retatrutide",
    name: "Retatrutide",
    drugClass: "Triple GIP/GLP-1/glucagon receptor agonist",
    route: "Subcutaneous injection",
    status: "investigational",
    statusLabel: "Investigational (not yet FDA-approved)",
    brandNames: ["(no brand name yet)"],
    oneLiner:
      "An experimental “triple agonist” that produced the largest weight loss seen in trials so far — but it is not yet approved and not legally available.",
    summary: [
      "Retatrutide is an investigational once-weekly injection that hits three receptors: GIP, GLP-1 and glucagon. The added glucagon activity is thought to raise energy expenditure on top of appetite suppression.",
      "In a phase 2 trial, participants on the highest dose lost an average of around 24% of body weight at 48 weeks — the highest figure reported for any drug in this class — which is why it has generated so much attention.",
      "Crucially, retatrutide is still in clinical trials and has not been approved by the FDA. It cannot be legally prescribed or compounded, and any product sold online claiming to be retatrutide is unregulated and potentially dangerous.",
    ],
    keyTakeaways: [
      "Triple agonist: GIP + GLP-1 + glucagon.",
      "Phase 2 trials showed ~24% average weight loss at 48 weeks — the highest so far.",
      "NOT FDA-approved and NOT legally available — beware anything sold as retatrutide online.",
      "Phase 3 trials are ongoing; approval, if it comes, is still in the future.",
    ],
    howItWorks: [
      "Retatrutide builds on the dual-agonist idea by adding a third target: the glucagon receptor. GLP-1 and GIP reduce appetite and improve blood sugar; glucagon activation is believed to increase the body's energy use and support fat metabolism.",
      "In theory, pairing appetite suppression with higher energy expenditure could push weight loss beyond what dual agonists achieve — and early data are consistent with that. But the full safety picture only emerges from larger, longer phase 3 studies.",
    ],
    efficacy: {
      headline: "~24% average weight loss at 48 weeks in phase 2 (highest dose).",
      detail:
        "A phase 2 study reported dose-dependent weight loss, reaching roughly 24% on average at the top dose at 48 weeks, with a meaningful share of participants losing more than 30%. These are early results and not a substitute for phase 3 confirmation.",
      trials: [
        { name: "Phase 2 (obesity)", result: "~17%–24% mean weight loss across doses at 48 weeks" },
        { name: "Phase 3 program", result: "Ongoing — results and any approval decision are still pending" },
      ],
    },
    dosing: {
      intro:
        "There is no approved dosing schedule because retatrutide is not approved. Trial protocols use slow escalation similar to other GLP-1-class drugs, but this information is for education only.",
      schedule: [
        { phase: "Trials only", dose: "Escalating weekly doses under study", note: "No approved or legal dosing exists for the public." },
      ],
      notes: [
        "Do not attempt to source or self-administer retatrutide — no legitimate, quality-controlled supply exists outside clinical trials.",
      ],
    },
    sideEffects: {
      common: [
        "Nausea",
        "Diarrhea",
        "Vomiting",
        "Constipation",
        "Increased heart rate reported in trials at higher doses",
      ],
      serious: [
        "Full long-term safety is unknown pending phase 3 data",
        "Glucagon activity requires careful study of effects on blood sugar and heart rate",
      ],
      management:
        "Because retatrutide is investigational, its complete side-effect and safety profile has not been established. This is one of the main reasons approval takes years.",
    },
    cost: {
      brandedRange: "Not available for purchase — no legal market exists",
      insuranceNote:
        "Not applicable. If approved in the future, pricing and coverage would be set at that time.",
    },
    whoFor: [
      "People following GLP-1 research who want to understand what may come next",
      "Potential clinical-trial participants (through legitimate, registered studies only)",
    ],
    whoNotFor: [
      "Anyone looking to buy or use it now — it is not legally or safely available",
    ],
    faqs: [
      {
        q: "Can I get retatrutide today?",
        a: "No. It is investigational and not FDA-approved. Any website selling “retatrutide” for personal use is operating outside the law and outside quality controls, which is genuinely dangerous. The only legitimate access is through an enrolled clinical trial.",
      },
      {
        q: "When will retatrutide be approved?",
        a: "That depends on phase 3 results and regulatory review, which take years. There is no guaranteed approval date, and approval is never certain until it happens.",
      },
    ],
    relatedProviders: [],
    accent: "#7C3AED",
  },
  {
    slug: "liraglutide",
    name: "Liraglutide",
    drugClass: "GLP-1 receptor agonist",
    route: "Subcutaneous injection",
    status: "fda-approved",
    statusLabel: "FDA-approved",
    brandNames: ["Saxenda", "Victoza"],
    oneLiner:
      "The original once-daily GLP-1 (Saxenda for weight loss, Victoza for diabetes) — now largely superseded by weekly drugs but still relevant, including as a generic.",
    summary: [
      "Liraglutide was one of the first GLP-1 medications used for weight loss. Unlike the newer weekly injections, it's taken once daily. It's sold as Saxenda for weight management and Victoza for type 2 diabetes.",
      "Average weight loss is more modest than semaglutide or tirzepatide — around 5–8% in trials — and the daily injection is less convenient. As a result it's used less often now, but it remains an approved, well-understood option and has become available as a lower-cost generic in some markets.",
    ],
    keyTakeaways: [
      "Once-DAILY injection (unlike weekly semaglutide/tirzepatide).",
      "Saxenda = weight loss; Victoza = diabetes.",
      "More modest average weight loss (~5–8%).",
      "Generic versions have begun to lower cost.",
    ],
    howItWorks: [
      "Liraglutide is a GLP-1 receptor agonist like semaglutide, but with a shorter duration of action, which is why it's injected every day rather than weekly. It reduces appetite, slows gastric emptying, and improves blood-sugar control through the same core mechanism.",
    ],
    efficacy: {
      headline: "~5–8% average weight loss over roughly a year.",
      detail:
        "In the SCALE weight-management trials, adults on 3.0 mg daily liraglutide lost an average of about 8% of body weight versus ~2–3% on placebo. Effective, but generally less than the newer weekly agents.",
      trials: [
        { name: "SCALE Obesity", result: "~8% mean weight loss over 56 weeks" },
        { name: "LEADER (diabetes)", result: "Cardiovascular benefit in type 2 diabetes with heart disease" },
      ],
    },
    dosing: {
      intro:
        "Saxenda escalates weekly to a 3.0 mg daily maintenance dose.",
      schedule: [
        { phase: "Week 1", dose: "0.6 mg once daily" },
        { phase: "Week 2", dose: "1.2 mg once daily" },
        { phase: "Week 3", dose: "1.8 mg once daily" },
        { phase: "Week 4", dose: "2.4 mg once daily" },
        { phase: "Week 5+", dose: "3.0 mg once daily", note: "Maintenance dose." },
      ],
      notes: [
        "Victoza (diabetes) is typically dosed up to 1.8 mg daily.",
        "Daily injection is the main practical drawback versus weekly options.",
      ],
    },
    sideEffects: {
      common: ["Nausea", "Diarrhea", "Constipation", "Vomiting", "Low blood sugar when combined with certain diabetes drugs"],
      serious: ["Pancreatitis", "Gallbladder disease", "Thyroid C-cell tumor boxed warning"],
      management:
        "Side effects mirror other GLP-1 drugs and improve with slow escalation. The daily schedule means some people find side effects more constant.",
    },
    cost: {
      brandedRange: "$1,300+/month list for Saxenda; generic liraglutide is cheaper where available",
      insuranceNote:
        "Coverage patterns resemble other GLP-1 drugs — diabetes indications are covered more readily than obesity.",
    },
    whoFor: [
      "People who can't tolerate or access weekly agents",
      "People who prefer or need a generic, lower-cost GLP-1",
    ],
    whoNotFor: [
      "People wanting maximum weight loss (weekly drugs outperform it)",
      "Standard GLP-1 contraindications (thyroid tumor history, pregnancy)",
    ],
    faqs: [
      {
        q: "Why would anyone choose liraglutide over semaglutide?",
        a: "Cost and access, mostly. As a generic it can be cheaper, and it's a well-established option when weekly agents aren't available or tolerated. For pure weight-loss efficacy, the weekly drugs generally win.",
      },
    ],
    relatedProviders: ["ro", "found", "sequence"],
    accent: "#DB6D28",
  },
  {
    slug: "compounded-glp1",
    name: "Compounded GLP-1",
    drugClass: "Pharmacy-compounded semaglutide / tirzepatide",
    route: "Subcutaneous injection",
    status: "compounded",
    statusLabel: "Compounded (not FDA-approved as a finished product)",
    brandNames: ["Compounded semaglutide", "Compounded tirzepatide"],
    oneLiner:
      "Lower-cost versions of semaglutide or tirzepatide mixed by compounding pharmacies — the reason telehealth GLP-1 can cost a fraction of the branded price, with important caveats.",
    summary: [
      "“Compounded GLP-1” refers to semaglutide or tirzepatide prepared by a compounding pharmacy rather than manufactured and sold as a branded, FDA-approved finished drug. This is how most low-cost telehealth programs offer GLP-1 treatment for $100–$300 a month.",
      "Compounding is legal in specific circumstances — most notably when a drug is in official FDA shortage, or when a licensed prescriber orders a patient-specific formulation. But compounded products are not individually FDA-reviewed for safety, effectiveness or quality, so the pharmacy behind them matters enormously.",
      "The rules here move quickly. As branded supply catches up and drugs come off the shortage list, the legal basis for mass compounding narrows — which can change what's available and from whom, sometimes with little notice.",
    ],
    keyTakeaways: [
      "It's the same active molecule (semaglutide/tirzepatide), prepared by a compounding pharmacy.",
      "Main appeal: dramatically lower cost ($100–$300/mo vs $1,000+).",
      "NOT FDA-approved as a finished product — quality depends on the pharmacy.",
      "Legality shifts with FDA shortage status; access can change quickly.",
    ],
    howItWorks: [
      "The pharmacology is identical to the branded drug because it's the same active ingredient. What differs is the manufacturing and oversight: instead of a single, FDA-inspected production line, the medication is prepared by a compounding pharmacy, sometimes with added ingredients (like vitamin B12) or in different concentrations.",
      "That flexibility is the point — it enables lower prices and custom dosing — but it also means the burden is on you (and the prescriber) to use a reputable, properly licensed pharmacy.",
    ],
    efficacy: {
      headline: "Expected to match branded semaglutide/tirzepatide — if quality is genuine.",
      detail:
        "Because compounded GLP-1 uses the same active molecule, results should track the branded data (roughly 15% for semaglutide, up to ~20%+ for tirzepatide) when the product is correctly dosed and genuinely what it claims to be. There are no large trials of compounded products specifically.",
      trials: [
        { name: "No dedicated large trials", result: "Efficacy is inferred from the branded drugs' trial data" },
      ],
    },
    dosing: {
      intro:
        "Dosing generally mirrors the branded escalation schedules for semaglutide or tirzepatide, but concentrations vary by pharmacy — always follow the specific instructions on your vial.",
      schedule: [
        { phase: "Semaglutide track", dose: "Follows Wegovy-style escalation (0.25 mg → 2.4 mg weekly)" },
        { phase: "Tirzepatide track", dose: "Follows Zepbound-style escalation (2.5 mg → 15 mg weekly)" },
      ],
      notes: [
        "Vial concentration can differ between pharmacies, so “units on the syringe” won't match between products — dose by milligrams as instructed.",
        "Reputable programs provide clear, written dosing and a prescriber to ask.",
      ],
    },
    sideEffects: {
      common: ["Same GI side effects as the branded drugs: nausea, constipation, diarrhea, vomiting"],
      serious: [
        "Same class risks (pancreatitis, gallbladder, thyroid warning)",
        "Additional risk from poor-quality or mislabeled compounding — the reason pharmacy vetting matters",
      ],
      management:
        "Manage GI effects as you would with branded drugs. The extra safety step here is upfront: confirm the pharmacy is state-licensed and, ideally, that the program is LegitScript-certified.",
    },
    cost: {
      brandedRange: "N/A (this is the low-cost alternative to branded)",
      compoundedRange: "$100–$300/month typical; some semaglutide programs start under $100",
      insuranceNote:
        "Usually paid cash — compounded GLP-1 is generally not covered by insurance. HSA/FSA may apply.",
    },
    whoFor: [
      "People priced out of branded GLP-1 who still want treatment",
      "People comfortable using a vetted telehealth clinic and compounding pharmacy",
    ],
    whoNotFor: [
      "People who want an FDA-approved finished product specifically",
      "Anyone who can't verify the pharmacy's legitimacy",
    ],
    faqs: [
      {
        q: "Is compounded GLP-1 safe?",
        a: "The active molecule is the same as the branded drug, so the medical risks are the same class of risks. The added variable is quality control: a properly licensed, certified pharmacy is essential. Avoid anyone selling “research chemicals,” unlabeled vials, or products without a prescriber involved.",
      },
      {
        q: "Why is it so much cheaper?",
        a: "It skips the branded product's pricing and is prepared in bulk by compounding pharmacies. That's also why it's only available in specific legal circumstances and can disappear when shortages end.",
      },
      {
        q: "Is it legal?",
        a: "Compounding is legal in defined situations — notably during official drug shortages and for patient-specific prescriptions. The legal footing narrows as shortages resolve, so availability can change. Use programs that operate transparently within these rules.",
      },
    ],
    relatedProviders: ["embody", "altrx", "trimrx", "wellmedr", "healthrx", "skinnyrx"],
    accent: "#0E9488",
  },
];

export function getMedication(slug: string): Medication | undefined {
  return MEDICATIONS.find((m) => m.slug === slug);
}

export const MEDICATION_SLUGS = MEDICATIONS.map((m) => m.slug);
