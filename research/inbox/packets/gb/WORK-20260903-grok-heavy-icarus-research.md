---
# Packet v2 (docs/research-system.md §5). Seed with Icarus What-it-is + events.
contract_version: proofline-research-v2
work_id: WORK-20260903-grok-heavy-icarus-research
producer: grok-heavy
role: collector
base_sha: 334ca0619aa62e922da83f46de021f06d12348cf
slug: gb
name: GB
packet_tier: seed
as_of: 2026-09-03T04:25:00Z
prior_packet: null
supersedes: null
owned_slugs: [gb]
allowed_paths:
  - research/inbox/packets/gb/WORK-20260903-grok-heavy-icarus-research.md

identity:
  canonical_name: GB
  aliases: ["Gigabyte"]
  symbols: [GB]
  entity_kind: token
  chain_scope: robinhood-native
  official_domain: https://www.gigabyte.click/
  official_handle: "NULL — token.socials() twitter https://x.com/gigabyteRH; DexScreener info.socials x.com/gigabyteRH; Gecko twitter_handle gigabyteRH; gigabyte.click/script.js X_URL https://x.com/gigabyteRH and CONTRACT_ADDRESS 0xd786…517e; @gigabyteRH bio pins that CA and 'the dog takes a gigabyte of AMD' without the site URL; flag unconfirmed-official"
  repository: "NULL — no GitHub org or repository URL on gigabyte.click, DexScreener, Gecko, Blockscout, or X search this pass"
  possible_matches:
    - slug: pons
      signals: [shared-address]
      contrary_signals:
        - "Census Pons is the bonding-curve pad at ponsfamily.com / @ponsdotfamily with PonsV2LaunchFactory 0x7eD5…EC7e"
        - "GB is the ERC-20 at 0xD786…517E created through that factory.launchToken; entity_kind token, not protocol"
        - "No shared domain or handle; gigabyte.click / @gigabyteRH do not operate the Pons pad"
    - slug: chip
      signals: [shared-address]
      contrary_signals:
        - "In-flight CHIP is Cyber Hardware-Integrated Pup at 0xE38B…C6E59 via PonsV2LaunchAndBuy into CHIP/AMD 0x05153549…"
        - "GB is Gigabyte at 0xD786…517E via factory.launchToken into GB/AMD 0x9264…7635; bytecode length 3248 B matches CHIP but sha256 differs"
        - "Shared factory and AMD rail only; no shared domain, handle, or reproduced address"
    - slug: long
      signals: [other]
      contrary_signals:
        - "Census LONG is the stock-paired factory at app.long.xyz / @longdotxyz with LongLauncher 0x22e9…eeED"
        - "GB is PonsV2LaunchFactory.launchToken, not LongLauncher"
        - "Shared quote rail AMD only; no shared domain, handle, or reproduced address"
    - slug: md
      signals: [other]
      contrary_signals:
        - "In-flight MD is A Machine Duck at 0x3abb…1e18 paired to AMD via LongLauncher into pool 0x197d…9655"
        - "GB is ticker GB at 0xD786…517E paired to AMD via Pons"
        - "No shared domain, handle, or reproduced address"

classification:
  primary_leaf: launch/graduation-token
  secondary_leaves: [rwa-products/stock-paired-token]
  mechanism_tags: [bonding-curve, amm, stock-paired, rwa, launchpad]
  ecosystem_role: graduation
  lifecycle: mainnet
  coverage_recommendation: seed
  evidence_state: partly-verified
  rationale: "Not in the 49-row census. Token 0xD786…517E has 3248 B of code on 4663; launchFactory() returns PonsV2LaunchFactory 0x7eD5…EC7e; launchToken at 2026-09-01T22:16:40Z minted Gigabyte / GB against AMD 0x86923f…3fdC and CurveCompleted at 2026-09-01T22:17:28Z into Uniswap v4 pool 0x9264…7635. AMD is the quote rail. Distinct from CHIP 0xE38B…C6E59, MD 0x3abb…1e18, and MEOW 0x7235…1e18 on the same rail. Token page is_verified false this pass. [R-1] [R-4] [R-5] [R-6] [R-7] [R-12]"

qualifying:
  deployed_on_chain: { status: pass, claim_ids: [CLM-4, CLM-5, CLM-6], note: "" }
  native_play:       { status: pass, claim_ids: [CLM-1, CLM-15], note: "" }
  citable:           { status: pass, claim_ids: [CLM-2, CLM-3, CLM-4], note: "" }
  research_story:    { status: pass, claim_ids: [CLM-1, CLM-9, CLM-10], note: "" }

links:
  - { kind: site, url: "https://www.gigabyte.click/", authenticity: confirmed }
  - { kind: x, url: "https://x.com/gigabyteRH", authenticity: unconfirmed }

deployments:
  - label: GB token (Pons v2 launcher token)
    role: token
    address:
      value: "0xD78650f3A96e55e0710282c4f459AC556ef3517E"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T04:20:00Z
      exists_on_4663: true
      explorer_source_verified: false
    receipt_ids: [R-1, R-4, R-5]
  - label: PonsV2LaunchFactory (token launchFactory)
    role: factory
    address:
      value: "0x7eD598BcEf8bd9Edd8C97A195C6d13f40801EC7e"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T04:21:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-3, R-5, R-6]
  - label: GB bonding curve (token curve)
    role: other
    address:
      value: "0x535eDdD8088533e98C7372dB2F64063c6B2B4Dd7"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T04:21:00Z
      exists_on_4663: true
      explorer_source_verified: false
    receipt_ids: [R-5, R-6, R-16]
  - label: AMD • Robinhood Token (pair quote rail)
    role: token
    address:
      value: "0x86923f96303D656E4aa86D9d42D1e57ad2023fdC"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T04:22:00Z
      exists_on_4663: true
      explorer_source_verified: true
      explorer_source_verification_scope: proxy-shell-only
      implementation_source_verified: null
    receipt_ids: [R-7, R-12, R-17]
  - label: V2MemeHook (Uniswap v4 pool hooks)
    role: other
    address:
      value: "0xE5e702641Ea86F4ae6cC3cDaeD2B886f976Be044"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T04:25:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-16, R-22]

