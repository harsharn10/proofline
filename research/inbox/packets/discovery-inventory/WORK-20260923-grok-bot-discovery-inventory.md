---
# Packet v2 (docs/research-system.md §5). Discovery inventory seed.
contract_version: proofline-research-v2
work_id: WORK-20260923-grok-bot-discovery-inventory
producer: grok-bot
role: collector
base_sha: 8d889690ecaa9427403b7535d28753839e52ee65
slug: discovery-inventory
name: Discovery inventory 2026-09-23
packet_tier: seed
as_of: 2026-09-23T13:35:00Z
prior_packet: null
supersedes: null
owned_slugs: [discovery-inventory]
allowed_paths:
  - research/inbox/packets/discovery-inventory/WORK-20260923-grok-bot-discovery-inventory.md

identity:
  crosslink_claim_ids: [CLM-2]
  canonical_name: Discovery inventory 2026-09-23
  aliases: []
  symbols: []
  entity_kind: unknown
  chain_scope: unknown
  official_domain: "NULL — inventory packet"
  official_handle: "NULL — inventory packet"
  repository: "NULL — inventory packet"
  possible_matches:
    - slug: pools-trade
      signals: [shared-deployer]
      contrary_signals:
        - "Census pools-trade is pools.trade / @TradePools, primary leaf launch/uni-pool-launch. Its project record carries UERC20Factory 0x000000e200088D55C39a11F609E5F667729ad49b and launch entry 0x0000ffffbe8efe702c8703ae3477ff5de3d319c0. RallyPad is rallypad.fun / @rallypadfun. Blockscout creator hash and the creation transaction to-address match those two pools.trade addresses. Shared launch infrastructure is not a merge."
    - slug: pons
      signals: [other]
      contrary_signals:
        - "Census pons is Pons at ponsfamily.com / @ponsdotfamily, primary leaf launch/bonding-curve. RallyPad is rallypad.fun / @rallypadfun. Category cousin only. Not a merge."
    - slug: safehood
      signals: [other]
      contrary_signals:
        - "Census safehood is Safehood at safehood.fun / @_safehood, primary leaf launch/uni-pool-launch. RallyPad is rallypad.fun / @rallypadfun. Different handle and domain. Not a merge."
    - slug: hoodfun
      signals: [other]
      contrary_signals:
        - "Census hoodfun is hood.fun / @hoodfunfamily, primary leaf launch/bonding-curve. RallyPad is rallypad.fun / @rallypadfun. Different handle and domain. Not a merge."
    - slug: hookr
      signals: [other]
      contrary_signals:
        - "Census hookr is Hookr at hookr.fun / @Hookrfun, primary leaf launch/hook-programmable. Hookr sources also name UERC20Factory 0x000000e200088D55C39a11F609E5F667729ad49b as a creator. Different handle and domain. Not a merge."
    - slug: lemon
      signals: [other]
      contrary_signals:
        - "Census lemon is Lemon at lemon.fun / @lemondotfun, primary leaf launch/uni-pool-launch. RallyPad is rallypad.fun / @rallypadfun. Different handle and domain. Not a merge."
    - slug: noxa
      signals: [other]
      contrary_signals:
        - "Census noxa is NOXA Fun at noxa.fun / @Noxa_Fi, primary leaf launch/uni-pool-launch. RallyPad is rallypad.fun / @rallypadfun. Different handle and domain. Not a merge."
    - slug: foxpad
      signals: [other]
      contrary_signals:
        - "Census foxpad is FoxPad at foxpad.app / @FoxPad_RH, primary leaf launch/bonding-curve. RallyPad is rallypad.fun / @rallypadfun. Different handle and domain. Not a merge."
    - slug: fables
      signals: [other]
      contrary_signals:
        - "Census fables is Fables at fables.fi / @fablesfi. Its sources name the same UERC20Factory as creator of a different token. RallyPad is rallypad.fun / @rallypadfun. Not a merge."
    - slug: frong
      signals: [other]
      contrary_signals:
        - "Census frong is FRONG / @frongcommunity, primary leaf launch/graduation-token. Its sources name the same UERC20Factory as creator. RallyPad is rallypad.fun / @rallypadfun. Not a merge."

classification:
  primary_leaf: tooling/scanner
  secondary_leaves: []
  mechanism_tags: [other]
  ecosystem_role: observe
  lifecycle: unknown
  coverage_recommendation: candidate
  evidence_state: partly-verified
  rationale: "Weekday discovery round 2026-09-23. Suggested lead RallyPad / @rallypadfun / rallypad.fun is not a census row and is not the primary of open #163 (arcus), #164 (canopy), #165 (twofold), #166 (sluice), #167 (mosaic), #168 (greenwood), #169 (scalar), or #170 (funded). Homepage title is a Uniswap v4 memecoin launchpad. /launch says Launch on Robinhood and that a coin opens as a Uniswap v4 pool. Homepage HTML has no 40-hex address and no Robinhood or 4663 sentence. X bio has no contract address and the website is http://rallypad.fun. Hoodmarketcap token page for 0x7daf6b4cc3eac752ae9a77967f78b15886aa1c89 is the CA source; flag third-party-link. RPC on chain 4663 reproduced name RallyPad, symbol RALLY, 18 decimals, totalSupply 1e27, 7154 B. Blockscout API is_verified true and contract name UERC20; creator hash is the pools.trade UERC20Factory. Proposed census slug rallypad; entity_kind protocol; chain_scope robinhood-native only as a claim; primary_leaf launch/uni-pool-launch. Coverage recommendation: candidate (inventory only)."

qualifying:
  deployed_on_chain: { status: pass, claim_ids: [CLM-9], note: "" }
  native_play: { status: pass, claim_ids: [CLM-8], note: "Token code is on chain 4663 and /launch says Launch on Robinhood. Homepage HTML has no Robinhood or 4663 sentence." }
  citable: { status: pass, claim_ids: [CLM-2], note: "" }
  research_story: { status: pass, claim_ids: [CLM-7], note: "" }

