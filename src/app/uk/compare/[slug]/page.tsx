import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowUpRight, ArrowRight, Trophy, Check, X, ShieldCheck, Star } from "lucide-react";
import { ukBattleSlugs, resolveUkBattle, type UkProvider } from "@/data/uk";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { EditorialByline } from "@/components/editorial-byline";
import { MedicalDisclaimer } from "@/components/medical-disclaimer";
import { MedicalSources } from "@/components/medical-sources";
import { Faq } from "@/components/faq";
import { TrustpilotStars, TrustpilotLogo } from "@/components/trustpilot";
import { pageMetadata, breadcrumbSchema, faqSchema } from "@/lib/seo";
import { ArticleLayout, DefaultAside } from "@/components/article-layout";

export function generateStaticParams() {
  return ukBattleSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const battle = resolveUkBattle(slug);
  if (!battle) return {};
  const { a, b } = battle;
  const path = `/uk/compare/${a.slug}-vs-${b.slug}`;
  return pageMetadata({
    title: `${a.name} vs ${b.name} (UK 2026): Which Weight-Loss Service Is Better?`,
    description: `An independent UK comparison of ${a.name} and ${b.name} — regulation, Trustpilot ratings, how each service works, delivery and support, and who each is best for.`,
    path,
    absoluteTitle: true,
    locale: "en_GB",
    languages: { "en-GB": path, "x-default": path },
  });
}

function TpCell({ p }: { p: UkProvider }) {
  if (!p.trustpilot) return <span className="text-muted">—</span>;
  return (
    <span className="inline-flex flex-col items-start gap-1">
      <TrustpilotStars value={p.trustpilot.scoreValue} max={p.trustpilot.scoreMax} size={14} />
      <span className="text-xs text-muted">
        {p.trustpilot.score} · {p.trustpilot.count.toLocaleString()}
      </span>
    </span>
  );
}

const ROWS: { label: string; get: (p: UkProvider) => React.ReactNode }[] = [
  { label: "Regulation", get: (p) => p.regulated },
  { label: "Trustpilot", get: (p) => <TpCell p={p} /> },
  { label: "Service model", get: (p) => p.serviceModel },
  { label: "Delivery", get: (p) => p.delivery },
  { label: "Money-back", get: (p) => p.moneyBack ?? "—" },
  { label: "Eligibility", get: (p) => p.minBmi },
  { label: "Best at", get: (p) => p.standout },
  { label: "Watch-out", get: (p) => p.watchOut },
];