metrics:
  - { kind: volume_24h, value: 809601.07, currency: USD, as_of: 2026-09-03T04:24:00Z, window: 24h, method: "api.dexscreener.com/latest/dex/tokens/0xD78650f3A96e55e0710282c4f459AC556ef3517E pair 0x9264f0d7… GB/AMD volume.h24", class: claim, receipt_ids: [R-7] }
  - { kind: tvl, value: 57071.87, currency: USD, as_of: 2026-09-03T04:24:00Z, window: point, method: "api.geckoterminal.com/api/v2/networks/robinhood/pools/0x9264f0d740eab13c8417baa0d27cedfb3ba63950e55a50e413678e7d55967635 reserve_in_usd (AMD/GB pool, not an all-pools figure)", class: claim, receipt_ids: [R-8] }
  - { kind: market_cap, value: 202008, currency: USD, as_of: 2026-09-03T04:24:00Z, window: point, method: "api.dexscreener.com/latest/dex/tokens/0xD78650f3A96e55e0710282c4f459AC556ef3517E pair 0x9264f0d7… GB/AMD fdv/marketCap", class: claim, receipt_ids: [R-7] }
  - { kind: holders, value: 922, currency: null, as_of: 2026-09-03T04:20:00Z, window: point, method: "robinhoodchain.blockscout.com/api/v2/tokens/0xD78650f3A96e55e0710282c4f459AC556ef3517E holders_count", class: claim, receipt_ids: [R-1] }

reproductions:
  - { id: REP-1, method: explorer-rpc, chain_id: 4663, checked_at: 2026-09-03T04:24:00Z, receipt_ids: [R-5], result: "rpc.mainnet.chain.robinhood.com eth_chainId 0x1237 (4663) eth_blockNumber 0x32ab7ec then 0x32ac44b (53131244–53133643). Token 0xD786…517E eth_getCode 3248 B prefix 60806040, not EIP-1167. name Gigabyte, symbol GB, decimals 18, totalSupply 1e27. owner() and factory() revert. deployer() 0x35ECDa7659718A25371592e28E3969bd955F16a2 (eth_getCode 0x). launchFactory() 0x7eD598BcEf8bd9Edd8C97A195C6d13f40801EC7e. curve() 0x535eDdD8088533e98C7372dB2F64063c6B2B4Dd7 (10229 B). socials() twitter https://x.com/gigabyteRH, telegram/website/discord/farcaster empty. Factory code 24177 B. AMD name AMD • Robinhood Token symbol AMD code 283 B. Bytecode sha256 5f3b4621…c4af differs from CHIP PonsV2LauncherToken 9eb15620…c750 at the same 3248 B length." }
  - { id: REP-2, method: explorer-ui, chain_id: 4663, checked_at: 2026-09-03T04:22:00Z, receipt_ids: [R-1, R-3, R-4, R-6, R-16], result: "Blockscout api/v2 token 0xD786…517E name Gigabyte symbol GB holders_count 922 total_supply 1e27 is_verified false proxy_type null creator_address_hash null this pass. launchToken tx 0x4e8de2d0…f62f 2026-09-01T22:16:40Z block 52068452 from EOA 0x35EC…16a2 to PonsV2LaunchFactory 0x7eD5…EC7e. TokenLaunched token 0xD786…517E curve 0x535e…4Dd7 pairToken AMD 0x86923f…3fdC graduationThreshold 16.6655e18. CurveCompleted / LaunchSwept tx 0xe8b8a57d…3f3c 2026-09-01T22:17:28Z block 52068923 quoteOut 16.6655e18 into PoolManager Initialize id 0x9264…7635 currency0 AMD currency1 GB hooks V2MemeHook 0xE5e7…e044." }
  - { id: REP-3, method: api, checked_at: 2026-09-03T04:24:00Z, receipt_ids: [R-7], result: "DexScreener latest/dex/tokens/0xD786…517E: 15 robinhood uniswap pairs; top GB/AMD v4 0x9264…7635 quote 0x86923f…3fdC AMD • Robinhood Token / AMD liquidity.usd 35896.73 volume.h24 809601.07 fdv/marketCap 202008 pairCreatedAt 1788301048000 (2026-09-01T22:17:28Z) info.websites https://www.gigabyte.click/ info.socials x.com/gigabyteRH. Secondary GB/ETH and GB/USDG books far thinner. Distinct DexScreener AMD books: CHIP 0xE38B…C6E59, MD 0x3abb…1e18, MEOW 0x7235…1e18." }
  - { id: REP-4, method: api, checked_at: 2026-09-03T04:24:00Z, receipt_ids: [R-8, R-9, R-10], result: "Gecko pool 0x9264…7635 name AMD / GB pool_created_at 2026-09-01T22:17:28Z volume_usd.h24 785977.79 reserve_in_usd 57071.87 fdv_usd 1707159.38 (pool base is AMD 0x86923f…3fdC, quote is GB 0xD786…517E; dex pons-v2-dex). Gecko token name Gigabyte fdv_usd 440571.60 market_cap_usd null volume_usd.h24 796115.24 (all pools). Token info websites [] twitter_handle gigabyteRH description 'the dog takes a gigabyte of AMD' launchpad_details completed true completed_at 2026-09-01T22:17:28Z migrated_destination_pool_address 0x9264…7635 developer_address 0x35ec…16a2." }
  - { id: REP-5, method: api, checked_at: 2026-09-03T04:22:00Z, receipt_ids: [R-12], result: "GET api.robinhood.com/rhj/assets HTTP 200; assets length 194; tokenSymbol AMD hit 1: tokenName AMD • Robinhood Token deployments contractAddress 0x86923f96303D656E4aa86D9d42D1e57ad2023fdC chainId 4663 status ASSET_STATUS_ACTIVE." }
  - { id: REP-6, method: official-crosslink, checked_at: 2026-09-03T04:24:00Z, receipt_ids: [R-5, R-13, R-18], result: "token.socials() twitter https://x.com/gigabyteRH website empty. gigabyte.click HTML title GIGABYTE, boot-copy and footer CA: COMING SOON, footer X href #. script.js CONTRACT_ADDRESS 0xd78650f3a96e55e0710282c4f459ac556ef3517e and X_URL https://x.com/gigabyteRH. @gigabyteRH bio pins that CA. No GitHub URL this pass." }

