---
# Packet v2 (docs/research-system.md §5). Seed with Icarus What-it-is + events.
contract_version: proofline-research-v2
work_id: WORK-20260903-grok-heavy-icarus-research
producer: grok-heavy
role: collector
base_sha: 334ca0619aa62e922da83f46de021f06d12348cf
slug: karma
name: KARMA
packet_tier: seed
as_of: 2026-09-03T04:54:00Z
prior_packet: null
supersedes: null
owned_slugs: [karma]
allowed_paths:
  - research/inbox/packets/karma/WORK-20260903-grok-heavy-icarus-research.md

identity:
  canonical_name: KARMA
  aliases: ["Reddit Founder Cat"]
  symbols: [Karma]
  entity_kind: token
  chain_scope: robinhood-native
  official_domain: "NULL — DexScreener info.websites and constructor socials website are https://www.youtube.com/watch?v=60QywS3kwXE; no project domain this pass; flag third-party-link"
  official_handle: "@redditcathood"
  repository: "NULL — no GitHub org or repository URL on DexScreener, constructor socials, Blockscout, or X search this pass"
  possible_matches:
    - slug: pons
      signals: [shared-deployer]
      contrary_signals:
        - "Census Pons is the bonding-curve pad at ponsfamily.com / @ponsdotfamily with PonsV2LaunchFactory 0x7eD5…EC7e"
        - "KARMA is the ERC-20 at 0xb1B800…baC3 created through that factory; entity_kind token, not protocol"
        - "Official surface is @redditcathood with CA in the bio, not @ponsdotfamily"
    - slug: long
      signals: [ticker-only]
      contrary_signals:
        - "Census LONG is a stock-paired factory at app.long.xyz / @longdotxyz with LongLauncher 0x22e9…eeED"
        - "Canonical KARMA is a 3248-byte PonsV2LauncherToken via PonsV2LaunchFactory, Uniswap v4 pair 0x35183580…65a5"
        - "LongLauncher Karma Points 0x55f9…1e18 / pair 0x85dd…8e8d is a same-ticker RDDT book recorded as ca-collision, not this row"
    - slug: artificial-inu
      signals: [other]
      contrary_signals:
        - "Census Artificial Inu is $AI at 0x2E8c…1e18 paired to NVDA via LongLauncher, site artificialinu.com / @ArtificiallyInu"
        - "KARMA is Reddit Founder Cat at 0xb1B800…baC3 paired to RDDT 0x05b37F…F4C via Pons v2"
        - "No shared domain, handle, or reproduced address"
    - slug: l4va
      signals: [other]
      contrary_signals:
        - "Census L4VA is a vault factory issuing tokens backed by locked RWAs"
        - "KARMA is a Pons v2 LaunchToken in a Uniswap v4 KARMA/RDDT pool"
        - "No shared domain, handle, or reproduced address"

classification:
  primary_leaf: launch/graduation-token
  secondary_leaves: [rwa-products/stock-paired-token]
  mechanism_tags: [bonding-curve, amm, stock-paired, rwa, launchpad]
  ecosystem_role: graduation
  lifecycle: mainnet
  coverage_recommendation: seed
  evidence_state: partly-verified
  rationale: "Not in the 49-row census. Token 0xb1B800…baC3 has 3248 bytes of code on 4663 (not EIP-1167); name Reddit Founder Cat / symbol Karma; launchFactory() returns PonsV2LaunchFactory 0x7eD5…EC7e. launchAndBuy at 2026-09-02T12:47:28Z minted against pairToken RDDT 0x05b37F…F4C; CurveCompleted / LaunchSwept at 2026-09-02T12:56:29Z; DexScreener KARMA/RDDT v4 0x35183580…65a5 pairCreatedAt 2026-09-02T12:56:30Z. @redditcathood bio pins the CA. Distinct from LongLauncher Karma Points 0x55f9…1e18 (ca-collision). RDDT is a rail. [R-1] [R-3] [R-5] [R-6] [R-7] [R-9] [R-12]"

qualifying:
  deployed_on_chain: { status: pass, claim_ids: [CLM-4, CLM-5, CLM-6], note: "" }
  native_play:       { status: pass, claim_ids: [CLM-1, CLM-15], note: "" }
  citable:           { status: pass, claim_ids: [CLM-2, CLM-3, CLM-4], note: "" }
  research_story:    { status: pass, claim_ids: [CLM-1, CLM-9, CLM-10], note: "" }

links:
  - { kind: x, url: "https://x.com/redditcathood", authenticity: confirmed }
  - { kind: other, url: "https://www.youtube.com/watch?v=60QywS3kwXE", authenticity: unconfirmed }
  - { kind: other, url: "https://dexscreener.com/robinhood/0x351835802f3ee56f4336fc4c7e9fed3cc3dbcd320aa10e320a720249465165a5", authenticity: unconfirmed }

deployments:
  - label: KARMA token (PonsV2LauncherToken bytecode, Reddit Founder Cat)
    role: token
    address:
      value: "0xb1B800835f93d40D43e3B3467494b9155364baC3"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T04:48:00Z
      exists_on_4663: true
      explorer_source_verified: false
    receipt_ids: [R-1, R-3, R-5]
  - label: PonsV2LaunchDeployer
    role: factory
    address:
      value: "0x3711ceA4feaDE896C913C68F01Eda97Cb06D1A42"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T04:52:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-18]
  - label: PonsV2LaunchFactory (token launchFactory)
    role: factory
    address:
      value: "0x7eD598BcEf8bd9Edd8C97A195C6d13f40801EC7e"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T04:51:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-4, R-5, R-19]
  - label: PonsV2BondingCurve
    role: other
    address:
      value: "0x8b9F9beeA986E60f1d629eEE48DA78e3e341B1c3"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T04:51:00Z
      exists_on_4663: true
      explorer_source_verified: false
    receipt_ids: [R-4, R-5, R-6]
  - label: PonsV2LaunchAndBuy (create tx to)
    role: router
    address:
      value: "0xe33E9E479dF8802cb0866d5d05258bEc4cF62948"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T04:52:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-3, R-20]
  - label: V2LaunchLocker (isLocked true for this token)
    role: vault
    address:
      value: "0x267444D099b10fB5Ed7c3Cc7B7c767AdcA574952"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T04:53:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-5, R-22]
  - label: RDDT Stock Token (pair quote / launch pairToken; rail, not this subject)
    role: token
    address:
      value: "0x05b37Fb53A299a1b874A619e1c4C404D52C36F4C"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T04:48:00Z
      exists_on_4663: true
      explorer_source_verified: true
      explorer_source_verification_scope: proxy-shell-only
      implementation_source_verified: true
    receipt_ids: [R-5, R-9, R-15]
  - label: "KARMA ticker collision (LongLauncher Karma Points, not this row)"
    role: token
    address:
      value: "0x55f9ec832384F737d5ad57FC0c314ddc8Bf41e18"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T04:48:00Z
      exists_on_4663: true
      explorer_source_verified: true
      explorer_source_verification_scope: proxy-shell-only
      implementation_source_verified: true
    receipt_ids: [R-16, R-17, R-21]
  - label: LongLauncher (collision create tx to)
    role: factory
    address:
      value: "0x22e99278308B393ea1260859B181AD7E78f5eeED"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T04:50:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-17]
  - label: DopplerERC20V1 implementation (collision token)
    role: implementation
    address:
      value: "0x3Be8B97Fd0e713B5aBE0649Fa830223B6B4BC599"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T04:52:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-16, R-17]

