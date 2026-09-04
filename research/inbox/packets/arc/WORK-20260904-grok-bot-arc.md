---
contract_version: proofline-research-v2
work_id: WORK-20260904-grok-bot-arc
producer: grok-bot
role: collector
base_sha: 3f3d81b914547440ef0ea19aba49ae9d597eeb18
slug: arc
name: Arc
packet_tier: seed
as_of: 2026-09-04T14:05:00Z
prior_packet: null
owned_slugs: [arc]
allowed_paths:
  - research/inbox/packets/arc/WORK-20260904-grok-bot-arc.md
identity:
  canonical_name: Arc
  aliases: ["Arc Liquidity", "ArcLiquidity"]
  symbols: ["ARC"]
  entity_kind: protocol
  chain_scope: robinhood-native
  official_domain: https://arcliquidity.capital
  official_handle: "@ArcLiquidity"
  repository: "NULL — arcliquidity.capital, /docs and /app listed no GitHub org or repository path this round"
  possible_matches:
    - slug: arrow
      signals: [other]
      contrary_signals:
        - "Census Arrow Finance is @ArrowFinanceio / arrowfinance.io with tree credit/cdp"
        - "Arc is @ArcLiquidity / arcliquidity.capital with tree credit/isolated-money-market"
        - "No shared official handle, domain, or reproduced address"
        - "Arc's reproduced core set is ArcRegistry/ArcOracle/ArcPositionManager/ArcLendingPool/ArcCore/ArcZapRouter; none of those strings are Arrow CDP surfaces"
classification:
  primary_leaf: credit/isolated-money-market
  secondary_leaves: [credit/rwa-lending]
  mechanism_tags: [lending, rwa, vault, oracle]
  ecosystem_role: subject
  lifecycle: announced
  coverage_recommendation: seed
  evidence_state: partly-verified
  rationale: "Official docs describe CL positions valued as USDG collateral on Robinhood Chain. RPC and Blockscout this round reproduced a Pons v2 ARC token and six Arc-named core contracts, including ArcLendingPool, all on chain 4663. A Railway API the official app bundles lists six stock/USDG markets and pool totals; those balances were not independently read on explorer or DefiLlama, and Llama has no Arc Liquidity protocol row. Distinct from Arrow Finance CDP. Lifecycle stays announced until lending/market activity is reproduced beyond the project's own posts and API. [R-1] [R-2] [R-8] [R-9] [R-12]"
qualifying:
  deployed_on_chain: { status: pass, claim_ids: [CLM-3, CLM-4, CLM-5], note: "" }
  native_play:       { status: pass, claim_ids: [CLM-1, CLM-2], note: "" }
  citable:           { status: pass, claim_ids: [CLM-2, CLM-7], note: "" }
  research_story:    { status: pass, claim_ids: [CLM-1, CLM-14], note: "" }
links:
  - { kind: site, url: "https://arcliquidity.capital/", authenticity: confirmed }
  - { kind: app, url: "https://arcliquidity.capital/app/", authenticity: confirmed }
  - { kind: docs, url: "https://arcliquidity.capital/docs", authenticity: confirmed }
  - { kind: x, url: "https://x.com/ArcLiquidity", authenticity: unconfirmed }
  - { kind: explorer, url: "https://robinhoodchain.blockscout.com/address/0xce845443428867d271929bd739148b85524b536a", authenticity: confirmed }
  - { kind: explorer, url: "https://robinhoodchain.blockscout.com/address/0x618389d2048ee7e4c823cec121c5d07edd95d0de", authenticity: confirmed }
  - { kind: dexscreener, url: "https://dexscreener.com/robinhood/0xeeeaeab3b9e0bd2673163a02da8739922ba3c8d05feb75831e68db2e5890ebbc", authenticity: unconfirmed }
