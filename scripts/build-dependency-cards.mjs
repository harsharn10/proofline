// Task 5 — create skeleton dependency cards for the infra the desk's ecosystem map lists under
// `dependencies:` (PRD §2.2: day-one / multi-chain infra is cited, never profiled). Never overwrites an
// existing card. Controls and failure modes are `class: unknown` skeletons unless the map or workbook
// said something specific, in which case the line is a `claim` citing the card's own S1 (the map).
//
//   node scripts/build-dependency-cards.mjs
import { writeFile, access } from "node:fs/promises";
import { stringify } from "yaml";
import { validateAgainst } from "./lib/schemas.mjs";

// Inlined from the one-shot importer scripts/intake/2026-08-31/harvest-data.mjs, which this script no
// longer loads: the two constants below are the only values it ever used from that 1,239-line file.
const GH = "https://github.com/harsharn10/proofline/blob/main";
const ACCESSED = "2026-08-31T00:00:00Z";

const RESEARCHER = "harsharn10";
const exists = (p) => access(p).then(() => true, () => false);
const src = (id, url, publisher, kind, claim, excerpt) => ({ id, url, publisher, kind, accessed_at: ACCESSED, claim, excerpt, hash: null, archive_url: null, researcher: RESEARCHER, available: true });
const MAP = `${GH}/research/inbox/2026-08-31-ecosystem-map.yaml`;
const WORKBOOK = `${GH}/research/inbox/grok-2026-08-30/build_rh_tokens.py`;
const mapSrc = (claim) => src("S1", MAP, "Grok research desk — ecosystem map (intake, 2026-08-31)", "third-party-data", claim, "Dependency row in the desk's map; DefiLlama chain-slice TVL copied as listed on 2026-08-31, not reproduced.");
const wbSrc = (id, claim) => src(id, WORKBOOK, "Grok workbook sheet 06 (intake, 2026-08-30)", "third-party-data", claim, "Tokenless-infra row in the workbook script; a claim of the workbook.");
const unknown = (power, holder, note) => ({ power, holder, note, class: "unknown", sources: [] });
const fm = (text, cls = "unknown", sources = []) => ({ text, class: cls, sources });

