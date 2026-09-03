---
# Packet v2 (docs/research-system.md §5). Seed with Icarus What-it-is + events.
contract_version: proofline-research-v2
work_id: WORK-20260903-grok-heavy-icarus-research
producer: grok-heavy
role: collector
base_sha: 334ca0619aa62e922da83f46de021f06d12348cf
slug: md
name: MD
packet_tier: seed
as_of: 2026-09-03T04:12:00Z
prior_packet: null
supersedes: null
owned_slugs: [md]
allowed_paths:
  - research/inbox/packets/md/WORK-20260903-grok-heavy-icarus-research.md

identity:
  canonical_name: MD
  aliases: ["A Machine Duck"]
  symbols: [MD]
  entity_kind: token
  chain_scope: robinhood-native
  official_domain: "NULL — DexScreener info.websites is the LONG pad URL app.long.xyz/tokens/0x3abb…1e18 (Cloudflare 403 this pass); Gecko token info websites []; Blockscout token page lists no homepage this pass"
  official_handle: "NULL — DexScreener info.socials lists x.com/AMachineDuck; @AMachineDuck bio contains CA 0x3abb…1e18 and $MD; Gecko twitter_handle null; no site or bidirectional official-crosslink this pass; flag unconfirmed-official"
  repository: "NULL — no GitHub org or repository URL on DexScreener, Gecko, Blockscout, or X search this pass"
  possible_matches:
    - slug: long
      signals: [shared-address]
      contrary_signals:
        - "Census LONG is a stock-paired factory at app.long.xyz / @longdotxyz with LongLauncher 0x22e9…eeED"
        - "MD is a graduation token at 0x3abb…1e18 created through that LongLauncher.create into an MD/AMD book"
        - "No shared domain or handle; MD has no official site this pass"
    - slug: bankr
      signals: [shared-address]
      contrary_signals:
        - "Census Bankr is an agent execution surface at bankr.bot / @bankrbot using the same DopplerERC20V1Factory 0x1B37…b69a and Airlock 0xeb7C…0862"
        - "MD create tx 0xbd6e…29e3 is LongLauncher.create from EOA 0xe5d5…b644, not a Bankr EntryPoint row; GET api.bankr.bot/token-launches latest 50 had 0 MD / A Machine Duck / 0x3abb…1e18 hits"
        - "Gecko labels the pool dex bankr-robinhood because the book uses DopplerHookInitializer, not because Bankr minted it"
    - slug: artificial-inu
      signals: [other]
      contrary_signals:
        - "Census Artificial Inu is $AI at 0x2E8c…1e18 paired to NVDA via LongLauncher, site artificialinu.com / @ArtificiallyInu"
        - "MD is ticker MD at 0x3abb…1e18 paired to AMD 0x8692…3fdC"
        - "No shared domain, handle, or reproduced address"

classification:
  primary_leaf: rwa-products/stock-paired-token
  secondary_leaves: [launch/graduation-token]
  mechanism_tags: [stock-paired, rwa, amm, launchpad]
  ecosystem_role: graduation
  lifecycle: mainnet
  coverage_recommendation: seed
  evidence_state: partly-verified
  rationale: "Not in the 49-row census. Token 0x3abb…1e18 is an EIP-1167 DopplerERC20V1 clone with non-empty code on 4663; owner() is Airlock 0xeb7C…0862; LongLauncher.create minted A Machine Duck / MD into Uniswap v4 pool 0x197d…9655 quoted against AMD 0x8692…3fdC, which GET rhj/assets lists as AMD • Robinhood Token. AMD is the quote rail, not the subject. Distinct from CHIP 0xE38B…6E59, MEOW 0x7235…1e18, and GB 0xD786…517E (other AMD-quoted books). No official site this pass. [R-1] [R-4] [R-5] [R-7] [R-11] [R-22]"

qualifying:
  deployed_on_chain: { status: pass, claim_ids: [CLM-4, CLM-5, CLM-6], note: "" }
  native_play:       { status: pass, claim_ids: [CLM-1, CLM-15], note: "" }
  citable:           { status: pass, claim_ids: [CLM-2, CLM-3, CLM-4], note: "" }
  research_story:    { status: pass, claim_ids: [CLM-1, CLM-9, CLM-10], note: "" }

links:
  - { kind: x, url: "https://x.com/AMachineDuck", authenticity: unconfirmed }

deployments:
  - label: MD token (EIP-1167 DopplerERC20V1 clone)
    role: token
    address:
      value: "0x3abb8d686dF6e538bb0887917d14f04f705f1e18"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T04:06:00Z
      exists_on_4663: true
      explorer_source_verified: true
      explorer_source_verification_scope: proxy-shell-only
      implementation_source_verified: true
    receipt_ids: [R-1, R-4, R-5]
  - label: DopplerERC20V1 implementation
    role: implementation
    address:
      value: "0x3Be8B97Fd0e713B5aBE0649Fa830223B6B4BC599"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T04:06:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-2, R-5]
  - label: DopplerERC20V1Factory (create tokenFactory)
    role: factory
    address:
      value: "0x1B37D3a72082029c44B35B604Ea473617580b69a"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T04:08:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-3, R-4, R-5]
  - label: LongLauncher (create() target)
    role: factory
    address:
      value: "0x22e99278308B393ea1260859B181AD7E78f5eeED"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T04:08:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-4, R-13]
  - label: Airlock (token owner())
    role: other
    address:
      value: "0xeb7C034704eF8Dcd2D32324c1545f62fB4aD0862"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T04:06:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-5, R-6, R-14]
  - label: AMD • Robinhood Token (pair quote / numeraire / rail)
    role: token
    address:
      value: "0x86923f96303D656E4aa86D9d42D1e57ad2023fdC"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T04:06:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-11, R-12]