deployments:
  - label: Homepage Arc token contract (RPC name ARC LIQUIDITY, symbol ARC, PonsV2LauncherToken)
    role: token
    address:
      value: "0xce845443428867d271929bd739148B85524B536a"
      chain: robinhood-chain
      source: docs
      seen: 2026-09-04
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-1, R-8, R-10]
  - label: API-labeled ArcRegistry
    role: other
    address:
      value: "0xcfe634461795b5954c8fce02a677087a6c2c6b19"
      chain: robinhood-chain
      source: third-party
      seen: 2026-09-04
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-4, R-5, R-9, R-10]
  - label: API-labeled ArcOracle
    role: other
    address:
      value: "0x879be77045e99913215b8a2b72320cc3457c7a00"
      chain: robinhood-chain
      source: third-party
      seen: 2026-09-04
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-4, R-5, R-9, R-10]
  - label: API-labeled ArcPositionManager
    role: other
    address:
      value: "0x353b45eac23e6bad9c35e72304eab24312f16b31"
      chain: robinhood-chain
      source: third-party
      seen: 2026-09-04
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-4, R-5, R-9, R-10]
  - label: API-labeled ArcLendingPool
    role: vault
    address:
      value: "0x618389d2048ee7e4c823cec121c5d07edd95d0de"
      chain: robinhood-chain
      source: third-party
      seen: 2026-09-04
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-4, R-5, R-9, R-10]
  - label: API-labeled ArcCore
    role: other
    address:
      value: "0xa75fe67a563cdff3fcbf6c64bf5d85aab33fd1c7"
      chain: robinhood-chain
      source: third-party
      seen: 2026-09-04
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-4, R-5, R-9, R-10]
  - label: API-labeled ArcZapRouter
    role: router
    address:
      value: "0x6959773224c47060d8650b4e740c19c3d28b3fe7"
      chain: robinhood-chain
      source: third-party
      seen: 2026-09-04
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-4, R-5, R-9, R-10]
  - label: API-labeled NVDA/USDG Uniswap v3 pool (not an Arc token)
    role: other
    address:
      value: "0xd4EB21209C4D6093f80B5b84f5C45cc093EA14a3"
      chain: robinhood-chain
      source: third-party
      seen: 2026-09-04
      exists_on_4663: true
      explorer_source_verified: false
    receipt_ids: [R-7, R-10, R-18]
  - label: API-labeled AAPL/USDG Uniswap v3 pool (not an Arc token)
    role: other
    address:
      value: "0x783C9bbB765047CFdD2b84b92b2Ca9F11D34b7Ed"
      chain: robinhood-chain
      source: third-party
      seen: 2026-09-04
      exists_on_4663: true
      explorer_source_verified: false
    receipt_ids: [R-7, R-10]
  - label: API-labeled MSFT/USDG Uniswap v3 pool (not an Arc token)
    role: other
    address:
      value: "0xeb60bCD1D920ad6E102690CCFC6fB488899E1510"
      chain: robinhood-chain
      source: third-party
      seen: 2026-09-04
      exists_on_4663: true
      explorer_source_verified: false
    receipt_ids: [R-7, R-10]
  - label: API-labeled GOOGL/USDG Uniswap v3 pool (not an Arc token)
    role: other
    address:
      value: "0x34D0dC122CF9A8Eb296fC5e0D3A233625D7d19b7"
      chain: robinhood-chain
      source: third-party
      seen: 2026-09-04
      exists_on_4663: true
      explorer_source_verified: false
    receipt_ids: [R-7, R-10]
  - label: API-labeled AMZN/USDG Uniswap v3 pool (not an Arc token)
    role: other
    address:
      value: "0x8AC92DA74AB5F3b1d024Dc1943Ad7e15Dc4179Ef"
      chain: robinhood-chain
      source: third-party
      seen: 2026-09-04
      exists_on_4663: true
      explorer_source_verified: false
    receipt_ids: [R-7, R-10]
  - label: API-labeled TSLA/USDG Uniswap v3 pool (not an Arc token)
    role: other
    address:
      value: "0xf4ACdAEEB7022862A763C9B1B885e11191c889E3"
      chain: robinhood-chain
      source: third-party
      seen: 2026-09-04
      exists_on_4663: true
      explorer_source_verified: false
    receipt_ids: [R-7, R-10]
  - label: owner() of ArcRegistry/ArcOracle/ArcPositionManager/ArcLendingPool/ArcCore (EOA, no bytecode)
    role: admin
    address:
      value: "0xb1e919b33c7a69f51c584dc1f0d325cfd641d042"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-04
      exists_on_4663: false
      explorer_source_verified: null
    receipt_ids: [R-10, R-19]
metrics:
  - { kind: volume_24h, value: 2893.8, currency: USD, as_of: 2026-09-04T14:03:00Z, window: 24h, method: "api.dexscreener.com/token-pairs/v1/robinhood/0xce845443428867d271929bd739148b85524b536a volume.h24 on pair 0xeeeaeab3…ebbc", class: claim, receipt_ids: [R-11] }
  - { kind: market_cap, value: 11164, currency: USD, as_of: 2026-09-04T14:03:00Z, window: point, method: "api.dexscreener.com/token-pairs/v1/robinhood/0xce845443428867d271929bd739148b85524b536a marketCap on pair 0xeeeaeab3…ebbc", class: claim, receipt_ids: [R-11] }
  - { kind: tvl, value: 15.245929, currency: USDG, as_of: 2026-09-04T14:01:00Z, window: point, method: "GET back-end-production-b628.up.railway.app/v1/pool totalAssets", class: claim, receipt_ids: [R-6] }
reproductions:
  - { id: REP-1, method: explorer-rpc, chain_id: 4663, checked_at: 2026-09-04T14:02:00Z, receipt_ids: [R-8, R-10], result: "eth_getCode at 0xce845443428867d271929bd739148b85524b536a non-empty (6496 hex chars) at block 54320413. eth_call name() ARC LIQUIDITY, symbol() ARC, decimals() 18, totalSupply() 1000000000000000000000000000 (1,000,000,000 * 10^18). owner() reverted. Blockscout API v2 name PonsV2LauncherToken, is_fully_verified true, file_path contracts/src/v2/PonsV2LauncherToken.sol. HTML title lists the address on Robinhood Chain." }
  - { id: REP-2, method: explorer-rpc, chain_id: 4663, checked_at: 2026-09-04T14:02:00Z, receipt_ids: [R-9, R-10], result: "eth_getCode non-empty on registry 0xcfe634…6b19 (14914), oracle 0x879be7…7a00 (10516), positionManager 0x353b45…6b31 (23698), lendingPool 0x618389…d0de (12254), core 0xa75fe6…d1c7 (12602), zapRouter 0x695977…3fe7 (15044). Blockscout API v2 is_fully_verified true with names ArcRegistry, ArcOracle, ArcPositionManager, ArcLendingPool, ArcCore, ArcZapRouter." }
  - { id: REP-3, method: explorer-rpc, chain_id: 4663, checked_at: 2026-09-04T14:02:00Z, receipt_ids: [R-10, R-19], result: "owner() on ArcRegistry, ArcOracle, ArcPositionManager, ArcLendingPool, and ArcCore returned 0xb1e919b33c7a69f51c584dc1f0d325cfd641d042. eth_getCode on that address empty (EOA). ArcZapRouter owner() reverted. Blockscout API v2 on the EOA returned 404." }
  - { id: REP-4, method: explorer-rpc, chain_id: 4663, checked_at: 2026-09-04T14:02:00Z, receipt_ids: [R-10, R-18], result: "eth_getCode non-empty (44284 hex chars) on all six API-labeled market pools. NVDA pool 0xd4EB21…14a3 Blockscout API v2 name UniswapV3Pool, is_fully_verified false, is_partially_verified true. owner() reverted on each pool." }
  - { id: REP-5, method: api, chain_id: 4663, checked_at: 2026-09-04T14:02:00Z, receipt_ids: [R-12, R-13], result: "api.llama.fi/v2/chains listed name Robinhood Chain chainId 4663 tvl 840982408.8156091. api.llama.fi/protocols listed 141 rows whose chains include Robinhood Chain, and no row whose name or slug is Arc Liquidity, ArcLiquidity, or arcliquidity. Hits whose name/slug contain arc (Arcus Perps, Arcadia V2, Aave Arc, others) are other products." }
  - { id: REP-6, method: api, chain_id: 4663, checked_at: 2026-09-04T14:01:00Z, receipt_ids: [R-4, R-5, R-6, R-7], result: "Official app JS hardcodes https://back-end-production-b628.up.railway.app. GET /v1/health {status: ok}. GET /v1/config chainId 4663 with the six Arc core addresses and borrowAsset USDG 0x5fc5360D0400a0Fd4f2af552ADD042D716F1d168. GET /v1/pool totalAssets 15.245929 totalBorrows 15.051027 availableLiquidity 0.200003 utilizationPercent 98.68. GET /v1/markets returned six pairs NVDA/AAPL/MSFT/GOOGL/AMZN/TSLA vs USDG. Railway host is not arcliquidity.capital." }