links:
  - { kind: site, url: "https://www.rallypad.fun/", authenticity: confirmed }
  - { kind: site, url: "https://rallypad.fun/", authenticity: confirmed }
  - { kind: x, url: "https://x.com/rallypadfun", authenticity: confirmed }
  - { kind: telegram, url: "https://t.me/rallypad", authenticity: confirmed }
  - { kind: telegram, url: "https://t.me/rallypadchat", authenticity: unconfirmed }
  - { kind: docs, url: "https://www.rallypad.fun/docs", authenticity: unconfirmed }
  - { kind: explorer, url: "https://robinhoodchain.blockscout.com/address/0x7daf6b4cc3eac752ae9a77967f78b15886aa1c89", authenticity: confirmed }
  - { kind: explorer, url: "https://robinhoodchain.blockscout.com/tx/0x9fc919c0caabaaece49d6f972f89065ab0456c8d6ec99190ad4c3202c95998a8", authenticity: confirmed }
  - { kind: dexscreener, url: "https://api.dexscreener.com/token-pairs/v1/robinhood/0x7daf6b4cc3eac752ae9a77967f78b15886aa1c89", authenticity: confirmed }
  - { kind: other, url: "https://www.hoodmarketcap.com/token/0x7daf6b4cc3eac752ae9a77967f78b15886aa1c89", authenticity: confirmed }

deployments:
  - label: RALLY token (RPC name RallyPad, symbol RALLY; Blockscout contract name UERC20)
    role: token
    address:
      value: "0x7daf6b4cc3eac752ae9a77967f78b15886aa1c89"
      chain: robinhood-chain
      source: third-party
      seen: 2026-09-23
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-4, R-7, R-8, R-10]

metrics:
  - { kind: holders, value: 2, currency: null, as_of: 2026-09-23T13:35:00Z, window: point, method: "Blockscout api/v2 token.holders_count for 0x7daf6b4cc3eac752ae9a77967f78b15886aa1c89", class: claim, receipt_ids: [R-7] }

reproductions:
  - { id: REP-1, method: explorer-rpc, chain_id: 4663, checked_at: 2026-09-23T13:35:00Z, receipt_ids: [R-4], result: "eth_chainId 0x1237 (4663). Metadata read at eth_blockNumber 0x434957a (70555002). RALLY 0x7daf6b4cc3eac752ae9a77967f78b15886aa1c89 eth_getCode 7154 B prefix 0x60806040; name() RallyPad; symbol() RALLY; decimals() 18; totalSupply() 1e27 (1_000_000_000 RALLY at 18 decimals); owner() reverted. Leading 20 bytes 0xf652c273e7d047754607c567d0fd5bf43a81711a eth_getCode 0 B. BRICKS 0x7b7faa885c237faba733e7006e80149ba9224643 3248 B name Bricks symbol BRICKS decimals 18 totalSupply 929182592385427079452677579 wei. UERC20Factory 0x000000e200088D55C39a11F609E5F667729ad49b 13380 B. Launch entry 0x0000ffffbe8efe702c8703ae3477ff5de3d319c0 4127 B." }
  - { id: REP-2, method: official-crosslink, chain_id: 4663, checked_at: 2026-09-23T13:35:00Z, receipt_ids: [R-1, R-2, R-3], result: "https://www.rallypad.fun/ and https://rallypad.fun/ title RallyPad · Rally memecoin launchpad on Uniswap v4. Homepage hrefs https://x.com/rallypadfun and https://t.me/rallypad. No 40-hex address and no Robinhood or 4663 in the homepage HTML. @rallypadfun website http://rallypad.fun. Bio has no contract address. Profile fields copied from api.fxtwitter.com." }
  - { id: REP-3, method: api, chain_id: 4663, checked_at: 2026-09-23T13:35:00Z, receipt_ids: [R-11, R-12, R-13, R-14], result: "DexScreener token-pairs/v1 returned HTTP 200 body []. Search by this CA returned pairs []. Llama GET /protocol/rallypad and /protocol/rally-pad both returned Protocol not found. GeckoTerminal token GET 200: name RallyPad, symbol RALLY, total_reserve_in_usd 1064.123292997, volume_usd.h24 0, price_usd null, fdv_usd null, market_cap_usd null, top_pools empty." }
  - { id: REP-4, method: document-scope, chain_id: 4663, checked_at: 2026-09-23T13:35:00Z, receipt_ids: [R-1, R-5, R-6], result: "Homepage states the programmable market layer line, no presale, and the same terms for everyone who shows up. /launch title Launch a coin · RallyPad. Visible lines include Launch on Robinhood, a Uniswap v4 pool from the first block, no liquidity move at breakout, and one transaction with no presale and no waiting room. /docs HTTP 404 title Not found · RallyPad. docs.rallypad.fun and app.rallypad.fun did not resolve." }
  - { id: REP-5, method: explorer-rpc, chain_id: 4663, checked_at: 2026-09-23T13:35:00Z, receipt_ids: [R-4, R-7, R-9], result: "eth_getTransactionByHash 0x9fc919c0caabaaece49d6f972f89065ab0456c8d6ec99190ad4c3202c95998a8 on chainId 0x1237, block 0x21e802a (35553322), blockTimestamp 2026-08-13T17:00:37Z, status 0x1, from 0xef91cb70dd8d288213f7740b30ee457da1d869fb (eth_getCode empty), to 0x0000ffffbe8efe702c8703ae3477ff5de3d319c0, contractAddress null, first log address is the RALLY token. Input includes the RallyPad and RALLY strings. Blockscout api/v2 names that hash creation_transaction_hash, contract name UERC20, is_verified true, creator_address_hash 0x000000e200088D55C39a11F609E5F667729ad49b, holders_count 2." }

