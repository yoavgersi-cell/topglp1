import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight, Check, X, AlertTriangle, Pill, DollarSign, TrendingUp } from "lucide-react";
import { MEDICATIONS, MEDICATION_SLUGS, getMedication } from "@/data/medications";
import { getProvider as getProviderById } from "@/data/providers";
import { GUIDES } from "@/data/guides";
import { MED_COMPARISONS } from "@/data/med-comparisons";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { MedicalDisclaimer } from "@/components/medical-disclaimer";
import { MedicalSources } from "@/components/medical-sources";
import { Faq } from "@/components/faq";
import { ProviderCard } from "@/components/provider-card";
import { CONTENT_REVIEWED } from "@/lib/site";
import { pageMetadata, articleSchema, faqSchema, breadcrumbSchema } from "@/lib/seo";

export const revalidate = 3600;

export function generateStaticParams() {
  return MEDICATION_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const med = getMedication(slug);
  if (!med) return {};
  return pageMetadata({
    title: `${med.name} (${med.brandNames[0]}): How It Works, Dosing, Results & Cost`,
    description: med.oneLiner,
    path: `/medications/${med.slug}`,
  });
}

function SectionTitle({ icon: Icon, children }: { icon: React.ElementType; children: React.ReactNode }) {
  return (
    <h2 className="flex items-center gap-2 font-serif text-2xl font-semibold text-foreground">
      <Icon size={20} className="text-primary" />
      {children}
    </h2>
  );
}