claims:
  - { id: CLM-1, field: product.mechanism, value: "Official docs say Arc is the liquidity margin layer on Robinhood Chain: a concentrated-liquidity position can earn fees and be valued as collateral for USDG credit without unwinding. Launch set named NVDA, AAPL, MSFT, GOOGL, AMZN, TSLA each against USDG. Docs label on-page figures as demo values and say live protocol parameters are published at launch.", class: claim, observed_at: 2026-09-04T14:01:00Z, receipt_ids: [R-1, R-2], reproduction_ids: [], supersedes: null }
  - { id: CLM-2, field: identity.domain, value: "https://arcliquidity.capital", class: claim, observed_at: 2026-09-04T14:01:00Z, receipt_ids: [R-1, R-3, R-11], reproduction_ids: [], supersedes: null }
  - { id: CLM-3, field: deployment.address, value: "0xce845443428867d271929bd739148B85524B536a", class: verified, observed_at: 2026-09-04T14:02:00Z, receipt_ids: [R-1, R-8, R-10], reproduction_ids: [REP-1], supersedes: null }
  - { id: CLM-4, field: deployment.address, value: "0x618389d2048ee7e4c823cec121c5d07edd95d0de", class: verified, observed_at: 2026-09-04T14:02:00Z, receipt_ids: [R-5, R-9, R-10], reproduction_ids: [REP-2], supersedes: null }
  - { id: CLM-5, field: deployment.address, value: "0xcfe634461795b5954c8fce02a677087a6c2c6b19", class: verified, observed_at: 2026-09-04T14:02:00Z, receipt_ids: [R-5, R-9, R-10], reproduction_ids: [REP-2], supersedes: null }
  - { id: CLM-6, field: lifecycle, value: announced, class: claim, observed_at: 2026-09-04T14:02:00Z, receipt_ids: [R-2, R-12, R-14], reproduction_ids: [], supersedes: null }
  - { id: CLM-7, field: identity.handle, value: "@ArcLiquidity", class: claim, observed_at: 2026-09-04T14:01:00Z, receipt_ids: [R-1, R-11], reproduction_ids: [], supersedes: null }
  - { id: CLM-8, field: identity.symbol, value: ARC, class: verified, observed_at: 2026-09-04T14:02:00Z, receipt_ids: [R-1, R-8, R-11], reproduction_ids: [REP-1], supersedes: null }
  - { id: CLM-9, field: identity.name, value: ARC LIQUIDITY, class: verified, observed_at: 2026-09-04T14:02:00Z, receipt_ids: [R-8, R-11], reproduction_ids: [REP-1], supersedes: null }
  - { id: CLM-10, field: control.owner, value: "0xb1e919b33c7a69f51c584dc1f0d325cfd641d042", class: verified, observed_at: 2026-09-04T14:02:00Z, receipt_ids: [R-10, R-19], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-11, field: economics.metric, value: "Homepage JS and RPC totalSupply agree on 1,000,000,000 ARC (18 decimals). Token owner() reverted, so a single-key ERC-20 owner was not read.", class: verified, observed_at: 2026-09-04T14:02:00Z, receipt_ids: [R-1, R-8], reproduction_ids: [REP-1], supersedes: null }
  - { id: CLM-12, field: economics.metric, value: "DefiLlama has no Arc Liquidity protocol row on Robinhood Chain as of 2026-09-04. Token and core contracts existing is not a protocol TVL row. Chain-slice TVL 840982408.8156091 USD is not an Arc figure.", class: verified, observed_at: 2026-09-04T14:02:00Z, receipt_ids: [R-12, R-13], reproduction_ids: [REP-5], supersedes: null }
  - { id: CLM-13, field: economics.metric, value: "DexScreener Uniswap pair base ARC LIQUIDITY/ARC quote Ether, volume.h24 2893.8 USD, liquidity.usd 9687.9, marketCap 11164, pairCreatedAt 2026-08-28T14:02:18Z, websites arcliquidity.capital, socials x.com/ArcLiquidity", class: claim, observed_at: 2026-09-04T14:03:00Z, receipt_ids: [R-11], reproduction_ids: [], supersedes: null }
  - { id: CLM-14, field: relationship, value: "Arc is not census arrow: different handle, domain, and reproduced Arc-named core addresses. Arrow is credit/cdp; Arc is credit/isolated-money-market.", class: verified, observed_at: 2026-09-04T14:02:00Z, receipt_ids: [R-1, R-9], reproduction_ids: [REP-2], supersedes: null }
  - { id: CLM-15, field: relationship, value: "API borrowAsset USDG 0x5fc5360D0400a0Fd4f2af552ADD042D716F1d168 and the six stock-token addresses inside /v1/markets match known Robinhood Chain stock-token / USDG strings. They are not Arc deployments and are not filed as Arc tokens.", class: claim, observed_at: 2026-09-04T14:01:00Z, receipt_ids: [R-5, R-7], reproduction_ids: [], supersedes: null }
  - { id: CLM-16, field: product.mechanism, value: "Signed-in X scout intake, 2026-09-01 https://x.com/ArcLiquidity/status/2094877861681451449: Arc v1 live on Robinhood Chain; six USDG-quoted markets (NVDA, AAPL, MSFT, GOOGL, AMZN, TSLA); nine positions; funded lending pool; loan executed without unwinding liquidity; more oracle-priced markets coming; URL https://arcliquidity.capital/app/. This environment's X path returned no post bodies.", class: claim, observed_at: 2026-09-04T14:04:00Z, receipt_ids: [R-14], reproduction_ids: [], supersedes: null }
  - { id: CLM-17, field: communications.status, value: "Signed-in X scout intake, 2026-09-01 https://x.com/ArcLiquidity/status/2094769217815847119 quote: The contracts are deployed, the markets are live, and LP positions have already been opened onchain. X may label the post unavailable; still attributed.", class: claim, observed_at: 2026-09-04T14:04:00Z, receipt_ids: [R-15], reproduction_ids: [], supersedes: null }
  - { id: CLM-18, field: product.mechanism, value: "Signed-in X scout intake, 2026-09-01 https://x.com/ArcLiquidity/status/2094693595479499086: deposit then collateral then credit end-to-end on Robinhood Chain mainnet; six CL markets, USDG lending, loan while liquidity stayed in range.", class: claim, observed_at: 2026-09-04T14:04:00Z, receipt_ids: [R-16], reproduction_ids: [], supersedes: null }
  - { id: CLM-19, field: product.mechanism, value: "Signed-in X scout intake, 2026-08-31 https://x.com/ArcLiquidity/status/2094552389629944140: lending/borrowing live; 65% borrow limit, 75% liquidation threshold, 6% liquidation bonus. Blockscout lend/borrow tx links were shown but truncated in capture.", class: claim, observed_at: 2026-09-04T14:04:00Z, receipt_ids: [R-17], reproduction_ids: [], supersedes: null }
  - { id: CLM-20, field: product.mechanism, value: "Railway /v1/markets: six markets, positionsEnabled true. NVDA/AAPL/MSFT/GOOGL/AMZN collateral Eligible; TSLA Under review. Stock collateralFactorBps 6500, liquidationThresholdBps 7500, liquidationBonusBps 600 except TSLA 5500/6500/800. Matches the 65/75/6 X claim for the Eligible set.", class: claim, observed_at: 2026-09-04T14:01:00Z, receipt_ids: [R-7, R-17], reproduction_ids: [REP-6], supersedes: null }
  - { id: CLM-21, field: security.audit, value: "Docs copy: Arc is software deployed onchain, and v1 has not been audited. Testing is described as finding only the defects it was written to look for. No audit report or bounty page was located on arcliquidity.capital this round.", class: claim, observed_at: 2026-09-04T14:01:00Z, receipt_ids: [R-2], reproduction_ids: [], supersedes: null }
  - { id: CLM-22, field: communications.status, value: "third-party-link: official app bundle assets/app-BHKlLO45.js hardcodes backend https://back-end-production-b628.up.railway.app, which is not the arcliquidity.capital origin. Core and pool CAs in this packet that came from that host are source third-party.", class: claim, observed_at: 2026-09-04T14:01:00Z, receipt_ids: [R-4, R-5], reproduction_ids: [REP-6], supersedes: null }
  - { id: CLM-23, field: "account.@ArcLiquidity.flag", value: "third-party-link", class: claim, observed_at: 2026-09-04T14:01:00Z, receipt_ids: [R-4], reproduction_ids: [], supersedes: null }
  - { id: CLM-24, field: "account.@ArcLiquidity.role", value: project, class: claim, observed_at: 2026-09-04T14:01:00Z, receipt_ids: [R-1, R-11], reproduction_ids: [], supersedes: null }
  - { id: CLM-25, field: "account.@ArcLiquidity.follow", value: true, class: claim, observed_at: 2026-09-04T14:01:00Z, receipt_ids: [R-1, R-11], reproduction_ids: [], supersedes: null }
  - { id: CLM-26, field: "account.@ArcLiquidity.listen", value: high, class: claim, observed_at: 2026-09-04T14:02:00Z, receipt_ids: [R-1, R-8, R-9], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-27, field: "account.@ArcLiquidity.slug", value: arc, class: claim, observed_at: 2026-09-04T14:01:00Z, receipt_ids: [R-1], reproduction_ids: [], supersedes: null }
  - { id: CLM-28, field: "account.@ArcLiquidity.conflict", value: team, class: claim, observed_at: 2026-09-04T14:01:00Z, receipt_ids: [R-1], reproduction_ids: [], supersedes: null }
  - { id: CLM-29, field: communications.status, value: "X Latest for @ArcLiquidity was not readable in this environment (HTTP 200, no post bodies). Dated posts in CLM-16–CLM-19 are signed-in scout intake, not recovered here.", class: unknown, observed_at: 2026-09-04T14:04:00Z, receipt_ids: [], reproduction_ids: [], supersedes: null }
