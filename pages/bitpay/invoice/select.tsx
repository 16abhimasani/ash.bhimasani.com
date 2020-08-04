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
      <h1 className="begin-section pt-0">Select your Wallet</h1>
      <h5 className="end-section">User experience tailoring and analytics</h5>
      <WideScreen src="/imgs/invoice/select/wallet-selection.png" />
      <div className="lead mb-0 begin-section end-section">
        <p>
          <Anchor
            content="BitPay Invoice"
            href="https://bitpay.com/demos"
            spaceAfter
            bold
          />
        </p>
      </div>
    </motion.main>
  </>
);

export default BitPayInvoiceWalletSelection;
