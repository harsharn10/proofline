import { CopyAddress } from "@/components/copy-address";
import { cleanLabel } from "@/lib/dejargon";
import { CHAIN_LABEL, NOT_VERIFIED, explorerTokenUrl, type Deployment } from "@/data/types";

// Deployments as an Eregion kv grid: cleaned label + chain (faint mono) over a
// middle-truncated mono address with copy. An unverified address gets a tiny amber
// `claimed` badge — the one caveat for this surface (brief rule 1). Shared by the
// dossier and dependency pages.
function DeploymentCell({ d, explorerBase }: { d: Deployment; explorerBase: string }) {
  return (
    <div className="s">
      <div className="k">
        {cleanLabel(d.label)}
        <span className="chainlbl">
          {CHAIN_LABEL[d.chain]}
          {d.issuer ? ` · ${d.issuer}` : ""}
          {d.ticker ? ` · ${d.ticker}` : ""}
        </span>
      </div>
      <div className="v">
        {d.address === NOT_VERIFIED ? (
          <span className="nolo">address not located yet</span>
        ) : (
          <>
            <CopyAddress
              address={d.address}
              href={d.chain === "robinhood-chain" ? explorerTokenUrl(explorerBase, d.address) : undefined}
            />
            {d.verified ? null : <span className="badge badge-warn">claimed</span>}
          </>
        )}
      </div>
    </div>
  );
}

// A card can carry hundreds of deployments (stock-tokens lists every ticker) — past this
// threshold the rest fold behind a disclosure so the page stays a page, not a wall.
const VISIBLE_DEPLOYMENTS = 12;

export function DeploymentGrid({ deployments, explorerBase }: { deployments: Deployment[]; explorerBase: string }) {
  if (deployments.length === 0) {
    return <p className="honest">No deployments recorded yet.</p>;
  }

  const collapse = deployments.length > VISIBLE_DEPLOYMENTS + 4;
  const head = collapse ? deployments.slice(0, VISIBLE_DEPLOYMENTS) : deployments;
  const rest = collapse ? deployments.slice(VISIBLE_DEPLOYMENTS) : [];

  return (
    <>
      <div className="kvgrid">
        {head.map((d, i) => (
          <DeploymentCell key={i} d={d} explorerBase={explorerBase} />
        ))}
      </div>
      {rest.length > 0 ? (
        <details className="moredeps">
          <summary>show all {deployments.length} deployments ↓</summary>
          <div className="kvgrid">
            {rest.map((d, i) => (
              <DeploymentCell key={i} d={d} explorerBase={explorerBase} />
            ))}
          </div>
        </details>
      ) : null}
    </>
  );
}