conflicts:
  - id: CON-1
    field: deployment.address
    claim_ids: [CLM-3, CLM-4]
    material_effect: "Homepage copy labels 0xce84… the only official contract, while the app-bundled API and Blockscout also show ArcLendingPool 0x618389… and five sibling Arc-named contracts. Which surface a reader verifies changes what they treat as Arc."
    status: open
    resolution: null
events:
  - id: EVT-1
    type: onchain
    title: "ARC LIQUIDITY / ARC token exists on chain 4663"
    summary: "RPC at block 54320413 returned non-empty code at 0xce845443428867d271929bd739148b85524b536a. name() ARC LIQUIDITY, symbol() ARC, decimals 18, totalSupply 1,000,000,000 * 10^18. Homepage JS publishes this address as the Arc token contract. Blockscout API v2 is fully verified PonsV2LauncherToken. DexScreener pairCreatedAt 2026-08-28T14:02:18Z."
    account: null
    occurred_at: 2026-08-28T14:02:18Z
    observed_at: 2026-09-04T14:02:00Z
    affected_fields: [deployment.address, identity.symbol, identity.name]
    evidence_state: verified
    impact: material
    site_recommendation: both
    channel_recommendation: none
    receipt_ids: [R-1, R-8, R-10, R-11]
  - id: EVT-2
    type: onchain
    title: "ArcLendingPool verified source on Blockscout"
    summary: "RPC returned non-empty code at 0x618389d2048ee7e4c823cec121c5d07edd95d0de. Blockscout API v2 name ArcLendingPool, is_fully_verified true, file_path project/src/core/ArcLendingPool.sol. Sibling API addresses verified as ArcRegistry, ArcOracle, ArcPositionManager, ArcCore, ArcZapRouter. owner() on five of six is EOA 0xb1e919b33c7a69f51c584dc1f0d325cfd641d042. Lending balances were not independently decoded."
    account: null
    occurred_at: 2026-09-04T14:02:00Z
    observed_at: 2026-09-04T14:02:00Z
    affected_fields: [deployment.address, control.owner]
    evidence_state: verified
    impact: material
    site_recommendation: both
    channel_recommendation: none
    receipt_ids: [R-5, R-9, R-10]
  - id: EVT-3
    type: company
    title: "ArcLiquidity: v1 live, six USDG markets"
    summary: "Signed-in X scout intake of https://x.com/ArcLiquidity/status/2094877861681451449 (2026-09-01): Arc v1 live on Robinhood Chain; six USDG-quoted markets NVDA, AAPL, MSFT, GOOGL, AMZN, TSLA; nine positions; funded lending pool; loan without unwinding liquidity; more oracle-priced markets coming; URL https://arcliquidity.capital/app/. This environment did not recover the post body."
    account: "@ArcLiquidity"
    occurred_at: 2026-09-01T00:00:00Z
    observed_at: 2026-09-04T14:04:00Z
    affected_fields: [product.mechanism, lifecycle]
    evidence_state: claim
    impact: material
    site_recommendation: feed
    channel_recommendation: none
    receipt_ids: [R-14]
  - id: EVT-4
    type: company
    title: "Contracts deployed, markets live, LP opened"
    summary: "Signed-in X scout intake of https://x.com/ArcLiquidity/status/2094769217815847119 (2026-09-01). Quoted text: The contracts are deployed, the markets are live, and LP positions have already been opened onchain. X may label the post unavailable; still attributed. This environment did not recover the post body."
    account: "@ArcLiquidity"
    occurred_at: 2026-09-01T00:00:00Z
    observed_at: 2026-09-04T14:04:00Z
    affected_fields: [communications.status, product.mechanism]
    evidence_state: claim
    impact: material
    site_recommendation: feed
    channel_recommendation: none
    receipt_ids: [R-15]
  - id: EVT-5
    type: company
    title: "Deposit-to-credit E2E claimed on RH mainnet"
    summary: "Signed-in X scout intake of https://x.com/ArcLiquidity/status/2094693595479499086 (2026-09-01): deposit then collateral then credit end-to-end on Robinhood Chain mainnet; six CL markets, USDG lending, loan while liquidity stayed in range. This environment did not recover the post body."
    account: "@ArcLiquidity"
    occurred_at: 2026-09-01T00:00:00Z
    observed_at: 2026-09-04T14:04:00Z
    affected_fields: [product.mechanism, lifecycle]
    evidence_state: claim
    impact: material
    site_recommendation: feed
    channel_recommendation: none
    receipt_ids: [R-16]
  - id: EVT-6
    type: company
    title: "Lending/borrow params 65/75/6 claimed live"
    summary: "Signed-in X scout intake of https://x.com/ArcLiquidity/status/2094552389629944140 (2026-08-31): lending/borrowing live; 65% borrow limit, 75% liquidation threshold, 6% liquidation bonus. Blockscout lend/borrow tx links were shown but truncated in capture. This environment did not recover the post body."
    account: "@ArcLiquidity"
    occurred_at: 2026-08-31T00:00:00Z
    observed_at: 2026-09-04T14:04:00Z
    affected_fields: [product.mechanism, economics.metric]
    evidence_state: claim
    impact: material
    site_recommendation: feed
    channel_recommendation: none
    receipt_ids: [R-17]
