---
# Packet v2 (docs/research-system.md §5). Seed with Icarus What-it-is + events.
contract_version: proofline-research-v2
work_id: WORK-20260903-grok-heavy-icarus-research
producer: grok-heavy
role: collector
base_sha: 334ca0619aa62e922da83f46de021f06d12348cf
slug: dogecoin-tsla
name: DOGECOIN
packet_tier: seed
as_of: 2026-09-03T04:12:00Z
prior_packet: null
supersedes: null
owned_slugs: [dogecoin-tsla]
allowed_paths:
  - research/inbox/packets/dogecoin-tsla/WORK-20260903-grok-heavy-icarus-research.md

identity:
  canonical_name: DOGECOIN
  aliases: []
  symbols: [DOGECOIN]
  entity_kind: token
  chain_scope: robinhood-native
  official_domain: "NULL — DexScreener info.websites is the LONG token page app.long.xyz/tokens/0x51d3bbe1… not a project domain; Gecko token info websites []; census LONG already owns app.long.xyz"
  official_handle: "NULL — Gecko token info twitter_handle null; DexScreener info.socials lists x.com/dogeteslacoin; GET x.com/dogeteslacoin returned Account suspended; X user search for dogeteslacoin returned unrelated @DogeTeslacoin22 (2022 Korean posts, 28 followers); flag unconfirmed-official"
  repository: "NULL — no GitHub org or repository URL on DexScreener, Gecko token info, Blockscout, or X search this pass"
  possible_matches:
    - slug: long
      signals: [shared-deployer]
      contrary_signals:
        - "Census LONG is the stock-paired factory at app.long.xyz / @longdotxyz with LongLauncher 0x22e9…eeED"
        - "DOGECOIN is the ERC-20 at 0x51d3bBe1…1E18 created through that launcher; entity_kind token, not protocol"
        - "DexScreener websites is the LONG token page, which census LONG already owns"
    - slug: doggie
      signals: [other]
      contrary_signals:
        - "Packed doggie is Doggie Mode / DOGGIE at 0xa9eF…1e18, Uniswap v4 DOGGIE/TSLA pair 0x141b…f3f8, site doggiemode.com / @DoggieMode"
        - "This DOGECOIN is name/symbol DOGECOIN at 0x51d3bBe1…1E18, Uniswap v4 DOGECOIN/TSLA pair 0x4c02…86d8"
        - "Same TSLA rail 0x322F…3b2d and same LongLauncher; different CA, name, pair id, and surfaces"
    - slug: optimus
      signals: [other]
      contrary_signals:
        - "Packed optimus is Optimus Hood / OPTIMUS at 0xB5D553…1E18, Uniswap v4 OPTIMUS/TSLA pair 0xef34…d4c3"
        - "This DOGECOIN is 0x51d3bBe1…1E18 pair 0x4c02…86d8"
        - "Same TSLA rail and LongLauncher; different CA, name, pair id"
    - slug: artificial-inu
      signals: [shared-deployer]
      contrary_signals:
        - "Census Artificial Inu is $AI at 0x2E8c…1e18 paired to NVDA via LongLauncher, site artificialinu.com / @ArtificiallyInu"
        - "DOGECOIN is 0x51d3bBe1…1E18 paired to TSLA 0x322F…3b2d; different CA, quote, name and handle"
        - "No shared domain or reproduced address"
    - slug: bankr
      signals: [other]
      contrary_signals:
        - "Census Bankr is an agent execution surface at @bankrbot with a separate stock-paired factory"
        - "DOGECOIN create tx 0x7cf116b4…b9f4 called LongLauncher.create, not a Bankr factory"
        - "DexScreener labels Uniswap v4; a Jul 2026 post asked @bankrbot to launch $Dogecoin paired with TSLA and does not publish this CA"

classification:
  primary_leaf: rwa-products/stock-paired-token
  secondary_leaves: []
  mechanism_tags: [stock-paired, rwa, amm, launchpad]
  ecosystem_role: graduation
  lifecycle: mainnet
  coverage_recommendation: seed
  evidence_state: partly-verified
  rationale: "Not in the 49-row census. Token 0x51d3bBe1…1E18 is an EIP-1167 DopplerERC20V1 clone with non-empty code on 4663; LongLauncher.create minted DOGECOIN into Uniswap v4 pool 0x4c02…86d8 quoted against Tesla • Robinhood Token TSLA 0x322F…3b2d. Distinct from packed doggie and packed optimus. TSLA is the rail. This is not Dogecoin the asset. No bidirectional project domain or handle this pass. [R-1] [R-3] [R-4] [R-7] [R-10] [R-14]"

qualifying:
  deployed_on_chain: { status: pass, claim_ids: [CLM-4, CLM-6], note: "" }
  native_play:       { status: pass, claim_ids: [CLM-1, CLM-8], note: "" }
  citable:           { status: pass, claim_ids: [CLM-2, CLM-3, CLM-4], note: "" }
  research_story:    { status: pass, claim_ids: [CLM-1, CLM-9, CLM-11], note: "" }

links:
  - { kind: app, url: "https://app.long.xyz/tokens/0x51d3bbe1ab7467f71e06029e46ef9044bf551e18", authenticity: confirmed }
  - { kind: x, url: "https://x.com/dogeteslacoin", authenticity: unconfirmed }