metrics:
  - { kind: volume_24h, value: 1281710.68, currency: USD, as_of: 2026-09-03T04:50:00Z, window: 24h, method: "api.dexscreener.com/tokens/v1/robinhood/0xb1B800835f93d40D43e3B3467494b9155364baC3 pair 0x35183580…65a5 KARMA/RDDT Uniswap v4 volume.h24", class: claim, receipt_ids: [R-7] }
  - { kind: tvl, value: 15134.13, currency: USD, as_of: 2026-09-03T04:50:00Z, window: point, method: "api.dexscreener.com/tokens/v1/robinhood/0xb1B800835f93d40D43e3B3467494b9155364baC3 pair 0x35183580…65a5 KARMA/RDDT liquidity.usd (that pool, not an all-pools figure)", class: claim, receipt_ids: [R-7] }
  - { kind: volume_24h, value: 1154172.46674725, currency: USD, as_of: 2026-09-03T04:51:00Z, window: 24h, method: "api.geckoterminal.com/api/v2/networks/robinhood/pools/0x351835802f3ee56f4336fc4c7e9fed3cc3dbcd320aa10e320a720249465165a5 volume_usd.h24 (KARMA/RDDT pool, not an all-pools figure)", class: claim, receipt_ids: [R-8] }
  - { kind: market_cap, value: 42821, currency: USD, as_of: 2026-09-03T04:50:00Z, window: point, method: "api.dexscreener.com/tokens/v1/robinhood/0xb1B800835f93d40D43e3B3467494b9155364baC3 pair 0x35183580…65a5 fdv/marketCap", class: claim, receipt_ids: [R-7] }
  - { kind: holders, value: 771, currency: null, as_of: 2026-09-03T04:48:00Z, window: point, method: "robinhoodchain.blockscout.com/api/v2/tokens/0xb1B800835f93d40D43e3B3467494b9155364baC3 holders_count", class: claim, receipt_ids: [R-1] }

reproductions:
  - { id: REP-1, method: explorer-rpc, chain_id: 4663, checked_at: 2026-09-03T04:50:00Z, receipt_ids: [R-5], result: "rpc.mainnet.chain.robinhood.com Chrome UA. eth_chainId 0x1237 (4663). eth_blockNumber 0x32af97a (53148026) then 0x32b03ea (53150698) ts 2026-09-03T04:53:53Z. Token 0xb1B800…baC3 eth_getCode 3248 B prefix 608060405260043610, not EIP-1167. name Reddit Founder Cat, symbol Karma, decimals 18, totalSupply 1e27. owner() and factory() revert. deployer() 0xFf207C9F0e41223A945c4160100677404e6855d4 (eth_getCode 0x). launchFactory() 0x7eD598BcEf8bd9Edd8C97A195C6d13f40801EC7e. curve() 0x8b9F9beeA986E60f1d629eEE48DA78e3e341B1c3. description() Reddit’s reputation score was literally inspired by the name of Reddit founder Alexis Ohanian’s cat, $Karma. socials() twitter https://x.com/CrankDeGod/status/2095131157675614533?s=20 telegram/discord/farcaster empty website https://www.youtube.com/watch?v=60QywS3kwXE. V2LaunchLocker 0x2674…4952 isLocked(token) true. RDDT name Reddit • Robinhood Token code 283 B. Collision 0x55f9…1e18 code 44 B EIP-1167 impl 0x3be8b97f…c599 name Karma Points symbol KARMA owner() Airlock 0xeb7C…0862 launchFactory() reverts." }
  - { id: REP-2, method: explorer-ui, chain_id: 4663, checked_at: 2026-09-03T04:52:00Z, receipt_ids: [R-1, R-3, R-4, R-6, R-15, R-16, R-17, R-18, R-19, R-20], result: "Blockscout api/v2 Chrome UA. Token 0xb1B800…baC3 name Reddit Founder Cat symbol Karma holders_count 771 total_supply 1e27 is_contract true is_verified false proxy_type null creator_address_hash null. launchAndBuy tx 0xe2b04fb3…428c 2026-09-02T12:47:28Z block 52586450 from EOA 0xFf207C…55d4 to PonsV2LaunchAndBuy 0xe33E…2948; params name Reddit Founder Cat symbol Karma twitter CrankDeGod status 2095131157675614533 website youtube.com/watch?v=60QywS3kwXE pairToken RDDT 0x05b37F…F4C quoteIn 2414500000000000000. TokenLaunched token 0xb1B800…baC3 curve 0x8b9F…B1c3 graduationThreshold 42347152428810721502. CurveCompleted / LaunchSwept tx 0x396adb9c…8c14 2026-09-02T12:56:29Z block 52591809 quoteOut 42347152428810721609 tokenOut 285714285714285714288123912. RDDT BeaconProxy Reddit • Robinhood Token holders_count 17089. Collision 0x55f9…1e18 Karma Points / KARMA holders 162 proxy eip1167 DopplerERC20V1; create tx 0x7fc83834…07fb 2026-09-02T06:24:44Z to LongLauncher method create." }
  - { id: REP-3, method: api, checked_at: 2026-09-03T04:50:00Z, receipt_ids: [R-7, R-21], result: "DexScreener tokens/v1/robinhood/0xb1B800…baC3 HTTP 200: 1 pair, KARMA/RDDT v4 0x35183580…65a5 quote RDDT 0x05b37F…F4C liquidity.usd 15134.13 volume.h24 1281710.68 fdv/marketCap 42821 pairCreatedAt 1788353790000 (2026-09-02T12:56:30Z) info.websites youtube.com/watch?v=60QywS3kwXE info.socials x.com/redditcathood. latest/dex/tokens: 16 robinhood uniswap pairs; RDDT book is the volume/liq leader; secondary USDG/ETH books under $200 liq. tokens/v1 collision 0x55f9…1e18: KARMA/RDDT v4 0x85dd…8e8d liquidity.usd 35014.53 volume.h24 308775.8 fdv 36413 pairCreatedAt 1788330284000 (2026-09-02T06:24:44Z) info null. Search q=KARMA RDDT also listed 0xEAb58b46…9fF5 redditkarma.xyz / @redditkarma." }
  - { id: REP-4, method: api, checked_at: 2026-09-03T04:51:00Z, receipt_ids: [R-8], result: "Gecko first GET /api/v2/search/pools?query=KARMA&network=robinhood HTTP 200, so Gecko is in this pass. Pool 0x35183580…65a5 name RDDT / Karma pool_created_at 2026-09-02T12:56:30Z volume_usd.h24 1154172.46674725 reserve_in_usd -667.968440060446 (negative; do not use as TVL) fdv_usd 1479432.35194718 market_cap_usd 1440313.0587714. dex pons-v2-dex. Token 0xb1B800…baC3 volume_usd.h24 1175430.31688009 fdv_usd 224122.86 total_reserve_in_usd 0.0; top_pools are USDG ids, not the RDDT book. Collision pool 0x85dd…8e8d reserve_in_usd 61053.2853 volume_usd.h24 273838.51285343. Do not collapse Gecko fdv/reserve with DexScreener 42821 / 15134.13." }
  - { id: REP-5, method: api, checked_at: 2026-09-03T04:51:00Z, receipt_ids: [R-9], result: "GET api.robinhood.com/rhj/assets HTTP 200; assets length 194; one RDDT hit tokenSymbol RDDT tokenName Reddit • Robinhood Token contractAddress 0x05b37Fb53A299a1b874A619e1c4C404D52C36F4C chainId 4663 status ASSET_STATUS_ACTIVE isin US75734B1008." }

