---
# Packet v2 (docs/research-system.md §5). Seed with Icarus What-it-is + events.
contract_version: proofline-research-v2
work_id: WORK-20260903-grok-heavy-icarus-research
producer: grok-heavy
role: collector
base_sha: 334ca0619aa62e922da83f46de021f06d12348cf
slug: schiffy
name: SCHIFFY
packet_tier: seed
as_of: 2026-09-03T03:52:00Z
prior_packet: null
supersedes: null
owned_slugs: [schiffy]
allowed_paths:
  - research/inbox/packets/schiffy/WORK-20260903-grok-heavy-icarus-research.md

identity:
  canonical_name: SCHIFFY
  aliases: [Schiffy]
  symbols: [SCHIFFY]
  entity_kind: token
  chain_scope: robinhood-native
  official_domain: "NULL — DexScreener info.websites t.co/8zv22DgJl8 expands to https://schiffy.gold; HTML title $SCHIFFY and twitter:site @schiffygld; no 0x42aFA212… CA in the HTML this pass; Gecko token info websites []"
  official_handle: "NULL — DexScreener info.socials lists https://x.com/schiffygld; schiffy.gold twitter:site is @schiffygld; bio includes CA 0x42afa212…; site HTML has no CA; flag unconfirmed-official"
  repository: "NULL — no GitHub org or repository URL on DexScreener, Gecko, Blockscout, schiffy.gold, or X search this pass"
  possible_matches:
    - slug: long
      signals: [shared-deployer]
      contrary_signals:
        - "Census LONG is a stock-paired factory at app.long.xyz / @longdotxyz with LongLauncher 0x22e9…eeED"
        - "SCHIFFY is a graduation token at 0x42aF…1E18 created through that LongLauncher.create into a SCHIFFY/GLD Uniswap v4 pool; entity_kind token, not protocol"
        - "No shared domain or handle; DexScreener lists x.com/schiffygld, not @longdotxyz"
    - slug: bankr
      signals: [shared-address]
      contrary_signals:
        - "Census Bankr is an agent execution surface at bankr.bot / @bankrbot"
        - "SCHIFFY create tx 0x1202…a6cb calls LongLauncher, not a Bankr surface; Gecko labels the SCHIFFY/GLD pool dex bankr-robinhood because Doppler/Airlock is shared launch infrastructure"
        - "No shared domain or handle"
    - slug: artificial-inu
      signals: [shared-deployer]
      contrary_signals:
        - "Census Artificial Inu is $AI at 0x2E8c…1e18 paired to NVDA via LongLauncher, site artificialinu.com / @ArtificiallyInu"
        - "SCHIFFY is $SCHIFFY at 0x42aF…1E18 paired to GLD 0xC9a9…FC4e"
        - "No shared domain, handle, or reproduced address"

classification:
  primary_leaf: rwa-products/stock-paired-token
  secondary_leaves: []
  mechanism_tags: [stock-paired, rwa, amm, launchpad]
  ecosystem_role: graduation
  lifecycle: mainnet
  coverage_recommendation: seed
  evidence_state: partly-verified
  rationale: "Not in the 49-row census. Token 0x42aF…1E18 is an EIP-1167 DopplerERC20V1 clone with non-empty code on 4663; LongLauncher.create on 2026-08-29T18:24:23Z minted SCHIFFY into Uniswap v4 pool 0xc749…777e quoted against GLD 0xC9a9…FC4e (GET /rhj/assets row, census stock-tokens rail). Distinct from UBIK/GLD 0x8124…68Bd and CASHBIRD/GLD 0x38C8…1e18. No official handle this pass; x.com/schiffygld and schiffy.gold are unconfirmed-official. [R-1] [R-4] [R-5] [R-7] [R-8] [R-12] [R-15]"

qualifying:
  deployed_on_chain: { status: pass, claim_ids: [CLM-4, CLM-5, CLM-6], note: "" }
  native_play:       { status: pass, claim_ids: [CLM-1, CLM-15], note: "" }
  citable:           { status: pass, claim_ids: [CLM-2, CLM-3, CLM-4], note: "" }
  research_story:    { status: pass, claim_ids: [CLM-1, CLM-9, CLM-10], note: "" }

links:
  - { kind: site, url: "https://schiffy.gold", authenticity: unconfirmed }
  - { kind: x, url: "https://x.com/schiffygld", authenticity: unconfirmed }

deployments:
  - label: SCHIFFY token (EIP-1167 DopplerERC20V1 clone)
    role: token
    address:
      value: "0x42aFA2124ca5a2B83898E46B2dA9a190995b1E18"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T03:45:00Z
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
      seen: 2026-09-03T03:46:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-2, R-5]
  - label: DopplerERC20V1Factory (token creator_address_hash)
    role: factory
    address:
      value: "0x1B37D3a72082029c44B35B604Ea473617580b69a"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T03:46:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-1, R-3, R-5]
  - label: LongLauncher (create target)
    role: factory
    address:
      value: "0x22e99278308B393ea1260859B181AD7E78f5eeED"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T03:46:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-4, R-18]
  - label: Airlock (token owner)
    role: other
    address:
      value: "0xeb7C034704eF8Dcd2D32324c1545f62fB4aD0862"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T03:46:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-5, R-6, R-18]
  - label: GLD SPDR Gold Trust Robinhood Token (pair quote / rail)
    role: token
    address:
      value: "0xC9a981FEE1F9DEc688bb123ccDeCc63D0deBFC4e"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T03:46:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-7, R-12, R-16]

