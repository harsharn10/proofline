---
# Packet v2 (docs/research-system.md §5). Seed with Icarus What-it-is + events.
contract_version: proofline-research-v2
work_id: WORK-20260903-grok-heavy-icarus-research
producer: grok-heavy
role: collector
base_sha: 334ca0619aa62e922da83f46de021f06d12348cf
slug: jinqian
name: JINQIAN
packet_tier: seed
as_of: 2026-09-03T03:25:00Z
prior_packet: null
supersedes: null
owned_slugs: [jinqian]
allowed_paths:
  - research/inbox/packets/jinqian/WORK-20260903-grok-heavy-icarus-research.md

identity:
  canonical_name: JINQIAN
  aliases: ["Money Mushroom"]
  symbols: [JINQIAN]
  entity_kind: token
  chain_scope: robinhood-native
  official_domain: "NULL — DexScreener info.websites empty; Gecko token attributes have no website; Blockscout token page lists no homepage this pass"
  official_handle: "NULL — DexScreener info.socials empty; X user search for JINQIAN and Money Mushroom returned unrelated handles; t.me/JinquanCTO title $JINQIAN with 261 subscribers and no contract in the preview this pass; flag unconfirmed-official"
  repository: "NULL — no GitHub org or repository URL on DexScreener, Gecko, Blockscout, or X search this pass"
  possible_matches:
    - slug: artificial-inu
      signals: [other]
      contrary_signals:
        - "Census Artificial Inu is $AI at 0x2E8c…1e18 paired to NVDA via LongLauncher, site artificialinu.com / @ArtificiallyInu"
        - "JINQIAN is Money Mushroom at 0xe818…9F56 paired to FAMI 0x5D2e…8cd9 via LaunchpadFactory 0x160E…4898"
        - "No shared domain, handle, or reproduced address"
    - slug: long
      signals: [other]
      contrary_signals:
        - "Census LONG is a stock-paired factory at app.long.xyz / @longdotxyz with LongLauncher 0x22e9…eeED"
        - "JINQIAN is a token cloned by LaunchpadFactory 0x160E…4898, not LongLauncher"
        - "No shared domain, handle, or reproduced address"
    - slug: l4va
      signals: [other]
      contrary_signals:
        - "Census L4VA is a vault factory issuing tokens backed by locked RWAs"
        - "JINQIAN is a LaunchpadToken clone in a Uniswap v4 JINQIAN/FAMI pool"
        - "No shared domain, handle, or reproduced address"

classification:
  primary_leaf: rwa-products/stock-paired-token
  secondary_leaves: []
  mechanism_tags: [stock-paired, rwa, amm, launchpad]
  ecosystem_role: graduation
  lifecycle: mainnet
  coverage_recommendation: seed
  evidence_state: partly-verified
  rationale: "Not in the 49-row census. Token 0xe818…9F56 is an EIP-1167 LaunchpadToken clone with non-empty code on 4663; factory() returns LaunchpadFactory 0x160E…4898; createToken minted Money Mushroom / JINQIAN into Uniswap v4 pool 0x48cf…d923 quoted against FAMI 0x5D2e…8cd9. factory.stock() returns that FAMI address. GET api.robinhood.com/rhj/assets (194 assets) has no FAMI. No official site or handle this pass. [R-1] [R-4] [R-5] [R-6] [R-8] [R-12]"

qualifying:
  deployed_on_chain: { status: pass, claim_ids: [CLM-4, CLM-5, CLM-6], note: "" }
  native_play:       { status: pass, claim_ids: [CLM-1, CLM-15], note: "" }
  citable:           { status: pass, claim_ids: [CLM-2, CLM-3, CLM-4], note: "" }
  research_story:    { status: pass, claim_ids: [CLM-1, CLM-9, CLM-10], note: "" }

links:
  - { kind: telegram, url: "https://t.me/JinquanCTO", authenticity: unconfirmed }

deployments:
  - label: JINQIAN token (EIP-1167 LaunchpadToken clone)
    role: token
    address:
      value: "0xe81880c1C5054245e036359f5c7be31606E79F56"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T03:05:00Z
      exists_on_4663: true
      explorer_source_verified: true
      explorer_source_verification_scope: proxy-shell-only
      implementation_source_verified: true
    receipt_ids: [R-1, R-5, R-18]
  - label: LaunchpadToken implementation
    role: implementation
    address:
      value: "0x4C515fcEeF14Dd08e86D6fa0df0eC7f1Ce2f579e"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T03:10:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-2, R-5, R-6]
  - label: LaunchpadFactory (token factory())
    role: factory
    address:
      value: "0x160Ea85a96DF909EAC3f79b14c7A69200ceb4898"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T03:10:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-3, R-5, R-6, R-15]
  - label: FAMI TokenizedStock (factory.stock / pair quote)
    role: token
    address:
      value: "0x5D2e81cB3A6FECe856B824Dfd7e1d6D3dbaD8cd9"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T03:08:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-6, R-7, R-16, R-17]

metrics:
  - { kind: volume_24h, value: 95888630.13, currency: USD, as_of: 2026-09-03T03:10:00Z, window: 24h, method: "api.geckoterminal.com/api/v2/networks/robinhood/pools/0x48cff3c087c11b88bab76488f0d17b3e0c3dab113334e8b7a3d1205f1b31d923 volume_usd.h24", class: claim, receipt_ids: [R-8] }
  - { kind: tvl, value: 2583146.40, currency: USD, as_of: 2026-09-03T03:10:00Z, window: point, method: "api.geckoterminal.com/api/v2/networks/robinhood/pools/0x48cff3c087c11b88bab76488f0d17b3e0c3dab113334e8b7a3d1205f1b31d923 reserve_in_usd (JINQIAN/FAMI pool, not an all-pools figure)", class: claim, receipt_ids: [R-8] }
  - { kind: market_cap, value: 3022372.11, currency: USD, as_of: 2026-09-03T03:10:00Z, window: point, method: "api.geckoterminal.com/api/v2/networks/robinhood/pools/0x48cff3c087c11b88bab76488f0d17b3e0c3dab113334e8b7a3d1205f1b31d923 fdv_usd (market_cap_usd null)", class: claim, receipt_ids: [R-8] }
  - { kind: holders, value: 9006, currency: null, as_of: 2026-09-03T03:05:00Z, window: point, method: "robinhoodchain.blockscout.com/api/v2/tokens/0xe81880c1C5054245e036359f5c7be31606E79F56 holders_count", class: claim, receipt_ids: [R-1] }

