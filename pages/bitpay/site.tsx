import React from "react";
import { motion } from "framer-motion";
import { fadeInPage } from "../../animations/page";
import Anchor from "../../components/utils/anchor";
import SideBar from "../../components/sidebar/sidebar";
import WideScreen from "../../components/wide-screen/wide-screen";

const BitPaySite: React.FC = () => (
  <>
    <SideBar />
    <motion.main className="body" {...fadeInPage}>
      <h1 className="begin-section pt-0">BitPay Website</h1>
      <h5 className="end-section">Landing, operational, & product pages</h5>
      <WideScreen src="/imgs/site/wallet-hero.png" />

      <h3 className="begin-section">Overview</h3>
      <div className="lead mb-0 end-section">
        <p>
          The BitPay
          <Anchor
            content="Website"
            href="https://bitpay.com/id/verify?dest=fromWebsite"
            spaceBefore
            spaceAfter
            bold
          />
          was a major initiative that we launched at the end of 2018.
        </p>
      </div>
    </motion.main>
  </>
);

export default BitPaySite;
