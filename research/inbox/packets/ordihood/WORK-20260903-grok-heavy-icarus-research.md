---
# Packet v2 (docs/research-system.md §5). Seed with Icarus What-it-is + events.
contract_version: proofline-research-v2
work_id: WORK-20260903-grok-heavy-icarus-research
producer: grok-heavy
role: collector
base_sha: 334ca0619aa62e922da83f46de021f06d12348cf
slug: ordihood
name: ORDIHOOD
packet_tier: seed
as_of: 2026-09-03T05:47:00Z
prior_packet: null
supersedes: null
owned_slugs: [ordihood]
allowed_paths:
  - research/inbox/packets/ordihood/WORK-20260903-grok-heavy-icarus-research.md

identity:
  canonical_name: ORDIHOOD
  aliases: [Ordihood]
  symbols: [ORDIHOOD]
  entity_kind: token
  chain_scope: robinhood-native
  official_domain: https://www.ordihood.art/
  official_handle: "@_Ordihood_"
  repository: "NULL — no GitHub org or repository URL on DexScreener, Gecko, Blockscout, constructor socials, site HTML/JS, or X search this pass"
  possible_matches:
    - slug: pons
      signals: [shared-deployer]
      contrary_signals:
        - "Census Pons is the bonding-curve pad at ponsfamily.com / @ponsdotfamily with PonsV2LaunchFactory 0x7eD5…EC7e"
        - "ORDIHOOD is the ERC-20 at 0xb27a…71Bc created through that factory; entity_kind token, not protocol"
        - "Official handle @_Ordihood_ and domain ordihood.art are not @ponsdotfamily / ponsfamily.com"
    - slug: long
      signals: [other]
      contrary_signals:
        - "Census LONG is a stock-paired factory at app.long.xyz / @longdotxyz with LongLauncher 0x22e9…eeED"
        - "ORDIHOOD is a 3248-byte PonsV2LauncherToken from PonsV2LaunchDeployer 0x3711…1A42, not LongLauncher"
        - "No shared domain, handle, or reproduced address"
    - slug: artificial-inu
      signals: [other]
      contrary_signals:
        - "Census Artificial Inu is $AI at 0x2E8c…1e18 paired to NVDA via LongLauncher, site artificialinu.com / @ArtificiallyInu"
        - "ORDIHOOD is 0xb27a…71Bc paired to native ETH via Pons v2; different CA, quote, name and handle"
        - "No shared domain, handle, or reproduced address"
    - slug: l4va
      signals: [other]
      contrary_signals:
        - "Census L4VA is a vault factory issuing tokens backed by locked RWAs"
        - "ORDIHOOD is a Pons v2 LaunchToken in a Uniswap v4 ORDIHOOD/WETH pool"
        - "No shared domain, handle, or reproduced address"
    - slug: hoodfun
      signals: [other]
      contrary_signals:
        - "Census hood.fun is an announced bonding-curve pad at @hoodfunfamily"
        - "ORDIHOOD is a graduated Pons v2 token at 0xb27a…71Bc / @_Ordihood_ / ordihood.art"
        - "No shared domain, handle, or reproduced address"

classification:
  primary_leaf: launch/graduation-token
  secondary_leaves: []
  mechanism_tags: [bonding-curve, amm, launchpad, nft]
  ecosystem_role: graduation
  lifecycle: mainnet
  coverage_recommendation: seed
  evidence_state: partly-verified
  rationale: "Not in the 49-row census. Token 0xb27a…71Bc is a 3248-byte PonsV2LauncherToken with non-empty code on 4663; name Ordihood / symbol ORDIHOOD; launchFactory() returns PonsV2LaunchFactory 0x7eD5…EC7e. launchAndBuy at 2026-09-02T21:43:38Z minted against pairToken ETH; CurveCompleted / PoolGraduated at 2026-09-02T23:10:00Z seeded Uniswap v4 pool 0x93d0…a82a. Site JS and @_Ordihood_ bio embed that CA. Flag ca-collision: second ORDIHOOD 0x6E9c…246F. [R-1] [R-4] [R-5] [R-7] [R-8] [R-11] [R-16]"

qualifying:
  deployed_on_chain: { status: pass, claim_ids: [CLM-4, CLM-5, CLM-6], note: "" }
  native_play:       { status: pass, claim_ids: [CLM-1, CLM-15], note: "" }
  citable:           { status: pass, claim_ids: [CLM-2, CLM-3, CLM-4, CLM-8], note: "" }
  research_story:    { status: pass, claim_ids: [CLM-1, CLM-9, CLM-10], note: "" }

links:
  - { kind: site, url: "https://www.ordihood.art/", authenticity: confirmed }
  - { kind: x, url: "https://x.com/_Ordihood_", authenticity: confirmed }
  - { kind: telegram, url: "https://t.me/ordihood", authenticity: confirmed }

deployments:
  - label: ORDIHOOD token (PonsV2LauncherToken bytecode)
    role: token
    address:
      value: "0xb27ac340261a8486b8f39dd23b8a95D434a071Bc"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T05:40:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-1, R-4, R-5]
  - label: PonsV2LaunchDeployer
    role: factory
    address:
      value: "0x3711ceA4feaDE896C913C68F01Eda97Cb06D1A42"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T05:40:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-3, R-5]
  - label: PonsV2LaunchFactory (token launchFactory)
    role: factory
    address:
      value: "0x7eD598BcEf8bd9Edd8C97A195C6d13f40801EC7e"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T05:40:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-5, R-6, R-13]
  - label: PonsV2BondingCurve
    role: other
    address:
      value: "0x95750FFa17BBE279b47D2b98440AC1FcfB3455Af"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T05:40:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-2, R-4, R-5, R-6]
  - label: PonsV2LaunchAndBuy
    role: router
    address:
      value: "0xe33E9E479dF8802cb0866d5d05258bEc4cF62948"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T05:40:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-4, R-18]
  - label: V2LaunchLocker (graduated position)
    role: vault
    address:
      value: "0x267444D099b10fB5Ed7c3Cc7B7c767AdcA574952"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T05:43:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-6, R-16, R-24]
  - label: "ORDIHOOD ticker collision (Pons v2, not this row)"
    role: token
    address:
      value: "0x6E9ce427DC02725b0818BE94E087f62bd28a246F"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T05:40:00Z
      exists_on_4663: true
      explorer_source_verified: false
    receipt_ids: [R-14, R-25]

metrics:
  - { kind: volume_24h, value: 1319653.13, currency: USD, as_of: 2026-09-03T05:46:54Z, window: 24h, method: "api.geckoterminal.com/api/v2/networks/robinhood/pools/0x93d0144a85b96efaa3a869c6785a22a50c52b30f0c57d9515bde40c2b04fa82a volume_usd.h24 (ORDIHOOD/WETH pool, not an all-pools figure)", class: claim, receipt_ids: [R-8] }
  - { kind: tvl, value: 40752.28, currency: USD, as_of: 2026-09-03T05:46:54Z, window: point, method: "api.geckoterminal.com/api/v2/networks/robinhood/pools/0x93d0144a85b96efaa3a869c6785a22a50c52b30f0c57d9515bde40c2b04fa82a reserve_in_usd (ORDIHOOD/WETH pool, not an all-pools figure)", class: claim, receipt_ids: [R-8] }
  - { kind: market_cap, value: 187662.89, currency: USD, as_of: 2026-09-03T05:46:54Z, window: point, method: "api.geckoterminal.com/api/v2/networks/robinhood/pools/0x93d0144a85b96efaa3a869c6785a22a50c52b30f0c57d9515bde40c2b04fa82a fdv_usd (market_cap_usd null)", class: claim, receipt_ids: [R-8] }
  - { kind: holders, value: 969, currency: null, as_of: 2026-09-03T05:46:54Z, window: point, method: "robinhoodchain.blockscout.com/api/v2/tokens/0xb27ac340261a8486b8f39dd23b8a95D434a071Bc holders_count", class: claim, receipt_ids: [R-1] }

