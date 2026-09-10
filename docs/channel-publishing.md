# Channel publishing

The changelog is Icarus's complete research record. The Telegram channel has two deliberately
separate paths: controller-approved editorial publications and automated, data-derived signals.
A research change reaches the private review queue only when its changelog entry contains a
structured `channel` object. Feed items are not sent on every push.

## Editorial flow

    Research or feed event
      → channel eligibility decision
      → structured retail publication
      → private controller review
      → publish / roundup / site-only / hold
      → Telegram delivery and immutable sent key

The review page permits copy editing, but approval is tied to the exact source publication and exact
approved copy. Either changing later invalidates the approval. The sender also verifies those
fingerprints and fails closed.

## What reaches the channel

| Event | Eligibility | Usual delivery |
| --- | --- | --- |
| Coverage initiated | Do not post a routine stub; batch meaningful additions | Roundup |
| First full coverage | A substantive profile now has a retail conclusion | Same day |
| Research update | Score moves materially, risk band or provisional state changes, or a control/security conclusion changes | Same day |
| Risk alert | Exploit, loss, pause, unsafe privilege, or other immediate user risk | Immediate |
| Correction | A public conclusion, rating, lifecycle, address, or prior channel post was wrong | Immediate |
| Breaking | Time-sensitive, retail-relevant, supported by an official or reproduced source | Immediate, labeled developing |
| Trending | A new threshold crossing plus a substantive catalyst; attention alone is insufficient | Roundup or same day |

Documentation passes, source additions that change no conclusion, internal review metadata, wording
changes and routine coverage stubs stay site-only.

## Automated signals and recaps

The signal path asks whether a committed change would alter what a reader does. The standard every
message has to pass is the owner's: *would a subscriber who follows Robinhood Chain act on this or be
surprised by it*. Fewer messages is always the safer failure.

It runs after a successful `Daily registry` coordinator or manual `Pull chain facts` workflow and can send at most three alerts per UTC day,
never more than one for the same name that day:

| Signal | Trigger | Daily cap | Kicker |
| --- | --- | --- | --- |
| Breakout | 24h volume at least twice the previous snapshot on at least $50K of liquidity, **and** a second signal: holders up 20%, three qualifying accounts posting that day, or a seven-figure book with holders not falling. The headline number must be up. | 2 | `MOVING` |
| Leader change | A name reaches number one or enters the top three in its section and holds that position for two reads | 1 | `LEADER` |
| Control change | Owner, owner type, Safe threshold or proxy implementation changed | 1 | `RISK ALERT` |
| Control change | LP locked share moved at least ten points or across half the supply, or mint control changed on a verified ABI read | 1 (shared) | `CONTROL CHANGE` |
| Distribution | An externally receipted listing, integration, partnership or audit—not the project's own X post, blog or docs host | 1 | `LISTED` |
| Coming up | An eligible announced name with a TL;DR has a launch date, whitelist or mint event in the next seven days, on an external receipt | 1 | `COMING UP` |

Three gates apply to every control change before it can be sent:

1. **Both reads succeeded.** A field is compared only when the address row carries `errors: []` on
   both sides. A failed read is missing data, never a governance event.
2. **No mass null.** When one pull moves the same field to null on more than five names, that is a
   degraded read and every one of those transitions is dropped. On 2026-09-04 a single pull nulled 35
   owner rows with empty error arrays; without this gate the channel would have announced that the
   chain's busiest launchpad had renounced ownership.
3. **Confirmed over two pulls.** A change is held in `signal_state.pending_control` and sent only when
   the next pull still reads the new value cleanly. A value that reverted is dropped silently.

Talk counts only accounts recorded in `content/accounts.yaml` at `tier: top` with an `alpha` or `kol`
role, or with at least 100,000 followers on the record, and only on the day the name's numbers moved.
An untagged project post never reaches the channel.

Alerts are ranked by materiality, not by kind: a confirmed change to who controls a contract first,
then the largest breakout by 24h volume. Per-rule caps stop one rule consuming the whole day.

The daily brief runs at 13:00 UTC (09:00 ET under daylight time, 08:00 ET under standard time). It
opens with the single most material item of the day, taken from the same ranked list the alerts come
from, then top volume, new names above the bar, movers, external distribution receipts and one
material Icarus note. Its activity label compares the latest chain volume and launchpad launch counts
with their seven-day averages, both sides measured the same way. A day with nothing material collapses
to a single line. The Sunday wrap runs at 14:00 UTC and summarizes section leaders, new and newly
quiet names, control changes and distribution for the prior week. Both are bounded and chunked, so no
list can grow into a message Telegram rejects.

`ops/telegram-state.json` stores the daily alert budget, rank holds, pending control changes, prior
eligibility/status, weekly rollup rows and sent fingerprints. Each message's state is recorded
immediately after its own send succeeds, and the file is written in a `finally` block, so a failure
part-way through a run cannot cause the delivered messages to be sent again. All Telegram modes use
the existing serialized workflow and three-attempt rebase/push loop. Missing Telegram secrets skip
delivery without failing forks or CI.

