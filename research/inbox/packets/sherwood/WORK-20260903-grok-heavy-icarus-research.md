---
# Packet v2 (docs/research-system.md §5). Seed with full-shaped frontmatter.
contract_version: proofline-research-v2
work_id: WORK-20260903-grok-heavy-icarus-research
producer: grok-heavy
role: collector
base_sha: 334ca0619aa62e922da83f46de021f06d12348cf
slug: sherwood
name: Sherwood
packet_tier: seed
as_of: 2026-09-03T03:10:00Z
prior_packet: null
supersedes: null
owned_slugs: [sherwood]
allowed_paths:
  - research/inbox/packets/sherwood/WORK-20260903-grok-heavy-icarus-research.md

identity:
  canonical_name: Sherwood
  aliases: [Sherwood.cash, sherwood.cash]
  symbols: [SHERWOOD]
  entity_kind: protocol
  chain_scope: robinhood-native
  official_domain: https://sherwood.cash
  official_handle: "@sherw00d_cash"
  repository: https://github.com/sherwood-cash/contracts
  possible_matches:
    - slug: pons
      signals: [other]
      contrary_signals:
        - "Census Pons is ponsfamily.com / @ponsdotfamily, a launchpad; census Sherwood is sherwood.cash / @sherw00d_cash, a privacy vault"
        - "$SHERWOOD is a PonsV2LauncherToken created by PonsV2LaunchAndBuy 0xe33E9E47…2948; that is a launch path, not a shared official domain or handle"
        - "Keep both slugs; do not merge"

classification:
  primary_leaf: privacy/private-transfer
  secondary_leaves: [trading/amm-imported]
  mechanism_tags: [privacy, amm]
  ecosystem_role: subject
  lifecycle: mainnet
  coverage_recommendation: full
  evidence_state: partly-verified
  rationale: "SherwoodVault 0xf540…0736 is a verified-source immutable mixer+DEX on chain 4663; Llama currentChainTvls Robinhood Chain is 72357. $SHERWOOD 0xD4DC…92c1 is a Pons v2 token. SwapLogic is a UUPS proxy whose implementation is unverified; CONFIG_TIMELOCK is 0. [R-2] [R-3] [R-5] [R-6] [R-8]"

qualifying:
  deployed_on_chain: { status: pass, claim_ids: [CLM-4, CLM-8], note: "" }
  native_play:       { status: pass, claim_ids: [CLM-1, CLM-18], note: "" }
  citable:           { status: pass, claim_ids: [CLM-2, CLM-3], note: "" }
  research_story:    { status: pass, claim_ids: [CLM-1, CLM-9, CLM-10, CLM-11], note: "" }

links:
  - { kind: site, url: "https://sherwood.cash", authenticity: confirmed }
  - { kind: docs, url: "https://sherwood.cash/docs", authenticity: confirmed }
  - { kind: x, url: "https://x.com/sherw00d_cash", authenticity: confirmed }
  - { kind: github, url: "https://github.com/sherwood-cash/contracts", authenticity: confirmed }
  - { kind: telegram, url: "https://t.me/sherwood_cash", authenticity: confirmed }

deployments:
  - label: SherwoodVault (immutable mixer + shielded DEX)
    role: vault
    address:
      value: "0xf54013b8BE8fdFcF0CD1fD727c803F16c2450736"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-4, R-5, R-6, R-7]
  - label: SwapLogic (UUPS proxy)
    role: proxy
    address:
      value: "0x52445Ae1B988CfDc668EB15628629ED7d0890C6A"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03
      exists_on_4663: true
      explorer_source_verified: true
      explorer_source_verification_scope: proxy-shell-only
      implementation_source_verified: false
    receipt_ids: [R-6, R-19]
  - label: SwapLogic implementation
    role: implementation
    address:
      value: "0x10562a98b0eB2BFF853275da5F34BF498192d45B"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03
      exists_on_4663: true
      explorer_source_verified: false
    receipt_ids: [R-19]
  - label: Verifier2 (Groth16)
    role: other
    address:
      value: "0x3d7bEA6294BC033fAA7e0e06F2D94088106CDb79"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-6, R-25]
  - label: SHERWOOD token (PonsV2LauncherToken)
    role: token
    address:
      value: "0xD4DC6B48Ad73EC51E71D9B8F65568f88609b92c1"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-8, R-9, R-10]
  - label: Vault admin EOA
    role: admin
    address:
      value: "0x93080bdF26050307d410d372640D4398397E0A6E"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03
      exists_on_4663: true
      explorer_source_verified: false
    receipt_ids: [R-6, R-7]
  - label: protocolFeeRecipient EOA
    role: other
    address:
      value: "0x6cEE2DC8A42A5AA3f28799ea8Ebd23Ea5e07cc08"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03
      exists_on_4663: true
      explorer_source_verified: false
    receipt_ids: [R-6]

metrics:
  - { kind: tvl, value: 72357.59239, currency: USD, as_of: 2026-09-03T00:05:11Z, window: point, method: "api.llama.fi/protocol/sherwood currentChainTvls['Robinhood Chain']", class: claim, receipt_ids: [R-3] }
  - { kind: fees_24h, value: 25.87, currency: USD, as_of: 2026-09-02T00:00:00Z, window: 24h, method: "api.llama.fi/summary/fees/sherwood?dataType=dailyFees totalDataChartBreakdown Robinhood Chain bar 1788307200", class: claim, receipt_ids: [R-20] }
  - { kind: revenue_24h, value: 25.87, currency: USD, as_of: 2026-09-02T00:00:00Z, window: 24h, method: "api.llama.fi/summary/fees/sherwood?dataType=dailyRevenue totalDataChartBreakdown Robinhood Chain bar 1788307200", class: claim, receipt_ids: [R-21] }
  - { kind: holders, value: 658, currency: null, as_of: 2026-09-03T02:56:00Z, window: point, method: "robinhoodchain.blockscout.com/api/v2/tokens/0xD4DC…92c1 holders_count", class: claim, receipt_ids: [R-8] }
  - { kind: market_cap, value: 319875, currency: USD, as_of: 2026-09-03T02:56:00Z, window: point, method: "api.dexscreener.com/latest/dex/tokens/0xD4DC…92c1 Uniswap v4 SHERWOOD/ETH pair 0x2e03323e…d874 marketCap; pair slice not all-pairs", class: claim, receipt_ids: [R-10] }
  - { kind: volume_24h, value: 60337.16, currency: USD, as_of: 2026-09-03T02:56:00Z, window: 24h, method: "DexScreener same Uniswap v4 SHERWOOD/ETH pair volume.h24", class: claim, receipt_ids: [R-10] }

