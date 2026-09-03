---
# Packet v2 (docs/research-system.md §5). Seed with Icarus What-it-is + events.
contract_version: proofline-research-v2
work_id: WORK-20260903-grok-heavy-icarus-research
producer: grok-heavy
role: collector
base_sha: 334ca0619aa62e922da83f46de021f06d12348cf
slug: cameltoe
name: CAMELTOE
packet_tier: seed
as_of: 2026-09-03T03:50:00Z
prior_packet: null
supersedes: null
owned_slugs: [cameltoe]
allowed_paths:
  - research/inbox/packets/cameltoe/WORK-20260903-grok-heavy-icarus-research.md

identity:
  canonical_name: CAMELTOE
  aliases: [Cameltoe]
  symbols: [CAMELTOE]
  entity_kind: token
  chain_scope: robinhood-native
  official_domain: "https://cameltoerh.fun"
  official_handle: "NULL — cameltoerh.fun and DexScreener list https://x.com/cameltoerh; from:cameltoerh resolved to @CamelToeRH whose bio has no contract this pass; flag unconfirmed-official"
  repository: "NULL — no GitHub org or repository URL on cameltoerh.fun HTML, DexScreener, Gecko token attributes, Blockscout, or X search this pass"
  possible_matches:
    - slug: artificial-inu
      signals: [other]
      contrary_signals:
        - "Census Artificial Inu is $AI at 0x2E8c…1e18 paired to NVDA via LongLauncher, site artificialinu.com / @ArtificiallyInu"
        - "CAMELTOE is Cameltoe at 0xc32B…F201 paired to LULU 0x4e62…3016 via historical RWAERC20LaunchpadFactory 0xe64A…F297"
        - "No shared domain, handle, or reproduced address"
    - slug: long
      signals: [other]
      contrary_signals:
        - "Census LONG is a stock-paired factory at app.long.xyz / @longdotxyz with LongLauncher 0x22e9…eeED"
        - "CAMELTOE is a token from RWAERC20LaunchpadFactory 0xe64A…F297, not LongLauncher"
        - "No shared domain, handle, or reproduced address"
    - slug: l4va
      signals: [other]
      contrary_signals:
        - "Census L4VA is a vault factory issuing tokens backed by locked RWAs"
        - "CAMELTOE is a 1e9-supply ERC-20 in a Uniswap v4 CAMELTOE/LULU pool"
        - "No shared domain, handle, or reproduced address"

classification:
  primary_leaf: rwa-products/stock-paired-token
  secondary_leaves: []
  mechanism_tags: [stock-paired, rwa, amm, launchpad]
  ecosystem_role: graduation
  lifecycle: mainnet
  coverage_recommendation: seed
  evidence_state: partly-verified
  rationale: "Not in the 49-row census. Token 0xc32B…F201 has 4657 bytes of code on 4663; name Cameltoe, symbol CAMELTOE, factory() returns historical RWAERC20LaunchpadFactory 0xe64A…F297. createLaunch minted into Uniswap v4 pool 0x1e75…2d35 quoted against LULU 0x4e62…3016, which GET rhj/assets lists as Lululemon • Robinhood Token on chain 4663. Distinct from ASS/LULU 0x47cB…7901 on current factory 0xcE9C…5B0d. Site cameltoerh.fun embeds the CA; X handle is unconfirmed-official. [R-1] [R-4] [R-5] [R-6] [R-9] [R-10]"

qualifying:
  deployed_on_chain: { status: pass, claim_ids: [CLM-4, CLM-5, CLM-6], note: "" }
  native_play:       { status: pass, claim_ids: [CLM-1, CLM-15], note: "" }
  citable:           { status: pass, claim_ids: [CLM-2, CLM-3, CLM-4], note: "" }
  research_story:    { status: pass, claim_ids: [CLM-1, CLM-9, CLM-10], note: "" }

links:
  - { kind: site, url: "https://cameltoerh.fun", authenticity: unconfirmed }
  - { kind: x, url: "https://x.com/cameltoerh", authenticity: unconfirmed }

deployments:
  - label: CAMELTOE token
    role: token
    address:
      value: "0xc32B91Fe216aF1B834dB02f33326E983Ad8Cf201"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T03:36:00Z
      exists_on_4663: true
      explorer_source_verified: false
    receipt_ids: [R-1, R-4, R-17]
  - label: Historical RWAERC20LaunchpadFactory (token factory())
    role: factory
    address:
      value: "0xe64AC4113848BBC1a6dDE1A6D1da96720A36F297"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T03:40:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-2, R-3, R-5]
  - label: LaunchTokenDeployer (token creator_address_hash)
    role: factory
    address:
      value: "0x6544AF3524a8d9135Eb5765CECE6E514d85D615b"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T03:40:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-1, R-5, R-14]
  - label: LaunchHook (Uniswap v4 hook on CAMELTOE/LULU)
    role: other
    address:
      value: "0x778b0c4EeA7D35D66513B587bA87FC9084b0EaCC"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T03:40:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-5, R-13, R-17]
  - label: LULU Stock Token (pair quote / rhj rail)
    role: token
    address:
      value: "0x4e62068525Ab11FE768e29dfD00ef909B9803016"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T03:36:00Z
      exists_on_4663: true
      explorer_source_verified: true
      explorer_source_verification_scope: proxy-shell-only
      implementation_source_verified: true
    receipt_ids: [R-9, R-12, R-17]

