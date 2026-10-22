---
# Packet v2 (docs/research-system.md §5). Discovery inventory seed.
contract_version: proofline-research-v2
work_id: WORK-20260921-grok-bot-discovery-inventory
producer: grok-bot
role: collector
base_sha: dd17914ded0361b15e3a63c72c2364604c05f096
slug: discovery-inventory
name: Discovery inventory 2026-09-21
packet_tier: seed
as_of: 2026-09-21T14:00:00Z
prior_packet: null
supersedes: null
owned_slugs: [discovery-inventory]
allowed_paths:
  - research/inbox/packets/discovery-inventory/WORK-20260921-grok-bot-discovery-inventory.md

identity:
  crosslink_claim_ids: [CLM-2]
  canonical_name: Discovery inventory 2026-09-21
  aliases: []
  symbols: []
  entity_kind: unknown
  chain_scope: unknown
  official_domain: "NULL — inventory packet"
  official_handle: "NULL — inventory packet"
  repository: "NULL — inventory packet"
  possible_matches:
    - slug: arc
      signals: [other]
      contrary_signals:
        - "Census arc is Arc / Arc Liquidity / ArcLiquidity at arcliquidity.capital / @ArcLiquidity, primary leaf credit/isolated-money-market. Candidate Scalar is scalarliquidity.com / @scalarliquidity / SCL 0xBe92b334E045Bbfd292a28e54f8C75aF2FC07bBE. Category cousin (liquidity wording only). Not a merge. Do not re-inventory Arc as discovery."
    - slug: delta
      signals: [other]
      contrary_signals:
        - "Census delta is Delta / Delta Liquidity at deltaliquidity.app / @deltaliquidity, primary leaf yield/lp-manager. Candidate Scalar is scalarliquidity.com / @scalarliquidity / SCL 0xBe92b334…07bBE. Category cousin (liquidity layer / LP infra), different handle, domain, and token. Not a merge."
    - slug: snuggle
      signals: [other]
      contrary_signals:
        - "Census snuggle is Snuggle / SnuggleFi at snuggle.fi / @SnuggleFi, category Liquidity manager. Candidate Scalar is scalarliquidity.com / @scalarliquidity. Category cousin only; different handle and domain. Not a merge."

classification:
  primary_leaf: tooling/scanner
  secondary_leaves: []
  mechanism_tags: [other]
  ecosystem_role: observe
  lifecycle: unknown
  coverage_recommendation: candidate
  evidence_state: partly-verified
  rationale: "Weekday discovery round 2026-09-21. Suggested lead Scalar Liquidity / @scalarliquidity / scalarliquidity.com is not a census row and is not in open #163 (arcus), #164 (canopy), #165 (twofold), #166 (sluice), #167 (mosaic), or #168 (greenwood). Site FAQ names Scalar as liquidity infrastructure for Robinhood Chain; handle website is scalarliquidity.com and the bio names SCL 0xBe92b334E045Bbfd292a28e54f8C75aF2FC07bBE, reproduced on chain 4663 (name Scalar, symbol SCL, 18 decimals, totalSupply 1e9, 6054 B). Distinct from census arc (lending). Llama has no Scalar protocol row. If admitted later, proposed census slug scalar (or scalar-liquidity); entity_kind protocol; chain_scope robinhood-native; primary_leaf yield/lp-manager; lifecycle mainnet on the token+app evidence in this packet. Coverage recommendation: candidate (inventory only)."

qualifying:
  deployed_on_chain: { status: pass, claim_ids: [CLM-8], note: "" }
  native_play:       { status: pass, claim_ids: [CLM-7], note: "" }
  citable:           { status: pass, claim_ids: [CLM-2], note: "" }
  research_story:    { status: pass, claim_ids: [CLM-6], note: "" }

links:
  - { kind: site, url: "https://scalarliquidity.com/", authenticity: confirmed }
  - { kind: app, url: "https://app.scalarliquidity.com/", authenticity: confirmed }
  - { kind: x, url: "https://x.com/scalarliquidity", authenticity: confirmed }
  - { kind: other, url: "https://scalarliquidity.com/privacy-policy", authenticity: confirmed }
  - { kind: explorer, url: "https://robinhoodchain.blockscout.com/address/0xBe92b334E045Bbfd292a28e54f8C75aF2FC07bBE", authenticity: unconfirmed }
  - { kind: dexscreener, url: "https://dexscreener.com/robinhood/0x305d18bf4219ade3c36ae2a01fbfa354ca7b01bcad05320ce5c40fa0e16d3699", authenticity: confirmed }
  - { kind: other, url: "https://t.me/scalarliquidity", authenticity: unconfirmed }

deployments:
  - label: SCL token (RPC name Scalar, symbol SCL)
    role: token
    address:
      value: "0xBe92b334E045Bbfd292a28e54f8C75aF2FC07bBE"
      chain: robinhood-chain
      source: bio
      seen: 2026-09-21
      exists_on_4663: true
      explorer_source_verified: null
    receipt_ids: [R-2, R-4, R-5, R-10]

metrics:
  - { kind: market_cap, value: 9419, currency: USD, as_of: 2026-09-21T13:53:00Z, window: point, method: "api.dexscreener.com/latest/dex/tokens/0xBe92b334E045Bbfd292a28e54f8C75aF2FC07bBE Uniswap v4 SCL/ETH pair marketCap; pair-level, not a circulating-supply check", class: claim, receipt_ids: [R-5] }
  - { kind: volume_24h, value: 14.45, currency: USD, as_of: 2026-09-21T13:53:00Z, window: 24h, method: "api.dexscreener.com/latest/dex/tokens/0xBe92b334E045Bbfd292a28e54f8C75aF2FC07bBE Uniswap v4 SCL/ETH pair volume.h24; pair-level", class: claim, receipt_ids: [R-5] }

