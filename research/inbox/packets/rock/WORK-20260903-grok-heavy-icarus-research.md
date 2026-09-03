---
# Packet v2 (docs/research-system.md §5). Seed with Icarus What-it-is + events.
contract_version: proofline-research-v2
work_id: WORK-20260903-grok-heavy-icarus-research
producer: grok-heavy
role: collector
base_sha: 334ca0619aa62e922da83f46de021f06d12348cf
slug: rock
name: ROCK
packet_tier: seed
as_of: 2026-09-03T05:10:16Z
prior_packet: null
supersedes: null
owned_slugs: [rock]
allowed_paths:
  - research/inbox/packets/rock/WORK-20260903-grok-heavy-icarus-research.md

identity:
  canonical_name: ROCK
  aliases: []
  symbols: [ROCK]
  entity_kind: token
  chain_scope: robinhood-native
  official_domain: "NULL — DexScreener info.websites empty; Blockscout token page lists no homepage this pass; Gecko token GET returned HTTP 429 so was skipped"
  official_handle: "NULL — DexScreener info.socials empty; X user search returned @justRock_RH bio Most Valuable Asset with no CA; @1xharsh posted i launched $ROCK on @longdotxyz; flag unconfirmed-official"
  repository: "NULL — no GitHub org or repository URL on DexScreener, Blockscout, or X search this pass"
  possible_matches:
    - slug: long
      signals: [shared-deployer]
      contrary_signals:
        - "Census LONG is a stock-paired factory at app.long.xyz / @longdotxyz with LongLauncher 0x22e9…eeED"
        - "ROCK is a graduation token at 0xB6b5…1E18 created through that LongLauncher.create into a ROCK/GLD Uniswap v4 pool; entity_kind token, not protocol"
        - "No shared domain or handle; DexScreener info.socials empty, not @longdotxyz"
    - slug: bankr
      signals: [other]
      contrary_signals:
        - "Census Bankr is an agent execution surface at bankr.bot / @bankrbot"
        - "ROCK create tx 0x7d0d…d716 calls LongLauncher, not a Bankr surface"
        - "No shared domain or handle"
    - slug: artificial-inu
      signals: [shared-deployer]
      contrary_signals:
        - "Census Artificial Inu is $AI at 0x2E8c…1e18 paired to NVDA via LongLauncher, site artificialinu.com / @ArtificiallyInu"
        - "ROCK is $ROCK at 0xB6b5…1E18 paired to GLD 0xC9a9…FC4e"
        - "No shared domain, handle, or reproduced address"
    - slug: pons
      signals: [ticker-only]
      contrary_signals:
        - "A different ROCK token 0x000AEc…9c5C is PonsLauncherToken (holders_count 4044, creator 0xA5aA…feB)"
        - "This subject is LongLauncher DopplerERC20V1 clone 0xB6b5…1E18; creator_address_hash DopplerERC20V1Factory 0x1B37…b69a"
        - "No shared domain, handle, or reproduced address"

classification:
  primary_leaf: rwa-products/stock-paired-token
  secondary_leaves: [launch/graduation-token]
  mechanism_tags: [stock-paired, rwa, amm, launchpad]
  ecosystem_role: graduation
  lifecycle: mainnet
  coverage_recommendation: seed
  evidence_state: partly-verified
  rationale: "Not in the 49-row census. Token 0xB6b5…1E18 is an EIP-1167 DopplerERC20V1 clone with non-empty code on 4663; LongLauncher.create on 2026-08-31T21:35:45Z minted ROCK into Uniswap v4 pool 0x028a…1d7e quoted against GLD 0xC9a9…FC4e (GET /rhj/assets row, census stock-tokens rail). Distinct from packed UBIK/GLD 0x8124…68Bd, CASHBIRD/GLD 0x38C8…1e18, and SCHIFFY/GLD 0x42aF…1E18. No official handle this pass; @justRock_RH and @1xharsh are unconfirmed-official. [R-1] [R-4] [R-5] [R-7] [R-12] [R-15]"

qualifying:
  deployed_on_chain: { status: pass, claim_ids: [CLM-4, CLM-5, CLM-6], note: "" }
  native_play:       { status: pass, claim_ids: [CLM-1, CLM-15], note: "" }
  citable:           { status: pass, claim_ids: [CLM-2, CLM-3, CLM-4], note: "" }
  research_story:    { status: pass, claim_ids: [CLM-1, CLM-9, CLM-10], note: "" }

links:
  - { kind: x, url: "https://x.com/justRock_RH", authenticity: unconfirmed }

deployments:
  - label: ROCK token (EIP-1167 DopplerERC20V1 clone)
    role: token
    address:
      value: "0xB6b5D146d89cDceD2E304389D08448E327c71E18"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T05:06:11Z
      exists_on_4663: true
      explorer_source_verified: true
      explorer_source_verification_scope: proxy-shell-only
      implementation_source_verified: true
    receipt_ids: [R-1, R-5, R-18]
  - label: DopplerERC20V1 implementation
    role: implementation
    address:
      value: "0x3Be8B97Fd0e713B5aBE0649Fa830223B6B4BC599"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T05:07:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-2, R-5]
  - label: DopplerERC20V1Factory (token creator_address_hash)
    role: factory
    address:
      value: "0x1B37D3a72082029c44B35B604Ea473617580b69a"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T05:07:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-1, R-3, R-5]
  - label: LongLauncher (create target)
    role: factory
    address:
      value: "0x22e99278308B393ea1260859B181AD7E78f5eeED"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T05:07:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-4, R-18]
  - label: Airlock (token owner)
    role: other
    address:
      value: "0xeb7C034704eF8Dcd2D32324c1545f62fB4aD0862"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T05:08:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-5, R-6, R-18]
  - label: GLD SPDR Gold Trust Robinhood Token (pair quote / rail)
    role: token
    address:
      value: "0xC9a981FEE1F9DEc688bb123ccDeCc63D0deBFC4e"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T05:07:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-7, R-12, R-16]

