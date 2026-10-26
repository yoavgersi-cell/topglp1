// ─────────────────────────────────────────────────────────────────────────────
// Pillar: "GLP-1 and Muscle Loss — What the Science Really Says (and How to Keep
// Your Muscle)".
//
// A timely, high-value authority asset on the single most-searched concern about
// GLP-1 weight loss after cost: muscle (lean mass) loss. Covers why it happens,
// how much you actually lose, whether it's unique to the drugs, who's most at
// risk, the evidence-based protein + resistance-training playbook to prevent it,
// and the 2026 investigational muscle-preservation drug pipeline (bimagrumab,
// trevogrumab, apitegromab, enobosarm) — clearly flagged as NOT approved.
//
// Every clinical figure traces to a source key in sources.ts. Trial numbers are
// reported with their design/timepoint; investigational agents are never
// presented as available treatments. Nothing here is invented.
// ─────────────────────────────────────────────────────────────────────────────

import type { Block, GuideSection } from "./glp1-weight-loss-guide";

export type { Block, GuideSection };

export const MUSCLE_REVIEWED = "2026-10-26";

export const MUSCLE_META = {
  path: "/glp1-muscle-loss",
  title: "GLP-1 & Muscle Loss (2026): How Much You Lose & How to Keep It",
  description:
    "Do Ozempic, Wegovy and Zepbound cause muscle loss? What the 2026 science shows, how much lean mass you lose, and the protein + resistance-training plan to keep it — plus the new muscle-preservation drugs.",
  h1: "GLP-1 and muscle loss: what the science really says — and how to keep your muscle",
  dek:
    "Semaglutide, tirzepatide and the newer GLP-1s cost you some muscle along with the fat — but far less than the headlines imply, and most of it is in your control. Here's exactly how much lean mass you lose, whether it's any worse than other weight loss, who's most at risk, and the evidence-based plan to protect it, researched against the primary trials.",
  readTime: "44 min read",
};

