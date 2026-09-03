---
# Packet v2 (docs/research-system.md §5). Seed with Icarus What-it-is + events.
contract_version: proofline-research-v2
work_id: WORK-20260903-grok-heavy-icarus-research
producer: grok-heavy
role: collector
base_sha: 334ca0619aa62e922da83f46de021f06d12348cf
slug: tendies
name: TENDIES
packet_tier: seed
as_of: 2026-09-03T04:26:00Z
prior_packet: null
supersedes: null
owned_slugs: [tendies]
allowed_paths:
  - research/inbox/packets/tendies/WORK-20260903-grok-heavy-icarus-research.md

identity:
  canonical_name: TENDIES
  aliases: []
  symbols: [TENDIES]
  entity_kind: token
  chain_scope: robinhood-native
  official_domain: "NULL — DexScreener info.websites is https://memedepot.com/d/showmetendies; GET of that URL is a Meme Depot gallery titled showmetendies with no contract in the HTML; Gecko token attributes have no website; launch socials().website is empty this pass"
  official_handle: "NULL — DexScreener info.socials lists https://x.com/TendiesRH; @TendiesRH bio is Doing it for the love of the game with no CA; from:TendiesRH posts this pass do not embed 0x4524…FCF9; launch socials() telegram/twitter/discord/website/farcaster are empty; flag unconfirmed-official"
  repository: "NULL — no GitHub org or repository URL on DexScreener, Gecko, Blockscout, memedepot, or X search this pass"
  possible_matches:
    - slug: noxa
      signals: [shared-deployer]
      contrary_signals:
        - "Census NOXA Fun is the launchpad at fun.noxa.eth.limo / @Noxa_Fi with factory 0xD9eC2db5f3D1b236843925949fe5bd8a3836FCcB"
        - "TENDIES is the ERC-20 at 0x45242320DBB855EeA8Fd36804C6487E10E97FCF9 created through that factory; entity_kind token, not protocol"
        - "No shared domain or handle; DexScreener socials is @TendiesRH, not @Noxa_Fi"
    - slug: artificial-inu
      signals: [other]
      contrary_signals:
        - "Census Artificial Inu is $AI at 0x2E8c…1e18 paired to NVDA via LongLauncher, site artificialinu.com / @ArtificiallyInu"
        - "TENDIES is 0x4524…FCF9 paired to WETH 0x0Bd7…AD73 via NOXA factory 0xD9eC…FccB"
        - "No shared domain, handle, or reproduced address"
    - slug: pons
      signals: [other]
      contrary_signals:
        - "Census Pons is the bonding-curve pad at ponsfamily.com / @ponsdotfamily"
        - "DexScreener lists a Uniswap v4 PONS/TENDIES book 0xc4db…5a7f where TENDIES is the quote, not a Pons launch"
        - "TENDIES creator_address_hash is NOXA factory 0xD9eC…FccB, not PonsV2LaunchFactory"
    - slug: long
      signals: [other]
      contrary_signals:
        - "Census LONG is a stock-paired factory at app.long.xyz / @longdotxyz with LongLauncher 0x22e9…eeED"
        - "TENDIES pairToken() is WETH 0x0Bd7…AD73; DexScreener lead books are WETH/ETH/USDG, not a stock ticker"
        - "No shared domain, handle, or reproduced address"
    - slug: hoodfun
      signals: [other]
      contrary_signals:
        - "Census hood.fun is a bonding-curve pad at @hoodfunfamily; Bitquery current factory 0x5fcc1df0…452c"
        - "TENDIES is a NOXA LaunchToken from factory 0xD9eC…FccB minted straight into Uniswap v3, not 0x5fcc…452c"
        - "No shared domain, handle, or reproduced address"

classification:
  primary_leaf: launch/graduation-token
  secondary_leaves: []
  mechanism_tags: [amm, launchpad]
  ecosystem_role: graduation
  lifecycle: mainnet
  coverage_recommendation: seed
  evidence_state: partly-verified
  rationale: "Not in the 49-row census. Token 0x4524…FCF9 is a verified LaunchToken with 4830 bytes of code on 4663; creator_address_hash and launchFactory() are NOXA factory 0xD9eC…FccB; create tx 2026-06-18T23:32:08Z minted TENDIES into Uniswap v3 TENDIES/WETH 1% pool 0x2376…C4C5. DexScreener lead book is that WETH pair (liq 1086177.41 volume.h24 2527033); ETH and USDG books exist and no stock quote was in the top books. No bidirectional official site or handle this pass. [R-1] [R-4] [R-5] [R-7] [R-8]"

qualifying:
  deployed_on_chain: { status: pass, claim_ids: [CLM-4, CLM-5, CLM-6], note: "" }
  native_play:       { status: pass, claim_ids: [CLM-1, CLM-15], note: "" }
  citable:           { status: pass, claim_ids: [CLM-2, CLM-3, CLM-4], note: "" }
  research_story:    { status: pass, claim_ids: [CLM-1, CLM-9, CLM-10], note: "" }

links:
  - { kind: x, url: "https://x.com/TendiesRH", authenticity: unconfirmed }
  - { kind: other, url: "https://memedepot.com/d/showmetendies", authenticity: unconfirmed }

deployments:
  - label: TENDIES token (LaunchToken)
    role: token
    address:
      value: "0x45242320DBB855EeA8Fd36804C6487E10E97FCF9"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T04:18:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-1, R-2, R-5]
  - label: NOXA Fun launch factory (token creator / launchFactory)
    role: factory
    address:
      value: "0xD9eC2db5f3D1b236843925949fe5bd8a3836FCcB"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T04:20:00Z
      exists_on_4663: true
      explorer_source_verified: false
    receipt_ids: [R-1, R-3, R-4, R-5]
  - label: Uniswap v3 TENDIES/WETH 1% pool (liquidityPool)
    role: other
    address:
      value: "0x237609918F330ADD285b8bC5f8f2922283D1C4C5"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T04:20:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-4, R-5, R-7, R-11]
  - label: WETH (pairToken)
    role: token
    address:
      value: "0x0Bd7D308f8E1639FAb988df18A8011f41EAcAD73"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T04:20:00Z
      exists_on_4663: true
      explorer_source_verified: null
    receipt_ids: [R-5, R-7, R-10]
  - label: LaunchLocker (PositionLocked NFT recipient)
    role: other
    address:
      value: "0x7F03effbd7ceB22A3f80Dd468f67eF27826acD85"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T04:20:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-4, R-5, R-18]