reproductions:
  - { id: REP-1, method: explorer-rpc, chain_id: 4663, checked_at: 2026-09-03T02:54:00Z, receipt_ids: [R-6], result: "eth_chainId 0x1237 (4663); eth_blockNumber 0x329f011 (53080081). Vault 0xf540…0736 eth_getCode 46838 hex chars. admin() 0x93080bdF26050307d410d372640D4398397E0A6E (eth_getCode empty). protocolFeeRecipient() 0x6cEE2DC8A42A5AA3f28799ea8Ebd23Ea5e07cc08 (eth_getCode empty). swapLogic() 0x52445Ae1B988CfDc668EB15628629ED7d0890C6A. swapFeeBps 50; withdrawFeeBps 50; CONFIG_TIMELOCK 0; MAX_PROTOCOL_FEE_BPS 1000; permissionlessSwaps true; pendingAdmin 0x0; pendingSwapLogic 0x0. weth 0x0Bd7D308f8E1639FAb988df18A8011f41EAcAD73; verifier2 0x3d7bEA6294BC033fAA7e0e06F2D94088106CDb79; hasher 0x71C526201461b1DFD4964429439f656378eFC2bd; hasher4 0x03b2637fe5d20d24457236974bCECe6ecf22587e. Token 0xD4DC…92c1 eth_getCode 6498 hex chars." }
  - { id: REP-2, method: explorer-ui, chain_id: 4663, checked_at: 2026-09-03T02:54:00Z, receipt_ids: [R-5, R-7, R-19, R-25], result: "Blockscout API v2: vault is_contract true is_verified true name SherwoodVault proxy_type null file_path contracts/SherwoodVault.sol compiler v0.8.24 is_partially_verified true creator 0x93080bdF… tx 0xcb41e3cc… 2026-07-28T02:52:54Z block 21248162. SwapLogic 0x52445Ae1… ERC1967Proxy is_verified true proxy_type eip1967 implementation 0x10562a98… is_verified false. Verifier2 0x3d7bEA62… is_verified true. Hasher and Hasher4 is_verified false." }
  - { id: REP-3, method: api, checked_at: 2026-09-03T02:53:00Z, receipt_ids: [R-3, R-20, R-21], result: "GET api.llama.fi/protocol/sherwood: name Sherwood category Privacy chains [Robinhood Chain] twitter sherw00d_cash module sherwood/index.js audits 0 listedAt 1785338533 (2026-07-29T15:22:13Z). currentChainTvls Robinhood Chain 72357.59239; tvl last {date 1788393911, totalLiquidityUSD 72357}. dailyFees/dailyRevenue bar 1788307200 Robinhood Chain 25.87." }
  - { id: REP-4, method: official-crosslink, checked_at: 2026-09-03T03:00:00Z, receipt_ids: [R-1, R-2, R-8, R-9, R-10, R-11], result: "sherwood.cash title Sherwood — private swaps; JS footer links x.com/sherw00d_cash and t.me/sherwood_cash and embeds vault 0xf540…0736, swapLogic 0x52445Ae1…, verifier2, admin, fee recipient, token 0xD4DC…92c1. GitHub org sherwood-cash name Sherwood.cash; contracts README links https://sherwood.cash. Pons launchAndBuy params twitter https://x.com/sherw00d_cash. DexScreener info websites sherwood.cash, /docs, github.com/orgs/sherwood-cash; socials x.com/sherw00d_cash and t.me/sherwood_cash. X page HTML contains sherwood.cash." }
  - { id: REP-5, method: api, chain_id: 4663, checked_at: 2026-09-03T02:56:00Z, receipt_ids: [R-8, R-10], result: "Blockscout /api/v2/tokens/0xD4DC…92c1 name Sherwood symbol SHERWOOD decimals 18 holders_count 658 total_supply 1e27 type ERC-20. Address is_contract true is_verified true name PonsV2LauncherToken creator_address_hash 0x3711ceA4feaDE896C913C68F01Eda97Cb06D1A42 (PonsV2LaunchDeployer) creation_transaction_hash 0x5f0f903b…. DexScreener 3 robinhood uniswap pairs; lead Uniswap v4 SHERWOOD/ETH 0x2e03323e…d874 liquidity.usd 51680.99 volume.h24 60337.16 marketCap 319875 priceUsd 0.0003240 pairCreatedAt 2026-08-10T13:57:58Z." }
  - { id: REP-6, method: repository-crosslink, checked_at: 2026-09-03T02:53:00Z, receipt_ids: [R-4, R-26], result: "DefiLlama-Adapters projects/sherwood/index.js: comment Sherwood (sherwood.cash) privacy mixer + shielded DEX; VAULT 0xf54013b8BE8fdFcF0CD1fD727c803F16c2450736 DEPLOY_BLOCK 21248162. dimension-adapters fees/sherwood same vault; start 2026-07-28; ProtocolFeeCharged events priced as fees=revenue." }