export default async function MedicationPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const med = getMedication(slug);
  if (!med) notFound();

  const relatedProviders = med.relatedProviders
    .map((id) => getProviderById(id))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));

  const relatedGuides = GUIDES.filter((g) =>
    g.relatedMeds?.includes(med.slug),
  ).slice(0, 3);

  const relatedComparisons = MED_COMPARISONS.filter(
    (c) => c.aMedSlug === med.slug || c.bMedSlug === med.slug,
  ).slice(0, 4);

  return (
    <article className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            articleSchema({
              headline: `${med.name} (${med.brandNames[0]})`,
              description: med.oneLiner,
              path: `/medications/${med.slug}`,
              dateModified: CONTENT_REVIEWED,
            }),
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(med.faqs)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Home", path: "/" },
              { name: "Medications", path: "/medications" },
              { name: med.name, path: `/medications/${med.slug}` },
            ]),
          ),
        }}
      />

      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "Medications", path: "/medications" },
          { name: med.name, path: `/medications/${med.slug}` },
        ]}
      />

      {/* Header */}
      <header>
        <span
          className="inline-block rounded-full px-3 py-1 text-xs font-semibold text-white"
          style={{ backgroundColor: med.accent }}
        >
          {med.statusLabel}
        </span>
        <h1 className="mt-4 font-serif text-4xl font-semibold leading-tight text-foreground">{med.name}</h1>
        <p className="mt-2 text-muted">
          {med.drugClass} · {med.route} · Sold as{" "}
          <strong className="text-foreground">{med.brandNames.join(", ")}</strong>
        </p>
        <p className="mt-4 text-lg leading-relaxed text-foreground">{med.oneLiner}</p>
        <p className="mt-3 text-xs text-muted">Last reviewed {CONTENT_REVIEWED} by the Top GLP-1 Editorial Team</p>
      </header>

      <MedicalDisclaimer className="mt-6" />

      {/* Key takeaways */}
      <div className="mt-8 rounded-2xl border border-border bg-primary-light/50 p-6">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-primary">Key takeaways</h2>
        <ul className="mt-3 space-y-2">
          {med.keyTakeaways.map((k) => (
            <li key={k} className="flex items-start gap-2 text-sm text-foreground">
              <Check size={16} className="mt-0.5 shrink-0 text-primary" />
              <span>{k}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Summary */}
      <section className="prose-body mt-10">
        {med.summary.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </section>

      {/* How it works */}
      <section className="mt-10">
        <SectionTitle icon={Pill}>How {med.name.toLowerCase()} works</SectionTitle>
        <div className="prose-body mt-4">
          {med.howItWorks.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </section>

      {/* Efficacy */}
      <section className="mt-10">
        <SectionTitle icon={TrendingUp}>How well it works</SectionTitle>
        <p className="mt-4 rounded-xl border border-border bg-surface p-4 font-semibold text-foreground">
          {med.efficacy.headline}
        </p>
        <p className="prose-body mt-4">{med.efficacy.detail}</p>
        <div className="mt-5 overflow-hidden rounded-2xl border border-border">
          {med.efficacy.trials.map((t, i) => (
            <div
              key={t.name}
              className={`flex flex-col gap-1 p-4 sm:flex-row sm:justify-between sm:gap-6 ${i > 0 ? "border-t border-border" : ""}`}
            >
              <span className="font-semibold text-foreground">{t.name}</span>
              <span className="text-sm text-muted sm:text-right">{t.result}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Dosing */}
      <section className="mt-10">
        <SectionTitle icon={Pill}>Dosing schedule</SectionTitle>
        <p className="prose-body mt-4">{med.dosing.intro}</p>
        <div className="mt-5 overflow-hidden rounded-2xl border border-border bg-surface">
          {med.dosing.schedule.map((step, i) => (
            <div key={i} className={`p-4 ${i > 0 ? "border-t border-border" : ""}`}>
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <span className="text-sm font-semibold text-primary">{step.phase}</span>
                <span className="font-semibold text-foreground">{step.dose}</span>
              </div>
              {step.note && <p className="mt-1 text-sm text-muted">{step.note}</p>}
            </div>
          ))}
        </div>
        {med.dosing.notes.length > 0 && (
          <ul className="mt-4 space-y-2">
            {med.dosing.notes.map((n) => (
              <li key={n} className="flex items-start gap-2 text-sm text-muted">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                <span>{n}</span>
              </li>
            ))}
          </ul>
        )}
      </section>

      {/* Side effects */}
      <section className="mt-10">
        <SectionTitle icon={AlertTriangle}>Side effects &amp; safety</SectionTitle>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-border bg-surface p-5">
            <h3 className="text-sm font-semibold text-foreground">Common</h3>
            <ul className="mt-3 space-y-2">
              {med.sideEffects.common.map((s) => (
                <li key={s} className="text-sm leading-relaxed text-muted">• {s}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-accent/30 bg-accent-light/40 p-5">
            <h3 className="text-sm font-semibold text-foreground">Serious (uncommon)</h3>
            <ul className="mt-3 space-y-2">
              {med.sideEffects.serious.map((s) => (
                <li key={s} className="text-sm leading-relaxed text-muted">• {s}</li>
              ))}
            </ul>
          </div>
        </div>
        <p className="prose-body mt-4">{med.sideEffects.management}</p>
      </section>

      {/* Cost */}
      <section className="mt-10">
        <SectionTitle icon={DollarSign}>What it costs</SectionTitle>
        <dl className="mt-4 space-y-3">
          <div className="rounded-xl border border-border bg-surface p-4">
            <dt className="text-sm font-semibold text-foreground">Branded (cash)</dt>
            <dd className="mt-1 text-sm text-muted">{med.cost.brandedRange}</dd>
          </div>
          {med.cost.compoundedRange && (
            <div className="rounded-xl border border-border bg-surface p-4">
              <dt className="text-sm font-semibold text-foreground">Compounded (telehealth)</dt>
              <dd className="mt-1 text-sm text-muted">{med.cost.compoundedRange}</dd>
            </div>
          )}
          <div className="rounded-xl border border-border bg-surface p-4">
            <dt className="text-sm font-semibold text-foreground">Insurance</dt>
            <dd className="mt-1 text-sm text-muted">{med.cost.insuranceNote}</dd>
          </div>
        </dl>
      </section>

      {/* Who it's for */}
      <section className="mt-10">
        <SectionTitle icon={Check}>Who it's for — and who should avoid it</SectionTitle>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-border bg-surface p-5">
            <h3 className="flex items-center gap-2 text-sm font-semibold text-foreground">
              <Check size={15} className="text-primary" /> Often a good fit
            </h3>
            <ul className="mt-3 space-y-2">
              {med.whoFor.map((s) => (
                <li key={s} className="text-sm leading-relaxed text-muted">{s}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-border bg-surface p-5">
            <h3 className="flex items-center gap-2 text-sm font-semibold text-foreground">
              <X size={15} className="text-accent" /> Not recommended for
            </h3>
            <ul className="mt-3 space-y-2">
              {med.whoNotFor.map((s) => (
                <li key={s} className="text-sm leading-relaxed text-muted">{s}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mt-10">
        <SectionTitle icon={Pill}>Common questions</SectionTitle>
        <div className="mt-4">
          <Faq items={med.faqs} />
        </div>
      </section>

      {/* Drug comparisons */}
      {relatedComparisons.length > 0 && (
        <section className="mt-12">
          <h2 className="font-serif text-2xl font-semibold text-foreground">
            How {med.name.toLowerCase()} compares
          </h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {relatedComparisons.map((c) => (
              <Link
                key={c.slug}
                href={`/vs/${c.slug}`}
                className="group flex items-center justify-between rounded-xl border border-border bg-surface p-4 transition-colors hover:border-primary"
              >
                <span className="text-sm font-semibold text-foreground">{c.title}</span>
                <ArrowRight size={15} className="text-primary transition-transform group-hover:translate-x-0.5" />
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* Sources */}
      <MedicalSources keys={med.sources} />

      {/* Related providers */}
      {relatedProviders.length > 0 && (
        <section className="mt-12">
          <h2 className="font-serif text-2xl font-semibold text-foreground">
            Where to get {med.name.toLowerCase()}
          </h2>
          <p className="mt-2 text-sm text-muted">
            Telehealth programs we rate highly for accessing this medication.
            {med.slug === "semaglutide" && (
              <> See all programs and pricing on our{" "}
                <Link href="/semaglutide-online" className="font-semibold text-primary underline">semaglutide online</Link> page.</>
            )}
            {med.slug === "tirzepatide" && (
              <> See all programs and pricing on our{" "}
                <Link href="/tirzepatide-online" className="font-semibold text-primary underline">tirzepatide online</Link> page.</>
            )}
          </p>
          <div className="mt-5 space-y-4">
            {relatedProviders.map((p) => (
              <ProviderCard key={p.id} provider={p} />
            ))}
          </div>
        </section>
      )}

      {/* Related guides */}
      {relatedGuides.length > 0 && (
        <section className="mt-12 border-t border-border pt-8">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-muted">Keep reading</h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-3">
            {relatedGuides.map((g) => (
              <Link
                key={g.slug}
                href={`/guides/${g.slug}`}
                className="group rounded-xl border border-border bg-surface p-4 transition-colors hover:border-primary"
              >
                <span className="text-xs font-semibold text-primary">{g.category}</span>
                <p className="mt-1 text-sm font-semibold leading-snug text-foreground">{g.title}</p>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* Other medications */}
      <nav className="mt-12 border-t border-border pt-8">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-muted">Other medications</h2>
        <div className="mt-3 flex flex-wrap gap-2">
          {MEDICATIONS.filter((m) => m.slug !== med.slug).map((m) => (
            <Link
              key={m.slug}
              href={`/medications/${m.slug}`}
              className="inline-flex items-center gap-1 rounded-full border border-border bg-surface px-3 py-1.5 text-sm text-foreground transition-colors hover:border-primary"
            >
              {m.name} <ArrowRight size={13} />
            </Link>
          ))}
        </div>
      </nav>
    </article>
  );
}
