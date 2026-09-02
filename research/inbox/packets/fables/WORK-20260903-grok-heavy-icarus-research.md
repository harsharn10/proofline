---
contract_version: proofline-research-v2
work_id: WORK-20260903-grok-heavy-icarus-research
producer: grok-heavy
role: collector
base_sha: 334ca0619aa62e922da83f46de021f06d12348cf
slug: fables
name: Fables
packet_tier: full
as_of: 2026-09-02T23:20:00Z
prior_packet: null
supersedes: null
owned_slugs: [fables]
allowed_paths:
  - research/inbox/packets/fables/WORK-20260903-grok-heavy-icarus-research.md

identity:
  canonical_name: Fables
  aliases: [Prologue, "$PROLOGUE"]
  symbols: [PROLOGUE]
  entity_kind: protocol
  chain_scope: robinhood-native
  official_domain: https://www.fables.fi
  official_handle: "@fablesfi"
  repository: "NULL — site, docs, X bio and DexScreener token info do not name a public repository; GitHub search for FablesPoolRegistry returned only DefiLlama adapters"
  possible_matches:
    - slug: up
      signals: [other]
      contrary_signals:
        - "Census up is a native (3,3) AMM at up33.xyz / @uponrh"
        - "Fables is a Uniswap v4 hooked DEX at fables.fi / @fablesfi with token 0xb9972CA7188e511174947E3936a5315ac7073277"
        - "No shared domain, handle, or reproduced address"
    - slug: swaphood
      signals: [other]
      contrary_signals:
        - "Census SwapHood is a Pancake V3-fork AMM at @SwapHoodFi with token HOOD"
        - "Fables pools sit on the canonical Uniswap v4 PoolManager 0x8366a39CC670B4001A1121B8F6A443A643e40951"
        - "No shared domain, handle, or reproduced address"
    - slug: hookr
      signals: [other]
      contrary_signals:
        - "PROLOGUE was created through LiquidityLauncher v3.2.0 / UERC20Factory, the same launch path as HOOKR; that factory is not a Fables contract"
        - "Census Hookr is a v4 hook marketplace at hookr.fun / @Hookrfun; Fables is a listed-market DEX at fables.fi / @fablesfi"
        - "Fables protocol contracts were created by 0x359856655934338d798F9ccE1f181486301D36a5 (layan.eth), not nodar.eth"
    - slug: pools-trade
      signals: [other]
      contrary_signals:
        - "@fablesfi posted that PROLOGUE launched through pools.trade so FABLES could stay unlaunched until voting and emissions exist"
        - "Census pools.trade is a Uniswap-pool launchpad at @pools_dot_fun; Fables is the DEX that lists hooked markets"
        - "No shared domain, handle, or Fables protocol address"
    - slug: what-the-hook
      signals: [other]
      contrary_signals:
        - "Census What The Hook is an MEV-redistribution hook at @whatthehookv4"
        - "Fables hooks are FablesRWA / FablesRampETH fee-and-ledger contracts, not an MEV rebate product"
        - "No shared domain, handle, or reproduced address"

classification:
  primary_leaf: trading/amm-native
  secondary_leaves: []
  mechanism_tags: [amm, rwa, stock-paired, fee-routing]
  ecosystem_role: subject
  lifecycle: mainnet
  coverage_recommendation: full
  evidence_state: partly-verified
  rationale: "Listed Fables markets are Uniswap v4 pools whose FablesRWA or FablesRampETH hook sets a market-specific fee and records LP shares. Token 0xb997…3277, FablesPoolRegistry, the NVDA/USDG hook and the AccessManager all exist on chain 4663 this pass. Docs state FABLES staking, voting and emissions are planned, not live. Llama TVL is the Robinhood Chain slice (the only listed chain). AccessManager source is unverified. [R-2] [R-3] [R-8] [R-9] [R-11] [R-16]"

qualifying:
  deployed_on_chain: { status: pass, claim_ids: [CLM-4, CLM-5, CLM-21, CLM-22], note: "" }
  native_play:       { status: pass, claim_ids: [CLM-1, CLM-23], note: "" }
  citable:           { status: pass, claim_ids: [CLM-2, CLM-3], note: "" }
  research_story:    { status: pass, claim_ids: [CLM-1, CLM-7, CLM-10, CLM-18, CLM-25], note: "" }

links:
  - { kind: site, url: "https://www.fables.fi", authenticity: confirmed }
  - { kind: docs, url: "https://www.fables.fi/docs", authenticity: confirmed }
  - { kind: app, url: "https://www.fables.fi/markets", authenticity: confirmed }
  - { kind: x, url: "https://x.com/fablesfi", authenticity: confirmed }
  - { kind: telegram, url: "https://t.me/fablesfi", authenticity: confirmed }
  - { kind: discord, url: "https://discord.gg/QgeEq2rSv7", authenticity: confirmed }

deployments:
  - label: PROLOGUE token (UERC20; The Prologue)
    role: token
    address:
      value: "0xb9972CA7188e511174947E3936a5315ac7073277"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-02
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-5, R-8, R-9, R-15]
  - label: FablesPoolRegistry (AccessManaged public pool index)
    role: other
    address:
      value: "0x159A113E012593D9B3cC63ad45E30F0467e13Ef3"
      chain: robinhood-chain
      source: docs
      seen: 2026-09-02
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-3, R-10, R-16]
  - label: AccessManager (authority every hook asks)
    role: admin
    address:
      value: "0xA362D98B33A7bb5B5E2180a05f995A70FB404f30"
      chain: robinhood-chain
      source: docs
      seen: 2026-09-02
      exists_on_4663: true
      explorer_source_verified: false
    receipt_ids: [R-3, R-11]
  - label: NVDA/USDG hook (FablesRWA fee schedule and ledger)
    role: other
    address:
      value: "0x66622f77B797D506e5376F7798b67ab288966080"
      chain: robinhood-chain
      source: docs
      seen: 2026-09-02
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-3, R-12]
  - label: SPY/USDG hook (FablesRWA fee schedule and ledger)
    role: other
    address:
      value: "0xA0E8fBFf13E24Af2b5e61A72800E08a161bDe080"
      chain: robinhood-chain
      source: docs
      seen: 2026-09-02
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-3, R-13]
  - label: ETH/USDG hook (FablesRampETH fee schedule and ledger)
    role: other
    address:
      value: "0x06a889870C8f83640D6816319f72e2aA579b6080"
      chain: robinhood-chain
      source: docs
      seen: 2026-09-02
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-3, R-14]
  - label: Creator fee distributor (weekly USDG)
    role: other
    address:
      value: "0xC9EcC11728a4955B31f77c077B97FEC521D78760"
      chain: robinhood-chain
      source: docs
      seen: 2026-09-02
      exists_on_4663: true
      explorer_source_verified: false
    receipt_ids: [R-3, R-22]
  - label: LiquidityLauncher v3.2.0 (created PROLOGUE; not a Fables contract)
    role: factory
    address:
      value: "0x0000FffFBE8efE702c8703aE3477FF5dE3d319C0"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-02
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-15]

