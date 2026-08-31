import { Badge } from "@/components/ui/badge";
import { CopyAddress } from "@/components/copy-address";
import { CHAIN_LABEL, NOT_VERIFIED, explorerTokenUrl, type Deployment } from "@/data/types";

// Shared by the dossier and dependency pages — one deployment card layout everywhere a
// deployment list appears, ticker shown inline when the deployment carries one.
export function DeploymentGrid({ deployments, explorerBase }: { deployments: Deployment[]; explorerBase: string }) {
  if (deployments.length === 0) {
    return (
      <p className="border border-dashed border-border px-4 py-3 text-sm text-muted">
        No deployments recorded yet.
      </p>
    );
  }

  return (
    <div className="grid gap-2 sm:grid-cols-2">
      {deployments.map((d, i) => (
        <div key={i} className="rounded-sm border border-border bg-surface p-3">
          <div className="flex items-center justify-between gap-2">
            <p className="text-sm text-fg">{d.label}</p>
            <Badge tone={d.verified ? "live" : "risk"}>{d.verified ? "Verified" : "Not verified"}</Badge>
          </div>
          <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.1em] text-subtle">
            {CHAIN_LABEL[d.chain]}
            {d.issuer ? ` · ${d.issuer}` : ""}
            {d.ticker ? ` · ${d.ticker}` : ""}
          </p>
          {d.address === NOT_VERIFIED ? (
            <p className="mt-2 text-xs text-muted">Address not yet located.</p>
          ) : (
            <div className="mt-2">
              <CopyAddress
                address={d.address}
                href={d.chain === "robinhood-chain" ? explorerTokenUrl(explorerBase, d.address) : undefined}
              />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
