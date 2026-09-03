---
# Packet v2 (docs/research-system.md §5). Seed with Icarus What-it-is + events.
contract_version: proofline-research-v2
work_id: WORK-20260903-grok-heavy-icarus-research
producer: grok-heavy
role: collector
base_sha: 334ca0619aa62e922da83f46de021f06d12348cf
slug: retard
name: RETARD
packet_tier: seed
as_of: 2026-09-03T05:30:00Z
prior_packet: null
supersedes: null
owned_slugs: [retard]
allowed_paths:
  - research/inbox/packets/retard/WORK-20260903-grok-heavy-icarus-research.md

identity:
  canonical_name: RETARD
  aliases: [Retardatide]
  symbols: [RETARD]
  entity_kind: token
  chain_scope: robinhood-native
  official_domain: "NULL — DexScreener info.websites []; Gecko token attributes have no website; X og:description has no domain; createLaunch metadata ipfs://bafkreih7rkrrjr25itxf7lu6c3llmibjqdmhullwm3khe2acycuipvd6g4 returned Cloudflare 403 this pass"
  official_handle: "NULL — DexScreener info.socials lists x.com/buyretardatide; X og:title Retardatide (@BuyRetardatide) bio names LLY with no 0xEF455…4501 string this pass; a 2026-09-01T22:49:15Z post from that account embeds the CA; flag unconfirmed-official"
  repository: "NULL — no GitHub org or repository URL on DexScreener, Gecko token attributes, Blockscout token page, or the @BuyRetardatide profile this pass"
  possible_matches:
    - slug: long
      signals: [other]
      contrary_signals:
        - "Census LONG is a stock-paired factory at app.long.xyz / @longdotxyz with LongLauncher 0x22e9…eeED"
        - "RETARD is a token created by createLaunch on RWAERC20LaunchpadFactory 0xe64A…F297, not LongLauncher"
        - "No shared domain, handle, or reproduced address"
    - slug: artificial-inu
      signals: [other]
      contrary_signals:
        - "Census Artificial Inu is $AI at 0x2E8c…1e18 paired to NVDA via LongLauncher, site artificialinu.com / @ArtificiallyInu"
        - "RETARD is 0xEF455BEE…4501 paired to LLY via historical RWAERC20LaunchpadFactory 0xe64A…F297"
        - "No shared domain, handle, or reproduced address"
    - slug: l4va
      signals: [other]
      contrary_signals:
        - "Census L4VA is a vault factory issuing tokens backed by locked RWAs at @L4VAprotocol"
        - "RETARD is a historical-factory ERC-20 in a Uniswap v4 RETARD/LLY pool"
        - "No shared domain, handle, or reproduced address"

classification:
  primary_leaf: rwa-products/stock-paired-token
  secondary_leaves: []
  mechanism_tags: [stock-paired, rwa, amm, launchpad]
  ecosystem_role: graduation
  lifecycle: mainnet
  coverage_recommendation: seed
  evidence_state: partly-verified
  rationale: "Not in the 49-row census. Token 0xEF455BEE…4501 has non-empty 4657-byte code on 4663; factory() returns historical RWAERC20LaunchpadFactory 0xe64A…F297; createLaunch minted Retardatide / RETARD into Uniswap v4 pool 0xffb47e86…219f quoted against LLY 0x8005d266…00ea (GET /rhj/assets row, stock-token rail). Distinct from PEPTIDES/LLY and FATCOIN/LLY. Token source is_verified false; handle is DexScreener socials plus an X profile whose bio has no CA. [R-1] [R-4] [R-5] [R-7] [R-12]"

qualifying:
  deployed_on_chain: { status: pass, claim_ids: [CLM-4, CLM-5, CLM-6], note: "" }
  native_play:       { status: pass, claim_ids: [CLM-1, CLM-15], note: "" }
  citable:           { status: pass, claim_ids: [CLM-2, CLM-3, CLM-4], note: "" }
  research_story:    { status: pass, claim_ids: [CLM-1, CLM-9, CLM-10], note: "" }

links:
  - { kind: x, url: "https://x.com/BuyRetardatide", authenticity: unconfirmed }
  - { kind: other, url: "https://dexscreener.com/robinhood/0xffb47e8699525abe568b81a5b151d368a3c2f58656b31d3f9b49bc864b3e219f", authenticity: unconfirmed }
  - { kind: other, url: "https://www.geckoterminal.com/robinhood/pools/0xffb47e8699525abe568b81a5b151d368a3c2f58656b31d3f9b49bc864b3e219f", authenticity: unconfirmed }

deployments:
  - label: RETARD token
    role: token
    address:
      value: "0xEF455BEE1E4Fa2974A7111d0DC9a1E53660A4501"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T05:26:00Z
      exists_on_4663: true
      explorer_source_verified: false
    receipt_ids: [R-1, R-5, R-18]
  - label: o1 historical RWAERC20LaunchpadFactory (createLaunch)
    role: factory
    address:
      value: "0xe64AC4113848BBC1a6dDE1A6D1da96720A36F297"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T05:26:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-3, R-4, R-5, R-6]
  - label: Historical LaunchHook (launch mint recipient)
    role: other
    address:
      value: "0x778b0c4EeA7D35D66513B587bA87FC9084b0EaCC"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T05:26:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-4, R-6, R-16]
  - label: Eli Lilly Robinhood Token (pair quote / rail)
    role: token
    address:
      value: "0x8005d266423c7ea827372c9c864491e5786600ea"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T05:22:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-6, R-12, R-13]

