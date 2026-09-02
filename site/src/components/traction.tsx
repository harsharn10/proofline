import { Section } from "@/components/section";
import { formatDate } from "@/lib/utils";
import { KPI_LABEL, KPI_SOURCE, formatKpi, relativeTime, type Kpis, type KpiKey } from "@/data/types";

// The tracker block on a profile: every number the reads produced, with its source in the tooltip
// and the read time in the section hint. Missing reads are omitted, not shown as zero.
const ORDER: KpiKey[] = ["volume24h", "liquidityUsd", "trades24h", "priceChange24h", "holders", "holdersDelta7d", "launches24h", "fdv", "txnsTotal"];

export function Traction({ kpis, now }: { kpis: Kpis; now: number }) {
  const cells = ORDER.filter((k) => kpis[k] !== null);
  if (cells.length === 0) return null;
  const hint = [
    kpis.readAt ? `read ${relativeTime(kpis.readAt, now)}` : null,
    kpis.lastActivityAt ? `last on-chain activity ${relativeTime(kpis.lastActivityAt, now)}` : null,
    kpis.firstPairAt ? `first pool ${formatDate(kpis.firstPairAt.slice(0, 10))}` : null,
  ]
    .filter(Boolean)
    .join(" · ");
  return (
    <Section title="Traction" hint={hint}>
      <div className="kvgrid traction">
        {cells.map((k) => (
          <div className="s" key={k} title={KPI_SOURCE[k]}>
            <div className="k">{KPI_LABEL[k]}</div>
            <div className={`v num${k === "priceChange24h" || k === "holdersDelta7d" ? (kpis[k]! >= 0 ? " pos" : " neg") : ""}`}>{formatKpi(k, kpis[k])}</div>
          </div>
        ))}
      </div>
    </Section>
  );
}
