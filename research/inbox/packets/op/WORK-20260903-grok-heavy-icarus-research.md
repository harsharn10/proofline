---
# Packet v2 (docs/research-system.md §5). Seed with Icarus What-it-is + events.
contract_version: proofline-research-v2
work_id: WORK-20260903-grok-heavy-icarus-research
producer: grok-heavy
role: collector
base_sha: 334ca0619aa62e922da83f46de021f06d12348cf
slug: op
name: OP
packet_tier: seed
as_of: 2026-09-03T05:15:00Z
prior_packet: null
supersedes: null
owned_slugs: [op]
allowed_paths:
  - research/inbox/packets/op/WORK-20260903-grok-heavy-icarus-research.md

identity:
  canonical_name: OP
  aliases: ["Sandisk Optimus"]
  symbols: [OP]
  entity_kind: token
  chain_scope: robinhood-native
  official_domain: "NULL — DexScreener info.websites is https://www.sandisk.com/en-gb/campaigns/op (Sandisk gaming campaign). GET that URL HTTP 200 title OP Has Entered the Chat | Sandisk; page has no 0xF25C…3214, no Robinhood, no SNDK. Gecko token attributes have no website. Flag third-party-link"
  official_handle: "NULL — DexScreener info.socials lists x.com/sandiskoptimus; @sandiskoptimus bio is the Sandisk gaming brand and Latest posts this pass do not embed CA 0xF25C…3214. Launch params twitter field is a status URL from @bestdevicook, not a project handle. Flag unconfirmed-official"
  repository: "NULL — no GitHub org or repository URL on DexScreener, Gecko token attributes, Blockscout, or X search this pass"
  possible_matches:
    - slug: pons
      signals: [shared-deployer]
      contrary_signals:
        - "Census Pons is the launchpad at ponsfamily.com / @ponsdotfamily with PonsV2LaunchFactory 0x7eD5…EC7e"
        - "OP is the ERC-20 at 0xF25C…3214 created through that factory; entity_kind token, not protocol"
        - "No shared domain or handle; Sandisk campaign URL is not ponsfamily.com"
    - slug: long
      signals: [other]
      contrary_signals:
        - "Census LONG is a stock-paired factory at app.long.xyz / @longdotxyz with LongLauncher 0x22e9…eeED"
        - "OP was launched by PonsV2LaunchFactory 0x7eD5…EC7e via PonsV2LaunchAndBuy, not LongLauncher"
        - "Packed CACHE/SNDK 0xAfe41…1E18 is the LongLauncher token on this rail; OP is a different CA"
        - "No shared domain, handle, or reproduced address"
    - slug: artificial-inu
      signals: [other]
      contrary_signals:
        - "Census Artificial Inu is $AI at 0x2E8c…1e18 paired to NVDA via LongLauncher, site artificialinu.com / @ArtificiallyInu"
        - "OP is Sandisk Optimus at 0xF25C…3214 paired to SNDK via Pons v2; different CA, quote, name and handle"
        - "No shared domain, handle, or reproduced address"
    - slug: l4va
      signals: [other]
      contrary_signals:
        - "Census L4VA is a vault factory issuing tokens backed by locked RWAs"
        - "OP is a Pons v2 LaunchToken in a Uniswap v4 OP/SNDK pool"
        - "No shared domain, handle, or reproduced address"

classification:
  primary_leaf: rwa-products/stock-paired-token
  secondary_leaves: [launch/graduation-token]
  mechanism_tags: [stock-paired, rwa, amm, bonding-curve]
  ecosystem_role: graduation
  lifecycle: mainnet
  coverage_recommendation: seed
  evidence_state: partly-verified
  rationale: "Not in the 49-row census. Token 0xF25C…3214 is a fully verified PonsV2LauncherToken with 3248 bytes of code on 4663; name Sandisk Optimus, symbol OP, totalSupply 1e27. PonsV2LaunchAndBuy.launchAndBuy at 2026-08-31T21:02:01Z minted into PonsV2BondingCurve quoted against SNDK 0xB90A…6400; createGraduatedPool at 2026-08-31T21:02:46Z locked Uniswap v4 pool 0x62e9…dc67. V2LaunchLocker isLocked true. SNDK is the rail in GET /rhj/assets. Distinct from packed CACHE/SNDK and from HDD/SNDK. No bidirectional project domain or handle this pass. [R-1] [R-3] [R-4] [R-5] [R-6] [R-7] [R-10]"

qualifying:
  deployed_on_chain: { status: pass, claim_ids: [CLM-4, CLM-5, CLM-6], note: "" }
  native_play:       { status: pass, claim_ids: [CLM-1, CLM-14], note: "" }
  citable:           { status: pass, claim_ids: [CLM-2, CLM-3, CLM-4], note: "" }
  research_story:    { status: pass, claim_ids: [CLM-1, CLM-9, CLM-10], note: "" }

links:
  - { kind: site, url: "https://www.sandisk.com/en-gb/campaigns/op", authenticity: unconfirmed }
  - { kind: x, url: "https://x.com/sandiskoptimus", authenticity: unconfirmed }

deployments:
  - label: OP token (PonsV2LauncherToken)
    role: token
    address:
      value: "0xF25Ccb1036C41e953F84eC9F3cC72f8d73953214"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T05:04:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-1, R-3, R-21]
  - label: PonsV2LaunchFactory
    role: factory
    address:
      value: "0x7eD598BcEf8bd9Edd8C97A195C6d13f40801EC7e"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T05:08:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-4, R-5, R-15]
  - label: V2LaunchLocker (locked graduation position)
    role: vault
    address:
      value: "0x267444D099b10fB5Ed7c3Cc7B7c767AdcA574952"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T05:10:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-4, R-6, R-20]
  - label: SNDK quote (pairToken / Robinhood Stock Token rail)
    role: token
    address:
      value: "0xB90A19fF0Af67f7779afF50A882A9CfF42446400"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T05:06:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-3, R-10, R-14]