claims:
  - { id: CLM-1, field: product.mechanism, value: "PonsV2LaunchAndBuy.launchAndBuy deploys a 1e9-supply PonsV2LauncherToken onto a PonsV2BondingCurve quoted against pairToken RDDT; CurveCompleted / LaunchSwept about nine minutes later and DexScreener/Gecko pairCreatedAt 2026-09-02T12:56:30Z seed the Uniswap v4 KARMA/RDDT book 0x35183580…65a5 (Gecko dex pons-v2-dex). V2LaunchLocker isLocked(token) true. Token owner() reverts.", class: verified, observed_at: 2026-09-03T04:53:00Z, receipt_ids: [R-3, R-4, R-5, R-6, R-7, R-8], reproduction_ids: [REP-1, REP-2, REP-3], supersedes: null }
  - { id: CLM-2, field: identity.name, value: "Reddit Founder Cat", class: verified, observed_at: 2026-09-03T04:50:00Z, receipt_ids: [R-1, R-3, R-5], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-3, field: identity.symbol, value: "Karma", class: verified, observed_at: 2026-09-03T04:50:00Z, receipt_ids: [R-1, R-3, R-5], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-4, field: deployment.address, value: "0xb1B800835f93d40D43e3B3467494b9155364baC3", class: verified, observed_at: 2026-09-03T04:52:00Z, receipt_ids: [R-1, R-3, R-5], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-5, field: deployment.address, value: "0x7eD598BcEf8bd9Edd8C97A195C6d13f40801EC7e", class: verified, observed_at: 2026-09-03T04:51:00Z, receipt_ids: [R-4, R-5, R-19], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-6, field: lifecycle, value: mainnet, class: verified, observed_at: 2026-09-03T04:52:00Z, receipt_ids: [R-1, R-3, R-5, R-7], reproduction_ids: [REP-1, REP-2, REP-3], supersedes: null }
  - { id: CLM-7, field: taxonomy.primary-leaf, value: launch/graduation-token, class: claim, observed_at: 2026-09-03T04:54:00Z, receipt_ids: [R-3, R-6, R-8], reproduction_ids: [], supersedes: null }
  - { id: CLM-8, field: identity.handle, value: "@redditcathood — bio contains CA 0xb1b800835f93d40d43e3b3467494b9155364bac3 and $Karma; DexScreener info.socials is https://x.com/redditcathood. Constructor socials twitter is a CrankDeGod status URL, not this handle.", class: claim, observed_at: 2026-09-03T04:54:00Z, receipt_ids: [R-5, R-7, R-12], reproduction_ids: [], supersedes: null }
  - { id: CLM-9, field: relationship, value: "Pair quote RDDT 0x05b37F…F4C is Reddit • Robinhood Token in GET /rhj/assets (194 assets, 1 RDDT hit, chainId 4663). RDDT is a rail, not this subject. Flag ca-collision: LongLauncher Karma Points 0x55f9ec832384F737d5ad57FC0c314ddc8Bf41e18 / pair 0x85dd…8e8d (DexScreener liq 35014.53 vol.h24 308775.8, no info.socials). Other same-ticker 4663 rows include 0xEAb58b46…9fF5 redditkarma.xyz and Karma by Virtuals 0xB47f4702…6239 (VIRTUAL book, not RDDT).", class: verified, observed_at: 2026-09-03T04:52:00Z, receipt_ids: [R-9, R-15, R-16, R-17, R-21], reproduction_ids: [REP-2, REP-3, REP-5], supersedes: null }
  - { id: CLM-10, field: economics.metric, value: "DexScreener KARMA/RDDT Uniswap v4 24h volume 1281710.68 USD and liquidity.usd 15134.13 at 2026-09-03T04:50:00Z (pair 0x35183580…65a5)", class: verified, observed_at: 2026-09-03T04:50:00Z, receipt_ids: [R-7], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-11, field: economics.metric, value: "Gecko same pool volume_usd.h24 1154172.47; reserve_in_usd -667.97 (negative; not a TVL figure); fdv_usd 1479432 vs DexScreener fdv 42821. Do not collapse.", class: verified, observed_at: 2026-09-03T04:51:00Z, receipt_ids: [R-8], reproduction_ids: [REP-4], supersedes: null }
  - { id: CLM-12, field: economics.metric, value: 771, class: verified, observed_at: 2026-09-03T04:48:00Z, receipt_ids: [R-1], reproduction_ids: [REP-2], supersedes: null }
  - { id: CLM-13, field: control.owner, value: "token owner() reverts; deployer() 0xFf207C9F0e41223A945c4160100677404e6855d4 has no code. transferCreatorFeeRecipient tx 0x0c21798f…736b at 2026-09-02T12:50:56Z from that EOA to PonsV2LaunchFactory.", class: verified, observed_at: 2026-09-03T04:52:00Z, receipt_ids: [R-5, R-14], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-14, field: control.privileged-role, value: "deployer() / launchAndBuy from 0xFf207C9F0e41223A945c4160100677404e6855d4; launchFactory 0x7eD5…EC7e; curve 0x8b9F…B1c3; V2LaunchLocker 0x2674…4952 isLocked true", class: verified, observed_at: 2026-09-03T04:53:00Z, receipt_ids: [R-3, R-5, R-22], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-15, field: other, value: "Pair asset is RDDT 0x05b37Fb53A299a1b874A619e1c4C404D52C36F4C (Reddit • Robinhood Token); venue is Uniswap v4 pair 0x35183580…65a5, Gecko dex id pons-v2-dex. RDDT is a rail, not this profile.", class: verified, observed_at: 2026-09-03T04:51:00Z, receipt_ids: [R-7, R-8, R-9, R-15], reproduction_ids: [REP-3, REP-4, REP-5], supersedes: null }
  - { id: CLM-16, field: deployment.role, value: "Token creator_address_hash is null on Blockscout; launchFactory() names PonsV2LaunchFactory 0x7eD5…EC7e, not LongLauncher, LaunchpadFactory, or hood.fun", class: verified, observed_at: 2026-09-03T04:52:00Z, receipt_ids: [R-1, R-3, R-5], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-17, field: taxonomy.chain-scope, value: robinhood-native, class: verified, observed_at: 2026-09-03T04:50:00Z, receipt_ids: [R-5, R-7], reproduction_ids: [REP-1, REP-3], supersedes: null }
  - { id: CLM-18, field: security.audit, value: "No audit report URL was located on Blockscout, DexScreener, Gecko, constructor socials, or X search this pass", class: unknown, observed_at: 2026-09-03T04:54:00Z, receipt_ids: [], reproduction_ids: [], supersedes: null }
  - { id: CLM-19, field: communications.status, value: "third-party-link: constructor/DexScreener website is youtube.com/watch?v=60QywS3kwXE; constructor twitter is x.com/CrankDeGod/status/2095131157675614533. @redditcathood bio pins the CA. copypasta-pattern: a netlify vote URL attached the CA.", class: claim, observed_at: 2026-09-03T04:54:00Z, receipt_ids: [R-5, R-7, R-12, R-13, R-23], reproduction_ids: [], supersedes: null }
  - { id: CLM-20, field: economics.metric, value: "DexScreener fdv/marketCap 42821. Gecko pool fdv_usd 1479432 and token fdv_usd 224123 disagree with each other and with DexScreener; Gecko reserve_in_usd is negative. Assignment lead ~$15k liq / ~$1.28M vol matches the DexScreener tokens/v1 RDDT book.", class: verified, observed_at: 2026-09-03T04:51:00Z, receipt_ids: [R-7, R-8], reproduction_ids: [REP-3, REP-4], supersedes: null }
  - { id: CLM-21, field: deployment.address, value: "0x05b37Fb53A299a1b874A619e1c4C404D52C36F4C", class: verified, observed_at: 2026-09-03T04:51:00Z, receipt_ids: [R-5, R-9, R-15], reproduction_ids: [REP-1, REP-5], supersedes: null }
  - { id: CLM-22, field: deployment.address, value: "0x8b9F9beeA986E60f1d629eEE48DA78e3e341B1c3", class: verified, observed_at: 2026-09-03T04:51:00Z, receipt_ids: [R-4, R-5, R-6], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-23, field: identity.domain, value: "NULL — DexScreener info.websites and constructor website are a YouTube watch URL; flag third-party-link", class: claim, observed_at: 2026-09-03T04:50:00Z, receipt_ids: [R-5, R-7], reproduction_ids: [], supersedes: null }
  - { id: CLM-24, field: candidate, value: "karma | KARMA | @redditcathood | NULL — discovery token not in census 49", class: claim, observed_at: 2026-09-03T04:54:00Z, receipt_ids: [R-1, R-7, R-12], reproduction_ids: [], supersedes: null }
  - { id: CLM-25, field: other, value: "ca-collision: LongLauncher Karma Points 0x55f9ec832384F737d5ad57FC0c314ddc8Bf41e18 (44 B EIP-1167 DopplerERC20V1, owner Airlock, Uniswap v4 RDDT pool 0x85dd…8e8d, DexScreener liq 35014.53 vol.h24 308775.8, info null). Canonical CA is 0xb1B800…baC3 because @redditcathood bio and DexScreener socials pin it.", class: verified, observed_at: 2026-09-03T04:52:00Z, receipt_ids: [R-7, R-12, R-16, R-17, R-21], reproduction_ids: [REP-1, REP-2, REP-3], supersedes: null }
  - { id: CLM-26, field: "account.@redditcathood.role", value: project, class: claim, observed_at: 2026-09-03T04:54:00Z, receipt_ids: [R-12], reproduction_ids: [], supersedes: null }
  - { id: CLM-27, field: "account.@redditcathood.slug", value: karma, class: claim, observed_at: 2026-09-03T04:54:00Z, receipt_ids: [R-12], reproduction_ids: [], supersedes: null }
  - { id: CLM-28, field: "account.@redditcathood.follow", value: true, class: claim, observed_at: 2026-09-03T04:54:00Z, receipt_ids: [R-12], reproduction_ids: [], supersedes: null }