reproductions:
  - { id: REP-1, method: explorer-rpc, chain_id: 4663, checked_at: 2026-09-03T03:05:00Z, receipt_ids: [R-5], result: "eth_blockNumber 0x329ffd4 (53085652) then 0x32a0ec5 (53087941). Token 0xe818…9F56 eth_getCode 45 bytes EIP-1167 prefix 363d3d373d3d3d363d73 implementation 0x4c515fce…579e. name Money Mushroom, symbol JINQIAN, decimals 18, totalSupply 1e27. factory() 0x160Ea85a96DF909EAC3f79b14c7A69200ceb4898. owner() reverts." }
  - { id: REP-2, method: explorer-ui, chain_id: 4663, checked_at: 2026-09-03T03:12:00Z, receipt_ids: [R-1, R-2, R-3, R-4, R-15, R-16, R-17, R-18], result: "Blockscout api/v2 token 0xe818…9F56 name Money Mushroom symbol JINQIAN holders_count 9006 total_supply 1e27 proxy_type eip1167 implementation LaunchpadToken 0x4C515f…579e is_verified true is_partially_verified true file_path src/LaunchpadToken.sol. Factory 0x160E…4898 name LaunchpadFactory is_verified true creator 0xd28d0b3d…7B0d tx 0x9102fd20…e31a 2026-09-01T21:34:50Z block 52043711. createToken tx 0xa3712805…22b4 2026-09-02T13:32:29Z block 52613192 from 0x3C74B2e6…B0B6 method createToken(name Money Mushroom, symbol JINQIAN). TokenLaunched token 0xe818…9F56 creator 0x3C74…B0B6 poolId 0x48cf…d923 supply 1e27. FAMI 0x5D2e…8cd9 name TokenizedStock token name Farmmi, Inc. symbol FAMI total_supply 37430000e18 creator 0xd28d…7B0d tx 0x85f4f399…a518 same block 52043711." }
  - { id: REP-3, method: api, checked_at: 2026-09-03T03:10:00Z, receipt_ids: [R-7, R-8, R-9, R-20], result: "DexScreener latest/dex/tokens/0xe818…9F56: 30 robinhood uniswap pairs; top JINQIAN/FAMI v4 0x48cf…d923 quote 0x5D2e…8cd9 Farmmi, Inc. / FAMI liquidity.usd 2527116.39 volume.h24 97642283.24 fdv 3101211 pairCreatedAt 1788355949 (2026-09-02T13:32:29Z) info.websites [] info.socials []. Gecko pool: volume_usd.h24 95888630.13 reserve_in_usd 2583146.40 fdv_usd 3022372.11 pool_created_at 2026-09-02T13:32:29Z dex uniswap-v4-robinhood. Gecko token volume_usd.h24 153223013.63 (all pools, not the FAMI book). Gecko networks/robinhood/pools page 1 row 7 JINQIAN/FAMI; row 3 FAMI/USDG volume_usd.h24 136610096. Trending_pools duration=24h did not list JINQIAN in the first six." }
  - { id: REP-4, method: api, checked_at: 2026-09-03T03:18:00Z, receipt_ids: [R-12], result: "GET api.robinhood.com/rhj/assets HTTP 200; assets length 194; tokenSymbol/tokenName scan for FAMI and FARMMI returned 0 hits. Sample tokenName uses the Robinhood Token suffix (Salesforce • Robinhood Token)." }
  - { id: REP-5, method: explorer-rpc, chain_id: 4663, checked_at: 2026-09-03T03:16:00Z, receipt_ids: [R-6], result: "At block 53087941 factory 0x160E…4898 code 11848 B. stock() and tokenizedStock() 0x5D2e81cB3A6FECe856B824Dfd7e1d6D3dbaD8cd9. tokenImplementation() 0x4C515fcEeF14Dd08e86D6fa0df0eC7f1Ce2f579e. genesisCreator() 0x3C74B2e6818D622D0867e771DBa2C264E52fB0B6 (same as createToken from). owner() reverts. poolManager() 0x8366a39CC670B4001A1121B8F6A443A643e40951. launchFdvInStock 27725925925925925925925 (~27726e18). genesisFdvInStock 6931481481481481481481481 (~6931481e18). Deployer 0xd28d…7B0d eth_getCode 0x." }

