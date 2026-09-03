---
# Packet v2 (docs/research-system.md §5). Seed with Icarus What-it-is + events.
contract_version: proofline-research-v2
work_id: WORK-20260903-grok-heavy-icarus-research
producer: grok-heavy
role: collector
base_sha: 334ca0619aa62e922da83f46de021f06d12348cf
slug: debtcoin
name: DEBTCOIN
packet_tier: seed
as_of: 2026-09-03T03:55:00Z
prior_packet: null
supersedes: null
owned_slugs: [debtcoin]
allowed_paths:
  - research/inbox/packets/debtcoin/WORK-20260903-grok-heavy-icarus-research.md

identity:
  canonical_name: DEBTCOIN
  aliases: [Debtcoin]
  symbols: [DEBTCOIN]
  entity_kind: token
  chain_scope: robinhood-native
  official_domain: "NULL — DexScreener info.websites empty; Gecko token info websites []; tokenURI social_links Website is an X status URL not a domain; Blockscout token page lists no homepage this pass"
  official_handle: "NULL — DexScreener info.socials empty; Gecko token info twitter_handle null telegram_handle null; tokenURI social_links is https://x.com/IceManDrakee/status/2094949272131424692 not a bidirectional handle; X user search for DEBTCOIN returned unrelated accounts; flag unconfirmed-official"
  repository: "NULL — no GitHub org or repository URL on DexScreener, Gecko, Blockscout, IPFS tokenURI, or X search this pass"
  possible_matches:
    - slug: long
      signals: [shared-deployer]
      contrary_signals:
        - "Census LONG is a stock-paired factory at app.long.xyz / @longdotxyz with LongLauncher 0x22e9…eeED; entity_kind protocol"
        - "DEBTCOIN is a graduation token at 0x55D9…1E18 created through that LongLauncher.create into a DEBTCOIN/SGOV Uniswap v4 pool; entity_kind token"
        - "No shared domain or handle this pass"
    - slug: bankr
      signals: [shared-address]
      contrary_signals:
        - "Census Bankr is an agent execution surface at bankr.bot / @bankrbot"
        - "DEBTCOIN create tx 0x9718…07bb calls LongLauncher, not a Bankr surface; Gecko labels the DEBTCOIN/SGOV pool dex bankr-robinhood because Doppler/Airlock is shared launch infrastructure"
        - "No shared domain or handle"
    - slug: johndog
      signals: [other]
      contrary_signals:
        - "JOHNDOG is John Dog at 0x64bc…1e18 paired to the same SGOV rail 0x92FD…F9B5 via Uniswap v4 0xa934…1e0a; DexScreener websites dexxyswap.com"
        - "DEBTCOIN is Debtcoin at 0x55D9…1E18 pair 0x3458…3e6d; DexScreener websites [] socials []"
        - "Same DopplerERC20V1 implementation and Airlock owner(); different CA, name, ticker, pair id, and create tx"
    - slug: artificial-inu
      signals: [shared-deployer]
      contrary_signals:
        - "Census Artificial Inu is $AI at 0x2E8c…1e18 paired to NVDA via LongLauncher, site artificialinu.com / @ArtificiallyInu"
        - "DEBTCOIN is 0x55D9…1E18 paired to SGOV 0x92FD…F9B5"
        - "No shared domain, handle, or reproduced address"

classification:
  primary_leaf: rwa-products/stock-paired-token
  secondary_leaves: []
  mechanism_tags: [stock-paired, rwa, amm, launchpad]
  ecosystem_role: graduation
  lifecycle: mainnet
  coverage_recommendation: seed
  evidence_state: partly-verified
  rationale: "Not in the 49-row census. Token 0x55D9…1E18 is an EIP-1167 DopplerERC20V1 clone with non-empty code on 4663; LongLauncher.create from 0x4B10…8D76 minted Debtcoin / DEBTCOIN into Uniswap v4 pool 0x3458…3e6d quoted against SGOV 0x92FD…F9B5, a Robinhood Stock Token rail in GET /rhj/assets. Distinct from JOHNDOG/SGOV. No official site or handle this pass. [R-1] [R-4] [R-5] [R-7] [R-10] [R-18]"

qualifying:
  deployed_on_chain: { status: pass, claim_ids: [CLM-4, CLM-5, CLM-6], note: "" }
  native_play:       { status: pass, claim_ids: [CLM-1, CLM-15], note: "" }
  citable:           { status: pass, claim_ids: [CLM-2, CLM-3, CLM-4], note: "" }
  research_story:    { status: pass, claim_ids: [CLM-1, CLM-9, CLM-10], note: "" }

links:
  - { kind: other, url: "https://x.com/IceManDrakee/status/2094949272131424692", authenticity: unconfirmed }

deployments:
  - label: DEBTCOIN token (EIP-1167 DopplerERC20V1 clone)
    role: token
    address:
      value: "0x55D9bC094C032cE0F4c57Cb09e6AB8F225531E18"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T03:47:00Z
      exists_on_4663: true
      explorer_source_verified: true
      explorer_source_verification_scope: proxy-shell-only
      implementation_source_verified: true
    receipt_ids: [R-1, R-5, R-16]
  - label: DopplerERC20V1 implementation
    role: implementation
    address:
      value: "0x3Be8B97Fd0e713B5aBE0649Fa830223B6B4BC599"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T03:47:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-2, R-5]
  - label: DopplerERC20V1Factory
    role: factory
    address:
      value: "0x1B37D3a72082029c44B35B604Ea473617580b69a"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T03:47:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-3, R-4, R-5]
  - label: LongLauncher (create tx to)
    role: factory
    address:
      value: "0x22e99278308B393ea1260859B181AD7E78f5eeED"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T03:50:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-4, R-15, R-16]
  - label: Airlock (token owner())
    role: admin
    address:
      value: "0xeb7C034704eF8Dcd2D32324c1545f62fB4aD0862"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T03:47:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-5, R-14, R-16]
  - label: Quote asset SGOV stock token (rail)
    role: token
    address:
      value: "0x92FD66527192E3e61d4DDd13322Aa222DE86F9B5"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T03:48:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-6, R-10, R-13]

