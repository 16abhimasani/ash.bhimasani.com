import React from "react";
import NextLink from "next/link";

const assetPrefix = process.env.BACKEND_URL;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Link: React.FC<any> = ({ href, ...rest }) => (
  <NextLink href={href} as={`${assetPrefix}${href}`} passHref {...rest} />
);

export default Link;
