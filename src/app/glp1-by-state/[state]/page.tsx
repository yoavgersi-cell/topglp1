import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import {
  STATES,
  STATE_SLUGS,
  getState,
  medicaidStatus,
  obesityContext,
  medicaidProgram,
  expansionAdopted,
  type StateInfo,
} from "@/data/states";
import { cashPayPicksForState, providerServesAllStates, getProvider } from "@/data/providers";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { EditorialByline } from "@/components/editorial-byline";
import { MedicalSources } from "@/components/medical-sources";
import { ArticleLayout, OnThisPage } from "@/components/article-layout";
import { pageMetadata, breadcrumbSchema, faqSchema } from "@/lib/seo";

export const revalidate = 3600;
export const dynamicParams = false;

export function generateStaticParams() {
  return STATE_SLUGS.map((state) => ({ state }));
}

// ── Per-state copy, adapted from real research (KFF/Stateline coverage, KFF
// expansion status, CDC obesity). Where a state matches the national picture we
// say so rather than inventing a difference. ──────────────────────────────────

function medicaidGlanceValue(s: StateInfo): string {
  switch (s.medicaid) {
    case "covered":
      return "Covered with clinical criteria";
    case "limited":
      return "Covered but narrowed";
    case "dropped":
      return "Recently ended (still covered for diabetes)";
    default:
      return "Not covered for weight loss (covered for diabetes)";
  }
}

function shortAnswer(s: StateInfo, notAdopted: boolean): string {
  const clause =
    s.medicaid === "covered"
      ? `${s.name} Medicaid covers GLP-1 medications for weight loss under clinical criteria, so you may qualify through Medicaid`
      : s.medicaid === "limited"
        ? `${s.name} Medicaid covers GLP-1 for weight loss but under tightened criteria`
        : s.medicaid === "dropped"
          ? `${s.name} Medicaid recently ended coverage of GLP-1 for weight loss (it remains covered for type 2 diabetes)`
          : `${s.name} Medicaid doesn't cover GLP-1 medications for weight loss — only for type 2 diabetes, with prior authorization`;
  const expansion = notAdopted ? ` ${s.name} also hasn't expanded Medicaid, so eligibility is narrow.` : "";
  const routes =
    s.medicaid === "covered" || s.medicaid === "limited"
      ? `Beyond Medicaid, private insurance coverage varies by plan, and cash-pay telehealth is available statewide.`
      : `For most residents that leaves two routes: private insurance, where coverage varies by plan, or cash-pay telehealth, which is available statewide.`;
  return `${clause}.${expansion} ${routes}`;
}

export async function generateMetadata({ params }: { params: Promise<{ state: string }> }): Promise<Metadata> {
  const { state } = await params;
  const s = getState(state);
  if (!s) return {};
  const covered = s.medicaid === "covered" || s.medicaid === "limited";
  return pageMetadata({
    title: `GLP-1 in ${s.name}: Coverage, Costs & How to Get It (2026)`,
    description: `How to get GLP-1 medication in ${s.name} in 2026 — ${s.name} Medicaid ${covered ? "coverage" : "policy"}, private insurance, cash-pay telehealth pricing and who qualifies. Researched against KFF, CDC and Stateline.`,
    path: `/glp1-by-state/${s.slug}`,
  });
}

