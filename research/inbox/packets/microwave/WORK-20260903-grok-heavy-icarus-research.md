---
# Packet v2 (docs/research-system.md §5). Seed with Icarus What-it-is + events.
contract_version: proofline-research-v2
work_id: WORK-20260903-grok-heavy-icarus-research
producer: grok-heavy
role: collector
base_sha: 334ca0619aa62e922da83f46de021f06d12348cf
slug: microwave
name: MICROWAVE
packet_tier: seed
as_of: 2026-09-03T04:52:00Z
prior_packet: null
supersedes: null
owned_slugs: [microwave]
allowed_paths:
  - research/inbox/packets/microwave/WORK-20260903-grok-heavy-icarus-research.md

identity:
  canonical_name: Microwave
  aliases: ["$MICROWAVE"]
  symbols: [MICROWAVE]
  entity_kind: token
  chain_scope: robinhood-native
  official_domain: https://microwave.moreright.xyz/
  official_handle: "@MoreRightDAO"
  repository: "NULL — GitHub search q=microwave+moreright total_count 0; microwave.moreright.xyz, DexScreener info, onchain socials(), and Blockscout list no GitHub URL this pass"
  possible_matches:
    - slug: pons
      signals: [shared-address]
      contrary_signals:
        - "Census Pons is the bonding-curve launchpad at ponsfamily.com / @ponsdotfamily with v2 factory 0x7eD5…EC7e"
        - "MICROWAVE is a graduation token created through that factory via PonsV2LaunchAndBuy.launchAndBuy; entity_kind token, not protocol"
        - "Official surfaces differ: microwave.moreright.xyz / @MoreRightDAO versus ponsfamily.com / @ponsdotfamily"
    - slug: long
      signals: [other]
      contrary_signals:
        - "Census LONG is a stock-paired factory at app.long.xyz / @longdotxyz with LongLauncher 0x22e9…eeED"
        - "MICROWAVE is a PonsV2LauncherToken at 0x79E1B7…888b, Uniswap v4 MICROWAVE/USO pool 0xab8a…92ff, not a LongLauncher Doppler clone"
        - "No shared domain, handle, or reproduced address"
    - slug: bankr
      signals: [other]
      contrary_signals:
        - "Census Bankr is an agent execution surface at bankr.bot / @bankrbot using DopplerERC20V1Factory 0x1B37…b69a"
        - "MICROWAVE create path is PonsV2LaunchAndBuy 0xe33E…2948 from EOA 0x1A63…32Fc, not Doppler/Airlock"
        - "No shared domain, handle, or reproduced address"
    - slug: artificial-inu
      signals: [other]
      contrary_signals:
        - "Census Artificial Inu is $AI at 0x2E8c…1e18 paired to NVDA via LongLauncher, site artificialinu.com / @ArtificiallyInu"
        - "MICROWAVE is ticker MICROWAVE at 0x79E1B7…888b paired to the USO rail via Pons v2"
        - "No shared domain, handle, or reproduced address"

classification:
  primary_leaf: rwa-products/stock-paired-token
  secondary_leaves: [launch/graduation-token]
  mechanism_tags: [stock-paired, rwa, amm, launchpad, bonding-curve]
  ecosystem_role: graduation
  lifecycle: mainnet
  coverage_recommendation: seed
  evidence_state: partly-verified
  rationale: "Not in the 49-row census. Token 0x79E1B7…888b is a verified PonsV2LauncherToken with non-empty code on 4663; launchFactory() returns Pons v2 factory 0x7eD5…EC7e; launchAndBuy at 2026-09-02T08:17:58Z minted Microwave / MICROWAVE onto a bonding curve quoted against United States Oil Fund • Robinhood Token USO 0xa30FA3…D344 in GET /rhj/assets. createGraduatedPool at 2026-09-02T11:34:43Z initialized Uniswap v4 pool 0xab8a…92ff. USO is the quote rail. Distinct from packed CRUDECAT / GASOLINU / OILCOIN. [R-1] [R-4] [R-5] [R-6] [R-10] [R-12]"

qualifying:
  deployed_on_chain: { status: pass, claim_ids: [CLM-4, CLM-5, CLM-6], note: "" }
  native_play:       { status: pass, claim_ids: [CLM-1, CLM-15], note: "" }
  citable:           { status: pass, claim_ids: [CLM-2, CLM-3, CLM-8, CLM-22], note: "" }
  research_story:    { status: pass, claim_ids: [CLM-1, CLM-9, CLM-10], note: "" }

links:
  - { kind: site, url: "https://microwave.moreright.xyz/", authenticity: confirmed }
  - { kind: x, url: "https://x.com/MoreRightDAO", authenticity: confirmed }
  - { kind: other, url: "https://www.ponsfamily.com/launchpad/0x79E1B7E59054fd4E18Ad7C71E5781162BF28888b", authenticity: unconfirmed }

deployments:
  - label: MICROWAVE token (PonsV2LauncherToken)
    role: token
    address:
      value: "0x79E1B7E59054fd4E18Ad7C71E5781162BF28888b"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T04:46:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-1, R-5, R-18]
  - label: Pons v2 launch factory (launchFactory)
    role: factory
    address:
      value: "0x7eD598BcEf8bd9Edd8C97A195C6d13f40801EC7e"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T04:47:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-3, R-5, R-6]
  - label: PonsV2LaunchAndBuy (launchAndBuy)
    role: router
    address:
      value: "0xe33E9E479dF8802cb0866d5d05258bEc4cF62948"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T04:47:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-4]
  - label: PonsV2BondingCurve
    role: other
    address:
      value: "0x753a27A3C2AEb46A6476c5a065be7786938A7D83"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T04:47:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-4, R-5]
  - label: USO Stock Token rail (pair quote)
    role: token
    address:
      value: "0xa30FA36Db767ad9eD3f7a60fC79526fB4d56D344"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T04:47:00Z
      exists_on_4663: true
      explorer_source_verified: true
      explorer_source_verification_scope: proxy-shell-only
      implementation_source_verified: true
    receipt_ids: [R-2, R-5, R-10, R-11]
  - label: OfficeTreasury (creator fee recipient)
    role: other
    address:
      value: "0xbfDcC6a3e2dAb9B80303c9956011CaBec10Ab90B"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T04:47:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-5, R-14, R-19]
  - label: V2LaunchLocker (locked LP)
    role: other
    address:
      value: "0x267444D099b10fB5Ed7c3Cc7B7c767AdcA574952"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T04:47:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-5, R-12]

metrics:
  - { kind: volume_24h, value: 1316923.09, currency: USD, as_of: 2026-09-03T04:51:00Z, window: 24h, method: "api.dexscreener.com/latest/dex/pairs/robinhood/0xab8a29144bb8d63a663844ca02a0b8fb5d69df0bae6fc5432b6f8414126192ff volume.h24 (MICROWAVE/USO Uniswap v4, not an all-pools figure)", class: claim, receipt_ids: [R-7] }
  - { kind: tvl, value: 30941.6, currency: USD, as_of: 2026-09-03T04:51:00Z, window: point, method: "api.dexscreener.com/latest/dex/pairs/robinhood/0xab8a29144bb8d63a663844ca02a0b8fb5d69df0bae6fc5432b6f8414126192ff liquidity.usd (MICROWAVE/USO pool, not an all-pools figure)", class: claim, receipt_ids: [R-7] }
  - { kind: market_cap, value: 111098, currency: USD, as_of: 2026-09-03T04:51:00Z, window: point, method: "api.dexscreener.com/latest/dex/pairs/robinhood/0xab8a29144bb8d63a663844ca02a0b8fb5d69df0bae6fc5432b6f8414126192ff marketCap (fdv 111098 on the same pair)", class: claim, receipt_ids: [R-7] }
  - { kind: holders, value: 721, currency: null, as_of: 2026-09-03T04:46:00Z, window: point, method: "robinhoodchain.blockscout.com/api/v2/tokens/0x79E1B7E59054fd4E18Ad7C71E5781162BF28888b holders_count", class: claim, receipt_ids: [R-1] }

