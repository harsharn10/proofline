---
slug: agent-name-service
coverage: stub
methodology_version: proofline-v1.0
---

# Agent Name Service — research record

## Identity

Agent Name Service is classified as Agent identity service.

A .agent namespace on Robinhood Chain. A name resolves to an agent identity (key, wallet, endpoint, capabilities), not a wallet. A controller wallet pays; only the agent's own key can register, signed offline. Users register or search names on agentsn.xyz. @RHAgentNS runs the site. $ANS is a Pons v2 token.

Themes: agent, tooling

## Deployment

AgentNames (registrar): 0x858D52Db9D8484b4921cd6c39Ab5D706BE2155c9 on robinhood-chain. [verified S5 S14 S19]

AgentIdentity: 0xb7fC672671868e529dB8D123f21b655F9E819c2A on robinhood-chain. [verified S5 S15 S18]

AgentResolver: 0x0713447f8e918A217762412005529E339f005f9f on robinhood-chain. [verified S5 S16]

AgentMarket: 0x7FcD3C337B6F9203db4287c46A1a607bE6d5357D on robinhood-chain. [verified S5 S17]

ANS token (PonsV2LauncherToken): 0xdB9Bc67f022d967C3a912Ebe3e6ffe25d5F70C24 on robinhood-chain. [verified S7 S8 S9 S10]

Pons v2 launch factory (token launchFactory): 0x7eD598BcEf8bd9Edd8C97A195C6d13f40801EC7e on robinhood-chain. [claim S8 S9 S10]

PonsV2BondingCurve (token curve): 0x09eD966e77c02DDd1FF43948D284A85d8e92a0DE on robinhood-chain. [claim S9 S10]

Token deployer EOA: 0x4B4BCA71E68E80130E477Ba831399A12A088Ed69 on robinhood-chain. [claim S9 S10 S12]

RobinhoodLocker (ANS lock): 0xD0f7d8c6e9f6D80c297bEbe4F7fD1B9C8125C32F on robinhood-chain. [claim S12 S13]

## Control

Registry contracts were created by EOA `0x35A95822889e73f54ffD06371AB53Dd0Fd646155` (no code) at 2026-08-31T01:37:48–55Z. None of the four is source-verified. Token `deployer()` is a different EOA `0x4B4BCA71E68E80130E477Ba831399A12A088Ed69` (no code). No timelock address appeared on the site or docs. [verified S9 S10 S18] [unknown]

## Security

Docs split powers: a controller wallet pays, updates and transfers; the agent key registers and consents; rotating the agent key needs that wallet plus current and incoming keys. Those modifiers were not read from verified source. No audit report URL was located. [claim S5] [unknown]

## Engineering

_Research pending._

## Team

Public identity is agentsn.xyz and `@RHAgentNS` (joined 2026-08-31). Token `socials()` returns `https://x.com/rhagentns` and `https://www.agentsn.xyz/`; the X bio repeats the site URL; DexScreener info lists the same pair. github.com/RHAgentNS returned 404. github.com/agentns and github.com/Agentsn are not linked from those surfaces. [verified S4 S6 S9] [unknown]

Bankr and Wire are different census rows. Pons is the pad that minted `$ANS`, not the registrar. Other AgentNS-named ERC-20s on Blockscout are a ca-collision against `0xdB9B…0C24`. [claim S10 S27]

## Product and economics

A `.agent` name is a leased label. Docs: `register` needs an EIP-712 `RegisterName` signature from a key that an `AgentIdentity` already designates; a controller wallet submits and pays; commit then reveal. The resolver returns agent key, wallet, endpoint, capabilities and a live flag, and implements ENS `addr` / `text` / `name`. Expired names stop resolving; after grace the next registration takes the label. [claim S5]

`$ANS` is a `PonsV2LauncherToken` named AgentNS / ANS, 18 decimals, totalSupply 1e27. `launchFactory()` is Pons v2 `0x7eD598BcEf8bd9Edd8C97A195C6d13f40801EC7e`. Creation tx `0xe6283bb7…` at 2026-08-31T02:08:42Z called `launchAndBuy` on `PonsV2LaunchAndBuy` with pairToken ETH. DexScreener lists a Uniswap v4 ANS/ETH pool created 2026-08-31T02:12:56Z. [verified S7 S9 S10 S11]

