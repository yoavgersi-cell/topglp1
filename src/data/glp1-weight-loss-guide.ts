// ─────────────────────────────────────────────────────────────────────────────
// Flagship pillar: "GLP-1 Medications for Weight Loss — The Complete Guide".
//
// This is Top GLP-1's top-of-funnel authority asset. It summarizes every major
// GLP-1 subtopic in depth and links down to the dedicated deep-dive page for
// each (hub-and-spoke), so it builds topical authority without cannibalizing
// the cluster pages. Every clinical figure traces to a source key in
// sources.ts — nothing here is invented.
//
// Content model is intentionally rich (h3 / tables / callouts / stat grids) so
// the page reads like a real publication and is cleanly extractable by answer
// engines. Inline links use [label](/path); **bold** is supported.
// ─────────────────────────────────────────────────────────────────────────────

export type Block =
  | { type: "p"; text: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | { type: "table"; caption?: string; headers: string[]; rows: string[][] }
  | { type: "callout"; title?: string; text: string }
  | { type: "statgrid"; stats: { value: string; label: string }[] }
  | { type: "keytakeaways"; items: string[] };

export interface GuideSection {
  id: string;
  heading: string;
  /** One-line answer shown under the H2 — the GEO "direct answer". */
  summary?: string;
  blocks: Block[];
  /** Hub-and-spoke: the deep-dive page this section points to. */
  readMore?: { href: string; label: string };
}

export const PILLAR_META = {
  path: "/glp1-weight-loss-guide",
  title: "GLP-1 Medications for Weight Loss: The Complete 2026 Guide",
  description:
    "The complete guide to GLP-1 weight-loss medication: how semaglutide and tirzepatide work, real results, side effects, cost, coverage, and how to start safely.",
  h1: "GLP-1 Medications for Weight Loss: The Complete Guide",
  dek:
    "Everything you need to understand GLP-1 weight-loss medication in 2026 — the science, the drugs, real-world results, side effects, cost, coverage, and how to get treatment without getting burned. Independent, cited to primary trials, and updated as the field moves.",
  readTime: "48 min read",
};

export const PILLAR_FAQS: { q: string; a: string }[] = [
  {
    q: "What is the best GLP-1 medication for weight loss?",
    a: "For average weight loss, tirzepatide (Zepbound) is the most effective approved option, producing roughly 20–23% body-weight loss at the highest dose versus about 15% for semaglutide (Wegovy). But \"best\" depends on cost, insurance, tolerance and goals — semaglutide has the longest track record and proven cardiovascular benefit, while liraglutide is cheaper and available as a generic. Retatrutide looks even stronger in trials (~24%) but is not yet FDA-approved.",
  },
  {
    q: "How much weight can you lose on GLP-1 medication?",
    a: "In the pivotal trials, average weight loss over about 15–18 months was roughly 15% on semaglutide, up to ~21% on tirzepatide, and ~8% on liraglutide. These are averages — some people lose more, some less, and results depend on reaching the maintenance dose and keeping lifestyle changes alongside the medication.",
  },
  {
    q: "How much does GLP-1 medication cost without insurance?",
    a: "Branded Wegovy and Zepbound list for roughly $1,000–$1,350 a month without insurance, though manufacturer cash programs can lower that. Compounded semaglutide or tirzepatide through telehealth typically runs $100–$300 a month, with some semaglutide programs starting under $100.",
  },
  {
    q: "Do you regain the weight if you stop GLP-1?",
    a: "Usually, yes — a substantial share. In trial extensions, people who stopped semaglutide regained about two-thirds of their lost weight within a year, because the appetite and metabolic drivers that the drug was suppressing return. GLP-1 therapy is generally treated as long-term management, not a short course.",
  },
  {
    q: "Who qualifies for GLP-1 weight-loss medication?",
    a: "The standard criteria are a BMI of 30 or higher, or 27 or higher with a weight-related condition such as high blood pressure, type 2 diabetes or sleep apnea. A clinician also screens for contraindications — a personal or family history of medullary thyroid carcinoma or MEN 2, prior pancreatitis, and pregnancy are the main ones.",
  },
  {
    q: "Is compounded semaglutide safe and legal?",
    a: "Compounded GLP-1 is legal in defined circumstances and can be made by licensed pharmacies, but it is not an FDA-approved finished product, and the rules tightened after the FDA declared the semaglutide and tirzepatide shortages resolved in 2025. The safety risk is in sourcing: use providers that work with state-licensed, ideally LegitScript-certified pharmacies and require a real prescriber — and avoid anything sold without a prescription or labeled \"research use only.\"",
  },
  {
    q: "What are the most common side effects of GLP-1 drugs?",
    a: "Nausea is the most common, usually worst in the first weeks and after each dose increase, along with constipation, diarrhea, vomiting and reduced appetite. Most gastrointestinal side effects fade as the body adapts. Rare but serious risks include pancreatitis, gallbladder problems, and a boxed warning for thyroid C-cell tumors seen in rodents.",
  },
  {
    q: "How long does it take for GLP-1 to work?",
    a: "Appetite changes often appear within the first week or two, but meaningful weight loss builds over months as you climb to the maintenance dose. Most of the weight loss in the trials accrued over the first 6–9 months before leveling off.",
  },
  {
    q: "Can you get GLP-1 medication online?",
    a: "Yes. Legitimate telehealth programs run a medical intake, have a licensed clinician review your case and write a prescription if appropriate, and ship from a licensed pharmacy with dosing instructions. Branded programs can help with insurance; compounded programs are usually cash-pay. The key is verifying the prescriber and pharmacy are real and licensed.",
  },
  {
    q: "Does insurance or Medicaid cover GLP-1 for weight loss?",
    a: "Coverage for weight loss specifically is inconsistent. Many commercial plans cover semaglutide for diabetes (Ozempic) but exclude it for obesity (Wegovy), and prior authorization is common. Only a minority of state Medicaid programs cover GLP-1 for obesity in 2026, and that number has been shrinking. Medicare historically excluded weight-loss drugs, with a limited GLP-1 Bridge demonstration beginning in 2026.",
  },
  {
    q: "Is tirzepatide better than semaglutide?",
    a: "For weight loss, tirzepatide (Zepbound) produced more average weight loss than semaglutide (Wegovy) in a head-to-head trial, so for pure efficacy it's the stronger choice. But semaglutide has a longer safety record and proven cardiovascular benefit, and may be cheaper or better covered depending on your situation. \"Better\" depends on your priority — efficacy, track record, cost or coverage.",
  },
  {
    q: "What BMI do you need to qualify for Wegovy or Zepbound?",
    a: "The standard threshold is a BMI of 30 or higher, or 27 or higher if you have a weight-related condition such as high blood pressure, type 2 diabetes, high cholesterol or sleep apnea. A clinician confirms eligibility and screens for contraindications during the intake.",
  },
  {
    q: "Do GLP-1 drugs cause muscle loss?",
    a: "Any rapid weight loss costs some muscle unless you actively protect it. On GLP-1 therapy, prioritizing protein and doing resistance training a few times a week shifts what you lose toward fat and preserves lean mass. The drug doesn't specifically destroy muscle — under-eating protein and skipping strength work does.",
  },
  {
    q: "Can you drink alcohol on GLP-1 medication?",
    a: "There's no absolute ban, but many people find alcohol hits harder and sits worse on a GLP-1 because digestion is slowed, and alcohol adds empty calories that work against your goal. Some people also report reduced desire to drink. Discuss your situation with your clinician, especially if you have other risk factors.",
  },
  {
    q: "What happens if I miss a weekly dose?",
    a: "There's standard guidance for a missed weekly dose that depends on how many days have passed — your clinician or the product instructions specify the window in which to take it late versus skip to the next scheduled dose. Don't double up to \"catch up\" without guidance, as that raises the risk of side effects.",
  },
  {
    q: "Do you need a prescription for GLP-1?",
    a: "Yes. Legitimate GLP-1 medication — branded or compounded — requires a prescription from a licensed clinician who has reviewed your case. Anything sold without a prescription or a real medical review is a major red flag and may be unapproved, counterfeit, or unsafe.",
  },
  {
    q: "Are compounded and branded GLP-1 the same strength?",
    a: "Compounded semaglutide and tirzepatide use the same active molecules as the branded drugs, so at an equivalent dose the effect should be comparable. The difference is that compounded products aren't FDA-approved finished products, so consistency depends on the pharmacy — which is why using a state-licensed, ideally LegitScript-certified pharmacy matters, and why clear dosing instructions are essential.",
  },
  {
    q: "How do I know if my GLP-1 is working?",
    a: "Early signs are reduced appetite and quieter \"food noise,\" often within a week or two. Meaningful weight loss builds over months as you reach an effective dose, with most of it accruing over roughly the first 6–9 months. If you've reached a proper maintenance dose for several months and see little change, that's worth a conversation with your clinician about dose or switching.",
  },
];

// HowTo steps for the "how to get GLP-1 safely" section (emits HowTo JSON-LD).
export const PILLAR_HOWTO = {
  name: "How to Get GLP-1 Weight-Loss Medication Safely",
  steps: [
    {
      name: "Confirm you're a candidate",
      text: "Check the standard eligibility: a BMI of 30+, or 27+ with a weight-related condition. A legitimate program screens your history and can decline you if a GLP-1 isn't safe.",
    },
    {
      name: "Choose branded or compounded",
      text: "Decide whether you want FDA-approved branded medication (Wegovy/Zepbound, often via insurance) or lower-cost compounded semaglutide/tirzepatide (usually cash-pay). This drives which providers fit.",
    },
    {
      name: "Vet the provider and pharmacy",
      text: "Require a real licensed prescriber who reviews your case, a state-licensed pharmacy (LegitScript certification is a strong signal), transparent pricing and dosing, and a way to reach a clinician about side effects.",
    },
    {
      name: "Complete the medical intake",
      text: "Fill out the intake honestly, including medications and history, and complete any lab work or video visit the clinician requests.",
    },
    {
      name: "Start low and escalate slowly",
      text: "Begin at the starter dose and step up on schedule only as tolerated. Rushing the escalation is the main cause of severe nausea.",
    },
  ],
};

export const PILLAR_SOURCE_KEYS = [
  "step-1",
  "surmount-1",
  "surmount-5",
  "select",
  "retatrutide-p2",
  "scale-obesity",
  "step-1-extension",
  "step-4",
  "surmount-4",
  "fda-unapproved-glp1",
  "fda-compounding-policy",
  "fda-compounding-dosing",
  "kff-medicaid-glp1",
  "medicare-glp1-bridge",
  "cdc-obesity",
  "niddk-obesity-meds",
  "who-obesity",
];

export const PILLAR_SECTIONS: GuideSection[] = [
  {
    id: "overview",
    heading: "The short version",
    summary:
      "GLP-1 medications like semaglutide and tirzepatide treat obesity as a chronic medical condition by quieting appetite. In trials, average weight loss ranged from ~8% (liraglutide) to ~21% (tirzepatide) over 15–18 months — but they work only while you take them, they carry real side effects, and cost and insurance remain the biggest barriers.",
    blocks: [
      {
        type: "p",
        text: "If you read nothing else, here is the honest summary. GLP-1 receptor agonists are the most effective weight-loss medications ever brought to market, and for many people they do something no diet has: they turn down the constant background noise of hunger. But they are not magic, not a quick course, and not risk-free. They are a long-term treatment for a chronic condition, and choosing one well means weighing efficacy against cost, side effects, and how you plan to get and keep access.",
      },
      {
        type: "keytakeaways",
        items: [
          "**GLP-1 drugs treat obesity as a disease, not a willpower problem** — they act on appetite-regulating hormones, not metabolism tricks.",
          "**Tirzepatide (Zepbound) is the most effective approved option** (~20–23% average weight loss at the top dose); **semaglutide (Wegovy)** is close behind (~15%) with the longest safety record and proven heart benefit.",
          "**Most of the weight comes off in the first 6–9 months**, then plateaus — and returns if you stop.",
          "**Nausea and other gut side effects are common** early and usually fade; slow dose escalation is the key to tolerability.",
          "**Cost is the real gatekeeper**: ~$1,000–$1,350/month branded without insurance, versus ~$100–$300/month for compounded through telehealth.",
          "**Coverage is inconsistent** — many plans cover semaglutide for diabetes but not for obesity, and only a minority of state Medicaid programs cover it for weight loss.",
        ],
      },
      {
        type: "statgrid",
        stats: [
          { value: "~15%", label: "Average weight loss on semaglutide over 68 weeks (STEP 1)" },
          { value: "up to ~21%", label: "Average weight loss on tirzepatide over 72 weeks (SURMOUNT-1)" },
          { value: "~24%", label: "Average weight loss on retatrutide at 48 weeks (phase 2, investigational)" },
          { value: "20%", label: "Reduction in major cardiovascular events on semaglutide in adults with obesity + heart disease (SELECT)" },
          { value: "~40%", label: "Share of US adults with obesity (CDC)" },
          { value: "~2/3", label: "Of lost weight regained within a year of stopping semaglutide (STEP 1 extension)" },
        ],
      },
      {
        type: "p",
        text: "The rest of this guide unpacks each of those points: the science, the four drugs that matter, what the numbers really mean, the side effects and how to manage them, what it costs, how coverage works, the compounded-versus-branded question, and how to get treatment without being scammed. Every clinical figure is cited to a primary source at the bottom.",
      },
    ],
  },
  {
    id: "what-are-glp1",
    heading: "What are GLP-1 medications?",
    summary:
      "GLP-1 medications are injectable (or, in one case, oral) drugs that mimic a natural gut hormone — glucagon-like peptide-1 — to reduce appetite and food intake. Originally developed for type 2 diabetes, they are now first-line medical treatment for obesity.",
    blocks: [
      {
        type: "p",
        text: "GLP-1 stands for **glucagon-like peptide-1**, a hormone your gut releases after you eat. It does several useful things at once: it tells your pancreas to release insulin, slows how quickly your stomach empties, and signals your brain that you are full. GLP-1 medications are engineered molecules that imitate this hormone but last far longer in the body — days instead of minutes — so the \"I've eaten, I'm satisfied\" signal stays switched on.",
      },
      {
        type: "p",
        text: "That is the whole mechanism in plain terms, and it is why these drugs feel so different from older diet pills. They do not speed up your metabolism or block fat absorption. They change your relationship with hunger. People on GLP-1 therapy routinely describe the disappearance of \"food noise\" — the intrusive, constant thinking about the next meal — which is exactly what makes eating less feel effortless rather than like a daily act of discipline.",
      },
      {
        type: "p",
        text: "The class was born in diabetes care. Drugs like exenatide and liraglutide were approved to lower blood sugar years before anyone marketed them for weight. Clinicians noticed patients were also losing significant weight, trials were run at higher doses specifically for obesity, and a new category of anti-obesity medicine was created. Today the U.S. National Institutes of Health lists GLP-1 receptor agonists among the [FDA-approved prescription medications to treat overweight and obesity](/guides/how-glp1-medications-work).",
      },
      {
        type: "h3",
        text: "Why this matters: obesity is a medical condition",
      },
      {
        type: "p",
        text: "Roughly 40% of US adults have obesity, according to the CDC, and the medical consensus — reflected by the World Health Organization and major guideline bodies — is that obesity is a chronic, relapsing disease driven by biology, not a simple failure of willpower. Bodyweight is defended by hormones and the brain's appetite circuits, which is why most people who lose weight through dieting alone regain it. GLP-1 medications work on those exact circuits, which is both why they are effective and why the weight tends to return when they stop.",
      },
      {
        type: "callout",
        title: "The names can be confusing",
        text: "The same molecule is often sold under two brand names — one for diabetes, one for weight loss. Semaglutide is Ozempic (diabetes) and Wegovy (weight loss). Tirzepatide is Mounjaro (diabetes) and Zepbound (weight loss). Liraglutide is Victoza (diabetes) and Saxenda (weight loss). When people say \"Ozempic for weight loss,\" they usually mean the semaglutide molecule, prescribed off-label or as Wegovy.",
      },
    ],
    readMore: { href: "/guides/how-glp1-medications-work", label: "Deep dive: How GLP-1 medications actually work" },
  },
  {
    id: "how-they-work",
    heading: "How GLP-1 medications work",
    summary:
      "GLP-1 drugs reduce appetite and slow digestion by activating gut-hormone receptors in the brain and pancreas. Newer drugs add a second (GIP) or third (glucagon) receptor to amplify the effect.",
    blocks: [
      {
        type: "p",
        text: "Every drug in this category works through the same core pathway, then layers extra mechanisms on top. Understanding the layers is the single most useful thing for deciding which drug is likely to work best for you.",
      },
      {
        type: "h3",
        text: "The GLP-1 pathway (semaglutide, liraglutide)",
      },
      {
        type: "p",
        text: "A single-agonist GLP-1 drug like semaglutide or liraglutide switches on the GLP-1 receptor. That produces three effects that add up to eating less: it **slows gastric emptying** so food stays in your stomach longer and you feel full sooner and for longer; it **acts on appetite centers in the brain** to reduce hunger and cravings; and it **improves the insulin response** to meals, which is why the same drugs are powerful diabetes treatments. The net result in trials is a large, sustained reduction in how much people eat without consciously restricting.",
      },
      {
        type: "h3",
        text: "Adding GIP (tirzepatide)",
      },
      {
        type: "p",
        text: "[Tirzepatide](/medications/tirzepatide) is a **dual agonist**: a single molecule that activates both the GLP-1 receptor and a second gut-hormone receptor, GIP (glucose-dependent insulinotropic polypeptide). The GLP-1 side does everything described above; the GIP side is thought to add further appetite and metabolic benefits and may help the body tolerate the GLP-1 effect. In practice, combining the two pathways has produced more weight loss for many people than GLP-1 alone — which is why tirzepatide currently sets the efficacy benchmark among approved drugs.",
      },
      {
        type: "h3",
        text: "Adding glucagon (retatrutide)",
      },
      {
        type: "p",
        text: "[Retatrutide](/medications/retatrutide), still investigational, is a **triple agonist** — GLP-1, GIP, and glucagon. The glucagon receptor is interesting because, at the right balance, it can increase energy expenditure in addition to reducing intake. In phase 2 trials the triple-agonist approach produced the largest average weight loss reported for any of these drugs so far, but it is not yet FDA-approved and there is no legal way to obtain it outside a clinical trial.",
      },
      {
        type: "p",
        text: "One reason GLP-1 therapy feels so different from willpower-based dieting is what people describe as the quieting of \"food noise\" — the intrusive, near-constant mental chatter about snacking and the next meal. By acting on appetite-regulating circuits in the brain, not just the stomach, these drugs turn down that background drive, which is why eating less stops feeling like a daily battle. It isn't that food becomes unpleasant; it's that the compulsive pull fades and normal fullness arrives sooner and lasts longer.",
      },
      {
        type: "callout",
        title: "One practical consequence",
        text: "Because all of these drugs work largely by making you eat less, the side effects are mostly gastrointestinal, and the weight loss depends on reaching an effective dose. More receptors generally means more weight loss — and, often, more to manage on the way up. That trade-off is the throughline of the entire class.",
      },
      {
        type: "p",
        text: "Importantly, none of these drugs \"burn fat\" directly or override the rest of your physiology. They create a sustained calorie deficit by changing appetite. That is why what you eat, and whether you protect muscle while losing weight, still matters — a theme we return to in the [diet and lifestyle](#lifestyle) section.",
      },
    ],
    readMore: { href: "/guides/how-glp1-medications-work", label: "Deep dive: the mechanism, explained simply" },
  },
  {
    id: "the-medications",
    heading: "The GLP-1 medications, compared",
    summary:
      "Four molecules matter for weight loss: semaglutide, tirzepatide, retatrutide and liraglutide. They differ in how many receptors they hit, how much weight they produce, how often you inject, and whether they're even approved yet.",
    blocks: [
      {
        type: "p",
        text: "There are really only four drugs worth knowing about, and they sit on a clear spectrum from oldest-and-gentlest to newest-and-strongest. Here is the whole landscape in one table, then a short profile of each.",
      },
      {
        type: "table",
        caption: "GLP-1 weight-loss medications at a glance",
        headers: ["Drug", "Brand (weight loss)", "Receptors", "Avg. weight loss", "Frequency", "Status"],
        rows: [
          ["Semaglutide", "Wegovy", "GLP-1", "~15% (68 wks)", "Weekly injection (oral form exists)", "FDA-approved"],
          ["Tirzepatide", "Zepbound", "GLP-1 + GIP", "~15–21% (72 wks)", "Weekly injection", "FDA-approved"],
          ["Retatrutide", "— (investigational)", "GLP-1 + GIP + glucagon", "~24% (48 wks, phase 2)", "Weekly injection (trials only)", "Not yet approved"],
          ["Liraglutide", "Saxenda", "GLP-1", "~8% (56 wks)", "Daily injection", "FDA-approved (generic emerging)"],
        ],
      },
      {
        type: "h3",
        text: "Semaglutide (Wegovy / Ozempic)",
      },
      {
        type: "p",
        text: "[Semaglutide](/medications/semaglutide) is the drug that made this class famous. As **Wegovy** it is approved for weight management; as **Ozempic** it is approved for type 2 diabetes; as **Rybelsus** it comes as a daily tablet. In the pivotal STEP 1 trial, adults without diabetes lost an average of about 15% of body weight over 68 weeks on the 2.4 mg weekly dose. It also has something none of the others can yet claim at scale: in the SELECT trial, semaglutide cut major cardiovascular events by 20% in adults with obesity and existing heart disease. If you want the longest track record and proven heart benefit, semaglutide is the safe default.",
      },
      {
        type: "h3",
        text: "Tirzepatide (Zepbound / Mounjaro)",
      },
      {
        type: "p",
        text: "[Tirzepatide](/medications/tirzepatide) is the current efficacy leader among approved drugs. As **Zepbound** (weight) and **Mounjaro** (diabetes), it hits two receptors instead of one. In the SURMOUNT-1 trial, average weight loss ranged from about 15% at 5 mg to roughly 21% at 15 mg over 72 weeks, and in a head-to-head trial (SURMOUNT-5) it outperformed semaglutide for weight loss. The trade-off is that it is newer, so the long-term safety record is shorter, and it is often at least as expensive. For many people chasing maximum results, it is the first choice — see our full [semaglutide vs tirzepatide comparison](/vs/semaglutide-vs-tirzepatide).",
      },
      {
        type: "h3",
        text: "Retatrutide (investigational)",
      },
      {
        type: "p",
        text: "[Retatrutide](/medications/retatrutide) is the one to watch, not the one to buy. A triple agonist (GLP-1 + GIP + glucagon), it produced roughly 17–24% average weight loss across doses at 48 weeks in a phase 2 trial — the highest reported for this class. But it is **not FDA-approved**, its phase 3 program and any approval decision are still pending, and there is no legal, quality-assured way to obtain it. Anything sold online as \"retatrutide\" today is unapproved and unverified; we cover it so you understand the pipeline, not so you chase it. See [tirzepatide vs retatrutide](/vs/tirzepatide-vs-retatrutide) for how it compares.",
      },
      {
        type: "h3",
        text: "Liraglutide (Saxenda / Victoza)",
      },
      {
        type: "p",
        text: "[Liraglutide](/medications/liraglutide) is the original, now largely superseded by the weekly drugs — but still relevant. As **Saxenda** (weight) and **Victoza** (diabetes), it is a once-**daily** GLP-1 injection. In the SCALE trials it produced about 8% average weight loss over 56 weeks — effective, but less than the newer agents, and the daily shot is less convenient. Its advantage is cost and access: it is well understood and increasingly available as a lower-cost generic. If budget or availability rules out the weekly drugs, liraglutide is a legitimate option. Compare it directly in [semaglutide vs liraglutide](/vs/semaglutide-vs-liraglutide).",
      },
      {
        type: "callout",
        title: "What about compounded versions?",
        text: "\"Compounded semaglutide\" and \"compounded tirzepatide\" are not separate drugs — they are the same molecules made by compounding pharmacies rather than the brand manufacturer, usually at much lower cash prices. They come with their own rules and risks, covered in the [compounded vs branded](#compounded) section below.",
      },
    ],
    readMore: { href: "/compare", label: "Compare any two GLP-1 programs side by side" },
  },
  {
    id: "results",
    heading: "How much weight can you actually lose?",
    summary:
      "In the pivotal trials, average weight loss over about 15–18 months was ~15% on semaglutide, up to ~21% on tirzepatide, and ~8% on liraglutide. But these are averages — your result depends on the drug, the dose you reach, and what you do alongside it.",
    blocks: [
      {
        type: "p",
        text: "This is the question everyone actually wants answered, so let's be precise about what the evidence shows — and what it doesn't.",
      },
      {
        type: "table",
        caption: "Average weight loss in the pivotal trials",
        headers: ["Drug (top dose)", "Avg. weight loss", "Duration", "Trial"],
        rows: [
          ["Tirzepatide 15 mg", "~21–23%", "72 weeks", "SURMOUNT-1"],
          ["Retatrutide (highest)", "~24%", "48 weeks", "Phase 2 (investigational)"],
          ["Semaglutide 2.4 mg", "~15%", "68 weeks", "STEP 1"],
          ["Liraglutide 3.0 mg", "~8%", "56 weeks", "SCALE"],
        ],
      },
      {
        type: "h3",
        text: "What \"average\" hides",
      },
      {
        type: "p",
        text: "Every number above is a mean. In practice the results scatter widely: a meaningful share of people lose far more than the average, and a minority respond poorly and lose little. In the tirzepatide trials, for example, a large proportion of participants lost 20% or more of their body weight at the highest dose — results that used to be achievable only with bariatric surgery. The averages are the honest headline, but your personal result can land well above or below them.",
      },
      {
        type: "h3",
        text: "What drives your result",
      },
      {
        type: "ul",
        items: [
          "**The drug and dose you reach.** The top doses produce the headline numbers. Many people stop escalating early because of side effects or because they're satisfied, and lose correspondingly less.",
          "**Time.** Most of the weight loss accrues over the first 6–9 months before leveling off. Judging the drug at week 6 is premature.",
          "**What you eat and whether you keep muscle.** The medication creates the calorie deficit; protein intake and resistance training determine how much of the loss is fat versus muscle.",
          "**Staying on it.** The trials measured people who kept taking the drug. Stopping reverses the effect (see [what happens when you stop](#stopping)).",
        ],
      },
      {
        type: "p",
        text: "It's worth understanding that response varies in pattern, not just amount. Some people lose steadily; others drop quickly then plateau, or start slow and accelerate once they reach an effective dose. A slow first month is not predictive of a poor final result — what matters is the trajectory over six to nine months on an adequate dose. If you've reached a proper maintenance dose and genuinely see nothing over several months, that's the signal to revisit the plan with your clinician, not the starter-dose weeks.",
      },
      {
        type: "callout",
        title: "Put your own numbers in",
        text: "A 15% loss means something very different at 180 lb than at 300 lb. Use our [GLP-1 cost calculator](/tools/glp1-cost-calculator) and the medication pages to translate these percentages into realistic ranges for your starting weight.",
      },
      {
        type: "p",
        text: "One more honest point: these drugs are powerful, but they are not surgery and not a guarantee. They work best as one part of a plan that includes food quality, protein, movement and sleep — not as a replacement for all of it.",
      },
    ],
    readMore: { href: "/guides/glp1-results-timeline", label: "Deep dive: results timeline, month by month" },
  },
  {
    id: "timeline",
    heading: "Results timeline: what to expect month by month",
    summary:
      "Appetite changes often appear within the first week or two, but real weight loss builds over months as you climb to the maintenance dose. Most trial weight loss accrued over the first 6–9 months, then plateaued.",
    blocks: [
      {
        type: "p",
        text: "One of the most common reasons people quit GLP-1 therapy too early is a mismatch between expectations and biology. The drugs are dosed deliberately slowly, so the big results come later than most people assume. Here is a realistic arc, drawn from how the trials were run.",
      },
      {
        type: "h3",
        text: "Weeks 1–4: the starter dose",
      },
      {
        type: "p",
        text: "You begin at a low starter dose that is **not meant to drive much weight loss** — its job is to let your gut adapt. Many people notice reduced appetite and \"food noise\" quieting within days, and some early water-weight or scale movement, but this is not the therapeutic dose. Nausea, if it appears, is usually at its most noticeable now and right after each step up.",
      },
      {
        type: "h3",
        text: "Months 2–4: escalation",
      },
      {
        type: "p",
        text: "Doses step up every few weeks (every 4 weeks for tirzepatide; a 16-week schedule for Wegovy semaglutide). As you climb toward an effective dose, weight loss becomes steadier and more obvious. This is the window where consistency matters most: the goal is to reach a dose that works for you while keeping side effects tolerable, slowing the climb if needed rather than pushing through misery.",
      },
      {
        type: "h3",
        text: "Months 4–9: the main event",
      },
      {
        type: "p",
        text: "This is where most of the weight comes off. On the maintenance dose, the calorie deficit is sustained and the trend is downward week over week for most responders. The STEP and SURMOUNT trials saw the bulk of their average weight loss accumulate across roughly the first six to nine months.",
      },
      {
        type: "h3",
        text: "Months 9+ : plateau and maintenance",
      },
      {
        type: "p",
        text: "Weight loss slows and then levels off as your body reaches a new set point for that dose. This is normal and expected, not a failure. The question shifts from \"how much more can I lose\" to \"how do I maintain this\" — which, for most people, means staying on the medication (often at the same or a maintenance dose) and holding the lifestyle changes in place.",
      },
      {
        type: "callout",
        title: "The honest expectation",
        text: "If you're not seeing dramatic results in month one, that is completely normal — you're still on the starter dose. Judge the medication at month 4–6 on an effective dose, not at week 6 on the starter.",
      },
    ],
    readMore: { href: "/guides/glp1-results-timeline", label: "Deep dive: the full month-by-month timeline" },
  },
  {
    id: "side-effects",
    heading: "Side effects and how to manage them",
    summary:
      "The most common side effects are gastrointestinal — nausea, constipation, diarrhea, vomiting — usually worst early and after dose increases, and usually fading as the body adapts. Slow escalation and smaller, lower-fat meals are the main levers.",
    blocks: [
      {
        type: "p",
        text: "Because these drugs work largely by slowing digestion and reducing appetite, their side effects are mostly in the gut. For most people they are manageable and temporary, but they are the number-one reason people stop, so it's worth knowing what to expect and what actually helps.",
      },
      {
        type: "h3",
        text: "Common side effects",
      },
      {
        type: "ul",
        items: [
          "**Nausea** — the most common, usually worst in the first weeks and right after each dose increase.",
          "**Constipation or diarrhea**, and sometimes both at different times.",
          "**Vomiting and burping**, more likely after large or high-fat meals.",
          "**Reduced appetite and early fullness** — the intended effect, but it can tip into eating too little.",
          "**Fatigue** during escalation, often related to eating less.",
        ],
      },
      {
        type: "h3",
        text: "What actually helps",
      },
      {
        type: "ul",
        items: [
          "**Escalate slowly.** Rushing the dose schedule is the single biggest cause of severe nausea. Clinicians often hold you at a dose longer rather than pushing up if you're struggling.",
          "**Eat smaller, lower-fat meals** and stop when you feel full rather than finishing out of habit.",
          "**Stay hydrated**, especially if you have vomiting or diarrhea — dehydration is what turns a nuisance into a problem.",
          "**Protect protein and muscle** by prioritizing protein and some resistance training, since appetite suppression can otherwise lead to muscle loss.",
        ],
      },
      {
        type: "p",
        text: "A few less-common effects are worth knowing so they don't catch you off guard. Some people get heartburn or acid reflux (the slowed stomach emptying can contribute), burping with a sulfur-like taste, temporary hair thinning that tracks with rapid weight loss rather than the drug itself, or mild injection-site reactions like redness. Most are manageable and temporary, and the same levers — slow dose increases, smaller and lower-fat meals, good hydration — tend to reduce them.",
      },
      {
        type: "callout",
        title: "When to seek care, not tough it out",
        text: "Severe, persistent abdominal pain (possible pancreatitis), signs of gallbladder trouble, an allergic reaction, or vision changes warrant prompt medical attention — not waiting it out. These are uncommon but real.",
      },
    ],
    readMore: { href: "/guides/glp1-side-effects-and-how-to-manage-them", label: "Deep dive: managing GLP-1 side effects" },
  },
  {
    id: "safety",
    heading: "Safety, risks and who should not take them",
    summary:
      "GLP-1 drugs are generally safe for appropriate candidates, but they carry a boxed warning for thyroid C-cell tumors (seen in rodents), rare risks of pancreatitis and gallbladder disease, and clear contraindications including a history of medullary thyroid cancer, MEN 2, and pregnancy.",
    blocks: [
      {
        type: "p",
        text: "No effective medication is risk-free, and honest safety information is part of making a good decision. The serious risks here are uncommon, but they define who should not take these drugs.",
      },
      {
        type: "h3",
        text: "The serious (but rare) risks",
      },
      {
        type: "ul",
        items: [
          "**Thyroid C-cell tumors** — a boxed warning based on rodent studies. The human relevance is uncertain, but it drives a firm contraindication (below).",
          "**Pancreatitis** — inflammation of the pancreas, signaled by severe, persistent abdominal pain. Stop and seek care if it occurs.",
          "**Gallbladder problems**, which become more likely with rapid weight loss of any kind.",
          "**Dehydration** from vomiting or diarrhea, which can stress the kidneys.",
        ],
      },
      {
        type: "h3",
        text: "Who should not take GLP-1 medications",
      },
      {
        type: "ul",
        items: [
          "Anyone with a personal or family history of **medullary thyroid carcinoma** or **MEN 2** (multiple endocrine neoplasia type 2).",
          "People with a history of **pancreatitis** should use caution and discuss it carefully with a clinician.",
          "People who are **pregnant, trying to conceive, or breastfeeding**.",
          "Anyone a prescriber determines is not an appropriate candidate after reviewing their full history — which is exactly why a real medical intake matters.",
        ],
      },
      {
        type: "p",
        text: "It's also worth putting the serious risks in perspective. For appropriate candidates — people who meet the criteria and clear the contraindications — these drugs have been used by millions and have a well-characterized safety profile, with gastrointestinal side effects being by far the most common experience. The rare risks are real and worth knowing, but they define who shouldn't take the drug more than they describe what most people go through. For most people, the biggest avoidable risk isn't the molecule; it's unverified sourcing.",
      },
      {
        type: "callout",
        title: "The FDA's warning about unapproved products",
        text: "The FDA has specifically warned about unapproved and improperly compounded GLP-1 products, including dosing errors with compounded semaglutide. The safety of the molecule is well established; the risk is in unverified sourcing. We cover how to avoid that in the [how to get GLP-1 safely](#how-to-get) section.",
      },
    ],
    readMore: { href: "/guides/glp1-side-effects-and-how-to-manage-them", label: "Deep dive: side effects, risks and red flags" },
  },
  {
    id: "dosing",
    heading: "Dosing: how treatment actually works",
    summary:
      "GLP-1 drugs start at a low dose and step up every few weeks so your gut adapts. Semaglutide (Wegovy) climbs from 0.25 mg to 2.4 mg weekly over 16 weeks; tirzepatide (Zepbound) from 2.5 mg to as much as 15 mg. Not everyone needs the maximum dose.",
    blocks: [
      {
        type: "p",
        text: "The schedule is deliberately slow for one reason: to limit side effects while your body adapts to eating less. Pushing the dose faster than the schedule is the main cause of severe nausea, and a good clinician will slow down rather than force the climb.",
      },
      {
        type: "table",
        caption: "Wegovy (semaglutide) escalation",
        headers: ["Phase", "Dose", "Notes"],
        rows: [
          ["Weeks 1–4", "0.25 mg weekly", "Starter dose — not meant to drive weight loss yet"],
          ["Weeks 5–8", "0.5 mg weekly", ""],
          ["Weeks 9–12", "1.0 mg weekly", ""],
          ["Weeks 13–16", "1.7 mg weekly", ""],
          ["Week 17+", "2.4 mg weekly", "Maintenance dose for weight management"],
        ],
      },
      {
        type: "table",
        caption: "Zepbound (tirzepatide) escalation",
        headers: ["Phase", "Dose", "Notes"],
        rows: [
          ["Weeks 1–4", "2.5 mg weekly", "Starter dose"],
          ["Weeks 5–8", "5 mg weekly", "First therapeutic dose"],
          ["Weeks 9–12", "7.5 mg weekly", ""],
          ["Weeks 13–16", "10 mg weekly", ""],
          ["As needed", "12.5 → 15 mg weekly", "Increase only if more effect is needed and tolerated"],
        ],
      },
      {
        type: "p",
        text: "A few practical notes. **Ozempic** (diabetes semaglutide) tops out lower, typically 1.0–2.0 mg weekly. **Rybelsus** is a daily semaglutide tablet (7 mg or 14 mg) taken on an empty stomach with a small sip of water, then nothing by mouth for 30 minutes. **Liraglutide** (Saxenda) is different again — a once-daily injection escalated weekly to 3.0 mg. And many people reach their goal at an intermediate dose (5 or 10 mg of tirzepatide, for example) and never need the maximum.",
      },
      {
        type: "callout",
        title: "The golden rule of dosing",
        text: "Start low, go slow, and don't chase the top dose for its own sake. The right dose is the lowest one that gets you the result you want with side effects you can live with.",
      },
    ],
    readMore: { href: "/guides/glp1-dosing-schedule-explained", label: "Deep dive: GLP-1 dosing schedules explained" },
  },
  {
    id: "cost",
    heading: "What GLP-1 costs, with and without insurance",
    summary:
      "Branded Wegovy and Zepbound list for roughly $1,000–$1,350 a month without insurance. Compounded semaglutide or tirzepatide through telehealth typically runs $100–$300 a month, with some semaglutide programs under $100. When a plan actually covers a GLP-1, copays commonly land around $25–$100.",
    blocks: [
      {
        type: "p",
        text: "Cost, not science, is the real gatekeeper for most people. The gap between the branded list price and the cash-pay compounded price is enormous, and understanding it is the difference between \"I can't afford this\" and \"I can.\"",
      },
      {
        type: "statgrid",
        stats: [
          { value: "$1,000–$1,350", label: "Monthly list price of branded Wegovy/Zepbound without insurance" },
          { value: "$100–$300", label: "Typical monthly cost of compounded semaglutide/tirzepatide via telehealth" },
          { value: "from ~$69", label: "Cheapest verified compounded semaglutide in our pricing research" },
          { value: "$25–$100", label: "Typical monthly copay when a plan actually covers a GLP-1" },
        ],
      },
      {
        type: "h3",
        text: "Branded, paying cash",
      },
      {
        type: "p",
        text: "Without insurance, branded Wegovy and Zepbound carry list prices around $1,000–$1,350 a month. Manufacturer cash programs (such as direct-from-maker pharmacy options and savings cards) can lower that meaningfully for people who qualify, and are worth checking before assuming branded is out of reach.",
      },
      {
        type: "h3",
        text: "Compounded, paying cash",
      },
      {
        type: "p",
        text: "Compounded semaglutide and tirzepatide — the same molecules made by compounding pharmacies — typically run $100–$300 a month through telehealth, and some semaglutide programs start under $100. This is why cash-pay telehealth exploded: for many people it is the only affordable path. It comes with real caveats, covered in the [compounded vs branded](#compounded) section, but on price alone it is in a different universe from branded.",
      },
      {
        type: "h3",
        text: "With insurance",
      },
      {
        type: "p",
        text: "When a plan actually covers a GLP-1 for weight loss, the out-of-pocket copay commonly lands somewhere around $25–$100 a month — dramatically cheaper than cash. The catch is the word \"when\": coverage for obesity specifically is inconsistent and often requires prior authorization, which we cover next.",
      },
      {
        type: "p",
        text: "One more thing to budget for: the sticker price isn't always the whole cost. Ask what a monthly fee actually includes — some programs bundle the clinician visit, dose increases and shipping, while others add them separately or start with a low intro rate that climbs after a month or two. Lab work, if required, can be extra. The number that matters is the all-in, steady-state monthly cost once any introductory pricing ends, because that's what you'll actually pay for the long haul — and the long haul is what these drugs require.",
      },
      {
        type: "callout",
        title: "Find your real number",
        text: "The cheapest legitimate option depends on your insurance, your state, and which drug you want. Our [cheapest GLP-1 guide](/cheapest-glp1) and [cost calculator](/tools/glp1-cost-calculator) help you compare real cash prices across vetted providers.",
      },
    ],
    readMore: { href: "/guides/glp1-cost-and-insurance", label: "Deep dive: what GLP-1 costs and how to pay less" },
  },
  {
    id: "coverage",
    heading: "Insurance, Medicaid and Medicare coverage",
    summary:
      "Coverage for weight loss is inconsistent: many commercial plans cover semaglutide for diabetes but exclude it for obesity, prior authorization is common, only a minority of state Medicaid programs cover GLP-1 for obesity in 2026, and Medicare historically excluded weight-loss drugs with a limited GLP-1 Bridge demonstration beginning in 2026.",
    blocks: [
      {
        type: "p",
        text: "This is the most confusing part of the entire topic, because the answer genuinely depends on who you are, where you live, and whether the drug is being prescribed for diabetes or obesity. Here is how the three systems work.",
      },
      {
        type: "h3",
        text: "Commercial (employer / marketplace) insurance",
      },
      {
        type: "p",
        text: "The key distinction is diabetes versus obesity. Many commercial plans cover semaglutide as **Ozempic for type 2 diabetes** but exclude **Wegovy for obesity**, treating weight loss as a non-covered benefit. Where obesity coverage does exist, **prior authorization** is common — you typically have to document a qualifying BMI and sometimes prior weight-loss attempts. Always check your plan's formulary and the specific brand before assuming.",
      },
      {
        type: "h3",
        text: "Medicaid (state-by-state)",
      },
      {
        type: "p",
        text: "Medicaid is set state by state, and only a minority of state programs cover GLP-1s for obesity in 2026 — a number that has actually been shrinking as states weigh the budget impact. Diabetes coverage is far more common than obesity coverage. Because this varies so much, we track it per state: see [GLP-1 coverage by state](/glp1-by-state) for your state's Medicaid status.",
      },
      {
        type: "h3",
        text: "Medicare",
      },
      {
        type: "p",
        text: "Medicare has historically been barred from covering drugs used solely for weight loss, though it can cover a GLP-1 when it's prescribed for an approved condition such as type 2 diabetes or, more recently, cardiovascular risk reduction. A limited **Medicare GLP-1 Bridge** demonstration — with a $50/month copay — is slated to begin in 2026, and broader policy is evolving. We keep the details current in our [Medicare GLP-1 coverage guide](/glp1-medicare-coverage).",
      },
      {
        type: "p",
        text: "If your plan requires prior authorization or denies coverage, that isn't always the end of the road. Denials can sometimes be appealed — especially with documentation of a qualifying BMI, related conditions, and prior weight-loss attempts — and a clinician's office can often help with the paperwork. It's worth asking exactly why a claim was denied and whether an appeal, or a different covered product in the same class, is an option before defaulting to paying cash.",
      },
      {
        type: "callout",
        title: "The practical takeaway",
        text: "If you have diabetes, coverage is far more likely. If you're seeking a GLP-1 purely for weight loss, assume you may need to pay cash — which makes the compounded route, and comparing real prices, the difference between access and no access.",
      },
    ],
    readMore: { href: "/glp1-by-state", label: "Check GLP-1 coverage in your state" },
  },
  {
    id: "compounded",
    heading: "Compounded vs branded GLP-1",
    summary:
      "Compounded semaglutide and tirzepatide are the same molecules made by compounding pharmacies instead of the brand manufacturer, at far lower cash prices. They're legal in defined circumstances but are not FDA-approved finished products, and the rules tightened after the 2025 shortage resolution — so sourcing quality is everything.",
    blocks: [
      {
        type: "p",
        text: "This is the decision that trips up the most people, because the price gap is so large that it feels like there must be a catch. There is — but it's narrower and more manageable than the scare stories suggest, if you understand it.",
      },
      {
        type: "h3",
        text: "What \"compounded\" actually means",
      },
      {
        type: "p",
        text: "Compounding is when a licensed pharmacy prepares a medication to order rather than dispensing a manufacturer's finished product. Compounded semaglutide and tirzepatide contain the **same active molecules** as Wegovy and Zepbound, which is why they can produce similar results. What they are **not** is FDA-approved finished drugs: the specific compounded product hasn't been through the FDA's approval and manufacturing-oversight process, so quality depends on the pharmacy.",
      },
      {
        type: "h3",
        text: "The legal picture (and why it shifted)",
      },
      {
        type: "p",
        text: "Compounding is legal in defined circumstances — notably when a drug is in shortage, or for patient-specific needs. During the 2022–2024 GLP-1 shortages, compounded versions proliferated. After the **FDA declared the semaglutide and tirzepatide shortages resolved in 2025**, the rules tightened, and the conditions under which these drugs can legally be compounded narrowed. The FDA has also warned about dosing errors with compounded semaglutide. Compounding hasn't disappeared, but the landscape is more regulated than it was.",
      },
      {
        type: "h3",
        text: "How to think about the trade-off",
      },
      {
        type: "table",
        caption: "Branded vs compounded, honestly",
        headers: ["", "Branded (Wegovy/Zepbound)", "Compounded"],
        rows: [
          ["Cost (cash)", "~$1,000–$1,350/mo", "~$100–$300/mo"],
          ["FDA-approved finished product", "Yes", "No"],
          ["Same active molecule", "Yes", "Yes"],
          ["Insurance", "Sometimes", "Rarely (usually cash-pay)"],
          ["Main risk", "Price", "Sourcing / pharmacy quality"],
        ],
      },
      {
        type: "p",
        text: "It helps to understand why compounded prices can be so much lower. Compounding pharmacies don't carry the manufacturer's research, marketing and brand costs, and they often sell directly through telehealth without insurance middlemen. That's a legitimate cost structure, not inherently a red flag — the price gap reflects a different business model, not necessarily a lower-quality molecule. The quality question is about the specific pharmacy's standards, which is exactly why licensing and certification are the things to check.",
      },
      {
        type: "p",
        text: "The honest bottom line: compounded GLP-1 is a legitimate, far cheaper path for many people, **and** its biggest risk is who makes it. Use providers that work with state-licensed, ideally LegitScript-certified pharmacies and require a real prescriber. Avoid anything sold without a prescription, priced implausibly low with no verifiable pharmacy, or labeled \"research use only\" — those are the actual danger, not compounding itself.",
      },
    ],
    readMore: { href: "/guides/compounded-vs-branded-glp1", label: "Deep dive: compounded vs branded, the honest comparison" },
  },
  {
    id: "how-to-get",
    heading: "How to get GLP-1 safely",
    summary:
      "The safe path is the same whether you go branded or compounded: confirm you're a candidate, choose your lane, vet the prescriber and pharmacy, complete a real medical intake, and escalate slowly. The red flags are anything that skips the prescriber or the licensed pharmacy.",
    blocks: [
      {
        type: "p",
        text: "You can get GLP-1 medication through your own doctor, an in-person weight clinic, or — most commonly now — an online telehealth program. The channel matters less than the safeguards. Here is the process that protects you.",
      },
      {
        type: "ol",
        items: [
          "**Confirm you're a candidate.** The standard criteria are a BMI of 30+, or 27+ with a weight-related condition. A legitimate program screens your history and can decline you. Check first with our [eligibility tool](/tools/am-i-eligible-for-glp1).",
          "**Choose branded or compounded.** Decide whether you want FDA-approved branded medication (often via insurance) or lower-cost compounded (usually cash-pay). This narrows which providers fit.",
          "**Vet the provider and pharmacy.** Require a real licensed prescriber who reviews your case, a state-licensed pharmacy (LegitScript certification is a strong signal), transparent pricing and dosing, and a way to reach a clinician about side effects.",
          "**Complete the medical intake honestly**, including your medications and history, plus any lab work or video visit the clinician requests.",
          "**Start low and escalate slowly**, exactly on schedule and only as tolerated.",
        ],
      },
      {
        type: "h3",
        text: "Red flags — walk away",
      },
      {
        type: "ul",
        items: [
          "Selling GLP-1 with **no prescription** or no real medical review (just a checkout page).",
          "Products labeled **\"research use only\"** or \"not for human consumption.\"",
          "**Unlabeled vials**, no dosing guidance, or no clinician to contact.",
          "Prices that seem too good to be true with **no verifiable, licensed pharmacy**.",
        ],
      },
      {
        type: "h3",
        text: "How we help you choose",
      },
      {
        type: "p",
        text: "We independently review and score GLP-1 programs on the fundamentals we can verify — pricing transparency, pharmacy credentials, clinician access, and real third-party reviews. Start with our [best GLP-1 programs](/best-glp1-providers) ranking, or run a [provider safety check](/tools/glp1-provider-safety-check) on anyone you're considering.",
      },
      {
        type: "callout",
        title: "The one rule that matters most",
        text: "A real prescriber and a licensed pharmacy are non-negotiable. Everything else — branded or compounded, which drug, which provider — is a preference. Those two are a safety floor.",
      },
    ],
    readMore: { href: "/guides/how-to-get-glp1-through-telehealth", label: "Deep dive: getting GLP-1 through telehealth safely" },
  },
  {
    id: "stopping",
    heading: "What happens when you stop",
    summary:
      "Most people regain a large share of lost weight after stopping, because the appetite and metabolic drivers the drug suppressed return. In the STEP 1 extension, participants regained about two-thirds of their lost weight within a year. GLP-1 is best understood as long-term management, not a short course.",
    blocks: [
      {
        type: "p",
        text: "This is the part the headlines often skip, and it's essential to understand before you start. GLP-1 medications don't cure obesity; they treat it, the way blood-pressure medication treats hypertension. Remove the treatment and the condition reasserts itself.",
      },
      {
        type: "h3",
        text: "What the evidence shows",
      },
      {
        type: "p",
        text: "In the STEP 1 trial extension, people who stopped semaglutide regained about **two-thirds of their lost weight within a year**. In the STEP 4 trial, those who switched to placebo regained weight while those who continued semaglutide kept losing or maintained. The tirzepatide SURMOUNT-4 trial showed the same pattern: stopping led to substantial regain, continuing maintained the loss. The mechanism is simple — the drug was suppressing appetite drivers, and when it's gone, they come back.",
      },
      {
        type: "h3",
        text: "What this means for you",
      },
      {
        type: "ul",
        items: [
          "**Plan for the long term.** If affordability only works for a few months, you may regain much of what you lost. Factor ongoing cost into the decision from day one.",
          "**Maintenance doses exist.** Many people stay on a lower maintenance dose long-term rather than the full escalation dose.",
          "**Lifestyle changes made during treatment help**, but on their own they usually don't fully prevent regain — the biology is strong.",
          "**Stopping isn't failure**, but it should be a planned, clinician-guided decision, not an abrupt one.",
        ],
      },
      {
        type: "callout",
        title: "The reframe that helps",
        text: "Think of a GLP-1 like a long-term tool for a chronic condition, not a 12-week challenge. That single shift in expectation prevents the most common disappointment with these drugs.",
      },
    ],
    readMore: { href: "/guides/what-happens-when-you-stop-taking-glp1", label: "Deep dive: what happens when you stop a GLP-1" },
  },
  {
    id: "eligibility",
    heading: "Are you a candidate? Eligibility and BMI",
    summary:
      "The standard criteria are a BMI of 30 or higher, or 27 or higher with a weight-related condition such as high blood pressure, type 2 diabetes or sleep apnea — provided you have no contraindications like a history of medullary thyroid cancer, MEN 2, or pregnancy.",
    blocks: [
      {
        type: "p",
        text: "Eligibility for GLP-1 weight-loss medication is well defined, and it's the first thing any legitimate program checks. Here are the criteria clinicians actually use.",
      },
      {
        type: "table",
        caption: "Standard GLP-1 weight-loss eligibility",
        headers: ["Criterion", "Threshold"],
        rows: [
          ["BMI alone", "30 or higher (obesity)"],
          ["BMI with a weight-related condition", "27 or higher (overweight) plus e.g. hypertension, type 2 diabetes, sleep apnea, high cholesterol"],
          ["Age", "Adults (some drugs have adolescent approvals; this guide focuses on adults)"],
          ["No contraindications", "No personal/family history of medullary thyroid carcinoma or MEN 2; not pregnant/trying to conceive; caution with prior pancreatitis"],
        ],
      },
      {
        type: "p",
        text: "BMI isn't a perfect measure — it doesn't distinguish muscle from fat, and it reads differently across body types — but it remains the standard threshold insurers and prescribers use. If you're near the cutoffs, a weight-related condition can be the deciding factor, which is one reason a thorough intake matters.",
      },
      {
        type: "callout",
        title: "Check in two minutes",
        text: "Our [eligibility / BMI checker](/tools/am-i-eligible-for-glp1) walks you through the same criteria a program would, so you know where you stand before you apply.",
      },
    ],
    readMore: { href: "/tools/am-i-eligible-for-glp1", label: "Check if you're eligible for GLP-1" },
  },
  {
    id: "lifestyle",
    heading: "Diet, muscle and lifestyle on GLP-1",
    summary:
      "Because GLP-1 drugs work by making you eat less, what you eat matters more, not less. Prioritizing protein and resistance training protects muscle, reduces side effects, and improves the quality of the weight you lose.",
    blocks: [
      {
        type: "p",
        text: "A common misconception is that GLP-1 medication makes diet irrelevant. The opposite is closer to the truth: because you're eating less, every bite has to count more. The medication handles the calorie deficit; your choices determine whether that deficit costs you muscle and leaves you depleted, or leaves you strong and well-nourished.",
      },
      {
        type: "h3",
        text: "Protein first",
      },
      {
        type: "p",
        text: "When appetite drops sharply, protein is the first thing people under-eat — and protein is exactly what protects muscle during weight loss. Prioritizing protein at each meal helps preserve lean mass, keeps you fuller, and often reduces nausea compared with heavy, high-fat meals.",
      },
      {
        type: "h3",
        text: "Keep (or build) muscle",
      },
      {
        type: "p",
        text: "Rapid weight loss of any kind costs some muscle unless you actively protect it. Resistance training a few times a week, combined with adequate protein, shifts the composition of what you lose toward fat and away from muscle — which matters for strength, metabolism and how you look and feel at the end.",
      },
      {
        type: "h3",
        text: "Hydration, fiber, and the basics",
      },
      {
        type: "ul",
        items: [
          "**Hydration** blunts side effects and is easy to neglect when you're not eating much.",
          "**Fiber** and adequate fluids help with the constipation that's common on these drugs.",
          "**Smaller, lower-fat meals** are easier to tolerate and reduce nausea and reflux.",
          "**Sleep and stress** still shape appetite and results — the medication helps, it doesn't override everything.",
        ],
      },
      {
        type: "callout",
        title: "The mindset that works",
        text: "Use the appetite reduction as a window to build sustainable eating habits, not to eat as little as possible. The people who do best treat the drug as a tool that makes good habits easy, not a license to ignore them.",
      },
    ],
    readMore: { href: "/guides/what-to-eat-on-glp1-medications", label: "Deep dive: what to eat on GLP-1 medications" },
  },
  {
    id: "beyond-weight-loss",
    heading: "Beyond weight loss: the other proven benefits",
    summary:
      "GLP-1 drugs started as diabetes treatments, and their benefits extend well past the scale. Semaglutide cut major cardiovascular events by 20% in the SELECT trial, the class powerfully lowers blood sugar, and newer approvals and trials cover sleep apnea, kidney and liver disease.",
    blocks: [
      {
        type: "p",
        text: "It's easy to think of these drugs as weight-loss medications that happen to have come from diabetes care. The more accurate picture is that they're metabolic medications with broad effects, and the weight loss is one of several. This matters for two reasons: it changes the risk-benefit calculation, and it's often the reason a drug gets covered by insurance.",
      },
      {
        type: "h3",
        text: "Cardiovascular benefit",
      },
      {
        type: "p",
        text: "The landmark here is the SELECT trial, which found that semaglutide reduced major cardiovascular events — heart attack, stroke, and cardiovascular death — by about **20%** in adults with obesity and established heart disease, even without diabetes. That's a striking result: it means the drug isn't only changing how people look, it's changing hard health outcomes. It's also why semaglutide has gained approval for cardiovascular risk reduction in certain patients, which can open insurance doors that pure weight-loss indications don't.",
      },
      {
        type: "h3",
        text: "Blood sugar and type 2 diabetes",
      },
      {
        type: "p",
        text: "This is where the class began. As Ozempic, Mounjaro and their siblings, these drugs produce strong reductions in A1C (a measure of long-term blood sugar) alongside weight loss, which is a powerful combination in type 2 diabetes because weight and blood sugar are so intertwined. If you have type 2 diabetes, a GLP-1 is often both more effective and far more likely to be covered.",
      },
      {
        type: "h3",
        text: "Emerging and newer indications",
      },
      {
        type: "p",
        text: "The list of conditions where GLP-1 drugs show benefit keeps growing. Tirzepatide has gained approval for moderate-to-severe obstructive sleep apnea in adults with obesity. Semaglutide has shown kidney benefits in trials of people with type 2 diabetes and chronic kidney disease. Both drugs are being studied in metabolic liver disease (MASH/NASH), and researchers are exploring effects on conditions from PCOS to addiction. We flag these as emerging because the evidence is still maturing in several areas — but the direction is clear: this is a metabolic drug class, not a vanity one.",
      },
      {
        type: "callout",
        title: "Why this matters for access",
        text: "If you have a qualifying condition — type 2 diabetes, established heart disease, or sleep apnea — your path to coverage and a prescription is often far easier than seeking a GLP-1 for weight loss alone. It's worth raising any of these with your clinician.",
      },
    ],
    readMore: { href: "/glp1-statistics", label: "See the full GLP-1 statistics and trial data" },
  },
  {
    id: "vs-other-options",
    heading: "How GLP-1 compares to other weight-loss options",
    summary:
      "GLP-1 drugs produce far more weight loss than older medications (typically 3–10%) and approach the range of bariatric surgery for some people, while being less invasive. Diet and exercise alone rarely produce more than a few percent of durable loss because biology defends bodyweight.",
    blocks: [
      {
        type: "p",
        text: "To understand why GLP-1 drugs caused such a shift, it helps to see them next to the alternatives. For decades, the options for significant weight loss were limited and, frankly, disappointing.",
      },
      {
        type: "h3",
        text: "Versus older weight-loss medications",
      },
      {
        type: "p",
        text: "Before GLP-1s, prescription weight-loss drugs — phentermine, orlistat, naltrexone-bupropion (Contrave), phentermine-topiramate (Qsymia) — typically produced in the range of about 3–10% weight loss, often with tolerability or safety limitations. GLP-1 drugs roughly doubled or tripled what the best older options achieved, which is why they rapidly became first-line. Liraglutide, the oldest GLP-1, sits at the lower end (~8%) and is in some ways the bridge between the two eras.",
      },
      {
        type: "h3",
        text: "Versus bariatric surgery",
      },
      {
        type: "p",
        text: "Bariatric surgery remains the most powerful and durable intervention, often producing roughly 25–30% weight loss with strong long-term maintenance. What's remarkable about the newest GLP-1 drugs is that, for some people, their results have started to approach that range — without surgery, anesthesia, or permanent anatomical changes. Surgery is still the right answer for many, and the two aren't mutually exclusive, but the gap has narrowed in a way that would have seemed impossible a decade ago.",
      },
      {
        type: "h3",
        text: "Versus diet and exercise alone",
      },
      {
        type: "p",
        text: "This is the comparison that generates the most judgment and the least understanding. Lifestyle change alone typically produces only a few percent of sustained weight loss for most people with obesity, not because they lack discipline but because the body actively defends its weight — lowering energy expenditure and ramping up hunger hormones as you lose. GLP-1 drugs work precisely because they act on those defenses. The honest framing is that they don't replace lifestyle change; they make it biologically possible to sustain.",
      },
      {
        type: "table",
        caption: "Rough comparison of weight-loss approaches",
        headers: ["Approach", "Typical weight loss", "Notes"],
        rows: [
          ["Diet & exercise alone", "~3–5% (often regained)", "Biology defends bodyweight"],
          ["Older weight-loss drugs", "~3–10%", "Tolerability/safety limits"],
          ["Liraglutide (Saxenda)", "~8%", "Daily GLP-1, oldest in class"],
          ["Semaglutide (Wegovy)", "~15%", "Proven CV benefit"],
          ["Tirzepatide (Zepbound)", "~15–21%", "Highest of approved drugs"],
          ["Bariatric surgery", "~25–30%", "Most durable; invasive"],
        ],
      },
    ],
    readMore: { href: "/vs/semaglutide-vs-tirzepatide", label: "Compare the drugs head-to-head" },
  },
  {
    id: "injecting",
    heading: "Injecting GLP-1: the practical basics",
    summary:
      "Most GLP-1 drugs are a once-weekly (or, for Saxenda, once-daily) subcutaneous injection into the abdomen, thigh or upper arm, taken on the same day each week, with sites rotated. Pens and vials differ in handling, and most require refrigeration.",
    blocks: [
      {
        type: "p",
        text: "The idea of a weekly injection intimidates a lot of people, and then almost everyone is surprised by how minor it turns out to be. The needles are tiny, the injection is subcutaneous (into the fat just under the skin, not into muscle or vein), and it takes seconds. Here are the practical basics.",
      },
      {
        type: "ul",
        items: [
          "**Where:** the abdomen (a couple of inches from the navel), the front of the thigh, or the back of the upper arm. Rotate sites to avoid irritation.",
          "**When:** once weekly for semaglutide and tirzepatide, on the same day each week (you can adjust the day if needed, within guidance). Saxenda (liraglutide) is once daily.",
          "**Pen vs vial:** branded products typically come as pre-filled pens; many compounded products come as vials you draw up with a syringe, which is why clear dosing instructions from the provider matter so much.",
          "**Storage:** most of these medications require refrigeration, with limited time allowed at room temperature — follow the specific product's instructions.",
          "**Missed dose:** there's standard guidance on what to do if you miss a weekly dose; your provider or the product instructions will specify the window — don't double up without guidance.",
        ],
      },
      {
        type: "callout",
        title: "The compounded-vial caveat",
        text: "If you're using a compounded vial rather than a pre-filled pen, correct measuring is essential — the FDA has specifically warned about dosing errors with compounded semaglutide. A legitimate provider gives you clear, specific dosing instructions and a clinician to ask. If you don't have both, that's a red flag.",
      },
    ],
    readMore: { href: "/guides/glp1-dosing-schedule-explained", label: "Deep dive: dosing schedules explained" },
  },
  {
    id: "troubleshooting",
    heading: "Plateaus, switching and troubleshooting",
    summary:
      "Plateaus are normal and expected as your body reaches a new set point for a given dose. Options include confirming you're on an effective dose, tightening protein and resistance training, patience, and — with a clinician — adjusting the dose or switching drugs. A minority of people respond poorly and may do better on a different agent.",
    blocks: [
      {
        type: "p",
        text: "Even when a GLP-1 is working well, the journey isn't a smooth downward line. Plateaus, side-effect flares, affordability crunches and the occasional poor response are all common, and most are manageable if you know what you're looking at.",
      },
      {
        type: "h3",
        text: "Hitting a plateau",
      },
      {
        type: "p",
        text: "After the main weight-loss window, the scale slows and then stalls. This is not failure — it's your body settling at a new set point for your current dose, and it happened in the trials too. Before assuming the drug has stopped working, check the fundamentals: are you actually on an effective maintenance dose, or did you stall the escalation early? Has protein slipped? Has resistance training fallen off? Sometimes a plateau is the body's genuine new equilibrium; sometimes it's a sign to revisit the dose with your clinician.",
      },
      {
        type: "h3",
        text: "Switching between GLP-1 drugs",
      },
      {
        type: "p",
        text: "Switching — for example from semaglutide to tirzepatide for more effect, or the reverse for tolerability or cost — is common and done under clinician guidance. Because the drugs differ in receptors and potency, someone who responds modestly or tolerates one poorly may do better on another. This isn't something to improvise; the dose equivalencies and escalation need to be managed, but it's a normal part of finding what works.",
      },
      {
        type: "h3",
        text: "If you respond poorly",
      },
      {
        type: "p",
        text: "A minority of people lose little even on an adequate dose. If that's you, it's worth a structured conversation with your clinician about dose, adherence, the possibility of switching agents, and whether something else is driving the weight. Non-response is uncommon, but it's real, and it's not a moral failing.",
      },
      {
        type: "h3",
        text: "If you can't afford to continue",
      },
      {
        type: "ul",
        items: [
          "Check **manufacturer cash programs** for branded drugs — they can lower the price meaningfully.",
          "Compare **compounded options** and real cash prices across vetted providers in our [cheapest GLP-1 guide](/cheapest-glp1).",
          "Re-check **coverage** — a diagnosis like diabetes or sleep apnea can change what your plan will pay for.",
          "Discuss a **maintenance dose** with your clinician, which may be lower (and cheaper) than the full escalation dose.",
        ],
      },
      {
        type: "callout",
        title: "The affordability reality",
        text: "Because stopping usually means regaining much of the weight, a sustainable monthly cost often matters more than squeezing out the last percentage point of efficacy. Factor the long game into the choice.",
      },
    ],
    readMore: { href: "/cheapest-glp1", label: "Find the cheapest legitimate GLP-1 options" },
  },
  {
    id: "myths",
    heading: "Common myths and misconceptions",
    summary:
      "GLP-1 drugs attract a lot of noise. The biggest myths: that they're \"the easy way out,\" that you can stop once you hit goal, that they ruin your metabolism, that compounded always means dangerous, and that natural \"GLP-1 supplements\" do the same thing. None hold up.",
    blocks: [
      {
        type: "p",
        text: "Few health topics generate as much confident misinformation as this one. Here are the misconceptions worth clearing up, with the honest version of each.",
      },
      {
        type: "h3",
        text: "\"It's the easy way out\"",
      },
      {
        type: "p",
        text: "This assumes willpower should be enough and medication is cheating. But obesity is a biological condition in which the body defends its weight through hormones and brain circuitry. Treating that biology with medication is no more \"cheating\" than treating high blood pressure or diabetes with a drug. The people on these medications still have to change how they eat, protect muscle, and manage side effects.",
      },
      {
        type: "h3",
        text: "\"You stop once you hit your goal weight\"",
      },
      {
        type: "p",
        text: "This is the single most expensive misconception, because it leads people to plan for a few months rather than the long term. As the evidence on stopping shows, most people regain a large share of lost weight within a year of quitting. These drugs manage a chronic condition; they don't cure it.",
      },
      {
        type: "h3",
        text: "\"It wrecks your metabolism\"",
      },
      {
        type: "p",
        text: "All weight loss — by any method — reduces energy expenditure somewhat, because a smaller body burns fewer calories and the body adapts. That's not unique to GLP-1 drugs. What you can control is how much muscle you keep: protein and resistance training protect lean mass and blunt the metabolic slowdown. The drug doesn't \"ruin\" your metabolism; losing weight changes it, as it would with any approach.",
      },
      {
        type: "h3",
        text: "\"Compounded is automatically fake or dangerous\"",
      },
      {
        type: "p",
        text: "Compounded semaglutide and tirzepatide contain the same active molecules as the branded drugs and are made by licensed pharmacies in defined circumstances. The real risk is sourcing — unlicensed sellers, no prescriber, \"research use only\" labeling. A reputable provider working with a state-licensed, ideally LegitScript-certified pharmacy is a very different thing from a sketchy website. Don't confuse the two.",
      },
      {
        type: "h3",
        text: "\"Natural GLP-1 supplements work the same way\"",
      },
      {
        type: "p",
        text: "Supplements and foods marketed to \"boost GLP-1 naturally\" do not come close to the effect of the medications, which deliver a long-acting engineered molecule at a therapeutic dose. There's nothing wrong with eating in ways that support satiety, but it isn't equivalent to the drugs, and products implying otherwise are marketing, not medicine.",
      },
      {
        type: "h3",
        text: "\"Ozempic face\" means the drug damages your face",
      },
      {
        type: "p",
        text: "The facial-volume loss people call \"Ozempic face\" is simply what rapid weight loss does to the face — you lose fat there too. It's a consequence of losing weight quickly, not a specific toxic effect of the drug, and it happens with significant weight loss by any means.",
      },
    ],
    readMore: { href: "/glp1-answers", label: "More straight answers to common GLP-1 questions" },
  },
  {
    id: "future",
    heading: "The future: oral GLP-1 and the pipeline",
    summary:
      "The next wave includes oral GLP-1 options and even more potent combinations. Oral semaglutide already exists (Rybelsus), higher-dose oral and new oral agents are in development, next-generation combinations are in trials, and retatrutide is advancing — but waiting for the perfect future drug usually costs you the benefit you could have now.",
    blocks: [
      {
        type: "p",
        text: "This is a fast-moving field, and it's worth knowing what's coming — both so you understand your options and so you don't fall into the trap of endlessly waiting for the next, better thing.",
      },
      {
        type: "h3",
        text: "Oral GLP-1",
      },
      {
        type: "p",
        text: "An oral option already exists: Rybelsus is oral semaglutide, taken as a daily tablet on an empty stomach. Higher-dose oral semaglutide for weight management and entirely new oral agents are in development, which could eventually make needle-free treatment mainstream. Orals are attractive for convenience, though injections currently remain the most potent delivery for weight loss.",
      },
      {
        type: "h3",
        text: "More potent combinations",
      },
      {
        type: "p",
        text: "Beyond the dual-agonist tirzepatide, the pipeline includes next-generation combination molecules and the triple-agonist retatrutide, which produced the largest average weight loss reported for the class in phase 2 and is advancing through later-stage trials. If approved, these could push the ceiling higher still. But \"if approved\" is doing a lot of work — timelines and outcomes are uncertain.",
      },
      {
        type: "h3",
        text: "Should you wait?",
      },
      {
        type: "p",
        text: "Almost always, no. There will always be a more potent or more convenient drug on the horizon, and the health benefits of treating obesity now — on an approved, available, affordable option — generally outweigh waiting for a future product that may be years away and whose real-world results and price are unknown. The best drug is usually the effective one you can actually access and sustain today.",
      },
      {
        type: "callout",
        title: "How we keep this current",
        text: "We update this guide and our [statistics page](/glp1-statistics) as trials report and approvals land, and our daily checks keep the figures and links accurate. The field moves fast; the principles above don't.",
      },
    ],
    readMore: { href: "/medications/retatrutide", label: "Read about retatrutide, the triple agonist" },
  },
  {
    id: "who-its-for",
    heading: "Who GLP-1 is right for — and who it isn't",
    summary:
      "GLP-1 therapy fits adults who meet the BMI criteria, have no contraindications, and can commit to it as long-term treatment. It's a poor fit for people seeking a quick fix, those who can't sustain the cost, and anyone with the specific medical histories that make it unsafe.",
    blocks: [
      {
        type: "p",
        text: "Effective medicine is still the wrong choice for the wrong person. Beyond the formal eligibility criteria, it helps to think honestly about whether GLP-1 therapy fits your situation and expectations.",
      },
      {
        type: "h3",
        text: "GLP-1 is often a strong fit if…",
      },
      {
        type: "ul",
        items: [
          "You meet the criteria — **BMI 30+, or 27+ with a weight-related condition** — and have struggled to lose weight or keep it off through lifestyle alone.",
          "You have a **related condition** like type 2 diabetes, established heart disease, or sleep apnea, where the benefits extend beyond weight and coverage is more likely.",
          "You can approach it as **long-term treatment**, not a short course, and have a realistic plan for ongoing cost.",
          "You're willing to **pair it with protein and resistance training** to protect muscle and get the best-quality result.",
        ],
      },
      {
        type: "h3",
        text: "GLP-1 is probably not the right choice if…",
      },
      {
        type: "ul",
        items: [
          "You have a **contraindication** — a personal or family history of medullary thyroid carcinoma or MEN 2, or you're pregnant or trying to conceive.",
          "You're looking for a **quick fix** to drop weight for an event and then stop — the weight typically comes back.",
          "You **can't sustain the cost**, and stopping after a few months would mean regaining most of the loss.",
          "You have a **history of pancreatitis** or certain eating disorders, which need careful clinician evaluation first.",
        ],
      },
      {
        type: "p",
        text: "None of this is a substitute for a real clinical assessment — it's a gut check. The programs we rate highly all run a proper intake precisely because the right answer is individual. If you're on the fence, our [eligibility checker](/tools/am-i-eligible-for-glp1) and [match quiz](/find-your-match) are a low-pressure place to start.",
      },
      {
        type: "callout",
        title: "A note on body image and motivation",
        text: "These drugs are medical treatment for a medical condition, not cosmetic tools, and they work best when the goal is health and sustainability rather than a number for a deadline. The mindset you bring matters as much as the molecule.",
      },
    ],
    readMore: { href: "/find-your-match", label: "Take the 2-minute match quiz" },
  },
  {
    id: "first-90-days",
    heading: "A realistic first 90 days on GLP-1",
    summary:
      "The first three months are mostly about escalating the dose and building habits, not maximum weight loss. Expect appetite changes early, manageable side effects around dose increases, and steadier loss as you reach an effective dose by month three.",
    blocks: [
      {
        type: "p",
        text: "Knowing what a normal first three months feels like prevents the two most common mistakes: panicking when results are slow, and quitting when early side effects hit. Here's a grounded walkthrough.",
      },
      {
        type: "h3",
        text: "Weeks 1–2: starting out",
      },
      {
        type: "p",
        text: "You begin at the starter dose. Many people notice the \"food noise\" quieting and portions shrinking within days — the most striking early change for most. Some mild nausea or fullness is common. The scale may move a little, partly water, but this isn't the therapeutic dose yet, so don't judge the drug by it. The job this week is simply to tolerate the start and build the habit of a consistent dosing day.",
      },
      {
        type: "h3",
        text: "Weeks 3–6: first increases",
      },
      {
        type: "p",
        text: "As the dose steps up, appetite suppression deepens and so can side effects — nausea tends to flare in the days after each increase, then settle. This is the window to lock in the basics: protein at every meal, hydration, smaller and lower-fat portions, and some resistance training. If side effects are rough, this is also when a good clinician will slow the escalation rather than push through. Weight loss usually becomes more noticeable here.",
      },
      {
        type: "h3",
        text: "Weeks 7–12: finding your dose",
      },
      {
        type: "p",
        text: "By the end of the first three months, most people are approaching or on an effective dose and seeing a steadier downward trend. You'll have a feel for how the drug affects you, which foods sit poorly, and what your sustainable routine looks like. This is where the real weight-loss window opens — the bigger results are still ahead, over months four through nine.",
      },
      {
        type: "callout",
        title: "What success at 90 days looks like",
        text: "Not a dramatic number on the scale, but: you're on a dose that works for you, side effects are manageable, you've built protein and movement habits, and the trend is heading the right way. Nail that, and the results compound over the following months.",
      },
    ],
    readMore: { href: "/guides/glp1-results-timeline", label: "Deep dive: the full results timeline" },
  },
  {
    id: "questions-to-ask",
    heading: "Questions to ask before you start",
    summary:
      "Before paying anyone, confirm the essentials: who the prescriber and pharmacy are, exactly what's in the price, whether it's branded or compounded, how dosing and side-effect support work, and what happens if you need to stop or switch.",
    blocks: [
      {
        type: "p",
        text: "Whether you go through your own doctor or an online program, these are the questions that separate a legitimate, well-run provider from a checkout page with a doctor's name attached. Bring them to any provider you're considering.",
      },
      {
        type: "ol",
        items: [
          "**Who is the prescriber, and are they licensed in my state?** A real, licensed clinician should review your history — not a rubber-stamp.",
          "**What pharmacy fills this, and is it state-licensed?** For compounded products, LegitScript certification is a strong signal.",
          "**Is this branded or compounded, and which molecule** — semaglutide or tirzepatide?",
          "**What exactly does the monthly price include** — medication, clinician visits, shipping, dose increases? Watch for intro rates that jump later.",
          "**How do I reach a clinician if I have side effects**, and how fast?",
          "**What are the dosing instructions**, especially if it's a compounded vial I measure myself?",
          "**What happens if the medication's shortage status or the rules change** — will my access or price change?",
          "**What's the plan for maintenance**, and what happens if I need to pause, stop, or switch drugs?",
        ],
      },
      {
        type: "p",
        text: "If a provider is cagey about any of these — especially the prescriber, the pharmacy, or the all-in price — treat that as the answer. Transparency on exactly these points is what we weight most heavily when we score programs.",
      },
      {
        type: "callout",
        title: "Run a safety check",
        text: "Not sure about a provider you've found? Our [provider safety check](/tools/glp1-provider-safety-check) walks you through the same credential and transparency signals we use, so you can vet anyone before you pay.",
      },
    ],
    readMore: { href: "/best-glp1-providers", label: "See the programs that pass these checks" },
  },
  {
    id: "specific-situations",
    heading: "GLP-1 for specific situations and groups",
    summary:
      "GLP-1 therapy plays out differently depending on your situation. It's often easiest and most beneficial with type 2 diabetes, is increasingly used in PCOS and prediabetes, demands extra attention to muscle in older adults, and is sometimes used for weight regain after bariatric surgery — all best guided by a clinician who knows your history.",
    blocks: [
      {
        type: "p",
        text: "The general guidance in this article applies to most people, but a few common situations change the calculus enough to be worth calling out specifically.",
      },
      {
        type: "h3",
        text: "If you have type 2 diabetes",
      },
      {
        type: "p",
        text: "This is the most favorable scenario in several ways. The drugs lower blood sugar powerfully while also driving weight loss, the two reinforcing each other, and coverage is far more likely because diabetes is an on-label, widely reimbursed indication. The specific products and dose caps differ (Ozempic and Mounjaro for diabetes versus Wegovy and Zepbound for weight), so your clinician will match the drug to the primary goal. If you have type 2 diabetes and obesity, a GLP-1 is frequently the single most useful medication available to you.",
      },
      {
        type: "h3",
        text: "If you have prediabetes or metabolic syndrome",
      },
      {
        type: "p",
        text: "Significant weight loss meaningfully reduces the risk of progressing from prediabetes to type 2 diabetes, and GLP-1 drugs are among the most effective ways to achieve that weight loss. For people with metabolic syndrome — the cluster of high blood pressure, abnormal cholesterol, high blood sugar and central weight — the metabolic benefits reach beyond the scale. This is worth discussing with your clinician as part of the bigger risk picture, not just as a weight question.",
      },
      {
        type: "h3",
        text: "If you have PCOS",
      },
      {
        type: "p",
        text: "Polycystic ovary syndrome is closely tied to insulin resistance and weight, and many people with PCOS find that weight loss improves symptoms. GLP-1 drugs are increasingly used in this context, though weight management is the relevant approved lane rather than PCOS itself, so it's a conversation to have with a clinician who understands both. As always, these drugs are contraindicated in pregnancy and for those trying to conceive, which is an important consideration in PCOS care.",
      },
      {
        type: "h3",
        text: "If you're an older adult",
      },
      {
        type: "p",
        text: "The benefits still apply, but muscle preservation becomes even more important with age, because older adults have less to spare and lose it more easily. Prioritizing protein and resistance training isn't optional here — it's central to doing this safely. Hydration and side-effect monitoring also deserve extra attention. None of this rules out GLP-1 therapy; it just raises the importance of doing it thoughtfully with clinical oversight.",
      },
      {
        type: "h3",
        text: "If you've had bariatric surgery",
      },
      {
        type: "p",
        text: "Some people regain weight years after bariatric surgery, and GLP-1 medication is increasingly used to address that regain. This is an emerging, individualized use that should be managed by a clinician familiar with your surgical history, since anatomy and nutrition after surgery add considerations that don't apply to everyone else.",
      },
      {
        type: "callout",
        title: "The common thread",
        text: "Each of these situations rewards a clinician who takes a full history rather than a one-size-fits-all checkout. It's another reason the quality of the provider — not just the price — matters so much.",
      },
    ],
    readMore: { href: "/best-glp1-providers", label: "See programs with real clinical oversight" },
  },
  {
    id: "choosing",
    heading: "How to choose the right GLP-1 path for you",
    summary:
      "The best choice depends on your priority: maximum results (tirzepatide), proven track record and heart benefit (semaglutide), lowest cost (compounded, or generic liraglutide), or insurance coverage (whatever your plan covers for your situation). Match the drug and the provider to what matters most to you.",
    blocks: [
      {
        type: "p",
        text: "There is no single \"best\" GLP-1 — there's the best one for your priority. Here's a simple way to decide.",
      },
      {
        type: "table",
        caption: "Match your priority to a starting point",
        headers: ["If your priority is…", "Lean toward…", "Why"],
        rows: [
          ["Maximum weight loss", "Tirzepatide (Zepbound)", "Highest average loss of approved drugs (~20–23%)"],
          ["Longest track record + heart benefit", "Semaglutide (Wegovy)", "Most data; proven 20% cardiovascular risk reduction (SELECT)"],
          ["Lowest cost", "Compounded, or generic liraglutide", "~$100–$300/mo compounded; liraglutide increasingly generic"],
          ["Using insurance", "Whatever your plan covers", "Often easier if you have type 2 diabetes"],
          ["Avoiding needles daily", "Any weekly drug (not Saxenda)", "Semaglutide/tirzepatide are once-weekly"],
        ],
      },
      {
        type: "p",
        text: "Once you know the drug, the provider is the other half of the decision. We score GLP-1 programs on pricing transparency, pharmacy credentials, clinician access, and real third-party reviews — so you're comparing on what's verifiable, not marketing.",
      },
      {
        type: "ul",
        items: [
          "See the [best GLP-1 programs](/best-glp1-providers), scored and ranked.",
          "Find the [cheapest GLP-1 options](/cheapest-glp1) without insurance.",
          "[Compare any two programs](/compare) head-to-head.",
          "Read the [full statistics and facts](/glp1-statistics), all cited.",
        ],
      },
      {
        type: "callout",
        title: "A final honest word",
        text: "GLP-1 medications are the most effective weight-loss tools we've ever had, and they're genuinely life-changing for many people. They're also a long-term commitment with real costs and real side effects. Go in informed, insist on a real prescriber and a licensed pharmacy, and treat the medication as one part of a plan — and you give yourself the best possible shot at a result that lasts.",
      },
    ],
    readMore: { href: "/best-glp1-providers", label: "See the GLP-1 programs we rate highest" },
  },
  {
    id: "glossary",
    heading: "GLP-1 glossary: key terms explained",
    summary:
      "A plain-language reference for the terms that come up most when researching GLP-1 weight-loss medication — from agonist and titration to compounded, 503A pharmacies and off-label use.",
    blocks: [
      {
        type: "p",
        text: "GLP-1 care comes with a lot of jargon. Here are the terms you'll run into most, in plain English.",
      },
      {
        type: "ul",
        items: [
          "**GLP-1 (glucagon-like peptide-1):** a natural gut hormone released after eating that reduces appetite, slows stomach emptying and prompts insulin release. The drugs mimic it.",
          "**Receptor agonist:** a molecule that switches a receptor \"on.\" A GLP-1 receptor agonist activates the GLP-1 receptor to produce the hormone's effects.",
          "**GIP and glucagon:** two other metabolic hormone pathways. Tirzepatide adds GIP (dual agonist); retatrutide adds glucagon too (triple agonist), which is why they can produce more weight loss.",
          "**Titration / escalation:** stepping the dose up gradually over weeks so the body adapts and side effects stay manageable.",
          "**Maintenance dose:** the ongoing dose you settle on after escalation, used to maintain the weight loss long-term.",
          "**Compounded medication:** a drug prepared by a licensed pharmacy rather than dispensed as the manufacturer's finished product — the same molecule, but not an FDA-approved finished product.",
          "**503A / 503B pharmacies:** categories of compounding pharmacies in the U.S.; 503A serve individual patient prescriptions, 503B are larger \"outsourcing facilities.\" Licensing and certification (e.g. LegitScript) signal legitimacy.",
          "**Off-label use:** prescribing an approved drug for a use it isn't specifically approved for — for example, prescribing Ozempic (approved for diabetes) for weight loss.",
          "**BMI (body mass index):** a weight-for-height number used as the standard threshold for eligibility (30+, or 27+ with a related condition).",
          "**MACE (major adverse cardiovascular events):** the composite of heart attack, stroke and cardiovascular death used in trials like SELECT.",
          "**Set point:** the weight your body tends to defend through hunger and metabolism — the thing GLP-1 drugs help lower.",
          "**Prior authorization:** an insurer's requirement to approve coverage before paying, common for GLP-1s prescribed for weight loss.",
        ],
      },
      {
        type: "p",
        text: "Want a term defined that isn't here? Our full [GLP-1 glossary](/glp1-glossary) covers more, and the [quick answers hub](/glp1-answers) tackles the questions people ask most.",
      },
    ],
    readMore: { href: "/glp1-glossary", label: "Browse the full GLP-1 glossary" },
  },
  // __SECTIONS_END__
];