claims:
  - { id: CLM-1, field: product.mechanism, value: "One immutable SherwoodVault holds ETH and ERC-20 balances in per-asset Poseidon Merkle trees. transact deposits/withdraws with a Groth16 proof; executeSwap spends a note, calls an allowlisted Uniswap v2/v3/v4 router, and mints an output note from the measured delta. Protocol fee is taken in a quote asset.", class: claim, observed_at: 2026-09-03T02:54:00Z, receipt_ids: [R-1, R-2, R-5], reproduction_ids: [], supersedes: null }
  - { id: CLM-2, field: identity.domain, value: "https://sherwood.cash", class: verified, observed_at: 2026-09-03T03:00:00Z, receipt_ids: [R-1, R-2, R-10, R-11], reproduction_ids: [REP-4], supersedes: null }
  - { id: CLM-3, field: identity.handle, value: "@sherw00d_cash", class: verified, observed_at: 2026-09-03T03:00:00Z, receipt_ids: [R-1, R-9, R-10, R-11], reproduction_ids: [REP-4], supersedes: null }
  - { id: CLM-4, field: deployment.address, value: "0xf54013b8BE8fdFcF0CD1fD727c803F16c2450736", class: verified, observed_at: 2026-09-03T02:54:00Z, receipt_ids: [R-4, R-5, R-6], reproduction_ids: [REP-1, REP-2, REP-6], supersedes: null }
  - { id: CLM-5, field: lifecycle, value: mainnet, class: verified, observed_at: 2026-09-03T02:54:00Z, receipt_ids: [R-3, R-5, R-7], reproduction_ids: [REP-1, REP-2, REP-3], supersedes: null }
  - { id: CLM-6, field: identity.symbol, value: SHERWOOD, class: verified, observed_at: 2026-09-03T02:56:00Z, receipt_ids: [R-8, R-9], reproduction_ids: [REP-5], supersedes: null }
  - { id: CLM-7, field: identity.name, value: Sherwood, class: verified, observed_at: 2026-09-03T02:56:00Z, receipt_ids: [R-8, R-9], reproduction_ids: [REP-5], supersedes: null }
  - { id: CLM-8, field: deployment.address, value: "0xD4DC6B48Ad73EC51E71D9B8F65568f88609b92c1", class: verified, observed_at: 2026-09-03T02:56:00Z, receipt_ids: [R-8, R-9, R-10], reproduction_ids: [REP-4, REP-5], supersedes: null }
  - { id: CLM-9, field: control.owner, value: "admin() 0x93080bdF26050307d410d372640D4398397E0A6E is an EOA (eth_getCode empty); same address created the vault at 2026-07-28T02:52:54Z. pendingAdmin is 0x0.", class: verified, observed_at: 2026-09-03T02:54:00Z, receipt_ids: [R-6, R-7], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-10, field: control.timelock, value: "CONFIG_TIMELOCK() returns 0. Verified source and deployRobinhood.js: router allowlist and SwapLogic pointer are 2-step (propose then enable) but take effect with no delay.", class: verified, observed_at: 2026-09-03T02:54:00Z, receipt_ids: [R-5, R-6, R-24], reproduction_ids: [REP-1], supersedes: null }
  - { id: CLM-11, field: control.proxy, value: "Vault is not a proxy. swapLogic() is ERC1967Proxy 0x52445Ae1…; implementation 0x10562a98… is_verified false. Vault source: vault never delegatecalls SwapLogic.", class: verified, observed_at: 2026-09-03T02:54:00Z, receipt_ids: [R-5, R-6, R-19], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-12, field: economics.metric, value: "Robinhood Chain TVL 72357.59239 USD at 2026-09-03T00:05:11Z (currentChainTvls['Robinhood Chain'], not an all-chains total)", class: verified, observed_at: 2026-09-03T02:53:00Z, receipt_ids: [R-3], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-13, field: economics.metric, value: "Robinhood Chain dailyFees 25.87 USD for bar 1788307200 (2026-09-02). Fees methodology: ProtocolFeeCharged in ETH or USDG.", class: verified, observed_at: 2026-09-03T02:53:00Z, receipt_ids: [R-20], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-14, field: economics.metric, value: "Robinhood Chain dailyRevenue 25.87 USD for bar 1788307200 (2026-09-02). Adapter: fees equal protocol revenue.", class: verified, observed_at: 2026-09-03T02:53:00Z, receipt_ids: [R-21], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-15, field: economics.metric, value: "Blockscout holders_count 658 for 0xD4DC…92c1", class: verified, observed_at: 2026-09-03T02:56:00Z, receipt_ids: [R-8], reproduction_ids: [REP-5], supersedes: null }
  - { id: CLM-16, field: economics.metric, value: "DexScreener Uniswap v4 SHERWOOD/ETH marketCap 319875; volume.h24 60337.16; liquidity.usd 51680.99 (lead pair, not all pairs)", class: verified, observed_at: 2026-09-03T02:56:00Z, receipt_ids: [R-10], reproduction_ids: [REP-5], supersedes: null }
  - { id: CLM-17, field: taxonomy.primary-leaf, value: privacy/private-transfer, class: claim, observed_at: 2026-09-03T02:53:00Z, receipt_ids: [R-2, R-3], reproduction_ids: [], supersedes: null }
  - { id: CLM-18, field: taxonomy.chain-scope, value: robinhood-native, class: verified, observed_at: 2026-09-03T02:53:00Z, receipt_ids: [R-3, R-4, R-6], reproduction_ids: [REP-1, REP-3, REP-6], supersedes: null }
  - { id: CLM-19, field: security.audit, value: "No SherwoodVault audit report URL on sherwood.cash, the contracts README, Llama (audits 0), or the X bio this pass. Site JS links Privacy-Cash audits; that is a different repository.", class: unknown, observed_at: 2026-09-03T03:05:00Z, receipt_ids: [], reproduction_ids: [], supersedes: null }
  - { id: CLM-20, field: relationship, value: "Token created 2026-08-08T19:55:38Z via PonsV2LaunchAndBuy.launchAndBuy at 0xe33E9E47…2948; creator_address_hash PonsV2LaunchDeployer 0x3711ceA4…. Launch from 0x2c61c825e7D268cc2b4796E01c8d587408ba4F46, which is not the vault admin. pairToken 0x0 (ETH). Do not merge with slug pons.", class: verified, observed_at: 2026-09-03T02:56:00Z, receipt_ids: [R-8, R-9], reproduction_ids: [REP-5], supersedes: null }
  - { id: CLM-21, field: "account.@sherw00d_cash.role", value: project, class: claim, observed_at: 2026-09-03T03:00:00Z, receipt_ids: [R-11], reproduction_ids: [], supersedes: null }
  - { id: CLM-22, field: "account.@sherw00d_cash.slug", value: sherwood, class: claim, observed_at: 2026-09-03T03:00:00Z, receipt_ids: [R-11], reproduction_ids: [], supersedes: null }
  - { id: CLM-23, field: product.mechanism, value: "swapFeeBps() 50 and withdrawFeeBps() 50 (0.50%). MAX_PROTOCOL_FEE_BPS 1000 (10%). permissionlessSwaps true. Fees adapter: ProtocolFeeCharged always in ETH or USDG.", class: verified, observed_at: 2026-09-03T02:54:00Z, receipt_ids: [R-6, R-26], reproduction_ids: [REP-1], supersedes: null }
  - { id: CLM-24, field: activity.status, value: "Vault received transact and executeSwap calls on 2026-09-02, including executeSwap 0x9dd38c07… at 22:39:54Z from 0xf8F825e3…", class: verified, observed_at: 2026-09-03T02:54:00Z, receipt_ids: [R-5], reproduction_ids: [REP-2], supersedes: null }
  - { id: CLM-25, field: identity.repository, value: "https://github.com/sherwood-cash/contracts", class: verified, observed_at: 2026-09-03T02:53:00Z, receipt_ids: [R-2, R-22], reproduction_ids: [REP-4], supersedes: null }
  - { id: CLM-26, field: control.privileged-role, value: "protocolFeeRecipient() 0x6cEE2DC8A42A5AA3f28799ea8Ebd23Ea5e07cc08 is an EOA. Site contracts table: admin registers assets, router allowlist, fee (capped 10%), SwapLogic upgrades; cannot forge proofs.", class: verified, observed_at: 2026-09-03T02:54:00Z, receipt_ids: [R-1, R-6], reproduction_ids: [REP-1], supersedes: null }
  - { id: CLM-27, field: other, value: "sherwood.sh / @sherwoodagent is a different product (agent-run ERC-4626 funds, $WOOD, docs on Robinhood testnet 46630). Census slug sherwood is sherwood.cash / @sherw00d_cash / vault 0xf540…0736. Flags: none of handle-collision | unconfirmed-official | ca-collision on the vault or 0xD4DC…92c1 this pass.", class: claim, observed_at: 2026-09-03T03:05:00Z, receipt_ids: [R-1, R-2, R-27], reproduction_ids: [], supersedes: null }
  - { id: CLM-28, field: identity.alias, value: sherwood.cash, class: claim, observed_at: 2026-09-03T03:00:00Z, receipt_ids: [R-11, R-22], reproduction_ids: [], supersedes: null }