metrics:
  - { kind: volume_24h, value: 115262.98, currency: USD, as_of: 2026-09-03T05:06:11Z, window: 24h, method: "api.dexscreener.com/latest/dex/tokens/0xB6b5D146d89cDceD2E304389D08448E327c71E18 ROCK/GLD pair 0x028ae8…1d7e volume.h24", class: claim, receipt_ids: [R-7] }
  - { kind: tvl, value: 113062.69, currency: USD, as_of: 2026-09-03T05:06:11Z, window: point, method: "api.dexscreener.com/latest/dex/tokens/0xB6b5D146d89cDceD2E304389D08448E327c71E18 ROCK/GLD pair 0x028ae8…1d7e liquidity.usd (ROCK/GLD pool, not an all-pools figure)", class: claim, receipt_ids: [R-7] }
  - { kind: market_cap, value: 199919, currency: USD, as_of: 2026-09-03T05:06:11Z, window: point, method: "api.dexscreener.com/latest/dex/tokens/0xB6b5D146d89cDceD2E304389D08448E327c71E18 ROCK/GLD pair 0x028ae8…1d7e fdv/marketCap", class: claim, receipt_ids: [R-7] }
  - { kind: holders, value: 774, currency: null, as_of: 2026-09-03T05:06:11Z, window: point, method: "robinhoodchain.blockscout.com/api/v2/tokens/0xB6b5D146d89cDceD2E304389D08448E327c71E18 holders_count", class: claim, receipt_ids: [R-1] }

reproductions:
  - { id: REP-1, method: explorer-rpc, chain_id: 4663, checked_at: 2026-09-03T05:08:00Z, receipt_ids: [R-5], result: "eth_chainId 0x1237 (4663). eth_blockNumber 0x32b2722 (53159714). Token 0xB6b5…1E18 eth_getCode 44 bytes EIP-1167 prefix 3d3d3d3d363d3d37363d73 implementation 0x3be8b97f…c599. name ROCK, symbol ROCK, decimals 18, totalSupply 998376280590820425261189213. owner() 0xeb7C034704eF8Dcd2D32324c1545f62fB4aD0862. factory() reverts. Impl 0x3Be8…C599 code 13927 B. DopplerERC20V1Factory 0x1B37…b69a code 1912 B. LongLauncher 0x22e9…eeED code 5826 B. GLD 0xC9a9…FC4e code 283 B. Airlock 0xeb7C…0862 code 5695 B. Launcher EOA 0xe58F…3Afb code 0x. Other ROCK 0x000AEc…9c5C code 5274 B." }
  - { id: REP-2, method: explorer-ui, chain_id: 4663, checked_at: 2026-09-03T05:07:00Z, receipt_ids: [R-1, R-2, R-3, R-4, R-16, R-17, R-18], result: "Blockscout api/v2 token 0xB6b5…1E18 name ROCK symbol ROCK holders_count 774 total_supply 998376280590820425261189213 proxy_type eip1167 implementation DopplerERC20V1 0x3Be8…C599 is_verified true. creator_address_hash DopplerERC20V1Factory 0x1B37…b69a. create tx 0x7d0d…d716 2026-08-31T21:35:45Z block 51189095 from EOA 0xe58F…3Afb to LongLauncher 0x22e9…eeED method create. LaunchCreated normalizedTicker ROCK numeraire GLD 0xC9a9…FC4e. PoolManager Initialize id 0x028a…1d7e currency0 ROCK currency1 GLD hooks 0x4e34…a544. GLD token name SPDR Gold Shares • Robinhood Token holders_count 14121. Other ROCK 0x000AEc…9c5C PonsLauncherToken holders_count 4044." }
  - { id: REP-3, method: api, checked_at: 2026-09-03T05:06:11Z, receipt_ids: [R-7, R-15], result: "DexScreener latest/dex/tokens/0xB6b5…1E18: 4 robinhood uniswap pairs; top ROCK/GLD v4 0x028a…1d7e quote 0xC9a9…FC4e SPDR Gold Trust • Robinhood Token / GLD liquidity.usd 113062.69 volume.h24 115262.98 fdv/marketCap 199919 pairCreatedAt 1788212145000 (2026-08-31T21:35:45Z) info.websites [] info.socials []. Secondary ROCK/ETH liq 324.18 vol 317.61; two ROCK/USDG books liq 14.58 and 14.7. Gecko token GET HTTP 429; skipped." }
  - { id: REP-4, method: api, checked_at: 2026-09-03T05:08:30Z, receipt_ids: [R-12], result: "GET api.robinhood.com/rhj/assets HTTP 200; assets length 194; one GLD hit tokenSymbol GLD tokenName SPDR Gold Trust • Robinhood Token contractAddress 0xC9a981FEE1F9DEc688bb123ccDeCc63D0deBFC4e chainId 4663 status ASSET_STATUS_ACTIVE isin US78463V1070. 0 ROCK ticker hits (RKLB Rocket Lab is a different row)." }
  - { id: REP-5, method: explorer-ui, chain_id: 4663, checked_at: 2026-09-03T05:07:00Z, receipt_ids: [R-6, R-18], result: "Create tx logs: OwnershipTransferred newOwner Airlock 0xeb7C…0862; mint 1e27 to Airlock; PoolManager Initialize pool 0x028a…1d7e; DopplerHookInitializer Lock beneficiaries 0x21E2…7A66 5e16 (5%) and launcher 0xe58F…3Afb 95e16 (95%); Airlock Create asset ROCK numeraire GLD; LongLauncher LaunchCreated normalizedTicker ROCK launcher 0xe58F…3Afb deployedAt 1788212145." }

