---
contract_version: proofline-research-v2
work_id: WORK-20260910-codex-alandale-recovery
producer: codex
role: compiler
base_sha: 4f91635a0bd29d38c6bf5cd0a3b6fb070fbf9960
slug: alandale
name: Alandale
packet_tier: seed
as_of: 2026-09-10T03:42:09.546Z
prior_packet: null
owned_slugs:
  - alandale
allowed_paths:
  - research/inbox/packets/alandale/WORK-20260910-codex-alandale-recovery.md
identity:
  canonical_name: Alandale
  aliases:
    - Alandale V3
    - Alandale V2
    - Alandale Exchange
  symbols:
    - LUTE
    - veLUTE
  entity_kind: protocol
  chain_scope: robinhood-native
  official_domain: https://alandale.xyz
  official_handle: "@alandalexyz"
  repository: https://github.com/Alandale-xyz/alandale-contracts
  possible_matches:
    - slug: fables
      signals:
        - other
      contrary_signals:
        - Census Fables is a Uniswap v4 hooked DEX at fables.fi / @fablesfi with token PROLOGUE
        - Alandale is alandale.xyz / @alandalexyz with RPC name Alandale, symbol LUTE, token 0xD1e861CC5Eee7eA88649206b74504D78CCD7AEeA
        - No shared official handle, domain, or reproduced address
    - slug: ram
      signals:
        - other
      contrary_signals:
        - Census RAM / Ramses is ramses.xyz / @RamsesExchange, entity_kind token, chain_scope multichain, tree trading/amm-imported
        - Alandale Llama rows list only Robinhood Chain; official docs name chain id 4663
        - No shared official handle, domain, or reproduced address
    - slug: giga
      signals:
        - other
      contrary_signals:
        - Census native AMM at gigadex.fi / @giga_dex with CL factory 0xEce6eCd61177336ea6Fb9b17937AC439D85EE20B
        - Alandale AlgebraFactory is 0x16494A80E08Bcb9285D87b67149d7b01774D82F8 and PairFactory is 0xe0799417eff30A12249b8c30941BC2d7c52A0339
        - No shared official handle, domain, or reproduced address
    - slug: up
      signals:
        - other
      contrary_signals:
        - Census up is a native AMM at up33.xyz / @uponrh
        - Alandale is alandale.xyz / @alandalexyz with LUTE / veLUTE
        - No shared official handle, domain, or reproduced address
    - slug: swaphood
      signals:
        - other
      contrary_signals:
        - Census SwapHood is a native AMM at @SwapHoodFi
        - Alandale token, factories, and official domain do not match SwapHood surfaces
        - No shared official handle, domain, or reproduced address
  crosslink_claim_ids:
    - CLM-2
    - CLM-60
classification:
  primary_leaf: trading/amm-native
  secondary_leaves:
    - yield/fee-router
  mechanism_tags:
    - amm
    - fee-routing
  ecosystem_role: subject
  lifecycle: mainnet
  coverage_recommendation: seed
  evidence_state: partly-verified
  rationale: Official site, app, docs, GitHub org, and @alandalexyz name a Robinhood Chain ve(3,3) DEX with LUTE / veLUTE. Docs publish live addresses on chain 4663. RPC this round returned chainId 0x1237 and non-empty code on those addresses; eth_call on 0xD1e861… returned name Alandale, symbol LUTE, owner the documented Minter. DefiLlama Alandale V3 and V2 list only Robinhood Chain, with V3 TVL 870422.52 and 24h DEX volume 8857627 as of this pull. Blockscout API v2 was Cloudflare 403, so explorer_source_verified stays null. Distinct from census AMMs. [R-1] [R-4] [R-5] [R-7] [R-8]
qualifying:
  deployed_on_chain:
    status: pass
    claim_ids:
      - CLM-6
      - CLM-7
      - CLM-8
    note: ""
  native_play:
    status: pass
    claim_ids:
      - CLM-1
      - CLM-13
      - CLM-17
    note: ""
  citable:
    status: pass
    claim_ids:
      - CLM-2
      - CLM-3
      - CLM-24
    note: ""
  research_story:
    status: pass
    claim_ids:
      - CLM-1
      - CLM-12
      - CLM-18
    note: ""
links:
  - kind: site
    url: https://alandale.xyz
    authenticity: confirmed
  - kind: app
    url: https://app.alandale.xyz/
    authenticity: confirmed
  - kind: app
    url: https://app.alandale.xyz/airdrop
    authenticity: confirmed
  - kind: docs
    url: https://alandale.gitbook.io/alandale
    authenticity: confirmed
  - kind: x
    url: https://x.com/alandalexyz
    authenticity: confirmed
  - kind: telegram
    url: https://t.me/alandalexyz
    authenticity: confirmed
  - kind: discord
    url: https://discord.gg/DT6kEY9kz
    authenticity: confirmed
  - kind: github
    url: https://github.com/Alandale-xyz/alandale-contracts
    authenticity: confirmed
  - kind: explorer
    url: https://robinhoodchain.blockscout.com/address/0xD1e861CC5Eee7eA88649206b74504D78CCD7AEeA
    authenticity: confirmed
  - kind: explorer
    url: https://robinhoodchain.blockscout.com/address/0x16494A80E08Bcb9285D87b67149d7b01774D82F8
    authenticity: confirmed
  - kind: dexscreener
    url: https://dexscreener.com/robinhood/0xfa0b90e406c9a6f08ad2cbb4b367b063d7cf46c2
    authenticity: unconfirmed
  - kind: other
    url: https://defillama.com/protocol/alandale-v3
    authenticity: unconfirmed
  - kind: other
    url: https://defillama.com/holders-revenue
    authenticity: unconfirmed
deployments:
  - label: LUTE ERC-20 (RPC name Alandale, symbol LUTE). Llama protocol.address and docs token row are this address, not AlgebraFactory.
    role: token
    address:
      value: "0xD1e861CC5Eee7eA88649206b74504D78CCD7AEeA"
      chain: robinhood-chain
      source: docs
      seen: 2026-09-09
      exists_on_4663: true
      explorer_source_verified: null
    receipt_ids:
      - R-4
      - R-5
      - R-6
      - R-7
  - label: AlgebraFactory (concentrated liquidity)
    role: factory
    address:
      value: "0x16494A80E08Bcb9285D87b67149d7b01774D82F8"
      chain: robinhood-chain
      source: docs
      seen: 2026-09-09
      exists_on_4663: true
      explorer_source_verified: null
    receipt_ids:
      - R-4
      - R-5
  - label: PairFactory (classic pools)
    role: factory
    address:
      value: "0xe0799417eff30A12249b8c30941BC2d7c52A0339"
      chain: robinhood-chain
      source: docs
      seen: 2026-09-09
      exists_on_4663: true
      explorer_source_verified: null
    receipt_ids:
      - R-4
      - R-5
  - label: RouterV2
    role: router
    address:
      value: "0xB90b0E114a32a3dA7b61D5eaae7D35Af9B1B5582"
      chain: robinhood-chain
      source: docs
      seen: 2026-09-09
      exists_on_4663: true
      explorer_source_verified: null
    receipt_ids:
      - R-4
      - R-5
  - label: SwapRouter (Algebra)
    role: router
    address:
      value: "0x8971d5A8F950F021e97583855925B021bfaE2b35"
      chain: robinhood-chain
      source: docs
      seen: 2026-09-09
      exists_on_4663: true
      explorer_source_verified: null
    receipt_ids:
      - R-4
      - R-5
  - label: VotingEscrow (veLUTE)
    role: other
    address:
      value: "0xc1a79e3A7b04c3f21C6409a78Ab58A8C822bE7dC"
      chain: robinhood-chain
      source: docs
      seen: 2026-09-09
      exists_on_4663: true
      explorer_source_verified: null
    receipt_ids:
      - R-4
      - R-5
  - label: Voter
    role: other
    address:
      value: "0x4cF1c47B95031cD2bb1d102021D8Ede60392971C"
      chain: robinhood-chain
      source: docs
      seen: 2026-09-09
      exists_on_4663: true
      explorer_source_verified: null
    receipt_ids:
      - R-4
      - R-5
  - label: Minter (also LUTE owner())
    role: other
    address:
      value: "0x782355E7771A9Aa0834de4Ae981DCF3b7aeC11e6"
      chain: robinhood-chain
      source: docs
      seen: 2026-09-09
      exists_on_4663: true
      explorer_source_verified: null
    receipt_ids:
      - R-4
      - R-5
  - label: NonfungiblePositionManager
    role: other
    address:
      value: "0xe62a5F67516dBDBA2Aa28b1512C8Ff44E42cB5c3"
      chain: robinhood-chain
      source: docs
      seen: 2026-09-09
      exists_on_4663: true
      explorer_source_verified: null
    receipt_ids:
      - R-4
      - R-5
  - label: GaugeRewarder (CL emissions claims)
    role: other
    address:
      value: "0x8A76f49e091F21C896122B4879541930322b799D"
      chain: robinhood-chain
      source: docs
      seen: 2026-09-09
      exists_on_4663: true
      explorer_source_verified: null
    receipt_ids:
      - R-4
      - R-5
  - label: Airdrop (VeLuteSplitMerklAidrop per docs)
    role: other
    address:
      value: "0x8f90745342622be6ABbC575Cc250Af9179cabe6f"
      chain: robinhood-chain
      source: docs
      seen: 2026-09-09
      exists_on_4663: true
      explorer_source_verified: null
    receipt_ids:
      - R-4
      - R-5
  - label: AlgebraFactory owner() (unread contract, 171 bytes of code)
    role: admin
    address:
      value: "0x2a04c1d26767dd30f62712dcfcf1222f733a2b0e"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-09
      exists_on_4663: true
      explorer_source_verified: null
    receipt_ids:
      - R-5
metrics:
  - kind: tvl
    value: 870422.52432
    currency: USD
    as_of: 2026-09-09T01:09:35Z
    window: point
    method: api.llama.fi/protocol/alandale-v3 currentChainTvls['Robinhood Chain']
    class: claim
    receipt_ids:
      - R-7
  - kind: tvl
    value: 52617.77404
    currency: USD
    as_of: 2026-09-09T00:56:23Z
    window: point
    method: api.llama.fi/protocol/alandale-v2 currentChainTvls['Robinhood Chain']
    class: claim
    receipt_ids:
      - R-9
  - kind: tvl
    value: 923039
    currency: USD
    as_of: 2026-09-09T02:22:00Z
    window: point
    method: api.llama.fi/protocol/alandale currentChainTvls['Robinhood Chain'] (parent V2+V3)
    class: claim
    receipt_ids:
      - R-10
  - kind: volume_24h
    value: 8857627
    currency: USD
    as_of: 2026-09-09T02:22:00Z
    window: 24h
    method: api.llama.fi/summary/dexs/alandale-v3 total24h; chains ['Robinhood Chain']
    class: claim
    receipt_ids:
      - R-8
  - kind: fees_24h
    value: 4836
    currency: USD
    as_of: 2026-09-09T02:22:00Z
    window: 24h
    method: api.llama.fi/summary/fees/alandale-v3 total24h; chains ['Robinhood Chain']
    class: claim
    receipt_ids:
      - R-11