claims:
  - { id: CLM-1, field: product.mechanism, value: "PonsV2LaunchFactory.launchToken deploys a 1e9-supply token onto a bonding curve quoted against pairToken AMD; CurveCompleted / LaunchSwept ~48 seconds later seeds Uniswap v4 GB/AMD via pool 0x9264…7635 (Gecko dex pons-v2-dex). Mint of 1e27 went to curve 0x535e…4Dd7. Token owner() reverts; deployer() is an EOA with no code.", class: verified, observed_at: 2026-09-03T04:22:00Z, receipt_ids: [R-4, R-5, R-6, R-16], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-2, field: identity.name, value: "Gigabyte", class: verified, observed_at: 2026-09-03T04:20:00Z, receipt_ids: [R-1, R-4, R-5], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-3, field: identity.symbol, value: "GB", class: verified, observed_at: 2026-09-03T04:20:00Z, receipt_ids: [R-1, R-4, R-5], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-4, field: deployment.address, value: "0xD78650f3A96e55e0710282c4f459AC556ef3517E", class: verified, observed_at: 2026-09-03T04:22:00Z, receipt_ids: [R-1, R-4, R-5], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-5, field: deployment.address, value: "0x7eD598BcEf8bd9Edd8C97A195C6d13f40801EC7e", class: verified, observed_at: 2026-09-03T04:22:00Z, receipt_ids: [R-3, R-5, R-6], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-6, field: lifecycle, value: mainnet, class: verified, observed_at: 2026-09-03T04:24:00Z, receipt_ids: [R-1, R-4, R-5, R-7], reproduction_ids: [REP-1, REP-2, REP-3], supersedes: null }
  - { id: CLM-7, field: taxonomy.primary-leaf, value: launch/graduation-token, class: claim, observed_at: 2026-09-03T04:22:00Z, receipt_ids: [R-4, R-8, R-16], reproduction_ids: [], supersedes: null }
  - { id: CLM-8, field: identity.handle, value: "NULL — no bidirectional official handle; onchain / DexScreener / Gecko / gigabyte.click/script.js name @gigabyteRH; bio pins CA 0xd786…517e without the site; flag unconfirmed-official", class: claim, observed_at: 2026-09-03T04:24:00Z, receipt_ids: [R-5, R-7, R-10, R-13, R-18], reproduction_ids: [REP-6], supersedes: null }
  - { id: CLM-9, field: relationship, value: "Distinct from in-flight CHIP (Cyber Hardware-Integrated Pup 0xE38B…C6E59 CHIP/AMD 0x05153549…), MD (A Machine Duck 0x3abb…1e18 MD/AMD 0x197d…9655), and MEOW 0x7235…1e18 MEOW/AMD 0xc057…9132. Shared rail is AMD 0x86923f…3fdC only. AMD is a rail, not this token. GB create path is factory.launchToken, not CHIP's launchAndBuy.", class: verified, observed_at: 2026-09-03T04:24:00Z, receipt_ids: [R-4, R-7, R-12, R-19], reproduction_ids: [REP-3, REP-5], supersedes: null }
  - { id: CLM-10, field: economics.metric, value: "Gecko AMD/GB pool 24h volume 785977.79 USD and reserve_in_usd 57071.87 at 2026-09-03T04:24:00Z (Gecko pool slice; pool fdv_usd 1707159.38 is the AMD-as-base book, not the Gecko token fdv)", class: verified, observed_at: 2026-09-03T04:24:00Z, receipt_ids: [R-8, R-9], reproduction_ids: [REP-4], supersedes: null }
  - { id: CLM-11, field: economics.metric, value: "DexScreener same pair liquidity.usd 35896.73 volume.h24 809601.07 fdv/marketCap 202008 at 2026-09-03T04:24:00Z", class: verified, observed_at: 2026-09-03T04:24:00Z, receipt_ids: [R-7], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-12, field: economics.metric, value: 922, class: verified, observed_at: 2026-09-03T04:20:00Z, receipt_ids: [R-1], reproduction_ids: [REP-2], supersedes: null }
  - { id: CLM-13, field: control.owner, value: "token owner() reverts; deployer() 0x35EC…16a2 has no code. PonsV2LaunchFactory owner() is SafeProxy 0x263e…19Dd (Pons factory control, not this token).", class: verified, observed_at: 2026-09-03T04:24:00Z, receipt_ids: [R-5, R-3, R-23], reproduction_ids: [REP-1], supersedes: null }
  - { id: CLM-14, field: control.privileged-role, value: "deployer() / launchToken from 0x35ECDa7659718A25371592e28E3969bd955F16a2; launchFactory 0x7eD5…EC7e; curve 0x535e…4Dd7; Gecko developer_address same 0x35ec…16a2", class: verified, observed_at: 2026-09-03T04:22:00Z, receipt_ids: [R-4, R-5, R-6, R-10], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-15, field: other, value: "Pair asset is AMD 0x86923f96303D656E4aa86D9d42D1e57ad2023fdC (GET /rhj/assets active Robinhood Token); venue is Uniswap v4 PoolManager 0x8366…0951 pool 0x9264…7635, Gecko dex id pons-v2-dex, hooks V2MemeHook 0xE5e7…e044", class: verified, observed_at: 2026-09-03T04:24:00Z, receipt_ids: [R-7, R-8, R-12, R-16, R-22], reproduction_ids: [REP-3, REP-4, REP-5], supersedes: null }
  - { id: CLM-16, field: deployment.role, value: "Token creator_address_hash was empty on the token page; launchFactory() names PonsV2LaunchFactory 0x7eD5…EC7e, not LongLauncher, PairLaunchpadV5, or stonks.fun. Create method is launchToken, not PonsV2LaunchAndBuy.", class: verified, observed_at: 2026-09-03T04:22:00Z, receipt_ids: [R-1, R-3, R-4, R-5], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-17, field: taxonomy.chain-scope, value: robinhood-native, class: verified, observed_at: 2026-09-03T04:20:00Z, receipt_ids: [R-5, R-7], reproduction_ids: [REP-1, REP-3], supersedes: null }
  - { id: CLM-18, field: security.audit, value: "No audit report URL was located on gigabyte.click, DexScreener, Gecko, Blockscout, or X search this pass. GB token is_verified false this pass.", class: claim, observed_at: 2026-09-03T04:25:00Z, receipt_ids: [R-1], reproduction_ids: [], supersedes: null }
  - { id: CLM-19, field: identity.domain, value: "https://www.gigabyte.click/", class: claim, observed_at: 2026-09-03T04:24:00Z, receipt_ids: [R-7, R-13], reproduction_ids: [REP-6], supersedes: null }
  - { id: CLM-20, field: economics.metric, value: "Gecko token fdv_usd 440571.60; DexScreener GB/AMD fdv/marketCap 202008. Gecko pool fdv_usd 1707159.38 is the inverted AMD/GB book. Gecko market_cap_usd null.", class: verified, observed_at: 2026-09-03T04:24:00Z, receipt_ids: [R-7, R-8, R-9], reproduction_ids: [REP-3, REP-4], supersedes: null }
  - { id: CLM-21, field: deployment.address, value: "0x86923f96303D656E4aa86D9d42D1e57ad2023fdC", class: verified, observed_at: 2026-09-03T04:22:00Z, receipt_ids: [R-7, R-12, R-17], reproduction_ids: [REP-3, REP-5], supersedes: null }
  - { id: CLM-22, field: deployment.address, value: "0x535eDdD8088533e98C7372dB2F64063c6B2B4Dd7", class: verified, observed_at: 2026-09-03T04:22:00Z, receipt_ids: [R-5, R-6, R-16], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-23, field: communications.status, value: "unconfirmed-official: onchain socials, DexScreener, Gecko, and gigabyte.click/script.js name @gigabyteRH; static HTML still prints CA: COMING SOON until script.js runs; bio pins the CA and not the site", class: claim, observed_at: 2026-09-03T04:24:00Z, receipt_ids: [R-7, R-13, R-18], reproduction_ids: [REP-6], supersedes: null }
  - { id: CLM-24, field: candidate, value: "gb | GB | NULL | https://www.gigabyte.click/ — discovery token not in census 49", class: claim, observed_at: 2026-09-03T04:25:00Z, receipt_ids: [R-1, R-7], reproduction_ids: [], supersedes: null }
  - { id: CLM-25, field: other, value: "Blockscout search Gigabyte also returns copycat tokens including 0x39ed…96a4 (holders 86), 0xDF0B…1e18 (holders 5), 0xD588…1e18 (holders 3), 0x7eEA…1E18 (holders 2), and several 0–1 holder names. Canonical book is 0xD786…517E / pool 0x9264…7635.", class: claim, observed_at: 2026-09-03T04:22:00Z, receipt_ids: [R-21], reproduction_ids: [], supersedes: null }
  - { id: CLM-26, field: "account.@gigabyteRH.role", value: project, class: claim, observed_at: 2026-09-03T04:24:00Z, receipt_ids: [R-13, R-18], reproduction_ids: [], supersedes: null }
  - { id: CLM-27, field: "account.@gigabyteRH.slug", value: gb, class: claim, observed_at: 2026-09-03T04:24:00Z, receipt_ids: [R-13, R-18], reproduction_ids: [], supersedes: null }
  - { id: CLM-28, field: "account.@gigabyteRH.note", value: "unconfirmed-official for CA 0xD786…517E; onchain socials / DexScreener / Gecko / gigabyte.click/script.js; bio pins the CA; X user search for gigabyteRH ranked GIGABYTE hardware accounts first", class: claim, observed_at: 2026-09-03T04:24:00Z, receipt_ids: [R-13, R-18], reproduction_ids: [], supersedes: null }

