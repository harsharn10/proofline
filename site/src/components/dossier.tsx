import { Link } from "@tanstack/react-router";
import { Badge } from "@/components/ui/badge";
import { DeploymentGrid } from "@/components/deployment-grid";
import { ExportMenu } from "@/components/export-menu";
import { FeedList } from "@/components/feed-list";
import { PeerCards } from "@/components/peer-cards";
import { Section } from "@/components/section";
import { SnapshotStrip } from "@/components/snapshot-strip";
import { dejargon, hostLabel } from "@/lib/dejargon";
import { formatDate } from "@/lib/utils";
import {
  DEPENDENCY_KIND_LABEL,
  LIFECYCLE_LABEL,
  LINK_KIND_LABEL,
  NOT_VERIFIED,
  correctionsLink,
  dexScreenerSearchUrl,
  explorerTokenUrl,
  leafLabel,
  lifecycleTone,
  riskTone,
  sectionForDomain,
  type Dossier as DossierData,
  type DependencyRef,
  type Finding,
  type Gap,
  type PeerRef,
  type SiteConfig,
  type TreeRef,
} from "@/data/types";

// URL-synced tabs (Eregion .tabs pattern): the id lives in ?tab=, overview is the clean
// default URL. n.$slug.tsx validates the search param against this list.
export const DOSSIER_TABS = ["overview", "evidence", "feed", "changelog"] as const;
export type DossierTab = (typeof DOSSIER_TABS)[number];

// One finding = one atom row: tiny kd label (evidence class + source ids), sentence below.
// Risk findings carry a red `risk` prefix on the label instead of their own boxed section.
function FindingAtom({ finding, risk }: { finding: Finding; risk?: boolean }) {
  const ids = finding.sources && finding.sources.length > 0 ? ` · ${finding.sources.join(" ")}` : "";
  return (
    <div className="atom">
      <span className={risk ? "kd kd-risk" : "kd"}>
        {risk ? "risk · " : ""}
        {finding.class}
        {ids}
      </span>
      <p>{dejargon(finding.text)}</p>
    </div>
  );
}

function TabLink({ id, label, current }: { id: DossierTab; label: string; current: DossierTab }) {
  return (
    <Link
      from="/n/$slug"
      search={id === "overview" ? {} : { tab: id }}
      resetScroll={false}
      className={current === id ? "on" : undefined}
      aria-current={current === id ? "page" : undefined}
    >
      {label}
    </Link>
  );
}

function OverviewTab({
  dossier,
  site,
  dependencies,
  peers,
}: {
  dossier: DossierData;
  site: SiteConfig;
  dependencies: Record<string, DependencyRef>;
  peers: PeerRef[];
}) {
  const { findings } = dossier;
  const blockscoutDeployments = dossier.deployments.filter(
    (d) => d.chain === "robinhood-chain" && d.address !== NOT_VERIFIED,
  );
  const findingCount = findings.positive.length + findings.risk.length;
  // Top 3, positives first; the risk flag survives so the atom keeps its red label.
  const top = [
    ...findings.positive.map((f) => ({ finding: f, risk: false })),
    ...findings.risk.map((f) => ({ finding: f, risk: true })),
  ].slice(0, 3);

  return (
    <div className="tabpanel">
      <p className="lead mt-5">{dejargon(dossier.summary)}</p>

      <div className="receiptrow mt-4">
        {dossier.links.map((link) => (
          <a key={link.kind + link.url} className="receipt" href={link.url} target="_blank" rel="noreferrer">
            {LINK_KIND_LABEL[link.kind].toLowerCase()}
          </a>
        ))}
        <a
          className="receipt"
          href={dexScreenerSearchUrl(dossier.symbol ?? dossier.name)}
          target="_blank"
          rel="noreferrer"
        >
          dexscreener
        </a>
        {blockscoutDeployments.map((d) => (
          <a
            key={d.label}
            className="receipt"
            href={explorerTokenUrl(site.chain.explorer, d.address)}
            target="_blank"
            rel="noreferrer"
          >
            explorer · {d.role}
          </a>
        ))}
      </div>

      {peers.length > 0 ? (
        <Section title="Competes with" hint="same niche first, then same section">
          <PeerCards peers={peers} />
        </Section>
      ) : null}

      {dossier.dependencies.length > 0 ? (
        <Section title="Depends on">
          <div className="depchips">
            {dossier.dependencies.map((id) => (
              <Link key={id} to="/d/$id" params={{ id }} className="chip" title={dependencies[id]?.summary}>
                {dependencies[id]?.name ?? id}
                {dependencies[id] ? <small>{DEPENDENCY_KIND_LABEL[dependencies[id].kind]}</small> : null}
              </Link>
            ))}
          </div>
        </Section>
      ) : null}

      {top.length > 0 ? (
        <Section
          title="Findings"
          hint={
            findingCount > top.length ? (
              <Link from="/n/$slug" search={{ tab: "evidence" }} resetScroll={false} className="morelink">
                top {top.length} of {findingCount} — see Evidence →
              </Link>
            ) : undefined
          }
        >
          <div className="atomlist">
            {top.map((t, i) => (
              <FindingAtom key={i} finding={t.finding} risk={t.risk} />
            ))}
          </div>
        </Section>
      ) : null}

      {dossier.feed.length > 0 ? (
        <Section
          title="Latest"
          hint={
            <Link from="/n/$slug" search={{ tab: "feed" }} resetScroll={false} className="morelink">
              see Feed tab →
            </Link>
          }
        >
          <FeedList items={dossier.feed.slice(0, 3).map((item) => ({ item }))} />
        </Section>
      ) : null}
    </div>
  );
}