deployments:
  - label: DOGECOIN token (EIP-1167 DopplerERC20V1 clone)
    role: token
    address:
      value: "0x51d3bBe1ab7467F71E06029e46Ef9044BF551E18"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T04:05:00Z
      exists_on_4663: true
      explorer_source_verified: true
      explorer_source_verification_scope: proxy-shell-only
      implementation_source_verified: true
    receipt_ids: [R-1, R-2, R-4]
  - label: DopplerERC20V1 implementation
    role: implementation
    address:
      value: "0x3Be8B97Fd0e713B5aBE0649Fa830223B6B4BC599"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T04:06:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-4, R-6]
  - label: DopplerERC20V1Factory (token creator_address_hash)
    role: factory
    address:
      value: "0x1B37D3a72082029c44B35B604Ea473617580b69a"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T04:06:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-1, R-5]
  - label: LongLauncher (create caller)
    role: factory
    address:
      value: "0x22e99278308B393ea1260859B181AD7E78f5eeED"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T04:06:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-3, R-8]
  - label: Airlock (token owner())
    role: admin
    address:
      value: "0xeb7C034704eF8Dcd2D32324c1545f62fB4aD0862"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T04:06:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-4, R-9]
  - label: Tesla • Robinhood Token (pair quote / rail)
    role: token
    address:
      value: "0x322F0929c4625eD5bAd873c95208D54E1c003b2d"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T04:06:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-3, R-10, R-14, R-15]

metrics:
  - { kind: volume_24h, value: 1366502, currency: USD, as_of: 2026-09-03T04:04:00Z, window: 24h, method: "api.dexscreener.com/latest/dex/tokens/0x51d3bBe1ab7467F71E06029e46Ef9044BF551E18 pair 0x4c02…86d8 DOGECOIN/TSLA Uniswap v4 volume.h24", class: claim, receipt_ids: [R-7] }
  - { kind: tvl, value: 79249.05, currency: USD, as_of: 2026-09-03T04:04:00Z, window: point, method: "api.dexscreener.com/latest/dex/tokens/0x51d3bBe1…1E18 pair 0x4c02…86d8 liquidity.usd", class: claim, receipt_ids: [R-7] }
  - { kind: volume_24h, value: 1359754.68, currency: USD, as_of: 2026-09-03T04:04:00Z, window: 24h, method: "api.geckoterminal.com/api/v2/networks/robinhood/tokens/0x51d3bBe1…1E18/pools first row TSLA/DOGECOIN 0x4c02…86d8 volume_usd.h24 (pool slice, not token all-pools)", class: claim, receipt_ids: [R-12] }
  - { kind: tvl, value: 99132.36, currency: USD, as_of: 2026-09-03T04:04:00Z, window: point, method: "api.geckoterminal.com/api/v2/networks/robinhood/tokens/0x51d3bBe1…1E18/pools first row reserve_in_usd (TSLA/DOGECOIN pool)", class: claim, receipt_ids: [R-12] }
  - { kind: market_cap, value: 112882, currency: USD, as_of: 2026-09-03T04:04:00Z, window: point, method: "api.dexscreener.com/latest/dex/tokens/0x51d3bBe1…1E18 pair 0x4c02…86d8 fdv/marketCap", class: claim, receipt_ids: [R-7] }
  - { kind: holders, value: 840, currency: null, as_of: 2026-09-03T04:05:00Z, window: point, method: "robinhoodchain.blockscout.com/api/v2/tokens/0x51d3bBe1…1E18 holders_count", class: claim, receipt_ids: [R-2] }

reproductions:
  - { id: REP-1, method: explorer-rpc, chain_id: 4663, checked_at: 2026-09-03T04:07:00Z, receipt_ids: [R-4], result: "rpc.mainnet.chain.robinhood.com eth_chainId 0x1237 (4663). eth_blockNumber 0x32a9487 (53122183) then 53124140. Token 0x51d3bBe1…1E18 eth_getCode 44 bytes 0x3d3d3d3d363d3d37363d73 3be8b97f…c599 5af43d3d93803e602a57fd5bf3 (EIP-1167 clone of 0x3Be8B97Fd0e713B5aBE0649Fa830223B6B4BC599). name DOGECOIN; symbol DOGECOIN; decimals 18; totalSupply 1e27; owner() 0xeb7C034704eF8Dcd2D32324c1545f62fB4aD0862. factory() reverts. Airlock code 5695 B; LongLauncher 5826 B; DopplerERC20V1Factory 1912 B; impl 13927 B; TSLA 283 B. Create-from EOA 0xCBcF…53FC code 0x." }
  - { id: REP-2, method: explorer-ui, chain_id: 4663, checked_at: 2026-09-03T04:06:00Z, receipt_ids: [R-1, R-2, R-3, R-5, R-6, R-8, R-9, R-15], result: "Blockscout api/v2: token 0x51d3bBe1…1E18 is_contract true is_verified true name DOGECOIN proxy_type eip1167 implementation DopplerERC20V1 0x3Be8…C599 creator_address_hash 0x1B37…b69a creation_transaction_hash 0x7cf116b4…b9f4. Token symbol DOGECOIN holders_count 840 total_supply 1e27. Tx 2026-09-02T00:34:38Z block 52150428 from EOA 0xCBcFb536…53FC to LongLauncher 0x22e9…eeED method create; decoded supply 1e27 quote 0x322F…3b2d tokenFactory 0x1B37…b69a name DOGECOIN symbol DOGECOIN. PoolManager Initialize id 0x4c02…86d8 currency0 TSLA currency1 DOGECOIN. TSLA name Tesla • Robinhood Token symbol TSLA. owner() Airlock 0xeb7C…0862." }
  - { id: REP-3, method: api, chain_id: 4663, checked_at: 2026-09-03T04:04:00Z, receipt_ids: [R-7, R-11, R-12, R-13, R-16], result: "DexScreener latest/dex/tokens/0x51d3bBe1…1E18: 10 robinhood uniswap pairs. Top DOGECOIN/TSLA v4 0x4c023aad373f280d83c81edf1de4ff30164aa75f5365642c5e71448e86ea86d8 quote TSLA 0x322F…3b2d liquidity.usd 79249.05 volume.h24 1366502 fdv/marketCap 112882 pairCreatedAt 1788309278000 (2026-09-02T00:34:38Z) info.websites app.long.xyz/tokens/0x51d3bbe1… info.socials x.com/dogeteslacoin. Gecko token volume_usd.h24 1472316.52 fdv_usd 112816.44 market_cap_usd null (all-pools). Gecko token/pools first row TSLA/DOGECOIN 0x4c02…86d8 pool_created_at 2026-09-02T00:34:38Z volume_usd.h24 1359754.68 reserve_in_usd 99132.36 fdv_usd 112625.44. Gecko info websites [] twitter_handle null holders.count 800. Dedicated Gecko pool GET returned 429 this pass and was not retried." }
  - { id: REP-4, method: api, checked_at: 2026-09-03T04:05:00Z, receipt_ids: [R-14], result: "GET api.robinhood.com/rhj/assets HTTP 200; assets length 194; one TSLA hit tokenName Tesla • Robinhood Token deployments[0] contractAddress 0x322F0929c4625eD5bAd873c95208D54E1c003b2d chainId 4663 status ASSET_STATUS_ACTIVE isin US88160R1014. TSLA is the rail, not this token." }
  - { id: REP-5, method: official-crosslink, checked_at: 2026-09-03T04:10:00Z, receipt_ids: [R-7, R-13, R-17], result: "DexScreener websites the LONG token page and socials x.com/dogeteslacoin. Gecko info twitter_handle null websites []. GET x.com/dogeteslacoin returned Account suspended. X user search dogeteslacoin / DogeTeslacoin returned @DogeTeslacoin22 (28 followers, 2022 Korean posts, no CA). No bidirectional project domain or handle." }

