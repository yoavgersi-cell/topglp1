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
