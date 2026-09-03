---
# Packet v2 (docs/research-system.md §5). Discovery seed; not a census row.
contract_version: proofline-research-v2
work_id: WORK-20260903-grok-heavy-icarus-research
producer: grok-heavy
role: collector
base_sha: 334ca0619aa62e922da83f46de021f06d12348cf
slug: bags
name: Bags
packet_tier: seed
as_of: 2026-09-03T04:40:00Z
prior_packet: null
supersedes: null
owned_slugs: [bags]
allowed_paths:
  - research/inbox/packets/bags/WORK-20260903-grok-heavy-icarus-research.md

identity:
  canonical_name: Bags
  aliases: [Bags.fm, BagsApp, "BAGS"]
  symbols: []
  entity_kind: protocol
  chain_scope: multichain
  official_domain: https://bags.fm
  official_handle: "@BagsApp"
  repository: https://github.com/bagsfm
  possible_matches:
    - slug: pons
      signals: [other]
      contrary_signals:
        - "Census Pons is ponsfamily.com / @ponsdotfamily with factories 0xa5aa…1feb and 0x0c37…c2d4"
        - "Bags RH factory is BagsFactory 0xe8Cc4431…Cb37 at bags.fm / docs.bags.fm"
        - "No shared domain, handle, or reproduced address"
    - slug: hoodfun
      signals: [other]
      contrary_signals:
        - "Census hood.fun is a separate bonding-curve pad"
        - "Bags domain is bags.fm / docs.bags.fm with factory 0xe8Cc4431…Cb37"
        - "No shared domain, handle, or reproduced address"
    - slug: foxpad
      signals: [other]
      contrary_signals:
        - "Census FoxPad is foxpad.app / @FoxPad_RH with factory 0xF8A5…F22C graduating into Uniswap v3"
        - "Bags graduates into a Uniswap v4 pool with BagsV4Hook 0x2380…EEcC"
        - "No shared domain, handle, or reproduced address"
    - slug: long
      signals: [other]
      contrary_signals:
        - "Census LONG is app.long.xyz / @longdotxyz (Doppler/Airlock stock-paired factory)"
        - "Bags is bags.fm / @BagsApp with BagsFactory 0xe8Cc4431…Cb37"
        - "Emerson labels Bankr / Long.xyz on factory 0x1b37…b69a, not 0xe8Cc4431…Cb37"

classification:
  primary_leaf: launch/bonding-curve
  secondary_leaves: [launch/hook-programmable]
  mechanism_tags: [launchpad, bonding-curve, amm, fee-routing]
  ecosystem_role: subject
  lifecycle: mainnet
  coverage_recommendation: seed
  evidence_state: partly-verified
  rationale: "Docs name BagsFactory 0xe8Cc4431…Cb37 as the RH launch entry. RPC on 4663 returned 130-byte ERC1967 code, allTokensLength 3943, owner() 0xDEf671…9058 (no code), implementation slot 0x7dfa01…Ef1C named BagsFactory and source-verified. Bonding curve then Uniswap v4 via BagsV4Hook. Distinct from packed Pons, hood.fun, FoxPad, Clanker, and Coinbarrel. Not a census row. [R-2] [R-3] [R-13] [R-14]"

qualifying:
  deployed_on_chain: { status: pass, claim_ids: [CLM-5, CLM-6, CLM-16], note: "" }
  native_play:       { status: pass, claim_ids: [CLM-1, CLM-8], note: "" }
  citable:           { status: pass, claim_ids: [CLM-2, CLM-3, CLM-4], note: "" }
  research_story:    { status: pass, claim_ids: [CLM-1, CLM-9, CLM-12, CLM-20], note: "" }

links:
  - { kind: site, url: "https://bags.fm", authenticity: confirmed }
  - { kind: app, url: "https://bags.fm/launch", authenticity: confirmed }
  - { kind: docs, url: "https://docs.bags.fm/robinhood/overview", authenticity: confirmed }
  - { kind: x, url: "https://x.com/BagsApp", authenticity: unconfirmed }
  - { kind: github, url: "https://github.com/bagsfm", authenticity: confirmed }
  - { kind: github, url: "https://github.com/bagsfm/bags-idl", authenticity: confirmed }
  - { kind: telegram, url: "https://t.me/bags_dev", authenticity: unconfirmed }
  - { kind: other, url: "https://dune.com/0x_emerson/robinhood-memecoin-launchpads-comparison-30d", authenticity: unconfirmed }

deployments:
  - label: BagsFactory proxy
    role: factory
    address:
      value: "0xe8Cc4431adF8b5A847C113EF0c6af9043219Cb37"
      chain: robinhood-chain
      source: docs
      seen: 2026-09-03
      exists_on_4663: true
      explorer_source_verified: true
      explorer_source_verification_scope: full
      implementation_source_verified: true
    receipt_ids: [R-2, R-3, R-13, R-14]
  - label: BagsFactory implementation
    role: implementation
    address:
      value: "0x7dfa0131F6c8626F199A2E33E49DfB5660e6Ef1C"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-13, R-14, R-18]
  - label: BagsLens
    role: other
    address:
      value: "0xC82Db941dAf90B754aecb5F7D14c683dc608d595"
      chain: robinhood-chain
      source: docs
      seen: 2026-09-03
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-2, R-3, R-15]
  - label: BagsV4Hook
    role: other
    address:
      value: "0x2380aBf72C17aABAb76480244759AC7E2932EEcC"
      chain: robinhood-chain
      source: docs
      seen: 2026-09-03
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-2, R-3, R-15, R-17]
  - label: BagsVault proxy
    role: vault
    address:
      value: "0x4861446aa7fFd9e67a83cBbAcb1A4B70540B83Aa"
      chain: robinhood-chain
      source: docs
      seen: 2026-09-03
      exists_on_4663: true
      explorer_source_verified: true
      explorer_source_verification_scope: full
      implementation_source_verified: true
    receipt_ids: [R-2, R-3, R-13, R-15]
  - label: BagsVault implementation
    role: implementation
    address:
      value: "0xeC66D9fc56E92408518De9b8a8697245E932e688"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-13, R-15, R-18]
  - label: BagsBondingCurveBeacon
    role: other
    address:
      value: "0x8DCEcaf516C828A493C2C449c1E25F92cF80207E"
      chain: robinhood-chain
      source: docs
      seen: 2026-09-03
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-3, R-13, R-18]
  - label: BagsFeeShareBeacon
    role: other
    address:
      value: "0xdFf07d39C5332C602e06FA64f0A97C92fd8537e0"
      chain: robinhood-chain
      source: docs
      seen: 2026-09-03
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-3, R-13, R-18]
  - label: BagsFactory and BagsVault owner()
    role: admin
    address:
      value: "0xDEf671F11C8a30818eb3D9Cc9476EEEc805f9058"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03
      exists_on_4663: true
      explorer_source_verified: false
    receipt_ids: [R-13, R-16]

