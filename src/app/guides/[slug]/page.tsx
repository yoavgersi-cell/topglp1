import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Check } from "lucide-react";
import { GUIDES, GUIDE_SLUGS, getGuide } from "@/data/guides";
import { getMedication } from "@/data/medications";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { MedicalDisclaimer } from "@/components/medical-disclaimer";
import { CONTENT_REVIEWED } from "@/lib/site";
import { pageMetadata, articleSchema, breadcrumbSchema } from "@/lib/seo";

export const revalidate = 3600;

export function generateStaticParams() {
  return GUIDE_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (!guide) return {};
  return pageMetadata({
    title: guide.title,
    description: guide.description,
    path: `/guides/${guide.slug}`,
  });
}

export default async function GuidePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (!guide) notFound();

  const relatedGuides = (guide.relatedGuides ?? [])
    .map((s) => GUIDES.find((g) => g.slug === s))
    .filter((g): g is NonNullable<typeof g> => Boolean(g));
  const relatedMeds = (guide.relatedMeds ?? [])
    .map((s) => getMedication(s))
    .filter((m): m is NonNullable<typeof m> => Boolean(m));

  return (
    <article className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            articleSchema({
              headline: guide.title,
              description: guide.description,
              path: `/guides/${guide.slug}`,
              dateModified: CONTENT_REVIEWED,
            }),
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Home", path: "/" },
              { name: "Guides", path: "/guides" },
              { name: guide.title, path: `/guides/${guide.slug}` },
            ]),
          ),
        }}
      />

      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "Guides", path: "/guides" },
          { name: guide.category, path: "/guides" },
        ]}
      />

      <header>
        <span className="text-xs font-semibold uppercase tracking-wide text-primary">{guide.category}</span>
        <h1 className="mt-2 font-serif text-4xl font-semibold leading-tight text-foreground">{guide.title}</h1>
        <p className="mt-3 text-lg leading-relaxed text-muted">{guide.description}</p>
        <p className="mt-3 text-xs text-muted">
          {guide.readTime} · Last reviewed {CONTENT_REVIEWED} by the TopGLP1 Editorial Team
        </p>
      </header>

      <MedicalDisclaimer className="mt-6" />

      {/* Key takeaways */}
      <div className="mt-8 rounded-2xl border border-border bg-primary-light/50 p-6">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-primary">Key takeaways</h2>
        <ul className="mt-3 space-y-2">
          {guide.keyTakeaways.map((k) => (
            <li key={k} className="flex items-start gap-2 text-sm text-foreground">
              <Check size={16} className="mt-0.5 shrink-0 text-primary" />
              <span>{k}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Body */}
      <div className="mt-10">
        {guide.sections.map((section, i) => (
          <section key={i} className={i > 0 ? "mt-9" : ""}>
            <h2 className="font-serif text-2xl font-semibold text-foreground">{section.heading}</h2>
            {section.body && (
              <div className="prose-body mt-3">
                {section.body.map((p, j) => (
                  <p key={j}>{p}</p>
                ))}
              </div>
            )}
            {section.list && (
              <ul className="mt-3 space-y-2">
                {section.list.map((item) => (
                  <li key={item} className="flex items-start gap-2 leading-relaxed text-foreground">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            )}
          </section>
        ))}
      </div>

      {/* Related medications */}
      {relatedMeds.length > 0 && (
        <section className="mt-12 border-t border-border pt-8">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-muted">Related medications</h2>
          <div className="mt-3 flex flex-wrap gap-2">
            {relatedMeds.map((m) => (
              <Link
                key={m.slug}
                href={`/medications/${m.slug}`}
                className="inline-flex items-center rounded-full border border-border bg-surface px-3 py-1.5 text-sm text-foreground transition-colors hover:border-primary"
              >
                {m.name}
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* Related guides */}
      {relatedGuides.length > 0 && (
        <section className="mt-10">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-muted">Keep reading</h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {relatedGuides.map((g) => (
              <Link
                key={g.slug}
                href={`/guides/${g.slug}`}
                className="group rounded-xl border border-border bg-surface p-4 transition-colors hover:border-primary"
              >
                <span className="text-xs font-semibold text-primary">{g.category}</span>
                <p className="mt-1 text-sm font-semibold leading-snug text-foreground">{g.title}</p>
              </Link>
            ))}
          </div>
        </section>
      )}
    </article>
  );
}
