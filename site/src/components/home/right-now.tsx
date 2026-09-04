import { Link } from "@tanstack/react-router";
import { Icon } from "@/components/ui/icon";
import { SourceRefs } from "@/components/ui/source-refs";
import { StatusPill } from "@/components/ui/status-pill";
import {
  formatCount,
  formatKpi,
  formatUsd,
  readFigure,
  relativeTime,
  tldrLine,
  type DirectoryEntry,
  type TrendingEntry,
} from "@/data/types";
import { sourcedLine } from "@/lib/dejargon";

function Card({ title, subtitle, icon, badge, children }: {
  title: string;
  subtitle: string;
  icon: "trend" | "rocket" | "bell";
  badge?: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <section className="rounded-xl border-[0.5px] border-[var(--line)] bg-[var(--s2)] p-3.5">
      <h3 className="m-0 flex items-center gap-1.5 text-[13px] font-semibold">
        <Icon name={icon} />{title}{badge ? <span className="ml-auto">{badge}</span> : null}
      </h3>
      <p className="mb-1.5 mt-0 text-[11.5px] text-[var(--t3)]">{subtitle}</p>
      {children}
    </section>
  );
}

function NameLink({ entry, children }: { entry: DirectoryEntry; children?: React.ReactNode }) {
  return (
    <Link to="/n/$slug" params={{ slug: entry.slug }} className="font-medium text-[var(--t1)]">
      {children ?? entry.symbol ?? entry.name}
    </Link>
  );
}

function MarketFigure({ entry }: { entry: DirectoryEntry }) {
  const marketCap = readFigure(entry.kpis.marketCap);
  const value = marketCap ?? readFigure(entry.kpis.fdv);
  if (value === null) return <span className="italic text-[var(--t3)]">not checked</span>;
  return (
    <a href={entry.sourceLinks.market} target="_blank" rel="noreferrer" title="DexScreener market data">
      {marketCap === null ? "FDV " : ""}{formatUsd(value)}
    </a>
  );
}

// The TL;DR a row prints, with its source ids as footnotes rather than as visible "[claim S7]".
function Tldr({ entry, fallback }: { entry: DirectoryEntry; fallback?: string }) {
  const line = tldrLine(entry);
  if (!line) return <span className="italic text-[var(--t3)]">{fallback ?? "no summary yet"}</span>;
  const sourced = sourcedLine(line);
  return <>{sourced.text} <SourceRefs ids={sourced.sources} slug={entry.slug} /></>;
}

