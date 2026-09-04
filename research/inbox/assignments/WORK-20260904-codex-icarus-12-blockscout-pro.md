# WORK-20260904-codex-icarus-12-blockscout-pro: Puller on the Blockscout PRO API with a key, and a bot-wall detector

Paste prompt for Codex (also the PR body of the kickoff PR).

```text
You are the Proofline engineer (producer codex) on github.com/harsharn10/proofline (Robinhood Chain, chain id 4663; site branded Icarus, live on Render from main). Read docs/design/icarus/README.md §3 (rules) first, then the files named below. Keep main green: npm test (run the suites separately if the chain exceeds ten minutes), npm run validate:release (0 errors), npm --prefix site run build:render then npm --prefix site run test where the site changes.

work_id: WORK-20260904-codex-icarus-12-blockscout-pro
producer: codex
branch: codex/20260904/WORK-20260904-codex-icarus-12-blockscout-pro (exists with this assignment file; commit to it)
depends_on: none
allowed_paths:
  - scripts/lib/pull/blockscout.mjs
  - scripts/lib/pull/http.mjs
  - scripts/pull.mjs (config only)
  - scripts/test-pull.mjs + fixtures
  - .github/workflows/pull.yml and compile.yml (env only)
  - docs/integrations/pull.md
  - README.md (secrets section)

Rules that always apply: every number links to its source, honest placeholders, no wallet labeling (no named wallets, no per-wallet feeds), nothing fabricated, secrets only through GitHub or Cloudflare secrets (never in the repo). Commit in small steps with messages ending in the trailer "Producer: codex". Push and mark the PR ready with the body:
## Done
## Verification (commands run and their last lines; for anything live, the real numbers you saw)
## Not done / questions
Never merge, never enable auto-merge.

Task: Blockscout's public frontend API (https://robinhoodchain.blockscout.com/api/v2) started serving a Cloudflare managed challenge ("Just a moment…" HTML, HTTP 403) to plain HTTP clients on 2026-09-04. The scheduled pull from GitHub still succeeded at 11:19 UTC, so the wall is selective, but it is a matter of time. Blockscout's PRO API for this chain (docs: https://github.com/blockscout/docs/blob/main/robinhood-api.mdx) is the sanctioned path: REST base https://api.blockscout.com/4663/api/v2/ (same routes as the frontend API), Etherscan-compatible https://api.blockscout.com/v2/api?chain_id=4663, key from https://dev.blockscout.com, free tier 5 requests/second and 100K credits/day, key passed as ?apikey=proapi_xxx or header "authorization: Bearer proapi_xxx"; txlistinternal and eth_getLogs capped at 1,000 records on this chain.

1. scripts/lib/pull/blockscout.mjs: read BLOCKSCOUT_API_KEY and BLOCKSCOUT_API_BASE from the environment. With a key, use the PRO base and send the key as a bearer header; without one, keep the public frontend base and the browser User-Agent exactly as today. One place builds every URL.
2. Bot-wall detection in scripts/lib/pull/http.mjs: a response whose body starts with "<!DOCTYPE html" or whose title is "Just a moment" is not JSON; classify it as a "challenge" error (never a parse exception), retry once after a jittered pause, then record it in the document's errors[] as "explorer served a bot challenge" and move on. A run where more than half of the explorer reads are challenged must exit non-zero with a one-line summary so the workflow shows red instead of silently writing nulls.
3. Pacing: with the PRO key, allow 4 requests in flight at up to 5 per second; without it, keep the current pacing. Count credits used per run and print them in the summary.
4. Workflows: pass BLOCKSCOUT_API_KEY from secrets to the pull and compile jobs (env only; the workflow must run unchanged when the secret is absent).
5. Tests with stub clients: key present → PRO base and bearer header; absent → public base; challenge body → classified, retried once, recorded; the >50% rule exits non-zero. Docs: a "Blockscout PRO key" section (where to create it, how to add the secret BLOCKSCOUT_API_KEY, the free-tier budget against our per-run request count).
Acceptance: npm run test:pull green; a real npm run pull -- --only pons,artificial-inu works both with and without the key (the owner will add the secret after merge; use BLOCKSCOUT_API_BASE pointing at the public host to prove the fallback).
```
