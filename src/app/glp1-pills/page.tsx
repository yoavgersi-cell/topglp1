import type { Metadata } from "next";
import Link from "next/link";
import { Fragment } from "react";
import { ArrowRight, Check } from "lucide-react";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { MedicalDisclaimer } from "@/components/medical-disclaimer";
import { MedicalSources } from "@/components/medical-sources";
import { ArticleLayout, AsideCard, OnThisPage } from "@/components/article-layout";
import { RelatedTopics } from "@/components/topic-directory";
import {
  pageMetadata,
  articleSchema,
  faqSchema,
  howToSchema,
  breadcrumbSchema,
} from "@/lib/seo";
import {
  PILLS_META,
  PILLS_REVIEWED,
  PILLS_SECTIONS,
  PILLS_FAQS,
  PILLS_HOWTO,
  PILLS_SOURCE_KEYS,
  type Block,
} from "@/data/glp1-pills";

export const revalidate = 3600;

export function generateMetadata(): Metadata {
  return pageMetadata({
    title: PILLS_META.title,
    description: PILLS_META.description,
    path: PILLS_META.path,
  });
}

// Parse inline [label](/path) links and **bold** into React nodes.
function inline(text: string, keyBase: string) {
  const nodes: React.ReactNode[] = [];
  const re = /\[([^\]]+)\]\(([^)]+)\)|\*\*([^*]+)\*\*/g;
  let last = 0;
  let m: RegExpExecArray | null;
  let i = 0;
  while ((m = re.exec(text))) {
    if (m.index > last) nodes.push(text.slice(last, m.index));
    if (m[1] && m[2]) {
      nodes.push(
        <Link key={`${keyBase}-${i}`} href={m[2]} className="text-primary underline decoration-primary/40 underline-offset-2 hover:decoration-primary">
          {m[1]}
        </Link>,
      );
    } else if (m[3]) {
      nodes.push(
        <strong key={`${keyBase}-${i}`} className="font-semibold text-foreground">
          {m[3]}
        </strong>,
      );
    }
    last = re.lastIndex;
    i++;
  }
  if (last < text.length) nodes.push(text.slice(last));
  return nodes;
}

