// ─────────────────────────────────────────────────────────────────────────────
// Pillar: "How much weight will you actually lose on a GLP-1?"
//
// The edge: almost every competitor quotes a single average ("~15–20%"). This
// article shows the full RESPONSE DISTRIBUTION from the pivotal trials — what
// share of people hit each threshold (5/10/15/20/25%), the non-responder
// reality, the dose–response curve, and what honestly predicts whether YOU will
// respond. Distinct from /guides/glp1-results-timeline (which is about WHEN).
//
// Every categorical figure traces to the NEJM trial papers (STEP 1, SURMOUNT-1)
// via source keys. Nothing is invented; estimand/analysis-set nuances are noted.
// ─────────────────────────────────────────────────────────────────────────────

import type { Block, GuideSection } from "./glp1-weight-loss-guide";

export type { Block, GuideSection };

export const RESULTS_REVIEWED = "2026-11-15";

export const RESULTS_META = {
  path: "/glp1-weight-loss-results",
  title: "How Much Weight Will You Lose on a GLP-1? The Real Data (2026)",
  description:
    "Not the lazy '15–20% average' — the full response data. What share of people hit 5%, 10%, 15%, 20% and 25% weight loss on semaglutide and tirzepatide, who doesn't respond, and whether you will.",
  h1: "How much weight will you actually lose on a GLP-1? What the response data really shows",
  dek:
    "Every guide quotes the same average — about 15% on semaglutide, up to ~21% on tirzepatide. But an average hides the thing you actually want to know: your odds. Here's the full response distribution from the trials — how many people hit each milestone, how many barely respond, how much the dose and drug change your chances, and what honestly predicts whether you'll be a strong responder.",
  readTime: "32 min read",
};

