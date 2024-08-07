import { motion } from "framer-motion";
import React from "react";
import { fadeInPage } from "../../animations/page";
import PostBox from "../../components/post-box/post-box";
import { BitPayHead } from "../../components/seo-heads";
import SideBar from "../../components/sidebar/sidebar";
import Anchor from "../../components/utils/anchor";

const BitPay: React.FC = () => (
  <>
    {BitPayHead}
    <SideBar />
    <motion.main className="body" {...fadeInPage}>
      <section className="end-section">
        <h1 className="begin-section pt-0">BitPay &nbsp;💸</h1>
        <div className="lead">
          <p>
            <Anchor content="BitPay" href="https://bitpay.com/" spaceAfter /> is
            a global cryptocurrency payment processor that also operates a
            <Anchor
              content="mobile wallet"
              href="https://bitpay.com/wallet"
              spaceBefore
              spaceAfter
            />
            and
            <Anchor
              content="debit card"
              href="https://bitpay.com/card"
              spaceBefore
            />
            .
          </p>
          <p>Below are my major contributions with a deep dive for each ~</p>
        </div>
      </section>

      <section>
        <h3 className="begin-section">Products</h3>
        <PostBox
          icon="https://bitpay.com/img/wallet-logos/bitpay-wallet.svg"
          title="Invoice V4"
          caption="Flagship payment gateway powering the network"
          date="2019 ~ 2020"
          link="/bitpay/invoice"
        />
        <PostBox
          icon="/logos/bitpay-ext.svg"
          title="Browser Extension"
          caption="Convert crypto to prepaid cards instantly & anonymously"
          date="2020"
          link="/bitpay/extension"
        />
        <PostBox
          icon="/logos/bitpay-light-gradient.svg"
          title="BitPay ID"
          caption="Consumer onboarding + KYC / AML"
          date="2019"
          link="/bitpay/id"
        />
        <PostBox
          icon="/logos/bitpay-globe.svg"
          title="Merchant Directory"
          caption="A curated directory of where to use crypto + promos"
          date="2019"
          link="/bitpay/directory"
        />
        <PostBox
          icon="/logos/bitpay-emails.svg"
          title="Emails"
          caption="Transactional emails for merchants & payers"
          date="2018"
          link="/bitpay/emails"
        />
        <PostBox
          icon="/logos/bitpay-site.svg"
          title="Website"
          caption="Landing, operational, & product pages"
          date="2018"
          link="/bitpay/site"
        />
        <PostBox
          icon="/logos/bitpay-support.svg"
          title="Support Desk"
          caption="A streamlined customer service platform"
          date="Summer 2018"
          link="/bitpay/support"
        />
      </section>
    </motion.main>
  </>
);

export default BitPay;
