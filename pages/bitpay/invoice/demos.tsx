import React from "react";
import { motion } from "framer-motion";
import { fadeInPage } from "../../../animations/page";
import Anchor from "../../../components/utils/anchor";
import SideBar from "../../../components/sidebar/sidebar";
import InvoiceUniversalModeDemo from "../../../components/demos/invoice/pay/invoice-universal";
import InvoiceAddressModeDemo from "../../../components/demos/invoice/pay/invoice-p2p";
import InvoiceConnectModeDemo from "../../../components/demos/invoice/pay/invoice-connect";
import InvoiceBIP21ModeDemo from "../../../components/demos/invoice/pay/invoice-bip21";
import InvoiceReceiptDemo from "../../../components/demos/invoice/receipt/invoice-receipt";
import InvoiceSelectDemo from "../../../components/demos/invoice/select/invoice-select";
import InvoiceSelectWalletConnectDemo from "../../../components/demos/invoice/select/invoice-wallet-connect";
import InvoiceSelectWalletPairDemo from "../../../components/demos/invoice/select/invoice-wallet-pair";
import InvoiceSelectOauthPairDemo from "../../../components/demos/invoice/select/invoice-oauth-pair";
import InvoiceVerifyDemo from "../../../components/demos/invoice/select/invoice-verify";
import InvoicePayProModeDemo from "../../../components/demos/invoice/pay/invoice-paypro";
import InvoiceAwaitingConfDemo from "../../../components/demos/invoice/pay/invoice-await-conf";

const BitPayInvoiceDemos: React.FC = () => (
  <>
    <SideBar />
    <motion.main className="body" {...fadeInPage}>
      <h1 className="begin-section pt-0">BitPay Invoice V4 Demos</h1>
      <h5 className="end-section">
        Reference UI
        <Anchor
          content="implementations"
          href="https://github.com/16abhimasani/ash.bhimasani.com/tree/master/components/demos/invoice"
          spaceBefore
        />
      </h5>

      <section className="end-section">
        <h3 className="begin-section">Wallet Selection</h3>
        <h5>Identifying source of funds for an optimal experience</h5>
        <h4>Search & Selection</h4>
        <div className="begin-section end-section wrapper-center">
          <InvoiceSelectDemo />
        </div>
        <h4>Connect Web3 Wallet (Same-Device)</h4>
        <div className="begin-section end-section wrapper-center">
          <InvoiceSelectWalletConnectDemo type="metamask" />
        </div>
        <h4>Connect Web3 Wallet (Cross-Device)</h4>
        <div className="begin-section wrapper-center">
          <InvoiceSelectWalletPairDemo type="argent" />
        </div>
        <div className="begin-section end-section wrapper-center">
          <InvoiceSelectWalletPairDemo type="coinbaseWallet" />
        </div>
        <h4>Connect Hardware Wallet (USB)</h4>
        <div className="begin-section wrapper-center">
          <InvoiceSelectWalletConnectDemo type="ledger" />
        </div>
        <div className="begin-section end-section wrapper-center">
          <InvoiceSelectWalletConnectDemo type="trezor" />
        </div>
        <h4>Connect Exchange Account (OAuth)</h4>
        <div className="begin-section wrapper-center">
          <InvoiceSelectOauthPairDemo type="gemini" />
        </div>
        <div className="begin-section end-section wrapper-center">
          <InvoiceSelectOauthPairDemo type="coinbase" />
        </div>
      </section>

      <section className="end-section">
        <h3 className="begin-section">Compliance & Authentication</h3>
        <h5>Handling regulatory requirements for high-value payments</h5>
        <h4>KYC Required</h4>
        <div className="begin-section wrapper-center">
          <InvoiceVerifyDemo />
        </div>
        <div className="begin-section end-section wrapper-center">
          <InvoiceVerifyDemo session />
        </div>
      </section>

      <section className="end-section">
        <h3 className="begin-section">Payment Acceptance</h3>
        <h5>3 mutations optimized for source of funds</h5>
        <h4>Generic Mode (P2P)</h4>
        <div
          className="begin-section end-section wrapper-center"
          style={{ marginBottom: 100 }}
        >
          <InvoiceAddressModeDemo />
        </div>
        <h4>Connect Mode (Web3 / OAuth / USB)</h4>
        <div
          className="begin-section end-section wrapper-center"
          style={{ marginBottom: 100 }}
        >
          <InvoiceConnectModeDemo />
        </div>
        <h4>BIP-21 Mode (P2P)</h4>
        <div
          className="begin-section end-section wrapper-center"
          style={{ marginBottom: 100 }}
        >
          <InvoiceBIP21ModeDemo />
        </div>
        <h4>BIP-72 Mode (Payment Protocol)</h4>
        <div
          className="begin-section end-section wrapper-center"
          style={{ marginBottom: 40 }}
        >
          <InvoicePayProModeDemo />
        </div>
        <div className="begin-section end-section wrapper-center">
          <InvoiceAwaitingConfDemo type="btc" />
        </div>
        <h4>BitPay Ecosystem Mode</h4>
        <div className="begin-section end-section wrapper-center">
          <InvoiceUniversalModeDemo />
        </div>
      </section>

      <section className="begin-section end-section">
        <h3 className="begin-section">Payment Receipts</h3>
        <h5>Singular design to handle all post-payment experiences</h5>
        <h4>Payment Complete</h4>
        <div
          className="begin-section end-section wrapper-center"
          style={{ marginBottom: 184 }}
        >
          <InvoiceReceiptDemo type="paid" />
        </div>
        <h4>Merchant Refund</h4>
        <div
          className="begin-section end-section wrapper-center"
          style={{ marginBottom: 184 }}
        >
          <InvoiceReceiptDemo type="refund" />
        </div>
        <h4>Refund Processing</h4>
        <div
          className="begin-section end-section wrapper-center"
          style={{ marginBottom: 124 }}
        >
          <InvoiceReceiptDemo type="processing" />
        </div>
        <h4>Overpaid</h4>
        <div
          className="begin-section end-section wrapper-center"
          style={{ marginBottom: 184 }}
        >
          <InvoiceReceiptDemo type="overpaid" />
        </div>
        <h4>Underpaid</h4>
        <div
          className="begin-section end-section wrapper-center"
          style={{ marginBottom: 184 }}
        >
          <InvoiceReceiptDemo type="underpaid" />
        </div>
        <h4>Low Miner Fee</h4>
        <div className="begin-section end-section wrapper-center">
          <InvoiceReceiptDemo type="delayed" />
        </div>
      </section>
    </motion.main>
  </>
);

export default BitPayInvoiceDemos;
