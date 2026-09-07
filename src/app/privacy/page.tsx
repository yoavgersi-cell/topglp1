import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Privacy Policy",
  description: "How Top GLP-1 handles data, analytics, cookies and affiliate tracking.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
      <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Privacy", path: "/privacy" }]} />
      <h1 className="font-serif text-4xl font-semibold text-foreground">Privacy policy</h1>

      <div className="prose-body mt-6">
        <p>
          This policy explains how {SITE.name} ({SITE.domain}) handles information when you visit the
          site. We aim to collect as little as possible.
        </p>

        <h2 className="mt-8 font-serif text-2xl font-semibold text-foreground">What we collect</h2>
        <p>
          {SITE.name} is primarily a content site. We do not ask you to create an account, and we do
          not sell personal information. We use privacy-conscious analytics to understand aggregate
          traffic (which pages are read, roughly where visitors come from) so we can improve the
          content. This data is aggregated and not used to identify you personally.
        </p>

        <h2 className="mt-8 font-serif text-2xl font-semibold text-foreground">Cookies and tracking</h2>
        <p>
          We and our analytics providers may use cookies or similar technologies for basic site
          functionality and measurement. When you click an affiliate link to a provider, that provider
          may set its own cookies to attribute the referral — those are governed by the provider's own
          privacy policy, not ours.
        </p>

        <h2 className="mt-8 font-serif text-2xl font-semibold text-foreground">Third-party links</h2>
        <p>
          Our site links to third-party telehealth providers and external sources. We are not
          responsible for their content or privacy practices. Review their policies before sharing any
          personal or health information with them.
        </p>

        <h2 className="mt-8 font-serif text-2xl font-semibold text-foreground">Your choices</h2>
        <p>
          You can block or delete cookies in your browser settings. To ask a question about privacy or
          request that we address any concern, email{" "}
          <a href={`mailto:${SITE.email}`} className="font-semibold text-primary underline">
            {SITE.email}
          </a>
          .
        </p>

        <p className="mt-6 text-sm text-muted">This policy may be updated from time to time.</p>
      </div>
    </div>
  );
}
