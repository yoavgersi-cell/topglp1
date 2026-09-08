import type { Metadata } from "next";
import { SITE, absoluteUrl } from "./site";

interface PageMetaInput {
  title: string;
  description: string;
  /** Root-relative path, e.g. "/medications/semaglutide". */
  path: string;
  /** Override the "%s | TopGLP1" template (used for the homepage). */
  absoluteTitle?: boolean;
  /** OpenGraph locale override, e.g. "en_GB" for the UK section. */
  locale?: string;
  /**
   * hreflang alternates (root-relative or absolute). Set on pages that have a
   * regional twin so search engines serve the right one per country. Keys are
   * BCP-47 tags (e.g. "en-GB", "en-US", "x-default").
   */
  languages?: Record<string, string>;
}

// Build a consistent Metadata object with canonical + OpenGraph + Twitter.
export function pageMetadata({
  title,
  description,
  path,
  absoluteTitle,
  locale,
  languages,
}: PageMetaInput): Metadata {
  const url = absoluteUrl(path);
  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: {
      canonical: url,
      ...(languages
        ? {
            languages: Object.fromEntries(
              Object.entries(languages).map(([lang, p]) => [
                lang,
                p.startsWith("http") ? p : absoluteUrl(p),
              ]),
            ),
          }
        : {}),
    },
    openGraph: {
      title,
      description,
      url,
      // UK pages must not carry the "Top GLP-1" brand ("GLP-1" is a restricted
      // term in UK ads) — use a neutral site name there.
      siteName: locale === "en_GB" ? "Top" : SITE.name,
      type: "article",
      locale: locale ?? SITE.locale,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

// JSON-LD helpers ───────────────────────────────────────────────────────────

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE.name,
    alternateName: SITE.alternateNames,
    url: SITE.url,
    description: SITE.description,
    email: SITE.email,
    logo: `${SITE.url}/icon`,
    areaServed: { "@type": "Country", name: "United States" },
    knowsAbout: [
      "GLP-1 receptor agonists",
      "Semaglutide",
      "Tirzepatide",
      "Wegovy",
      "Zepbound",
      "Ozempic",
      "Mounjaro",
      "Compounded GLP-1",
      "Telehealth weight loss",
    ],
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE.name,
    alternateName: SITE.alternateNames,
    url: SITE.url,
    description: SITE.description,
  };
}

// ItemList schema for a ranked list (e.g. best GLP-1 programs) — lets answer
// engines lift the ranking with positions, names and URLs.
export function itemListSchema(
  name: string,
  items: { name: string; url: string; position: number }[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name,
    numberOfItems: items.length,
    itemListElement: items.map((it) => ({
      "@type": "ListItem",
      position: it.position,
      name: it.name,
      url: it.url,
    })),
  };
}

export function articleSchema(opts: {
  headline: string;
  description: string;
  path: string;
  dateModified: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    headline: opts.headline,
    description: opts.description,
    url: absoluteUrl(opts.path),
    dateModified: opts.dateModified,
    author: { "@type": "Organization", name: SITE.team },
    publisher: { "@type": "Organization", name: SITE.name, url: SITE.url },
  };
}

export function faqSchema(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

// Small helper to render a JSON-LD <script> inline in a server component.
export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
