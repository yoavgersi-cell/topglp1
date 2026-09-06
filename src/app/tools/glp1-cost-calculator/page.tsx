import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { CostCalculator } from "@/components/cost-calculator";
import { pageMetadata, breadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "GLP-1 Cost Calculator: What Will You Actually Pay in 2026?",
  description:
    "Free GLP-1 cost calculator. Estimate your real monthly and total cost for semaglutide, tirzepatide, Wegovy, Zepbound, Ozempic and Mounjaro — cash, insured, or excluded.",
  path: "/tools/glp1-cost-calculator",
});

export default function CostCalculatorPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Home", path: "/" },
              { name: "Tools", path: "/tools" },
              { name: "Cost calculator", path: "/tools/glp1-cost-calculator" },
            ]),
          ),
        }}
      />
      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "Tools", path: "/tools" },
          { name: "Cost calculator", path: "/tools/glp1-cost-calculator" },
        ]}
      />

      <h1 className="font-serif text-4xl font-semibold text-foreground">GLP-1 cost calculator</h1>
      <p className="mt-3 text-lg leading-relaxed text-muted">
        GLP-1 pricing is confusing because there are three separate markets — branded through insurance, branded cash,
        and compounded through telehealth. Tell us your medication and insurance situation and we'll estimate what you'd
        actually pay.
      </p>

      <div className="mt-8">
        <CostCalculator />
      </div>

      <section className="prose-body mt-10">
        <h2 className="font-serif text-2xl font-semibold text-foreground">How GLP-1 pricing really works</h2>
        <p>
          The single biggest driver of your cost isn't the drug — it's the route. The same molecule (semaglutide or
          tirzepatide) can cost over $1,000 a month as a branded product paid in cash, a plan copay of $25–$100 if your
          insurance covers it, or roughly $69–$300 a month as a compounded preparation through telehealth.
        </p>
        <p>
          The catch with insurance is that many plans cover GLP-1 for type 2 diabetes but exclude it for weight loss, and
          even when it's covered, prior authorization is common. That's why so many people end up paying cash — and why
          compounded programs, led by our top pick{" "}
          <Link href="/best-glp1-providers" className="font-semibold text-primary underline">Embody</Link> at $69/mo, have
          become the practical way to start.
        </p>
        <p>
          Want the full breakdown? Read our{" "}
          <Link href="/guides/glp1-cost-and-insurance" className="font-semibold text-primary underline">
            GLP-1 cost &amp; insurance guide
          </Link>{" "}
          or jump to the{" "}
          <Link href="/cheapest-glp1" className="font-semibold text-primary underline">cheapest GLP-1 options</Link>.
        </p>
      </section>
    </div>
  );
}
