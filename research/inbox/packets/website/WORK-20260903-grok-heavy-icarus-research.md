---
# Packet v2 (docs/research-system.md §5). Seed with full-shaped frontmatter.
contract_version: proofline-research-v2
work_id: WORK-20260903-grok-heavy-icarus-research
producer: grok-heavy
role: collector
base_sha: 334ca0619aa62e922da83f46de021f06d12348cf
slug: website
name: notawebsite
packet_tier: seed
as_of: 2026-09-03T03:05:00Z
prior_packet: null
supersedes: null
owned_slugs: [website]
allowed_paths:
  - research/inbox/packets/website/WORK-20260903-grok-heavy-icarus-research.md

identity:
  canonical_name: notawebsite
  aliases: ["this is not a website", "PageMarkets", "TINAW"]
  symbols: [WEBSITE]
  entity_kind: protocol
  chain_scope: robinhood-native
  official_domain: https://notawebsite.fun
  official_handle: "@notawebsite_rh"
  repository: https://github.com/vibecodermaxi/websitekit
  possible_matches:
    - slug: pons
      signals: [shared-deployer]
      contrary_signals:
        - "Pons is the bonding-curve launchpad at ponsfamily.com / @ponsdotfamily"
        - "WEBSITE 0x0762…7506 is a PonsLauncherToken created by PonsLaunchFactory 0xA5aA…1feB; notawebsite is the ad-slot product, not the pad"
        - "No shared domain or handle"
    - slug: long
      signals: [ticker-only]
      contrary_signals:
        - "Census LONG is a stock-paired factory at app.long.xyz / @longdotxyz"
        - "A second ERC-20 named this is not a website / WEBSITE at 0x0E97…1E18 is a DopplerERC20V1 clone with 5 holders, not the Pons token"
        - "Official $WEBSITE is 0x0762…7506; DexScreener socials on that token are x.com/notawebsite_rh"
    - slug: bankr
      signals: [ticker-only]
      contrary_signals:
        - "Census Bankr is bankr.bot / @bankrbot, an agent runtime on the Doppler/Airlock stack"
        - "0x0E97…1E18 uses DopplerERC20V1 implementation 0x3Be8…C599; the official token is the Pons clone 0x0762…7506"
        - "No shared domain, handle, or reproduced official address"

classification:
  primary_leaf: rwa-products/ad-space
  secondary_leaves: []
  mechanism_tags: [nft, rwa, fee-routing]
  ecosystem_role: subject
  lifecycle: mainnet
  coverage_recommendation: full
  evidence_state: partly-verified
  rationale: "165-slot take-and-edit board on notawebsite.fun; TinawSlotsV2 0xa112…D50a and frozen v1 0x28Dd…F3c plus Pons-launched ERC-20 0x0762…7506 reproduced on chain 4663 with verified source. Uniswap v3 website/WETH pair 0x6D48…a34a has non-empty code. PageMarkets is linked from the official Linktree and has no listings this pass. Slot owner() is a single EOA. [R-1] [R-5] [R-6] [R-7] [R-10]"

qualifying:
  deployed_on_chain: { status: pass, claim_ids: [CLM-5, CLM-7, CLM-8, CLM-10], note: "" }
  native_play:       { status: pass, claim_ids: [CLM-1, CLM-18], note: "" }
  citable:           { status: pass, claim_ids: [CLM-2, CLM-3], note: "" }
  research_story:    { status: pass, claim_ids: [CLM-1, CLM-9, CLM-11, CLM-25], note: "" }

links:
  - { kind: site, url: "https://notawebsite.fun", authenticity: confirmed }
  - { kind: docs, url: "https://notawebsite.fun/docs", authenticity: confirmed }
  - { kind: app, url: "https://pagemarkets.com", authenticity: unconfirmed }
  - { kind: x, url: "https://x.com/notawebsite_rh", authenticity: confirmed }
  - { kind: github, url: "https://github.com/vibecodermaxi/websitekit", authenticity: unconfirmed }
  - { kind: other, url: "https://linktr.ee/notawebsite", authenticity: confirmed }
  - { kind: other, url: "https://websitekit.org", authenticity: unconfirmed }
  - { kind: other, url: "https://www.ponsfamily.com/launchpad/0x0762C1708F0D23F86b29D6B857121FF7DF357506", authenticity: confirmed }

deployments:
  - label: WEBSITE ERC-20 (PonsLauncherToken)
    role: token
    address:
      value: "0x0762C1708F0D23F86b29D6B857121FF7DF357506"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-5, R-6, R-10]
  - label: TinawSlots v2 (TINAW ERC-721)
    role: other
    address:
      value: "0xa112f87dd43D4265Bdd3918A4bb593C7F83ED50a"
      chain: robinhood-chain
      source: docs
      seen: 2026-09-03
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-1, R-7]
  - label: TinawSlots v1 (frozen board)
    role: other
    address:
      value: "0x28Ddf599f8c16ee36a77D7b420973F7201a8BF3c"
      chain: robinhood-chain
      source: docs
      seen: 2026-09-03
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-1, R-8]
  - label: Uniswap v3 website/WETH pool
    role: other
    address:
      value: "0x6D489e07d7Fe2b4Bc5749f75d56337888B68a34a"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-6, R-10]
  - label: Slot operator / treasury / creator
    role: admin
    address:
      value: "0x15e1D12Fc8A7bF97eaaB211d6353F585C53905c6"
      chain: robinhood-chain
      source: docs
      seen: 2026-09-03
      exists_on_4663: true
      explorer_source_verified: false
    receipt_ids: [R-1, R-7, R-9]