conflicts: []

events:
  - id: EVT-1
    type: company
    title: "Account posted privacy beyond payments"
    summary: "@sherw00d_cash posted $SHERWOOD can trade tokens and stocks, manage a portfolio, and withdraw to a fresh wallet."
    occurred_at: 2026-09-03T02:16:00Z
    observed_at: 2026-09-03T02:52:00Z
    affected_fields: [product.mechanism, communications.status]
    evidence_state: claim
    impact: routine
    site_recommendation: feed
    channel_recommendation: none
    receipt_ids: [R-14]
  - id: EVT-2
    type: company
    title: "Account posted v2 4-in/4-out circuit"
    summary: "@sherw00d_cash posted the privacy engine is upgrading from 2-in/2-out to 4-in/4-out in a single proof."
    occurred_at: 2026-09-02T18:50:46Z
    observed_at: 2026-09-03T02:52:00Z
    affected_fields: [product.mechanism]
    evidence_state: claim
    impact: material
    site_recommendation: both
    channel_recommendation: none
    receipt_ids: [R-12]
  - id: EVT-3
    type: company
    title: "Account posted private limit orders"
    summary: "@sherw00d_cash posted limit orders that trade any token privately at a set price."
    occurred_at: 2026-09-02T08:01:00Z
    observed_at: 2026-09-03T02:52:00Z
    affected_fields: [product.mechanism]
    evidence_state: claim
    impact: material
    site_recommendation: feed
    channel_recommendation: none
    receipt_ids: [R-13]
  - id: EVT-4
    type: onchain
    title: "DefiLlama Sherwood Robinhood TVL slice is $72,357"
    summary: "api.llama.fi/protocol/sherwood currentChainTvls Robinhood Chain 72357.59239 at 2026-09-03T00:05:11Z."
    occurred_at: 2026-09-03T00:05:11Z
    observed_at: 2026-09-03T02:53:00Z
    affected_fields: [economics.metric, lifecycle]
    evidence_state: verified
    impact: material
    site_recommendation: both
    channel_recommendation: none
    receipt_ids: [R-3]
  - id: EVT-5
    type: company
    title: "Account posted Season 1 airdrop of 5% supply"
    summary: "@sherw00d_cash posted Season 1 distributed 5% of supply, about $38K at ATH, and that Season 2 will be larger."
    occurred_at: 2026-09-01T13:53:07Z
    observed_at: 2026-09-03T02:52:00Z
    affected_fields: [economics.metric, communications.status]
    evidence_state: claim
    impact: material
    site_recommendation: feed
    channel_recommendation: none
    receipt_ids: [R-15]
  - id: EVT-6
    type: company
    title: "Account posted vault TVL crossed $80K"
    summary: "@sherw00d_cash posted TVL just crossed $80K, with over $50K of $SHERWOOD locked in the vault."
    occurred_at: 2026-08-30T15:12:00Z
    observed_at: 2026-09-03T02:52:00Z
    affected_fields: [economics.metric]
    evidence_state: claim
    impact: routine
    site_recommendation: feed
    channel_recommendation: none
    receipt_ids: [R-16]
  - id: EVT-7
    type: company
    title: "Account posted vault contracts are immutable"
    summary: "@sherw00d_cash posted $SHERWOOD contracts are immutable and compared that to PrivacyCash being upgradeable."
    occurred_at: 2026-08-29T12:00:00Z
    observed_at: 2026-09-03T02:52:00Z
    affected_fields: [control.proxy, product.mechanism]
    evidence_state: claim
    impact: material
    site_recommendation: profile
    channel_recommendation: none
    receipt_ids: [R-17]
  - id: EVT-8
    type: onchain
    title: "SherwoodVault deployed on Robinhood Chain"
    summary: "SherwoodVault 0xf540…0736 created 2026-07-28T02:52:54Z block 21248162 by EOA 0x93080bdF…."
    occurred_at: 2026-07-28T02:52:54Z
    observed_at: 2026-09-03T02:54:00Z
    affected_fields: [deployment.address, lifecycle, control.owner]
    evidence_state: verified
    impact: material
    site_recommendation: profile
    channel_recommendation: none
    receipt_ids: [R-7]

