// ─────────────────────────────────────────────────────────────────────────────
// Pillar: "What happens when you stop a GLP-1 — weight regain & keeping it off"
//
// High-demand, high-intent query cluster the site doesn't yet cover and that
// doesn't cannibalize any existing page: "weight regain after stopping Ozempic",
// "do you gain weight back after semaglutide", "how to keep weight off after
// GLP-1", "GLP-1 maintenance dose", "do I have to take Ozempic forever".
//
// Written in the brand's evidence-first, no-hype voice. Every clinical figure
// traces to a source key in sources.ts (STEP 1 extension, STEP 4, SURMOUNT-4 and
// the 2026 SURMOUNT-4 post-hoc). The honest answer — most people regain a large
// share of the weight, and the biology, not willpower, is why — is paired with
// the genuinely useful part: what the evidence says actually helps hold the loss.
// ─────────────────────────────────────────────────────────────────────────────

import type { Block, GuideSection } from "./glp1-weight-loss-guide";

export type { Block, GuideSection };

export const STOPPING_REVIEWED = "2026-11-05";

export const STOPPING_META = {
  path: "/stopping-glp1",
  title: "Stopping a GLP-1: Weight Regain & How to Keep It Off (2026)",
  description:
    "Most people regain much of their weight after stopping a GLP-1 — the STEP 1, STEP 4 and SURMOUNT-4 trials show how much, how fast and why. What the evidence says, and how to hold the loss.",
  h1: "What happens when you stop a GLP-1 — and how to keep the weight off",
  dek:
    "Weight regain after stopping Ozempic, Wegovy or Zepbound isn't a rumor, and it isn't a willpower failure — it's one of the best-documented findings in the whole field. Here's exactly what the trials show: how much comes back, how fast, who it hits hardest, and what the evidence says actually helps you keep the weight off.",
  readTime: "34 min read",
};