metrics:
  - { kind: volume_24h, value: 515331.69, currency: USD, as_of: 2026-09-03T05:05:00Z, window: 24h, method: "api.dexscreener.com/latest/dex/tokens/0xF25Ccb1036C41e953F84eC9F3cC72f8d73953214 pair 0x62e9…dc67 OP/SNDK Uniswap v4 volume.h24", class: claim, receipt_ids: [R-7] }
  - { kind: tvl, value: 43031.71, currency: USD, as_of: 2026-09-03T05:05:00Z, window: point, method: "api.dexscreener.com/latest/dex/tokens/0xF25Ccb1036C41e953F84eC9F3cC72f8d73953214 pair 0x62e9…dc67 OP/SNDK liquidity.usd", class: claim, receipt_ids: [R-7] }
  - { kind: volume_24h, value: 490339.593444704, currency: USD, as_of: 2026-09-03T05:08:00Z, window: 24h, method: "api.geckoterminal.com/api/v2/networks/robinhood/pools/0x62e9d888f0a5ac01ceb645b548b0eb18e0ee921784649fe365ce8baec5ebdc67 volume_usd.h24 (OP/SNDK pool slice, not Gecko token all-pools)", class: claim, receipt_ids: [R-8] }
  - { kind: tvl, value: 38151.4449, currency: USD, as_of: 2026-09-03T05:08:00Z, window: point, method: "api.geckoterminal.com/api/v2/networks/robinhood/pools/0x62e9d888f0a5ac01ceb645b548b0eb18e0ee921784649fe365ce8baec5ebdc67 reserve_in_usd", class: claim, receipt_ids: [R-8] }
  - { kind: volume_24h, value: 492866.749174159, currency: USD, as_of: 2026-09-03T05:07:00Z, window: 24h, method: "api.geckoterminal.com/api/v2/networks/robinhood/tokens/0xf25ccb1036c41e953f84ec9f3cc72f8d73953214 volume_usd.h24 (all pools, not the OP/SNDK pool slice)", class: claim, receipt_ids: [R-9] }
  - { kind: market_cap, value: 218253, currency: USD, as_of: 2026-09-03T05:05:00Z, window: point, method: "api.dexscreener.com/latest/dex/tokens/0xF25Ccb1036C41e953F84eC9F3cC72f8d73953214 pair 0x62e9…dc67 OP/SNDK fdv/marketCap", class: claim, receipt_ids: [R-7] }
  - { kind: holders, value: 477, currency: null, as_of: 2026-09-03T05:04:00Z, window: point, method: "robinhoodchain.blockscout.com/api/v2/tokens/0xF25Ccb1036C41e953F84eC9F3cC72f8d73953214 holders_count", class: claim, receipt_ids: [R-1] }

reproductions:
  - { id: REP-1, method: explorer-rpc, chain_id: 4663, checked_at: 2026-09-03T05:06:00Z, receipt_ids: [R-3], result: "rpc.mainnet.chain.robinhood.com eth_chainId 0x1237 (4663) eth_blockNumber 0x32b1b9e (53156766). Token 0xF25C…3214 eth_getCode 3248 bytes prefix 0x60806040 (not EIP-1167). name Sandisk Optimus; symbol OP; decimals 18; totalSupply 1e27. owner() and factory() revert. deployer() 0x7CE3Cd0717443ed2c165F26bA7Fc3EdF3A0856aB; launchFactory() 0x7eD598BcEf8bd9Edd8C97A195C6d13f40801EC7e; curve() 0xa0c1C6a661e7e3122cd2d8cD9D37100afC23fC19. EIP-1967 implementation slot zero. SNDK 0xB90A…6400 name Sandisk Corporation • Robinhood Token symbol SNDK code 283 B." }
  - { id: REP-2, method: explorer-rpc, chain_id: 4663, checked_at: 2026-09-03T05:10:00Z, receipt_ids: [R-4], result: "V2LaunchLocker 0x2674…4952 factory() 0x7eD598BcEf8bd9Edd8C97A195C6d13f40801EC7e; owner() 0x263ed295dAFaE1d9AAdD6E56c4B6F9f38eE019Dd; isLocked(token) true; lockedPositions 1337575 (0x1468e7); lockedTokenSupply 81632653061224489250681771. Factory locker() 0x2674…4952; memeHook 0xE5e702641Ea86F4ae6cC3cDaeD2B886f976Be044; launchDeployer 0x3711ceA4feaDE896C913C68F01Eda97Cb06D1A42; launchForwarder 0xe33E9E479dF8802cb0866d5d05258bEc4cF62948; poolManager 0x8366a39CC670B4001A1121B8F6A443A643e40951; owner 0x263e…19Dd; approvedPairTokens(SNDK) true. getLaunchedToken exists 1 phase uint8 2 pairToken SNDK creatorFeeRecipient 0xcF96…2d1E. eth_getLogs TokenLaunched tx 0xef087db2…7e6b block 51169078; PoolGraduated tx 0x8f580f79…6f84 block 51169520 positionId 1337575." }
  - { id: REP-3, method: explorer-ui, chain_id: 4663, checked_at: 2026-09-03T05:12:00Z, receipt_ids: [R-1, R-5, R-6, R-14, R-15, R-18, R-20, R-21], result: "Blockscout api/v2 Chrome UA: token 0xF25C…3214 is_contract true is_verified true is_fully_verified true name Sandisk Optimus proxy_type null creator_address_hash PonsV2LaunchDeployer 0x3711…1A42 creation_transaction_hash 0xef087db2…7e6b. Token symbol OP holders_count 477 total_supply 1e27 type ERC-20. Smart-contract name PonsV2LauncherToken compiler v0.8.35 file_path contracts/src/v2/PonsV2LauncherToken.sol verified_at 2026-08-31T21:07:57Z. Launch tx 2026-08-31T21:02:01Z block 51169078 from EOA 0x7CE3…6aB to PonsV2LaunchAndBuy 0xe33E…2948 method launchAndBuy pairToken SNDK. Grad tx 2026-08-31T21:02:46Z block 51169520 from EOA 0x9e8C…Ef3f; PoolManager Initialize id 0x62e9…dc67 currency0 SNDK currency1 OP hooks V2MemeHook. Factory 0x7eD5…EC7e name PonsV2LaunchFactory is_fully_verified true. Locker 0x2674…4952 name V2LaunchLocker is_partially_verified true file_path src/v2/V2LaunchLocker.sol." }
  - { id: REP-4, method: api, checked_at: 2026-09-03T05:08:00Z, receipt_ids: [R-7, R-8, R-9, R-16], result: "DexScreener latest/dex/tokens/0xF25C…3214: 3 robinhood uniswap pairs. Top OP/SNDK v4 0x62e9…dc67 quote SNDK 0xB90A…6400 liquidity.usd 43031.71 volume.h24 515331.69 fdv/marketCap 218253 pairCreatedAt 1788210166000 (2026-08-31T21:02:46Z) info.websites sandisk.com/en-gb/campaigns/op info.socials x.com/sandiskoptimus. Secondary OP/USDG liq 516.18 and OP/ETH liq 3.66. Gecko token GET 200 fdv_usd 216681.40835762 volume_usd.h24 492866.749174159 total_reserve_in_usd 18030.068859619 market_cap_usd null launchpad_details.completed true completed_at 2026-08-31T21:02:46Z migrated_destination_pool_address 0x62e9…dc67. Gecko pool GET 200 name SNDK / OP dex pons-v2-dex volume_usd.h24 490339.593444704 reserve_in_usd 38151.4449 fdv_usd 1712815.05680504 (SNDK as base_token_price_usd 1563.26855903809). DexScreener search HDD/SNDK Hard Disk Dog 0xAE9b…1E18 pair 0x3c84…3f77 liq 90688.18 vol 117381.79; CACHE/SNDK 0xAfe41…1E18 pair 0x23bc…404b." }
  - { id: REP-5, method: api, checked_at: 2026-09-03T05:07:00Z, receipt_ids: [R-10], result: "GET api.robinhood.com/rhj/assets HTTP 200; assets length 194; one SNDK hit tokenName Sandisk Corporation • Robinhood Token deployments[0] contractAddress 0xB90A19fF0Af67f7779afF50A882A9CfF42446400 chainId 4663 status ASSET_STATUS_ACTIVE isin US80004C2008. SNDK is the rail, not this token." }

