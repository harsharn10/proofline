---
# Packet v2 (docs/research-system.md §5). Seed with Icarus What-it-is + events.
contract_version: proofline-research-v2
work_id: WORK-20260903-grok-heavy-icarus-research
producer: grok-heavy
role: collector
base_sha: 334ca0619aa62e922da83f46de021f06d12348cf
slug: oilinu
name: Oilinu
packet_tier: seed
as_of: 2026-09-03T05:26:00Z
prior_packet: null
supersedes: null
owned_slugs: [oilinu]
allowed_paths:
  - research/inbox/packets/oilinu/WORK-20260903-grok-heavy-icarus-research.md

identity:
  canonical_name: Oilinu
  aliases: ["$Oilinu"]
  symbols: [Oilinu]
  entity_kind: token
  chain_scope: robinhood-native
  official_domain: "NULL — DexScreener info null; Gecko token attributes have no website; IPFS metadata description empty and names launch.o1.exchange as the pad, not a project site; Blockscout token page lists no homepage this pass"
  official_handle: "NULL — DexScreener info null; X user search for Oilinu returned @OilInu / @oilinuCTO / @OIL_INU with no 0xbD99c569…8201 in bios; @oilinuCTO bio cites a Solana pump.fun mint; Latest posts that embed this CA are aggregator signals, not a project account; flag unconfirmed-official"
  repository: "NULL — GitHub search q=oilinu returned 4 empty-description repos (magicwebkraken/oilinu, ariaember123-gif/Oilinu, yamatedev0044/oilinu, rocket0xdev1025/OilInu); none cite 0xbD99c569…8201, DexScreener, or Robinhood Chain this pass"
  possible_matches:
    - slug: pons
      signals: [other]
      contrary_signals:
        - "Census Pons is the bonding-curve launchpad at ponsfamily.com / @ponsdotfamily with v2 factory 0x7eD5…EC7e"
        - "Oilinu is 0xbD99c569…8201 from historical RWAERC20LaunchpadFactory 0xe64A…F297, not a PonsV2LauncherToken"
        - "No shared domain, handle, or reproduced address"
    - slug: long
      signals: [other]
      contrary_signals:
        - "Census LONG is a stock-paired factory at app.long.xyz / @longdotxyz with LongLauncher 0x22e9…eeED"
        - "Oilinu createLaunch is on RWAERC20LaunchpadFactory 0xe64A…F297, not LongLauncher"
        - "No shared domain, handle, or reproduced address"
    - slug: bankr
      signals: [other]
      contrary_signals:
        - "Census Bankr is an agent execution surface at bankr.bot / @bankrbot using DopplerERC20V1Factory 0x1B37…b69a"
        - "Oilinu create path is RWAERC20LaunchpadFactory.createLaunch from EIP-7702 0x770ed103…1f79, not Doppler/Airlock"
        - "Gecko dex id is uniswap-v4-robinhood, not bankr-robinhood"
        - "No shared domain, handle, or reproduced address"
    - slug: artificial-inu
      signals: [other]
      contrary_signals:
        - "Census Artificial Inu is $AI at 0x2E8c…1e18 paired to NVDA via LongLauncher, site artificialinu.com / @ArtificiallyInu"
        - "Oilinu is ticker Oilinu at 0xbD99c569…8201 paired to the USO rail"
        - "No shared domain, handle, or reproduced address"
    - slug: hoodfun
      signals: [other]
      contrary_signals:
        - "Census hood.fun is a launchpad, not a USO-paired graduation token"
        - "Oilinu factory() returns RWAERC20LaunchpadFactory 0xe64A…F297"
        - "No shared domain, handle, or reproduced address"

classification:
  primary_leaf: rwa-products/stock-paired-token
  secondary_leaves: [launch/graduation-token]
  mechanism_tags: [stock-paired, rwa, amm, launchpad]
  ecosystem_role: graduation
  lifecycle: mainnet
  coverage_recommendation: seed
  evidence_state: partly-verified
  rationale: "Not in the 49-row census. Token 0xbD99c569…8201 has non-empty 4657-byte code on 4663; factory() returns historical RWAERC20LaunchpadFactory 0xe64A…F297; createLaunch at 2026-07-28T02:14:17Z minted Oilinu / Oilinu into Uniswap v4 poolId 0x938074f7…07e6 quoted against United States Oil Fund • Robinhood Token USO 0xa30FA3…D344 in GET /rhj/assets. USO is the quote rail. Distinct from packed CRUDECAT / GASOLINU / OILCOIN / MICROWAVE. Token source is_verified false. No official site or handle this pass. [R-1] [R-3] [R-4] [R-6] [R-9]"

qualifying:
  deployed_on_chain: { status: pass, claim_ids: [CLM-4, CLM-5, CLM-6], note: "" }
  native_play:       { status: pass, claim_ids: [CLM-1, CLM-15], note: "" }
  citable:           { status: pass, claim_ids: [CLM-2, CLM-3, CLM-4], note: "" }
  research_story:    { status: pass, claim_ids: [CLM-1, CLM-9, CLM-10], note: "" }

links:
  - { kind: other, url: "https://launch.o1.exchange", authenticity: unconfirmed }

deployments:
  - label: Oilinu token
    role: token
    address:
      value: "0xbD99c569001bD6BAd33F5cd954C6faDaf4298201"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T05:22:00Z
      exists_on_4663: true
      explorer_source_verified: false
    receipt_ids: [R-1, R-3, R-4, R-16]
  - label: o1 historical RWAERC20LaunchpadFactory (createLaunch)
    role: factory
    address:
      value: "0xe64AC4113848BBC1a6dDE1A6D1da96720A36F297"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T05:24:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-2, R-3, R-4, R-5]
  - label: Historical LaunchHook (launch mint recipient)
    role: other
    address:
      value: "0x778b0c4EeA7D35D66513B587bA87FC9084b0EaCC"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T05:23:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-3, R-5, R-15]
  - label: United States Oil Fund Robinhood Token (pair quote rail)
    role: token
    address:
      value: "0xa30FA36Db767ad9eD3f7a60fC79526fB4d56D344"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T05:24:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-5, R-9, R-14]

