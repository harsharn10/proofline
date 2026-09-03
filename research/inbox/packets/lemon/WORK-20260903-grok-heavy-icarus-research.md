---
# Packet v2 (docs/research-system.md §5). Seed with Icarus What-it-is + events.
contract_version: proofline-research-v2
work_id: WORK-20260903-grok-heavy-icarus-research
producer: grok-heavy
role: collector
base_sha: 334ca0619aa62e922da83f46de021f06d12348cf
slug: lemon
name: Lemon
packet_tier: seed
as_of: 2026-09-03T02:57:00Z
prior_packet: null
supersedes: null
owned_slugs: [lemon]
allowed_paths:
  - research/inbox/packets/lemon/WORK-20260903-grok-heavy-icarus-research.md

identity:
  canonical_name: Lemon
  aliases: [Lemon.fun, lemon.fun, LEMON.FUN]
  symbols: [LEMON.FUN, LEMON]
  entity_kind: protocol
  chain_scope: multichain
  official_domain: https://lemon.fun
  official_handle: "@lemondotfun"
  repository: "NULL — docs §9 say source Solidity is in the platform's public repository; no GitHub URL on lemon.fun, /docs, /launch, /leverage/BTC, or a GitHub search for LemonLaunchFactory this pass"
  possible_matches:
    - slug: noxa
      signals: [other]
      contrary_signals:
        - "Census NOXA Fun is fun.noxa / @Noxa_Fi, a Uniswap v3 pad"
        - "Lemon is lemon.fun / @lemondotfun with LemonLaunchFactory 0x2bA7…46DB"
        - "No shared domain, handle or reproduced address"
    - slug: pons
      signals: [other]
      contrary_signals:
        - "Census Pons is ponsfamily.com / @ponsdotfamily, a bonding-curve pad"
        - "@lemondotfun 26 Aug post says coins from @ponsdotfamily can be connected and tagged MOVED; that is a feed link, not a shared factory"
        - "No shared domain, handle or reproduced address"
    - slug: pools-trade
      signals: [other]
      contrary_signals:
        - "Census pools.trade is Uniswap Labs v4 LiquidityLauncher at pools.trade"
        - "Lemon Instant V3 uses Uniswap V3 TOKEN/WETH 1% via LemonLaunchFactory 0x2bA7…46DB"
        - "No shared domain, handle or reproduced address"
    - slug: long
      signals: [other]
      contrary_signals:
        - "Census LONG is a stock-paired factory at app.long.xyz / @longdotxyz"
        - "Lemon stock mode is a claimed fee-to-stock dividend vault on the same Instant V3 factory, not LongLauncher"
        - "No shared domain, handle or reproduced address"
    - slug: bankr
      signals: [ticker-only]
      contrary_signals:
        - "Bankr deployed a different token named Lemon Fun (ticker LEMON) at 0xef07…4Ba3 via DopplerERC20V1Factory 0x1B37…b69a on 2026-07-19"
        - "Official Lemon token is 0xf0E1…f7A3 created by LemonLaunchFactory.launchToken on 2026-07-25"
        - "No shared domain, handle or factory"
    - slug: hookr
      signals: [other]
      contrary_signals:
        - "Census Hookr is hookr.fun / @Hookrfun, a programmable-hook pad"
        - "Lemon Instant V3 is hookless Uniswap V3"
        - "No shared domain, handle or reproduced address"
    - slug: squeeze
      signals: [other]
      contrary_signals:
        - "Census Squeeze is @UseSqueeze_RH, a short-interest product; a separate $SQUEEZE meme is not this slug"
        - "Lemon is lemon.fun / @lemondotfun"
        - "No shared domain, handle or reproduced address"

classification:
  primary_leaf: launch/uni-pool-launch
  secondary_leaves: [trading/exec-frontend, trading/perps-imported]
  mechanism_tags: [launchpad, amm, fee-routing, rwa, agent, derivatives]
  ecosystem_role: subject
  lifecycle: mainnet
  coverage_recommendation: full
  evidence_state: partly-verified
  rationale: "lemon.fun and @lemondotfun cross-link. Docs name LemonLaunchFactory 0x2bA7…46DB, LemonLaunchLocker 0xC103…6903 and fee receiver 0xEF2c…0aB6. All three plus $LEMON.FUN 0xf0E1…f7A3 and UniswapV3Pool 0x01fe…36B5 have non-empty code or an EOA record on chain 4663; factory, locker, token and pool are Blockscout-verified. owner() on factory and locker returns the fee-receiver EOA, against docs 'unowned'. Census announced is below that bar. [R-1] [R-2] [R-4] [R-11] [R-12] [R-13] [R-15]"

qualifying:
  deployed_on_chain: { status: pass, claim_ids: [CLM-4, CLM-5, CLM-6, CLM-7], note: "" }
  native_play:       { status: pass, claim_ids: [CLM-1, CLM-9, CLM-14], note: "" }
  citable:           { status: pass, claim_ids: [CLM-2, CLM-3], note: "" }
  research_story:    { status: pass, claim_ids: [CLM-1, CLM-12, CLM-15, CLM-16], note: "" }

links:
  - { kind: site, url: "https://lemon.fun", authenticity: confirmed }
  - { kind: app, url: "https://lemon.fun/launch", authenticity: confirmed }
  - { kind: docs, url: "https://lemon.fun/docs", authenticity: confirmed }
  - { kind: x, url: "https://x.com/lemondotfun", authenticity: confirmed }
  - { kind: telegram, url: "https://t.me/lemondotfun", authenticity: confirmed }
  - { kind: other, url: "https://lemon.fun/leverage/BTC", authenticity: confirmed }