claims:
  - { id: CLM-1, field: product.mechanism, value: "Pons v2 bonding-curve launch that graduates into a locked Uniswap v4 pool quoted against SNDK. launchAndBuy at 2026-08-31T21:02:01Z minted 1e9*1e18 to PonsV2BondingCurve 0xa0c1…fC19 with pairToken 0xB90A…6400; createGraduatedPool at 2026-08-31T21:02:46Z; V2LaunchLocker isLocked true and holds positionId 1337575.", class: verified, observed_at: 2026-09-03T05:12:00Z, receipt_ids: [R-3, R-4, R-5, R-6], reproduction_ids: [REP-1, REP-2, REP-3], supersedes: null }
  - { id: CLM-2, field: identity.name, value: "Sandisk Optimus", class: verified, observed_at: 2026-09-03T05:04:00Z, receipt_ids: [R-1, R-3], reproduction_ids: [REP-1, REP-3], supersedes: null }
  - { id: CLM-3, field: identity.symbol, value: "OP", class: verified, observed_at: 2026-09-03T05:04:00Z, receipt_ids: [R-1, R-3], reproduction_ids: [REP-1, REP-3], supersedes: null }
  - { id: CLM-4, field: deployment.address, value: "0xF25Ccb1036C41e953F84eC9F3cC72f8d73953214", class: verified, observed_at: 2026-09-03T05:04:00Z, receipt_ids: [R-1, R-3, R-5], reproduction_ids: [REP-1, REP-3], supersedes: null }
  - { id: CLM-5, field: deployment.address, value: "0x7eD598BcEf8bd9Edd8C97A195C6d13f40801EC7e", class: verified, observed_at: 2026-09-03T05:10:00Z, receipt_ids: [R-4, R-15], reproduction_ids: [REP-1, REP-2, REP-3], supersedes: null }
  - { id: CLM-6, field: lifecycle, value: mainnet, class: verified, observed_at: 2026-09-03T05:12:00Z, receipt_ids: [R-1, R-3, R-6, R-8], reproduction_ids: [REP-1, REP-3, REP-4], supersedes: null }
  - { id: CLM-7, field: taxonomy.primary-leaf, value: rwa-products/stock-paired-token, class: claim, observed_at: 2026-09-03T05:12:00Z, receipt_ids: [R-7, R-8, R-10], reproduction_ids: [], supersedes: null }
  - { id: CLM-8, field: identity.handle, value: "NULL — DexScreener socials x.com/sandiskoptimus; Latest posts do not embed CA 0xF25C…3214; launch params twitter is a @bestdevicook status URL; flag unconfirmed-official", class: claim, observed_at: 2026-09-03T05:14:00Z, receipt_ids: [R-7, R-12, R-22], reproduction_ids: [], supersedes: null }
  - { id: CLM-9, field: relationship, value: "Pair quote SNDK 0xB90A…6400 is Sandisk Corporation • Robinhood Token and GET /rhj/assets lists that address (194 assets, one SNDK row, chainId 4663). Distinct from packed CACHE/SNDK 0xAfe41…1E18 pair 0x23bc…404b (LongLauncher). Distinct from HDD/SNDK Hard Disk Dog 0xAE9b…1E18 pair 0x3c84…3f77. Distinct from packed OPTIMUS/TSLA 0xB5D553…1E18. Same SNDK rail, different CAs.", class: verified, observed_at: 2026-09-03T05:12:00Z, receipt_ids: [R-7, R-10, R-14, R-16], reproduction_ids: [REP-3, REP-4, REP-5], supersedes: null }
  - { id: CLM-10, field: economics.metric, value: "Gecko OP/SNDK pool 0x62e9…dc67 volume_usd.h24 490339.593444704 and reserve_in_usd 38151.4449 at 2026-09-03T05:08:00Z (pool slice, not Gecko token all-pools 492866.749174159)", class: verified, observed_at: 2026-09-03T05:08:00Z, receipt_ids: [R-8, R-9], reproduction_ids: [REP-4], supersedes: null }
  - { id: CLM-11, field: economics.metric, value: "DexScreener same pair liquidity.usd 43031.71 volume.h24 515331.69 fdv/marketCap 218253 at 2026-09-03T05:05:00Z", class: verified, observed_at: 2026-09-03T05:05:00Z, receipt_ids: [R-7], reproduction_ids: [REP-4], supersedes: null }
  - { id: CLM-12, field: economics.metric, value: 477, class: verified, observed_at: 2026-09-03T05:04:00Z, receipt_ids: [R-1], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-13, field: control.owner, value: "Token owner() reverts. Verified PonsV2LauncherToken source: deployer is immutable reference data and confers no privileges. Factory owner() and locker owner() return SafeProxy 0x263ed295dAFaE1d9AAdD6E56c4B6F9f38eE019Dd.", class: verified, observed_at: 2026-09-03T05:10:00Z, receipt_ids: [R-3, R-4, R-21], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-14, field: other, value: "Pair asset is SNDK 0xB90A19fF0Af67f7779afF50A882A9CfF42446400; venue is Uniswap v4 PoolManager 0x8366…0951 pool 0x62e9…dc67 after Pons v2 graduation; Gecko dex id pons-v2-dex; DexScreener labels v4", class: verified, observed_at: 2026-09-03T05:12:00Z, receipt_ids: [R-4, R-6, R-7, R-8], reproduction_ids: [REP-2, REP-4], supersedes: null }
  - { id: CLM-15, field: deployment.role, value: "Token creator_address_hash is PonsV2LaunchDeployer 0x3711…1A42; TokenLaunched and launchFactory() name PonsV2LaunchFactory 0x7eD5…EC7e as the pad, not LONG, PAIR, or hood.fun", class: verified, observed_at: 2026-09-03T05:12:00Z, receipt_ids: [R-1, R-4, R-5], reproduction_ids: [REP-1, REP-2, REP-3], supersedes: null }
  - { id: CLM-16, field: taxonomy.chain-scope, value: robinhood-native, class: verified, observed_at: 2026-09-03T05:06:00Z, receipt_ids: [R-3, R-7], reproduction_ids: [REP-1, REP-4], supersedes: null }
  - { id: CLM-17, field: security.audit, value: "No audit report URL was located on Blockscout, DexScreener, Gecko, Sandisk campaign HTML, or X search this pass", class: unknown, observed_at: 2026-09-03T05:15:00Z, receipt_ids: [], reproduction_ids: [], supersedes: null }
  - { id: CLM-18, field: identity.domain, value: "NULL — DexScreener info.websites is sandisk.com/en-gb/campaigns/op; GET HTTP 200 title OP Has Entered the Chat | Sandisk with no CA; Gecko token has no website field; flag third-party-link", class: claim, observed_at: 2026-09-03T05:14:00Z, receipt_ids: [R-7, R-9, R-13], reproduction_ids: [], supersedes: null }
  - { id: CLM-19, field: candidate, value: "op | OP | NULL | NULL — discovery token not in census 49", class: claim, observed_at: 2026-09-03T05:15:00Z, receipt_ids: [R-1, R-7], reproduction_ids: [], supersedes: null }
  - { id: CLM-20, field: economics.metric, value: "Gecko token volume_usd.h24 492866.749174159 and total_reserve_in_usd 18030.068859619 across all pools, not the OP/SNDK book", class: verified, observed_at: 2026-09-03T05:07:00Z, receipt_ids: [R-9], reproduction_ids: [REP-4], supersedes: null }
  - { id: CLM-21, field: economics.metric, value: "Gecko pool fdv_usd 1712815.05680504 market_cap_usd 1712815.51920136 on a pool named SNDK / OP with base_token_price_usd 1563.26855903809 (SNDK as base). Gecko token fdv_usd 216681.40835762 market_cap_usd null. DexScreener OP fdv/marketCap 218253.", class: verified, observed_at: 2026-09-03T05:08:00Z, receipt_ids: [R-7, R-8, R-9], reproduction_ids: [REP-4], supersedes: null }
  - { id: CLM-22, field: communications.status, value: "third-party-link: DexScreener websites and launch params website point at sandisk.com/en-gb/campaigns/op; GET 200 is a Sandisk SSD/Twitch campaign page with no token CA", class: claim, observed_at: 2026-09-03T05:14:00Z, receipt_ids: [R-7, R-13], reproduction_ids: [], supersedes: null }
  - { id: CLM-23, field: communications.status, value: "unconfirmed-official: DexScreener socials x.com/sandiskoptimus; bio We're the official #SandiskOptimus page devoted to all gamers and storage; Latest posts are Twitch/PAX, no CA 0xF25C…3214 this pass", class: claim, observed_at: 2026-09-03T05:09:00Z, receipt_ids: [R-7, R-12], reproduction_ids: [], supersedes: null }
  - { id: CLM-24, field: control.privileged-role, value: "getLaunchedToken.creatorFeeRecipient 0xcF969b04485f64Fa04A44285dA6200e9978D2d1E (eip1967_beacon, is_verified false); factory owner is SafeProxy 0x263e…19Dd", class: verified, observed_at: 2026-09-03T05:10:00Z, receipt_ids: [R-4], reproduction_ids: [REP-2], supersedes: null }
  - { id: CLM-25, field: taxonomy.entity-kind, value: token, class: verified, observed_at: 2026-09-03T05:04:00Z, receipt_ids: [R-1, R-2], reproduction_ids: [REP-1, REP-3], supersedes: null }
  - { id: CLM-26, field: deployment.address, value: "0xB90A19fF0Af67f7779afF50A882A9CfF42446400", class: verified, observed_at: 2026-09-03T05:06:00Z, receipt_ids: [R-3, R-10, R-14], reproduction_ids: [REP-1, REP-5], supersedes: null }
  - { id: CLM-27, field: deployment.address, value: "0x267444D099b10fB5Ed7c3Cc7B7c767AdcA574952", class: verified, observed_at: 2026-09-03T05:10:00Z, receipt_ids: [R-4, R-6, R-20], reproduction_ids: [REP-2, REP-3], supersedes: null }
  - { id: CLM-28, field: other, value: "getLaunchedToken exists true; curve 0xa0c1C6a661e7e3122cd2d8cD9D37100afC23fC19; TokenLaunched deployer 0x7CE3Cd0717443ed2c165F26bA7Fc3EdF3A0856aB; phase uint8 2; launch tx to PonsV2LaunchAndBuy 0xe33E…2948 (factory.launchForwarder)", class: verified, observed_at: 2026-09-03T05:10:00Z, receipt_ids: [R-4, R-5], reproduction_ids: [REP-2, REP-3], supersedes: null }
  - { id: CLM-29, field: taxonomy.secondary-leaf, value: launch/graduation-token, class: claim, observed_at: 2026-09-03T05:12:00Z, receipt_ids: [R-6, R-9], reproduction_ids: [], supersedes: null }
  - { id: CLM-30, field: identity.alias, value: "Sandisk Optimus", class: verified, observed_at: 2026-09-03T05:04:00Z, receipt_ids: [R-1, R-7], reproduction_ids: [REP-1, REP-4], supersedes: null }

