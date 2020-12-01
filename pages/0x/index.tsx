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
      <h1 className="begin-section pt-0">0x Labs &nbsp;🔮</h1>
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
          The team launched a
          <Anchor
            content="trading platform"
            href="https://matcha.xyz/"
            spaceBefore
            spaceAfter
          />
          to rethink the crypto experience and onboard the next wave of users
          globally.
        </p>
      </div>

      <h3 className="begin-section">Products</h3>
      <PostBox
        icon="/logos/matcha.jpg"
        title="Matcha &nbsp;🍵"
        caption="DEX aggregator for the masses"
        date="Dec 2020 ~ Present"
        link="https://matcha.xyz/"
        newTab
      />
    </motion.main>
  </>
);

export default ZeroX;
