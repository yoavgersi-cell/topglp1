import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { MEDICATIONS } from "@/data/medications";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { pageMetadata, breadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "GLP-1 Medications Compared: Semaglutide, Tirzepatide & More",
  description:
    "An independent guide to every major GLP-1 medication — semaglutide, tirzepatide, retatrutide, liraglutide and compounded options. Brands, dosing, results, side effects and cost.",
  path: "/medications",
});

export default function MedicationsIndex() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Home", path: "/" },
              { name: "Medications", path: "/medications" },
            ]),
          ),
        }}
      />
      <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Medications", path: "/medications" }]} />

      <h1 className="font-serif text-4xl font-semibold text-foreground">GLP-1 medications</h1>
      <p className="mt-3 max-w-2xl text-lg leading-relaxed text-muted">
        Every major GLP-1 drug, explained plainly. Tap any medication for a full guide to how it
        works, how it's dosed, what results to expect, side effects, and what it costs.
      </p>

      <div className="mt-10 space-y-5">
        {MEDICATIONS.map((med) => (
          <Link
            key={med.slug}
            href={`/medications/${med.slug}`}
            className="group block rounded-2xl border border-border bg-surface p-6 transition-all hover:-translate-y-0.5 hover:shadow-md"
          >
            <div className="flex flex-wrap items-center gap-3">
              <h2 className="text-2xl font-bold text-foreground">{med.name}</h2>
              <span
                className="rounded-full px-2.5 py-0.5 text-xs font-semibold text-white"
                style={{ backgroundColor: med.accent }}
              >
                {med.statusLabel}
              </span>
            </div>
            <p className="mt-1 text-sm text-muted">
              {med.drugClass} · {med.route} · Sold as {med.brandNames.join(", ")}
            </p>
            <p className="mt-3 max-w-3xl leading-relaxed text-foreground">{med.oneLiner}</p>
            <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary">
              Read the full guide <ArrowRight size={15} className="transition-transform group-hover:translate-x-0.5" />
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
