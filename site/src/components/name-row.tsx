import { Link } from "@tanstack/react-router";
import { Badge } from "@/components/ui/badge";
import { CATEGORY_LABEL, STATUS_LABEL, type NameRecord } from "@/data/types";
import { statusTone } from "@/lib/status-tone";

export function NameRow({ name }: { name: NameRecord }) {
  return (
    <Link
      to="/n/$slug"
      params={{ slug: name.slug }}
      className="grid grid-cols-[minmax(0,1fr)_auto] gap-3 border-b border-border px-4 py-4 transition-colors duration-150 hover:bg-raised sm:grid-cols-[7.5rem_minmax(0,1fr)_auto] sm:px-5"
    >
      <p className="font-mono text-xs font-medium uppercase tracking-[0.08em] text-accent">{name.ticker}</p>
      <div className="col-start-1 row-start-2 min-w-0 sm:col-start-2 sm:row-start-1">
        <p className="truncate text-sm text-fg">{name.project}</p>
        <p className="mt-0.5 line-clamp-2 text-xs text-muted">{name.oneLiner}</p>
      </div>
      <div className="col-start-2 row-start-1 flex flex-col items-end gap-1 sm:col-start-3">
        <Badge tone={statusTone(name.status)}>{STATUS_LABEL[name.status]}</Badge>
        <span className="hidden font-mono text-[10px] uppercase tracking-[0.12em] text-subtle sm:inline">
          {CATEGORY_LABEL[name.category]}
        </span>
      </div>
    </Link>
  );
}