reproductions:
  - { id: REP-1, method: explorer-rpc, chain_id: 4663, checked_at: 2026-09-21T13:53:59Z, receipt_ids: [R-4], result: "eth_chainId 0x1237 (4663); eth_blockNumber 0x41a8995 (68848021). Token 0xBe92b334E045Bbfd292a28e54f8C75aF2FC07bBE eth_getCode 6054 B starting 0x60806040; name() Scalar; symbol() SCL; decimals() 18; totalSupply() 1e27 (1_000_000_000 SCL at 18 decimals); owner() reverted. Funded 0x98af77d765465928062c1aBB28DC7A8c0366c13E 3248 B name FUNDED Protocol symbol FUND. Bricks 0x7b7faa885c237faba733e7006e80149ba9224643 3248 B name Bricks symbol BRICKS. Arc token 0xce845443428867d271929bd739148b85524b536a 3248 B name ARC LIQUIDITY symbol ARC (census arc; not re-inventoried)." }
  - { id: REP-2, method: official-crosslink, chain_id: 4663, checked_at: 2026-09-21T13:54:00Z, receipt_ids: [R-1, R-2, R-5, R-7], result: "scalarliquidity.com title Scalar Liquidity: Robinhood Chain Liquidity Infrastructure; FAQ 1 Scalar is liquidity infrastructure for Robinhood Chain; footer Copyright © 2026 Scalar; links x.com/scalarliquidity and app.scalarliquidity.com; no 40-hex CA on the marketing homepage. @scalarliquidity website http://scalarliquidity.com and bio names $SCL 0xBe92b334E045Bbfd292a28e54f8C75aF2FC07bBE. DexScreener info.websites https://scalarliquidity.com/ and info.socials https://x.com/scalarliquidity. Privacy policy: Scalar provides liquidity infrastructure and market data for Robinhood Chain; UPDATED JUNE 20, 2026." }
  - { id: REP-3, method: api, chain_id: 4663, checked_at: 2026-09-21T13:53:00Z, receipt_ids: [R-5, R-6], result: "DexScreener one pair: chainId robinhood dexId uniswap labels [v4] pairAddress 0x305d18bf4219ade3c36ae2a01fbfa354ca7b01bcad05320ce5c40fa0e16d3699 (32-byte v4 pool id, not a 20-byte deployment) baseToken Scalar/SCL 0xBe92b334…07bBE quote Ether 0x000…000 liquidity.usd 8911.59 base 618375821 quote 0.9246 ETH volume.h24 14.45 marketCap 9419 fdv 9419 pairCreatedAt 1788036461000 (2026-08-29T20:47:41Z) websites scalarliquidity.com socials x.com/scalarliquidity and t.me/scalarliquidity. Llama GET /protocol/scalar HTTP 400 Protocol not found." }
  - { id: REP-4, method: document-scope, chain_id: 4663, checked_at: 2026-09-21T13:54:00Z, receipt_ids: [R-1, R-7, R-8], result: "Site: Liquidity infrastructure for modern markets; Deposit one asset; Set your range in market cap; Shape liquidity flat/center/edges; FAQ 1 Scalar is liquidity infrastructure for Robinhood Chain. FAQ items 2–5 were closed accordions with empty answer nodes in the HTML this pass. No 1% of claimed fees copy on the homepage. Privacy policy updated June 20, 2026. App https://app.scalarliquidity.com/ live Pools index (stock tokens and memecoins) with volume/fees/trades tables stamped as of 3 Sept 08:00; treated as self-reported market-data UI, not reproduced TVL. App token path /token/0xBe92b334…07bBE HTTP 404." }
  - { id: REP-5, method: explorer-ui, chain_id: 4663, checked_at: 2026-09-21T13:54:18Z, receipt_ids: [R-9, R-10], result: "GET robinhoodchain.blockscout.com/api/v2/addresses/0xBe92b334E045Bbfd292a28e54f8C75aF2FC07bBE HTTP 403 Cloudflare challenge HTML title Just a moment.... HTML address page 200 title Robinhood Chain address details for 0xBe92b334E045Bbfd292a28e54f8C75aF2FC07bBE | Blockscout. No verified-source flag recovered. explorer_source_verified left null. No invented creation tx." }

