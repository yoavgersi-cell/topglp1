import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { EditorialByline } from "@/components/editorial-byline";
import { MedicalDisclaimer } from "@/components/medical-disclaimer";
import { MedicalSources } from "@/components/medical-sources";
import { Faq } from "@/components/faq";
import { pageMetadata, breadcrumbSchema, faqSchema } from "@/lib/seo";
import { ArticleLayout, DefaultAside } from "@/components/article-layout";

export const metadata: Metadata = pageMetadata({
  title: "Does Medicare Cover GLP-1 for Weight Loss? 2026 Part D & Bridge Guide",
  description:
    "Medicare GLP-1 coverage in 2026 — the Part D weight-loss exclusion, what IS covered (diabetes, cardiovascular), and the new GLP-1 Bridge program offering Wegovy/Zepbound for a $50 copay.",
  path: "/glp1-medicare-coverage",
});

const FAQS = [
  {
    q: "Does Medicare cover Wegovy or Zepbound for weight loss?",
    a: "Not under standard Part D — federal law excludes drugs used for weight loss. However, the temporary Medicare GLP-1 Bridge program (July 1, 2026–December 31, 2027) lets eligible Part D members get Wegovy, Zepbound or Foundayo for a $50 copay per 30-day supply, operating outside the normal Part D benefit.",
  },
  {
    q: "Does Medicare cover Ozempic or Mounjaro?",
    a: "Yes, when prescribed for type 2 diabetes. GLP-1 drugs approved for diabetes are covered by Part D under their diabetes indication. Wegovy is also covered for reducing cardiovascular risk in people with heart disease and obesity.",
  },
  {
    q: "Who qualifies for the Medicare GLP-1 Bridge?",
    a: "Eligibility is based on a BMI of 35 or higher, or 27 or higher with other clinical criteria, and enrollment in a participating Part D plan. The program runs July 1, 2026 through December 31, 2027.",
  },
  {
    q: "Will Medicare permanently cover weight-loss GLP-1s?",
    a: "Not yet. A proposed rule to reinterpret obesity treatment for coverage was never finalized, and permanent coverage would require Congress to change the law. CMS is testing coverage through demonstrations (the GLP-1 Bridge, then the BALANCE Model beginning in 2027).",
  },
];

export default function MedicarePage() {
  return (
    <ArticleLayout aside={<DefaultAside />}>
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
              { name: "Medicare GLP-1 coverage", path: "/glp1-medicare-coverage" },
            ]),
          ),
        }}
      />
      <Breadcrumbs
        items={[{ name: "Home", path: "/" }, { name: "Medicare GLP-1 coverage", path: "/glp1-medicare-coverage" }]}
      />

      <h1 className="font-serif text-4xl font-semibold text-foreground">Does Medicare cover GLP-1 for weight loss?</h1>
      <EditorialByline chips={["Cites CMS, KFF & Medicare Rights"]} />

      <div className="mt-6 rounded-r-xl border-l-4 border-primary bg-primary-light/40 py-4 pl-5 pr-4">
        <p className="leading-relaxed text-foreground">
          <strong>Short answer:</strong> Standard Medicare Part D does <strong>not</strong> cover GLP-1 drugs for weight
          loss alone (a federal exclusion). But it <strong>does</strong> cover them for type 2 diabetes and for
          cardiovascular risk — and a temporary <strong>GLP-1 Bridge</strong> program (July 2026–Dec 2027) offers
          Wegovy, Zepbound or Foundayo for a <strong>$50 copay</strong> to eligible members.
        </p>
      </div>

      <MedicalDisclaimer className="mt-4" />

      <section className="prose-body mt-8">
        <h2 className="font-serif text-2xl font-semibold text-foreground">The weight-loss exclusion</h2>
        <p>
          By law, Medicare Part D excludes coverage of drugs used for weight loss. That's why, for years, Medicare
          beneficiaries couldn't get Wegovy or Zepbound covered for obesity even though the same molecules were covered
          for other conditions. Changing that permanently would take an act of Congress; a Biden-era proposal to
          reinterpret the rule for obesity was never finalized.
        </p>

        <h2 className="mt-8 font-serif text-2xl font-semibold text-foreground">What Medicare does cover</h2>
        <ul className="mt-3 space-y-2">
          <li className="flex items-start gap-2 text-foreground">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
            <span><strong>Type 2 diabetes:</strong> GLP-1s like Ozempic and Mounjaro are covered under Part D for diabetes.</span>
          </li>
          <li className="flex items-start gap-2 text-foreground">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
            <span><strong>Cardiovascular risk:</strong> Wegovy is covered to reduce the risk of major cardiovascular events in people with established heart disease and obesity.</span>
          </li>
        </ul>

        <h2 className="mt-8 font-serif text-2xl font-semibold text-foreground">The GLP-1 Bridge program (2026–2027)</h2>
        <p>
          Starting July 1, 2026, the Medicare GLP-1 Bridge gives eligible Part D members access to Foundayo, Wegovy
          (injection or tablet), or Zepbound (KwikPen) for weight management at a <strong>$50 copay</strong> per 30-day
          supply. Eligibility is based on a BMI of 35 or higher, or 27 or higher with other clinical criteria. The
          program operates <em>outside</em> the standard Part D benefit and runs through December 31, 2027.
        </p>

        <h2 className="mt-8 font-serif text-2xl font-semibold text-foreground">What comes next: the BALANCE Model</h2>
        <p>
          After the Bridge, CMS plans a longer-term demonstration — the BALANCE Model — scheduled to begin in 2027,
          testing broader approaches to covering obesity care in Medicare and Medicaid. As with any demonstration,
          details and timelines can change.
        </p>

        <h2 className="mt-8 font-serif text-2xl font-semibold text-foreground">If you're not eligible or not enrolled</h2>
        <p>
          If the Bridge doesn't apply to you, the cash route still does: compounded GLP-1 through licensed telehealth
          runs from about $69/month (our top pick,{" "}
          <Link href="/reviews/embody" className="font-semibold text-primary underline">Embody</Link>), versus $1,000+
          at the pharmacy. See the{" "}
          <Link href="/cheapest-glp1" className="font-semibold text-primary underline">cheapest options</Link> or check
          your{" "}
          <Link href="/glp1-by-state" className="font-semibold text-primary underline">state's Medicaid status</Link>.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="font-serif text-2xl font-semibold text-foreground">Medicare GLP-1: common questions</h2>
        <div className="mt-4">
          <Faq items={FAQS} />
        </div>
      </section>

      <MedicalSources keys={["medicare-glp1-bridge", "kff-medicare-balance", "fda-unapproved-glp1"]} />
    </ArticleLayout>
  );
}
