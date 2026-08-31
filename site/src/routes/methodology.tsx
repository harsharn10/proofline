import { createFileRoute } from "@tanstack/react-router";
import { getMethodology } from "@/data/content-server";

export const Route = createFileRoute("/methodology")({
  loader: () => getMethodology(),
  component: MethodologyPage,
});

function MethodologyPage() {
  const { html, methodologyVersion } = Route.useLoaderData();
  return (
    <div className="min-h-dvh bg-bg text-fg">
      <article className="mx-auto max-w-3xl px-4 py-8 sm:px-6 sm:py-10">
        <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted">
          Methodology · {methodologyVersion}
        </p>
        {/* html is produced by data/markdown.ts (renderWholeMarkdown) from content/methodology.md —
            HTML comments already stripped, GFM tables and headings rendered via marked. */}
        <div
          className="research-body mt-6 text-sm leading-relaxed text-fg"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </article>
    </div>
  );
}