metrics:
  - { kind: volume_24h, value: 547112.4, currency: USD, as_of: 2026-09-03T02:56:00Z, window: 24h, method: "api.dexscreener.com/latest/dex/tokens/0x0762C1708F0D23F86b29D6B857121FF7DF357506 Uniswap v3 website/WETH 0x6D48…a34a volume.h24", class: claim, receipt_ids: [R-10] }
  - { kind: market_cap, value: 2612257, currency: USD, as_of: 2026-09-03T02:56:00Z, window: point, method: "api.dexscreener.com/latest/dex/tokens/0x0762C1708F0D23F86b29D6B857121FF7DF357506 lead pair marketCap", class: claim, receipt_ids: [R-10] }
  - { kind: market_cap, value: 956387.595040786, currency: USD, as_of: 2026-09-03T02:45:00Z, window: point, method: "robinhoodchain.blockscout.com/api/v2/tokens/0x0762C1708F0D23F86b29D6B857121FF7DF357506 circulating_market_cap", class: claim, receipt_ids: [R-5] }
  - { kind: holders, value: 1590, currency: null, as_of: 2026-09-03T02:45:00Z, window: point, method: "robinhoodchain.blockscout.com/api/v2/tokens/0x0762C1708F0D23F86b29D6B857121FF7DF357506 holders_count", class: claim, receipt_ids: [R-5] }

reproductions:
  - { id: REP-1, method: explorer-rpc, chain_id: 4663, checked_at: 2026-09-03T02:48:00Z, receipt_ids: [R-5], result: "eth_chainId 0x1237 (4663); eth_blockNumber 0x329f24d (53080653). eth_getCode on 0x0762…7506 non-empty (10550 hex chars). name() this is not a website; symbol() website; decimals 18; totalSupply 1e27; owner() empty/revert" }
  - { id: REP-2, method: explorer-ui, chain_id: 4663, checked_at: 2026-09-03T02:48:00Z, receipt_ids: [R-5, R-6], result: "Blockscout address is_contract true is_verified true name PonsLauncherToken creator PonsLaunchFactory 0xA5aA…1feB creation tx 0xd676…7ec1 2026-08-03T18:43:21Z block 26986908 method launchToken from 0xC73C…5094. Params name this is not a website symbol website twitter https://x.com/notawebsite_rh website https://notawebsite.fun. Same tx created UniswapV3Pool 0x6D48…a34a via factory 0x1f7d…2EfA" }
  - { id: REP-3, method: explorer-rpc, chain_id: 4663, checked_at: 2026-09-03T02:52:00Z, receipt_ids: [R-7, R-8, R-9], result: "eth_blockNumber 0x329f4ac (53081260). TinawSlotsV2 0xa112…D50a eth_getCode 46658 hex chars, owner() 0x15e1…05c6. TinawSlots v1 0x28Dd…F3c eth_getCode 29806 hex chars, owner() 0x15e1…05c6. 0x15e1…05c6 eth_getCode empty (EOA). Uniswap v3 pool 0x6D48…a34a eth_getCode 44286 hex chars" }
  - { id: REP-4, method: explorer-ui, chain_id: 4663, checked_at: 2026-09-03T02:52:00Z, receipt_ids: [R-7, R-8, R-9], result: "TinawSlotsV2 is_verified true name TinawSlotsV2 token This Is Not A Website / TINAW ERC-721 holders_count 58 creator 0x15e1…05c6 tx 0xbf80…9e36 2026-08-11T19:56:59Z block 33931125. TinawSlots v1 is_verified true name TinawSlots creator 0x15e1…05c6 tx 0xfe62…b141 2026-07-28T12:02:26Z block 21576390. 0x15e1…05c6 is_contract false" }
  - { id: REP-5, method: api, chain_id: 4663, checked_at: 2026-09-03T02:56:00Z, receipt_ids: [R-10], result: "DexScreener latest/dex/tokens/0x0762…7506: 8 robinhood uniswap pairs. Lead Uniswap v3 website/WETH 0x6D48…a34a liquidity.usd 197614.95 volume.h24 547112.4 marketCap 2612257 fdv 2612257 priceUsd 0.002795 pairCreatedAt 2026-08-03T18:43:21Z. Next Uniswap v4 website/USDG 0x10c17a5f…8f7e7e liquidity.usd 42510.94 volume.h24 49543.75. info.websites linktr.ee/notawebsite and websitekit.org; socials x.com/notawebsite_rh" }
  - { id: REP-6, method: official-crosslink, checked_at: 2026-09-03T02:40:00Z, receipt_ids: [R-1, R-3, R-4, R-6, R-10], result: "launchToken constructor socials twitter https://x.com/notawebsite_rh website https://notawebsite.fun. @notawebsite_rh bio website is linktr.ee/notawebsite. Linktree lists pagemarkets.com, notawebsite.fun, x.com/notawebsite_rh, websitekit.org, github.com/vibecodermaxi/websitekit, OpenSea collection this-is-not-a-website, and Pons launchpad 0x0762…7506. DexScreener token info matches that handle and Linktree. notawebsite.fun/docs publishes TinawSlots v2/v1 and operator 0x15e1…05c6 on chain 4663" }
  - { id: REP-7, method: explorer-ui, chain_id: 4663, checked_at: 2026-09-03T02:53:00Z, receipt_ids: [R-20], result: "Blockscout token 0x0E97FF21922a6F2fb4A4183c2371d2C5c7Be1e18 name this is not a website symbol WEBSITE ERC-20 holders_count 5 total_supply 1e27. Address page proxy eip1167 implementations DopplerERC20V1 0x3Be8B97Fd0e713B5aBE0649Fa830223B6B4BC599. Distinct from Pons token 0x0762…7506" }

