---
# Packet v2 (docs/research-system.md §5). Seed with Icarus What-it-is + events.
contract_version: proofline-research-v2
work_id: WORK-20260903-grok-heavy-icarus-research
producer: grok-heavy
role: collector
base_sha: 334ca0619aa62e922da83f46de021f06d12348cf
slug: ass
name: ASS
packet_tier: seed
as_of: 2026-09-03T03:55:00Z
prior_packet: null
supersedes: null
owned_slugs: [ass]
allowed_paths:
  - research/inbox/packets/ass/WORK-20260903-grok-heavy-icarus-research.md

identity:
  canonical_name: ASS
  aliases: []
  symbols: [ASS]
  entity_kind: token
  chain_scope: robinhood-native
  official_domain: "NULL — DexScreener info.websites empty; Gecko token attributes have no website; createLaunch websites array empty; Blockscout token page lists no homepage this pass"
  official_handle: "NULL — DexScreener info.socials lists https://x.com/dipwheeler?s=11; createLaunch socials array empty; from:DipWheeler posts this pass do not embed 0x47cB…7901; flag unconfirmed-official"
  repository: "NULL — no GitHub org or repository URL on DexScreener, Gecko, Blockscout, o1 docs, or X search this pass"
  possible_matches:
    - slug: cameltoe
      signals: [other]
      contrary_signals:
        - "Pending CAMELTOE is Cameltoe at 0xc32B…F201 paired to LULU 0x4e62…3016 via historical RWAERC20LaunchpadFactory 0xe64A…F297; site cameltoerh.fun / DexScreener x.com/cameltoerh"
        - "ASS is ASS at 0x47cB…7901 paired to the same LULU rail via current RWAERC20LaunchpadFactory 0xcE9C…5B0d; DexScreener websites empty"
        - "No shared domain, handle, or reproduced address"
    - slug: artificial-inu
      signals: [other]
      contrary_signals:
        - "Census Artificial Inu is $AI at 0x2E8c…1e18 paired to NVDA via LongLauncher, site artificialinu.com / @ArtificiallyInu"
        - "ASS is ASS at 0x47cB…7901 paired to LULU via o1 RWAERC20LaunchpadFactory 0xcE9C…5B0d"
        - "No shared domain, handle, or reproduced address"
    - slug: long
      signals: [other]
      contrary_signals:
        - "Census LONG is a stock-paired factory at app.long.xyz / @longdotxyz with LongLauncher 0x22e9…eeED"
        - "ASS is a token from RWAERC20LaunchpadFactory 0xcE9C…5B0d, not LongLauncher"
        - "No shared domain, handle, or reproduced address"
    - slug: l4va
      signals: [other]
      contrary_signals:
        - "Census L4VA is a vault factory issuing tokens backed by locked RWAs"
        - "ASS is a 1e9-supply ERC-20 in a Uniswap v4 ASS/LULU pool"
        - "No shared domain, handle, or reproduced address"

classification:
  primary_leaf: rwa-products/stock-paired-token
  secondary_leaves: []
  mechanism_tags: [stock-paired, rwa, amm, launchpad]
  ecosystem_role: graduation
  lifecycle: mainnet
  coverage_recommendation: seed
  evidence_state: partly-verified
  rationale: "Not in the 49-row census. Token 0x47cB…7901 has 4724 bytes of code on 4663; name ASS, symbol ASS, factory() returns current RWAERC20LaunchpadFactory 0xcE9C…5B0d. createLaunch minted into Uniswap v4 pool 0x2b74…f9a5 quoted against LULU 0x4e62…3016, which GET rhj/assets lists as Lululemon • Robinhood Token on chain 4663. Distinct from CAMELTOE/LULU 0xc32B…F201 on historical factory 0xe64A…F297 and from Asscoin/SPY 0x0aB1…70A7. No official site or handle this pass. [R-1] [R-4] [R-5] [R-6] [R-8] [R-9] [R-16]"

qualifying:
  deployed_on_chain: { status: pass, claim_ids: [CLM-4, CLM-5, CLM-6], note: "" }
  native_play:       { status: pass, claim_ids: [CLM-1, CLM-15], note: "" }
  citable:           { status: pass, claim_ids: [CLM-2, CLM-3, CLM-4], note: "" }
  research_story:    { status: pass, claim_ids: [CLM-1, CLM-9, CLM-10], note: "" }

links:
  - { kind: x, url: "https://x.com/dipwheeler", authenticity: unconfirmed }

deployments:
  - label: ASS token
    role: token
    address:
      value: "0x47cB7f9F0b6f4B7BbDa69Cb95F871a73C1687901"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T03:52:00Z
      exists_on_4663: true
      explorer_source_verified: false
    receipt_ids: [R-1, R-4, R-18]
  - label: RWAERC20LaunchpadFactory (token factory(); o1 current)
    role: factory
    address:
      value: "0xcE9C48cFa068947f77738c81Be406B53338E5B0d"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T03:50:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-2, R-3, R-5, R-21]
  - label: LaunchTokenDeployer (token creator_address_hash)
    role: factory
    address:
      value: "0xf86dfDb678D8E5d932100Ef479A59fa65a82a5Eb"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T03:50:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-1, R-5, R-14]
  - label: LaunchHook (Uniswap v4 hook on ASS/LULU)
    role: other
    address:
      value: "0x0310cFEbE1D7A69f2414f6595bBe9d17c5342aCc"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T03:50:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-5, R-13, R-18]
  - label: LULU Stock Token (pair quote / rhj rail)
    role: token
    address:
      value: "0x4e62068525Ab11FE768e29dfD00ef909B9803016"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T03:45:00Z
      exists_on_4663: true
      explorer_source_verified: true
      explorer_source_verification_scope: proxy-shell-only
      implementation_source_verified: true
    receipt_ids: [R-9, R-12, R-18]