metrics:
  - { kind: fees_24h, value: 7354, currency: USD, as_of: 2026-09-03T04:35:00Z, window: 24h, method: "api.llama.fi/summary/fees/bags chainBreakdown['Robinhood Chain'].total24h", class: claim, receipt_ids: [R-19] }
  - { kind: revenue_24h, value: 3595, currency: USD, as_of: 2026-09-03T04:35:00Z, window: 24h, method: "api.llama.fi/summary/fees/bags?dataType=dailyRevenue chainBreakdown['Robinhood Chain'].total24h", class: claim, receipt_ids: [R-20] }

reproductions:
  - { id: REP-1, method: explorer-rpc, chain_id: 4663, checked_at: 2026-09-03T04:35:00Z, receipt_ids: [R-13, R-14], result: "rpc.mainnet.chain.robinhood.com eth_chainId 0x1237. eth_blockNumber 0x32ab7bf (53131199). Factory 0xe8Cc4431…Cb37 eth_getCode 130 bytes prefix 0x60806040527f3608; nonce 0x2e36 (11830); balance 0. owner() 0xdef671f11c8a30818eb3d9cc9476eeec805f9058. pendingOwner() zero. ERC1967 implementation slot 0x7dfa0131f6c8626f199a2e33e49dfb5660e6ef1c. creationFee() 0. allTokensLength() 0xf67 (3943). graduationThreshold() 5e18 (5 ETH). partnerFeeBps() 2500. hook() 0x2380abf7…eecc. vault() 0x4861446a…83aa. Implementation eth_getCode 9904 bytes. Blockscout api/v2 name ERC1967Proxy is_verified true proxy_type eip1967; implementation name BagsFactory is_verified true." }
  - { id: REP-2, method: explorer-rpc, chain_id: 4663, checked_at: 2026-09-03T04:35:00Z, receipt_ids: [R-13, R-15, R-17, R-18], result: "Lens 0xC82Db941…d595 eth_getCode 2404 B; FACTORY() 0xe8cc4431…cb37; Blockscout name BagsLens is_verified true. Hook 0x2380aBf7…EEcC eth_getCode 6628 B; factory() 0xe8cc4431…cb37; Blockscout name BagsV4Hook is_verified true. Vault 0x4861446a…83Aa eth_getCode 130 B; owner() 0xdef671…9058; ERC1967 slot 0xec66d9fc56e92408518de9b8a8697245e932e688; native balance 28348129775172208822 wei (28.348 ETH). Curve beacon 0x8DCEcaf5…207E implementation() 0x419890a2…3275; fee-share beacon 0xdFf07d39…37e0 implementation() 0xd169ebd0…8a1a. tokenImpl() 0x74e9a91f…5409. Blockscout names BagsBeacon / BagsBondingCurve / BagsFeeShare / BagsVault / BagsToken is_verified true." }
  - { id: REP-3, method: explorer-rpc, chain_id: 4663, checked_at: 2026-09-03T04:35:00Z, receipt_ids: [R-13, R-16], result: "Owner 0xDEf671F1…9058 eth_getCode 0x; nonce 0x6e (110). Blockscout is_contract false. Same address is factory creator_address_hash and owner() on factory, vault, and both beacons. pendingOwner() on factory and vault is the zero address." }
  - { id: REP-4, method: official-crosslink, checked_at: 2026-09-03T04:32:00Z, receipt_ids: [R-1, R-9, R-11], result: "api.github.com/orgs/bagsfm login bagsfm name BAGS blog bags.fm twitter_username bagsapp public_repos 8. @BagsApp display name BAGS; bio Launch, Trade, Earn, and Discover the Next Big Thing; website field bags.fm/launch on 2026-07-12 posts. bags.fm title Bags; og:url https://bags.fm; twitter:card summary_large_image; no twitter:site or twitter:creator in the HTML this pass." }
  - { id: REP-5, method: api, checked_at: 2026-09-03T04:35:00Z, receipt_ids: [R-19, R-20, R-21, R-22], result: "api.llama.fi/protocol/bags name Bags category Launchpad chains [Solana] twitter BagsApp url https://bags.fm/ audits 0 github null currentChainTvls {}. summary/fees/bags chains [Solana, Robinhood Chain] total24h 8219 total7d 90940; chainBreakdown Robinhood Chain total24h 7354 total7d 71083 total30d 210787 totalAllTime 593083. dailyRevenue Robinhood Chain total24h 3595 total7d 35444 total30d 105224. Emerson 30d Platform Summary Bags tokens_launched 1611 last_launch 2026-09-03 01:03:35 UTC; DEX Volume by Pad Bags dex_volume_usd 1404212.98. Factory map 0xe8cc4431…cb37 Bags." }