claims:
  - { id: CLM-1, field: product.mechanism, value: "LaunchpadFactory clones a 1e9-supply LaunchpadToken (EIP-1167) into a Uniswap v4 pool quoted against factory.stock() FAMI; verified source says liquidity is locked (LP NFT to 0xdead) and the factory has no owner. createToken(name, symbol) from 0x3C74…B0B6 minted Money Mushroom / JINQIAN as the genesis launch.", class: verified, observed_at: 2026-09-03T03:16:00Z, receipt_ids: [R-3, R-4, R-5, R-6, R-18, R-21], reproduction_ids: [REP-1, REP-2, REP-5], supersedes: null }
  - { id: CLM-2, field: identity.name, value: "Money Mushroom", class: verified, observed_at: 2026-09-03T03:05:00Z, receipt_ids: [R-1, R-4, R-5], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-3, field: identity.symbol, value: "JINQIAN", class: verified, observed_at: 2026-09-03T03:05:00Z, receipt_ids: [R-1, R-4, R-5], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-4, field: deployment.address, value: "0xe81880c1C5054245e036359f5c7be31606E79F56", class: verified, observed_at: 2026-09-03T03:12:00Z, receipt_ids: [R-1, R-5, R-18], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-5, field: deployment.address, value: "0x160Ea85a96DF909EAC3f79b14c7A69200ceb4898", class: verified, observed_at: 2026-09-03T03:12:00Z, receipt_ids: [R-3, R-5, R-6], reproduction_ids: [REP-1, REP-2, REP-5], supersedes: null }
  - { id: CLM-6, field: lifecycle, value: mainnet, class: verified, observed_at: 2026-09-03T03:12:00Z, receipt_ids: [R-1, R-4, R-5, R-8], reproduction_ids: [REP-1, REP-2, REP-3], supersedes: null }
  - { id: CLM-7, field: taxonomy.primary-leaf, value: rwa-products/stock-paired-token, class: claim, observed_at: 2026-09-03T03:16:00Z, receipt_ids: [R-7, R-8, R-21], reproduction_ids: [], supersedes: null }
  - { id: CLM-8, field: identity.handle, value: "NULL — no bidirectional official handle; DexScreener info.socials empty; t.me/JinquanCTO is a third-party-link with no contract in the preview; flag unconfirmed-official", class: claim, observed_at: 2026-09-03T03:20:00Z, receipt_ids: [R-7, R-13, R-19], reproduction_ids: [], supersedes: null }
  - { id: CLM-9, field: relationship, value: "Pair quote FAMI 0x5D2e…8cd9 is named Farmmi, Inc. / TokenizedStock with no Robinhood Token suffix. GET rhj/assets (194 assets) has no FAMI. Factory and FAMI were created in the same block by EOA 0xd28d…7B0d. Distinct from census LONG / Artificial Inu.", class: verified, observed_at: 2026-09-03T03:18:00Z, receipt_ids: [R-12, R-16, R-17, R-11], reproduction_ids: [REP-2, REP-4, REP-5], supersedes: null }
  - { id: CLM-10, field: economics.metric, value: "JINQIAN/FAMI Uniswap v4 24h volume 95888630.13 USD and reserve_in_usd 2583146.40 at 2026-09-03T03:10:00Z (Gecko pool slice, not Gecko token all-pools 153223013.63)", class: verified, observed_at: 2026-09-03T03:10:00Z, receipt_ids: [R-8, R-9], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-11, field: economics.metric, value: "DexScreener same pair liquidity.usd 2527116.39 volume.h24 97642283.24 fdv/marketCap 3101211 at 2026-09-03T03:05:00Z", class: verified, observed_at: 2026-09-03T03:05:00Z, receipt_ids: [R-7], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-12, field: economics.metric, value: 9006, class: verified, observed_at: 2026-09-03T03:05:00Z, receipt_ids: [R-1], reproduction_ids: [REP-2], supersedes: null }
  - { id: CLM-13, field: control.owner, value: "factory owner() reverts; verified LaunchpadFactory source comment: No owner. No admin. No pause. Deployer 0xd28d…7B0d has no code.", class: verified, observed_at: 2026-09-03T03:16:00Z, receipt_ids: [R-5, R-6, R-21], reproduction_ids: [REP-1, REP-5], supersedes: null }
  - { id: CLM-14, field: control.privileged-role, value: "genesisCreator() 0x3C74B2e6818D622D0867e771DBa2C264E52fB0B6 equals the createToken caller for JINQIAN; feeCollectorAddress 0x3676…eedf; hookAddress 0xd88d…40cc", class: verified, observed_at: 2026-09-03T03:16:00Z, receipt_ids: [R-4, R-6], reproduction_ids: [REP-2, REP-5], supersedes: null }
  - { id: CLM-15, field: other, value: "Pair asset is FAMI 0x5D2e81cB3A6FECe856B824Dfd7e1d6D3dbaD8cd9; venue is Uniswap v4 PoolManager 0x8366a39CC670B4001A1121B8F6A443A643e40951 pool 0x48cf…d923", class: verified, observed_at: 2026-09-03T03:16:00Z, receipt_ids: [R-6, R-7, R-8, R-18], reproduction_ids: [REP-3, REP-5], supersedes: null }
  - { id: CLM-16, field: deployment.role, value: "Token creator_address_hash was empty on the token page; factory() and TokenLaunched name LaunchpadFactory 0x160E…4898 as the pad, not Pons, LONG, PAIR, or hood.fun", class: verified, observed_at: 2026-09-03T03:12:00Z, receipt_ids: [R-1, R-3, R-4, R-5], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-17, field: taxonomy.chain-scope, value: robinhood-native, class: verified, observed_at: 2026-09-03T03:05:00Z, receipt_ids: [R-5, R-7], reproduction_ids: [REP-1, REP-3], supersedes: null }
  - { id: CLM-18, field: security.audit, value: "No audit report URL was located on Blockscout, DexScreener, Gecko, Telegram preview, or X search this pass", class: unknown, observed_at: 2026-09-03T03:20:00Z, receipt_ids: [], reproduction_ids: [], supersedes: null }
  - { id: CLM-19, field: communications.status, value: "third-party-link: t.me/JinquanCTO og:title $JINQIAN, 261 subscribers, no contract in the preview; X post called it official TG", class: claim, observed_at: 2026-09-03T03:20:00Z, receipt_ids: [R-13, R-19], reproduction_ids: [], supersedes: null }
  - { id: CLM-20, field: economics.metric, value: "Gecko fdv_usd 3022372.11; DexScreener fdv/marketCap 3101211. Gecko market_cap_usd null.", class: verified, observed_at: 2026-09-03T03:10:00Z, receipt_ids: [R-7, R-8], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-21, field: deployment.address, value: "0x5D2e81cB3A6FECe856B824Dfd7e1d6D3dbaD8cd9", class: verified, observed_at: 2026-09-03T03:12:00Z, receipt_ids: [R-6, R-16, R-17], reproduction_ids: [REP-2, REP-5], supersedes: null }
  - { id: CLM-22, field: deployment.address, value: "0x4C515fcEeF14Dd08e86D6fa0df0eC7f1Ce2f579e", class: verified, observed_at: 2026-09-03T03:12:00Z, receipt_ids: [R-2, R-5, R-6], reproduction_ids: [REP-1, REP-2, REP-5], supersedes: null }
  - { id: CLM-23, field: identity.domain, value: "NULL — DexScreener info.websites []; Gecko token has no website field", class: claim, observed_at: 2026-09-03T03:10:00Z, receipt_ids: [R-7, R-9], reproduction_ids: [], supersedes: null }
  - { id: CLM-24, field: candidate, value: "jinqian | JINQIAN | NULL | NULL — discovery token not in census 49", class: claim, observed_at: 2026-09-03T03:25:00Z, receipt_ids: [R-1, R-7], reproduction_ids: [], supersedes: null }