claims:
  - { id: CLM-1, field: candidate, value: "scalar | Scalar Liquidity | @scalarliquidity | scalarliquidity.com", class: claim, observed_at: 2026-09-21T13:54:00Z, receipt_ids: [R-1, R-2, R-3], reproduction_ids: [REP-2, REP-1], supersedes: null }
  - { id: CLM-2, field: identity.domain, value: "Official site scalarliquidity.com links x.com/scalarliquidity; the handle website is http://scalarliquidity.com and DexScreener websites/socials name the same pair of surfaces. Marketing homepage does not print the token CA; the CA is in the X bio.", class: verified, observed_at: 2026-09-21T13:54:00Z, receipt_ids: [R-1, R-2, R-5], reproduction_ids: [REP-2], supersedes: null }
  - { id: CLM-3, field: identity.handle, value: "@scalarliquidity", class: claim, observed_at: 2026-09-21T13:54:00Z, receipt_ids: [R-2, R-3], reproduction_ids: [], supersedes: null }
  - { id: CLM-4, field: identity.symbol, value: "SCL", class: verified, observed_at: 2026-09-21T13:53:59Z, receipt_ids: [R-2, R-4, R-5], reproduction_ids: [REP-1, REP-3], supersedes: null }
  - { id: CLM-5, field: identity.name, value: "RPC name() Scalar symbol() SCL at 0xBe92b334E045Bbfd292a28e54f8C75aF2FC07bBE; site title Scalar Liquidity; handle name Scalar", class: verified, observed_at: 2026-09-21T13:53:59Z, receipt_ids: [R-1, R-2, R-4], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-6, field: product.mechanism, value: "Site: concentrated liquidity with single-asset entry, market-cap ranges instead of ticks, and liquidity shapes (flat, center-weighted, or edge-weighted). FAQ 1: Scalar is liquidity infrastructure for Robinhood Chain; it combines market discovery with a simpler way to create and manage concentrated-liquidity positions. Copy also states no lockups, no exit penalties, and nothing is sold on the user's behalf after the position is created. A previously observed 1% of claimed fees line was not on the homepage or the 404 token path this pass.", class: claim, observed_at: 2026-09-21T13:54:00Z, receipt_ids: [R-1], reproduction_ids: [REP-4], supersedes: null }
  - { id: CLM-7, field: taxonomy.chain-scope, value: "robinhood-native. FAQ 1 and privacy policy both name Robinhood Chain. Handle website is scalarliquidity.com. App is a Robinhood Chain pool/market index UI.", class: claim, observed_at: 2026-09-21T13:54:00Z, receipt_ids: [R-1, R-7, R-8], reproduction_ids: [REP-2, REP-4], supersedes: null }
  - { id: CLM-8, field: deployment.address, value: "0xBe92b334E045Bbfd292a28e54f8C75aF2FC07bBE", class: verified, observed_at: 2026-09-21T13:53:59Z, receipt_ids: [R-2, R-4, R-5, R-10], reproduction_ids: [REP-1, REP-3], supersedes: null }
  - { id: CLM-9, field: lifecycle, value: "SCL bytecode is live on chain 4663 (6054 B). DexScreener Uniswap v4 SCL/ETH pairCreatedAt 2026-08-29T20:47:41Z. App pool index is live. Handle joined 2026-08-28. No soft-launch or beta wording on the homepage this pass. Token creation transaction hash was not recovered (Blockscout API 403).", class: claim, observed_at: 2026-09-21T13:54:18Z, receipt_ids: [R-2, R-4, R-5, R-8, R-9], reproduction_ids: [REP-1, REP-3, REP-5], supersedes: null }
  - { id: CLM-10, field: economics.metric, value: "DexScreener Uniswap v4 SCL/ETH liquidity.usd 8911.59 (base ~618375821 SCL, quote ~0.9246 ETH), marketCap 9419, fdv 9419, volume.h24 14.45 at access 2026-09-21T13:53:00Z. Pair-level third-party print; not verified protocol TVL. Llama has no Scalar protocol row.", class: claim, observed_at: 2026-09-21T13:53:00Z, receipt_ids: [R-5, R-6], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-11, field: activity.status, value: "app.scalarliquidity.com Pools tables list stock tokens and memecoins with volume/fees/trades (example FAMI 24h vol $139.83M / 135,173 trades). Footer stamp as of 3 Sept 08:00. Self-reported market-data UI; not independently reproduced TVL or volume.", class: claim, observed_at: 2026-09-21T13:53:00Z, receipt_ids: [R-8], reproduction_ids: [REP-4], supersedes: null }
  - { id: CLM-12, field: communications.status, value: "api.fxtwitter.com/scalarliquidity profile 200 (name Scalar, 779 followers, 46 tweets, website http://scalarliquidity.com, bio Concentrated liquidity, shaped. $SCL 0xBe92b334E045Bbfd292a28e54f8C75aF2FC07bBE). /tweets HTTP 404. No dated @scalarliquidity status URL was copied this round. Signed-in X timeline scout was not available (no computerUse).", class: claim, observed_at: 2026-09-21T13:55:00Z, receipt_ids: [R-2, R-18], reproduction_ids: [], supersedes: null }
  - { id: CLM-13, field: security.audit, value: "No audit report URL was located on scalarliquidity.com, the privacy policy, or the app index this round.", class: unknown, observed_at: 2026-09-21T13:54:00Z, receipt_ids: [], reproduction_ids: [], supersedes: null }
  - { id: CLM-14, field: relationship, value: "Keep distinct from census arc (Arc Liquidity / @ArcLiquidity / arcliquidity.capital, credit/isolated-money-market). ARC token 0xce845443428867d271929bd739148b85524b536a exists on 4663 (name ARC LIQUIDITY, 3248 B) and must not be re-inventoried as discovery. Shared word liquidity is not an identity.", class: verified, observed_at: 2026-09-21T13:53:59Z, receipt_ids: [R-4, R-11, R-16], reproduction_ids: [REP-1], supersedes: null }
  - { id: CLM-15, field: relationship, value: "Keep distinct from census delta (@deltaliquidity / deltaliquidity.app) and snuggle (@SnuggleFi / snuggle.fi). Those rows share LP-manager category only, not scalarliquidity.com / @scalarliquidity / SCL 0xBe92b334…07bBE.", class: claim, observed_at: 2026-09-21T13:54:00Z, receipt_ids: [R-1, R-2, R-11], reproduction_ids: [REP-2], supersedes: null }
  - { id: CLM-16, field: other, value: "This packet is filed on grok-bot/20260921/WORK-20260921-grok-bot-discovery-inventory. Prior open discovery PRs: #163 arcus, #164 canopy, #165 twofold, #166 sluice, #167 mosaic, #168 greenwood. #92 site trenches stream, no packet files. Floor is already a census slug. Not duplicated.", class: claim, observed_at: 2026-09-21T13:52:00Z, receipt_ids: [R-11], reproduction_ids: [], supersedes: null }
  - { id: CLM-17, field: other, value: "Rejected/runner-up this round (not packed as the primary candidate): ArcLiquidity already census slug arc; FundedProtocol / @FundedProtocol / thenews.gg (no bio CA; FUND 0x98af77d7…c13E exists on 4663); brickswalltech / @brickswalltech / brickswall.tech (bio CA 0x7b7faa88…4643 exists on 4663; site names Robinhood Chain mainnet 4663 but weaker concentrated-LP story); fefehood (no bio CA; fefe-hood.fun HTTP 502); HoodedDotMeme / Hooded.Meme (no bio CA this pass); MinteraNFT (bio not used); rallypadfun (no bio CA this pass); Ravenhood @RVHProtocol and Floor already covered.", class: claim, observed_at: 2026-09-21T13:56:00Z, receipt_ids: [R-4, R-11, R-12, R-13, R-14, R-15, R-19], reproduction_ids: [REP-1], supersedes: null }
  - { id: CLM-18, field: other, value: "content/accounts.yaml already lists @scalarliquidity as watch/project with no census slug. Census.yaml (182 slugs) has no scalar/scalarliquidity/SCL/scalarliquidity.com row.", class: claim, observed_at: 2026-09-21T13:52:00Z, receipt_ids: [R-11], reproduction_ids: [], supersedes: null }
  - { id: CLM-19, field: economics.metric, value: "GET api.llama.fi/protocol/scalar returned Protocol not found. No Llama TVL attached.", class: verified, observed_at: 2026-09-21T13:53:00Z, receipt_ids: [R-6], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-20, field: control.owner, value: "owner() on SCL 0xBe92b334…07bBE reverted. Blockscout verified-source flag unrecovered. No admin, proxy, or timelock address named on the homepage this pass.", class: verified, observed_at: 2026-09-21T13:53:59Z, receipt_ids: [R-4, R-9], reproduction_ids: [REP-1, REP-5], supersedes: null }
  - { id: CLM-21, field: product.mechanism, value: "Homepage HTML this pass did not include a 1% of claimed fees / never of principal sentence. App token path for the SCL CA returned HTTP 404. Fee split remains unpublished on the surfaces opened.", class: unknown, observed_at: 2026-09-21T13:54:00Z, receipt_ids: [], reproduction_ids: [], supersedes: null }
  - { id: CLM-22, field: taxonomy.primary-leaf, value: "scalar | yield/lp-manager", class: claim, observed_at: 2026-09-21T13:54:00Z, receipt_ids: [R-1], reproduction_ids: [REP-4], supersedes: null }
  - { id: CLM-23, field: taxonomy.entity-kind, value: "scalar | protocol", class: claim, observed_at: 2026-09-21T13:54:00Z, receipt_ids: [R-1, R-4], reproduction_ids: [REP-1, REP-4], supersedes: null }
  - { id: CLM-24, field: account.@scalarliquidity.slug, value: "If admitted later, map @scalarliquidity to proposed census slug scalar (or scalar-liquidity). Already watch/project in accounts.yaml with no slug. Inventory only; this packet does not write content/accounts.yaml.", class: claim, observed_at: 2026-09-21T13:54:00Z, receipt_ids: [R-2, R-11], reproduction_ids: [], supersedes: null }
  - { id: CLM-25, field: communications.status, value: "Follow-list and open-PR handles were profile-only this round via api.fxtwitter.com HTTP 200. No dated status IDs were captured (signed-in X timeline scout blocked; /tweets 404). Bios only: @uponrh native (3,3) exchange and liquidity layer, site up33.xyz; @deltaliquidity The liquidity layer of Robinhood, site deltaliquidity.app; @ArrowFinanceio The gateway for Robinhood DeFi; @ponsdotfamily Launch coins on Robinhood via ponsfamily.com/launchpad; @Hookrfun Hook Launchpad / Uniswap V4 Hooks, site hookr.fun; @whatthehookv4 MEV-in-hook, site whatthehook.io; @ClutchMarkets laboratory for decentralized onchain markets, stonkbrokers.io; @0xSammy KOL/alpha; @canopyfinance $CNPY 0x532c5583…87c54; @twofoldfi TWO CA 0x2A4a33A2…288d5; @sluice_rh CA 0xb48d34dd…885ec; @arcus_xyz; @MosaicETF MOSAIC CA 0x77665080…e025; @GwoodFinance Now in beta; @RVHProtocol no bio CA. Prior Sep 16–18 dated posts remain in older packets/PRs and are not re-announced here.", class: claim, observed_at: 2026-09-21T13:55:00Z, receipt_ids: [R-17, R-18], reproduction_ids: [], supersedes: null }
  - { id: CLM-26, field: other, value: "Runner-up FundedProtocol @FundedProtocol website thenews.gg (title thenews.gg — Your next win; By Funded Protocol; $FUND Litepaper link; no Robinhood Chain framing on the homepage copy copied this pass). Bio has no CA. FUND 0x98af77d765465928062c1aBB28DC7A8c0366c13E exists on 4663 (name FUNDED Protocol, symbol FUND, 3248 B). getfunded.xyz returned a Cloudflare challenge this pass and was not confirmed as a domain-for-sale page. Prefer Scalar (bio CA + RH-native marketing site).", class: claim, observed_at: 2026-09-21T13:56:00Z, receipt_ids: [R-4, R-12, R-13], reproduction_ids: [REP-1], supersedes: null }
  - { id: CLM-27, field: other, value: "Runner-up brickswalltech @brickswalltech bio CA 0x7b7faa885c237faba733e7006e80149ba9224643 exists on 4663 (name Bricks, symbol BRICKS, 3248 B). Site brickswall.tech describes yield/burn walls and states Chain mode: live contracts on Robinhood Chain mainnet (4663). Prefer Scalar for concentrated-LP infra plus market-cap-range story on the marketing homepage.", class: claim, observed_at: 2026-09-21T13:56:00Z, receipt_ids: [R-4, R-14, R-15], reproduction_ids: [REP-1], supersedes: null }

