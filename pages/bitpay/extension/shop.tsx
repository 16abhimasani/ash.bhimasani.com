import React from "react";
import Head from "next/head";
import { motion } from "framer-motion";
import { fadeInPage } from "../../../animations/page";
import Anchor from "../../../components/utils/anchor";
import WideScreen from "../../../components/wide-screen/wide-screen";

const BitPayExtensionShop: React.FC = () => (
  <>
    <Head>
      <meta
        property="description"
        content="Designed by Ash - BitPay Browser Extension"
        key="description"
      />
      <meta
        property="twitter:image"
        content="https://bitpay.com/assets/extension-banner.png"
        key="twitter-image"
      />
      <meta
        property="og:image"
        content="https://bitpay.com/assets/extension-banner.png"
        key="og-image"
      />
    </Head>
    <motion.main className="body" {...fadeInPage}>
      <h1 className="begin-section pt-0">Shop Experience Breakdown</h1>
      <h5>Making spending crypto fun</h5>

      <div className="lead begin-section mb-0 end-section">
        <p>
          The utility of this app at its simplest form is to simply alert the
          user if BitPay is available as a payment option. So we have 3 major
          pieces from this premise:
        </p>
        <ol className="list">
          <li className="list__item">
            <div className="list__item__number">1</div>
            <div>A page to view info about the page you're on</div>
          </li>
          <li className="list__item">
            <div className="list__item__number">2</div>
            <div>A list of all websites we support</div>
          </li>
          <li className="list__item">
            <div className="list__item__number">3</div>
            <div>Store credit purchase flow (if applicable)</div>
          </li>
        </ol>
        <p>
          A BitPay supported Brand can come in 2 forms: either a direct
          integration (
          <Anchor
            content="Newegg"
            href="https://kb.newegg.com/knowledge-base/using-bitcoin-on-newegg/"
          />
          ,
          <Anchor
            content="AT&T"
            href="https://about.att.com/story/2019/att_bitpay.html"
            spaceBefore
          />
          ,
          <Anchor
            content="Microsoft"
            href="https://support.microsoft.com/en-us/help/13942/microsoft-account-how-to-use-bitcoin-to-add-money-to-your-account"
            spaceBefore
          />
          ), or through a third-party reseller via
          <Anchor
            content="gift cards"
            href="https://bitpay.com/directory/gift-cards"
            spaceBefore
            spaceAfter
          />
          (Amazon, Delta, DoorDash). A directly integrated merchant has a
          relationship with BitPay where we take a share of their checkout
          payment options and accept crypto on their behalf, settling the next
          day in fiat. Because the initial setup for any integration has a
          non-zero overhead, many times payment processors clump into
          aggregators to make selling integrations easier. Similarly, gift card
          aggregators allow an array of payment methods, BitPay being one of
          them.
        </p>
      </div>

      <h2 className="begin-section">Brand Page</h2>
      <h5 className="end-section">A compact display of essential info</h5>
      <WideScreen
        src={[
          "/imgs/extension/amazon-brand-page.jpg",
          "/imgs/extension/twitch-brand-page.jpg",
          "/imgs/extension/apmex-brand-page.jpg",
          "/imgs/extension/wikipedia-brand-page.jpg",
        ]}
        carousel
      />
      <div className="lead begin-section end-section">
        <p>
          The work to optimize the hop from crypto to store credit to redemption
          began several years ago in the BitPay Wallet where the emphasis was on
          in-app or in-store redemption.
        </p>
        <p>
          Now with a desktop browser extension, we had a chance to do something
          similar with directly integrated merchants.
        </p>
        <p>
          The Brand page for each supported site is the main entry point to the
          rest of the experience. In the collection above, you can see 3 types
          of directly integrated merchants:
        </p>
        <ol className="list">
          <li className="list__item">
            <div className="list__item__number">1</div>
            <div>Twitch: Discover more gaming brands</div>
          </li>
          <li className="list__item">
            <div className="list__item__number">2</div>
            <div>Wikipedia: Donate with crypto</div>
          </li>
          <li className="list__item">
            <div className="list__item__number">3</div>
            <div>APMEX: Use crypto and save</div>
          </li>
        </ol>
        <p>
          With this, we land on the 3 cores of the Shop experience: <br />
          <span className="f-600">Discover, Spend, & Save</span>.
        </p>
      </div>

      <h4 className="begin-section">Discover Related Brands</h4>
      <div className="d-flex">
        <img
          width="375"
          src="/imgs/extension/twitch-brand-page.svg"
          alt="Twitch Brand Page"
        />
        <img
          width="375"
          src="/imgs/extension/hotels-brand-page-alt.svg"
          alt="Hotels.com Brand Page"
        />
      </div>
      <div className="lead begin-section end-section">
        <p>
          For this page, I placed an emphasis on keeping the user engaged and
          letting them organically explore. The first place I looked to for
          inspiration was the iOS App Store; you can see the heavy influence in
          the layout of the Title + Caption + Logo as well as the
          <span className="f-600">&nbsp;You Might Also Like</span> section
        </p>
        <p>
          We often get "I didn't know X accept bitcoin?" so for directly
          integrated merchants, I made
          <span className="f-600">&nbsp;Payment Instructions</span> a
          first-class citizen. The details attempt to concisely describe how to
          find BitPay as a payment option on a given site without taking up too
          much space.
        </p>
      </div>

      <h4 className="begin-section">Donate or Spend</h4>
      <div className="d-flex">
        <img
          width="375"
          src="/imgs/extension/wikipedia-brand-page.svg"
          alt="Wikipedia Brand Page"
        />
        <img
          width="375"
          src="/imgs/extension/mastercard-brand-page.svg"
          alt="Mastercard Brand Page"
        />
      </div>
      <div className="lead begin-section end-section">
        <p>
          Optimizing for cases where there are primary Call to Actions was
          pretty simple: just add a big blue button. You can see the 2 different
          variations of CTAs I experimented with between this section and the
          previous: the first style being the iOS-esque slim pill near the top.
          I ultimately decided to keep things simple while maintaining a
          fallback for vertical scroll. A fixed footer button with scrolling
          content underneath turned out to be the only configuration that made
          sense.
        </p>
      </div>

      <h4 className="begin-section">Save with Crypto</h4>
      <div className="d-flex">
        <img
          width="375"
          src="/imgs/extension/apmex-brand-page.svg"
          alt="APMEX Brand Page"
        />
        <img
          width="375"
          src="/imgs/extension/amazon-brand-page.svg"
          alt="Amazon Brand Page"
        />
      </div>
      <div className="lead begin-section end-section">
        <p>
          A common way Brands promote crypto as a payment option is to run
          discounts that are automatically applied; similarly, BitPay runs
          promotions of gift cards to gain a surge in traffic. With this in
          mind, I knew that a Discount section would be a core piece of the
          page.
        </p>
        <p>
          Inspired by the iOS App Store, the Discount pill is prominently
          featured right after the caption and is color matched to the brand for
          that extra premier look.
        </p>
      </div>

      <h2 className="begin-section">Directory: Browsing Made Simple</h2>
      <h5 className="end-section">100+ supported sites at your fingertips</h5>
      <video className="h-align" width="375" autoPlay muted loop playsInline>
        <source src="/vids/extension/directory.mp4" type="video/mp4" />
      </video>
      <div className="lead begin-section end-section">
        <p>
          One of the key features I wanted for this app was mixed categories as
          opposed to the
          <Anchor
            content="Website Directory"
            href="https://kb.newegg.com/knowledge-base/using-bitcoin-on-newegg/"
            spaceBefore
            spaceAfter
          />
          where gift cards are kept entirely in a separate category.
          Additionally, I thought keyword search would be a neat feature that
          would make browsing more convenient (ex. searching "Gaming").
        </p>
        <p>
          Making this happen came down to brute force; we ended up manually
          labeling each gift card with keyword tags and then composed categories
          from those keywords. As a result, the first thing you see on the Home
          page are
          <span className="f-600">&nbsp;"Curations"</span> or featured Brands.
          Below this you can find an exhaustive list of categories as well as a
          list of all Brands we support.
        </p>
      </div>

      <h2 className="begin-section">Amazon Cart Detection</h2>
      <h5 className="end-section">The magic of custom-value gift cards</h5>
      <WideScreen src="/vids/extension/amazon-cart-detection.mp4" />
      <div className="lead begin-section end-section">
        <p>
          Since the origins of the gift card program, the idea of pre-filling
          the amount to match your Cart Total exactly has always been enticing.
          It was never truly possibly from the mobile app; the in-store purchase
          flow was seamless enough but you still had to type in the amount. With
          a browser context, the feature suddenly became a possibility. We have
          built an expansive index of
          <span className="f-600">&nbsp;auto-fill capability</span> for many of
          the gift cards we support.
        </p>
        <p>This makes the experience as simple as:</p>
        <ol className="list">
          <li className="list__item">
            <div className="list__item__number">1</div>
            <div>Proceed to checkout</div>
          </li>
          <li className="list__item">
            <div className="list__item__number">2</div>
            <div>Open the app & click "Pay with BitPay"</div>
          </li>
          <li className="list__item">
            <div className="list__item__number">3</div>
            <div>Pay with crypto to see your voucher</div>
          </li>
          <li className="list__item">
            <div className="list__item__number">4</div>
            <div>Apply your code & checkout</div>
          </li>
        </ol>
      </div>
      <video className="h-align" width="375" autoPlay muted loop playsInline>
        <source src="/vids/extension/purchase-flow.mp4" type="video/mp4" />
      </video>

      <h2 className="begin-section">Minimize & Drag</h2>
      <h5 className="end-section">Control your experience elegantly</h5>
      <video width="100%" autoPlay muted loop playsInline>
        <source src="/vids/extension/minimize.mp4" type="video/mp4" />
      </video>
      <div className="lead begin-section end-section">
        <p>
          An idea I had going into this design was to create a universally
          present component that looked and felt iconic. I think we accomplished
          this with the Extension's Control Bar. You can drag the app to
          anywhere on the page you like so you're never obscuring something
          important.
        </p>
        <p>
          Need to review some more stuff on the page before you pay? No problem,
          just click the Minimize button and the app elegantly folds into slim
          tab that you just want to play with.
        </p>
      </div>
    </motion.main>
  </>
);

export default BitPayExtensionShop;