metrics:
  - { kind: tvl, value: 6532113.77218, currency: USD, as_of: 2026-09-02T22:24:23Z, window: point, method: "api.llama.fi/protocol/fables currentChainTvls['Robinhood Chain']; chains is only Robinhood Chain so the chain slice equals the protocol total", class: claim, receipt_ids: [R-16] }
  - { kind: volume_24h, value: 18380793, currency: USD, as_of: 2026-09-02T23:13:00Z, window: 24h, method: "api.llama.fi/summary/dexs/fables?dataType=dailyVolume total24h; chains [Robinhood Chain]", class: claim, receipt_ids: [R-17] }
  - { kind: fees_24h, value: 19302, currency: USD, as_of: 2026-09-02T23:13:00Z, window: 24h, method: "api.llama.fi/summary/fees/fables?dataType=dailyFees total24h; chains [Robinhood Chain]", class: claim, receipt_ids: [R-18] }
  - { kind: revenue_24h, value: 0, currency: USD, as_of: 2026-09-02T23:13:00Z, window: 24h, method: "api.llama.fi/summary/fees/fables?dataType=dailyRevenue total24h; methodology Revenue: No protocol fee is enabled yet", class: claim, receipt_ids: [R-18] }
  - { kind: holders, value: 7688, currency: null, as_of: 2026-09-02T23:13:12Z, window: point, method: "robinhoodchain.blockscout.com/api/v2/tokens/0xb9972CA7188e511174947E3936a5315ac7073277 holders_count", class: claim, receipt_ids: [R-9] }
  - { kind: market_cap, value: 6497256.797285876, currency: USD, as_of: 2026-09-02T23:13:12Z, window: point, method: "robinhoodchain.blockscout.com/api/v2/tokens/0xb9972CA7188e511174947E3936a5315ac7073277 circulating_market_cap", class: claim, receipt_ids: [R-9] }

reproductions:
  - { id: REP-1, method: explorer-rpc, chain_id: 4663, checked_at: 2026-09-02T23:13:12Z, receipt_ids: [R-8, R-9, R-15], result: "api/v2/addresses/0xb9972CA7188e511174947E3936a5315ac7073277 is_contract true, is_verified true, name UERC20, creator_address_hash 0x000000e200088D55C39a11F609E5F667729ad49b (UERC20Factory), creation_transaction_hash 0x421c9f5b02412645661089c4857003a6e7a6a0c55a390a447079494096077bed; token name Prologue symbol PROLOGUE holders_count 7688 circulating_market_cap 6497256.797 total_supply 1e27; eth_getCode non-empty (14310 hex chars); eth_call name() Prologue symbol() PROLOGUE creator() 0x0000FffFBE8efE702c8703aE3477FF5dE3d319C0" }
  - { id: REP-2, method: explorer-rpc, chain_id: 4663, checked_at: 2026-09-02T23:14:24Z, receipt_ids: [R-10, R-11, R-12], result: "Registry 0x159A113E012593D9B3cC63ad45E30F0467e13Ef3 is_contract true is_verified true name FablesPoolRegistry partially verified src/FablesPoolRegistry.sol; eth_getCode non-empty (7454 hex chars); eth_call authority() 0xa362d98b33a7bb5b5e2180a05f995a70fb404f30. AccessManager 0xA362D98B33A7bb5B5E2180a05f995A70FB404f30 is_contract true is_verified false, created 2026-08-15T16:16:22Z by 0x359856655934338d798F9ccE1f181486301D36a5 (layan.eth); eth_getCode non-empty (20918 hex chars). NVDA hook 0x66622f77…6080 is_contract true is_verified true name FablesRWA; eth_call authority() same AccessManager; eth_getCode non-empty (66142 hex chars)" }
  - { id: REP-3, method: api, chain_id: 4663, checked_at: 2026-09-02T23:13:00Z, receipt_ids: [R-16, R-17, R-18], result: "api.llama.fi/protocol/fables name Fables category Dexs chains [Robinhood Chain] url https://www.fables.fi/ twitter fablesfi currentChainTvls['Robinhood Chain'] 6532113.77218 tvl last date 1788387863 (2026-09-02T22:24:23Z); dexs total24h 18380793 totalAllTime 71665480; fees total24h 19302; revenue total24h 0. Adapter enumerates FablesPoolRegistry 0x159a113e…13ef3" }
  - { id: REP-4, method: official-crosslink, checked_at: 2026-09-02T23:16:00Z, receipt_ids: [R-1, R-5, R-19], result: "www.fables.fi title Fables - hook-native ve(3,3) exchange on Uniswap v4; footer href https://x.com/fablesfi, https://t.me/fablesfi, https://discord.gg/QgeEq2rSv7; @fablesfi bio CA 0xb9972CA7188e511174947E3936a5315ac7073277 and website https://www.fables.fi/; DexScreener PROLOGUE info websites fables.fi and fables.fi/docs, socials x.com/fablesfi t.me/fablesfi discord.gg/QgeEq2rSv7" }
  - { id: REP-5, method: document-scope, checked_at: 2026-09-02T23:18:00Z, receipt_ids: [R-2, R-3, R-4], result: "Docs What is live now: concentrated liquidity on Uniswap v4 with a Fables hook; FABLES staking/voting/emissions Planned; PROLOGUE redemption Planned. Addresses table lists NVDA/USDG hook 0x66622f77…6080, registry 0x159A113E…3Ef3, AccessManager 0xA362D98B…4f30, distributor 0xc9ecc117…8760, PROLOGUE 0xb9972CA7…3277. Security: No Fables-specific audit report with auditor, commit hash, scope and findings is currently linked here." }
  - { id: REP-6, method: explorer-ui, chain_id: 4663, checked_at: 2026-09-02T23:14:24Z, receipt_ids: [R-15], result: "Creation tx 0x421c9f5b… timestamp 2026-08-17T16:52:13Z from 0x240B7e8FcfdB38C94c0b8733A4A50F28A4C99fa8 to LiquidityLauncher 0x0000FffFBE8efE702c8703aE3477FF5dE3d319C0 (OLI tag LiquidityLauncher v3.2.0) method multicall; decoded name Prologue / PROLOGUE and description Fables is a dynamic-fee ve(3,3) DEX built on Uniswap v4 and live on Robinhood Chain. At TGE, $PROLOGUE will redeem for the governance token at a fixed ratio." }

