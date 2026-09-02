import { CopyAddress } from "@/components/copy-address";
import { Section } from "@/components/section";
import { cleanLabel } from "@/lib/dejargon";
import { formatDate } from "@/lib/utils";
import { explorerTokenUrl, type PulledAddress, type PulledFile } from "@/data/types";

// Facts read from the chain by scripts/pull.mjs (content/pulled/<slug>.yaml): who can call owner-only
// functions, whether that owner is a multisig, holder counts, creation dates. Rendered as-is with the
// read date; the site never recomputes ownership. Renders nothing when there is no pulled file.

function ownerWords(a: PulledAddress): string {
  switch (a.owner_type) {
    case "safe":
      return a.safe?.threshold && a.safe.signers
        ? `${a.safe.threshold}-of-${a.safe.signers.length} Safe`
        : "Safe multisig";
    case "eoa":
      return "single key (EOA)";
    case "contract":
      return "a contract";
    case "none":
      return "no owner() function";
    default:
      return "unknown";
  }
}

const VISIBLE = 6;

function Row({ a, explorerBase }: { a: PulledAddress; explorerBase: string }) {
  const name = a.contract_name ?? (a.label ? cleanLabel(a.label) : null);
  return (
    <div className="s">
      <div className="k">
        {name ?? "contract"}
        <span className="chainlbl">
          {a.role ?? ""}
          {a.source_verified === false ? " · source not verified" : ""}
          {a.proxy.type === "eip1967" ? " · proxy" : ""}
        </span>
      </div>
      <div className="v">
        <CopyAddress address={a.address} href={explorerTokenUrl(explorerBase, a.address)} />
      </div>
      <div className="onchain-facts">
        <span>
          owner: <b>{ownerWords(a)}</b>
          {a.owner && a.owner_type !== "none" ? (
            <>
              {" "}
              <CopyAddress address={a.owner} href={explorerTokenUrl(explorerBase, a.owner)} />
            </>
          ) : null}
        </span>
        {a.holders !== null ? (
          <span>
            holders: <b>{a.holders.toLocaleString("en-US")}</b>
          </span>
        ) : null}
        {a.created_at ? <span>deployed {formatDate(a.created_at.slice(0, 10))}</span> : null}
      </div>
    </div>
  );
}

export function OnChain({ pulled, explorerBase }: { pulled: PulledFile | null; explorerBase: string }) {
  if (!pulled || pulled.addresses.length === 0) return null;
  const rows = [...pulled.addresses].sort((a, b) => (a.role === "token" ? -1 : 0) - (b.role === "token" ? -1 : 0));
  const head = rows.slice(0, VISIBLE);
  const rest = rows.slice(VISIBLE);
  const safes = new Set(rows.filter((a) => a.owner_type === "safe").map((a) => a.owner));
  const single = rows.filter((a) => a.owner_type === "eoa").length;
  const summary = [
    `${rows.length} contract${rows.length === 1 ? "" : "s"} read`,
    safes.size > 0 ? `${safes.size} multisig owner${safes.size === 1 ? "" : "s"}` : null,
    single > 0 ? `${single} single-key owner${single === 1 ? "" : "s"}` : null,
    rows.some((a) => a.proxy.type === "eip1967") ? "upgradeable proxy present" : "no upgradeable proxies",
  ]
    .filter(Boolean)
    .join(" · ");
  return (
    <Section title="On chain" hint={`read ${formatDate(pulled.pulled_at.slice(0, 10))} · ${summary}`}>
      <div className="kvgrid onchain">
        {head.map((a) => (
          <Row key={a.address} a={a} explorerBase={explorerBase} />
        ))}
      </div>
      {rest.length > 0 ? (
        <details className="moredeps">
          <summary>show all {rows.length} contracts ↓</summary>
          <div className="kvgrid onchain">
            {rest.map((a) => (
              <Row key={a.address} a={a} explorerBase={explorerBase} />
            ))}
          </div>
        </details>
      ) : null}
    </Section>
  );
}
