import React from "react";
import Anchor from "../../components/utils/anchor";
import PostBox from "../../components/post-box/post-box";

const BitPayExtension: React.FC = () => (
  <div className="body">
    <img width="100%" src="https://bitpay.com/assets/extension-banner.png" />
    <div className="lead begin-section mb-0 end-section">
      I'm really excited to share the latest project we've been working on; this
      project was a concept brainstormed amongst engineers working on the gift
      card program about 3 years ago and we finally had a chance to build.
      <br />
      <br />
      Pay with BitPay is an
      <Anchor
        content="open-source"
        href="https://github.com/bitpay/bitpay-browser-extension"
        newTab
        spaceBefore
      />
      , privacy first approach to making crypto easier to use while you browse
      the web.
    </div>
    <img
      className="h-align"
      width="375"
      src="https://bitpay.com/img/demos/extension-demo.gif"
    />
    <h3 className="begin-section">Checkout Seamlessly</h3>
    <div className="lead end-section">
      We created a browser extension that seamlessy plugs into your checkout
      experience as you shop, either alerting you of direct acceptance or
      ability to purchase store credit.
      <br />
      <br />
      With a few clicks while on Amazon, you can:
    </div>
    <h3 className="begin-section">Incognito mode for everyday spending</h3>
    <div className="lead end-section">
      BitPay is a global cryptocurrency payment processor that also operates an
      open source
    </div>
    <h4 className="begin-section">Origins</h4>
    <div className="lead end-section">
      BitPay is a global cryptocurrency payment processor that also operates an
      open source
    </div>

    <h3 className="begin-section">Products</h3>
    <PostBox
      icon="/logos/bitpay-ext.svg"
      title="Pay with BitPay"
      caption="A browser extension that redefines our payment network"
      date="Mar 2020 ~ Aug 2020"
      link="/bitpay/extension"
    />
  </div>
);

export default BitPayExtension;