export const MUSCLE_SECTIONS: GuideSection[] = [
  {
    id: "overview",
    heading: "The short version",
    summary:
      "GLP-1 drugs do cause some muscle (lean mass) loss — roughly a quarter to a third of the weight you lose — but that's broadly similar to any large weight loss, your body composition usually improves, and protein plus resistance training can cut the muscle loss dramatically. A new class of muscle-preservation drugs is in trials but none is approved.",
    blocks: [
      {
        type: "keytakeaways",
        items: [
          "Yes, GLP-1s cause some muscle loss — but **most of what you lose is fat**. In the STEP 1 scans, fat mass fell about **19%** while lean mass fell about **10%**, so lean mass as a *share* of your body actually went up.",
          "Across 2026 analyses, roughly **a quarter to a third of the weight lost** on GLP-1s is lean mass — **about the same as diet-only weight loss**. It is not a unique drug toxicity.",
          "The muscle loss is **largely in your control**. The two levers that matter most are eating enough **protein** (about **1.2–1.6 g/kg/day**) and doing **resistance training** 2–3 times a week.",
          "The people most at risk are **older adults, those starting with little muscle, anyone barely eating, and the sedentary** — not the average motivated patient who lifts and eats protein.",
          "A new wave of **muscle-preservation drugs** (bimagrumab, trevogrumab, apitegromab, enobosarm) looks promising in **phase 2** trials, but **none is FDA-approved** for this — do not seek them out.",
          "Muscle matters for **metabolism, strength, healthy aging and keeping the weight off** — which is exactly why protecting it is worth the effort from week one.",
        ],
      },
      {
        type: "p",
        text: "If you have spent any time reading about GLP-1 medications, you have seen the warnings: \"Ozempic makes you lose muscle,\" \"you're wasting away,\" \"Ozempic face.\" It is the second-biggest worry people have about these drugs after cost — and unlike a lot of internet health panic, there is a real kernel of truth in it. When you lose a large amount of weight quickly, some of what you lose is muscle, and GLP-1 medications are extraordinarily good at producing large, fast weight loss.",
      },
      {
        type: "p",
        text: "The concern has only grown louder as the drugs have gone mainstream. Tens of millions of people are now on GLP-1 medications, social feeds are full of before-and-afters and 'Ozempic body' commentary, and — tellingly — pharmaceutical companies are pouring money into drugs designed specifically to fix the muscle problem, which has put it squarely in the news. When the industry itself treats something as worth a billion-dollar research race, it's reasonable to want to understand it. So let's separate the real, manageable issue from the fear.",
      },
      {
        type: "p",
        text: "But the full picture is far more reassuring, and far more actionable, than the headlines suggest. The muscle loss on GLP-1s is real but modest, it is broadly the same as what any big weight loss produces, your overall body composition almost always improves, and the amount of muscle you keep is largely up to you. This guide lays out exactly what the science shows — the actual numbers from the trials — and then gives you the evidence-based plan to lose fat while hanging on to your muscle. We also cover the genuinely exciting new development: a class of drugs being tested specifically to prevent muscle loss on GLP-1s, with the first big results landing in 2026.",
      },
      {
        type: "callout",
        title: "The one-line answer",
        text: "GLP-1 drugs cost you some muscle, but mostly fat — and with enough protein and a couple of weekly strength sessions, you can keep the large majority of your muscle while the fat comes off.",
      },
      {
        type: "p",
        text: "A note on scope before we dive in: this is an educational guide, not medical advice, and it is about protecting muscle during medically supervised weight loss — not about avoiding treatment. If you qualify for a GLP-1 and your clinician recommends it, muscle-loss fear is not a reason to skip it; it is a reason to do it well. For the broader foundation on how these drugs work, see our [complete GLP-1 weight-loss guide](/glp1-weight-loss-guide), and for the new oral options, our [GLP-1 pills guide](/glp1-pills).",
      },
    ],
  },

  {
    id: "why",
    heading: "Why GLP-1s cause muscle loss in the first place",
    summary:
      "It's not the drug attacking your muscle directly. Any large calorie deficit forces the body to break down some lean tissue for fuel, and GLP-1s amplify that in three ways: they create a big deficit, they suppress appetite so you under-eat protein, and they often make people move less.",
    blocks: [
      {
        type: "p",
        text: "The first thing to understand — because it reframes the whole problem — is that GLP-1 medications do not specifically target or destroy muscle. There is no toxic effect on muscle tissue. What happens is simpler and more fixable than that.",
      },
      {
        type: "p",
        text: "Whenever you lose a meaningful amount of weight, through any method, some of that weight is lean tissue, not just fat. When you are in a calorie deficit, your body pulls energy from its stores. It would love to burn only fat, but it does not work that cleanly: the body also breaks down some muscle protein for fuel and, as you get physically smaller, some lean mass is simply no longer needed to carry a smaller body. This is true of crash diets, bariatric surgery, and GLP-1 drugs alike. The famous historical example is the Minnesota Starvation Experiment, where semi-starved men lost large amounts of both fat and lean mass. Losing weight costs some muscle; that is biology, not a property of any particular drug.",
      },
      {
        type: "p",
        text: "What GLP-1 medications do is make that general phenomenon more pronounced, through three specific mechanisms:",
      },
      {
        type: "ol",
        items: [
          "**They create a large calorie deficit.** GLP-1s are powerful. People commonly eat hundreds of calories less per day and lose 15–20%+ of their body weight. A bigger, faster deficit means more total tissue lost — including more muscle in absolute terms — than a gentle diet would.",
          "**They suppress appetite, so you under-eat protein.** This is the big one. The drugs work by quieting hunger and 'food noise,' which is exactly why they work — but it also means many people drift through the day on very little food, and protein is usually the first thing to fall. Protein is the nutrient that signals your body to preserve muscle; eat too little of it in a deficit and you lose more lean mass than you had to.",
          "**They often make people move less.** Lower food intake can mean lower energy, and studies have found that people frequently reduce their physical activity while losing weight on GLP-1 drugs. Less movement — especially less muscle-loading activity — removes the main signal that tells your body to hold onto muscle.",
        ],
      },
      {
        type: "p",
        text: "Notice what all three have in common: they are about the **deficit, the diet and the activity** — not about the drug poisoning your muscle. That is genuinely good news, because every one of those three is something you can influence. The rest of this guide is essentially about turning each of those three levers in your favor.",
      },
      {
        type: "callout",
        title: "Why this matters",
        text: "If muscle loss were a direct toxic effect of the drug, there would be little you could do about it. Because it's driven by the deficit, low protein and low activity, it is one of the most controllable side effects in all of medicine — you just have to act on it deliberately.",
      },
    ],
  },

  {
    id: "how-much",
    heading: "How much muscle do you actually lose?",
    summary:
      "In the STEP 1 scans, semaglutide cut fat mass by about 19% and lean mass by about 10% over 68 weeks — so lean mass rose as a share of body weight. Across 2026 analyses, roughly a quarter to a third of total weight lost is lean mass, and real-world results are often better when people stay active and eat protein.",
    blocks: [
      {
        type: "p",
        text: "Here are the actual numbers, because this is where the fear and the facts diverge most. The headline you want to anchor on is from the body-composition scans in the pivotal semaglutide trial.",
      },
      {
        type: "h3",
        text: "The STEP 1 scan data",
      },
      {
        type: "p",
        text: "In a DXA (body-composition scan) substudy of the [STEP 1 trial](/medications/semaglutide) of semaglutide 2.4 mg, over 68 weeks participants lost about **19% of their fat mass** and about **10% of their lean body mass**. At first glance the 10% lean figure sounds alarming — but look at the ratio. Far more fat came off than lean, which means that **lean mass as a proportion of total body weight actually increased** (by roughly 3 percentage points). In other words, the people in the trial ended up *leaner* — a better body composition, not a worse one. Losing some absolute lean mass while your body-fat percentage drops is the normal, healthy signature of successful weight loss.",
      },
      {
        type: "statgrid",
        stats: [
          { value: "~19%", label: "Fall in total fat mass on semaglutide over 68 weeks (STEP 1 scan substudy)" },
          { value: "~10%", label: "Fall in total lean body mass over the same period" },
          { value: "+~3 pts", label: "Increase in lean mass as a share of total body weight — body composition improved" },
          { value: "¼–⅓", label: "Share of total weight lost that is lean mass, across 2026 analyses — similar to dieting" },
        ],
      },
      {
        type: "h3",
        text: "The bigger picture across trials",
      },
      {
        type: "p",
        text: "Pooling across many studies, the consensus in 2026 is that **roughly a quarter to a third of the total weight lost on GLP-1 therapy is lean mass**, with the rest being fat. The figure runs a little higher for semaglutide and a little lower for tirzepatide in pooled analyses, but the honest summary is that they land in the same general range — and crucially, that range is **broadly the same as what diet-only weight loss produces**. A 2026 review concluded that incretin drugs and lifestyle-based weight loss affect lean mass comparably. So the muscle loss is not an extra penalty you pay for using the medication; it is the ordinary cost of losing a lot of weight by any means.",
      },
      {
        type: "p",
        text: "It is also worth saying plainly: some of the lean mass that comes off is not muscle you would miss. 'Lean mass' on a scan includes water, the connective tissue and extra structural tissue a larger body needed, and the blood volume that supported more fat. When you get smaller, some of that is supposed to go. The concern is specifically about losing **functional skeletal muscle** — strength — and that is the part you can protect.",
      },
      {
        type: "h3",
        text: "Real-world results are often better",
      },
      {
        type: "p",
        text: "The trial averages reflect people who were not necessarily doing anything special to protect muscle. In real-world cohorts where weight loss is gradual and people stay active and eat adequate protein, the muscle loss can be substantially smaller — some reports describe only a few percent of muscle lost alongside double-digit weight loss. That gap between the average and the achievable is the entire point of this guide: the number is not fixed, and the right habits move it in your favor.",
      },
      {
        type: "h3",
        text: "Size isn't the same as strength",
      },
      {
        type: "p",
        text: "One more nuance that cuts in your favor: the amount of muscle on a scan and your actual strength and function don't always move together. Studies that have measured not just lean mass but real-world muscle function — grip strength, physical performance — during semaglutide treatment, such as the SEMALEAN study, help separate 'lost some lean mass on a scan' from 'got meaningfully weaker.' Because you're also shedding fat, becoming lighter, and (if you follow the plan) training, many people maintain or even improve their functional strength and mobility while the scan shows some lean-mass reduction. Strength is ultimately what matters for health and daily life — and it's more defensible than the scan number alone.",
      },
      {
        type: "callout",
        title: "The reframe",
        text: "Don't fixate on 'I'll lose 10% of my lean mass.' The right questions are: what share of my loss is fat vs muscle, is my body-fat percentage dropping, and am I keeping my strength? On GLP-1s, with a little effort, the answers are: mostly fat, yes, and yes.",
      },
    ],
  },

  {
    id: "unique",
    heading: "Is GLP-1 muscle loss worse than other weight loss?",
    summary:
      "No. The best 2026 evidence says the proportion of lean mass lost on GLP-1 drugs is broadly comparable to diet-induced weight loss — it's a consequence of losing weight, not a unique drug effect. The reason it gets more attention is simply that these drugs produce so much more weight loss.",
    blocks: [
      {
        type: "p",
        text: "This is the question that separates the useful concern from the clickbait, so it's worth answering carefully. The viral framing implies GLP-1s do something uniquely bad to your muscle. The evidence does not support that.",
      },
      {
        type: "p",
        text: "Head-to-head-style comparisons and 2026 meta-analyses find that the *fraction* of weight lost as lean mass on GLP-1 drugs is about the same as — not worse than — the fraction lost through diet and lifestyle change. If you lost the same amount of weight by eating less on your own, you would lose a similar share of muscle. There is no good evidence that semaglutide or tirzepatide carries a special, additional muscle-wasting effect beyond what the weight loss itself causes. Some researchers have made this point bluntly: there is no signal that these drugs produce *disproportionate* lean-mass loss compared with other ways of losing the same weight.",
      },
      {
        type: "p",
        text: "So why does GLP-1 muscle loss get so much more attention than diet muscle loss ever did? Two reasons. First, **scale**: these drugs produce far more weight loss than most people ever achieved by dieting — 15–20%+ versus the single digits typical of diet-alone attempts — so the *absolute* amount of muscle lost is larger even when the *proportion* is the same. Bigger weight loss, bigger everything, muscle included. Second, **speed and appetite suppression**: the loss is faster and the appetite is so quiet that under-eating protein is easy, which can tip the proportion unfavorably if you're not paying attention. Those are real, but they are reasons to *manage* the loss, not reasons the drug is uniquely dangerous.",
      },
      {
        type: "p",
        text: "There is also an important flip side that rarely makes the headlines. Carrying excess weight is itself bad for muscle and physical function — a condition sometimes called 'sarcopenic obesity,' where high fat mass coexists with poor muscle quality. Losing the fat, improving insulin sensitivity, and becoming able to move and exercise more can *improve* overall musculoskeletal health, even if the scan shows some lean mass came off. The goal is not to maximize the number on the muscle readout; it's to end up stronger, leaner and healthier — which is very achievable here.",
      },
      {
        type: "callout",
        title: "Bottom line on 'unique'",
        text: "GLP-1 muscle loss isn't a special drug toxicity — it's the ordinary cost of large weight loss, made more visible because the weight loss is so large. Treat it like what it is: a manageable side effect of success, not a reason to fear the medicine.",
      },
    ],
  },

  {
    id: "why-matters",
    heading: "Why keeping muscle actually matters",
    summary:
      "Muscle drives your resting metabolism, strength and physical function, protects against falls and frailty as you age, supports bone and blood-sugar control, and — importantly — helps you keep the weight off. Losing it unnecessarily undercuts both your health and your long-term results.",
    blocks: [
      {
        type: "p",
        text: "Before the how-to, it's worth being clear on *why* this is worth your effort — because 'muscle' can sound like a vanity concern when it's really a health and durability one.",
      },
      {
        type: "ul",
        items: [
          "**Metabolism.** Muscle is metabolically active tissue; more of it means a higher resting metabolic rate. Lose muscle unnecessarily and you lower the number of calories you burn at rest, which makes maintaining your weight loss harder down the line.",
          "**Strength and daily function.** Muscle is what lets you carry groceries, climb stairs, get up off the floor, and stay independent. This is not abstract — functional strength is one of the strongest predictors of quality of life as you age.",
          "**Healthy aging and fall prevention.** From roughly your 30s onward you naturally lose muscle each decade (sarcopenia). Stacking avoidable muscle loss on top of that accelerates frailty, and low muscle is linked to higher risk of falls, fractures and loss of independence.",
          "**Bone and blood sugar.** Resistance training and the muscle it preserves support bone density (which can also fall with rapid weight loss) and improve how your body handles blood sugar — a double win when the underlying goal is metabolic health.",
          "**Keeping the weight off.** This is the one most people miss. If you lose muscle on the way down and then regain weight later (common when stopping treatment), the regain is mostly fat — so you can end up with a *worse* body composition than you started with. Protecting muscle now is insurance for your long-term results.",
        ],
      },
      {
        type: "h3",
        text: "What about 'Ozempic face'?",
      },
      {
        type: "p",
        text: "The 'Ozempic face' and 'Ozempic body' headlines — gaunt, deflated-looking features after rapid weight loss — are mostly about **fat loss**, not muscle. When you lose fat quickly, including the fat pads in the face, skin can look looser and features more hollow, especially in people who were already lean-faced or older. It is a cosmetic consequence of fast fat loss, not evidence of muscle wasting, and it tends to settle as weight stabilizes. Losing weight more gradually, staying hydrated and well-nourished, and (again) preserving muscle all help. It's a real phenomenon, but it's a different thing from the muscle concern, and conflating the two overstates both.",
      },
      {
        type: "callout",
        title: "The through-line",
        text: "Muscle isn't about looking a certain way — it's your engine, your strength, your protection against frailty, and your best insurance against regaining fat. That's why the small daily effort to keep it pays off far beyond the scale.",
      },
    ],
  },

  {
    id: "risk",
    heading: "Who's most at risk of losing too much muscle",
    summary:
      "The highest-risk groups are older adults, people starting with low muscle mass, those who barely eat or skip protein, the sedentary, and anyone losing weight very fast at high doses. If that's you, the preservation plan isn't optional — it's essential, and worth discussing with your clinician.",
    blocks: [
      {
        type: "p",
        text: "Average trial figures hide a wide range. Some people lose very little muscle; others lose a worrying amount. Knowing where you sit helps you decide how hard to push the preservation plan. The risk factors that matter most:",
      },
      {
        type: "ul",
        items: [
          "**Older adults (roughly 60+).** You're already losing muscle to age, your body is less efficient at building it, and the consequences of losing more — frailty, falls — are more serious. Most GLP-1 trials enrolled younger and middle-aged people, so the muscle data in older adults is thinner and the caution is greater.",
          "**Low starting muscle mass.** If you begin with relatively little muscle (common in people who've been sedentary or have dieted repeatedly), you have less to spare and a bigger proportional risk.",
          "**Very low food intake.** The more the appetite suppression drives your calories down toward very low levels, the more muscle you'll lose — a steep deficit with little protein is the worst combination.",
          "**Chronically low protein intake.** If you were already not eating much protein, the drug's appetite suppression can push it dangerously low.",
          "**Sedentary lifestyle.** No resistance training means no strong signal to keep muscle; the body sheds what it isn't being asked to use.",
          "**Very rapid or very large weight loss, often at higher doses.** Faster loss and the top doses tend to mean more total tissue lost — speed is a risk factor you can partly control by not rushing dose increases.",
          "**Women**, in some analyses, lose a somewhat larger *proportion* of muscle than men — worth extra attention to protein and lifting, not a reason for alarm.",
        ],
      },
      {
        type: "p",
        text: "If several of these apply to you — say, you're 65, haven't lifted in years, and your appetite has fallen off a cliff — the preservation plan below is not a nice-to-have, it's the core of doing this safely. It's also a specific thing to raise with your prescriber: a good clinician will support a slightly slower titration, a protein target, and a referral or plan for resistance training. For a sense of how the broader side-effect and dosing picture fits together, see our guides on [GLP-1 side effects](/guides/glp1-side-effects-and-how-to-manage-them) and the [results timeline](/guides/glp1-results-timeline).",
      },
    ],
  },

  {
    id: "protein",
    heading: "Lever #1: eat enough protein",
    summary:
      "Protein is the single most important dietary lever for keeping muscle in a deficit. Aim for roughly 1.2–1.6 g of protein per kg of body weight per day (higher for older or at-risk adults), spread across meals, and eat it first — because the drug's appetite suppression makes hitting the target the hard part.",
    blocks: [
      {
        type: "p",
        text: "If you do only one thing from this guide, make it this. Protein is the nutrient that tells your body to preserve and build muscle rather than break it down for fuel. In a calorie deficit, adequate protein is what shifts the tissue you lose toward fat and away from muscle. And on a GLP-1, hitting your protein target takes genuine effort, because the drug has quietly removed most of your appetite.",
      },
      {
        type: "h3",
        text: "How much protein?",
      },
      {
        type: "p",
        text: "The weight-loss and sarcopenia literature converges on a target well above the old minimum. Reviews of muscle preservation during GLP-1 therapy recommend roughly **1.2 to 1.6 grams of protein per kilogram of body weight per day**, with **up to about 2.0 g/kg** in higher-risk situations, and older adults generally needing the higher end. For reference, that's well above the basic RDA of 0.8 g/kg, which was never meant to optimize muscle, let alone during rapid weight loss.",
      },
      {
        type: "p",
        text: "In practical terms: a person weighing about 80 kg (roughly 175 lb) targeting 1.4 g/kg would aim for around **110 grams of protein a day**. If you prefer pounds, a rough rule many clinicians use is to aim for a number of grams of protein close to your target body weight in pounds, or at least your lean body weight. Your own target is worth confirming with your clinician or a dietitian, especially if you have kidney disease, where protein needs are different and must be individualized.",
      },
      {
        type: "statgrid",
        stats: [
          { value: "1.2–1.6", label: "Grams of protein per kg of body weight per day — the general target to preserve muscle" },
          { value: "up to 2.0", label: "g/kg/day in higher-risk cases (older adults, very low intake, rapid loss)" },
          { value: "~0.8", label: "g/kg — the basic RDA, which is NOT enough to optimize muscle in a deficit" },
          { value: "Every meal", label: "Spread protein across the day — the body uses it better than one big dose" },
        ],
      },
      {
        type: "h3",
        text: "Spread it across the day",
      },
      {
        type: "p",
        text: "Your body builds muscle best when protein arrives in meaningful amounts across the day rather than all at once. Aim to include a solid serving of protein at each meal — many people target somewhere around 25–40 grams per meal — rather than eating almost none until a big dinner. Spreading it also makes the total easier to hit when each meal is smaller than it used to be.",
      },
      {
        type: "h3",
        text: "How to actually hit it when you're not hungry",
      },
      {
        type: "p",
        text: "This is the real challenge, so here are tactics that work when the appetite is gone:",
      },
      {
        type: "ul",
        items: [
          "**Eat protein first.** Start every meal with the protein — meat, fish, eggs, dairy, tofu, legumes — before you fill up. Whatever you eat first is what actually gets eaten when fullness hits early.",
          "**Lean on easy, dense sources.** Greek yogurt, cottage cheese, eggs, deli-sliced lean meats, canned tuna or salmon, edamame, and protein-fortified foods pack a lot of protein into a small, low-effort volume.",
          "**Use a protein shake when food feels like too much.** A whey or plant protein shake can deliver 25–30+ grams when you genuinely can't face a meal — liquids often go down easier than solids on a GLP-1.",
          "**Make protein the biggest part of a smaller plate.** Since your total intake is lower, protein should take up a *bigger share* of what you do eat than it used to.",
          "**Front-load the day if evenings are rough.** If nausea or fullness is worse later, get more of your protein in earlier when you can.",
          "**Track it for a week.** Most people dramatically overestimate their protein intake. A few days of logging shows you the real gap and where to close it.",
        ],
      },
      {
        type: "h3",
        text: "A note on protein quality",
      },
      {
        type: "p",
        text: "Total protein and spreading it across the day matter most, but quality is a reasonable tiebreaker. Animal proteins (meat, fish, eggs, dairy) and soy are 'complete' — they contain all the essential amino acids in good ratios, including plenty of **leucine**, the amino acid that most strongly triggers muscle protein synthesis. Plant proteins work well too; you just get the full amino-acid spread by eating a variety (legumes, soy, grains, nuts) across the day, and you may aim a little higher on total grams since some plant proteins are less efficiently used. If you rely heavily on plant sources, a pea- or soy-protein powder is an easy way to top up. None of this should overcomplicate things — hit your total, spread it out, include some complete sources, and you've covered quality without counting amino acids.",
      },
      {
        type: "callout",
        title: "The non-negotiable",
        text: "On a GLP-1, protein is not something that takes care of itself — the drug makes it easy to eat far too little. Treat your daily protein target as the one dietary rule you don't break, and you've won most of the muscle-preservation battle.",
      },
    ],
  },

  {
    id: "sample-day",
    heading: "What a high-protein day actually looks like",
    summary:
      "Hitting 110–130 g of protein a day with a suppressed appetite is doable once you see it laid out: anchor each meal and snack with a dense protein source, use a shake as a backstop, and front-load earlier in the day. Here's a realistic template you can adapt.",
    blocks: [
      {
        type: "p",
        text: "Protein targets are abstract until you see them on a plate, and 'eat more protein' is useless advice when the drug has erased your appetite. So here's a concrete, adaptable day that lands around 120 grams of protein — a reasonable target for someone around 80 kg — built from ordinary foods and designed around smaller portions and early fullness.",
      },
      {
        type: "table",
        caption: "A sample ~120 g protein day on a GLP-1 (adapt to your target and tastes)",
        headers: ["When", "What", "Protein"],
        rows: [
          ["Breakfast", "3 eggs + a cup of Greek yogurt (or cottage cheese)", "~35 g"],
          ["Mid-morning", "Protein shake (whey or plant) with water or milk", "~25 g"],
          ["Lunch", "Palm-sized chicken breast, tuna, or tofu over greens/grains", "~30 g"],
          ["Snack", "Cheese stick + a handful of edamame, or jerky", "~15 g"],
          ["Dinner", "Smaller portion of fish/lean meat/legumes (protein eaten first)", "~20 g"],
          ["Daily total", "", "~125 g"],
        ],
      },
      {
        type: "p",
        text: "A few things to notice about why this works on a GLP-1, where a normal eating pattern would fall short:",
      },
      {
        type: "ul",
        items: [
          "**It front-loads protein.** Breakfast and a mid-morning shake bank ~60 g before noon, so a small, early-fullness dinner doesn't sink the day's total.",
          "**It leans on dense, low-volume sources.** Greek yogurt, cottage cheese, eggs, a shake and jerky deliver a lot of protein in a small amount of food — which is exactly what you need when you fill up fast.",
          "**The shake is the backstop.** On a rough day when solid food is unappealing, a second shake can replace a meal's protein without a fight.",
          "**Protein is eaten first** at each meal, so if you stop early, you stopped after the part that matters most for muscle.",
          "**It's flexible.** Swap in plant proteins (tofu, tempeh, legumes, soy milk, pea-protein powder) throughout — the target is total protein and spread, not any specific food.",
        ],
      },
      {
        type: "p",
        text: "If your target is higher — say you're older, at higher risk, or heavier — add a third shake or bump the portions; if lower, trim them. The template is the point: with a little planning, hitting a muscle-protective protein target is very doable even when you're barely hungry. And because you're eating less overall, you don't need to obsess over anything except protein and a reasonable amount of whole food around it.",
      },
      {
        type: "callout",
        title: "A quick gut check",
        text: "If you can't picture where today's protein came from, you probably didn't hit the target. Logging your intake for even three days turns 'I think I eat enough protein' into a real number — and almost everyone finds a gap to close.",
      },
    ],
  },

  {
    id: "resistance",
    heading: "Lever #2: do resistance training",
    summary:
      "Protein gives your body the material to keep muscle; resistance training gives it the reason. Lifting weights, using bands or doing bodyweight strength work 2–3 times a week is the most effective single activity for preserving lean mass during weight loss. Cardio is good for your heart but doesn't protect muscle the same way.",
    blocks: [
      {
        type: "p",
        text: "If protein is the raw material, resistance training is the signal. When you load your muscles — ask them to work against resistance — you tell your body that this tissue is needed and must be kept. Remove that signal, and the body happily sheds muscle it isn't using, especially in a deficit. Reviews of muscle preservation on GLP-1s consistently pair adequate protein with resistance exercise as the evidence-based core of the strategy, and dedicated trials are now testing exactly this combination.",
      },
      {
        type: "h3",
        text: "How much, and what kind?",
      },
      {
        type: "p",
        text: "You do not need to become a bodybuilder. The target that shows up across the research and guidelines is **resistance training 2 to 3 times a week**, working the major muscle groups. 'Resistance' can mean free weights, machines, resistance bands, or your own bodyweight — what matters is that the muscles are challenged and that you gradually make it harder over time (more weight, more reps, or harder variations). That progression is the key: muscles adapt to a challenge, so the challenge has to keep nudging upward.",
      },
      {
        type: "p",
        text: "A simple, effective starting framework:",
      },
      {
        type: "ul",
        items: [
          "**Cover the major movements:** a squat or leg-press pattern (legs), a push (push-ups, chest press, overhead press), a pull (rows, lat pulldowns), and a hinge (hip hinge, glute bridge, deadlift variation). Those few patterns cover most of your muscle.",
          "**2–3 sessions a week**, with rest days in between — muscle is built during recovery, not during the session.",
          "**2–4 sets of about 6–15 reps** per exercise is a sensible general range for preserving and building muscle; stop a rep or two short of failure.",
          "**Progress gradually.** When an exercise feels easy, add a little weight, a rep, or a harder variation. Progression over months is what actually preserves and builds muscle.",
          "**Start where you are.** If you've never lifted, bodyweight movements and bands at home are a perfectly good start — and far better than nothing. Consider a few sessions with a trainer or a reputable beginner program to learn form and stay safe.",
        ],
      },
      {
        type: "h3",
        text: "Why cardio isn't enough",
      },
      {
        type: "p",
        text: "Walking and other cardio are genuinely good for you — heart health, mood, calorie burn, and keeping your overall activity up (more on that next). But cardio does not provide the muscle-loading signal that preserves lean mass the way resistance training does. You can walk 10,000 steps a day and still lose more muscle than necessary if you never challenge your muscles against resistance. Do both if you can, but if you have to prioritize one activity for *muscle*, it's resistance training, full stop.",
      },
      {
        type: "h3",
        text: "Recovery and consistency beat intensity",
      },
      {
        type: "p",
        text: "On a GLP-1 you're training in a calorie deficit with less fuel than usual, so recovery matters more and heroics matter less. Expect some muscle soreness when you start or progress — that's normal and fades as you adapt. But you don't need to leave every session destroyed; moderate, consistent effort over months preserves muscle far better than occasional brutal workouts you can't sustain. Give muscle groups a day or two to recover between sessions, make sure you're eating enough (not just enough protein, but enough total food to train), and if your energy is low during a dose increase, it's fine to dial back the load for a week and keep the habit going rather than skip. Consistency is the variable that actually determines whether you keep your muscle — a routine you do for a year beats a perfect program you quit in a month.",
      },
      {
        type: "callout",
        title: "Start early, while motivation is high",
        text: "Build the strength habit in the first weeks, when the scale is moving and you're motivated — so it's established and automatic by the time the novelty fades. The muscle you protect in months 1–6 is the muscle you keep.",
      },
    ],
  },

  {
    id: "beginner-routine",
    heading: "A simple strength routine to start with",
    summary:
      "You don't need a gym or a complicated program. Two full-body sessions a week covering a squat, a push, a pull and a hinge — with weights, bands or just bodyweight — is enough to protect muscle. Here's a concrete beginner plan you can run at home or in a gym.",
    blocks: [
      {
        type: "p",
        text: "If you've never lifted, the hardest part is starting, and complexity is the enemy. You do not need a bodybuilder's split or fancy equipment. A pair of adjustable dumbbells or a set of resistance bands at home is plenty to begin, and bodyweight alone works until you're ready to add load. Here's a full-body routine built around the four movement patterns that cover most of your muscle.",
      },
      {
        type: "table",
        caption: "Beginner full-body routine — 2–3× a week, with a rest day between",
        headers: ["Pattern", "Beginner option", "Sets × reps"],
        rows: [
          ["Squat (legs)", "Bodyweight squat, goblet squat, or sit-to-stand from a chair", "2–3 × 8–12"],
          ["Push (chest/shoulders)", "Incline or wall push-up, or dumbbell chest/overhead press", "2–3 × 8–12"],
          ["Pull (back)", "Resistance-band row, dumbbell row, or lat pulldown", "2–3 × 8–12"],
          ["Hinge (glutes/hamstrings)", "Glute bridge, hip hinge, or dumbbell Romanian deadlift", "2–3 × 8–12"],
          ["Core (optional)", "Plank, dead bug, or bird dog", "2–3 × 20–40s"],
        ],
      },
      {
        type: "p",
        text: "How to run it well:",
      },
      {
        type: "ul",
        items: [
          "**Do the whole list in one session**, 2–3 times a week, with at least a day of rest between sessions. The whole thing takes 30–45 minutes.",
          "**Leave 1–2 reps 'in the tank.'** You should finish each set feeling you could have done another rep or two — that's effective and sustainable, and far safer than grinding to failure as a beginner.",
          "**Progress every week or two.** When a set feels easy, add a little weight, an extra rep, or a harder variation (wall push-up → incline → floor). This gradual progression is what actually preserves and builds muscle — the body only keeps what it's challenged to keep.",
          "**Prioritize form over load**, especially on the hinge and squat. A few sessions with a trainer, or following a reputable beginner video program, pays off in safety and results.",
          "**Pair it with your protein.** Training without enough protein is half a plan; protein without training is the other half. Together they're the whole muscle-preservation strategy.",
        ],
      },
      {
        type: "p",
        text: "If you already train, keep doing what works — just make sure you're still progressing and not quietly cutting volume as your energy dips. If you have joint issues, heart concerns or haven't exercised in a long time, clear a new program with your clinician first, and consider starting with machines or bands, which are easier to control than free weights. The goal isn't to train like an athlete; it's to give your muscles a consistent reason to stick around while the fat comes off.",
      },
      {
        type: "callout",
        title: "Something beats nothing, by a lot",
        text: "Two short bodyweight sessions a week is not a compromise — it's most of the benefit. Don't let 'I don't have a gym' or 'I'm not a gym person' become the reason you skip the single most effective thing you can do for your muscle.",
      },
    ],
  },

  {
    id: "activity",
    heading: "Lever #3: don't fall into the activity trap",
    summary:
      "A quiet risk on GLP-1s is moving less overall — lower food intake can mean lower energy, and studies have found people often reduce their physical activity while losing weight on these drugs. Keeping your daily movement up (steps and general activity) protects muscle and metabolism alongside your formal workouts.",
    blocks: [
      {
        type: "p",
        text: "There's a subtle third lever that's easy to miss. Beyond structured exercise, your general daily movement — walking, taking the stairs, fidgeting, doing chores, standing more (what physiologists call NEAT, non-exercise activity thermogenesis) — makes up a big part of how much you move and how your body regulates muscle and metabolism.",
      },
      {
        type: "p",
        text: "The worrying pattern researchers have observed is that people often **move less** while losing weight on GLP-1 drugs, not more. It makes sense: eating much less can leave you with less energy, and when you're not hungry you're also sometimes not as driven to be active. But reduced movement is the opposite of what protects muscle — it removes the day-to-day loading and energy expenditure that help preserve lean mass and keep your metabolism up.",
      },
      {
        type: "p",
        text: "You have to be deliberate about this, because the drug won't nudge you toward it the way hunger and energy once did. Practical ways to keep your baseline movement up:",
      },
      {
        type: "ul",
        items: [
          "**Set a daily step target** and treat it like your protein target — a floor you don't drop below. Even a modest, consistent number beats a sporadic big day.",
          "**Walk after meals.** A short walk after eating helps blood sugar and keeps a movement habit anchored to your day.",
          "**Build movement into the day:** stairs over the elevator, parking farther away, standing or pacing on calls, walking meetings.",
          "**Watch your energy during titration.** If a dose increase tanks your energy, that's worth flagging to your clinician — and a reason to hold movement steady rather than let it slide.",
          "**Remember activity is a two-for-one:** it protects muscle *and* helps keep the weight off, since a more active body maintains a higher total energy expenditure.",
        ],
      },
      {
        type: "callout",
        title: "The quiet one",
        text: "Protein and lifting get the attention, but simply not letting your daily movement collapse is a real, underrated lever. If the drug makes you want to sit more, that's precisely when to make moving a deliberate habit.",
      },
    ],
  },

  {
    id: "other-levers",
    heading: "The other levers: deficit size, titration, sleep and more",
    summary:
      "Beyond protein, lifting and movement, a few more factors help: don't let your calories crash too low, don't rush dose increases (slower loss costs less muscle), prioritize sleep, and consider creatine. Crash-dieting on top of the drug is the fastest way to lose muscle you didn't need to.",
    blocks: [
      {
        type: "p",
        text: "Protein, resistance training and daily movement are the big three. A handful of secondary factors round out the plan and can make a real difference at the margins.",
      },
      {
        type: "h3",
        text: "Don't make the deficit bigger than it needs to be",
      },
      {
        type: "p",
        text: "The appetite suppression can push your intake to very low levels — sometimes dangerously low, a few hundred calories some days. A deeper deficit does not mean better results; past a point it just means more muscle loss, more fatigue, nutrient gaps and a higher chance of rebound. Eating *enough* to fuel your training and daily life, with protein protected, loses fat while sparing muscle better than near-starvation does. If you find you simply cannot eat a reasonable amount, that's a conversation with your clinician, not something to push through.",
      },
      {
        type: "h3",
        text: "Don't rush the dose",
      },
      {
        type: "p",
        text: "Faster, steeper weight loss tends to cost more muscle. The titration schedule exists to manage side effects, but it also paces the loss. If you're losing very fast, or a dose jump has your appetite and energy on the floor, there's no prize for rushing to the top dose — holding at a dose that's working, with steadier loss, is often better for body composition. Discuss pace with your prescriber; a good one will happily slow things down.",
      },
      {
        type: "h3",
        text: "Sleep, creatine and the basics",
      },
      {
        type: "ul",
        items: [
          "**Sleep.** Poor sleep worsens muscle loss and recovery and undermines appetite regulation. It's an unglamorous but real lever — aim to protect it.",
          "**Creatine.** Creatine monohydrate is one of the most-studied, safest supplements for supporting strength and muscle during training; many people on a muscle-preservation push find it a reasonable, low-cost addition (check with your clinician, especially with kidney concerns).",
          "**Don't layer a crash diet on top.** The single fastest way to lose muscle on a GLP-1 is to combine it with an aggressive crash diet and no training. The drug already creates the deficit; your job is to make that deficit *high-quality* — enough protein, enough food to train, and resistance work — not to starve harder.",
          "**Micronutrients.** Eating much less can mean gaps in vitamins and minerals; a sensible, protein-forward diet (and, if needed, a basic supplement your clinician approves) supports overall health and recovery.",
        ],
      },
      {
        type: "p",
        text: "For more on eating well on these drugs generally, our [side-effects guide](/guides/glp1-side-effects-and-how-to-manage-them) covers the GI realities that shape what you can comfortably eat, and the [results timeline](/guides/glp1-results-timeline) sets expectations for how loss unfolds.",
      },
    ],
  },

  {
    id: "preservation-drugs",
    heading: "The new frontier: muscle-preservation drugs (2026)",
    summary:
      "A new class of drugs is being tested specifically to prevent muscle loss on GLP-1s — mostly by blocking myostatin/activin, the body's 'brakes' on muscle. In 2026, bimagrumab, trevogrumab, apitegromab and enobosarm all showed in phase 2 trials that they can preserve lean mass alongside GLP-1 weight loss. But none is FDA-approved for this, and you should not seek them out.",
    blocks: [
      {
        type: "callout",
        title: "Read this first",
        text: "Every drug in this section is INVESTIGATIONAL — still in clinical trials, not FDA-approved for preventing muscle loss, and not something you can or should obtain. This is a look at where the science is heading, not a menu of treatments. The proven plan today is protein, resistance training and movement.",
      },
      {
        type: "p",
        text: "The muscle-loss concern has become so prominent — and the GLP-1 market so large — that drug companies are racing to build medicines that let you keep the fat loss while sparing the muscle. Most of them work on the same biological target: **myostatin** (and the related signal **activin**), which are the body's natural 'brakes' on muscle growth. Block those brakes, the thinking goes, and muscle is preserved or even built while a GLP-1 strips away fat. In 2026, the first serious human results arrived, and they are genuinely striking.",
      },
      {
        type: "h3",
        text: "Why myostatin?",
      },
      {
        type: "p",
        text: "Myostatin is a protein your body makes to limit how much muscle you build — an evolutionary governor that stops muscle growing without end. People and animals with naturally low myostatin are famously, visibly muscular. Drugmakers reasoned that if you temporarily release that brake during GLP-1 weight loss, you could offset the muscle the deficit would otherwise cost. Activin A works alongside myostatin, so some of these drugs block one, some the other, and some both. A different approach, SARMs (selective androgen receptor modulators), stimulates muscle through the androgen-receptor pathway instead. The fact that several distinct mechanisms all preserved lean mass in 2026 trials is itself encouraging — it suggests the effect is real and robust, not a fluke of one molecule.",
      },
      {
        type: "h3",
        text: "Bimagrumab (BELIEVE trial)",
      },
      {
        type: "p",
        text: "Bimagrumab is an antibody that blocks the activin type II receptor, which sits in the myostatin pathway. In the **phase 2 BELIEVE trial** (507 adults with obesity), published in a major journal in 2026, adding bimagrumab to semaglutide produced a least-squares mean weight loss of about **22.1% at 72 weeks** — versus about 15.7% for semaglutide alone — and the quality of that loss was the headline. About **92% of the weight lost on the combination was fat**, compared with about 76% on semaglutide alone. On lean mass, semaglutide alone cut it by about **7.4%**; the combination held lean-mass loss to about **2.9%**; and bimagrumab on its own actually *increased* lean mass by about 2.5%. A follow-on trial pairing it with tirzepatide was reported to have results expected later in 2026.",
      },
      {
        type: "h3",
        text: "Trevogrumab (COURAGE trial) — the 2026 headline",
      },
      {
        type: "p",
        text: "The most recent and most-discussed result, presented at a major diabetes meeting in **October 2026**, is for **trevogrumab**, an antibody that blocks myostatin directly. In the **phase 2 COURAGE trial**, adding trevogrumab to semaglutide **preserved lean mass and sharply reduced muscle loss** compared with semaglutide alone — reports described it as preventing a large share (on the order of 70%) of the thigh-muscle loss seen on imaging, while people still lost substantial fat. Notably, there were also signals that it helped people *rebuild* muscle after coming off the GLP-1, which speaks to the 'what happens when you stop' problem. The full results were reported as in press at a leading journal.",
      },
      {
        type: "h3",
        text: "Apitegromab and enobosarm",
      },
      {
        type: "p",
        text: "Two other agents rounded out a busy 2026. **Apitegromab**, another myostatin-blocking antibody, when added to tirzepatide in a phase 2 trial, preserved substantially more lean mass than placebo (roughly half again as much preservation in the reported analysis). **Enobosarm**, a selective androgen receptor modulator (SARM) taking a different mechanistic route, was reported to cut lean-body-mass loss by around 71% when combined with semaglutide in its phase 2 program. Different mechanisms, same encouraging direction: it appears genuinely possible to decouple fat loss from muscle loss pharmacologically.",
      },
      {
        type: "h3",
        text: "What this means for you today",
      },
      {
        type: "p",
        text: "The honest takeaways: (1) This is one of the most promising areas in obesity medicine, and within a few years a muscle-preservation add-on may well be a standard option alongside GLP-1 therapy. (2) The data so far is **phase 2** — promising but not yet the large, long trials needed for approval, and questions remain about long-term safety, who truly needs it, and whether preserving scan-measured lean mass translates into better strength and function. (3) Crucially, **none of these is approved or available for muscle preservation**, and anything marketed to you *today* as a 'muscle-sparing GLP-1 stack' — particularly SARMs sold online — is unapproved and potentially unsafe. The proven, available plan is still protein, resistance training and movement. Keep an eye on this space; don't try to self-prescribe it. We'll update this guide as these drugs move toward approval — and you can follow the broader pipeline in our [GLP-1 pills guide](/glp1-pills), which covers the next wave of weight-loss medicines.",
      },
    ],
  },

  {
    id: "future-outlook",
    heading: "Where this is heading: the 'quality weight loss' era",
    summary:
      "The whole field is shifting from 'how much weight can we take off?' to 'how good is the weight loss?' — meaning mostly fat, with muscle, bone and strength protected. Between the preservation-drug pipeline and better nutrition-and-exercise guidance, the muscle problem is being actively solved. For now, you are the muscle-preservation technology.",
    blocks: [
      {
        type: "p",
        text: "It's worth zooming out, because the muscle conversation is a sign of how fast this field is maturing. The first era of GLP-1 medicine was about proving you could take off dramatic amounts of weight with a drug. The emerging era is about the *quality* of that weight loss — making sure it's mostly fat, that muscle and bone are protected, and that people end up genuinely healthier and stronger, not just lighter. 'Quality weight loss' has become a real phrase in the research, and the muscle question sits right at its center.",
      },
      {
        type: "p",
        text: "Several forces are converging to solve the muscle problem:",
      },
      {
        type: "ul",
        items: [
          "**The preservation-drug pipeline.** As covered above, multiple investigational agents have shown in phase 2 that muscle loss can be sharply reduced or reversed alongside GLP-1 weight loss. If the larger trials hold up, a muscle-sparing add-on could become a standard option within a few years — potentially most valuable for older and higher-risk patients.",
          "**Better combination drugs.** Some next-generation obesity drugs are being designed to produce higher-quality loss from the start, and the race is on to pair fat loss with muscle preservation in a single regimen.",
          "**Clearer nutrition and exercise guidance.** Dedicated trials of high-protein diets plus resistance training in GLP-1 users are running now, which should turn today's reasonable-but-preliminary targets into firmer, evidence-based recommendations.",
          "**Routine body-composition tracking.** As scans get cheaper and more common, 'quality of weight loss' can be measured and managed rather than guessed at — shifting the conversation from the scale to what you're actually losing.",
        ],
      },
      {
        type: "p",
        text: "The practical implication for you today is a hopeful one: the muscle problem is not an unsolvable flaw in these drugs — it's a known, actively-addressed limitation, and the tools to manage it already exist in the form of protein and training, with better pharmacological tools coming. In a real sense, until those drugs arrive, **you are the muscle-preservation technology**: the protein you eat and the training you do are exactly what the new medicines are trying to replicate. That's empowering, not discouraging — the most effective intervention available right now is one you fully control.",
      },
      {
        type: "callout",
        title: "The optimistic read",
        text: "A few years from now, 'keep your muscle on a GLP-1' may be as routine as 'take it with the titration schedule.' Until then, the proven plan — protein, resistance training, movement — already captures most of the benefit the new drugs are chasing.",
      },
    ],
  },

  {
    id: "stopping",
    heading: "Muscle, stopping the drug, and weight regain",
    summary:
      "If you stop a GLP-1, you typically regain much of the weight — and the regain is mostly fat, while lost muscle doesn't automatically come back. That means losing muscle now can leave you with a worse body composition after a weight cycle, which is the strongest practical reason to protect muscle from day one.",
    blocks: [
      {
        type: "p",
        text: "This is the part that ties muscle preservation to your long-term outcome, and it's where the stakes are highest. GLP-1 therapy is generally long-term: when people stop, they tend to regain a large share of the weight. In the semaglutide trial extension, participants regained about **two-thirds of their lost weight within a year** of stopping. (For the full picture on maintenance and regain, see our [complete guide](/glp1-weight-loss-guide).)",
      },
      {
        type: "p",
        text: "Here's the body-composition trap. When you lose weight, you lose fat *and* some muscle. When you regain weight after stopping, you regain **mostly fat** — your body does not automatically rebuild the muscle you lost just because the pounds come back. So a weight-loss-then-regain cycle can leave you with **more fat and less muscle than you started with** — a worse metabolic position, even at the same body weight. Repeat that cycle a few times and the drift is meaningful.",
      },
      {
        type: "p",
        text: "This flips muscle preservation from a nice-to-have into a long-term insurance policy:",
      },
      {
        type: "ul",
        items: [
          "**Protecting muscle on the way down** means that if you ever do regain some weight, you're regaining onto a better-preserved frame — more muscle, higher metabolism, better odds of re-losing it.",
          "**Keeping the habits** — the protein and the strength training — is also what gives any future taper its best chance, because habits, not the drug, are what hold a result.",
          "**If and when you consider stopping,** do it with your clinician and a maintenance plan, not abruptly — and keep training through the transition, since that's exactly when muscle is most at risk and most worth defending.",
          "**The emerging drug angle:** part of why the muscle-preservation drugs are exciting is that early signals suggest they may help rebuild muscle after a GLP-1 is stopped — potentially softening this exact trap. But that's future tense; today the defense is your habits.",
        ],
      },
      {
        type: "callout",
        title: "The strongest reason of all",
        text: "You might not care about a scan number. But almost everyone cares about not ending up fatter and weaker after all this effort. Protecting muscle now is the single best hedge against that outcome — it's long-term results, not vanity.",
      },
    ],
  },

  {
    id: "myths",
    heading: "Muscle-loss myths and honest caveats",
    summary:
      "The viral version of this topic is full of half-truths: that the drugs 'eat your muscle,' that any lean-mass loss is dangerous, that cardio or protein alone is enough, or that online 'muscle-sparing' stacks are the answer. Here's what's real and what isn't.",
    blocks: [
      {
        type: "p",
        text: "This topic attracts more misinformation than almost any other corner of the GLP-1 conversation, partly because fear drives clicks and partly because supplement and 'peptide' sellers have an interest in hyping it. Here are the myths worth correcting.",
      },
      {
        type: "h3",
        text: "Myth: the drug 'eats' or targets your muscle",
      },
      {
        type: "p",
        text: "There's no toxic effect on muscle. The muscle loss comes from the calorie deficit, low protein intake and reduced activity — the same factors that cause muscle loss in any weight loss. That's why it's so controllable: fix the inputs and you fix most of the problem.",
      },
      {
        type: "h3",
        text: "Myth: losing any lean mass is dangerous",
      },
      {
        type: "p",
        text: "Some lean-mass loss is normal and even expected when you get smaller — part of what a scan calls 'lean mass' is water and the extra structural tissue a larger body needed. The goal isn't zero lean-mass loss; it's keeping your *functional strength* and ending up with a better body-fat percentage, both of which are very achievable.",
      },
      {
        type: "h3",
        text: "Myth: if I do cardio (or just eat protein), I'm covered",
      },
      {
        type: "p",
        text: "Cardio is great for your health but doesn't send the muscle-loading signal that preserves lean mass. And protein without resistance training gives your body the raw material but not the reason to keep muscle. Neither one alone does the job — it's the *combination* of adequate protein and resistance training that works.",
      },
      {
        type: "h3",
        text: "Myth: 'muscle-sparing' SARMs and peptides sold online are a smart add-on",
      },
      {
        type: "p",
        text: "This is the dangerous one. The muscle-preservation drugs generating real excitement (bimagrumab, trevogrumab and the rest) are investigational and only available in trials. The SARMs, 'research peptides' and muscle-building compounds sold online without a prescription are unapproved, unregulated, potentially contaminated, and carry real risks — they are not a shortcut to keeping muscle. Anything marketed to you today as a muscle-sparing GLP-1 stack should be treated as a red flag, not a strategy.",
      },
      {
        type: "h3",
        text: "Honest caveats about the evidence",
      },
      {
        type: "p",
        text: "To be fair in both directions: the body-composition data has real limits. Many trials used DXA in subgroups rather than everyone, DXA and especially BIA are imperfect at separating muscle from other lean tissue, and most trials enrolled younger and middle-aged adults — so the muscle picture in older, higher-risk people (where it matters most) is less certain. The protein and exercise targets come largely from reviews and the broader sarcopenia literature rather than one definitive GLP-1 trial, though dedicated trials are now running. None of this changes the practical advice — protein and lifting are low-risk and clearly helpful — but it's worth knowing the science is still filling in, not fully settled.",
      },
      {
        type: "callout",
        title: "The honest summary",
        text: "The real risk isn't that these drugs secretly waste your muscle — it's that the appetite suppression makes it easy to under-eat protein and stop training. Manage those two things and the myth-level fears mostly evaporate.",
      },
    ],
  },

  {
    id: "monitoring",
    heading: "How to track whether you're keeping muscle",
    summary:
      "The scale and a tape measure can't tell muscle from fat. Better signals are a body-composition scan (DXA is the gold standard; smart scales and BIA are rougher), simple strength checks (are your lifts holding or climbing?), and how you look and function. Track trends, not single readings.",
    blocks: [
      {
        type: "p",
        text: "You can't manage what you can't see, and bodyweight alone is blind to the fat-versus-muscle question that this whole guide is about. A few ways to actually track body composition, from most to least precise:",
      },
      {
        type: "ul",
        items: [
          "**DXA scan.** The gold standard used in the trials — a quick, low-radiation scan that breaks your body into fat, lean mass and bone. A scan at the start and again after a few months shows exactly how much of your loss is fat versus lean. Available at many clinics and labs for a modest cost; worth it if you're serious or higher-risk.",
          "**Bioelectrical impedance (BIA).** The technology in smart scales and handheld/clinic devices. Less precise than DXA and sensitive to hydration, but useful for tracking a *trend* over time if you measure under consistent conditions (same time of day, similar hydration).",
          "**Strength as a proxy.** This is the most practical one and needs no equipment beyond your workouts. If your lifts are holding steady or slowly climbing as you lose weight, you're almost certainly preserving muscle well. A sudden drop in strength is a red flag to shore up protein, training and food intake.",
          "**Simple functional checks.** Grip strength (handgrip dynamometers are cheap), how many push-ups or sit-to-stands you can do, how you handle stairs and daily tasks — all are reasonable at-home signals of whether function is holding.",
          "**The mirror and the tape, read correctly.** Losing inches off your waist while your strength holds is the picture of fat loss with muscle preserved — a better signal together than either alone.",
        ],
      },
      {
        type: "p",
        text: "Whatever you use, track **trends over weeks and months**, not single readings — all of these methods have day-to-day noise. And remember the goal: you *want* to see fat mass and waist falling while lean mass and strength hold roughly steady. That's a successful GLP-1 outcome, and it's very achievable.",
      },
    ],
  },

  {
    id: "plan",
    heading: "Your muscle-preservation plan, on one page",
    summary:
      "Hit your protein target every day, lift 2–3 times a week and progress it, keep your daily movement up, don't crash your calories or rush your dose, prioritize sleep, and track fat-vs-muscle by trends. Do these and you'll keep the large majority of your muscle while the fat comes off.",
    blocks: [
      {
        type: "p",
        text: "Everything above distilled into a checklist you can actually follow. If you do these, you've done the things that matter — in roughly their order of importance:",
      },
      {
        type: "ol",
        items: [
          "**Protein, every single day.** Target about 1.2–1.6 g/kg of body weight (higher if you're older or higher-risk), spread across meals, protein eaten first. This is the non-negotiable.",
          "**Resistance training, 2–3× a week.** Cover legs, push, pull and hinge; progress gradually over time. Start with bodyweight or bands if you're new.",
          "**Keep moving.** Don't let your daily steps and general activity collapse — set a floor and protect it, especially if the drug saps your energy.",
          "**Eat enough; don't crash.** Fuel your training and life; a deeper deficit just costs more muscle. If you can't eat a reasonable amount, tell your clinician.",
          "**Don't rush the dose.** Steadier loss is kinder to muscle than a sprint to the top dose. Pace it with your prescriber.",
          "**Sleep, and consider creatine.** Protect sleep; creatine monohydrate is a reasonable, well-studied add-on (clear it with your clinician).",
          "**Track fat vs muscle by trends** — a start/follow-up DXA if you can, plus whether your strength is holding. Adjust protein, food and training if strength drops.",
          "**Ignore the 'muscle-sparing stacks' sold online.** The preservation drugs are investigational; SARMs and peptides sold without a prescription are unapproved and risky.",
        ],
      },
      {
        type: "callout",
        title: "The realistic promise",
        text: "You will probably lose a little muscle — that's normal for any large weight loss. But do the list above and you'll keep the large majority of it, end up leaner and stronger, and give yourself the best shot at keeping the result. That's a win, not a compromise.",
      },
    ],
    readMore: {
      href: "/best-glp1-providers",
      label: "Compare the GLP-1 programs we rate highest",
    },
  },

  {
    id: "getting-started",
    heading: "Doing this right from the start",
    summary:
      "Muscle preservation isn't a reason to avoid GLP-1 treatment — it's part of doing it well. If you qualify (generally a BMI of 30+, or 27+ with a weight-related condition), use a legitimate prescriber, start the protein-and-lifting habits from week one, and treat muscle as part of the plan, not an afterthought.",
    blocks: [
      {
        type: "p",
        text: "Let's close where it matters most: muscle-loss fear should change *how* you use a GLP-1, not *whether* you do. For people who qualify, these drugs are among the most effective treatments in medicine for obesity and its many downstream risks, and the muscle concern is a manageable side effect, not a dealbreaker.",
      },
      {
        type: "p",
        text: "Eligibility is the standard GLP-1 picture: generally a **BMI of 30 or higher**, or **27 or higher with a weight-related condition** such as high blood pressure, high cholesterol, type 2 diabetes or sleep apnea, confirmed by a clinician who screens for the contraindications (a personal or family history of medullary thyroid cancer or MEN 2, among others). If that's you and treatment is recommended, the move is to build muscle preservation in from day one rather than bolt it on after you've already lost a chunk of lean mass.",
      },
      {
        type: "ol",
        items: [
          "**Raise muscle with your prescriber upfront.** Ask about a protein target, a reasonable titration pace, and support for resistance training — a good clinician treats this as part of the plan.",
          "**Start the habits in week one**, at the low starter dose, before much weight has moved — protein locked in, a simple strength routine begun, a step floor set.",
          "**Use a legitimate program.** Whether you want branded or compounded, an injection or one of the new [pills](/glp1-pills), insist on a real medical review and a licensed pharmacy. Compare the options on our [best GLP-1 providers](/best-glp1-providers) page, or take the [2-minute match quiz](/find-your-match).",
          "**Reassess as you go.** Track fat-vs-muscle, keep protein and training steady through dose increases, and adjust if strength slips.",
        ],
      },
      {
        type: "p",
        text: "Do it this way and you get the best of both: the powerful fat loss these drugs are famous for, and the muscle, strength and metabolic health that make the result worth having — and worth keeping.",
      },
    ],
  },
];

