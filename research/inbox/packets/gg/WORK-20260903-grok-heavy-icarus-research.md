---
# Packet v2 (docs/research-system.md §5). Seed with Icarus What-it-is + events.
contract_version: proofline-research-v2
work_id: WORK-20260903-grok-heavy-icarus-research
producer: grok-heavy
role: collector
base_sha: 334ca0619aa62e922da83f46de021f06d12348cf
slug: gg
name: GG
packet_tier: seed
as_of: 2026-09-03T05:28:00Z
prior_packet: null
supersedes: null
owned_slugs: [gg]
allowed_paths:
  - research/inbox/packets/gg/WORK-20260903-grok-heavy-icarus-research.md

identity:
  canonical_name: GG
  aliases: ["Golden Goose"]
  symbols: [GG]
  entity_kind: token
  chain_scope: robinhood-native
  official_domain: https://thegoldengoose.live
  official_handle: "NULL — DexScreener info.socials x.com/GoldenGooseRH; token.socials() twitter https://x.com/goldengooserh; @GoldenGooseRH bio pins CA 0xcacb…cb68 without the site URL; site HTML contains the CA and no x.com handle this pass; flag unconfirmed-official"
  repository: "NULL — no GitHub org or repository URL on thegoldengoose.live, DexScreener, Gecko, Blockscout, or X search this pass"
  possible_matches:
    - slug: pons
      signals: [shared-address]
      contrary_signals:
        - "Census Pons is the bonding-curve pad at ponsfamily.com / @ponsdotfamily with PonsV2LaunchFactory 0x7eD5…EC7e"
        - "GG is the ERC-20 at 0xcaCB…cb68 created through PonsV2LaunchAndBuy.launchAndBuy; entity_kind token, not protocol"
        - "No shared domain or handle; thegoldengoose.live / @GoldenGooseRH do not operate the Pons pad"
    - slug: long
      signals: [other]
      contrary_signals:
        - "Census LONG is the stock-paired factory at app.long.xyz / @longdotxyz with LongLauncher 0x22e9…eeED"
        - "GG is PonsV2LaunchAndBuy.launchAndBuy, not LongLauncher"
        - "Shared quote rail GLD only; no shared domain, handle, or reproduced address"
    - slug: bankr
      signals: [other]
      contrary_signals:
        - "Census Bankr is an agent execution surface at bankr.bot / @bankrbot"
        - "GG create tx 0x7b4e…0874 calls PonsV2LaunchAndBuy, not a Bankr surface"
        - "No shared domain or handle"
    - slug: artificial-inu
      signals: [other]
      contrary_signals:
        - "Census Artificial Inu is $AI at 0x2E8c…1e18 paired to NVDA via LongLauncher, site artificialinu.com / @ArtificiallyInu"
        - "GG is $GG at 0xcaCB…cb68 paired to GLD 0xC9a9…FC4e via Pons v2"
        - "No shared domain, handle, or reproduced address"

classification:
  primary_leaf: launch/graduation-token
  secondary_leaves: [rwa-products/stock-paired-token]
  mechanism_tags: [bonding-curve, amm, stock-paired, rwa, launchpad]
  ecosystem_role: graduation
  lifecycle: mainnet
  coverage_recommendation: seed
  evidence_state: partly-verified
  rationale: "Not in the 49-row census. Token 0xcaCB…cb68 has 3248 B of code on 4663; launchFactory() returns PonsV2LaunchFactory 0x7eD5…EC7e; launchAndBuy at 2026-08-28T23:59:19Z minted Golden Goose / GG against GLD 0xC9a9…FC4e and CurveCompleted / LaunchSwept at 2026-08-29T00:10:48Z. Gecko/DexScreener name the GG/GLD book 0x9009…43c5 at 2026-08-29T00:10:51Z. GLD is the quote rail. Distinct from packed UBIK/GLD, CASHBIRD/GLD, SCHIFFY/GLD, and ROCK/GLD. Token page is_verified false this pass. [R-1] [R-4] [R-5] [R-7] [R-8] [R-12] [R-20]"

qualifying:
  deployed_on_chain: { status: pass, claim_ids: [CLM-4, CLM-5, CLM-6], note: "" }
  native_play:       { status: pass, claim_ids: [CLM-1, CLM-15], note: "" }
  citable:           { status: pass, claim_ids: [CLM-2, CLM-3, CLM-4], note: "" }
  research_story:    { status: pass, claim_ids: [CLM-1, CLM-9, CLM-10], note: "" }

links:
  - { kind: site, url: "https://thegoldengoose.live", authenticity: confirmed }
  - { kind: x, url: "https://x.com/GoldenGooseRH", authenticity: unconfirmed }

deployments:
  - label: GG token (Pons v2 launcher token)
    role: token
    address:
      value: "0xcaCB0e9caCcee63ec4d82952E561a291c68Bcb68"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T05:22:00Z
      exists_on_4663: true
      explorer_source_verified: false
    receipt_ids: [R-1, R-4, R-5]
  - label: PonsV2LaunchFactory (token launchFactory)
    role: factory
    address:
      value: "0x7eD598BcEf8bd9Edd8C97A195C6d13f40801EC7e"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T05:24:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-3, R-5, R-6]
  - label: PonsV2LaunchAndBuy (create target)
    role: factory
    address:
      value: "0xe33E9E479dF8802cb0866d5d05258bEc4cF62948"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T05:24:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-4, R-6, R-21]
  - label: GG bonding curve (token curve)
    role: other
    address:
      value: "0x529562938bfB293b7A1112041e2c9AC62FE10079"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T05:24:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-2, R-5, R-6, R-20]
  - label: GLD SPDR Gold Trust Robinhood Token (pair quote / rail)
    role: token
    address:
      value: "0xC9a981FEE1F9DEc688bb123ccDeCc63D0deBFC4e"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T05:24:00Z
      exists_on_4663: true
      explorer_source_verified: true
      explorer_source_verification_scope: proxy-shell-only
      implementation_source_verified: null
    receipt_ids: [R-7, R-12, R-16]