claims:
  - { id: CLM-1, field: product.mechanism, value: "BagsFactory.create / createAndBuy deploys a per-token BagsToken (fixed 1e9 supply, 18 decimals), BagsBondingCurve, and BagsFeeShare. 830M of 1B sells on a virtual x*y=k curve vs native ETH. When realQuoteReserves reach thresholdQuote (live global 5 ETH), the next buy migrates remaining 170M plus the raise into a Uniswap v4 token/WETH pool with BagsV4Hook; LP is locked. Flat 2% fee on the ETH/WETH leg in both phases, split 1% creator / 1% protocol.", class: claim, observed_at: 2026-09-03T04:20:00Z, receipt_ids: [R-2, R-3, R-4], reproduction_ids: [], supersedes: null }
  - { id: CLM-2, field: identity.domain, value: "https://bags.fm", class: claim, observed_at: 2026-09-03T04:21:00Z, receipt_ids: [R-1, R-9, R-11], reproduction_ids: [REP-4], supersedes: null }
  - { id: CLM-3, field: identity.handle, value: "@BagsApp", class: claim, observed_at: 2026-09-03T04:32:00Z, receipt_ids: [R-9, R-11, R-21], reproduction_ids: [REP-4], supersedes: null }
  - { id: CLM-4, field: identity.name, value: "Bags", class: claim, observed_at: 2026-09-03T04:21:00Z, receipt_ids: [R-1, R-2, R-21], reproduction_ids: [], supersedes: null }
  - { id: CLM-5, field: deployment.address, value: "0xe8Cc4431adF8b5A847C113EF0c6af9043219Cb37", class: verified, observed_at: 2026-09-03T04:35:00Z, receipt_ids: [R-2, R-3, R-13, R-14], reproduction_ids: [REP-1], supersedes: null }
  - { id: CLM-6, field: deployment.address, value: "0x2380aBf72C17aABAb76480244759AC7E2932EEcC", class: verified, observed_at: 2026-09-03T04:35:00Z, receipt_ids: [R-2, R-3, R-15, R-17], reproduction_ids: [REP-2], supersedes: null }
  - { id: CLM-7, field: lifecycle, value: mainnet, class: verified, observed_at: 2026-09-03T04:35:00Z, receipt_ids: [R-2, R-13, R-14], reproduction_ids: [REP-1], supersedes: null }
  - { id: CLM-8, field: taxonomy.primary-leaf, value: launch/bonding-curve, class: claim, observed_at: 2026-09-03T04:20:00Z, receipt_ids: [R-2, R-3, R-4], reproduction_ids: [], supersedes: null }
  - { id: CLM-9, field: control.owner, value: "0xDEf671F11C8a30818eb3D9Cc9476EEEc805f9058", class: verified, observed_at: 2026-09-03T04:35:00Z, receipt_ids: [R-13, R-16], reproduction_ids: [REP-1, REP-3], supersedes: null }
  - { id: CLM-10, field: control.proxy, value: "BagsFactory 0xe8Cc4431…Cb37 and BagsVault 0x4861446a…83Aa are ERC1967/UUPS proxies. Factory implementation slot 0x7dfa01…Ef1C. Vault implementation slot 0xec66d9…e688. Per-token curves and fee-shares are beacon proxies; BagsV4Hook is a CREATE2 singleton; BagsToken clones are EIP-1167.", class: verified, observed_at: 2026-09-03T04:35:00Z, receipt_ids: [R-3, R-13, R-14, R-15], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-11, field: control.timelock, value: "No timelock contract is named in the RH docs address book. RPC pendingOwner() on the factory and vault was the zero address. Owner 0xDEf671…9058 has no code on 4663.", class: claim, observed_at: 2026-09-03T04:35:00Z, receipt_ids: [R-3, R-13, R-16], reproduction_ids: [REP-1, REP-3], supersedes: null }
  - { id: CLM-12, field: activity.status, value: "factory.allTokensLength() 3943 on 2026-09-03T04:35:00Z. Emerson 30d Platform Summary Bags 1611 tokens, last_launch 2026-09-03 01:03:35 UTC, 274 unique deployers.", class: verified, observed_at: 2026-09-03T04:35:00Z, receipt_ids: [R-13, R-22], reproduction_ids: [REP-1, REP-5], supersedes: null }
  - { id: CLM-13, field: economics.metric, value: "Robinhood Chain fees total24h 7354 USD total7d 71083 total30d 210787 totalAllTime 593083 from api.llama.fi/summary/fees/bags chainBreakdown at 2026-09-03T04:35:00Z. All-chain totals 8219 / 90940 mix Solana.", class: claim, observed_at: 2026-09-03T04:35:00Z, receipt_ids: [R-19, R-21], reproduction_ids: [REP-5], supersedes: null }
  - { id: CLM-14, field: economics.metric, value: "Emerson DEX Volume by Pad 30d Bags 1404212.98 USD, 19851 trades, 3575 unique traders. Hint window was 1,554 tokens / $1.38M; this pass is 1,611 / $1.40M.", class: claim, observed_at: 2026-09-03T04:30:00Z, receipt_ids: [R-22], reproduction_ids: [REP-5], supersedes: null }
  - { id: CLM-15, field: security.audit, value: "No audit report URL was located on bags.fm, docs.bags.fm, the bagsfm GitHub org, or Llama audit_links this pass; Llama audits field 0", class: unknown, observed_at: 2026-09-03T04:36:00Z, receipt_ids: [], reproduction_ids: [], supersedes: null }
  - { id: CLM-16, field: deployment.address, value: "0x4861446aa7fFd9e67a83cBbAcb1A4B70540B83Aa", class: verified, observed_at: 2026-09-03T04:35:00Z, receipt_ids: [R-2, R-3, R-13, R-15], reproduction_ids: [REP-2], supersedes: null }
  - { id: CLM-17, field: taxonomy.chain-scope, value: multichain, class: claim, observed_at: 2026-09-03T04:20:00Z, receipt_ids: [R-2, R-5, R-19], reproduction_ids: [], supersedes: null }
  - { id: CLM-18, field: relationship, value: "Distinct from census Pons (ponsfamily.com / @ponsdotfamily), hood.fun, and FoxPad (foxpad.app / @FoxPad_RH), and from packed Clanker (0xd3f2…9A94) and Coinbarrel (0x4234…e70). No shared domain, handle, or reproduced factory.", class: claim, observed_at: 2026-09-03T04:36:00Z, receipt_ids: [R-1, R-2, R-22], reproduction_ids: [], supersedes: null }
  - { id: CLM-19, field: product.mechanism, value: "Live factory.creationFee() is 0 wei this pass (docs default 0.02 ETH, owner-settable, snapshotted per launch). graduationThreshold() 5 ETH. partnerFeeBps() 2500. Vault native balance 28.348 ETH.", class: verified, observed_at: 2026-09-03T04:35:00Z, receipt_ids: [R-2, R-13], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-20, field: product.mechanism, value: "New RH pools use fee 0x800000 (dynamic), tickSpacing 60, hooks BagsV4Hook, pair token/WETH. Post-migration swaps go through Robinhood-modified UniversalRouter 0x88767899…0904; docs warn stock Uniswap SDK calldata reverts.", class: claim, observed_at: 2026-09-03T04:20:00Z, receipt_ids: [R-3, R-6], reproduction_ids: [], supersedes: null }
  - { id: CLM-21, field: "account.@BagsApp.official", value: "GitHub org bagsfm twitter_username bagsapp and blog bags.fm. Handle website field names bags.fm/launch. bags.fm HTML has no twitter:site this pass. Flag unconfirmed-official.", class: claim, observed_at: 2026-09-03T04:32:00Z, receipt_ids: [R-1, R-9, R-11], reproduction_ids: [REP-4], supersedes: null }
  - { id: CLM-22, field: "account.@BagsApp.slug", value: bags, class: claim, observed_at: 2026-09-03T04:32:00Z, receipt_ids: [R-9], reproduction_ids: [], supersedes: null }
  - { id: CLM-23, field: "account.@BagsApp.role", value: project, class: claim, observed_at: 2026-09-03T04:32:00Z, receipt_ids: [R-9], reproduction_ids: [], supersedes: null }
  - { id: CLM-24, field: communications.status, value: "@BagsApp posted Launch Coins On Robinhood Chain / bags.fm/launch on 2026-07-12 and that Robinhood API docs were live at docs.bags.fm/robinhood/overview on 2026-07-13. Recent 2026-08-23 through 2026-09-01 posts are short replies, not contract updates.", class: claim, observed_at: 2026-09-03T04:25:00Z, receipt_ids: [R-7, R-8, R-10], reproduction_ids: [], supersedes: null }
  - { id: CLM-25, field: identity.repository, value: "https://github.com/bagsfm — org name BAGS, blog bags.fm, twitter_username bagsapp, 8 public repos. RH ABIs at bagsfm/bags-idl robinhood-abi-v2. Llama github null.", class: claim, observed_at: 2026-09-03T04:32:00Z, receipt_ids: [R-3, R-11, R-21], reproduction_ids: [REP-4], supersedes: null }
  - { id: CLM-26, field: identity.alias, value: "Bags.fm", class: claim, observed_at: 2026-09-03T04:21:00Z, receipt_ids: [R-1, R-21], reproduction_ids: [], supersedes: null }
  - { id: CLM-27, field: taxonomy.secondary-leaf, value: launch/hook-programmable, class: claim, observed_at: 2026-09-03T04:20:00Z, receipt_ids: [R-2, R-3], reproduction_ids: [], supersedes: null }
  - { id: CLM-28, field: control.privileged-role, value: "Docs: factory owner can setCreationFee, setGraduationThreshold, setPartnerFeeBps, setHook, setTokenImpl for future launches; vault owner can withdraw native ETH and tokens; a single beacon upgradeTo retargets every live curve or fee-share. RPC owner() on factory, vault, and both beacons is the same EOA 0xDEf671…9058.", class: verified, observed_at: 2026-09-03T04:35:00Z, receipt_ids: [R-3, R-13], reproduction_ids: [REP-1, REP-2, REP-3], supersedes: null }
  - { id: CLM-29, field: other, value: "Solana remains a separate Bags venue (Meteora DBC / DAMM v2). Llama protocol/bags currentChainTvls is empty and chains [Solana]; RH activity is the fees adapter chainBreakdown plus the on-chain factory, not protocol TVL. Flag wrong-chain on any Solana mint treated as a 4663 deployment.", class: claim, observed_at: 2026-09-03T04:35:00Z, receipt_ids: [R-5, R-19, R-21], reproduction_ids: [REP-5], supersedes: null }

