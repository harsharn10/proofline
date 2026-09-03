---
# Packet v2 (docs/research-system.md §5). Seed with Icarus What-it-is + events.
contract_version: proofline-research-v2
work_id: WORK-20260903-grok-heavy-icarus-research
producer: grok-heavy
role: collector
base_sha: 334ca0619aa62e922da83f46de021f06d12348cf
slug: stratton
name: STRATTON
packet_tier: seed
as_of: 2026-09-03T03:45:00Z
prior_packet: null
supersedes: null
owned_slugs: [stratton]
allowed_paths:
  - research/inbox/packets/stratton/WORK-20260903-grok-heavy-icarus-research.md

identity:
  canonical_name: STRATTON
  aliases: ["Stratton Market"]
  symbols: [STRATTON]
  entity_kind: token
  chain_scope: robinhood-native
  official_domain: https://stratton.market
  official_handle: "@strattonmrkt"
  repository: "NULL — no GitHub org or repository URL on stratton.market, stratton.market/docs, the @strattonmrkt profile, DexScreener, Gecko, or Blockscout this pass"
  possible_matches:
    - slug: pons
      signals: [shared-deployer]
      contrary_signals:
        - "Census Pons is the bonding-curve pad at ponsfamily.com / @ponsdotfamily with PonsV2LaunchFactory 0x7eD5…EC7e"
        - "STRATTON is the ERC-20 at 0xb7eae…8360 created through that factory; entity_kind token, not protocol"
        - "No shared domain or handle; stratton.market / @strattonmrkt do not operate the Pons pad"
    - slug: stonks-fun
      signals: [other]
      contrary_signals:
        - "Census Stonks.fun is @stonksdotfun / stonks.fun with $STONKS 0x3F298f2b… and MAG7/DEGEN/SILICON baskets"
        - "STRATTON is PonsV2LauncherToken 0xb7eae…8360 paired to SPY 0x117c…4C0C, site stratton.market / @strattonmrkt"
        - "No shared domain, handle, or reproduced address"
    - slug: longbow
      signals: [other]
      contrary_signals:
        - "Census Longbow is @longbowlend / longbow.cash with BOW 0x451b42… and BOW/SPY pool 0xdba9…f4c2"
        - "STRATTON is 0xb7eae…8360 with STRATTON/SPY pool 0xa2c4e1ca…9274"
        - "Shared quote rail SPY 0x117c…4C0C only; no shared domain, handle, or token address"

classification:
  primary_leaf: launch/graduation-token
  secondary_leaves: [rwa-products/stock-paired-token]
  mechanism_tags: [bonding-curve, amm, stock-paired, rwa, launchpad]
  ecosystem_role: graduation
  lifecycle: mainnet
  coverage_recommendation: seed
  evidence_state: partly-verified
  rationale: "Not in the 49-row census. Token 0xb7eae…8360 is a verified PonsV2LauncherToken with non-empty code on 4663; creator_address_hash is PonsV2LaunchDeployer 0x3711…1A42; launchFactory() returns PonsV2LaunchFactory 0x7eD5…EC7e; launchAndBuy at 2026-09-02T16:40:58Z minted Stratton Market / STRATTON against SPY 0x117c…4C0C and CurveCompleted one second later into Uniswap v4 pool 0xa2c4e1ca…9274. Distinct from pending PAIR/SPY and from NORMIE/STACKS/BOW. Site/docs list a different Launchpad 0xBa394F…07c9 and do not embed this CA. [R-1] [R-4] [R-5] [R-7] [R-8] [R-16]"

qualifying:
  deployed_on_chain: { status: pass, claim_ids: [CLM-4, CLM-5, CLM-6], note: "" }
  native_play:       { status: pass, claim_ids: [CLM-1, CLM-15], note: "" }
  citable:           { status: pass, claim_ids: [CLM-2, CLM-3, CLM-8], note: "" }
  research_story:    { status: pass, claim_ids: [CLM-1, CLM-9, CLM-25], note: "" }

links:
  - { kind: site, url: "https://stratton.market", authenticity: confirmed }
  - { kind: docs, url: "https://stratton.market/docs", authenticity: confirmed }
  - { kind: app, url: "https://stratton.market/launchpad", authenticity: unconfirmed }
  - { kind: x, url: "https://x.com/strattonmrkt", authenticity: confirmed }

deployments:
  - label: STRATTON token (PonsV2LauncherToken)
    role: token
    address:
      value: "0xb7eaeCc89d3e2f9Fd597D61726aE824900dB8360"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T03:37:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-1, R-2, R-5]
  - label: PonsV2LaunchDeployer (token creator)
    role: factory
    address:
      value: "0x3711ceA4feaDE896C913C68F01Eda97Cb06D1A42"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T03:38:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-3, R-5]
  - label: PonsV2LaunchFactory (token launchFactory)
    role: factory
    address:
      value: "0x7eD598BcEf8bd9Edd8C97A195C6d13f40801EC7e"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T03:38:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-5, R-6, R-15]
  - label: PonsV2BondingCurve
    role: other
    address:
      value: "0x4f8Bf15566c084F7Fa473B67131Ae74fc71F4d0F"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T03:39:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-5, R-6, R-16]
  - label: PonsV2LaunchAndBuy (create tx to)
    role: router
    address:
      value: "0xe33E9E479dF8802cb0866d5d05258bEc4cF62948"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T03:38:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-4, R-15]
  - label: SPY Stock Token (pair quote / factory pairToken)
    role: token
    address:
      value: "0x117cc2133c37B721F49dE2A7a74833232B3B4C0C"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T03:40:00Z
      exists_on_4663: true
      explorer_source_verified: true
      explorer_source_verification_scope: proxy-shell-only
      implementation_source_verified: true
    receipt_ids: [R-7, R-12, R-17]