claims:
  - { id: CLM-1, field: product.mechanism, value: "165 page elements on notawebsite.fun are on-chain slots: claim at a floor, take at 1.4×, prior owner credited 1.15×, 15-minute cooldown; content hash committed on chain", class: claim, observed_at: 2026-09-03T02:35:00Z, receipt_ids: [R-1], reproduction_ids: [], supersedes: null }
  - { id: CLM-2, field: identity.handle, value: "@notawebsite_rh", class: verified, observed_at: 2026-09-03T02:40:00Z, receipt_ids: [R-3, R-4, R-6], reproduction_ids: [REP-6], supersedes: null }
  - { id: CLM-3, field: identity.domain, value: "https://notawebsite.fun", class: verified, observed_at: 2026-09-03T02:40:00Z, receipt_ids: [R-1, R-4, R-6], reproduction_ids: [REP-6], supersedes: null }
  - { id: CLM-4, field: identity.symbol, value: "WEBSITE (on-chain symbol() website)", class: verified, observed_at: 2026-09-03T02:48:00Z, receipt_ids: [R-5, R-6], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-5, field: deployment.address, value: "0x0762C1708F0D23F86b29D6B857121FF7DF357506", class: verified, observed_at: 2026-09-03T02:48:00Z, receipt_ids: [R-5, R-6], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-6, field: deployment.role, value: "PonsLauncherToken created by PonsLaunchFactory 0xA5aAb3F0c6EeadF30Ef1D3Eb997108E976351feB via launchToken; pair asset WETH 0x0Bd7…AD73; venue Uniswap v3 pool 0x6D48…a34a", class: verified, observed_at: 2026-09-03T02:48:00Z, receipt_ids: [R-5, R-6, R-10], reproduction_ids: [REP-2, REP-5], supersedes: null }
  - { id: CLM-7, field: deployment.address, value: "0xa112f87dd43D4265Bdd3918A4bb593C7F83ED50a", class: verified, observed_at: 2026-09-03T02:52:00Z, receipt_ids: [R-1, R-7], reproduction_ids: [REP-3, REP-4], supersedes: null }
  - { id: CLM-8, field: deployment.address, value: "0x28Ddf599f8c16ee36a77D7b420973F7201a8BF3c", class: verified, observed_at: 2026-09-03T02:52:00Z, receipt_ids: [R-1, R-8], reproduction_ids: [REP-3, REP-4], supersedes: null }
  - { id: CLM-9, field: control.owner, value: "0x15e1D12Fc8A7bF97eaaB211d6353F585C53905c6", class: verified, observed_at: 2026-09-03T02:52:00Z, receipt_ids: [R-1, R-7, R-9], reproduction_ids: [REP-3, REP-4], supersedes: null }
  - { id: CLM-10, field: lifecycle, value: mainnet, class: verified, observed_at: 2026-09-03T02:52:00Z, receipt_ids: [R-1, R-5, R-7], reproduction_ids: [REP-1, REP-3, REP-4], supersedes: null }
  - { id: CLM-11, field: identity.alias, value: "PageMarkets", class: claim, observed_at: 2026-09-03T02:20:00Z, receipt_ids: [R-4, R-15, R-19], reproduction_ids: [], supersedes: null }
  - { id: CLM-12, field: identity.alias, value: "this is not a website", class: verified, observed_at: 2026-09-03T02:48:00Z, receipt_ids: [R-5, R-6], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-13, field: economics.metric, value: "DexScreener Uniswap v3 website/WETH volume.h24 547112.4 USD at 2026-09-03T02:56:00Z", class: claim, observed_at: 2026-09-03T02:56:00Z, receipt_ids: [R-10], reproduction_ids: [REP-5], supersedes: null }
  - { id: CLM-14, field: economics.metric, value: "DexScreener lead-pair marketCap 2612257 USD at 2026-09-03T02:56:00Z", class: claim, observed_at: 2026-09-03T02:56:00Z, receipt_ids: [R-10], reproduction_ids: [REP-5], supersedes: null }
  - { id: CLM-15, field: economics.metric, value: "Blockscout holders_count 1590 on 0x0762…7506", class: claim, observed_at: 2026-09-03T02:45:00Z, receipt_ids: [R-5], reproduction_ids: [REP-2], supersedes: null }
  - { id: CLM-16, field: economics.metric, value: "notawebsite.fun/stats indexer: gross volume 8.5358 ETH, paid to displaced owners 6.3769 ETH, site kept 2.1590 ETH, 145/165 slots owned, 58 owners, 282 takes (both contracts combined)", class: claim, observed_at: 2026-09-03T02:36:00Z, receipt_ids: [R-2], reproduction_ids: [], supersedes: null }
  - { id: CLM-17, field: security.audit, value: "websitekit README states experimental, unaudited, testnet only; TinawSlots mainnet bytecode was not matched to that repository this pass", class: claim, observed_at: 2026-09-03T02:42:00Z, receipt_ids: [R-18], reproduction_ids: [], supersedes: null }
  - { id: CLM-18, field: product.mechanism, value: "Take pays 1.4× current price; displaced owner is credited 1.15×; remainder funds creator 5% and protocol treasury; payouts are pull-based on /withdraw", class: claim, observed_at: 2026-09-03T02:35:00Z, receipt_ids: [R-1], reproduction_ids: [], supersedes: null }
  - { id: CLM-19, field: product.mechanism, value: "2026-09-01 @notawebsite_rh posted that every slot has an EIP-6551 token-bound account and one slot was seeded with $50 of NVDA gated by 100000 WEBSITE", class: claim, observed_at: 2026-09-03T02:15:00Z, receipt_ids: [R-12], reproduction_ids: [], supersedes: null }
  - { id: CLM-20, field: identity.repository, value: "https://github.com/vibecodermaxi/websitekit listed on the official Linktree as Public SDK Github", class: claim, observed_at: 2026-09-03T02:38:00Z, receipt_ids: [R-4, R-18], reproduction_ids: [], supersedes: null }
  - { id: CLM-21, field: taxonomy.primary-leaf, value: "rwa-products/ad-space", class: claim, observed_at: 2026-09-03T02:35:00Z, receipt_ids: [R-1, R-3], reproduction_ids: [], supersedes: null }
  - { id: CLM-22, field: activity.status, value: "pagemarkets.com showed no listed spaces this pass; the page states nothing is listed on the market this minute", class: claim, observed_at: 2026-09-03T02:37:00Z, receipt_ids: [R-19], reproduction_ids: [], supersedes: null }
  - { id: CLM-23, field: other, value: "Ticker collision: DopplerERC20V1 clone 0x0E97FF21922a6F2fb4A4183c2371d2C5c7Be1e18 is also named this is not a website / WEBSITE with 5 holders; official token is 0x0762…7506", class: verified, observed_at: 2026-09-03T02:53:00Z, receipt_ids: [R-20], reproduction_ids: [REP-7], supersedes: null }
  - { id: CLM-24, field: account.@notawebsite_rh.role, value: "project", class: claim, observed_at: 2026-09-03T02:40:00Z, receipt_ids: [R-3, R-4], reproduction_ids: [], supersedes: null }
  - { id: CLM-25, field: team.identity, value: "Slot contracts created by EOA 0x15e1…05c6; WEBSITE launchToken from EOA 0xC73C…5094. Two keys, not linked on-chain this pass", class: verified, observed_at: 2026-09-03T02:52:00Z, receipt_ids: [R-6, R-7, R-9], reproduction_ids: [REP-2, REP-4], supersedes: null }
  - { id: CLM-26, field: communications.status, value: "2026-08-30 @notawebsite_rh posted that identity, socials and token listings move to PageMarkets; $WEBSITE remains the token; notawebsite stays the experiment layer", class: claim, observed_at: 2026-09-03T02:18:00Z, receipt_ids: [R-15], reproduction_ids: [], supersedes: null }
  - { id: CLM-27, field: control.timelock, value: "NULL — no timelock address on notawebsite.fun/docs; owner() on both slot contracts returns EOA 0x15e1…05c6 with empty code", class: verified, observed_at: 2026-09-03T02:52:00Z, receipt_ids: [R-1, R-7, R-9], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-28, field: economics.metric, value: "Blockscout circulating_market_cap 956387.595040786 USD on 0x0762…7506 at 2026-09-03T02:45:00Z", class: claim, observed_at: 2026-09-03T02:45:00Z, receipt_ids: [R-5], reproduction_ids: [REP-2], supersedes: null }
  - { id: CLM-29, field: product.mechanism, value: "Unclaimed or stale slots decay 10% of price per week toward a 0.001 ETH floor, capped at 52 weeks; upgrades burn WEBSITE to a dead address for 21 days", class: claim, observed_at: 2026-09-03T02:35:00Z, receipt_ids: [R-1], reproduction_ids: [], supersedes: null }
  - { id: CLM-30, field: taxonomy.chain-scope, value: "robinhood-native", class: verified, observed_at: 2026-09-03T02:52:00Z, receipt_ids: [R-1, R-5], reproduction_ids: [REP-1, REP-3], supersedes: null }

