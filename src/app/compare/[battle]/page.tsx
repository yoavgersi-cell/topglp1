import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, ArrowRight, Check, Sparkles, Target } from "lucide-react";
import { BATTLES, BATTLE_SLUGS, getBattle, type Side } from "@/data/battles";
import { getProvider, type Provider } from "@/data/providers";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { CONTENT_REVIEWED } from "@/lib/site";
import { pageMetadata, breadcrumbSchema } from "@/lib/seo";

export const revalidate = 3600;

export function generateStaticParams() {
  return BATTLE_SLUGS.map((battle) => ({ battle }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ battle: string }>;
}): Promise<Metadata> {
  const { battle } = await params;
  const b = getBattle(battle);
  if (!b) return {};
  return pageMetadata({
    title: `${b.title}: Which GLP-1 Program Is Right for You? (2026)`,
    description: b.description,
    path: `/compare/${b.slug}`,
  });
}

// Rows of the at-a-glance spec table, pulled straight from provider specs.
const SPEC_ROWS: { label: string; get: (p: Provider) => string }[] = [
  { label: "Starting price", get: (p) => p.specs.startingPrice },
  { label: "Semaglutide", get: (p) => p.specs.semaglutide },
  { label: "Tirzepatide", get: (p) => p.specs.tirzepatide },
  { label: "Offering", get: (p) => p.specs.offeringType },
  { label: "Shipping", get: (p) => p.specs.shipping },
  { label: "Insurance", get: (p) => p.specs.insurance },
  { label: "Consultation", get: (p) => p.specs.consult },
  { label: "Rating", get: (p) => `${p.rating.toFixed(1)} · ${p.ratingLabel}` },
];

function ProviderHead({ provider }: { provider: Provider }) {
  return (
    <div className="flex flex-col items-center gap-2 text-center">
      <div className="relative h-9 w-24">
        <Image src={provider.logo} alt={`${provider.name} logo`} fill className="object-contain" sizes="96px" />
      </div>
      <span className="text-sm font-bold text-foreground">{provider.name}</span>
    </div>
  );
}

function EdgeBadge({ side, aName, bName }: { side: Side; aName: string; bName: string }) {
  if (side === "even") {
    return <span className="rounded-full bg-border/60 px-2.5 py-0.5 text-xs font-semibold text-muted">Toss-up</span>;
  }
  return (
    <span className="rounded-full bg-primary-light px-2.5 py-0.5 text-xs font-semibold text-primary">
      {side === "a" ? aName : bName}
    </span>
  );
}