metrics:
  - { kind: tvl, value: 213908.99, currency: USD, as_of: 2026-09-03T03:54:00Z, window: point, method: "api.dexscreener.com/latest/dex/pairs/robinhood/0x3458e9d5e42fc937c6fe9fe62e41e1c76bd9d808d431c57dac50d5cef6483e6d liquidity.usd (DEBTCOIN/SGOV Uniswap v4, not an all-pools figure)", class: claim, receipt_ids: [R-7] }
  - { kind: volume_24h, value: 1593779.02, currency: USD, as_of: 2026-09-03T03:54:00Z, window: 24h, method: "api.dexscreener.com/latest/dex/pairs/robinhood/0x3458…3e6d volume.h24", class: claim, receipt_ids: [R-7] }
  - { kind: market_cap, value: 592638, currency: USD, as_of: 2026-09-03T03:54:00Z, window: point, method: "api.dexscreener.com/latest/dex/pairs/robinhood/0x3458…3e6d fdv/marketCap", class: claim, receipt_ids: [R-7] }
  - { kind: volume_24h, value: 1849712.18825338, currency: USD, as_of: 2026-09-03T03:48:00Z, window: 24h, method: "api.geckoterminal.com/api/v2/networks/robinhood/pools/0x3458…3e6d volume_usd.h24 (Gecko pool slice, not token all-pools)", class: claim, receipt_ids: [R-8] }
  - { kind: market_cap, value: 575084.1709, currency: USD, as_of: 2026-09-03T03:48:00Z, window: point, method: "api.geckoterminal.com/api/v2/networks/robinhood/pools/0x3458…3e6d fdv_usd (market_cap_usd null)", class: claim, receipt_ids: [R-8] }
  - { kind: tvl, value: -355304.709249059, currency: USD, as_of: 2026-09-03T03:48:00Z, window: point, method: "api.geckoterminal.com/api/v2/networks/robinhood/pools/0x3458…3e6d reserve_in_usd (negative this pass; do not treat as a USD reserve)", class: claim, receipt_ids: [R-8] }
  - { kind: volume_24h, value: 1864872.77741426, currency: USD, as_of: 2026-09-03T03:52:00Z, window: 24h, method: "api.geckoterminal.com/api/v2/networks/robinhood/tokens/0x55d9…1e18 volume_usd.h24 (all pools, not the SGOV book)", class: claim, receipt_ids: [R-9] }
  - { kind: holders, value: 1101, currency: null, as_of: 2026-09-03T03:47:00Z, window: point, method: "robinhoodchain.blockscout.com/api/v2/tokens/0x55D9…1E18 holders_count", class: claim, receipt_ids: [R-1] }

reproductions:
  - { id: REP-1, method: explorer-rpc, chain_id: 4663, checked_at: 2026-09-03T03:50:00Z, receipt_ids: [R-5, R-6], result: "rpc.mainnet.chain.robinhood.com eth_chainId 0x1237 (4663) eth_blockNumber 0x32a6b95 (53111701). Token 0x55D9…1E18 eth_getCode 44 bytes EIP-1167 prefix 3d3d3d3d363d3d37363d73 implementation 0x3be8b97f…c599. name Debtcoin, symbol DEBTCOIN, decimals 18, totalSupply 1e27. owner() Airlock 0xeb7c0347…0862. factory() reverts. EIP-1967 implementation slot zero. pool() 0xdead…dead. isPoolLocked true. tokenURI ipfs://bafkreihwr4duqp6hiud532jtg7kpzadgkhhjjo5s6ef7ywqgj5ivmeucrq. SGOV 0x92FD…F9B5 name iShares 0-3 Month Treasury Bond • Robinhood Token symbol SGOV decimals 18 totalSupply 15795630565820000000000 code 283 B. Impl code 13927 B, factory 1912 B, Airlock 5695 B, LongLauncher 5826 B." }
  - { id: REP-2, method: explorer-ui, chain_id: 4663, checked_at: 2026-09-03T03:52:00Z, receipt_ids: [R-1, R-2, R-3, R-4, R-13, R-14, R-15, R-16], result: "Blockscout api/v2 token 0x55D9…1E18 name Debtcoin symbol DEBTCOIN holders_count 1101 total_supply 1e27 proxy_type eip1167 implementation DopplerERC20V1 0x3Be8…C599 is_verified true creator_address_hash null this pass. Impl file src/tokens/DopplerERC20V1.sol compiler v0.8.26 is_partially_verified true. Factory 0x1B37…b69a name DopplerERC20V1Factory file src/tokens/DopplerERC20V1Factory.sol. Create tx 0x9718…07bb 2026-09-02T00:44:30Z block 52156269 from EOA 0x4B10…8D76 to LongLauncher 0x22e9…eeED method create; decoded numeraire SGOV 0x92FD…F9B5 factory 0x1B37…b69a supply 1e27. LaunchCreated normalizedTicker DEBTCOIN. PoolManager Initialize id 0x3458…3e6d currency0 DEBTCOIN currency1 SGOV hooks DopplerHookInitializer 0x4e34…a544. SGOV BeaconProxy holders_count 581." }
  - { id: REP-3, method: api, checked_at: 2026-09-03T03:54:00Z, receipt_ids: [R-7, R-8, R-9, R-17], result: "DexScreener pair 0x3458…3e6d: robinhood uniswap labels v4 base Debtcoin / DEBTCOIN quote iShares 0-3 Month Treasury Bond • Robinhood Token / SGOV 0x92FD…F9B5 liquidity.usd 213908.99 volume.h24 1593779.02 fdv/marketCap 592638 pairCreatedAt 1788309870000 (2026-09-02T00:44:30Z) info.websites [] info.socials []. Token endpoint 11 robinhood uniswap pairs; SGOV book is the liquidity leader; USDG/ETH books far thinner. Gecko pool: volume_usd.h24 1849712.188 reserve_in_usd -355304.709 fdv_usd 575084.171 pool_created_at 2026-09-02T00:44:30Z dex bankr-robinhood. Gecko token volume_usd.h24 1864872.777 fdv_usd 574909.336 total_reserve_in_usd 0.0 market_cap_usd null websites [] twitter_handle null." }
  - { id: REP-4, method: api, checked_at: 2026-09-03T03:48:00Z, receipt_ids: [R-10], result: "GET api.robinhood.com/rhj/assets HTTP 200; assets length 194; tokenSymbol SGOV hit 1. tokenName iShares 0-3 Month Treasury Bond • Robinhood Token. deployments contractAddress 0x92FD66527192E3e61d4DDd13322Aa222DE86F9B5 chainId 4663 status ASSET_STATUS_ACTIVE isin US46436E7186." }
  - { id: REP-5, method: explorer-rpc, chain_id: 4663, checked_at: 2026-09-03T03:50:00Z, receipt_ids: [R-5, R-16, R-18, R-19], result: "Mint Transfer in tx 0x9718…07bb at block 52156269 from 0x0 to Airlock 0xeb7c…0862 amount 1e27; OwnershipTransferred 0x0 to Airlock. JOHNDOG 0x64bc…1e18 eth_getCode 44 bytes same EIP-1167 of DopplerERC20V1 0x3Be8…C599; name John Dog symbol JOHNDOG owner() Airlock. DexScreener JOHNDOG/SGOV pair 0xa934…1e0a liquidity.usd 177734.33 volume.h24 3503779.56 websites dexxyswap.com. Distinct CA and pair from DEBTCOIN/SGOV." }
  - { id: REP-6, method: other, checked_at: 2026-09-03T03:51:00Z, receipt_ids: [R-11, R-12], result: "gateway.pinata.cloud/ipfs/bafkreihwr4duqp6hiud532jtg7kpzadgkhhjjo5s6ef7ywqgj5ivmeucrq HTTP 200 JSON name Debtcoin description empty social_links [{label Website, url https://x.com/IceManDrakee/status/2094949272131424692}] fee_receiver 0x4B10707123c79F6e99Be486Dcd95D60323988D76. @IceManDrakee 2026-09-02T00:43:23Z posted SGOV treasury ETF is backed by the U.S. Debt; reply 2026-09-02T00:50:29Z posted 0x55d9…1e18. No bidirectional official handle this pass." }