metrics:
  - { kind: volume_24h, value: 9576519.64, currency: USD, as_of: 2026-09-03T03:44:00Z, window: 24h, method: "api.dexscreener.com/latest/dex/tokens/0xb7eaeCc89d3e2f9Fd597D61726aE824900dB8360 pair 0xa2c4e1ca…9274 STRATTON/SPY volume.h24", class: claim, receipt_ids: [R-7] }
  - { kind: tvl, value: 165727.93, currency: USD, as_of: 2026-09-03T03:44:00Z, window: point, method: "api.dexscreener.com/latest/dex/tokens/0xb7eaeCc89d3e2f9Fd597D61726aE824900dB8360 pair 0xa2c4e1ca…9274 STRATTON/SPY liquidity.usd", class: claim, receipt_ids: [R-7] }
  - { kind: market_cap, value: 3730588, currency: USD, as_of: 2026-09-03T03:44:00Z, window: point, method: "api.dexscreener.com/latest/dex/tokens/0xb7eaeCc89d3e2f9Fd597D61726aE824900dB8360 pair 0xa2c4e1ca…9274 STRATTON/SPY fdv/marketCap", class: claim, receipt_ids: [R-7] }
  - { kind: holders, value: 2558, currency: null, as_of: 2026-09-03T03:44:00Z, window: point, method: "robinhoodchain.blockscout.com/api/v2/tokens/0xb7eaeCc89d3e2f9Fd597D61726aE824900dB8360 holders_count", class: claim, receipt_ids: [R-1] }

reproductions:
  - { id: REP-1, method: explorer-rpc, chain_id: 4663, checked_at: 2026-09-03T03:40:00Z, receipt_ids: [R-5], result: "rpc.mainnet.chain.robinhood.com eth_chainId 0x1237 (4663) eth_blockNumber 0x32a558e (53106062). Token 0xb7eae…8360 eth_getCode 3248 B prefix 60806040, not EIP-1167. name Stratton Market, symbol STRATTON, decimals 18, totalSupply 1e27. owner() and factory() revert. deployer() 0xb2B987E4d34213BA78c570Fb704df27d4823d7D5 (eth_getCode 0x). launchFactory() 0x7eD598BcEf8bd9Edd8C97A195C6d13f40801EC7e. curve() 0x4f8Bf15566c084F7Fa473B67131Ae74fc71F4d0F. socials() twitter https://x.com/strattonmrkt website https://stratton.market telegram/discord/farcaster empty." }
  - { id: REP-2, method: explorer-ui, chain_id: 4663, checked_at: 2026-09-03T03:38:00Z, receipt_ids: [R-1, R-2, R-3, R-4, R-15, R-16], result: "Blockscout api/v2 token 0xb7eae…8360 name Stratton Market symbol STRATTON holders_count 2553 then 2558 total_supply 1e27 contract name PonsV2LauncherToken is_verified true is_fully_verified true file_path contracts/src/v2/PonsV2LauncherToken.sol compiler v0.8.35. creator_address_hash PonsV2LaunchDeployer 0x3711…1A42 creation_transaction_hash 0x2816984d…cf9d. launchAndBuy tx 2026-09-02T16:40:58Z block 52724907 from EOA 0xb2B987…d7D5 to PonsV2LaunchAndBuy 0xe33E…2948 pairToken SPY 0x117c…4C0C. TokenLaunched curve 0x4f8B…4d0F graduationThreshold 10.9e18. CurveCompleted tx 0x543b6e9e…44a3 2026-09-02T16:40:59Z block 52724913 LaunchSwept same token quoteOut 10.9e18." }
  - { id: REP-3, method: api, checked_at: 2026-09-03T03:44:00Z, receipt_ids: [R-7], result: "DexScreener latest/dex/tokens/0xb7eae…8360: 30 robinhood uniswap pairs; top STRATTON/SPY v4 0xa2c4e1ca…9274 quote 0x117c…4C0C SPDR S&P 500 ETF Trust • Robinhood Token / SPY liquidity.usd 165727.93 volume.h24 9576519.64 fdv/marketCap 3730588 pairCreatedAt 1788367260000 (2026-09-02T16:41:00Z) info.websites [] info.socials []. Distinct DexScreener books: PAIR/SPY 0xf224a070…c001, STACKS/SPY 0x77d0c2cf…5e32, BOW/SPY 0xdba909ac…f4c2, NORMIE/SPY 0x8ece5548…b2e6." }
  - { id: REP-4, method: api, checked_at: 2026-09-03T03:43:00Z, receipt_ids: [R-8, R-9], result: "Gecko pool 0xa2c4e1ca…9274 name SPY / STRATTON pool_created_at 2026-09-02T16:41:00Z volume_usd.h24 9364596.69 reserve_in_usd 158595.87 fdv_usd 13554957.56 (pool base is SPY 0x117c…4C0C, quote is STRATTON 0xb7eae…8360; dex pons-v2-dex). Gecko token name Stratton Market fdv_usd 3803341.24 market_cap_usd null volume_usd.h24 15174470.36 (all pools)." }
  - { id: REP-5, method: api, checked_at: 2026-09-03T03:40:00Z, receipt_ids: [R-12], result: "GET api.robinhood.com/rhj/assets HTTP 200; assets length 194; tokenSymbol SPY hit 1: tokenName SPDR S&P 500 ETF Trust • Robinhood Token deployments contractAddress 0x117cc2133c37B721F49dE2A7a74833232B3B4C0C chainId 4663 status ASSET_STATUS_ACTIVE." }
  - { id: REP-6, method: official-crosslink, checked_at: 2026-09-03T03:44:00Z, receipt_ids: [R-5, R-13, R-14], result: "token.socials() twitter https://x.com/strattonmrkt website https://stratton.market. stratton.market title Stratton Market: penny stocks, on-chain; footer href https://x.com/strattonmrkt; HTML/JS this pass had 0 hits for 0xb7eae…8360. og:url https://strattonstreet.netlify.app. Docs · Stratton Market lists Launchpad 0xBa394F…07c9 Graduation migrator 0x0c2AFC…aFb7 Liquidity locker 0x13F2c2…d947 Buyback 0x0d3550…66Ea CEX blocklist 0xf93560…cf39 TOONx 0x5a6c05…AeDf DSSx 0xe99d43…6eDa AIXIx 0x749311…35C2 — not the Pons token. @strattonmrkt bio matches on-chain description; posts this pass did not embed the CA." }