metrics:
  - { kind: volume_24h, value: 4804580.44, currency: USD, as_of: 2026-09-03T03:36:00Z, window: 24h, method: "api.geckoterminal.com/api/v2/networks/robinhood/pools/0x1e75aa57c6f96fd805296b4fa4969741060407f62c94a7f88c3fdfccc6cc2d35 volume_usd.h24", class: claim, receipt_ids: [R-7] }
  - { kind: tvl, value: 148504.51, currency: USD, as_of: 2026-09-03T03:36:00Z, window: point, method: "api.geckoterminal.com/api/v2/networks/robinhood/pools/0x1e75aa57c6f96fd805296b4fa4969741060407f62c94a7f88c3fdfccc6cc2d35 reserve_in_usd (CAMELTOE/LULU pool, not an all-pools figure)", class: claim, receipt_ids: [R-7] }
  - { kind: market_cap, value: 1477018.70, currency: USD, as_of: 2026-09-03T03:36:00Z, window: point, method: "api.geckoterminal.com/api/v2/networks/robinhood/pools/0x1e75aa57c6f96fd805296b4fa4969741060407f62c94a7f88c3fdfccc6cc2d35 fdv_usd (market_cap_usd null)", class: claim, receipt_ids: [R-7] }
  - { kind: holders, value: 2118, currency: null, as_of: 2026-09-03T03:36:00Z, window: point, method: "robinhoodchain.blockscout.com/api/v2/tokens/0xc32B91Fe216aF1B834dB02f33326E983Ad8Cf201 holders_count", class: claim, receipt_ids: [R-1] }

reproductions:
  - { id: REP-1, method: explorer-rpc, chain_id: 4663, checked_at: 2026-09-03T03:37:00Z, receipt_ids: [R-4], result: "eth_blockNumber 0x32a557b (53095739) then 0x32a5a28 (53107240). Token 0xc32B…F201 eth_getCode 4657 bytes prefix 6080604052, not EIP-1167; CBOR solc 0.8.26. name Cameltoe, symbol CAMELTOE, decimals 18, totalSupply 1e27. factory() 0xe64AC4113848BBC1a6dDE1A6D1da96720A36F297. owner() reverts." }
  - { id: REP-2, method: explorer-ui, chain_id: 4663, checked_at: 2026-09-03T03:40:00Z, receipt_ids: [R-1, R-2, R-3, R-12, R-13, R-14, R-17], result: "Blockscout api/v2 token 0xc32B…F201 name Cameltoe symbol CAMELTOE holders_count 2118 total_supply 1e27 is_verified false creator_address_hash LaunchTokenDeployer 0x6544…615b tx 0xb7b93ea4…2d0a 2026-09-02T03:19:05Z block 52248114. Factory 0xe64A…F297 name RWAERC20LaunchpadFactory is_verified true is_fully_verified true file_path src/RWAERC20LaunchpadFactory.sol compiler v0.8.26. createLaunch from 0x3Ed7…f13e quote LULU 0x4e62…3016. Launched poolId 0x1e75…2d35 supply 1e27. LULU BeaconProxy / Stock, name Lululemon • Robinhood Token." }
  - { id: REP-3, method: api, checked_at: 2026-09-03T03:36:00Z, receipt_ids: [R-6, R-7, R-8], result: "DexScreener latest/dex/tokens/0xc32B…F201: 27 robinhood uniswap pairs; top CAMELTOE/LULU v4 0x1e75…2d35 quote 0x4e62…3016 Lululemon • Robinhood Token / LULU liquidity.usd 160580.74 volume.h24 5057794.83 fdv 1662171 pairCreatedAt 1788319145000 (2026-09-02T03:19:05Z) info.websites cameltoerh.fun info.socials x.com/cameltoerh. Gecko pool: volume_usd.h24 4804580.44 reserve_in_usd 148504.51 fdv_usd 1477018.70 pool_created_at 2026-09-02T03:19:05Z dex uniswap-v4-robinhood. Gecko token volume_usd.h24 5419911.37 (all pools, not the LULU book); no website field on token attributes." }
  - { id: REP-4, method: api, checked_at: 2026-09-03T03:38:00Z, receipt_ids: [R-9], result: "GET api.robinhood.com/rhj/assets HTTP 200; assets length 194; one LULU hit: tokenSymbol LULU tokenName Lululemon • Robinhood Token deployments contractAddress 0x4e62068525Ab11FE768e29dfD00ef909B9803016 chainId 4663 status ASSET_STATUS_ACTIVE." }
  - { id: REP-5, method: explorer-rpc, chain_id: 4663, checked_at: 2026-09-03T03:42:00Z, receipt_ids: [R-5, R-16], result: "Factory 0xe64A…F297 code 21680 B. owner() 0x5519a8Cc7211F483e19ff8d50A3B0c892701044D. launchCreationEnabled() false. nativeLaunchFee 1e15 wei. tokenDeployer() 0x6544…615b. hook() 0x778b…EaCC. poolManager() 0x8366…0951. priceUpdater() 0x5C55…8738. ASS 0x47cB…7901 name ASS symbol ASS factory() 0xcE9C48cFa068947f77738c81Be406B53338E5B0d (current factory, not 0xe64A…F297)." }
  - { id: REP-6, method: official-crosslink, checked_at: 2026-09-03T03:37:00Z, receipt_ids: [R-10, R-11], result: "GET cameltoerh.fun HTTP 200 title $CAMELTOE; description community token on Robinhood Chain paired with the LULU stock token; HTML embeds 0xc32B91Fe216aF1B834dB02f33326E983Ad8Cf201 and https://x.com/cameltoerh plus Blockscout token links for CAMELTOE and LULU. from:cameltoerh returned @CamelToeRH; bio has no contract; posts do not embed the CA this pass." }

