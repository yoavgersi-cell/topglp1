import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";

// Two-column publication layout: a readable prose column plus a sticky sidebar
// that fills out to the full header width on desktop. Collapses to a single
// column (sidebar below) on mobile. Used by every long-form article template.
export function ArticleLayout({ children, aside }: { children: ReactNode; aside?: ReactNode }) {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
      <div className="lg:grid lg:grid-cols-[minmax(0,1fr)_18rem] lg:gap-12">
        <article className="min-w-0">{children}</article>
        {aside && (
          <aside className="mt-12 lg:mt-0">
            <div className="space-y-5 lg:sticky lg:top-24">{aside}</div>
          </aside>
        )}
      </div>
    </div>
  );
}

// A titled sidebar card.
export function AsideCard({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="rounded-2xl border border-border bg-surface p-5">
      <p className="text-xs font-semibold uppercase tracking-wide text-muted">{title}</p>
      <div className="mt-3">{children}</div>
    </div>
  );
}

// A generic sidebar for article pages that don't have their own section TOC:
// a few high-intent quick links plus a top-pick CTA. `uk` swaps to a
// medicine-free set of links (UK ad-rule compliance).
export function DefaultAside({ uk = false }: { uk?: boolean }) {
  const links = uk
    ? [
        { href: "/uk", label: "UK guide" },
        { href: "/uk/nhs-weight-loss-treatment", label: "NHS eligibility" },
        { href: "/uk/buying-weight-loss-treatment-safely", label: "Getting treatment safely" },
        { href: "/uk/compare/medexpress-vs-voy", label: "Compare UK providers" },
      ]
    : [
        { href: "/best-glp1-providers", label: "Best GLP-1 programs" },
        { href: "/cheapest-glp1", label: "Cheapest GLP-1" },
        { href: "/compare", label: "Compare programs" },
        { href: "/glp1-by-state", label: "Coverage by state" },
        { href: "/reviews", label: "All reviews" },
      ];
  return (
    <>
      <nav className="rounded-2xl border border-border bg-surface p-5">
        <p className="text-xs font-semibold uppercase tracking-wide text-muted">Explore</p>
        <ul className="mt-3 space-y-2">
          {links.map((l) => (
            <li key={l.href}>
              <Link href={l.href} className="block text-sm text-muted transition-colors hover:text-primary">
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      {!uk && (
        <Link
          href="/best-glp1-providers"
          className="block rounded-2xl border border-primary/30 bg-primary-light/40 p-5 transition-colors hover:border-primary"
        >
          <p className="text-xs font-semibold uppercase tracking-wide text-primary">Ready to choose?</p>
          <p className="mt-1.5 text-sm font-semibold text-foreground">See the GLP-1 programs we rate highest, scored and ranked</p>
          <span className="mt-2 inline-flex items-center gap-1 text-sm font-semibold text-primary">
            Best programs <ArrowRight size={14} />
          </span>
        </Link>
      )}
    </>
  );
}

// Anchored table of contents. Section ids must match the item ids.
export function OnThisPage({ items }: { items: { id: string; label: string }[] }) {
  if (items.length === 0) return null;
  return (
    <nav className="rounded-2xl border border-border bg-surface p-5">
      <p className="text-xs font-semibold uppercase tracking-wide text-muted">On this page</p>
      <ul className="mt-3 space-y-2">
        {items.map((it) => (
          <li key={it.id}>
            <a href={`#${it.id}`} className="block text-sm leading-snug text-muted transition-colors hover:text-primary">
              {it.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
