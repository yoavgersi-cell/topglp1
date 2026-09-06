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