metrics:
  - { kind: volume_24h, value: 613848.84, currency: USD, as_of: 2026-09-03T05:25:00Z, window: 24h, method: "api.geckoterminal.com/api/v2/networks/robinhood/pools/0x9009d141e9189ca9d19d565468078383c192c2fa1d6f855957507bf8539643c5 volume_usd.h24 (gld/GG pool slice, not Gecko token all-pools)", class: claim, receipt_ids: [R-8] }
  - { kind: tvl, value: 201551.84, currency: USD, as_of: 2026-09-03T05:25:00Z, window: point, method: "api.geckoterminal.com/api/v2/networks/robinhood/pools/0x9009d141e9189ca9d19d565468078383c192c2fa1d6f855957507bf8539643c5 reserve_in_usd (gld/GG pool, not an all-pools figure)", class: claim, receipt_ids: [R-8] }
  - { kind: market_cap, value: 5029694, currency: USD, as_of: 2026-09-03T05:22:00Z, window: point, method: "api.dexscreener.com/latest/dex/tokens/0xcaCB0e9caCcee63ec4d82952E561a291c68Bcb68 GG/GLD pair 0x9009d141…43c5 fdv/marketCap", class: claim, receipt_ids: [R-7] }
  - { kind: holders, value: 6164, currency: null, as_of: 2026-09-03T05:24:00Z, window: point, method: "robinhoodchain.blockscout.com/api/v2/tokens/0xcaCB0e9caCcee63ec4d82952E561a291c68Bcb68 holders_count", class: claim, receipt_ids: [R-1] }

reproductions:
  - { id: REP-1, method: explorer-rpc, chain_id: 4663, checked_at: 2026-09-03T05:24:00Z, receipt_ids: [R-5], result: "rpc.mainnet.chain.robinhood.com eth_chainId 0x1237 (4663) eth_blockNumber 0x32b4ade (53168862). Token 0xcaCB…cb68 eth_getCode 3248 B prefix 60806040, not EIP-1167. name Golden Goose, symbol GG, decimals 18, totalSupply 1e27. owner() and factory() revert. deployer() 0xC7c649036314B9107859a0b61e37A50C25648600 (eth_getCode 0x). launchFactory() 0x7eD598BcEf8bd9Edd8C97A195C6d13f40801EC7e. curve() 0x529562938bfB293b7A1112041e2c9AC62FE10079 (10229 B). socials() twitter https://x.com/goldengooserh, telegram/website/discord/farcaster empty. description() A golden goose is any asset that quietly prints income while you sleep. This one prints gold. Factory code 24177 B. GLD name SPDR Gold Shares • Robinhood Token symbol GLD code 283 B. Bytecode sha256 192f798a…2473 differs from GB Pons v2 token 5f3b4621…c4af at the same 3248 B length. Other GG 0x07Ff…1E18 code 44 B EIP-1167 impl 0x3Be8…C599." }
  - { id: REP-2, method: explorer-ui, chain_id: 4663, checked_at: 2026-09-03T05:24:00Z, receipt_ids: [R-1, R-2, R-3, R-4, R-6, R-16, R-20, R-21], result: "Blockscout api/v2 token 0xcaCB…cb68 name Golden Goose symbol GG holders_count 6164 total_supply 1e27 is_verified false proxy_type null creator_address_hash null this pass. launchAndBuy tx 0x7b4e…0874 2026-08-28T23:59:19Z block 48709296 from EOA 0xC7c6…8600 to PonsV2LaunchAndBuy 0xe33E…2948. TokenLaunched token 0xcaCB…cb68 curve 0x5295…0079 pairToken GLD 0xC9a9…FC4e graduationThreshold 24.940596949573086306e18. CurveCompleted / LaunchSwept tx 0x3735…7fad 2026-08-29T00:10:48Z block 48716111 quoteOut 24.940596949573086379e18. GLD token name SPDR Gold Shares • Robinhood Token holders_count 14120. Curve PonsV2BondingCurve is_verified true file contracts/src/v2/PonsV2BondingCurve.sol." }
  - { id: REP-3, method: api, checked_at: 2026-09-03T05:22:00Z, receipt_ids: [R-7, R-15], result: "DexScreener latest/dex/tokens/0xcaCB…cb68: 12 robinhood uniswap pairs; GG/GLD v4 0x9009…43c5 quote 0xC9a9…FC4e SPDR Gold Trust • Robinhood Token / GLD liquidity.usd 204719.61 volume.h24 611987.16 fdv/marketCap 5029694 pairCreatedAt 1787962251000 (2026-08-29T00:10:51Z) info.websites https://thegoldengoose.live info.socials x.com/GoldenGooseRH. Secondary GG/WETH v3 0xd89F…7242 liq 73531.15 vol 1703042.71; GG/USDG v4 0xe8dc…2a04 liq 206104.41 vol 1277158.36. Search also returns a thinner GG/GLD at 0x07Ff…1E18 liq 21652.7 vol 545.01." }
  - { id: REP-4, method: api, checked_at: 2026-09-03T05:25:00Z, receipt_ids: [R-8, R-9], result: "Gecko token GET HTTP 200. name Golden Goose fdv_usd 4883606.28 market_cap_usd null volume_usd.h24 3633381.84 (all pools) total_reserve_in_usd 454094.18. launchpad_details completed true completed_at 2026-08-29T00:10:51Z migrated_destination_pool_address 0x9009…43c5. Gecko pool 0x9009…43c5 name gld / GG pool_created_at 2026-08-29T00:10:51Z volume_usd.h24 613848.84 reserve_in_usd 201551.84 fdv_usd 3475213.59 (pool base is GLD 0xC9a9…FC4e, quote is GG 0xcaCB…cb68; dex pons-v2-dex)." }
  - { id: REP-5, method: api, checked_at: 2026-09-03T05:25:00Z, receipt_ids: [R-12], result: "GET api.robinhood.com/rhj/assets HTTP 200; assets length 194; one GLD hit tokenSymbol GLD tokenName SPDR Gold Trust • Robinhood Token contractAddress 0xC9a981FEE1F9DEc688bb123ccDeCc63D0deBFC4e chainId 4663 status ASSET_STATUS_ACTIVE isin US78463V1070. tokenSymbol GG returned 0 hits." }
  - { id: REP-6, method: official-crosslink, checked_at: 2026-09-03T05:25:00Z, receipt_ids: [R-5, R-7, R-10, R-13], result: "token.socials() twitter https://x.com/goldengooserh website empty. DexScreener info.websites https://thegoldengoose.live info.socials x.com/GoldenGooseRH. thegoldengoose.live HTTP 200 title Every GLD reward, verified; keywords Golden Goose,GG,GLD,Robinhood Chain,Pons; HTML contains CA 0xcacb0e9caccee63ec4d82952e561a291c68bcb68; no x.com handle in static HTML this pass. @GoldenGooseRH bio pins that CA. No GitHub URL this pass." }