metrics:
  - { kind: volume_24h, value: 324451.63, currency: USD, as_of: 2026-09-03T05:23:00Z, window: 24h, method: "api.geckoterminal.com/api/v2/networks/robinhood/pools/0xffb47e8699525abe568b81a5b151d368a3c2f58656b31d3f9b49bc864b3e219f volume_usd.h24", class: claim, receipt_ids: [R-8] }
  - { kind: tvl, value: 28871.55, currency: USD, as_of: 2026-09-03T05:23:00Z, window: point, method: "api.geckoterminal.com/api/v2/networks/robinhood/pools/0xffb47e8699525abe568b81a5b151d368a3c2f58656b31d3f9b49bc864b3e219f reserve_in_usd (RETARD/LLY pool, not an all-pools figure)", class: claim, receipt_ids: [R-8] }
  - { kind: market_cap, value: 62269.98, currency: USD, as_of: 2026-09-03T05:23:00Z, window: point, method: "api.geckoterminal.com/api/v2/networks/robinhood/tokens/0xEF455BEE1E4Fa2974A7111d0DC9a1E53660A4501 fdv_usd (market_cap_usd null; not the pool GET fdv_usd which treats LLY as base)", class: claim, receipt_ids: [R-9] }
  - { kind: volume_24h, value: 332037.96, currency: USD, as_of: 2026-09-03T05:22:00Z, window: 24h, method: "api.dexscreener.com/latest/dex/tokens/0xEF455BEE1E4Fa2974A7111d0DC9a1E53660A4501 pair 0xffb47e86…219f RETARD/LLY Uniswap v4 volume.h24", class: claim, receipt_ids: [R-7] }
  - { kind: tvl, value: 26045.01, currency: USD, as_of: 2026-09-03T05:22:00Z, window: point, method: "api.dexscreener.com/latest/dex/tokens/0xEF455BEE1E4Fa2974A7111d0DC9a1E53660A4501 pair 0xffb47e86…219f RETARD/LLY Uniswap v4 liquidity.usd", class: claim, receipt_ids: [R-7] }
  - { kind: market_cap, value: 57783, currency: USD, as_of: 2026-09-03T05:22:00Z, window: point, method: "api.dexscreener.com/latest/dex/tokens/0xEF455BEE1E4Fa2974A7111d0DC9a1E53660A4501 pair 0xffb47e86…219f fdv/marketCap", class: claim, receipt_ids: [R-7] }
  - { kind: volume_24h, value: 342750.84, currency: USD, as_of: 2026-09-03T05:23:00Z, window: 24h, method: "api.geckoterminal.com/api/v2/networks/robinhood/tokens/0xEF455BEE1E4Fa2974A7111d0DC9a1E53660A4501 volume_usd.h24 (all listed pools, not the LLY book alone)", class: claim, receipt_ids: [R-9] }
  - { kind: holders, value: 517, currency: null, as_of: 2026-09-03T05:22:00Z, window: point, method: "robinhoodchain.blockscout.com/api/v2/tokens/0xEF455BEE1E4Fa2974A7111d0DC9a1E53660A4501 holders_count", class: claim, receipt_ids: [R-1] }

reproductions:
  - { id: REP-1, method: explorer-rpc, chain_id: 4663, checked_at: 2026-09-03T05:26:00Z, receipt_ids: [R-5], result: "eth_chainId 0x1237 (4663). eth_blockNumber 0x32b4c40 (53169216) then 0x32b4f44 (53169988). Token 0xEF455BEE…4501 eth_getCode 4657 bytes prefix 0x60806040, not EIP-1167. name Retardatide, symbol RETARD, decimals 18, totalSupply 1e27. factory() 0xe64AC4113848BBC1a6dDE1A6D1da96720A36F297. owner() reverts. EIP-1967 implementation and admin slots zero." }
  - { id: REP-2, method: explorer-ui, chain_id: 4663, checked_at: 2026-09-03T05:22:00Z, receipt_ids: [R-1, R-2, R-3, R-4, R-13, R-16, R-18], result: "Blockscout api/v2 token 0xEF455BEE…4501 name Retardatide symbol RETARD holders_count 517 total_supply 1e27 is_verified false proxy_type null creator_address_hash LaunchTokenDeployer 0x6544AF35…615b creation_transaction_hash 0xcc8e9ff5…02aa. Factory 0xe64A…F297 name RWAERC20LaunchpadFactory is_verified true is_fully_verified true file_path src/RWAERC20LaunchpadFactory.sol compiler v0.8.26. createLaunch tx 0xcc8e9ff5…02aa 2026-09-01T21:49:27Z block 52052349 from EOA 0x0000006b…7A16 to factory method createLaunch. Decoded name/symbol Retardatide/RETARD quote 0x8005d266…00ea. Launched token 0xEF455BEE…4501 poolId 0xffb47e86…219f supply 1e27. Mint 1e27 to LaunchHook 0x778b…EaCC; Seeded 999999999999999999999996629 to PoolManager 0x8366…0951. LLY 0x8005d266…00ea name Eli Lilly • Robinhood Token BeaconProxy holders_count 2214." }
  - { id: REP-3, method: api, checked_at: 2026-09-03T05:23:00Z, receipt_ids: [R-7, R-8, R-9, R-19], result: "DexScreener latest/dex/tokens/0xEF455BEE…4501: 8 robinhood uniswap pairs; top RETARD/LLY v4 0xffb47e86…219f quote 0x8005d266…00ea Eli Lilly • Robinhood Token / LLY liquidity.usd 26045.01 volume.h24 332037.96 fdv/marketCap 57783 pairCreatedAt 1788299367000 (2026-09-01T21:49:27Z) info.websites [] info.socials x.com/buyretardatide. Gecko pool: name LLY / RETARD volume_usd.h24 324451.63 reserve_in_usd 28871.55 fdv_usd 1206569.37 pool_created_at 2026-09-01T21:49:27Z dex uniswap-v4-robinhood. Gecko token fdv_usd 62269.98 volume_usd.h24 342750.84 (all listed pools, not the LLY book). Gecko token/pools row 1 same pool fdv_usd 62269.98." }
  - { id: REP-4, method: api, checked_at: 2026-09-03T05:23:00Z, receipt_ids: [R-12], result: "GET api.robinhood.com/rhj/assets HTTP 200; assets length 194; tokenSymbol LLY hits 1. Row tokenName Eli Lilly • Robinhood Token contractAddress 0x8005d266423c7ea827372c9c864491e5786600ea chainId 4663 status ASSET_STATUS_ACTIVE." }
  - { id: REP-5, method: explorer-rpc, chain_id: 4663, checked_at: 2026-09-03T05:26:00Z, receipt_ids: [R-6], result: "Factory 0xe64A…F297 code 21680 B. owner() 0x5519a8cc7211f483e19ff8d50a3b0c892701044d (EOA, code 0x). hook() 0x778b0c4EeA7D35D66513B587bA87FC9084b0EaCC. tokenDeployer() 0x6544af3524a8d9135eb5765cece6e514d85d615b. launchCreationEnabled() false. quotes(LLY) registered decimals 18. poolManager() 0x8366a39CC670B4001A1121B8F6A443A643e40951. Current factory 0xcE9C…5B0d code 24466 B; eth_getLogs Launched topic1=token returned 0 logs. Creator 0x0000006b…7A16 code 0x. LLY code 283 B name Eli Lilly • Robinhood Token. Mint Transfer to_topic LaunchHook." }

