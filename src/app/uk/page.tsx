import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, ArrowRight, ShieldCheck, Trophy, Check, X, Landmark, CreditCard } from "lucide-react";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { EditorialByline } from "@/components/editorial-byline";
import { MedicalDisclaimer } from "@/components/medical-disclaimer";
import { MedicalSources } from "@/components/medical-sources";
import { Faq } from "@/components/faq";
import { UK_CHAMPION } from "@/data/uk";
import { pageMetadata, breadcrumbSchema, faqSchema } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "GLP-1 Weight Loss in the UK (2026): Mounjaro & Wegovy, NHS vs Private",
  description:
    "An independent UK guide to GLP-1 weight-loss medication — how to get Mounjaro and Wegovy on the NHS or privately, real costs in £, eligibility, and how to buy safely (per the MHRA).",
  path: "/uk",
  locale: "en_GB",
  languages: { "en-GB": "/uk", "en-US": "/", "x-default": "/" },
});

const FAQS = [
  {
    q: "Can I get Mounjaro or Wegovy on the NHS?",
    a: "Sometimes, but access is tightly restricted. Mounjaro (tirzepatide) began a phased NHS rollout on 23 June 2025, initially for people with a BMI of 40 or more plus four or more weight-related conditions. Wegovy (semaglutide) is only available through specialist NHS weight-management services (tiers 3–4) for up to two years. Most people who want treatment sooner use a private, regulated online pharmacy.",
  },
  {
    q: "How much does GLP-1 weight-loss medication cost privately in the UK?",
    a: "Private prices typically run about £99–£350 a month depending on the medication and dose. Wegovy generally starts lower than Mounjaro. Prices are set by each pharmacy and change with manufacturer list prices, so always check today's checkout total — including whether needles and a sharps bin are included.",
  },
  {
    q: "Is it legal to buy semaglutide or tirzepatide without a prescription in the UK?",
    a: "No. The MHRA states it is against the law to supply these medicines without a prescription, and it has seized fake pens and dismantled illegal manufacturing operations. There is no legal 'compounded' GLP-1 market in the UK the way there was in the US — only brand-name Mounjaro or Wegovy from a registered pharmacy after a clinical assessment.",
  },
  {
    q: "Which is better for weight loss, Mounjaro or Wegovy?",
    a: "In head-to-head trial evidence, tirzepatide (Mounjaro) produced greater average weight loss than semaglutide (Wegovy). Both are effective and the right choice depends on your history, tolerance and cost. A prescriber should decide with you.",
  },
];

const c = UK_CHAMPION;