receipts:
  - { id: R-1, publisher: Sherwood, title: "sherwood.cash home", url: "https://sherwood.cash/", published_at: null, accessed_at: 2026-09-03T02:53:00Z, kind: official-site, authority: primary, authenticity: confirmed, supports: [CLM-1, CLM-2, CLM-3, CLM-26, CLM-27], excerpt: "HTML title Sherwood — private swaps. JS contracts table: SherwoodVault the single immutable multi-asset custodian; SwapLogic view-only Uniswap route builder, UUPS-upgradeable; Verifier2 Groth16; Admin registers assets, router allowlist, fee capped at 10%, SwapLogic upgrades. Footer links https://x.com/sherw00d_cash and https://t.me/sherwood_cash. Bundle embeds vault 0xf54013b8BE8fdFcF0CD1fD727c803F16c2450736." }
  - { id: R-2, publisher: sherwood-cash, title: "contracts README", url: "https://github.com/sherwood-cash/contracts/blob/main/README.md", published_at: null, accessed_at: 2026-09-03T02:53:00Z, kind: repository, authority: primary, authenticity: confirmed, supports: [CLM-1, CLM-2, CLM-17, CLM-25], excerpt: "Smart contracts for Sherwood (https://sherwood.cash) — a privacy mixer and shielded DEX on the Robinhood chain. Deposits, withdrawals and swaps are shielded with zero-knowledge proofs, and every asset lives in its own Poseidon Merkle tree inside a single vault. SherwoodVault — the immutable vault. SwapLogic — UUPS-upgradeable router logic. Proxy — ERC-1967 UUPS; upgrade authority is controlled by the admin." }
  - { id: R-3, publisher: DefiLlama, title: "Sherwood protocol row", url: "https://api.llama.fi/protocol/sherwood", published_at: null, accessed_at: 2026-09-03T02:53:00Z, kind: third-party-data, authority: aggregator, authenticity: unconfirmed, supports: [CLM-5, CLM-12, CLM-17, CLM-18, EVT-4], excerpt: "name Sherwood category Privacy chains [Robinhood Chain] twitter sherw00d_cash description Sherwood is a privacy mixer + shielded DEX on Robinhood chain. module sherwood/index.js audits 0 listedAt 1785338533. currentChainTvls Robinhood Chain 72357.59239. tvl last date 1788393911 totalLiquidityUSD 72357. tokensInUsd last ETH 36852.66 USDG 4785.32 SHERWOOD 27707.55." }
  - { id: R-4, publisher: DefiLlama, title: "sherwood adapter VAULT", url: "https://github.com/DefiLlama/DefiLlama-Adapters/blob/main/projects/sherwood/index.js", published_at: null, accessed_at: 2026-09-03T02:53:00Z, kind: repository, authority: aggregator, authenticity: unconfirmed, supports: [CLM-4, CLM-18], excerpt: "// Sherwood (sherwood.cash) — a privacy mixer + shielded DEX on Robinhood chain. const VAULT = '0xf54013b8BE8fdFcF0CD1fD727c803F16c2450736' const DEPLOY_BLOCK = 21248162. methodology: TVL is the balance of every asset (native ETH, USDG and any token registered through a shielded swap) held by the Sherwood vault on Robinhood chain." }
  - { id: R-5, publisher: Blockscout, title: "Address 0xf540…0736 SherwoodVault", url: "https://robinhoodchain.blockscout.com/address/0xf54013b8BE8fdFcF0CD1fD727c803F16c2450736", published_at: null, accessed_at: 2026-09-03T02:54:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-4, CLM-5, CLM-10, CLM-11, CLM-24], excerpt: "hash 0xf54013b8BE8fdFcF0CD1fD727c803F16c2450736 name SherwoodVault is_contract true is_verified true proxy_type null creator 0x93080bdF26050307d410d372640D4398397E0A6E tx 0xcb41e3cc681c1b47c4ba3328e1e5bac165ecaefcae7267ff281a3f120665de22. Smart-contract compiler v0.8.24 is_partially_verified true file_path contracts/SherwoodVault.sol. Recent to-calls include transact and executeSwap on 2026-09-02." }
  - { id: R-6, publisher: Robinhood Chain RPC, title: "eth_getCode and SherwoodVault views", url: "https://rpc.mainnet.chain.robinhood.com", published_at: null, accessed_at: 2026-09-03T02:54:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-4, CLM-9, CLM-10, CLM-11, CLM-18, CLM-23, CLM-26], excerpt: "eth_chainId 0x1237. Vault eth_getCode 46838 hex chars. admin 0x93080bdF26050307d410d372640D4398397E0A6E code 0x. protocolFeeRecipient 0x6cEE2DC8A42A5AA3f28799ea8Ebd23Ea5e07cc08 code 0x. swapLogic 0x52445Ae1B988CfDc668EB15628629ED7d0890C6A. swapFeeBps 50 withdrawFeeBps 50 CONFIG_TIMELOCK 0 MAX_PROTOCOL_FEE_BPS 1000 permissionlessSwaps 1. verifier2 0x3d7bEA6294BC033fAA7e0e06F2D94088106CDb79 weth 0x0Bd7D308f8E1639FAb988df18A8011f41EAcAD73." }
  - { id: R-7, publisher: Blockscout, title: "Vault creation tx 0xcb41e3cc…", url: "https://robinhoodchain.blockscout.com/tx/0xcb41e3cc681c1b47c4ba3328e1e5bac165ecaefcae7267ff281a3f120665de22", published_at: 2026-07-28T02:52:54Z, accessed_at: 2026-09-03T02:54:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-5, CLM-9, EVT-8], excerpt: "timestamp 2026-07-28T02:52:54.000000Z status ok result success block_number 21248162 from 0x93080bdF26050307d410d372640D4398397E0A6E is_contract false created_contract 0xf54013b8BE8fdFcF0CD1fD727c803F16c2450736 name SherwoodVault." }
  - { id: R-8, publisher: Blockscout, title: "Token 0xD4DC…92c1", url: "https://robinhoodchain.blockscout.com/token/0xD4DC6B48Ad73EC51E71D9B8F65568f88609b92c1", published_at: null, accessed_at: 2026-09-03T02:56:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-6, CLM-7, CLM-8, CLM-15, CLM-20], excerpt: "api/v2/tokens name Sherwood symbol SHERWOOD decimals 18 holders_count 658 total_supply 1000000000000000000000000000 type ERC-20. api/v2/addresses is_contract true is_verified true name PonsV2LauncherToken creator_address_hash 0x3711ceA4feaDE896C913C68F01Eda97Cb06D1A42 creation_transaction_hash 0x5f0f903bab3ca1e77c16922b3eddca1899d360353c8b76305515b60113f530d5." }
  - { id: R-9, publisher: Blockscout, title: "SHERWOOD launchAndBuy tx", url: "https://robinhoodchain.blockscout.com/tx/0x5f0f903bab3ca1e77c16922b3eddca1899d360353c8b76305515b60113f530d5", published_at: 2026-08-08T19:55:38Z, accessed_at: 2026-09-03T02:56:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-3, CLM-6, CLM-7, CLM-8, CLM-20], excerpt: "timestamp 2026-08-08T19:55:38Z block 31341426 status ok method launchAndBuy to 0xe33E9E479dF8802cb0866d5d05258bEc4cF62948 name PonsV2LaunchAndBuy from 0x2c61c825e7D268cc2b4796E01c8d587408ba4F46. params name Sherwood symbol SHERWOOD twitter https://x.com/sherw00d_cash description SHERWOOD is the token powering Sherwood, the first privacy protocol on Robinhood. Swap privately. Fund anonymous wallets. Leave no trace. pairToken 0x0." }
  - { id: R-10, publisher: DexScreener, title: "latest/dex/tokens SHERWOOD", url: "https://api.dexscreener.com/latest/dex/tokens/0xD4DC6B48Ad73EC51E71D9B8F65568f88609b92c1", published_at: null, accessed_at: 2026-09-03T02:56:00Z, kind: third-party-data, authority: primary, authenticity: confirmed, supports: [CLM-2, CLM-3, CLM-8, CLM-16], excerpt: "3 robinhood uniswap pairs. Lead Uniswap v4 SHERWOOD/ETH pairAddress 0x2e03323ecfe5e6e4c287bdb731ea0f8857e5afbbded6612fdca4b8de20d0d874 liquidity.usd 51680.99 volume.h24 60337.16 marketCap 319875 priceUsd 0.0003240 pairCreatedAt 1786370278000. info.websites https://sherwood.cash/ https://sherwood.cash/docs https://github.com/orgs/sherwood-cash; socials https://x.com/sherw00d_cash https://t.me/sherwood_cash." }
  - { id: R-11, publisher: sherwood.cash (@sherw00d_cash), title: "X profile @sherw00d_cash", url: "https://x.com/sherw00d_cash", published_at: null, accessed_at: 2026-09-03T02:52:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [CLM-2, CLM-3, CLM-21, CLM-22, CLM-28], excerpt: "Display name sherwood.cash, handle @sherw00d_cash. Bio: Swap privately. Fund anonymous wallets. Leave no trace. Integrate privacy into your agents. $SHERWOOD. Built by @forezy_. Followers 972. Profile page HTML contains sherwood.cash." }
  - { id: R-12, publisher: sherwood.cash (@sherw00d_cash), title: "What's new in Sherwood v2", url: "https://x.com/sherw00d_cash/status/2095222920285196402", published_at: 2026-09-02T18:50:46Z, accessed_at: 2026-09-03T02:52:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [EVT-2], excerpt: "What's new in Sherwood v2? The privacy engine is upgrading to a 4/4 circuit. Today, each private action can combine up to 2 of your shielded balances at a time. In v2, that becomes 4 in and 4 out, in a single proof." }
  - { id: R-13, publisher: sherwood.cash (@sherw00d_cash), title: "$SHERWOOD LIMIT ORDER UPDATE", url: "https://x.com/sherw00d_cash/status/2095059401518289329", published_at: 2026-09-02T08:01:00Z, accessed_at: 2026-09-03T02:52:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [EVT-3], excerpt: "$SHERWOOD LIMIT ORDER UPDATE. You can now place limit orders to trade any token privately. Set your price and let Sherwood handle the rest." }
  - { id: R-14, publisher: sherwood.cash (@sherw00d_cash), title: "Privacy beyond payments", url: "https://x.com/sherw00d_cash/status/2095334966892826934", published_at: 2026-09-03T02:16:00Z, accessed_at: 2026-09-03T02:52:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [EVT-1], excerpt: "monero:native and $ZEC brought privacy to payments. But sending money privately is only the beginning. $SHERWOOD pushes privacy further. Trade any token. Trade stocks. Manage your portfolio. Withdraw to a fresh wallet." }
  - { id: R-15, publisher: sherwood.cash (@sherw00d_cash), title: "Airdrop Season 1", url: "https://x.com/sherw00d_cash/status/2094785627141157266", published_at: 2026-09-01T13:53:07Z, accessed_at: 2026-09-03T02:52:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [EVT-5], excerpt: "During $SHERWOOD Airdrop Season 1, we distributed 5% of the total supply, worth around $38K at ATH. One of the biggest airdrops on Robinhood Chain. Season 2 will be even bigger." }
  - { id: R-16, publisher: sherwood.cash (@sherw00d_cash), title: "TVL crossed $80K", url: "https://x.com/sherw00d_cash/status/2094080702279295306", published_at: 2026-08-30T15:12:00Z, accessed_at: 2026-09-03T02:52:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [EVT-6], excerpt: "$SHERWOOD TVL just crossed $80K, with over $50K worth of $SHERWOOD locked in the Vault. Privacy never stops growing." }
  - { id: R-17, publisher: sherwood.cash (@sherw00d_cash), title: "Contracts are immutable", url: "https://x.com/sherw00d_cash/status/2093669997361152392", published_at: 2026-08-29T12:00:00Z, accessed_at: 2026-09-03T02:52:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [EVT-7], excerpt: "$SHERWOOD contracts are immutable. Your funds can’t be drained through a malicious upgrade. PrivacyCash contract is upgradeable. If the deployer key is compromised, an attacker could potentially push a malicious upgrade and drain the funds." }
  - { id: R-18, publisher: Telegram, title: "t.me/sherwood_cash", url: "https://t.me/sherwood_cash", published_at: null, accessed_at: 2026-09-03T02:56:00Z, kind: social, authority: unknown, authenticity: confirmed, supports: [CLM-3], excerpt: "Page title Telegram: View @sherwood_cash. og:title Sherwood. og:description You can view and join @sherwood_cash right away." }
  - { id: R-19, publisher: Blockscout, title: "SwapLogic proxy 0x52445Ae1…", url: "https://robinhoodchain.blockscout.com/address/0x52445Ae1B988CfDc668EB15628629ED7d0890C6A", published_at: null, accessed_at: 2026-09-03T02:56:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-11], excerpt: "hash 0x52445Ae1B988CfDc668EB15628629ED7d0890C6A name ERC1967Proxy is_contract true is_verified true proxy_type eip1967 implementation 0x10562a98b0eB2BFF853275da5F34BF498192d45B is_verified false. creator 0x93080bdF26050307d410d372640D4398397E0A6E creation_transaction_hash 0x6c8741da95b866a5c02d94c76f7894eff95349179ee02fda645ea49427c70e5b timestamp 2026-07-28T02:52:56Z." }
  - { id: R-20, publisher: DefiLlama, title: "Sherwood dailyFees", url: "https://api.llama.fi/summary/fees/sherwood?dataType=dailyFees", published_at: null, accessed_at: 2026-09-03T02:53:00Z, kind: third-party-data, authority: aggregator, authenticity: unconfirmed, supports: [CLM-13], excerpt: "name Sherwood twitter sherw00d_cash total24h 25.87 total7d 224.16 total30d 456.75 totalAllTime 467.91. totalDataChartBreakdown last [1788307200, {Robinhood Chain: {Sherwood: 25.87}}]. Fees methodology: Protocol fee charged on shielded withdrawals and swaps, always collected in ETH or USDG (ProtocolFeeCharged events)." }
  - { id: R-21, publisher: DefiLlama, title: "Sherwood dailyRevenue", url: "https://api.llama.fi/summary/fees/sherwood?dataType=dailyRevenue", published_at: null, accessed_at: 2026-09-03T02:53:00Z, kind: third-party-data, authority: aggregator, authenticity: unconfirmed, supports: [CLM-14], excerpt: "name Sherwood total24h 25.87 total7d 224.16 total30d 456.75 totalAllTime 467.91. totalDataChartBreakdown last [1788307200, {Robinhood Chain: {Sherwood: 25.87}}]. Revenue methodology: All the fees charged on shielded withdrawals and swaps are retained by the protocol." }
  - { id: R-22, publisher: GitHub, title: "org sherwood-cash", url: "https://github.com/sherwood-cash", published_at: null, accessed_at: 2026-09-03T02:53:00Z, kind: repository, authority: primary, authenticity: confirmed, supports: [CLM-25, CLM-28], excerpt: "login sherwood-cash name Sherwood.cash html_url https://github.com/sherwood-cash public_repos 5. Repos: contracts, dimension-adapters, DefiLlama-Adapters, sherwood-sdk, sherwood-mcp." }
  - { id: R-24, publisher: sherwood-cash, title: "deployRobinhood.js", url: "https://github.com/sherwood-cash/contracts/blob/main/scripts/deployRobinhood.js", published_at: null, accessed_at: 2026-09-03T02:56:00Z, kind: repository, authority: primary, authenticity: confirmed, supports: [CLM-10], excerpt: "Router allowlisting and the SwapLogic pointer are 2-step (propose -> enable) but the vault's CONFIG_TIMELOCK is 0, so both halves run back-to-back here. PROTOCOL_FEE_BPS fee rate, capped at 1000 (10%). Default 30 (0.30%). ADMIN_ADDRESS admin/multisig (defaults to deployer)." }
  - { id: R-25, publisher: Blockscout, title: "Verifier2 0x3d7bEA62…", url: "https://robinhoodchain.blockscout.com/address/0x3d7bEA6294BC033fAA7e0e06F2D94088106CDb79", published_at: null, accessed_at: 2026-09-03T03:00:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-4], excerpt: "hash 0x3d7bEA6294BC033fAA7e0e06F2D94088106CDb79 name Verifier2 is_contract true is_verified true." }
  - { id: R-26, publisher: DefiLlama, title: "sherwood fees adapter", url: "https://github.com/DefiLlama/dimension-adapters/blob/master/fees/sherwood/index.ts", published_at: null, accessed_at: 2026-09-03T02:53:00Z, kind: repository, authority: aggregator, authenticity: unconfirmed, supports: [CLM-23], excerpt: "Sherwood (sherwood.cash) — a privacy mixer + shielded DEX on Robinhood chain. const VAULT = \"0xf54013b8BE8fdFcF0CD1fD727c803F16c2450736\". event ProtocolFeeCharged. start: \"2026-07-28\". Fees always land in native ETH or USDG. There is no supply side, so every fee is protocol revenue." }
  - { id: R-27, publisher: Sherwood Protocol, title: "docs.sherwood.sh home", url: "https://docs.sherwood.sh/", published_at: null, accessed_at: 2026-09-03T02:50:00Z, kind: docs, authority: primary, authenticity: unconfirmed, supports: [CLM-27], excerpt: "Sherwood Protocol enables any agent to manage an onchain fund with vaults, governed strategies, and verifiable track records. Sherwood is live on Robinhood testnet (chain 46630). Mainnet launch is ahead. Test capital only." }