conflicts: []

events:
  - id: EVT-1
    type: onchain
    title: "Gecko JINQIAN/FAMI 24h volume $95.9M, liquidity $2.58M"
    summary: "Gecko pool 0x48cf…d923 volume_usd.h24 95888630 reserve_in_usd 2583146 fdv_usd 3022372."
    occurred_at: 2026-09-03T03:10:00Z
    observed_at: 2026-09-03T03:10:00Z
    affected_fields: [economics.metric, activity.status]
    evidence_state: verified
    impact: material
    site_recommendation: both
    channel_recommendation: none
    receipt_ids: [R-8]
  - id: EVT-2
    type: ct
    title: "X account posted t.me/JinquanCTO as official TG"
    summary: "@tashiannaputri posted $JINQIAN OFFICIAL TG IS LIVE and t.me/JinquanCTO. Group title $JINQIAN, 261 subscribers."
    occurred_at: 2026-09-03T01:37:08Z
    observed_at: 2026-09-03T03:20:00Z
    affected_fields: [identity.handle, communications.status]
    evidence_state: claim
    impact: routine
    site_recommendation: none
    channel_recommendation: none
    receipt_ids: [R-13, R-19]
  - id: EVT-3
    type: ct
    title: "The Defiant reported the FAMI quote is not a Robinhood stock token"
    summary: "Article: FAMI 0x5D2e…8cd9 has no issuer or redemption; JINQIAN/FAMI turned over $92.0M by 14:28 ET."
    occurred_at: 2026-09-02T19:33:00Z
    observed_at: 2026-09-03T03:15:00Z
    affected_fields: [relationship, product.mechanism]
    evidence_state: claim
    impact: material
    site_recommendation: both
    channel_recommendation: none
    receipt_ids: [R-11]
  - id: EVT-4
    type: ct
    title: "@TheDegenBoii posted that the coin moved Nasdaq FAMI"
    summary: "Post: Farmmi is a Nasdaq stock that sells mushrooms. The coin dragged the stock, not the other way around."
    occurred_at: 2026-09-02T19:12:30Z
    observed_at: 2026-09-03T03:15:00Z
    affected_fields: [activity.status, relationship]
    evidence_state: claim
    impact: material
    site_recommendation: feed
    channel_recommendation: none
    receipt_ids: [R-10]
  - id: EVT-5
    type: onchain
    title: "LaunchpadFactory createToken minted Money Mushroom / JINQIAN"
    summary: "Tx 0xa371…22b4 from 0x3C74…B0B6 at 2026-09-02T13:32:29Z; TokenLaunched poolId 0x48cf…d923."
    occurred_at: 2026-09-02T13:32:29Z
    observed_at: 2026-09-03T03:12:00Z
    affected_fields: [deployment.address, lifecycle, product.mechanism]
    evidence_state: verified
    impact: material
    site_recommendation: profile
    channel_recommendation: none
    receipt_ids: [R-4, R-18]
  - id: EVT-6
    type: onchain
    title: "EOA deployed FAMI TokenizedStock and LaunchpadFactory"
    summary: "Block 52043711 2026-09-01T21:34:50Z: FAMI 0x5D2e…8cd9 and factory 0x160E…4898 from 0xd28d…7B0d."
    occurred_at: 2026-09-01T21:34:50Z
    observed_at: 2026-09-03T03:12:00Z
    affected_fields: [deployment.address, relationship]
    evidence_state: verified
    impact: material
    site_recommendation: profile
    channel_recommendation: none
    receipt_ids: [R-15, R-17]