claims:
  - { id: CLM-1, field: product.mechanism, value: "Historical RWAERC20LaunchpadFactory createLaunch clones a 1e9-supply ERC-20 into a Uniswap v4 pool quoted against LULU. Tx 0xb7b9…2d0a from 0x3Ed7…f13e at 2026-09-02T03:19:05Z minted Cameltoe / CAMELTOE; Launched poolId 0x1e75…2d35 quote 0x4e62…3016. Native fee paid 1e15 wei. factory() on the token returns 0xe64A…F297.", class: verified, observed_at: 2026-09-03T03:42:00Z, receipt_ids: [R-2, R-3, R-4, R-5, R-17], reproduction_ids: [REP-1, REP-2, REP-5], supersedes: null }
  - { id: CLM-2, field: identity.name, value: "Cameltoe", class: verified, observed_at: 2026-09-03T03:36:00Z, receipt_ids: [R-1, R-3, R-4], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-3, field: identity.symbol, value: "CAMELTOE", class: verified, observed_at: 2026-09-03T03:36:00Z, receipt_ids: [R-1, R-3, R-4], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-4, field: deployment.address, value: "0xc32B91Fe216aF1B834dB02f33326E983Ad8Cf201", class: verified, observed_at: 2026-09-03T03:40:00Z, receipt_ids: [R-1, R-4, R-17], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-5, field: deployment.address, value: "0xe64AC4113848BBC1a6dDE1A6D1da96720A36F297", class: verified, observed_at: 2026-09-03T03:42:00Z, receipt_ids: [R-2, R-3, R-4, R-5], reproduction_ids: [REP-1, REP-2, REP-5], supersedes: null }
  - { id: CLM-6, field: lifecycle, value: mainnet, class: verified, observed_at: 2026-09-03T03:40:00Z, receipt_ids: [R-1, R-3, R-4, R-7], reproduction_ids: [REP-1, REP-2, REP-3], supersedes: null }
  - { id: CLM-7, field: taxonomy.primary-leaf, value: rwa-products/stock-paired-token, class: claim, observed_at: 2026-09-03T03:42:00Z, receipt_ids: [R-6, R-7, R-9], reproduction_ids: [], supersedes: null }
  - { id: CLM-8, field: identity.handle, value: "NULL — no bidirectional official handle; DexScreener and cameltoerh.fun list x.com/cameltoerh; from:cameltoerh resolved to @CamelToeRH with no CA in bio; flag unconfirmed-official", class: claim, observed_at: 2026-09-03T03:45:00Z, receipt_ids: [R-6, R-10, R-11], reproduction_ids: [], supersedes: null }
  - { id: CLM-9, field: relationship, value: "Pair quote LULU 0x4e62…3016 is Lululemon • Robinhood Token in GET rhj/assets (194 assets, 1 LULU row, chainId 4663). Distinct from ASS 0x47cB…7901 / ASS/LULU pool 0x2b74…f9a5, whose factory() is current RWAERC20LaunchpadFactory 0xcE9C…5B0d not 0xe64A…F297.", class: verified, observed_at: 2026-09-03T03:42:00Z, receipt_ids: [R-9, R-12, R-15, R-16], reproduction_ids: [REP-4, REP-5], supersedes: null }
  - { id: CLM-10, field: economics.metric, value: "CAMELTOE/LULU Uniswap v4 24h volume 4804580.44 USD and reserve_in_usd 148504.51 at 2026-09-03T03:36:00Z (Gecko pool slice, not Gecko token all-pools 5419911.37)", class: verified, observed_at: 2026-09-03T03:36:00Z, receipt_ids: [R-7, R-8], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-11, field: economics.metric, value: "DexScreener same pair liquidity.usd 160580.74 volume.h24 5057794.83 fdv/marketCap 1662171 at 2026-09-03T03:36:00Z", class: verified, observed_at: 2026-09-03T03:36:00Z, receipt_ids: [R-6], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-12, field: economics.metric, value: 2118, class: verified, observed_at: 2026-09-03T03:36:00Z, receipt_ids: [R-1], reproduction_ids: [REP-2], supersedes: null }
  - { id: CLM-13, field: control.owner, value: "token owner() reverts; historical factory owner() 0x5519a8Cc7211F483e19ff8d50A3B0c892701044D; launchCreationEnabled() false this pass", class: verified, observed_at: 2026-09-03T03:42:00Z, receipt_ids: [R-4, R-5], reproduction_ids: [REP-1, REP-5], supersedes: null }
  - { id: CLM-14, field: control.privileged-role, value: "createLaunch caller / Launched creator 0x3Ed78315c2A3e479Fa6E8aec3Ac97ffd4fCEf13e; factory priceUpdater 0x5C55…8738; LaunchHook platformTreasury 0x1cAa…1C90; baseFeeBps 100", class: verified, observed_at: 2026-09-03T03:42:00Z, receipt_ids: [R-3, R-5, R-17], reproduction_ids: [REP-2, REP-5], supersedes: null }
  - { id: CLM-15, field: other, value: "Pair asset is LULU 0x4e62068525Ab11FE768e29dfD00ef909B9803016; venue is Uniswap v4 PoolManager 0x8366a39CC670B4001A1121B8F6A443A643e40951 pool 0x1e75…2d35 with LaunchHook 0x778b…EaCC", class: verified, observed_at: 2026-09-03T03:42:00Z, receipt_ids: [R-5, R-6, R-7, R-17], reproduction_ids: [REP-3, REP-5], supersedes: null }
  - { id: CLM-16, field: deployment.role, value: "Token creator_address_hash is LaunchTokenDeployer 0x6544…615b; factory() names historical RWAERC20LaunchpadFactory 0xe64A…F297, not Pons, LONG, PAIR, or hood.fun. Current o1 factory 0xcE9C…5B0d is the ASS pad, not this token.", class: verified, observed_at: 2026-09-03T03:42:00Z, receipt_ids: [R-1, R-2, R-4, R-5, R-16], reproduction_ids: [REP-1, REP-2, REP-5], supersedes: null }
  - { id: CLM-17, field: taxonomy.chain-scope, value: robinhood-native, class: verified, observed_at: 2026-09-03T03:36:00Z, receipt_ids: [R-4, R-6], reproduction_ids: [REP-1, REP-3], supersedes: null }
  - { id: CLM-18, field: security.audit, value: "No audit report URL was located on Blockscout, DexScreener, Gecko, cameltoerh.fun, or X search this pass", class: unknown, observed_at: 2026-09-03T03:45:00Z, receipt_ids: [], reproduction_ids: [], supersedes: null }
  - { id: CLM-19, field: communications.status, value: "unconfirmed-official: cameltoerh.fun embeds the CA and links x.com/cameltoerh; @CamelToeRH bio has no CA; DexScreener lists both", class: claim, observed_at: 2026-09-03T03:45:00Z, receipt_ids: [R-6, R-10, R-11], reproduction_ids: [], supersedes: null }
  - { id: CLM-20, field: economics.metric, value: "Gecko fdv_usd 1477018.70; DexScreener fdv/marketCap 1662171. Gecko market_cap_usd null.", class: verified, observed_at: 2026-09-03T03:36:00Z, receipt_ids: [R-6, R-7], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-21, field: deployment.address, value: "0x4e62068525Ab11FE768e29dfD00ef909B9803016", class: verified, observed_at: 2026-09-03T03:40:00Z, receipt_ids: [R-5, R-9, R-12], reproduction_ids: [REP-2, REP-4, REP-5], supersedes: null }
  - { id: CLM-22, field: identity.domain, value: "https://cameltoerh.fun — HTML title $CAMELTOE; embeds CA 0xc32B…F201 and LULU Blockscout links; DexScreener info.websites lists the same URL; operator not bidirectionally confirmed via X bio", class: claim, observed_at: 2026-09-03T03:37:00Z, receipt_ids: [R-6, R-10], reproduction_ids: [], supersedes: null }
  - { id: CLM-23, field: candidate, value: "cameltoe | CAMELTOE | NULL | cameltoerh.fun — discovery token not in census 49", class: claim, observed_at: 2026-09-03T03:50:00Z, receipt_ids: [R-1, R-6, R-10], reproduction_ids: [], supersedes: null }
  - { id: CLM-24, field: other, value: "Ticker CAMELTOE also appears on robinhood at 0x8CDf…F201 (ETH book), 0xBfBf…d35A (CSCO book), and 0xE975…Aa23 (v3 WETH). Those are different addresses from 0xc32B…F201.", class: claim, observed_at: 2026-09-03T03:36:00Z, receipt_ids: [R-6], reproduction_ids: [], supersedes: null }

