import Link from "next/link";
import { ChevronRight } from "lucide-react";

export function Breadcrumbs({ items }: { items: { name: string; path: string }[] }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-6 flex flex-wrap items-center gap-1 text-xs text-muted">
      {items.map((item, i) => {
        const last = i === items.length - 1;
        return (
          <span key={item.path} className="flex items-center gap-1">
            {last ? (
              <span className="font-medium text-foreground">{item.name}</span>
            ) : (
              <Link href={item.path} className="transition-colors hover:text-primary">
                {item.name}
              </Link>
            )}
            {!last && <ChevronRight size={13} className="text-border" />}
          </span>
        );
      })}
    </nav>
  );
}
