// ─────────────────────────────────────────────────────────────────────────────
// Pillar: "GLP-1 Weight-Loss Pills in 2026 — Orforglipron (Foundayo) & Oral Wegovy".
//
// Timely flagship asset built around the biggest development in the field: the
// arrival of FDA-approved ORAL GLP-1 medicines for weight loss. Oral Wegovy
// (oral semaglutide 25 mg) was approved in December 2025; orforglipron
// (Foundayo), the first oral GLP-1 with no food-or-water restrictions, was
// approved in April 2026. This page is the honest, deeply-sourced explainer.
//
// Every clinical figure traces to a source key in sources.ts — nothing here is
// invented. Trial numbers are reported with their estimand (treatment-regimen
// vs efficacy / on-treatment) because that distinction materially changes the
// headline. Pricing is labelled as a point-in-time listing because it moves.
//
// Content model mirrors the main pillar (h3 / tables / callouts / stat grids)
// so the page reads like a real publication and is cleanly extractable by answer
// engines. Inline links use [label](/path); **bold** is supported.
// ─────────────────────────────────────────────────────────────────────────────

import type { Block, GuideSection } from "./glp1-weight-loss-guide";

export type { Block, GuideSection };

// This article was researched and reviewed on its own date, independent of the
// site-wide CONTENT_REVIEWED constant, because it is a newly published pillar.
export const PILLS_REVIEWED = "2026-10-24";

export const PILLS_META = {
  path: "/glp1-pills",
  title: "GLP-1 Weight-Loss Pills in 2026: Orforglipron & Oral Wegovy",
  description:
    "Two GLP-1 weight-loss pills are now FDA-approved — orforglipron (Foundayo) and oral Wegovy. A cited guide to how well they work, side effects, dosing, cost, and how pills compare to injections.",
  h1: "GLP-1 weight-loss pills: orforglipron (Foundayo), oral Wegovy, and the honest 2026 guide",
  dek:
    "For the first time, you can treat obesity with a GLP-1 you swallow instead of inject. Here is exactly what the trials show, how the two approved pills differ, who they suit, what they cost, how to take them, and where they fall short — researched against the primary trials and FDA labeling.",
  readTime: "46 min read",
};

