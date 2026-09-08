import { Link } from "@tanstack/react-router";
import { Icon } from "@/components/ui/icon";
import { formatUsd, type DirectoryTrenchFill } from "@/data/types";

function ageLabel(minutes: number): string {
  if (minutes < 1) return "now";
  if (minutes < 60) return `${minutes}m`;
  return `${Math.floor(minutes / 60)}h`;
}

function TokenLink({ fill }: { fill: DirectoryTrenchFill }) {
  return <Link to="/n/$slug" params={{ slug: fill.slug }} className="font-semibold text-[var(--t1)]">{fill.symbol}</Link>;
}

export function TrenchesStream({ fills }: { fills: DirectoryTrenchFill[] }) {
  return (
    <div className="rounded-xl border-[0.5px] border-[var(--line)] bg-[var(--s2)] px-3.5 py-1.5">
      <ol className="m-0 grid list-none grid-cols-1 p-0 lg:grid-cols-2 lg:gap-x-5">
        {fills.slice(0, 8).map((fill) => (
          <li key={fill.id} className="flex min-w-0 items-center gap-2 border-t-[0.5px] border-[var(--line-soft)] py-2.5 first:border-0 lg:[&:nth-child(2)]:border-0">
            <span className={`w-8 shrink-0 rounded px-1 py-0.5 text-center text-[9.5px] font-semibold uppercase ${fill.side === "buy" ? "bg-[var(--good-bg)] text-[var(--good)]" : "bg-[var(--bad-bg)] text-[var(--bad)]"}`}>
              {fill.side}
            </span>
            <div className="min-w-0 flex-1">
              <div className="flex min-w-0 items-baseline gap-1.5 text-[12.5px]">
                <TokenLink fill={fill} />
                {fill.stock ? <span className="rounded-full bg-[var(--s1)] px-1.5 text-[9px] text-[var(--t3)]">stock</span> : null}
                {fill.firstBuy ? <span className="rounded-full bg-[var(--s1)] px-1.5 text-[9px] text-[var(--t3)]">new position</span> : null}
                <b className="ml-auto whitespace-nowrap font-medium">{formatUsd(fill.usd)}</b>
              </div>
              <div className="mt-0.5 flex min-w-0 items-center gap-1.5 text-[10.5px] text-[var(--t3)]">
                <span className="truncate">@{fill.trader}</span>
                <span>·</span>
                <time className="shrink-0">{ageLabel(fill.ageMinutes)}</time>
                {fill.links.transaction ? (
                  <a href={fill.links.transaction} target="_blank" rel="noreferrer" aria-label={`${fill.symbol} transaction`} className="ml-auto inline-flex shrink-0 text-[var(--acc)]">
                    tx <Icon name="ext" />
                  </a>
                ) : null}
              </div>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