metrics:
  - { kind: volume_24h, value: 331097.89, currency: USD, as_of: 2026-09-03T04:05:00Z, window: 24h, method: "api.geckoterminal.com/api/v2/networks/robinhood/pools/0x197db3e35d66549592bdf1a77172eedbca36a864e185145796412ab8e3cb9655 volume_usd.h24", class: claim, receipt_ids: [R-8] }
  - { kind: tvl, value: 139439.43, currency: USD, as_of: 2026-09-03T04:05:00Z, window: point, method: "api.geckoterminal.com/api/v2/networks/robinhood/pools/0x197db3e35d66549592bdf1a77172eedbca36a864e185145796412ab8e3cb9655 reserve_in_usd (MD/AMD pool, not an all-pools figure)", class: claim, receipt_ids: [R-8] }
  - { kind: market_cap, value: 308460.38, currency: USD, as_of: 2026-09-03T04:05:00Z, window: point, method: "api.geckoterminal.com/api/v2/networks/robinhood/pools/0x197db3e35d66549592bdf1a77172eedbca36a864e185145796412ab8e3cb9655 fdv_usd (market_cap_usd null)", class: claim, receipt_ids: [R-8] }
  - { kind: holders, value: 391, currency: null, as_of: 2026-09-03T04:06:00Z, window: point, method: "robinhoodchain.blockscout.com/api/v2/tokens/0x3abb8d686dF6e538bb0887917d14f04f705f1e18 holders_count", class: claim, receipt_ids: [R-1] }

reproductions:
  - { id: REP-1, method: explorer-rpc, chain_id: 4663, checked_at: 2026-09-03T04:10:00Z, receipt_ids: [R-5, R-6], result: "eth_blockNumber 53123127 then 53124940. Token 0x3abb…1e18 eth_getCode 44 bytes EIP-1167 impl 0x3be8b97f…c599. name A Machine Duck, symbol MD, decimals 18, totalSupply 1e27. owner() Airlock 0xeb7c034704ef8dcd2d32324c1545f62fb4ad0862. factory() reverts. isPoolLocked true. pool() 0xdead…dead. controller() zero. tokenURI ipfs://bafkreihufuqw7dtrq6gufwpa2gl5vn23x7nwkv6yrilpscq66dy4mmihbu. vestingStart 1787942272. Airlock code 5695 B; factory 1912 B; impl 13927 B; LongLauncher 5826 B. AMD name AMD • Robinhood Token symbol AMD code 283 B." }
  - { id: REP-2, method: explorer-ui, chain_id: 4663, checked_at: 2026-09-03T04:08:00Z, receipt_ids: [R-1, R-2, R-3, R-4, R-12, R-13, R-14, R-15], result: "Blockscout api/v2 token 0x3abb…1e18 name A Machine Duck symbol MD holders_count 391 total_supply 1e27 proxy_type eip1167 implementation DopplerERC20V1 0x3Be8…C599 is_verified true. Token creator_address_hash null this pass. create tx 0xbd6e…29e3 2026-08-28T18:37:52Z block 48518279 from EOA 0xe5d5…b644 to LongLauncher 0x22e9…eeED method create. LaunchCreated normalizedTicker MD numeraire AMD 0x8692…3fdC launcher 0xe5d5…b644 poolId 0x197d…9655. AMD BeaconProxy name AMD • Robinhood Token implementation Stock." }
  - { id: REP-3, method: api, checked_at: 2026-09-03T04:05:00Z, receipt_ids: [R-7, R-8, R-9, R-10, R-23], result: "DexScreener 6 robinhood uniswap pairs for 0x3abb…1e18; top MD/AMD v4 0x197d…9655 quote 0x8692…3fdC AMD • Robinhood Token liquidity.usd 143796.32 volume.h24 342194.33 fdv/marketCap 317394 pairCreatedAt 1787942272 (2026-08-28T18:37:52Z) info.websites app.long.xyz/tokens/0x3abb…1e18 info.socials x.com/AMachineDuck. Gecko pool name MD / AMD dex bankr-robinhood volume_usd.h24 331097.89 reserve_in_usd 139439.43 fdv_usd 308460.38 pool_created_at 2026-08-28T18:37:52Z. Gecko token volume_usd.h24 331827.23 (all pools). Gecko token info websites [] twitter_handle null." }
  - { id: REP-4, method: api, checked_at: 2026-09-03T04:07:00Z, receipt_ids: [R-11], result: "GET api.robinhood.com/rhj/assets HTTP 200; assets length 194; AMD hit tokenName AMD • Robinhood Token deployments contractAddress 0x86923f96303D656E4aa86D9d42D1e57ad2023fdC chainId 4663 status ASSET_STATUS_ACTIVE." }
  - { id: REP-5, method: explorer-rpc, chain_id: 4663, checked_at: 2026-09-03T04:10:00Z, receipt_ids: [R-4, R-6, R-15], result: "Create tx logs: OwnershipTransferred to Airlock; mint 1e27 to Airlock; PoolManager Initialize id 0x197d…9655 currency0 MD currency1 AMD hooks DopplerHookInitializer 0x4e34…a544; Lock beneficiaries 5% 0x21E2…7A66 and 95% 0x36eF…4556; Airlock Create asset MD numeraire AMD. Create-from 0xe5d5…b644 eth_getCode 0x. 95% beneficiary code starts 0xef0100. Airlock owner() 0x21e2ce70511e4fe542a97708e89520471daa7a66." }