conflicts: []

events:
  - id: EVT-1
    type: onchain
    title: "DexScreener GB/AMD 24h volume $810k, Gecko liq $57.1k"
    summary: "DexScreener pair 0x9264…7635 volume.h24 809601.07 liquidity.usd 35896.73 fdv 202008. Gecko same pool reserve_in_usd 57071.87 volume_usd.h24 785977.79."
    occurred_at: 2026-09-03T04:24:00Z
    observed_at: 2026-09-03T04:24:00Z
    affected_fields: [economics.metric, activity.status]
    evidence_state: verified
    impact: material
    site_recommendation: both
    channel_recommendation: none
    receipt_ids: [R-7, R-8]
  - id: EVT-2
    type: ct
    title: "@gigabyteRH posted from a bio that pins the GB CA"
    summary: "@gigabyteRH bio: the dog takes a gigabyte of AMD and 0xd786…517e. Posts include 'gigagbyte every chip' and 'Every machine needs $GB'."
    occurred_at: 2026-09-02T15:36:58Z
    observed_at: 2026-09-03T04:24:00Z
    affected_fields: [identity.handle, communications.status]
    evidence_state: claim
    impact: routine
    site_recommendation: none
    channel_recommendation: none
    receipt_ids: [R-18]
  - id: EVT-3
    type: ct
    title: "@JayceBryce quoted GB as AMD-paired memory"
    summary: "@JayceBryce quoted @gigabyteRH: massive memory shortage; take a $gigabyte of it; paired with $AMD."
    occurred_at: 2026-09-03T00:41:48Z
    observed_at: 2026-09-03T04:24:00Z
    affected_fields: [activity.status, relationship]
    evidence_state: claim
    impact: routine
    site_recommendation: feed
    channel_recommendation: none
    receipt_ids: [R-20]
  - id: EVT-4
    type: ct
    title: "Netlify vote pages asked for $GB leaderboard votes"
    summary: "@vaultkoi75 and @emberwispxNFT posted robinhood-main-dex-*.netlify.app/vote/0xD786…517E. Flag copypasta-pattern | third-party-link; not an official listing surface."
    occurred_at: 2026-09-03T04:21:38Z
    observed_at: 2026-09-03T04:25:00Z
    affected_fields: [communications.status]
    evidence_state: claim
    impact: routine
    site_recommendation: none
    channel_recommendation: none
    receipt_ids: [R-24]
  - id: EVT-5
    type: onchain
    title: "Pons curve completed; LaunchSwept GB vs AMD"
    summary: "Tx 0xe8b8a57d…3f3c at 2026-09-01T22:17:28Z; quoteOut 16.6655e18 AMD into pool 0x9264…7635."
    occurred_at: 2026-09-01T22:17:28Z
    observed_at: 2026-09-03T04:22:00Z
    affected_fields: [deployment.address, lifecycle, product.mechanism]
    evidence_state: verified
    impact: material
    site_recommendation: profile
    channel_recommendation: none
    receipt_ids: [R-16]
  - id: EVT-6
    type: onchain
    title: "PonsV2LaunchFactory launchToken minted Gigabyte / GB"
    summary: "Tx 0x4e8de2d0…f62f from 0x35EC…16a2 at 2026-09-01T22:16:40Z; TokenLaunched pool quote AMD; socials twitter x.com/gigabyteRH; website empty."
    occurred_at: 2026-09-01T22:16:40Z
    observed_at: 2026-09-03T04:22:00Z
    affected_fields: [deployment.address, lifecycle, product.mechanism, identity.handle]
    evidence_state: verified
    impact: material
    site_recommendation: profile
    channel_recommendation: none
    receipt_ids: [R-4, R-6]

