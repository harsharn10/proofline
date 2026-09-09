import { createFileRoute } from "@tanstack/react-router";
import { CategoryCards } from "@/components/home/category-cards";
import { RightNow } from "@/components/home/right-now";
import { StatBox } from "@/components/home/stat-box";
import { Wire } from "@/components/wire/wire";
import {
  announcedNow,
  getHomeContent,
  newLaunches,
  notListedCount,
  sectionLeaders,
  trendingNow,
} from "@/data/content-server";
import { formatCount, formatUsd } from "@/data/types";

export const Route = createFileRoute("/")({
  loader: () => getHomeContent(),
  component: Home,
});

function chainReadLabel(iso: string | undefined): string {
  if (!iso) return "not checked";
  return new Intl.DateTimeFormat("en-GB", {
    day: "numeric",
    month: "short",
    hour: "2-digit",
    minute: "2-digit",
    timeZone: "UTC",
    timeZoneName: "short",
  }).format(new Date(iso));
}

function Home() {
  const { site, sections, entries, histories, wire, now, launches: launchSummary, volume24h, volumePartial } = Route.useLoaderData();
  const live = entries.filter((entry) => entry.kpis.status === "live").length;
  const launchesToday = launchSummary.value;
  const readAt = entries
    .map((entry) => entry.kpis.readAt)
    .filter((value): value is string => Boolean(value))
    .sort()
    .at(-1);
  const trending = trendingNow(entries, histories);
  const launches = newLaunches(entries, now);
  const announced = announcedNow(entries);
  const leaders = Object.fromEntries(
    sections.map((section) => [section.id, sectionLeaders(section, entries)]),
  );
  return (
    <main className="wrap pb-10 pt-5">
      <section className="grid grid-cols-1 items-end gap-6 md:grid-cols-[minmax(0,1fr)_300px]">
        <div>
          <p className="eyebrow !m-0">Robinhood Chain · {site.chain.id}</p>
          <h1 className="mb-2 mt-2.5 text-[28px] font-bold leading-[1.15] tracking-[-0.02em]">
            Icarus: building the <span className="text-[var(--good)]">Robinhood Registry</span>
          </h1>
          <p className="m-0 max-w-[60ch] text-sm text-[var(--t2)]">
            Icarus researches and tracks what is new on Robinhood Chain and keeps you current here
            and on Telegram. Touch grass when it&apos;s quiet. Catch up fast when it&apos;s busy.
          </p>
        </div>
        <StatBox
          stats={[
            { label: "names on file", value: formatCount(entries.length), href: "#categories" },
            { label: "live on chain", value: formatCount(live), href: "#right-now" },
            { label: "tracked launch calls 24h", value: launchesToday === null ? "—" : `${formatCount(launchesToday)}${launchSummary.partial ? " (partial)" : ""}`, href: "#right-now" },
            { label: "tracked volume 24h", value: volume24h === null ? "—" : `${formatUsd(volume24h)}${volumePartial ? " (partial)" : ""}`, href: "#right-now" },
          ]}
          note={<>Latest read {chainReadLabel(readAt)} · selected names refresh daily · launch counts use distinct factories and recent windows</>}
        />
      </section>

      <nav className="catpills" aria-label="Categories">
        {sections.map((section) => (
          <a key={section.id} href={`/s/${section.id}`}>
            {section.label}{" "}
            <small>{entries.filter((entry) => entry.tree?.sectionId === section.id).length}</small>
          </a>
        ))}
      </nav>

      <section id="right-now" className="mt-[26px]">
        <div className="mb-2 flex flex-wrap items-baseline justify-between gap-3 px-0.5">
          <h2 className="m-0 text-sm font-semibold">Right now</h2>
          <span className="text-[11px] text-[var(--t3)]">
            from on-chain data · only names that clear the bar: a confirmed official surface, a
            located contract, and at least $25K of liquidity or TVL
          </span>
        </div>
        <RightNow
          trending={trending}
          launches={launches}
          announced={announced}
          notListed={notListedCount(entries, launches, now)}
          now={now}
        />
      </section>

      <section id="categories" className="mt-[26px]">
        <div className="mb-2 flex flex-wrap items-baseline justify-between gap-3 px-0.5">
          <h2 className="m-0 text-sm font-semibold">By category</h2>
          <span className="text-[11px] text-[var(--t3)]">
            leaders by the number that matters for each · open a category for the full ranking
          </span>
        </div>
        <CategoryCards sections={sections} entries={entries} leaders={leaders} />
      </section>

      <section className="mt-[26px]">
        <div className="mb-2 flex flex-wrap items-baseline justify-between gap-3 px-0.5">
          <h2 className="m-0 text-sm font-semibold">The wire</h2>
          <span className="text-[11px] text-[var(--t3)]">
            announcements, talk, on-chain activity and material Icarus notes
          </span>
        </div>
        <Wire items={wire} now={now} variant="compact" allowNameFilter={false} telegramUrl={site.telegram.url} />
      </section>
    </main>
  );
}