metrics:
  - { kind: volume_24h, value: 3791088.73, currency: USD, as_of: 2026-09-03T03:52:00Z, window: 24h, method: "api.geckoterminal.com/api/v2/networks/robinhood/pools/0x2b7478d7bc3ac5f92d451b799bc61ebfbde295f3d2f96734e481e9f73fd5f9a5 volume_usd.h24", class: claim, receipt_ids: [R-8] }
  - { kind: tvl, value: 113655.57, currency: USD, as_of: 2026-09-03T03:52:00Z, window: point, method: "api.geckoterminal.com/api/v2/networks/robinhood/pools/0x2b7478d7bc3ac5f92d451b799bc61ebfbde295f3d2f96734e481e9f73fd5f9a5 reserve_in_usd (ASS/LULU pool, not an all-pools figure)", class: claim, receipt_ids: [R-8] }
  - { kind: market_cap, value: 867871.32, currency: USD, as_of: 2026-09-03T03:52:00Z, window: point, method: "api.geckoterminal.com/api/v2/networks/robinhood/pools/0x2b7478d7bc3ac5f92d451b799bc61ebfbde295f3d2f96734e481e9f73fd5f9a5 fdv_usd (market_cap_usd null)", class: claim, receipt_ids: [R-8] }
  - { kind: holders, value: 1340, currency: null, as_of: 2026-09-03T03:52:00Z, window: point, method: "robinhoodchain.blockscout.com/api/v2/tokens/0x47cB7f9F0b6f4B7BbDa69Cb95F871a73C1687901 holders_count", class: claim, receipt_ids: [R-1] }

reproductions:
  - { id: REP-1, method: explorer-rpc, chain_id: 4663, checked_at: 2026-09-03T03:48:00Z, receipt_ids: [R-4], result: "eth_blockNumber 0x32a6de6 (53112294) then 0x32a74ef (53114095). Token 0x47cB…7901 eth_getCode 4724 bytes prefix 6080604052, not EIP-1167; CBOR solc 0.8.26. name ASS, symbol ASS, decimals 18, totalSupply 1e27. factory() 0xcE9C48cFa068947f77738c81Be406B53338E5B0d. owner() reverts." }
  - { id: REP-2, method: explorer-ui, chain_id: 4663, checked_at: 2026-09-03T03:50:00Z, receipt_ids: [R-1, R-2, R-3, R-12, R-13, R-14, R-18], result: "Blockscout api/v2 token 0x47cB…7901 name ASS symbol ASS holders_count 1340 total_supply 1e27 is_verified false creator_address_hash LaunchTokenDeployer 0xf86d…a5Eb tx 0x8faf4399…f6c1 2026-09-02T18:36:50Z block 52791314. Factory 0xcE9C…5B0d name RWAERC20LaunchpadFactory is_verified true is_fully_verified true file_path src/RWAERC20LaunchpadFactory.sol compiler v0.8.26. createLaunch from 0xCdfB…D3dC quote LULU 0x4e62…3016 value 1e15. Launched poolId 0x2b74…f9a5 supply 1e27. LULU BeaconProxy / Stock, name Lululemon • Robinhood Token." }
  - { id: REP-3, method: api, checked_at: 2026-09-03T03:52:00Z, receipt_ids: [R-7, R-8, R-9, R-20], result: "DexScreener latest/dex/tokens/0x47cB…7901: 16 robinhood uniswap pairs; top ASS/LULU v4 0x2b74…f9a5 quote 0x4e62…3016 Lululemon • Robinhood Token / LULU liquidity.usd 120519.64 volume.h24 3879046.05 fdv/marketCap 934145 pairCreatedAt 1788374210000 (2026-09-02T18:36:50Z) info.websites [] info.socials x.com/dipwheeler?s=11. Gecko pool: volume_usd.h24 3791088.73 reserve_in_usd 113655.57 fdv_usd 867871.32 pool_created_at 2026-09-02T18:36:50Z dex uniswap-v4-robinhood. Gecko token volume_usd.h24 4073878.81 (all pools, not the LULU book); no website field on token attributes. trending_pools duration=24h first twelve did not include ASS this pass." }
  - { id: REP-4, method: api, checked_at: 2026-09-03T03:47:00Z, receipt_ids: [R-12], result: "GET api.robinhood.com/rhj/assets HTTP 200; assets length 194; one LULU hit: tokenSymbol LULU tokenName Lululemon • Robinhood Token deployments contractAddress 0x4e62068525Ab11FE768e29dfD00ef909B9803016 chainId 4663 status ASSET_STATUS_ACTIVE." }
  - { id: REP-5, method: explorer-rpc, chain_id: 4663, checked_at: 2026-09-03T03:51:00Z, receipt_ids: [R-5, R-16], result: "Factory 0xcE9C…5B0d code 24466 B. owner() 0x5519a8Cc7211F483e19ff8d50A3B0c892701044D. launchCreationEnabled() true. nativeLaunchFee 1e15 wei. tokenDeployer() 0xf86d…a5Eb. hook() 0x0310…2aCc. poolManager() 0x8366…0951. priceUpdater() 0x8BF6…5F29. configVersion 14. baseFeeBps 100. quoteConfig(LULU) registered=1 decimals=18. CAMELTOE 0xc32B…F201 name Cameltoe symbol CAMELTOE factory() 0xe64AC4113848BBC1a6dDE1A6D1da96720A36F297 (historical factory, not 0xcE9C…5B0d). Asscoin 0x0aB1…70A7 name Asscoin symbol ASS factory() empty." }