claims:
  - { id: CLM-1, field: product.mechanism, value: "LongLauncher.create clones a 1e9-supply DopplerERC20V1 (EIP-1167) into a Uniswap v4 pool quoted against GLD. Tx 0x7d0d…d716 from 0xe58F…3Afb minted ROCK as the asset and seeded pool 0x028a…1d7e. Token owner() is Airlock. The create target is LongLauncher.", class: verified, observed_at: 2026-09-03T05:08:00Z, receipt_ids: [R-4, R-5, R-6, R-18], reproduction_ids: [REP-1, REP-2, REP-5], supersedes: null }
  - { id: CLM-2, field: identity.name, value: "ROCK", class: verified, observed_at: 2026-09-03T05:06:11Z, receipt_ids: [R-1, R-4, R-5], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-3, field: identity.symbol, value: "ROCK", class: verified, observed_at: 2026-09-03T05:06:11Z, receipt_ids: [R-1, R-4, R-5], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-4, field: deployment.address, value: "0xB6b5D146d89cDceD2E304389D08448E327c71E18", class: verified, observed_at: 2026-09-03T05:07:00Z, receipt_ids: [R-1, R-5, R-18], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-5, field: deployment.address, value: "0x22e99278308B393ea1260859B181AD7E78f5eeED", class: verified, observed_at: 2026-09-03T05:07:00Z, receipt_ids: [R-4, R-18], reproduction_ids: [REP-2, REP-5], supersedes: null }
  - { id: CLM-6, field: lifecycle, value: mainnet, class: verified, observed_at: 2026-09-03T05:08:00Z, receipt_ids: [R-1, R-4, R-5, R-7], reproduction_ids: [REP-1, REP-2, REP-3], supersedes: null }
  - { id: CLM-7, field: taxonomy.primary-leaf, value: rwa-products/stock-paired-token, class: claim, observed_at: 2026-09-03T05:08:30Z, receipt_ids: [R-7, R-12], reproduction_ids: [], supersedes: null }
  - { id: CLM-8, field: identity.handle, value: "NULL — no bidirectional official handle; DexScreener info.socials empty; @justRock_RH bio has no CA; @1xharsh posted i launched $ROCK on @longdotxyz; flag unconfirmed-official", class: claim, observed_at: 2026-09-03T05:09:00Z, receipt_ids: [R-7, R-10, R-13], reproduction_ids: [], supersedes: null }
  - { id: CLM-9, field: relationship, value: "Pair quote GLD 0xC9a9…FC4e is SPDR Gold Trust • Robinhood Token in GET /rhj/assets (194 assets, 1 GLD hit, same address; Blockscout token name SPDR Gold Shares • Robinhood Token). GLD is a rail, not this subject. Distinct from packed UBIK/GLD 0x8124…68Bd pair 0x1f28…e676, CASHBIRD/GLD 0x38C8…1e18 pair 0xf25f…fdfb, and SCHIFFY/GLD 0x42aF…1E18 pair 0xc749…777e. Distinct from census LONG / Bankr / Artificial Inu / Pons.", class: verified, observed_at: 2026-09-03T05:08:30Z, receipt_ids: [R-12, R-15, R-16], reproduction_ids: [REP-2, REP-4], supersedes: null }
  - { id: CLM-10, field: economics.metric, value: "ROCK/GLD Uniswap v4 24h volume 115262.98 USD and liquidity.usd 113062.69 at 2026-09-03T05:06:11Z (DexScreener ROCK/GLD pair slice, not an all-pools figure)", class: verified, observed_at: 2026-09-03T05:06:11Z, receipt_ids: [R-7], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-11, field: economics.metric, value: "DexScreener same pair fdv/marketCap 199919; priceUsd 0.0002002; h24 txns buys 832 sells 857 at 2026-09-03T05:06:11Z", class: verified, observed_at: 2026-09-03T05:06:11Z, receipt_ids: [R-7], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-12, field: economics.metric, value: 774, class: verified, observed_at: 2026-09-03T05:06:11Z, receipt_ids: [R-1], reproduction_ids: [REP-2], supersedes: null }
  - { id: CLM-13, field: control.owner, value: "token owner() 0xeb7C034704eF8Dcd2D32324c1545f62fB4aD0862 Airlock; OwnershipTransferred to Airlock on create. factory() reverts.", class: verified, observed_at: 2026-09-03T05:08:00Z, receipt_ids: [R-5, R-6, R-18], reproduction_ids: [REP-1, REP-5], supersedes: null }
  - { id: CLM-14, field: control.privileged-role, value: "DopplerHookInitializer Lock beneficiaries: 0x21E2ce70511e4FE542a97708e89520471DAa7A66 5% and launcher EOA 0xe58F5e5bbFEb4E01dBaDCE7c61e9fBF78f033Afb 95%", class: verified, observed_at: 2026-09-03T05:07:00Z, receipt_ids: [R-18], reproduction_ids: [REP-5], supersedes: null }
  - { id: CLM-15, field: other, value: "Pair asset is GLD 0xC9a981FEE1F9DEc688bb123ccDeCc63D0deBFC4e; venue is Uniswap v4 PoolManager 0x8366a39CC670B4001A1121B8F6A443A643e40951 pool 0x028a…1d7e", class: verified, observed_at: 2026-09-03T05:07:00Z, receipt_ids: [R-7, R-18], reproduction_ids: [REP-3, REP-5], supersedes: null }
  - { id: CLM-16, field: deployment.role, value: "Token creator_address_hash is DopplerERC20V1Factory 0x1B37…b69a; create target is LongLauncher 0x22e9…eeED, not Pons, PAIR, or hood.fun", class: verified, observed_at: 2026-09-03T05:07:00Z, receipt_ids: [R-1, R-3, R-4, R-5], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-17, field: taxonomy.chain-scope, value: robinhood-native, class: verified, observed_at: 2026-09-03T05:06:11Z, receipt_ids: [R-5, R-7], reproduction_ids: [REP-1, REP-3], supersedes: null }
  - { id: CLM-18, field: security.audit, value: "No audit report URL was located on Blockscout, DexScreener, or X search this pass", class: unknown, observed_at: 2026-09-03T05:10:16Z, receipt_ids: [], reproduction_ids: [], supersedes: null }
  - { id: CLM-19, field: communications.status, value: "unconfirmed-official: @justRock_RH name ROCK, bio Most Valuable Asset, no CA; DexScreener info.socials empty. @1xharsh posted i launched $ROCK on @longdotxyz and paid for DexScreener verification.", class: claim, observed_at: 2026-09-03T05:09:00Z, receipt_ids: [R-7, R-10, R-13], reproduction_ids: [], supersedes: null }
  - { id: CLM-20, field: economics.metric, value: "DexScreener fdv/marketCap 199919 on the ROCK/GLD book. Gecko fdv skipped (token GET HTTP 429).", class: verified, observed_at: 2026-09-03T05:06:11Z, receipt_ids: [R-7], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-21, field: deployment.address, value: "0xC9a981FEE1F9DEc688bb123ccDeCc63D0deBFC4e", class: verified, observed_at: 2026-09-03T05:08:30Z, receipt_ids: [R-12, R-16], reproduction_ids: [REP-2, REP-4], supersedes: null }
  - { id: CLM-22, field: deployment.address, value: "0x3Be8B97Fd0e713B5aBE0649Fa830223B6B4BC599", class: verified, observed_at: 2026-09-03T05:07:00Z, receipt_ids: [R-2, R-5], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-23, field: identity.domain, value: "NULL — DexScreener info.websites []; Blockscout token page lists no homepage; Gecko token GET HTTP 429 skipped", class: claim, observed_at: 2026-09-03T05:06:11Z, receipt_ids: [R-7], reproduction_ids: [], supersedes: null }
  - { id: CLM-24, field: candidate, value: "rock | ROCK | NULL | NULL — discovery token not in census 49", class: claim, observed_at: 2026-09-03T05:10:16Z, receipt_ids: [R-1, R-7], reproduction_ids: [], supersedes: null }
  - { id: CLM-25, field: relationship, value: "Ticker collision: Blockscout search also returns ROCK 0x000AEc2B80d4d130FD6E828Daf41A63DDfdb9c5C named PonsLauncherToken holders_count 4044. Subject is 0xB6b5…1E18 only.", class: claim, observed_at: 2026-09-03T05:08:00Z, receipt_ids: [R-17], reproduction_ids: [], supersedes: null }
  - { id: CLM-26, field: other, value: "Create mint was 1e27 to Airlock; RPC totalSupply 998376280590820425261189213. @1xharsh posted burns totaling ~1.6+ mil ROCK. Burn path not read in verified DopplerERC20V1 source this pass.", class: claim, observed_at: 2026-09-03T05:09:00Z, receipt_ids: [R-1, R-5, R-21], reproduction_ids: [], supersedes: null }
  - { id: CLM-27, field: communications.status, value: "copypasta-pattern: netlify vote/claim pages reused CA 0xB6b5…1E18 (robinhood-main-dex-nqf.netlify.app/vote/… and crypto-ugd.netlify.app/claim?contract=…). DexScreener lists no matching site.", class: claim, observed_at: 2026-09-03T05:09:00Z, receipt_ids: [R-20], reproduction_ids: [], supersedes: null }