claims:
  - { id: CLM-1, field: candidate, value: "rallypad | RallyPad | @rallypadfun | rallypad.fun", class: claim, observed_at: 2026-09-23T13:35:00Z, receipt_ids: [R-1, R-2, R-5], reproduction_ids: [REP-2], supersedes: null }
  - { id: CLM-2, field: identity.domain, value: "www.rallypad.fun and rallypad.fun serve the same homepage. That homepage links https://x.com/rallypadfun and https://t.me/rallypad. The handle website is http://rallypad.fun. The homepage HTML and the X bio contain no 40-hex contract address.", class: verified, observed_at: 2026-09-23T13:35:00Z, receipt_ids: [R-1, R-2, R-3], reproduction_ids: [REP-2], supersedes: null }
  - { id: CLM-3, field: identity.handle, value: "@rallypadfun", class: claim, observed_at: 2026-09-23T13:35:00Z, receipt_ids: [R-1, R-2, R-3], reproduction_ids: [], supersedes: null }
  - { id: CLM-4, field: identity.symbol, value: "RALLY", class: verified, observed_at: 2026-09-23T13:35:00Z, receipt_ids: [R-4, R-7], reproduction_ids: [REP-1], supersedes: null }
  - { id: CLM-5, field: identity.name, value: "RPC name() RallyPad; homepage title RallyPad; handle display name Rally; Blockscout token name RallyPad", class: verified, observed_at: 2026-09-23T13:35:00Z, receipt_ids: [R-1, R-2, R-4, R-7], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-6, field: product.mechanism, value: "Homepage title is RallyPad · Rally memecoin launchpad on Uniswap v4. The page states Rally is the programmable market layer for humans + agents, that there is no presale, that no allocation is set aside before the public, and that terms are the same for everyone who shows up.", class: claim, observed_at: 2026-09-23T13:35:00Z, receipt_ids: [R-1], reproduction_ids: [REP-4], supersedes: null }
  - { id: CLM-7, field: product.mechanism, value: "/launch says Launch on Robinhood, that the coin lives on this chain with its pool, curve, and holders, and that it opens as a Uniswap v4 pool with the curve already inside it, trading from the first block, with nothing to migrate later. It also says no liquidity moves at breakout and that nobody can add or pull any, and that one transaction goes live with no presale, no team allocation, and no waiting room.", class: claim, observed_at: 2026-09-23T13:35:00Z, receipt_ids: [R-5], reproduction_ids: [REP-4], supersedes: null }
  - { id: CLM-8, field: taxonomy.chain-scope, value: "robinhood-native as a claim. /launch says Launch on Robinhood and that the coin lives on this chain. Homepage HTML contains no Robinhood sentence and no 4663. RALLY bytecode is on chain 4663.", class: claim, observed_at: 2026-09-23T13:35:00Z, receipt_ids: [R-1, R-4, R-5], reproduction_ids: [REP-1, REP-2, REP-4], supersedes: null }
  - { id: CLM-9, field: deployment.address, value: "0x7daf6b4cc3eac752ae9a77967f78b15886aa1c89", class: verified, observed_at: 2026-09-23T13:35:00Z, receipt_ids: [R-4, R-7, R-8, R-10], reproduction_ids: [REP-1, REP-5], supersedes: null }
  - { id: CLM-10, field: lifecycle, value: "RALLY bytecode is on chain 4663. Blockscout and RPC place creation transaction 0x9fc919c0caabaaece49d6f972f89065ab0456c8d6ec99190ad4c3202c95998a8 at 2026-08-13T17:00:37Z, status success. The homepage does not state a launch date.", class: claim, observed_at: 2026-09-23T13:35:00Z, receipt_ids: [R-1, R-4, R-7, R-9], reproduction_ids: [REP-1, REP-5], supersedes: null }
  - { id: CLM-11, field: deployment.role, value: "Blockscout contract name is UERC20, is_verified true, creator_address_hash 0x000000e200088D55C39a11F609E5F667729ad49b (13380 B). The creation transaction to-address is 0x0000ffffbe8efe702c8703ae3477ff5de3d319c0 (4127 B). contractAddress on the receipt is null. The pools.trade project record names those addresses UERC20Factory and the launch entry. They are not listed as RallyPad deployments.", class: claim, observed_at: 2026-09-23T13:35:00Z, receipt_ids: [R-4, R-7, R-15], reproduction_ids: [REP-1, REP-5], supersedes: null }
  - { id: CLM-12, field: relationship, value: "Keep distinct from census pools-trade. The shared UERC20Factory and launch entry are launch infrastructure. Official domain and handle differ.", class: claim, observed_at: 2026-09-23T13:35:00Z, receipt_ids: [R-1, R-2, R-7, R-15], reproduction_ids: [REP-5], supersedes: null }
  - { id: CLM-13, field: relationship, value: "Keep distinct from census pons, safehood, hoodfun, hookr, lemon, noxa, foxpad, fables, and frong. Those rows differ in handle and domain. hookr, fables, and frong sources also name the same UERC20Factory. That is a shared template, not a merge.", class: claim, observed_at: 2026-09-23T13:35:00Z, receipt_ids: [R-15], reproduction_ids: [], supersedes: null }
  - { id: CLM-14, field: security.audit, value: "No audit report URL was located on the homepage or /launch this round. The word audit does not appear in either HTML body.", class: unknown, observed_at: 2026-09-23T13:35:00Z, receipt_ids: [], reproduction_ids: [], supersedes: null }
  - { id: CLM-15, field: control.owner, value: "owner() on 0x7daf6b4cc3eac752ae9a77967f78b15886aa1c89 reverted. The creation transaction sender 0xef91cb70dd8d288213f7740b30ee457da1d869fb has no code. The homepage names no timelock.", class: verified, observed_at: 2026-09-23T13:35:00Z, receipt_ids: [R-1, R-4], reproduction_ids: [REP-1], supersedes: null }
  - { id: CLM-16, field: economics.metric, value: "GeckoTerminal token GET 200: total_reserve_in_usd 1064.123292997080875415881108, volume_usd.h24 0, price_usd null, fdv_usd null, market_cap_usd null, top_pools empty. Not protocol TVL.", class: claim, observed_at: 2026-09-23T13:35:00Z, receipt_ids: [R-14], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-17, field: economics.metric, value: "DexScreener token-pairs/v1 and search by this CA returned no pairs. No DexScreener pair URL this round.", class: verified, observed_at: 2026-09-23T13:35:00Z, receipt_ids: [R-11], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-18, field: economics.metric, value: "GET api.llama.fi/protocol/rallypad and /protocol/rally-pad both returned Protocol not found. No Llama TVL attached.", class: verified, observed_at: 2026-09-23T13:35:00Z, receipt_ids: [R-12, R-13], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-19, field: economics.metric, value: "Flag third-party-link. Hoodmarketcap token page title names RallyPad (RALLY) and Hood Chain. The page is the source of the token address used for the RPC read; the official homepage and the X bio do not print it. A table cell shows $6.1K beside a Blockscout href whose path is 32 bytes starting 0xf652c273e7d047754607c567d0fd5bf43a81711a. eth_getCode on those leading 20 bytes is empty. That id is not listed as a contract deployment.", class: claim, observed_at: 2026-09-23T13:35:00Z, receipt_ids: [R-4, R-10], reproduction_ids: [REP-1], supersedes: null }
  - { id: CLM-20, field: communications.status, value: "api.fxtwitter.com/rallypadfun profile 200 (name Rally, 1564 followers, 525 tweets, joined Sat Jan 18 15:14:39 +0000 2025, verification type individual, website http://rallypad.fun). /tweets HTTP 404. Signed-in X timeline was unavailable. No status id was copied.", class: claim, observed_at: 2026-09-23T13:35:00Z, receipt_ids: [R-2, R-25], reproduction_ids: [], supersedes: null }
  - { id: CLM-21, field: communications.status, value: "Homepage and /launch href https://t.me/rallypad.", class: claim, observed_at: 2026-09-23T13:35:00Z, receipt_ids: [R-1, R-5], reproduction_ids: [REP-2], supersedes: null }
  - { id: CLM-22, field: communications.status, value: "Flag unconfirmed-official. The X bio names Community https://t.me/rallypadchat. The homepage and /launch do not href that URL; they href https://t.me/rallypad.", class: claim, observed_at: 2026-09-23T13:35:00Z, receipt_ids: [R-1, R-2, R-5], reproduction_ids: [REP-2], supersedes: null }
  - { id: CLM-23, field: other, value: "Open PRs #163-#170 are prior discovery inventories and are not re-packed. Primaries read this round: #163 arcus, #164 canopy, #165 twofold, #166 sluice, #167 mosaic, #168 greenwood, #169 scalar, #170 funded. #92 is a site stream. Floor is census slug floor. ArcLiquidity is census slug arc. Ravenhood is not a census slug and is not re-packed.", class: claim, observed_at: 2026-09-23T13:35:00Z, receipt_ids: [R-15], reproduction_ids: [], supersedes: null }
  - { id: CLM-24, field: other, value: "Runner-up, not packed as primary: brickswalltech / @brickswalltech / brickswall.tech. Bio contains 0x7b7faa885c237faba733e7006e80149ba9224643, location Robinhood Chain, website https://brickswall.tech/how-it-works. Homepage says Chain mode: live contracts on Robinhood Chain mainnet (4663) and does not print that address. RPC name Bricks, symbol BRICKS, decimals 18, supply about 929182592.385, code 3248 B. Next unpacked name after this lead. Thinner this pass: HoodedDotMeme / hooded.meme (bio has no CA; made by @SwapHoodFi; launchpad page); MinteraNFT (bio Maintaince; website null); fefehood / fefe-hood.fun (meme and community; site HTTP 502).", class: claim, observed_at: 2026-09-23T13:35:00Z, receipt_ids: [R-4, R-16, R-17, R-18, R-19, R-20, R-21, R-22], reproduction_ids: [REP-1], supersedes: null }
  - { id: CLM-25, field: other, value: "content/accounts.yaml lists @rallypadfun as watch/project, note Programmable pad + livestream + fee routing, with no slug. census.yaml has 182 slugs and no rallypad, RallyPad, RALLY, rallypad.fun, or 0x7daf6b4cc3eac752ae9a77967f78b15886aa1c89 row.", class: claim, observed_at: 2026-09-23T13:35:00Z, receipt_ids: [R-15], reproduction_ids: [], supersedes: null }
  - { id: CLM-26, field: taxonomy.primary-leaf, value: "rallypad | launch/uni-pool-launch", class: claim, observed_at: 2026-09-23T13:35:00Z, receipt_ids: [R-1, R-5], reproduction_ids: [REP-4], supersedes: null }
  - { id: CLM-27, field: taxonomy.entity-kind, value: "rallypad | protocol", class: claim, observed_at: 2026-09-23T13:35:00Z, receipt_ids: [R-1, R-5], reproduction_ids: [REP-4], supersedes: null }
  - { id: CLM-28, field: "account.@rallypadfun.slug", value: "If admitted later, map @rallypadfun to proposed census slug rallypad. Already watch/project in accounts.yaml with no slug. Inventory only; this packet does not write content/accounts.yaml.", class: claim, observed_at: 2026-09-23T13:35:00Z, receipt_ids: [R-2, R-15], reproduction_ids: [], supersedes: null }
  - { id: CLM-29, field: identity.repository, value: "No repository URL was located on the homepage, /launch, or the handle profile this round.", class: unknown, observed_at: 2026-09-23T13:35:00Z, receipt_ids: [], reproduction_ids: [], supersedes: null }
  - { id: CLM-30, field: activity.status, value: "Blockscout holders_count was 2. GeckoTerminal volume_usd.h24 was 0 and top_pools was empty. DexScreener returned no pairs. Not an activity window.", class: claim, observed_at: 2026-09-23T13:35:00Z, receipt_ids: [R-7, R-11, R-14], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-31, field: product.mechanism, value: "https://www.rallypad.fun/docs and https://rallypad.fun/docs returned HTTP 404, title Not found · RallyPad. docs.rallypad.fun and app.rallypad.fun failed DNS resolution.", class: claim, observed_at: 2026-09-23T13:35:00Z, receipt_ids: [R-6, R-23, R-24], reproduction_ids: [REP-4], supersedes: null }