conflicts:
  - id: CON-1
    field: economics.metric
    claim_ids: [CLM-14, CLM-28]
    material_effect: "DexScreener lead-pair marketCap 2612257 USD versus Blockscout circulating_market_cap 956387 USD on the same token; do not average"
    status: open
    resolution: null

events:
  - id: EVT-1
    type: company
    title: "PageMarkets escrow: per-site treasury and 28-day timer"
    summary: "@notawebsite_rh posted a per-site treasury, 6-hour crawl, and 28-day escrow that pauses when a site is marked dark."
    occurred_at: 2026-09-02T12:03:13Z
    observed_at: 2026-09-03T02:10:00Z
    affected_fields: [product.mechanism, control.owner]
    evidence_state: claim
    impact: material
    site_recommendation: feed
    channel_recommendation: none
    receipt_ids: [R-11]
  - id: EVT-2
    type: company
    title: "Slots get EIP-6551 wallets and an NVDA bounty"
    summary: "@notawebsite_rh posted that every slot now has a smart wallet and one slot holds $50 of NVDA gated by 100k $WEBSITE."
    occurred_at: 2026-09-01T12:46:20Z
    observed_at: 2026-09-03T02:12:00Z
    affected_fields: [product.mechanism]
    evidence_state: claim
    impact: material
    site_recommendation: both
    channel_recommendation: none
    receipt_ids: [R-12]
  - id: EVT-3
    type: company
    title: "Account says PageMarkets value accrues to $WEBSITE"
    summary: "@notawebsite_rh posted that all value captured by PageMarkets will accrue to $WEBSITE."
    occurred_at: 2026-08-31T21:26:32Z
    observed_at: 2026-09-03T02:16:00Z
    affected_fields: [identity.alias, economics.metric]
    evidence_state: claim
    impact: material
    site_recommendation: feed
    channel_recommendation: none
    receipt_ids: [R-13]
  - id: EVT-4
    type: company
    title: "Account posts 8.178 ETH volume and 6.08 ETH payouts"
    summary: "@notawebsite_rh posted 8.178 ETH volume since v2 on 11 Aug and 6.08 ETH paid to slot owners."
    occurred_at: 2026-08-30T20:14:23Z
    observed_at: 2026-09-03T02:18:00Z
    affected_fields: [economics.metric]
    evidence_state: claim
    impact: material
    site_recommendation: feed
    channel_recommendation: none
    receipt_ids: [R-14]
  - id: EVT-5
    type: company
    title: "Identity moving from notawebsite to PageMarkets"
    summary: "@notawebsite_rh posted that socials and token listings will point to PageMarkets; $WEBSITE stays the token."
    occurred_at: 2026-08-30T07:48:53Z
    observed_at: 2026-09-03T02:18:00Z
    affected_fields: [identity.alias, communications.status]
    evidence_state: claim
    impact: material
    site_recommendation: profile
    channel_recommendation: none
    receipt_ids: [R-15]
  - id: EVT-6
    type: ct
    title: "Andrew names $WEBSITE among Robinhood utility plays"
    summary: "@andrewtalksdefi listed $WEBSITE / @notawebsite_rh as tokenized, ownable ad spaces on Robinhood Chain."
    occurred_at: 2026-08-24T12:42:05Z
    observed_at: 2026-09-03T02:22:00Z
    affected_fields: [communications.status]
    evidence_state: claim
    impact: routine
    site_recommendation: feed
    channel_recommendation: none
    receipt_ids: [R-16]
  - id: EVT-7
    type: company
    title: "v2 slot contract posted as live"
    summary: "@notawebsite_rh posted that v2 is live after a core-contract redesign; TinawSlotsV2 was created the same day."
    occurred_at: 2026-08-11T20:30:38Z
    observed_at: 2026-09-03T02:25:00Z
    affected_fields: [lifecycle, deployment.address]
    evidence_state: claim
    impact: material
    site_recommendation: both
    channel_recommendation: none
    receipt_ids: [R-17, R-7]
  - id: EVT-8
    type: onchain
    title: "Pons launchToken mints $WEBSITE on chain 4663"
    summary: "PonsLaunchFactory launchToken created 0x0762…7506 named this is not a website / website, paired to WETH."
    occurred_at: 2026-08-03T18:43:21Z
    observed_at: 2026-09-03T02:48:00Z
    affected_fields: [deployment.address, identity.symbol, lifecycle]
    evidence_state: verified
    impact: material
    site_recommendation: profile
    channel_recommendation: none
    receipt_ids: [R-5, R-6]

