---
# Packet v2 full backfill. Task 7d6a46d05bed01f6c679 (#132).
contract_version: proofline-research-v2
work_id: WORK-20260910-grok-heavy-circus
producer: grok-heavy
role: collector
base_sha: 422d4a5d33b5144bcfa725d264272be0b691e3f9
slug: circus
name: Circus
packet_tier: full
as_of: 2026-09-10T18:30:00Z
prior_packet: research/inbox/packets/circus/WORK-20260903-grok-heavy-icarus-research.md@422d4a5d33b5144bcfa725d264272be0b691e3f9
supersedes: null
owned_slugs: [circus]
allowed_paths:
  - research/inbox/packets/circus/WORK-20260910-grok-heavy-circus.md

identity:
  crosslink_claim_ids: [CLM-3]
  canonical_name: Circus
  aliases: ["Circus Trade", "circus.trade"]
  symbols: []
  entity_kind: protocol
  chain_scope: robinhood-native
  official_domain: https://circus.trade
  official_handle: "@circus_trade"
  repository: "NULL — no repository URL on circus.trade, /how-it-works or the @circus_trade bio this pass"
  possible_matches:
    - slug: pons
      signals: [other]
      contrary_signals:
        - "Census Pons is ponsfamily.com / @ponsdotfamily"
        - "Circus is circus.trade / @circus_trade with launchpad proxy 0xb7fA…cb00"
        - "No shared domain, handle or reproduced address"
    - slug: doppler
      signals: [other]
      contrary_signals:
        - "Docs say Fair Open is powered by Doppler; that is a dependency, not identity"
        - "Official surfaces remain circus.trade / @circus_trade"

classification:
  primary_leaf: launch/bonding-curve
  secondary_leaves: [launch/uni-pool-launch]
  mechanism_tags: [launchpad, bonding-curve, amm, stock-paired]
  ecosystem_role: subject
  lifecycle: mainnet
  coverage_recommendation: seed
  evidence_state: partly-verified
  rationale: "JS barcusLaunchpad 0xb7fA…cb00 remains an ERC1967 proxy with 130-byte code; owner() 0x90Ae…0681; implementation 0x822E…2B96 still unverified this pass. Homepage says Uniswap v3 graduation; /how-it-works says Uniswap v4. [CLM-4] [CLM-14]"

qualifying:
  deployed_on_chain: { status: pass, claim_ids: [CLM-4, CLM-5, CLM-6], note: "" }
  native_play:       { status: pass, claim_ids: [CLM-1], note: "" }
  citable:           { status: pass, claim_ids: [CLM-2, CLM-3], note: "" }
  research_story:    { status: pass, claim_ids: [CLM-1, CLM-14], note: "" }

links:
  - { kind: site, url: "https://circus.trade", authenticity: confirmed }
  - { kind: app, url: "https://circus.trade/create", authenticity: confirmed }
  - { kind: docs, url: "https://circus.trade/how-it-works", authenticity: confirmed }
  - { kind: x, url: "https://x.com/circus_trade", authenticity: confirmed }
  - { kind: other, url: "https://dune.com/0x_emerson/robinhood-memecoin-launchpads-comparison-30d", authenticity: unconfirmed }

deployments:
  - label: barcusLaunchpad / circusQuoteLaunchpad (ERC1967 proxy)
    role: factory
    address: { value: "0xb7fA26c6fcB8801cAbc538B82A6e80Ae1C43cb00", chain: robinhood-chain, source: docs, seen: 2026-09-03, exists_on_4663: true, explorer_source_verified: false }
    receipt_ids: [R-4]
  - label: Launchpad implementation (ERC1967 slot)
    role: implementation
    address: { value: "0x822E175C1ae12166A0Ea3299d083Da48E6C42B96", chain: robinhood-chain, source: explorer, seen: 2026-09-03, exists_on_4663: true, explorer_source_verified: false }
    receipt_ids: [R-5]
  - label: CircusLocker (barcusLocker)
    role: other
    address: { value: "0xA256bC02dbB92ed1cB607a7DE7b0bbEBca29e930", chain: robinhood-chain, source: docs, seen: 2026-09-03, exists_on_4663: true, explorer_source_verified: null }
    receipt_ids: [R-6]
  - label: JS barcusTimelock
    role: timelock
    address: { value: "0xC126829B4b3782ad30484b298C762507bf9bCa2A", chain: robinhood-chain, source: docs, seen: 2026-09-03, exists_on_4663: true, explorer_source_verified: null }
    receipt_ids: [R-7]
  - label: Launchpad owner() / factory creator
    role: admin
    address: { value: "0x90Ae1f7Ded5B00599bF6BFdea6A1EF1f05FA0681", chain: robinhood-chain, source: explorer, seen: 2026-09-03, exists_on_4663: true, explorer_source_verified: null }
    receipt_ids: [R-8]
  - label: circusQuoteLocker
    role: other
    address: { value: "0xF421C3977E5D5Fc4aBe50195391970a6AB1d2B7D", chain: robinhood-chain, source: docs, seen: 2026-09-03, exists_on_4663: true, explorer_source_verified: null }
    receipt_ids: [R-9]