export default function UkHubPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }}
      />
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
        GLP-1 weight loss in the UK
      </h1>
      <EditorialByline chips={["UK-specific: NHS, NICE & MHRA"]} cites="NHS, NICE &amp; MHRA" />

      <div className="mt-6 rounded-r-xl border-l-4 border-primary bg-primary-light/40 py-4 pl-5 pr-4">
        <p className="leading-relaxed text-foreground">
          <strong>Short answer:</strong> in the UK you can get GLP-1 weight-loss medication —{" "}
          <strong>Mounjaro</strong> or <strong>Wegovy</strong> — two ways. The <strong>NHS</strong> route is real but
          heavily restricted (long waits, strict eligibility). The <strong>private</strong> route through a regulated
          online pharmacy is faster, costs roughly <strong>£99–£350/month</strong>, and always requires a clinical
          assessment. There is <strong>no legal cheap "compounded" option</strong> here — only brand-name medication.
        </p>
      </div>

      <MedicalDisclaimer className="mt-4" />

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
              <li className="flex gap-2"><Check size={15} className="mt-0.5 shrink-0 text-primary" /> Mounjaro: phased GP rollout since 23 June 2025 (BMI 40+ and 4+ conditions first)</li>
              <li className="flex gap-2"><Check size={15} className="mt-0.5 shrink-0 text-primary" /> Wegovy: specialist services only, up to 2 years</li>
              <li className="flex gap-2"><X size={15} className="mt-0.5 shrink-0 text-accent" /> Most people aren't yet eligible, and waits are long</li>
            </ul>
            <Link href="/uk/mounjaro-nhs-eligibility" className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline">
              Check NHS Mounjaro eligibility <ArrowRight size={14} />
            </Link>
          </div>
          <div className="rounded-2xl border border-border bg-surface p-5">
            <h3 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-primary">
              <CreditCard size={16} /> Private
            </h3>
            <ul className="mt-3 space-y-2 text-sm text-foreground">
              <li className="flex gap-2"><Check size={15} className="mt-0.5 shrink-0 text-primary" /> Fast — often assessed and shipped within days</li>
              <li className="flex gap-2"><Check size={15} className="mt-0.5 shrink-0 text-primary" /> Roughly £99–£350/month by medication and dose</li>
              <li className="flex gap-2"><Check size={15} className="mt-0.5 shrink-0 text-primary" /> Must use a GPhC-registered pharmacy with a clinical assessment</li>
              <li className="flex gap-2"><X size={15} className="mt-0.5 shrink-0 text-accent" /> Paid out of pocket; brand-name only</li>
            </ul>
            <Link href="/uk/buying-glp1-safely" className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline">
              How to buy safely (MHRA) <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* Champion pick */}
      <section className="mt-10">
        <h2 className="font-serif text-2xl font-semibold text-foreground">Our UK pick for private access</h2>
        <div className="mt-4 rounded-2xl border-2 border-primary/30 bg-primary-light/30 p-6">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-primary px-3 py-1 text-xs font-bold uppercase tracking-wide text-white">
            <Trophy size={14} /> Our #1 UK pick
          </span>
          <h3 className="mt-3 text-2xl font-bold text-foreground">{c.name}</h3>
          <p className="mt-1 text-foreground">{c.tagline}.</p>
          <p className="mt-2 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
            <ShieldCheck size={15} /> {c.regulated}
          </p>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            <div className="rounded-xl border border-border bg-surface p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-muted">Mounjaro</p>
              <p className="mt-1 text-sm font-semibold text-foreground">{c.price.mounjaro}</p>
            </div>
            <div className="rounded-xl border border-border bg-surface p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-muted">Wegovy</p>
              <p className="mt-1 text-sm font-semibold text-foreground">{c.price.wegovy}</p>
            </div>
          </div>
          <p className="mt-3 text-xs text-muted">
            Prices are provider-reported and change with manufacturer list prices — confirm today's total at checkout.
          </p>
          <a
            href={c.url}
            target="_blank"
            rel="sponsored nofollow noopener"
            className="mt-4 inline-flex items-center gap-1 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white hover:bg-primary-dark"
          >
            {c.ctaText}: {c.name} <ArrowUpRight size={15} />
          </a>
        </div>
      </section>

      {/* Guides */}
      <section className="mt-10">
        <h2 className="font-serif text-2xl font-semibold text-foreground">UK guides</h2>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          {[
            { href: "/uk/mounjaro-nhs-eligibility", label: "Mounjaro on the NHS: am I eligible?" },
            { href: "/uk/buying-glp1-safely", label: "Buying GLP-1 safely in the UK (MHRA)" },
          ].map((g) => (
            <Link
              key={g.href}
              href={g.href}
              className="group flex items-center justify-between rounded-xl border border-border bg-surface p-4 transition-colors hover:border-primary"
            >
              <span className="text-sm font-semibold text-foreground">{g.label}</span>
              <ArrowRight size={15} className="text-primary transition-transform group-hover:translate-x-0.5" />
            </Link>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="mt-10">
        <h2 className="font-serif text-2xl font-semibold text-foreground">UK GLP-1: common questions</h2>
        <div className="mt-4">
          <Faq items={FAQS} />
        </div>
      </section>

      <MedicalSources keys={["nhs-tirzepatide-ta1026", "nice-ta875", "mhra-illegal-weightloss", "which-glp1-uk-costs"]} />
    </div>
  );
}
