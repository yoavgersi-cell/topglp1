import Link from "next/link";
import { ArrowRight, ArrowUpRight, BookOpen, ShieldCheck, Scale, Activity } from "lucide-react";
import { MEDICATIONS } from "@/data/medications";
import { GUIDES } from "@/data/guides";
import { PROVIDERS, getProvider } from "@/data/providers";
import { BATTLES } from "@/data/battles";
import { SITE } from "@/lib/site";
import { ProviderCard } from "@/components/provider-card";

const FEATURED_GUIDES = [
  "how-glp1-medications-work",
  "glp1-side-effects-and-how-to-manage-them",
  "glp1-cost-and-insurance",
  "glp1-results-timeline",
];

export default function HomePage() {
  const featuredMeds = MEDICATIONS.filter((m) => m.slug !== "compounded-glp1").slice(0, 4);
  const guides = FEATURED_GUIDES.map((s) => GUIDES.find((g) => g.slug === s)!).filter(Boolean);
  const topProviders = [...PROVIDERS].sort((x, y) => x.rank - y.rank).slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="border-b border-border bg-gradient-to-b from-primary-light/70 to-background">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
          <div className="max-w-3xl animate-fade-up">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-surface px-3 py-1 text-xs font-semibold text-primary">
              <ShieldCheck size={14} /> Independent · Education-first · US-focused
            </span>
            <h1 className="mt-5 font-serif text-4xl font-semibold leading-[1.1] text-foreground sm:text-6xl">
              The clear, honest guide to <span className="text-primary">GLP-1 medications</span>
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">
              Semaglutide, tirzepatide, retatrutide — what they are, how they work, what
              they cost, and how to get treatment safely. No hype, no jargon, no pressure.
              Just the facts you'd want a knowledgeable friend to explain.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/medications"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-dark"
              >
                Explore the medications <ArrowRight size={16} />
              </Link>
              <Link
                href="/best-glp1-providers"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:border-primary"
              >
                Compare GLP-1 programs
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Value props */}
      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid gap-6 sm:grid-cols-3">
          {[
            { icon: BookOpen, title: "Science first", body: "We lead with how the drugs actually work — mechanism, dosing and evidence before any recommendation." },
            { icon: Scale, title: "Straight about cost", body: "Branded list prices, compounded pricing, and how insurance really behaves for weight loss vs diabetes." },
            { icon: Activity, title: "Honest about risk", body: "Real side effects, real warning signs, and who shouldn't take these medications." },
          ].map((v) => (
            <div key={v.title} className="rounded-2xl border border-border bg-surface p-6">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-primary-light text-primary">
                <v.icon size={20} />
              </span>
              <h3 className="mt-4 text-lg font-semibold text-foreground">{v.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{v.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Medications */}
      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="font-serif text-3xl font-semibold text-foreground">The GLP-1 medications</h2>
            <p className="mt-2 text-muted">Deep-dives on each drug — brands, dosing, results, side effects and cost.</p>
          </div>
          <Link href="/medications" className="hidden shrink-0 items-center gap-1 text-sm font-semibold text-primary sm:inline-flex">
            View all <ArrowRight size={15} />
          </Link>
        </div>

        <div className="mt-8 grid gap-5 sm:grid-cols-2">
          {featuredMeds.map((med) => (
            <Link
              key={med.slug}
              href={`/medications/${med.slug}`}
              className="group rounded-2xl border border-border bg-surface p-6 transition-all hover:-translate-y-0.5 hover:shadow-md"
            >
              <div className="flex items-center gap-2">
                <span
                  className="inline-block h-2.5 w-2.5 rounded-full"
                  style={{ backgroundColor: med.accent }}
                />
                <span className="text-xs font-semibold uppercase tracking-wide text-muted">
                  {med.statusLabel}
                </span>
              </div>
              <h3 className="mt-3 text-xl font-bold text-foreground">
                {med.name}
                <span className="ml-2 text-sm font-normal text-muted">
                  {med.brandNames.slice(0, 2).join(", ")}
                </span>
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{med.oneLiner}</p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary">
                Read the guide <ArrowRight size={15} className="transition-transform group-hover:translate-x-0.5" />
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Guides */}
      <section className="border-y border-border bg-surface">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
          <h2 className="font-serif text-3xl font-semibold text-foreground">Start with the essentials</h2>
          <p className="mt-2 text-muted">The questions almost everyone has before and during treatment.</p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {guides.map((g) => (
              <Link
                key={g.slug}
                href={`/guides/${g.slug}`}
                className="group flex flex-col rounded-2xl border border-border bg-background p-5 transition-colors hover:border-primary"
              >
                <span className="text-xs font-semibold uppercase tracking-wide text-primary">{g.category}</span>
                <h3 className="mt-2 flex-1 font-semibold leading-snug text-foreground">{g.title}</h3>
                <span className="mt-3 text-xs text-muted">{g.readTime}</span>
              </Link>
            ))}
          </div>
          <Link href="/guides" className="mt-8 inline-flex items-center gap-1 text-sm font-semibold text-primary">
            Browse all guides <ArrowRight size={15} />
          </Link>
        </div>
      </section>

      {/* Comparisons */}
      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="font-serif text-3xl font-semibold text-foreground">Head-to-head comparisons</h2>
            <p className="mt-2 max-w-2xl text-muted">
              No scoreboard — we match each program to your priority (price, brand access, shipping, coaching).
            </p>
          </div>
          <Link href="/compare" className="hidden shrink-0 items-center gap-1 text-sm font-semibold text-primary sm:inline-flex">
            All comparisons <ArrowRight size={15} />
          </Link>
        </div>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {BATTLES.slice(0, 4).map((b) => {
            const a = getProvider(b.a);
            const bp = getProvider(b.b);
            if (!a || !bp) return null;
            return (
              <Link
                key={b.slug}
                href={`/compare/${b.slug}`}
                className="group flex items-center justify-between gap-4 rounded-2xl border border-border bg-surface p-5 transition-colors hover:border-primary"
              >
                <div>
                  <h3 className="font-bold text-foreground">{b.title}</h3>
                  <p className="mt-1 text-sm text-muted">{b.description}</p>
                </div>
                <ArrowRight size={16} className="shrink-0 text-primary transition-transform group-hover:translate-x-0.5" />
              </Link>
            );
          })}
        </div>
      </section>

      {/* Providers teaser */}
      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="font-serif text-3xl font-semibold text-foreground">Where to get GLP-1 treatment</h2>
            <p className="mt-2 max-w-2xl text-muted">
              If you've decided to pursue treatment, these are the telehealth programs we rate highest for
              GLP-1 access, pricing and clinical support.
            </p>
          </div>
          <Link href="/best-glp1-providers" className="hidden shrink-0 items-center gap-1 text-sm font-semibold text-primary sm:inline-flex">
            Full ranking <ArrowRight size={15} />
          </Link>
        </div>
        <div className="mt-8 space-y-4">
          {topProviders.map((p) => (
            <ProviderCard key={p.id} provider={p} />
          ))}
        </div>
        <div className="mt-6">
          <Link
            href="/best-glp1-providers"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:border-primary"
          >
            See all {PROVIDERS.length} programs, ranked <ArrowUpRight size={15} />
          </Link>
        </div>
      </section>

      {/* Editorial note */}
      <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6">
        <div className="rounded-2xl border border-border bg-primary-light/40 p-8">
          <h2 className="font-serif text-2xl font-semibold text-foreground">Why trust {SITE.name}?</h2>
          <p className="mt-3 max-w-3xl leading-relaxed text-muted">
            {SITE.name} exists to be the clearest GLP-1 explainer on the web. We're upfront that
            we earn affiliate commissions from some providers — but our medication guides are
            written to inform, not to sell, and we'll happily tell you when a drug isn't right,
            when a product isn't legal, or when the honest answer is "talk to your doctor."
          </p>
          <Link href="/about" className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary">
            Read our editorial approach <ArrowRight size={15} />
          </Link>
        </div>
      </section>
    </>
  );
}
