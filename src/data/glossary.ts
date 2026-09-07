// ─────────────────────────────────────────────────────────────────────────────
// GLP-1 glossary.
//
// Concise, entity-style definitions. Rendered with DefinedTerm / DefinedTermSet
// schema so answer engines can resolve terms cleanly — good for AEO and for
// readers who hit an unfamiliar word.
// ─────────────────────────────────────────────────────────────────────────────

export interface Term {
  term: string;
  slug: string;
  definition: string;
  /** Optional internal link for depth. */
  href?: string;
}

const T = (term: string, definition: string, href?: string): Term => ({
  term,
  slug: term.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, ""),
  definition,
  href,
});

export const GLOSSARY: Term[] = [
  T(
    "GLP-1 (glucagon-like peptide-1)",
    "A hormone the gut releases after eating that curbs appetite, slows stomach emptying and helps regulate blood sugar. GLP-1 medications are long-acting mimics of it.",
    "/guides/how-glp1-medications-work",
  ),
  T(
    "GLP-1 receptor agonist",
    "A drug that activates the GLP-1 receptor to reduce appetite and improve blood-sugar control — the mechanism behind semaglutide and other weight-loss medications.",
  ),
  T(
    "GIP (glucose-dependent insulinotropic polypeptide)",
    "A second gut hormone involved in appetite and metabolism. Tirzepatide activates both GIP and GLP-1 receptors, which is thought to add to its effect.",
  ),
  T(
    "Semaglutide",
    "The GLP-1 medication sold as Wegovy (weight loss), Ozempic (diabetes) and Rybelsus (oral diabetes). Averaged about 15% weight loss in trials.",
    "/medications/semaglutide",
  ),
  T(
    "Tirzepatide",
    "A dual GIP/GLP-1 medication sold as Zepbound (weight loss) and Mounjaro (diabetes). Produced the most average weight loss of the approved options (up to ~21%).",
    "/medications/tirzepatide",
  ),
  T(
    "Retatrutide",
    "An investigational 'triple agonist' (GIP/GLP-1/glucagon) that showed the highest weight loss in early trials (~24%) but is not FDA-approved and not legally available.",
    "/medications/retatrutide",
  ),
  T(
    "Liraglutide",
    "An older, once-daily GLP-1 sold as Saxenda (weight loss) and Victoza (diabetes). Less weight loss than the weekly drugs (~8%), now available as a generic in some markets.",
    "/medications/liraglutide",
  ),
  T(
    "Compounded medication",
    "A drug prepared by a compounding pharmacy rather than a branded, FDA-approved finished product. Compounded GLP-1 is the same active molecule at far lower cost, but isn't individually FDA-reviewed.",
    "/medications/compounded-glp1",
  ),
  T(
    "503A pharmacy",
    "A state-licensed compounding pharmacy that prepares patient-specific prescriptions. Reputable telehealth GLP-1 programs use licensed 503A (or 503B) pharmacies.",
  ),
  T(
    "LegitScript certification",
    "A third-party certification indicating a legitimate, compliant online pharmacy or telehealth operation — a useful trust signal when choosing a compounded GLP-1 program.",
    "/tools/glp1-provider-safety-check",
  ),
  T(
    "Dose titration (escalation)",
    "Gradually increasing the dose over several weeks so the body adapts. Rushing titration is the main cause of severe nausea on GLP-1 medications.",
    "/guides/glp1-dosing-schedule-explained",
  ),
  T(
    "Maintenance dose",
    "The target dose reached after titration (for example, 2.4 mg weekly for Wegovy). Not everyone needs the maximum dose to reach their goal.",
  ),
  T(
    "BMI (body mass index)",
    "A weight-to-height ratio used as a screening threshold. GLP-1 weight-loss drugs are generally indicated at a BMI of 30+, or 27+ with a weight-related condition.",
    "/tools/am-i-eligible-for-glp1",
  ),
  T(
    "Prior authorization",
    "An insurer's requirement to approve coverage before it will pay for a medication. It's common for GLP-1 drugs, even when a plan covers them.",
    "/guides/glp1-cost-and-insurance",
  ),
  T(
    "Off-label",
    "Prescribing an FDA-approved drug for a use not listed on its label — for example, using Ozempic (approved for diabetes) for weight loss.",
  ),
  T(
    "Dual / triple agonist",
    "A drug that activates two receptors (dual, like tirzepatide's GIP + GLP-1) or three (triple, like retatrutide's GIP + GLP-1 + glucagon).",
  ),
  T(
    "Subcutaneous injection",
    "An injection into the fat layer just under the skin — how most GLP-1 medications are given, usually once weekly with a small needle.",
  ),
  T(
    "MACE (major adverse cardiovascular events)",
    "Heart attack, stroke or cardiovascular death. Semaglutide reduced MACE by 20% in the SELECT trial for adults with obesity and heart disease.",
  ),
  T(
    "Food noise",
    "The intrusive, persistent thoughts about food many people describe — which GLP-1 medications often quiet, making it easier to eat less.",
  ),
  T(
    "Oral GLP-1",
    "A pill form of a GLP-1 drug, such as Rybelsus (oral semaglutide). Effective, but the most powerful GLP-1 treatments are still weekly injections.",
  ),
  T(
    '"Ozempic face"',
    "A deflated or gaunt facial appearance that can follow rapid weight loss. It's a result of fast fat loss from any cause, not a unique drug side effect.",
  ),
  T(
    "GLP-1 Bridge (Medicare)",
    "A temporary Medicare demonstration (July 2026–December 2027) offering Wegovy, Zepbound or Foundayo for a $50 copay to eligible Part D members, outside the standard benefit.",
    "/glp1-medicare-coverage",
  ),
];
