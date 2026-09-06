import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Trophy } from "lucide-react";
import { PROVIDERS, type Provider } from "@/data/providers";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { pageMetadata, breadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Cheapest GLP-1 Online 2026: Semaglutide From $69/mo, Ranked",
  description:
    "The cheapest ways to get GLP-1 online in 2026 — compounded semaglutide from $69/mo and tirzepatide from $119/mo, ranked by real monthly price with what's included.",
  path: "/cheapest-glp1",
});

// Extract a sortable dollar figure from a spec string (first number found).
function priceValue(p: Provider): number {
  const src = `${p.specs.semaglutide} ${p.specs.startingPrice}`;
  const match = src.match(/\$(\d[\d,]*)/);
  if (match) return Number(match[1].replace(/,/g, ""));
  return 9999; // "varies" / branded → sort to the bottom
}

export default function CheapestGlp1Page() {
  const ranked = [...PROVIDERS].sort((a, b) => priceValue(a) - priceValue(b));

  return (
    <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Home", path: "/" },
              { name: "Cheapest GLP-1", path: "/cheapest-glp1" },
            ]),
          ),
        }}
      />
      <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Cheapest GLP-1", path: "/cheapest-glp1" }]} />

      <h1 className="font-serif text-4xl font-semibold text-foreground">Cheapest GLP-1 online in 2026</h1>
      <p className="mt-3 max-w-2xl text-lg leading-relaxed text-muted">
        The lowest-cost route to GLP-1 is compounded semaglutide or tirzepatide through telehealth — a fraction of
        branded cash price. Here are the most affordable programs, ranked by real monthly price, with our top pick
        leading the way.
      </p>
      <p className="mt-3 text-xs text-muted">
        Last reviewed 2026-09-01 · Prices are provider-reported and change often. We may earn a commission.
      </p>

      <div className="mt-8 overflow-x-auto rounded-2xl border border-border">
        <table className="w-full min-w-[620px] border-collapse text-sm">
          <thead>
            <tr className="bg-surface text-left">
              <th className="p-4 font-semibold text-muted">#</th>
              <th className="p-4 font-semibold text-muted">Program</th>
              <th className="p-4 font-semibold text-muted">Semaglutide</th>
              <th className="p-4 font-semibold text-muted">Tirzepatide</th>
              <th className="p-4 font-semibold text-muted">Type</th>
              <th className="p-4"></th>
            </tr>
          </thead>
          <tbody>
            {ranked.map((p, i) => (
              <tr key={p.id} className={i % 2 === 0 ? "bg-background" : "bg-surface"}>
                <td className="p-4 align-middle font-bold text-muted">{i + 1}</td>
                <td className="p-4 align-middle">
                  <div className="flex items-center gap-2">
                    <div className="relative h-6 w-20">
                      <Image src={p.logo} alt={`${p.name} logo`} fill className="object-contain object-left" sizes="80px" />
                    </div>
                    {p.rank === 1 && <Trophy size={14} className="text-primary" />}
                  </div>
                </td>
                <td className="p-4 align-middle font-medium text-foreground">{p.specs.semaglutide}</td>
                <td className="p-4 align-middle text-foreground">{p.specs.tirzepatide}</td>
                <td className="p-4 align-middle text-muted">{p.specs.offeringType}</td>
                <td className="p-4 align-middle">
                  <a
                    href={p.affiliateUrl}
                    target="_blank"
                    rel="sponsored nofollow noopener"
                    className="inline-flex items-center gap-1 rounded-full bg-primary px-3 py-1.5 text-xs font-semibold text-white hover:bg-primary-dark"
                  >
                    View <ArrowUpRight size={12} />
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <section className="prose-body mt-10">
        <h2 className="font-serif text-2xl font-semibold text-foreground">Why compounded is the cheapest route</h2>
        <p>
          Branded GLP-1 (Wegovy, Zepbound) lists near $1,000–$1,350 a month without insurance. Compounded versions of
          the same molecules — semaglutide and tirzepatide — are prepared by compounding pharmacies and sold through
          telehealth for as little as $69–$119 a month. That's the entire reason the online GLP-1 market exists.
        </p>
        <p>
          Our top pick, <Link href="/reviews/embody" className="font-semibold text-primary underline">Embody</Link>,
          leads on price with flat $69/mo semaglutide and $119/mo tirzepatide, free 1–2 day shipping, and LegitScript-certified
          503A pharmacies. The trade-off with any compounded product is that it isn't an FDA-approved finished drug, so
          using a legitimate, accredited pharmacy matters — see our{" "}
          <Link href="/guides/compounded-vs-branded-glp1" className="font-semibold text-primary underline">
            compounded vs branded guide
          </Link>{" "}
          and{" "}
          <Link href="/guides/how-to-get-glp1-through-telehealth" className="font-semibold text-primary underline">
            how to get GLP-1 safely
          </Link>
          .
        </p>
        <p>
          Looking for one molecule specifically? See{" "}
          <Link href="/semaglutide-online" className="font-semibold text-primary underline">semaglutide online</Link>,{" "}
          <Link href="/tirzepatide-online" className="font-semibold text-primary underline">tirzepatide online</Link>, or the{" "}
          <Link href="/cheapest-tirzepatide" className="font-semibold text-primary underline">cheapest tirzepatide</Link>.
          Not sure what you'd pay in your situation? Run the{" "}
          <Link href="/tools/glp1-cost-calculator" className="font-semibold text-primary underline">
            GLP-1 cost calculator
          </Link>
          .
        </p>
      </section>
    </div>
  );
}
