---
# Packet v2 (docs/research-system.md §5). Seed with full-shaped frontmatter.
contract_version: proofline-research-v2
work_id: WORK-20260903-grok-heavy-icarus-research
producer: grok-heavy
role: collector
base_sha: 334ca0619aa62e922da83f46de021f06d12348cf
slug: bankr
name: Bankr
packet_tier: seed
as_of: 2026-09-02T23:55:00Z
prior_packet: null
supersedes: null
owned_slugs: [bankr]
allowed_paths:
  - research/inbox/packets/bankr/WORK-20260903-grok-heavy-icarus-research.md

identity:
  canonical_name: Bankr
  aliases: [bankr.bot, Bankrbot]
  symbols: [BNKR]
  entity_kind: application
  chain_scope: multichain
  official_domain: https://bankr.bot
  official_handle: "@bankrbot"
  repository: https://github.com/BankrBot
  possible_matches:
    - slug: long
      signals: [shared-address]
      contrary_signals:
        - "LONG is app.long.xyz / @longdotxyz, a stock-paired factory product"
        - "Bankr is bankr.bot / @bankrbot, an agent runtime that launches through the same DopplerERC20V1Factory 0x1B37…b69a and Airlock 0xeb7C…0862"
    - slug: wire
      signals: [other]
      contrary_signals:
        - "Wire is @wirebotRH and routes launches through Pons"
        - "Bankr is @bankrbot and mints EIP-1167 DopplerERC20V1 clones via Airlock create()"
    - slug: earn-protocol
      signals: [shared-address]
      contrary_signals:
        - "EARN is a savings-vault token at earnonhood.com; Bankr is the agent that can launch tokens on the shared Doppler/Airlock stack"
    - slug: artificial-inu
      signals: [shared-address]
      contrary_signals:
        - "$AI is a LONG-launched stock-paired token; Bankr is the agent execution surface, not the $AI CA"
    - slug: statics-protocol
      signals: [shared-address]
      contrary_signals:
        - "Statics is @StaticsProtocol; both tokens can have Airlock as owner() because Doppler is shared launch infrastructure"
    - slug: agent-name-service
      signals: [other]
      contrary_signals:
        - "Agent Name Service is @RHAgentNS, a claimed name registrar; Bankr is @bankrbot"

classification:
  primary_leaf: agents/agent-execution
  secondary_leaves: [launch/stock-paired-factory]
  mechanism_tags: [agent, execution, launchpad, stock-paired, rwa, fee-routing]
  ecosystem_role: subject
  lifecycle: mainnet
  coverage_recommendation: full
  evidence_state: partly-verified
  rationale: "Docs and @bankrbot describe X/console launches into Doppler Uniswap v4 pools with a 0.665% creator fee. DopplerERC20V1Factory, DopplerERC20V1, Airlock, TAYSOM and $GOON have non-empty code on 4663; Blockscout names the factory and marks the tokens EIP-1167 clones. Tokens Bankr launches are graduations. Shared factory with LONG. Distinct from $GOONER. [R-1] [R-2] [R-6] [R-7] [R-8] [R-11]"

qualifying:
  deployed_on_chain: { status: pass, claim_ids: [CLM-4, CLM-5, CLM-6, CLM-7, CLM-22], note: "" }
  native_play:       { status: pass, claim_ids: [CLM-1, CLM-10, CLM-21], note: "" }
  citable:           { status: pass, claim_ids: [CLM-2, CLM-3, CLM-9], note: "" }
  research_story:    { status: pass, claim_ids: [CLM-1, CLM-13, CLM-14, CLM-18], note: "" }

links:
  - { kind: site, url: "https://bankr.bot", authenticity: confirmed }
  - { kind: app, url: "https://bankr.bot/terminal", authenticity: confirmed }
  - { kind: docs, url: "https://docs.bankr.bot", authenticity: confirmed }
  - { kind: x, url: "https://x.com/bankrbot", authenticity: confirmed }
  - { kind: github, url: "https://github.com/BankrBot", authenticity: confirmed }
  - { kind: telegram, url: "https://t.me/bankr_ai_bot", authenticity: unconfirmed }

deployments:
  - label: DopplerERC20V1Factory (shared with LONG)
    role: factory
    address:
      value: "0x1B37D3a72082029c44B35B604Ea473617580b69a"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-02
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-6, R-16]
  - label: DopplerERC20V1 implementation
    role: implementation
    address:
      value: "0x3Be8B97Fd0e713B5aBE0649Fa830223B6B4BC599"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-02
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-7, R-16]
  - label: Airlock (token owner)
    role: other
    address:
      value: "0xeb7c034704ef8dcd2d32324c1545f62fb4ad0862"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-02
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-8, R-16]
  - label: TAYSOM (Bankr stock-paired graduation, quote TSM)
    role: token
    address:
      value: "0x9965de8400b382164e4dbF6dc0E5035cfFE28ba3"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-02
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-9, R-10, R-16, R-18]
  - label: ROBINHOOD GOON (Bankr graduation; not GOONER)
    role: token
    address:
      value: "0x4D4aD0e4dfACB73C6cf85F81acbD09a40Fd95bA3"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-02
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-11, R-12, R-16]

metrics:
  - { kind: volume_24h, value: 2000000, currency: USD, as_of: 2026-09-01, window: 24h, method: "@RHDaily__ Top Robinhood Chain Launchpads by 24H Volume, Bankr row $2.0M", class: claim, receipt_ids: [R-14] }