claims:
  - { id: CLM-1, field: product.mechanism, value: "PonsV2LaunchAndBuy.launchAndBuy deploys a 1e9-supply token onto a bonding curve quoted against pairToken GLD; CurveCompleted / LaunchSwept ~11.5 minutes later names quoteOut 24.9406e18 GLD. Gecko/DexScreener record the Uniswap v4 GG/GLD book 0x9009…43c5 at 2026-08-29T00:10:51Z (Gecko dex pons-v2-dex). Mint of 1e27 went to curve 0x5295…0079. Token owner() reverts; deployer() is an EOA with no code.", class: verified, observed_at: 2026-09-03T05:25:00Z, receipt_ids: [R-4, R-5, R-6, R-8, R-20], reproduction_ids: [REP-1, REP-2, REP-4], supersedes: null }
  - { id: CLM-2, field: identity.name, value: "Golden Goose", class: verified, observed_at: 2026-09-03T05:22:00Z, receipt_ids: [R-1, R-4, R-5], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-3, field: identity.symbol, value: "GG", class: verified, observed_at: 2026-09-03T05:22:00Z, receipt_ids: [R-1, R-4, R-5], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-4, field: deployment.address, value: "0xcaCB0e9caCcee63ec4d82952E561a291c68Bcb68", class: verified, observed_at: 2026-09-03T05:24:00Z, receipt_ids: [R-1, R-4, R-5], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-5, field: deployment.address, value: "0x7eD598BcEf8bd9Edd8C97A195C6d13f40801EC7e", class: verified, observed_at: 2026-09-03T05:24:00Z, receipt_ids: [R-3, R-5, R-6], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-6, field: lifecycle, value: mainnet, class: verified, observed_at: 2026-09-03T05:25:00Z, receipt_ids: [R-1, R-4, R-5, R-7, R-8], reproduction_ids: [REP-1, REP-2, REP-3, REP-4], supersedes: null }
  - { id: CLM-7, field: taxonomy.primary-leaf, value: launch/graduation-token, class: claim, observed_at: 2026-09-03T05:25:00Z, receipt_ids: [R-4, R-8, R-9], reproduction_ids: [], supersedes: null }
  - { id: CLM-8, field: identity.handle, value: "NULL — no bidirectional official handle; onchain / DexScreener name @GoldenGooseRH; bio pins CA 0xcacb…cb68 without the site; site HTML has the CA and no x.com handle; flag unconfirmed-official", class: claim, observed_at: 2026-09-03T05:25:00Z, receipt_ids: [R-5, R-7, R-10, R-13], reproduction_ids: [REP-6], supersedes: null }
  - { id: CLM-9, field: relationship, value: "Pair quote GLD 0xC9a9…FC4e is SPDR Gold Trust • Robinhood Token in GET /rhj/assets (194 assets, 1 GLD hit, same address; Blockscout token name SPDR Gold Shares • Robinhood Token). GLD is a rail, not this subject. Distinct from packed UBIK/GLD 0x8124…68Bd pair 0x1f28…e676, CASHBIRD/GLD 0x38C8…1e18 pair 0xf25f…fdfb, SCHIFFY/GLD 0x42aF…1E18 pair 0xc749…777e, and ROCK/GLD 0xB6b5…1E18 pair 0x028a…1d7e. Distinct from census LONG / Pons.", class: verified, observed_at: 2026-09-03T05:25:00Z, receipt_ids: [R-7, R-12, R-15, R-16], reproduction_ids: [REP-3, REP-5], supersedes: null }
  - { id: CLM-10, field: economics.metric, value: "Gecko gld/GG pool 24h volume 613848.84 USD and reserve_in_usd 201551.84 at 2026-09-03T05:25:00Z (Gecko pool slice; pool fdv_usd 3475213.59 is the GLD-as-base book, not the Gecko token fdv)", class: verified, observed_at: 2026-09-03T05:25:00Z, receipt_ids: [R-8, R-9], reproduction_ids: [REP-4], supersedes: null }
  - { id: CLM-11, field: economics.metric, value: "DexScreener GG/GLD liquidity.usd 204719.61 volume.h24 611987.16 fdv/marketCap 5029694; priceUsd 0.005029; h24 txns buys 904 sells 1064 at 2026-09-03T05:22:00Z", class: verified, observed_at: 2026-09-03T05:22:00Z, receipt_ids: [R-7], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-12, field: economics.metric, value: 6164, class: verified, observed_at: 2026-09-03T05:24:00Z, receipt_ids: [R-1], reproduction_ids: [REP-2], supersedes: null }
  - { id: CLM-13, field: control.owner, value: "token owner() reverts; deployer() 0xC7c6…8600 has no code. Graduation CreditedToken protocol GLD to SafeProxy 0x263e…19Dd (Pons fee path, not a GG-token admin on this call).", class: verified, observed_at: 2026-09-03T05:25:00Z, receipt_ids: [R-5, R-20], reproduction_ids: [REP-1], supersedes: null }
  - { id: CLM-14, field: control.privileged-role, value: "deployer() / launchAndBuy from 0xC7c649036314B9107859a0b61e37A50C25648600; launchFactory 0x7eD5…EC7e; curve 0x5295…0079; launchAndBuy helper 0xe33E…2948; snipe tax param 100", class: verified, observed_at: 2026-09-03T05:24:00Z, receipt_ids: [R-4, R-5, R-6], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-15, field: other, value: "Pair asset is GLD 0xC9a981FEE1F9DEc688bb123ccDeCc63D0deBFC4e (GET /rhj/assets active Robinhood Token); venue for the assignment book is Uniswap v4 pool 0x9009…43c5, Gecko dex id pons-v2-dex. Secondary GG/WETH v3 and GG/USDG v4 books have higher 24h volume than GG/GLD this pass.", class: verified, observed_at: 2026-09-03T05:25:00Z, receipt_ids: [R-7, R-8, R-12], reproduction_ids: [REP-3, REP-4, REP-5], supersedes: null }
  - { id: CLM-16, field: deployment.role, value: "Token creator_address_hash was empty on the token page; launchFactory() names PonsV2LaunchFactory 0x7eD5…EC7e, not LongLauncher, PAIR, or hood.fun. Create method is launchAndBuy, not factory.launchToken.", class: verified, observed_at: 2026-09-03T05:24:00Z, receipt_ids: [R-1, R-3, R-4, R-5], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-17, field: taxonomy.chain-scope, value: robinhood-native, class: verified, observed_at: 2026-09-03T05:22:00Z, receipt_ids: [R-5, R-7], reproduction_ids: [REP-1, REP-3], supersedes: null }
  - { id: CLM-18, field: security.audit, value: "No audit report URL was located on thegoldengoose.live, DexScreener, Gecko, Blockscout, or X search this pass. GG token is_verified false this pass.", class: unknown, observed_at: 2026-09-03T05:28:00Z, receipt_ids: [], reproduction_ids: [], supersedes: null }
  - { id: CLM-19, field: communications.status, value: "unconfirmed-official: @GoldenGooseRH name Golden Goose, bio Golden Goose on Robinhood plus CA 0xcacb…cb68; DexScreener lists x.com/GoldenGooseRH and thegoldengoose.live; site HTML has the CA and no handle.", class: claim, observed_at: 2026-09-03T05:25:00Z, receipt_ids: [R-7, R-10, R-13], reproduction_ids: [], supersedes: null }
  - { id: CLM-20, field: economics.metric, value: "DexScreener GG/GLD fdv/marketCap 5029694. Gecko token fdv_usd 4883606.28. Gecko pool fdv_usd 3475213.59 is GLD-as-base and is not the GG token fdv.", class: verified, observed_at: 2026-09-03T05:25:00Z, receipt_ids: [R-7, R-8, R-9], reproduction_ids: [REP-3, REP-4], supersedes: null }
  - { id: CLM-21, field: deployment.address, value: "0xC9a981FEE1F9DEc688bb123ccDeCc63D0deBFC4e", class: verified, observed_at: 2026-09-03T05:25:00Z, receipt_ids: [R-12, R-16], reproduction_ids: [REP-2, REP-5], supersedes: null }
  - { id: CLM-22, field: deployment.address, value: "0x529562938bfB293b7A1112041e2c9AC62FE10079", class: verified, observed_at: 2026-09-03T05:24:00Z, receipt_ids: [R-2, R-5, R-6, R-20], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-23, field: identity.domain, value: "https://thegoldengoose.live", class: verified, observed_at: 2026-09-03T05:25:00Z, receipt_ids: [R-7, R-13], reproduction_ids: [REP-6], supersedes: null }
  - { id: CLM-24, field: candidate, value: "gg | GG | NULL | https://thegoldengoose.live — discovery token not in census 49", class: claim, observed_at: 2026-09-03T05:28:00Z, receipt_ids: [R-1, R-7], reproduction_ids: [], supersedes: null }
  - { id: CLM-25, field: relationship, value: "Ticker collision: Blockscout search Golden Goose also returns DopplerERC20V1 clone 0x07Ff5dD82f91e6e5e3B08c89eB135f733e6c1E18 (holders_count 7, EIP-1167 impl 0x3Be8…C599) plus many other same-name tokens. DexScreener has a thinner GG/GLD book at that 0x07Ff…1E18 address. Subject is 0xcaCB…cb68 only.", class: claim, observed_at: 2026-09-03T05:24:00Z, receipt_ids: [R-15, R-17], reproduction_ids: [], supersedes: null }
  - { id: CLM-26, field: product.mechanism, value: "Site title Every GLD reward, verified; ticker copy 293.94 GLD delivered / 30,073 payouts / 1,798 wallets. X posts describe hold GG then GLD hits wallets. Token RPC goldToken/claim/rewardToken/distributor revert this pass; payout path was not reproduced on 0xcaCB…cb68.", class: claim, observed_at: 2026-09-03T05:25:00Z, receipt_ids: [R-5, R-10, R-11, R-13], reproduction_ids: [], supersedes: null }
  - { id: CLM-27, field: communications.status, value: "copypasta-pattern: netlify vote pages reused CA 0xcaCB…cb68 (robinhood-main-dex-rkx.netlify.app/vote/… listing ids 6515 and 6888). DexScreener lists thegoldengoose.live, not those netlify hosts.", class: claim, observed_at: 2026-09-03T05:26:00Z, receipt_ids: [R-19], reproduction_ids: [], supersedes: null }