function BlockView({ block, k }: { block: Block; k: string }) {
  switch (block.type) {
    case "p":
      return <p className="mt-4 leading-relaxed text-foreground">{inline(block.text, k)}</p>;
    case "h3":
      return <h3 className="mt-8 font-serif text-xl font-semibold text-foreground">{block.text}</h3>;
    case "ul":
      return (
        <ul className="mt-4 space-y-2">
          {block.items.map((it, j) => (
            <li key={j} className="flex items-start gap-2 leading-relaxed text-foreground">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
              <span>{inline(it, `${k}-${j}`)}</span>
            </li>
          ))}
        </ul>
      );
    case "ol":
      return (
        <ol className="mt-4 space-y-2">
          {block.items.map((it, j) => (
            <li key={j} className="flex items-start gap-3 leading-relaxed text-foreground">
              <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-primary-light text-xs font-bold text-primary">
                {j + 1}
              </span>
              <span>{inline(it, `${k}-${j}`)}</span>
            </li>
          ))}
        </ol>
      );
    case "table":
      return (
        <div className="mt-6 overflow-x-auto">
          {block.caption && <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-muted">{block.caption}</p>}
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-border">
                {block.headers.map((h, j) => (
                  <th key={j} className="px-3 py-2 text-left font-semibold text-foreground">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row, r) => (
                <tr key={r} className="border-b border-border/60">
                  {row.map((cell, c) => (
                    <td key={c} className="px-3 py-2 align-top text-foreground">{inline(cell, `${k}-${r}-${c}`)}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    case "callout":
      return (
        <div className="mt-6 rounded-2xl border border-primary/25 bg-primary-light/40 p-5">
          {block.title && <p className="text-sm font-semibold text-primary">{block.title}</p>}
          <p className="mt-1 text-sm leading-relaxed text-foreground">{inline(block.text, k)}</p>
        </div>
      );
    case "statgrid":
      return (
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {block.stats.map((s, j) => (
            <div key={j} className="rounded-2xl border border-border bg-surface p-4">
              <div className="font-serif text-2xl font-semibold text-primary">{s.value}</div>
              <div className="mt-1 text-xs leading-snug text-muted">{s.label}</div>
            </div>
          ))}
        </div>
      );
    case "keytakeaways":
      return (
        <div className="mt-6 rounded-2xl border border-border bg-primary-light/50 p-6">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-primary">Key takeaways</h2>
          <ul className="mt-3 space-y-2">
            {block.items.map((it, j) => (
              <li key={j} className="flex items-start gap-2 text-sm text-foreground">
                <Check size={16} className="mt-0.5 shrink-0 text-primary" />
                <span>{inline(it, `${k}-${j}`)}</span>
              </li>
            ))}
          </ul>
        </div>
      );
    default:
      return null;
  }
}

export default function Glp1PillsPage() {
  const aside = (
    <>
      <OnThisPage items={PILLS_SECTIONS.map((s) => ({ id: s.id, label: s.heading }))} />
      <AsideCard title="About this guide">
        <dl className="space-y-2.5 text-sm">
          <div>
            <dt className="text-xs text-muted">Read time</dt>
            <dd className="font-medium text-foreground">{PILLS_META.readTime}</dd>
          </div>
          <div>
            <dt className="text-xs text-muted">Last reviewed</dt>
            <dd className="font-medium text-foreground">{PILLS_REVIEWED}</dd>
          </div>
          <div>
            <dt className="text-xs text-muted">Sources</dt>
            <dd className="font-medium text-foreground">{PILLS_SOURCE_KEYS.length} primary references</dd>
          </div>
        </dl>
      </AsideCard>
      <Link
        href="/best-glp1-providers"
        className="block rounded-2xl border border-primary/30 bg-primary-light/40 p-5 transition-colors hover:border-primary"
      >
        <p className="text-xs font-semibold uppercase tracking-wide text-primary">Ready to compare?</p>
        <p className="mt-1.5 text-sm font-semibold text-foreground">See the GLP-1 programs we rate highest, scored and ranked</p>
        <span className="mt-2 inline-flex items-center gap-1 text-sm font-semibold text-primary">
          Best programs <ArrowRight size={14} />
        </span>
      </Link>
    </>
  );

  return (
    <ArticleLayout aside={aside}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            articleSchema({
              headline: PILLS_META.title,
              description: PILLS_META.description,
              path: PILLS_META.path,
              dateModified: PILLS_REVIEWED,
            }),
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(PILLS_FAQS)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            howToSchema({
              name: PILLS_HOWTO.name,
              description: "How to start a GLP-1 weight-loss pill safely, step by step.",
              path: PILLS_META.path,
              steps: PILLS_HOWTO.steps,
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
              { name: "GLP-1 Weight-Loss Pills", path: PILLS_META.path },
            ]),
          ),
        }}
      />

      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "Guides", path: "/guides" },
          { name: "GLP-1 Pills", path: PILLS_META.path },
        ]}
      />

      <header>
        <span className="text-xs font-semibold uppercase tracking-wide text-primary">The 2026 guide</span>
        <h1 className="mt-2 font-serif text-4xl font-semibold leading-tight text-foreground sm:text-[2.75rem]">
          {PILLS_META.h1}
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-muted">{PILLS_META.dek}</p>
        <p className="mt-3 text-xs text-muted">
          {PILLS_META.readTime} · Last reviewed {PILLS_REVIEWED} by the Top GLP-1 Editorial Team
        </p>
      </header>

      <MedicalDisclaimer className="mt-6" />

      {PILLS_SECTIONS.map((section) => (
        <section key={section.id} id={section.id} className="mt-12 scroll-mt-24">
          <h2 className="font-serif text-2xl font-semibold text-foreground">{section.heading}</h2>
          {section.summary && (
            <p className="mt-3 border-l-2 border-primary/40 pl-4 text-base font-medium leading-relaxed text-foreground">
              {inline(section.summary, `${section.id}-sum`)}
            </p>
          )}
          {section.blocks.map((b, i) => (
            <Fragment key={i}>
              <BlockView block={b} k={`${section.id}-${i}`} />
            </Fragment>
          ))}
          {section.readMore && (
            <p className="mt-5">
              <Link href={section.readMore.href} className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline">
                {section.readMore.label} <ArrowRight size={14} />
              </Link>
            </p>
          )}
        </section>
      ))}

      {/* FAQ */}
      <section id="faq" className="mt-14 scroll-mt-24 border-t border-border pt-8">
        <h2 className="font-serif text-2xl font-semibold text-foreground">Frequently asked questions</h2>
        <div className="mt-4 divide-y divide-border">
          {PILLS_FAQS.map((f) => (
            <details key={f.q} className="group py-4">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-4 font-semibold text-foreground">
                <span>{f.q}</span>
                <span className="mt-1 shrink-0 text-primary transition-transform group-open:rotate-45">+</span>
              </summary>
              <p className="mt-3 leading-relaxed text-muted">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      <MedicalSources keys={PILLS_SOURCE_KEYS} />

      <RelatedTopics />
    </ArticleLayout>
  );
}