deployments:
  - label: LemonLaunchFactory (Instant V3)
    role: factory
    address:
      value: "0x2bA793Fd69Bf251Fd1Af90b576bE8B9fA6Be46DB"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-1, R-11, R-15, R-16]
  - label: LemonLaunchLocker
    role: other
    address:
      value: "0xC10309Cf03Bc81c121a8270E3A28E159a9296903"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-1, R-12, R-15]
  - label: Platform fee receiver / owner EOA
    role: admin
    address:
      value: "0xEF2c099803Fff879443009722AA2B9C46E020aB6"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03
      exists_on_4663: true
      explorer_source_verified: false
    receipt_ids: [R-1, R-14, R-15]
  - label: $LEMON.FUN (official pad token)
    role: token
    address:
      value: "0xf0E17e54239CD945Cd7bEa471a3a2CA6a8C7f7A3"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-5, R-13, R-15, R-17]
  - label: LEMON/WETH Uniswap V3 pool
    role: other
    address:
      value: "0x01fe057d1C5FB09A4ac02860758DDf26Df9336B5"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-13, R-18, R-19]

metrics:
  - { kind: volume_24h, value: 124714, currency: USD, as_of: 2026-09-03T02:50:00Z, window: 24h, method: "api.dexscreener.com/token-pairs/v1/robinhood/0xf0e17e54239cd945cd7bea471a3a2ca6a8c7f7a3 pair 0x01fe057d1C5FB09A4ac02860758DDf26Df9336B5 volume.h24", class: claim, receipt_ids: [R-18] }
  - { kind: market_cap, value: 735282, currency: USD, as_of: 2026-09-03T02:50:00Z, window: point, method: "DexScreener LEMON/WETH pair marketCap/fdv for 0xf0E1…f7A3 on chain robinhood", class: claim, receipt_ids: [R-18] }
  - { kind: holders, value: 12457, currency: null, as_of: 2026-09-03T02:52:00Z, window: point, method: "Blockscout API v2 addresses/0xf0E17e54239CD945Cd7bEa471a3a2CA6a8C7f7A3 token.holders_count", class: claim, receipt_ids: [R-13] }

reproductions:
  - { id: REP-1, method: explorer-rpc, chain_id: 4663, checked_at: 2026-09-03T02:50:00Z, receipt_ids: [R-15], result: "eth_chainId 0x1237; eth_blockNumber 0x329f257 (53059927). eth_getCode non-empty: factory 24263 bytes, locker 5416 bytes, token 5256 bytes. Fee receiver 0xEF2c…0aB6 code empty. owner() factory and locker both 0xEF2c099803Fff879443009722AA2B9C46E020aB6. token name() Lemon, symbol() LEMON.FUN, totalSupply 1e27 (1B * 1e18). token owner() reverted." }
  - { id: REP-2, method: explorer-ui, chain_id: 4663, checked_at: 2026-09-03T02:52:00Z, receipt_ids: [R-11, R-12, R-13, R-14, R-16, R-17], result: "Blockscout API v2: LemonLaunchFactory is_contract true is_verified true creator 0xEF2c…0aB6 tx 0xecd99121…0126e 2026-07-22T10:20:59Z. LemonLaunchLocker verified, same creator, tx 0x0723e949…5313 2026-07-22T10:20:53Z. Token Lemon.fun / LEMON verified, creator LemonLaunchFactory, tx 0x48a82224…104d method launchToken 2026-07-25T12:46:57Z from 0x2F75…6C25. Fee receiver is_contract false. Pool UniswapV3Pool verified, created in the same launchToken tx by Uniswap V3 Factory 0x1f7d7550…2EfA." }
  - { id: REP-3, method: official-crosslink, checked_at: 2026-09-03T02:48:00Z, receipt_ids: [R-1, R-2, R-3, R-4, R-10], result: "lemon.fun footer links https://x.com/lemondotfun and https://t.me/lemondotfun. lemon.fun/leverage/BTC twitter:site and twitter:creator @lemondotfun. Docs name frontend lemon.fun and the three platform addresses. @lemondotfun bio Launch/Trade tokens the way you want. Built on @Robinhoodcrypto; prior profile scrape listed website lemon.fun." }
  - { id: REP-4, method: api, chain_id: 4663, checked_at: 2026-09-03T02:50:00Z, receipt_ids: [R-18, R-19], result: "DexScreener five robinhood pairs for 0xf0E1…f7A3; primary Uniswap LEMON/WETH 0x01fe…36B5 liquidity.usd 131443.69 volume.h24 124714.09 marketCap 735282. lemon.fun API token 0xf0e1…f7a3 name Lemon symbol LEMON.FUN chainId 4663 poolAddress 0x01fe…36B5 socials twitter/telegram/website official, lpLocked true, source launchpad." }