conflicts: []

events:
  - id: EVT-1
    type: onchain
    title: "RPC: BagsFactory proxy has code, owner, and matching implementation slot"
    summary: "Factory 0xe8Cc4431…Cb37 is an ERC1967 proxy on chain 4663 with 130-byte code, nonce 11830, owner 0xDEf671…9058, allTokensLength 3943, and implementation 0x7dfa01…Ef1C named BagsFactory and source-verified, matching docs BagsFactory."
    occurred_at: 2026-09-03T04:35:00Z
    observed_at: 2026-09-03T04:35:00Z
    affected_fields: [deployment.address, control.owner, control.proxy, lifecycle, activity.status]
    evidence_state: verified
    impact: material
    site_recommendation: profile
    channel_recommendation: none
    receipt_ids: [R-13, R-14]
  - id: EVT-2
    type: company
    title: "@BagsApp posts Launch Coins On Robinhood Chain"
    summary: "On 2026-07-12 the handle posted Launch Coins On Robinhood Chain Now Live On @BagsApp and a follow-up with http://bags.fm/launch. Website field on that profile snapshot is bags.fm/launch."
    occurred_at: 2026-07-12T21:33:18Z
    observed_at: 2026-09-03T04:25:00Z
    affected_fields: [lifecycle, communications.status, identity.handle]
    evidence_state: claim
    impact: material
    site_recommendation: both
    channel_recommendation: none
    receipt_ids: [R-7]
  - id: EVT-3
    type: company
    title: "@BagsApp posts Robinhood API docs live"
    summary: "On 2026-07-13 the handle posted that Bags Robinhood API docs were live at docs.bags.fm/robinhood/overview, listing launch, trade, claim fees, and a partner key at 25% of protocol revenue."
    occurred_at: 2026-07-13T05:35:13Z
    observed_at: 2026-09-03T04:25:00Z
    affected_fields: [communications.status, product.mechanism]
    evidence_state: claim
    impact: material
    site_recommendation: both
    channel_recommendation: none
    receipt_ids: [R-8]
  - id: EVT-4
    type: onchain
    title: "Emerson 30d: Bags still launching through 2026-09-03"
    summary: "Dune 0x_emerson Platform Summary 30d lists Bags at 1,611 tokens, last_launch 2026-09-03 01:03:35 UTC, factory 0xe8cc4431…cb37. DEX volume 30d $1,404,213. RPC allTokensLength 3943 is lifetime on this factory, not the 30d window."
    occurred_at: 2026-09-03T01:03:35Z
    observed_at: 2026-09-03T04:30:00Z
    affected_fields: [activity.status, economics.metric]
    evidence_state: claim
    impact: routine
    site_recommendation: feed
    channel_recommendation: none
    receipt_ids: [R-22]

