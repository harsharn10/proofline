---
# Packet v2 (docs/research-system.md §5). Seed with Icarus What-it-is + events.
contract_version: proofline-research-v2
work_id: WORK-20260903-grok-heavy-icarus-research
producer: grok-heavy
role: collector
base_sha: 334ca0619aa62e922da83f46de021f06d12348cf
slug: chump
name: CHUMP
packet_tier: seed
as_of: 2026-09-03T04:12:00Z
prior_packet: null
supersedes: null
owned_slugs: [chump]
allowed_paths:
  - research/inbox/packets/chump/WORK-20260903-grok-heavy-icarus-research.md

identity:
  canonical_name: CHUMP
  aliases: ["Chump Coin", "CC21B", "Chump Coin 2 1 Billy"]
  symbols: [CHUMP]
  entity_kind: token
  chain_scope: robinhood-native
  official_domain: https://cc21b.meme
  official_handle: "@ChumpCoinX"
  repository: "NULL — no GitHub org or repository URL on cc21b.meme, the @ChumpCoinX profile, DexScreener, Gecko, or Blockscout this pass"
  possible_matches:
    - slug: pons
      signals: [ticker-only]
      contrary_signals:
        - "Census Pons is ponsfamily.com / @ponsdotfamily with Pons v1/v2 launch factories"
        - "Canonical CHUMP is verified ChumpCoin.sol at 0x0E0d…C21B created by EOA 0x5BAD…4B20, not a Pons factory clone"
        - "Gecko search also returns tiny Pons-v2 CHUMP/WETH books (0x96df…c944, 0x8632…73e0) that are not this CA"
    - slug: pools-trade
      signals: [other]
      contrary_signals:
        - "Census pools.trade is Uniswap Labs' Uniswap v4 pad at pools.trade / @TradePools"
        - "CHUMP main book is Uniswap v3 factory 0x1f7d…2EfA poolFor(10000), not a UERC20Factory clone"
        - "No shared domain, handle, or reproduced address"

classification:
  primary_leaf: launch/graduation-token
  secondary_leaves: []
  mechanism_tags: [amm]
  ecosystem_role: graduation
  lifecycle: mainnet
  coverage_recommendation: seed
  evidence_state: partly-verified
  rationale: "Not in the 49-row census. Token 0x0E0d…C21B is verified ChumpCoin.sol with non-empty code on 4663; constructor minted 1e9*1e18 into a Uniswap v3 CHUMP/WETH 1% pool 0x7144…cFb8. Quote is WETH 0x0Bd7…AD73, not a stock token. A thin CHUMP/USDG v4 book exists. Site cc21b.meme and @ChumpCoinX cross-link. [R-1] [R-5] [R-7] [R-8] [R-10] [R-13]"

qualifying:
  deployed_on_chain: { status: pass, claim_ids: [CLM-4, CLM-6], note: "" }
  native_play:       { status: pass, claim_ids: [CLM-1, CLM-15], note: "" }
  citable:           { status: pass, claim_ids: [CLM-2, CLM-3, CLM-8, CLM-9], note: "" }
  research_story:    { status: pass, claim_ids: [CLM-1, CLM-10, CLM-13], note: "" }

links:
  - { kind: site, url: "https://cc21b.meme", authenticity: confirmed }
  - { kind: x, url: "https://x.com/ChumpCoinX", authenticity: confirmed }
  - { kind: telegram, url: "https://t.me/CHUMPCOIN21B", authenticity: confirmed }
  - { kind: other, url: "https://x.com/i/communities/2020660935854014618/", authenticity: confirmed }
  - { kind: other, url: "https://www.team.finance/view-coin/0x0e0d2c89a5a019fe1cf762e5e33187631dacc21b?name=Chump%20Coin&symbol=CHUMP&chainid=0x1237", authenticity: unconfirmed }

deployments:
  - label: CHUMP token (ChumpCoin.sol)
    role: token
    address:
      value: "0x0E0d2C89a5a019FE1cF762e5e33187631DACC21B"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T04:06:00Z
      exists_on_4663: true
      explorer_source_verified: true
      explorer_source_verification_scope: full
    receipt_ids: [R-1, R-2, R-5]
  - label: Uniswap v3 CHUMP/WETH 1% pool (mainPool)
    role: other
    address:
      value: "0x714442e9A611f8561A7dF108D6d925132937cFb8"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T04:06:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-5, R-8, R-16]
  - label: UniswapV3Factory (token V3_FACTORY)
    role: factory
    address:
      value: "0x1f7d7550B1b028f7571E69A784071F0205FD2EfA"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T04:06:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-2, R-16]
  - label: NonfungiblePositionManager (constructor _positionManager)
    role: other
    address:
      value: "0x73991a25C818Bf1f1128dEAaB1492D45638DE0D3"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T04:06:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-2, R-6, R-16]
  - label: Team.finance lockNFT proxy
    role: other
    address:
      value: "0x3A7De5F29557405f5d9Fd06B570a53B966a78E8e"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T04:06:00Z
      exists_on_4663: true
      explorer_source_verified: false
    receipt_ids: [R-6, R-16]
  - label: WETH9 (token constant / pair quote)
    role: token
    address:
      value: "0x0Bd7D308f8E1639FAb988df18A8011f41EAcAD73"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T04:05:00Z
      exists_on_4663: true
      explorer_source_verified: null
    receipt_ids: [R-2, R-5, R-7]

metrics:
  - { kind: volume_24h, value: 5566773.13, currency: USD, as_of: 2026-09-03T04:05:15Z, window: 24h, method: "api.geckoterminal.com/api/v2/networks/robinhood/pools/0x714442e9A611f8561A7dF108D6d925132937cFb8 volume_usd.h24", class: claim, receipt_ids: [R-8] }
  - { kind: tvl, value: 1100985.30, currency: USD, as_of: 2026-09-03T04:05:15Z, window: point, method: "api.geckoterminal.com/api/v2/networks/robinhood/pools/0x714442e9A611f8561A7dF108D6d925132937cFb8 reserve_in_usd (CHUMP/WETH 1% pool, not an all-pools figure)", class: claim, receipt_ids: [R-8] }
  - { kind: market_cap, value: 37562528.95, currency: USD, as_of: 2026-09-03T04:05:15Z, window: point, method: "api.geckoterminal.com/api/v2/networks/robinhood/pools/0x714442e9A611f8561A7dF108D6d925132937cFb8 market_cap_usd (fdv_usd 37562528.56)", class: claim, receipt_ids: [R-8] }
  - { kind: holders, value: 4486, currency: null, as_of: 2026-09-03T04:06:00Z, window: point, method: "robinhoodchain.blockscout.com/api/v2/tokens/0x0E0d2C89a5a019FE1cF762e5e33187631DACC21B holders_count", class: claim, receipt_ids: [R-1] }