receipts:
  - { id: R-1, publisher: Blockscout, title: "Token 0xe818…9F56 Money Mushroom / JINQIAN", url: "https://robinhoodchain.blockscout.com/address/0xe81880c1C5054245e036359f5c7be31606E79F56", published_at: null, accessed_at: 2026-09-03T03:05:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-2, CLM-3, CLM-4, CLM-6, CLM-12, CLM-16, CLM-24], excerpt: "hash 0xe81880c1C5054245e036359f5c7be31606E79F56 name Money Mushroom is_contract true is_verified true proxy_type eip1167 implementations LaunchpadToken 0x4C515fcEeF14Dd08e86D6fa0df0eC7f1Ce2f579e. token symbol JINQIAN decimals 18 total_supply 1000000000000000000000000000 holders_count 9006 type ERC-20. creator_address_hash null this pass." }
  - { id: R-2, publisher: Blockscout, title: "Address 0x4C515f…579e LaunchpadToken", url: "https://robinhoodchain.blockscout.com/address/0x4C515fcEeF14Dd08e86D6fa0df0eC7f1Ce2f579e", published_at: null, accessed_at: 2026-09-03T03:12:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-22], excerpt: "hash 0x4C515fcEeF14Dd08e86D6fa0df0eC7f1Ce2f579e name LaunchpadToken is_contract true is_verified true. Smart-contract compiler v0.8.26+commit.8a97fa7a is_partially_verified true file_path src/LaunchpadToken.sol verified_at 2026-09-02T14:29:16Z." }
  - { id: R-3, publisher: Blockscout, title: "Address 0x160E…4898 LaunchpadFactory", url: "https://robinhoodchain.blockscout.com/address/0x160Ea85a96DF909EAC3f79b14c7A69200ceb4898", published_at: null, accessed_at: 2026-09-03T03:12:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-5, CLM-16], excerpt: "hash 0x160Ea85a96DF909EAC3f79b14c7A69200ceb4898 name LaunchpadFactory is_contract true is_verified true creator_address_hash 0xd28d0b3dc4799D04E01A45f13b932ADAb89b7B0d creation_transaction_hash 0x9102fd204e273bd450de621f19876c4dbc3b05591ac5973b41126293e402e31a. Compiler v0.8.26 file_path src/LaunchpadFactory.sol is_partially_verified true verified_at 2026-09-02T14:20:44Z." }
  - { id: R-4, publisher: Blockscout, title: "createToken tx 0xa3712805…22b4", url: "https://robinhoodchain.blockscout.com/tx/0xa3712805aec5b7431566bfefabf1cdf98b135ac57019cf3d7613b23a139322b4", published_at: 2026-09-02T13:32:29Z, accessed_at: 2026-09-03T03:12:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-2, CLM-3, CLM-6, CLM-14, EVT-5], excerpt: "timestamp 2026-09-02T13:32:29.000000Z status ok result success block_number 52613192 from 0x3C74B2e6818D622D0867e771DBa2C264E52fB0B6 (is_contract false) to LaunchpadFactory 0x160Ea85a…4898 method createToken. decoded createToken(string name, string symbol) name Money Mushroom symbol JINQIAN." }
  - { id: R-5, publisher: Robinhood Chain RPC, title: "eth_getCode, name, symbol, factory() on JINQIAN", url: "https://rpc.mainnet.chain.robinhood.com", published_at: null, accessed_at: 2026-09-03T03:05:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-2, CLM-3, CLM-4, CLM-5, CLM-6, CLM-13, CLM-16, CLM-17, CLM-22], excerpt: "eth_blockNumber 0x329ffd4 (53085652). Token code 45 B EIP-1167 impl 0x4c515fce…579e. name Money Mushroom symbol JINQIAN decimals 18 totalSupply 1e27. factory() 0x160Ea85a96DF909EAC3f79b14c7A69200ceb4898. owner() reverts. Factory code 11848 B. Impl code 7228 B." }
  - { id: R-6, publisher: Robinhood Chain RPC, title: "factory stock(), genesisCreator(), tokenImplementation()", url: "https://rpc.mainnet.chain.robinhood.com", published_at: null, accessed_at: 2026-09-03T03:16:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-5, CLM-9, CLM-13, CLM-14, CLM-15, CLM-21, CLM-22], excerpt: "block 53087941. stock() and tokenizedStock() 0x5D2e81cB3A6FECe856B824Dfd7e1d6D3dbaD8cd9. tokenImplementation() 0x4C515fcEeF14Dd08e86D6fa0df0eC7f1Ce2f579e. genesisCreator() 0x3C74B2e6818D622D0867e771DBa2C264E52fB0B6. owner() reverts. poolManager() 0x8366a39CC670B4001A1121B8F6A443A643e40951. Deployer 0xd28d…7B0d code 0x." }
  - { id: R-7, publisher: DexScreener, title: "latest/dex/tokens JINQIAN", url: "https://api.dexscreener.com/latest/dex/tokens/0xe81880c1C5054245e036359f5c7be31606E79F56", published_at: null, accessed_at: 2026-09-03T03:05:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-7, CLM-8, CLM-11, CLM-15, CLM-17, CLM-20, CLM-23, CLM-24], excerpt: "30 robinhood uniswap pairs. Top pairAddress 0x48cff3c087c11b88bab76488f0d17b3e0c3dab113334e8b7a3d1205f1b31d923 labels v4 base Money Mushroom / JINQIAN quote Farmmi, Inc. / FAMI 0x5D2e81cB…8cd9 liquidity.usd 2527116.39 volume.h24 97642283.24 fdv 3101211 marketCap 3101211 pairCreatedAt 1788355949. info.websites [] info.socials []." }
  - { id: R-8, publisher: GeckoTerminal, title: "JINQIAN/FAMI Uniswap v4 pool", url: "https://api.geckoterminal.com/api/v2/networks/robinhood/pools/0x48cff3c087c11b88bab76488f0d17b3e0c3dab113334e8b7a3d1205f1b31d923", published_at: null, accessed_at: 2026-09-03T03:10:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-6, CLM-7, CLM-10, CLM-15, CLM-20, EVT-1], excerpt: "name JINQIAN / FAMI 0.3% pool_created_at 2026-09-02T13:32:29Z fdv_usd 3022372.109 market_cap_usd null volume_usd.h24 95888630.1267705 reserve_in_usd 2583146.3985 transactions.h24 buys 60591 sells 36373. dex uniswap-v4-robinhood quote robinhood_0x5d2e81cb3a6fece856b824dfd7e1d6d3dbad8cd9." }
  - { id: R-9, publisher: GeckoTerminal, title: "Money Mushroom token", url: "https://api.geckoterminal.com/api/v2/networks/robinhood/tokens/0xe81880c1C5054245e036359f5c7be31606E79F56", published_at: null, accessed_at: 2026-09-03T03:10:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-10, CLM-23], excerpt: "name Money Mushroom symbol JINQIAN decimals 18 total_supply 1e27 price_usd 0.003022372109 fdv_usd 3022372.10880748 market_cap_usd null volume_usd.h24 153223013.633876 total_reserve_in_usd 1903653.56. coingecko_coin_id null. Top pool 0x48cf…d923." }
  - { id: R-10, publisher: "@TheDegenBoii", title: "The coin dragged the stock", url: "https://x.com/TheDegenBoii/status/2095228392828186960", published_at: 2026-09-02T19:12:30Z, accessed_at: 2026-09-03T03:15:00Z, kind: social, authority: social, authenticity: confirmed, supports: [EVT-4], excerpt: "Farmmi is a Nasdaq penny stock that sells mushrooms. Its own SEC filings mention a jinqian mushroom. Someone made that the coin. The coin dragged the stock, not the other way around. 12 cents to 50 cents and back, on 820 million shares." }
  - { id: R-11, publisher: The Defiant, title: "Money Mushroom Moved A Nasdaq Penny Stock", url: "https://thedefiant.io/news/tokens/money-mushroom-moved-a-nasdaq-penny-stock-but-its-tokenized-stock-is-a-memecoin-too", published_at: 2026-09-02T19:33:00Z, accessed_at: 2026-09-03T03:15:00Z, kind: news, authority: independent, authenticity: confirmed, supports: [CLM-9, EVT-3], excerpt: "The FAMI token that Money Mushroom trades against on Robinhood Chain is not a Robinhood stock token. Money Mushroom, ticker JINQIAN, deployed at 0xe81880c1C5054245e036359f5c7be31606E79F56 with a one billion token supply. Its pool against FAMI was created at 9:32 a.m. ET." }
  - { id: R-12, publisher: Robinhood, title: "GET /rhj/assets Stock Token registry", url: "https://api.robinhood.com/rhj/assets", published_at: null, accessed_at: 2026-09-03T03:18:00Z, kind: docs, authority: primary, authenticity: confirmed, supports: [CLM-9], excerpt: "HTTP 200. assets length 194. tokenSymbol/tokenName scan for FAMI and FARMMI returned 0 hits. Sample tokenName Salesforce • Robinhood Token with deployments chainId 4663." }
  - { id: R-13, publisher: Telegram, title: "t.me/JinquanCTO", url: "https://t.me/JinquanCTO", published_at: null, accessed_at: 2026-09-03T03:20:00Z, kind: social, authority: social, authenticity: unconfirmed, supports: [CLM-8, CLM-19, EVT-2], excerpt: "HTTP 200. og:title $JINQIAN. og:description You can view and join @JinquanCTO right away. tgme_page_title $JINQIAN. tgme_page_extra 261 subscribers. No contract address in the preview HTML this pass." }
  - { id: R-14, publisher: GeckoTerminal, title: "JINQIAN/FAMI pool page", url: "https://www.geckoterminal.com/robinhood/pools/0x48cff3c087c11b88bab76488f0d17b3e0c3dab113334e8b7a3d1205f1b31d923", published_at: null, accessed_at: 2026-09-03T03:10:00Z, kind: third-party-data, authority: aggregator, authenticity: unconfirmed, supports: [], excerpt: "JINQIAN/FAMI Money Mushroom Price on Uniswap V4 (Robinhood) with 0.3% Fee. Pool 0x48c…d923 JINQIAN 0xe81…9f56 FAMI 0x5d2…8cd9." }
  - { id: R-15, publisher: Blockscout, title: "Factory creation tx 0x9102fd20…e31a", url: "https://robinhoodchain.blockscout.com/tx/0x9102fd204e273bd450de621f19876c4dbc3b05591ac5973b41126293e402e31a", published_at: 2026-09-01T21:34:50Z, accessed_at: 2026-09-03T03:12:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-5, EVT-6], excerpt: "timestamp 2026-09-01T21:34:50.000000Z status ok from 0xd28d0b3dc4799D04E01A45f13b932ADAb89b7B0d (is_contract false) block_number 52043711 created_contract LaunchpadFactory 0x160Ea85a96DF909EAC3f79b14c7A69200ceb4898 is_verified true." }
  - { id: R-16, publisher: Blockscout, title: "Token 0x5D2e…8cd9 Farmmi, Inc. / FAMI", url: "https://robinhoodchain.blockscout.com/address/0x5D2e81cB3A6FECe856B824Dfd7e1d6D3dbaD8cd9", published_at: null, accessed_at: 2026-09-03T03:08:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-9, CLM-21], excerpt: "hash 0x5D2e81cB3A6FECe856B824Dfd7e1d6D3dbaD8cd9 name TokenizedStock is_contract true is_verified true creator_address_hash 0xd28d0b3dc4799D04E01A45f13b932ADAb89b7B0d creation_transaction_hash 0x85f4f3999852a0e5ed633ee5258c2d52fb34006e8c667134d1c896d8fbe7a518. token name Farmmi, Inc. symbol FAMI decimals 18 total_supply 37430000000000000000000000 holders_count 2565." }
  - { id: R-17, publisher: Blockscout, title: "FAMI creation tx 0x85f4f399…a518", url: "https://robinhoodchain.blockscout.com/tx/0x85f4f3999852a0e5ed633ee5258c2d52fb34006e8c667134d1c896d8fbe7a518", published_at: 2026-09-01T21:34:50Z, accessed_at: 2026-09-03T03:12:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-9, CLM-21, EVT-6], excerpt: "timestamp 2026-09-01T21:34:50.000000Z status ok from 0xd28d0b3dc4799D04E01A45f13b932ADAb89b7B0d block_number 52043711 created_contract TokenizedStock 0x5D2e81cB3A6FECe856B824Dfd7e1d6D3dbaD8cd9 is_verified true." }
  - { id: R-18, publisher: Blockscout, title: "TokenLaunched log for JINQIAN", url: "https://robinhoodchain.blockscout.com/tx/0xa3712805aec5b7431566bfefabf1cdf98b135ac57019cf3d7613b23a139322b4", published_at: 2026-09-02T13:32:29Z, accessed_at: 2026-09-03T03:12:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-4, CLM-15, EVT-5], excerpt: "TokenLaunched token 0xe81880c1C5054245e036359f5c7be31606E79F56 creator 0x3C74B2e6818D622D0867e771DBa2C264E52fB0B6 poolId 0x48cff3c087c11b88bab76488f0d17b3e0c3dab113334e8b7a3d1205f1b31d923 lpTokenId 1515367 name Money Mushroom symbol JINQIAN supply 1000000000000000000000000000 blinkEnd 0 timestamp 1788355949. Block 52613192." }
  - { id: R-19, publisher: "@tashiannaputri", title: "$JINQIAN OFFICIAL TG IS LIVE", url: "https://x.com/tashiannaputri/status/2095325187667378523", published_at: 2026-09-03T01:37:08Z, accessed_at: 2026-09-03T03:20:00Z, kind: social, authority: social, authenticity: unconfirmed, supports: [CLM-8, CLM-19, EVT-2], excerpt: "$JINQIAN OFFICIAL TG IS LIVE! TG: https://t.me/JinquanCTO" }
  - { id: R-20, publisher: GeckoTerminal, title: "Robinhood pools page 1", url: "https://api.geckoterminal.com/api/v2/networks/robinhood/pools?page=1", published_at: null, accessed_at: 2026-09-03T03:12:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-10], excerpt: "Row 3 FAMI / USDG 0.3% volume_usd.h24 136610096.55 reserve_in_usd 3610050.87. Row 7 JINQIAN / FAMI 0.3% volume_usd.h24 95889957.05 reserve_in_usd 2584110.99. trending_pools duration=24h first six did not include JINQIAN this pass." }
  - { id: R-21, publisher: Blockscout, title: "LaunchpadFactory verified source", url: "https://robinhoodchain.blockscout.com/address/0x160Ea85a96DF909EAC3f79b14c7A69200ceb4898?tab=contract", published_at: null, accessed_at: 2026-09-03T03:14:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-7, CLM-13], excerpt: "ContractName LaunchpadFactory. Comment: Permissionless launchpad. Anyone can deploy a token that is paired against the company's tokenized stock, with liquidity locked forever, in one transaction. No owner. No admin. No pause. IERC20 public immutable stock; function tokenizedStock()." }