claims:
  - { id: CLM-1, field: product.mechanism, value: "Historical RWAERC20LaunchpadFactory.createLaunch clones a 1e9-supply ERC-20 into a Uniswap v4 pool quoted against LLY. createLaunch from 0x0000006b…7A16 at 2026-09-01T21:49:27Z minted Retardatide / RETARD; Launched poolId 0xffb47e86…219f quote 0x8005d266…00ea. Mint 1e27 to LaunchHook 0x778b…EaCC then Seeded 999999999999999999999996629 into PoolManager 0x8366…0951. Current factory 0xcE9C…5B0d had 0 Launched logs; launchCreationEnabled() on 0xe64A…F297 is false.", class: verified, observed_at: 2026-09-03T05:26:00Z, receipt_ids: [R-3, R-4, R-5, R-6, R-18], reproduction_ids: [REP-1, REP-2, REP-5], supersedes: null }
  - { id: CLM-2, field: identity.name, value: "Retardatide", class: verified, observed_at: 2026-09-03T05:22:00Z, receipt_ids: [R-1, R-4, R-5], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-3, field: identity.symbol, value: "RETARD", class: verified, observed_at: 2026-09-03T05:22:00Z, receipt_ids: [R-1, R-4, R-5], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-4, field: deployment.address, value: "0xEF455BEE1E4Fa2974A7111d0DC9a1E53660A4501", class: verified, observed_at: 2026-09-03T05:26:00Z, receipt_ids: [R-1, R-5, R-18], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-5, field: deployment.address, value: "0xe64AC4113848BBC1a6dDE1A6D1da96720A36F297", class: verified, observed_at: 2026-09-03T05:26:00Z, receipt_ids: [R-3, R-5, R-6], reproduction_ids: [REP-1, REP-2, REP-5], supersedes: null }
  - { id: CLM-6, field: lifecycle, value: mainnet, class: verified, observed_at: 2026-09-03T05:26:00Z, receipt_ids: [R-1, R-4, R-5, R-8], reproduction_ids: [REP-1, REP-2, REP-3], supersedes: null }
  - { id: CLM-7, field: taxonomy.primary-leaf, value: rwa-products/stock-paired-token, class: claim, observed_at: 2026-09-03T05:26:00Z, receipt_ids: [R-7, R-8, R-12], reproduction_ids: [], supersedes: null }
  - { id: CLM-8, field: identity.handle, value: "NULL — no bidirectional official handle with the CA in the bio; DexScreener info.socials x.com/buyretardatide; X profile Retardatide (@BuyRetardatide) posted the CA at 2026-09-01T22:49:15Z; flag unconfirmed-official", class: claim, observed_at: 2026-09-03T05:28:00Z, receipt_ids: [R-7, R-10, R-14], reproduction_ids: [], supersedes: null }
  - { id: CLM-9, field: relationship, value: "Pair quote LLY 0x8005d266…00ea is the Eli Lilly • Robinhood Token rail in GET /rhj/assets (194 assets, 1 LLY hit, chainId 4663). Distinct from PEPTIDES 0x52F380A5…1e18 / pair 0x6a2423f7…0754 (LongLauncher) and FATCOIN 0x12D5ee79…8a01 / pair 0x46ba8216…af85 (same historical factory, different CA).", class: verified, observed_at: 2026-09-03T05:26:00Z, receipt_ids: [R-7, R-12, R-13, R-15], reproduction_ids: [REP-3, REP-4], supersedes: null }
  - { id: CLM-10, field: economics.metric, value: "RETARD/LLY Gecko 24h volume 324451.63 USD and reserve_in_usd 28871.55 at 2026-09-03T05:23:00Z (Gecko pool slice, not Gecko token all-pools 342750.84)", class: verified, observed_at: 2026-09-03T05:23:00Z, receipt_ids: [R-8, R-9], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-11, field: economics.metric, value: "DexScreener same pair liquidity.usd 26045.01 volume.h24 332037.96 fdv/marketCap 57783 at 2026-09-03T05:22:00Z", class: verified, observed_at: 2026-09-03T05:22:00Z, receipt_ids: [R-7], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-12, field: economics.metric, value: 517, class: verified, observed_at: 2026-09-03T05:22:00Z, receipt_ids: [R-1], reproduction_ids: [REP-2], supersedes: null }
  - { id: CLM-13, field: control.owner, value: "token owner() reverts; EIP-1967 slots zero; token is not a proxy. factory owner() 0x5519a8cc…044D has no code; launchCreationEnabled() false.", class: verified, observed_at: 2026-09-03T05:26:00Z, receipt_ids: [R-5, R-6], reproduction_ids: [REP-1, REP-5], supersedes: null }
  - { id: CLM-14, field: control.privileged-role, value: "createLaunch from EOA 0x0000006b42C0E0aec91De37f89E8C54B9c767A16; CreatorRegistered token->that address; LaunchHook PoolRegistered creator same; factory owner 0x5519a8…044D; treasury 0x1cAa1962…1C90; tokenDeployer 0x6544af35…615b", class: verified, observed_at: 2026-09-03T05:26:00Z, receipt_ids: [R-4, R-6], reproduction_ids: [REP-2, REP-5], supersedes: null }
  - { id: CLM-15, field: other, value: "Pair asset is LLY 0x8005d266423c7ea827372c9c864491e5786600ea; venue is Uniswap v4 PoolManager 0x8366a39CC670B4001A1121B8F6A443A643e40951 pool 0xffb47e86…219f; Gecko dex uniswap-v4-robinhood. LLY is the Robinhood stock-token rail, not the project.", class: verified, observed_at: 2026-09-03T05:26:00Z, receipt_ids: [R-4, R-7, R-8, R-18], reproduction_ids: [REP-3, REP-5], supersedes: null }
  - { id: CLM-16, field: deployment.role, value: "Token creator_address_hash is LaunchTokenDeployer 0x6544AF35…615b; factory() and Launched name RWAERC20LaunchpadFactory 0xe64A…F297 as the pad, not LongLauncher, Pons, PAIR, or hood.fun", class: verified, observed_at: 2026-09-03T05:26:00Z, receipt_ids: [R-1, R-3, R-4, R-5], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-17, field: taxonomy.chain-scope, value: robinhood-native, class: verified, observed_at: 2026-09-03T05:22:00Z, receipt_ids: [R-5, R-7], reproduction_ids: [REP-1, REP-3], supersedes: null }
  - { id: CLM-18, field: security.audit, value: "No audit report URL was located on Blockscout token/factory pages, DexScreener, Gecko, or the @BuyRetardatide profile this pass", class: unknown, observed_at: 2026-09-03T05:28:00Z, receipt_ids: [], reproduction_ids: [], supersedes: null }
  - { id: CLM-19, field: communications.status, value: "unconfirmed-official: DexScreener lists x.com/buyretardatide; X bio has no CA; a 2026-09-01T22:49:15Z post from @BuyRetardatide embeds 0xef455bee…4501", class: claim, observed_at: 2026-09-03T05:28:00Z, receipt_ids: [R-7, R-10, R-14], reproduction_ids: [], supersedes: null }
  - { id: CLM-20, field: economics.metric, value: "Gecko token fdv_usd 62269.98; DexScreener fdv/marketCap 57783. Gecko pool GET fdv_usd 1206569.37 names the pool LLY / RETARD with base_token_price_usd 1169.70 (LLY), not RETARD fdv.", class: verified, observed_at: 2026-09-03T05:23:00Z, receipt_ids: [R-7, R-8, R-9], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-21, field: deployment.address, value: "0x8005d266423c7ea827372c9c864491e5786600ea", class: verified, observed_at: 2026-09-03T05:22:00Z, receipt_ids: [R-6, R-12, R-13], reproduction_ids: [REP-2, REP-4, REP-5], supersedes: null }
  - { id: CLM-22, field: deployment.address, value: "0x778b0c4EeA7D35D66513B587bA87FC9084b0EaCC", class: verified, observed_at: 2026-09-03T05:26:00Z, receipt_ids: [R-4, R-6, R-16], reproduction_ids: [REP-2, REP-5], supersedes: null }
  - { id: CLM-23, field: identity.domain, value: "NULL — DexScreener info.websites []; Gecko token has no website field; X og:description has no domain", class: claim, observed_at: 2026-09-03T05:23:00Z, receipt_ids: [R-7, R-9, R-14], reproduction_ids: [], supersedes: null }
  - { id: CLM-24, field: candidate, value: "retard | RETARD | NULL | NULL — discovery token not in census 49", class: claim, observed_at: 2026-09-03T05:30:00Z, receipt_ids: [R-1, R-7], reproduction_ids: [], supersedes: null }
  - { id: CLM-25, field: relationship, value: "Ticker collision: Doppler RETARDATIDE/RETARD 0x04bDFE41…1E18 vs LLY pair 0x1ce63c89…40dc holders_count 6 liq 20810.60 volume.h24 11604.18. Separate WETH RETARD 0xd104cf0E…d052 holders 6 and 0xDEdDd58B…7504 holders 2. Not this CA.", class: verified, observed_at: 2026-09-03T05:28:00Z, receipt_ids: [R-7, R-21], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-26, field: economics.metric, value: "Gecko token volume_usd.h24 342750.84 across listed pools, not the LLY book alone", class: verified, observed_at: 2026-09-03T05:23:00Z, receipt_ids: [R-9, R-19], reproduction_ids: [REP-3], supersedes: null }

