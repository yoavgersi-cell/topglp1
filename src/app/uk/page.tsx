import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, ArrowRight, ShieldCheck, Trophy, Check, X, Landmark, CreditCard, Star } from "lucide-react";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { EditorialByline } from "@/components/editorial-byline";
import { MedicalDisclaimer } from "@/components/medical-disclaimer";
import { MedicalSources } from "@/components/medical-sources";
import { Faq } from "@/components/faq";
import { TrustpilotStars, TrustpilotLogo } from "@/components/trustpilot";
import { UK_CHAMPION, ukBattleSlugs, resolveUkBattle } from "@/data/uk";
import { pageMetadata, breadcrumbSchema, faqSchema } from "@/lib/seo";

const COMPARISONS = ukBattleSlugs()
  .map((slug) => {
    const b = resolveUkBattle(slug);
    return b ? { slug, title: `${b.a.name} vs ${b.b.name}` } : null;
  })
  .filter((x): x is { slug: string; title: string } => Boolean(x));

export const metadata: Metadata = pageMetadata({
  title: "Weight-Loss Treatment in the UK (2026): NHS vs Private, Done Safely",
  description:
    "An independent UK guide to medical weight-loss treatment — how the NHS route and regulated private services work, who's eligible, and how to get treatment safely from a GPhC-registered pharmacy.",
  path: "/uk",
  absoluteTitle: true,
  locale: "en_GB",
  languages: { "en-GB": "/uk", "en-US": "/", "x-default": "/" },
});

const FAQS = [
  {
    q: "Can I get weight-loss treatment on the NHS?",
    a: "Sometimes, but NHS access is tightly restricted and waits are long. Treatment is generally available through specialist NHS weight-management services, and a phased GP programme is being rolled out for people with a high BMI and several weight-related health conditions. Most people who want treatment sooner use a regulated private service.",
  },
  {
    q: "How do private weight-loss services work in the UK?",
    a: "You complete an online health assessment, a prescriber reviews whether treatment is suitable, and if approved your order is dispatched to your door. It must be a GPhC-registered pharmacy with a genuine clinical assessment — that's the legal, safe route.",
  },
  {
    q: "Is it safe to buy weight-loss treatment online?",
    a: "Only from a properly regulated pharmacy. The MHRA warns it is illegal to supply prescription weight-loss medicine without a prescription, and has seized fake products and shut down illegal operations. Always check the pharmacy is registered with the General Pharmaceutical Council (GPhC) and that a prescriber reviews your case.",
  },
  {
    q: "Am I eligible for weight-loss treatment?",
    a: "Eligibility is decided by a clinician and usually depends on your BMI and health history. Private services may consider you from a BMI of around 25, while NHS routes require a higher BMI plus weight-related conditions. Complete an assessment to find out.",
  },
];

const c = UK_CHAMPION;