claims:
  - { id: CLM-1, field: product.mechanism, value: "LongLauncher.create forwards an Airlock/Doppler launch: EIP-1167 DopplerERC20V1 clone, 1e9*1e18 supply, Uniswap v4 pool quoted against factory numeraire AMD, LP locked (isPoolLocked true; pool() 0xdead). Tx 0xbd6e…29e3 from 0xe5d5…b644 minted A Machine Duck / MD as normalizedTicker MD.", class: verified, observed_at: 2026-09-03T04:10:00Z, receipt_ids: [R-4, R-5, R-6, R-15], reproduction_ids: [REP-1, REP-2, REP-5], supersedes: null }
  - { id: CLM-2, field: identity.name, value: "A Machine Duck", class: verified, observed_at: 2026-09-03T04:06:00Z, receipt_ids: [R-1, R-4, R-5], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-3, field: identity.symbol, value: "MD", class: verified, observed_at: 2026-09-03T04:06:00Z, receipt_ids: [R-1, R-4, R-5], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-4, field: deployment.address, value: "0x3abb8d686dF6e538bb0887917d14f04f705f1e18", class: verified, observed_at: 2026-09-03T04:08:00Z, receipt_ids: [R-1, R-5, R-15], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-5, field: deployment.address, value: "0x22e99278308B393ea1260859B181AD7E78f5eeED", class: verified, observed_at: 2026-09-03T04:08:00Z, receipt_ids: [R-4, R-13], reproduction_ids: [REP-2], supersedes: null }
  - { id: CLM-6, field: lifecycle, value: mainnet, class: verified, observed_at: 2026-09-03T04:08:00Z, receipt_ids: [R-1, R-4, R-5, R-8], reproduction_ids: [REP-1, REP-2, REP-3], supersedes: null }
  - { id: CLM-7, field: taxonomy.primary-leaf, value: rwa-products/stock-paired-token, class: claim, observed_at: 2026-09-03T04:08:00Z, receipt_ids: [R-7, R-8, R-11], reproduction_ids: [], supersedes: null }
  - { id: CLM-8, field: identity.handle, value: "NULL — no bidirectional official handle; DexScreener info.socials x.com/AMachineDuck; bio pins CA 0x3abb…1e18; Gecko twitter_handle null; flag unconfirmed-official", class: claim, observed_at: 2026-09-03T04:12:00Z, receipt_ids: [R-7, R-10, R-19], reproduction_ids: [], supersedes: null }
  - { id: CLM-9, field: relationship, value: "Pair quote AMD 0x8692…3fdC is AMD • Robinhood Token in GET rhj/assets (194 assets). AMD is the quote rail, not the subject. Create path is LongLauncher, not Pons. Gecko dex id bankr-robinhood is the Doppler hook book; Bankr API latest 50 had no MD. Distinct from census Artificial Inu ($AI/NVDA) and from AMD-quoted CHIP 0xE38B…6E59, MEOW 0x7235…1e18, and GB 0xD786…517E.", class: verified, observed_at: 2026-09-03T04:10:00Z, receipt_ids: [R-4, R-11, R-12, R-22, R-23], reproduction_ids: [REP-2, REP-3, REP-4], supersedes: null }
  - { id: CLM-10, field: economics.metric, value: "MD/AMD Uniswap v4 24h volume 331097.89 USD and reserve_in_usd 139439.43 at 2026-09-03T04:05:00Z (Gecko pool slice, not Gecko token all-pools 331827.23)", class: verified, observed_at: 2026-09-03T04:05:00Z, receipt_ids: [R-8, R-9], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-11, field: economics.metric, value: "DexScreener same pair liquidity.usd 143796.32 volume.h24 342194.33 fdv/marketCap 317394 at 2026-09-03T04:05:00Z", class: verified, observed_at: 2026-09-03T04:05:00Z, receipt_ids: [R-7], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-12, field: economics.metric, value: 391, class: verified, observed_at: 2026-09-03T04:06:00Z, receipt_ids: [R-1], reproduction_ids: [REP-2], supersedes: null }
  - { id: CLM-13, field: control.owner, value: "token owner() Airlock 0xeb7C034704eF8Dcd2D32324c1545f62fB4aD0862; Airlock owner() 0x21E2ce70511e4FE542a97708e89520471DAa7A66. Create-from 0xe5d5…b644 has no code.", class: verified, observed_at: 2026-09-03T04:10:00Z, receipt_ids: [R-5, R-6, R-14], reproduction_ids: [REP-1, REP-5], supersedes: null }
  - { id: CLM-14, field: control.privileged-role, value: "LaunchCreated launcher 0xe5d54f55ea996d54df189a2fa6086857A5A9b644 equals the create() caller; Lock beneficiaries 5% 0x21E2…7A66 (Airlock owner) and 95% 0x36eF59a9482b3Ccdc3fEc1051bF2D9eeBA034556 (code prefix 0xef0100); hookAddress DopplerHookInitializer 0x4e34…a544", class: verified, observed_at: 2026-09-03T04:10:00Z, receipt_ids: [R-4, R-6, R-15], reproduction_ids: [REP-2, REP-5], supersedes: null }
  - { id: CLM-15, field: other, value: "Pair asset is AMD 0x86923f96303D656E4aa86D9d42D1e57ad2023fdC; venue is Uniswap v4 PoolManager 0x8366a39CC670B4001A1121B8F6A443A643e40951 pool 0x197d…9655", class: verified, observed_at: 2026-09-03T04:10:00Z, receipt_ids: [R-6, R-7, R-8, R-15], reproduction_ids: [REP-3, REP-5], supersedes: null }
  - { id: CLM-16, field: deployment.role, value: "Token creator_address_hash was empty on the token page; create() target is LongLauncher 0x22e9…eeED and tokenFactory DopplerERC20V1Factory 0x1B37…b69a, not Pons, PAIR, or hood.fun", class: verified, observed_at: 2026-09-03T04:08:00Z, receipt_ids: [R-1, R-3, R-4, R-13], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-17, field: taxonomy.chain-scope, value: robinhood-native, class: verified, observed_at: 2026-09-03T04:05:00Z, receipt_ids: [R-5, R-7], reproduction_ids: [REP-1, REP-3], supersedes: null }
  - { id: CLM-18, field: security.audit, value: "No audit report URL was located on Blockscout, DexScreener, Gecko, or X search this pass", class: unknown, observed_at: 2026-09-03T04:12:00Z, receipt_ids: [], reproduction_ids: [], supersedes: null }
  - { id: CLM-19, field: communications.status, value: "unconfirmed-official: DexScreener lists x.com/AMachineDuck; @AMachineDuck bio and posts embed CA 0x3abb…1e18; no site cross-link this pass", class: claim, observed_at: 2026-09-03T04:12:00Z, receipt_ids: [R-7, R-19], reproduction_ids: [], supersedes: null }
  - { id: CLM-20, field: economics.metric, value: "Gecko fdv_usd 308460.38; DexScreener fdv/marketCap 317394. Gecko market_cap_usd null.", class: verified, observed_at: 2026-09-03T04:05:00Z, receipt_ids: [R-7, R-8], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-21, field: deployment.address, value: "0x86923f96303D656E4aa86D9d42D1e57ad2023fdC", class: verified, observed_at: 2026-09-03T04:08:00Z, receipt_ids: [R-6, R-11, R-12], reproduction_ids: [REP-1, REP-2, REP-4], supersedes: null }
  - { id: CLM-22, field: deployment.address, value: "0x3Be8B97Fd0e713B5aBE0649Fa830223B6B4BC599", class: verified, observed_at: 2026-09-03T04:08:00Z, receipt_ids: [R-2, R-5, R-6], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-23, field: identity.domain, value: "NULL — DexScreener info.websites is app.long.xyz (LONG pad); Gecko token info websites []", class: claim, observed_at: 2026-09-03T04:05:00Z, receipt_ids: [R-7, R-10], reproduction_ids: [], supersedes: null }
  - { id: CLM-24, field: candidate, value: "md | MD | NULL | NULL — discovery token not in census 49", class: claim, observed_at: 2026-09-03T04:12:00Z, receipt_ids: [R-1, R-7], reproduction_ids: [], supersedes: null }
  - { id: CLM-25, field: other, value: "Blockscout search A Machine Duck also returns copycat MD tokens 0x9A97…3ba3 (holders 1), 0x5565…f0D3 (holders 1), 0xf388…869E (holders 1), 0x7f4E…1bA3 (holders 0). Canonical book is 0x3abb…1e18 / pool 0x197d…9655.", class: claim, observed_at: 2026-09-03T04:08:00Z, receipt_ids: [R-21], reproduction_ids: [], supersedes: null }

