---
# Packet v2 (docs/research-system.md §5). Seed with Icarus What-it-is + events.
contract_version: proofline-research-v2
work_id: WORK-20260903-grok-heavy-icarus-research
producer: grok-heavy
role: collector
base_sha: 334ca0619aa62e922da83f46de021f06d12348cf
slug: looprat
name: Looprat
packet_tier: seed
as_of: 2026-09-03T05:47:00Z
prior_packet: null
supersedes: null
owned_slugs: [looprat]
allowed_paths:
  - research/inbox/packets/looprat/WORK-20260903-grok-heavy-icarus-research.md

identity:
  canonical_name: Looprat
  aliases: ["Autonomous Loop Agent", "Loop Rat"]
  symbols: [Looprat]
  entity_kind: token
  chain_scope: robinhood-native
  official_domain: "NULL — DexScreener info.websites lists only https://github.com/mrbuzzoni/loop-rat; constructor socials website is that repo; README/CHANGELOG/CONTRACT.md have no 0x642d this pass"
  official_handle: "NULL — constructor socials twitter is https://x.com/exittliquidity/status/2095315785535107189; DexScreener info.socials is https://x.com/i/communities/2023756652948975738; @polydao bio lists the CA but constructor twitter is not that handle; flag unconfirmed-official"
  repository: https://github.com/mrbuzzoni/loop-rat
  possible_matches:
    - slug: pons
      signals: [shared-deployer]
      contrary_signals:
        - "Census Pons is the bonding-curve pad at ponsfamily.com / @ponsdotfamily with PonsV2LaunchFactory 0x7eD5…EC7e"
        - "Looprat is the ERC-20 at 0x642d…68c7 created through that factory; entity_kind token, not protocol"
        - "No shared domain or handle; constructor socials name GitHub mrbuzzoni/loop-rat, not ponsfamily.com"
    - slug: agent-name-service
      signals: [other]
      contrary_signals:
        - "Census Agent Name Service is an agent identity registrar at @RHAgentNS with no reproduced 4663 deployment"
        - "Looprat is a PonsV2LauncherToken named Autonomous Loop Agent / Looprat at 0x642d…68c7"
        - "No shared domain, handle, or reproduced address"
    - slug: mancer
      signals: [other]
      contrary_signals:
        - "Census Mancer is a trading aggregator, not a Pons graduation token"
        - "Looprat is a 3248-byte PonsV2LauncherToken in a Uniswap v4 Looprat/ETH book"
        - "No shared domain, handle, or reproduced address"

classification:
  primary_leaf: launch/graduation-token
  secondary_leaves: [agents/agent-product]
  mechanism_tags: [bonding-curve, amm, launchpad, agent]
  ecosystem_role: graduation
  lifecycle: mainnet
  coverage_recommendation: seed
  evidence_state: partly-verified
  rationale: "Not in the 49-row census. Token 0x642d…68c7 is a 3248-byte PonsV2LauncherToken with non-empty code on 4663; name Autonomous Loop Agent / Looprat; launchFactory() returns PonsV2LaunchFactory 0x7eD5…EC7e. PonsV2LaunchAndBuy at 2026-09-03T01:05:21Z minted against pairToken 0x000…000; CurveCompleted / LaunchSwept at 2026-09-03T01:14:30Z. Gecko names the graduated Uniswap v4 book Looprat/WETH (quote 0x000…000, dex pons-v2-dex) and marks launchpad_details.completed true at 2026-09-03T01:15:39Z. Live Gecko pool reserve_in_usd 33450.5213 volume_usd.h24 2043518.18; DexScreener same pair liquidity.usd 33244.88 volume.h24 2068288. Flag ca-collision: several PonsLauncherToken (v1) CAs share the ticker. No bidirectional official handle this pass. [R-1] [R-3] [R-5] [R-6] [R-7] [R-8] [R-9]"

qualifying:
  deployed_on_chain: { status: pass, claim_ids: [CLM-4, CLM-5, CLM-6], note: "" }
  native_play:       { status: pass, claim_ids: [CLM-1, CLM-15], note: "" }
  citable:           { status: pass, claim_ids: [CLM-2, CLM-3, CLM-4], note: "" }
  research_story:    { status: pass, claim_ids: [CLM-1, CLM-9, CLM-10], note: "" }

links:
  - { kind: github, url: "https://github.com/mrbuzzoni/loop-rat", authenticity: unconfirmed }
  - { kind: x, url: "https://x.com/polydao", authenticity: unconfirmed }

deployments:
  - label: Looprat token (PonsV2LauncherToken bytecode)
    role: token
    address:
      value: "0x642d30C84211aDE7768fE557fbAed7224e2068c7"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T05:40:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-1, R-2, R-5]
  - label: PonsV2LaunchDeployer
    role: factory
    address:
      value: "0x3711ceA4feaDE896C913C68F01Eda97Cb06D1A42"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T05:40:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-1, R-18]
  - label: PonsV2LaunchFactory (token launchFactory)
    role: factory
    address:
      value: "0x7eD598BcEf8bd9Edd8C97A195C6d13f40801EC7e"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T05:40:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-4, R-5, R-17]
  - label: PonsV2LaunchAndBuy (create tx to)
    role: router
    address:
      value: "0xe33E9E479dF8802cb0866d5d05258bEc4cF62948"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T05:41:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-3, R-19]
  - label: Pons v2 bonding curve
    role: other
    address:
      value: "0x4c94B5e83BBecb365e8183d2682001C259F1A723"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T05:41:00Z
      exists_on_4663: true
      explorer_source_verified: false
    receipt_ids: [R-3, R-5, R-6, R-20]
  - label: "Looprat ticker collision (Pons v1 PonsLauncherToken, not this row)"
    role: token
    address:
      value: "0xA0974A36ebcDEcBFf49aebf2A3d323624d080764"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T05:40:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-10, R-21]

metrics:
  - { kind: volume_24h, value: 2043518.18, currency: USD, as_of: 2026-09-03T05:43:00Z, window: 24h, method: "api.geckoterminal.com/api/v2/networks/robinhood/pools/0x592abba969c83f98a7be9f5fb89ebcd436d9d16219567be94dfed61fe0d34be2 Looprat/WETH volume_usd.h24 (that pool, not Gecko token all-pools)", class: claim, receipt_ids: [R-8] }
  - { kind: tvl, value: 33450.5213, currency: USD, as_of: 2026-09-03T05:43:00Z, window: point, method: "api.geckoterminal.com/api/v2/networks/robinhood/pools/0x592abba969c83f98a7be9f5fb89ebcd436d9d16219567be94dfed61fe0d34be2 reserve_in_usd (Looprat/WETH pool, not an all-pools figure)", class: claim, receipt_ids: [R-8] }
  - { kind: volume_24h, value: 2068288, currency: USD, as_of: 2026-09-03T05:42:00Z, window: 24h, method: "api.dexscreener.com/latest/dex/tokens/0x642d30C84211aDE7768fE557fbAed7224e2068c7 pair 0x592abb…4be2 Looprat/ETH Uniswap v4 volume.h24", class: claim, receipt_ids: [R-7] }
  - { kind: tvl, value: 33244.88, currency: USD, as_of: 2026-09-03T05:42:00Z, window: point, method: "api.dexscreener.com/latest/dex/tokens/0x642d30C84211aDE7768fE557fbAed7224e2068c7 pair 0x592abb…4be2 Looprat/ETH liquidity.usd (that pool, not an all-pools figure)", class: claim, receipt_ids: [R-7] }
  - { kind: market_cap, value: 133124.77, currency: USD, as_of: 2026-09-03T05:43:00Z, window: point, method: "api.geckoterminal.com/api/v2/networks/robinhood/pools/0x592abb…4be2 fdv_usd (market_cap_usd null)", class: claim, receipt_ids: [R-8] }
  - { kind: holders, value: 1216, currency: null, as_of: 2026-09-03T05:40:00Z, window: point, method: "robinhoodchain.blockscout.com/api/v2/tokens/0x642d30C84211aDE7768fE557fbAed7224e2068c7 holders_count", class: claim, receipt_ids: [R-1] }

