import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { Quiz } from "@/components/quiz";
import { pageMetadata, breadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "GLP-1 Match Quiz: Find Your Best Program in 7 Questions",
  description:
    "Answer 7 quick questions about budget, medication, insurance and priorities, and get matched to the GLP-1 telehealth program that fits you best. Free, no signup.",
  path: "/find-your-match",
});

export default function FindYourMatchPage() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-10 sm:px-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Home", path: "/" },
              { name: "Find your match", path: "/find-your-match" },
            ]),
          ),
        }}
      />
      <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Find your match", path: "/find-your-match" }]} />

      <h1 className="font-serif text-4xl font-semibold text-foreground">Find your GLP-1 match</h1>
      <p className="mt-3 text-lg leading-relaxed text-muted">
        Seven quick questions — budget, medication, insurance and what matters most — and we'll point you to the
        program that fits. No signup, instant result.
      </p>

      <div className="mt-8">
        <Quiz />
      </div>

      <p className="mt-6 text-sm text-muted">
        Prefer to browse? See the{" "}
        <Link href="/best-glp1-providers" className="font-semibold text-primary underline">full ranking</Link> or the{" "}
        <Link href="/cheapest-glp1" className="font-semibold text-primary underline">cheapest options</Link>.
      </p>
    </div>
  );
}
