import type { Metadata } from "next";
import Link from "next/link";
import { Check, X } from "lucide-react";
import { SITE, CONTENT_REVIEWED } from "@/lib/site";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { MedicalSources } from "@/components/medical-sources";
import { pageMetadata, breadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "How We Review & Rank GLP-1 Programs — Our Editorial Standards",
  description:
    "How Top GLP-1 sources medical facts, ranks GLP-1 providers, handles pricing, and makes money — and the things we refuse to do. Our full editorial standards.",
  path: "/how-we-review",
});

export default function HowWeReviewPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Home", path: "/" },
              { name: "How we review", path: "/how-we-review" },
            ]),
          ),
        }}
      />
      <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "How we review", path: "/how-we-review" }]} />

      <h1 className="font-serif text-4xl font-semibold text-foreground">How we review &amp; rank</h1>
      <p className="mt-3 text-lg leading-relaxed text-muted">
        {SITE.name} covers prescription medications and money — so how we source facts, rank programs, and fund the
        site should be transparent. Here's exactly how we work.
      </p>
      <p className="mt-2 text-xs text-muted">Last updated {CONTENT_REVIEWED}</p>

      <div className="prose-body mt-8">
        <h2 className="font-serif text-2xl font-semibold text-foreground">Where our medical facts come from</h2>
        <p>
          Every clinical claim on this site — average weight loss, dosing, side effects, approval status — traces to a
          primary source: peer-reviewed trials published in the New England Journal of Medicine, or official FDA
          guidance. We link the primary record on each page so you can verify it yourself. We do not cite other blogs,
          and we do not present figures we can't source. Where evidence is early or mixed (as with the investigational
          drug retatrutide), we say so plainly.
        </p>

        <h2 className="mt-8 font-serif text-2xl font-semibold text-foreground">How we rank providers</h2>
        <p>
          Our provider rankings weigh the factors that actually affect a patient: real price (and whether it's
          compounded or branded), which medications and formulations are offered, pharmacy accreditation and the
          clinician model, shipping, insurance stance, and commitment terms. We surface the trade-offs rather than
          reducing everything to a single score, because the right program genuinely depends on your priorities and your
          insurance.
        </p>

        <h2 className="mt-8 font-serif text-2xl font-semibold text-foreground">How we handle pricing</h2>
        <p>
          Prices are provider-reported and change frequently — and compounded-drug availability shifts with FDA shortage
          status. We publish the figures providers state, flag clearly when a price isn't publicly fixed, and tell you to
          confirm current rates on the provider's own site before enrolling. We never invent a price to fill a gap.
        </p>

        <h2 className="mt-8 font-serif text-2xl font-semibold text-foreground">How we make money</h2>
        <p>
          {SITE.name} earns affiliate commissions when readers sign up with some of the providers we feature. That funds
          the site and keeps it free. It does not change our medical explanations, and a provider's ranking is not for
          sale — a program we're paid by can rank below one we aren't. Outbound affiliate links are marked as sponsored.
        </p>
      </div>

      {/* What we do / don't */}
      <div className="mt-10 grid gap-4 sm:grid-cols-2">
        <div className="rounded-2xl border border-border bg-surface p-5">
          <h3 className="text-sm font-semibold uppercase tracking-wide text-primary">What we do</h3>
          <ul className="mt-3 space-y-2">
            {[
              "Cite every clinical figure to NEJM or the FDA",
              "Disclose affiliate relationships openly",
              "Rank on merit, independent of who pays us",
              "Flag uncertainty and unproven claims",
              "Update pricing and re-check sources over time",
            ].map((s) => (
              <li key={s} className="flex items-start gap-2 text-sm text-foreground">
                <Check size={15} className="mt-0.5 shrink-0 text-primary" />
                <span>{s}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-2xl border border-border bg-surface p-5">
          <h3 className="text-sm font-semibold uppercase tracking-wide text-accent">What we don't do</h3>
          <ul className="mt-3 space-y-2">
            {[
              "Invent statistics, prices, or fake reviewers",
              "Let affiliate deals dictate rankings",
              "Give medical advice or replace your clinician",
              "Promote unapproved or illegally sold drugs",
              "Publish AI-generated filler in place of substance",
            ].map((s) => (
              <li key={s} className="flex items-start gap-2 text-sm text-muted">
                <X size={15} className="mt-0.5 shrink-0 text-accent" />
                <span>{s}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="prose-body mt-8">
        <h2 className="font-serif text-2xl font-semibold text-foreground">Who writes this</h2>
        <p>
          Content is produced by the {SITE.team} — writers and editors focused specifically on GLP-1 medications. We are
          not a medical practice and do not provide diagnosis or treatment. Our job is to help you understand your
          options and have a better conversation with a licensed clinician. Spot an error?{" "}
          <a href={`mailto:${SITE.email}`} className="font-semibold text-primary underline">Email us</a> and we'll fix
          it. See also our{" "}
          <Link href="/disclaimer" className="font-semibold text-primary underline">medical disclaimer</Link> and{" "}
          <Link href="/about" className="font-semibold text-primary underline">about page</Link>.
        </p>
      </div>

      <MedicalSources keys={["step-1", "surmount-1", "fda-unapproved-glp1"]} />
    </div>
  );
}