export default async function UkComparePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const battle = resolveUkBattle(slug);
  if (!battle) notFound();
  const { a, b, pick } = battle;
  const other = pick.id === a.id ? b : a;

  const faqs = [
    {
      q: `Is ${a.name} or ${b.name} better?`,
      a: `Both are legitimate UK weight-loss services. ${pick.name} is our overall pick for ${pick.champion ? "a straightforward, regulated pharmacy with fast delivery and no subscription lock-in" : "its balance of service and support"}, while ${other.name} stands out for ${other.standout.toLowerCase()}. The right choice depends on whether you prefer a simple pharmacy or an app-based programme — see the table above.`,
    },
    {
      q: `Which has better reviews, ${a.name} or ${b.name}?`,
      a: `${a.trustpilot ? `${a.name} holds ${a.trustpilot.score} on Trustpilot (${a.trustpilot.count.toLocaleString()} reviews). ` : ""}${b.trustpilot ? `${b.name} holds ${b.trustpilot.score} (${b.trustpilot.count.toLocaleString()} reviews). ` : ""}We report both honestly rather than picking the one that flatters our recommendation.`,
    },
    {
      q: `Do ${a.name} and ${b.name} both require a prescription?`,
      a: `Yes. Both are UK services where treatment is prescription-only and begins with an online clinical assessment reviewed by a prescriber. It is illegal to obtain treatment without a prescription.`,
    },
  ];

  return (
    <ArticleLayout aside={<DefaultAside uk />}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqs)) }} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Home", path: "/" },
              { name: "UK", path: "/uk" },
              { name: `${a.name} vs ${b.name}`, path: `/uk/compare/${a.slug}-vs-${b.slug}` },
            ]),
          ),
        }}
      />
      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "UK", path: "/uk" },
          { name: `${a.name} vs ${b.name}`, path: `/uk/compare/${a.slug}-vs-${b.slug}` },
        ]}
      />

      <h1 className="font-serif text-4xl font-semibold leading-tight text-foreground">
        {a.name} vs {b.name}
      </h1>
      <EditorialByline chips={["UK-specific comparison"]} cites="NHS &amp; the MHRA" team="Top Editorial Team" />

      <div className="mt-6 rounded-r-xl border-l-4 border-primary bg-primary-light/40 py-4 pl-5 pr-4">
        <p className="leading-relaxed text-foreground">
          <strong>Short answer:</strong> both {a.name} and {b.name} are legitimate UK weight-loss services that begin
          with an online clinical assessment. <strong>Our pick is {pick.name}</strong> — but they suit different
          people, and we call out where {other.name} is genuinely stronger. Here's the honest side-by-side.
        </p>
      </div>

      <MedicalDisclaimer
        className="mt-4"
        body="This page compares weight-loss services in general terms. Only a registered clinician who knows your history can decide what's right for you."
      />

      {/* Comparison table */}
      <section className="mt-10">
        <h2 className="font-serif text-2xl font-semibold text-foreground">Side by side</h2>
        <div className="mt-4 overflow-x-auto rounded-2xl border border-border">
          <table className="w-full min-w-[560px] border-collapse text-sm">
            <thead>
              <tr className="bg-surface">
                <th className="p-4 text-left font-medium text-muted"></th>
                {[a, b].map((p) => (
                  <th key={p.id} className="border-l border-border p-4 text-left align-bottom">
                    <span className="inline-flex items-center gap-1.5 text-base font-bold text-foreground">
                      {p.name}
                      {p.champion && <Trophy size={14} className="text-primary" />}
                    </span>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {ROWS.map((row, i) => (
                <tr key={row.label} className={i % 2 === 0 ? "bg-background" : "bg-surface"}>
                  <th className="p-4 text-left align-top text-xs font-semibold uppercase tracking-wide text-muted">
                    {row.label}
                  </th>
                  <td className="border-l border-border p-4 align-top text-foreground">{row.get(a)}</td>
                  <td className="border-l border-border p-4 align-top text-foreground">{row.get(b)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Our pick */}
      <section className="mt-10 rounded-2xl border-2 border-primary/30 bg-primary-light/30 p-6">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-primary px-3 py-1 text-xs font-bold uppercase tracking-wide text-white">
          <Trophy size={14} /> Our pick: {pick.name}
        </span>
        <p className="prose-body mt-3 leading-relaxed text-foreground">
          We recommend <strong>{pick.name}</strong> for most people:{" "}
          {pick.champion
            ? "a properly regulated pharmacy (GPhC + CQC) with fast, frequently next-day delivery and no subscription lock-in."
            : pick.standout + "."}{" "}
          In fairness, <strong>{other.name}</strong>{" "}
          {other.trustpilot && pick.trustpilot && other.trustpilot.scoreValue > pick.trustpilot.scoreValue
            ? `actually holds a higher Trustpilot score (${other.trustpilot.score} vs ${pick.trustpilot.score}) and `
            : ""}
          is a strong choice if you want {other.serviceModel.toLowerCase()}
          {other.moneyBack ? ` and a ${other.moneyBack.toLowerCase()}` : ""}. Just weigh {other.watchOut.toLowerCase()}.
        </p>
        {pick.trustpilot && (
          <div className="mt-3 inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 text-sm">
            <TrustpilotStars value={pick.trustpilot.scoreValue} max={pick.trustpilot.scoreMax} size={15} />
            <span className="font-bold text-foreground">{pick.trustpilot.score}</span>
            <TrustpilotLogo />
            <span className="text-muted">· {pick.trustpilot.count.toLocaleString()} reviews</span>
          </div>
        )}
        <div className="mt-4">
          <a
            href={pick.url}
            target="_blank"
            rel="sponsored nofollow noopener"
            className="inline-flex items-center gap-1 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white hover:bg-primary-dark"
          >
            {pick.ctaText}: {pick.name} <ArrowUpRight size={15} />
          </a>
        </div>
      </section>

      {/* Choose which */}
      <section className="mt-10">
        <h2 className="font-serif text-2xl font-semibold text-foreground">Which should you choose?</h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          {[a, b].map((p) => (
            <div key={p.id} className="rounded-2xl border border-border bg-surface p-5">
              <h3 className="flex items-center gap-2 text-base font-bold text-foreground">
                {p.name}
                {p.champion && <span className="rounded-full bg-primary-light px-2 py-0.5 text-[11px] font-semibold text-primary">Our pick</span>}
              </h3>
              <p className="mt-1 inline-flex items-center gap-1.5 text-xs font-semibold text-primary">
                <ShieldCheck size={13} /> {p.regulated}
              </p>
              <ul className="mt-3 space-y-1.5">
                {p.pros.slice(0, 4).map((pro) => (
                  <li key={pro} className="flex items-start gap-2 text-sm text-foreground">
                    <Check size={14} className="mt-0.5 shrink-0 text-primary" /> <span>{pro}</span>
                  </li>
                ))}
                {p.cons.slice(0, 2).map((con) => (
                  <li key={con} className="flex items-start gap-2 text-sm text-muted">
                    <X size={14} className="mt-0.5 shrink-0 text-accent" /> <span>{con}</span>
                  </li>
                ))}
              </ul>
              <a
                href={p.url}
                target="_blank"
                rel="sponsored nofollow noopener"
                className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline"
              >
                {p.ctaText} <ArrowUpRight size={13} />
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="mt-10">
        <h2 className="font-serif text-2xl font-semibold text-foreground">{a.name} vs {b.name}: common questions</h2>
        <div className="mt-4">
          <Faq items={faqs} />
        </div>
      </section>

      <nav className="mt-10 border-t border-border pt-6">
        <Link href="/uk" className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline">
          <ArrowRight size={14} className="rotate-180" /> Back to the UK hub
        </Link>
      </nav>

      <MedicalSources keys={["mhra-illegal-weightloss", "nhs-obesity"]} />
    </ArticleLayout>
  );
}
