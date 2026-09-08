import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Check, Calendar, Users } from "lucide-react";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { EditorialByline } from "@/components/editorial-byline";
import { MedicalDisclaimer } from "@/components/medical-disclaimer";
import { MedicalSources } from "@/components/medical-sources";
import { Faq } from "@/components/faq";
import { UK_CHAMPION } from "@/data/uk";
import { pageMetadata, breadcrumbSchema, faqSchema } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Weight-Loss Treatment on the NHS (2026): Am I Eligible?",
  description:
    "Who can get medical weight-loss treatment on the NHS in 2026 — how specialist services and the phased GP programme work, the BMI and health criteria, and what to do if you're not yet eligible.",
  path: "/uk/nhs-weight-loss-treatment",
  absoluteTitle: true,
  locale: "en_GB",
  languages: { "en-GB": "/uk/nhs-weight-loss-treatment", "x-default": "/uk/nhs-weight-loss-treatment" },
});

const FAQS = [
  {
    q: "Can I get weight-loss treatment on the NHS in 2026?",
    a: "Only if you meet the current criteria, which are strict. NHS treatment is offered through specialist weight-management services, and a GP-led programme is being introduced in phases — starting with the highest-need group: adults with a BMI of 40 or more (lower for some ethnic groups) who also have several weight-related health conditions. The NHS contacts eligible patients directly.",
  },
  {
    q: "What health conditions count towards eligibility?",
    a: "The weight-related conditions considered include type 2 diabetes, high blood pressure, high cholesterol, obstructive sleep apnoea and cardiovascular disease. The first NHS group needs several of these alongside a high BMI.",
  },
  {
    q: "Are the BMI thresholds lower for some ethnic groups?",
    a: "Yes. BMI thresholds are reduced (typically by 2.5) for people from South Asian, Chinese, other Asian, Middle Eastern, Black African or African-Caribbean family backgrounds, because health risks occur at a lower BMI.",
  },
  {
    q: "What if I'm not eligible for NHS treatment yet?",
    a: "Most people who want treatment now don't yet meet the NHS criteria and use a regulated private service instead. That still requires an online clinical assessment by a prescriber. Never obtain treatment without a prescription — the MHRA warns that is illegal and unsafe.",
  },
];

const c = UK_CHAMPION;

export default function NhsWeightLossPage() {
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
              { name: "Weight-loss treatment on the NHS", path: "/uk/nhs-weight-loss-treatment" },
            ]),
          ),
        }}
      />
      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "UK", path: "/uk" },
          { name: "Weight-loss treatment on the NHS", path: "/uk/nhs-weight-loss-treatment" },
        ]}
      />

      <h1 className="font-serif text-4xl font-semibold leading-tight text-foreground">
        Weight-loss treatment on the NHS: am I eligible?
      </h1>
      <EditorialByline chips={["UK-specific: NHS eligibility"]} cites="NHS &amp; the MHRA" team="Top Editorial Team" />

      <div className="mt-6 rounded-r-xl border-l-4 border-primary bg-primary-light/40 py-4 pl-5 pr-4">
        <p className="leading-relaxed text-foreground">
          <strong>Short answer:</strong> the NHS does offer medical weight-loss treatment, but access is{" "}
          <strong>tightly rationed</strong>. It runs through specialist weight-management services and a{" "}
          <strong>phased GP programme</strong> that began with the highest-need group — adults with a{" "}
          <strong>BMI of 40 or more</strong> (lower for some ethnic groups) who <strong>also</strong> have several
          weight-related health conditions. Eligible patients are <strong>contacted directly</strong> by the NHS.
        </p>
      </div>

      <MedicalDisclaimer
        className="mt-4"
        body="This page explains weight-loss treatment options in general terms. Only a registered clinician who knows your history can decide what's right for you."
      />

      <section className="mt-10">
        <h2 className="flex items-center gap-2 font-serif text-2xl font-semibold text-foreground">
          <Users size={20} className="text-primary" /> The first-phase NHS criteria
        </h2>
        <div className="mt-4 rounded-2xl border border-border bg-surface p-6">
          <p className="text-sm font-semibold text-foreground">The earliest group generally needs BOTH:</p>
          <ul className="mt-3 space-y-2 text-sm text-foreground">
            <li className="flex gap-2"><Check size={16} className="mt-0.5 shrink-0 text-primary" /> A <strong>BMI of 40 or more</strong> (about 2.5 lower if you are from a South Asian, Chinese, other Asian, Middle Eastern, Black African or African-Caribbean background)</li>
            <li className="flex gap-2"><Check size={16} className="mt-0.5 shrink-0 text-primary" /> <strong>Several</strong> weight-related health conditions, such as:</li>
          </ul>
          <div className="mt-3 flex flex-wrap gap-2">
            {["Type 2 diabetes", "High blood pressure", "High cholesterol", "Obstructive sleep apnoea", "Cardiovascular disease"].map((cond) => (
              <span key={cond} className="rounded-full bg-primary-light px-3 py-1 text-xs font-semibold text-primary">{cond}</span>
            ))}
          </div>
          <p className="mt-4 text-sm text-muted">
            NHS treatment comes with wraparound support — diet and physical-activity advice — and is managed through
            your GP practice or a specialist service.
          </p>
        </div>
      </section>

      <section className="mt-10">
        <h2 className="flex items-center gap-2 font-serif text-2xl font-semibold text-foreground">
          <Calendar size={20} className="text-primary" /> Why it's a slow rollout
        </h2>
        <p className="prose-body mt-3 leading-relaxed text-foreground">
          The NHS is introducing GP-led treatment in stages to match capacity — planning to reach a large eligible
          group over its first few years. That's why the earliest access is limited to those at highest risk, widening
          over time. Eligible patients are identified from their health records and <strong>contacted by their GP</strong>,
          so there's no separate application to complete.
        </p>
      </section>

      <section className="mt-10 rounded-2xl border-2 border-primary/30 bg-primary-light/30 p-6">
        <h2 className="font-serif text-2xl font-semibold text-foreground">Not eligible yet? The private route</h2>
        <p className="prose-body mt-3 leading-relaxed text-foreground">
          Most people who want treatment now don't yet meet the NHS criteria. The legal alternative is a{" "}
          <strong>GPhC-registered</strong> service, which begins with an online clinical assessment. Our UK pick is{" "}
          <strong>{c.name}</strong> ({c.regulated}). Never obtain treatment without a prescription — the{" "}
          <Link href="/uk/buying-weight-loss-treatment-safely" className="font-semibold text-primary underline">MHRA warns it's illegal and unsafe</Link>.
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
        <h2 className="font-serif text-2xl font-semibold text-foreground">NHS weight-loss treatment: common questions</h2>
        <div className="mt-4">
          <Faq items={FAQS} />
        </div>
      </section>

      <nav className="mt-10 border-t border-border pt-6">
        <Link href="/uk" className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline">
          <ArrowRight size={14} className="rotate-180" /> Back to the UK hub
        </Link>
      </nav>

      <MedicalSources keys={["nhs-obesity", "mhra-illegal-weightloss"]} />
    </div>
  );
}