export const STOPPING_SECTIONS: GuideSection[] = [
  {
    id: "overview",
    heading: "The honest answer, up front",
    summary:
      "Yes — most people regain a large share of their weight after stopping a GLP-1. In the semaglutide STEP 1 extension, people regained about two-thirds of their lost weight within a year of stopping. This is biology, not weakness: the drug quiets appetite while you take it, and that effect ends when it does. Keeping the weight off usually means staying on some form of treatment, or planning carefully for the drop.",
    blocks: [
      {
        type: "keytakeaways",
        items: [
          "**Most of the weight comes back.** In the semaglutide STEP 1 trial extension, people who stopped regained about **two-thirds of their lost weight within a year** — from a 17.3% loss down to a 5.6% net loss.",
          "**Tirzepatide is the same story.** In SURMOUNT-4, people who switched to placebo regained about **14% of their body weight** over the next year, while those who kept taking it lost a further 6.7%.",
          "**It's biology, not willpower.** GLP-1 drugs work by actively suppressing appetite and 'food noise.' Stop the drug and that suppression stops too — your appetite and the body's weight 'set point' push back. Obesity behaves like a chronic condition, and the trial authors are blunt that ongoing treatment is what maintains the result.",
          "**The health gains fade with the weight.** Improvements in blood pressure, blood sugar and cholesterol largely reverse as the weight returns — a 2026 analysis found cardiometabolic benefits unwound in step with regain.",
          "**You can blunt it, not erase it.** Staying on a maintenance dose is the most proven defense; protecting muscle with protein and resistance training, keeping strong lifestyle habits, and tapering rather than quitting cold all help. But no diet-and-exercise plan has matched staying on the drug in a head-to-head trial.",
        ],
      },
      {
        type: "p",
        text: "If you're on a GLP-1 and losing weight, there's a question sitting in the back of your mind that the clinics don't always volunteer: what happens when I stop? It's the single most important thing to understand before you start, and the honest answer is uncomfortable — so let's give it to you straight, with the actual trial numbers, because this is one of the few areas in weight loss where the evidence is genuinely clear.",
      },
      {
        type: "p",
        text: "Here it is. When people stop taking a GLP-1 medication, most of the weight comes back. Not a little — a lot. This isn't a scare story or a marketing line to keep you subscribed; it's the consistent finding of the manufacturers' own pivotal trials, published in the leading medical journals. The drugs work beautifully while you take them and then largely stop working when you don't, in the same way blood-pressure medication lowers your blood pressure until the day you stop it.",
      },
      {
        type: "p",
        text: "That sounds bleak, and for a lot of people it lands as a personal failure — 'I lost the weight and couldn't keep it off, what's wrong with me.' Nothing is wrong with you. The regain is built into the biology of how these drugs work and how the body defends its weight, and understanding that is the first step to making a smart plan instead of a disappointed one. This guide walks through exactly what the trials show, why it happens, and — the part that actually matters — what the evidence says you can do about it.",
      },
      {
        type: "callout",
        title: "Why this matters more than ever",
        text: "About 11% of U.S. adults now report currently taking a GLP-1 for weight loss, up from 3% in 2024 (Gallup, 2026). A very large group of people started these drugs in the last two years — which means a very large group is now reaching the question of what happens when they stop. If that's you, you're not alone, and you're asking exactly the right question.",
      },
      {
        type: "p",
        text: "For the bigger picture on how these medications work and who they're for, see our [complete GLP-1 weight-loss guide](/glp1-weight-loss-guide). If cost is the reason you're thinking about stopping, our [cheapest GLP-1 options](/cheapest-glp1) page may change the math before you make that call.",
      },
    ],
  },

  {
    id: "the-evidence",
    heading: "What the trials actually show",
    summary:
      "Three large randomized trials settle the question. In STEP 1's extension, stopping semaglutide gave back two-thirds of the loss in a year. In STEP 4, people who kept taking semaglutide kept losing while those switched to placebo regained. In SURMOUNT-4, stopping tirzepatide produced about 14% regain while continuing it added more loss. The pattern is identical across drugs: continue and you hold or improve; stop and you regain.",
    blocks: [
      {
        type: "p",
        text: "You don't have to take anyone's word on this, because it's been tested directly in three large trials run by the drugmakers and published in top journals. They're worth knowing by name, because they're the evidence an informed decision rests on.",
      },
      {
        type: "h3",
        text: "STEP 1 extension — stopping semaglutide",
      },
      {
        type: "p",
        text: "The STEP 1 extension followed people after the main semaglutide trial ended and the drug was withdrawn, with no structured lifestyle program during the off-treatment year. On semaglutide, participants had lost a mean of **17.3% of body weight** by week 68. In the year after stopping, they regained **11.6 percentage points** — leaving a net loss of about **5.6%**. In plain terms, roughly **two-thirds of the lost weight came back within a year** of the last dose. The authors concluded that ongoing treatment is required to maintain the result.",
      },
      {
        type: "h3",
        text: "STEP 4 — continue vs stop semaglutide",
      },
      {
        type: "p",
        text: "STEP 4 ran the cleaner experiment. Everyone first took semaglutide for 20 weeks and lost weight; then half were randomly kept on the drug and half were switched to placebo. Over the next 48 weeks, the group that kept taking semaglutide lost a further **7.9%**, while the group switched to placebo **regained about 6.9%**. Measured from the very start, that's roughly a **17.4% loss** for the continuers versus about **5.0%** for those who stopped — a gap of nearly 15 percentage points created purely by whether or not you kept taking the drug.",
      },
      {
        type: "h3",
        text: "SURMOUNT-4 — continue vs stop tirzepatide",
      },
      {
        type: "p",
        text: "SURMOUNT-4 did the same for tirzepatide (the molecule in Zepbound and Mounjaro). After a 36-week lead-in in which people lost a substantial amount, half continued and half switched to placebo for a year. The continuers lost a **further 6.7%**; those who stopped **regained about 14%** of body weight. Over the full study, continuers were down **25.3%** from baseline versus **9.9%** for the stoppers. A 2026 post-hoc analysis put a sharper edge on it: among people who had lost at least 10%, **82% of those who stopped regained more than a quarter of the weight they'd lost.**",
      },
      {
        type: "statgrid",
        stats: [
          { value: "~2/3", label: "Share of lost weight regained within a year of stopping semaglutide (STEP 1 extension)" },
          { value: "~14%", label: "Body-weight regain after stopping tirzepatide over ~1 year (SURMOUNT-4)" },
          { value: "82%", label: "Of people who stopped tirzepatide regained >25% of their lost weight (SURMOUNT-4 post-hoc, 2026)" },
        ],
      },
      {
        type: "callout",
        title: "The pattern is the same every time",
        text: "Different drugs, different trials, same result: keep taking the medication and you hold or extend your loss; stop and you regain most of it. That consistency is why the trial authors describe obesity as a chronic condition that needs ongoing treatment — not a problem you fix once and walk away from.",
      },
    ],
  },

  {
    id: "comparison",
    heading: "The three trials, side by side",
    summary:
      "Laid out together, the trials tell one story: continuing a GLP-1 maintains or deepens weight loss; stopping it gives most of the loss back within a year, across both semaglutide and tirzepatide.",
    blocks: [
      {
        type: "p",
        text: "Here's everything in one place so you can see the shape of the evidence rather than take it piecemeal. These are the headline figures from each trial; full citations are in the sources below.",
      },
      {
        type: "table",
        caption: "Continuing vs stopping a GLP-1 — the trial evidence",
        headers: ["Trial", "Drug", "If you kept taking it", "If you stopped", "Source"],
        rows: [
          ["STEP 1 extension", "Semaglutide", "—", "Regained ~11.6 pts of a 17.3% loss (~2/3 back) in 1 year", "Wilding 2022"],
          ["STEP 4", "Semaglutide", "Lost a further ~7.9%", "Regained ~6.9% over 48 weeks", "Rubino 2021"],
          ["SURMOUNT-4", "Tirzepatide", "Lost a further ~6.7%", "Regained ~14% of body weight in 1 year", "Aronne 2024"],
          ["SURMOUNT-4 (post-hoc)", "Tirzepatide", "Kept most of the loss", "82% regained >25% of lost weight", "Horn 2026"],
        ],
      },
      {
        type: "p",
        text: "Read across any row and the conclusion is the same. There isn't a trial that shows people comfortably keeping the weight off after stopping — not because no one has looked, but because the biology doesn't cooperate. That's the honest state of the evidence, and it should shape how you plan, not scare you off a medication that works.",
      },
    ],
  },

  {
    id: "why-regain",
    heading: "Why the weight comes back",
    summary:
      "GLP-1 drugs don't permanently reset your weight — they actively suppress appetite while present. When the drug leaves, hunger and 'food noise' return, and the body defends its old weight through a lower metabolic rate and shifted hunger hormones. The regain is a predictable biological response, not a lack of discipline.",
    blocks: [
      {
        type: "p",
        text: "To make a good decision you need to understand why the regain happens, because the reason determines what actually helps. It comes down to a simple truth: these drugs manage your weight, they don't cure the underlying condition.",
      },
      {
        type: "h3",
        text: "The drug does the work — until it doesn't",
      },
      {
        type: "p",
        text: "A GLP-1 medication works by mimicking a gut hormone that tells your brain you're full, slows stomach emptying, and quiets the constant background pull toward food that many people with obesity describe as 'food noise.' While the drug is in your system, appetite is genuinely, pharmacologically turned down — that's why eating less feels effortless rather than like a daily fight. When you stop, that signal fades over the following weeks, appetite returns to where it was, and for most people eating creeps back up without any conscious decision to overeat.",
      },
      {
        type: "h3",
        text: "Your body actively defends its old weight",
      },
      {
        type: "p",
        text: "Weight loss itself triggers the body to fight back, through a set of responses sometimes called metabolic adaptation. As you lose weight, your metabolism slows somewhat, the fullness hormone leptin falls, and the hunger hormone ghrelin rises — a combination that increases appetite and lowers the calories you burn, pushing you back toward your previous weight. The GLP-1 drug counteracts this while you take it. Remove it, and the body's defense of its old 'set point' is no longer opposed. This is why the regain can feel relentless and why 'just keep doing what you were doing' rarely works on its own.",
      },
      {
        type: "callout",
        title: "This is the key reframe",
        text: "Regaining weight after stopping a GLP-1 is not evidence that you failed or that the drug 'didn't really work.' It's evidence that the drug worked exactly as designed — and that the biology it was holding back is still there. Obesity is a chronic, relapsing condition, which is precisely why the trials point toward ongoing management rather than a one-time fix.",
      },
      {
        type: "p",
        text: "If you want the mechanism in more depth, our guide to [how GLP-1 medications work](/guides/how-glp1-medications-work) explains the appetite and gut-hormone pathways in detail.",
      },
    ],
  },

  {
    id: "how-fast",
    heading: "How fast — and how much — you regain",
    summary:
      "Regain starts within weeks of the last dose as appetite returns, and builds over roughly a year. Trials point to giving back about two-thirds of semaglutide loss and roughly 14% of body weight after tirzepatide within a year. Individuals vary, but a steady climb over the first year off the drug is the typical pattern.",
    blocks: [
      {
        type: "p",
        text: "People want a timeline, so here's the realistic one, drawn from the trials and the biology rather than anecdotes.",
      },
      {
        type: "p",
        text: "The appetite suppression fades over the first few weeks after your last dose as the drug clears — semaglutide and tirzepatide are long-acting, so this is gradual rather than sudden. As hunger returns, intake rises, and the weight follows over the months that follow. In the trials, regain accumulated across roughly a year: by about 12 months off semaglutide, participants had given back around two-thirds of their loss; by about a year off tirzepatide, regain averaged around 14% of body weight. It isn't an overnight rebound — it's a steady climb that's easy to underestimate month to month until you look back.",
      },
      {
        type: "p",
        text: "How much any one person regains varies. Some hold more of their loss, especially with strong habits and muscle mass preserved; others track close to the trial averages or worse. But the trials are clear that regain is the rule, not the exception, and that it's substantial — planning around 'I'll be the one who keeps it all off through willpower alone' is planning against the evidence.",
      },
      {
        type: "callout",
        title: "A useful mental model",
        text: "Think of the number on the scale while you're on the drug as 'held down' rather than 'reset.' The held-down weight is real and the health benefits are real — but the moment the drug stops holding it, the weight starts drifting back up toward where your biology wants it, over months, not years.",
      },
    ],
  },

  {
    id: "who-regains-most",
    heading: "Who regains the most",
    summary:
      "Regain tends to be steepest in those who lost the most on the drug, and in people who stop without any structured lifestyle support. The STEP 1 extension saw the sharpest rebound among people who had lost 20% or more — a reminder that a bigger loss on the drug means a bigger gap for biology to close when it stops.",
    blocks: [
      {
        type: "p",
        text: "Regain isn't evenly distributed, and knowing the risk factors helps you plan. Two stand out from the trial data.",
      },
      {
        type: "h3",
        text: "The more you lost, the more you tend to regain",
      },
      {
        type: "p",
        text: "In the STEP 1 extension, the steepest regain was in the people who had lost the most on the drug — those down 20% or more of their body weight. It makes intuitive sense: a larger loss means the body's defense of its old weight has more ground to reclaim, and the bigger the gap the drug was holding open, the bigger the snap-back when it's removed. This is worth knowing precisely because the people most thrilled with their results can be the ones facing the hardest maintenance.",
      },
      {
        type: "h3",
        text: "Stopping with no plan is the worst case",
      },
      {
        type: "p",
        text: "The STEP 1 extension is notable because there was no structured lifestyle support during the off-treatment year — people were simply on their own after the drug stopped. That's the real-world scenario for many people who stop abruptly, and it produced the full two-thirds regain. It strongly suggests that how you stop, and what you put in place around it, matters — which is the subject of the rest of this guide.",
      },
      {
        type: "p",
        text: "One group with a specific risk worth naming: anyone who lost significant muscle along with fat on the drug. Losing muscle lowers the calories you burn at rest and makes regain easier, which is why protecting muscle is one of the highest-value things you can do — see our full guide to [GLP-1 and muscle loss](/glp1-muscle-loss).",
      },
    ],
  },

  {
    id: "health-effects",
    heading: "The health benefits fade too",
    summary:
      "GLP-1 drugs improve blood pressure, blood sugar, cholesterol and other markers — but those gains largely reverse as the weight returns. A 2026 analysis of SURMOUNT-4 found cardiometabolic improvements unwound roughly in proportion to how much weight people regained. The health case for these drugs, like the weight case, depends on continuing them.",
    blocks: [
      {
        type: "p",
        text: "Weight is the headline, but it isn't the only thing that moves. GLP-1 drugs improve a range of health markers — blood pressure, blood sugar (HbA1c), cholesterol and triglycerides, and markers of inflammation. The hard part to hear is that these improvements aren't banked permanently either.",
      },
      {
        type: "p",
        text: "A 2026 post-hoc analysis of SURMOUNT-4 looked specifically at this and found that the cardiometabolic gains reversed roughly in proportion to the weight regained — the more weight came back after stopping tirzepatide, the more blood pressure, glucose and lipid improvements unwound with it. In other words, the health benefits of these drugs behave like the weight loss: present while you take them, fading when you stop. For someone taking a GLP-1 partly to protect their heart or manage prediabetes, that's a central fact in the decision to stop.",
      },
      {
        type: "callout",
        title: "What this means for the decision",
        text: "If part of why you're on a GLP-1 is a weight-related health condition — high blood pressure, prediabetes or type 2 diabetes, fatty liver, sleep apnea — stopping doesn't just risk the weight, it risks those improvements. That's a conversation to have with your clinician, not a call to make on cost or fatigue alone. See our guide to [GLP-1 beyond weight loss](/glp1-beyond-weight-loss) for what these drugs do across those conditions.",
      },
    ],
  },

  {
    id: "keep-it-off",
    heading: "What actually helps you keep the weight off",
    summary:
      "The most proven way to hold the loss is to stay on treatment — often at a maintenance dose. Beyond that, the evidence supports protecting muscle (protein plus resistance training), keeping the lifestyle habits that supported the loss, and not treating 'off the drug' as 'back to before.' No lifestyle-only approach has matched staying on the medication in a trial, but these steps genuinely reduce how much you regain.",
    blocks: [
      {
        type: "p",
        text: "Now the part that matters, because 'you'll regain it' is not the end of the story — it's the reason to plan well. Here's what the evidence actually supports, in rough order of how much it helps.",
      },
      {
        type: "h3",
        text: "1. Staying on treatment is the most proven defense",
      },
      {
        type: "p",
        text: "This is the uncomfortable headline, but it's what the trials show: the single most reliable way to keep the weight off is to keep taking the medication, often at a lower maintenance dose rather than the full dose that drove the loss. STEP 4 and SURMOUNT-4 both demonstrated that continuation holds — and in both, the continuers kept losing or held steady while the stoppers regained. For many people, the realistic model for obesity is the same as for high blood pressure or high cholesterol: ongoing treatment, not a course you finish. If cost is what's pushing you toward stopping, it's worth checking the [cheapest GLP-1 options](/cheapest-glp1) and [insurance and cost guide](/guides/glp1-cost-and-insurance) before deciding — a lower maintenance dose is often cheaper, too.",
      },
      {
        type: "h3",
        text: "2. Protect your muscle — protein and resistance training",
      },
      {
        type: "p",
        text: "If you do reduce or stop, the highest-value thing you can do is keep the muscle you have. Muscle burns calories at rest, so losing it lowers your metabolic rate and makes regain easier and faster. Two levers do most of the work: eat enough protein (a common target is roughly 1.2–1.6 g per kg of body weight, but confirm what's right for you with a clinician), and do resistance training at least twice a week. This matters most for people who lost weight quickly, since fast loss tends to take more muscle with it. Our [GLP-1 and muscle-loss guide](/glp1-muscle-loss) covers the how in detail.",
      },
      {
        type: "h3",
        text: "3. Keep the habits that supported the loss",
      },
      {
        type: "p",
        text: "The drug made eating less feel easy; without it, structure has to do more of that work. The habits that help most are the unglamorous ones: a protein- and fiber-forward way of eating, regular physical activity, enough sleep, and some form of ongoing accountability or support. The STEP 1 extension's full two-thirds regain happened with no structured support at all — which is exactly why building that structure before you stop is worth the effort. It won't match the drug, but it meaningfully changes the slope of the curve.",
      },
      {
        type: "h3",
        text: "4. Don't treat 'off the drug' as 'back to before'",
      },
      {
        type: "p",
        text: "A lot of regain comes from quietly sliding back into old patterns once the appetite brake is gone. Watching your weight regularly and setting a clear threshold — a specific number at which you'll act, whether that's tightening habits or talking to your clinician about restarting — turns a slow, unnoticed climb into something you can catch early. Early action is far easier than reversing a full regain.",
      },
      {
        type: "callout",
        title: "The honest ranking",
        text: "Staying on some form of treatment is the one approach proven in head-to-head trials. Muscle, habits and monitoring are real and worth doing — they reduce how much you regain — but no lifestyle-only plan has matched continued medication in a trial. Plan with that hierarchy in mind, not against it.",
      },
    ],
  },

  {
    id: "maintenance-dose",
    heading: "Does a lower 'maintenance dose' work?",
    summary:
      "Many clinicians move patients to a lower maintenance dose to hold the loss at lower cost and with fewer side effects, and it's a reasonable, widely used strategy. But be clear on the evidence: the big trials studied continued full-dose treatment, not a defined low-dose maintenance protocol, so the exact maintenance dose is individualized and less rigorously proven than full continuation.",
    blocks: [
      {
        type: "p",
        text: "One of the most common questions is whether you can drop to a smaller dose to maintain — cheaper, gentler, and still enough to hold the weight. It's a sensible idea and it's widely done, but it's worth being precise about what's proven and what's practice.",
      },
      {
        type: "p",
        text: "What the trials proved is that **continuing** the medication maintains the loss — in STEP 4 and SURMOUNT-4, the continuation arms largely stayed on effective doses. What the big trials did not do is test a specific 'drop to dose X to maintain' protocol head-to-head. So maintenance dosing — staying on a lower dose than the one that drove your loss — is a reasonable, common clinical strategy rather than a precisely trial-validated formula. Many people do hold their weight well on a reduced dose; the right dose is individual, and it's a decision to make with a prescriber who can adjust based on how your weight responds.",
      },
      {
        type: "callout",
        title: "The practical takeaway",
        text: "A lower maintenance dose is a legitimate middle path between full-dose treatment and stopping entirely — often cheaper and easier to tolerate, and far better supported than stopping outright. Just go in knowing the exact maintenance dose is tailored to you, not read off a trial, and that it should be set and adjusted with a clinician.",
      },
    ],
  },

  {
    id: "stopping-safely",
    heading: "If you do decide to stop",
    summary:
      "There are good reasons to stop — side effects, pregnancy plans, cost, or simply choosing to. If you stop, taper with your clinician rather than quitting abruptly, put your muscle and lifestyle plan in place first, watch your weight with a clear re-start threshold, and treat restarting later as a normal option, not a defeat.",
    blocks: [
      {
        type: "p",
        text: "None of this means you can never stop. There are legitimate reasons to come off a GLP-1 — side effects you don't want to live with, planning a pregnancy (these drugs aren't used in pregnancy), cost, reaching a goal and wanting to try maintaining, or simply deciding it's not for you. The point isn't 'never stop' — it's 'stop with a plan.' Here's how to do that sensibly.",
      },
      {
        type: "ul",
        items: [
          "**Talk to your clinician first, and taper rather than quit cold.** Stepping the dose down over time, rather than stopping abruptly, can ease the transition and the return of appetite. Don't make dose changes on your own.",
          "**Put the plan in place before you stop, not after.** Lock in your protein target, your resistance-training routine and your support structure while the drug is still helping — so the scaffolding is already there when the appetite brake comes off.",
          "**Set a re-start threshold.** Decide in advance the weight at which you'll act, and weigh yourself regularly enough to catch a climb early. A specific number beats a vague 'I'll keep an eye on it.'",
          "**Treat restarting as normal.** If the weight starts coming back, resuming treatment isn't a failure — it's the evidence-based response to a chronic condition reasserting itself. Many people cycle on and off; planning for that is wiser than being surprised by it.",
          "**Mind pregnancy and timing specifically.** If you're stopping to try to conceive, discuss timing with your clinician — this is a medical decision with its own guidance, not a weight decision.",
        ],
      },
      {
        type: "p",
        text: "If part of the reason you're considering stopping is the hassle or cost of your current program rather than the medication itself, it may be worth comparing options before you quit — a more affordable or lower-maintenance-dose program can change the decision. See the [programs we rate highest](/best-glp1-providers) or take the [2-minute match quiz](/find-your-match).",
      },
    ],
  },

  {
    id: "verdict",
    heading: "The bottom line, and what to do next",
    summary:
      "Stopping a GLP-1 means regaining most of the weight for most people, and losing the health gains with it — the evidence is clear and consistent. That's not a reason to avoid the drugs; it's a reason to go in understanding they're ongoing treatment for a chronic condition. Plan for maintenance, protect your muscle, and treat a lower dose or a restart as normal tools, not failures.",
    blocks: [
      {
        type: "p",
        text: "Pull it together and the picture is clear, even if it isn't the one anyone hoped for:",
      },
      {
        type: "ul",
        items: [
          "**Most people regain most of the weight after stopping** — roughly two-thirds within a year for semaglutide, around 14% of body weight for tirzepatide. This is the rule, not the exception.",
          "**It's biology, not willpower.** The drug suppresses appetite while you take it; stop it and appetite, 'food noise' and the body's defense of its old weight all return.",
          "**The health gains fade with the weight.** Blood pressure, blood sugar and cholesterol improvements largely reverse as you regain.",
          "**Staying on treatment is the one proven defense** — often at a lower maintenance dose. Muscle, habits and monitoring help, but don't match it.",
          "**You can stop — with a plan.** Taper, protect muscle, set a re-start threshold, and treat restarting as a normal option rather than a defeat.",
        ],
      },
      {
        type: "p",
        text: "The real takeaway isn't 'these drugs don't work' — they work extraordinarily well. It's that they treat a chronic condition rather than cure it, and the smart move is to plan for that reality from the start. If you're choosing a program, choose one you could realistically stay with, at a price that works long-term; compare the [best GLP-1 providers](/best-glp1-providers), check the [cheapest routes](/cheapest-glp1), or take the [match quiz](/find-your-match). And whatever you decide about stopping, make it a decision with your clinician and a plan — not a quiet drift off the drug and a surprised look at the scale a year later.",
      },
    ],
    readMore: {
      href: "/glp1-muscle-loss",
      label: "Next: how to protect your muscle on (and off) a GLP-1",
    },
  },
];

