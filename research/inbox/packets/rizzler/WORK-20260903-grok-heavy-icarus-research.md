---
# Packet v2 (docs/research-system.md §5). Seed with Icarus What-it-is + events.
contract_version: proofline-research-v2
work_id: WORK-20260903-grok-heavy-icarus-research
producer: grok-heavy
role: collector
base_sha: 334ca0619aa62e922da83f46de021f06d12348cf
slug: rizzler
name: RIZZLER
packet_tier: seed
as_of: 2026-09-03T04:20:00Z
prior_packet: null
supersedes: null
owned_slugs: [rizzler]
allowed_paths:
  - research/inbox/packets/rizzler/WORK-20260903-grok-heavy-icarus-research.md

identity:
  canonical_name: RIZZLER
  aliases: []
  symbols: [RIZZLER]
  entity_kind: token
  chain_scope: robinhood-native
  official_domain: "NULL — DexScreener info.websites lists https://link.me/itztherealrizzler (celebrity merch Linkme, no CA 0x59ccd251 in the preview); Gecko token attributes have no website; createLaunchAndBuy websites array empty; Blockscout token page lists no homepage this pass"
  official_handle: "NULL — DexScreener info.socials empty; createLaunchAndBuy socials array empty; X user search for RIZZLER returned unrelated handles including celebrity @Da_Rizzler419 whose bio and posts this pass do not embed CA 0x59ccd251; flag unconfirmed-official"
  repository: "NULL — no GitHub org or repository URL on DexScreener, Gecko, Blockscout, o1 docs, link.me, or X search this pass"
  possible_matches:
    - slug: kirkland
      signals: [other]
      contrary_signals:
        - "Pending KIRKLAND is Kirkland at 0xaAc0Eaf0B8a17FB428903D274413a1Fca36AEB03 paired to COST via PonsV2LaunchFactory 0x7eD5…EC7e / Uniswap v4 pool 0x135f…8d5d"
        - "RIZZLER is 0x59ccd2519c57c7d06331Caa984326BD33E36Db01 paired to the same COST rail via current o1 RWAERC20LaunchpadFactory 0xcE9C…5B0d / pool 0xc542…3dbd"
        - "No shared domain, handle, or reproduced address"
    - slug: hotdog
      signals: [other]
      contrary_signals:
        - "Pending lunch.fun HOTDOG is 0x45443A4a7b58ab26A4B4D72616cf36D5aAE7188C / @HOTDOGonRH / hotdogonrh.com, LunchV3PairLauncherFrozen creator"
        - "Packed Pons HOTDOG is 0x1C1DAEF0300551aDBfbE403e7d567b6c5aFF566f on a Pons V2 Dex HOTDOG/COST book with DexScreener socials x.com/hotdogonpons"
        - "RIZZLER is an o1 createLaunchAndBuy ERC-20 at 0x59ccd251…Db01, not either HOTDOG contract"
        - "No shared domain, handle, or reproduced address"
    - slug: pons
      signals: [other]
      contrary_signals:
        - "Census Pons is the launchpad at ponsfamily.com / @ponsdotfamily with PONS 0x39dB…4571 and PonsV2LaunchFactory 0x7eD5…EC7e"
        - "RIZZLER factory() is RWAERC20LaunchpadFactory 0xcE9C…5B0d, not PonsV2LaunchFactory"
        - "No shared domain, handle, or reproduced address with the PONS token"
    - slug: long
      signals: [other]
      contrary_signals:
        - "Census LONG is a stock-paired factory at app.long.xyz / @longdotxyz with LongLauncher 0x22e9…eeED"
        - "RIZZLER is a token from RWAERC20LaunchpadFactory 0xcE9C…5B0d, not LongLauncher"
        - "No shared domain, handle, or reproduced address"
    - slug: bankr
      signals: [ticker-only]
      contrary_signals:
        - "Census Bankr is @bankrbot / bankr.bot with DopplerERC20V1Factory / Airlock 0xeb7C…0862"
        - "This packet's token is o1 RIZZLER 0x59ccd251…Db01; a separate same-ticker RIZZLER 0x28eC5A2a1F94c63CD6A65591Cd7d5201E44B1e18 is a DopplerERC20V1 EIP-1167 clone whose owner() is that Airlock"
        - "No shared domain, handle, or reproduced address with 0x59ccd251…Db01"
    - slug: artificial-inu
      signals: [other]
      contrary_signals:
        - "Census Artificial Inu is $AI at 0x2E8c…1e18 paired to NVDA via LongLauncher, site artificialinu.com / @ArtificiallyInu"
        - "RIZZLER is $RIZZLER at 0x59ccd251…Db01 paired to COST 0x4EA0…44C2 via RWAERC20LaunchpadFactory 0xcE9C…5B0d"
        - "No shared domain, handle, or reproduced address"
    - slug: l4va
      signals: [other]
      contrary_signals:
        - "Census L4VA is a vault factory issuing tokens backed by locked RWAs"
        - "RIZZLER is a 1e9-supply ERC-20 in a Uniswap v4 RIZZLER/COST pool with no vault of its own; pair asset is COST"
        - "No shared domain, handle, or reproduced address"

classification:
  primary_leaf: rwa-products/stock-paired-token
  secondary_leaves: [launch/graduation-token]
  mechanism_tags: [stock-paired, rwa, amm, launchpad]
  ecosystem_role: graduation
  lifecycle: mainnet
  coverage_recommendation: seed
  evidence_state: partly-verified
  rationale: "Not in the 49-row census. Token 0x59ccd251…Db01 has 4724 bytes of code on 4663; name RIZZLER, symbol RIZZLER, factory() returns current RWAERC20LaunchpadFactory 0xcE9C…5B0d. createLaunchAndBuy minted into Uniswap v4 pool 0xc542…3dbd quoted against COST 0x4EA0…44C2 (Costco • Robinhood Token, GET /rhj/assets hit). COST is the pair rail, not the subject. Distinct from KIRKLAND 0xaAc0…EB03 and from lunch/Pons HOTDOG COST books. No official site or handle this pass. [R-1] [R-3] [R-4] [R-5] [R-7] [R-8] [R-11]"

qualifying:
  deployed_on_chain: { status: pass, claim_ids: [CLM-4, CLM-5, CLM-6], note: "" }
  native_play:       { status: pass, claim_ids: [CLM-1, CLM-9, CLM-15], note: "" }
  citable:           { status: pass, claim_ids: [CLM-2, CLM-3, CLM-4], note: "" }
  research_story:    { status: pass, claim_ids: [CLM-1, CLM-9, CLM-10], note: "" }

links:
  - { kind: other, url: "https://link.me/itztherealrizzler", authenticity: unconfirmed }