reproductions:
  - { id: REP-1, method: explorer-rpc, chain_id: 4663, checked_at: 2026-09-03T05:40:00Z, receipt_ids: [R-5], result: "rpc.mainnet.chain.robinhood.com Chrome UA eth_chainId 0x1237 (4663) eth_blockNumber 0x32b7144 (53178692). Token 0xb27a…71Bc eth_getCode 3248 B prefix 608060405260043610, not EIP-1167. name Ordihood, symbol ORDIHOOD, decimals 18, totalSupply 1e27. owner() and factory() revert. deployer() 0x5B11c2bE263B1c9E5a0878F2aEE417a5a5728F2B (eth_getCode 0x). launchFactory() 0x7eD598BcEf8bd9Edd8C97A195C6d13f40801EC7e. curve() 0x95750FFa17BBE279b47D2b98440AC1FcfB3455Af. description() Ordinals, reborn on Robinhood Chain…. socials() twitter https://x.com/_Ordihood_/status/2095266008445460936?s=20 telegram https://t.me/ordihood discord empty website https://www.ordihood.art/ farcaster empty. logo ipfs://bafybeigwpeczgtjwklwtckcovnb7rrsazok36quneu3jskiliws6s22ws4." }
  - { id: REP-2, method: explorer-ui, chain_id: 4663, checked_at: 2026-09-03T05:43:00Z, receipt_ids: [R-1, R-2, R-3, R-4, R-13, R-16, R-18, R-26], result: "Blockscout api/v2 token 0xb27a…71Bc name Ordihood symbol ORDIHOOD holders_count 972 then 969 total_supply 1e27 is_contract true is_verified true name PonsV2LauncherToken file contracts/src/v2/PonsV2LauncherToken.sol compiler v0.8.35 is_fully_verified true verified_at 2026-09-02T21:46:11Z creator_address_hash 0x3711…1A42 creation_transaction_hash 0x3d1ad422…52e1. launchAndBuy tx 2026-09-02T21:43:38Z block 52899580 from EOA 0x5B11…8F2B to PonsV2LaunchAndBuy 0xe33E…2948. decoded name Ordihood symbol ORDIHOOD pairToken 0x000…000 twitter https://x.com/_Ordihood_/status/2095266008445460936?s=20 telegram https://t.me/ordihood website https://www.ordihood.art/ creatorTaxBps 100 buybackEnabled false quoteIn 53019145802650967. TokenLaunched token 0xb27a…71Bc curve 0x9575…55Af deployer 0x5B11…8F2B pairToken ETH launchConfigId 0 graduationThreshold 4.2e18. Launched tokensReceived 30000000000000006079821428. CurveCompleted / LaunchSwept tx 0x195e8185…49a7 2026-09-02T23:09:59Z block 52949767 quoteOut 4200000000000000158 tokenOut 285714285714285714285714285. createGraduatedPool tx 0x96b17fd8…b7fb 2026-09-02T23:10:00Z block 52949774 from 0x3534…DA53 method createGraduatedPool. PoolManager Initialize id 0x93d0…a82a currency0 ETH currency1 ORDIHOOD fee 0 tickSpacing 200 hooks V2MemeHook 0xE5e7…e044. PoolGraduated positionId 1572672 tokenAmount 204081632653061226683326391 pairTokenAmount 4200000000000000158. V2LaunchLocker PositionLocked 1572672 TokenSupplyLocked 81632653061224487602387894." }
  - { id: REP-3, method: explorer-rpc, chain_id: 4663, checked_at: 2026-09-03T05:43:00Z, receipt_ids: [R-6], result: "block 53178692 then later 53181735. factory.getLaunchedToken(0xb27a…71Bc): token 0xb27a…71Bc curve 0x9575…55Af deployer/creatorFeeRecipient 0x5B11…8F2B pairToken 0x000…000 graduationThreshold 4.2e18 poolFee 0 tickSpacing 200 creatorTaxBps 100 buybackEnabled 0 phase 2 exists 1. locker() 0x2674…4952 memeHook() 0xE5e7…e044 launchDeployer() 0x3711…1A42 poolManager() 0x8366…0951 launchForwarder() 0xe33E…2948 owner 0x263e…19Dd. locker.isLocked true lockedPositions 1572672 lockedTokenSupply 81632653061224487602387894. curve eth_getCode 10229 B token() 0xb27a…71Bc pairToken() 0x000…000 graduated() 1 factory() 0x7eD5…EC7e owner() reverts. Collision 0x6E9c…246F eth_getCode 3248 B name Ordihood symbol ORDIHOOD launchFactory() same 0x7eD5…EC7e deployer() 0x611A…b89b (eth_getCode 0x) curve() 0x7b57ca2c…8d10 socials twitter https://x.com/_Ordihood_ other socials empty." }
  - { id: REP-4, method: api, checked_at: 2026-09-03T05:41:00Z, receipt_ids: [R-7, R-8, R-9], result: "DexScreener latest/dex/tokens/0xb27a…71Bc HTTP 200: 13 robinhood uniswap pairs; top ORDIHOOD/ETH v4 0x93d0…a82a quote 0x000…000 Ether / ETH liquidity.usd 40228.73 volume.h24 1329028.48 fdv/marketCap 182216 priceUsd 0.0001971 pairCreatedAt 1788390600000 (2026-09-02T23:10:00Z) txns.h24 buys 5586 sells 4713 boosts.active 500. info.websites https://www.ordihood.art/ info.socials twitter https://x.com/_Ordihood_/status/2095266008445460936?s=20 telegram https://t.me/ordihood. Gecko search/pools query=ORDIHOOD network=robinhood HTTP 200; Gecko pool HTTP 200 name ORDIHOOD / WETH dex pons-v2-dex pool_created_at 2026-09-02T23:10:00Z. Gecko pool at 2026-09-03T05:46:54Z volume_usd.h24 1319653.13376494 reserve_in_usd 40752.2784 fdv_usd 187662.8927 market_cap_usd null. Gecko token HTTP 200 volume_usd.h24 1378220.15182309 (all-pools) total_reserve_in_usd 24878.70 (all-pools, not the WETH book) fdv_usd 199095.48 then live pool fdv 187662.89; launchpad_details completed true completed_at 2026-09-02T23:10:00Z migrated_destination_pool_address 0x93d0…a82a. Assignment prior Gecko ORDIHOOD/WETH liq ~$59092 vol ~$1178232 was not the live print this pass." }
  - { id: REP-5, method: official-crosslink, checked_at: 2026-09-03T05:45:00Z, receipt_ids: [R-4, R-7, R-10, R-11, R-12], result: "launchAndBuy socials website https://www.ordihood.art/ twitter status 2095266008445460936 telegram https://t.me/ordihood. Token socials() match. DexScreener info matches. Site title Ordihood: Onchain Inscriptions for Robinhood Chain; static HTML has no CA; bundle /assets/index-BRashj_S.js embeds 0xb27ac340261a8486b8f39dd23b8a95d434a071bc, https://x.com/_Ordihood_, https://t.me/ordihood. @_Ordihood_ display Ordihood bio embeds 0xb27ac340261a8486b8f39dd23b8a95d434a071bc and the same description. t.me/ordihood preview title Ordihood [Community] 386 members, no CA in HTML." }
  - { id: REP-6, method: explorer-ui, chain_id: 4663, checked_at: 2026-09-03T05:43:00Z, receipt_ids: [R-14, R-25], result: "Collision token 0x6E9c…246F Blockscout name Ordihood symbol ORDIHOOD holders_count 1 is_verified false creator_address_hash 0x3711…1A42 creation_transaction_hash 0x66b07354…e6da. launchAndBuy 2026-09-02T21:19:59Z block 52885810 from EOA 0x611A…b89b to PonsV2LaunchAndBuy; socials twitter https://x.com/_Ordihood_ website empty. Gecko lists a separate ORDIHOOD/WETH pons-v2 pool 0x7b57ca2c…8d10 reserve_in_usd 3996.1858 volume_usd.h24 135.99." }

