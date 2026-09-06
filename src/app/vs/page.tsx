import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { MED_COMPARISONS } from "@/data/med-comparisons";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { pageMetadata, breadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "GLP-1 Drug Comparisons: Ozempic vs Wegovy, Zepbound vs Wegovy & More",
  description:
    "Head-to-head GLP-1 medication comparisons — semaglutide vs tirzepatide, Ozempic vs Wegovy, Zepbound vs Wegovy, and more. Cited to NEJM trials and the FDA.",
  path: "/vs",
});

export default function VsIndex() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Home", path: "/" },
              { name: "Drug comparisons", path: "/vs" },
            ]),
          ),
        }}
      />
      <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Drug comparisons", path: "/vs" }]} />

      <h1 className="font-serif text-4xl font-semibold text-foreground">GLP-1 drug comparisons</h1>
      <p className="mt-3 max-w-2xl text-lg leading-relaxed text-muted">
        Which GLP-1 medication is right for you? Clear, cited head-to-head comparisons of the drugs themselves —
        results, dosing, side effects and cost — backed by the actual trial data.
      </p>

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {MED_COMPARISONS.map((c) => (
          <Link
            key={c.slug}
            href={`/vs/${c.slug}`}
            className="group flex flex-col rounded-2xl border border-border bg-surface p-6 transition-all hover:-translate-y-0.5 hover:shadow-md"
          >
            <h2 className="text-xl font-bold text-foreground">{c.title}</h2>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{c.description}</p>
            <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary">
              Compare <ArrowRight size={15} className="transition-transform group-hover:translate-x-0.5" />
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