reproductions:
  - { id: REP-1, method: explorer-rpc, chain_id: 4663, checked_at: 2026-09-03T04:49:00Z, receipt_ids: [R-5], result: "rpc.mainnet.chain.robinhood.com eth_chainId 0x1237 (4663) eth_blockNumber 0x32afa2c (53148204). Token 0x79E1B7…888b eth_getCode 3248 bytes prefix 60806040 (not EIP-1167). name Microwave, symbol MICROWAVE, decimals 18, totalSupply 1e27. owner() and factory() revert. launchFactory() 0x7eD598BcEf8bd9Edd8C97A195C6d13f40801EC7e. deployer() 0x1A634742262F8657db3Cd1aa402bB0c0469232Fc. curve() 0x753a27A3C2AEb46A6476c5a065be7786938A7D83. socials() twitter https://x.com/MoreRightDAO website https://microwave.moreright.xyz/ telegram/discord/farcaster empty. USO name United States Oil Fund • Robinhood Token. Deployer EOA eth_getCode 0x." }
  - { id: REP-2, method: explorer-ui, chain_id: 4663, checked_at: 2026-09-03T04:47:00Z, receipt_ids: [R-1, R-3, R-4, R-11, R-12, R-18], result: "Blockscout api/v2 token 0x79E1B7…888b name Microwave symbol MICROWAVE holders_count 721 total_supply 1e27. Address is_contract true is_verified true name PonsV2LauncherToken proxy_type null creator_address_hash PonsV2LaunchDeployer 0x3711ceA4…1A42 creation_transaction_hash 0x8cea769f…e1d4. Smart-contract file contracts/src/v2/PonsV2LauncherToken.sol compiler v0.8.35 is_fully_verified true verified_at 2026-09-02T08:24:11Z. launchAndBuy tx 0x8cea769f…e1d4 2026-09-02T08:17:58Z block 52426027 from EOA 0x1A63…32Fc to PonsV2LaunchAndBuy method launchAndBuy. decoded name Microwave symbol MICROWAVE pairToken USO 0xa30FA3…D344 creatorFeeRecipient 0xbfDc…b90B creatorTaxBps 100 buybackEnabled false website https://microwave.moreright.xyz/ twitter https://x.com/MoreRightDAO quoteIn 0.327120485469384263e18. TokenLaunched token 0x79E1B7…888b curve 0x753a…7D83 graduationThreshold 71798851063829787942. createGraduatedPool tx 0x7226bcd4…7f50 2026-09-02T11:34:43Z block 52543145. PoolManager Initialize id 0xab8a…92ff currency0 MICROWAVE currency1 USO fee 0 tickSpacing 200 hooks V2MemeHook 0xE5e7…e044. PoolGraduated positionId 1501919 tokenAmount 204081632653061224658716168 pairTokenAmount 71798851063829788153. V2LaunchLocker TokenSupplyLocked 81632653061224489621313301 PositionLocked 1501919." }
  - { id: REP-3, method: explorer-rpc, chain_id: 4663, checked_at: 2026-09-03T04:49:00Z, receipt_ids: [R-5, R-6], result: "block 53148204. factory.approvedPairTokens(USO) true; approvedPairTokens(MICROWAVE) false. getLaunchedToken(0x79E1B7…888b): token 0x79E1B7…888b curve 0x753a…7D83 deployer 0x1A63…32Fc creatorFeeRecipient 0xbfDc…b90B pairToken 0xa30FA3…D344 graduationThreshold 71798851063829787942 poolFee 0 tickSpacing 200 creatorTaxBps 100 buybackEnabled 0 phase 2 PoolCreated exists 1. locker() 0x267444D0…4952 memeHook() 0xE5e70264…e044 launchDeployer() 0x3711ceA4…1A42 poolManager() 0x8366a39C…0951 owner 0x263ed295…19Dd. locker.isLocked true lockedPositions 1501919 lockedTokenSupply 81632653061224489621313301. eth_getLogs factory TokenLaunched tx 0x8cea769f…e1d4 block 52426027; LaunchSwept tx 0x5bc37aff…a71e block 52543118; PoolGraduated tx 0x7226bcd4…7f50 block 52543145 positionId 1501919." }
  - { id: REP-4, method: api, checked_at: 2026-09-03T04:51:00Z, receipt_ids: [R-7, R-8, R-9], result: "DexScreener latest/dex/tokens/0x79E1B7…888b: 15 robinhood uniswap pairs; top MICROWAVE/USO v4 0xab8a…92ff quote 0xa30FA3…D344 United States Oil Fund • Robinhood Token / USO. Pair endpoint liquidity.usd 30941.6 volume.h24 1316923.09 fdv/marketCap 111098 priceUsd 0.0001111 pairCreatedAt 1788348883000 (2026-09-02T11:34:43Z) txns.h24 buys 4579 sells 4150 liq base 139212695 quote 105.2549 USO. info.websites https://microwave.moreright.xyz/ info.socials https://x.com/morerightdao. Search also returns ticker clones MICROWAVE 0x5318B43F…C4c2/WETH and MICROWAVE 0xFEa44CA1…1e18/AI. None share 0x79E1B7…888b except this book's own ETH/USDG legs. Gecko token GET 200: volume_usd.h24 1272308.180093 (all-pools) fdv_usd 109740.65 total_reserve_in_usd 16115.95 (all-pools, not the USO book) launchpad_details completed true completed_at 2026-09-02T11:34:43Z migrated_destination_pool_address 0xab8a…92ff. Gecko pool JSON 429 this pass." }
  - { id: REP-5, method: api, checked_at: 2026-09-03T04:50:00Z, receipt_ids: [R-10], result: "GET api.robinhood.com/rhj/assets HTTP 200; assets length 194; one USO row tokenSymbol USO tokenName United States Oil Fund • Robinhood Token deployments contractAddress 0xa30FA36Db767ad9eD3f7a60fC79526fB4d56D344 chainId 4663 status ASSET_STATUS_ACTIVE isin US91232N2071. tokenSymbol/tokenName scan for MICROWAVE returned 0 hits." }
  - { id: REP-6, method: official-crosslink, checked_at: 2026-09-03T04:48:00Z, receipt_ids: [R-4, R-7, R-13, R-14], result: "launchAndBuy socials twitter https://x.com/MoreRightDAO website https://microwave.moreright.xyz/. Token socials() match. DexScreener info matches. Site title Microwave ($MICROWAVE); og:title Microwave ($MICROWAVE) — paired with USO; embeds CA 0x79E1B7…888b, curve 0x753a…7D83, treasury 0xbfDc…b90B, USO 0xa30FA3…D344, launch tx 0x8cea769f…e1d4, and https://x.com/MoreRightDAO. @MoreRightDAO display MoreRightDAO bio COOKING MEMES, 664 followers; sampled Latest posts name $MICROWAVE / $USO / treasury burn and do not embed the CA this pass." }
  - { id: REP-7, method: explorer-rpc, chain_id: 4663, checked_at: 2026-09-03T04:50:00Z, receipt_ids: [R-5, R-14], result: "OfficeTreasury 0xbfDc…b90B eth_getCode 8329 B. token() 0x79E1B7…888b. owner() reverts. initialized() true. assetCount 1. allAssets [USO 0xa30FA3…D344]. held(USO) 142130516298826597374 (~142.13e18). pot(USO) 164744452950588300965 (~164.74e18). Site last-modified 2026-09-02T17:07:51Z describes 1.00% creator tax to treasury, 2% exit fee on redeem, and collect()." }