conflicts:
  - id: CON-1
    field: economics.metric
    claim_ids: [CLM-11, CLM-20]
    material_effect: "Same RETARD/LLY Uniswap v4 pool 0xffb47e86…219f: DexScreener fdv/marketCap 57783 vs Gecko token fdv_usd 62269.98 vs Gecko pool GET fdv_usd 1206569.37 (pool name LLY / RETARD, base_token_price_usd 1169.70 is LLY). Liquidity 26045.01 vs reserve_in_usd 28871.55 is closer."
    status: open
    resolution: null

events:
  - id: EVT-1
    type: onchain
    title: "DexScreener RETARD/LLY 24h volume $332k, liquidity $26.0k"
    summary: "DexScreener pair 0xffb47e86…219f volume.h24 332037.96 liquidity.usd 26045.01 fdv 57783. Gecko pool volume_usd.h24 324451.63 reserve_in_usd 28871.55."
    occurred_at: 2026-09-03T05:22:00Z
    observed_at: 2026-09-03T05:22:00Z
    affected_fields: [economics.metric, activity.status]
    evidence_state: verified
    impact: material
    site_recommendation: both
    channel_recommendation: none
    receipt_ids: [R-7, R-8]
  - id: EVT-2
    type: onchain
    title: "Historical factory createLaunch minted Retardatide / RETARD against LLY"
    summary: "Tx 0xcc8e9ff5…02aa from 0x0000006b…7A16 at 2026-09-01T21:49:27Z; Launched poolId 0xffb47e86…219f quote LLY."
    occurred_at: 2026-09-01T21:49:27Z
    observed_at: 2026-09-03T05:22:00Z
    affected_fields: [deployment.address, lifecycle, product.mechanism]
    evidence_state: verified
    impact: material
    site_recommendation: profile
    channel_recommendation: none
    receipt_ids: [R-4, R-18]
  - id: EVT-3
    type: ct
    title: "@BuyRetardatide posted the RETARD CA with Retardatide/LLY on RH"
    summary: "@BuyRetardatide 2026-09-01T22:49:15Z: pairing Retardatide/LLY on RH and 0xef455bee…4501. Bio has no CA; DexScreener lists the handle."
    occurred_at: 2026-09-01T22:49:15Z
    observed_at: 2026-09-03T05:28:00Z
    affected_fields: [identity.handle, communications.status]
    evidence_state: claim
    impact: routine
    site_recommendation: none
    channel_recommendation: none
    receipt_ids: [R-10, R-14]
  - id: EVT-4
    type: ct
    title: "@BuyRetardatide posted RETARD token notes 07-02"
    summary: "@BuyRetardatide 2026-09-03T03:41:33Z: pool 12.1 LLY; pool+vault 17.5 LLY; $RETARD 24h vol $909k; now FDV $85k. Live DexScreener 24h volume this pass is $332k."
    occurred_at: 2026-09-03T03:41:33Z
    observed_at: 2026-09-03T05:28:00Z
    affected_fields: [economics.metric, communications.status]
    evidence_state: claim
    impact: routine
    site_recommendation: feed
    channel_recommendation: none
    receipt_ids: [R-11]
  - id: EVT-5
    type: ct
    title: "@meliboi_sama posted the RETARD CA"
    summary: "@meliboi_sama 2026-09-02T03:48:35Z posted 0xef455bee…4501 with mcap $826K. Third-party-link."
    occurred_at: 2026-09-02T03:48:35Z
    observed_at: 2026-09-03T05:21:00Z
    affected_fields: [identity.handle, communications.status]
    evidence_state: claim
    impact: routine
    site_recommendation: none
    channel_recommendation: none
    receipt_ids: [R-17]

