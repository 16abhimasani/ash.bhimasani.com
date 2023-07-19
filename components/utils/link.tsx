import NextLink from "next/link";
import React from "react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Link: React.FC<any> = ({ href, ...rest }) => (
  <NextLink href={href} passHref {...rest} />
);

export default Link;
