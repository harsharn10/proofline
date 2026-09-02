# Channel publishing

The changelog is Proofline's complete research record. The Telegram channel is a selective retail
publication, so a research change reaches the private review queue only when its changelog entry
contains a structured `channel` object.

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

## Publication object

```yaml
channel:
  event: new-coverage
  delivery: same-day
  headline: Pons enters Proofline coverage with Elevated risk
  summary: Proofline completed its first full review...
  why_it_matters:
    - Owner actions can take effect without a documented delay.
    - The project's own documentation describes the system as unaudited.
  watch_next: A deployed-code audit or timelock would materially improve the assessment.
```

Event values are `new-coverage`, `research-update`, `risk-alert`, `correction`, `breaking`,
`trending`, and `roundup`. Delivery values are `immediate`, `same-day`, and `roundup`.

## Card system

Proofline publishes **text cards**, not image cards. The sender uses Telegram `sendMessage` with
HTML formatting. Project names, the current Proofline view, the research link and the disclaimer are
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
| New coverage | `NEW COVERAGE · PROJECT` | Same day | What is now covered; the main conclusion; score, confidence and risk are added automatically; one or two decision-relevant implications; what could change the view | The record is only a routine stub or has no retail conclusion |
| Research update | `RESEARCH UPDATE · PROJECT` | Same day | The exact conclusion that changed; prior → current value when applicable; the evidence that caused the change; what remains unresolved | Sources were added but the conclusion did not change |
| Risk alert | `RISK ALERT · PROJECT` | Immediate | The concrete risk; affected product, deployment or users; observed status versus unknowns; immediate evidence to watch | The concern is speculative, stale or not retail-relevant |
| Correction | `CORRECTION · PROJECT` | Immediate | What Proofline previously said; the corrected statement; why it changed; whether score, risk, lifecycle or address changed | The edit is only wording, spelling or internal metadata |
| Developing | `DEVELOPING · PROJECT` | Immediate | What happened; the timestamp or current status; what is verified, claimed and still unknown; the next confirmation point | The only source is rumor or the update is not time-sensitive |
| Trending | `TRENDING · PROJECT` | Same day or roundup | The threshold crossing; the substantive catalyst; counting-account context when useful; an explicit separation between attention and quality | Attention rose without a substantive catalyst |
| Roundup | `PROOFLINE ROUNDUP · DATE` | Roundup | Date; item count; for each item: project, event label, headline, summary and research link; global disclaimer | There is only one urgent item that deserves a full event card |

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
| Proofline view | No | Score/risk and confidence/provisional state from derived data | Never hand-edit |
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

Proofline view
Score and risk
Confidence and provisional status

What we're watching
The evidence that could change the assessment.

Read the full research →
Research opinion only — not an audit, guarantee or investment advice.
```

Posts should normally stay between 500 and 900 characters. A reader should understand the event,
impact and evidence status without opening the link. Technical substantiation belongs in the linked
research record.

Conditional sections are omitted cleanly: no `why_it_matters` means no “Why it matters” block; no
`watch_next` means no “What we’re watching” block. The Proofline view, link and disclaimer remain.

## Roundup card format

Approved items with `delivery: roundup` are combined into this structure:

```text
PROOFLINE ROUNDUP · YYYY-MM-DD

N research updates selected by the Proofline desk.

Project · EVENT
Plain-language headline
One concise explanation of what changed.
Open research →

Project · EVENT
Plain-language headline
One concise explanation of what changed.
Open research →

Research opinion only — not an audit, guarantee or investment advice.
```

Roundup entries intentionally omit the full “Why it matters,” “Proofline view” and “What we’re
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

- Lead with the change, not with Proofline announcing that it found a change.
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
