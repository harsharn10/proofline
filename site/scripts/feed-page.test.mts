import assert from "node:assert/strict";
import { test } from "node:test";
import { feedPage, normalizeFeedSearch, FEED_PAGE_SIZE } from "../src/data/feed-page.ts";
import { WIRE_KINDS, type WireItem } from "../src/data/types.ts";

const items: WireItem[] = Array.from({ length: 237 }, (_, i) => ({
  id: `event-${i}`, slug: i % 2 ? "alpha" : "beta",
  name: { slug: i % 2 ? "alpha" : "beta", name: i % 2 ? "Alpha" : "Beta", symbol: null },
  kind: WIRE_KINDS[i % WIRE_KINDS.length]!, at: "2026-09-01T00:00:00Z",
  headline: `Event ${i}`, gist: "Dated evidence", url: `https://example.invalid/${i}`,
}));

test("every item is reachable once in existing order, without mutating the archive", () => {
  const before = JSON.stringify(items);
  const first = feedPage(items, {});
  const traversed = Array.from({ length: first.pages }, (_, i) => feedPage(items, { page: i + 1 }).wire).flat();
  assert.deepEqual(traversed, items);
  assert.equal(new Set(traversed.map(row => row.id)).size, items.length);
  assert.equal(first.wire.length, FEED_PAGE_SIZE);
  assert.equal(JSON.stringify(items), before);
});

test("filter before slicing; global names and name-scoped kind counts survive pagination", () => {
  for (const name of [undefined, "alpha", "beta", "missing"]) {
    for (const kind of [undefined, ...WIRE_KINDS]) {
      const expected = items.filter(row => (!name || row.slug === name) && (!kind || row.kind === kind));
      const first = feedPage(items, { name, kind });
      const pages = Array.from({ length: first.pages }, (_, i) => feedPage(items, { name, kind, page: i + 1 }));
      assert.deepEqual(pages.flatMap(page => page.wire), expected);
      assert.equal(first.total, expected.length);
      assert.equal(first.counts.all, items.filter(row => !name || row.slug === name).length);
      for (const page of pages) {
        assert.deepEqual(page.names.map(row => row.slug), ["alpha", "beta"]);
        assert.deepEqual(page.counts, first.counts);
        assert.ok(page.wire.length <= FEED_PAGE_SIZE);
      }
    }
  }
});

test("empty archives and out-of-range pages have bounded, honest ranges", () => {
  const empty = feedPage([], { page: 999999999 });
  assert.deepEqual([empty.first, empty.last, empty.total, empty.page, empty.pages], [0, 0, 0, 1, 1]);
  const last = feedPage(items, { page: 999999999 });
  assert.deepEqual([last.first, last.last, last.page, last.pages], [201, 237, 5, 5]);
  assert.deepEqual(last.wire, items.slice(200));
});

test("normalization rejects malformed input and never accepts a caller page-size override", () => {
  for (const page of [-1, 0, 1.5, Infinity, NaN, {}, [], "-2", "2.5", "2e2", "9999999999"]) {
    assert.equal(normalizeFeedSearch({ page }).page, undefined);
  }
  for (const input of [null, undefined, "bad", 9]) assert.deepEqual(normalizeFeedSearch(input), {});
  assert.deepEqual(normalizeFeedSearch({ page: "2", kind: "talk", name: "alpha" }), { page: 2, kind: "talk", name: "alpha" });
  assert.deepEqual(normalizeFeedSearch({ kind: "constructor", name: "../alpha", limit: 99999 }), {});
  assert.equal(feedPage(items, { pageSize: 99999 }).wire.length, FEED_PAGE_SIZE);
});
