import React, { useContext } from "react";
import Head from "next/head";
import { motion } from "framer-motion";
import { ThemeContext } from "../_app";
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

const ZeroX: React.FC = () => {
  const theme = useContext(ThemeContext);
  return (
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
              To showcase the experience, the team launched their own
              world-class trading platform.
            </p>
            <p>
              I worked on
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
            icon="/imgs/matcha/onboarding/coinbase-matcha-avatar.png"
            title="Enhanced Onboarding"
            caption="0-to-1 walkthrough into DeFi"
            link="/0x/matcha/onboard"
            date="Q1 2021"
          />
          <PostBox
            icon="/imgs/matcha/moolah/avatar.png"
            title="Matcha Moolah"
            caption="Referral contest giving away $50,000 in ETH"
            link="/0x/matcha/moolah"
            date="Dec 2020"
          />
        </section>

        <section className="begin-section wrapper-center v-align col">
          <Tweet src="https://twitter.com/0xProject/status/1278014784747659270" />
          <br />
          <br />
          <Tweet src="https://twitter.com/0xProject/status/1352752762740592641" />
          <br />
          <br />
          <Tweet src="https://twitter.com/BChillman/status/1354245209870098433" />
          <br />
          <br />
          <Tweet src="https://twitter.com/PanteraCapital/status/1357743064010289152" />
        </section>

        <section className="wrapper-center">
          <img
            width={312}
            src={`/imgs/matcha/0x-${theme.dark ? "dark" : "light"}.png`}
          />
        </section>
      </motion.main>
    </>
  );
};

export default ZeroX;