claims:
  - { id: CLM-1, field: product.mechanism, value: "Current RWAERC20LaunchpadFactory createLaunch deploys a 1e9-supply ERC-20 into a Uniswap v4 pool quoted against LULU. Tx 0x8faf…f6c1 from 0xCdfB…D3dC at 2026-09-02T18:36:50Z minted ASS / ASS; Launched poolId 0x2b74…f9a5 quote 0x4e62…3016. Native fee paid 1e15 wei. factory() on the token returns 0xcE9C…5B0d.", class: verified, observed_at: 2026-09-03T03:51:00Z, receipt_ids: [R-2, R-3, R-4, R-5, R-18, R-21], reproduction_ids: [REP-1, REP-2, REP-5], supersedes: null }
  - { id: CLM-2, field: identity.name, value: "ASS", class: verified, observed_at: 2026-09-03T03:48:00Z, receipt_ids: [R-1, R-3, R-4], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-3, field: identity.symbol, value: "ASS", class: verified, observed_at: 2026-09-03T03:48:00Z, receipt_ids: [R-1, R-3, R-4], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-4, field: deployment.address, value: "0x47cB7f9F0b6f4B7BbDa69Cb95F871a73C1687901", class: verified, observed_at: 2026-09-03T03:50:00Z, receipt_ids: [R-1, R-4, R-18], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-5, field: deployment.address, value: "0xcE9C48cFa068947f77738c81Be406B53338E5B0d", class: verified, observed_at: 2026-09-03T03:51:00Z, receipt_ids: [R-2, R-3, R-4, R-5], reproduction_ids: [REP-1, REP-2, REP-5], supersedes: null }
  - { id: CLM-6, field: lifecycle, value: mainnet, class: verified, observed_at: 2026-09-03T03:52:00Z, receipt_ids: [R-1, R-3, R-4, R-8], reproduction_ids: [REP-1, REP-2, REP-3], supersedes: null }
  - { id: CLM-7, field: taxonomy.primary-leaf, value: rwa-products/stock-paired-token, class: claim, observed_at: 2026-09-03T03:52:00Z, receipt_ids: [R-7, R-8, R-12], reproduction_ids: [], supersedes: null }
  - { id: CLM-8, field: identity.handle, value: "NULL — no bidirectional official handle; DexScreener info.socials lists x.com/dipwheeler?s=11; createLaunch socials []; from:DipWheeler did not embed the CA this pass; flag unconfirmed-official", class: claim, observed_at: 2026-09-03T03:53:00Z, receipt_ids: [R-7, R-3, R-19], reproduction_ids: [], supersedes: null }
  - { id: CLM-9, field: relationship, value: "Pair quote LULU 0x4e62…3016 is Lululemon • Robinhood Token in GET rhj/assets (194 assets, 1 LULU row, chainId 4663). Distinct from CAMELTOE 0xc32B…F201 / CAMELTOE/LULU pool 0x1e75…2d35, whose factory() is historical RWAERC20LaunchpadFactory 0xe64A…F297 not 0xcE9C…5B0d. Distinct from Asscoin 0x0aB1…70A7 (ASS/SPY).", class: verified, observed_at: 2026-09-03T03:51:00Z, receipt_ids: [R-12, R-15, R-16, R-17], reproduction_ids: [REP-4, REP-5], supersedes: null }
  - { id: CLM-10, field: economics.metric, value: "ASS/LULU Uniswap v4 24h volume 3791088.73 USD and reserve_in_usd 113655.57 at 2026-09-03T03:52:00Z (Gecko pool slice, not Gecko token all-pools 4073878.81)", class: verified, observed_at: 2026-09-03T03:52:00Z, receipt_ids: [R-8, R-9], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-11, field: economics.metric, value: "DexScreener same pair liquidity.usd 120519.64 volume.h24 3879046.05 fdv/marketCap 934145 at 2026-09-03T03:52:00Z", class: verified, observed_at: 2026-09-03T03:52:00Z, receipt_ids: [R-7], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-12, field: economics.metric, value: 1340, class: verified, observed_at: 2026-09-03T03:52:00Z, receipt_ids: [R-1], reproduction_ids: [REP-2], supersedes: null }
  - { id: CLM-13, field: control.owner, value: "token owner() reverts; factory owner() 0x5519a8Cc7211F483e19ff8d50A3B0c892701044D; launchCreationEnabled() true this pass", class: verified, observed_at: 2026-09-03T03:51:00Z, receipt_ids: [R-4, R-5], reproduction_ids: [REP-1, REP-5], supersedes: null }
  - { id: CLM-14, field: control.privileged-role, value: "createLaunch caller / Launched originalCreator 0xCdfB2f660634e029749E411386d36A737780D3dC; factory priceUpdater 0x8BF6…5F29; LaunchHook platformFeeRecipient 0x1cAa…1C90; baseFeeBps 100", class: verified, observed_at: 2026-09-03T03:51:00Z, receipt_ids: [R-3, R-5, R-18], reproduction_ids: [REP-2, REP-5], supersedes: null }
  - { id: CLM-15, field: other, value: "Pair asset is LULU 0x4e62068525Ab11FE768e29dfD00ef909B9803016; venue is Uniswap v4 PoolManager 0x8366a39CC670B4001A1121B8F6A443A643e40951 pool 0x2b74…f9a5 with LaunchHook 0x0310…2aCc", class: verified, observed_at: 2026-09-03T03:51:00Z, receipt_ids: [R-5, R-7, R-8, R-18], reproduction_ids: [REP-3, REP-5], supersedes: null }
  - { id: CLM-16, field: deployment.role, value: "Token creator_address_hash is LaunchTokenDeployer 0xf86d…a5Eb; factory() names current RWAERC20LaunchpadFactory 0xcE9C…5B0d (o1 docs Launch Factory), not Pons, LONG, PAIR, hood.fun, or historical factory 0xe64A…F297", class: verified, observed_at: 2026-09-03T03:51:00Z, receipt_ids: [R-1, R-2, R-4, R-5, R-21], reproduction_ids: [REP-1, REP-2, REP-5], supersedes: null }
  - { id: CLM-17, field: taxonomy.chain-scope, value: robinhood-native, class: verified, observed_at: 2026-09-03T03:48:00Z, receipt_ids: [R-4, R-7], reproduction_ids: [REP-1, REP-3], supersedes: null }
  - { id: CLM-18, field: security.audit, value: "No audit report URL was located on Blockscout, DexScreener, Gecko, o1 docs HTML, or X search this pass", class: unknown, observed_at: 2026-09-03T03:53:00Z, receipt_ids: [], reproduction_ids: [], supersedes: null }
  - { id: CLM-19, field: communications.status, value: "third-party-link: DexScreener info.socials lists x.com/dipwheeler?s=11; createLaunch socials []; from:DipWheeler did not embed 0x47cB…7901 this pass", class: claim, observed_at: 2026-09-03T03:53:00Z, receipt_ids: [R-3, R-7, R-19], reproduction_ids: [], supersedes: null }
  - { id: CLM-20, field: economics.metric, value: "Gecko fdv_usd 867871.32; DexScreener fdv/marketCap 934145. Gecko market_cap_usd null.", class: verified, observed_at: 2026-09-03T03:52:00Z, receipt_ids: [R-7, R-8], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-21, field: deployment.address, value: "0x4e62068525Ab11FE768e29dfD00ef909B9803016", class: verified, observed_at: 2026-09-03T03:50:00Z, receipt_ids: [R-5, R-12, R-18], reproduction_ids: [REP-2, REP-4, REP-5], supersedes: null }
  - { id: CLM-22, field: deployment.address, value: "0xf86dfDb678D8E5d932100Ef479A59fa65a82a5Eb", class: verified, observed_at: 2026-09-03T03:50:00Z, receipt_ids: [R-1, R-5, R-14], reproduction_ids: [REP-2, REP-5], supersedes: null }
  - { id: CLM-23, field: identity.domain, value: "NULL — DexScreener info.websites []; Gecko token has no website field; createLaunch websites []", class: claim, observed_at: 2026-09-03T03:52:00Z, receipt_ids: [R-3, R-7, R-9], reproduction_ids: [], supersedes: null }
  - { id: CLM-24, field: candidate, value: "ass | ASS | NULL | NULL — discovery token not in census 49", class: claim, observed_at: 2026-09-03T03:55:00Z, receipt_ids: [R-1, R-7], reproduction_ids: [], supersedes: null }
  - { id: CLM-25, field: other, value: "Ticker ASS also appears on robinhood as Asscoin 0x0aB145AFD3fB107d889E1c5cB898039886Cb70A7 (ASS/SPY Uniswap v4, DexScreener liquidity.usd 7075.05 volume.h24 835379.13, site getasscoin.vercel.app / @asscoinrh). Different contract from 0x47cB…7901.", class: claim, observed_at: 2026-09-03T03:47:00Z, receipt_ids: [R-17], reproduction_ids: [], supersedes: null }

