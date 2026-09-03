# WORK-20260903-codex-icarus-6-copy: Copy pass, How to read this, Feed page, Telegram wording, vocabulary test

Paste prompt for Codex (also the PR body of the kickoff PR).

```text
You are the Proofline engineer (producer codex) building Icarus on github.com/harsharn10/proofline. The spec is docs/design/icarus/README.md and the visual spec is docs/design/icarus/mock.html (open it in a browser; hash routes #/, #/s/launchpads, #/t/artificial-inu, #/n/pons). Read both before touching code, then docs/research-system.md for the content contract. Where the mock and README disagree, README wins.

work_id: WORK-20260903-codex-icarus-6-copy
producer: codex
branch: codex/20260903/WORK-20260903-codex-icarus-6-copy (already exists with this assignment file; commit to it, do not create another)
depends_on: WORK-20260903-codex-icarus-2-home and WORK-20260903-codex-icarus-3-cards (run last, on top of main after both merge)
allowed_paths:
  - site/src/routes/{feed,methodology,changelog,review}.tsx
  - site/src/components/**
  - site/src/data/types.ts (labels only)
  - content/methodology.md
  - content/site.yaml (copy only)
  - scripts/telegram-digest.mjs and its templates
  - scripts/test.mjs (vocabulary test)
  - docs/telegram-cards.md or equivalent

Rules that always apply (README §3): reader words only, every number links to its source, the share bar, no wallet labeling, charts from snapshots only, honest placeholders, build stays green. Do not change files outside allowed_paths; if you must, stop and say why in the PR.

Before you push: npm test, npm run validate:release (0 errors), npm --prefix site run test, npm --prefix site run build all pass. Commit in small steps with messages ending in the trailer "Producer: codex". Push to the branch and mark the PR ready with the body:
## Done
- one line per change
## Screens
- attach screenshots of every changed page in light and dark (mobile width too)
## Not done / questions
- anything left, with the reason
Never merge, never enable auto-merge. A controller reviews with docs/design/icarus/review-checklist.md.

Task: make every visible word a reader's word and finish the two remaining pages.

1. Vocabulary test in scripts/test.mjs: fail on any of packet, census, stub, coverage, cohort, qualifying, collector, dossier, evidence class, provisional, derived, slug appearing in JSX string literals or content/methodology.md (allow them in code identifiers and comments). Fix every hit.
2. /feed = "Latest from Icarus": full list, filters Icarus updates / Posts / On-chain (pills, URL ?kind=), ?name=<slug> filter with the name shown as a removable chip, each item with when, who pill, title, paragraph, link pills; empty state in one sentence. /changelog redirects to /feed. /review keeps working for the maintainer with the new components.
3. /methodology = "How to read this": the status words, the share bar, Control score and evidence percentage in two sentences each, Official vs Unclaimed, the dash rule, refresh cadence (every 6 hours; research as it lands), how to get Telegram, corrections (hidden while destination is TODO). Rewrite content/methodology.md in the same voice; keep the existing methodology_version.
4. Telegram: digest and card templates use the Icarus name and the same labels as the site; only names above the share bar (read shareBar from build/derived.json); each message ends with the card link.
5. Meta: page titles "Pons · Icarus", "Launchpads · Icarus", descriptions from summaries.
Acceptance: vocabulary test green; every page reads without a glossary; npm run telegram:dry prints Icarus wording; both themes; mobile.
```