Feed `tag` values drive the distribution and coming-up selectors: `listing`, `integration`,
`partnership`, `audit`, `launch-date`, `whitelist`, `mint`, `milestone`, or `other`. The tag is
optional; older feed items remain valid.

## The pause switch

`ops/telegram-review.json` holds two flags and both are checked before anything is sent:

- `channel_enabled: false` stops **every** mode — publications, alerts, the brief and the wrap.
- `wire_enabled: false` stops the three automatic modes (alerts, brief, wrap) while leaving
  individually approved publications available. This is the same predicate the pulse Worker's deploy
  derives (`channel_enabled && wire_enabled`), so one repository flag governs both senders.

`--dry-run` always previews regardless of either flag: pausing the channel must never hide what would
have gone out.

## Backtesting a rule change

    node scripts/telegram-digest.mjs --backtest 7

replays the rules over the committed record — every commit that touched `content/pulled`, the history
series each pull appended, the feed and project records as they stood, and the share bar recomputed
from that day's content — and prints every message that would have been sent, day by day, with the
rule that produced it. It writes nothing and sends nothing. Run it before changing a threshold, and
paste the output into the pull request: a rule that produces a message the owner would not have wanted
is tightened until it does not.

## Publication object

```yaml
channel:
  event: new-coverage
  delivery: same-day
  headline: Pons enters Icarus with Elevated risk
  summary: Icarus completed its first full review...
  why_it_matters:
    - Owner actions can take effect without a documented delay.
    - The project's own documentation describes the system as unaudited.
  watch_next: A deployed-code audit or timelock would materially improve the assessment.
```

Event values are `new-coverage`, `research-update`, `risk-alert`, `correction`, `breaking`,
`trending`, and `roundup`. Delivery values are `immediate`, `same-day`, and `roundup`.

## Card system

Icarus publishes **text cards**, not image cards. The sender uses Telegram `sendMessage` with
HTML formatting. Project names, the current Icarus view, the research link and the disclaimer are
added automatically; editors write only the structured publication object.

There are two rendered formats:

1. **Event card** — one full card for one project change. Used when `delivery` is `immediate` or
   `same-day`.
2. **Roundup card** — one compact card containing several project changes. Created automatically
   from every approved item whose `delivery` is `roundup`.

`event` controls the label and editorial brief. `delivery` controls the rendered format. An item can,
for example, be a `risk-alert` event delivered in the roundup format. For ordinary project updates,
use `delivery: roundup`; do not set `event: roundup`. Reserve the `roundup` event for an explicitly
authored, issue-level roundup record.

### Card catalogue

| Card | Kicker | Default delivery | Must include | Do not publish when |
| --- | --- | --- | --- | --- |
| New profile | `NEW PROFILE · PROJECT` | Same day | What is now reviewed; the main conclusion; Control, evidence percentage and risk are added automatically; one or two decision-relevant implications; what could change the view | The record has no retail conclusion yet |
| Research update | `RESEARCH UPDATE · PROJECT` | Same day | The exact conclusion that changed; prior → current value when applicable; the evidence that caused the change; what remains unresolved | Sources were added but the conclusion did not change |
| Risk alert | `RISK ALERT · PROJECT` | Immediate | The concrete risk; affected product, deployment or users; observed status versus unknowns; immediate evidence to watch | The concern is speculative, stale or not retail-relevant |
| Correction | `CORRECTION · PROJECT` | Immediate | What Icarus previously said; the corrected statement; why it changed; whether Control, risk, lifecycle or address changed | The edit is only wording, spelling or internal metadata |
| Developing | `DEVELOPING · PROJECT` | Immediate | What happened; the timestamp or current status; what is verified, claimed and still unknown; the next confirmation point | The only source is rumor or the update is not time-sensitive |
| Trending | `TRENDING · PROJECT` | Same day or roundup | The threshold crossing; the substantive catalyst; counting-account context when useful; an explicit separation between attention and quality | Attention rose without a substantive catalyst |
| Roundup | `ICARUS ROUNDUP · DATE` | Roundup | Date; item count; for each item: project, event label, headline, summary and research link; global disclaimer | There is only one urgent item that deserves a full event card |

The trending caution — “Trending measures attention — not quality or endorsement.” — is inserted
automatically. A roundup receives one disclaimer at the bottom rather than one disclaimer per item.

### Field ownership

| Element | Written by editor | Added automatically | Limit |
| --- | --- | --- | --- |
| Event label | Select `event` | Uppercase display label | Fixed enum |
| Project name | No | From the project record | — |
| Headline | Yes | — | 1–180 characters |
| Summary | Yes | — | 1–1,200 characters |
| Why it matters | Yes, when the card brief calls for it | Heading and bullets | 1–2 unique bullets; 400 characters each |
| Icarus view | No | Control, risk, evidence percentage and second-review state from calculated data | Never hand-edit |
| What we’re watching | Yes, when there is a concrete next evidence point | Heading | Up to 500 characters |
| Trending caution | No | Added to trending event cards | Fixed copy |
| Research link | No | Built from the site URL and project slug | — |
| Disclaimer | No | Added to every event card or once per roundup | Fixed copy |