function EvidenceTab({ dossier, site }: { dossier: DossierData; site: SiteConfig }) {
  const { findings } = dossier;
  const findingCount = findings.positive.length + findings.risk.length;
  const openItems = [...findings.missing, ...findings.unresolved];
  // Render only sections that hold actual research — data/markdown.ts renders an untouched
  // section as a lone "Research pending." paragraph, and the template's boilerplate sections
  // are covered by the ledger below and the Changelog tab's review record.
  const BOILERPLATE_HEADINGS = new Set(["Sources", "Review metadata"]);
  const researchSections = dossier.research.sections.filter(
    (s) => !s.html.includes(">Research pending.<") && !BOILERPLATE_HEADINGS.has(s.heading),
  );

  return (
    <div className="tabpanel">
      <Section title="Deployments" hint={`${dossier.deployments.length} recorded`}>
        <DeploymentGrid deployments={dossier.deployments} explorerBase={site.chain.explorer} />
      </Section>

      <Section title="Findings" hint={findingCount > 0 ? `${findingCount} recorded` : undefined}>
        {findingCount > 0 ? (
          <div className="atomlist">
            {findings.positive.map((f, i) => (
              <FindingAtom key={`p${i}`} finding={f} />
            ))}
            {findings.risk.map((f, i) => (
              <FindingAtom key={`r${i}`} finding={f} risk />
            ))}
          </div>
        ) : (
          <p className="honest">None recorded yet.</p>
        )}
        {openItems.length > 0 ? (
          <div className="openitems">
            <span className="kd">still unverified</span>
            <ul>
              {openItems.map((g: Gap, i) => (
                <li key={i}>{dejargon(g.text)}</li>
              ))}
            </ul>
          </div>
        ) : null}
      </Section>

      {researchSections.length > 0 ? (
        <Section title="Research record">
          <div className="mt-1 space-y-6">
            {researchSections.map((s) => (
              <div key={s.heading}>
                <h3 className="text-sm font-semibold">{s.heading}</h3>
                {/* research.sections.html comes from data/markdown.ts — evidence tags are
                    pre-rendered to .ev spans and HTML comments already stripped. */}
                <div className="research-body mt-2 text-muted" dangerouslySetInnerHTML={{ __html: s.html }} />
              </div>
            ))}
          </div>
        </Section>
      ) : null}

      <Section title="Sources" hint={dossier.sources.length > 0 ? `${dossier.sources.length} in the ledger` : undefined}>
        {dossier.sources.length > 0 ? (
          <ol className="m-0 list-none p-0">
            {dossier.sources.map((s) => (
              <li key={s.id} className="srcrow">
                <span className="sid">{s.id}</span>
                <div className="min-w-0">
                  <div className="sh">
                    <span className="spub">{s.publisher}</span>
                    <span className="sdate">{s.accessed_at.slice(0, 10)}</span>
                    <a className="receipt" href={s.url} target="_blank" rel="noreferrer">
                      {hostLabel(s.url)}
                    </a>
                  </div>
                  <p className="sclaim">{dejargon(s.claim)}</p>
                </div>
              </li>
            ))}
          </ol>
        ) : (
          <p className="honest">No sources recorded yet.</p>
        )}
      </Section>
    </div>
  );
}

function FeedTab({ dossier }: { dossier: DossierData }) {
  return (
    <div className="tabpanel">
      <Section title="Feed" hint={`${dossier.feed.length} item${dossier.feed.length === 1 ? "" : "s"} · newest first`}>
        <FeedList items={dossier.feed.map((item) => ({ item }))} />
      </Section>
    </div>
  );
}

