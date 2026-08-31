# Intake tooling — 2026-08-30/31 Grok harvest (one-shot)

These four scripts turned the Grok field desk's 2026-08-30/31 intake (`research/inbox/grok-2026-08-30/`,
`research/inbox/account-desk.yaml`, `research/inbox/2026-08-31-*`) into the initial `content/` tree —
49 census stubs, their sources ledgers and feeds, `content/accounts.yaml`, and
`content/dependencies/stock-tokens.yaml`'s deployment list. That merge is done (Task 5). `content/` is
now canonical.

**Do not re-run these** against the live `content/` tree. They do not merge or diff — `apply-harvest.mjs`
and `build-accounts.mjs` **regenerate their target files wholesale** from the harvest data captured here,
discarding any hand edit, review, scoring, or bot-merged feed PR made to those files since the last run.
That is why both refuse to run without an explicit `--overwrite` flag — it is a confirmation, not a
convenience.

| Script | Reads | Overwrites |
|---|---|---|
| `import-chain-file.mjs` | the raw Grok intake artifacts | `research/inbox/grok-2026-08-30/drafts/**` only — never `content/` |
| `harvest-data.mjs` | (a data file, not a script) — the harvest itself, hand-transcribed from the drafts above | — |
| `apply-harvest.mjs` | `harvest-data.mjs` + `../../seed-data.mjs` + `content/census.yaml` | `content/projects/*.yaml` findings/deployments, `content/feed/*.yaml`, `content/dependencies/stock-tokens.yaml` deployments |
| `build-accounts.mjs` | `research/inbox/account-desk.yaml` + `research/inbox/2026-08-31-accounts.yaml` | `content/accounts.yaml` |

If a future intake needs this same pipeline, copy this directory to `scripts/intake/<date>/`, point it at
the new raw artifacts, and run it against a fresh or reset `content/` tree — don't point a copy at
already-reviewed content.

`../../seed-data.mjs` still imports `HARVEST` from `harvest-data.mjs` here (`npm run seed` needs the known
deployments), and `../../build-dependency-cards.mjs` still imports `GH`/`ACCESSED` from it — that reuse is
intentional and stays even though this directory itself is frozen (final review I9 deferred collapsing
`seed-data.mjs`'s duplication of `content/` as a separate, larger change).
