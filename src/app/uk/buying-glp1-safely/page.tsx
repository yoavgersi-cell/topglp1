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
  title: "How to Buy GLP-1 Safely in the UK (2026): MHRA Warnings & Legal Routes",
  description:
    "The MHRA warns it's illegal and dangerous to buy weight-loss injections without a prescription. How to buy Mounjaro or Wegovy safely from a GPhC-registered pharmacy, and the red flags to avoid.",
  path: "/uk/buying-glp1-safely",
  locale: "en_GB",
  languages: { "en-GB": "/uk/buying-glp1-safely", "x-default": "/uk/buying-glp1-safely" },
});

const FAQS = [
  {
    q: "Is it legal to buy Wegovy or Mounjaro without a prescription in the UK?",
    a: "No. The MHRA states it is against the law to supply these prescription-only medicines without a prescription. Legal access always involves a clinical assessment by a prescriber and a GPhC-registered pharmacy — whether on the NHS or privately.",
  },
  {
    q: "Are 'compounded' or cheaper unbranded GLP-1 pens sold in the UK legitimate?",
    a: "No. Unlike the former US compounding market, there is no legal compounded-GLP-1 route in the UK. The MHRA has seized hundreds of fake Ozempic pens and dismantled an illegal manufacturing facility — its largest-ever weight-loss medicine seizure. Products sold outside the regulated system may be fake, contaminated or wrongly dosed, and some have contained insulin, causing hospitalisations.",
  },
  {
    q: "How do I check a UK online pharmacy is legitimate?",
    a: "Confirm it is registered with the General Pharmaceutical Council (GPhC) — you can search the GPhC register — and that it requires a proper online consultation before prescribing. Be wary of any seller on social media or in a beauty salon, any 'no prescription needed' offer, and prices that look too good to be true.",
  },
];

const c = UK_CHAMPION;

const REDFLAGS = [
  "Sold on social media, messaging apps, or in a beauty salon or gym",
  "'No prescription needed' or no real medical questions asked",
  "Prices far below the £99–£350/month range",
  "No GPhC registration number you can verify",
  "Unbranded, 'compounded', or generic-looking pens",
];

const GREEN = [
  "Registered with the GPhC (check the register)",
  "A genuine online consultation reviewed by a prescriber",
  "Brand-name Mounjaro or Wegovy in sealed manufacturer packaging",
  "Clear pricing, and UK contact details and a named pharmacy",
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
              { name: "Buying GLP-1 safely", path: "/uk/buying-glp1-safely" },
            ]),
          ),
        }}
      />
      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "UK", path: "/uk" },
          { name: "Buying GLP-1 safely", path: "/uk/buying-glp1-safely" },
        ]}
      />

      <h1 className="font-serif text-4xl font-semibold leading-tight text-foreground">
        How to buy GLP-1 safely in the UK
      </h1>
      <EditorialByline chips={["UK-specific: MHRA guidance"]} cites="the MHRA" />

      <div className="mt-6 rounded-r-xl border-l-4 border-accent bg-accent-light/50 py-4 pl-5 pr-4">
        <p className="flex items-start gap-2 leading-relaxed text-foreground">
          <ShieldAlert size={20} className="mt-0.5 shrink-0 text-accent" />
          <span>
            <strong>The MHRA is clear:</strong> it is <strong>illegal to supply</strong> semaglutide or tirzepatide
            without a prescription in the UK, and buying outside the regulated system is dangerous. Regulators have
            seized fake pens and shut down illegal manufacturing — some counterfeit pens contained insulin and put
            people in hospital.
          </span>
        </p>
      </div>

      <MedicalDisclaimer className="mt-4" />

      {/* No compounding in the UK */}
      <section className="mt-10">
        <h2 className="font-serif text-2xl font-semibold text-foreground">There is no legal "cheap compounded" option</h2>
        <p className="prose-body mt-3 leading-relaxed text-foreground">
          If you've read US content about inexpensive "compounded" semaglutide, that market <strong>does not exist
          legally in the UK</strong>. Here, the only lawful GLP-1 medicines are brand-name{" "}
          <strong>Mounjaro (tirzepatide)</strong> and <strong>Wegovy (semaglutide)</strong>, supplied by a registered
          pharmacy after a clinical assessment. Anything advertised as a cheaper unbranded or "compounded" pen is
          operating outside the law — and the MHRA's record seizures show why that's a real safety risk, not a
          technicality.
        </p>
      </section>

      {/* Green flags / red flags */}
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

      {/* Safe route CTA */}
      <section className="mt-10 rounded-2xl border-2 border-primary/30 bg-primary-light/30 p-6">
        <h2 className="font-serif text-2xl font-semibold text-foreground">A regulated way to start</h2>
        <p className="prose-body mt-3 leading-relaxed text-foreground">
          If you're going private, use a GPhC-registered pharmacy that assesses you properly. Our UK pick is{" "}
          <strong>{c.name}</strong> — {c.regulated} — offering brand-name Mounjaro and Wegovy with a clinician
          assessment and {c.delivery.toLowerCase()}. Always confirm the current price and that a prescriber reviews
          your history before you order.
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

      {/* FAQ */}
      <section className="mt-10">
        <h2 className="font-serif text-2xl font-semibold text-foreground">Buying safely: common questions</h2>
        <div className="mt-4">
          <Faq items={FAQS} />
        </div>
      </section>

      <nav className="mt-10 border-t border-border pt-6">
        <Link href="/uk" className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline">
          <ArrowRight size={14} className="rotate-180" /> Back to the UK GLP-1 hub
        </Link>
      </nav>

      <MedicalSources keys={["mhra-illegal-weightloss", "mhra-record-seizure", "nhs-tirzepatide-ta1026"]} />
    </div>
  );
}