receipts:
  - { id: R-1, publisher: Bags, title: "bags.fm home", url: "https://bags.fm/", published_at: null, accessed_at: 2026-09-03T04:21:00Z, kind: official-site, authority: primary, authenticity: confirmed, supports: [CLM-2, CLM-4, CLM-18, CLM-21, CLM-26], excerpt: "title Bags. meta description: Launch a coin and earn royalties from every trade. og:title Welcome to Bags. og:url https://bags.fm. og:site_name Bags. twitter:card summary_large_image. twitter:title Welcome to Bags. No twitter:site. /launch title Launch your idea. description: Turn your idea into a coin and earn 1% on every trade — forever." }
  - { id: R-2, publisher: Bags, title: "Robinhood Chain Overview", url: "https://docs.bags.fm/robinhood/overview", published_at: null, accessed_at: 2026-09-03T04:15:00Z, kind: docs, authority: primary, authenticity: confirmed, supports: [CLM-1, CLM-4, CLM-5, CLM-6, CLM-7, CLM-8, CLM-16, CLM-17, CLM-19, CLM-27], excerpt: "Bags is deployed on Robinhood Chain as public permissionless contracts. Chain ID 4663. BagsFactory 0xe8Cc4431adF8b5A847C113EF0c6af9043219Cb37. BagsLens 0xC82Db941dAf90B754aecb5F7D14c683dc608d595. BagsV4Hook 0x2380aBf72C17aABAb76480244759AC7E2932EEcC. BagsVault 0x4861446aa7fFd9e67a83cBbAcb1A4B70540B83Aa. Bonding curve then Uniswap v4 with locked LP. Flat 2% fee, 1% creator / 1% protocol. creationFee default 0.02 ETH. Deploy block 7887312. Factory and vault are UUPS proxies." }
  - { id: R-3, publisher: Bags, title: "Contracts Reference", url: "https://docs.bags.fm/robinhood/contracts", published_at: null, accessed_at: 2026-09-03T04:18:00Z, kind: docs, authority: primary, authenticity: confirmed, supports: [CLM-1, CLM-5, CLM-8, CLM-10, CLM-20, CLM-25, CLM-28], excerpt: "BagsFactory proxy 0xe8Cc4431…Cb37. BagsBondingCurveBeacon 0x8DCEcaf516C828A493C2C449c1E25F92cF80207E. BagsFeeShareBeacon 0xdFf07d39C5332C602e06FA64f0A97C92fd8537e0. ABIs at github.com/bagsfm/bags-idl robinhood-abi-v2. create / createAndBuy. allTokensLength. Owner-only setCreationFee / setGraduationThreshold / setPartnerFeeBps / setHook / setTokenImpl. Vault withdraw. Beacon upgradeTo retargets all curves or fee-shares. BagsV4Hook CREATE2 singleton not upgradeable." }
  - { id: R-4, publisher: Bags, title: "Launch a Token", url: "https://docs.bags.fm/robinhood/launch-token", published_at: null, accessed_at: 2026-09-03T04:18:00Z, kind: docs, authority: primary, authenticity: confirmed, supports: [CLM-1, CLM-8], excerpt: "create sends creationFee; createAndBuy spends surplus above creationFee on atomic buyFor. Claimers bps must sum to 10000. Partner fee is factory.partnerFeeBps snapshotted into the launch from the protocol half." }
  - { id: R-5, publisher: Bags, title: "Bags API Documentation index", url: "https://docs.bags.fm", published_at: null, accessed_at: 2026-09-03T04:16:00Z, kind: docs, authority: primary, authenticity: confirmed, supports: [CLM-17, CLM-29], excerpt: "API key via dev.bags.fm. Solana how-tos for token launch sit beside a Robinhood Chain section (overview, setup, launch, trade, claim, contracts). Changelog points to t.me/bags_dev." }
  - { id: R-6, publisher: Bags, title: "Trade Tokens", url: "https://docs.bags.fm/robinhood/trade-tokens", published_at: null, accessed_at: 2026-09-03T04:18:00Z, kind: docs, authority: primary, authenticity: confirmed, supports: [CLM-20], excerpt: "Before graduation trade BagsBondingCurve with native ETH. After graduation swap token/WETH through the Robinhood-modified UniversalRouter. Stock Uniswap SDK calldata reverts because of extra minHopPriceX36." }
  - { id: R-7, publisher: "@BagsApp", title: "Launch Coins On Robinhood Chain", url: "https://x.com/BagsApp/status/2076420020553576752", published_at: 2026-07-12T21:34:45Z, accessed_at: 2026-09-03T04:25:00Z, kind: social, authority: social, authenticity: unconfirmed, supports: [CLM-24, EVT-2], excerpt: "Thread: Launch Coins On Robinhood Chain Now Live On @BagsApp (2026-07-12T21:33:18Z). Follow-up: Launch on Robinhood Chain here http://bags.fm/launch. Author display name BAGS. Bio: Launch, Trade, Earn, and Discover the Next Big Thing. Website bags.fm/launch." }
  - { id: R-8, publisher: "@BagsApp", title: "Bags Robinhood API Docs are live now", url: "https://x.com/BagsApp/status/2076540933349298686", published_at: 2026-07-13T05:35:13Z, accessed_at: 2026-09-03T04:25:00Z, kind: social, authority: social, authenticity: unconfirmed, supports: [CLM-24, EVT-3], excerpt: "Bags Robinhood API Docs are live now. Launch, Trade, and Earn with the Bags API — launch tokens, trade coins, claim fees, build agents (earn 25% of protocol revenue with a partner key). https://docs.bags.fm/robinhood/overview" }
  - { id: R-9, publisher: "@BagsApp", title: "BAGS profile", url: "https://x.com/BagsApp", published_at: null, accessed_at: 2026-09-03T04:25:00Z, kind: social, authority: social, authenticity: unconfirmed, supports: [CLM-2, CLM-3, CLM-21, CLM-22, CLM-23], excerpt: "Display name BAGS. Handle @BagsApp. Bio: Launch, Trade, Earn, and Discover the Next Big Thing. Latest posts 2026-08-23 through 2026-09-01 are short replies (job's not finished; this is not a phase). Website field bags.fm/launch on the 2026-07-12 author snapshot." }
  - { id: R-10, publisher: "@BagsApp", title: "this is not a phase", url: "https://x.com/BagsApp/status/2094910187366977744", published_at: 2026-09-01T22:08:04Z, accessed_at: 2026-09-03T04:25:00Z, kind: social, authority: social, authenticity: unconfirmed, supports: [CLM-24], excerpt: "Quote of @RobinhoodCrypto this is not a phase. No contract address in the post." }
  - { id: R-11, publisher: GitHub, title: "orgs/bagsfm", url: "https://api.github.com/orgs/bagsfm", published_at: null, accessed_at: 2026-09-03T04:21:00Z, kind: repository, authority: primary, authenticity: confirmed, supports: [CLM-2, CLM-3, CLM-21, CLM-25], excerpt: "login bagsfm. name BAGS. html_url https://github.com/bagsfm. blog bags.fm. twitter_username bagsapp. public_repos 8. type Organization. bagsfm/bags-idl default_branch main." }
  - { id: R-12, publisher: Bags, title: "Changelog", url: "https://docs.bags.fm/changelog/changelog", published_at: null, accessed_at: 2026-09-03T04:22:00Z, kind: docs, authority: primary, authenticity: confirmed, supports: [], excerpt: "For instant change notifications, join t.me/bags_dev. Visible updates this pass are Solana DAMM v2 direct launches and API v1.x; the RH contract address book is on the Robinhood overview/contracts pages, not this changelog list." }
  - { id: R-13, publisher: Robinhood Chain RPC, title: "eth_getCode / owner() BagsFactory 0xe8Cc4431…Cb37", url: "https://rpc.mainnet.chain.robinhood.com", published_at: null, accessed_at: 2026-09-03T04:35:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-5, CLM-7, CLM-9, CLM-10, CLM-11, CLM-12, CLM-19, CLM-28, EVT-1], excerpt: "eth_chainId 0x1237. eth_blockNumber 0x32ab7bf (53131199). Factory code 130 B nonce 11830 bal 0. owner() 0xdef671f11c8a30818eb3d9cc9476eeec805f9058. pendingOwner() 0x0. ERC1967 slot 0x7dfa0131f6c8626f199a2e33e49dfb5660e6ef1c. creationFee() 0. allTokensLength() 3943. graduationThreshold() 5 ETH. partnerFeeBps() 2500. hook() 0x2380abf7…eecc. vault() 0x4861446a…83aa. tokenImpl() 0x74e9a91f…5409. bondingCurveBeacon() 0x8dcecaf5…207e. feeShareBeacon() 0xdff07d39…37e0. Impl code 9904 B." }
  - { id: R-14, publisher: Blockscout, title: "Address 0xe8Cc4431adF8b5A847C113EF0c6af9043219Cb37", url: "https://robinhoodchain.blockscout.com/api/v2/addresses/0xe8Cc4431adF8b5A847C113EF0c6af9043219Cb37", published_at: null, accessed_at: 2026-09-03T04:22:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-5, CLM-7, CLM-10, EVT-1], excerpt: "name ERC1967Proxy is_contract true is_verified true proxy_type eip1967. implementations 0x7dfa0131F6c8626F199A2E33E49DfB5660e6Ef1C name BagsFactory. creator_address_hash 0xDEf671F11C8a30818eb3D9Cc9476EEEc805f9058. creation_transaction_hash 0x224d5dbccbab85a6be5a40ee696272f4db2527f651eb3ee814864254c28c6c9a. Implementation is_verified true." }
  - { id: R-15, publisher: Blockscout, title: "Lens / hook / vault addresses", url: "https://robinhoodchain.blockscout.com/api/v2/addresses/0xC82Db941dAf90B754aecb5F7D14c683dc608d595", published_at: null, accessed_at: 2026-09-03T04:22:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-6, CLM-10, CLM-16], excerpt: "Lens 0xC82Db941…d595 name BagsLens is_verified true creator 0xDEf671…9058. Hook 0x2380aBf7…EEcC name BagsV4Hook is_verified true creator 0x4e59b44847b379578588920cA78FbF26c0B4956C (CREATE2). Vault 0x4861446a…83Aa name ERC1967Proxy is_verified true proxy_type eip1967 implementation 0xeC66D9fc…e688 name BagsVault is_verified true." }
  - { id: R-16, publisher: Blockscout, title: "Address 0xDEf671F11C8a30818eb3D9Cc9476EEEc805f9058", url: "https://robinhoodchain.blockscout.com/api/v2/addresses/0xDEf671F11C8a30818eb3D9Cc9476EEEc805f9058", published_at: null, accessed_at: 2026-09-03T04:35:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-9, CLM-11], excerpt: "hash 0xDEf671F11C8a30818eb3D9Cc9476EEEc805f9058. is_contract false. is_verified false. name null. creation_transaction_hash null. RPC eth_getCode 0x; nonce 110." }
  - { id: R-17, publisher: Robinhood Chain RPC, title: "eth_getCode BagsV4Hook / BagsLens / vault", url: "https://rpc.mainnet.chain.robinhood.com", published_at: null, accessed_at: 2026-09-03T04:35:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-6, CLM-10], excerpt: "Hook 0x2380aBf7…EEcC code 6628 B; factory() 0xe8cc4431…cb37. Lens 0xC82Db941…d595 code 2404 B; FACTORY() 0xe8cc4431…cb37. Vault code 130 B balance 28.348 ETH. Curve beacon implementation() 0x419890a21711c3d3af46b58548376420b9723275. Fee-share beacon implementation() 0xd169ebd0aa9e42f2410f92740d00cd2228d98a1a." }
  - { id: R-18, publisher: Blockscout, title: "Factory impl / beacons / token impl", url: "https://robinhoodchain.blockscout.com/api/v2/addresses/0x7dfa0131F6c8626F199A2E33E49DfB5660e6Ef1C", published_at: null, accessed_at: 2026-09-03T04:35:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-10], excerpt: "0x7dfa0131…Ef1C name BagsFactory is_verified true. Vault impl 0xeC66D9fc…e688 name BagsVault is_verified true. Curve impl 0x419890a2…3275 name BagsBondingCurve is_verified true. Fee-share impl 0xD169EBd0…8a1A name BagsFeeShare is_verified true. Both beacons name BagsBeacon is_verified true. tokenImpl 0x74E9A91f…5409 name BagsToken is_verified true." }
  - { id: R-19, publisher: DefiLlama, title: "summary/fees/bags", url: "https://api.llama.fi/summary/fees/bags", published_at: null, accessed_at: 2026-09-03T04:35:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-13, CLM-17, CLM-29], excerpt: "name Bags. twitter BagsApp. chains [Solana, Robinhood Chain]. total24h 8219 total7d 90940 total30d 1784431 totalAllTime 63952820. chainBreakdown Robinhood Chain total24h 7354 total7d 71083 total30d 210787 totalAllTime 593083. Solana total24h 865 total7d 19857 totalAllTime 63359737. methodology Fees: RH token creation fees plus gross trading fees on bonding-curve and Uniswap v4 hook swaps across V1 and V2 deployments." }
  - { id: R-20, publisher: DefiLlama, title: "summary/fees/bags dailyRevenue", url: "https://api.llama.fi/summary/fees/bags?dataType=dailyRevenue", published_at: null, accessed_at: 2026-09-03T04:35:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [], excerpt: "total24h 4027 total7d 45370 total30d 892045. chainBreakdown Robinhood Chain total24h 3595 total7d 35444 total30d 105224. Solana total24h 432 total7d 9926." }
  - { id: R-21, publisher: DefiLlama, title: "protocol/bags", url: "https://api.llama.fi/protocol/bags", published_at: null, accessed_at: 2026-09-03T04:22:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-3, CLM-4, CLM-25, CLM-26, CLM-29], excerpt: "name Bags. category Launchpad. chains [Solana]. twitter BagsApp. url https://bags.fm/. audits 0. audit_links null. github null. module dummy.js. currentChainTvls {}. description Launch a coin on BagsApp and earn royalties. overview/fees lists chains Solana and Robinhood Chain." }
  - { id: R-22, publisher: Dune 0x_emerson, title: "Robinhood memecoin launchpads 30d", url: "https://dune.com/0x_emerson/robinhood-memecoin-launchpads-comparison-30d", published_at: null, accessed_at: 2026-09-03T04:30:00Z, kind: third-party-data, authority: aggregator, authenticity: unconfirmed, supports: [CLM-12, CLM-14, CLM-18, EVT-4], excerpt: "Platform Summary 30d Bags tokens_launched 1611 factories 1 unique_deployers 274 last_launch 2026-09-03 01:03:35 UTC. DEX Volume by Pad Bags dex_volume_usd 1404212.98 trades 19851 unique_traders 3575. Factory Map 0xe8cc4431adf8b5a847c113ef0c6af9043219cb37 Bags Decoded: bags_robinhood.bagsfactory_evt_tokencreated." }
  - { id: R-23, publisher: Bitquery, title: "Bags.fm API on Robinhood", url: "https://docs.bitquery.io/docs/blockchain/robinhood/bags-fm-api/", published_at: 2026-09-02T00:00:00Z, accessed_at: 2026-09-03T04:20:00Z, kind: third-party-data, authority: aggregator, authenticity: unconfirmed, supports: [], excerpt: "ProtocolFamily Bags, Protocol bags_v2. Bags factory (launch) 0xe8cc4431adf8b5a847c113ef0c6af9043219cb37. Also names Bags AMM / bonding curve 0x0ed8d8116f89def7c904d6b9657657a3ccc7d5b7 and logic 0x419890a21711c3d3af46b58548376420b9723275. The 0x0ed8… address is not in the docs singleton address book this pass." }