export const STOPPING_FAQS: { q: string; a: string }[] = [
  {
    q: "Do you gain the weight back after stopping Ozempic or Wegovy?",
    a: "Most people do regain a large share. In the semaglutide STEP 1 trial extension, participants regained about two-thirds of their lost weight within a year of stopping — from a 17.3% loss down to a 5.6% net loss. It's a consistent finding across trials, and it reflects biology rather than willpower: the drug suppresses appetite while you take it, and that effect ends when you stop.",
  },
  {
    q: "How much weight do you regain after stopping a GLP-1?",
    a: "Roughly two-thirds of the loss within a year for semaglutide (STEP 1 extension), and about 14% of body weight over a year for tirzepatide (SURMOUNT-4). A 2026 analysis found 82% of people who stopped tirzepatide regained more than a quarter of the weight they'd lost. Individuals vary, but substantial regain over the first year is the typical pattern.",
  },
  {
    q: "How fast does the weight come back?",
    a: "Appetite starts returning within a few weeks of the last dose as the drug clears, and regain builds over roughly the following year — a steady climb rather than an overnight rebound. In the trials, most of the regain accumulated across the 12 months after stopping.",
  },
  {
    q: "Do I have to take a GLP-1 forever?",
    a: "Not necessarily, but the honest framing is that obesity behaves like a chronic condition, and the trials show ongoing treatment is what maintains the result — similar to blood-pressure or cholesterol medication. Many people stay on a lower maintenance dose long-term; others stop with a structured plan and accept some regain. There's no one right answer, but 'take it, lose weight, stop, keep it off easily' is not what the evidence supports.",
  },
  {
    q: "Can you keep the weight off after stopping a GLP-1?",
    a: "You can reduce how much you regain, but no lifestyle-only approach has matched staying on the medication in a head-to-head trial. The most proven defense is continuing treatment, often at a maintenance dose. Beyond that, protecting muscle with protein and resistance training, keeping strong eating and activity habits, and monitoring your weight with a clear re-start threshold all genuinely help blunt the regain.",
  },
  {
    q: "Does a lower maintenance dose work to keep weight off?",
    a: "It's a reasonable and widely used strategy, and many people hold their weight well on a reduced dose. Be clear on the evidence, though: the big trials proved that continuing treatment maintains the loss, but didn't test a specific low-dose maintenance protocol head-to-head. So the right maintenance dose is individualized and set with a prescriber, not read off a trial — but it's far better supported than stopping entirely.",
  },
  {
    q: "Why do you regain weight after stopping these drugs?",
    a: "Two reasons. First, the drug actively suppresses appetite and 'food noise' only while you take it, so hunger returns when you stop. Second, weight loss itself triggers the body to defend its old weight — metabolism slows, the fullness hormone leptin falls and the hunger hormone ghrelin rises. The medication offsets this while you're on it; without it, that biological push-back is unopposed.",
  },
  {
    q: "Do the health benefits reverse when you stop?",
    a: "Largely, yes. A 2026 analysis of SURMOUNT-4 found that improvements in blood pressure, blood sugar and cholesterol reversed roughly in proportion to the weight regained. If you're taking a GLP-1 partly for a weight-related health condition, stopping risks those gains too — which is why it should be a clinician conversation, not a decision made on cost or fatigue alone.",
  },
  {
    q: "Is it safe to stop a GLP-1 suddenly?",
    a: "There's no dangerous withdrawal syndrome, but stopping abruptly tends to bring appetite back faster and can make regain harder to manage. Most clinicians prefer tapering the dose down over time. Always make dose changes with your prescriber rather than on your own, and if you're stopping to try to conceive, discuss timing specifically — these drugs aren't used in pregnancy.",
  },
  {
    q: "Is regaining weight after a GLP-1 a sign I failed?",
    a: "No. The regain is built into how the drugs work and how the body defends its weight — it happens to most people in controlled trials with the same support everyone else had. It's evidence the drug did its job and that the underlying biology is still there, not evidence of weak willpower. The useful response is a maintenance plan, not self-blame.",
  },
];

