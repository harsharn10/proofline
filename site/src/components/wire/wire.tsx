import { useMemo, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Icon } from "@/components/ui/icon";
import { WIRE_KINDS, WIRE_LABEL, relativeTime, type WireItem, type WireKind } from "@/data/types";
import { hostLabel } from "@/lib/dejargon";

export type WireFilter = "all" | WireKind;

const FILTERS: Array<{ value: WireFilter; label: string }> = [
  { value: "all", label: "All" },
  ...WIRE_KINDS.map((kind) => ({ value: kind as WireFilter, label: WIRE_LABEL[kind] })),
];

/**
 * The wire list. Filter state is owned by the caller wherever it belongs in the URL: `/feed` passes
 * `kind`/`name` from its own search params and navigates on change, so a deep link server-renders
 * already filtered. Everywhere else (home's compact strip, a card's Commentary) the chips are a local
 * convenience and the component keeps the state itself.
 */
export function Wire({
  items,
  now,
  variant = "full",
  allowNameFilter = false,
  telegramUrl,
  kind: kindProp,
  name: nameProp,
  onFilter,
}: {
  items: WireItem[];
  now: number;
  variant?: "compact" | "full";
  allowNameFilter?: boolean;
  telegramUrl?: string;
  kind?: WireFilter;
  name?: string;
  onFilter?: (next: { kind: WireFilter; name: string }) => void;
}) {
  const [localKind, setLocalKind] = useState<WireFilter>("all");
  const [localName, setLocalName] = useState("");
  const controlled = typeof onFilter === "function";
  const kind = controlled ? (kindProp ?? "all") : localKind;
  const name = controlled ? (nameProp ?? "") : localName;

  const choose = (nextKind: WireFilter, nextName: string) => {
    if (onFilter) onFilter({ kind: nextKind, name: allowNameFilter ? nextName : "" });
    else {
      setLocalKind(nextKind);
      setLocalName(allowNameFilter ? nextName : "");
    }
  };

  const names = useMemo(
    () => [...new Map(items.map((item) => [item.name.slug, item.name])).values()]
      .sort((a, b) => a.name.localeCompare(b.name)),
    [items],
  );
  const inName = name ? items.filter((item) => item.slug === name) : items;
  const filtered = inName.filter((item) => kind === "all" || item.kind === kind);
  // The compact strip shows six rows, so it never advertises a corpus-wide count above them.
  const visible = variant === "compact" ? filtered.slice(0, 6) : filtered;
  const showCounts = variant !== "compact";

  return (
    <div className="rounded-xl border-[0.5px] border-[var(--line)] bg-[var(--s2)] px-3.5 py-3">
      <div className="flex flex-wrap items-center gap-1.5" role="group" aria-label="Wire kind">
        {FILTERS.map((filter) => (
          <button
            key={filter.value}
            type="button"
            onClick={() => choose(filter.value, name)}
            aria-pressed={kind === filter.value}
            className={`rounded-full border-[0.5px] px-2.5 py-1 text-[11px] ${kind === filter.value ? "border-[var(--t2)] bg-[var(--s1)] text-[var(--t1)]" : "border-[var(--line)] text-[var(--t2)]"}`}
          >
            {filter.label}
            {showCounts
              ? ` · ${inName.filter((item) => filter.value === "all" || item.kind === filter.value).length}`
              : ""}
          </button>
        ))}
        {allowNameFilter ? (
          <label className="ml-auto flex items-center gap-1.5 text-[11px] text-[var(--t3)]">
            Name
            <select
              value={name}
              onChange={(event) => choose(kind, event.target.value)}
              className="rounded-full border-[0.5px] border-[var(--line)] bg-[var(--s1)] px-2.5 py-1 text-[var(--t1)]"
            >
              <option value="">All names</option>
              {names.map((entry) => <option key={entry.slug} value={entry.slug}>{entry.name}</option>)}
            </select>
          </label>
        ) : null}
      </div>

      <ol className="m-0 mt-2 list-none p-0">
        {visible.map((item) => {
          const external = !item.url.startsWith("/");
          return (
            <li key={item.id} className="grid grid-cols-1 gap-1 border-t-[0.5px] border-[var(--line-soft)] py-3 first:border-0 sm:grid-cols-[92px_minmax(0,1fr)] sm:gap-3">
              <div className="flex items-start gap-1.5 sm:block">
                <span className="inline-block rounded-full bg-[var(--s1)] px-2 py-0.5 text-[10.5px] text-[var(--t2)]">
                  {WIRE_LABEL[item.kind]}
                </span>
                <time className="mt-1 block text-[10.5px] text-[var(--t3)]">{relativeTime(item.at, now)}</time>
              </div>
              <div className="min-w-0 [overflow-wrap:anywhere]">
                <div className="flex flex-wrap items-baseline gap-1.5">
                  <b className="text-[12.5px] font-medium">{item.headline}</b>
                  {item.account ? <span className="text-[11px] text-[var(--t3)]">{item.account}</span> : null}
                </div>
                <p className="my-0.5 max-w-[84ch] text-[12px] text-[var(--t2)]">{item.gist}</p>
                <div className="flex flex-wrap gap-1.5 text-[11px]">
                  {allowNameFilter ? (
                    <button type="button" onClick={() => choose(kind, item.slug)} className="rounded-full bg-[var(--s1)] px-2 py-0.5 text-[var(--acc)]">
                      {item.name.symbol ?? item.name.name}
                    </button>
                  ) : (
                    <Link to="/n/$slug" params={{ slug: item.slug }} className="rounded-full bg-[var(--s1)] px-2 py-0.5 text-[var(--acc)]">
                      {item.name.symbol ?? item.name.name}
                    </Link>
                  )}
                  <a href={item.url} target={external ? "_blank" : undefined} rel={external ? "noreferrer" : undefined} className="inline-flex items-center gap-1 rounded-full bg-[var(--s1)] px-2 py-0.5 text-[var(--acc)]">
                    {external ? hostLabel(item.url) : "Icarus note"} <Icon name={external ? "ext" : "feather"} />
                  </a>
                </div>
              </div>
            </li>
          );
        })}
      </ol>
      {visible.length === 0 ? <p className="mb-0 mt-3 text-xs italic text-[var(--t3)]">No wire items match these filters yet.</p> : null}
      {variant === "compact" ? (
        <div className="flex flex-wrap gap-3 border-t-[0.5px] border-[var(--line-soft)] pt-2 text-[11.5px] text-[var(--acc)]">
          <Link to="/feed">Full wire →</Link>
          {telegramUrl && telegramUrl !== "TODO" ? <a href={telegramUrl} target="_blank" rel="noreferrer">Get it on Telegram →</a> : null}
        </div>
      ) : null}
    </div>
  );
}
