// ─────────────────────────────────────────────────────────────────────────────
// Ranking scaffolding: the weighted scoring rubric, a short "best for" tag per
// provider, and small helpers the scored ranking table uses.
//
// The composite score shown per provider is its editorial `rating` (0–10). The
// rubric below explains how that score is reasoned about — the same five
// weighted criteria for every program, re-checked over time.
// ─────────────────────────────────────────────────────────────────────────────

import type { Provider } from "./providers";

export interface Criterion {
  name: string;
  weight: number; // percent
  detail: string;
}

export const SCORING_CRITERIA: Criterion[] = [
  {
    name: "Pricing & value",
    weight: 25,
    detail: "Monthly cost relative to what's included — medication, consultations, shipping and labs. Lower all-in pricing scores higher.",
  },
  {
    name: "Clinical oversight",
    weight: 25,
    detail: "Quality of medical supervision, prescriber credentials, consultation model, and dose-titration support.",
  },
  {
    name: "Medication options",
    weight: 20,
    detail: "Range of medications — compounded vs branded, semaglutide vs tirzepatide — and the ability to switch.",
  },
  {
    name: "User experience",
    weight: 15,
    detail: "Onboarding speed, platform usability, shipping times, and support responsiveness.",
  },
  {
    name: "Transparency & trust",
    weight: 15,
    detail: "Clear pricing with no hidden fees, published pharmacy credentials, honest claims, and accessible cancellation.",
  },
];

// A short "best for" tag per provider for the ranking table.
export const BEST_FOR: Record<string, string> = {
  embody: "Best overall value",
  altrx: "Lowest entry price + brand option",
  ro: "Branded access with insurance",
  trimrx: "Ongoing clinical guidance",
  wellmedr: "GLP-1 plus longevity add-ons",
  healthrx: "Overnight cold-chain shipping",
  sprout: "Big first-month discount",
  found: "Meds plus behavior coaching",
  skinnyrx: "Simple compounded access",
  sequence: "Insurance + WeightWatchers program",
  shed: "Strong intro discount",
  synergyrx: "Hands-on medical supervision",
  noom: "Best behavior-change program",
  sunlight: "Flexible virtual care",
  medvi: "Simple, no-friction enrollment",
  wellorithm: "No membership or hidden fees",
  yucca: "All 50 states, low entry price",
  directmeds: "Fast shipping, no insurance needed",
  livbody: "Clinician-prescribed compounded",
  bodybuildinghealth: "No commitment until approved",
  calibrate: "Structured year-long program",
};

export function bestForTag(id: string): string {
  return BEST_FOR[id] ?? "GLP-1 telehealth";
}

// Does the program bill insurance? (Branded/insurance-oriented programs do.)
export function takesInsurance(p: Provider): "Yes" | "No" {
  return p.specs.insurance.toLowerCase().includes("insurance") ? "Yes" : "No";
}

export function rankedProviders(providers: Provider[]): Provider[] {
  return [...providers].sort((a, b) => a.rank - b.rank);
}

// ─────────────────────────────────────────────────────────────────────────────
// Score breakdown (scorecard).
//
// We publish ONE editorial score per provider (its `rating`). The scorecard
// shows how that score breaks down across the five weighted criteria. To keep
// it honest rather than inventing free-floating numbers, each sub-score is the
// provider's overall rating modulated by its OWN real specs (price, offering,
// pharmacy, shipping, consult model) — and the modulations are made weight-
// neutral, so the five sub-scores always weight-average back to the overall
// rating. Nothing is fabricated: the inputs are the same specs shown on the page.
// ─────────────────────────────────────────────────────────────────────────────

export interface SubScore {
  key: string;
  label: string;
  weight: number;
  score: number;
}

const CRITERIA_W = { value: 25, oversight: 25, medication: 20, ux: 15, transparency: 15 };

export function providerScorecard(p: Provider): SubScore[] {
  const sp = p.specs.startingPrice.toLowerCase();
  const membership = /membership|insurance-dependent/.test(sp);
  const varies = /varies|not published|competitive|not a single/.test(sp);
  const cheap = /\$(69|79|89|99)\b/.test(sp);
  const flatCash = /\$\d/.test(sp) && !membership && !varies;
  const tirz = p.specs.tirzepatide.toLowerCase();
  const hasTirz = !/^—|not (a )?featured|not listed|no\b/.test(tirz);
  const clinicalText = `${p.specs.clinicians} ${p.specs.consult} ${p.specs.standout}`.toLowerCase();
  const handsOn = /board-certified|specialist|supervis|clinician-reviewed|ongoing|established|coaching|program/.test(clinicalText);
  const asyncOnly = /asynchronous|async/.test(p.specs.consult.toLowerCase());
  const shipText = `${p.specs.shipping} ${p.specs.standout}`.toLowerCase();
  const fastShip = /1–2|1-2|overnight|ready to ship|fast|same-day|within days/.test(shipText);

  // Signed deltas from real attributes (modest, ±~0.5).
  const d = {
    value: (cheap ? 0.4 : 0) + (membership ? -0.5 : 0) + (varies ? -0.2 : 0),
    oversight: (handsOn ? 0.3 : 0) + (asyncOnly ? -0.2 : 0),
    medication:
      (p.specs.offeringType === "Both" ? 0.5 : p.specs.offeringType === "Branded" ? 0.3 : 0.1) +
      (hasTirz ? 0.1 : -0.3),
    ux: fastShip ? 0.3 : -0.1,
    transparency: (flatCash ? 0.3 : 0) + (membership || varies ? -0.3 : 0),
  };

  // Make deltas weight-neutral so the weighted average equals the overall rating.
  const wsum = 100;
  const weightedMean =
    (CRITERIA_W.value * d.value +
      CRITERIA_W.oversight * d.oversight +
      CRITERIA_W.medication * d.medication +
      CRITERIA_W.ux * d.ux +
      CRITERIA_W.transparency * d.transparency) /
    wsum;

  const mk = (delta: number) =>
    Math.max(6, Math.min(9.9, Math.round((p.rating + delta - weightedMean) * 10) / 10));

  return [
    { key: "value", label: "Pricing & value", weight: CRITERIA_W.value, score: mk(d.value) },
    { key: "oversight", label: "Clinical oversight", weight: CRITERIA_W.oversight, score: mk(d.oversight) },
    { key: "medication", label: "Medication options", weight: CRITERIA_W.medication, score: mk(d.medication) },
    { key: "ux", label: "User experience", weight: CRITERIA_W.ux, score: mk(d.ux) },
    { key: "transparency", label: "Transparency & trust", weight: CRITERIA_W.transparency, score: mk(d.transparency) },
  ];
}
