import { Link } from "@tanstack/react-router";
import { Badge } from "@/components/ui/badge";
import { DeploymentGrid } from "@/components/deployment-grid";
import { ExportMenu } from "@/components/export-menu";
import { FeedList } from "@/components/feed-list";
import { OnChain } from "@/components/on-chain";
import { PeerCards } from "@/components/peer-cards";
import { Section } from "@/components/section";
import { SnapshotStrip } from "@/components/snapshot-strip";
import { Traction } from "@/components/traction";
import { cleanLabel, dejargon, hostLabel } from "@/lib/dejargon";
import {
  coverageWord,
  DEPENDENCY_KIND_LABEL,
  EVIDENCE_LABEL,
  LIFECYCLE_LABEL,
  LINK_KIND_LABEL,
  NOT_VERIFIED,
  STATUS_LABEL,
  relativeTime,
  statusTone,
  correctionsLink,
  dexScreenerSearchUrl,
  explorerTokenUrl,
  lifecycleTone,
  riskTone,
  type Deployment,
  type DependencyRef,
  type Dossier as DossierData,
  type Finding,
  type Gap,
  type PeerRef,
  type SectionDef,
  type SiteConfig,
  type SourceEntry,
  type TreeRef,
} from "@/data/types";

// URL-synced tabs on a full record (eregion .tabs): the id lives in ?tab=, overview is the clean
// default URL. n.$slug.tsx validates the search param against this list.
export const DOSSIER_TABS = ["overview", "evidence", "feed", "changelog"] as const;
export type DossierTab = (typeof DOSSIER_TABS)[number];

// A source id as a working anchor into the ledger. On a full record the ledger sits on the
// Evidence tab; on an initial-research page it is further down the same page.
function SourceRef({ id, full }: { id: string; full: boolean }) {
  return full ? (
    <Link from="/n/$slug" search={{ tab: "evidence" }} hash={id} resetScroll={false} className="sref">
      {id}
    </Link>
  ) : (
    <a href={`#${id}`} className="sref">
      {id}
    </a>
  );
}

// One finding = one atom row: a reader-word evidence label with source anchors, sentence below.
// Risk findings carry a red `risk` prefix instead of their own boxed section.
function FindingAtom({ finding, risk, full }: { finding: Finding; risk?: boolean; full: boolean }) {
  return (
    <div className="atom">
      <span className={risk ? "kd kd-risk" : "kd"}>
        {risk ? "risk · " : ""}
        {EVIDENCE_LABEL[finding.class]}
        {finding.sources?.map((id) => (
          <span key={id}>
            {" "}
            <SourceRef id={id} full={full} />
          </span>
        ))}
      </span>
      <p>{dejargon(finding.text)}</p>
    </div>
  );
}

// Risk first, then positives — the risk is why a reader came.
function orderedFindings(findings: DossierData["findings"]): Array<{ finding: Finding; risk: boolean }> {
  return [
    ...findings.risk.map((f) => ({ finding: f, risk: true })),
    ...findings.positive.map((f) => ({ finding: f, risk: false })),
  ];
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

// Official links, a DexScreener search, then at most three explorer chips named by contract —
// token first, then factory, router, vault, multisig, then file order. Past three, one chip
// counts the rest and points at the deployments section.
const EXPLORER_CHIP_CAP = 3;
const ROLE_ORDER: Deployment["role"][] = ["token", "factory", "router", "vault", "multisig"];

// A contract name in parentheses ("(PonsLaunchFactory)") is the best chip text; a caveat in
// parentheses ("(source not verified on the explorer)") is not — that one stays in the tooltip.
function chipName(d: Deployment): string {
  const paren = d.label.match(/\(([^)\s]+)\)/);
  if (paren) return paren[1]!;
  return cleanLabel(d.label).split(/\s+/).slice(0, 3).join(" ");
}

