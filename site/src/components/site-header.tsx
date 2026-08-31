import { Link } from "@tanstack/react-router";
import { NAMES } from "@/data/names";
import { CHAIN } from "@/data/chain";
import { ExportMenu } from "@/components/export-menu";

const NAV_LINKS = [
  { to: "/", label: "Coverage" },
  { to: "/methodology", label: "Methodology" },
  { to: "/changelog", label: "Changelog" },
] as const;

export function SiteHeader() {
  return (
    <header className="border-b border-border bg-bg">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-4 py-4 sm:px-6">
        <Link to="/" className="group min-w-0">
          <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-muted">
            Robinhood Chain {CHAIN.chainId}
          </p>
          <h1 className="mt-1 font-sans text-lg font-semibold tracking-tight text-fg group-hover:text-accent">
            Proofline
          </h1>
        </Link>
        <nav className="flex items-center gap-4">
          {NAV_LINKS.map((link) => (
            <a
              key={link.to}
              href={link.to}
              className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted hover:text-fg"
            >
              {link.label}
            </a>
          ))}
        </nav>
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