conflicts: []

events:
  - id: EVT-1
    type: onchain
    title: "Gecko ASS/LULU 24h volume $3.79M, liquidity $0.11M"
    summary: "Gecko pool 0x2b74…f9a5 volume_usd.h24 3791089 reserve_in_usd 113656 fdv_usd 867871."
    occurred_at: 2026-09-03T03:52:00Z
    observed_at: 2026-09-03T03:52:00Z
    affected_fields: [economics.metric, activity.status]
    evidence_state: verified
    impact: material
    site_recommendation: both
    channel_recommendation: none
    receipt_ids: [R-8]
  - id: EVT-2
    type: onchain
    title: "RWAERC20LaunchpadFactory createLaunch minted ASS / ASS"
    summary: "Tx 0x8faf…f6c1 from 0xCdfB…D3dC at 2026-09-02T18:36:50Z; Launched poolId 0x2b74…f9a5 quote LULU."
    occurred_at: 2026-09-02T18:36:50Z
    observed_at: 2026-09-03T03:50:00Z
    affected_fields: [deployment.address, lifecycle, product.mechanism]
    evidence_state: verified
    impact: material
    site_recommendation: profile
    channel_recommendation: none
    receipt_ids: [R-3, R-18]
  - id: EVT-3
    type: ct
    title: "@tradinbenjamins posted ASS paired to LULU"
    summary: "@tradinbenjamins posted DO NOT sleep on the simplicity of an $ASS coin paired to $LULU lemon stock."
    occurred_at: 2026-09-02T22:45:46Z
    observed_at: 2026-09-03T03:50:00Z
    affected_fields: [activity.status]
    evidence_state: claim
    impact: routine
    site_recommendation: feed
    channel_recommendation: none
    receipt_ids: [R-10]
  - id: EVT-4
    type: ct
    title: "@wibeeys posted the ASS CA with $ASS/$LULU"
    summary: "@wibeeys posted $ASS/ $LULU going to millys and 0x47cb7f9f0b6f4b7bbda69cb95f871a73c1687901."
    occurred_at: 2026-09-02T21:21:38Z
    observed_at: 2026-09-03T03:50:00Z
    affected_fields: [deployment.address, activity.status]
    evidence_state: claim
    impact: routine
    site_recommendation: feed
    channel_recommendation: none
    receipt_ids: [R-11]

