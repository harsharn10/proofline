import { Link } from "@tanstack/react-router";
import { NAMES } from "@/data/names";
import { CHAIN } from "@/data/chain";
import { ExportMenu } from "@/components/export-menu";

export function SiteHeader() {
  return (
    <header className="border-b border-border bg-bg">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-4 py-4 sm:px-6">
        <Link to="/" className="group min-w-0">
          <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-muted">
            Robinhood Chain {CHAIN.chainId}
          </p>
          <h1 className="mt-1 font-sans text-lg font-semibold tracking-tight text-fg group-hover:text-accent">
            Chain File
          </h1>
        </Link>
        <div className="flex flex-wrap items-center gap-3">
          <div className="hidden sm:block text-right">
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-subtle">Names on file</p>
            <p className="font-mono text-sm tabular-nums text-accent">{NAMES.length}</p>
          </div>
          <div className="hidden sm:block text-right">
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-subtle">Updated</p>
            <p className="font-mono text-sm tabular-nums text-fg">{CHAIN.updated}</p>
          </div>
          <ExportMenu />
        </div>
      </div>
    </header>
  );
}