reproductions:
  - { id: REP-1, method: explorer-rpc, chain_id: 4663, checked_at: 2026-09-02T23:45:00Z, receipt_ids: [R-16], result: "eth_blockNumber 0x328b534 (52999476). eth_getCode: TAYSOM/SBC/CQ/GOON/RM 44-byte EIP-1167 clones of 0x3be8b97f…c599; impl 13927 bytes; factory 1912 bytes; Airlock 5695 bytes; GOONER 5959 bytes not a clone. name()/symbol() TAYSOM/TAYSOM, StateBankCorp/SBC, Clover Q/CQ, ROBINHOOD GOON/GOON, Purgy Pengoon/GOONER. owner() on TAYSOM/SBC/CQ/GOON = Airlock 0xeb7c…0862; Airlock owner() = 0x21e2ce70…7a66. decimals 18; totalSupply 1e29 (100 billion e18) on TAYSOM and GOON." }
  - { id: REP-2, method: explorer-ui, chain_id: 4663, checked_at: 2026-09-02T23:45:15Z, receipt_ids: [R-6, R-7, R-8, R-9, R-10, R-11, R-12, R-13, R-19], result: "Blockscout API v2: factory name DopplerERC20V1Factory is_verified true partially verified src/tokens/DopplerERC20V1Factory.sol; impl DopplerERC20V1; TAYSOM/GOON/SBC/CQ/GSPACE proxy_type eip1167 implementation DopplerERC20V1 creator 0x1B37…b69a; TAYSOM created 2026-08-31T04:24:29Z tx 0x4d13665f… via EntryPoint.handleOps; GOON created 2026-07-09T06:30:06Z Airlock create(); GOONER creator LaunchFactory 0x7186…FC63 method launchAndBuyWithEth 2026-08-30T11:53:35Z; RM tx 2026-09-02T23:24:21Z to Airlock create()." }
  - { id: REP-3, method: official-crosslink, checked_at: 2026-09-02T23:46:00Z, receipt_ids: [R-1, R-2, R-3, R-4, R-5], result: "@bankrbot bio website is bankr.bot; GitHub org BankrBot blog is https://bankr.bot; docs.bankr.bot names X as @bankrbot and the web terminal as bankr.bot" }
  - { id: REP-4, method: api, checked_at: 2026-09-02T23:44:00Z, receipt_ids: [R-17], result: "GET api.bankr.bot/token-launches returned 50 rows, 24 with chain robinhood and launchType doppler, including RobinMint 0x1c711c4f…ba3 tx 0x1fe8405d… and GSPACE 0xa3ee0275…ba3 tx 0x9ae57739…" }
  - { id: REP-5, method: api, checked_at: 2026-09-02T23:50:00Z, receipt_ids: [R-18, R-20], result: "GeckoTerminal pool 0xfb84a012…a15c name TAYSOM / TSM, dex bankr-robinhood, quote 0x58ffe4a9…e7aa Taiwan Semiconductor Manufacturing • Robinhood Token. Token GOONER 0x51e7…11f2 is Purgy Pengoon, not the GOON CA." }

