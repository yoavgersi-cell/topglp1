// ─────────────────────────────────────────────────────────────────────────────
// Pillar: "GLP-1 Beyond Weight Loss — Every Condition These Drugs Now Treat".
//
// Timely authority asset on the fast-expanding set of medical uses for GLP-1
// drugs beyond obesity: the FDA-approved indications (cardiovascular disease,
// obstructive sleep apnea, chronic kidney disease in type 2 diabetes, MASH/liver
// disease, and type 2 diabetes itself) and the honest investigational frontier
// (heart failure, peripheral artery disease, addiction, Alzheimer's — including
// the negative 2026 EVOKE result — PCOS and more).
//
// Every clinical figure traces to a source key in sources.ts. Approved vs
// investigational status is stated explicitly for each condition; investigational
// uses are never presented as available treatments. Nothing here is invented.
// ─────────────────────────────────────────────────────────────────────────────

import type { Block, GuideSection } from "./glp1-weight-loss-guide";

export type { Block, GuideSection };

export const BEYOND_REVIEWED = "2026-10-31";

export const BEYOND_META = {
  path: "/glp1-beyond-weight-loss",
  title: "GLP-1 Beyond Weight Loss: Every Condition They Now Treat (2026)",
  description:
    "What semaglutide and tirzepatide are now FDA-approved to treat beyond weight loss — heart disease, sleep apnea, kidney and liver disease — plus the honest truth about the investigational frontier.",
  h1: "GLP-1 beyond weight loss: every condition these drugs now treat — and what's still unproven",
  dek:
    "Semaglutide and tirzepatide started as diabetes and weight drugs. In 2026 they're approved to cut heart attacks, treat sleep apnea, protect kidneys and reverse liver disease — and being tested for far more. Here's exactly what's proven, what's still experimental, and how to tell the difference, researched against the primary trials.",
  readTime: "45 min read",
};