claims:
  - { id: CLM-1, field: product.mechanism, value: "LongLauncher.create minted a 1e9-supply DopplerERC20V1 clone (EIP-1167) named DOGECOIN / DOGECOIN, quoted against Tesla • Robinhood Token TSLA, into Uniswap v4 pool 0x4c02…86d8", class: verified, observed_at: 2026-09-03T04:06:00Z, receipt_ids: [R-1, R-3, R-4, R-7], reproduction_ids: [REP-1, REP-2, REP-3], supersedes: null }
  - { id: CLM-2, field: identity.name, value: "DOGECOIN", class: verified, observed_at: 2026-09-03T04:05:00Z, receipt_ids: [R-1, R-2, R-4], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-3, field: identity.symbol, value: "DOGECOIN", class: verified, observed_at: 2026-09-03T04:05:00Z, receipt_ids: [R-1, R-2, R-4], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-4, field: deployment.address, value: "0x51d3bBe1ab7467F71E06029e46Ef9044BF551E18", class: verified, observed_at: 2026-09-03T04:06:00Z, receipt_ids: [R-1, R-3, R-4], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-5, field: identity.handle, value: "NULL — no bidirectional official handle; DexScreener lists x.com/dogeteslacoin which is suspended; Gecko twitter_handle null; flag unconfirmed-official", class: claim, observed_at: 2026-09-03T04:10:00Z, receipt_ids: [R-7, R-13, R-17], reproduction_ids: [], supersedes: null }
  - { id: CLM-6, field: lifecycle, value: mainnet, class: verified, observed_at: 2026-09-03T04:06:00Z, receipt_ids: [R-1, R-3, R-4, R-7], reproduction_ids: [REP-1, REP-2, REP-3], supersedes: null }
  - { id: CLM-7, field: relationship, value: "Launchpad LONG LongLauncher 0x22e99278308B393ea1260859B181AD7E78f5eeED; token creator_address_hash DopplerERC20V1Factory 0x1B37D3a72082029c44B35B604Ea473617580b69a; create tx 0x7cf116b4…b9f4 at 2026-09-02T00:34:38Z from EOA 0xCBcFb536…53FC", class: verified, observed_at: 2026-09-03T04:06:00Z, receipt_ids: [R-1, R-3, R-5, R-8], reproduction_ids: [REP-2], supersedes: null }
  - { id: CLM-8, field: product.mechanism, value: "Pair asset Tesla • Robinhood Token TSLA 0x322F0929c4625eD5bAd873c95208D54E1c003b2d. TSLA is the rail.", class: verified, observed_at: 2026-09-03T04:06:00Z, receipt_ids: [R-3, R-7, R-14, R-15], reproduction_ids: [REP-2, REP-3, REP-4], supersedes: null }
  - { id: CLM-9, field: relationship, value: "Distinct from packed doggie DOGGIE 0xa9eF…1e18 pair 0x141b…f3f8; from packed optimus OPTIMUS 0xB5D553…1E18 pair 0xef34…d4c3; from LONGDOG 0xfe7E…1e18 / TSLA pair 0x9b66…; and from ticker-collision DOGECOIN 0x8903FbCd…3B401 / TSLA pair 0x7a99…. Same TSLA rail, different CAs. Not Dogecoin the asset.", class: verified, observed_at: 2026-09-03T04:04:00Z, receipt_ids: [R-7, R-16], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-10, field: economics.metric, value: "Gecko token/pools TSLA/DOGECOIN 0x4c02…86d8 24h volume 1359754.68 USD and reserve_in_usd 99132.36 at 2026-09-03T04:04:00Z (pool slice, not Gecko token all-pools 1472316.52)", class: verified, observed_at: 2026-09-03T04:04:00Z, receipt_ids: [R-11, R-12], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-11, field: economics.metric, value: "DexScreener same pair liquidity.usd 79249.05 volume.h24 1366502 fdv/marketCap 112882 at 2026-09-03T04:04:00Z", class: verified, observed_at: 2026-09-03T04:04:00Z, receipt_ids: [R-7], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-12, field: economics.metric, value: 840, class: verified, observed_at: 2026-09-03T04:05:00Z, receipt_ids: [R-2], reproduction_ids: [REP-2], supersedes: null }
  - { id: CLM-13, field: control.owner, value: "owner() 0xeb7C034704eF8Dcd2D32324c1545f62fB4aD0862 named Airlock on Blockscout; 5695 bytes code, is_verified true", class: verified, observed_at: 2026-09-03T04:07:00Z, receipt_ids: [R-4, R-9], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-14, field: control.privileged-role, value: "DopplerHookInitializer Lock on create: beneficiaries 0x21E2ce70…7A66 5e16 (5%) and create-from EOA 0xCBcFb536…53FC 95e16 (95%)", class: verified, observed_at: 2026-09-03T04:06:00Z, receipt_ids: [R-3], reproduction_ids: [REP-2], supersedes: null }
  - { id: CLM-15, field: other, value: "Pair venue Uniswap v4 PoolManager 0x8366a39CC670B4001A1121B8F6A443A643e40951 pool 0x4c02…86d8; hook DopplerHookInitializer 0x4e346895…a544", class: verified, observed_at: 2026-09-03T04:06:00Z, receipt_ids: [R-3, R-7], reproduction_ids: [REP-2, REP-3], supersedes: null }
  - { id: CLM-16, field: deployment.role, value: "Token creator_address_hash is DopplerERC20V1Factory 0x1B37…b69a; the pad of record is LongLauncher 0x22e9…eeED, not Pons, PAIR, or hood.fun", class: verified, observed_at: 2026-09-03T04:06:00Z, receipt_ids: [R-1, R-3, R-5, R-8], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-17, field: taxonomy.chain-scope, value: robinhood-native, class: verified, observed_at: 2026-09-03T04:05:00Z, receipt_ids: [R-4, R-7], reproduction_ids: [REP-1, REP-3], supersedes: null }
  - { id: CLM-18, field: security.audit, value: "No audit report URL was located on Blockscout, DexScreener, Gecko, or X search this pass", class: unknown, observed_at: 2026-09-03T04:10:00Z, receipt_ids: [], reproduction_ids: [], supersedes: null }
  - { id: CLM-19, field: communications.status, value: "unconfirmed-official: DexScreener info.socials x.com/dogeteslacoin; GET that profile returned Account suspended; Gecko twitter_handle null", class: claim, observed_at: 2026-09-03T04:10:00Z, receipt_ids: [R-7, R-13, R-17], reproduction_ids: [], supersedes: null }
  - { id: CLM-20, field: economics.metric, value: "Gecko token fdv_usd 112816.44; DexScreener fdv/marketCap 112882. Gecko market_cap_usd null.", class: verified, observed_at: 2026-09-03T04:04:00Z, receipt_ids: [R-7, R-11], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-21, field: deployment.address, value: "0x322F0929c4625eD5bAd873c95208D54E1c003b2d", class: verified, observed_at: 2026-09-03T04:06:00Z, receipt_ids: [R-3, R-14, R-15], reproduction_ids: [REP-2, REP-4], supersedes: null }
  - { id: CLM-22, field: deployment.address, value: "0x3Be8B97Fd0e713B5aBE0649Fa830223B6B4BC599", class: verified, observed_at: 2026-09-03T04:06:00Z, receipt_ids: [R-1, R-4, R-6], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-23, field: identity.domain, value: "NULL — DexScreener info.websites is app.long.xyz/tokens/0x51d3bbe1…; Gecko token info websites []", class: claim, observed_at: 2026-09-03T04:04:00Z, receipt_ids: [R-7, R-13], reproduction_ids: [], supersedes: null }
  - { id: CLM-24, field: candidate, value: "dogecoin-tsla | DOGECOIN | NULL | NULL — discovery token not in census 49", class: claim, observed_at: 2026-09-03T04:12:00Z, receipt_ids: [R-1, R-7], reproduction_ids: [], supersedes: null }
  - { id: CLM-25, field: taxonomy.primary-leaf, value: rwa-products/stock-paired-token, class: claim, observed_at: 2026-09-03T04:06:00Z, receipt_ids: [R-7, R-14], reproduction_ids: [], supersedes: null }

