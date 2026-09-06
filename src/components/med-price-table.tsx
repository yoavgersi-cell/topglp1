import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Trophy } from "lucide-react";
import { PROVIDERS, type Provider } from "@/data/providers";

type MedKind = "semaglutide" | "tirzepatide";

function priceOf(p: Provider, kind: MedKind): string {
  return kind === "semaglutide" ? p.specs.semaglutide : p.specs.tirzepatide;
}

// Numeric sort key from a price string (first $ number), Infinity for "varies".
function priceValue(p: Provider, kind: MedKind): number {
  const match = priceOf(p, kind).match(/\$(\d[\d,]*)/);
  return match ? Number(match[1].replace(/,/g, "")) : 99999;
}

// A price-sorted table of providers that offer the given medication.
// Server component — no interactivity, fully static/SEO-friendly.
export function MedPriceTable({ kind }: { kind: MedKind }) {
  const offering = PROVIDERS.filter((p) => !priceOf(p, kind).startsWith("—")).sort(
    (a, b) => priceValue(a, kind) - priceValue(b, kind),
  );

  return (
    <div className="overflow-x-auto rounded-2xl border border-border">
      <table className="w-full min-w-[560px] border-collapse text-sm">
        <thead>
          <tr className="bg-surface text-left">
            <th className="p-4 font-semibold text-muted">#</th>
            <th className="p-4 font-semibold text-muted">Program</th>
            <th className="p-4 font-semibold text-muted">{kind === "semaglutide" ? "Semaglutide" : "Tirzepatide"} price</th>
            <th className="p-4 font-semibold text-muted">Type</th>
            <th className="p-4"></th>
          </tr>
        </thead>
        <tbody>
          {offering.map((p, i) => (
            <tr key={p.id} className={i % 2 === 0 ? "bg-background" : "bg-surface"}>
              <td className="p-4 align-middle font-bold text-muted">{i + 1}</td>
              <td className="p-4 align-middle">
                <div className="flex items-center gap-2">
                  <div className="relative h-6 w-20">
                    <Image src={p.logo} alt={`${p.name} logo`} fill className="object-contain object-left" sizes="80px" />
                  </div>
                  {p.rank === 1 && <Trophy size={14} className="text-primary" />}
                </div>
              </td>
              <td className="p-4 align-middle font-medium text-foreground">{priceOf(p, kind)}</td>
              <td className="p-4 align-middle text-muted">{p.specs.offeringType}</td>
              <td className="p-4 align-middle">
                <Link
                  href={`/reviews/${p.slug}`}
                  className="inline-flex items-center gap-1 rounded-full bg-primary px-3 py-1.5 text-xs font-semibold text-white hover:bg-primary-dark"
                >
                  Review <ArrowUpRight size={12} />
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