claims:
  - { id: CLM-1, field: product.mechanism, value: "Pons v2 launch: launchAndBuy mints a 1e9-supply ERC-20 onto a bonding curve quoted against an owner-approved pair token, then createGraduatedPool initializes a Uniswap v4 pool with V2MemeHook and locks the LP in V2LaunchLocker. MICROWAVE used pairToken USO, quoteIn 0.327120485469384263e18, launchConfigId 0, creatorTaxBps 100, buybackEnabled false; getLaunchedToken.phase is PoolCreated (enum 2). poolFee 0 tickSpacing 200 graduationThreshold ~71.80e18 USO.", class: verified, observed_at: 2026-09-03T04:50:00Z, receipt_ids: [R-4, R-5, R-6, R-12, R-18], reproduction_ids: [REP-1, REP-2, REP-3], supersedes: null }
  - { id: CLM-2, field: identity.name, value: "Microwave", class: verified, observed_at: 2026-09-03T04:46:00Z, receipt_ids: [R-1, R-4, R-5], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-3, field: identity.symbol, value: "MICROWAVE", class: verified, observed_at: 2026-09-03T04:46:00Z, receipt_ids: [R-1, R-4, R-5], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-4, field: deployment.address, value: "0x79E1B7E59054fd4E18Ad7C71E5781162BF28888b", class: verified, observed_at: 2026-09-03T04:47:00Z, receipt_ids: [R-1, R-4, R-5, R-18], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-5, field: deployment.address, value: "0x7eD598BcEf8bd9Edd8C97A195C6d13f40801EC7e", class: verified, observed_at: 2026-09-03T04:49:00Z, receipt_ids: [R-3, R-5, R-6], reproduction_ids: [REP-1, REP-3], supersedes: null }
  - { id: CLM-6, field: lifecycle, value: mainnet, class: verified, observed_at: 2026-09-03T04:51:00Z, receipt_ids: [R-1, R-4, R-5, R-7, R-12], reproduction_ids: [REP-1, REP-2, REP-4], supersedes: null }
  - { id: CLM-7, field: taxonomy.primary-leaf, value: rwa-products/stock-paired-token, class: claim, observed_at: 2026-09-03T04:51:00Z, receipt_ids: [R-4, R-7, R-10], reproduction_ids: [], supersedes: null }
  - { id: CLM-8, field: identity.handle, value: "@MoreRightDAO", class: verified, observed_at: 2026-09-03T04:48:00Z, receipt_ids: [R-4, R-5, R-7, R-13], reproduction_ids: [REP-1, REP-6], supersedes: null }
  - { id: CLM-9, field: relationship, value: "Pair quote USO 0xa30FA3…D344 is the United States Oil Fund • Robinhood Token rail in GET /rhj/assets (194 assets, one USO row, chainId 4663, ASSET_STATUS_ACTIVE, isin US91232N2071). USO is the quote rail, not the subject. Distinct from packed CRUDECAT 0xBD957Cc9…cF3e, GASOLINU 0x1e6EA1…1e18, and OILCOIN 0x9CB19d6e…1E18, which are other USO-paired books.", class: verified, observed_at: 2026-09-03T04:51:00Z, receipt_ids: [R-7, R-8, R-10, R-11], reproduction_ids: [REP-4, REP-5], supersedes: null }
  - { id: CLM-10, field: economics.metric, value: "MICROWAVE/USO Uniswap v4 24h volume 1316923.09 USD and liquidity.usd 30941.6 at 2026-09-03T04:51:00Z (DexScreener pair slice)", class: verified, observed_at: 2026-09-03T04:51:00Z, receipt_ids: [R-7], reproduction_ids: [REP-4], supersedes: null }
  - { id: CLM-11, field: economics.metric, value: "Gecko token volume_usd.h24 1272308.180093 and total_reserve_in_usd 16115.95 at 2026-09-03T04:48:41Z are all-pools figures, not the USO book; fdv_usd 109740.65 market_cap_usd null. Gecko pool JSON returned 429 this pass.", class: verified, observed_at: 2026-09-03T04:48:41Z, receipt_ids: [R-9], reproduction_ids: [REP-4], supersedes: null }
  - { id: CLM-12, field: economics.metric, value: 721, class: verified, observed_at: 2026-09-03T04:46:00Z, receipt_ids: [R-1], reproduction_ids: [REP-2], supersedes: null }
  - { id: CLM-13, field: control.owner, value: "owner() on the token reverts; deployer() is EOA 0x1A634742262F8657db3Cd1aa402bB0c0469232Fc with empty code; launchFactory() is Pons v2 factory 0x7eD5…EC7e. OfficeTreasury owner() reverts. Factory owner is 0x263ed295…19Dd (Pons SafeProxy).", class: verified, observed_at: 2026-09-03T04:50:00Z, receipt_ids: [R-5, R-14], reproduction_ids: [REP-1, REP-7], supersedes: null }
  - { id: CLM-14, field: control.privileged-role, value: "creatorFeeRecipient / OfficeTreasury 0xbfDcC6a3e2dAb9B80303c9956011CaBec10Ab90B; factory owner 0x263ed295…19Dd; V2MemeHook PoolRegistered creator is that treasury. Verified PonsV2LauncherToken source: deployer is immutable reference data and confers no privileges.", class: verified, observed_at: 2026-09-03T04:50:00Z, receipt_ids: [R-4, R-5, R-12, R-18], reproduction_ids: [REP-2, REP-3], supersedes: null }
  - { id: CLM-15, field: other, value: "Pair asset is USO rail 0xa30FA36Db767ad9eD3f7a60fC79526fB4d56D344; venue is Uniswap v4 PoolManager 0x8366a39CC670B4001A1121B8F6A443A643e40951 poolId 0xab8a29144bb8d63a663844ca02a0b8fb5d69df0bae6fc5432b6f8414126192ff fee 0 hooks V2MemeHook 0xE5e702641Ea86F4ae6cC3cDaeD2B886f976Be044", class: verified, observed_at: 2026-09-03T04:50:00Z, receipt_ids: [R-5, R-7, R-12], reproduction_ids: [REP-2, REP-3, REP-4], supersedes: null }
  - { id: CLM-16, field: deployment.role, value: "Pad is Pons v2 (factory 0x7eD5…EC7e, LaunchAndBuy 0xe33E…2948, LaunchDeployer 0x3711…1A42). Not LongLauncher, Circus, or Doppler/Airlock.", class: verified, observed_at: 2026-09-03T04:47:00Z, receipt_ids: [R-3, R-4, R-5], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-17, field: taxonomy.chain-scope, value: robinhood-native, class: verified, observed_at: 2026-09-03T04:49:00Z, receipt_ids: [R-5, R-7], reproduction_ids: [REP-1, REP-4], supersedes: null }
  - { id: CLM-18, field: security.audit, value: "No audit report URL was located on microwave.moreright.xyz, the X profile, DexScreener, Gecko token, Blockscout, or GitHub search this pass; Pons v2 docs were not re-opened for a MICROWAVE-scoped report", class: unknown, observed_at: 2026-09-03T04:52:00Z, receipt_ids: [], reproduction_ids: [], supersedes: null }
  - { id: CLM-19, field: communications.status, value: "copypasta-pattern / third-party-link: Latest posts used robinhood-main-dex-nqf.netlify.app/vote, robinhood-main-dex-sjt.netlify.app/vote, and crypto-keo.netlify.app/claim with CA 0x79E1B7…888b. Those hosts are not the onchain website.", class: claim, observed_at: 2026-09-03T04:48:00Z, receipt_ids: [R-16, R-17], reproduction_ids: [], supersedes: null }
  - { id: CLM-20, field: economics.metric, value: "DexScreener pair fdv/marketCap 111098; Gecko token fdv_usd 109740.65. Gecko market_cap_usd null.", class: verified, observed_at: 2026-09-03T04:51:00Z, receipt_ids: [R-7, R-9], reproduction_ids: [REP-4], supersedes: null }
  - { id: CLM-21, field: deployment.address, value: "0xa30FA36Db767ad9eD3f7a60fC79526fB4d56D344", class: verified, observed_at: 2026-09-03T04:50:00Z, receipt_ids: [R-2, R-5, R-10, R-11], reproduction_ids: [REP-1, REP-5], supersedes: null }
  - { id: CLM-22, field: identity.domain, value: "https://microwave.moreright.xyz/", class: verified, observed_at: 2026-09-03T04:48:00Z, receipt_ids: [R-4, R-5, R-7, R-13], reproduction_ids: [REP-1, REP-6], supersedes: null }
  - { id: CLM-23, field: candidate, value: "microwave | MICROWAVE | @MoreRightDAO | https://microwave.moreright.xyz/ — discovery token not in census 49", class: claim, observed_at: 2026-09-03T04:52:00Z, receipt_ids: [R-1, R-7], reproduction_ids: [], supersedes: null }
  - { id: CLM-24, field: "account.@MoreRightDAO.role", value: project, class: claim, observed_at: 2026-09-03T04:48:00Z, receipt_ids: [R-4, R-7, R-13, R-15], reproduction_ids: [], supersedes: null }
  - { id: CLM-25, field: "account.@MoreRightDAO.slug", value: microwave, class: claim, observed_at: 2026-09-03T04:48:00Z, receipt_ids: [R-4, R-13], reproduction_ids: [], supersedes: null }
  - { id: CLM-26, field: relationship, value: "Ticker collision: Microwave / MICROWAVE 0x5318B43F85AE1515a6a288620155D837Dcd9C4c2 / WETH holders_count 441 creator 0x8098DAE7…769A; Microwave / MICROWAVE 0xFEa44CA118Bf01c7431499B093A4Bc2181611e18 EIP-1167 DopplerERC20V1 / AI. Neither is 0x79E1B7…888b.", class: verified, observed_at: 2026-09-03T04:51:00Z, receipt_ids: [R-8], reproduction_ids: [REP-4], supersedes: null }
  - { id: CLM-27, field: taxonomy.mechanism-tag, value: stock-paired, class: verified, observed_at: 2026-09-03T04:50:00Z, receipt_ids: [R-4, R-6, R-10], reproduction_ids: [REP-3, REP-5], supersedes: null }
  - { id: CLM-28, field: product.mechanism, value: "OfficeTreasury 0xbfDc…b90B is the launch creatorFeeRecipient and token() of the treasury. Site and verified source: 1.00% creator tax in the pair token accrues via Pons fee escrow; holders may redeem by burning MICROWAVE for pro-rata treasury assets minus a 2% exit fee that stays in the pot; collect() pulls credited fees. RPC this pass: allAssets is USO only; held(USO) 142.130516298826597374e18.", class: verified, observed_at: 2026-09-03T04:50:00Z, receipt_ids: [R-5, R-13, R-14, R-19], reproduction_ids: [REP-7], supersedes: null }
  - { id: CLM-29, field: deployment.address, value: "0xbfDcC6a3e2dAb9B80303c9956011CaBec10Ab90B", class: verified, observed_at: 2026-09-03T04:50:00Z, receipt_ids: [R-5, R-14], reproduction_ids: [REP-7], supersedes: null }
  - { id: CLM-30, field: deployment.address, value: "0xe33E9E479dF8802cb0866d5d05258bEc4cF62948", class: verified, observed_at: 2026-09-03T04:47:00Z, receipt_ids: [R-4], reproduction_ids: [REP-2], supersedes: null }
  - { id: CLM-31, field: other, value: "factory.approvedPairTokens(0xa30FA3…D344) returns true this pass", class: verified, observed_at: 2026-09-03T04:49:00Z, receipt_ids: [R-5, R-6], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-32, field: taxonomy.secondary-leaf, value: launch/graduation-token, class: verified, observed_at: 2026-09-03T04:50:00Z, receipt_ids: [R-9, R-12], reproduction_ids: [REP-2, REP-4], supersedes: null }
  - { id: CLM-33, field: communications.status, value: "Onchain socials() and the site name @MoreRightDAO and microwave.moreright.xyz; DexScreener info matches. Sampled Latest posts from the handle name $MICROWAVE / $USO / treasury burn and do not embed CA 0x79E1B7…888b this pass.", class: claim, observed_at: 2026-09-03T04:48:00Z, receipt_ids: [R-13, R-15], reproduction_ids: [REP-6], supersedes: null }

