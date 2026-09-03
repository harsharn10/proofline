---
# Packet v2 (docs/research-system.md §5). Seed with full-shaped frontmatter.
contract_version: proofline-research-v2
work_id: WORK-20260903-grok-heavy-icarus-research
producer: grok-heavy
role: collector
base_sha: 334ca0619aa62e922da83f46de021f06d12348cf
slug: peer
name: Peer
packet_tier: seed
as_of: 2026-09-03T03:05:00Z
prior_packet: null
supersedes: null
owned_slugs: [peer]
allowed_paths:
  - research/inbox/packets/peer/WORK-20260903-grok-heavy-icarus-research.md

identity:
  canonical_name: Peer
  aliases: ["Peer.family", "PeerMarketV1"]
  symbols: [PEER]
  entity_kind: protocol
  chain_scope: robinhood-native
  official_domain: https://peer.family
  official_handle: "NULL — site and docs do not name an X handle. DexScreener token info and Pons launchAndBuy params include https://x.com/PeerDotFamily; that account posts peer.family. No site-to-handle reverse link. Distinct from @peerxyz (ZKP2P / peer.xyz)."
  repository: "NULL — site, docs, Blockscout github_repository_metadata on PeerMarketV1, and GitHub search did not yield an official Peer.family repository"
  possible_matches:
    - slug: pons
      signals: [other]
      contrary_signals:
        - "Census Pons is a bonding-curve launchpad at ponsfamily.com / @ponsdotfamily"
        - "$PEER 0x96f0889cBC2D1423Fd64fd1307335fE72f1a198E is a PonsV2LauncherToken from PonsV2LaunchAndBuy.launchAndBuy on 2026-08-31; Peer.family is an options venue, not the launchpad"
        - "Official surfaces differ: peer.family versus ponsfamily.com / @ponsdotfamily"
    - slug: stonkbroker
      signals: [other]
      contrary_signals:
        - "Census StonkBrokers is an ERC-6551 NFT overlay at stonkbrokers.cash / @ClutchMarkets with STORMM as a stock-options layer"
        - "Peer is binary USDG options on fomo trader PnL at peer.family, not an NFT treasury"
        - "No shared domain, handle, or reproduced address"

classification:
  primary_leaf: markets/options
  secondary_leaves: [markets/prediction]
  mechanism_tags: [derivatives, amm, fee-routing]
  ecosystem_role: subject
  lifecycle: mainnet
  coverage_recommendation: seed
  evidence_state: partly-verified
  rationale: "$PEER and PeerMarketV1 have non-empty code on chain 4663; token and market source are explorer-verified. Collateral is USDG. Site and docs name the same PEER CA. marketCount is 20 and ids 1-20 read Status.Open. No official X on the site. Distinct from Llama slug peer / @peerxyz. [R-1] [R-2] [R-5] [R-6] [R-14]"

qualifying:
  deployed_on_chain: { status: pass, claim_ids: [CLM-4, CLM-7], note: "" }
  native_play:       { status: pass, claim_ids: [CLM-1, CLM-10, CLM-26], note: "" }
  citable:           { status: pass, claim_ids: [CLM-2, CLM-6, CLM-23], note: "" }
  research_story:    { status: pass, claim_ids: [CLM-1, CLM-8, CLM-16, CLM-17, CLM-19], note: "" }

links:
  - { kind: site, url: "https://peer.family/", authenticity: confirmed }
  - { kind: app, url: "https://peer.family/discover", authenticity: confirmed }
  - { kind: docs, url: "https://peer.family/docs", authenticity: confirmed }
  - { kind: x, url: "https://x.com/PeerDotFamily", authenticity: unconfirmed }

deployments:
  - label: PEER token (PonsV2LauncherToken)
    role: token
    address:
      value: "0x96f0889cBC2D1423Fd64fd1307335fE72f1a198E"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-5, R-8]
  - label: PeerMarketV1
    role: other
    address:
      value: "0xCeaF31F0aA9961A562C5d4CdD6265BC6104428CA"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-6, R-9]
  - label: PeerFlywheel
    role: other
    address:
      value: "0xb48Fb40942a7440A0085BE66fd3f4d478834aEFB"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-10, R-18]
  - label: PeerDistributor
    role: other
    address:
      value: "0x4c40e7C591F1f21A9c307d2C093Bd988aD2d938B"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-11]

metrics:
  - { kind: tvl, value: 380, currency: USD, as_of: 2026-09-03T03:00:00Z, window: point, method: "Blockscout GET /api/v2/addresses/0xCeaF31F0aA9961A562C5d4CdD6265BC6104428CA/token-balances USDG 6dp value 380000000; RPC eth_call USDG.balanceOf(market) 379800000 at an earlier block in the same hour. Collateral in PeerMarketV1, not an all-chains figure.", class: claim, receipt_ids: [R-7, R-6] }
  - { kind: market_cap, value: 85390, currency: USD, as_of: 2026-09-03T03:00:00Z, window: point, method: "DexScreener latest/dex/tokens PEER Uniswap v4 PEER/ETH pair marketCap; token book, not options collateral", class: claim, receipt_ids: [R-12] }
  - { kind: volume_24h, value: 281456.61, currency: USD, as_of: 2026-09-03T03:00:00Z, window: 24h, method: "DexScreener same PEER/ETH pair volume.h24; token book, not options volume", class: claim, receipt_ids: [R-12] }
  - { kind: holders, value: 391, currency: null, as_of: 2026-09-03T03:00:00Z, window: point, method: "Blockscout GET /api/v2/addresses/0x96f0889cBC2D1423Fd64fd1307335fE72f1a198E token.holders_count", class: claim, receipt_ids: [R-5] }