claims:
  - { id: CLM-1, field: product.mechanism, value: "Pons v2 launch: launchAndBuy mints a 1e9-supply ERC-20 onto a bonding curve quoted against pairToken ETH, then createGraduatedPool initializes a Uniswap v4 pool with V2MemeHook and locks the LP in V2LaunchLocker. ORDIHOOD used quoteIn 0.053019145802650967e18, launchConfigId 0, creatorTaxBps 100, buybackEnabled false; getLaunchedToken.phase is 2. poolFee 0 tickSpacing 200 graduationThreshold 4.2e18 ETH.", class: verified, observed_at: 2026-09-03T05:43:00Z, receipt_ids: [R-4, R-5, R-6, R-16, R-26], reproduction_ids: [REP-1, REP-2, REP-3], supersedes: null }
  - { id: CLM-2, field: identity.name, value: "Ordihood", class: verified, observed_at: 2026-09-03T05:40:00Z, receipt_ids: [R-1, R-4, R-5], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-3, field: identity.symbol, value: "ORDIHOOD", class: verified, observed_at: 2026-09-03T05:40:00Z, receipt_ids: [R-1, R-4, R-5], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-4, field: deployment.address, value: "0xb27ac340261a8486b8f39dd23b8a95D434a071Bc", class: verified, observed_at: 2026-09-03T05:40:00Z, receipt_ids: [R-1, R-4, R-5], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-5, field: deployment.address, value: "0x7eD598BcEf8bd9Edd8C97A195C6d13f40801EC7e", class: verified, observed_at: 2026-09-03T05:40:00Z, receipt_ids: [R-5, R-6, R-13], reproduction_ids: [REP-1, REP-3], supersedes: null }
  - { id: CLM-6, field: lifecycle, value: mainnet, class: verified, observed_at: 2026-09-03T05:46:54Z, receipt_ids: [R-1, R-4, R-5, R-8, R-16], reproduction_ids: [REP-1, REP-2, REP-4], supersedes: null }
  - { id: CLM-7, field: taxonomy.primary-leaf, value: launch/graduation-token, class: claim, observed_at: 2026-09-03T05:46:54Z, receipt_ids: [R-4, R-8, R-9], reproduction_ids: [], supersedes: null }
  - { id: CLM-8, field: identity.handle, value: "@_Ordihood_", class: verified, observed_at: 2026-09-03T05:45:00Z, receipt_ids: [R-4, R-5, R-7, R-10, R-11], reproduction_ids: [REP-1, REP-5], supersedes: null }
  - { id: CLM-9, field: relationship, value: "Pair quote is native ETH (address 0x000…000), not a Robinhood Stock Token. Venue is Uniswap v4 PoolManager 0x8366…0951 poolId 0x93d0…a82a fee 0 hooks V2MemeHook 0xE5e7…e044. Distinct from collision ORDIHOOD 0x6E9c…246F. Pad is Pons v2, not LongLauncher, Circus, or Doppler/Airlock.", class: verified, observed_at: 2026-09-03T05:43:00Z, receipt_ids: [R-4, R-7, R-8, R-14, R-16], reproduction_ids: [REP-2, REP-3, REP-4], supersedes: null }
  - { id: CLM-10, field: economics.metric, value: "ORDIHOOD/WETH Uniswap v4 24h volume 1319653.13 USD and reserve_in_usd 40752.28 at 2026-09-03T05:46:54Z (Gecko pool slice, not Gecko token all-pools 1378220.15)", class: verified, observed_at: 2026-09-03T05:46:54Z, receipt_ids: [R-8, R-9], reproduction_ids: [REP-4], supersedes: null }
  - { id: CLM-11, field: economics.metric, value: "DexScreener same pair liquidity.usd 40228.73 volume.h24 1329028.48 fdv/marketCap 182216 at 2026-09-03T05:41:00Z", class: verified, observed_at: 2026-09-03T05:41:00Z, receipt_ids: [R-7], reproduction_ids: [REP-4], supersedes: null }
  - { id: CLM-12, field: economics.metric, value: 969, class: verified, observed_at: 2026-09-03T05:46:54Z, receipt_ids: [R-1], reproduction_ids: [REP-2], supersedes: null }
  - { id: CLM-13, field: control.owner, value: "owner() on the token reverts; deployer() is EOA 0x5B11c2bE263B1c9E5a0878F2aEE417a5a5728F2B with empty code; launchFactory() is Pons v2 factory 0x7eD5…EC7e. curve owner() reverts. Factory owner is 0x263ed295…19Dd (SafeProxy, code 171 B).", class: verified, observed_at: 2026-09-03T05:43:00Z, receipt_ids: [R-5, R-6], reproduction_ids: [REP-1, REP-3], supersedes: null }
  - { id: CLM-14, field: control.privileged-role, value: "creatorFeeRecipient equals deployer 0x5B11…8F2B; factory owner 0x263e…19Dd; V2MemeHook PoolRegistered creator is that deployer. Verified PonsV2LauncherToken source: deployer is immutable reference data and confers no privileges. creatorTaxBps 100.", class: verified, observed_at: 2026-09-03T05:43:00Z, receipt_ids: [R-4, R-5, R-16], reproduction_ids: [REP-2, REP-3], supersedes: null }
  - { id: CLM-15, field: other, value: "Pair asset is native ETH 0x0000000000000000000000000000000000000000; venue is Uniswap v4 PoolManager 0x8366a39CC670B4001A1121B8F6A443A643e40951 poolId 0x93d0144a85b96efaa3a869c6785a22a50c52b30f0c57d9515bde40c2b04fa82a fee 0 hooks V2MemeHook 0xE5e702641Ea86F4ae6cC3cDaeD2B886f976Be044", class: verified, observed_at: 2026-09-03T05:43:00Z, receipt_ids: [R-5, R-7, R-8, R-16], reproduction_ids: [REP-2, REP-3, REP-4], supersedes: null }
  - { id: CLM-16, field: deployment.role, value: "Pad is Pons v2 (factory 0x7eD5…EC7e, LaunchAndBuy 0xe33E…2948, LaunchDeployer 0x3711…1A42). Not LongLauncher, Circus, or Doppler/Airlock.", class: verified, observed_at: 2026-09-03T05:40:00Z, receipt_ids: [R-3, R-4, R-5], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-17, field: taxonomy.chain-scope, value: robinhood-native, class: verified, observed_at: 2026-09-03T05:40:00Z, receipt_ids: [R-5, R-7], reproduction_ids: [REP-1, REP-4], supersedes: null }
  - { id: CLM-18, field: security.audit, value: "No audit report URL was located on Blockscout, DexScreener, Gecko, the site, Telegram preview, or X search this pass", class: unknown, observed_at: 2026-09-03T05:45:00Z, receipt_ids: [], reproduction_ids: [], supersedes: null }
  - { id: CLM-19, field: communications.status, value: "Official surfaces: ordihood.art (JS embeds CA), @_Ordihood_ (bio embeds CA), t.me/ordihood (constructor + site JS; preview has no CA). Flag ca-collision on 0x6E9c…246F. Flag copypasta-pattern / third-party-link: X post with crypto-ugd.netlify.app/claim?contract=0xb27a…71Bc.", class: claim, observed_at: 2026-09-03T05:45:00Z, receipt_ids: [R-7, R-10, R-11, R-12, R-14, R-27], reproduction_ids: [], supersedes: null }
  - { id: CLM-20, field: economics.metric, value: "Gecko fdv_usd 187662.89 at 2026-09-03T05:46:54Z; DexScreener fdv/marketCap 182216 at 2026-09-03T05:41:00Z. Gecko market_cap_usd null.", class: verified, observed_at: 2026-09-03T05:46:54Z, receipt_ids: [R-7, R-8], reproduction_ids: [REP-4], supersedes: null }
  - { id: CLM-21, field: deployment.address, value: "0x95750FFa17BBE279b47D2b98440AC1FcfB3455Af", class: verified, observed_at: 2026-09-03T05:40:00Z, receipt_ids: [R-2, R-5, R-6], reproduction_ids: [REP-1, REP-3], supersedes: null }
  - { id: CLM-22, field: deployment.address, value: "0x3711ceA4feaDE896C913C68F01Eda97Cb06D1A42", class: verified, observed_at: 2026-09-03T05:40:00Z, receipt_ids: [R-3, R-5], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-23, field: identity.domain, value: "https://www.ordihood.art/", class: verified, observed_at: 2026-09-03T05:45:00Z, receipt_ids: [R-4, R-7, R-11], reproduction_ids: [REP-5], supersedes: null }
  - { id: CLM-24, field: candidate, value: "ordihood | ORDIHOOD | @_Ordihood_ | https://www.ordihood.art/ — discovery token not in census 49", class: claim, observed_at: 2026-09-03T05:47:00Z, receipt_ids: [R-1, R-7], reproduction_ids: [], supersedes: null }
  - { id: CLM-25, field: other, value: "ca-collision: second Ordihood / ORDIHOOD at 0x6E9ce427DC02725b0818BE94E087f62bd28a246F, unverified, holders_count 1, same PonsV2LaunchDeployer, launched 24 minutes earlier from a different EOA", class: verified, observed_at: 2026-09-03T05:43:00Z, receipt_ids: [R-14, R-25], reproduction_ids: [REP-3, REP-6], supersedes: null }

