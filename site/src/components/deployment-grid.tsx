import { CopyAddress } from "@/components/copy-address";
import { cleanLabel } from "@/lib/dejargon";
import { CHAIN_LABEL, NOT_VERIFIED, explorerTokenUrl, type Deployment } from "@/data/types";

// Deployments as an Eregion kv grid: cleaned label + chain (faint mono) over a
// middle-truncated mono address with copy. An unverified address gets a tiny amber
// `claimed` badge — the one caveat for this surface (brief rule 1). Shared by the
// dossier and dependency pages.
export function DeploymentGrid({ deployments, explorerBase }: { deployments: Deployment[]; explorerBase: string }) {
  if (deployments.length === 0) {
    return <p className="honest">No deployments recorded yet.</p>;
  }

  return (
    <div className="kvgrid">
      {deployments.map((d, i) => (
        <div key={i} className="s">
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
      ))}
    </div>
  );
}