reproductions:
  - { id: REP-1, method: explorer-rpc, chain_id: 4663, checked_at: 2026-09-03T03:00:00Z, receipt_ids: [R-5, R-8], result: "eth_chainId 0x1237 (4663); eth_blockNumber 0x32a0a34 (53085748). PEER 0x96f0889cBC2D1423Fd64fd1307335fE72f1a198E eth_getCode 3248 bytes. name()/symbol() PEER/PEER; decimals 18; totalSupply 1e27 (1,000,000,000e18); owner() revert. Blockscout is_contract true is_verified true name PonsV2LauncherToken proxy_type null creator PonsV2LaunchDeployer 0x3711ceA4feaDE896C913C68F01Eda97Cb06D1A42 creation_transaction_hash 0x5a5316fe6b6fbe9fa63215e1ccc543f0972f1979ef84c6247f3d44965ba477d2; token holders_count 391." }
  - { id: REP-2, method: explorer-rpc, chain_id: 4663, checked_at: 2026-09-03T03:00:00Z, receipt_ids: [R-6, R-7, R-9, R-10, R-11], result: "PeerMarketV1 0xCeaF31F0aA9961A562C5d4CdD6265BC6104428CA eth_getCode 10096 bytes; owner() 0xD5Bc30Feaa7974d8D121540fC997Aa837755b447 (EOA, code 0); guardian() same EOA; resolver() 0x8Ba792452365C4A0C010Fa2E9DE10755aFB18a10 (EOA, code 0); protocolTreasury() PeerFlywheel 0xb48Fb40942a7440A0085BE66fd3f4d478834aEFB; paused() false; marketCount() 20. markets(1)..markets(20) status word 1 (enum Status.Open). Constructor collateral_ USDG 0x5fc5360D0400a0Fd4f2af552ADD042D716F1d168. Blockscout token-balances USDG 380000000 (380.00); RPC USDG.balanceOf 379800000. PeerFlywheel code 3358 bytes is_verified true; PeerDistributor code 4394 bytes is_verified true; both created 2026-09-02T10:47:11Z by the same EOA. Source FEE_BPS 200 FEE_LP_BPS 1000 FEE_PROTOCOL_BPS 9000 FEE_TRADER_BPS 0 RESOLVE_GRACE 7 days." }
  - { id: REP-3, method: official-crosslink, checked_at: 2026-09-03T03:00:00Z, receipt_ids: [R-1, R-2, R-3], result: "peer.family and /docs print PEER 0x96f0889cbc2d1423fd64fd1307335fe72f1a198e as the only official PEER contract, chain 4663, markets priced and settled in USDG. /docs links the Blockscout token page. Site footer: Chain ID 4663; not affiliated with fomo.family or Robinhood Markets. Neither page names an X handle, GitHub org, Telegram or Discord." }
  - { id: REP-4, method: api, checked_at: 2026-09-03T03:00:00Z, receipt_ids: [R-12, R-14], result: "DexScreener latest/dex/tokens/0x96f0889cbc2d1423fd64fd1307335fe72f1a198e lead pair Uniswap v4 PEER/ETH pool 0x2adee79ea1ca6e41332f5e82790ad5daa0cae83ac2c7ca62df75fe5212c91e21 liquidity.usd 26527.99 volume.h24 281456.61 marketCap 85390 pairCreatedAt 1788195563000. info.websites https://peer.family/ info.socials https://x.com/PeerDotFamily. api.llama.fi/protocol/peer is ZKP2P / www.peer.xyz / twitter peerxyz / chains [Base] — not this slug." }
  - { id: REP-5, method: explorer-rpc, chain_id: 4663, checked_at: 2026-09-03T03:00:00Z, receipt_ids: [R-8], result: "Create tx 0x5a5316fe…a477d2 timestamp 2026-08-31T16:59:09Z method launchAndBuy to PonsV2LaunchAndBuy 0xe33E9E479dF8802cb0866d5d05258bEc4cF62948 from EOA 0xD5Bc30Feaa7974d8D121540fC997Aa837755b447. params name/symbol PEER, twitter https://x.com/PeerDotFamily, pairToken 0x0000000000000000000000000000000000000000 (ETH), description binary options on a trader's performance." }