`headline` and `summary` are schema-required. For channel-quality copy, `why_it_matters` and
`watch_next` should also be present on new-coverage, research-update, risk-alert, correction and
breaking cards. They may be omitted from a compact trending item when the summary already names the
catalyst and next evidence point.

## Event card format

Each direct post uses this structure:

```text
EVENT · PROJECT

Plain-language headline

One concise explanation of what changed.

Why it matters
• Retail implication
• Primary risk or opportunity

Icarus view
Control and risk
Evidence percentage and second-review status

What we're watching
The evidence that could change the assessment.

Icarus is powered by Project Proofline. Automated research may be incomplete, delayed or inaccurate. It is not investment advice; read the sources and do your own research.
Read the full research →
```

Posts should normally stay between 500 and 900 characters. A reader should understand the event,
impact and evidence status without opening the link. Technical substantiation belongs in the linked
research record.

Conditional sections are omitted cleanly: no `why_it_matters` means no “Why it matters” block; no
`watch_next` means no “What we’re watching” block. The Icarus view, link and disclaimer remain.

## Roundup card format

Approved items with `delivery: roundup` are combined into this structure:

```text
ICARUS ROUNDUP · YYYY-MM-DD

N research updates selected by Icarus.

Icarus is powered by Project Proofline. Automated research may be incomplete, delayed or inaccurate. It is not investment advice; read the sources and do your own research.

Project · EVENT
Plain-language headline
One concise explanation of what changed.
Open research →

Project · EVENT
Plain-language headline
One concise explanation of what changed.
Open research →
```

Roundup entries intentionally omit the full “Why it matters,” “Icarus view” and “What we’re
watching” blocks. Put the essential conclusion and implication in the headline and summary. If an
item cannot be understood in that compact form, publish it as a same-day event card instead.

## Editor worksheet

Copy this block into the relevant changelog entry and replace every bracketed instruction. Remove an
optional field only when it is genuinely not useful.

```yaml
channel:
  event: [new-coverage | research-update | risk-alert | correction | breaking | trending]
  delivery: [immediate | same-day | roundup]
  headline: "[What changed and the conclusion — plain language, no clickbait]"
  summary: "[What happened, the strongest evidence status, and the material unresolved point]"
  why_it_matters:
    - "[Concrete implication for a user, depositor, trader or researcher]"
    - "[Second distinct implication or primary limitation — delete if redundant]"
  watch_next: "[The specific evidence or event that could confirm, resolve or change the view]"
```

### Event-specific writing prompts

Use these prompts to fill the worksheet; they are not additional schema fields.

| Event | Headline answers | Summary answers | Why it matters answers | Watch next answers |
| --- | --- | --- | --- | --- |
| `new-coverage` | What is the main assessed conclusion? | What did the first full review establish, and what is the main limitation? | What changes a reader’s understanding of the project? | Which missing control, audit, deployment proof or operating history could change the assessment? |
| `research-update` | What moved from what to what? | Which new evidence changed the prior conclusion? | Does this alter risk, confidence, usability or verification? | What question remains open after the update? |
| `risk-alert` | What concrete risk is active now? | Who or what is affected, what is observed, and what is unknown? | What exposure or decision could be affected? | Which official, onchain or reproduced signal resolves the alert? |
| `correction` | What statement is being corrected? | What was said before, what is correct now, and why? | Which public conclusion or data point changes? | Is any follow-up verification still pending? |
| `breaking` | What just happened? | What is confirmed as of what time, and what remains developing? | Why is this time-sensitive for retail readers? | What is the next primary confirmation? |
| `trending` | What crossed the attention threshold, and why now? | What substantive catalyst accompanied the threshold crossing? | Why might the catalyst matter independently of popularity? | What evidence would turn attention into a research conclusion? |

## Copy rules

- Lead with the change, not with Icarus announcing that it found a change.
- Use exact states: `verified`, `claim`, `inference`, `disputed` or `unknown`.
- Put prior → current values in the copy when a score, risk band, lifecycle or deployment changed.
- Name the affected chain, deployment or product when ambiguity could cause a reader to act on the
  wrong asset.
- Keep bullets distinct. One bullet should not paraphrase the other.
- Do not use price targets, calls to buy or sell, urgency theater, promotional adjectives, or “safe.”
- Do not present an audit as a guarantee or a trending signal as an endorsement.
- Do not squeeze technical substantiation into the card; link to the evidence-backed profile.

## Review controls

- **Publish selected** locks the displayed copy and authorizes delivery when the channel is enabled.
- **Add to roundup** stores the item in the roundup lane without sending it.
- **Site only** records the editorial decision that the change does not belong on Telegram.
- **Hold** keeps a promising item out of delivery pending more evidence or better timing.
- **Reset** removes the decision and returns the current source publication to pending.
- **Pause channel** blocks all delivery regardless of item state.

To publish accumulated roundup items, select them, confirm their delivery remains `roundup`, and use
**Publish selected**. The sender combines all approved roundup entries into a compact roundup card.
