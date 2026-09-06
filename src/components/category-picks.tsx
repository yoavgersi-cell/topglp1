import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, DollarSign, Shield, Truck, HeartHandshake, Pill } from "lucide-react";
import { PROVIDERS, getProvider, type Provider } from "@/data/providers";

function priceNum(s: string): number {
  const m = s.match(/\$(\d[\d,]*)/);
  return m ? Number(m[1].replace(/,/g, "")) : Infinity;
}

// Editor's category picks, computed from provider data with a sensible fallback.
function pick(fn: (p: Provider) => boolean, sortKey?: (p: Provider) => number): Provider {
  const pool = PROVIDERS.filter(fn);
  const list = pool.length ? pool : PROVIDERS;
  if (sortKey) return [...list].sort((a, b) => sortKey(a) - sortKey(b))[0];
  return [...list].sort((a, b) => a.rank - b.rank)[0];
}

export function CategoryPicks() {
  const cheapest = pick(() => true, (p) => priceNum(p.specs.semaglutide));
  const insurance = pick((p) => p.specs.insurance.toLowerCase().includes("insurance"));
  const tirzepatide = pick((p) => !p.specs.tirzepatide.startsWith("—"), (p) => priceNum(p.specs.tirzepatide));
  const shipping = pick((p) => p.specs.shipping.toLowerCase().includes("overnight")) ??
    getProvider("healthrx")!;
  const coaching = getProvider("noom") ?? pick((p) => p.specs.offeringType === "Branded");

  const cards = [
    { icon: DollarSign, label: "Cheapest", p: cheapest, note: `From ${cheapest.specs.semaglutide}` },
    { icon: Shield, label: "Best for insurance", p: insurance, note: "Works with your plan" },
    { icon: Pill, label: "Best for tirzepatide", p: tirzepatide, note: tirzepatide.specs.tirzepatide },
    { icon: Truck, label: "Fastest shipping", p: shipping, note: shipping.specs.shipping },
    { icon: HeartHandshake, label: "Best with coaching", p: coaching, note: "Habit change built in" },
  ];

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {cards.map((c) => (
        <div key={c.label} className="flex flex-col rounded-2xl border border-border bg-surface p-5">
          <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-primary">
            <c.icon size={14} /> {c.label}
          </span>
          <div className="mt-3 flex items-center justify-between">
            <div className="relative h-7 w-24">
              <Image src={c.p.logo} alt={`${c.p.name} logo`} fill className="object-contain object-left" sizes="96px" />
            </div>
            <span className="text-sm font-bold text-primary">{c.p.rating.toFixed(1)}/10</span>
          </div>
          <p className="mt-2 flex-1 text-sm text-muted">{c.note}</p>
          <div className="mt-4 flex items-center gap-3">
            <a
              href={c.p.affiliateUrl}
              target="_blank"
              rel="sponsored nofollow noopener"
              className="inline-flex items-center gap-1 rounded-full bg-primary px-4 py-2 text-xs font-semibold text-white hover:bg-primary-dark"
            >
              Visit {c.p.name} <ArrowUpRight size={12} />
            </a>
            <Link href={`/reviews/${c.p.slug}`} className="text-xs font-semibold text-primary hover:underline">
              Review
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
