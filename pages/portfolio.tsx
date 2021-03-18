import React from "react";
import Head from "next/head";
import { motion } from "framer-motion";
import { fadeInPage } from "../animations/page";
import Anchor from "../components/utils/anchor";
import PostBox from "../components/post-box/post-box";
import SideBar from "../components/sidebar/sidebar";

export const PortfolioHead = (
  <Head>
    <meta
      property="description"
      content="Ash Bhimasani - Designer & Engineer"
      key="description"
    />
    <meta
      property="twitter:image"
      content="/banners/pob-light.jpg"
      key="twitter-image"
    />
    <meta property="og:image" content="/banners/pob-light.jpg" key="og-image" />
  </Head>
);

const Portfolio: React.FC = () => (
  <>
    {PortfolioHead}
    <SideBar />
    <motion.main className="body" {...fadeInPage}>
      <section className="end-section">
        <h2 className="begin-section pt-0">I'm Ash Bhimasani</h2>
        <div className="lead">
          <p>
            I am a product designer & software engineer with special interests
            in user experience, growth, and strategy.
          </p>
          <p>
            Working on
            <Anchor
              content="@pob.studio"
              href="https://twitter.com/prrfbeauty"
              spaceBefore
              spaceAfter
            />
            &
            <Anchor
              content="@matcha.xyz"
              href="https://twitter.com/matchaxyz"
              spaceBefore
            />
          </p>
        </div>
      </section>

      <section>
        <h3 className="begin-section">Recent Stuff</h3>
        <PostBox
          icon="/logos/pob.svg"
          title="Proof of Beauty"
          caption="Experimental NFT projects"
          date="2021"
          link="/pob"
          newTab
        />
        <PostBox
          icon="/logos/matcha.png"
          title="Matcha &nbsp;🍵"
          caption="Decentralized crypto trading for the masses"
          date="Spring 2021"
          link="/0x"
        />
        <PostBox
          icon="/logos/bitpay-ext.svg"
          title="BitPay Extension"
          caption="Convert crypto to prepaid cards instantly & anonymously"
          date="2020"
          link="/bitpay/extension"
        />
        <PostBox
          icon="https://bitpay.com/img/wallet-logos/bitpay-wallet.svg"
          title="BitPay Invoice V4"
          caption="Flagship payment gateway powering the network"
          date="2019 ~ 2020"
          link="/bitpay/invoice"
        />
        <PostBox
          icon="/logos/bitpay-light-gradient.svg"
          title="BitPay ID"
          caption="Consumer onboarding + KYC / AML"
          date="2019"
          link="/bitpay/id"
        />
      </section>
    </motion.main>
  </>
);

export default Portfolio;