reproductions:
  - { id: REP-1, method: explorer-rpc, chain_id: 4663, checked_at: 2026-09-03T05:44:00Z, receipt_ids: [R-5], result: "rpc.mainnet.chain.robinhood.com Chrome UA eth_chainId 0x1237 (4663) eth_blockNumber 0x32b75bf (53179839). Token 0x642d…68c7 eth_getCode 3248 B prefix 6080604052600436, not EIP-1167. name Autonomous Loop Agent, symbol Looprat, decimals 18, totalSupply 1e27. owner() and factory() revert. deployer() 0x89e68b749a1630F408F9A4EFb7A77246CFeF8043 (eth_getCode 0x). launchFactory() 0x7eD598BcEf8bd9Edd8C97A195C6d13f40801EC7e. curve() 0x4c94B5e83BBecb365e8183d2682001C259F1A723. description A local autonomous agent harness that works the night shift on your tasks so you don't have to. socials twitter https://x.com/exittliquidity/status/2095315785535107189?s=46 telegram/discord/farcaster empty website https://github.com/mrbuzzoni/loop-rat. logo ipfs://bafkreiakrmxoc23euvb74osffo4g3qjh2egihl7lykh4xb72zgvolopfvq. Factory code 24177 B; PonsV2LaunchDeployer 20906 B; PonsV2LaunchAndBuy 4416 B; curve 10229 B. Collision 0xA097…0764 and 0x549F…6EC5 eth_getCode 5274 B." }
  - { id: REP-2, method: explorer-ui, chain_id: 4663, checked_at: 2026-09-03T05:41:00Z, receipt_ids: [R-1, R-2, R-3, R-4, R-6, R-17, R-18, R-19, R-20], result: "Blockscout api/v2 token 0x642d…68c7 name Autonomous Loop Agent symbol Looprat holders_count 1216 total_supply 1e27 is_contract true is_verified true name PonsV2LauncherToken file contracts/src/v2/PonsV2LauncherToken.sol compiler v0.8.35 is_fully_verified true verified_at 2026-09-03T01:14:14Z creator_address_hash 0x3711…1A42 creation_transaction_hash 0x910fb4ff…0969. Create tx 2026-09-03T01:05:21Z block 53017112 from EOA 0x89e6…8043 to PonsV2LaunchAndBuy method launchAndBuy name Autonomous Loop Agent symbol Looprat pairToken 0x000…000 quoteIn 53019145802650967 recipient 0x89e6…8043. TokenLaunched token 0x642d…68c7 curve 0x4c94…A723 deployer 0x89e6…8043 pairToken 0x000…000 launchConfigId 0 graduationThreshold 4200000000000000000. CurveCompleted tx 0x28925efe…159a 2026-09-03T01:14:30Z block 53022480 quoteOut 4200000000000000100 tokenOut 285714285714285714285714285; LaunchSwept same amounts. Search q=Looprat returned nine Autonomous Loop Agent rows; this CA holders_count 1216 vs 115 or fewer on the others." }
  - { id: REP-3, method: api, checked_at: 2026-09-03T05:43:00Z, receipt_ids: [R-7, R-8, R-9, R-10], result: "DexScreener latest/dex/tokens/0x642d…68c7: 23 robinhood uniswap pairs; top Looprat/ETH v4 0x592abb…4be2 quote ETH 0x000…000 liquidity.usd 33244.88 volume.h24 2068288 fdv/marketCap 134659 pairCreatedAt 1788398139000 (2026-09-03T01:15:39Z) info.websites https://github.com/mrbuzzoni/loop-rat info.socials https://x.com/i/communities/2023756652948975738. Gecko pool 0x592abb…4be2 name Looprat / WETH dex pons-v2-dex quote robinhood_0x000…000 pool_created_at 2026-09-03T01:15:39Z reserve_in_usd 33450.5213 volume_usd.h24 2043518.18498054 fdv_usd 133124.7733 market_cap_usd null. Gecko token volume_usd.h24 2374928.60958641 (all pools) fdv_usd 133124.773324771 total_reserve_in_usd 31750.74 launchpad_details.completed true completed_at 2026-09-03T01:15:39Z migrated_destination_pool_address 0x592abb…4be2. Search q=Looprat row 0 is that book; later rows include Solana pumpfun 5Wx6c1Tp…pump and Pons v1 robinhood CAs 0xA097…0764 / 0xC94d…D093 / 0x549F…6EC5." }
  - { id: REP-4, method: official-crosslink, checked_at: 2026-09-03T05:45:00Z, receipt_ids: [R-5, R-7, R-11, R-14, R-16, R-23], result: "Constructor socials twitter is an @exittliquidity status; website is https://github.com/mrbuzzoni/loop-rat. DexScreener lists that GitHub as Website and an X community URL as twitter. @polydao bio includes $Looprat and CA 0x642d30c84211ade7768fe557fbaed7224e2068c7. GitHub README/CHANGELOG/CONTRACT.md have no 0x642d this pass. @exittliquidity posted Ca has been added to GitHub and x bio. No bidirectional official handle this pass." }
  - { id: REP-5, method: explorer-ui, chain_id: 4663, checked_at: 2026-09-03T05:45:00Z, receipt_ids: [R-10, R-21], result: "Collision 0xA097…0764 Blockscout name PonsLauncherToken is_verified true creator_address_hash 0x1cbaF24D…1Da149 token name Autonomous Loop Agent symbol Looprat holders_count 29. RPC eth_getCode 5274 B. DexScreener search Looprat/ETH pair 0x6ff9049a…556b liquidity.usd 51872.96 volume.h24 76755.47. Canonical CA is 0x642d…68c7 (1216 holders, flagship 24h volume ~$2.04M)." }

