import type { Metadata } from "next";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { STAT_GROUPS } from "@/data/stats";
import { SOURCES } from "@/data/sources";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { EditorialByline } from "@/components/editorial-byline";
import { MedicalSources } from "@/components/medical-sources";
import { pageMetadata, breadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "GLP-1 Statistics & Facts 2026: Weight Loss, Cost & Coverage Data",
  description:
    "Key GLP-1 statistics for 2026 — average weight loss (semaglutide ~15%, tirzepatide ~21%), cardiovascular outcomes, cost, Medicaid/Medicare coverage — each figure cited to NEJM, FDA, CDC or KFF.",
  path: "/glp1-statistics",
});

const sourceKeys = [
  "step-1",
  "surmount-1",
  "retatrutide-p2",
  "scale-obesity",
  "select",
  "surmount-5",
  "kff-medicaid-glp1",
  "medicare-glp1-bridge",
  "cdc-obesity",
];

export default function StatisticsPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Home", path: "/" },
              { name: "GLP-1 statistics", path: "/glp1-statistics" },
            ]),
          ),
        }}
      />
      <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "GLP-1 statistics", path: "/glp1-statistics" }]} />

      <h1 className="font-serif text-4xl font-semibold text-foreground">GLP-1 statistics &amp; facts (2026)</h1>
      <EditorialByline chips={["Cited to NEJM, FDA, CDC & KFF"]} />
      <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted">
        The numbers that matter on GLP-1 medications — how much weight people lose, health outcomes, cost and coverage.
        Every clinical figure links to its primary source; pricing figures are labeled as provider- or list-reported.
      </p>

      {STAT_GROUPS.map((g) => (
        <section key={g.category} className="mt-10">
          <h2 className="font-serif text-2xl font-semibold text-foreground">{g.category}</h2>
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            {g.stats.map((s) => {
              const src = s.source ? SOURCES[s.source] : undefined;
              return (
                <div key={s.label} className="rounded-2xl border border-border bg-surface p-6">
                  <p className="font-serif text-4xl font-semibold text-primary">{s.value}</p>
                  <p className="mt-2 leading-relaxed text-foreground">{s.label}</p>
                  {src ? (
                    <a
                      href={src.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-muted hover:text-primary"
                    >
                      Source: {src.publisher} <ExternalLink size={11} />
                    </a>
                  ) : (
                    <p className="mt-3 text-xs text-muted">{s.attribution}</p>
                  )}
                </div>
              );
            })}
          </div>
        </section>
      ))}

      <p className="mt-10 text-sm text-muted">
        Want the fuller picture? Read the{" "}
        <Link href="/medications" className="font-semibold text-primary underline">medication guides</Link>, the{" "}
        <Link href="/guides/glp1-results-timeline" className="font-semibold text-primary underline">results timeline</Link>, or the{" "}
        <Link href="/glp1-answers" className="font-semibold text-primary underline">quick answers</Link>.
      </p>

      <MedicalSources keys={sourceKeys} />
    </div>
  );
}