metrics:
  - { kind: volume_24h, value: 902731.89, currency: USD, as_of: 2026-09-03T03:47:30Z, window: 24h, method: "api.geckoterminal.com/api/v2/networks/robinhood/pools/0xc749412e31087a6e6f9210af575bc9100159fbc9f45da3ca8b26b31f3bf5777e volume_usd.h24", class: claim, receipt_ids: [R-8] }
  - { kind: tvl, value: 272759.82, currency: USD, as_of: 2026-09-03T03:47:30Z, window: point, method: "api.geckoterminal.com/api/v2/networks/robinhood/pools/0xc749412e31087a6e6f9210af575bc9100159fbc9f45da3ca8b26b31f3bf5777e reserve_in_usd (SCHIFFY/GLD pool, not an all-pools figure)", class: claim, receipt_ids: [R-8] }
  - { kind: market_cap, value: 1280826.03, currency: USD, as_of: 2026-09-03T03:47:30Z, window: point, method: "api.geckoterminal.com/api/v2/networks/robinhood/pools/0xc749412e31087a6e6f9210af575bc9100159fbc9f45da3ca8b26b31f3bf5777e fdv_usd (market_cap_usd null)", class: claim, receipt_ids: [R-8] }
  - { kind: holders, value: 1826, currency: null, as_of: 2026-09-03T03:45:00Z, window: point, method: "robinhoodchain.blockscout.com/api/v2/tokens/0x42aFA2124ca5a2B83898E46B2dA9a190995b1E18 holders_count", class: claim, receipt_ids: [R-1] }

reproductions:
  - { id: REP-1, method: explorer-rpc, chain_id: 4663, checked_at: 2026-09-03T03:46:00Z, receipt_ids: [R-5], result: "eth_chainId 0x1237 (4663). eth_blockNumber 0x32a6a44 (53111364). Token 0x42aF…1E18 eth_getCode 44 bytes EIP-1167 prefix 3d3d3d3d363d3d37363d73 implementation 0x3be8b97f…c599. name SCHIFFY, symbol SCHIFFY, decimals 18, totalSupply 993437836110533055084396978. owner() 0xeb7C034704eF8Dcd2D32324c1545f62fB4aD0862. factory() reverts. Impl 0x3Be8…C599 code 13927 B. DopplerERC20V1Factory 0x1B37…b69a code 1912 B. LongLauncher 0x22e9…eeED code 5826 B. GLD 0xC9a9…FC4e code 283 B. Airlock 0xeb7C…0862 code 5695 B. Launcher EOA 0xb6F4…e8F5 code 0x." }
  - { id: REP-2, method: explorer-ui, chain_id: 4663, checked_at: 2026-09-03T03:46:00Z, receipt_ids: [R-1, R-2, R-3, R-4, R-16, R-18], result: "Blockscout api/v2 token 0x42aF…1E18 name SCHIFFY symbol SCHIFFY holders_count 1826 total_supply 993437836110533055084396978 proxy_type eip1167 implementation DopplerERC20V1 0x3Be8…C599 is_verified true is_partially_verified true file_path src/tokens/DopplerERC20V1.sol. creator_address_hash DopplerERC20V1Factory 0x1B37…b69a. create tx 0x1202…a6cb 2026-08-29T18:24:23Z block 49365824 from EOA 0xb6F4…e8F5 to LongLauncher 0x22e9…eeED method create. LaunchCreated normalizedTicker SCHIFFY numeraire GLD 0xC9a9…FC4e. PoolManager Initialize id 0xc749…777e currency0 SCHIFFY currency1 GLD hooks 0x4e34…a544. GLD token name SPDR Gold Shares • Robinhood Token holders_count 14103." }
  - { id: REP-3, method: api, checked_at: 2026-09-03T03:47:30Z, receipt_ids: [R-7, R-8, R-9], result: "DexScreener latest/dex/tokens/0x42aF…1E18: 9 robinhood uniswap pairs; top SCHIFFY/GLD v4 0xc749…777e quote 0xC9a9…FC4e SPDR Gold Trust • Robinhood Token / GLD liquidity.usd 282567.78 volume.h24 916420.04 fdv 1451333 pairCreatedAt 1788027863000 (2026-08-29T18:24:23Z) info.websites [t.co/8zv22DgJl8] info.socials [x.com/schiffygld]. Gecko pool: volume_usd.h24 902731.89 reserve_in_usd 272759.82 fdv_usd 1280826.03 pool_created_at 2026-08-29T18:24:23Z dex bankr-robinhood. Gecko token volume_usd.h24 910709.10 (all pools, not the GLD book); Gecko total_supply 1e27 vs RPC totalSupply 993437836110533055084396978." }
  - { id: REP-4, method: api, checked_at: 2026-09-03T03:48:00Z, receipt_ids: [R-12], result: "GET api.robinhood.com/rhj/assets HTTP 200; assets length 194; one GLD hit tokenSymbol GLD tokenName SPDR Gold Trust • Robinhood Token contractAddress 0xC9a981FEE1F9DEc688bb123ccDeCc63D0deBFC4e chainId 4663 status ASSET_STATUS_ACTIVE isin US78463V1070. 0 SCHIFFY hits." }
  - { id: REP-5, method: explorer-ui, chain_id: 4663, checked_at: 2026-09-03T03:46:00Z, receipt_ids: [R-6, R-18], result: "Create tx logs: OwnershipTransferred newOwner Airlock 0xeb7C…0862; mint 1e27 to Airlock; PoolManager Initialize pool 0xc749…777e; DopplerHookInitializer Lock beneficiaries 0x21E2…7A66 5e16 (5%) and launcher 0xb6F4…e8F5 95e16 (95%); Airlock Create asset SCHIFFY numeraire GLD; LongLauncher LaunchCreated normalizedTicker SCHIFFY launcher 0xb6F4…e8F5 deployedAt 1788027863." }
  - { id: REP-6, method: official-crosslink, checked_at: 2026-09-03T03:49:38Z, receipt_ids: [R-7, R-13, R-19, R-20], result: "t.co/8zv22DgJl8 META refresh to https://schiffy.gold. Site title $SCHIFFY — He doesn't fetch. He accumulates. twitter:site and twitter:creator @schiffygld. Description: $SCHIFFY trades against tokenized $GLD on Robinhood Chain. HTML has no 0x42aFA212… string. @schiffygld bio includes 0x42afa2124ca5a2b83898e46b2da9a190995b1e18. Gecko token info websites [] twitter_handle null. Not bidirectional site-to-CA this pass; flag unconfirmed-official." }