conflicts:
  - id: CON-1
    field: economics.metric
    claim_ids: [CLM-10, CLM-11]
    material_effect: "MICROWAVE/USO 24h volume is 1316923.09 on the DexScreener pair slice versus Gecko token all-pools 1272308.180093; reserve/liquidity is pair 30941.6 versus Gecko token total_reserve_in_usd 16115.95. A card that collapses them would misstate the book."
    status: open
    resolution: null
  - id: CON-2
    field: economics.metric
    claim_ids: [CLM-10, CLM-20]
    material_effect: "DexScreener pair fdv/marketCap 111098 vs Gecko token fdv_usd 109740.65; market_cap_usd is null on Gecko"
    status: open
    resolution: null

events:
  - id: EVT-1
    type: onchain
    title: "DexScreener MICROWAVE/USO 24h volume $1.32M, liquidity $31k"
    summary: "DexScreener pair 0xab8a…92ff volume.h24 1316923.09 liquidity.usd 30941.6 fdv/marketCap 111098 at collection."
    occurred_at: 2026-09-03T04:51:00Z
    observed_at: 2026-09-03T04:51:00Z
    affected_fields: [economics.metric, activity.status]
    evidence_state: verified
    impact: material
    site_recommendation: both
    channel_recommendation: none
    receipt_ids: [R-7]
  - id: EVT-2
    type: onchain
    title: "Pons v2 launchAndBuy minted Microwave / MICROWAVE against USO"
    summary: "Tx 0x8cea769f…e1d4 from 0x1A63…32Fc at 2026-09-02T08:17:58Z created Microwave / MICROWAVE with pairToken USO 0xa30FA3…D344, creatorTaxBps 100, creatorFeeRecipient OfficeTreasury 0xbfDc…b90B."
    occurred_at: 2026-09-02T08:17:58Z
    observed_at: 2026-09-03T04:47:00Z
    affected_fields: [deployment.address, lifecycle, product.mechanism]
    evidence_state: verified
    impact: material
    site_recommendation: profile
    channel_recommendation: none
    receipt_ids: [R-4, R-18]
  - id: EVT-3
    type: onchain
    title: "createGraduatedPool initialized MICROWAVE/USO Uniswap v4"
    summary: "Tx 0x7226bcd4…7f50 at 2026-09-02T11:34:43Z; PoolManager Initialize poolId 0xab8a…92ff; PoolGraduated positionId 1501919 tokenAmount ~2.041e26 pairTokenAmount ~71.80 USO; V2LaunchLocker TokenSupplyLocked ~8.163e25."
    occurred_at: 2026-09-02T11:34:43Z
    observed_at: 2026-09-03T04:50:00Z
    affected_fields: [deployment.address, lifecycle, product.mechanism]
    evidence_state: verified
    impact: material
    site_recommendation: profile
    channel_recommendation: none
    receipt_ids: [R-9, R-12]
  - id: EVT-4
    type: ct
    title: "@MoreRightDAO posted treasury burn-for-USO"
    summary: "Handle posted that fees go to a treasury where holders can burn MICROWAVE for USO, and that MICROWAVE/USO is a Pons graduate."
    occurred_at: 2026-09-03T01:13:32Z
    observed_at: 2026-09-03T04:48:00Z
    affected_fields: [product.mechanism, communications.status]
    evidence_state: claim
    impact: material
    site_recommendation: feed
    channel_recommendation: none
    receipt_ids: [R-15]
  - id: EVT-5
    type: ct
    title: "Netlify vote/claim pages circulated the CA"
    summary: "Latest posts pointed to robinhood-main-dex-*.netlify.app/vote and crypto-keo.netlify.app/claim with CA 0x79E1B7…888b. Those hosts are not the onchain website."
    occurred_at: 2026-09-03T03:56:18Z
    observed_at: 2026-09-03T04:48:00Z
    affected_fields: [communications.status]
    evidence_state: claim
    impact: routine
    site_recommendation: none
    channel_recommendation: none
    receipt_ids: [R-16, R-17]

