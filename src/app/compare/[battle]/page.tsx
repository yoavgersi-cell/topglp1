import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowUpRight,
  ArrowRight,
  Check,
  X,
  Sparkles,
  Target,
  DollarSign,
  Pill,
  ShieldCheck,
  ScrollText,
} from "lucide-react";
import { BATTLES, BATTLE_SLUGS, getBattle, type Side } from "@/data/battles";
import { getProvider, type Provider } from "@/data/providers";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { Faq } from "@/components/faq";
import { MedicalDisclaimer } from "@/components/medical-disclaimer";
import { CONTENT_REVIEWED } from "@/lib/site";
import { pageMetadata, breadcrumbSchema, faqSchema } from "@/lib/seo";

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
    title: `${b.title}: Pricing, Medications & Which Is Right for You (2026)`,
    description: b.description,
    path: `/compare/${b.slug}`,
  });
}

// Full spec table — pulled straight from structured provider specs.
const SPEC_ROWS: { label: string; get: (p: Provider) => string }[] = [
  { label: "Starting price", get: (p) => p.specs.startingPrice },
  { label: "Compounded semaglutide", get: (p) => p.specs.semaglutide },
  { label: "Tirzepatide", get: (p) => p.specs.tirzepatide },
  { label: "GLP-1 + GIP option", get: (p) => p.specs.gipOption },
  { label: "Offering type", get: (p) => p.specs.offeringType },
  { label: "New-patient offer", get: (p) => p.specs.firstMonthOffer },
  { label: "Billing model", get: (p) => p.specs.billing },
  { label: "What's included", get: (p) => p.specs.included.join(", ") },
  { label: "Lab work", get: (p) => p.specs.labs },
  { label: "Shipping", get: (p) => p.specs.shipping },
  { label: "Refills", get: (p) => p.specs.refills },
  { label: "States", get: (p) => p.specs.states },
  { label: "Pharmacy", get: (p) => p.specs.pharmacy },
  { label: "Clinicians", get: (p) => p.specs.clinicians },
  { label: "Insurance", get: (p) => p.specs.insurance },
  { label: "Consultation", get: (p) => p.specs.consult },
  { label: "Our rating", get: (p) => `${p.rating.toFixed(1)} · ${p.ratingLabel}` },
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

function ProsCons({ provider }: { provider: Provider }) {
  return (
    <div className="rounded-2xl border border-border bg-surface p-5">
      <div className="flex items-center gap-2">
        <div className="relative h-6 w-20">
          <Image src={provider.logo} alt={`${provider.name} logo`} fill className="object-contain object-left" sizes="80px" />
        </div>
      </div>
      <div className="mt-4 space-y-3">
        <div>
          <h4 className="text-xs font-semibold uppercase tracking-wide text-primary">Pros</h4>
          <ul className="mt-2 space-y-1.5">
            {provider.pros.map((p) => (
              <li key={p} className="flex items-start gap-2 text-sm text-foreground">
                <Check size={15} className="mt-0.5 shrink-0 text-primary" />
                <span>{p}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-xs font-semibold uppercase tracking-wide text-accent">Cons</h4>
          <ul className="mt-2 space-y-1.5">
            {provider.cons.map((c) => (
              <li key={c} className="flex items-start gap-2 text-sm text-muted">
                <X size={15} className="mt-0.5 shrink-0 text-accent" />
                <span>{c}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(b.faqs)) }}
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
          Last reviewed {CONTENT_REVIEWED} · Pricing is provider-reported and changes often — confirm current
          rates on each provider's site. We may earn a commission.
        </p>
      </header>

      <MedicalDisclaimer className="mt-6" />

      {/* Verdict panel — decision-first, no scoreboard */}
      <section className="mt-8 grid gap-4 sm:grid-cols-2">
        <div className="rounded-2xl border border-border bg-surface p-6">
          <div className="relative h-6 w-24">
            <Image src={a.logo} alt={`${a.name} logo`} fill className="object-contain object-left" sizes="96px" />
          </div>
          <p className="mt-3 text-sm font-semibold uppercase tracking-wide text-primary">Choose {a.name} if…</p>
          <p className="mt-1 leading-relaxed text-foreground">{b.chooseA}</p>
        </div>
        <div className="rounded-2xl border border-border bg-surface p-6">
          <div className="relative h-6 w-24">
            <Image src={bp.logo} alt={`${bp.name} logo`} fill className="object-contain object-left" sizes="96px" />
          </div>
          <p className="mt-3 text-sm font-semibold uppercase tracking-wide text-accent">Choose {bp.name} if…</p>
          <p className="mt-1 leading-relaxed text-foreground">{b.chooseB}</p>
        </div>
      </section>

      {/* Cost breakdown */}
      <section className="mt-10">
        <h2 className="flex items-center gap-2 font-serif text-2xl font-semibold text-foreground">
          <DollarSign size={20} className="text-primary" /> Cost breakdown
        </h2>
        <p className="mt-2 text-sm text-muted">The numbers that actually decide it, side by side.</p>
        <div className="mt-4 overflow-x-auto rounded-2xl border border-border">
          <table className="w-full min-w-[560px] border-collapse text-sm">
            <thead>
              <tr className="bg-surface">
                <th className="p-4 text-left font-medium text-muted"></th>
                <th className="border-l border-border p-4"><ProviderHead provider={a} /></th>
                <th className="border-l border-border p-4"><ProviderHead provider={bp} /></th>
              </tr>
            </thead>
            <tbody>
              {b.costRows.map((row, i) => (
                <tr key={row.label} className={i % 2 === 0 ? "bg-background" : "bg-surface"}>
                  <th className="p-4 text-left align-top text-xs font-semibold uppercase tracking-wide text-muted">
                    {row.label}
                  </th>
                  <td className="border-l border-border p-4 align-top font-medium text-foreground">{row.a}</td>
                  <td className="border-l border-border p-4 align-top font-medium text-foreground">{row.b}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="prose-body mt-5">
          {b.pricingAnalysis.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </section>

      {/* Full spec table */}
      <section className="mt-10">
        <h2 className="flex items-center gap-2 font-serif text-2xl font-semibold text-foreground">
          <ScrollText size={20} className="text-primary" /> Full specs, side by side
        </h2>
        <div className="mt-4 overflow-x-auto rounded-2xl border border-border">
          <table className="w-full min-w-[600px] border-collapse text-sm">
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

      {/* Medications & formulations */}
      <section className="mt-10">
        <h2 className="flex items-center gap-2 font-serif text-2xl font-semibold text-foreground">
          <Pill size={20} className="text-primary" /> Medications &amp; formulations
        </h2>
        <ul className="prose-body mt-3 space-y-2">
          {b.medicationNotes.map((n) => (
            <li key={n} className="flex items-start gap-2">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
              <span>{n}</span>
            </li>
          ))}
        </ul>
        <p className="mt-3 text-sm text-muted">
          New to the drugs themselves? Read our plain-language guides to{" "}
          <Link href="/medications/semaglutide" className="font-semibold text-primary underline">semaglutide</Link>{" "}
          and{" "}
          <Link href="/medications/tirzepatide" className="font-semibold text-primary underline">tirzepatide</Link>.
        </p>
      </section>

      {/* Pros & cons */}
      <section className="mt-10">
        <h2 className="font-serif text-2xl font-semibold text-foreground">Pros &amp; cons</h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <ProsCons provider={a} />
          <ProsCons provider={bp} />
        </div>
      </section>

      {/* Where each has the edge */}
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

      {/* Match by priority */}
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

      {/* FAQ */}
      <section className="mt-10">
        <h2 className="font-serif text-2xl font-semibold text-foreground">{b.title}: common questions</h2>
        <div className="mt-4">
          <Faq items={b.faqs} />
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

      {/* Methodology / credibility */}
      <section className="mt-8 rounded-2xl border border-border bg-surface p-6">
        <h2 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-muted">
          <ShieldCheck size={16} className="text-primary" /> How we compare — and how to read this
        </h2>
        <p className="mt-2 text-sm leading-relaxed text-muted">
          We compare programs on the factors that actually affect a patient: real price (including whether it's
          compounded or branded), medications and formulations offered, shipping, pharmacy accreditation and
          clinician model, insurance stance, and commitment. We don't crown a single winner because the right
          choice depends on your priorities and your insurance. Pricing is provider-reported and changes
          frequently — and compounded-drug availability shifts with FDA shortage status — so always confirm the
          current details on the provider's own site before enrolling. Affiliate relationships do not change a
          program's placement. This page is educational and not medical advice; see our{" "}
          <Link href="/disclaimer" className="font-semibold text-primary underline">disclaimer</Link>.
        </p>
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