conflicts: []

events:
  - id: EVT-1
    type: onchain
    title: "DexScreener KARMA/RDDT 24h volume $1.28M, liquidity $15.1k"
    summary: "DexScreener tokens/v1 pair 0x35183580…65a5 volume.h24 1281710.68 liquidity.usd 15134.13 fdv 42821. Gecko same pool volume_usd.h24 1154172 reserve_in_usd negative; fdv_usd 1.48M. Do not collapse."
    occurred_at: 2026-09-03T04:50:00Z
    observed_at: 2026-09-03T04:51:00Z
    affected_fields: [economics.metric, activity.status]
    evidence_state: verified
    impact: material
    site_recommendation: both
    channel_recommendation: none
    receipt_ids: [R-7, R-8]
  - id: EVT-2
    type: onchain
    title: "PonsV2LaunchAndBuy minted Reddit Founder Cat / Karma"
    summary: "Tx 0xe2b04fb3…428c from 0xFf207C…55d4 at 2026-09-02T12:47:28Z; pairToken RDDT 0x05b37F…F4C quoteIn 2.4145e18; TokenLaunched curve 0x8b9F…B1c3 graduationThreshold 4.235e19."
    occurred_at: 2026-09-02T12:47:28Z
    observed_at: 2026-09-03T04:52:00Z
    affected_fields: [deployment.address, lifecycle, product.mechanism]
    evidence_state: verified
    impact: material
    site_recommendation: profile
    channel_recommendation: none
    receipt_ids: [R-3, R-4]
  - id: EVT-3
    type: onchain
    title: "CurveCompleted / LaunchSwept into KARMA/RDDT"
    summary: "Tx 0x396adb9c…8c14 at 2026-09-02T12:56:29Z; quoteOut 4.235e19 RDDT tokenOut 2.857e26. DexScreener/Gecko pairCreatedAt 2026-09-02T12:56:30Z pool 0x35183580…65a5 dex pons-v2-dex."
    occurred_at: 2026-09-02T12:56:29Z
    observed_at: 2026-09-03T04:52:00Z
    affected_fields: [deployment.address, product.mechanism, lifecycle]
    evidence_state: verified
    impact: material
    site_recommendation: profile
    channel_recommendation: none
    receipt_ids: [R-6, R-7, R-8]
  - id: EVT-4
    type: ct
    title: "@redditcathood posted $KARMA with CA in the bio"
    summary: "@redditcathood (Karma) bio: Reddit founder @alexisohanian cat / $Karma / 0xb1b800835f93d40d43e3b3467494b9155364bac3. Post 2095180358061056233 quoted Alexis Ohanian’s 2023 cat photo: guess $KARMA was always meant to be."
    occurred_at: 2026-09-02T16:01:38Z
    observed_at: 2026-09-03T04:54:00Z
    affected_fields: [identity.handle, communications.status]
    evidence_state: claim
    impact: routine
    site_recommendation: feed
    channel_recommendation: none
    receipt_ids: [R-12]
  - id: EVT-5
    type: onchain
    title: "LongLauncher created same-ticker Karma Points"
    summary: "Tx 0x7fc83834…07fb from 0x28675E…a699 at 2026-09-02T06:24:44Z minted Karma Points / KARMA 0x55f9…1e18 into Uniswap v4 RDDT pool 0x85dd…8e8d. DexScreener info null. Flag ca-collision."
    occurred_at: 2026-09-02T06:24:44Z
    observed_at: 2026-09-03T04:52:00Z
    affected_fields: [relationship, deployment.address]
    evidence_state: verified
    impact: material
    site_recommendation: profile
    channel_recommendation: none
    receipt_ids: [R-16, R-17, R-21]
  - id: EVT-6
    type: ct
    title: "@CrankDeGod posted the Reddit cat lore and CA"
    summary: "Post 2095131157675614533 at 2026-09-02T12:46:08Z quoted Alexis Ohanian’s cat photo, linked youtube.com/watch?v=60QywS3kwXE, and a follow-up posted CA 0xb1b800…bac3. Constructor socials twitter is this status URL."
    occurred_at: 2026-09-02T12:46:08Z
    observed_at: 2026-09-03T04:54:00Z
    affected_fields: [identity.handle, communications.status]
    evidence_state: claim
    impact: routine
    site_recommendation: none
    channel_recommendation: none
    receipt_ids: [R-13]