conflicts: []

events:
  - id: EVT-1
    type: ct
    title: "X account posted $ORDIHOOD ~$198K MC and $1M volume"
    summary: "@chineswhalesCGT posted the pair is hours old, ~$198K MC, and crossed $1M volume."
    occurred_at: 2026-09-03T05:35:49Z
    observed_at: 2026-09-03T05:40:00Z
    affected_fields: [economics.metric, activity.status]
    evidence_state: claim
    impact: routine
    site_recommendation: feed
    channel_recommendation: none
    receipt_ids: [R-23]
  - id: EVT-2
    type: company
    title: "@_Ordihood_ posted inscription #1000 landed"
    summary: "Official account posted Sub-1k is already history. Sub-5k is next, linking ordihood.art."
    occurred_at: 2026-09-03T05:24:52Z
    observed_at: 2026-09-03T05:40:00Z
    affected_fields: [activity.status, communications.status]
    evidence_state: claim
    impact: routine
    site_recommendation: feed
    channel_recommendation: none
    receipt_ids: [R-22]
  - id: EVT-3
    type: company
    title: "@_Ordihood_ posted an onchain auction of Inscription #0"
    summary: "24h auction from 0.05 ETH, +5% min bid; proceeds to Nepal PM Disaster Relief Fund."
    occurred_at: 2026-09-03T04:12:47Z
    observed_at: 2026-09-03T05:40:00Z
    affected_fields: [product.mechanism, activity.status]
    evidence_state: claim
    impact: material
    site_recommendation: both
    channel_recommendation: none
    receipt_ids: [R-20]
  - id: EVT-4
    type: company
    title: "@_Ordihood_ posted a 0.05% transfer to 0xdead"
    summary: "Post linked Blockscout tx 0xee72…6814 transferring 533411.96 tokens to 0xdead."
    occurred_at: 2026-09-03T03:28:01Z
    observed_at: 2026-09-03T05:43:00Z
    affected_fields: [economics.metric, activity.status]
    evidence_state: verified
    impact: routine
    site_recommendation: feed
    channel_recommendation: none
    receipt_ids: [R-19, R-21]
  - id: EVT-5
    type: company
    title: "@_Ordihood_ posted 4-hour inscription stats"
    summary: "Post: 700+ inscriptions, 14 collections, 178 sales, 3.87 ETH volume, 3 rhc-20 curves."
    occurred_at: 2026-09-03T03:18:06Z
    observed_at: 2026-09-03T05:40:00Z
    affected_fields: [activity.status, product.mechanism]
    evidence_state: claim
    impact: material
    site_recommendation: both
    channel_recommendation: none
    receipt_ids: [R-21]
  - id: EVT-6
    type: onchain
    title: "Pons v2 createGraduatedPool seeded ORDIHOOD/WETH"
    summary: "Tx 0x96b1…b7fb initialized Uniswap v4 pool 0x93d0…a82a; locker positionId 1572672."
    occurred_at: 2026-09-02T23:10:00Z
    observed_at: 2026-09-03T05:43:00Z
    affected_fields: [deployment.address, lifecycle, economics.metric]
    evidence_state: verified
    impact: material
    site_recommendation: both
    channel_recommendation: none
    receipt_ids: [R-8, R-16]
  - id: EVT-7
    type: onchain
    title: "Pons v2 launchAndBuy minted Ordihood / ORDIHOOD"
    summary: "Tx 0x3d1a…52e1 from 0x5B11…8F2B; TokenLaunched curve 0x9575…55Af pairToken ETH."
    occurred_at: 2026-09-02T21:43:38Z
    observed_at: 2026-09-03T05:40:00Z
    affected_fields: [deployment.address, lifecycle, product.mechanism]
    evidence_state: verified
    impact: material
    site_recommendation: profile
    channel_recommendation: none
    receipt_ids: [R-4]
  - id: EVT-8
    type: company
    title: "@_Ordihood_ posted the launch video and CA"
    summary: "Post: rebuilt Ordinals on Robinhood Chain; bio and post point at 0xb27a…71Bc."
    occurred_at: 2026-09-02T21:41:59Z
    observed_at: 2026-09-03T05:40:00Z
    affected_fields: [identity.handle, identity.domain, communications.status]
    evidence_state: claim
    impact: material
    site_recommendation: profile
    channel_recommendation: none
    receipt_ids: [R-10]

