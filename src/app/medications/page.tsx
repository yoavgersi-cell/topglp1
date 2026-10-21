import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { MEDICATIONS } from "@/data/medications";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { pageMetadata, breadcrumbSchema, faqSchema } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "List of GLP-1 Drugs (2026): Every GLP-1 Medication Compared",
  description:
    "The complete list of GLP-1 medications in 2026 — semaglutide, tirzepatide, retatrutide, liraglutide and compounded options, compared by brand, average weight loss, dosing and cost.",
  path: "/medications",
});

// At-a-glance comparison — figures cited on each medication page and the
// complete guide. Lets answer engines lift the full list in one table.
const TABLE: { drug: string; brands: string; cls: string; loss: string; status: string }[] = [
  { drug: "Semaglutide", brands: "Wegovy, Ozempic, Rybelsus", cls: "GLP-1", loss: "~15%", status: "FDA-approved" },
  { drug: "Tirzepatide", brands: "Zepbound, Mounjaro", cls: "GLP-1 + GIP", loss: "~15–21%", status: "FDA-approved" },
  { drug: "Retatrutide", brands: "— (investigational)", cls: "GLP-1 + GIP + glucagon", loss: "~24% (phase 2)", status: "Not yet approved" },
  { drug: "Liraglutide", brands: "Saxenda, Victoza", cls: "GLP-1", loss: "~8%", status: "FDA-approved" },
  { drug: "Compounded GLP-1", brands: "Compounded sema/tirz", cls: "GLP-1 (± GIP)", loss: "Matches branded", status: "Not FDA-approved" },
];

const FAQS = [
  {
    q: "What are all the GLP-1 drugs?",
    a: "The GLP-1-class drugs used for weight loss are semaglutide (Wegovy/Ozempic), tirzepatide (Zepbound/Mounjaro) and liraglutide (Saxenda/Victoza), all FDA-approved, plus retatrutide, which is investigational and not yet approved. Compounded semaglutide and tirzepatide are the same molecules made by compounding pharmacies.",
  },
  {
    q: "How many GLP-1 medications are there for weight loss?",
    a: "Three molecules are FDA-approved and relevant for weight loss — semaglutide, tirzepatide and liraglutide — each sold under a weight-loss brand and a diabetes brand. Retatrutide is a fourth that is still in trials. Technically tirzepatide is a dual GLP-1/GIP agonist and retatrutide a triple agonist, but they're grouped with the GLP-1 class.",
  },
  {
    q: "Which GLP-1 is best for weight loss?",
    a: "Tirzepatide (Zepbound) produces the most average weight loss of the approved drugs — roughly 20–23% at the top dose — versus about 15% for semaglutide (Wegovy) and ~8% for liraglutide (Saxenda). Semaglutide has the longest track record and proven cardiovascular benefit. The best choice depends on efficacy, cost, insurance and tolerance.",
  },
  {
    q: "Are there GLP-1 pills, or only injections?",
    a: "Most GLP-1 drugs are injections, but an oral option exists: Rybelsus is oral semaglutide, taken as a daily tablet. Higher-dose oral semaglutide and new oral agents are in development, though injections currently remain the most potent delivery for weight loss.",
  },
  {
    q: "What is the newest GLP-1 drug?",
    a: "Among approved drugs, tirzepatide (Zepbound) is the newest and most effective for weight loss. The next wave includes retatrutide, a triple agonist that produced the largest average weight loss in phase 2 trials but is not yet FDA-approved.",
  },
];

export default function MedicationsIndex() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Home", path: "/" },
              { name: "Medications", path: "/medications" },
            ]),
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }}
      />
      <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Medications", path: "/medications" }]} />

      <h1 className="font-serif text-4xl font-semibold text-foreground">GLP-1 medications: the complete list</h1>
      <p className="mt-3 max-w-2xl text-lg leading-relaxed text-muted">
        Every GLP-1 drug used for weight loss in 2026 — semaglutide, tirzepatide, retatrutide,
        liraglutide and compounded options — compared by brand, average weight loss, dosing and
        cost. Tap any medication for the full guide.
      </p>

      {/* At-a-glance comparison table */}
      <div className="mt-8 overflow-x-auto rounded-2xl border border-border bg-surface">
        <table className="w-full border-collapse text-sm">
          <caption className="px-4 pt-4 text-left text-xs font-semibold uppercase tracking-wide text-muted">
            GLP-1 medications at a glance
          </caption>
          <thead>
            <tr className="border-b border-border">
              <th className="px-4 py-3 text-left font-semibold text-foreground">Drug</th>
              <th className="px-4 py-3 text-left font-semibold text-foreground">Brands</th>
              <th className="px-4 py-3 text-left font-semibold text-foreground">Receptors</th>
              <th className="px-4 py-3 text-left font-semibold text-foreground">Avg. weight loss</th>
              <th className="px-4 py-3 text-left font-semibold text-foreground">Status</th>
            </tr>
          </thead>
          <tbody>
            {TABLE.map((r) => (
              <tr key={r.drug} className="border-b border-border/60 last:border-0">
                <td className="px-4 py-3 font-semibold text-foreground">{r.drug}</td>
                <td className="px-4 py-3 text-muted">{r.brands}</td>
                <td className="px-4 py-3 text-muted">{r.cls}</td>
                <td className="px-4 py-3 text-foreground">{r.loss}</td>
                <td className="px-4 py-3 text-muted">{r.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-2 text-xs text-muted">
        Figures are trial averages (STEP, SURMOUNT, SCALE and phase-2 data). See each guide for the full picture and sources.
      </p>

      <div className="mt-10 space-y-5">
        {MEDICATIONS.map((med) => (
          <Link
            key={med.slug}
            href={`/medications/${med.slug}`}
            className="group block rounded-2xl border border-border bg-surface p-6 transition-all hover:-translate-y-0.5 hover:shadow-md"
          >
            <div className="flex flex-wrap items-center gap-3">
              <h2 className="text-2xl font-bold text-foreground">{med.name}</h2>
              <span
                className="rounded-full px-2.5 py-0.5 text-xs font-semibold text-white"
                style={{ backgroundColor: med.accent }}
              >
                {med.statusLabel}
              </span>
            </div>
            <p className="mt-1 text-sm text-muted">
              {med.drugClass} · {med.route} · Sold as {med.brandNames.join(", ")}
            </p>
            <p className="mt-3 max-w-3xl leading-relaxed text-foreground">{med.oneLiner}</p>
            <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary">
              Read the full guide <ArrowRight size={15} className="transition-transform group-hover:translate-x-0.5" />
            </span>
          </Link>
        ))}
      </div>

      {/* FAQ */}
      <section className="mt-14 border-t border-border pt-8">
        <h2 className="font-serif text-2xl font-semibold text-foreground">GLP-1 medications: FAQ</h2>
        <div className="mt-4 divide-y divide-border">
          {FAQS.map((f) => (
            <details key={f.q} className="group py-4">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-4 font-semibold text-foreground">
                <span>{f.q}</span>
                <span className="mt-1 shrink-0 text-primary transition-transform group-open:rotate-45">+</span>
              </summary>
              <p className="mt-3 leading-relaxed text-muted">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      <div className="mt-10 rounded-2xl border border-primary/30 bg-primary-light/40 p-6">
        <p className="text-sm font-semibold text-foreground">
          Want the full picture in one place?
        </p>
        <Link href="/glp1-weight-loss-guide" className="mt-2 inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline">
          Read the complete GLP-1 weight-loss guide <ArrowRight size={14} />
        </Link>
      </div>
    </div>
  );
}