claims:
  - { id: CLM-1, field: product.mechanism, value: "PonsV2LaunchAndBuy.launchAndBuy clones a 1e9-supply PonsV2LauncherToken onto a PonsV2BondingCurve quoted against pairToken SPY; CurveCompleted / LaunchSwept one second later seeds Uniswap v4 STRATTON/SPY via PoolManager 0x8366…0951 pool 0xa2c4e1ca…9274 (Gecko dex pons-v2-dex). Verified token source: entire supply mints to the curve; deployer is immutable reference data with no token privileges.", class: verified, observed_at: 2026-09-03T03:40:00Z, receipt_ids: [R-2, R-4, R-5, R-6, R-16], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-2, field: identity.name, value: "Stratton Market", class: verified, observed_at: 2026-09-03T03:37:00Z, receipt_ids: [R-1, R-4, R-5], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-3, field: identity.symbol, value: "STRATTON", class: verified, observed_at: 2026-09-03T03:37:00Z, receipt_ids: [R-1, R-4, R-5], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-4, field: deployment.address, value: "0xb7eaeCc89d3e2f9Fd597D61726aE824900dB8360", class: verified, observed_at: 2026-09-03T03:38:00Z, receipt_ids: [R-1, R-4, R-5], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-5, field: deployment.address, value: "0x7eD598BcEf8bd9Edd8C97A195C6d13f40801EC7e", class: verified, observed_at: 2026-09-03T03:40:00Z, receipt_ids: [R-5, R-6, R-15], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-6, field: lifecycle, value: mainnet, class: verified, observed_at: 2026-09-03T03:44:00Z, receipt_ids: [R-1, R-4, R-5, R-7], reproduction_ids: [REP-1, REP-2, REP-3], supersedes: null }
  - { id: CLM-7, field: taxonomy.primary-leaf, value: launch/graduation-token, class: claim, observed_at: 2026-09-03T03:44:00Z, receipt_ids: [R-2, R-4, R-16], reproduction_ids: [], supersedes: null }
  - { id: CLM-8, field: identity.handle, value: "@strattonmrkt", class: claim, observed_at: 2026-09-03T03:44:00Z, receipt_ids: [R-5, R-13, R-18], reproduction_ids: [REP-6], supersedes: null }
  - { id: CLM-9, field: relationship, value: "Distinct from pending packet PAIR (PAIR token 0x6b1d…66be PAIR/SPY 0xf224a070…c001 via PairLaunchpadV5) and from DexScreener STACKS/SPY 0xD998…D94C, BOW/SPY 0x451b42…, and NORMIE/SPY 0x92ef7C…1612. Shared rail is SPY 0x117c…4C0C only.", class: verified, observed_at: 2026-09-03T03:44:00Z, receipt_ids: [R-7, R-19], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-10, field: economics.metric, value: "Gecko SPY/STRATTON pool 24h volume 9364596.69 USD and reserve_in_usd 158595.87 at 2026-09-03T03:43:00Z (Gecko pool slice; pool fdv_usd 13554957.56 is the SPY-as-base book, not the Gecko token fdv)", class: verified, observed_at: 2026-09-03T03:43:00Z, receipt_ids: [R-8, R-9], reproduction_ids: [REP-4], supersedes: null }
  - { id: CLM-11, field: economics.metric, value: "DexScreener same pair liquidity.usd 165727.93 volume.h24 9576519.64 fdv/marketCap 3730588 at 2026-09-03T03:44:00Z", class: verified, observed_at: 2026-09-03T03:44:00Z, receipt_ids: [R-7], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-12, field: economics.metric, value: 2558, class: verified, observed_at: 2026-09-03T03:44:00Z, receipt_ids: [R-1], reproduction_ids: [REP-2], supersedes: null }
  - { id: CLM-13, field: control.owner, value: "token owner() reverts; verified PonsV2LauncherToken source: deployer is immutable reference data and confers no privileges. Deployer 0xb2B987…d7D5 has no code.", class: verified, observed_at: 2026-09-03T03:40:00Z, receipt_ids: [R-2, R-5], reproduction_ids: [REP-1], supersedes: null }
  - { id: CLM-14, field: control.privileged-role, value: "deployer() / launchAndBuy from 0xb2B987E4d34213BA78c570Fb704df27d4823d7D5; launchFactory 0x7eD5…EC7e; curve 0x4f8B…4d0F", class: verified, observed_at: 2026-09-03T03:40:00Z, receipt_ids: [R-4, R-5, R-6], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-15, field: other, value: "Pair asset is SPY 0x117cc2133c37B721F49dE2A7a74833232B3B4C0C (GET /rhj/assets active Robinhood Token); venue is Uniswap v4 PoolManager 0x8366a39CC670B4001A1121B8F6A443A643e40951 pool 0xa2c4e1ca…9274, Gecko dex id pons-v2-dex", class: verified, observed_at: 2026-09-03T03:43:00Z, receipt_ids: [R-7, R-8, R-12, R-16], reproduction_ids: [REP-3, REP-4, REP-5], supersedes: null }
  - { id: CLM-16, field: deployment.role, value: "Token creator_address_hash is PonsV2LaunchDeployer 0x3711…1A42; launchFactory() names PonsV2LaunchFactory 0x7eD5…EC7e, not PairLaunchpadV5, LONG, or stonks.fun", class: verified, observed_at: 2026-09-03T03:40:00Z, receipt_ids: [R-1, R-3, R-5], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-17, field: taxonomy.chain-scope, value: robinhood-native, class: verified, observed_at: 2026-09-03T03:37:00Z, receipt_ids: [R-5, R-7], reproduction_ids: [REP-1, REP-3], supersedes: null }
  - { id: CLM-18, field: security.audit, value: "No audit report URL was located on stratton.market, stratton.market/docs, DexScreener, Gecko, Blockscout, or X search this pass", class: unknown, observed_at: 2026-09-03T03:44:00Z, receipt_ids: [], reproduction_ids: [], supersedes: null }
  - { id: CLM-19, field: identity.domain, value: "https://stratton.market", class: claim, observed_at: 2026-09-03T03:44:00Z, receipt_ids: [R-5, R-13], reproduction_ids: [REP-6], supersedes: null }
  - { id: CLM-20, field: economics.metric, value: "Gecko token fdv_usd 3803341.24; DexScreener fdv/marketCap 3730588. Gecko pool fdv_usd 13554957.56 is the inverted SPY/STRATTON book. Gecko market_cap_usd null.", class: verified, observed_at: 2026-09-03T03:43:00Z, receipt_ids: [R-7, R-8, R-9], reproduction_ids: [REP-3, REP-4], supersedes: null }
  - { id: CLM-21, field: deployment.address, value: "0x117cc2133c37B721F49dE2A7a74833232B3B4C0C", class: verified, observed_at: 2026-09-03T03:40:00Z, receipt_ids: [R-7, R-12, R-17], reproduction_ids: [REP-3, REP-5], supersedes: null }
  - { id: CLM-22, field: deployment.address, value: "0x4f8Bf15566c084F7Fa473B67131Ae74fc71F4d0F", class: verified, observed_at: 2026-09-03T03:40:00Z, receipt_ids: [R-5, R-6, R-16], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-23, field: communications.status, value: "unconfirmed-official for this CA: token.socials and the site footer name @strattonmrkt / stratton.market; DexScreener info.websites [] info.socials []; site HTML/JS and docs contract table this pass do not embed 0xb7eae…8360; @strattonmrkt posts this pass did not embed the CA", class: claim, observed_at: 2026-09-03T03:44:00Z, receipt_ids: [R-7, R-13, R-14, R-18], reproduction_ids: [REP-6], supersedes: null }
  - { id: CLM-24, field: candidate, value: "stratton | STRATTON | @strattonmrkt | https://stratton.market — discovery token not in census 49", class: claim, observed_at: 2026-09-03T03:45:00Z, receipt_ids: [R-1, R-7], reproduction_ids: [], supersedes: null }
  - { id: CLM-25, field: relationship, value: "stratton.market/docs Contracts on mainnet lists Launchpad 0xBa394F790007dCdACafCC778DF49fa296EF407c9 (unverified this pass), not PonsV2LaunchFactory and not token 0xb7eae…8360. TOONx 0x5a6c05…AeDf and DSSx 0xe99d43…6eDa are separate stock-token rows on that table.", class: verified, observed_at: 2026-09-03T03:44:00Z, receipt_ids: [R-14], reproduction_ids: [REP-6], supersedes: null }
  - { id: CLM-26, field: "account.@strattonmrkt.role", value: project, class: claim, observed_at: 2026-09-03T03:44:00Z, receipt_ids: [R-13, R-18], reproduction_ids: [], supersedes: null }
  - { id: CLM-27, field: "account.@strattonmrkt.slug", value: stratton, class: claim, observed_at: 2026-09-03T03:44:00Z, receipt_ids: [R-13, R-18], reproduction_ids: [], supersedes: null }
  - { id: CLM-28, field: "account.@strattonmrkt.note", value: "unconfirmed-official for CA 0xb7eae…8360; token.socials and site footer; posts this pass did not embed the CA", class: claim, observed_at: 2026-09-03T03:44:00Z, receipt_ids: [R-13, R-18], reproduction_ids: [], supersedes: null }

