import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Star, ArrowRight, Trophy } from "lucide-react";
import { PROVIDERS } from "@/data/providers";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { pageMetadata, breadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "GLP-1 Program Reviews 2026: Embody, altRx, Ro & More",
  description:
    "Independent reviews of the top telehealth GLP-1 programs — pricing, medications, pharmacy credentials, pros and cons, and who each is best for.",
  path: "/reviews",
});

export default function ReviewsIndex() {
  const sorted = [...PROVIDERS].sort((x, y) => x.rank - y.rank);

  return (
    <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Home", path: "/" },
              { name: "Reviews", path: "/reviews" },
            ]),
          ),
        }}
      />
      <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Reviews", path: "/reviews" }]} />

      <h1 className="font-serif text-4xl font-semibold text-foreground">GLP-1 program reviews</h1>
      <p className="mt-3 max-w-2xl text-lg leading-relaxed text-muted">
        In-depth, independent reviews of each telehealth GLP-1 program — real pricing, medications offered, pharmacy
        credentials, and honest pros and cons.
      </p>

      <div className="mt-8 space-y-4">
        {sorted.map((p) => (
          <Link
            key={p.id}
            href={`/reviews/${p.slug}`}
            className="group block rounded-2xl border border-border bg-surface p-5 transition-all hover:-translate-y-0.5 hover:shadow-md sm:p-6"
          >
            <div className="flex flex-wrap items-center gap-4">
              <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-primary-light text-sm font-bold text-primary">
                {p.rank}
              </span>
              <div className="relative h-8 w-28">
                <Image src={p.logo} alt={`${p.name} logo`} fill className="object-contain object-left" sizes="112px" />
              </div>
              <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary">
                <Star size={14} className="fill-primary text-primary" /> {p.rating.toFixed(1)}
              </span>
              {p.rank === 1 && (
                <span className="inline-flex items-center gap-1 rounded-full bg-primary px-2 py-0.5 text-[11px] font-bold uppercase text-white">
                  <Trophy size={11} /> Top pick
                </span>
              )}
              <ArrowRight size={16} className="ml-auto text-primary transition-transform group-hover:translate-x-0.5" />
            </div>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              {p.glp1Focus} {p.specs.standout}.
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