export const PILLS_SECTIONS: GuideSection[] = [
  {
    id: "what-changed",
    heading: "What just changed — and why it matters",
    summary:
      "For the first time, obesity can be treated with a GLP-1 pill you swallow rather than a weekly injection: oral Wegovy (oral semaglutide 25 mg) was FDA-approved in December 2025, and orforglipron (Foundayo) — the first oral GLP-1 with no food-or-water restrictions — was approved in April 2026.",
    blocks: [
      {
        type: "keytakeaways",
        items: [
          "Two GLP-1 weight-loss pills are now FDA-approved: **oral Wegovy** (oral semaglutide 25 mg), approved December 2025, and **orforglipron (Foundayo)**, approved April 2026.",
          "In its pivotal trial, **orforglipron** produced about **11–12% average weight loss** over 72 weeks at the highest dose. **Oral Wegovy** produced about **16.6%** in people who stayed on treatment over 64 weeks.",
          "Pills still trail the strongest injection. Head-to-head, injectable **tirzepatide reached about 20%** versus roughly 14% for injectable semaglutide — so a pill is a convenience choice as much as an efficacy one.",
          "**Orforglipron's** headline advantage is practical: as a small molecule it can be taken **any time of day, with or without food and water**. Oral Wegovy must be taken on an empty stomach with a strict 30-minute wait.",
          "The same GLP-1 rules still apply: a **boxed warning for thyroid C-cell tumors**, contraindications for medullary thyroid cancer and MEN 2, gastrointestinal side effects, and substantial **weight regain if you stop**.",
          "Pills are easier to scale and distribute than injection pens, which is the real reason this moment matters for access — not that they beat the best needle.",
        ],
      },
      {
        type: "p",
        text: "Since 2021, the most effective obesity medicines have all been injections. Semaglutide (Wegovy) and tirzepatide (Zepbound) rewrote what medical weight loss could achieve, but every one of them came in a pen you injected under the skin once a week. For a lot of people that was a wall. Needle anxiety is real and common, injectables need refrigeration and careful handling, and the manufacturing of injection pens is complex and capacity-limited — which is part of why shortages dogged the category for years.",
      },
      {
        type: "p",
        text: "That wall has now come down. In **December 2025**, the FDA approved the first GLP-1 pill for weight management — a 25 mg once-daily tablet of **oral semaglutide**, marketed as the oral form of **Wegovy**. Then, on **April 1, 2026**, the FDA approved **orforglipron** under the brand name **Foundayo**: the first oral GLP-1 that is a small molecule rather than a peptide, which means — unlike every GLP-1 before it — it can be swallowed at any time of day without fasting or water restrictions. Orforglipron was cleared under the FDA's National Priority Voucher program, a sign of how much weight regulators and the market are putting on needle-free options.",
      },
      {
        type: "p",
        text: "It is worth being precise about why this is a genuinely big deal, because the hype around it is louder than the data warrants. A pill does not make weight loss dramatically more effective — as you will see, the best injection still beats the best pill by a wide margin. What a pill changes is **who can realistically start and stay on treatment**. Roughly [40% of US adults have obesity](/glp1-statistics), and only a small fraction are on medication. Swallowing a tablet is something far more people will accept, tolerate and keep doing than a weekly injection. And because tablets are vastly cheaper and simpler to manufacture at scale than pre-filled injection pens, pills are the format most likely to reach the people — and the countries — that pens never did.",
      },
      {
        type: "callout",
        title: "This page in one sentence",
        text: "A GLP-1 pill is now a real, FDA-approved option — it is more convenient than an injection and, for orforglipron, radically so, but it is not as powerful as the strongest injectables, and all the usual GLP-1 trade-offs still apply.",
      },
      {
        type: "p",
        text: "Below, we walk through both approved pills in depth — what they are, exactly how well they worked in their pivotal trials, how you take them, what they cost in 2026, and how they stack up against the injections you have probably already heard of. We also cover who these pills suit, who should steer clear, how to manage the side effects, and what the research pipeline promises next. Everything clinical here is cited to the primary trial or the FDA label; where sources use different ways of reporting the same number, we tell you which one we are quoting.",
      },
      {
        type: "p",
        text: "If you want the broader foundation first — how GLP-1 drugs work in the body, the full side-effect picture, and how injectable semaglutide and tirzepatide compare — start with our [complete GLP-1 weight-loss guide](/glp1-weight-loss-guide) and come back. If you already know the basics and just want to understand the pills, you are in the right place.",
      },
    ],
  },

  {
    id: "two-pills",
    heading: "Meet the two pills",
    summary:
      "Oral Wegovy (oral semaglutide 25 mg) is a peptide that must be taken fasting with the 30-minute rule; orforglipron (Foundayo) is a small molecule taken any time with or without food. Oral Wegovy produced more weight loss in trials; orforglipron is far more convenient.",
    blocks: [
      {
        type: "p",
        text: "There are two FDA-approved GLP-1 pills for weight loss as of 2026, and they are not the same kind of molecule — which turns out to explain almost everything about how they behave, from how you take them to how reliably they are absorbed.",
      },
      {
        type: "h3",
        text: "Oral Wegovy (oral semaglutide 25 mg)",
      },
      {
        type: "p",
        text: "This is the same **semaglutide** that made Ozempic and Wegovy household names, formulated as a tablet. Semaglutide is a **peptide** — a small protein — and peptides are notoriously hard to get through the stomach, because stomach acid and digestive enzymes break them down before they can be absorbed. To solve that, the tablet includes an absorption enhancer and has to be taken under strict conditions: on an empty stomach, with no more than a few sips of plain water, followed by a 30-minute wait before eating, drinking or taking anything else. Even then, only a small and somewhat variable fraction of the dose gets into the bloodstream, which is why the maintenance dose is a hefty 25 mg (compared with milligram-scale injectable doses). It was approved for chronic weight management in December 2025, and because it is semaglutide, it carries the same cardiovascular-risk-reduction indication the injection earned in the SELECT trial.",
      },
      {
        type: "h3",
        text: "Orforglipron (Foundayo)",
      },
      {
        type: "p",
        text: "Orforglipron is a different animal: a **small-molecule** GLP-1 receptor agonist, not a peptide. Small molecules survive the gut far better, so orforglipron does not need the empty-stomach ritual at all — it can be taken at any time of day, with or without food or water. That single property is its headline selling point, because the fasting rule is one of the most common reasons people struggle to take oral semaglutide correctly and consistently. Orforglipron was discovered by Chugai and developed by Eli Lilly, and it was approved for chronic weight management under the brand name Foundayo in April 2026. Lilly has also studied it in type 2 diabetes, though that indication was not yet approved at launch.",
      },
      {
        type: "table",
        caption: "The two approved GLP-1 pills at a glance",
        headers: ["", "Oral Wegovy (oral semaglutide)", "Orforglipron (Foundayo)"],
        rows: [
          ["Molecule type", "Peptide (GLP-1)", "Small molecule (GLP-1)"],
          ["Maker", "Novo Nordisk", "Eli Lilly"],
          ["FDA approval", "December 2025", "April 2026"],
          ["Maintenance dose", "25 mg once daily", "Up to 17.2 mg once daily"],
          ["How you take it", "Empty stomach, ≤4 oz water, wait 30 min", "Any time — with or without food/water"],
          ["Trial weight loss (top dose)", "~16.6% (on-treatment, 64 wks)", "~11–12% (72 wks)"],
          ["Also approved to cut heart risk", "Yes (via SELECT)", "Not at launch"],
          ["Diabetes version", "Rybelsus (lower doses)", "Studied; not yet approved"],
        ],
      },
      {
        type: "p",
        text: "Hold two facts in your head at once, because they pull in opposite directions. **Oral Wegovy lost more weight in its trial** (about 16.6% in people who stayed on treatment, versus about 11–12% for orforglipron). But **orforglipron is dramatically more convenient**, because the fasting rule is gone. For many people the convenience will matter more than a few percentage points — a medicine you can actually take correctly every single day beats a more potent one you keep getting wrong. For others, especially those chasing maximum weight loss, the extra efficacy of oral semaglutide, or an injection entirely, will win. There is no universally correct answer; there is only the one that fits your goals, your tolerance and your life.",
      },
      {
        type: "callout",
        title: "A note on names",
        text: "Oral semaglutide is not new in itself — a lower-dose version has been sold as Rybelsus for type 2 diabetes since 2019. What is new is the high-dose 25 mg tablet approved specifically for weight management and marketed under the Wegovy brand. When we say oral Wegovy on this page, we mean that 25 mg weight-loss tablet, not Rybelsus.",
      },
    ],
  },

  {
    id: "how-they-work",
    heading: "How GLP-1 pills actually work in the body",
    summary:
      "GLP-1 pills work the same way the injections do — by activating the GLP-1 receptor, which curbs appetite, slows how fast the stomach empties, quiets 'food noise,' and improves blood-sugar control. The pill changes how the drug is delivered, not how it works once it is in you.",
    blocks: [
      {
        type: "p",
        text: "To use these medicines well, it helps to understand what they are actually doing — because the mechanism explains both why they work and why the side effects and the weight regain happen. The good news is that a pill and an injection act on the body in exactly the same way once the drug is absorbed; the only difference is how the drug gets in.",
      },
      {
        type: "p",
        text: "GLP-1 — glucagon-like peptide-1 — is a hormone your gut releases naturally after you eat. It is one of the signals that tells your brain and body 'food has arrived, you can stand down.' GLP-1 receptor agonists are drugs that mimic that hormone and switch on the same receptor, but far more strongly and for far longer than the natural version. Flipping that switch does several things at once:",
      },
      {
        type: "ul",
        items: [
          "**It turns down appetite.** By acting on appetite-regulating centers in the brain, GLP-1 drugs reduce hunger and increase the sense of fullness, so you are satisfied with less food and feel full sooner.",
          "**It slows gastric emptying.** The drug slows how quickly food leaves your stomach, which prolongs fullness after a meal — and is also the main reason nausea happens, especially early and after dose increases.",
          "**It quiets 'food noise.'** Many people describe a dramatic reduction in the constant, intrusive thoughts about food — the background craving and preoccupation — which makes it far easier to eat less without white-knuckling it.",
          "**It improves blood-sugar control.** GLP-1 drugs prompt the pancreas to release insulin when blood sugar is high and reduce the release of glucagon, which is why they lower A1C and why they began as diabetes medicines before their weight effects were fully appreciated.",
        ],
      },
      {
        type: "p",
        text: "Add those effects together and the result is a genuine, biology-level change in how much you eat and how your body handles food — not a stimulant, not a 'fat burner,' and not willpower in a bottle. You eat less because you are genuinely less hungry and more easily full, and the metabolic improvements follow. This is also why the drugs are so consistent across people: they are working on the underlying regulatory system, not nudging behavior around the edges.",
      },
      {
        type: "p",
        text: "It is equally why stopping tends to undo the benefit. The drug is suppressing appetite and food noise for as long as it is in your system; remove it, and those signals return, which is the mechanism behind the weight regain we cover later. And it is why the side effects are what they are: the same slowed stomach emptying that keeps you full also causes the nausea, and pushing the dose up too fast overwhelms the gut's ability to adapt. Understanding this makes the whole medicine more predictable — the appetite suppression, the GI effects, and the regain are all the same lever pulled from different angles.",
      },
      {
        type: "p",
        text: "So what does a pill change? Only the delivery. An injection puts the drug under the skin, from where it is absorbed steadily. A pill has to survive the stomach and be absorbed through the gut lining, which is the hard part — and the reason oral semaglutide needs its empty-stomach routine and orforglipron's small-molecule design is such an advance. But once the drug is in your bloodstream and reaching the receptor, a swallowed GLP-1 does the same job as an injected one. For the full foundation on the mechanism and the whole drug class, see our deep dive on [how GLP-1 medications work](/guides/how-glp1-medications-work).",
      },
    ],
  },

  {
    id: "orforglipron",
    heading: "Orforglipron (Foundayo) in depth",
    summary:
      "In the phase 3 ATTAIN-1 trial, orforglipron's highest dose produced about 11.2% weight loss on a treatment-regimen basis (about 12.4% among those who stayed on treatment) over 72 weeks, with roughly 6 in 10 losing at least 10%. Its standout feature is that it needs no food or water restrictions.",
    blocks: [
      {
        type: "p",
        text: "Orforglipron is the more novel of the two pills and the one generating the most excitement, so it is worth understanding in detail — both what it delivered and where it falls short.",
      },
      {
        type: "h3",
        text: "What the pivotal trial showed",
      },
      {
        type: "p",
        text: "The approval rests chiefly on **ATTAIN-1**, a phase 3 trial in adults with obesity (and without type 2 diabetes), published in the New England Journal of Medicine. Participants were randomized to one of several orforglipron doses or placebo and followed for **72 weeks** — about 16 months. Weight loss, as with all these trials, is reported two ways, and the gap between them matters: the **treatment-regimen estimand** counts everyone as randomized regardless of whether they stuck with the drug (the more conservative, real-world number), while the **efficacy estimand** reflects what happened in people who actually stayed on treatment.",
      },
      {
        type: "statgrid",
        stats: [
          { value: "−11.2%", label: "Mean weight change at the highest dose over 72 weeks (treatment-regimen estimand) vs −2.1% on placebo" },
          { value: "~12.4%", label: "Average weight loss among people who stayed on the highest dose (efficacy estimand)" },
          { value: "~27 lb", label: "Average absolute weight lost at the highest dose" },
          { value: "~60%", label: "Share of people on the highest dose who lost at least 10% of body weight" },
          { value: "~40%", label: "Share who lost at least 15% of body weight at the highest dose" },
          { value: "72 wks", label: "Trial duration — about 16 months to the primary endpoint" },
        ],
      },
      {
        type: "p",
        text: "In plain terms: at the top dose, orforglipron took off around **11% of body weight** counting everyone, or closer to **12.4%** among people who stayed the course — roughly **27 pounds** on average. About **6 in 10** people on the highest dose lost at least a tenth of their body weight, and about **4 in 10** lost at least 15%. Those are meaningful, clinically useful results for a pill. They also sit clearly below what the best injections achieve, which is the honest framing to keep in mind throughout.",
      },
      {
        type: "p",
        text: "The weight loss came with the cardiometabolic improvements you would expect when people lose this much: reductions in waist circumference, blood pressure, and cholesterol and triglyceride measures. One striking finding involved blood sugar: among the roughly 1,100 ATTAIN-1 participants who had **prediabetes** at the start, up to about **91%** of those on orforglipron returned to near-normal blood sugar by the end, versus about **42%** on placebo. That does not make orforglipron a diabetes drug — it is not approved for that — but it signals real metabolic benefit beyond the number on the scale.",
      },
      {
        type: "h3",
        text: "What about people with type 2 diabetes?",
      },
      {
        type: "p",
        text: "A companion trial, **ATTAIN-2**, studied orforglipron in adults who had both obesity and **type 2 diabetes** over 72 weeks. As is typical — people with diabetes tend to lose somewhat less weight on GLP-1s than people without — the weight loss was more modest: about **10.5%** at the highest dose (roughly 23 pounds) versus about 2.5% on placebo, on the efficacy estimand. On blood sugar, orforglipron cut A1C by up to about **1.8 percentage points**, and about **three-quarters** of people on the top dose reached an A1C at or below 6.5% — the threshold often used to define diabetes remission-range control — compared with about 11% on placebo. Those are strong glycemic numbers. But to be clear: **orforglipron's diabetes indication was not FDA-approved at launch.** Foundayo is approved for weight management; a diabetes approval, if it comes, would follow separately.",
      },
      {
        type: "h3",
        text: "The convenience advantage, explained",
      },
      {
        type: "p",
        text: "Orforglipron's defining feature is not its efficacy — it is its ease of use. Because it is a small molecule, it is absorbed reliably through the gut without the fragile chemistry that forces oral semaglutide into its empty-stomach, no-water, wait-30-minutes routine. You can take orforglipron whenever is convenient, with your morning coffee or with dinner, and you do not have to orchestrate your day around it. For anyone who has tried to maintain a strict daily fasting window around a pill — and found that one forgotten glass of water or one early breakfast meant a wasted dose — this is a genuine quality-of-life difference, and it is likely to translate into better real-world adherence, which is where oral drugs usually lose their edge.",
      },
      {
        type: "h3",
        text: "Who orforglipron suits best",
      },
      {
        type: "p",
        text: "Put the pieces together and a clear profile emerges. Orforglipron is the strongest fit for someone who wants a medically serious weight-loss option but for whom a weekly injection is a real barrier — because of needle anxiety, lifestyle, or simply preference — and who also can't, or won't, build their day around oral semaglutide's fasting ritual. For that person, orforglipron turns 'no realistic option' into a genuine one, and its any-time, any-food dosing is exactly the feature that makes long-term adherence plausible. It is a less natural fit for someone chasing the maximum possible weight loss, who would be better served by oral Wegovy or an injection. The honest summary: orforglipron trades a few percentage points of efficacy for a large gain in convenience, and whether that is a good trade is entirely about which of those you value more.",
      },
      {
        type: "p",
        text: "Adherence is the quiet reason that trade can be worth more than it looks. The weight-loss figures from any trial come from people being supported and reminded to take their medicine; in ordinary life, the drug you actually take consistently beats the one you keep getting wrong or giving up on. A pill with no restrictions is simply easier to take every day for months and years — and since GLP-1 therapy is a long game, the option you'll still be taking next year may matter more than the one with the better trial headline.",
      },
      {
        type: "callout",
        title: "A fair caveat on the dose numbers",
        text: "Some early trial reports described orforglipron doses using different milligram figures than the final marketed tablet strengths (0.8 mg up to 17.2 mg). What matters for you is not matching trial numbers to tablet numbers but following the titration schedule your prescriber sets — the drug is stepped up gradually regardless of how the doses are labelled.",
      },
    ],
  },

  {
    id: "oral-wegovy",
    heading: "Oral Wegovy (oral semaglutide) in depth",
    summary:
      "In the OASIS-4 trial, oral semaglutide 25 mg produced about 16.6% weight loss in people who stayed on treatment over 64 weeks (about 13.6% counting everyone), with roughly 1 in 3 adherent patients losing at least 20%. The catch is the strict empty-stomach dosing routine.",
    blocks: [
      {
        type: "p",
        text: "If orforglipron is the convenience play, oral Wegovy is the efficacy play among the pills — it lost more weight in its trial, at the cost of a dosing routine you have to respect.",
      },
      {
        type: "h3",
        text: "What the pivotal trial showed",
      },
      {
        type: "p",
        text: "The approval was supported by **OASIS 4**, a 64-week trial of oral semaglutide 25 mg in adults with obesity, or overweight plus at least one weight-related condition. The headline results:",
      },
      {
        type: "statgrid",
        stats: [
          { value: "−16.6%", label: "Mean weight loss in people who stayed on treatment over 64 weeks (vs ~2.7% on placebo)" },
          { value: "−13.6%", label: "Mean weight loss counting everyone randomized (vs ~2.2% on placebo)" },
          { value: "~1 in 3", label: "Adherent participants who lost at least 20% of body weight" },
          { value: "64 wks", label: "Trial duration to the primary endpoint" },
        ],
      },
      {
        type: "p",
        text: "At roughly **16.6%** in people who stayed on treatment — and about **13.6%** counting everyone — oral semaglutide landed in the same neighborhood as the *injectable* 2.4 mg Wegovy dose, which is a striking result for a pill. About **one in three** people who stuck with it lost at least a fifth of their body weight. Notably, serious adverse events were actually less frequent on the drug (around 3.9%) than on placebo (around 8.8%) in the trial, and the overall safety picture matched what has been seen with semaglutide for years. Because oral Wegovy is semaglutide, it also inherits the drug's proven **cardiovascular benefit** — the FDA approval includes reducing the risk of major cardiovascular events, resting on the large [SELECT trial](/medications/semaglutide) that showed a 20% reduction in heart attacks, strokes and cardiovascular death in people with obesity and existing heart disease.",
      },
      {
        type: "h3",
        text: "The catch: the empty-stomach rule",
      },
      {
        type: "p",
        text: "Oral semaglutide's weakness is the flip side of its chemistry. Because it is a peptide that is hard to absorb, you have to take it exactly right or it barely works. Per the prescribing information, that means:",
      },
      {
        type: "ol",
        items: [
          "Take it first thing in the morning, on an **empty stomach**, having not eaten overnight.",
          "Swallow it with **no more than about 4 ounces (around 120 mL) of plain water** — not coffee, not juice, just water.",
          "**Wait at least 30 minutes** before eating, drinking anything else, or taking any other oral medications or supplements.",
          "Swallow the tablet **whole** — do not split, crush or chew it, which would wreck the absorption chemistry.",
        ],
      },
      {
        type: "p",
        text: "This is not a suggestion; it is the difference between the drug working and not working. Eat too soon, wash it down with coffee, or take it alongside your other morning pills, and you can blunt absorption enough to undercut the result. For disciplined morning-routine people, it is a minor ritual. For anyone whose mornings are chaotic — kids, shift work, early meetings, other time-sensitive medications — it is a real adherence hazard, and it is precisely the problem orforglipron sidesteps.",
      },
      {
        type: "h3",
        text: "Making the empty-stomach routine work in real life",
      },
      {
        type: "p",
        text: "Because getting the routine right is the whole ballgame with oral semaglutide, a few practical habits make the difference between a dose that works and one that's wasted:",
      },
      {
        type: "ul",
        items: [
          "**Anchor it to waking up.** Keep the tablets on your nightstand and take the dose the moment you wake, before coffee, food or any other pill — that is the easiest way to guarantee a true empty stomach.",
          "**Set a 30-minute timer.** Treat the wait as a hard rule, not a rough guess; use the time to shower or get ready, then eat.",
          "**Water only, and not much of it.** No more than about 4 ounces, and nothing but plain water — coffee, tea and juice all count as breaking the fast for absorption purposes.",
          "**Separate your other morning medications.** Anything else you take in the morning — including supplements and, importantly, other time-sensitive prescriptions — goes after the 30-minute window, so plan around that.",
          "**If mornings are genuinely unworkable, say so.** A dose you routinely get wrong is worse than choosing a medicine designed for your life. This exact friction is why orforglipron, with no food-or-water restriction, exists.",
        ],
      },
      {
        type: "callout",
        title: "Why the dose looks so big",
        text: "Injectable semaglutide maintenance is 2.4 mg a week; the oral maintenance dose is 25 mg a day. That is not a stronger drug — it is the same molecule dosed far higher because only a small fraction of a swallowed peptide is actually absorbed. The empty-stomach rule exists to make that small fraction as consistent as possible.",
      },
      {
        type: "p",
        text: "One last point of lineage worth knowing: oral semaglutide is not brand-new technology. A lower-dose version has been sold as Rybelsus for type 2 diabetes since 2019, so the absorption approach has years of real-world use behind it. What 2025 added was the higher 25 mg dose studied and approved specifically for weight management — the same proven delivery system, turned up to a weight-loss-effective level.",
      },
    ],
  },

  {
    id: "pills-vs-injections",
    heading: "Pills vs injections: the honest comparison",
    summary:
      "The best injection still wins on raw efficacy: tirzepatide reached about 20% weight loss head-to-head, versus roughly 14–15% for injectable semaglutide, about 16.6% for oral Wegovy, and about 11–12% for orforglipron. Pills win on convenience, needle avoidance, and likely access — not on peak results.",
    blocks: [
      {
        type: "p",
        text: "This is the comparison everyone actually wants, so let us put the numbers side by side — honestly, with the caveat that these come from different trials with different designs, not a single head-to-head bake-off. Weight-loss percentages also depend on the estimand, so the figures below are the commonly cited headline numbers for each.",
      },
      {
        type: "table",
        caption: "Approximate average weight loss by medication (headline trial figures)",
        headers: ["Medication", "Format", "Approx. weight loss", "Trial / basis"],
        rows: [
          ["Tirzepatide (Zepbound)", "Injection, weekly", "~20%", "SURMOUNT-5, 72 wks, head-to-head"],
          ["Oral Wegovy (oral semaglutide 25 mg)", "**Pill**, daily", "~16.6%", "OASIS-4, 64 wks, on-treatment"],
          ["Semaglutide (Wegovy)", "Injection, weekly", "~14–15%", "STEP 1 / SURMOUNT-5, ~68–72 wks"],
          ["Orforglipron (Foundayo)", "**Pill**, daily", "~11–12%", "ATTAIN-1, 72 wks"],
        ],
      },
      {
        type: "p",
        text: "The ranking is clear and worth sitting with. **Injectable tirzepatide remains the most effective approved obesity medicine** — in the SURMOUNT-5 head-to-head it produced about **20%** weight loss versus about **14%** for injectable semaglutide. Among the pills, **oral Wegovy (~16.6%)** actually edged out injectable semaglutide and comfortably beat **orforglipron (~11–12%)**. So the pills do not uniformly lose to the needles — oral Wegovy is genuinely competitive — but the single most powerful option is still an injection, and orforglipron, the most convenient pill, is also the least potent of this group.",
      },
      {
        type: "h3",
        text: "So why would anyone choose a pill?",
      },
      {
        type: "p",
        text: "Because efficacy on a trial chart is not the same as efficacy in your life. A pill wins on four fronts that a chart does not capture:",
      },
      {
        type: "ul",
        items: [
          "**No needles.** For people with genuine needle phobia — a large group — this is the difference between taking a medicine and not taking one at all.",
          "**Simplicity and storage.** No pens to refrigerate, prime, inject and dispose of; no sharps; nothing that complains about being left in a warm bag for an afternoon.",
          "**Easier to scale and distribute.** Tablets are far cheaper and simpler to manufacture at volume than pre-filled injection pens, which is why pills are the format most likely to ease shortages and reach more people and more countries over time.",
          "**Lower friction to start.** Swallowing a pill feels less medical and less daunting than starting weekly injections, which matters for the many people sitting on the fence.",
        ],
      },
      {
        type: "p",
        text: "The honest way to frame it: **injections are the efficacy choice; pills are the convenience and access choice.** If your single priority is maximum weight loss and you can tolerate a weekly injection, tirzepatide is still the front-runner, and you can compare the leading programs on our [best GLP-1 providers](/best-glp1-providers) page. If a needle is a dealbreaker, or if the simplicity of a daily tablet is what will actually keep you consistent, a pill is now a legitimate, FDA-approved path rather than a compromise you have to apologize for.",
      },
      {
        type: "h3",
        text: "A simple way to decide",
      },
      {
        type: "p",
        text: "If you want a rule of thumb rather than a spreadsheet, match your top priority to the option that serves it:",
      },
      {
        type: "ul",
        items: [
          "**Maximum weight loss, and a weekly needle is fine** → injectable tirzepatide, the most effective approved option.",
          "**A pill, and you want the most weight loss a pill can give** → oral Wegovy (oral semaglutide), provided you can commit to the empty-stomach routine.",
          "**A pill, and simplicity and consistency matter most** → orforglipron (Foundayo), with no food-or-water restrictions.",
          "**You also want proven heart-risk reduction** → a semaglutide option (oral Wegovy or injectable Wegovy), which carries that indication.",
          "**Cost or coverage is the deciding factor** → compare the all-in monthly price at your likely maintenance dose across formats before committing, since the cheapest route varies by insurance and dose.",
          "**Needle phobia is the whole problem** → either pill, which turns 'no treatment at all' into a real option.",
        ],
      },
      {
        type: "p",
        text: "And if you are genuinely torn, that is a conversation worth having with a clinician who can weigh your medical history, your other medications, and what you are most likely to stick with. The best drug on paper is useless if it is not the one you will actually take every week or every day.",
      },
      {
        type: "callout",
        title: "A realistic expectation-setter",
        text: "Whatever you choose, the averages hide a wide range. Some people lose far more than the trial mean; some lose much less. Reaching an effective maintenance dose, giving it the full months it needs, and keeping up the nutrition and activity habits alongside it matter at least as much as which specific drug is in the bottle.",
      },
    ],
  },

  {
    id: "who",
    heading: "Who should — and shouldn't — consider a pill",
    summary:
      "The eligibility criteria are the same as for injectable GLP-1s: generally a BMI of 30 or higher, or 27 or higher with a weight-related condition. Pills are not an option for people with a history of medullary thyroid cancer or MEN 2, and a clinician screens for pancreatitis history, pregnancy and other cautions.",
    blocks: [
      {
        type: "p",
        text: "A GLP-1 pill is still a prescription medicine for a medical condition, not a lifestyle supplement. The eligibility rules are the same ones that apply to the injections, and the safety screening is just as important.",
      },
      {
        type: "h3",
        text: "Who qualifies",
      },
      {
        type: "p",
        text: "The standard thresholds, consistent with how obesity medicines are prescribed generally, are a **body mass index (BMI) of 30 or higher**, or **27 or higher if you also have a weight-related health condition** such as high blood pressure, high cholesterol, type 2 diabetes, or obstructive sleep apnea. A clinician confirms eligibility during an intake, factors in your overall health, and decides whether a pill, an injection, or no medication is the right call. You can get a rough sense of where you stand with our [eligibility tool](/tools/am-i-eligible-for-glp1), but that is a starting point for a conversation, not a prescription.",
      },
      {
        type: "h3",
        text: "Who should not take these pills",
      },
      {
        type: "p",
        text: "Both pills carry the GLP-1 class **boxed warning for thyroid C-cell tumors**, based on rodent studies; the human relevance has not been established, but the warning drives firm contraindications. Per the Foundayo label, orforglipron is **contraindicated** — meaning it should not be used at all — in people with:",
      },
      {
        type: "ul",
        items: [
          "A **personal or family history of medullary thyroid carcinoma (MTC)**, a specific type of thyroid cancer.",
          "**Multiple Endocrine Neoplasia syndrome type 2 (MEN 2)**, a hereditary condition that raises thyroid cancer risk.",
          "A **known serious hypersensitivity** (severe allergic reaction) to the drug or its ingredients.",
        ],
      },
      {
        type: "p",
        text: "Beyond those hard stops, a clinician will weigh several cautions. **Acute pancreatitis** has been reported with GLP-1 receptor agonists, including orforglipron, so a history of pancreatitis warrants careful discussion, and the drug should be stopped if pancreatitis is suspected. Orforglipron is **not recommended in people with severe gastroparesis** (badly delayed stomach emptying) or **severe liver impairment**. These medicines are also **not for use in pregnancy** — they are intended for weight loss, not something to pursue while trying to conceive or while pregnant or breastfeeding — and the label even advises using or adding a barrier method of contraception around starting the drug and around each dose increase, because of how an oral medicine can affect the absorption of other oral drugs, including the pill. If you take other oral medications, tell your prescriber: strong interactions with certain drugs can change how much orforglipron you should take.",
      },
      {
        type: "callout",
        title: "Not a replacement for the basics",
        text: "GLP-1 pills work best as one part of a plan that still includes adequate protein, resistance training to protect muscle, and sustainable eating changes. The medicine quiets appetite and makes those changes easier to stick to — it does not make them optional.",
      },
      {
        type: "p",
        text: "Oral Wegovy carries the same class warning and a similar screening logic, with its own labeling specifics. The practical point is the same for both: these are real drugs with real contraindications, and the medical intake that screens for them is a feature, not a hurdle. Any service that will sell you a GLP-1 — pill or injection — without a genuine clinical review is a [red flag](/best-glp1-providers), not a convenience.",
      },
    ],
  },

  {
    id: "how-to-take",
    heading: "How you take them, and what to expect month by month",
    summary:
      "Both pills are started low and stepped up roughly every 30 days to limit side effects. Orforglipron climbs across six tablet strengths from 0.8 mg to a maximum of 17.2 mg; oral Wegovy climbs to 25 mg. Appetite usually quiets within the first weeks, while most weight loss accrues over the first 6–9 months.",
    blocks: [
      {
        type: "p",
        text: "GLP-1 medicines are never started at the full dose. Both pills use a gradual, stepwise escalation — climbing one level roughly every 30 days — specifically to give your gut time to adapt and to minimize the nausea and other gastrointestinal effects that are worst early and after each increase.",
      },
      {
        type: "h3",
        text: "Orforglipron (Foundayo) titration",
      },
      {
        type: "p",
        text: "Foundayo comes in **six tablet strengths — 0.8, 2.5, 5.5, 9, 14.5 and 17.2 mg** — taken once daily, at any time, with or without food or water. Per the label, treatment starts at **0.8 mg once daily**, then increases to **2.5 mg after at least 30 days**, then to **5.5 mg after at least another 30 days**. From there, if more weight loss is needed and the drug is tolerated, the dose can step up to **9, 14.5, or 17.2 mg**, again with at least 30 days at each level, up to the **maximum of 17.2 mg once daily**. Not everyone needs to climb to the top — some people do well and stay at a middle strength. Two practical label details matter: if you **miss 7 or more consecutive days**, your prescriber may have you restart escalation at a lower dose; and if you take a **strong CYP3A4-inhibiting medication**, the maximum is capped at 9 mg.",
      },
      {
        type: "table",
        caption: "Orforglipron (Foundayo) dose-escalation schedule, per the FDA label",
        headers: ["Step", "Dose", "Minimum time at this step"],
        rows: [
          ["Start", "0.8 mg once daily", "≥30 days"],
          ["2", "2.5 mg once daily", "≥30 days"],
          ["3", "5.5 mg once daily", "≥30 days"],
          ["4+ (as needed, if tolerated)", "9 → 14.5 → 17.2 mg", "≥30 days at each"],
          ["Maximum", "17.2 mg once daily", "—"],
        ],
      },
      {
        type: "h3",
        text: "Oral Wegovy (oral semaglutide) titration",
      },
      {
        type: "p",
        text: "Oral Wegovy also starts low and climbs roughly monthly to the **25 mg** maintenance dose, following the escalation schedule your prescriber sets — always taken under the empty-stomach, ≤4-oz-water, wait-30-minutes rule described earlier. The same logic applies: the steps exist to blunt side effects, and rushing them tends to cause more nausea, not faster results.",
      },
      {
        type: "h3",
        text: "What the first year actually feels like",
      },
      {
        type: "p",
        text: "Here is a realistic timeline, consistent with how GLP-1s behave generally:",
      },
      {
        type: "ul",
        items: [
          "**Weeks 1–4:** Many people notice reduced appetite and quieter 'food noise' within the first week or two, even at the low starting dose. Weight loss at this stage is usually small — the starting dose is about adaptation, not results. Mild nausea is common.",
          "**Months 2–3:** As you step up, appetite suppression deepens and the scale starts moving more noticeably. Side effects tend to flare briefly after each dose increase, then settle.",
          "**Months 4–9:** This is where most of the weight comes off. In the trials, the bulk of the loss accrued over roughly the first six to nine months before the curve flattened.",
          "**Months 9–16 and beyond:** Weight loss slows and plateaus as your body reaches a new set point for that dose. Reaching and holding an effective maintenance dose — and keeping up protein and strength training — is what consolidates the result.",
        ],
      },
      {
        type: "p",
        text: "If you have reached a proper maintenance dose and given it several months but see little effect, that is a conversation to have with your clinician about dose, adherence, or switching approaches — not a reason to quietly double up on your own. For a deeper look at how results unfold over time, see our [GLP-1 results timeline](/guides/glp1-results-timeline).",
      },
    ],
  },

  {
    id: "side-effects",
    heading: "Side effects and how to manage them",
    summary:
      "The most common side effects are gastrointestinal — nausea, vomiting, constipation and diarrhea — mostly mild to moderate and worst early and after dose increases. In orforglipron's trial, nausea affected about a third at the top dose; discontinuation for side effects rose with dose. Rare serious risks include pancreatitis.",
    blocks: [
      {
        type: "p",
        text: "GLP-1 pills have the same side-effect fingerprint as the injections, because they act on the same receptor. The overwhelming majority of side effects are gastrointestinal, dose-related, and temporary — but it helps to know what is normal, what is manageable, and what is a reason to call your clinician.",
      },
      {
        type: "h3",
        text: "The common ones (and how often)",
      },
      {
        type: "p",
        text: "In ATTAIN-1, the most common adverse events with orforglipron were gastrointestinal and mostly mild to moderate. At the highest dose, the trial reported **nausea in about 34%** of people (versus about 10% on placebo), **vomiting in about 24%** (versus about 3.5%), and **constipation and diarrhea each in roughly a quarter**. These effects clustered during dose escalations and tended to ease as the body adapted. Oral semaglutide's profile is the familiar semaglutide one — nausea most prominent, plus constipation, diarrhea, vomiting and reduced appetite — with, in OASIS-4, serious adverse events no more frequent than placebo.",
      },
      {
        type: "p",
        text: "Side effects also drive some people off the drug, and that rises with dose. In ATTAIN-1, discontinuation due to adverse events was about **5.3% at the lowest dose, 7.9% in the middle, and 10.3% at the highest**, versus about 2.7% on placebo. In other words, at the top dose roughly one in ten people stopped because of side effects — a reminder that 'more dose' is not automatically 'more benefit' for everyone, and that the slow titration exists for good reason.",
      },
      {
        type: "h3",
        text: "Practical ways to manage the GI effects",
      },
      {
        type: "ul",
        items: [
          "**Eat smaller, slower meals** and stop at comfortably full — the drug makes overeating feel worse, and leaning into that cue reduces nausea.",
          "**Go easy on fatty, fried and very rich foods,** which tend to sit heaviest when stomach emptying is slowed.",
          "**Stay hydrated,** which blunts both nausea and the constipation; fiber and, if needed, a clinician-approved stool softener help with the latter.",
          "**Respect the titration.** If a dose step is rough, your clinician can hold you at the current dose longer rather than pushing up on schedule.",
          "**Protect your muscle.** Any rapid weight loss costs some lean mass unless you prioritize **protein** and do **resistance training** a few times a week — this is the single most important thing you can do alongside the drug, and it shifts what you lose toward fat.",
        ],
      },
      {
        type: "h3",
        text: "The rare but serious risks",
      },
      {
        type: "p",
        text: "Beyond the day-to-day GI effects, the class carries a few uncommon but important risks: **acute pancreatitis** (stop the drug and seek care for severe, persistent abdominal pain, especially radiating to the back), **gallbladder problems** (which can accompany rapid weight loss), and the **thyroid C-cell tumor** signal behind the boxed warning and the MTC/MEN 2 contraindications. Dehydration from persistent vomiting or diarrhea can also stress the kidneys, so keep fluids up and report anything severe or prolonged. These events are rare, but knowing the warning signs is part of taking the medicine responsibly. For the fuller picture, see our guide to [GLP-1 side effects and how to manage them](/guides/glp1-side-effects-and-how-to-manage-them).",
      },
      {
        type: "h3",
        text: "When to call your clinician",
      },
      {
        type: "p",
        text: "Most GLP-1 side effects are a nuisance you ride out, not an emergency. But a handful of symptoms warrant prompt medical contact rather than waiting:",
      },
      {
        type: "ul",
        items: [
          "**Severe, persistent abdominal pain** — especially if it radiates to your back or comes with vomiting — which can signal pancreatitis and means stopping the drug and seeking care.",
          "**Signs of a gallbladder problem** such as pain in the upper-right abdomen, fever, or yellowing of the skin or eyes.",
          "**Relentless vomiting or diarrhea** that you can't keep ahead of with fluids, because dehydration can harm the kidneys.",
          "**Symptoms around the neck** — a lump, trouble swallowing, shortness of breath, or persistent hoarseness — given the thyroid C-cell warning.",
          "**Any severe allergic reaction** — swelling, hives, trouble breathing — which is a medical emergency.",
        ],
      },
      {
        type: "p",
        text: "Knowing these is not about anxiety; it is about being able to tell ordinary, expected discomfort (which fades) from the rare signals that need attention (which don't). When in doubt, a quick message to your prescriber is always the right move — that is part of what the ongoing clinical relationship is for.",
      },
      {
        type: "callout",
        title: "The pattern to remember",
        text: "Expect the worst of the side effects early and right after each dose increase, expect them to fade as your body adapts, and treat anything severe, persistent, or sharply painful as a reason to call your clinician rather than tough it out.",
      },
    ],
  },

  {
    id: "muscle-nutrition",
    heading: "Protecting your muscle and eating for results",
    summary:
      "Any fast weight loss costs some muscle unless you defend it. On a GLP-1 pill, the two levers that matter most are eating enough protein and doing resistance training a few times a week — together they shift what you lose toward fat and protect your metabolism, strength and long-term results.",
    blocks: [
      {
        type: "p",
        text: "This section is the one most people skip and later wish they hadn't. GLP-1 medicines — pills included — are extraordinarily good at reducing how much you eat. That is the point. But eating much less without a plan means you lose not just fat but muscle, and losing muscle is bad on every axis: it weakens you, it lowers the metabolic rate that helps keep weight off, and it is exactly the tissue you least want to sacrifice. The drug does not specifically destroy muscle; under-eating protein and not training does. The fix is entirely in your control.",
      },
      {
        type: "h3",
        text: "Eat enough protein",
      },
      {
        type: "p",
        text: "When you are in a calorie deficit, protein is what tells your body to preserve muscle rather than break it down for fuel. The practical problem on a GLP-1 is that the drug kills your appetite, so hitting a protein target takes deliberate effort — it is easy to drift through a day on a few hundred calories of whatever is easiest. Make protein the non-negotiable part of every meal: lean meats, fish, eggs, dairy, legumes, tofu, or a protein shake when food feels like too much. Because your total intake is lower, protein should take up a bigger share of the plate than it used to, and eating it first helps you get it in before fullness shuts the meal down.",
      },
      {
        type: "h3",
        text: "Do resistance training",
      },
      {
        type: "p",
        text: "Protein gives your body the raw material to keep muscle; resistance training gives it the reason to. Lifting weights, using resistance bands, or doing bodyweight strength work two to four times a week is the single most effective thing you can do to make sure the weight you lose is fat and not muscle. You do not need a complicated program — a few compound movements covering the major muscle groups, done consistently with gradually increasing effort, is plenty. Cardio is good for your heart and overall health, but it is resistance training specifically that preserves lean mass during weight loss.",
      },
      {
        type: "p",
        text: "There is a worrying wrinkle worth naming: research has found that many people actually *reduce* their physical activity while losing weight on GLP-1 drugs, which is the opposite of what protects muscle. It is easy to see why — lower energy intake can mean lower energy — but it means you have to be intentional. Build the strength habit early, while motivation is high and the scale is moving, so it is established by the time the novelty fades.",
      },
      {
        type: "h3",
        text: "The rest of the plate",
      },
      {
        type: "ul",
        items: [
          "**Fiber and water** blunt the constipation the drug can cause and help you feel full on fewer calories — vegetables, fruit, whole grains and legumes earn their place.",
          "**Don't under-eat to extremes.** The appetite suppression can push intake dangerously low; aim for a moderate deficit with enough food to fuel training and daily life, not a crash diet layered on top of a crash-diet drug.",
          "**Watch hydration,** especially if you have any nausea, vomiting or diarrhea — dehydration worsens how you feel and can stress the kidneys.",
          "**Think of the medicine as the thing that makes these habits possible,** not optional. The quieter appetite is your window to build the nutrition and training patterns that will serve you whether or not you stay on the drug forever.",
        ],
      },
      {
        type: "callout",
        title: "Why this matters for keeping weight off",
        text: "The muscle you protect now is part of what defends your results later. More lean mass means a higher resting metabolism and better strength and function — so the protein-and-resistance habit is not just about looking better, it is about making the loss durable and keeping you healthy through it.",
      },
    ],
  },

  {
    id: "maintenance",
    heading: "Will you keep the weight off?",
    summary:
      "Mostly only while you keep taking the medicine. In trial extensions, people who stopped semaglutide regained about two-thirds of their lost weight within a year, because the appetite and metabolic drivers the drug was suppressing return. GLP-1 therapy — pill or injection — is best understood as long-term management, not a short course.",
    blocks: [
      {
        type: "p",
        text: "This is the question that should shape your decision more than the exact weight-loss percentage, and it is the one most of the marketing glosses over. Obesity behaves like a chronic condition, and GLP-1 medicines treat it the way blood-pressure drugs treat hypertension: they work while you take them, and the underlying drivers reassert themselves when you stop.",
      },
      {
        type: "p",
        text: "The clearest evidence comes from the **STEP 1 trial extension** for injectable semaglutide. When people stopped the drug, they **regained about two-thirds of the weight they had lost within a year**, and much of the cardiometabolic improvement reversed alongside it. This is not a failure of willpower — it is biology. GLP-1s work in part by turning down appetite and 'food noise' and by influencing how the body regulates weight; remove the drug, and those signals come back. The same logic applies across the class, and there is no reason to expect the pills to behave differently.",
      },
      {
        type: "p",
        text: "The practical implications are worth being clear-eyed about before you start:",
      },
      {
        type: "ul",
        items: [
          "**Plan for the long term.** If you are not prepared to treat this as ongoing therapy — potentially for years — go in understanding that stopping typically means regaining much of the loss.",
          "**Budget accordingly.** Long-term therapy means long-term cost, which is why the pricing and coverage picture below matters so much.",
          "**Build the habits now.** The nutrition and resistance-training habits you establish while on the drug are what give you the best shot at holding more of the loss if you ever taper — and at staying healthier regardless.",
          "**Tapering is a medical decision.** If and when you consider stopping, do it with your clinician, not abruptly on your own, and with a maintenance plan in place.",
        ],
      },
      {
        type: "p",
        text: "What does long-term actually look like in practice? For many people it means reaching an effective dose, losing weight over the first many months, and then settling onto a maintenance dose they stay on — sometimes the full dose, sometimes a lower one that holds the result. Some people and their clinicians do explore tapering to the lowest dose that maintains the loss, but that is an individualized experiment done with monitoring, not a default assumption that you'll be able to stop entirely. The durable habits you build — protein, resistance training, sustainable eating — are what give any taper the best chance and what protect your health regardless of the dose you land on.",
      },
      {
        type: "callout",
        title: "The reframe that helps",
        text: "The right question is not 'how fast can I lose weight and get off this?' but 'is this a condition I am willing to manage for the long haul?' Framing GLP-1 therapy as maintenance rather than a quick fix is the single biggest predictor of being happy with the outcome.",
      },
    ],
  },

  {
    id: "myths",
    heading: "Common myths and honest caveats",
    summary:
      "A GLP-1 pill is not a weaker 'starter' version of the injection, not a quick fix you take for a few months, not free of side effects because it's oral, and not something to buy without a prescription. Separating the real picture from the marketing protects both your results and your safety.",
    blocks: [
      {
        type: "p",
        text: "The arrival of pills has produced a wave of oversimplified claims — some from marketing, some from well-meaning confusion. Here are the ones worth correcting, because believing them leads to bad decisions.",
      },
      {
        type: "h3",
        text: "Myth: a pill is just a weaker, 'beginner' version of the injection",
      },
      {
        type: "p",
        text: "No. These are distinct, fully FDA-approved medicines in their own right, not training wheels for a needle. Oral Wegovy produced weight loss competitive with injectable semaglutide, and orforglipron is a genuinely novel molecule, not a watered-down one. The pill-versus-injection choice is about convenience, needle tolerance and specific efficacy goals — not about 'graduating' from an easy option to a serious one.",
      },
      {
        type: "h3",
        text: "Myth: because it's oral, the side effects are milder",
      },
      {
        type: "p",
        text: "The side-effect profile is essentially the same, because it is driven by the same receptor activity, not by how the drug enters your body. Nausea, vomiting, constipation and diarrhea are just as relevant for the pills, and in orforglipron's trial nausea affected about a third of people at the top dose. Swallowing rather than injecting changes the delivery, not the biology that causes the GI effects.",
      },
      {
        type: "h3",
        text: "Myth: you take it for a few months, lose the weight, and you're done",
      },
      {
        type: "p",
        text: "This is the most expensive misconception. Because the drug works by suppressing appetite and food signals, stopping typically brings those signals — and much of the weight — back. In the semaglutide trial extension, people regained about two-thirds of their lost weight within a year of stopping. Plan for GLP-1 therapy as long-term management of a chronic condition, not a short course, and budget and build habits accordingly.",
      },
      {
        type: "h3",
        text: "Myth: a pill is safe to buy online without a real prescription",
      },
      {
        type: "p",
        text: "Being a tablet does not make a GLP-1 any safer to source carelessly. Both approved pills carry a boxed warning and firm contraindications that require a clinician to screen for — a personal or family history of medullary thyroid cancer or MEN 2, pancreatitis history, pregnancy, and interacting medications. Anything sold without a genuine medical review, or priced far below the legitimate options with no prescription, is a hallmark of unapproved or counterfeit product, which the FDA has repeatedly warned carries real risk of harm.",
      },
      {
        type: "h3",
        text: "Myth: the pill will work the same no matter how you take it",
      },
      {
        type: "p",
        text: "True for orforglipron, emphatically not for oral Wegovy. Oral semaglutide's absorption depends on the empty-stomach, minimal-water, 30-minute-wait routine; take it with coffee or breakfast and you can undercut the dose enough to blunt results. If a reliable morning ritual is not realistic for you, that is a genuine reason to prefer orforglipron, which carries no such restriction.",
      },
      {
        type: "callout",
        title: "The through-line",
        text: "A pill removes the needle — a real and meaningful barrier for many people — but it does not remove the need for medical supervision, realistic expectations, long-term planning, or the nutrition and training that make the results stick. Treat it with the same seriousness you would an injection.",
      },
    ],
  },

  {
    id: "cost",
    heading: "Cost and access in 2026",
    summary:
      "In 2026, both makers sold their pills through direct cash-pay pharmacies — roughly $149 to about $349 a month depending on dose, well below the ~$1,000+ retail list prices. Commercial savings programs can cut costs further for eligible, insured patients, and a Medicare demonstration began offering select beneficiaries a $50 copay from July 2026. Prices change; verify before you buy.",
    blocks: [
      {
        type: "p",
        text: "Because GLP-1 therapy is long-term, cost is not a footnote — it is often the deciding factor. The good news in 2026 is that the direct-to-consumer cash prices for the pills are far below the old sticker-shock list prices, though they are still a real monthly commitment.",
      },
      {
        type: "h3",
        text: "Cash pay through the makers' own pharmacies",
      },
      {
        type: "p",
        text: "Both companies now sell directly to patients. Lilly listed **Foundayo** through its LillyDirect self-pay pharmacy at roughly **$149 a month at the lowest doses, rising to about $299–$349 a month** at higher doses in 2026 (with a refill-timing rule that nudges you toward staying on schedule). Novo listed the **oral Wegovy** tablet through NovoCare self-pay at about **$149 (starter dose), $199, and $299 a month** depending on strength. For context, the pharmacy retail list prices these programs discount from are around **$1,000–$1,350 a month** — so the cash-pay routes represent a very large discount, not the full list price.",
      },
      {
        type: "callout",
        title: "Prices move — always re-check",
        text: "Every price on this page is a point-in-time listing for 2026 and some figures carry promotional end-dates. Manufacturer cash prices, savings-card caps and expiry dates change frequently, so confirm the current number on the maker's own pharmacy page or with the provider before you commit. Use our cost tools as a planning aid, not a quote.",
      },
      {
        type: "h3",
        text: "Insurance, savings cards and Medicare",
      },
      {
        type: "p",
        text: "If you have commercial insurance that covers the drug, a manufacturer **savings card** can bring your out-of-pocket cost down substantially — in some cases to as little as $25 a month — though these cards are capped and carry expiry dates, so read the fine print. Coverage for weight loss specifically remains inconsistent: many commercial plans cover GLP-1s for diabetes but restrict them for obesity, and prior authorization is common. On the public side, a **Medicare demonstration began in July 2026** offering some eligible Part D beneficiaries access to GLP-1 weight-loss drugs for around a **$50 monthly copay** — a meaningful change given Medicare's longstanding exclusion of weight-loss drugs. We track the public-coverage picture in detail on our [Medicare GLP-1 coverage](/glp1-medicare-coverage) page.",
      },
      {
        type: "p",
        text: "A few ways to think about the money without getting burned:",
      },
      {
        type: "ul",
        items: [
          "**Compare the all-in monthly cost,** not just the headline price — factor in any telehealth or membership fee, and whether the price changes at higher doses.",
          "**Check whether your dose changes the price.** With titration, the dose you start on may not be the dose you maintain on, so model the cost at your likely maintenance dose.",
          "**Run the numbers for a year, not a month,** since this is long-term therapy. Our [GLP-1 cost calculator](/tools/glp1-cost-calculator) helps you project it.",
          "**Beware anything far cheaper than the above with no prescription or no medical review** — that is the signature of unapproved or counterfeit product, which the [FDA has repeatedly warned about](/best-glp1-providers).",
        ],
      },
      {
        type: "p",
        text: "A word on where you buy. You can get these pills through the makers' own direct pharmacies or through telehealth programs, and the difference is worth understanding. The makers' direct-pay routes often carry the lowest sticker price for the drug itself, but you manage the clinical side more independently. Telehealth programs bundle the medical intake, prescriber review, ongoing check-ins and shipping, sometimes for a separate fee — which can be worth it if you want more hand-holding, help navigating insurance, or a single place that manages everything. Neither is automatically better; what matters is that the prescriber is licensed and real and the pharmacy is legitimate. A slightly higher price from a reputable, well-supported program beats a rock-bottom one with no genuine medical oversight.",
      },
      {
        type: "p",
        text: "For the broader cost-and-coverage landscape across branded, compounded and insured routes, see our [cost and insurance guide](/guides/glp1-cost-and-insurance) and the [cheapest GLP-1 options](/cheapest-glp1) breakdown.",
      },
    ],
  },

  {
    id: "pipeline",
    heading: "What's next: the pipeline behind the pills",
    summary:
      "The pills are the start, not the ceiling. Injectable retatrutide — a triple-hormone agonist — reached roughly 25% weight loss (intention-to-treat) and up to about 28% on treatment in phase 3, and higher-efficacy and next-generation oral options are in development. Expect the gap between pills and the best injections to narrow over time.",
    blocks: [
      {
        type: "p",
        text: "The two approved pills are a milestone, not an endpoint. The obesity-drug pipeline is the most active in modern medicine, and the trajectory points toward both more powerful medicines and more convenient ones.",
      },
      {
        type: "h3",
        text: "Retatrutide — the next efficacy leap",
      },
      {
        type: "p",
        text: "The most-watched candidate is **retatrutide**, an injectable that hits three hormone receptors at once (GLP-1, GIP and glucagon) rather than one or two. In its phase 2 trial it produced about **24%** weight loss at the highest dose, and in the phase 3 **TRIUMPH** program the top dose delivered roughly **25% on an intention-to-treat basis and up to about 28%** among people who stayed on treatment — approaching the territory of bariatric surgery. Retatrutide is a needle, not a pill, and it is not yet FDA-approved, with a regulatory submission anticipated. But it reframes what 'maximum' medical weight loss can mean, and it shows how far the ceiling is still rising.",
      },
      {
        type: "h3",
        text: "More — and better — oral options",
      },
      {
        type: "p",
        text: "On the pill side, the current two are unlikely to be the last word. Both major makers and several others are developing additional oral candidates and next-generation small molecules aimed at closing the efficacy gap with injections while keeping the convenience of a tablet. The commercial logic is overwhelming: pills are cheaper to make, easier to distribute, and acceptable to far more patients, so the incentive to make an oral drug that matches the best injection is enormous. It is reasonable to expect the pill-versus-injection gap to keep narrowing over the next few years.",
      },
      {
        type: "callout",
        title: "What this means for a decision today",
        text: "A better drug is always coming — that is true of every field, and it is not a reason to wait if you qualify and want to start now. The approved pills work, and the months you spend losing weight and building habits are not wasted if you later switch. Decide based on what is available and right for you today, with your clinician.",
      },
      {
        type: "p",
        text: "We keep the medication landscape current on our [medications hub](/medications), including deep dives on [semaglutide](/medications/semaglutide) and [tirzepatide](/medications/tirzepatide), and we will add dedicated pages as the orals mature.",
      },
    ],
  },

  {
    id: "bigger-picture",
    heading: "The bigger picture: what pills mean for access",
    summary:
      "The real significance of oral GLP-1s is reach, not raw power. Tablets are far cheaper and simpler to manufacture and distribute than injection pens, need no cold chain or needles, and lower the barrier to starting — which is why pills are the format most likely to ease shortages and widen access over time, including globally.",
    blocks: [
      {
        type: "p",
        text: "Step back from the individual decision for a moment, because the arrival of pills matters at a scale bigger than any one person's weight-loss plan. For years, the central problem with GLP-1 therapy has not only been efficacy — the injections already work remarkably well — but access. Demand has vastly outstripped supply, shortages were chronic, and the people who could get and stay on treatment were a small, often well-insured minority of those who could benefit.",
      },
      {
        type: "p",
        text: "Pills attack that problem directly, for several concrete reasons:",
      },
      {
        type: "ul",
        items: [
          "**Manufacturing scales more easily.** Producing tablets is a mature, high-volume process; producing sterile pre-filled injection pens is far more complex and capacity-constrained. More supply, more reliably, means fewer shortages.",
          "**No cold chain or needles.** Tablets don't require the refrigeration, careful handling and sharps disposal that injectables do, which lowers cost and complexity across the whole distribution system — and makes the medicines far more practical in places without robust medical infrastructure.",
          "**Lower friction to start and continue.** Swallowing a daily pill feels less medical and less daunting than weekly injections, so more people on the fence will begin, and more will keep going.",
          "**A path to broader global reach.** The combination of cheaper manufacturing, no cold chain and higher patient acceptance is exactly what is needed to extend these medicines beyond the wealthy markets that absorbed the first wave of injectables.",
        ],
      },
      {
        type: "p",
        text: "This is the honest case for why the pill era is a genuine turning point even though the pills don't beat the best needle. The injections proved that obesity can be treated powerfully with medicine. The pills are what could make that treatment ordinary — available to far more of the roughly 40% of US adults with obesity, and eventually to the far larger numbers worldwide. That shift from 'powerful but scarce' to 'good enough and widely available' is often how a medical advance actually changes public health.",
      },
      {
        type: "p",
        text: "None of which changes the individual calculus you should run with your clinician — the right drug for you is still the one that fits your goals, tolerance and budget today. But it is worth understanding that you are making that choice at an inflection point, and that the options, the prices and the access are all likely to keep improving from here.",
      },
    ],
  },

  {
    id: "how-to-start",
    heading: "How to start a GLP-1 pill safely",
    summary:
      "Start with an honest eligibility and goals conversation, choose between a pill and an injection based on your priorities, use a legitimate prescriber who runs a real medical review, verify the pharmacy, start low and titrate, and plan for the long term.",
    blocks: [
      {
        type: "p",
        text: "If a GLP-1 pill sounds like the right fit, here is a safe, sensible way to approach it — the same disciplined process we would use ourselves.",
      },
      {
        type: "ol",
        items: [
          "**Check your eligibility and be honest about your goals.** Confirm you meet the BMI criteria (generally 30+, or 27+ with a weight-related condition) and get clear on whether you want maximum weight loss or maximum convenience — that steers pill-versus-injection.",
          "**Choose the format deliberately.** A pill if needles are a dealbreaker or simplicity is what will keep you consistent; an injection (tirzepatide) if raw efficacy is the priority and you can tolerate a weekly shot. Oral Wegovy if you want a pill and can commit to the empty-stomach routine; orforglipron if you want a pill with no food-or-water restrictions.",
          "**Use a legitimate prescriber.** Insist on a real medical intake and a licensed clinician who reviews your history and screens for contraindications — MTC/MEN 2, pancreatitis history, pregnancy, interacting medications. A service that skips this is a red flag.",
          "**Verify the pharmacy.** Make sure the medicine ships from a licensed, reputable pharmacy — ideally the maker's own direct pharmacy or a clearly state-licensed one — and comes with proper labeling and dosing instructions.",
          "**Start low, titrate slowly, and manage side effects.** Follow the escalation schedule, don't rush dose increases to chase faster results, and lean on the practical GI-management tactics — smaller meals, hydration, protein and resistance training to protect muscle.",
          "**Plan for the long haul.** Budget for ongoing therapy, build durable nutrition and strength habits now, and make any future decision to taper a joint one with your clinician, with a maintenance plan in place.",
        ],
      },
      {
        type: "p",
        text: "When you are ready to compare specific programs — including which ones offer the pills, how their pricing and medical review stack up, and how we score them — start with our independently ranked [best GLP-1 providers](/best-glp1-providers), or take the [2-minute match quiz](/find-your-match) to narrow it down to options that fit your situation.",
      },
    ],
    readMore: {
      href: "/best-glp1-providers",
      label: "Compare the GLP-1 programs we rate highest",
    },
  },
];