claims:
  - { id: CLM-1, field: product.mechanism, value: "Binary USDG call/put on a named fomo trader's total account PnL over 24h or 7d. FPMM prices both sides. Strike and settlement are the median of three published leaderboard snapshots. Winning share redeems 1 USDG minus 2% of winnings.", class: claim, observed_at: 2026-09-03T03:00:00Z, receipt_ids: [R-1, R-2, R-6], reproduction_ids: [], supersedes: null }
  - { id: CLM-2, field: identity.domain, value: "https://peer.family", class: verified, observed_at: 2026-09-03T03:00:00Z, receipt_ids: [R-1, R-2, R-12], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-3, field: identity.handle, value: "NULL — site and docs do not name an X handle. DexScreener and Pons launchAndBuy params include @PeerDotFamily. Distinct from @peerxyz.", class: claim, observed_at: 2026-09-03T03:00:00Z, receipt_ids: [R-1, R-2, R-8, R-12, R-14], reproduction_ids: [], supersedes: null }
  - { id: CLM-4, field: deployment.address, value: "0x96f0889cBC2D1423Fd64fd1307335fE72f1a198E", class: verified, observed_at: 2026-09-03T03:00:00Z, receipt_ids: [R-2, R-5, R-8], reproduction_ids: [REP-1], supersedes: null }
  - { id: CLM-5, field: lifecycle, value: mainnet, class: verified, observed_at: 2026-09-03T03:00:00Z, receipt_ids: [R-5, R-6, R-9], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-6, field: identity.symbol, value: PEER, class: verified, observed_at: 2026-09-03T03:00:00Z, receipt_ids: [R-2, R-5, R-12], reproduction_ids: [REP-1], supersedes: null }
  - { id: CLM-7, field: deployment.address, value: "0xCeaF31F0aA9961A562C5d4CdD6265BC6104428CA", class: verified, observed_at: 2026-09-03T03:00:00Z, receipt_ids: [R-6, R-9, R-18], reproduction_ids: [REP-2], supersedes: null }
  - { id: CLM-8, field: control.owner, value: "PeerMarketV1 owner() guardian() and constructor lpTreasury_ are EOA 0xD5Bc30Feaa7974d8D121540fC997Aa837755b447 (code 0). resolver() is EOA 0x8Ba792452365C4A0C010Fa2E9DE10755aFB18a10 (code 0). protocolTreasury() is PeerFlywheel. No timelock in the ABI. Source is_partially_verified.", class: verified, observed_at: 2026-09-03T03:00:00Z, receipt_ids: [R-6, R-9], reproduction_ids: [REP-2], supersedes: null }
  - { id: CLM-9, field: taxonomy.primary-leaf, value: markets/options, class: inference, observed_at: 2026-09-03T03:05:00Z, receipt_ids: [R-1, R-2, R-6], reproduction_ids: [], supersedes: null }
  - { id: CLM-10, field: taxonomy.chain-scope, value: robinhood-native, class: verified, observed_at: 2026-09-03T03:00:00Z, receipt_ids: [R-5, R-6], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-11, field: economics.metric, value: "PeerMarketV1 USDG balance 380.00 (Blockscout token-balances) / 379.80 (RPC) at 2026-09-03T03:00Z. Options collateral, not DexScreener $PEER marketCap 85390 and not a 1400000 TVL figure.", class: verified, observed_at: 2026-09-03T03:00:00Z, receipt_ids: [R-6, R-7], reproduction_ids: [REP-2], supersedes: null }
  - { id: CLM-12, field: activity.status, value: "peer.family, /docs parameters table, /discover copy, and @PeerDotFamily posts say 20 open markets across 10 fomo traders (24h and 7d each).", class: claim, observed_at: 2026-09-03T03:00:00Z, receipt_ids: [R-1, R-2, R-3, R-16], reproduction_ids: [], supersedes: null }
  - { id: CLM-13, field: activity.status, value: "PeerMarketV1.marketCount() 20; markets(1) through markets(20) status 1 = Status.Open. /discover HTML lists routes /m/1 through /m/20. This pass did not reproduce a 1-open on-chain reading.", class: verified, observed_at: 2026-09-03T03:00:00Z, receipt_ids: [R-3, R-6], reproduction_ids: [REP-2], supersedes: null }
  - { id: CLM-14, field: activity.status, value: "/m/1 UI: Open, seeded liquidity $10.00, traded volume $5.00, Up reserve $6.67, Down reserve $15.00. Most other markets still sit at seed 10 USDG / 1.98x (userCost 0 on several decoded rows).", class: claim, observed_at: 2026-09-03T03:00:00Z, receipt_ids: [R-4, R-6], reproduction_ids: [REP-2], supersedes: null }
  - { id: CLM-15, field: economics.metric, value: "Homepage card for @AvgJoesCrypto prints Volume 30d $1.4M. That is a fomo trader volume on the marketing card, not PeerMarket TVL. No protocol TVL of 1400000 USD was located on the site, /docs, DexScreener, or Llama.", class: claim, observed_at: 2026-09-03T03:00:00Z, receipt_ids: [R-1, R-7, R-12, R-14], reproduction_ids: [], supersedes: null }
  - { id: CLM-16, field: product.mechanism, value: "Verified PeerMarketV1 source: FEE_BPS 200 (2% of winnings), FEE_LP_BPS 1000, FEE_PROTOCOL_BPS 9000, FEE_TRADER_BPS 0. Docs: trader escrow 0% in v1.", class: verified, observed_at: 2026-09-03T03:00:00Z, receipt_ids: [R-2, R-6], reproduction_ids: [REP-2], supersedes: null }
  - { id: CLM-17, field: product.mechanism, value: "peer.family trader section: 15% of every fee collected on your markets accrues to an on-chain escrow; Your cut of every fee 15%. Same page fee-split diagram prints Trader escrow 0%.", class: claim, observed_at: 2026-09-03T03:00:00Z, receipt_ids: [R-1], reproduction_ids: [], supersedes: null }
  - { id: CLM-18, field: relationship, value: "$PEER launched 2026-08-31T16:59:09Z via Pons v2 launchAndBuy (PonsV2LaunchAndBuy 0xe33E9E479dF8802cb0866d5d05258bEc4cF62948, deployer PonsV2LaunchDeployer 0x3711ceA4feaDE896C913C68F01Eda97Cb06D1A42). Pair asset ETH. Lead book Uniswap v4 PEER/ETH. Launchpad Pons, not Hookr or Virtuals. Flag ca-collision is not applicable (different tickers from PONS).", class: verified, observed_at: 2026-09-03T03:00:00Z, receipt_ids: [R-5, R-8, R-12], reproduction_ids: [REP-1, REP-5], supersedes: null }
  - { id: CLM-19, field: relationship, value: "api.llama.fi/protocol/peer is ZKP2P at www.peer.xyz, twitter peerxyz, chain Base. @peerxyz bio: permissionless on/offramp. Distinct from peer.family / $PEER on 4663. Flag unconfirmed-official on @PeerDotFamily (no site reverse link). Flag third-party-link on DexScreener socials.", class: verified, observed_at: 2026-09-03T03:00:00Z, receipt_ids: [R-14, R-1, R-12], reproduction_ids: [REP-4], supersedes: null }
  - { id: CLM-20, field: security.audit, value: "No audit report URL was located on the site, /docs, Blockscout source header, or X profile this pass. Llama has no adapter for this Peer.", class: unknown, observed_at: 2026-09-03T03:05:00Z, receipt_ids: [], reproduction_ids: [], supersedes: null }
  - { id: CLM-21, field: economics.metric, value: "DexScreener Uniswap v4 PEER/ETH liquidity.usd 26527.99 volume.h24 281456.61 marketCap 85390. Token book, not options collateral.", class: claim, observed_at: 2026-09-03T03:00:00Z, receipt_ids: [R-12], reproduction_ids: [REP-4], supersedes: null }
  - { id: CLM-22, field: "account.@PeerDotFamily.role", value: unknown, class: claim, observed_at: 2026-09-03T03:00:00Z, receipt_ids: [R-8, R-12, R-16], reproduction_ids: [], supersedes: null }
  - { id: CLM-23, field: identity.name, value: Peer, class: verified, observed_at: 2026-09-03T03:00:00Z, receipt_ids: [R-1, R-2, R-6], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-24, field: taxonomy.entity-kind, value: protocol, class: inference, observed_at: 2026-09-03T03:05:00Z, receipt_ids: [R-1, R-6], reproduction_ids: [], supersedes: null }
  - { id: CLM-25, field: identity.repository, value: "NULL — no official repository was located", class: unknown, observed_at: 2026-09-03T03:05:00Z, receipt_ids: [], reproduction_ids: [], supersedes: null }
  - { id: CLM-26, field: product.mechanism, value: "Markets settle in USDG 0x5fc5360D0400a0Fd4f2af552ADD042D716F1d168 (6 decimals). Docs: you do not need to hold PEER to take a position. $PEER is the flywheel token.", class: verified, observed_at: 2026-09-03T03:00:00Z, receipt_ids: [R-2, R-6, R-9], reproduction_ids: [REP-2, REP-3], supersedes: null }
  - { id: CLM-27, field: control.privileged-role, value: "Single resolver EOA posts outcomes with a settlement-file hash. Source: if nobody resolves within closesAt + 7 days, anyone may voidStale. Guardian EOA can voidMarket. Owner can setPaused, setResolver, setGuardian, setTreasuries, transferOwnership.", class: claim, observed_at: 2026-09-03T03:00:00Z, receipt_ids: [R-2, R-6], reproduction_ids: [REP-2], supersedes: null }
  - { id: CLM-28, field: "account.@PeerDotFamily.slug", value: peer, class: claim, observed_at: 2026-09-03T03:00:00Z, receipt_ids: [R-8, R-12, R-16], reproduction_ids: [], supersedes: null }
  - { id: CLM-29, field: "account.@peerxyz.role", value: unknown, class: claim, observed_at: 2026-09-03T03:00:00Z, receipt_ids: [R-14], reproduction_ids: [], supersedes: null }

