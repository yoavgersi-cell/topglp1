import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ANSWER_GROUPS, ALL_ANSWERS } from "@/data/answers";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { EditorialByline } from "@/components/editorial-byline";
import { pageMetadata, breadcrumbSchema, faqSchema } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "GLP-1 Quick Answers: Cost, Best Medication, Coverage & Safety (2026)",
  description:
    "Direct, cited answers to the most-asked GLP-1 questions — the cheapest program, the most effective medication, eligibility, side effects, and Medicare/Medicaid coverage.",
  path: "/glp1-answers",
});

export default function AnswersPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema(ALL_ANSWERS.map((a) => ({ q: a.q, a: a.a })))),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Home", path: "/" },
              { name: "Quick answers", path: "/glp1-answers" },
            ]),
          ),
        }}
      />
      <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Quick answers", path: "/glp1-answers" }]} />

      <h1 className="font-serif text-4xl font-semibold text-foreground">GLP-1 quick answers</h1>
      <EditorialByline chips={["Cites NEJM, FDA & CMS", "Direct answers, verified"]} />
      <p className="mt-4 text-lg leading-relaxed text-muted">
        Straight answers to the questions people ask most about GLP-1 medications — cost, which drug works best,
        eligibility, safety and coverage. Each answer leads with the bottom line, then the context.
      </p>

      {/* On-page contents */}
      <nav className="mt-8 flex flex-wrap gap-2">
        {ANSWER_GROUPS.map((g) => (
          <a
            key={g.category}
            href={`#${g.category.toLowerCase().replace(/[^a-z]+/g, "-")}`}
            className="rounded-full border border-border bg-surface px-3 py-1.5 text-sm font-medium text-foreground hover:border-primary"
          >
            {g.category}
          </a>
        ))}
      </nav>

      {ANSWER_GROUPS.map((g) => (
        <section key={g.category} id={g.category.toLowerCase().replace(/[^a-z]+/g, "-")} className="mt-10">
          <h2 className="font-serif text-2xl font-semibold text-foreground">{g.category}</h2>
          <div className="mt-4 space-y-5">
            {g.items.map((item) => (
              <div key={item.q} className="rounded-2xl border border-border bg-surface p-5">
                <h3 className="font-semibold text-foreground">{item.q}</h3>
                <p className="mt-2 leading-relaxed text-muted">{item.a}</p>
                {item.href && (
                  <Link href={item.href} className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline">
                    {item.hrefLabel ?? "Learn more"} <ArrowRight size={14} />
                  </Link>
                )}
              </div>
            ))}
          </div>
        </section>
      ))}

      <p className="mt-10 text-xs leading-relaxed text-muted">
        These answers are general educational information, not medical advice, and clinical figures are cited to
        peer-reviewed trials (NEJM) and the FDA on the linked pages. GLP-1 medications are prescription drugs — consult a
        licensed clinician. See our{" "}
        <Link href="/how-we-review" className="font-semibold text-primary underline">editorial standards</Link>.
      </p>
    </div>
  );
}