receipts:
  - { id: R-1, publisher: Blockscout, title: "Token 0xD786…517E Gigabyte / GB", url: "https://robinhoodchain.blockscout.com/address/0xD78650f3A96e55e0710282c4f459AC556ef3517E", published_at: null, accessed_at: 2026-09-03T04:20:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-2, CLM-3, CLM-4, CLM-6, CLM-12, CLM-16, CLM-18, CLM-24], excerpt: "hash 0xD78650f3A96e55e0710282c4f459AC556ef3517E name Gigabyte is_contract true is_verified false proxy_type null creator_address_hash null creation_transaction_hash null. token symbol GB decimals 18 total_supply 1000000000000000000000000000 holders_count 922 type ERC-20." }
  - { id: R-2, publisher: Blockscout, title: "PonsV2LauncherToken verified source on CHIP (bytecode-size peer)", url: "https://robinhoodchain.blockscout.com/address/0xE38B1C963Afc21f06b9E82A2de36A84FbB9C6E59?tab=contract", published_at: null, accessed_at: 2026-09-03T04:24:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1], excerpt: "CHIP 0xE38B…C6E59 ContractName PonsV2LauncherToken compiler v0.8.35 file_path contracts/src/v2/PonsV2LauncherToken.sol. Comment: deployer is immutable reference data and confers no privileges. GB 0xD786…517E is_verified false; RPC code length 3248 B matches CHIP but sha256 differs." }
  - { id: R-3, publisher: Blockscout, title: "Address 0x7eD5…EC7e PonsV2LaunchFactory", url: "https://robinhoodchain.blockscout.com/address/0x7eD598BcEf8bd9Edd8C97A195C6d13f40801EC7e", published_at: null, accessed_at: 2026-09-03T04:21:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-5, CLM-13, CLM-16], excerpt: "hash 0x7eD598BcEf8bd9Edd8C97A195C6d13f40801EC7e name PonsV2LaunchFactory is_contract true is_verified true file_path contracts/src/v2/PonsV2LaunchFactory.sol compiler v0.8.35+commit.47b9dedd verified_at 2026-08-04T17:40:45Z. RPC eth_getCode 24177 B. owner() SafeProxy 0x263ed295dAFaE1d9AAdD6E56c4B6F9f38eE019Dd." }
  - { id: R-4, publisher: Blockscout, title: "launchToken tx 0x4e8de2d0…f62f", url: "https://robinhoodchain.blockscout.com/tx/0x4e8de2d0aeaa436a220fb10a8b3568dfbb96a838f84438fbf2530fbf3cf9f62f", published_at: 2026-09-01T22:16:40Z, accessed_at: 2026-09-03T04:22:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-2, CLM-3, CLM-4, CLM-6, CLM-14, CLM-16, EVT-6], excerpt: "timestamp 2026-09-01T22:16:40.000000Z status ok block_number 52068452 from 0x35ECDa7659718A25371592e28E3969bd955F16a2 (is_contract false) to PonsV2LaunchFactory 0x7eD598BcEf8bd9Edd8C97A195C6d13f40801EC7e method launchToken. params name Gigabyte symbol GB image ipfs://bafkreicg5fx4phz7gulbiydsyklb5a5kij2nsae7xldi3emhsrg2vqhmoa description the dog takes a gigabyte of AMD twitter https://x.com/gigabyteRH website empty pairToken 0x86923f96303D656E4aa86D9d42D1e57ad2023fdC launchConfigId 0." }
  - { id: R-5, publisher: Robinhood Chain RPC, title: "eth_getCode, name, symbol, deployer(), launchFactory(), curve(), socials() on GB", url: "https://rpc.mainnet.chain.robinhood.com", published_at: null, accessed_at: 2026-09-03T04:24:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-2, CLM-3, CLM-4, CLM-5, CLM-6, CLM-8, CLM-13, CLM-16, CLM-17, CLM-22], excerpt: "eth_chainId 0x1237 (4663) eth_blockNumber 0x32ac44b (53133643). Token code 3248 B prefix 60806040. name Gigabyte symbol GB decimals 18 totalSupply 1e27. owner() factory() revert. deployer() 0x35ECDa7659718A25371592e28E3969bd955F16a2 code 0x. launchFactory() 0x7eD598BcEf8bd9Edd8C97A195C6d13f40801EC7e. curve() 0x535eDdD8088533e98C7372dB2F64063c6B2B4Dd7 code 10229 B. socials() twitter https://x.com/gigabyteRH website empty. Factory owner() 0x263ed295dAFaE1d9AAdD6E56c4B6F9f38eE019Dd." }
  - { id: R-6, publisher: Blockscout, title: "TokenLaunched log for GB", url: "https://robinhoodchain.blockscout.com/tx/0x4e8de2d0aeaa436a220fb10a8b3568dfbb96a838f84438fbf2530fbf3cf9f62f", published_at: 2026-09-01T22:16:40Z, accessed_at: 2026-09-03T04:22:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-5, CLM-14, CLM-22, EVT-6], excerpt: "PonsV2LaunchFactory TokenLaunched token 0xD78650f3A96e55e0710282c4f459AC556ef3517E curve 0x535eDdD8088533e98C7372dB2F64063c6B2B4Dd7 deployer 0x35ECDa7659718A25371592e28E3969bd955F16a2 pairToken 0x86923f96303D656E4aa86D9d42D1e57ad2023fdC launchConfigId 0 graduationThreshold 16665504590959022517. Transfer from 0x0 to curve value 1e27. Block 52068452." }
  - { id: R-7, publisher: DexScreener, title: "latest/dex/tokens GB", url: "https://api.dexscreener.com/latest/dex/tokens/0xD78650f3A96e55e0710282c4f459AC556ef3517E", published_at: null, accessed_at: 2026-09-03T04:24:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-7, CLM-8, CLM-9, CLM-11, CLM-15, CLM-17, CLM-19, CLM-20, CLM-21, CLM-24, EVT-1], excerpt: "15 robinhood uniswap pairs. Top pairAddress 0x9264f0d740eab13c8417baa0d27cedfb3ba63950e55a50e413678e7d55967635 labels v4 base Gigabyte / GB quote AMD • Robinhood Token / AMD 0x86923f96…3fdC liquidity.usd 35896.73 volume.h24 809601.07 fdv 202008 marketCap 202008 pairCreatedAt 1788301048000. info.websites https://www.gigabyte.click/ info.socials x.com/gigabyteRH." }
  - { id: R-8, publisher: GeckoTerminal, title: "AMD/GB Uniswap v4 pool", url: "https://api.geckoterminal.com/api/v2/networks/robinhood/pools/0x9264f0d740eab13c8417baa0d27cedfb3ba63950e55a50e413678e7d55967635", published_at: null, accessed_at: 2026-09-03T04:24:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-6, CLM-7, CLM-10, CLM-15, CLM-20, EVT-1], excerpt: "name AMD / GB pool_created_at 2026-09-01T22:17:28Z fdv_usd 1707159.37954779 market_cap_usd 1707161.54677444 volume_usd.h24 785977.785628576 reserve_in_usd 57071.8684. dex pons-v2-dex quote robinhood_0xd78650f3a96e55e0710282c4f459ac556ef3517e base robinhood_0x86923f96303d656e4aa86d9d42d1e57ad2023fdc." }
  - { id: R-9, publisher: GeckoTerminal, title: "Gigabyte token", url: "https://api.geckoterminal.com/api/v2/networks/robinhood/tokens/0xd78650f3a96e55e0710282c4f459ac556ef3517e", published_at: null, accessed_at: 2026-09-03T04:24:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-8, CLM-10, CLM-20], excerpt: "name Gigabyte symbol GB decimals 18 total_supply 1e27 price_usd 0.0004405715991 fdv_usd 440571.599058005 market_cap_usd null volume_usd.h24 796115.241819351 total_reserve_in_usd 44533.67. coingecko_coin_id null. Top pool 0x9264…7635. launchpad_details completed true completed_at 2026-09-01T22:17:28Z migrated_destination_pool_address 0x9264…7635." }
  - { id: R-10, publisher: GeckoTerminal, title: "Gigabyte token info", url: "https://api.geckoterminal.com/api/v2/networks/robinhood/tokens/0xd78650f3a96e55e0710282c4f459ac556ef3517e/info", published_at: null, accessed_at: 2026-09-03T04:20:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-8, CLM-14, CLM-23], excerpt: "websites [] twitter_handle gigabyteRH telegram_handle null description the dog takes a gigabyte of AMD gt_verified false holders.count 655 developer_address 0x35ecda7659718a25371592e28e3969bd955f16a2 developer_holding_percentage 0.0 launchpad_details completed true completed_at 2026-09-01T22:17:28Z." }
  - { id: R-11, publisher: DexScreener, title: "GB/AMD pair page", url: "https://dexscreener.com/robinhood/0x9264f0d740eab13c8417baa0d27cedfb3ba63950e55a50e413678e7d55967635", published_at: null, accessed_at: 2026-09-03T04:19:00Z, kind: third-party-data, authority: aggregator, authenticity: unconfirmed, supports: [], excerpt: "GB/AMD Gigabyte on Uniswap v4 (Robinhood). Pair 0x9264…7635 GB 0xD786…517E AMD 0x86923f…3fdC." }
  - { id: R-12, publisher: Robinhood, title: "GET /rhj/assets Stock Token registry", url: "https://api.robinhood.com/rhj/assets", published_at: null, accessed_at: 2026-09-03T04:22:00Z, kind: docs, authority: primary, authenticity: confirmed, supports: [CLM-9, CLM-15, CLM-21], excerpt: "HTTP 200. assets length 194. tokenSymbol AMD hit 1: tokenName AMD • Robinhood Token status ASSET_STATUS_ACTIVE deployments contractAddress 0x86923f96303D656E4aa86D9d42D1e57ad2023fdC chainId 4663 networkName Robinhood Chain." }
  - { id: R-13, publisher: gigabyte.click, title: "GIGABYTE site and script.js CA", url: "https://www.gigabyte.click/", published_at: 2026-09-02T07:48:25Z, accessed_at: 2026-09-03T04:24:00Z, kind: official-site, authority: primary, authenticity: confirmed, supports: [CLM-8, CLM-19, CLM-23, CLM-26, CLM-27, CLM-28], excerpt: "HTTP 200 Vercel. title GIGABYTE. meta description GIGABYTE. Big dog. Tiny disk. Static HTML boot-copy and footer CA: COMING SOON; footer X href #. script.js CONTRACT_ADDRESS 0xd78650f3a96e55e0710282c4f459ac556ef3517e X_URL https://x.com/gigabyteRH. TradingView embed NASDAQ-AMD. last-modified 2026-09-02T07:48:25Z." }
  - { id: R-14, publisher: GeckoTerminal, title: "GB/AMD pool page", url: "https://www.geckoterminal.com/robinhood/pools/0x9264f0d740eab13c8417baa0d27cedfb3ba63950e55a50e413678e7d55967635", published_at: null, accessed_at: 2026-09-03T04:20:00Z, kind: third-party-data, authority: aggregator, authenticity: unconfirmed, supports: [], excerpt: "AMD/GB Gigabyte Price. Pool 0x9264…7635 GB 0xd786…517e AMD 0x8692…3fdc." }
  - { id: R-15, publisher: Blockscout, title: "Curve address 0x535e…4Dd7", url: "https://robinhoodchain.blockscout.com/address/0x535eDdD8088533e98C7372dB2F64063c6B2B4Dd7", published_at: null, accessed_at: 2026-09-03T04:21:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-22], excerpt: "hash 0x535eDdD8088533e98C7372dB2F64063c6B2B4Dd7 name null is_contract false is_verified false creator_address_hash null this pass. RPC eth_getCode 10229 B. CurveCompleted decoded on this address in tx 0xe8b8a57d…3f3c." }
  - { id: R-16, publisher: Blockscout, title: "CurveCompleted / LaunchSwept tx 0xe8b8a57d…3f3c", url: "https://robinhoodchain.blockscout.com/tx/0xe8b8a57d1422cdb7e030ec498ff99322c564379b010cfe0a1af762c3f6813f3c", published_at: 2026-09-01T22:17:28Z, accessed_at: 2026-09-03T04:22:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-15, CLM-22, EVT-5], excerpt: "timestamp 2026-09-01T22:17:28.000000Z status ok block_number 52068923. CurveCompleted recipient 0x7eD5…EC7e quoteOut 16665504590959022566 tokenOut 285714285714285714291837161. LaunchSwept token 0xD786…517E same quoteOut/tokenOut. PoolManager Initialize id 0x9264f0d740eab13c8417baa0d27cedfb3ba63950e55a50e413678e7d55967635 currency0 AMD currency1 GB hooks V2MemeHook 0xE5e702641Ea86F4ae6cC3cDaeD2B886f976Be044. ModifyLiquidity sender PositionManager 0x58daec3116aae6D93017bAAea7749052E8a04fA7." }
  - { id: R-17, publisher: Blockscout, title: "Token 0x86923f…3fdC AMD • Robinhood Token", url: "https://robinhoodchain.blockscout.com/address/0x86923f96303D656E4aa86D9d42D1e57ad2023fdC", published_at: null, accessed_at: 2026-09-03T04:22:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-9, CLM-21], excerpt: "hash 0x86923f96303D656E4aa86D9d42D1e57ad2023fdC name BeaconProxy is_contract true is_verified true proxy_type eip1967_beacon implementations Stock 0xb35490d6f9163DE4F80d88dc75C3516eb64C5aE2. token name AMD • Robinhood Token symbol AMD decimals 18 holders_count 36206." }
  - { id: R-18, publisher: "@gigabyteRH", title: "gigagbyte every chip", url: "https://x.com/gigabyteRH/status/2095174148813173053", published_at: 2026-09-02T15:36:58Z, accessed_at: 2026-09-03T04:24:00Z, kind: social, authority: social, authenticity: unconfirmed, supports: [CLM-8, CLM-23, CLM-26, CLM-27, CLM-28, EVT-2], excerpt: "Profile: Gigabyte @gigabyteRH bio the dog takes a gigabyte of AMD 0xd78650f3a96e55e0710282c4f459ac556ef3517e. Post: gigagbyte every chip. Earlier 2026-09-01T22:52:17Z Every machine needs $GB." }
  - { id: R-19, publisher: DexScreener, title: "search CHIP AMD robinhood neighboring AMD books", url: "https://api.dexscreener.com/latest/dex/search?q=CHIP%20AMD%20robinhood", published_at: null, accessed_at: 2026-09-03T04:24:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-9], excerpt: "CHIP Cyber Hardware-Integrated Pup 0xE38B1C963Afc21f06b9E82A2de36A84FbB9C6E59 / AMD. MEOW 0x7235Cf5eA4674FE09531706954B5f1aD6E0A1e18 / AMD. GB Gigabyte 0xD78650f3A96e55e0710282c4f459AC556ef3517E / AMD pair 0x9264f0d7…7635. MD A Machine Duck 0x3abb8d686dF6e538bb0887917d14f04f705f1e18 / AMD. Distinct addresses." }
  - { id: R-20, publisher: "@JayceBryce", title: "take a $gigabyte paired with $AMD", url: "https://x.com/JayceBryce/status/2095311260954812706", published_at: 2026-09-03T00:41:48Z, accessed_at: 2026-09-03T04:24:00Z, kind: social, authority: social, authenticity: confirmed, supports: [EVT-3], excerpt: "There's a massive memory shortage in the world. Get it while supply lasts. Matter fact take a $gigabyte of it. Paired with $AMD. Quoted @gigabyteRH gigabyte will bite until he is the largest onchain holder of AMD forever." }
  - { id: R-21, publisher: Blockscout, title: "Search Gigabyte copycat tokens", url: "https://robinhoodchain.blockscout.com/api/v2/search?q=Gigabyte", published_at: null, accessed_at: 2026-09-03T04:22:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-25], excerpt: "10 token hits named Gigabyte/GIGABYTE: 0xD78650f3A96e55e0710282c4f459AC556ef3517E holders 922; 0x39ed72F46268CFE79A0bD367F3e590A452a396a4 holders 86; 0xDF0B3870364D49E55C1BfBe84e1292C5Cb0f1e18 holders 5; 0xD58850095306CeEdDcF8006B0a947094370D1e18 holders 3; 0x7eEA1F872c94DF35d038BC827cd921F2343a1E18 holders 2; others 0–1." }
  - { id: R-22, publisher: Blockscout, title: "V2MemeHook 0xE5e7…e044", url: "https://robinhoodchain.blockscout.com/address/0xE5e702641Ea86F4ae6cC3cDaeD2B886f976Be044", published_at: null, accessed_at: 2026-09-03T04:25:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-15], excerpt: "hash 0xE5e702641Ea86F4ae6cC3cDaeD2B886f976Be044 name V2MemeHook is_contract true is_verified true. RPC eth_getCode 15167 B. Pool Initialize hooks field in tx 0xe8b8a57d…3f3c." }
  - { id: R-23, publisher: Blockscout, title: "Pons factory owner SafeProxy 0x263e…19Dd", url: "https://robinhoodchain.blockscout.com/address/0x263ed295dAFaE1d9AAdD6E56c4B6F9f38eE019Dd", published_at: null, accessed_at: 2026-09-03T04:25:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-13], excerpt: "hash 0x263ed295dAFaE1d9AAdD6E56c4B6F9f38eE019Dd name SafeProxy is_contract true is_verified true. Returned by PonsV2LaunchFactory owner() this pass." }
  - { id: R-24, publisher: "@vaultkoi75", title: "$GB Robinhood Top 100 vote", url: "https://x.com/vaultkoi75/status/2095366583975620899", published_at: 2026-09-03T04:21:38Z, accessed_at: 2026-09-03T04:25:00Z, kind: social, authority: social, authenticity: unconfirmed, supports: [EVT-4], excerpt: "Attention $GB Family! YOUR vote matters! Less than 100 votes are needed to list $GB on the Robinhood Top 100 Leaderboard. URL robinhood-main-dex-nqf.netlify.app/vote/0xD78650f3A96e55e0710282c4f459AC556ef3517E. Sister post @emberwispxNFT 2095289200832602134 used robinhood-main-dex-vgm.netlify.app. Flag copypasta-pattern | third-party-link." }