claims:
  - { id: CLM-1, field: product.mechanism, value: "PonsV2LaunchAndBuy.launchAndBuy deploys a 1e9-supply PonsV2LauncherToken onto a Pons v2 bonding curve quoted against pairToken 0x000…000 (native ETH); CurveCompleted / LaunchSwept about nine minutes later and Gecko launchpad_details.completed seed the Uniswap v4 Looprat/ETH book 0x592abb…4be2. Token owner() reverts. Verified source: entire supply mints to the curve; deployer is immutable reference data with no token privileges.", class: verified, observed_at: 2026-09-03T05:44:00Z, receipt_ids: [R-2, R-3, R-4, R-5, R-6, R-8], reproduction_ids: [REP-1, REP-2, REP-3], supersedes: null }
  - { id: CLM-2, field: identity.name, value: "Autonomous Loop Agent", class: verified, observed_at: 2026-09-03T05:40:00Z, receipt_ids: [R-1, R-3, R-5], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-3, field: identity.symbol, value: "Looprat", class: verified, observed_at: 2026-09-03T05:40:00Z, receipt_ids: [R-1, R-3, R-5], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-4, field: deployment.address, value: "0x642d30C84211aDE7768fE557fbAed7224e2068c7", class: verified, observed_at: 2026-09-03T05:40:00Z, receipt_ids: [R-1, R-3, R-5], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-5, field: deployment.address, value: "0x7eD598BcEf8bd9Edd8C97A195C6d13f40801EC7e", class: verified, observed_at: 2026-09-03T05:44:00Z, receipt_ids: [R-4, R-5, R-17], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-6, field: lifecycle, value: mainnet, class: verified, observed_at: 2026-09-03T05:43:00Z, receipt_ids: [R-1, R-3, R-5, R-7, R-8], reproduction_ids: [REP-1, REP-2, REP-3], supersedes: null }
  - { id: CLM-7, field: taxonomy.primary-leaf, value: launch/graduation-token, class: claim, observed_at: 2026-09-03T05:47:00Z, receipt_ids: [R-3, R-6, R-8], reproduction_ids: [], supersedes: null }
  - { id: CLM-8, field: identity.handle, value: "NULL — no bidirectional official handle; constructor twitter is an @exittliquidity status; DexScreener socials is an X community URL; @polydao bio lists the CA; flag unconfirmed-official", class: claim, observed_at: 2026-09-03T05:45:00Z, receipt_ids: [R-5, R-7, R-11, R-23], reproduction_ids: [], supersedes: null }
  - { id: CLM-9, field: relationship, value: "Pair quote is native ETH 0x000…000; Gecko names the same pool Looprat/WETH on dex pons-v2-dex. Wrapped WETH 0x0Bd7…AD73 appears in the CurveCompleted tx as a wrap path and as a thinner secondary DexScreener book. Distinct from census Pons (the pad) and from Pons v1 PonsLauncherToken ticker collisions. Flag ca-collision and wrong-chain (Solana pumpfun row).", class: verified, observed_at: 2026-09-03T05:45:00Z, receipt_ids: [R-6, R-7, R-8, R-10, R-21], reproduction_ids: [REP-2, REP-3, REP-5], supersedes: null }
  - { id: CLM-10, field: economics.metric, value: "Looprat/WETH Uniswap v4 24h volume 2043518.18 USD and reserve_in_usd 33450.5213 at 2026-09-03T05:43:00Z (Gecko pool 0x592abb…4be2)", class: verified, observed_at: 2026-09-03T05:43:00Z, receipt_ids: [R-8], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-11, field: economics.metric, value: "DexScreener same pair labeled Looprat/ETH liquidity.usd 33244.88 volume.h24 2068288 fdv/marketCap 134659 at 2026-09-03T05:42:00Z; 23 robinhood uniswap pairs on latest/dex/tokens", class: verified, observed_at: 2026-09-03T05:42:00Z, receipt_ids: [R-7], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-12, field: economics.metric, value: 1216, class: verified, observed_at: 2026-09-03T05:40:00Z, receipt_ids: [R-1], reproduction_ids: [REP-2], supersedes: null }
  - { id: CLM-13, field: control.owner, value: "token owner() reverts; verified PonsV2LauncherToken source says deployer is immutable reference data and confers no privileges. deployer() 0x89e6…8043 has empty code and equals the launchAndBuy from address. Constructor param 0xCA1c…9d2F received creatorAmount on FeesSwept.", class: verified, observed_at: 2026-09-03T05:44:00Z, receipt_ids: [R-2, R-3, R-5, R-6], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-14, field: control.privileged-role, value: "launchFactory 0x7eD5…EC7e; curve 0x4c94…A723; creator-fee recipient 0xCA1c…9d2F; protocol fee to SafeProxy 0x263e…19Dd via V2FeeEscrow 0xd3AF…Ac9e", class: verified, observed_at: 2026-09-03T05:44:00Z, receipt_ids: [R-5, R-6], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-15, field: other, value: "Pair asset is native ETH 0x0000000000000000000000000000000000000000; venue is Uniswap v4 pair 0x592abba969c83f98a7be9f5fb89ebcd436d9d16219567be94dfed61fe0d34be2 (Gecko name Looprat/WETH, DexScreener name Looprat/ETH). ETH is a rail, not this profile.", class: verified, observed_at: 2026-09-03T05:43:00Z, receipt_ids: [R-6, R-7, R-8], reproduction_ids: [REP-2, REP-3], supersedes: null }
  - { id: CLM-16, field: deployment.role, value: "Token creator_address_hash is PonsV2LaunchDeployer 0x3711…1A42; launchFactory() names PonsV2LaunchFactory 0x7eD5…EC7e, not LongLauncher, LaunchpadFactory, pools.trade, or hood.fun", class: verified, observed_at: 2026-09-03T05:40:00Z, receipt_ids: [R-1, R-3, R-5], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-17, field: taxonomy.chain-scope, value: robinhood-native, class: verified, observed_at: 2026-09-03T05:42:00Z, receipt_ids: [R-5, R-7], reproduction_ids: [REP-1, REP-3], supersedes: null }
  - { id: CLM-18, field: security.audit, value: "No audit report URL was located on Blockscout, DexScreener, Gecko, GitHub README, or X search this pass", class: unknown, observed_at: 2026-09-03T05:47:00Z, receipt_ids: [], reproduction_ids: [], supersedes: null }
  - { id: CLM-19, field: communications.status, value: "unconfirmed-official: constructor twitter is https://x.com/exittliquidity/status/2095315785535107189; DexScreener lists an X community URL; @polydao bio lists the CA; GitHub README has no CA this pass", class: claim, observed_at: 2026-09-03T05:45:00Z, receipt_ids: [R-5, R-7, R-11, R-16, R-23], reproduction_ids: [], supersedes: null }
  - { id: CLM-20, field: economics.metric, value: "Assignment lead Prior Gecko Looprat/WETH liq ~$29,894 vol ~$1,951,647 was not the live Gecko pool slice this pass (33450.5213 / 2043518.18 at 2026-09-03T05:43:00Z). A later Gecko GET printed reserve_in_usd 33018.8999 volume_usd.h24 2043766.62; packet uses the first 200 GET.", class: verified, observed_at: 2026-09-03T05:43:00Z, receipt_ids: [R-8], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-21, field: deployment.address, value: "0x4c94B5e83BBecb365e8183d2682001C259F1A723", class: verified, observed_at: 2026-09-03T05:44:00Z, receipt_ids: [R-3, R-5, R-6, R-20], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-22, field: identity.repository, value: "https://github.com/mrbuzzoni/loop-rat", class: claim, observed_at: 2026-09-03T05:43:00Z, receipt_ids: [R-5, R-7, R-16], reproduction_ids: [], supersedes: null }
  - { id: CLM-23, field: identity.domain, value: "NULL — DexScreener info.websites lists only the GitHub repo; constructor socials website is that repo; no separate product domain this pass", class: claim, observed_at: 2026-09-03T05:42:00Z, receipt_ids: [R-5, R-7, R-16], reproduction_ids: [], supersedes: null }
  - { id: CLM-24, field: candidate, value: "looprat | Looprat | NULL | NULL — discovery token not in census 49", class: claim, observed_at: 2026-09-03T05:47:00Z, receipt_ids: [R-1, R-7], reproduction_ids: [], supersedes: null }
  - { id: CLM-25, field: other, value: "ca-collision: Blockscout search listed eight other Autonomous Loop Agent CAs. Highest-liq DexScreener collision is Pons v1 0xA0974A36ebcDEcBFf49aebf2A3d323624d080764 (5274 B, creator 0x1cbaF24D…1Da149, holders_count 29, Looprat/ETH liq 51872.96 vol.h24 76755.47). Also 0xC94d…D093, 0x549F…6EC5, 0x3Cf8…5dBf. Canonical CA is 0x642d…68c7.", class: verified, observed_at: 2026-09-03T05:45:00Z, receipt_ids: [R-10, R-21], reproduction_ids: [REP-3, REP-5], supersedes: null }
  - { id: CLM-26, field: relationship, value: "wrong-chain name collision: DexScreener search also returned Solana pumpfun 5Wx6c1Tp926t2VxzcHSUjbLAL5GEJqLFUiPtB2Zbpump named Looprat. This packet is robinhood 0x642d…68c7 only.", class: claim, observed_at: 2026-09-03T05:42:00Z, receipt_ids: [R-10], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-27, field: "account.@polydao.role", value: project, class: claim, observed_at: 2026-09-03T05:45:00Z, receipt_ids: [R-11, R-23], reproduction_ids: [], supersedes: null }
  - { id: CLM-28, field: "account.@polydao.slug", value: looprat, class: claim, observed_at: 2026-09-03T05:45:00Z, receipt_ids: [R-11, R-23], reproduction_ids: [], supersedes: null }
  - { id: CLM-29, field: "account.@polydao.flags", value: unconfirmed-official, class: claim, observed_at: 2026-09-03T05:45:00Z, receipt_ids: [R-5, R-11, R-23], reproduction_ids: [], supersedes: null }
  - { id: CLM-30, field: taxonomy.secondary-leaf, value: agents/agent-product, class: claim, observed_at: 2026-09-03T05:47:00Z, receipt_ids: [R-16, R-11], reproduction_ids: [], supersedes: null }
  - { id: CLM-31, field: "account.@exittliquidity.flags", value: unconfirmed-official, class: claim, observed_at: 2026-09-03T05:45:00Z, receipt_ids: [R-5, R-14, R-15], reproduction_ids: [], supersedes: null }
  - { id: CLM-32, field: economics.metric, value: "Gecko token volume_usd.h24 2374928.60958641 across all pools, not the Looprat/WETH book 2043518.18", class: verified, observed_at: 2026-09-03T05:43:00Z, receipt_ids: [R-8, R-9], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-33, field: identity.alias, value: "Loop Rat", class: claim, observed_at: 2026-09-03T05:43:00Z, receipt_ids: [R-16], reproduction_ids: [], supersedes: null }

