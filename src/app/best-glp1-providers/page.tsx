import type { Metadata } from "next";
import Link from "next/link";
import { ScoredRankingTable } from "@/components/scored-ranking-table";
import { CategoryPicks } from "@/components/category-picks";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { EditorialByline } from "@/components/editorial-byline";
import { PROVIDERS, getProvider } from "@/data/providers";
import { rankedProviders, SCORING_CRITERIA } from "@/data/rankings";
import { SITE } from "@/lib/site";
import { pageMetadata, breadcrumbSchema, itemListSchema, faqSchema } from "@/lib/seo";

const FAQS = [
  {
    q: "What is the best GLP-1 provider or telehealth program?",
    a: "Our top-ranked GLP-1 provider overall is Embody, scored for the lowest transparent flat pricing (semaglutide $69/mo, tirzepatide $119/mo) and LegitScript-certified pharmacies. \"Best\" depends on your priority, though — for brand-name Wegovy or Zepbound through insurance, Ro is the strongest pick, and we name a leader for cost, tirzepatide, shipping and coaching below.",
  },
  {
    q: "Which GLP-1 telehealth company is most reputable?",
    a: "Reputability comes down to verifiable signals: a licensed prescriber who actually reviews your case, a state-licensed (ideally LegitScript-certified) pharmacy, transparent pricing and dosing, and real third-party reviews. We score every program on exactly these, and the top of our ranking reflects the strongest combination — not the biggest ad budget.",
  },
  {
    q: "Are online GLP-1 providers legit and safe?",
    a: "The legitimate ones are. A trustworthy telehealth program runs a real medical intake, has a licensed clinician write the prescription, and ships from a licensed pharmacy with dosing instructions. Avoid anything sold without a prescription, labeled \"research use only,\" or priced implausibly low with no verifiable pharmacy.",
  },
  {
    q: "What is the cheapest GLP-1 provider?",
    a: "Among the programs we verify, compounded semaglutide starts around $69/month and compounded tirzepatide around $119/month through telehealth — a fraction of the ~$1,000–$1,350/month list price of branded Wegovy or Zepbound. See our cheapest-GLP-1 guide for the current lowest verified prices.",
  },
  {
    q: "How do you choose the best GLP-1 provider?",
    a: "Match the program to your priority — lowest cost, brand-name via insurance, tirzepatide specifically, or coaching — then verify the fundamentals: the prescriber and pharmacy are licensed, pricing is transparent with no intro-then-hike, and a clinician is reachable for side effects. Our ranking scores all of this on five weighted criteria.",
  },
];

export const metadata: Metadata = pageMetadata({
  title: "Best GLP-1 Programs 2026: 21 Telehealth Providers Ranked",
  description:
    "Our independent 2026 ranking of the best online GLP-1 programs — scored across cost, clinical oversight, medications, UX and transparency. Real pricing, type and insurance.",
  path: "/best-glp1-providers",
});

