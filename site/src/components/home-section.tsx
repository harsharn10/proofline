import { Link } from "@tanstack/react-router";
import { Badge } from "@/components/ui/badge";
import { dejargon } from "@/lib/dejargon";
import {
  LIFECYCLE_LABEL,
  METRIC_KIND_LABEL,
  formatMetricValue,
  headlineMetric,
  lifecycleTone,
  reportedTitle,
  type DirectoryEntry,
  type SectionDef,
} from "@/data/types";

// Ranked names first (best rank up), unranked after (alphabetical) — never a global list
// (IA brief §Pages 1). Ranks from different flat-category cohorts can tie on position;
// the name tiebreak keeps the order stable.
function sectionOrder(a: DirectoryEntry, b: DirectoryEntry): number {
  const ar = a.derived.rank?.position ?? Number.MAX_SAFE_INTEGER;
  const br = b.derived.rank?.position ?? Number.MAX_SAFE_INTEGER;
  if (ar !== br) return ar - br;
  return a.name.localeCompare(b.name);
}

// One home section: header (visitor label + count + one plain line), then a hairline
// mini-table — ticker/name/one-liner, headline reported figure, lifecycle badge.
export function HomeSection({ section, entries }: { section: SectionDef; entries: DirectoryEntry[] }) {
  if (entries.length === 0) return null;
  const rows = [...entries].sort(sectionOrder);
  return (
    <section id={section.id} className="catsec">
      <div className="sechead">
        <h2 className="t">
          {section.label} <span className="count">{rows.length}</span>
        </h2>
      </div>
      <p className="catdesc">{section.description}</p>
      <div>
        {rows.map((d) => {
          const metric = headlineMetric(d.derived);
          return (
            <Link key={d.slug} to="/n/$slug" params={{ slug: d.slug }} className="secrow">
              <span className="tick">{d.symbol ?? d.name}</span>
              <span className="emain">
                <b>{d.name}</b> <span className="esum">— {dejargon(d.summary)}</span>
              </span>
              <span className="emeta">
                {metric ? (
                  <span className="mcell" title={reportedTitle(metric.as_of)}>
                    <span className="mval">
                      {formatMetricValue(metric)} <small>{METRIC_KIND_LABEL[metric.kind]}</small>
                    </span>
                    <Badge tone="warn">reported</Badge>
                  </span>
                ) : null}
                <Badge tone={lifecycleTone(d.lifecycle)}>{LIFECYCLE_LABEL[d.lifecycle]}</Badge>
              </span>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