receipts:
  - { id: R-1, publisher: Blockscout, title: "Token 0x79E1B7…888b Microwave / MICROWAVE", url: "https://robinhoodchain.blockscout.com/address/0x79E1B7E59054fd4E18Ad7C71E5781162BF28888b", published_at: null, accessed_at: 2026-09-03T04:46:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-2, CLM-3, CLM-4, CLM-6, CLM-12, CLM-23], excerpt: "api/v2/tokens hash 0x79E1B7E59054fd4E18Ad7C71E5781162BF28888b name Microwave symbol MICROWAVE decimals 18 total_supply 1000000000000000000000000000 holders_count 721 type ERC-20. api/v2/addresses is_contract true is_verified true name PonsV2LauncherToken proxy_type null implementations []. creator_address_hash 0x3711ceA4feaDE896C913C68F01Eda97Cb06D1A42 creation_transaction_hash 0x8cea769f9706cdbacc9279dcb24dbd140622096e76c3356be0491b8c253ae1d4." }
  - { id: R-2, publisher: Blockscout, title: "Token 0xa30FA3…D344 USO", url: "https://robinhoodchain.blockscout.com/address/0xa30FA36Db767ad9eD3f7a60fC79526fB4d56D344", published_at: null, accessed_at: 2026-09-03T04:47:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-9, CLM-21], excerpt: "hash 0xa30FA36Db767ad9eD3f7a60fC79526fB4d56D344 name BeaconProxy is_contract true is_verified true proxy_type eip1967_beacon implementations Stock 0xb35490d6f9163DE4F80d88dc75c3516eb64C5aE2. token name United States Oil Fund • Robinhood Token symbol USO holders_count 5339 total_supply 8947311000000000000000." }
  - { id: R-3, publisher: Blockscout, title: "Address 0x7eD5…EC7e PonsV2LaunchFactory", url: "https://robinhoodchain.blockscout.com/address/0x7eD598BcEf8bd9Edd8C97A195C6d13f40801EC7e", published_at: null, accessed_at: 2026-09-03T04:47:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-5, CLM-16], excerpt: "hash 0x7eD598BcEf8bd9Edd8C97A195C6d13f40801EC7e name PonsV2LaunchFactory is_contract true is_verified true is_fully_verified true file_path contracts/src/v2/PonsV2LaunchFactory.sol compiler v0.8.35 verified_at 2026-08-04T17:40:45Z. ABI includes TokenLaunched, LaunchSwept, PoolGraduated, getLaunchedToken, approvedPairTokens, createGraduatedPool." }
  - { id: R-4, publisher: Blockscout, title: "launchAndBuy tx 0x8cea769f…e1d4", url: "https://robinhoodchain.blockscout.com/tx/0x8cea769f9706cdbacc9279dcb24dbd140622096e76c3356be0491b8c253ae1d4", published_at: 2026-09-02T08:17:58Z, accessed_at: 2026-09-03T04:47:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-2, CLM-3, CLM-4, CLM-6, CLM-8, CLM-14, CLM-16, CLM-22, CLM-24, CLM-25, CLM-27, CLM-30, EVT-2], excerpt: "timestamp 2026-09-02T08:17:58.000000Z status ok block 52426027 from EOA 0x1A634742…32Fc to PonsV2LaunchAndBuy 0xe33E…2948 method launchAndBuy. decoded name Microwave symbol MICROWAVE twitter https://x.com/MoreRightDAO website https://microwave.moreright.xyz/ creatorFeeRecipient 0xbfDc…b90B creatorTaxBps 100 buybackEnabled false pairToken USO 0xa30FA3…D344 quoteIn 327120485469384263. TokenLaunched token 0x79E1B7…888b curve 0x753a…7D83 graduationThreshold 71798851063829787942." }
  - { id: R-5, publisher: Robinhood Chain RPC, title: "eth_getCode, name/symbol, launchFactory, getLaunchedToken", url: "https://rpc.mainnet.chain.robinhood.com", published_at: null, accessed_at: 2026-09-03T04:49:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-2, CLM-3, CLM-4, CLM-5, CLM-6, CLM-8, CLM-13, CLM-14, CLM-15, CLM-16, CLM-17, CLM-21, CLM-22, CLM-28, CLM-29, CLM-31], excerpt: "eth_chainId 0x1237 (4663) eth_blockNumber 0x32afa2c (53148204). Token code 3248 B. name Microwave symbol MICROWAVE totalSupply 1e27. owner()/factory() revert. launchFactory 0x7eD5…EC7e deployer 0x1A63…32Fc curve 0x753a…7D83 socials twitter https://x.com/MoreRightDAO website https://microwave.moreright.xyz/. getLaunchedToken phase 2 PoolCreated creatorTaxBps 100. locker isLocked true. OfficeTreasury token() 0x79E1B7…888b held(USO) 142.13e18." }
  - { id: R-6, publisher: Blockscout, title: "PonsV2LaunchFactory verified source / ABI", url: "https://robinhoodchain.blockscout.com/address/0x7eD598BcEf8bd9Edd8C97A195C6d13f40801EC7e?tab=contract", published_at: null, accessed_at: 2026-09-03T04:50:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-5, CLM-27, CLM-31], excerpt: "ContractName PonsV2LaunchFactory. ILaunchpadV2 GraduationPhase { NotGraduated, Swept, PoolCreated, Rescued }. phase 2 is PoolCreated. Events TokenLaunched, LaunchSwept, PoolGraduated, GraduationTokensPermanentlyLocked." }
  - { id: R-7, publisher: DexScreener, title: "MICROWAVE/USO Uniswap v4 pair", url: "https://api.dexscreener.com/latest/dex/pairs/robinhood/0xab8a29144bb8d63a663844ca02a0b8fb5d69df0bae6fc5432b6f8414126192ff", published_at: null, accessed_at: 2026-09-03T04:51:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-6, CLM-7, CLM-8, CLM-9, CLM-10, CLM-15, CLM-17, CLM-20, CLM-22, CLM-23, CLM-24, EVT-1], excerpt: "chainId robinhood dexId uniswap labels v4 pairAddress 0xab8a29144bb8d63a663844ca02a0b8fb5d69df0bae6fc5432b6f8414126192ff base Microwave / MICROWAVE 0x79E1B7…888b quote United States Oil Fund • Robinhood Token / USO 0xa30FA3…D344 liquidity.usd 30941.6 base 139212695 quote 105.2549 volume.h24 1316923.09 txns.h24 buys 4579 sells 4150 fdv 111098 marketCap 111098 priceUsd 0.0001111 pairCreatedAt 1788348883000. info.websites https://microwave.moreright.xyz/ socials https://x.com/morerightdao." }
  - { id: R-8, publisher: DexScreener, title: "Search MICROWAVE on robinhood", url: "https://api.dexscreener.com/latest/dex/search?q=MICROWAVE", published_at: null, accessed_at: 2026-09-03T04:48:41Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-9, CLM-26], excerpt: "Assigned pair MICROWAVE/USO 0xab8a…92ff token 0x79E1B7E59054fd4E18Ad7C71E5781162BF28888b. Distinct rows: MICROWAVE 0x5318B43F85AE1515a6a288620155D837Dcd9C4c2 / WETH liq 127672.95; MICROWAVE 0xFEa44CA118Bf01c7431499B093A4Bc2181611e18 / AI liq 19311.25. Blockscout: 0x5318…C4c2 contract_name Microwave creator 0x8098DAE7…769A holders 441; 0xFEa44…1e18 proxy eip1167 implementation DopplerERC20V1 0x3Be8…C599." }
  - { id: R-9, publisher: GeckoTerminal, title: "Microwave token", url: "https://api.geckoterminal.com/api/v2/networks/robinhood/tokens/0x79E1B7E59054fd4E18Ad7C71E5781162BF28888b", published_at: null, accessed_at: 2026-09-03T04:48:41Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-11, CLM-20, CLM-32, EVT-3], excerpt: "HTTP 200. name Microwave symbol MICROWAVE address 0x79e1b7e59054fd4e18ad7c71e5781162bf28888b price_usd 0.0001097406501 fdv_usd 109740.650068301 market_cap_usd null volume_usd.h24 1272308.180093 total_reserve_in_usd 16115.9507465426. launchpad_details graduation_percentage 100 completed true completed_at 2026-09-02T11:34:43.000Z migrated_destination_pool_address 0xab8a29144bb8d63a663844ca02a0b8fb5d69df0bae6fc5432b6f8414126192ff. Pool JSON GET 429 this pass." }
  - { id: R-10, publisher: Robinhood, title: "GET /rhj/assets Stock Token registry", url: "https://api.robinhood.com/rhj/assets", published_at: null, accessed_at: 2026-09-03T04:50:12Z, kind: docs, authority: primary, authenticity: confirmed, supports: [CLM-9, CLM-21, CLM-27], excerpt: "HTTP 200. assets length 194. USO row: tokenSymbol USO tokenName United States Oil Fund • Robinhood Token deployments contractAddress 0xa30FA36Db767ad9eD3f7a60fC79526fB4d56D344 chainId 4663 networkName Robinhood Chain status ASSET_STATUS_ACTIVE isin US91232N2071. MICROWAVE scan 0 hits." }
  - { id: R-11, publisher: Robinhood Chain RPC, title: "USO name/symbol and token code sizes", url: "https://rpc.mainnet.chain.robinhood.com", published_at: null, accessed_at: 2026-09-03T04:49:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-9, CLM-21], excerpt: "USO 0xa30FA36D…D344 eth_getCode 283 B. name() United States Oil Fund • Robinhood Token symbol() USO. Token 0x79E1B7…888b code 3248 B." }
  - { id: R-12, publisher: Blockscout, title: "createGraduatedPool tx 0x7226bcd4…7f50", url: "https://robinhoodchain.blockscout.com/tx/0x7226bcd4bd0bccb824416f7da8d4e23b1b35a70999edf08264a48440c6fe7f50", published_at: 2026-09-02T11:34:43Z, accessed_at: 2026-09-03T04:50:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-6, CLM-14, CLM-15, CLM-32, EVT-3], excerpt: "timestamp 2026-09-02T11:34:43.000000Z status ok block 52543145 from 0x68c28468…dD7e to PonsV2LaunchFactory createGraduatedPool(token 0x79E1B7…888b). PoolManager Initialize id 0xab8a…92ff currency0 MICROWAVE currency1 USO fee 0 hooks V2MemeHook 0xE5e7…e044. V2LaunchLocker TokenSupplyLocked 81632653061224489621313301 PositionLocked 1501919. PoolGraduated positionId 1501919 tokenAmount 204081632653061224658716168 pairTokenAmount 71798851063829788153." }
  - { id: R-13, publisher: Microwave site, title: "microwave.moreright.xyz", url: "https://microwave.moreright.xyz/", published_at: 2026-09-02T17:07:51Z, accessed_at: 2026-09-03T04:48:41Z, kind: official-site, authority: primary, authenticity: confirmed, supports: [CLM-8, CLM-22, CLM-24, CLM-25, CLM-28, CLM-33], excerpt: "HTTP 200 last-modified 2026-09-02T17:07:51Z. title Microwave ($MICROWAVE). og:title Microwave ($MICROWAVE) — paired with USO. Embeds CA 0x79E1B7…888b, curve 0x753a…7D83, treasury 0xbfDc…b90B, USO 0xa30FA3…D344, launch tx 0x8cea769f…e1d4, https://x.com/MoreRightDAO. Text: creator tax 1.00% to treasury; exit fee 2%; burn MICROWAVE for pro-rata USO; Graduated; Is this affiliated with United States Oil Fund? No." }
  - { id: R-14, publisher: Blockscout, title: "OfficeTreasury 0xbfDc…b90B", url: "https://robinhoodchain.blockscout.com/address/0xbfDcC6a3e2dAb9B80303c9956011CaBec10Ab90B?tab=contract", published_at: 2026-09-02T08:23:33Z, accessed_at: 2026-09-03T04:50:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-13, CLM-28, CLM-29], excerpt: "name OfficeTreasury is_verified true is_fully_verified true file_path src/OfficeTreasury.sol compiler v0.8.26 verified_at 2026-09-02T08:23:33Z. Comment: The Pot. Every meme the Office launches on pons names this contract as its creator fee recipient. Holders may burn the Office token for a pro-rata slice of assets the Pot holds, minus a 2% exit fee. ABI: initialize, collect, redeem, held, pot, allAssets. RPC token() 0x79E1B7…888b owner() reverts." }
  - { id: R-15, publisher: "@MoreRightDAO", title: "$MICROWAVE treasury burn-for-USO", url: "https://x.com/MoreRightDAO/status/2095319249426268414", published_at: 2026-09-03T01:13:32Z, accessed_at: 2026-09-03T04:47:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [CLM-24, CLM-33, EVT-4], excerpt: "$MICROWAVE is where its at. Fees are sent to the treasury where u can burn microwave for $USO. Prior posts same handle: $MICROWAVE is the best way to acquire $USO on Robinhood / Pons graduate to make the whole ecosystem fee looped (2095308586519785753); Study $MICROWAVE x $USO (2095313258211123312)." }
  - { id: R-16, publisher: "@solanubisxNFT", title: "Netlify vote page for MICROWAVE", url: "https://x.com/solanubisxNFT/status/2095360208960643239", published_at: 2026-09-03T03:56:18Z, accessed_at: 2026-09-03T04:48:00Z, kind: social, authority: social, authenticity: unconfirmed, supports: [CLM-19, EVT-5], excerpt: "Attention $MICROWAVE Family! YOUR vote matters! Listing ID: 4100. https://robinhood-main-dex-nqf.netlify.app/vote/0x79E1B7E59054fd4E18Ad7C71E5781162BF28888b. A second post used robinhood-main-dex-sjt.netlify.app/vote/ with the same CA." }
  - { id: R-17, publisher: "@ITSYABOIRAZOR", title: "Netlify claim page for MICROWAVE", url: "https://x.com/ITSYABOIRAZOR/status/2095339221242298525", published_at: 2026-09-03T02:32:54Z, accessed_at: 2026-09-03T04:48:00Z, kind: social, authority: social, authenticity: unconfirmed, supports: [CLM-19, EVT-5], excerpt: "Who already saw this for $MICROWAVE? Wallet check seems active rn. CA: 0x79E1B7E59054fd4E18Ad7C71E5781162BF28888b https://crypto-keo.netlify.app/claim?contract=0x79E1B7E59054fd4E18Ad7C71E5781162BF28888b" }
  - { id: R-18, publisher: Blockscout, title: "PonsV2LauncherToken verified source", url: "https://robinhoodchain.blockscout.com/address/0x79E1B7E59054fd4E18Ad7C71E5781162BF28888b?tab=contract", published_at: 2026-09-02T08:24:11Z, accessed_at: 2026-09-03T04:47:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-4, CLM-14, EVT-2], excerpt: "name PonsV2LauncherToken compiler v0.8.35+commit.47b9dedd is_verified true is_fully_verified true is_partially_verified false file_path contracts/src/v2/PonsV2LauncherToken.sol verified_at 2026-09-02T08:24:11.961559Z. Comment: Fixed-supply ERC-20 deployed by PonsV2LaunchFactory for a v2 launch. Entire supply mints to the bonding curve. deployer is immutable reference data and confers no privileges. ABI: burn, curve, deployer, launchFactory, socials." }
  - { id: R-19, publisher: Blockscout, title: "PonsV2LaunchDeployer 0x3711…1A42", url: "https://robinhoodchain.blockscout.com/address/0x3711ceA4feaDE896C913C68F01Eda97Cb06D1A42", published_at: null, accessed_at: 2026-09-03T04:47:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-16, CLM-28], excerpt: "hash 0x3711ceA4feaDE896C913C68F01Eda97Cb06D1A42 name PonsV2LaunchDeployer is_contract true is_verified true proxy_type null creator_address_hash 0xFdDE5a1E3cDF791Da71E49F817D70C7ceD72CC36. Token creator_address_hash is this deployer helper. RPC eth_getCode 20906 bytes." }