gaps:
  - { priority: P0, question: "What can SwapLogic implementation 0x10562a98… change on upgrade, and does any on-chain call match a 2-step proposeSwapLogic/setSwapLogic after deploy?", checked: "proxy shell verified ERC1967Proxy; implementation is_verified false; CONFIG_TIMELOCK() 0; pendingSwapLogic 0x0 this pass", next: "read SwapLogic.sol in github.com/sherwood-cash/contracts and match bytecode to 0x10562a98…" }
  - { priority: P0, question: "Is vault admin 0x93080bdF… a single key, and has transferAdmin/claimAdmin ever been used?", checked: "admin() equals creator; pendingAdmin 0x0; eth_getCode empty; no Safe label this pass", next: "scan AdminChanged logs and any proposeRouter/setProtocolFeeRecipient txs" }
  - { priority: P1, question: "Is there an audit whose scope is SherwoodVault 0xf540…0736 rather than Privacy-Cash?", checked: "Llama audits 0; contracts README has no report URL; site JS links github.com/Privacy-Cash/privacy-cash-core-evm/tree/main/audits", next: "open any report URL the project posts and match commit/address scope" }
  - { priority: P1, question: "How does launch EOA 0x2c61c825… relate to vault admin 0x93080bdF…?", checked: "Pons launchAndBuy from 0x2c61c825… on 2026-08-08; vault created by 0x93080bdF… on 2026-07-28; no shared on-chain role this pass", next: "read token deployer()/owner if the ABI is reachable and any later admin txs" }
  - { priority: P2, question: "Is sherwood.spot the same deployment as sherwood.cash?", checked: "sherwood.spot title Sherwood — Private Exchange, last-modified 2026-08-03; cash is the live app and Llama/GitHub surface; no handle on .spot this pass", next: "diff the two bundles for the vault address" }