claims:
  - { id: CLM-1, field: product.mechanism, value: "LongLauncher.create clones a 1e9-supply DopplerERC20V1 (EIP-1167) into a Uniswap v4 pool quoted against numeraire SGOV; create from 0x4B10…8D76 minted Debtcoin / DEBTCOIN as a LONG graduation. pool() returns 0xdead…dead and isPoolLocked true. DopplerHookInitializer Lock beneficiaries 5% 0x21E2…7A66 and 95% launcher 0x4B10…8D76.", class: verified, observed_at: 2026-09-03T03:52:00Z, receipt_ids: [R-4, R-5, R-6, R-16, R-21], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-2, field: identity.name, value: "Debtcoin", class: verified, observed_at: 2026-09-03T03:47:00Z, receipt_ids: [R-1, R-5, R-11], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-3, field: identity.symbol, value: "DEBTCOIN", class: verified, observed_at: 2026-09-03T03:47:00Z, receipt_ids: [R-1, R-5, R-16], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-4, field: deployment.address, value: "0x55D9bC094C032cE0F4c57Cb09e6AB8F225531E18", class: verified, observed_at: 2026-09-03T03:52:00Z, receipt_ids: [R-1, R-5, R-16], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-5, field: deployment.address, value: "0x22e99278308B393ea1260859B181AD7E78f5eeED", class: verified, observed_at: 2026-09-03T03:52:00Z, receipt_ids: [R-4, R-5, R-15], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-6, field: lifecycle, value: mainnet, class: verified, observed_at: 2026-09-03T03:54:00Z, receipt_ids: [R-1, R-4, R-5, R-7], reproduction_ids: [REP-1, REP-2, REP-3], supersedes: null }
  - { id: CLM-7, field: taxonomy.primary-leaf, value: rwa-products/stock-paired-token, class: claim, observed_at: 2026-09-03T03:54:00Z, receipt_ids: [R-7, R-8, R-10], reproduction_ids: [], supersedes: null }
  - { id: CLM-8, field: identity.handle, value: "NULL — no bidirectional official handle; DexScreener info.socials empty; Gecko twitter_handle null; tokenURI Website is an X status by @IceManDrakee; flag unconfirmed-official", class: claim, observed_at: 2026-09-03T03:51:00Z, receipt_ids: [R-7, R-11, R-12, R-17], reproduction_ids: [], supersedes: null }
  - { id: CLM-9, field: relationship, value: "Pair quote SGOV 0x92FD…F9B5 is the iShares 0-3 Month Treasury Bond • Robinhood Token rail. GET rhj/assets (194 assets) has one SGOV row at that address, chainId 4663. Distinct from JOHNDOG/SGOV 0x64bc…1e18 / 0xa934…1e0a. Distinct from census LONG / Bankr / Artificial Inu.", class: verified, observed_at: 2026-09-03T03:54:00Z, receipt_ids: [R-10, R-13, R-18, R-19], reproduction_ids: [REP-4, REP-5], supersedes: null }
  - { id: CLM-10, field: economics.metric, value: "DEBTCOIN/SGOV Uniswap v4 DexScreener liquidity.usd 213908.99 volume.h24 1593779.02 fdv/marketCap 592638 at 2026-09-03T03:54:00Z", class: verified, observed_at: 2026-09-03T03:54:00Z, receipt_ids: [R-7], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-11, field: economics.metric, value: "Gecko same pool volume_usd.h24 1849712.18825338 fdv_usd 575084.1709 reserve_in_usd -355304.709249059 (negative) at 2026-09-03T03:48:00Z; dex id bankr-robinhood", class: verified, observed_at: 2026-09-03T03:48:00Z, receipt_ids: [R-8], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-12, field: economics.metric, value: 1101, class: verified, observed_at: 2026-09-03T03:47:00Z, receipt_ids: [R-1], reproduction_ids: [REP-2], supersedes: null }
  - { id: CLM-13, field: control.owner, value: "token owner() Airlock 0xeb7C034704eF8Dcd2D32324c1545f62fB4aD0862; create-tx from EOA 0x4B10707123c79F6e99Be486Dcd95D60323988D76 (no code); tokenURI fee_receiver is that EOA", class: verified, observed_at: 2026-09-03T03:51:00Z, receipt_ids: [R-4, R-5, R-11, R-14], reproduction_ids: [REP-1, REP-2, REP-6], supersedes: null }
  - { id: CLM-14, field: control.privileged-role, value: "DopplerHookInitializer Lock beneficiaries: 0x21E2ce70511e4FE542a97708e89520471DAa7A66 5% and launcher EOA 0x4B10707123c79F6e99Be486Dcd95D60323988D76 95%; RehypeDopplerHookInitializer 0x6f02…0F77 set fee schedule on poolId 0x3458…3e6d", class: verified, observed_at: 2026-09-03T03:52:00Z, receipt_ids: [R-16, R-21], reproduction_ids: [REP-2], supersedes: null }
  - { id: CLM-15, field: other, value: "Pair asset is SGOV 0x92FD66527192E3e61d4DDd13322Aa222DE86F9B5; venue is Uniswap v4 PoolManager 0x8366a39CC670B4001A1121B8F6A443A643e40951 pool 0x3458…3e6d; SGOV is a stock-token rail not the subject", class: verified, observed_at: 2026-09-03T03:52:00Z, receipt_ids: [R-6, R-7, R-8, R-10, R-16], reproduction_ids: [REP-3, REP-4], supersedes: null }
  - { id: CLM-16, field: deployment.role, value: "Token creator_address_hash was empty on the token page; create tx to LongLauncher 0x22e9…eeED and Airlock Create name the pad LONG / Doppler, not Pons, PAIR, or hood.fun", class: verified, observed_at: 2026-09-03T03:52:00Z, receipt_ids: [R-1, R-4, R-16], reproduction_ids: [REP-2], supersedes: null }
  - { id: CLM-17, field: taxonomy.chain-scope, value: robinhood-native, class: verified, observed_at: 2026-09-03T03:47:00Z, receipt_ids: [R-5, R-7], reproduction_ids: [REP-1, REP-3], supersedes: null }
  - { id: CLM-18, field: security.audit, value: "No audit report URL was located on Blockscout, DexScreener, Gecko, IPFS tokenURI, or X search this pass", class: unknown, observed_at: 2026-09-03T03:55:00Z, receipt_ids: [], reproduction_ids: [], supersedes: null }
  - { id: CLM-19, field: communications.status, value: "third-party-link: tokenURI social_links Website is x.com/IceManDrakee/status/2094949272131424692; DexScreener socials empty; later posts used netlify vote/claim URLs (copypasta-pattern)", class: claim, observed_at: 2026-09-03T03:51:00Z, receipt_ids: [R-7, R-11, R-12], reproduction_ids: [], supersedes: null }
  - { id: CLM-20, field: economics.metric, value: "Gecko token fdv_usd 574909.336; DexScreener fdv/marketCap 592638. Gecko market_cap_usd null. Gecko token total_reserve_in_usd 0.0.", class: verified, observed_at: 2026-09-03T03:54:00Z, receipt_ids: [R-7, R-8, R-9], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-21, field: deployment.address, value: "0x92FD66527192E3e61d4DDd13322Aa222DE86F9B5", class: verified, observed_at: 2026-09-03T03:48:00Z, receipt_ids: [R-6, R-10, R-13], reproduction_ids: [REP-1, REP-4], supersedes: null }
  - { id: CLM-22, field: deployment.address, value: "0x3Be8B97Fd0e713B5aBE0649Fa830223B6B4BC599", class: verified, observed_at: 2026-09-03T03:47:00Z, receipt_ids: [R-2, R-5], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-23, field: identity.domain, value: "NULL — DexScreener info.websites []; Gecko token info websites []; tokenURI Website field is an X status URL", class: claim, observed_at: 2026-09-03T03:54:00Z, receipt_ids: [R-7, R-11, R-17], reproduction_ids: [], supersedes: null }
  - { id: CLM-24, field: candidate, value: "debtcoin | DEBTCOIN | NULL | NULL — discovery token not in census 49", class: claim, observed_at: 2026-09-03T03:55:00Z, receipt_ids: [R-1, R-7], reproduction_ids: [], supersedes: null }
  - { id: CLM-25, field: control.proxy, value: "EIP-1167 clone of DopplerERC20V1 0x3Be8B97F…C599; EIP-1967 implementation slot zero", class: verified, observed_at: 2026-09-03T03:50:00Z, receipt_ids: [R-1, R-5], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-26, field: relationship, value: "Gecko attributes DEBTCOIN/SGOV 0x3458…3e6d to dex id bankr-robinhood; DexScreener labels the same pool Uniswap v4; creation is LongLauncher.create", class: verified, observed_at: 2026-09-03T03:54:00Z, receipt_ids: [R-4, R-7, R-8], reproduction_ids: [REP-2, REP-3], supersedes: null }

