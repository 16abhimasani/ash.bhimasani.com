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
            <div className="list__item__number">2</div>
            <div>Twitch: Discover more gaming brands</div>
          </li>
          <li className="list__item">
            <div className="list__item__number">1</div>
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
        <img width="375" src="/imgs/extension/twitch-brand-page.svg" />
        <img width="375" src="/imgs/extension/hotels-brand-page-alt.svg" />
      </div>
      <div className="lead begin-section end-section">
        <p>
          For this page, I placed a heavy emphasis on keeping the user engaged
          and letting them organically explore. The first place I looked to for
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
        <img width="375" src="/imgs/extension/wikipedia-brand-page.svg" />
        <img width="375" src="/imgs/extension/mastercard-brand-page.svg" />
      </div>
      <div className="lead begin-section end-section">
        <p>
          Optimizing for cases where there are primary Call To Actions was
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
        <img width="375" src="/imgs/extension/apmex-brand-page.svg" />
        <img width="375" src="/imgs/extension/amazon-brand-page.svg" />
      </div>
      <div className="lead begin-section end-section">
        <p>
          For this page, I placed a heavy emphasis on keeping the user engaged
          and letting them organically explore. The first place I looked to for
          inspiration was the iOS App Store; you can see the heavy influence in
          the layout of the Title + Caption + Logo as well as the
          <span className="f-600">&nbsp;You Might Also Like</span> section
        </p>
      </div>

      <h2 className="begin-section">Directory: Browsing Made Simple</h2>
      <h5 className="end-section">100+ supported sites at your fingertips</h5>
      <video className="h-align" width="375" autoPlay muted loop playsInline>
        <source src="/vids/extension/directory.mp4" type="video/mp4" />
      </video>
      <div className="lead begin-section end-section">
        <p>
          I'm really excited to share the latest project we've been working on;
          this project was a concept brainstormed amongst engineers working on
          the gift card product about 3 years ago and we finally had a chance to
          build it.
        </p>
      </div>

      <h2 className="begin-section">Minimize & Drag</h2>
      <h5 className="end-section">Control your experience elegantly</h5>
      <video width="100%" autoPlay muted loop playsInline>
        <source src="/vids/extension/minimize.mp4" type="video/mp4" />
      </video>
      <div className="lead begin-section end-section">
        <p>
          I'm really excited to share the latest project we've been working on;
          this project was a concept brainstormed amongst engineers working on
          the gift card product about 3 years ago and we finally had a chance to
          build it.
        </p>
      </div>

      <h2 className="begin-section">Amazon Cart Detection</h2>
      <h5 className="end-section">The magic of custom-value gift cards</h5>
      <WideScreen src="/vids/extension/amazon-cart-detection.mp4" />
      <div className="lead begin-section end-section">
        <p>
          I'm really excited to share the latest project we've been working on;
          this project was a concept brainstormed amongst engineers working on
          the gift card product about 3 years ago and we finally had a chance to
          build it.
        </p>
      </div>
    </motion.main>
  </>
);

export default BitPayExtensionShop;
