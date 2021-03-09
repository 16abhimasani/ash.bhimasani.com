import React from "react";
import { motion } from "framer-motion";
import { fadeInPage } from "../../../animations/page";
import Anchor from "../../../components/utils/anchor";
import WideScreen from "../../../components/wide-screen/wide-screen";
import SideBar from "../../../components/sidebar/sidebar";
import Head from "next/head";

export const MatchaHead = (
  <Head>
    <meta
      property="description"
      content="Matcha - DEX trading for the masses "
      key="description"
    />
    <meta
      property="twitter:image"
      content="/banners/matcha-3.png"
      key="twitter-image"
    />
    <meta property="og:image" content="/banners/matcha.png" key="og-image" />
  </Head>
);

const MatchaOnboard: React.FC = () => (
  <>
    {MatchaHead}
    <SideBar />
    <motion.main className="body" {...fadeInPage}>
      <h2 className="begin-section pt-0">Matcha Onboarding V2</h2>
      <time>UI Engineering</time>
      <img
        className="begin-section"
        width="100%"
        src="/banners/hello-matcha.png"
        alt="Moolah Banner"
      />
      <h3 className="begin-section">Mission:</h3>
      <div className="lead end-section">
        <p>
          It’s critical that we design the best possible onboarding experience
          for anybody who is interested in entering the DeFi space. If last year
          is any indication, millions of new users will enter the space and we
          need to be the go-to-place for them to get up and running. Whether our
          new users are coming from Uniswap, a Centralized Exchange, or they’re
          brand new, we should guide them through the steps required to make
          their first trade on Matcha.
        </p>
        <p>
          This beautiful design is by
          <Anchor
            content="Patryk Adas"
            href="https://patrykadas.com/"
            spaceBefore
          />
          .
        </p>
      </div>

      <section>
        <h2 className="begin-section">Exchange Funnel</h2>
        <h5 className="end-section">A walkthrough into self custody</h5>
        <WideScreen
          src={[
            "/imgs/matcha/onboarding/log-in.png",
            "/imgs/matcha/onboarding/start.png",
            "/imgs/matcha/onboarding/exchange-coinbase.png",
            "/imgs/matcha/onboarding/exchange-binance.png",
            "/imgs/matcha/onboarding/exchange-gemini.png",
          ]}
          carousel
        />
        <div className="lead begin-section end-section">
          <p>
            It’s critical that we design the best possible onboarding experience
            for anybody who is interested in entering the DeFi space. If last
            year is any indication, millions of new users will enter the space
            and we need to be the go-to-place for them to get up and running.
            Whether our new users are coming from Uniswap, a Centralized
            Exchange, or they’re brand new, we should guide them through the
            steps required to make their first trade on Matcha.
          </p>
        </div>
      </section>

      <section className="begin-section">
        <h2 className="begin-section">Select Wallet</h2>
        <h5 className="end-section">Leveraging familiar brands and flows</h5>
        <WideScreen
          src={[
            "/imgs/matcha/onboarding/select-generic.png",
            "/imgs/matcha/onboarding/select-coinbase.png",
            "/imgs/matcha/onboarding/select-argent.png",
            "/imgs/matcha/onboarding/select-trust.png",
          ]}
          carousel
        />
        <div className="lead begin-section end-section">
          <p>
            It’s critical that we design the best possible onboarding experience
            for anybody who is interested in entering the DeFi space. If last
            year is any indication, millions of new users will enter the space
            and we need to be the go-to-place for them to get up and running.
            Whether our new users are coming from Uniswap, a Centralized
            Exchange, or they’re brand new, we should guide them through the
            steps required to make their first trade on Matcha.
          </p>
        </div>
      </section>

      <section className="begin-section">
        <h2 className="begin-section">Download Wallet</h2>
        <h5 className="end-section">Guiding you through setup</h5>
        <WideScreen
          src={[
            "/imgs/matcha/onboarding/download-metamask.png",
            "/imgs/matcha/onboarding/download-coinbase.png",
            "/imgs/matcha/onboarding/download-argent.png",
            "/imgs/matcha/onboarding/download-trust.png",
          ]}
          carousel
        />
        <div className="lead begin-section end-section">
          <p>
            It’s critical that we design the best possible onboarding experience
            for anybody who is interested in entering the DeFi space. If last
            year is any indication, millions of new users will enter the space
            and we need to be the go-to-place for them to get up and running.
            Whether our new users are coming from Uniswap, a Centralized
            Exchange, or they’re brand new, we should guide them through the
            steps required to make their first trade on Matcha.
          </p>
        </div>
      </section>

      <section className="begin-section">
        <h2 className="begin-section">Connect Wallet</h2>
        <h5 className="end-section">Pairing made intuitive & native</h5>
        <WideScreen
          src={[
            "/imgs/matcha/onboarding/connect-metamask.png",
            "/imgs/matcha/onboarding/connect-coinbase.png",
            "/imgs/matcha/onboarding/connect-argent.png",
            "/imgs/matcha/onboarding/connect-trust.png",
          ]}
          carousel
        />
        <div className="lead begin-section end-section">
          <p>
            It’s critical that we design the best possible onboarding experience
            for anybody who is interested in entering the DeFi space. If last
            year is any indication, millions of new users will enter the space
            and we need to be the go-to-place for them to get up and running.
            Whether our new users are coming from Uniswap, a Centralized
            Exchange, or they’re brand new, we should guide them through the
            steps required to make their first trade on Matcha.
          </p>
        </div>
      </section>

      <img
        className="begin-section"
        width="100%"
        src="/banners/matcha-3.png"
        alt="Moolah Banner"
      />
    </motion.main>
  </>
);

export default MatchaOnboard;