claims:
  - { id: CLM-1, field: product.mechanism, value: "Natural-language or @bankrbot mention deploys a token on Robinhood Chain (chat/API default) or Base into a Uniswap v4 pool via Doppler. 0.7% pool swap fee with 95% (0.665% of volume) to the creator; hook adds Bankr protocol, BNKR buyback and LP legs (docs: 1.75% all-in).", class: claim, observed_at: 2026-09-02T23:42:00Z, receipt_ids: [R-1, R-2], reproduction_ids: [], supersedes: null }
  - { id: CLM-2, field: identity.domain, value: "https://bankr.bot", class: verified, observed_at: 2026-09-02T23:46:00Z, receipt_ids: [R-3, R-4, R-5], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-3, field: identity.handle, value: "@bankrbot", class: verified, observed_at: 2026-09-02T23:46:00Z, receipt_ids: [R-3, R-4, R-5], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-4, field: deployment.address, value: "0x1B37D3a72082029c44B35B604Ea473617580b69a", class: verified, observed_at: 2026-09-02T23:45:15Z, receipt_ids: [R-6, R-16], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-5, field: deployment.address, value: "0x3Be8B97Fd0e713B5aBE0649Fa830223B6B4BC599", class: verified, observed_at: 2026-09-02T23:45:15Z, receipt_ids: [R-7, R-16], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-6, field: deployment.address, value: "0xeb7c034704ef8dcd2d32324c1545f62fb4ad0862", class: verified, observed_at: 2026-09-02T23:45:15Z, receipt_ids: [R-8, R-16], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-7, field: deployment.address, value: "0x9965de8400b382164e4dbF6dc0E5035cfFE28ba3", class: verified, observed_at: 2026-09-02T23:45:15Z, receipt_ids: [R-9, R-10, R-16], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-8, field: lifecycle, value: mainnet, class: verified, observed_at: 2026-09-02T23:45:15Z, receipt_ids: [R-6, R-9, R-16], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-9, field: identity.repository, value: "https://github.com/BankrBot", class: verified, observed_at: 2026-09-02T23:46:00Z, receipt_ids: [R-5], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-10, field: product.mechanism, value: "Stock-paired mode quotes the Uniswap v4 pool in a Robinhood Stock Token instead of WETH; @bankrbot posted 90+ tickers on 2026-07-20. TAYSOM's GeckoTerminal pool is TAYSOM/TSM on dex bankr-robinhood.", class: claim, observed_at: 2026-09-02T23:50:00Z, receipt_ids: [R-15, R-18], reproduction_ids: [REP-5], supersedes: null }
  - { id: CLM-11, field: taxonomy.primary-leaf, value: agents/agent-execution, class: claim, observed_at: 2026-09-02T23:42:00Z, receipt_ids: [R-1, R-3], reproduction_ids: [], supersedes: null }
  - { id: CLM-12, field: taxonomy.secondary-leaf, value: launch/stock-paired-factory, class: claim, observed_at: 2026-09-02T23:42:00Z, receipt_ids: [R-1, R-15], reproduction_ids: [], supersedes: null }
  - { id: CLM-13, field: relationship, value: "Bankr Robinhood launches are EIP-1167 clones created by DopplerERC20V1Factory 0x1B37…b69a with owner() Airlock 0xeb7C…0862, the same factory/Airlock that created EARN/$AI-class Doppler tokens used by LONG.", class: verified, observed_at: 2026-09-02T23:45:15Z, receipt_ids: [R-6, R-9, R-11], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-14, field: relationship, value: "ROBINHOOD GOON 0x4D4a…Ba3 is a Bankr/Doppler clone. Purgy Pengoon $GOONER 0x51E7…11F2 is a different contract created by LaunchFactory 0x7186…FC63 via launchAndBuyWithEth; DexScreener quotes GOONER/PENGU. Ticker-only collision. Flag ca-collision.", class: verified, observed_at: 2026-09-02T23:45:15Z, receipt_ids: [R-11, R-12, R-13, R-20], reproduction_ids: [REP-1, REP-2, REP-5], supersedes: null }
  - { id: CLM-15, field: "account.@bankrbot.role", value: project, class: claim, observed_at: 2026-09-02T23:46:00Z, receipt_ids: [R-3, R-4], reproduction_ids: [], supersedes: null }
  - { id: CLM-16, field: "account.@bankrbot.slug", value: bankr, class: claim, observed_at: 2026-09-02T23:46:00Z, receipt_ids: [R-3, R-4], reproduction_ids: [], supersedes: null }
  - { id: CLM-17, field: economics.metric, value: "@RHDaily__ 2026-09-01T22:00:00Z: Bankr 24h launchpad volume $2.0M, rank 8 of 10 (Pons $315.9M, LONG $47.5M).", class: claim, observed_at: 2026-09-02T23:48:00Z, receipt_ids: [R-14], reproduction_ids: [], supersedes: null }
  - { id: CLM-18, field: control.owner, value: "TAYSOM/SBC/CQ/GOON owner() = Airlock 0xeb7c034704ef8dcd2d32324c1545f62fb4ad0862; Airlock owner() = 0x21E2ce70511e4FE542a97708e89520471DAa7A66", class: verified, observed_at: 2026-09-02T23:45:00Z, receipt_ids: [R-16, R-8], reproduction_ids: [REP-1], supersedes: null }
  - { id: CLM-19, field: security.audit, value: "No audit report matching DopplerERC20V1 / the Robinhood factory was located in docs, GitHub org README pages or X this pass; docs nav includes a Bug Bounty item that was not opened line by line", class: unknown, observed_at: 2026-09-02T23:46:00Z, receipt_ids: [], reproduction_ids: [], supersedes: null }
  - { id: CLM-20, field: taxonomy.chain-scope, value: multichain, class: claim, observed_at: 2026-09-02T23:42:00Z, receipt_ids: [R-1], reproduction_ids: [], supersedes: null }
  - { id: CLM-21, field: product.mechanism, value: "Standard supply 100 billion; docs allocate 85% to the pool and 15% vesting to the fee recipient over 1 year with a 30-day cliff, recipient locked at launch. The 2026-07-06 launch post cited a 2-year vest / 90-day cliff; docs say schedules are fixed per launch.", class: claim, observed_at: 2026-09-02T23:42:00Z, receipt_ids: [R-1, R-2], reproduction_ids: [], supersedes: null }
  - { id: CLM-22, field: deployment.address, value: "0x4D4aD0e4dfACB73C6cf85F81acbD09a40Fd95bA3", class: verified, observed_at: 2026-09-02T23:45:15Z, receipt_ids: [R-11, R-12, R-16], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-23, field: relationship, value: "Wire executes user commands against existing pads (Pons). Bankr mints on Doppler/Airlock. Do not merge the two agent-execution rows.", class: claim, observed_at: 2026-09-02T23:42:00Z, receipt_ids: [R-1, R-17], reproduction_ids: [], supersedes: null }
  - { id: CLM-24, field: identity.symbol, value: "BNKR", class: claim, observed_at: 2026-09-02T23:44:00Z, receipt_ids: [R-21], reproduction_ids: [], supersedes: null }
  - { id: CLM-25, field: "account.@bankrbot.note", value: "Handle links bankr.bot. Tokens it launches (TAYSOM, GOON, GSPACE, RM) are graduations. $GOON is not $GOONER.", class: claim, observed_at: 2026-09-02T23:46:00Z, receipt_ids: [R-3, R-11, R-13], reproduction_ids: [], supersedes: null }
  - { id: CLM-26, field: activity.status, value: "api.bankr.bot/token-launches listed 24 robinhood Doppler rows in the latest 50, including RM 0x1c71…ba3 and GSPACE 0xa3ee…ba3 on 2026-09-02", class: verified, observed_at: 2026-09-02T23:44:00Z, receipt_ids: [R-17, R-8], reproduction_ids: [REP-4, REP-2], supersedes: null }

conflicts: []

