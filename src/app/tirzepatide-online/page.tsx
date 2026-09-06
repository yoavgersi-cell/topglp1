import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { MedPriceTable } from "@/components/med-price-table";
import { MedicalDisclaimer } from "@/components/medical-disclaimer";
import { CONTENT_REVIEWED } from "@/lib/site";
import { pageMetadata, breadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Tirzepatide Online 2026: Compare Verified Programs From $119/mo",
  description:
    "Where to get tirzepatide online in 2026 — the dual GIP/GLP-1 molecule in Zepbound and Mounjaro, compared by real monthly price. Compounded from $119/mo.",
  path: "/tirzepatide-online",
});

export default function TirzepatideOnlinePage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Home", path: "/" },
              { name: "Tirzepatide online", path: "/tirzepatide-online" },
            ]),
          ),
        }}
      />
      <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Tirzepatide online", path: "/tirzepatide-online" }]} />

      <h1 className="font-serif text-4xl font-semibold text-foreground">Tirzepatide online in 2026</h1>
      <p className="mt-3 max-w-2xl text-lg leading-relaxed text-muted">
        Tirzepatide — the dual GIP/GLP-1 molecule in Zepbound and Mounjaro, and the most effective approved GLP-1-class
        drug — is available online as compounded and branded prescriptions. Here are the verified programs, ranked by
        real monthly price.
      </p>
      <p className="mt-3 text-xs text-muted">Last reviewed {CONTENT_REVIEWED} · Provider-reported pricing. We may earn a commission.</p>

      <MedicalDisclaimer className="mt-6" />

      <div className="mt-8">
        <MedPriceTable kind="tirzepatide" />
      </div>

      <section className="prose-body mt-10">
        <h2 className="font-serif text-2xl font-semibold text-foreground">Why tirzepatide costs more than semaglutide</h2>
        <p>
          Tirzepatide activates two receptors instead of one, and in trials produces more average weight loss — so it
          typically prices a little above semaglutide. Branded (Zepbound/Mounjaro) lists around $1,000+/month; compounded
          tirzepatide runs from about $119/month online.
        </p>
        <p>
          Our top pick, <Link href="/reviews/embody" className="font-semibold text-primary underline">Embody</Link>,
          offers flat $119/mo compounded tirzepatide with free 1–2 day shipping. See the full{" "}
          <Link href="/medications/tirzepatide" className="font-semibold text-primary underline">tirzepatide guide</Link>,
          compare it head-to-head with{" "}
          <Link href="/vs/semaglutide-vs-tirzepatide" className="font-semibold text-primary underline">semaglutide</Link>, or
          find the{" "}
          <Link href="/cheapest-tirzepatide" className="font-semibold text-primary underline">cheapest tirzepatide options</Link>.
        </p>
      </section>
    </div>
  );
}
