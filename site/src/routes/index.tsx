import { Link, createFileRoute } from "@tanstack/react-router";
import { FeedList } from "@/components/feed-list";
import { HomeSection } from "@/components/home-section";
import { getContent } from "@/data/content-server";
import { SECTIONS, sectionForDomain, type DirectoryEntry } from "@/data/types";
import { formatDate } from "@/lib/utils";

export const Route = createFileRoute("/")({
  loader: () => getContent(),
  component: Home,
});

// The scene, by section (IA brief §Pages 1): masthead, statrow, the newest 5 feed items
// (full firehose on /feed), then the nine visitor sections as ranked mini-tables. No
// global flat list — the topbar search jumps straight to dossiers.
function Home() {
  const { site, entries, latestFeed, counts, generatedAt } = Route.useLoaderData();

  const bySection = new Map<string, DirectoryEntry[]>();
  for (const entry of entries) {
    const section = sectionForDomain(entry.tree?.domain);
    if (!section) continue;
    const bucket = bySection.get(section.id);
    if (bucket) bucket.push(entry);
    else bySection.set(section.id, [entry]);
  }

  const liveFeedCount = entries.filter((d) => d.feedCount > 0).length;

  return (
    <main className="wrap pb-4">
      <section className="hero">
        <p className="eyebrow">Robinhood Chain · {site.chain.id}</p>
        <h1>{site.tagline}</h1>
        <p className="desc">
          {site.name} tracks every native play on {site.chain.name} — deployments, control, security
          posture, and what is still unverified. {site.chain.stack}. Gas in {site.chain.gas}. Mainnet
          since {formatDate(site.chain.mainnet_date)}.
        </p>
      </section>

      {/* What exists, nothing else — no zero-stats above the fold (redesign rule 2). */}
      <div className="statrow">
        <div className="s">
          <b>{entries.length}</b>
          <span>names on file</span>
        </div>
        <div className="s">
          <b>{counts.dependencyCards}</b>
          <span>dependency cards</span>
        </div>
        <div className="s">
          <b>{counts.sourcedClaims}</b>
          <span>sourced claims</span>
        </div>
        <div className="s">
          <b>{liveFeedCount}</b>
          <span>live feeds</span>
        </div>
        <div className="s">
          <b>{formatDate(generatedAt.slice(0, 10))}</b>
          <span>updated</span>
        </div>
      </div>

      <div className="receiptrow">
        <a className="receipt" href={site.chain.explorer} target="_blank" rel="noreferrer">
          explorer
        </a>
        <a className="receipt" href={site.chain.docs} target="_blank" rel="noreferrer">
          chain docs
        </a>
        <span className="honest">
          {site.chain.checked
            ? `Chain facts reproduced against docs.robinhood.com on ${formatDate(site.chain.checked)}.`
            : "Chain facts not yet reproduced against docs.robinhood.com — treat as reported."}
        </span>
      </div>

      <section>
        <div className="sechead">
          <h2 className="t">Latest</h2>
          <Link to="/feed" className="h morelink">
            full feed →
          </Link>
        </div>
        <FeedList items={latestFeed} />
      </section>

      {SECTIONS.map((section) => (
        <HomeSection key={section.id} section={section} entries={bySection.get(section.id) ?? []} />
      ))}
    </main>
  );
}