reproductions:
  - { id: REP-1, method: explorer-rpc, chain_id: 4663, checked_at: 2026-09-03T04:07:18Z, receipt_ids: [R-5], result: "eth_blockNumber 0x32a94c8 (53122567) then 53123438. Token 0x0E0d…C21B eth_getCode 5225 bytes (not EIP-1167). name Chump Coin, symbol CHUMP, decimals 18, totalSupply 1e27. owner() 0x0. factory() reverts. limitsActive() false, seeded() true, maxWalletBps() 100, mainPool() 0x714442e9A611f8561A7dF108D6d925132937cFb8, soldBps() 9858. Deployer 0x5BAD…4B20 code 0x. Pool code 22142 B. WETH 0x0Bd7…AD73 code 2202 B." }
  - { id: REP-2, method: explorer-ui, chain_id: 4663, checked_at: 2026-09-03T04:06:00Z, receipt_ids: [R-1, R-2, R-3, R-4, R-6, R-16], result: "Blockscout api/v2 token 0x0E0d…C21B name Chump Coin symbol CHUMP holders_count 4486 total_supply 1e27 is_verified true is_fully_verified true file_path src/ChumpCoin.sol compiler v0.8.24 verified_at 2026-08-13T23:00:38Z creator 0x5BAD…4B20 tx 0xb07d…a613 2026-07-31T01:44:31Z block 23791950. Constructor args name Chump Coin symbol CHUMP supplyWhole 1000000000 positionManager 0x7399…0D3. OwnershipTransferred to 0x0 in tx 0xb7b5…e0a5 2026-08-11T01:43:01Z method renounceOwnership. LimitsRemoved tx 0x3b0c…e435 2026-08-10T19:57:31Z. lockNFT tx 0x2d7b…46c0 2026-08-18T15:40:54Z unlockTime 1789659601." }
  - { id: REP-3, method: api, checked_at: 2026-09-03T04:05:15Z, receipt_ids: [R-7, R-8, R-9, R-17], result: "DexScreener latest/dex/tokens/0x0E0d…C21B: 4 robinhood uniswap pairs; top CHUMP/WETH v3 0x7144…cFb8 quote WETH 0x0Bd7…AD73 liquidity.usd 1106038.37 volume.h24 5605964.08 fdv/marketCap 38005324 pairCreatedAt 1785462271 info.websites cc21b.meme / X comm / Team.finance LP LOCK info.socials @ChumpCoinX t.me/CHUMPCOIN21B tiktok @chumpcoin. Thin CHUMP/USDG v4 0x0e80…f49b liquidity.usd 184.97 volume.h24 13.67. Gecko pool: volume_usd.h24 5566773.13 reserve_in_usd 1100985.30 fdv_usd 37562528.56 pool_created_at 2026-07-31T01:44:31Z dex uniswap-v3-robinhood. Gecko token volume_usd.h24 5583718.82 (all pools). trending_pools duration=24h row 1 CHUMP/WETH 1%." }
  - { id: REP-4, method: official-crosslink, checked_at: 2026-09-03T04:08:00Z, receipt_ids: [R-10, R-13, R-14], result: "cc21b.meme posts CA 0x0E0d…C21B, @ChumpCoinX, X community, TikTok @chumpcoin, Uniswap token URL, DexScreener pool 0x7144…cFb8. @ChumpCoinX profile website cc21b.meme, location Robinhood Chain, bio independent / no public-figure affiliation. t.me/CHUMPCOIN21B og:title Chump Coin Official Portal; description embeds CA, cc21b.meme, community URL, @ChumpCoinX." }
  - { id: REP-5, method: explorer-rpc, chain_id: 4663, checked_at: 2026-09-03T04:06:30Z, receipt_ids: [R-5, R-16], result: "Collision token 0xEc0a…278a eth_getCode 44 bytes EIP-1167; name Chump Coin symbol CHUMP totalSupply 1e27; Blockscout proxy_type eip1167 implementation DropERC20 0x3de1…15c5 holders_count 9059 creator 0x2554…07a1. Distinct bytecode and creator from canonical 0x0E0d…C21B." }