metrics:
  - { kind: volume_24h, value: 2527033, currency: USD, as_of: 2026-09-03T04:21:00Z, window: 24h, method: "api.dexscreener.com/latest/dex/tokens/0x4524…FCF9 pair 0x2376…C4C5 TENDIES/WETH Uniswap v3 volume.h24", class: claim, receipt_ids: [R-7] }
  - { kind: volume_24h, value: 1436438.41, currency: USD, as_of: 2026-09-03T04:21:00Z, window: 24h, method: "api.dexscreener.com/latest/dex/tokens/0x4524…FCF9 pair 0x9ce4…827e TENDIES/ETH Uniswap v4 volume.h24", class: claim, receipt_ids: [R-7] }
  - { kind: tvl, value: 1086177.41, currency: USD, as_of: 2026-09-03T04:21:00Z, window: point, method: "api.dexscreener.com/latest/dex/tokens/0x4524…FCF9 pair 0x2376…C4C5 liquidity.usd (TENDIES/WETH pool, not an all-pools figure)", class: claim, receipt_ids: [R-7] }
  - { kind: tvl, value: 424752.97, currency: USD, as_of: 2026-09-03T04:21:00Z, window: point, method: "api.dexscreener.com/latest/dex/tokens/0x4524…FCF9 pair 0x9ce4…827e liquidity.usd", class: claim, receipt_ids: [R-7] }
  - { kind: market_cap, value: 31058448, currency: USD, as_of: 2026-09-03T04:21:00Z, window: point, method: "api.dexscreener.com/latest/dex/tokens/0x4524…FCF9 pair 0x2376…C4C5 marketCap", class: claim, receipt_ids: [R-7] }
  - { kind: holders, value: 18177, currency: null, as_of: 2026-09-03T04:18:00Z, window: point, method: "robinhoodchain.blockscout.com/api/v2/tokens/0x4524…FCF9 holders_count", class: claim, receipt_ids: [R-1] }

reproductions:
  - { id: REP-1, method: explorer-rpc, chain_id: 4663, checked_at: 2026-09-03T04:24:00Z, receipt_ids: [R-5], result: "rpc.mainnet.chain.robinhood.com eth_blockNumber 0x32ac3f9 (53134329). Token 0x4524…FCF9 eth_getCode 4830 bytes prefix 60806040. name TENDIES, symbol TENDIES, decimals 18, totalSupply 1e27. owner() reverts. launchFactory() 0xD9eC2db5f3D1b236843925949fe5bd8a3836FCcB. pairToken() 0x0Bd7D308f8E1639FAb988df18A8011f41EAcAD73. poolFee 10000. liquidityPool() 0x237609918F330ADD285b8bC5f8f2922283D1C4C5. deployer() 0xE71e7b821aAE61b41d2945ac5711E0C74d8104F0. socials() five empty strings. WETH symbol() WETH." }
  - { id: REP-2, method: explorer-ui, chain_id: 4663, checked_at: 2026-09-03T04:20:00Z, receipt_ids: [R-1, R-2, R-3, R-4, R-9, R-10, R-11, R-18], result: "Blockscout api/v2 token 0x4524…FCF9 name TENDIES symbol TENDIES holders_count 18177 total_supply 1e27 is_verified true is_partially_verified true file_path contracts/LaunchToken.sol compiler v0.8.30. creator_address_hash 0xD9eC…FccB is_verified false tagged Launch Factory. create tx 0xa101e16c…5bd6 2026-06-18T23:32:08Z block 95557 from 0xE71e…04F0 method 0x686399cb value 50500000000000000. TokenLaunched pairToken WETH pool 0x2376…C4C5. PositionLocked positionId 143 locker 0x7F03…Cd85 is_verified true name LaunchLocker. Pool UniswapV3Pool is_verified true created in the same tx." }
  - { id: REP-3, method: api, checked_at: 2026-09-03T04:21:00Z, receipt_ids: [R-7, R-8], result: "DexScreener latest/dex/tokens/0x4524…FCF9: 30 robinhood pairs; top Uniswap v3 TENDIES/WETH 0x2376…C4C5 quote WETH 0x0Bd7…AD73 liquidity.usd 1086177.41 volume.h24 2527033 fdv/marketCap 31058448 pairCreatedAt 2026-06-18T23:32:08Z; second Uniswap v4 TENDIES/ETH 0x9ce4…827e liquidity.usd 424752.97 volume.h24 1436438.41; USDG v4 0xfee9…a6ab liquidity.usd 41486.44. info.websites memedepot.com/d/showmetendies info.socials x.com/TendiesRH. No stock-ticker quote in the top books. Gecko token GET 200 volume_usd.h24 5619716.26 fdv_usd 31359012.15 market_cap_usd 32556304.97 top_pools 0x2376…C4C5 then 0x9ce4…827e. Gecko pool GET 429; not retried." }
  - { id: REP-4, method: official-crosslink, checked_at: 2026-09-03T04:24:00Z, receipt_ids: [R-12, R-13, R-19], result: "GET https://memedepot.com/d/showmetendies HTTP 200 title Meme Depot - showmetendies; og:description Browse the best memes from showmetendies depot; twitter:creator @memedepot; no 0x4524 in HTML. @TendiesRH display name Tendies, bio Doing it for the love of the game, 2940 followers; og:description same bio; no CA or memedepot in the profile HTML this pass. X user search TENDIES returned @tendies / @TendiesKing / @tradefortendies, none embedding this CA." }