conflicts: []

events:
  - id: EVT-1
    type: onchain
    title: "Gecko CAMELTOE/LULU 24h volume $4.80M, liquidity $0.15M"
    summary: "Gecko pool 0x1e75…2d35 volume_usd.h24 4804580 reserve_in_usd 148505 fdv_usd 1477019."
    occurred_at: 2026-09-03T03:36:00Z
    observed_at: 2026-09-03T03:36:00Z
    affected_fields: [economics.metric, activity.status]
    evidence_state: verified
    impact: material
    site_recommendation: both
    channel_recommendation: none
    receipt_ids: [R-7]
  - id: EVT-2
    type: onchain
    title: "RWAERC20LaunchpadFactory createLaunch minted Cameltoe / CAMELTOE"
    summary: "Tx 0xb7b9…2d0a from 0x3Ed7…f13e at 2026-09-02T03:19:05Z; Launched poolId 0x1e75…2d35 quote LULU."
    occurred_at: 2026-09-02T03:19:05Z
    observed_at: 2026-09-03T03:40:00Z
    affected_fields: [deployment.address, lifecycle, product.mechanism]
    evidence_state: verified
    impact: material
    site_recommendation: profile
    channel_recommendation: none
    receipt_ids: [R-3, R-17]
  - id: EVT-3
    type: ct
    title: "@nottellingyou73 posted the CAMELTOE CA against LULU"
    summary: "Post: $CAMELTOE paired with $LULU stock and 0xc32b91fe216af1b834db02f33326e983ad8cf201."
    occurred_at: 2026-09-02T21:21:48Z
    observed_at: 2026-09-03T03:45:00Z
    affected_fields: [activity.status, communications.status]
    evidence_state: claim
    impact: routine
    site_recommendation: feed
    channel_recommendation: none
    receipt_ids: [R-18]
  - id: EVT-4
    type: ct
    title: "@CamelToeRH posted $CamelToe without a contract in the bio"
    summary: "from:cameltoerh resolved to @CamelToeRH. Sample post $CamelToe, It's tight. Bio has no CA."
    occurred_at: 2026-09-02T20:39:15Z
    observed_at: 2026-09-03T03:45:00Z
    affected_fields: [identity.handle, communications.status]
    evidence_state: claim
    impact: routine
    site_recommendation: none
    channel_recommendation: none
    receipt_ids: [R-11]
  - id: EVT-5
    type: onchain
    title: "Historical factory launchCreationEnabled is false"
    summary: "RPC launchCreationEnabled() on 0xe64A…F297 returned false at block 53107240. CAMELTOE already launched on this factory; ASS used 0xcE9C…5B0d."
    occurred_at: 2026-09-03T03:42:00Z
    observed_at: 2026-09-03T03:42:00Z
    affected_fields: [product.mechanism, control.privileged-role]
    evidence_state: verified
    impact: routine
    site_recommendation: profile
    channel_recommendation: none
    receipt_ids: [R-5]