events:
  - id: EVT-1
    type: onchain
    title: "Airlock create() deploys RobinMint on Robinhood Chain"
    summary: "Bankr API listed RobinMint as a Doppler robinhood launch; Blockscout shows Airlock create() at 2026-09-02T23:24:21Z."
    occurred_at: 2026-09-02T23:24:21Z
    observed_at: 2026-09-02T23:45:15Z
    affected_fields: [deployment.address, activity.status, lifecycle]
    evidence_state: verified
    impact: routine
    site_recommendation: feed
    channel_recommendation: none
    receipt_ids: [R-8, R-17]
  - id: EVT-2
    type: company
    title: "@bankrbot posts a 20,000 TEST claim on chain 4663"
    summary: "@bankrbot posted that wallet 0x27fb…ec45 claimed 20,000 TEST on Robinhood Chain in tx 0xf1e5c5c8…"
    occurred_at: 2026-09-02T06:49:59Z
    observed_at: 2026-09-02T23:48:00Z
    affected_fields: [activity.status]
    evidence_state: claim
    impact: routine
    site_recommendation: feed
    channel_recommendation: none
    receipt_ids: [R-22]
  - id: EVT-3
    type: ct
    title: "RH Daily lists Bankr at $2.0M 24h pad volume"
    summary: "@RHDaily__ ranked @bankrbot eighth among Robinhood Chain launchpads at $2.0M 24h volume on 1 Sep."
    occurred_at: 2026-09-01T22:00:00Z
    observed_at: 2026-09-02T23:48:00Z
    affected_fields: [economics.metric, activity.status]
    evidence_state: claim
    impact: material
    site_recommendation: both
    channel_recommendation: none
    receipt_ids: [R-14]
  - id: EVT-4
    type: onchain
    title: "Doppler factory creates TAYSOM, quoted vs TSM"
    summary: "TAYSOM 0x9965…Ba3 is an EIP-1167 Doppler clone created 2026-08-31; GeckoTerminal names the pool TAYSOM/TSM."
    occurred_at: 2026-08-31T04:24:29Z
    observed_at: 2026-09-02T23:45:15Z
    affected_fields: [deployment.address, product.mechanism]
    evidence_state: verified
    impact: material
    site_recommendation: profile
    channel_recommendation: none
    receipt_ids: [R-9, R-10, R-18]
  - id: EVT-5
    type: onchain
    title: "Bankr $GOON clone is a different CA from $GOONER"
    summary: "$GOON 0x4D4a…Ba3 is a Doppler clone (2026-07-09); $GOONER 0x51E7…11F2 was created by LaunchFactory 0x7186…FC63."
    occurred_at: 2026-08-30T11:53:35Z
    observed_at: 2026-09-02T23:45:15Z
    affected_fields: [identity.symbol, relationship]
    evidence_state: verified
    impact: material
    site_recommendation: profile
    channel_recommendation: none
    receipt_ids: [R-11, R-12, R-13, R-20]
  - id: EVT-6
    type: company
    title: "@bankrbot posts stock-paired launches on Robinhood Chain"
    summary: "@bankrbot posted that Bankr launches can quote the pool in tokenized stocks instead of ETH, with 90+ tickers."
    occurred_at: 2026-07-20T04:15:59Z
    observed_at: 2026-09-02T23:48:00Z
    affected_fields: [product.mechanism, taxonomy.secondary-leaf]
    evidence_state: claim
    impact: material
    site_recommendation: both
    channel_recommendation: none
    receipt_ids: [R-15]
  - id: EVT-7
    type: company
    title: "@bankrbot posts token launches live on Robinhood Chain"
    summary: "@bankrbot posted that a mention or console launch deploys with locked liquidity and a 15% vested allocation."
    occurred_at: 2026-07-06T23:50:10Z
    observed_at: 2026-09-02T23:40:00Z
    affected_fields: [product.mechanism, lifecycle]
    evidence_state: claim
    impact: material
    site_recommendation: profile
    channel_recommendation: none
    receipt_ids: [R-2]