receipts:
  - { id: R-1, publisher: Blockscout, title: "Token 0xb1B800…baC3 Reddit Founder Cat / Karma", url: "https://robinhoodchain.blockscout.com/address/0xb1B800835f93d40D43e3B3467494b9155364baC3", published_at: null, accessed_at: 2026-09-03T04:48:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-2, CLM-3, CLM-4, CLM-6, CLM-12, CLM-16, CLM-24], excerpt: "hash 0xb1B800835f93d40D43e3B3467494b9155364baC3 name Reddit Founder Cat is_contract true is_verified false proxy_type null implementations []. token symbol Karma decimals 18 total_supply 1000000000000000000000000000 holders_count 771 type ERC-20. creator_address_hash null this pass." }
  - { id: R-2, publisher: Blockscout, title: "Token API 0xb1B800…baC3", url: "https://robinhoodchain.blockscout.com/api/v2/tokens/0xb1B800835f93d40D43e3B3467494b9155364baC3", published_at: null, accessed_at: 2026-09-03T04:48:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-2, CLM-3, CLM-12], excerpt: "address_hash 0xb1B800835f93d40D43e3B3467494b9155364baC3 name Reddit Founder Cat symbol Karma decimals 18 total_supply 1000000000000000000000000000 holders_count 771 type ERC-20." }
  - { id: R-3, publisher: Blockscout, title: "launchAndBuy tx 0xe2b04fb3…428c", url: "https://robinhoodchain.blockscout.com/tx/0xe2b04fb3443286df62c920ed2e523cd450fb9fa2492c5e71425df87b0aac428c", published_at: 2026-09-02T12:47:28Z, accessed_at: 2026-09-03T04:52:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-2, CLM-3, CLM-4, CLM-6, CLM-14, CLM-16, EVT-2], excerpt: "timestamp 2026-09-02T12:47:28.000000Z status ok block_number 52586450 from 0xFf207C9F0e41223A945c4160100677404e6855d4 (is_contract false) to PonsV2LaunchAndBuy 0xe33E9E479dF8802cb0866d5d05258bEc4cF62948 method launchAndBuy. params name Reddit Founder Cat symbol Karma website youtube.com/watch?v=60QywS3kwXE pairToken 0x05b37Fb53A299a1b874A619e1c4C404D52C36F4C quoteIn 2414500000000000000." }
  - { id: R-4, publisher: Blockscout, title: "TokenLaunched log for KARMA", url: "https://robinhoodchain.blockscout.com/tx/0xe2b04fb3443286df62c920ed2e523cd450fb9fa2492c5e71425df87b0aac428c", published_at: 2026-09-02T12:47:28Z, accessed_at: 2026-09-03T04:52:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-5, CLM-14, CLM-22, EVT-2], excerpt: "PonsV2LaunchFactory TokenLaunched token 0xb1B800835f93d40D43e3B3467494b9155364baC3 curve 0x8b9F9beeA986E60f1d629eEE48DA78e3e341B1c3 deployer 0xFf207C9F0e41223A945c4160100677404e6855d4 pairToken 0x05b37Fb53A299a1b874A619e1c4C404D52C36F4C launchConfigId 0 graduationThreshold 42347152428810721502. Block 52586450." }
  - { id: R-5, publisher: Robinhood Chain RPC, title: "eth_getCode, name, symbol, launchFactory() on KARMA", url: "https://rpc.mainnet.chain.robinhood.com", published_at: null, accessed_at: 2026-09-03T04:50:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-2, CLM-3, CLM-4, CLM-5, CLM-6, CLM-8, CLM-13, CLM-14, CLM-16, CLM-17, CLM-21, CLM-22, CLM-23, CLM-25], excerpt: "eth_chainId 0x1237 eth_blockNumber 0x32af97a (53148026). Token code 3248 B prefix 60806040. name Reddit Founder Cat symbol Karma decimals 18 totalSupply 1e27. owner() reverts. deployer() 0xFf207C9F…55d4 code 0x. launchFactory() 0x7eD598BcEf8bd9Edd8C97A195C6d13f40801EC7e. curve() 0x8b9F9bee…B1c3. socials twitter CrankDeGod status website youtube.com/watch?v=60QywS3kwXE. Collision 0x55f9…1e18 code 44 B EIP-1167." }
  - { id: R-6, publisher: Blockscout, title: "CurveCompleted / LaunchSwept tx 0x396adb9c…8c14", url: "https://robinhoodchain.blockscout.com/tx/0x396adb9c03cd6d48014166aa8c2819cc07cb2a503e81fe0acb206b60753a8c14", published_at: 2026-09-02T12:56:29Z, accessed_at: 2026-09-03T04:52:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-7, CLM-22, EVT-3], excerpt: "timestamp 2026-09-02T12:56:29.000000Z status ok block_number 52591809. CurveCompleted recipient 0x7eD598BcEf8bd9Edd8C97A195C6d13f40801EC7e quoteOut 42347152428810721609 tokenOut 285714285714285714288123912. LaunchSwept token 0xb1B800…baC3. PoolManager Swap also in this tx." }
  - { id: R-7, publisher: DexScreener, title: "tokens/v1 KARMA 0xb1B800…baC3", url: "https://api.dexscreener.com/tokens/v1/robinhood/0xb1B800835f93d40D43e3B3467494b9155364baC3", published_at: null, accessed_at: 2026-09-03T04:50:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-6, CLM-8, CLM-10, CLM-15, CLM-17, CLM-19, CLM-20, CLM-23, CLM-24, EVT-1], excerpt: "1 robinhood uniswap pair. pairAddress 0x351835802f3ee56f4336fc4c7e9fed3cc3dbcd320aa10e320a720249465165a5 labels v4 base Reddit Founder Cat / Karma quote Reddit • Robinhood Token / RDDT 0x05b37Fb53A…F4C liquidity.usd 15134.13 volume.h24 1281710.68 fdv 42821 marketCap 42821 pairCreatedAt 1788353790000. info.websites youtube.com/watch?v=60QywS3kwXE info.socials x.com/redditcathood." }
  - { id: R-8, publisher: GeckoTerminal, title: "KARMA/RDDT Pons V2 pool", url: "https://api.geckoterminal.com/api/v2/networks/robinhood/pools/0x351835802f3ee56f4336fc4c7e9fed3cc3dbcd320aa10e320a720249465165a5", published_at: null, accessed_at: 2026-09-03T04:51:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-11, CLM-15, CLM-20, EVT-1, EVT-3], excerpt: "name RDDT / Karma pool_created_at 2026-09-02T12:56:30Z fdv_usd 1479432.35194718 market_cap_usd 1440313.0587714 volume_usd.h24 1154172.46674725 reserve_in_usd -667.968440060446. dex pons-v2-dex. First Gecko GET search/pools HTTP 200 this pass." }
  - { id: R-9, publisher: Robinhood, title: "GET /rhj/assets Stock Token registry", url: "https://api.robinhood.com/rhj/assets", published_at: null, accessed_at: 2026-09-03T04:51:00Z, kind: docs, authority: primary, authenticity: confirmed, supports: [CLM-9, CLM-15, CLM-21], excerpt: "HTTP 200. assets length 194. One RDDT hit tokenSymbol RDDT tokenName Reddit • Robinhood Token contractAddress 0x05b37Fb53A299a1b874A619e1c4C404D52C36F4C chainId 4663 status ASSET_STATUS_ACTIVE isin US75734B1008." }
  - { id: R-12, publisher: "@redditcathood", title: "guess $KARMA was always meant to be", url: "https://x.com/redditcathood/status/2095180358061056233", published_at: 2026-09-02T16:01:38Z, accessed_at: 2026-09-03T04:54:00Z, kind: social, authority: social, authenticity: confirmed, supports: [CLM-8, CLM-19, CLM-24, CLM-25, CLM-26, CLM-27, CLM-28, EVT-4], excerpt: "Profile Karma @redditcathood. Bio: Reddit founder @alexisohanian cat / $Karma / 0xb1b800835f93d40d43e3b3467494b9155364bac3. Post quotes Alexis Ohanian 1635022112548347905 (12 Mar 2023 cat photo): Thank you for giving me the name… guess $KARMA was always meant to be." }
  - { id: R-13, publisher: "@CrankDeGod", title: "Reddit founder cat lore", url: "https://x.com/CrankDeGod/status/2095131157675614533", published_at: 2026-09-02T12:46:08Z, accessed_at: 2026-09-03T04:54:00Z, kind: social, authority: social, authenticity: unconfirmed, supports: [CLM-19, EVT-6], excerpt: "THIS MIGHT BE ONE OF THE BEST HIDDEN LORE FROM REDDIT. Reddit founder Alexis Ohanian has a black cat named $Karma. https://www.youtube.com/watch?v=60QywS3kwXE Pairing with $RDDT. Follow-up 2095132066866409568 posted CA 0xb1b800835f93d40d43e3b3467494b9155364bac3." }
  - { id: R-14, publisher: Blockscout, title: "transferCreatorFeeRecipient tx 0x0c21798f…736b", url: "https://robinhoodchain.blockscout.com/tx/0x0c21798f49193ec33b0c568c675736b903bbd7f50236b4b3a87f648ff1cb736b", published_at: 2026-09-02T12:50:56Z, accessed_at: 2026-09-03T04:52:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-13], excerpt: "timestamp 2026-09-02T12:50:56.000000Z status ok block_number 52588501 from 0xFf207C9F0e41223A945c4160100677404e6855d4 to PonsV2LaunchFactory method transferCreatorFeeRecipient." }
  - { id: R-15, publisher: Blockscout, title: "Token 0x05b37F…F4C RDDT", url: "https://robinhoodchain.blockscout.com/address/0x05b37Fb53A299a1b874A619e1c4C404D52C36F4C", published_at: null, accessed_at: 2026-09-03T04:48:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-9, CLM-15, CLM-21], excerpt: "hash 0x05b37Fb53A299a1b874A619e1c4C404D52C36F4C name BeaconProxy is_contract true is_verified true proxy_type eip1967_beacon implementations Stock 0xb35490d6f9163DE4F80d88dc75c3516eb64C5aE2. token name Reddit • Robinhood Token symbol RDDT decimals 18 total_supply 9401839000000000000000 holders_count 17089. RDDT is the pair rail, not this profile." }
  - { id: R-16, publisher: Blockscout, title: "Collision token 0x55f9…1e18 Karma Points", url: "https://robinhoodchain.blockscout.com/address/0x55f9ec832384F737d5ad57FC0c314ddc8Bf41e18", published_at: null, accessed_at: 2026-09-03T04:48:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-9, CLM-25, EVT-5], excerpt: "hash 0x55f9ec832384F737d5ad57FC0c314ddc8Bf41e18 name Karma Points is_contract true is_verified true proxy_type eip1167 implementations DopplerERC20V1 0x3Be8B97Fd0e713B5aBE0649Fa830223B6B4BC599 creator 0x1B37D3a72082029c44B35B604Ea473617580b69a tx 0x7fc838341a64ef4acc71ecb3bc5e6b59df279731803d7bd7b22dd072563a07fb. token name Karma Points symbol KARMA holders_count 162." }
  - { id: R-17, publisher: Blockscout, title: "LongLauncher create tx 0x7fc83834…07fb", url: "https://robinhoodchain.blockscout.com/tx/0x7fc838341a64ef4acc71ecb3bc5e6b59df279731803d7bd7b22dd072563a07fb", published_at: 2026-09-02T06:24:44Z, accessed_at: 2026-09-03T04:50:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-9, CLM-25, EVT-5], excerpt: "timestamp 2026-09-02T06:24:44.000000Z status ok block_number 52358545 from 0x28675E482ddAA4E32674A2a70A502720Fb5dA699 to LongLauncher 0x22e99278308B393ea1260859B181AD7E78f5eeED method create. PoolManager Initialize id 0x85dd1797…8e8d currency0 RDDT currency1 0x55f9…1e18. LaunchCreated normalizedTicker KARMA. DexScreener info null." }
  - { id: R-18, publisher: Blockscout, title: "Address 0x3711…1A42 PonsV2LaunchDeployer", url: "https://robinhoodchain.blockscout.com/address/0x3711ceA4feaDE896C913C68F01Eda97Cb06D1A42", published_at: null, accessed_at: 2026-09-03T04:52:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-16], excerpt: "hash 0x3711ceA4feaDE896C913C68F01Eda97Cb06D1A42 name PonsV2LaunchDeployer is_contract true is_verified true proxy_type null creator_address_hash 0xFdDE5a1E3cDF791Da71E49F817D70C7ceD72CC36." }
  - { id: R-19, publisher: Blockscout, title: "Address 0x7eD5…EC7e PonsV2LaunchFactory", url: "https://robinhoodchain.blockscout.com/address/0x7eD598BcEf8bd9Edd8C97A195C6d13f40801EC7e", published_at: null, accessed_at: 2026-09-03T04:51:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-5], excerpt: "hash 0x7eD598BcEf8bd9Edd8C97A195C6d13f40801EC7e name PonsV2LaunchFactory is_contract true is_verified true creator_address_hash 0xFdDE5a1E3cDF791Da71E49F817D70C7ceD72CC36." }
  - { id: R-20, publisher: Blockscout, title: "Address 0xe33E…2948 PonsV2LaunchAndBuy", url: "https://robinhoodchain.blockscout.com/address/0xe33E9E479dF8802cb0866d5d05258bEc4cF62948", published_at: null, accessed_at: 2026-09-03T04:52:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, EVT-2], excerpt: "hash 0xe33E9E479dF8802cb0866d5d05258bEc4cF62948 name PonsV2LaunchAndBuy is_contract true is_verified true creator_address_hash 0xFdDE5a1E3cDF791Da71E49F817D70C7ceD72CC36." }
  - { id: R-21, publisher: DexScreener, title: "search q=KARMA RDDT", url: "https://api.dexscreener.com/latest/dex/search?q=KARMA%20RDDT", published_at: null, accessed_at: 2026-09-03T04:50:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-9, CLM-25, EVT-5], excerpt: "robinhood uniswap 0xb1B800…baC3 Karma/RDDT liq 15113.01 vol 1281675.35 socials x.com/redditcathood; 0x55f9ec832384F737d5ad57FC0c314ddc8Bf41e18 KARMA/RDDT liq 35014.53 vol 308775.8 info None; 0xEAb58b46…9fF5 redditkarma.xyz / x.com/redditkarma. Quote on those books is RDDT 0x05b37F…F4C." }
  - { id: R-22, publisher: Robinhood Chain RPC, title: "V2LaunchLocker isLocked(token)", url: "https://rpc.mainnet.chain.robinhood.com", published_at: null, accessed_at: 2026-09-03T04:53:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-14], excerpt: "V2LaunchLocker 0x267444D099b10fB5Ed7c3Cc7B7c767AdcA574952 eth_getCode 1969 B. isLocked(0xb1B800835f93d40D43e3B3467494b9155364baC3) returns 1. Blockscout name V2LaunchLocker is_verified true." }
  - { id: R-23, publisher: "@shadowpawsxNFT", title: "Netlify vote URL with KARMA CA", url: "https://x.com/shadowpawsxNFT/status/2095355373947441643", published_at: 2026-09-03T03:37:05Z, accessed_at: 2026-09-03T04:54:00Z, kind: social, authority: social, authenticity: unconfirmed, supports: [CLM-19], excerpt: "Attention $KARMA Family! YOUR vote matters! Listing ID: 4862 https://robinhood-main-dex-sjt.netlify.app/vote/0xb1B800835f93d40D43e3B3467494b9155364baC3. Flag copypasta-pattern and third-party-link." }