claims:
  - { id: CLM-1, field: product.mechanism, value: "Each listed Fables market is a Uniswap v4 concentrated-liquidity pool whose Fables hook sets a market-specific swap fee (session calendar for tokenised equities; autonomous/volatility path for ETH/USDG) and records LP shares in a pooled ledger. Users deposit a range, collect fees and withdraw through fables.fi. FABLES staking, voting and emissions are documented as planned, not live.", class: claim, observed_at: 2026-09-02T23:18:00Z, receipt_ids: [R-2, R-3, R-12], reproduction_ids: [REP-5], supersedes: null }
  - { id: CLM-2, field: identity.domain, value: "https://www.fables.fi", class: verified, observed_at: 2026-09-02T23:16:00Z, receipt_ids: [R-1, R-5], reproduction_ids: [REP-4], supersedes: null }
  - { id: CLM-3, field: identity.handle, value: "@fablesfi", class: verified, observed_at: 2026-09-02T23:16:00Z, receipt_ids: [R-1, R-5], reproduction_ids: [REP-4], supersedes: null }
  - { id: CLM-4, field: deployment.address, value: "0xb9972CA7188e511174947E3936a5315ac7073277", class: verified, observed_at: 2026-09-02T23:13:12Z, receipt_ids: [R-5, R-8, R-9], reproduction_ids: [REP-1], supersedes: null }
  - { id: CLM-5, field: lifecycle, value: mainnet, class: verified, observed_at: 2026-09-02T23:13:12Z, receipt_ids: [R-2, R-8, R-12], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-6, field: identity.symbol, value: "PROLOGUE", class: verified, observed_at: 2026-09-02T23:13:12Z, receipt_ids: [R-8, R-9], reproduction_ids: [REP-1], supersedes: null }
  - { id: CLM-7, field: control.owner, value: "0xA362D98B33A7bb5B5E2180a05f995A70FB404f30", class: verified, observed_at: 2026-09-02T23:19:27Z, receipt_ids: [R-3, R-10, R-11, R-12], reproduction_ids: [REP-2], supersedes: null }
  - { id: CLM-8, field: control.privileged-role, value: "0x359856655934338d798F9ccE1f181486301D36a5 (layan.eth) created the AccessManager, FablesPoolRegistry and creator-fee distributor", class: verified, observed_at: 2026-09-02T23:19:27Z, receipt_ids: [R-10, R-11, R-22], reproduction_ids: [REP-2], supersedes: null }
  - { id: CLM-9, field: control.timelock, value: "Docs: admin-grade AccessManager calls sit behind a non-zero configurable delay; example deployment configuration uses 86400 seconds; deployed AccessManager state is authoritative and was not eth_called this pass", class: claim, observed_at: 2026-09-02T23:18:00Z, receipt_ids: [R-4], reproduction_ids: [], supersedes: null }
  - { id: CLM-10, field: security.audit, value: "Docs Security page: no Fables-specific audit report with auditor, commit hash, scope and findings is currently linked; development used unit/fuzz/invariant tests plus Olympix, Sherlock AI tooling and the open-source pashov workflow", class: claim, observed_at: 2026-09-02T23:18:00Z, receipt_ids: [R-4], reproduction_ids: [REP-5], supersedes: null }
  - { id: CLM-11, field: economics.metric, value: 6532113.77218, class: verified, observed_at: 2026-09-02T23:13:00Z, receipt_ids: [R-16], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-12, field: economics.metric, value: 18380793, class: verified, observed_at: 2026-09-02T23:13:00Z, receipt_ids: [R-17], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-13, field: economics.metric, value: 19302, class: verified, observed_at: 2026-09-02T23:13:00Z, receipt_ids: [R-18], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-14, field: economics.metric, value: 7688, class: verified, observed_at: 2026-09-02T23:13:12Z, receipt_ids: [R-9], reproduction_ids: [REP-1], supersedes: null }
  - { id: CLM-15, field: relationship, value: "PROLOGUE was created 2026-08-17 via LiquidityLauncher v3.2.0 0x0000FffF…19C0 / UERC20Factory 0x000000e200…d49b; @fablesfi posted that the launch used pools.trade so FABLES could remain unlaunched until voting and emissions exist", class: verified, observed_at: 2026-09-02T23:14:24Z, receipt_ids: [R-6, R-15], reproduction_ids: [REP-1, REP-6], supersedes: null }
  - { id: CLM-16, field: identity.alias, value: "Prologue", class: verified, observed_at: 2026-09-02T23:13:12Z, receipt_ids: [R-8, R-9], reproduction_ids: [REP-1], supersedes: null }
  - { id: CLM-17, field: team.identity, value: "Site legal page: www.fables.fi is operated by Alphix Association, a Swiss association with its seat in the Canton of Zug. @0xcs361 bio: Slaying dragons and riding unicorns @fablesfi.", class: claim, observed_at: 2026-09-02T23:18:00Z, receipt_ids: [R-20, R-21], reproduction_ids: [], supersedes: null }
  - { id: CLM-18, field: other, value: "Docs: The ve(3,3) system is a roadmap, not a live product. FABLES token, staking, voting and emissions are Planned.", class: claim, observed_at: 2026-09-02T23:18:00Z, receipt_ids: [R-2], reproduction_ids: [REP-5], supersedes: null }
  - { id: CLM-19, field: communications.status, value: "No TGE date has been announced. All details will be published through Fables official channels. No redemption contract is deployed today. (@fablesfi 2026-08-19)", class: claim, observed_at: 2026-09-02T23:16:00Z, receipt_ids: [R-6], reproduction_ids: [], supersedes: null }
  - { id: CLM-20, field: communications.status, value: "Third-party @defidami 2026-08-23 posted TGE on 5 October; 1B PROLOGUE converts into a 25M FABLES reserve at 40:1. Not an official Fables channel.", class: claim, observed_at: 2026-09-02T23:16:00Z, receipt_ids: [R-23], reproduction_ids: [], supersedes: null }
  - { id: CLM-21, field: deployment.address, value: "0x159A113E012593D9B3cC63ad45E30F0467e13Ef3", class: verified, observed_at: 2026-09-02T23:14:24Z, receipt_ids: [R-3, R-10], reproduction_ids: [REP-2], supersedes: null }
  - { id: CLM-22, field: deployment.address, value: "0x66622f77B797D506e5376F7798b67ab288966080", class: verified, observed_at: 2026-09-02T23:19:27Z, receipt_ids: [R-3, R-12], reproduction_ids: [REP-2], supersedes: null }
  - { id: CLM-23, field: taxonomy.chain-scope, value: robinhood-native, class: verified, observed_at: 2026-09-02T23:13:00Z, receipt_ids: [R-16], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-24, field: "account.@fablesfi_sup.flag", value: "handle-collision", class: claim, observed_at: 2026-09-02T23:12:00Z, receipt_ids: [R-24], reproduction_ids: [], supersedes: null }
  - { id: CLM-25, field: other, value: "PROLOGUE-pool creator fees fund discretionary weekly USDG rewards via a Merkle distributor; the provider pot is an announced amount, not an automatic transfer of every creator-fee unit. Week 1 600 USDG 31 Aug 2026; Week 2 3000 USDG 7 Sept 2026.", class: claim, observed_at: 2026-09-02T23:18:00Z, receipt_ids: [R-2, R-7], reproduction_ids: [REP-5], supersedes: null }
  - { id: CLM-26, field: control.proxy, value: "AccessManager 0xA362D98B…4f30 has no verified source on the explorer this pass; it is not a proxy (proxy_type null)", class: verified, observed_at: 2026-09-02T23:19:27Z, receipt_ids: [R-11], reproduction_ids: [REP-2], supersedes: null }
  - { id: CLM-27, field: economics.metric, value: 6497256.797285876, class: verified, observed_at: 2026-09-02T23:13:12Z, receipt_ids: [R-9], reproduction_ids: [REP-1], supersedes: null }
  - { id: CLM-28, field: identity.repository, value: "NULL — no public Fables contracts repository linked from the site, docs or X bio this pass", class: unknown, observed_at: 2026-09-02T23:18:00Z, receipt_ids: [], reproduction_ids: [], supersedes: null }
  - { id: CLM-29, field: other, value: "Docs: PROLOGUE/ETH is a static 2500-tier Uniswap v4 pool with no Fables hook; hooked Fables markets use the dynamic-fee marker. DexScreener primary PROLOGUE/ETH pair 0x8651e656…bb7eb labels v4.", class: claim, observed_at: 2026-09-02T23:16:00Z, receipt_ids: [R-3, R-19], reproduction_ids: [REP-5], supersedes: null }
  - { id: CLM-30, field: deployment.address, value: "0xA362D98B33A7bb5B5E2180a05f995A70FB404f30", class: verified, observed_at: 2026-09-02T23:19:27Z, receipt_ids: [R-3, R-11], reproduction_ids: [REP-2], supersedes: null }
  - { id: CLM-31, field: taxonomy.primary-leaf, value: trading/amm-native, class: claim, observed_at: 2026-09-02T23:18:00Z, receipt_ids: [R-2, R-16], reproduction_ids: [REP-3, REP-5], supersedes: null }
  - { id: CLM-32, field: other, value: "Docs Addresses also list TSLA/USDG hook 0x67D86050…e080, AAPL/USDG 0x70a9A884…2080, NVDA/SPY 0x79576FBA…2080, GLD/USDG 0xB608a787…a080, META/USDG 0x8AF95932…2080, SPY/GLD 0xA4570C37…2080; Blockscout names each FablesRWA with verified source this pass except as noted in deployments", class: claim, observed_at: 2026-09-02T23:18:00Z, receipt_ids: [R-3], reproduction_ids: [REP-5], supersedes: null }
  - { id: CLM-33, field: economics.metric, value: "Official account posted Fables crossed $5,000,000 in deposits (2026-09-02)", class: claim, observed_at: 2026-09-02T23:12:00Z, receipt_ids: [R-25], reproduction_ids: [], supersedes: null }