function LinkRow({ dossier, site, full }: { dossier: DossierData; site: SiteConfig; full: boolean }) {
  const located = dossier.deployments.filter((d) => d.chain === "robinhood-chain" && d.address !== NOT_VERIFIED);
  const ordered = [...located].sort((a, b) => {
    const ai = ROLE_ORDER.indexOf(a.role);
    const bi = ROLE_ORDER.indexOf(b.role);
    return (ai === -1 ? ROLE_ORDER.length : ai) - (bi === -1 ? ROLE_ORDER.length : bi);
  });
  const head = ordered.slice(0, EXPLORER_CHIP_CAP);
  const rest = ordered.length - head.length;
  // Two links of one kind (docs v1, docs v2) disambiguate by their last path segment.
  const kindCount = new Map<string, number>();
  for (const l of dossier.links) kindCount.set(l.kind, (kindCount.get(l.kind) ?? 0) + 1);
  return (
    <div className="receiptrow mt-4">
      {dossier.links.map((link) => {
        const base = LINK_KIND_LABEL[link.kind].toLowerCase();
        let label = base;
        if ((kindCount.get(link.kind) ?? 0) > 1) {
          const seg = link.url.replace(/\/$/, "").split("/").pop();
          if (seg) label = `${base} · ${seg}`;
        }
        return (
          <a key={link.kind + link.url} className="receipt" href={link.url} target="_blank" rel="noreferrer" title={link.url}>
            {label}
          </a>
        );
      })}
      <a className="receipt" href={dexScreenerSearchUrl(dossier.symbol ?? dossier.name)} target="_blank" rel="noreferrer">
        dexscreener
      </a>
      {head.map((d) => (
        <a
          key={d.address}
          className="receipt"
          href={explorerTokenUrl(site.chain.explorer, d.address)}
          target="_blank"
          rel="noreferrer"
          title={cleanLabel(d.label)}
        >
          {chipName(d)}
        </a>
      ))}
      {rest > 0 ? (
        full ? (
          <Link from="/n/$slug" search={{ tab: "evidence" }} hash="deployments" resetScroll={false} className="receipt more">
            +{rest} contracts
          </Link>
        ) : (
          <a href="#deployments" className="receipt more">
            +{rest} contracts
          </a>
        )
      ) : null}
    </div>
  );
}