conflicts: []

events:
  - id: EVT-1
    type: onchain
    title: "DexScreener DOGECOIN/TSLA 24h volume $1.37M, liq $79.2k"
    summary: "Uniswap v4 pair 0x4c02…86d8 volume.h24 1366502 liquidity.usd 79249 fdv 112882."
    occurred_at: 2026-09-03T04:04:00Z
    observed_at: 2026-09-03T04:04:00Z
    affected_fields: [economics.metric, activity.status]
    evidence_state: verified
    impact: material
    site_recommendation: both
    channel_recommendation: none
    receipt_ids: [R-7]
  - id: EVT-2
    type: onchain
    title: "Gecko TSLA/DOGECOIN pool 24h volume $1.36M, reserve $99.1k"
    summary: "token/pools row 0x4c02…86d8 volume_usd.h24 1359755 reserve_in_usd 99132 fdv_usd 112625."
    occurred_at: 2026-09-03T04:04:00Z
    observed_at: 2026-09-03T04:04:00Z
    affected_fields: [economics.metric]
    evidence_state: verified
    impact: material
    site_recommendation: both
    channel_recommendation: none
    receipt_ids: [R-12]
  - id: EVT-3
    type: ct
    title: "DexScreener lists x.com/dogeteslacoin; profile suspended"
    summary: "info.socials x.com/dogeteslacoin. GET that URL returned Account suspended. Gecko twitter_handle null."
    occurred_at: 2026-09-03T04:10:00Z
    observed_at: 2026-09-03T04:10:00Z
    affected_fields: [identity.handle, communications.status]
    evidence_state: claim
    impact: routine
    site_recommendation: none
    channel_recommendation: none
    receipt_ids: [R-7, R-17]
  - id: EVT-4
    type: onchain
    title: "LongLauncher.create minted DOGECOIN / TSLA pool"
    summary: "Tx 0x7cf1…b9f4 from 0xCBcF…53FC at 2026-09-02T00:34:38Z; poolId 0x4c02…86d8."
    occurred_at: 2026-09-02T00:34:38Z
    observed_at: 2026-09-03T04:06:00Z
    affected_fields: [deployment.address, lifecycle, product.mechanism]
    evidence_state: verified
    impact: material
    site_recommendation: profile
    channel_recommendation: none
    receipt_ids: [R-3]
  - id: EVT-5
    type: onchain
    title: "GET /rhj/assets lists TSLA Stock Token as the rail"
    summary: "194 assets; TSLA Tesla • Robinhood Token at 0x322F…3b2d chainId 4663, status ACTIVE."
    occurred_at: 2026-09-03T04:05:00Z
    observed_at: 2026-09-03T04:05:00Z
    affected_fields: [relationship, product.mechanism]
    evidence_state: verified
    impact: routine
    site_recommendation: profile
    channel_recommendation: none
    receipt_ids: [R-14]