conflicts: []

events:
  - id: EVT-1
    type: onchain
    title: "Uniswap v4 SCL/ETH pair created on Robinhood Chain"
    summary: "DexScreener reports Uniswap v4 pair 0x305d18bf4219ade3c36ae2a01fbfa354ca7b01bcad05320ce5c40fa0e16d3699 for Scalar/SCL quoted in Ether on chain robinhood, pairCreatedAt 2026-08-29T20:47:41Z. The pair id is 32 bytes and is not listed as a 20-byte deployment."
    account: null
    occurred_at: 2026-08-29T20:47:41Z
    observed_at: 2026-09-21T13:53:00Z
    affected_fields: [deployment.address, activity.status]
    evidence_state: claim
    impact: routine
    site_recommendation: none
    channel_recommendation: none
    receipt_ids: [R-5]
    tag: launch-date

receipts:
  - { id: R-1, publisher: Scalar, title: "scalarliquidity.com", url: "https://scalarliquidity.com/", published_at: null, accessed_at: 2026-09-21T13:54:00Z, kind: official-site, authority: primary, authenticity: confirmed, supports: [CLM-1, CLM-2, CLM-5, CLM-6, CLM-7, CLM-15, CLM-21, CLM-22, CLM-23], excerpt: "title Scalar Liquidity: Robinhood Chain Liquidity Infrastructure. Liquidity infrastructure for modern markets. Deposit one asset. Set your range in market cap. FAQ 1: Scalar is liquidity infrastructure for Robinhood Chain. Footer Copyright © 2026 Scalar. Links https://x.com/scalarliquidity and https://app.scalarliquidity.com. No 40-hex CA on the marketing homepage." }
  - { id: R-2, publisher: FixTweet, title: "api.fxtwitter.com/scalarliquidity", url: "https://api.fxtwitter.com/scalarliquidity", published_at: null, accessed_at: 2026-09-21T13:54:00Z, kind: social, authority: social, authenticity: confirmed, supports: [CLM-1, CLM-2, CLM-3, CLM-4, CLM-5, CLM-8, CLM-9, CLM-12, CLM-15, CLM-24], excerpt: "code 200. screen_name scalarliquidity name Scalar id 2093484311060086784 followers 779 tweets 46 joined Fri Aug 28 23:44:02 +0000 2026. description Concentrated liquidity, shaped. $SCL 0xBe92b334E045Bbfd292a28e54f8C75aF2FC07bBE. website http://scalarliquidity.com." }
  - { id: R-3, publisher: X, title: "x.com/scalarliquidity", url: "https://x.com/scalarliquidity", published_at: null, accessed_at: 2026-09-21T13:54:00Z, kind: social, authority: social, authenticity: confirmed, supports: [CLM-1, CLM-3], excerpt: "Profile URL for handle @scalarliquidity. Profile fields were copied from api.fxtwitter.com/scalarliquidity. Direct x.com HTML was not used for bio text this round. No status id was copied." }
  - { id: R-4, publisher: Robinhood Chain RPC, title: "eth_getCode / eth_call chain 4663", url: "https://rpc.mainnet.chain.robinhood.com", published_at: null, accessed_at: 2026-09-21T13:53:59Z, kind: other, authority: onchain, authenticity: confirmed, supports: [CLM-4, CLM-5, CLM-8, CLM-9, CLM-14, CLM-17, CLM-20, CLM-23, CLM-26, CLM-27], excerpt: "eth_chainId 0x1237. SCL 0xBe92b334…07bBE 6054 B name Scalar symbol SCL decimals 18 totalSupply 1e27 owner() reverted. Funded 0x98af77d7…c13E 3248 B FUNDED Protocol/FUND. Bricks 0x7b7faa88…4643 3248 B Bricks/BRICKS. Arc 0xce845443…536a 3248 B ARC LIQUIDITY/ARC." }
  - { id: R-5, publisher: DexScreener, title: "SCL token pairs", url: "https://api.dexscreener.com/latest/dex/tokens/0xBe92b334E045Bbfd292a28e54f8C75aF2FC07bBE", published_at: null, accessed_at: 2026-09-21T13:53:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-2, CLM-4, CLM-8, CLM-9, CLM-10, EVT-1], excerpt: "chainId robinhood dexId uniswap labels v4 pair 0x305d18bf4219ade3c36ae2a01fbfa354ca7b01bcad05320ce5c40fa0e16d3699 SCL/ETH liquidity.usd 8911.59 volume.h24 14.45 marketCap 9419 pairCreatedAt 2026-08-29T20:47:41Z websites https://scalarliquidity.com/ socials https://x.com/scalarliquidity https://t.me/scalarliquidity. 32-byte v4 pool id not listed as a 20-byte deployment." }
  - { id: R-6, publisher: DefiLlama, title: "protocol/scalar", url: "https://api.llama.fi/protocol/scalar", published_at: null, accessed_at: 2026-09-21T13:53:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-10, CLM-19], excerpt: "HTTP 400 body Protocol not found. No TVL attached." }
  - { id: R-7, publisher: Scalar, title: "scalarliquidity.com/privacy-policy", url: "https://scalarliquidity.com/privacy-policy", published_at: 2026-06-20T00:00:00Z, accessed_at: 2026-09-21T13:53:00Z, kind: official-site, authority: primary, authenticity: confirmed, supports: [CLM-7], excerpt: "UPDATED : JUNE 20, 2026. Welcome to Scalar. Scalar provides liquidity infrastructure and market data for Robinhood Chain. This Privacy Policy explains what information may be collected when you use our website and services." }
  - { id: R-8, publisher: Scalar, title: "app.scalarliquidity.com", url: "https://app.scalarliquidity.com/", published_at: null, accessed_at: 2026-09-21T13:53:00Z, kind: official-site, authority: primary, authenticity: confirmed, supports: [CLM-7, CLM-9, CLM-11, CLM-21], excerpt: "title Scalar Liquidity. Heading Pools. Tables list stock tokens and memecoins with price, MC, Vol 24h, Fees 24h, Trades, Age. Footer stamp as of 3 Sept 08:00. Self-reported market-data UI, not independently reproduced TVL. GET /token/0xBe92b334E045Bbfd292a28e54f8C75aF2FC07bBE HTTP 404." }
  - { id: R-9, publisher: Blockscout, title: "api/v2 SCL address (Cloudflare 403)", url: "https://robinhoodchain.blockscout.com/api/v2/addresses/0xBe92b334E045Bbfd292a28e54f8C75aF2FC07bBE", published_at: null, accessed_at: 2026-09-21T13:54:18Z, kind: explorer, authority: onchain, authenticity: unconfirmed, supports: [CLM-9, CLM-20], excerpt: "HTTP 403. Cloudflare managed challenge HTML title Just a moment…. No JSON address record. Creation transaction hash, verified source name, creator, and holders_count not recovered. No invented creation tx." }
  - { id: R-10, publisher: Blockscout, title: "SCL address page", url: "https://robinhoodchain.blockscout.com/address/0xBe92b334E045Bbfd292a28e54f8C75aF2FC07bBE", published_at: null, accessed_at: 2026-09-21T13:54:18Z, kind: explorer, authority: onchain, authenticity: unconfirmed, supports: [CLM-8], excerpt: "HTTP 200. title Robinhood Chain address details for 0xBe92b334E045Bbfd292a28e54f8C75aF2FC07bBE | Blockscout. Generic address-page title; verified-source flag not recovered. explorer_source_verified left null. Reproduction used RH public RPC, not this UI flag." }
  - { id: R-11, publisher: GitHub, title: "harsharn10/proofline open pulls and census", url: "https://github.com/harsharn10/proofline/pulls", published_at: null, accessed_at: 2026-09-21T13:52:00Z, kind: other, authority: independent, authenticity: confirmed, supports: [CLM-14, CLM-15, CLM-16, CLM-17, CLM-18, CLM-24], excerpt: "Open PRs including drafts: #168 greenwood; #167 mosaic; #166 sluice; #165 twofold; #164 canopy; #163 arcus; #92 site trenches stream, no packet files. Census.yaml 182 slugs had no scalar/scalarliquidity/SCL/scalarliquidity.com. accounts.yaml lists @scalarliquidity watch/project with no census slug. Floor is a census slug. arc is a census slug." }
  - { id: R-12, publisher: FixTweet, title: "api.fxtwitter.com/FundedProtocol", url: "https://api.fxtwitter.com/FundedProtocol", published_at: null, accessed_at: 2026-09-21T13:55:00Z, kind: social, authority: social, authenticity: confirmed, supports: [CLM-17, CLM-26], excerpt: "code 200. screen_name fundedprotocol name FUNDED Protocol followers 350 tweets 85. description We fund your bets. You keep the profit. The first decentralized prop firm infrastructure. website http://thenews.gg. No contract address in the bio this round." }
  - { id: R-13, publisher: Funded Protocol, title: "thenews.gg", url: "https://thenews.gg/", published_at: null, accessed_at: 2026-09-21T13:56:00Z, kind: official-site, authority: primary, authenticity: confirmed, supports: [CLM-17, CLM-26], excerpt: "title thenews.gg — Your next win. By Funded Protocol. $FUND Litepaper. We fund your Bets. Get a funded account and start betting on real life events. Keep 80% of the profits. All accounts are 100% simulated. No Robinhood Chain sentence in the homepage copy copied this pass. GET /litepaper HTTP 404." }
  - { id: R-14, publisher: FixTweet, title: "api.fxtwitter.com/brickswalltech", url: "https://api.fxtwitter.com/brickswalltech", published_at: null, accessed_at: 2026-09-21T13:55:00Z, kind: social, authority: social, authenticity: confirmed, supports: [CLM-17, CLM-27], excerpt: "code 200. screen_name brickswalltech name bricks followers 643 tweets 83. description Buyback protection. Real backing. On every coin. 0x7b7faa885c237faba733e7006e80149ba9224643. website https://brickswall.tech/how-it-works. location Robinhood Chain." }
  - { id: R-15, publisher: bricks, title: "brickswall.tech", url: "https://brickswall.tech/", published_at: null, accessed_at: 2026-09-21T13:56:00Z, kind: official-site, authority: primary, authenticity: confirmed, supports: [CLM-17, CLM-27], excerpt: "title BRICK — brick by brick. Deposit ETH into the yield wall: earn BRICK from buyback fires plus ETH yield. Chain mode: live contracts on Robinhood Chain mainnet (4663). The Vault is a claimable backing mechanism, not a promise that market price cannot fall." }
  - { id: R-16, publisher: FixTweet, title: "api.fxtwitter.com/ArcLiquidity", url: "https://api.fxtwitter.com/ArcLiquidity", published_at: null, accessed_at: 2026-09-21T13:55:00Z, kind: social, authority: social, authenticity: confirmed, supports: [CLM-14], excerpt: "code 200. screen_name ArcLiquidity name Arc followers 398 tweets 47. description Put your assets into liquidity. Earn fees when markets trade. Borrow against the position without closing it. website https://arcliquidity.capital. Census slug arc; reject as discovery." }
  - { id: R-17, publisher: FixTweet, title: "follow-list profile sample api.fxtwitter.com/uponrh", url: "https://api.fxtwitter.com/uponrh", published_at: null, accessed_at: 2026-09-21T13:55:00Z, kind: social, authority: social, authenticity: confirmed, supports: [CLM-25], excerpt: "Follow-list and open-PR handles profile 200 this round (bios only; no status ids): uponrh native (3,3) exchange; deltaliquidity liquidity layer of Robinhood; ArrowFinanceio; ponsdotfamily; Hookrfun; whatthehookv4; ClutchMarkets; 0xSammy; canopyfinance CNPY CA; twofoldfi TWO CA; sluice_rh CA; arcus_xyz; MosaicETF MOSAIC CA; GwoodFinance Now in beta; RVHProtocol no bio CA." }
  - { id: R-18, publisher: FixTweet, title: "api.fxtwitter.com/scalarliquidity/tweets", url: "https://api.fxtwitter.com/scalarliquidity/tweets", published_at: null, accessed_at: 2026-09-21T13:55:00Z, kind: social, authority: social, authenticity: confirmed, supports: [CLM-12, CLM-25], excerpt: "HTTP 404. No dated @scalarliquidity status URL copied this round. Signed-in X timeline scout was not available in this collector executor (no computerUse). Bios were captured via fxtwitter profile API only." }
  - { id: R-19, publisher: fefe-hood.fun, title: "fefe-hood.fun (HTTP 502)", url: "https://fefe-hood.fun/", published_at: null, accessed_at: 2026-09-21T13:56:00Z, kind: other, authority: unknown, authenticity: unconfirmed, supports: [CLM-17], excerpt: "HTTPS GET returned HTTP 502 this pass. No bio CA was used for fefehood. Not packed." }

