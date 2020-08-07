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
      <section>
        <h1 className="begin-section pt-0">Wallet Selection</h1>
        <h5 className="end-section">User experience tailoring and analytics</h5>
        <WideScreen src="/imgs/invoice/select/wallet-selection.png" />
        <div className="lead begin-section end-section">
          <p>
            <Anchor
              content="BitPay Invoice"
              href="https://bitpay.com/demos"
              spaceAfter
              bold
            />
            obviously, the first part of any Authentication flow is the Account
            Creation flow. This would be utilized whenever a user visits our
            payment gateway when making a transaction over $3k USD.
          </p>
        </div>
        <video
          className="h-align d-block end-section"
          width="500"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/vids/invoice/wallet-selection.mp4" type="video/mp4" />
        </video>
      </section>

      <section>
        <h2 className="begin-section">Coinbase Connect</h2>
        <h5 className="end-section">A minimal, walkthrough-like experience</h5>
        <WideScreen
          src={[
            "/imgs/invoice/coinbase/coinbase-connect.png",
            "/imgs/invoice/coinbase/coinbase-login.png",
            "/imgs/invoice/coinbase/coinbase-authorize.png",
            "/imgs/invoice/coinbase/coinbase-pay.png",
            "/imgs/invoice/coinbase/coinbase-receipt.png",
          ]}
          carousel
        />
        <div className="lead begin-section end-section">
          <p>
            Obviously, the first part of any Authentication flow is the Account
            Creation flow. This would be utilized whenever a user visits our
            payment gateway when making a transaction over $3k USD.
          </p>
        </div>
      </section>

      <section>
        <h2 className="begin-section">Payment Tips</h2>
        <h5 className="end-section">Soft optimizations for P2P support</h5>
        <WideScreen
          src={[
            "/imgs/invoice/select/wallet-info--cash-app.png",
            "/imgs/invoice/select/wallet-info--bitcoin-core.png",
            "/imgs/invoice/select/wallet-info--coinbase-wallet.png",
          ]}
          carousel
        />
        <div className="lead begin-section end-section">
          <p>
            Obviously, the first part of any Authentication flow is the Account
            Creation flow. This would be utilized whenever a user visits our
            payment gateway when making a transaction over $3k USD.
          </p>
        </div>
      </section>

      <section>
        <h2 className="begin-section">Feedback Loops</h2>
        <h5 className="end-section">A minimal, walkthrough-like experience</h5>
        <WideScreen
          src={[
            "/imgs/invoice/select/currency-filtering.png",
            "/imgs/invoice/select/searching.png",
            "/imgs/invoice/select/wallet-bailout.png",
          ]}
          carousel
        />
        <div className="lead begin-section end-section">
          <p>
            Obviously, the first part of any Authentication flow is the Account
            Creation flow. This would be utilized whenever a user visits our
            payment gateway when making a transaction over $3k USD.
          </p>
        </div>
      </section>

      <section>
        <h2 className="begin-section">Wallet Connections</h2>
        <h5 className="end-section">A minimal, walkthrough-like experience</h5>
        <WideScreen
          src={[
            "/imgs/invoice/select/metamask-connect.png",
            "/imgs/invoice/select/wallet-connect.png",
            "/imgs/invoice/select/ledger-connect.png",
            "/imgs/invoice/select/trezor-connect.png",
          ]}
          carousel
        />
        <div className="lead begin-section end-section">
          <p>
            Obviously, the first part of any Authentication flow is the Account
            Creation flow. This would be utilized whenever a user visits our
            payment gateway when making a transaction over $3k USD.
          </p>
        </div>
      </section>
    </motion.main>
  </>
);

export default BitPayInvoiceWalletSelection;
