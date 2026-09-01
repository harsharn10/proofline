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

## Text card

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

## Review controls

- **Publish selected** locks the displayed copy and authorizes delivery when the channel is enabled.
- **Add to roundup** stores the item in the roundup lane without sending it.
- **Site only** records the editorial decision that the change does not belong on Telegram.
- **Hold** keeps a promising item out of delivery pending more evidence or better timing.
- **Reset** removes the decision and returns the current source publication to pending.
- **Pause channel** blocks all delivery regardless of item state.

To publish accumulated roundup items, select them, confirm their delivery remains `roundup`, and use
**Publish selected**. The sender combines all approved roundup entries into a compact roundup card.
