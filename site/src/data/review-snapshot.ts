// Server-only immutable file reuse. Authentication remains the caller's responsibility.
// Ledger/sent state are never cached; cache entries contain no credentials or decisions.
// Byte limit counts UTF-8 body bytes, not JavaScript heap/Map overhead.
export type GitHubContent = { sha: string; content: string; encoding: string };
type RequestJson = (url: string, token: string) => Promise<unknown>;
type DirectoryFile = { name: string; path: string; type: string; sha: string };

export function createReviewReader(request: RequestJson, options: {
  concurrency?: number; maxEntries?: number; maxBytes?: number;
} = {}) {
  const concurrency = options.concurrency ?? 4;
  const maxEntries = options.maxEntries ?? 256;
  const maxBytes = options.maxBytes ?? 2 * 1024 * 1024;
  if (![concurrency, maxEntries, maxBytes].every(Number.isSafeInteger) || concurrency < 1 || maxEntries < 0 || maxBytes < 0)
    throw new Error("Invalid review read limits.");
  const cache = new Map<string, { text: string; bytes: number }>();
  let bytes = 0;
  let active = 0;
  const waiting: Array<() => void> = [];
  async function json<T>(url: string, token: string): Promise<T> {
    if (active >= concurrency) await new Promise<void>(resolve => waiting.push(resolve));
    else active++;
    try { return await request(url, token) as T; }
    finally {
      const next = waiting.shift();
      if (next) next(); // transfer this slot; do not briefly expose it to another caller
      else active--;
    }
  }
  function remember(key: string, text: string) {
    const size = Buffer.byteLength(text, "utf8");
    if (size > maxBytes || maxEntries === 0) return;
    const prior = cache.get(key);
    if (prior) { bytes -= prior.bytes; cache.delete(key); }
    while (cache.size && (cache.size >= maxEntries || bytes + size > maxBytes)) {
      const oldest = cache.keys().next().value!;
      bytes -= cache.get(oldest)!.bytes;
      cache.delete(oldest);
    }
    cache.set(key, { text, bytes: size });
    bytes += size;
  }
  return {
    async load(api: string, branch: string, token: string, includeSent = true) {
      const commit = await json<{ sha: string }>(`${api}/commits/${encodeURIComponent(branch)}`, token);
      if (!/^[a-f0-9]{40}$/.test(commit.sha)) throw new Error("Invalid review revision.");
      const contentUrl = (path: string) => `${api}/contents/${path}?ref=${commit.sha}`;
      const dir = await json<DirectoryFile[]>(contentUrl("content/changelog"), token);
      // Contents listings cap at 1000 entries. Never silently review a truncated directory.
      if (!Array.isArray(dir) || dir.length >= 1000) throw new Error("Review directory needs a complete, bounded listing.");
      const files = dir.filter(file => file.type === "file" && file.name.endsWith(".yaml"));
      for (const file of files) {
        if (!/^[a-f0-9]{40}$/.test(file.sha) || file.path !== `content/changelog/${file.name}` || file.name.includes("/"))
          throw new Error("Invalid review changelog file.");
      }
      const texts: string[] = new Array(files.length);
      let cursor = 0;
      let failed = false;
      const worker = async () => {
        while (!failed && cursor < files.length) {
          const index = cursor++;
          const file = files[index]!;
          const key = `${api}/${file.path}@${file.sha}`;
          const hit = cache.get(key);
          if (hit) {
            cache.delete(key); cache.set(key, hit);
            texts[index] = hit.text;
            continue;
          }
          try {
            const content = await json<GitHubContent>(contentUrl(`content/changelog/${encodeURIComponent(file.name)}`), token);
            if (content.sha !== file.sha) throw new Error("Review file revision mismatch.");
            texts[index] = decodeReviewContent(content);
            remember(key, texts[index]!);
          } catch (error) { failed = true; throw error; }
        }
      };
      const [reviewFile, sentStateFile] = await Promise.all([
        json<GitHubContent>(contentUrl("ops/telegram-review.json"), token),
        includeSent ? json<GitHubContent>(contentUrl("ops/telegram-state.json"), token) : undefined,
        ...Array.from({ length: Math.min(concurrency, files.length) }, worker),
      ]).catch(error => { failed = true; throw error; });
      return { revision: commit.sha, changelog: texts, reviewFile: reviewFile!, sentStateFile };
    },
  };
}

export function decodeReviewContent(file: GitHubContent): string {
  if (file.encoding !== "base64" || typeof file.content !== "string")
    throw new Error("Unexpected GitHub content encoding.");
  return Buffer.from(file.content.replace(/\n/g, ""), "base64").toString("utf8");
}
