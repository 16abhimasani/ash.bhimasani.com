import React from "react";

const Anchor: React.FC<{
  content: string;
  href: string;
  newTab?: boolean;
  color?: string;
  spaceBefore?: boolean;
  spaceAfter?: boolean;
}> = ({ content, href, newTab, color, spaceBefore, spaceAfter }) => (
  <a
    className={`link ${color ? "link--" + color : ""}`}
    href={href}
    target={newTab ? "_blank" : "_self"}
    rel={newTab ? "noopener noreferrer" : ""}
  >
    {spaceBefore && <>&nbsp;</>}
    {content}
    {spaceAfter && <>&nbsp;</>}
  </a>
);

export default Anchor;