reproductions:
  - id: REP-1
    method: explorer-rpc
    chain_id: 4663
    checked_at: 2026-09-09T02:20:00Z
    receipt_ids:
      - R-5
    result: eth_chainId 0x1237 (4663). eth_blockNumber 0x377d360 (58184544). Browser UA required. eth_getCode non-empty on LUTE 0xD1e861…AEeA (7154 hex chars / 3576 bytes).
  - id: REP-2
    method: explorer-rpc
    chain_id: 4663
    checked_at: 2026-09-09T02:21:00Z
    receipt_ids:
      - R-5
    result: "eth_call on 0xD1e861CC5Eee7eA88649206b74504D78CCD7AEeA: name() Alandale, symbol() LUTE, decimals() 18, totalSupply() 540909033.75 * 10^18, owner() 0x782355E7771A9Aa0834de4Ae981DCF3b7aeC11e6 (docs Minter)."
  - id: REP-3
    method: explorer-rpc
    chain_id: 4663
    checked_at: 2026-09-09T02:21:00Z
    receipt_ids:
      - R-4
      - R-5
    result: "eth_getCode non-empty on docs Networks & Contracts set: VotingEscrow, Voter, Minter, PairFactory, RouterV2, GaugeRewarder, Airdrop, AlgebraFactory, SwapRouter, QuoterV2, NFPM, PairAPI, VeNFTAPI, RewardAPI, GetInformationAggregator. Several ve(3,3) core addresses returned 4862 hex chars (2430 bytes), the same length; LUTE and the Algebra periphery did not. Implementations were not decoded."
  - id: REP-4
    method: explorer-rpc
    chain_id: 4663
    checked_at: 2026-09-09T02:21:00Z
    receipt_ids:
      - R-5
    result: AlgebraFactory 0x16494A80E08Bcb9285D87b67149d7b01774D82F8 owner() 0x2a04c1d26767dd30f62712dcfcf1222f733a2b0e. eth_getCode on that owner non-empty (344 hex chars / 171 bytes). name() on AlgebraFactory reverted.
  - id: REP-5
    method: api
    chain_id: 4663
    checked_at: 2026-09-09T02:22:00Z
    receipt_ids:
      - R-7
      - R-8
      - R-9
      - R-10
      - R-11
    result: "GET api.llama.fi/protocol/alandale-v3: name Alandale V3, symbol LUTE, url https://alandale.xyz, twitter alandalexyz, chains ['Robinhood Chain'], address robinhood:0xD1e861CC5Eee7eA88649206b74504D78CCD7AEeA, currentChainTvls Robinhood Chain 870422.52432, listedAt 1786557025 (2026-08-12T17:50:25Z), tags ['CLMM'], audits 0. GET summary/dexs/alandale-v3 total24h 8857627 total30d 122859141. GET protocol/alandale-v2 currentChainTvls Robinhood Chain 52617.77404. GET protocol/alandale parent currentChainTvls Robinhood Chain 923039. GET summary/fees/alandale-v3 total24h 4836."
  - id: REP-6
    method: official-crosslink
    checked_at: 2026-09-09T02:25:00Z
    receipt_ids:
      - R-1
      - R-2
      - R-3
      - R-4
      - R-12
      - R-13
    result: "alandale.xyz og:url https://alandale.xyz and links app, gitbook, x.com/alandalexyz, t.me/alandalexyz, discord.gg/DT6kEY9kz. App footer: Reading on-chain data from Robinhood · chain 4663, same four community URLs. Docs welcome names app.alandale.xyz, alandale.xyz, GitHub Alandale-xyz. GitHub org Alandale-xyz; repo alandale-contracts homepage https://app.alandale.xyz/. X profile title Alandale (@alandalexyz); twitter:description names Robinhood Chain; HTML also contains https://alandale.xyz/."
  - id: REP-7
    method: explorer-ui
    chain_id: 4663
    checked_at: 2026-09-09T02:19:00Z
    receipt_ids:
      - R-6
    result: GET robinhoodchain.blockscout.com/address/0xD1e861CC5Eee7eA88649206b74504D78CCD7AEeA HTTP 200, HTML title Robinhood Chain address details for 0xD1e861CC5Eee7eA88649206b74504D78CCD7AEeA | Blockscout. GET api/v2/addresses/… returned Cloudflare 403 HTML, so is_verified was not read.
  - id: REP-8
    method: explorer-rpc
    chain_id: 4663
    checked_at: 2026-09-09T03:18:00Z
    receipt_ids:
      - R-40
    result: eth_chainId 0x1237 (4663). eth_blockNumber 0x377eee9 (58187369). CRUMBS 0x80baa4b3bfac6f4978700df824b1b3d98e889136 eth_getCode 6498 hex chars, non-empty. eth_call name() Crumbs, symbol() CRUMBS, decimals() 18. Not added to Alandale deployments[].
  - id: REP-9
    method: explorer-rpc
    chain_id: 4663
    checked_at: 2026-09-09T03:18:00Z
    receipt_ids:
      - R-41
    result: "eth_getTransactionByHash 0xf49fbbb1469e7b807c88f55f28c23e859c3a445c7b274578899451b9f5b91bf9: from 0x00607ec8622cf64cf6735090891d5870a1598fe4, to 0xe33E9E479dF8802cb0866d5d05258bEc4cF62948, block 58100490 (0x3768b0a), input selector 0xf85f8e41. Receipt status 0x1; logs include CRUMBS. to is not PonsV2LaunchFactory 0x7eD598BcEf8bd9Edd8C97A195C6d13f40801EC7e. eth_getCode on 0xe33E9E… non-empty (8834 hex chars). Prior packets name that address PonsV2LaunchAndBuy / launchAndBuy."
  - id: REP-10
    method: official-crosslink
    checked_at: 2026-09-09T03:15:00Z
    receipt_ids:
      - R-2
      - R-16
      - R-26
    result: "GET app.alandale.xyz/airdrop HTTP 200, title Airdrop · Alandale. Footer: Reading on-chain data from Robinhood · chain 4663. Copy names Uniswap and Nest LPs, veNEST lockers, $INDEX holders and RVH holders (including staked RVH). Claims are veLUTE veNFT only; merkle root on-chain. Same community URLs as the overview footer."
  - id: REP-11
    method: explorer-rpc
    chain_id: 4663
    checked_at: 2026-09-10T03:41:47.116Z
    receipt_ids:
      - R-43
    result: "eth_chainId returned 0x1237 (4663). At pinned block 0x385a4a5, eth_getCode returned non-empty bytecode: RouterV2 0xB90b0E114a32a3dA7b61D5eaae7D35Af9B1B5582: 14446 bytes; SwapRouter 0x8971d5A8F950F021e97583855925B021bfaE2b35: 12286 bytes; NonfungiblePositionManager 0xe62a5F67516dBDBA2Aa28b1512C8Ff44E42cB5c3: 24208 bytes; GaugeRewarder 0x8A76f49e091F21C896122B4879541930322b799D: 2430 bytes; Airdrop 0x8f90745342622be6ABbC575Cc250Af9179cabe6f: 2430 bytes; Previously reported AlgebraFactory owner 0x2a04c1d26767dd30f62712dcfcf1222f733a2b0e: 171 bytes. This reproduces existence only, not source verification, audit safety, proxy implementation or current owner authority."
  - id: REP-12
    method: api
    chain_id: 4663
    checked_at: 2026-09-10T03:42:09.546Z
    receipt_ids:
      - R-42
    result: HTTP 200 from api.llama.fi/protocol/alandale-v3. Response names Alandale V3, URL https://alandale.xyz, address robinhood:0xD1e861CC5Eee7eA88649206b74504D78CCD7AEeA, chains [Robinhood Chain]. Endpoint identity is confirmed; aggregator methodology is not an independent audit.
  - id: REP-13
    method: official-crosslink
    checked_at: 2026-09-10T03:42:09.453Z
    receipt_ids:
      - R-44
      - R-45
    result: HTTP 200 site links to app.alandale.xyz and alandale.gitbook.io/alandale; GitBook welcome links back to alandale.xyz, app.alandale.xyz and GitHub Alandale-xyz. No individually named team member was identified on these two pages.