receipts:
  - { id: R-1, publisher: Blockscout, title: "Token 0xc32B…F201 Cameltoe / CAMELTOE", url: "https://robinhoodchain.blockscout.com/address/0xc32B91Fe216aF1B834dB02f33326E983Ad8Cf201", published_at: null, accessed_at: 2026-09-03T03:36:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-2, CLM-3, CLM-4, CLM-6, CLM-12, CLM-16, CLM-23], excerpt: "hash 0xc32B91Fe216aF1B834dB02f33326E983Ad8Cf201 name Cameltoe is_contract true is_verified false creator_address_hash 0x6544AF3524a8d9135Eb5765CECE6E514d85D615b creation_transaction_hash 0xb7b93ea4a2462af22955ed4adc70a72496bc6f4455690b3a621995351dc62d0a. token symbol CAMELTOE decimals 18 total_supply 1000000000000000000000000000 holders_count 2118 type ERC-20." }
  - { id: R-2, publisher: Blockscout, title: "Address 0xe64A…F297 RWAERC20LaunchpadFactory", url: "https://robinhoodchain.blockscout.com/address/0xe64AC4113848BBC1a6dDE1A6D1da96720A36F297", published_at: null, accessed_at: 2026-09-03T03:40:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-5, CLM-16], excerpt: "hash 0xe64AC4113848BBC1a6dDE1A6D1da96720A36F297 name RWAERC20LaunchpadFactory is_contract true is_verified true is_fully_verified true creator_address_hash 0xc103Fce99EA5aDAcDdECE634EA6D036a42e757aE creation_transaction_hash 0x28140cdf681334118e852f8ff2cf65f564615a21f6cb2c32156956304e29a717. Compiler v0.8.26 file_path src/RWAERC20LaunchpadFactory.sol verified_at 2026-07-24T21:56:18Z." }
  - { id: R-3, publisher: Blockscout, title: "createLaunch tx 0xb7b93ea4…2d0a", url: "https://robinhoodchain.blockscout.com/tx/0xb7b93ea4a2462af22955ed4adc70a72496bc6f4455690b3a621995351dc62d0a", published_at: 2026-09-02T03:19:05Z, accessed_at: 2026-09-03T03:40:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-2, CLM-3, CLM-6, CLM-14, EVT-2], excerpt: "timestamp 2026-09-02T03:19:05.000000Z status ok result success block_number 52248114 from 0x3Ed78315c2A3e479Fa6E8aec3Ac97ffd4fCEf13e (is_contract false) to RWAERC20LaunchpadFactory 0xe64AC411…F297 method createLaunch. decoded name Cameltoe symbol CAMELTOE quote 0x4e62068525Ab11FE768e29dfD00ef909B9803016 value 1000000000000000." }
  - { id: R-4, publisher: Robinhood Chain RPC, title: "eth_getCode, name, symbol, factory() on CAMELTOE", url: "https://rpc.mainnet.chain.robinhood.com", published_at: null, accessed_at: 2026-09-03T03:37:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-2, CLM-3, CLM-4, CLM-5, CLM-6, CLM-13, CLM-16, CLM-17], excerpt: "eth_blockNumber 0x32a557b (53095739). Token code 4657 B prefix 6080604052 not EIP-1167. name Cameltoe symbol CAMELTOE decimals 18 totalSupply 1e27. factory() 0xe64AC4113848BBC1a6dDE1A6D1da96720A36F297. owner() reverts. Factory code 21680 B." }
  - { id: R-5, publisher: Robinhood Chain RPC, title: "factory owner(), launchCreationEnabled(), hook(), tokenDeployer()", url: "https://rpc.mainnet.chain.robinhood.com", published_at: null, accessed_at: 2026-09-03T03:42:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-5, CLM-9, CLM-13, CLM-14, CLM-15, CLM-16, CLM-21, EVT-5], excerpt: "block 53107240. owner() 0x5519a8Cc7211F483e19ff8d50A3B0c892701044D. launchCreationEnabled() false. nativeLaunchFee 1e15. tokenDeployer() 0x6544AF3524a8d9135Eb5765CECE6E514d85D615b. hook() 0x778b0c4EeA7D35D66513B587bA87FC9084b0EaCC. poolManager() 0x8366a39CC670B4001A1121B8F6A443A643e40951. ASS factory() 0xcE9C48cFa068947f77738c81Be406B53338E5B0d." }
  - { id: R-6, publisher: DexScreener, title: "latest/dex/tokens CAMELTOE", url: "https://api.dexscreener.com/latest/dex/tokens/0xc32B91Fe216aF1B834dB02f33326E983Ad8Cf201", published_at: null, accessed_at: 2026-09-03T03:36:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-7, CLM-8, CLM-11, CLM-15, CLM-17, CLM-20, CLM-22, CLM-23, CLM-24], excerpt: "27 robinhood uniswap pairs. Top pairAddress 0x1e75aa57c6f96fd805296b4fa4969741060407f62c94a7f88c3fdfccc6cc2d35 labels v4 base Cameltoe / CAMELTOE quote Lululemon • Robinhood Token / LULU 0x4e620685…3016 liquidity.usd 160580.74 volume.h24 5057794.83 fdv 1662171 pairCreatedAt 1788319145000. info.websites https://cameltoerh.fun info.socials https://x.com/cameltoerh." }
  - { id: R-7, publisher: GeckoTerminal, title: "CAMELTOE/LULU Uniswap v4 pool", url: "https://api.geckoterminal.com/api/v2/networks/robinhood/pools/0x1e75aa57c6f96fd805296b4fa4969741060407f62c94a7f88c3fdfccc6cc2d35", published_at: null, accessed_at: 2026-09-03T03:36:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-6, CLM-7, CLM-10, CLM-15, CLM-20, EVT-1], excerpt: "name CAMELTOE / LULU pool_created_at 2026-09-02T03:19:05Z fdv_usd 1477018.704 market_cap_usd null volume_usd.h24 4804580.43842432 reserve_in_usd 148504.5081 transactions.h24 buys 10003 sells 7562. dex uniswap-v4-robinhood quote robinhood_0x4e62068525ab11fe768e29dfd00ef909b9803016." }
  - { id: R-8, publisher: GeckoTerminal, title: "Cameltoe token", url: "https://api.geckoterminal.com/api/v2/networks/robinhood/tokens/0xc32B91Fe216aF1B834dB02f33326E983Ad8Cf201", published_at: null, accessed_at: 2026-09-03T03:36:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-10], excerpt: "name Cameltoe symbol CAMELTOE decimals 18 total_supply 1e27 price_usd 0.001477018704 fdv_usd 1477018.70378259 market_cap_usd null volume_usd.h24 5419911.36710732 total_reserve_in_usd 116607.40. coingecko_coin_id null. Top pool 0x1e75…2d35. No website field on token attributes this pass." }
  - { id: R-9, publisher: Robinhood, title: "GET /rhj/assets Stock Token registry", url: "https://api.robinhood.com/rhj/assets", published_at: null, accessed_at: 2026-09-03T03:38:00Z, kind: docs, authority: primary, authenticity: confirmed, supports: [CLM-7, CLM-9, CLM-21], excerpt: "HTTP 200. assets length 194. One LULU hit: tokenSymbol LULU tokenName Lululemon • Robinhood Token deployments contractAddress 0x4e62068525Ab11FE768e29dfD00ef909B9803016 chainId 4663 networkName Robinhood Chain status ASSET_STATUS_ACTIVE." }
  - { id: R-10, publisher: cameltoerh.fun, title: "$CAMELTOE site", url: "https://cameltoerh.fun", published_at: null, accessed_at: 2026-09-03T03:37:00Z, kind: official-site, authority: primary, authenticity: unconfirmed, supports: [CLM-8, CLM-19, CLM-22, CLM-23], excerpt: "HTTP 200 Vercel/Next.js. title $CAMELTOE. description CAMELTOE is a community token on Robinhood Chain, paired with the LULU stock token. HTML embeds 0xc32B91Fe216aF1B834dB02f33326E983Ad8Cf201 and https://x.com/cameltoerh plus Blockscout token URLs for CAMELTOE and LULU. No GitHub or Telegram URL this pass." }
  - { id: R-11, publisher: "@CamelToeRH", title: "$CamelToe, It's tight.", url: "https://x.com/CamelToeRH/status/2095250224293818710", published_at: 2026-09-02T20:39:15Z, accessed_at: 2026-09-03T03:45:00Z, kind: social, authority: social, authenticity: unconfirmed, supports: [CLM-8, CLM-19, EVT-4], excerpt: "from:cameltoerh returned @CamelToeRH display Camel. Bio: You can't be tight on money if you own tight money. Post 2095250224293818710: $CamelToe, It's tight. No contract address in bio or this post." }
  - { id: R-12, publisher: Blockscout, title: "Token 0x4e62…3016 Lululemon • Robinhood Token / LULU", url: "https://robinhoodchain.blockscout.com/address/0x4e62068525Ab11FE768e29dfD00ef909B9803016", published_at: null, accessed_at: 2026-09-03T03:36:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-9, CLM-21], excerpt: "hash 0x4e62068525Ab11FE768e29dfD00ef909B9803016 name BeaconProxy is_contract true is_verified true proxy_type eip1967_beacon implementations Stock 0xb35490d6f9163DE4F80d88dc75c3516eb64C5aE2. token name Lululemon • Robinhood Token symbol LULU decimals 18 holders_count 558 total_supply 4104841000000000000000." }
  - { id: R-13, publisher: Blockscout, title: "Address 0x778b…EaCC LaunchHook", url: "https://robinhoodchain.blockscout.com/address/0x778b0c4EeA7D35D66513B587bA87FC9084b0EaCC", published_at: null, accessed_at: 2026-09-03T03:40:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-14, CLM-15], excerpt: "hash 0x778b0c4EeA7D35D66513B587bA87FC9084b0EaCC name LaunchHook is_contract true is_verified true creator_address_hash 0x4e59b44847b379578588920cA78FbF26c0B4956C. RPC eth_getCode 10342 B. PoolRegistered platformTreasury 0x1cAa1962428382106Eb3f29B9719bdF797621C90 baseFeeBps 100." }
  - { id: R-14, publisher: Blockscout, title: "Address 0x6544…615b LaunchTokenDeployer", url: "https://robinhoodchain.blockscout.com/address/0x6544AF3524a8d9135Eb5765CECE6E514d85D615b", published_at: null, accessed_at: 2026-09-03T03:40:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-16], excerpt: "hash 0x6544AF3524a8d9135Eb5765CECE6E514d85D615b name LaunchTokenDeployer is_contract true is_verified true creator_address_hash 0xc103Fce99EA5aDAcDdECE634EA6D036a42e757aE creation_transaction_hash 0xb15562272ca27163e64a1231cb10a65d2e34ccc30560093f3facf2f48c71b321. RPC eth_getCode 9215 B." }
  - { id: R-15, publisher: Blockscout, title: "Token 0x47cB…7901 ASS", url: "https://robinhoodchain.blockscout.com/address/0x47cB7f9F0b6f4B7BbDa69Cb95F871a73C1687901", published_at: null, accessed_at: 2026-09-03T03:40:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-9], excerpt: "hash 0x47cB7f9F0b6f4B7BbDa69Cb95F871a73C1687901 name ASS is_contract true is_verified false creator_address_hash 0xf86dfDb678D8E5d932100Ef479A59fa65a82a5Eb creation_transaction_hash 0x8faf4399b6410a4176e3ac632238dfde6309376a409dd6600602ad7a84f4f6c1. RPC name ASS symbol ASS factory() 0xcE9C48cFa068947f77738c81Be406B53338E5B0d." }
  - { id: R-16, publisher: DexScreener, title: "ASS/LULU Uniswap v4 pair", url: "https://api.dexscreener.com/latest/dex/search?q=ASS%20LULU", published_at: null, accessed_at: 2026-09-03T03:37:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-9, CLM-16], excerpt: "robinhood uniswap v4 pair 0x2b7478d7bc3ac5f92d451b799bc61ebfbde295f3d2f96734e481e9f73fd5f9a5 base ASS 0x47cB7f9F0b6f4B7BbDa69Cb95F871a73C1687901 quote Lululemon • Robinhood Token / LULU 0x4e62068525Ab11FE768e29dfD00ef909B9803016 liquidity.usd 118421.48 volume.h24 3864621.96 fdv 902969." }
  - { id: R-17, publisher: Blockscout, title: "Launched and Initialize logs for CAMELTOE/LULU", url: "https://robinhoodchain.blockscout.com/tx/0xb7b93ea4a2462af22955ed4adc70a72496bc6f4455690b3a621995351dc62d0a", published_at: 2026-09-02T03:19:05Z, accessed_at: 2026-09-03T03:40:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-4, CLM-14, CLM-15, EVT-2], excerpt: "Launched token 0xc32B91Fe216aF1B834dB02f33326E983Ad8Cf201 poolId 0x1e75aa57c6f96fd805296b4fa4969741060407f62c94a7f88c3fdfccc6cc2d35 creator 0x3Ed78315c2A3e479Fa6E8aec3Ac97ffd4fCEf13e quote 0x4e62068525Ab11FE768e29dfD00ef909B9803016 supply 1e27 tickSpacing 200. Initialize currency0 LULU currency1 CAMELTOE hooks 0x778b…EaCC." }
  - { id: R-18, publisher: "@nottellingyou73", title: "$CAMELTOE paired with $LULU stock", url: "https://x.com/nottellingyou73/status/2095260929927663754", published_at: 2026-09-02T21:21:48Z, accessed_at: 2026-09-03T03:45:00Z, kind: social, authority: social, authenticity: confirmed, supports: [EVT-3], excerpt: "Another play I think is hilarious and has short interest is $CAMELTOE paired with $LULU stock 0xc32b91fe216af1b834db02f33326e983ad8cf201" }
  - { id: R-19, publisher: Blockscout, title: "RWAERC20LaunchpadFactory verified source", url: "https://robinhoodchain.blockscout.com/address/0xe64AC4113848BBC1a6dDE1A6D1da96720A36F297?tab=contract", published_at: null, accessed_at: 2026-09-03T03:40:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-7, CLM-13], excerpt: "ContractName RWAERC20LaunchpadFactory. Comment: ERC20 launch factory for RWA quotes with a restricted tick updater and native launch fee. file_path src/RWAERC20LaunchpadFactory.sol compiler v0.8.26+commit.8a97fa7a is_fully_verified true. Errors include LaunchCreationDisabled and InvalidQuoteToken." }