function SourceLedger({ sources }: { sources: SourceEntry[] }) {
  if (sources.length === 0) return null;
  return (
    <Section title="Sources" hint="what each claim rests on">
      <ol className="m-0 list-none p-0">
        {sources.map((s) => (
          <li key={s.id} id={s.id} className="srcrow">
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
    </Section>
  );
}

// Two different gaps, kept apart (the content model distinguishes them): a fact searched for and
// not found, and evidence that exists and does not agree.
function OpenQuestions({ missing, unresolved }: { missing: Gap[]; unresolved: Gap[] }) {
  if (missing.length === 0 && unresolved.length === 0) return null;
  return (
    <Section title="Open questions" hint="what the record does not yet settle">
      {missing.length > 0 ? (
        <div className="openitems">
          <span className="kd">not yet located</span>
          <ul>
            {missing.map((g, i) => (
              <li key={`m${i}`}>{dejargon(g.text)}</li>
            ))}
          </ul>
        </div>
      ) : null}
      {unresolved.length > 0 ? (
        <div className="openitems">
          <span className="kd">not yet settled</span>
          <ul>
            {unresolved.map((g, i) => (
              <li key={`u${i}`}>{dejargon(g.text)}</li>
            ))}
          </ul>
        </div>
      ) : null}
    </Section>
  );
}

function DependsOn({ ids, dependencies }: { ids: string[]; dependencies: Record<string, DependencyRef> }) {
  if (ids.length === 0) return null;
  return (
    <Section title="Depends on" hint="shared infrastructure, each with its own card">
      <div className="depchips">
        {ids.map((id) => (
          <Link key={id} to="/d/$id" params={{ id }} className="chip" title={dependencies[id]?.summary}>
            {dependencies[id]?.name ?? id}
            {dependencies[id] ? <small>{DEPENDENCY_KIND_LABEL[dependencies[id].kind]}</small> : null}
          </Link>
        ))}
      </div>
    </Section>
  );
}

// --- Full record: four tabs -------------------------------------------------------------

function OverviewTab({
  dossier,
  dependencies,
  peers,
}: {
  dossier: DossierData;
  dependencies: Record<string, DependencyRef>;
  peers: PeerRef[];
}) {
  const all = orderedFindings(dossier.findings);
  const top = all.slice(0, 3);
  return (
    <div>
      {top.length > 0 ? (
        <Section
          title="Findings"
          hint={
            all.length > top.length ? (
              <Link from="/n/$slug" search={{ tab: "evidence" }} resetScroll={false} className="morelink">
                {all.length - top.length} more on the Evidence tab →
              </Link>
            ) : (
              "risk first"
            )
          }
        >
          <div className="atomlist">
            {top.map((t, i) => (
              <FindingAtom key={i} finding={t.finding} risk={t.risk} full />
            ))}
          </div>
        </Section>
      ) : null}

      <DependsOn ids={dossier.dependencies} dependencies={dependencies} />

      {peers.length > 0 ? (
        <Section title="Competes with" hint="same product first, then same section">
          <PeerCards peers={peers} />
        </Section>
      ) : null}

      {dossier.feed.length > 0 ? (
        <Section
          title="Latest"
          hint={
            <Link from="/n/$slug" search={{ tab: "feed" }} resetScroll={false} className="morelink">
              full feed →
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
  const all = orderedFindings(findings);
  // Render only sections that hold actual research — data/markdown.ts renders an untouched
  // section as a lone "Research pending." paragraph, and the template's boilerplate sections
  // are covered by the ledger below.
  const BOILERPLATE_HEADINGS = new Set(["Sources", "Review metadata"]);
  const researchSections = dossier.research.sections.filter(
    (s) => !s.html.includes(">Research pending.<") && !BOILERPLATE_HEADINGS.has(s.heading),
  );
  const located = dossier.deployments.some((d) => d.address !== NOT_VERIFIED);

  return (
    <div>
      {located ? (
        <div id="deployments">
          <Section title="Deployments" hint="reproduced on the explorer unless marked claimed">
            <DeploymentGrid deployments={dossier.deployments} explorerBase={site.chain.explorer} />
          </Section>
        </div>
      ) : null}

      {all.length > 0 ? (
        <Section title="Findings" hint="risk first">
          <div className="atomlist">
            {all.map((t, i) => (
              <FindingAtom key={i} finding={t.finding} risk={t.risk} full />
            ))}
          </div>
        </Section>
      ) : null}

      <OpenQuestions missing={findings.missing} unresolved={findings.unresolved} />

      {researchSections.length > 0 ? (
        <Section title="Research record" hint="from the full record">
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

      <SourceLedger sources={dossier.sources} />
    </div>
  );
}

function FeedTab({ dossier }: { dossier: DossierData }) {
  return (
    <div>
      <Section title="Feed" hint="newest first · posts are what an account said, not verified facts">
        <FeedList items={dossier.feed.map((item) => ({ item }))} />
      </Section>
    </div>
  );
}

function ChangelogTab({ dossier }: { dossier: DossierData }) {
  return (
    <div>
      <Section title="Changelog" hint="every published change to this record">
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
          <p className="honest">Nothing published for this name yet.</p>
        )}
      </Section>
    </div>
  );
}

// --- Initial research: one column, no tabs ------------------------------------------------

function StubBody({
  dossier,
  site,
  dependencies,
}: {
  dossier: DossierData;
  site: SiteConfig;
  dependencies: Record<string, DependencyRef>;
}) {
  const { findings } = dossier;
  const all = orderedFindings(findings);
  const located = dossier.deployments.filter((d) => d.address !== NOT_VERIFIED);
  const open = findings.missing.length + findings.unresolved.length;
  const parts: string[] = [];
  if (dossier.links.length > 0) parts.push(`${dossier.links.length} official link${dossier.links.length === 1 ? "" : "s"}`);
  if (located.length > 0) parts.push(`${located.length} contract${located.length === 1 ? "" : "s"} located on chain`);
  if (all.length > 0) parts.push(`${all.length} finding${all.length === 1 ? "" : "s"}`);
  if (dossier.sources.length > 0) parts.push(`${dossier.sources.length} source${dossier.sources.length === 1 ? "" : "s"}`);
  if (dossier.feed.length > 0) parts.push(`${dossier.feed.length} feed item${dossier.feed.length === 1 ? "" : "s"}`);
  if (open > 0) parts.push(`${open} open question${open === 1 ? "" : "s"}`);

  return (
    <div>
      {/* One honest panel per page (rule 2): what is on file, what is missing, what closes the gap. */}
      <p className="honestpanel mt-6">
        {dossier.role === "observe" ? (
          <>
            <b>Watchlist.</b> This name fails at least one of the four qualifying tests (deployed on chain 4663, a native play, citable, a research story). It stays on the watchlist without a score.{" "}
          </>
        ) : (
          <>
            <b>Initial research.</b> No full record yet, so no score.{" "}
          </>
        )}
        {parts.length > 0 ? `On file: ${parts.join(", ")}.` : "Nothing beyond the name is on file yet."}{" "}
        The full record, with every contract reproduced and control read from source, comes with coverage.
      </p>

      {all.length > 0 ? (
        <Section title="Findings" hint="risk first">
          <div className="atomlist">
            {all.map((t, i) => (
              <FindingAtom key={i} finding={t.finding} risk={t.risk} full={false} />
            ))}
          </div>
        </Section>
      ) : null}

      <DependsOn ids={dossier.dependencies} dependencies={dependencies} />

      {located.length > 0 ? (
        <div id="deployments">
          <Section title="Deployments" hint="reproduced on the explorer unless marked claimed">
            <DeploymentGrid deployments={located} explorerBase={site.chain.explorer} />
          </Section>
        </div>
      ) : null}

      {dossier.feed.length > 0 ? (
        <Section title="Feed" hint="newest first · posts are what an account said, not verified facts">
          <FeedList items={dossier.feed.map((item) => ({ item }))} />
        </Section>
      ) : null}

      <SourceLedger sources={dossier.sources} />

      <OpenQuestions missing={findings.missing} unresolved={findings.unresolved} />
    </div>
  );
}

// --- Page ---------------------------------------------------------------------------------

export function Dossier({
  dossier,
  site,
  dependencies,
  peers,
  tree,
  section,
  tab,
  now,
}: {
  dossier: DossierData;
  site: SiteConfig;
  dependencies: Record<string, DependencyRef>;
  peers: PeerRef[];
  tree: TreeRef | null;
  section: SectionDef | null;
  tab: DossierTab;
  now: number;
}) {
  const { derived, kpis } = dossier;
  const full = dossier.coverage === "full";
  const correction = correctionsLink(site.corrections.destination);

  return (
    <article className="wrap narrow pb-10">
      <header className="masthead">
        <div className="min-w-0">
          {/* One classification line: the section it files under, then its product label. */}
          <p className="eyebrow mast-eyebrow">
            {section ? (
              <Link to="/" hash={section.id} className="seclink">
                {section.label}
              </Link>
            ) : null}
            {tree ? <span className="eyeleaf">{tree.label}</span> : null}
          </p>
          <h1 className="mt-2">{dossier.symbol ?? dossier.name}</h1>
          {dossier.symbol ? <p className="sub">{dossier.name}</p> : null}
          <div className="mast-badges">
            <Badge tone={statusTone(kpis.status)}>
              <span title="Computed from the latest chain read: live inside 7 days, quiet inside 30, dormant after">{STATUS_LABEL[kpis.status]}</span>
            </Badge>
            {kpis.lastActivityAt ? <span className="kago">active {relativeTime(kpis.lastActivityAt, now)}</span> : null}
            <Badge tone={lifecycleTone(dossier.lifecycle)}>{LIFECYCLE_LABEL[dossier.lifecycle]}</Badge>
            <span className="covword">{coverageWord(dossier.coverage, dossier.role)}</span>
            {derived.risk ? <Badge tone={riskTone(derived.risk)}>{derived.risk} risk</Badge> : null}
            {derived.trending ? (
              <Badge tone="warn" className="trendbadge">
                <span title={`${derived.trendingAccounts.length} tracked accounts posted about this name recently`}>trending</span>
              </Badge>
            ) : null}
          </div>
          {/* Site contract: `label` is the only display string and `provisional` the only de-emphasis
              flag. Provisional dims the number and says so in words; there is no badge. */}
          {derived.score !== null ? (
            <div className="scorebig" title={derived.provisional ? "Provisional: awaiting a second reviewer's sign-off" : undefined}>
              <span className={derived.provisional ? "n prov" : "n"}>
                {derived.score}
                <span className="of">/100 control</span>
              </span>
              {derived.confidence !== null ? (
                <span className="conf">
                  {derived.confidence}% confidence
                  {derived.provisional ? " · provisional" : ""}
                </span>
              ) : null}
            </div>
          ) : null}
        </div>
        <ExportMenu dossier={dossier} />
      </header>

      <p className="lead mt-5">{dejargon(dossier.summary)}</p>
      <LinkRow dossier={dossier} site={site} full={full} />
      <Traction kpis={kpis} now={now} />
      <SnapshotStrip metrics={derived.metrics} rank={derived.rank} sources={dossier.sources} />
      {/* Chain facts sit above the tabs: they are the same on every tab and are what a reader about to
          transact wants first — who holds the keys, how many holders, when it was deployed. */}
      <OnChain pulled={dossier.pulled} explorerBase={site.chain.explorer} />

      {full ? (
        <>
          <nav className="tabs" aria-label="Record sections">
            <TabLink id="overview" label="Overview" current={tab} />
            <TabLink id="evidence" label="Evidence" current={tab} />
            <TabLink id="feed" label={dossier.feed.length > 0 ? `Feed · ${dossier.feed.length}` : "Feed"} current={tab} />
            <TabLink id="changelog" label="Changelog" current={tab} />
          </nav>
          {tab === "overview" ? <OverviewTab dossier={dossier} dependencies={dependencies} peers={peers} /> : null}
          {tab === "evidence" ? <EvidenceTab dossier={dossier} site={site} /> : null}
          {tab === "feed" ? <FeedTab dossier={dossier} /> : null}
          {tab === "changelog" ? <ChangelogTab dossier={dossier} /> : null}
        </>
      ) : (
        <StubBody dossier={dossier} site={site} dependencies={dependencies} />
      )}

      {correction.href ? (
        <p className="mt-10 border-t border-line pt-5 text-[12.5px] text-muted">
          Spotted an error?{" "}
          <a href={correction.href} className="text-fg underline underline-offset-2">
            {correction.label}
          </a>
        </p>
      ) : null}
    </article>
  );
}