receipts:
  - { id: R-1, publisher: Blockscout, title: "Token 0xEF455BEE…4501 Retardatide / RETARD", url: "https://robinhoodchain.blockscout.com/address/0xEF455BEE1E4Fa2974A7111d0DC9a1E53660A4501", published_at: null, accessed_at: 2026-09-03T05:22:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-2, CLM-3, CLM-4, CLM-6, CLM-12, CLM-16, CLM-24], excerpt: "Chrome UA. hash 0xEF455BEE1E4Fa2974A7111d0DC9a1E53660A4501 name Retardatide is_contract true is_verified false proxy_type null creator_address_hash 0x6544AF3524a8d9135Eb5765CECE6E514d85D615b creation_transaction_hash 0xcc8e9ff57300a96a3a0711aaafded86865f30a5f3e9472f1e2cc774c4d2b02aa. token symbol RETARD decimals 18 total_supply 1e27 holders_count 517 type ERC-20." }
  - { id: R-2, publisher: Blockscout, title: "Address 0x6544AF35…615b LaunchTokenDeployer", url: "https://robinhoodchain.blockscout.com/address/0x6544AF3524a8d9135Eb5765CECE6E514d85D615b", published_at: null, accessed_at: 2026-09-03T05:22:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-16], excerpt: "hash 0x6544AF3524a8d9135Eb5765CECE6E514d85D615b name LaunchTokenDeployer is_contract true is_verified true creator_address_hash 0xc103Fce99EA5aDAcDdECE634EA6D036a42e757aE. Token page lists this address as creator_address_hash. RPC tokenDeployer() on 0xe64A…F297 returns this address." }
  - { id: R-3, publisher: Blockscout, title: "Address 0xe64A…F297 RWAERC20LaunchpadFactory", url: "https://robinhoodchain.blockscout.com/address/0xe64AC4113848BBC1a6dDE1A6D1da96720A36F297", published_at: null, accessed_at: 2026-09-03T05:22:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-5, CLM-16], excerpt: "hash 0xe64AC4113848BBC1a6dDE1A6D1da96720A36F297 name RWAERC20LaunchpadFactory is_contract true is_verified true creator_address_hash 0xc103Fce99EA5aDAcDdECE634EA6D036a42e757aE. Smart-contract compiler v0.8.26 file_path src/RWAERC20LaunchpadFactory.sol is_fully_verified true verified_at 2026-07-24T21:56:18Z." }
  - { id: R-4, publisher: Blockscout, title: "createLaunch tx 0xcc8e9ff5…02aa", url: "https://robinhoodchain.blockscout.com/tx/0xcc8e9ff57300a96a3a0711aaafded86865f30a5f3e9472f1e2cc774c4d2b02aa", published_at: 2026-09-01T21:49:27Z, accessed_at: 2026-09-03T05:22:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-2, CLM-3, CLM-6, CLM-14, EVT-2], excerpt: "timestamp 2026-09-01T21:49:27.000000Z status ok block_number 52052349 from 0x0000006b42C0E0aec91De37f89E8C54B9c767A16 (is_contract false) to RWAERC20LaunchpadFactory 0xe64A…F297 method createLaunch. decoded name Retardatide symbol RETARD quote 0x8005d266…00ea metadata ipfs://bafkreih7rkrrjr25itxf7lu6c3llmibjqdmhullwm3khe2acycuipvd6g4." }
  - { id: R-5, publisher: Robinhood Chain RPC, title: "eth_getCode, name, symbol, factory() on RETARD", url: "https://rpc.mainnet.chain.robinhood.com", published_at: null, accessed_at: 2026-09-03T05:26:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-2, CLM-3, CLM-4, CLM-5, CLM-6, CLM-13, CLM-16, CLM-17], excerpt: "Chrome UA. eth_chainId 0x1237 (4663). eth_blockNumber 0x32b4c40 (53169216). Token code 4657 B prefix 0x60806040 not EIP-1167. name Retardatide symbol RETARD decimals 18 totalSupply 1e27. factory() 0xe64AC4113848BBC1a6dDE1A6D1da96720A36F297. owner() reverts. EIP-1967 slots zero. Factory code 21680 B. Current factory 0xcE9C…5B0d code 24466 B. LLY code 283 B." }
  - { id: R-6, publisher: Robinhood Chain RPC, title: "factory owner(), hook(), launchCreationEnabled(), Launched logs", url: "https://rpc.mainnet.chain.robinhood.com", published_at: null, accessed_at: 2026-09-03T05:26:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-5, CLM-9, CLM-13, CLM-14, CLM-15, CLM-21, CLM-22], excerpt: "block 53169988. factory owner() 0x5519a8cc7211f483e19ff8d50a3b0c892701044d code 0x. hook() 0x778b0c4EeA7D35D66513B587bA87FC9084b0EaCC. tokenDeployer() 0x6544af3524a8d9135eb5765cece6e514d85d615b. launchCreationEnabled() false. quotes(LLY) registered. eth_getLogs Launched topic1=0xEF455BEE…4501 on 0xe64A…F297 tx 0xcc8e9ff5…02aa; on 0xcE9C…5B0d 0 logs. Creator 0x0000006b…7A16 code 0x. LLY name Eli Lilly • Robinhood Token." }
  - { id: R-7, publisher: DexScreener, title: "latest/dex/tokens RETARD", url: "https://api.dexscreener.com/latest/dex/tokens/0xEF455BEE1E4Fa2974A7111d0DC9a1E53660A4501", published_at: null, accessed_at: 2026-09-03T05:22:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-7, CLM-8, CLM-9, CLM-11, CLM-15, CLM-17, CLM-19, CLM-20, CLM-23, CLM-24, CLM-25, EVT-1], excerpt: "8 robinhood uniswap pairs. Top pairAddress 0xffb47e8699525abe568b81a5b151d368a3c2f58656b31d3f9b49bc864b3e219f labels v4 base Retardatide / RETARD quote Eli Lilly • Robinhood Token / LLY 0x8005d266…00ea liquidity.usd 26045.01 volume.h24 332037.96 fdv 57783 marketCap 57783 pairCreatedAt 2026-09-01T21:49:27Z. info.websites [] info.socials x.com/buyretardatide." }
  - { id: R-8, publisher: GeckoTerminal, title: "RETARD/LLY Uniswap v4 pool", url: "https://api.geckoterminal.com/api/v2/networks/robinhood/pools/0xffb47e8699525abe568b81a5b151d368a3c2f58656b31d3f9b49bc864b3e219f", published_at: null, accessed_at: 2026-09-03T05:23:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-6, CLM-7, CLM-10, CLM-15, CLM-20, EVT-1], excerpt: "GET 200. name LLY / RETARD pool_created_at 2026-09-01T21:49:27Z fdv_usd 1206569.37 market_cap_usd 1206569.38 volume_usd.h24 324451.63 reserve_in_usd 28871.55 base_token_price_usd 1169.70 quote_token_price_usd 0.00006227. dex uniswap-v4-robinhood quote robinhood_0xef455bee…4501 base robinhood_0x8005d266…00ea." }
  - { id: R-9, publisher: GeckoTerminal, title: "Retardatide token", url: "https://api.geckoterminal.com/api/v2/networks/robinhood/tokens/0xEF455BEE1E4Fa2974A7111d0DC9a1E53660A4501", published_at: null, accessed_at: 2026-09-03T05:23:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-10, CLM-20, CLM-23, CLM-26], excerpt: "GET 200. name Retardatide symbol RETARD decimals 18 total_supply 1e27 price_usd 0.00006226998227 fdv_usd 62269.982 market_cap_usd null volume_usd.h24 342750.84 total_reserve_in_usd 14951.67. coingecko_coin_id null. No website field." }
  - { id: R-10, publisher: "@BuyRetardatide", title: "Retardatide/LLY CA post", url: "https://x.com/BuyRetardatide/status/2094920550279696867", published_at: 2026-09-01T22:49:15Z, accessed_at: 2026-09-03T05:28:00Z, kind: social, authority: social, authenticity: unconfirmed, supports: [CLM-8, CLM-19, EVT-3], excerpt: "We have entered the memefi meta by pairing Retardatide/LLY on RH. Just because we are retarded does not mean we don’t deserve a seat at the table. 0xef455bee1e4fa2974a7111d0dc9a1e53660a4501" }
  - { id: R-11, publisher: "@BuyRetardatide", title: "Retardatide token notes 07-02", url: "https://x.com/BuyRetardatide/status/2095356499556278644", published_at: 2026-09-03T03:41:33Z, accessed_at: 2026-09-03T05:21:00Z, kind: social, authority: social, authenticity: unconfirmed, supports: [EVT-4], excerpt: "Retardatide token notes: 07-02. 5.40 $LLY (~$6.3k) claimed + unclaimed still in FeeEscrow. Pool: 12.1 $LLY (~$14.1k). Pool+vault: 17.5 $LLY (~$20.3k). $RETARD 24h vol: $909k. Now: $0.000085 · FDV $85k." }
  - { id: R-12, publisher: Robinhood, title: "GET /rhj/assets Stock Token registry", url: "https://api.robinhood.com/rhj/assets", published_at: null, accessed_at: 2026-09-03T05:23:00Z, kind: docs, authority: primary, authenticity: confirmed, supports: [CLM-9, CLM-21], excerpt: "HTTP 200. assets length 194. tokenSymbol LLY hits 1. tokenName Eli Lilly • Robinhood Token deployments contractAddress 0x8005d266423c7ea827372c9c864491e5786600ea chainId 4663 networkName Robinhood Chain status ASSET_STATUS_ACTIVE." }
  - { id: R-13, publisher: Blockscout, title: "Token 0x8005d266…00ea Eli Lilly Robinhood Token", url: "https://robinhoodchain.blockscout.com/address/0x8005d266423c7ea827372c9c864491e5786600ea", published_at: null, accessed_at: 2026-09-03T05:22:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-9, CLM-21], excerpt: "hash 0x8005d266423c7ea827372c9c864491e5786600ea name BeaconProxy is_contract true is_verified true proxy_type eip1967_beacon. token name Eli Lilly • Robinhood Token symbol LLY decimals 18 total_supply 1031517000000000000000 holders_count 2214 type ERC-20." }
  - { id: R-14, publisher: "@BuyRetardatide", title: "Retardatide profile", url: "https://x.com/BuyRetardatide", published_at: null, accessed_at: 2026-09-03T05:28:00Z, kind: social, authority: social, authenticity: unconfirmed, supports: [CLM-8, CLM-19, CLM-23, EVT-3], excerpt: "HTTP 200. og:title Retardatide (@BuyRetardatide) on X. og:description Lose weight x Gain chromosomes. Paired to LLY stock. No 0xEF455BEE…4501 string in og:description this pass. A timeline post embeds the CA." }
  - { id: R-15, publisher: DexScreener, title: "latest/dex/search RETARD LLY", url: "https://api.dexscreener.com/latest/dex/search?q=RETARD%20LLY", published_at: null, accessed_at: 2026-09-03T05:21:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-9], excerpt: "RETARD/LLY 0xEF455BEE…4501 liq 26045.01 vol 332246.47. PEPTIDES/LLY 0x52F380A5…1e18 liq 727049.37 vol 5374422.55. FATCOIN/LLY 0x12D5ee79…8a01 liq 80209.63 vol 1674798.24. Distinct CAs on the same LLY rail." }
  - { id: R-16, publisher: Blockscout, title: "Address 0x778b…EaCC LaunchHook", url: "https://robinhoodchain.blockscout.com/address/0x778b0c4EeA7D35D66513B587bA87FC9084b0EaCC", published_at: null, accessed_at: 2026-09-03T05:22:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-22], excerpt: "hash 0x778b0c4EeA7D35D66513B587bA87FC9084b0EaCC name LaunchHook is_contract true is_verified true. createLaunch minted 1e27 RETARD to this hook then Seeded the pool. RPC hook() on 0xe64A…F297 returns this address. Code 10342 B." }
  - { id: R-17, publisher: "@meliboi_sama", title: "$RETARD mcap post with CA", url: "https://x.com/meliboi_sama/status/2094995880554430511", published_at: 2026-09-02T03:48:35Z, accessed_at: 2026-09-03T05:21:00Z, kind: social, authority: social, authenticity: unconfirmed, supports: [EVT-5], excerpt: "$RETARD mcap: $826K. 0xef455bee1e4fa2974a7111d0dc9a1e53660a4501. Third-party-link; not the DexScreener socials handle." }
  - { id: R-18, publisher: Blockscout, title: "Launched log for RETARD", url: "https://robinhoodchain.blockscout.com/tx/0xcc8e9ff57300a96a3a0711aaafded86865f30a5f3e9472f1e2cc774c4d2b02aa", published_at: 2026-09-01T21:49:27Z, accessed_at: 2026-09-03T05:22:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-4, CLM-15, EVT-2], excerpt: "Launched token 0xEF455BEE1E4Fa2974A7111d0DC9a1E53660A4501 poolId 0xffb47e8699525abe568b81a5b151d368a3c2f58656b31d3f9b49bc864b3e219f creator 0x0000006b42C0E0aec91De37f89E8C54B9c767A16 quote 0x8005d266423c7ea827372c9c864491e5786600ea supply 1e27 tickSpacing 200. PoolManager Initialize currency0 LLY currency1 RETARD hooks 0x778b…EaCC fee 0. Block 52052349." }
  - { id: R-19, publisher: GeckoTerminal, title: "RETARD token pools", url: "https://api.geckoterminal.com/api/v2/networks/robinhood/tokens/0xEF455BEE1E4Fa2974A7111d0DC9a1E53660A4501/pools", published_at: null, accessed_at: 2026-09-03T05:23:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-10, CLM-26], excerpt: "Row 1 LLY / RETARD 0xffb47e86…219f reserve_in_usd 28871.55 volume_usd.h24 324451.63 fdv_usd 62269.98. Secondary RETARD/WETH and RETARD/USDG rows have far less reserve than the LLY book. Assignment hint ~$27909 / ~$681214 was not reproduced; live DexScreener LLY book is $26045 / $332038." }
  - { id: R-20, publisher: Blockscout, title: "RWAERC20LaunchpadFactory verified source names", url: "https://robinhoodchain.blockscout.com/address/0xe64AC4113848BBC1a6dDE1A6D1da96720A36F297?tab=contract", published_at: null, accessed_at: 2026-09-03T05:24:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-7], excerpt: "ContractName RWAERC20LaunchpadFactory. Comment: ERC20 launch factory for RWA quotes with a restricted tick updater and native launch fee. ABI includes createLaunch and Launched(token, poolId, creator, quote, supply, tickSpacing). is_fully_verified true file_path src/RWAERC20LaunchpadFactory.sol." }
  - { id: R-21, publisher: Blockscout, title: "Doppler RETARDATIDE 0x04bDFE41…1E18", url: "https://robinhoodchain.blockscout.com/address/0x04bDFE415339182871eF7Fd83B91823C51191E18", published_at: null, accessed_at: 2026-09-03T05:22:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-25], excerpt: "hash 0x04bDFE415339182871eF7Fd83B91823C51191E18 name RETARDATIDE is_verified true proxy_type eip1167 implementation DopplerERC20V1 0x3Be8B97F…C599. token symbol RETARD holders_count 6 total_supply 1e27. DexScreener RETARD/LLY pair 0x1ce63c89…40dc liq 20810.60 volume.h24 11604.18. Distinct CA from 0xEF455BEE…4501." }

