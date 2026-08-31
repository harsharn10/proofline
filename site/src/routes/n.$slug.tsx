import { Link, createFileRoute, notFound } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { Dossier } from "@/components/dossier";
import { getDossier } from "@/data/content-server";

export const Route = createFileRoute("/n/$slug")({
  loader: async ({ params }) => {
    const result = await getDossier({ data: params.slug });
    const { dossier, ...rest } = result;
    if (!dossier) throw notFound();
    return { dossier, ...rest };
  },
  component: NamePage,
  notFoundComponent: () => (
    <div className="min-h-dvh bg-bg text-fg">
      <div className="mx-auto max-w-3xl px-4 py-16">
        <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-subtle">Not on file</p>
        <h1 className="mt-2 text-2xl font-medium">That name is not in the file yet.</h1>
        <p className="mt-3 max-w-prose text-sm text-muted">
          Send the ticker and we will research it — overview, links, and a feed of company posts plus what people are saying.
        </p>
        <Link to="/" className="mt-6 inline-flex h-11 items-center text-sm text-accent hover:underline">
          Back to the file
        </Link>
      </div>
    </div>
  ),
});

function NamePage() {
  // The loader also carries `accounts` (handle/tier/role for the handles this feed cites — never a
  // note); the dossier reads its trending handles from derived.trendingAccounts and does not need it.
  const { dossier, site, dependencies } = Route.useLoaderData();
  return (
    <div className="min-h-dvh bg-bg text-fg">
      <div className="mx-auto max-w-3xl px-4 pt-4 sm:px-6">
        <Link
          to="/"
          className="inline-flex h-11 items-center gap-2 text-sm text-muted hover:text-fg"
        >
          <ArrowLeft className="size-4" />
          All names
        </Link>
      </div>
      <Dossier dossier={dossier} site={site} dependencies={dependencies} />
    </div>
  );
}
