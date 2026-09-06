import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-2xl flex-col items-center px-4 py-24 text-center sm:px-6">
      <span className="font-serif text-6xl font-semibold text-primary">404</span>
      <h1 className="mt-4 font-serif text-3xl font-semibold text-foreground">Page not found</h1>
      <p className="mt-3 text-muted">
        That page doesn't exist or has moved. Here's where most people are headed:
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link href="/medications" className="rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white hover:bg-primary-dark">
          GLP-1 medications
        </Link>
        <Link href="/guides" className="rounded-full border border-border bg-surface px-5 py-2.5 text-sm font-semibold text-foreground hover:border-primary">
          Guides
        </Link>
        <Link href="/best-glp1-providers" className="rounded-full border border-border bg-surface px-5 py-2.5 text-sm font-semibold text-foreground hover:border-primary">
          Best programs
        </Link>
      </div>
    </div>
  );
}