claims:
  - { id: CLM-1, field: product.mechanism, value: "Instant V3: one LemonLaunchFactory.launchToken tx deploys a 1B fixed-supply ERC-20, seeds a Uniswap V3 TOKEN/WETH 1% full-range pool, and locks the LP NFT in LemonLaunchLocker. No bonding phase on this path.", class: claim, observed_at: 2026-09-03T02:45:00Z, receipt_ids: [R-1, R-3, R-17], reproduction_ids: [], supersedes: null }
  - { id: CLM-2, field: identity.domain, value: "https://lemon.fun", class: verified, observed_at: 2026-09-03T02:48:00Z, receipt_ids: [R-2, R-4, R-10], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-3, field: identity.handle, value: "@lemondotfun", class: verified, observed_at: 2026-09-03T02:48:00Z, receipt_ids: [R-2, R-4, R-10], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-4, field: deployment.address, value: "0x2bA793Fd69Bf251Fd1Af90b576bE8B9fA6Be46DB", class: verified, observed_at: 2026-09-03T02:52:00Z, receipt_ids: [R-1, R-11, R-15, R-16], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-5, field: deployment.address, value: "0xC10309Cf03Bc81c121a8270E3A28E159a9296903", class: verified, observed_at: 2026-09-03T02:52:00Z, receipt_ids: [R-1, R-12, R-15], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-6, field: deployment.address, value: "0xf0E17e54239CD945Cd7bEa471a3a2CA6a8C7f7A3", class: verified, observed_at: 2026-09-03T02:52:00Z, receipt_ids: [R-5, R-13, R-15, R-17], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-7, field: lifecycle, value: mainnet, class: verified, observed_at: 2026-09-03T02:52:00Z, receipt_ids: [R-11, R-13, R-15, R-17], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-8, field: identity.symbol, value: "LEMON.FUN", class: verified, observed_at: 2026-09-03T02:50:00Z, receipt_ids: [R-15, R-19], reproduction_ids: [REP-1], supersedes: null }
  - { id: CLM-9, field: product.mechanism, value: "Instant V3 pool swap fees split 30% platform / 70% creator via LemonLaunchLocker.claim(); LP principal has no withdraw path in the docs.", class: claim, observed_at: 2026-09-03T02:45:00Z, receipt_ids: [R-1, R-3], reproduction_ids: [], supersedes: null }
  - { id: CLM-10, field: product.mechanism, value: "Optional tokenized-stock mode: a per-token StockDividendVault converts creator-share fees into a nominated Robinhood stock token; 75% of converted stock to holders, remainder creator/platform.", class: claim, observed_at: 2026-09-03T02:45:00Z, receipt_ids: [R-1, R-3], reproduction_ids: [], supersedes: null }
  - { id: CLM-11, field: product.mechanism, value: "X-agent launch: each coin can attach a dedicated X account that posts on-chain facts (mcap, volume, holder concentration, locked LP). The 26 Aug post says the agent cannot move funds. Coins from other pads can be connected with a MOVED tag.", class: claim, observed_at: 2026-09-03T02:46:00Z, receipt_ids: [R-7, R-8], reproduction_ids: [], supersedes: null }
  - { id: CLM-12, field: product.mechanism, value: "lemon.fun/leverage/BTC is a BTC-perp terminal: live book, funding, positions; executed on Hyperliquid; meta says never custodied by lemon.fun. Chain plate reads Hyperliquid / Arbitrum One.", class: claim, observed_at: 2026-09-03T02:49:00Z, receipt_ids: [R-10], reproduction_ids: [], supersedes: null }
  - { id: CLM-13, field: taxonomy.primary-leaf, value: launch/uni-pool-launch, class: claim, observed_at: 2026-09-03T02:45:00Z, receipt_ids: [R-1, R-3, R-17], reproduction_ids: [], supersedes: null }
  - { id: CLM-14, field: taxonomy.chain-scope, value: multichain, class: claim, observed_at: 2026-09-03T02:45:00Z, receipt_ids: [R-1, R-2, R-10], reproduction_ids: [], supersedes: null }
  - { id: CLM-15, field: control.owner, value: "0xEF2c099803Fff879443009722AA2B9C46E020aB6", class: verified, observed_at: 2026-09-03T02:50:00Z, receipt_ids: [R-14, R-15, R-16], reproduction_ids: [REP-1], supersedes: null }
  - { id: CLM-16, field: control.owner, value: "unowned", class: claim, observed_at: 2026-09-03T02:45:00Z, receipt_ids: [R-1], reproduction_ids: [], supersedes: null }
  - { id: CLM-17, field: security.audit, value: "No audit report was located on lemon.fun/docs, the site, the X account, or a GitHub search this pass", class: unknown, observed_at: 2026-09-03T02:54:00Z, receipt_ids: [], reproduction_ids: [], supersedes: null }
  - { id: CLM-18, field: "account.@lemondotfun.role", value: project, class: claim, observed_at: 2026-09-03T02:48:00Z, receipt_ids: [R-4, R-2], reproduction_ids: [], supersedes: null }
  - { id: CLM-19, field: "account.@lemondotfun.slug", value: lemon, class: claim, observed_at: 2026-09-03T02:48:00Z, receipt_ids: [R-4, R-2], reproduction_ids: [], supersedes: null }
  - { id: CLM-20, field: relationship, value: "Bankr-launched token Lemon Fun 0xef07…4Ba3 (DopplerERC20V1 clone, 2 holders) is not the official $LEMON.FUN 0xf0E1…f7A3", class: verified, observed_at: 2026-09-03T02:52:00Z, receipt_ids: [R-21, R-13], reproduction_ids: [REP-2], supersedes: null }
  - { id: CLM-21, field: taxonomy.secondary-leaf, value: trading/exec-frontend, class: claim, observed_at: 2026-09-03T02:49:00Z, receipt_ids: [R-2, R-10], reproduction_ids: [], supersedes: null }
  - { id: CLM-22, field: taxonomy.secondary-leaf, value: trading/perps-imported, class: claim, observed_at: 2026-09-03T02:49:00Z, receipt_ids: [R-10], reproduction_ids: [], supersedes: null }
  - { id: CLM-23, field: economics.metric, value: "DexScreener LEMON/WETH 24h volume 124714 USD and marketCap 735282 USD on 2026-09-03", class: claim, observed_at: 2026-09-03T02:50:00Z, receipt_ids: [R-18], reproduction_ids: [], supersedes: null }
  - { id: CLM-24, field: economics.metric, value: "Blockscout holders_count 12457 on 0xf0E1…f7A3", class: claim, observed_at: 2026-09-03T02:52:00Z, receipt_ids: [R-13], reproduction_ids: [], supersedes: null }
  - { id: CLM-25, field: deployment.address, value: "0x01fe057d1C5FB09A4ac02860758DDf26Df9336B5", class: verified, observed_at: 2026-09-03T02:52:00Z, receipt_ids: [R-13, R-18, R-19], reproduction_ids: [REP-2, REP-4], supersedes: null }
  - { id: CLM-26, field: control.privileged-role, value: "Docs list 0xEF2c…0aB6 as the EOA platform fee receiver for Instant V3 pool fees and a 1% bonding-curve platform fee", class: claim, observed_at: 2026-09-03T02:45:00Z, receipt_ids: [R-1], reproduction_ids: [], supersedes: null }
  - { id: CLM-27, field: "account.@lemondotfun.tier", value: project, class: claim, observed_at: 2026-09-03T02:48:00Z, receipt_ids: [R-4], reproduction_ids: [], supersedes: null }

conflicts:
  - id: CON-1
    field: control.owner
    claim_ids: [CLM-15, CLM-16]
    material_effect: "Docs say Instant V3 platform contracts are unowned; owner() on factory and locker returns fee-receiver EOA 0xEF2c…0aB6"
    status: open
    resolution: null