conflicts: []

events:
  - id: EVT-1
    type: onchain
    title: "DexScreener STRATTON/SPY 24h volume $9.58M, liq $165.7k"
    summary: "DexScreener pair 0xa2c4e1ca…9274 volume.h24 9576519 liquidity.usd 165727 fdv 3730588."
    occurred_at: 2026-09-03T03:44:00Z
    observed_at: 2026-09-03T03:44:00Z
    affected_fields: [economics.metric, activity.status]
    evidence_state: verified
    impact: material
    site_recommendation: both
    channel_recommendation: none
    receipt_ids: [R-7]
  - id: EVT-2
    type: ct
    title: "@ZooCry posted the STRATTON CA and @strattonmrkt"
    summary: "@ZooCry posted $Stratton, @strattonmrkt, and CA 0xb7eae…8360 with a screenshot of the site."
    occurred_at: 2026-09-03T01:18:24Z
    observed_at: 2026-09-03T03:41:00Z
    affected_fields: [identity.handle, communications.status]
    evidence_state: claim
    impact: routine
    site_recommendation: none
    channel_recommendation: none
    receipt_ids: [R-20]
  - id: EVT-3
    type: company
    title: "@strattonmrkt posted factory improvements overnight"
    summary: "@strattonmrkt: First improvements on factory are already in. Working through the night."
    occurred_at: 2026-09-03T00:33:22Z
    observed_at: 2026-09-03T03:41:00Z
    affected_fields: [activity.status, product.mechanism]
    evidence_state: claim
    impact: routine
    site_recommendation: feed
    channel_recommendation: none
    receipt_ids: [R-18]
  - id: EVT-4
    type: ct
    title: "@hustle_karma posted Stratton as a penny-stock pad"
    summary: "Post: memecoin launchpad vs tokenized penny stocks; CA 0xb7eae…8360; named @VictorOnChain."
    occurred_at: 2026-09-02T23:26:07Z
    observed_at: 2026-09-03T03:41:00Z
    affected_fields: [product.mechanism, team.identity]
    evidence_state: claim
    impact: routine
    site_recommendation: none
    channel_recommendation: none
    receipt_ids: [R-21]
  - id: EVT-5
    type: company
    title: "@strattonmrkt posted the stock-token MM loop"
    summary: "Thread: MM mints/burns against reserve when the token trades above or below the stock."
    occurred_at: 2026-09-02T18:26:06Z
    observed_at: 2026-09-03T03:41:00Z
    affected_fields: [product.mechanism]
    evidence_state: claim
    impact: material
    site_recommendation: feed
    channel_recommendation: none
    receipt_ids: [R-22]
  - id: EVT-6
    type: onchain
    title: "Pons curve completed; LaunchSwept STRATTON vs SPY"
    summary: "Tx 0x543b6e9e…44a3 at 2026-09-02T16:40:59Z; quoteOut 10.9e18 SPY into pool 0xa2c4e1ca…9274."
    occurred_at: 2026-09-02T16:40:59Z
    observed_at: 2026-09-03T03:40:00Z
    affected_fields: [deployment.address, lifecycle, product.mechanism]
    evidence_state: verified
    impact: material
    site_recommendation: profile
    channel_recommendation: none
    receipt_ids: [R-16]
  - id: EVT-7
    type: onchain
    title: "PonsV2LaunchAndBuy minted Stratton Market / STRATTON"
    summary: "Tx 0x2816984d…cf9d from 0xb2B987…d7D5 at 2026-09-02T16:40:58Z; pairToken SPY 0x117c…4C0C."
    occurred_at: 2026-09-02T16:40:58Z
    observed_at: 2026-09-03T03:38:00Z
    affected_fields: [deployment.address, lifecycle, product.mechanism]
    evidence_state: verified
    impact: material
    site_recommendation: profile
    channel_recommendation: none
    receipt_ids: [R-4, R-15]