export function RightNow({ trending, launches, announced, notListed, now }: {
  trending: TrendingEntry[];
  launches: DirectoryEntry[];
  announced: DirectoryEntry[];
  notListed: number;
  now: number;
}) {
  // The loader measures the age at request time; `now` here is the build clock and would report how
  // long ago the site was built rather than how fresh the reading is.
  const pulseAgeMinutes = [...trending, ...launches.map((entry) => ({ entry, change24h: null }))]
    .find(({ entry }) => entry.pulse)?.entry.pulse?.ageMinutes ?? null;
  return (
    <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
      <Card
        title="Trending"
        subtitle="most 24h volume, live names"
        icon="trend"
        badge={pulseAgeMinutes === null ? null : (
          <span className="rounded-full bg-[var(--good-bg)] px-1.5 py-0.5 text-[9.5px] font-medium text-[var(--good)]">
            live · {pulseAgeMinutes < 1 ? "<1 min" : `${pulseAgeMinutes} min`} ago
          </span>
        )}
      >
        <ol className="m-0 list-none p-0">
          {trending.map(({ entry, change24h }, index) => (
            <li key={entry.slug} className="border-t-[0.5px] border-[var(--line-soft)] py-2 first:border-0">
              <div className="flex min-w-0 items-baseline gap-2 text-[12.5px]">
                <span className="w-3 shrink-0 text-[11px] text-[var(--t3)]">{index + 1}</span>
                <NameLink entry={entry} />
                <span className="ml-auto whitespace-nowrap text-[11px]"><MarketFigure entry={entry} /></span>
              </div>
              <p className="my-0.5 truncate pl-5 text-[11px] text-[var(--t3)]">
                <Tldr entry={entry} />
              </p>
              <div className="flex flex-wrap gap-x-2 pl-5 text-[10.5px] text-[var(--t2)]">
                <a href={entry.sourceLinks.market} target="_blank" rel="noreferrer">
                  vol {formatUsd(entry.kpis.volume24h!)}
                </a>
                {entry.pulse?.h1VolumeUsd === null || !entry.pulse?.links ? null : (
                  <a href={entry.pulse.links.dexscreener} target="_blank" rel="noreferrer" className="text-[var(--good)]">
                    h1 {formatUsd(entry.pulse.h1VolumeUsd)}
                  </a>
                )}
                {change24h === null ? null : (
                  <a href={entry.sourceLinks.market} target="_blank" rel="noreferrer" className={change24h >= 0 ? "text-[var(--good)]" : "text-[var(--bad)]"}>
                    {formatKpi("priceChange24h", change24h)}
                  </a>
                )}
                {entry.kpis.holders === null || !entry.sourceLinks.holders ? (
                  <span className="italic text-[var(--t3)]">holders not checked</span>
                ) : (
                  <a href={entry.sourceLinks.holders} target="_blank" rel="noreferrer">
                    {formatCount(entry.kpis.holders)} holders
                  </a>
                )}
              </div>
            </li>
          ))}
          {trending.length === 0 ? <li className="py-2 text-xs italic text-[var(--t3)]">No live names clear the bar yet.</li> : null}
        </ol>
      </Card>

      <Card title="New launches" subtitle="first pool under 14 days old, above the bar" icon="rocket">
        <ol className="m-0 list-none p-0">
          {launches.slice(0, 5).map((entry) => (
            <li key={entry.slug} className="border-t-[0.5px] border-[var(--line-soft)] py-2 first:border-0">
              <div className="flex min-w-0 items-center gap-1.5 text-[12.5px]">
                <StatusPill status={entry.kpis.status} />
                <NameLink entry={entry} />
                <span className="ml-auto whitespace-nowrap text-[11px]"><MarketFigure entry={entry} /></span>
              </div>
              <p className={`my-0.5 truncate text-[11px] ${tldrLine(entry) ? "text-[var(--t2)]" : "italic text-[var(--t3)]"}`}>
                <Tldr entry={entry} />
              </p>
              <a href={entry.sourceLinks.market} target="_blank" rel="noreferrer" className="text-[10.5px] text-[var(--t3)]">
                {relativeTime(entry.kpis.firstPairAt!, now)}
              </a>
            </li>
          ))}
          {launches.length === 0 ? <li className="py-2 text-xs italic text-[var(--t3)]">No new launch clears the bar yet.</li> : null}
          <li className="border-t-[0.5px] border-[var(--line-soft)] py-1.5 text-[11px] italic text-[var(--t3)]">
            Launches below $25K are not listed: {notListed.toLocaleString("en-US")} today
          </li>
        </ol>
      </Card>

      <Card title="Announced" subtitle="official surface confirmed, nothing on chain yet" icon="bell">
        <ol className="m-0 list-none p-0">
          {announced.slice(0, 5).map((entry) => (
            <li key={entry.slug} className={`border-t-[0.5px] border-[var(--line-soft)] py-2 first:border-0 ${tldrLine(entry) ? "" : "text-[var(--t3)]"}`}>
              <div className="flex items-baseline gap-2 text-[12.5px]">
                <NameLink entry={entry}>{entry.name}</NameLink>
                <span className="ml-auto whitespace-nowrap text-[10.5px]">{relativeTime(entry.announcementAt, now)}</span>
              </div>
              <p className={`my-0.5 text-[11px] ${tldrLine(entry) ? "text-[var(--t2)]" : "italic text-[var(--t3)]"}`}>
                <Tldr entry={entry} />
              </p>
              {entry.announcementUrl ? (
                <a href={entry.announcementUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-[10.5px] text-[var(--acc)]">
                  Source <Icon name="ext" />
                </a>
              ) : null}
            </li>
          ))}
          {announced.length === 0 ? <li className="py-2 text-xs italic text-[var(--t3)]">No confirmed announcements yet.</li> : null}
        </ol>
      </Card>
    </div>
  );
}