claims:
  - { id: CLM-1, field: product.mechanism, value: "NOXA LaunchToken ERC-20; constructor mints 1e9*1e18 to launchFactory; pairToken WETH 0x0Bd7D308f8E1639FAb988df18A8011f41EAcAD73; poolFee 10000 (1%); liquidityPool Uniswap v3 0x237609918F330ADD285b8bC5f8f2922283D1C4C5. create tx 0xa101e16c…5bd6 from 0xE71e…04F0 called factory 0xD9eC…FccB method 0x686399cb at 2026-06-18T23:32:08Z. PositionLocked NFT 143 to LaunchLocker 0x7F03…Cd85. socials() empty.", class: verified, observed_at: 2026-09-03T04:24:00Z, receipt_ids: [R-2, R-4, R-5, R-9, R-18], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-2, field: identity.name, value: TENDIES, class: verified, observed_at: 2026-09-03T04:18:00Z, receipt_ids: [R-1, R-5], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-3, field: identity.symbol, value: TENDIES, class: verified, observed_at: 2026-09-03T04:18:00Z, receipt_ids: [R-1, R-5], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-4, field: deployment.address, value: "0x45242320DBB855EeA8Fd36804C6487E10E97FCF9", class: verified, observed_at: 2026-09-03T04:18:00Z, receipt_ids: [R-1, R-5, R-9], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-5, field: deployment.address, value: "0xD9eC2db5f3D1b236843925949fe5bd8a3836FCcB", class: verified, observed_at: 2026-09-03T04:20:00Z, receipt_ids: [R-1, R-3, R-5], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-6, field: lifecycle, value: mainnet, class: verified, observed_at: 2026-09-03T04:21:00Z, receipt_ids: [R-1, R-4, R-5, R-7], reproduction_ids: [REP-1, REP-2, REP-3], supersedes: null }
  - { id: CLM-7, field: taxonomy.primary-leaf, value: launch/graduation-token, class: claim, observed_at: 2026-09-03T04:26:00Z, receipt_ids: [R-3, R-4, R-7], reproduction_ids: [], supersedes: null }
  - { id: CLM-8, field: identity.handle, value: "NULL — no bidirectional official handle; DexScreener info.socials is https://x.com/TendiesRH; @TendiesRH bio has no CA; launch socials() empty; flag unconfirmed-official", class: claim, observed_at: 2026-09-03T04:24:00Z, receipt_ids: [R-7, R-13, R-19], reproduction_ids: [], supersedes: null }
  - { id: CLM-9, field: relationship, value: "Pair quote is WETH 0x0Bd7…AD73, not a Robinhood stock token. DexScreener 30 pairs: lead Uniswap v3 TENDIES/WETH then Uniswap v4 TENDIES/ETH and smaller USDG books. No stock-ticker quote in the top books. Distinct from census LONG / Artificial Inu / hood.fun.", class: verified, observed_at: 2026-09-03T04:21:00Z, receipt_ids: [R-5, R-7, R-10], reproduction_ids: [REP-1, REP-3], supersedes: null }
  - { id: CLM-10, field: economics.metric, value: "DexScreener TENDIES/WETH Uniswap v3 0x2376…C4C5 volume.h24 2527033 liquidity.usd 1086177.41 marketCap 31058448 at 2026-09-03T04:21:00Z", class: verified, observed_at: 2026-09-03T04:21:00Z, receipt_ids: [R-7], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-11, field: economics.metric, value: "DexScreener TENDIES/ETH Uniswap v4 0x9ce4…827e volume.h24 1436438.41 liquidity.usd 424752.97; TENDIES/USDG Uniswap v4 0xfee9…a6ab volume.h24 40935.36 liquidity.usd 41486.44", class: verified, observed_at: 2026-09-03T04:21:00Z, receipt_ids: [R-7], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-12, field: economics.metric, value: 18177, class: verified, observed_at: 2026-09-03T04:18:00Z, receipt_ids: [R-1], reproduction_ids: [REP-2], supersedes: null }
  - { id: CLM-13, field: control.owner, value: "owner() reverts; ABI has no owner; launchFactory immutable 0xD9eC…FccB. Deployer EOA 0xE71e…04F0 eth_getCode 0x.", class: verified, observed_at: 2026-09-03T04:24:00Z, receipt_ids: [R-2, R-5], reproduction_ids: [REP-1], supersedes: null }
  - { id: CLM-14, field: control.privileged-role, value: "deployer() 0xE71e7b821aAE61b41d2945ac5711E0C74d8104F0 equals the create tx from; maxWalletBps 200, maxTxBps 10000, restrictionBlocks 366 (launch-block buy block then window)", class: verified, observed_at: 2026-09-03T04:24:00Z, receipt_ids: [R-2, R-4, R-5], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-15, field: other, value: "Pair asset is WETH 0x0Bd7D308f8E1639FAb988df18A8011f41EAcAD73; venue is Uniswap v3 factory 0x1f7d7550B1b028f7571E69A784071F0205FD2EfA pool 0x2376…C4C5; secondary Uniswap v4 ETH and USDG books on DexScreener", class: verified, observed_at: 2026-09-03T04:21:00Z, receipt_ids: [R-5, R-7, R-9], reproduction_ids: [REP-1, REP-3], supersedes: null }
  - { id: CLM-16, field: deployment.role, value: "Token creator_address_hash and launchFactory() name NOXA factory 0xD9eC…FccB as the pad, not Pons, LONG, PAIR, or hood.fun 0x5fcc…452c", class: verified, observed_at: 2026-09-03T04:20:00Z, receipt_ids: [R-1, R-3, R-5], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-17, field: taxonomy.chain-scope, value: robinhood-native, class: verified, observed_at: 2026-09-03T04:18:00Z, receipt_ids: [R-5, R-7], reproduction_ids: [REP-1, REP-3], supersedes: null }
  - { id: CLM-18, field: security.audit, value: "No audit report URL was located on Blockscout, DexScreener, Gecko, memedepot, or X search this pass", class: unknown, observed_at: 2026-09-03T04:26:00Z, receipt_ids: [], reproduction_ids: [], supersedes: null }
  - { id: CLM-19, field: communications.status, value: "third-party-link: DexScreener website memedepot.com/d/showmetendies is a Meme Depot gallery with no CA; DexScreener twitter @TendiesRH is unconfirmed-official. Latest CA posts this pass are netlify claim portals (copypasta-pattern).", class: claim, observed_at: 2026-09-03T04:24:00Z, receipt_ids: [R-7, R-12, R-13, R-17], reproduction_ids: [], supersedes: null }
  - { id: CLM-20, field: economics.metric, value: "Gecko token volume_usd.h24 5619716.26 fdv_usd 31359012.15 market_cap_usd 32556304.97 total_reserve_in_usd 1178288.45 (all pools, not the WETH book). Gecko pool GET 429 this pass.", class: verified, observed_at: 2026-09-03T04:22:00Z, receipt_ids: [R-8], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-21, field: deployment.address, value: "0x0Bd7D308f8E1639FAb988df18A8011f41EAcAD73", class: verified, observed_at: 2026-09-03T04:20:00Z, receipt_ids: [R-5, R-7, R-10], reproduction_ids: [REP-1, REP-3], supersedes: null }
  - { id: CLM-22, field: identity.domain, value: "NULL — DexScreener info.websites memedepot.com/d/showmetendies; Gecko token has no website field; socials().website empty", class: claim, observed_at: 2026-09-03T04:24:00Z, receipt_ids: [R-5, R-7, R-8, R-12], reproduction_ids: [], supersedes: null }
  - { id: CLM-23, field: candidate, value: "tendies | TENDIES | NULL | NULL — discovery token not in census 49", class: claim, observed_at: 2026-09-03T04:26:00Z, receipt_ids: [R-1, R-7], reproduction_ids: [], supersedes: null }
  - { id: CLM-24, field: taxonomy.entity-kind, value: token, class: verified, observed_at: 2026-09-03T04:18:00Z, receipt_ids: [R-1, R-2], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-25, field: relationship, value: "Same NOXA factory as pending CASHCAT 0x020b…18b4; different CA, pool, and DexScreener socials. Keep both slugs.", class: verified, observed_at: 2026-09-03T04:21:00Z, receipt_ids: [R-1, R-3, R-7], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-26, field: economics.metric, value: "Blockscout token.volume_24h 9570671.75 circulating_market_cap 33353819.99 at 2026-09-03T04:18:00Z", class: verified, observed_at: 2026-09-03T04:18:00Z, receipt_ids: [R-1], reproduction_ids: [REP-2], supersedes: null }
  - { id: CLM-27, field: "account.@TendiesRH.flags", value: unconfirmed-official, class: claim, observed_at: 2026-09-03T04:24:00Z, receipt_ids: [R-7, R-13], reproduction_ids: [], supersedes: null }
  - { id: CLM-28, field: "account.@TendiesRH.note", value: "DexScreener info.socials lists this handle. Bio has no contract. from:TendiesRH this pass is meme images without the CA.", class: claim, observed_at: 2026-09-03T04:24:00Z, receipt_ids: [R-7, R-13, R-14], reproduction_ids: [], supersedes: null }

