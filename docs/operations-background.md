# Background work inventory

Audited against main `6223871` on 2026-09-09. Repository configuration is not proof of an external scheduler's live state.

| Work | Trigger | Decision |
| --- | --- | --- |
| Chain facts | Daily 09:17 UTC; manual recovery | Keep bounded relevance/fairness selection and credit budget. |
| Packet compiler | Daily 11:47 UTC; manual recovery | Keep independently recoverable; unchanged packets already skip compilation/scoring. |
| Pipeline health | Daily 15:37 UTC; manual | Keep independent: chaining to success would hide missed/failed collection. |
| Publish | Relevant main pushes, successful pulls, daily brief, Sunday wrap, manual | Skip docs/frontend-only pushes; preserve content/approval/policy triggers; skip install/scoring without delivery credentials. |
| Validate | PR updates and main pushes | Cancel superseded PR checks only; preserve every main run. |
| Packet PR gate | Successful PR Validate | API-only classification, bounded to five minutes; never merges. |
| Generated-file guard | PR | Keep ownership safety gate. |
| Pulse deploy | Relevant main paths; manual | Bound verify/deploy to ten minutes each. |
| Pulse Worker | Every ten minutes | Keep: produces dashboard `/pulse.json`, not only Telegram. Disabling alerts does not make collection redundant. |

No user crontab was installed and no Proofline-named collector/compiler/Worker process was found in the local process inventory. No matching Proofline/Icarus launch-agent files were returned by the accessible standard LaunchAgents/LaunchDaemons scan. No processes were killed: nothing was positively identified as redundant and running. This does not establish that external Grok/Claude sessions or generic-named schedulers are absent.

Grok/Claude scheduler configuration and live Cloudflare/Render account scheduling remain outside this verified inventory. Do not disable unrelated local jobs or change account credentials to discover them. Render's canonical deployment and the Cloudflare build checks are not interchangeable with data collection.

These changes reduce wasted preparation and superseded CI, not data coverage. They do not change publication flags, send modes, identity, storage, or provider plans. No dollar-savings claim is made without run-duration/usage measurements. Review Actions durations after the next daily cycle; retain the report-aware watchdog even if collectors are consolidated later.

Observed baseline: Publish run `34418556040` on the documentation-only main commit `6223871` took ten seconds and ran install, score and delivery checks successfully. Credentials were present, so the credential guard alone would not save work for that run; the new relevant-path push filter would avoid it entirely. This is one measured example, not a monthly savings projection.