export const RESULTS_SECTIONS: GuideSection[] = [
  {
    id: "overview",
    heading: "The answer isn't a number — it's a distribution",
    summary:
      "On semaglutide (Wegovy), the average is about 15%, but that spans a wide range: roughly 86% of people lose at least 5%, about half lose 15% or more, and around a third lose 20% or more — while about 1 in 7 don't even reach 5%. Tirzepatide (Zepbound) shifts the whole curve higher and is strongly dose-dependent: at the top dose, over half lose 20%+ and more than a third lose 25%+. Your realistic result is a range of odds, not a single figure — and this guide shows you the odds.",
    blocks: [
      {
        type: "keytakeaways",
        items: [
          "**The average is the least useful number.** 'About 15%' (semaglutide) or 'up to ~21%' (tirzepatide) hides a huge spread. What matters is your odds of hitting each milestone — and those are knowable from the trials.",
          "**Semaglutide (STEP 1, 68 wks):** ~**86%** lose ≥5%, ~**69%** lose ≥10%, ~**51%** lose ≥15%, and ~**32%** lose ≥20%. The flip side: about **1 in 7 don't reach 5%**.",
          "**Tirzepatide (SURMOUNT-1, 72 wks) is higher and dose-dependent.** At the 15 mg dose, ~**84%** lose ≥10%, ~**57%** lose ≥20%, and ~**36%** lose ≥25% — results that approach bariatric-surgery territory for a meaningful share of people.",
          "**Dose moves the odds a lot.** On tirzepatide, the share reaching ≥25% roughly doubles from the lowest to the highest dose (≈15% → ≈36%). The dose you tolerate and reach genuinely changes your likely result.",
          "**These are trial numbers, with trial support.** Real-world results often trail them — driven mostly by whether people reach an effective dose and stay on treatment. The loss is also conditional on continuing: stop, and most of it returns.",
        ],
      },
      {
        type: "p",
        text: "Ask the internet 'how much weight will I lose on Ozempic, Wegovy or Zepbound?' and you'll get the same answer everywhere: about 15% on semaglutide, up to around 21% on tirzepatide. Those numbers are real averages from good trials — but as an answer to your question, they're almost useless, because nobody loses 'the average.' Some people on the exact same drug lose 5%; others lose 30%. The average is the midpoint of an enormous range, and quoting it alone tells you nothing about where you're likely to land.",
      },
      {
        type: "p",
        text: "This guide does the thing the other guides don't: it shows you the distribution. The pivotal trials didn't just report a mean — they reported exactly what percentage of participants hit each milestone (5%, 10%, 15%, 20%, 25% of body weight). That data turns a vague average into something far more useful: your actual odds. It also tells you how many people barely respond, how much the dose changes your chances, how the two drugs really differ, and what honestly predicts whether you'll be a strong responder. If you want a realistic expectation instead of a marketing number, this is it.",
      },
      {
        type: "callout",
        title: "A note on what these numbers are",
        text: "The figures here come from the semaglutide STEP 1 and tirzepatide SURMOUNT-1 trials, published in the New England Journal of Medicine. They reflect roughly 68–72 weeks of treatment with structured support. This is information, not medical advice — individual results vary, and only a clinician who knows your history can estimate what to expect for you.",
      },
      {
        type: "p",
        text: "If you want the week-by-week timeline of when the weight comes off, that's a different question — see our [GLP-1 results timeline guide](/guides/glp1-results-timeline). This guide is about how much and how likely. For the drugs themselves, see [semaglutide](/medications/semaglutide) and [tirzepatide](/tirzepatide-weight-loss).",
      },
    ],
  },

  {
    id: "average-misleads",
    heading: "Why 'the average' is the wrong number to anchor on",
    summary:
      "An average weight loss compresses a wide spread of outcomes into one figure. On semaglutide, people around that 15% average are common — but so are people at 5% and people at 25%+. Anchoring on the mean sets you up to feel like a failure if you land below it (even though half of everyone does) or over-promised if a provider quotes it as a guarantee. The distribution is what tells you your real range.",
    blocks: [
      {
        type: "p",
        text: "Before the numbers, it's worth understanding why the average is actively misleading here — because the mistake it causes is extremely common and genuinely harmful to people's expectations.",
      },
      {
        type: "p",
        text: "Weight-loss response to these drugs is spread across a wide range. On semaglutide, the average is about 15%, but that single number sits in the middle of outcomes that run from barely any loss to well over 25%. By definition, roughly half of people lose less than the average and half lose more. So if you anchor on 15% and then lose 11%, you can feel like you failed — when in fact you got a completely normal, clinically excellent result. And if a provider quotes the average as what you'll get, they're implying a precision the data doesn't support.",
      },
      {
        type: "p",
        text: "There's a better mental model: think in milestones and odds. Instead of 'I'll lose 15%,' think 'I have roughly a 7-in-10 chance of losing at least 10%, a coin-flip chance of losing 15% or more, and about a 1-in-3 chance of losing 20% or more' — which is exactly what the semaglutide data shows. That framing is honest about the uncertainty, it sets reachable expectations, and it lets you judge your own result against the full range rather than a single point. The rest of this guide gives you those odds, drug by drug and dose by dose.",
      },
      {
        type: "callout",
        title: "The reframe in one line",
        text: "Don't ask 'what's the average?' Ask 'what are my odds of hitting each milestone?' The first number misleads; the second is what the trials actually measured — and what lets you set a realistic expectation.",
      },
    ],
  },

  {
    id: "semaglutide-odds",
    heading: "Semaglutide (Wegovy): your odds at each milestone",
    summary:
      "In the STEP 1 trial, semaglutide 2.4 mg over 68 weeks produced a ~15% average — but the distribution is the real story: about 86% reached ≥5%, 69% reached ≥10%, 51% reached ≥15%, and roughly 32% reached ≥20%. Placebo plus lifestyle got far fewer people to each milestone, which shows how much of this is the drug. Still, about 14% didn't reach even 5%.",
    blocks: [
      {
        type: "p",
        text: "Start with semaglutide — the molecule in Wegovy and Ozempic — because it's the most-studied and the one most people picture. The pivotal STEP 1 trial ran for 68 weeks in adults with obesity and without diabetes, at the 2.4 mg weekly dose, with lifestyle support in both arms. The average was 14.9%. Here's what that average is actually made of.",
      },
      {
        type: "table",
        caption: "STEP 1 — share of people reaching each weight-loss milestone (68 weeks)",
        headers: ["Weight lost", "On semaglutide 2.4 mg", "On placebo (+ lifestyle)"],
        rows: [
          ["≥ 5%", "~86%", "~32%"],
          ["≥ 10%", "~69%", "~12%"],
          ["≥ 15%", "~51%", "~5%"],
          ["≥ 20%", "~32%", "~2%"],
        ],
      },
      {
        type: "chart",
        title: "Semaglutide vs placebo: who reaches each milestone (STEP 1)",
        caption: "Source: STEP 1 (Wilding et al., NEJM 2021), 68 weeks. Percentages are approximate.",
        unit: "%",
        max: 100,
        groups: ["Semaglutide 2.4 mg", "Placebo + lifestyle"],
        rows: [
          { label: "≥ 5%", values: [86, 32] },
          { label: "≥ 10%", values: [69, 12] },
          { label: "≥ 15%", values: [51, 5] },
          { label: "≥ 20%", values: [32, 2] },
        ],
        alt: "Bar chart of STEP 1 results. On semaglutide 2.4 mg, about 86% of people lost at least 5% of body weight, 69% at least 10%, 51% at least 15%, and 32% at least 20% — versus roughly 32%, 12%, 5%, and 2% on placebo plus lifestyle.",
      },
      {
        type: "p",
        text: "Read down the semaglutide column and the picture is genuinely encouraging — and far more informative than '15%.' The overwhelming majority (about 86%) lose at least a clinically meaningful 5%. More than two-thirds cross 10%. Right around half reach 15% or more. And about a third of people — nearly one in three — lose 20% or more of their entire body weight on semaglutide alone. That last figure is worth sitting with: a 20%+ loss is transformational, the kind of result that used to require surgery, and roughly a third of people get there.",
      },
      {
        type: "p",
        text: "The placebo column is the other half of the story, and it's why this is about the drug rather than wishful thinking. Everyone in the trial got lifestyle support, but on placebo only about 12% reached 10% and just ~2% reached 20%. The gap between the columns is the drug's effect — and it's large at every milestone. This is the evidence that semaglutide does something lifestyle advice alone mostly can't.",
      },
      {
        type: "callout",
        title: "The number nobody quotes",
        text: "About 14% of people on semaglutide didn't reach even 5% weight loss in STEP 1 — roughly 1 in 7. That doesn't mean the drug 'doesn't work'; it means response varies, and a meaningful minority are low responders. Knowing this upfront is what separates a realistic expectation from a set-up for disappointment.",
      },
    ],
  },

  {
    id: "tirzepatide-odds",
    heading: "Tirzepatide (Zepbound): the whole curve shifts up",
    summary:
      "In SURMOUNT-1, tirzepatide over 72 weeks pushed every milestone higher than semaglutide — and the top dose is striking: about 91% reached ≥5%, 84% reached ≥10%, 57% reached ≥20%, and 36% reached ≥25%. More than a third of people lost a quarter of their body weight. The trade-off is that the best numbers come at the highest dose, which not everyone tolerates or reaches.",
    blocks: [
      {
        type: "p",
        text: "Now tirzepatide — the molecule in Zepbound and Mounjaro, and the more effective drug. Its pivotal SURMOUNT-1 trial ran 72 weeks in adults with obesity without diabetes, and tested three doses (5, 10 and 15 mg). The averages ran from about 16% at the low dose to roughly 21% (and up to 22.5% among those who stayed fully on treatment) at the top dose. But again, the distribution is where the real information is — and here we can show it by dose.",
      },
      {
        type: "table",
        caption: "SURMOUNT-1 — share reaching each milestone, by dose (72 weeks)",
        headers: ["Weight lost", "5 mg", "10 mg", "15 mg", "Placebo"],
        rows: [
          ["≥ 5%", "~85%", "~89%", "~91%", "~35%"],
          ["≥ 10%", "~69%", "~78%", "~84%", "~19%"],
          ["≥ 20%", "~30%", "~50%", "~57%", "~3%"],
          ["≥ 25%", "~15%", "~32%", "~36%", "~2%"],
        ],
      },
      {
        type: "chart",
        title: "Tirzepatide: the dose moves the odds (SURMOUNT-1)",
        caption: "Source: SURMOUNT-1 (Jastreboff et al., NEJM 2022), 72 weeks. ≥20% and ≥25% were secondary endpoints; percentages approximate.",
        unit: "%",
        max: 100,
        groups: ["5 mg", "10 mg", "15 mg"],
        rows: [
          { label: "≥ 10%", values: [69, 78, 84] },
          { label: "≥ 20%", values: [30, 50, 57] },
          { label: "≥ 25%", values: [15, 32, 36] },
        ],
        alt: "Bar chart of SURMOUNT-1 results by tirzepatide dose. Reaching at least 10% weight loss: 69% at 5 mg, 78% at 10 mg, 84% at 15 mg. At least 20%: 30%, 50%, 57%. At least 25%: 15%, 32%, 36%. Higher doses move more people to each milestone.",
      },
      {
        type: "p",
        text: "Compare this table to the semaglutide one and the shift is obvious: at every milestone, tirzepatide gets more people there. At the 15 mg dose, more than half of people (≈57%) lose 20% or more — a milestone only about a third reach on semaglutide. And more than a third (≈36%) lose 25% or more of their body weight, a result that genuinely approaches what bariatric surgery delivers, from a weekly injection. The ≥5% and ≥10% milestones are near-universal at the top dose (≈91% and ≈84%).",
      },
      {
        type: "statgrid",
        stats: [
          { value: "~57%", label: "Reached ≥20% weight loss on tirzepatide 15 mg (vs ~32% on semaglutide)" },
          { value: "~36%", label: "Reached ≥25% — over a third lost a quarter of their body weight (15 mg)" },
          { value: "~91%", label: "Reached at least 5% on tirzepatide 15 mg — near-universal response" },
        ],
      },
      {
        type: "p",
        text: "The honest caveat is in the dose. The headline numbers are the 15 mg figures, and not everyone tolerates or needs the top dose — side effects track with dose, and the climb to 15 mg is gradual. Which brings us to the single most actionable fact in this whole guide: on tirzepatide, the dose you reach changes your odds dramatically.",
      },
    ],
  },

  {
    id: "dose-response",
    heading: "The dose changes your odds more than you'd think",
    summary:
      "Tirzepatide's response is strongly dose-dependent. The share reaching ≥20% roughly doubles from the 5 mg dose (~30%) to 15 mg (~57%), and the share reaching ≥25% more than doubles (~15% to ~36%). This is why reaching and tolerating an effective dose matters so much — and why rushing the titration (which causes side effects and dropouts) can cost you the result you came for.",
    blocks: [
      {
        type: "p",
        text: "Look back at the tirzepatide table and read across the dose columns instead of down. The pattern is one of the most practically important things in this whole topic.",
      },
      {
        type: "p",
        text: "At the ≥20% milestone, the share of people getting there goes from about 30% at 5 mg, to about 50% at 10 mg, to about 57% at 15 mg — nearly doubling across the dose range. At the ≥25% milestone it's even starker: roughly 15% at 5 mg versus 36% at 15 mg, more than double. In other words, the dose you end up on is one of the biggest levers on your result that's actually within reach. This isn't true to the same degree for every drug, but for tirzepatide the dose–response is steep and real.",
      },
      {
        type: "p",
        text: "The practical implications are concrete. First, reaching an effective dose matters — stopping at a low dose because the early results seemed modest can leave a lot of potential loss on the table, since the bigger milestones cluster at the higher doses. Second, tolerating the climb matters — side effects are the main reason people stall or quit before reaching an effective dose, and they track with how fast you titrate. Going slowly enough to stay on the drug is often what gets you to the dose where the big results live. Third, the right dose is individual — some people respond beautifully at a middle dose and never need the maximum; the goal is the lowest dose that gives you a strong result with tolerable side effects, not blindly chasing 15 mg.",
      },
      {
        type: "callout",
        title: "Why 'go slow' is really 'go far'",
        text: "The slow titration isn't just about comfort — it's about staying on the drug long enough to reach the dose where the largest results happen. Rushing to a high dose and quitting from side effects is how people end up with a worse result than if they'd climbed patiently. For tirzepatide especially, patience with the dose is patience toward the outcome.",
      },
    ],
  },

  {
    id: "non-responders",
    heading: "The non-responders: what if you're in the lower tail?",
    summary:
      "A real minority respond poorly — about 1 in 7 semaglutide users didn't reach 5% in STEP 1, and fewer but still some on tirzepatide. Being a low responder doesn't mean you failed or that nothing will work; it can reflect dose, adherence, the specific drug, or individual biology. The practical response is to check the fixable factors first — dose reached, consistency, the other drug — before concluding the class doesn't work for you.",
    blocks: [
      {
        type: "p",
        text: "Most guides skip this entirely because it's not the happy marketing story, but it's essential for an honest expectation: some people respond poorly, and you deserve to know that going in — and what to do if it's you.",
      },
      {
        type: "h3",
        text: "How common is a weak response?",
      },
      {
        type: "p",
        text: "On semaglutide, about 14% of people — roughly 1 in 7 — didn't reach even 5% weight loss in STEP 1. On tirzepatide the weak-response group is smaller (the ≥5% rates are higher, ~85–91% by dose), but it still exists. These are people who took the drug as studied and got little from it. It's a minority, but it's not rare, and it's not a moral failing — response to these drugs varies between individuals for reasons that aren't fully understood.",
      },
      {
        type: "h3",
        text: "If you're responding poorly, check the fixable things first",
      },
      {
        type: "ul",
        items: [
          "**Have you reached an effective dose?** Especially on tirzepatide, the big results live at higher doses. A weak result at a low dose isn't the same as a weak result at the top dose — the dose may simply not be there yet.",
          "**Is adherence and consistency solid?** Missed doses, long gaps, or stopping and restarting blunt the effect. Real-world response trails trial response largely because of this.",
          "**Would the other drug work better?** Tirzepatide shifts the whole curve higher than semaglutide, so a semaglutide low-responder can respond well to tirzepatide. Switching is a real option to discuss with a clinician.",
          "**Are the basics in place?** Adequate protein, some activity, and sleep don't just add to the drug — they help it work and protect your muscle. A drug fighting a very poor lifestyle backdrop underperforms.",
        ],
      },
      {
        type: "p",
        text: "Only after those are addressed does 'this drug isn't working for me' become the right conclusion — and even then, it usually means trying the other drug or a different approach, not that nothing can help. Being a low responder to one GLP-1 at one dose is a reason to adjust, not to give up.",
      },
      {
        type: "callout",
        title: "The honest, useful framing",
        text: "A weak early result is a prompt to check dose, consistency and drug choice — not a verdict. Most apparent 'non-response' has a fixable cause. True non-response to the whole class, properly dosed and taken, is uncommon.",
      },
    ],
  },

  {
    id: "will-you-respond",
    heading: "Can you predict whether you'll respond?",
    summary:
      "Somewhat. Early weight loss is the most-used signal — many clinicians reassess if you haven't lost around 5% after about three months on the maintenance dose — but it's a rough heuristic, not a guarantee, and slow loss during the low-dose titration phase isn't very predictive. Reaching an effective dose, staying consistent, and the drug you choose shift your odds more reliably than any pre-treatment prediction.",
    blocks: [
      {
        type: "p",
        text: "The natural next question: can you know in advance, or early on, whether you'll be a strong responder? Honestly — partly, and it's worth being precise about what's real here, because this is an area where confident-sounding rules outrun the evidence.",
      },
      {
        type: "h3",
        text: "The early-response heuristic (useful, but hold it loosely)",
      },
      {
        type: "p",
        text: "The most common clinical signal is early weight loss: many clinicians will reassess treatment if you haven't lost roughly 5% of your weight after about three months on the maintenance (therapeutic) dose. The logic is intuitive — people who are responding tend to show it reasonably early. But two honest caveats matter. First, the key phrase is 'on the maintenance dose': slow loss during the weeks you're still titrating up from the low starting dose is weakly predictive at best, because you haven't reached the effective dose yet. Second, this is a heuristic that guidelines and labels use to decide whether to continue — it is not a validated crystal ball, and some slow starters still do well. Use it as a prompt to re-evaluate, not a sentence.",
      },
      {
        type: "h3",
        text: "What actually shifts your odds",
      },
      {
        type: "p",
        text: "More reliable than any pre-treatment prediction are the factors you and your clinician can influence. Reaching and tolerating an effective dose (especially on tirzepatide) moves your odds a lot. Consistency — taking it as prescribed, without long gaps — matters because the effect depends on steady exposure. Drug choice matters, since tirzepatide's distribution sits higher than semaglutide's. And the supporting habits (protein, activity, sleep) help the drug do its job. None of these let you predict your exact result, but together they're the difference between landing in the lower and upper parts of the distribution.",
      },
      {
        type: "callout",
        title: "The honest bottom line on prediction",
        text: "You can't know your exact result in advance, and you should be skeptical of anyone who claims you can. What you can do is stack the odds: the right drug, an effective dose reached patiently, real consistency, and solid basics. Those move you up the distribution far more dependably than any prediction.",
      },
    ],
  },

  {
    id: "drug-choice",
    heading: "Semaglutide vs tirzepatide — compared on odds, not averages",
    summary:
      "Put the two distributions side by side and tirzepatide wins at every milestone: your chance of losing ≥20% is roughly a third on semaglutide versus more than half on tirzepatide's top dose. That's why tirzepatide is generally the more effective choice. But semaglutide is still highly effective, often cheaper or more available, and the right pick when it fits your budget, tolerance or coverage.",
    blocks: [
      {
        type: "p",
        text: "The head-to-head is usually framed as averages ('~21% vs ~15%'), but your odds at each milestone are the more useful comparison. Here they are together.",
      },
      {
        type: "table",
        caption: "Your odds of hitting each milestone — semaglutide vs tirzepatide (top dose)",
        headers: ["Weight lost", "Semaglutide 2.4 mg", "Tirzepatide 15 mg"],
        rows: [
          ["≥ 5%", "~86%", "~91%"],
          ["≥ 10%", "~69%", "~84%"],
          ["≥ 15%", "~51%", "~71%*"],
          ["≥ 20%", "~32%", "~57%"],
          ["≥ 25%", "—", "~36%"],
        ],
      },
      {
        type: "p",
        text: "Tirzepatide is higher at every row. The ≥20% line is the clearest illustration: a roughly 1-in-3 chance on semaglutide becomes better than a coin flip on tirzepatide. And tirzepatide opens up the ≥25% milestone that semaglutide barely reaches. This is the distributional version of 'tirzepatide is more effective,' and it's more honest than comparing single averages because it shows the difference at the outcomes you might actually be aiming for. (The ≥15% tirzepatide figure is marked because it comes from a company release rather than the core NEJM table, so treat it as approximate.)",
      },
      {
        type: "p",
        text: "None of this makes semaglutide a bad choice. A ~69% chance of losing 10%+ and a coin-flip chance at 15% is an excellent, life-changing drug by any historical standard — it just isn't the most effective one. Semaglutide is often cheaper, sometimes more available, and some people tolerate it better. It also has the longest track record and strong cardiovascular-outcome evidence. The right drug is the one you can afford, access, tolerate and stay on — and for many people that's semaglutide. Our full [semaglutide vs tirzepatide comparison](/vs/semaglutide-vs-tirzepatide) and [tirzepatide guide](/tirzepatide-weight-loss) go deeper on the trade-offs.",
      },
    ],
  },

  {
    id: "trial-vs-real-world",
    heading: "Why your real-world result may differ from the trials",
    summary:
      "Trial participants get structured support, close monitoring and strong encouragement to stay on treatment and reach an effective dose — so real-world results often trail the trial numbers. The biggest drivers of that gap aren't biology; they're whether people reach an effective dose, take the drug consistently, and persist long enough. Close those gaps and you move much closer to the trial distribution.",
    blocks: [
      {
        type: "p",
        text: "One honest adjustment before you set your expectation: the numbers above come from clinical trials, and real-world results frequently come in lower. Understanding why is useful, because the reasons are mostly fixable rather than biological.",
      },
      {
        type: "p",
        text: "In a trial, participants are supported to reach and stay on an effective dose, monitored closely, and encouraged to persist for the full 68–72 weeks. In the real world, people stop early, titrate inconsistently, run into cost or supply interruptions, and sometimes never reach an effective dose. Real-world studies of semaglutide consistently show that effectiveness tracks heavily with adherence and how long people persist on treatment — the people who stay on it and reach an effective dose get trial-like results, while those who stop early or dose erratically get much less. The gap between trial and reality is, to a large extent, a gap in dose and persistence, not in the drug.",
      },
      {
        type: "p",
        text: "That's genuinely good news, because it means the trial distribution is reachable if you close those gaps: reach an effective dose, take it consistently, and stay on it long enough for the effect to accumulate. The flip side is the warning — treat it casually, stop and start, or quit at a low dose, and you should expect a result well below the trial numbers. Your result is heavily influenced by how you use the drug, not just which drug it is.",
      },
      {
        type: "callout",
        title: "The practical takeaway",
        text: "The trial numbers aren't a fantasy — they're what's achievable with an effective dose, real consistency, and persistence. Most of the gap between 'trial' and 'real life' is in those three things, all of which are at least partly in your control (and your provider's).",
      },
    ],
  },

  {
    id: "maximize",
    heading: "How to land in the upper part of the distribution",
    summary:
      "You can't guarantee a top result, but you can stack the odds: reach and tolerate an effective dose (patiently), take it consistently, prioritize protein and resistance training to lose fat rather than muscle, consider tirzepatide if you want the highest-response curve, and stay on long enough for the effect to build. These are the levers the trials and real-world data point to — none magic, all meaningful.",
    blocks: [
      {
        type: "p",
        text: "Pulling the evidence together, here's how to give yourself the best shot at the upper milestones — not guarantees, but the levers that actually move the odds.",
      },
      {
        type: "ul",
        items: [
          "**Reach an effective dose — patiently.** Especially on tirzepatide, the biggest results cluster at higher doses. Titrate slowly enough to stay on the drug, and don't settle at a low dose if you're tolerating it and want more loss. Patience with the climb is patience toward the result.",
          "**Be consistent.** Steady, as-prescribed dosing is what produced the trial numbers. Missed doses and long gaps are a leading reason real-world results trail trials.",
          "**Protect muscle with protein and resistance training.** This doesn't just keep your result healthy — losing fat rather than muscle is what a 'good' 15% looks like. See our [muscle-loss guide](/glp1-muscle-loss).",
          "**Choose the higher-response drug if it fits.** Tirzepatide's distribution sits above semaglutide's at every milestone. If cost, tolerance and access allow, it's the higher-odds choice.",
          "**Stay on long enough.** The trial results built over 68–72 weeks. Judging the drug at a few weeks, or quitting through a plateau, forfeits the back half of the curve.",
          "**Support the drug, don't fight it.** Reasonable eating, activity and sleep help the medication work. The drug plus solid basics beats the drug alone.",
        ],
      },
      {
        type: "p",
        text: "Notice what's not on this list: anything exotic or purchased. The levers that move your odds are dose, consistency, drug choice, muscle protection and time — unglamorous, evidence-based, and mostly within reach.",
      },
    ],
  },

  {
    id: "keeping-it",
    heading: "One crucial caveat: the loss is conditional on continuing",
    summary:
      "Every number in this guide assumes you stay on treatment. The same trials show that stopping reverses most of the loss — about two-thirds regained within a year off semaglutide, and roughly 14% of body weight regained after stopping tirzepatide. Whatever milestone you reach, holding it means ongoing treatment, often at a maintenance dose, not a finish line.",
    blocks: [
      {
        type: "p",
        text: "A final, essential caveat that reframes every figure above: these results describe what you can lose while taking the drug. They are not permanent once-and-done outcomes. The same trial programs that produced the distributions also tested what happens when people stop — and the answer is that most of the weight comes back.",
      },
      {
        type: "p",
        text: "In the semaglutide STEP 1 extension, people regained about two-thirds of their lost weight within a year of stopping. In the tirzepatide SURMOUNT-4 trial, people who stopped regained about 14% of their body weight over the following year, while those who continued held or extended their loss. So whatever milestone you reach, keeping it is a function of continuing treatment — often at a lower maintenance dose — rather than hitting a number and walking away. We cover this fully in our guide to [what happens when you stop a GLP-1](/stopping-glp1); the point here is simply that your 'result' should be understood as a result you maintain, not a result you bank.",
      },
      {
        type: "callout",
        title: "Set the expectation correctly",
        text: "The realistic goal isn't 'lose X% and be done' — it's 'lose X% and keep it off with ongoing treatment.' Choose a drug, dose and provider you can sustain, because the maintenance is the result, not an afterthought.",
      },
    ],
  },

  {
    id: "top-providers",
    heading: "Where to get an effective dose",
    summary:
      "Because reaching and staying on an effective dose is what moves your result toward the trial numbers, who you get treatment from matters — on price, the medications offered, and support. Below are the two programs we rate highest overall; both offer tirzepatide, the higher-response option. Compare the full field on our best-providers page.",
    blocks: [
      {
        type: "p",
        text: "Since the whole message of this guide is that reaching an effective dose and staying on it is what gets you the trial-level results, the provider you choose matters more than people realize — it shapes your price, whether you can get the higher-response drug, and the support that keeps you consistent. We score the field independently across cost, clinical quality, medications and transparency; rankings aren't for sale. See [how we review](/how-we-review).",
      },
      {
        type: "p",
        text: "Here are the two programs we rate highest overall — both offer tirzepatide, the option with the higher-response distribution. The component below pulls their current details live from our data.",
      },
      {
        type: "p",
        text: "Want the full field or a personalized pick? See the [best GLP-1 providers](/best-glp1-providers) ranking, compare [tirzepatide programs](/tirzepatide-online), or take the [2-minute match quiz](/find-your-match).",
      },
    ],
  },

  {
    id: "verdict",
    heading: "The bottom line",
    summary:
      "Your realistic result on a GLP-1 is a range of odds, not an average. On semaglutide, expect a good chance at 10–15% and a real shot at 20%+. On tirzepatide, the whole curve shifts up — more than half reach 20%+ at the top dose. Stack the odds with an effective dose, consistency and the right drug, know that about 1 in 7 respond weakly to semaglutide, and remember the loss holds only while you stay on treatment.",
    blocks: [
      {
        type: "p",
        text: "Here's the honest summary — more useful than any single average:",
      },
      {
        type: "ul",
        items: [
          "**Think odds, not averages.** Semaglutide: ~86% reach 5%, ~69% reach 10%, ~51% reach 15%, ~32% reach 20%. Tirzepatide (15 mg): ~84% reach 10%, ~57% reach 20%, ~36% reach 25%.",
          "**Tirzepatide shifts the whole curve up** and is strongly dose-dependent — reaching an effective dose roughly doubles your odds at the biggest milestones.",
          "**About 1 in 7 respond weakly to semaglutide** — a weak result is a prompt to check dose, consistency and drug choice, not a verdict.",
          "**Real-world trails trials** mostly because of dose and persistence — both largely in your control.",
          "**The loss is conditional on continuing.** Stop and most of it returns; plan for maintenance.",
        ],
      },
      {
        type: "p",
        text: "If you take one thing from this guide, let it be the reframe: stop asking 'what's the average?' and start asking 'what are my odds, and how do I improve them?' The trials answer the first question in detail, and the levers that answer the second — the right drug, an effective dose reached patiently, real consistency, and staying on long enough — are mostly within reach. If you're ready to act on it, start with our [top providers above](#top-providers) or the [full ranking](/best-glp1-providers), check whether you're a [candidate](/guides/do-you-qualify-for-glp1), and go in with an expectation built on the real distribution — not a marketing number.",
      },
    ],
    readMore: {
      href: "/tirzepatide-weight-loss",
      label: "Next: the complete tirzepatide guide",
    },
  },
];

