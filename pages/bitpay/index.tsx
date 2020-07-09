import React from "react";
import Anchor from "../../components/utils/anchor";
import PostBox from "../../components/post-box/post-box";

const BitPay: React.FC = () => (
  <div className="body">
    <h1 className="begin-section pt-0">BitPay &nbsp;💸</h1>
    <div className="lead end-section">
      BitPay is a global cryptocurrency payment processor that also operates an
      open source
      <Anchor
        content="wallet service"
        href="https://bitpay.com/wallet"
        newTab
        spaceBefore
        spaceAfter
      />
      and reloadable
      <Anchor
        content="debit card"
        href="https://bitpay.com/card"
        newTab
        spaceBefore
      />
      .
      <br />
      <br />
      Below are my major contributions with a deep dive for each ~
    </div>

    <h3 className="begin-section">Products</h3>
    <PostBox
      icon="/logos/bitpay-ext.svg"
      title="Pay with BitPay"
      caption="A browser extension that redefines our payment network"
      date="Mar 2020 ~ Aug 2020"
      link="/bitpay/extension"
    />
    <PostBox
      icon="/logos/bitpay-card.svg"
      title="Invoice V4"
      caption="Flagship payment gateway powering the network"
      date="Aug 2019 ~ Present"
      link="/bitpay/invoice"
      locked
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
      link="/bitpay/email"
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
    />
  </div>
);

export default BitPay;