conflicts: []

events:
  - id: EVT-1
    type: onchain
    title: "DexScreener ROCK/GLD 24h volume $115k, liquidity $113k"
    summary: "ROCK/GLD v4 pool 0x028a…1d7e volume.h24 115262.98 liquidity.usd 113062.69 fdv 199919."
    occurred_at: 2026-09-03T05:06:11Z
    observed_at: 2026-09-03T05:06:11Z
    affected_fields: [economics.metric, activity.status]
    evidence_state: verified
    impact: material
    site_recommendation: both
    channel_recommendation: none
    receipt_ids: [R-7]
  - id: EVT-2
    type: risk
    title: "Netlify vote/claim pages used ROCK CA (copypasta-pattern)"
    summary: "@tidaloracleNFT posted robinhood-main-dex-nqf.netlify.app/vote/0xB6b5…1E18 listing id 9817."
    occurred_at: 2026-09-03T04:45:14Z
    observed_at: 2026-09-03T05:09:00Z
    affected_fields: [communications.status]
    evidence_state: claim
    impact: routine
    site_recommendation: none
    channel_recommendation: none
    receipt_ids: [R-20]
  - id: EVT-3
    type: ct
    title: "@1xharsh posted ROCK launch on longdotxyz"
    summary: "Post: launched $ROCK on @longdotxyz 2 days ago; paid DexScreener verification; warnings on dex and OpenSea."
    occurred_at: 2026-09-03T02:34:36Z
    observed_at: 2026-09-03T05:09:00Z
    affected_fields: [identity.handle, communications.status]
    evidence_state: claim
    impact: material
    site_recommendation: feed
    channel_recommendation: none
    receipt_ids: [R-10]
  - id: EVT-4
    type: ct
    title: "@justRock_RH posted The next move is already written"
    summary: "@justRock_RH name ROCK posted $ROCK $PONS $ROBINHOOD. Bio Most Valuable Asset; no CA."
    occurred_at: 2026-09-03T02:07:05Z
    observed_at: 2026-09-03T05:09:00Z
    affected_fields: [identity.handle, communications.status]
    evidence_state: claim
    impact: routine
    site_recommendation: none
    channel_recommendation: none
    receipt_ids: [R-13]
  - id: EVT-5
    type: ct
    title: "@1xharsh posted ~1.6+ mil ROCK burnt"
    summary: "Post: ~1.6+ mil $ROCK burnt and it's only been 1 day really. Prior post said total burnt 1.4mil."
    occurred_at: 2026-09-02T20:17:25Z
    observed_at: 2026-09-03T05:09:00Z
    affected_fields: [economics.metric, activity.status]
    evidence_state: claim
    impact: routine
    site_recommendation: feed
    channel_recommendation: none
    receipt_ids: [R-21]
  - id: EVT-6
    type: ct
    title: "@Yourpop8 posted ROCK/GLD as meme vs tokenized gold"
    summary: "Post: $ROCK / $GLD might be one of the most interesting pairs on Robinhood Chain; CA 0xB6b5…1E18."
    occurred_at: 2026-09-01T21:38:45Z
    observed_at: 2026-09-03T05:06:00Z
    affected_fields: [activity.status, relationship]
    evidence_state: claim
    impact: routine
    site_recommendation: feed
    channel_recommendation: none
    receipt_ids: [R-11]
  - id: EVT-7
    type: onchain
    title: "LongLauncher create minted ROCK into Uniswap v4 GLD pool"
    summary: "Tx 0x7d0d…d716 from 0xe58F…3Afb at 2026-08-31T21:35:45Z; LaunchCreated pool 0x028a…1d7e."
    occurred_at: 2026-08-31T21:35:45Z
    observed_at: 2026-09-03T05:07:00Z
    affected_fields: [deployment.address, lifecycle, product.mechanism]
    evidence_state: verified
    impact: material
    site_recommendation: profile
    channel_recommendation: none
    receipt_ids: [R-4, R-18]