conflicts:
  - id: CON-1
    field: economics.metric
    claim_ids: [CLM-10, CLM-20, CLM-26]
    material_effect: "24h volume is 2527033 on the DexScreener TENDIES/WETH book, 5619716.26 on Gecko token volume_usd.h24 (all pools), and 9570671.75 on Blockscout token.volume_24h; a card that collapses them would misstate activity"
    status: open
    resolution: null

events:
  - id: EVT-1
    type: onchain
    title: "DexScreener TENDIES/WETH 24h volume $2.53M, liquidity $1.09M"
    summary: "Uniswap v3 TENDIES/WETH 0x2376…C4C5 volume.h24 2527033 liquidity.usd 1086177.41 fdv/marketCap 31058448. Secondary Uniswap v4 TENDIES/ETH volume.h24 1436438.41."
    occurred_at: 2026-09-03T04:21:00Z
    observed_at: 2026-09-03T04:21:00Z
    affected_fields: [economics.metric, activity.status]
    evidence_state: verified
    impact: material
    site_recommendation: both
    channel_recommendation: none
    receipt_ids: [R-7]
  - id: EVT-2
    type: ct
    title: "@HeyItsMeTheDev posted $TENDIES as a Robinhood meme that rotates to itself"
    summary: "@HeyItsMeTheDev posted that every new Robinhood narrative eventually benefits Tendies and that $6.99 is in play."
    occurred_at: 2026-09-03T04:04:18Z
    observed_at: 2026-09-03T04:16:00Z
    affected_fields: [activity.status, communications.status]
    evidence_state: claim
    impact: routine
    site_recommendation: feed
    channel_recommendation: none
    receipt_ids: [R-14]
  - id: EVT-3
    type: ct
    title: "@AbsorbA11 posted that a Robinhood app listing of tendies could go multi-billion"
    summary: "@AbsorbA11 called tendies a wallstreetbets + 4chan meme on the robinhood app and tagged @vladtenev."
    occurred_at: 2026-09-03T04:15:16Z
    observed_at: 2026-09-03T04:16:00Z
    affected_fields: [activity.status]
    evidence_state: claim
    impact: routine
    site_recommendation: feed
    channel_recommendation: none
    receipt_ids: [R-15]
  - id: EVT-4
    type: ct
    title: "@bullcryptobtc listed $TENDIES at $24.6M mid-cap on Robinhood Chain"
    summary: "Thread 2/4 mid-cap narratives: $TENDIES — $24.6M | 1B | Robinhood Chain | meme / finance."
    occurred_at: 2026-09-03T04:16:15Z
    observed_at: 2026-09-03T04:16:00Z
    affected_fields: [economics.metric, activity.status]
    evidence_state: claim
    impact: routine
    site_recommendation: feed
    channel_recommendation: none
    receipt_ids: [R-16]
  - id: EVT-5
    type: onchain
    title: "NOXA factory minted TENDIES into Uniswap v3 WETH"
    summary: "Tx 0xa101e16c…5bd6 from 0xE71e…04F0 at 2026-06-18T23:32:08Z; TokenLaunched pool 0x2376…C4C5 pairToken WETH; PositionLocked id 143."
    occurred_at: 2026-06-18T23:32:08Z
    observed_at: 2026-09-03T04:20:00Z
    affected_fields: [deployment.address, lifecycle, product.mechanism]
    evidence_state: verified
    impact: material
    site_recommendation: profile
    channel_recommendation: none
    receipt_ids: [R-4, R-9]
  - id: EVT-6
    type: ct
    title: "Latest CA posts were netlify claim-portal copypasta"
    summary: "Multiple accounts posted 0x4524…FCF9 with crypto-keo.netlify.app / crypto-ugd.netlify.app / robinhood-main-dex-rkx.netlify.app vote and claim URLs. Flag copypasta-pattern | third-party-link."
    occurred_at: 2026-09-03T03:03:33Z
    observed_at: 2026-09-03T04:24:00Z
    affected_fields: [communications.status]
    evidence_state: claim
    impact: routine
    site_recommendation: none
    channel_recommendation: none
    receipt_ids: [R-17, R-20]