receipts:
  - { id: R-1, publisher: Blockscout, title: "Address 0x51d3bBe1…1E18 DOGECOIN", url: "https://robinhoodchain.blockscout.com/address/0x51d3bBe1ab7467F71E06029e46Ef9044BF551E18", published_at: null, accessed_at: 2026-09-03T04:05:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-2, CLM-3, CLM-4, CLM-6, CLM-7, CLM-16, CLM-22, CLM-24], excerpt: "hash 0x51d3bBe1ab7467F71E06029e46Ef9044BF551E18 name DOGECOIN is_contract true is_verified true proxy_type eip1167 implementations DopplerERC20V1 0x3Be8B97Fd0e713B5aBE0649Fa830223B6B4BC599 creator_address_hash 0x1B37D3a72082029c44B35B604Ea473617580b69a creation_transaction_hash 0x7cf116b4c5f4d9a6b1ac682cce49361b29a637c1c36ea04a99a3148a3675b9f4. token symbol DOGECOIN holders_count 840 total_supply 1000000000000000000000000000 type ERC-20." }
  - { id: R-2, publisher: Blockscout, title: "Token 0x51d3bBe1…1E18 DOGECOIN", url: "https://robinhoodchain.blockscout.com/api/v2/tokens/0x51d3bBe1ab7467F71E06029e46Ef9044BF551E18", published_at: null, accessed_at: 2026-09-03T04:05:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-2, CLM-3, CLM-12], excerpt: "address_hash 0x51d3bBe1ab7467F71E06029e46Ef9044BF551E18 name DOGECOIN symbol DOGECOIN decimals 18 total_supply 1000000000000000000000000000 holders_count 840 type ERC-20." }
  - { id: R-3, publisher: Blockscout, title: "create tx 0x7cf116b4…b9f4", url: "https://robinhoodchain.blockscout.com/tx/0x7cf116b4c5f4d9a6b1ac682cce49361b29a637c1c36ea04a99a3148a3675b9f4", published_at: 2026-09-02T00:34:38Z, accessed_at: 2026-09-03T04:06:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-4, CLM-6, CLM-7, CLM-8, CLM-14, CLM-15, CLM-16, CLM-21, EVT-4], excerpt: "timestamp 2026-09-02T00:34:38.000000Z status ok result success block_number 52150428 from 0xCBcFb5360f1bf7D55d9E529E298ecD439Fd353FC (is_contract false) to LongLauncher 0x22e99278308B393ea1260859B181AD7E78f5eeED method create. decoded supply 1e27 quote 0x322F0929c4625eD5bAd873c95208D54E1c003b2d tokenFactory 0x1B37…b69a name DOGECOIN symbol DOGECOIN. Initialize id 0x4c02…86d8. Lock beneficiaries 5% 0x21E2…7A66 95% 0xCBcF…53FC." }
  - { id: R-4, publisher: Robinhood Chain RPC, title: "eth_getCode, name, symbol, owner() on DOGECOIN", url: "https://rpc.mainnet.chain.robinhood.com", published_at: null, accessed_at: 2026-09-03T04:07:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-2, CLM-3, CLM-4, CLM-6, CLM-13, CLM-16, CLM-17, CLM-22], excerpt: "eth_chainId 0x1237 (4663) eth_blockNumber 0x32a9487 (53122183). Token code 44 B EIP-1167 impl 0x3be8b97f…c599. name DOGECOIN symbol DOGECOIN decimals 18 totalSupply 1e27. owner() 0xeb7c0347…0862. factory() revert. Airlock 5695 B LongLauncher 5826 B DopplerERC20V1Factory 1912 B impl 13927 B TSLA 283 B create-from EOA code 0x." }
  - { id: R-5, publisher: Blockscout, title: "Address 0x1B37…b69a DopplerERC20V1Factory", url: "https://robinhoodchain.blockscout.com/address/0x1B37D3a72082029c44B35B604Ea473617580b69a", published_at: null, accessed_at: 2026-09-03T04:06:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-7, CLM-16], excerpt: "hash 0x1B37D3a72082029c44B35B604Ea473617580b69a name DopplerERC20V1Factory is_contract true is_verified true creator_address_hash 0x4482f353A46a4d4088F9550EB2C9cc92D0d5F768. Token creator_address_hash on 0x51d3bBe1…1E18. Compiler v0.8.26 file_path src/tokens/DopplerERC20V1Factory.sol is_partially_verified true." }
  - { id: R-6, publisher: Blockscout, title: "Address 0x3Be8…C599 DopplerERC20V1", url: "https://robinhoodchain.blockscout.com/address/0x3Be8B97Fd0e713B5aBE0649Fa830223B6B4BC599", published_at: null, accessed_at: 2026-09-03T04:06:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-22], excerpt: "hash 0x3Be8B97Fd0e713B5aBE0649Fa830223B6B4BC599 name DopplerERC20V1 is_contract true is_verified true. Smart-contract compiler v0.8.26+commit.8a97fa7a is_partially_verified true file_path src/tokens/DopplerERC20V1.sol verified_at 2026-07-01T19:42:07Z." }
  - { id: R-7, publisher: DexScreener, title: "latest/dex/tokens DOGECOIN", url: "https://api.dexscreener.com/latest/dex/tokens/0x51d3bBe1ab7467F71E06029e46Ef9044BF551E18", published_at: null, accessed_at: 2026-09-03T04:04:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-1, CLM-5, CLM-8, CLM-9, CLM-11, CLM-15, CLM-17, CLM-19, CLM-20, CLM-23, CLM-24, CLM-25, EVT-1, EVT-3], excerpt: "10 robinhood uniswap pairs. Top pairAddress 0x4c023aad373f280d83c81edf1de4ff30164aa75f5365642c5e71448e86ea86d8 labels v4 base DOGECOIN 0x51d3bBe1…1E18 quote Tesla • Robinhood Token / TSLA 0x322F…3b2d liquidity.usd 79249.05 volume.h24 1366502 fdv 112882 marketCap 112882 pairCreatedAt 1788309278000. info.websites app.long.xyz/tokens/0x51d3bbe1… socials x.com/dogeteslacoin." }
  - { id: R-8, publisher: Blockscout, title: "Address 0x22e9…eeED LongLauncher", url: "https://robinhoodchain.blockscout.com/address/0x22e99278308B393ea1260859B181AD7E78f5eeED", published_at: null, accessed_at: 2026-09-03T04:06:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-7, CLM-16], excerpt: "hash 0x22e99278308B393ea1260859B181AD7E78f5eeED name LongLauncher is_contract true is_verified true. Compiler v0.8.26 file_path src/LongLauncher.sol is_partially_verified false verified_at 2026-07-14T11:23:57Z." }
  - { id: R-9, publisher: Blockscout, title: "Address 0xeb7C…0862 Airlock", url: "https://robinhoodchain.blockscout.com/address/0xeb7C034704eF8Dcd2D32324c1545f62fB4aD0862", published_at: null, accessed_at: 2026-09-03T04:06:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-13], excerpt: "hash 0xeb7C034704eF8Dcd2D32324c1545f62fB4aD0862 name Airlock is_contract true is_verified true creator_address_hash 0x78C84FE5D1837244DC72D5B9DE7db930ab0C02b9. RPC owner() on DOGECOIN returns this address." }
  - { id: R-10, publisher: Blockscout, title: "Token 0x322F…3b2d Tesla • Robinhood Token / TSLA", url: "https://robinhoodchain.blockscout.com/api/v2/tokens/0x322F0929c4625eD5bAd873c95208D54E1c003b2d", published_at: null, accessed_at: 2026-09-03T04:06:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-8], excerpt: "address_hash 0x322F0929c4625eD5bAd873c95208D54E1c003b2d name Tesla • Robinhood Token symbol TSLA decimals 18 holders_count 51119 total_supply 8476202000000000000000 type ERC-20." }
  - { id: R-11, publisher: GeckoTerminal, title: "DOGECOIN token", url: "https://api.geckoterminal.com/api/v2/networks/robinhood/tokens/0x51d3bBe1ab7467F71E06029e46Ef9044BF551E18", published_at: null, accessed_at: 2026-09-03T04:04:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-10, CLM-20], excerpt: "name DOGECOIN symbol DOGECOIN decimals 18 total_supply 1e27 price_usd 0.0001128164368 fdv_usd 112816.436787875 market_cap_usd null volume_usd.h24 1472316.52421847 total_reserve_in_usd 69640.36. coingecko_coin_id null. Top pool 0x4c02…86d8. Token 24h volume is all-pools, not the TSLA book." }
  - { id: R-12, publisher: GeckoTerminal, title: "DOGECOIN token pools", url: "https://api.geckoterminal.com/api/v2/networks/robinhood/tokens/0x51d3bBe1ab7467F71E06029e46Ef9044BF551E18/pools", published_at: null, accessed_at: 2026-09-03T04:04:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-10, EVT-2], excerpt: "First row TSLA / DOGECOIN 0x4c023aad373f280d83c81edf1de4ff30164aa75f5365642c5e71448e86ea86d8 pool_created_at 2026-09-02T00:34:38Z fdv_usd 112625.440713033 volume_usd.h24 1359754.67917881 reserve_in_usd 99132.3575. Dedicated networks/robinhood/pools/0x4c02… GET returned 429 this pass and was not retried." }
  - { id: R-13, publisher: GeckoTerminal, title: "DOGECOIN token info", url: "https://api.geckoterminal.com/api/v2/networks/robinhood/tokens/0x51d3bBe1ab7467F71E06029e46Ef9044BF551E18/info", published_at: null, accessed_at: 2026-09-03T04:04:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-5, CLM-19, CLM-23], excerpt: "websites [] twitter_handle null telegram_handle null description null gt_verified false categories Doge, Animal. holders.count 800 last_updated 2026-09-03T03:25:15Z." }
  - { id: R-14, publisher: Robinhood, title: "GET /rhj/assets Stock Token registry", url: "https://api.robinhood.com/rhj/assets", published_at: null, accessed_at: 2026-09-03T04:05:00Z, kind: docs, authority: primary, authenticity: confirmed, supports: [CLM-8, CLM-21, CLM-25, EVT-5], excerpt: "HTTP 200. assets length 194. One TSLA hit: tokenSymbol TSLA tokenName Tesla • Robinhood Token deployments[0] contractAddress 0x322F0929c4625eD5bAd873c95208D54E1c003b2d chainId 4663 status ASSET_STATUS_ACTIVE isin US88160R1014." }
  - { id: R-15, publisher: Blockscout, title: "Address 0x322F…3b2d Tesla • Robinhood Token", url: "https://robinhoodchain.blockscout.com/address/0x322F0929c4625eD5bAd873c95208D54E1c003b2d", published_at: null, accessed_at: 2026-09-03T04:06:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-8, CLM-21], excerpt: "hash 0x322F0929c4625eD5bAd873c95208D54E1c003b2d token name Tesla • Robinhood Token symbol TSLA. Pair quote on DOGECOIN/TSLA Uniswap v4 pool 0x4c02…86d8." }
  - { id: R-16, publisher: DexScreener, title: "search DOGECOIN TSLA", url: "https://api.dexscreener.com/latest/dex/search?q=DOGECOIN%20TSLA", published_at: null, accessed_at: 2026-09-03T04:04:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-9], excerpt: "DOGECOIN 0x51d3bBe1…1E18 / TSLA pair 0x4c02…86d8 liq 79249.05 vol 1366502. Distinct: DOGGIE 0xa9eF…1e18 / TSLA 0x141b…f3f8; OPTIMUS 0xB5D553…1E18 / TSLA 0xef34…d4c3; LONGDOG 0xfe7E…1e18 / TSLA 0x9b66…; ticker-collision DOGECOIN 0x8903FbCd…3B401 / TSLA pair 0x7a99… liq None vol 3.31." }
  - { id: R-17, publisher: X, title: "x.com/dogeteslacoin Account suspended", url: "https://x.com/dogeteslacoin", published_at: null, accessed_at: 2026-09-03T04:10:00Z, kind: social, authority: social, authenticity: unconfirmed, supports: [CLM-5, CLM-19, EVT-3], excerpt: "GET https://x.com/dogeteslacoin returned Account suspended. X user search for dogeteslacoin / DogeTeslacoin returned @DogeTeslacoin22 (id 748716569413296132, 28 followers, 2022 Korean posts, no contract). from:dogeteslacoin returned no results." }

