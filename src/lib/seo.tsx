import type { Metadata } from "next";
import { SITE, absoluteUrl } from "./site";

interface PageMetaInput {
  title: string;
  description: string;
  /** Root-relative path, e.g. "/medications/semaglutide". */
  path: string;
  /** Override the "%s | TopGLP1" template (used for the homepage). */
  absoluteTitle?: boolean;
}

// Build a consistent Metadata object with canonical + OpenGraph + Twitter.
export function pageMetadata({ title, description, path, absoluteTitle }: PageMetaInput): Metadata {
  const url = absoluteUrl(path);
  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE.name,
      type: "article",
      locale: SITE.locale,
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
    url: SITE.url,
    description: SITE.description,
    email: SITE.email,
    areaServed: { "@type": "Country", name: "United States" },
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE.name,
    url: SITE.url,
    description: SITE.description,
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
