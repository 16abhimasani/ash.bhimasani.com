import React from "react";
import Head from "next/head";
import { motion } from "framer-motion";
import { fadeInPage } from "../../animations/page";
import Anchor from "../../components/utils/anchor";
import PostBox from "../../components/post-box/post-box";

const ZeroX: React.FC = () => (
  <>
    <Head>
      <meta
        property="description"
        content="0x Labs - Powering Decentralized Exchange"
        key="description"
      />
      <meta
        property="twitter:image"
        content="/banners/0x.png"
        key="twitter-image"
      />
      <meta property="og:image" content="/banners/0x.png" key="og-image" />
    </Head>
    <motion.main className="body" {...fadeInPage}>
      <h1 className="begin-section pt-0">0x Labs &nbsp;⚗️</h1>
      <div className="lead end-section">
        <p>
          0x is an
          <Anchor
            content="open protocol"
            href="https://0x.org/api"
            spaceBefore
            spaceAfter
          />
          that enables the peer-to-peer exchange of tokenized assets on the
          Ethereum blockchain.
        </p>
        <p>
          The 0x protocol is
          <Anchor
            content="secured"
            href="https://0x.org/zrx/staking"
            spaceBefore
            spaceAfter
          />
          and governed by the
          <Anchor
            content="ZRX token"
            href="https://www.coinbase.com/price/0x"
            spaceBefore
          />
          .
        </p>
        <p>
          The team launched their own
          <Anchor
            content="trading platform"
            href="https://matcha.xyz/"
            spaceBefore
            spaceAfter
          />
          to showcase the protocol and onboard the next wave of users globally.
        </p>
      </div>

      <h3 className="begin-section">Products</h3>
      <PostBox
        icon="/logos/matcha.png"
        title="Matcha &nbsp;🍵"
        caption="Decentralized token trading for the masses"
        link="https://matcha.xyz/"
        newTab
      />
      <PostBox
        icon="/logos/0x.svg"
        title="ZRX Platform"
        caption="Earn liquidity rewards and vote on ZEIPS"
        link="https://0x.org/zrx/staking"
        newTab
      />
    </motion.main>
  </>
);

export default ZeroX;
