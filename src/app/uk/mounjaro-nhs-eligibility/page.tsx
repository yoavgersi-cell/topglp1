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
  title: "Mounjaro on the NHS 2026: Am I Eligible? (Tirzepatide Criteria)",
  description:
    "Who can get Mounjaro (tirzepatide) on the NHS in 2026 — the phased rollout from 23 June 2025, the BMI and comorbidity criteria, and what to do if you're not yet eligible.",
  path: "/uk/mounjaro-nhs-eligibility",
  locale: "en_GB",
  languages: { "en-GB": "/uk/mounjaro-nhs-eligibility", "x-default": "/uk/mounjaro-nhs-eligibility" },
});

const FAQS = [
  {
    q: "Can I get Mounjaro on the NHS in 2026?",
    a: "Only if you meet the current phased criteria. From 23 June 2025 GPs began prescribing tirzepatide (Mounjaro) for weight management, starting with the highest-need group: adults with a BMI of 40 or more (37.5+ for some ethnic groups) who also have four or more weight-related conditions. The NHS is contacting eligible patients directly; it is being scaled up gradually over several years.",
  },
  {
    q: "What are the four qualifying conditions?",
    a: "The weight-related conditions counted are: type 2 diabetes, high blood pressure (hypertension), high cholesterol (dyslipidaemia), obstructive sleep apnoea, and cardiovascular disease. The first NHS cohort needs at least four of these alongside a BMI of 40 or more.",
  },
  {
    q: "Are the BMI thresholds lower for some ethnic groups?",
    a: "Yes. BMI thresholds are reduced by 2.5 kg/m² for people from South Asian, Chinese, other Asian, Middle Eastern, Black African or African-Caribbean family backgrounds, because health risks occur at a lower BMI.",
  },
  {
    q: "What if I'm not eligible for NHS Mounjaro yet?",
    a: "Most people who want treatment now don't yet meet the NHS criteria and use a private, regulated online pharmacy instead. That still requires a clinical assessment and costs roughly £180–£310 a month for Mounjaro depending on dose. Never buy without a prescription — the MHRA warns that is illegal and unsafe.",
  },
];

const c = UK_CHAMPION;

export default function MounjaroNhsPage() {
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
              { name: "Mounjaro on the NHS", path: "/uk/mounjaro-nhs-eligibility" },
            ]),
          ),
        }}
      />
      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "UK", path: "/uk" },
          { name: "Mounjaro on the NHS", path: "/uk/mounjaro-nhs-eligibility" },
        ]}
      />

      <h1 className="font-serif text-4xl font-semibold leading-tight text-foreground">
        Mounjaro on the NHS: am I eligible?
      </h1>
      <EditorialByline chips={["UK-specific: NHS & NICE"]} cites="NHS England &amp; NICE" />

      <div className="mt-6 rounded-r-xl border-l-4 border-primary bg-primary-light/40 py-4 pl-5 pr-4">
        <p className="leading-relaxed text-foreground">
          <strong>Short answer:</strong> the NHS began prescribing Mounjaro (tirzepatide) for weight loss on{" "}
          <strong>23 June 2025</strong>, but only in phases. The first group is adults with a{" "}
          <strong>BMI of 40 or more</strong> (2.5 lower for some ethnic groups) who <strong>also</strong> have{" "}
          <strong>four or more</strong> weight-related conditions. Eligible patients are being{" "}
          <strong>contacted directly</strong> by the NHS — you don't need to apply.
        </p>
      </div>

      <MedicalDisclaimer className="mt-4" />

      {/* Criteria */}
      <section className="mt-10">
        <h2 className="flex items-center gap-2 font-serif text-2xl font-semibold text-foreground">
          <Users size={20} className="text-primary" /> The first-phase NHS criteria
        </h2>
        <div className="mt-4 rounded-2xl border border-border bg-surface p-6">
          <p className="text-sm font-semibold text-foreground">You need BOTH of the following:</p>
          <ul className="mt-3 space-y-2 text-sm text-foreground">
            <li className="flex gap-2"><Check size={16} className="mt-0.5 shrink-0 text-primary" /> A <strong>BMI of 40 or more</strong> (or 37.5+ if you are from a South Asian, Chinese, other Asian, Middle Eastern, Black African or African-Caribbean background)</li>
            <li className="flex gap-2"><Check size={16} className="mt-0.5 shrink-0 text-primary" /> <strong>Four or more</strong> of these weight-related conditions:</li>
          </ul>
          <div className="mt-3 flex flex-wrap gap-2">
            {["Type 2 diabetes", "High blood pressure", "High cholesterol", "Obstructive sleep apnoea", "Cardiovascular disease"].map((cond) => (
              <span key={cond} className="rounded-full bg-primary-light px-3 py-1 text-xs font-semibold text-primary">{cond}</span>
            ))}
          </div>
          <p className="mt-4 text-sm text-muted">
            Treatment comes with wraparound support — diet and physical-activity advice — and is prescribed and
            monitored through your GP practice.
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section className="mt-10">
        <h2 className="flex items-center gap-2 font-serif text-2xl font-semibold text-foreground">
          <Calendar size={20} className="text-primary" /> Why it's a slow rollout
        </h2>
        <p className="prose-body mt-3 leading-relaxed text-foreground">
          NICE recommended tirzepatide for weight management (TA1026), and NHS England is introducing it in stages to
          match GP capacity — planning to reach an eligible cohort of around <strong>220,000 people over the first
          three years</strong>. That's why the earliest access is limited to the highest-need group, widening over
          time. Eligible patients are identified from health records and <strong>contacted by their GP</strong>, so
          there is no separate application to fill in.
        </p>
      </section>

      {/* Not eligible → private */}
      <section className="mt-10 rounded-2xl border-2 border-primary/30 bg-primary-light/30 p-6">
        <h2 className="font-serif text-2xl font-semibold text-foreground">Not eligible yet? The private route</h2>
        <p className="prose-body mt-3 leading-relaxed text-foreground">
          Most people who want treatment now don't yet meet the NHS criteria. The legal alternative is a{" "}
          <strong>GPhC-registered</strong> online pharmacy, which still requires a clinical assessment. Our UK pick is{" "}
          <strong>{c.name}</strong> ({c.regulated}) — Mounjaro {c.price.mounjaro}. Never buy GLP-1 without a
          prescription; the{" "}
          <Link href="/uk/buying-glp1-safely" className="font-semibold text-primary underline">MHRA warns it's illegal and unsafe</Link>.
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
        <h2 className="font-serif text-2xl font-semibold text-foreground">NHS Mounjaro: common questions</h2>
        <div className="mt-4">
          <Faq items={FAQS} />
        </div>
      </section>

      <nav className="mt-10 border-t border-border pt-6">
        <Link href="/uk" className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline">
          <ArrowRight size={14} className="rotate-180" /> Back to the UK GLP-1 hub
        </Link>
      </nav>

      <MedicalSources keys={["nhs-tirzepatide-ta1026", "nice-ta875", "mhra-illegal-weightloss"]} />
    </div>
  );
}