gaps:
  - { priority: P0, question: "Is there an official X handle or site that bidirectionally links to token 0xe818…9F56?", checked: "DexScreener info.websites [] info.socials []; Gecko token has no website; X user search for JINQIAN and Money Mushroom returned unrelated handles; t.me/JinquanCTO preview has no CA, 2026-09-03", next: "re-read DexScreener token profile after a Claim Profile; search new posts that embed the CA and a handle" }
  - { priority: P0, question: "Does Robinhood later list a FAMI Stock Token, and would it share this 0x5D2e…8cd9 address?", checked: "GET api.robinhood.com/rhj/assets 194 assets, 0 FAMI/FARMMI hits; Blockscout name Farmmi, Inc. with no Robinhood Token suffix, 2026-09-03", next: "re-fetch /rhj/assets and docs.robinhood.com/chain/contracts if a FAMI ticker appears" }
  - { priority: P1, question: "Does verified LaunchpadFactory source leave any privileged path despite owner() reverting?", checked: "owner() reverts; source comment No owner / No admin / No pause; feeCollectorAddress and hookAddress returned, 2026-09-03", next: "read createToken and fee-split modifiers in src/LaunchpadFactory.sol on the explorer" }
  - { priority: P1, question: "Does t.me/JinquanCTO pin the CA 0xe818…9F56 or a site that cross-links?", checked: "public preview og:title $JINQIAN, 261 subscribers, no CA in HTML, 2026-09-03", next: "open the join page / first messages if they become public without joining" }
  - { priority: P2, question: "Which Gecko trending window ranked this pool vol #1 at ~$96M / ~$5.1M liq?", checked: "Live Gecko pool volume_usd.h24 95888630 reserve 2583146; DexScreener liquidity.usd 2527116; trending_pools 24h first six had no JINQIAN; pools page 1 row 7, 2026-09-03", next: "archive a Gecko trending screenshot if the rank returns" }
