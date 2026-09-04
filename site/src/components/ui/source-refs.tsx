import { Link } from "@tanstack/react-router";

/**
 * Footnote superscripts for the source ids a line carries. On a name card the ids resolve against
 * the card the reader is already on (`from`); anywhere else — the home rows, a category table — the
 * caller passes the slug so the number lands on that name's Sources tab.
 */
export function SourceRefs({ ids, slug }: { ids?: string[]; slug?: string }) {
  if (!ids?.length) return null;
  return (
    <>
      {ids.map((id) =>
        slug ? (
          <sup key={id}>
            <Link to="/n/$slug" params={{ slug }} search={{ tab: "sources" }} hash={`source-${id}`} resetScroll={false}>
              {id.replace(/^S/, "")}
            </Link>
          </sup>
        ) : (
          <sup key={id}>
            <Link from="/n/$slug" search={{ tab: "sources" }} hash={`source-${id}`} resetScroll={false}>
              {id.replace(/^S/, "")}
            </Link>
          </sup>
        ),
      )}
    </>
  );
}