metrics:
  - { kind: volume_24h, value: 147032, currency: USD, as_of: 2026-09-10, window: 24h, method: "DexScreener CRUDECAT/USO Uniswap v3 pair volume.h24; CRUDECAT is listed on circus.trade, not proof the pair is the Circus graduation pool", class: claim, receipt_ids: [R-10] }

reproductions:
  - { id: REP-1, method: explorer-rpc, chain_id: 4663, checked_at: 2026-09-10T18:24:00Z, receipt_ids: [R-4], result: "eth_getCode 130 bytes at 0xb7fA…cb00; owner() 0x90Ae…0681; ERC1967 impl slot 0x822E…2B96" }
  - { id: REP-2, method: explorer-rpc, chain_id: 4663, checked_at: 2026-09-10T18:24:00Z, receipt_ids: [R-5], result: "eth_getCode 24061 bytes at 0x822E…2B96; owner() zero address" }
  - { id: REP-3, method: explorer-rpc, chain_id: 4663, checked_at: 2026-09-10T18:24:00Z, receipt_ids: [R-6], result: "eth_getCode 4662 bytes at 0xA256…e930; owner() reverted" }
  - { id: REP-4, method: explorer-rpc, chain_id: 4663, checked_at: 2026-09-10T18:24:00Z, receipt_ids: [R-7], result: "eth_getCode 5497 bytes at 0xC126…a2A; owner() reverted; getMinDelay() reverted" }
  - { id: REP-5, method: explorer-rpc, chain_id: 4663, checked_at: 2026-09-10T18:24:00Z, receipt_ids: [R-8], result: "eth_getCode empty at 0x90Ae…0681" }
  - { id: REP-6, method: explorer-rpc, chain_id: 4663, checked_at: 2026-09-10T18:24:00Z, receipt_ids: [R-9], result: "eth_getCode 4180 bytes at 0xF421…2B7D; owner() reverted" }
  - { id: REP-7, method: official-crosslink, chain_id: 4663, checked_at: 2026-09-10T18:20:00Z, receipt_ids: [R-1, R-2, R-3], result: "Site footer/docs and @circus_trade bio both name circus.trade" }