export default async function BattlePage({ params }: { params: Promise<{ battle: string }> }) {
  const { battle } = await params;
  const b = getBattle(battle);
  if (!b) notFound();

  const a = getProvider(b.a);
  const bp = getProvider(b.b);
  if (!a || !bp) notFound();

  const otherBattles = BATTLES.filter((x) => x.slug !== b.slug).slice(0, 4);

  return (
    <article className="mx-auto max-w-4xl px-4 py-10 sm:px-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Home", path: "/" },
              { name: "Compare", path: "/compare" },
              { name: b.title, path: `/compare/${b.slug}` },
            ]),
          ),
        }}
      />
      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "Compare", path: "/compare" },
          { name: b.title, path: `/compare/${b.slug}` },
        ]}
      />

      <header>
        <h1 className="font-serif text-4xl font-semibold leading-tight text-foreground">{b.title}</h1>
        <p className="mt-3 text-lg leading-relaxed text-muted">{b.intro}</p>
        <p className="mt-3 text-xs text-muted">
          Last reviewed {CONTENT_REVIEWED} · Pricing changes often — confirm on each provider's site. We may earn a commission.
        </p>
      </header>

      {/* Verdict panel — decision-first, no scoreboard */}
      <section className="mt-8 grid gap-4 sm:grid-cols-2">
        <div className="rounded-2xl border border-border bg-surface p-6">
          <div className="flex items-center gap-2">
            <Image src={a.logo} alt={`${a.name} logo`} width={80} height={28} className="h-6 w-auto object-contain" />
          </div>
          <p className="mt-3 text-sm font-semibold uppercase tracking-wide text-primary">Choose {a.name} if…</p>
          <p className="mt-1 leading-relaxed text-foreground">{b.chooseA}</p>
        </div>
        <div className="rounded-2xl border border-border bg-surface p-6">
          <div className="flex items-center gap-2">
            <Image src={bp.logo} alt={`${bp.name} logo`} width={80} height={28} className="h-6 w-auto object-contain" />
          </div>
          <p className="mt-3 text-sm font-semibold uppercase tracking-wide text-accent">Choose {bp.name} if…</p>
          <p className="mt-1 leading-relaxed text-foreground">{b.chooseB}</p>
        </div>
      </section>

      {/* At-a-glance spec table */}
      <section className="mt-10">
        <h2 className="font-serif text-2xl font-semibold text-foreground">At a glance</h2>
        <div className="mt-4 overflow-x-auto rounded-2xl border border-border">
          <table className="w-full min-w-[520px] border-collapse text-sm">
            <thead>
              <tr className="bg-surface">
                <th className="p-4 text-left font-medium text-muted"></th>
                <th className="border-l border-border p-4"><ProviderHead provider={a} /></th>
                <th className="border-l border-border p-4"><ProviderHead provider={bp} /></th>
              </tr>
            </thead>
            <tbody>
              {SPEC_ROWS.map((row, i) => (
                <tr key={row.label} className={i % 2 === 0 ? "bg-background" : "bg-surface"}>
                  <th className="p-4 text-left align-top text-xs font-semibold uppercase tracking-wide text-muted">
                    {row.label}
                  </th>
                  <td className="border-l border-border p-4 align-top text-foreground">{row.get(a)}</td>
                  <td className="border-l border-border p-4 align-top text-foreground">{row.get(bp)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Where each has the edge — trade-offs, not a score */}
      <section className="mt-10">
        <h2 className="flex items-center gap-2 font-serif text-2xl font-semibold text-foreground">
          <Sparkles size={20} className="text-primary" /> Where each one has the edge
        </h2>
        <p className="mt-2 text-sm text-muted">
          We don't tally a winner — that hides the trade-offs. Here's who leads on each dimension and why.
        </p>
        <div className="mt-5 overflow-hidden rounded-2xl border border-border">
          {b.edges.map((edge, i) => (
            <div
              key={edge.dimension}
              className={`flex flex-col gap-2 p-4 sm:flex-row sm:items-center sm:gap-4 ${i > 0 ? "border-t border-border" : ""}`}
            >
              <div className="sm:w-48 sm:shrink-0">
                <span className="text-sm font-semibold text-foreground">{edge.dimension}</span>
              </div>
              <div className="sm:w-28 sm:shrink-0">
                <EdgeBadge side={edge.leader} aName={a.name} bName={bp.name} />
              </div>
              <p className="text-sm text-muted">{edge.note}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Match by priority — the signature method */}
      <section className="mt-10">
        <h2 className="flex items-center gap-2 font-serif text-2xl font-semibold text-foreground">
          <Target size={20} className="text-primary" /> Match by your priority
        </h2>
        <p className="mt-2 text-sm text-muted">
          The fastest way to decide: find your top priority, see which program we'd point you to.
        </p>
        <div className="mt-5 space-y-3">
          {b.scenarios.map((s) => {
            const picked = s.pick === "a" ? a : bp;
            return (
              <div
                key={s.priority}
                className="flex flex-col gap-3 rounded-2xl border border-border bg-surface p-4 sm:flex-row sm:items-center"
              >
                <p className="flex-1 font-medium text-foreground">
                  <span className="text-muted">If your priority is</span> {s.priority}
                </p>
                <ArrowRight size={16} className="hidden shrink-0 text-border sm:block" />
                <div className="flex items-center gap-3 sm:w-64 sm:shrink-0">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-primary-light px-3 py-1 text-sm font-semibold text-primary">
                    <Check size={14} /> {picked.name}
                  </span>
                  <span className="text-xs text-muted">{s.why}</span>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Bottom line */}
      <section className="mt-10 rounded-2xl border border-border bg-primary-light/40 p-6">
        <h2 className="font-serif text-2xl font-semibold text-foreground">The bottom line</h2>
        <p className="mt-2 leading-relaxed text-foreground">{b.bottomLine}</p>
        <div className="mt-5 flex flex-wrap gap-3">
          <a
            href={a.affiliateUrl}
            target="_blank"
            rel="sponsored nofollow noopener"
            className="inline-flex items-center gap-1 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white hover:bg-primary-dark"
          >
            {a.ctaText}: {a.name} <ArrowUpRight size={15} />
          </a>
          <a
            href={bp.affiliateUrl}
            target="_blank"
            rel="sponsored nofollow noopener"
            className="inline-flex items-center gap-1 rounded-full border border-border bg-surface px-5 py-2.5 text-sm font-semibold text-foreground hover:border-primary"
          >
            {bp.ctaText}: {bp.name} <ArrowUpRight size={15} />
          </a>
        </div>
      </section>

      {/* Other comparisons */}
      <nav className="mt-12 border-t border-border pt-8">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-muted">More comparisons</h2>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          {otherBattles.map((x) => (
            <Link
              key={x.slug}
              href={`/compare/${x.slug}`}
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