---

# JINQIAN — research packet

## What it is

A one-billion-supply ERC-20 cloned into a Uniswap v4 pool quoted against FAMI. LaunchpadFactory deploys Money Mushroom (JINQIAN) in one createToken call and seeds the JINQIAN/FAMI book. Traders buy and sell JINQIAN on Uniswap v4. No official site or handle was located this pass.

Themes: memecoin, stock-paired:FAMI, rwa

## Why it matters

The JINQIAN/FAMI Uniswap v4 book printed about $95.9M of 24h volume on Gecko at collection, with the quote token using the Farmmi Nasdaq ticker. @TheDegenBoii posted that the coin moved the listed stock. GET /rhj/assets has no FAMI row, so the pair leg is a TokenizedStock at 0x5D2e…8cd9 rather than a Robinhood Stock Token.

## What could go wrong

USD liquidity figures on the JINQIAN/FAMI book count both sides, and the quote side is FAMI, not USDG. A later Robinhood FAMI Stock Token, if issued, would be a different address. No official handle was located, so comms surfaces stay unconfirmed-official.

## Product and mechanics

LaunchpadFactory 0x160E…4898 clones LaunchpadToken via EIP-1167. createToken(name, symbol) from 0x3C74…B0B6 at 2026-09-02T13:32:29Z minted Money Mushroom / JINQIAN supply 1e9*1e18 into Uniswap v4 poolId 0x48cf…d923. factory() on the token returns that factory. genesisCreator() returns the same 0x3C74…B0B6. [verified R-4 R-5 R-6 R-18]