claims:
  - { id: CLM-1, field: product.mechanism, value: "Classic Curve sells a fixed-supply token on an ETH bonding curve then graduates into a locked Uniswap pool; Fair Open is described as a Doppler locked Uniswap v4 pool with no bonding phase", class: claim, observed_at: 2026-09-10T18:20:00Z, receipt_ids: [R-1, R-2], reproduction_ids: [], supersedes: null }
  - { id: CLM-2, field: identity.domain, value: "https://circus.trade", class: claim, observed_at: 2026-09-03T04:20:00Z, receipt_ids: [R-1], reproduction_ids: [], supersedes: null }
  - { id: CLM-3, field: identity.handle, value: "circus.trade and @circus_trade name the same launchpad; X bio links circus.trade", class: claim, observed_at: 2026-09-10T18:20:00Z, receipt_ids: [R-1, R-2, R-3], reproduction_ids: [REP-7], supersedes: null }
  - { id: CLM-4, field: deployment.address, value: "barcusLaunchpad proxy 0xb7fA26c6fcB8801cAbc538B82A6e80Ae1C43cb00", class: verified, observed_at: 2026-09-10T18:24:00Z, receipt_ids: [R-4], reproduction_ids: [REP-1], supersedes: null }
  - { id: CLM-5, field: deployment.address, value: "Launchpad implementation 0x822E175C1ae12166A0Ea3299d083Da48E6C42B96", class: verified, observed_at: 2026-09-10T18:24:00Z, receipt_ids: [R-5], reproduction_ids: [REP-2], supersedes: null }
  - { id: CLM-6, field: deployment.address, value: "CircusLocker 0xA256bC02dbB92ed1cB607a7DE7b0bbEBca29e930", class: verified, observed_at: 2026-09-10T18:24:00Z, receipt_ids: [R-6], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-7, field: deployment.address, value: "JS barcusTimelock 0xC126829B4b3782ad30484b298C762507bf9bCa2A", class: verified, observed_at: 2026-09-10T18:24:00Z, receipt_ids: [R-7], reproduction_ids: [REP-4], supersedes: null }
  - { id: CLM-8, field: deployment.address, value: "Launchpad owner EOA 0x90Ae1f7Ded5B00599bF6BFdea6A1EF1f05FA0681", class: verified, observed_at: 2026-09-10T18:24:00Z, receipt_ids: [R-8], reproduction_ids: [REP-5], supersedes: null }
  - { id: CLM-9, field: deployment.address, value: "circusQuoteLocker 0xF421C3977E5D5Fc4aBe50195391970a6AB1d2B7D", class: verified, observed_at: 2026-09-10T18:24:00Z, receipt_ids: [R-9], reproduction_ids: [REP-6], supersedes: null }
  - { id: CLM-10, field: control.owner, value: "Launchpad proxy owner() is EOA 0x90Ae…0681 with empty code; implementation owner() is the zero address; labeled timelock getMinDelay() reverts and is not the proxy owner", class: verified, observed_at: 2026-09-10T18:24:00Z, receipt_ids: [R-4, R-5, R-7, R-8], reproduction_ids: [REP-1, REP-2, REP-4, REP-5], supersedes: null }
  - { id: CLM-11, field: security.audit, value: "how-it-works says every circus token is minted from the same audited factory; no report URL on site, docs or X this pass", class: unknown, observed_at: 2026-09-10T18:20:00Z, receipt_ids: [R-2, R-3], reproduction_ids: [], supersedes: null }
  - { id: CLM-12, field: team.identity, value: "No named legal entity or named maintainers on site, docs or X bio", class: unknown, observed_at: 2026-09-10T18:20:00Z, receipt_ids: [R-1, R-2, R-3], reproduction_ids: [], supersedes: null }
  - { id: CLM-13, field: communications.status, value: "@circus_trade still posts launch marketing; no audit or implementation-source post located this pass", class: claim, observed_at: 2026-09-10T18:20:00Z, receipt_ids: [R-3], reproduction_ids: [], supersedes: null }
  - { id: CLM-14, field: product.mechanism, value: "Homepage hero still says graduation to Uniswap v3; /how-it-works now says the curve graduates atomically to Uniswap v4 and LP is locked forever", class: disputed, observed_at: 2026-09-10T18:20:00Z, receipt_ids: [R-1, R-2], reproduction_ids: [], supersedes: null }
  - { id: CLM-15, field: activity.status, value: "Homepage printed Raised on Curves $1.22M and Graduated Tokens 48; CRUDECAT is listed on the board", class: claim, observed_at: 2026-09-10T18:20:00Z, receipt_ids: [R-1], reproduction_ids: [], supersedes: null }
  - { id: CLM-16, field: lifecycle, value: mainnet, class: verified, observed_at: 2026-09-10T18:24:00Z, receipt_ids: [R-4], reproduction_ids: [REP-1], supersedes: null }

conflicts:
  - { id: CON-1, field: product.mechanism, claim_ids: [CLM-1, CLM-14], material_effect: "Readers cannot tell from official copy whether Classic Curve IPO lands in Uniswap v3 or v4", status: open, resolution: null }

events:
  - id: EVT-1
    type: onchain
    title: Launchpad owner is still a single EOA
    summary: owner() on proxy 0xb7fA…cb00 returned 0x90Ae…0681 with empty code. The JS-labeled timelock 0xC126…a2A still has code but getMinDelay() reverted and is not the proxy owner.
    account: null
    occurred_at: 2026-09-10T18:24:00Z
    observed_at: 2026-09-10T18:24:00Z
    affected_fields: [control.owner]
    evidence_state: verified
    impact: material
    site_recommendation: none
    channel_recommendation: none
    receipt_ids: [R-4, R-7, R-8]