receipts:
  - { id: R-1, publisher: notawebsite, title: "Docs — how this works and what's on-chain", url: "https://notawebsite.fun/docs", published_at: null, accessed_at: 2026-09-03T02:35:00Z, kind: docs, authority: primary, authenticity: confirmed, supports: [CLM-1, CLM-3, CLM-7, CLM-8, CLM-9, CLM-10, CLM-18, CLM-21, CLM-27, CLM-29, CLM-30], excerpt: "The page is carved into 165 individually owned slots. Prices start at a floor of 0.001 ETH. Anyone can take an owned slot by paying 1.4× its current price. The previous owner is credited 1.15×. TinawSlots v2 0xa112f87dd43D4265Bdd3918A4bb593C7F83ED50a. TinawSlots v1 0x28Ddf599f8c16ee36a77D7b420973F7201a8BF3c frozen. Owner / treasury / creator 0x15e1D12Fc8A7bF97eaaB211d6353F585C53905c6. Robinhood Chain mainnet chain id 4663." }
  - { id: R-2, publisher: notawebsite, title: "Statistics — what the board has done so far", url: "https://notawebsite.fun/stats", published_at: null, accessed_at: 2026-09-03T02:36:00Z, kind: official-site, authority: primary, authenticity: confirmed, supports: [CLM-16], excerpt: "Live 31 days. Slots 165. Both contracts combined. Page views 7d 12229. Slots owned 145/165. Distinct owners 58. Times taken 282. Board value 5.3019 ETH. Gross volume 8.5358 ETH. Paid to displaced owners 6.3769 ETH. Kept by the site 2.1590 ETH. Rental income 0.0165 ETH. Tokens burned 1650000 TINAW." }
  - { id: R-3, publisher: "@notawebsite_rh", title: "notawebsite profile", url: "https://x.com/notawebsite_rh", published_at: null, accessed_at: 2026-09-03T02:10:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [CLM-2, CLM-21, CLM-24], excerpt: "Display name this is not a website, handle @notawebsite_rh, bio Building tokenized, ownable digital spaces - a new asset class in crypto. Profile website https://linktr.ee/notawebsite." }
  - { id: R-4, publisher: Linktree, title: "notawebsite Official", url: "https://linktr.ee/notawebsite", published_at: null, accessed_at: 2026-09-03T02:38:00Z, kind: other, authority: primary, authenticity: confirmed, supports: [CLM-2, CLM-3, CLM-11, CLM-20, CLM-24], excerpt: "notawebsite. The tokenization standard for ad inventory. Links: PageMarkets https://pagemarkets.com ; this is not a website http://notawebsite.fun ; X https://x.com/notawebsite_rh ; Websitekit https://websitekit.org ; OpenSea collection this-is-not-a-website ; Public SDK Github vibecodermaxi/websitekit ; Buy on Pons https://www.ponsfamily.com/launchpad/0x0762C1708F0D23F86b29D6B857121FF7DF357506." }
  - { id: R-5, publisher: Blockscout, title: "Address 0x0762…7506 PonsLauncherToken", url: "https://robinhoodchain.blockscout.com/api/v2/addresses/0x0762C1708F0D23F86b29D6B857121FF7DF357506", published_at: null, accessed_at: 2026-09-03T02:45:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-4, CLM-5, CLM-6, CLM-10, CLM-15, CLM-28, CLM-30, EVT-8], excerpt: "hash 0x0762C1708F0D23F86b29D6B857121FF7DF357506 is_contract true is_verified true name PonsLauncherToken creator 0xA5aAb3F0c6EeadF30Ef1D3Eb997108E976351feB creation_transaction_hash 0xd6768fdec49cc61dcc48c722e089c8f4ea4ab6ebe4ab2b6b1d6127d49cfa7ec1. token name this is not a website symbol WEBSITE decimals 18 holders_count 1590 total_supply 1e27 type ERC-20 circulating_market_cap 956387.595040786 volume_24h 483300.8056027568." }
  - { id: R-6, publisher: Blockscout, title: "launchToken tx 0xd676…7ec1", url: "https://robinhoodchain.blockscout.com/api/v2/transactions/0xd6768fdec49cc61dcc48c722e089c8f4ea4ab6ebe4ab2b6b1d6127d49cfa7ec1", published_at: "2026-08-03T18:43:21Z", accessed_at: 2026-09-03T02:50:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-2, CLM-3, CLM-4, CLM-5, CLM-6, CLM-12, CLM-25, EVT-8], excerpt: "timestamp 2026-08-03T18:43:21Z block 26986908 status ok method launchToken from 0xC73C881bCe4F986A93d259e654A5279b886c5094 to PonsLaunchFactory 0xA5aAb3F0c6EeadF30Ef1D3Eb997108E976351feB. params name this is not a website symbol website twitter https://x.com/notawebsite_rh website https://notawebsite.fun. UniswapV3Pool 0x6D489e07d7Fe2b4Bc5749f75d56337888B68a34a created in the same tx." }
  - { id: R-7, publisher: Blockscout, title: "TinawSlotsV2 0xa112…D50a", url: "https://robinhoodchain.blockscout.com/api/v2/addresses/0xa112f87dd43D4265Bdd3918A4bb593C7F83ED50a", published_at: "2026-08-11T19:56:59Z", accessed_at: 2026-09-03T02:52:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-7, CLM-9, CLM-10, CLM-25, CLM-27, EVT-7], excerpt: "hash 0xa112f87dd43D4265Bdd3918A4bb593C7F83ED50a is_contract true is_verified true name TinawSlotsV2 creator 0x15e1D12Fc8A7bF97eaaB211d6353F585C53905c6 creation_transaction_hash 0xbf80f9259cb70dd391b0ee8e9a510db791d62eea09e6db633c7b2f3ad2779e36. token name This Is Not A Website symbol TINAW type ERC-721 holders_count 58." }
  - { id: R-8, publisher: Blockscout, title: "TinawSlots v1 0x28Dd…F3c", url: "https://robinhoodchain.blockscout.com/api/v2/addresses/0x28Ddf599f8c16ee36a77D7b420973F7201a8BF3c", published_at: "2026-07-28T12:02:26Z", accessed_at: 2026-09-03T02:52:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-8], excerpt: "hash 0x28Ddf599f8c16ee36a77D7b420973F7201a8BF3c is_contract true is_verified true name TinawSlots creator 0x15e1D12Fc8A7bF97eaaB211d6353F585C53905c6 creation_transaction_hash 0xfe62b6452399051ff34349ef8de82fd87d82a717f4c5519b68ead266e64db141 2026-07-28T12:02:26Z block 21576390." }
  - { id: R-9, publisher: Blockscout, title: "Operator EOA 0x15e1…05c6", url: "https://robinhoodchain.blockscout.com/api/v2/addresses/0x15e1D12Fc8A7bF97eaaB211d6353F585C53905c6", published_at: null, accessed_at: 2026-09-03T02:52:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-9, CLM-25, CLM-27], excerpt: "hash 0x15e1D12Fc8A7bF97eaaB211d6353F585C53905c6 is_contract false is_verified false creator null. RPC eth_getCode empty at block 53081260." }
  - { id: R-10, publisher: DexScreener, title: "website token pairs on Robinhood", url: "https://api.dexscreener.com/latest/dex/tokens/0x0762C1708F0D23F86b29D6B857121FF7DF357506", published_at: null, accessed_at: 2026-09-03T02:56:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-6, CLM-13, CLM-14], excerpt: "8 pairs chainId robinhood. Uniswap v3 website/WETH pairAddress 0x6D489e07d7Fe2b4Bc5749f75d56337888B68a34a labels v3 liquidity.usd 197614.95 volume.h24 547112.4 marketCap 2612257 fdv 2612257 priceUsd 0.002795 pairCreatedAt 2026-08-03T18:43:21Z. Uniswap v4 website/USDG 0x10c17a5f…8f7e7e liq 42510.94 vol 49543.75. info.websites https://linktr.ee/notawebsite and https://websitekit.org socials x.com/notawebsite_rh." }
  - { id: R-11, publisher: "@notawebsite_rh", title: "PageMarkets escrow design thread", url: "https://x.com/notawebsite_rh/status/2095120357355364791", published_at: "2026-09-02T12:03:13Z", accessed_at: 2026-09-03T02:10:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [EVT-1], excerpt: "Dev update: Yesterday, we spent a lot of time wrangling with one of the toughest contract design challenges on PageMarkets - escrow. We started off by adding a separate treasury for every site. Next, we added a 6-hourly crawl that looks for our code snippet on every site added to the platform. Any site that doesn't show the snippet is marked as dark. Funds go to an escrow contract. This has a 28-day timer." }
  - { id: R-12, publisher: "@notawebsite_rh", title: "Slots as smart wallets; NVDA bounty", url: "https://x.com/notawebsite_rh/status/2094768820120338476", published_at: "2026-09-01T12:46:20Z", accessed_at: 2026-09-03T02:12:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [CLM-19, EVT-2], excerpt: "NEW: We just made your $WEBSITE slots a LOT smarter! Every slot on notawebsite now has a smart wallet attached to it. You can back any slot with a stock token. We've already seeded one slot with $50 worth of NVDA - but you have to hold 100k $WEBSITE to claim it. Every slot on $WEBSITE is already an NFT. EIP-6551 allows any NFT to become a token bound account." }
  - { id: R-13, publisher: "@notawebsite_rh", title: "PageMarkets value accrues to $WEBSITE", url: "https://x.com/notawebsite_rh/status/2094537344812773502", published_at: "2026-08-31T21:26:32Z", accessed_at: 2026-09-03T02:16:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [EVT-3], excerpt: "To repeat: All value captured by PageMarkets will accrue to $WEBSITE. If there is any point where wiring in a token into the platform makes sense, it will be $WEBSITE. We're expanding the product suite and opening up new markets for $WEBSITE." }
  - { id: R-14, publisher: "@notawebsite_rh", title: "8.178 ETH volume since v2", url: "https://x.com/notawebsite_rh/status/2094156800585290060", published_at: "2026-08-30T20:14:23Z", accessed_at: 2026-09-03T02:18:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [CLM-16, EVT-4], excerpt: "We started collecting data for notawebsite a little over 10 days ago. 19,176 pageviews in the last 7 days. 299,526 impressions across all slots over the last 7 days. 8.178E in total volume since v2 dropped on August 11. 6.08E paid out to slot owners." }
  - { id: R-15, publisher: "@notawebsite_rh", title: "Identity moving to PageMarkets", url: "https://x.com/notawebsite_rh/status/2093969190332051747", published_at: "2026-08-30T07:48:53Z", accessed_at: 2026-09-03T02:18:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [CLM-11, CLM-26, EVT-5], excerpt: "Heads up: Starting next week, we'll start moving our identity across the board from notawebsite to PageMarkets. PageMarkets is the name for our tokenization platform and it will be our primary offering moving forward. notawebsite will continue to remain active as our experiment layer. The token, of course, will continue to be $WEBSITE." }
  - { id: R-16, publisher: "@andrewtalksdefi", title: "Robinhood Chain utility list", url: "https://x.com/andrewtalksdefi/status/2091868649539747998", published_at: "2026-08-24T12:42:05Z", accessed_at: 2026-09-03T02:22:00Z, kind: social, authority: social, authenticity: confirmed, supports: [EVT-6], excerpt: "Here are some low-cap utility projects I’m keeping an eye on: $DELTA | @deltaliquidity. $WIRE | @wirebotRH. $HEDGE | @HedgeOnHood. $WEBSITE | @notawebsite_rh Building tokenized, ownable ad spaces, turning advertising into a new asset class. $MESH | @MeshGateway." }
  - { id: R-17, publisher: "@notawebsite_rh", title: "v2 is live", url: "https://x.com/notawebsite_rh/status/2087275519767355682", published_at: "2026-08-11T20:30:38Z", accessed_at: 2026-09-03T02:25:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [EVT-7], excerpt: "v2 is live! This is a massive update from a technical perspective. We've completely redesigned the core contract, changed the architecture, and built something that can last for years, not days." }
  - { id: R-18, publisher: GitHub, title: "vibecodermaxi/websitekit README", url: "https://github.com/vibecodermaxi/websitekit", published_at: null, accessed_at: 2026-09-03T02:42:00Z, kind: repository, authority: primary, authenticity: unconfirmed, supports: [CLM-17, CLM-20], excerpt: "Turn regions of your page into ownable, tradeable inventory. Experimental software. Unaudited. Testnet only. The contracts are not upgradeable — a site is a clone frozen to the implementation it was created from. Deployed on Robinhood Chain testnet (46630) and fully verified." }
  - { id: R-19, publisher: PageMarkets, title: "PageMarkets homepage", url: "https://pagemarkets.com/", published_at: null, accessed_at: 2026-09-03T02:37:00Z, kind: official-site, authority: primary, authenticity: unconfirmed, supports: [CLM-11, CLM-22], excerpt: "PageMarkets — the open market for page space. Cost to list a space $0. Publisher share of every rental 25%. Holder share 70%. PageMarkets 5%. Nothing is listed on the market this minute. No X handle or contract address on the page this pass." }
  - { id: R-20, publisher: Blockscout, title: "Doppler clone 0x0E97…1E18", url: "https://robinhoodchain.blockscout.com/api/v2/tokens/0x0E97FF21922a6F2fb4A4183c2371d2C5c7Be1e18", published_at: null, accessed_at: 2026-09-03T02:53:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-23], excerpt: "address 0x0E97FF21922a6F2fb4A4183c2371d2C5c7Be1e18 name this is not a website symbol WEBSITE type ERC-20 holders_count 5 total_supply 1e27. Address page implementations DopplerERC20V1 0x3Be8B97Fd0e713B5aBE0649Fa830223B6B4BC599 proxy eip1167. Distinct from Pons token 0x0762…7506." }

