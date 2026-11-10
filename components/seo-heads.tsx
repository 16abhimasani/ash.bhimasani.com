import { DefaultSeo, DefaultSeoProps } from "next-seo";
import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import {
  BANNER_ROOT,
  OG_BANNER_LINK,
  SITE_DESCRIPTION,
  SITE_LINK,
  SITE_TITLE,
  TWITTER_HANDLE,
} from "../utils/constants";

interface TagsOverride {
  title?: string;
  description?: string;
  banner?: string;
}

const BANNER_SIZE: Record<string, { width: number; height: number }> = {
  [OG_BANNER_LINK]: { width: 2563, height: 1458 },
  [`${BANNER_ROOT}/bitpay.jpg`]: { width: 3726, height: 1863 },
  [`${BANNER_ROOT}/bitpay-ext.jpg`]: { width: 2101, height: 1051 },
  [`${BANNER_ROOT}/phantom.jpg`]: { width: 1200, height: 630 },
  [`${BANNER_ROOT}/pob-holo.jpg`]: { width: 3840, height: 2160 },
  [`${BANNER_ROOT}/0x.png`]: { width: 1200, height: 630 },
  [`${BANNER_ROOT}/matcha-3.png`]: { width: 2060, height: 1000 },
};

export const DefaultTags = (
  custom?: TagsOverride,
  url: string = SITE_LINK,
): DefaultSeoProps => {
  const banner = custom?.banner ?? OG_BANNER_LINK;
  const size = BANNER_SIZE[banner];
  return {
    title: custom?.title ?? SITE_TITLE,
    description: custom?.description ?? SITE_DESCRIPTION,
    canonical: url,
    openGraph: {
      type: "website",
      locale: "en_US",
      url,
      title: custom?.title ?? SITE_TITLE,
      description: custom?.description ?? SITE_DESCRIPTION,
      site_name: SITE_TITLE,
      images: [
        {
          url: banner,
          alt: custom?.title ?? SITE_TITLE,
          ...(size ?? {}),
        },
      ],
    },
    twitter: {
      handle: TWITTER_HANDLE,
      site: TWITTER_HANDLE,
      cardType: "summary_large_image",
    },
    additionalMetaTags: [
      {
        name: "twitter:image",
        content: banner,
      },
      {
        name: "twitter:url",
        content: url,
      },
      {
        property: "og:image",
        content: banner,
      },
    ],
  };
};
export const WebsiteHead: React.FC<TagsOverride> = (custom: TagsOverride) => {
  const router = useRouter();
  const path = (router.asPath || "/").split("?")[0].split("#")[0];
  const canonicalPath = path === "/portfolio" ? "/work" : path;
  const url = `${SITE_LINK}${canonicalPath === "/" ? "" : canonicalPath}`;
  return <DefaultSeo {...DefaultTags(custom, url)} />;
};

export const BitPayScripts = (
  <Head>
    <script
      type="text/javascript"
      src="https://test.bitpay.com/bitpay.min.js"
    ></script>
  </Head>
);
export const BitPayHead = (
  <>
    <WebsiteHead
      title={`Ash - BitPay - Blockchain Payment Processor`}
      banner={`${BANNER_ROOT}/bitpay.jpg`}
    />
    {BitPayScripts}
  </>
);

export const BitPayInvoiceHead = (
  <>
    <WebsiteHead
      title={`Designed by Ash - BitPay Invoice V4`}
      banner={`${BANNER_ROOT}/bitpay.jpg`}
    />
    {BitPayScripts}
  </>
);

export const BitPayExtHead = (
  <>
    <WebsiteHead
      title={`Designed by Ash - BitPay Browser Extension`}
      banner={`${BANNER_ROOT}/bitpay-ext.jpg`}
    />
    {BitPayScripts}
  </>
);

export const ZeroXHead = (
  <WebsiteHead
    title={`Ash - 0x Labs - Powering Decentralized Exchange`}
    banner={`${BANNER_ROOT}/0x.png`}
  />
);

export const MatchaHead = (
  <WebsiteHead
    title={`Ash - Matcha - DeFi for the masses`}
    banner={`${BANNER_ROOT}/matcha-3.png`}
  />
);

export const POBHead = (
  <WebsiteHead
    title={`Ash - Proof of Beauty Studios`}
    description={`NFT Experiences ✨. Archiving Ethereum's history w/ generative art`}
    banner={`${BANNER_ROOT}/pob-holo.jpg`}
  />
);

export const PhantomHead = (
  <WebsiteHead
    title={`Ash - Phantom - Future of Self-Custody`}
    banner={`${BANNER_ROOT}/phantom.jpg`}
  />
);
