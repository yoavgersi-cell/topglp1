import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { BATTLES } from "@/data/battles";
import { PROVIDERS, getProvider } from "@/data/providers";
import { allBattleSlugs } from "@/data/battle-engine";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { pageMetadata, breadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "GLP-1 Provider Comparisons: Every Program, Head-to-Head",
  description:
    "Compare every online GLP-1 program head-to-head — Embody, Ro, altRx, TrimRX and 17 more. Real pricing, medications and credentials, matched to your priority.",
  path: "/compare",
});

const nameForSlug = (slug: string) => PROVIDERS.find((p) => p.slug === slug)?.name ?? slug;

export default function CompareIndex() {
  // Group every canonical pairing by its first provider for a browsable directory.
  const slugs = allBattleSlugs();
  const groups = new Map<string, { slug: string; other: string }[]>();
  for (const slug of slugs) {
    const m = slug.match(/^(.+)-vs-(.+)$/);
    if (!m) continue;
    const [, a, b] = m;
    if (!groups.has(a)) groups.set(a, []);
    groups.get(a)!.push({ slug, other: nameForSlug(b) });
  }
  // Order groups by provider rank.
  const orderedFirsts = PROVIDERS.slice()
    .sort((x, y) => x.rank - y.rank)
    .map((p) => p.slug)
    .filter((s) => groups.has(s));

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
        Every online GLP-1 program, head-to-head. We skip the gamified scoreboard — each match-up opens with a plain
        "choose this one if…", lays out real pricing and specs, then points you to a pick based on <em>your</em>{" "}
        priority. {slugs.length} comparisons and counting.
      </p>

      {/* Featured */}
      <h2 className="mt-10 font-serif text-2xl font-semibold text-foreground">Featured match-ups</h2>
      <div className="mt-5 space-y-4">
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
              <h3 className="mt-3 text-lg font-bold text-foreground">{b.title}</h3>
              <p className="mt-1 text-sm leading-relaxed text-muted">{b.description}</p>
            </Link>
          );
        })}
      </div>

      {/* Full directory */}
      <h2 className="mt-12 font-serif text-2xl font-semibold text-foreground">All comparisons</h2>
      <p className="mt-2 text-sm text-muted">Every pairing, grouped by program.</p>
      <div className="mt-6 space-y-6">
        {orderedFirsts.map((firstSlug) => (
          <div key={firstSlug}>
            <h3 className="flex items-center gap-2 text-sm font-semibold text-foreground">
              <Image
                src={PROVIDERS.find((p) => p.slug === firstSlug)?.logo ?? `/logos/${firstSlug}.svg`}
                alt=""
                width={18}
                height={18}
                className="h-4 w-4 object-contain"
              />
              {nameForSlug(firstSlug)} vs…
            </h3>
            <div className="mt-2 flex flex-wrap gap-2">
              {groups.get(firstSlug)!.map((g) => (
                <Link
                  key={g.slug}
                  href={`/compare/${g.slug}`}
                  className="inline-flex items-center rounded-full border border-border bg-surface px-3 py-1.5 text-xs text-foreground transition-colors hover:border-primary"
                >
                  {g.other}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