receipts:
  - { id: R-1, publisher: Arc, title: "Official site arcliquidity.capital", url: "https://arcliquidity.capital/", published_at: null, accessed_at: 2026-09-04T14:01:00Z, kind: official-site, authority: primary, authenticity: confirmed, supports: [CLM-1, CLM-2, CLM-3, CLM-7, CLM-8, CLM-11, CLM-14, CLM-24, CLM-25, CLM-26, CLM-27, CLM-28, EVT-1], excerpt: "HTTP 200. SPA bundle assets/home-CWhF5yzM.js hardcodes 0xce845443428867d271929bd739148b85524b536a as Arc token contract, copy The only official contract. Mechanism copy: liquidity margin layer on Robinhood Chain; position liquidity; keep buying power. Launch App links /app/." }
  - { id: R-2, publisher: Arc, title: "arcliquidity.capital/docs", url: "https://arcliquidity.capital/docs", published_at: null, accessed_at: 2026-09-04T14:01:00Z, kind: docs, authority: primary, authenticity: confirmed, supports: [CLM-1, CLM-6, CLM-21], excerpt: "HTTP 200. Docs JS: Arc is the liquidity margin layer on Robinhood Chain. Launch set NVDA AAPL MSFT GOOGL AMZN TSLA each against USDG. Figures used across this site are the demo value. Copy: v1 has not been audited." }
  - { id: R-3, publisher: Arc, title: "arcliquidity.capital/app/", url: "https://arcliquidity.capital/app/", published_at: null, accessed_at: 2026-09-04T14:01:00Z, kind: official-site, authority: primary, authenticity: confirmed, supports: [CLM-2], excerpt: "HTTP 200. SPA shell 884 bytes; application bundle assets/app-BHKlLO45.js. No contract address in the HTML itself." }
  - { id: R-4, publisher: Arc app bundle, title: "app-BHKlLO45.js hardcoded Railway backend", url: "https://arcliquidity.capital/assets/app-BHKlLO45.js", published_at: null, accessed_at: 2026-09-04T14:01:00Z, kind: other, authority: primary, authenticity: confirmed, supports: [CLM-22, CLM-23, EVT-2], excerpt: "Bundle hardcodes https://back-end-production-b628.up.railway.app. That host is not arcliquidity.capital. Flag third-party-link for CAs taken from that API." }
  - { id: R-5, publisher: Railway Arc backend, title: "GET /v1/config chainId 4663", url: "https://back-end-production-b628.up.railway.app/v1/config", published_at: null, accessed_at: 2026-09-04T14:01:00Z, kind: third-party-data, authority: unknown, authenticity: unconfirmed, supports: [CLM-4, CLM-5, CLM-15, CLM-22, EVT-2], excerpt: "JSON chainId 4663. contracts registry 0xcfe634461795b5954c8fce02a677087a6c2c6b19 oracle 0x879be77045e99913215b8a2b72320cc3457c7a00 positionManager 0x353b45eac23e6bad9c35e72304eab24312f16b31 lendingPool 0x618389d2048ee7e4c823cec121c5d07edd95d0de core 0xa75fe67a563cdff3fcbf6c64bf5d85aab33fd1c7 zapRouter 0x6959773224c47060d8650b4e740c19c3d28b3fe7. borrowAsset USDG 0x5fc5360D0400a0Fd4f2af552ADD042D716F1d168 decimals 6." }
  - { id: R-6, publisher: Railway Arc backend, title: "GET /v1/pool USDG totals", url: "https://back-end-production-b628.up.railway.app/v1/pool", published_at: null, accessed_at: 2026-09-04T14:01:00Z, kind: third-party-data, authority: unknown, authenticity: unconfirmed, supports: [CLM-12], excerpt: "asset USDG 0x5fc5360D0400a0Fd4f2af552ADD042D716F1d168. totalAssets 15.245929 totalBorrows 15.051027 availableLiquidity 0.200003 utilizationPercent 98.68 borrowAprPercent 97.40 supplyAprPercent 86.50 reserveFactorBps 1000. API claim, not explorer-decoded." }
  - { id: R-7, publisher: Railway Arc backend, title: "GET /v1/markets six stock/USDG pools", url: "https://back-end-production-b628.up.railway.app/v1/markets", published_at: null, accessed_at: 2026-09-04T14:01:00Z, kind: third-party-data, authority: unknown, authenticity: unconfirmed, supports: [CLM-15, CLM-20], excerpt: "Six markets positionsEnabled true. Pools NVDA 0xd4EB21209C4D6093f80B5b84f5C45cc093EA14a3 AAPL 0x783C9bbB765047CFdD2b84b92b2Ca9F11D34b7Ed MSFT 0xeb60bCD1D920ad6E102690CCFC6fB488899E1510 GOOGL 0x34D0dC122CF9A8Eb296fC5e0D3A233625D7d19b7 AMZN 0x8AC92DA74AB5F3b1d024Dc1943Ad7e15Dc4179Ef TSLA 0xf4ACdAEEB7022862A763C9B1B885e11191c889E3. TSLA collateral Under review." }
  - { id: R-8, publisher: Blockscout, title: "ARC token 0xce845443…", url: "https://robinhoodchain.blockscout.com/address/0xce845443428867d271929bd739148b85524b536a", published_at: null, accessed_at: 2026-09-04T14:02:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-3, CLM-8, CLM-9, CLM-11, EVT-1], excerpt: "HTML title: Robinhood Chain address details for 0xce845443428867d271929bd739148b85524b536a | Blockscout. HTTP 200. API v2 PonsV2LauncherToken is_fully_verified true. RPC name ARC LIQUIDITY symbol ARC decimals 18 totalSupply 1e9*10^18, code 6496 hex chars, block 54320413." }
  - { id: R-9, publisher: Blockscout, title: "ArcLendingPool 0x618389d2…", url: "https://robinhoodchain.blockscout.com/address/0x618389d2048ee7e4c823cec121c5d07edd95d0de", published_at: null, accessed_at: 2026-09-04T14:02:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-4, CLM-5, CLM-14, EVT-2], excerpt: "HTML HTTP 200. API v2 ArcLendingPool is_fully_verified true file_path project/src/core/ArcLendingPool.sol. Same check: ArcRegistry, ArcOracle, ArcPositionManager, ArcCore, ArcZapRouter all is_fully_verified true. Lending state not decoded." }
  - { id: R-10, publisher: "Robinhood Chain RPC", title: "eth_getCode / eth_call on chain 4663", url: "https://rpc.mainnet.chain.robinhood.com", published_at: null, accessed_at: 2026-09-04T14:02:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-3, CLM-4, CLM-5, CLM-10, EVT-1, EVT-2], excerpt: "JSON-RPC eth_blockNumber 0x33cdd1d (54320413). Non-empty code on ARC token, six Arc-named core contracts, and six API-labeled Uniswap v3 pools. owner() of five core contracts 0xb1e919b33c7a69f51c584dc1f0d325cfd641d042 with empty code." }
  - { id: R-11, publisher: DexScreener, title: "ARC/ETH Uniswap pair on Robinhood", url: "https://dexscreener.com/robinhood/0xeeeaeab3b9e0bd2673163a02da8739922ba3c8d05feb75831e68db2e5890ebbc", published_at: null, accessed_at: 2026-09-04T14:03:00Z, kind: third-party-data, authority: aggregator, authenticity: unconfirmed, supports: [CLM-2, CLM-7, CLM-8, CLM-13, CLM-24, CLM-25, EVT-1], excerpt: "api.dexscreener.com token-pairs robinhood/0xce845443…: uniswap, base ARC LIQUIDITY/ARC, quote Ether, volume.h24 2893.8, liquidity.usd 9687.9, marketCap 11164, pairCreatedAt 1787925738000 (2026-08-28T14:02:18Z), websites https://arcliquidity.capital/, socials https://x.com/ArcLiquidity." }
  - { id: R-12, publisher: DefiLlama, title: "Protocols API, Robinhood Chain slice", url: "https://api.llama.fi/protocols", published_at: null, accessed_at: 2026-09-04T14:02:00Z, kind: third-party-data, authority: aggregator, authenticity: unconfirmed, supports: [CLM-6, CLM-12], excerpt: "141 protocol rows listed Robinhood Chain among chains. No Arc Liquidity, ArcLiquidity, or arcliquidity row. Other arc-substring names (Arcus Perps, Arcadia V2, Aave Arc) are different products." }
  - { id: R-13, publisher: DefiLlama, title: "Chains API Robinhood Chain TVL", url: "https://api.llama.fi/v2/chains", published_at: null, accessed_at: 2026-09-04T14:02:00Z, kind: third-party-data, authority: aggregator, authenticity: unconfirmed, supports: [CLM-12], excerpt: "Row name Robinhood Chain, chainId 4663, tvl 840982408.8156091 as of this request. Chain TVL is not an Arc protocol figure." }
  - { id: R-14, publisher: "@ArcLiquidity", title: "status/2094877861681451449 v1 live six markets", url: "https://x.com/ArcLiquidity/status/2094877861681451449", published_at: 2026-09-01, accessed_at: 2026-09-04T14:04:00Z, kind: social, authority: social, authenticity: unconfirmed, supports: [CLM-16, EVT-3], excerpt: "Signed-in X scout intake 2026-09-04. This environment HTTP 200 with no post body. Paraphrase: Arc v1 live on Robinhood Chain; six USDG-quoted markets NVDA AAPL MSFT GOOGL AMZN TSLA; nine positions; funded lending pool; loan without unwinding liquidity; more oracle-priced markets coming; https://arcliquidity.capital/app/." }
  - { id: R-15, publisher: "@ArcLiquidity", title: "status/2094769217815847119 contracts deployed quote", url: "https://x.com/ArcLiquidity/status/2094769217815847119", published_at: 2026-09-01, accessed_at: 2026-09-04T14:04:00Z, kind: social, authority: social, authenticity: unconfirmed, supports: [CLM-17, EVT-4], excerpt: "Signed-in X scout intake 2026-09-04. This environment did not recover the post body. X may label unavailable; still attributed. Quote: The contracts are deployed, the markets are live, and LP positions have already been opened onchain." }
  - { id: R-16, publisher: "@ArcLiquidity", title: "status/2094693595479499086 deposit-to-credit E2E", url: "https://x.com/ArcLiquidity/status/2094693595479499086", published_at: 2026-09-01, accessed_at: 2026-09-04T14:04:00Z, kind: social, authority: social, authenticity: unconfirmed, supports: [CLM-18, EVT-5], excerpt: "Signed-in X scout intake 2026-09-04. This environment did not recover the post body. Paraphrase: deposit then collateral then credit end-to-end on Robinhood Chain mainnet; six CL markets, USDG lending, loan while liquidity stayed in range." }
  - { id: R-17, publisher: "@ArcLiquidity", title: "status/2094552389629944140 lending params 65/75/6", url: "https://x.com/ArcLiquidity/status/2094552389629944140", published_at: 2026-08-31, accessed_at: 2026-09-04T14:04:00Z, kind: social, authority: social, authenticity: unconfirmed, supports: [CLM-19, CLM-20, EVT-6], excerpt: "Signed-in X scout intake 2026-09-04. This environment did not recover the post body. Paraphrase: lending/borrowing live; 65% borrow limit, 75% liquidation threshold, 6% liquidation bonus. Blockscout lend/borrow tx links shown but truncated in capture." }
  - { id: R-18, publisher: Blockscout, title: "NVDA/USDG pool 0xd4EB2120… UniswapV3Pool", url: "https://robinhoodchain.blockscout.com/address/0xd4EB21209C4D6093f80B5b84f5C45cc093EA14a3", published_at: null, accessed_at: 2026-09-04T14:02:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-20], excerpt: "HTML HTTP 200. API v2 name UniswapV3Pool is_fully_verified false is_partially_verified true compiler v0.7.6. RPC code 44284 hex chars. API-labeled Arc market pool, not an Arc token." }
  - { id: R-19, publisher: Blockscout, title: "Core owner EOA 0xb1e919b3…", url: "https://robinhoodchain.blockscout.com/address/0xb1e919b33c7a69f51c584dc1f0d325cfd641d042", published_at: null, accessed_at: 2026-09-04T14:02:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-10], excerpt: "HTML HTTP 200. API v2 smart-contracts 404. RPC eth_getCode empty. owner() of ArcRegistry/ArcOracle/ArcPositionManager/ArcLendingPool/ArcCore returned this address." }