conflicts: []

events:
  - id: EVT-1
    type: onchain
    title: "Gecko MD/AMD 24h volume $331k, liquidity $139k"
    summary: "Gecko pool 0x197d…9655 volume_usd.h24 331098 reserve_in_usd 139439 fdv_usd 308460."
    occurred_at: 2026-09-03T04:05:00Z
    observed_at: 2026-09-03T04:05:00Z
    affected_fields: [economics.metric, activity.status]
    evidence_state: verified
    impact: material
    site_recommendation: both
    channel_recommendation: none
    receipt_ids: [R-8]
  - id: EVT-2
    type: ct
    title: "@nvtcho compared MD/AMD mcap to AI/NVDA"
    summary: "@nvtcho posted that $AI/NVDA is around $275m mcap and asked why $MD/AMD is only 288k."
    occurred_at: 2026-09-02T21:44:14Z
    observed_at: 2026-09-03T04:12:00Z
    affected_fields: [activity.status, relationship]
    evidence_state: claim
    impact: routine
    site_recommendation: feed
    channel_recommendation: none
    receipt_ids: [R-16]
  - id: EVT-3
    type: ct
    title: "@AMachineDuck posted the CA with $MD"
    summary: "@AMachineDuck bio and posts embed 0x3abb…1e18 and $MD. DexScreener lists the handle. No site bidirectional link this pass."
    occurred_at: 2026-09-02T20:13:56Z
    observed_at: 2026-09-03T04:12:00Z
    affected_fields: [identity.handle, communications.status]
    evidence_state: claim
    impact: routine
    site_recommendation: none
    channel_recommendation: none
    receipt_ids: [R-19]
  - id: EVT-4
    type: ct
    title: "@ChudCrentis listed MD/AMD among stock pairs"
    summary: "Post named VACCINU/MRNA with A/DELL, SPACEHOOD/SPCX, MD/AMD, HA/BB, APES/AMC."
    occurred_at: 2026-09-03T02:38:39Z
    observed_at: 2026-09-03T04:12:00Z
    affected_fields: [activity.status, relationship]
    evidence_state: claim
    impact: routine
    site_recommendation: feed
    channel_recommendation: none
    receipt_ids: [R-17]
  - id: EVT-5
    type: onchain
    title: "LongLauncher.create minted A Machine Duck / MD against AMD"
    summary: "Tx 0xbd6e…29e3 from 0xe5d5…b644 at 2026-08-28T18:37:52Z; LaunchCreated poolId 0x197d…9655 normalizedTicker MD."
    occurred_at: 2026-08-28T18:37:52Z
    observed_at: 2026-09-03T04:08:00Z
    affected_fields: [deployment.address, lifecycle, product.mechanism]
    evidence_state: verified
    impact: material
    site_recommendation: profile
    channel_recommendation: none
    receipt_ids: [R-4, R-15]
  - id: EVT-6
    type: ct
    title: "@ChrisL9696 called MD the AMD-pair runner still quiet"
    summary: "Post: specific stocks have a runner; @AMachineDuck $MD paired with AMD is not getting recognition. Quoted @AMachineDuck."
    occurred_at: 2026-09-02T13:24:52Z
    observed_at: 2026-09-03T04:12:00Z
    affected_fields: [activity.status]
    evidence_state: claim
    impact: routine
    site_recommendation: none
    channel_recommendation: none
    receipt_ids: [R-18]

