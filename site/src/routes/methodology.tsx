import { createFileRoute } from "@tanstack/react-router";
import { getMethodology } from "@/data/content-server";
import { formatDate } from "@/lib/utils";

export const Route = createFileRoute("/methodology")({
  loader: () => getMethodology(),
  component: MethodologyPage,
});

// The glossary first (eregion guide page): every word and mark a profile uses, defined once here
// instead of explained per cell. Then the methodology text from content/methodology.md.
function MethodologyPage() {
  const { html, methodologyVersion, chain, trending } = Route.useLoaderData();
  return (
    <article className="wrap narrow pb-10">
      <p className="eyebrow">Methodology · {methodologyVersion}</p>
      <h1 className="text-2xl font-bold tracking-tight">How to read a profile</h1>

      <dl className="glossary mt-5">
        <dt>Initial research</dt>
        <dd>
          The name is on file with its links, what has been located on chain so far, its sources, and the
          questions still open. No score. Most names start here.
        </dd>
        <dt>Full research</dt>
        <dd>
          A complete record: every documented contract reproduced on the explorer, control and security
          read from source where possible, an evidence score with a confidence figure, and a risk level.
        </dd>
        <dt>Score and confidence</dt>
        <dd>
          The score is derived by scripts from stored inputs; nobody types it. Confidence says how much of
          the record rests on primary sources and on-chain reproduction. Below 50% the score is withheld.
          Between 50% and 69% it shows as provisional: a second person has not yet signed it off.
        </dd>
        <dt>Reported</dt>
        <dd>
          A figure copied from its source (DefiLlama, an explorer, a post) with the date it was read. Not
          reproduced by Proofline. Every reported figure carries its as-of date.
        </dd>
        <dt>Verified on-chain</dt>
        <dd>
          Reproduced from on-chain data: an explorer page, an RPC read at a pinned block, or the official
          contracts registry. The source row says what was observed.
        </dd>
        <dt>Project claim · inference · disputed · unknown</dt>
        <dd>
          What the project or a third party said; what follows from the evidence without being stated in
          it; a statement two sources contradict; a question nobody could settle. Unknown earns no credit.
        </dd>
        <dt>S1, S2, …</dt>
        <dd>
          Source ids. Each points at one row of that name's source ledger, which records the URL, who
          published it, when it was read, and the excerpt that supports the claim. Click one to jump to
          the row.
        </dd>
        <dt>Not yet located · not yet settled</dt>
        <dd>
          Two different gaps. Not yet located means a fact was searched for and not found. Not yet settled
          means the evidence exists and does not agree.
        </dd>
        <dt>Trending</dt>
        <dd>
          At least {trending.min_accounts} tracked accounts posted about the name inside {trending.window_days}{" "}
          days. Attention, not quality.
        </dd>
        <dt>Chain facts</dt>
        <dd>
          {chain.checked
            ? `Chain id, RPC and explorer were last reproduced against ${chain.docs.replace(/^https?:\/\//, "")} on ${formatDate(chain.checked)}.`
            : `Chain id, RPC and explorer are taken from ${chain.docs.replace(/^https?:\/\//, "")} and have not yet been re-checked against it. Treat them as reported.`}
        </dd>
      </dl>

      {/* html is produced by data/markdown.ts (renderWholeMarkdown) from content/methodology.md —
          HTML comments already stripped, GFM tables and headings rendered via marked. */}
      <div className="research-body mt-10" dangerouslySetInnerHTML={{ __html: html }} />
    </article>
  );
}
