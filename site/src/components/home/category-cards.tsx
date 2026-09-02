import { Link } from "@tanstack/react-router";
import { Icon, type IconName } from "@/components/ui/icon";
import {
  KPI_LABEL,
  SECTION_KPIS,
  formatKpi,
  type DirectoryEntry,
  type SectionDef,
  type SectionLeader,
} from "@/data/types";

const ICONS: Record<string, IconName> = {
  launchpads: "rocket",
  tokens: "tag",
  trading: "trend",
  credit: "key",
  yield: "drop",
  "rwa-products": "cat",
  agents: "users",
  "nft-treasuries": "shield",
  markets: "bell",
  tooling: "feather",
};

export function CategoryCards({
  sections,
  entries,
  leaders,
}: {
  sections: SectionDef[];
  entries: DirectoryEntry[];
  leaders: Record<string, SectionLeader[]>;
}) {
  return (
    <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
      {sections.map((section) => {
        const sectionEntries = entries.filter((entry) => entry.tree?.sectionId === section.id);
        const key = (SECTION_KPIS[section.id] ?? ["volume24h"])[0]!;
        return (
          <section
            key={section.id}
            className="rounded-xl border-[0.5px] border-[var(--line)] bg-[var(--s2)] p-3.5"
          >
            <h3 className="m-0 flex items-center gap-1.5 text-[13px] font-semibold">
              <Icon name={ICONS[section.id] ?? "cat"} />
              <a href={`/s/${section.id}`}>{section.label}</a>
              <span className="font-normal text-[var(--t3)]">{sectionEntries.length}</span>
            </h3>
            <p className="mb-1.5 mt-0 text-[11.5px] text-[var(--t3)]">by {KPI_LABEL[key]}</p>
            <ol className="m-0 list-none p-0">
              {(leaders[section.id] ?? []).map(({ entry, announced }, index) => (
                <li
                  key={entry.slug}
                  className="border-t-[0.5px] border-[var(--line-soft)] first:border-0"
                >
                  <Link
                    to="/n/$slug"
                    params={{ slug: entry.slug }}
                    className={`flex items-baseline gap-2 py-1.5 text-[12.5px] ${announced ? "text-[var(--t3)]" : ""}`}
                  >
                    <span className="w-3 text-[11px] text-[var(--t3)]">{index + 1}</span>
                    <b className="font-medium">{entry.symbol ?? entry.name}</b>
                    <span
                      className="ml-auto whitespace-nowrap font-medium"
                      title={announced ? undefined : `Source on ${entry.name} profile`}
                    >
                      {announced ? "announced" : formatKpi(key, entry.kpis[key])}
                    </span>
                  </Link>
                </li>
              ))}
              {(leaders[section.id] ?? []).length === 0 ? (
                <li className="py-2 text-xs italic text-[var(--t3)]">No confirmed names yet.</li>
              ) : null}
            </ol>
            <a href={`/s/${section.id}`} className="mt-1.5 block text-[11.5px] text-[var(--acc)]">
              All {sectionEntries.length} →
            </a>
          </section>
        );
      })}
    </div>
  );
}