export default async function StatePage({ params }: { params: Promise<{ state: string }> }) {
  const { state } = await params;
  const s = getState(state);
  if (!s) notFound();

  const st = medicaidStatus(s);
  const ob = obesityContext(s);
  const program = medicaidProgram(s);
  const notAdopted = !expansionAdopted(s);
  const isCovered = s.medicaid === "covered" || s.medicaid === "limited";
  const ro = getProvider("ro");

  const picks = cashPayPicksForState(s.abbr);
  const top3 = picks.slice(0, 3);
  const rest = picks.slice(3);
  const differentiator: Record<string, string> = {
    embody: "Best overall — lowest transparent flat price",
    altrx: "Lowest entry price, plus a brand-name option",
    trimrx: "Best for ongoing clinical guidance",
    shed: "Best introductory discount",
    healthrx: "Fast overnight cold-chain shipping",
    synergyrx: "Closest medical supervision",
  };

  const COST_ROWS: { label: string; value: string; note: string }[] = [
    { label: "Branded (Wegovy / Zepbound) — cash", value: "$1,000–$1,400/mo", note: "Full list price without coverage" },
    { label: "Branded — with insurance", value: "$0–$550/mo", note: "If your plan covers it (varies widely)" },
    { label: "Compounded semaglutide — telehealth", value: "from $69/mo", note: `No insurance needed; ships to ${s.name}` },
    { label: "Compounded tirzepatide — telehealth", value: "from $119/mo", note: "The stronger dual-agonist molecule" },
  ];

  const faqs = [
    {
      q: `Does ${s.name} Medicaid cover GLP-1 for weight loss?`,
      a: st.detail,
    },
    {
      q: `How much does GLP-1 cost in ${s.name} without insurance?`,
      a: `Branded GLP-1 at a ${s.name} pharmacy runs about $1,000–$1,400 a month at cash price. Compounded GLP-1 through a licensed telehealth program is far cheaper — from about $69/month for semaglutide and $119/month for tirzepatide — shipped to ${s.name} with no insurance required.`,
    },
    {
      q: `Can I get GLP-1 online in ${s.name}?`,
      a: `Yes. Licensed telehealth programs operate in ${s.name}: a prescriber reviews your case and a licensed pharmacy ships the medication to your door. It doesn't depend on ${s.name} Medicaid and is the lowest-cost route for most residents.`,
    },
    {
      q: `Who qualifies for GLP-1 in ${s.name}?`,
      a: `GLP-1 for weight management is generally appropriate for adults with a BMI of 30 or higher, or 27 or higher with a weight-related condition such as high blood pressure, high cholesterol, sleep apnoea or type 2 diabetes. A prescriber confirms whether it's right for you — the clinical criteria are the same in ${s.name} as nationwide.`,
    },
    {
      q: `Does Medicare cover GLP-1 in ${s.name}?`,
      a: `Medicare Part D still excludes drugs prescribed purely for weight loss, the same in ${s.name} as everywhere. A temporary federal demonstration (July 2026–Dec 2027) offers Wegovy, Zepbound or Foundayo for a $50 copay to eligible members, and GLP-1s remain covered for approved medical indications such as type 2 diabetes.`,
    },
    {
      q: `Can I get tirzepatide online in ${s.name}?`,
      a: `Yes. Compounded tirzepatide — the dual GLP-1/GIP molecule in Zepbound and Mounjaro — is available to ${s.name} residents through licensed telehealth from about $119/month, no insurance required. Brand-name Zepbound is a separate, insurance-oriented route (see the cost table above).`,
    },
    {
      q: `Are compounded GLP-1 medications available in ${s.name}?`,
      a: `Yes, through licensed telehealth programs that use US compounding pharmacies. Compounded semaglutide and tirzepatide are not FDA-approved finished drugs, and their availability can shift with FDA shortage status — always confirm a program uses a licensed pharmacy (our provider safety check helps).`,
    },
  ];

  return (
    <ArticleLayout
      aside={
        <>
          <OnThisPage
            items={[
              { id: "at-a-glance", label: `${s.name} at a glance` },
              { id: "routes", label: "3 ways to get GLP-1" },
              { id: "cost", label: "What it costs" },
              { id: "eligibility", label: "Who qualifies" },
              { id: "how-to-start", label: "How to start" },
              { id: "programs", label: `Best programs in ${s.name}` },
              { id: "medicare", label: "Medicare & special coverage" },
              { id: "faq", label: `${s.name} FAQ` },
              { id: "sources", label: "Sources & methodology" },
            ]}
          />
          <div className="rounded-2xl border border-border bg-surface p-5">
            <p className="text-xs font-semibold uppercase tracking-wide text-muted">GLP-1 options in {s.name}</p>
            <p className="mt-2 text-sm leading-relaxed text-foreground">
              Compare the cash-pay programs available to {s.name} residents.
            </p>
            <a href="#programs" className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline">
              Compare programs →
            </a>
          </div>
        </>
      }
    >
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqs)) }} />
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

      <h1 className="font-serif text-4xl font-semibold leading-tight text-foreground">
        GLP-1 in {s.name}: Coverage, Costs &amp; How to Get It
      </h1>
      <EditorialByline chips={["Researched against KFF, CDC & Stateline"]} />

      <p className="mt-5 text-lg leading-relaxed text-foreground">{shortAnswer(s, notAdopted)}</p>

      {/* At a glance — compact research summary */}
      <section id="at-a-glance" className="mt-10 scroll-mt-24">
        <h2 className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">{s.name} at a glance</h2>
        <dl className="mt-3 divide-y divide-border rounded-xl border border-border">
          {[
            { k: "Medicaid", v: medicaidGlanceValue(s) },
            { k: "Private insurance", v: "Coverage varies by plan" },
            { k: "Cash pay", v: "Options from ~$69/mo" },
            { k: "Availability", v: "Telehealth available statewide" },
          ].map((row) => (
            <div key={row.k} className="flex flex-col gap-0.5 px-4 py-3 sm:flex-row sm:items-baseline sm:gap-6">
              <dt className="w-40 shrink-0 text-sm font-semibold text-foreground">{row.k}</dt>
              <dd className="text-sm leading-relaxed text-muted">{row.v}</dd>
            </div>
          ))}
        </dl>

        <details className="group mt-3">
          <summary className="cursor-pointer list-none text-sm font-semibold text-primary hover:underline [&::-webkit-details-marker]:hidden">
            <span className="group-open:hidden">Full {s.name} Medicaid detail ↓</span>
            <span className="hidden group-open:inline">Hide {s.name} Medicaid detail ↑</span>
          </summary>
          <div className="mt-3 space-y-3 border-l-2 border-border pl-4 text-sm leading-relaxed text-muted">
            <p>{st.detail}</p>
            <p>
              GLP-1s such as Ozempic and Mounjaro are covered for <strong>type 2 diabetes</strong> in nearly every state
              Medicaid program, typically with prior authorization. The differentiator is the <strong>obesity</strong>{" "}
              (weight-loss) indication:{" "}
              {isCovered
                ? `${s.name} is among the roughly 11–13 states whose Medicaid still covers it in 2026.`
                : `${s.name} is not among the roughly 11–13 states whose Medicaid covers it in 2026.`}
            </p>
            {notAdopted && (
              <p>
                {s.name} has also <strong>not adopted the ACA Medicaid expansion</strong>, so many working-age adults
                without dependents don&rsquo;t qualify for Medicaid at all — in practice pushing more residents toward
                private insurance or cash-pay routes.
              </p>
            )}
            <p>
              Coverage is also in flux nationally: a federal Medicaid demonstration (the BALANCE model) aims to expand
              access to obesity medications beginning in 2026, but participation is state-by-state and {s.name}&rsquo;s
              involvement isn&rsquo;t yet confirmed.
            </p>
            <p>
              Coverage rules change; confirm current status directly with{" "}
              <span className="font-medium text-foreground">{program}</span>.
            </p>
          </div>
        </details>
      </section>

      {/* 3 ways — main decision component */}
      <section id="routes" className="mt-12 scroll-mt-24">
        <h2 className="font-serif text-2xl font-semibold text-foreground">3 ways to get GLP-1 in {s.name}</h2>
        <p className="mt-2 text-sm leading-relaxed text-muted">Which route makes the most sense depends on your coverage.</p>
        <div className="mt-4 divide-y divide-border rounded-xl border border-border">
          {[
            {
              k: "Medicaid",
              status: isCovered ? "May cover weight-loss GLP-1" : "Not covered for weight loss",
              best: isCovered
                ? `${s.name} residents who meet the clinical criteria and prior-authorization rules`
                : "people who qualify for diabetes-related coverage",
              ro: false,
            },
            {
              k: "Private / employer",
              status: "Coverage varies by plan",
              best: "people with employer or private insurance (usually a prior authorization and BMI threshold apply)",
              ro: true,
            },
            {
              k: "Cash telehealth",
              status: "No insurance required",
              best: "straightforward self-pay access, shipped statewide (see costs below)",
              ro: false,
            },
          ].map((r) => (
            <div key={r.k} className="px-4 py-4">
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h3 className="text-sm font-semibold uppercase tracking-wide text-foreground">{r.k}</h3>
                <span className="text-sm text-muted">{r.status}</span>
              </div>
              <p className="mt-1.5 text-sm leading-relaxed text-muted">
                <span className="font-medium text-foreground">Best for:</span> {r.best}.
                {r.ro && ro && (
                  <>
                    {" "}
                    Programs like{" "}
                    <Link href={`/reviews/${ro.slug}`} className="font-medium text-primary hover:underline">
                      {ro.name}
                    </Link>{" "}
                    coordinate branded medication and insurance.
                  </>
                )}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Cost */}
      <section id="cost" className="mt-12 scroll-mt-24">
        <h2 className="font-serif text-2xl font-semibold text-foreground">What GLP-1 costs in {s.name}</h2>
        <dl className="mt-4 divide-y divide-border rounded-xl border border-border">
          {COST_ROWS.map((row) => (
            <div key={row.label} className="flex flex-col gap-1 px-4 py-3 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
              <div>
                <dt className="text-sm font-semibold text-foreground">{row.label}</dt>
                <dd className="text-xs text-muted">{row.note}</dd>
              </div>
              <span className="shrink-0 font-serif text-lg font-semibold text-foreground">{row.value}</span>
            </div>
          ))}
        </dl>
        <p className="mt-2 text-xs leading-relaxed text-muted">
          Cash prices are nationwide provider pricing (these programs serve {s.name}); they are provider-reported and
          change, and compounded availability depends on FDA shortage status. Confirm current pricing before you buy.
        </p>
      </section>

      {/* Who qualifies */}
      <section id="eligibility" className="mt-12 scroll-mt-24">
        <h2 className="font-serif text-2xl font-semibold text-foreground">Who qualifies in {s.name}</h2>
        <p className="mt-3 text-sm leading-relaxed text-foreground">
          GLP-1 for weight management is generally for adults with a <strong>BMI of 30+</strong>, or <strong>27+ with a
          weight-related condition</strong> (high blood pressure, high cholesterol, sleep apnoea or type 2 diabetes).
          The clinical criteria are the same in {s.name} as nationwide — a prescriber makes the final call.
          {ob.high && (
            <>
              {" "}
              For context, the CDC reports {s.name} is among the states where more than one in three adults have obesity
              (about {ob.regionPct}% across the {ob.region} in 2023), so many residents meet the threshold.
            </>
          )}
        </p>
      </section>

      {/* How to start */}
      <section id="how-to-start" className="mt-12 scroll-mt-24">
        <h2 className="font-serif text-2xl font-semibold text-foreground">How to start in {s.name}</h2>
        <ol className="mt-4 space-y-3">
          {[
            isCovered
              ? `Check your coverage first — ${s.name} Medicaid may cover it if you meet the criteria, and some private plans do too.`
              : `Check any private or employer plan first — some cover branded GLP-1 with a prior authorization; ${s.name} Medicaid won't for weight loss.`,
            "If you're paying cash, complete a short online assessment with a licensed telehealth program.",
            "A prescriber reviews your history and, if appropriate, prescribes.",
            `A licensed pharmacy ships the medication to your door in ${s.name} — often within days.`,
            "Follow up as your dose is titrated over the first weeks.",
          ].map((step, i) => (
            <li key={i} className="flex gap-3 text-sm leading-relaxed text-foreground">
              <span className="w-5 shrink-0 font-serif font-semibold text-primary">{i + 1}.</span>
              <span>{step}</span>
            </li>
          ))}
        </ol>
        <Link href="/tools/glp1-provider-safety-check" className="mt-4 inline-flex text-sm font-semibold text-primary hover:underline">
          Check a provider&rsquo;s safety first →
        </Link>
      </section>

      {/* Best programs — top 3 + expandable */}
      <section id="programs" className="mt-12 scroll-mt-24">
        <h2 className="font-serif text-2xl font-semibold text-foreground">Best GLP-1 programs available in {s.name}</h2>
        <p className="mt-2 text-sm leading-relaxed text-muted">
          Our independent ranking of licensed telehealth programs that ship compounded GLP-1 to {s.name} without
          insurance. Scores are ours; prices are provider-reported.
        </p>

        <ol className="mt-5 space-y-4">
          {top3.map(({ provider: p }, i) => (
            <li key={p.id} className={`rounded-xl border p-5 ${i === 0 ? "border-primary/40 bg-primary-light/20" : "border-border"}`}>
              <div className="flex items-center gap-3">
                <span className="font-serif text-lg font-semibold text-muted">#{i + 1}</span>
                <div className="relative h-6 w-24">
                  <Image src={p.logo} alt={p.name} fill className="object-contain object-left" sizes="96px" />
                </div>
                <span className="ml-auto text-sm font-semibold text-primary">{p.rating.toFixed(1)}/10</span>
              </div>
              <p className="mt-2 text-sm font-semibold text-foreground">{differentiator[p.id] ?? "Recommended program"}</p>
              <p className="mt-1 text-sm leading-relaxed text-muted">
                {p.specs.startingPrice}
                {p.externalReviews && <> · Trustpilot {p.externalReviews.score}</>}
              </p>
              <p className="mt-1 text-xs text-muted">
                {providerServesAllStates(p) ? `Ships to all 50 states, including ${s.name}` : "Ships to most US states"}
              </p>
              <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm">
                <a href={p.affiliateUrl} target="_blank" rel="sponsored nofollow noopener" className="font-semibold text-primary hover:underline">
                  Visit {p.name} →
                </a>
                <Link href={`/reviews/${p.slug}`} className="text-muted hover:text-primary hover:underline">
                  Read our review
                </Link>
              </div>
            </li>
          ))}
        </ol>

        {rest.length > 0 && (
          <details className="group mt-4">
            <summary className="cursor-pointer list-none rounded-xl border border-border px-4 py-3 text-sm font-semibold text-foreground hover:border-primary [&::-webkit-details-marker]:hidden">
              <span className="group-open:hidden">View {rest.length} more programs available in {s.name} ↓</span>
              <span className="hidden group-open:inline">Hide additional programs ↑</span>
            </summary>
            <ol className="mt-3 divide-y divide-border rounded-xl border border-border" start={4}>
              {rest.map(({ provider: p }, i) => (
                <li key={p.id} className="flex flex-wrap items-center gap-x-4 gap-y-1 px-4 py-3">
                  <span className="font-serif text-sm font-semibold text-muted">#{i + 4}</span>
                  <span className="text-sm font-semibold text-foreground">{p.name}</span>
                  <span className="text-xs text-muted">{differentiator[p.id]}</span>
                  <span className="ml-auto text-sm font-semibold text-primary">{p.rating.toFixed(1)}/10</span>
                  <div className="flex w-full items-center gap-4 pl-8 text-sm">
                    <a href={p.affiliateUrl} target="_blank" rel="sponsored nofollow noopener" className="font-semibold text-primary hover:underline">
                      Visit {p.name} →
                    </a>
                    <Link href={`/reviews/${p.slug}`} className="text-muted hover:text-primary hover:underline">
                      Read our review
                    </Link>
                  </div>
                </li>
              ))}
            </ol>
          </details>
        )}
      </section>

      {/* Medicare & special coverage */}
      <section id="medicare" className="mt-12 scroll-mt-24">
        <h2 className="font-serif text-2xl font-semibold text-foreground">Medicare &amp; special coverage</h2>
        <p className="mt-3 text-sm leading-relaxed text-foreground">
          Medicare Part D still excludes drugs prescribed purely for weight loss — the same in {s.name} as nationwide. A
          temporary{" "}
          <Link href="/glp1-medicare-coverage" className="font-medium text-primary hover:underline">
            Medicare GLP-1 Bridge
          </Link>{" "}
          demonstration (July 2026–Dec 2027) offers Wegovy, Zepbound or Foundayo for a $50 copay to eligible members, and
          GLP-1s remain covered for approved medical indications such as type 2 diabetes.
        </p>
      </section>

      {/* FAQ */}
      <section id="faq" className="mt-12 scroll-mt-24">
        <h2 className="font-serif text-2xl font-semibold text-foreground">{s.name} GLP-1: common questions</h2>
        <div className="mt-4 divide-y divide-border rounded-xl border border-border">
          {faqs.map((f) => (
            <details key={f.q} className="group px-4">
              <summary className="flex cursor-pointer list-none items-center justify-between py-3.5 text-sm font-semibold text-foreground [&::-webkit-details-marker]:hidden">
                {f.q}
                <span className="ml-4 shrink-0 text-muted transition-transform group-open:rotate-45">+</span>
              </summary>
              <p className="pb-4 text-sm leading-relaxed text-muted">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* Sources & methodology */}
      <section id="sources" className="mt-12 scroll-mt-24">
        <MedicalSources
          keys={["kff-medicaid-glp1", "kff-medicaid-expansion", "stateline-glp1-medicaid", "kff-medicare-balance", "cdc-obesity-maps", "medicare-glp1-bridge"]}
        />
        <p className="mt-4 text-xs leading-relaxed text-muted">
          <strong className="text-foreground">Methodology:</strong> coverage status is drawn from KFF and Stateline
          reporting and each state&rsquo;s published Medicaid policy; expansion status is from KFF; obesity figures are
          the CDC&rsquo;s 2023 self-reported estimates. Program scores are our own editorial assessment. We may earn a
          commission when you sign up through a link on this page — it never changes our rankings.
        </p>
      </section>

      {/* Explore other states */}
      <nav className="mt-12 border-t border-border pt-8">
        <h2 className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">Explore other states</h2>
        <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1.5 text-sm">
          {STATES.filter((x) => x.slug !== s.slug)
            .slice(0, 8)
            .map((x) => (
              <Link key={x.slug} href={`/glp1-by-state/${x.slug}`} className="text-primary hover:underline">
                {x.name}
              </Link>
            ))}
          <Link href="/glp1-by-state" className="font-semibold text-primary hover:underline">
            All 50 states →
          </Link>
        </div>
      </nav>
    </ArticleLayout>
  );
}