export const RESULTS_FAQS: { q: string; a: string }[] = [
  {
    q: "How much weight will I lose on a GLP-1?",
    a: "There's no single number — it's a range of odds. On semaglutide (Wegovy) over 68 weeks, about 86% of people lose at least 5%, 69% lose at least 10%, 51% lose at least 15%, and about 32% lose 20% or more. Tirzepatide (Zepbound) is higher: at the top dose, about 84% lose 10%+, 57% lose 20%+, and 36% lose 25%+. Your realistic expectation is your odds of hitting each milestone, not the average — and individual results vary.",
  },
  {
    q: "What's the average weight loss on semaglutide vs tirzepatide?",
    a: "In the pivotal trials, semaglutide 2.4 mg averaged about 14.9% over 68 weeks (STEP 1), and tirzepatide averaged from about 16% at 5 mg up to roughly 21% (and up to 22.5% among those who stayed fully on treatment) at 15 mg over 72 weeks (SURMOUNT-1). But averages hide a wide spread — the share of people reaching each milestone is the more useful number, and tirzepatide is higher at every one.",
  },
  {
    q: "What percentage of people lose 20% or more on these drugs?",
    a: "On semaglutide 2.4 mg, roughly 32% — about one in three — reached 20% or more in STEP 1. On tirzepatide it's dose-dependent and higher: about 30% at 5 mg, 50% at 10 mg, and 57% at 15 mg in SURMOUNT-1. So at tirzepatide's top dose, more than half of people lose at least a fifth of their body weight — a result that used to require surgery.",
  },
  {
    q: "What if the GLP-1 isn't working for me?",
    a: "First check the fixable things: have you reached an effective dose (big results cluster at higher doses, especially on tirzepatide), are you taking it consistently, and would the other drug work better (tirzepatide's response is higher than semaglutide's)? About 1 in 7 people don't reach even 5% on semaglutide, but much apparent 'non-response' is really about dose, consistency or drug choice. Discuss adjusting with your clinician before concluding the class doesn't work for you.",
  },
  {
    q: "Can you predict whether you'll be a strong responder?",
    a: "Only roughly. The most common signal is early weight loss — many clinicians reassess if you haven't lost about 5% after roughly three months on the maintenance dose — but it's a heuristic, not a guarantee, and slow loss while you're still titrating up isn't very predictive. More reliable than prediction is stacking the odds: reaching an effective dose, staying consistent, choosing the higher-response drug, and supporting it with protein, activity and sleep.",
  },
  {
    q: "Does a higher dose mean more weight loss?",
    a: "For tirzepatide, strongly yes — the response is dose-dependent. The share reaching 20%+ roughly doubles from the 5 mg dose (~30%) to 15 mg (~57%), and the share reaching 25%+ more than doubles (~15% to ~36%). That's why reaching and tolerating an effective dose matters so much. The goal is the lowest dose that gives you a strong result with tolerable side effects — not blindly maxing out, but not stalling at a low dose either.",
  },
  {
    q: "Why do real-world results seem lower than the trial numbers?",
    a: "Because trial participants are supported to reach an effective dose, dose consistently, and stay on treatment for the full 68–72 weeks. In the real world, people often stop early, titrate erratically, hit cost or supply interruptions, or never reach an effective dose. Real-world effectiveness tracks heavily with adherence and persistence — close those gaps and you move much closer to the trial distribution. The gap is mostly about how the drug is used, not the drug itself.",
  },
  {
    q: "Will I keep the weight off after I stop?",
    a: "Mostly not — the results in this guide describe weight lost while on treatment. In the trials, stopping reversed most of the loss: about two-thirds regained within a year off semaglutide, and roughly 14% of body weight regained after stopping tirzepatide. Keeping your result means ongoing treatment, often at a lower maintenance dose. Plan for maintenance from the start rather than treating a milestone as a finish line.",
  },
  {
    q: "Is a 10% weight loss a good result?",
    a: "Yes — genuinely. A 10% loss meaningfully improves blood pressure, blood sugar, cholesterol and other health markers, and it's a result most people on placebo-plus-lifestyle don't reach (only about 12% did in STEP 1). Because the average is ~15%, a 10% result can feel like 'underperforming,' but it's a clinically excellent outcome. Judge your result against the full distribution and the health benefits, not against the average alone.",
  },
];