deployments:
  - label: RIZZLER token
    role: token
    address:
      value: "0x59ccd2519c57c7d06331Caa984326BD33E36Db01"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T04:08:00Z
      exists_on_4663: true
      explorer_source_verified: false
    receipt_ids: [R-1, R-4, R-18]
  - label: RWAERC20LaunchpadFactory (token factory(); o1 current)
    role: factory
    address:
      value: "0xcE9C48cFa068947f77738c81Be406B53338E5B0d"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T04:10:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-2, R-3, R-5, R-21]
  - label: LaunchTokenDeployer (factory.tokenDeployer)
    role: factory
    address:
      value: "0xf86dfDb678D8E5d932100Ef479A59fa65a82a5Eb"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T04:10:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-5, R-14]
  - label: LaunchHook (Uniswap v4 hook on RIZZLER/COST)
    role: other
    address:
      value: "0x0310cFEbE1D7A69f2414f6595bBe9d17c5342aCc"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T04:10:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-5, R-13, R-18]
  - label: COST Costco • Robinhood Token (pair rail)
    role: token
    address:
      value: "0x4EA005168D7F09a7A0Ba9D1DEf21a479950E44C2"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T04:08:00Z
      exists_on_4663: true
      explorer_source_verified: true
      explorer_source_verification_scope: proxy-shell-only
      implementation_source_verified: true
    receipt_ids: [R-5, R-10, R-11, R-18]

metrics:
  - { kind: volume_24h, value: 1216052.39, currency: USD, as_of: 2026-09-03T04:12:00Z, window: 24h, method: "api.geckoterminal.com/api/v2/networks/robinhood/pools/0xc5427117c9e24248907ce1dfe180d0ecded142b7c358d05f22a094b4add13dbd volume_usd.h24", class: claim, receipt_ids: [R-8] }
  - { kind: tvl, value: 27310.31, currency: USD, as_of: 2026-09-03T04:12:00Z, window: point, method: "api.geckoterminal.com/api/v2/networks/robinhood/pools/0xc5427117c9e24248907ce1dfe180d0ecded142b7c358d05f22a094b4add13dbd reserve_in_usd (RIZZLER/COST pool, not an all-pools figure)", class: claim, receipt_ids: [R-8] }
  - { kind: market_cap, value: 68049.79, currency: USD, as_of: 2026-09-03T04:12:00Z, window: point, method: "api.geckoterminal.com/api/v2/networks/robinhood/tokens/0x59ccd2519c57c7d06331Caa984326BD33E36Db01 fdv_usd (market_cap_usd null)", class: claim, receipt_ids: [R-9] }
  - { kind: holders, value: 554, currency: null, as_of: 2026-09-03T04:08:00Z, window: point, method: "robinhoodchain.blockscout.com/api/v2/tokens/0x59ccd2519c57c7d06331Caa984326BD33E36Db01 holders_count", class: claim, receipt_ids: [R-1] }

reproductions:
  - { id: REP-1, method: explorer-rpc, chain_id: 4663, checked_at: 2026-09-03T04:08:00Z, receipt_ids: [R-4], result: "eth_blockNumber 0x32a9833 (53123123) then 0x32a9db0 (53124528). Token 0x59ccd251…Db01 eth_getCode 4724 bytes prefix 6080604052, not EIP-1167; CBOR solc 0.8.26. EIP-1967 implementation/admin slots zero. name RIZZLER, symbol RIZZLER, decimals 18, totalSupply 1e27. factory() 0xcE9C48cFa068947f77738c81Be406B53338E5B0d. owner() reverts. launchFactory(), socials(), description(), curve(), pairToken(), launcher(), creator() revert." }
  - { id: REP-2, method: explorer-ui, chain_id: 4663, checked_at: 2026-09-03T04:12:00Z, receipt_ids: [R-1, R-2, R-3, R-10, R-13, R-14, R-18], result: "Blockscout api/v2 token 0x59ccd251…Db01 name RIZZLER symbol RIZZLER holders_count 554 total_supply 1e27 is_verified false proxy_type null creator_address_hash null creation_transaction_hash null this pass. Factory 0xcE9C…5B0d name RWAERC20LaunchpadFactory is_verified true is_fully_verified true file_path src/RWAERC20LaunchpadFactory.sol compiler v0.8.26. createLaunchAndBuy tx 0x62c5a2c7…2393 2026-09-02T18:21:12Z block 52782263 from EOA 0xd892…f939 to factory value 51000000000000000. decoded name/symbol RIZZLER/RIZZLER quote COST 0x4EA0…44C2 configVersion 14 websites [] socials []. Launched poolId 0xc542…3dbd supply 1e27. COST BeaconProxy / Stock 0xb354…5aE2, name Costco • Robinhood Token holders_count 13705." }
  - { id: REP-3, method: api, checked_at: 2026-09-03T04:12:00Z, receipt_ids: [R-6, R-7, R-8, R-9], result: "DexScreener latest/dex/tokens/0x59ccd251…Db01: 12 robinhood uniswap pairs; top RIZZLER/COST v4 0xc542…3dbd quote COST 0x4EA0…44C2 Costco • Robinhood Token liquidity.usd 29180.52 volume.h24 1223200.25 fdv/marketCap 68252 pairCreatedAt 1788373272000 (2026-09-02T18:21:12Z) info.websites [{url https://link.me/itztherealrizzler}] info.socials []. DexScreener search also lists a second robinhood RIZZLER/COST at 0x28eC…1e18 pair 0x8116…edfe liquidity.usd 9965.8 volume.h24 2780.54. Gecko pool dex uniswap-v4-robinhood name RIZZLER / COST volume_usd.h24 1216052.39 reserve_in_usd 27310.31 fdv_usd 68049.79 pool_created_at 2026-09-02T18:21:12Z. Gecko token fdv_usd 68049.79 volume_usd.h24 1258104.54 (all pools, not the COST book); no website field. Gecko token/pools HTTP 429; not retried." }
  - { id: REP-4, method: api, checked_at: 2026-09-03T04:10:00Z, receipt_ids: [R-11], result: "GET api.robinhood.com/rhj/assets HTTP 200; assets length 194; one COST hit tokenSymbol COST tokenName Costco • Robinhood Token contractAddress 0x4EA005168D7F09a7A0Ba9D1DEf21a479950E44C2 chainId 4663 status ASSET_STATUS_ACTIVE isin US22160K1051." }
  - { id: REP-5, method: explorer-rpc, chain_id: 4663, checked_at: 2026-09-03T04:12:00Z, receipt_ids: [R-5, R-16], result: "Factory 0xcE9C…5B0d code 24466 B. owner() 0x5519a8Cc7211F483e19ff8d50A3B0c892701044D (eth_getCode 0x). launchCreationEnabled() true. nativeLaunchFee 1e15 wei. tokenDeployer() 0xf86d…a5Eb. hook() 0x0310…2aCc. poolManager() 0x8366…0951. priceUpdater() 0x8BF6…5F29. configVersion 14. baseFeeBps 100. quoteConfig(COST) registered=1 decimals=18. LaunchHook factory() returns 0xcE9C…5B0d. KIRKLAND 0xaAc0…EB03 launchFactory() 0x7eD5…EC7e. Other RIZZLER 0x28eC…1e18 code 44 B EIP-1167 impl DopplerERC20V1 0x3Be8…C599; owner() 0xeb7C034704ef8dcd2d32324c1545f62fb4ad0862; factory() reverts. Pons HOTDOG 0x1C1D…566f name hotdog symbol HOTDOG." }