conflicts: []

events:
  - id: EVT-1
    type: onchain
    title: "Gecko gld/GG 24h volume $614k, reserve $202k"
    summary: "Pool 0x9009…43c5 volume_usd.h24 613848.84 reserve_in_usd 201551.84. DexScreener same pair liquidity.usd 204719.61 volume.h24 611987.16 fdv 5029694."
    occurred_at: 2026-09-03T05:25:00Z
    observed_at: 2026-09-03T05:25:00Z
    affected_fields: [economics.metric, activity.status]
    evidence_state: verified
    impact: material
    site_recommendation: both
    channel_recommendation: none
    receipt_ids: [R-7, R-8]
  - id: EVT-2
    type: risk
    title: "Netlify vote pages used GG CA (copypasta-pattern)"
    summary: "@spiritlab73 posted robinhood-main-dex-rkx.netlify.app/vote/0xcaCB…cb68 listing id 6515; @veilcircuitNFT used listing id 6888 on the same host."
    occurred_at: 2026-09-03T04:48:37Z
    observed_at: 2026-09-03T05:26:00Z
    affected_fields: [communications.status]
    evidence_state: claim
    impact: routine
    site_recommendation: none
    channel_recommendation: none
    receipt_ids: [R-19]
  - id: EVT-3
    type: ct
    title: "@GoldenGooseRH quoted Vlad Enjoy the gold"
    summary: "@GoldenGooseRH posted enjoy the gold quoting @vladtenev. Bio pins CA 0xcacb…cb68."
    occurred_at: 2026-09-02T19:35:03Z
    observed_at: 2026-09-03T05:22:00Z
    affected_fields: [identity.handle, communications.status]
    evidence_state: claim
    impact: routine
    site_recommendation: feed
    channel_recommendation: none
    receipt_ids: [R-10]
  - id: EVT-4
    type: ct
    title: "@Jonas00555724 posted GG pays GLD to holders"
    summary: "Post: Hold $GG then fees print and GLD hits the wallet. Compared $GG/GLD to $AI/NVDA."
    occurred_at: 2026-09-02T12:08:35Z
    observed_at: 2026-09-03T05:22:00Z
    affected_fields: [activity.status, product.mechanism]
    evidence_state: claim
    impact: material
    site_recommendation: feed
    channel_recommendation: none
    receipt_ids: [R-11]
  - id: EVT-5
    type: ct
    title: "@CCrypto2941 posted GG is a goose that lays gold"
    summary: "Thread: Hold $GG, trades generate fees, fees settle in GLD. Later post said $33K paid out to holders."
    occurred_at: 2026-09-02T21:28:30Z
    observed_at: 2026-09-03T05:22:00Z
    affected_fields: [activity.status, product.mechanism]
    evidence_state: claim
    impact: routine
    site_recommendation: feed
    channel_recommendation: none
    receipt_ids: [R-22]
  - id: EVT-6
    type: onchain
    title: "PonsV2LaunchAndBuy launchAndBuy minted Golden Goose / GG"
    summary: "Tx 0x7b4e…0874 from 0xC7c6…8600 at 2026-08-28T23:59:19Z; TokenLaunched pool quote GLD; mint 1e27 to curve 0x5295…0079."
    occurred_at: 2026-08-28T23:59:19Z
    observed_at: 2026-09-03T05:24:00Z
    affected_fields: [deployment.address, lifecycle, product.mechanism]
    evidence_state: verified
    impact: material
    site_recommendation: profile
    channel_recommendation: none
    receipt_ids: [R-4, R-6]
  - id: EVT-7
    type: onchain
    title: "CurveCompleted / LaunchSwept into GG/GLD book"
    summary: "Tx 0x3735…7fad at 2026-08-29T00:10:48Z quoteOut 24.9406e18 GLD. Gecko/DexScreener pool 0x9009…43c5 created 2026-08-29T00:10:51Z."
    occurred_at: 2026-08-29T00:10:48Z
    observed_at: 2026-09-03T05:25:00Z
    affected_fields: [deployment.address, lifecycle, product.mechanism]
    evidence_state: verified
    impact: material
    site_recommendation: profile
    channel_recommendation: none
    receipt_ids: [R-8, R-20]

