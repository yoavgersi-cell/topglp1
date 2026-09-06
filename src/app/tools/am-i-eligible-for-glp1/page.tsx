import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { EligibilityChecker } from "@/components/eligibility-checker";
import { pageMetadata, breadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Am I Eligible for GLP-1? Free BMI & Eligibility Checker",
  description:
    "Check whether you likely qualify for GLP-1 weight-loss medication. Free BMI calculator plus the clinical criteria prescribers use — no signup, instant result.",
  path: "/tools/am-i-eligible-for-glp1",
});

export default function EligibilityPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Home", path: "/" },
              { name: "Tools", path: "/tools" },
              { name: "Eligibility checker", path: "/tools/am-i-eligible-for-glp1" },
            ]),
          ),
        }}
      />
      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "Tools", path: "/tools" },
          { name: "Eligibility checker", path: "/tools/am-i-eligible-for-glp1" },
        ]}
      />

      <h1 className="font-serif text-4xl font-semibold text-foreground">Am I eligible for GLP-1?</h1>
      <p className="mt-3 text-lg leading-relaxed text-muted">
        Prescribers generally use a simple threshold: a BMI of 30 or higher, or 27 or higher with a weight-related
        condition. Enter your details for an instant, no-signup estimate.
      </p>

      <div className="mt-8">
        <EligibilityChecker />
      </div>

      <section className="prose-body mt-10">
        <h2 className="font-serif text-2xl font-semibold text-foreground">The criteria, explained</h2>
        <p>
          The FDA-approved GLP-1 weight-management drugs (Wegovy, Zepbound) are indicated for adults with a BMI of at
          least 30 (obesity), or at least 27 (overweight) when paired with a weight-related condition such as type 2
          diabetes, high blood pressure, high cholesterol, or obstructive sleep apnea.
        </p>
        <p>
          BMI is a rough screen, not a full picture of health — muscle mass, body composition and individual risk all
          matter, which is why a clinician makes the final call. If you're close to the threshold or unsure, that's
          exactly the conversation to have with a licensed provider.
        </p>
        <p>
          Curious what treatment would cost if you qualify? Try the{" "}
          <Link href="/tools/glp1-cost-calculator" className="font-semibold text-primary underline">
            GLP-1 cost calculator
          </Link>{" "}
          or see the{" "}
          <Link href="/best-glp1-providers" className="font-semibold text-primary underline">best GLP-1 programs</Link>.
        </p>
      </section>
    </div>
  );
}
