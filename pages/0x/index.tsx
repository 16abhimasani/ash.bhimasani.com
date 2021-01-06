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
      <h1 className="begin-section pt-0">0x Labs &nbsp;🍵</h1>
      <div className="lead end-section">
        <p>
          0x is an
          <Anchor
            content="open protocol"
            href="https://0x.org/"
            spaceBefore
            spaceAfter
          />
          that enables the efficient exchange of tokenized assets on the
          Ethereum blockchain.
        </p>
        <p>
          The protocol is
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
          as a showcase.
        </p>
        <p>
          I currently work on the
          <Anchor
            content="matcha.xyz"
            href="https://matcha.xyz/"
            spaceBefore
            spaceAfter
          />
          <Anchor
            content="team"
            href="https://www.linkedin.com/company/0x/people/"
            spaceBefore
            spaceAfter
          />
          ~
        </p>
      </div>

      <h3 className="begin-section">Products</h3>
      <PostBox
        icon="/logos/matcha.png"
        title="Matcha &nbsp;🍵"
        caption="Decentralized crypto trading for the masses"
        link="https://matcha.xyz/"
        newTab
      />

      <h5 className="begin-section">Major contributions</h5>
      <div className="lead">
        <ol className="list">
          <li className="list__item">
            <div className="list__item__number">1</div>
            <div>
              Matcha Moolah:
              <Anchor
                content="Referral Contest"
                href="https://matcha.xyz/blog/refer-your-friends-and-win-eth"
                spaceBefore
              />
            </div>
          </li>
        </ol>
      </div>
    </motion.main>
  </>
);

export default ZeroX;
