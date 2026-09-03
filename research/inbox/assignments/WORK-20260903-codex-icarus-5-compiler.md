# WORK-20260903-codex-icarus-5-compiler: Compiler and schemas: summary, themes, links, posts to feed, lifecycle from pulled

Paste prompt for Codex (also the PR body of the kickoff PR).

```text
You are the Proofline engineer (producer codex) building Icarus on github.com/harsharn10/proofline. The spec is docs/design/icarus/README.md and the visual spec is docs/design/icarus/mock.html (open it in a browser; hash routes #/, #/s/launchpads, #/t/artificial-inu, #/n/pons). Read both before touching code, then docs/research-system.md for the content contract. Where the mock and README disagree, README wins.

work_id: WORK-20260903-codex-icarus-5-compiler
producer: codex
branch: codex/20260903/WORK-20260903-codex-icarus-5-compiler (already exists with this assignment file; commit to it, do not create another)
depends_on: none
allowed_paths:
  - scripts/compile-packet.mjs
  - scripts/lib/packet.mjs
  - scripts/lib/checks.mjs
  - scripts/lib/validate-content.mjs
  - schema/project.schema.json
  - schema/feed.schema.json
  - schema/packet.schema.json (additive only)
  - scripts/migrations/lifecycle-from-pulled.mjs (new)
  - scripts/test-packet.mjs, scripts/test-pipeline.mjs, fixtures
  - docs/research-system.md §5 and §8, docs/templates/research-packet-v2.md
  - content/** only via the migration, in its own commit

Rules that always apply (README §3): reader words only, every number links to its source, the share bar, no wallet labeling, charts from snapshots only, honest placeholders, build stays green. Do not change files outside allowed_paths; if you must, stop and say why in the PR.

Before you push: npm test, npm run validate:release (0 errors), npm --prefix site run test, npm --prefix site run build all pass. Commit in small steps with messages ending in the trailer "Producer: codex". Push to the branch and mark the PR ready with the body:
## Done
- one line per change
## Screens
- attach screenshots of every changed page in light and dark (mobile width too)
## Not done / questions
- anything left, with the reason
Never merge, never enable auto-merge. A controller reviews with docs/design/icarus/review-checklist.md.

Task: make the compiler produce what the Icarus cards read, and stop lifecycle drifting from the chain.

1. schema/project.schema.json: add optional themes (array of ≤ 5 lowercase tags matching ^[a-z0-9][a-z0-9:-]*$) and keep summary (≤ 80 words, enforced in validate-content as a warning at 80 and an error at 120).
2. scripts/compile-packet.mjs: from the packet body "## What it is" → summary; a body line "Themes: a, b, c" → themes; frontmatter links → official_links (kinds site, docs, x, telegram, github, explorer, dexscreener; drop duplicates by normalizeUrl); frontmatter events with a receipt URL → items in content/feed/<slug>.yaml (kind company for the project's own account, ct for other accounts, onchain for explorer or DefiLlama receipts, risk when the event is flagged; title ≤ 80 chars, body = what was posted, account, sourceUrl, date, stable hash id per #39; merge with existing items by id). Never overwrite a summary or themes edited by a controller (respect a "controller_edited: true" marker if present, else packet wins).
3. Lifecycle: validate warns when the census says announced but the pulled file shows a pair created on 4663 or a contract with activity. scripts/migrations/lifecycle-from-pulled.mjs flips lifecycle to mainnet only where a pulled address is_contract on 4663 and a market pair exists, and records lifecycle_source: "pulled <address> <created_at>" on the project file. Run it once and commit the content changes as a separate commit titled "content: lifecycle from pulled reads" listing the slugs.
4. Packet template and docs/research-system.md §5 document the three additions (What it is paragraph, Themes line, events with URLs) as required for seed and full tiers from 2026-09-03; schema/packet.schema.json stays backward compatible.
5. Tests: fixtures for each new compile path; test-pipeline covers a packet → compile → validate → seed round trip including feed merge idempotence (second run produces no diff).
Acceptance: node scripts/compile-packet.mjs on research/inbox/packets/downto/*.md produces summary, themes (if the packet has the line), official_links and feed items; npm test green; the lifecycle commit lists every flipped slug with its receipt.
```
