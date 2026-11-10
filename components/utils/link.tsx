import NextLink from "next/link";
import React from "react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Link: React.FC<any> = ({ href, prefetch = false, ...rest }) => (
  <NextLink href={href} prefetch={prefetch} {...rest} />
);

export default Link;
