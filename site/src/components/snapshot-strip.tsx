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

// Reported figures as a kv grid: value, as-of, receipt to the figure's source, plus the rank line
// with its cohort and basis spelled out. Every figure here is reported by its source, not verified
// by Proofline — the caveat is the as-of tooltip and the one legend on /methodology, not a badge
// per number. No figures: renders nothing (rule 1).
export function SnapshotStrip({ metrics, rank, sources }: { metrics: Metric[]; rank: Rank | null; sources: SourceEntry[] }) {
  if (metrics.length === 0 && !rank) return null;
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
                  <span className="chainlbl">reported · as of {formatDate(m.as_of)}</span>
                </div>
                <div className="v">
                  <span className="num" title={reportedTitle(m.as_of)}>
                    {formatMetricValue(m)}
                  </span>
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
      {rank ? <p className="rankline">{rankLine(rank)}</p> : null}
    </div>
  );
}