conflicts:
  - id: CON-1
    field: economics.metric
    claim_ids: [CLM-10, CLM-11, CLM-32]
    material_effect: "24h volume is $2.043518M on the Gecko flagship pool, $2.068288M on DexScreener for the same pool, and $2.374929M on the Gecko token all-pools figure; a card that collapses them would misstate activity"
    status: open
    resolution: null
  - id: CON-2
    field: economics.metric
    claim_ids: [CLM-10, CLM-11]
    material_effect: "Flagship-pool liquidity is $33450.52 on Gecko reserve_in_usd and $33244.88 on DexScreener liquidity.usd at the first 200 GET"
    status: open
    resolution: null

events:
  - id: EVT-1
    type: onchain
    title: "Gecko Looprat/WETH 24h volume $2.04M, liquidity $33.5k"
    summary: "Uniswap v4 pool 0x592abb…4be2 volume_usd.h24 2043518 reserve_in_usd 33450 fdv_usd 133125."
    occurred_at: 2026-09-03T05:43:00Z
    observed_at: 2026-09-03T05:43:00Z
    affected_fields: [economics.metric, activity.status]
    evidence_state: verified
    impact: material
    site_recommendation: both
    channel_recommendation: none
    receipt_ids: [R-8]
  - id: EVT-2
    type: ct
    title: "@polydao posted more on the Looprat harness"
    summary: "Post: thank you for the support on $Looprat; install.sh drops CONTRACT.md and loops; CA in bio."
    occurred_at: 2026-09-03T02:16:46Z
    observed_at: 2026-09-03T05:41:00Z
    affected_fields: [identity.handle, communications.status, product.mechanism]
    evidence_state: claim
    impact: material
    site_recommendation: both
    channel_recommendation: none
    receipt_ids: [R-11]
  - id: EVT-3
    type: ct
    title: "@polydao posted fees reinvested and a buyback"
    summary: "Post: started Looprat on the fly; fees reinvested into the technology; was told buyback help the community."
    occurred_at: 2026-09-03T01:44:01Z
    observed_at: 2026-09-03T05:41:00Z
    affected_fields: [communications.status, activity.status]
    evidence_state: claim
    impact: material
    site_recommendation: feed
    channel_recommendation: none
    receipt_ids: [R-12]
  - id: EVT-4
    type: ct
    title: "@polydao posted claimed creator fees on $looprat"
    summary: "Post: i just claimed the creator fees on $looprat; all of it goes straight back into building."
    occurred_at: 2026-09-03T01:32:54Z
    observed_at: 2026-09-03T05:41:00Z
    affected_fields: [communications.status, control.privileged-role]
    evidence_state: claim
    impact: routine
    site_recommendation: feed
    channel_recommendation: none
    receipt_ids: [R-13]
  - id: EVT-5
    type: ct
    title: "@exittliquidity posted CA added to GitHub and X bio"
    summary: "Post: Ca has been added to GitHub and x bio, then 0x642d30c84211ade7768fe557fbaed7224e2068c7."
    occurred_at: 2026-09-03T01:31:25Z
    observed_at: 2026-09-03T05:41:00Z
    affected_fields: [identity.handle, identity.repository, communications.status]
    evidence_state: claim
    impact: routine
    site_recommendation: profile
    channel_recommendation: none
    receipt_ids: [R-14]
  - id: EVT-6
    type: onchain
    title: "CurveCompleted / LaunchSwept into Looprat/ETH"
    summary: "Tx 0x28925efe…159a at 2026-09-03T01:14:30Z; quoteOut 4.2e18; Gecko completed_at 01:15:39Z."
    occurred_at: 2026-09-03T01:14:30Z
    observed_at: 2026-09-03T05:44:00Z
    affected_fields: [deployment.address, product.mechanism, lifecycle]
    evidence_state: verified
    impact: material
    site_recommendation: profile
    channel_recommendation: none
    receipt_ids: [R-6, R-8]
  - id: EVT-7
    type: onchain
    title: "PonsV2LaunchAndBuy minted Autonomous Loop Agent"
    summary: "Tx 0x910fb4ff…0969 from 0x89e6…8043 at 2026-09-03T01:05:21Z; pairToken 0x000…000; TokenLaunched."
    occurred_at: 2026-09-03T01:05:21Z
    observed_at: 2026-09-03T05:41:00Z
    affected_fields: [deployment.address, lifecycle, product.mechanism]
    evidence_state: verified
    impact: material
    site_recommendation: profile
    channel_recommendation: none
    receipt_ids: [R-3, R-4]
  - id: EVT-8
    type: ct
    title: "@exittliquidity posted a token to support @polydao"
    summary: "Post: We are creating a token to support and find his work. Constructor socials twitter is this status."
    occurred_at: 2026-09-03T00:59:47Z
    observed_at: 2026-09-03T05:41:00Z
    affected_fields: [identity.handle, communications.status]
    evidence_state: claim
    impact: material
    site_recommendation: feed
    channel_recommendation: none
    receipt_ids: [R-15]