gaps:
  - { priority: P0, question: "Does @MoreRightDAO later embed CA 0x79E1B7…888b, and does that post match the onchain socials() handle?", checked: "onchain socials() and the site name @MoreRightDAO; sampled Latest posts name $MICROWAVE / $USO / treasury burn without the CA, 2026-09-03", next: "re-read from:MoreRightDAO Latest for an embedded CA or DexScreener profile update" }
  - { priority: P0, question: "Does OfficeTreasury redeem() pay only USO this pass, or do later addAsset calls expand the pot beyond the USO rail?", checked: "RPC allAssets [USO]; held(USO) ~142.13e18; site copy is USO-only, 2026-09-03", next: "re-call allAssets() and read addAsset logs if a second asset appears" }
  - { priority: P1, question: "Is there an audit whose scope includes PonsV2LauncherToken 0x79E1B7…888b or OfficeTreasury 0xbfDc…b90B?", checked: "microwave.moreright.xyz, @MoreRightDAO sampled posts, DexScreener, Gecko token, GitHub search q=microwave+moreright total_count 0, 2026-09-03", next: "auditor report index if a later post names one" }
  - { priority: P1, question: "Do the Netlify vote/claim hosts persist, and do they remain unlinked from microwave.moreright.xyz?", checked: "Latest posts to robinhood-main-dex-*.netlify.app and crypto-keo.netlify.app; site hrefs do not include those hosts, 2026-09-03", next: "drop the receipts if the hosts 404; do not file them as official" }
  - { priority: P2, question: "Which Gecko pool window would match DexScreener pair volume $1.32M / liq $31k versus the assignment lead ~$40k / ~$1.30M?", checked: "Live DexScreener pair liq 30941.6 vol 1316923.09; Gecko token all-pools reserve 16115.95 vol 1272308; Gecko pool JSON 429, 2026-09-03", next: "retry Gecko pool GET; do not substitute token all-pools reserve for the USO book" }
