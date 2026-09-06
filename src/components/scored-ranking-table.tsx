import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Star, Trophy } from "lucide-react";
import { PROVIDERS } from "@/data/providers";
import { bestForTag, takesInsurance, rankedProviders } from "@/data/rankings";

// The scored 2026 ranking table — score, type, insurance, "watch out for".
export function ScoredRankingTable() {
  const rows = rankedProviders(PROVIDERS);
  return (
    <div className="overflow-x-auto rounded-2xl border border-border">
      <table className="w-full min-w-[820px] border-collapse text-sm">
        <thead>
          <tr className="bg-surface text-left">
            <th className="p-4 font-semibold text-muted">#</th>
            <th className="p-4 font-semibold text-muted">Program</th>
            <th className="p-4 font-semibold text-muted">Score</th>
            <th className="p-4 font-semibold text-muted">Starting price</th>
            <th className="p-4 font-semibold text-muted">Type</th>
            <th className="p-4 font-semibold text-muted">Insurance</th>
            <th className="p-4 font-semibold text-muted">Watch out for</th>
            <th className="p-4"></th>
          </tr>
        </thead>
        <tbody>
          {rows.map((p, i) => (
            <tr key={p.id} className={i % 2 === 0 ? "bg-background" : "bg-surface"}>
              <td className="p-4 align-top font-bold text-muted">{p.rank}</td>
              <td className="p-4 align-top">
                <Link href={`/reviews/${p.slug}`} className="group inline-flex flex-col gap-1">
                  <span className="flex items-center gap-2">
                    <span className="relative h-6 w-20">
                      <Image src={p.logo} alt={`${p.name} logo`} fill className="object-contain object-left" sizes="80px" />
                    </span>
                    {p.rank === 1 && <Trophy size={13} className="text-primary" />}
                  </span>
                  <span className="text-xs text-muted group-hover:text-primary">Best for: {bestForTag(p.id)}</span>
                </Link>
              </td>
              <td className="p-4 align-top">
                <span className="inline-flex items-center gap-1 font-bold text-primary">
                  <Star size={13} className="fill-primary text-primary" /> {p.rating.toFixed(1)}
                  <span className="font-normal text-muted">/10</span>
                </span>
              </td>
              <td className="p-4 align-top font-medium text-foreground">{p.specs.startingPrice}</td>
              <td className="p-4 align-top">
                <span className="rounded-full bg-primary-light px-2 py-0.5 text-xs font-semibold text-primary">
                  {p.specs.offeringType}
                </span>
              </td>
              <td className="p-4 align-top text-foreground">{takesInsurance(p)}</td>
              <td className="max-w-[220px] p-4 align-top text-xs text-muted">{p.specs.watchOut}</td>
              <td className="p-4 align-top">
                <a
                  href={p.affiliateUrl}
                  target="_blank"
                  rel="sponsored nofollow noopener"
                  className="inline-flex items-center gap-1 rounded-full bg-primary px-3 py-1.5 text-xs font-semibold text-white hover:bg-primary-dark"
                >
                  Check price <ArrowUpRight size={12} />
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