receipts:
  - { id: R-1, publisher: Blockscout, title: "Token 0xb27a…71Bc Ordihood / ORDIHOOD", url: "https://robinhoodchain.blockscout.com/address/0xb27ac340261a8486b8f39dd23b8a95D434a071Bc", published_at: null, accessed_at: 2026-09-03T05:46:54Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-2, CLM-3, CLM-4, CLM-6, CLM-12, CLM-16, CLM-24], excerpt: "hash 0xb27ac340261a8486b8f39dd23b8a95D434a071Bc name PonsV2LauncherToken is_contract true is_verified true. token name Ordihood symbol ORDIHOOD decimals 18 total_supply 1e27 holders_count 969 type ERC-20. creator_address_hash 0x3711ceA4feaDE896C913C68F01Eda97Cb06D1A42 creation_transaction_hash 0x3d1ad42219802066f3a0c64eb0e34026d86f8aff77e789b81b8323315e6c52e1. file contracts/src/v2/PonsV2LauncherToken.sol compiler v0.8.35 is_fully_verified true." }
  - { id: R-2, publisher: Blockscout, title: "Address 0x9575…55Af PonsV2BondingCurve", url: "https://robinhoodchain.blockscout.com/address/0x95750FFa17BBE279b47D2b98440AC1FcfB3455Af", published_at: null, accessed_at: 2026-09-03T05:40:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-21], excerpt: "hash 0x95750FFa17BBE279b47D2b98440AC1FcfB3455Af name PonsV2BondingCurve is_contract true is_verified true creator_address_hash 0x3711ceA4feaDE896C913C68F01Eda97Cb06D1A42 creation_transaction_hash 0x3d1ad42219802066f3a0c64eb0e34026d86f8aff77e789b81b8323315e6c52e1." }
  - { id: R-3, publisher: Blockscout, title: "Address 0x3711…1A42 PonsV2LaunchDeployer", url: "https://robinhoodchain.blockscout.com/address/0x3711ceA4feaDE896C913C68F01Eda97Cb06D1A42", published_at: null, accessed_at: 2026-09-03T05:40:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-16, CLM-22], excerpt: "hash 0x3711ceA4feaDE896C913C68F01Eda97Cb06D1A42 name PonsV2LaunchDeployer is_contract true is_verified true file_path contracts/src/v2/PonsV2LaunchDeployer.sol compiler 0.8.35 is_fully_verified true creator_address_hash 0xFdDE5a1E3cDF791Da71E49F817D70C7ceD72CC36. Token creator_address_hash points here." }
  - { id: R-4, publisher: Blockscout, title: "launchAndBuy tx 0x3d1ad422…52e1", url: "https://robinhoodchain.blockscout.com/tx/0x3d1ad42219802066f3a0c64eb0e34026d86f8aff77e789b81b8323315e6c52e1", published_at: 2026-09-02T21:43:38Z, accessed_at: 2026-09-03T05:40:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-2, CLM-3, CLM-4, CLM-6, CLM-8, CLM-14, CLM-16, CLM-23, EVT-7], excerpt: "timestamp 2026-09-02T21:43:38.000000Z status ok block 52899580 from EOA 0x5B11c2bE…8F2B to PonsV2LaunchAndBuy 0xe33E9E47…2948 method launchAndBuy. decoded name Ordihood symbol ORDIHOOD pairToken 0x000…000 website https://www.ordihood.art/ twitter status 2095266008445460936 telegram t.me/ordihood creatorTaxBps 100 quoteIn 53019145802650967. TokenLaunched token 0xb27a…71Bc curve 0x9575…55Af graduationThreshold 4.2e18." }
  - { id: R-5, publisher: Robinhood Chain RPC, title: "eth_getCode, name, symbol, launchFactory(), socials() on ORDIHOOD", url: "https://rpc.mainnet.chain.robinhood.com", published_at: null, accessed_at: 2026-09-03T05:40:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-2, CLM-3, CLM-4, CLM-5, CLM-6, CLM-8, CLM-13, CLM-16, CLM-17, CLM-21, CLM-22], excerpt: "eth_chainId 0x1237 (4663) eth_blockNumber 0x32b7144 (53178692). Token code 3248 B prefix 60806040. name Ordihood symbol ORDIHOOD decimals 18 totalSupply 1e27. owner() factory() revert. launchFactory() 0x7eD598BcEf8bd9Edd8C97A195C6d13f40801EC7e. deployer() 0x5B11c2bE263B1c9E5a0878F2aEE417a5a5728F2B code 0x. curve() 0x95750FFa17BBE279b47D2b98440AC1FcfB3455Af. socials twitter status 2095266008445460936 telegram t.me/ordihood website https://www.ordihood.art/." }
  - { id: R-6, publisher: Robinhood Chain RPC, title: "factory getLaunchedToken, locker isLocked, curve graduated()", url: "https://rpc.mainnet.chain.robinhood.com", published_at: null, accessed_at: 2026-09-03T05:43:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-5, CLM-9, CLM-13, CLM-14, CLM-15, CLM-21], excerpt: "getLaunchedToken token 0xb27a…71Bc curve 0x9575…55Af deployer 0x5B11…8F2B pairToken 0x000…000 graduationThreshold 4.2e18 poolFee 0 tickSpacing 200 creatorTaxBps 100 phase 2 exists 1. locker() 0x2674…4952 memeHook() 0xE5e7…e044 poolManager() 0x8366…0951 owner 0x263e…19Dd. locker.isLocked 1 lockedPositions 1572672 lockedTokenSupply 81632653061224487602387894. curve graduated() 1 pairToken() 0x000…000 owner() reverts code 10229 B." }
  - { id: R-7, publisher: DexScreener, title: "latest/dex/tokens ORDIHOOD", url: "https://api.dexscreener.com/latest/dex/tokens/0xb27ac340261a8486b8f39dd23b8a95D434a071Bc", published_at: null, accessed_at: 2026-09-03T05:41:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-7, CLM-8, CLM-11, CLM-15, CLM-17, CLM-19, CLM-20, CLM-23, CLM-24], excerpt: "13 robinhood uniswap pairs. Top pairAddress 0x93d0144a85b96efaa3a869c6785a22a50c52b30f0c57d9515bde40c2b04fa82a labels v4 base Ordihood / ORDIHOOD quote Ether / ETH 0x000…000 liquidity.usd 40228.73 volume.h24 1329028.48 fdv 182216 marketCap 182216 pairCreatedAt 1788390600000. info.websites https://www.ordihood.art/ info.socials twitter https://x.com/_Ordihood_/status/2095266008445460936?s=20 telegram https://t.me/ordihood. boosts.active 500." }
  - { id: R-8, publisher: GeckoTerminal, title: "ORDIHOOD/WETH Uniswap v4 pool", url: "https://api.geckoterminal.com/api/v2/networks/robinhood/pools/0x93d0144a85b96efaa3a869c6785a22a50c52b30f0c57d9515bde40c2b04fa82a", published_at: null, accessed_at: 2026-09-03T05:46:54Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-6, CLM-7, CLM-10, CLM-15, CLM-20, EVT-6], excerpt: "GET 200. name ORDIHOOD / WETH pool_created_at 2026-09-02T23:10:00Z fdv_usd 187662.8927 market_cap_usd null volume_usd.h24 1319653.13376494 reserve_in_usd 40752.2784. dex pons-v2-dex quote robinhood_0x0000000000000000000000000000000000000000. transactions.h24 buys 5544 sells 4679. Search GET 200 listed this pool first." }
  - { id: R-9, publisher: GeckoTerminal, title: "Ordihood token", url: "https://api.geckoterminal.com/api/v2/networks/robinhood/tokens/0xb27ac340261a8486b8f39dd23b8a95D434a071Bc", published_at: null, accessed_at: 2026-09-03T05:41:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-7, CLM-10], excerpt: "GET 200. name Ordihood symbol ORDIHOOD decimals 18 total_supply 1e27 volume_usd.h24 1378220.15182309 total_reserve_in_usd 24878.70 fdv_usd 199095.48 market_cap_usd null. launchpad_details graduation_percentage 100 completed true completed_at 2026-09-02T23:10:00.000Z migrated_destination_pool_address 0x93d0144a85b96efaa3a869c6785a22a50c52b30f0c57d9515bde40c2b04fa82a. All-pools volume/reserve are not the WETH book." }
  - { id: R-10, publisher: "@_Ordihood_", title: "Launch post: Ordinals rebuilt on Robinhood Chain", url: "https://x.com/_Ordihood_/status/2095266008445460936", published_at: 2026-09-02T21:41:59Z, accessed_at: 2026-09-03T05:40:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [CLM-8, CLM-19, CLM-23, EVT-8], excerpt: "Display Ordihood. Bio: Ordinals, reborn on Robinhood Chain. Every artifact 100% onchain, numbered from #0, immutable forever. 0xb27ac340261a8486b8f39dd23b8a95d434a071bc. Post: 2 years ago, Ordinals broke Bitcoin. I rebuilt the entire protocol on Robinhood Chain. There are 116 inscriptions in existence right now. Time to be early - $ORDIHOOD." }
  - { id: R-11, publisher: Ordihood, title: "ordihood.art site and JS bundle", url: "https://www.ordihood.art/", published_at: null, accessed_at: 2026-09-03T05:45:00Z, kind: official-site, authority: primary, authenticity: confirmed, supports: [CLM-8, CLM-19, CLM-23], excerpt: "HTTP 200. title Ordihood: Onchain Inscriptions for Robinhood Chain. meta description Permanent digital artifacts inscribed directly on Robinhood Chain. Numbered from the first inscription. Not NFTs: a new format. Static HTML has no CA. Bundle /assets/index-BRashj_S.js embeds 0xb27ac340261a8486b8f39dd23b8a95d434a071bc, https://x.com/_Ordihood_, https://t.me/ordihood." }
  - { id: R-12, publisher: Telegram, title: "t.me/ordihood", url: "https://t.me/ordihood", published_at: null, accessed_at: 2026-09-03T05:45:00Z, kind: social, authority: social, authenticity: confirmed, supports: [CLM-19], excerpt: "HTTP 200. og:title Ordihood [Community]. og:description Permanent digital artifacts. Verifiable ownership. Inscribed on Robinhood Chain. tgme_page_title Ordihood [Community]. tgme_page_extra 386 members, 114 online. No contract address in the preview HTML this pass." }
  - { id: R-13, publisher: Blockscout, title: "Address 0x7eD5…EC7e PonsV2LaunchFactory", url: "https://robinhoodchain.blockscout.com/address/0x7eD598BcEf8bd9Edd8C97A195C6d13f40801EC7e", published_at: null, accessed_at: 2026-09-03T05:40:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-5], excerpt: "hash 0x7eD598BcEf8bd9Edd8C97A195C6d13f40801EC7e name PonsV2LaunchFactory is_contract true is_verified true creator_address_hash 0xFdDE5a1E3cDF791Da71E49F817D70C7ceD72CC36. Token launchFactory() returns this address." }
  - { id: R-14, publisher: Blockscout, title: "Token 0x6E9c…246F Ordihood / ORDIHOOD collision", url: "https://robinhoodchain.blockscout.com/address/0x6E9ce427DC02725b0818BE94E087f62bd28a246F", published_at: null, accessed_at: 2026-09-03T05:40:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-9, CLM-19, CLM-25], excerpt: "hash 0x6E9ce427DC02725b0818BE94E087f62bd28a246F name Ordihood is_contract true is_verified false. token name Ordihood symbol ORDIHOOD decimals 18 total_supply 1e27 holders_count 1 type ERC-20. creator_address_hash 0x3711ceA4feaDE896C913C68F01Eda97Cb06D1A42 creation_transaction_hash 0x66b073547563dd68493a6f4ac1e64bc22e2bca872e480004c2fc389657aae6da. Flag ca-collision; not this row." }
  - { id: R-15, publisher: Blockscout, title: "search q=ORDIHOOD", url: "https://robinhoodchain.blockscout.com/api/v2/search?q=ORDIHOOD", published_at: null, accessed_at: 2026-09-03T05:39:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-25], excerpt: "Chrome UA HTTP 200. Two token hits: 0xb27ac340261a8486b8f39dd23b8a95D434a071Bc Ordihood / ORDIHOOD is_smart_contract_verified true; 0x6E9ce427DC02725b0818BE94E087f62bd28a246F Ordihood / ORDIHOOD is_smart_contract_verified false. Token list holders_count 971 then 969 vs 1." }
  - { id: R-16, publisher: Blockscout, title: "createGraduatedPool tx 0x96b17fd8…b7fb", url: "https://robinhoodchain.blockscout.com/tx/0x96b17fd8289d84e34aa5c285e0ab13e5eb6230b533b52f9b3c919ffda456b7fb", published_at: 2026-09-02T23:10:00Z, accessed_at: 2026-09-03T05:43:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-6, CLM-9, CLM-14, CLM-15, EVT-6], excerpt: "timestamp 2026-09-02T23:10:00.000000Z status ok block 52949774 from EOA 0x3534aDCa…DA53 to PonsV2LaunchFactory method createGraduatedPool token 0xb27a…71Bc. PoolManager Initialize id 0x93d0…a82a currency0 ETH currency1 ORDIHOOD fee 0 hooks 0xE5e7…e044. PoolGraduated positionId 1572672 tokenAmount 204081632653061226683326391 pairTokenAmount 4.2e18. V2LaunchLocker PositionLocked 1572672 TokenSupplyLocked 81632653061224487602387894." }
  - { id: R-18, publisher: Blockscout, title: "Address 0xe33E…2948 PonsV2LaunchAndBuy", url: "https://robinhoodchain.blockscout.com/address/0xe33E9E479dF8802cb0866d5d05258bEc4cF62948", published_at: null, accessed_at: 2026-09-03T05:40:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-16], excerpt: "hash 0xe33E9E479dF8802cb0866d5d05258bEc4cF62948 name PonsV2LaunchAndBuy is_contract true is_verified true creator_address_hash 0xFdDE5a1E3cDF791Da71E49F817D70C7ceD72CC36. launchAndBuy tx 0x3d1a…52e1 calls this router." }
  - { id: R-19, publisher: Blockscout, title: "transfer-to-dead tx 0xee7274e7…6814", url: "https://robinhoodchain.blockscout.com/tx/0xee7274e75054389742bcf61e2906791d5bd7240ebe0dd593032cbf1c49786814", published_at: 2026-09-03T03:23:40Z, accessed_at: 2026-09-03T05:43:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [EVT-4], excerpt: "timestamp 2026-09-03T03:23:40.000000Z status ok block_number 53097955 from 0x5B11c2bE263B1c9E5a0878F2aEE417a5a5728F2B (is_contract false) to PonsV2LauncherToken 0xb27a…71Bc method transfer. decoded to 0x000000000000000000000000000000000000dEaD value 533411959598522675812445." }
  - { id: R-20, publisher: "@_Ordihood_", title: "Auction of Inscription #0", url: "https://x.com/_Ordihood_/status/2095364356389101689", published_at: 2026-09-03T04:12:47Z, accessed_at: 2026-09-03T05:40:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [EVT-3], excerpt: "We are auctioning Inscription #0. Every wei goes to Nepal. 24 hours. Starting bid 0.05 ETH, +5% minimum per bid. 100% of the winning bid, no fee, no cut, will be donated to the Government of Nepal Prime Minister's Disaster Relief Fund, with the receipt posted publicly. The auction runs on a contract, not on trust." }
  - { id: R-21, publisher: "@_Ordihood_", title: "4 hours after launch / 0.05% MORE BURNT", url: "https://x.com/_Ordihood_/status/2095350597327208778", published_at: 2026-09-03T03:18:06Z, accessed_at: 2026-09-03T05:40:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [EVT-4, EVT-5], excerpt: "Ordihood, 4 hours after launch. The numbers, all onchain: 700+ inscriptions. Sub-500 closed today. 14 collections, 49 creators. 5 live drops. 178 sales, 3.87 ETH volume (about $9,300), 53 unique buyers. 3 rhc-20 curves trading. Follow-up 2095353093357494353 at 2026-09-03T03:28:01Z: 0.05% MORE BURNT. (total: 7.6%) plus Blockscout tx 0xee7274e7…6814." }
  - { id: R-22, publisher: "@_Ordihood_", title: "#1000 landed", url: "https://x.com/_Ordihood_/status/2095382497353687364", published_at: 2026-09-03T05:24:52Z, accessed_at: 2026-09-03T05:40:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [EVT-2], excerpt: "#1000 landed. Sub-1k is already history. Sub-5k is next. https://www.ordihood.art/" }
  - { id: R-23, publisher: "@chineswhalesCGT", title: "$ORDIHOOD pair hours old, ~$198K MC, $1M volume", url: "https://x.com/chineswhalesCGT/status/2095385254680801692", published_at: 2026-09-03T05:35:49Z, accessed_at: 2026-09-03T05:40:00Z, kind: social, authority: social, authenticity: confirmed, supports: [EVT-1], excerpt: "$ORDIHOOD is actually kinda interesting. They're bringing the Ordinals idea over to Robinhood Chain, with the artifacts fully onchain and permanently numbered. The pair is only a few hours old but has already pushed ~$198K MC and crossed $1M in volume. $ORDIHOOD @_Ordihood_." }
  - { id: R-24, publisher: Blockscout, title: "Address 0x2674…4952 V2LaunchLocker", url: "https://robinhoodchain.blockscout.com/address/0x267444D099b10fB5Ed7c3Cc7B7c767AdcA574952", published_at: null, accessed_at: 2026-09-03T05:43:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1], excerpt: "hash 0x267444D099b10fB5Ed7c3Cc7B7c767AdcA574952 name V2LaunchLocker is_contract true is_verified true creator_address_hash 0xFdDE5a1E3cDF791Da71E49F817D70C7ceD72CC36. PositionLocked tokenId 1572672 on createGraduatedPool tx 0x96b1…b7fb." }
  - { id: R-25, publisher: Blockscout, title: "collision launchAndBuy tx 0x66b07354…e6da", url: "https://robinhoodchain.blockscout.com/tx/0x66b073547563dd68493a6f4ac1e64bc22e2bca872e480004c2fc389657aae6da", published_at: 2026-09-02T21:19:59Z, accessed_at: 2026-09-03T05:40:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-25], excerpt: "timestamp 2026-09-02T21:19:59.000000Z status ok block_number 52885810 from 0x611AE9B71d9F3D07788CB22b925bcDf17445b89b (is_contract false) to PonsV2LaunchAndBuy method launchAndBuy. decoded name Ordihood symbol ORDIHOOD pairToken 0x000…000 twitter https://x.com/_Ordihood_ website empty quoteIn 0.029e18. Creates 0x6E9c…246F. Flag ca-collision." }
  - { id: R-26, publisher: Blockscout, title: "LaunchSwept / CurveCompleted tx 0x195e8185…49a7", url: "https://robinhoodchain.blockscout.com/tx/0x195e8185d89413ef72a58e7ba32032b5a3afd5a1c9bc79d0856f858dd79149a7", published_at: 2026-09-02T23:09:59Z, accessed_at: 2026-09-03T05:43:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1], excerpt: "timestamp 2026-09-02T23:09:59.000000Z status ok block_number 52949767. CurveCompleted recipient factory quoteOut 4200000000000000158 tokenOut 285714285714285714285714285. LaunchSwept token 0xb27a…71Bc quoteOut 4200000000000000158 tokenOut 285714285714285714285714285. One second before createGraduatedPool." }
  - { id: R-27, publisher: "@annisapt_", title: "Claim-portal post embedding the CA", url: "https://x.com/annisapt_/status/2095384722885005709", published_at: 2026-09-03T05:33:42Z, accessed_at: 2026-09-03T05:40:00Z, kind: social, authority: social, authenticity: unconfirmed, supports: [CLM-19], excerpt: "Not sure how many wallets got this. But $ORDIHOOD eligibility is showing for me. CA: 0xb27ac340261a8486b8f39dd23b8a95D434a071Bc https://crypto-ugd.netlify.app/claim?contract=0xb27ac340261a8486b8f39dd23b8a95D434a071Bc&cfg=evmdrop&pid=0pDNG. Flag copypasta-pattern and third-party-link. Not an official surface." }