conflicts:
  - id: CON-1
    field: communications.status
    claim_ids: [CLM-21, CLM-22]
    material_effect: "The site hrefs https://t.me/rallypad. The X bio names https://t.me/rallypadchat. The site does not cross-link the bio URL."
    status: open
    resolution: null

events:
  - id: EVT-1
    type: onchain
    title: "RALLY creation transaction on chain 4663"
    summary: "RPC and Blockscout show transaction 0x9fc919c0caabaaece49d6f972f89065ab0456c8d6ec99190ad4c3202c95998a8 at 2026-08-13T17:00:37Z on chain 4663, status success, from 0xef91cb70dd8d288213f7740b30ee457da1d869fb to 0x0000ffffbe8efe702c8703ae3477ff5de3d319c0, with a log on RALLY 0x7daf6b4cc3eac752ae9a77967f78b15886aa1c89. Blockscout names that hash the token creation transaction and names the contract UERC20."
    account: null
    occurred_at: 2026-08-13T17:00:37Z
    observed_at: 2026-09-23T13:35:00Z
    affected_fields: [deployment.address, lifecycle]
    evidence_state: verified
    impact: routine
    site_recommendation: none
    channel_recommendation: none
    receipt_ids: [R-4, R-7, R-9]
    tag: other

receipts:
  - { id: R-1, publisher: RallyPad, title: "rallypad.fun homepage", url: "https://www.rallypad.fun/", published_at: null, accessed_at: 2026-09-23T13:35:00Z, kind: official-site, authority: primary, authenticity: confirmed, supports: [CLM-1, CLM-2, CLM-3, CLM-5, CLM-6, CLM-8, CLM-10, CLM-12, CLM-15, CLM-21, CLM-22, CLM-26, CLM-27], excerpt: "HTTP 200. https://rallypad.fun/ redirects here. Title RallyPad · Rally memecoin launchpad on Uniswap v4. Rally is the programmable market layer for humans + agents. No presale, no pre-public allocation, same terms for everyone who shows up. Hrefs https://x.com/rallypadfun and https://t.me/rallypad. No 40-hex address. No Robinhood and no 4663 in the HTML." }
  - { id: R-2, publisher: FixTweet, title: "api.fxtwitter.com/rallypadfun", url: "https://api.fxtwitter.com/rallypadfun", published_at: null, accessed_at: 2026-09-23T13:35:00Z, kind: social, authority: social, authenticity: confirmed, supports: [CLM-1, CLM-2, CLM-3, CLM-5, CLM-12, CLM-20, CLM-22, CLM-28], excerpt: "code 200. screen_name rallypadfun name Rally followers 1564 tweets 525 joined Sat Jan 18 15:14:39 +0000 2025. description The programmable market layer for humans + agents. Community https://t.me/rallypadchat. website http://rallypad.fun. verification type individual. No contract address in the bio." }
  - { id: R-3, publisher: X, title: "x.com/rallypadfun", url: "https://x.com/rallypadfun", published_at: null, accessed_at: 2026-09-23T13:35:00Z, kind: social, authority: social, authenticity: confirmed, supports: [CLM-2, CLM-3], excerpt: "Profile URL for @rallypadfun. The homepage hrefs this URL. Profile fields were copied from api.fxtwitter.com/rallypadfun. No status id was copied." }
  - { id: R-4, publisher: Robinhood Chain RPC, title: "eth_call chain 4663", url: "https://rpc.mainnet.chain.robinhood.com", published_at: null, accessed_at: 2026-09-23T13:35:00Z, kind: other, authority: onchain, authenticity: confirmed, supports: [CLM-4, CLM-5, CLM-8, CLM-9, CLM-10, CLM-11, CLM-15, CLM-19, CLM-24, EVT-1], excerpt: "eth_chainId 0x1237. Metadata block 0x434957a (70555002). RALLY 0x7daf6b4c…1c89 7154 B name RallyPad symbol RALLY decimals 18 totalSupply 1e27 owner() reverted. Pool-id prefix 0xf652c273…1711a code 0 B. BRICKS 0x7b7faa88…4643 3248 B name Bricks symbol BRICKS. Creation tx 0x9fc919c0…98a8 block 35553322 time 2026-08-13T17:00:37Z status 1." }
  - { id: R-5, publisher: RallyPad, title: "Launch a coin", url: "https://www.rallypad.fun/launch", published_at: null, accessed_at: 2026-09-23T13:35:00Z, kind: official-site, authority: primary, authenticity: confirmed, supports: [CLM-1, CLM-7, CLM-8, CLM-21, CLM-22, CLM-26, CLM-27], excerpt: "HTTP 200. Title Launch a coin · RallyPad. Launch on Robinhood. Your coin lives on this chain: its pool, its curve and its holders. Opens as a Uniswap v4 pool and trades from the first block. No liquidity moves at breakout. One transaction, no presale, no team allocation, no waiting room. Hrefs x.com/rallypadfun and t.me/rallypad. No 4663 in the HTML." }
  - { id: R-6, publisher: RallyPad, title: "/docs HTTP 404", url: "https://www.rallypad.fun/docs", published_at: null, accessed_at: 2026-09-23T13:35:00Z, kind: docs, authority: primary, authenticity: confirmed, supports: [CLM-31], excerpt: "HTTP 404. Title Not found · RallyPad. https://rallypad.fun/docs also HTTP 404 with the same title. No docs body." }
  - { id: R-7, publisher: Blockscout, title: "api/v2 RALLY address", url: "https://robinhoodchain.blockscout.com/api/v2/addresses/0x7daf6b4cc3eac752ae9a77967f78b15886aa1c89", published_at: null, accessed_at: 2026-09-23T13:35:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-4, CLM-5, CLM-9, CLM-10, CLM-11, CLM-12, CLM-30, EVT-1], excerpt: "HTTP 200 JSON. is_contract true. is_verified true. name UERC20. token name RallyPad symbol RALLY decimals 18 total_supply 1e27 holders_count 2. creation_transaction_hash 0x9fc919c0caabaaece49d6f972f89065ab0456c8d6ec99190ad4c3202c95998a8. creator_address_hash 0x000000e200088D55C39a11F609E5F667729ad49b." }
  - { id: R-8, publisher: Blockscout, title: "RALLY address page", url: "https://robinhoodchain.blockscout.com/address/0x7daf6b4cc3eac752ae9a77967f78b15886aa1c89", published_at: null, accessed_at: 2026-09-23T13:35:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-9], excerpt: "HTTP 200. Title Robinhood Chain address details for 0x7daf6b4cc3eac752ae9a77967f78b15886aa1c89 | Blockscout. Verified-source flag was read from the API, not from this HTML title." }
  - { id: R-9, publisher: Blockscout, title: "RALLY creation transaction", url: "https://robinhoodchain.blockscout.com/tx/0x9fc919c0caabaaece49d6f972f89065ab0456c8d6ec99190ad4c3202c95998a8", published_at: null, accessed_at: 2026-09-23T13:35:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-10, EVT-1], excerpt: "HTTP 200. Title Robinhood Chain transaction 0x9fc919c0caabaaece49d6f972f89065ab0456c8d6ec99190ad4c3202c95998a8 | Blockscout. Transaction fields were reproduced with eth_getTransactionByHash, not from this HTML shell." }
  - { id: R-10, publisher: Hoodmarketcap, title: "RallyPad (RALLY) token page", url: "https://www.hoodmarketcap.com/token/0x7daf6b4cc3eac752ae9a77967f78b15886aa1c89", published_at: null, accessed_at: 2026-09-23T13:35:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-9, CLM-19], excerpt: "HTTP 200. Title RallyPad (RALLY) price, chart and market cap | Hoodmarketcap. Description says Hood Chain. Flag third-party-link: this page is the CA source. A Blockscout href path is 32 bytes 0xf652c273e7d047754607c567d0fd5bf43a81711ae52ea7c003f02f6d8418cb6c. Not listed as a 20-byte deployment." }
  - { id: R-11, publisher: DexScreener, title: "RALLY token pairs empty", url: "https://api.dexscreener.com/token-pairs/v1/robinhood/0x7daf6b4cc3eac752ae9a77967f78b15886aa1c89", published_at: null, accessed_at: 2026-09-23T13:35:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-17, CLM-30], excerpt: "HTTP 200 body []. Search https://api.dexscreener.com/latest/dex/search?q=0x7daf6b4cc3eac752ae9a77967f78b15886aa1c89 returned pairs []. No DexScreener pair URL this round." }
  - { id: R-12, publisher: DefiLlama, title: "protocol/rallypad", url: "https://api.llama.fi/protocol/rallypad", published_at: null, accessed_at: 2026-09-23T13:35:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-18], excerpt: "HTTP 400 body Protocol not found. No TVL attached." }
  - { id: R-13, publisher: DefiLlama, title: "protocol/rally-pad", url: "https://api.llama.fi/protocol/rally-pad", published_at: null, accessed_at: 2026-09-23T13:35:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-18], excerpt: "HTTP 400 body Protocol not found. No TVL attached." }
  - { id: R-14, publisher: GeckoTerminal, title: "RALLY token on robinhood", url: "https://api.geckoterminal.com/api/v2/networks/robinhood/tokens/0x7daf6b4cc3eac752ae9a77967f78b15886aa1c89", published_at: null, accessed_at: 2026-09-23T13:35:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-16, CLM-30], excerpt: "HTTP 200. name RallyPad symbol RALLY decimals 18. total_reserve_in_usd 1064.123292997. volume_usd.h24 0. price_usd null. fdv_usd null. market_cap_usd null. top_pools empty. This pass was HTTP 200." }
  - { id: R-15, publisher: GitHub, title: "harsharn10/proofline open pulls and census", url: "https://github.com/harsharn10/proofline/pulls", published_at: null, accessed_at: 2026-09-23T13:35:00Z, kind: other, authority: independent, authenticity: confirmed, supports: [CLM-11, CLM-12, CLM-13, CLM-23, CLM-25, CLM-28], excerpt: "Open PRs #163 arcus, #164 canopy, #165 twofold, #166 sluice, #167 mosaic, #168 greenwood, #169 scalar, #170 funded, #92 site stream. Census 182 slugs. No rallypad / rallypad.fun / 0x7daf6b4c row. accounts.yaml @rallypadfun watch/project, no slug. pools-trade carries the UERC20Factory and launch entry matched by the creation transaction." }
  - { id: R-16, publisher: bricks, title: "brickswall.tech", url: "https://brickswall.tech/", published_at: null, accessed_at: 2026-09-23T13:35:00Z, kind: official-site, authority: primary, authenticity: confirmed, supports: [CLM-24], excerpt: "HTTP 200. Title BRICK — brick by brick. Chain mode: live contracts on Robinhood Chain mainnet (4663). The bio address was not in the homepage HTML. Runner-up, not primary." }
  - { id: R-17, publisher: FixTweet, title: "api.fxtwitter.com/brickswalltech", url: "https://api.fxtwitter.com/brickswalltech", published_at: null, accessed_at: 2026-09-23T13:35:00Z, kind: social, authority: social, authenticity: confirmed, supports: [CLM-24], excerpt: "code 200. name bricks. description includes 0x7b7faa885c237faba733e7006e80149ba9224643. website https://brickswall.tech/how-it-works. location Robinhood Chain. followers 641 tweets 83. Runner-up, not primary." }
  - { id: R-18, publisher: Hooded, title: "hooded.meme", url: "https://hooded.meme/", published_at: null, accessed_at: 2026-09-23T13:35:00Z, kind: official-site, authority: primary, authenticity: confirmed, supports: [CLM-24], excerpt: "HTTP 200. Title Hooded. Launchpad. Meta description says fair-launch tokens on Hooded for Robinhood Chain. No 40-hex address in the HTML. Not packed." }
  - { id: R-19, publisher: FixTweet, title: "api.fxtwitter.com/HoodedDotMeme", url: "https://api.fxtwitter.com/HoodedDotMeme", published_at: null, accessed_at: 2026-09-23T13:35:00Z, kind: social, authority: social, authenticity: confirmed, supports: [CLM-24], excerpt: "code 200. name Hooded.Meme. description Made by @SwapHoodFi; Hooded.Meme launchpad on Robinhood. website https://Hooded.Meme. No contract address in the bio. Not packed." }
  - { id: R-20, publisher: FixTweet, title: "api.fxtwitter.com/MinteraNFT", url: "https://api.fxtwitter.com/MinteraNFT", published_at: null, accessed_at: 2026-09-23T13:35:00Z, kind: social, authority: social, authenticity: confirmed, supports: [CLM-24], excerpt: "code 200. name Mintera - NFT Marketplace. description Maintaince. website null this pass. Not packed." }
  - { id: R-21, publisher: FixTweet, title: "api.fxtwitter.com/fefehood", url: "https://api.fxtwitter.com/fefehood", published_at: null, accessed_at: 2026-09-23T13:35:00Z, kind: social, authority: social, authenticity: confirmed, supports: [CLM-24], excerpt: "code 200. name Fefe Hood. description is a meme line and https://t.me/fefehood. website https://fefe-hood.fun/. No contract address in the bio. Not packed." }
  - { id: R-22, publisher: fefe-hood.fun, title: "fefe-hood.fun HTTP 502", url: "https://fefe-hood.fun/", published_at: null, accessed_at: 2026-09-23T13:35:00Z, kind: other, authority: unknown, authenticity: unconfirmed, supports: [CLM-24], excerpt: "HTTPS GET returned HTTP 502 and an empty body this pass. Not packed." }
  - { id: R-23, publisher: RallyPad, title: "docs.rallypad.fun DNS", url: "https://docs.rallypad.fun/", published_at: null, accessed_at: 2026-09-23T13:35:00Z, kind: other, authority: unknown, authenticity: unconfirmed, supports: [CLM-31], excerpt: "DNS lookup failed: name or service not known. No page body." }
  - { id: R-24, publisher: RallyPad, title: "app.rallypad.fun DNS", url: "https://app.rallypad.fun/", published_at: null, accessed_at: 2026-09-23T13:35:00Z, kind: other, authority: unknown, authenticity: unconfirmed, supports: [CLM-31], excerpt: "DNS lookup failed: name or service not known. No page body." }
  - { id: R-25, publisher: FixTweet, title: "api.fxtwitter.com/rallypadfun/tweets", url: "https://api.fxtwitter.com/rallypadfun/tweets", published_at: null, accessed_at: 2026-09-23T13:35:00Z, kind: social, authority: social, authenticity: confirmed, supports: [CLM-20], excerpt: "HTTP 404 body code 404 Not found. No dated @rallypadfun status URL copied this round." }