receipts:
  - { id: R-1, publisher: Blockscout, title: "Token 0x47cB…7901 ASS / ASS", url: "https://robinhoodchain.blockscout.com/address/0x47cB7f9F0b6f4B7BbDa69Cb95F871a73C1687901", published_at: null, accessed_at: 2026-09-03T03:52:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-2, CLM-3, CLM-4, CLM-6, CLM-12, CLM-16, CLM-22, CLM-24], excerpt: "hash 0x47cB7f9F0b6f4B7BbDa69Cb95F871a73C1687901 name ASS is_contract true is_verified false proxy_type null implementations []. token symbol ASS decimals 18 total_supply 1000000000000000000000000000 holders_count 1340 type ERC-20. creator_address_hash 0xf86dfDb678D8E5d932100Ef479A59fa65a82a5Eb creation_transaction_hash 0x8faf4399b6410a4176e3ac632238dfde6309376a409dd6600602ad7a84f4f6c1." }
  - { id: R-2, publisher: Blockscout, title: "Address 0xcE9C…5B0d RWAERC20LaunchpadFactory", url: "https://robinhoodchain.blockscout.com/address/0xcE9C48cFa068947f77738c81Be406B53338E5B0d", published_at: null, accessed_at: 2026-09-03T03:50:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-5, CLM-16], excerpt: "hash 0xcE9C48cFa068947f77738c81Be406B53338E5B0d name RWAERC20LaunchpadFactory is_contract true is_verified true creator_address_hash 0xaa8d6f5A785304628bA68aA54A1941702665d58C creation_transaction_hash 0x332d8f485db53f473b2a305ae45ff8ad7fb02b7f1f30e4ff55d30236d2b3a6da. Compiler v0.8.26 file_path src/RWAERC20LaunchpadFactory.sol is_fully_verified true verified_at 2026-08-31T23:36:24Z." }
  - { id: R-3, publisher: Blockscout, title: "createLaunch tx 0x8faf4399…f6c1", url: "https://robinhoodchain.blockscout.com/tx/0x8faf4399b6410a4176e3ac632238dfde6309376a409dd6600602ad7a84f4f6c1", published_at: 2026-09-02T18:36:50Z, accessed_at: 2026-09-03T03:50:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-2, CLM-3, CLM-6, CLM-8, CLM-14, CLM-19, CLM-23, EVT-2], excerpt: "timestamp 2026-09-02T18:36:50.000000Z status ok result success block_number 52791314 from 0xCdfB2f660634e029749E411386d36A737780D3dC (is_contract false) to RWAERC20LaunchpadFactory 0xcE9C48cFa068947f77738c81Be406B53338E5B0d method createLaunch value 1000000000000000. decoded name ASS symbol ASS quote 0x4e62068525Ab11FE768e29dfD00ef909B9803016 configVersion 14 websites [] socials []." }
  - { id: R-4, publisher: Robinhood Chain RPC, title: "eth_getCode, name, symbol, factory() on ASS", url: "https://rpc.mainnet.chain.robinhood.com", published_at: null, accessed_at: 2026-09-03T03:48:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-2, CLM-3, CLM-4, CLM-5, CLM-6, CLM-13, CLM-16, CLM-17, CLM-22], excerpt: "eth_blockNumber 0x32a6de6 (53112294). Token code 4724 B prefix 6080604052 not EIP-1167 CBOR solc 0.8.26. name ASS symbol ASS decimals 18 totalSupply 1e27. factory() 0xcE9C48cFa068947f77738c81Be406B53338E5B0d. owner() reverts. Factory code 24466 B. LaunchTokenDeployer 0xf86d…a5Eb code 8994 B. LULU code 283 B." }
  - { id: R-5, publisher: Robinhood Chain RPC, title: "factory owner(), launchCreationEnabled(), hook(), tokenDeployer()", url: "https://rpc.mainnet.chain.robinhood.com", published_at: null, accessed_at: 2026-09-03T03:51:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-5, CLM-9, CLM-13, CLM-14, CLM-15, CLM-16, CLM-21, CLM-22], excerpt: "block 53114095. owner() 0x5519a8Cc7211F483e19ff8d50A3B0c892701044D. launchCreationEnabled() true. nativeLaunchFee 1e15. tokenDeployer() 0xf86dfDb678D8E5d932100Ef479A59fa65a82a5Eb. hook() 0x0310cFEbE1D7A69f2414f6595bBe9d17c5342aCc. poolManager() 0x8366a39CC670B4001A1121B8F6A443A643e40951. priceUpdater() 0x8BF6eb1eAa9be34A068c56945A36A23520705F29. configVersion 14. baseFeeBps 100. quoteConfig(LULU) registered 1 decimals 18. currentCreatorOf(ASS) 0xCdfB…D3dC." }
  - { id: R-6, publisher: DexScreener, title: "search ASS LULU", url: "https://api.dexscreener.com/latest/dex/search?q=ASS%20LULU", published_at: null, accessed_at: 2026-09-03T03:45:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-9], excerpt: "robinhood uniswap v4 ASS/LULU pair 0x2b7478d7bc3ac5f92d451b799bc61ebfbde295f3d2f96734e481e9f73fd5f9a5 base ASS 0x47cB7f9F0b6f4B7BbDa69Cb95F871a73C1687901 quote LULU 0x4e62068525Ab11FE768e29dfD00ef909B9803016. Separate row CAMELTOE/LULU 0xc32B91Fe216aF1B834dB02f33326E983Ad8Cf201 pair 0x1e75aa57c6f96fd805296b4fa4969741060407f62c94a7f88c3fdfccc6cc2d35." }
  - { id: R-7, publisher: DexScreener, title: "latest/dex/tokens ASS", url: "https://api.dexscreener.com/latest/dex/tokens/0x47cB7f9F0b6f4B7BbDa69Cb95F871a73C1687901", published_at: null, accessed_at: 2026-09-03T03:52:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-7, CLM-8, CLM-11, CLM-15, CLM-17, CLM-19, CLM-20, CLM-23, CLM-24], excerpt: "16 robinhood uniswap pairs. Top pairAddress 0x2b7478d7bc3ac5f92d451b799bc61ebfbde295f3d2f96734e481e9f73fd5f9a5 labels v4 base ASS / ASS quote Lululemon • Robinhood Token / LULU 0x4e62068525Ab11FE768e29dfD00ef909B9803016 liquidity.usd 120519.64 volume.h24 3879046.05 fdv 934145 marketCap 934145 pairCreatedAt 1788374210000. info.websites [] info.socials [{url https://x.com/dipwheeler?s=11, type twitter}]. Second pair ASS/USDG 0x9726…898e liquidity.usd ~18161." }
  - { id: R-8, publisher: GeckoTerminal, title: "ASS/LULU Uniswap v4 pool", url: "https://api.geckoterminal.com/api/v2/networks/robinhood/pools/0x2b7478d7bc3ac5f92d451b799bc61ebfbde295f3d2f96734e481e9f73fd5f9a5", published_at: null, accessed_at: 2026-09-03T03:52:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-6, CLM-7, CLM-10, CLM-15, CLM-20, EVT-1], excerpt: "name ASS / LULU pool_created_at 2026-09-02T18:36:50Z fdv_usd 867871.3194 market_cap_usd null volume_usd.h24 3791088.72761167 reserve_in_usd 113655.5745 transactions.h24 buys 7847 sells 6760. dex uniswap-v4-robinhood quote robinhood_0x4e62068525ab11fe768e29dfd00ef909b9803016. pool_fee_percentage null." }
  - { id: R-9, publisher: GeckoTerminal, title: "ASS token", url: "https://api.geckoterminal.com/api/v2/networks/robinhood/tokens/0x47cb7f9f0b6f4b7bbda69cb95f871a73c1687901", published_at: null, accessed_at: 2026-09-03T03:52:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-10, CLM-23], excerpt: "name ASS symbol ASS decimals 18 total_supply 1e27 price_usd 0.0008678713194 fdv_usd 867871.319414952 market_cap_usd null volume_usd.h24 4073878.80820341 total_reserve_in_usd 83730.235. coingecko_coin_id null website null twitter_handle null. Top pool 0x2b74…f9a5." }
  - { id: R-10, publisher: "@tradinbenjamins", title: "ASS coin paired to LULU lemon stock", url: "https://x.com/tradinbenjamins/status/2095282060613075103", published_at: 2026-09-02T22:45:46Z, accessed_at: 2026-09-03T03:50:00Z, kind: social, authority: social, authenticity: confirmed, supports: [EVT-3], excerpt: "DO NOT sleep on the simplicity of an $ASS coin paired to $LULU lemon stock." }
  - { id: R-11, publisher: "@wibeeys", title: "$ASS/$LULU CA post", url: "https://x.com/wibeeys/status/2095260886449746354", published_at: 2026-09-02T21:21:38Z, accessed_at: 2026-09-03T03:50:00Z, kind: social, authority: social, authenticity: confirmed, supports: [EVT-4], excerpt: "$ASS/ $LULU going to millys 0x47cb7f9f0b6f4b7bbda69cb95f871a73c1687901" }
  - { id: R-12, publisher: Robinhood, title: "GET /rhj/assets Stock Token registry", url: "https://api.robinhood.com/rhj/assets", published_at: null, accessed_at: 2026-09-03T03:47:00Z, kind: docs, authority: primary, authenticity: confirmed, supports: [CLM-9, CLM-21], excerpt: "HTTP 200. assets length 194. one LULU hit: tokenSymbol LULU tokenName Lululemon • Robinhood Token deployments contractAddress 0x4e62068525Ab11FE768e29dfD00ef909B9803016 chainId 4663 networkName Robinhood Chain status ASSET_STATUS_ACTIVE isin US5500211090." }
  - { id: R-13, publisher: Blockscout, title: "Address 0x0310…2aCc LaunchHook", url: "https://robinhoodchain.blockscout.com/address/0x0310cFEbE1D7A69f2414f6595bBe9d17c5342aCc", published_at: null, accessed_at: 2026-09-03T03:50:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-15], excerpt: "hash 0x0310cFEbE1D7A69f2414f6595bBe9d17c5342aCc name LaunchHook is_contract true is_verified true. createLaunch logs PoolRegistered poolId 0x2b74…f9a5 originalCreator 0xCdfB…D3dC creatorFeeRecipient 0xCdfB…D3dC baseFeeBps 100 and Seeded tokenAmountSeeded 999999999999999999999997953." }
  - { id: R-14, publisher: Blockscout, title: "Address 0xf86d…a5Eb LaunchTokenDeployer", url: "https://robinhoodchain.blockscout.com/address/0xf86dfDb678D8E5d932100Ef479A59fa65a82a5Eb", published_at: null, accessed_at: 2026-09-03T03:50:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-16, CLM-22], excerpt: "hash 0xf86dfDb678D8E5d932100Ef479A59fa65a82a5Eb name LaunchTokenDeployer is_contract true is_verified true creator_address_hash 0xaa8d6f5A785304628bA68aA54A1941702665d58C creation_transaction_hash 0x801aa2470ef0f701d47360fba16dc9076cadffd3b3dd7ff5f3d89804e6f84fbc. RPC eth_getCode 8994 B." }
  - { id: R-15, publisher: Blockscout, title: "Token 0xc32B…F201 Cameltoe / CAMELTOE", url: "https://robinhoodchain.blockscout.com/address/0xc32B91Fe216aF1B834dB02f33326E983Ad8Cf201", published_at: null, accessed_at: 2026-09-03T03:47:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-9], excerpt: "hash 0xc32B91Fe216aF1B834dB02f33326E983Ad8Cf201 name Cameltoe symbol CAMELTOE holders_count 2123 total_supply 1e27 is_verified false creator_address_hash 0x6544AF3524a8d9135Eb5765CECE6E514d85D615b. RPC name Cameltoe symbol CAMELTOE factory() 0xe64AC4113848BBC1a6dDE1A6D1da96720A36F297 code 4657 B." }
  - { id: R-16, publisher: DexScreener, title: "latest/dex/tokens CAMELTOE", url: "https://api.dexscreener.com/latest/dex/tokens/0xc32B91Fe216aF1B834dB02f33326E983Ad8Cf201", published_at: null, accessed_at: 2026-09-03T03:45:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-9], excerpt: "Top pair CAMELTOE/LULU v4 0x1e75aa57c6f96fd805296b4fa4969741060407f62c94a7f88c3fdfccc6cc2d35 quote LULU 0x4e62068525Ab11FE768e29dfD00ef909B9803016 liquidity.usd 156064.82 volume.h24 4940214.38 info.websites cameltoerh.fun info.socials x.com/cameltoerh. Different token from ASS 0x47cB…7901." }
  - { id: R-17, publisher: DexScreener, title: "latest/dex/tokens Asscoin ASS/SPY", url: "https://api.dexscreener.com/latest/dex/tokens/0x0aB145AFD3fB107d889E1c5cB898039886Cb70A7", published_at: null, accessed_at: 2026-09-03T03:45:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-9, CLM-25], excerpt: "robinhood uniswap v4 Asscoin / ASS 0x0aB145AFD3fB107d889E1c5cB898039886Cb70A7 quote SPY SPDR S&P 500 ETF Trust • Robinhood Token 0x117cc2133c37B721F49dE2A7a74833232B3B4C0C pair 0x44d815ae…6468 liquidity.usd 7075.05 volume.h24 835379.13 fdv 7157 info.websites getasscoin.vercel.app info.socials x.com/asscoinrh. Blockscout name Asscoin factory() empty." }
  - { id: R-18, publisher: Blockscout, title: "Launched and Initialize logs for ASS/LULU", url: "https://robinhoodchain.blockscout.com/tx/0x8faf4399b6410a4176e3ac632238dfde6309376a409dd6600602ad7a84f4f6c1", published_at: 2026-09-02T18:36:50Z, accessed_at: 2026-09-03T03:50:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-4, CLM-14, CLM-15, CLM-21, EVT-2], excerpt: "Launched token 0x47cB7f9F0b6f4B7BbDa69Cb95F871a73C1687901 poolId 0x2b7478d7bc3ac5f92d451b799bc61ebfbde295f3d2f96734e481e9f73fd5f9a5 originalCreator 0xCdfB2f660634e029749E411386d36A737780D3dC quoteToken 0x4e62068525Ab11FE768e29dfD00ef909B9803016 launchSupply 1e27 tickSpacing 200. Initialize currency0 ASS currency1 LULU fee 0 tickSpacing 200 hooks 0x0310cFEbE1D7A69f2414f6595bBe9d17c5342aCc. NativeLaunchFeePaid amount 1e15 recipient 0x1cAa…1C90." }
  - { id: R-19, publisher: "@DipWheeler", title: "from:DipWheeler ASS/LULU search", url: "https://x.com/DipWheeler", published_at: null, accessed_at: 2026-09-03T03:50:00Z, kind: social, authority: social, authenticity: unconfirmed, supports: [CLM-8, CLM-19], excerpt: "X user search dipwheeler returned @DipWheeler id 1823828971773181953 bio Son of Bum Farto | Fartcoin GCR. Keyword from:DipWheeler (ASS OR LULU OR 0x47cb7f9f) returned generic ass-language posts, none embedding 0x47cB7f9F0b6f4B7BbDa69Cb95F871a73C1687901 this pass." }
  - { id: R-20, publisher: GeckoTerminal, title: "Robinhood trending_pools 24h", url: "https://api.geckoterminal.com/api/v2/networks/robinhood/trending_pools?duration=24h", published_at: null, accessed_at: 2026-09-03T03:47:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-10], excerpt: "HTTP 200 n 20. First twelve: CHUMP/WETH, SANTACOIN/WETH, PONS/USDG, SHRUB/WETH, CASHCAT/WETH, AI/NVDA, FRONG/WETH, Index/WETH, microduck/USDG, JINQIAN/FAMI, OPTIMUS/WETH, SEMI/MU. ASS/LULU not in that window this pass. networks/robinhood/pools page 1 HTTP 429." }
  - { id: R-21, publisher: o1 Exchange / Blockscout, title: "o1 Launch Factory + verified source", url: "https://docs.o1.exchange/launchpad/reference/production-contracts", published_at: null, accessed_at: 2026-09-03T03:50:00Z, kind: docs, authority: primary, authenticity: confirmed, supports: [CLM-1, CLM-7, CLM-13, CLM-16], excerpt: "docs HTML table Launch Factory 0xcE9C48cFa068947f77738c81Be406B53338E5B0d Launch Hook 0x0310cFEbE1D7A69f2414f6595bBe9d17c5342aCc. Blockscout source ContractName RWAERC20LaunchpadFactory comment: Managed ERC-20 launch factory serving standard and RWA product routes on non-Base chains. file_path src/RWAERC20LaunchpadFactory.sol compiler v0.8.26+commit.8a97fa7a is_fully_verified true. Errors include LaunchCreationDisabled and InvalidQuoteToken." }