conflicts:
  - id: CON-1
    field: product.mechanism
    claim_ids: [CLM-16, CLM-17]
    material_effect: true
    status: open
    resolution: null
  - id: CON-2
    field: activity.status
    claim_ids: [CLM-12, CLM-13]
    material_effect: "Site/docs/X copy and /discover list 20 markets; RPC also reads 20 Status.Open. Briefing asked to file a 1-open on-chain reading; that 1-open figure was not reproduced this pass. Filed both the marketing 20 and the on-chain 20."
    status: open
    resolution: null

events:
  - id: EVT-1
    type: onchain
    title: "PeerMarketV1: 20 Open markets, 380 USDG"
    summary: "RPC marketCount 20; ids 1-20 Status.Open. Blockscout USDG balance 380.00."
    occurred_at: 2026-09-03T03:00:00Z
    observed_at: 2026-09-03T03:00:00Z
    affected_fields: [activity.status, economics.metric, lifecycle]
    evidence_state: verified
    impact: material
    site_recommendation: profile
    channel_recommendation: none
    receipt_ids: [R-6, R-7]
  - id: EVT-2
    type: ct
    title: "Peer is live; 20 markets, 10 FOMO traders"
    summary: "@PeerDotFamily: 20 markets, 10 FOMO traders, call or put on PnL, settled in USDG."
    occurred_at: 2026-09-02T19:21:46Z
    observed_at: 2026-09-03T03:00:00Z
    affected_fields: [activity.status, communications.status]
    evidence_state: claim
    impact: material
    site_recommendation: feed
    channel_recommendation: none
    receipt_ids: [R-16]
  - id: EVT-3
    type: ct
    title: "PeerMarket, Flywheel, Distributor addresses posted"
    summary: "@PeerDotFamily posted PeerMarket, PeerFlywheel and PeerDistributor CAs; source verified."
    occurred_at: 2026-09-02T11:10:22Z
    observed_at: 2026-09-03T03:00:00Z
    affected_fields: [deployment.address, communications.status]
    evidence_state: claim
    impact: material
    site_recommendation: profile
    channel_recommendation: none
    receipt_ids: [R-18]
  - id: EVT-4
    type: onchain
    title: "PeerMarketV1, Flywheel, Distributor created"
    summary: "EOA 0xD5Bc…b447 created PeerMarketV1, PeerFlywheel and PeerDistributor at 2026-09-02T10:47:11Z."
    occurred_at: 2026-09-02T10:47:11Z
    observed_at: 2026-09-03T03:00:00Z
    affected_fields: [deployment.address, lifecycle]
    evidence_state: verified
    impact: material
    site_recommendation: profile
    channel_recommendation: none
    receipt_ids: [R-9, R-10, R-11]
  - id: EVT-5
    type: onchain
    title: "$PEER created via Pons v2 launchAndBuy"
    summary: "PonsV2LaunchAndBuy.launchAndBuy created PEER 0x96f0…198E at 2026-08-31T16:59:09Z; pair ETH."
    occurred_at: 2026-08-31T16:59:09Z
    observed_at: 2026-09-03T03:00:00Z
    affected_fields: [deployment.address, identity.symbol]
    evidence_state: verified
    impact: material
    site_recommendation: profile
    channel_recommendation: none
    receipt_ids: [R-5, R-8]
  - id: EVT-6
    type: onchain
    title: "Uniswap v4 PEER/ETH pool on DexScreener"
    summary: "DexScreener lists Uniswap v4 PEER/ETH; pairCreatedAt 2026-08-31; website peer.family."
    occurred_at: 2026-08-31T16:59:23Z
    observed_at: 2026-09-03T03:00:00Z
    affected_fields: [economics.metric, identity.domain]
    evidence_state: claim
    impact: routine
    site_recommendation: profile
    channel_recommendation: none
    receipt_ids: [R-12]