receipts:
  - { id: R-1, publisher: Circus Trade, title: "Homepage", url: "https://circus.trade", published_at: null, accessed_at: 2026-09-10T18:20:00Z, kind: official-site, authority: primary, authenticity: confirmed, supports: [CLM-1, CLM-2, CLM-3, CLM-14, CLM-15], excerpt: "Every coin starts on a transparent bonding curve priced in ETH. When the curve fills at ~4.2 ETH raised, it graduates to Uniswap v3 automatically, with liquidity locked forever. Raised on Curves $1.22M. Graduated Tokens 48." }
  - { id: R-2, publisher: Circus Trade, title: "How it works", url: "https://circus.trade/how-it-works", published_at: null, accessed_at: 2026-09-10T18:20:00Z, kind: docs, authority: primary, authenticity: confirmed, supports: [CLM-1, CLM-3, CLM-11, CLM-14], excerpt: "When the curve raises ~$6k, it graduates atomically — in one transaction the raise plus remaining tokens become a Uniswap v4 pool, and the LP is locked forever. Fair Open LIVE, powered by Doppler. Every circus token is minted from the same audited factory." }
  - { id: R-3, publisher: Circus Trade, title: "@circus_trade profile", url: "https://x.com/circus_trade", published_at: null, accessed_at: 2026-09-10T18:20:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [CLM-3, CLM-13], excerpt: "Bio: circus.trade The Greatest Show. Pinned Jul 20 welcome post. No audit URL in the visible posts this pass." }
  - { id: R-4, publisher: Robinhood RPC, title: "eth_getCode/owner launchpad proxy", url: "https://robinhoodchain.blockscout.com/address/0xb7fA26c6fcB8801cAbc538B82A6e80Ae1C43cb00", published_at: null, accessed_at: 2026-09-10T18:24:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-4, CLM-10, EVT-1], excerpt: "eth_getCode 130 bytes; owner() 0x90Ae1f7Ded5B00599bF6BFdea6A1EF1f05FA0681; impl slot 0x822E…2B96" }
  - { id: R-5, publisher: Robinhood RPC, title: "eth_getCode implementation", url: "https://robinhoodchain.blockscout.com/address/0x822E175C1ae12166A0Ea3299d083Da48E6C42B96", published_at: null, accessed_at: 2026-09-10T18:24:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-5, CLM-10], excerpt: "eth_getCode 24061 bytes; owner() zero address; Blockscout REST blocked this pass so source name remains unread" }
  - { id: R-6, publisher: Robinhood RPC, title: "eth_getCode CircusLocker", url: "https://robinhoodchain.blockscout.com/address/0xA256bC02dbB92ed1cB607a7DE7b0bbEBca29e930", published_at: null, accessed_at: 2026-09-10T18:24:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-6], excerpt: "eth_getCode 4662 bytes; owner() reverted" }
  - { id: R-7, publisher: Robinhood RPC, title: "eth_getCode/getMinDelay timelock", url: "https://robinhoodchain.blockscout.com/address/0xC126829B4b3782ad30484b298C762507bf9bCa2A", published_at: null, accessed_at: 2026-09-10T18:24:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-7, CLM-10, EVT-1], excerpt: "eth_getCode 5497 bytes; owner() reverted; getMinDelay() execution reverted" }
  - { id: R-8, publisher: Robinhood RPC, title: "eth_getCode owner EOA", url: "https://robinhoodchain.blockscout.com/address/0x90Ae1f7Ded5B00599bF6BFdea6A1EF1f05FA0681", published_at: null, accessed_at: 2026-09-10T18:24:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-8, CLM-10, EVT-1], excerpt: "eth_getCode empty" }
  - { id: R-9, publisher: Robinhood RPC, title: "eth_getCode circusQuoteLocker", url: "https://robinhoodchain.blockscout.com/address/0xF421C3977E5D5Fc4aBe50195391970a6AB1d2B7D", published_at: null, accessed_at: 2026-09-10T18:24:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-9], excerpt: "eth_getCode 4180 bytes; owner() reverted" }
  - { id: R-10, publisher: DexScreener, title: "CRUDECAT token pairs", url: "https://api.dexscreener.com/latest/dex/tokens/0xbd957cc9f1e94617792f37bc40f2f299e78acf3e", published_at: null, accessed_at: 2026-09-10T18:24:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [], excerpt: "Largest pair Uniswap v3 CRUDECAT/USO 0xc3a8…8BeD liquidity.usd 166860 volume.h24 147032. Not itself proof of Circus graduation routing." }

