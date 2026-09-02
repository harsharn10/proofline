import { Link } from "@tanstack/react-router";
import { Badge } from "@/components/ui/badge";
import { dejargon } from "@/lib/dejargon";
import {
  DEFAULT_KPIS,
  KPI_LABEL,
  KPI_SOURCE,
  SECTION_KPIS,
  STATUS_LABEL,
  formatKpi,
  relativeTime,
  statusTone,
  type DirectoryEntry,
  type KpiKey,
  type SectionDef,
} from "@/data/types";

// Rank inside a section: live names first, then the section's first KPI descending (nulls last),
// then dormant names sink, then the name. A dead pad never sits above a live one.
const STATUS_ORDER = { live: 0, quiet: 1, announced: 2, testnet: 3, dormant: 4 } as const;

export function rankEntries(entries: DirectoryEntry[], keys: KpiKey[]): DirectoryEntry[] {
  const first = keys[0]!;
  return [...entries].sort((a, b) => {
    const sa = STATUS_ORDER[a.kpis.status], sb = STATUS_ORDER[b.kpis.status];
    if (sa !== sb) return sa - sb;
    const av = a.kpis[first], bv = b.kpis[first];
    if (av !== null && bv !== null && av !== bv) return bv - av;
    if ((av === null) !== (bv === null)) return av === null ? 1 : -1;
    return a.name.localeCompare(b.name);
  });
}

function StatusCell({ d, now }: { d: DirectoryEntry; now: number }) {
  const { status, lastActivityAt } = d.kpis;
  return (
    <span className="kstatus">
      <Badge tone={statusTone(status)}>{STATUS_LABEL[status]}</Badge>
      {lastActivityAt ? <span className="kago">{relativeTime(lastActivityAt, now)}</span> : null}
    </span>
  );
}

function ControlCell({ d }: { d: DirectoryEntry }) {
  const score = d.derived.score;
  if (score !== null) return <span className="kctl" title="Control score: security and control evidence, not traction">ctl {score}</span>;
  if (d.role === "observe") return <span className="kctl faint" title="Fails a qualifying test">watchlist</span>;
  return null;
}

// One section as a ranked table: name and product, status with last activity, the section's four
// KPIs, and the control score when there is one. Every number is a dated read from a named source
// (title attribute); a missing read shows a dash, never a zero.
export function KpiSection({ section, entries, now }: { section: SectionDef; entries: DirectoryEntry[]; now: number }) {
  if (entries.length === 0) return null;
  const keys = SECTION_KPIS[section.id] ?? DEFAULT_KPIS;
  const rows = rankEntries(entries, keys);
  return (
    <section id={section.id} className="catsec">
      <div className="sechead">
        <h2 className="t">
          {section.label} <span className="count">{rows.length}</span>
        </h2>
        <span className="h">ranked by {KPI_LABEL[keys[0]!]}</span>
      </div>
      <p className="catdesc">{section.description}</p>
      <div className="ktable" role="table">
        <div className="krow khead" role="row">
          <span>name</span>
          <span>status</span>
          {keys.map((k) => (
            <span key={k} className="knum" title={KPI_SOURCE[k]}>
              {KPI_LABEL[k]}
            </span>
          ))}
          <span className="knum">control</span>
        </div>
        {rows.map((d) => (
          <Link key={d.slug} to="/n/$slug" params={{ slug: d.slug }} className={`krow${d.kpis.status === "dormant" ? " dim" : ""}`} role="row" title={dejargon(d.summary)}>
            <span className="kname">
              <b>{d.symbol && d.symbol.toLowerCase() !== d.name.toLowerCase() ? `${d.symbol} · ${d.name}` : d.name}</b>
              <small>{d.tree?.label ?? ""}</small>
            </span>
            <StatusCell d={d} now={now} />
            {keys.map((k) => (
              <span key={k} className={`knum${k === "priceChange24h" && d.kpis[k] !== null ? (d.kpis[k]! >= 0 ? " pos" : " neg") : ""}`} title={KPI_SOURCE[k]}>
                {formatKpi(k, d.kpis[k])}
              </span>
            ))}
            <span className="knum">
              <ControlCell d={d} />
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