receipts:
  - { id: R-1, publisher: Blockscout, title: "Token 0x4524…FCF9 TENDIES", url: "https://robinhoodchain.blockscout.com/address/0x45242320DBB855EeA8Fd36804C6487E10E97FCF9", published_at: null, accessed_at: 2026-09-03T04:18:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-2, CLM-3, CLM-4, CLM-5, CLM-6, CLM-12, CLM-16, CLM-23, CLM-24, CLM-25, CLM-26], excerpt: "hash 0x45242320DBB855EeA8Fd36804C6487E10E97FCF9 name LaunchToken is_contract true is_verified true proxy_type null. token name TENDIES symbol TENDIES decimals 18 total_supply 1000000000000000000000000000 holders_count 18177 type ERC-20 volume_24h 9570671.754162557 circulating_market_cap 33353819.987055533. creator_address_hash 0xD9eC2db5f3D1b236843925949fe5bd8a3836FCcB creation_transaction_hash 0xa101e16c0bfd8bf4d5d0c83d26fa2b3c80e643a4d4c67a9af96673e932875bd6." }
  - { id: R-2, publisher: Blockscout, title: "LaunchToken verified source", url: "https://robinhoodchain.blockscout.com/address/0x45242320DBB855EeA8Fd36804C6487E10E97FCF9?tab=contract", published_at: null, accessed_at: 2026-09-03T04:20:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-13, CLM-14, CLM-24], excerpt: "API v2 smart-contracts: name LaunchToken compiler v0.8.30+commit.73712a01 is_verified true is_partially_verified true is_fully_verified false file_path contracts/LaunchToken.sol verified_at 2026-07-14T20:32:24Z. Contract LaunchToken is ERC20; constructor mints config.supply to msg.sender; launchFactory/pairToken/poolFee/positionManager/dexFactory immutables; no owner(); socials struct telegram/twitter/discord/website/farcaster." }
  - { id: R-3, publisher: Blockscout, title: "Address 0xD9eC…FccB Launch Factory", url: "https://robinhoodchain.blockscout.com/address/0xD9eC2db5f3D1b236843925949fe5bd8a3836FCcB", published_at: null, accessed_at: 2026-09-03T04:20:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-5, CLM-7, CLM-16, CLM-25], excerpt: "hash 0xD9eC2db5f3D1b236843925949fe5bd8a3836FCcB name null is_contract true is_verified false creator_address_hash 0x7E035Fb048a31e0481b88074557415b1C187242B creation_transaction_hash 0x5e512a7f9a931c4dc9b5b09d8dd5c80b66968cf393474b21e5613769df656b37. RPC eth_getCode 22811 bytes." }
  - { id: R-4, publisher: Blockscout, title: "create tx 0xa101e16c…5bd6", url: "https://robinhoodchain.blockscout.com/tx/0xa101e16c0bfd8bf4d5d0c83d26fa2b3c80e643a4d4c67a9af96673e932875bd6", published_at: 2026-06-18T23:32:08Z, accessed_at: 2026-09-03T04:20:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-6, CLM-14, EVT-5], excerpt: "timestamp 2026-06-18T23:32:08.000000Z status ok result success block_number 95557 from 0xE71e7b821aAE61b41d2945ac5711E0C74d8104F0 (is_contract false) to 0xD9eC2db5f3D1b236843925949fe5bd8a3836FCcB method 0x686399cb value 50500000000000000. Input name/symbol TENDIES and ipfs://bafkreidkdym6lwl2gzfn3acnws4mgmassvsqmedldfq3zjgjkbgk6hl64e." }
  - { id: R-5, publisher: Robinhood Chain RPC, title: "eth_getCode, name, symbol, launchFactory(), pairToken()", url: "https://rpc.mainnet.chain.robinhood.com", published_at: null, accessed_at: 2026-09-03T04:24:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-2, CLM-3, CLM-4, CLM-5, CLM-6, CLM-9, CLM-13, CLM-14, CLM-15, CLM-16, CLM-17, CLM-21, CLM-22], excerpt: "eth_blockNumber 0x32ac3f9 (53134329). Token code 4830 B. name TENDIES symbol TENDIES decimals 18 totalSupply 1e27. owner() reverts. launchFactory() 0xD9eC2db5f3D1b236843925949fe5bd8a3836FCcB. pairToken() 0x0Bd7D308f8E1639FAb988df18A8011f41EAcAD73. poolFee 10000. liquidityPool() 0x237609918F330ADD285b8bC5f8f2922283D1C4C5. deployer() 0xE71e7b821aAE61b41d2945ac5711E0C74d8104F0. socials() empty. Factory code 22811 B. WETH symbol WETH. Deployer EOA code 0x." }
  - { id: R-7, publisher: DexScreener, title: "latest/dex/tokens TENDIES", url: "https://api.dexscreener.com/latest/dex/tokens/0x45242320DBB855EeA8Fd36804C6487E10E97FCF9", published_at: null, accessed_at: 2026-09-03T04:21:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-6, CLM-7, CLM-8, CLM-9, CLM-10, CLM-11, CLM-15, CLM-17, CLM-19, CLM-21, CLM-22, CLM-23, CLM-25, CLM-27, CLM-28, EVT-1], excerpt: "30 robinhood pairs. Top pairAddress 0x237609918F330ADD285b8bC5f8f2922283D1C4C5 labels v3 base TENDIES quote WETH 0x0Bd7D308f8E1639FAb988df18A8011f41EAcAD73 liquidity.usd 1086177.41 volume.h24 2527033 fdv 31058448 marketCap 31058448 pairCreatedAt 2026-06-18T23:32:08Z. Next v4 TENDIES/ETH liq 424752.97 vol 1436438.41; v4 TENDIES/USDG liq 41486.44. info.websites memedepot.com/d/showmetendies info.socials x.com/TendiesRH." }
  - { id: R-8, publisher: GeckoTerminal, title: "TENDIES token", url: "https://api.geckoterminal.com/api/v2/networks/robinhood/tokens/0x45242320DBB855EeA8Fd36804C6487E10E97FCF9", published_at: null, accessed_at: 2026-09-03T04:22:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-20, CLM-22], excerpt: "HTTP 200. name TENDIES symbol TENDIES decimals 18 total_supply 1e27 price_usd 0.03277047826 fdv_usd 31359012.1466571 market_cap_usd 32556304.97 volume_usd.h24 5619716.26483323 total_reserve_in_usd 1178288.45 coingecko_coin_id tendies-2. No website field. top_pools 0x237609918f330add285b8bc5f8f2922283d1c4c5 then 0x9ce47988…827e. Follow-up pool GET HTTP 429; not retried." }
  - { id: R-9, publisher: Blockscout, title: "TokenLaunched and PositionLocked logs", url: "https://robinhoodchain.blockscout.com/tx/0xa101e16c0bfd8bf4d5d0c83d26fa2b3c80e643a4d4c67a9af96673e932875bd6", published_at: 2026-06-18T23:32:08Z, accessed_at: 2026-09-03T04:20:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-4, CLM-15, EVT-5], excerpt: "TokenLaunched token 0x45242320DBB855EeA8Fd36804C6487E10E97FCF9 deployer 0xE71e7b821aAE61b41d2945ac5711E0C74d8104F0 dexFactory 0x1f7d7550B1b028f7571E69A784071F0205FD2EfA pairToken 0x0Bd7D308f8E1639FAb988df18A8011f41EAcAD73 pool 0x237609918F330ADD285b8bC5f8f2922283D1C4C5 positionId 143 initialBuyAmount 5e16. PositionLocked locker 0x7F03effbd7ceB22A3f80Dd468f67eF27826acD85." }
  - { id: R-10, publisher: Blockscout, title: "Token 0x0Bd7…AD73 WETH", url: "https://robinhoodchain.blockscout.com/tokens/0x0Bd7D308f8E1639FAb988df18A8011f41EAcAD73", published_at: null, accessed_at: 2026-09-03T04:20:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-9, CLM-21], excerpt: "address_hash 0x0Bd7D308f8E1639FAb988df18A8011f41EAcAD73 name WETH symbol WETH decimals 18 holders_count 526281 type ERC-20." }
  - { id: R-11, publisher: Blockscout, title: "Address 0x2376…C4C5 UniswapV3Pool", url: "https://robinhoodchain.blockscout.com/address/0x237609918F330ADD285b8bC5f8f2922283D1C4C5", published_at: null, accessed_at: 2026-09-03T04:20:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-6], excerpt: "hash 0x237609918F330ADD285b8bC5f8f2922283D1C4C5 name UniswapV3Pool is_contract true is_verified true creator_address_hash 0x1f7d7550B1b028f7571E69A784071F0205FD2EfA creation_transaction_hash 0xa101e16c0bfd8bf4d5d0c83d26fa2b3c80e643a4d4c67a9af96673e932875bd6." }
  - { id: R-12, publisher: Meme Depot, title: "showmetendies depot", url: "https://memedepot.com/d/showmetendies", published_at: null, accessed_at: 2026-09-03T04:24:00Z, kind: other, authority: unknown, authenticity: unconfirmed, supports: [CLM-19, CLM-22], excerpt: "HTTP 200. title Meme Depot - showmetendies. og:description Browse the best memes from showmetendies depot. twitter:creator @memedepot. No 0x45242320 string in the HTML this pass." }
  - { id: R-13, publisher: "@TendiesRH", title: "Tendies profile", url: "https://x.com/TendiesRH", published_at: null, accessed_at: 2026-09-03T04:24:00Z, kind: social, authority: social, authenticity: unconfirmed, supports: [CLM-8, CLM-19, CLM-27, CLM-28], excerpt: "Display name Tendies, handle @TendiesRH. Bio: Doing it for the love of the game. 2940 followers. og:title Tendies (@TendiesRH) on X. Profile HTML this pass has no 0x4524 and no memedepot string." }
  - { id: R-14, publisher: "@HeyItsMeTheDev", title: "The best part about $TENDIES", url: "https://x.com/HeyItsMeTheDev/status/2095362224667889851", published_at: 2026-09-03T04:04:18Z, accessed_at: 2026-09-03T04:16:00Z, kind: social, authority: social, authenticity: unconfirmed, supports: [CLM-28, EVT-2], excerpt: "The best part about $TENDIES is every new Robinhood narrative eventually benefits Tendies. Trends come. Coins pump. Narratives fade. Tendies rotate to Tendies. Real people. Real believers. Community constantly growing. $6.99 is in play" }
  - { id: R-15, publisher: "@AbsorbA11", title: "If tendies hits the robinhood app", url: "https://x.com/AbsorbA11/status/2095364980505772443", published_at: 2026-09-03T04:15:16Z, accessed_at: 2026-09-03T04:16:00Z, kind: social, authority: social, authenticity: unconfirmed, supports: [EVT-3], excerpt: "If tendies hits the robinhood app something really insane could happen man. Possible multi billions. A wallstreetbets + 4chan meme on the robinhood app. @vladtenev make it happen." }
  - { id: R-16, publisher: "@bullcryptobtc", title: "Mid-cap narratives $TENDIES", url: "https://x.com/bullcryptobtc/status/2095365230650146944", published_at: 2026-09-03T04:16:15Z, accessed_at: 2026-09-03T04:16:00Z, kind: social, authority: social, authenticity: unconfirmed, supports: [EVT-4], excerpt: "2/4 — Mid-cap narratives. $TENDIES — $24.6M | 1B | Robinhood Chain | meme / finance." }
  - { id: R-17, publisher: "@ITSYABOIRAZOR", title: "TENDIES netlify claim portal", url: "https://x.com/ITSYABOIRAZOR/status/2095346935615877498", published_at: 2026-09-03T03:03:33Z, accessed_at: 2026-09-03T04:24:00Z, kind: social, authority: social, authenticity: unconfirmed, supports: [CLM-19, EVT-6], excerpt: "CA: 0x45242320DBB855EeA8Fd36804C6487E10E97FCF9 https://crypto-keo.netlify.app/claim?contract=0x45242320DBB855EeA8Fd36804C6487E10E97FCF9&cfg=evmdrop&pid=MZDTr. Same CA and netlify claim pattern repeated by other handles this pass." }
  - { id: R-18, publisher: Blockscout, title: "Address 0x7F03…Cd85 LaunchLocker", url: "https://robinhoodchain.blockscout.com/address/0x7F03effbd7ceB22A3f80Dd468f67eF27826acD85", published_at: null, accessed_at: 2026-09-03T04:20:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1], excerpt: "hash 0x7F03effbd7ceB22A3f80Dd468f67eF27826acD85 name LaunchLocker is_contract true is_verified true creator_address_hash 0x7E035Fb048a31e0481b88074557415b1C187242B. RPC eth_getCode 4823 bytes. PositionLocked in the TENDIES create tx." }
  - { id: R-19, publisher: X, title: "User search TENDIES", url: "https://x.com/search?q=TENDIES", published_at: null, accessed_at: 2026-09-03T04:16:00Z, kind: social, authority: social, authenticity: unconfirmed, supports: [CLM-8], excerpt: "X user search TENDIES returned @tendies (unrelated bio), @TendiesKing, @tradefortendies (BONK Dev), @JoshuaEberly1, @tendies_bananas. None of those bios embed 0x4524…FCF9 this pass. @TendiesRH is the DexScreener socials handle." }
  - { id: R-20, publisher: "@veilcircuitNFT", title: "TENDIES vote listing ID 2394", url: "https://x.com/veilcircuitNFT/status/2095354814397837515", published_at: 2026-09-03T03:34:52Z, accessed_at: 2026-09-03T04:16:00Z, kind: social, authority: social, authenticity: unconfirmed, supports: [EVT-6], excerpt: "Attention $TENDIES Family! YOUR vote matters! Listing ID: 2394 https://robinhood-main-dex-rkx.netlify.app/vote/0x45242320DBB855EeA8Fd36804C6487E10E97FCF9. Flag third-party-link | copypasta-pattern." }

