import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ExportMenu } from "@/components/export-menu";
import { getContent } from "@/data/content-server";

// SiteHeader renders outside any route's loader (it's mounted once in __root.tsx around
// every page), so it fetches its own small slice of the content bundle after mount rather
// than requiring a root-level loader. getCachedContent() on the server means this costs
// no extra file I/O beyond the route's own loader call.
export function SiteHeader() {
  const [meta, setMeta] = useState<{ chainId: number; count: number } | null>(null);

  useEffect(() => {
    let cancelled = false;
    getContent().then((content) => {
      if (cancelled) return;
      setMeta({ chainId: content.site.chain.id, count: content.dossiers.length });
    });
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <header className="border-b border-border bg-bg">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-4 py-4 sm:px-6">
        <Link to="/" className="group min-w-0">
          <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-muted">
            Robinhood Chain{meta ? ` ${meta.chainId}` : ""}
          </p>
          <h1 className="mt-1 font-sans text-lg font-semibold tracking-tight text-fg group-hover:text-accent">
            Proofline
          </h1>
        </Link>
        <nav className="flex items-center gap-4">
          <Link to="/" className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted hover:text-fg">
            Coverage
          </Link>
        </nav>
        <div className="flex flex-wrap items-center gap-3">
          <div className="hidden text-right sm:block">
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-subtle">Names on file</p>
            <p className="font-mono text-sm tabular-nums text-accent">{meta ? meta.count : "—"}</p>
          </div>
          <ExportMenu />
        </div>
      </div>
    </header>
  );
}
