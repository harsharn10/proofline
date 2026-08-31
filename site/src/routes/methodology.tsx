import { createFileRoute } from "@tanstack/react-router";
import { getMethodology } from "@/data/content-server";

export const Route = createFileRoute("/methodology")({
  loader: () => getMethodology(),
  component: MethodologyPage,
});

function MethodologyPage() {
  const { html, methodologyVersion } = Route.useLoaderData();
  return (
    <article className="wrap narrow pb-10">
      <p className="eyebrow">Methodology · {methodologyVersion}</p>
      {/* html is produced by data/markdown.ts (renderWholeMarkdown) from content/methodology.md —
          HTML comments already stripped, GFM tables and headings rendered via marked. */}
      <div className="research-body mt-5" dangerouslySetInnerHTML={{ __html: html }} />
    </article>
  );
}
