import { Link } from "@tanstack/react-router";
import { Badge } from "@/components/ui/badge";
import { LIFECYCLE_LABEL, lifecycleTone, type DirectoryEntry } from "@/data/types";

export function NameRow({ dossier }: { dossier: DirectoryEntry }) {
  return (
    <Link
      to="/n/$slug"
      params={{ slug: dossier.slug }}
      className="grid grid-cols-[minmax(0,1fr)_auto] gap-3 border-b border-border px-4 py-4 transition-colors duration-150 hover:bg-raised sm:grid-cols-[7.5rem_minmax(0,1fr)_auto] sm:px-5"
    >
      <p className="font-mono text-xs font-medium uppercase tracking-[0.08em] text-accent">
        {dossier.symbol ?? dossier.name}
      </p>
      <div className="col-start-1 row-start-2 min-w-0 sm:col-start-2 sm:row-start-1">
        <p className="truncate text-sm text-fg">{dossier.name}</p>
        <p className="mt-0.5 line-clamp-2 text-xs text-muted">{dossier.summary}</p>
      </div>
      <div className="col-start-2 row-start-1 flex flex-col items-end gap-1 sm:col-start-3">
        <div className="flex items-center gap-1.5">
          {dossier.derived.trending ? <Badge tone="warn">Trending</Badge> : null}
          <Badge tone={lifecycleTone(dossier.lifecycle)}>{LIFECYCLE_LABEL[dossier.lifecycle]}</Badge>
        </div>
        {dossier.coverage === "full" ? (
          <span className="font-mono text-[11px] tabular-nums text-accent">
            {dossier.derived.score !== null ? `${dossier.derived.score}/100` : "—"}
          </span>
        ) : (
          <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-subtle">Research pending</span>
        )}
        <span className="hidden font-mono text-[10px] uppercase tracking-[0.12em] text-subtle sm:inline">
          {dossier.category}
        </span>
      </div>
    </Link>
  );
}