claims:
  - { id: CLM-1, field: product.mechanism, value: "LongLauncher.create clones a 1e9-supply DopplerERC20V1 (EIP-1167) into a Uniswap v4 pool quoted against GLD. Tx 0x1202…a6cb from 0xb6F4…e8F5 minted SCHIFFY as the asset and seeded pool 0xc749…777e. Token owner() is Airlock. Gecko labels the book Bankr because Doppler/Airlock is shared; the create target is LongLauncher.", class: verified, observed_at: 2026-09-03T03:46:00Z, receipt_ids: [R-4, R-5, R-6, R-8, R-18], reproduction_ids: [REP-1, REP-2, REP-5], supersedes: null }
  - { id: CLM-2, field: identity.name, value: "SCHIFFY", class: verified, observed_at: 2026-09-03T03:45:00Z, receipt_ids: [R-1, R-4, R-5], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-3, field: identity.symbol, value: "SCHIFFY", class: verified, observed_at: 2026-09-03T03:45:00Z, receipt_ids: [R-1, R-4, R-5], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-4, field: deployment.address, value: "0x42aFA2124ca5a2B83898E46B2dA9a190995b1E18", class: verified, observed_at: 2026-09-03T03:46:00Z, receipt_ids: [R-1, R-5, R-18], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-5, field: deployment.address, value: "0x22e99278308B393ea1260859B181AD7E78f5eeED", class: verified, observed_at: 2026-09-03T03:46:00Z, receipt_ids: [R-4, R-18], reproduction_ids: [REP-2, REP-5], supersedes: null }
  - { id: CLM-6, field: lifecycle, value: mainnet, class: verified, observed_at: 2026-09-03T03:47:30Z, receipt_ids: [R-1, R-4, R-5, R-8], reproduction_ids: [REP-1, REP-2, REP-3], supersedes: null }
  - { id: CLM-7, field: taxonomy.primary-leaf, value: rwa-products/stock-paired-token, class: claim, observed_at: 2026-09-03T03:48:00Z, receipt_ids: [R-7, R-8, R-12], reproduction_ids: [], supersedes: null }
  - { id: CLM-8, field: identity.handle, value: "NULL — no bidirectional official handle; DexScreener info.socials lists x.com/schiffygld; schiffy.gold twitter:site @schiffygld; bio has CA; site HTML has no CA; flag unconfirmed-official", class: claim, observed_at: 2026-09-03T03:49:38Z, receipt_ids: [R-7, R-13, R-19], reproduction_ids: [], supersedes: null }
  - { id: CLM-9, field: relationship, value: "Pair quote GLD 0xC9a9…FC4e is SPDR Gold Trust • Robinhood Token in GET /rhj/assets (194 assets, 1 GLD hit, same address; Blockscout token name SPDR Gold Shares • Robinhood Token). GLD is a rail, not this subject. Distinct from UBIK/GLD 0x8124…68Bd pair 0x1f28…e676 and CASHBIRD/GLD 0x38C8…1e18 pair 0xf25f…fdfb. Distinct from census LONG / Bankr / Artificial Inu.", class: verified, observed_at: 2026-09-03T03:51:00Z, receipt_ids: [R-12, R-15, R-16], reproduction_ids: [REP-2, REP-4], supersedes: null }
  - { id: CLM-10, field: economics.metric, value: "SCHIFFY/GLD Uniswap v4 24h volume 902731.89 USD and reserve_in_usd 272759.82 at 2026-09-03T03:47:30Z (Gecko pool slice, not Gecko token all-pools 910709.10)", class: verified, observed_at: 2026-09-03T03:47:30Z, receipt_ids: [R-8, R-9], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-11, field: economics.metric, value: "DexScreener same pair liquidity.usd 282567.78 volume.h24 916420.04 fdv/marketCap 1451333 at 2026-09-03T03:45:00Z", class: verified, observed_at: 2026-09-03T03:45:00Z, receipt_ids: [R-7], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-12, field: economics.metric, value: 1826, class: verified, observed_at: 2026-09-03T03:45:00Z, receipt_ids: [R-1], reproduction_ids: [REP-2], supersedes: null }
  - { id: CLM-13, field: control.owner, value: "token owner() 0xeb7C034704eF8Dcd2D32324c1545f62fB4aD0862 Airlock; OwnershipTransferred to Airlock on create. factory() reverts.", class: verified, observed_at: 2026-09-03T03:46:00Z, receipt_ids: [R-5, R-6, R-18], reproduction_ids: [REP-1, REP-5], supersedes: null }
  - { id: CLM-14, field: control.privileged-role, value: "DopplerHookInitializer Lock beneficiaries: 0x21E2ce70511e4FE542a97708e89520471DAa7A66 5% and launcher EOA 0xb6F4976b0617245D99E412aA4Eeaa0C0287be8F5 95%", class: verified, observed_at: 2026-09-03T03:46:00Z, receipt_ids: [R-18], reproduction_ids: [REP-5], supersedes: null }
  - { id: CLM-15, field: other, value: "Pair asset is GLD 0xC9a981FEE1F9DEc688bb123ccDeCc63D0deBFC4e; venue is Uniswap v4 PoolManager 0x8366a39CC670B4001A1121B8F6A443A643e40951 pool 0xc749…777e", class: verified, observed_at: 2026-09-03T03:46:00Z, receipt_ids: [R-7, R-8, R-18], reproduction_ids: [REP-3, REP-5], supersedes: null }
  - { id: CLM-16, field: deployment.role, value: "Token creator_address_hash is DopplerERC20V1Factory 0x1B37…b69a; create target is LongLauncher 0x22e9…eeED, not Pons, PAIR, or hood.fun", class: verified, observed_at: 2026-09-03T03:46:00Z, receipt_ids: [R-1, R-3, R-4, R-5], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-17, field: taxonomy.chain-scope, value: robinhood-native, class: verified, observed_at: 2026-09-03T03:45:00Z, receipt_ids: [R-5, R-7], reproduction_ids: [REP-1, REP-3], supersedes: null }
  - { id: CLM-18, field: security.audit, value: "No audit report URL was located on Blockscout, DexScreener, Gecko, schiffy.gold, or X search this pass", class: unknown, observed_at: 2026-09-03T03:52:00Z, receipt_ids: [], reproduction_ids: [], supersedes: null }
  - { id: CLM-19, field: communications.status, value: "unconfirmed-official: x.com/schiffygld listed on DexScreener; bio has CA 0x42afa212…; schiffy.gold twitter:site @schiffygld; site HTML has no CA", class: claim, observed_at: 2026-09-03T03:49:38Z, receipt_ids: [R-7, R-13, R-19], reproduction_ids: [], supersedes: null }
  - { id: CLM-20, field: economics.metric, value: "Gecko fdv_usd 1280826.03; DexScreener fdv/marketCap 1451333. Gecko market_cap_usd null.", class: verified, observed_at: 2026-09-03T03:47:30Z, receipt_ids: [R-7, R-8], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-21, field: deployment.address, value: "0xC9a981FEE1F9DEc688bb123ccDeCc63D0deBFC4e", class: verified, observed_at: 2026-09-03T03:48:00Z, receipt_ids: [R-12, R-16], reproduction_ids: [REP-2, REP-4], supersedes: null }
  - { id: CLM-22, field: deployment.address, value: "0x3Be8B97Fd0e713B5aBE0649Fa830223B6B4BC599", class: verified, observed_at: 2026-09-03T03:46:00Z, receipt_ids: [R-2, R-5], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-23, field: identity.domain, value: "NULL — DexScreener info.websites t.co/8zv22DgJl8 expands to https://schiffy.gold; Gecko token info websites []; site HTML has no CA this pass", class: claim, observed_at: 2026-09-03T03:49:38Z, receipt_ids: [R-7, R-9, R-19, R-20], reproduction_ids: [], supersedes: null }
  - { id: CLM-24, field: candidate, value: "schiffy | SCHIFFY | NULL | NULL — discovery token not in census 49; DexScreener lists x.com/schiffygld and t.co/8zv22DgJl8 unconfirmed-official", class: claim, observed_at: 2026-09-03T03:52:00Z, receipt_ids: [R-1, R-7], reproduction_ids: [], supersedes: null }
  - { id: CLM-25, field: relationship, value: "Ticker collision: DexScreener search also returns SCHIFF/GLD 0x7b79…1e18 pair 0x232e…086e liq 33669.75 (app.long.xyz token page / x.com/SchiffGoldInu). Subject is 0x42aF…1E18 only.", class: claim, observed_at: 2026-09-03T03:51:00Z, receipt_ids: [R-15], reproduction_ids: [], supersedes: null }
  - { id: CLM-26, field: other, value: "schiffy.gold meta description says every trade burns $SCHIFFY and pays gold back to holders. RPC totalSupply 993437836110533055084396978 vs create mint 1e27. Burn path not read in verified DopplerERC20V1 source this pass.", class: claim, observed_at: 2026-09-03T03:49:38Z, receipt_ids: [R-1, R-5, R-19], reproduction_ids: [], supersedes: null }