gaps:
  - { priority: P0, question: "Does @gigabyteRH bio or a pinned post bidirectionally name gigabyte.click?", checked: "bio pins CA 0xd786…517e and the AMD-dog line; script.js names the handle; bio has no site URL this pass, 2026-09-03", next: "re-read the bio after a site pin; treat handle as official only with that cross-link" }
  - { priority: P1, question: "Why is Blockscout is_contract false for curve 0x535e…4Dd7 despite 10229 B of code?", checked: "RPC eth_getCode 10229 B; CurveCompleted logs decode on that address; address API name null is_contract false creator null, 2026-09-03", next: "re-fetch the address after indexer catch-up; compare bytecode to verified PonsV2BondingCurve 0x05690b…b0E0" }
  - { priority: P1, question: "Why do DexScreener GB/AMD fdv (~$202k) and Gecko token fdv (~$441k) disagree by ~2x?", checked: "Dex pair fdv/marketCap 202008 liquidity 35896.73; Gecko token price_usd 0.00044057 fdv_usd 440571.60; Gecko pool fdv is AMD-as-base 1.71M, 2026-09-03", next: "compare Gecko token price source pool vs the AMD book; do not collapse the two fdv figures" }
  - { priority: P2, question: "What does launch image ipfs://bafkreicg5fx4phz7gulbiydsyklb5a5kij2nsae7xldi3emhsrg2vqhmoa contain?", checked: "launchToken decoded image CID; IPFS not fetched this pass, 2026-09-03", next: "fetch the CID once for social_links / image without treating it as official" }
