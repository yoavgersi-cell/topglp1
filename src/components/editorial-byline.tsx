import { ShieldCheck, BookMarked } from "lucide-react";
import Link from "next/link";
import { SITE, CONTENT_REVIEWED } from "@/lib/site";

// A compact E-E-A-T byline strip for money/health pages: who wrote it, when it
// was reviewed, that it cites primary sources, and that it isn't medical advice.
// Honest by design — the author is the editorial team, not an invented person.
export function EditorialByline({ chips }: { chips?: string[] }) {
  return (
    <div className="mt-4 border-y border-border py-3">
      <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm">
        <span className="grid h-7 w-7 place-items-center rounded-full bg-primary-light text-xs font-bold text-primary">
          TG
        </span>
        <span className="font-semibold text-foreground">By the {SITE.team}</span>
        <span className="text-muted">· Reviewed {CONTENT_REVIEWED}</span>
        <span className="inline-flex items-center gap-1 text-muted">
          · <BookMarked size={13} className="text-primary" /> Cites FDA &amp; NEJM
        </span>
        <span className="text-muted">· Not medical advice</span>
      </div>
      {chips && chips.length > 0 && (
        <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-muted">
          {chips.map((c) => (
            <span key={c} className="inline-flex items-center gap-1">
              <ShieldCheck size={13} className="text-primary" /> {c}
            </span>
          ))}
          <Link href="/how-we-review" className="font-semibold text-primary hover:underline">
            How we rank →
          </Link>
        </div>
      )}
    </div>
  );
}