gaps:
  - { priority: P0, question: "Does TinawSlotsV2 verified source match websitekit SlotSite, and can owner() change pricing, pause takes, or upgrade without a timelock?", checked: "docs name owner 0x15e1…05c6; RPC owner() on v1 and v2 returns that EOA with empty code; websitekit README is testnet-only, 2026-09-03", next: "read verified TinawSlotsV2 source on Blockscout for onlyOwner setters and compare bytecode to websitekit packages/websitekit-contracts" }
  - { priority: P0, question: "Where is the EIP-6551 registry / TBA implementation for slots, and does the NVDA bounty slot hold tokenized NVDA on 4663?", checked: "2026-09-01 X thread only; no TBA address on /docs, 2026-09-03", next: "search TinawSlotsV2 logs for ERC-6551 createAccount and the official NVDA token balance of that TBA" }
  - { priority: P1, question: "Are PageMarkets publisher contracts deployed on 4663, or is the product still off-chain markup with testnet websitekit clones?", checked: "pagemarkets.com has no listings and no CA; websitekit README is testnet 46630; escrow post is a design write-up, 2026-09-03", next: "watch @notawebsite_rh for a PageMarkets CA and reproduce it on Blockscout" }
  - { priority: P1, question: "Why do DexScreener marketCap 2612257 and Blockscout circulating_market_cap 956387 disagree on 0x0762…7506?", checked: "both APIs opened 2026-09-03; CON-1 left open", next: "compare circulating supply assumptions and whether DexScreener uses fdv as marketCap" }
  - { priority: P2, question: "Does github.com/vibecodermaxi/websitekit or websitekit.org name @notawebsite_rh?", checked: "README does not mention notawebsite; websitekit.org HTML this pass had no x.com string (client render), 2026-09-03", next: "open websitekit.org/docs and the GitHub org profile for a handle or domain cross-link" }
  - { priority: P2, question: "Who controls 0xC73C…5094 (Pons launchToken sender) relative to slot operator 0x15e1…05c6?", checked: "two EOAs; constructor beneficiary field was 0xC73C…5094, 2026-09-03", next: "leave unmerged unless a primary post or on-chain role links the keys" }