conflicts:
  - id: CON-1
    field: economics.metric
    claim_ids: [CLM-11, CLM-21]
    material_effect: "DexScreener OP fdv/marketCap is 218253 and Gecko token fdv_usd is 216681.408; Gecko pool fdv_usd 1712815.05680504 is the SNDK/OP pool with SNDK as base (base_token_price_usd 1563.27), not an OP fdv"
    status: open
    resolution: null

events:
  - id: EVT-1
    type: onchain
    title: "DexScreener OP/SNDK 24h volume ~$515k, liquidity ~$43k"
    summary: "DexScreener OP/SNDK Uniswap v4 pair 0x62e9…dc67 volume.h24 515331.69 liquidity.usd 43031.71 fdv 218253. Gecko pool volume_usd.h24 490339.59 reserve_in_usd 38151.44."
    occurred_at: 2026-09-03T05:05:00Z
    observed_at: 2026-09-03T05:08:00Z
    affected_fields: [economics.metric, activity.status]
    evidence_state: verified
    impact: material
    site_recommendation: both
    channel_recommendation: none
    receipt_ids: [R-7, R-8]
  - id: EVT-2
    type: onchain
    title: "PonsV2LaunchAndBuy minted Sandisk Optimus / OP against SNDK"
    summary: "Tx 0xef08…7e6b from 0x7CE3…6aB at 2026-08-31T21:02:01Z; TokenLaunched curve 0xa0c1…fC19 pairToken SNDK 0xB90A…6400."
    occurred_at: 2026-08-31T21:02:01Z
    observed_at: 2026-09-03T05:12:00Z
    affected_fields: [deployment.address, lifecycle, product.mechanism]
    evidence_state: verified
    impact: material
    site_recommendation: profile
    channel_recommendation: none
    receipt_ids: [R-5, R-18]
  - id: EVT-3
    type: onchain
    title: "Pons v2 graduation locked Uniswap v4 OP/SNDK"
    summary: "Tx 0x8f58…6f84 at 2026-08-31T21:02:46Z; PoolManager Initialize id 0x62e9…dc67; V2LaunchLocker TokenSupplyLocked 81632653061224489250681771; isLocked true positionId 1337575."
    occurred_at: 2026-08-31T21:02:46Z
    observed_at: 2026-09-03T05:12:00Z
    affected_fields: [deployment.address, lifecycle, product.mechanism]
    evidence_state: verified
    impact: material
    site_recommendation: profile
    channel_recommendation: none
    receipt_ids: [R-6, R-4]
  - id: EVT-4
    type: ct
    title: "@redemptionarcc posted the OP CA against SNDK"
    summary: "@redemptionarcc posted 0xF25Ccb1036C41e953F84eC9F3cC72f8d73953214 paired with $SNDK, cited @sandiskoptimus Twitch, and called the Dexscreener book sub $250k."
    occurred_at: 2026-09-02T21:29:12Z
    observed_at: 2026-09-03T05:09:00Z
    affected_fields: [activity.status, communications.status]
    evidence_state: claim
    impact: material
    site_recommendation: feed
    channel_recommendation: none
    receipt_ids: [R-11]
  - id: EVT-5
    type: ct
    title: "@sandiskoptimus posted a live Twitch match"
    summary: "@sandiskoptimus posted LIVE NOW Watch as OP faces off against @TenZOfficial, @Aramori_, and @Doublelift1 with a twitch.tv/sandiskoptimus link. Post does not embed CA 0xF25C…3214."
    occurred_at: 2026-09-02T20:45:58Z
    observed_at: 2026-09-03T05:09:00Z
    affected_fields: [identity.handle, communications.status]
    evidence_state: claim
    impact: routine
    site_recommendation: none
    channel_recommendation: none
    receipt_ids: [R-12]
  - id: EVT-6
    type: ct
    title: "@sizzlezzzzzzzzz posted $OP -> $SNDK"
    summary: "@sizzlezzzzzzzzz posted $AI -> $NVDA then $OP -> $SNDK. No CA in that post."
    occurred_at: 2026-09-03T02:50:02Z
    observed_at: 2026-09-03T05:09:00Z
    affected_fields: [activity.status, relationship]
    evidence_state: claim
    impact: routine
    site_recommendation: none
    channel_recommendation: none
    receipt_ids: [R-19]