conflicts:
  - id: CON-1
    field: economics.metric
    claim_ids: [CLM-10, CLM-11]
    material_effect: "Gecko reserve_in_usd is negative (-355304.71) on the same DEBTCOIN/SGOV pool where DexScreener reports liquidity.usd 213908.99; Gecko token total_reserve_in_usd is 0.0"
    status: open
    resolution: null

events:
  - id: EVT-1
    type: onchain
    title: "DexScreener DEBTCOIN/SGOV 24h volume $1.59M, liquidity $213.9k"
    summary: "Uniswap v4 pair 0x3458…3e6d liquidity.usd 213908.99 volume.h24 1593779.02 fdv 592638. Gecko pool volume_usd.h24 1849712 with negative reserve_in_usd."
    occurred_at: 2026-09-03T03:54:00Z
    observed_at: 2026-09-03T03:54:00Z
    affected_fields: [economics.metric, activity.status]
    evidence_state: verified
    impact: material
    site_recommendation: both
    channel_recommendation: none
    receipt_ids: [R-7, R-8]
  - id: EVT-2
    type: ct
    title: "@IceManDrakee posted SGOV-debt framing and the CA"
    summary: "Status 2094949272131424692 at 2026-09-02T00:43:23Z: SGOV treasury ETF is backed by the U.S. Debt. Reply 2094951059827695879 posted 0x55d9…1e18. tokenURI lists that status as Website."
    occurred_at: 2026-09-02T00:43:23Z
    observed_at: 2026-09-03T03:51:00Z
    affected_fields: [identity.handle, communications.status]
    evidence_state: claim
    impact: routine
    site_recommendation: none
    channel_recommendation: none
    receipt_ids: [R-11, R-12]
  - id: EVT-3
    type: onchain
    title: "LongLauncher create minted Debtcoin / DEBTCOIN against SGOV"
    summary: "Tx 0x9718…07bb from 0x4B10…8D76 at 2026-09-02T00:44:30Z block 52156269; LaunchCreated normalizedTicker DEBTCOIN; PoolManager Initialize poolId 0x3458…3e6d."
    occurred_at: 2026-09-02T00:44:30Z
    observed_at: 2026-09-03T03:52:00Z
    affected_fields: [deployment.address, lifecycle, product.mechanism]
    evidence_state: verified
    impact: material
    site_recommendation: profile
    channel_recommendation: none
    receipt_ids: [R-4, R-16]

