import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Medical Disclaimer & Affiliate Disclosure",
  description:
    "Top GLP-1 provides general educational information about GLP-1 medications, not medical advice. Read our full medical disclaimer and affiliate disclosure.",
  path: "/disclaimer",
});

export default function DisclaimerPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
      <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Disclaimer", path: "/disclaimer" }]} />
      <h1 className="font-serif text-4xl font-semibold text-foreground">Medical disclaimer &amp; disclosures</h1>

      <div className="prose-body mt-6">
        <h2 className="mt-6 font-serif text-2xl font-semibold text-foreground">Not medical advice</h2>
        <p>
          The content on {SITE.name} is provided for general informational and educational purposes
          only. It is not medical advice and is not a substitute for professional diagnosis,
          treatment, or the judgment of a licensed healthcare provider who knows your personal medical
          history. GLP-1 medications are prescription drugs with real risks and contraindications.
          Never start, stop, or change any medication based on what you read here. Always consult a
          qualified clinician, and call emergency services for any medical emergency.
        </p>

        <h2 className="mt-8 font-serif text-2xl font-semibold text-foreground">Accuracy and currency</h2>
        <p>
          We work to keep our content accurate and current, but medicine changes and errors happen.
          Drug approvals, dosing, pricing, and the legal status of compounded medications can all shift
          — sometimes quickly. Doses and figures on this site are summarized general information, not
          prescribing instructions. Always follow the specific guidance of your prescriber and the
          labeling on your medication.
        </p>

        <h2 className="mt-8 font-serif text-2xl font-semibold text-foreground">Investigational drugs</h2>
        <p>
          Some medications we cover, such as retatrutide, are investigational and not approved by the
          FDA. Nothing on this site should be read as encouragement to obtain or use any medication
          outside of legal, clinician-supervised channels. Products sold online as unapproved or
          "research" versions of these drugs are unregulated and can be dangerous.
        </p>

        <h2 className="mt-8 font-serif text-2xl font-semibold text-foreground">Affiliate disclosure</h2>
        <p>
          {SITE.name} participates in affiliate programs. This means we may earn a commission, at no
          extra cost to you, when you sign up with certain providers through links on our site. These
          relationships help fund our work. They do not influence our medical explanations, and a
          provider's ranking is not for sale — we may rank a non-partner above a partner. Outbound
          affiliate links are marked as sponsored.
        </p>

        <h2 className="mt-8 font-serif text-2xl font-semibold text-foreground">Contact</h2>
        <p>
          For questions, concerns, or corrections, email{" "}
          <a href={`mailto:${SITE.email}`} className="font-semibold text-primary underline">
            {SITE.email}
          </a>
          .
        </p>
      </div>
    </div>
  );
}