receipts:
  - { id: R-1, publisher: Blockscout, title: "Token 0xb7eae…8360 Stratton Market / STRATTON", url: "https://robinhoodchain.blockscout.com/address/0xb7eaeCc89d3e2f9Fd597D61726aE824900dB8360", published_at: null, accessed_at: 2026-09-03T03:37:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-2, CLM-3, CLM-4, CLM-6, CLM-12, CLM-16, CLM-24], excerpt: "hash 0xb7eaeCc89d3e2f9Fd597D61726aE824900dB8360 name PonsV2LauncherToken is_contract true is_verified true proxy_type null. token name Stratton Market symbol STRATTON decimals 18 total_supply 1000000000000000000000000000 holders_count 2553 then 2558 type ERC-20. creator_address_hash 0x3711ceA4feaDE896C913C68F01Eda97Cb06D1A42 creation_transaction_hash 0x2816984d40f7485db524d80465f0fc7475dd137b2a45602daa9990c046b0cf9d." }
  - { id: R-2, publisher: Blockscout, title: "PonsV2LauncherToken verified source", url: "https://robinhoodchain.blockscout.com/address/0xb7eaeCc89d3e2f9Fd597D61726aE824900dB8360?tab=contract", published_at: null, accessed_at: 2026-09-03T03:38:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-13], excerpt: "ContractName PonsV2LauncherToken compiler v0.8.35+commit.47b9dedd is_fully_verified true file_path contracts/src/v2/PonsV2LauncherToken.sol verified_at 2026-09-02T17:28:17Z. Comment: Fixed-supply ERC-20 deployed by PonsV2LaunchFactory; entire supply mints to the bonding curve; deployer is immutable reference data and confers no privileges." }
  - { id: R-3, publisher: Blockscout, title: "Address 0x3711…1A42 PonsV2LaunchDeployer", url: "https://robinhoodchain.blockscout.com/address/0x3711ceA4feaDE896C913C68F01Eda97Cb06D1A42", published_at: null, accessed_at: 2026-09-03T03:38:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-16], excerpt: "hash 0x3711ceA4feaDE896C913C68F01Eda97Cb06D1A42 name PonsV2LaunchDeployer is_contract true is_verified true proxy_type null creator_address_hash 0xFdDE5a1E3cDF791Da71E49F817D70C7ceD72CC36." }
  - { id: R-4, publisher: Blockscout, title: "launchAndBuy tx 0x2816984d…cf9d", url: "https://robinhoodchain.blockscout.com/tx/0x2816984d40f7485db524d80465f0fc7475dd137b2a45602daa9990c046b0cf9d", published_at: 2026-09-02T16:40:58Z, accessed_at: 2026-09-03T03:38:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-2, CLM-3, CLM-4, CLM-6, CLM-14, EVT-7], excerpt: "timestamp 2026-09-02T16:40:58.000000Z status ok block_number 52724907 from 0xb2B987E4d34213BA78c570Fb704df27d4823d7D5 (is_contract false) to PonsV2LaunchAndBuy 0xe33E9E479dF8802cb0866d5d05258bEc4cF62948 method launchAndBuy. params name Stratton Market symbol STRATTON twitter https://x.com/strattonmrkt website https://stratton.market pairToken 0x117cc2133c37B721F49dE2A7a74833232B3B4C0C." }
  - { id: R-5, publisher: Robinhood Chain RPC, title: "eth_getCode, name, symbol, socials(), launchFactory() on STRATTON", url: "https://rpc.mainnet.chain.robinhood.com", published_at: null, accessed_at: 2026-09-03T03:40:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-2, CLM-3, CLM-4, CLM-5, CLM-6, CLM-8, CLM-13, CLM-14, CLM-16, CLM-17, CLM-19, CLM-22], excerpt: "eth_chainId 0x1237 eth_blockNumber 0x32a558e (53106062). Token code 3248 B. name Stratton Market symbol STRATTON decimals 18 totalSupply 1e27. deployer() 0xb2B987…d7D5 code 0x. launchFactory() 0x7eD598BcEf8bd9Edd8C97A195C6d13f40801EC7e. curve() 0x4f8Bf15566c084F7Fa473B67131Ae74fc71F4d0F. socials() https://x.com/strattonmrkt and https://stratton.market. owner() reverts." }
  - { id: R-6, publisher: Blockscout, title: "TokenLaunched log for STRATTON", url: "https://robinhoodchain.blockscout.com/tx/0x2816984d40f7485db524d80465f0fc7475dd137b2a45602daa9990c046b0cf9d", published_at: 2026-09-02T16:40:58Z, accessed_at: 2026-09-03T03:39:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-5, CLM-14, CLM-22], excerpt: "PonsV2LaunchFactory TokenLaunched token 0xb7eaeCc89d3e2f9Fd597D61726aE824900dB8360 curve 0x4f8Bf15566c084F7Fa473B67131Ae74fc71F4d0F deployer 0xb2B987E4d34213BA78c570Fb704df27d4823d7D5 pairToken 0x117cc2133c37B721F49dE2A7a74833232B3B4C0C launchConfigId 0 graduationThreshold 10900000000000000000. Block 52724907." }
  - { id: R-7, publisher: DexScreener, title: "latest/dex/tokens STRATTON", url: "https://api.dexscreener.com/latest/dex/tokens/0xb7eaeCc89d3e2f9Fd597D61726aE824900dB8360", published_at: null, accessed_at: 2026-09-03T03:44:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-6, CLM-9, CLM-11, CLM-15, CLM-17, CLM-20, CLM-21, CLM-23, CLM-24, EVT-1], excerpt: "30 robinhood uniswap pairs. Top pairAddress 0xa2c4e1cae8e4fe7cbd06dc26b09e20dbc6b7d719d877e62a95aa8f4c47229274 labels v4 base Stratton Market / STRATTON quote SPDR S&P 500 ETF Trust • Robinhood Token / SPY 0x117cc213…4C0C liquidity.usd 165727.93 volume.h24 9576519.64 fdv 3730588 marketCap 3730588 pairCreatedAt 1788367260000. info.websites [] info.socials []." }
  - { id: R-8, publisher: GeckoTerminal, title: "SPY/STRATTON Pons V2 pool", url: "https://api.geckoterminal.com/api/v2/networks/robinhood/pools/0xa2c4e1cae8e4fe7cbd06dc26b09e20dbc6b7d719d877e62a95aa8f4c47229274", published_at: null, accessed_at: 2026-09-03T03:43:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-10, CLM-15, CLM-20], excerpt: "name SPY / STRATTON pool_created_at 2026-09-02T16:41:00Z fdv_usd 13554957.56 market_cap_usd 13543971 volume_usd.h24 9364596.69 reserve_in_usd 158595.87. dex pons-v2-dex base robinhood_0x117cc2133c37b721f49de2a7a74833232b3b4c0c quote robinhood_0xb7eaecc89d3e2f9fd597d61726ae824900db8360." }
  - { id: R-9, publisher: GeckoTerminal, title: "Stratton Market token", url: "https://api.geckoterminal.com/api/v2/networks/robinhood/tokens/0xb7eaeCc89d3e2f9Fd597D61726aE824900dB8360", published_at: null, accessed_at: 2026-09-03T03:43:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-10, CLM-20], excerpt: "name Stratton Market symbol STRATTON decimals 18 total_supply 1e27 price_usd 0.003803341237 fdv_usd 3803341.24 market_cap_usd null volume_usd.h24 15174470.36 total_reserve_in_usd 297959.49. coingecko_coin_id null." }
  - { id: R-10, publisher: GeckoTerminal, title: "SPY/STRATTON pool page", url: "https://www.geckoterminal.com/robinhood/pools/0xa2c4e1cae8e4fe7cbd06dc26b09e20dbc6b7d719d877e62a95aa8f4c47229274", published_at: null, accessed_at: 2026-09-03T03:42:00Z, kind: third-party-data, authority: aggregator, authenticity: unconfirmed, supports: [], excerpt: "HTML title SPY/STRATTON - SPDR S&P 500 ETF Trust • Robinhood Token Price on Pons V2 Dex | GeckoTerminal. Token page title SPY/STRATTON - Stratton Market Price on Pons V2 Dex." }
  - { id: R-11, publisher: DexScreener, title: "STRATTON/SPY pair page", url: "https://dexscreener.com/robinhood/0xa2c4e1cae8e4fe7cbd06dc26b09e20dbc6b7d719d877e62a95aa8f4c47229274", published_at: null, accessed_at: 2026-09-03T03:37:00Z, kind: third-party-data, authority: aggregator, authenticity: unconfirmed, supports: [], excerpt: "DexScreener robinhood pair 0xa2c4e1cae8e4fe7cbd06dc26b09e20dbc6b7d719d877e62a95aa8f4c47229274 STRATTON/SPY Uniswap v4." }
  - { id: R-12, publisher: Robinhood, title: "GET /rhj/assets Stock Token registry", url: "https://api.robinhood.com/rhj/assets", published_at: null, accessed_at: 2026-09-03T03:40:00Z, kind: docs, authority: primary, authenticity: confirmed, supports: [CLM-15, CLM-21], excerpt: "HTTP 200. assets length 194. tokenSymbol SPY tokenName SPDR S&P 500 ETF Trust • Robinhood Token deployments contractAddress 0x117cc2133c37B721F49dE2A7a74833232B3B4C0C chainId 4663 networkName Robinhood Chain status ASSET_STATUS_ACTIVE tokenDecimals 18 isin US78462F1030." }
  - { id: R-13, publisher: Stratton Market, title: "stratton.market home", url: "https://stratton.market", published_at: null, accessed_at: 2026-09-03T03:42:00Z, kind: official-site, authority: primary, authenticity: confirmed, supports: [CLM-8, CLM-19, CLM-23, CLM-26, CLM-27, CLM-28], excerpt: "title Stratton Market: penny stocks, on-chain. meta description: Stratton Market brings exchange-listed micro-caps on-chain: one share, one token, backed 1:1, then turns every ticker into a launchpad quote asset. On Robinhood Chain. Footer href https://x.com/strattonmrkt. og:url https://strattonstreet.netlify.app. HTML/JS this pass: 0 hits for 0xb7eaeCc89d3e2f9Fd597D61726aE824900dB8360." }
  - { id: R-14, publisher: Stratton Market, title: "Docs · Contracts on mainnet", url: "https://stratton.market/docs", published_at: null, accessed_at: 2026-09-03T03:44:00Z, kind: docs, authority: primary, authenticity: confirmed, supports: [CLM-23, CLM-25], excerpt: "title Docs · Stratton Market. Table Contracts on mainnet: Launchpad 0xBa394F790007dCdACafCC778DF49fa296EF407c9; Graduation migrator 0x0c2AFC11B4CFd181079B6d447328f7a28d14aFb7; Liquidity locker 0x13F2c2349A623E1B5eA86C1c87AfD49B286Ad947; Buyback 0x0d3550B63036dD5CBF669A09df61316b380B66Ea; TOONx 0x5a6c05faF7fFfdd40A2B16a2f300Df3CB3E9AeDf; DSSx 0xe99d4365A5dA0F7A3919Fc1Fe37EcE79BdB16eDa. No 0xb7eae…8360." }
  - { id: R-15, publisher: Blockscout, title: "Address 0xe33E…2948 PonsV2LaunchAndBuy", url: "https://robinhoodchain.blockscout.com/address/0xe33E9E479dF8802cb0866d5d05258bEc4cF62948", published_at: null, accessed_at: 2026-09-03T03:40:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-5, EVT-7], excerpt: "hash 0xe33E9E479dF8802cb0866d5d05258bEc4cF62948 name PonsV2LaunchAndBuy is_contract true is_verified true creator_address_hash 0xFdDE5a1E3cDF791Da71E49F817D70C7ceD72CC36." }
  - { id: R-16, publisher: Blockscout, title: "CurveCompleted / LaunchSwept tx 0x543b6e9e…44a3", url: "https://robinhoodchain.blockscout.com/tx/0x543b6e9e58f126ba12d82ac59457f87a29131e01ff152d4fa8c4bb267d5744a3", published_at: 2026-09-02T16:40:59Z, accessed_at: 2026-09-03T03:40:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-15, CLM-22, EVT-6], excerpt: "timestamp 2026-09-02T16:40:59.000000Z status ok block_number 52724913 from 0xb74dFA4eD379f06f9fD2F0b092ac8Af02161BFCD to 0x38140F2D60383Fb4d1Dd24d7092130d59a60CD6f. CurveCompleted recipient 0x7eD598BcEf8bd9Edd8C97A195C6d13f40801EC7e quoteOut 10900000000000000004 tokenOut 285714285714285714285714285. LaunchSwept token 0xb7eae…8360. PoolManager Swap on 0x8366a39CC670B4001A1121B8F6A443A643e40951." }
  - { id: R-17, publisher: Blockscout, title: "Token 0x117c…4C0C SPY Robinhood Token", url: "https://robinhoodchain.blockscout.com/address/0x117cc2133c37B721F49dE2A7a74833232B3B4C0C", published_at: null, accessed_at: 2026-09-03T03:40:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-15, CLM-21], excerpt: "hash 0x117cc2133c37B721F49dE2A7a74833232B3B4C0C name BeaconProxy is_contract true is_verified true proxy_type eip1967_beacon implementations Stock 0xb35490d6f9163DE4F80d88dc75c3516eb64C5aE2. token name SPDR S&P 500 ETF Trust • Robinhood Token symbol SPY decimals 18 holders_count 50964." }
  - { id: R-18, publisher: "@strattonmrkt", title: "First improvements on factory are already in", url: "https://x.com/strattonmrkt/status/2095309138083406323", published_at: 2026-09-03T00:33:22Z, accessed_at: 2026-09-03T03:41:00Z, kind: social, authority: social, authenticity: confirmed, supports: [CLM-8, CLM-23, CLM-26, CLM-27, CLM-28, EVT-3], excerpt: "Account name Stratton handle @strattonmrkt bio The penny stock market, on-chain. Bootstrapped by @RobinhoodCrypto. Post: First improvements on factory are already in. We're gonna be working through the night to get everything tightened up. Can't wait to see what you guys will cook on Stratton." }
  - { id: R-19, publisher: DexScreener, title: "PAIR/SPY and STACKS/SPY search rows", url: "https://api.dexscreener.com/latest/dex/search?q=STRATTON/SPY", published_at: null, accessed_at: 2026-09-03T03:37:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-9], excerpt: "STRATTON/SPY 0xb7eaeCc89d3e2f9Fd597D61726aE824900dB8360 pair 0xa2c4e1ca…9274. Same search also listed PAIR/SPY 0x6b1d42927B1a84eC28Fa88d4fC6FA7AF404966be pair 0xf224a070…c001 and STACKS/SPY 0xD998cEac55FEF3319B8bcDc4349C7A9CeBB1D94C pair 0x77d0c2cf…5e32. BOW/SPY 0x451b42A15100C340CA12F7c66DE06fac5EA2D751 pair 0xdba909ac…f4c2 from a separate token lookup." }
  - { id: R-20, publisher: "@ZooCry", title: "$Stratton site looks cool", url: "https://x.com/ZooCry/status/2095320472510755247", published_at: 2026-09-03T01:18:24Z, accessed_at: 2026-09-03T03:41:00Z, kind: social, authority: social, authenticity: unconfirmed, supports: [EVT-2], excerpt: "$Stratton site looks cool! @strattonmrkt 0xb7eaecc89d3e2f9fd597d61726ae824900db8360" }
  - { id: R-21, publisher: "@hustle_karma", title: "Stratton Market ($STRATTON) penny-stock launchpad", url: "https://x.com/hustle_karma/status/2095292214587089027", published_at: 2026-09-02T23:26:07Z, accessed_at: 2026-09-03T03:41:00Z, kind: social, authority: social, authenticity: unconfirmed, supports: [EVT-4], excerpt: "Stratton Market ($STRATTON) is a fresh idea on Robinhood Chain: a memecoin launchpad where new coins launch against tokenized penny stocks instead of ETH. CA: 0xb7eaecc89d3e2f9fd597d61726ae824900db8360. Named founder @VictorOnChain." }
  - { id: R-22, publisher: "@strattonmrkt", title: "How a Stratton market maker connects the stock market", url: "https://x.com/strattonmrkt/status/2095216714740850882", published_at: 2026-09-02T18:26:06Z, accessed_at: 2026-09-03T03:41:00Z, kind: social, authority: social, authenticity: confirmed, supports: [EVT-5], excerpt: "How does a stratton market maker connect the stock market to the on-chain market? There's actually a pretty simple loop behind it and it starts with one thing: INVENTORY. Follow-ups describe mint into a premium and buy/burn into a discount." }

