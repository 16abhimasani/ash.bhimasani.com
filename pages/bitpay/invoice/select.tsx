import React from "react";
import { motion } from "framer-motion";
import { fadeInPage } from "../../../animations/page";
import Anchor from "../../../components/utils/anchor";
import SideBar from "../../../components/sidebar/sidebar";
import WideScreen from "../../../components/wide-screen/wide-screen";

const BitPayInvoiceWalletSelection: React.FC = () => (
  <>
    <SideBar />
    <motion.main className="body" {...fadeInPage}>
      <h1 className="begin-section pt-0">BitPay Invoice V4</h1>
      <h5 className="end-section">
        Flagship gateway powering the payment network
      </h5>
      <WideScreen src="/imgs/invoice/select/wallet-selection.png" />
      <div className="lead mb-0 begin-section end-section">
        <p>
          <Anchor
            content="BitPay Invoice"
            href="https://bitpay.com/id/verify?dest=fromWebsite"
            spaceAfter
            bold
          />
          was a major initiative that we launched in the summer of 2019. Up
          until then, we had a fully segmented account system. Businesses got
          business accounts and debit card users got card accounts. With BitPay
          ID, we wanted to consolidate and pave the way for an immersive
          consumer ecosystem. To do this, we needed a brand new onboarding
          system that funneled users accordingly and incorporated KYC when
          applicable.
        </p>
        <p>
          This was an extremely challenging and fun project that served as my
          first real confrontation with the balance of aesthetics and
          experience. At inception, the idea was to create a bare-bones, minimal
          login flow with single-purpose states. We were confident that by
          isolating users by their email, we could conveniently funnel users
          based on their status.
        </p>
      </div>
    </motion.main>
  </>
);

export default BitPayInvoiceWalletSelection;
