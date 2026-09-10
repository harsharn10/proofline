import { isWireKind, WIRE_KINDS, type WireItem, type WireKind } from "./types.ts";

export const FEED_PAGE_SIZE = 50;
export type FeedSearch = { kind?: WireKind; name?: string; page?: number };

// Used on both the URL and server-function boundary; callers cannot request an
// unbounded page size or smuggle malformed filters past route validation.
export function normalizeFeedSearch(input: unknown): FeedSearch {
  const search = input && typeof input === "object" ? input as Record<string, unknown> : {};
  const page = typeof search.page === "number" ? search.page
    : typeof search.page === "string" && /^[1-9]\d{0,8}$/.test(search.page) ? Number(search.page) : 1;
  return {
    ...(isWireKind(search.kind) ? { kind: search.kind } : {}),
    ...(typeof search.name === "string" && /^[a-z0-9][a-z0-9-]{0,127}$/.test(search.name) ? { name: search.name } : {}),
    ...(Number.isSafeInteger(page) && page > 1 && page <= 999999999 ? { page } : {}),
  };
}

export function feedPage(items: WireItem[], input: unknown) {
  const search = normalizeFeedSearch(input);
  const names = [...new Map(items.map(item => [item.name.slug, item.name])).values()]
    .sort((a, b) => a.name.localeCompare(b.name));
  const inName = search.name ? items.filter(item => item.slug === search.name) : items;
  const counts = Object.fromEntries([
    ["all", inName.length],
    ...WIRE_KINDS.map(kind => [kind, inName.filter(item => item.kind === kind).length]),
  ]) as Record<WireKind | "all", number>;
  const filtered = search.kind ? inName.filter(item => item.kind === search.kind) : inName;
  const total = filtered.length;
  const pages = Math.max(1, Math.ceil(total / FEED_PAGE_SIZE));
  const page = Math.min(search.page ?? 1, pages);
  const start = (page - 1) * FEED_PAGE_SIZE;
  return { wire: filtered.slice(start, start + FEED_PAGE_SIZE), names, counts, total, page, pages,
    first: total ? start + 1 : 0, last: Math.min(start + FEED_PAGE_SIZE, total) };
}