gaps:
  - { priority: P0, question: "Which createGraduatedPool tx initialized poolId 0x35183580…65a5 and what PositionLocked tokenId did V2LaunchLocker record?", checked: "CurveCompleted/LaunchSwept 0x396adb9c…8c14 at 12:56:29Z includes PoolManager Swap but decoded logs had no Initialize/PoolGraduated; DexScreener/Gecko pairCreatedAt 12:56:30Z; isLocked(token) true, 2026-09-03", next: "scan PonsV2LaunchFactory txs in blocks 52591809–52591820 for createGraduatedPool(token 0xb1B800…baC3)" }
  - { priority: P1, question: "Does verified PonsV2LauncherToken source on a sibling clone apply to this unverified 3248 B CA?", checked: "this token is_verified false; owner() reverts; bytecode length matches other Pons v2 LaunchTokens; factory/buy/deployer are verified, 2026-09-03", next: "compare deployed bytecode to a verified PonsV2LauncherToken" }
  - { priority: P1, question: "Who is the current creator fee recipient after transferCreatorFeeRecipient 0x0c21798f…736b?", checked: "tx from deployer 0xFf207C…55d4 to PonsV2LaunchFactory at 2026-09-02T12:50:56Z; decoded newRecipient not copied this pass", next: "read decoded_input on that tx" }
  - { priority: P2, question: "Should aggregators treat Gecko fdv 1.48M / negative reserve as a quote-side RDDT artefact versus DexScreener fdv 42821 / liq 15134?", checked: "Gecko pool GET 200 with reserve_in_usd negative and fdv 10x DexScreener; token fdv 224123; DexScreener tokens/v1 42821 / 15134.13 / 1.28M vol, 2026-09-03", next: "keep the DexScreener KARMA/RDDT pair slice; do not mix Gecko reserve with DexScreener fdv" }
