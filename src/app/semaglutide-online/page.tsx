import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { MedPriceTable } from "@/components/med-price-table";
import { MedicalDisclaimer } from "@/components/medical-disclaimer";
import { CONTENT_REVIEWED } from "@/lib/site";
import { pageMetadata, breadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Semaglutide Online 2026: Compare Verified Programs From $69/mo",
  description:
    "Where to get semaglutide online in 2026 — compounded and branded programs compared by real monthly price, medications and credentials. Our #1 pick from $69/mo.",
  path: "/semaglutide-online",
});

export default function SemaglutideOnlinePage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Home", path: "/" },
              { name: "Semaglutide online", path: "/semaglutide-online" },
            ]),
          ),
        }}
      />
      <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Semaglutide online", path: "/semaglutide-online" }]} />

      <h1 className="font-serif text-4xl font-semibold text-foreground">Semaglutide online in 2026</h1>
      <p className="mt-3 max-w-2xl text-lg leading-relaxed text-muted">
        Semaglutide — the molecule in Wegovy and Ozempic — is available online through telehealth as both compounded
        and branded prescriptions. Here are the verified programs, ranked by real monthly price, with our top pick from
        $69/mo.
      </p>
      <p className="mt-3 text-xs text-muted">Last reviewed {CONTENT_REVIEWED} · Provider-reported pricing. We may earn a commission.</p>

      <MedicalDisclaimer className="mt-6" />

      <div className="mt-8">
        <MedPriceTable kind="semaglutide" />
      </div>

      <section className="prose-body mt-10">
        <h2 className="font-serif text-2xl font-semibold text-foreground">Compounded vs branded semaglutide</h2>
        <p>
          Branded semaglutide (Wegovy for weight loss, Ozempic for diabetes) is FDA-approved but lists near $1,000+/month
          without insurance. Compounded semaglutide — the same molecule, prepared by a compounding pharmacy — is sold
          through telehealth for as little as $69/month, which is why most online programs offer it. The trade-off is
          that compounded products aren't FDA-approved finished drugs, so a legitimate, accredited pharmacy matters.
        </p>
        <p>
          Our top pick, <Link href="/reviews/embody" className="font-semibold text-primary underline">Embody</Link>,
          leads on flat $69/mo compounded semaglutide with free 1–2 day shipping and LegitScript-certified 503A
          pharmacies. Learn more in our{" "}
          <Link href="/medications/semaglutide" className="font-semibold text-primary underline">semaglutide guide</Link>,
          check your cost with the{" "}
          <Link href="/tools/glp1-cost-calculator" className="font-semibold text-primary underline">cost calculator</Link>,
          or verify a program with the{" "}
          <Link href="/tools/glp1-provider-safety-check" className="font-semibold text-primary underline">safety check</Link>.
        </p>
      </section>
    </div>
  );
}