claims:
  - id: CLM-1
    field: product.mechanism
    value: "Official site, app, and docs describe Alandale as a ve(3,3) MetaDEX on Robinhood Chain: classic AMM plus Algebra concentrated-liquidity pools; lock LUTE for veLUTE; vote weekly; fees and bribes to lockers who voted. Docs say it is a fork of Fenix Finance (Solidly / Chronos / Thena lineage) adapted to Robinhood Chain."
    class: claim
    observed_at: 2026-09-09T02:25:00Z
    receipt_ids:
      - R-1
      - R-2
      - R-3
    reproduction_ids: []
    supersedes: null
  - id: CLM-2
    field: identity.domain
    value: https://alandale.xyz
    class: verified
    observed_at: 2026-09-09T02:25:00Z
    receipt_ids:
      - R-1
      - R-3
      - R-12
      - R-13
    reproduction_ids:
      - REP-6
    supersedes: null
  - id: CLM-3
    field: identity.handle
    value: "@alandalexyz"
    class: verified
    observed_at: 2026-09-09T02:25:00Z
    receipt_ids:
      - R-1
      - R-2
      - R-7
      - R-13
    reproduction_ids:
      - REP-6
    supersedes: null
  - id: CLM-4
    field: identity.symbol
    value: LUTE
    class: verified
    observed_at: 2026-09-09T02:21:00Z
    receipt_ids:
      - R-4
      - R-5
      - R-7
    reproduction_ids:
      - REP-2
    supersedes: null
  - id: CLM-5
    field: identity.name
    value: Alandale
    class: verified
    observed_at: 2026-09-09T02:21:00Z
    receipt_ids:
      - R-1
      - R-5
    reproduction_ids:
      - REP-2
    supersedes: null
  - id: CLM-6
    field: deployment.address
    value: "0xD1e861CC5Eee7eA88649206b74504D78CCD7AEeA"
    class: verified
    observed_at: 2026-09-09T02:21:00Z
    receipt_ids:
      - R-4
      - R-5
      - R-7
    reproduction_ids:
      - REP-1
      - REP-2
    supersedes: null
  - id: CLM-7
    field: deployment.address
    value: "0x16494A80E08Bcb9285D87b67149d7b01774D82F8"
    class: verified
    observed_at: 2026-09-09T02:21:00Z
    receipt_ids:
      - R-4
      - R-5
    reproduction_ids:
      - REP-3
    supersedes: null
  - id: CLM-8
    field: deployment.address
    value: "0xe0799417eff30A12249b8c30941BC2d7c52A0339"
    class: verified
    observed_at: 2026-09-09T02:21:00Z
    receipt_ids:
      - R-4
      - R-5
    reproduction_ids:
      - REP-3
    supersedes: null
  - id: CLM-9
    field: deployment.address
    value: "0xc1a79e3A7b04c3f21C6409a78Ab58A8C822bE7dC"
    class: verified
    observed_at: 2026-09-09T02:21:00Z
    receipt_ids:
      - R-4
      - R-5
    reproduction_ids:
      - REP-3
    supersedes: null
  - id: CLM-10
    field: deployment.address
    value: "0x4cF1c47B95031cD2bb1d102021D8Ede60392971C"
    class: verified
    observed_at: 2026-09-09T02:21:00Z
    receipt_ids:
      - R-4
      - R-5
    reproduction_ids:
      - REP-3
    supersedes: null
  - id: CLM-11
    field: deployment.address
    value: "0x782355E7771A9Aa0834de4Ae981DCF3b7aeC11e6"
    class: verified
    observed_at: 2026-09-09T02:21:00Z
    receipt_ids:
      - R-4
      - R-5
    reproduction_ids:
      - REP-2
      - REP-3
    supersedes: null
  - id: CLM-12
    field: lifecycle
    value: mainnet
    class: verified
    observed_at: 2026-09-09T02:22:00Z
    receipt_ids:
      - R-4
      - R-5
      - R-7
      - R-8
    reproduction_ids:
      - REP-1
      - REP-3
      - REP-5
    supersedes: null
  - id: CLM-13
    field: taxonomy.chain-scope
    value: robinhood-native
    class: claim
    observed_at: 2026-09-09T02:22:00Z
    receipt_ids:
      - R-2
      - R-3
      - R-7
      - R-9
    reproduction_ids:
      - REP-5
    supersedes: null
  - id: CLM-14
    field: taxonomy.primary-leaf
    value: trading/amm-native
    class: claim
    observed_at: 2026-09-09T02:25:00Z
    receipt_ids:
      - R-3
      - R-7
    reproduction_ids: []
    supersedes: null
  - id: CLM-15
    field: control.owner
    value: LUTE owner() is Minter 0x782355E7771A9Aa0834de4Ae981DCF3b7aeC11e6
    class: verified
    observed_at: 2026-09-09T02:21:00Z
    receipt_ids:
      - R-4
      - R-5
    reproduction_ids:
      - REP-2
    supersedes: null
  - id: CLM-16
    field: control.owner
    value: AlgebraFactory owner() is 0x2a04c1d26767dd30f62712dcfcf1222f733a2b0e with 171 bytes of code; identity of that contract unread
    class: verified
    observed_at: 2026-09-09T02:21:00Z
    receipt_ids:
      - R-5
    reproduction_ids:
      - REP-4
    supersedes: null
  - id: CLM-17
    field: economics.metric
    value: Llama Alandale V3 currentChainTvls Robinhood Chain 870422.52432 USD at tvl date 2026-09-09T01:09:35Z; chains list is only Robinhood Chain
    class: claim
    observed_at: 2026-09-09T02:22:00Z
    receipt_ids:
      - R-7
    reproduction_ids:
      - REP-5
    supersedes: null
  - id: CLM-18
    field: economics.metric
    value: Llama summary/dexs/alandale-v3 total24h 8857627, total7d 67663299, total30d 122859141, chains ['Robinhood Chain']
    class: claim
    observed_at: 2026-09-09T02:22:00Z
    receipt_ids:
      - R-8
    reproduction_ids:
      - REP-5
    supersedes: null
  - id: CLM-19
    field: economics.metric
    value: Llama Alandale V2 currentChainTvls Robinhood Chain 52617.77404 USD; parent protocol/alandale currentChainTvls Robinhood Chain 923039
    class: claim
    observed_at: 2026-09-09T02:22:00Z
    receipt_ids:
      - R-9
      - R-10
    reproduction_ids:
      - REP-5
    supersedes: null
  - id: CLM-20
    field: economics.metric
    value: RPC totalSupply 540909033.75 LUTE (18 decimals). Docs say 500,000,000 initial supply with later weekly minter issuance.
    class: verified
    observed_at: 2026-09-09T02:21:00Z
    receipt_ids:
      - R-5
      - R-17
    reproduction_ids:
      - REP-2
    supersedes: null
  - id: CLM-21
    field: security.audit
    value: Llama protocol/alandale-v3 audits field is 0. No audit report URL on alandale.xyz, GitBook, or the Alandale-xyz GitHub org was located this round.
    class: claim
    observed_at: 2026-09-09T02:25:00Z
    receipt_ids:
      - R-7
      - R-3
      - R-12
    reproduction_ids: []
    supersedes: null
  - id: CLM-22
    field: relationship
    value: "Alandale is not census fables, ram, giga, up, or swaphood: different official handle, domain, and reproduced LUTE / factory addresses."
    class: verified
    observed_at: 2026-09-09T02:25:00Z
    receipt_ids:
      - R-1
      - R-4
      - R-5
    reproduction_ids:
      - REP-2
      - REP-3
    supersedes: null
  - id: CLM-23
    field: product.mechanism
    value: Llama protocol.address robinhood:0xD1e861CC5Eee7eA88649206b74504D78CCD7AEeA is the LUTE ERC-20 (RPC name Alandale, symbol LUTE), not AlgebraFactory 0x16494A80…D82F8.
    class: verified
    observed_at: 2026-09-09T02:21:00Z
    receipt_ids:
      - R-4
      - R-5
      - R-7
    reproduction_ids:
      - REP-2
      - REP-3
    supersedes: null
  - id: CLM-24
    field: identity.repository
    value: https://github.com/Alandale-xyz/alandale-contracts
    class: claim
    observed_at: 2026-09-09T02:25:00Z
    receipt_ids:
      - R-3
      - R-12
    reproduction_ids:
      - REP-6
    supersedes: null
  - id: CLM-25
    field: communications.status
    value: "X profile @alandalexyz title Alandale, joined July 2026, 322 posts. twitter:description: The Outlaw Liquidity Hub - Live on Robinhood Chain. HTML contains https://alandale.xyz/. Latest keyword search via r.jina.ai returned Cloudflare 403; post bodies below were copied from the x.com profile HTML."
    class: claim
    observed_at: 2026-09-09T02:28:00Z
    receipt_ids:
      - R-13
    reproduction_ids: []
    supersedes: null
  - id: CLM-26
    field: account.@alandalexyz.role
    value: project
    class: claim
    observed_at: 2026-09-09T02:28:00Z
    receipt_ids:
      - R-1
      - R-13
    reproduction_ids: []
    supersedes: null
  - id: CLM-27
    field: account.@alandalexyz.follow
    value: true
    class: claim
    observed_at: 2026-09-09T02:28:00Z
    receipt_ids:
      - R-1
      - R-13
    reproduction_ids: []
    supersedes: null
  - id: CLM-28
    field: account.@alandalexyz.listen
    value: high
    class: claim
    observed_at: 2026-09-09T02:28:00Z
    receipt_ids:
      - R-1
      - R-5
      - R-13
    reproduction_ids:
      - REP-2
    supersedes: null
  - id: CLM-29
    field: account.@alandalexyz.slug
    value: alandale
    class: claim
    observed_at: 2026-09-09T02:28:00Z
    receipt_ids:
      - R-1
    reproduction_ids: []
    supersedes: null
  - id: CLM-30
    field: account.@alandalexyz.conflict
    value: team
    class: claim
    observed_at: 2026-09-09T02:28:00Z
    receipt_ids:
      - R-1
      - R-13
    reproduction_ids: []
    supersedes: null
  - id: CLM-31
    field: account.@alandalexyz.tier
    value: watch
    class: claim
    observed_at: 2026-09-09T02:28:00Z
    receipt_ids:
      - R-1
      - R-13
    reproduction_ids: []
    supersedes: null
  - id: CLM-32
    field: candidate
    value: crumbs | Crumbs | @crumbsfamily | crumbs.family | 0x80bAa4b3bfAC6f4978700dF824B1B3d98e889136 | graduation
    class: claim
    observed_at: 2026-09-09T03:20:00Z
    receipt_ids:
      - R-19
      - R-38
      - R-39
      - R-40
      - R-41
    reproduction_ids:
      - REP-8
      - REP-9
    supersedes: null
  - id: CLM-33
    field: candidate
    value: dividend-hound | Dividend Hound | @DividendHoundRH | none | 0x7efa92fB3657d1fE086c5b178c3e6f1e7cDc2e19 | graduation
    class: claim
    observed_at: 2026-09-09T02:24:00Z
    receipt_ids:
      - R-20
    reproduction_ids: []
    supersedes: null
  - id: CLM-34
    field: candidate
    value: ample | Ample | @AmpleHQ | ample.money | observe
    class: claim
    observed_at: 2026-09-09T03:20:00Z
    receipt_ids:
      - R-21
      - R-28
    reproduction_ids: []
    supersedes: null
  - id: CLM-35
    field: candidate
    value: t3tris-finance | T3tris Finance | @0xT3tris | t3tris.finance | observe
    class: claim
    observed_at: 2026-09-09T02:23:00Z
    receipt_ids:
      - R-22
    reproduction_ids: []
    supersedes: null
  - id: CLM-36
    field: candidate
    value: gami-labs | Gami Labs | @GamiLabs | gamilabs.io | observe
    class: claim
    observed_at: 2026-09-09T02:23:00Z
    receipt_ids:
      - R-23
    reproduction_ids: []
    supersedes: null
  - id: CLM-37
    field: candidate
    value: accountable | Accountable | @AccountableData | accountable.capital | observe
    class: claim
    observed_at: 2026-09-09T02:23:00Z
    receipt_ids:
      - R-24
    reproduction_ids: []
    supersedes: null
  - id: CLM-38
    field: relationship
    value: Llama Fenix Finance is Blast-only (currentChainTvls Blast 16315, url fenixfinance.io, twitter FenixFinance). Docs name Fenix as the upstream fork. Not a census row and not merged with Alandale.
    class: claim
    observed_at: 2026-09-09T02:23:00Z
    receipt_ids:
      - R-3
      - R-25
    reproduction_ids: []
    supersedes: null
  - id: CLM-39
    field: product.mechanism
    value: "App airdrop page: community airdrop of locked veLUTE veNFTs to Uniswap and Nest LPs, veNEST lockers, $INDEX holders, and RVH holders including staked RVH. Snapshot thresholds stated as more than $1,000, or more than $500 in RVH. Claims checked against an on-chain merkle root. No liquid LUTE option."
    class: claim
    observed_at: 2026-09-09T03:15:00Z
    receipt_ids:
      - R-26
    reproduction_ids:
      - REP-10
    supersedes: null
  - id: CLM-40
    field: economics.metric
    value: "@alandalexyz status/2096233221717401898: $LUTE sitting at 378k$ MC. Anomaly. Linked http://defillama.com/holders-revenue. Rank and MC not reproduced from Llama this pass (holders-revenue first rows did not show Alandale)."
    class: claim
    observed_at: 2026-09-09T03:20:00Z
    receipt_ids:
      - R-14
      - R-27
    reproduction_ids: []
    supersedes: null
  - id: CLM-41
    field: candidate
    value: rvh | RVH | @RVHProtocol | none | observe
    class: claim
    observed_at: 2026-09-09T03:20:00Z
    receipt_ids:
      - R-16
      - R-26
    reproduction_ids: []
    supersedes: null
  - id: CLM-42
    field: other
    value: "CRUMBS 0x80baa4b3bfac6f4978700df824b1b3d98e889136 on chain 4663: RPC name Crumbs, symbol CRUMBS, decimals 18, non-empty code (6498 hex chars)"
    class: verified
    observed_at: 2026-09-09T03:18:00Z
    receipt_ids:
      - R-40
    reproduction_ids:
      - REP-8
    supersedes: null
  - id: CLM-43
    field: other
    value: CRUMBS launch tx 0xf49fbbb1…b91bf9 succeeded at block 58100490 to 0xe33E9E479dF8802cb0866d5d05258bEc4cF62948 (PonsV2LaunchAndBuy in prior pons packets), from 0x00607ec8622cf64cf6735090891d5870a1598fe4; logs include the CRUMBS address
    class: verified
    observed_at: 2026-09-09T03:18:00Z
    receipt_ids:
      - R-41
    reproduction_ids:
      - REP-9
    supersedes: null
  - id: CLM-44
    field: other
    value: "@bankrbot status/2097505326811742539: live on robinhood; official crumbsfamily posted this CA; not a bankr launch; contract unverified; launched via pons v2; hours-old robinhood meme with a consumer-app wrapper"
    class: claim
    observed_at: 2026-09-09T03:20:00Z
    receipt_ids:
      - R-38
    reproduction_ids: []
    supersedes: null
  - id: CLM-45
    field: other
    value: "@GoldenDogHunter status/2097510124017664368 described crumbsfamily as a cashback project"
    class: claim
    observed_at: 2026-09-09T03:20:00Z
    receipt_ids:
      - R-39
    reproduction_ids: []
    supersedes: null
  - id: CLM-46
    field: other
    value: "@RHDaily__ status/2096468811872612422: @AmpleHQ went live on Robinhood Chain, allowing users to deposit USDG and earn weekly prizes"
    class: claim
    observed_at: 2026-09-09T03:20:00Z
    receipt_ids:
      - R-28
    reproduction_ids: []
    supersedes: null
  - id: CLM-47
    field: account.@crumbsfamily.role
    value: project
    class: claim
    observed_at: 2026-09-09T03:20:00Z
    receipt_ids:
      - R-19
      - R-38
    reproduction_ids: []
    supersedes: null
  - id: CLM-48
    field: account.@crumbsfamily.follow
    value: true
    class: claim
    observed_at: 2026-09-09T03:20:00Z
    receipt_ids:
      - R-19
      - R-38
    reproduction_ids: []
    supersedes: null
  - id: CLM-49
    field: account.@crumbsfamily.listen
    value: medium
    class: claim
    observed_at: 2026-09-09T03:20:00Z
    receipt_ids:
      - R-38
      - R-40
    reproduction_ids:
      - REP-8
    supersedes: null
  - id: CLM-50
    field: account.@crumbsfamily.conflict
    value: unknown
    class: claim
    observed_at: 2026-09-09T03:20:00Z
    receipt_ids:
      - R-38
    reproduction_ids: []
    supersedes: null
  - id: CLM-51
    field: other
    value: "@RobinHubHB status/2097441095034769844 is a third-party Hookr launchpad claim (115 launches; ETH-paired fees funding Flywheel Burn and $HOOKR buybacks), not an official @hookrfun post. Census slug hookr already exists."
    class: claim
    observed_at: 2026-09-09T03:20:00Z
    receipt_ids:
      - R-30
    reproduction_ids: []
    supersedes: null
  - id: CLM-52
    field: other
    value: "Follow-list posts since 2026-09-04 that are not Alandale and already have census slugs or are chain-level: @RobinhoodCrypto $150M Robinhood Stock Tokens TVL (infra); @RobinHubHB Hookr 115 launches / ETH-paired fee flywheel (third-party; census hookr); @ArrowFinanceio aUSD/USDG UP incentives ~22% APR in $UP (census arrow, up); @deltaliquidity 0.241% buyback/burn claims plus two Blockscout txs (census delta); @ClutchMarkets Smart LP LIVE and V2 UX (census stonkbroker). Not proposed as new names. Not Alandale feed events."
    class: claim
    observed_at: 2026-09-09T03:20:00Z
    receipt_ids:
      - R-29
      - R-30
      - R-31
      - R-32
      - R-33
      - R-34
      - R-35
      - R-36
      - R-37
    reproduction_ids: []
    supersedes: null
  - id: CLM-53
    field: deployment.address
    value: "RouterV2: 0xB90b0E114a32a3dA7b61D5eaae7D35Af9B1B5582, non-empty code (14446 bytes) on chain 4663 at block 0x385a4a5; role labels from retained documentation/research, existence independently read here"
    class: verified
    observed_at: 2026-09-10T03:41:47.116Z
    receipt_ids:
      - R-43
    reproduction_ids:
      - REP-11
    supersedes: null
  - id: CLM-54
    field: deployment.address
    value: "SwapRouter: 0x8971d5A8F950F021e97583855925B021bfaE2b35, non-empty code (12286 bytes) on chain 4663 at block 0x385a4a5; role labels from retained documentation/research, existence independently read here"
    class: verified
    observed_at: 2026-09-10T03:41:47.116Z
    receipt_ids:
      - R-43
    reproduction_ids:
      - REP-11
    supersedes: null
  - id: CLM-55
    field: deployment.address
    value: "NonfungiblePositionManager: 0xe62a5F67516dBDBA2Aa28b1512C8Ff44E42cB5c3, non-empty code (24208 bytes) on chain 4663 at block 0x385a4a5; role labels from retained documentation/research, existence independently read here"
    class: verified
    observed_at: 2026-09-10T03:41:47.116Z
    receipt_ids:
      - R-43
    reproduction_ids:
      - REP-11
    supersedes: null
  - id: CLM-56
    field: deployment.address
    value: "GaugeRewarder: 0x8A76f49e091F21C896122B4879541930322b799D, non-empty code (2430 bytes) on chain 4663 at block 0x385a4a5; role labels from retained documentation/research, existence independently read here"
    class: verified
    observed_at: 2026-09-10T03:41:47.116Z
    receipt_ids:
      - R-43
    reproduction_ids:
      - REP-11
    supersedes: null
  - id: CLM-57
    field: deployment.address
    value: "Airdrop: 0x8f90745342622be6ABbC575Cc250Af9179cabe6f, non-empty code (2430 bytes) on chain 4663 at block 0x385a4a5; role labels from retained documentation/research, existence independently read here"
    class: verified
    observed_at: 2026-09-10T03:41:47.116Z
    receipt_ids:
      - R-43
    reproduction_ids:
      - REP-11
    supersedes: null
  - id: CLM-58
    field: deployment.address
    value: "Previously reported AlgebraFactory owner: 0x2a04c1d26767dd30f62712dcfcf1222f733a2b0e, non-empty code (171 bytes) on chain 4663 at block 0x385a4a5; role labels from retained documentation/research, existence independently read here"
    class: verified
    observed_at: 2026-09-10T03:41:47.116Z
    receipt_ids:
      - R-43
    reproduction_ids:
      - REP-11
    supersedes: null
  - id: CLM-59
    field: identity.domain
    value: DefiLlama Alandale V3 record links alandale.xyz and the LUTE address on Robinhood Chain
    class: claim
    observed_at: 2026-09-10T03:42:09.546Z
    receipt_ids:
      - R-42
    reproduction_ids:
      - REP-12
    supersedes: null
  - id: CLM-60
    field: identity.domain
    value: Alandale site and GitBook welcome crosslink their site/app/docs surfaces; identity approval remains pending
    class: verified
    observed_at: 2026-09-10T03:42:09.453Z
    receipt_ids:
      - R-44
      - R-45
    reproduction_ids:
      - REP-13
    supersedes: null