gaps:
  - { priority: P0, question: "What is the Robinhood V1 factory or router address Llama mixes into RH fees, and is 0x0ed8d8116f89def7c904d6b9657657a3ccc7d5b7 a live V1 singleton?", checked: "docs address book lists only the V2 UUPS factory 0xe8Cc4431…Cb37; Bitquery names 0x0ed8… as Bags AMM proxy; Llama methodology says V1 and V2 deployments, 2026-09-03", next: "eth_getCode 0x0ed8… on 4663 and read docs changelog or an older address book if V1 is still callable" }
  - { priority: P0, question: "Does owner 0xDEf671…9058 sit behind a Safe, timelock, or other contract on any chain, or is every upgradeable Bags proxy Ownable held by this EOA?", checked: "owner() on factory, vault, and both beacons 0xDEf671…9058; eth_getCode 0x; Blockscout is_contract false; pendingOwner() zero, 2026-09-03", next: "do not treat the EOA as a timelock; record any Safe on another chain if one appears" }
  - { priority: P1, question: "Is there an audit report whose scope matches factory 0xe8Cc4431…Cb37 and hook 0x2380…EEcC?", checked: "docs overview/contracts, site HTML, bagsfm GitHub org, Llama audits 0 and audit_links null, 2026-09-03", next: "record any published report as a claim with the exact scope" }
  - { priority: P1, question: "Does bags.fm HTML or a docs official-links page name @BagsApp, or does the handle stay GitHub/Llama-only?", checked: "bags.fm and /launch have twitter:card but no twitter:site; GitHub org twitter_username bagsapp blog bags.fm; Llama twitter BagsApp, 2026-09-03", next: "keep flag unconfirmed-official until the site names the handle" }
  - { priority: P2, question: "Which of the 3943 factory registry tokens are still on the curve vs migrated, and what share of Emerson 30d volume is post-graduation Uniswap v4?", checked: "allTokensLength 3943; Emerson DEX 30d $1.40M; no migrated-count call this pass", next: "sample BagsLens.getTokenState on the registry tail" }
  - { priority: P2, question: "Are Llama protocol/bags TVL dummy.js empty because RH LP is locked in Uniswap v4 PositionManager rather than a Bags custody vault?", checked: "protocol/bags currentChainTvls {}; vault holds 28.348 ETH native; docs say PositionManager mints locked LP at migration, 2026-09-03", next: "do not treat vault ETH as pad TVL; record a Llama adapter if one lands" }
