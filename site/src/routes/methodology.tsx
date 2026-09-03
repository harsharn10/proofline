import { createFileRoute } from "@tanstack/react-router";
import { getContent, getMethodology } from "@/data/content-server";

export const Route = createFileRoute("/methodology")({
  loader: async () => {
    const [methodology, directory] = await Promise.all([getMethodology(), getContent()]);
    return { ...methodology, site: directory.site };
  },
  head: () => ({
    meta: [
      { title: "How to read this · Icarus" },
      {
        name: "description",
        content: "How Icarus reads status, control, evidence and on-chain activity.",
      },
    ],
  }),
  component: MethodologyPage,
});

function MethodologyPage() {
  const { html, methodologyVersion, site } = Route.useLoaderData();
  const corrections = site.corrections.destination;
  return (
    <article className="wrap narrow pb-10">
      <p className="eyebrow">Methodology · {methodologyVersion}</p>
      <h1 className="text-2xl font-bold tracking-tight">How to read this</h1>

      <div className="research-body mt-6" dangerouslySetInnerHTML={{ __html: html }} />

      {site.telegram.enabled && site.telegram.url !== "TODO" ? (
        <p className="mt-6">
          <a className="text-[var(--acc)]" href={site.telegram.url} target="_blank" rel="noreferrer">
            Get Icarus updates on Telegram →
          </a>
        </p>
      ) : null}
      {corrections !== "TODO" ? (
        <p className="mt-3">
          <a
            className="text-[var(--acc)]"
            href={corrections.includes("@") ? `mailto:${corrections}` : corrections}
          >
            Submit a correction →
          </a>
        </p>
      ) : null}
    </article>
  );
}
