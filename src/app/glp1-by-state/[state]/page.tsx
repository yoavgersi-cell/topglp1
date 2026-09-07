import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Check, Minus, X, ArrowRight, ArrowUpRight } from "lucide-react";
import { STATES, STATE_SLUGS, getState, medicaidStatus } from "@/data/states";
import { getProvider } from "@/data/providers";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { EditorialByline } from "@/components/editorial-byline";
import { MedicalSources } from "@/components/medical-sources";
import { pageMetadata, breadcrumbSchema, faqSchema } from "@/lib/seo";

export const revalidate = 3600;
export const dynamicParams = false;

export function generateStaticParams() {
  return STATE_SLUGS.map((state) => ({ state }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ state: string }>;
}): Promise<Metadata> {
  const { state } = await params;
  const s = getState(state);
  if (!s) return {};
  return pageMetadata({
    title: `GLP-1 in ${s.name} (2026): Medicaid Coverage, Cost & How to Get It`,
    description: `How to get GLP-1 medication in ${s.name} in 2026 — Medicaid coverage status, cash pricing from $69/mo by telehealth, and eligibility. Verified against KFF/Stateline reporting.`,
    path: `/glp1-by-state/${s.slug}`,
  });
}

const toneIcon = { yes: Check, limited: Minus, no: X } as const;

export default async function StatePage({ params }: { params: Promise<{ state: string }> }) {
  const { state } = await params;
  const s = getState(state);
  if (!s) notFound();

  const st = medicaidStatus(s);
  const Icon = toneIcon[st.tone];
  const embody = getProvider("embody");

  const faqs = [
    {
      q: `Does Medicaid cover GLP-1 for weight loss in ${s.name}?`,
      a: st.detail,
    },
    {
      q: `How can I get GLP-1 in ${s.name} without insurance?`,
      a: `Compounded GLP-1 through a licensed telehealth program is available to ${s.name} residents and is the lowest-cost route — from about $69/month for semaglutide (our top pick, Embody), versus $1,000+/month for branded at the pharmacy. No insurance is required.`,
    },
    {
      q: `Is GLP-1 telehealth legal in ${s.name}?`,
      a: `Yes. Licensed telehealth GLP-1 programs operate in ${s.name}, with a prescriber reviewing your case and a licensed pharmacy filling the medication. Use our provider safety check to confirm a program's credentials.`,
    },
  ];

  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqs)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Home", path: "/" },
              { name: "GLP-1 by state", path: "/glp1-by-state" },
              { name: s.name, path: `/glp1-by-state/${s.slug}` },
            ]),
          ),
        }}
      />

      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "GLP-1 by state", path: "/glp1-by-state" },
          { name: s.name, path: `/glp1-by-state/${s.slug}` },
        ]}
      />

      <h1 className="font-serif text-4xl font-semibold text-foreground">GLP-1 in {s.name}</h1>
      <EditorialByline chips={["Medicaid data from KFF & Stateline"]} />
      <p className="mt-4 text-lg leading-relaxed text-muted">
        Here's how to get GLP-1 medication in {s.name} in 2026 — what Medicaid covers, and the cash route that works
        statewide regardless of coverage.
      </p>

      {/* Medicaid status card */}
      <div className="mt-8 rounded-2xl border border-border bg-surface p-6">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-muted">{s.name} Medicaid — weight-loss GLP-1</h2>
        <p className={`mt-2 flex items-center gap-2 font-serif text-2xl font-semibold ${st.tone === "yes" ? "text-primary" : st.tone === "limited" ? "text-accent" : "text-foreground"}`}>
          <Icon size={22} /> {st.label}
        </p>
        <p className="mt-3 leading-relaxed text-muted">{st.detail}</p>
      </div>

      {/* Cash route */}
      <section className="mt-8">
        <h2 className="font-serif text-2xl font-semibold text-foreground">The cash route works in {s.name}</h2>
        <p className="prose-body mt-3">
          Whatever {s.name} Medicaid does, compounded GLP-1 through licensed telehealth is available to {s.name}{" "}
          residents and doesn't depend on insurance. It's the same molecules (semaglutide, tirzepatide) prepared by a
          compounding pharmacy, from about $69–$300 a month — a fraction of the $1,000+ branded pharmacy price. Our top
          pick, {embody?.name ?? "Embody"}, offers flat $69/mo semaglutide with fast shipping.
        </p>
        <div className="mt-4 flex flex-wrap gap-3">
          {embody && (
            <a
              href={embody.affiliateUrl}
              target="_blank"
              rel="sponsored nofollow noopener"
              className="inline-flex items-center gap-1 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white hover:bg-primary-dark"
            >
              See {embody.name} — from $69/mo <ArrowUpRight size={15} />
            </a>
          )}
          <Link
            href="/find-your-match"
            className="inline-flex items-center gap-1 rounded-full border border-border bg-surface px-5 py-2.5 text-sm font-semibold text-foreground hover:border-primary"
          >
            Find your match
          </Link>
        </div>
      </section>

      {/* Medicare note */}
      <section className="mt-8 rounded-2xl border border-border bg-primary-light/40 p-5 text-sm leading-relaxed text-foreground">
        <strong>On Medicare?</strong> Federal Part D still excludes weight-loss drugs, but a temporary{" "}
        <Link href="/glp1-medicare-coverage" className="font-semibold text-primary underline">Medicare GLP-1 Bridge</Link>{" "}
        program (July 2026–Dec 2027) offers Wegovy, Zepbound or Foundayo for a $50 copay to eligible members — the same
        in {s.name} as everywhere.
      </section>

      {/* FAQ */}
      <section className="mt-10">
        <h2 className="font-serif text-2xl font-semibold text-foreground">GLP-1 in {s.name}: common questions</h2>
        <div className="mt-4 space-y-3">
          {faqs.map((f) => (
            <div key={f.q} className="rounded-xl border border-border bg-surface p-4">
              <p className="font-semibold text-foreground">{f.q}</p>
              <p className="mt-1 text-sm leading-relaxed text-muted">{f.a}</p>
            </div>
          ))}
        </div>
      </section>

      <MedicalSources keys={["kff-medicaid-glp1", "stateline-glp1-medicaid", "medicare-glp1-bridge"]} />

      {/* Nearby states */}
      <nav className="mt-10 border-t border-border pt-8">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-muted">Other states</h2>
        <div className="mt-3 flex flex-wrap gap-2">
          {STATES.filter((x) => x.slug !== s.slug)
            .slice(0, 12)
            .map((x) => (
              <Link
                key={x.slug}
                href={`/glp1-by-state/${x.slug}`}
                className="inline-flex items-center gap-1 rounded-full border border-border bg-surface px-3 py-1.5 text-sm text-foreground hover:border-primary"
              >
                {x.name}
              </Link>
            ))}
          <Link href="/glp1-by-state" className="inline-flex items-center gap-1 rounded-full bg-primary-light px-3 py-1.5 text-sm font-semibold text-primary">
            All states <ArrowRight size={13} />
          </Link>
        </div>
      </nav>
    </div>
  );
}
