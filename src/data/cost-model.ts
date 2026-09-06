// ─────────────────────────────────────────────────────────────────────────────
// GLP-1 cost model — powers the interactive cost calculator.
//
// These are transparent, editable estimate ranges for what people actually pay
// across the main routes to GLP-1 treatment. They are approximations for
// planning only (not quotes), and are deliberately wide because real prices vary
// by provider, pharmacy, plan and promotions. Figures reflect widely published
// 2026 pricing and our provider data.
// ─────────────────────────────────────────────────────────────────────────────

export type InsuranceStatus = "none" | "covers" | "excludes";

export interface MedicationOption {
  id: string;
  label: string;
  /** Route category used to pick the pricing band. */
  kind: "compounded-sema" | "compounded-tirz" | "brand-sema" | "brand-tirz" | "oral";
  /** Compounded cash monthly low/high. */
  cashLow: number;
  cashHigh: number;
  /** Branded cash monthly (before manufacturer savings), when applicable. */
  brandCashLow?: number;
  brandCashHigh?: number;
  /** Note shown under the result. */
  note: string;
}

export const MEDICATION_OPTIONS: MedicationOption[] = [
  {
    id: "compounded-semaglutide",
    label: "Compounded semaglutide",
    kind: "compounded-sema",
    cashLow: 69,
    cashHigh: 300,
    note: "The lowest-cost route. Our top pick, Embody, offers it at a flat $69/mo.",
  },
  {
    id: "compounded-tirzepatide",
    label: "Compounded tirzepatide",
    kind: "compounded-tirz",
    cashLow: 119,
    cashHigh: 400,
    note: "The dual GLP-1/GIP molecule, compounded. Embody offers it at a flat $119/mo.",
  },
  {
    id: "brand-wegovy",
    label: "Wegovy (brand semaglutide)",
    kind: "brand-sema",
    cashLow: 650,
    cashHigh: 1350,
    brandCashLow: 650,
    brandCashHigh: 1350,
    note: "Branded list price is high; manufacturer savings/self-pay programs can lower it.",
  },
  {
    id: "brand-zepbound",
    label: "Zepbound (brand tirzepatide)",
    kind: "brand-tirz",
    cashLow: 650,
    cashHigh: 1300,
    brandCashLow: 650,
    brandCashHigh: 1300,
    note: "Single-dose vials can be cheaper than the auto-injector for some strengths.",
  },
  {
    id: "brand-ozempic",
    label: "Ozempic (brand semaglutide, diabetes)",
    kind: "brand-sema",
    cashLow: 950,
    cashHigh: 1300,
    brandCashLow: 950,
    brandCashHigh: 1300,
    note: "Approved for type 2 diabetes; coverage is more common than for weight-loss brands.",
  },
  {
    id: "brand-mounjaro",
    label: "Mounjaro (brand tirzepatide, diabetes)",
    kind: "brand-tirz",
    cashLow: 1000,
    cashHigh: 1300,
    brandCashLow: 1000,
    brandCashHigh: 1300,
    note: "Approved for type 2 diabetes; coverage is more common than for weight-loss brands.",
  },
  {
    id: "oral-glp1",
    label: "Oral GLP-1 (tablet)",
    kind: "oral",
    cashLow: 149,
    cashHigh: 400,
    note: "A daily pill option; pricing varies widely by program.",
  },
];

// Typical insured copay band when a plan actually covers GLP-1.
const INSURED_COPAY_LOW = 25;
const INSURED_COPAY_HIGH = 100;

export interface CostResult {
  monthlyLow: number;
  monthlyHigh: number;
  totalLow: number;
  totalHigh: number;
  headline: string;
  note: string;
  /** True when the compounded route would be dramatically cheaper. */
  showCompoundedTip: boolean;
}

export function getMedicationOption(id: string): MedicationOption {
  return MEDICATION_OPTIONS.find((m) => m.id === id) ?? MEDICATION_OPTIONS[0];
}

export function estimateCost(
  medId: string,
  insurance: InsuranceStatus,
  months: number,
): CostResult {
  const med = getMedicationOption(medId);
  const isBrand = med.kind.startsWith("brand");

  let monthlyLow: number;
  let monthlyHigh: number;
  let note = med.note;
  let showCompoundedTip = false;

  if (isBrand && insurance === "covers") {
    // Covered branded → copay band.
    monthlyLow = INSURED_COPAY_LOW;
    monthlyHigh = INSURED_COPAY_HIGH;
    note = "With coverage, branded GLP-1 usually comes down to a plan copay. Prior authorization is common.";
  } else if (isBrand && insurance === "excludes") {
    // Excluded branded → cash list price; compounded far cheaper.
    monthlyLow = med.brandCashLow ?? med.cashLow;
    monthlyHigh = med.brandCashHigh ?? med.cashHigh;
    note = "Many plans exclude GLP-1 for weight loss. Without coverage you pay branded cash price — compounded is far cheaper.";
    showCompoundedTip = true;
  } else if (isBrand) {
    // Brand, no insurance → cash list; compounded far cheaper.
    monthlyLow = med.brandCashLow ?? med.cashLow;
    monthlyHigh = med.brandCashHigh ?? med.cashHigh;
    showCompoundedTip = true;
  } else {
    // Compounded / oral → cash band (insurance rarely applies).
    monthlyLow = med.cashLow;
    monthlyHigh = med.cashHigh;
    if (insurance === "covers") {
      note = med.note + " Compounded GLP-1 is generally paid cash even if your plan covers branded drugs.";
    }
  }

  const totalLow = monthlyLow * months;
  const totalHigh = monthlyHigh * months;

  const fmt = (n: number) => `$${n.toLocaleString()}`;
  const headline =
    monthlyLow === monthlyHigh
      ? `${fmt(monthlyLow)}/mo`
      : `${fmt(monthlyLow)}–${fmt(monthlyHigh)}/mo`;

  return { monthlyLow, monthlyHigh, totalLow, totalHigh, headline, note, showCompoundedTip };
}