receipts:
  - { id: R-1, publisher: Bankr, title: "Token Launching Overview", url: "https://docs.bankr.bot/token-launching/overview", published_at: null, accessed_at: 2026-09-02T23:42:00Z, kind: docs, authority: primary, authenticity: confirmed, supports: [CLM-1, CLM-10, CLM-11, CLM-12, CLM-20, CLM-21, CLM-23], excerpt: "Tokens deploy to Robinhood Chain by default — say on base to deploy on Base instead. Chat, social and API deploys default to Robinhood Chain. Creator (you) — 95% of the 0.7% pool swap fee; paid directly, claim anytime 0.665%. Standard launches use 100 billion tokens, 85% liquidity pool, 15% creator vesting over 1 year (30-day cliff)." }
  - { id: R-2, publisher: "@bankrbot", title: "TOKEN LAUNCHES ON ROBINHOOD CHAIN ARE NOW LIVE ON BANKR", url: "https://x.com/bankrbot/status/2074279771908035073", published_at: 2026-07-06T23:50:10Z, accessed_at: 2026-09-02T23:40:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [CLM-1, CLM-21, EVT-7], excerpt: "TOKEN LAUNCHES ON ROBINHOOD CHAIN ARE NOW LIVE ON BANKR. tweet \"@bankrbot launch $TICKER on robinhood chain\", or launch straight from the bankr console. live in seconds. locked liquidity, creators earn 95% of trading fees, and 15% of supply vests to the fee recipient over 2 years (90-day cliff)." }
  - { id: R-3, publisher: "@bankrbot", title: "Bankr profile", url: "https://x.com/bankrbot", published_at: null, accessed_at: 2026-09-02T23:41:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [CLM-2, CLM-3, CLM-15, CLM-16, CLM-25], excerpt: "Display name bankrbot, handle @bankrbot. Bio: Building financial infra for agents to fund themselves. Launch a token, trading fees pay for API costs. Wallets, tools, treasury automation. Website https://bankr.bot." }
  - { id: R-4, publisher: Bankr, title: "Bankr — Your Friendly AI-Powered Crypto Banker", url: "https://bankr.bot", published_at: null, accessed_at: 2026-09-02T23:43:00Z, kind: official-site, authority: primary, authenticity: confirmed, supports: [CLM-2, CLM-3, CLM-15], excerpt: "title Bankr. og:url https://www.bankr.bot/. og:title Bankr - Your Friendly AI-Powered Crypto Banker. og:description Bankr is an AI agent that can buy, sell, swap coins and place limit orders." }
  - { id: R-5, publisher: GitHub, title: "BankrBot organization", url: "https://github.com/BankrBot", published_at: null, accessed_at: 2026-09-02T23:43:00Z, kind: repository, authority: primary, authenticity: confirmed, supports: [CLM-2, CLM-3, CLM-9], excerpt: "API: login BankrBot, name Bankr, blog https://bankr.bot, description github repo for bankr, the ai agent., type Organization, html_url https://github.com/BankrBot." }
  - { id: R-6, publisher: Blockscout, title: "DopplerERC20V1Factory 0x1B37…b69a", url: "https://robinhoodchain.blockscout.com/address/0x1B37D3a72082029c44B35B604Ea473617580b69a", published_at: null, accessed_at: 2026-09-02T23:45:15Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-4, CLM-8, CLM-13], excerpt: "hash 0x1B37D3a72082029c44B35B604Ea473617580b69a name DopplerERC20V1Factory is_contract true is_verified true creator 0x4482f353A46a4d4088F9550EB2C9cc92D0d5F768. Smart-contract: compiler v0.8.26+commit.8a97fa7a is_partially_verified true file_path src/tokens/DopplerERC20V1Factory.sol." }
  - { id: R-7, publisher: Blockscout, title: "DopplerERC20V1 0x3Be8…C599", url: "https://robinhoodchain.blockscout.com/address/0x3Be8B97Fd0e713B5aBE0649Fa830223B6B4BC599", published_at: null, accessed_at: 2026-09-02T23:45:15Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-5, CLM-13], excerpt: "hash 0x3Be8B97Fd0e713B5aBE0649Fa830223B6B4BC599 name DopplerERC20V1 is_contract true is_verified true creator_address_hash 0x1B37D3a72082029c44B35B604Ea473617580b69a creation_transaction_hash 0xb53eb8261ef8e76f3bb89c08dd5ca742408ec9911ed5cb0a32ac3a92dc59f7c9." }
  - { id: R-8, publisher: Blockscout, title: "RobinMint create tx 0x1fe8405d…", url: "https://robinhoodchain.blockscout.com/tx/0x1fe8405d3cf0dc0d71eb21c49d78794d97e47298113e0b73ccedd841fad7d2a6", published_at: 2026-09-02T23:24:21Z, accessed_at: 2026-09-02T23:45:15Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-6, CLM-26, EVT-1], excerpt: "timestamp 2026-09-02T23:24:21.000000Z status ok result success method create from 0x2D077AEA323710dF7c0851b96d116910c909Fc90 to Airlock 0xeb7C034704eF8Dcd2D32324c1545f62fB4aD0862 is_verified true." }
  - { id: R-9, publisher: Blockscout, title: "Address 0x9965…Ba3 TAYSOM", url: "https://robinhoodchain.blockscout.com/address/0x9965de8400b382164e4dbF6dc0E5035cfFE28ba3", published_at: null, accessed_at: 2026-09-02T23:45:15Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-7, CLM-8, CLM-13, EVT-4], excerpt: "hash 0x9965de8400b382164e4dbF6dc0E5035cfFE28ba3 name TAYSOM is_contract true is_verified true proxy_type eip1167 implementation DopplerERC20V1 0x3Be8B97Fd0e713B5aBE0649Fa830223B6B4BC599 creator 0x1B37D3a72082029c44B35B604Ea473617580b69a. Token TAYSOM / TAYSOM holders_count 2 total_supply 1e29 decimals 18." }
  - { id: R-10, publisher: Blockscout, title: "TAYSOM creation tx 0x4d13665f…", url: "https://robinhoodchain.blockscout.com/tx/0x4d13665fbba086104a89547e95c6cbfd456209a1e1a1a08bba489fc1f3b1e66f", published_at: 2026-08-31T04:24:29Z, accessed_at: 2026-09-02T23:45:15Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-7, EVT-4], excerpt: "timestamp 2026-08-31T04:24:29.000000Z status ok result success method handleOps from 0xDd509c9F91F66A18802Ef5b3d54c73B62EA1Ca08 to EntryPoint 0x0000000071727De22E5E9d8BAf0edAc6f37da032." }
  - { id: R-11, publisher: Blockscout, title: "Address 0x4D4a…Ba3 ROBINHOOD GOON", url: "https://robinhoodchain.blockscout.com/address/0x4D4aD0e4dfACB73C6cf85F81acbD09a40Fd95bA3", published_at: null, accessed_at: 2026-09-02T23:45:15Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-14, CLM-22, CLM-25, EVT-5], excerpt: "hash 0x4D4aD0e4dfACB73C6cf85F81acbD09a40Fd95bA3 name ROBINHOOD GOON is_contract true is_verified true proxy_type eip1167 implementation DopplerERC20V1 creator 0x1B37D3a72082029c44B35B604Ea473617580b69a. Token GOON holders_count 2 total_supply 1e29 decimals 18." }
  - { id: R-12, publisher: Blockscout, title: "GOON creation tx 0x5516be28…", url: "https://robinhoodchain.blockscout.com/tx/0x5516be2840e338ff393bab910efb7b41c9aa63ea1c045539ef509c136502eb5f", published_at: 2026-07-09T06:30:06Z, accessed_at: 2026-09-02T23:45:15Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-14, CLM-22, EVT-5], excerpt: "timestamp 2026-07-09T06:30:06.000000Z status ok result success method create from 0x7AAbDF27690ccd75E2e1Ea7b6ce10760e6dfB506 to Airlock 0xeb7C034704eF8Dcd2D32324c1545f62fB4aD0862 block_number 5003250." }
  - { id: R-13, publisher: Blockscout, title: "GOONER 0x51E7…11F2 and launch tx", url: "https://robinhoodchain.blockscout.com/address/0x51e7bf39c6cf1a7f53ddfaa5db346c69994511f2", published_at: null, accessed_at: 2026-09-02T23:45:15Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-14, CLM-25, EVT-5], excerpt: "hash 0x51E7bf39c6Cf1A7F53DdfaA5dB346c69994511F2 name LaunchToken is_contract true is_verified true creator 0x718633252AA8329495Df8BBa8fF7c9e8378CFC63 proxy_type null. Token Purgy Pengoon / GOONER holders_count 2097. Tx 0x652977d5… timestamp 2026-08-30T11:53:35Z method launchAndBuyWithEth to LaunchFactory 0x7186…FC63." }
  - { id: R-14, publisher: "@RHDaily__", title: "Top Robinhood Chain Launchpads by 24H Volume", url: "https://x.com/RHDaily__/status/2094908154672734344", published_at: 2026-09-01T22:00:00Z, accessed_at: 2026-09-02T23:48:00Z, kind: social, authority: social, authenticity: confirmed, supports: [CLM-17, EVT-3], excerpt: "Top Robinhood Chain Launchpads by 24H Volume 1. @ponsdotfamily $315.9M 2. @longdotxyz $47.5M 3. @o1_exchange $23.7M 4. @Noxa_Fi $21.3M 5. @TradePools $16.4M 6. @lunchdotfun $2.8M 7. @dopplerprotocol $2.2M 8. @bankrbot $2.0M 9. @letscashfun $2.0M 10. @flapdotsh $1.9M" }
  - { id: R-15, publisher: "@bankrbot", title: "STOCK PAIRED TOKENS NOW LIVE ON BANKR", url: "https://x.com/bankrbot/status/2079057709434040620", published_at: 2026-07-20T04:15:59Z, accessed_at: 2026-09-02T23:48:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [CLM-10, CLM-12, EVT-6], excerpt: "STOCK PAIRED TOKENS NOW LIVE ON BANKR every launchpad on earth pairs your token with the chain's native coin. as of today on bankr, you can pair yours with a stock instead -- live on robinhood chain. launch a token on robinhood chain whose pool is quoted in tokenized $TSLA. or $AAPL. or $SPY. 90+ tokenized stocks & ETFs to pick from." }
  - { id: R-16, publisher: Robinhood Chain RPC, title: "eth_getCode, owner, ERC-20 views", url: "https://rpc.mainnet.chain.robinhood.com", published_at: null, accessed_at: 2026-09-02T23:45:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-4, CLM-5, CLM-6, CLM-7, CLM-8, CLM-18, CLM-22], excerpt: "eth_blockNumber 0x328b534 (52999476). Clone bytecode 0x3d3d3d3d363d3d37363d73 3be8b97f…c599 on TAYSOM, SBC, CQ, GOON, RM. owner() TAYSOM/SBC/CQ/GOON = 0xeb7c0347…0862. Airlock owner() 0x21e2ce70…7a66. name/symbol TAYSOM, StateBankCorp/SBC, Clover Q/CQ, ROBINHOOD GOON/GOON, Purgy Pengoon/GOONER. GOONER not a clone." }
  - { id: R-17, publisher: Bankr, title: "GET /token-launches", url: "https://api.bankr.bot/token-launches", published_at: null, accessed_at: 2026-09-02T23:44:00Z, kind: other, authority: primary, authenticity: confirmed, supports: [CLM-23, CLM-26, EVT-1], excerpt: "50 launches. Robinhood Doppler row: tokenName RobinMint tokenSymbol RM chain robinhood launchType doppler tokenAddress 0x1c711c4f7aac169f9a79f28629bb5c3b78f11ba3 txHash 0x1fe8405d3cf0dc0d71eb21c49d78794d97e47298113e0b73ccedd841fad7d2a6. GSPACE 0xa3ee0275d0897e20f085ad784418897758804ba3 tx 0x9ae57739f281691a58df5e43aab71cc8d320d2088c3a7124e71c94cb99bbb296." }
  - { id: R-18, publisher: GeckoTerminal, title: "TAYSOM / TSM pool on Bankr (Robinhood)", url: "https://api.geckoterminal.com/api/v2/networks/robinhood/pools/0xfb84a012d714a619769978eb4c43c2ca198a05eee3ad225624befab966e6a15c?include=base_token,quote_token", published_at: null, accessed_at: 2026-09-02T23:50:00Z, kind: third-party-data, authority: aggregator, authenticity: unconfirmed, supports: [CLM-10, EVT-4], excerpt: "attributes.name TAYSOM / TSM. relationships.dex.id bankr-robinhood. base TAYSOM 0x9965de8400b382164e4dbf6dc0e5035cffe28ba3. quote TSM 0x58ffe4a942d3885baa22d7520691f611ef09e7aa Taiwan Semiconductor Manufacturing • Robinhood Token. reserve_in_usd 0.0." }
  - { id: R-19, publisher: Blockscout, title: "StateBankCorp SBC and Clover Q CQ", url: "https://robinhoodchain.blockscout.com/address/0x1965765e00c4047879289Eec1a3702C2aAF9DbA3", published_at: null, accessed_at: 2026-09-02T23:45:15Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-13], excerpt: "SBC 0x1965765e…DbA3 name StateBankCorp eip1167 DopplerERC20V1 creator factory 0x1B37…b69a tx 0x023e5653… 2026-08-31T04:18:47Z handleOps. CQ 0xFE995FAA…5BA3 name Clover Q same factory tx 0x14ff2d5a… 2026-08-31T04:16:41Z." }
  - { id: R-20, publisher: GeckoTerminal, title: "Purgy Pengoon (GOONER) token", url: "https://api.geckoterminal.com/api/v2/networks/robinhood/tokens/0x51e7bf39c6cf1a7f53ddfaa5db346c69994511f2", published_at: null, accessed_at: 2026-09-02T23:50:00Z, kind: third-party-data, authority: aggregator, authenticity: unconfirmed, supports: [CLM-14, EVT-5], excerpt: "address 0x51e7bf39c6cf1a7f53ddfaa5db346c69994511f2 name Purgy Pengoon symbol GOONER decimals 18 normalized_total_supply 1000000000.0 volume_usd.h24 380692.207430984. DexScreener top pool GOONER/PENGU on Uniswap v4 Robinhood." }
  - { id: R-21, publisher: DefiLlama, title: "Bankr protocol row", url: "https://api.llama.fi/protocol/bankr", published_at: null, accessed_at: 2026-09-02T23:44:00Z, kind: third-party-data, authority: aggregator, authenticity: unconfirmed, supports: [CLM-24], excerpt: "name Bankr symbol BNKR category Interface chains [Base] url https://bankr.bot/terminal twitter bankrbot address base:0x22af33fe49fd1fa80c7149773dde5890d3c76f3b currentChainTvls {} tvl []. No Robinhood Chain slice in this row." }
  - { id: R-22, publisher: "@bankrbot", title: "claimed 20,000 $TEST on robinhood chain", url: "https://x.com/bankrbot/status/2095041530612625487", published_at: 2026-09-02T06:49:59Z, accessed_at: 2026-09-02T23:48:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [EVT-2], excerpt: "claimed 20,000 $TEST on robinhood chain. wallet: 0x27fbfca0921aa18f2bf3c91170f3f84c527cec45 contract: 0x4b31831752b7760E9fa83Eb5c1A7611b3603146B amount: 20,000 TEST tx hash: 0xf1e5c5c8a9a1ed0d21adb1265796b133cef0e26ee76d61e30ebb7379a55359f2" }