---

# KARMA — research packet

## What it is

A one-billion-supply Pons v2 ERC-20 that graduated into a Uniswap v4 KARMA/RDDT pool. Traders buy and sell Reddit Founder Cat (Karma) against the Reddit • Robinhood Token on that book. RDDT is the quote rail, not this profile. Distinct from LongLauncher Karma Points 0x55f9…1e18 on the same rail.

Themes: memecoin, stock-paired:RDDT, rwa, launchpad

## Why it matters

The KARMA/RDDT Uniswap v4 book printed about $1.28M of 24h volume on DexScreener at collection, with the quote leg the workbook RDDT Stock Token 0x05b37F…F4C (GET /rhj/assets row). @redditcathood pins that CA in the bio. A deeper same-ticker RDDT book at 0x55f9…1e18 has no DexScreener socials and is a LongLauncher clone.

## What could go wrong

USD liquidity figures on the KARMA/RDDT book count both sides, and the quote side is RDDT, not USDG. Ticker-only pairing is not identity: 0x55f9…1e18 is a ca-collision. Constructor/DexScreener website is a YouTube watch URL (third-party-link). Gecko prints a negative reserve and an fdv about 30x DexScreener; those slices are not the same number.

## Product and mechanics

PonsV2LaunchAndBuy 0xe33E…2948 launchAndBuy from 0xFf207C…55d4 at 2026-09-02T12:47:28Z minted Reddit Founder Cat / Karma supply 1e9*1e18 onto PonsV2BondingCurve 0x8b9F…B1c3 quoted against pairToken RDDT 0x05b37F…F4C with quoteIn 2414500000000000000. factory TokenLaunched names PonsV2LaunchFactory 0x7eD5…EC7e and graduationThreshold 42347152428810721502. [verified R-3 R-4 R-5]