gaps:
  - { area: identity, priority: P0, question: "Can a later seed keep rallypad.fun / @rallypadfun distinct from census pools-trade, given the token was created through that factory?", checked: "possible_matches recorded; census 182 slugs had no rallypad or 0x7daf6b4c row; homepage and X bio do not print the token address", next: "leave pools-trade and rallypad as separate records until a later assignment accepts a rallypad slug" }
  - { area: product, priority: P1, question: "Does /launch's locked-liquidity sentence match a live pool, given DexScreener and GeckoTerminal returned no pair and the 32-byte Hoodmarketcap id is not a 20-byte contract?", checked: "homepage and /launch HTML on 2026-09-23; eth_getCode empty on the leading 20 bytes of that id", next: "do not treat the 32-byte id as a contract; locate a pool id only from a read that returns one" }
  - { area: deployment, priority: P1, question: "Is there a RallyPad-operated factory, or only the shared pools.trade UERC20Factory and launch entry?", checked: "creation tx to 0x0000ffffbe8efe702c8703ae3477ff5de3d319c0; Blockscout creator 0x000000e200088D55C39a11F609E5F667729ad49b; site does not name either address", next: "do not list those two addresses as RallyPad deployments unless a RallyPad page names them" }
  - { area: control, priority: P1, question: "Who can change the token after owner() reverted, and does the creation sender have any remaining role?", checked: "owner() reverted; tx.from 0xef91cb70dd8d288213f7740b30ee457da1d869fb has no code; homepage names no timelock", next: "read the verified UERC20 source for admin slots before assigning an admin" }
  - { area: security, priority: P1, question: "Is there an audit whose scope matches this RALLY bytecode?", checked: "homepage and /launch HTML, 2026-09-23; the word audit does not appear; no report URL", next: "record any later report as a claim and match it to bytecode" }
  - { area: team, priority: P1, question: "Who operates rallypad.fun and @rallypadfun, and is there a repository?", checked: "site and handle cross-link; verification type on the profile is individual; no GitHub href on the homepage or /launch", next: "do not treat the creation sender as a named operator without a signed or documented link" }
  - { area: economics, priority: P2, question: "Is the GeckoTerminal reserve about $1,064 protocol TVL, and does Llama have a row?", checked: "GeckoTerminal reserve and h24 volume 0; DexScreener pairs empty; Llama rallypad and rally-pad Protocol not found, 2026-09-23", next: "keep the reserve off protocol TVL; do not attach a Llama number" }
  - { area: activity, priority: P2, question: "What is a real activity window if holders_count is 2 and 24h volume on GeckoTerminal is 0?", checked: "Blockscout holders_count 2; GeckoTerminal h24 0; DexScreener pairs []", next: "do not treat holders_count or a zero API volume as a seven-day activity window" }
  - { area: communications, priority: P1, question: "Which Telegram URL is the project's, and which dated @rallypadfun status URLs exist?", checked: "site hrefs t.me/rallypad; bio names t.me/rallypadchat; fxtwitter /tweets 404; signed-in X unavailable; no status id copied", next: "copy a status id only from a page that was opened; leave CON-1 open until the site links the bio URL or the bio changes" }
