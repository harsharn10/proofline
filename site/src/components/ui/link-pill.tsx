import { Icon } from "./icon";

export type LinkPillProps = {
  label: string;
  href: string;
  external?: boolean;
};

export function LinkPill({ label, href, external = false }: LinkPillProps) {
  return (
    <a className="ui-link-pill" href={href} target={external ? "_blank" : undefined} rel={external ? "noreferrer" : undefined}>
      {label}
      {external ? <Icon name="ext" /> : null}
    </a>
  );
}