export const MUSCLE_FAQS: { q: string; a: string }[] = [
  {
    q: "Does Ozempic (or Wegovy/Zepbound) cause muscle loss?",
    a: "Yes, but mostly it causes fat loss. Like any large weight loss, GLP-1 drugs such as semaglutide (Ozempic, Wegovy) and tirzepatide (Zepbound, Mounjaro) cost you some lean mass along with the fat — in the STEP 1 scans, fat mass fell about 19% while lean mass fell about 10%, so body composition actually improved. The muscle loss is real but modest, broadly the same as diet-induced weight loss, and largely preventable with protein and resistance training.",
  },
  {
    q: "How much muscle do you lose on GLP-1 medications?",
    a: "Across 2026 analyses, roughly a quarter to a third of the total weight lost on GLP-1 drugs is lean mass, with the rest being fat — about the same proportion as diet-only weight loss. In real-world settings where people eat enough protein and do resistance training, the muscle loss can be considerably smaller. It is not a fixed number; your habits strongly influence it.",
  },
  {
    q: "Is muscle loss on GLP-1s worse than losing weight by dieting?",
    a: "No. The best 2026 evidence finds the proportion of weight lost as lean mass on GLP-1 drugs is broadly comparable to diet-induced weight loss — it's a consequence of losing weight, not a unique drug effect. It gets more attention mainly because these drugs produce much more weight loss, so the absolute amount of muscle lost is larger even when the percentage is the same.",
  },
  {
    q: "How do I prevent muscle loss on a GLP-1?",
    a: "The two biggest levers are protein and resistance training. Aim for roughly 1.2–1.6 g of protein per kg of body weight per day (higher for older or at-risk adults), spread across meals, and do resistance training 2–3 times a week, progressing it over time. Also keep your daily movement up, don't crash your calories too low, don't rush dose increases, and prioritize sleep. These steps let you keep the large majority of your muscle.",
  },
  {
    q: "How much protein should I eat on Ozempic or Zepbound?",
    a: "Muscle-preservation guidance converges on roughly 1.2–1.6 grams of protein per kilogram of body weight per day, with up to about 2.0 g/kg in higher-risk situations and older adults often needing the higher end — well above the basic 0.8 g/kg RDA. Spread it across meals (many people aim for about 25–40 g per meal) and eat protein first, since the drug's appetite suppression makes hitting the target the hard part. Confirm your target with your clinician, especially if you have kidney disease.",
  },
  {
    q: "Does tirzepatide (Zepbound/Mounjaro) cause less muscle loss than semaglutide?",
    a: "In pooled 2026 analyses the proportion of weight lost as lean mass looked somewhat lower for tirzepatide than semaglutide, but they fall in the same general range and this isn't a clean head-to-head comparison. Tirzepatide does produce more total weight loss on average, so the practical advice — protein and resistance training — is identical for both.",
  },
  {
    q: "What is 'Ozempic face' — is it muscle loss?",
    a: "No, 'Ozempic face' is mainly about fat loss, not muscle. Losing weight quickly, including the fat pads in the face, can leave features looking hollow or skin looser, especially in older or already lean-faced people. It's a cosmetic consequence of fast fat loss that tends to settle as weight stabilizes, and losing weight more gradually while staying well-nourished helps. It's a separate issue from skeletal-muscle loss.",
  },
  {
    q: "Will resistance training alone stop muscle loss on a GLP-1?",
    a: "Resistance training is the most important activity for preserving muscle, but it works best paired with adequate protein — the training provides the signal to keep muscle, and protein provides the raw material. Do both. Cardio is good for your health but doesn't protect muscle the same way resistance training does.",
  },
  {
    q: "Are there drugs that prevent muscle loss on GLP-1s?",
    a: "Several are in clinical trials — bimagrumab, trevogrumab, apitegromab and enobosarm all showed in 2026 phase 2 studies that they can preserve lean mass alongside GLP-1 weight loss, mostly by blocking the myostatin/activin pathway. But none is FDA-approved for muscle preservation, none is available for this use, and anything sold online as a 'muscle-sparing stack' (such as SARMs) is unapproved and potentially unsafe. The proven approach today is protein, resistance training and movement.",
  },
  {
    q: "Should I worry about muscle loss if I'm older?",
    a: "Older adults are the highest-risk group, because you're already losing muscle to age and the consequences (frailty, falls) are more serious. That's not a reason to avoid treatment if you qualify — it's a reason to be especially diligent about protein (often the higher end of the range) and resistance training, and to discuss a careful titration pace with your clinician.",
  },
  {
    q: "Do you regain the muscle if you stop the GLP-1?",
    a: "Not automatically. When people stop a GLP-1 they tend to regain much of the weight — about two-thirds within a year in the semaglutide trial extension — and the regain is mostly fat, not muscle. So losing muscle now can leave you with a worse body composition after a weight cycle, which is the strongest practical reason to protect muscle from the start and keep training through any transition off the drug.",
  },
  {
    q: "Can I build muscle while on a GLP-1?",
    a: "It's harder to build significant new muscle while in a calorie deficit, but many people — especially those new to lifting — can build some muscle while losing fat, and almost everyone can get stronger. Even if you only preserve the muscle you have while the fat comes off, that's a successful outcome. Adequate protein and progressive resistance training are what make it possible.",
  },
  {
    q: "Does creatine help preserve muscle on a GLP-1?",
    a: "Creatine monohydrate is one of the most-studied, safest supplements for supporting strength and muscle during resistance training, so it's a reasonable, low-cost add-on for someone focused on muscle preservation. It supports your training rather than replacing protein or lifting. Check with your clinician first, particularly if you have kidney concerns.",
  },
  {
    q: "How do I know if I'm losing muscle or fat?",
    a: "The scale can't tell the difference. A DXA body-composition scan at the start and after a few months is the gold standard; smart scales and BIA devices are rougher but useful for trends. The most practical at-home signal is your strength: if your lifts are holding or climbing as you lose weight, you're preserving muscle well. Losing inches off your waist while strength holds is the picture you want.",
  },
  {
    q: "Is muscle loss a reason not to take a GLP-1?",
    a: "For most people who qualify, no. These drugs are highly effective for obesity and its health risks, and muscle loss is a manageable side effect, not a dealbreaker — it's broadly the same as any large weight loss and largely preventable with protein and training. Muscle-loss fear should change how you use a GLP-1 (do it well), not whether you do.",
  },
  {
    q: "What protein sources are best on a GLP-1 when I'm not hungry?",
    a: "Dense, low-volume sources are your friend when you fill up fast: Greek yogurt, cottage cheese, eggs, lean deli meats, canned tuna or salmon, edamame, tofu and tempeh, and protein shakes. A whey or plant protein shake is the best backstop for days when solid food feels like too much. Aim to eat protein first at each meal and spread it across the day, and lean on a couple of shakes if you're struggling to hit your target.",
  },
  {
    q: "How soon should I start lifting and tracking protein after starting a GLP-1?",
    a: "From week one, at the low starter dose, before much weight has moved. Muscle is lost throughout weight loss, so the habits that protect it should be in place from the start rather than added after you've already shed lean mass. Starting early also means the routine is established and automatic by the time the novelty fades and most of your weight loss is happening (months 2–9).",
  },
  {
    q: "Do I need a DXA scan, or is a smart scale enough?",
    a: "A DXA scan at the start and after a few months is the gold standard and worth it if you're serious or higher-risk, but it's optional. Smart scales and BIA devices are less precise and sensitive to hydration, but useful for tracking a trend under consistent conditions. The most practical no-cost signal is your strength: if your lifts are holding or climbing as you lose weight, you're preserving muscle well.",
  },
  {
    q: "Is 'Ozempic muscle loss' the same for Mounjaro, Wegovy and the new pills?",
    a: "The principle is the same across all GLP-1 (and GLP-1/GIP) medications — semaglutide (Ozempic, Wegovy), tirzepatide (Mounjaro, Zepbound) and the newer oral options all cause some lean-mass loss as part of large weight loss, driven by the deficit, low protein and low activity. The prevention plan is identical: protein, resistance training and movement. More weight loss generally means more total tissue lost, so the stronger the drug, the more the habits matter.",
  },
];