gaps:
  - { priority: P0, question: "Which site-JS addresses besides 0xb27a…71Bc are the inscription / auction / rhc-20 contracts, and do they share the token deployer?", checked: "Bundle embeds 0xb27a…71Bc plus 0x4208…7ca2 (code 5604 B), 0x6c16…7654 (6422 B), 0xa4a8…4561 (4296 B); 0x4cab…4a9d and 0x7ae9…4975 have empty code. None of those extra addresses were opened on Blockscout this pass, 2026-09-03", next: "Blockscout-name and eth_call the three non-empty site-JS contracts; map auction of Inscription #0 to a tx" }
  - { priority: P0, question: "Does t.me/ordihood pin CA 0xb27a…71Bc, and is @ordihood_bot the holder-gate bot from the ROBINS post?", checked: "public preview title Ordihood [Community], 386 members, no CA in HTML; constructor and site JS list t.me/ordihood; ROBINS post names @ordihood_bot, 2026-09-03", next: "open join-page pins if public; search Blockscout for ordihood_bot related contracts" }
  - { priority: P1, question: "Does verified PonsV2LaunchFactory source leave privileged paths on owner 0x263e…19Dd that affect this graduated pool?", checked: "token owner() reverts; factory owner is SafeProxy 0x263e…19Dd; locker.isLocked true positionId 1572672, 2026-09-03", next: "read createGraduatedPool and locker modifiers on the explorer source" }
  - { priority: P1, question: "What remains of collision 0x6E9c…246F (curve 0x7b57ca2c…8d10) after holders_count 1?", checked: "unverified Pons clone; Gecko reserve_in_usd 3996 volume_usd.h24 136; DexScreener search listed it as a second ORDIHOOD/WETH, 2026-09-03", next: "RPC curve.graduated() and DexScreener tokens API on 0x6E9c…246F" }
  - { priority: P2, question: "Which Gecko window printed ORDIHOOD/WETH liq ~$59092 vol ~$1178232?", checked: "Live Gecko pool at 2026-09-03T05:46:54Z reserve 40752.28 volume_usd.h24 1319653.13 fdv 187662.89; DexScreener 40228.73 / 1329028.48, 2026-09-03", next: "archive a Gecko pool screenshot if the ~$59k reserve reprint returns" }