gaps:
  - { priority: P0, question: "Who holds the Airlock owner key 0x21E2…7A66 (Safe threshold and owners), and which owner-only DopplerERC20V1 functions remain callable on Bankr-launched tokens?", checked: "owner() on TAYSOM/GOON/Airlock via RPC 2026-09-02; getThreshold/getOwners not called this pass", next: "eth_call getThreshold/getOwners on 0x21E2… and read DopplerERC20V1 verified source modifiers" }
  - { priority: P1, question: "Does any audit report cover DopplerERC20V1Factory / Airlock as used on 4663, and does Bankr's hook fee add-on have a separate report?", checked: "docs.bankr.bot token-launching overview, GitHub org listing, @bankrbot profile, 2026-09-02", next: "open docs Bug Bounty page and search Doppler/Whetstone audit indexes" }
  - { priority: P1, question: "SBC and CQ quote assets: intake listed MSFT and QQQ. Only TAYSOM/TSM was reproduced on GeckoTerminal this pass.", checked: "Blockscout name/symbol and factory for SBC/CQ; Gecko TAYSOM/TSM, 2026-09-02", next: "GeckoTerminal or Uniswap v4 pool lookup for 0x1965…DbA3 and 0xFE99…5BA3" }
  - { priority: P1, question: "Which fee schedule applies to a given Bankr RH token: the 6 Jul 2-year/90-day vest post versus the current docs 1-year/30-day vest?", checked: "6 Jul X post and docs Token Supply / Existing tokens are unaffected, 2026-09-02", next: "read vesting parameters on TAYSOM and GOON verified clone state" }
  - { priority: P2, question: "Is @bankr_ai_bot a live Telegram surface that cross-links bankr.bot?", checked: "docs Agent Overview table lists Telegram @bankr_ai_bot; t.me not opened, 2026-09-02", next: "open the Telegram profile and compare the linked domain" }
  - { priority: P2, question: "DefiLlama Bankr row is Base-only Interface with empty TVL. Is there a Robinhood chain-slice for Bankr or Doppler fees?", checked: "api.llama.fi/protocol/bankr and overview/fees/robinhood (no Bankr module), 2026-09-02", next: "watch Llama for a Bankr or Doppler Robinhood fees adapter" }
