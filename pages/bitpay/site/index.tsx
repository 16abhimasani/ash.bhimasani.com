import React from "react";
import { motion } from "framer-motion";
import { fadeInPage } from "../../../animations/page";
import Anchor from "../../../components/utils/anchor";
import PostBox from "../../../components/post-box/post-box";
import SideBar from "../../../components/sidebar/sidebar";
import { BitPayHead } from "..";

const BitPaySite: React.FC = () => (
  <>
    {BitPayHead}
    <SideBar />
    <motion.main className="body" {...fadeInPage}>
      <h1 className="begin-section pt-0">BitPay Website</h1>
      <h5 className="end-section">Landing, operational, & product pages</h5>
      <div className="lead mb-0 end-section">
        <p>
          The BitPay
          <Anchor
            content="Website"
            href="https://bitpay.com"
            spaceBefore
            spaceAfter
            bold
          />
          redesign was a major project launched in late 2018, right after I went
          full-time. My task was to redesign the site to reflect a modern brand
          and build it in a fresh stack that could keep up with the growing rate
          of changes. These are some of the full page designs I created for the
          site (not including the
          <Anchor content="Directory" href="/bitpay/directory" spaceBefore />
          ).
        </p>
      </div>

      <h3 className="begin-section" id="breakdown">
        Pages
      </h3>
      <PostBox
        icon="/logos/bitpay-wallet.svg"
        title="Mobile App"
        caption="A non-custodial crypto wallet"
        link="/bitpay/site/wallet"
      />
      <PostBox
        icon="/logos/bitpay-support.svg"
        title="Careers"
        caption="Help build the future of payments"
        link="/bitpay/site/team"
      />
      <PostBox
        icon="/logos/bitpay-card.svg"
        title="Debit Card 2.0"
        caption="Fastest way to liquidate crypto"
        link="/bitpay/site/card"
        locked
      />
    </motion.main>
  </>
);

export default BitPaySite;