conflicts:
  - id: CON-1
    field: communications.status
    claim_ids: [CLM-19, CLM-20]
    material_effect: "Official channel says no TGE date is announced and no redemption contract is deployed; a third-party post names 5 October 2026. A compiled profile must not treat 5 October as an official date."
    status: open
    resolution: null

events:
  - id: EVT-1
    type: company
    title: "Official account quotes MCG interview with 0xcs361"
    summary: "@fablesfi posted thanks to @MCGlive, quoting an MCG interview on the ve(3,3) DEX and live fee demo."
    occurred_at: 2026-09-02T21:06:14Z
    observed_at: 2026-09-02T23:12:00Z
    affected_fields: [communications.status, team.identity]
    evidence_state: claim
    impact: routine
    site_recommendation: feed
    channel_recommendation: none
    receipt_ids: [R-26]
  - id: EVT-2
    type: company
    title: "Official account posts Fables crossed $5,000,000 in deposits"
    summary: "@fablesfi posted Fables crossed $5,000,000 in deposits on 2026-09-02."
    occurred_at: 2026-09-02T12:48:40Z
    observed_at: 2026-09-02T23:12:00Z
    affected_fields: [economics.metric]
    evidence_state: claim
    impact: material
    site_recommendation: both
    channel_recommendation: none
    receipt_ids: [R-25]
  - id: EVT-3
    type: onchain
    title: "DefiLlama Robinhood Chain TVL slice $6.53M"
    summary: "api.llama.fi/protocol/fables currentChainTvls Robinhood Chain 6532113; only listed chain is Robinhood Chain."
    occurred_at: 2026-09-02T22:24:23Z
    observed_at: 2026-09-02T23:13:00Z
    affected_fields: [economics.metric, lifecycle]
    evidence_state: verified
    impact: material
    site_recommendation: both
    channel_recommendation: none
    receipt_ids: [R-16]
  - id: EVT-4
    type: company
    title: "Week 2 creator fee rewards set at 3,000 USDG"
    summary: "@fablesfi posted 3,000 USDG will be distributed to Fables LPs this week; Week 1 rewards claimable."
    occurred_at: 2026-08-31T15:21:17Z
    observed_at: 2026-09-02T23:12:00Z
    affected_fields: [product.mechanism, economics.metric]
    evidence_state: claim
    impact: material
    site_recommendation: both
    channel_recommendation: none
    receipt_ids: [R-7]
  - id: EVT-5
    type: company
    title: "Week 1: $29.7M traded, $28.3k paid to 342 LPs"
    summary: "@fablesfi posted Week 1 of The Prologue: $29.7M traded, $28.3k paid straight to 342 LPs."
    occurred_at: 2026-08-31T03:25:50Z
    observed_at: 2026-09-02T23:12:00Z
    affected_fields: [economics.metric]
    evidence_state: claim
    impact: material
    site_recommendation: feed
    channel_recommendation: none
    receipt_ids: [R-27]
  - id: EVT-6
    type: company
    title: "Official post: no FABLES TGE date announced"
    summary: "@fablesfi posted no TGE date; PROLOGUE redeems for FABLES at >40:1; no redemption contract deployed."
    occurred_at: 2026-08-19T20:38:14Z
    observed_at: 2026-09-02T23:16:00Z
    affected_fields: [communications.status, product.mechanism]
    evidence_state: claim
    impact: material
    site_recommendation: profile
    channel_recommendation: none
    receipt_ids: [R-6]
  - id: EVT-7
    type: onchain
    title: "PROLOGUE minted through LiquidityLauncher v3.2.0"
    summary: "Creation tx 0x421c9f5b… on 2026-08-17 to LiquidityLauncher; token UERC20 Prologue/PROLOGUE."
    occurred_at: 2026-08-17T16:52:13Z
    observed_at: 2026-09-02T23:14:24Z
    affected_fields: [deployment.address, identity.symbol, relationship]
    evidence_state: verified
    impact: material
    site_recommendation: profile
    channel_recommendation: none
    receipt_ids: [R-15]