conflicts: []
events:
  - id: EVT-1
    type: onchain
    title: LUTE ERC-20 exists on chain 4663
    summary: RPC at block 58184544 returned non-empty code at 0xD1e861CC5Eee7eA88649206b74504D78CCD7AEeA. name() Alandale, symbol() LUTE, decimals 18, totalSupply 540909033.75 * 10^18, owner() the docs Minter. Docs Networks & Contracts and Llama protocol.address name this as LUTE. Blockscout HTML title lists the address on Robinhood Chain. DexScreener Alandale LUTE/WETH pairCreatedAt 2026-08-10T16:38:24Z on dexId alandale.
    account: null
    occurred_at: 2026-08-10T16:38:24Z
    observed_at: 2026-09-09T02:21:00Z
    affected_fields:
      - deployment.address
      - identity.symbol
    evidence_state: verified
    impact: material
    site_recommendation: both
    channel_recommendation: none
    receipt_ids:
      - R-4
      - R-5
      - R-6
      - R-18
    tag: launch-date
  - id: EVT-2
    type: onchain
    title: Llama lists Alandale V3 as Robinhood-only CLMM
    summary: "GET api.llama.fi/protocol/alandale-v3: category Dexs, tags CLMM, chains ['Robinhood Chain'], currentChainTvls Robinhood Chain 870422.52432, listedAt 2026-08-12T17:50:25Z, twitter alandalexyz, url https://alandale.xyz. summary/dexs/alandale-v3 total24h 8857627 total30d 122859141."
    account: null
    occurred_at: 2026-08-12T17:50:25Z
    observed_at: 2026-09-09T02:22:00Z
    affected_fields:
      - economics.metric
      - lifecycle
    evidence_state: claim
    impact: material
    site_recommendation: both
    channel_recommendation: none
    receipt_ids:
      - R-7
      - R-8
    tag: listing
  - id: EVT-3
    type: company
    title: Official site and app claim live Robinhood ve(3,3)
    summary: alandale.xyz title Alandale — the outlaw liquidity market; meta description names ve(3,3), LUTE, veLUTE, Robinhood chain. App title Overview · Alandale; footer Independent interface, not affiliated with Robinhood Markets, Inc. Reading on-chain data from Robinhood · chain 4663. Links Docs, X, Telegram, Discord.
    account: "@alandalexyz"
    occurred_at: 2026-09-09T02:18:00Z
    observed_at: 2026-09-09T02:18:00Z
    affected_fields:
      - product.mechanism
      - identity.domain
    evidence_state: claim
    impact: routine
    site_recommendation: profile
    channel_recommendation: none
    receipt_ids:
      - R-1
      - R-2
    tag: other
  - id: EVT-4
    type: company
    title: "X: Alandale revenue rank and holder fees"
    summary: "@alandalexyz status/2096233221717401898 on 2026-09-05T13:45:20Z: Alandale is top 48 of all protocols sorted by revenue in the last 24h and 7D. $53,662 went to holders in the last 7 days. $LUTE sitting at 378k$ MC. Anomaly. Linked http://defillama.com/holders-revenue. Rank and MC remain claims; holders-revenue first rows this pull did not list Alandale."
    account: "@alandalexyz"
    occurred_at: 2026-09-05T13:45:20Z
    observed_at: 2026-09-09T03:20:00Z
    affected_fields:
      - economics.metric
      - communications.status
    evidence_state: claim
    impact: routine
    site_recommendation: feed
    channel_recommendation: none
    receipt_ids:
      - R-14
      - R-27
    tag: milestone
  - id: EVT-5
    type: company
    title: "X: Coffer vote-delegation feature preview"
    summary: "@alandalexyz status/2097355384960806940 on 2026-09-08T16:04:25Z: Small preview of our next feature : Coffer. Delegate your votes and earn yield on your yield. More info coming soon."
    account: "@alandalexyz"
    occurred_at: 2026-09-08T16:04:25Z
    observed_at: 2026-09-09T03:20:00Z
    affected_fields:
      - product.mechanism
      - communications.status
    evidence_state: claim
    impact: material
    site_recommendation: feed
    channel_recommendation: none
    receipt_ids:
      - R-15
    tag: other
  - id: EVT-6
    type: company
    title: "X: 1,300,000 LUTE set aside for RVH"
    summary: "@alandalexyz status/2097375996576244206 on 2026-09-08T17:26:19Z: 1,300,000 LUTE is set aside for RVH holders and stakers. Go and see what is waiting. @RVHProtocol. Linked https://app.alandale.xyz/airdrop."
    account: "@alandalexyz"
    occurred_at: 2026-09-08T17:26:19Z
    observed_at: 2026-09-09T03:20:00Z
    affected_fields:
      - economics.metric
      - communications.status
    evidence_state: claim
    impact: material
    site_recommendation: feed
    channel_recommendation: none
    receipt_ids:
      - R-16
      - R-26
    tag: other
  - id: EVT-7
    type: company
    title: App airdrop page lists RVH among veLUTE communities
    summary: "app.alandale.xyz/airdrop (HTTP 200, chain 4663 footer): Claim your veLUTE. Eligibility copy names Uniswap and Nest LPs, veNEST lockers, $INDEX holders and RVH holders including staked RVH. Snapshot more than $1,000, or more than $500 in RVH. Distributed as locked veLUTE veNFT only; merkle root on-chain."
    account: "@alandalexyz"
    occurred_at: 2026-09-08T17:26:19Z
    observed_at: 2026-09-09T03:15:00Z
    affected_fields:
      - product.mechanism
      - economics.metric
    evidence_state: claim
    impact: material
    site_recommendation: both
    channel_recommendation: none
    receipt_ids:
      - R-26
    tag: other