receipts:
  - { id: R-1, publisher: Blockscout, title: "Token 0x642d…68c7 Autonomous Loop Agent / Looprat", url: "https://robinhoodchain.blockscout.com/address/0x642d30C84211aDE7768fE557fbAed7224e2068c7", published_at: null, accessed_at: 2026-09-03T05:40:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-2, CLM-3, CLM-4, CLM-6, CLM-12, CLM-16, CLM-24], excerpt: "hash 0x642d30C84211aDE7768fE557fbAed7224e2068c7 name PonsV2LauncherToken is_contract true is_verified true proxy_type null. token name Autonomous Loop Agent symbol Looprat decimals 18 total_supply 1000000000000000000000000000 holders_count 1216 type ERC-20. creator_address_hash 0x3711ceA4feaDE896C913C68F01Eda97Cb06D1A42 creation_transaction_hash 0x910fb4ff4651485ef01a781321a93903d36758357361a7f6d22c3d00f3830969." }
  - { id: R-2, publisher: Blockscout, title: "PonsV2LauncherToken verified source", url: "https://robinhoodchain.blockscout.com/address/0x642d30C84211aDE7768fE557fbAed7224e2068c7?tab=contract", published_at: null, accessed_at: 2026-09-03T05:41:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-13], excerpt: "ContractName PonsV2LauncherToken file_path contracts/src/v2/PonsV2LauncherToken.sol compiler v0.8.35+commit.47b9dedd is_fully_verified true verified_at 2026-09-03T01:14:14.452772Z. Comment: entire supply mints to the bonding curve; deployer is immutable reference data for off-chain attribution only, and confers no privileges over the token." }
  - { id: R-3, publisher: Blockscout, title: "launchAndBuy tx 0x910fb4ff…0969", url: "https://robinhoodchain.blockscout.com/tx/0x910fb4ff4651485ef01a781321a93903d36758357361a7f6d22c3d00f3830969", published_at: 2026-09-03T01:05:21Z, accessed_at: 2026-09-03T05:41:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-2, CLM-3, CLM-4, CLM-6, CLM-13, CLM-16, CLM-21, EVT-7], excerpt: "timestamp 2026-09-03T01:05:21.000000Z status ok block_number 53017112 from 0x89e68b749a1630F408F9A4EFb7A77246CFeF8043 (is_contract false) to PonsV2LaunchAndBuy 0xe33E9E479dF8802cb0866d5d05258bEc4cF62948 method launchAndBuy. params name Autonomous Loop Agent symbol Looprat twitter https://x.com/exittliquidity/status/2095315785535107189 website https://github.com/mrbuzzoni/loop-rat pairToken 0x000…000 quoteIn 53019145802650967." }
  - { id: R-4, publisher: Blockscout, title: "TokenLaunched log for Looprat", url: "https://robinhoodchain.blockscout.com/tx/0x910fb4ff4651485ef01a781321a93903d36758357361a7f6d22c3d00f3830969", published_at: 2026-09-03T01:05:21Z, accessed_at: 2026-09-03T05:41:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-5, CLM-14, EVT-7], excerpt: "PonsV2LaunchFactory TokenLaunched token 0x642d30C84211aDE7768fE557fbAed7224e2068c7 curve 0x4c94B5e83BBecb365e8183d2682001C259F1A723 deployer 0x89e68b749a1630F408F9A4EFb7A77246CFeF8043 pairToken 0x0000000000000000000000000000000000000000 launchConfigId 0 graduationThreshold 4200000000000000000. Block 53017112." }
  - { id: R-5, publisher: Robinhood Chain RPC, title: "eth_getCode, name, symbol, launchFactory() on Looprat", url: "https://rpc.mainnet.chain.robinhood.com", published_at: null, accessed_at: 2026-09-03T05:44:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-2, CLM-3, CLM-4, CLM-5, CLM-6, CLM-8, CLM-13, CLM-14, CLM-16, CLM-17, CLM-19, CLM-21, CLM-22, CLM-23, CLM-31], excerpt: "eth_chainId 0x1237 eth_blockNumber 0x32b75bf (53179839). Token code 3248 B prefix 60806040. name Autonomous Loop Agent symbol Looprat decimals 18 totalSupply 1e27. owner() reverts. deployer() 0x89e68b749a1630F408F9A4EFb7A77246CFeF8043 code 0x. launchFactory() 0x7eD598BcEf8bd9Edd8C97A195C6d13f40801EC7e. curve() 0x4c94B5e83BBecb365e8183d2682001C259F1A723. socials twitter https://x.com/exittliquidity/status/2095315785535107189 website https://github.com/mrbuzzoni/loop-rat." }
  - { id: R-6, publisher: Blockscout, title: "CurveCompleted / LaunchSwept tx 0x28925efe…159a", url: "https://robinhoodchain.blockscout.com/tx/0x28925efe2ef962d6b436d823fa9fef9ef217c12fe0cca7d0e3fdcc351bb5159a", published_at: 2026-09-03T01:14:30Z, accessed_at: 2026-09-03T05:44:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-7, CLM-9, CLM-13, CLM-14, CLM-15, CLM-21, EVT-6], excerpt: "timestamp 2026-09-03T01:14:30.000000Z status ok block_number 53022480 from 0xaF2e73809A8febE7b59A4cc705DE8598439FE71b to 0xb1000000096BD2f8ca9b6883182ECCAf31E7c3Fd. CurveCompleted quoteOut 4200000000000000100 tokenOut 285714285714285714285714285. LaunchSwept token 0x642d…68c7. FeesSwept creatorAmount 4053595073549209 to 0xCA1c…9d2F. WETH 0x0Bd7…AD73 transfers in the same tx." }
  - { id: R-7, publisher: DexScreener, title: "latest/dex/tokens Looprat", url: "https://api.dexscreener.com/latest/dex/tokens/0x642d30C84211aDE7768fE557fbAed7224e2068c7", published_at: null, accessed_at: 2026-09-03T05:42:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-6, CLM-8, CLM-9, CLM-11, CLM-15, CLM-17, CLM-19, CLM-22, CLM-23, CLM-24, EVT-1], excerpt: "23 robinhood uniswap pairs. Top pairAddress 0x592abba969c83f98a7be9f5fb89ebcd436d9d16219567be94dfed61fe0d34be2 labels v4 base Autonomous Loop Agent / Looprat quote Ether / ETH 0x000…000 liquidity.usd 33244.88 volume.h24 2068288 fdv 134659 marketCap 134659 pairCreatedAt 1788398139000. info.websites https://github.com/mrbuzzoni/loop-rat info.socials https://x.com/i/communities/2023756652948975738." }
  - { id: R-8, publisher: GeckoTerminal, title: "Looprat/WETH Uniswap v4 pool", url: "https://api.geckoterminal.com/api/v2/networks/robinhood/pools/0x592abba969c83f98a7be9f5fb89ebcd436d9d16219567be94dfed61fe0d34be2", published_at: null, accessed_at: 2026-09-03T05:43:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-1, CLM-6, CLM-7, CLM-9, CLM-10, CLM-15, CLM-20, CLM-32, EVT-1, EVT-6], excerpt: "name Looprat / WETH pool_created_at 2026-09-03T01:15:39Z fdv_usd 133124.7733 market_cap_usd null volume_usd.h24 2043518.18498054 reserve_in_usd 33450.5213. dex pons-v2-dex quote robinhood_0x0000000000000000000000000000000000000000. First GET HTTP 200 this pass." }
  - { id: R-9, publisher: GeckoTerminal, title: "Autonomous Loop Agent token", url: "https://api.geckoterminal.com/api/v2/networks/robinhood/tokens/0x642d30C84211aDE7768fE557fbAed7224e2068c7", published_at: null, accessed_at: 2026-09-03T05:43:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-32], excerpt: "name Autonomous Loop Agent symbol Looprat decimals 18 total_supply 1e27 price_usd 0.0001331247733 fdv_usd 133124.773324771 market_cap_usd null volume_usd.h24 2374928.60958641 total_reserve_in_usd 31750.74. launchpad_details graduation_percentage 100 completed true completed_at 2026-09-03T01:15:39.000Z migrated_destination_pool_address 0x592abb…4be2." }
  - { id: R-10, publisher: DexScreener, title: "search q=Looprat", url: "https://api.dexscreener.com/latest/dex/search?q=Looprat", published_at: null, accessed_at: 2026-09-03T05:42:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-9, CLM-25, CLM-26], excerpt: "Row 0 robinhood uniswap v4 Looprat/ETH 0x642d…68c7 pair 0x592abb…4be2 liq 33244.88 vol.h24 2068288. Solana pumpfun 5Wx6c1Tp926t2VxzcHSUjbLAL5GEJqLFUiPtB2Zbpump. Other robinhood Looprat/ETH rows 0xA097…0764 liq 51872.96 vol 76755.47, 0xC94d…D093, 0x549F…6EC5, 0x3Cf8…5dBf." }
  - { id: R-11, publisher: "@polydao", title: "thank you for the support on $Looprat", url: "https://x.com/polydao/status/2095335160434614547", published_at: 2026-09-03T02:16:46Z, accessed_at: 2026-09-03T05:41:00Z, kind: social, authority: social, authenticity: unconfirmed, supports: [CLM-8, CLM-19, CLM-27, CLM-28, CLM-29, CLM-30, EVT-2], excerpt: "Profile: Mr. Buzzoni @polydao. Bio includes $Looprat and CA: 0x642d30c84211ade7768fe557fbaed7224e2068c7. Post: thank you for the support on $Looprat. install.sh drops CONTRACT.md, .claude/loops/, bin/, and kill.sh. three loops: pr-hunter, test-mender, digest." }
  - { id: R-12, publisher: "@polydao", title: "I started Looprat on the fly as a social experiment", url: "https://x.com/polydao/status/2095326918748807416", published_at: 2026-09-03T01:44:01Z, accessed_at: 2026-09-03T05:41:00Z, kind: social, authority: social, authenticity: unconfirmed, supports: [EVT-3], excerpt: "I started Looprat on the fly as a social experiment but now that it has gained enough attention I'll be running more upgrades and the fees generated from the community that created the Looprat token will be reinvested into the technology. I was told buyback help the community I'll be doing that." }
  - { id: R-13, publisher: "@polydao", title: "i just claimed the creator fees on $looprat", url: "https://x.com/polydao/status/2095324121685016598", published_at: 2026-09-03T01:32:54Z, accessed_at: 2026-09-03T05:41:00Z, kind: social, authority: social, authenticity: unconfirmed, supports: [EVT-4], excerpt: "i just claimed the creator fees on $looprat all of it goes straight back into building. scalability, more loops shipped, faster iteration, better docs. JUST BUIDL" }
  - { id: R-14, publisher: "@exittliquidity", title: "Ca has been added to GitHub and x bio", url: "https://x.com/exittliquidity/status/2095323748303814699", published_at: 2026-09-03T01:31:25Z, accessed_at: 2026-09-03T05:41:00Z, kind: social, authority: social, authenticity: unconfirmed, supports: [CLM-19, CLM-31, EVT-5], excerpt: "Ca has been added to GitHub and x bio 0x642d30c84211ade7768fe557fbaed7224e2068c7" }
  - { id: R-15, publisher: "@exittliquidity", title: "best use of Loop Engineering / creating a token", url: "https://x.com/exittliquidity/status/2095315785535107189", published_at: 2026-09-03T00:59:47Z, accessed_at: 2026-09-03T05:41:00Z, kind: social, authority: social, authenticity: unconfirmed, supports: [CLM-8, CLM-19, CLM-31, EVT-8], excerpt: "Constructor socials twitter. Post: @polydao built a local autonomous agent harness that works the night shift on your tasks so you don't have to. We are creating a token to support and find his work Speaking to him now and explaining the whole process." }
  - { id: R-16, publisher: GitHub, title: "mrbuzzoni/loop-rat README", url: "https://github.com/mrbuzzoni/loop-rat", published_at: 2026-09-02T23:18:37Z, accessed_at: 2026-09-03T05:43:00Z, kind: repository, authority: primary, authenticity: unconfirmed, supports: [CLM-19, CLM-22, CLM-23, CLM-30, CLM-33], excerpt: "full_name mrbuzzoni/loop-rat created_at 2026-09-02T23:18:37Z pushed_at 2026-09-03T00:13:59Z license MIT. README title Loop Rat. An autonomous loop agent. It is a folder you drop into a repository. README/CHANGELOG/CONTRACT.md have no 0x642d this pass. homepage null." }
  - { id: R-17, publisher: Blockscout, title: "Address 0x7eD5…EC7e PonsV2LaunchFactory", url: "https://robinhoodchain.blockscout.com/address/0x7eD598BcEf8bd9Edd8C97A195C6d13f40801EC7e", published_at: null, accessed_at: 2026-09-03T05:45:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-5], excerpt: "hash 0x7eD598BcEf8bd9Edd8C97A195C6d13f40801EC7e name PonsV2LaunchFactory is_contract true is_verified true creator_address_hash 0xFdDE5a1E3cDF791Da71E49F817D70C7ceD72CC36." }
  - { id: R-18, publisher: Blockscout, title: "Address 0x3711…1A42 PonsV2LaunchDeployer", url: "https://robinhoodchain.blockscout.com/address/0x3711ceA4feaDE896C913C68F01Eda97Cb06D1A42", published_at: null, accessed_at: 2026-09-03T05:45:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-16], excerpt: "hash 0x3711ceA4feaDE896C913C68F01Eda97Cb06D1A42 name PonsV2LaunchDeployer is_contract true is_verified true creator_address_hash 0xFdDE5a1E3cDF791Da71E49F817D70C7ceD72CC36." }
  - { id: R-19, publisher: Blockscout, title: "Address 0xe33E…2948 PonsV2LaunchAndBuy", url: "https://robinhoodchain.blockscout.com/address/0xe33E9E479dF8802cb0866d5d05258bEc4cF62948", published_at: null, accessed_at: 2026-09-03T05:45:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1], excerpt: "hash 0xe33E9E479dF8802cb0866d5d05258bEc4cF62948 name PonsV2LaunchAndBuy is_contract true is_verified true creator_address_hash 0xFdDE5a1E3cDF791Da71E49F817D70C7ceD72CC36." }
  - { id: R-20, publisher: Blockscout, title: "Address 0x4c94…A723 bonding curve", url: "https://robinhoodchain.blockscout.com/address/0x4c94B5e83BBecb365e8183d2682001C259F1A723", published_at: null, accessed_at: 2026-09-03T05:45:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-21], excerpt: "hash 0x4c94B5e83BBecb365e8183d2682001C259F1A723 name null is_contract true is_verified false creator_address_hash 0x3711ceA4feaDE896C913C68F01Eda97Cb06D1A42 creation_transaction_hash 0x910fb4ff4651485ef01a781321a93903d36758357361a7f6d22c3d00f3830969." }
  - { id: R-21, publisher: Blockscout, title: "Token 0xA097…0764 Autonomous Loop Agent / Looprat", url: "https://robinhoodchain.blockscout.com/address/0xA0974A36ebcDEcBFf49aebf2A3d323624d080764", published_at: null, accessed_at: 2026-09-03T05:40:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-9, CLM-25], excerpt: "hash 0xA0974A36ebcDEcBFf49aebf2A3d323624d080764 name PonsLauncherToken is_contract true is_verified true creator_address_hash 0x1cbaF24D53fe930fCe8EFF149fA797D2611Da149. token name Autonomous Loop Agent symbol Looprat holders_count 29. Not PonsV2LauncherToken 0x642d…68c7." }
  - { id: R-22, publisher: Blockscout, title: "api/v2/search q=Looprat", url: "https://robinhoodchain.blockscout.com/api/v2/search?q=Looprat", published_at: null, accessed_at: 2026-09-03T05:39:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-25], excerpt: "9 token hits named Autonomous Loop Agent. First 0x642d30C84211aDE7768fE557fbAed7224e2068c7 symbol Looprat is_smart_contract_verified true. Also 0x549F…6EC5, 0xC94d…D093, 0x3Cf8…5dBf, 0x33e4…0762, 0x5abc…3F0C, 0xA097…0764, 0x9402…1111 symbol LOOPRAT unverified, 0x1c05…d010." }
  - { id: R-23, publisher: "@polydao", title: "X profile bio lists Looprat CA", url: "https://x.com/polydao", published_at: null, accessed_at: 2026-09-03T05:41:00Z, kind: social, authority: social, authenticity: unconfirmed, supports: [CLM-8, CLM-19, CLM-27, CLM-28, CLM-29], excerpt: "Name Mr. Buzzoni handle @polydao. Bio: +15k MRR for AI brands • AI dev • co-founder @polynternet • DMs closed, contact me by my email. $Looprat CA: 0x642d30c84211ade7768fe557fbaed7224e2068c7" }
  - { id: R-24, publisher: "@elmo_arab", title: "$LOOPRAT next sender on RH with CA", url: "https://x.com/elmo_arab/status/2095349663306072167", published_at: 2026-09-03T03:14:24Z, accessed_at: 2026-09-03T05:39:00Z, kind: social, authority: social, authenticity: unconfirmed, supports: [CLM-4], excerpt: "once the big eyes catch $LOOPRAT, these dips won’t be coming back. just a matter of time before $LOOPRAT becomes the next sender on RH. 0x642d30c84211ade7768fe557fbaed7224e2068c7" }
  - { id: R-25, publisher: Blockscout, title: "PonsV2LauncherToken source API", url: "https://robinhoodchain.blockscout.com/api/v2/smart-contracts/0x642d30C84211aDE7768fE557fbAed7224e2068c7", published_at: null, accessed_at: 2026-09-03T05:41:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-13], excerpt: "name PonsV2LauncherToken file_path contracts/src/v2/PonsV2LauncherToken.sol is_fully_verified true. Source: deployer is carried here as immutable reference data for off-chain attribution only, and confers no privileges over the token. Entire supply mints to the bonding curve." }

