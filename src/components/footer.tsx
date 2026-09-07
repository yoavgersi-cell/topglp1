import Link from "next/link";
import { Logo } from "./logo";
import { SITE } from "@/lib/site";

const COLUMNS = [
  {
    title: "Medications",
    links: [
      { label: "Semaglutide (Wegovy)", href: "/medications/semaglutide" },
      { label: "Tirzepatide (Zepbound)", href: "/medications/tirzepatide" },
      { label: "Retatrutide", href: "/medications/retatrutide" },
      { label: "Compounded GLP-1", href: "/medications/compounded-glp1" },
      { label: "Semaglutide online", href: "/semaglutide-online" },
      { label: "Tirzepatide online", href: "/tirzepatide-online" },
    ],
  },
  {
    title: "Guides",
    links: [
      { label: "How GLP-1 works", href: "/guides/how-glp1-medications-work" },
      { label: "Dosing schedules", href: "/guides/glp1-dosing-schedule-explained" },
      { label: "Side effects", href: "/guides/glp1-side-effects-and-how-to-manage-them" },
      { label: "Quick answers", href: "/glp1-answers" },
      { label: "Statistics & facts", href: "/glp1-statistics" },
      { label: "Glossary", href: "/glp1-glossary" },
      { label: "GLP-1 by state", href: "/glp1-by-state" },
      { label: "Medicare coverage", href: "/glp1-medicare-coverage" },
    ],
  },
  {
    title: "Compare & reviews",
    links: [
      { label: "Best GLP-1 programs", href: "/best-glp1-providers" },
      { label: "Match quiz", href: "/find-your-match" },
      { label: "All reviews", href: "/reviews" },
      { label: "Program comparisons", href: "/compare" },
      { label: "Drug comparisons", href: "/vs" },
    ],
  },
  {
    title: "Tools & site",
    links: [
      { label: "Cost calculator", href: "/tools/glp1-cost-calculator" },
      { label: "Eligibility checker", href: "/tools/am-i-eligible-for-glp1" },
      { label: "How we review", href: "/how-we-review" },
      { label: "About us", href: "/about" },
      { label: "Disclaimer", href: "/disclaimer" },
      { label: "Privacy", href: "/privacy" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="mt-20 border-t border-border bg-surface">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr_1fr_1fr]">
          <div>
            <Logo />
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted">
              {SITE.tagline}. Independent, education-first coverage of GLP-1
              medications for a US audience.
            </p>
          </div>
          {COLUMNS.map((col) => (
            <div key={col.title}>
              <h3 className="text-sm font-semibold text-foreground">{col.title}</h3>
              <ul className="mt-3 space-y-2">
                {col.links.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="text-sm text-muted transition-colors hover:text-primary">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 border-t border-border pt-6">
          <p className="text-xs leading-relaxed text-muted">
            <strong className="text-foreground">Medical disclaimer:</strong> Top GLP-1 provides
            general educational information, not medical advice. GLP-1 medications are
            prescription drugs with real risks. Always consult a licensed healthcare
            provider before starting, stopping, or changing treatment. We may earn a
            commission when you sign up with a provider through links on this site, which
            never affects our editorial assessments.
          </p>
          <p className="mt-4 text-xs text-muted">
            © {new Date().getFullYear()} {SITE.name} · {SITE.domain}
          </p>
        </div>
      </div>
    </footer>
  );
}
