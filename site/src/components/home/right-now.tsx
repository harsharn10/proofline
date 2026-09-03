import { Link } from "@tanstack/react-router";
import { Icon } from "@/components/ui/icon";
import { StatusPill } from "@/components/ui/status-pill";
import {
  formatKpi,
  formatUsd,
  relativeTime,
  type DirectoryEntry,
  type TrendingEntry,
} from "@/data/types";
import { readerCopy } from "@/lib/dejargon";

function Card({
  title,
  subtitle,
  icon,
  children,
}: {
  title: string;
  subtitle: string;
  icon: "trend" | "rocket" | "bell";
  children: React.ReactNode;
}) {
  return (
    <section className="rounded-xl border-[0.5px] border-[var(--line)] bg-[var(--s2)] p-3.5">
      <h3 className="m-0 flex items-center gap-1.5 text-[13px] font-semibold">
        <Icon name={icon} />
        {title}
      </h3>
      <p className="mb-1.5 mt-0 text-[11.5px] text-[var(--t3)]">{subtitle}</p>
      {children}
    </section>
  );
}

function Row({
  entry,
  children,
  rank,
}: {
  entry: DirectoryEntry;
  children: React.ReactNode;
  rank?: number;
}) {
  return (
    <li className="border-t-[0.5px] border-[var(--line-soft)] first:border-0">
      <Link
        to="/n/$slug"
        params={{ slug: entry.slug }}
        className="flex min-w-0 items-baseline gap-2 py-1.5 text-[12.5px]"
      >
        {rank ? <span className="w-3 shrink-0 text-[11px] text-[var(--t3)]">{rank}</span> : null}
        {children}
      </Link>
    </li>
  );
}

export function RightNow({
  trending,
  launches,
  announced,
  notListed,
  now,
}: {
  trending: TrendingEntry[];
  launches: DirectoryEntry[];
  announced: DirectoryEntry[];
  notListed: number;
  now: number;
}) {
  return (
    <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
      <Card title="Trending" subtitle="most 24h volume, live names" icon="trend">
        <ol className="m-0 list-none p-0">
          {trending.map(({ entry, change24h }, index) => (
            <Row key={entry.slug} entry={entry} rank={index + 1}>
              <b className="font-medium">{entry.symbol ?? entry.name}</b>
              <span className="min-w-0 overflow-hidden text-ellipsis whitespace-nowrap text-[11px] text-[var(--t3)]">
                {entry.tree?.label}
              </span>
              <span
                className="ml-auto whitespace-nowrap font-medium"
                title="DexScreener, all pools"
              >
                {formatUsd(entry.kpis.volume24h!)}
              </span>
              {change24h === null ? null : (
                <span
                  className={`w-[52px] shrink-0 text-right text-[11px] ${change24h >= 0 ? "text-[var(--good)]" : "text-[var(--bad)]"}`}
                >
                  {formatKpi("priceChange24h", change24h)}
                </span>
              )}
            </Row>
          ))}
          {trending.length === 0 ? (
            <li className="py-2 text-xs italic text-[var(--t3)]">
              No live names clear the bar yet.
            </li>
          ) : null}
        </ol>
      </Card>

      <Card
        title="New launches"
        subtitle="first pool under 14 days old, above the bar"
        icon="rocket"
      >
        <ol className="m-0 list-none p-0">
          {launches.slice(0, 5).map((entry) => (
            <Row key={entry.slug} entry={entry}>
              <StatusPill status={entry.kpis.status} />
              <b className="font-medium">{entry.symbol ?? entry.name}</b>
              <span className="min-w-0 overflow-hidden text-ellipsis whitespace-nowrap text-[11px] text-[var(--t3)]">
                {readerCopy(entry.summary)}
              </span>
              <span className="ml-auto whitespace-nowrap font-medium">
                {relativeTime(entry.kpis.firstPairAt!, now)}
              </span>
            </Row>
          ))}
          {launches.length === 0 ? (
            <li className="py-2 text-xs italic text-[var(--t3)]">
              No new launch clears the bar yet.
            </li>
          ) : null}
          <li className="border-t-[0.5px] border-[var(--line-soft)] py-1.5 text-[11px] italic text-[var(--t3)]">
            Launches below $25K are not listed: {notListed.toLocaleString("en-US")} today
          </li>
        </ol>
      </Card>

      <Card
        title="Announced"
        subtitle="official surface confirmed, nothing on chain yet"
        icon="bell"
      >
        <ol className="m-0 list-none p-0">
          {announced.slice(0, 5).map((entry) => (
            <Row key={entry.slug} entry={entry}>
              <b className="font-medium">{entry.name}</b>
              <span className="min-w-0 overflow-hidden text-ellipsis whitespace-nowrap text-[11px] text-[var(--t3)]">
                {readerCopy(entry.summary)}
              </span>
              <span className="ml-auto whitespace-nowrap font-medium">
                {relativeTime(entry.reviewedAt, now)}
              </span>
            </Row>
          ))}
          {announced.length === 0 ? (
            <li className="py-2 text-xs italic text-[var(--t3)]">
              No confirmed announcements yet.
            </li>
          ) : null}
        </ol>
      </Card>
    </div>
  );
}