metrics:
  - { kind: volume_24h, value: 173686.78, currency: USD, as_of: 2026-09-03T05:22:28Z, window: 24h, method: "api.dexscreener.com/latest/dex/tokens/0xbD99c569001bD6BAd33F5cd954C6faDaf4298201 pair 0x938074f7…07e6 Oilinu/USO Uniswap v4 volume.h24", class: claim, receipt_ids: [R-6] }
  - { kind: tvl, value: 30254.76, currency: USD, as_of: 2026-09-03T05:22:28Z, window: point, method: "api.dexscreener.com/latest/dex/tokens/0xbD99c569001bD6BAd33F5cd954C6faDaf4298201 pair 0x938074f7…07e6 Oilinu/USO Uniswap v4 liquidity.usd", class: claim, receipt_ids: [R-6] }
  - { kind: market_cap, value: 65248, currency: USD, as_of: 2026-09-03T05:22:28Z, window: point, method: "api.dexscreener.com/latest/dex/tokens/0xbD99c569001bD6BAd33F5cd954C6faDaf4298201 pair 0x938074f7…07e6 fdv/marketCap (Oilinu as base)", class: claim, receipt_ids: [R-6] }
  - { kind: volume_24h, value: 201061.39, currency: USD, as_of: 2026-09-03T05:23:00Z, window: 24h, method: "api.geckoterminal.com/api/v2/networks/robinhood/pools/0x938074f7331f49a638b833759f8273a0bdfb0ddbe83be981d6555d2023eb07e6 volume_usd.h24 (pool name USO / Oilinu; Gecko lists USO as base_token)", class: claim, receipt_ids: [R-7] }
  - { kind: tvl, value: 103941.37, currency: USD, as_of: 2026-09-03T05:23:00Z, window: point, method: "api.geckoterminal.com/api/v2/networks/robinhood/pools/0x938074f7…07e6 reserve_in_usd (Gecko names USO / Oilinu with USO as base; not DexScreener Oilinu-as-base liquidity)", class: claim, receipt_ids: [R-7] }
  - { kind: volume_24h, value: 208593.42, currency: USD, as_of: 2026-09-03T05:23:00Z, window: 24h, method: "api.geckoterminal.com/api/v2/networks/robinhood/tokens/0xbd99c569001bd6bad33f5cd954c6fadaf4298201 volume_usd.h24 (all listed pools, not the USO book alone)", class: claim, receipt_ids: [R-8] }
  - { kind: market_cap, value: 339299.51, currency: USD, as_of: 2026-09-03T05:23:00Z, window: point, method: "api.geckoterminal.com/api/v2/networks/robinhood/tokens/0xbd99c569001bd6bad33f5cd954c6fadaf4298201 fdv_usd (market_cap_usd null; token endpoint, not Gecko pool fdv_usd which follows USO as base)", class: claim, receipt_ids: [R-8] }
  - { kind: holders, value: 524, currency: null, as_of: 2026-09-03T05:22:00Z, window: point, method: "robinhoodchain.blockscout.com/api/v2/tokens/0xbD99c569001bD6BAd33F5cd954C6faDaf4298201 holders_count", class: claim, receipt_ids: [R-1] }

reproductions:
  - { id: REP-1, method: explorer-rpc, chain_id: 4663, checked_at: 2026-09-03T05:23:00Z, receipt_ids: [R-4], result: "Chrome UA. eth_chainId 0x1237 (4663). eth_blockNumber 0x32b4a4c (53168716). Token 0xbD99c569…8201 eth_getCode 4657 bytes prefix 0x60806040, not EIP-1167. name Oilinu, symbol Oilinu, decimals 18, totalSupply 1e27. factory() 0xe64AC4113848BBC1a6dDE1A6D1da96720A36F297. owner() reverts. tokenURI() reverts. EIP-1967 implementation and admin slots zero." }
  - { id: REP-2, method: explorer-ui, chain_id: 4663, checked_at: 2026-09-03T05:23:00Z, receipt_ids: [R-1, R-2, R-3, R-14, R-15, R-16], result: "Blockscout api/v2 token 0xbD99c569…8201 name Oilinu symbol Oilinu holders_count 524 total_supply 1e27 type ERC-20. Address is_contract true is_verified false proxy_type null creator_address_hash LaunchTokenDeployer 0x6544AF35…615b creation_transaction_hash 0xfddfc5cc…049e. Factory 0xe64A…F297 name RWAERC20LaunchpadFactory is_verified true is_fully_verified true file_path src/RWAERC20LaunchpadFactory.sol compiler v0.8.26 verified_at 2026-07-24T21:56:18Z. createLaunch tx 0xfddfc5cc…049e 2026-07-28T02:14:17Z block 21225045 from 0x770ed103…1f79 (EIP7702StatelessDeleGator impl 0x63c0c19a…E32B) to factory method createLaunch. Decoded name/symbol Oilinu/Oilinu quote 0xa30FA3…D344 metadata ipfs://bafkreiajn6k…wa24. Internal CREATE2 from LaunchTokenDeployer created 0xbD99c569…8201. Launched token 0xbD99c569…8201 poolId 0x938074f7…07e6 supply 1e27 tickSpacing 200. Mint 1e27 to LaunchHook 0x778b…EaCC; Seeded 999999999999999999999994834 to PoolManager 0x8366…0951. PoolManager Initialize currency0 USO currency1 Oilinu fee 0 hooks LaunchHook. USO 0xa30FA3…D344 name United States Oil Fund • Robinhood Token BeaconProxy holders_count 5328." }
  - { id: REP-3, method: api, checked_at: 2026-09-03T05:23:00Z, receipt_ids: [R-6, R-7, R-8, R-18], result: "DexScreener latest/dex/tokens/0xbD99c569…8201: 4 robinhood uniswap pairs; top Oilinu/USO v4 0x938074f7…07e6 quote 0xa30FA3…D344 United States Oil Fund • Robinhood Token / USO liquidity.usd 30254.76 volume.h24 173686.78 fdv/marketCap 65248 priceUsd 0.00006524 pairCreatedAt 1785204857000 (2026-07-28T02:14:17Z) txns.h24 buys 488 sells 405 info null. Secondary Oilinu/USDG v4 0xb6f93986…a517 liq 59.12 volume.h24 6936.06; Oilinu/ETH v4 0xf7bb419d…b5c6 liq 185.83 volume.h24 637.36. Gecko GET token 200: volume_usd.h24 208593.42 fdv_usd 339299.51 market_cap_usd null total_reserve_in_usd 21977.33 (all listed pools). Gecko GET pool 200: name USO / Oilinu pool_created_at 2026-07-28T02:14:17Z volume_usd.h24 201061.39 reserve_in_usd 103941.37 fdv_usd 1268331.42 market_cap_usd 1228236.65 dex uniswap-v4-robinhood; relationships base_token USO 0xa30FA3…D344 quote_token Oilinu 0xbD99c569…8201. Dex search also returns ticker clones Oil Inu/WETH 0x23Ec8244…7777, oilinu/OI 0x89bA7a92…1E18/USO, OILINU 0x9B3703F5…1E18/USO, OILLY 0x7a7ea22B…1E18/USO." }
  - { id: REP-4, method: api, checked_at: 2026-09-03T05:24:00Z, receipt_ids: [R-9], result: "GET api.robinhood.com/rhj/assets HTTP 200; assets length 194; one USO row tokenSymbol USO tokenName United States Oil Fund • Robinhood Token deployments contractAddress 0xa30FA36Db767ad9eD3f7a60fC79526fB4d56D344 chainId 4663 status ASSET_STATUS_ACTIVE isin US91232N2071. tokenSymbol/tokenName/contract scan for Oilinu and 0xbD99c569 returned 0 hits." }
  - { id: REP-5, method: explorer-rpc, chain_id: 4663, checked_at: 2026-09-03T05:24:00Z, receipt_ids: [R-5, R-20], result: "Factory 0xe64A…F297 code 21680 B. owner() 0x5519a8cc7211f483e19ff8d50a3b0c892701044d (code 0x). hook() 0x778b0c4EeA7D35D66513B587bA87FC9084b0EaCC. tokenDeployer() 0x6544AF3524a8d9135Eb5765CECE6E514d85D615b. launchCreationEnabled() false. poolManager() 0x8366a39CC670B4001A1121B8F6A443A643e40951. announcementRegistry() 0x6a95911db04219674323AA0137c3377523c0E29F. pendingOwner() 0x0. quotes(USO) registered true decimals 18 creationFee 0. quotes(Oilinu) registered false. Current factory 0xcE9C…5B0d code 24466 B; launchCreationEnabled() true; owner() same 0x5519a8…044D; eth_getLogs Launched topic1=token returned 0 logs. From 0x770ed103…1f79 code 23 B prefix 0xef0100 (EIP-7702). USO code 283 B. LaunchHook code 10342 B. LaunchTokenDeployer code 9215 B." }
  - { id: REP-6, method: other, checked_at: 2026-09-03T05:24:00Z, receipt_ids: [R-13], result: "createLaunch metadata ipfs://bafkreiajn6kmduahxcdk4bcajqqogj3cwx6bl5ud2nprznghrit5efwa24. ipfs.io GET 403 Cloudflare challenge. dweb.link GET 200 JSON name Oilinu symbol Oilinu description empty standard ERC20 launchpad o1 Launchpad launchpadUrl https://launch.o1.exchange image ipfs://bafkreiduxzar2onubb6oudbuibb7vip6am6nujj3sau6iftolmzt3rycaa. No twitter/website keys. launch.o1.exchange GET 429 this pass." }

