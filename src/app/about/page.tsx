import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/lib/site";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "About TopGLP1 — Our Editorial Approach",
  description:
    "TopGLP1 is an independent, education-first resource on GLP-1 medications. Here's who we are, how we make money, and the standards behind our content.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
      <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "About", path: "/about" }]} />
      <h1 className="font-serif text-4xl font-semibold text-foreground">About {SITE.name}</h1>

      <div className="prose-body mt-6">
        <p>
          {SITE.name} is an independent resource dedicated to one thing: explaining GLP-1
          medications clearly and honestly. Interest in semaglutide, tirzepatide and the drugs
          that follow them has exploded, and with it a flood of hype, confusion and sales pitches.
          We built {SITE.name} to be the opposite — a calm, science-first place to understand what
          these medications are, how they work, what they cost, and how to get them safely.
        </p>

        <h2 className="mt-8 font-serif text-2xl font-semibold text-foreground">What we cover</h2>
        <p>
          Our core is the medication library and our guides: mechanism, dosing, results, side
          effects, cost and access. Provider comparisons exist for people who've decided to pursue
          treatment, but they sit below the education — not the other way around.
        </p>

        <h2 className="mt-8 font-serif text-2xl font-semibold text-foreground">How we make money</h2>
        <p>
          {SITE.name} earns affiliate commissions when readers sign up with some of the telehealth
          providers we feature. That's how the site stays free. We're upfront about it, and it comes
          with a firm rule: commercial relationships never change what we say about a medication.
          We'll tell you when a drug isn't right for someone, when a product isn't legal (as with
          retatrutide today), or when the honest answer is simply "talk to your doctor."
        </p>

        <h2 className="mt-8 font-serif text-2xl font-semibold text-foreground">Our editorial standards</h2>
        <ul className="mt-3 space-y-2">
          {[
            "Education before promotion — mechanism and evidence come first.",
            "Plain language — no unnecessary jargon, no fear-mongering.",
            "Honest about uncertainty — we say when data are early or mixed.",
            "Safety-forward — we flag contraindications and warning signs prominently.",
            "Not medical advice — we help you have a better conversation with a clinician, not replace one.",
          ].map((s) => (
            <li key={s} className="flex items-start gap-2 text-foreground">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
              <span>{s}</span>
            </li>
          ))}
        </ul>

        <p className="mt-8">
          Questions or corrections? Email us at{" "}
          <a href={`mailto:${SITE.email}`} className="font-semibold text-primary underline">
            {SITE.email}
          </a>
          . See also our{" "}
          <Link href="/disclaimer" className="font-semibold text-primary underline">
            medical disclaimer
          </Link>
          .
        </p>
      </div>
    </div>
  );
}
