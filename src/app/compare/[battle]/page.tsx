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
  Star,
} from "lucide-react";
import { BATTLES, type Side } from "@/data/battles";
import { allBattleSlugs, resolveBattle } from "@/data/battle-engine";
import { getProvider, type Provider } from "@/data/providers";
import { PROVIDERS } from "@/data/providers";
import { bestForTag } from "@/data/rankings";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { EditorialByline } from "@/components/editorial-byline";
import { Faq } from "@/components/faq";
import { MedicalDisclaimer } from "@/components/medical-disclaimer";
import { TrustpilotStars } from "@/components/trustpilot";
import { TrustpilotSection } from "@/components/trustpilot-section";
import { pageMetadata, breadcrumbSchema, faqSchema } from "@/lib/seo";

export const revalidate = 3600;
export const dynamicParams = false;

export function generateStaticParams() {
  return allBattleSlugs().map((battle) => ({ battle }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ battle: string }>;
}): Promise<Metadata> {
  const { battle } = await params;
  const b = resolveBattle(battle);
  if (!b) return {};
  return pageMetadata({
    title: `${b.title}: Cost, Pros & Cons (2026)`,
    absoluteTitle: true,
    description: b.description,
    path: `/compare/${b.slug}`,
  });
}

// ── Small shared bits ────────────────────────────────────────────────────────

// Section eyebrow + heading, matched to the comparison design: a short uppercase
// kicker in brand blue over a bold sans heading.
function SectionHead({ kicker, title, blurb }: { kicker: string; title: React.ReactNode; blurb?: string }) {
  return (
    <div className="mb-6 max-w-[760px]">
      <p className="mb-2 text-[12px] font-bold uppercase tracking-[0.07em] text-primary">{kicker}</p>
      <h2 className="text-[23px] font-bold leading-tight text-foreground sm:text-[24px]">{title}</h2>
      {blurb && <p className="mt-3 text-[15px] leading-[1.8] text-muted">{blurb}</p>}
    </div>
  );
}

function LicensedBadge() {
  return (
    <span className="inline-flex items-center gap-1 rounded-full border border-emerald-200 bg-emerald-50 px-2 py-0.5 text-[11px] font-semibold text-emerald-700">
      <ShieldCheck size={12} strokeWidth={2.5} /> Licensed telehealth
    </span>
  );
}

// Inline Trustpilot rating for the compact provider cards. Renders nothing when
// the provider has no public aggregate (we never invent a score).
function TrustpilotInline({ provider }: { provider: Provider }) {
  const tp = provider.externalReviews;
  if (!tp?.score || tp.scoreValue == null) return null;
  return (
    <span className="inline-flex items-center gap-1.5 text-[12.5px]">
      <TrustpilotStars value={tp.scoreValue} max={tp.scoreMax} size={15} />
      <span className="font-bold text-foreground">{tp.score}</span>
      {tp.count != null && <span className="text-muted">({tp.count.toLocaleString()})</span>}
    </span>
  );
}