---

# ORDIHOOD — research packet

## What it is

A one-billion-supply ERC-20 launched on a Pons v2 ETH bonding curve that graduated into a locked Uniswap v4 ORDIHOOD/WETH pool. Traders buy and sell ORDIHOOD on that book. @_Ordihood_ and ordihood.art present numbered onchain inscriptions starting at #0, with the same contract in the account bio and the site bundle.

Themes: memecoin, nft, launchpad

## Why it matters

The ORDIHOOD/WETH Uniswap v4 book printed about $1.32M of 24h volume on Gecko at collection, with Gecko launchpad_details marking the Pons curve completed at 2026-09-02T23:10:00Z. @_Ordihood_ posted inscription counts, an Inscription #0 auction, and a transfer to 0xdead on the same CA. A second unverified ORDIHOOD at 0x6E9c…246F shares the ticker.

## What could go wrong

USD liquidity figures on the ORDIHOOD/WETH book count both sides against ETH, not USDG. Factory owner is a Pons Safe; the token owner() reverts. Ticker collision 0x6E9c…246F is a second Pons clone. A third-party claim URL on X used this CA.

## Product and mechanics

PonsV2LaunchAndBuy 0xe33E…2948 clones PonsV2LauncherToken via PonsV2LaunchDeployer. launchAndBuy from 0x5B11…8F2B at 2026-09-02T21:43:38Z minted Ordihood / ORDIHOOD supply 1e9*1e18 onto curve 0x9575…55Af quoted against ETH. TokenLaunched graduationThreshold 4.2e18. [verified R-4 R-5 R-6]

