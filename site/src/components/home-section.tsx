import { Link } from "@tanstack/react-router";
import { dejargon } from "@/lib/dejargon";
import {
  LIFECYCLE_LABEL,
  METRIC_KIND_LABEL,
  formatMetricValue,
  headlineMetric,
  reportedTitle,
  type DirectoryEntry,
  type SectionDef,
} from "@/data/types";

// Chip order: full records first, then names with a reported figure (best rank first), then the
// rest alphabetically. Chips do not imply a ranking the way rows do, so alphabetical never reads
// as a failed leaderboard.
function chipOrder(a: DirectoryEntry, b: DirectoryEntry): number {
  const af = a.coverage === "full" ? 0 : 1;
  const bf = b.coverage === "full" ? 0 : 1;
  if (af !== bf) return af - bf;
  const am = headlineMetric(a.derived) ? 0 : 1;
  const bm = headlineMetric(b.derived) ? 0 : 1;
  if (am !== bm) return am - bm;
  const ar = a.derived.rank?.position ?? Number.MAX_SAFE_INTEGER;
  const br = b.derived.rank?.position ?? Number.MAX_SAFE_INTEGER;
  if (ar !== br) return ar - br;
  return a.name.localeCompare(b.name);
}

// Past this many, the tail folds behind a native <details> "+ N more" (eregion cellchips).
const CHIP_CAP = 12;

function NameChip({ d }: { d: DirectoryEntry }) {
  const metric = headlineMetric(d.derived);
  // Thin is visible, not hidden (rule 4): an initial-research name with nothing reported is dashed
  // and dimmed, so the shape of the coverage shows at a glance.
  const watch = d.role === "observe";
  const quiet = watch || (d.coverage !== "full" && !metric && d.holders === null);
  const showSymbol = d.symbol && d.symbol.toLowerCase() !== d.name.toLowerCase();
  return (
    <Link
      to="/n/$slug"
      params={{ slug: d.slug }}
      className={quiet ? "chip quiet" : "chip"}
      title={dejargon(d.summary)}
    >
      {d.name}
      {showSymbol ? <span className="ct">{d.symbol}</span> : null}
      {watch ? (
        <small title="fails a qualifying test; listed, never scored">watchlist</small>
      ) : metric ? (
        <small title={reportedTitle(metric.as_of)}>
          {formatMetricValue(metric)} {METRIC_KIND_LABEL[metric.kind]}
        </small>
      ) : d.holders !== null ? (
        <small title="holder count read from the explorer">{d.holders.toLocaleString("en-US")} holders</small>
      ) : d.lifecycle !== "mainnet" ? (
        <small>{LIFECYCLE_LABEL[d.lifecycle].toLowerCase()}</small>
      ) : null}
    </Link>
  );
}

// One home section: heading with count, one plain line, then chips — name, ticker when it differs,
// and one small figure (a reported metric, else the lifecycle when it is not mainnet).
export function ChipSection({ section, entries }: { section: SectionDef; entries: DirectoryEntry[] }) {
  if (entries.length === 0) return null;
  const ordered = [...entries].sort(chipOrder);
  const head = ordered.slice(0, CHIP_CAP);
  const rest = ordered.slice(CHIP_CAP);
  return (
    <section id={section.id} className="catsec">
      <div className="sechead">
        <h2 className="t">
          {section.label} <span className="count">{ordered.length}</span>
        </h2>
      </div>
      <p className="catdesc">{section.description}</p>
      <div className="chiprow">
        {head.map((d) => (
          <NameChip key={d.slug} d={d} />
        ))}
      </div>
      {rest.length > 0 ? (
        <details className="morechips">
          <summary>+ {rest.length} more</summary>
          <div className="chiprow">
            {rest.map((d) => (
              <NameChip key={d.slug} d={d} />
            ))}
          </div>
        </details>
      ) : null}
    </section>
  );
}