receipts:
  - id: R-1
    publisher: Alandale
    title: Alandale — the outlaw liquidity market
    url: https://alandale.xyz
    published_at: null
    accessed_at: 2026-09-09T02:18:00Z
    kind: official-site
    authority: primary
    authenticity: confirmed
    supports:
      - CLM-1
      - CLM-2
      - CLM-3
      - CLM-5
      - CLM-22
      - CLM-26
      - CLM-27
      - CLM-28
      - CLM-29
      - CLM-30
      - CLM-31
      - EVT-3
    excerpt: "title Alandale — the outlaw liquidity market. meta description: Alandale is a ve(3,3) liquidity market. Swap fees are taken from the pools and handed to the outlaws who lock and vote. keywords include Robinhood chain, LUTE, veLUTE, concentrated liquidity. og:url https://alandale.xyz. Links app.alandale.xyz, gitbook, x.com/alandalexyz, t.me/alandalexyz, discord.gg/DT6kEY9kz."
  - id: R-2
    publisher: Alandale
    title: Overview · Alandale
    url: https://app.alandale.xyz/
    published_at: null
    accessed_at: 2026-09-09T02:18:00Z
    kind: official-site
    authority: primary
    authenticity: confirmed
    supports:
      - CLM-1
      - CLM-3
      - CLM-13
      - EVT-3
    excerpt: "title Overview · Alandale. meta description: The outlaw ledger — total value locked, weekly emissions, active locks and fee redistribution, live from Robinhood chain. Footer: Independent interface, not affiliated with Robinhood Markets, Inc. Reading on-chain data from Robinhood · chain 4663. Links https://alandale.gitbook.io/alandale, https://x.com/alandalexyz, https://t.me/alandalexyz, https://discord.gg/DT6kEY9kz."
  - id: R-3
    publisher: Alandale
    title: Welcome to Alandale
    url: https://alandale.gitbook.io/alandale/readme.md
    published_at: null
    accessed_at: 2026-09-09T02:19:00Z
    kind: docs
    authority: primary
    authenticity: confirmed
    supports:
      - CLM-1
      - CLM-2
      - CLM-14
      - CLM-21
      - CLM-24
      - CLM-38
    excerpt: "The outlaw liquidity market: a ve(3,3) MetaDEX for Robinhood Chain. Swap, provide liquidity (classic or concentrated), lock LUTE for veLUTE, and vote. Alandale is a fork of Fenix Finance (itself descended from Solidly / Chronos / Thena) adapted to Robinhood Chain. Official links: App app.alandale.xyz, Site alandale.xyz, GitHub Alandale-xyz."
  - id: R-4
    publisher: Alandale
    title: Networks & Contracts
    url: https://alandale.gitbook.io/alandale/reference/contracts.md
    published_at: null
    accessed_at: 2026-09-09T02:20:00Z
    kind: docs
    authority: primary
    authenticity: confirmed
    supports:
      - CLM-4
      - CLM-6
      - CLM-7
      - CLM-8
      - CLM-9
      - CLM-10
      - CLM-11
      - CLM-12
      - CLM-15
      - CLM-22
      - CLM-23
      - EVT-1
    excerpt: Robinhood Chain id 4663. RPC https://rpc.mainnet.chain.robinhood.com. Explorer robinhoodchain.blockscout.com. LUTE (ERC-20) 0xD1e861CC5Eee7eA88649206b74504D78CCD7AEeA. VotingEscrow 0xc1a79e3A7b04c3f21C6409a78Ab58A8C822bE7dC. Voter 0x4cF1c47B95031cD2bb1d102021D8Ede60392971C. Minter 0x782355E7771A9Aa0834de4Ae981DCF3b7aeC11e6. PairFactory 0xe0799417eff30A12249b8c30941BC2d7c52A0339. AlgebraFactory 0x16494A80E08Bcb9285D87b67149d7b01774D82F8. Proxied contracts listed by proxy address.
  - id: R-5
    publisher: Robinhood Chain RPC
    title: eth_chainId / eth_getCode / eth_call on chain 4663
    url: https://rpc.mainnet.chain.robinhood.com
    published_at: null
    accessed_at: 2026-09-09T02:21:00Z
    kind: explorer
    authority: onchain
    authenticity: confirmed
    supports:
      - CLM-4
      - CLM-5
      - CLM-6
      - CLM-7
      - CLM-8
      - CLM-9
      - CLM-10
      - CLM-11
      - CLM-12
      - CLM-15
      - CLM-16
      - CLM-20
      - CLM-22
      - CLM-23
      - CLM-28
      - EVT-1
    excerpt: eth_chainId 0x1237. eth_blockNumber 0x377d360 (58184544). LUTE 0xD1e861… name Alandale symbol LUTE decimals 18 totalSupply 540909033.75e18 owner Minter 0x782355…. AlgebraFactory owner 0x2a04c1d2… with 171 bytes of code. Non-empty code on the docs contract table as recorded in REP-1–REP-4.
  - id: R-6
    publisher: Blockscout
    title: Address page 0xD1e861…AEeA
    url: https://robinhoodchain.blockscout.com/address/0xD1e861CC5Eee7eA88649206b74504D78CCD7AEeA
    published_at: null
    accessed_at: 2026-09-09T02:19:00Z
    kind: explorer
    authority: onchain
    authenticity: confirmed
    supports:
      - CLM-6
      - EVT-1
    excerpt: "HTTP 200 HTML title: Robinhood Chain address details for 0xD1e861CC5Eee7eA88649206b74504D78CCD7AEeA | Blockscout. api/v2/addresses for the same hash returned Cloudflare 403, so is_verified was not read."
  - id: R-7
    publisher: DefiLlama
    title: protocol/alandale-v3
    url: https://api.llama.fi/protocol/alandale-v3
    published_at: null
    accessed_at: 2026-09-09T02:18:00Z
    kind: third-party-data
    authority: aggregator
    authenticity: unconfirmed
    supports:
      - CLM-3
      - CLM-4
      - CLM-6
      - CLM-12
      - CLM-13
      - CLM-14
      - CLM-17
      - CLM-21
      - CLM-23
      - EVT-2
    excerpt: "name Alandale V3 symbol LUTE url https://alandale.xyz twitter alandalexyz category Dexs chains ['Robinhood Chain'] address robinhood:0xD1e861CC5Eee7eA88649206b74504D78CCD7AEeA description: ve(3,3) DEX on Robinhood Chain. currentChainTvls Robinhood Chain 870422.52432 listedAt 1786557025 tags ['CLMM'] audits 0 parentProtocol parent#alandale."
  - id: R-8
    publisher: DefiLlama
    title: summary/dexs/alandale-v3
    url: https://api.llama.fi/summary/dexs/alandale-v3
    published_at: null
    accessed_at: 2026-09-09T02:22:00Z
    kind: third-party-data
    authority: aggregator
    authenticity: unconfirmed
    supports:
      - CLM-12
      - CLM-18
      - EVT-2
    excerpt: displayName Alandale V3 total24h 8857627 total7d 67663299 total30d 122859141 totalAllTime 122877409 chains ['Robinhood Chain'] parentProtocol parent#alandale methodologyURL https://github.com/DefiLlama/dimension-adapters/blob/master/dexs/alandale
  - id: R-9
    publisher: DefiLlama
    title: protocol/alandale-v2
    url: https://api.llama.fi/protocol/alandale-v2
    published_at: null
    accessed_at: 2026-09-09T02:18:00Z
    kind: third-party-data
    authority: aggregator
    authenticity: unconfirmed
    supports:
      - CLM-13
      - CLM-19
    excerpt: name Alandale V2 symbol LUTE url https://alandale.xyz twitter alandalexyz chains ['Robinhood Chain'] address robinhood:0xD1e861CC5Eee7eA88649206b74504D78CCD7AEeA currentChainTvls Robinhood Chain 52617.77404 listedAt 1786557031.
  - id: R-10
    publisher: DefiLlama
    title: protocol/alandale parent
    url: https://api.llama.fi/protocol/alandale
    published_at: null
    accessed_at: 2026-09-09T02:22:00Z
    kind: third-party-data
    authority: aggregator
    authenticity: unconfirmed
    supports:
      - CLM-19
    excerpt: id parent#alandale name Alandale symbol LUTE url https://alandale.xyz twitter alandalexyz address robinhood:0xD1e861CC5Eee7eA88649206b74504D78CCD7AEeA currentChainTvls Robinhood Chain 923039 otherProtocols ['Alandale', 'Alandale V3', 'Alandale V2'].
  - id: R-11
    publisher: DefiLlama
    title: summary/fees/alandale-v3
    url: https://api.llama.fi/summary/fees/alandale-v3
    published_at: null
    accessed_at: 2026-09-09T02:22:00Z
    kind: third-party-data
    authority: aggregator
    authenticity: unconfirmed
    supports:
      - CLM-18
    excerpt: displayName Alandale V3 total24h 4836 total7d 40686 total30d 86231.49 chains ['Robinhood Chain'].
  - id: R-12
    publisher: GitHub
    title: Alandale-xyz/alandale-contracts
    url: https://github.com/Alandale-xyz/alandale-contracts
    published_at: 2026-08-12T15:32:42Z
    accessed_at: 2026-09-09T02:20:00Z
    kind: repository
    authority: primary
    authenticity: confirmed
    supports:
      - CLM-2
      - CLM-21
      - CLM-24
    excerpt: "GET api.github.com/orgs/Alandale-xyz login Alandale-xyz html_url https://github.com/Alandale-xyz public_repos 1. Repo Alandale-xyz/alandale-contracts description Core contracts of Alandale Exchange homepage https://app.alandale.xyz/ default_branch main pushed_at 2026-08-12T02:31:49Z. README: ve(3,3) protocol behind Alandale, token LUTE; Algebra CL vendored in lib/algebra."
  - id: R-13
    publisher: "@alandalexyz"
    title: X profile Alandale
    url: https://x.com/alandalexyz
    published_at: null
    accessed_at: 2026-09-09T02:28:00Z
    kind: social
    authority: social
    authenticity: confirmed
    supports:
      - CLM-2
      - CLM-3
      - CLM-25
      - CLM-26
      - CLM-27
      - CLM-28
      - CLM-30
      - CLM-31
    excerpt: "title Alandale (@alandalexyz) / X. twitter:description: The Outlaw Liquidity Hub - Live on Robinhood Chain. veTokenomics returning 100% of fees back to the people. twitter:data1 Posts 322. twitter:data2 Joined July 2026. HTML contains https://alandale.xyz/. r.jina.ai Latest search Cloudflare 403."
  - id: R-14
    publisher: "@alandalexyz"
    title: status/2096233221717401898 revenue rank
    url: https://x.com/alandalexyz/status/2096233221717401898
    published_at: 2026-09-05T13:45:20Z
    accessed_at: 2026-09-09T03:20:00Z
    kind: social
    authority: social
    authenticity: confirmed
    supports:
      - EVT-4
      - CLM-40
    excerpt: "created_at_ms 1788615920000. Field-desk verified quotes: Alandale is top 48 of all protocols sorted by revenue in the last 24h and 7D. $53,662 went to holders in the last 7 days. $LUTE sitting at 378k$ MC. Anomaly. Profile HTML also had: Directly above @avax. Above @rendernetwork. Above @Aptos. Above @HyperSwapX. That is 17% of https://t.co/cTFrhOhoOV"
  - id: R-15
    publisher: "@alandalexyz"
    title: status/2097355384960806940 Coffer preview
    url: https://x.com/alandalexyz/status/2097355384960806940
    published_at: 2026-09-08T16:04:25Z
    accessed_at: 2026-09-09T03:20:00Z
    kind: social
    authority: social
    authenticity: confirmed
    supports:
      - EVT-5
    excerpt: "Field-desk verified quote: Small preview of our next feature : Coffer 🗝️ Delegate your votes and earn yield on your yield 💰 More info coming soon. Profile HTML created_at_ms 1788883465000."
  - id: R-16
    publisher: "@alandalexyz"
    title: status/2097375996576244206 LUTE for RVH
    url: https://x.com/alandalexyz/status/2097375996576244206
    published_at: 2026-09-08T17:26:19Z
    accessed_at: 2026-09-09T03:20:00Z
    kind: social
    authority: social
    authenticity: confirmed
    supports:
      - EVT-6
      - CLM-39
      - CLM-41
    excerpt: "Field-desk verified quote: 1,300,000 LUTE is set aside for RVH holders and stakers. Go and see what is waiting. @RVHProtocol. Linked https://app.alandale.xyz/airdrop. Profile HTML created_at_ms 1788888379000."
  - id: R-17
    publisher: Alandale
    title: LUTE Tokenomics
    url: https://alandale.gitbook.io/alandale/alandale-explained/tokenomics.md
    published_at: null
    accessed_at: 2026-09-09T02:20:00Z
    kind: docs
    authority: primary
    authenticity: confirmed
    supports:
      - CLM-20
    excerpt: LUTE is the liquid ERC-20 emission and governance token (18 decimals). veLUTE is vote-escrowed LUTE, a veNFT. Total initial supply 500,000,000 LUTE, minted at deployment. Ongoing issuance is the weekly emission from the Minter. mint() is owner-only; ownership belongs to the Minter contract.
  - id: R-18
    publisher: DexScreener
    title: LUTE token pairs on Robinhood
    url: https://api.dexscreener.com/latest/dex/tokens/0xD1e861CC5Eee7eA88649206b74504D78CCD7AEeA
    published_at: null
    accessed_at: 2026-09-09T02:24:00Z
    kind: third-party-data
    authority: aggregator
    authenticity: unconfirmed
    supports:
      - EVT-1
    excerpt: dexId alandale pair 0xFA0b90E406C9A6F08aD2cbB4B367B063D7cf46C2 LUTE/WETH liquidity.usd 155320.2 volume.h24 5689.66 marketCap 425533. info.websites alandale.xyz, alandale.gitbook.io/alandale, app.alandale.xyz. socials x.com/alandalexyz, t.me/alandalexyz, discord.com/invite/QTQdSCm2b. Separate pairCreatedAt 2026-08-10T16:38:24Z on 0x426e3319…2B2F.
  - id: R-19
    publisher: DexScreener
    title: CRUMBS token pairs on Robinhood
    url: https://api.dexscreener.com/latest/dex/tokens/0x80baa4b3bfac6f4978700df824b1b3d98e889136
    published_at: null
    accessed_at: 2026-09-09T02:24:00Z
    kind: third-party-data
    authority: aggregator
    authenticity: unconfirmed
    supports:
      - CLM-32
      - CLM-47
      - CLM-48
    excerpt: baseToken Crumbs / CRUMBS 0x80bAa4b3bfAC6f4978700dF824B1B3d98e889136 chainId robinhood. Top uniswap pair 0x25e53c08…ed09 vs ETH liquidity.usd 175818.37 volume.h24 15621259.19 marketCap 3507410 pairCreatedAt 2026-09-08T23:57:56Z. info.websites https://crumbs.family/ socials x.com/crumbsfamily t.me/crumbsfamily. Not a census slug; no research/inbox/packets/crumbs/.
  - id: R-20
    publisher: DexScreener
    title: Dividend Hound token pairs on Robinhood
    url: https://api.dexscreener.com/latest/dex/tokens/0x7efa92fb3657d1fe086c5b178c3e6f1e7cdc2e19
    published_at: null
    accessed_at: 2026-09-09T02:24:00Z
    kind: third-party-data
    authority: aggregator
    authenticity: unconfirmed
    supports:
      - CLM-33
    excerpt: baseToken Dividend Hound / Hound 0x7efa92fB3657d1fE086c5b178c3e6f1e7cDc2e19 chainId robinhood. Top uniswap pair 0x805f3e3b…3537 vs SPY liquidity.usd 93412.01 volume.h24 2267791.35 marketCap 1277977 pairCreatedAt 2026-09-07T18:55:34Z. socials x.com/DividendHoundRH. Not a census slug; no packets/hound/.
  - id: R-21
    publisher: DefiLlama
    title: protocol/ample
    url: https://api.llama.fi/protocol/ample
    published_at: null
    accessed_at: 2026-09-09T02:23:00Z
    kind: third-party-data
    authority: aggregator
    authenticity: unconfirmed
    supports:
      - CLM-34
    excerpt: name Ample twitter AmpleHQ url https://ample.money/ category Yield Lottery. currentChainTvls Robinhood Chain 2123.44319 vs Base 4411562.92735. Prize-linked savings; RH slice tiny versus Base. Not a census slug.
  - id: R-22
    publisher: DefiLlama
    title: protocol/t3tris-finance
    url: https://api.llama.fi/protocol/t3tris-finance
    published_at: null
    accessed_at: 2026-09-09T02:23:00Z
    kind: third-party-data
    authority: aggregator
    authenticity: unconfirmed
    supports:
      - CLM-35
    excerpt: "name T3tris Finance twitter 0xT3tris url https://t3tris.finance/ category Onchain Capital Allocator. currentChainTvls Robinhood Chain 787554.70321 vs Arbitrum 12525020.09177. Description: zero-fee, permissionless vault infrastructure. Not a census slug."
  - id: R-23
    publisher: DefiLlama
    title: protocol/gami-labs
    url: https://api.llama.fi/protocol/gami-labs
    published_at: null
    accessed_at: 2026-09-09T02:23:00Z
    kind: third-party-data
    authority: aggregator
    authenticity: unconfirmed
    supports:
      - CLM-36
    excerpt: name Gami Labs twitter GamiLabs url https://gamilabs.io/ category Risk Curators. currentChainTvls Robinhood Chain 577413.22184 vs Ethereum 21043328.38528 and Stellar 28693466.08182. Not a census slug.
  - id: R-24
    publisher: DefiLlama
    title: protocol/accountable
    url: https://api.llama.fi/protocol/accountable
    published_at: null
    accessed_at: 2026-09-09T02:23:00Z
    kind: third-party-data
    authority: aggregator
    authenticity: unconfirmed
    supports:
      - CLM-37
    excerpt: name Accountable twitter AccountableData url https://accountable.capital/ category Uncollateralized Lending. currentChainTvls Robinhood Chain 498914.69533 and Robinhood Chain-borrowed 2010635.38672. Census meridian already maps AccountableYield on 4663; this is not a new native machine. Not a census slug of its own.
  - id: R-25
    publisher: DefiLlama
    title: protocol/fenix-finance
    url: https://api.llama.fi/protocol/fenix-finance
    published_at: null
    accessed_at: 2026-09-09T02:23:00Z
    kind: third-party-data
    authority: aggregator
    authenticity: unconfirmed
    supports:
      - CLM-38
    excerpt: "id parent#fenix-finance name Fenix Finance symbol FNX url https://www.fenixfinance.io twitter FenixFinance address blast:0x52f847356b38720b55ee18cb3e094ca11c85a192 description: advanced decentralised exchange built for Blast. currentChainTvls Blast 16315. No Robinhood Chain key."
  - id: R-26
    publisher: Alandale
    title: Airdrop · Alandale
    url: https://app.alandale.xyz/airdrop
    published_at: null
    accessed_at: 2026-09-09T03:15:00Z
    kind: official-site
    authority: primary
    authenticity: confirmed
    supports:
      - CLM-39
      - CLM-41
      - EVT-6
      - EVT-7
    excerpt: title Airdrop · Alandale. Claim your veLUTE. Rewarding Uniswap & Nest LPs, veNEST lockers, $INDEX holders and RVH holders. Eligible wallets receive allocation as a locked veLUTE veNFT. Snapshot more than $1,000, or more than $500 in RVH. RVH holders including staked RVH. veLUTE only; merkle root on-chain. Footer chain 4663.
  - id: R-27
    publisher: DefiLlama
    title: Holders Revenue Rankings
    url: https://defillama.com/holders-revenue
    published_at: null
    accessed_at: 2026-09-09T03:16:00Z
    kind: third-party-data
    authority: aggregator
    authenticity: unconfirmed
    supports:
      - CLM-40
      - EVT-4
    excerpt: "GET defillama.com/holders-revenue HTTP 200, title Holders Revenue Rankings - DefiLlama. First visible 24h rows this pull: Canton, Hyperliquid, Pons, Tron, Pump, Uniswap, StonkFun, Aerodrome. Alandale was not in those first rows; rank 48 and 378k MC were not reproduced from this page."
  - id: R-28
    publisher: "@RHDaily__"
    title: status/2096468811872612422 Ample live
    url: https://x.com/RHDaily__/status/2096468811872612422
    published_at: 2026-09-05
    accessed_at: 2026-09-09T03:20:00Z
    kind: social
    authority: social
    authenticity: confirmed
    supports:
      - CLM-34
      - CLM-46
    excerpt: "@AmpleHQ went live on Robinhood Chain, allowing users to deposit USDG and earn weekly prizes."
  - id: R-29
    publisher: "@RobinhoodCrypto"
    title: status/2097434901821726893 stock-token TVL
    url: https://x.com/RobinhoodCrypto/status/2097434901821726893
    published_at: 2026-09-08
    accessed_at: 2026-09-09T03:20:00Z
    kind: social
    authority: social
    authenticity: confirmed
    supports:
      - CLM-52
    excerpt: $150M in Robinhood Stock Tokens TVL on Robinhood Chain. Chain-level; not an Alandale claim.
  - id: R-30
    publisher: "@RobinHubHB"
    title: status/2097441095034769844 Hookr launches
    url: https://x.com/RobinHubHB/status/2097441095034769844
    published_at: 2026-09-08
    accessed_at: 2026-09-09T03:20:00Z
    kind: social
    authority: social
    authenticity: confirmed
    supports:
      - CLM-51
      - CLM-52
    excerpt: "Third-party Hookr launchpad claim: 115 launches; ETH-paired fees funding Flywheel Burn and $HOOKR buybacks. Census slug hookr already exists. Not an Alandale event."
  - id: R-31
    publisher: "@ArrowFinanceio"
    title: status/2095948458003755158 aUSD/USDG incentives
    url: https://x.com/ArrowFinanceio/status/2095948458003755158
    published_at: 2026-09-04
    accessed_at: 2026-09-09T03:20:00Z
    kind: social
    authority: primary
    authenticity: confirmed
    supports:
      - CLM-52
    excerpt: "aUSD/USDG pool incentives live on UP ~22% APR in $UP. Pool URL https://up33.xyz/liquidity/pool/v3/0x29e3f3d9891cacf213361bcbcb7728970d53baa8. Census slugs arrow and up; not this slug. RPC: that pool address has code (92 hex chars, EIP-1167-sized)."
  - id: R-32
    publisher: "@deltaliquidity"
    title: status/2097404375652270499 buyback/burn
    url: https://x.com/deltaliquidity/status/2097404375652270499
    published_at: 2026-09-08
    accessed_at: 2026-09-09T03:20:00Z
    kind: social
    authority: primary
    authenticity: confirmed
    supports:
      - CLM-52
    excerpt: 0.241% DELTA supply bought back/burned; 9.96 ETH (~$24,938); 80% revenue to weekly buybacks. Profile CA 0xe8ffd7e24187f72afb08d75b1bb13088a989a791. Census slug delta; percentages remain claims.
  - id: R-33
    publisher: "@deltaliquidity"
    title: status/2097405080777683243 burn tx
    url: https://x.com/deltaliquidity/status/2097405080777683243
    published_at: 2026-09-08
    accessed_at: 2026-09-09T03:20:00Z
    kind: social
    authority: primary
    authenticity: confirmed
    supports:
      - CLM-52
    excerpt: Burn TX https://robinhoodchain.blockscout.com/tx/0xe4170258ab03eb16f5cf7d6684b4ff746de9acbf87c1ad6c4e0d836208249776. Census slug delta; not an Alandale event.
  - id: R-34
    publisher: Robinhood Chain RPC
    title: Delta buyback tx 0x436bdb4c…86b52
    url: https://robinhoodchain.blockscout.com/tx/0x436bdb4cb20fee8c57aeb9bd3433a45fe77f9930d473bffb8563984d52186b52
    published_at: null
    accessed_at: 2026-09-09T03:18:00Z
    kind: explorer
    authority: onchain
    authenticity: confirmed
    supports:
      - CLM-52
    excerpt: "eth_getTransactionByHash exists: from 0x266311a44e70363b3d168bcb38cf38cbf2ccc51f to 0x8876789976decbfcbbbe364623c63652db8c0904 block 0x3688a81. Amounts and 0.241% share not decoded this pass. Census delta."
  - id: R-35
    publisher: Robinhood Chain RPC
    title: Delta burn tx 0xe4170258…9776
    url: https://robinhoodchain.blockscout.com/tx/0xe4170258ab03eb16f5cf7d6684b4ff746de9acbf87c1ad6c4e0d836208249776
    published_at: null
    accessed_at: 2026-09-09T03:18:00Z
    kind: explorer
    authority: onchain
    authenticity: confirmed
    supports:
      - CLM-52
    excerpt: "eth_getTransactionByHash exists: from 0x266311a44e70363b3d168bcb38cf38cbf2ccc51f to 0xe8ffd7e24187f72afb08d75b1bb13088a989a791 block 0x3688c73. eth_getCode on that CA non-empty (10550 hex chars). Burn amount not decoded. Census delta."
  - id: R-36
    publisher: "@ClutchMarkets"
    title: status/2097316076560191714 Smart LP LIVE
    url: https://x.com/ClutchMarkets/status/2097316076560191714
    published_at: 2026-09-08
    accessed_at: 2026-09-09T03:20:00Z
    kind: social
    authority: primary
    authenticity: confirmed
    supports:
      - CLM-52
    excerpt: Smart LP LIVE; single-sided staking / stock tokens; 67 assets; URL https://stonkbrokers.io/locker/smart-lp. Census slug stonkbroker; not this slug.
  - id: R-37
    publisher: "@ClutchMarkets"
    title: status/2096984415226200435 V2 UX
    url: https://x.com/ClutchMarkets/status/2096984415226200435
    published_at: 2026-09-08
    accessed_at: 2026-09-09T03:20:00Z
    kind: social
    authority: primary
    authenticity: confirmed
    supports:
      - CLM-52
    excerpt: V2 UX linked to https://stonkbrokers.io. Census slug stonkbroker; not an Alandale event.
  - id: R-38
    publisher: "@bankrbot"
    title: status/2097505326811742539 CRUMBS on robinhood
    url: https://x.com/bankrbot/status/2097505326811742539
    published_at: 2026-09-08
    accessed_at: 2026-09-09T03:20:00Z
    kind: social
    authority: social
    authenticity: confirmed
    supports:
      - CLM-32
      - CLM-44
      - CLM-47
      - CLM-48
      - CLM-49
      - CLM-50
    excerpt: live on robinhood; official crumbsfamily posted this CA; not a bankr launch; contract unverified; launched via pons v2; launch TX 0xf49fbbb1469e7b807c88f55f28c23e859c3a445c7b274578899451b9f5b91bf9; hours-old robinhood meme with a consumer-app wrapper. CA 0x80baa4b3bfac6f4978700df824b1b3d98e889136.
  - id: R-39
    publisher: "@GoldenDogHunter"
    title: status/2097510124017664368 crumbsfamily cashback
    url: https://x.com/GoldenDogHunter/status/2097510124017664368
    published_at: 2026-09-08
    accessed_at: 2026-09-09T03:20:00Z
    kind: social
    authority: social
    authenticity: confirmed
    supports:
      - CLM-32
      - CLM-45
    excerpt: cashback project claim @crumbsfamily. Third-party; mechanism not reproduced this round.
  - id: R-40
    publisher: Robinhood Chain RPC
    title: eth_getCode / eth_call CRUMBS
    url: https://rpc.mainnet.chain.robinhood.com
    published_at: null
    accessed_at: 2026-09-09T03:18:00Z
    kind: explorer
    authority: onchain
    authenticity: confirmed
    supports:
      - CLM-32
      - CLM-42
      - CLM-49
    excerpt: eth_chainId 0x1237. eth_blockNumber 0x377eee9 (58187369). 0x80baa4b3bfac6f4978700df824b1b3d98e889136 eth_getCode 6498 hex chars. name() Crumbs symbol() CRUMBS decimals() 18. Not an Alandale deployment.
  - id: R-41
    publisher: Robinhood Chain RPC
    title: CRUMBS launch tx 0xf49fbbb1…b91bf9
    url: https://robinhoodchain.blockscout.com/tx/0xf49fbbb1469e7b807c88f55f28c23e859c3a445c7b274578899451b9f5b91bf9
    published_at: null
    accessed_at: 2026-09-09T03:18:00Z
    kind: explorer
    authority: onchain
    authenticity: confirmed
    supports:
      - CLM-32
      - CLM-43
    excerpt: eth_getTransactionByHash from 0x00607ec8622cf64cf6735090891d5870a1598fe4 to 0xe33E9E479dF8802cb0866d5d05258bEc4cF62948 block 58100490 selector 0xf85f8e41. Receipt status 0x1; logs include CRUMBS. to has code (8834 hex chars). Prior pons packets name that address PonsV2LaunchAndBuy.
  - id: R-42
    publisher: DefiLlama
    title: Alandale V3 identity record, recovery check
    url: https://api.llama.fi/protocol/alandale-v3
    published_at: null
    accessed_at: 2026-09-10T03:42:09.546Z
    kind: third-party-data
    authority: aggregator
    authenticity: confirmed
    supports:
      - CLM-59
    excerpt: name Alandale V3; url https://alandale.xyz; address robinhood:0xD1e861CC5Eee7eA88649206b74504D78CCD7AEeA; chains [Robinhood Chain].
  - id: R-43
    publisher: Robinhood Chain RPC
    title: Pinned-block deployment existence, Codex recovery
    url: https://rpc.mainnet.chain.robinhood.com
    published_at: null
    accessed_at: 2026-09-10T03:41:47.116Z
    kind: explorer
    authority: onchain
    authenticity: confirmed
    supports:
      - CLM-53
      - CLM-54
      - CLM-55
      - CLM-56
      - CLM-57
      - CLM-58
    excerpt: "Chain ID 0x1237 (4663), pinned block 0x385a4a5. Six address-specific eth_getCode reads returned 14446, 12286, 24208, 2430, 2430 and 171 bytes respectively; exact address/result mapping is retained in REP-11 and CLM-53 through CLM-58. Code existence only; no source, admin or audit verification."
  - id: R-44
    publisher: Alandale
    title: Site crosslinks, Codex recovery
    url: https://alandale.xyz
    published_at: null
    accessed_at: 2026-09-10T03:42:09.320Z
    kind: official-site
    authority: primary
    authenticity: confirmed
    supports:
      - CLM-60
    excerpt: Links include app.alandale.xyz and alandale.gitbook.io/alandale; page describes locking LUTE and voting for pool emissions.
  - id: R-45
    publisher: Alandale
    title: Welcome crosslinks, Codex recovery
    url: https://alandale.gitbook.io/alandale/readme.md
    published_at: null
    accessed_at: 2026-09-10T03:42:09.453Z
    kind: docs
    authority: primary
    authenticity: confirmed
    supports:
      - CLM-60
    excerpt: Official links table includes app.alandale.xyz, alandale.xyz, and github.com/Alandale-xyz.
