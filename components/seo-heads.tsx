import { DefaultSeo, DefaultSeoProps } from "next-seo";
import Head from "next/head";
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
export const DefaultTags = (custom?: TagsOverride): DefaultSeoProps => ({
  title: custom?.title ?? SITE_TITLE,
  description: custom?.description ?? SITE_DESCRIPTION,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_LINK,
    title: custom?.title ?? SITE_TITLE,
    description: custom?.description ?? SITE_DESCRIPTION,
    site_name: custom?.title ?? SITE_TITLE,
    images: [
      {
        url: custom?.banner ?? OG_BANNER_LINK,
        alt: custom?.title ?? SITE_TITLE,
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
      content: custom?.banner ?? OG_BANNER_LINK,
    },
    {
      name: "twitter:url",
      content: SITE_LINK,
    },
    {
      property: "og:image",
      content: custom?.banner ?? OG_BANNER_LINK,
    },
  ],
});
export const WebsiteHead: React.FC<TagsOverride> = (custom: TagsOverride) => (
  <>
    <DefaultSeo {...DefaultTags(custom)} />
  </>
);

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