conflicts: []

events:
  - id: EVT-1
    type: onchain
    title: "Gecko SCHIFFY/GLD 24h volume $903k, liquidity $273k"
    summary: "Gecko pool 0xc749…777e volume_usd.h24 902731 reserve_in_usd 272759 fdv_usd 1280826. DexScreener same pair liquidity.usd 282567 volume.h24 916420."
    occurred_at: 2026-09-03T03:47:30Z
    observed_at: 2026-09-03T03:47:30Z
    affected_fields: [economics.metric, activity.status]
    evidence_state: verified
    impact: material
    site_recommendation: both
    channel_recommendation: none
    receipt_ids: [R-8, R-7]
  - id: EVT-2
    type: ct
    title: "@schiffygld posted PvE Season on RH"
    summary: "Account listed on DexScreener as the token social. Bio includes CA 0x42afa212…. Post: PvE Season on RH. No site URL in the bio this pass."
    occurred_at: 2026-09-03T01:40:57Z
    observed_at: 2026-09-03T03:49:00Z
    affected_fields: [identity.handle, communications.status]
    evidence_state: claim
    impact: routine
    site_recommendation: none
    channel_recommendation: none
    receipt_ids: [R-13]
  - id: EVT-3
    type: ct
    title: "@schiffygld called it the long xyz contract"
    summary: "Reply: It's literally just the long xyz contract and I am a dog thank you very much. Matches LongLauncher.create on 0x22e9…eeED."
    occurred_at: 2026-08-30T18:06:35Z
    observed_at: 2026-09-03T03:50:00Z
    affected_fields: [relationship, communications.status]
    evidence_state: claim
    impact: routine
    site_recommendation: feed
    channel_recommendation: none
    receipt_ids: [R-21]
  - id: EVT-4
    type: onchain
    title: "LongLauncher create minted SCHIFFY against GLD"
    summary: "Tx 0x1202…a6cb from 0xb6F4…e8F5 at 2026-08-29T18:24:23Z; LaunchCreated normalizedTicker SCHIFFY; PoolManager Initialize poolId 0xc749…777e."
    occurred_at: 2026-08-29T18:24:23Z
    observed_at: 2026-09-03T03:46:00Z
    affected_fields: [deployment.address, lifecycle, product.mechanism]
    evidence_state: verified
    impact: material
    site_recommendation: profile
    channel_recommendation: none
    receipt_ids: [R-4, R-18]