receipts:
  - { id: R-1, publisher: Fables, title: "fables.fi homepage", url: "https://www.fables.fi/", published_at: null, accessed_at: 2026-09-02T23:15:00Z, kind: official-site, authority: primary, authenticity: confirmed, supports: [CLM-2, CLM-3], excerpt: "Title: Fables - hook-native ve(3,3) exchange on Uniswap v4. Meta description: Hook-native ve(3,3) exchange on Uniswap v4, building pair-specific markets with dynamic fees. Live on Robinhood Chain. Canonical https://www.fables.fi/. Footer: Telegram https://t.me/fablesfi, Discord https://discord.gg/QgeEq2rSv7, Twitter / X https://x.com/fablesfi." }
  - { id: R-2, publisher: Fables, title: "Docs — What is live now / live and planned features", url: "https://www.fables.fi/docs", published_at: null, accessed_at: 2026-09-02T23:18:00Z, kind: docs, authority: primary, authenticity: confirmed, supports: [CLM-1, CLM-5, CLM-18, CLM-25, CLM-31], excerpt: "Fables lets you provide concentrated liquidity to markets on Robinhood Chain. Each market uses a Uniswap v4 pool and a Fables hook. The hook sets the swap fee and records each provider's share of a pooled price range. Live: Liquidity positions and swap fees; Points and referrals; Weekly creator rewards. Planned: FABLES token, staking, voting and emissions; PROLOGUE redemption into FABLES. The ve(3,3) system is a roadmap, not a live product." }
  - { id: R-3, publisher: Fables, title: "Docs — Addresses", url: "https://www.fables.fi/docs/addresses", published_at: null, accessed_at: 2026-09-02T23:18:00Z, kind: docs, authority: primary, authenticity: confirmed, supports: [CLM-7, CLM-21, CLM-22, CLM-29, CLM-30, CLM-32], excerpt: "Contracts, tokens, and pool identifiers on Robinhood Chain 4663. NVDA/USDG hook 0x66622f77B797D506e5376F7798b67ab288966080; ETH/USDG 0x06a889870C8f83640D6816319f72e2aA579b6080; Creator fee distributor 0xc9ecc11728a4955b31f77c077b97fec521d78760; Access manager 0xA362D98B33A7bb5B5E2180a05f995A70FB404f30; Pool registry 0x159A113E012593D9B3cC63ad45E30F0467e13Ef3; PROLOGUE 0xb9972CA7188e511174947E3936a5315ac7073277. PROLOGUE/ETH carries neither dynamic-fee marker nor a hook." }
  - { id: R-4, publisher: Fables, title: "Docs — Security and Permissions", url: "https://www.fables.fi/docs/security", published_at: null, accessed_at: 2026-09-02T23:18:00Z, kind: docs, authority: primary, authenticity: confirmed, supports: [CLM-9, CLM-10], excerpt: "Review evidence: unit, fuzz and invariant tests plus Olympix, Sherlock AI review tooling and the open-source pashov security workflow. This page does not claim that those tools are an independent audit of every deployed Fables contract. No Fables-specific audit report with auditor, commit hash, scope and findings is currently linked here. Delayed administration: example deployment configuration uses 86,400 seconds; the deployed AccessManager state, not an example file, is authoritative." }
  - { id: R-5, publisher: Fables, title: "@fablesfi profile", url: "https://x.com/fablesfi", published_at: null, accessed_at: 2026-09-02T23:12:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [CLM-2, CLM-3, CLM-4], excerpt: "Fables @fablesfi. Bio: Once upon a time, markets were dumb. But that’s just the $PROLOGUE. CA: 0xb9972CA7188e511174947E3936a5315ac7073277. Website https://www.fables.fi/. Location: Switzerland. Joined 2026-08-03. Followers 4901 this pass." }
  - { id: R-6, publisher: "@fablesfi", title: "What is $PROLOGUE / no TGE date", url: "https://x.com/fablesfi/status/2090176536913813680", published_at: 2026-08-19T20:38:14Z, accessed_at: 2026-09-02T23:16:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [CLM-15, CLM-19, EVT-6], excerpt: "TLDR: FABLES has a fixed supply of 1 billion, with up to 115 million liquid at TGE. At Fables TGE, PROLOGUE redeems for FABLES at a rate of > 40:1. No TGE date has been announced. That is why we chose pools.trade. We have not announced a TGE date. We are also not announcing the final redemption process yet, and no redemption contract is deployed today." }
  - { id: R-7, publisher: "@fablesfi", title: "Creator Fee Rewards - Week 2", url: "https://x.com/fablesfi/status/2094445425755378023", published_at: 2026-08-31T15:21:17Z, accessed_at: 2026-09-02T23:12:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [CLM-25, EVT-4], excerpt: "Creator Fee Rewards - Week 2. 3,000 USDG will be distributed to Fables LPs this week! Thread: Week 1 rewards are now claimable on the Fables app. And Week 2 is live: 3,000 USDG are up for grabs. Provide liquidity and earn more Points through referrals https://www.fables.fi/" }
  - { id: R-8, publisher: Blockscout, title: "PROLOGUE token address 0xb997…3277", url: "https://robinhoodchain.blockscout.com/api/v2/addresses/0xb9972CA7188e511174947E3936a5315ac7073277", published_at: null, accessed_at: 2026-09-02T23:13:12Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-4, CLM-5, CLM-6, CLM-16], excerpt: "is_contract true, is_verified true, name UERC20, creator_address_hash 0x000000e200088D55C39a11F609E5F667729ad49b, creation_transaction_hash 0x421c9f5b02412645661089c4857003a6e7a6a0c55a390a447079494096077bed, proxy_type null. Nested token: name Prologue symbol PROLOGUE holders_count 7688 circulating_market_cap 6497256.797285876 total_supply 1000000000000000000000000000." }
  - { id: R-9, publisher: Blockscout, title: "PROLOGUE token object", url: "https://robinhoodchain.blockscout.com/api/v2/tokens/0xb9972CA7188e511174947E3936a5315ac7073277", published_at: null, accessed_at: 2026-09-02T23:13:12Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-6, CLM-14, CLM-16, CLM-27], excerpt: "address_hash 0xb9972CA7188e511174947E3936a5315ac7073277 name Prologue symbol PROLOGUE decimals 18 holders_count 7688 circulating_market_cap 6497256.797285876 exchange_rate 0.00649668 total_supply 1000000000000000000000000000 type ERC-20 volume_24h 3686384.7174880877." }
  - { id: R-10, publisher: Blockscout, title: "FablesPoolRegistry 0x159A…3Ef3", url: "https://robinhoodchain.blockscout.com/api/v2/addresses/0x159A113E012593D9B3cC63ad45E30F0467e13Ef3", published_at: null, accessed_at: 2026-09-02T23:13:12Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-7, CLM-8, CLM-21], excerpt: "is_contract true, is_verified true, name FablesPoolRegistry, creator_address_hash 0x359856655934338d798F9ccE1f181486301D36a5, creation_transaction_hash 0x9495c4dc4b46fad246696b9695c846e78b602c78601bb662d06037eb40661e89, proxy_type null. Verified source: AccessManaged; writes restricted; holds no funds." }
  - { id: R-11, publisher: Blockscout, title: "AccessManager 0xA362…4f30", url: "https://robinhoodchain.blockscout.com/api/v2/addresses/0xA362D98B33A7bb5B5E2180a05f995A70FB404f30", published_at: null, accessed_at: 2026-09-02T23:19:27Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-7, CLM-8, CLM-26, CLM-30], excerpt: "is_contract true, is_verified false, name null, creator_address_hash 0x359856655934338d798F9ccE1f181486301D36a5, creation_transaction_hash 0x2012fd417d23727f9a2c16000e931ea0978dcac03a92d0b688c8e3f91aece7ab timestamp 2026-08-15T16:16:22Z, proxy_type null. eth_getCode non-empty (20918 hex chars)." }
  - { id: R-12, publisher: Blockscout, title: "NVDA/USDG FablesRWA hook 0x6662…6080", url: "https://robinhoodchain.blockscout.com/api/v2/addresses/0x66622f77B797D506e5376F7798b67ab288966080", published_at: null, accessed_at: 2026-09-02T23:19:27Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-7, CLM-22], excerpt: "is_contract true, is_verified true, name FablesRWA, creator_address_hash 0x4e59b44847b379578588920cA78FbF26c0B4956C, creation_transaction_hash 0x81c2e89901d6daeb60fa1f864d370a92729e47ffff654631f97503505fb33e8b timestamp 2026-08-15T16:22:02Z. Verified source: session-aware dynamic-fee hook for tokenized equity pairs. eth_call authority() 0xa362d98b33a7bb5b5e2180a05f995a70fb404f30." }
  - { id: R-13, publisher: Blockscout, title: "SPY/USDG FablesRWA hook 0xA0E8…e080", url: "https://robinhoodchain.blockscout.com/api/v2/addresses/0xA0E8fBFf13E24Af2b5e61A72800E08a161bDe080", published_at: null, accessed_at: 2026-09-02T23:19:27Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-32], excerpt: "is_contract true, is_verified true, name FablesRWA, creator_address_hash 0x4e59b44847b379578588920cA78FbF26c0B4956C, creation_transaction_hash 0xfafb7e4576d5f409386f4365f4fc99263bc62ad1703aa626fbfca4214d771764." }
  - { id: R-14, publisher: Blockscout, title: "ETH/USDG FablesRampETH hook 0x06a8…6080", url: "https://robinhoodchain.blockscout.com/api/v2/addresses/0x06a889870C8f83640D6816319f72e2aA579b6080", published_at: null, accessed_at: 2026-09-02T23:19:27Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-32], excerpt: "is_contract true, is_verified true, name FablesRampETH, creator_address_hash 0x4e59b44847b379578588920cA78FbF26c0B4956C, creation_transaction_hash 0x28e3c77ae5e6caf130818ba751ae2c406a635d6796a51b63d09a478ae95222ea." }
  - { id: R-15, publisher: Blockscout, title: "PROLOGUE creation tx 0x421c9f5b…", url: "https://robinhoodchain.blockscout.com/api/v2/transactions/0x421c9f5b02412645661089c4857003a6e7a6a0c55a390a447079494096077bed", published_at: 2026-08-17T16:52:13Z, accessed_at: 2026-09-02T23:14:24Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-4, CLM-15, EVT-7], excerpt: "timestamp 2026-08-17T16:52:13Z status ok method multicall from 0x240B7e8FcfdB38C94c0b8733A4A50F28A4C99fa8 to LiquidityLauncher 0x0000FffFBE8efE702c8703aE3477FF5dE3d319C0 (OLI LiquidityLauncher v3.2.0). Decoded name Prologue / PROLOGUE. Description: Fables is a dynamic-fee ve(3,3) DEX built on Uniswap v4 and live on Robinhood Chain. At TGE, $PROLOGUE will redeem for the governance token at a fixed ratio." }
  - { id: R-16, publisher: DefiLlama, title: "api.llama.fi/protocol/fables", url: "https://api.llama.fi/protocol/fables", published_at: null, accessed_at: 2026-09-02T23:13:00Z, kind: third-party-data, authority: aggregator, authenticity: unconfirmed, supports: [CLM-11, CLM-23, CLM-31, EVT-3], excerpt: "id 8481 name Fables category Dexs chains [Robinhood Chain] url https://www.fables.fi/ twitter fablesfi listedAt 1787707619 (2026-08-26T01:26:59Z). currentChainTvls Robinhood Chain 6532113.77218. tvl last {date: 1788387863, totalLiquidityUSD: 6532113} = 2026-09-02T22:24:23Z. Methodology: enumerates FablesPoolRegistry activePools and sums v4 reserves via StateView. doublecounted true." }
  - { id: R-17, publisher: DefiLlama, title: "api.llama.fi/summary/dexs/fables dailyVolume", url: "https://api.llama.fi/summary/dexs/fables?dataType=dailyVolume", published_at: null, accessed_at: 2026-09-02T23:13:00Z, kind: third-party-data, authority: aggregator, authenticity: unconfirmed, supports: [CLM-12], excerpt: "name Fables defillamaId 8481 total24h 18380793 total7d 51725025 total30d 53284687 totalAllTime 71665480 change_1d 83.04 chains [Robinhood Chain]. Volume: Swap volume across every Fables pool, enumerated from FablesPoolRegistry (activePools). Fables pools are not counted by the Uniswap v4 adapter." }
  - { id: R-18, publisher: DefiLlama, title: "api.llama.fi/summary/fees/fables", url: "https://api.llama.fi/summary/fees/fables?dataType=dailyFees", published_at: null, accessed_at: 2026-09-02T23:13:00Z, kind: third-party-data, authority: aggregator, authenticity: unconfirmed, supports: [CLM-13], excerpt: "dailyFees total24h 19302 total7d 50186 totalAllTime 70456.16 chains [Robinhood Chain]. Revenue: No protocol fee is enabled yet. SupplySideRevenue: All swap fees accrue to liquidity providers; Fables takes no protocol fee yet. dailyRevenue total24h 0." }
  - { id: R-19, publisher: DexScreener, title: "PROLOGUE token pairs on Robinhood", url: "https://api.dexscreener.com/latest/dex/tokens/0xb9972CA7188e511174947E3936a5315ac7073277", published_at: null, accessed_at: 2026-09-02T23:16:00Z, kind: third-party-data, authority: aggregator, authenticity: unconfirmed, supports: [CLM-2, CLM-29], excerpt: "19 pairs. Primary Uniswap v4 PROLOGUE/ETH 0x8651e656738064177752a395dbde2b2a9e3fc469edc2a9212e6060c0990bb7eb labels v4 liquidity.usd 654540.72 volume.h24 4262081.47 marketCap 10344493. info.websites https://www.fables.fi/ and https://www.fables.fi/docs; socials x.com/fablesfi t.me/fablesfi discord.gg/QgeEq2rSv7." }
  - { id: R-20, publisher: Fables, title: "Docs / legal — Who we are", url: "https://www.fables.fi/docs", published_at: null, accessed_at: 2026-09-02T23:18:00Z, kind: docs, authority: primary, authenticity: confirmed, supports: [CLM-17], excerpt: "This site, at www.fables.fi, is operated by Alphix Association, a Swiss association established under Articles 60 et seq. of the Swiss Civil Code with its seat in the Canton of Zug." }
  - { id: R-21, publisher: "@0xcs361", title: "Fable Log 003", url: "https://x.com/0xcs361/status/2094977821483360429", published_at: 2026-09-02T02:36:50Z, accessed_at: 2026-09-02T23:12:00Z, kind: social, authority: social, authenticity: unconfirmed, supports: [CLM-17], excerpt: "cs361 @0xcs361 bio: Slaying dragons and riding unicorns @fablesfi. Fable Log 003: $4'000'000+ TVL, ~$50m in Volume; 4'000 followers on X; Updated markets page is live https://www.fables.fi/markets." }
  - { id: R-22, publisher: Blockscout, title: "Creator fee distributor 0xC9Ec…8760", url: "https://robinhoodchain.blockscout.com/api/v2/addresses/0xC9EcC11728a4955B31f77c077B97FEC521D78760", published_at: null, accessed_at: 2026-09-02T23:19:27Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-8], excerpt: "is_contract true, is_verified false, name null, creator_address_hash 0x359856655934338d798F9ccE1f181486301D36a5, creation_transaction_hash 0x71f5af086222c0567b8ab570a47abb018f41f37206805a2037ca613c2168d536. eth_getCode non-empty (4470 hex chars)." }
  - { id: R-23, publisher: "@defidami", title: "Third-party TGE date 5 October", url: "https://x.com/defidami/status/2091555300985741515", published_at: 2026-08-23T15:56:57Z, accessed_at: 2026-09-02T23:16:00Z, kind: social, authority: social, authenticity: unconfirmed, supports: [CLM-20], excerpt: "The mechanics are fixed in advance: 1B PROLOGUE converts into a 25M $FABLES reserve at the token launch (TGE) on 5 October, so every 40 PROLOGUE becomes at least 1 FABLES. Disclosure: I hold $PROLOGUE and bought before writing this. CA: 0xb9972CA7188e511174947E3936a5315ac7073277 Website: fables.fi." }
  - { id: R-24, publisher: X, title: "@fablesfi_sup profile", url: "https://x.com/fablesfi_sup", published_at: null, accessed_at: 2026-09-02T23:12:00Z, kind: social, authority: social, authenticity: unconfirmed, supports: [CLM-24], excerpt: "Fables Support @fablesfi_sup. Bio: Once upon a time, markets were dumb. But that's just the $PROLOGUE. CA: 0xb9972CA7188e511174947E3936a5315ac7073277. Followers 98. Display name collides with @fablesfi; official site footer names https://x.com/fablesfi only." }
  - { id: R-25, publisher: "@fablesfi", title: "Fables crossed $5,000,000 in deposits", url: "https://x.com/fablesfi/status/2095131794316148843", published_at: 2026-09-02T12:48:40Z, accessed_at: 2026-09-02T23:12:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [CLM-33, EVT-2], excerpt: "Fables crossed $5,000,000 in deposits." }
  - { id: R-26, publisher: "@fablesfi", title: "Thanks to @MCGlive interview", url: "https://x.com/fablesfi/status/2095257011222958531", published_at: 2026-09-02T21:06:14Z, accessed_at: 2026-09-02T23:12:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [EVT-1], excerpt: "Thanks to the chads @MCGlive for having us! Quotes @MCGlive: Today on MCG $PROLOGUE | @FablesFi w/@0xcs361. Fables is a ve(3,3) DEX on Robinhood Chain. Highlights include live fee demo, tokenomics breakdown, no self-owned pools." }
  - { id: R-27, publisher: "@fablesfi", title: "Week 1 of The Prologue", url: "https://x.com/fablesfi/status/2094265378272948563", published_at: 2026-08-31T03:25:50Z, accessed_at: 2026-09-02T23:12:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [EVT-5], excerpt: "Week 1 of The Prologue: $29.7M traded, $28.3k paid straight to our 342 LPs. Week 2 starts now https://www.fables.fi/markets" }