gaps:
  - { area: security, priority: P1, question: "Is there an audit report whose scope matches factory 0xb7fA…cb00 and CircusLocker 0xA256…e930?", checked: "how-it-works, homepage, @circus_trade, 2026-09-10", next: "record any published report URL and match bytecode" }
  - { area: team, priority: P1, question: "Who controls EOA 0x90Ae…0681, and is there a legal entity?", checked: "site, docs, X bio, 2026-09-10", next: "public attribution or a Safe/timelock that actually owns the proxy" }
  - { priority: P0, question: "Is launchpad implementation 0x822E…2B96 source-verified anywhere, and what is its source name?", checked: "RPC 24061-byte code; Blockscout REST HTML/Cloudflare this pass; owner() zero, 2026-09-10", next: "read verified source if it lands" }
  - { priority: P0, question: "Does a graduated Circus pair land in Uniswap v3 or v4, and which pool manager / nfpm is used?", checked: "Homepage v3 vs docs v4; CRUDECAT's deepest DexScreener book is a Uniswap v3 USO pair, which is not a factory log, 2026-09-10", next: "eth_getLogs or a create/graduate tx against PoolManager 0x8366…0951 and v3 factory 0x1f7d…2EfA" }
  - { area: economics, priority: P2, question: "Can homepage Raised on Curves $1.22M and Graduated Tokens 48 be reproduced from factory events?", checked: "homepage strings only; no Llama circus protocol; DexScreener CRUDECAT pair is not factory volume, 2026-09-10", next: "sum curve/graduate events on 0xb7fA…cb00" }

---

# Circus — research packet

## What it is

Circus is a Robinhood Chain token launchpad at circus.trade. Classic Curve launches a fixed-supply token onto an ETH bonding curve and graduates into a locked Uniswap pool. A second Fair Open lane is described as a Doppler locked Uniswap v4 pool with no bonding phase. The handle linked from the site is @circus_trade.

Themes: launchpad

TL;DR: ETH bonding-curve pad whose proxy is live on 4663; official copy disagrees on whether IPO is Uniswap v3 or v4, and the implementation is still unverified. [CLM-1 CLM-14 CLM-5]

## Why it matters

- Thesis: a public ETH curve plus a claimed locked IPO is the product, not a private raise [CLM-1].
- Traction: homepage printed 48 graduated tokens and $1.22M raised on curves [CLM-15].
- Catalyst: implementation source and the v3/v4 IPO path still unread [CLM-5 CLM-14].

## What could go wrong

- Proxy owner() is a single EOA; the labeled timelock does not own it [CLM-10].
- Homepage and docs disagree on Uniswap v3 vs v4 graduation [CLM-14].
- No audit artifact was located despite "audited factory" copy [CLM-11].

## Product and mechanics

Classic Curve: 1B supply, 800M on the curve, ~4.2 ETH / ~$6k raise, then an atomic move into a locked Uniswap pool. Fair Open is marked LIVE and described as Doppler multicurve Uniswap v4 with a decaying sniper tax. [claim R-2]

The homepage hero still says Uniswap v3. That is an official-copy conflict, not a resolved routing fact. [disputed R-1 R-2]

## Control and security

The launchpad proxy is 130 bytes of ERC1967 code. owner() is 0x90Ae…0681 with empty code. Implementation 0x822E…2B96 has 24061 bytes; owner() is zero. JS barcusTimelock has code but getMinDelay() reverts and is not the proxy owner. [verified R-4 R-5 R-7 R-8]

No audit report URL was found. [unknown]

## Team and provenance

circus.trade and @circus_trade cross-link. No legal name or repository is published. [claim R-1 R-3]

## Economics and activity

Homepage counters are project UI, not an independent TVL. DexScreener's deepest CRUDECAT book this pass is a Uniswap v3 USO pair; that does not prove Circus's graduation router. [claim R-1 R-10]

## Material risks

- A single EOA can call owner-only proxy functions unless a hidden module says otherwise. [verified R-4]
- Unverified implementation plus v3/v4 copy conflict means the IPO lock story is unread. [disputed R-1 R-2]

## Verification passes

- Receipts: homepage, how-it-works, X and DexScreener opened 2026-09-10; RPC eth_getCode/owner/impl-slot/getMinDelay run. [verified R-1 R-2 R-4]
- Numbers: $1.22M / 48 graduated are homepage strings; CRUDECAT volume is a DexScreener pair, not factory volume. [claim R-1 R-10]
- Adversarial: CRUDECAT's USO v3 book could be a later market, not the Circus IPO pool; factory logs are still required. [inference R-10]

## Operations log

- Task 7d6a46d05bed01f6c679. Classification copied from the accepted seed.
- RPC 2026-09-10T18:24Z. Blockscout REST Cloudflare this pass.
- No audit URL. Implementation source name unread.
- No identity merge, no scores, no publication.