Verified factory source says launches pair against the company's tokenized stock, LP goes to 0xdead, and there is no owner. stock() / tokenizedStock() return FAMI 0x5D2e…8cd9. PoolManager is 0x8366…0951. Secondary JINQIAN/USDG and JINQIAN/ETH books exist on DexScreener with far less liquidity than the FAMI book. [verified R-6 R-7 R-21]

## Control and security

factory owner() reverts. Deployer 0xd28d…7B0d has no code and also created the FAMI token in the same block as the factory. feeCollectorAddress and hookAddress are set at construction. [verified R-6 R-15 R-17]

LaunchpadToken and LaunchpadFactory are partially verified on Blockscout (src/LaunchpadToken.sol, src/LaunchpadFactory.sol, compiler v0.8.26). No audit report URL was located this pass. [verified R-2 R-3] [unknown]

## Team and provenance

No official domain or X handle was located. DexScreener info.websites and info.socials are empty. t.me/JinquanCTO titles $JINQIAN with 261 subscribers and no contract in the public preview; an X account posted it as official TG. Flag unconfirmed-official and third-party-link. [claim R-7 R-13 R-19]

Farmmi Inc. is the Nasdaq issuer whose 20-F names Jinqian (money) mushroom, per The Defiant. That filing was not opened line by line this pass. [claim R-11]

## Economics and activity

JINQIAN/FAMI Uniswap v4 24h volume is 95888630.13 USD and reserve_in_usd is 2583146.40 at 2026-09-03T03:10:00Z from the Gecko pool endpoint. fdv_usd is 3022372.11. Gecko token volume_usd.h24 is 153223013.63 across all pools, not the FAMI book. [claim R-8 R-9]

DexScreener same pair: liquidity.usd 2527116.39, volume.h24 97642283.24, fdv/marketCap 3101211. Blockscout holders_count 9006. Pair created 2026-09-02T13:32:29Z. [claim R-1 R-7]

Gecko networks/robinhood/pools page 1 listed JINQIAN/FAMI as row 7; FAMI/USDG was row 3 at $136.6M 24h volume. trending_pools duration=24h first six did not include JINQIAN this pass. Assignment lead of trending vol #1 at ~$96M / ~$5.1M liq was not reproduced at this as_of; live Gecko reserve is $2.58M. [claim R-8 R-20]

## Material risks

- Quote token FAMI 0x5D2e…8cd9 is not in GET /rhj/assets (194 assets). [verified R-12 R-16]
- Pool USD reserve is JINQIAN plus FAMI, not a USDG or WETH backstop. [claim R-7 R-8]
- No official handle or domain this pass; Telegram is a third-party-link. [claim R-7 R-13]
- No audit report URL this pass. [unknown]

## Verification passes

- Receipts: Blockscout token/impl/factory/FAMI and both create txs, RPC name/symbol/factory/stock/genesisCreator, DexScreener, Gecko pool/token/pools page, /rhj/assets, The Defiant, @TheDegenBoii, Telegram preview, and the TG claim post were opened on 2026-09-03 and excerpts copied from the responses. [verified R-1 R-5 R-8 R-12]
- Numbers: 95888630.13 is the Gecko JINQIAN/FAMI pool 24h volume, not the 153223013.63 token all-pools figure. Reserve 2583146.40 is that pool. DexScreener 97642283.24 / 2527116.39 is the same pair, different aggregator. [claim R-7 R-8 R-9]
- Adversarial: the strongest contrary reading is that FAMI 0x5D2e…8cd9 is a Robinhood Stock Token and JINQIAN is an official Farmmi product. /rhj/assets has no FAMI, the token name has no Robinhood Token suffix, and no official handle or domain was located. [inference R-12 R-16]

## Operations log

- Base: `git -C /Users/harsharnsingh/proofline-pr59 rev-parse origin/main` → 334ca0619aa62e922da83f46de021f06d12348cf. Census 49 slugs have no jinqian / JINQIAN / Money Mushroom / 0xe818…9F56. content/dependencies/stock-tokens.yaml has no FAMI ticker.
- Explorer: Blockscout api/v2 token, impl, factory, FAMI, createToken 0xa371…22b4, factory create 0x9102…e31a, FAMI create 0x85f4…a518, TokenLaunched log, holders. RPC eth_getCode/eth_call with Chrome UA at blocks 53085652–53087941.
- Aggregators: DexScreener latest/dex/tokens and search; Gecko token, pool, token/pools, networks/robinhood/pools page 1, trending_pools duration=24h.
- Registry: GET api.robinhood.com/rhj/assets 194 assets, 0 FAMI.
- Social: X keyword JINQIAN/FAMI/Money Mushroom; from:TheDegenBoii; user search JINQIAN / Money Mushroom / jinqian mushroom; t.me/JinquanCTO preview.
- News: The Defiant 2 Sep article.
- Failed: Blockscout token creator_address_hash null (factory() used instead); docs.robinhood.com/chain/contracts returned SPA HTML with no FAMI string; Gecko trending_pools did not rank this pool #1 this pass.
- Time: collection 2026-09-03T03:00Z–2026-09-03T03:25Z.
