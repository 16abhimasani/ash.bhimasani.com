import React from "react";
import { motion } from "framer-motion";
import { fadeInPage } from "../../animations/page";
import Anchor from "../../components/utils/anchor";
import WideScreen from "../../components/wide-screen/wide-screen";

const BitPayDirectory: React.FC = () => (
  <motion.main className="body" {...fadeInPage}>
    <h1 className="begin-section pt-0">BitPay Directory</h1>
    <h5 className="end-section">Consumer onboarding and verification</h5>
    <WideScreen src="/imgs/directory/cover.jpg" />
    <div className="lead begin-section end-section">
      <p>
        The
        <Anchor
          content="BitPay Directory"
          href="https://bitpay.com/id/verify?dest=fromWebsite"
          spaceAfter
          bold
        />
        is a
      </p>
    </div>

    <h2 className="begin-section">Breakdown</h2>
    <div className="lead end-section">
      <p>
        This was an extremely challenging and fun project that served as my
        first real confrontation with the balance of aesthetics and experience.
        At inception, the idea was to create a bare-bones, minimal login flow
        with single-purpose states. We were confident that by isolating users by
        their email, we could conveniently funnel users based on their status.
      </p>
    </div>

    <h3 className="begin-section">List Mode</h3>
    <h5 className="end-section">A simple way to optimize for mobile</h5>
    <WideScreen src="/imgs/directory/list-mode.svg" />
    <div className="lead begin-section end-section">
      <p>
        This was an extremely challenging and fun project that served as my
        first real confrontation with the balance of aesthetics and experience.
        At inception, the idea was to create a bare-bones, minimal login flow
        with single-purpose states. We were confident that by isolating users by
        their email, we could conveniently funnel users based on their status.
      </p>
    </div>
  </motion.main>
);

export default BitPayDirectory;