gaps:
  - { priority: P0, question: "Does @strattonmrkt or stratton.market/docs bidirectionally publish token CA 0xb7eae…8360?", checked: "token.socials and site footer name the handle and domain; DexScreener socials empty; site HTML/JS and docs table had 0 hits for the CA; @strattonmrkt posts this pass did not embed the CA, 2026-09-03", next: "re-read DexScreener token profile after a Claim Profile; search new posts that embed the CA" }
  - { priority: P0, question: "Is STRATTON the Stratton pad token, or only a Pons graduation that points at that site?", checked: "Docs Launchpad 0xBa394F…07c9 is a different unverified contract; TOONx/DSSx are separate tokens; this CA is PonsV2LauncherToken vs SPY, 2026-09-03", next: "read the docs Launchpad bytecode against create txs for TOONx and any STRATTON mention on /launchpad" }
  - { priority: P1, question: "Do TOONx 0x5a6c05…AeDf / DSSx 0xe99d43…6eDa appear in GET /rhj/assets?", checked: "GET /rhj/assets 194 assets, SPY hit 1 at 0x117c…4C0C; TOONx/DSSx scan not run as a full ticker pass this packet", next: "scan /rhj/assets for TOON, DSS, AIXI and compare to the docs table" }
  - { priority: P1, question: "Who can mint/redeem the advertised TICKERx tokens versus this Pons STRATTON token?", checked: "@strattonmrkt posted Stratton's MM is the only one who can mint and burn stock tokens, 2026-09-02; that path is not this Pons ERC-20", next: "read docs Launchpad / buyback source once verified" }
  - { priority: P2, question: "Which Gecko window ranked this book near $9.57M vol / $167k liq?", checked: "Live DexScreener 9576519 / 165727; Gecko pool 9364596 / 158595; Gecko token all-pools 15174470, 2026-09-03", next: "keep the DexScreener pair slice as the STRATTON/SPY book; do not use Gecko pool fdv_usd 13.5M as STRATTON fdv" }