---

# GB — research packet

## What it is

A one-billion-supply ERC-20 launched on Pons v2 and graduated into a Uniswap v4 pool quoted against AMD. PonsV2LaunchFactory.launchToken from 0x35EC…16a2 minted Gigabyte (GB) on 2026-09-01T22:16:40Z onto a bonding curve, then swept into the GB/AMD book ~48 seconds later. Traders buy and sell GB on Uniswap v4. AMD is the quote rail, not this token. gigabyte.click/script.js embeds this CA. No bidirectional official handle was located this pass.

Themes: memecoin, stock-paired:AMD, rwa, pons-graduation

## Why it matters

The GB/AMD Uniswap v4 book printed about $810k of 24h volume on DexScreener and about $57.1k of Gecko pool reserve at collection, against an active Robinhood AMD Stock Token. Several other AMD-paired names (CHIP, MD, MEOW) share that rail and are different tokens. Assignment lead of DexScreener liq ~$35,988 / vol ~$834,001 is this same book; live DexScreener this pass is 35896.73 / 809601.07.

## What could go wrong

USD liquidity figures on the GB/AMD book count both sides, and the quote side is AMD, not USDG. Gecko pool fdv treats AMD as the base and is not the GB token fdv. DexScreener GB/AMD fdv (~$202k) and Gecko token fdv (~$441k) disagree. Same-name Gigabyte copycats exist, including 0x39ed…96a4 with 86 holders. Handle stays unconfirmed-official. Token source is unverified on Blockscout this pass.