gaps:
  - { priority: P0, question: "Does @CamelToeRH bio or a pinned post bidirectionally link to token 0xc32B…F201 and cameltoerh.fun?", checked: "Site links x.com/cameltoerh; from:cameltoerh resolved to @CamelToeRH; bio has no CA; DexScreener lists the URL, 2026-09-03", next: "re-read the X profile and DexScreener token profile after a Claim Profile; search new posts that embed the CA and the domain" }
  - { priority: P1, question: "Is token 0xc32B…F201 source later verified on Blockscout, and does it match LaunchTokenDeployer output?", checked: "is_verified false; bytecode 4657 B solc 0.8.26; creator_address_hash LaunchTokenDeployer 0x6544…615b, 2026-09-03", next: "re-fetch api/v2/smart-contracts/0xc32B…F201" }
  - { priority: P1, question: "Can factory owner 0x5519a8…044D change fees or quotes on 0xe64A…F297 now that launchCreationEnabled is false?", checked: "owner() 0x5519a8…044D; launchCreationEnabled() false; verified source has LaunchCreationDisabled, 2026-09-03", next: "read remaining Ownable modifiers on src/RWAERC20LaunchpadFactory.sol" }
  - { priority: P2, question: "Do the other robinhood CAMELTOE tickers (0x8CDf…F201, 0xBfBf…d35A, 0xE975…Aa23) share a deployer with 0xc32B…F201?", checked: "DexScreener search listed those books with different pair addresses and no shared DexScreener info profile this pass", next: "eth_getCode and factory() on each address" }