claims:
  - { id: CLM-1, field: product.mechanism, value: "Custom verified ChumpCoin.sol mints a 1e9-supply ERC-20 and hardcodes Uniswap v3 factory 0x1f7d…2EfA / WETH9 0x0Bd7…AD73; constructor poolFor(10000) is the CHUMP/WETH 1% book 0x7144…cFb8. No buy/sell tax in source. Not a stock-paired factory clone.", class: verified, observed_at: 2026-09-03T04:07:00Z, receipt_ids: [R-2, R-5, R-7, R-8], reproduction_ids: [REP-1, REP-2, REP-3], supersedes: null }
  - { id: CLM-2, field: identity.name, value: "Chump Coin", class: verified, observed_at: 2026-09-03T04:05:00Z, receipt_ids: [R-1, R-2, R-5], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-3, field: identity.symbol, value: "CHUMP", class: verified, observed_at: 2026-09-03T04:05:00Z, receipt_ids: [R-1, R-2, R-5], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-4, field: deployment.address, value: "0x0E0d2C89a5a019FE1cF762e5e33187631DACC21B", class: verified, observed_at: 2026-09-03T04:06:00Z, receipt_ids: [R-1, R-3, R-5], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-5, field: deployment.address, value: "0x714442e9A611f8561A7dF108D6d925132937cFb8", class: verified, observed_at: 2026-09-03T04:06:00Z, receipt_ids: [R-5, R-8, R-16], reproduction_ids: [REP-1, REP-2, REP-3], supersedes: null }
  - { id: CLM-6, field: lifecycle, value: mainnet, class: verified, observed_at: 2026-09-03T04:06:00Z, receipt_ids: [R-1, R-3, R-5, R-8], reproduction_ids: [REP-1, REP-2, REP-3], supersedes: null }
  - { id: CLM-7, field: taxonomy.primary-leaf, value: launch/graduation-token, class: claim, observed_at: 2026-09-03T04:07:00Z, receipt_ids: [R-2, R-7, R-8], reproduction_ids: [], supersedes: null }
  - { id: CLM-8, field: identity.handle, value: "@ChumpCoinX", class: verified, observed_at: 2026-09-03T04:08:00Z, receipt_ids: [R-10, R-13, R-14], reproduction_ids: [REP-4], supersedes: null }
  - { id: CLM-9, field: identity.domain, value: "https://cc21b.meme", class: verified, observed_at: 2026-09-03T04:08:00Z, receipt_ids: [R-7, R-10, R-13], reproduction_ids: [REP-4], supersedes: null }
  - { id: CLM-10, field: economics.metric, value: "CHUMP/WETH Uniswap v3 1% 24h volume 5566773.13 USD and reserve_in_usd 1100985.30 at 2026-09-03T04:05:15Z (Gecko pool slice, not Gecko token all-pools 5583718.82)", class: verified, observed_at: 2026-09-03T04:05:15Z, receipt_ids: [R-8, R-9], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-11, field: economics.metric, value: "DexScreener same pair liquidity.usd 1106038.37 volume.h24 5605964.08 fdv/marketCap 38005324 at 2026-09-03T04:04:46Z", class: verified, observed_at: 2026-09-03T04:04:46Z, receipt_ids: [R-7], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-12, field: economics.metric, value: 4486, class: verified, observed_at: 2026-09-03T04:06:00Z, receipt_ids: [R-1], reproduction_ids: [REP-2], supersedes: null }
  - { id: CLM-13, field: control.owner, value: "owner() 0x0 after renounceOwnership tx 0xb7b5…e0a5 from deployer 0x5BAD…4B20 at 2026-08-11T01:43:01Z; source requires !limitsActive before renounce", class: verified, observed_at: 2026-09-03T04:07:00Z, receipt_ids: [R-2, R-4, R-5], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-14, field: control.privileged-role, value: "onlyOwner paths addAmmPool, setExcludedFromLimit, removeLimits, transferOwnership, renounceOwnership; LimitsRemoved tx 0x3b0c…e435 2026-08-10T19:57:31Z then owner set to 0x0. Deployer EOA has no code.", class: verified, observed_at: 2026-09-03T04:07:00Z, receipt_ids: [R-2, R-4, R-5], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-15, field: other, value: "Flagship quote is WETH 0x0Bd7…AD73 on Uniswap v3 1% 0x7144…cFb8. Secondary Uniswap v4 CHUMP/ETH books and CHUMP/USDG 4% 0x0e80…f49b (liq 184.97 vol 13.67) exist. No stock-token quote on the canonical CA this pass.", class: verified, observed_at: 2026-09-03T04:05:00Z, receipt_ids: [R-7, R-8, R-17], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-16, field: deployment.role, value: "Creator is EOA 0x5BAD2B481Fd216c572C05B2Ebedc5993E1214B20; pad of record is Uniswap v3 factory 0x1f7d…2EfA, not Pons, LONG, PAIR, NOXA, or hood.fun", class: verified, observed_at: 2026-09-03T04:06:00Z, receipt_ids: [R-1, R-2, R-3, R-5], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-17, field: taxonomy.chain-scope, value: robinhood-native, class: verified, observed_at: 2026-09-03T04:05:00Z, receipt_ids: [R-5, R-7], reproduction_ids: [REP-1, REP-3], supersedes: null }
  - { id: CLM-18, field: security.audit, value: "cc21b.meme labels CertiK Audit Pending; no audit report URL was located on the site, Blockscout, DexScreener, Gecko, or X profile this pass", class: unknown, observed_at: 2026-09-03T04:08:00Z, receipt_ids: [], reproduction_ids: [], supersedes: null }
  - { id: CLM-19, field: communications.status, value: "handle-collision: @ChumpCoinX_X, @ChumpCoiniX, and @ChumpCoinX_ use display name Chump Coin and paste CA 0x0E0d…C21B; official handle remains @ChumpCoinX via site/profile cross-link", class: claim, observed_at: 2026-09-03T04:08:00Z, receipt_ids: [R-13, R-18], reproduction_ids: [], supersedes: null }
  - { id: CLM-20, field: economics.metric, value: "Gecko pool fdv_usd 37562528.56 market_cap_usd 37562528.95; DexScreener fdv/marketCap 38005324. Gecko token market_cap_usd 38359657.35.", class: verified, observed_at: 2026-09-03T04:05:15Z, receipt_ids: [R-7, R-8, R-9], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-21, field: other, value: "ca-collision: DropERC20 EIP-1167 clone 0xEc0acde3cF4c5f98ce2C021e6Bd6eC475fEe278a also named Chump Coin / CHUMP (holders 9059). DexScreener search listed a CHUMP/WETH book for that CA with liquidity.usd 4537526.22 volume.h24 0.02. Not the canonical row.", class: verified, observed_at: 2026-09-03T04:06:30Z, receipt_ids: [R-16, R-19], reproduction_ids: [REP-5], supersedes: null }
  - { id: CLM-22, field: other, value: "lockNFT tx 0x2d7b…46c0 to proxy 0x3A7D…8E8e locks Uniswap v3 NFT tokenId 518773 with unlockTime 1789659601 (2026-09-17T15:40:01Z) and _withdrawalAddress 0x5BAD…4B20.", class: verified, observed_at: 2026-09-03T04:06:00Z, receipt_ids: [R-6], reproduction_ids: [REP-2], supersedes: null }
  - { id: CLM-23, field: candidate, value: "chump | CHUMP | @ChumpCoinX | https://cc21b.meme — discovery token not in census 49", class: claim, observed_at: 2026-09-03T04:12:00Z, receipt_ids: [R-1, R-7, R-10], reproduction_ids: [], supersedes: null }
  - { id: CLM-24, field: identity.alias, value: "CC21B / Chump Coin 2 1 Billy — CA suffix C21B; site and TG preview use CC21B", class: claim, observed_at: 2026-09-03T04:08:00Z, receipt_ids: [R-10, R-14], reproduction_ids: [], supersedes: null }
  - { id: CLM-25, field: "account.@ChumpCoinX.flags", value: "none of unconfirmed-official | third-party-link on @ChumpCoinX this pass; site and profile cross-link. Accounts using the same name are recorded separately.", class: claim, observed_at: 2026-09-03T04:08:00Z, receipt_ids: [R-10, R-13], reproduction_ids: [], supersedes: null }
  - { id: CLM-26, field: activity.status, value: "Gecko trending_pools duration=24h row 1 this pass: CHUMP/WETH 1% volume_usd.h24 5564885.03 reserve_in_usd 1099762.12. Prior GO-LIVE capture was CHUMP/WETH ~$1.07M liq / ~$4.87M vol.", class: verified, observed_at: 2026-09-03T04:07:00Z, receipt_ids: [R-8, R-17, R-20], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-27, field: other, value: "cc21b.meme copy says contract renounced and liquidity locked forever; Gecko token info description repeats permanently locked liquidity.", class: claim, observed_at: 2026-09-03T04:08:00Z, receipt_ids: [R-9, R-10], reproduction_ids: [], supersedes: null }

