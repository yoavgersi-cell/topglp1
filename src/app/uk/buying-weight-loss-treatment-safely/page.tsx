import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, ShieldCheck, ShieldAlert, Check, X } from "lucide-react";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { EditorialByline } from "@/components/editorial-byline";
import { MedicalDisclaimer } from "@/components/medical-disclaimer";
import { MedicalSources } from "@/components/medical-sources";
import { Faq } from "@/components/faq";
import { UK_CHAMPION } from "@/data/uk";
import { pageMetadata, breadcrumbSchema, faqSchema } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "How to Get Weight-Loss Treatment Safely in the UK (2026): MHRA Rules",
  description:
    "The MHRA warns it's illegal and dangerous to obtain prescription weight-loss treatment without a prescription. How to use a GPhC-registered pharmacy safely, and the red flags to avoid.",
  path: "/uk/buying-weight-loss-treatment-safely",
  absoluteTitle: true,
  locale: "en_GB",
  languages: {
    "en-GB": "/uk/buying-weight-loss-treatment-safely",
    "x-default": "/uk/buying-weight-loss-treatment-safely",
  },
});

const FAQS = [
  {
    q: "Is it legal to get weight-loss treatment without a prescription in the UK?",
    a: "No. The MHRA states it is against the law to supply prescription weight-loss medicine without a prescription. Legal access always involves a clinical assessment by a prescriber and a GPhC-registered pharmacy — whether on the NHS or privately.",
  },
  {
    q: "Are cheap 'no prescription needed' offers legitimate?",
    a: "No. The MHRA has seized fake products and dismantled illegal operations — its largest-ever weight-loss treatment seizure. Products sold outside the regulated system may be fake, contaminated or wrongly dosed, and some have caused hospitalisations. If there's no clinical assessment, walk away.",
  },
  {
    q: "How do I check a UK online pharmacy is legitimate?",
    a: "Confirm it is registered with the General Pharmaceutical Council (GPhC) — you can search the GPhC register — and that it requires a genuine online consultation before any treatment. Be wary of sellers on social media or in beauty salons, 'no prescription needed' offers, and prices that look too good to be true.",
  },
];

const c = UK_CHAMPION;

const REDFLAGS = [
  "Sold on social media, messaging apps, or in a beauty salon or gym",
  "'No prescription needed', or no real medical questions asked",
  "No GPhC registration number you can verify",
  "Prices that look too good to be true",
  "No named UK pharmacy, address or contact details",
];

const GREEN = [
  "Registered with the GPhC (check the public register)",
  "A genuine online consultation reviewed by a prescriber",
  "Treatment supplied in sealed manufacturer packaging",
  "Clear UK contact details and a named pharmacy",
];

export default function BuyingSafelyPage() {
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
              { name: "Getting treatment safely", path: "/uk/buying-weight-loss-treatment-safely" },
            ]),
          ),
        }}
      />
      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "UK", path: "/uk" },
          { name: "Getting treatment safely", path: "/uk/buying-weight-loss-treatment-safely" },
        ]}
      />

      <h1 className="font-serif text-4xl font-semibold leading-tight text-foreground">
        How to get weight-loss treatment safely in the UK
      </h1>
      <EditorialByline chips={["UK-specific: MHRA guidance"]} cites="the MHRA" team="Top Editorial Team" />

      <div className="mt-6 rounded-r-xl border-l-4 border-accent bg-accent-light/50 py-4 pl-5 pr-4">
        <p className="flex items-start gap-2 leading-relaxed text-foreground">
          <ShieldAlert size={20} className="mt-0.5 shrink-0 text-accent" />
          <span>
            <strong>The MHRA is clear:</strong> it is <strong>illegal to supply</strong> prescription weight-loss
            medicine without a prescription in the UK, and obtaining it outside the regulated system is dangerous.
            Regulators have seized fake products and shut down illegal operations — some counterfeit products have put
            people in hospital.
          </span>
        </p>
      </div>

      <MedicalDisclaimer
        className="mt-4"
        body="This page explains weight-loss treatment options in general terms. Only a registered clinician who knows your history can decide what's right for you."
      />

      <section className="mt-10">
        <h2 className="font-serif text-2xl font-semibold text-foreground">Only a regulated route is legal</h2>
        <p className="prose-body mt-3 leading-relaxed text-foreground">
          In the UK, medical weight-loss treatment is <strong>prescription-only</strong>. The only lawful way to get it
          is through a registered pharmacy after a genuine clinical assessment — on the NHS or privately. Anything
          advertised as a cheaper "no prescription" shortcut is operating outside the law, and the MHRA's record
          seizures show why that's a real safety risk, not a technicality.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="font-serif text-2xl font-semibold text-foreground">Safe vs unsafe: how to tell</h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-border bg-surface p-5">
            <h3 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-primary">
              <ShieldCheck size={16} /> Signs it's legitimate
            </h3>
            <ul className="mt-3 space-y-2">
              {GREEN.map((g) => (
                <li key={g} className="flex items-start gap-2 text-sm text-foreground">
                  <Check size={15} className="mt-0.5 shrink-0 text-primary" /> <span>{g}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-border bg-surface p-5">
            <h3 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-accent">
              <ShieldAlert size={16} /> Red flags — walk away
            </h3>
            <ul className="mt-3 space-y-2">
              {REDFLAGS.map((r) => (
                <li key={r} className="flex items-start gap-2 text-sm text-muted">
                  <X size={15} className="mt-0.5 shrink-0 text-accent" /> <span>{r}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="mt-10 rounded-2xl border-2 border-primary/30 bg-primary-light/30 p-6">
        <h2 className="font-serif text-2xl font-semibold text-foreground">A regulated way to start</h2>
        <p className="prose-body mt-3 leading-relaxed text-foreground">
          If you're going private, use a GPhC-registered pharmacy that assesses you properly. Our UK pick is{" "}
          <strong>{c.name}</strong> — {c.regulated} — with a clinician assessment on every order and{" "}
          {c.delivery.toLowerCase()}. Always confirm a prescriber reviews your history before anything is supplied.
        </p>
        <a
          href={c.url}
          target="_blank"
          rel="sponsored nofollow noopener"
          className="mt-4 inline-flex items-center gap-1 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white hover:bg-primary-dark"
        >
          {c.ctaText}: {c.name} <ArrowUpRight size={15} />
        </a>
      </section>

      <section className="mt-10">
        <h2 className="font-serif text-2xl font-semibold text-foreground">Getting treatment safely: common questions</h2>
        <div className="mt-4">
          <Faq items={FAQS} />
        </div>
      </section>

      <nav className="mt-10 border-t border-border pt-6">
        <Link href="/uk" className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline">
          <ArrowRight size={14} className="rotate-180" /> Back to the UK hub
        </Link>
      </nav>

      <MedicalSources keys={["mhra-illegal-weightloss", "mhra-record-seizure", "nhs-obesity"]} />
    </div>
  );
}