receipts:
  - { id: R-1, publisher: Blockscout, title: "Token 0x42aF…1E18 SCHIFFY / SCHIFFY", url: "https://robinhoodchain.blockscout.com/address/0x42aFA2124ca5a2B83898E46B2dA9a190995b1E18", published_at: null, accessed_at: 2026-09-03T03:45:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-2, CLM-3, CLM-4, CLM-6, CLM-12, CLM-16, CLM-24, CLM-26], excerpt: "hash 0x42aFA2124ca5a2B83898E46B2dA9a190995b1E18 name SCHIFFY is_contract true is_verified true proxy_type eip1167 implementations DopplerERC20V1 0x3Be8B97Fd0e713B5aBE0649Fa830223B6B4BC599. token symbol SCHIFFY decimals 18 total_supply 993437836110533055084396978 holders_count 1826 type ERC-20. creator_address_hash 0x1B37D3a72082029c44B35B604Ea473617580b69a creation_transaction_hash 0x12024acb89b90b9390abc00dc9fec26dbd85c4644ce10b448696a190e5b6a6cb." }
  - { id: R-2, publisher: Blockscout, title: "Address 0x3Be8…C599 DopplerERC20V1", url: "https://robinhoodchain.blockscout.com/address/0x3Be8B97Fd0e713B5aBE0649Fa830223B6B4BC599", published_at: null, accessed_at: 2026-09-03T03:46:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-22], excerpt: "hash 0x3Be8B97Fd0e713B5aBE0649Fa830223B6B4BC599 name DopplerERC20V1 is_contract true is_verified true. Smart-contract compiler v0.8.26+commit.8a97fa7a is_partially_verified true file_path src/tokens/DopplerERC20V1.sol verified_at 2026-07-01T19:42:07Z. creator_address_hash 0x1B37D3a72082029c44B35B604Ea473617580b69a." }
  - { id: R-3, publisher: Blockscout, title: "Address 0x1B37…b69a DopplerERC20V1Factory", url: "https://robinhoodchain.blockscout.com/address/0x1B37D3a72082029c44B35B604Ea473617580b69a", published_at: null, accessed_at: 2026-09-03T03:46:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-16], excerpt: "hash 0x1B37D3a72082029c44B35B604Ea473617580b69a name DopplerERC20V1Factory is_contract true is_verified true creator_address_hash 0x4482f353A46a4d4088F9550EB2C9cc92D0d5F768 creation_transaction_hash 0xb53eb8261ef8e76f3bb89c08dd5ca742408ec9911ed5cb0a32ac3a92dc59f7c9." }
  - { id: R-4, publisher: Blockscout, title: "create tx 0x12024acb…a6cb", url: "https://robinhoodchain.blockscout.com/tx/0x12024acb89b90b9390abc00dc9fec26dbd85c4644ce10b448696a190e5b6a6cb", published_at: 2026-08-29T18:24:23Z, accessed_at: 2026-09-03T03:46:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-2, CLM-3, CLM-5, CLM-6, CLM-16, EVT-4], excerpt: "timestamp 2026-08-29T18:24:23.000000Z status ok result success block_number 49365824 from 0xb6F4976b0617245D99E412aA4Eeaa0C0287be8F5 (is_contract false) to LongLauncher 0x22e99278308B393ea1260859B181AD7E78f5eeED method create. decoded create data tokenFactory 0x1B37…b69a numeraire 0xC9a9…FC4e name/symbol SCHIFFY." }
  - { id: R-5, publisher: Robinhood Chain RPC, title: "eth_getCode, name, symbol, owner() on SCHIFFY", url: "https://rpc.mainnet.chain.robinhood.com", published_at: null, accessed_at: 2026-09-03T03:46:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-2, CLM-3, CLM-4, CLM-6, CLM-13, CLM-16, CLM-17, CLM-22, CLM-26], excerpt: "eth_chainId 0x1237 (4663). eth_blockNumber 0x32a6a44 (53111364). Token code 44 B EIP-1167 impl 0x3be8b97f…c599. name SCHIFFY symbol SCHIFFY decimals 18 totalSupply 993437836110533055084396978. owner() 0xeb7c034704ef8dcd2d32324c1545f62fb4ad0862. factory() reverts. Factory 0x1B37…b69a code 1912 B. Impl code 13927 B. GLD code 283 B. LongLauncher code 5826 B." }
  - { id: R-6, publisher: Blockscout, title: "Airlock 0xeb7C…0862", url: "https://robinhoodchain.blockscout.com/address/0xeb7C034704eF8Dcd2D32324c1545f62fB4aD0862", published_at: null, accessed_at: 2026-09-03T03:46:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-13], excerpt: "hash 0xeb7C034704eF8Dcd2D32324c1545f62fB4aD0862 name Airlock is_contract true is_verified true creator_address_hash 0x78C84FE5D1837244DC72D5B9DE7db930ab0C02b9." }
  - { id: R-7, publisher: DexScreener, title: "latest/dex/tokens SCHIFFY", url: "https://api.dexscreener.com/latest/dex/tokens/0x42aFA2124ca5a2B83898E46B2dA9a190995b1E18", published_at: null, accessed_at: 2026-09-03T03:45:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-7, CLM-8, CLM-11, CLM-15, CLM-17, CLM-19, CLM-20, CLM-23, CLM-24, EVT-1], excerpt: "9 robinhood uniswap pairs. Top pairAddress 0xc749412e31087a6e6f9210af575bc9100159fbc9f45da3ca8b26b31f3bf5777e labels v4 base SCHIFFY quote SPDR Gold Trust • Robinhood Token / GLD 0xC9a981FEE1F9DEc688bb123ccDeCc63D0deBFC4e liquidity.usd 282567.78 volume.h24 916420.04 fdv 1451333 pairCreatedAt 1788027863000. info.websites [{url https://t.co/8zv22DgJl8}] info.socials [{url https://x.com/schiffygld, type twitter}]." }
  - { id: R-8, publisher: GeckoTerminal, title: "SCHIFFY/GLD pool", url: "https://api.geckoterminal.com/api/v2/networks/robinhood/pools/0xc749412e31087a6e6f9210af575bc9100159fbc9f45da3ca8b26b31f3bf5777e", published_at: null, accessed_at: 2026-09-03T03:47:30Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-6, CLM-7, CLM-10, CLM-15, CLM-20, EVT-1], excerpt: "name SCHIFFY / gld pool_created_at 2026-08-29T18:24:23Z fdv_usd 1280826.027 market_cap_usd null volume_usd.h24 902731.890089242 reserve_in_usd 272759.8247 transactions.h24 buys 3201 sells 3341. dex bankr-robinhood quote robinhood_0xc9a981fee1f9dec688bb123ccdecc63d0debfc4e." }
  - { id: R-9, publisher: GeckoTerminal, title: "SCHIFFY token", url: "https://api.geckoterminal.com/api/v2/networks/robinhood/tokens/0x42aFA2124ca5a2B83898E46B2dA9a190995b1E18", published_at: null, accessed_at: 2026-09-03T03:49:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-10, CLM-23], excerpt: "name SCHIFFY symbol SCHIFFY decimals 18 total_supply 1e27 price_usd 0.001281295603 fdv_usd 1281295.60305384 market_cap_usd null volume_usd.h24 910709.104651367 total_reserve_in_usd 177935.25. coingecko_coin_id null. Top pool 0xc749…777e." }
  - { id: R-10, publisher: DexScreener, title: "SCHIFFY/GLD pair page", url: "https://dexscreener.com/robinhood/0xc749412e31087a6e6f9210af575bc9100159fbc9f45da3ca8b26b31f3bf5777e", published_at: null, accessed_at: 2026-09-03T03:45:00Z, kind: third-party-data, authority: aggregator, authenticity: unconfirmed, supports: [], excerpt: "SCHIFFY/GLD on Robinhood / Uniswap v4. Pair 0xc749…777e. Token 0x42aF…1E18. Quote GLD 0xC9a9…FC4e." }
  - { id: R-11, publisher: GeckoTerminal, title: "SCHIFFY/GLD pool page", url: "https://www.geckoterminal.com/robinhood/pools/0xc749412e31087a6e6f9210af575bc9100159fbc9f45da3ca8b26b31f3bf5777e", published_at: null, accessed_at: 2026-09-03T03:51:00Z, kind: third-party-data, authority: aggregator, authenticity: unconfirmed, supports: [], excerpt: "title SCHIFFY/gld - SCHIFFY Price on Bankr (Robinhood) | GeckoTerminal. Pool 0xc749…777e SCHIFFY 0x42af…1e18 GLD 0xc9a9…fc4e." }
  - { id: R-12, publisher: Robinhood, title: "GET /rhj/assets Stock Token registry", url: "https://api.robinhood.com/rhj/assets", published_at: null, accessed_at: 2026-09-03T03:48:00Z, kind: docs, authority: primary, authenticity: confirmed, supports: [CLM-9, CLM-21], excerpt: "HTTP 200. assets length 194. One GLD hit: tokenSymbol GLD tokenName SPDR Gold Trust • Robinhood Token deployments contractAddress 0xC9a981FEE1F9DEc688bb123ccDeCc63D0deBFC4e chainId 4663 status ASSET_STATUS_ACTIVE isin US78463V1070. 0 SCHIFFY hits." }
  - { id: R-13, publisher: "@schiffygld", title: "PvE Season on RH", url: "https://x.com/schiffygld/status/2095326148922098047", published_at: 2026-09-03T01:40:57Z, accessed_at: 2026-09-03T03:49:00Z, kind: social, authority: social, authenticity: unconfirmed, supports: [CLM-8, CLM-19, EVT-2], excerpt: "Account Schiffy @schiffygld bio: He Doesn't Fetch. He Accumulates. Meme Paired with GLD on Robinhood Chain. Gold + Games by @Moku_HQ. 0x42afa2124ca5a2b83898e46b2da9a190995b1e18. Followers 784. Post: PvE Season on RH. No schiffy.gold URL in the bio this pass." }
  - { id: R-14, publisher: t.co, title: "t.co/8zv22DgJl8 DexScreener website field", url: "https://t.co/8zv22DgJl8", published_at: null, accessed_at: 2026-09-03T03:49:00Z, kind: other, authority: unknown, authenticity: unconfirmed, supports: [CLM-23], excerpt: "HTTP 200. noscript META refresh URL=https://schiffy.gold. title https://schiffy.gold. location.replace https://schiffy.gold." }
  - { id: R-15, publisher: DexScreener, title: "search q=SCHIFF / UBIK / CASHBIRD", url: "https://api.dexscreener.com/latest/dex/search?q=SCHIFFY", published_at: null, accessed_at: 2026-09-03T03:51:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-9, CLM-25], excerpt: "Subject SCHIFFY/GLD 0x42aFA2124ca5a2B83898E46B2dA9a190995b1E18 pair 0xc749…777e. UBIK/GLD 0x812486EAea648819853F8E372dc9f1516C7868Bd pair 0x1f28c0c3938fd48947bdb02c43377534ef0a3ffb23945e68052bcaaec1d2e676. CASHBIRD/GLD 0x38C8f642A04FEaC9899990276b4207fE4F621e18 pair 0xf25fc6cf0b524e236ffe33e762caee47ef7284ec65c175900a1542a6bc91fdfb. SCHIFF/GLD 0x7b799F6274E672Fc324f714880c489BC09591e18 pair 0x232ee95d4e96ea725c2b9a080d9267fbd6c4d5c7aa30fabfd4976c12bd61086e." }
  - { id: R-16, publisher: Blockscout, title: "Token 0xC9a9…FC4e SPDR Gold Shares • Robinhood Token / GLD", url: "https://robinhoodchain.blockscout.com/address/0xC9a981FEE1F9DEc688bb123ccDeCc63D0deBFC4e", published_at: null, accessed_at: 2026-09-03T03:46:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-9, CLM-21], excerpt: "hash 0xC9a981FEE1F9DEc688bb123ccDeCc63D0deBFC4e name BeaconProxy is_contract true is_verified true proxy_type eip1967_beacon implementations Stock 0xb35490d6f9163DE4F80d88dc75c3516eb64C5aE2. token name SPDR Gold Shares • Robinhood Token symbol GLD decimals 18 total_supply 8611061000000000000000 holders_count 14103 type ERC-20 exchange_rate 404.2." }
  - { id: R-17, publisher: Blockscout, title: "LongLauncher 0x22e9…eeED", url: "https://robinhoodchain.blockscout.com/address/0x22e99278308B393ea1260859B181AD7E78f5eeED", published_at: null, accessed_at: 2026-09-03T03:46:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-5], excerpt: "hash 0x22e99278308B393ea1260859B181AD7E78f5eeED name LongLauncher is_contract true is_verified true. Smart-contract compiler v0.8.26 file_path src/LongLauncher.sol is_partially_verified false verified_at 2026-07-14T11:23:57Z. creator_address_hash 0x1Ae51740cE21CAEbB8C92C457Ad7fc1bdAAe5305." }
  - { id: R-18, publisher: Blockscout, title: "create tx logs LaunchCreated / Initialize / Lock", url: "https://robinhoodchain.blockscout.com/tx/0x12024acb89b90b9390abc00dc9fec26dbd85c4644ce10b448696a190e5b6a6cb", published_at: 2026-08-29T18:24:23Z, accessed_at: 2026-09-03T03:46:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-4, CLM-5, CLM-13, CLM-14, CLM-15, EVT-4], excerpt: "OwnershipTransferred newOwner 0xeb7C…0862. PoolManager Initialize id 0xc749412e31087a6e6f9210af575bc9100159fbc9f45da3ca8b26b31f3bf5777e currency0 0x42aF…1E18 currency1 0xC9a9…FC4e hooks 0x4e34…a544. Lock beneficiaries 0x21E2…7A66 50000000000000000 and 0xb6F4…e8F5 950000000000000000. LaunchCreated normalizedTicker SCHIFFY launcher 0xb6F4…e8F5 deployedAt 1788027863." }
  - { id: R-19, publisher: GeckoTerminal, title: "SCHIFFY token info", url: "https://api.geckoterminal.com/api/v2/networks/robinhood/tokens/0x42aFA2124ca5a2B83898E46B2dA9a190995b1E18/info", published_at: null, accessed_at: 2026-09-03T03:49:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-8, CLM-19, CLM-23, CLM-26], excerpt: "name SCHIFFY symbol SCHIFFY websites [] discord_url null telegram_handle null twitter_handle null description null gt_verified false. holders.count 1774 last_updated 2026-09-03T03:30:27Z." }
  - { id: R-20, publisher: schiffy.gold, title: "$SCHIFFY site", url: "https://schiffy.gold/", published_at: null, accessed_at: 2026-09-03T03:49:38Z, kind: official-site, authority: unknown, authenticity: unconfirmed, supports: [CLM-23], excerpt: "HTTP 200 Vercel. title $SCHIFFY — He doesn't fetch. He accumulates. twitter:site @schiffygld twitter:creator @schiffygld. meta description: $SCHIFFY trades against tokenized $GLD on Robinhood Chain; every trade burns $SCHIFFY and pays gold back to holders, on-chain. HTML has no 0x42aFA212 string this pass." }
  - { id: R-21, publisher: "@schiffygld", title: "It's literally just the long xyz contract", url: "https://x.com/schiffygld/status/2094124638338961471", published_at: 2026-08-30T18:06:35Z, accessed_at: 2026-09-03T03:50:00Z, kind: social, authority: social, authenticity: unconfirmed, supports: [EVT-3], excerpt: "It's literally just the long xyz contract and I am a dog thank you very much." }