A 2026-08-31 post priced a name at 0.002 ETH per year. Docs: rent is per year with a short-name surcharge; marketplace sales take a protocol fee; figures are governance-configurable. Homepage JS reads `buybackBps` as a share of revenue earmarked to buy `$ANS`. [claim S4 S5 S21]

DexScreener Uniswap v4 ANS/ETH (not an all-pairs total): liquidity 5066.36 USD, 24h volume 1.2 USD, marketCap 3154 USD at this pass. Blockscout token: 64 holders. No DefiLlama protocol row. [verified S8 S11] [claim S26]

Tx `0xc32d5682…` at 2026-08-31T05:08:38Z locked 47823576.32 ANS (~4.78% of 1e9 supply) in `RobinhoodLocker` `0xD0f7…C32F` until 2026-09-30T05:08:00Z. `@RHAgentNS` posted that as a one-month dev-supply lock. Homepage counters for identities, live names and price-per-year load from chain and were not copied as numbers this pass. [verified S12] [claim S4]

## Communications

Account posted the registry is live and free to read [claim S24]

Account posted a registry beats private allowlists [claim S25]

Account posted that the website has been updated [claim S23]

Account posted a name costs 0.002 ETH a year [claim S21]

Account posted .agent is live on Robinhood Chain [claim S20]

## Findings

The four registry contracts are unverified, so fee sinks, revocation and upgrade paths were not read. Token deployer `0x4B4B…Ed69` and registry deployer `0x35A9…6155` are different EOAs. Blockscout lists other ERC-20s with the same or similar name. [claim S4]

- Four registry contracts are unverified; owner, fee recipient and revoke path were not read. [claim S14 S15] [unknown]
- Token deployer and registry deployer are different EOAs with no code. [verified S9 S18]
- Registration price and buyback share are project posts and site JS, not a reproduced fee-sink balance. [claim S4 S21]
- Other ERC-20s on chain 4663 use AgentNS / Agent Name Service / RHAgentNS names. Flag: ca-collision. [claim S27]
- No audit report URL was located. [unknown]

- Receipts: agentsn.xyz, /docs, /register, X profile and named status URLs, Blockscout address/token/tx/search APIs, DexScreener latest/dex/tokens, DefiLlama protocols, github.com/RHAgentNS (404), and RPC eth_getCode/eth_call were opened on 2026-09-03; excerpts are copied from those responses. [verified S4 S7 S9 S11]
- Numbers: 5066.36 USD is DexScreener Uniswap v4 ANS/ETH liquidity.usd, not protocol TVL; 1.2 USD is that pair's volume.h24; 64 is Blockscout holders_count; 47823576.32 ANS is the lock amount, not circulating supply. [claim S8 S11 S12]
- Adversarial: the strongest contrary reading is that Agent Name Service is Hoodle NS, RHNS, .hood or Bankr, or that census `announced` still holds because the registrar is unverified. Distinct handle, domain and four docs-named contracts with non-empty code, plus a verified Pons v2 token whose socials() match the site, argue against a merge and meet the mainnet bar. [inference S5 S6 S9 S11]

## Sources

- S4 — agentsn.xyz home.
- S5 — How it works.
- S6 — X profile @RHAgentNS.
- S7 — Address 0xdB9B…0C24 AgentNS.
- S8 — Token 0xdB9B…0C24.
- S9 — eth_getCode and PonsV2LauncherToken views.
- S10 — ANS creation tx.
- S11 — latest/dex/tokens ANS.
- S12 — ANS lock tx.
- S13 — RobinhoodLocker 0xD0f7…C32F.
- S14 — AgentNames 0x858D…15c9.
- S15 — AgentIdentity 0xb7fC…9c2A.
- S16 — AgentResolver 0x0713…5f9f.
- S17 — AgentMarket 0x7FcD…357D.
- S18 — AgentIdentity creation tx.
- S19 — AgentNames creation tx.
- S20 — Agents have wallets.
- S21 — A name costs 0.002 ETH a year.
- S23 — website has been updated.
- S24 — The registry is already live.
- S25 — One public source of truth.
- S26 — protocols list (no Agent Name Service row).
- S27 — Search AgentNS.

## Review metadata

Compiled from WORK-20260903-grok-heavy-icarus-research by grok-heavy as of 2026-09-03T01:50:00Z; methodology_version: proofline-v1.0.