receipts:
  - { id: R-1, publisher: Blockscout, title: "Token 0xF25C…3214 Sandisk Optimus / OP", url: "https://robinhoodchain.blockscout.com/address/0xF25Ccb1036C41e953F84eC9F3cC72f8d73953214", published_at: null, accessed_at: 2026-09-03T05:04:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-2, CLM-3, CLM-4, CLM-6, CLM-12, CLM-15, CLM-19, CLM-25, CLM-30], excerpt: "api/v2 Chrome UA. hash 0xF25Ccb1036C41e953F84eC9F3cC72f8d73953214 name Sandisk Optimus is_contract true is_verified true proxy_type null implementations []. creator_address_hash 0x3711ceA4feaDE896C913C68F01Eda97Cb06D1A42 creation_transaction_hash 0xef087db24305af2d26b15ba390e23cb65ce9a5338e9642af279e5e6bf9de7e6b. token symbol OP decimals 18 total_supply 1000000000000000000000000000 holders_count 477 type ERC-20." }
  - { id: R-2, publisher: Blockscout, title: "api/v2 token Sandisk Optimus", url: "https://robinhoodchain.blockscout.com/api/v2/tokens/0xF25Ccb1036C41e953F84eC9F3cC72f8d73953214", published_at: null, accessed_at: 2026-09-03T05:04:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-2, CLM-3, CLM-12, CLM-25], excerpt: "address_hash 0xF25Ccb1036C41e953F84eC9F3cC72f8d73953214 name Sandisk Optimus symbol OP decimals 18 type ERC-20 holders_count 477 total_supply 1000000000000000000000000000." }
  - { id: R-3, publisher: Robinhood Chain RPC, title: "eth_getCode / name / symbol / deployer at block 53156766", url: "https://rpc.mainnet.chain.robinhood.com", published_at: null, accessed_at: 2026-09-03T05:06:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-2, CLM-3, CLM-4, CLM-6, CLM-13, CLM-16, CLM-26], excerpt: "eth_chainId 0x1237 eth_blockNumber 0x32b1b9e. Token code 3248 B prefix 0x60806040. name Sandisk Optimus symbol OP decimals 18 totalSupply 1e27. owner() factory() revert. deployer() 0x7CE3Cd0717443ed2c165F26bA7Fc3EdF3A0856aB launchFactory() 0x7eD598BcEf8bd9Edd8C97A195C6d13f40801EC7e curve() 0xa0c1C6a661e7e3122cd2d8cD9D37100afC23fC19. SNDK name Sandisk Corporation • Robinhood Token symbol SNDK code 283 B." }
  - { id: R-4, publisher: Robinhood Chain RPC, title: "locker isLocked / factory getLaunchedToken / PoolGraduated logs", url: "https://rpc.mainnet.chain.robinhood.com", published_at: null, accessed_at: 2026-09-03T05:10:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-5, CLM-13, CLM-14, CLM-15, CLM-24, CLM-27, CLM-28, EVT-3], excerpt: "isLocked true lockedPositions 1337575 lockedTokenSupply 81632653061224489250681771. factory owner and locker owner 0x263ed295dAFaE1d9AAdD6E56c4B6F9f38eE019Dd. approvedPairTokens(SNDK) true. getLaunchedToken phase 2 creatorFeeRecipient 0xcF969b04485f64Fa04A44285dA6200e9978D2d1E. PoolGraduated tx 0x8f580f795d7db39c7a6032c4f6e9f7d4750cbcaf0bbf2ec729f27f94eb5e6f84 block 51169520." }
  - { id: R-5, publisher: Blockscout, title: "launchAndBuy tx 0xef087db2…7e6b", url: "https://robinhoodchain.blockscout.com/tx/0xef087db24305af2d26b15ba390e23cb65ce9a5338e9642af279e5e6bf9de7e6b", published_at: 2026-08-31T21:02:01Z, accessed_at: 2026-09-03T05:12:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-2, CLM-3, CLM-4, CLM-15, CLM-28, EVT-2], excerpt: "timestamp 2026-08-31T21:02:01.000000Z status ok block_number 51169078 from 0x7CE3Cd0717443ed2c165F26bA7Fc3EdF3A0856aB (is_contract false) to PonsV2LaunchAndBuy 0xe33E9E479dF8802cb0866d5d05258bEc4cF62948 method launchAndBuy. params name Sandisk Optimus symbol OP website https://www.sandisk.com/en-gb/campaigns/op pairToken 0xB90A19fF0Af67f7779afF50A882A9CfF42446400." }
  - { id: R-6, publisher: Blockscout, title: "graduation tx 0x8f580f79…6f84", url: "https://robinhoodchain.blockscout.com/tx/0x8f580f795d7db39c7a6032c4f6e9f7d4750cbcaf0bbf2ec729f27f94eb5e6f84", published_at: 2026-08-31T21:02:46Z, accessed_at: 2026-09-03T05:12:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-6, CLM-14, CLM-27, CLM-29, EVT-3], excerpt: "timestamp 2026-08-31T21:02:46.000000Z status ok block_number 51169520 from 0x9e8CebbF4e7324D8C1CDb0E805e7579DEaD5Ef3f to 0x4266b4a7A13e2FC6129379647cb2D3AFD5E3EDcb. PoolManager Initialize id 0x62e9d888f0a5ac01ceb645b548b0eb18e0ee921784649fe365ce8baec5ebdc67 currency0 SNDK currency1 OP hooks 0xE5e702641Ea86F4ae6cC3cDaeD2B886f976Be044. TokenSupplyLocked amount 81632653061224489250681771." }
  - { id: R-7, publisher: DexScreener, title: "latest/dex/tokens OP Sandisk Optimus", url: "https://api.dexscreener.com/latest/dex/tokens/0xF25Ccb1036C41e953F84eC9F3cC72f8d73953214", published_at: null, accessed_at: 2026-09-03T05:05:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-7, CLM-8, CLM-9, CLM-11, CLM-14, CLM-16, CLM-18, CLM-19, CLM-21, CLM-22, CLM-23, CLM-30, EVT-1], excerpt: "3 robinhood uniswap pairs. Top pairAddress 0x62e9d888f0a5ac01ceb645b548b0eb18e0ee921784649fe365ce8baec5ebdc67 labels v4 base Sandisk Optimus / OP quote Sandisk Corporation • Robinhood Token / SNDK 0xB90A19fF…6400 liquidity.usd 43031.71 volume.h24 515331.69 fdv 218253 marketCap 218253 pairCreatedAt 1788210166000. info.websites https://www.sandisk.com/en-gb/campaigns/op info.socials x.com/sandiskoptimus." }
  - { id: R-8, publisher: GeckoTerminal, title: "OP/SNDK pool 0x62e9…dc67", url: "https://api.geckoterminal.com/api/v2/networks/robinhood/pools/0x62e9d888f0a5ac01ceb645b548b0eb18e0ee921784649fe365ce8baec5ebdc67", published_at: null, accessed_at: 2026-09-03T05:08:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-6, CLM-7, CLM-10, CLM-14, CLM-21, EVT-1], excerpt: "HTTP 200. name SNDK / OP pool_created_at 2026-08-31T21:02:46Z fdv_usd 1712815.05680504 market_cap_usd 1712815.51920136 volume_usd.h24 490339.593444704 reserve_in_usd 38151.4449. dex pons-v2-dex. base_token_price_usd 1563.26855903809 quote_token_price_usd 0.000214203815235235. transactions.h24 buys 1088 sells 1169." }
  - { id: R-9, publisher: GeckoTerminal, title: "Sandisk Optimus token", url: "https://api.geckoterminal.com/api/v2/networks/robinhood/tokens/0xf25ccb1036c41e953f84ec9f3cc72f8d73953214", published_at: null, accessed_at: 2026-09-03T05:07:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-10, CLM-18, CLM-20, CLM-21, CLM-29], excerpt: "HTTP 200. name Sandisk Optimus symbol OP decimals 18 total_supply 1e27 price_usd 0.0002166814084 fdv_usd 216681.40835762 market_cap_usd null volume_usd.h24 492866.749174159 total_reserve_in_usd 18030.068859619. launchpad_details graduation_percentage 100 completed true completed_at 2026-08-31T21:02:46.000Z migrated_destination_pool_address 0x62e9d888…dc67. coingecko_coin_id null." }
  - { id: R-10, publisher: Robinhood, title: "GET /rhj/assets Stock Token registry", url: "https://api.robinhood.com/rhj/assets", published_at: null, accessed_at: 2026-09-03T05:07:00Z, kind: docs, authority: primary, authenticity: confirmed, supports: [CLM-7, CLM-9, CLM-26], excerpt: "HTTP 200. assets length 194. One SNDK hit tokenSymbol SNDK tokenName Sandisk Corporation • Robinhood Token deployments contractAddress 0xB90A19fF0Af67f7779afF50A882A9CfF42446400 chainId 4663 status ASSET_STATUS_ACTIVE isin US80004C2008." }
  - { id: R-11, publisher: "@redemptionarcc", title: "Post about $OP as the mascot of the year's best-performing stock", url: "https://x.com/redemptionarcc/status/2095262790777024745", published_at: 2026-09-02T21:29:12Z, accessed_at: 2026-09-03T05:09:00Z, kind: social, authority: social, authenticity: unconfirmed, supports: [EVT-4], excerpt: "the best performing stock of the year has started to shill it’s mascot masked gamer, $OP and will do so for the next 8 weeks 0xF25Ccb1036C41e953F84eC9F3cC72f8d73953214 paired with $SNDK and I’ve been getting my airdrops $200k" }
  - { id: R-12, publisher: "@sandiskoptimus", title: "LIVE NOW OP faces TenZ / Aramori / Doublelift", url: "https://x.com/sandiskoptimus/status/2095251912262402386", published_at: 2026-09-02T20:45:58Z, accessed_at: 2026-09-03T05:09:00Z, kind: social, authority: social, authenticity: unconfirmed, supports: [CLM-8, CLM-23, EVT-5], excerpt: "Bio: We're the official #SandiskOptimus page devoted to all gamers and storage. We're more than hardware. We're a gaming brand made for you. We are SANDISK Optimus. Post: LIVE NOW Watch as OP faces off against @TenZOfficial, @Aramori_, and @Doublelift1. https://www.twitch.tv/sandiskoptimus. No CA in this post." }
  - { id: R-13, publisher: Sandisk, title: "OP Has Entered the Chat campaign", url: "https://www.sandisk.com/en-gb/campaigns/op", published_at: null, accessed_at: 2026-09-03T05:14:00Z, kind: official-site, authority: primary, authenticity: unconfirmed, supports: [CLM-18, CLM-22], excerpt: "HTTP 200. title OP Has Entered the Chat | Sandisk. meta description: One hub for everything OP. Stay on top of match alerts, catch stream highlights, learn about exclusive giveaways, and discover how SANDISK Optimus SSDs power OP’s Twitch journey. No 0xF25C, Robinhood, SNDK, or Uniswap string in the HTML this pass." }
  - { id: R-14, publisher: Blockscout, title: "Token 0xB90A…6400 Sandisk Corporation • Robinhood Token / SNDK", url: "https://robinhoodchain.blockscout.com/address/0xB90A19fF0Af67f7779afF50A882A9CfF42446400", published_at: null, accessed_at: 2026-09-03T05:06:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-9, CLM-26], excerpt: "api/v2 token name Sandisk Corporation • Robinhood Token symbol SNDK decimals 18 holders_count 24551 total_supply 1095663000000000000000 type ERC-20. Address name BeaconProxy is_contract true is_verified true." }
  - { id: R-15, publisher: Blockscout, title: "Address 0x7eD5…EC7e PonsV2LaunchFactory", url: "https://robinhoodchain.blockscout.com/address/0x7eD598BcEf8bd9Edd8C97A195C6d13f40801EC7e", published_at: null, accessed_at: 2026-09-03T05:08:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-5, CLM-15], excerpt: "hash 0x7eD598BcEf8bd9Edd8C97A195C6d13f40801EC7e name PonsV2LaunchFactory is_contract true is_verified true is_fully_verified true file_path contracts/src/v2/PonsV2LaunchFactory.sol creator_address_hash 0xFdDE5a1E3cDF791Da71E49F817D70C7ceD72CC36. proxy_type null." }
  - { id: R-16, publisher: DexScreener, title: "search HDD SNDK", url: "https://api.dexscreener.com/latest/dex/search?q=HDD%20SNDK", published_at: null, accessed_at: 2026-09-03T05:08:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-9], excerpt: "robinhood uniswap HDD Hard Disk Dog 0xAE9b7D708270491aC4d046C1D25dF73d62791E18 / SNDK 0xB90A19fF…6400 liquidity.usd 90688.18 volume.h24 117381.79 pair 0x3c84bc177fbf2a5236fcd50b75c5c96fddef6ce1a2ba73432a55b20360773f77. CACHE Cache Cow 0xAfe41…1E18 / SNDK pair 0x23bc…404b. OP Sandisk Optimus 0xF25C…3214 / SNDK pair 0x62e9…dc67. Distinct CAs on the same SNDK rail." }
  - { id: R-18, publisher: Blockscout, title: "TokenLaunched log for OP", url: "https://robinhoodchain.blockscout.com/tx/0xef087db24305af2d26b15ba390e23cb65ce9a5338e9642af279e5e6bf9de7e6b", published_at: 2026-08-31T21:02:01Z, accessed_at: 2026-09-03T05:12:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, EVT-2], excerpt: "TokenLaunched token 0xF25Ccb1036C41e953F84eC9F3cC72f8d73953214 curve 0xa0c1C6a661e7e3122cd2d8cD9D37100afC23fC19 deployer 0x7CE3Cd0717443ed2c165F26bA7Fc3EdF3A0856aB pairToken 0xB90A19fF0Af67f7779afF50A882A9CfF42446400 launchConfigId 0 graduationThreshold 6630443315631494151. Mint 1e27 to the curve. CurveBuy tokensOut 189485372781363882085904936." }
  - { id: R-19, publisher: "@sizzlezzzzzzzzz", title: "$OP -> $SNDK", url: "https://x.com/sizzlezzzzzzzzz/status/2095343530897989935", published_at: 2026-09-03T02:50:02Z, accessed_at: 2026-09-03T05:09:00Z, kind: social, authority: social, authenticity: unconfirmed, supports: [EVT-6], excerpt: "$AI -> $NVDA $OP -> $SNDK" }
  - { id: R-20, publisher: Blockscout, title: "Address 0x2674…4952 V2LaunchLocker", url: "https://robinhoodchain.blockscout.com/address/0x267444D099b10fB5Ed7c3Cc7B7c767AdcA574952", published_at: null, accessed_at: 2026-09-03T05:10:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-27], excerpt: "hash 0x267444D099b10fB5Ed7c3Cc7B7c767AdcA574952 name V2LaunchLocker is_contract true is_verified true is_partially_verified true file_path src/v2/V2LaunchLocker.sol compiler v0.8.35 verified_at 2026-08-03T16:18:05Z. creator_address_hash 0xFdDE5a1E3cDF791Da71E49F817D70C7ceD72CC36. proxy_type null." }
  - { id: R-21, publisher: Blockscout, title: "PonsV2LauncherToken verified source", url: "https://robinhoodchain.blockscout.com/address/0xF25Ccb1036C41e953F84eC9F3cC72f8d73953214?tab=contract", published_at: null, accessed_at: 2026-09-03T05:12:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-13], excerpt: "ContractName PonsV2LauncherToken. Comment: Fixed-supply ERC-20 deployed by PonsV2LaunchFactory for a v2 launch. The entire supply mints directly to the token's bonding curve. deployer is carried here as immutable reference data for off-chain attribution only, and confers no privileges over the token. compiler v0.8.35 file_path contracts/src/v2/PonsV2LauncherToken.sol is_fully_verified true." }
  - { id: R-22, publisher: "@bestdevicook", title: "Sandisk turned OP into an internet character", url: "https://x.com/bestdevicook/status/2094531106364416032", published_at: 2026-08-31T21:01:44Z, accessed_at: 2026-09-03T05:09:00Z, kind: social, authority: social, authenticity: unconfirmed, supports: [CLM-8], excerpt: "Is this not crazy?!?! Sandisk, one of the biggest storage brands in the world with products used by gamers everywhere, just turned the word OP into an actual internet character. Official OP Page: campaign URL. This status URL is the twitter field in launchAndBuy params. A later post from the same account named a Solana pump CA, not 0xF25C…3214." }

