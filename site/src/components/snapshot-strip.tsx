import { Badge } from "@/components/ui/badge";
import { hostLabel } from "@/lib/dejargon";
import { formatDate } from "@/lib/utils";
import {
  METRIC_KIND_LABEL,
  formatMetricValue,
  rankLine,
  reportedTitle,
  type Metric,
  type MetricKind,
  type Rank,
  type SourceEntry,
} from "@/data/types";

const DISPLAY_ORDER: MetricKind[] = ["tvl", "volume_24h", "fees_24h", "revenue_24h", "market_cap", "holders"];

// Always-visible snapshot (Eregion kv grid): one cell per reported figure — value, as-of,
// `reported` chip, receipt to the figure's source — plus the rank line with its basis
// spelled out. No figures → one honest line, nothing else.
export function SnapshotStrip({
  metrics,
  rank,
  category,
  sources,
}: {
  metrics: Metric[];
  rank: Rank | null;
  category: string;
  sources: SourceEntry[];
}) {
  if (metrics.length === 0 && !rank) {
    return <p className="honest mt-5">No reported figures yet.</p>;
  }
  const srcById = new Map(sources.map((s) => [s.id, s]));
  const ordered = [...metrics].sort((a, b) => DISPLAY_ORDER.indexOf(a.kind) - DISPLAY_ORDER.indexOf(b.kind));
  return (
    <div className="snapstrip">
      {ordered.length > 0 ? (
        <div className="kvgrid snapgrid">
          {ordered.map((m) => {
            const src = m.sources.map((id) => srcById.get(id)).find(Boolean);
            return (
              <div className="s" key={m.kind}>
                <div className="k">
                  {METRIC_KIND_LABEL[m.kind]}
                  <span className="chainlbl">as of {formatDate(m.as_of)}</span>
                </div>
                <div className="v">
                  <span className="num" title={reportedTitle(m.as_of)}>
                    {formatMetricValue(m)}
                  </span>
                  <Badge tone="warn">reported</Badge>
                  {src ? (
                    <a className="receipt" href={src.url} target="_blank" rel="noreferrer">
                      {hostLabel(src.url)}
                    </a>
                  ) : null}
                </div>
              </div>
            );
          })}
        </div>
      ) : null}
      {rank ? <p className="rankline">{rankLine(rank, category)}</p> : null}
    </div>
  );
}
