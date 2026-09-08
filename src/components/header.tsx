"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "./logo";

const NAV = [
  { label: "Medications", href: "/medications" },
  { label: "Reviews", href: "/reviews" },
  { label: "Compare", href: "/compare" },
  { label: "Guides", href: "/guides" },
  { label: "Tools", href: "/tools" },
  { label: "UK", href: "/uk" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname() || "/";
  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-surface/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Logo />

        <nav className="hidden items-center gap-7 md:flex">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive(item.href) ? "page" : undefined}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive(item.href) ? "text-primary" : "text-muted"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/find-your-match"
            className="rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-primary-dark"
          >
            Take the Quiz
          </Link>
        </nav>

        <button
          type="button"
          className="md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-border bg-surface md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col px-4 py-2">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive(item.href) ? "page" : undefined}
                className={`border-b border-border py-3 text-sm font-medium last:border-0 ${
                  isActive(item.href) ? "text-primary" : "text-foreground"
                }`}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