gaps:
  - { priority: P0, question: "Is there an official X handle or site that bidirectionally links to token 0xF25C…3214?", checked: "DexScreener websites is the Sandisk campaign; socials @sandiskoptimus; campaign HTML has no CA; Gecko token has no website; @sandiskoptimus Latest posts have no CA; launch twitter field is @bestdevicook status 2094531106364416032, 2026-09-03", next: "re-read DexScreener token profile after a Claim Profile; search new posts that embed the CA and a handle" }
  - { priority: P0, question: "Should Gecko pool fdv_usd 1.71M be treated as OP fdv or as SNDK-as-base on a pool named SNDK / OP?", checked: "Gecko pool name SNDK / OP base_token_price_usd 1563.27 fdv_usd 1712815; Gecko token fdv_usd 216681; DexScreener OP fdv 218253, 2026-09-03", next: "keep using DexScreener / Gecko token fdv for OP; do not promote pool fdv as OP market cap" }
  - { priority: P1, question: "Does @sandiskoptimus later embed CA 0xF25C…3214 or a Robinhood pair link?", checked: "Latest posts 2026-08-25 through 2026-09-02 are Twitch/PAX/giveaway; no CA this pass, 2026-09-03", next: "re-read the profile and any pinned post" }
  - { priority: P1, question: "What is creatorFeeRecipient 0xcF96…2d1E (eip1967_beacon, unverified)?", checked: "getLaunchedToken returns that address; Blockscout is_contract true is_verified false proxy_type eip1967_beacon, 2026-09-03", next: "eth_getCode and implementation on that beacon if a follow-up pass is assigned" }
  - { priority: P2, question: "Does HDD/SNDK Hard Disk Dog 0xAE9b…1E18 share a Pons or LongLauncher path with OP?", checked: "DexScreener HDD is a different CA and pair on the same SNDK rail; OP create is PonsV2LaunchAndBuy, 2026-09-03", next: "Blockscout creator_address_hash on 0xAE9b…1E18 if an HDD packet is assigned" }