conflicts:
  - id: CON-1
    field: other
    claim_ids: [CLM-22, CLM-27]
    material_effect: "Site and Gecko info text say liquidity is locked forever; the lockNFT call decoded on Blockscout has unlockTime 2026-09-17T15:40:01Z and withdrawal address equal to the deployer EOA."
    status: open
    resolution: null

events:
  - id: EVT-1
    type: onchain
    title: "Gecko CHUMP/WETH 1% 24h volume $5.57M, liquidity $1.10M, trending row 1"
    summary: "Live Gecko pool 0x7144…cFb8 volume_usd.h24 5566773 reserve_in_usd 1100985 fdv_usd 37562529. trending_pools duration=24h listed this pool first. Prior GO-LIVE trending capture was ~$1.07M / ~$4.87M."
    occurred_at: 2026-09-03T04:05:15Z
    observed_at: 2026-09-03T04:07:00Z
    affected_fields: [economics.metric, activity.status]
    evidence_state: verified
    impact: material
    site_recommendation: both
    channel_recommendation: none
    receipt_ids: [R-8, R-17]
  - id: EVT-2
    type: company
    title: "Crypto.com listed CHUMP in the crypto.com/us app"
    summary: "@cryptocom posted Chump Coin ($CHUMP) and TendiesRH ($TENDIES) available in the US app, tagging @ChumpCoinX. @ChumpCoinX quoted the listing."
    occurred_at: 2026-09-02T05:31:34Z
    observed_at: 2026-09-03T04:08:00Z
    affected_fields: [activity.status, communications.status]
    evidence_state: claim
    impact: material
    site_recommendation: both
    channel_recommendation: none
    receipt_ids: [R-11]
  - id: EVT-3
    type: ct
    title: "@bubblemaps posted that CHUMP is 80% bundled"
    summary: "@bubblemaps: If you buy $CHUMP, you are a chump. The token is 80% bundled. @ChumpCoinX quoted the post."
    occurred_at: 2026-09-02T12:50:34Z
    observed_at: 2026-09-03T04:08:00Z
    affected_fields: [activity.status]
    evidence_state: claim
    impact: material
    site_recommendation: feed
    channel_recommendation: none
    receipt_ids: [R-12]
  - id: EVT-4
    type: onchain
    title: "EOA deployed ChumpCoin / CHUMP"
    summary: "Tx 0xb07d…a613 from 0x5BAD…4B20 at 2026-07-31T01:44:31Z created 0x0E0d…C21B; same timestamp as the Uniswap v3 CHUMP/WETH 1% pool."
    occurred_at: 2026-07-31T01:44:31Z
    observed_at: 2026-09-03T04:06:00Z
    affected_fields: [deployment.address, lifecycle, product.mechanism]
    evidence_state: verified
    impact: material
    site_recommendation: profile
    channel_recommendation: none
    receipt_ids: [R-3]
  - id: EVT-5
    type: onchain
    title: "Deployer called lockNFT on Team.finance proxy"
    summary: "Tx 0x2d7b…46c0 2026-08-18T15:40:54Z lockNFT tokenId 518773 unlockTime 1789659601 (2026-09-17T15:40:01Z) withdrawal 0x5BAD…4B20."
    occurred_at: 2026-08-18T15:40:54Z
    observed_at: 2026-09-03T04:06:00Z
    affected_fields: [control.privileged-role, other]
    evidence_state: verified
    impact: material
    site_recommendation: profile
    channel_recommendation: none
    receipt_ids: [R-6]
  - id: EVT-6
    type: onchain
    title: "Deployer renounced ChumpCoin ownership"
    summary: "Tx 0xb7b5…e0a5 method renounceOwnership at 2026-08-11T01:43:01Z after LimitsRemoved 2026-08-10T19:57:31Z. owner() returns 0x0."
    occurred_at: 2026-08-11T01:43:01Z
    observed_at: 2026-09-03T04:07:00Z
    affected_fields: [control.owner]
    evidence_state: verified
    impact: material
    site_recommendation: profile
    channel_recommendation: none
    receipt_ids: [R-4, R-5]