claims:
  - { id: CLM-1, field: product.mechanism, value: "Historical RWAERC20LaunchpadFactory.createLaunch CREATE2-deploys a 1e9-supply ERC-20 into a Uniswap v4 pool quoted against USO. createLaunch from EIP-7702 account 0x770ed103…1f79 at 2026-07-28T02:14:17Z minted Oilinu / Oilinu; Launched poolId 0x938074f7…07e6 quote 0xa30FA3…D344. Mint 1e27 to LaunchHook 0x778b…EaCC then Seeded 999999999999999999999994834 into PoolManager 0x8366…0951. Current factory 0xcE9C…5B0d had 0 Launched logs; launchCreationEnabled() on 0xe64A…F297 is false.", class: verified, observed_at: 2026-09-03T05:24:00Z, receipt_ids: [R-2, R-3, R-4, R-5, R-16], reproduction_ids: [REP-1, REP-2, REP-5], supersedes: null }
  - { id: CLM-2, field: identity.name, value: "Oilinu", class: verified, observed_at: 2026-09-03T05:22:00Z, receipt_ids: [R-1, R-3, R-4], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-3, field: identity.symbol, value: "Oilinu", class: verified, observed_at: 2026-09-03T05:22:00Z, receipt_ids: [R-1, R-3, R-4], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-4, field: deployment.address, value: "0xbD99c569001bD6BAd33F5cd954C6faDaf4298201", class: verified, observed_at: 2026-09-03T05:23:00Z, receipt_ids: [R-1, R-4, R-16], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-5, field: deployment.address, value: "0xe64AC4113848BBC1a6dDE1A6D1da96720A36F297", class: verified, observed_at: 2026-09-03T05:24:00Z, receipt_ids: [R-2, R-4, R-5], reproduction_ids: [REP-1, REP-2, REP-5], supersedes: null }
  - { id: CLM-6, field: lifecycle, value: mainnet, class: verified, observed_at: 2026-09-03T05:23:00Z, receipt_ids: [R-1, R-3, R-4, R-6], reproduction_ids: [REP-1, REP-2, REP-3], supersedes: null }
  - { id: CLM-7, field: taxonomy.primary-leaf, value: rwa-products/stock-paired-token, class: claim, observed_at: 2026-09-03T05:24:00Z, receipt_ids: [R-6, R-7, R-9], reproduction_ids: [], supersedes: null }
  - { id: CLM-8, field: identity.handle, value: "NULL — no bidirectional official handle with the CA in the bio; DexScreener info null; X user search returned unrelated @OilInu / @oilinuCTO / @OIL_INU; flag unconfirmed-official", class: claim, observed_at: 2026-09-03T05:22:00Z, receipt_ids: [R-6, R-10], reproduction_ids: [], supersedes: null }
  - { id: CLM-9, field: relationship, value: "Pair quote USO 0xa30FA3…D344 is the United States Oil Fund • Robinhood Token rail in GET /rhj/assets (194 assets, one USO row, chainId 4663, ASSET_STATUS_ACTIVE, isin US91232N2071). USO is the quote rail, not the subject. Distinct from packed CRUDECAT 0xBD957Cc9…cF3e, GASOLINU 0x1e6EA1…1e18, OILCOIN 0x9CB19d6e…1E18, and MICROWAVE 0x79E1B7…888b, which are other USO-paired books.", class: verified, observed_at: 2026-09-03T05:24:00Z, receipt_ids: [R-6, R-9, R-14, R-18], reproduction_ids: [REP-3, REP-4], supersedes: null }
  - { id: CLM-10, field: economics.metric, value: "Gecko Oilinu token volume_usd.h24 208593.42 and fdv_usd 339299.51 at 2026-09-03T05:23:00Z (token all-pools). Same-id Gecko pool is named USO / Oilinu with USO as base_token: volume_usd.h24 201061.39 reserve_in_usd 103941.37 fdv_usd 1268331.42 (pool fdv follows USO as base, not Oilinu).", class: verified, observed_at: 2026-09-03T05:23:00Z, receipt_ids: [R-7, R-8], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-11, field: economics.metric, value: "DexScreener Oilinu/USO Uniswap v4 liquidity.usd 30254.76 volume.h24 173686.78 fdv/marketCap 65248 priceUsd 0.00006524 at 2026-09-03T05:22:28Z", class: verified, observed_at: 2026-09-03T05:22:28Z, receipt_ids: [R-6], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-12, field: economics.metric, value: 524, class: verified, observed_at: 2026-09-03T05:22:00Z, receipt_ids: [R-1], reproduction_ids: [REP-2], supersedes: null }
  - { id: CLM-13, field: control.owner, value: "token owner() reverts; EIP-1967 slots zero; token is not a proxy. factory owner() 0x5519a8cc…044D has no code; launchCreationEnabled() false on 0xe64A…F297.", class: verified, observed_at: 2026-09-03T05:24:00Z, receipt_ids: [R-4, R-5], reproduction_ids: [REP-1, REP-5], supersedes: null }
  - { id: CLM-14, field: control.privileged-role, value: "createLaunch from EIP-7702 account 0x770ed10373ea5a87E154C50b9Cf7ae33E3a21f79 (23-byte 0xef0100 code, impl EIP7702StatelessDeleGator 0x63c0c19a…E32B); CreatorRegistered token->that address; LaunchHook PoolRegistered creator same, platformTreasury 0x1cAa1962…1C90, baseFeeBps 100; factory owner 0x5519a8…044D; tokenDeployer 0x6544AF35…615b", class: verified, observed_at: 2026-09-03T05:23:00Z, receipt_ids: [R-3, R-5], reproduction_ids: [REP-2, REP-5], supersedes: null }
  - { id: CLM-15, field: other, value: "Pair asset is USO rail 0xa30FA36Db767ad9eD3f7a60fC79526fB4d56D344; venue is Uniswap v4 PoolManager 0x8366a39CC670B4001A1121B8F6A443A643e40951 poolId 0x938074f7331f49a638b833759f8273a0bdfb0ddbe83be981d6555d2023eb07e6 fee 0 tickSpacing 200 hooks LaunchHook 0x778b…EaCC; Gecko dex uniswap-v4-robinhood", class: verified, observed_at: 2026-09-03T05:23:00Z, receipt_ids: [R-3, R-6, R-7, R-16], reproduction_ids: [REP-3, REP-5], supersedes: null }
  - { id: CLM-16, field: deployment.role, value: "Token creator_address_hash is LaunchTokenDeployer 0x6544AF35…615b; factory() and Launched name RWAERC20LaunchpadFactory 0xe64A…F297 as the pad, not LongLauncher, Circus, Pons, PAIR, or hood.fun", class: verified, observed_at: 2026-09-03T05:23:00Z, receipt_ids: [R-1, R-2, R-3, R-4], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-17, field: taxonomy.chain-scope, value: robinhood-native, class: verified, observed_at: 2026-09-03T05:22:00Z, receipt_ids: [R-4, R-6], reproduction_ids: [REP-1, REP-3], supersedes: null }
  - { id: CLM-18, field: security.audit, value: "No audit report URL was located on Blockscout token/factory pages, DexScreener, Gecko, IPFS metadata, or X search this pass", class: unknown, observed_at: 2026-09-03T05:26:00Z, receipt_ids: [], reproduction_ids: [], supersedes: null }
  - { id: CLM-19, field: communications.status, value: "unconfirmed-official: DexScreener info null; no project handle embeds 0xbD99c569…8201. third-party-link: IPFS names launch.o1.exchange; aggregator posts cite the CA. copypasta-pattern listing-vote posts embed a different Oil Inu CA 0x23Ec8244…7777. Flag ca-collision.", class: claim, observed_at: 2026-09-03T05:25:00Z, receipt_ids: [R-6, R-10, R-13, R-19], reproduction_ids: [], supersedes: null }
  - { id: CLM-20, field: economics.metric, value: "DexScreener Oilinu-as-base fdv/marketCap 65248 vs Gecko token fdv_usd 339299.51. Gecko pool fdv_usd 1268331.42 is the USO-as-base pool slice, not an Oilinu FDV.", class: verified, observed_at: 2026-09-03T05:23:00Z, receipt_ids: [R-6, R-7, R-8], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-21, field: deployment.address, value: "0xa30FA36Db767ad9eD3f7a60fC79526fB4d56D344", class: verified, observed_at: 2026-09-03T05:24:00Z, receipt_ids: [R-5, R-9, R-14], reproduction_ids: [REP-2, REP-4, REP-5], supersedes: null }
  - { id: CLM-22, field: deployment.address, value: "0x778b0c4EeA7D35D66513B587bA87FC9084b0EaCC", class: verified, observed_at: 2026-09-03T05:23:00Z, receipt_ids: [R-3, R-5, R-15], reproduction_ids: [REP-2, REP-5], supersedes: null }
  - { id: CLM-23, field: identity.domain, value: "NULL — DexScreener info null; Gecko token has no website field; IPFS metadata has launchpadUrl https://launch.o1.exchange and empty description", class: claim, observed_at: 2026-09-03T05:24:00Z, receipt_ids: [R-6, R-8, R-13], reproduction_ids: [], supersedes: null }
  - { id: CLM-24, field: candidate, value: "oilinu | Oilinu | NULL | NULL — discovery token not in census 49", class: claim, observed_at: 2026-09-03T05:26:00Z, receipt_ids: [R-1, R-6], reproduction_ids: [], supersedes: null }
  - { id: CLM-25, field: relationship, value: "Ticker collision: Oil Inu / OILINU 0x23Ec8244B6B22a96f4E59AC81f67136b0eDE7777 holders_count 168, Uniswap v2 OILINU/WETH 0x8d92BA23…fdBA liq 52089.59 volume.h24 99.86. Dex search also lists oilinu/OI 0x89bA7a92…1E18/USO, OILINU 0x9B3703F5…1E18/USO, Oilinu/OILLY 0x7a7ea22B…1E18/USO. None share 0xbD99c569…8201. Flag ca-collision.", class: verified, observed_at: 2026-09-03T05:25:00Z, receipt_ids: [R-12, R-18, R-19], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-26, field: product.mechanism, value: "Secondary books on DexScreener this pass include Oilinu/USDG Uniswap v4 0xb6f93986…a517 and Oilinu/ETH 0xf7bb419d…b5c6; USO remains the launch quote", class: verified, observed_at: 2026-09-03T05:22:28Z, receipt_ids: [R-6], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-27, field: other, value: "Token source is_verified false on Blockscout; runtime 4657 bytes prefix 0x60806040; factory and LaunchHook are fully verified", class: verified, observed_at: 2026-09-03T05:24:00Z, receipt_ids: [R-1, R-2, R-15], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-28, field: other, value: "factory.quotes(0xa30FA3…D344) registered true decimals 18 creationFee 0 this pass; quotes(Oilinu) registered false", class: verified, observed_at: 2026-09-03T05:24:00Z, receipt_ids: [R-5], reproduction_ids: [REP-5], supersedes: null }

