import React from "react";
import Anchor from "../../../components/utils/anchor";
import PostBox from "../../../components/post-box/post-box";

const BitPayExtension: React.FC = () => (
  <div className="body">
    <a
      href="https://bitpay.com/extension"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img width="100%" src="https://bitpay.com/assets/extension-banner.png" />
    </a>
    <div className="lead begin-section mb-0 end-section">
      I'm really excited to share the latest project we've been working on; this
      project was a concept brainstormed amongst engineers working on the gift
      card program about 3 years ago and we finally had a chance to build.
      <br />
      <br />
      <Anchor
        content="Pay with BitPay"
        href="https://bitpay.com/extension"
        newTab
        spaceAfter
      />
      is an
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

    <h3 className="begin-section">Checkout Seamlessly &nbsp;&nbsp;⚡️</h3>
    <div className="lead end-section">
      We created a browser extension that seamlessly plugs into your checkout
      experience as you shop. Either alerting you of direct crypto acceptance or
      ability to purchase store credit.
      <br />
      <br />
      With a few clicks while on Amazon, you can:
      <div className="list">
        <div className="list__item">
          <div className="list__item__number">1</div>
          <div>Generate a payment for the exact amount as your Cart</div>
        </div>
        <div className="list__item">
          <div className="list__item__number">2</div>
          <div>Pay it with any crypto we support [BTC, BCH, ETH, USDC...]</div>
        </div>
        <div className="list__item">
          <div className="list__item__number">3</div>
          <div>Receive your store credit code in the app</div>
        </div>
        <div className="list__item mb-0">
          <div className="list__item__number">4</div>
          <div>Redeem it instantly & checkout</div>
        </div>
      </div>
    </div>

    <h3 className="begin-section">
      Incognito mode for everyday spending &nbsp;&nbsp;🕶
    </h3>
    <div className="lead end-section">
      Security and privacy is our top priority so we made the extension codebase
      <Anchor
        content="open-source"
        href="https://github.com/bitpay/bitpay-browser-extension"
        newTab
        spaceBefore
        spaceAfter
      />
      like our wallet. Your store credit codes live entirely in the app plus
      your personal information and transaction data is kept private from the
      merchant.
      <br />
      <br />
      We think growing adoption means creatively utilizing existing systems.
      With the possibility of fluid-denomination gift cards, we sensed an
      opportunity to redefine one of the most private forms of payment available
      with a slick interface that just works.
      <br />
      <br />
      <Anchor
        content="Download it for Chrome, Brave, Firefox, or Opera"
        href="https://bitpay.com/extension"
        newTab
      />
    </div>

    <h3 className="begin-section">UI Breakdown</h3>
    <PostBox
      icon="/logos/bitpay-ext.svg"
      title="Shop"
      caption="Primary discovery & purchase flow experience"
      link="/bitpay/extension/shop"
    />
    <PostBox
      icon="/logos/bitpay-ext.svg"
      title="Wallet"
      caption="Store credit redemption & management"
      link="/bitpay/extension/wallet"
    />

    <h4 className="begin-section">Background Info</h4>
    <div className="lead end-section">
      Like I mentioned previously, the idea for this app has been floated
      internally for quite some time. Last year I created BitPay's first public
      <Anchor
        content="directory"
        href="https://bitpay.com/directory"
        newTab
        spaceBefore
        spaceAfter
      />
      of our partners and integrations. This was in effort to make it easier for
      people to find out how to use their crypto. Over the last year, the
      Directory has been getting a lot more traction with our partners so
      naturally we were looking for ways to take the concept to the next level.
      <blockquote>
        What if you could be prompted automatically during checkout to use
        crypto?
      </blockquote>
      An extension seemed like the next obvious step to supercharge our gift
      card program and brand discovery. We already sold gift cards within our
      mobile wallet but we needed to bring this capability to the desktop. With
      the recent acquisition of
      <Anchor
        content="Honey"
        href="https://techcrunch.com/2019/11/20/paypal-to-acquire-shopping-and-rewards-platform-honey-for-4-billion/"
        newTab
        spaceBefore
        spaceAfter
      />
      , we knew there was something here worthwhile.
      <br />
      <br />
      After some initial discussion with
      <Anchor
        content="Tony"
        href="https://twitter.com/tonygallippi"
        newTab
        spaceBefore
      />
      , we were off to the races. Over the course of a month, I designed the
      entire experience end-to-end, making sure to get ample feedback from as
      many people as possible. Above this section, you can find extended
      breakdowns present in the app.
    </div>
  </div>
);

export default BitPayExtension;
