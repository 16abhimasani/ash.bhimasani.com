import React from "react";
import Head from "next/head";
import { motion } from "framer-motion";
import { fadeInPage } from "../../../animations/page";
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
          user if BitPay is available as a payment option. So already we have 2
          major components:
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
        </ol>
      </div>

      <h2 className="begin-section">Conveniently Checkout on Amazon</h2>
      <WideScreen src="/vids/extension/amazon-cart-detection.mp4" />
      <div className="lead begin-section end-section">
        <p>
          I'm really excited to share the latest project we've been working on;
          this project was a concept brainstormed amongst engineers working on
          the gift card product about 3 years ago and we finally had a chance to
          build it.
        </p>
      </div>

      <h3 className="begin-section">Use Crypto at 100+ Brands</h3>
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
    </motion.main>
  </>
);

export default BitPayExtensionShop;