CurveCompleted / LaunchSwept tx 0x396adb9c…8c14 at 2026-09-02T12:56:29Z swept quoteOut 42347152428810721609 RDDT and tokenOut 285714285714285714288123912. DexScreener tokens/v1 and Gecko pool_created_at 2026-09-02T12:56:30Z name Uniswap v4 poolId 0x35183580…65a5 (Gecko dex pons-v2-dex). V2LaunchLocker isLocked(token) true. Secondary KARMA/USDG and KARMA/ETH books exist on DexScreener with far less liquidity than the RDDT book. [verified R-6 R-7 R-8 R-22]

## Control and security

token owner() reverts. Deployer 0xFf207C…55d4 has no code. transferCreatorFeeRecipient at 2026-09-02T12:50:56Z called PonsV2LaunchFactory from that EOA. [verified R-5 R-14]

PonsV2LaunchFactory, PonsV2LaunchAndBuy, PonsV2LaunchDeployer, and V2LaunchLocker are verified on Blockscout. This token CA is_verified false (3248 B, not an EIP-1167 proxy). No audit report URL was located this pass. [verified R-1 R-18 R-19 R-20 R-22] [unknown]

## Team and provenance

@redditcathood bio contains CA 0xb1b800…bac3 and $Karma; DexScreener info.socials is that handle. Constructor socials twitter is @CrankDeGod status 2095131157675614533 and website is youtube.com/watch?v=60QywS3kwXE. Flag third-party-link on the YouTube URL. A netlify vote URL attached the CA; flag copypasta-pattern. [claim R-5 R-7 R-12 R-13 R-23]

## Economics and activity

KARMA/RDDT Uniswap v4 24h volume is 1281710.68 USD and liquidity.usd is 15134.13 at 2026-09-03T04:50:00Z from DexScreener tokens/v1. fdv/marketCap is 42821. Blockscout holders_count 771. Pair created 2026-09-02T12:56:30Z. [claim R-1 R-7]

Gecko same pool volume_usd.h24 is 1154172.47. reserve_in_usd is -667.97 (negative; not TVL). fdv_usd is 1479432; Gecko token fdv_usd is 224123. Do not collapse with DexScreener 42821 / 15134.13. Assignment lead of ~$15k liq / ~$1.28M vol matches the DexScreener tokens/v1 RDDT book. Collision 0x55f9…1e18 DexScreener liq 35014.53 vol.h24 308775.8. [claim R-7 R-8 R-21]

## Material risks

- Quote token RDDT 0x05b37F…F4C is a Stock Token rail; pool USD figures count KARMA plus RDDT. [verified R-9 R-15]
- Same-ticker LongLauncher Karma Points 0x55f9…1e18 is a ca-collision with deeper displayed liquidity and no DexScreener socials. [verified R-16 R-17 R-21]
- Constructor/DexScreener website is YouTube. Flag third-party-link. [claim R-5 R-7]
- Token source is unverified on this CA. No audit report URL this pass. [verified R-1] [unknown]
- Gecko reserve is negative and fdv disagrees with DexScreener by more than 10x. [claim R-8]

## Verification passes

- Receipts: Blockscout token/factory/buy/deployer/RDDT/collision and launchAndBuy / LaunchSwept txs, RPC name/symbol/launchFactory/curve/isLocked, DexScreener tokens/v1 + search, Gecko first GET 200 then pool, /rhj/assets, @redditcathood, and @CrankDeGod were opened on 2026-09-03 and excerpts copied from the responses. [verified R-1 R-5 R-7 R-8 R-9 R-12]
- Numbers: 1281710.68 is the DexScreener KARMA/RDDT pool 24h volume, not Gecko token all-pools 1175430. Reserve for TVL is DexScreener 15134.13; Gecko reserve_in_usd is negative and is not used as TVL. Collision 35014.53 / 308775.8 is a different CA. [claim R-7 R-8 R-21]
- Adversarial: the strongest contrary reading is that 0x55f9…1e18 is the canonical KARMA because it has more DexScreener liquidity. @redditcathood bio and DexScreener socials pin 0xb1B800…baC3; 0x55f9…1e18 has empty info.socials and is a LongLauncher Doppler clone. [inference R-7 R-12 R-16 R-21]

## Operations log

- Base: census 49 slugs have no karma / KARMA / Reddit Founder Cat / 0xb1B800…baC3. content/dependencies/stock-tokens.yaml RDDT 0x05b37F…F4C.
- Explorer: Blockscout api/v2 token, factory, buy, deployer, locker, RDDT, collision, launchAndBuy 0xe2b04fb3…428c, LaunchSwept 0x396adb9c…8c14, LongLauncher create 0x7fc83834…07fb, holders. RPC eth_getCode/eth_call with Chrome UA at blocks 53148026–53150698.
- Aggregators: DexScreener tokens/v1, latest/dex/tokens, token-pairs/v1, search q=KARMA RDDT. Gecko first GET search/pools HTTP 200, then pool and token.
- Registry: GET api.robinhood.com/rhj/assets 194 assets, 1 RDDT.
- Social: X Latest from:redditcathood; keyword KARMA RDDT; user search; thread 2095131157675614533.
- Failed: Blockscout token creator_address_hash null (launchFactory() used instead); classic account API 429; createGraduatedPool Initialize log not in the LaunchSwept tx decoded set this pass; Gecko reserve_in_usd negative.
- Time: collection 2026-09-03T04:47Z–2026-09-03T04:54Z.