events:
  - id: EVT-1
    type: company
    title: "@lemondotfun posts utility-paired coins coming shortly"
    summary: "@lemondotfun posted that coins will pair with Lemon terminal, Telegram bot, or launchpad utility from day one."
    occurred_at: 2026-08-30T20:34:04Z
    observed_at: 2026-09-03T02:46:00Z
    affected_fields: [product.mechanism, communications.status]
    evidence_state: claim
    impact: material
    site_recommendation: feed
    channel_recommendation: none
    receipt_ids: [R-9]
  - id: EVT-2
    type: company
    title: "@lemondotfun ships agentic X launch method"
    summary: "@lemondotfun posted that every token can launch with its own X agent that posts on-chain facts and cannot move funds."
    occurred_at: 2026-08-26T01:50:03Z
    observed_at: 2026-09-03T02:46:00Z
    affected_fields: [product.mechanism]
    evidence_state: claim
    impact: material
    site_recommendation: both
    channel_recommendation: none
    receipt_ids: [R-7]
  - id: EVT-3
    type: company
    title: "@lemondotfun: each coin gets its own X account"
    summary: "@lemondotfun posted a Tuesday ship date for per-coin X accounts that post market cap, volume, holders and locked LP."
    occurred_at: 2026-08-22T16:37:01Z
    observed_at: 2026-09-03T02:46:00Z
    affected_fields: [product.mechanism]
    evidence_state: claim
    impact: routine
    site_recommendation: feed
    channel_recommendation: none
    receipt_ids: [R-8]
  - id: EVT-4
    type: company
    title: "@lemondotfun: $LEMON.FUN listed on Gate Alpha"
    summary: "@lemondotfun posted a Gate Alpha listing for CA 0xf0e17e54239cd945cd7bea471a3a2ca6a8c7f7a3."
    occurred_at: 2026-08-05T15:48:37Z
    observed_at: 2026-09-03T02:47:00Z
    affected_fields: [activity.status, identity.symbol]
    evidence_state: claim
    impact: routine
    site_recommendation: feed
    channel_recommendation: none
    receipt_ids: [R-22]
  - id: EVT-5
    type: company
    title: "@lemondotfun: official $LEMON.FUN live on chain 4663"
    summary: "@lemondotfun posted CA 0xf0e17e54239cd945cd7bea471a3a2ca6a8c7f7a3 as the official Lemon coin on Robinhood Chain."
    occurred_at: 2026-07-25T13:03:54Z
    observed_at: 2026-09-03T02:47:00Z
    affected_fields: [deployment.address, identity.symbol, lifecycle]
    evidence_state: claim
    impact: material
    site_recommendation: both
    channel_recommendation: none
    receipt_ids: [R-5]
  - id: EVT-6
    type: onchain
    title: "LemonLaunchFactory launchToken creates $LEMON.FUN"
    summary: "Tx 0x48a82224…104d from 0x2F75…6C25 called launchToken on LemonLaunchFactory; token and UniswapV3Pool created."
    occurred_at: 2026-07-25T12:46:57Z
    observed_at: 2026-09-03T02:52:00Z
    affected_fields: [deployment.address, lifecycle]
    evidence_state: verified
    impact: material
    site_recommendation: profile
    channel_recommendation: none
    receipt_ids: [R-17, R-13]
  - id: EVT-7
    type: onchain
    title: "LemonLaunchFactory and LemonLaunchLocker deployed"
    summary: "EOA 0xEF2c…0aB6 created LemonLaunchLocker then LemonLaunchFactory on 2026-07-22; both source-verified."
    occurred_at: 2026-07-22T10:20:59Z
    observed_at: 2026-09-03T02:52:00Z
    affected_fields: [deployment.address, control.owner, lifecycle]
    evidence_state: verified
    impact: material
    site_recommendation: profile
    channel_recommendation: none
    receipt_ids: [R-16, R-11, R-12]
  - id: EVT-8
    type: company
    title: "@lemondotfun: launchpad live through SushiSwap"
    summary: "@lemondotfun posted the launchpad live on Robinhood Chain through SushiSwap and linked lemon.fun."
    occurred_at: 2026-07-18T19:46:24Z
    observed_at: 2026-09-03T02:47:00Z
    affected_fields: [lifecycle, identity.domain, product.mechanism]
    evidence_state: claim
    impact: material
    site_recommendation: feed
    channel_recommendation: none
    receipt_ids: [R-6]

