import { Link } from "@tanstack/react-router";
import { Badge } from "@/components/ui/badge";
import { DeploymentGrid } from "@/components/deployment-grid";
import { ExportMenu } from "@/components/export-menu";
import { FeedList } from "@/components/feed-list";
import { Section } from "@/components/section";
import { dejargon, hostLabel } from "@/lib/dejargon";
import {
  DEPENDENCY_KIND_LABEL,
  LIFECYCLE_LABEL,
  LINK_KIND_LABEL,
  NOT_VERIFIED,
  correctionsLink,
  dexScreenerSearchUrl,
  explorerTokenUrl,
  lifecycleTone,
  riskTone,
  type Dossier as DossierData,
  type DependencyRef,
  type Finding,
  type Gap,
  type SiteConfig,
} from "@/data/types";

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

export function Dossier({
  dossier,
  site,
  dependencies,
}: {
  dossier: DossierData;
  site: SiteConfig;
  dependencies: Record<string, DependencyRef>;
}) {
  const { derived, findings } = dossier;
  const blockscoutDeployments = dossier.deployments.filter(
    (d) => d.chain === "robinhood-chain" && d.address !== NOT_VERIFIED,
  );
  const correction = correctionsLink(site.corrections.destination);
  // Render only sections that hold actual research (brief rule 5) — data/markdown.ts
  // renders an untouched section as a lone "Research pending." paragraph.
  const researchSections = dossier.research.sections.filter((s) => !s.html.includes(">Research pending.<"));
  const findingCount = findings.positive.length + findings.risk.length;
  const openItems = [...findings.missing, ...findings.unresolved];

  return (
    <article className="wrap narrow pb-10">
      <header className="masthead">
        <div className="min-w-0">
          <p className="eyebrow" style={{ margin: 0 }}>
            {dossier.category}
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
              (brief rule 1) lives here, in the score slot. */}
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

      <Section
        title="Deployments"
        hint={`${dossier.deployments.length} recorded`}
      >
        <DeploymentGrid deployments={dossier.deployments} explorerBase={site.chain.explorer} />
      </Section>

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

      <Section title="Research record">
        {researchSections.length > 0 ? (
          <div className="mt-1 space-y-6">
            {researchSections.map((s) => (
              <div key={s.heading}>
                <h3 className="text-sm font-semibold">{s.heading}</h3>
                {/* research.sections.html is produced by data/markdown.ts from research/<slug>.md —
                    evidence tags are pre-rendered to .ev spans and HTML comments already stripped. */}
                <div className="research-body mt-2 text-muted" dangerouslySetInnerHTML={{ __html: s.html }} />
              </div>
            ))}
          </div>
        ) : (
          <p className="honest">Full research record pending.</p>
        )}
      </Section>

      <Section title="Feed" hint={`${dossier.feed.length} item${dossier.feed.length === 1 ? "" : "s"} · newest first`}>
        <FeedList items={dossier.feed.map((item) => ({ item }))} />
      </Section>

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