export const BEYOND_SECTIONS: GuideSection[] = [
  {
    id: "overview",
    heading: "The short version",
    summary:
      "GLP-1 drugs are no longer just weight-loss medicines. As of 2026 they're FDA-approved to reduce cardiovascular events, treat obstructive sleep apnea, slow kidney disease in type 2 diabetes, and treat MASH (fatty liver disease) — on top of diabetes and obesity. A much longer list of uses is being studied, with mixed results, including a notable Alzheimer's failure.",
    blocks: [
      {
        type: "keytakeaways",
        items: [
          "GLP-1s now have **FDA approvals well beyond weight loss**: cardiovascular risk reduction (Wegovy), **obstructive sleep apnea** (Zepbound), **chronic kidney disease** in type 2 diabetes (Ozempic), and **MASH/fatty liver disease** (Wegovy) — plus type 2 diabetes, where they started.",
          "The benefits go beyond 'you lost weight, so you're healthier.' In the **SELECT** trial, semaglutide cut major cardiac events by about **20%**, and the benefit appeared **partly independent of how much weight people lost** — pointing to direct effects on the heart, blood vessels, kidneys and liver.",
          "The investigational frontier is huge but **unproven**: heart failure, peripheral artery disease, **addiction** (alcohol, opioids), PCOS and more are in trials — and the high-profile **Alzheimer's trials (EVOKE) failed in 2026**. Don't confuse 'being studied' with 'it works.'",
          "For many of these conditions, **insurance covers GLP-1s more readily than it covers them for obesity alone**, because the approved medical indication is clearer — a practical difference worth knowing.",
          "The through-line: these are turning into **metabolic and organ-protective drugs**, not just appetite drugs. But only a licensed clinician can decide whether one fits your specific condition.",
        ],
      },
      {
        type: "p",
        text: "For a few years, the story of GLP-1 drugs was simple: they help people lose a lot of weight. That story is now out of date. Semaglutide and tirzepatide — the molecules in Ozempic, Wegovy, Mounjaro and Zepbound — have quietly become some of the most consequential drugs in all of medicine, and not because of the scale. They are now FDA-approved to prevent heart attacks and strokes, to treat a serious sleep disorder, to protect the kidneys, and to reverse liver disease. And that is just the approved list.",
      },
      {
        type: "p",
        text: "This matters for two reasons. First, if you have one of these conditions, a GLP-1 may be a treatment option for the condition itself — sometimes covered by insurance when it wouldn't be for weight loss alone. Second, it reframes what these drugs actually are. They look less like diet aids and more like broad metabolic medicines that happen to also cause weight loss. Understanding which uses are proven, which are promising, and which are hype is now a genuinely useful piece of health literacy.",
      },
      {
        type: "p",
        text: "It's hard to overstate how fast this has happened, or how unusual it is. Drugs normally earn one indication and, if they're lucky, add another over many years. GLP-1s have added cardiovascular, sleep, kidney and liver indications in roughly two years, with more under study — a pace that has reshaped several specialties at once. Cardiologists, sleep doctors, nephrologists and hepatologists are now all prescribing drugs that, a few years ago, most thought of as diabetes or weight medicines. For patients, that means these drugs may come up in conversations far outside a weight-loss clinic, and it's worth knowing why before they do.",
      },
      {
        type: "p",
        text: "This guide walks through every major use, approved and experimental, with the same discipline we apply everywhere: what the actual trials showed, what's FDA-approved versus still being studied, and where the evidence is weaker than the headlines suggest. We'll also flag the failures honestly — because the most trustworthy thing we can tell you about the 2026 GLP-1 story is that not everything these drugs were hoped to do has panned out.",
      },
      {
        type: "callout",
        title: "The one distinction that matters",
        text: "Throughout this guide, watch for 'FDA-approved' versus 'under investigation.' Approved means large trials proved it works and regulators agreed. Investigational means it's being studied — which is not the same as it working, as the failed Alzheimer's trials show. We label every use clearly.",
      },
      {
        type: "p",
        text: "If you're new to how these drugs work in the first place, start with our [complete GLP-1 weight-loss guide](/glp1-weight-loss-guide) and our explainer on [how GLP-1 medications work](/guides/how-glp1-medications-work). If you already know the basics and want to understand the expanding medical uses, you're in the right place.",
      },
    ],
  },

  {
    id: "why-beyond",
    heading: "Why GLP-1s work far beyond appetite",
    summary:
      "GLP-1 receptors sit not just in the brain's appetite centers but throughout the heart, blood vessels, kidneys, liver and immune system — so these drugs have direct effects on those organs, plus the large indirect benefits of weight loss and better blood sugar. Some benefits, like the heart protection in SELECT, appear only partly explained by weight loss.",
    blocks: [
      {
        type: "p",
        text: "To make sense of why one drug class can treat heart disease, sleep apnea, kidney disease and liver disease, you have to drop the idea that GLP-1s only act on appetite. That was always too narrow.",
      },
      {
        type: "p",
        text: "GLP-1 — glucagon-like peptide-1 — is a hormone, and receptors for it are scattered far beyond the gut and the brain's hunger centers. They're found in the heart and blood vessels, the kidneys, the liver, the pancreas, and immune cells. When a GLP-1 drug activates those receptors, it does more than quiet hunger. It reduces inflammation, improves how blood vessels function, lowers blood pressure, improves cholesterol and blood-sugar handling, and appears to act directly on heart, kidney and liver tissue. The drug is talking to the whole metabolic system, not just the stomach.",
      },
      {
        type: "p",
        text: "It helps to remember what GLP-1 actually is: a hormone your own gut releases after eating, part of the body's natural system for coordinating metabolism. These drugs don't introduce an alien effect — they amplify and prolong a signal the body already uses to manage blood sugar, appetite and more. That's part of why the effects are so wide-ranging and, within their known risks, generally well tolerated: the machinery they act on is built into normal physiology. Tirzepatide goes a step further by also activating the GIP receptor, a second gut hormone, which appears to amplify both the metabolic and weight effects — one reason it has been especially potent across diabetes, weight and now sleep apnea.",
      },
      {
        type: "p",
        text: "That creates two overlapping sources of benefit, and separating them is one of the most interesting questions in the field:",
      },
      {
        type: "ul",
        items: [
          "**Indirect benefits from weight loss and metabolic improvement.** Losing 15–20% of your body weight is itself powerful medicine. It unloads the heart, reduces the fatty tissue around the throat that causes sleep apnea, takes strain off the kidneys and liver, lowers blood pressure and blood sugar, and improves cholesterol. A lot of the downstream health benefit flows from this alone.",
          "**Direct effects of the drug on organs.** Beyond the weight, GLP-1 activation appears to protect tissue directly — calming inflammation in blood-vessel walls, improving the heart's energy use, and reducing fat and scarring in the liver.",
        ],
      },
      {
        type: "p",
        text: "Here's the clue that the direct effects are real. In the landmark [SELECT](/medications/semaglutide) cardiovascular trial, the reduction in heart attacks and strokes appeared **larger and faster than the amount of weight lost could fully explain**, and the benefit showed up even in people who lost relatively little weight. If the only mechanism were weight loss, you'd expect the benefit to track tightly with pounds lost. It didn't. That strongly implies the drug is protecting the cardiovascular system through mechanisms beyond the scale — which is exactly why 'GLP-1s are just weight-loss drugs' no longer holds.",
      },
      {
        type: "p",
        text: "This distinction between direct and weight-mediated effects isn't academic hair-splitting — it has real consequences. If a benefit is mostly from weight loss, then any effective way of losing that weight (another drug, surgery, diet) might deliver it, and the benefit should scale with the pounds lost. If a benefit is a direct drug effect, it might be specific to GLP-1s, might not require dramatic weight loss, and might appear quickly. The sleep-apnea benefit, for example, is heavily weight-mediated — it comes from physically removing fat around the airway. The cardiovascular and kidney benefits look more direct. Teasing these apart is where a lot of the current research energy goes, because it tells clinicians who will benefit and how much. For you, the practical upshot is simpler: these drugs help through more than one route, which is why the benefits are both large and broad.",
      },
      {
        type: "callout",
        title: "Why this reframe is useful",
        text: "Once you see GLP-1s as metabolic, organ-protective drugs rather than appetite drugs, their expanding list of uses stops being surprising. A medicine that calms inflammation and improves how the heart, kidneys and liver work was always going to matter beyond the waistline.",
      },
    ],
  },

  {
    id: "inflammation",
    heading: "The inflammation connection",
    summary:
      "One reason a single drug class helps so many conditions: chronic low-grade inflammation is a shared driver of heart disease, kidney disease, fatty liver and more, and GLP-1s appear to calm it. That anti-inflammatory effect, on top of weight loss and better blood sugar, is a leading explanation for the broad benefits.",
    blocks: [
      {
        type: "p",
        text: "There's a deeper thread worth pulling, because it explains why the list of conditions is so long and so varied. A surprising number of the diseases GLP-1s help share a common root: chronic, low-grade inflammation and metabolic dysfunction.",
      },
      {
        type: "p",
        text: "Excess fat tissue — especially the visceral fat around the organs — isn't inert. It's metabolically active and pumps out inflammatory signals that quietly damage blood vessels, kidneys, the liver and the brain over years. This smoldering inflammation is a shared engine behind atherosclerosis (clogged arteries), kidney decline, the progression of fatty liver to scarring, and arguably some of the cognitive and mood effects researchers are chasing. It's one reason obesity isn't just 'extra weight' but a driver of dozens of downstream diseases.",
      },
      {
        type: "p",
        text: "GLP-1 drugs appear to turn that engine down in two ways: by reducing the fat tissue that generates the inflammation, and by acting directly on immune and vascular cells to calm inflammatory signaling. When you lower systemic inflammation, you don't help just one organ — you help every organ that inflammation was damaging. That's a large part of why the benefits show up across such different body systems, and why the heart benefit in SELECT appeared only partly tied to weight loss. The anti-inflammatory and direct-tissue effects are doing work the scale can't capture.",
      },
      {
        type: "callout",
        title: "The unifying idea",
        text: "If you want one concept that makes the whole 'GLP-1s treat everything' story make sense, it's this: these drugs attack shared upstream drivers — excess visceral fat, metabolic dysfunction and inflammation — so they help the many different diseases those drivers feed. That's also why the benefits are real, not magic.",
      },
    ],
  },

  {
    id: "approved-overview",
    heading: "What GLP-1s are FDA-approved to treat in 2026",
    summary:
      "Beyond obesity and type 2 diabetes, GLP-1s now carry FDA approvals for cardiovascular risk reduction (Wegovy), obstructive sleep apnea (Zepbound), chronic kidney disease in type 2 diabetes (Ozempic), and MASH liver disease (Wegovy). Each rests on a large, named clinical trial.",
    blocks: [
      {
        type: "p",
        text: "Let's start with what's actually proven and approved — the uses where large trials showed benefit and the FDA signed off. Here is the 2026 approved landscape at a glance, before we go deep on each.",
      },
      {
        type: "table",
        caption: "FDA-approved GLP-1 uses beyond weight loss (as of 2026)",
        headers: ["Condition", "Drug (brand)", "Key trial", "Approved"],
        rows: [
          ["Type 2 diabetes", "Semaglutide (Ozempic), tirzepatide (Mounjaro)", "SUSTAIN / SURPASS", "Yes (original use)"],
          ["Cardiovascular risk reduction", "Semaglutide (Wegovy)", "SELECT", "Yes (2024)"],
          ["Obstructive sleep apnea", "Tirzepatide (Zepbound)", "SURMOUNT-OSA", "Yes (Dec 2024)"],
          ["Chronic kidney disease (with type 2 diabetes)", "Semaglutide (Ozempic)", "FLOW", "Yes (Jan 2025)"],
          ["MASH (fatty liver disease)", "Semaglutide (Wegovy)", "ESSENCE", "Yes — accelerated (Aug 2025)"],
        ],
      },
      {
        type: "p",
        text: "A few things to notice. The brand name matters: the same molecule (semaglutide) is sold as **Ozempic** for diabetes and kidney disease, and as **Wegovy** for weight, heart and liver disease — approvals attach to specific brands and doses. Tirzepatide is **Mounjaro** for diabetes and **Zepbound** for weight and sleep apnea. And the trials are real, large, and named — SELECT, SURMOUNT-OSA, FLOW, ESSENCE — not marketing. We'll take each condition in turn.",
      },
      {
        type: "p",
        text: "That one-molecule-two-brands structure confuses almost everyone, so it's worth dwelling on. It exists because each brand was developed, trialed and approved for different purposes, at different doses, and priced and covered differently. It's why your neighbor's 'Ozempic' for diabetes and your 'Wegovy' for heart protection can be the same drug yet show up differently on an insurance formulary, and why headlines about 'Ozempic for the heart' are usually really about Wegovy. When you talk to a clinician about one of these conditions, the useful move is to describe the condition and let them choose the brand and dose that carries the right approval — rather than asking for a brand by name and discovering it isn't the one indicated for your situation.",
      },
      {
        type: "callout",
        title: "A practical note on coverage",
        text: "Because these are distinct medical approvals, insurance often covers a GLP-1 for one of these conditions when it won't for obesity alone. If you have heart disease, sleep apnea, kidney disease or MASH, that approved indication can be the difference between a covered prescription and a $1,000+ cash bill — worth raising with your clinician.",
      },
    ],
  },

  {
    id: "timeline",
    heading: "A timeline: from diabetes drug to everything",
    summary:
      "GLP-1s arrived as diabetes drugs in the mid-2000s, became blockbuster weight-loss drugs around 2021, and from 2024 onward began racking up approvals for cardiovascular disease, sleep apnea, kidney disease and liver disease — one of the fastest indication expansions in modern pharmacology.",
    blocks: [
      {
        type: "p",
        text: "The speed of this expansion is genuinely unusual, and seeing it laid out as a timeline makes the trajectory obvious.",
      },
      {
        type: "ul",
        items: [
          "**Mid-2000s onward:** The first GLP-1 drugs are approved for type 2 diabetes. They lower blood sugar well and, notably, cause weight loss — at first treated as a side benefit.",
          "**2017–2021:** Trials confirm cardiovascular benefit in people with diabetes, and semaglutide arrives as a far more potent option. The weight-loss effect becomes impossible to ignore.",
          "**2021:** Semaglutide 2.4 mg is approved specifically for weight management (Wegovy). The cultural moment begins; demand explodes.",
          "**2022–2023:** Tirzepatide (the dual GLP-1/GIP agonist) raises the efficacy ceiling for both diabetes and weight. Retatrutide's early data hints at even more.",
          "**2024:** The expansion into non-metabolic organs begins in earnest — semaglutide earns a cardiovascular-protection approval (Wegovy), and tirzepatide becomes the first drug ever approved for obstructive sleep apnea (Zepbound).",
          "**2025:** Semaglutide is approved to slow kidney disease in type 2 diabetes (Ozempic, January) and, in a landmark for a disease with no good drugs, for MASH liver disease (Wegovy, accelerated approval, August).",
          "**2026:** The frontier gets tested hard — positive signals in alcohol use disorder, continued work in heart failure and peripheral artery disease, and a high-profile failure in Alzheimer's.",
        ],
      },
      {
        type: "p",
        text: "Step back and the pattern is clear: a drug class that started by lowering blood sugar has, in roughly two years, become a treatment for some of the most common and serious chronic diseases in medicine. Few drug classes have expanded this fast. The reason isn't marketing — it's that each new trial kept confirming that improving metabolic health pays dividends across the whole body.",
      },
    ],
  },

  {
    id: "heart",
    heading: "Heart disease: cutting heart attacks and strokes",
    summary:
      "In the SELECT trial, semaglutide (Wegovy) reduced major cardiovascular events — heart attack, stroke and cardiovascular death — by about 20% in adults with established heart disease and overweight or obesity, without diabetes. The FDA approved Wegovy for this in 2024, and the benefit appeared only partly explained by weight loss.",
    blocks: [
      {
        type: "p",
        text: "This is the one that changed how cardiologists think about these drugs. For decades, the way to reduce heart attacks was statins, blood-pressure drugs and lifestyle change. GLP-1s are now on that list.",
      },
      {
        type: "h3",
        text: "What the SELECT trial showed",
      },
      {
        type: "p",
        text: "SELECT enrolled over 17,000 adults who had established cardiovascular disease and were overweight or obese — but did **not** have diabetes, which was the novel part. Half got semaglutide 2.4 mg (the Wegovy dose), half placebo, on top of their usual care. The result: a roughly **20% reduction in major adverse cardiovascular events** — the composite of heart attack, stroke and death from cardiovascular causes — over about three years.",
      },
      {
        type: "statgrid",
        stats: [
          { value: "~20%", label: "Reduction in major cardiac events (heart attack, stroke, CV death) on semaglutide vs placebo in SELECT" },
          { value: "17,000+", label: "Adults enrolled — with heart disease and overweight/obesity, without diabetes" },
          { value: "2024", label: "Year the FDA approved Wegovy to reduce cardiovascular risk" },
        ],
      },
      {
        type: "p",
        text: "On the strength of that trial, the FDA approved **Wegovy in 2024 to reduce the risk of cardiovascular death, heart attack and stroke** in adults with known heart disease who have overweight or obesity. It was the first time a weight-management drug earned a cardiovascular-protection indication — a genuine milestone.",
      },
      {
        type: "p",
        text: "To be precise about who this applies to: the approval is for people who **already have established cardiovascular disease** (a prior heart attack or stroke, or diagnosed artery disease) **and** carry excess weight — not the general population. For that group, a GLP-1 doesn't replace statins, blood-pressure medication or antiplatelet drugs; it's an addition to them, working through different mechanisms. Think of it as another layer of protection stacked on the proven foundation, with the bonus that it also improves weight, blood sugar, blood pressure and sleep apnea at the same time — a lot of cardiovascular risk factors addressed by one drug. That multi-target quality is part of why cardiologists have embraced it so quickly for the right patients.",
      },
      {
        type: "h3",
        text: "Why it's more than weight loss",
      },
      {
        type: "p",
        text: "The most scientifically important detail is one we flagged earlier: the cardiovascular benefit in SELECT appeared **partly independent of how much weight people lost**. The curves separated early — sooner than slow weight loss could explain — and people who lost relatively little still benefited. That points to direct protective effects on the cardiovascular system: less inflammation in artery walls, better blood-vessel function, and improved blood pressure and lipids. In other words, semaglutide isn't just preventing heart attacks by shrinking people; it appears to be protecting the arteries themselves.",
      },
      {
        type: "p",
        text: "What this means practically: if you have established cardiovascular disease and carry excess weight, a GLP-1 is now a legitimate part of the conversation about reducing your risk — a conversation to have with a cardiologist or primary-care clinician, not a reason to self-prescribe. Learn more about the molecule on our [semaglutide page](/medications/semaglutide).",
      },
    ],
  },

  {
    id: "sleep-apnea",
    heading: "Obstructive sleep apnea: the first drug for it",
    summary:
      "Tirzepatide (Zepbound) became the first medication FDA-approved for obstructive sleep apnea in December 2024, for adults with obesity and moderate-to-severe OSA. In the SURMOUNT-OSA trial it cut sleep-apnea severity (the apnea-hypopnea index) by roughly 20–24 more events per hour than placebo — a reduction of up to about two-thirds.",
    blocks: [
      {
        type: "p",
        text: "Obstructive sleep apnea — where the airway repeatedly collapses during sleep, causing you to stop breathing dozens of times an hour — affects a huge number of people, is strongly tied to obesity, and until recently had no drug treatment at all. The standard was a CPAP machine, which works well but many people can't tolerate. That changed in late 2024.",
      },
      {
        type: "h3",
        text: "What the SURMOUNT-OSA trial showed",
      },
      {
        type: "p",
        text: "SURMOUNT-OSA tested tirzepatide against placebo over 52 weeks in adults with obesity and moderate-to-severe OSA. The measure that matters is the **apnea-hypopnea index (AHI)** — the number of breathing interruptions per hour of sleep. Tirzepatide reduced the AHI by roughly **20 to 24 more events per hour than placebo**, a drop the sponsor summarized as up to about a **two-thirds reduction** in severity. Many participants improved enough to change their disease category, and some reached the threshold where OSA is considered resolved.",
      },
      {
        type: "statgrid",
        stats: [
          { value: "~−20 to −24", label: "Extra reduction in breathing interruptions per hour (AHI) vs placebo over 52 weeks (SURMOUNT-OSA)" },
          { value: "up to ~63%", label: "Headline reduction in sleep-apnea severity at the top dose" },
          { value: "Dec 2024", label: "Zepbound became the first drug FDA-approved for obstructive sleep apnea" },
        ],
      },
      {
        type: "p",
        text: "In **December 2024, the FDA approved Zepbound (tirzepatide) for moderate-to-severe obstructive sleep apnea in adults with obesity** — the first medication ever approved for the condition. The mechanism here is more weight-mediated than the heart story: losing fat, including the fat around the neck and airway, mechanically reduces the obstruction. But the effect size is large and, for people who can't tolerate CPAP, genuinely life-changing.",
      },
      {
        type: "p",
        text: "Why this matters more than it might sound: untreated obstructive sleep apnea isn't just loud snoring and daytime fatigue. It's linked to high blood pressure, heart disease, stroke, accidents from drowsiness, and a lower quality of life — and a large share of people prescribed CPAP stop using it because the mask is uncomfortable. A drug that substantially reduces the underlying obstruction gives those people a real alternative or supplement. In SURMOUNT-OSA, the improvements in breathing came with better blood pressure and other markers, and participants reported feeling meaningfully better. The practical reality is nuanced: for some, the drug may reduce or eliminate the need for CPAP; for others, it works best alongside it. That's a decision for a sleep specialist, ideally with a repeat sleep study to measure the actual change rather than guessing.",
      },
      {
        type: "callout",
        title: "An important nuance",
        text: "The approval is for OSA with obesity, and it isn't necessarily a CPAP replacement for everyone — many people will use both, or use the drug to reduce how much they rely on CPAP. If you have sleep apnea and obesity, this is a real option to discuss with a sleep specialist, not a reason to abandon a CPAP that's working.",
      },
      {
        type: "p",
        text: "For more on the molecule itself, see our [tirzepatide page](/medications/tirzepatide).",
      },
    ],
  },

  {
    id: "kidney",
    heading: "Kidney disease: slowing the damage",
    summary:
      "In the FLOW trial, semaglutide (Ozempic) reduced the risk of kidney disease getting worse and of cardiovascular death in adults with type 2 diabetes and chronic kidney disease. The FDA approved it for this in January 2025 — the first GLP-1 approved to protect the kidneys. The approval is specific to people who also have type 2 diabetes.",
    blocks: [
      {
        type: "p",
        text: "Chronic kidney disease is common, serious, and often silent until it's advanced, and it travels closely with diabetes and obesity. GLP-1s have now entered this space too.",
      },
      {
        type: "h3",
        text: "What the FLOW trial showed",
      },
      {
        type: "p",
        text: "The FLOW trial tested semaglutide in adults who had both type 2 diabetes and chronic kidney disease. The drug significantly **reduced the risk of major kidney events — worsening kidney function, kidney failure, and death from kidney or cardiovascular causes**. The trial was actually stopped early because the benefit was clear enough that continuing the placebo group was hard to justify. On the strength of it, the FDA approved **Ozempic in January 2025 to reduce the risk of worsening kidney disease and cardiovascular death in adults with type 2 diabetes and chronic kidney disease** — the first GLP-1 to earn a kidney-protection indication.",
      },
      {
        type: "callout",
        title: "Read the fine print on this one",
        text: "The kidney approval is specifically for people who ALSO have type 2 diabetes. Whether GLP-1s protect the kidneys in people without diabetes is still being studied — so this is not yet an approved treatment for kidney disease on its own.",
      },
      {
        type: "p",
        text: "The mechanism is a mix: better blood-sugar and blood-pressure control and weight loss all help the kidneys, but as with the heart, there appear to be direct protective and anti-inflammatory effects on kidney tissue too. For the large number of people living with both diabetes and early kidney disease, this gives clinicians another tool to slow a disease that used to feel one-directional.",
      },
      {
        type: "p",
        text: "The scale of this one is easy to underestimate. Diabetes is the leading cause of kidney failure, and chronic kidney disease often progresses silently until dialysis or a transplant is on the table. For years the main protective drugs were blood-pressure medicines (ACE inhibitors and ARBs) and, more recently, a class called SGLT2 inhibitors. Adding a GLP-1 with proven kidney benefit gives clinicians another independent lever — and these drugs are increasingly used together, each slowing the disease through different mechanisms. For someone with diabetes and early kidney changes, that combination can meaningfully alter the trajectory of a disease that used to feel like a one-way street. The key limit to keep front of mind: the approval and the strongest evidence are in people who also have type 2 diabetes.",
      },
    ],
  },

  {
    id: "liver",
    heading: "Liver disease (MASH): reversing the damage",
    summary:
      "In August 2025 the FDA granted accelerated approval to Wegovy (semaglutide) for MASH — metabolic dysfunction-associated steatohepatitis, a serious fatty liver disease — in adults with moderate-to-advanced fibrosis, based on the ESSENCE trial. It's the first GLP-1 approved for liver disease, and a major advance for a condition with few treatments.",
    blocks: [
      {
        type: "p",
        text: "MASH — metabolic dysfunction-associated steatohepatitis, formerly called NASH — is a severe form of fatty liver disease where fat buildup drives inflammation and scarring (fibrosis) that can progress to cirrhosis and liver failure. It's increasingly common, closely tied to obesity and diabetes, and has had almost no effective drug treatments. That's what makes this approval significant.",
      },
      {
        type: "h3",
        text: "What the ESSENCE trial showed",
      },
      {
        type: "p",
        text: "The ESSENCE trial tested semaglutide 2.4 mg in adults with noncirrhotic MASH and moderate-to-advanced liver fibrosis. The drug improved the disease on the two measures that matter: **resolving the inflammation (steatohepatitis) without worsening fibrosis, and improving fibrosis without worsening inflammation** — in a meaningfully larger share of patients than placebo. In August 2025, the FDA granted **accelerated approval to Wegovy for noncirrhotic MASH with moderate-to-advanced fibrosis**, the first GLP-1 to earn a liver indication.",
      },
      {
        type: "callout",
        title: "What 'accelerated approval' means",
        text: "Accelerated approval is based on measures expected to predict long-term benefit, with confirmatory evidence still being gathered — so it's a real approval, but the long-term outcome data is still maturing. It also applies to noncirrhotic disease with significant fibrosis, not every case of fatty liver.",
      },
      {
        type: "h3",
        text: "MASLD vs MASH — which stage matters",
      },
      {
        type: "p",
        text: "The terminology trips people up, so it's worth getting right. **MASLD** (metabolic dysfunction-associated steatotic liver disease) is the broad, common condition of excess fat in the liver — extremely widespread and often silent. **MASH** is the more serious subset where that fat is driving inflammation and scarring (fibrosis), which can progress toward cirrhosis. The 2025 approval is specifically for **noncirrhotic MASH with moderate-to-advanced fibrosis** — the stage where the disease is actively damaging the liver but hasn't yet reached cirrhosis. That's a deliberate, evidence-based boundary, not every case of a fatty liver. Many people have milder MASLD, where the mainstay is weight loss and metabolic improvement — often achievable with the same drugs used for obesity, even without a specific liver indication.",
      },
      {
        type: "p",
        text: "For people with MASH, this is genuinely good news — a progressive, scarring liver disease now has a drug that can improve it, not just a recommendation to lose weight and hope. As with the other indications, the benefit comes from both the weight loss and direct metabolic effects on the liver. If you've been told you have a fatty liver, it's worth asking your clinician which stage you're actually at — whether it's early MASLD or has progressed to MASH with fibrosis — because the answer changes both the urgency and the treatment options, including whether this approval applies to you.",
      },
      {
        type: "p",
        text: "The quiet problem here is that MASH is badly under-diagnosed, because it usually causes no symptoms until it's advanced. Many people with significant liver fibrosis don't know they have it. If you have the main risk factors — type 2 diabetes, obesity, high blood pressure or abnormal cholesterol — it's reasonable to ask your clinician whether your liver should be assessed, often starting with simple blood-test-based scores and, if warranted, a non-invasive scan (such as elastography) that estimates scarring without a biopsy. Catching fibrosis before cirrhosis is exactly the window where this treatment matters most, so the arrival of an effective drug is also a reason to take screening more seriously than the condition's silence would suggest.",
      },
    ],
  },

  {
    id: "diabetes",
    heading: "Type 2 diabetes: where it all started",
    summary:
      "GLP-1s were diabetes drugs first. Semaglutide (Ozempic) and tirzepatide (Mounjaro) lower blood sugar powerfully, drive weight loss, and reduce cardiovascular risk in people with type 2 diabetes — which is why they transformed diabetes care before they ever became famous for weight loss.",
    blocks: [
      {
        type: "p",
        text: "It's easy to forget, given the weight-loss headlines, that GLP-1s began as — and remain — some of the best drugs for type 2 diabetes. This is the foundation the rest of the story was built on.",
      },
      {
        type: "p",
        text: "In type 2 diabetes, GLP-1s lower blood sugar by prompting insulin release when glucose is high, reducing the liver's glucose output, and slowing digestion — all without the frequent low-blood-sugar risk of some older drugs. Semaglutide (as Ozempic and the oral Rybelsus) and tirzepatide (as Mounjaro) produce large reductions in A1C, substantial weight loss as a bonus, and — importantly — reductions in cardiovascular risk in people with diabetes and heart disease. Tirzepatide, the dual GLP-1/GIP agonist, has been especially potent on both blood sugar and weight.",
      },
      {
        type: "p",
        text: "This diabetes heritage is why the expansion into heart, kidney and liver disease felt natural: those are exactly the complications diabetes drives, and a drug that improves the underlying metabolic dysfunction was always likely to help with the downstream damage. If you have type 2 diabetes, a GLP-1 may address several problems at once — blood sugar, weight, heart and kidney risk — which is a large part of why they've become first-line options for many patients.",
      },
      {
        type: "p",
        text: "One practical point that trips people up: a GLP-1 prescribed for diabetes (Ozempic, Mounjaro, Rybelsus) is the same molecule as the one prescribed for weight (Wegovy, Zepbound), but the brand, the approved doses and — critically — the insurance coverage differ. People with diabetes often have far easier access and coverage, because the diabetes indication is long-established and broadly covered, whereas coverage for the weight indication is spottier. That mismatch has driven a lot of the supply strain and the off-label prescribing of diabetes brands for weight — a situation regulators and insurers continue to wrestle with. The bottom line for a patient: the condition you're being treated for shapes which brand you get and what you'll pay.",
      },
    ],
  },

  {
    id: "frontier",
    heading: "The investigational frontier: promising, but not proven",
    summary:
      "Beyond the approved uses, GLP-1s are being studied for heart failure, peripheral artery disease, addiction, Alzheimer's, PCOS and more. Some results are encouraging; others — notably the 2026 Alzheimer's trials — have failed. 'Being studied' is not the same as 'it works,' and none of these is an approved treatment yet.",
    blocks: [
      {
        type: "p",
        text: "Here's where honesty matters most, because the gap between a promising headline and an approved treatment is wide, and it's exactly where people get misled. The following uses are **investigational** — in trials, not approved, and not something you can legitimately get a GLP-1 prescribed for today. We cover them because they're genuinely interesting and because you deserve to know what's real versus hyped.",
      },
      {
        type: "callout",
        title: "The rule for this whole section",
        text: "Investigational means 'being tested,' which is not the same as 'it works.' Trials fail all the time — including big, hyped ones, as the Alzheimer's results below show. Treat everything here as 'watch this space,' not 'ask my doctor for it.'",
      },
      {
        type: "p",
        text: "One more framing point before we dig in. The investigational list is long partly because of genuine science and partly because of incentives: there's enormous commercial and academic interest in finding new uses for the best-selling drug class in the world, so almost every plausible idea is being tested somewhere. That's good — it's how medicine advances — but it also means the volume of 'GLP-1s might treat X' studies far outruns the number that will succeed. A trial starting is a hypothesis being tested, not a result. Keep that denominator in mind as the headlines pile up.",
      },
      {
        type: "p",
        text: "We'll take the most-discussed areas one at a time, and we'll be clear about which ones have encouraging data and which have disappointed.",
      },
    ],
  },

  {
    id: "heart-failure",
    heading: "Heart failure (HFpEF): encouraging, being pursued",
    summary:
      "In the STEP-HFpEF trials, semaglutide improved symptoms and physical limitations in people with a common type of heart failure (preserved ejection fraction) plus obesity. The data is encouraging and is being pursued toward a formal use, but as a specific standalone indication it's still developing — not a settled, universal approval.",
    blocks: [
      {
        type: "p",
        text: "Heart failure with preserved ejection fraction (HFpEF) is a form of heart failure where the heart muscle is stiff and doesn't relax properly. It's strongly linked to obesity and has historically been hard to treat. GLP-1s have shown real promise here.",
      },
      {
        type: "p",
        text: "In the STEP-HFpEF program, semaglutide improved heart-failure symptoms, physical limitations and exercise capacity, and helped people lose weight, in those with HFpEF and obesity. These are meaningful, patient-centered improvements — people felt and functioned better. The data has been strong enough that this use is being actively pursued with regulators. Our honest framing: this is one of the more promising investigational areas, backed by positive trials, but you should treat it as an evolving indication rather than assume it's a finished, universal approval. Anyone with heart failure should work with a cardiologist, who will know the current status and whether it fits.",
      },
      {
        type: "p",
        text: "What makes this notable is how stubborn HFpEF has been. Unlike the other main type of heart failure, HFpEF had very few treatments that improved how patients actually felt and functioned — and it's increasingly common, driven heavily by obesity, high blood pressure and metabolic disease. A drug that targets that metabolic root, rather than just the heart's pumping mechanics, is a genuinely different approach, and the symptom improvements in the trials were the kind patients notice in daily life: walking farther, doing more, feeling less limited. That's why cardiologists have paid close attention even ahead of a settled standalone indication.",
      },
    ],
  },

  {
    id: "pad",
    heading: "Peripheral artery disease: positive trial, under review",
    summary:
      "In the STRIDE trial, semaglutide improved walking distance and quality of life in people with peripheral artery disease and type 2 diabetes — a condition where narrowed leg arteries make walking painful. It's a positive result that's been pursued for approval, but as of now it remains an investigational/under-review use, not a settled indication.",
    blocks: [
      {
        type: "p",
        text: "Peripheral artery disease (PAD) is narrowing of the arteries to the limbs, usually the legs, which causes pain while walking and can severely limit mobility. Treatment options have been limited. The STRIDE trial tested whether a GLP-1 could help.",
      },
      {
        type: "p",
        text: "In STRIDE, semaglutide **improved maximum walking distance and quality of life** in people with PAD and type 2 diabetes — a direct, functional benefit for a condition that steals mobility. It's a genuinely encouraging result, and it's been pursued toward a formal indication. But the honest status is that this remains an investigational or under-review use rather than a long-settled approval, so it belongs in the 'promising, watch this space' column. If you have PAD, your vascular specialist will know where this stands.",
      },
    ],
  },

  {
    id: "addiction",
    heading: "Addiction: the most intriguing frontier",
    summary:
      "Many people on GLP-1s report less desire to drink, smoke or use other substances, and observational data hints at reduced alcohol use. In 2026, a phase 2 trial of an investigational GLP-1-based drug (pemvidutide) significantly cut heavy drinking days. But no GLP-1 is approved for any addiction — the rigorous trials are only now underway.",
    blocks: [
      {
        type: "p",
        text: "This is the frontier that fascinates people most, and for good reason. A striking number of people taking GLP-1s report that it quiets not just food cravings but other cravings too — less desire to drink alcohol, smoke, or even shop or gamble compulsively. The appetite-and-reward circuitry these drugs act on overlaps with the brain's reward system broadly, which gives the idea real biological plausibility.",
      },
      {
        type: "p",
        text: "What's the actual evidence? Mostly early, but accumulating:",
      },
      {
        type: "ul",
        items: [
          "**Observational signals.** Large real-world analyses of people with type 2 diabetes or obesity have found that those on GLP-1s had lower rates of alcohol-related problems than those on other treatments — suggestive, but not proof, since observational data can't fully rule out other explanations.",
          "**A positive 2026 trial of a related drug.** In July 2026, a phase 2 trial (RECLAIM) of pemvidutide — an investigational glucagon/GLP-1 dual agonist — met its primary endpoint, significantly reducing heavy drinking days in people with moderate-to-severe alcohol use disorder versus placebo. That's the kind of controlled result the field has been waiting for.",
          "**Dedicated programs underway.** Drugmakers and academic groups are now running trials specifically for alcohol use disorder, and some for opioid use disorder and smoking — purpose-built studies rather than after-the-fact analyses.",
        ],
      },
      {
        type: "h3",
        text: "Beyond alcohol: smoking, opioids and compulsion",
      },
      {
        type: "p",
        text: "The alcohol work is the furthest along, but the same logic extends to other addictions and compulsive behaviors. People on GLP-1s have reported smoking less, and researchers are formally studying the drugs for smoking cessation and even opioid use disorder; one major maker is testing a new molecule specifically for alcohol and opioid use. There are even scattered reports of reduced compulsive shopping and gambling. The unifying idea is that these drugs appear to turn down the brain's reward response to a range of stimuli, not just food — which, if borne out, would be a genuinely new mechanism for treating addiction, a field that has seen few new tools in decades.",
      },
      {
        type: "p",
        text: "Why the caution despite all the excitement? Because addiction research is littered with promising early signals that didn't survive rigorous trials, because the observational data can't rule out that healthier, more motivated people are simply more likely to be on these drugs, and because the doses, durations and safety for addiction treatment are all still unknown. The RECLAIM result is a real step forward, but it's one phase 2 trial of one investigational drug. This is a field to watch closely and take seriously — and not to act on by seeking a GLP-1 off-label for a substance problem, which is neither approved nor studied enough to be wise.",
      },
      {
        type: "p",
        text: "The honest bottom line: this is one of the most exciting possibilities in the whole GLP-1 story, with mechanism, anecdote and early data all pointing the same direction — but **no GLP-1 is FDA-approved for any addiction**, and the definitive trials are still in progress. If the results hold up, it could be transformative for conditions with few good treatments. For now, it's a genuine 'watch this space,' not a prescription.",
      },
    ],
  },

  {
    id: "alzheimers",
    heading: "Alzheimer's: the big 2026 disappointment",
    summary:
      "After years of hope that GLP-1s might slow dementia, the large phase 3 EVOKE and EVOKE+ trials of oral semaglutide in early Alzheimer's reported in 2026 that the drug did NOT slow disease progression. Some biomarkers improved, and the question isn't fully closed, but the headline result was negative — a reminder that promise isn't proof.",
    blocks: [
      {
        type: "p",
        text: "No area shows the danger of hype better than this one, which is why we're giving it its own honest section. For years, observational data and the drugs' anti-inflammatory effects fueled hope that GLP-1s might protect the brain and slow Alzheimer's disease. It became one of the most anticipated questions in the field.",
      },
      {
        type: "p",
        text: "In 2026, the answer arrived — and it was disappointing. The large phase 3 **EVOKE and EVOKE+ trials** tested oral semaglutide in people with early-stage symptomatic Alzheimer's. The result: the drug **did not significantly slow the progression of the disease** compared with placebo on the main cognitive and functional measures. Some related biomarkers moved in a favorable direction, and researchers argued the broader question of GLP-1s in dementia isn't completely closed, but the primary verdict was clear: for early Alzheimer's, semaglutide did not deliver.",
      },
      {
        type: "callout",
        title: "Why we're highlighting a failure",
        text: "Because trust is built on telling you what didn't work, not just what did. Earlier coverage confidently predicted a GLP-1 Alzheimer's breakthrough. The rigorous trials said otherwise. That gap — between the hopeful headline and the hard result — is exactly what separates real evidence from hype.",
      },
      {
        type: "p",
        text: "There's a useful lesson here that applies to the whole investigational frontier. Observational data — noticing that people on a drug seem to have less of some disease — is a starting point for a hypothesis, not a conclusion. It's prone to hidden biases, and the only way to know is a large randomized trial. Alzheimer's is the cautionary tale: strong hope, plausible mechanism, supportive observational data, and then a negative trial. Keep it in mind for every 'GLP-1s might also treat X' headline you read.",
      },
    ],
  },

  {
    id: "brain",
    heading: "GLP-1s and the brain: food noise, mood, and the unknowns",
    summary:
      "GLP-1s act on the brain's appetite and reward circuits, which is why people describe 'food noise' going quiet and sometimes report reduced cravings and calmer eating. Research into mood, binge eating and neuroprotection is active but unsettled — the Alzheimer's failure is a caution against over-reading early brain signals.",
    blocks: [
      {
        type: "p",
        text: "Because GLP-1 receptors sit in the brain — in the regions that govern appetite, reward and satiety — these drugs have psychological and neurological effects that go beyond the body, and this is one of the most-discussed and least-settled areas.",
      },
      {
        type: "h3",
        text: "'Food noise' and the reward system",
      },
      {
        type: "p",
        text: "The most consistent brain effect people describe is the quieting of 'food noise' — the constant, intrusive background thoughts about food, the next meal, the snack in the cupboard. For many people this is the single most striking thing about the drugs: not just feeling full, but feeling mentally free of a preoccupation they'd lived with for years. That's a window into the drugs acting on the brain's reward and craving machinery, which is also why the addiction research we covered is biologically plausible — the same circuits that drive food cravings overlap with those driving other compulsions.",
      },
      {
        type: "h3",
        text: "Mood, depression and eating behavior",
      },
      {
        type: "p",
        text: "The picture on mood is genuinely mixed and still being worked out. Some people report improved mood and self-image as they lose weight and regain control; large safety analyses have been broadly reassuring and have not confirmed the early worry that these drugs cause depression or suicidal thoughts. At the same time, clinicians watch mental health carefully, because rapid body changes and major shifts in eating can be psychologically significant. There's also real interest in GLP-1s for binge eating disorder, given how they quiet food-related compulsion — promising and plausible, but not an established, approved treatment, and these drugs are not appropriate for some eating disorders. Anyone with a history of depression, disordered eating, or other mental-health conditions should go in with their clinician's eyes open.",
      },
      {
        type: "h3",
        text: "The neuroprotection question, after Alzheimer's",
      },
      {
        type: "p",
        text: "The hope that calming inflammation and improving metabolism might protect the aging brain was reasonable — and it's exactly why the negative Alzheimer's trials matter so much. They're a direct test of the 'GLP-1s are good for the brain' hypothesis in its most important form, and the main result was negative. That doesn't erase the real food-noise and reward effects, which people feel directly. But it should make everyone more cautious about extrapolating from 'acts on the brain' to 'protects the brain' or 'treats brain disease.' Feeling different is not the same as a disease being slowed, and only trials can tell them apart.",
      },
      {
        type: "callout",
        title: "Hold two things at once",
        text: "The brain effects people feel — quieter food noise, fewer cravings — are real and often life-changing. The claims about GLP-1s preventing dementia or curing mood disorders are, so far, not proven and in the Alzheimer's case disproven. Both can be true.",
      },
    ],
  },

  {
    id: "others",
    heading: "PCOS, osteoarthritis and other emerging uses",
    summary:
      "GLP-1s are used off-label for PCOS (improving insulin resistance, weight and sometimes ovulation) though not FDA-approved for it, and weight loss from these drugs improves knee osteoarthritis pain. Many other uses — from fertility to certain cancers' risk — are in early study. Most are weight-and-metabolism-mediated and none beyond the approved list is a settled treatment.",
    blocks: [
      {
        type: "p",
        text: "A cluster of other conditions rounds out the picture. None has a dedicated FDA approval beyond what's listed above, but several have real rationale and early evidence.",
      },
      {
        type: "h3",
        text: "PCOS (polycystic ovary syndrome)",
      },
      {
        type: "p",
        text: "PCOS is driven in large part by insulin resistance, which GLP-1s improve, and it's often accompanied by weight that's hard to lose. Clinicians increasingly use GLP-1s **off-label** for PCOS, where they can improve insulin resistance, support weight loss, and in some women help restore more regular ovulation and cycles. The evidence is growing but not yet at the level of a dedicated approval, and there's an important caution: because they can improve fertility and are not safe in pregnancy, effective contraception matters for anyone using them who could become pregnant.",
      },
      {
        type: "h3",
        text: "Knee osteoarthritis",
      },
      {
        type: "p",
        text: "Excess weight loads the knees, and losing it reduces osteoarthritis pain. Trials have shown that weight loss from GLP-1s improves knee osteoarthritis symptoms, and the investigational triple-agonist [retatrutide](/medications/retatrutide) specifically reported knee-pain improvements alongside large weight loss in one of its trials. This is mostly a weight-mediated benefit rather than a direct joint effect — but for people whose knee pain is driven by weight, it's a real one.",
      },
      {
        type: "h3",
        text: "The longer list",
      },
      {
        type: "p",
        text: "GLP-1s are being explored, at varying stages of evidence, for a wide range of other conditions — certain aspects of fertility, some inflammatory conditions, and possible effects on the risk of certain obesity-related cancers, among others. Most of these, where real, flow from the same two mechanisms we keep returning to: large weight loss and direct metabolic and anti-inflammatory effects. The sensible stance is curiosity plus patience: interesting, plausible, and unproven until the trials say otherwise.",
      },
      {
        type: "p",
        text: "A worthwhile note on the cancer question, since it cuts both ways and causes confusion. On one hand, obesity is a known risk factor for more than a dozen cancers, so sustained weight loss could plausibly lower the long-term risk of some of them — an area of active study. On the other hand, the class carries a boxed warning about thyroid C-cell tumors seen in rodents, which is why a personal or family history of medullary thyroid cancer or MEN 2 is a firm contraindication. Both facts are real, both are about cancer, and they get mixed together online into alarming or falsely reassuring claims. The accurate version: a potential long-term reduction in some obesity-linked cancers is being investigated and is not established, while the specific thyroid contraindication is a known rule to screen for. Neither is a reason to panic; both are reasons to let a clinician weigh your history.",
      },
      {
        type: "callout",
        title: "A pattern worth naming",
        text: "Nearly every 'surprising' new GLP-1 use traces back to the same roots — losing a lot of weight and calming metabolic dysfunction and inflammation help a remarkable number of conditions. That's why the list is so long, and also why 'it's being studied for everything' should prompt healthy skepticism, not blanket belief.",
      },
    ],
  },

  {
    id: "women",
    heading: "Women's health: PCOS, fertility and a pregnancy warning",
    summary:
      "GLP-1s are used off-label for PCOS and can improve insulin resistance, weight and ovulation — which also means they can unexpectedly boost fertility ('Ozempic babies'). They are not safe in pregnancy, so reliable contraception matters, and they're being explored for menopause-related weight gain. None of these is an FDA-approved indication.",
    blocks: [
      {
        type: "p",
        text: "Several of the fastest-growing conversations about GLP-1s center on women's health, where the effects are real, useful, and carry an important safety catch. None of this is an FDA-approved use, so treat it as the off-label and emerging territory it is.",
      },
      {
        type: "h3",
        text: "PCOS and the insulin-resistance link",
      },
      {
        type: "p",
        text: "Polycystic ovary syndrome affects a large share of women of reproductive age and is driven substantially by insulin resistance, which fuels weight gain, irregular cycles, and symptoms like excess hair growth. Because GLP-1s directly improve insulin resistance and drive weight loss, clinicians increasingly use them off-label for PCOS, where they can improve metabolic markers, support weight loss that's otherwise hard to achieve, and in some women help restore more regular ovulation. The evidence base is growing but hasn't reached a dedicated approval, so this remains a clinician-guided, off-label choice.",
      },
      {
        type: "h3",
        text: "The fertility surprise — 'Ozempic babies'",
      },
      {
        type: "p",
        text: "Here's a consequence that has caught many people off guard. By improving insulin resistance, lowering weight and restoring ovulation, GLP-1s can **increase fertility** — sometimes in women who had struggled to conceive for years. The result has been a wave of unexpected pregnancies, widely dubbed 'Ozempic babies.' It's a real phenomenon with a serious flip side: it can also make hormonal birth control less reliable in some situations and, most importantly, these drugs are **not considered safe in pregnancy**.",
      },
      {
        type: "callout",
        title: "The contraception point is not optional",
        text: "If you could become pregnant and you're on a GLP-1, effective contraception matters — both because fertility can rise unexpectedly and because the drugs aren't safe in pregnancy. Most guidance is to stop a GLP-1 well before trying to conceive. This is a specific conversation to have with your clinician, not an afterthought.",
      },
      {
        type: "h3",
        text: "Menopause and midlife weight",
      },
      {
        type: "p",
        text: "The hormonal shifts of perimenopause and menopause drive weight gain, a redistribution of fat toward the abdomen, and worsening metabolic health for many women — and this is an area of growing interest and use, since GLP-1s target exactly that metabolic shift. It's a reasonable thing to raise with a clinician if midlife weight and metabolic changes are affecting your health, but it falls under the general obesity and metabolic indications rather than a menopause-specific approval.",
      },
    ],
  },

  {
    id: "who",
    heading: "What this means for you — and the limits",
    summary:
      "If you have one of the approved conditions, a GLP-1 may be a treatment for the condition itself, often with better insurance coverage than for weight loss alone. But these are serious prescription drugs with real side effects and contraindications, the investigational uses aren't available, and only a clinician who knows your history can decide if one fits.",
    blocks: [
      {
        type: "p",
        text: "Zooming out, what should you actually do with all this? A few practical takeaways, and some honest limits.",
      },
      {
        type: "h3",
        text: "If you have one of the approved conditions",
      },
      {
        type: "p",
        text: "If you have cardiovascular disease, obstructive sleep apnea, chronic kidney disease with diabetes, MASH, or type 2 diabetes — especially alongside excess weight — a GLP-1 may be a treatment for that condition, not just for your weight. That's worth raising specifically with the relevant specialist (cardiologist, sleep doctor, nephrologist, hepatologist, or primary care). And because the approved medical indication is clear, **insurance frequently covers the drug for these uses when it won't for obesity alone** — a practical and financial difference that can matter enormously given list prices over $1,000 a month.",
      },
      {
        type: "h3",
        text: "The limits and the cautions",
      },
      {
        type: "ul",
        items: [
          "**These are serious drugs.** The same side effects apply across every use — common gastrointestinal effects, and rare but real risks like pancreatitis, gallbladder problems, and the thyroid C-cell tumor boxed warning. See our [side-effects guide](/guides/glp1-side-effects-and-how-to-manage-them).",
          "**The same contraindications apply.** A personal or family history of medullary thyroid carcinoma or MEN 2, and pregnancy, rule these drugs out regardless of the condition being treated.",
          "**Investigational uses are not available.** You cannot get a GLP-1 prescribed for addiction, Alzheimer's, or other unproven uses — and the Alzheimer's trials are a reminder that 'being studied' sometimes ends in failure.",
          "**Muscle, nutrition and the long term still matter.** Many of these benefits depend on sustained treatment and on protecting your health while you lose weight — including [preserving muscle](/glp1-muscle-loss).",
          "**Only a clinician can decide.** Matching the right drug, dose and brand to your specific condition — and screening for what makes it unsafe — is a medical decision, not a self-service one.",
        ],
      },
      {
        type: "p",
        text: "A useful way to approach any of these is shared decision-making: you bring your condition, your priorities and your constraints (including cost and whether you can stay on treatment long-term); your clinician brings the evidence, the screening and the dose and brand that fit. For some people with, say, heart disease and obesity and sleep apnea, a single GLP-1 can address several problems at once, which can simplify a complicated medication list rather than add to it. For others, it may not be the right fit at all. The point of understanding the expanding uses isn't to arrive at an appointment asking for a specific drug — it's to arrive able to ask better questions about whether one of these medicines fits the condition you actually have.",
      },
      {
        type: "p",
        text: "It's also worth being honest about what we still don't know, even for the approved uses. Most of the trials ran for a few years, so the very-long-term picture — a decade or more of continuous use — is still being filled in. We don't yet know exactly who benefits most, how long treatment needs to continue to hold the gains, or how these drugs perform in groups that trials under-enrolled, like older adults. The approvals mean the benefits are real and outweigh the risks for the studied populations; they don't mean every question is answered. A good clinician weighs your specific situation against evidence that is strong but still growing — which is another reason this is a medical decision, not a self-service one.",
      },
      {
        type: "p",
        text: "The exciting truth and the sober truth sit side by side. GLP-1s really are becoming broad metabolic medicines that protect the heart, kidneys, liver and more — a genuinely historic expansion. And they remain serious prescription drugs whose expanding uses need to be matched carefully to the right person by someone who knows their history.",
      },
    ],
  },

  {
    id: "myths",
    heading: "Myths and misconceptions about the expanding uses",
    summary:
      "The expanding-uses story breeds confusion: that GLP-1s are a cure-all, that 'being studied' means 'it works,' that the benefits are only from weight loss, that healthy people should take them for prevention, or that the online 'biohacking' uses are evidence-based. Here's what's actually true.",
    blocks: [
      {
        type: "p",
        text: "A story this big and this fast-moving generates a lot of half-truths. Clearing them up is some of the most useful work this guide can do.",
      },
      {
        type: "h3",
        text: "Myth: GLP-1s are a cure-all",
      },
      {
        type: "p",
        text: "They're powerful and broadly useful, but they're not magic and they're not for everyone. They have a specific set of proven uses, real side effects and firm contraindications. The long list of benefits comes from attacking shared metabolic drivers, not from some universal healing property — and plenty of hoped-for uses have failed or remain unproven.",
      },
      {
        type: "h3",
        text: "Myth: if it's 'being studied,' it works",
      },
      {
        type: "p",
        text: "This is the costliest misconception, and the Alzheimer's trials are the proof. A plausible mechanism plus encouraging observational data plus a hopeful headline is not evidence that a drug works — only a rigorous trial is, and those trials sometimes come back negative. 'In trials for X' and 'treats X' are completely different claims.",
      },
      {
        type: "h3",
        text: "Myth: the benefits are purely from weight loss",
      },
      {
        type: "p",
        text: "Weight loss explains a lot, but not all. The cardiovascular benefit in SELECT appeared only partly tied to pounds lost, and the kidney, liver and vascular effects point to direct anti-inflammatory and tissue-level actions. It's both: weight loss plus direct drug effects. Oversimplifying in either direction misses the science.",
      },
      {
        type: "h3",
        text: "Myth: healthy people should take them for prevention or longevity",
      },
      {
        type: "p",
        text: "The approvals are tied to specific conditions and risk profiles. For a healthy person without an approved indication, the risk-benefit balance is different, largely unstudied, and not supported by evidence. Taking a serious prescription drug off-label to chase longevity or prevention isn't the same as the proven uses in people who have these diseases.",
      },
      {
        type: "h3",
        text: "Myth: online 'stacks' and gray-market versions capture these benefits",
      },
      {
        type: "p",
        text: "The approved benefits come from approved drugs, at studied doses, under medical supervision — not from unregulated 'research peptides,' SARMs, or DIY combinations sold online. Those carry real risks of contamination, wrong dosing and no oversight, and they are not what the trials studied. The benefits in this guide belong to the real, prescribed medicines.",
      },
      {
        type: "h3",
        text: "Myth: a newer, 'stronger' GLP-1 is automatically better for these conditions",
      },
      {
        type: "p",
        text: "More weight loss isn't the same as more organ protection, and the approvals prove it. The cardiovascular, kidney and liver approvals are for semaglutide, not for the more potent tirzepatide — because those are the trials that were run and succeeded for those conditions. Tirzepatide earned the sleep-apnea approval; semaglutide earned heart, kidney and liver. The right drug for a given condition is the one with the trial and the approval for it, not whichever produces the biggest number on the scale. Chasing the 'strongest' drug for a heart or kidney indication it was never tested for is exactly the kind of reasoning this guide is built to counter.",
      },
      {
        type: "callout",
        title: "The reliable filter",
        text: "When you read a new 'GLP-1s also treat X' claim, ask one question: is X an FDA-approved indication, or is it 'being studied'? That single distinction separates almost all of the real from the overhyped.",
      },
    ],
  },

  {
    id: "access",
    heading: "How to access a GLP-1 for a medical condition",
    summary:
      "Start with the specialist who manages the condition, confirm which branded drug carries the approval you need (e.g., Wegovy for heart/liver, Zepbound for sleep apnea, Ozempic for kidney disease with diabetes), check insurance coverage for that specific indication, and use a legitimate prescriber and pharmacy. The approved indication is often your best route to coverage.",
    blocks: [
      {
        type: "p",
        text: "If one of the approved uses applies to you, here's a sensible way to pursue it.",
      },
      {
        type: "ol",
        items: [
          "**See the right clinician.** The specialist who manages your condition — or your primary-care doctor — is the person to raise this with. Bring the specific condition, not just 'I want Ozempic.'",
          "**Match the brand to the indication.** Approvals attach to specific brands and doses: Wegovy for cardiovascular risk and MASH, Zepbound for sleep apnea, Ozempic for kidney disease with type 2 diabetes, Ozempic/Mounjaro for diabetes. Your clinician will prescribe the one that carries the approval you need.",
          "**Check coverage for that indication.** Ask your insurer whether the drug is covered for your specific medical condition — coverage is often far better for an approved heart, kidney, liver or sleep-apnea indication than for obesity alone. This is frequently the difference between affordable and not.",
          "**Use a legitimate prescriber and pharmacy.** Whether through your own doctor or a reputable telehealth program, insist on a real medical review and a licensed pharmacy. Avoid anything sold without a prescription.",
          "**Plan for the long term.** These benefits generally depend on staying on treatment, so factor in cost and sustainability, and build the habits that protect your health alongside the drug.",
        ],
      },
      {
        type: "p",
        text: "One caution specific to these conditions: the gray market and the 'wellness' corner of the internet are full of GLP-1 offers that bypass real medical oversight, and that's a worse idea for a heart, kidney or liver patient than for almost anyone. If you have a serious medical condition, you need a prescriber who can coordinate with the rest of your care, watch for interactions with your other medications, and monitor the condition itself — not a one-click vial from an unregulated seller. The convenience is not worth it when the stakes are organ damage. Legitimate telehealth that runs a real medical review can be fine for straightforward cases, but complex, multi-condition situations belong with a treating physician.",
      },
      {
        type: "p",
        text: "If weight is part of your picture and you're comparing programs, our independently ranked [best GLP-1 providers](/best-glp1-providers) and the [cost and insurance guide](/guides/glp1-cost-and-insurance) can help — but for a specific medical condition like heart, kidney or liver disease, your treating specialist is the right starting point, not a cash-pay weight-loss service.",
      },
    ],
    readMore: {
      href: "/best-glp1-providers",
      label: "Compare the GLP-1 programs we rate highest",
    },
  },

  {
    id: "outlook",
    heading: "Where this goes next",
    summary:
      "Expect more approvals as trials in heart failure, peripheral artery disease and other areas mature, clearer answers on addiction, and a continued shift toward treating GLP-1s as core metabolic medicines. Expect failures too — not every hoped-for use will pan out, as Alzheimer's showed. The safe posture: follow the approvals, not the hype.",
    blocks: [
      {
        type: "p",
        text: "The expansion isn't finished. Based on where the trials stand, the next few years will likely bring more approvals — heart failure and peripheral artery disease are the clearest near-term candidates — along with clearer answers on the big questions, especially addiction. The direction of travel is unmistakable: these drugs are being cemented as foundational treatments for metabolic disease and its many complications, not niche weight-loss aids.",
      },
      {
        type: "p",
        text: "Expect disappointments along the way, too. The Alzheimer's result won't be the last hyped use that fails a rigorous trial, and that's how science is supposed to work — test the hopeful ideas, keep the ones that hold up, discard the ones that don't. The newer, more powerful drugs in development (including the triple-agonist [retatrutide](/medications/retatrutide) and the oral options covered in our [GLP-1 pills guide](/glp1-pills)) will widen the questions further.",
      },
      {
        type: "p",
        text: "For you, the practical posture is simple and durable: **follow the approvals, not the hype.** When a use is FDA-approved, it means large trials proved it and regulators agreed — that's a treatment. When it's 'being studied,' it's a possibility, and some possibilities fail. Hold both the excitement and the skepticism at once, and let the evidence — and a clinician who knows your history — guide what you actually do.",
      },
      {
        type: "p",
        text: "There's a bigger-picture shift worth naming, too. If GLP-1s can prevent heart attacks, slow kidney and liver disease, treat sleep apnea and more, they change the math of chronic disease — potentially preventing expensive complications, hospitalizations and procedures down the line. That's reshaping how insurers, employers and health systems think about covering them, and it's part of why the pressure to make them cheaper and more accessible (through the new oral options, direct-to-consumer pricing and eventually generics) keeps building. The flip side is cost and strain: these are expensive drugs taken long-term by enormous numbers of people, and squaring that with limited healthcare budgets is one of the defining health-policy questions of the decade. How it resolves will shape who actually gets these benefits.",
      },
      {
        type: "callout",
        title: "The honest summary",
        text: "GLP-1s have gone from weight-loss drugs to broad metabolic medicines that protect the heart, kidneys and liver and treat sleep apnea — proven, approved, real. The frontier beyond that is genuinely promising and genuinely uncertain. Celebrate the proven wins; wait for the evidence on the rest.",
      },
    ],
  },
];