receipts:
  - { id: R-1, publisher: lemon.fun, title: "Docs — Multi-Chain Launchpad Protocol", url: "https://lemon.fun/docs", published_at: null, accessed_at: 2026-09-03T02:45:00Z, kind: docs, authority: primary, authenticity: confirmed, supports: [CLM-1, CLM-4, CLM-5, CLM-9, CLM-10, CLM-13, CLM-14, CLM-16, CLM-26], excerpt: "All contracts are immutable, unowned, and verified on Robinscan. LemonLaunchFactory (Instant V3 - current) 0x2ba793fd69bf251fd1af90b576be8b9fa6be46db. LemonLaunchLocker 0xc10309cf03bc81c121a8270e3a28e159a9296903. Platform Fee Receiver 0xEF2c099803Fff879443009722AA2B9C46E020aB6 EOA. Instant V3 pool swap fees 30% platform / 70% creator. DEX venue Uniswap V3 1% fee tier; SushiSwap V3 opt-in fallback." }
  - { id: R-2, publisher: lemon.fun, title: "Lemon.fun homepage", url: "https://lemon.fun/", published_at: null, accessed_at: 2026-09-03T02:44:00Z, kind: official-site, authority: primary, authenticity: confirmed, supports: [CLM-2, CLM-3, CLM-14, CLM-18, CLM-19, CLM-21], excerpt: "Launch tokens on any chain, with ease. Footer: Multi-chain token launchpad and trading terminal. X https://x.com/lemondotfun Telegram https://t.me/lemondotfun. Nav: Launch, Terminal 0xf0e17e54239cd945cd7bea471a3a2ca6a8c7f7a3, Swap, Leverage, Docs. Homepage counters: TOKENS LAUNCHED 682, 24H VOLUME $134.4K ACROSS 4 CHAINS." }
  - { id: R-3, publisher: lemon.fun, title: "Launch a Token on Robinhood Chain", url: "https://lemon.fun/launch", published_at: null, accessed_at: 2026-09-03T02:44:00Z, kind: official-site, authority: primary, authenticity: confirmed, supports: [CLM-1, CLM-9, CLM-10, CLM-13], excerpt: "Deploy the token, seed a one-sided Uniswap V3 position, lock the LP NFT in LemonLaunchLocker and execute your dev buy, all in one transaction. FEE SPLIT 30 / 70. Standard launch: fixed supply memecoin with locked V3 liquidity. Tokenized stock: 75% of the reward vault to holders, 20% to you, 5% platform. Pre-seeded launch AVAILABLE SOON." }
  - { id: R-4, publisher: "@lemondotfun", title: "Lemon profile", url: "https://x.com/lemondotfun", published_at: null, accessed_at: 2026-09-03T02:40:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [CLM-2, CLM-3, CLM-18, CLM-19, CLM-27], excerpt: "Display name Lemon, handle @lemondotfun. Bio: Launch/Trade tokens the way you want. Built on @Robinhoodcrypto. User ID 2077791364247420928, created 2026-07-16. Website listed as https://lemon.fun on profile scrapes." }
  - { id: R-5, publisher: "@lemondotfun", title: "The official Lemon coin $LEMON.FUN is now LIVE", url: "https://x.com/lemondotfun/status/2081002503521337823", published_at: 2026-07-25T13:03:54Z, accessed_at: 2026-09-03T02:47:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [CLM-6, EVT-5], excerpt: "The official Lemon coin $LEMON.FUN is now LIVE on Robinhood Chain. CA: 0xf0e17e54239cd945cd7bea471a3a2ca6a8c7f7a3. The launchpad is built. The terminal is ready. Creators can launch coins across Robinhood Chain and Stable, with liquidity graduating into Uniswap and SushiSwap pools." }
  - { id: R-6, publisher: "@lemondotfun", title: "Lemon launchpad is officially LIVE", url: "https://x.com/lemondotfun/status/2078567080824058087", published_at: 2026-07-18T19:46:24Z, accessed_at: 2026-09-03T02:47:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [EVT-8], excerpt: "Lemon launchpad is officially LIVE. Launch tokens on Robinhood Chain directly through @SushiSwap with just a few clicks. The next wave starts now. https://lemon.fun/" }
  - { id: R-7, publisher: "@lemondotfun", title: "We just squeezed out the agentic X launch method", url: "https://x.com/lemondotfun/status/2092429333591707920", published_at: 2026-08-26T01:50:03Z, accessed_at: 2026-09-03T02:46:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [CLM-11, EVT-2], excerpt: "We just squeezed out the agentic X launch method on Lemon.fun. Now every token can launch with its own autonomous X account. The agent handles content and posting only. It does not control the contract, treasury, or your wallet. Existing coins from @ponsdotfamily or any other launchpad can be connected too. Only at $LEMON 0xf0E17e54239CD945Cd7bEa471a3a2CA6a8C7f7A3." }
  - { id: R-8, publisher: "@lemondotfun", title: "On Tuesday we are shipping a new launch method", url: "https://x.com/lemondotfun/status/2091202995715236236", published_at: 2026-08-22T16:37:01Z, accessed_at: 2026-09-03T02:46:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [CLM-11, EVT-3], excerpt: "On Tuesday we are shipping a new launch method where your coin gets its own X account and writes its own posts. You choose what it is allowed to read before it speaks. Market cap and volume. Holder concentration. Locked liquidity. Connect your existing coin from any other launchpad, only here, only at Lemon." }
  - { id: R-9, publisher: "@lemondotfun", title: "COMING TO LEMON SHORTLY — UTILITY PAIRED COINS", url: "https://x.com/lemondotfun/status/2094161754964267055", published_at: 2026-08-30T20:34:04Z, accessed_at: 2026-09-03T02:46:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [EVT-1], excerpt: "COMING TO LEMON SHORTLY. UTILITY PAIRED COINS. On lemon.fun you pair your coin with real, proven, working Lemon utility from day one. Launch your own Terminal. Your own Telegram trading bot. Your own launchpad. Everything Lemon owns and has already proven in production becomes yours to launch under your own coin." }
  - { id: R-10, publisher: lemon.fun, title: "BTC perp, leverage trading on lemon.fun", url: "https://lemon.fun/leverage/BTC", published_at: null, accessed_at: 2026-09-03T02:49:00Z, kind: official-site, authority: primary, authenticity: confirmed, supports: [CLM-2, CLM-3, CLM-12, CLM-14, CLM-21, CLM-22], excerpt: "meta twitter:site @lemondotfun twitter:creator @lemondotfun. description: Trade the BTC perpetual from the lemon.fun terminal. Live book, funding, positions and up to venue max leverage, signed by your own wallet on Hyperliquid. og:description: Executed on Hyperliquid, never custodied by lemon.fun. Visible: Hyperliquid RISK AND TERMS. Chain plate title: Perps settle on Arbitrum One through Hyperliquid." }
  - { id: R-11, publisher: Blockscout, title: "Address 0x2bA793Fd69Bf251Fd1Af90b576bE8B9fA6Be46DB", url: "https://robinhoodchain.blockscout.com/address/0x2ba793fd69bf251fd1af90b576be8b9fa6be46db", published_at: null, accessed_at: 2026-09-03T02:52:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-4, CLM-7, EVT-7], excerpt: "API v2: hash 0x2bA793Fd69Bf251Fd1Af90b576bE8B9fA6Be46DB name LemonLaunchFactory is_contract true is_verified true creator_address_hash 0xEF2c099803Fff879443009722AA2B9C46E020aB6 creation_transaction_hash 0xecd9912180c8206fbc94b55cf951dddf7d7badc4336aedaa55a1c5bd3050126e." }
  - { id: R-12, publisher: Blockscout, title: "Address 0xC10309Cf03Bc81c121a8270E3A28E159a9296903", url: "https://robinhoodchain.blockscout.com/address/0xc10309cf03bc81c121a8270e3a28e159a9296903", published_at: null, accessed_at: 2026-09-03T02:52:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-5, EVT-7], excerpt: "API v2: hash 0xC10309Cf03Bc81c121a8270E3A28E159a9296903 name LemonLaunchLocker is_contract true is_verified true creator_address_hash 0xEF2c099803Fff879443009722AA2B9C46E020aB6 creation_transaction_hash 0x0723e9498ec68dcd7e4723a066d72231d32faf510ced3b1a9101f05fa03a5313." }
  - { id: R-13, publisher: Blockscout, title: "Address 0xf0E17e54239CD945Cd7bEa471a3a2CA6a8C7f7A3", url: "https://robinhoodchain.blockscout.com/address/0xf0e17e54239cd945cd7bea471a3a2ca6a8c7f7a3", published_at: null, accessed_at: 2026-09-03T02:52:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-6, CLM-7, CLM-20, CLM-24, CLM-25, EVT-6], excerpt: "API v2: hash 0xf0E17e54239CD945Cd7bEa471a3a2CA6a8C7f7A3 name Lemon.fun is_contract true is_verified true creator_address_hash 0x2bA793Fd69Bf251Fd1Af90b576bE8B9fA6Be46DB creation_transaction_hash 0x48a82224ef11e3b49902c03f962bb64a74fd828b843774a18883c31e0759104d. token name Lemon.fun symbol LEMON decimals 18 total_supply 1000000000000000000000000000 holders_count 12457 type ERC-20." }
  - { id: R-14, publisher: Blockscout, title: "Address 0xEF2c099803Fff879443009722AA2B9C46E020aB6", url: "https://robinhoodchain.blockscout.com/address/0xef2c099803fff879443009722aa2b9c46e020ab6", published_at: null, accessed_at: 2026-09-03T02:52:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-15], excerpt: "API v2: hash 0xEF2c099803Fff879443009722AA2B9C46E020aB6 name null is_contract false is_verified false creator_address_hash null. RPC eth_getCode empty at this address." }
  - { id: R-15, publisher: Robinhood Chain RPC, title: "eth_getCode, owner, name, symbol, totalSupply", url: "https://rpc.mainnet.chain.robinhood.com", published_at: null, accessed_at: 2026-09-03T02:50:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-4, CLM-5, CLM-6, CLM-7, CLM-8, CLM-15], excerpt: "eth_chainId 0x1237. eth_blockNumber 0x329f257. eth_getCode factory 24263 bytes, locker 5416 bytes, token 5256 bytes, fee receiver 0x. owner() factory and locker 0xEF2c099803Fff879443009722AA2B9C46E020aB6. token name() Lemon, symbol() LEMON.FUN, totalSupply 1e27. token owner() reverted." }
  - { id: R-16, publisher: Blockscout, title: "Factory creation tx 0xecd99121…0126e", url: "https://robinhoodchain.blockscout.com/tx/0xecd9912180c8206fbc94b55cf951dddf7d7badc4336aedaa55a1c5bd3050126e", published_at: 2026-07-22T10:20:59Z, accessed_at: 2026-09-03T02:52:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-4, CLM-15, EVT-7], excerpt: "timestamp 2026-07-22T10:20:59.000000Z status ok result success from 0xEF2c099803Fff879443009722AA2B9C46E020aB6 to null block_number 16349056. Creates LemonLaunchFactory 0x2bA793Fd69Bf251Fd1Af90b576bE8B9fA6Be46DB." }
  - { id: R-17, publisher: Blockscout, title: "launchToken tx 0x48a82224…104d", url: "https://robinhoodchain.blockscout.com/tx/0x48a82224ef11e3b49902c03f962bb64a74fd828b843774a18883c31e0759104d", published_at: 2026-07-25T12:46:57Z, accessed_at: 2026-09-03T02:52:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-6, CLM-7, EVT-6], excerpt: "timestamp 2026-07-25T12:46:57.000000Z status ok result success from 0x2F75a321B571006ac11674aA7bBda890e16D6C25 to LemonLaunchFactory 0x2bA793Fd69Bf251Fd1Af90b576bE8B9fA6Be46DB method launchToken block_number 19020802. Same hash created UniswapV3Pool 0x01fe057d1C5FB09A4ac02860758DDf26Df9336B5 via factory 0x1f7d7550B1b028f7571E69A784071F0205FD2EfA." }
  - { id: R-18, publisher: DexScreener, title: "Robinhood pairs for 0xf0E1…f7A3", url: "https://api.dexscreener.com/token-pairs/v1/robinhood/0xf0e17e54239cd945cd7bea471a3a2ca6a8c7f7a3", published_at: null, accessed_at: 2026-09-03T02:50:00Z, kind: third-party-data, authority: primary, authenticity: confirmed, supports: [CLM-23, CLM-25], excerpt: "Primary pair chainId robinhood dexId uniswap pairAddress 0x01fe057d1C5FB09A4ac02860758DDf26Df9336B5 url https://dexscreener.com/robinhood/0x01fe057d1c5fb09a4ac02860758ddf26df9336b5. base Lemon.fun LEMON 0xf0E17e54239CD945Cd7bEa471a3a2CA6a8C7f7A3 quote WETH. liquidity.usd 131443.69 volume.h24 124714.09 fdv 735282 marketCap 735282." }
  - { id: R-19, publisher: lemon.fun, title: "Public API token 0xf0e1…f7a3", url: "https://lemon.fun/api/public/launchpad/token/0xf0e17e54239cd945cd7bea471a3a2ca6a8c7f7a3", published_at: null, accessed_at: 2026-09-03T02:50:00Z, kind: other, authority: primary, authenticity: confirmed, supports: [CLM-8, CLM-25], excerpt: "address 0xf0e17e54239cd945cd7bea471a3a2ca6a8c7f7a3 name Lemon symbol LEMON.FUN deployer 0x2f75a321b571006ac11674aa7bbda890e16d6c25 createdAt 2026-07-25T12:46:57.767397+00:00 graduated true poolAddress 0x01fe057d1c5fb09a4ac02860758ddf26df9336b5 chainId 4663 socials twitter https://x.com/lemondotfun telegram https://t.me/lemondotfun website https://lemon.fun lpLocked true source launchpad." }
  - { id: R-20, publisher: lemon.fun, title: "Public API launchpad stats", url: "https://lemon.fun/api/public/launchpad/stats", published_at: null, accessed_at: 2026-09-03T02:50:00Z, kind: other, authority: primary, authenticity: confirmed, supports: [], excerpt: "totalLaunched 56 totalGraduated 674. Homepage the same hour showed TOKENS LAUNCHED 682 and GRADUATED 78." }
  - { id: R-21, publisher: Blockscout, title: "Address 0xef0751875ba9aBEd1f5773aD3368EA0eb7A74Ba3", url: "https://robinhoodchain.blockscout.com/address/0xef0751875ba9abed1f5773ad3368ea0eb7a74ba3", published_at: null, accessed_at: 2026-09-03T02:52:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-20], excerpt: "hash 0xef0751875ba9aBEd1f5773aD3368EA0eb7A74Ba3 name Lemon Fun is_contract true is_verified true creator_address_hash 0x1B37D3a72082029c44B35B604Ea473617580b69a proxy eip1167 impl DopplerERC20V1 0x3Be8B97Fd0e713B5aBE0649Fa830223B6B4BC599. token name Lemon Fun symbol LEMON holders_count 2. Distinct from 0xf0E1…f7A3." }
  - { id: R-22, publisher: "@lemondotfun", title: "Lemon is officially listed by Gate Alpha", url: "https://x.com/lemondotfun/status/2085030223699996914", published_at: 2026-08-05T15:48:37Z, accessed_at: 2026-09-03T02:47:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [EVT-4], excerpt: "Lemon is officially listed by @Gate Alpha. https://www.gate.com/alpha/robinhood-0xf0e17e54239cd945cd7bea471a3a2ca6a8c7f7a3 CA - 0xf0e17e54239cd945cd7bea471a3a2ca6a8c7f7a3 The Multi-chain launchpad, cross-swaps, tokenized real world asset launches and much much more. http://Lemon.Fun" }