---

# Discovery inventory 2026-09-23 — research packet

## What it is

Robinhood Chain names that are not yet census rows. This round's lead is RallyPad. rallypad.fun presents a Uniswap v4 memecoin launchpad, with no presale and the same terms for everyone who shows up, and /launch says a coin opens as a Uniswap v4 pool on Robinhood Chain. The homepage links @rallypadfun and prints no contract address. RPC on chain 4663 reproduced 0x7daf6b4cc3eac752ae9a77967f78b15886aa1c89 as ERC-20 RallyPad, symbol RALLY, 18 decimals, supply 1e9, and 7154 bytes of code. Blockscout names the contract UERC20 and records the pools.trade token factory as its creator. Census slug pools-trade is that factory, not this token. Open discovery PRs #163 through #170 are not packed again.

Themes: uniswap-v4, launchpad, robinhood-chain, discovery

TL;DR: RallyPad token RALLY is on chain 4663; /launch names Robinhood, the homepage does not.

## Why it matters

- /launch says the coin opens as a Uniswap v4 pool on Robinhood Chain, and RPC reproduced RALLY on chain 4663 [verified R-4] [claim R-5]
- Homepage and the X website both use rallypad.fun, and the homepage links x.com/rallypadfun [verified R-1 R-2]
- Blockscout names contract UERC20; the creator hash is the pools.trade factory address [verified R-7] [claim R-15]