gaps:
  - priority: P0
    question: Which documented addresses are ERC-1967 proxies, and what are the live implementations and admin keys?
    checked: Docs say proxied contracts are listed by proxy address; several ve(3,3) core addresses share 2430-byte bytecode; EIP-1967 slots were not read; Blockscout API v2 403, 2026-09-09
    next: eth_getStorageAt implementation/admin slots; retry Blockscout API v2 when Cloudflare allows it
  - priority: P0
    question: Is there an audit whose scope matches the 4663 deployments?
    checked: Llama audits 0; site, GitBook welcome/contracts/tokenomics, and GitHub org/repo README named no audit report this round
    next: Search auditor indexes if a later post names a firm; read any report added under docs
  - priority: P1
    question: Who holds AlgebraFactory owner 0x2a04c1d2…2b0e, and can that key change fees or factories without delay?
    checked: owner() returned that address with 171 bytes of code; no name() on the factory; source unread
    next: Identify the owner contract on explorer and read timelock/AccessManager if present
  - priority: P1
    question: Do DexScreener discord.com/invite/QTQdSCm2b and app footer discord.gg/DT6kEY9kz land on the same guild?
    checked: App footer DT6kEY9kz; DexScreener LUTE info.socials QTQdSCm2b; both unexpanded this round
    next: Resolve both invites and record whether they are one server
  - priority: P2
    question: Latest posts since 2026-09-04 from @RHDaily__, @0xSammy, @ahboyash, @andrewtalksdefi, @HoodInsider_ that name Alandale?
    checked: "Signed-in field-desk Latest through 2026-09-08: @RHDaily__ 2096468811872612422 names Ample/USDG, not Alandale. No Alandale string in the dated follow-list posts handed this round. @alandalexyz yielded the revenue, Coffer, and RVH posts already in EVT-4–EVT-6."
    next: "Keep Latest from: @alandalexyz and RVH/Coffer follow-ups; do not ingest census-other follow-list posts into the Alandale feed"
  - priority: P2
    question: Should crumbs, rvh, dividend-hound, ample, t3tris-finance, gami-labs, or accountable become their own seed assignments?
    checked: None of those slugs are in content/census.yaml or research/inbox/packets/<slug>/ this round. CRUMBS CA reproduced on 4663 via PonsV2LaunchAndBuy; not a machine. @RVHProtocol is already watch in accounts.yaml with no census row. Ample USDG-live is a RHDaily claim. meridian already maps AccountableYield.
    next: Controller assignment; do not compile candidates from this packet into census rows
  - area: team
    priority: P1
    question: Which named individuals control Alandale and its privileged contracts?
    checked: Codex read alandale.xyz and GitBook readme.md, HTTP 200, 2026-09-10 03:42 UTC. These pages describe the protocol and organization links but did not identify individual controllers. No inference from an organization handle to personal identity.
    next: "Targeted verifier task: inspect repository maintainers and authoritative disclosures, then crosslink named controllers; otherwise retain unknown."
  - area: activity
    priority: P1
    question: How many distinct users actively use Alandale, separate from aggregate liquidity or trading volume?
    checked: DefiLlama protocol/alandale-v3 response on 2026-09-10 03:42 UTC provides chain TVL but no defined active-user window. Historical Sep 9 volume claims remain dated historical observations, not new activity verification.
    next: Reproduce a bounded transaction/user window from attributed pools using free chain reads or a supplied Dune export; document pool attribution and exclusions before comparing.
