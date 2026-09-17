import Link from "next/link";

// A reusable internal-linking hub: the site's major GLP-1 search-intent
// clusters with descriptive anchors. Server-rendered (crawlable), no JS.
// Used on the homepage; can be dropped onto other hub pages.
export const TOPIC_CLUSTERS: { title: string; links: { href: string; label: string }[] }[] = [
  {
    title: "GLP-1 medications",
    links: [
      { href: "/medications/semaglutide", label: "Semaglutide (Wegovy, Ozempic)" },
      { href: "/medications/tirzepatide", label: "Tirzepatide (Zepbound, Mounjaro)" },
      { href: "/medications/retatrutide", label: "Retatrutide (investigational)" },
      { href: "/medications/liraglutide", label: "Liraglutide (Saxenda)" },
      { href: "/medications/compounded-glp1", label: "Compounded GLP-1 explained" },
    ],
  },
  {
    title: "Compare the medications",
    links: [
      { href: "/vs/semaglutide-vs-tirzepatide", label: "Semaglutide vs tirzepatide" },
      { href: "/vs/ozempic-vs-wegovy", label: "Ozempic vs Wegovy" },
      { href: "/vs/zepbound-vs-wegovy", label: "Zepbound vs Wegovy" },
      { href: "/vs/mounjaro-vs-ozempic", label: "Mounjaro vs Ozempic" },
      { href: "/vs", label: "All drug comparisons" },
    ],
  },
  {
    title: "Get treatment & compare providers",
    links: [
      { href: "/best-glp1-providers", label: "Best GLP-1 programs, scored & ranked" },
      { href: "/semaglutide-online", label: "Buy semaglutide online, compared" },
      { href: "/tirzepatide-online", label: "Buy tirzepatide online, compared" },
      { href: "/cheapest-glp1", label: "Cheapest GLP-1 without insurance" },
      { href: "/compare", label: "Compare any two programs" },
      { href: "/reviews", label: "All provider reviews" },
      { href: "/find-your-match", label: "Take the 2-minute match quiz" },
    ],
  },
  {
    title: "Cost & insurance coverage",
    links: [
      { href: "/guides/glp1-cost-and-insurance", label: "What GLP-1 costs, with & without insurance" },
      { href: "/tools/glp1-cost-calculator", label: "GLP-1 cost calculator" },
      { href: "/glp1-medicare-coverage", label: "Medicare GLP-1 coverage" },
      { href: "/glp1-by-state", label: "GLP-1 coverage by state (Medicaid)" },
    ],
  },
  {
    title: "Safety, dosing & results",
    links: [
      { href: "/guides/how-glp1-medications-work", label: "How GLP-1 medications work" },
      { href: "/guides/glp1-side-effects-and-how-to-manage-them", label: "Side effects & how to manage them" },
      { href: "/guides/glp1-dosing-schedule-explained", label: "Dosing schedules explained" },
      { href: "/guides/glp1-results-timeline", label: "Results timeline: what to expect" },
      { href: "/tools/am-i-eligible-for-glp1", label: "Am I eligible? (BMI checker)" },
      { href: "/glp1-answers", label: "GLP-1 quick answers" },
      { href: "/glp1-statistics", label: "GLP-1 statistics & facts" },
    ],
  },
];

// A compact cross-cluster "continue exploring" block for content and review
// pages — links ACROSS topic clusters (medications, providers, cost) that these
// templates otherwise don't reach. Descriptive anchors; curated, not a dump.
const RELATED_GROUPS: { title: string; links: { href: string; label: string }[] }[] = [
  {
    title: "Compare & choose a program",
    links: [
      { href: "/best-glp1-providers", label: "Best GLP-1 programs, scored & ranked" },
      { href: "/compare", label: "Compare any two programs" },
      { href: "/cheapest-glp1", label: "Cheapest GLP-1 without insurance" },
    ],
  },
  {
    title: "The medications",
    links: [
      { href: "/medications/semaglutide", label: "Semaglutide (Wegovy, Ozempic)" },
      { href: "/medications/tirzepatide", label: "Tirzepatide (Zepbound, Mounjaro)" },
      { href: "/vs/semaglutide-vs-tirzepatide", label: "Semaglutide vs tirzepatide" },
    ],
  },
  {
    title: "Cost & coverage",
    links: [
      { href: "/guides/glp1-cost-and-insurance", label: "What GLP-1 costs, with & without insurance" },
      { href: "/glp1-medicare-coverage", label: "Medicare GLP-1 coverage" },
      { href: "/glp1-by-state", label: "GLP-1 coverage by state (Medicaid)" },
    ],
  },
];

export function RelatedTopics() {
  return (
    <section className="mt-12 border-t border-border pt-8">
      <h2 className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">Continue exploring Top GLP-1</h2>
      <div className="mt-4 grid gap-x-10 gap-y-6 sm:grid-cols-3">
        {RELATED_GROUPS.map((g) => (
          <div key={g.title}>
            <h3 className="text-xs font-semibold uppercase tracking-wide text-primary">{g.title}</h3>
            <ul className="mt-2 space-y-1.5">
              {g.links.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm leading-snug text-foreground hover:text-primary hover:underline">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export function TopicDirectory() {
  return (
    <div className="grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
      {TOPIC_CLUSTERS.map((c) => (
        <div key={c.title}>
          <h3 className="text-xs font-semibold uppercase tracking-[0.12em] text-primary">{c.title}</h3>
          <ul className="mt-3 space-y-2">
            {c.links.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-sm leading-snug text-foreground hover:text-primary hover:underline">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