gaps:
  - { priority: P0, question: "What can owner 0xEF2c…0aB6 change on LemonLaunchFactory and LemonLaunchLocker (fee recipient, claim path, pause) and is there a timelock?", checked: "owner() via RPC at block 53059927; docs §7 say unowned and no upgrade proxy; verified source not read line by line, 2026-09-03", next: "read verified LemonLaunchFactory and LemonLaunchLocker source on Blockscout; eth_call feeRecipient/paused if present" }
  - { priority: P1, question: "Docs §2.1 say a fresh locker per launch and TokenLaunched(token, pool, locker, creator, tokenId); decoded factory logs are TokenLaunched(token, deployer, dexFactory, pairToken, pool, dexId, launchConfigId, positionId, …) with a single shared locker 0xC103…6903. Which ABI is live?", checked: "docs §2.1/§4/§6.2 vs Blockscout logs on LemonLaunchFactory, 2026-09-03", next: "read verified factory event definitions and one launchToken internal trace" }
  - { priority: P1, question: "Where is the StockDividendVault factory address, and has any Instant V3 launch on 4663 actually nominated a stock token?", checked: "docs §8 describes the vault factory as separate; §4 address table has no vault factory; API token 0xf0e1… has stockTokenAddress null, 2026-09-03", next: "search Blockscout for StockDividendVault created by 0xEF2c…0aB6; sample lemon.fun API tokens with stockSymbol set" }
  - { priority: P1, question: "Does the Hyperliquid BTC-perp UI at /leverage/BTC sign and settle, or is the book still POLLING with no live position?", checked: "page title, meta (executed on Hyperliquid, never custodied by lemon.fun), visible HYPERLIQUID POLLING, 2026-09-03", next: "connect a read-only flow or match a Hyperliquid account to a lemon.fun session; do not treat custody as verified from the meta line alone" }
  - { priority: P2, question: "Which launch count is live: homepage 682 launched / 78 graduated, or /api/public/launchpad/stats totalLaunched 56 / totalGraduated 674?", checked: "both endpoints opened the same hour, 2026-09-03", next: "GET /api/public/launchpad/tokens?limit=1 and count TokenLaunched logs on 0x2bA7…46DB" }
  - { priority: P2, question: "Where is the public repository named in docs §9?", checked: "lemon.fun, /docs, /launch, /leverage/BTC, @lemondotfun bio, GitHub search LemonLaunchFactory, 2026-09-03", next: "search Blockscout verified source file paths for a github.com origin" }
  - { priority: P2, question: "Is there an audit whose scope matches LemonLaunchFactory 0x2bA7…46DB bytecode?", checked: "docs §7 security posture, site, X account, GitHub search, 2026-09-03", next: "ask the project in public for a report URL and match bytecode" }