CurveCompleted / LaunchSwept at 2026-09-02T23:09:59Z then createGraduatedPool at 2026-09-02T23:10:00Z initialized Uniswap v4 poolId 0x93d0…a82a fee 0 hooks V2MemeHook 0xE5e7…e044. V2LaunchLocker PositionLocked 1572672 TokenSupplyLocked ~81.63e6 tokens. getLaunchedToken.phase is 2. Secondary ORDIHOOD/USDG books exist on DexScreener with far less liquidity than the ETH book. [verified R-7 R-8 R-16 R-26]

## Control and security

token owner() reverts. Deployer 0x5B11…8F2B has no code and is also creatorFeeRecipient. Factory owner is SafeProxy 0x263e…19Dd. locker.isLocked is true. [verified R-5 R-6 R-16]

PonsV2LauncherToken is fully verified on Blockscout (contracts/src/v2/PonsV2LauncherToken.sol, compiler v0.8.35). Verified source says deployer confers no privileges. No audit report URL was located this pass. [verified R-1] [unknown]

## Team and provenance

Official domain https://www.ordihood.art/ and handle @_Ordihood_ cross-link the CA: site JS embeds 0xb27a…71Bc and the handle; the handle bio embeds the same CA. Constructor socials match. t.me/ordihood is listed on the token and in the site bundle; the public preview has no CA. [verified R-4 R-10 R-11]

A second launchAndBuy 24 minutes earlier from EOA 0x611A…b89b minted unverified Ordihood / ORDIHOOD at 0x6E9c…246F with twitter https://x.com/_Ordihood_ and empty website. Flag ca-collision. [verified R-14 R-25]

## Economics and activity

ORDIHOOD/WETH Uniswap v4 24h volume is 1319653.13 USD and reserve_in_usd is 40752.28 at 2026-09-03T05:46:54Z from the Gecko pool endpoint. fdv_usd is 187662.89. Gecko token volume_usd.h24 is 1378220.15 across all pools, not the WETH book. [claim R-8 R-9]

DexScreener same pair: liquidity.usd 40228.73, volume.h24 1329028.48, fdv/marketCap 182216. Blockscout holders_count 969. Pair created 2026-09-02T23:10:00Z. [claim R-1 R-7]

Assignment lead of Gecko ORDIHOOD/WETH liq ~$59,092 vol ~$1,178,232 was not the live print this pass; live Gecko reserve is $40,752. [claim R-8]

## Material risks

- Ticker collision: unverified ORDIHOOD 0x6E9c…246F, holders_count 1. [verified R-14]
- Pool USD reserve is ORDIHOOD plus ETH, not a USDG backstop. [claim R-7 R-8]
- Factory owner is a Pons Safe; token owner() reverts. [verified R-6]
- Third-party claim URL on X used this CA (copypasta-pattern, third-party-link). [claim R-27]
- No audit report URL this pass. [unknown]

## Verification passes

- Receipts: Blockscout token/curve/deployer/factory/LaunchAndBuy/locker, launchAndBuy 0x3d1a…52e1, LaunchSwept 0x195e…49a7, createGraduatedPool 0x96b1…b7fb, transfer-to-dead 0xee72…6814, RPC name/symbol/launchFactory/socials/getLaunchedToken/locker/curve, DexScreener tokens, Gecko search/pool/token, ordihood.art + JS bundle, t.me/ordihood, and @_Ordihood_ posts were opened on 2026-09-03 and excerpts copied from the responses. [verified R-1 R-5 R-8 R-11]
- Numbers: 1319653.13 is the Gecko ORDIHOOD/WETH pool 24h volume, not the 1378220.15 token all-pools figure. Reserve 40752.28 is that pool. DexScreener 1329028.48 / 40228.73 is the same pair, different aggregator. [claim R-7 R-8 R-9]
- Adversarial: the strongest contrary reading is that 0x6E9c…246F is the official ORDIHOOD because it launched first and its constructor twitter is https://x.com/_Ordihood_. That clone is unverified, holders_count 1, website empty; 0xb27a…71Bc is the verified token whose CA is in the official bio and site JS. [inference R-10 R-11 R-14]

## Operations log

- Base: `git -C /Users/harsharnsingh/proofline-pr59 rev-parse origin/main` recorded as 334ca0619aa62e922da83f46de021f06d12348cf. Census 49 slugs have no ordihood / ORDIHOOD / 0xb27a…71Bc.
- Explorer: Blockscout api/v2 search, token, impl/curve/factory/deployer/LaunchAndBuy/locker, launchAndBuy 0x3d1a…52e1, collision create 0x66b0…e6da, LaunchSwept 0x195e…49a7, createGraduatedPool 0x96b1…b7fb, transfer 0xee72…6814. RPC eth_getCode/eth_call with Chrome UA at blocks 53178692–53181735.
- Aggregators: DexScreener latest/dex/tokens and search; Gecko search/pools HTTP 200, pool HTTP 200, token HTTP 200.
- Social: X keyword ORDIHOOD Latest; from:_Ordihood_; user search Ordihood; t.me/ordihood preview; site HTML + /assets/index-BRashj_S.js.
- Failed: site static HTML has no CA (JS bundle used); Telegram preview has no CA; collision token is_verified false; assignment ~$59k Gecko reserve not live this pass.
- Time: collection 2026-09-03T05:39Z–2026-09-03T05:47Z.