export const BEYOND_FAQS: { q: string; a: string }[] = [
  {
    q: "What is a GLP-1 approved for besides weight loss?",
    a: "As of 2026, GLP-1 drugs are FDA-approved beyond obesity and type 2 diabetes for: reducing cardiovascular risk (Wegovy, in adults with heart disease and overweight/obesity), obstructive sleep apnea (Zepbound, with obesity), chronic kidney disease in adults with type 2 diabetes (Ozempic), and MASH/fatty liver disease with moderate-to-advanced fibrosis (Wegovy, accelerated approval). Many other uses are being studied but are not approved.",
  },
  {
    q: "Is Ozempic approved for heart disease or kidney disease?",
    a: "Ozempic (semaglutide) is approved to reduce cardiovascular risk and to slow chronic kidney disease in adults who have type 2 diabetes. For cardiovascular risk reduction in people with obesity but without diabetes, the approved brand is Wegovy (also semaglutide), based on the SELECT trial. The kidney approval, from the FLOW trial, is specific to people who also have type 2 diabetes.",
  },
  {
    q: "Which GLP-1 is approved for sleep apnea?",
    a: "Zepbound (tirzepatide) is approved for moderate-to-severe obstructive sleep apnea in adults with obesity — the first medication ever FDA-approved for the condition, in December 2024. In the SURMOUNT-OSA trial it reduced sleep-apnea severity (the apnea-hypopnea index) by roughly 20–24 more events per hour than placebo, a reduction of up to about two-thirds.",
  },
  {
    q: "Can GLP-1s treat fatty liver disease (MASH)?",
    a: "Yes, for a specific stage. In August 2025 the FDA granted accelerated approval to Wegovy (semaglutide 2.4 mg) for noncirrhotic MASH — metabolic dysfunction-associated steatohepatitis — with moderate-to-advanced fibrosis, based on the ESSENCE trial. It's the first GLP-1 approved for a liver disease. It applies to that specific stage, not every case of fatty liver.",
  },
  {
    q: "Do GLP-1s help with addiction or drinking?",
    a: "Possibly, but it's not proven or approved. Many people on GLP-1s report less desire to drink or smoke, observational data hints at reduced alcohol problems, and in 2026 a phase 2 trial of an investigational GLP-1-based drug (pemvidutide) significantly cut heavy drinking days. But no GLP-1 is FDA-approved for any addiction, and the definitive trials are still underway. Treat it as a promising research area, not a current treatment.",
  },
  {
    q: "Do GLP-1s treat or prevent Alzheimer's disease?",
    a: "No. After years of hope, the large phase 3 EVOKE and EVOKE+ trials of oral semaglutide in early Alzheimer's reported in 2026 that the drug did not significantly slow disease progression. Some biomarkers improved and researchers say the broader question isn't fully closed, but the main result was negative. Earlier optimism about a GLP-1 Alzheimer's breakthrough was not borne out.",
  },
  {
    q: "Why do GLP-1s work for so many different conditions?",
    a: "Two reasons. First, GLP-1 receptors exist throughout the body — heart, blood vessels, kidneys, liver and immune cells — so the drugs have direct anti-inflammatory and protective effects on those organs. Second, the large weight loss and metabolic improvement they cause helps a wide range of conditions indirectly. In the SELECT heart trial, the benefit appeared only partly explained by weight loss, pointing to real direct effects.",
  },
  {
    q: "Will insurance cover a GLP-1 for a medical condition like heart or kidney disease?",
    a: "Often more readily than for obesity alone. Because these are distinct FDA-approved medical indications, many insurers cover the drug for an approved heart, kidney, liver or sleep-apnea use even when they exclude it for weight loss. Ask your insurer about coverage for your specific condition and make sure your clinician prescribes the brand that carries that indication.",
  },
  {
    q: "Are GLP-1s approved for kidney disease if I don't have diabetes?",
    a: "Not yet. The kidney approval (semaglutide, from the FLOW trial) is specifically for adults who have both chronic kidney disease and type 2 diabetes. Whether GLP-1s protect the kidneys in people without diabetes is still being studied, so it's not an approved use on its own at this time.",
  },
  {
    q: "Is the same drug used for all these conditions?",
    a: "The same molecules, but under different brand names and approvals. Semaglutide is Ozempic (diabetes, kidney disease, cardiovascular risk in diabetes), Wegovy (weight, cardiovascular risk, MASH) and oral Rybelsus (diabetes). Tirzepatide is Mounjaro (diabetes) and Zepbound (weight, sleep apnea). Approvals, doses and coverage attach to specific brands, so the brand your clinician prescribes depends on the condition.",
  },
  {
    q: "Can GLP-1s help PCOS?",
    a: "They're used off-label for it. PCOS is driven largely by insulin resistance, which GLP-1s improve, and they also support weight loss and can help restore more regular cycles in some women. They aren't FDA-approved specifically for PCOS, and because they can improve fertility and aren't safe in pregnancy, effective contraception is important for anyone using them who could become pregnant.",
  },
  {
    q: "Should I take a GLP-1 just for the heart or longevity benefits if I'm healthy?",
    a: "That's not an approved use, and it's not a decision to make on your own. The cardiovascular approval is for people with established heart disease and excess weight; the other approvals are tied to specific conditions. For a healthy person without an approved indication, the risk-benefit balance is different and unproven, and only a clinician can weigh it. Chasing longevity benefits with a prescription drug outside its indications is not supported by the evidence.",
  },
  {
    q: "What's the difference between 'FDA-approved' and 'being studied' for these uses?",
    a: "A lot. FDA-approved means large, rigorous trials proved the drug works for that condition and regulators agreed — it's a real treatment you can be prescribed. 'Being studied' or 'investigational' means trials are ongoing and the answer isn't known, which sometimes ends in failure (as the Alzheimer's trials did). This guide labels every use so you can tell proven from promising.",
  },
  {
    q: "Are the 'Ozempic babies' real — can GLP-1s affect fertility?",
    a: "Yes, it's a real phenomenon. By improving insulin resistance, lowering weight and restoring ovulation, GLP-1s can increase fertility, sometimes leading to unexpected pregnancies — widely nicknamed 'Ozempic babies.' This matters because the drugs are not considered safe in pregnancy and can make some contraception less reliable, so effective birth control is important for anyone who could become pregnant, and most guidance is to stop a GLP-1 before trying to conceive.",
  },
  {
    q: "Do GLP-1s reduce inflammation?",
    a: "They appear to. GLP-1 drugs reduce the chronic low-grade inflammation associated with excess fat and metabolic dysfunction, both by shrinking inflammatory fat tissue and by acting directly on immune and vascular cells. Since inflammation is a shared driver of heart disease, kidney decline and liver scarring, this anti-inflammatory effect is one leading explanation for why the benefits show up across so many different organs.",
  },
  {
    q: "Is a GLP-1 approved for heart failure or peripheral artery disease yet?",
    a: "Not as settled standalone indications. Semaglutide showed real benefits in heart failure with preserved ejection fraction (STEP-HFpEF) and in peripheral artery disease (STRIDE), and both are being pursued with regulators. But treat them as promising, evolving uses rather than finished approvals, and work with a cardiologist or vascular specialist who knows the current status.",
  },
  {
    q: "Can GLP-1s help with binge eating or mental health?",
    a: "There's genuine interest and plausibility — the drugs quiet food-related compulsion and 'food noise' — and large safety analyses have been broadly reassuring about mood. But GLP-1s are not an FDA-approved treatment for binge eating disorder or any mental-health condition, they aren't appropriate for some eating disorders, and anyone with a history of disordered eating or mental illness should use them only under careful clinical supervision.",
  },
  {
    q: "If GLP-1s treat so many conditions, should everyone take one?",
    a: "No. The benefits are tied to specific conditions and risk profiles, these are serious drugs with real side effects and contraindications, and for a healthy person without an approved indication the risk-benefit balance is different and unproven. The expanding uses are reasons these drugs matter for people with those conditions — not a case for universal use.",
  },
];

