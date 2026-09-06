import type { Metadata } from "next";
import Link from "next/link";
import { PROVIDERS } from "@/data/providers";
import { ProviderCard } from "@/components/provider-card";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { CONTENT_REVIEWED } from "@/lib/site";
import { pageMetadata, breadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Best GLP-1 Programs of 2026: Telehealth Providers Ranked",
  description:
    "Our independent ranking of the best telehealth GLP-1 programs — compounded and branded semaglutide and tirzepatide compared on price, access, shipping and clinical support.",
  path: "/best-glp1-providers",
});

export default function BestProvidersPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Home", path: "/" },
              { name: "Best GLP-1 programs", path: "/best-glp1-providers" },
            ]),
          ),
        }}
      />
      <Breadcrumbs
        items={[{ name: "Home", path: "/" }, { name: "Best GLP-1 programs", path: "/best-glp1-providers" }]}
      />

      <h1 className="font-serif text-4xl font-semibold text-foreground">
        Best GLP-1 programs of 2026
      </h1>
      <p className="mt-3 max-w-2xl text-lg leading-relaxed text-muted">
        If you've read up on the medications and want to start treatment, these are the
        telehealth programs we rate highest for GLP-1 access. We weigh price, what's actually
        prescribed, pharmacy legitimacy, shipping, and clinical support.
      </p>
      <p className="mt-3 text-xs text-muted">Last reviewed {CONTENT_REVIEWED} · We may earn a commission from links below.</p>

      <div className="mt-8 rounded-2xl border border-border bg-primary-light/40 p-5 text-sm leading-relaxed text-foreground">
        <strong>Before you choose:</strong> a legitimate program requires a licensed prescriber and a real
        medical intake, uses a state-licensed pharmacy (LegitScript certification is a good sign), and gives
        you clear dosing plus a way to reach a clinician. See our{" "}
        <Link href="/guides/how-to-get-glp1-through-telehealth" className="font-semibold text-primary underline">
          guide to getting GLP-1 safely
        </Link>{" "}
        before signing up.
      </div>

      <div className="mt-8 space-y-4">
        {[...PROVIDERS].sort((x, y) => x.rank - y.rank).map((p) => (
          <ProviderCard key={p.id} provider={p} />
        ))}
      </div>

      <div className="mt-10 rounded-2xl border border-border bg-surface p-6 text-sm leading-relaxed text-muted">
        <h2 className="font-serif text-xl font-semibold text-foreground">How we rank</h2>
        <p className="mt-2">
          Rankings reflect a mix of pricing transparency, medication options (compounded vs branded,
          semaglutide vs tirzepatide), pharmacy and clinician credentials, shipping speed, and the
          overall quality of the patient experience. Affiliate relationships do not change a program's
          position — a partner we're paid by can still rank below one we aren't. Availability and pricing
          change frequently, especially as FDA shortage status shifts, so always confirm current details
          on the provider's own site.
        </p>
      </div>
    </div>
  );
}