conflicts:
  - id: CON-1
    field: economics.metric
    claim_ids: [CLM-10, CLM-11]
    material_effect: "Same Uniswap v4 pool 0x938074f7…07e6: DexScreener treats Oilinu as base (liq 30254.76 vol 173686.78 fdv 65248) while Gecko names USO / Oilinu with USO as base_token (reserve 103941.37 vol 201061.39 fdv 1268331.42). Gecko token fdv 339299.51 is a third figure. Assignment hint ~$31867 / ~$200815 sat between DexScreener liquidity and Gecko pool volume."
    status: open
    resolution: null

events:
  - id: EVT-1
    type: onchain
    title: "DexScreener Oilinu/USO 24h volume $173.7k, liquidity $30.3k"
    summary: "DexScreener pair 0x938074f7…07e6 volume.h24 173686.78 liquidity.usd 30254.76 fdv 65248. Gecko same-id pool volume_usd.h24 201061.39 with USO listed as base."
    occurred_at: 2026-09-03T05:22:28Z
    observed_at: 2026-09-03T05:23:00Z
    affected_fields: [economics.metric, activity.status]
    evidence_state: verified
    impact: material
    site_recommendation: both
    channel_recommendation: none
    receipt_ids: [R-6, R-7]
  - id: EVT-2
    type: onchain
    title: "RWAERC20LaunchpadFactory createLaunch minted Oilinu / Oilinu"
    summary: "Tx 0xfddfc5cc…049e from 0x770ed103…1f79 at 2026-07-28T02:14:17Z; Launched poolId 0x938074f7…07e6 quote USO 0xa30FA3…D344."
    occurred_at: 2026-07-28T02:14:17Z
    observed_at: 2026-09-03T05:23:00Z
    affected_fields: [deployment.address, lifecycle, product.mechanism]
    evidence_state: verified
    impact: material
    site_recommendation: profile
    channel_recommendation: none
    receipt_ids: [R-3, R-16]
  - id: EVT-3
    type: ct
    title: "@bitecong posted an Oilinu signal with this CA"
    summary: "@bitecong Latest posts name Oilinu ($Oilinu) CA 0xbd99c569…8201 and note two different CAs in the same ticker."
    occurred_at: 2026-09-02T03:59:09Z
    observed_at: 2026-09-03T05:22:00Z
    affected_fields: [activity.status, communications.status]
    evidence_state: claim
    impact: routine
    site_recommendation: none
    channel_recommendation: none
    receipt_ids: [R-10]
  - id: EVT-4
    type: ct
    title: "@keyz0l posted OILINU paired with USO"
    summary: "@keyz0l quoted an oil-price post and wrote Send this OILINU paired with USO (United States Oil Fund). The post does not embed 0xbD99c569…8201."
    occurred_at: 2026-09-02T14:31:47Z
    observed_at: 2026-09-03T05:22:00Z
    affected_fields: [activity.status, relationship]
    evidence_state: claim
    impact: routine
    site_recommendation: feed
    channel_recommendation: none
    receipt_ids: [R-11]
  - id: EVT-5
    type: ct
    title: "Listing-vote posts embedded a different Oil Inu CA"
    summary: "@cryptoalphav2 and @gelprospectsETH posted identical vote copy with robinhood-main-dex-vgm.netlify.app/vote/0x23Ec8244…7777, not 0xbD99c569…8201."
    occurred_at: 2026-09-03T00:22:41Z
    observed_at: 2026-09-03T05:22:00Z
    affected_fields: [communications.status, relationship]
    evidence_state: claim
    impact: routine
    site_recommendation: none
    channel_recommendation: none
    receipt_ids: [R-19]