---

# Alandale — research packet

## What it is

Alandale is a ve(3,3) DEX on Robinhood Chain. Traders swap through classic AMM pools or Algebra concentrated-liquidity pools. Liquidity providers earn LUTE emissions. Holders lock LUTE into veLUTE and vote each epoch on which pools receive those emissions. Official docs and the app say trading fees and bribes from a pool go to the lockers who voted for it. The app footer states it reads on-chain data from Robinhood, chain 4663.

Themes: ve33, clmm, amm, vote-escrow, robinhood-native

TL;DR: Robinhood-only ve(3,3) CLMM: lock LUTE for veLUTE, vote emissions, collect pool fees. Sep 9 Llama V3 TVL $870k; preceding 24h volume $8.86m [CLM-1 CLM-12 CLM-18].

## Why it matters

- Thesis: a Robinhood-only ve(3,3) venue: lock LUTE for veLUTE, vote weekly emissions, and collect that pool's fees. [claim R-1 R-3]
- Traction (Sep 9, 2026): Llama Alandale V3 Robinhood TVL $870,422.52 and 24h DEX volume $8,857,627; V2 TVL $52,617.77 on the same chain. [claim R-7 R-8 R-9]
- Catalyst: Official X and the airdrop app say 1,300,000 LUTE is set aside for RVH holders and stakers. [claim R-16 R-26]