receipts:
  - { id: R-1, publisher: Blockscout, title: "Token 0xcaCB…cb68 Golden Goose / GG", url: "https://robinhoodchain.blockscout.com/address/0xcaCB0e9caCcee63ec4d82952E561a291c68Bcb68", published_at: null, accessed_at: 2026-09-03T05:24:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-2, CLM-3, CLM-4, CLM-6, CLM-12, CLM-16, CLM-24], excerpt: "hash 0xcaCB0e9caCcee63ec4d82952E561a291c68Bcb68 name Golden Goose is_contract true is_verified false proxy_type null creator_address_hash null. token symbol GG decimals 18 total_supply 1000000000000000000000000000 holders_count 6164 type ERC-20." }
  - { id: R-2, publisher: Blockscout, title: "Address 0x5295…0079 PonsV2BondingCurve", url: "https://robinhoodchain.blockscout.com/address/0x529562938bfB293b7A1112041e2c9AC62FE10079", published_at: null, accessed_at: 2026-09-03T05:24:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-22], excerpt: "hash 0x529562938bfB293b7A1112041e2c9AC62FE10079 name PonsV2BondingCurve is_contract true is_verified true. file_path contracts/src/v2/PonsV2BondingCurve.sol compiler 0.8.35+commit.47b9dedd is_partially_verified false verified_at 2026-09-02T01:25:10Z." }
  - { id: R-3, publisher: Blockscout, title: "Address 0x7eD5…EC7e PonsV2LaunchFactory", url: "https://robinhoodchain.blockscout.com/address/0x7eD598BcEf8bd9Edd8C97A195C6d13f40801EC7e", published_at: null, accessed_at: 2026-09-03T05:24:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-5, CLM-16], excerpt: "hash 0x7eD598BcEf8bd9Edd8C97A195C6d13f40801EC7e name PonsV2LaunchFactory is_contract true is_verified true file_path contracts/src/v2/PonsV2LaunchFactory.sol compiler v0.8.35+commit.47b9dedd verified_at 2026-08-04T17:40:45Z creator_address_hash 0xFdDE5a1E3cDF791Da71E49F817D70C7ceD72CC36. RPC eth_getCode 24177 B." }
  - { id: R-4, publisher: Blockscout, title: "launchAndBuy tx 0x7b4efc0a…0874", url: "https://robinhoodchain.blockscout.com/tx/0x7b4efc0aade24a771dbc695d6d05da32e2e65005c3159f9cb3dbb89ca00c0874", published_at: 2026-08-28T23:59:19Z, accessed_at: 2026-09-03T05:24:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-2, CLM-3, CLM-4, CLM-6, CLM-14, CLM-16, EVT-6], excerpt: "timestamp 2026-08-28T23:59:19.000000Z status ok block 48709296 from 0xC7c649036314B9107859a0b61e37A50C25648600 (is_contract false) to PonsV2LaunchAndBuy 0xe33E9E479dF8802cb0866d5d05258bEc4cF62948 method launchAndBuy. params name Golden Goose symbol GG twitter https://x.com/goldengooserh pairToken 0xC9a981FEE1F9DEc688bb123ccDeCc63D0deBFC4e quoteIn 686473800000000000." }
  - { id: R-5, publisher: Robinhood Chain RPC, title: "eth_getCode, name, symbol, deployer(), launchFactory(), curve(), socials() on GG", url: "https://rpc.mainnet.chain.robinhood.com", published_at: null, accessed_at: 2026-09-03T05:24:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-2, CLM-3, CLM-4, CLM-5, CLM-6, CLM-8, CLM-13, CLM-16, CLM-17, CLM-22, CLM-26], excerpt: "eth_chainId 0x1237 block 0x32b4ade (53168862). Token code 3248 B prefix 60806040. name Golden Goose symbol GG decimals 18 totalSupply 1e27. owner() factory() revert. deployer() 0xC7c649036314B9107859a0b61e37A50C25648600 code 0x. launchFactory() 0x7eD598BcEf8bd9Edd8C97A195C6d13f40801EC7e. curve() 0x529562938bfB293b7A1112041e2c9AC62FE10079. socials() twitter https://x.com/goldengooserh. sha256 192f798a…2473." }
  - { id: R-6, publisher: Blockscout, title: "TokenLaunched log for GG", url: "https://robinhoodchain.blockscout.com/tx/0x7b4efc0aade24a771dbc695d6d05da32e2e65005c3159f9cb3dbb89ca00c0874", published_at: 2026-08-28T23:59:19Z, accessed_at: 2026-09-03T05:24:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-5, CLM-14, CLM-22, EVT-6], excerpt: "PonsV2LaunchFactory TokenLaunched token 0xcaCB0e9caCcee63ec4d82952E561a291c68Bcb68 curve 0x529562938bfB293b7A1112041e2c9AC62FE10079 deployer 0xC7c649036314B9107859a0b61e37A50C25648600 pairToken 0xC9a981FEE1F9DEc688bb123ccDeCc63D0deBFC4e launchConfigId 0 graduationThreshold 24940596949573086306. Transfer from 0x0 to curve value 1e27. Block 48709296." }
  - { id: R-7, publisher: DexScreener, title: "latest/dex/tokens GG", url: "https://api.dexscreener.com/latest/dex/tokens/0xcaCB0e9caCcee63ec4d82952E561a291c68Bcb68", published_at: null, accessed_at: 2026-09-03T05:22:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-7, CLM-8, CLM-9, CLM-11, CLM-15, CLM-17, CLM-19, CLM-20, CLM-23, CLM-24, EVT-1], excerpt: "12 robinhood uniswap pairs. GG/GLD v4 pairAddress 0x9009d141e9189ca9d19d565468078383c192c2fa1d6f855957507bf8539643c5 quote SPDR Gold Trust • Robinhood Token / GLD 0xC9a981FEE1F9DEc688bb123ccDeCc63D0deBFC4e liquidity.usd 204719.61 volume.h24 611987.16 fdv 5029694 pairCreatedAt 1787962251000. info.websites https://thegoldengoose.live info.socials x.com/GoldenGooseRH." }
  - { id: R-8, publisher: GeckoTerminal, title: "gld/GG Uniswap v4 pool", url: "https://api.geckoterminal.com/api/v2/networks/robinhood/pools/0x9009d141e9189ca9d19d565468078383c192c2fa1d6f855957507bf8539643c5", published_at: null, accessed_at: 2026-09-03T05:25:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-1, CLM-6, CLM-7, CLM-10, CLM-15, CLM-20, EVT-1, EVT-7], excerpt: "name gld / GG pool_created_at 2026-08-29T00:10:51Z fdv_usd 3475213.59 market_cap_usd 3475214.00 volume_usd.h24 613848.840794511 reserve_in_usd 201551.8414. dex pons-v2-dex base robinhood_0xc9a981fee1f9dec688bb123ccdecc63d0debfc4e quote robinhood_0xcacb0e9caccee63ec4d82952e561a291c68bcb68." }
  - { id: R-9, publisher: GeckoTerminal, title: "Golden Goose token", url: "https://api.geckoterminal.com/api/v2/networks/robinhood/tokens/0xcaCB0e9caCcee63ec4d82952E561a291c68Bcb68", published_at: null, accessed_at: 2026-09-03T05:25:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-7, CLM-10, CLM-20], excerpt: "GET HTTP 200. name Golden Goose symbol GG decimals 18 total_supply 1e27 price_usd 0.00488360628 fdv_usd 4883606.2802649 market_cap_usd null volume_usd.h24 3633381.83667411 total_reserve_in_usd 454094.18. launchpad_details completed true completed_at 2026-08-29T00:10:51Z migrated_destination_pool_address 0x9009…43c5." }
  - { id: R-10, publisher: "@GoldenGooseRH", title: "enjoy the gold", url: "https://x.com/GoldenGooseRH/status/2095234063678177755", published_at: 2026-09-02T19:35:03Z, accessed_at: 2026-09-03T05:22:00Z, kind: social, authority: social, authenticity: unconfirmed, supports: [CLM-8, CLM-19, CLM-26, EVT-3], excerpt: "Profile: Golden Goose @GoldenGooseRH bio Golden Goose on Robinhood CA: 0xcacb0e9caccee63ec4d82952e561a291c68bcb68. Post quoting @vladtenev Enjoy the gold: enjoy the gold." }
  - { id: R-11, publisher: "@Jonas00555724", title: "$GG conviction", url: "https://x.com/Jonas00555724/status/2095121709078614489", published_at: 2026-09-02T12:08:35Z, accessed_at: 2026-09-03T05:22:00Z, kind: social, authority: social, authenticity: confirmed, supports: [CLM-26, EVT-4], excerpt: "$GG conviction Robinhood chain is the attention printer right now. AI paired with NVDA. $GG paired with GLD. Not gold narrative. A meme that already pays actual gold to holders. Hold $GG then fees print then GLD hits the wallet." }
  - { id: R-12, publisher: Robinhood, title: "GET /rhj/assets Stock Token registry", url: "https://api.robinhood.com/rhj/assets", published_at: null, accessed_at: 2026-09-03T05:25:00Z, kind: docs, authority: primary, authenticity: confirmed, supports: [CLM-9, CLM-15, CLM-21], excerpt: "HTTP 200. assets length 194. one GLD hit tokenSymbol GLD tokenName SPDR Gold Trust • Robinhood Token contractAddress 0xC9a981FEE1F9DEc688bb123ccDeCc63D0deBFC4e chainId 4663 status ASSET_STATUS_ACTIVE isin US78463V1070. tokenSymbol GG returned 0 hits." }
  - { id: R-13, publisher: thegoldengoose.live, title: "Golden Goose GLD ledger site", url: "https://thegoldengoose.live", published_at: null, accessed_at: 2026-09-03T05:25:00Z, kind: official-site, authority: primary, authenticity: confirmed, supports: [CLM-8, CLM-19, CLM-23, CLM-26], excerpt: "HTTP 200. title Every GLD reward, verified. keywords Golden Goose,GG,GLD,Robinhood Chain,Pons,onchain analytics. HTML contains 0xcacb0e9caccee63ec4d82952e561a291c68bcb68. Ticker: 293.94 GLD delivered, 30,073 payouts, 1,798 wallets, Robinhood Chain 4663. No x.com URL in static HTML this pass." }
  - { id: R-15, publisher: DexScreener, title: "search q=GG GLD", url: "https://api.dexscreener.com/latest/dex/search?q=GG%20GLD", published_at: null, accessed_at: 2026-09-03T05:21:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-9, CLM-25], excerpt: "GG/GLD 0xcaCB0e9caCcee63ec4d82952E561a291c68Bcb68 pair 0x9009…43c5 liq 204719.61 vol 611987.16. Other GG/GLD 0x07Ff5dD82f91e6e5e3B08c89eB135f733e6c1E18 pair 0x5ac3…1f5c liq 21652.7 vol 545.01. Neighboring GLD books include NUGGET, DIGGER, GOLDDIGGER." }
  - { id: R-16, publisher: Blockscout, title: "Token 0xC9a9…FC4e SPDR Gold Shares / GLD", url: "https://robinhoodchain.blockscout.com/token/0xC9a981FEE1F9DEc688bb123ccDeCc63D0deBFC4e", published_at: null, accessed_at: 2026-09-03T05:24:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-9, CLM-21], excerpt: "address_hash 0xC9a981FEE1F9DEc688bb123ccDeCc63D0deBFC4e name SPDR Gold Shares • Robinhood Token symbol GLD decimals 18 holders_count 14120 total_supply 8611061000000000000000 type ERC-20 exchange_rate 404.2." }
  - { id: R-17, publisher: Blockscout, title: "Other Golden Goose 0x07Ff…1E18", url: "https://robinhoodchain.blockscout.com/address/0x07Ff5dD82f91e6e5e3B08c89eB135f733e6c1E18", published_at: null, accessed_at: 2026-09-03T05:23:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-25], excerpt: "hash 0x07Ff5dD82f91e6e5e3B08c89eB135f733e6c1E18 name Golden Goose is_verified true proxy_type eip1167 implementations DopplerERC20V1 0x3Be8B97Fd0e713B5aBE0649Fa830223B6B4BC599. token symbol GG holders_count 7 total_supply 1e27. RPC code 44 B. Search Golden Goose also lists many other same-name tokens." }
  - { id: R-19, publisher: "@spiritlab73", title: "$GG Family vote netlify page", url: "https://x.com/spiritlab73/status/2095373376038564272", published_at: 2026-09-03T04:48:37Z, accessed_at: 2026-09-03T05:26:00Z, kind: social, authority: social, authenticity: unconfirmed, supports: [CLM-27, EVT-2], excerpt: "Attention $GG Family! YOUR vote matters! Listing ID: 6515 URL robinhood-main-dex-rkx.netlify.app/vote/0xcaCB0e9caCcee63ec4d82952E561a291c68Bcb68. Sister post @veilcircuitNFT 2095346405988516227 used listing id 6888 on the same host. Flag copypasta-pattern | third-party-link." }
  - { id: R-20, publisher: Blockscout, title: "CurveCompleted / LaunchSwept tx 0x3735a137…7fad", url: "https://robinhoodchain.blockscout.com/tx/0x3735a137e169c0e5a1a4b32fffd1f3171428e6c6630f5a3e62ce55b51c427fad", published_at: 2026-08-29T00:10:48Z, accessed_at: 2026-09-03T05:26:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-13, CLM-15, CLM-22, EVT-7], excerpt: "timestamp 2026-08-29T00:10:48.000000Z status ok block 48716111. CurveCompleted recipient 0x7eD5…EC7e quoteOut 24940596949573086379 tokenOut 285714285714285714277531577. LaunchSwept token 0xcaCB…cb68 same quoteOut/tokenOut. CreditedToken protocol GLD to SafeProxy 0x263ed295dAFaE1d9AAdD6E56c4B6F9f38eE019Dd. No PoolManager Initialize in this tx." }
  - { id: R-21, publisher: Blockscout, title: "Address 0xe33E…2948 PonsV2LaunchAndBuy", url: "https://robinhoodchain.blockscout.com/address/0xe33E9E479dF8802cb0866d5d05258bEc4cF62948", published_at: null, accessed_at: 2026-09-03T05:24:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-16], excerpt: "hash 0xe33E9E479dF8802cb0866d5d05258bEc4cF62948 name PonsV2LaunchAndBuy is_contract true is_verified true file_path contracts/src/v2/PonsV2LaunchAndBuy.sol compiler 0.8.35+commit.47b9dedd verified_at 2026-08-04T17:42:28Z creator_address_hash 0xFdDE5a1E3cDF791Da71E49F817D70C7ceD72CC36." }
  - { id: R-22, publisher: "@CCrypto2941", title: "$GG is the cleanest ticker", url: "https://x.com/CCrypto2941/status/2095262616247734402", published_at: 2026-09-02T21:28:30Z, accessed_at: 2026-09-03T05:22:00Z, kind: social, authority: social, authenticity: confirmed, supports: [CLM-26, EVT-5], excerpt: "1/ $GG is the cleanest ticker on Robinhood Chain right now. A goose that lays actual gold. Hold $GG then trades generate fees then fees settle in GLD then GLD hits wallets. Follow-up 2095273364466360819: $GG paired with $GLD. Already $33K paid out to holders." }

