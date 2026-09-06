import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { BATTLES } from "@/data/battles";
import { getProvider } from "@/data/providers";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { pageMetadata, breadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "GLP-1 Provider Comparisons: Head-to-Head Program Match-Ups",
  description:
    "Side-by-side GLP-1 telehealth comparisons — Embody, Ro, altRx, TrimRX and more. We skip the scoreboard and match each program to your priorities.",
  path: "/compare",
});

export default function CompareIndex() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Home", path: "/" },
              { name: "Compare", path: "/compare" },
            ]),
          ),
        }}
      />
      <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Compare", path: "/compare" }]} />

      <h1 className="font-serif text-4xl font-semibold text-foreground">GLP-1 program comparisons</h1>
      <p className="mt-3 max-w-2xl text-lg leading-relaxed text-muted">
        We compare programs a little differently: no gamified scoreboard. Each match-up opens with a
        plain "choose this one if…", lays out the specs, then routes you to a pick based on
        <em> your</em> priority — price, brand-name access, shipping, or coaching.
      </p>

      <div className="mt-8 space-y-4">
        {BATTLES.map((b) => {
          const a = getProvider(b.a);
          const bp = getProvider(b.b);
          if (!a || !bp) return null;
          return (
            <Link
              key={b.slug}
              href={`/compare/${b.slug}`}
              className="group block rounded-2xl border border-border bg-surface p-5 transition-all hover:-translate-y-0.5 hover:shadow-md sm:p-6"
            >
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-3">
                  <div className="relative h-8 w-20">
                    <Image src={a.logo} alt={`${a.name} logo`} fill className="object-contain object-left" sizes="80px" />
                  </div>
                  <span className="text-sm font-bold text-muted">vs</span>
                  <div className="relative h-8 w-20">
                    <Image src={bp.logo} alt={`${bp.name} logo`} fill className="object-contain object-left" sizes="80px" />
                  </div>
                </div>
                <ArrowRight size={16} className="ml-auto text-primary transition-transform group-hover:translate-x-0.5" />
              </div>
              <h2 className="mt-3 text-lg font-bold text-foreground">{b.title}</h2>
              <p className="mt-1 text-sm leading-relaxed text-muted">{b.description}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