---

# OP — research packet

## What it is

A one-billion-supply ERC-20 launched on a Pons v2 bonding curve and graduated into a Uniswap v4 pool quoted against SNDK. PonsV2LaunchAndBuy deploys Sandisk Optimus (OP) in one launchAndBuy call, seeds the curve against SNDK, then a later createGraduatedPool locks the OP/SNDK book. Traders buy and sell OP on Uniswap v4. SNDK is a Robinhood Stock Token rail. Distinct from packed CACHE/SNDK and from HDD/SNDK. No official site or handle was located this pass.

Themes: memecoin, stock-paired:SNDK, rwa, graduation

## Why it matters

The OP/SNDK Uniswap v4 book printed about $515k of 24h volume on DexScreener at collection, with liquidity about $43k. GET /rhj/assets has an SNDK row at 0xB90A…6400, so the pair leg is the Sandisk Corporation • Robinhood Token rather than a third-party TokenizedStock. Two other SNDK books, packed CACHE/SNDK and HDD/SNDK, are different tokens.

## What could go wrong

USD liquidity figures on the OP/SNDK book count both sides, and the quote side is SNDK, not USDG. Gecko names the pool SNDK / OP, so pool fdv_usd tracks the stock-token base, not OP. DexScreener websites and socials point at a Sandisk gaming campaign and @sandiskoptimus; neither surface embeds this CA, so comms stay unconfirmed-official.

