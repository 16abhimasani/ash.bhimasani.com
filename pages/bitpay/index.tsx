import React from "react";
import Anchor from "../../components/utils/anchor";
import PostBox from "../../components/post-box/post-box";

const BitPay: React.FC = () => (
  <div className="body">
    <h1>BitPay &nbsp;💸</h1>
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
    </div>

    <h3 className="begin-section" id="timeline">
      Products
    </h3>
    <PostBox
      icon="/logos/bitpay-ext.svg"
      title="Pay with BitPay"
      caption="A browser extension that redefines BitPay payments"
      date="Mar 2020 ~ Aug 2020"
      link="/bitpay/extension"
    />
    <PostBox
      icon="https://bitpay.com/img/wallet-logos/bitpay-wallet.svg"
      title="Invoice V4"
      caption="Our flagship payment gateway used by major merchants"
      date="Aug 2019 ~ Present"
      link="/bitpay/invoice"
    />
    <PostBox
      icon="https://bitpay.com/img/wallet-logos/bitpay-wallet.svg"
      title="BitPay ID"
      caption="Our consumer product suite with KYC / AML"
      date="Apr 2019 ~ Aug 2019"
      link="/bitpay/id"
    />
    <PostBox
      icon="https://bitpay.com/img/wallet-logos/bitpay-wallet.svg"
      title="BitPay Directory"
      caption="A curated directory of where to use crypto + promos"
      date="Mar 2019 ~ Apr 2019"
      link="/bitpay/directory"
    />
    <PostBox
      icon="https://bitpay.com/img/wallet-logos/bitpay-wallet.svg"
      title="Emails"
      caption="A curated directory of where to use crypto + promos"
      date="Aug 2018 ~ Jan 2019"
      link="/bitpay/email"
    />
    <PostBox
      icon="https://bitpay.com/img/wallet-logos/bitpay-wallet.svg"
      title="Website"
      caption="A curated directory of where to use crypto + promos"
      date="Aug 2018 ~ Jan 2019"
      link="/bitpay/site"
    />
    <PostBox
      icon="https://bitpay.com/img/wallet-logos/bitpay-wallet.svg"
      title="Support Desk"
      caption="A curated directory of where to use crypto + promos"
      date="May 2018 ~ Aug 2018"
      link="/bitpay/support"
    />
  </div>
);

export default BitPay;