receipts:
  - { id: R-1, publisher: Blockscout, title: "Token 0xB6b5…1E18 ROCK / ROCK", url: "https://robinhoodchain.blockscout.com/address/0xB6b5D146d89cDceD2E304389D08448E327c71E18", published_at: null, accessed_at: 2026-09-03T05:06:11Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-2, CLM-3, CLM-4, CLM-6, CLM-12, CLM-16, CLM-24], excerpt: "hash 0xB6b5D146d89cDceD2E304389D08448E327c71E18 name ROCK is_contract true is_verified true proxy_type eip1167 implementations DopplerERC20V1 0x3Be8B97Fd0e713B5aBE0649Fa830223B6B4BC599. token symbol ROCK decimals 18 total_supply 998376280590820425261189213 holders_count 774 type ERC-20. creator_address_hash 0x1B37D3a72082029c44B35B604Ea473617580b69a creation_transaction_hash 0x7d0d353b221ba818e4bc70d30728e534c510cfa8fbebf58c78ad3c800a6bd716." }
  - { id: R-2, publisher: Blockscout, title: "Address 0x3Be8…C599 DopplerERC20V1", url: "https://robinhoodchain.blockscout.com/address/0x3Be8B97Fd0e713B5aBE0649Fa830223B6B4BC599", published_at: null, accessed_at: 2026-09-03T05:07:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-22], excerpt: "hash 0x3Be8B97Fd0e713B5aBE0649Fa830223B6B4BC599 name DopplerERC20V1 is_contract true is_verified true. Smart-contract compiler v0.8.26+commit.8a97fa7a is_partially_verified true file_path src/tokens/DopplerERC20V1.sol verified_at 2026-07-01T19:42:07Z." }
  - { id: R-3, publisher: Blockscout, title: "Address 0x1B37…b69a DopplerERC20V1Factory", url: "https://robinhoodchain.blockscout.com/address/0x1B37D3a72082029c44B35B604Ea473617580b69a", published_at: null, accessed_at: 2026-09-03T05:07:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-16], excerpt: "hash 0x1B37D3a72082029c44B35B604Ea473617580b69a name DopplerERC20V1Factory is_contract true is_verified true. Compiler v0.8.26 file_path src/tokens/DopplerERC20V1Factory.sol is_partially_verified true verified_at 2026-07-01T19:42:15Z." }
  - { id: R-4, publisher: Blockscout, title: "create tx 0x7d0d353b…d716", url: "https://robinhoodchain.blockscout.com/tx/0x7d0d353b221ba818e4bc70d30728e534c510cfa8fbebf58c78ad3c800a6bd716", published_at: 2026-08-31T21:35:45Z, accessed_at: 2026-09-03T05:07:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-2, CLM-3, CLM-5, CLM-6, CLM-16, EVT-7], excerpt: "timestamp 2026-08-31T21:35:45.000000Z status ok result success block_number 51189095 from 0xe58F5e5bbFEb4E01dBaDCE7c61e9fBF78f033Afb (is_contract false) to LongLauncher 0x22e99278308B393ea1260859B181AD7E78f5eeED method create. decoded create data includes numeraire 0xC9a981FEE1F9DEc688bb123ccDeCc63D0deBFC4e and factory 0x1B37…b69a; name/symbol bytes ROCK." }
  - { id: R-5, publisher: Robinhood Chain RPC, title: "eth_getCode, name, symbol, owner() on ROCK", url: "https://rpc.mainnet.chain.robinhood.com", published_at: null, accessed_at: 2026-09-03T05:08:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-2, CLM-3, CLM-4, CLM-6, CLM-13, CLM-16, CLM-17, CLM-22], excerpt: "eth_chainId 0x1237. eth_blockNumber 0x32b2722 (53159714). Token code 44 B EIP-1167 impl 0x3be8b97f…c599. name ROCK symbol ROCK decimals 18 totalSupply 998376280590820425261189213. owner() 0xeb7C034704eF8Dcd2D32324c1545f62fB4aD0862. factory() reverts. Factory code 1912 B. Impl code 13927 B. LongLauncher code 5826 B. GLD code 283 B. Airlock code 5695 B. EOA 0xe58F…3Afb code 0x." }
  - { id: R-6, publisher: Blockscout, title: "create tx logs OwnershipTransferred / mint", url: "https://robinhoodchain.blockscout.com/tx/0x7d0d353b221ba818e4bc70d30728e534c510cfa8fbebf58c78ad3c800a6bd716?tab=logs", published_at: 2026-08-31T21:35:45Z, accessed_at: 2026-09-03T05:07:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-13], excerpt: "OwnershipTransferred oldOwner 0x0000…0000 newOwner 0xeb7C034704eF8Dcd2D32324c1545f62fB4aD0862. Transfer from 0x0000…0000 to Airlock amount 1000000000000000000000000000. Initialized version 1." }
  - { id: R-7, publisher: DexScreener, title: "latest/dex/tokens ROCK", url: "https://api.dexscreener.com/latest/dex/tokens/0xB6b5D146d89cDceD2E304389D08448E327c71E18", published_at: null, accessed_at: 2026-09-03T05:06:11Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-7, CLM-8, CLM-10, CLM-11, CLM-15, CLM-17, CLM-20, CLM-23, CLM-24, EVT-1], excerpt: "4 robinhood uniswap pairs. Top pairAddress 0x028ae8b2eaed39d131ef7cac36d838d466ec3912f7a4ca7d4d15d67d38d31d7e labels v4 base ROCK / ROCK quote SPDR Gold Trust • Robinhood Token / GLD 0xC9a981FEE1F9DEc688bb123ccDeCc63D0deBFC4e liquidity.usd 113062.69 volume.h24 115262.98 fdv 199919 marketCap 199919 pairCreatedAt 1788212145000. info.websites [] info.socials []." }
  - { id: R-10, publisher: "@1xharsh", title: "launched $ROCK on @longdotxyz", url: "https://x.com/1xharsh/status/2095339648805642422", published_at: 2026-09-03T02:34:36Z, accessed_at: 2026-09-03T05:09:00Z, kind: social, authority: social, authenticity: unconfirmed, supports: [CLM-8, CLM-19, EVT-3], excerpt: "Bringing some concerns to the attention of concerned teams - i launched $ROCK on @longdotxyz 2 days ago. Paid for verification on @dexscreener. The token shows warnings on dex as well as on @opensea and it's been spooking out potential traders." }
  - { id: R-11, publisher: "@Yourpop8", title: "$ROCK / $GLD interesting pair", url: "https://x.com/Yourpop8/status/2094902806415106401", published_at: 2026-09-01T21:38:45Z, accessed_at: 2026-09-03T05:06:00Z, kind: social, authority: social, authenticity: confirmed, supports: [EVT-6], excerpt: "$ROCK / $GLD might be one of the most interesting pairs I've seen on Robinhood Chain tbh. Now you have a MEME trading directly against tokenized $GLD. Not USDC. Not ETH. GOLD. Quoted prior post with CA 0xB6b5D146d89cDceD2E304389D08448E327c71E18." }
  - { id: R-12, publisher: Robinhood, title: "GET /rhj/assets Stock Token registry", url: "https://api.robinhood.com/rhj/assets", published_at: null, accessed_at: 2026-09-03T05:08:30Z, kind: docs, authority: primary, authenticity: confirmed, supports: [CLM-9, CLM-21], excerpt: "HTTP 200. assets length 194. one GLD hit tokenSymbol GLD tokenName SPDR Gold Trust • Robinhood Token contractAddress 0xC9a981FEE1F9DEc688bb123ccDeCc63D0deBFC4e chainId 4663 status ASSET_STATUS_ACTIVE isin US78463V1070. tokenSymbol ROCK returned 0 hits." }
  - { id: R-13, publisher: "@justRock_RH", title: "The next move is already written", url: "https://x.com/justRock_RH/status/2095332722403053754", published_at: 2026-09-03T02:07:05Z, accessed_at: 2026-09-03T05:09:00Z, kind: social, authority: social, authenticity: unconfirmed, supports: [CLM-8, CLM-19, EVT-4], excerpt: "The next move is already written. $ROCK $PONS $ROBINHOOD. Profile name ROCK handle @justRock_RH bio Most Valuable Asset. No contract in the bio this pass." }
  - { id: R-15, publisher: DexScreener, title: "search q=ROCK GLD", url: "https://api.dexscreener.com/latest/dex/search?q=ROCK%20GLD", published_at: null, accessed_at: 2026-09-03T05:08:30Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-9], excerpt: "ROCK/GLD 0xB6b5D146d89cDceD2E304389D08448E327c71E18 pair 0x028a…1d7e. UBIK/GLD 0x812486EAea648819853F8E372dc9f1516C7868Bd pair 0x1f28…e676. CASHBIRD/GLD 0x38C8f642A04FEaC9899990276b4207fE4F621e18 pair 0xf25f…fdfb. SCHIFFY/GLD 0x42aFA2124ca5a2B83898E46B2dA9a190995b1E18 pair 0xc749…777e." }
  - { id: R-16, publisher: Blockscout, title: "Token 0xC9a9…FC4e SPDR Gold Shares / GLD", url: "https://robinhoodchain.blockscout.com/token/0xC9a981FEE1F9DEc688bb123ccDeCc63D0deBFC4e", published_at: null, accessed_at: 2026-09-03T05:07:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-9, CLM-21], excerpt: "address_hash 0xC9a981FEE1F9DEc688bb123ccDeCc63D0deBFC4e name SPDR Gold Shares • Robinhood Token symbol GLD decimals 18 holders_count 14121 total_supply 8611061000000000000000 type ERC-20 exchange_rate 404.2." }
  - { id: R-17, publisher: Blockscout, title: "Token 0x000AEc…9c5C ROCK PonsLauncherToken", url: "https://robinhoodchain.blockscout.com/address/0x000AEc2B80d4d130FD6E828Daf41A63DDfdb9c5C", published_at: null, accessed_at: 2026-09-03T05:08:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-25], excerpt: "hash 0x000AEc2B80d4d130FD6E828Daf41A63DDfdb9c5C name PonsLauncherToken is_contract true is_verified true creator_address_hash 0xA5aAb3F0c6EeadF30Ef1D3Eb997108E976351feB. token name ROCK symbol ROCK holders_count 4044 total_supply 1000000000000000000000000000. Distinct CA from 0xB6b5…1E18." }
  - { id: R-18, publisher: Blockscout, title: "LaunchCreated / Initialize logs for ROCK", url: "https://robinhoodchain.blockscout.com/tx/0x7d0d353b221ba818e4bc70d30728e534c510cfa8fbebf58c78ad3c800a6bd716", published_at: 2026-08-31T21:35:45Z, accessed_at: 2026-09-03T05:07:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-4, CLM-5, CLM-13, CLM-14, CLM-15, EVT-7], excerpt: "PoolManager Initialize id 0x028ae8b2eaed39d131ef7cac36d838d466ec3912f7a4ca7d4d15d67d38d31d7e currency0 ROCK currency1 GLD hooks 0x4e3468951D49f2EEa976eD0D6e75fFCb44a9a544. Lock beneficiaries 0x21E2…7A66 5e16 and 0xe58F…3Afb 95e16. LaunchCreated normalizedTicker ROCK launcher 0xe58F…3Afb deployedAt 1788212145." }
  - { id: R-20, publisher: "@tidaloracleNFT", title: "ROCK vote listing on netlify", url: "https://x.com/tidaloracleNFT/status/2095372522371826079", published_at: 2026-09-03T04:45:14Z, accessed_at: 2026-09-03T05:09:00Z, kind: social, authority: social, authenticity: unconfirmed, supports: [CLM-27, EVT-2], excerpt: "Attention $ROCK Family! YOUR vote matters! Less than 100 votes are needed to list $ROCK on the Robinhood Top 100 Leaderboard. Listing ID: 9817. https://robinhood-main-dex-nqf.netlify.app/vote/0xB6b5D146d89cDceD2E304389D08448E327c71E18" }
  - { id: R-21, publisher: "@1xharsh", title: "~1.6+ mil $ROCK burnt", url: "https://x.com/1xharsh/status/2095244726874312808", published_at: 2026-09-02T20:17:25Z, accessed_at: 2026-09-03T05:09:00Z, kind: social, authority: social, authenticity: unconfirmed, supports: [CLM-26, EVT-5], excerpt: "~1.6+ mil $ROCK burnt and it's only been 1 day really. Quoted prior: Another 200k $ROCK burnt since last update. Total burnt so far = 1.4mil rock! CA 0xb6b5d146d89cdced2e304389d08448e327c71e18." }