gaps:
  - { priority: P0, question: "Is there an official X handle or site that bidirectionally links to token 0x47cB…7901?", checked: "DexScreener info.websites [] info.socials x.com/dipwheeler?s=11; createLaunch websites/socials empty; from:DipWheeler did not embed the CA; Gecko token has no website, 2026-09-03", next: "re-read DexScreener token profile after a Claim Profile; search new posts that embed the CA and a handle" }
  - { priority: P1, question: "Is token 0x47cB…7901 source later verified on Blockscout, and does it match LaunchTokenDeployer output?", checked: "is_verified false; bytecode 4724 B solc 0.8.26; creator_address_hash LaunchTokenDeployer 0xf86d…a5Eb, 2026-09-03", next: "re-fetch api/v2/smart-contracts/0x47cB…7901" }
  - { priority: P1, question: "Does createLaunch metadata ipfs://bafkreidkbbhg5ftq3zbajclp6p5z2tjsehh6zysejgossaczzfwueaicmi list a site or handle?", checked: "GET ipfs.io/ipfs/bafkrei…aicmi HTTP 403 Cloudflare challenge this pass", next: "retry ipfs gateway or Blockscout token metadata" }
  - { priority: P1, question: "Does launch.o1.exchange/coin/0x47cB…7901 show the launch page and any socials?", checked: "GET launch.o1.exchange/coin/0x47cB…7901 HTTP 429 this pass", next: "retry the o1 coin page" }
  - { priority: P2, question: "Can factory owner 0x5519a8…044D change fees or quotes on live ASS/LULU while launchCreationEnabled is true?", checked: "owner() 0x5519a8…044D; launchCreationEnabled() true; verified source has Ownable plus priceUpdater, 2026-09-03", next: "read remaining Ownable modifiers on src/RWAERC20LaunchpadFactory.sol and ERC20LaunchpadFactory.sol" }