gaps:
  - { area: deployment, priority: P0, question: "What is the SCL token creation transaction hash on chain 4663, and does Blockscout verify source?", checked: "Blockscout api/v2 HTTP 403 Cloudflare 2026-09-21; RPC eth_getCode 6054 B name Scalar / SCL; HTML address page generic title", next: "retry Blockscout or another explorer for creation_transaction_hash and verified-source flag; do not invent a hash" }
  - { area: product, priority: P0, question: "What pool-manager, hook, and position-NFT addresses does Scalar use on 4663, and is the 1% of claimed fees line still current?", checked: "scalarliquidity.com HTML/FAQ, app index, app /token/SCL-CA 404, 2026-09-21; 1% copy not on homepage this pass; v4 pool id is 32 bytes", next: "open a live position or docs page if one appears; do not treat the DexScreener v4 pool id as a 20-byte deployment" }
  - { area: identity, priority: P0, question: "Does a later seed keep scalarliquidity.com distinct from census arc/delta/snuggle?", checked: "possible_matches recorded; census 182 slugs had no scalar/SCL/scalarliquidity.com; arc token reproduced and rejected", next: "controller disposition before compiling a scalar census row; never merge Arc Liquidity" }
  - { area: control, priority: P1, question: "Who can upgrade or pause Scalar liquidity engines, and does SCL have an owner after owner() revert?", checked: "owner() reverted; Blockscout unverified; homepage named no admin/timelock", next: "read verified source when explorer works; do not infer admin from a reverted owner()" }
  - { area: security, priority: P1, question: "Is there an audit whose scope matches the SCL token and the liquidity-shape contracts?", checked: "site, privacy policy, app index, 2026-09-21; no report URL copied", next: "ask in public and record the answer as a claim; match bytecode if a report appears" }
  - { area: team, priority: P1, question: "Who controls scalarliquidity.com / @scalarliquidity, and is there a repository?", checked: "site and handle cross-link; DexScreener websites/socials match; no GitHub link on the homepage this pass", next: "do not merge a deployer with the site or handle without a signed or on-chain link" }
  - { area: communications, priority: P1, question: "What dated @scalarliquidity status URLs exist for launch or fee announcements?", checked: "fxtwitter /tweets 404; profile 200; no status id copied; signed-in X timeline scout blocked (no computerUse) 2026-09-21", next: "retry Latest on @scalarliquidity when a signed-in X surface is available; copy a Scalar status id if recovered; do not invent one" }
  - { area: economics, priority: P2, question: "Is DexScreener pair liquidity ~$8,912 the live SCL/ETH pool, and is there a Llama protocol row for scalarliquidity.com?", checked: "DexScreener liquidity.usd 8911.59; Llama protocol/scalar 400; app tables stamped 3 Sept 08:00 not used as TVL", next: "keep pair-level DexScreener; do not attach app UI volumes as protocol TVL" }
  - { area: activity, priority: P2, question: "What 24h volume is the Uniswap v4 SCL/ETH pair versus app-index volumes for unrelated tokens?", checked: "DexScreener h24 14.45; app FAMI 24h vol $139.83M stamped 3 Sept 08:00; different subjects", next: "keep SCL pair-level DexScreener separate from the app market-index UI" }