gaps:
  - { priority: P0, question: "Does GitHub mrbuzzoni/loop-rat or @polydao later bidirectionally pin 0x642d…68c7 from a committed file, not only the X bio?", checked: "README/CHANGELOG/CONTRACT.md have no 0x642d; GitHub code search 401 without token; @polydao bio lists the CA; constructor twitter is @exittliquidity, 2026-09-03", next: "re-read README and DexScreener info.socials after a Claim Profile" }
  - { priority: P0, question: "Which PoolGraduated / V2LaunchLocker tx locked the Uniswap v4 position after CurveCompleted 0x28925efe…159a?", checked: "CurveCompleted / LaunchSwept at 2026-09-03T01:14:30Z; Gecko completed_at 2026-09-03T01:15:39Z matches DexScreener pairCreatedAt; factory logs page 1 had no 0x642d hit this pass", next: "page factory logs around block 53022480–53023200 for PoolGraduated" }
  - { priority: P1, question: "Which window printed the assignment lead of ~$29,894 liq / ~$1,951,647 vol?", checked: "Live first Gecko GET 33450.5213 / 2043518.18 at 2026-09-03T05:43:00Z; later GET 33018.90 / 2043766.62; DexScreener 33244.88 / 2068288", next: "keep the Gecko Looprat/WETH pool slice from the first 200 GET" }
  - { priority: P1, question: "Do the Pons v1 ticker-collision CAs share a constructor socials handle with 0x642d…68c7?", checked: "0xA097…0764 is PonsLauncherToken creator 0x1cbaF24D…1Da149 holders 29; DexScreener liq 51872.96 vs this row's 33244.88, 2026-09-03", next: "RPC socials() on 0xA097 / 0xC94d / 0x549F if those books stay above the seed bar" }
  - { priority: P2, question: "Is there an audit whose scope includes PonsV2LauncherToken as used on 4663?", checked: "Blockscout, DexScreener, Gecko, GitHub README, X search, 2026-09-03", next: "auditor report index for Pons v2 and a matching commit" }