receipts:
  - { id: R-1, publisher: Blockscout, title: "Token 0x0E0d…C21B Chump Coin / CHUMP", url: "https://robinhoodchain.blockscout.com/address/0x0E0d2C89a5a019FE1cF762e5e33187631DACC21B", published_at: null, accessed_at: 2026-09-03T04:06:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-2, CLM-3, CLM-4, CLM-6, CLM-12, CLM-16, CLM-23], excerpt: "api/v2 tokens: address_hash 0x0E0d2C89a5a019FE1cF762e5e33187631DACC21B name Chump Coin symbol CHUMP decimals 18 total_supply 1000000000000000000000000000 holders_count 4486 type ERC-20. Address: is_contract true is_verified true name ChumpCoin creator 0x5BAD2B481Fd216c572C05B2Ebedc5993E1214B20 tx 0xb07ddfa13da521bbb0416c648d0f9a398ae33e13044217deb69c31de6d35a613." }
  - { id: R-2, publisher: Blockscout, title: "Verified ChumpCoin.sol source", url: "https://robinhoodchain.blockscout.com/address/0x0E0d2C89a5a019FE1cF762e5e33187631DACC21B?tab=contract", published_at: 2026-08-13T23:00:38Z, accessed_at: 2026-09-03T04:06:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-2, CLM-3, CLM-13, CLM-14, CLM-16], excerpt: "name ChumpCoin file src/ChumpCoin.sol compiler v0.8.24+commit.e11b9ed9 is_fully_verified true is_partially_verified false. Constants V3_FACTORY 0x1f7d7550B1b028f7571E69A784071F0205FD2EfA WETH9 0x0Bd7D308f8E1639FAb988df18A8011f41EAcAD73. Constructor (Chump Coin, CHUMP, 1000000000, 0x73991a25C818Bf1f1128dEAaB1492D45638DE0D3). No tax fields. onlyOwner addAmmPool/removeLimits/renounceOwnership." }
  - { id: R-3, publisher: Blockscout, title: "Create tx 0xb07ddfa1…a613", url: "https://robinhoodchain.blockscout.com/tx/0xb07ddfa13da521bbb0416c648d0f9a398ae33e13044217deb69c31de6d35a613", published_at: 2026-07-31T01:44:31Z, accessed_at: 2026-09-03T04:06:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-4, CLM-6, CLM-16, EVT-4], excerpt: "timestamp 2026-07-31T01:44:31.000000Z status ok result success block_number 23791950 from 0x5BAD2B481Fd216c572C05B2Ebedc5993E1214B20 (is_contract false) created_contract ChumpCoin 0x0E0d2C89a5a019FE1cF762e5e33187631DACC21B is_verified true." }
  - { id: R-4, publisher: Blockscout, title: "renounceOwnership tx 0xb7b5ec55…e0a5", url: "https://robinhoodchain.blockscout.com/tx/0xb7b5ec557741c13208f0a72c39dc0b2de8514d906be221eb7513ef797e38e0a5", published_at: 2026-08-11T01:43:01Z, accessed_at: 2026-09-03T04:07:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-13, CLM-14, EVT-6], excerpt: "timestamp 2026-08-11T01:43:01.000000Z status ok block_number 33274774 from 0x5BAD2B481Fd216c572C05B2Ebedc5993E1214B20 to ChumpCoin 0x0E0d…C21B method renounceOwnership(). Log OwnershipTransferred previousOwner 0x5BAD…4B20 newOwner 0x0000…0000. LimitsRemoved log tx 0x3b0c71f80d998921a2e80eb2c8be36bba62b11875490001959eb97881896e435 2026-08-10T19:57:31Z." }
  - { id: R-5, publisher: Robinhood Chain RPC, title: "eth_getCode, ERC-20 and ChumpCoin views", url: "https://rpc.mainnet.chain.robinhood.com", published_at: null, accessed_at: 2026-09-03T04:07:18Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-2, CLM-3, CLM-4, CLM-5, CLM-6, CLM-13, CLM-14, CLM-16, CLM-17, EVT-6], excerpt: "block 53123438. Token code 5225 B. name Chump Coin symbol CHUMP decimals 18 totalSupply 1e27 owner 0x0 factory revert. limitsActive false seeded true maxWalletBps 100 mainPool 0x714442e9A611f8561A7dF108D6d925132937cFb8 soldBps 9858. Deployer 0x5BAD…4B20 code 0x. Pool 22142 B. WETH 0x0Bd7…AD73 2202 B. Factory 0x1f7d…2EfA 24535 B." }
  - { id: R-6, publisher: Blockscout, title: "lockNFT tx 0x2d7b09a9…46c0", url: "https://robinhoodchain.blockscout.com/tx/0x2d7b09a9adcdabaf60d655fa5dbf33cbfd90368d1a2972b554c51196e0f346c0", published_at: 2026-08-18T15:40:54Z, accessed_at: 2026-09-03T04:06:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-22, EVT-5], excerpt: "timestamp 2026-08-18T15:40:54.000000Z from 0x5BAD…4B20 to 0x3A7De5F29557405f5d9Fd06B570a53B966a78E8e method lockNFT. Params _tokenAddress 0x73991a25C818Bf1f1128dEAaB1492D45638DE0D3 _withdrawalAddress 0x5BAD…4B20 _amount 1 _unlockTime 1789659601 (2026-09-17T15:40:01Z) _tokenId 518773. Locker is unverified eip1967 proxy, implementation LockToken 0x2A2E5fd6FC9936aD7bb9297e957898F122bCE81B." }
  - { id: R-7, publisher: DexScreener, title: "latest/dex/tokens CHUMP", url: "https://api.dexscreener.com/latest/dex/tokens/0x0E0d2C89a5a019FE1cF762e5e33187631DACC21B", published_at: null, accessed_at: 2026-09-03T04:04:46Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-7, CLM-9, CLM-11, CLM-15, CLM-17, CLM-20, CLM-23], excerpt: "4 robinhood uniswap pairs. Top pairAddress 0x714442e9A611f8561A7dF108D6d925132937cFb8 labels v3 base Chump Coin / CHUMP quote WETH 0x0Bd7…AD73 liquidity.usd 1106038.37 volume.h24 5605964.08 fdv 38005324 marketCap 38005324 pairCreatedAt 1785462271. CHUMP/USDG v4 liq 184.97 vol 13.67. info.websites cc21b.meme, X comm, Team.finance LP LOCK. socials x.com/ChumpCoinX t.me/CHUMPCOIN21B tiktok @chumpcoin." }
  - { id: R-8, publisher: GeckoTerminal, title: "CHUMP/WETH Uniswap v3 1% pool", url: "https://api.geckoterminal.com/api/v2/networks/robinhood/pools/0x714442e9A611f8561A7dF108D6d925132937cFb8", published_at: null, accessed_at: 2026-09-03T04:05:15Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-6, CLM-7, CLM-10, CLM-15, CLM-20, CLM-26, EVT-1], excerpt: "name CHUMP / WETH 1% pool_created_at 2026-07-31T01:44:31Z fdv_usd 37562528.56 market_cap_usd 37562528.95 volume_usd.h24 5566773.12939202 reserve_in_usd 1100985.3009 transactions.h24 buys 7591 sells 8808. dex uniswap-v3-robinhood quote robinhood_0x0bd7d308f8e1639fab988df18a8011f41eacad73 pool_fee_percentage 1 locked_liquidity_percentage null." }
  - { id: R-9, publisher: GeckoTerminal, title: "Chump Coin token", url: "https://api.geckoterminal.com/api/v2/networks/robinhood/tokens/0x0E0d2C89a5a019FE1cF762e5e33187631DACC21B", published_at: null, accessed_at: 2026-09-03T04:04:50Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-10, CLM-20, CLM-27], excerpt: "name Chump Coin symbol CHUMP decimals 18 total_supply 1e27 price_usd 0.03761444511 fdv_usd 37614444.72 market_cap_usd 38359657.35 volume_usd.h24 5583718.8245277 total_reserve_in_usd 530570.53. coingecko_coin_id chump-coin. Info endpoint websites https://cc21b.meme twitter_handle ChumpCoinX telegram_handle null. Description: permanently locked liquidity." }
  - { id: R-10, publisher: cc21b.meme, title: "$CHUMP Official Coin of the People", url: "https://cc21b.meme", published_at: null, accessed_at: 2026-09-03T04:06:00Z, kind: official-site, authority: primary, authenticity: confirmed, supports: [CLM-8, CLM-9, CLM-23, CLM-24, CLM-25, CLM-27], excerpt: "Contract Address 0x0E0d2C89a5a019FE1cF762e5e33187631DACC21B. CertiK Audit Pending. Links @ChumpCoinX, X community, TikTok @chumpcoin, Uniswap robinhood token, DexScreener pool 0x7144…cFb8. Copy: zero-tax, renounced contract, forever-locked liquidity. View LP Lock Transaction points to Blockscout tx 0x2d7b09a9…46c0. Supply 1B. Buy/sell 0%/0%." }
  - { id: R-11, publisher: "@cryptocom", title: "Chump Coin ($CHUMP) listed in crypto.com/us app", url: "https://x.com/cryptocom/status/2095021796667851144", published_at: 2026-09-02T05:31:34Z, accessed_at: 2026-09-03T04:08:00Z, kind: social, authority: social, authenticity: confirmed, supports: [EVT-2], excerpt: "Chump Coin ($CHUMP) and TendiesRH ($TENDIES) are now available for trading in the crypto.com/us App. Purchase $CHUMP and $TENDIES easily with USD, EUR, and 20+ fiat currencies. Tags @ChumpCoinX @TendiesRH." }
  - { id: R-12, publisher: "@bubblemaps", title: "If you buy $CHUMP, you are a chump", url: "https://x.com/bubblemaps/status/2095132274279022810", published_at: 2026-09-02T12:50:34Z, accessed_at: 2026-09-03T04:08:00Z, kind: social, authority: social, authenticity: confirmed, supports: [EVT-3], excerpt: "If you buy $CHUMP, you are a chump. The token is 80% bundled. Block every KOL promoting this garbage." }
  - { id: R-13, publisher: "@ChumpCoinX", title: "Chump Coin X profile", url: "https://x.com/ChumpCoinX", published_at: null, accessed_at: 2026-09-03T04:08:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [CLM-8, CLM-9, CLM-19, CLM-25], excerpt: "Display Chump Coin @ChumpCoinX. Bio: Independent project. Not affiliated with, endorsed by, or associated with Donald J. Trump or any public figure. No pro/anti-Trump position. Location Robinhood Chain. Website cc21b.meme. Joined August 2026. Followers 2229." }
  - { id: R-14, publisher: Telegram, title: "t.me/CHUMPCOIN21B", url: "https://t.me/CHUMPCOIN21B", published_at: null, accessed_at: 2026-09-03T04:07:00Z, kind: social, authority: social, authenticity: confirmed, supports: [CLM-8, CLM-24], excerpt: "HTTP 200. og:title Chump Coin Official Portal. og:description CHUMP COIN 2 1 BILLY (CC21B) 0x0E0d2C89a5a019FE1cF762e5e33187631DACC21B https://cc21b.meme/ https://x.com/i/communities/2020660935854014618/ https://x.com/ChumpCoinX https://www.tiktok.com/@chumpcoin. tgme_page_extra 749 subscribers." }
  - { id: R-15, publisher: crypto.news, title: "CHUMP skyrockets over 6,700x since July launch", url: "https://crypto.news/chump-skyrockets-over-6700x-since-july-launch-eyes-robinhood-chains-top-memecoin-spot/", published_at: 2026-08-25T09:40:00Z, accessed_at: 2026-09-03T04:10:00Z, kind: news, authority: independent, authenticity: confirmed, supports: [CLM-24], excerpt: "Chump Coin (CHUMP) launched on Robinhood Chain on July 31. Contract address ends in C21B; branding Chump Coin 2 1 Billion. Features 0% transaction tax, a renounced contract, and permanently locked liquidity. CA 0x0E0d2C89a5a019FE1cF762e5e33187631DACC21B." }
  - { id: R-16, publisher: Blockscout, title: "Pool, factory, NPM, locker, collision token", url: "https://robinhoodchain.blockscout.com/address/0x714442e9A611f8561A7dF108D6d925132937cFb8", published_at: null, accessed_at: 2026-09-03T04:06:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-5, CLM-21], excerpt: "Pool 0x7144…cFb8 name UniswapV3Pool is_verified true creator UniswapV3Factory 0x1f7d7550B1b028f7571E69A784071F0205FD2EfA. NPM 0x7399…0D3 name NonfungiblePositionManager is_verified true. Locker 0x3A7D…8E8e is_verified false proxy_type eip1967 impl LockToken 0x2A2E…E81B. Collision 0xEc0a…278a proxy_type eip1167 impl DropERC20 holders_count 9059." }
  - { id: R-17, publisher: GeckoTerminal, title: "Robinhood trending_pools 24h", url: "https://api.geckoterminal.com/api/v2/networks/robinhood/trending_pools?duration=24h", published_at: null, accessed_at: 2026-09-03T04:07:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-15, CLM-26, EVT-1], excerpt: "HTTP 200 n 20. Row 1 CHUMP / WETH 1% 0x714442e9a611f8561a7df108d6d925132937cfb8 volume_usd.h24 5564885.02514801 reserve_in_usd 1099762.1204. Token pools also list CHUMP/USDG 4% 0x0e80…f49b volume_usd.h24 13.67 reserve_in_usd 186.38." }
  - { id: R-18, publisher: X user search, title: "X handles using the ChumpCoinX name", url: "https://x.com/ChumpCoinX_X", published_at: null, accessed_at: 2026-09-03T04:08:00Z, kind: social, authority: social, authenticity: unconfirmed, supports: [CLM-19], excerpt: "X user search ChumpCoinX: @ChumpCoinX (2228 followers, official bio). Nearby: @ChumpCoinX_X bio MAKE MEMECOINS GREAT AGAIN! 0x0E0d2C89a5a019FE1cF762e5e33187631DACC21B (361 followers); @ChumpCoiniX same CA bio (269); @ChumpCoinX_ display Chump Coin Support same CA bio (55)." }
  - { id: R-19, publisher: DexScreener, title: "latest/dex/search CHUMP collision pair", url: "https://api.dexscreener.com/latest/dex/search?q=CHUMP", published_at: null, accessed_at: 2026-09-03T04:04:19Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-21], excerpt: "Search row: robinhood uniswap CHUMP/WETH pair 0x1Ca479C00Cf7E4efA6799E4bFaceb11eB2Fa4202 base 0xEc0acde3cF4c5f98ce2C021e6Bd6eC475fEe278a name Chump Coin liq 4537526.22 volh24 0.02 fdv 5041696 sites None socials None. Distinct from canonical 0x0E0d…C21B / 0x7144…cFb8." }
  - { id: R-20, publisher: GeckoTerminal, title: "Robinhood trending pools (GO-LIVE.md 2026-09-02 capture)", url: "https://api.geckoterminal.com/api/v2/networks/robinhood/trending_pools", published_at: 2026-09-02T00:00:00Z, accessed_at: 2026-09-03T04:10:00Z, kind: third-party-data, authority: aggregator, authenticity: unconfirmed, supports: [CLM-26], excerpt: "Discovery-inventory / GO-LIVE.md GET /networks/robinhood/trending_pools 2026-09-02: CHUMP/WETH $1.07M/$4.87M; SHRUB/WETH $147k/$6.78M; JINQIAN/FAMI $5.45M/$94.5M. Live pass 2026-09-03T04:07Z is CHUMP/WETH reserve ~$1.10M volume ~$5.56M." }
  - { id: R-21, publisher: "@ChumpCoinX", title: "WELCOME TO CULT DE $CHUMP", url: "https://x.com/ChumpCoinX/status/2095316473962999835", published_at: 2026-09-03T01:02:31Z, accessed_at: 2026-09-03T04:08:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [CLM-8], excerpt: "WELCOME TO CULT DE $CHUMP. No gatekeepers. No spectators. Build the culture. ONE CULT. ONE MISSION. CC21B." }