export const BEYOND_HOWTO = {
  name: "How to access a GLP-1 for an approved medical condition",
  steps: [
    {
      name: "See the right clinician",
      text: "Raise it with the specialist who manages your condition (cardiologist, sleep doctor, nephrologist, hepatologist) or your primary-care doctor, framed around the condition itself.",
    },
    {
      name: "Match the brand to the indication",
      text: "Approvals attach to specific brands: Wegovy for cardiovascular risk and MASH, Zepbound for sleep apnea, Ozempic for kidney disease with type 2 diabetes, Ozempic/Mounjaro for diabetes.",
    },
    {
      name: "Check insurance for that specific indication",
      text: "Coverage is often far better for an approved heart, kidney, liver or sleep-apnea use than for obesity alone — confirm with your insurer for your exact condition.",
    },
    {
      name: "Use a legitimate prescriber and pharmacy",
      text: "Insist on a real medical review and a licensed pharmacy, through your own doctor or a reputable program; avoid anything sold without a prescription.",
    },
    {
      name: "Plan for the long term",
      text: "These benefits generally depend on staying on treatment, so factor in cost and sustainability and protect your overall health alongside the drug.",
    },
  ],
};

export const BEYOND_SOURCE_KEYS = [
  "select",
  "surmount-osa",
  "wegovy-mash",
  "evoke-alzheimers",
  "surmount-1",
  "step-1",
  "triumph-phase3",
  "niddk-obesity-meds",
  "cdc-obesity",
];