gaps:
  - { priority: P0, question: "What roles, delays and queued operations does AccessManager 0xA362D98B…4f30 currently expose, and which key can call them?", checked: "authority() on the registry and NVDA hook returns this address; Blockscout is_verified false; docs describe delayed admin (example 86400s) and fast keeper/pause roles, 2026-09-02", next: "eth_call getAccess / hasRole-style readers once source is verified, or decode the unverified bytecode against OpenZeppelin AccessManager" }
  - { priority: P0, question: "Are FABLES, voting, gauges or emissions contracts deployed on 4663?", checked: "docs Live and planned features list FABLES staking/voting/emissions as Planned; @fablesfi 2026-08-19 says no redemption contract is deployed; explorer search this pass was the registry, hooks, distributor and token", next: "watch docs/addresses Deployment status and missing contracts and any TGE post from @fablesfi" }
  - { priority: P1, question: "Is there an independent audit artifact whose scope matches the live hooks?", checked: "docs/security 2026-09-02: no Fables-specific audit report with auditor, commit hash, scope and findings is linked; Olympix/Sherlock AI/pashov named as tooling", next: "record any later report whose commit and addresses match the deployed FablesRWA / FablesRampETH / AccessManager" }
  - { priority: P1, question: "Is there an official public repository for the verified FablesRWA / FablesPoolRegistry source?", checked: "site, docs, X bio, DexScreener token info, GitHub search FablesPoolRegistry, 2026-09-02", next: "record a GitHub org if the site or an official post links one" }
  - { priority: P1, question: "Does the Merkle distributor 0xC9Ec…8760 match the weekly USDG proofs, and who can set the root?", checked: "docs list the address; Blockscout is_verified false; eth_getCode non-empty, 2026-09-02", next: "verify source and read setMerkleRoot / owner-equivalent" }
  - { priority: P2, question: "Do remaining docs-listed hooks (TSLA, AAPL, GLD, META, NVDA/SPY, SPY/GLD) share the same AccessManager?", checked: "Blockscout names FablesRWA and verified source on those addresses this pass; authority() reproduced only on NVDA/USDG", next: "eth_call authority() on each remaining hook" }
