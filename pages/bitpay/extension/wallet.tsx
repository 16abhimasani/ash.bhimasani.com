import React from "react";
import { motion } from "framer-motion";
import { fadeInPage } from "../../../animations/page";

const BitPayExtensionWallet: React.FC = () => (
  <motion.main className="body" {...fadeInPage}>
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
    </div>
  </motion.main>
);

export default BitPayExtensionWallet;