receipts:
  - { id: R-1, publisher: Blockscout, title: "Token 0x55D9…1E18 Debtcoin / DEBTCOIN", url: "https://robinhoodchain.blockscout.com/address/0x55D9bC094C032cE0F4c57Cb09e6AB8F225531E18", published_at: null, accessed_at: 2026-09-03T03:47:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-2, CLM-3, CLM-4, CLM-6, CLM-12, CLM-16, CLM-24, CLM-25], excerpt: "hash 0x55D9bC094C032cE0F4c57Cb09e6AB8F225531E18 name Debtcoin is_contract true is_verified true proxy_type eip1167 implementations DopplerERC20V1 0x3Be8B97Fd0e713B5aBE0649Fa830223B6B4BC599. token symbol DEBTCOIN decimals 18 total_supply 1000000000000000000000000000 holders_count 1101 type ERC-20. creator_address_hash null this pass." }
  - { id: R-2, publisher: Blockscout, title: "Address 0x3Be8…C599 DopplerERC20V1", url: "https://robinhoodchain.blockscout.com/address/0x3Be8B97Fd0e713B5aBE0649Fa830223B6B4BC599", published_at: null, accessed_at: 2026-09-03T03:47:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-22, CLM-25], excerpt: "hash 0x3Be8B97Fd0e713B5aBE0649Fa830223B6B4BC599 name DopplerERC20V1 is_contract true is_verified true creator_address_hash 0x1B37D3a72082029c44B35B604Ea473617580b69a. Smart-contract compiler v0.8.26+commit.8a97fa7a is_partially_verified true file_path src/tokens/DopplerERC20V1.sol verified_at 2026-07-01T19:42:07Z." }
  - { id: R-3, publisher: Blockscout, title: "Address 0x1B37…b69a DopplerERC20V1Factory", url: "https://robinhoodchain.blockscout.com/address/0x1B37D3a72082029c44B35B604Ea473617580b69a", published_at: null, accessed_at: 2026-09-03T03:47:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1], excerpt: "hash 0x1B37D3a72082029c44B35B604Ea473617580b69a name DopplerERC20V1Factory is_contract true is_verified true. Compiler v0.8.26 file_path src/tokens/DopplerERC20V1Factory.sol is_partially_verified true verified_at 2026-07-01T19:42:15Z. Source: Deploys DopplerERC20V1 tokens using EIP-1167; create() external onlyAirlock." }
  - { id: R-4, publisher: Blockscout, title: "LongLauncher create tx 0x97181f5d…07bb", url: "https://robinhoodchain.blockscout.com/tx/0x97181f5d31066fa0c27cad9f4cec177b6faf12d602603419deb1429091fe07bb", published_at: 2026-09-02T00:44:30Z, accessed_at: 2026-09-03T03:50:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-5, CLM-6, CLM-13, CLM-16, CLM-26, EVT-3], excerpt: "timestamp 2026-09-02T00:44:30.000000Z status ok result success block_number 52156269 from 0x4B10707123c79F6e99Be486Dcd95D60323988D76 (is_contract false) to LongLauncher 0x22e99278308B393ea1260859B181AD7E78f5eeED method create. decoded data numeraire 0x92FD66527192E3e61d4DDd13322Aa222DE86F9B5 factory 0x1B37…b69a supply 1e27." }
  - { id: R-5, publisher: Robinhood Chain RPC, title: "eth_getCode, name, symbol, owner() on DEBTCOIN", url: "https://rpc.mainnet.chain.robinhood.com", published_at: null, accessed_at: 2026-09-03T03:50:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-2, CLM-3, CLM-4, CLM-5, CLM-6, CLM-13, CLM-17, CLM-22, CLM-25], excerpt: "eth_blockNumber 0x32a6b95 (53111701) eth_chainId 0x1237 (4663). Token code 44 B EIP-1167 impl 0x3be8b97f…c599. name Debtcoin symbol DEBTCOIN decimals 18 totalSupply 1e27. owner() 0xeb7c034704ef8dcd2d32324c1545f62fb4ad0862. factory() reverts. eip1967 slot zero. Impl 13927 B factory 1912 B Airlock 5695 B LongLauncher 5826 B." }
  - { id: R-6, publisher: Robinhood Chain RPC, title: "pool(), isPoolLocked, tokenURI, SGOV name/symbol", url: "https://rpc.mainnet.chain.robinhood.com", published_at: null, accessed_at: 2026-09-03T03:50:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-15, CLM-21], excerpt: "pool() 0xdeaddeaddeaddeaddeaddeaddeaddeaddeaddead. isPoolLocked true. controller() empty. tokenURI ipfs://bafkreihwr4duqp6hiud532jtg7kpzadgkhhjjo5s6ef7ywqgj5ivmeucrq. SGOV 0x92FD…F9B5 name iShares 0-3 Month Treasury Bond • Robinhood Token symbol SGOV decimals 18 totalSupply 15795630565820000000000 code 283 B." }
  - { id: R-7, publisher: DexScreener, title: "DEBTCOIN/SGOV Uniswap v4 pair", url: "https://api.dexscreener.com/latest/dex/pairs/robinhood/0x3458e9d5e42fc937c6fe9fe62e41e1c76bd9d808d431c57dac50d5cef6483e6d", published_at: null, accessed_at: 2026-09-03T03:54:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-7, CLM-8, CLM-10, CLM-15, CLM-17, CLM-20, CLM-23, CLM-24, CLM-26, EVT-1], excerpt: "chainId robinhood dexId uniswap labels v4 pairAddress 0x3458e9d5e42fc937c6fe9fe62e41e1c76bd9d808d431c57dac50d5cef6483e6d base Debtcoin / DEBTCOIN 0x55D9…1E18 quote iShares 0-3 Month Treasury Bond • Robinhood Token / SGOV 0x92FD…F9B5 liquidity.usd 213908.99 volume.h24 1593779.02 fdv 592638 marketCap 592638 pairCreatedAt 1788309870000. info.websites [] info.socials []." }
  - { id: R-8, publisher: GeckoTerminal, title: "DEBTCOIN/SGOV pool", url: "https://api.geckoterminal.com/api/v2/networks/robinhood/pools/0x3458e9d5e42fc937c6fe9fe62e41e1c76bd9d808d431c57dac50d5cef6483e6d", published_at: null, accessed_at: 2026-09-03T03:48:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-7, CLM-11, CLM-15, CLM-20, CLM-26, EVT-1], excerpt: "name DEBTCOIN / SGOV pool_created_at 2026-09-02T00:44:30Z fdv_usd 575084.1709 market_cap_usd null volume_usd.h24 1849712.18825338 reserve_in_usd -355304.709249059 transactions.h24 buys 7407 sells 7892. dex bankr-robinhood quote robinhood_0x92fd66527192e3e61d4ddd13322aa222de86f9b5." }
  - { id: R-9, publisher: GeckoTerminal, title: "Debtcoin token", url: "https://api.geckoterminal.com/api/v2/networks/robinhood/tokens/0x55d9bc094c032ce0f4c57cb09e6ab8f225531e18", published_at: null, accessed_at: 2026-09-03T03:52:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-20], excerpt: "name Debtcoin symbol DEBTCOIN decimals 18 total_supply 1e27 price_usd 0.0005749093361 fdv_usd 574909.336149687 market_cap_usd null volume_usd.h24 1864872.77741426 total_reserve_in_usd 0.0. coingecko_coin_id null. image_url null." }
  - { id: R-10, publisher: Robinhood, title: "GET /rhj/assets Stock Token registry", url: "https://api.robinhood.com/rhj/assets", published_at: null, accessed_at: 2026-09-03T03:48:00Z, kind: docs, authority: primary, authenticity: confirmed, supports: [CLM-7, CLM-9, CLM-15, CLM-21], excerpt: "HTTP 200. assets length 194. tokenSymbol SGOV count 1. tokenName iShares 0-3 Month Treasury Bond • Robinhood Token. deployments contractAddress 0x92FD66527192E3e61d4DDd13322Aa222DE86F9B5 chainId 4663 networkName Robinhood Chain. status ASSET_STATUS_ACTIVE isin US46436E7186 tokenDecimals 18." }
  - { id: R-11, publisher: Pinata IPFS, title: "DEBTCOIN tokenURI JSON", url: "https://gateway.pinata.cloud/ipfs/bafkreihwr4duqp6hiud532jtg7kpzadgkhhjjo5s6ef7ywqgj5ivmeucrq", published_at: null, accessed_at: 2026-09-03T03:51:00Z, kind: other, authority: unknown, authenticity: unconfirmed, supports: [CLM-2, CLM-8, CLM-13, CLM-19, CLM-23, EVT-2], excerpt: "name Debtcoin description empty image_hash ipfs://bafkreidcdklns757zntchnludn3k6zpxvbfuxdeu436zs5yi2lkvwpywfu social_links [{label Website, url https://x.com/IceManDrakee/status/2094949272131424692}] vesting_recipients [{address 0x000…000 amount 0}] fee_receiver 0x4B10707123c79F6e99Be486Dcd95D60323988D76 categories []." }
  - { id: R-12, publisher: "@IceManDrakee", title: "SGOV treasury ETF is backed by the U.S. Debt", url: "https://x.com/IceManDrakee/status/2094949272131424692", published_at: 2026-09-02T00:43:23Z, accessed_at: 2026-09-03T03:51:00Z, kind: social, authority: social, authenticity: unconfirmed, supports: [CLM-8, CLM-19, EVT-2], excerpt: "SGOV treasury ETF is backed by the U.S. Debt. Reply 2094951059827695879 2026-09-02T00:50:29Z: 0x55d9bc094c032ce0f4c57cb09e6ab8f225531e18. tokenURI lists the parent status as Website. Not a bidirectional official handle this pass." }
  - { id: R-13, publisher: Blockscout, title: "Token 0x92FD…F9B5 SGOV BeaconProxy", url: "https://robinhoodchain.blockscout.com/address/0x92FD66527192E3e61d4DDd13322Aa222DE86F9B5", published_at: null, accessed_at: 2026-09-03T03:48:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-9, CLM-21], excerpt: "hash 0x92FD66527192E3e61d4DDd13322Aa222DE86F9B5 name BeaconProxy is_contract true is_verified true proxy_type eip1967_beacon. token name iShares 0-3 Month Treasury Bond ETF • Robinhood Token symbol SGOV decimals 18 total_supply 15795630565820000000000 holders_count 581." }
  - { id: R-14, publisher: Blockscout, title: "Address 0xeb7C…0862 Airlock", url: "https://robinhoodchain.blockscout.com/address/0xeb7C034704eF8Dcd2D32324c1545f62fB4aD0862", published_at: null, accessed_at: 2026-09-03T03:50:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-13], excerpt: "hash 0xeb7C034704eF8Dcd2D32324c1545f62fB4aD0862 name Airlock is_contract true is_verified true. Compiler v0.8.26 file_path src/Airlock.sol is_partially_verified true verified_at 2026-07-01T19:41:17Z." }
  - { id: R-15, publisher: Blockscout, title: "Address 0x22e9…eeED LongLauncher", url: "https://robinhoodchain.blockscout.com/address/0x22e99278308B393ea1260859B181AD7E78f5eeED", published_at: null, accessed_at: 2026-09-03T03:50:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-5], excerpt: "hash 0x22e99278308B393ea1260859B181AD7E78f5eeED name LongLauncher is_contract true is_verified true. Compiler v0.8.26 file_path src/LongLauncher.sol is_partially_verified false verified_at 2026-07-14T11:23:57Z." }
  - { id: R-16, publisher: Blockscout, title: "create tx logs LaunchCreated / Initialize / Airlock Create", url: "https://robinhoodchain.blockscout.com/tx/0x97181f5d31066fa0c27cad9f4cec177b6faf12d602603419deb1429091fe07bb", published_at: 2026-09-02T00:44:30Z, accessed_at: 2026-09-03T03:52:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-3, CLM-4, CLM-14, CLM-15, CLM-16, EVT-3], excerpt: "16 logs. PoolManager Initialize id 0x3458e9d5…3e6d currency0 0x55D9…1E18 currency1 0x92FD…F9B5 hooks 0x4e34…a544. Airlock Create asset 0x55D9…1E18 numeraire SGOV. LongLauncher LaunchCreated normalizedTicker DEBTCOIN launcher 0x4B10…8D76 deployedAt 1788309870. ASCII in calldata Debtcoin / DEBTCOIN." }
  - { id: R-17, publisher: GeckoTerminal, title: "Debtcoin token info", url: "https://api.geckoterminal.com/api/v2/networks/robinhood/tokens/0x55d9bc094c032ce0f4c57cb09e6ab8f225531e18/info", published_at: null, accessed_at: 2026-09-03T03:53:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-8, CLM-23], excerpt: "websites [] discord_url null telegram_handle null twitter_handle null description null gt_verified false. holders.count 1050 last_updated 2026-09-03T03:29:46Z. coingecko_coin_id null." }
  - { id: R-18, publisher: DexScreener, title: "JOHNDOG token pairs (distinct SGOV book)", url: "https://api.dexscreener.com/latest/dex/tokens/0x64bcF4aA85559526cFf0528BCDc0Cb9d3ea41e18", published_at: null, accessed_at: 2026-09-03T03:52:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-9], excerpt: "JOHNDOG/SGOV Uniswap v4 pairAddress 0xa9349400def8a8fb8b96763c52870fcadbc8775361dd49e95291486be5141e0a base 0x64bcF4aA85559526cFf0528BCDc0Cb9d3ea41e18 liquidity.usd 177734.33 volume.h24 3503779.56 info.websites dexxyswap.com. Distinct pair and CA from DEBTCOIN/SGOV 0x3458…3e6d / 0x55D9…1E18." }
  - { id: R-19, publisher: Blockscout, title: "Token 0x64bc…1e18 John Dog / JOHNDOG", url: "https://robinhoodchain.blockscout.com/address/0x64bcF4aA85559526cFf0528BCDc0Cb9d3ea41e18", published_at: null, accessed_at: 2026-09-03T03:47:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-9], excerpt: "hash 0x64bcF4aA85559526cFf0528BCDc0Cb9d3ea41e18 name John Dog is_contract true is_verified true proxy_type eip1167 implementation DopplerERC20V1 0x3Be8…C599. token symbol JOHNDOG holders_count 1945 total_supply 1e27. Distinct from Debtcoin 0x55D9…1E18." }
  - { id: R-20, publisher: DexScreener, title: "orders/v1 tokenProfile DEBTCOIN", url: "https://api.dexscreener.com/orders/v1/robinhood/0x55D9bC094C032cE0F4c57Cb09e6AB8F225531E18", published_at: null, accessed_at: 2026-09-03T03:48:00Z, kind: third-party-data, authority: aggregator, authenticity: unconfirmed, supports: [], excerpt: "orders [{chainId robinhood tokenAddress 0x55D9bC094C032cE0F4c57Cb09e6AB8F225531E18 type tokenProfile status approved paymentTimestamp 1788310214353}] boosts []." }
  - { id: R-21, publisher: Blockscout, title: "DopplerHookInitializer Lock beneficiaries", url: "https://robinhoodchain.blockscout.com/tx/0x97181f5d31066fa0c27cad9f4cec177b6faf12d602603419deb1429091fe07bb", published_at: 2026-09-02T00:44:30Z, accessed_at: 2026-09-03T03:52:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-14], excerpt: "DopplerHookInitializer 0x4e3468951D49f2EEa976eD0D6e75fFCb44a9a544 Lock pool 0x55D9…1E18 beneficiaries [[0x21E2ce70511e4FE542a97708e89520471DAa7A66, 50000000000000000], [0x4B10707123c79F6e99Be486Dcd95D60323988D76, 950000000000000000]]. RehypeDopplerHookInitializer FeeScheduleSet poolId 0x3458…3e6d startingTime 1788309870." }