---

# Discovery inventory 2026-09-21 — research packet

## What it is

Robinhood Chain names that are not yet census rows. This round's protocol lead is Scalar Liquidity: scalarliquidity.com describes concentrated-liquidity infrastructure for Robinhood Chain, with single-asset deposit, market-cap ranges instead of ticks, and liquidity shapes (flat, center, or edges). Official site links x.com/scalarliquidity; the handle website is scalarliquidity.com and the bio names SCL `0xBe92b334E045Bbfd292a28e54f8C75aF2FC07bBE`. RPC on chain 4663 reproduced that ERC-20 (name Scalar, symbol SCL, 18 decimals, total supply 1e9, 6054 B). Distinct from census arc (Arc Liquidity lending). Open discovery PRs #163–#168 are not duplicated.

Themes: concentrated-liquidity, lp-manager, market-cap-ranges, robinhood-chain, discovery

TL;DR: Scalar is Robinhood Chain concentrated-LP infrastructure; SCL exists at 0xBe92b334…07bBE and has no census row.

## Why it matters

- Site FAQ names Scalar as liquidity infrastructure for Robinhood Chain; handle bio names the SCL CA reproduced on 4663 [claim R-1 R-2 R-4]
- DexScreener Uniswap v4 SCL/ETH liquidity about $8,912 and market cap about $9,419; 24h volume about $14.45 [claim R-5]
- App shows a live pool index for stock tokens and memecoins; table stamped as of 3 Sept 08:00, not reproduced TVL [claim R-8]