export default function BestProvidersPage() {
  const ranked = rankedProviders(PROVIDERS);
  const top1 = ranked[0];
  const top2 = ranked[1];
  const ro = getProvider("ro");
  return (
    <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Home", path: "/" },
              { name: "Best GLP-1 programs", path: "/best-glp1-providers" },
            ]),
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            itemListSchema(
              "Best online GLP-1 programs of 2026",
              rankedProviders(PROVIDERS).map((p) => ({
                name: p.name,
                url: `${SITE.url}/reviews/${p.slug}`,
                position: p.rank,
              })),
            ),
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }}
      />
      <Breadcrumbs
        items={[{ name: "Home", path: "/" }, { name: "Best GLP-1 programs", path: "/best-glp1-providers" }]}
      />

      <span className="text-xs font-semibold uppercase tracking-wide text-primary">Independent rankings</span>
      <h1 className="mt-2 font-serif text-4xl font-semibold text-foreground">Best GLP-1 programs of 2026</h1>
      <EditorialByline chips={[`${PROVIDERS.length} programs scored`, "Rankings aren't for sale"]} />
      <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted">
        Scored and ordered by our methodology across cost, clinical depth, medications, UX and transparency. We
        weigh price, what's actually prescribed, pharmacy legitimacy, shipping, and clinical support — and we say
        plainly what to watch out for.
      </p>

      {/* Direct-answer verdict — gives answer engines and readers the pick up front */}
      <div className="mt-6 rounded-2xl border border-primary/25 bg-primary-light/40 p-6">
        <p className="text-xs font-semibold uppercase tracking-wide text-primary">Our verdict</p>
        <p className="mt-2 leading-relaxed text-foreground">
          The best GLP-1 provider overall is{" "}
          <Link href={`/reviews/${top1.slug}`} className="font-semibold text-primary hover:underline">{top1.name}</Link>{" "}
          ({top1.rating.toFixed(1)}/10) — our top pick for value and pricing transparency, with flat{" "}
          {top1.specs.semaglutide} semaglutide and {top1.specs.tirzepatide} tirzepatide from LegitScript-certified
          pharmacies. For brand-name Wegovy or Zepbound through insurance,{" "}
          {ro ? (
            <Link href="/reviews/ro" className="font-semibold text-primary hover:underline">{ro.name}</Link>
          ) : (
            "a branded telehealth service"
          )}{" "}
          is the strongest pick, and{" "}
          <Link href={`/reviews/${top2.slug}`} className="font-semibold text-primary hover:underline">{top2.name}</Link>{" "}
          ranks a close second overall. Below, all {PROVIDERS.length} programs are scored 1–10 across cost, clinical
          oversight, medications, user experience and transparency — ranked without regard to affiliate relationships.
        </p>
      </div>

      {/* Category picks */}
      <section className="mt-10">
        <h2 className="font-serif text-2xl font-semibold text-foreground">Editor's picks by category</h2>
        <p className="mt-2 text-sm text-muted">One quick pick for the priority that matters most to you.</p>
        <div className="mt-6">
          <CategoryPicks />
        </div>
      </section>

      {/* Scored ranking table */}
      <section className="mt-12">
        <h2 className="font-serif text-2xl font-semibold text-foreground">The full 2026 ranking</h2>
        <p className="mt-2 text-sm text-muted">
          All {PROVIDERS.length} programs, scored 1–10. Affiliate relationships never change a program's position.
        </p>
        <div className="mt-6">
          <ScoredRankingTable />
        </div>
        <p className="mt-4 text-xs leading-relaxed text-muted">
          <strong className="text-foreground">What the types mean:</strong> <strong>Brand</strong> = FDA-approved
          name-brand (Wegovy, Zepbound, Ozempic). <strong>Compounded</strong> = pharmacy-prepared
          semaglutide/tirzepatide that is not FDA-approved and shouldn't be assumed equivalent to a brand product.{" "}
          <strong>Both</strong> = offers brand-name and compounded.
        </p>
      </section>

      {/* Scoring methodology */}
      <section className="mt-12">
        <span className="text-xs font-semibold uppercase tracking-wide text-primary">Scoring methodology</span>
        <h2 className="mt-2 font-serif text-2xl font-semibold text-foreground">How we score providers</h2>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted">
          Every provider is evaluated on five weighted criteria and combined into a single 1–10 rating. We
          re-check pricing and policies over time and update scores when they change.
        </p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SCORING_CRITERIA.map((c) => (
            <div key={c.name} className="rounded-2xl border border-border bg-surface p-5">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-foreground">{c.name}</h3>
                <span className="rounded-full bg-primary-light px-2 py-0.5 text-xs font-bold text-primary">{c.weight}%</span>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-muted">{c.detail}</p>
            </div>
          ))}
        </div>
        <Link href="/how-we-review" className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-primary">
          Read the full methodology →
        </Link>
      </section>

      {/* FAQ */}
      <section className="mt-14 border-t border-border pt-8">
        <h2 className="font-serif text-2xl font-semibold text-foreground">Best GLP-1 providers: FAQ</h2>
        <div className="mt-4 divide-y divide-border">
          {FAQS.map((f) => (
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
    </div>
  );
}