---

# Lemon — research packet

## What it is

A Uniswap V3 Instant launchpad on Robinhood Chain. A creator sends one transaction through LemonLaunchFactory: the factory deploys a 1-billion fixed-supply ERC-20, seeds a TOKEN/WETH 1% full-range pool, and locks the LP NFT in LemonLaunchLocker. Fees split 30/70 platform/creator. Users launch and trade at lemon.fun, operated as @lemondotfun. Optional stock-dividend vaults and per-coin X agents are claimed on the same site.

Themes: launchpad, memecoin, rwa, agent

## Why it matters

Census still lists Lemon as announced with no address. LemonLaunchFactory, LemonLaunchLocker and $LEMON.FUN are live and source-verified on chain 4663, with a Uniswap V3 LEMON/WETH pool. The same frontend also wraps Hyperliquid BTC perps and can attach X agents to coins from other pads, including Pons.

## What could go wrong

Docs say Instant V3 contracts are unowned; `owner()` on the factory and locker returns the fee-receiver EOA 0xEF2c…0aB6, so fee and admin paths sit with one key until the verified source is read. Stock-dividend vaults and Hyperliquid key custody are documented in copy, not reproduced as a vault factory or a Hyperliquid account this pass. Homepage launch counts do not match the public stats API.

## Product and mechanics

