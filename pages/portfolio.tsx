import React from "react";
import { motion } from "framer-motion";
import { fadeInPage } from "../animations/page";
import Anchor from "../components/utils/anchor";
import PostBox from "../components/post-box/post-box";
import SideBar from "../components/sidebar/sidebar";
import Intro from "../components/sections/intro";

const Portfolio: React.FC = () => (
  <>
    <SideBar />
    <motion.main className="body" {...fadeInPage}>
      <Intro />

      <section>
        <h3 className="begin-section">Cool Stuff</h3>
        <PostBox
          icon="/imgs/pob/merge-vfx-1.svg"
          title="EPICS // MERGE  &nbsp;⚡️"
          caption="Advanced on-chain gen-art & VFX"
          link="https://opensea.io/collection/epics-merge?search[numericTraits][0][name]=Spell%20Strength&search[numericTraits][0][ranges][0][min]=1&search[numericTraits][0][ranges][0][max]=10&search[sortAscending]=false&search[sortBy]=VIEWER_COUNT"
          date="Summer 2022"
          newTab
        />
        <PostBox
          icon="https://www.abf.dev/assets/logo-round.svg"
          title="Absolute Brain F**k  &nbsp;🧠"
          caption="On-chain rendering CodePen"
          link="https://abf.dev/app"
          date="Q2 2022"
          newTab
        />
        <PostBox
          icon="https://hash.pob.studio/assets/logos/hash.png"
          title="HASH V3 &nbsp;#️⃣"
          caption="1 ETH TX = 1 NFT / On-chain Wiki"
          link="https://hash.pob.studio/"
          date="Q1 2022"
          newTab
        />
        <PostBox
          icon="/logos/pob.svg"
          title="SHOP &nbsp;🛍️"
          caption="web3 / on-chain ecommerce"
          link="https://shop.pob.studio/"
          date="Q4 2021"
          newTab
        />
        <PostBox
          icon="/logos/matcha.png"
          title="Matcha &nbsp;🍵"
          caption="Decentralized crypto trading for the masses"
          date="Q1-2 2021"
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
          title="BitPay Invoice: V4 System"
          caption="Flagship payment gateway powering the network"
          date="2019 ~ 2020"
          link="/bitpay/invoice/demos"
        />
        <PostBox
          icon="/logos/bitpay-light-gradient.svg"
          title="BitPay ID: V2 System"
          caption="Consumer onboarding + KYC / AML"
          date="2019"
          link="/bitpay/id/v2"
        />
      </section>
    </motion.main>
  </>
);

export default Portfolio;
