import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import {
  Star,
  Check,
  X,
  ArrowUpRight,
  ArrowRight,
  Trophy,
  ShieldCheck,
  DollarSign,
} from "lucide-react";
import { PROVIDERS, getProvider, type Provider } from "@/data/providers";
import { BATTLES } from "@/data/battles";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { MedicalDisclaimer } from "@/components/medical-disclaimer";
import { Faq } from "@/components/faq";
import { CONTENT_REVIEWED } from "@/lib/site";
import { pageMetadata, breadcrumbSchema, faqSchema } from "@/lib/seo";

export const revalidate = 3600;

export function generateStaticParams() {
  return PROVIDERS.map((p) => ({ provider: p.slug }));
}

function providerFaqs(p: Provider) {
  return [
    {
      q: `How much does ${p.name} cost?`,
      a: `${p.name} starts at ${p.specs.startingPrice}. Semaglutide: ${p.specs.semaglutide}. Tirzepatide: ${p.specs.tirzepatide}. Billing is ${p.specs.billing.toLowerCase()}. Pricing is provider-reported and can change — confirm current rates on their site.`,
    },
    {
      q: `Does ${p.name} offer tirzepatide?`,
      a:
        p.specs.tirzepatide.startsWith("—")
          ? `No — ${p.name} does not currently offer tirzepatide. ${p.specs.gipOption}`
          : `Yes. ${p.specs.tirzepatide}. ${p.specs.gipOption}`,
    },
    {
      q: `Is ${p.name} legitimate and safe?`,
      a: `${p.name} works with ${p.specs.pharmacy.toLowerCase()} and ${p.specs.clinicians.toLowerCase()}. As with any GLP-1 program, confirm licensing and that a prescriber reviews your case. GLP-1 medications carry real risks regardless of provider — see our medication guides.`,
    },
    {
      q: `Does ${p.name} take insurance?`,
      a: `Insurance: ${p.specs.insurance}. ${p.specs.offeringType === "Compounded" ? "Compounded GLP-1 is usually paid cash." : ""}`.trim(),
    },
  ];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ provider: string }>;
}): Promise<Metadata> {
  const { provider } = await params;
  const p = getProvider(provider);
  if (!p) return {};
  return pageMetadata({
    title: `${p.name} Review 2026: Pricing, Medications & Is It Worth It?`,
    description: `Our independent ${p.name} review — GLP-1 pricing (${p.specs.startingPrice}), medications offered, pharmacy credentials, pros and cons, and who it's best for.`,
    path: `/reviews/${p.slug}`,
  });
}

const SPEC_ROWS: { label: string; get: (p: Provider) => string }[] = [
  { label: "Starting price", get: (p) => p.specs.startingPrice },
  { label: "Semaglutide", get: (p) => p.specs.semaglutide },
  { label: "Tirzepatide", get: (p) => p.specs.tirzepatide },
  { label: "Offering", get: (p) => p.specs.offeringType },
  { label: "New-patient offer", get: (p) => p.specs.firstMonthOffer },
  { label: "Billing", get: (p) => p.specs.billing },
  { label: "What's included", get: (p) => p.specs.included.join(", ") },
  { label: "Shipping", get: (p) => p.specs.shipping },
  { label: "States", get: (p) => p.specs.states },
  { label: "Pharmacy", get: (p) => p.specs.pharmacy },
  { label: "Clinicians", get: (p) => p.specs.clinicians },
  { label: "Insurance", get: (p) => p.specs.insurance },
];