gaps:
  - { priority: P0, question: "Is there an official X handle or site that bidirectionally links to token 0xB6b5…1E18?", checked: "DexScreener info.websites [] info.socials []; @justRock_RH bio has no CA; @1xharsh posts the CA and wrote i launched $ROCK on @longdotxyz, 2026-09-03", next: "re-read DexScreener token profile after a Claim Profile; search new posts that embed the CA and a handle that links back" }
  - { priority: P0, question: "Does @justRock_RH or @1xharsh pin the CA in bio, or does a site cross-link?", checked: "@justRock_RH bio Most Valuable Asset; @1xharsh bio has no CA; DexScreener socials empty, 2026-09-03", next: "re-fetch both profiles and DexScreener info.socials" }
  - { priority: P1, question: "Is PonsLauncherToken ROCK 0x000AEc…9c5C still a live ticker collision on DexScreener?", checked: "Blockscout token name ROCK holders_count 4044; DexScreener tokens API for 0xB6b5…1E18 did not list that CA, 2026-09-03", next: "GET DexScreener latest/dex/tokens/0x000AEc…9c5C" }
  - { priority: P1, question: "Does verified DopplerERC20V1 source expose a burn path matching the 1e27 mint vs 998376280590820425261189213 supply?", checked: "RPC totalSupply matches Blockscout; create mint 1e27; @1xharsh posted ~1.6+ mil burnt; source not line-read this pass", next: "read burn/transfer hooks in src/tokens/DopplerERC20V1.sol on the explorer" }
  - { priority: P2, question: "Would a later Gecko pool slice confirm DexScreener ROCK/GLD 115262.98 / 113062.69?", checked: "Gecko token GET HTTP 429 at 2026-09-03T05:06:11Z; skipped per source order", next: "retry api.geckoterminal.com/api/v2/networks/robinhood/tokens/0xB6b5…1E18 when GET is 200" }
