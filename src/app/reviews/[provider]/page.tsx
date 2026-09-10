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
  HelpCircle,
  Pill,
  Quote,
  Users,
} from "lucide-react";
import { PROVIDERS, getProvider, type Provider } from "@/data/providers";
import { battlesForProvider } from "@/data/battle-engine";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { MedicalDisclaimer } from "@/components/medical-disclaimer";
import { Faq } from "@/components/faq";
import { TrustpilotStars, TrustpilotLogo } from "@/components/trustpilot";
import { ArticleLayout, AsideCard } from "@/components/article-layout";
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
    title:
      p.editorial?.seoTitle ??
      `${p.name} Reviews 2026: Cost, Pros & Cons — Is It Legit & Worth It?`,
    description:
      p.editorial?.seoDescription ??
      `Our independent ${p.name} review — GLP-1 pricing (${p.specs.startingPrice}), medications offered, pharmacy credentials, honest pros and cons, and whether ${p.name} is legit and worth it.`,
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
  const relatedBattles = battlesForProvider(p.id).slice(0, 6);

  const isPlaceholder = p.affiliateUrl === "#";
  const aside = (
    <>
      <AsideCard title="Quick facts">
        <dl className="space-y-2.5 text-sm">
          <div>
            <dt className="text-xs text-muted">Our score</dt>
            <dd className="font-medium text-foreground">{p.rating.toFixed(1)}/10 · {p.ratingLabel}</dd>
          </div>
          <div>
            <dt className="text-xs text-muted">Ranked</dt>
            <dd className="font-medium text-foreground">#{p.rank} of {PROVIDERS.length} programs</dd>
          </div>
          <div>
            <dt className="text-xs text-muted">Starting price</dt>
            <dd className="font-medium text-foreground">{p.specs.startingPrice}</dd>
          </div>
          <div>
            <dt className="text-xs text-muted">Offering</dt>
            <dd className="font-medium text-foreground">{p.specs.offeringType}</dd>
          </div>
          {p.externalReviews && (
            <div>
              <dt className="text-xs text-muted">Trustpilot</dt>
              <dd className="font-medium text-foreground">{p.externalReviews.score}</dd>
            </div>
          )}
        </dl>
      </AsideCard>
      {!isPlaceholder && (
        <div className="rounded-2xl border-2 border-primary/30 bg-primary-light/40 p-5">
          {isTopPick && (
            <p className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wide text-primary">
              <Trophy size={12} /> Our #1 pick
            </p>
          )}
          <p className="mt-1 text-sm font-semibold text-foreground">Start with {p.name}</p>
          <p className="mt-1 text-xs text-muted">{p.specs.startingPrice}</p>
          <a
            href={p.affiliateUrl}
            target="_blank"
            rel="sponsored nofollow noopener"
            className="mt-3 inline-flex w-full items-center justify-center gap-1 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white hover:bg-primary-dark"
          >
            {p.ctaText}: {p.name} <ArrowUpRight size={15} />
          </a>
          <p className="mt-2 text-center text-[11px] text-muted">We may earn a commission. It never changes our score.</p>
        </div>
      )}
    </>
  );

  return (
    <ArticleLayout aside={aside}>
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
            author: { "@type": "Organization", name: "Top GLP-1 Editorial Team" },
            publisher: { "@type": "Organization", name: "Top GLP-1" },
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
        <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-2">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-primary-light px-3 py-1 text-sm font-bold text-primary">
            <Star size={15} className="fill-primary text-primary" /> {p.rating.toFixed(1)}/10
            <span className="font-normal text-muted">Top GLP-1 score</span>
          </span>
          {p.externalReviews && (
            <span className="inline-flex items-center gap-2 rounded-full border border-border px-3 py-1 text-sm">
              <TrustpilotStars value={p.externalReviews.scoreValue} max={p.externalReviews.scoreMax} size={16} />
              <span className="font-bold text-foreground">{p.externalReviews.score}</span>
              <TrustpilotLogo />
            </span>
          )}
        </div>
        <p className="mt-4 text-lg leading-relaxed text-foreground">
          {p.editorial?.intro ?? `${p.glp1Focus} ${p.specs.standout}.`}
        </p>
        <p className="mt-2 text-xs text-muted">Last reviewed {CONTENT_REVIEWED} · We may earn a commission — it never changes our rankings.</p>
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

      {/* Answer-first Q&A (AEO) */}
      {p.editorial && (
        <section className="mt-10 space-y-5">
          <div>
            <h2 className="flex items-center gap-2 font-serif text-2xl font-semibold text-foreground">
              <HelpCircle size={20} className="text-primary" /> Is {p.name} legitimate and safe?
            </h2>
            <p className="prose-body mt-3 leading-relaxed text-foreground">{p.editorial.isItLegit}</p>
          </div>
          <div>
            <h2 className="flex items-center gap-2 font-serif text-2xl font-semibold text-foreground">
              <HelpCircle size={20} className="text-primary" /> Is {p.name} worth it?
            </h2>
            <p className="prose-body mt-3 leading-relaxed text-foreground">{p.editorial.isItWorth}</p>
          </div>
        </section>
      )}

      {/* Medication deep-notes */}
      {p.editorial && (p.editorial.semaglutideNote || p.editorial.tirzepatideNote) && (
        <section className="mt-10">
          <h2 className="flex items-center gap-2 font-serif text-2xl font-semibold text-foreground">
            <Pill size={20} className="text-primary" /> {p.name}: semaglutide vs tirzepatide
          </h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {p.editorial.semaglutideNote && (
              <div className="rounded-2xl border border-border bg-surface p-5">
                <h3 className="text-xs font-semibold uppercase tracking-wide text-primary">Semaglutide</h3>
                <p className="mt-2 text-sm leading-relaxed text-foreground">{p.editorial.semaglutideNote}</p>
              </div>
            )}
            {p.editorial.tirzepatideNote && (
              <div className="rounded-2xl border border-border bg-surface p-5">
                <h3 className="text-xs font-semibold uppercase tracking-wide text-primary">Tirzepatide</h3>
                <p className="mt-2 text-sm leading-relaxed text-foreground">{p.editorial.tirzepatideNote}</p>
              </div>
            )}
          </div>
        </section>
      )}

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

      {/* Who it's for / not for */}
      {p.editorial && (
        <section className="mt-10">
          <h2 className="flex items-center gap-2 font-serif text-2xl font-semibold text-foreground">
            <Users size={20} className="text-primary" /> Who {p.name} is (and isn't) for
          </h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-border bg-primary-light/40 p-5">
              <h3 className="text-xs font-semibold uppercase tracking-wide text-primary">Best for</h3>
              <ul className="mt-3 space-y-2">
                {p.editorial.bestFor.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-foreground">
                    <Check size={15} className="mt-0.5 shrink-0 text-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-border bg-surface p-5">
              <h3 className="text-xs font-semibold uppercase tracking-wide text-accent">Look elsewhere if</h3>
              <ul className="mt-3 space-y-2">
                {p.editorial.notFor.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-muted">
                    <X size={15} className="mt-0.5 shrink-0 text-accent" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      )}

      {/* Real third-party reviews (Trustpilot etc.) */}
      {p.externalReviews && (
        <section className="mt-10">
          <h2 className="flex items-center gap-2 font-serif text-2xl font-semibold text-foreground">
            <Star size={20} className="fill-primary text-primary" /> What real {p.name} customers say
          </h2>
          <div className="mt-4 rounded-2xl border border-border bg-surface p-6">
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
              <span className="text-4xl font-bold text-foreground">{p.externalReviews.score}</span>
              <TrustpilotStars value={p.externalReviews.scoreValue} max={p.externalReviews.scoreMax} size={26} />
              <TrustpilotLogo />
            </div>
            <p className="mt-2 text-sm text-muted">
              {p.externalReviews.count.toLocaleString()} {p.externalReviews.source} reviews · checked{" "}
              {p.externalReviews.asOf}
            </p>
            {p.externalReviews.summary && (
              <p className="prose-body mt-3 leading-relaxed text-foreground">{p.externalReviews.summary}</p>
            )}
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {p.externalReviews.positives && p.externalReviews.positives.length > 0 && (
                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-wide text-primary">What they praise</h3>
                  <ul className="mt-2 space-y-1.5">
                    {p.externalReviews.positives.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-foreground">
                        <Check size={15} className="mt-0.5 shrink-0 text-primary" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {p.externalReviews.negatives && p.externalReviews.negatives.length > 0 && (
                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-wide text-accent">The gripes</h3>
                  <ul className="mt-2 space-y-1.5">
                    {p.externalReviews.negatives.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-muted">
                        <X size={15} className="mt-0.5 shrink-0 text-accent" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>

          {p.externalReviews.quotes && p.externalReviews.quotes.length > 0 && (
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {p.externalReviews.quotes.map((qt) => (
                <figure key={qt.name + qt.date} className="rounded-2xl border border-border bg-surface p-5">
                  <Quote size={16} className="text-primary" aria-hidden />
                  <blockquote className="mt-2 text-sm leading-relaxed text-foreground">“{qt.text}”</blockquote>
                  <figcaption className="mt-3 flex items-center gap-2 text-xs text-muted">
                    <span className="inline-flex items-center gap-0.5 font-semibold text-foreground">
                      {qt.stars}
                      <Star size={11} className="fill-primary text-primary" />
                    </span>
                    · {qt.name} · {qt.label} · {qt.date}
                  </figcaption>
                </figure>
              ))}
            </div>
          )}

          <p className="mt-3 text-xs leading-relaxed text-muted">
            Ratings and quotes are drawn from {p.externalReviews.source} and shown as posted there — including
            whether each was “invited” (solicited by the company) or independently “verified.” We don't edit or
            curate them to flatter our pick.
          </p>
        </section>
      )}

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

      {/* Bottom line */}
      {p.editorial && (
        <section className="mt-10 rounded-2xl border-2 border-primary/30 bg-primary-light/40 p-6">
          <h2 className="font-serif text-2xl font-semibold text-foreground">The bottom line</h2>
          <p className="prose-body mt-3 leading-relaxed text-foreground">{p.editorial.bottomLine}</p>
          <a
            href={p.affiliateUrl}
            target="_blank"
            rel="sponsored nofollow noopener"
            className="mt-4 inline-flex items-center gap-1 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white hover:bg-primary-dark"
          >
            {p.ctaText}: {p.name} <ArrowUpRight size={15} />
          </a>
        </section>
      )}

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
    </ArticleLayout>
  );
}