---

# CAMELTOE — research packet

## What it is

A one-billion-supply ERC-20 launched into a Uniswap v4 pool quoted against LULU. Historical RWAERC20LaunchpadFactory deploys Cameltoe (CAMELTOE) in one createLaunch call and seeds the CAMELTOE/LULU book. Traders buy and sell CAMELTOE on Uniswap v4. cameltoerh.fun embeds the contract; no bidirectional official handle was located this pass.

Themes: memecoin, stock-paired:LULU, rwa

## Why it matters

The CAMELTOE/LULU Uniswap v4 book printed about $4.80M of 24h volume on Gecko at collection, with the quote token using the Lululemon Robinhood Stock Token. GET /rhj/assets has a LULU row at 0x4e62…3016, so the pair leg is a listed rail rather than an unofficial ticker. ASS/LULU is a different token on the current factory.

## What could go wrong

USD liquidity figures on the CAMELTOE/LULU book count both sides, and the quote side is LULU, not USDG. DexScreener and Gecko disagree on reserve and FDV for the same pool. The X URL on the site did not show a contract in the profile bio this pass. Other robinhood pairs reuse the CAMELTOE ticker at different addresses.

## Product and mechanics

Historical RWAERC20LaunchpadFactory 0xe64A…F297 deploys via LaunchTokenDeployer 0x6544…615b. createLaunch from 0x3Ed7…f13e at 2026-09-02T03:19:05Z minted Cameltoe / CAMELTOE supply 1e9*1e18 into Uniswap v4 poolId 0x1e75…2d35 quoted against LULU. factory() on the token returns that factory. Native launch fee was 1e15 wei. [verified R-3 R-4 R-5 R-17]