## What could go wrong

- Several documented ve(3,3) core addresses share 2430-byte bytecode; implementations were not read. [verified R-5]
- Llama audits field is 0; no audit report found on the site, docs, or GitHub this round. [claim R-7 R-12]
- LUTE owner() is the Minter; AlgebraFactory owner is a small unread contract. [verified R-5]

## Operations log

- 2026-09-09: collector grok-bot. Gap hunted: Alandale / LUTE / veLUTE, absent from content/census.yaml and research/inbox/packets/alandale/ on main SHA c9fc96756d44b69870b33c6ee8f85995eb53f32e. Opened alandale.xyz, app.alandale.xyz, app.alandale.xyz/airdrop, GitBook welcome/contracts/tokenomics, GitHub org/repo, Llama protocol and summary/dexs/fees, holders-revenue, Robinhood RPC with browser UA, Blockscout HTML (API v2 403), DexScreener LUTE/CRUMBS/Hound, Llama ample / t3tris-finance / gami-labs / accountable / fenix-finance.
- X: signed-in field-desk Latest (verified posts) folded this pass. @alandalexyz: 2096233221717401898 revenue/378k MC/holders-revenue; 2097355384960806940 Coffer; 2097375996576244206 1.3M LUTE for RVH linking app.alandale.xyz/airdrop. Follow-list not named Alandale: @RHDaily__ Ample USDG (discovery), @RobinhoodCrypto stock-token TVL, @RobinHubHB Hookr (third-party; census hookr), @ArrowFinanceio aUSD/USDG on UP (census arrow/up), @deltaliquidity buyback/burn (census delta; two txs exist on RPC), @ClutchMarkets Smart LP (census stonkbroker).
- Discovery: crumbs is a candidate only, not a machine. RPC name Crumbs / CRUMBS at 0x80baa4b3…9136; launch tx 0xf49fbbb1… to PonsV2LaunchAndBuy 0xe33E9E…, not a Bankr factory. @bankrbot and @GoldenDogHunter stay class claim except the RPC token and tx. Candidate rvh from official airdrop copy; @RVHProtocol already watch. Did not propose ram / giga / kipseli / hookr / delta / arrow / up / stonkbroker. Did not write content/**.

### Controller recovery — 2026-09-10

Derived by Codex from Grok collector PR #95, research/inbox/packets/alandale/WORK-20260908-grok-bot-alandale.md@c62b4a3e48c98ef7a0f08ef1286613b8a85f52e5. The original remains immutable in Git history; this packet takes responsibility for the bounded recovery, not for a new Grok run. No accepted prior Alandale packet exists, so prior_packet remains null. Claims CLM-1–CLM-52, receipts R-1–R-41, reproductions REP-1–REP-10 and all old metric/event observation dates are retained as collector-attributed historical evidence, not represented as fresh Codex checks.

New Codex work: REP-11–REP-13 and R-42–R-45 reproduce the six omitted address-specific code checks, the aggregator identity endpoint and site/docs crosslinks. CLM-53–CLM-60 and explicit team/activity searched gaps satisfy missing structural fields. Existing proxy/admin, audit, owner-control and community-link gaps remain unresolved; passing the seed floor is not security or editorial approval. The old TL;DR numbers are explicitly dated Sep 9. No paid calls, publication changes, identity approval, candidate seeding or scheduler changes.