export default async function ReviewPage({ params }: { params: Promise<{ provider: string }> }) {
  const { provider } = await params;
  const p = getProvider(provider);
  if (!p) notFound();

  const isTopPick = p.rank === 1;
  const faqs = providerFaqs(p);
  const relatedBattles = BATTLES.filter((b) => b.a === p.id || b.b === p.id).slice(0, 4);

  return (
    <article className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqs)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Review",
            itemReviewed: { "@type": "Organization", name: p.name },
            reviewRating: { "@type": "Rating", ratingValue: p.rating, bestRating: 10 },
            author: { "@type": "Organization", name: "TopGLP1 Editorial Team" },
            publisher: { "@type": "Organization", name: "TopGLP1" },
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Home", path: "/" },
              { name: "Reviews", path: "/reviews" },
              { name: p.name, path: `/reviews/${p.slug}` },
            ]),
          ),
        }}
      />

      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "Reviews", path: "/reviews" },
          { name: p.name, path: `/reviews/${p.slug}` },
        ]}
      />

      <header>
        {isTopPick && (
          <span className="inline-flex items-center gap-1.5 rounded-full bg-primary px-3 py-1 text-xs font-bold uppercase tracking-wide text-white">
            <Trophy size={14} /> Our #1 GLP-1 pick
          </span>
        )}
        <div className="mt-3 flex items-center gap-4">
          <div className="relative h-12 w-36">
            <Image src={p.logo} alt={`${p.name} logo`} fill className="object-contain object-left" sizes="144px" />
          </div>
        </div>
        <h1 className="mt-4 font-serif text-4xl font-semibold leading-tight text-foreground">{p.name} review</h1>
        <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1">
          <span className="inline-flex items-center gap-1 text-lg font-bold text-primary">
            <Star size={18} className="fill-primary text-primary" /> {p.rating.toFixed(1)}
            <span className="text-sm font-normal text-muted">/ 10 · {p.ratingLabel}</span>
          </span>
          <span className="text-sm text-muted">{p.reviewCount.toLocaleString()} reviews</span>
        </div>
        <p className="mt-4 text-lg leading-relaxed text-foreground">
          {p.name} {p.glp1Focus.charAt(0).toLowerCase() + p.glp1Focus.slice(1)} {p.specs.standout}.
        </p>
        <p className="mt-2 text-xs text-muted">Last reviewed {CONTENT_REVIEWED} · We may earn a commission.</p>
      </header>

      <MedicalDisclaimer className="mt-6" />

      {/* Quick verdict */}
      <div className="mt-8 rounded-2xl border border-border bg-primary-light/50 p-6">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-primary">Our verdict</h2>
        <p className="mt-2 leading-relaxed text-foreground">
          {p.specs.standout}. Watch out for one thing: {p.specs.watchOut.charAt(0).toLowerCase() + p.specs.watchOut.slice(1)}.
          {isTopPick ? " Overall, it's our top-rated GLP-1 program for 2026." : ""}
        </p>
        <a
          href={p.affiliateUrl}
          target="_blank"
          rel="sponsored nofollow noopener"
          className="mt-4 inline-flex items-center gap-1 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white hover:bg-primary-dark"
        >
          {p.ctaText}: {p.name} <ArrowUpRight size={15} />
        </a>
      </div>

      {/* Pricing highlight */}
      <section className="mt-10">
        <h2 className="flex items-center gap-2 font-serif text-2xl font-semibold text-foreground">
          <DollarSign size={20} className="text-primary" /> {p.name} pricing
        </h2>
        <div className="mt-4 grid gap-3 sm:grid-cols-3">
          {[
            { label: "Starting price", value: p.specs.startingPrice },
            { label: "Semaglutide", value: p.specs.semaglutide },
            { label: "Tirzepatide", value: p.specs.tirzepatide },
          ].map((c) => (
            <div key={c.label} className="rounded-xl border border-border bg-surface p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-muted">{c.label}</p>
              <p className="mt-1 font-semibold text-foreground">{c.value}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Full specs */}
      <section className="mt-10">
        <h2 className="font-serif text-2xl font-semibold text-foreground">{p.name} at a glance</h2>
        <div className="mt-4 overflow-hidden rounded-2xl border border-border">
          {SPEC_ROWS.map((row, i) => (
            <div
              key={row.label}
              className={`flex flex-col gap-1 p-4 sm:flex-row sm:justify-between sm:gap-6 ${i > 0 ? "border-t border-border" : ""} ${i % 2 === 0 ? "bg-background" : "bg-surface"}`}
            >
              <span className="text-xs font-semibold uppercase tracking-wide text-muted sm:w-40 sm:shrink-0">{row.label}</span>
              <span className="text-sm text-foreground sm:text-right">{row.get(p)}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Pros & cons */}
      <section className="mt-10">
        <h2 className="font-serif text-2xl font-semibold text-foreground">Pros &amp; cons</h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-border bg-surface p-5">
            <h3 className="text-xs font-semibold uppercase tracking-wide text-primary">Pros</h3>
            <ul className="mt-3 space-y-2">
              {p.pros.map((pro) => (
                <li key={pro} className="flex items-start gap-2 text-sm text-foreground">
                  <Check size={15} className="mt-0.5 shrink-0 text-primary" />
                  <span>{pro}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-border bg-surface p-5">
            <h3 className="text-xs font-semibold uppercase tracking-wide text-accent">Cons</h3>
            <ul className="mt-3 space-y-2">
              {p.cons.map((con) => (
                <li key={con} className="flex items-start gap-2 text-sm text-muted">
                  <X size={15} className="mt-0.5 shrink-0 text-accent" />
                  <span>{con}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Credibility */}
      <section className="mt-10 rounded-2xl border border-border bg-surface p-6">
        <h2 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-muted">
          <ShieldCheck size={16} className="text-primary" /> Safety &amp; credentials
        </h2>
        <p className="mt-2 text-sm leading-relaxed text-muted">
          {p.name} uses {p.specs.pharmacy.toLowerCase()}, with {p.specs.clinicians.toLowerCase()} and a{" "}
          {p.specs.consult.toLowerCase()}. {p.specs.offeringType === "Compounded"
            ? "Compounded medications are not FDA-approved finished products, so pharmacy legitimacy matters — see our guide on getting GLP-1 safely."
            : "It dispenses FDA-approved branded medication through licensed pharmacies."}
        </p>
      </section>

      {/* FAQ */}
      <section className="mt-10">
        <h2 className="font-serif text-2xl font-semibold text-foreground">{p.name}: common questions</h2>
        <div className="mt-4">
          <Faq items={faqs} />
        </div>
      </section>

      {/* Related comparisons */}
      {relatedBattles.length > 0 && (
        <section className="mt-10">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-muted">{p.name} compared</h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {relatedBattles.map((b) => (
              <Link
                key={b.slug}
                href={`/compare/${b.slug}`}
                className="group flex items-center justify-between rounded-xl border border-border bg-surface p-4 transition-colors hover:border-primary"
              >
                <span className="text-sm font-semibold text-foreground">{b.title}</span>
                <ArrowRight size={15} className="text-primary transition-transform group-hover:translate-x-0.5" />
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* Other reviews */}
      <nav className="mt-12 border-t border-border pt-8">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-muted">Other GLP-1 programs</h2>
        <div className="mt-3 flex flex-wrap gap-2">
          {[...PROVIDERS]
            .sort((x, y) => x.rank - y.rank)
            .filter((x) => x.id !== p.id)
            .slice(0, 6)
            .map((x) => (
              <Link
                key={x.id}
                href={`/reviews/${x.slug}`}
                className="inline-flex items-center gap-1 rounded-full border border-border bg-surface px-3 py-1.5 text-sm text-foreground transition-colors hover:border-primary"
              >
                {x.name} <ArrowRight size={13} />
              </Link>
            ))}
        </div>
      </nav>
    </article>
  );
}