gaps:
  - { priority: P0, question: "Is there an official X handle or site that bidirectionally embeds token 0xEF455BEE…4501 in the bio or a homepage?", checked: "DexScreener info.socials x.com/buyretardatide; X bio has LLY and no CA; one timeline post embeds the CA; user search returned unrelated handles, 2026-09-03", next: "re-read the X profile website field and any pinned post that embeds the CA" }
  - { priority: P0, question: "Which aggregator is right for RETARD FDV on the LLY book, Gecko token 62270 or Gecko pool GET 1.21M?", checked: "DexScreener fdv 57783; Gecko token fdv_usd 62269.98; Gecko pool GET fdv_usd 1206569.37 with name LLY / RETARD and base_token_price_usd 1169.70, 2026-09-03", next: "treat pool GET fdv as LLY-as-base until Gecko names RETARD as base; re-fetch both endpoints in the same minute" }
  - { priority: P1, question: "Does createLaunch metadata ipfs://bafkreih7rkrrjr25itxf7lu6c3llmibjqdmhullwm3khe2acycuipvd6g4 name a domain or handle?", checked: "ipfs.io GET returned Cloudflare 403 this pass", next: "resolve the CID on another gateway and parse JSON for website/twitter" }
  - { priority: P1, question: "Is RETARD bytecode verified anywhere, and does it match o1 launch-token bytecode at tokenDeployer 0x6544af35…615b?", checked: "is_verified false; 4657 bytes prefix 0x60806040; not EIP-1167, 2026-09-03", next: "compare bytecode hash to launchTokenBytecodeHash() on 0xe64A…F297" }
  - { priority: P2, question: "Does the Doppler RETARDATIDE 0x04bDFE41…1E18 share a team with this o1 launch?", checked: "DopplerERC20V1 clone holders_count 6, different factory, 2026-09-03", next: "read that create tx and any comms that cite 0x04bD…" }
  - { priority: P2, question: "Is there an audit whose scope includes historical factory 0xe64A…F297 / LaunchHook 0x778b…EaCC as used on this clone?", checked: "X profile, DexScreener, Blockscout token page this pass", next: "match XORS reports named in the o1-exchange packet to 0xe64A…F297" }