receipts:
  - { id: R-1, publisher: Blockscout, title: "Token 0xbD99c569…8201 Oilinu / Oilinu", url: "https://robinhoodchain.blockscout.com/address/0xbD99c569001bD6BAd33F5cd954C6faDaf4298201", published_at: null, accessed_at: 2026-09-03T05:22:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-2, CLM-3, CLM-4, CLM-6, CLM-12, CLM-16, CLM-24, CLM-27], excerpt: "Chrome UA. hash 0xbD99c569001bD6BAd33F5cd954C6faDaf4298201 name Oilinu is_contract true is_verified false proxy_type null implementations []. creator_address_hash LaunchTokenDeployer 0x6544AF3524a8d9135Eb5765CECE6E514d85D615b creation_transaction_hash 0xfddfc5ccab2ca04f8aee233232eaf93ac77c54dd110a5d610a161bd927b3049e. token symbol Oilinu decimals 18 total_supply 1e27 holders_count 524 type ERC-20." }
  - { id: R-2, publisher: Blockscout, title: "Address 0xe64A…F297 RWAERC20LaunchpadFactory", url: "https://robinhoodchain.blockscout.com/address/0xe64AC4113848BBC1a6dDE1A6D1da96720A36F297", published_at: null, accessed_at: 2026-09-03T05:24:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-5, CLM-16, CLM-27], excerpt: "hash 0xe64AC4113848BBC1a6dDE1A6D1da96720A36F297 name RWAERC20LaunchpadFactory is_contract true is_verified true is_fully_verified true file_path src/RWAERC20LaunchpadFactory.sol compiler v0.8.26+commit.8a97fa7a verified_at 2026-07-24T21:56:18Z creator_address_hash 0xc103Fce99EA5aDAcDdECE634EA6D036a42e757aE creation_transaction_hash 0x28140cdf681334118e852f8ff2cf65f564615a21f6cb2c32156956304e29a717." }
  - { id: R-3, publisher: Blockscout, title: "createLaunch tx 0xfddfc5cc…049e", url: "https://robinhoodchain.blockscout.com/tx/0xfddfc5ccab2ca04f8aee233232eaf93ac77c54dd110a5d610a161bd927b3049e", published_at: 2026-07-28T02:14:17Z, accessed_at: 2026-09-03T05:23:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-2, CLM-3, CLM-6, CLM-14, CLM-16, EVT-2], excerpt: "timestamp 2026-07-28T02:14:17.000000Z status ok result success block_number 21225045 from 0x770ed10373ea5a87E154C50b9Cf7ae33E3a21f79 is_contract true implementations EIP7702StatelessDeleGator 0x63c0c19a282a1B52b07dD5a65b58948A07DAE32B to RWAERC20LaunchpadFactory method createLaunch. decoded name Oilinu symbol Oilinu quote 0xa30FA36Db767ad9eD3f7a60fC79526fB4d56D344 metadata ipfs://bafkreiajn6kmduahxcdk4bcajqqogj3cwx6bl5ud2nprznghrit5efwa24." }
  - { id: R-4, publisher: Robinhood Chain RPC, title: "eth_getCode, name, symbol, factory() on Oilinu", url: "https://rpc.mainnet.chain.robinhood.com", published_at: null, accessed_at: 2026-09-03T05:23:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-2, CLM-3, CLM-4, CLM-5, CLM-6, CLM-13, CLM-16, CLM-17], excerpt: "Chrome UA. eth_chainId 0x1237 (4663). eth_blockNumber 0x32b4a4c (53168716). Token code 4657 B prefix 0x60806040 not EIP-1167. name Oilinu symbol Oilinu decimals 18 totalSupply 1e27. factory() 0xe64AC4113848BBC1a6dDE1A6D1da96720A36F297. owner() reverts. tokenURI() reverts. EIP-1967 slots zero. Factory code 21680 B. Current factory 0xcE9C…5B0d code 24466 B. USO code 283 B." }
  - { id: R-5, publisher: Robinhood Chain RPC, title: "factory owner(), hook(), quotes(USO), launchCreationEnabled()", url: "https://rpc.mainnet.chain.robinhood.com", published_at: null, accessed_at: 2026-09-03T05:24:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-5, CLM-9, CLM-13, CLM-14, CLM-15, CLM-21, CLM-22, CLM-28], excerpt: "block 53168716. owner() 0x5519a8cc7211f483e19ff8d50a3b0c892701044d code 0x. hook() 0x778b0c4EeA7D35D66513B587bA87FC9084b0EaCC. tokenDeployer() 0x6544AF3524a8d9135Eb5765CECE6E514d85D615b. launchCreationEnabled() false. poolManager() 0x8366a39CC670B4001A1121B8F6A443A643e40951. quotes(USO) registered true decimals 18 creationFee 0. Current factory Launched logs for this token: 0. From 0x770ed103…1f79 code 23 B 0xef0100." }
  - { id: R-6, publisher: DexScreener, title: "latest/dex/tokens Oilinu", url: "https://api.dexscreener.com/latest/dex/tokens/0xbD99c569001bD6BAd33F5cd954C6faDaf4298201", published_at: null, accessed_at: 2026-09-03T05:22:28Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-7, CLM-8, CLM-11, CLM-15, CLM-17, CLM-20, CLM-23, CLM-24, CLM-26, EVT-1], excerpt: "4 robinhood uniswap pairs. Top pairAddress 0x938074f7331f49a638b833759f8273a0bdfb0ddbe83be981d6555d2023eb07e6 labels v4 base Oilinu / Oilinu quote United States Oil Fund • Robinhood Token / USO 0xa30FA36D…D344 liquidity.usd 30254.76 volume.h24 173686.78 fdv 65248 marketCap 65248 priceUsd 0.00006524 pairCreatedAt 1785204857000. info null. Secondary USDG/ETH books have far less liquidity." }
  - { id: R-7, publisher: GeckoTerminal, title: "USO / Oilinu Uniswap v4 pool", url: "https://api.geckoterminal.com/api/v2/networks/robinhood/pools/0x938074f7331f49a638b833759f8273a0bdfb0ddbe83be981d6555d2023eb07e6", published_at: null, accessed_at: 2026-09-03T05:23:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-7, CLM-10, CLM-15, CLM-20, EVT-1], excerpt: "GET 200. name USO / Oilinu pool_created_at 2026-07-28T02:14:17Z volume_usd.h24 201061.390443564 reserve_in_usd 103941.3745 fdv_usd 1268331.42103851 market_cap_usd 1228236.64783375. dex uniswap-v4-robinhood. base_token robinhood_0xa30fa36d…d344 quote_token robinhood_0xbd99c569…8201. Pool fdv follows USO as base, not Oilinu." }
  - { id: R-8, publisher: GeckoTerminal, title: "Oilinu token", url: "https://api.geckoterminal.com/api/v2/networks/robinhood/tokens/0xbD99c569001bD6BAd33F5cd954C6faDaf4298201", published_at: null, accessed_at: 2026-09-03T05:23:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-10, CLM-20, CLM-23], excerpt: "GET 200. name Oilinu symbol Oilinu decimals 18 total_supply 1e27 price_usd 0.0003392995091 fdv_usd 339299.509131691 market_cap_usd null volume_usd.h24 208593.421410667 total_reserve_in_usd 21977.3348. coingecko_coin_id null. No website field. Top pool 0x938074f7…07e6." }
  - { id: R-9, publisher: Robinhood, title: "GET /rhj/assets Stock Token registry", url: "https://api.robinhood.com/rhj/assets", published_at: null, accessed_at: 2026-09-03T05:24:00Z, kind: docs, authority: primary, authenticity: confirmed, supports: [CLM-9, CLM-21], excerpt: "HTTP 200. assets length 194. tokenSymbol USO hits 1. tokenName United States Oil Fund • Robinhood Token deployments contractAddress 0xa30FA36Db767ad9eD3f7a60fC79526fB4d56D344 chainId 4663 status ASSET_STATUS_ACTIVE isin US91232N2071. Oilinu / 0xbD99c569 scan returned 0 hits." }
  - { id: R-10, publisher: "@bitecong", title: "Oilinu AI signal with CA 0xbd99c569…8201", url: "https://x.com/bitecong/status/2094998540305277377", published_at: 2026-09-02T03:59:09Z, accessed_at: 2026-09-03T05:22:00Z, kind: social, authority: social, authenticity: unconfirmed, supports: [CLM-8, CLM-19, EVT-3], excerpt: "Oilinu ($Oilinu) CA: 0xbd99c569001bd6bad33f5cd954c6fadaf4298201. MC $164,130 liquidity $56,627 Holders 478. Analysis notes two different CAs for the ticker. Telegram @memmememjk. Not a project account." }
  - { id: R-11, publisher: "@keyz0l", title: "OILINU paired with USO", url: "https://x.com/keyz0l/status/2095157745489965370", published_at: 2026-09-02T14:31:47Z, accessed_at: 2026-09-03T05:22:00Z, kind: social, authority: social, authenticity: unconfirmed, supports: [EVT-4], excerpt: "Oil pumping like crazy Send this OILINU paired with USO (United States Oil Fund). Quotes @WatcherGuru on Brent crude. No contract in the post this pass." }
  - { id: R-12, publisher: Blockscout, title: "Token 0x23Ec8244…7777 Oil Inu / OILINU", url: "https://robinhoodchain.blockscout.com/address/0x23Ec8244B6B22a96f4E59AC81f67136b0eDE7777", published_at: null, accessed_at: 2026-09-03T05:25:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-25], excerpt: "hash 0x23Ec8244B6B22a96f4E59AC81f67136b0eDE7777 name Oil Inu is_contract true is_verified true creator_address_hash 0x26605f322f7fF986f381bB9A6e3f5DAb0bEaEb09. token symbol OILINU holders_count 168 total_supply 1e27. Distinct CA from 0xbD99c569…8201." }
  - { id: R-13, publisher: IPFS, title: "createLaunch metadata bafkreiajn6k…wa24", url: "https://bafkreiajn6kmduahxcdk4bcajqqogj3cwx6bl5ud2nprznghrit5efwa24.ipfs.dweb.link", published_at: null, accessed_at: 2026-09-03T05:24:00Z, kind: other, authority: unknown, authenticity: unconfirmed, supports: [CLM-19, CLM-23], excerpt: "GET 200. JSON name Oilinu symbol Oilinu description empty standard ERC20 launchpad o1 Launchpad launchpadUrl https://launch.o1.exchange image ipfs://bafkreiduxzar2onubb6oudbuibb7vip6am6nujj3sau6iftolmzt3rycaa. No twitter or website keys. ipfs.io GET 403. launch.o1.exchange GET 429." }
  - { id: R-14, publisher: Blockscout, title: "Token 0xa30FA3…D344 United States Oil Fund Robinhood Token", url: "https://robinhoodchain.blockscout.com/address/0xa30FA36Db767ad9eD3f7a60fC79526fB4d56D344", published_at: null, accessed_at: 2026-09-03T05:24:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-9, CLM-21], excerpt: "hash 0xa30FA36Db767ad9eD3f7a60fC79526fB4d56D344 name BeaconProxy is_contract true is_verified true proxy_type eip1967_beacon implementations Stock 0xb35490d6f9163DE4F80d88dc75C3516eb64C5aE2. token name United States Oil Fund • Robinhood Token symbol USO decimals 18 total_supply 8947311000000000000000 holders_count 5328." }
  - { id: R-15, publisher: Blockscout, title: "Address 0x778b…EaCC LaunchHook", url: "https://robinhoodchain.blockscout.com/address/0x778b0c4EeA7D35D66513B587bA87FC9084b0EaCC", published_at: null, accessed_at: 2026-09-03T05:24:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-22, CLM-27], excerpt: "hash 0x778b0c4EeA7D35D66513B587bA87FC9084b0EaCC name LaunchHook is_contract true is_verified true is_fully_verified true file_path src/LaunchHook.sol compiler v0.8.26 verified_at 2026-07-24T21:54:21Z. createLaunch minted 1e27 Oilinu to this hook then Seeded the pool. RPC hook() on 0xe64A…F297 returns this address." }
  - { id: R-16, publisher: Blockscout, title: "Launched log for Oilinu", url: "https://robinhoodchain.blockscout.com/tx/0xfddfc5ccab2ca04f8aee233232eaf93ac77c54dd110a5d610a161bd927b3049e", published_at: 2026-07-28T02:14:17Z, accessed_at: 2026-09-03T05:23:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-4, CLM-15, EVT-2], excerpt: "Launched token 0xbD99c569001bD6BAd33F5cd954C6faDaf4298201 poolId 0x938074f7331f49a638b833759f8273a0bdfb0ddbe83be981d6555d2023eb07e6 creator 0x770ed10373ea5a87E154C50b9Cf7ae33E3a21f79 quote 0xa30FA36Db767ad9eD3f7a60fC79526fB4d56D344 supply 1e27 tickSpacing 200. PoolManager Initialize currency0 USO currency1 Oilinu hooks 0x778b…EaCC fee 0. Block 21225045." }
  - { id: R-17, publisher: Blockscout, title: "RWAERC20LaunchpadFactory verified source", url: "https://robinhoodchain.blockscout.com/address/0xe64AC4113848BBC1a6dDE1A6D1da96720A36F297?tab=contract", published_at: null, accessed_at: 2026-09-03T05:24:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-7], excerpt: "ContractName RWAERC20LaunchpadFactory. Comment: ERC20 launch factory for RWA quotes with a restricted tick updater and native launch fee. file_path src/RWAERC20LaunchpadFactory.sol compiler v0.8.26 is_fully_verified true. ABI includes createLaunch and Launched(token, poolId, creator, quote, supply, tickSpacing)." }
  - { id: R-18, publisher: DexScreener, title: "latest/dex/search Oilinu", url: "https://api.dexscreener.com/latest/dex/search?q=Oilinu", published_at: null, accessed_at: 2026-09-03T05:25:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-9, CLM-25], excerpt: "24 pairs. Robinhood hits include Oilinu/USO 0xbD99c569…8201 liq 30254.73 vol 173686.78; Oil Inu/WETH 0x23Ec8244…7777 liq 52089.59 vol 99.86; oilinu/OI 0x89bA7a92…1E18/USO; OILINU 0x9B3703F5…1E18/USO; Oilinu/OILLY 0x7a7ea22B…1E18/USO. Only the first is this CA." }
  - { id: R-19, publisher: "@cryptoalphav2", title: "$OILINU listing-vote netlify URL", url: "https://x.com/cryptoalphav2/status/2095306452718031216", published_at: 2026-09-03T00:22:41Z, accessed_at: 2026-09-03T05:22:00Z, kind: social, authority: social, authenticity: unconfirmed, supports: [CLM-19, CLM-25, EVT-5], excerpt: "Attention $OILINU Family! robinhood-main-dex-vgm.netlify.app/vote/0x23Ec8244B6B22a96f4E59AC81f67136b0eDE7777. Same CA in @gelprospectsETH 2095231802273067034. Not 0xbD99c569…8201. Flag third-party-link copypasta-pattern ca-collision." }
  - { id: R-20, publisher: Robinhood Chain RPC, title: "eth_getLogs Launched on current factory 0xcE9C…5B0d", url: "https://rpc.mainnet.chain.robinhood.com", published_at: null, accessed_at: 2026-09-03T05:25:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1], excerpt: "eth_getLogs address 0xcE9C48cFa068947f77738c81Be406B53338E5B0d topic0 Launched topic1 0xbD99c569…8201 fromBlock 0 to latest returned 0 logs. Same filter on historical factory 0xe64A…F297 returned 1 log at block 21225045 poolId 0x938074f7…07e6." }