## What could go wrong

- The token address is absent from the homepage and the X bio, so the Hoodmarketcap page is the attribution source [claim R-2 R-10]
- Creation calls the pools.trade launch entry and UERC20 factory, shared infrastructure [verified R-4 R-7] [claim R-15]
- Homepage and /launch name no audit URL, and owner() on the token reverted [verified R-4] [unknown]

## Product and mechanics

The homepage calls RallyPad a Uniswap v4 memecoin launchpad and says there is no presale and that terms are the same for everyone who shows up. /launch says the coin opens as a Uniswap v4 pool on Robinhood Chain, trades from the first block, and that no liquidity is added or removed at breakout. /docs on the same host returned HTTP 404. docs.rallypad.fun and app.rallypad.fun did not resolve. [claim R-1 R-5 R-6]

## Control and security

owner() on the RALLY token reverted. The creation sender 0xef91cb70dd8d288213f7740b30ee457da1d869fb has no code. Blockscout marks the contract verified and names it UERC20, with creator hash 0x000000e200088D55C39a11F609E5F667729ad49b. The pools.trade record calls that hash its token factory. The homepage names no timelock. No audit URL was on the homepage or /launch. [verified R-4 R-7] [claim R-15]

## Team and provenance

rallypad.fun and @rallypadfun point at each other. The handle joined 18 January 2025, and the profile verification type is individual. The homepage hrefs https://t.me/rallypad. The bio names https://t.me/rallypadchat, which the site does not href. No repository URL was on the homepage, /launch, or the profile. The creation sender is not tied to a named person in these sources. [claim R-1 R-2]

