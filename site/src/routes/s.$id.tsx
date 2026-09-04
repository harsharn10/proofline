import { Link, createFileRoute, useNavigate } from "@tanstack/react-router";
import { DataTable } from "@/components/ui/data-table";
import { StatusPill } from "@/components/ui/status-pill";
import { getContent } from "@/data/content-server";
import {
  KPI_LABEL,
  KPI_SOURCE,
  SECTION_KPIS,
  formatCount,
  formatKpi,
  formatUsd,
  relativeTime,
  type DirectoryEntry,
  type KpiKey,
} from "@/data/types";
import { readerCopy } from "@/lib/dejargon";

type Filter = "all" | "live" | "announced" | "watchlist";
const FILTERS: Array<{ value: Filter; label: string }> = [
  { value: "all", label: "All" },
  { value: "live", label: "Live" },
  { value: "announced", label: "Announced" },
  { value: "watchlist", label: "Watchlist" },
];
const STATUS_ORDER = { live: 0, quiet: 1, dormant: 2, announced: 3, testnet: 4 } as const;
// Taxonomy sections only map where Rialto publishes a directly comparable TVL category. Sections
// without one stay silent rather than borrowing a nearby total (for example, launchpads != all DEXs).
const RIALTO_TVL_CATEGORY: Partial<Record<string, string>> = {
  trading: "DEX",
  credit: "Lending",
  yield: "Yield",
  "rwa-products": "RWA Credit",
  markets: "Derivatives",
};

export const Route = createFileRoute("/s/$id")({
  validateSearch: (search: Record<string, unknown>): { f?: Filter } =>
    FILTERS.some(({ value }) => value === search.f) ? { f: search.f as Filter } : {},
  loader: () => getContent(),
  head: ({ params, loaderData }) => {
    const section = loaderData?.sections.find((item) => item.id === params.id);
    return section
      ? {
          meta: [
            { title: `${section.label} · Icarus` },
            { name: "description", content: section.description },
          ],
        }
      : { meta: [] };
  },
  component: CategoryPage,
});

function rankRows(entries: DirectoryEntry[], key: KpiKey): DirectoryEntry[] {
  return [...entries].sort((a, b) => {
    const status = STATUS_ORDER[a.kpis.status] - STATUS_ORDER[b.kpis.status];
    if (status !== 0) return status;
    const av = a.kpis[key];
    const bv = b.kpis[key];
    if (av !== null && bv !== null && av !== bv) return bv - av;
    if ((av === null) !== (bv === null)) return av === null ? 1 : -1;
    return a.name.localeCompare(b.name);
  });
}

function rowMatches(entry: DirectoryEntry, filter: Filter): boolean {
  if (filter === "all") return true;
  if (filter === "watchlist") return entry.role === "observe";
  return entry.kpis.status === filter;
}

