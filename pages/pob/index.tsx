import React, { useContext } from "react";
import Head from "next/head";
import { motion } from "framer-motion";
import { ThemeContext } from "../_app";
import { fadeInPage } from "../../animations/page";
import Anchor from "../../components/utils/anchor";
import PostBox from "../../components/post-box/post-box";
import Tweet from "../../components/utils/tweet";
import SideBar from "../../components/sidebar/sidebar";

export const POBHead = (
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

const POB: React.FC = () => {
  const theme = useContext(ThemeContext);
  return (
    <>
      {POBHead}
      <SideBar />
      <motion.main className="body" {...fadeInPage}>
        <section className="end-section">
          <h1 className="begin-section pt-0">Proof of Beauty &nbsp;💄</h1>
          <div className="lead">
            <p>
              We are an experimental{" "}
              <Anchor
                content="digital experience studio"
                href="https://pob.studio/"
                spaceBefore
              />
              .
            </p>
            <p>
              Our first project tokenizes Ethereum's history into beautiful
              works of art.
            </p>
          </div>
        </section>

        <section className="end-section">
          <h3 className="begin-section">Projects</h3>
          <PostBox
            icon="/logos/pob.svg"
            title="$HASH"
            caption="Generative art powered by on-chain metadata"
            link="https://pob.studio/"
            newTab
          />
          <h5 className="begin-section">Releases</h5>
          <PostBox
            icon="/logos/pob.svg"
            title="S1: SAGA"
            caption="Mint your TXs | Only 10,000 will exist"
            link="https://pob.studio/"
            newTab
            date="April 2021"
            locked
          />
          <PostBox
            icon="/logos/pob.svg"
            title="S0: GENESIS"
            caption="Mint any TX | Only 2555 will exist"
            link="https://pob.studio/"
            newTab
            date="Jan ~ Feb 2021"
          />
        </section>

        <section className="begin-section wrapper-center v-align col">
          <Tweet src="https://twitter.com/prrfbeauty/status/1366424062503882761" />
          <br />
          <br />
          <Tweet src="https://twitter.com/timrix/status/1365006217018400770" />
          <br />
          <br />
        </section>

        <section className="wrapper-center">
          <img
            width="100%"
            src={`/banners/pob-${theme.dark ? "dark" : "light"}.jpg`}
          />
        </section>
      </motion.main>
    </>
  );
};

export default POB;