receipts:
  - { id: R-1, publisher: Peer, title: "Peer site", url: "https://peer.family/", published_at: null, accessed_at: 2026-09-03T03:00:00Z, kind: official-site, authority: primary, authenticity: confirmed, supports: [CLM-1, CLM-2, CLM-3, CLM-12, CLM-15, CLM-17, CLM-19, CLM-23], excerpt: "New Live on 20 markets. FOMO let you watch them. Peer lets you trade them. The top ten fomo traders, priced by their PnL. 20 open markets across 10 traders, settled in USDG on Robinhood Chain. PEER contract 0x96f0889cbc2d1423fd64fd1307335fe72f1a198e. Trader escrow 0% on the fee-split diagram; Your cut of every fee 15%. @AvgJoesCrypto Volume 30d $1.4M. Not affiliated with fomo.family or Robinhood Markets." }
  - { id: R-2, publisher: Peer, title: "How Peer works", url: "https://peer.family/docs", published_at: null, accessed_at: 2026-09-03T03:00:00Z, kind: docs, authority: primary, authenticity: confirmed, supports: [CLM-1, CLM-2, CLM-3, CLM-4, CLM-6, CLM-9, CLM-12, CLM-16, CLM-23, CLM-26, CLM-27], excerpt: "A market on Peer is a plain yes-or-no question with a deadline. PEER contract 0x96f0889cbc2d1423fd64fd1307335fe72f1a198e chain 4663. Markets priced, traded and settled in USDG. Parameters: Markets live ten traders, two windows each 20. Redemption fee 2%. Fee split burn PEER / to holders / trader escrow / liquidity 45 / 45 / 0 / 10. Trader escrow is 0% in v1. Resolver is one key." }
  - { id: R-3, publisher: Peer, title: "Discover", url: "https://peer.family/discover", published_at: null, accessed_at: 2026-09-03T03:00:00Z, kind: official-site, authority: primary, authenticity: confirmed, supports: [CLM-12, CLM-13], excerpt: "20 markets across 10 listed traders, one on the next 24 hours and one on the next 7 days. Routes /m/1 through /m/20 on listed fomo handles. Puts and calls on whether a fomo trader's total account PnL is up or down." }
  - { id: R-4, publisher: Peer, title: "Market /m/1 DumbCrayonEater 24h", url: "https://peer.family/m/1", published_at: null, accessed_at: 2026-09-03T03:00:00Z, kind: official-site, authority: primary, authenticity: confirmed, supports: [CLM-14], excerpt: "Will @DumbCrayonEater be up over the next 24 hours? Open. Call 69c Put 31c. Volume $5.00. Seeded liquidity $10.00. Traded volume $5.00. Up reserve $6.67 Down reserve $15.00. Collateral USDG chain 4663. Closes Sep 3, 1:43 PM." }
  - { id: R-5, publisher: Blockscout, title: "PEER 0x96f0…198E", url: "https://robinhoodchain.blockscout.com/address/0x96f0889cbc2d1423fd64fd1307335fe72f1a198e", published_at: null, accessed_at: 2026-09-03T03:00:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-4, CLM-5, CLM-6, CLM-18, EVT-5], excerpt: "is_contract true is_verified true name PonsV2LauncherToken proxy_type null creator 0x3711ceA4feaDE896C913C68F01Eda97Cb06D1A42 creation_transaction_hash 0x5a5316fe6b6fbe9fa63215e1ccc543f0972f1979ef84c6247f3d44965ba477d2. Token PEER holders_count 391 decimals 18 total_supply 1000000000000000000000000000." }
  - { id: R-6, publisher: Blockscout, title: "PeerMarketV1 0xCeaF…28CA", url: "https://robinhoodchain.blockscout.com/address/0xCeaF31F0aA9961A562C5d4CdD6265BC6104428CA", published_at: null, accessed_at: 2026-09-03T03:00:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-5, CLM-7, CLM-8, CLM-11, CLM-13, CLM-14, CLM-16, CLM-26, CLM-27, EVT-1], excerpt: "is_contract true is_verified true is_partially_verified true name PeerMarketV1 file src/PeerMarketV1.sol compiler v0.8.28. RPC marketCount 20; markets(1..20) status 1 Open; owner/guardian 0xD5Bc…b447; resolver 0x8Ba7…8a10. Constructor collateral_ USDG 0x5fc5…d168. Source FEE_BPS 200 FEE_TRADER_BPS 0." }
  - { id: R-7, publisher: Blockscout, title: "PeerMarketV1 token-balances", url: "https://robinhoodchain.blockscout.com/api/v2/addresses/0xCeaF31F0aA9961A562C5d4CdD6265BC6104428CA/token-balances", published_at: null, accessed_at: 2026-09-03T03:00:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-11, CLM-15, EVT-1], excerpt: "USDG 0x5fc5360D0400a0Fd4f2af552ADD042D716F1d168 decimals 6 symbol USDG name Global Dollar value 380000000 (380.00)." }
  - { id: R-8, publisher: Blockscout, title: "PEER launchAndBuy tx 0x5a5316fe…", url: "https://robinhoodchain.blockscout.com/tx/0x5a5316fe6b6fbe9fa63215e1ccc543f0972f1979ef84c6247f3d44965ba477d2", published_at: 2026-08-31T16:59:09Z, accessed_at: 2026-09-03T03:00:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-3, CLM-4, CLM-18, CLM-22, CLM-28, EVT-5], excerpt: "timestamp 2026-08-31T16:59:09.000000Z status ok method launchAndBuy from 0xD5Bc30Feaa7974d8D121540fC997Aa837755b447 to PonsV2LaunchAndBuy 0xe33E9E479dF8802cb0866d5d05258bEc4cF62948. params PEER / PEER / https://x.com/PeerDotFamily / pairToken 0x000…000 / Take a position on the traders you follow. Binary options written on a trader's own performance." }
  - { id: R-9, publisher: Blockscout, title: "PeerMarketV1 create tx 0xb3a87554…", url: "https://robinhoodchain.blockscout.com/tx/0xb3a87554088260a0698be38f29af2c3a7e82cd23bc5cc34a45133236ce680487", published_at: 2026-09-02T10:47:11Z, accessed_at: 2026-09-03T03:00:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-7, CLM-8, EVT-4], excerpt: "timestamp 2026-09-02T10:47:11.000000Z status ok from 0xD5Bc30Feaa7974d8D121540fC997Aa837755b447 (EOA) created PeerMarketV1 0xCeaF31F0aA9961A562C5d4CdD6265BC6104428CA block 52514830." }
  - { id: R-10, publisher: Blockscout, title: "PeerFlywheel 0xb48F…aEFB", url: "https://robinhoodchain.blockscout.com/address/0xb48Fb40942a7440A0085BE66fd3f4d478834aEFB", published_at: null, accessed_at: 2026-09-03T03:00:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [EVT-4], excerpt: "is_contract true is_verified true name PeerFlywheel creator 0xD5Bc30Feaa7974d8D121540fC997Aa837755b447 creation_transaction_hash 0xb74cf3641b90374536bbf69a1050e1b14f842ed2bc9a4b06dc778d4f4bdb0080 timestamp 2026-09-02T10:47:11Z." }
  - { id: R-11, publisher: Blockscout, title: "PeerDistributor 0x4c40…938B", url: "https://robinhoodchain.blockscout.com/address/0x4c40e7C591F1f21A9c307d2C093Bd988aD2d938B", published_at: null, accessed_at: 2026-09-03T03:00:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [EVT-4], excerpt: "is_contract true is_verified true name PeerDistributor creator 0xD5Bc30Feaa7974d8D121540fC997Aa837755b447 creation_transaction_hash 0xdff51bb5ea2cfd381eb0d649ad2cb084bf12cf39aec718dabd6fa8ddb9fe62a9 timestamp 2026-09-02T10:47:11Z." }
  - { id: R-12, publisher: DexScreener, title: "PEER token pairs", url: "https://api.dexscreener.com/latest/dex/tokens/0x96f0889cbc2d1423fd64fd1307335fe72f1a198e", published_at: null, accessed_at: 2026-09-03T03:00:00Z, kind: third-party-data, authority: aggregator, authenticity: unconfirmed, supports: [CLM-2, CLM-3, CLM-6, CLM-15, CLM-18, CLM-19, CLM-21, CLM-22, CLM-28, EVT-6], excerpt: "Uniswap v4 pair 0x2adee79ea1ca6e41332f5e82790ad5daa0cae83ac2c7ca62df75fe5212c91e21 base PEER quote ETH liquidity.usd 26527.99 volume.h24 281456.61 marketCap 85390 pairCreatedAt 1788195563000. info.websites https://peer.family/ socials https://x.com/PeerDotFamily." }
  - { id: R-14, publisher: DefiLlama, title: "protocol/peer (ZKP2P)", url: "https://api.llama.fi/protocol/peer", published_at: null, accessed_at: 2026-09-03T03:00:00Z, kind: third-party-data, authority: aggregator, authenticity: unconfirmed, supports: [CLM-3, CLM-15, CLM-19, CLM-29], excerpt: "name Peer previousNames [ZKP2P] url https://www.peer.xyz/ twitter peerxyz github [zkp2p] category Payments chains [Base] description peer-to-peer non-custodial crypto <> fiat on and off ramping. Not peer.family and not chain 4663." }
  - { id: R-16, publisher: "@PeerDotFamily", title: "Peer is live", url: "https://x.com/PeerDotFamily/status/2095230723905261821", published_at: 2026-09-02T19:21:46Z, accessed_at: 2026-09-03T03:00:00Z, kind: social, authority: social, authenticity: unconfirmed, supports: [CLM-12, CLM-22, CLM-28, EVT-2], excerpt: "Peer is live. 20 markets. 10 FOMO traders. Options on every one of them. For the first time, you can buy a call or a put on a trader's PnL. Two horizons on every trader. 1 day and 7 days. Settled on chain in USDG." }
  - { id: R-18, publisher: "@PeerDotFamily", title: "PEER Infrastructure coming on-chain", url: "https://x.com/PeerDotFamily/status/2095107059767284222", published_at: 2026-09-02T11:10:22Z, accessed_at: 2026-09-03T03:00:00Z, kind: social, authority: social, authenticity: unconfirmed, supports: [CLM-7, EVT-3], excerpt: "PeerMarket deployed at 0xCeaF31F0aA9961A562C5d4CdD6265BC6104428CA PeerFlywheel deployed at 0xb48Fb40942a7440A0085BE66fd3f4d478834aEFB PeerDistributor deployed at 0x4c40e7C591F1f21A9c307d2C093Bd988aD2d938B All source verified." }

