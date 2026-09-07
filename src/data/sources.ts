// ─────────────────────────────────────────────────────────────────────────────
// Reference library.
//
// Every clinical claim on TopGLP1 should trace back to a credible primary
// source: peer-reviewed trials (New England Journal of Medicine) and official
// regulators (FDA). Each source below was verified against the primary record.
// Pages cite sources by key; the <MedicalSources> component renders them.
//
// Keeping citations in one place means a source is described once, consistently,
// and every page that relies on it links to the same authoritative URL.
// ─────────────────────────────────────────────────────────────────────────────

export type SourceType = "Clinical trial" | "Regulatory" | "Peer-reviewed" | "Policy analysis";

export interface Source {
  /** Full citation line. */
  citation: string;
  /** Publisher / journal, e.g. "New England Journal of Medicine". */
  publisher: string;
  /** Canonical, stable URL to the primary record. */
  url: string;
  type: SourceType;
  /** Optional one-line note on what this source supports. */
  note?: string;
}

export const SOURCES: Record<string, Source> = {
  "step-1": {
    citation:
      "Wilding JPH, et al. Once-Weekly Semaglutide in Adults with Overweight or Obesity. N Engl J Med. 2021;384(11):989–1002.",
    publisher: "New England Journal of Medicine",
    url: "https://www.nejm.org/doi/full/10.1056/NEJMoa2032183",
    type: "Clinical trial",
    note: "STEP 1 — the pivotal semaglutide 2.4 mg weight-management trial (~14.9% mean weight loss).",
  },
  "surmount-1": {
    citation:
      "Jastreboff AM, et al. Tirzepatide Once Weekly for the Treatment of Obesity. N Engl J Med. 2022;387(3):205–216.",
    publisher: "New England Journal of Medicine",
    url: "https://www.nejm.org/doi/full/10.1056/NEJMoa2206038",
    type: "Clinical trial",
    note: "SURMOUNT-1 — the pivotal tirzepatide obesity trial (up to ~20.9% mean weight loss).",
  },
  "surmount-5": {
    citation:
      "Aronne LJ, et al. Tirzepatide as Compared with Semaglutide for the Treatment of Obesity. N Engl J Med. 2025.",
    publisher: "New England Journal of Medicine",
    url: "https://www.nejm.org/doi/abs/10.1056/NEJMoa2410819",
    type: "Clinical trial",
    note: "SURMOUNT-5 — head-to-head trial; tirzepatide produced greater weight loss than semaglutide at 72 weeks.",
  },
  select: {
    citation:
      "Lincoff AM, et al. Semaglutide and Cardiovascular Outcomes in Obesity without Diabetes. N Engl J Med. 2023;389(24):2221–2232.",
    publisher: "New England Journal of Medicine",
    url: "https://www.nejm.org/doi/full/10.1056/NEJMoa2307563",
    type: "Clinical trial",
    note: "SELECT — 20% reduction in major cardiovascular events in adults with obesity and existing heart disease.",
  },
  "retatrutide-p2": {
    citation:
      "Jastreboff AM, et al. Triple–Hormone-Receptor Agonist Retatrutide for Obesity — A Phase 2 Trial. N Engl J Med. 2023;389(6):514–526.",
    publisher: "New England Journal of Medicine",
    url: "https://www.nejm.org/doi/full/10.1056/NEJMoa2301972",
    type: "Clinical trial",
    note: "Phase 2 retatrutide trial (~24% mean weight loss at 48 weeks at the highest dose).",
  },
  "scale-obesity": {
    citation:
      "Pi-Sunyer X, et al. A Randomized, Controlled Trial of 3.0 mg of Liraglutide in Weight Management. N Engl J Med. 2015;373(1):11–22.",
    publisher: "New England Journal of Medicine",
    url: "https://www.nejm.org/doi/full/10.1056/NEJMoa1411892",
    type: "Clinical trial",
    note: "SCALE Obesity and Prediabetes — liraglutide 3.0 mg (~8% mean weight loss).",
  },
  "fda-unapproved-glp1": {
    citation: "U.S. Food & Drug Administration. FDA's Concerns with Unapproved GLP-1 Drugs Used for Weight Loss.",
    publisher: "U.S. Food & Drug Administration",
    url: "https://www.fda.gov/drugs/drug-alerts-and-statements/fdas-concerns-unapproved-glp-1-drugs-used-weight-loss",
    type: "Regulatory",
    note: "FDA guidance on the risks of unapproved and compounded GLP-1 products.",
  },
  "fda-compounding-dosing": {
    citation:
      "U.S. Food & Drug Administration. FDA Alerts Health Care Providers, Compounders and Patients of Dosing Errors Associated with Compounded Injectable Semaglutide Products.",
    publisher: "U.S. Food & Drug Administration",
    url: "https://www.fda.gov/drugs/human-drug-compounding/fda-alerts-health-care-providers-compounders-and-patients-dosing-errors-associated-compounded",
    type: "Regulatory",
    note: "FDA alert on dosing errors with compounded semaglutide.",
  },
  "fda-compounding-policy": {
    citation:
      "U.S. Food & Drug Administration. FDA Clarifies Policies for Compounders as National GLP-1 Supply Begins to Stabilize.",
    publisher: "U.S. Food & Drug Administration",
    url: "https://www.fda.gov/drugs/drug-alerts-and-statements/fda-clarifies-policies-compounders-national-glp-1-supply-begins-stabilize",
    type: "Regulatory",
    note: "How compounding legality changes as drugs leave the FDA shortage list.",
  },
  "fda-drug-shortages": {
    citation: "U.S. Food & Drug Administration. FDA Drug Shortages database.",
    publisher: "U.S. Food & Drug Administration",
    url: "https://www.fda.gov/drugs/drug-shortages",
    type: "Regulatory",
    note: "Official record of current drug shortage status.",
  },
  "kff-medicaid-glp1": {
    citation: "KFF. Medicaid Coverage of and Spending on GLP-1s.",
    publisher: "KFF (Kaiser Family Foundation)",
    url: "https://www.kff.org/medicaid/medicaid-coverage-of-and-spending-on-glp-1s/",
    type: "Policy analysis",
    note: "Tracks which state Medicaid programs cover GLP-1s for obesity.",
  },
  "stateline-glp1-medicaid": {
    citation: "Stateline. States retreat from covering drugs for weight loss (2025).",
    publisher: "Stateline",
    url: "https://stateline.org/2025/11/28/states-retreat-from-covering-drugs-for-weight-loss/",
    type: "Policy analysis",
    note: "Reporting on states adding and dropping Medicaid GLP-1 obesity coverage.",
  },
  "medicare-glp1-bridge": {
    citation: "Medicare Rights Center. GLP-1 Weight-Loss Drug Demonstration Begins July 2026.",
    publisher: "Medicare Rights Center",
    url: "https://www.medicarerights.org/medicare-watch/2026/06/04/glp-1-weight-loss-drug-demonstration-begins-july-2026",
    type: "Policy analysis",
    note: "Details the Medicare GLP-1 Bridge demonstration ($50 copay, July 2026–Dec 2027).",
  },
  "kff-medicare-balance": {
    citation: "KFF. What to Know About the BALANCE Model for GLP-1s in Medicare and Medicaid and the Medicare GLP-1 Bridge.",
    publisher: "KFF (Kaiser Family Foundation)",
    url: "https://www.kff.org/medicare/what-to-know-about-the-balance-model-for-glp-1s-in-medicare-and-medicaid/",
    type: "Policy analysis",
    note: "Explains the Medicare GLP-1 Bridge and the follow-on BALANCE Model.",
  },
};

export function getSources(keys: string[]): (Source & { key: string })[] {
  return keys
    .map((key) => (SOURCES[key] ? { key, ...SOURCES[key] } : null))
    .filter((s): s is Source & { key: string } => Boolean(s));
}