receipts:
  - { id: R-1, publisher: Blockscout, title: "Token 0x3abb…1e18 A Machine Duck / MD", url: "https://robinhoodchain.blockscout.com/address/0x3abb8d686dF6e538bb0887917d14f04f705f1e18", published_at: null, accessed_at: 2026-09-03T04:06:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-2, CLM-3, CLM-4, CLM-6, CLM-12, CLM-16, CLM-24], excerpt: "hash 0x3abb8d686dF6e538bb0887917d14f04f705f1e18 name A Machine Duck is_contract true is_verified true proxy_type eip1167 implementations DopplerERC20V1 0x3Be8B97Fd0e713B5aBE0649Fa830223B6B4BC599. token symbol MD decimals 18 total_supply 1000000000000000000000000000 holders_count 391 type ERC-20. creator_address_hash null this pass." }
  - { id: R-2, publisher: Blockscout, title: "Address 0x3Be8…C599 DopplerERC20V1", url: "https://robinhoodchain.blockscout.com/address/0x3Be8B97Fd0e713B5aBE0649Fa830223B6B4BC599", published_at: null, accessed_at: 2026-09-03T04:08:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-22], excerpt: "hash 0x3Be8B97Fd0e713B5aBE0649Fa830223B6B4BC599 name DopplerERC20V1 is_contract true is_verified true. Smart-contract compiler v0.8.26+commit.8a97fa7a is_partially_verified true file_path src/tokens/DopplerERC20V1.sol verified_at 2026-07-01T19:42:07Z." }
  - { id: R-3, publisher: Blockscout, title: "Address 0x1B37…b69a DopplerERC20V1Factory", url: "https://robinhoodchain.blockscout.com/address/0x1B37D3a72082029c44B35B604Ea473617580b69a", published_at: null, accessed_at: 2026-09-03T04:08:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-16], excerpt: "hash 0x1B37D3a72082029c44B35B604Ea473617580b69a name DopplerERC20V1Factory is_contract true is_verified true creator_address_hash 0x4482f353A46a4d4088F9550EB2C9cc92D0d5F768. Compiler v0.8.26 file_path src/tokens/DopplerERC20V1Factory.sol is_partially_verified true verified_at 2026-07-01T19:42:15Z." }
  - { id: R-4, publisher: Blockscout, title: "LongLauncher create tx 0xbd6eb9f3…29e3", url: "https://robinhoodchain.blockscout.com/tx/0xbd6eb9f3faccf42953912fb064b7a40fa669e1025219ebca08be9f8bbcef29e3", published_at: 2026-08-28T18:37:52Z, accessed_at: 2026-09-03T04:08:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-2, CLM-3, CLM-4, CLM-5, CLM-6, CLM-14, CLM-16, EVT-5], excerpt: "timestamp 2026-08-28T18:37:52.000000Z status ok result success block_number 48518279 from 0xe5d54f55ea996d54df189a2fa6086857A5A9b644 (is_contract false) to LongLauncher 0x22e99278308B393ea1260859B181AD7E78f5eeED method create. decoded numeraire 0x8692…3fdC tokenFactory 0x1B37…b69a initial supply 1e27." }
  - { id: R-5, publisher: Robinhood Chain RPC, title: "eth_getCode, name, symbol, owner() on MD", url: "https://rpc.mainnet.chain.robinhood.com", published_at: null, accessed_at: 2026-09-03T04:06:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-2, CLM-3, CLM-4, CLM-6, CLM-13, CLM-16, CLM-17, CLM-22], excerpt: "eth_blockNumber 0x32a95bd (53123127). Token code 44 B EIP-1167 impl 0x3be8b97f…c599. name A Machine Duck symbol MD decimals 18 totalSupply 1e27. owner() 0xeb7C034704eF8Dcd2D32324c1545f62fB4aD0862. factory() reverts. Impl code 13927 B. Factory code 1912 B. LongLauncher code 5826 B. Airlock code 5695 B." }
  - { id: R-6, publisher: Robinhood Chain RPC, title: "isPoolLocked, pool(), tokenURI, Airlock owner(), AMD name", url: "https://rpc.mainnet.chain.robinhood.com", published_at: null, accessed_at: 2026-09-03T04:10:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-9, CLM-13, CLM-14, CLM-15, CLM-21], excerpt: "isPoolLocked true. pool() 0xdeaddeaddeaddeaddeaddeaddeaddeaddeaddead. controller() zero. tokenURI ipfs://bafkreihufuqw7dtrq6gufwpa2gl5vn23x7nwkv6yrilpscq66dy4mmihbu. vestingStart 1787942272. Airlock 0xeb7C…0862 owner() 0x21e2ce70511e4fe542a97708e89520471daa7a66. AMD name AMD • Robinhood Token symbol AMD code 283 B. Create-from 0xe5d5…b644 code 0x." }
  - { id: R-7, publisher: DexScreener, title: "latest/dex/tokens MD", url: "https://api.dexscreener.com/latest/dex/tokens/0x3abb8d686dF6e538bb0887917d14f04f705f1e18", published_at: null, accessed_at: 2026-09-03T04:05:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-7, CLM-8, CLM-11, CLM-15, CLM-17, CLM-20, CLM-23, CLM-24], excerpt: "6 robinhood uniswap pairs. Top pairAddress 0x197db3e35d66549592bdf1a77172eedbca36a864e185145796412ab8e3cb9655 labels v4 base A Machine Duck / MD quote AMD • Robinhood Token / AMD 0x86923f96303D656E4aa86D9d42D1e57ad2023fdC liquidity.usd 143796.32 volume.h24 342194.33 fdv 317394 marketCap 317394 pairCreatedAt 1787942272000. info.websites [{url https://app.long.xyz/tokens/0x3abb8d686dF6e538bb0887917d14f04f705f1e18}]. info.socials [{url https://x.com/AMachineDuck type twitter}]." }
  - { id: R-8, publisher: GeckoTerminal, title: "MD/AMD Uniswap v4 pool", url: "https://api.geckoterminal.com/api/v2/networks/robinhood/pools/0x197db3e35d66549592bdf1a77172eedbca36a864e185145796412ab8e3cb9655", published_at: null, accessed_at: 2026-09-03T04:05:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-6, CLM-7, CLM-10, CLM-15, CLM-20, EVT-1], excerpt: "name MD / AMD pool_created_at 2026-08-28T18:37:52Z fdv_usd 308460.3775 market_cap_usd null volume_usd.h24 331097.89366577 reserve_in_usd 139439.4251 transactions.h24 buys 1181 sells 1319. dex bankr-robinhood quote robinhood_0x86923f96303d656e4aa86d9d42d1e57ad2023fdc." }
  - { id: R-9, publisher: GeckoTerminal, title: "A Machine Duck token", url: "https://api.geckoterminal.com/api/v2/networks/robinhood/tokens/0x3abb8d686dF6e538bb0887917d14f04f705f1e18", published_at: null, accessed_at: 2026-09-03T04:05:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-10, CLM-23], excerpt: "name A Machine Duck symbol MD decimals 18 total_supply 1e27 price_usd 0.0003084680964 fdv_usd 308468.096384927 market_cap_usd null volume_usd.h24 331827.232775537 total_reserve_in_usd 79807.14. coingecko_coin_id null. Top pool 0x197d…9655." }
  - { id: R-10, publisher: GeckoTerminal, title: "A Machine Duck token info", url: "https://api.geckoterminal.com/api/v2/networks/robinhood/tokens/0x3abb8d686dF6e538bb0887917d14f04f705f1e18/info", published_at: null, accessed_at: 2026-09-03T04:06:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-8, CLM-23], excerpt: "websites [] twitter_handle null telegram_handle null discord_url null description null gt_verified false holders.count 333 last_updated 2026-09-03T03:27:11Z." }
  - { id: R-11, publisher: Robinhood, title: "GET /rhj/assets Stock Token registry", url: "https://api.robinhood.com/rhj/assets", published_at: null, accessed_at: 2026-09-03T04:07:00Z, kind: docs, authority: primary, authenticity: confirmed, supports: [CLM-9, CLM-21], excerpt: "HTTP 200. assets length 194. AMD hit tokenSymbol AMD tokenName AMD • Robinhood Token status ASSET_STATUS_ACTIVE deployments contractAddress 0x86923f96303D656E4aa86D9d42D1e57ad2023fdC chainId 4663 networkName Robinhood Chain." }
  - { id: R-12, publisher: Blockscout, title: "Token 0x8692…3fdC AMD • Robinhood Token", url: "https://robinhoodchain.blockscout.com/address/0x86923f96303D656E4aa86D9d42D1e57ad2023fdC", published_at: null, accessed_at: 2026-09-03T04:06:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-9, CLM-21], excerpt: "hash 0x86923f96303D656E4aa86D9d42D1e57ad2023fdC name BeaconProxy is_contract true is_verified true proxy_type eip1967_beacon implementations Stock 0xb35490d6f9163DE4F80d88dc75c3516eb64C5aE2. token name AMD • Robinhood Token symbol AMD decimals 18 holders_count 36215." }
  - { id: R-13, publisher: Blockscout, title: "LongLauncher 0x22e9…eeED", url: "https://robinhoodchain.blockscout.com/address/0x22e99278308B393ea1260859B181AD7E78f5eeED", published_at: null, accessed_at: 2026-09-03T04:08:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-5, CLM-16], excerpt: "hash 0x22e99278308B393ea1260859B181AD7E78f5eeED name LongLauncher is_contract true is_verified true file_path src/LongLauncher.sol compiler v0.8.26 is_partially_verified false verified_at 2026-07-14T11:23:57Z. RPC eth_getCode 5826 B." }
  - { id: R-14, publisher: Blockscout, title: "Airlock 0xeb7C…0862", url: "https://robinhoodchain.blockscout.com/address/0xeb7C034704eF8Dcd2D32324c1545f62fB4aD0862", published_at: null, accessed_at: 2026-09-03T04:08:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-13], excerpt: "hash 0xeb7C034704eF8Dcd2D32324c1545f62fB4aD0862 name Airlock is_contract true is_verified true file_path src/Airlock.sol compiler v0.8.26 is_partially_verified true verified_at 2026-07-01T19:41:17Z." }
  - { id: R-15, publisher: Blockscout, title: "LaunchCreated log for MD", url: "https://robinhoodchain.blockscout.com/tx/0xbd6eb9f3faccf42953912fb064b7a40fa669e1025219ebca08be9f8bbcef29e3", published_at: 2026-08-28T18:37:52Z, accessed_at: 2026-09-03T04:08:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-4, CLM-14, CLM-15, EVT-5], excerpt: "LaunchCreated poolOrHook 0x3abb…1e18 asset 0x3abb…1e18 numeraire 0x8692…3fdC poolInitializer 0x4e34…a544 launcher 0xe5d5…b644 deployedAt 1787942272 normalizedTicker MD. PoolManager Initialize id 0x197db3e35d66549592bdf1a77172eedbca36a864e185145796412ab8e3cb9655 currency0 MD currency1 AMD. Lock beneficiaries 0x21E2…7A66 5e16 and 0x36eF…4556 95e16." }
  - { id: R-16, publisher: "@nvtcho", title: "why is $md paired with amd at only 288k", url: "https://x.com/nvtcho/status/2095266575700074709", published_at: 2026-09-02T21:44:14Z, accessed_at: 2026-09-03T04:12:00Z, kind: social, authority: social, authenticity: confirmed, supports: [EVT-2], excerpt: "if $ai is paired with nvda and current marketcap is around $275m why is $md paired with amd at only 288k marketcap? it should be at least 14% of ai IMO fair repricing soon LONG" }
  - { id: R-17, publisher: "@ChudCrentis", title: "VACCINU/MRNA among stock pairs including MD/AMD", url: "https://x.com/ChudCrentis/status/2095341442239488455", published_at: 2026-09-03T02:38:39Z, accessed_at: 2026-09-03T04:12:00Z, kind: social, authority: social, authenticity: confirmed, supports: [EVT-4], excerpt: "Higher for everything VACCINU/MRNA A/DELL SPACEHOOD/SPCX MD/AMD HA/BB APES/AMC" }
  - { id: R-18, publisher: "@ChrisL9696", title: "MD paired with AMD is not getting recognition", url: "https://x.com/ChrisL9696/status/2095140906458558857", published_at: 2026-09-02T13:24:52Z, accessed_at: 2026-09-03T04:12:00Z, kind: social, authority: social, authenticity: confirmed, supports: [EVT-6], excerpt: "Everything under @longdotxyz pump. Every specific stocks have a runner. Right now @AMachineDuck $MD paired with @AMD is not getting attention/recognition. As of now there is no runner under $AMD" }
  - { id: R-19, publisher: "@AMachineDuck", title: "do a barrel roll $MD CA", url: "https://x.com/AMachineDuck/status/2095243850717728960", published_at: 2026-09-02T20:13:56Z, accessed_at: 2026-09-03T04:12:00Z, kind: social, authority: social, authenticity: unconfirmed, supports: [CLM-8, CLM-19, EVT-3], excerpt: "do a barrel roll targets, higher. $MD 0x3abb8d686df6e538bb0887917d14f04f705f1e18. Profile: A Machine Duck @AMachineDuck bio The duck is the machine. $MD 0x3abb8d686df6e538bb0887917d14f04f705f1e18 followers 174." }
  - { id: R-20, publisher: GeckoTerminal, title: "MD/AMD pool page", url: "https://www.geckoterminal.com/robinhood/pools/0x197db3e35d66549592bdf1a77172eedbca36a864e185145796412ab8e3cb9655", published_at: null, accessed_at: 2026-09-03T04:05:00Z, kind: third-party-data, authority: aggregator, authenticity: unconfirmed, supports: [], excerpt: "MD/AMD A Machine Duck Price on Uniswap V4 (Robinhood). Pool 0x197d…9655 MD 0x3abb…1e18 AMD 0x8692…3fdC." }
  - { id: R-21, publisher: Blockscout, title: "Search A Machine Duck copycat tokens", url: "https://robinhoodchain.blockscout.com/api/v2/search?q=A%20Machine%20Duck", published_at: null, accessed_at: 2026-09-03T04:08:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-25], excerpt: "5 token hits named A Machine Duck / MD: 0x3abb8d686dF6e538bb0887917d14f04f705f1e18 holders 391; 0x9A972A715b6Fa9D16c8165d48bA2D6Dc974a3ba3 holders 1; 0x55651A1E9CeA3060e2dC27F5415De45E3dB3f0D3 holders 1; 0xf3882C59F0293e5dF092Fd280fb2991f23E5869E holders 1; 0x7f4E5B21d46e9bdb4700fDD872Ab450b2FcC1bA3 holders 0." }
  - { id: R-22, publisher: DexScreener, title: "CHIP / MEOW / GB AMD books", url: "https://api.dexscreener.com/latest/dex/search?q=CHIP%20AMD%20robinhood", published_at: null, accessed_at: 2026-09-03T04:05:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-9], excerpt: "CHIP Cyber Hardware-Integrated Pup 0xE38B1C963Afc21f06b9E82A2de36A84FbB9C6E59 / AMD 0x8692…3fdC. MEOW 0x7235Cf5eA4674FE09531706954B5f1aD6E0A1e18 / AMD. GB Gigabyte 0xD78650f3A96e55e0710282c4f459AC556ef3517E / AMD. Distinct addresses from MD 0x3abb…1e18 / pool 0x197d…9655." }
  - { id: R-23, publisher: Bankr, title: "GET /token-launches latest 50", url: "https://api.bankr.bot/token-launches?limit=50", published_at: null, accessed_at: 2026-09-03T04:11:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-9], excerpt: "launches length 50. Scan for tokenSymbol MD, tokenName A Machine Duck, and address 0x3abb8d68 returned 0 hits. MD-substring hits were RM / PHYSICA / COS addresses ending …ba3, not this token." }