---

# Fables — research packet

## What it is

A Uniswap v4 DEX whose hooks set market-specific swap fees. On Robinhood Chain, a user deposits a concentrated range, collects fees, and withdraws through fables.fi. $PROLOGUE is the live claim token, launched via pools.trade; FABLES staking, voting, and emissions remain planned. Alphix Association in Zug operates the interface.

Themes: rwa, stock-paired:NVDA, hook

## Why it matters

Fables is a native listed-market venue for tokenised-equity pairs (NVDA, SPY, TSLA, AAPL, GLD, META against USDG) sitting on the canonical Uniswap v4 PoolManager, with a separate ETH/USDG hook. DefiLlama's Robinhood Chain slice is about $6.53M TVL and $18.4M 24h volume this pass, counted only on Fables-registered pools. $PROLOGUE is already trading; the ve(3,3) coordination layer that FABLES is supposed to run is not.

## What could go wrong

Restricted calls go through an OpenZeppelin AccessManager whose source is unverified on the explorer, so role membership and delay are not reproduced here. Fast roles can place bounded fee overrides and a one-way pause; a keeper or a bad Merkle root can mis-set fees or weekly USDG inside those bounds. FABLES redemption has no deployed contract and no official date. Docs state there is no Fables-specific audit report.

## Product and mechanics

Each listed Fables market is a Uniswap v4 pool whose PoolKey names a Fables hook. The hook sets the swap fee at execution and records each provider's share of a pooled price range. A user chooses a market and a tick range, deposits the required assets, monitors the position, claims accrued fees, and withdraws through the interface. Swap fees are market-specific: tokenised-equity pools use an on-chain trading calendar (open / overnight / closed floors around the cash-market bell); ETH/USDG uses FablesRampETH. An authorised off-chain keeper can place a bounded, expiring fee override. [claim R-2 R-3 R-12]

Docs table nine live hooks plus a creator-fee distributor, AccessManager, and FablesPoolRegistry. The registry is append-only metadata for off-chain readers (Llama, the frontend); verified source says it holds no funds and is never called by the protocol. Llama volume is read from PoolManager Swap logs filtered to registered pool ids, and is not counted by the Uniswap v4 adapter. [verified R-3 R-10 R-16 R-17]