gaps:
  - { priority: P0, question: "Does @GoldenGooseRH bio or a pinned post bidirectionally name thegoldengoose.live?", checked: "bio pins CA 0xcacb…cb68; DexScreener and token.socials() name the handle; site HTML has the CA and no x.com URL this pass, 2026-09-03", next: "re-read the bio after a site pin; treat handle as official only with that cross-link" }
  - { priority: P0, question: "Which contract pays GLD to GG holders, and can that path be reproduced on 4663?", checked: "token goldToken/claim/rewardToken/distributor revert; site claims 293.94 GLD delivered; X posts describe wallet payouts; no distributor address in launch params this pass, 2026-09-03", next: "trace GLD Transfer logs to holder wallets from the site ledger and name the payer contract" }
  - { priority: P1, question: "Which transaction initialized Uniswap v4 pool 0x9009…43c5 and which hook did it attach?", checked: "LaunchSwept tx 0x3735…7fad at 00:10:48Z has no PoolManager Initialize; Gecko/DexScreener pool_created_at 00:10:51Z; Gecko dex pons-v2-dex, 2026-09-03", next: "search PoolManager Initialize for pool id 0x9009…43c5 in the next blocks after 48716111" }
  - { priority: P1, question: "Why do DexScreener GG/GLD fdv (~$5.03M) and Gecko pool fdv (~$3.48M) disagree?", checked: "Dex pair fdv/marketCap 5029694; Gecko token fdv_usd 4883606.28; Gecko pool fdv is GLD-as-base 3475213.59, 2026-09-03", next: "compare Gecko token price source pool vs the GLD book; do not collapse the two fdv figures" }
  - { priority: P2, question: "What does launch image ipfs://bafkreig3r3schsxjlwu4yzr3ys3atmkfsrgke443l7rqylgj5xumec3b6u contain?", checked: "launchAndBuy decoded image CID; IPFS not fetched this pass, 2026-09-03", next: "fetch the CID once for social_links / image without treating it as official" }