gaps:
  - { priority: P0, question: "Is there an official X handle or site that bidirectionally links to token 0x55D9…1E18?", checked: "DexScreener info.websites [] info.socials []; Gecko twitter_handle null websites []; tokenURI Website is an IceManDrakee status; X user search returned unrelated DebtCoin accounts, 2026-09-03", next: "re-read DexScreener token profile after a Claim Profile; search new posts that embed the CA and a handle that also embeds the CA" }
  - { priority: P0, question: "Does @IceManDrakee bidirectionally claim the CA beyond the tokenURI Website field?", checked: "status 2094949272131424692 plus CA reply; tokenURI lists that status as Website; DexScreener socials still empty, 2026-09-03", next: "read the account bio and later posts for the CA; do not file as official without a reverse link" }
  - { priority: P1, question: "Why is Gecko reserve_in_usd negative on DEBTCOIN/SGOV while DexScreener liquidity.usd is ~$214k?", checked: "Gecko pool reserve_in_usd -355304.71 token total_reserve_in_usd 0.0; DexScreener liquidity.usd 213908.99, 2026-09-03", next: "re-fetch Gecko pool; if still negative keep CON-1 open and prefer DexScreener for USD liquidity" }
  - { priority: P1, question: "Who controls Airlock owner Safe 0x21E2…7A66 relative to this launch, and is the 5% Lock split a LONG protocol fee?", checked: "Lock beneficiaries 5% 0x21E2…7A66 and 95% launcher 0x4B10…8D76; other Doppler packets name 0x21E2 as Airlock owner Safe, 2026-09-03", next: "read Airlock owner() on 4663 this pass if filing a control update" }
  - { priority: P2, question: "Which Gecko trending window ranked this SGOV book, and did JOHNDOG/SGOV overtake it?", checked: "Live DexScreener DEBTCOIN/SGOV liq 213908.99 vol 1593779; JOHNDOG/SGOV liq 177734.33 vol 3503779, 2026-09-03", next: "archive both SGOV books if a trending screenshot returns" }