---

# STRATTON — research packet

## What it is

A Pons v2 ERC-20 that graduated into a Uniswap v4 STRATTON/SPY pool. Traders buy and sell STRATTON against the Robinhood SPY Stock Token on that book. Token metadata and stratton.market describe a penny-stock launchpad whose docs list other contracts, not this CA.

Themes: memecoin, stock-paired:SPY, rwa, launchpad

## Why it matters

The STRATTON/SPY Uniswap v4 book printed about $9.58M of 24h volume on DexScreener at collection, with the quote leg the live Robinhood SPY Stock Token. The same search also lists PAIR/SPY, STACKS/SPY, BOW/SPY, and NORMIE/SPY as separate tokens. stratton.market describes a penny-stock launchpad; this token was minted by Pons, not that docs Launchpad.

## What could go wrong

USD liquidity figures on the STRATTON/SPY book count both sides, and the quote side is SPY, not USDG. Gecko names the pool SPY/STRATTON and prints pool fdv on the SPY base. Site/docs do not embed this CA, so the handle/domain mapping stays unconfirmed-official for the token.

## Product and mechanics

PonsV2LaunchAndBuy 0xe33E…2948 launchAndBuy from 0xb2B987…d7D5 at 2026-09-02T16:40:58Z minted Stratton Market / STRATTON supply 1e9*1e18 onto PonsV2BondingCurve 0x4f8B…4d0F quoted against pairToken SPY 0x117c…4C0C. factory TokenLaunched names PonsV2LaunchFactory 0x7eD5…EC7e and graduationThreshold 10.9e18. [verified R-4 R-5 R-6]

