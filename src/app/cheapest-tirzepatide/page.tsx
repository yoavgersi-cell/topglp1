import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { MedPriceTable } from "@/components/med-price-table";
import { pageMetadata, breadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Cheapest Tirzepatide Online 2026: Compounded From $119/mo",
  description:
    "The cheapest ways to get tirzepatide (Zepbound/Mounjaro's molecule) online in 2026 — compounded programs ranked by real monthly price, from $119/mo.",
  path: "/cheapest-tirzepatide",
});

export default function CheapestTirzepatidePage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Home", path: "/" },
              { name: "Cheapest tirzepatide", path: "/cheapest-tirzepatide" },
            ]),
          ),
        }}
      />
      <Breadcrumbs
        items={[{ name: "Home", path: "/" }, { name: "Cheapest tirzepatide", path: "/cheapest-tirzepatide" }]}
      />

      <h1 className="font-serif text-4xl font-semibold text-foreground">Cheapest tirzepatide online in 2026</h1>
      <p className="mt-3 max-w-2xl text-lg leading-relaxed text-muted">
        Branded tirzepatide (Zepbound, Mounjaro) lists near $1,000+/month. Compounded tirzepatide through telehealth
        starts around $119/month for the same molecule. Here are the lowest-priced programs, ranked.
      </p>
      <p className="mt-3 text-xs text-muted">Last reviewed 2026-09-01 · Provider-reported pricing. We may earn a commission.</p>

      <div className="mt-8">
        <MedPriceTable kind="tirzepatide" />
      </div>

      <section className="prose-body mt-10">
        <h2 className="font-serif text-2xl font-semibold text-foreground">How to get tirzepatide cheaply — safely</h2>
        <p>
          The cheapest legitimate route to tirzepatide is a compounded program through a licensed telehealth clinic. Our
          top pick, <Link href="/reviews/embody" className="font-semibold text-primary underline">Embody</Link>, offers
          flat $119/mo compounded tirzepatide with free 1–2 day shipping and LegitScript-certified 503A pharmacies. The
          savings are real, but so is the responsibility to use an accredited pharmacy — run any program through our{" "}
          <Link href="/tools/glp1-provider-safety-check" className="font-semibold text-primary underline">safety check</Link>{" "}
          first, and read{" "}
          <Link href="/guides/compounded-vs-branded-glp1" className="font-semibold text-primary underline">
            compounded vs branded
          </Link>{" "}
          to understand the trade-off.
        </p>
      </section>
    </div>
  );
}