function ChangelogTab({ dossier }: { dossier: DossierData }) {
  const review = dossier.review;
  return (
    <div className="tabpanel">
      <Section title="Changelog">
        {dossier.changelog.length > 0 ? (
          <ol className="m-0 list-none p-0">
            {dossier.changelog.map((c, i) => (
              <li key={i} className="evrow">
                <div className="eh">
                  <time className="ed">{c.date}</time>
                  <Badge tone="muted">{c.type}</Badge>
                  <Badge tone="muted">{c.severity}</Badge>
                </div>
                <h3 className="et">{dejargon(c.title)}</h3>
                <p className="edt">{dejargon(c.detail)}</p>
              </li>
            ))}
          </ol>
        ) : (
          <p className="honest">No changelog entries yet.</p>
        )}
      </Section>

      <Section title="Review record">
        <div className="kvgrid">
          <div className="s">
            <div className="k">researched by</div>
            <div className="v revv">{review.researcher}</div>
          </div>
          <div className="s">
            <div className="k">approver</div>
            <div className="v revv">{review.approver === "pending" ? "pending" : review.approver}</div>
          </div>
          <div className="s">
            <div className="k">methodology</div>
            <div className="v revv">{review.methodology_version}</div>
          </div>
          <div className="s">
            <div className="k">last reviewed</div>
            <div className="v revv">{formatDate(review.reviewed_at)}</div>
          </div>
          <div className="s">
            <div className="k">published</div>
            <div className="v revv">{review.published_at ? formatDate(review.published_at) : "not yet published"}</div>
          </div>
        </div>
      </Section>
    </div>
  );
}

export function Dossier({
  dossier,
  site,
  dependencies,
  peers,
  tree,
  tab,
}: {
  dossier: DossierData;
  site: SiteConfig;
  dependencies: Record<string, DependencyRef>;
  peers: PeerRef[];
  tree: TreeRef | null;
  tab: DossierTab;
}) {
  const { derived } = dossier;
  const section = sectionForDomain(tree?.domain);
  const correction = correctionsLink(site.corrections.destination);

  return (
    <article className="wrap narrow pb-10">
      <header className="masthead">
        <div className="min-w-0">
          <p className="eyebrow mast-eyebrow">
            {section ? (
              <Link to="/" hash={section.id} className="seclink">
                {section.label}
              </Link>
            ) : (
              dossier.category
            )}
            {tree ? <span className="leafchip">{leafLabel(tree.leaf)}</span> : null}
          </p>
          <h1 className="mt-2">{dossier.symbol ?? dossier.name}</h1>
          {dossier.symbol ? <p className="sub">{dossier.name}</p> : null}
          <div className="mast-badges">
            <Badge tone={lifecycleTone(dossier.lifecycle)}>{LIFECYCLE_LABEL[dossier.lifecycle]}</Badge>
            {derived.trending ? <Badge tone="warn">trending</Badge> : null}
            {derived.trending && derived.trendingAccounts.length > 0 ? (
              <span className="asof">{derived.trendingAccounts.join(" · ")}</span>
            ) : null}
          </div>
          {/* Site contract: `label` is the only display string and `provisional` the only
              de-emphasis flag. The one "research pending" line for the whole dossier
              lives here, in the score slot. */}
          {derived.score === null ? (
            <p className="scoreslot">no score yet · research pending</p>
          ) : (
            <div className="scorebig">
              <span className="n">
                {derived.score}
                <span className="of">/100</span>
              </span>
              {derived.provisional ? <Badge tone="warn">provisional</Badge> : null}
              {derived.confidence !== null ? <span className="conf">{derived.confidence}% confidence</span> : null}
              {derived.risk ? <Badge tone={riskTone(derived.risk)}>{derived.risk} risk</Badge> : null}
              {derived.override ? <span className="conf">capped by {derived.override.level} override</span> : null}
            </div>
          )}
        </div>
        <ExportMenu dossier={dossier} />
      </header>

      <SnapshotStrip metrics={derived.metrics} rank={derived.rank} category={dossier.category} sources={dossier.sources} />

      <nav className="tabs" aria-label="Dossier sections">
        <TabLink id="overview" label="Overview" current={tab} />
        <TabLink id="evidence" label="Evidence" current={tab} />
        <TabLink id="feed" label={dossier.feed.length > 0 ? `Feed · ${dossier.feed.length}` : "Feed"} current={tab} />
        <TabLink id="changelog" label="Changelog" current={tab} />
      </nav>

      {tab === "overview" ? <OverviewTab dossier={dossier} site={site} dependencies={dependencies} peers={peers} /> : null}
      {tab === "evidence" ? <EvidenceTab dossier={dossier} site={site} /> : null}
      {tab === "feed" ? <FeedTab dossier={dossier} /> : null}
      {tab === "changelog" ? <ChangelogTab dossier={dossier} /> : null}

      <p className="mt-10 border-t border-line pt-5 text-[12.5px] text-muted">
        Spotted an error?{" "}
        {correction.href ? (
          <a href={correction.href} className="text-fg underline underline-offset-2">
            {correction.label}
          </a>
        ) : (
          correction.label
        )}
      </p>
    </article>
  );
}
