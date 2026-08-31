// Task 5 harvest — everything the two research intakes said about each census subject, written to
// PRD §7.3 and keyed to the artifact that said it. scripts/apply-harvest.mjs turns this into ledger
// entries (S-ids assigned per slug), `deployments[]`, `findings` and `content/feed/<slug>.yaml`.
//
// Rules applied throughout:
//   - every statement from an intake is `class: claim` with a source id; nothing here is `verified`
//   - every address is `verified: false`; addresses the desk flagged as suspect live in `risk`, not `deployments`
//   - social-post numbers are what an account posted, dated; never a bare fact
//   - no verdicts, no "fake" as a bare label, "an independent audit was not found in this review"
export const GH = "https://github.com/harsharn10/proofline/blob/site-integration";
export const ACCESSED = "2026-08-31T00:00:00Z";

const fill = (n, file) => ({ url: `${GH}/research/inbox/${file}`, publisher: `Grok research desk — X-sourced fill round ${n} (2026-08-31)`, kind: "social" });

/** Intake artifacts a ledger entry can point at. `excerpt` is the generic note; per-slug `claim` says what it supports. */
export const ARTIFACTS = {
  map: { url: `${GH}/research/inbox/2026-08-31-ecosystem-map.yaml`, publisher: "Grok research desk — ecosystem map (intake, 2026-08-31)", kind: "third-party-data" },
  desk: { url: `${GH}/research/inbox/account-desk.yaml`, publisher: "Grok research desk — account ledger (intake, 2026-08-31)", kind: "third-party-data" },
  dossier: { url: `${GH}/research/inbox/grok-2026-08-30/chain-file.json`, publisher: "Grok Chain File dossiers (intake, 2026-08-30)", kind: "third-party-data" },
  workbook: { url: `${GH}/research/inbox/grok-2026-08-30/build_rh_tokens.py`, publisher: "Grok workbook sheet 02–06 (intake, 2026-08-30)", kind: "third-party-data" },
  llama: { url: "https://defillama.com/chain/robinhood-chain", publisher: "DefiLlama", kind: "third-party-data" },
  llamaPons: { url: "https://defillama.com/protocol/pons", publisher: "DefiLlama", kind: "third-party-data" },
  fill1: fill(1, "2026-08-31-x-fill.md"), fill2: fill(2, "2026-08-31-x-fill-2.md"), fill3: fill(3, "2026-08-31-x-fill-3.md"),
  fill4: fill(4, "2026-08-31-x-fill-4.md"), fill5: fill(5, "2026-08-31-x-fill-5.md"), fill6: fill(6, "2026-08-31-x-fill-6.md"),
  fill7: fill(7, "2026-08-31-x-fill-7.md"), fill8: fill(8, "2026-08-31-x-fill-8.md"), fill9: fill(9, "2026-08-31-x-fill-9.md"),
  fill10: fill(10, "2026-08-31-x-fill-10.md"), fill11: fill(11, "2026-08-31-x-fill-11.md"), fill12: fill(12, "2026-08-31-x-fill-12.md"),
  fill13: fill(13, "2026-08-31-x-fill-13.md"), fill14: fill(14, "2026-08-31-x-fill-14.md"), fill15: fill(15, "2026-08-31-x-fill-15.md"),
  fill16: fill(16, "2026-08-31-x-fill-16.md"), fill17: fill(17, "2026-08-31-x-fill-17.md"),
};
export const GENERIC_EXCERPT = "Intake artifact committed to the research inbox; the linked file carries the desk's wording. Nothing in it is verified until reproduced on Blockscout or an official page.";

const X = (h) => `https://x.com/${h.replace(/^@/, "")}`;
const LLAMA_DATE = "2026-08-31";
const llamaItem = (name, figures, sourceKey = "llama") => ({
  date: LLAMA_DATE, kind: "onchain", title: "DefiLlama listing", sourceUrl: ARTIFACTS[sourceKey].url, sources: [sourceKey],
  body: `DefiLlama listed ${name} on Robinhood Chain with ${figures} as of ${LLAMA_DATE} (chain-slice figures copied from the desk map; not reproduced).`,
});