---

# ASS — research packet

## What it is

A one-billion-supply ERC-20 launched into a Uniswap v4 pool quoted against LULU. Current RWAERC20LaunchpadFactory (o1 Launch Factory) deploys ASS in one createLaunch call and seeds the ASS/LULU book. Traders buy and sell ASS on Uniswap v4. No official site or handle was located this pass.

Themes: memecoin, stock-paired:LULU, rwa

## Why it matters

The ASS/LULU Uniswap v4 book printed about $3.79M of 24h volume on Gecko at collection, with the quote token using the Lululemon Robinhood Stock Token. GET /rhj/assets has a LULU row at 0x4e62…3016, so the pair leg is a listed rail rather than an unofficial ticker. CAMELTOE/LULU is a different token on the historical factory. Asscoin/SPY is a thinner same-ticker clone.

## What could go wrong

USD liquidity figures on the ASS/LULU book count both sides, and the quote side is LULU, not USDG. DexScreener and Gecko disagree on reserve and FDV for the same pool. DexScreener lists x.com/dipwheeler without a matching CA in that account's posts this pass. Ticker ASS is reused by Asscoin 0x0aB1…70A7.

## Product and mechanics

Current RWAERC20LaunchpadFactory 0xcE9C…5B0d deploys via LaunchTokenDeployer 0xf86d…a5Eb. createLaunch from 0xCdfB…D3dC at 2026-09-02T18:36:50Z minted ASS / ASS supply 1e9*1e18 into Uniswap v4 poolId 0x2b74…f9a5 quoted against LULU. factory() on the token returns that factory. Native launch fee was 1e15 wei. [verified R-3 R-4 R-5 R-18]

