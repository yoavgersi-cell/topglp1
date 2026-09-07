// ─────────────────────────────────────────────────────────────────────────────
// GLP-1 statistics & facts.
//
// Citable, single-figure facts — the kind answer engines and other sites quote.
// Every clinical figure ties to a source key (data/sources.ts); pricing figures
// are provider/list-reported and labeled as such rather than invented.
// ─────────────────────────────────────────────────────────────────────────────

export interface Stat {
  value: string;
  label: string;
  /** Source key from data/sources.ts, when it's a clinical/regulatory figure. */
  source?: string;
  /** Fallback attribution when there's no external source (e.g. our pricing research). */
  attribution?: string;
}

export interface StatGroup {
  category: string;
  stats: Stat[];
}

export const STAT_GROUPS: StatGroup[] = [
  {
    category: "How much weight people lose",
    stats: [
      { value: "~15%", label: "Average weight loss on semaglutide (Wegovy) over 68 weeks", source: "step-1" },
      { value: "up to ~21%", label: "Average weight loss on tirzepatide (Zepbound) over 72 weeks", source: "surmount-1" },
      { value: "~24%", label: "Average weight loss on retatrutide at 48 weeks (phase 2, investigational)", source: "retatrutide-p2" },
      { value: "~8%", label: "Average weight loss on liraglutide (Saxenda) over 56 weeks", source: "scale-obesity" },
    ],
  },
  {
    category: "Health outcomes",
    stats: [
      { value: "20%", label: "Reduction in major cardiovascular events on semaglutide, in adults with obesity and heart disease", source: "select" },
      { value: "Superior", label: "Tirzepatide vs semaglutide for weight loss, head-to-head (SURMOUNT-5)", source: "surmount-5" },
    ],
  },
  {
    category: "What it costs",
    stats: [
      { value: "$1,000–$1,350", label: "Monthly cash list price of branded GLP-1 (Wegovy/Zepbound) without insurance", attribution: "Manufacturer list pricing, 2026" },
      { value: "from $69/mo", label: "Cheapest verified compounded semaglutide (our top pick, Embody)", attribution: "TopGLP1 pricing research, 2026" },
      { value: "$25–$100", label: "Typical monthly copay when a plan actually covers GLP-1", attribution: "TopGLP1 research of plan formularies, 2026" },
    ],
  },
  {
    category: "Coverage",
    stats: [
      { value: "~11–13", label: "State Medicaid programs that cover GLP-1 for obesity in 2026 — and shrinking", source: "kff-medicaid-glp1" },
      { value: "$50/mo", label: "Copay under the Medicare GLP-1 Bridge program (July 2026–Dec 2027)", source: "medicare-glp1-bridge" },
    ],
  },
  {
    category: "Why demand is so high",
    stats: [
      { value: "~40%", label: "Share of US adults with obesity", source: "cdc-obesity" },
    ],
  },
];

export const ALL_STATS: Stat[] = STAT_GROUPS.flatMap((g) => g.stats);