gaps:
  - { priority: P0, question: "Does lockNFT tokenId 518773 still hold the Uniswap v3 CHUMP/WETH NFT, and what happens at unlockTime 2026-09-17T15:40:01Z?", checked: "Decoded lockNFT on Blockscout; locker proxy unverified; site copy says forever, 2026-09-03", next: "read LockToken implementation 0x2A2E…E81B and the NFT ownerOf(518773) after 2026-09-17" }
  - { priority: P1, question: "Is there a published CertiK report URL, or does the pending label stay on cc21b.meme?", checked: "Site CertiK Audit Pending; no report URL on site, Blockscout, DexScreener, Gecko, X, 2026-09-03", next: "search skynet.certik.com for ChumpCoin / 0x0E0d…C21B" }
  - { priority: P1, question: "Does @bubblemaps 80% bundled claim reproduce on a holder or LP map for 0x0E0d…C21B?", checked: "Quoted the post; did not open bubblemaps.com for this CA this pass, 2026-09-03", next: "open the Bubblemaps Robinhood CHUMP graph and copy cluster percents" }
  - { priority: P2, question: "Are t.me/CHUMPCOIN21B and TikTok @chumpcoin linked from the @ChumpCoinX profile, or only from DexScreener / the site?", checked: "Site lists TikTok and X community, not Telegram; DexScreener lists TG; TG preview embeds CA and site, 2026-09-03", next: "re-read the X profile website/links row if a TG field is added" }