---

# Bankr — research packet

## What it is

X-native agent execution: a mention or console prompt mints a token through Doppler Airlock into a locked Uniswap v4 pool, and 95% of the 0.7% pool swap fee (0.665% of volume) accrues to the fee recipient. Users tag @bankrbot or open bankr.bot; chat and API deploys default to Robinhood Chain. Bankr runs the agent as @bankrbot.

Themes: agent, launchpad, ai, rwa, memecoin

## Why it matters

This is the X/console command path that mints on Robinhood Chain instead of wrapping Pons. Launches share DopplerERC20V1Factory and Airlock with LONG, so a Bankr ticker and a LONG ticker can be clones of the same implementation with the same owner(). @RHDaily__ still listed Bankr at $2.0M 24h pad volume on 1 Sep, eighth on that board.

## What could go wrong

Token `owner()` is Airlock, not the launching X account, so Doppler/Airlock admin rights sit outside the Bankr profile. Vesting recipient is locked at launch even if the fee recipient is later transferred. $GOON (Doppler clone) and $GOONER (LaunchFactory) share a ticker stem and are different contracts.

## Product and mechanics

Chat, social and API deploys default to Robinhood Chain; the CLI and web form default to Base. A launch seeds a Uniswap v4 pool. Docs put 95% of a 0.7% pool swap fee (0.665% of volume) to the creator, with hook-added Bankr protocol, BNKR buyback and LP legs stated as 1.75% all-in. [claim R-1]

