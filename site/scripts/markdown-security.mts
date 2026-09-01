import assert from "node:assert/strict";
import { parseResearchMarkdown, renderWholeMarkdown } from "../src/data/markdown.ts";

const unsafe = renderWholeMarkdown(`
# Unsafe input

<script>globalThis.compromised = true</script>
<img src=x onerror="globalThis.compromised = true">
[unsafe link](javascript:alert(1))
<span class="ev ev-verified" data-sources="S999" onclick="alert(1)">fake badge</span>
`);

assert.doesNotMatch(unsafe, /<script|<img|onerror|onclick|<[^>]+javascript:/i);
assert.doesNotMatch(unsafe, /class="ev/);
assert.match(unsafe, /Unsafe input/);

const research = parseResearchMarkdown(`## Identity

The deployment was reproduced. [verified S1 S2]

PROOFLINE_EVIDENCE_BADGE_0_END

<svg onload="alert(1)"></svg>
`);
const identity = research.sections[0]?.html ?? "";
assert.match(identity, /class="ev ev-verified"/);
assert.equal(identity.match(/class="ev ev-verified"/g)?.length, 1);
assert.match(identity, /data-sources="S1 S2"/);
assert.match(identity, /PROOFLINE_EVIDENCE_BADGE_0_END/);
assert.doesNotMatch(identity, /<svg|onload/i);

const safeLink = renderWholeMarkdown("[Proofline](https://example.com/research)");
assert.match(safeLink, /href="https:\/\/example\.com\/research"/);
assert.match(safeLink, /rel="nofollow noopener noreferrer"/);

console.log("markdown security: ok");