gaps:
  - { priority: P0, question: "Does schiffy.gold bidirectionally list token 0x42aF…1E18 (CA in HTML, copy button, or docs), and does @schiffygld bio or a pinned post list schiffy.gold?", checked: "Site twitter:site @schiffygld; HTML has no 0x42aFA212; bio has CA and no domain; DexScreener t.co expands to schiffy.gold, 2026-09-03", next: "re-read schiffy.gold after a client render that injects the CA; re-read the X bio for a domain" }
  - { priority: P1, question: "Is 0x21E2…7A66 the LONG protocol fee split, and does verified DopplerHookInitializer source leave other privileged paths?", checked: "Lock log 5%/95% split; token owner() Airlock; factory() reverts, 2026-09-03", next: "read DopplerHookInitializer and LongLauncher fee-split in verified source on Blockscout" }
  - { priority: P1, question: "Does the site burn/payout copy match a live hook fee path, and why is RPC totalSupply 993.4M against a 1e9 mint?", checked: "Create minted 1e27; RPC totalSupply 993437836110533055084396978; site meta says every trade burns SCHIFFY, 2026-09-03", next: "eth_call remaining supply math and read DopplerERC20V1 burn/fee functions on the explorer" }
  - { priority: P2, question: "Which other robinhood SCHIFFY or SCHIFF tickers stay live besides 0x42aF…1E18?", checked: "DexScreener search listed SCHIFF/GLD 0x7b79…1e18 liq ~$33.7k plus secondary SCHIFFY/USDG and SCHIFFY/ETH books, 2026-09-03", next: "re-run search if a second SCHIFFY book crosses the liquidity bar" }