---

# Looprat — research packet

## What it is

A one-billion-supply Pons v2 ERC-20 that graduated into a Uniswap v4 Looprat/ETH pool. Traders buy and sell Looprat (Autonomous Loop Agent) against native ETH on that book. Constructor socials name GitHub mrbuzzoni/loop-rat; @polydao bio lists the CA.

Themes: memecoin, agent, launchpad

## Why it matters

The Looprat/WETH Uniswap v4 book printed about $2.04M of 24h volume on Gecko at collection, with Gecko naming native ETH as WETH. @polydao posted the CA in bio and described a local agent harness. Several other robinhood CAs share the Looprat ticker.

## What could go wrong

USD liquidity figures on the Looprat/ETH book count both sides. Gecko labels the quote WETH while DexScreener labels it ETH 0x000…000. Ticker-only pairing is not identity: Pons v1 CAs use the same name. Constructor twitter and @polydao disagree, so the handle stays unconfirmed-official.

## Product and mechanics

PonsV2LaunchAndBuy 0xe33E…2948 received tx 0x910fb4ff…0969 from EOA 0x89e6…8043 at 2026-09-03T01:05:21Z. TokenLaunched names PonsV2LaunchFactory 0x7eD5…EC7e, curve 0x4c94…A723, pairToken 0x000…000, and graduationThreshold 4.2e18. Supply 1e9*1e18 minted to the curve. [verified R-3 R-4 R-5]

