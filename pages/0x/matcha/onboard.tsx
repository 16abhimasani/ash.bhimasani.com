import React from "react";
import { motion } from "framer-motion";
import { fadeInPage } from "../../../animations/page";
import Anchor from "../../../components/utils/anchor";
import Tweet from "../../../components/utils/tweet";
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
      content="/banners/matcha.png"
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
      <h2 className="begin-section pt-0">Enhanced Onboarding</h2>
      <time>UI Engineering</time>
      <img
        className="begin-section"
        width="100%"
        src="/banners/matcha-3.png"
        alt="Moolah Banner"
      />
      <div className="lead begin-section">
        <p>
          In order to further promote Matcha and get existing DEX users to
          switch over, the team designed a
          <Anchor
            content="Referral Contest"
            href="https://matcha.xyz/blog/refer-your-friends-and-win-eth"
            spaceBefore
            spaceAfter
          />
          with up to <span className="f-600">$50,000 in ETH</span> being given
          away.
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
        <h2 className="begin-section">Setup Wallet</h2>
        <h5 className="end-section">A walkthrough in to self custody</h5>
        <WideScreen src={["/imgs/matcha/moolah/home-banner.png"]} carousel />
        <div className="lead begin-section end-section">
          <p>
            Obviously, the first part of any Authentication flow is the Account
            Creation flow. This would be utilized whenever a user visits our
            payment gateway when making a transaction over $3k USD.
          </p>
        </div>
        <div className="begin-section end-section wrapper-center v-align col">
          <Tweet src="https://twitter.com/matchaxyz/status/1346253769282002944" />
        </div>
      </section>

      <section>
        <h2 className="begin-section">Fund Wallet</h2>
        <h5 className="end-section">
          Direct exchange integration & credit card support
        </h5>
        <WideScreen src={["/imgs/matcha/moolah/home-banner.png"]} carousel />
        <div className="lead begin-section end-section">
          <p>
            Obviously, the first part of any Authentication flow is the Account
            Creation flow. This would be utilized whenever a user visits our
            payment gateway when making a transaction over $3k USD.
          </p>
        </div>
      </section>
    </motion.main>
  </>
);

export default MatchaOnboard;