claims:
  - { id: CLM-1, field: product.mechanism, value: "Current RWAERC20LaunchpadFactory createLaunchAndBuy deploys a 1e9-supply ERC-20 into a Uniswap v4 pool quoted against COST, then buys with 0.05 ETH. Tx 0x62c5…2393 from 0xd892…f939 at 2026-09-02T18:21:12Z minted RIZZLER / RIZZLER; Launched poolId 0xc542…3dbd quote 0x4EA0…44C2. Native fee paid 1e15 wei. LaunchBuyExecuted amountIn 5e16 wei amountOut 28985043296139654791023477. factory() on the token returns 0xcE9C…5B0d.", class: verified, observed_at: 2026-09-03T04:12:00Z, receipt_ids: [R-2, R-3, R-4, R-5, R-18, R-21], reproduction_ids: [REP-1, REP-2, REP-5], supersedes: null }
  - { id: CLM-2, field: identity.name, value: "RIZZLER", class: verified, observed_at: 2026-09-03T04:08:00Z, receipt_ids: [R-1, R-3, R-4], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-3, field: identity.symbol, value: "RIZZLER", class: verified, observed_at: 2026-09-03T04:08:00Z, receipt_ids: [R-1, R-3, R-4], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-4, field: deployment.address, value: "0x59ccd2519c57c7d06331Caa984326BD33E36Db01", class: verified, observed_at: 2026-09-03T04:12:00Z, receipt_ids: [R-1, R-4, R-18], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-5, field: deployment.address, value: "0xcE9C48cFa068947f77738c81Be406B53338E5B0d", class: verified, observed_at: 2026-09-03T04:12:00Z, receipt_ids: [R-2, R-3, R-4, R-5], reproduction_ids: [REP-1, REP-2, REP-5], supersedes: null }
  - { id: CLM-6, field: lifecycle, value: mainnet, class: verified, observed_at: 2026-09-03T04:12:00Z, receipt_ids: [R-1, R-3, R-4, R-8], reproduction_ids: [REP-1, REP-2, REP-3], supersedes: null }
  - { id: CLM-7, field: taxonomy.primary-leaf, value: rwa-products/stock-paired-token, class: claim, observed_at: 2026-09-03T04:12:00Z, receipt_ids: [R-7, R-8, R-11], reproduction_ids: [], supersedes: null }
  - { id: CLM-8, field: identity.handle, value: "NULL — no bidirectional official handle; DexScreener info.socials empty; createLaunchAndBuy socials []; X user search returned unrelated handles; celebrity @Da_Rizzler419 bio has no CA; flag unconfirmed-official", class: claim, observed_at: 2026-09-03T04:16:00Z, receipt_ids: [R-3, R-7, R-15, R-19], reproduction_ids: [], supersedes: null }
  - { id: CLM-9, field: relationship, value: "Pair quote COST 0x4EA0…44C2 is Costco • Robinhood Token, GET rhj/assets (194 assets) has one COST row at that address. COST is the rail, not the subject. Distinct from KIRKLAND 0xaAc0…EB03 (Pons v2 COST pair) and from lunch.fun HOTDOG 0x4544…188C plus packed Pons HOTDOG 0x1C1D…566f.", class: verified, observed_at: 2026-09-03T04:12:00Z, receipt_ids: [R-7, R-10, R-11, R-16, R-17], reproduction_ids: [REP-3, REP-4, REP-5], supersedes: null }
  - { id: CLM-10, field: economics.metric, value: "RIZZLER/COST Uniswap v4 24h volume 1216052.39 USD and reserve_in_usd 27310.31 at 2026-09-03T04:12:00Z (Gecko pool slice, not Gecko token all-pools 1258104.54)", class: verified, observed_at: 2026-09-03T04:12:00Z, receipt_ids: [R-8, R-9], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-11, field: economics.metric, value: "DexScreener same pair liquidity.usd 29180.52 volume.h24 1223200.25 fdv/marketCap 68252 at 2026-09-03T04:08:00Z", class: verified, observed_at: 2026-09-03T04:08:00Z, receipt_ids: [R-7], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-12, field: economics.metric, value: 554, class: verified, observed_at: 2026-09-03T04:08:00Z, receipt_ids: [R-1], reproduction_ids: [REP-2], supersedes: null }
  - { id: CLM-13, field: control.owner, value: "token owner() reverts; factory owner() 0x5519a8Cc7211F483e19ff8d50A3B0c892701044D has no code; launchCreationEnabled() true this pass", class: verified, observed_at: 2026-09-03T04:12:00Z, receipt_ids: [R-4, R-5], reproduction_ids: [REP-1, REP-5], supersedes: null }
  - { id: CLM-14, field: control.privileged-role, value: "createLaunchAndBuy caller / Launched originalCreator 0xd892E11287aE78D2D124677CD8e364162EAbf939; factory priceUpdater 0x8BF6…5F29; NativeLaunchFeePaid recipient / LaunchHook PLATFORM fee 0x1cAa…1C90; baseFeeBps 100", class: verified, observed_at: 2026-09-03T04:12:00Z, receipt_ids: [R-3, R-5, R-18], reproduction_ids: [REP-2, REP-5], supersedes: null }
  - { id: CLM-15, field: other, value: "Pair asset is COST 0x4EA005168D7F09a7A0Ba9D1DEf21a479950E44C2; venue is Uniswap v4 PoolManager 0x8366a39CC670B4001A1121B8F6A443A643e40951 poolId 0xc5427117c9e24248907ce1dfe180d0ecded142b7c358d05f22a094b4add13dbd with LaunchHook 0x0310…2aCc fee 0 tickSpacing 200", class: verified, observed_at: 2026-09-03T04:12:00Z, receipt_ids: [R-5, R-7, R-8, R-18], reproduction_ids: [REP-3, REP-5], supersedes: null }
  - { id: CLM-16, field: deployment.role, value: "Token creator_address_hash was empty on the token page this pass; factory() and Launched name current RWAERC20LaunchpadFactory 0xcE9C…5B0d (o1 docs Launch Factory), not Pons, LONG, PAIR, hood.fun, or historical factory 0xe64A…F297", class: verified, observed_at: 2026-09-03T04:12:00Z, receipt_ids: [R-1, R-2, R-4, R-5, R-21], reproduction_ids: [REP-1, REP-2, REP-5], supersedes: null }
  - { id: CLM-17, field: taxonomy.chain-scope, value: robinhood-native, class: verified, observed_at: 2026-09-03T04:08:00Z, receipt_ids: [R-4, R-7], reproduction_ids: [REP-1, REP-3], supersedes: null }
  - { id: CLM-18, field: security.audit, value: "No audit report URL was located on Blockscout, DexScreener, Gecko, o1 docs HTML, link.me, or X search this pass", class: unknown, observed_at: 2026-09-03T04:16:00Z, receipt_ids: [], reproduction_ids: [], supersedes: null }
  - { id: CLM-19, field: communications.status, value: "third-party-link: DexScreener info.websites lists https://link.me/itztherealrizzler (celebrity merch, no CA); createLaunchAndBuy websites/socials empty; X vote posts used robinhood-main-dex-*.netlify.app (copypasta-pattern)", class: claim, observed_at: 2026-09-03T04:16:00Z, receipt_ids: [R-3, R-7, R-12, R-15], reproduction_ids: [], supersedes: null }
  - { id: CLM-20, field: economics.metric, value: "Gecko token fdv_usd 68049.79; DexScreener fdv/marketCap 68252. Gecko pool fdv_usd 68049.79 prices RIZZLER as base. Gecko market_cap_usd null.", class: verified, observed_at: 2026-09-03T04:12:00Z, receipt_ids: [R-7, R-8, R-9], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-21, field: deployment.address, value: "0x4EA005168D7F09a7A0Ba9D1DEf21a479950E44C2", class: verified, observed_at: 2026-09-03T04:10:00Z, receipt_ids: [R-5, R-10, R-11, R-18], reproduction_ids: [REP-2, REP-4, REP-5], supersedes: null }
  - { id: CLM-22, field: deployment.address, value: "0xf86dfDb678D8E5d932100Ef479A59fa65a82a5Eb", class: verified, observed_at: 2026-09-03T04:10:00Z, receipt_ids: [R-5, R-14], reproduction_ids: [REP-5], supersedes: null }
  - { id: CLM-23, field: identity.domain, value: "NULL — DexScreener info.websites is a celebrity Linkme with no CA; Gecko token has no website field; createLaunchAndBuy websites []", class: claim, observed_at: 2026-09-03T04:12:00Z, receipt_ids: [R-3, R-7, R-9, R-12], reproduction_ids: [], supersedes: null }
  - { id: CLM-24, field: candidate, value: "rizzler | RIZZLER | NULL | NULL — discovery token not in census 49", class: claim, observed_at: 2026-09-03T04:20:00Z, receipt_ids: [R-1, R-7], reproduction_ids: [], supersedes: null }
  - { id: CLM-25, field: other, value: "Ticker RIZZLER also appears on robinhood as DopplerERC20V1 clone 0x28eC5A2a1F94c63CD6A65591Cd7d5201E44B1e18 (RIZZLER/COST Uniswap pair 0x8116…edfe, DexScreener liquidity.usd 9965.8 volume.h24 2780.54, holders_count 4, owner() Airlock 0xeb7C…0862). Different contract from 0x59ccd251…Db01.", class: verified, observed_at: 2026-09-03T04:12:00Z, receipt_ids: [R-6, R-16], reproduction_ids: [REP-3, REP-5], supersedes: null }