---

# DEBTCOIN — research packet

## What it is

A one-billion-supply ERC-20 cloned into a Uniswap v4 pool quoted against SGOV. LongLauncher deploys Debtcoin (DEBTCOIN) in one create call and seeds the DEBTCOIN/SGOV book. Traders buy and sell DEBTCOIN on Uniswap v4. SGOV is a Robinhood Stock Token rail, not the subject. No official site or handle was located this pass.

Themes: memecoin, stock-paired:SGOV, rwa, graduation

## Why it matters

The DEBTCOIN/SGOV Uniswap v4 book printed about $1.59M of 24h volume on DexScreener at collection, with the quote token the iShares 0-3 Month Treasury Bond • Robinhood Token. GET /rhj/assets lists that SGOV address. Distinct from the in-flight JOHNDOG/SGOV book on the same rail.

## What could go wrong

USD liquidity figures on the DEBTCOIN/SGOV book count both sides, and the quote side is SGOV, not USDG. Gecko reserve_in_usd was negative this pass, so that aggregator slice is not a USD reserve. No official handle was located, so comms surfaces stay unconfirmed-official. JOHNDOG/SGOV is a different token on the same quote.

## Product and mechanics

LongLauncher 0x22e9…eeED clones DopplerERC20V1 via EIP-1167. create from 0x4B10…8D76 at 2026-09-02T00:44:30Z minted Debtcoin / DEBTCOIN supply 1e9*1e18 into Uniswap v4 poolId 0x3458…3e6d quoted against SGOV 0x92FD…F9B5. owner() on the token returns Airlock 0xeb7C…0862. pool() returns 0xdead…dead and isPoolLocked is true. [verified R-4 R-5 R-6 R-16]