CurveCompleted / LaunchSwept tx 0x28925efe…159a at 2026-09-03T01:14:30Z swept quoteOut 4200000000000000100 and tokenOut 285714285714285714285714285. Gecko launchpad_details.completed_at 2026-09-03T01:15:39Z matches DexScreener pairCreatedAt for Uniswap v4 pool 0x592abb…4be2. Secondary Looprat/USDG and Looprat/WETH (wrapped 0x0Bd7…AD73) books exist on DexScreener with far less liquidity than the native-ETH book. [verified R-6 R-7 R-8]

## Control and security

token owner() reverts. Verified PonsV2LauncherToken source says deployer confers no privileges. deployer() 0x89e6…8043 has empty code and equals the launch from address. FeesSwept creatorAmount went to 0xCA1c…9d2F. [verified R-2 R-5 R-6]

PonsV2LaunchFactory, PonsV2LaunchAndBuy, PonsV2LaunchDeployer, and this token CA are verified on Blockscout (contracts/src/v2/PonsV2LauncherToken.sol, compiler v0.8.35). The curve at 0x4c94…A723 is_verified false. No audit report URL was located this pass. [verified R-1 R-17 R-18 R-19] [unknown]

## Team and provenance

Constructor socials twitter is https://x.com/exittliquidity/status/2095315785535107189; website is https://github.com/mrbuzzoni/loop-rat. DexScreener lists that GitHub and an X community URL. @polydao bio lists $Looprat and CA 0x642d…68c7. GitHub README title Loop Rat has no CA this pass. Flag unconfirmed-official. [claim R-5 R-7 R-11 R-16 R-23]

## Economics and activity

Looprat/WETH Uniswap v4 24h volume is 2043518.18 USD and reserve_in_usd is 33450.5213 at 2026-09-03T05:43:00Z from the Gecko pool endpoint. fdv_usd is 133124.77. Gecko token volume_usd.h24 is 2374928.61 across all pools, not the WETH book. [claim R-8 R-9]

DexScreener same pair labeled Looprat/ETH: liquidity.usd 33244.88, volume.h24 2068288, fdv/marketCap 134659. Blockscout holders_count 1216. Pair created 2026-09-03T01:15:39Z. Assignment lead of ~$29,894 / ~$1,951,647 was not the live Gecko slice this pass. [claim R-1 R-7 R-8]

## Material risks

- Quote token is native ETH 0x000…000; Gecko names it WETH. Pool USD reserve is Looprat plus that quote, not a USDG backstop. [verified R-7 R-8]
- Same-ticker robinhood books at Pons v1 CAs including 0xA097…0764. Flag ca-collision. [verified R-10 R-21]
- Solana pumpfun row with the same ticker. Flag wrong-chain. [claim R-10]
- Handle is unconfirmed-official; constructor twitter, DexScreener community URL, and @polydao bio do not form a bidirectional pair. [claim R-5 R-7 R-11]
- No audit report URL this pass. [unknown]

## Verification passes

- Receipts: Blockscout token/factory/deployer/launchAndBuy/curve/launch/graduation/search/collision, RPC with Chrome UA, DexScreener token and search, Gecko pool/token (first GET HTTP 200), GitHub README, and the X posts cited above were opened on 2026-09-03 and excerpts copied from the responses. [verified R-1 R-5 R-7 R-8]
- Numbers: 2043518.18 is the Gecko Looprat/WETH pool 24h volume, not the 2374928.61 token all-pools figure. Reserve 33450.5213 is that pool. DexScreener 2068288 / 33244.88 is the same pair, different aggregator. [claim R-7 R-8 R-9]
- Adversarial: the strongest contrary reading is that this row is census Pons, Agent Name Service, a Pons v1 Looprat CA, or the Solana pumpfun token. Different CAs, create paths (Pons v2 vs Pons v1 vs pumpfun), holder counts, and 24h volume argue against those. [verified R-1 R-10 R-21]

## Operations log

- Base: assignment base_sha 334ca0619aa62e922da83f46de021f06d12348cf. Census 49 slugs have no looprat / Looprat / Autonomous Loop Agent / 0x642d…68c7. GET packet path on branch grok-heavy/20260903/WORK-20260903-grok-heavy-icarus-research returned HTTP 404, so collection continued.
- Explorer: Blockscout api/v2 search q=Looprat (Chrome UA), token/address for 0x642d…68c7 and collision 0xA097…0764, create tx 0x910fb4ff…0969, CurveCompleted 0x28925efe…159a, factory/deployer/launchAndBuy/curve. RPC eth_getCode/eth_call with Chrome UA at block 53179839.
- Aggregators: DexScreener latest/dex/tokens, token-pairs/v1/robinhood, search q=Looprat. Gecko token and pool first GET HTTP 200; token/pools later 429.
- Social: X keyword Latest Looprat / $LOOPRAT / Autonomous Loop Agent; from:exittliquidity; from:polydao; constructor status 2095315785535107189; user search Looprat.
- Repo: GitHub mrbuzzoni/loop-rat README/CHANGELOG/CONTRACT.md; API repo metadata; code search 401.
- Failed: factory logs page 1 had no PoolGraduated for 0x642d; GitHub code search 401; Gecko token/pools 429; Blockscout token transfers filter 422; curve is_verified false.
- Time: collection 2026-09-03T05:39Z–2026-09-03T05:47Z.