gaps:
  - { priority: P0, question: "Is there an official X handle or site that bidirectionally links to token 0x3abb…1e18?", checked: "DexScreener info.websites is app.long.xyz (LONG pad, Cloudflare 403); info.socials x.com/AMachineDuck; Gecko twitter_handle null websites []; @AMachineDuck bio pins the CA; no project domain this pass, 2026-09-03", next: "re-read DexScreener token profile after a Claim Profile; ask whether @AMachineDuck pins the LongLauncher create tx from a site" }
  - { priority: P1, question: "Should Gecko dex bankr-robinhood be treated as Bankr-minted or as Doppler-hook taxonomy?", checked: "create tx is LongLauncher; Bankr token-launches latest 50 had 0 MD; pool relationship.dex bankr-robinhood; hooks DopplerHookInitializer, 2026-09-03", next: "compare hook 0x4e34…a544 against a known Bankr launch and a known LONG launch" }
  - { priority: P1, question: "Who is Lock beneficiary 0x36eF…4556 relative to create-from 0xe5d5…b644?", checked: "create-from eth_getCode 0x; 95% beneficiary code prefix 0xef0100; LaunchCreated launcher equals create-from, 2026-09-03", next: "decode the EIP-7702 delegation target and check whether it is a LONG/Airlock fee splitter" }
  - { priority: P2, question: "What does tokenURI ipfs://bafkreihufuqw7dtrq6gufwpa2gl5vn23x7nwkv6yrilpscq66dy4mmihbu contain?", checked: "RPC tokenURI returned that CID; IPFS not fetched this pass, 2026-09-03", next: "fetch the CID once for social_links / image without treating it as official" }