---

# RETARD — research packet

## What it is

A one-billion-supply ERC-20 created into a Uniswap v4 pool quoted against LLY. Historical RWAERC20LaunchpadFactory deploys Retardatide (RETARD) in one createLaunch call and seeds the RETARD/LLY book. Traders buy and sell RETARD on Uniswap v4. LLY is the Robinhood stock-token rail, not the project. No official domain was located this pass; DexScreener lists x.com/buyretardatide without a CA in that profile bio.

Themes: memecoin, stock-paired:LLY, rwa, graduation:o1-exchange

## Why it matters

The RETARD/LLY Uniswap v4 book printed about $332k of 24h volume on DexScreener at collection (Gecko printed $324k on the same pool id). The quote token is the Eli Lilly Robinhood Token in GET /rhj/assets. PEPTIDES and FATCOIN quote the same LLY rail through different factories or a different createLaunch and are not this token.

## What could go wrong

USD liquidity figures on the RETARD/LLY book count both sides, and Gecko's pool GET reports an LLY-as-base FDV about 20 times the RETARD fdv on DexScreener and the Gecko token endpoint. A later Doppler RETARDATIDE or WETH RETARD book is a different address. Token source is unverified. The X handle is unconfirmed-official.

## Product and mechanics

RETARD is an ERC-20 at `0xEF455BEE1E4Fa2974A7111d0DC9a1E53660A4501`. The launch book is Uniswap v4 RETARD/LLY (`0xffb47e86…219f`) with quote `0x8005d266423c7ea827372c9c864491e5786600ea`. [verified R-1 R-4 R-7]

