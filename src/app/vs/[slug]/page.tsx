import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight, Trophy, Pill, TrendingUp, AlertTriangle, DollarSign } from "lucide-react";
import {
  MED_COMPARISONS,
  MED_COMPARISON_SLUGS,
  getMedComparison,
} from "@/data/med-comparisons";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { MedicalDisclaimer } from "@/components/medical-disclaimer";
import { MedicalSources } from "@/components/medical-sources";
import { Faq } from "@/components/faq";
import { CONTENT_REVIEWED } from "@/lib/site";
import { pageMetadata, breadcrumbSchema, faqSchema, articleSchema } from "@/lib/seo";

export const revalidate = 3600;

export function generateStaticParams() {
  return MED_COMPARISON_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const c = getMedComparison(slug);
  if (!c) return {};
  return pageMetadata({
    title: `${c.title}: Which GLP-1 Wins in 2026? (Full Comparison)`,
    description: c.description,
    path: `/vs/${c.slug}`,
  });
}

export default async function MedComparisonPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const c = getMedComparison(slug);
  if (!c) notFound();

  const winnerName = c.winner === "a" ? c.aName : c.winner === "b" ? c.bName : null;
  const otherComparisons = MED_COMPARISONS.filter((x) => x.slug !== c.slug).slice(0, 4);

  return (
    <article className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            articleSchema({
              headline: c.title,
              description: c.description,
              path: `/vs/${c.slug}`,
              dateModified: CONTENT_REVIEWED,
            }),
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(c.faqs)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Home", path: "/" },
              { name: "Drug comparisons", path: "/vs" },
              { name: c.title, path: `/vs/${c.slug}` },
            ]),
          ),
        }}
      />

      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "Drug comparisons", path: "/vs" },
          { name: c.title, path: `/vs/${c.slug}` },
        ]}
      />

      <header>
        <h1 className="font-serif text-4xl font-semibold leading-tight text-foreground">{c.title}</h1>
        <p className="mt-3 text-lg leading-relaxed text-muted">{c.intro}</p>
        <p className="mt-3 text-xs text-muted">Last reviewed {CONTENT_REVIEWED} by the TopGLP1 Editorial Team</p>
      </header>

      <MedicalDisclaimer className="mt-6" />

      {/* Winner banner */}
      {winnerName && (
        <section className="mt-6 flex flex-col gap-3 rounded-2xl border-2 border-primary bg-primary-light/50 p-6 sm:flex-row sm:items-center">
          <span className="inline-flex shrink-0 items-center gap-1.5 self-start rounded-full bg-primary px-3 py-1 text-xs font-bold uppercase tracking-wide text-white">
            <Trophy size={14} /> Our take: {winnerName}
          </span>
          <p className="text-sm leading-relaxed text-foreground">{c.winnerReason}</p>
        </section>
      )}

      {/* Verdict */}
      <section className="mt-4 grid gap-4 sm:grid-cols-2">
        <div className={`rounded-2xl border bg-surface p-6 ${c.winner === "a" ? "border-primary ring-1 ring-primary" : "border-border"}`}>
          <p className="text-sm font-semibold uppercase tracking-wide text-primary">Choose {c.aName} if…</p>
          <p className="mt-1 leading-relaxed text-foreground">{c.chooseA}</p>
        </div>
        <div className={`rounded-2xl border bg-surface p-6 ${c.winner === "b" ? "border-primary ring-1 ring-primary" : "border-border"}`}>
          <p className="text-sm font-semibold uppercase tracking-wide text-accent">Choose {c.bName} if…</p>
          <p className="mt-1 leading-relaxed text-foreground">{c.chooseB}</p>
        </div>
      </section>

      {/* Clinical spec table */}
      <section className="mt-10">
        <h2 className="font-serif text-2xl font-semibold text-foreground">Side by side</h2>
        <div className="mt-4 overflow-x-auto rounded-2xl border border-border">
          <table className="w-full min-w-[520px] border-collapse text-sm">
            <thead>
              <tr className="bg-surface">
                <th className="p-4 text-left font-medium text-muted"></th>
                <th className="border-l border-border p-4 text-center font-bold text-foreground">{c.aName}</th>
                <th className="border-l border-border p-4 text-center font-bold text-foreground">{c.bName}</th>
              </tr>
            </thead>
            <tbody>
              {c.specRows.map((row, i) => (
                <tr key={row.label} className={i % 2 === 0 ? "bg-background" : "bg-surface"}>
                  <th className="p-4 text-left align-top text-xs font-semibold uppercase tracking-wide text-muted">
                    {row.label}
                  </th>
                  <td className="border-l border-border p-4 align-top text-foreground">{row.a}</td>
                  <td className="border-l border-border p-4 align-top text-foreground">{row.b}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Efficacy */}
      <section className="mt-10">
        <h2 className="flex items-center gap-2 font-serif text-2xl font-semibold text-foreground">
          <TrendingUp size={20} className="text-primary" /> How they compare on results
        </h2>
        <div className="prose-body mt-3">
          {c.efficacy.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </section>

      {/* Safety */}
      <section className="mt-8">
        <h2 className="flex items-center gap-2 font-serif text-2xl font-semibold text-foreground">
          <AlertTriangle size={20} className="text-primary" /> Side effects &amp; safety
        </h2>
        <p className="prose-body mt-3">{c.safety}</p>
      </section>

      {/* Cost */}
      <section className="mt-8">
        <h2 className="flex items-center gap-2 font-serif text-2xl font-semibold text-foreground">
          <DollarSign size={20} className="text-primary" /> Cost
        </h2>
        <p className="prose-body mt-3">{c.cost}</p>
        <div className="mt-4 flex flex-wrap gap-3">
          <Link
            href="/tools/glp1-cost-calculator"
            className="inline-flex items-center gap-1 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white hover:bg-primary-dark"
          >
            Estimate your cost
          </Link>
          <Link
            href="/cheapest-glp1"
            className="inline-flex items-center gap-1 rounded-full border border-border bg-surface px-5 py-2.5 text-sm font-semibold text-foreground hover:border-primary"
          >
            Cheapest options
          </Link>
        </div>
      </section>

      {/* Read the full drug guides */}
      <section className="mt-8 rounded-2xl border border-border bg-surface p-5">
        <h2 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-muted">
          <Pill size={16} className="text-primary" /> Full drug guides
        </h2>
        <div className="mt-3 flex flex-wrap gap-2">
          {c.aMedSlug && (
            <Link
              href={`/medications/${c.aMedSlug}`}
              className="inline-flex items-center gap-1 rounded-full border border-border bg-background px-3 py-1.5 text-sm text-foreground hover:border-primary"
            >
              {c.aName} guide <ArrowRight size={13} />
            </Link>
          )}
          {c.bMedSlug && c.bMedSlug !== c.aMedSlug && (
            <Link
              href={`/medications/${c.bMedSlug}`}
              className="inline-flex items-center gap-1 rounded-full border border-border bg-background px-3 py-1.5 text-sm text-foreground hover:border-primary"
            >
              {c.bName} guide <ArrowRight size={13} />
            </Link>
          )}
        </div>
      </section>

      {/* FAQ */}
      <section className="mt-10">
        <h2 className="font-serif text-2xl font-semibold text-foreground">{c.title}: common questions</h2>
        <div className="mt-4">
          <Faq items={c.faqs} />
        </div>
      </section>

      {/* Sources */}
      <MedicalSources keys={c.sources} />

      {/* Other comparisons */}
      <nav className="mt-12 border-t border-border pt-8">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-muted">More drug comparisons</h2>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          {otherComparisons.map((x) => (
            <Link
              key={x.slug}
              href={`/vs/${x.slug}`}
              className="group flex items-center justify-between rounded-xl border border-border bg-surface p-4 transition-colors hover:border-primary"
            >
              <span className="text-sm font-semibold text-foreground">{x.title}</span>
              <ArrowRight size={15} className="text-primary transition-transform group-hover:translate-x-0.5" />
            </Link>
          ))}
        </div>
      </nav>
    </article>
  );
}