---

# SCHIFFY — research packet

## What it is

A one-billion-supply ERC-20 cloned into a Uniswap v4 pool quoted against GLD. LongLauncher deploys SCHIFFY in one create call and seeds the SCHIFFY/GLD book. Traders buy and sell SCHIFFY on Uniswap v4. GLD is the SPDR Gold Trust Robinhood Token rail, not this subject. No official handle was set this pass. DexScreener lists x.com/schiffygld and t.co/8zv22DgJl8 (https://schiffy.gold); flag unconfirmed-official.

Themes: memecoin, stock-paired:GLD, rwa

## Why it matters

The SCHIFFY/GLD Uniswap v4 book showed about $903k of 24h volume on Gecko at collection, with the quote token using the GLD ticker via Robinhood's stock-token registry. GET /rhj/assets has a GLD row at 0xC9a9…FC4e. Separate live names, UBIK and CASHBIRD, also quote that rail.

## What could go wrong

USD liquidity figures on the SCHIFFY/GLD book count both sides, and the quote side is GLD, not USDG. Gecko labels the pool Bankr; the create target is LongLauncher. Other contracts on this chain reuse SCHIFF or quote the same GLD rail. No bidirectional official handle was located. Site copy about a per-trade burn was not reproduced in verified source this pass.

## Product and mechanics

LongLauncher 0x22e9…eeED clones DopplerERC20V1 via EIP-1167. create from 0xb6F4…e8F5 at 2026-08-29T18:24:23Z minted SCHIFFY supply 1e9*1e18 into Uniswap v4 poolId 0xc749…777e. creator_address_hash is DopplerERC20V1Factory 0x1B37…b69a. owner() on the token returns Airlock 0xeb7C…0862. [verified R-4 R-5 R-18]

PoolManager is 0x8366…0951. Hooks are 0x4e34…a544. Secondary SCHIFFY/USDG and SCHIFFY/ETH books exist on DexScreener with far less liquidity than the GLD book. Gecko dex id is bankr-robinhood because Doppler/Airlock is shared with Bankr launches; the create tx is LongLauncher. [verified R-7 R-8 R-18]

## Control and security

token owner() is Airlock. factory() reverts. DopplerHookInitializer Lock splits 5% to 0x21E2…7A66 and 95% to the launcher EOA 0xb6F4…e8F5. [verified R-5 R-18]

DopplerERC20V1 is partially verified on Blockscout (src/tokens/DopplerERC20V1.sol, compiler v0.8.26). The token is an EIP-1167 shell. No audit report URL was located this pass. [verified R-1 R-2] [unknown]

## Team and provenance

No official domain or handle was filed. DexScreener info.websites is t.co/8zv22DgJl8, which expands to https://schiffy.gold. That page titles $SCHIFFY and sets twitter:site to @schiffygld, with no CA in the HTML this pass. x.com/schiffygld is listed on DexScreener; the bio includes CA 0x42afa212… and @Moku_HQ, with no domain. Flag unconfirmed-official. [claim R-7 R-13 R-19 R-20]

GLD 0xC9a9…FC4e is the census stock-token rail (GET /rhj/assets). Discovery-inventory lists ubik as a GLD-book candidate. CASHBIRD/GLD 0x38C8…1e18 is a separate CA on the same rail. Do not merge those CAs. [verified R-12 R-15]

## Economics and activity

SCHIFFY/GLD Uniswap v4 24h volume is 902731.89 USD and reserve_in_usd is 272759.82 at 2026-09-03T03:47:30Z from the Gecko pool endpoint. fdv_usd is 1280826.03. Gecko token volume_usd.h24 is 910709.10 across all pools, not the GLD book. [claim R-8 R-9]

DexScreener same pair: liquidity.usd 282567.78, volume.h24 916420.04, fdv/marketCap 1451333. Blockscout holders_count 1826. Pair created 2026-08-29T18:24:23Z. [claim R-1 R-7]

## Material risks

- Quote token GLD is a Robinhood Stock Token rail shared with other pairs, including UBIK/GLD and CASHBIRD/GLD. [verified R-12 R-15]
- Pool USD reserve is SCHIFFY plus GLD, not a USDG or WETH backstop. [claim R-7 R-8]
- Gecko dex label Bankr does not match the LongLauncher create target. [verified R-4 R-8]
- No official handle or domain this pass; X and schiffy.gold are unconfirmed-official. [claim R-7 R-13 R-19]
- Other SCHIFF tickers exist on robinhood. [claim R-15]
- Site burn copy was not matched to verified source this pass. [claim R-19]
- No audit report URL this pass. [unknown]

## Verification passes

- Receipts: Blockscout token/impl/factory/Airlock/GLD/LongLauncher and the create tx plus logs, RPC name/symbol/owner/eth_getCode, DexScreener token and search, Gecko pool/token/info, /rhj/assets, @schiffygld, t.co, and schiffy.gold were opened on 2026-09-03 and excerpts copied from the responses. [verified R-1 R-5 R-8 R-12]
- Numbers: 902731.89 is the Gecko SCHIFFY/GLD pool 24h volume, not the 910709.10 token all-pools figure. Reserve 272759.82 is that pool. DexScreener 916420.04 / 282567.78 is the same pair, different aggregator. RPC totalSupply 993437836110533055084396978 vs Gecko token total_supply 1e27. [claim R-7 R-8 R-9]
- Adversarial: the strongest contrary reading is that SCHIFFY is UBIK or CASHBIRD, or that it is a Bankr product, or that @schiffygld is official. UBIK is 0x8124…68Bd. CASHBIRD is 0x38C8…1e18. The create target is LongLauncher. The site HTML has no CA. [inference R-4 R-13 R-15 R-19]

## Operations log

- Base: `git -C /Users/harsharnsingh/proofline-pr59 rev-parse origin/main` → 334ca0619aa62e922da83f46de021f06d12348cf. Census 49 slugs have no schiffy / SCHIFFY / 0x42aF…1E18. content/dependencies/stock-tokens.yaml has GLD at 0xC9a9…FC4e. possible_matches limited to census slugs (long, bankr, artificial-inu); UBIK/CASHBIRD/SCHIFF recorded on CLM-9 / CLM-25 / R-15 because packet.mjs refuses non-census possible_matches.
- Explorer: Blockscout api/v2 token, impl, factory, Airlock, GLD, LongLauncher, create 0x1202…a6cb, LaunchCreated / Initialize / Lock logs, holders. RPC eth_getCode/eth_call with Mozilla UA at block 53111364.
- Aggregators: DexScreener latest/dex/tokens and search q=SCHIFFY / UBIK / CASHBIRD / SCHIFF; Gecko pool (dex bankr-robinhood), token, token/info (Mozilla UA; first pool/token GETs 429, pool 200 on retry).
- Registry: GET api.robinhood.com/rhj/assets 194 assets, 1 GLD at 0xC9a9…FC4e.
- Social: X user schiffygld; keyword SCHIFFY; from:schiffygld.
- Site: t.co/8zv22DgJl8 → https://schiffy.gold; HTML title and twitter:site, no CA.
- Failed: Gecko token GET 429 on first try; t.co does not 3xx (interstitial HTML); schiffy.gold HTML has no 0x string; GET schiffy packet path on grok-heavy/20260903/WORK-20260903-grok-heavy-icarus-research was 404 before this PUT.
- Time: collection 2026-09-03T03:45Z–2026-09-03T03:52Z.