## Product and mechanics

PonsV2LaunchFactory 0x7eD5…EC7e launchToken from 0x35EC…16a2 at 2026-09-01T22:16:40Z minted Gigabyte / GB supply 1e9*1e18 onto curve 0x535e…4Dd7 quoted against pairToken AMD 0x86923f…3fdC. TokenLaunched names graduationThreshold 16.6655e18. [verified R-4 R-5 R-6]

CurveCompleted / LaunchSwept at 2026-09-01T22:17:28Z moved quoteOut 16.6655e18 AMD into Uniswap v4 poolId 0x9264…7635. PoolManager is 0x8366…0951. Hook is V2MemeHook 0xE5e7…e044. Gecko labels the pool pons-v2-dex. Secondary GB/USDG and GB/ETH books exist on DexScreener with far less liquidity than the AMD book. [verified R-7 R-8 R-16]

This is factory.launchToken, not CHIP's PonsV2LaunchAndBuy path, and not LongLauncher. [verified R-4 R-9]

## Control and security

token owner() reverts. deployer() 0x35EC…16a2 has no code. launchFactory() returns PonsV2LaunchFactory. That factory owner() is SafeProxy 0x263e…19Dd, which is Pons pad control, not a GB-token admin on this call. [verified R-5 R-3 R-23]

GB token is_verified false on Blockscout this pass. Code length 3248 B matches verified PonsV2LauncherToken CHIP 0xE38B…C6E59, but bytecode sha256 differs. Curve 0x535e…4Dd7 has 10229 B of code on RPC while Blockscout still reports is_contract false. No audit report URL was located this pass. [verified R-1 R-2 R-15] [unknown]

## Team and provenance

gigabyte.click titles GIGABYTE. Static HTML still prints CA: COMING SOON; script.js sets CONTRACT_ADDRESS 0xd786…517e and X_URL https://x.com/gigabyteRH. token.socials() twitter is that handle and website empty. @gigabyteRH bio pins the CA; flag unconfirmed-official. [claim R-5 R-13 R-18]

AMD Inc. is the listed issuer of the quote rail. GET /rhj/assets names that rail AMD • Robinhood Token at 0x8692…3fdC. That is a dependency, not this token. [verified R-12 R-17]

X user search for gigabyteRH ranked GIGABYTE hardware accounts (@GIGABYTEUSA, @GIGABYTE_DE) above the token handle. [claim R-18]

## Economics and activity

GB/AMD Uniswap v4 24h volume is 809601.07 USD and DexScreener liquidity.usd is 35896.73 at 2026-09-03T04:24:00Z. fdv/marketCap 202008. Gecko same pool volume_usd.h24 785977.79 reserve_in_usd 57071.87. Gecko token volume_usd.h24 796115.24 across all pools, not the AMD book. [claim R-7 R-8 R-9]

Gecko token fdv_usd 440571.60 disagrees with the Dex AMD-book fdv. Gecko pool fdv_usd 1707159.38 is AMD-as-base. Blockscout holders_count 922. Pair created 2026-09-01T22:17:28Z. [claim R-1 R-7 R-8 R-9]

## Material risks

- Quote token AMD 0x8692…3fdC is a Robinhood Stock Token rail; GB is not AMD. [verified R-12 R-17]
- Pool USD reserve is GB plus AMD, not a USDG or WETH backstop. [claim R-7 R-8]
- No bidirectional official handle this pass; @gigabyteRH is unconfirmed-official. [claim R-7 R-18]
- Same-name Gigabyte copycats exist, one with 86 holders. [verified R-21]
- GB token source unverified; no audit report URL this pass. [unknown]
- Netlify "Top 100" vote URLs are third-party-link / copypasta-pattern. [claim R-24]

## Verification passes

- Receipts: Blockscout token/factory/curve/AMD, launchToken 0x4e8d…f62f, CurveCompleted 0xe8b8…3f3c, RPC name/symbol/deployer/launchFactory/curve/socials, DexScreener, Gecko pool/token/info, /rhj/assets, gigabyte.click HTML and script.js, @gigabyteRH, @JayceBryce, and the Netlify vote posts were opened on 2026-09-03 and excerpts copied from the responses. [verified R-1 R-5 R-8 R-12]
- Numbers: 809601.07 is the DexScreener GB/AMD 24h volume, not the Gecko token all-pools 796115.24. Reserve 57071.87 is the Gecko AMD/GB pool. DexScreener liquidity 35896.73 is the same pair, different aggregator. Gecko pool fdv 1.71M is AMD-as-base. [claim R-7 R-8 R-9]
- Adversarial: the strongest contrary reading is that GB is the AMD hardware-issuer product or the same token as CHIP/MD/MEOW. GET /rhj/assets names AMD • Robinhood Token at 0x8692…3fdC as a separate asset; CHIP/MD/MEOW are different addresses; gigabyte.click is not gigabyte.com. [inference R-12 R-19 R-13]

## Operations log

- Base: `git -C /Users/harsharnsingh/proofline-pr59 rev-parse origin/main` → 334ca0619aa62e922da83f46de021f06d12348cf. Census 49 slugs have no gb / GB / Gigabyte / 0xD786…517E. GET packet path on grok-heavy/20260903/WORK-20260903-grok-heavy-icarus-research returned 404 before PUT.
- Explorer: Blockscout api/v2 token, factory, curve, AMD, V2MemeHook, SafeProxy owner, launchToken 0x4e8d…f62f, CurveCompleted 0xe8b8…3f3c, TokenLaunched / LaunchSwept / Initialize logs, search Gigabyte. RPC eth_getCode/eth_call with Chrome UA at blocks 53131244–53133643.
- Aggregators: DexScreener latest/dex/tokens and search CHIP AMD robinhood; Gecko token, token/info, pool.
- Registry: GET api.robinhood.com/rhj/assets 194 assets, 1 AMD.
- Social: X keyword from:gigabyteRH; $GB Gigabyte AMD; user search gigabyteRH ranked hardware brands; @JayceBryce quote; Netlify vote posts.
- Site: https://www.gigabyte.click/ and /script.js.
- Failed: Blockscout token creator_address_hash null (launchToken / factory() used instead); curve address API is_contract false despite code; Gecko token fdv not equal to Dex AMD-book fdv; IPFS CID not fetched.
- Time: collection 2026-09-03T04:19Z–2026-09-03T04:25Z.