gaps:
  - { priority: P0, question: "Does any live /discover filter or on-chain status other than markets(id).status show only 1 open market, matching the briefing's 1-open reading?", checked: "peer.family, /discover HTML (20 routes), RPC marketCount 20 and markets(1..20) status Open, /m/1 Open with $5 volume, 2026-09-03T03:00Z", next: "decode userCost for every id; open remaining /m/n pages; watch 1d closesAt 1788443010" }
  - { priority: P0, question: "Which homepage sentence is the live fee split: 15% trader escrow or FEE_TRADER_BPS 0?", checked: "site trader section 15%; site fee-split diagram 0%; /docs 0%; verified source FEE_TRADER_BPS 0, 2026-09-03", next: "read escrowOf on PeerMarketV1 for listed traderIds" }
  - { priority: P1, question: "Is @PeerDotFamily bidirectional-official, or does the site add a handle later?", checked: "site footer and /docs named no X URL; DexScreener and Pons launch params named x.com/PeerDotFamily; account posts peer.family; distinct from @peerxyz, 2026-09-03", next: "re-read site footer and any later official post that names the handle" }
  - { priority: P1, question: "Where is the professional-audit artifact matching PeerMarketV1 / PeerFlywheel / PeerDistributor on 4663?", checked: "site, /docs, Blockscout source header, Llama protocol/peer (wrong project), 2026-09-03", next: "ask in public if an auditor is named" }
  - { priority: P2, question: "Is there an official GitHub, Telegram or Discord?", checked: "site, /docs, Blockscout github_repository_metadata none, GitHub search, X bio via search, 2026-09-03", next: "leave NULL unless a later official post names one" }
