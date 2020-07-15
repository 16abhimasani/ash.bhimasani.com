import React from "react";
import { motion } from "framer-motion";
import { fadeInPage } from "../../../animations/page";
import WideScreen from "../../../components/wide-screen/wide-screen";

const BitPayIDVerification: React.FC = () => (
  <motion.main className="body" {...fadeInPage}>
    <h1 className="begin-section pt-0">Verify Flow Breakdown</h1>
    <h5>Making spending crypto fun</h5>

    <div className="lead begin-section mb-0 end-section">
      <p>
        The utility of this app at its simplest form is to simply alert the user
        if BitPay is available as a payment option. So we have 3 major pieces
        from this premise:
      </p>
    </div>

    <h2 className="begin-section">Brand Page</h2>
    <h5 className="end-section">A compact display of essential info</h5>
    <WideScreen
      src={[
        "/imgs/id/desktop/auth/enter-email.svg",
        "/imgs/id/desktop/auth/enter-email.svg",
        "/imgs/id/desktop/auth/enter-email.svg",
      ]}
      carousel
    />
    <div className="lead begin-section end-section">
      <p>
        The work to optimize the hop from crypto to store credit to redemption
        began several years ago in the BitPay Wallet where the emphasis was on
        in-app or in-store redemption.
      </p>
    </div>
  </motion.main>
);

export default BitPayIDVerification;