gaps:
  - { priority: P0, question: "Is there an official X handle or site that bidirectionally embeds token 0xbD99c569…8201?", checked: "DexScreener info null; Gecko token has no website; X user search returned unrelated handles; IPFS metadata has no twitter key; aggregator posts cite the CA without a project bio, 2026-09-03", next: "re-read DexScreener token profile after a Claim Profile; search new posts that embed the CA and a handle" }
  - { priority: P0, question: "Which aggregator is right for Oilinu/USO USD liquidity and FDV given Gecko lists USO as base_token?", checked: "DexScreener Oilinu-as-base liq 30254.76 vol 173686.78 fdv 65248 vs Gecko pool USO/Oilinu reserve 103941.37 vol 201061.39 fdv 1268331.42 vs Gecko token fdv 339299.51, 2026-09-03", next: "re-fetch both endpoints in the same minute and compare PoolManager reserves on RPC with USO vs Oilinu as the valued side" }
  - { priority: P1, question: "Does launch.o1.exchange list this CA, and does it cross-link a handle?", checked: "IPFS launchpadUrl https://launch.o1.exchange; GET launch.o1.exchange 429 this pass", next: "retry launch.o1.exchange and search the page for 0xbD99c569…8201" }
  - { priority: P1, question: "Is Oilinu bytecode verified anywhere, and does it match launchTokenBytecodeHash() on 0xe64A…F297?", checked: "is_verified false; 4657 bytes prefix 0x60806040; not EIP-1167, 2026-09-03", next: "compare bytecode hash to launchTokenBytecodeHash() on the historical factory" }
  - { priority: P2, question: "Do the ticker-collision CAs (0x23Ec8244…7777 and later USO-paired clones) share a deployer with this o1 launch?", checked: "0x23Ec8244…7777 creator 0x26605f32…Eb09; this token CREATE2 from LaunchTokenDeployer 0x6544AF35…615b, 2026-09-03", next: "read those create txs and any comms that cite both CAs" }