conflicts: []

events:
  - id: EVT-1
    type: onchain
    title: "Gecko RIZZLER/COST 24h volume $1.22M, liquidity $27.3k"
    summary: "Gecko pool 0xc542…3dbd volume_usd.h24 1216052 reserve_in_usd 27310 fdv_usd 68050."
    occurred_at: 2026-09-03T04:12:00Z
    observed_at: 2026-09-03T04:12:00Z
    affected_fields: [economics.metric, activity.status]
    evidence_state: verified
    impact: material
    site_recommendation: both
    channel_recommendation: none
    receipt_ids: [R-8]
  - id: EVT-2
    type: onchain
    title: "RWAERC20LaunchpadFactory createLaunchAndBuy minted RIZZLER / RIZZLER"
    summary: "Tx 0x62c5…2393 from 0xd892…f939 at 2026-09-02T18:21:12Z; Launched poolId 0xc542…3dbd quote COST; LaunchBuyExecuted 0.05 ETH in."
    occurred_at: 2026-09-02T18:21:12Z
    observed_at: 2026-09-03T04:12:00Z
    affected_fields: [deployment.address, lifecycle, product.mechanism]
    evidence_state: verified
    impact: material
    site_recommendation: profile
    channel_recommendation: none
    receipt_ids: [R-3, R-18]
  - id: EVT-3
    type: ct
    title: "X accounts circulated CA 0x59ccd251 as $RIZZLER"
    summary: "@moongemslady posted Aped $rizzler with the CA at 2026-09-02T18:29:05Z. @GabeCasey1 tagged @ItzDaRizzler with the same CA and a fomo.family link."
    occurred_at: 2026-09-02T18:29:05Z
    observed_at: 2026-09-03T04:16:00Z
    affected_fields: [deployment.address, activity.status]
    evidence_state: claim
    impact: routine
    site_recommendation: feed
    channel_recommendation: none
    receipt_ids: [R-22, R-23]
  - id: EVT-4
    type: ct
    title: "Netlify vote pages asked for $RIZZLER leaderboard votes"
    summary: "@bamboorootsNFT, @solanubisxNFT, and @emberwispxNFT posted the same vote copy with robinhood-main-dex-*.netlify.app/vote/0x59ccd251… and different Listing IDs."
    occurred_at: 2026-09-03T04:05:56Z
    observed_at: 2026-09-03T04:16:00Z
    affected_fields: [communications.status]
    evidence_state: claim
    impact: routine
    site_recommendation: none
    channel_recommendation: none
    receipt_ids: [R-15]