---

# Peer — research packet

## What it is

Binary options on a fomo trader's total account PnL. A user buys a USDG call or put on whether that PnL is higher at close than at open, over 24 hours or 7 days. Settlement is the median of three published leaderboard snapshots. Collateral sits in PeerMarketV1 on chain 4663. $PEER is a Pons v2 token and is not the settlement asset.

Themes: options, prediction

## Why it matters

Robinhood Chain already hosts fomo trader PnL as a public number. Peer turns that number into a USDG binary the wallet can buy without holding $PEER. The same EOA that launched $PEER on Pons also deployed the market, flywheel and distributor.

## What could go wrong

Settlement is posted by one resolver EOA. Owner and guardian are the same EOA with pause and void rights and no timelock in the ABI. Homepage copy says 15% trader escrow while the verified source sets FEE_TRADER_BPS to 0. Llama's Peer row is a different product on Base.

## Product and mechanics

A listed fomo handle gets two markets: sign of 24h PnL and sign of 7d PnL. Price is an FPMM over Up and Down reserves; a winning share is 1 USDG minus 2% of winnings. Strike and close are each the median of three keeper snapshots. [claim R-1 R-2]

peer.family, /docs and /discover copy say 20 markets across 10 traders. PeerMarketV1.marketCount() is 20 and ids 1-20 read Status.Open. /discover lists /m/1 through /m/20. /m/1 is Open with $5 traded on $10 seed. [verified R-6] [claim R-3 R-4]