---

# Bags — research packet

## What it is

Bags is a bonding-curve token launchpad on Robinhood Chain at bags.fm. `BagsFactory.create` (or `createAndBuy`) deploys a fixed-supply ERC-20, a per-token bonding curve, and a fee-share contract in one transaction; 830M of 1B sells vs native ETH, then the raise plus remaining 170M migrate into a Uniswap v4 token/WETH pool with a Bags hook and locked LP. The RH factory is `0xe8Cc4431…Cb37`. Solana is a separate Bags venue. The handle used on GitHub and Llama is @BagsApp; the site is bags.fm.

Themes: launchpad

## Why it matters

The factory is live and taking launches: `allTokensLength()` 3943 this pass, Emerson 30d 1,611 tokens and about $1.40M DEX volume, Llama Robinhood Chain fees 7d 71083 USD. That is smaller than Pons or LONG on the same Emerson board, but it is a documented on-chain pad with verified source, not a census row. Distinct from packed Pons, hood.fun, FoxPad, Clanker, and Coinbarrel. [claim R-2 R-19 R-22]

## What could go wrong

BagsFactory and BagsVault are upgradeable ERC1967 proxies. owner() on both, and on the two beacons that retarget every live curve and fee-share, is one externally owned account with no code and no pending owner. Docs give that owner setCreationFee, setHook, setTokenImpl, vault withdraw, and beacon upgradeTo. Llama RH fees mix V1 and V2 deployments; the docs address book names only this V2 factory. [verified R-13 R-16] [claim R-3 R-19]