function CategoryPage() {
  const { id } = Route.useParams();
  const { f: searchFilter } = Route.useSearch();
  const f = searchFilter ?? "all";
  const navigate = useNavigate({ from: Route.fullPath }) as any;
  const { sections, entries, dependencies, chainStats, now } = Route.useLoaderData() as Awaited<
    ReturnType<typeof getContent>
  >;
  const section = sections.find((item) => item.id === id);

  if (!section) {
    return (
      <main className="wrap py-10">
        <Link to="/" className="text-[var(--acc)]">
          ← Registry
        </Link>
        <h1 className="mt-4 text-2xl font-semibold">Category not found</h1>
      </main>
    );
  }

  const sectionEntries = entries.filter((entry) => entry.tree?.sectionId === section.id);
  const keys = SECTION_KPIS[section.id] ?? ["volume24h", "liquidityUsd", "holders", "trades24h"];
  const rows = rankRows(sectionEntries, keys[0]!).filter((entry) => rowMatches(entry, f));
  const live = sectionEntries.filter((entry) => entry.kpis.status === "live").length;
  const dormant = sectionEntries.filter((entry) => entry.kpis.status === "dormant").length;
  const launches = sectionEntries.reduce((sum, entry) => sum + entry.factoryLaunches24h, 0);
  const volume = sectionEntries.reduce((sum, entry) => sum + (entry.kpis.volume24h ?? 0), 0);
  const rialtoCategory = RIALTO_TVL_CATEGORY[section.id];
  const categoryTvl = rialtoCategory
    ? chainStats?.tvlByCategory.find((row) => row.category === rialtoCategory) ?? null
    : null;
  const dependencyById = new Map(dependencies.map((dependency) => [dependency.id, dependency]));
  const rails = [
    ...sectionEntries
      .flatMap((entry) => entry.dependencyIds)
      .reduce((counts, dependency) => {
        counts.set(dependency, (counts.get(dependency) ?? 0) + 1);
        return counts;
      }, new Map<string, number>()),
  ]
    .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
    .slice(0, 4)
    .map(([dependency]) => dependencyById.get(dependency)?.name ?? dependency);

  const counts: Record<Filter, number> = {
    all: sectionEntries.length,
    live,
    announced: sectionEntries.filter((entry) => entry.kpis.status === "announced").length,
    watchlist: sectionEntries.filter((entry) => entry.role === "observe").length,
  };

  return (
    <main className="wrap pb-10 pt-5">
      <Link to="/" className="text-xs text-[var(--t2)]">
        ← Registry
      </Link>
      <section className="mt-2 grid grid-cols-1 items-start gap-6 md:grid-cols-[minmax(0,1fr)_300px]">
        <div>
          <p className="eyebrow !m-0">Category</p>
          <h1 className="mb-2 mt-1.5 text-[28px] font-bold leading-[1.15] tracking-[-0.02em]">
            {section.label}{" "}
            <span className="text-lg font-normal text-[var(--t3)]">{sectionEntries.length}</span>
          </h1>
          <p className="m-0 max-w-[68ch] text-sm text-[var(--t2)]">{section.description}</p>
        </div>
        <aside className="rounded-xl border-[0.5px] border-[var(--line)] bg-[var(--s2)] px-3.5 py-3 text-xs text-[var(--t2)]">
          <div className="grid grid-cols-2 gap-x-3.5 gap-y-2">
            <a href={`/s/${id}?f=live`}>
              <b className="block text-base font-semibold text-[var(--t1)]">{live}</b>live
            </a>
            <a href={`/s/${id}`}>
              <b className="block text-base font-semibold text-[var(--t1)]">{dormant}</b>dormant
            </a>
            <a href="#ranking">
              <b className="block text-base font-semibold text-[var(--t1)]">
                {formatCount(launches)}
              </b>
              launches today
            </a>
            <a href="#ranking">
              <b className="block text-base font-semibold text-[var(--t1)]">{formatUsd(volume)}</b>
              volume 24h
            </a>
          </div>
          {/* Every figure above is this section's own. This one is the whole chain's category TVL,
              most of it protocols the census does not carry, so it sits on its own line and says so
              in its label rather than passing as a section total. */}
          {categoryTvl && chainStats ? (
            <a
              href={chainStats.tvlSourceUrl}
              className="mt-2.5 block border-t-[0.5px] border-[var(--line)] pt-2.5 hover:text-[var(--acc)]"
            >
              <b className="block text-base font-semibold text-[var(--t1)]">{formatUsd(categoryTvl.tvlUsd)}</b>
              chain {rialtoCategory} TVL · Rialto Analytics
            </a>
          ) : null}
          <div className="mt-2 text-[11px] text-[var(--t3)]">
            Rails these run on: {rails.length ? rails.join(" · ") : "not checked"}
          </div>
        </aside>
      </section>

      <div className="mt-3.5 flex flex-wrap gap-1.5" role="group" aria-label="Category filter">
        {FILTERS.map((filter) => (
          <button
            key={filter.value}
            type="button"
            className={`rounded-full border-[0.5px] bg-[var(--s2)] px-3 py-1 text-xs ${f === filter.value ? "border-[var(--t2)] text-[var(--t1)]" : "border-[var(--line)] text-[var(--t2)]"}`}
            aria-pressed={f === filter.value}
            onClick={() => navigate({ search: { f: filter.value }, replace: true })}
          >
            {filter.label} <small className="ml-0.5 text-[var(--t3)]">{counts[filter.value]}</small>
          </button>
        ))}
      </div>

      <section id="ranking" className="mt-[26px]">
        <div className="mb-2 flex flex-wrap items-baseline justify-between gap-3 px-0.5">
          <h2 className="m-0 text-sm font-semibold">Ranked by {KPI_LABEL[keys[0]!]}</h2>
          <span className="text-[11px] text-[var(--t3)]">open any figure for its source</span>
        </div>
        <DataTable>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th className="!text-left">Status</th>
                {keys.map((key) => (
                  <th key={key} title={KPI_SOURCE[key]}>
                    {KPI_LABEL[key]}
                  </th>
                ))}
                <th>Control</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((entry) => {
                const relative = entry.kpis.lastActivityAt
                  ? relativeTime(entry.kpis.lastActivityAt, now)
                  : null;
                return (
                  <tr
                    key={entry.slug}
                    className={
                      entry.kpis.status === "dormant" || entry.kpis.status === "announced"
                        ? "text-[var(--t3)]"
                        : undefined
                    }
                  >
                    <td>
                      <Link to="/n/$slug" params={{ slug: entry.slug }} className="block">
                        <b className="font-medium text-[var(--t1)]">{entry.name}</b>
                        <span className="block text-[11px] text-[var(--t3)]">
                          {entry.tree?.label ?? readerCopy(entry.summary)}
                        </span>
                      </Link>
                    </td>
                    <td className="!text-left">
                      <Link to="/n/$slug" params={{ slug: entry.slug }}>
                        <StatusPill status={entry.kpis.status} relativeTime={relative} />
                      </Link>
                    </td>
                    {keys.map((key) => (
                      <td key={key} title={KPI_SOURCE[key]}>
                        <Link to="/n/$slug" params={{ slug: entry.slug }}>
                          {formatKpi(key, entry.kpis[key])}
                        </Link>
                      </td>
                    ))}
                    <td>
                      <Link to="/n/$slug" params={{ slug: entry.slug }}>
                        {entry.derived.score !== null ? (
                          `${entry.derived.score}/100`
                        ) : entry.role === "observe" ? (
                          <span className="text-[var(--t3)]">watchlist</span>
                        ) : (
                          "—"
                        )}
                      </Link>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </DataTable>
        {rows.length === 0 ? (
          <p className="mt-3 text-xs italic text-[var(--t3)]">Nothing under this filter yet.</p>
        ) : null}
        <p className="mt-1.5 flex flex-wrap gap-3 text-[11px] text-[var(--t3)]">
          <span>Dash = not read, never zero</span>
          <span>Announced = nothing located on chain yet</span>
        </p>
      </section>
    </main>
  );
}
