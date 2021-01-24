import React from "react";
import Head from "next/head";
import { motion } from "framer-motion";
import { fadeInPage } from "../../animations/page";
import Anchor from "../../components/utils/anchor";
import PostBox from "../../components/post-box/post-box";
import Tweet from "../../components/utils/tweet";
import SideBar from "../../components/sidebar/sidebar";

export const ZeroXHead = (
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
);

const ZeroX: React.FC = () => (
  <>
    {ZeroXHead}
    <SideBar />
    <motion.main className="body" {...fadeInPage}>
      <section className="end-section">
        <h1 className="begin-section pt-0">0x Labs &nbsp;🍵</h1>
        <div className="lead">
          <p>
            <Anchor content="0x" href="https://0x.org/" spaceAfter />
            is an liquidity aggregation API for decentralized exchange.
          </p>
          <p>
            The protocol is
            <Anchor
              content="secured"
              href="https://0x.org/zrx/staking"
              spaceBefore
              spaceAfter
            />
            by the
            <img
              style={{
                marginLeft: 8,
                width: 16,
                transform: "translateY(1.5px)",
              }}
              src="icons/currencies/zrx.svg"
            />
            <Anchor
              content="ZRX token"
              href="https://www.coinbase.com/price/0x"
              spaceBefore
            />
            .
          </p>
          <p>
            To showcase the experience, the team launched their own world-class
            trading platform.
          </p>
          <p>
            I currently work on
            <Anchor
              content="matcha.xyz"
              href="https://matcha.xyz/"
              spaceBefore
              spaceAfter
            />
            ~
          </p>
        </div>
      </section>

      <section className="end-section">
        <h3 className="begin-section">Products</h3>
        <PostBox
          icon="/logos/matcha.png"
          title="Matcha &nbsp;🍵"
          caption="Decentralized crypto trading for the masses"
          link="https://matcha.xyz/"
          newTab
        />
        <h5 className="begin-section">Contributions</h5>
        <PostBox
          icon="/imgs/matcha/moolah/avatar.png"
          title="Matcha Moolah"
          caption="Referral contest giving away $50,000 in ETH"
          link="/0x/matcha/moolah"
        />
      </section>

      <section className="begin-section wrapper-center v-align col">
        <Tweet src="https://twitter.com/0xProject/status/1278014784747659270" />
        <br />
        <br />
        <Tweet src="https://twitter.com/0xProject/status/1352752762740592641" />
      </section>
    </motion.main>
  </>
);

export default ZeroX;
