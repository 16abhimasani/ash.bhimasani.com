import React from "react";

const Anchor: React.FC<{
  content: string;
  href: string;
  color?: string;
  bold?: boolean;
  spaceBefore?: boolean;
  spaceAfter?: boolean;
  newTab?: boolean;
}> = ({
  content,
  href,
  color,
  bold,
  spaceBefore,
  spaceAfter,
  newTab = true,
}) => (
  <a
    className={`link ${color ? "link--" + color : ""} ${bold ? "f-600" : ""}`}
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