gaps:
  - { priority: P0, question: "Do ArcLendingPool totalAssets/totalBorrows on explorer match the Railway /v1/pool numbers?", checked: "Railway API reported 15.245929 / 15.051027 USDG; this round did not eth_call the pool balances, 2026-09-04", next: "eth_call totalAssets/totalBorrows (or equivalent) on 0x618389… and compare to /v1/pool" }
  - { priority: P0, question: "Can owner() on ArcRegistry and ArcLendingPool change markets, oracles, or liquidation params without a timelock?", checked: "owner() returned one EOA on five core contracts; no timelock address was published on the site this round", next: "Read verified source setters and any timelock/proxy on the Arc-named contracts" }
  - { priority: P1, question: "Independent explorer reproduction of open LP positions and a USDG borrow, beyond the project's posts and API?", checked: "Six UniswapV3Pool contracts exist; X posts claim nine positions and a loan; pool liquidity not decoded from explorer", next: "Read positionManager positions and a sample borrow tx on Blockscout" }
  - { priority: P1, question: "X Latest from @ArcLiquidity in this environment?", checked: "x.com HTTP 200 without post bodies; four dated posts ingested from a signed-in scout, not recovered here", next: "Re-run Latest on @ArcLiquidity when this environment can read post bodies" }
  - { priority: P2, question: "Is there a DefiLlama protocol row or GitHub org still missing?", checked: "api.llama.fi/protocols 2026-09-04 no Arc Liquidity row; site listed no GitHub path", next: "Watch Llama listings and any repository link the official pages add" }