receipts:
  - { id: R-1, publisher: Blockscout, title: "Token 0x59ccd251…Db01 RIZZLER / RIZZLER", url: "https://robinhoodchain.blockscout.com/address/0x59ccd2519c57c7d06331Caa984326BD33E36Db01", published_at: null, accessed_at: 2026-09-03T04:08:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-2, CLM-3, CLM-4, CLM-6, CLM-12, CLM-16, CLM-24], excerpt: "hash 0x59ccd2519c57c7d06331Caa984326BD33E36Db01 name RIZZLER is_contract true is_verified false proxy_type null implementations []. token symbol RIZZLER decimals 18 total_supply 1000000000000000000000000000 holders_count 554 type ERC-20. creator_address_hash null creation_transaction_hash null this pass." }
  - { id: R-2, publisher: Blockscout, title: "Address 0xcE9C…5B0d RWAERC20LaunchpadFactory", url: "https://robinhoodchain.blockscout.com/address/0xcE9C48cFa068947f77738c81Be406B53338E5B0d", published_at: null, accessed_at: 2026-09-03T04:10:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-5, CLM-16], excerpt: "hash 0xcE9C48cFa068947f77738c81Be406B53338E5B0d name RWAERC20LaunchpadFactory is_contract true is_verified true creator_address_hash 0xaa8d6f5A785304628bA68aA54A1941702665d58C creation_transaction_hash 0x332d8f485db53f473b2a305ae45ff8ad7fb02b7f1f30e4ff55d30236d2b3a6da. Compiler v0.8.26 file_path src/RWAERC20LaunchpadFactory.sol is_fully_verified true verified_at 2026-08-31T23:36:24Z." }
  - { id: R-3, publisher: Blockscout, title: "createLaunchAndBuy tx 0x62c5a2c7…2393", url: "https://robinhoodchain.blockscout.com/tx/0x62c5a2c7f5978a314bc4c4f4e091f13314eb95d3a401b26b9cdca25352662393", published_at: 2026-09-02T18:21:12Z, accessed_at: 2026-09-03T04:12:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-2, CLM-3, CLM-6, CLM-8, CLM-14, CLM-19, CLM-23, EVT-2], excerpt: "timestamp 2026-09-02T18:21:12.000000Z status ok result success block_number 52782263 from 0xd892E11287aE78D2D124677CD8e364162EAbf939 (is_contract false) to RWAERC20LaunchpadFactory 0xcE9C48cFa068947f77738c81Be406B53338E5B0d method createLaunchAndBuy value 51000000000000000. decoded name RIZZLER symbol RIZZLER quote 0x4EA005168D7F09a7A0Ba9D1DEf21a479950E44C2 configVersion 14 websites [] socials [] metadata ipfs://bafkreic4v5r252cgfvq3652cmef4cz4vm5gw7qfxc6iyx2k3iniilgaw3e." }
  - { id: R-4, publisher: Robinhood Chain RPC, title: "eth_getCode, name, symbol, factory() on RIZZLER", url: "https://rpc.mainnet.chain.robinhood.com", published_at: null, accessed_at: 2026-09-03T04:08:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-2, CLM-3, CLM-4, CLM-5, CLM-6, CLM-13, CLM-16, CLM-17, CLM-22], excerpt: "eth_blockNumber 0x32a9833 (53123123). Token code 4724 B prefix 6080604052 not EIP-1167 CBOR solc 0.8.26. EIP-1967 slots zero. name RIZZLER symbol RIZZLER decimals 18 totalSupply 1e27. factory() 0xcE9C48cFa068947f77738c81Be406B53338E5B0d. owner() reverts. Factory code 24466 B." }
  - { id: R-5, publisher: Robinhood Chain RPC, title: "factory owner(), launchCreationEnabled(), hook(), tokenDeployer(), quoteConfig(COST)", url: "https://rpc.mainnet.chain.robinhood.com", published_at: null, accessed_at: 2026-09-03T04:12:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-5, CLM-9, CLM-13, CLM-14, CLM-15, CLM-16, CLM-21, CLM-22], excerpt: "block 53124528. owner() 0x5519a8Cc7211F483e19ff8d50A3B0c892701044D code 0x. launchCreationEnabled() true. nativeLaunchFee 1e15. tokenDeployer() 0xf86dfDb678D8E5d932100Ef479A59fa65a82a5Eb. hook() 0x0310cFEbE1D7A69f2414f6595bBe9d17c5342aCc. poolManager() 0x8366a39CC670B4001A1121B8F6A443A643e40951. priceUpdater() 0x8BF6eb1eAa9be34A068c56945A36A23520705F29. configVersion 14. baseFeeBps 100. quoteConfig(COST) registered 1 decimals 18. LaunchHook factory() 0xcE9C…5B0d." }
  - { id: R-6, publisher: DexScreener, title: "search RIZZLER", url: "https://api.dexscreener.com/latest/dex/search?q=RIZZLER", published_at: null, accessed_at: 2026-09-03T04:06:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-9, CLM-25], excerpt: "n 18. Top robinhood uniswap RIZZLER/COST pair 0xc5427117c9e24248907ce1dfe180d0ecded142b7c358d05f22a094b4add13dbd base 0x59ccd2519c57c7d06331Caa984326BD33E36Db01 quote COST 0x4EA0…44C2 liquidity.usd 29180.52 volume.h24 1223200.25. Separate robinhood RIZZLER/COST 0x28eC5A2a1F94c63CD6A65591Cd7d5201E44B1e18 pair 0x8116…edfe liquidity.usd 9965.8 volume.h24 2780.54. Solana RZLR/Rizzler rows are other chains." }
  - { id: R-7, publisher: DexScreener, title: "latest/dex/tokens RIZZLER", url: "https://api.dexscreener.com/latest/dex/tokens/0x59ccd2519c57c7d06331Caa984326BD33E36Db01", published_at: null, accessed_at: 2026-09-03T04:08:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-7, CLM-8, CLM-11, CLM-15, CLM-17, CLM-19, CLM-20, CLM-23, CLM-24], excerpt: "12 robinhood uniswap pairs. Top pairAddress 0xc5427117c9e24248907ce1dfe180d0ecded142b7c358d05f22a094b4add13dbd labels v4 base RIZZLER / RIZZLER quote Costco • Robinhood Token / COST 0x4EA005168D7F09a7A0Ba9D1DEf21a479950E44C2 liquidity.usd 29180.52 volume.h24 1223200.25 fdv 68252 marketCap 68252 pairCreatedAt 1788373272000. info.websites [{url https://link.me/itztherealrizzler, label Website}] info.socials []." }
  - { id: R-8, publisher: GeckoTerminal, title: "RIZZLER/COST Uniswap v4 pool", url: "https://api.geckoterminal.com/api/v2/networks/robinhood/pools/0xc5427117c9e24248907ce1dfe180d0ecded142b7c358d05f22a094b4add13dbd", published_at: null, accessed_at: 2026-09-03T04:12:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-6, CLM-7, CLM-10, CLM-15, CLM-20, EVT-1], excerpt: "name RIZZLER / COST pool_created_at 2026-09-02T18:21:12Z fdv_usd 68049.78767 market_cap_usd null volume_usd.h24 1216052.38637725 reserve_in_usd 27310.3144 transactions.h24 buys 3422 sells 3497. dex uniswap-v4-robinhood quote robinhood_0x4ea005168d7f09a7a0ba9d1def21a479950e44c2. pool_fee_percentage null. price_change_percentage.h24 264.179." }
  - { id: R-9, publisher: GeckoTerminal, title: "RIZZLER token", url: "https://api.geckoterminal.com/api/v2/networks/robinhood/tokens/0x59ccd2519c57c7d06331Caa984326BD33E36Db01", published_at: null, accessed_at: 2026-09-03T04:12:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-10, CLM-20, CLM-23], excerpt: "name RIZZLER symbol RIZZLER decimals 18 total_supply 1e27 price_usd 0.00006804978767 fdv_usd 68049.7876719327 market_cap_usd null volume_usd.h24 1258104.54023187 total_reserve_in_usd 15415.133. coingecko_coin_id null. No website field on token attributes. Top pool 0xc542…3dbd." }
  - { id: R-10, publisher: Blockscout, title: "Token 0x4EA0…44C2 Costco • Robinhood Token / COST", url: "https://robinhoodchain.blockscout.com/address/0x4EA005168D7F09a7A0Ba9D1DEf21a479950E44C2", published_at: null, accessed_at: 2026-09-03T04:10:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-9, CLM-21], excerpt: "hash 0x4EA005168D7F09a7A0Ba9D1DEf21a479950E44C2 name BeaconProxy is_contract true is_verified true proxy_type eip1967_beacon implementations Stock 0xb35490d6f9163DE4F80d88dc75C3516eb64C5aE2. token name Costco • Robinhood Token symbol COST decimals 18 holders_count 13705. creator_address_hash 0x4783C67b63dE2B358Ac5951a7D41F47A38F3C046. Stock impl is_verified true is_fully_verified true file_path src/Stock.sol." }
  - { id: R-11, publisher: Robinhood, title: "GET /rhj/assets Stock Token registry", url: "https://api.robinhood.com/rhj/assets", published_at: null, accessed_at: 2026-09-03T04:10:00Z, kind: docs, authority: primary, authenticity: confirmed, supports: [CLM-7, CLM-9, CLM-21], excerpt: "HTTP 200. assets length 194. One COST hit: tokenSymbol COST tokenName Costco • Robinhood Token contractAddress 0x4EA005168D7F09a7A0Ba9D1DEf21a479950E44C2 chainId 4663 networkName Robinhood Chain status ASSET_STATUS_ACTIVE isin US22160K1051." }
  - { id: R-12, publisher: Linkme, title: "link.me/itztherealrizzler", url: "https://link.me/itztherealrizzler", published_at: null, accessed_at: 2026-09-03T04:14:00Z, kind: social, authority: social, authenticity: unconfirmed, supports: [CLM-19, CLM-23], excerpt: "Title Check out The Rizzler (@itztherealrizzler) on Linkme. Display The Rizzler. Links Cameo, Instagram itztherealrizzler, TikTok itztherizzler, X Da_Rizzler419, merch itstherizzler.com and rizzler-inc.myshopify.com. Father Son Duo (Ran by parent). No 0x59ccd251 contract string in the preview this pass." }
  - { id: R-13, publisher: Blockscout, title: "Address 0x0310…2aCc LaunchHook", url: "https://robinhoodchain.blockscout.com/address/0x0310cFEbE1D7A69f2414f6595bBe9d17c5342aCc", published_at: null, accessed_at: 2026-09-03T04:10:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-15], excerpt: "hash 0x0310cFEbE1D7A69f2414f6595bBe9d17c5342aCc name LaunchHook is_contract true is_verified true. createLaunchAndBuy logs PoolRegistered poolId 0xc542…3dbd originalCreator 0xd892…f939 creatorFeeRecipient 0xd892…f939 baseFeeBps 100 and Seeded tokenAmountSeeded 999999999999999999999990158." }
  - { id: R-14, publisher: Blockscout, title: "Address 0xf86d…a5Eb LaunchTokenDeployer", url: "https://robinhoodchain.blockscout.com/address/0xf86dfDb678D8E5d932100Ef479A59fa65a82a5Eb", published_at: null, accessed_at: 2026-09-03T04:10:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-16, CLM-22], excerpt: "hash 0xf86dfDb678D8E5d932100Ef479A59fa65a82a5Eb name LaunchTokenDeployer is_contract true is_verified true. factory.tokenDeployer() returns this address." }
  - { id: R-15, publisher: "@bamboorootsNFT", title: "$RIZZLER netlify vote copy", url: "https://x.com/bamboorootsNFT/status/2095362631880093805", published_at: 2026-09-03T04:05:56Z, accessed_at: 2026-09-03T04:16:00Z, kind: social, authority: social, authenticity: unconfirmed, supports: [CLM-8, CLM-19, EVT-4], excerpt: "Attention $RIZZLER Family! YOUR vote matters! Less than 100 votes are needed to list $RIZZLER on the Robinhood Top 100 Leaderboard. Listing ID: 5096. URL robinhood-main-dex-pwb.netlify.app/vote/0x59ccd2519c57c7d06331Caa984326BD33E36Db01. Same copy from @solanubisxNFT 2095328425653187045 and @emberwispxNFT 2095272694132421114 with different netlify subdomains and Listing IDs." }
  - { id: R-16, publisher: Blockscout, title: "Token 0x28eC…1e18 RIZZLER Doppler clone", url: "https://robinhoodchain.blockscout.com/address/0x28eC5A2a1F94c63CD6A65591Cd7d5201E44B1e18", published_at: null, accessed_at: 2026-09-03T04:10:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-9, CLM-25], excerpt: "hash 0x28eC5A2a1F94c63CD6A65591Cd7d5201E44B1e18 name RIZZLER is_contract true is_verified true proxy_type eip1167 implementations DopplerERC20V1 0x3Be8B97Fd0e713B5aBE0649Fa830223B6B4BC599. token symbol RIZZLER holders_count 4 total_supply 1e27. RPC code 44 B. owner() 0xeb7C034704ef8dcd2d32324c1545f62fb4ad0862. factory() reverts. DexScreener RIZZLER/COST pair 0x8116…edfe liquidity.usd 9965.8 volume.h24 2780.54." }
  - { id: R-17, publisher: Blockscout, title: "KIRKLAND launchFactory and packed HOTDOG name", url: "https://robinhoodchain.blockscout.com/address/0xaAc0Eaf0B8a17FB428903D274413a1Fca36AEB03", published_at: null, accessed_at: 2026-09-03T04:12:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-9], excerpt: "RPC KIRKLAND 0xaAc0…EB03 launchFactory() 0x7eD598BcEf8bd9Edd8C97A195C6d13f40801EC7e. Packed Pons HOTDOG 0x1C1DAEF0300551aDBfbE403e7d567b6c5aFF566f name hotdog symbol HOTDOG. Distinct contracts from RIZZLER 0x59ccd251…Db01." }
  - { id: R-18, publisher: Blockscout, title: "Launched and Initialize logs for RIZZLER/COST", url: "https://robinhoodchain.blockscout.com/tx/0x62c5a2c7f5978a314bc4c4f4e091f13314eb95d3a401b26b9cdca25352662393", published_at: 2026-09-02T18:21:12Z, accessed_at: 2026-09-03T04:12:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-4, CLM-14, CLM-15, CLM-21, EVT-2], excerpt: "Mint 1e27 to LaunchHook. Initialize id 0xc5427117c9e24248907ce1dfe180d0ecded142b7c358d05f22a094b4add13dbd currency0 COST currency1 RIZZLER fee 0 tickSpacing 200 hooks 0x0310cFEbE1D7A69f2414f6595bBe9d17c5342aCc. Launched token 0x59ccd2519c57c7d06331Caa984326BD33E36Db01 originalCreator 0xd892E11287aE78D2D124677CD8e364162EAbf939 quoteToken COST launchSupply 1e27 tickSpacing 200. Seeded 999999999999999999999990158. NativeLaunchFeePaid amount 1e15 recipient 0x1cAa1962428382106Eb3f29B9719bdF797621C90." }
  - { id: R-19, publisher: "@Da_Rizzler419", title: "The Rizzler celebrity profile", url: "https://x.com/Da_Rizzler419", published_at: null, accessed_at: 2026-09-03T04:16:00Z, kind: social, authority: social, authenticity: unconfirmed, supports: [CLM-8], excerpt: "Display name The Rizzler, handle @Da_Rizzler419. Bio: This is the official page of The Rizzler! Rizzler@night.co (account ran by parent). Keyword from:Da_Rizzler419 (0x59ccd251 OR RIZZLER OR COST) returned video posts without the CA this pass." }
  - { id: R-20, publisher: GeckoTerminal, title: "RIZZLER token/pools 429", url: "https://api.geckoterminal.com/api/v2/networks/robinhood/tokens/0x59ccd2519c57c7d06331Caa984326BD33E36Db01/pools", published_at: null, accessed_at: 2026-09-03T04:12:00Z, kind: third-party-data, authority: aggregator, authenticity: unconfirmed, supports: [], excerpt: "HTTP 429 Too Many Requests on token/pools. Not retried. Pool and token endpoints for 0xc542…3dbd / 0x59ccd251…Db01 returned 200 earlier in the same pass." }
  - { id: R-21, publisher: o1 Exchange / Blockscout, title: "o1 Launch Factory + verified source", url: "https://docs.o1.exchange/launchpad/reference/production-contracts", published_at: null, accessed_at: 2026-09-03T04:14:00Z, kind: docs, authority: primary, authenticity: unconfirmed, supports: [CLM-1, CLM-7, CLM-13, CLM-16], excerpt: "docs HTML is a Mintlify SPA this pass (data-current-path /) so the production-contracts table was not copied from HTML. Discovery inventory HARVEST notes RH Launch Factory 0xcE9C48cFa068947f77738c81Be406B53338E5B0d. Blockscout source ContractName RWAERC20LaunchpadFactory comment: Managed ERC-20 launch factory serving standard and RWA product routes on non-Base chains. file_path src/RWAERC20LaunchpadFactory.sol compiler v0.8.26+commit.8a97fa7a is_fully_verified true." }
  - { id: R-22, publisher: "@moongemslady", title: "Aped $rizzler CA", url: "https://x.com/moongemslady/status/2095217465471242702", published_at: 2026-09-02T18:29:05Z, accessed_at: 2026-09-03T04:16:00Z, kind: social, authority: social, authenticity: confirmed, supports: [EVT-3], excerpt: "Aped $rizzler 0x59ccd2519c57c7d06331caa984326bd33e36db01" }
  - { id: R-23, publisher: "@GabeCasey1", title: "Tagged @ItzDaRizzler with CA and fomo.family", url: "https://x.com/GabeCasey1/status/2095272886772613395", published_at: 2026-09-02T22:09:19Z, accessed_at: 2026-09-03T04:16:00Z, kind: social, authority: social, authenticity: unconfirmed, supports: [EVT-3], excerpt: "@ItzDaRizzler 0x59ccd2519c57c7d06331caa984326bd33e36db01 Can you post and shill this please brother. Check out $RIZZLER on fomo: https://fomo.family/coin?address=0x59ccd2519c57c7d06331caa984326bd33e36db01&chainId=4663" }