Verified factory source is a managed ERC-20 launch factory for RWA quotes. Quote is LULU 0x4e62…3016 from GET /rhj/assets. PoolManager is 0x8366…0951. LaunchHook 0x0310…2aCc registered the pool with baseFeeBps 100. Secondary ASS/USDG and ASS/ETH books exist on DexScreener with far less liquidity than the LULU book. [verified R-5 R-7 R-12 R-21]

## Control and security

token owner() reverts. Factory owner() returns 0x5519a8…044D. launchCreationEnabled() is true this pass. priceUpdater, hook, and tokenDeployer are set. [verified R-4 R-5]

LaunchHook, LaunchTokenDeployer, and RWAERC20LaunchpadFactory are verified on Blockscout (src/RWAERC20LaunchpadFactory.sol, compiler v0.8.26). The ASS token itself is not verified. No audit report URL was located this pass. [verified R-1 R-2 R-13 R-14] [unknown]

## Team and provenance

No official domain or X handle was located. DexScreener info.websites is empty; info.socials lists x.com/dipwheeler?s=11. createLaunch websites and socials arrays are empty. from:DipWheeler did not embed 0x47cB…7901 this pass. Flag unconfirmed-official and third-party-link. [claim R-3 R-7 R-19]

createLaunch caller 0xCdfB…D3dC is an EOA. No GitHub repository URL was located. [verified R-3] [claim R-7]

## Economics and activity

ASS/LULU Uniswap v4 24h volume is 3791088.73 USD and reserve_in_usd is 113655.57 at 2026-09-03T03:52:00Z from the Gecko pool endpoint. fdv_usd is 867871.32. Gecko token volume_usd.h24 is 4073878.81 across all pools, not the LULU book. [claim R-8 R-9]

DexScreener same pair: liquidity.usd 120519.64, volume.h24 3879046.05, fdv/marketCap 934145. Blockscout holders_count 1340. Pair created 2026-09-02T18:36:50Z. [claim R-1 R-7]

Assignment lead of liq ~$128,695 / vol ~$3,847,429 was near this as_of; live Gecko reserve is $0.11M and DexScreener liquidity is $0.12M. trending_pools duration=24h first twelve did not include ASS this pass. [claim R-7 R-8 R-20]

## Material risks

- Quote token LULU 0x4e62…3016 is a Robinhood Stock Token rail in GET /rhj/assets; pool USD reserve is ASS plus LULU, not a USDG backstop. [verified R-8 R-12]
- Current factory launchCreationEnabled is true; CAMELTOE/LULU is a different token on 0xe64A…F297. [verified R-5 R-15 R-16]
- DexScreener social is a third-party-link; no official handle or domain this pass. [claim R-7 R-19]
- Ticker ASS is reused by Asscoin 0x0aB1…70A7 on an ASS/SPY book. [claim R-17]
- No audit report URL this pass. [unknown]

## Verification passes

- Receipts: Blockscout token/factory/LULU/hook/deployer/CAMELTOE and the createLaunch tx, RPC name/symbol/factory/owner/launchCreationEnabled, DexScreener token plus ASS LULU search plus Asscoin, Gecko pool/token/trending, /rhj/assets, o1 docs HTML, and X from:DipWheeler / CA posts were opened on 2026-09-03 and excerpts copied from the responses. [verified R-1 R-4 R-8 R-12]
- Numbers: 3791088.73 is the Gecko ASS/LULU pool 24h volume, not the 4073878.81 token all-pools figure. Reserve 113655.57 is that pool. DexScreener 3879046.05 / 120519.64 is the same pair, different aggregator. [claim R-7 R-8 R-9]
- Adversarial: the strongest contrary reading is that ASS is the same name as CAMELTOE/LULU, Asscoin/SPY, or an official Lululemon product. CAMELTOE factory() is 0xe64A…F297 with token 0xc32B…F201. Asscoin is 0x0aB1…70A7 on SPY. LULU is the rhj rail, not the meme. No official Lululemon handle was located for this token. [inference R-12 R-15 R-16 R-17]

## Operations log

- Base: assignment base_sha 334ca0619aa62e922da83f46de021f06d12348cf. Census 49 slugs have no ass / ASS / 0x47cB…7901. content/dependencies/stock-tokens.yaml has LULU at 0x4e62…3016.
- Explorer: Blockscout api/v2 token, factory, LULU, LaunchHook, LaunchTokenDeployer, CAMELTOE, Asscoin, createLaunch 0x8faf…f6c1, Launched/Initialize/NativeLaunchFeePaid logs, holders. RPC eth_getCode/eth_call with Mozilla UA at blocks 53112294–53114095.
- Aggregators: DexScreener latest/dex/tokens, latest/dex/pairs/robinhood, and search ASS / ASS LULU; Gecko token, pool, token/pools, trending_pools duration=24h (Mozilla UA + Accept application/json). networks/robinhood/pools page 1 HTTP 429.
- Registry: GET api.robinhood.com/rhj/assets 194 assets, 1 LULU at 0x4e62…3016.
- Social: X keyword ASS LULU and 0x47cb7f9f; from:DipWheeler; user search dipwheeler / cameltoerh / ASS LULU robinhood.
- Docs: GET docs.o1.exchange/launchpad/reference/production-contracts HTML lists Launch Factory 0xcE9C…5B0d.
- Failed: launch.o1.exchange/coin/0x47cB…7901 HTTP 429; ipfs.io metadata HTTP 403; Gecko pools page 1 HTTP 429; Blockscout token is_verified false; from:DipWheeler did not embed the CA.
- Time: collection 2026-09-03T03:44Z–2026-09-03T03:55Z.
