import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { GUIDES } from "@/data/guides";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { pageMetadata, breadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "GLP-1 Guides: Dosing, Side Effects, Cost & How to Get Treatment",
  description:
    "Plain-language GLP-1 guides — how the medications work, dosing schedules, side effects, results timelines, what to eat, cost and insurance, and how to get treatment safely.",
  path: "/guides",
});

export default function GuidesIndex() {
  const categories = Array.from(new Set(GUIDES.map((g) => g.category)));

  return (
    <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Home", path: "/" },
              { name: "Guides", path: "/guides" },
            ]),
          ),
        }}
      />
      <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Guides", path: "/guides" }]} />

      <h1 className="font-serif text-4xl font-semibold text-foreground">GLP-1 guides</h1>
      <p className="mt-3 max-w-2xl text-lg leading-relaxed text-muted">
        Everything you'd want explained before and during treatment — written to inform, not to sell.
      </p>

      {categories.map((cat) => (
        <div key={cat} className="mt-10">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-primary">{cat}</h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            {GUIDES.filter((g) => g.category === cat).map((g) => (
              <Link
                key={g.slug}
                href={`/guides/${g.slug}`}
                className="group flex flex-col rounded-2xl border border-border bg-surface p-5 transition-all hover:-translate-y-0.5 hover:shadow-md"
              >
                <h3 className="font-semibold leading-snug text-foreground">{g.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{g.description}</p>
                <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-primary">
                  Read · {g.readTime} <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