## Product and mechanics

PonsV2LaunchFactory 0x7eD5…EC7e deploys PonsV2LauncherToken via PonsV2LaunchDeployer. launchAndBuy from 0x7CE3…6aB at 2026-08-31T21:02:01Z minted Sandisk Optimus / OP supply 1e9*1e18 into bonding curve 0xa0c1…fC19 quoted against SNDK. factory.launchForwarder is PonsV2LaunchAndBuy 0xe33E…2948. [verified R-5 R-3 R-4 R-18]

createGraduatedPool at 2026-08-31T21:02:46Z initialized Uniswap v4 pool 0x62e9…dc67 (currency0 SNDK, currency1 OP, hooks V2MemeHook 0xE5e7…6044) and locked 81632653061224489250681771 OP in V2LaunchLocker positionId 1337575. Gecko launchpad_details.completed is true at that timestamp. Secondary OP/USDG and OP/ETH books exist on DexScreener with far less liquidity than the SNDK book. [verified R-6 R-4 R-7 R-9]

## Control and security

Token owner() reverts. Verified source says deployer is immutable reference data and confers no privileges. Factory owner() and locker owner() return SafeProxy 0x263e…19Dd. creatorFeeRecipient 0xcF96…2d1E is an unverified eip1967_beacon. [verified R-3 R-4 R-21]

PonsV2LauncherToken is fully verified (contracts/src/v2/PonsV2LauncherToken.sol, compiler v0.8.35). V2LaunchLocker is partially verified (src/v2/V2LaunchLocker.sol). No audit report URL was located this pass. [verified R-1 R-20 R-21] [unknown]

## Team and provenance

No official domain or X handle bidirectionally links to CA 0xF25C…3214. DexScreener websites the Sandisk campaign page and socials @sandiskoptimus. GET sandisk.com/en-gb/campaigns/op is a Twitch/SSD campaign titled OP Has Entered the Chat with no contract in the HTML. @sandiskoptimus Latest posts are Twitch and PAX, no CA. Launch params twitter field is @bestdevicook status 2094531106364416032. Flag unconfirmed-official and third-party-link. [claim R-7 R-12 R-13 R-22]

## Economics and activity

OP/SNDK Uniswap v4 24h volume is 515331.69 USD and liquidity.usd is 43031.71 at 2026-09-03T05:05:00Z from DexScreener. fdv/marketCap is 218253. [claim R-7]

Gecko pool 0x62e9…dc67 volume_usd.h24 is 490339.593444704 and reserve_in_usd is 38151.4449 at 2026-09-03T05:08:00Z. Gecko token volume_usd.h24 is 492866.749174159 across all pools, not the SNDK book. Gecko token fdv_usd is 216681.40835762. Gecko pool fdv_usd 1712815.05680504 is the SNDK/OP book with SNDK as base. Blockscout holders_count 477. Pair created 2026-08-31T21:02:46Z. [claim R-8 R-9 R-1]

## Material risks

- Quote token SNDK 0xB90A…6400 is a Robinhood Stock Token rail in GET /rhj/assets; OP is not that rail. [verified R-10 R-14]
- Pool USD reserve is OP plus SNDK, not a USDG or WETH backstop. [claim R-7 R-8]
- Gecko pool fdv_usd is SNDK-as-base, not OP fdv. [verified R-8 R-9]
- No official handle or domain this pass; Sandisk campaign and @sandiskoptimus are third-party-link / unconfirmed-official. [claim R-7 R-12 R-13]
- No audit report URL this pass. [unknown]

## Verification passes

- Receipts: Blockscout token/factory/locker/SNDK and both launch/grad txs, RPC name/symbol/deployer/launchFactory/isLocked/getLaunchedToken, DexScreener, Gecko pool/token (first GET 200), /rhj/assets, Sandisk campaign HTML, @sandiskoptimus, @redemptionarcc, and the launch-params tweet were opened on 2026-09-03 and excerpts copied from the responses. [verified R-1 R-3 R-7 R-10]
- Numbers: 515331.69 is the DexScreener OP/SNDK 24h volume. Gecko pool 490339.59 is that pool. Gecko token 492866.75 is all-pools. Reserve 38151.44 is the Gecko pool; DexScreener liquidity.usd 43031.71 is the same pair, different aggregator. Gecko pool fdv 1.71M is not OP fdv. [claim R-7 R-8 R-9]
- Adversarial: the strongest contrary reading is that OP is an official Sandisk product because DexScreener websites sandisk.com and socials @sandiskoptimus. The campaign HTML has no CA, Latest posts have no CA, and the token is a Pons v2 launchAndBuy from EOA 0x7CE3…6aB. [inference R-5 R-12 R-13]

## Operations log

- Base: assigned base_sha 334ca0619aa62e922da83f46de021f06d12348cf. GET research/inbox/packets/op/WORK-20260903-grok-heavy-icarus-research.md on grok-heavy/20260903/WORK-20260903-grok-heavy-icarus-research HTTP 404, so this seed proceeds. Census 49 slugs have no op / Sandisk Optimus / 0xF25C…3214.
- Explorer: Blockscout api/v2 Chrome UA token, address, factory, locker, SNDK, launchAndBuy 0xef08…7e6b, graduation 0x8f58…6f84, TokenLaunched / Initialize / TokenSupplyLocked logs, holders.
- RPC 4663: eth_chainId/eth_blockNumber/eth_getCode/eth_call name/symbol/deployer/launchFactory/curve/isLocked/getLaunchedToken/approvedPairTokens plus eth_getLogs TokenLaunched and PoolGraduated.
- Aggregators: DexScreener latest/dex/tokens and search HDD SNDK. Gecko token GET 200 then pool GET 200 (not skipped).
- Registry: GET api.robinhood.com/rhj/assets 194 assets, one SNDK rail at 0xB90A…6400.
- Social: X Latest from:sandiskoptimus; keyword Sandisk Optimus / OP/SNDK / 0xF25Ccb; from:bestdevicook; user search sandiskoptimus.
- Site: GET sandisk.com/en-gb/campaigns/op HTTP 200, no CA.
- Failed: first un-decompressed Sandisk GET was binary; retry with --compressed succeeded. Gecko pool fdv is SNDK-as-base. HDD is not a packed slug this pass.
- Time: collection 2026-09-03T05:00Z–2026-09-03T05:15Z.
