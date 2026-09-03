import { useRef, useState } from "react";
import { useNavigate } from "@tanstack/react-router";

type NameRef = { slug: string; symbol: string | null; name: string };

export function TopbarSearch({ names }: { names: NameRef[] }) {
  const [q, setQ] = useState("");
  const [open, setOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  const needle = q.trim().toLowerCase();
  const matches = needle
    ? names
        .map((n) => {
          const symbol = (n.symbol ?? "").toLowerCase();
          const name = n.name.toLowerCase();
          let score = -1;
          if (symbol.startsWith(needle) || name.startsWith(needle)) score = 0;
          else if (symbol.includes(needle) || name.includes(needle) || n.slug.includes(needle)) score = 1;
          return { n, score };
        })
        .filter((x) => x.score >= 0)
        .sort((a, b) => a.score - b.score || a.n.name.localeCompare(b.n.name))
        .slice(0, 8)
        .map((x) => x.n)
    : [];

  function go(slug: string) {
    setQ("");
    setOpen(false);
    inputRef.current?.blur();
    void navigate({ to: "/n/$slug", params: { slug } });
  }

  return (
    <div className="searchwrap">
      <input
        ref={inputRef}
        className="topsearch"
        value={q}
        onChange={(e) => {
          setQ(e.target.value);
          setOpen(true);
        }}
        onFocus={() => setOpen(true)}
        onBlur={() => window.setTimeout(() => setOpen(false), 120)}
        onKeyDown={(e) => {
          if (e.key === "Enter" && matches[0]) go(matches[0].slug);
          if (e.key === "Escape") {
            setQ("");
            setOpen(false);
            inputRef.current?.blur();
          }
        }}
        placeholder="Jump to a name"
        aria-label="Search names"
      />
      {open && matches.length > 0 ? (
        <div className="searchpanel">
          {matches.map((m) => (
            <button key={m.slug} type="button" onMouseDown={() => go(m.slug)}>
              <b>{m.symbol ?? m.name}</b>
              <span>{m.name}</span>
            </button>
          ))}
        </div>
      ) : null}
    </div>
  );
}