CurveCompleted / LaunchSwept tx 0x543b6e9e…44a3 one second later (2026-09-02T16:40:59Z) swept quoteOut 10.9e18 SPY. DexScreener pairCreatedAt 2026-09-02T16:41:00Z for Uniswap v4 STRATTON/SPY 0xa2c4e1ca…9274. Gecko dex id pons-v2-dex; PoolManager Swap is 0x8366…0951. Secondary STRATTON/USDG and STRATTON/ETH books exist with less liquidity than the SPY book. [verified R-7 R-8 R-16]

## Control and security

token owner() reverts. Verified PonsV2LauncherToken source says deployer is immutable reference data with no privileges. Deployer 0xb2B987…d7D5 has no code. launchFactory and curve are set at construction. [verified R-2 R-5]

PonsV2LauncherToken, PonsV2LaunchDeployer, PonsV2LaunchFactory, PonsV2LaunchAndBuy, and PonsV2BondingCurve are verified on Blockscout (compiler v0.8.35). Docs Launchpad 0xBa394F…07c9 is_verified false this pass. No audit report URL was located this pass. [verified R-2 R-3 R-14] [unknown]

## Team and provenance

token.socials() returns https://x.com/strattonmrkt and https://stratton.market. The live site footer links that X account; the account bio matches the on-chain description. DexScreener info.websites and info.socials are empty. Site HTML/JS and docs this pass do not embed CA 0xb7eae…8360. Flag unconfirmed-official for this token. [claim R-7 R-13 R-14 R-18]

@hustle_karma named @VictorOnChain as founder. That handle was not confirmed on @strattonmrkt or docs this pass. [claim R-21]

## Economics and activity

DexScreener STRATTON/SPY Uniswap v4 24h volume is 9576519.64 USD and liquidity.usd is 165727.93 at 2026-09-03T03:44:00Z. fdv/marketCap is 3730588. Pair created 2026-09-02T16:41:00Z. [claim R-7]

Gecko same pool volume_usd.h24 is 9364596.69 and reserve_in_usd is 158595.87. Gecko token fdv_usd is 3803341.24. Gecko token volume_usd.h24 is 15174470.36 across all pools, not the SPY book. Gecko pool fdv_usd 13554957.56 uses SPY as base. [claim R-8 R-9]

Blockscout holders_count 2558. [claim R-1]

## Material risks

- Quote token SPY 0x117c…4C0C is the Robinhood Stock Token in GET /rhj/assets; pool USD reserve is STRATTON plus SPY. [verified R-12 R-17]
- Gecko pool fdv is not the STRATTON token fdv. [claim R-8 R-9]
- Site/docs list Launchpad 0xBa394F…07c9 and do not embed this CA; flag unconfirmed-official. [claim R-13 R-14]
- No audit report URL this pass. [unknown]

## Verification passes

- Receipts: Blockscout token/deployer/factory/launchAndBuy/curve/SPY and both launch/sweep txs, RPC name/symbol/socials/launchFactory/curve/deployer, DexScreener, Gecko pool/token, /rhj/assets, stratton.market and /docs, and the @strattonmrkt / CT posts were opened on 2026-09-03 and excerpts copied from the responses. [verified R-1 R-5 R-7 R-8 R-12 R-13]
- Numbers: 9576519.64 is the DexScreener STRATTON/SPY pool 24h volume, not the 15174470.36 Gecko token all-pools figure. Reserve 165727.93 is DexScreener liquidity.usd; Gecko reserve 158595.87 is the same book, inverted base. [claim R-7 R-8 R-9]
- Adversarial: the strongest contrary reading is that this CA is the Stratton pad token and that STRATTON/SPY is the PAIR/SPY book. Docs Launchpad is 0xBa394F…07c9, PairLaunchpadV5 created PAIR 0x6b1d…66be, and DexScreener lists STACKS/BOW/NORMIE as other /SPY tokens. [inference R-7 R-14 R-19]

## Operations log

- Base: `git -C /Users/harsharnsingh/proofline-pr59 rev-parse origin/main` → 334ca0619aa62e922da83f46de021f06d12348cf. Census 49 slugs have no stratton / STRATTON / Stratton Market / 0xb7eae…8360. Pending packet pair is PAIR 0x6b1d…66be / pair.fund, not this token. possible_matches limited to census slugs pons, stonks-fun, longbow.
- Explorer: Blockscout api/v2 token, deployer, factory, launchAndBuy, curve, SPY, launchAndBuy 0x2816984d…cf9d, CurveCompleted 0x543b6e9e…44a3, TokenLaunched / LaunchSwept logs, holders. RPC eth_getCode/eth_call with Mozilla UA at block 53106062.
- Aggregators: DexScreener latest/dex/tokens and search STRATTON/SPY; Gecko token and pool with Mozilla UA after 429; Gecko HTML titles Pons V2 Dex.
- Registry: GET api.robinhood.com/rhj/assets 194 assets, SPY 0x117c…4C0C.
- Official: stratton.market, /docs, /launchpad; token.socials(); @strattonmrkt posts.
- Social: X keyword STRATTON / from:strattonmrkt; user search strattonmrkt.
- Failed: Gecko API 429 on the first Mozilla pass (retried); docs Launchpad/migrator/locker/buyback are unverified; site og:url is strattonstreet.netlify.app; @strattonmrkt posts this pass had no CA.
- Time: collection 2026-09-03T03:36Z–2026-09-03T03:45Z.