---

# CHUMP — research packet

## What it is

A one-billion-supply ERC-20 with verified ChumpCoin.sol on Robinhood Chain. The constructor seeds a Uniswap v3 CHUMP/WETH 1% pool. Traders buy and sell CHUMP against WETH (and a thin USDG book). Official site cc21b.meme and handle @ChumpCoinX cross-link the contract address.

Themes: memecoin, amm:WETH, graduation

## Why it matters

The CHUMP/WETH Uniswap v3 book printed about $5.57M of 24h volume on Gecko at collection, with reserve about $1.10M, and sat at row 1 of Gecko trending_pools duration=24h. Prior GO-LIVE trending capture was about $1.07M liquidity / $4.87M volume. Quote asset is WETH, not a stock token. Crypto.com posted a US-app listing tagging @ChumpCoinX.

## What could go wrong

USD liquidity figures on the CHUMP/WETH book count both sides. Site copy says liquidity is locked forever; the lockNFT call decoded on Blockscout uses unlockTime 2026-09-17T15:40:01Z with withdrawal address equal to the deployer. A same-ticker DropERC20 clone and several other X handles share the name.

## Product and mechanics

ChumpCoin.sol is a non-proxy ERC-20 (5225 bytes). constructor(name Chump Coin, symbol CHUMP, supplyWhole 1e9, positionManager 0x7399…0D3) minted 1e27 to the deployer and set mainPool to poolFor(10000) against WETH9 0x0Bd7…AD73 on UniswapV3Factory 0x1f7d…2EfA. That pool is 0x7144…cFb8. Source has no tax fields. [verified R-2 R-3 R-5]