gaps:
  - { priority: P0, question: "Is there an official X handle or site that bidirectionally links to token 0x59ccd251…Db01?", checked: "DexScreener info.websites link.me/itztherealrizzler with no CA; info.socials []; createLaunchAndBuy websites/socials empty; @Da_Rizzler419 bio and posts have no CA; Gecko token has no website, 2026-09-03", next: "re-read DexScreener token profile after a Claim Profile; search new posts that embed the CA and a handle" }
  - { priority: P1, question: "Is token 0x59ccd251…Db01 source later verified on Blockscout, and does creator_address_hash fill in as LaunchTokenDeployer 0xf86d…a5Eb?", checked: "is_verified false; bytecode 4724 B solc 0.8.26; creator_address_hash null this pass, 2026-09-03", next: "re-fetch api/v2/addresses and smart-contracts for 0x59ccd251…Db01" }
  - { priority: P1, question: "Does createLaunchAndBuy metadata ipfs://bafkreic4v5r252cgfvq3652cmef4cz4vm5gw7qfxc6iyx2k3iniilgaw3e list a site or handle?", checked: "GET ipfs.io/ipfs/bafkrei…aw3e HTTP 403 Cloudflare challenge this pass", next: "retry ipfs gateway or Blockscout token metadata" }
  - { priority: P1, question: "Does launch.o1.exchange/coin/0x59ccd251…Db01 show the launch page and any socials?", checked: "not opened this pass after Gecko 429; docs.o1.exchange production-contracts returned SPA HTML", next: "open the o1 coin page once" }
  - { priority: P2, question: "Can factory owner 0x5519a8…044D change fees or quotes on live RIZZLER/COST while launchCreationEnabled is true?", checked: "owner() 0x5519a8…044D; launchCreationEnabled() true; verified source has Ownable plus priceUpdater, 2026-09-03", next: "read remaining Ownable modifiers on src/RWAERC20LaunchpadFactory.sol and ERC20LaunchpadFactory.sol" }