export const PILLS_FAQS: { q: string; a: string }[] = [
  {
    q: "Is there a GLP-1 pill for weight loss now?",
    a: "Yes. Two GLP-1 pills are FDA-approved for weight management as of 2026: oral Wegovy (oral semaglutide 25 mg), approved in December 2025, and orforglipron (brand name Foundayo), approved in April 2026. Orforglipron is the first that can be taken without food or water restrictions.",
  },
  {
    q: "What is orforglipron (Foundayo)?",
    a: "Orforglipron is an oral, once-daily GLP-1 receptor agonist for chronic weight management, sold as Foundayo and made by Eli Lilly. Unlike earlier GLP-1s, it is a small molecule rather than a peptide, so it can be taken at any time of day with or without food or water. In its phase 3 ATTAIN-1 trial it produced about 11–12% average weight loss over 72 weeks at the highest dose.",
  },
  {
    q: "How much weight can you lose on a GLP-1 pill?",
    a: "In the pivotal trials, orforglipron produced about 11–12% average weight loss over 72 weeks, and oral Wegovy (oral semaglutide 25 mg) produced about 16.6% over 64 weeks in people who stayed on treatment. These are averages — some people lose more and some less — and both pills trail the most effective injection, tirzepatide, which reached about 20% in a head-to-head trial.",
  },
  {
    q: "Is the GLP-1 pill as effective as the injection?",
    a: "Not the most effective injection. Injectable tirzepatide (about 20%) still produces more weight loss than either pill. Oral Wegovy (about 16.6%) is competitive with and slightly ahead of injectable semaglutide (about 14–15%), while orforglipron (about 11–12%) is the least potent of the group. Pills win on convenience and needle avoidance rather than peak efficacy.",
  },
  {
    q: "Do you have to take orforglipron on an empty stomach?",
    a: "No — that is its key advantage. Because orforglipron is a small molecule, it can be taken at any time of day with or without food or water. This is different from oral Wegovy (oral semaglutide), which must be taken first thing in the morning on an empty stomach with no more than about 4 ounces of water, followed by a 30-minute wait before eating, drinking or taking other medications.",
  },
  {
    q: "What are the side effects of GLP-1 pills?",
    a: "The most common side effects are gastrointestinal — nausea, vomiting, constipation and diarrhea — mostly mild to moderate and worst early on and after each dose increase. In orforglipron's trial, nausea affected about a third of people at the highest dose. Rare but serious risks include pancreatitis and gallbladder problems, and the class carries a boxed warning for thyroid C-cell tumors.",
  },
  {
    q: "How much does a GLP-1 pill cost?",
    a: "In 2026, both makers sold their pills through direct cash-pay pharmacies for roughly $149 to about $349 a month depending on dose — far below the roughly $1,000–$1,350 retail list prices. Eligible, commercially insured patients may pay less with a savings card, and a Medicare demonstration began offering some beneficiaries a roughly $50 monthly copay in July 2026. Prices change frequently, so verify before buying.",
  },
  {
    q: "Will I regain the weight if I stop the pill?",
    a: "Usually a substantial share, yes. In trial extensions, people who stopped semaglutide regained about two-thirds of their lost weight within a year, because the appetite and metabolic effects the drug was producing fade when you stop. GLP-1 therapy — pill or injection — is best treated as long-term management rather than a short course.",
  },
  {
    q: "Who should not take a GLP-1 pill?",
    a: "These pills are contraindicated for anyone with a personal or family history of medullary thyroid carcinoma (MTC) or Multiple Endocrine Neoplasia syndrome type 2 (MEN 2), and for anyone with a serious allergy to the drug. They are not for use in pregnancy, are used cautiously in people with a history of pancreatitis, and are not recommended in severe gastroparesis or severe liver impairment. A clinician screens for all of this.",
  },
  {
    q: "Is orforglipron approved for type 2 diabetes?",
    a: "Not at launch. Foundayo was approved for chronic weight management. Orforglipron was studied in type 2 diabetes in the ATTAIN-2 trial, where it lowered A1C by up to about 1.8 percentage points, but a separate diabetes approval would have to follow its own regulatory path.",
  },
  {
    q: "Which is better, orforglipron or oral Wegovy?",
    a: "It depends on your priority. Oral Wegovy produced more weight loss in its trial (about 16.6% vs about 11–12%) and also reduces cardiovascular risk, but it requires the strict empty-stomach dosing routine. Orforglipron produced somewhat less weight loss but can be taken any time with or without food or water, which makes it far easier to take consistently. Convenience versus a few extra percentage points is the core trade-off.",
  },
  {
    q: "Do GLP-1 pills cause muscle loss?",
    a: "Any rapid weight loss costs some muscle unless you actively protect it, and that is true of the pills as much as the injections. Prioritizing protein and doing resistance training a few times a week shifts what you lose toward fat and preserves lean mass. The drug does not specifically destroy muscle — under-eating protein and skipping strength work does.",
  },
  {
    q: "Do you need a prescription for a GLP-1 pill?",
    a: "Yes. Both orforglipron and oral Wegovy are prescription medicines that require a licensed clinician to review your case and confirm you are an appropriate candidate. Any service selling a GLP-1 without a genuine medical review is a major red flag and may be offering unapproved or counterfeit product.",
  },
  {
    q: "How long does a GLP-1 pill take to work?",
    a: "Appetite changes and quieter 'food noise' often appear within the first week or two, but meaningful weight loss builds over months as you climb to an effective dose. In the trials, most of the weight came off over roughly the first 6–9 months before leveling off.",
  },
  {
    q: "Can you switch from an injection to a pill (or vice versa)?",
    a: "Many people can, but it should be done with a clinician rather than on your own, because the drugs and doses are not interchangeable one-for-one and you generally re-titrate when switching. If an injection isn't working for you — because of needles, side effects or cost — a pill is now a legitimate alternative to discuss.",
  },
  {
    q: "Is orforglipron or oral Wegovy the same as Ozempic or Rybelsus?",
    a: "Oral Wegovy is the same molecule as Ozempic and Rybelsus — semaglutide — but at a higher dose approved specifically for weight loss; Rybelsus is lower-dose oral semaglutide for type 2 diabetes. Orforglipron (Foundayo) is a different, newer molecule entirely — a small-molecule GLP-1, not semaglutide — so it is not the pill form of Ozempic.",
  },
  {
    q: "Can you drink alcohol while taking a GLP-1 pill?",
    a: "There's no absolute ban, but many people find alcohol hits harder and sits worse on a GLP-1 because stomach emptying is slowed, and alcohol adds empty calories that work against your goal. Some people also report less desire to drink. Discuss your situation with your clinician, especially if you have other risk factors.",
  },
  {
    q: "What happens if I miss a dose of my GLP-1 pill?",
    a: "For a once-daily pill, follow the specific guidance in your product's instructions or from your prescriber — generally you take it when you remember that day or skip to the next day rather than doubling up. With orforglipron, the label notes that if you miss about a week or more of consecutive doses, your prescriber may restart your dose escalation at a lower level, so check in rather than jumping back to your previous dose.",
  },
  {
    q: "Are GLP-1 pills available over the counter?",
    a: "No. Both orforglipron (Foundayo) and oral Wegovy are prescription-only medicines that require a licensed clinician to confirm you're an appropriate candidate and screen for contraindications. Any seller offering a GLP-1 without a prescription or a genuine medical review should be treated as a serious safety red flag.",
  },
];