## Economics and activity

At this read, GeckoTerminal showed a reserve of about $1,064.12, 24h volume 0, and null price, FDV, and market cap, with an empty pool list. DexScreener returned no pairs. DefiLlama returned Protocol not found for rallypad and rally-pad. Blockscout reported 2 holders. Hoodmarketcap is a third-party page for this token and shows a 32-byte pool id, not a 20-byte contract. These figures are not protocol TVL. [claim R-7 R-10 R-11 R-12 R-14]

## Material risks

- The official homepage and the X bio do not print the token address. [claim R-1 R-2]
- The creation path is the shared pools.trade factory, and the site does not name it. [verified R-7] [claim R-15]
- No audit URL was on the homepage or /launch. [unknown]

## Verification passes

- Receipts: the homepage, /launch, handle profile, Hoodmarketcap page, RPC, Blockscout API and address page, DexScreener, Llama, and GeckoTerminal were opened on 2026-09-23. [verified R-1 R-4 R-5 R-7 R-10]
- Numbers: the reserve, holder count, and supply are point readings for this token, not an all-chains protocol total. [claim R-7 R-14]
- Adversarial: the strongest contrary reading is that RALLY is only a pools.trade launcher token and that RallyPad is not a separate Robinhood Chain product because the homepage never says Robinhood. /launch does say Launch on Robinhood, and the homepage links @rallypadfun. That does not make RallyPad the same record as census pools-trade. [inference R-1 R-5 R-7]

## Operations log

- Main SHA read before branching: 8d889690ecaa9427403b7535d28753839e52ee65 (origin/main). Docs read: AGENTS.md, docs/ingestion.md, docs/integrations/grok-bot.md, docs/operating-flow.md, docs/research-system.md sections 4-7 and 10, docs/templates/research-packet-v2.md, skills/research-seed/SKILL.md. Census 182 slugs. accounts.yaml @rallypadfun is watch/project, note Programmable pad + livestream + fee routing, no slug.
- Open PRs including drafts: #163 through #170 are prior discovery inventories and are not duplicated. Primaries: #163 arcus, #164 canopy, #165 twofold, #166 sluice, #167 mosaic, #168 greenwood, #169 scalar, #170 funded. Floor is census slug floor. ArcLiquidity is census slug arc. #92 is a site stream. Ravenhood is not a census slug and was not packed.
- candidates listed: 1
- Signed-in X timeline was unavailable this run. api.fxtwitter.com/rallypadfun/tweets returned HTTP 404. No status id was invented.
- Gap query: @rallypadfun profile, rallypad.fun, /launch, and chain 4663 did not collapse to a census row or to #163-#170. Suggested later slug: rallypad. Inventory only. census.yaml was not written.
- Runner-up, not packed as primary: brickswalltech / @brickswalltech / brickswall.tech. Bio CA 0x7b7faa885c237faba733e7006e80149ba9224643 exists on 4663 (name Bricks, symbol BRICKS, 3248 B, supply 929182592385427079452677579 wei, about 929182592.385). Homepage names Robinhood Chain mainnet (4663) and does not print that CA. Packed lead is rallypad because the third-party token page name matched RPC name(). brickswall remains the next unpacked name.
- Thinner runner-ups: HoodedDotMeme / hooded.meme, bio has no CA, title Hooded. Launchpad. MinteraNFT, bio Maintaince, website null. fefehood / fefe-hood.fun HTTP 502. Already covered and not re-packed: Floor, Ravenhood, ArcLiquidity.
- Surfaces opened: www.rallypad.fun, rallypad.fun (redirects to www), /launch, /docs (404), docs.rallypad.fun and app.rallypad.fun (DNS fail), api.fxtwitter.com/rallypadfun and /tweets (404), Hoodmarketcap token page, DexScreener token-pairs and search (empty, HTTP 200), Llama rallypad and rally-pad (Protocol not found), GeckoTerminal token GET 200, Blockscout api/v2 200 and address HTML 200, RPC https://rpc.mainnet.chain.robinhood.com, brickswall.tech, hooded.meme, fefe-hood.fun, and the runner-up fxtwitter profiles.
- Addresses checked on 4663: RALLY 0x7daf6b4cc3eac752ae9a77967f78b15886aa1c89 exists_on_4663 true, explorer_source_verified true (Blockscout is_verified true, contract name UERC20). CA source: Hoodmarketcap, flag third-party-link; not in homepage HTML or the X bio. Creation tx 0x9fc919c0caabaaece49d6f972f89065ab0456c8d6ec99190ad4c3202c95998a8 at block 35553322, 2026-08-13T17:00:37Z. Hoodmarketcap pool href is 32 bytes and was not listed as a deployment; leading 20 bytes 0xf652c273e7d047754607c567d0fd5bf43a81711a have empty code. BRICKS 0x7b7faa885c237faba733e7006e80149ba9224643 exists, runner-up only.
- Metadata eth_blockNumber at the token read was 0x434957a (70555002). A later block read in the same pass was higher. Token name, symbol, decimals, and supply matched the first read.
- An RPC call without a user-agent returned HTTP 403. The recorded calls sent a browser user-agent and returned 200.
- Two site sentences were restated without a gated word: the homepage names no pre-public allocation, and /launch names no team allocation, no presale, and no waiting room.
- Candidate proposed: rallypad | RallyPad | @rallypadfun | rallypad.fun (coverage candidate; this file is inventory only).
- Rate limits and misses: signed-in X unavailable; fxtwitter /tweets 404; docs and app hostnames failed DNS; /docs HTTP 404; DexScreener returned empty HTTP 200; GeckoTerminal returned 200; Blockscout API returned 200. Stop after this packet.