## Product and mechanics

A launch has a bonding curve and a graduation. Standard create pays the live creation fee (0 wei this pass) and mints 1e9 tokens onto BagsBondingCurve; createAndBuy spends surplus as an atomic first buy. 830M sell on a virtual x*y=k AMM vs ETH. At thresholdQuote (live global 5 ETH) the next buy migrates remaining 170M plus the raise into a Uniswap v4 pool with BagsV4Hook; the curve emits Migrated and pauses. [claim R-2 R-3 R-4]

A flat 2% fee sits on the ETH/WETH leg in both phases: 1% to BagsFeeShare claimers, 1% protocol (partnerFeeBps default 2500 of that half, remainder BagsVault). Post-migration swaps use a Robinhood-modified UniversalRouter. Index-token and partner flows exist in docs but were not reproduced. [claim R-2 R-6]

## Control and security

owner() on the factory, vault, and both beacons returns 0xDEf671F11C8a30818eb3D9Cc9476EEEc805f9058. That address has no code. The factory implementation slot is 0x7dfa01…Ef1C (9904-byte code, Blockscout name BagsFactory, verified). The vault implementation slot is 0xec66d9…e688, name BagsVault, verified. Hook, lens, beacons, BagsBondingCurve, BagsFeeShare, and BagsToken implementations are source-verified this pass. No timelock address was located. [verified R-13 R-14 R-16 R-18] [claim R-3]

## Team and provenance

GitHub org bagsfm names BAGS, blog bags.fm, twitter_username bagsapp. @BagsApp website field names bags.fm/launch. bags.fm HTML does not name the handle (no twitter:site). Llama twitter is BagsApp. Flag unconfirmed-official. ABIs live at bagsfm/bags-idl. Llama github field is null. Solana remains a separate product surface. [claim R-1 R-9 R-11 R-21]

## Economics and activity

Llama summary/fees Robinhood Chain total24h 7354, total7d 71083, total30d 210787, totalAllTime 593083 USD at 2026-09-03T04:35:00Z (all-chain 8219 / 90940 includes Solana). dailyRevenue Robinhood Chain total24h 3595, total7d 35444. Emerson 30d DEX volume 1404212.98 USD, 1,611 tokens, last launch 2026-09-03 01:03:35 UTC. RPC allTokensLength 3943 is lifetime on this factory. protocol/bags TVL is empty. Vault holds 28.348 ETH native, not pad TVL. [claim R-13 R-19 R-20 R-21 R-22]

## Material risks

- Factory, vault, and both beacons are upgradeable; owner is one EOA with no code. [verified R-13 R-16]
- A beacon upgradeTo retargets every live curve or fee-share at once. [claim R-3]
- Llama RH fees mix V1 and V2; Bitquery names a 0x0ed8… AMM proxy not in the docs address book. [claim R-19 R-23]
- No audit report URL. [unknown]
- bags.fm HTML does not name @BagsApp. [claim R-1 R-9]
- creationFee() is 0 this pass while docs still describe a 0.02 ETH default. [verified R-13] [claim R-2]
- Solana volume and fees dominate Llama all-chain totals; do not use those as a Robinhood Chain slice. [claim R-19 R-21]

## Verification passes

- Receipts: bags.fm, docs overview/contracts/launch/trade/changelog, GitHub org bagsfm, X profile and July 2026 posts, Llama protocol/fees, Emerson Dune, Bitquery docs, Blockscout api/v2, and RPC were opened on 2026-09-03; excerpts copied from those responses. [verified R-1 R-3 R-13 R-19]
- Numbers: RH fees and revenue are the Robinhood Chain slice from api.llama.fi, not all-chains. Bytecode lengths, nonces, owner(), allTokensLength 3943, creationFee 0, and the 5 ETH threshold are chain 4663 RPC. Emerson 1,611 / $1.40M is the 30d dashboard, not lifetime. [verified R-13 R-19 R-22]
- Adversarial: strongest contrary reading is that 0xe8Cc4431…Cb37 is leftover V1 and new launches use a different factory, or that Bags is packed Pons / FoxPad / Clanker / Coinbarrel. Docs and Emerson factory map set BagsFactory to this address; RPC implementation slot matches verified BagsFactory 0x7dfa01…Ef1C; hook() and FACTORY() wiring match the docs address book. The packed pads use other factories. [inference R-2 R-3 R-13 R-22]

## Operations log

- Census.yaml has no bags row; no content/projects/bags.yaml. Discovery inventory names the slug with docs factory 0xe8Cc4431…Cb37 and Emerson 1,554 / $1.38M (that 30d print is now 1,611 / $1.40M).
- bags.fm, bags.fm/launch, docs.bags.fm (overview, contracts, launch-token, trade-tokens, changelog, llms.txt) opened 2026-09-03.
- X: @BagsApp profile, 12 Jul live posts, 13 Jul docs post, 1 Sep quote of @RobinhoodCrypto. No twitter:site on bags.fm.
- GitHub api.github.com/orgs/bagsfm twitter_username bagsapp blog bags.fm; bagsfm/bags-idl present.
- RPC https://rpc.mainnet.chain.robinhood.com with browser User-Agent: eth_chainId, eth_blockNumber, eth_getCode, eth_getTransactionCount, eth_getBalance, owner(), pendingOwner(), creationFee(), allTokensLength(), graduationThreshold(), partnerFeeBps(), hook(), vault(), tokenImpl(), bondingCurveBeacon(), feeShareBeacon(), FACTORY()/factory(), implementation(), ERC1967 slot on 0xe8Cc4431…Cb37, 0x4861446a…83Aa, 0xC82Db941…d595, 0x2380aBf7…EEcC, 0x7dfa0131…Ef1C, 0x8DCEcaf5…207E, 0xdFf07d39…37e0, 0xDEf671F1…9058, 0x74E9A91f…5409.
- Blockscout api/v2 for factory, impl, lens, hook, vault, vault impl, both beacons, curve impl, fee-share impl, token impl, owner.
- api.llama.fi/protocol/bags, summary/fees/bags, summary/fees dailyRevenue, overview/fees.
- Dune 0x_emerson Robinhood memecoin launchpads 30d (platform summary, DEX volume, factory map).
- Bitquery Bags.fm API on Robinhood page (third-party; 0x0ed8… not filed as a Bags singleton).