---

# Sherwood — research packet

## What it is

A shielded mixer and DEX on Robinhood Chain. Users deposit ETH or tokens into one Groth16 vault, then withdraw or swap through Uniswap without linking the output address. $SHERWOOD is the Pons-launched app token. @sherw00d_cash runs sherwood.cash.

Themes: privacy, rwa, agent

## Why it matters

Sherwood is the Llama Privacy row on chain 4663: one vault holds ETH, USDG, tokenized stocks and memecoins, and recent blocks show `transact` and `executeSwap`. Census still had no reproduced address. It is not the sherwood.sh agent-fund product and not Pons. [verified R-3 R-5]

## What could go wrong

The vault is not upgradeable; SwapLogic is. `CONFIG_TIMELOCK` is 0, so a proposed SwapLogic or router change can be enabled in the next transaction. Admin and fee recipient are EOAs. Deposit and withdrawal amounts are public; the 29 Aug usage post said matching size and timing can link them. [verified R-6 R-19] [claim R-17]

## Product and mechanics

Deposit ETH or an ERC-20 into `SherwoodVault`. The contract keeps one Poseidon Merkle tree per asset, spends notes with a Groth16 proof (`transact`), and for a private swap (`executeSwap`) pulls `amountIn`, asks SwapLogic only to build calldata, checks the router against a vault-held allowlist, executes the swap itself, and mints the output note from the measured balance delta. Site copy names Uniswap v2/v3/v4 routers. [claim R-1 R-2] [verified R-5]

`$SHERWOOD` is a Pons v2 `PonsV2LauncherToken` named Sherwood / SHERWOOD, 18 decimals, totalSupply 1e27, created 2026-08-08T19:55:38Z via `PonsV2LaunchAndBuy.launchAndBuy` with twitter `https://x.com/sherw00d_cash`. Lead book is Uniswap v4 SHERWOOD/ETH pool `0x2e03323e…d874`, created 2026-08-10T13:57:58Z. [verified R-8 R-9 R-10]