gaps:
  - { priority: P0, question: "Is there an official X handle or site that bidirectionally links to token 0x4524…FCF9?", checked: "DexScreener info.websites memedepot.com/d/showmetendies with no CA; info.socials x.com/TendiesRH bio has no CA; socials() empty; Gecko token has no website; X user search TENDIES returned unrelated handles, 2026-09-03", next: "re-read DexScreener token profile after a Claim Profile; search new posts from @TendiesRH that embed the CA" }
  - { priority: P1, question: "Why does launchBlock() return 25347753 while the creation tx is block 95557?", checked: "Source is_partially_verified; launchBlock() 25347753 restrictionEndBlock 25348119 (= +366); Blockscout tx block_number 95557, 2026-09-03", next: "compare deployed bytecode to LaunchToken.sol or decode constructor args from tx input" }
  - { priority: P1, question: "Who holds Uniswap v3 position NFT 143 on 0x7399…e0d3 after PositionLocked?", checked: "Create tx transferred tokenId 143 to LaunchLocker 0x7F03…Cd85; locker is_verified true this pass, 2026-09-03", next: "eth_call ownerOf(143) on the position manager and read LaunchLocker unlock conditions" }
  - { priority: P2, question: "Does a later Gecko pool GET for 0x2376…C4C5 return reserve_in_usd for the WETH book only?", checked: "Token GET 200; pool GET HTTP 429; not retried, 2026-09-03", next: "one pool GET after the 429 window; do not loop" }