gaps:
  - { priority: P0, question: "Is there an official X handle or site that bidirectionally links to token 0x51d3bBe1…1E18?", checked: "DexScreener info.websites is the LONG token page; info.socials x.com/dogeteslacoin is suspended; Gecko websites [] twitter_handle null; X user search returned unrelated @DogeTeslacoin22, 2026-09-03", next: "re-read DexScreener token profile after a Claim Profile; search new posts that embed the CA and a live handle" }
  - { priority: P1, question: "Does Airlock 0xeb7C…0862 hold remaining privileged paths on the DopplerERC20V1 clone (mint, pause, upgrade of the implementation)?", checked: "owner() returns Airlock; token is EIP-1167 of DopplerERC20V1 src/tokens/DopplerERC20V1.sol, partially verified; Lock beneficiaries 5%/95% on create, 2026-09-03", next: "read DopplerERC20V1 verified source for mint/burn/pause and Airlock exit liquidity on the TSLA pool" }
  - { priority: P1, question: "What dex id does Gecko assign to pool 0x4c02…86d8 (Uniswap v4 vs bankr-robinhood)?", checked: "Dedicated Gecko pool GET returned 429; token/pools listed TSLA/DOGECOIN without dex id in the printed slice; DexScreener labels v4 / dexId uniswap, 2026-09-03", next: "one later Gecko pool GET; do not loop on 429" }
  - { priority: P2, question: "Does ticker-collision DOGECOIN 0x8903FbCd…3B401 share a deployer or profile with 0x51d3bBe1…1E18?", checked: "DexScreener search showed 0x8903… / TSLA pair 0x7a99… liq None vol 3.31; no Blockscout open on 0x8903 this pass, 2026-09-03", next: "open Blockscout creator on 0x8903 if the ticker keeps colliding in search" }