---

# RIZZLER — research packet

## What it is

A one-billion-supply ERC-20 launched into a Uniswap v4 pool quoted against COST. Current RWAERC20LaunchpadFactory (o1 Launch Factory) deploys RIZZLER in one createLaunchAndBuy call and seeds the RIZZLER/COST book. Traders buy and sell RIZZLER on Uniswap v4. COST is the Robinhood stock-token rail, not the project. No official site or handle was located this pass.

Themes: memecoin, stock-paired:COST, rwa

## Why it matters

The RIZZLER/COST Uniswap v4 book printed about $1.22M of 24h volume on Gecko at collection, with the quote token using the Costco Robinhood Stock Token. GET /rhj/assets has a COST row at 0x4EA0…44C2, so the pair leg is a listed rail. KIRKLAND/COST and both HOTDOG/COST books are different tokens on different pads.

## What could go wrong

USD liquidity figures on the RIZZLER/COST book count both sides, and the quote side is COST, not USDG. DexScreener and Gecko disagree on reserve for the same pool. DexScreener lists a celebrity Linkme with no CA. Ticker RIZZLER is reused by a thinner Doppler clone. Netlify vote URLs reuse the CA in copypasta posts.

## Product and mechanics

Current RWAERC20LaunchpadFactory 0xcE9C…5B0d deploys via LaunchTokenDeployer 0xf86d…a5Eb. createLaunchAndBuy from 0xd892…f939 at 2026-09-02T18:21:12Z minted RIZZLER / RIZZLER supply 1e9*1e18 into Uniswap v4 poolId 0xc542…3dbd quoted against COST. factory() on the token returns that factory. Native launch fee was 1e15 wei; the same tx bought with 0.05 ETH and received 28985043296139654791023477 RIZZLER. [verified R-3 R-4 R-5 R-18]