---

# MICROWAVE — research packet

## What it is

A one-billion-supply ERC-20 minted by Pons v2 onto a bonding curve quoted against United States Oil Fund • Robinhood Token (USO), then graduated into a Uniswap v4 MICROWAVE/USO pool. launchAndBuy on 2026-09-02 created Microwave (MICROWAVE) and seeded the curve; createGraduatedPool the same day initialized pool 0xab8a…92ff. Traders buy and sell MICROWAVE against USO. USO is the quote rail, not the subject. Site microwave.moreright.xyz and handle @MoreRightDAO are named in onchain socials().

Themes: memecoin, stock-paired:USO, rwa, graduation

## Why it matters

The MICROWAVE/USO Uniswap v4 book printed about $1.32M of 24h volume on DexScreener at collection, with the quote token the USO rail in GET /rhj/assets. Creator fees accrue to OfficeTreasury 0xbfDc…b90B, which the site and verified source describe as a burn-for-USO pot. Distinct from packed CRUDECAT (Circus / Uniswap v3) and from GASOLINU / OILCOIN (LongLauncher Doppler clones), which are other USO-paired names.

## What could go wrong

USD liquidity on the MICROWAVE/USO book counts both sides; the quote side is USO, not USDG. Gecko token all-pools reserve ($16.1k) is not the DexScreener pair book ($31k). Same-ticker Microwave clones exist on robinhood (0x5318…C4c2 / WETH, 0xFEa44…1e18 / AI). Netlify vote/claim hosts circulated the CA; they are not the onchain website.

