import { Link } from "@tanstack/react-router";
import { Badge } from "@/components/ui/badge";
import { KPI_SOURCE, STATUS_LABEL, formatKpi, formatUsd, relativeTime, statusTone, type DirectoryEntry } from "@/data/types";

const DAY = 86_400_000;

// "What's moving": the five names with the most 24h volume, and, once snapshots have accrued, the
// five biggest 7-day holder gains. "New this week": names whose first pool is under 14 days old.
// Both are computed from the pulled reads; nothing here is editorial.
export function Movers({ entries, now }: { entries: DirectoryEntry[]; now: number }) {
  const byVolume = entries
    .filter((d) => (d.kpis.volume24h ?? 0) > 0)
    .sort((a, b) => (b.kpis.volume24h ?? 0) - (a.kpis.volume24h ?? 0))
    .slice(0, 5);
  const byHolders = entries
    .filter((d) => (d.kpis.holdersDelta7d ?? 0) > 0)
    .sort((a, b) => (b.kpis.holdersDelta7d ?? 0) - (a.kpis.holdersDelta7d ?? 0))
    .slice(0, 5);
  const fresh = entries
    .filter((d) => d.kpis.firstPairAt && now - new Date(d.kpis.firstPairAt).getTime() <= 14 * DAY)
    .sort((a, b) => new Date(b.kpis.firstPairAt!).getTime() - new Date(a.kpis.firstPairAt!).getTime())
    .slice(0, 6);

  if (byVolume.length === 0 && fresh.length === 0) return null;

  return (
    <section className="catsec" id="moving">
      <div className="sechead">
        <h2 className="t">What's moving</h2>
        <span className="h">from the latest chain read, not opinion</span>
      </div>
      <div className="movers">
        <div className="mcol">
          <span className="kd">most volume, 24h</span>
          <ol className="mlist">
            {byVolume.map((d, i) => (
              <li key={d.slug}>
                <Link to="/n/$slug" params={{ slug: d.slug }}>
                  <span className="mrank">{i + 1}</span>
                  <b>{d.symbol ?? d.name}</b>
                  <span className="mv" title={KPI_SOURCE.volume24h}>{formatUsd(d.kpis.volume24h!)}</span>
                  {d.kpis.priceChange24h !== null ? (
                    <span className={`mchg ${d.kpis.priceChange24h >= 0 ? "pos" : "neg"}`}>{formatKpi("priceChange24h", d.kpis.priceChange24h)}</span>
                  ) : null}
                </Link>
              </li>
            ))}
          </ol>
        </div>
        <div className="mcol">
          <span className="kd">{byHolders.length > 0 ? "most new holders, 7d" : "new this week"}</span>
          {byHolders.length > 0 ? (
            <ol className="mlist">
              {byHolders.map((d, i) => (
                <li key={d.slug}>
                  <Link to="/n/$slug" params={{ slug: d.slug }}>
                    <span className="mrank">{i + 1}</span>
                    <b>{d.symbol ?? d.name}</b>
                    <span className="mv pos" title={KPI_SOURCE.holdersDelta7d}>{formatKpi("holdersDelta7d", d.kpis.holdersDelta7d)}</span>
                  </Link>
                </li>
              ))}
            </ol>
          ) : fresh.length > 0 ? (
            <ol className="mlist">
              {fresh.map((d) => (
                <li key={d.slug}>
                  <Link to="/n/$slug" params={{ slug: d.slug }}>
                    <Badge tone={statusTone(d.kpis.status)}>{STATUS_LABEL[d.kpis.status]}</Badge>
                    <b>{d.symbol ?? d.name}</b>
                    <span className="mv">first pool {relativeTime(d.kpis.firstPairAt!, now)}</span>
                  </Link>
                </li>
              ))}
            </ol>
          ) : (
            <p className="honest">Holder-change rankings appear after a week of snapshots.</p>
          )}
        </div>
      </div>
    </section>
  );
}