Verified factory source is a managed ERC-20 launch factory for RWA quotes. Quote is COST 0x4EA0…44C2 from GET /rhj/assets. PoolManager is 0x8366…0951. LaunchHook 0x0310…2aCc registered the pool with baseFeeBps 100. Secondary RIZZLER/USDG and RIZZLER/ETH books exist on DexScreener with far less liquidity than the COST book. [verified R-5 R-7 R-11 R-21]

## Control and security

token owner() reverts. Factory owner() returns EOA 0x5519a8…044D with no code. launchCreationEnabled() is true this pass. priceUpdater, hook, and tokenDeployer are set. [verified R-4 R-5]

LaunchHook, LaunchTokenDeployer, and RWAERC20LaunchpadFactory are verified on Blockscout (src/RWAERC20LaunchpadFactory.sol, compiler v0.8.26). The RIZZLER token itself is not verified. No audit report URL was located this pass. [verified R-1 R-2 R-13 R-14] [unknown]

## Team and provenance

No official domain or X handle was located. DexScreener info.socials is empty; info.websites lists https://link.me/itztherealrizzler, a celebrity merch page with no CA in the preview. createLaunchAndBuy websites and socials arrays are empty. @Da_Rizzler419 bio has no CA 0x59ccd251. Flag unconfirmed-official and third-party-link. [claim R-3 R-7 R-12 R-19]

createLaunchAndBuy caller 0xd892…f939 is an EOA. No GitHub repository URL was located. [verified R-3] [claim R-7]

## Economics and activity

RIZZLER/COST Uniswap v4 24h volume is 1216052.39 USD and reserve_in_usd is 27310.31 at 2026-09-03T04:12:00Z from the Gecko pool endpoint. fdv_usd is 68049.79. Gecko token volume_usd.h24 is 1258104.54 across all pools, not the COST book. [claim R-8 R-9]

DexScreener same pair: liquidity.usd 29180.52, volume.h24 1223200.25, fdv/marketCap 68252. Blockscout holders_count 554. Pair created 2026-09-02T18:21:12Z. [claim R-1 R-7]

Assignment lead of liq ~$30,494 / vol ~$1,220,876 was near this as_of; live Gecko reserve is $27.3k and DexScreener liquidity is $29.2k. Gecko token/pools returned 429; trending was not fetched this pass. [claim R-7 R-8 R-20]

## Material risks

- Quote token COST 0x4EA0…44C2 is a Robinhood Stock Token rail in GET /rhj/assets; pool USD reserve is RIZZLER plus COST, not a USDG backstop. [verified R-8 R-11]
- Current factory launchCreationEnabled is true; KIRKLAND/COST and packed HOTDOG/COST are different tokens. [verified R-5 R-16 R-17]
- DexScreener website is a third-party-link; no official handle or domain this pass. [claim R-7 R-12]
- Ticker RIZZLER is reused by Doppler clone 0x28eC…1e18 on a thinner COST book. [verified R-16]
- No audit report URL this pass. [unknown]

## Verification passes

- Receipts: Blockscout token/factory/COST/hook/deployer/other RIZZLER and the createLaunchAndBuy tx, RPC name/symbol/factory/owner/launchCreationEnabled/quoteConfig, DexScreener token plus search, Gecko pool/token, /rhj/assets, link.me preview, and X CA / vote posts were opened on 2026-09-03 and excerpts copied from the responses. [verified R-1 R-4 R-8 R-11]
- Numbers: 1216052.39 is the Gecko RIZZLER/COST pool 24h volume, not the 1258104.54 token all-pools figure. Reserve 27310.31 is that pool. DexScreener 1223200.25 / 29180.52 is the same pair, different aggregator. [claim R-7 R-8 R-9]
- Adversarial: the strongest contrary reading is that this is KIRKLAND, packed HOTDOG, the Doppler RIZZLER clone, or an official Costco / celebrity product. KIRKLAND factory() path is Pons v2 0x7eD5…EC7e. Packed HOTDOG is 0x1C1D…566f. Clone is 0x28eC…1e18 with Airlock owner. COST is the rhj rail. Celebrity Linkme and @Da_Rizzler419 do not publish this CA. [inference R-11 R-12 R-16 R-17 R-19]

## Operations log

- Base: assignment base_sha 334ca0619aa62e922da83f46de021f06d12348cf. Census 49 slugs have no rizzler / RIZZLER / 0x59ccd251…Db01. content/dependencies/stock-tokens.yaml has COST at 0x4EA0…44C2.
- Explorer: Blockscout api/v2 token, factory, COST, LaunchHook, LaunchTokenDeployer, Doppler RIZZLER 0x28eC…1e18, createLaunchAndBuy 0x62c5…2393, Launched/Initialize/NativeLaunchFeePaid/LaunchBuyExecuted logs, holders. RPC eth_getCode/eth_call with Chrome UA at blocks 53123123–53124528.
- Aggregators: DexScreener latest/dex/tokens and search RIZZLER; Gecko token and pool (Mozilla UA + Accept application/json). token/pools HTTP 429, not retried.
- Registry: GET api.robinhood.com/rhj/assets 194 assets, 1 COST at 0x4EA0…44C2.
- Social: X keyword RIZZLER COST / 0x59ccd251; from:Da_Rizzler419; user search RIZZLER; link.me/itztherealrizzler preview.
- Docs: GET docs.o1.exchange/launchpad/reference/production-contracts returned SPA HTML; factory address taken from verified Blockscout source plus prior o1 packet.
- Failed: ipfs.io metadata HTTP 403; Gecko token/pools HTTP 429; Blockscout token creator_address_hash null; docs.o1.exchange table not present in SPA HTML; from:Da_Rizzler419 did not embed the CA.
- Time: collection 2026-09-03T04:06Z–2026-09-03T04:20Z.