Standard supply is 100 billion. Docs allocate 85% to the pool and 15% to the fee recipient over one year with a 30-day cliff, recipient fixed at launch. The 6 Jul live post cited a two-year vest and 90-day cliff. Docs say schedules are fixed per launch. [claim R-1 R-2]

Stock-paired mode quotes the pool in a Robinhood Stock Token. @bankrbot posted TSLA/AAPL/SPY and 90+ names on 20 Jul. TAYSOM's GeckoTerminal pool is TAYSOM/TSM on dex `bankr-robinhood`, quote 0x58ff…e7aa. [claim R-15 R-18]

Tokens Bankr launches are graduations, not this slug. GET /token-launches returned 24 robinhood Doppler rows in the latest 50, including RobinMint and GSPACE on 2 Sep. [verified R-17 R-8]

## Control and security

TAYSOM, SBC, CQ and GOON are EIP-1167 clones of DopplerERC20V1. `owner()` on those tokens returns Airlock 0xeb7c…0862. Airlock `owner()` returns 0x21E2…7A66. This pass did not read Safe threshold or Doppler owner-only setters. [verified R-16 R-9 R-11]

No audit report matching this factory was located in docs, the GitHub org listing or the X profile this pass. [unknown]

## Team and provenance

@bankrbot lists bankr.bot. GitHub org BankrBot sets blog to https://bankr.bot. docs.bankr.bot names the web terminal, X, Telegram and CLI as surfaces of one agent. Telegram @bankr_ai_bot was not opened. [verified R-3 R-4 R-5]

Llama's Bankr row is an Interface on Base (BNKR 0x22af…6f3b) with empty TVL and no Robinhood chain slice. [claim R-21]

## Economics and activity

@RHDaily__ on 1 Sep 22:00 UTC ranked @bankrbot eighth on a 24h launchpad board at $2.0M, behind Pons $315.9M and LONG $47.5M, tied in print with @letscashfun at $2.0M. That figure is the account's board, not a DefiLlama chain slice. [claim R-14]

TAYSOM and GOON each show two holders and 100 billion e18 supply on Blockscout. GOONER (different CA) had 2,097 holders and ~$381k 24h volume on GeckoTerminal. [verified R-9 R-11] [claim R-20]

## Material risks

- Shared Doppler/Airlock stack: Bankr-launched tokens have the same `owner()` as other Doppler clones, including LONG-path tokens. [verified R-16 R-13]
- Vesting recipient cannot be moved after launch; fee-recipient transfer does not move the vested allocation. [claim R-1]
- $GOON and $GOONER are different contracts and different factories. Flag ca-collision. [verified R-11 R-13]
- No audit report for the Robinhood factory was located this pass. [unknown]

## Verification passes

- Receipts: docs.bankr.bot, bankr.bot, @bankrbot profile and posts, GitHub org, Blockscout factory/impl/tokens/txs, RPC, Bankr launches API, GeckoTerminal TAYSOM/TSM and GOONER, Llama protocol/bankr, and @RHDaily__ were opened on 2026-09-02 and excerpts copied from the responses. [verified R-1 R-6 R-16 R-14]
- Numbers: the $2.0M figure is @RHDaily__'s 24h pad board for 1 Sep, not an all-chains Bankr total and not Llama TVL (empty). Token supplies are 100 billion e18 on TAYSOM and GOON. [claim R-14] [verified R-16]
- Adversarial: the strongest contrary reading is that Bankr is only LONG with a chatbot, or that $GOONER is the Bankr GOON ticker. Clone bytecode, factory creator and Airlock `create()` match Doppler, while GOONER's creator is LaunchFactory 0x7186…FC63. Wire remains a Pons command layer. [inference R-6 R-13 R-17]

## Operations log

- Base: `git -C /Users/harsharnsingh/proofline-pr59 rev-parse origin/main` → 334ca0619aa62e922da83f46de021f06d12348cf. Census bankr (lifecycle announced), content/projects/bankr.yaml, content/feed/bankr.yaml, content/sources/bankr.yaml, content/changelog/bankr.yaml, content/research/bankr.md, long.yaml unresolved factory gap, docs/templates/research-packet-v2.md and schema/packet.schema.json read before collection.
- Official: docs.bankr.bot/token-launching/overview and llms-full.txt, bankr.bot HTML, GitHub org BankrBot, api.bankr.bot/token-launches.
- Explorer: Blockscout api/v2 with a Chrome User-Agent after a Cloudflare 403 on a short UA. Factory, impl, TAYSOM, SBC, CQ, GOON, GOONER, GSPACE, RM create txs. RPC eth_getCode/eth_call name/symbol/owner/decimals/totalSupply at block 52999476.
- Third party: GeckoTerminal bankr-robinhood dex, TAYSOM/TSM pool, GOONER token; DexScreener GOONER/PENGU; api.llama.fi/protocol/bankr and overview/fees/robinhood (no Bankr module).
- X: @bankrbot profile, 6 Jul launches-live, 20 Jul stock-paired, 2 Sep TEST claim, 2 Sep launch replies; @RHDaily__ 1 Sep pad board ($2.0M). @RHDaily_ is the unrelated handle; board is @RHDaily__.
- Failed: explorer.robinhood.com TLS handshake failure. Blockscout without a full Chrome UA returned Cloudflare challenge. DexScreener token-pairs for TAYSOM/GOON returned empty lists; GeckoTerminal had the TAYSOM/TSM pool.
- Time: collection 2026-09-02T23:40Z–23:55Z.