---

# GG — research packet

## What it is

A one-billion-supply ERC-20 launched on Pons v2 and graduated into a Uniswap v4 pool quoted against GLD. PonsV2LaunchAndBuy.launchAndBuy from 0xC7c6…8600 minted Golden Goose (GG) on 2026-08-28T23:59:19Z onto a bonding curve, then swept into the GG/GLD book about 11.5 minutes later. Traders buy and sell GG on Uniswap v4 and on secondary WETH/USDG books. GLD is the quote rail, not this token. thegoldengoose.live embeds this CA. No bidirectional official handle was located this pass.

Themes: memecoin, stock-paired:GLD, rwa, pons-graduation

## Why it matters

The GG/GLD Uniswap v4 book printed about $614k of 24h volume on Gecko and about $202k of Gecko pool reserve at collection, against an active Robinhood GLD Stock Token. Assignment lead of DexScreener liq ~$189,660 / vol ~$633,005 is this same book; live DexScreener this pass is 204719.61 / 611987.16. Packed UBIK, CASHBIRD, SCHIFFY, and ROCK share that GLD rail and are different tokens.

## What could go wrong

USD liquidity figures on the GG/GLD book count both sides, and the quote side is GLD, not USDG. Gecko pool fdv treats GLD as the base and is not the GG token fdv. Secondary GG/WETH and GG/USDG books printed more 24h volume than GG/GLD this pass. Same-ticker Golden Goose clones exist, including Doppler clone 0x07Ff…1E18. Handle stays unconfirmed-official. Token source is unverified on Blockscout this pass. Site and X describe GLD holder payouts that this pass did not reproduce on the token.

