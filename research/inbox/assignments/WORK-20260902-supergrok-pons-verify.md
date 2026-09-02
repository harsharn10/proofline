# SuperGrok assignment: verify the pons record

Status: assigned. Open a draft PR from the branch named at the end of this file and keep it in draft.

```yaml
contract_version: proofline-research-v2
work_id: WORK-20260902-supergrok-pons-verify
producer: supergrok
role: verifier
base_sha: e0d2d2852dc6da7fd8293d4755109b9a0eef11bc
as_of: 2026-09-02T00:57:08Z
packet_tier: full
prior_packet: content/projects/pons.yaml+content/research/pons.md+content/sources/pons.yaml@e0d2d2852dc6da7fd8293d4755109b9a0eef11bc
owned_slugs: [pons]
allowed_paths:
  - research/inbox/packets/pons/WORK-20260902-supergrok-pons-verify.md
forbidden_paths:
  - content/**
  - docs/**
  - schema/**
  - scripts/**
  - site/**
  - ops/**
```

## Objective

Pons is the only full record on the site. Reproduce its chain facts and its figures independently,
then give every finding a disposition. You are checking the record, not extending it. Write one
verifier packet in packet v2 form. Nothing under `content/` changes; corrections go through the
compiler after controller review.

## Required reading

1. This file, then `research/inbox/assignments/WORK-20260902-grok-heavy-full-batch-1.md` § Output for the packet v2 frontmatter skeleton and the body headings. The Output section below lists what differs for a verifier.
2. `content/projects/pons.yaml` (deployments, metrics, scoring notes, findings), `content/research/pons.md` (the narrative and its tags), `content/sources/pons.yaml` (S1 to S33). This is the record under test.
3. `docs/research-system.md` §7 at `base_sha`.

## Scope: what to reproduce

Every item below becomes one or more claims in your packet. Each claim names the S-id it tests in
`prior_claim` and carries its own `REP-` reproduction and `R-` receipt.

1. The fourteen documented addresses (S17 to S30) plus the owner Safe (S31). For each: `eth_getCode` non-empty on chain 4663; Blockscout contract name; source verified or not; EIP-1967 slots empty or set. Record block and time for every read.
2. The two legacy contracts (S20, the v1 legacy factory; S21, the v1 legacy locker). Confirm they exist and that source is still unverified. Confirm the PONS token's creator is the legacy factory (S17).
3. The control reads (S33): `owner()` on the nine addresses the record says return `0x263ed295dAFaE1d9AAdD6E56c4B6F9f38eE019Dd`; `getThreshold()` and `getOwners()` on that Safe; the Safe master copy; modules and guard; no timelock in the ownership chain. State which addresses you read and which you did not.
4. The lockers' ABIs (S19, S26): confirm no unlock or withdraw function. The v2 fee escrow (S24): confirm no owner setters.
5. The DefiLlama figures (S7, S12, S14, S15). Re-pull `api.llama.fi/summary/fees/pons?dataType=dailyFees`, the same with `dataType=dailyRevenue`, and `api.llama.fi/summary/dexs/pons?dataType=dailyVolume` at your time. Report your values with window and as-of next to the recorded 2026-08-31 values. A different level is expected; a different thing being measured is a finding.
6. The second PONS-ticker contract (S32) and the Ethereum address under the cashtag (S6, S11). Confirm the first is a contract on 4663 and the second is not.
7. The docs claims the record leans on (S13, S16): fee splits, the three-day takeover delay, the seven-day stall return, the three named reviews. Check the pages still say this and whether an audit report has been published since 2026-08-31.

## Output

One file at the allowed path. Frontmatter as in the full-batch skeleton, with these differences:

```yaml
role: verifier
prior_packet: content/projects/pons.yaml+content/research/pons.md+content/sources/pons.yaml@e0d2d2852dc6da7fd8293d4755109b9a0eef11bc
claims:
  - id: CLM-1
    field: control.owner
    value: "0x263ed295dAFaE1d9AAdD6E56c4B6F9f38eE019Dd"
    class: verified
    observed_at: 2026-09-02T15:00:00Z
    receipt_ids: [R-1]
    reproduction_ids: [REP-1]
    supersedes: null
    prior_claim: S33                 # the S-id under test
    disposition: accepted            # accepted|corrected|disputed|deferred
    prior_value: null                # required when disposition is corrected
```

`disposition` is required on every claim that tests a prior S-id. `accepted`: your reproduction
matches. `corrected`: your reproduction gives a different value; yours goes in `value`, the recorded
one in `prior_value`. `disputed`: two live sources disagree; add a `CON-` record. `deferred`: you could
not run the check; the matching gap says why.

Body headings, all ten in order: `What it is`, `Why it matters`, `What could go wrong`, `Product and
mechanics`, `Control and security`, `Team and provenance`, `Economics and activity`, `Material risks`,
`Verification passes`, `Operations log`. For a verifier the first three are three sentences each.
Verification passes is the main section: one bullet per scope item above, ending with its tag.
Material risks holds the strongest contrary explanation for the record's current risk reading and
the evidence for it; if none exists, say what would have to be true. Operations log: reads attempted,
reads that failed, rate limits hit, time spent, tools used.

## Rules

- Independence. Do not reuse the record's explorer pages as your receipts. Your receipts are your own reads, timestamped after `as_of` in this header.
- Evidence class. `verified` only for a claim with your own `REP-`. A docs page is `claim`. A prior S-id is never a reproduction.
- Mainnet bar. Unchanged. If a reproduction fails, `classification.lifecycle` is what your evidence supports, and the difference is a `CON-` record.
- No conduct words. Describe the second PONS contract and the cashtag address as `ca-collision` and `wrong-chain` with receipts, never as intent.
- Field ownership. You do not edit the collector's claims, resolve conflicts, set scores, approve, or write channel copy. You may recommend a lifecycle, evidence state or risk reading in `classification` and in Material risks.
- Numbers. Value, unit, window, as-of, method, receipt, next to the recorded value.

## Completion and PR rules

Branch: `supergrok/20260902/WORK-20260902-supergrok-pons-verify` from `base_sha`. One PR, one file.

PR title: `WORK-20260902-supergrok-pons-verify: verifier packet for pons`.

PR body: the YAML header from the top of this file, then a table with one row per scope item: item,
addresses or figures read, disposition counts (accepted / corrected / disputed / deferred), one line
of detail. Then the strongest contrary explanation in three sentences. Then reads that failed and why.
End with "Only the one allowed path was added."

Do not merge, enable auto-merge, mark ready, or touch any other path. Do not edit `content/`, the pons
feed, the changelog or review state. Commit trailer: `Producer: supergrok`.