---

# ROCK — research packet

## What it is

A one-billion-supply ERC-20 cloned into a Uniswap v4 pool quoted against GLD. LongLauncher deploys ROCK in one create call and seeds the ROCK/GLD book. Traders buy and sell ROCK on Uniswap v4. No official site or handle was located this pass.

Themes: memecoin, stock-paired:GLD, rwa

## Why it matters

The ROCK/GLD Uniswap v4 book printed 115262.98 of 24h volume and 113062.69 liquidity.usd on DexScreener at collection, with the quote token the SPDR Gold Trust Robinhood Token. Packed UBIK, CASHBIRD, and SCHIFFY also quote GLD on separate CAs. GET /rhj/assets has a GLD row at 0xC9a9…FC4e, so GLD is a rail.

## What could go wrong

USD liquidity figures on the ROCK/GLD book count both sides, and the quote side is GLD, not USDG. A second ROCK token 0x000AEc…9c5C is a PonsLauncherToken. No official handle was located, so comms surfaces stay unconfirmed-official.

## Product and mechanics

LongLauncher 0x22e9…eeED clones DopplerERC20V1 via EIP-1167. create from 0xe58F…3Afb at 2026-08-31T21:35:45Z minted ROCK supply 1e9*1e18 into Uniswap v4 poolId 0x028a…1d7e. Token creator_address_hash is DopplerERC20V1Factory 0x1B37…b69a. owner() is Airlock 0xeb7C…0862. [verified R-4 R-5 R-18]