$PROLOGUE is a 1,000,000,000-supply UERC20 created through LiquidityLauncher v3.2.0 on 2026-08-17. The official 19 August post says it launched on pools.trade so FABLES could stay unlaunched until voting, emissions and staking exist, and that at TGE PROLOGUE redeems into a 25,000,000 FABLES reserve at a floor of 40:1. Docs list PROLOGUE/ETH as a static 2500-tier v4 pool with no Fables hook. Creator fees from that pool fund discretionary weekly USDG for eligible Fables LPs via a Merkle distributor. [verified R-6 R-15]

FABLES token, staking, voting and emissions are documented as Planned. The ve(3,3) system is a roadmap, not a live product. [claim R-2]

## Control and security

FablesPoolRegistry and the NVDA/USDG FablesRWA hook both return AccessManager 0xA362D98B33A7bb5B5E2180a05f995A70FB404f30 from authority(). That contract exists on 4663 with non-empty code and no verified source. It was created 2026-08-15 by 0x359856655934338d798F9ccE1f181486301D36a5 (layan.eth), which also created the registry and the creator-fee distributor. [verified R-10 R-11 R-12 R-22]

Docs: fast roles can place or clear bounded fee overrides and impose a temporary one-way pause; broader configuration uses delayed admin authority (example scripts use 86,400 seconds; the live AccessManager state is authoritative and was not eth_called). The ledger withdrawal path does not read pause or claim-fee state. An immutable absolute fee maximum and a 20% claim-fee ceiling remain after an authorised change. Uniswap's protocol-fee controller and each stock-token issuer sit outside this AccessManager. [claim R-4]

Docs Security: no Fables-specific audit report with auditor, commit hash, scope and findings is linked. Development used unit, fuzz and invariant tests plus Olympix, Sherlock AI tooling and the open-source pashov workflow. No formal bug bounty is published. [claim R-4]

## Team and provenance

Official identity is bidirectional: www.fables.fi footer links https://x.com/fablesfi; @fablesfi bio links https://www.fables.fi/ and names CA 0xb9972CA7188e511174947E3936a5315ac7073277, which docs/addresses also lists. DexScreener token info repeats the site, docs, X, Telegram and Discord URLs. [verified R-1 R-3 R-5 R-19]

Legal copy on the docs site: the interface is operated by Alphix Association, a Swiss association with its seat in the Canton of Zug. @0xcs361's bio names @fablesfi; the official account quoted that handle on an MCG interview. No public contracts repository was linked from the site, docs or X bio. X search also returned @fablesfi_sup with the same CA in its bio; the site footer names @fablesfi only (handle-collision). [claim R-20 R-21 R-24]

## Economics and activity

DefiLlama protocol Fables (id 8481, category Dexs) lists only Robinhood Chain. currentChainTvls['Robinhood Chain'] is 6532113.77218 USD as of 2026-09-02T22:24:23Z — that is the chain slice, and because no other chain is listed it is also the protocol total. 24h volume 18380793 USD; 24h fees 19302 USD; 24h protocol revenue 0 (adapter: no protocol fee enabled yet). All-time DEX volume 71665480 USD. [verified R-16 R-17 R-18]

Blockscout holders_count on PROLOGUE is 7688; circulating_market_cap 6497256.80 USD at the same fetch. DexScreener's primary PROLOGUE/ETH v4 pair showed liquidity 654540.72 USD and 24h volume 4262081.47 USD — a pair slice, not protocol TVL. The official account posted $5,000,000 in deposits on 2026-09-02 and Week 1 $29.7M traded / $28.3k to 342 LPs on 2026-08-31; those posts are not the Llama slice. [verified R-9 R-19]

## Material risks

- AccessManager source is unverified; live roles, delay and queued operations were not eth_called. [verified R-11]
- Fast keeper/pause roles can change fees inside bytecode bounds and pause one way; docs say a bad Merkle root can allocate weekly USDG incorrectly within its cap. [claim R-4]
- No Fables-specific audit report is linked. [claim R-4]
- FABLES, voting, gauges and the PROLOGUE redemption contract are not deployed; official channel says no TGE date is announced. A third-party post names 5 October 2026. [claim R-2 R-6 R-23]
- PROLOGUE/ETH is hookless; holder flow on that pair is not a read of hooked-market activity. [claim R-3]
- Stock-token issuers and Uniswap's protocol-fee controller can restrict or fee the legs independently of Fables. [claim R-4]

## Verification passes

- Receipts: official site, docs routes (live features, addresses, security/permissions, legal), X profile and named status URLs, DexScreener token API, DefiLlama protocol/dexs/fees APIs, and Blockscout address/tx APIs plus RPC eth_getCode/eth_call were opened on 2026-09-02; excerpts are copied from those responses. [verified R-1 R-2 R-3 R-8 R-16]
- Numbers: TVL 6532113.77 USD is currentChainTvls['Robinhood Chain'], not an all-chains mix (Llama lists only that chain). Volume 18380793 and fees 19302 are the same adapter's 24h totals on that chain. Holders 7688 and circulating_market_cap 6497256.80 are Blockscout token fields. DexScreener 654540.72 USD is the PROLOGUE/ETH pair slice. Official $5M deposits is a project post, not the Llama slice. [verified R-9 R-16 R-17 R-19]
- Adversarial: the strongest contrary reading is that Fables is not launched (workbook 30 Aug; TGE cited 5 Oct) or that it is up / SwapHood / Hookr / pools.trade. Docs and live hooks on 4663 argue the DEX is live and FABLES is what remains planned; official 19 Aug copy says no TGE date and names pools.trade only as the PROLOGUE launch path. Handles and domains do not match those other census rows. [inference R-2 R-6 R-12]

## Operations log

- Read content/census.yaml fables row, content/projects/fables.yaml, content/pulled/fables.yaml, content/feed/fables.yaml, content/sources/fables.yaml, content/accounts.yaml @fablesfi, docs/templates/research-packet-v2.md, schema/packet.schema.json.
- Opened https://www.fables.fi/, /docs, /docs/addresses, /docs/security, /markets; fetched SPA bundle assets/index-6cIoOtOW.js and DocsRoute-mO-P1eDy.js for address table and live/planned copy.
- GET Blockscout /api/v2/addresses for PROLOGUE, registry, AccessManager, NVDA/SPY/ETH hooks, distributor, LiquidityLauncher, UERC20Factory; /api/v2/tokens for PROLOGUE; /api/v2/smart-contracts for registry and FablesRWA; /api/v2/transactions for token create, registry create, AccessManager create, NVDA hook create.
- POST rpc.mainnet.chain.robinhood.com eth_getCode on token, registry, AccessManager, NVDA hook, distributor; eth_call name/symbol/creator on token; authority() on registry and NVDA hook.
- GET api.llama.fi/protocol/fables, summary/dexs/fables, summary/fees/fables (dailyFees and dailyRevenue), api.llama.fi/protocols slug fables; GET api.dexscreener.com/latest/dex/tokens/0xb997….
- X user search fablesfi; Latest from:fablesfi; thread 2090176536913813680.
- GitHub: DefiLlama-Adapters/projects/fables/index.js and dimension-adapters/dexs/fables.ts; no project-owned contracts repo linked.
- Time on this slug: one collector pass.