## Product and mechanics

PonsV2LaunchAndBuy 0xe33E…2948 launchAndBuy from 0xC7c6…8600 at 2026-08-28T23:59:19Z minted Golden Goose / GG supply 1e9*1e18 onto curve 0x5295…0079 quoted against pairToken GLD 0xC9a9…FC4e. TokenLaunched names graduationThreshold 24.9406e18. [verified R-4 R-5 R-6]

CurveCompleted / LaunchSwept at 2026-08-29T00:10:48Z moved quoteOut 24.9406e18 GLD. Gecko and DexScreener record Uniswap v4 poolId 0x9009…43c5 at 2026-08-29T00:10:51Z with dex pons-v2-dex. Secondary GG/USDG and GG/WETH books exist on DexScreener with more 24h volume than the GLD book this pass. [verified R-7 R-8 R-20]

This is PonsV2LaunchAndBuy.launchAndBuy, not factory.launchToken, and not LongLauncher. [verified R-4 R-21]

thegoldengoose.live titles a GLD distribution ledger. Token RPC goldToken/claim/rewardToken revert, so that payout path is not on the ERC-20 itself this pass. [claim R-5 R-13]

## Control and security

token owner() reverts. deployer() 0xC7c6…8600 has no code. launchFactory() returns PonsV2LaunchFactory. Graduation CreditedToken sent protocol GLD to SafeProxy 0x263e…19Dd, which is a Pons fee path, not a GG-token admin on this call. [verified R-5 R-20]

GG token is_verified false on Blockscout this pass. Code length 3248 B matches in-flight GB, but bytecode sha256 differs. Curve 0x5295…0079 is verified PonsV2BondingCurve. No audit report URL was located this pass. [verified R-1 R-2] [unknown]

## Team and provenance

thegoldengoose.live titles Every GLD reward, verified and includes CA 0xcacb…cb68 in the HTML. token.socials() twitter is https://x.com/goldengooserh and website empty. DexScreener lists that site and x.com/GoldenGooseRH. @GoldenGooseRH bio pins the CA; flag unconfirmed-official. [claim R-5 R-7 R-10 R-13]

SPDR Gold Trust is the listed issuer of the quote rail. GET /rhj/assets names that rail SPDR Gold Trust • Robinhood Token at 0xC9a9…FC4e. That is a dependency, not this token. [verified R-12 R-16]

## Economics and activity

GG/GLD Uniswap v4 24h volume is 613848.84 USD and Gecko reserve_in_usd is 201551.84 at 2026-09-03T05:25:00Z. DexScreener same pair liquidity.usd 204719.61 volume.h24 611987.16 fdv/marketCap 5029694. Gecko token volume_usd.h24 3633381.84 across all pools, not the GLD book. [claim R-7 R-8 R-9]

Gecko token fdv_usd 4883606.28 is near the Dex GLD-book fdv. Gecko pool fdv_usd 3475213.59 is GLD-as-base. Blockscout holders_count 6164. Pair created 2026-08-29T00:10:51Z. [claim R-1 R-7 R-8 R-9]

## Material risks

- Quote token GLD 0xC9a9…FC4e is a Robinhood Stock Token rail; GG is not GLD. [verified R-12 R-16]
- Pool USD reserve is GG plus GLD, not a USDG or WETH backstop. [claim R-7 R-8]
- No bidirectional official handle this pass; @GoldenGooseRH is unconfirmed-official. [claim R-7 R-10]
- Same-ticker Golden Goose clones exist, including Doppler 0x07Ff…1E18. [verified R-17]
- GLD holder-payout claims on the site and on X were not reproduced on the token this pass. [claim R-5 R-13]
- Netlify vote/claim pages reused this CA. [claim R-19]
- No audit report URL this pass. [unknown]

## Verification passes

- Receipts: Blockscout token/curve/factory/andbuy/GLD and launch/graduation txs, RPC name/symbol/deployer/launchFactory/curve/socials, DexScreener tokens+search, Gecko token GET 200 plus pool, /rhj/assets, thegoldengoose.live, @GoldenGooseRH, @Jonas00555724, @CCrypto2941, and the netlify vote posts were opened on 2026-09-03 and excerpts copied from the responses. [verified R-1 R-5 R-7 R-8 R-12 R-13]
- Numbers: 613848.84 is the Gecko gld/GG pool 24h volume, not the 3633381.84 token all-pools figure. Reserve 201551.84 is that pool. DexScreener 611987.16 / 204719.61 is the same pair, different aggregator. Gecko pool fdv is GLD-as-base. [claim R-7 R-8 R-9]
- Adversarial: the strongest contrary reading is that GG is the GLD rail or that 0x07Ff…1E18 is this token. /rhj/assets GLD is 0xC9a9…FC4e; this subject is 0xcaCB…cb68 with Pons v2 code 3248 B, not the Doppler clone. [inference R-12 R-16 R-17]

## Operations log

- Base: `git -C /Users/harsharnsingh/proofline-pr59 rev-parse origin/main` → 334ca0619aa62e922da83f46de021f06d12348cf. Census 49 slugs have no gg / GG / Golden Goose / 0xcaCB…cb68. content/dependencies/stock-tokens.yaml lists GLD 0xC9a9…FC4e as a rail.
- Explorer: Blockscout api/v2 token, curve, factory, andbuy, GLD, launchAndBuy 0x7b4e…0874, CurveCompleted 0x3735…7fad, TokenLaunched / LaunchSwept logs, holders, Golden Goose search. RPC eth_getCode/eth_call with Chrome UA at block 53168862.
- Aggregators: DexScreener latest/dex/tokens and search q=GG GLD; Gecko token GET HTTP 200, pool, token/pools.
- Registry: GET api.robinhood.com/rhj/assets 194 assets, 1 GLD, 0 GG ticker.
- Social: X keyword $GG GLD Latest; user search GoldenGooseRH; from:GoldenGooseRH.
- Site: thegoldengoose.live HTTP 200 ledger HTML.
- Failed: Blockscout token creator_address_hash null (launchFactory() used instead); token owner/factory/goldToken/claim revert; LaunchSwept tx has no PoolManager Initialize; Gecko pool names gld/GG with GLD as base.
- Time: collection 2026-09-03T05:21Z–2026-09-03T05:28Z.