Verified factory source is an ERC-20 launch factory for RWA quotes. stock/quote is LULU 0x4e62…3016 from GET /rhj/assets. PoolManager is 0x8366…0951. LaunchHook 0x778b…EaCC registered the pool with baseFeeBps 100. Secondary CAMELTOE/USDG and CAMELTOE/ETH books exist on DexScreener with far less liquidity than the LULU book. [verified R-5 R-6 R-9 R-19]

## Control and security

token owner() reverts. Historical factory owner() returns 0x5519a8…044D. launchCreationEnabled() is false this pass, so this factory is not currently minting new launches. priceUpdater, hook, and tokenDeployer are set. [verified R-4 R-5]

LaunchHook, LaunchTokenDeployer, and RWAERC20LaunchpadFactory are verified on Blockscout (src/RWAERC20LaunchpadFactory.sol, compiler v0.8.26). The CAMELTOE token itself is not verified. No audit report URL was located this pass. [verified R-1 R-2 R-13 R-14] [unknown]

## Team and provenance

cameltoerh.fun titles $CAMELTOE, embeds CA 0xc32B…F201, and links https://x.com/cameltoerh. DexScreener info.websites and info.socials match. from:cameltoerh resolved to @CamelToeRH with no contract in the bio. Flag unconfirmed-official. [claim R-6 R-10 R-11]

createLaunch caller 0x3Ed7…f13e is an EOA. No GitHub repository URL was located. [verified R-3] [claim R-10]

## Economics and activity

CAMELTOE/LULU Uniswap v4 24h volume is 4804580.44 USD and reserve_in_usd is 148504.51 at 2026-09-03T03:36:00Z from the Gecko pool endpoint. fdv_usd is 1477018.70. Gecko token volume_usd.h24 is 5419911.37 across all pools, not the LULU book. [claim R-7 R-8]

DexScreener same pair: liquidity.usd 160580.74, volume.h24 5057794.83, fdv/marketCap 1662171. Blockscout holders_count 2118. Pair created 2026-09-02T03:19:05Z. [claim R-1 R-6]

Assignment lead of liq ~$159,577 / vol ~$5,182,212 was not reproduced at this as_of; live Gecko reserve is $0.15M and DexScreener liquidity is $0.16M. [claim R-6 R-7]

## Material risks

- Quote token LULU 0x4e62…3016 is a Robinhood Stock Token rail in GET /rhj/assets; pool USD reserve is CAMELTOE plus LULU, not a USDG backstop. [verified R-7 R-9]
- Historical factory launchCreationEnabled is false; ASS/LULU is a different token on 0xcE9C…5B0d. [verified R-5 R-16]
- X handle is unconfirmed-official; site embeds the CA. [claim R-10 R-11]
- CAMELTOE ticker collisions at other 4663 addresses. [claim R-6]
- No audit report URL this pass. [unknown]

## Verification passes

- Receipts: Blockscout token/factory/LULU/hook/deployer/ASS and the createLaunch tx, RPC name/symbol/factory/owner/launchCreationEnabled, DexScreener token and ASS search, Gecko pool/token, /rhj/assets, cameltoerh.fun, and X from:cameltoerh were opened on 2026-09-03 and excerpts copied from the responses. [verified R-1 R-4 R-7 R-9 R-10]
- Numbers: 4804580.44 is the Gecko CAMELTOE/LULU pool 24h volume, not the 5419911.37 token all-pools figure. Reserve 148504.51 is that pool. DexScreener 5057794.83 / 160580.74 is the same pair, different aggregator. [claim R-6 R-7 R-8]
- Adversarial: the strongest contrary reading is that CAMELTOE is the same name as ASS/LULU or an official Lululemon product. ASS factory() is 0xcE9C…5B0d with token 0x47cB…7901. LULU is the rhj rail, not the meme. No official Lululemon handle was located for this token. [inference R-9 R-15 R-16]

## Operations log

- Base: `git -C /Users/harsharnsingh/proofline-pr59 rev-parse origin/main` → 334ca0619aa62e922da83f46de021f06d12348cf. Census 49 slugs have no cameltoe / CAMELTOE / 0xc32B…F201. content/dependencies/stock-tokens.yaml has LULU at 0x4e62…3016.
- Explorer: Blockscout api/v2 token, factory, LULU, LaunchHook, LaunchTokenDeployer, ASS, createLaunch 0xb7b9…2d0a, Launched/Initialize logs, holders. RPC eth_getCode/eth_call with Mozilla UA at blocks 53095739–53107900.
- Aggregators: DexScreener latest/dex/tokens, latest/dex/pairs/robinhood, and search CAMELTOE / ASS LULU; Gecko token and pool (Mozilla UA). Later Gecko token/info, pools page 1, and trending_pools returned HTTP 429.
- Registry: GET api.robinhood.com/rhj/assets 194 assets, 1 LULU at 0x4e62…3016.
- Social: X keyword CAMELTOE LULU; from:cameltoerh; user search cameltoerh (unrelated adult handles; live account is @CamelToeRH).
- Site: GET cameltoerh.fun HTML 200; CA and x.com/cameltoerh in the document.
- Failed: Gecko token/info and networks/robinhood/pools page 1 and trending_pools duration=24h HTTP 429 after the first token/pool GETs; Blockscout token is_verified false; X user search did not return @cameltoerh as a profile row.
- Time: collection 2026-09-03T03:36Z–2026-09-03T03:50Z.