export const PILLS_HOWTO = {
  name: "How to start a GLP-1 weight-loss pill safely",
  steps: [
    {
      name: "Check eligibility and goals",
      text: "Confirm you meet the BMI criteria (generally 30+, or 27+ with a weight-related condition) and decide whether your priority is maximum weight loss or maximum convenience.",
    },
    {
      name: "Choose pill vs injection",
      text: "Pick a pill if needles are a dealbreaker or simplicity keeps you consistent; an injection if raw efficacy is the priority. Among pills, oral Wegovy for efficacy with the empty-stomach routine, orforglipron for no food-or-water restrictions.",
    },
    {
      name: "Use a legitimate prescriber",
      text: "Insist on a real medical intake with a licensed clinician who reviews your history and screens for contraindications such as MTC/MEN 2, pancreatitis history, pregnancy and interacting medications.",
    },
    {
      name: "Verify the pharmacy",
      text: "Make sure the medicine ships from a licensed, reputable pharmacy — ideally the maker's own direct pharmacy or a clearly state-licensed one — with proper labeling and dosing instructions.",
    },
    {
      name: "Start low and titrate slowly",
      text: "Follow the dose-escalation schedule, don't rush increases to chase faster results, and manage GI side effects with smaller meals, hydration, adequate protein and resistance training.",
    },
    {
      name: "Plan for the long term",
      text: "Budget for ongoing therapy, build durable nutrition and strength habits now, and make any future decision to taper a joint one with your clinician.",
    },
  ],
};

// Primary references cited on this page (rendered by <MedicalSources>).
export const PILLS_SOURCE_KEYS = [
  "attain-1",
  "attain-2",
  "foundayo-label",
  "foundayo-approval-news",
  "wegovy-oral-approval",
  "surmount-5",
  "step-1",
  "surmount-1",
  "select",
  "step-1-extension",
  "retatrutide-p2",
  "triumph-phase3",
  "niddk-obesity-meds",
  "medicare-glp1-bridge",
  "fda-unapproved-glp1",
];