Live fees: `swapFeeBps()` 50 and `withdrawFeeBps()` 50. Llama prices `ProtocolFeeCharged` in ETH or USDG as both fees and protocol revenue. A 2 Sep post described a 4-in/4-out circuit as upcoming v2; the verified vault this pass is still the 2026-07-28 deploy. [verified R-6 R-20] [claim R-12]

## Control and security

`admin()` is EOA `0x93080bdF26050307d410d372640D4398397E0A6E`, also the vault creator. `protocolFeeRecipient()` is EOA `0x6cEE2DC8…cc08`. `CONFIG_TIMELOCK()` is 0. `MAX_PROTOCOL_FEE_BPS` is 1000. SwapLogic at `0x52445Ae1…` is an ERC-1967 proxy; implementation `0x10562a98…` is unverified. Hasher and Hasher4 have no Solidity verification (deploy notes say circomlibjs blobs). No SherwoodVault audit URL this pass. [verified R-6 R-7 R-19] [unknown]

A 29 Aug post said `$SHERWOOD` contracts are immutable and compared that to PrivacyCash being upgradeable. The verified vault source matches the immutable-custodian claim; SwapLogic does not. [claim R-17] [verified R-5 R-19]

## Team and provenance

Public identity is sherwood.cash and `@sherw00d_cash`. The site JS, DexScreener info, Pons launch params and GitHub org name Sherwood.cash all list that handle; the X page HTML contains sherwood.cash. Telegram `t.me/sherwood_cash` is linked from the site footer. Bio: Built by `@forezy_`. Token launch from `0x2c61c825…` is not the vault admin; that link is unreproduced. [verified R-1 R-9 R-10] [claim R-11]

sherwood.sh / `@sherwoodagent` is a different product: agent-run ERC-4626 funds and `$WOOD`, with docs on Robinhood testnet 46630. Do not merge. [claim R-27]

## Economics and activity

Llama Robinhood Chain TVL 72357.59239 USD at 2026-09-03T00:05:11Z (chain slice). Same-day token mix includes ETH ~36853 USD, SHERWOOD ~27708 USD, USDG ~4785 USD, plus stock tokens (NVDA, TSLA, GOOGL, COIN) and memecoins. Daily fees/revenue bar 2026-09-02: 25.87 USD. Vault native balance 15.45375 ETH matches Llama's ETH unit amount. [verified R-3 R-6]

DexScreener Uniswap v4 SHERWOOD/ETH (not all pairs): liquidity 51680.99 USD, 24h volume 60337.16 USD, marketCap 319875 USD. Blockscout token: 658 holders. [verified R-8 R-10]

Vault `to` list on 2026-09-02 includes `transact` and `executeSwap`. A 30 Aug post said TVL crossed 80k USD; Llama's 3 Sep slice is 72357. [verified R-5] [claim R-16]

## Material risks

- SwapLogic is a UUPS proxy with an unverified implementation; `CONFIG_TIMELOCK` is 0. [verified R-6 R-19]
- Vault admin and fee recipient are EOAs with no on-chain timelock. [verified R-6]
- Deposit and withdrawal amounts are public; size/timing matching is a documented usage issue. [claim R-17]
- No SherwoodVault audit report was located; Llama `audits` is 0. [unknown]
- `$SHERWOOD` launch from `0x2c61c825…` is a different EOA than the vault admin. [verified R-9]
- Other "Sherwood" / `$WOOD` / `SWOOD` tickers exist on the chain; this slug is vault `0xf540…0736` and token `0xD4DC…92c1`. [claim R-10 R-27]

## Verification passes

- Receipts: sherwood.cash and /docs, github.com/sherwood-cash/contracts README and deployRobinhood.js, x.com/sherw00d_cash and named status URLs, t.me/sherwood_cash, Blockscout address/token/tx APIs, DexScreener latest/dex/tokens, DefiLlama protocol/fees/adapter, docs.sherwood.sh (other product), and RPC eth_getCode/eth_call were opened on 2026-09-03; excerpts are copied from those responses. [verified R-1 R-5 R-6 R-10]
- Numbers: 72357.59239 USD is Llama `currentChainTvls['Robinhood Chain']`, not an all-chains total; 25.87 USD is the 2026-09-02 dailyFees/revenue bar, not the pulled-file 17.27 from 2026-09-02T21:05; 60337.16 USD is DexScreener Uniswap v4 SHERWOOD/ETH volume.h24, not all SHERWOOD pairs; 658 is Blockscout holders_count. [claim R-3 R-8 R-10 R-20]
- Adversarial: the strongest contrary reading is that census Sherwood is the sherwood.sh `$WOOD` agent layer, or a same-ticker meme. Distinct handle, domain, vault address, Llama twitter `sherw00d_cash`, and Pons launch params listing `@sherw00d_cash` argue against a merge. [inference R-3 R-9 R-27]

## Operations log

- Read content/census.yaml sherwood/pons/virtuals rows, content/projects/sherwood.yaml, content/pulled/sherwood.yaml, content/feed/sherwood.yaml, content/sources/sherwood.yaml, content/changelog/sherwood.yaml, research/inbox/2026-08-31-ecosystem-map.yaml, grok-2026-08-30 workbook $WOOD row, docs/templates/research-packet-v2.md, schema/packet.schema.json.
- Opened https://sherwood.cash/, /docs, https://x.com/sherw00d_cash and named status URLs, https://t.me/sherwood_cash, https://github.com/sherwood-cash, https://github.com/sherwood-cash/contracts, https://docs.sherwood.sh/, https://sherwood.spot/.
- GET Blockscout /api/v2/addresses for the vault, SwapLogic proxy/impl, Verifier2, Hasher, Hasher4, admin, fee recipient, token, PonsV2LaunchDeployer; /api/v2/tokens for SHERWOOD; /api/v2/transactions for vault creation and Pons launchAndBuy; /api/v2/smart-contracts for vault ABI/source.
- GET api.llama.fi/protocol/sherwood and summary/fees (dailyFees, dailyRevenue); raw DefiLlama-Adapters projects/sherwood/index.js and dimension-adapters fees/sherwood/index.ts.
- GET api.dexscreener.com/latest/dex/tokens/0xD4DC…92c1 and latest/dex/search?q=SHERWOOD.
- RPC https://rpc.mainnet.chain.robinhood.com: eth_chainId 0x1237, eth_blockNumber 53080081, eth_getCode, eth_call admin/protocolFeeRecipient/swapLogic/fees/timelock/weth/verifier2/hasher/permissionlessSwaps. RPC 403 without a browser User-Agent.
- Time on this slug: one collector pass.