export const MUSCLE_HOWTO = {
  name: "How to preserve muscle while losing weight on a GLP-1",
  steps: [
    {
      name: "Hit a protein target every day",
      text: "Aim for roughly 1.2–1.6 g of protein per kg of body weight per day (higher if older or at-risk), spread across meals and eaten first, since the drug's appetite suppression makes it easy to under-eat protein.",
    },
    {
      name: "Do resistance training 2–3 times a week",
      text: "Train the major muscle groups (legs, push, pull, hinge) with weights, bands or bodyweight, and progress the difficulty over time — this is the signal that tells your body to keep muscle.",
    },
    {
      name: "Keep your daily movement up",
      text: "Don't let steps and general activity collapse as appetite and energy fall; set a daily movement floor and protect it.",
    },
    {
      name: "Eat enough and titrate sensibly",
      text: "Don't crash your calories too low or rush dose increases — steadier, well-fueled weight loss spares more muscle than near-starvation or a sprint to the top dose.",
    },
    {
      name: "Support recovery",
      text: "Prioritize sleep and consider creatine monohydrate (with clinician approval) to support strength and muscle during training.",
    },
    {
      name: "Track fat versus muscle and adjust",
      text: "Use a start/follow-up DXA scan if you can, plus whether your strength is holding, and shore up protein, food and training if strength slips.",
    },
  ],
};

export const MUSCLE_SOURCE_KEYS = [
  "step-1",
  "step1-bodycomp",
  "surmount-1",
  "semalean",
  "muscle-preservation-review-2026",
  "sarcopenia-glp1-review",
  "believe-bimagrumab",
  "courage-trevogrumab",
  "step-1-extension",
  "niddk-obesity-meds",
  "cdc-obesity",
];
