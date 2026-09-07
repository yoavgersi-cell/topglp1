import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { GLOSSARY } from "@/data/glossary";
import { SITE } from "@/lib/site";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { EditorialByline } from "@/components/editorial-byline";
import { pageMetadata, breadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "GLP-1 Glossary: 22 Key Terms Explained (Semaglutide to 503A Pharmacy)",
  description:
    "A plain-language GLP-1 glossary — semaglutide, tirzepatide, compounded, 503A pharmacy, titration, MACE, food noise and more, each defined in one clear sentence.",
  path: "/glp1-glossary",
});

export default function GlossaryPage() {
  const definedTermSet = {
    "@context": "https://schema.org",
    "@type": "DefinedTermSet",
    name: "GLP-1 Glossary",
    url: `${SITE.url}/glp1-glossary`,
    hasDefinedTerm: GLOSSARY.map((t) => ({
      "@type": "DefinedTerm",
      name: t.term,
      description: t.definition,
      url: `${SITE.url}/glp1-glossary#${t.slug}`,
    })),
  };

  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(definedTermSet) }} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Home", path: "/" },
              { name: "Glossary", path: "/glp1-glossary" },
            ]),
          ),
        }}
      />
      <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Glossary", path: "/glp1-glossary" }]} />

      <h1 className="font-serif text-4xl font-semibold text-foreground">GLP-1 glossary</h1>
      <EditorialByline chips={["Plain-language definitions"]} />
      <p className="mt-4 text-lg leading-relaxed text-muted">
        Every GLP-1 term you'll run into — the medications, the mechanisms, the pharmacy and insurance jargon —
        defined in one clear sentence.
      </p>

      <dl className="mt-8 divide-y divide-border overflow-hidden rounded-2xl border border-border">
        {GLOSSARY.map((t) => (
          <div key={t.slug} id={t.slug} className="scroll-mt-24 bg-surface p-5">
            <dt className="font-semibold text-foreground">{t.term}</dt>
            <dd className="mt-1 leading-relaxed text-muted">
              {t.definition}
              {t.href && (
                <Link href={t.href} className="ml-1 inline-flex items-center gap-0.5 text-sm font-semibold text-primary hover:underline">
                  Learn more <ArrowRight size={12} />
                </Link>
              )}
            </dd>
          </div>
        ))}
      </dl>

      <p className="mt-8 text-sm text-muted">
        New to GLP-1? Start with{" "}
        <Link href="/guides/how-glp1-medications-work" className="font-semibold text-primary underline">how GLP-1 works</Link>{" "}
        or the{" "}
        <Link href="/glp1-answers" className="font-semibold text-primary underline">quick answers</Link>.
      </p>
    </div>
  );
}