const CARDS = [
  { id: "morpho", name: "Morpho Blue on Robinhood Chain", kind: "lending",
    summary: "Day-one lending primitive and the chain's largest TVL line; Robinhood Earn's USDG lending runs on it, and native overlays (Longbow, Vynex) open isolated markets on top. Cited, never profiled.",
    controls: [unknown("Market creation", "Permissionless (any address) per Morpho Blue's design", "Isolated markets are immutable once created; the risk sits in the oracle and LLTV the creator picks"), unknown("Curator vault allocation", "Vault curators (Steakhouse for the Earn path)", "A curated vault decides which markets receive deposits"), unknown("Protocol fee switch", "Morpho governance", "The desk map records $0 protocol revenue on the chain slice")],
    failure_modes: [fm("A Stock Token oracle or wrapper failure in one isolated market leaves bad debt in that market only.", "claim", ["S1"]), fm("Curator misallocation exposes Earn depositors to a market they did not choose.")],
    sources: [mapSrc("Morpho Blue listed as a dependency (credit/lending-primitive) with about $414.8M chain-slice TVL on 2026-08-31; Robinhood Earn path"), wbSrc("S2", "Sheet 06: immutable isolated markets, settlement layer under Robinhood Earn and Longbow; largest TVL protocol on the chain")] },
  { id: "steakhouse", name: "Steakhouse Financial (Morpho curator)", kind: "lending",
    summary: "Risk curator running the Morpho vaults behind Robinhood Earn; the map records it at about $473.7M chain-slice TVL. A curator on Morpho, not a separate primitive.",
    controls: [unknown("Vault allocation and caps", "Steakhouse curator role", "Decides which Morpho markets the Earn vault allocates to and at what caps"), unknown("Vault fee", "Curator", "Performance or management fee on the curated vault")],
    failure_modes: [fm("A curator allocation into a market with a weak oracle or illiquid collateral is borne by Earn depositors.")],
    sources: [mapSrc("Steakhouse Financial listed as a dependency (credit/morpho-curator) with about $473.7M chain-slice TVL on 2026-08-31; 'curator on Morpho, not a separate primitive'")] },
  { id: "lighter", name: "Lighter (perps)", kind: "perp-venue",
    summary: "Imported ZK perps venue available inside Robinhood Wallet in selected jurisdictions; Stock Tokens usable as margin per the workbook. Day-one partner, cited only.",
    controls: [unknown("Market listing and leverage", "Lighter operator", "Workbook and fills cite 5x and 25x markets on the Robinhood Chain instance"), unknown("Collateral acceptance", "Lighter operator", "$SPY cited as accepted collateral")],
    failure_modes: [fm("Venue-level halt or liquidation engine failure strands positions that a native play (e.g. Longshot's fee-funded perp) depends on.")],
    sources: [mapSrc("Lighter listed as a dependency (trading/perps-imported) with about $47.9M chain-slice TVL on 2026-08-31"), wbSrc("S2", "Sheet 06: perps inside Robinhood Wallet in selected jurisdictions; Stock Tokens usable as margin ($SPY live as collateral); $11M LIT incentives targeted at Robinhood users")] },
  { id: "arcus", name: "Arcus (spot + perps)", kind: "perp-venue",
    summary: "Spot and perps DEX from the dYdX team, an official day-one partner; pTokens (pBTC, pBTC3x, pHOOD3x) launched about 25 Aug per the workbook. Cited only.",
    controls: [unknown("Market listing", "Arcus operator", ""), unknown("pToken minting", "Arcus contracts", "Leveraged pTokens per the workbook")],
    failure_modes: [fm("Thin spot books: the desk recorded about $3–6M 24h spot volume against Uniswap's $1B+.", "claim", ["S1"])],
    sources: [mapSrc("Arcus listed as a dependency (trading/perps-imported, prop-amm) with about $20.0M chain-slice TVL on 2026-08-31; DEX-page spot volume about $3–6M"), wbSrc("S2", "Sheet 06: dYdX Labs × Robinhood Crypto; Stock Token spot and perps; pTokens launched about 25 Aug")] },
  { id: "spark", name: "Spark Savings", kind: "yield",
    summary: "Imported savings product listed by DefiLlama at about $28.7M on the chain; not researched beyond the map row.",
    controls: [unknown("Rate setting", "Spark governance", ""), unknown("Deposit caps", "Spark governance", "")],
    failure_modes: [fm("Savings-rate change or cap removal at the source protocol, not on this chain.")],
    sources: [mapSrc("Spark Savings listed as a dependency (chain-infra/stablecoin) with about $28.7M chain-slice TVL on 2026-08-31")] },
  { id: "layerzero", name: "LayerZero V2 (bridge)", kind: "bridge",
    summary: "Messaging bridge with about $1.4M chain-slice TVL per the map; a route for assets entering or leaving the chain.",
    controls: [unknown("Verifier (DVN) configuration", "Per-application owner", "Each OApp picks its own verifiers")],
    failure_modes: [fm("Bridged-asset depeg if a verifier set is compromised or misconfigured.")],
    sources: [mapSrc("LayerZero V2 listed as a dependency (chain-infra/bridge) with about $1.4M chain-slice TVL on 2026-08-31")] },
  { id: "symbiosis", name: "Symbiosis (bridge)", kind: "bridge",
    summary: "Cross-chain swap bridge with about $266k chain-slice TVL per the map.",
    controls: [unknown("Relayer set", "Symbiosis operator", "")],
    failure_modes: [fm("Relayer halt strands in-flight transfers.")],
    sources: [mapSrc("Symbiosis listed as a dependency (chain-infra/bridge) with about $266k chain-slice TVL on 2026-08-31")] },
  { id: "alchemy", name: "Alchemy (RPC / account abstraction)", kind: "infra",
    summary: "RPC and account-abstraction provider named by the map as chain infrastructure.",
    controls: [unknown("RPC availability and rate limits", "Alchemy", "")],
    failure_modes: [fm("RPC outage degrades every front end that depends on it; contracts are unaffected.")],
    sources: [mapSrc("Alchemy listed as a dependency (chain-infra/rpc-aa)")] },
  { id: "opensea", name: "OpenSea (NFT marketplace)", kind: "nft-marketplace",
    summary: "NFT marketplace where StonkBrokers, Quotrons V2 and Sight Genesis mints trade or launch; the map records about $28.5k 24h revenue on the chain.",
    controls: [unknown("Listing and royalty enforcement", "OpenSea", "")],
    failure_modes: [fm("Marketplace delisting or royalty changes affect NFT-gated plays' secondary markets, not their contracts.")],
    sources: [mapSrc("OpenSea listed as a dependency (nft-treasury/nft-marketplace) with about $28.5k 24h revenue on 2026-08-31")] },
  { id: "sushi", name: "SushiSwap on Robinhood Chain", kind: "dex",
    summary: "Imported AMM; the map records about $1.7M chain-slice TVL and the desk saw about $7M 24h V3 volume. Some pads (Poolsfun per GeckoTerminal) deploy into Sushi V3 pools.",
    controls: [unknown("Protocol fee", "Sushi governance", "")],
    failure_modes: [fm("Thin liquidity relative to Uniswap makes exits from Sushi-launched pads unreliable.")],
    sources: [mapSrc("Sushi listed as a dependency (trading/amm-imported) with about $1.7M chain-slice TVL on 2026-08-31")] },
  { id: "pancakeswap", name: "PancakeSwap on Robinhood Chain", kind: "dex",
    summary: "Imported AMM named by the map; SwapHood's V3 factory is a PancakeV3Factory-named contract per the desk's explorer check (a fork, not this deployment).",
    controls: [unknown("Protocol fee", "PancakeSwap governance", "")],
    failure_modes: [fm("Forks using the PancakeV3Factory code inherit its behaviour but not its governance.")],
    sources: [mapSrc("PancakeSwap listed as a dependency (trading/amm-imported)")] },
  { id: "curve", name: "Curve on Robinhood Chain", kind: "dex",
    summary: "Imported stable-swap AMM with about $348k chain-slice TVL per the map.",
    controls: [unknown("Pool parameters and fee", "Curve DAO", "")],
    failure_modes: [fm("Low TVL: stablecoin routes through Curve are thin on this chain.")],
    sources: [mapSrc("Curve listed as a dependency (trading/amm-imported) with about $348k chain-slice TVL on 2026-08-31")] },
  { id: "uncx", name: "UNCX (token locker)", kind: "locker",
    summary: "Imported liquidity locker with about $9.4M chain-slice TVL per the map; the native alternative is HoodLock (a census subject).",
    controls: [unknown("Lock and unlock", "Lock owner per lock; UNCX contracts", "Lockers hold LP tokens on behalf of projects")],
    failure_modes: [fm("A locker exploit or an owner-controlled early unlock releases liquidity a project advertised as locked.")],
    sources: [mapSrc("UNCX listed as a dependency (tooling/locker) with about $9.4M chain-slice TVL on 2026-08-31")] },
  { id: "kyberswap", name: "KyberSwap (aggregator)", kind: "aggregator",
    summary: "Multi-chain swap aggregator with revenue on the chain per the map; a dependency unless a native control plane is found.",
    controls: [unknown("Router upgrades", "Kyber team", "")],
    failure_modes: [fm("Router compromise affects users who approved it; it does not touch the pools it routes to.")],
    sources: [mapSrc("KyberSwap listed as a dependency (trading/aggregator): multi-chain aggregator with revenue on Robinhood Chain; dependency unless a native control plane is found")] },
  { id: "rialto", name: "Rialto (RFQ / prop AMM)", kind: "dex",
    summary: "Purpose-built RFQ venue for Stock Tokens, ETFs and commodities named as an official launch partner; the workbook says it powers The Index's distributions and the desk says EARN's omnipool zaps route through it.",
    controls: [unknown("Quote provision and asset list", "Rialto operator", "RFQ venues quote from an operator-run book")],
    failure_modes: [fm("A quote outage or asset delisting breaks routing for plays that depend on it (The Index, EARN zaps).", "claim", ["S1", "S2"])],
    sources: [mapSrc("Rialto listed as a dependency (trading/prop-amm): official partner list, low DEX-page spot volume (about $0.11M 24h) this pass; EARN omnipool zaps powered by Rialto"), wbSrc("S2", "Sheet 06: purpose-built RFQ venue for Stock Tokens, ETFs and commodities; powers Index distributions; official launch partner alongside Uniswap, Lighter, Arcus and 1inch")] },
  { id: "maple-syrupusdg", name: "Maple syrupUSDG", kind: "yield",
    summary: "ERC-4626 receipt for USDG deposited into Maple's institutional lending, live on the chain from day one and approved as Earn collateral per the workbook.",
    controls: [unknown("Deposit / withdrawal gating", "Maple", "Institutional lending pools have their own liquidity windows"), unknown("Collateral approval in Earn markets", "Morpho curator (Steakhouse)", "")],
    failure_modes: [fm("A Maple pool default or withdrawal queue makes syrupUSDG illiquid while it sits as Morpho collateral.", "claim", ["S1"])],
    deployments: [{ label: "syrupUSDG receipt token (workbook sheet 06, 'verify')", chain: "robinhood-chain", address: "0x40858070814a57FdF33a613ae84fE0a8b4a874f7", role: "token", verified: false, sources: ["S1"] }],
    sources: [wbSrc("S1", "Sheet 06: ERC-4626 receipt for USDG in Maple Syrup institutional lending; live on ETH and Robinhood Chain from day one; approved as Earn collateral; about $96M chain-slice market cap in one DefiLlama pull; address cited with 'verify'")] },
];

let written = 0, skipped = 0;
for (const card of CARDS) {
  const path = `content/dependencies/${card.id}.yaml`;
  if (await exists(path)) { skipped++; continue; }
  const errs = validateAgainst("dependency", card);
  if (errs.length) { console.error(`${path}: ${errs.join("; ")}`); process.exit(1); }
  await writeFile(path, `# Skeleton dependency card (Task 5): cited on subject files, never profiled (PRD §2.2). Fill controls/failure modes with evidence before citing them as more than claims.\n` + stringify(card, { lineWidth: 0 }));
  written++;
}
console.log(`dependency cards: ${written} written, ${skipped} existing left alone`);