## What could go wrong

- App market tables are self-reported and stamped as of 3 Sept 08:00 [claim R-8]
- DexScreener liquidity about $8,912 is pair-level, not protocol TVL; Llama has no Scalar row [claim R-5 R-6]
- owner() reverted; Blockscout API Cloudflare 403; no audit URL located; 1% fee copy not on homepage [verified R-4 R-9]

## Operations log

- Main SHA read: dd17914ded0361b15e3a63c72c2364604c05f096. Docs: AGENTS.md, ingestion.md, grok-bot.md, research-system.md §§4–7 and §10, research-packet-v2.md, admission-policy.md, skills/research-seed/SKILL.md, census.yaml (182 slugs), accounts.yaml (@scalarliquidity watch/project, no census slug).
- Open PRs including drafts: this packet is the 2026-09-21 inventory. #168 greenwood, #167 mosaic, #166 sluice, #165 twofold, #164 canopy, #163 arcus not duplicated. Floor is already census. Arc / ArcLiquidity is already census slug `arc` (reject). #92 site trenches stream; no packet files.
- candidates listed: 1
- Signed-in X timeline scout was blocked this round: no computerUse / Screenshot / signed-in X browser surface in this collector executor. Follow-list status URLs/ids for new dated posts were therefore not captured. Do not invent tweets or status IDs. Bios were captured via public fxtwitter profile API 2026-09-21 only. api.fxtwitter.com/scalarliquidity/tweets HTTP 404. Prior Sep 16–18 dated claims remain in older packets/PRs and are not re-announced here without URLs.
- Follow-list bios (fxtwitter 200, not dated posts): @uponrh “The native (3,3) exchange and liquidity layer of Robinhood Chain.” site up33.xyz; @deltaliquidity “The liquidity layer of Robinhood” site deltaliquidity.app; @ArrowFinanceio “The gateway for Robinhood DeFi…”; @ponsdotfamily Launch coins on Robinhood via ponsfamily.com/launchpad; @Hookrfun Hook Launchpad / Uniswap V4 Hooks; site hookr.fun; @whatthehookv4 MEV-in-hook; site whatthehook.io; @ClutchMarkets laboratory for decentralized onchain markets; stonkbrokers.io; @0xSammy KOL/alpha; @scalarliquidity bio with SCL CA (primary); @brickswalltech and @FundedProtocol runners. Open-PR handles still active (bios only): @canopyfinance (CNPY CA in bio), @twofoldfi (TWO CA), @sluice_rh (CA), @arcus_xyz, @MosaicETF (MOSAIC CA), @GwoodFinance, @RVHProtocol (no bio CA).
- Gap query: @scalarliquidity profile bio + site + on-chain + DexScreener as packed. Scalar / @scalarliquidity / scalarliquidity.com did not collapse to a census row or to #163–#168. Category cousins arc, delta, snuggle recorded under possible_matches. Suggested later census slug: scalar (or scalar-liquidity). Inventory only; census.yaml not written.
- Rejected this round (ops one-liners; not packed as primary): (1) ArcLiquidity / @ArcLiquidity / arcliquidity.capital — REJECT already census slug `arc`; ARC token 0xce845443428867d271929bd739148b85524b536a 3248 B name ARC LIQUIDITY on 4663. (2) FundedProtocol / @FundedProtocol / thenews.gg — runner-up, no bio CA; site thenews.gg By Funded Protocol / $FUND Litepaper (GET /litepaper 404 this pass); FUND 0x98af77d765465928062c1aBB28DC7A8c0366c13E 3248 B name FUNDED Protocol; getfunded.xyz Cloudflare challenge this pass, not confirmed as a sale page. (3) brickswalltech / @brickswalltech / brickswall.tech — runner-up, bio CA 0x7b7faa885c237faba733e7006e80149ba9224643 3248 B name Bricks; site names Robinhood Chain mainnet (4663) and buyback/yield walls; prefer Scalar’s concentrated-LP + market-cap-range homepage story. (4) fefehood — no bio CA; fefe-hood.fun HTTP 502. (5) HoodedDotMeme / Hooded.Meme — no bio CA this pass. (6) MinteraNFT — not packed. (7) rallypadfun — no bio CA this pass. (8) Ravenhood / Floor / #163–#168 — already covered.
- Surfaces opened: scalarliquidity.com (FAQ 1 visible; FAQ 2–5 empty accordion nodes), privacy-policy (updated June 20, 2026), app.scalarliquidity.com, app token path 404, api.fxtwitter.com profiles (scalarliquidity, FundedProtocol, brickswalltech, ArcLiquidity, uponrh, deltaliquidity, ArrowFinanceio, ponsdotfamily, Hookrfun, whatthehookv4, ClutchMarkets, 0xSammy, canopyfinance, twofoldfi, sluice_rh, arcus_xyz, MosaicETF, GwoodFinance, RVHProtocol) and scalarliquidity/tweets 404, DexScreener token API, Llama protocol/scalar, Blockscout api/v2 (403) and HTML address page, RPC https://rpc.mainnet.chain.robinhood.com, thenews.gg, brickswall.tech, fefe-hood.fun, getfunded.xyz (Cloudflare).
- Addresses checked on 4663: SCL 0xBe92b334E045Bbfd292a28e54f8C75aF2FC07bBE exists_on_4663 true, explorer_source_verified null, 6054 B, name Scalar / SCL, owner() reverted. Uniswap v4 pool id 0x305d18bf…3699 is 32 bytes and was not listed as a 20-byte deployment. Funded 0x98af77d7…c13E 3248 B. Bricks 0x7b7faa88…4643 3248 B. Arc 0xce845443…536a 3248 B (census arc).
- Candidate proposed: scalar | Scalar Liquidity | @scalarliquidity | scalarliquidity.com (coverage candidate; this file is inventory only).
- Rate limits: collector X /tweets 404; Blockscout API Cloudflare 403; signed-in X computerUse unavailable. Stop after this packet.