---

# TENDIES — research packet

## What it is

A one-billion-supply ERC-20 cloned through the NOXA Fun factory into a Uniswap v3 1% pool quoted against WETH. Traders buy and sell TENDIES on that WETH book and on later ETH and USDG books. DexScreener lists memedepot.com/d/showmetendies and @TendiesRH; neither bidirectionally linked the contract this pass.

Themes: memecoin, amm

## Why it matters

Not in the 49-row census. Blockscout holders_count is 18177. DexScreener's lead TENDIES/WETH Uniswap v3 book printed 2527033 of 24h volume and 1086177.41 of liquidity at collection, with a Uniswap v4 TENDIES/ETH book behind it. The quote rails are WETH, ETH, and USDG, not a stock token.

## What could go wrong

USD liquidity on the lead book counts TENDIES plus WETH, not a USDG backstop. Gecko token volume_usd.h24 and Blockscout token.volume_24h are all-pools figures and do not match the WETH pair. No official handle was located, so comms stay unconfirmed-official. Latest CA posts this pass were netlify claim and vote URLs.

## Product and mechanics

Launch factory 0xD9eC…FccB clones LaunchToken. Method 0x686399cb from 0xE71e…04F0 at 2026-06-18T23:32:08Z minted TENDIES supply 1e9*1e18 into Uniswap v3 pool 0x2376…C4C5 against WETH 0x0Bd7…AD73 at fee 10000. factory/launchFactory() on the token returns that factory. PositionLocked sent NFT 143 to LaunchLocker 0x7F03…Cd85. socials() is empty. [verified R-1 R-4 R-5 R-9]