---

# DOGECOIN — research packet

## What it is

A one-billion-supply ERC-20 cloned through LongLauncher into a Uniswap v4 pool quoted against TSLA, the Tesla Robinhood Stock Token at 0x322F…3b2d. Traders buy and sell DOGECOIN on that book. TSLA is the rail. This token is not Dogecoin the asset, not packed doggie, and not OPTIMUS/TSLA. No official project domain or handle was located this pass.

Themes: memecoin, dog, stock-paired:TSLA, rwa

## Why it matters

DOGECOIN is a LONG-launched graduation that prices a memecoin in tokenized Tesla instead of ETH or USDG. DexScreener printed about $1.37M of 24h volume on the DOGECOIN/TSLA book at collection, with about $79.2k liquidity. Several other TSLA-quoted memecoins exist on the same chain, so ticker-only pairing is not identity. Census 49 has no dogecoin-tsla row.

## What could go wrong

USD liquidity on the DOGECOIN/TSLA book counts both sides, and aggregators disagree on the reserve (DexScreener $79.2k vs Gecko token/pools $99.1k). A second DOGECOIN ticker at 0x8903… quotes TSLA with almost no liquidity. DexScreener lists x.com/dogeteslacoin, which is suspended. TSLA is the rail, not this token.

## Product and mechanics