The token was created on 2026-09-01T21:49:27Z by `createLaunch` on historical `RWAERC20LaunchpadFactory` `0xe64A…F297`. The call named Retardatide / RETARD and quoted LLY. `Launched` records pool id `0xffb47e86…219f`. Almost the full 1e27 supply moved to LaunchHook `0x778b…EaCC` then into PoolManager `0x8366…0951`. Current factory `0xcE9C…5B0d` had no `Launched` log for this token; `launchCreationEnabled()` on the historical factory is false. [verified R-4 R-5 R-6 R-18]

DexScreener also lists RETARD/USDG Uniswap v4 books and RETARD/ETH books. LLY remains the launch quote. [verified R-7 R-19]

PEPTIDES `0x52F380A5…1e18` is a LongLauncher Doppler clone against the same LLY rail. FATCOIN `0x12D5ee79…8a01` is a different createLaunch on the same historical factory. A Doppler RETARDATIDE ticker at `0x04bDFE41…1E18` has holders_count 6 and a much smaller LLY book. They are not this CA. [verified R-7 R-15 R-21]

## Control and security

`owner()` on the token reverts. The contract is not a proxy (EIP-1967 slots zero; 4657 bytes of runtime code). Token source is_verified false. LaunchHook and the historical factory are verified as `LaunchHook` / `RWAERC20LaunchpadFactory`. Factory `owner()` is EOA `0x5519a8…044D` with no code. [verified R-1 R-3 R-5 R-6 R-16]

The createLaunch sender is EOA `0x0000006b…7A16` with no code. CreatorRegistered points at that address. [verified R-4 R-6]

No audit report URL was located this pass. [unknown]

## Team and provenance

No official domain was located. DexScreener info.websites is empty. DexScreener info.socials lists `x.com/buyretardatide`. That profile titles Retardatide (@BuyRetardatide), bios LLY with no contract, and posted the CA at 2026-09-01T22:49:15Z. Flag unconfirmed-official. [claim R-7 R-10 R-14]

## Economics and activity

RETARD/LLY Uniswap v4 24h volume is 324451.63 USD and reserve_in_usd is 28871.55 at 2026-09-03T05:23:00Z from the Gecko pool endpoint. Gecko token fdv_usd is 62269.98. Gecko token volume_usd.h24 is 342750.84 across listed pools, not the LLY book. [claim R-8 R-9]

DexScreener same pair: liquidity.usd 26045.01, volume.h24 332037.96, fdv/marketCap 57783. Blockscout holders_count 517. Pair created 2026-09-01T21:49:27Z. Assignment hint ~$27,909 / ~$681,214 was not reproduced exactly; live DexScreener is the LLY book at lower 24h volume. [claim R-1 R-7]

Gecko pool GET names the book LLY / RETARD and prints fdv_usd 1206569.37 with base_token_price_usd 1169.70 (LLY). Gecko token/pools row 1 on the same pool id prints fdv_usd 62269.98. [claim R-8 R-19]

## Material risks

- Gecko pool GET FDV treats LLY as base and disagrees with DexScreener and the Gecko token endpoint by about 20x. [verified R-7 R-8 R-9]
- Pool USD reserve is RETARD plus LLY, not a USDG or WETH backstop. [claim R-7 R-8]
- No official handle or domain this pass; X is unconfirmed-official. [claim R-7 R-14]
- Token source is_verified false. [verified R-1]
- A second RETARD ticker exists at 0x04bDFE41…1E18 against LLY via Doppler. [verified R-21]
- No audit report URL this pass. [unknown]

## Verification passes

- Receipts: Blockscout token/deployer/factory/LaunchHook/LLY and the createLaunch tx plus logs, RPC name/symbol/factory/owner/hook/tokenDeployer/quotes, DexScreener tokens and search, Gecko pool/token/pools, /rhj/assets, and @BuyRetardatide were opened on 2026-09-03 and excerpts copied from the responses. [verified R-1 R-5 R-8 R-12]
- Numbers: 324451.63 is the Gecko RETARD/LLY pool 24h volume, not the 342750.84 token all-pools figure. Reserve 28871.55 is that pool. DexScreener 332037.96 / 26045.01 is the same pair, different aggregator. Gecko pool GET fdv 1206569.37 is LLY-as-base, not RETARD fdv. [claim R-7 R-8 R-9]
- Adversarial: the strongest contrary reading is that this is PEPTIDES or FATCOIN, or the Doppler RETARDATIDE 0x04bD…, or that current o1 factory 0xcE9C…5B0d launched it. Different CAs, factories, and holder counts argue against the first; Launched is on 0xe64A…F297 and current-factory topic1 search returned 0 logs. [verified R-4 R-6 R-15 R-21]

## Operations log

- Base: `git -C /Users/harsharnsingh/proofline-pr59 rev-parse origin/main` → 334ca0619aa62e922da83f46de021f06d12348cf. Census 49 slugs have no retard / RETARD / Retardatide / 0xEF455BEE…4501. content/dependencies/stock-tokens.yaml LLY address 0x8005d266…00ea matches the pair quote.
- Explorer: Blockscout api/v2 token, LaunchTokenDeployer, factory, LaunchHook, LLY, createLaunch 0xcc8e9ff5…02aa, internals, logs, token-transfers, Doppler RETARDATIDE 0x04bD…1E18, WETH RETARD 0xd104… and 0xDEdD…. RPC eth_getCode/eth_call with Chrome UA at blocks 53169216–53169988.
- Aggregators: DexScreener latest/dex/tokens and search RETARD LLY; Gecko token GET 200 so pool and token/pools were used.
- Registry: GET api.robinhood.com/rhj/assets 194 assets, 1 LLY.
- Social: X keyword $RETARD LLY; from:BuyRetardatide Latest; user search BuyRetardatide / RETARD LLY; profile og tags.
- Failed: ipfs.io CID Cloudflare 403; Gecko pool GET fdv inverted to LLY-as-base; assignment hint volume ~$681k not live this pass (DexScreener $332k).
- Time: collection 2026-09-03T05:21Z–2026-09-03T05:30Z.