---

## What it is

Arc is a liquidity-margin layer on Robinhood Chain. Official docs say a CL position can stay in range while valued as USDG collateral. The homepage publishes token `0xce84…` as ARC LIQUIDITY / ARC. An app-bundled Railway API lists six stock/USDG markets and an ArcLendingPool. RPC and Blockscout reproduced the token and six Arc-named core contracts on chain 4663. Distinct from Arrow Finance CDP. Lending balances were not independently read on DefiLlama.

Themes: lending, rwa, vault, oracle

TL;DR: Arc on chain 4663: LP-as-collateral USDG credit; ARC token and ArcLendingPool exist; six stock/USDG markets claimed. [CLM-1 CLM-3]

## Why it matters

- Thesis: a native isolated money market that values CL positions as USDG collateral is a different machine from Arrow Finance CDP. [claim R-1] [verified R-8]
- Traction: ARC token, ArcLendingPool, and five sibling Arc contracts have verified source and bytecode on 4663; DexScreener 24h volume about $2.9k. [verified R-8 R-9] [claim R-11]
- Catalyst: still off census after the 2026-08-31 candidate; this packet is the seed for slug arc. [claim R-1] [verified R-8]

## What could go wrong

- Docs state v1 has not been audited; testing is not an audit. [claim R-2]
- ArcRegistry, ArcOracle, ArcPositionManager, ArcLendingPool, and ArcCore owner() is one EOA. [verified R-9]
- USDG pool totals in this round came from a Railway API, not an explorer or DefiLlama protocol row. [claim R-6] [verified R-12]

## Operations log

- 2026-09-04: grok-bot field desk follow-up on `grok/2026-09-04` / PR #82. Gap hunted: Arc / `@ArcLiquidity` (on accounts, off census). Keep Floor packet; additive intake only. This environment's X path still closed; four dated `@ArcLiquidity` posts ingested from a signed-in scout (R-14–R-17) without inventing extra claims. Official site + /app + /docs + Railway API (flagged third-party-link) + RPC `https://rpc.mainnet.chain.robinhood.com` + Blockscout HTML and API v2 + DefiLlama chains/protocols + DexScreener token-pairs. Lifecycle stays announced: contracts exist, lending/market activity not independently decoded on explorer or Llama. Candidate slug `arc` (not `arc-liquidity`) matches round-22 / account-desk. Did not write `content/census.yaml` or `content/accounts.yaml`. Floor additive for the 2026-08-24 `@Floor_fi` post lives in the existing Floor packet.