function treatmentsOf(p: Provider): string {
  const t = [
    !p.specs.semaglutide.startsWith("—") && "Semaglutide",
    !p.specs.tirzepatide.startsWith("—") && "Tirzepatide",
  ].filter(Boolean);
  return t.length ? t.join(" · ") : p.specs.offeringType;
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

function ProviderHead({ provider }: { provider: Provider }) {
  return (
    <div className="flex justify-center">
      <div className="relative h-10 w-28">
        <Image src={provider.logo} alt={provider.name} fill className="object-contain" sizes="112px" />
      </div>
    </div>
  );
}

function ProsCons({ provider }: { provider: Provider }) {
  return (
    <div className="rounded-2xl border border-border bg-surface p-5 shadow-sm">
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
                <Check size={15} className="mt-0.5 shrink-0 text-emerald-500" strokeWidth={2.5} />
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

// Compact "VS" comparison card used in the two-up hero grid.
function BattleCard({ provider }: { provider: Provider }) {
  return (
    <div className="relative flex h-full flex-col rounded-2xl border border-border bg-surface px-6 pb-6 pt-7 shadow-sm">
      <div className="mb-3 flex h-[40px] w-[120px] items-center">
        <div className="relative h-full w-full">
          <Image src={provider.logo} alt={`${provider.name} logo`} fill className="object-contain object-left" sizes="120px" />
        </div>
      </div>

      <div className="mb-3 flex flex-wrap items-center gap-x-3 gap-y-2 border-b border-border pb-3">
        <TrustpilotInline provider={provider} />
        <LicensedBadge />
      </div>

      <p className="mb-4 text-[14px] leading-relaxed text-muted">{provider.tagline}</p>

      <ul className="mb-5 space-y-2">
        {provider.highlights.slice(0, 3).map((h) => (
          <li key={h} className="flex items-start gap-2 text-[13px] text-foreground">
            <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emerald-500" strokeWidth={2.5} />
            {h}
          </li>
        ))}
      </ul>

      {provider.affiliateUrl !== "#" && (
        <a
          href={provider.affiliateUrl}
          target="_blank"
          rel="sponsored nofollow noopener"
          className="mt-auto flex h-[44px] w-full items-center justify-center gap-1.5 rounded-xl bg-primary text-[14px] font-bold text-white transition-colors hover:bg-primary-dark"
        >
          Visit {provider.name}
          <ArrowRight className="h-3.5 w-3.5" strokeWidth={2.5} />
        </a>
      )}
    </div>
  );
}

export default async function BattlePage({ params }: { params: Promise<{ battle: string }> }) {
  const { battle } = await params;
  const b = resolveBattle(battle);
  if (!b) notFound();

  const a = getProvider(b.a);
  const bp = getProvider(b.b);
  if (!a || !bp) notFound();

  const winner = getProvider(b.winner) ?? a;
  const winnerIsA = b.winner === a.id;
  const runnerUp = winnerIsA ? bp : a;
  const showScorePill = !b.splitVerdict && winner.rating > runnerUp.rating;

  const otherBattles = BATTLES.filter((x) => x.slug !== b.slug).slice(0, 4);

  const quickRows: { label: string; a: string; b: string }[] = [
    { label: "Starting price", a: a.specs.startingPrice, b: bp.specs.startingPrice },
    { label: "Medications", a: treatmentsOf(a), b: treatmentsOf(bp) },
    { label: "Offering", a: a.specs.offeringType, b: bp.specs.offeringType },
    { label: "Shipping", a: a.specs.shipping, b: bp.specs.shipping },
  ];

  // Full spec table rows.
  const SPEC_ROWS: { label: string; get: (p: Provider) => string }[] = [
    { label: "Why choose it", get: (p) => p.specs.standout },
    { label: "Watch out for", get: (p) => p.specs.watchOut },
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

  return (
    <div className="min-h-screen bg-background">
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

      {/* ───── HERO ───── */}
      <section className="relative overflow-hidden border-b border-border bg-surface">
        <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary via-[#1a8cd8] to-primary" />
        <div className="mx-auto max-w-[1100px] px-4 pb-6 pt-5 sm:px-6 sm:pb-12 sm:pt-10">
          <Breadcrumbs
            items={[
              { name: "Home", path: "/" },
              { name: "Compare", path: "/compare" },
              { name: b.title, path: `/compare/${b.slug}` },
            ]}
          />
          <h1 className="text-[26px] font-extrabold leading-[1.18] text-foreground sm:text-[38px] sm:leading-[1.15]">
            {b.title}
          </h1>
          <p className="mt-2 max-w-2xl text-[14px] leading-relaxed text-muted sm:mt-3 sm:text-[15px]">
            {b.description}
          </p>
          <EditorialByline chips={["21 programs compared", "Independent — rankings aren't for sale"]} />
          <MedicalDisclaimer className="mt-4 max-w-[760px]" />
        </div>
      </section>

      <div className="mx-auto max-w-[1100px] px-4 pb-28 pt-8 sm:px-6 sm:pb-12 sm:pt-10">
        {/* ───── THE VERDICT ───── */}
        {b.splitVerdict ? (
          <div className="mb-10 grid max-w-[960px] gap-4 sm:grid-cols-2">
            {[
              { p: a, forWho: b.splitVerdict.aFor, reason: b.splitVerdict.aReason },
              { p: bp, forWho: b.splitVerdict.bFor, reason: b.splitVerdict.bReason },
            ].map(({ p, forWho, reason }) => (
              <div key={p.id} className="overflow-hidden rounded-2xl border border-primary/20 bg-surface shadow-sm">
                <div className="border-b border-border bg-primary-light/50 px-5 py-3">
                  <p className="text-[12px] font-bold uppercase tracking-[0.08em] text-primary">Best for {forWho}</p>
                </div>
                <div className="flex flex-col p-5">
                  <div className="relative h-7 w-24">
                    <Image src={p.logo} alt={`${p.name} logo`} fill className="object-contain object-left" sizes="96px" />
                  </div>
                  <p className="mt-3 flex-1 text-[15px] leading-[1.75] text-foreground">{reason}</p>
                  <div className="mt-3"><TrustpilotInline provider={p} /></div>
                  {p.affiliateUrl !== "#" && (
                    <a
                      href={p.affiliateUrl}
                      target="_blank"
                      rel="sponsored nofollow noopener"
                      className="mt-4 flex h-11 w-full items-center justify-center gap-1.5 rounded-xl bg-primary text-sm font-bold text-white transition-colors hover:bg-primary-dark"
                    >
                      {p.ctaText}: {p.name} <ArrowUpRight size={15} />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="mb-10 max-w-[820px] overflow-hidden rounded-2xl border border-primary/20 bg-surface shadow-sm">
            <div className="flex items-center justify-between gap-3 border-b border-border bg-primary-light/50 px-5 py-3 sm:px-6">
              <p className="text-[12px] font-bold uppercase tracking-[0.08em] text-primary">Our top choice</p>
              {showScorePill && (
                <span className="flex items-center gap-1.5 whitespace-nowrap rounded-full bg-surface px-2.5 py-1 text-[11.5px] font-bold text-primary shadow-sm ring-1 ring-primary/15">
                  <Star className="h-3.5 w-3.5" strokeWidth={0} style={{ fill: "#FDB515", color: "#FDB515" }} />
                  {winner.rating.toFixed(1)}/10 vs {runnerUp.rating.toFixed(1)}/10
                </span>
              )}
            </div>
            <div className="flex items-start gap-4 p-5 sm:p-6">
              <div className="hidden h-[38px] w-[104px] shrink-0 items-center sm:flex">
                <div className="relative h-full w-full">
                  <Image src={winner.logo} alt={`${winner.name} logo`} fill className="object-contain object-left" sizes="104px" />
                </div>
              </div>
              <div className="flex-1">
                <p className="text-[15.5px] leading-[1.8] text-foreground sm:text-[16px]">
                  <span className="font-bold">{winner.name}</span> is our pick for most people here —{" "}
                  {b.winnerReason.charAt(0).toLowerCase() + b.winnerReason.slice(1)} The full reasoning, the numbers, and
                  the cases where {runnerUp.name} is the better call are all below.
                </p>
                {winner.affiliateUrl !== "#" && (
                  <a
                    href={winner.affiliateUrl}
                    target="_blank"
                    rel="sponsored nofollow noopener"
                    className="mt-4 inline-flex h-11 items-center justify-center gap-1.5 rounded-xl bg-primary px-6 text-sm font-bold text-white transition-colors hover:bg-primary-dark"
                  >
                    {winner.ctaText}: {winner.name} <ArrowUpRight size={15} />
                  </a>
                )}
              </div>
            </div>
          </div>
        )}

        {/* ───── AT A GLANCE ───── */}
        <div className="mb-12 overflow-hidden rounded-2xl border border-border bg-surface shadow-sm">
          <table className="w-full table-fixed border-collapse text-left">
            <thead>
              <tr className="border-b-2 border-border bg-background">
                <th className="w-[26%] py-3 pl-4 pr-2 text-[11px] font-bold uppercase tracking-[0.06em] text-muted sm:w-[22%] sm:text-[12px]">
                  At a glance
                </th>
                <th className="px-2 py-3 text-[13px] font-bold text-foreground sm:px-3 sm:text-[15px]">{a.name}</th>
                <th className="px-2 py-3 pr-4 text-[13px] font-bold text-foreground sm:px-3 sm:text-[15px]">{bp.name}</th>
              </tr>
            </thead>
            <tbody>
              {quickRows.map((row) => (
                <tr key={row.label} className="border-b border-border align-top last:border-0">
                  <td className="py-3 pl-4 pr-2 text-[12.5px] font-semibold leading-snug text-muted sm:text-[13.5px]">{row.label}</td>
                  <td className="break-words px-2 py-3 text-[12.5px] leading-snug text-foreground sm:px-3 sm:text-[14px]">{row.a}</td>
                  <td className="break-words px-2 py-3 pr-4 text-[12.5px] leading-snug text-foreground sm:px-3 sm:text-[14px]">{row.b}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="border-t border-border px-4 py-2.5 text-[11.5px] text-muted">
            Prices are each provider&rsquo;s published rate at our last check — confirm the final figure at checkout, as
            offers change.{" "}
            <Link href="/best-glp1-providers" className="font-medium text-primary underline underline-offset-2">
              How we rank
            </Link>
          </p>
        </div>

        {/* ───── PROVIDER CARDS + VS ───── */}
        <div className="relative mb-14 grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="absolute left-1/2 top-1/2 z-10 hidden -translate-x-1/2 -translate-y-1/2 sm:flex">
            <div className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-primary/20 bg-surface text-[13px] font-extrabold text-primary shadow-sm">
              VS
            </div>
          </div>
          <BattleCard provider={a} />
          <div className="-my-1 flex items-center justify-center sm:hidden">
            <div className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-primary/20 bg-surface text-[12px] font-extrabold text-primary">
              VS
            </div>
          </div>
          <BattleCard provider={bp} />
        </div>

        {/* ───── THE FULL BREAKDOWN (intro) ───── */}
        <div className="mb-10">
          <SectionHead
            kicker="The full breakdown"
            title={`${a.name} vs ${bp.name}: a closer look at each`}
            blurb={b.intro}
          />
        </div>

        {/* ───── Verdict panel — choose if ───── */}
        <section className="mb-14 grid gap-4 sm:grid-cols-2">
          {[
            { p: a, isWinner: winnerIsA, choose: b.chooseA, accent: "text-primary" as const },
            { p: bp, isWinner: !winnerIsA, choose: b.chooseB, accent: "text-accent" as const },
          ].map(({ p, isWinner, choose, accent }) => (
            <div
              key={p.id}
              className={`rounded-2xl border bg-surface p-6 shadow-sm ${isWinner ? "border-primary ring-1 ring-primary" : "border-border"}`}
            >
              <div className="flex items-center justify-between">
                <div className="relative h-6 w-24">
                  <Image src={p.logo} alt={`${p.name} logo`} fill className="object-contain object-left" sizes="96px" />
                </div>
                {isWinner && <span className="rounded-full bg-primary-light px-2 py-0.5 text-[11px] font-bold text-primary">OUR PICK</span>}
              </div>
              <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm">
                <span className="inline-flex items-center gap-1 font-bold text-primary">
                  <Star size={14} className="fill-primary text-primary" /> {p.rating.toFixed(1)}
                  <span className="font-normal text-muted">/10</span>
                </span>
                <span className="text-muted">#{p.rank} of {PROVIDERS.length}</span>
                <span className="text-muted">· {p.specs.startingPrice}</span>
              </div>
              <p className="mt-1 text-xs font-medium text-muted">Best for: {bestForTag(p.id)}</p>
              <p className={`mt-3 text-sm font-semibold uppercase tracking-wide ${accent}`}>Choose {p.name} if…</p>
              <p className="mt-1 leading-relaxed text-foreground">{choose}</p>
            </div>
          ))}
        </section>

        {/* ───── Cost breakdown ───── */}
        <section className="mb-14">
          <SectionHead
            kicker="The money"
            title={<span className="inline-flex items-center gap-2"><DollarSign size={20} className="text-primary" /> Cost breakdown</span>}
            blurb="The numbers that actually decide it, side by side."
          />
          <div className="overflow-x-auto rounded-2xl border border-border bg-surface shadow-sm">
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
                    <th className="p-4 text-left align-top text-xs font-semibold uppercase tracking-wide text-muted">{row.label}</th>
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

        {/* ───── Full specs ───── */}
        <section className="mb-14">
          <SectionHead
            kicker="Side by side"
            title={<span className="inline-flex items-center gap-2"><ScrollText size={20} className="text-primary" /> Full specs, compared</span>}
          />
          <div className="overflow-x-auto rounded-2xl border border-border bg-surface shadow-sm">
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
                    <th className="p-4 text-left align-top text-xs font-semibold uppercase tracking-wide text-muted">{row.label}</th>
                    <td className="border-l border-border p-4 align-top text-foreground">{row.get(a)}</td>
                    <td className="border-l border-border p-4 align-top text-foreground">{row.get(bp)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ───── Medications ───── */}
        <section className="mb-14">
          <SectionHead
            kicker="The medicine"
            title={<span className="inline-flex items-center gap-2"><Pill size={20} className="text-primary" /> Medications &amp; formulations</span>}
          />
          <ul className="prose-body space-y-2">
            {b.medicationNotes.map((n) => (
              <li key={n} className="flex items-start gap-2">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                <span>{n}</span>
              </li>
            ))}
          </ul>
          <p className="mt-3 text-sm text-muted">
            New to the drugs themselves? Read our plain-language guides to{" "}
            <Link href="/medications/semaglutide" className="font-semibold text-primary underline">semaglutide</Link>,{" "}
            <Link href="/medications/tirzepatide" className="font-semibold text-primary underline">tirzepatide</Link>, and the
            new{" "}
            <Link href="/glp1-pills" className="font-semibold text-primary underline">GLP-1 pills</Link>.
          </p>
        </section>

        {/* ───── Pros & cons ───── */}
        <section className="mb-14">
          <SectionHead kicker="The trade-offs" title="Pros &amp; cons" />
          <div className="grid gap-4 sm:grid-cols-2">
            <ProsCons provider={a} />
            <ProsCons provider={bp} />
          </div>
        </section>

        {/* ───── Real customer reviews ───── */}
        {(a.externalReviews || bp.externalReviews) && (
          <div className="mb-4">
            {a.externalReviews && (
              <TrustpilotSection providerName={a.name} data={a.externalReviews} anchorId={`reviews-${a.id}`} />
            )}
            {bp.externalReviews && (
              <TrustpilotSection providerName={bp.name} data={bp.externalReviews} anchorId={`reviews-${bp.id}`} />
            )}
          </div>
        )}

        {/* ───── Where each has the edge ───── */}
        <section className="mb-14 mt-14">
          <SectionHead
            kicker="Head to head"
            title={<span className="inline-flex items-center gap-2"><Sparkles size={20} className="text-primary" /> Where each one wins</span>}
            blurb="We don't tally a single winner — that hides the trade-offs. Here's who leads on each dimension, and why."
          />
          <div className="overflow-hidden rounded-2xl border border-border bg-surface shadow-sm">
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

        {/* ───── Match by priority ───── */}
        <section className="mb-14">
          <SectionHead
            kicker="Pick fast"
            title={<span className="inline-flex items-center gap-2"><Target size={20} className="text-primary" /> Match it to your priority</span>}
            blurb="Find your top priority, see which program we'd point you to."
          />
          <div className="space-y-3">
            {b.scenarios.map((s) => {
              const picked = s.pick === "a" ? a : bp;
              return (
                <div
                  key={s.priority}
                  className="flex flex-col gap-3 rounded-2xl border border-border bg-surface p-4 shadow-sm sm:flex-row sm:items-center"
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

        {/* ───── FAQ ───── */}
        <section className="mb-14">
          <SectionHead kicker="Questions" title={`${b.title}: common questions`} />
          <Faq items={b.faqs} />
        </section>

        {/* ───── Bottom line ───── */}
        <section className="mb-10 rounded-2xl border border-primary/20 bg-primary-light/40 p-6 shadow-sm">
          <h2 className="text-[22px] font-bold text-foreground">The bottom line</h2>
          <p className="mt-2 leading-relaxed text-foreground">{b.bottomLine}</p>
          <div className="mt-5 flex flex-wrap gap-3">
            <a
              href={a.affiliateUrl}
              target="_blank"
              rel="sponsored nofollow noopener"
              className="inline-flex h-12 items-center justify-center gap-1.5 rounded-xl bg-primary px-6 text-sm font-bold text-white shadow-sm transition-colors hover:bg-primary-dark"
            >
              {a.ctaText}: {a.name} <ArrowUpRight size={15} />
            </a>
            <a
              href={bp.affiliateUrl}
              target="_blank"
              rel="sponsored nofollow noopener"
              className="inline-flex h-12 items-center justify-center gap-1.5 rounded-xl border border-border bg-surface px-6 text-sm font-bold text-foreground transition-colors hover:border-primary hover:bg-primary-light/40"
            >
              {bp.ctaText}: {bp.name} <ArrowUpRight size={15} />
            </a>
          </div>
        </section>

        {/* ───── Methodology ───── */}
        <section className="mb-10 rounded-2xl border border-border bg-surface p-6">
          <h2 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-muted">
            <ShieldCheck size={16} className="text-primary" /> How we compare — and how to read this
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-muted">
            We weigh the factors that actually change a patient&rsquo;s experience: real price (and whether it&rsquo;s
            compounded or branded), the medications and formulations on offer, shipping, pharmacy accreditation and the
            clinician model, insurance stance, and commitment. We name a top pick for most people, then lay the
            trade-offs out in full so you can override it when your priorities or insurance point the other way. Pricing
            is provider-reported and moves often — and compounded-drug availability shifts with FDA shortage status — so
            confirm the current details on the provider&rsquo;s own site before enrolling. Affiliate relationships never
            change a program&rsquo;s placement. This page is educational, not medical advice; see our{" "}
            <Link href="/disclaimer" className="font-semibold text-primary underline">disclaimer</Link>.
          </p>
        </section>

        {/* ───── Full reviews links ───── */}
        <section className="mb-10 grid gap-3 sm:grid-cols-2">
          {[a, bp].map((p) => (
            <Link
              key={p.id}
              href={`/reviews/${p.slug}`}
              className="group flex items-center justify-between rounded-xl border border-border bg-surface p-4 transition-colors hover:border-primary"
            >
              <span className="text-sm font-semibold text-foreground">Is {p.name} legit? Read the full review</span>
              <ArrowRight size={15} className="text-primary transition-transform group-hover:translate-x-0.5" />
            </Link>
          ))}
        </section>

        {/* ───── Other comparisons ───── */}
        <nav className="border-t border-border pt-8">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-muted">More comparisons</h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {otherBattles.map((x) => {
              const xa = getProvider(x.a);
              return (
                <Link
                  key={x.slug}
                  href={`/compare/${x.slug}`}
                  className="group flex items-center justify-between gap-3 rounded-xl border border-border bg-surface p-4 transition-colors hover:border-primary"
                >
                  <span className="text-sm font-semibold text-foreground">{x.title}</span>
                  <span className="flex shrink-0 items-center gap-2">
                    {xa && <span className="text-xs text-muted">{xa.specs.startingPrice.split("(")[0].trim()}</span>}
                    <ArrowRight size={15} className="text-primary transition-transform group-hover:translate-x-0.5" />
                  </span>
                </Link>
              );
            })}
          </div>
        </nav>
      </div>

      {/* Sticky compare bar (mobile) */}
      <div className="fixed inset-x-0 bottom-0 z-30 border-t border-border bg-surface/95 p-3 backdrop-blur sm:hidden">
        <a
          href={winner.affiliateUrl}
          target="_blank"
          rel="sponsored nofollow noopener"
          className="flex h-12 w-full items-center justify-center gap-1.5 rounded-xl bg-primary px-4 text-sm font-bold text-white shadow-sm"
        >
          Get {winner.name} <ArrowUpRight size={14} />
        </a>
      </div>
    </div>
  );
}