## Product and mechanics

PonsV2LaunchAndBuy 0xe33E…2948 launchAndBuy from EOA 0x1A63…32Fc at 2026-09-02T08:17:58Z minted Microwave / MICROWAVE supply 1e9*1e18 onto bonding curve 0x753a…7D83 quoted against USO 0xa30FA3…D344. launchFactory() returns Pons v2 factory 0x7eD5…EC7e. getLaunchedToken.phase is 2 PoolCreated. creatorTaxBps 100, buybackEnabled false. [verified R-4 R-5 R-6]

createGraduatedPool at 2026-09-02T11:34:43Z initialized Uniswap v4 poolId 0xab8a…92ff (currency0 MICROWAVE, currency1 USO, fee 0, hooks V2MemeHook 0xE5e7…e044). PoolGraduated locked positionId 1501919 with ~2.041e8 tokens and ~71.80 USO; V2LaunchLocker TokenSupplyLocked ~8.163e7 tokens. Secondary MICROWAVE/USDG and MICROWAVE/ETH Uniswap v4 books on DexScreener have far less liquidity than the USO book. [verified R-7 R-12]

OfficeTreasury 0xbfDc…b90B is the creatorFeeRecipient. Site and verified source: 1.00% creator tax in USO accrues via Pons fee escrow; holders may burn MICROWAVE for pro-rata treasury USO minus a 2% exit fee; anyone may call collect(). RPC this pass: token() is MICROWAVE, allAssets is USO only, held(USO) ~142.13e18. [verified R-13 R-14 R-5]

## Control and security

owner() on the token reverts. deployer() is EOA 0x1A63…32Fc with empty code; verified PonsV2LauncherToken source says deployer confers no privileges. OfficeTreasury owner() reverts. Factory owner is Pons SafeProxy 0x263ed295…19Dd. LP is locked in V2LaunchLocker 0x2674…4952 (isLocked true, position 1501919). [verified R-5 R-12 R-18]

Token, factory, LaunchAndBuy, curve, locker, and OfficeTreasury are verified on Blockscout. No audit report URL was located this pass. [verified R-3 R-14 R-18] [unknown]

## Team and provenance

Onchain socials() and launchAndBuy params name https://x.com/MoreRightDAO and https://microwave.moreright.xyz/. The site embeds CA 0x79E1B7…888b and the same handle. DexScreener info matches. @MoreRightDAO display MoreRightDAO, bio COOKING MEMES, 664 followers; sampled Latest posts name $MICROWAVE / $USO / treasury burn and do not embed the CA this pass. GitHub search q=microwave+moreright total_count 0. [claim R-4 R-7 R-13 R-15]

## Economics and activity

MICROWAVE/USO Uniswap v4 24h volume is 1316923.09 USD and liquidity.usd is 30941.6 at 2026-09-03T04:51:00Z from the DexScreener pair endpoint. fdv/marketCap 111098. Pair created 2026-09-02T11:34:43Z. [claim R-7]

Gecko token volume_usd.h24 is 1272308.180093 and total_reserve_in_usd is 16115.95 at 2026-09-03T04:48:41Z across all pools, not the USO book. fdv_usd 109740.65. launchpad_details completed true at 2026-09-02T11:34:43Z into pool 0xab8a…92ff. Gecko pool JSON returned 429 this pass. [claim R-9]

Blockscout holders_count 721. Assignment lead of ~$40k liq / ~$1.30M vol was not reproduced at this as_of; live DexScreener pair is $31k / $1.32M. [claim R-1 R-7]

## Material risks

- Quote token USO 0xa30FA3…D344 is the Robinhood Stock Token rail in GET /rhj/assets; MICROWAVE is not. [verified R-10 R-11]
- Pool USD reserve is MICROWAVE plus USO, not a USDG or WETH backstop. [claim R-7]
- Gecko token all-pools reserve is not the USO book. [claim R-9]
- Same-ticker Microwave clones 0x5318…C4c2 and 0xFEa44…1e18 are other CAs. [verified R-8]
- Netlify vote/claim hosts are third-party-link / copypasta-pattern. [claim R-16 R-17]
- No audit report URL this pass. [unknown]

## Verification passes

- Receipts: Blockscout token/factory/USO/treasury and the launch and graduation txs, RPC name/symbol/launchFactory/getLaunchedToken/approvedPairTokens/held, DexScreener token/pair/search, Gecko token GET, /rhj/assets, microwave.moreright.xyz, and X Latest were opened on 2026-09-03 and excerpts copied from the responses. [verified R-1 R-4 R-5 R-7 R-10 R-13]
- Numbers: 1316923.09 is the DexScreener MICROWAVE/USO pair 24h volume, not the 1272308.180093 Gecko token all-pools figure. Liquidity 30941.6 is that pool. Gecko total_reserve_in_usd 16115.95 is all-pools. [claim R-7 R-9]
- Adversarial: the strongest contrary reading is that this is packed CRUDECAT, GASOLINU, OILCOIN, or the USO issuer. Those have different CAs; USO 0xa30FA3…D344 is the /rhj/assets rail, not the memecoin. Ticker clones 0x5318…C4c2 and 0xFEa44…1e18 are other CAs. [inference R-8 R-10]

## Operations log

- Base: `git -C /Users/harsharnsingh/proofline-pr59 rev-parse origin/main` → 334ca0619aa62e922da83f46de021f06d12348cf. Census 49 slugs have no microwave / MICROWAVE / 0x79E1B7…888b. content/dependencies/stock-tokens.yaml has USO at 0xa30FA3…D344 as a rail.
- GET research/inbox/packets/microwave/WORK-20260903-grok-heavy-icarus-research.md on grok-heavy/20260903/WORK-20260903-grok-heavy-icarus-research returned 404 twice this pass.
- Explorer: Blockscout api/v2 token, address, smart-contract, factory, USO, treasury, launchAndBuy 0x8cea769f…e1d4, createGraduatedPool 0x7226bcd4…7f50, TokenLaunched / LaunchSwept / PoolGraduated / TokenSupplyLocked logs, holders. Chrome UA.
- RPC: eth_getCode/eth_call/eth_getLogs with Chrome UA at block 53148204.
- Aggregators: DexScreener latest/dex/tokens, latest/dex/pairs, search q=MICROWAVE. Gecko token GET 200; Gecko pool JSON 429; Gecko HTML 200 not used for numbers.
- Registry: GET api.robinhood.com/rhj/assets 194 assets, one USO, 0 MICROWAVE.
- Social: X keyword Latest MICROWAVE/USO/MoreRightDAO/CA; from:MoreRightDAO; user search MoreRightDAO / MICROWAVE.
- Site: GET https://microwave.moreright.xyz/ 200, last-modified 2026-09-02T17:07:51Z, CA in HTML.
- GitHub: search/repositories q=microwave+moreright total_count 0.
- Failed: Blockscout address transactions filter returned 0 rows (creation tx used instead); Gecko pool JSON 429; from:MoreRightDAO query for the CA returned 0 posts; assignment ~$40k liq not reproduced (live pair $31k).
- Time: collection 2026-09-03T04:45Z–2026-09-03T04:52Z.
