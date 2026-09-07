// ─────────────────────────────────────────────────────────────────────────────
// State GLP-1 access data.
//
// The variable that actually differs by state is whether that state's MEDICAID
// program covers GLP-1s for OBESITY (weight loss). GLP-1 coverage for type 2
// DIABETES is near-universal; the obesity indication is where states differ —
// and, per KFF and Stateline reporting, that list is small (~11–13 states in
// 2026) and shrinking.
//
// Statuses below reflect our last review of KFF/Stateline reporting. Coverage
// changes frequently, so every page tells readers to verify with their state.
// Compounded GLP-1 through telehealth is a cash route available nationwide.
// ─────────────────────────────────────────────────────────────────────────────

export type MedicaidObesity = "covered" | "limited" | "dropped" | "not-covered";

export interface StateInfo {
  name: string;
  abbr: string;
  slug: string;
  medicaid: MedicaidObesity;
}

const S = (name: string, abbr: string, medicaid: MedicaidObesity): StateInfo => ({
  name,
  abbr,
  slug: name.toLowerCase().replace(/\s+/g, "-"),
  medicaid,
});

export const STATES: StateInfo[] = [
  S("Alabama", "AL", "not-covered"),
  S("Alaska", "AK", "not-covered"),
  S("Arizona", "AZ", "not-covered"),
  S("Arkansas", "AR", "not-covered"),
  S("California", "CA", "dropped"),
  S("Colorado", "CO", "not-covered"),
  S("Connecticut", "CT", "not-covered"),
  S("Delaware", "DE", "covered"),
  S("District of Columbia", "DC", "not-covered"),
  S("Florida", "FL", "not-covered"),
  S("Georgia", "GA", "not-covered"),
  S("Hawaii", "HI", "not-covered"),
  S("Idaho", "ID", "not-covered"),
  S("Illinois", "IL", "not-covered"),
  S("Indiana", "IN", "not-covered"),
  S("Iowa", "IA", "not-covered"),
  S("Kansas", "KS", "covered"),
  S("Kentucky", "KY", "not-covered"),
  S("Louisiana", "LA", "not-covered"),
  S("Maine", "ME", "not-covered"),
  S("Maryland", "MD", "not-covered"),
  S("Massachusetts", "MA", "dropped"),
  S("Michigan", "MI", "limited"),
  S("Minnesota", "MN", "covered"),
  S("Mississippi", "MS", "covered"),
  S("Missouri", "MO", "covered"),
  S("Montana", "MT", "not-covered"),
  S("Nebraska", "NE", "not-covered"),
  S("Nevada", "NV", "not-covered"),
  S("New Hampshire", "NH", "dropped"),
  S("New Jersey", "NJ", "not-covered"),
  S("New Mexico", "NM", "covered"),
  S("New York", "NY", "not-covered"),
  S("North Carolina", "NC", "covered"),
  S("North Dakota", "ND", "not-covered"),
  S("Ohio", "OH", "not-covered"),
  S("Oklahoma", "OK", "not-covered"),
  S("Oregon", "OR", "not-covered"),
  S("Pennsylvania", "PA", "dropped"),
  S("Rhode Island", "RI", "covered"),
  S("South Carolina", "SC", "dropped"),
  S("South Dakota", "SD", "not-covered"),
  S("Tennessee", "TN", "covered"),
  S("Texas", "TX", "not-covered"),
  S("Utah", "UT", "dropped"),
  S("Vermont", "VT", "not-covered"),
  S("Virginia", "VA", "limited"),
  S("Washington", "WA", "not-covered"),
  S("West Virginia", "WV", "not-covered"),
  S("Wisconsin", "WI", "covered"),
  S("Wyoming", "WY", "not-covered"),
];

export function getState(slug: string): StateInfo | undefined {
  return STATES.find((s) => s.slug === slug);
}

export const STATE_SLUGS = STATES.map((s) => s.slug);

// Human-readable status + a short explanation, composed per state.
export function medicaidStatus(s: StateInfo): { label: string; tone: "yes" | "limited" | "no"; detail: string } {
  switch (s.medicaid) {
    case "covered":
      return {
        label: "Covered (with criteria)",
        tone: "yes",
        detail: `As of our last review of KFF and Stateline reporting, ${s.name} Medicaid covers GLP-1 medications for weight loss (obesity), subject to clinical criteria and prior authorization. ${s.name} is one of the roughly 11–13 states that still do. Coverage changes frequently — confirm current rules with ${s.name} Medicaid.`,
      };
    case "limited":
      return {
        label: "Covered but narrowed",
        tone: "limited",
        detail: `${s.name} Medicaid covers GLP-1s for obesity but has tightened its criteria (for example, limiting use toward morbid obesity). Requirements can be strict — confirm the current criteria with ${s.name} Medicaid before assuming coverage.`,
      };
    case "dropped":
      return {
        label: "Recently dropped",
        tone: "no",
        detail: `${s.name} Medicaid recently ended coverage of GLP-1 medications for weight loss (several states cut adult obesity coverage effective January 1, 2026; Massachusetts ended it July 1, 2026; Utah's pilot ended June 30, 2026). Coverage for type 2 diabetes continues. Confirm the current status with ${s.name} Medicaid.`,
      };
    default:
      return {
        label: "Not covered for weight loss",
        tone: "no",
        detail: `${s.name} Medicaid does not appear among the small set of states (roughly 11–13 in 2026) that cover GLP-1 medications specifically for weight loss. GLP-1s are still covered for type 2 diabetes. Because policies change, confirm the current status with ${s.name} Medicaid.`,
      };
  }
}