export const STOPPING_HOWTO = {
  name: "How to maintain your weight loss when reducing or stopping a GLP-1",
  steps: [
    {
      name: "Talk to your clinician before any change",
      text: "Decide together whether to continue, move to a lower maintenance dose, or stop — and never change your dose on your own. The maintenance dose is individual.",
    },
    {
      name: "Taper rather than quit cold",
      text: "If you're stopping, step the dose down over time rather than stopping abruptly, to ease the return of appetite.",
    },
    {
      name: "Lock in your muscle plan first",
      text: "Before reducing, set a protein target (often ~1.2–1.6 g/kg, confirmed with a clinician) and resistance training at least twice a week to protect the muscle that keeps your metabolism up.",
    },
    {
      name: "Keep the habits that supported the loss",
      text: "Maintain a protein- and fiber-forward way of eating, regular activity, enough sleep and some ongoing support — the structure has to do the work the drug was doing.",
    },
    {
      name: "Set a re-start threshold and monitor",
      text: "Pick a specific weight at which you'll act, weigh yourself regularly, and catch a climb early rather than after a full regain.",
    },
    {
      name: "Treat restarting as a normal option",
      text: "If the weight returns, resuming treatment is the evidence-based response to a chronic condition, not a failure. Plan for the possibility rather than being surprised by it.",
    },
  ],
};

export const STOPPING_SOURCE_KEYS = [
  "step-1-extension",
  "step-4",
  "surmount-4",
  "surmount-4-posthoc",
  "step-1",
  "surmount-1",
  "gallup-glp1-2026",
  "niddk-obesity-meds",
];