---

# notawebsite — research packet

## What it is

Tokenized advertising market: 165 visible elements on notawebsite.fun are separately owned on-chain slots. A user pays ETH to claim or take a slot, then edits its content; a take costs 1.4× and credits the prior owner 1.15×. Each slot is an ERC-721 (TINAW). $WEBSITE is a Pons-launched ERC-20 used to burn for upgrades. The same account is building PageMarkets for any publisher page. Operator: @notawebsite_rh.

Themes: rwa, nft, memecoin, tooling, stock-paired:NVDA

## Why it matters

The board is a live 4663 take-market for page inventory, with payouts to displaced owners and a separate Pons token book. PageMarkets is the account's stated publisher product; it had no listings this pass. Slot state is two contracts, v2 live and v1 frozen.

## What could go wrong

Both slot contracts return the same externally owned account from owner(), with no timelock named in the docs. PageMarkets escrow and EIP-6551 wallets are account posts, not reproduced addresses. A second WEBSITE ticker exists as a Doppler clone. DexScreener and Blockscout disagree on market cap.

## Product and mechanics

A slot is one page element. Unclaimed slots sell at a floor from 0.001 ETH. An owned slot is taken at 1.4×; the prior owner is credited 1.15×; the rest is described as creator 5% plus treasury. Payouts sit until claimed on /withdraw. Content is hashed on chain. [claim R-1]

