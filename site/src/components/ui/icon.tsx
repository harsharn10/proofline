import type { ReactNode, SVGProps } from "react";

export type IconName =
  | "rocket"
  | "cat"
  | "tag"
  | "cal"
  | "drop"
  | "key"
  | "shield"
  | "users"
  | "flame"
  | "ext"
  | "check"
  | "msg"
  | "send"
  | "feather"
  | "trend"
  | "bell";

const paths: Record<IconName, ReactNode> = {
  rocket: (
    <>
      <path d="M4 13a8 8 0 0 1 7 7 6 6 0 0 0 3-5 9 9 0 0 0 6-8 3 3 0 0 0-3-3 9 9 0 0 0-8 6 6 6 0 0 0-5 3" />
      <path d="M7 14a6 6 0 0 0-3 6 6 6 0 0 0 6-3" />
      <circle cx="15" cy="9" r="1" />
    </>
  ),
  cat: (
    <>
      <rect x="4" y="4" width="6" height="6" rx="1" />
      <rect x="14" y="4" width="6" height="6" rx="1" />
      <rect x="4" y="14" width="6" height="6" rx="1" />
      <rect x="14" y="14" width="6" height="6" rx="1" />
    </>
  ),
  tag: (
    <>
      <circle cx="7.5" cy="7.5" r="1" />
      <path d="M3 6v5.172a2 2 0 0 0 .586 1.414l7.71 7.71a2.41 2.41 0 0 0 3.408 0l5.592-5.592a2.41 2.41 0 0 0 0-3.408l-7.71-7.71A2 2 0 0 0 11.172 3H6a3 3 0 0 0-3 3" />
    </>
  ),
  cal: (
    <>
      <rect x="4" y="5" width="16" height="16" rx="2" />
      <path d="M16 3v4M8 3v4M4 11h16" />
    </>
  ),
  drop: <path d="M6.8 11a6 6 0 1 0 10.4 0L12 3z" />,
  key: (
    <>
      <circle cx="8" cy="15" r="4" />
      <path d="M10.85 12.15 19 4M18 5l2 2M15 8l2 2" />
    </>
  ),
  shield: <path d="M12 3a12 12 0 0 0 8.5 3A12 12 0 0 1 12 21 12 12 0 0 1 3.5 6 12 12 0 0 0 12 3" />,
  users: (
    <>
      <circle cx="9" cy="7" r="4" />
      <path d="M3 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2M16 3.13a4 4 0 0 1 0 7.75M21 21v-2a4 4 0 0 0-3-3.85" />
    </>
  ),
  flame: <path d="M12 12c2-2.96 0-7-1-8 0 3.04-1.77 4.31-3 5.5-2 2-3 5.5-3 7a7 7 0 0 0 14 0c0-2.5-2-5.5-4-7 0 2-2 3-3 2.5" />,
  ext: <path d="M12 6H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-6M11 13l9-9M15 4h5v5" />,
  check: <path d="M5 12l5 5L20 7" />,
  msg: <path d="M8 9h8M8 13h6M9 18H6a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3h-5l-5 3v-3" />,
  send: <path d="M10 14 21 3M21 3l-6.5 18a.55.55 0 0 1-1 0L10 14l-7-3.5a.55.55 0 0 1 0-1z" />,
  feather: <path d="M4 20 20 4M5 19c6 0 12-3 14-14C8 7 5 13 5 19" />,
  trend: <path d="m3 17 6-6 4 4 8-8M14 7h7v7" />,
  bell: <path d="M10 5a2 2 0 1 1 4 0 7 7 0 0 1 4 6v3a4 4 0 0 0 2 3H4a4 4 0 0 0 2-3v-3a7 7 0 0 1 4-6M9 17v1a3 3 0 0 0 6 0v-1" />,
};

export type IconProps = Omit<SVGProps<SVGSVGElement>, "name"> & { name: IconName };

export function Icon({ name, className = "ui-icon", ...props }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden={props["aria-label"] ? undefined : true}
      {...props}
    >
      {paths[name]}
    </svg>
  );
}