---

# MD — research packet

## What it is

A one-billion-supply ERC-20 cloned into a Uniswap v4 pool quoted against AMD. LongLauncher.create from 0xe5d5…b644 minted A Machine Duck (MD) on 2026-08-28T18:37:52Z into pool 0x197d…9655 via DopplerERC20V1Factory and Airlock. Traders buy and sell MD against the AMD Robinhood Token. AMD is the quote rail, not the subject. No official site was located this pass. DexScreener lists @AMachineDuck without a bidirectional official-crosslink.

Themes: memecoin, stock-paired:AMD, rwa

## Why it matters

The MD/AMD Uniswap v4 book printed about $331k of 24h volume on Gecko at collection, with the quote token the AMD Robinhood Token in GET /rhj/assets. Gecko labels the pool Bankr (Robinhood) because the hook is DopplerHookInitializer; the create transaction is LongLauncher, not a Bankr API row. Distinct from other AMD-quoted books CHIP, MEOW, and GB.

## What could go wrong

USD liquidity figures on the MD/AMD book count both sides, and the quote side is AMD, not USDG. DexScreener and Gecko disagree on the same pool's USD reserve. Four same-name MD copycat tokens exist on Blockscout with 0–1 holders. No official handle was located, so comms surfaces stay unconfirmed-official.

