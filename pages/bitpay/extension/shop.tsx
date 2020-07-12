import React from "react";
import Head from "next/head";
import { motion } from "framer-motion";
import { fadeInPage } from "../../../animations/page";

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
        I'm really excited to share the latest project we've been working on;
        this project was a concept brainstormed amongst engineers working on the
        gift card program about 3 years ago and we finally had a chance to
        build.
      </div>

      <video
        style={{ marginTop: 21 }}
        width="100%"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/vids/extension/minimize.mp4" type="video/mp4" />
      </video>
    </motion.main>
  </>
);

export default BitPayExtensionShop;