LongLauncher 0x22e9…eeED create at 2026-09-02T00:34:38Z minted DOGECOIN / DOGECOIN supply 1e9*1e18 as an EIP-1167 clone of DopplerERC20V1 0x3Be8…C599. The create quote is TSLA 0x322F…3b2d. Token creator_address_hash is DopplerERC20V1Factory 0x1B37…b69a. Pool id 0x4c02…86d8. [verified R-1 R-3 R-4]

DexScreener's deep book is DOGECOIN/TSLA Uniswap v4; secondary DOGECOIN/ETH and DOGECOIN/USDG books exist with far less liquidity than the TSLA book. [verified R-7]

## Control and security

owner() returns Airlock 0xeb7C…0862, verified on Blockscout. The token is a 44-byte EIP-1167 clone; implementation DopplerERC20V1 is partially verified (src/tokens/DopplerERC20V1.sol, compiler v0.8.26). Create-from EOA 0xCBcF…53FC has no code. Lock beneficiaries on create are 5% 0x21E2…7A66 and 95% that EOA. [verified R-3 R-4 R-6 R-9]

No audit report URL was located this pass. [unknown]

## Team and provenance

No official domain or X handle was located. DexScreener websites points at the LONG token page; Gecko info websites and twitter_handle are empty. DexScreener socials list x.com/dogeteslacoin; GET that profile returned Account suspended. Flag unconfirmed-official. Distinct from packed doggie (doggiemode.com / @DoggieMode) and packed optimus. [claim R-7 R-13 R-17]

## Economics and activity

DOGECOIN/TSLA Uniswap v4 DexScreener 24h volume is 1366502 USD and liquidity.usd is 79249.05 at 2026-09-03T04:04:00Z. fdv/marketCap is 112882. Gecko token/pools same pool: volume_usd.h24 1359754.68 reserve_in_usd 99132.36 fdv_usd 112625.44. Gecko token volume_usd.h24 is 1472316.52 across all pools, not the TSLA book. [claim R-7 R-11 R-12]

Blockscout holders_count 840. Pair created 2026-09-02T00:34:38Z. Dedicated Gecko pool GET returned 429 this pass and was not retried. [claim R-2 R-12]

## Material risks

- Quote token TSLA 0x322F…3b2d is the Robinhood Stock Token rail in GET /rhj/assets; this memecoin is not that asset. [verified R-14 R-15]
- Pool USD reserve is DOGECOIN plus TSLA, not a USDG or WETH backstop. Aggregators disagree on the dollar reserve. [claim R-7 R-12]
- No official handle or domain this pass; DexScreener's listed X profile is suspended. [claim R-7 R-17]
- Ticker DOGECOIN collides with 0x8903… and with packed doggie / optimus / LONGDOG at different CAs on the same TSLA rail. [verified R-16]
- No audit report URL this pass. [unknown]

## Verification passes

- Receipts: Blockscout token/create/LongLauncher/factory/impl/Airlock/TSLA, RPC, DexScreener token and search, Gecko token/info/token-pools, /rhj/assets, and x.com/dogeteslacoin were opened on 2026-09-03 and excerpts copied from the responses. [verified R-1 R-3 R-4 R-7 R-14]
- Numbers: 1366502 is the DexScreener DOGECOIN/TSLA pair 24h volume, not the 1472316.52 Gecko token all-pools figure. Reserve 99132.36 is the Gecko token/pools row; DexScreener liquidity.usd 79249.05 is the same pair, different aggregator. [claim R-7 R-11 R-12]
- Adversarial: the strongest contrary reading is that this DOGECOIN is packed doggie, is packed optimus, is LONGDOG/TSLA, is ticker-collision 0x8903…, is Dogecoin the asset, or is the TSLA stock token. Different CAs, names, pair ids and (for TSLA) GET /rhj/assets argue against those. [verified R-3 R-7 R-14 R-16]

## Operations log

- Base: assignment base_sha 334ca0619aa62e922da83f46de021f06d12348cf. Census 49 slugs have no dogecoin-tsla / DOGECOIN / 0x51d3bBe1…1E18. content/dependencies/stock-tokens.yaml TSLA 0x322F…3b2d.
- Explorer: Blockscout api/v2 token, create tx 0x7cf116b4…b9f4, LongLauncher, DopplerERC20V1Factory, DopplerERC20V1, Airlock, TSLA. RPC eth_getCode/eth_call at blocks 53122183–53124140.
- Aggregators: DexScreener latest/dex/tokens and search; Gecko token, token/info, token/pools.
- Registry: GET api.robinhood.com/rhj/assets 194 assets, one TSLA row at 0x322F…3b2d.
- Social: X user dogeteslacoin / DogeTeslacoin; keyword DOGECOIN TSLA; GET x.com/dogeteslacoin.
- Failed: dedicated Gecko pool GET 429 (not retried); from:dogeteslacoin returned no results; x.com/dogeteslacoin Account suspended.
- Time: collection 2026-09-03T04:04Z–2026-09-03T04:12Z.
