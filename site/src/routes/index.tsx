import { Link, createFileRoute } from "@tanstack/react-router";
import { ChipSection } from "@/components/home-section";
import { ResearchedRows } from "@/components/researched-rows";
import { getContent } from "@/data/content-server";
import { DEPENDENCY_KIND_LABEL, type DirectoryEntry } from "@/data/types";
import { formatDate } from "@/lib/utils";

export const Route = createFileRoute("/")({
  loader: () => getContent(),
  component: Home,
});

// Three blocks (docs/reviews/2026-09-01/ui-audit.md Part C 8a): a masthead with one stat line
// where every number is a door, the researched names first as full rows, then every section as a
// block of chips. No feed strip, no filters, no global list — the topbar jump box goes straight to
// a name.
function Home() {
  const { site, sections, entries, dependencies, generatedAt } = Route.useLoaderData();

  const researched = entries.filter((e) => e.coverage === "full");
  const bySection = new Map<string, DirectoryEntry[]>();
  const unplaced: DirectoryEntry[] = [];
  for (const entry of entries) {
    const id = entry.tree?.sectionId;
    if (!id) {
      unplaced.push(entry);
      continue;
    }
    const bucket = bySection.get(id);
    if (bucket) bucket.push(entry);
    else bySection.set(id, [entry]);
  }
  const firstSection = sections.find((s) => (bySection.get(s.id)?.length ?? 0) > 0);

  return (
    <main className="wrap pb-4">
      <section className="hero">
        <p className="eyebrow">Robinhood Chain · {site.chain.id}</p>
        <h1>{site.tagline}</h1>
        <p className="desc">
          {site.name} tracks every native play on {site.chain.name}: deployments, control, security
          posture, and what is still unverified. {site.chain.stack}. Gas in {site.chain.gas}. Mainnet
          since {formatDate(site.chain.mainnet_date)}.
        </p>
        <p className="statline">
          {researched.length > 0 ? (
            <>
              <a href="#researched">
                <b>{researched.length}</b> researched
              </a>
              <span className="sep">·</span>
            </>
          ) : null}
          <a href={firstSection ? `#${firstSection.id}` : "#dependencies"}>
            <b>{entries.length}</b> names on file
          </a>
          <span className="sep">·</span>
          <a href="#dependencies">
            <b>{dependencies.length}</b> dependency cards
          </a>
          <span className="sep">·</span>
          <span>updated {formatDate(generatedAt.slice(0, 10))}</span>
        </p>
        <nav className="catpills" aria-label="Sections">
          {sections.map((s) => {
            const n = bySection.get(s.id)?.length ?? 0;
            if (n === 0) return null;
            return (
              <a key={s.id} href={`#${s.id}`}>
                {s.label} <small>{n}</small>
              </a>
            );
          })}
        </nav>
      </section>

      <ResearchedRows entries={researched} />

      {sections.map((section) => (
        <ChipSection key={section.id} section={section} entries={bySection.get(section.id) ?? []} />
      ))}

      {unplaced.length > 0 ? (
        <ChipSection
          section={{ id: "unplaced", label: "Not yet placed", description: "On file, no taxonomy placement yet." }}
          entries={unplaced}
        />
      ) : null}

      {dependencies.length > 0 ? (
        <section id="dependencies" className="catsec">
          <div className="sechead">
            <h2 className="t">
              Dependencies <span className="count">{dependencies.length}</span>
            </h2>
            <span className="h">cited from the profiles, never scored</span>
          </div>
          <p className="catdesc">
            Stock tokens, stablecoins, DEXs, oracles and bridges the plays above rely on. Each card lists who
            controls it and how it can fail.
          </p>
          <div className="chiprow">
            {dependencies.map((d) => (
              <Link key={d.id} to="/d/$id" params={{ id: d.id }} className="chip">
                {d.name}
                <small>{DEPENDENCY_KIND_LABEL[d.kind]}</small>
              </Link>
            ))}
          </div>
        </section>
      ) : null}
    </main>
  );
}