Instant V3 is the live launch path: one `launchToken` transaction deploys a 1 billion fixed-supply ERC-20, creates a Uniswap V3 TOKEN/WETH 1% pool, seeds a full-range LP NFT, and sends that NFT to LemonLaunchLocker. Docs say there is no bonding phase and no migration on this path. [claim R-1 R-3] [verified R-17]

Pool swap fees are documented as 30% platform / 70% creator, claimable through `LemonLaunchLocker.claim()`. LP principal has no withdraw function in the docs. [claim R-1 R-3]

A tokenized-stock option nominates a Robinhood stock token; a per-token StockDividendVault is documented as converting fee revenue every 30 minutes and paying 75% of converted stock to holders. The vault factory address is not in the §4 table. [claim R-1]

Per-coin X agents are a 22–26 Aug product post: a dedicated X account posts market cap, volume, holder concentration and locked LP, and cannot move funds. Coins launched on Pons or other pads can be linked with a MOVED tag. [claim R-7 R-8]

`/leverage/BTC` is a BTC-perp terminal. Page meta says trades are signed by the user's wallet on Hyperliquid and never custodied by lemon.fun. The visible chain plate is Hyperliquid on Arbitrum One. [claim R-10]

## Control and security

LemonLaunchFactory and LemonLaunchLocker were created by EOA 0xEF2c…0aB6 on 2026-07-22. `owner()` on both returns that EOA. Docs §7 say the contracts are unowned and that no upgrade proxy is used. Those two owner statements are open as CON-1. [verified R-11 R-12 R-15 R-16] [claim R-1]

The same EOA is documented as the platform fee receiver. It has no code. [verified R-14 R-15]

No audit report was located on the docs, site, X account or a GitHub search this pass. [unknown]

## Team and provenance

lemon.fun footer links @lemondotfun and t.me/lemondotfun. `/leverage/BTC` sets twitter:site to @lemondotfun. The handle's bio is the launch/trade line on @Robinhoodcrypto; profile scrapes list website lemon.fun. Docs name no team entity. [verified R-2 R-4 R-10]

Docs §9 refer to a public repository. No GitHub URL was located this pass. [unknown]

A Bankr-launched token named Lemon Fun at 0xef07…4Ba3 is a DopplerERC20V1 clone with two holders. Official $LEMON.FUN is 0xf0E1…f7A3 from LemonLaunchFactory. Do not merge. [verified R-13 R-21]

## Economics and activity

DexScreener LEMON/WETH pair 0x01fe…36B5 on Robinhood: 24h volume 124714 USD, marketCap 735282 USD, liquidity 131443 USD as of 2026-09-03. That is the official-token pair, not an all-chains launchpad total. [claim R-18]

Blockscout holders_count on 0xf0E1…f7A3 is 12457. [claim R-13]

Homepage showed 682 tokens launched and 24h volume $134.4K across four chains; `/api/public/launchpad/stats` returned totalLaunched 56 and totalGraduated 674 the same hour. Those two counters are not used as metrics. [claim R-2] [claim R-20]

## Material risks

- Factory and locker `owner()` is one EOA, against docs "unowned". [verified R-15] [claim R-1]
- Stock-dividend vault factory address was not located. [claim R-1]
- Hyperliquid perps are a frontend claim; custody was not reproduced on Hyperliquid. [claim R-10]
- No audit report was located this pass. [unknown]
- Homepage vs stats API launch counts disagree. [claim R-2 R-20]

## Verification passes

- Receipts: lemon.fun, /docs, /launch, /leverage/BTC, the public token and stats APIs, @lemondotfun profile and six posts, DexScreener pairs, Blockscout factory/locker/token/pool/fee-receiver/create txs, and RPC were opened on 2026-09-03 and excerpts copied from the responses. [verified R-1 R-11 R-15]
- Numbers: 124714 and 735282 are the DexScreener LEMON/WETH chain pair, not an all-chains launchpad total. Holders 12457 is the Blockscout token counter. Homepage 682 / $134.4K and stats API 56 / 674 are not mixed into one figure. [claim R-13 R-18 R-20]
- Adversarial: the strongest contrary reading is that Lemon is only a frontend over Uniswap V3 and Hyperliquid, with no native factory. Verified name LemonLaunchFactory, TokenLaunched logs, and the 2026-07-25 launchToken tx that created 0xf0E1…f7A3 argue the Instant V3 path is native. A second contrary reading is that 0xef07…4Ba3 is the official coin; creator DopplerERC20V1Factory and two holders argue against it. [inference R-11 R-13 R-17 R-21]

## Operations log

- Base: `git rev-parse origin/main` → 334ca0619aa62e922da83f46de021f06d12348cf. Read content/census.yaml lemon row, content/projects/lemon.yaml, content/feed/lemon.yaml, content/sources/lemon.yaml, content/research/lemon.md, content/changelog/lemon.yaml, content/accounts.yaml @lemondotfun, research/inbox/2026-08-31-x-fill-3.md, x-fill-6.md, x-fill-10.md, 2026-08-31-ecosystem-map.yaml. No content/pulled/lemon.yaml.
- Opened lemon.fun, /docs, /launch, /leverage (307 → /leverage/BTC), /api/public/launchpad/stats, /api/public/launchpad/token/0xf0e1…f7a3.
- RPC eth_chainId, eth_blockNumber, eth_getCode, owner(), name(), symbol(), totalSupply() on factory, locker, token, fee receiver.
- Blockscout API v2 addresses and creation txs for factory, locker, token, fee receiver, pool, Bankr Lemon Fun 0xef07…4Ba3.
- DexScreener token-pairs v1 robinhood/0xf0e1…f7a3. DefiLlama protocols search returned LemonSwap/LemonX/LeMONAD/LemonBlast, none on Robinhood Chain.
- X keyword and thread fetch for @lemondotfun posts 2078567080824058087, 2081002503521337823, 2085030223699996914, 2091202995715236236, 2092429333591707920, 2094161754964267055.
- GitHub search LemonLaunchFactory / lemon.fun: no official repo URL. t.me/lemondotfun linked from the site footer, profile not line-read.
- Time spent: ~30 minutes collecting, then write.