create tx 0xb07d…a613 from EOA 0x5BAD…4B20 at 2026-07-31T01:44:31Z. DexScreener also lists Uniswap v4 CHUMP/ETH books and CHUMP/USDG 4% 0x0e80…f49b with liquidity.usd 184.97 and volume.h24 13.67. [verified R-3 R-7]

## Control and security

limitsActive is now false (LimitsRemoved 2026-08-10T19:57:31Z). owner() is 0x0 after renounceOwnership 2026-08-11T01:43:01Z. Source onlyOwner paths are addAmmPool, setExcludedFromLimit, removeLimits, transferOwnership, and renounceOwnership (renounce requires !limitsActive). Deployer has no code. [verified R-2 R-4 R-5]

Team.finance lockNFT tx 0x2d7b…46c0 (2026-08-18T15:40:54Z) targets unverified proxy 0x3A7D…8E8e, NFT tokenId 518773, unlockTime 2026-09-17T15:40:01Z, withdrawal 0x5BAD…4B20. Site labels CertiK Audit Pending; no report URL this pass. [verified R-6 R-10] [unknown]

## Team and provenance

Official domain https://cc21b.meme posts the CA and @ChumpCoinX. @ChumpCoinX profile website is cc21b.meme. t.me/CHUMPCOIN21B preview embeds the CA, site, and handle (749 subscribers). @ChumpCoinX_X, @ChumpCoiniX, and @ChumpCoinX_ post the same CA; flag handle-collision. No GitHub repository this pass. [verified R-10 R-13 R-14] [claim R-18]

## Economics and activity

CHUMP/WETH Uniswap v3 1% 24h volume is 5566773.13 USD and reserve_in_usd is 1100985.30 at 2026-09-03T04:05:15Z from the Gecko pool endpoint. fdv_usd is 37562528.56. Gecko token volume_usd.h24 is 5583718.82 across all pools, not the WETH book. [claim R-8 R-9]

DexScreener same pair: liquidity.usd 1106038.37, volume.h24 5605964.08, fdv/marketCap 38005324. Blockscout holders_count 4486. Pair created 2026-07-31T01:44:31Z. [claim R-1 R-7]

Gecko trending_pools duration=24h listed CHUMP/WETH 1% as row 1 (volume 5564885 / reserve 1099762). Assignment lead of prior trending ~$1.07M liq / ~$4.87M vol is the same book; live reserve is $1.10M and live volume is $5.57M. [claim R-8 R-17 R-20]

## Material risks

- lockNFT unlockTime is 2026-09-17T15:40:01Z while site copy says forever; withdrawal address is the deployer EOA. [verified R-6 R-10]
- Same-ticker DropERC20 clone 0xEc0a…278a and Pons-v2 CHUMP books exist. Flag ca-collision. [verified R-16 R-19]
- Other X handles post the canonical CA. Flag handle-collision. [claim R-18]
- No CertiK report URL this pass. [unknown]
- @bubblemaps posted an 80% bundled claim that was not reproduced on a holder map this pass. [claim R-12]

## Verification passes

- Receipts: Blockscout token/source/create/renounce/lockNFT/pool/factory/NPM/locker/collision, RPC name/symbol/owner/limits/mainPool, DexScreener token and search, Gecko pool/token/trending, cc21b.meme, @ChumpCoinX profile, Telegram preview, @cryptocom, @bubblemaps, crypto.news, and the GO-LIVE trending capture were opened on 2026-09-03 and excerpts copied from the responses. [verified R-1 R-5 R-8 R-10]
- Numbers: 5566773.13 is the Gecko CHUMP/WETH 1% pool 24h volume, not the 5583718.82 token all-pools figure. Reserve 1100985.30 is that pool. DexScreener 5605964.08 / 1106038.37 is the same pair, different aggregator. Holders 4486 is Blockscout, not the collision token's 9059. [claim R-1 R-7 R-8 R-9]
- Adversarial: the strongest contrary reading is that CHUMP is a stock-paired pad token or that the $4.54M CHUMP/WETH book on 0xEc0a…278a is the same asset. Canonical CA is custom ChumpCoin.sol paired to WETH/USDG, not a stock token; the high-liq low-vol book is a different DropERC20 clone. [inference R-7 R-16 R-19]

## Operations log

- Base: `git -C /Users/harsharnsingh/proofline-pr59 rev-parse origin/main` → 334ca0619aa62e922da83f46de021f06d12348cf. Census 49 slugs have no chump / CHUMP / Chump Coin / 0x0E0d…C21B.
- Explorer: Blockscout api/v2 token, address, smart-contract source, create 0xb07d…a613, renounce 0xb7b5…e0a5, LimitsRemoved 0x3b0c…e435, lockNFT 0x2d7b…46c0, pool/factory/NPM/locker, collision 0xEc0a…278a. RPC eth_getCode/eth_call with Chrome UA at blocks 53122567–53123438.
- Aggregators: DexScreener latest/dex/tokens and search; Gecko token, token/info, token/pools, pool, trending_pools duration=24h.
- Social: X user search ChumpCoinX / Chump Coin; from:ChumpCoinX Latest; @cryptocom listing; @bubblemaps; t.me/CHUMPCOIN21B preview; cc21b.meme.
- News: crypto.news 25 Aug article.
- Failed: first Blockscout calls without Chrome UA returned empty bodies; Gecko locked_liquidity_percentage null on the v3 pool; CertiK report URL not located; Bubblemaps graph not opened.
- Time: collection 2026-09-03T04:04Z–2026-09-03T04:12Z.