---

# Oilinu — research packet

## What it is

A one-billion-supply ERC-20 created into a Uniswap v4 pool quoted against USO. Historical RWAERC20LaunchpadFactory deploys Oilinu in one createLaunch call and seeds the Oilinu/USO book. Traders buy and sell Oilinu on Uniswap v4. USO is the Robinhood stock-token rail, not the project. No official domain or handle was located this pass.

Themes: memecoin, stock-paired:USO, rwa

## Why it matters

The Oilinu/USO Uniswap v4 book printed about $173.7k of 24h volume on DexScreener at collection (Gecko printed $201.1k on the same pool id with USO listed as base). The quote token is the United States Oil Fund Robinhood Token in GET /rhj/assets. Packed CRUDECAT, GASOLINU, OILCOIN, and MICROWAVE quote the same USO rail through other pads and are not this token.

## What could go wrong

USD liquidity figures on the Oilinu/USO book count both sides, and DexScreener and Gecko disagree because Gecko names the pool USO / Oilinu. Several other Oilinu tickers exist, including Oil Inu / WETH at 0x23Ec8244…7777. Token source is unverified. No official handle was located.

## Product and mechanics

Oilinu is an ERC-20 at `0xbD99c569001bD6BAd33F5cd954C6faDaf4298201`. The launch book is Uniswap v4 Oilinu/USO (`0x938074f7…07e6`) with quote `0xa30FA36Db767ad9eD3f7a60fC79526fB4d56D344`. [verified R-1 R-3 R-6]