Owned slots can set a 0.1×–4× ask multiplier, rent for up to 7 days (protocol 35% of rent), and upgrade by burning WEBSITE (link 50k, image/background 250k, video 1M) for 21 days. Stale prices decay 10% per week toward the floor. [claim R-1]

@notawebsite_rh posted on 2026-09-01 that each slot has an EIP-6551 token-bound account and that one slot holds $50 of NVDA gated by 100k WEBSITE. No TBA address is on /docs. [claim R-12]

## Control and security

TinawSlotsV2 and TinawSlots v1 both have verified source. owner() on each returns 0x15e1…05c6, which has no code. Docs label that account owner / treasury / creator. No timelock address is published. [verified R-1 R-7 R-9]

websitekit README states the SDK contracts are experimental, unaudited, and testnet-only on chain 46630. That repository was not matched to TinawSlots bytecode this pass. [claim R-18]

## Team and provenance

@notawebsite_rh lists linktr.ee/notawebsite. The Pons launchToken constructor names that handle and notawebsite.fun. DexScreener token info repeats the handle and Linktree. Slot contracts were created by 0x15e1…05c6; the token was launched from 0xC73C…5094. [verified R-4 R-6]

PageMarkets is on the Linktree and in identity posts. pagemarkets.com does not name the handle or a contract this pass. [claim R-4 R-15 R-19]

## Economics and activity

DexScreener lead Uniswap v3 website/WETH pair 0x6D48…a34a: liquidity 197614.95 USD, volume.h24 547112.4 USD, marketCap 2612257 USD at 2026-09-03T02:56:00Z. Blockscout holders_count is 1590; circulating_market_cap is 956387 USD. Those market-cap figures are not the same number. [claim R-5 R-10]

notawebsite.fun/stats, both contracts combined: gross volume 8.5358 ETH, paid to displaced owners 6.3769 ETH, site kept 2.1590 ETH, 145/165 slots owned, 58 owners, 282 takes. The 2026-08-30 account post was 8.178 ETH volume since v2 and 6.08 ETH paid to slot owners. [claim R-2 R-14]

## Material risks

- Slot owner() is one EOA with no published timelock. [verified R-7 R-9]
- PageMarkets has no reproduced mainnet CA and no listings this pass. [claim R-19]
- websitekit is labeled unaudited and testnet-only; live TinawSlots source was not matched to it. [claim R-18]
- A DopplerERC20V1 clone reuses the name this is not a website / WEBSITE at 0x0E97…1E18. [verified R-20]
- DexScreener marketCap and Blockscout circulating_market_cap disagree. [claim R-5 R-10]

## Verification passes

- Receipts: notawebsite.fun/docs and /stats, @notawebsite_rh profile and listed posts, Linktree, pagemarkets.com, websitekit GitHub README, Blockscout API v2 for the token, both slot contracts, the operator, the launch tx and the Doppler clone, DexScreener latest/dex/tokens, and RPC eth_getCode/eth_call were opened on 2026-09-03; excerpts are copied from those responses. [verified R-1 R-5 R-6 R-7 R-10]
- Numbers: 547112.4 is the Uniswap v3 website/WETH pair volume.h24, not an all-pairs sum. 2612257 is that pair's marketCap. 956387 is Blockscout circulating_market_cap. 8.5358 ETH is the site indexer, both contracts combined. [claim R-2 R-5 R-10]
- Adversarial: the strongest contrary reading is that PageMarkets is a separate product, or that 0x0E97…1E18 is the official token. Constructor socials, DexScreener info, Linktree Pons URL, and 1590 holders on 0x0762…7506 versus 5 holders on the Doppler clone argue against merging or swapping the CA. [inference R-4 R-5 R-6 R-10 R-20]

## Operations log

- Base: `git rev-parse origin/main` → 334ca0619aa62e922da83f46de021f06d12348cf. Read content/census.yaml website row (lifecycle announced, no CA), content/projects/website.yaml, content/feed/website.yaml, content/sources/website.yaml, content/research/website.md, content/accounts.yaml @notawebsite_rh, content/changelog/website.yaml. No content/pulled/website.yaml.
- Official: notawebsite.fun, /docs, /stats, linktr.ee/notawebsite, pagemarkets.com, websitekit.org (client-rendered; title only), github.com/vibecodermaxi/websitekit README.
- Explorer: Blockscout api/v2 with a Chrome User-Agent for 0x0762…7506, launch tx 0xd676…7ec1, TinawSlotsV2, TinawSlots v1, 0x15e1…05c6, Uniswap v3 pool, Doppler clone 0x0E97…1E18. RPC https://rpc.mainnet.chain.robinhood.com eth_chainId/eth_blockNumber/eth_getCode/eth_call at blocks 53080653 and 53081260.
- Third party: api.dexscreener.com/latest/dex/tokens/0x0762…7506, token-pairs/v1/robinhood/0x0762…7506, latest/dex/search?q=WEBSITE.
- X: @notawebsite_rh profile; posts 2095120357355364791, 2094768820120338476, 2094537344812773502, 2094156800585290060, 2093969190332051747, 2087275519767355682; @andrewtalksdefi 2091868649539747998.
- Failed: GET https://notawebsite.fun/api/v1/slots/0 and /api/v1/site returned HTTP 500. websitekit.org body is a client render with no handle string in the first HTML. No DefiLlama protocol row located this pass.
- Time: collection 2026-09-03T02:10Z–2026-09-03T03:05Z. No content/ writes. No merge. No push.