Markets settle in USDG. $PEER 0x96f0…198E is the flywheel token from a Pons v2 launchAndBuy on 2026-08-31, paired to ETH on Uniswap v4. [verified R-2 R-5 R-8]

## Control and security

PeerMarketV1 owner, guardian and lpTreasury are EOA 0xD5Bc…b447. Resolver is EOA 0x8Ba7…8a10. protocolTreasury is PeerFlywheel. ABI has setPaused, setResolver, setGuardian, setTreasuries, voidMarket and no timelock. Source is partially verified. [verified R-6 R-9]

FEE_BPS 200, FEE_TRADER_BPS 0 in the verified source; /docs matches. The homepage trader section still prints 15% escrow. [verified R-2 R-6] [claim R-1] [disputed R-1 R-2]

No audit report URL was located. [unknown]

## Team and provenance

peer.family and /docs print the PEER CA and chain 4663. They do not name an X handle, GitHub org, Telegram or Discord. DexScreener token info and the Pons launch params include https://x.com/PeerDotFamily; that account posts peer.family. Flag unconfirmed-official. [claim R-1 R-8 R-12]

@peerxyz / www.peer.xyz / Llama slug peer is ZKP2P on Base. Distinct. [verified R-14]

Deployer of $PEER (via Pons) and of PeerMarketV1 / Flywheel / Distributor is EOA 0xD5Bc…b447. [verified R-8 R-9]

## Economics and activity

PeerMarketV1 USDG 380.00 at 2026-09-03T03:00Z (Blockscout; RPC 379.80 in the same hour). That is options collateral, not a 1400000 TVL figure. The $1.4M on the homepage is @AvgJoesCrypto 30d fomo volume. [verified R-7] [claim R-1]

DexScreener PEER/ETH liquidity 26527.99 USD, 24h volume 281456.61, marketCap 85390. $PEER holders_count 391. [claim R-5 R-12]

## Material risks

- Resolver is one EOA; grace void is 7 days. [verified R-6] [claim R-2]
- Owner and guardian are the same EOA with pause and void, no timelock. [verified R-6]
- Homepage 15% trader escrow versus FEE_TRADER_BPS 0. [disputed R-1 R-2]
- No audit report was located. [unknown]
- Llama Peer is ZKP2P on Base, not this venue. [verified R-14]
- $PEER is a Pons v2 token; it is not USDG collateral. [verified R-5 R-8]

## Verification passes

- Receipts: peer.family, /docs, /discover, /m/1, Blockscout token/market/flywheel/distributor/txs, RPC, DexScreener PEER pairs, Llama protocol/peer, and two @PeerDotFamily posts were opened on 2026-09-03 and excerpts copied. [verified R-1 R-5 R-6 R-12]
- Numbers: 380.00 is the PeerMarketV1 USDG chain balance, not DexScreener marketCap 85390 and not the $1.4M fomo 30d volume on the AJC card. marketCount 20 is the contract, not a 1-open reading. [claim R-1 R-7 R-12] [verified R-6]
- Adversarial: the strongest contrary reading is that this Peer is Llama/ZKP2P @peerxyz or that only one market is open. Llama peer is Base payments; RPC reads 20 Status.Open and /discover lists 20 routes. [inference R-3 R-6 R-14]

## Operations log

- Base: `git -C /Users/harsharnsingh/proofline-pr59 rev-parse origin/main` → 334ca0619aa62e922da83f46de021f06d12348cf. Census 49 rows (no peer). content/census.yaml names, docs/templates/research-packet-v2.md, schema/packet.schema.json.
- Official: peer.family, /docs, /discover, /m/1. No X, GitHub, Telegram or Discord URL on those pages.
- Explorer/RPC: rpc.mainnet.chain.robinhood.com eth_chainId 4663 block 53085748; eth_getCode and name/symbol/decimals/totalSupply/owner/guardian/resolver/paused/marketCount/markets(1..20)/USDG.balanceOf on PEER, PeerMarketV1, Flywheel, Distributor, resolver EOA, owner EOA. Blockscout api/v2 addresses, token-balances, create txs, getsourcecode.
- Third party: DexScreener tokens/0x96f0…198e; api.llama.fi/protocol/peer (ZKP2P).
- X: user search PeerDotFamily and peerxyz; keyword from:PeerDotFamily. Site does not confirm the handle. Distinct from @peerxyz.
- Failed: Python urllib RPC 403 without UA; Blockscout logs filter MarketCreated returned errors this pass; no official repository.
- Time: collection 2026-09-03T02:35Z–03:05Z.