Pair quote is GLD 0xC9a9…FC4e. PoolManager is 0x8366…0951. Secondary ROCK/ETH and ROCK/USDG books exist on DexScreener with far less liquidity than the GLD book. [verified R-7 R-16]

## Control and security

token owner() is Airlock. factory() reverts. Deployer EOA 0xe58F…3Afb has no code. DopplerHookInitializer Lock beneficiaries are 0x21E2…7A66 at 5% and the launcher EOA at 95%. [verified R-5 R-6 R-18]

DopplerERC20V1 and DopplerERC20V1Factory are partially verified on Blockscout (src/tokens/DopplerERC20V1.sol, src/tokens/DopplerERC20V1Factory.sol, compiler v0.8.26). No audit report URL was located this pass. [verified R-2 R-3] [unknown]

## Team and provenance

No official domain or X handle was located. DexScreener info.websites and info.socials are empty. @justRock_RH names ROCK with bio Most Valuable Asset and no CA. @1xharsh posted i launched $ROCK on @longdotxyz and paid for DexScreener verification. Flag unconfirmed-official. [claim R-7 R-10 R-13]

## Economics and activity

ROCK/GLD Uniswap v4 24h volume is 115262.98 USD and liquidity.usd is 113062.69 at 2026-09-03T05:06:11Z from DexScreener latest/dex/tokens. fdv/marketCap is 199919. Gecko was skipped after HTTP 429. [claim R-7]

Blockscout holders_count 774. Pair created 2026-08-31T21:35:45Z. RPC totalSupply 998376280590820425261189213 versus create mint 1e27. [claim R-1 R-5]

DexScreener search listed packed UBIK/GLD, CASHBIRD/GLD, and SCHIFFY/GLD as separate books on the same GLD rail. [claim R-15]

## Material risks

- Quote token GLD 0xC9a9…FC4e is a rail in GET /rhj/assets; this subject is not that row. [verified R-12 R-16]
- Pool USD liquidity is ROCK plus GLD, not a USDG or WETH backstop. [claim R-7]
- Ticker collision: PonsLauncherToken ROCK 0x000AEc…9c5C. [claim R-17]
- No official handle or domain this pass; netlify vote/claim pages are copypasta-pattern. [claim R-7 R-13 R-20]
- No audit report URL this pass. [unknown]

## Verification passes

- Receipts: Blockscout token/impl/factory/GLD/other ROCK and the create tx plus logs, RPC name/symbol/owner/code, DexScreener tokens and search, /rhj/assets, and X Latest posts were opened on 2026-09-03 and excerpts copied from the responses. [verified R-1 R-5 R-7 R-12]
- Numbers: 115262.98 is the DexScreener ROCK/GLD pair 24h volume, not an all-pools figure. Liquidity 113062.69 is that pool. Assignment lead of liq ~$107,570 vol ~$124,787 was not reproduced at this as_of. [claim R-7]
- Adversarial: the strongest contrary reading is that ROCK is UBIK, CASHBIRD, or SCHIFFY, or that it is the Pons ROCK 0x000AEc…9c5C, or that @justRock_RH is official. UBIK is 0x8124…68Bd. CASHBIRD is 0x38C8…1e18. SCHIFFY is 0x42aF…1E18. The Pons token is a different CA. DexScreener socials are empty. [inference R-15 R-17 R-13]

## Operations log

- Base: assignment base_sha 334ca0619aa62e922da83f46de021f06d12348cf. Census 49 slugs have no rock / ROCK / 0xB6b5…1E18.
- Explorer: Blockscout api/v2 token, impl, factory, GLD, other ROCK, create 0x7d0d…d716, LaunchCreated / Initialize / Lock logs, holders. RPC eth_getCode/eth_call with Chrome UA at block 53159714.
- Aggregators: DexScreener latest/dex/tokens and search q=ROCK GLD. Gecko token GET HTTP 429; skipped.
- Registry: GET api.robinhood.com/rhj/assets 194 assets, 1 GLD, 0 ROCK.
- Social: X keyword ROCK GLD / $ROCK Latest; from:justRock_RH; from:1xharsh; user search justRock_RH.
- Failed: Gecko 429; Blockscout holders/txs list endpoints 422 this pass (token object still returned holders_count).
- Time: collection 2026-09-03T05:05Z–2026-09-03T05:10:16Z.