DexScreener shows 30 robinhood pairs. Lead book is Uniswap v3 TENDIES/WETH. Secondary Uniswap v4 TENDIES/ETH and smaller TENDIES/USDG books exist. A Uniswap v4 PONS/TENDIES book quotes TENDIES; that is Pons using this token as a quote, not this token's pad. [verified R-7]

## Control and security

owner() reverts. ABI has no owner. Deployer EOA 0xE71e…04F0 has no code. launchFactory is immutable. Launch-block buy block plus maxWalletBps 200 / maxTxBps 10000 for restrictionBlocks 366. LaunchToken is partially verified (contracts/LaunchToken.sol, compiler v0.8.30). Factory 0xD9eC…FccB is unverified. No audit report URL this pass. [verified R-2 R-3 R-5] [unknown]

## Team and provenance

No official domain or X handle was located. DexScreener websites point at a Meme Depot gallery with no CA. DexScreener socials list @TendiesRH; the bio does not embed the contract. Flag unconfirmed-official and third-party-link. [claim R-7 R-12 R-13]

X user search for TENDIES returned unrelated handles including @tradefortendies (BONK Dev in accounts.yaml). Do not treat those as this token. [claim R-19]

## Economics and activity

DexScreener TENDIES/WETH Uniswap v3 24h volume is 2527033 USD and liquidity.usd is 1086177.41 at 2026-09-03T04:21:00Z. fdv/marketCap 31058448. Uniswap v4 TENDIES/ETH volume.h24 1436438.41 liquidity.usd 424752.97. Uniswap v4 TENDIES/USDG volume.h24 40935.36 liquidity.usd 41486.44. Pair created 2026-06-18T23:32:08Z. [claim R-7]

Gecko token volume_usd.h24 is 5619716.26 across all pools, not the WETH book. fdv_usd 31359012.15 market_cap_usd 32556304.97. Gecko pool GET returned 429 and was not retried. Blockscout holders_count 18177, token.volume_24h 9570671.75, circulating_market_cap 33353819.99. [claim R-1 R-8]

## Material risks

- Quote token on the lead book is WETH, not USDG; USDG books are secondary and thinner. [verified R-7 R-10]
- 24h volume figures disagree across DexScreener pair, Gecko token, and Blockscout token. [claim R-1 R-7 R-8]
- No official handle or domain this pass; memedepot and @TendiesRH are unconfirmed-official / third-party-link. [claim R-7 R-12 R-13]
- Latest CA posts were netlify claim/vote URLs. [claim R-17 R-20]
- No audit report URL this pass. [unknown]

## Verification passes

- Receipts: Blockscout token/source/factory/create tx/TokenLaunched/WETH/pool/locker, RPC name/symbol/factory/pairToken/poolFee/liquidityPool/deployer/socials, DexScreener tokens API, Gecko token GET 200, memedepot, @TendiesRH, and Latest X posts were opened on 2026-09-03 and excerpts copied from the responses. [verified R-1 R-5 R-7 R-8]
- Numbers: 2527033 is the DexScreener TENDIES/WETH pair 24h volume, not Gecko token all-pools 5619716.26 or Blockscout 9570671.75. Reserve 1086177.41 is that pair. [claim R-1 R-7 R-8]
- Adversarial: the strongest contrary reading is that TENDIES is a stock-paired LONG/hood.fun/Pons product or that @TendiesRH is official. pairToken is WETH, the factory is NOXA 0xD9eC…FccB, DexScreener top quotes are WETH/ETH/USDG, and the handle does not embed the CA. [inference R-5 R-7 R-13]

## Operations log

- Base: assignment base_sha 334ca0619aa62e922da83f46de021f06d12348cf. Census 49 slugs have no tendies / TENDIES / 0x4524…FCF9.
- Explorer: Blockscout api/v2 token, smart-contracts, factory, WETH, pool, locker, create tx 0xa101e16c…5bd6, TokenLaunched / PositionLocked / PoolCreated logs, holders. Chrome UA.
- RPC: eth_getCode/eth_call on rpc.mainnet.chain.robinhood.com at block 53134329.
- Aggregators: DexScreener latest/dex/tokens and token-pairs/v1/robinhood. Gecko token GET 200; Gecko pool GET 429 skipped (no retry).
- Social: X Latest TENDIES / $TENDIES / CA; from:TendiesRH; user search TENDIES and TendiesRH; memedepot.com/d/showmetendies.
- Failed: Gecko pool 429; @TendiesRH and memedepot do not embed the CA; launch socials() empty; launchBlock() 25347753 vs create block 95557.
- Time: collection 2026-09-03T04:16Z–2026-09-03T04:26Z.