export const RESULTS_HOWTO = {
  name: "How to give yourself the best odds of a strong GLP-1 result",
  steps: [
    {
      name: "Choose the higher-response drug if it fits",
      text: "Tirzepatide's response distribution sits above semaglutide's at every milestone. If cost, tolerance and access allow, it's the higher-odds choice — discuss it with your clinician.",
    },
    {
      name: "Reach an effective dose, patiently",
      text: "The biggest results cluster at higher doses (especially on tirzepatide). Titrate slowly enough to stay on the drug, and don't settle at a low dose if you tolerate more and want more loss.",
    },
    {
      name: "Take it consistently",
      text: "Steady, as-prescribed dosing produced the trial numbers. Missed doses and long gaps are a leading reason real-world results trail trials.",
    },
    {
      name: "Protect muscle",
      text: "Prioritize protein and add resistance training so you lose fat rather than muscle — this is what a healthy result looks like and helps keep your metabolism up.",
    },
    {
      name: "Stay on long enough",
      text: "The trial results built over 68–72 weeks. Judge progress over months, not weeks, and push through plateaus rather than quitting early.",
    },
    {
      name: "Plan for maintenance",
      text: "The loss holds only while you continue treatment, so choose a drug, dose and provider you can sustain, and plan for ongoing (often lower-dose) treatment.",
    },
  ],
};

export const RESULTS_SOURCE_KEYS = [
  "step-1",
  "surmount-1",
  "surmount-5",
  "surmount-4",
  "step-1-extension",
  "semaglutide-realworld-2026",
  "niddk-obesity-meds",
  "cdc-obesity",
];