## Product and mechanics

LongLauncher 0x22e9…eeED create() from 0xe5d5…b644 at 2026-08-28T18:37:52Z minted A Machine Duck / MD supply 1e9*1e18 into Uniswap v4 poolId 0x197d…9655 quoted against AMD. Token is an EIP-1167 clone of DopplerERC20V1 0x3Be8…C599. owner() is Airlock. isPoolLocked true and pool() is 0xdead. [verified R-4 R-5 R-6 R-15]

Verified create path pairs against factory numeraire AMD 0x8692…3fdC. PoolManager is 0x8366…0951. Hook is DopplerHookInitializer 0x4e34…a544. Secondary MD/USDG and MD/ETH books exist on DexScreener with far less liquidity than the AMD book. [verified R-6 R-7 R-8]

## Control and security

token owner() is Airlock 0xeb7C…0862. Airlock owner() is 0x21E2…7A66. Create-from 0xe5d5…b644 has no code. Lock splits 5% to that Airlock owner and 95% to 0x36eF…4556 (code prefix 0xef0100). [verified R-6 R-15]

DopplerERC20V1 and DopplerERC20V1Factory are partially verified on Blockscout (src/tokens/DopplerERC20V1.sol, src/tokens/DopplerERC20V1Factory.sol, compiler v0.8.26). LongLauncher is verified (src/LongLauncher.sol). The token page is a verified EIP-1167 shell only. No audit report URL was located this pass. [verified R-2 R-3 R-13] [unknown]

## Team and provenance

No official domain was located. DexScreener info.websites is the LONG pad URL. Gecko websites and twitter_handle are empty. @AMachineDuck bio and posts embed CA 0x3abb…1e18; flag unconfirmed-official. [claim R-7 R-10 R-19]

AMD Inc. is the listed issuer of the quote rail. GET /rhj/assets names that rail AMD • Robinhood Token at 0x8692…3fdC. That is a dependency, not this token. [verified R-11 R-12]

## Economics and activity

MD/AMD Uniswap v4 24h volume is 331097.89 USD and reserve_in_usd is 139439.43 at 2026-09-03T04:05:00Z from the Gecko pool endpoint. fdv_usd is 308460.38. Gecko token volume_usd.h24 is 331827.23 across all pools, not the AMD book. [claim R-8 R-9]

DexScreener same pair: liquidity.usd 143796.32, volume.h24 342194.33, fdv/marketCap 317394. Blockscout holders_count 391. Pair created 2026-08-28T18:37:52Z. [claim R-1 R-7]

Assignment lead of DexScreener liq ~$138,083 / vol ~$340,881 is the same MD/AMD book; live DexScreener this pass is 143796.32 / 342194.33. [claim R-7]

## Material risks

- Quote token AMD 0x8692…3fdC is a Robinhood Stock Token rail; MD is not AMD. [verified R-11 R-12]
- Pool USD reserve is MD plus AMD, not a USDG or WETH backstop. [claim R-7 R-8]
- No official handle or domain this pass; @AMachineDuck is unconfirmed-official. [claim R-7 R-19]
- Same-name MD copycats exist with 0–1 holders. [verified R-21]
- No audit report URL this pass. [unknown]

## Verification passes

- Receipts: Blockscout token/impl/factory/AMD and the create tx, RPC name/symbol/owner/isPoolLocked/pool/tokenURI, DexScreener, Gecko pool/token/info, /rhj/assets, Bankr launches, CHIP/MEOW/GB DexScreener rows, and the @AMachineDuck / @nvtcho / @ChrisL9696 / @ChudCrentis posts were opened on 2026-09-03 and excerpts copied from the responses. [verified R-1 R-5 R-8 R-11]
- Numbers: 331097.89 is the Gecko MD/AMD pool 24h volume, not the 331827.23 token all-pools figure. Reserve 139439.43 is that pool. DexScreener 342194.33 / 143796.32 is the same pair, different aggregator. [claim R-7 R-8 R-9]
- Adversarial: the strongest contrary reading is that MD is CHIP, MEOW, or GB, or that Gecko's bankr-robinhood dex id means Bankr minted it. CHIP/MEOW/GB are different token addresses on AMD books. Create tx is LongLauncher; Bankr latest 50 has no MD. [inference R-4 R-22 R-23]

## Operations log

- Base: `git -C /Users/harsharnsingh/proofline-pr59 rev-parse origin/main` → 334ca0619aa62e922da83f46de021f06d12348cf. Census 49 slugs have no md / MD / A Machine Duck / 0x3abb…1e18. content/dependencies/stock-tokens.yaml lists AMD at 0x8692…3fdC as a rail.
- Explorer: Blockscout api/v2 token, impl, factory, AMD, createToken 0xbd6e…29e3, LaunchCreated log, holders, search A Machine Duck. RPC eth_getCode/eth_call with Chrome UA at blocks 53123127–53124940.
- Aggregators: DexScreener latest/dex/tokens and search CHIP/MEOW/GB; Gecko token, pool, token/info.
- Registry: GET api.robinhood.com/rhj/assets 194 assets, AMD hit at 0x8692…3fdC.
- Social: X keyword MD AMD / A Machine Duck; from:AMachineDuck Latest; user search AMachineDuck.
- Failed: app.long.xyz/tokens/0x3abb…1e18 Cloudflare 403; Blockscout token creator_address_hash null (LongLauncher create used instead); Gecko tokenURI IPFS CID not fetched; Bankr latest 50 had 0 MD.
- Time: collection 2026-09-03T04:00Z–2026-09-03T04:12Z.