LaunchCreated normalizedTicker DEBTCOIN. PoolManager 0x8366…0951 Initialize uses hooks DopplerHookInitializer 0x4e34…a544. Secondary DEBTCOIN/USDG and DEBTCOIN/ETH books exist on DexScreener with far less liquidity than the SGOV book. Gecko labels the SGOV pool dex bankr-robinhood; DexScreener labels Uniswap v4. [verified R-7 R-8 R-16]

## Control and security

token owner() is Airlock. Deployer 0x4B10…8D76 has no code and is tokenURI fee_receiver plus the 95% Lock beneficiary. The 5% Lock beneficiary is 0x21E2…7A66. [verified R-6 R-11 R-21]

DopplerERC20V1, DopplerERC20V1Factory, Airlock, and LongLauncher are verified on Blockscout (src/tokens/DopplerERC20V1.sol, src/tokens/DopplerERC20V1Factory.sol, src/Airlock.sol, src/LongLauncher.sol, compiler v0.8.26). No audit report URL was located this pass. [verified R-2 R-3 R-14 R-15] [unknown]

## Team and provenance

No official domain or X handle was located. DexScreener info.websites and info.socials are empty. Gecko twitter_handle is null. tokenURI social_links Website is an X status by @IceManDrakee posted one minute before create, with a CA reply six minutes after. Flag unconfirmed-official and third-party-link. Do not file that handle as official. [claim R-7 R-11 R-12 R-17]

## Economics and activity

DEBTCOIN/SGOV Uniswap v4 DexScreener liquidity.usd is 213908.99 and volume.h24 is 1593779.02 at 2026-09-03T03:54:00Z. fdv/marketCap 592638. Pair created 2026-09-02T00:44:30Z. Blockscout holders_count 1101. [claim R-1 R-7]

Gecko pool volume_usd.h24 is 1849712.19 and fdv_usd 575084.17. reserve_in_usd is -355304.71 this pass (CON-1). Gecko token volume_usd.h24 1864872.78 is all pools, not the SGOV book. Gecko token total_reserve_in_usd 0.0. [claim R-8 R-9]

JOHNDOG/SGOV on DexScreener is a different pair (0xa934…1e0a, token 0x64bc…1e18) with liquidity.usd 177734.33 and volume.h24 3503779.56. [claim R-18 R-19]

## Material risks

- Quote token SGOV is a stock-token rail; pool USD figures count DEBTCOIN plus SGOV, not a USDG backstop. [verified R-7 R-10]
- Gecko reserve_in_usd is negative this pass; do not treat it as TVL. [claim R-8]
- No official handle or domain this pass; tokenURI Website is a third-party-link. [claim R-7 R-11]
- No audit report URL this pass. [unknown]
- Same-rail JOHNDOG/SGOV is a different token. [verified R-18 R-19]

## Verification passes

- Receipts: Blockscout token/impl/factory/SGOV/Airlock/LongLauncher and create tx plus logs, RPC name/symbol/owner/pool/tokenURI, DexScreener pair/token, Gecko pool/token/info, /rhj/assets, Pinata tokenURI, and the IceManDrakee status were opened on 2026-09-03 and excerpts copied from the responses. [verified R-1 R-5 R-7 R-10]
- Numbers: 1593779.02 is the DexScreener DEBTCOIN/SGOV 24h volume, not the 1864872.78 Gecko token all-pools figure. Reserve on Gecko is negative; DexScreener liquidity 213908.99 is the SGOV book. [claim R-7 R-8 R-9]
- Adversarial: the strongest contrary reading is that DEBTCOIN is an official SGOV or Bankr product, or the same token as JOHNDOG. /rhj/assets lists SGOV as a Robinhood Token rail, Gecko's bankr-robinhood label is shared Doppler infrastructure, create is LongLauncher, and JOHNDOG is a different CA. No official handle or domain was located. [inference R-4 R-10 R-18]

## Operations log

- Base: `git -C /Users/harsharnsingh/proofline-pr59 rev-parse origin/main` → 334ca0619aa62e922da83f46de021f06d12348cf. Census 49 slugs have no debtcoin / DEBTCOIN / 0x55D9…1E18.
- Explorer: Blockscout api/v2 token, impl, factory, SGOV, Airlock, LongLauncher, create 0x9718…07bb, 16 logs, holders. RPC eth_getCode/eth_call/eth_getLogs with Chrome/Mozilla UA at block 53111701; mint log at 52156269.
- Aggregators: DexScreener latest/dex/tokens, pairs, token-pairs, orders/v1; Gecko token, pool, token/info.
- Registry: GET api.robinhood.com/rhj/assets 194 assets, 1 SGOV row at 0x92FD…F9B5.
- Social: X keyword DEBTCOIN/SGOV and the CA; user search DEBTCOIN; thread 2094949272131424692; tokenURI IPFS via Pinata.
- Failed: Blockscout token creator_address_hash null (create tx used instead); app.long.xyz Cloudflare 403; Gecko search/pools page 1 429 then recovered on the pool endpoint; ipfs.io Cloudflare challenge.
- Time: collection 2026-09-03T03:45Z–2026-09-03T03:55Z.
