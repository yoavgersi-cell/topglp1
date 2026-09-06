import type { Metadata } from "next";
import Link from "next/link";
import { ScoredRankingTable } from "@/components/scored-ranking-table";
import { CategoryPicks } from "@/components/category-picks";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { EditorialByline } from "@/components/editorial-byline";
import { PROVIDERS } from "@/data/providers";
import { SCORING_CRITERIA } from "@/data/rankings";
import { pageMetadata, breadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Best GLP-1 Programs of 2026: 21 Telehealth Providers Ranked & Scored",
  description:
    "Our independent 2026 ranking of the best online GLP-1 programs — scored across cost, clinical oversight, medications, UX and transparency. Real pricing, type and insurance.",
  path: "/best-glp1-providers",
});

export default function BestProvidersPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Home", path: "/" },
              { name: "Best GLP-1 programs", path: "/best-glp1-providers" },
            ]),
          ),
        }}
      />
      <Breadcrumbs
        items={[{ name: "Home", path: "/" }, { name: "Best GLP-1 programs", path: "/best-glp1-providers" }]}
      />

      <span className="text-xs font-semibold uppercase tracking-wide text-primary">Independent rankings</span>
      <h1 className="mt-2 font-serif text-4xl font-semibold text-foreground">Best GLP-1 programs of 2026</h1>
      <EditorialByline chips={[`${PROVIDERS.length} programs scored`, "Rankings aren't for sale"]} />
      <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted">
        Scored and ordered by our methodology across cost, clinical depth, medications, UX and transparency. We
        weigh price, what's actually prescribed, pharmacy legitimacy, shipping, and clinical support — and we say
        plainly what to watch out for.
      </p>

      {/* Category picks */}
      <section className="mt-10">
        <h2 className="font-serif text-2xl font-semibold text-foreground">Editor's picks by category</h2>
        <p className="mt-2 text-sm text-muted">One quick pick for the priority that matters most to you.</p>
        <div className="mt-6">
          <CategoryPicks />
        </div>
      </section>

      {/* Scored ranking table */}
      <section className="mt-12">
        <h2 className="font-serif text-2xl font-semibold text-foreground">The full 2026 ranking</h2>
        <p className="mt-2 text-sm text-muted">
          All {PROVIDERS.length} programs, scored 1–10. Affiliate relationships never change a program's position.
        </p>
        <div className="mt-6">
          <ScoredRankingTable />
        </div>
        <p className="mt-4 text-xs leading-relaxed text-muted">
          <strong className="text-foreground">What the types mean:</strong> <strong>Brand</strong> = FDA-approved
          name-brand (Wegovy, Zepbound, Ozempic). <strong>Compounded</strong> = pharmacy-prepared
          semaglutide/tirzepatide that is not FDA-approved and shouldn't be assumed equivalent to a brand product.{" "}
          <strong>Both</strong> = offers brand-name and compounded.
        </p>
      </section>

      {/* Scoring methodology */}
      <section className="mt-12">
        <span className="text-xs font-semibold uppercase tracking-wide text-primary">Scoring methodology</span>
        <h2 className="mt-2 font-serif text-2xl font-semibold text-foreground">How we score providers</h2>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted">
          Every provider is evaluated on five weighted criteria and combined into a single 1–10 rating. We
          re-check pricing and policies over time and update scores when they change.
        </p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SCORING_CRITERIA.map((c) => (
            <div key={c.name} className="rounded-2xl border border-border bg-surface p-5">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-foreground">{c.name}</h3>
                <span className="rounded-full bg-primary-light px-2 py-0.5 text-xs font-bold text-primary">{c.weight}%</span>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-muted">{c.detail}</p>
            </div>
          ))}
        </div>
        <Link href="/how-we-review" className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-primary">
          Read the full methodology →
        </Link>
      </section>
    </div>
  );
}