The token was created on 2026-07-28T02:14:17Z by `createLaunch` on historical `RWAERC20LaunchpadFactory` `0xe64A…F297`. The call named Oilinu / Oilinu and quoted USO. `Launched` records pool id `0x938074f7…07e6`. Almost the full 1e27 supply moved to LaunchHook `0x778b…EaCC` then into PoolManager `0x8366…0951`. Current factory `0xcE9C…5B0d` had no `Launched` log for this token; `launchCreationEnabled()` on the historical factory is false. [verified R-3 R-4 R-5 R-16]

DexScreener also lists Oilinu/USDG and Oilinu/ETH Uniswap v4 books. USO remains the launch quote. [verified R-6]

Ticker clones include Oil Inu `0x23Ec8244…7777` / WETH, plus later USO-paired OILINU / OI / OILLY tokens. They are not this CA. [verified R-12 R-18]

## Control and security

`owner()` on the token reverts. The contract is not a proxy (EIP-1967 slots zero; 4657 bytes of runtime code). Token source is_verified false. LaunchHook and the historical factory are verified as `LaunchHook` / `RWAERC20LaunchpadFactory`. Factory `owner()` is EOA `0x5519a8…044D` with no code. [verified R-1 R-2 R-4 R-5 R-15]

The createLaunch sender is EIP-7702 account `0x770ed103…1f79` with 23-byte `0xef0100` code. CreatorRegistered points at that address. [verified R-3 R-5]

No audit report URL was located this pass. [unknown]

## Team and provenance

No official domain or X handle was located. DexScreener `info` is null. IPFS metadata from the createLaunch URI names launchpad `o1 Launchpad` and `https://launch.o1.exchange` with an empty description. Flag unconfirmed-official. [claim R-6 R-13]

Netlify vote URLs that embed `0x23Ec8244…7777` are third-party-link, copypasta-pattern, and a ca-collision against this token. [claim R-19]

## Economics and activity

DexScreener Oilinu/USO Uniswap v4 24h volume is 173686.78 USD and liquidity.usd is 30254.76 at 2026-09-03T05:22:28Z. fdv/marketCap is 65248. Blockscout holders_count 524. Pair created 2026-07-28T02:14:17Z. Assignment hint ~$31,867 / ~$200,815 was not reproduced exactly; live DexScreener liquidity is the Oilinu-as-base book. [claim R-1 R-6]

Gecko GET token 200: volume_usd.h24 208593.42, fdv_usd 339299.51, total_reserve_in_usd 21977.33 across listed pools, not the USO book alone. Gecko GET pool 200 names USO / Oilinu with USO as base_token: volume_usd.h24 201061.39, reserve_in_usd 103941.37, fdv_usd 1268331.42. [claim R-7 R-8]

## Material risks

- DexScreener and Gecko disagree on Oilinu/USO USD liquidity, volume, and FDV because Gecko lists USO as the pool base. [verified R-6 R-7 R-8]
- Pool USD reserve is Oilinu plus USO, not a USDG or WETH backstop. [claim R-6 R-7]
- No official handle or domain this pass. [claim R-6 R-13]
- Token source is_verified false. [verified R-1]
- Several other Oilinu tickers exist, including Oil Inu/WETH 0x23Ec8244…7777. [verified R-12 R-18]
- No audit report URL this pass. [unknown]

## Verification passes

- Receipts: Blockscout token/factory/hook/USO and the createLaunch tx plus logs, RPC name/symbol/factory/owner/hook/quotes/launchCreationEnabled, DexScreener token and search, Gecko pool/token (first GET 200), /rhj/assets, IPFS metadata, @bitecong, @keyz0l, and the 0x23Ec8244…7777 vote posts were opened on 2026-09-03 and excerpts copied from the responses. [verified R-1 R-4 R-6 R-9]
- Numbers: 173686.78 is the DexScreener Oilinu/USO pair 24h volume. 201061.39 is the Gecko same-id pool with USO as base. 208593.42 is Gecko token all-pools. Reserve 30254.76 is DexScreener Oilinu-as-base liquidity, not Gecko pool 103941.37. [claim R-6 R-7 R-8]
- Adversarial: the strongest contrary reading is that Oilinu is CRUDECAT, GASOLINU, OILCOIN, MICROWAVE, or the Oil Inu/WETH token. Those are different addresses and pads. USO is the /rhj/assets rail, not the project. [inference R-9 R-12 R-18]

## Operations log

- Base: `git -C /Users/harsharnsingh/proofline-pr59 rev-parse origin/main` → 334ca0619aa62e922da83f46de021f06d12348cf. Census 49 slugs have no oilinu / Oilinu / 0xbD99c569…8201. content/dependencies/stock-tokens.yaml USO address 0xa30FA3…D344 matches the pair quote.
- Explorer: Blockscout api/v2 search Oilinu, token 0xbD99c569…8201, factory, LaunchHook, USO, createLaunch 0xfddfc5cc…049e, logs, internal-transactions, clone 0x23Ec8244…7777. RPC eth_getCode/eth_call/eth_getLogs/eth_getStorageAt with Chrome UA at block 53168716.
- Aggregators: DexScreener latest/dex/tokens and latest/dex/search Oilinu; Gecko token and pool first GET 200 (not skipped).
- Registry: GET api.robinhood.com/rhj/assets 194 assets, 1 USO, 0 Oilinu.
- Social: X keyword Oilinu/OILINU Latest; user search Oilinu / Oilinu robinhood; from:bitecong; from:keyz0l.
- Metadata: IPFS dweb.link 200; ipfs.io 403; launch.o1.exchange 429; GitHub search q=oilinu total_count 4.
- Failed: tokenURI() reverts on the token; token owner() reverts; DexScreener info null; no official handle.
- Time: collection 2026-09-03T05:21Z–2026-09-03T05:26Z.
