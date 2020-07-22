import React from "react";
import Head from "next/head";
import { motion } from "framer-motion";
import { fadeInPage } from "../../animations/page";
import Anchor from "../../components/utils/anchor";
import PostBox from "../../components/post-box/post-box";

const BitPay: React.FC = () => (
  <>
    <Head>
      <meta
        property="description"
        content="BitPay - Blockchain Payment Processor"
        key="description"
      />
      <meta
        property="twitter:image"
        content="/banners/bitpay.jpg"
        key="twitter-image"
      />
      <meta property="og:image" content="/banners/bitpay.jpg" key="og-image" />
    </Head>
    <motion.main className="body" {...fadeInPage}>
      <h1 className="begin-section pt-0">BitPay &nbsp;💸</h1>
      <div className="lead end-section">
        <p>
          BitPay is a global cryptocurrency payment processor that also operates
          an open source
          <Anchor
            content="wallet service"
            href="https://bitpay.com/wallet"
            spaceBefore
            spaceAfter
          />
          and reloadable
          <Anchor
            content="debit card"
            href="https://bitpay.com/card"
            spaceBefore
          />
          .
        </p>
        <p>Below are my major contributions with a deep dive for each ~</p>
      </div>

      <h3 className="begin-section">Products</h3>
      <PostBox
        icon="https://bitpay.com/img/wallet-logos/bitpay-wallet.svg"
        title="Invoice V4"
        caption="Flagship payment gateway powering the network"
        date="Aug 2019 ~ Present"
        link="/bitpay/invoice"
        locked
      />
      <PostBox
        icon="/logos/bitpay-ext.svg"
        title="Pay with BitPay"
        caption="A browser extension that redefines our payment network"
        date="Mar 2020 ~ Aug 2020"
        link="/bitpay/extension"
      />
      <PostBox
        icon="/logos/bitpay-id.svg"
        title="BitPay ID"
        caption="Consumer product suite + KYC / AML"
        date="Apr 2019 ~ Aug 2019"
        link="/bitpay/id"
      />
      <PostBox
        icon="/logos/bitpay-globe.svg"
        title="BitPay Directory"
        caption="A curated directory of where to use crypto + promos"
        date="Mar 2019 ~ Apr 2019"
        link="/bitpay/directory"
      />
      <PostBox
        icon="/logos/bitpay-emails.svg"
        title="Emails"
        caption="Transactional emails for merchants & payers"
        date="Aug 2018 ~ Jan 2019"
        link="/bitpay/emails"
      />
      <PostBox
        icon="/logos/bitpay-site.svg"
        title="Website"
        caption="Landing, operational, & product pages"
        date="Aug 2018 ~ Jan 2019"
        link="/bitpay/site"
      />
      <PostBox
        icon="/logos/bitpay-support.svg"
        title="Support Desk"
        caption="A streamlined customer service platform"
        date="May 2018 ~ Aug 2018"
        link="/bitpay/support"
        locked
      />
    </motion.main>
  </>
);

export default BitPay;