export default function UkHubPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Home", path: "/" },
              { name: "UK", path: "/uk" },
            ]),
          ),
        }}
      />
      <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "UK", path: "/uk" }]} />

      <span className="inline-flex items-center gap-1.5 rounded-full bg-primary-light px-3 py-1 text-xs font-bold uppercase tracking-wide text-primary">
        🇬🇧 United Kingdom
      </span>
      <h1 className="mt-3 font-serif text-4xl font-semibold leading-tight text-foreground">
        Weight-loss treatment in the UK
      </h1>
      <EditorialByline chips={["UK-specific: NHS, GPhC & MHRA"]} cites="NHS &amp; the MHRA" team="Top Editorial Team" />

      <div className="mt-6 rounded-r-xl border-l-4 border-primary bg-primary-light/40 py-4 pl-5 pr-4">
        <p className="leading-relaxed text-foreground">
          <strong>Short answer:</strong> in the UK there are two routes to medical weight-loss treatment. The{" "}
          <strong>NHS</strong> route is real but heavily restricted — strict eligibility and long waits. The{" "}
          <strong>private</strong> route, through a <strong>GPhC-registered</strong> pharmacy, is faster and always
          begins with a clinical assessment. Whichever you choose, treatment is <strong>prescription-only</strong> —
          it's illegal (and unsafe) to buy it without a prescription.
        </p>
      </div>

      <MedicalDisclaimer
        className="mt-4"
        body="This page explains weight-loss treatment options in general terms. Only a registered clinician who knows your history can decide what's right for you."
      />

      {/* NHS vs private */}
      <section className="mt-10">
        <h2 className="font-serif text-2xl font-semibold text-foreground">NHS or private — how to actually get it</h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-border bg-surface p-5">
            <h3 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-primary">
              <Landmark size={16} /> NHS
            </h3>
            <ul className="mt-3 space-y-2 text-sm text-foreground">
              <li className="flex gap-2"><Check size={15} className="mt-0.5 shrink-0 text-primary" /> Free, but tightly rationed</li>
              <li className="flex gap-2"><Check size={15} className="mt-0.5 shrink-0 text-primary" /> Specialist services, plus a phased GP programme</li>
              <li className="flex gap-2"><Check size={15} className="mt-0.5 shrink-0 text-primary" /> Needs a high BMI plus weight-related conditions</li>
              <li className="flex gap-2"><X size={15} className="mt-0.5 shrink-0 text-accent" /> Most people aren't yet eligible, and waits are long</li>
            </ul>
            <Link href="/uk/nhs-weight-loss-treatment" className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline">
              Who's eligible on the NHS? <ArrowRight size={14} />
            </Link>
          </div>
          <div className="rounded-2xl border border-border bg-surface p-5">
            <h3 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-primary">
              <CreditCard size={16} /> Private
            </h3>
            <ul className="mt-3 space-y-2 text-sm text-foreground">
              <li className="flex gap-2"><Check size={15} className="mt-0.5 shrink-0 text-primary" /> Fast — often assessed and dispatched within days</li>
              <li className="flex gap-2"><Check size={15} className="mt-0.5 shrink-0 text-primary" /> Begins with an online clinical assessment</li>
              <li className="flex gap-2"><Check size={15} className="mt-0.5 shrink-0 text-primary" /> Must be a GPhC-registered pharmacy</li>
              <li className="flex gap-2"><X size={15} className="mt-0.5 shrink-0 text-accent" /> Paid privately (out of pocket)</li>
            </ul>
            <Link href="/uk/buying-weight-loss-treatment-safely" className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline">
              How to get it safely (MHRA) <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* Champion provider */}
      <section className="mt-10">
        <h2 className="font-serif text-2xl font-semibold text-foreground">Our UK pick for a private service</h2>
        <div className="mt-4 rounded-2xl border-2 border-primary/30 bg-primary-light/30 p-6">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-primary px-3 py-1 text-xs font-bold uppercase tracking-wide text-white">
            <Trophy size={14} /> Our #1 UK pick
          </span>
          <h3 className="mt-3 text-2xl font-bold text-foreground">{c.name}</h3>
          <p className="mt-1 text-foreground">{c.tagline}.</p>
          <p className="mt-2 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
            <ShieldCheck size={15} /> {c.regulated}
          </p>
          {c.trustpilot && (
            <div className="mt-3 inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 text-sm">
              <TrustpilotStars value={c.trustpilot.scoreValue} max={c.trustpilot.scoreMax} size={15} />
              <span className="font-bold text-foreground">{c.trustpilot.score}</span>
              <TrustpilotLogo />
              <span className="text-muted">· {c.trustpilot.count.toLocaleString()} reviews</span>
            </div>
          )}
          <ul className="mt-4 space-y-2">
            {c.pros.slice(0, 4).map((pro) => (
              <li key={pro} className="flex items-start gap-2 text-sm text-foreground">
                <Check size={15} className="mt-0.5 shrink-0 text-primary" /> <span>{pro}</span>
              </li>
            ))}
          </ul>
          <a
            href={c.url}
            target="_blank"
            rel="sponsored nofollow noopener"
            className="mt-5 inline-flex items-center gap-1 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white hover:bg-primary-dark"
          >
            {c.ctaText}: {c.name} <ArrowUpRight size={15} />
          </a>
          <p className="mt-3 text-xs text-muted">
            Eligibility and suitability are decided by a clinician. We may earn a commission — it never changes our
            recommendation.
          </p>
        </div>
      </section>

      {/* Trustpilot quotes */}
      {c.trustpilot?.quotes && c.trustpilot.quotes.length > 0 && (
        <section className="mt-10">
          <h2 className="font-serif text-2xl font-semibold text-foreground">What real {c.name} customers say</h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {c.trustpilot.quotes.map((qt) => (
              <figure key={qt.name + qt.date} className="rounded-2xl border border-border bg-surface p-5">
                <blockquote className="text-sm leading-relaxed text-foreground">“{qt.text}”</blockquote>
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
          <p className="mt-3 text-xs text-muted">
            Ratings and quotes are drawn from {c.name}'s Trustpilot profile ({c.trustpilot?.count.toLocaleString()}{" "}
            reviews, {c.trustpilot?.score}, checked {c.trustpilot?.asOf}) and shown as posted there.
          </p>
        </section>
      )}

      {/* Compare providers */}
      {COMPARISONS.length > 0 && (
        <section className="mt-10">
          <h2 className="font-serif text-2xl font-semibold text-foreground">Compare UK providers</h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {COMPARISONS.map((cmp) => (
              <Link
                key={cmp.slug}
                href={`/uk/compare/${cmp.slug}`}
                className="group flex items-center justify-between rounded-xl border border-border bg-surface p-4 transition-colors hover:border-primary"
              >
                <span className="text-sm font-semibold text-foreground">{cmp.title}</span>
                <ArrowRight size={15} className="text-primary transition-transform group-hover:translate-x-0.5" />
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* FAQ */}
      <section className="mt-10">
        <h2 className="font-serif text-2xl font-semibold text-foreground">UK weight-loss treatment: common questions</h2>
        <div className="mt-4">
          <Faq items={FAQS} />
        </div>
      </section>

      <MedicalSources keys={["mhra-illegal-weightloss", "nhs-obesity", "mhra-record-seizure"]} />
    </div>
  );
}
