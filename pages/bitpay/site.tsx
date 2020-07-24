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
          redesign was a major project launched in late 2018, right after I went
          full-time. My task was to redesign the site to reflect a modern brand
          and build it in a fresh stack that could keep up with the growing rate
          of changes. These are some of the full page designs I created for the
          site.
        </p>
      </div>

      <h2 className="begin-section">Wallet Page</h2>
      <h5 className="end-section">
        <Anchor
          content="bitpay.com/wallet"
          href="https://bitpay.com/wallet"
          spaceBefore
          spaceAfter
          bold
        />
      </h5>
      <WideScreen src="/imgs/site/wallet-page.png" />
      <div className="lead begin-section end-section">
        <p>
          The Wallet page was definitely the most challenging page to create.
          Cryptocurrency wallets are already a non-intuitive concept so my focus
          was on figuring out simple ways to communicate the core ideas.
          Additionally, highlighting the unique features of our Wallet (gift
          cards and multi-sig) was a high priority.
        </p>
      </div>

      <h2 className="begin-section">Careers Page</h2>
      <h5 className="end-section">
        <Anchor
          content="bitpay.com/careers"
          href="https://bitpay.com/careers"
          spaceBefore
          spaceAfter
          bold
        />
      </h5>
      <WideScreen src="/imgs/site/careers-page.svg" />
    </motion.main>
  </>
);

export default BitPaySite;