export const HARVEST = {
  // ---------------------------------------------------------------- PRD seed set
  pons: {
    sources: {
      map: "PONS token address, DefiLlama fee/volume figures and the desk's Blockscout note (56k holders) for Pons",
      workbook: "Sheet 02 row for $PONS: active factory address, a same-ticker token at a different address, fixed 1B supply and buyback claims",
      fill7: "Official 29–31 Aug posts: $4B lifetime volume, $20.93M paid to creators in 47 days, 29% of supply burned; DefiLlama Pons V2 row",
      fill17: "Desk auditor's Blockscout 4663 check: PONS / PonsLauncherToken present, 56,062 holders; 0x07f5b682… is not a contract on this chain",
      llamaPons: "Pons protocol page: 24h fees, revenue and DEX volume as copied into the desk map",
      dossier: "Chain File dossier: feed items (20 Aug pair-with-any-RWA post, 30 Aug Longbow collateral listing, 30 Aug RH Daily / Squeeze board note)",
    },
    deployments: [
      { label: "PONS token (PonsLauncherToken)", address: "0x39dBED3a2bd333467115dE45665cC57F813C4571", role: "token", sources: ["map", "fill17", "workbook"] },
      { label: "Active launch factory (workbook sheet 02)", address: "0xA5aAb3F0c6EeadF30Ef1D3Eb997108E976351feB", role: "factory", sources: ["workbook"] },
      { label: "V2 curve / graduation router", address: "not-verified", role: "router", sources: [] },
    ],
    positive: [
      { text: "The desk's auditor reported the PONS token contract present on Blockscout 4663 with 56,062 holders and a source-verified contract.", sources: ["fill17"] },
      { text: "The official account posted $4B in lifetime volume (31 Aug), $20.93M paid to token creators in 47 days (30 Aug) and 29% of PONS supply burned (29 Aug).", sources: ["fill7"] },
      { text: "DefiLlama listed Pons V2 with roughly $86.5M 24h volume and $4.7M 24h fees on 2026-08-31.", sources: ["llamaPons", "map"] },
    ],
    risk: [
      { text: "The workbook records a token with the PONS ticker at a different address (0xe306c19C72131B0a8f311648fa63FE8CeDf44571, 92 holders); only the address above is treated as the project token.", sources: ["workbook"] },
      { text: "An Ethereum address circulating under the $PONS cashtag (0x07f5b682…) is not a contract on chain 4663 per the desk's explorer check; two accounts, including Longbow's official one, posted it as the Pons token.", sources: ["fill17", "fill7"] },
    ],
    unresolved: ["Whether 0xA5aAb3F0… is the only active factory: the workbook says 'multiple factory versions' exist."],
    feed: [
      { date: "2026-08-20", kind: "company", title: "Pair with any supported RWA", account: "@ponsdotfamily", sourceUrl: X("@ponsdotfamily"), sources: ["dossier"],
        body: "The account posted that its launchpad can pair and launch a new token against any Robinhood Stock Token it supports, from GME to AAPL." },
      { date: "2026-08-29", kind: "company", title: "29% of supply burned", account: "@ponsdotfamily", sourceUrl: X("@ponsdotfamily"), sources: ["fill7"],
        body: "The account posted that 29% of PONS supply had been burned and that 80% of protocol revenue accumulates PONS." },
      { date: "2026-08-30", kind: "company", title: "$20.93M paid to creators", account: "@ponsdotfamily", sourceUrl: X("@ponsdotfamily"), sources: ["fill7"],
        body: "The account posted that $20.93M had been paid to token creators in 47 days." },
      { date: "2026-08-30", kind: "onchain", title: "Listed as Longbow collateral", account: "@longbowlend", sourceUrl: X("@longbowlend"), sources: ["dossier"],
        body: "Longbow posted that PONS can be posted as collateral to borrow USDG on its Morpho-based markets." },
      { date: "2026-08-30", kind: "ct", title: "Board leader and TWAP depth", account: "@UseSqueeze_RH", sourceUrl: X("@UseSqueeze_RH"), sources: ["dossier"],
        body: "A Squeeze thread cited a roughly $258 million market-cap snapshot for PONS and about 20,000 Uniswap v3 TWAP observations on its pool; RH Daily's 24-hour boards listed PONS alongside CASHCAT." },
      { date: "2026-08-31", kind: "company", title: "$4B lifetime volume", account: "@ponsdotfamily", sourceUrl: X("@ponsdotfamily"), sources: ["fill7"],
        body: "The account posted that $4B in total volume had been traded through Pons." },
      llamaItem("Pons V2", "about $86.5M 24h volume, $4.7M 24h fees and $868,850 24h revenue", "llamaPons"),
    ],
  },

  mancer: {
    sources: {
      map: "Desk lifecycle reading for Mancer: beta gated to Chain Mancers / StonkBrokers, router and order audit in progress, no public-open post through 31 Aug",
      workbook: "Sheet 02 row for $MANCER: token address, 2.5B supply, 5,000 Chain Mancers NFTs, Anvil AMM link, Clutch Markets build credit",
      fill1: "X 2026-08-14 beta-live post and 2026-08-25 formal-audit post as summarised by the desk",
      fill9: "Desk check on 2026-08-31: no 'we're public' post after the 25 Aug audit note; StonkBrokers ICO boost plans a Mancer TWAP",
    },
    deployments: [
      { label: "$MANCER token (workbook sheet 02)", address: "0xc72f232a6869e6cf34dc06129affd07f8a2a246a", role: "token", sources: ["workbook"] },
      { label: "Aggregator router", address: "not-verified", role: "router", sources: [] },
    ],
    positive: [
      { text: "The project posted on 2026-08-14 that its aggregator and order layer was live in beta for Chain Mancers and StonkBrokers holders, and on 2026-08-25 that a formal audit of the router and order contracts was under way with public access to follow.", sources: ["fill1", "map"] },
      { text: "The workbook records each Chain Mancer NFT as backed by 500k MANCER, with 1,250 NFTs reserved to back an Anvil LP.", sources: ["workbook"] },
    ],
    risk: [
      { text: "No public-open post was found through 2026-08-31; the census lifecycle was moved from mainnet to beta on the desk's reading of the project's own posts.", sources: ["fill9", "map"] },
    ],
    unresolved: ["Whether the audit announced on 2026-08-25 has been published; no report was found in this review."],
    feed: [
      { date: "2026-08-14", kind: "company", title: "Beta live, gated", account: "@MancerXYZ", sourceUrl: X("@MancerXYZ"), sources: ["fill1"],
        body: "The account posted that the aggregator and order layer was live in beta for Chain Mancers and StonkBrokers holders, with others needing an invite." },
      { date: "2026-08-25", kind: "company", title: "Router and order audit in progress", account: "@MancerXYZ", sourceUrl: X("@MancerXYZ"), sources: ["fill1"],
        body: "The account posted that a formal audit of the router and order contracts was expected to complete by the end of the week, with public access once done." },
    ],
  },

  "artificial-inu": {
    sources: {
      map: "Desk handle for Artificial Inu and its vault-plus-pool NVDA claim (about $1.7M, roughly 20% of tokenized NVDA on the chain)",
      fill4: "Official 30–31 Aug posts: pool and community vault NVDA holdings, snapshot figures, $3M of AI burned or locked, AI-pair lock/burn mechanism",
      workbook: "Sheet 05 row: AI/NVDA pair on long.xyz launched 14 Jul 2026; roughly $86M RWA-side volume in the Dune table",
      dossier: "Chain File dossier: 25 Aug RH Daily board mention",
    },
    deployments: [
      { label: "$AI token (PRD Appendix A)", address: "0x2E8c31162b855A2ffa90F6F8634643Ad6F111e18", role: "token", sources: [] },
      { label: "Community vault", address: "not-verified", role: "vault", sources: [] },
    ],
    positive: [
      { text: "The official account posted that the AI/NVDA pool and community vault held about $1.7M of NVDA (up $250k day over day on 29 Aug), 8,599 NVDA in total, and that this was 20.16% of all tokenized NVDA on Robinhood Chain.", sources: ["fill4", "map"] },
      { text: "The official account posted that $3M of $AI had been burned or locked since AI-pairs launched, and that every AI-paired token locks $AI in its pool and burns $AI per trade.", sources: ["fill4"] },
      { text: "The workbook's Dune extract puts the AI/NVDA pair at roughly $86M of RWA-side volume since its 14 Jul launch on long.xyz.", sources: ["workbook"] },
    ],
    risk: [],
    unresolved: ["Vault balances and burn totals are the project's own figures and have not been reproduced on chain."],
    feed: [
      { date: "2026-08-25", kind: "ct", title: "On the 24h board", account: "@RHDaily__", sourceUrl: X("@RHDaily__"), sources: ["dossier"],
        body: "RH Daily's 24-hour list included $AI next to INDEX." },
      { date: "2026-08-30", kind: "company", title: "Vault and pool NVDA holdings", account: "@ArtificiallyInu", sourceUrl: X("@ArtificiallyInu"), sources: ["fill4"],
        body: "The account posted that the pool and community vault held $1.7M of NVDA, 8,599 NVDA in total, and about 20% of all tokenized NVDA on Robinhood Chain; a snapshot in the same thread cited $21.45M across markets and 23,756 holders." },
      { date: "2026-08-31", kind: "company", title: "$3M AI burned or locked", account: "@ArtificiallyInu", sourceUrl: X("@ArtificiallyInu"), sources: ["fill4"],
        body: "The account posted that $3M of $AI had been burned or locked since AI-pairs launched." },
    ],
  },

  longshot: {
    sources: {
      map: "Desk handle and tree placement for Longshot (stock-paired factory with an imported perps leg)",
      workbook: "Sheet 02 row for LONGSHOT: multi-chain launch protocol (RH, Base, Solana, BNB, HyperEVM); fees fund a fixed Hyperliquid perp, holder rewards and the protocol; creator picks underlying, direction and leverage at launch",
    },
    deployments: [{ label: "RH Chain token (PRD Appendix A)", address: "0x8701E2C87ade58325601f4F9bf37ADF46Cb75745", role: "token", sources: ["workbook"] }],
    positive: [
      { text: "The workbook describes a launch where the creator fixes the Hyperliquid underlying, direction and leverage at launch, with those parameters immutable afterward; the desk places it as a stock-paired factory with an imported perps leg.", sources: ["workbook", "map"] },
    ],
    risk: [
      { text: "The workbook notes the name sits next to long.xyz (LONG) and Longbow (BOW); the products differ and are separate rows here.", sources: ["workbook"] },
    ],
    unresolved: [],
    feed: [],
  },

  long: {
    sources: {
      map: "Desk handle and placement for LONG (stock-paired factory)",
      workbook: "Sheet 02 and sheet 04 rows for LONG / long.xyz: Dune figures (about 10.6k launched, 5.6k traded, 4,061 RWA-paired, about 70% RWA-pair volume share), TickerAirlockFactory named on Dune, live since 14 Jul 2026",
      fill1: "Desk's machine card: LONG is a stock-paired factory, not a curve pad and not a hook marketplace",
    },
    deployments: [
      { label: "Factory (PRD lists 0x9c88…0845, truncated)", address: "not-verified", role: "factory", sources: [] },
      { label: "Factory (PRD lists 0x22e9…eeED, truncated)", address: "not-verified", role: "factory", sources: [] },
      { label: "TickerAirlockFactory (named on Dune per the workbook)", address: "not-verified", role: "factory", sources: ["workbook"] },
    ],
    positive: [
      { text: "The workbook's Dune extract records about 10.6k tokens launched and 5.6k traded on LONG, 4,061 of them paired to a Stock Token, with roughly 70% of the venue's volume on RWA pairs.", sources: ["workbook"] },
      { text: "The desk's machine card places LONG as a stock-paired factory (a new token against NVDA or another Stock Token), not a bonding-curve pad and not a hook marketplace.", sources: ["fill1", "map"] },
    ],
    risk: [],
    unresolved: ["Which factory is the factory of record for a given stock pair when both LONG and Bankr mint stock-paired tokens (desk gap)."],
    feed: [
      { date: "2026-08-30", kind: "onchain", title: "Dune launch counts (workbook)", sourceUrl: ARTIFACTS.workbook.url, sources: ["workbook"],
        body: "The workbook's Dune extract (mid-August snapshot) lists about 10.6k tokens launched on LONG, 4,061 paired to a Stock Token, and the AI/NVDA pair at roughly $86M RWA-side volume." },
    ],
  },

  stonkbroker: {
    sources: {
      llama: "DefiLlama chain page: StonkBrokers TVL, fees and revenue rows as copied into the desk map (2026-08-31)",
      map: "Desk handle, DefiLlama rows (parent TVL about $25.6M, fees, revenue, Anvil and pad volume) and STORMM / Leverage Machine notes for StonkBrokers",
      workbook: "Sheet 02–03 rows for $STONKBROKER: 4,444 ERC-6551 NFTs minted 17 Jul 2026, token address, activation mechanics, incubated MANCER / TickerYard / Oakmont, several other contracts share the name",
      fill7: "Official 29 Aug STORMM post and founder thread: Uniswap v4 LP that is also options inventory; Leverage Machine NFT options announced for September 2026",
      fill8: "Aster listing $STONKBROKER 5x perps (30 Aug)",
      dossier: "Chain File dossier: HoodScan top-volume note (30 Aug)",
    },
    deployments: [
      { label: "$STONKBROKER token (CollectionToken, workbook sheet 02)", address: "0xe934e36a439c94017b64a3fece66af12099abf50", role: "token", sources: ["workbook"] },
      { label: "NFT collection (ERC-721 + ERC-6551)", address: "not-verified", role: "token", sources: [] },
      { label: "Anvil AMM", address: "not-verified", role: "other", sources: [] },
    ],
    positive: [
      { text: "The workbook records 4,444 ERC-6551 broker NFTs minted on 2026-07-17, each owning a token-bound wallet pre-seeded with Stock Tokens, with activation paid in $STONKBROKER (half burned).", sources: ["workbook"] },
      { text: "DefiLlama listed StonkBrokers with about $25.6M parent TVL, $33,776 24h fees and $18,835 24h revenue on 2026-08-31 per the desk map.", sources: ["map"] },
      { text: "The official account posted on 2026-08-29 a spec for STORMM, a Uniswap v4 hook overlay where LP positions also serve as options inventory, and announced a Leverage Machine of NFT-minted options (no liquidations) for September 2026.", sources: ["fill7"] },
    ],
    risk: [
      { text: "The workbook states at least four other contracts share the StonkBroker name; only the token address above is treated as the project's.", sources: ["workbook"] },
      { text: "The workbook notes activation resets on transfer, so a bought NFT does not carry the prior holder's reward weight.", sources: ["workbook"] },
    ],
    unresolved: ["DefiLlama shows about $25.6M parent TVL against $1.05M on its launchpad page — a parent/child split the desk could not explain."],
    feed: [
      { date: "2026-08-29", kind: "company", title: "STORMM spec and Leverage Machine", account: "@ClutchMarkets", sourceUrl: X("@ClutchMarkets"), sources: ["fill7"],
        body: "The account posted a specification for STORMM (Stock Token Optimized Regenerative Market Maker): Uniswap v4 pools where LPs earn swap fees, options premiums and Stock Token multiplier dividends, and announced a September Leverage Machine of NFT options with no liquidations." },
      { date: "2026-08-30", kind: "onchain", title: "Aster lists a 5x perp", account: "@deltaliquidity", sourceUrl: X("@deltaliquidity"), sources: ["fill8"],
        body: "A Delta post noted Aster listing $STONKBROKER 5x perps alongside $DELTA 3x." },
      { date: "2026-08-30", kind: "onchain", title: "HoodScan top-volume table", sourceUrl: "https://www.hood-chain.com/tokens", sources: ["dossier"],
        body: "The dossier notes the token near the top of HoodScan's table by 24h volume and liquidity — a snapshot, not a valuation." },
      llamaItem("StonkBrokers", "about $25.6M parent TVL, $33,776 24h fees and $18,835 24h revenue"),
    ],
  },

  index: {
    sources: {
      llama: "DefiLlama chain page: The Index revenue rows as copied into the desk map (2026-08-31)",
      map: "Desk handle and DefiLlama revenue figures ($24,321 24h, $151,043 7d) for The Index",
      workbook: "Sheet 02 row for $INDEX: token address, 3% trade fee buying Stock Tokens every 15 minutes, >$1M distributed, rwa.wtf and Indices products, 1B supply",
      dossier: "Chain File dossier: 17 Jul 'Stocks for Everyone' writeup figures, token address, 25 Aug RH Daily board mention",
      fill9: "Official 30 Aug 'dividend layer of Robinhood' post",
      fill13: "HoodInsider weekly recap (media claim): $355K stock rewards, $5M+ RWA volume",
    },
    deployments: [
      { label: "INDEX token", address: "0x56910d4409f3a0c78c64dd8d0545ff0705389870", role: "token", sources: ["dossier", "workbook"] },
      { label: "Distributor / hook", address: "not-verified", role: "other", sources: [] },
    ],
    positive: [
      { text: "The project's 17 Jul writeup, as carried by the dossier, describes a 3% tax on trades funding Stock Token distributions every 15 minutes, with 75% of related fees buying tokenized stocks and 25% deepening liquidity.", sources: ["dossier", "workbook"] },
      { text: "DefiLlama listed The Index with $24,321 24h and $151,043 7d revenue on 2026-08-31 per the desk map.", sources: ["map"] },
    ],
    risk: [
      { text: "Distribution size is volume-reflexive by design; the dossier flags that the hook whitelist and fee routing need a contract read.", sources: ["dossier"] },
    ],
    unresolved: ["The project's claim of about $1M in Stock Tokens distributed (workbook: over $1M) has not been reproduced on chain."],
    feed: [
      { date: "2026-07-17", kind: "company", title: "Stocks for Everyone writeup", account: "@TheIndexFi", sourceUrl: X("@TheIndexFi"), sources: ["dossier"],
        body: "The account posted that a 3% tax funds Stock Token distributions every 15 minutes, that a Zap compounds distributed stocks back into INDEX, and cited about $1M in RWAs distributed with a single 15-minute round above $155k." },
      { date: "2026-08-25", kind: "ct", title: "On the RH Daily board", account: "@RHDaily__", sourceUrl: X("@RHDaily__"), sources: ["dossier"],
        body: "RH Daily's trending list placed INDEX next to CASHCAT, PONS, FOX and AI." },
      { date: "2026-08-30", kind: "company", title: "The dividend layer of Robinhood", account: "@TheIndexFi", sourceUrl: X("@TheIndexFi"), sources: ["fill9"],
        body: "The account described the product as on-chain volume converted into tokenized-equity rewards for holders." },
      { date: "2026-08-30", kind: "ct", title: "HoodInsider recap figures", account: "@HoodInsider_", sourceUrl: X("@HoodInsider_"), sources: ["fill13"],
        body: "A HoodInsider weekly recap cited $355K in stock rewards and over $5M of RWA volume for The Index; the desk treats the recap as media claims to reproduce." },
      llamaItem("The Index", "$24,321 24h revenue and $151,043 7d revenue"),
    ],
  },

  arrow: {
    sources: {
      map: "Desk lifecycle reading (announced; open dated 2026-08-31 09:30 ET), aUSD / ARROW / ArrowPad addresses and Blockscout notes for Arrow Finance",
      workbook: "Sheet 02 row for $ARROW / Arrow Finance: CDP minting aUSD against Stock Tokens, ETFs, WETH and USDG; token and aUSD addresses; name collisions with a Solana-origin launcher and the $ARROWS options protocol",
      fill6: "Official pre-open parameters: 16 collateral markets, 75–90% initial max LTV, about $1.6M aggregate aUSD cap, equity collateral only during US cash hours, aUSD LP moved to an up v3 pool",
      fill13: "29 Aug post: stability pool rewritten into risk-tiered pools after the Sherlock review; 'everything is deployed', caps raised after the green light",
      fill17: "Desk auditor's Blockscout 4663 check: ARROW / ArrowToken 6,886 holders (source verified) and aUSD / Arrow USD 21 holders (source unverified), same creator",
      desk: "Desk account ledger: @ArrowFinanceHQ and @arrowfinances flagged as unconfirmed accounts; only @ArrowFinanceio treated as official",
    },
    deployments: [
      { label: "ARROW token (ArrowToken)", address: "0xf2915d1e3C1B0c769d0c756Ec43F1c1f6c99cD03", role: "token", sources: ["map", "workbook", "fill17"] },
      { label: "aUSD (Arrow USD)", address: "0x4f11d7603D1B0D0f021Db552D8A6d88d7fa38ecf", role: "token", sources: ["map", "workbook", "fill17"] },
      { label: "ArrowPad launch factory (the launchpad, not the CDP)", address: "0x1Badc838AAe6ac41829180744ea2e1C89b452aAe", role: "factory", sources: ["map"] },
      { label: "aUSD liquidity pool on up v3 (per the project's pre-open post)", address: "0x29e3f3d9891cacf213361bcbcb7728970d53baa8", role: "other", sources: ["fill6"] },
      { label: "CDP core", address: "not-verified", role: "vault", sources: [] },
    ],
    positive: [
      { text: "The official account posted pre-open parameters: 16 collateral markets (stables, WETH, tokenized equities and indices), 75–90% initial maximum LTV, about $1.6M aggregate aUSD borrow cap, and equity or index collateral usable only during US cash hours (09:30–16:00 ET) with WETH and stables 24/7.", sources: ["fill6"] },
      { text: "The official account posted on 2026-08-29 that the stability pool had been rewritten into risk-tiered pools so an equity shortfall cannot reach stablecoin or wstETH providers, following a Sherlock review.", sources: ["fill13"] },
      { text: "The desk's auditor reported both the ARROW token (source verified, 6,886 holders) and aUSD (source unverified, 21 holders) present on Blockscout 4663 with the same creator.", sources: ["fill17"] },
    ],
    risk: [
      { text: "The aUSD contract was reported on Blockscout without verified source; the CDP's own contracts were not located in this review.", sources: ["fill17"] },
      { text: "Two further X accounts using the Arrow name (@ArrowFinanceHQ, @arrowfinances) were flagged by the research desk as unconfirmed; only @ArrowFinanceio is treated as the project's account in this file.", sources: ["desk"] },
      { text: "The workbook records unrelated products using the Arrow name on this chain: a Solana-origin token launcher (launcharrow.xyz) and the separate Arrows options protocol.", sources: ["workbook"] },
    ],
    unresolved: ["Whether the CDP opened at 09:30 ET on 2026-08-31: the desk's last check preceded the open and found no 'we're live' post. Lifecycle stays announced until an official post or on-chain activity is reviewed."],
    feed: [
      { date: "2026-08-29", kind: "company", title: "Risk-tiered stability pools after Sherlock", account: "@ArrowFinanceio", sourceUrl: X("@ArrowFinanceio"), sources: ["fill13"],
        body: "The account posted that the stability pool had been rewritten into risk-tiered pools so an equity shortfall cannot hit stablecoin or wstETH providers, that everything was deployed, and that caps would be raised after the Sherlock green light." },
      { date: "2026-08-30", kind: "company", title: "Mainnet dated for 31 Aug 09:30 ET", account: "@ArrowFinanceio", sourceUrl: X("@ArrowFinanceio"), sources: ["fill6"],
        body: "The account posted that mainnet would open on Monday 2026-08-31 at 09:30 ET with 16 collateral markets, an aggregate aUSD cap of about $1.6M, equity collateral usable in US cash hours only, and the aUSD LP moved to an up v3 pool." },
      { date: "2026-08-31", kind: "onchain", title: "Token contracts on Blockscout", sourceUrl: "https://robinhoodchain.blockscout.com", sources: ["fill17"],
        body: "The desk's auditor reported ARROW (6,886 holders, source verified) and aUSD (21 holders, source unverified) present on Blockscout 4663 with the same creator; a token existing is not evidence the CDP is open." },
      { date: "2026-08-30", kind: "risk", title: "Name collisions", sourceUrl: ARTIFACTS.workbook.url, sources: ["workbook", "desk"],
        body: "The workbook and the desk list unrelated products and accounts using the Arrow name: Arrows (options), ArrowPad (launchpad), a Solana-origin launcher, and two unconfirmed X accounts." },
    ],
  },

  bankr: {
    sources: {
      map: "Desk handle and note for Bankr: continuously deploying stock-paired tokens (TSM, MSFT, QQQ) on 2026-08-31; those tokens are graduations",
      workbook: "Sheet 04 row for Bankr: agent-native launchpad, stock pairing added about 20 Jul, Dune figures (about 85k launched, 11k traded, 2,244 RWA-paired, about 36% RWA volume share)",
      dossier: "Chain File dossier: 30 Aug TEST airdrop demo post, multicurve launch with a 0.665% creator fee cited",
      fill1: "Desk's machine card: Bankr is an agent wallet that also mints stock-paired tokens; tonight's TAYSOM/TSM, SBC/MSFT, CQ/QQQ are graduations",
    },
    deployments: [{ label: "Stock-paired launch factory", address: "not-verified", role: "factory", sources: ["fill1"] }],
    positive: [
      { text: "The workbook's Dune extract records about 85k tokens launched and 11k traded through Bankr, 2,244 paired to a Stock Token, with roughly 36% of its volume on RWA pairs.", sources: ["workbook"] },
      { text: "The desk observed the account deploying stock-paired tokens (TSM, MSFT, QQQ pairs) on 2026-08-31; those tokens are pad outputs, not subjects.", sources: ["fill1", "map"] },
    ],
    risk: [
      { text: "The dossier notes the bot can launch tokens on user instruction and that a 30 Aug 'TEST' airdrop was a skill demo, not a distribution.", sources: ["dossier"] },
    ],
    unresolved: ["No Bankr-specific contract address was found in either intake; whether launches route through its own factory or others is unverified."],
    feed: [
      { date: "2026-08-30", kind: "company", title: "TEST airdrop skill demo", account: "@bankrbot", sourceUrl: X("@bankrbot"), sources: ["dossier"],
        body: "The account posted a claim of 20,000 TEST on Robinhood Chain as a demonstration of an airdrop skill." },
      { date: "2026-08-31", kind: "company", title: "Stock-paired deployments", account: "@bankrbot", sourceUrl: X("@bankrbot"), sources: ["fill1"],
        body: "The account posted new stock-paired tokens (TAYSOM/TSM, SBC/MSFT, CQ/QQQ); the desk files these as graduations." },
    ],
  },

  meridian: {
    sources: {
      llama: "DefiLlama chain page: Meridian Perps and Meridian Predict TVL rows as copied into the desk map (2026-08-31)",
      map: "Desk handle and DefiLlama TVL rows for Meridian (Perps about $2.5M, Predict about $265k); lifecycle set to mainnet on that listing",
      workbook: "Sheet 06 row for Meridian: RWA perps and prediction markets with USDe settlement, no RH-native token widely cited",
      fill2: "Desk's prediction-market split: Meridian (DefiLlama-live) versus Sight (NFT mint 2 Sep)",
    },
    deployments: [],
    positive: [
      { text: "DefiLlama listed Meridian Perps with about $2.5M TVL and Meridian Predict with about $265k TVL on Robinhood Chain on 2026-08-31 per the desk map.", sources: ["map"] },
      { text: "The workbook describes Meridian as RWA perps and prediction markets settling in USDe with no widely cited native token; the desk keeps it separate from Sight, a second prediction-market name with an NFT mint on 2026-09-02.", sources: ["workbook", "fill2"] },
    ],
    risk: [],
    unresolved: ["Lifecycle was moved from announced to mainnet on the DefiLlama listing alone; no official post or contract was reviewed. The workbook's USDe-settlement description is unverified."],
    feed: [
      llamaItem("Meridian Perps and Meridian Predict", "about $2.5M and $265k TVL respectively"),
    ],
  },

  "statics-protocol": {
    sources: {
      map: "Desk handle, token address and 30–31 Aug reading for Statics: v4 hooks DEX not live, Genesis epoch, credit off, USDstx designed",
      workbook: "Sheet 02–03 rows for $STATICS: 1B fixed supply, 800M across six Doppler curves at launch, 5,555 Operator NFTs backed by 180k STATICS each plus an ETH reserve, Genesis pair about two days old on 30 Aug",
      fill2: "Official 30–31 Aug posts: stake STATICS and pick 12 assets for a cut of pools; Operators borrow up to 95% LTV; USDstx options-based stable; DEX not live",
    },
    deployments: [
      { label: "STATICS token", address: "0x2d8d6F4A93AcD7a916A5a654ec8b690bA3B3EAdd", role: "token", sources: ["map", "workbook"] },
      { label: "Genesis system", address: "not-verified", role: "other", sources: [] },
    ],
    positive: [
      { text: "The workbook records a fixed 1B supply with 800M sold across six Doppler curves at launch and 5,555 Operator NFTs each backed by 180k STATICS plus a compounding ETH reserve.", sources: ["workbook"] },
      { text: "The official account posted on 30–31 Aug a design where STATICS stakers pick any 12 assets and earn from every pool trading them, Operators can borrow up to 95% against their backing, and a USDstx options-based stable is planned.", sources: ["fill2"] },
    ],
    risk: [
      { text: "Per the project's own posts the hooks DEX is not live, credit is not enabled and the Genesis epoch is in progress; the census lifecycle was moved from mainnet to beta on that reading.", sources: ["fill2", "map"] },
    ],
    unresolved: ["The workbook warns to separate Genesis mainnet addresses from leftover testnet (chain 46630) addresses in the docs."],
    feed: [
      { date: "2026-08-30", kind: "company", title: "Genesis epoch; DEX not live", account: "@StaticsProtocol", sourceUrl: X("@StaticsProtocol"), sources: ["fill2"],
        body: "The account posted that the Uniswap v4 hooks DEX was not yet live, that the Genesis epoch was in progress and credit not enabled, and described staking STATICS to pick 12 assets for a share of every pool trading them." },
      { date: "2026-08-31", kind: "company", title: "USDstx design", account: "@StaticsProtocol", sourceUrl: X("@StaticsProtocol"), sources: ["fill2"],
        body: "The account described USDstx, an options-based stable with senior and junior risk series and a pegged stability module, as a design." },
    ],
  },

  safehood: {
    sources: {
      map: "Desk handle (@_safehood), token-candidate address and note for Safehood: Uniswap V3 pad from 15 Jul, no curve, factory rebuilt the same day, quiet since 16 Jul",
      fill16: "Official 15 Jul posts as summarised by the desk: free to launch, 1B supply, $2k starting cap, 2% max tx/wallet until $40k, first fee post 100% creator then rebuild at 80/20; site token page address; last posts 16 Jul",
      fill6: "Desk split: census Safehood (the pad) versus the $SAFEHOOD Pons graduation using Sinjoh (@safehoodonrh)",
    },
    deployments: [
      { label: "Safehood pad token (candidate — from the safehood.fun token page URL)", address: "0x262b60af42c46bd09c00069cd0dcb2ae0093034b", role: "token", sources: ["fill16", "map"] },
      { label: "Launch factory (rebuilt 15 Jul per the project)", address: "not-verified", role: "factory", sources: [] },
    ],
    positive: [
      { text: "The official account posted on 2026-07-15 that launches go to Uniswap V3 from block one with no bonding curve, are free apart from gas, and carry a 2% per-transaction and per-wallet cap until a $40k market cap that then clears itself on chain.", sources: ["fill16"] },
    ],
    risk: [
      { text: "The official account posted the same day that the first factory had bugs and had been replaced by a new, ownerless-at-launch factory, with the fee split moving from 100% creator to 80% creator / 20% platform.", sources: ["fill16"] },
      { text: "A token with the SAFEHOOD ticker at a different address (0x663492eab45ed21d6bdd7836efdc1a9cd51ae199, @safehoodonrh) is a Pons graduation using Sinjoh's fee router and is not this protocol.", sources: ["fill6", "map"] },
    ],
    unresolved: ["The official account's last posts are dated 2026-07-16; the desk recorded lifecycle as unknown and this file records announced pending deployment evidence."],
    feed: [
      { date: "2026-07-15", kind: "company", title: "Pad launched on Uniswap V3; factory rebuilt", account: "@_safehood", sourceUrl: X("@_safehood"), sources: ["fill16"],
        body: "The account posted a Uniswap V3 pad with no bonding curve and free launches, then the same day that the first factory had bugs and a new ownerless factory was live with an 80% creator / 20% platform fee split." },
    ],
  },

  "robinhood-index-vaults": {
    sources: { map: "Desk placement for Robinhood Index Vaults (rwa-products/index-vault, testnet-only, no handle)" },
    deployments: [{ label: "Vault (testnet)", address: "not-verified", role: "vault", sources: [] }],
    positive: [
      { text: "The desk map keeps Robinhood Index Vaults as testnet-only under rwa-products/index-vault with no official X handle found.", sources: ["map"] },
    ],
    risk: [],
    unresolved: [],
    feed: [],
  },

  vimen: {
    sources: {
      llama: "DefiLlama chain page: Vimen TVL row under Indexes as copied into the desk map (2026-08-31)",
      map: "Desk handle and DefiLlama TVL ($9,208) for Vimen",
      workbook: "Sheet 03 row for Vimen baskets: MAG7 and AI6 baskets of official Stock Tokens with in-kind redemption; HOOD6 is a crypto basket, not stocks; site vimen.org",
    },
    deployments: [{ label: "Basket custody", address: "not-verified", role: "vault", sources: [] }],
    positive: [
      { text: "The workbook lists MAG7 (AAPL/MSFT/GOOGL/AMZN/META/NVDA/TSLA) and AI6 (NVDA/AMD/MU/PLTR/GOOGL/SPCX) as fully backed baskets of Stock Tokens redeemable for the underlying.", sources: ["workbook"] },
      { text: "DefiLlama listed Vimen under Indexes with about $9,208 TVL on 2026-08-31 per the desk map.", sources: ["map"] },
    ],
    risk: [
      { text: "The workbook notes HOOD6 is a basket of chain-native tokens (CASHCAT, ARROW, HOODRAT, VIBECAT, VEX, VIRTUAL), not Stock Tokens.", sources: ["workbook"] },
    ],
    unresolved: [],
    feed: [llamaItem("Vimen", "about $9,208 TVL under Indexes")],
  },

  // ---------------------------------------------------------------- desk subjects
  up: {
    sources: {
      llama: "DefiLlama chain page: up v2/v3 TVL, volume and revenue rows as copied into the desk map (2026-08-31)",
      map: "Desk handle, DefiLlama figures (v3 TVL about $7.76M, v2 about $700k, 24h volume about $37.1M, 24h revenue $72,972) and note for up: native (3,3), highest native AMM TVL after Uniswap",
      fill13: "HoodInsider weekly recap (media claim): $200M+ volume, 220M UP burned (44%)",
      fill6: "Arrow's aUSD LP migrated to an up v3 pool (pool address in the Arrow row)",
    },
    deployments: [
      { label: "Factory / router", address: "not-verified", role: "factory", sources: [] },
      { label: "UP token", address: "not-verified", role: "token", sources: [] },
    ],
    positive: [
      { text: "DefiLlama listed up v3 with about $7.76M TVL and up v2 with about $700k, roughly $37.1M 24h volume and $72,972 24h revenue on 2026-08-31 per the desk map.", sources: ["map"] },
      { text: "Arrow Finance posted that its aUSD liquidity had been moved to an up v3 pool ahead of its 31 Aug open.", sources: ["fill6"] },
    ],
    risk: [],
    unresolved: ["The HoodInsider recap's $200M+ cumulative volume and 220M UP burned (44%) are media claims not reproduced."],
    feed: [
      { date: "2026-08-30", kind: "ct", title: "HoodInsider recap figures", account: "@HoodInsider_", sourceUrl: X("@HoodInsider_"), sources: ["fill13"],
        body: "A HoodInsider weekly recap cited over $200M of volume through up and 220M UP burned (44% of supply); the desk treats the recap as media claims." },
      llamaItem("up v3 and v2", "about $7.76M and $700k TVL, roughly $37.1M 24h volume and $72,972 24h revenue"),
    ],
  },

  fables: {
    sources: {
      llama: "DefiLlama chain page: Fables TVL and volume rows as copied into the desk map (2026-08-31)",
      map: "Desk handle, DefiLlama figures (TVL about $2.24M, 24h volume about $11.9M) and note for Fables: Uniswap v4 hooks, $PROLOGUE, bio address unverified",
      workbook: "Sheet 06 row for Fables / Prologue: ve(3,3) DEX on Uniswap v4 hooks for NVDA/USDG, SPY/USDG, GLD/USDG with dynamic fees; described as not launched on 30 Aug with a PROLOGUE TGE cited for 5 Oct 2026",
      fill10: "Official 30 Aug note: liquidity-based points live",
      fill13: "HoodInsider weekly recap (media claim): Fables TVL $300K+",
      desk: "Desk account row: @fablesfi official, Llama volume 'real enough to follow'; PROLOGUE bio address 0xb9972CA7188e511174947E3936a5315ac7073277 recorded in the accounts intake",
    },
    deployments: [
      { label: "$PROLOGUE token (account bio, per the desk)", address: "0xb9972CA7188e511174947E3936a5315ac7073277", role: "token", sources: ["desk"] },
      { label: "Hook / gauge contracts", address: "not-verified", role: "other", sources: [] },
    ],
    positive: [
      { text: "DefiLlama listed Fables with about $2.24M TVL and $11.9M 24h volume on 2026-08-31 per the desk map.", sources: ["map"] },
      { text: "The workbook describes a ve(3,3) DEX built on Uniswap v4 hooks for Stock Token pairs (NVDA/USDG, SPY/USDG, GLD/USDG) with dynamic fees.", sources: ["workbook"] },
      { text: "The official account posted on 2026-08-30 that liquidity-based points were live.", sources: ["fill10"] },
    ],
    risk: [],
    unresolved: ["The workbook (30 Aug) described Fables as not launched with a PROLOGUE TGE cited for 5 Oct 2026, while the desk map and DefiLlama list it live with TVL and volume on 31 Aug. Which product is live has not been resolved."],
    feed: [
      { date: "2026-08-30", kind: "company", title: "Liquidity points live", account: "@fablesfi", sourceUrl: X("@fablesfi"), sources: ["fill10"],
        body: "The account posted that liquidity-based points were live." },
      { date: "2026-08-30", kind: "ct", title: "HoodInsider recap figure", account: "@HoodInsider_", sourceUrl: X("@HoodInsider_"), sources: ["fill13"],
        body: "A HoodInsider weekly recap cited Fables TVL above $300K; the desk treats the recap as a media claim." },
      llamaItem("Fables", "about $2.24M TVL and $11.9M 24h volume"),
    ],
  },

  denar: {
    sources: {
      dossier: "Chain File dossier: Denar went live 30 Aug — isolated money markets for tokenized equities, Chainlink priced, points campaign, dUSD minting window announced; token address posted to DexScreener verify and site footer",
      map: "Desk handle and note for Denar: claimed live 2026-08-30, address in post unverified, not on the DefiLlama TVL dump",
      fill3: "Official 30 Aug posts summarised by the desk: live, Chainlink priced, seeded with 10k USDG, caps of $2,500 per vault to be raised to $5k on a timelock, about 0.05% APR",
      desk: "Desk account row: @DenarMarkets official; address still unverified on Blockscout at the desk",
    },
    deployments: [
      { label: "DENAR token (posted by the project 30 Aug)", address: "0x3786728a2c49c4617bf4fe5bd82b90b6b0df5508", role: "token", sources: ["dossier", "map", "fill3"] },
      { label: "Isolated market contracts", address: "not-verified", role: "vault", sources: [] },
    ],
    positive: [
      { text: "The official account posted on 2026-08-30 that markets were live: lend USD or borrow against Stock Tokens in isolated markets priced by Chainlink, seeded with 10k USDG, with per-vault caps of $2,500 to be raised to $5,000 on a timelock.", sources: ["fill3", "dossier"] },
      { text: "The official account posted a points campaign (one dollar, one day, one point, for lending or borrowing) carrying priority access to a first dUSD minting window.", sources: ["dossier"] },
    ],
    risk: [
      { text: "An independent audit was not found in this review; the dossier records the protocol as day-one with dUSD not yet live.", sources: ["dossier"] },
      { text: "The token address comes from the project's own post and had not been reproduced on Blockscout by the desk.", sources: ["desk", "map"] },
    ],
    unresolved: ["Which contract holds lender deposits is unknown."],
    feed: [
      { date: "2026-08-30", kind: "company", title: "Markets live", account: "@DenarMarkets", sourceUrl: X("@DenarMarkets"), sources: ["dossier", "fill3"],
        body: "The account posted that tokenized stocks now have their own money market on Robinhood Chain: lend USD or borrow against Stock Tokens, priced by Chainlink, seeded with 10k USDG and capped at $2,500 per vault pending a timelocked raise to $5,000." },
      { date: "2026-08-30", kind: "company", title: "Contract address published", account: "@DenarMarkets", sourceUrl: X("@DenarMarkets"), sources: ["dossier"],
        body: "The account posted that the contract address 0x3786728a2c49c4617bf4fe5bd82b90b6b0df5508 had been added to the site footer and docs and submitted to DexScreener." },
      { date: "2026-08-30", kind: "company", title: "Points and dUSD window", account: "@DenarMarkets", sourceUrl: X("@DenarMarkets"), sources: ["dossier"],
        body: "The account posted a points campaign — one dollar, one day, one point, lending or borrowing — with priority access to dUSD's first minting window the following week." },
    ],
  },

  longbow: {
    sources: {
      dossier: "Chain File dossier: Longbow as the native credit layer on Morpho, PONS listed as collateral 30 Aug, TVL crossed $100k, BOW token address, ticker collisions with bow.fun and Bankr memes",
      workbook: "Sheet 02 row for $BOW: Morpho Blue overlay, isolated markets with Chainlink and Uniswap TWAP oracles, zero-fee flash loans, fee split 35% treasury / 30% USDG vault / 25% buyback-burn / 10% stakers, 1B supply, a Bankr-launched token sharing the ticker at 0xf56D9aDAA11dc278638adcDCA8Cf697DDC008ba3",
      map: "Desk handle and note for Longbow: Morpho + Pons, TVL/volume claims unverified on DefiLlama",
      fill14: "Official market posts: GLD/USDG 24 Aug (62.5% max LTV, Uniswap V3 TWAP, isolated), RDDT/USDG 26 Aug (38.5% LTV), PONS/USDG live; the account's 30 Aug post carried an Ethereum address for PONS",
      fill3: "Official 30 Aug figures: $100k TVL, $3M 24h on BOW/SPY, no fixed repayment schedule",
      fill6: "Third-party post (@Mihawk_Research, 29 Aug) citing $58.6k TVL",
    },
    deployments: [
      { label: "BOW token", address: "0x451b42A15100C340CA12F7c66DE06fac5EA2D751", role: "token", sources: ["dossier", "workbook"] },
      { label: "Morpho market contracts (GLD/USDG, RDDT/USDG, PONS/USDG)", address: "not-verified", role: "vault", sources: ["fill14"] },
    ],
    positive: [
      { text: "The official account posted isolated markets on Morpho Blue: GLD/USDG on 2026-08-24 with a 62.5% maximum LTV and a Uniswap V3 TWAP oracle, RDDT/USDG on 2026-08-26 at 38.5% LTV, and PONS/USDG for borrowing USDG against PONS; the desk places the product as a Morpho + Pons credit overlay.", sources: ["fill14", "map"] },
      { text: "The workbook records a lending fee split of 35% treasury, 30% USDG vault, 25% buyback and burn, 10% stakers, and zero-fee flash loans.", sources: ["workbook"] },
      { text: "The official account posted on 2026-08-30 that TVL had crossed $100,000.", sources: ["dossier", "fill3"] },
    ],
    risk: [
      { text: "The official account's 2026-08-30 post gave an Ethereum-cashtag address (0x07f5b682…) as the Pons token; the desk found that address is not a contract on chain 4663. Addresses in the project's posts should not be copied without a check.", sources: ["fill14"] },
      { text: "The BOW ticker is also used by the bow.fun launchpad and by a Bankr-launched token at 0xf56D9aDAA11dc278638adcDCA8Cf697DDC008ba3; only the address above is treated as Longbow's token.", sources: ["workbook", "dossier"] },
    ],
    unresolved: ["TVL: the project posted $100k on 30 Aug; a third-party post cited $58.6k on 29 Aug; DefiLlama had no usable row for the desk. None reproduced."],
    feed: [
      { date: "2026-08-24", kind: "company", title: "GLD/USDG market", account: "@longbowlend", sourceUrl: X("@longbowlend"), sources: ["fill14"],
        body: "The account posted a tokenized-gold collateral market with a 62.5% maximum LTV, a Uniswap V3 TWAP oracle and isolated risk." },
      { date: "2026-08-26", kind: "company", title: "RDDT/USDG market", account: "@longbowlend", sourceUrl: X("@longbowlend"), sources: ["fill14"],
        body: "The account posted an RDDT/USDG market at 38.5% LTV with the same oracle pattern." },
      { date: "2026-08-29", kind: "ct", title: "Third-party TVL figure", account: "@Mihawk_Research", sourceUrl: X("@Mihawk_Research"), sources: ["fill6"],
        body: "A research account posted Longbow TVL at $58.6k; the desk records it as a pointer only." },
      { date: "2026-08-30", kind: "company", title: "TVL crossed $100k; PONS as collateral", account: "@longbowlend", sourceUrl: X("@longbowlend"), sources: ["dossier", "fill3"],
        body: "The account posted that TVL had crossed $100,000, that PONS could be posted as collateral to borrow USDG with no fixed repayment schedule, and cited $3M of 24h volume on BOW/SPY." },
      { date: "2026-08-30", kind: "risk", title: "Address in the project's own post", sourceUrl: ARTIFACTS.fill14.url, sources: ["fill14"],
        body: "The same 30 Aug post carried an Ethereum address (0x07f5b682…) for the Pons token; the desk's explorer check found it is not a contract on chain 4663." },
    ],
  },

  noxa: {
    sources: {
      llama: "DefiLlama chain page: NOXA Fun TVL and fee rows as copied into the desk map (2026-08-31)",
      map: "Desk handle and DefiLlama figures (TVL about $5.43M, 24h fees $123,438, revenue $0) for NOXA Fun",
      workbook: "Sheet 04 row for Noxa: launches straight into Uniswap v3 with no bonding curve, about 60k launched / 59k traded, 0 RWA-paired in the Dune snapshot, origin pad of CASHCAT",
      dossier: "Chain File dossier: early launchpad, CASHCAT-era venue, a 'FakeNoxa' clone named in the original pad dump",
    },
    deployments: [{ label: "Launch factory", address: "not-verified", role: "factory", sources: [] }],
    positive: [
      { text: "DefiLlama listed NOXA Fun with about $5.43M TVL and $123,438 24h fees (revenue $0) on 2026-08-31 per the desk map.", sources: ["map"] },
      { text: "The workbook's Dune extract records about 60k tokens launched and 59k traded on Noxa, none paired to a Stock Token in that snapshot.", sources: ["workbook"] },
    ],
    risk: [
      { text: "The dossier and workbook name clone pads and copy URLs using the Noxa name; only noxa.fun is treated as the project site here.", sources: ["dossier"] },
    ],
    unresolved: [],
    feed: [llamaItem("NOXA Fun", "about $5.43M TVL and $123,438 24h fees")],
  },

  virtuals: {
    sources: {
      llama: "DefiLlama chain page: Virtuals revenue rows as copied into the desk map (2026-08-31)",
      map: "Desk handle and DefiLlama revenue figures ($22,571 24h, $400,084 30d) for Virtuals Protocol; enum gap noted (agent-launch-layer)",
      dossier: "Chain File dossier: FalconX primer figures (4,500+ agents, $150M+ agent volume, $2.3M+ raised) for the Robinhood Chain instance",
      fill13: "HoodInsider weekly recap (media claim): Virtuals agents $270M+ RH volume",
    },
    deployments: [{ label: "Agent launch contracts (RH instance)", address: "not-verified", role: "factory", sources: [] }],
    positive: [
      { text: "DefiLlama listed Virtuals with $22,571 24h and $400,084 30d revenue on Robinhood Chain on 2026-08-31 per the desk map.", sources: ["map"] },
      { text: "A FalconX primer, as carried by the dossier, cited 4,500+ agents launched, $150M+ agent volume and $2.3M+ raised by builders on the Robinhood Chain instance (19 Jul).", sources: ["dossier"] },
    ],
    risk: [
      { text: "The dossier warns that the multi-chain VIRTUAL token and the Robinhood Chain instance are distinct; a multi-chain market cap is not the chain's book.", sources: ["dossier"] },
    ],
    unresolved: ["No Robinhood Chain contract address for the agent launch layer was found in either intake."],
    feed: [
      { date: "2026-07-19", kind: "company", title: "FalconX primer figures", sourceUrl: "https://virtuals.io", sources: ["dossier"],
        body: "A FalconX primer cited 4,500+ agents launched, $150M+ agent volume and $2.3M+ raised by builders on Robinhood Chain, with tokenized tax liens among live agent products." },
      { date: "2026-08-30", kind: "ct", title: "HoodInsider recap figure", account: "@HoodInsider_", sourceUrl: X("@HoodInsider_"), sources: ["fill13"],
        body: "A HoodInsider weekly recap cited over $270M of Robinhood Chain volume from Virtuals agents; the desk treats the recap as a media claim." },
      llamaItem("Virtuals", "$22,571 24h revenue and $400,084 30d revenue"),
    ],
  },

  netnet: {
    sources: {
      llama: "DefiLlama chain page: NetNet Reserve Currency row at zero TVL as copied into the desk map (2026-08-31)",
      map: "Desk handle, DefiLlama Reserve Currency row (TVL 0) and note for NetNet: claims a $7.5M treasury and the largest AAPL/NVDA/SPCX token holdings",
      fill13: "HoodInsider weekly recap (media claim): NetNet $677K 24h revenue",
      fill1: "Jumper 7-day X lane (2026-08-31) listing $NET among the five most-discussed tokens",
    },
    deployments: [
      { label: "NET token", address: "not-verified", role: "token", sources: [] },
      { label: "Treasury", address: "not-verified", role: "vault", sources: [] },
    ],
    positive: [
      { text: "The official account posted that its treasury held about $7.5M and the largest AAPL, NVDA and SPCX Stock Token positions on the chain (desk map, 2026-08-31).", sources: ["map"] },
    ],
    risk: [
      { text: "DefiLlama's Reserve Currency row for NetNet showed zero TVL on 2026-08-31 while the project posted a $7.5M treasury; the treasury address was not located in this review.", sources: ["map"] },
    ],
    unresolved: ["The HoodInsider recap's $677K 24h revenue figure is a media claim not reproduced."],
    feed: [
      { date: "2026-08-30", kind: "ct", title: "HoodInsider recap figure", account: "@HoodInsider_", sourceUrl: X("@HoodInsider_"), sources: ["fill13"],
        body: "A HoodInsider weekly recap cited $677K of 24h revenue for NetNet; the desk treats the recap as a media claim." },
      { date: "2026-08-31", kind: "ct", title: "Among the most-discussed tokens on Jumper", account: "@jumperapp", sourceUrl: X("@jumperapp"), sources: ["fill1"],
        body: "Jumper's seven-day X lane on 2026-08-31 listed $NET with PONS, CASHCAT, AI and DELTA as the five most-discussed tokens." },
      { date: "2026-08-31", kind: "company", title: "Treasury holdings claim", account: "@NetNetCap", sourceUrl: X("@NetNetCap"), sources: ["map"],
        body: "The account posted that the treasury held about $7.5M and the largest AAPL, NVDA and SPCX Stock Token holdings on the chain." },
      llamaItem("NetNet", "a Reserve Currency row at zero TVL"),
    ],
  },

  tickeryard: {
    sources: {
      map: "Desk handle and note for TickerYard: yBTC, WBTC routed from Arbitrum to Robinhood Chain; enum gap (synthetic-asset)",
      workbook: "Sheet 02 row for $YARD: StonkBrokers-incubated ticker/launch product inside the Clutch stack",
    },
    deployments: [
      { label: "yBTC", address: "not-verified", role: "token", sources: [] },
      { label: "YARD token (workbook)", address: "not-verified", role: "token", sources: ["workbook"] },
    ],
    positive: [
      { text: "The official account posted yBTC shipping on Robinhood Chain, routed from WBTC on Arbitrum (desk map, 2026-08-31).", sources: ["map"] },
      { text: "The workbook lists TickerYard ($YARD) as a StonkBrokers-incubated product.", sources: ["workbook"] },
    ],
    risk: [],
    unresolved: ["The bridge and custody path for the BTC backing yBTC has not been described in either intake."],
    feed: [
      { date: "2026-08-31", kind: "company", title: "yBTC on Robinhood Chain", account: "@TickerYardHQ", sourceUrl: X("@TickerYardHQ"), sources: ["map"],
        body: "The account posted yBTC shipping on Robinhood Chain, routed from WBTC on Arbitrum." },
    ],
  },

  "earn-protocol": {
    sources: {
      workbook: "Sheet 02 row for $EARN / EARN Protocol: Uniswap v4 strategy vaults (NVDA/USDG, GME/USDG), permissionless omnipools, protocol takes 10% of omnipool swap fees, token address, not the same as Robinhood Earn",
      map: "Desk handle, token address and note for EARN: omnipool zaps live (ETH/USDG via Rialto); automated vaults are 'coming soon'",
      fill3: "Official 30 Aug post: zaps live for EARN omnipools, deposit ETH or USDG auto-split across up to 8 assets, powered by Rialto",
    },
    deployments: [
      { label: "EARN token (account bio; workbook sheet 02)", address: "0xa3b6aee90017b72c0812dc1e013de70eb2917ba3", role: "token", sources: ["map", "workbook"] },
      { label: "Strategy vaults / omnipools", address: "not-verified", role: "vault", sources: [] },
    ],
    positive: [
      { text: "The official account posted on 2026-08-30 that zaps were live for its omnipools: deposit ETH or USDG and have it split across up to eight assets, routed through Rialto.", sources: ["fill3", "map"] },
      { text: "The workbook records Uniswap v4 strategy vaults on NVDA/USDG and GME/USDG and a protocol take of 10% of omnipool swap fees with 90% to LPs.", sources: ["workbook"] },
    ],
    risk: [
      { text: "The name collides with Robinhood Earn, the Morpho-based USDG lending product inside the Robinhood app, which has no token; the two are unrelated per the workbook.", sources: ["workbook"] },
    ],
    unresolved: [],
    feed: [
      { date: "2026-08-30", kind: "company", title: "Omnipool zaps live", account: "@EARNONHOOD", sourceUrl: X("@EARNONHOOD"), sources: ["fill3"],
        body: "The account posted that zaps were live for EARN omnipools — deposit ETH or USDG and auto-split across up to eight assets, powered by Rialto — with automated vaults described as coming soon." },
    ],
  },

  l4va: {
    sources: {
      dossier: "Chain File dossier: GlobeNewswire TGE 18 Aug 2026 for $L4VA on Robinhood Chain; stated $0.003 TGE price, $1.05M TGE market cap, 1B max, 20% team, non-upgradeable ERC-20; 25% burn / 25% treasury buyback claims; 30 Aug marketing post",
      map: "Desk handle and lifecycle (unknown) for L4VA",
    },
    deployments: [
      { label: "L4VA token", address: "not-verified", role: "token", sources: [] },
      { label: "Vault factory", address: "not-verified", role: "factory", sources: [] },
    ],
    positive: [
      { text: "A GlobeNewswire release dated 2026-08-18, as carried by the dossier, announced the L4VA TGE natively on Robinhood Chain with terms stated as a $0.003 price, 1B maximum supply, a 20% team allocation and a non-upgradeable ERC-20; the desk recorded lifecycle as unknown.", sources: ["dossier", "map"] },
    ],
    risk: [
      { text: "The dossier records no vault holding a Stock Token as of 30 Aug; the product is a press-release stage narrative until such a transaction exists.", sources: ["dossier"] },
    ],
    unresolved: [],
    feed: [
      { date: "2026-08-18", kind: "company", title: "TGE announced", sourceUrl: "https://l4va.org", sources: ["dossier"],
        body: "A GlobeNewswire release announced the L4VA Technologies TGE for $L4VA natively on Robinhood Chain, with terms at l4va.org/tge." },
      { date: "2026-08-30", kind: "company", title: "TGE marketing continues", account: "@L4VAprotocol", sourceUrl: X("@L4VAprotocol"), sources: ["dossier"],
        body: "The account posted that Robinhood Chain is built better, continuing TGE marketing." },
    ],
  },

  delta: {
    sources: {
      llama: "DefiLlama chain page: Delta TVL row (about $16,201) as copied into the desk map (2026-08-31)",
      fill16: "Alpha account @andrewtalksdefi named Delta with its mechanism on 24 Aug (desk note in round 16)",
      map: "Desk handle, token address, DefiLlama TVL ($16,201) and note for Delta: official 30 Aug claims of >$1M TVL, $400k LP rewards, 10k holders; distinct from MaxFi, STORMM, Snuggle and WTH",
      fill8: "Official 29–30 Aug posts: TVL surpassed $1,000,000, $400,000 claimed by LPs, 10,000 holders, Aster 3x perps listing; a skeptic's comparison to Meteora",
      fill1: "Desk's machine card: Delta is an LP manager, not a router or a pad; token address from the bio",
    },
    deployments: [
      { label: "DELTA token (account bio)", address: "0xe8ffd7e24187f72afb08d75b1bb13088a989a791", role: "token", sources: ["map", "fill1"] },
      { label: "LP manager / vault contracts", address: "not-verified", role: "vault", sources: [] },
    ],
    positive: [
      { text: "The official account posted on 29–30 Aug that TVL had surpassed $1,000,000, that $400,000 had been claimed by LPs and that the token had 10,000 holders.", sources: ["fill8", "map"] },
    ],
    risk: [],
    unresolved: ["DefiLlama listed Delta at about $16,201 TVL on 2026-08-31 against the project's $1M+ post; the desk could not tell whether the Llama row is stale or covers a different product slice."],
    feed: [
      { date: "2026-08-24", kind: "ct", title: "Named in a utility list", account: "@andrewtalksdefi", sourceUrl: X("@andrewtalksdefi"), sources: ["fill16"],
        body: "An alpha account listed Delta among Robinhood Chain utility names (with Wire, Hedge, Website and Mesh), naming the LP-manager mechanism." },
      { date: "2026-08-30", kind: "company", title: "TVL, LP rewards and holders", account: "@deltaliquidity", sourceUrl: X("@deltaliquidity"), sources: ["fill8"],
        body: "The account posted that TVL had surpassed $1,000,000, that LPs had claimed $400,000, that the token had 10,000 holders, and that Aster had listed $DELTA 3x perps." },
      llamaItem("Delta", "about $16,201 TVL"),
    ],
  },

  snuggle: {
    sources: {
      llama: "DefiLlama chain page: Snuggle TVL and revenue rows as copied into the desk map (2026-08-31)",
      map: "Desk handle and DefiLlama figures (TVL about $3.08M, 24h revenue $14,749) for Snuggle",
      fill2: "Desk's LP-manager split: Snuggle is a DefiLlama-listed position manager, quiet on X during the pass",
    },
    deployments: [{ label: "Position manager contracts", address: "not-verified", role: "vault", sources: [] }],
    positive: [
      { text: "DefiLlama listed Snuggle as a liquidity manager with about $3.08M TVL and $14,749 24h revenue on 2026-08-31 per the desk map; the desk found the account quiet on X during its pass.", sources: ["map", "fill2"] },
    ],
    risk: [],
    unresolved: ["The desk found no recent posts from the account; product details beyond the DefiLlama category are unknown."],
    feed: [llamaItem("Snuggle", "about $3.08M TVL and $14,749 24h revenue")],
  },

  sherwood: {
    sources: {
      llama: "DefiLlama chain page: Sherwood TVL row as copied into the desk map (2026-08-31)",
      map: "Desk handle, DefiLlama TVL ($80,196) and placement (privacy/private-transfer) for Sherwood",
      workbook: "Sheet 02 row for $WOOD / Sherwood Protocol: described as an AI-agent capital layer cited in ecosystem roundups, about $9M in one roundup, verify before use",
    },
    deployments: [{ label: "Privacy pool / WOOD token", address: "not-verified", role: "other", sources: [] }],
    positive: [
      { text: "DefiLlama listed Sherwood with about $80,196 TVL on 2026-08-31 per the desk map.", sources: ["map"] },
    ],
    risk: [
      { text: "The two intakes describe different products under the Sherwood name: the workbook an AI-agent capital layer with a $WOOD token, the desk map a private-transfer tool with a DefiLlama TVL row.", sources: ["workbook", "map"] },
    ],
    unresolved: ["Whether the two descriptions refer to one project is unresolved."],
    feed: [llamaItem("Sherwood", "about $80,196 TVL")],
  },

  squeeze: {
    sources: {
      dossier: "Chain File dossier: Squeeze Tape live (Uniswap v3 TWAP reads), Desk not built with no contracts deployed per the project's 30 Aug thread; a separate SQUEEZE-ticker meme launched the same evening; oracle rules (refuse pools with a single observation)",
      map: "Desk handle and lifecycle (announced) for Squeeze: short-interest product, four followers, brand new",
    },
    deployments: [],
    positive: [
      { text: "The project's 2026-08-30 thread, as carried by the dossier, stated the Tape (TWAP reader) and oracle verification were live, that the Desk had no deployed contracts, and that 5 of 11 markets cleared its listing criteria; the desk records the account as brand new with four followers.", sources: ["dossier", "map"] },
    ],
    risk: [
      { text: "A token using the SQUEEZE ticker was launched by a separate account on the evening of 2026-08-30; the protocol states it has no token.", sources: ["dossier"] },
    ],
    unresolved: [],
    feed: [
      { date: "2026-08-30", kind: "company", title: "Tape live, Desk not built", account: "@UseSqueeze_RH", sourceUrl: X("@UseSqueeze_RH"), sources: ["dossier"],
        body: "The account posted a thread stating the Tape and oracle verification were live, the Desk was not built with no contracts deployed, short-interest fields were null everywhere, and 5 of 11 markets cleared listing criteria." },
      { date: "2026-08-30", kind: "risk", title: "Same-ticker token from another account", sourceUrl: ARTIFACTS.dossier.url, sources: ["dossier"],
        body: "A separate account launched a token with the SQUEEZE ticker the same night; it is not the protocol." },
    ],
  },

  "agent-name-service": {
    sources: {
      map: "Desk handle, lifecycle (unknown) and note for Agent Name Service: .agent namespace; enum gap",
      desk: "Accounts intake row: claimed 0.002 ETH per year names on Robinhood Chain",
    },
    deployments: [{ label: "Registrar", address: "not-verified", role: "other", sources: [] }],
    positive: [
      { text: "The official account posts a .agent namespace on Robinhood Chain with names priced at 0.002 ETH per year (accounts intake, 2026-08-31).", sources: ["desk", "map"] },
    ],
    risk: [],
    unresolved: [],
    feed: [],
  },

  hookr: {
    sources: {
      map: "Desk handle, token / launchpad / hook addresses (hookr.fun + GitHub) and note for Hookr: v4 hook launchpad and marketplace, Gen 5 claimed live, 2.5M burn, distinct from HookOS / WTH / Pons / Mancer / Delta",
      fill1: "Desk's machine card for Hookr; third-party posts said the X account was compromised, the account posted 'We're back! 2FA Secured!' on 2026-08-25",
      fill9: "Official 29 Aug post closing in on 2.5M HOOKR burned; Nodar 24 Aug: Hook Tokens only after a deployed hook crosses activity thresholds; OpenZaps routes 50% of fees to buy HOOKR into Hook Blocks",
      fill8: "Desk split: Hookr (@Hookrfun) versus HookOS (@hookosfun, multi-chain, $HOOK at 0x85d4e6F147BFb5729378E451F32cf5287dE75f97, zero RH volume on DefiLlama)",
    },
    deployments: [
      { label: "HOOKR token (hookr.fun + GitHub per the desk)", address: "0x18E674231A58c239Dc7DaeDcffE15Ec3A24cff5c", role: "token", sources: ["map", "fill1"] },
      { label: "Hook launchpad", address: "0xaAed6fab06D53311220F35421Dda5cc6D6e9d6C3", role: "factory", sources: ["map"] },
      { label: "Hook contract", address: "0xd0005624Da88a688BcaB3DBFB4d1Cb23d32Ca0CC", role: "other", sources: ["map"] },
    ],
    positive: [
      { text: "The official account posted on 2026-08-29 that it was closing in on 2.5M HOOKR burned; a builder posted on 2026-08-24 that Hook Tokens are issued only after a deployed hook crosses activity and volume thresholds.", sources: ["fill9"] },
      { text: "The desk records the product as a Uniswap v4 hook launchpad and marketplace, with Gen 5 claimed live and a related OpenZaps product routing 50% of its fees into HOOKR.", sources: ["map", "fill9"] },
    ],
    risk: [
      { text: "Third-party posts in August said the project's X account had been compromised; the account posted on 2026-08-25 that it was back with 2FA secured. Posts from around that date should be read with that in mind.", sources: ["fill1"] },
      { text: "HookOS (@hookosfun, token at 0x85d4e6F147BFb5729378E451F32cf5287dE75f97) is a separate multi-chain hook launchpad and not this project.", sources: ["fill8"] },
    ],
    unresolved: ["Hookr is not on the DefiLlama dump; addresses come from the project's site and GitHub per the desk and were not reproduced."],
    feed: [
      { date: "2026-08-24", kind: "company", title: "Hook Tokens after usage", account: "@NodarJ", sourceUrl: X("@NodarJ"), sources: ["fill9"],
        body: "A Hookr builder posted that Hook Tokens are issued only after a deployed hook crosses activity and volume thresholds, after which holders share hook revenue." },
      { date: "2026-08-25", kind: "risk", title: "Account secured after compromise reports", account: "@Hookrfun", sourceUrl: X("@Hookrfun"), sources: ["fill1"],
        body: "After third-party posts said the account had been compromised, the account posted that it was back with 2FA secured." },
      { date: "2026-08-29", kind: "company", title: "Closing in on 2.5M burned", account: "@Hookrfun", sourceUrl: X("@Hookrfun"), sources: ["fill9"],
        body: "The account posted that it was closing in on 2.5M HOOKR burned." },
    ],
  },

  "what-the-hook": {
    sources: {
      llama: "DefiLlama chain page: What The Hook TVL row (about $1.93M, from the map's observe list) as copied into the desk map (2026-08-31)",
      map: "Desk handle and note for What The Hook: MEV redistribution inside a v4 hook, pays traders and LPs, WTH token on DexScreener; observe list carries a DefiLlama TVL row of about $1.93M",
      fill1: "Desk's machine card: WTH is not Hookr; WTH/WETH pair exists on DexScreener",
    },
    deployments: [
      { label: "WTH token", address: "not-verified", role: "token", sources: [] },
      { label: "MEV hook", address: "not-verified", role: "other", sources: [] },
    ],
    positive: [
      { text: "The desk records the product as an MEV bot that runs inside a Uniswap v4 hook and redistributes captured value to traders and LPs, with a DefiLlama TVL row of about $1.93M on 2026-08-31.", sources: ["map", "fill1"] },
    ],
    risk: [],
    unresolved: ["No contract address for the hook or the WTH token was found in either intake."],
    feed: [llamaItem("What The Hook", "about $1.93M TVL")],
  },

  quotrons: {
    sources: {
      map: "Desk handle, token / router / hook addresses and note for Quotrons: ERC-404 4,444 terminals, burn-to-hardwire, ten stock reward routes via one QUOTRON/WETH pool, V1 exploit and V2 collection, OpenSea sales 29–31 Aug, Desktop mint 1 Sep",
      workbook: "Sheet 02–03 rows for $QUOTRON: fee 3% split 2% stock rewards / 0.6375% locked LP / 0.2125% STONKBROKER buy-burn / 0.15% creator, about 60% of supply burned into lit terminals, Broker Boost multiplier",
      fill1: "Desk fill from X and project docs: product of Mavrk Inc., developer named on Dune, V1 retired after a stale-approval exploit on the ERC-721 mirror, recovery Safe and blacklist guardian disclosed, site census 2,710 lit / 1,734 dark",
      fill6: "V2 OpenSea sales in ETH 29–30 Aug, reward claim posts marked off Blockscout, QuotronsDesktop mint 1 Sep, @QUOTRONGenesis not treated as official",
      dossier: "Chain File dossier: 25 Aug CT post claiming the same developer as RobinWifHat with a pad fee split",
    },
    deployments: [
      { label: "QUOTRON token (ERC-404 core)", address: "0x5a86828Efd322bfb16d93cFeD16EE9BC14940D7F", role: "token", sources: ["map", "workbook", "fill1"] },
      { label: "Router", address: "0x42024fCFdB4F3089Dd619A0cEF0Cd24E7b841C18", role: "router", sources: ["map", "fill1"] },
      { label: "Uniswap v4 hook", address: "0x62E200Cc8e4D95cf622f40Dd70f407C883EcB0cc", role: "other", sources: ["map", "fill1"] },
    ],
    positive: [
      { text: "Project docs, as summarised by the desk, describe 4,444 ERC-404 terminals where burning the liquid token permanently hardwires an NFT that can claim Stock Token rewards, with one QUOTRON/WETH Uniswap v4 pool and ten reward conversion routes (NVDA, AAPL, TSLA, GME, SPCX, SPY, PLTR, NFLX, RDDT, MSTR).", sources: ["fill1", "workbook"] },
      { text: "The workbook records a 3% fee on WETH-side volume split into 2% stock rewards, 0.6375% locked LP, 0.2125% STONKBROKER buy-and-burn and 0.15% creator.", sources: ["workbook"] },
      { text: "The project disclosed that V1 was retired after a stale-approval exploit on its ERC-721 mirror and that V2 is a new collection with a recovery Safe and a blacklist guardian.", sources: ["fill1"] },
    ],
    risk: [
      { text: "The project discloses a recovery Safe and a blacklist guardian role for V2; who holds those keys and what they can do to user terminals is not documented in the intake.", sources: ["fill1"] },
      { text: "The desk flagged @QUOTRONGenesis as a mint account not treated as official, and treats @QuotronsDesktop (mint 2026-09-01) as a related drop until the same control plane is confirmed.", sources: ["fill6"] },
    ],
    unresolved: ["A 25 Aug CT post claimed the same developer as RobinWifHat and a coming pad with a fee split; the desk did not verify it. A secondary source noted the reward venue on Ink had not run an epoch as of 2026-08-29; whether Robinhood Chain V2 epochs run independently is unchecked."],
    feed: [
      { date: "2026-08-25", kind: "ct", title: "Same-developer claim", account: "@ibweb3eth", sourceUrl: X("@ibweb3eth"), sources: ["dossier"],
        body: "A CT account posted that RobinWifHat shares a developer with Quotrons and that a pad with a 1.7 / 0.5 / 1.2 fee split was coming that week; not verified by the desk." },
      { date: "2026-08-30", kind: "onchain", title: "V2 sales on OpenSea; reward claims", account: "@Quotrons404", sourceUrl: X("@Quotrons404"), sources: ["fill6"],
        body: "The account posted V2 sales in ETH on OpenSea (12.69, 9 and 5 ETH between 29 and 30 Aug) and holder posts of Stock Token rewards from hardwired terminals (one wallet citing $7.3k from 102 terminals)." },
      { date: "2026-08-31", kind: "company", title: "Desktop mint 1 Sep", account: "@QuotronsDesktop", sourceUrl: X("@QuotronsDesktop"), sources: ["fill6"],
        body: "A related account posted a QuotronsDesktop mint for 2026-09-01 at 13:30 UTC priced at 0.20 USD; the desk has not confirmed it shares the Quotrons control plane." },
    ],
  },

  "pools-trade": {
    sources: {
      map: "Desk handle and note for pools.trade: Uniswap Labs pad (Uniswap blog 2026-08-05), active mint URLs on X, not Pons",
      workbook: "Sheet 04 row for pools.trade: general pad, about 71k launched / 62k traded, 119 RWA-paired, about 0.5% RWA volume share",
      fill4: "Desk note: the pad's official handle may be @TradePools ('Hello world pools.trade', 5 Aug, 563k views); both handles kept",
      fill10: "Project VEX runs agentic token launches through pools.trade (desk, 31 Aug)",
    },
    deployments: [{ label: "Launch factory", address: "not-verified", role: "factory", sources: [] }],
    positive: [
      { text: "The desk records pools.trade as a Uniswap Labs launchpad announced on the Uniswap blog on 2026-08-05, with active mint links on X.", sources: ["map", "fill4"] },
      { text: "The workbook's Dune extract records about 71k tokens launched and 62k traded, 119 paired to a Stock Token.", sources: ["workbook"] },
    ],
    risk: [],
    unresolved: ["Two X handles (@pools_dot_fun and @TradePools) are in use; the desk kept both until the canonical one is confirmed. Whether the 'Poolsfun' Sushi-V3 launches noted by GeckoTerminal on 16 Aug are the same product is unresolved."],
    feed: [
      { date: "2026-08-05", kind: "company", title: "Hello world pools.trade", account: "@TradePools", sourceUrl: X("@TradePools"), sources: ["fill4"],
        body: "A launch post for the Uniswap Labs pad, cited by the desk with 563k views." },
      { date: "2026-08-31", kind: "company", title: "Agentic launches via Project VEX", account: "@ProjectVEXai", sourceUrl: X("@ProjectVEXai"), sources: ["fill10"],
        body: "Project VEX posted that its agentic token launches run through pools.trade." },
    ],
  },

  wire: {
    sources: {
      map: "Desk handle, token address and note for Wire: command layer from X, Telegram or web; launches on Pons with a $3 protocol fee plus 0.0005 ETH Pons fee; post-graduation buy router patched 30 Aug; not Bankr",
      fill2: "Desk's command-layer split: Wire executes user commands against existing venues; builder @gornx0x; HMM described as a Wire-dev test token",
      fill9: "Live replies observed by the desk: launch on Pons from X with optional GME/USDG/NVDA/SPY pair; 30 Aug patch for a missing router approval on post-graduation buys",
      fill16: "Alpha account @andrewtalksdefi named Wire with its mechanism on 24 Aug",
    },
    deployments: [{ label: "WIRE token (account bio)", address: "0x8ECEA3d0E648DB646d824AA51EedeB16aC3d6878", role: "token", sources: ["map", "fill2"] }],
    positive: [
      { text: "The desk observed production replies from the account launching tokens on Pons from X, with fees posted as about 0.0005 ETH to Pons plus $3 to the protocol plus gas, and an optional pairing with GME, USDG, NVDA or SPY.", sources: ["fill9", "map"] },
    ],
    risk: [
      { text: "The account posted on 2026-08-30 that it had patched a missing router approval on post-graduation buys; the fix suggests buys through the command layer failed for some period.", sources: ["fill9"] },
    ],
    unresolved: ["How user keys are custodied when commands arrive from X or Telegram is not described in the intake."],
    feed: [
      { date: "2026-08-24", kind: "ct", title: "Named in a utility list", account: "@andrewtalksdefi", sourceUrl: X("@andrewtalksdefi"), sources: ["fill16"],
        body: "An alpha account listed Wire among Robinhood Chain utility names, naming the command-layer mechanism." },
      { date: "2026-08-30", kind: "company", title: "Router approval patched", account: "@wirebotRH", sourceUrl: X("@wirebotRH"), sources: ["fill9"],
        body: "The account posted that a missing router approval on post-graduation buys had been patched." },
      { date: "2026-08-31", kind: "company", title: "Launches on Pons from X", account: "@wirebotRH", sourceUrl: X("@wirebotRH"), sources: ["fill9"],
        body: "The account's replies show launches on Pons from X commands with about 0.0005 ETH Pons fee plus a $3 protocol fee, optionally paired with GME, USDG, NVDA or SPY." },
    ],
  },

  maxfi: {
    sources: {
      dossier: "Chain File dossier: MaxFi as an automated LP manager for Stock Token / USDG pools (AAPL, NVDA, TSLA, GOOGL, META, MSTR, PLTR, GME, SPY, QQQ), no native token found, withdraw anytime per FAQ",
      map: "Desk handle and note for MaxFi: official 30 Aug $128,324 paid to LPs in 24h, $8M TVL in bio, no-swap rebalancing, depeg time-delay, circuit breaker in progress, distinct from Delta",
      fill9: "Official 30 Aug post and bio as summarised by the desk; stock LPs named COST, MSTR, RBLX, RDDT",
    },
    deployments: [{ label: "LP manager contracts", address: "not-verified", role: "vault", sources: [] }],
    positive: [
      { text: "The official account posted on 2026-08-30 that $128,324 had been paid to LP farmers in the previous 24 hours, and its bio claimed over $8M TVL.", sources: ["fill9", "map"] },
      { text: "The dossier and desk describe managed ranges on Stock Token / USDG pairs with no-swap rebalancing, time-delayed depeg protection and a circuit breaker in progress.", sources: ["dossier", "map"] },
    ],
    risk: [
      { text: "MaxFi is not on the DefiLlama dump; its TVL and payout figures are the project's own and were not reproduced.", sources: ["map"] },
    ],
    unresolved: [],
    feed: [
      { date: "2026-08-30", kind: "company", title: "$128,324 paid to LPs in 24h", account: "@MAXFILABS", sourceUrl: X("@MAXFILABS"), sources: ["fill9"],
        body: "The account posted that $128,324 had been paid to LP farmers in the last 24 hours, naming COST, MSTR, RBLX and RDDT stock LPs." },
      { date: "2026-08-30", kind: "ct", title: "KOL videos on stock LP yields", account: "@DaoKingdom", sourceUrl: X("@DaoKingdom"), sources: ["dossier"],
        body: "A KOL account posted videos on COST, MSTR, RBLX, RDDT and NVDA LP yields on MaxFi, describing no-swap rebalancing and a circuit breaker being built; the desk down-weights this account." },
    ],
  },

  sight: {
    sources: {
      map: "Desk handle and note for Sight: official 30 Aug 'no token'; Genesis NFT 2 Sep, supply 1776, GTD free, WL and public 0.002 ETH on OpenSea; distinct from Meridian Predict",
      fill11: "Official 30 Aug post: 'We DO NOT have a token'; mint details",
    },
    deployments: [],
    positive: [
      { text: "The official account posted on 2026-08-30 that the project has no token and announced a Genesis NFT mint for 2026-09-02 with a supply of 1,776, free for guaranteed allocations and 0.002 ETH for whitelist and public on OpenSea.", sources: ["fill11", "map"] },
    ],
    risk: [
      { text: "Per the project's own statement any token using the SIGHT ticker is not from the project.", sources: ["fill11"] },
    ],
    unresolved: [],
    feed: [
      { date: "2026-08-30", kind: "company", title: "No token; Genesis NFT 2 Sep", account: "@sight_hood", sourceUrl: X("@sight_hood"), sources: ["fill11"],
        body: "The account posted that it does not have a token and announced a Genesis NFT mint on 2026-09-02 (supply 1,776; GTD free; WL and public 0.002 ETH on OpenSea)." },
    ],
  },

  mesh: {
    sources: {
      map: "Desk handle, token address and note for Mesh: MPP gateway, Pons listed as merchant, fees to tokenized GME planned",
      fill2: "Official posts summarised by the desk: 4,273 paid calls and 209 USDG in under 48h; 30 Aug epoch of 68.49 USDG paid to 88 wallets holding at least 1M MESH; next drop to buy tokenized GME for holders",
      fill16: "Alpha account @andrewtalksdefi named Mesh with its mechanism on 24 Aug",
    },
    deployments: [{ label: "MESH token", address: "0x14641000a501bdc736116abf84e6fcea9b90a713", role: "token", sources: ["map", "fill2"] }],
    positive: [
      { text: "The official account posted 4,273 paid calls and 209 USDG in under 48 hours, Pons listed as a merchant, and a 30 Aug epoch paying 68.49 USDG to 88 wallets holding at least 1M MESH.", sources: ["fill2", "map"] },
    ],
    risk: [],
    unresolved: ["Where merchant fees are held between epochs and who triggers a payout is not described in the intake."],
    feed: [
      { date: "2026-08-24", kind: "ct", title: "Named in a utility list", account: "@andrewtalksdefi", sourceUrl: X("@andrewtalksdefi"), sources: ["fill16"],
        body: "An alpha account listed Mesh among Robinhood Chain utility names, naming the machine-payments mechanism." },
      { date: "2026-08-30", kind: "company", title: "Epoch paid to holders", account: "@MeshGateway", sourceUrl: X("@MeshGateway"), sources: ["fill2"],
        body: "The account posted an epoch of 68.49 USDG paid to 88 wallets holding at least 1M MESH, 4,273 paid calls in under 48 hours, and a plan to buy tokenized GME for holders in the next drop." },
    ],
  },

  foxpad: {
    sources: {
      dossier: "Chain File dossier (fox): FoxPad (foxpad.app) is the pad attached to the FOX mascot token; graduated tokens auto-burn token-side Uniswap fees; 50/50 ops vs FOX vault; the site states it is not affiliated with Robinhood; FOX token address",
      map: "Desk row (fox): culture token with a related pad; split before filing; FOX token address",
      fill2: "Desk split: FOX (@fox_onrh) is the culture token; FoxPad claims 50% of pad fees buy back FOX; keep both, do not file FOX as the pad",
    },
    deployments: [
      { label: "FOX token (the mascot token the pad's fee split buys)", address: "0x2103faA9D1762e27a716C61718b3aCf3Ec1F9bf1", role: "token", sources: ["dossier", "map"] },
      { label: "FoxPad launch factory", address: "not-verified", role: "factory", sources: [] },
    ],
    positive: [
      { text: "The dossier records FoxPad as the launchpad attached to the FOX token: graduated tokens auto-burn token-side Uniswap fees and pad fees split 50/50 between operations and a FOX vault.", sources: ["dossier", "fill2"] },
    ],
    risk: [
      { text: "The FOX site states the token is not the official Robinhood mascot and is not endorsed by Robinhood; the FOX token itself is a culture token and is not profiled here (PRD §2.2).", sources: ["dossier"] },
    ],
    unresolved: ["The pad's own X handle is unconfirmed; the linked account belongs to the FOX token."],
    feed: [
      { date: "2026-08-25", kind: "ct", title: "FOX on the daily board", account: "@RHDaily__", sourceUrl: X("@RHDaily__"), sources: ["dossier"],
        body: "RH Daily's trending list placed FOX with CASHCAT, PONS, PEPE and JUGGERNAUT; the dossier notes the site disclaims any Robinhood affiliation." },
    ],
  },

  scopl: {
    sources: {
      map: "Desk handle, token address and note for SCOPL: official account, V2 architecture of nine contracts, non-custodial one-tick orders, approved V4 hooks Pons V2 and Long Doppler; the cryptolot.lol 'holder portal' posts flagged as a phishing risk",
      fill12: "Desk correction round: @scopl_live is official, token address in bio, product at scopl.live/trade, 29 Aug post on order lifecycle, competition figures, DexScreener pool id, V2 SpyWolf audit not yet shipped",
      fill16: "SpyWolf audit PDF (30 Aug) as read by the desk: chain 4663, token address, nine V2 contracts named with no extra addresses, no major or critical findings, audit text says already live while official X says V2 around the corner; revenue 30/50/20",
      fill10: "Desk watch round: several accounts pushed a 'holder portal' at cryptolot.lol with the token address; not official; 0x07f5b682… is an Ethereum collision",
    },
    deployments: [
      { label: "SCOPL token (account bio; SpyWolf audit for chain 4663)", address: "0xaA40e79E987517f7462bF79315B8A118799B04E3", role: "token", sources: ["fill12", "fill16", "map"] },
      { label: "V2 contracts (OrderPolicy, V3 and V4 managers, Referral, RevenueDistributor, FeeRouter, ZapRouter, BuybackVault, RouterSwapAdapter)", address: "not-verified", role: "other", sources: ["fill16"] },
    ],
    positive: [
      { text: "The official account posted on 2026-08-29 that every order is a concentrated-liquidity position whose fills pay real swap fees split between user and protocol, with no emissions; a competition cited about $500k volume, 1,000+ fills and 37 traders.", sources: ["fill12"] },
      { text: "A SpyWolf audit dated 30 Aug, as read by the desk, names nine V2 contracts on chain 4663 with no major or critical findings and a revenue split of 30% referral, 50% buyback, 20% operations.", sources: ["fill16"] },
    ],
    risk: [
      { text: "Several accounts posted a 'holder portal' link at a third-party domain (cryptolot.lol) alongside the token address on 2026-08-30; the research desk flagged those posts as not from the project and treated the domain as a phishing risk.", sources: ["fill10", "fill12"] },
      { text: "An Ethereum address (0x07f5b682…) circulated as SCOPL's contract is not a contract on chain 4663 per the desk.", sources: ["fill10"] },
    ],
    unresolved: ["The audit text describes the protocol as already live while the official account still described V2 as around the corner; no deployed addresses for the nine V2 contracts were published."],
    feed: [
      { date: "2026-08-29", kind: "company", title: "Orders as concentrated-liquidity positions", account: "@scopl_live", sourceUrl: X("@scopl_live"), sources: ["fill12"],
        body: "The account posted that every order is a concentrated-liquidity position, fills pay real swap fees split between user and protocol, with no emissions, and cited a competition at about $500k volume, 1,000+ fills and 37 traders." },
      { date: "2026-08-30", kind: "risk", title: "Third-party 'holder portal' posts", sourceUrl: ARTIFACTS.fill10.url, sources: ["fill10"],
        body: "Several accounts posted a holder portal at cryptolot.lol with the token address; the desk flagged the posts as not from the project and the domain as a phishing risk." },
      { date: "2026-08-30", kind: "company", title: "V2 audit by SpyWolf", account: "@scopl_live", sourceUrl: X("@scopl_live"), sources: ["fill16"],
        body: "A SpyWolf audit of nine V2 contracts reported no major or critical findings; the account still described V2 as around the corner." },
    ],
  },

  website: {
    sources: {
      map: "Desk handle and note for notawebsite: tokenized ad slots; claims ETH volume and payouts since the 11 Aug v2",
      fill2: "Official figures summarised by the desk: 8.178 ETH volume since v2 (11 Aug), 6.08 ETH to slot owners",
      fill16: "Alpha account @andrewtalksdefi named Website with its mechanism on 24 Aug",
    },
    deployments: [{ label: "Slot contract / WEBSITE token", address: "not-verified", role: "token", sources: [] }],
    positive: [
      { text: "The official account posted 8.178 ETH of volume since its v2 on 2026-08-11 and 6.08 ETH paid to slot owners.", sources: ["fill2", "map"] },
    ],
    risk: [],
    unresolved: [],
    feed: [
      { date: "2026-08-24", kind: "ct", title: "Named in a utility list", account: "@andrewtalksdefi", sourceUrl: X("@andrewtalksdefi"), sources: ["fill16"],
        body: "An alpha account listed Website among Robinhood Chain utility names, naming the ad-slot mechanism." },
      { date: "2026-08-31", kind: "company", title: "Volume and payouts since v2", account: "@notawebsite_rh", sourceUrl: X("@notawebsite_rh"), sources: ["fill2"],
        body: "The account posted 8.178 ETH of volume since v2 on 2026-08-11 and 6.08 ETH paid to slot owners." },
    ],
  },

  lemon: {
    sources: {
      map: "Desk handle and note for Lemon: launch/trade pad, Hyperliquid tools claimed, distinct from Pons, Hookr, LONG and pools.trade",
      fill6: "Official 22 Aug post: coins get their own X account posting on-chain facts; connect coins from other pads; Hyperliquid leverage via a Lemon terminal claimed",
      fill10: "Official 30 Aug note: upgraded multi-wallet trading terminal",
    },
    deployments: [{ label: "Launch / terminal contracts", address: "not-verified", role: "factory", sources: [] }],
    positive: [
      { text: "The official account posted on 2026-08-22 that each coin gets its own X account posting from on-chain facts (market cap, volume, holder concentration, locked LP), that coins from other pads can be connected, and that Hyperliquid leverage is available through a Lemon terminal; the desk places it as a launch/trade pad distinct from Pons, Hookr, LONG and pools.trade.", sources: ["fill6", "map"] },
    ],
    risk: [],
    unresolved: [],
    feed: [
      { date: "2026-08-22", kind: "company", title: "Agentic coin accounts and HL terminal", account: "@lemondotfun", sourceUrl: X("@lemondotfun"), sources: ["fill6"],
        body: "The account posted that each coin gets its own X account posting on-chain facts, that coins from other pads can be connected, and claimed Hyperliquid leverage via a Lemon terminal." },
      { date: "2026-08-30", kind: "company", title: "Multi-wallet terminal upgrade", account: "@lemondotfun", sourceUrl: X("@lemondotfun"), sources: ["fill10"],
        body: "The account posted an upgraded multi-wallet trading terminal." },
    ],
  },

  robindex: {
    sources: {
      dossier: "Chain File dossier: robindex.pro is a DexScreener-style tracker for chain 4663 with a $ROBINDEX token; official address on the About page and X bio; four products share the name; a 30 Aug CT post and a DexScreener pull of about $45k FDV",
      map: "Desk handle and note for Robindex: contract scanner plus Telegram bot; not the ERC-4626 Robinhood Index Vaults",
      fill4: "Desk note: developer @Mike_Majestic; 14 Aug launch post — paste an address for market, holders and an AI read; Telegram bot for scans, buy alerts and KOL calls",
    },
    deployments: [{ label: "ROBINDEX token (About page and X bio per the dossier)", address: "0xd82f70F530AFf45b831d6eE17062B4E85395C6F3", role: "token", sources: ["dossier"] }],
    positive: [
      { text: "The official account's 14 Aug post, per the desk, describes a token scanner for Robinhood Chain (paste an address for market data, holders and an AI read) and a Telegram bot for scans and alerts.", sources: ["fill4", "map"] },
    ],
    risk: [
      { text: "Four products share the Robindex name (robindex.pro scanner, robindex.money $RDEX, robindex.finance $RBD, robindex.online OTC); the project's own safety page calls out tokens using its ticker at other addresses.", sources: ["dossier"] },
    ],
    unresolved: [],
    feed: [
      { date: "2026-08-14", kind: "company", title: "Scanner and Telegram bot", account: "@robindexpro", sourceUrl: X("@robindexpro"), sources: ["fill4"],
        body: "The account posted a DEX tracker and token scanner for Robinhood Chain with a Telegram bot for scans, buy alerts and KOL calls." },
      { date: "2026-08-30", kind: "ct", title: "All-time-high post on a small token", account: "@DeGenWealth2", sourceUrl: X("@DeGenWealth2"), sources: ["dossier"],
        body: "A CT account posted the token address and described the token as at an all-time high; a DexScreener pull cited in the dossier showed roughly $45k FDV at the time." },
      { date: "2026-08-30", kind: "risk", title: "Four products share the name", sourceUrl: "https://robindex.pro/about", sources: ["dossier"],
        body: "Scanner, stock-index layer, orderbook DEX and OTC desk all use the Robindex name with different addresses; only the scanner's address is filed here." },
    ],
  },

  vynex: {
    sources: {
      map: "Desk handle, token address and note for Vynex: liquid vault ERC-20 plus a Morpho NVDA/USDG borrow market at 38.5% LTV with a 30-minute TWAP oracle the project built; one X post asserted no audit had been done",
      fill5: "Official 30 Aug posts: borrow USDG against NVDA without selling, LTV 38.5%, position on Morpho Blue under the user's address, 30-minute average oracle; token address cited by a radar account; a 31 Aug counter-claim that no audit had been done and no vault income yet",
    },
    deployments: [
      { label: "VYNEX token (cited by a third-party radar account, not the project)", address: "0x8cf33e3026604bd85677e7bc6e04d256571b6653", role: "token", sources: ["fill5", "map"] },
      { label: "Vault / oracle contracts", address: "not-verified", role: "vault", sources: [] },
    ],
    positive: [
      { text: "The official account posted on 2026-08-30 an NVDA/USDG borrow market on Morpho Blue at 38.5% LTV where the position sits under the user's own address, priced by a 30-minute average oracle the project built from the NVDA pool rather than spot.", sources: ["fill5", "map"] },
    ],
    risk: [
      { text: "An independent audit was not found in this review; an X post on 2026-08-31 asserted that no audit had been done and that the stock vault had not yet produced income.", sources: ["fill5"] },
      { text: "The token address comes from a third-party radar account, not from the project.", sources: ["fill5"] },
    ],
    unresolved: [],
    feed: [
      { date: "2026-08-30", kind: "company", title: "NVDA borrow market on Morpho", account: "@UseVynex", sourceUrl: X("@UseVynex"), sources: ["fill5"],
        body: "The account posted an NVDA/USDG market on Morpho Blue at 38.5% LTV with the position under the user's address and a 30-minute average oracle; it stated that a $1M swap moved spot 2.5% while the oracle did not." },
      { date: "2026-08-31", kind: "risk", title: "Audit and income counter-claim", sourceUrl: ARTIFACTS.fill5.url, sources: ["fill5"],
        body: "An X post asserted that no audit had been done and that the stock vault had not yet produced income; not verified either way." },
    ],
  },

  sinjoh: {
    sources: {
      map: "Desk handle, token address and note for Sinjoh: programmable capital layer; INJOH routes launch and creator fees into PONS and NVDA airdrops and burns; Safehood token is a customer; founder @DSB_117",
      fill6: "Official figures summarised by the desk: over $42k of PONS and NVDA airdropped, 42M INJOH (about 4.2%) burned, over $11M volume in under a month; raffle rewards and Yield Banks announced; the $SAFEHOOD token uses Sinjoh",
    },
    deployments: [{ label: "INJOH token (account bio)", address: "0x2cC0FAC44B8252f6B10208B091aFf2c94B4da77D", role: "token", sources: ["map", "fill6"] }],
    positive: [
      { text: "The official account posted over $42k of PONS and NVDA airdropped, 42M INJOH (about 4.2%) burned and over $11M of volume in under a month, with launch and creator fees routed into buybacks, airdrops and burns.", sources: ["fill6", "map"] },
    ],
    risk: [],
    unresolved: ["The router contract that collects and splits fees was not located; airdrop and burn figures are the project's own."],
    feed: [
      { date: "2026-08-25", kind: "company", title: "Buybacks and airdrops on a customer token", account: "@SinjohDeFi", sourceUrl: X("@SinjohDeFi"), sources: ["fill6"],
        body: "The account posted that over half of the $SAFEHOOD token's supply had been bought back and airdropped through Sinjoh in under a week." },
      { date: "2026-08-31", kind: "company", title: "Airdrop, burn and volume figures", account: "@SinjohDeFi", sourceUrl: X("@SinjohDeFi"), sources: ["fill6"],
        body: "The account posted over $42k of PONS and NVDA airdropped, 42M INJOH burned and over $11M volume in under a month, and announced Yield Banks." },
    ],
  },

  hoodlock: {
    sources: {
      map: "Desk handle, token address and note for HoodLock: native locker; claimed 3M+ TVL locked; Mintera.art 25% revenue buyback; fee-split launchpad announced 31 Aug; ignore a third-party address 0x76af8d3B…",
      fill6: "Official posts summarised by the desk: instant on-chain lock proofs; NFT mint on Mintera with 90% of secondary fees to stakers; 29 Aug 25% of Mintera revenue to buy LOCK; 31 Aug launchpad with one-click fee split",
    },
    deployments: [
      { label: "LOCK token (account bio)", address: "0xd5BF43f29BF7Aa5bb42Ae9e217b84B86EB7a4B94", role: "token", sources: ["map", "fill6"] },
      { label: "Locker contract", address: "not-verified", role: "other", sources: [] },
    ],
    positive: [
      { text: "The official account posted a native liquidity locker with instant on-chain lock proofs, over 3M in value locked, and on 2026-08-29 that 25% of Mintera.art revenue would buy LOCK for lockers.", sources: ["fill6", "map"] },
      { text: "The official account announced on 2026-08-31 a launchpad on hoodlock.tech with a one-click fee split (for example 50% burn / 30% 30-day lock / 20% team).", sources: ["fill6"] },
    ],
    risk: [
      { text: "A third-party post circulated a different address (0x76af8d3B…, truncated in the intake) for LOCK; the desk treats the bio address as the token and the other as not the project's.", sources: ["map"] },
    ],
    unresolved: ["The locker contract itself was not located; unlock and admin powers over locked positions are unknown."],
    feed: [
      { date: "2026-08-29", kind: "company", title: "Mintera revenue buys LOCK", account: "@HoodLockRH", sourceUrl: X("@HoodLockRH"), sources: ["fill6"],
        body: "The account posted that 25% of Mintera.art revenue would buy LOCK for lockers." },
      { date: "2026-08-31", kind: "company", title: "Launchpad with fee split announced", account: "@HoodLockRH", sourceUrl: X("@HoodLockRH"), sources: ["fill6"],
        body: "The account announced a launchpad where a creator sets the fee split in one click; the locker is described as live with over 3M locked." },
    ],
  },

  arrows: {
    sources: {
      workbook: "Sheet 02 row for $ARROWS / Arrows Finance: options on tokenized stocks as transferable ERC-1155s, writer vaults earn premium, 1B fixed supply (80% public liquidity, 12% treasury vest, 3% airdrop to Stock Token holders), token address, 'third Arrow on the chain'",
      map: "Desk handle, token address and note for Arrows: fully collateralized options on tokenized stocks; founder @iam0x00; week-1 challenge figures; ETH options claimed from 31 Aug; not Arrow Finance, not ArrowPad",
      fill6: "Official week-one numbers summarised by the desk: $1,234 volume, 227 trades, 220 contracts, vault LP $12,134, premiums $205; up/down prediction on stocks and ETH in development",
    },
    deployments: [
      { label: "ARROWS token", address: "0xD71b7b4e1dc16BD6938D3F235A68aa8ab1CF4F0e", role: "token", sources: ["workbook", "map"] },
      { label: "Option and writer-vault contracts", address: "not-verified", role: "vault", sources: [] },
    ],
    positive: [
      { text: "The official account posted week-one figures of $1,234 volume, 227 trades, 220 contracts, $12,134 of writer-vault LP and $205 of premiums, and claimed ETH options and settlement from 2026-08-31.", sources: ["fill6", "map"] },
      { text: "The workbook records options on TSLA, NVDA, AAPL and SPY Stock Tokens as transferable ERC-1155s with a fixed 1B token supply split 80% public liquidity, 12% treasury vest and 3% airdrop to Stock Token holders.", sources: ["workbook"] },
    ],
    risk: [
      { text: "The name collides with Arrow Finance (CDP, @ArrowFinanceio) and ArrowPad (launchpad); the desk follows both Arrow accounts specifically to keep them apart.", sources: ["map", "workbook"] },
    ],
    unresolved: [],
    feed: [
      { date: "2026-08-31", kind: "company", title: "Week-one figures; ETH options", account: "@arrowsonhood", sourceUrl: X("@arrowsonhood"), sources: ["fill6"],
        body: "In posts captured by the desk on 2026-08-31 the account cited week-one figures of $1,234 volume, 227 trades, 220 contracts, $12,134 vault LP and $205 premiums, and claimed ETH options and settlement from 31 Aug." },
    ],
  },

  hoodfun: {
    sources: {
      map: "Desk handle, lifecycle (announced) and note for hood.fun: fair-launch bonding curve into locked Uniswap v3; last official 'coming soon' 31 Jul; openpump listed it as a chain-4663 pad on 29 Aug; not the $HFUN Pons token; not fefe-hood.fun",
      fill6: "Desk handle round: bio (no presale, no team allocation), last official posts 23 and 31 Jul, last reply 3 Aug; openpump's four-pad list; $HFUN address 0x01224f6012e02ba6d4602613c638c5b1d428b609 is a Pons graduation",
    },
    deployments: [{ label: "Curve / launch contract", address: "not-verified", role: "factory", sources: [] }],
    positive: [
      { text: "The official account describes a fair launch: one transaction into a bonding curve that locks into Uniswap v3 at goal, with no presale and no team allocation; openpump listed hood.fun among four pads on chain 4663 on 2026-08-29.", sources: ["fill6", "map"] },
    ],
    risk: [
      { text: "A token with the HFUN ticker (0x01224f6012e02ba6d4602613c638c5b1d428b609) is a Pons graduation and not this pad.", sources: ["fill6"] },
    ],
    unresolved: ["The last official post was a 'coming soon' on 2026-07-31; no live mint has been observed."],
    feed: [
      { date: "2026-07-31", kind: "company", title: "Coming soon", account: "@hoodfunfamily", sourceUrl: X("@hoodfunfamily"), sources: ["fill6"],
        body: "The account's last official post said the pad was coming soon." },
      { date: "2026-08-29", kind: "ct", title: "Listed by openpump as a chain-4663 pad", account: "@openpumpio", sourceUrl: X("@openpumpio"), sources: ["fill6"],
        body: "openpump listed hood.fun with Pons v1+v2, pools.trade and the Odyssey pad as pads on chain 4663." },
    ],
  },

  "stonks-fun": {
    sources: {
      map: "Desk handle and note for Stonks.fun: DN-404 plus Doppler pad, fees burn $STONKS, builder @nikshepsvn, $REDACTED ZEC-pair launched here, rebrand to RWA baskets announced; not StonkBrokers",
      fill7: "Desk handle round: bio 'Token Launchpad on RH, DN-404 powered by Doppler'; 22 Aug post on the rebrand toward RWA baskets; related @YowlonHood $YOWL is an app token, not the pad",
    },
    deployments: [
      { label: "STONKS token / factory", address: "not-verified", role: "factory", sources: [] },
    ],
    positive: [
      { text: "The official account's bio describes a DN-404 launchpad powered by Doppler whose fees burn $STONKS; a 22 Aug post announced a rebrand toward RWA baskets.", sources: ["fill7", "map"] },
    ],
    risk: [
      { text: "The name sits next to StonkBrokers (NFTs, Anvil, STORMM); they are separate projects and separate rows here.", sources: ["fill7"] },
    ],
    unresolved: [],
    feed: [
      { date: "2026-08-22", kind: "company", title: "Rebrand toward RWA baskets", account: "@stonksdotfun", sourceUrl: X("@stonksdotfun"), sources: ["fill7"],
        body: "The account posted that a rebrand toward RWA baskets was coming." },
    ],
  },

  swaphood: {
    sources: {
      map: "Desk handle, HOOD / V3 factory / h33 / V2 factory addresses and note for SwapHood: HOOD explorer-verified with 395 holders; V3 factory on the explorer named PancakeV3Factory with the same deployer; flywheel HOOD → fees → buyback → h33",
      fill13: "Official flywheel posts: HOOD emissions about 2,375/day (max 5M) to LPs, fees to HOOD buybacks (28 Aug: 633.93 HOOD for 0.012 ETH), buybacks raise h33 backing; team claims it owns no HOOD and no LP",
      fill15: "Official 12 Jul HOOD token post with address and pair; gitbook addresses for h33 and the V2/V3 factories kept as candidates; DefiLlama SwapHood V3 volume about $126–130k",
      fill17: "Desk auditor's Blockscout 4663 check: HOOD / SwapHood Token present, 395 holders, source verified; the V3 factory is a PancakeV3Factory contract with the same deployer",
    },
    deployments: [
      { label: "HOOD token (SwapHood Token — not the Robinhood HOOD Stock Token)", address: "0x1FcBc77a759e502E36836b7787C9A8B4f5Da666c", role: "token", sources: ["fill15", "fill17", "map"] },
      { label: "V3 factory (explorer contract name PancakeV3Factory)", address: "0x0Ec554F0BfF0Be6C99d1e95C8015bb0950f6A2C7", role: "factory", sources: ["fill15", "fill17", "map"] },
      { label: "h33 token (gitbook, candidate)", address: "0xA7036C8C28F96e8cE242d0Af45d1B395B69DAF38", role: "token", sources: ["fill15", "map"] },
      { label: "V2 factory (gitbook, candidate)", address: "0xE7206Ecac3A51afe7e6179182ad4130A26068dD1", role: "factory", sources: ["fill15", "map"] },
      { label: "HOOD pair (official 12 Jul post)", address: "0xea7ba72be3baab20546bfda880b7e285e5a51168", role: "other", sources: ["fill15"] },
    ],
    positive: [
      { text: "The official account describes a flywheel of HOOD emissions (about 2,375 per day, 5M maximum) to LPs, protocol fees used for HOOD buybacks (633.93 HOOD for 0.012 ETH on 2026-08-28) and buybacks raising the backing of h33; the team states it holds no HOOD and no LP.", sources: ["fill13"] },
      { text: "The desk's auditor reported the HOOD token present on Blockscout 4663 with 395 holders and verified source, and DefiLlama lists SwapHood V3 with about $126–130k 24h volume.", sources: ["fill17", "fill15"] },
    ],
    risk: [
      { text: "The token's HOOD ticker is also the ticker of the Robinhood-issued HOOD Stock Token at a different address; the two are unrelated.", sources: ["fill17"] },
      { text: "The V3 factory is named PancakeV3Factory on the explorer with the same deployer as the token; the AMM is a PancakeSwap fork rather than the canonical Uniswap deployment.", sources: ["fill17", "map"] },
    ],
    unresolved: ["The h33 token and V2 factory addresses come from the project's gitbook and were not checked on the explorer by the desk."],
    feed: [
      { date: "2026-07-12", kind: "company", title: "HOOD token address", account: "@SwapHoodFi", sourceUrl: X("@SwapHoodFi"), sources: ["fill15"],
        body: "The account posted the HOOD token address and its pair." },
      { date: "2026-08-28", kind: "company", title: "Buyback", account: "@SwapHoodFi", sourceUrl: X("@SwapHoodFi"), sources: ["fill13"],
        body: "The account posted a buyback of 633.93 HOOD for 0.012 ETH as part of a flywheel of emissions, fees, buybacks and h33 backing, and stated the team holds no HOOD and no LP." },
      { date: "2026-08-31", kind: "onchain", title: "Explorer check by the desk", sourceUrl: "https://robinhoodchain.blockscout.com", sources: ["fill17"],
        body: "The desk's auditor reported the HOOD token on Blockscout 4663 (395 holders, source verified) and the V3 factory as a PancakeV3Factory contract with the same deployer." },
    ],
  },
};
