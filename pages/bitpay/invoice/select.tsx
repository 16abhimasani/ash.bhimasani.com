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
        <div className="lead begin-section">
          <p>
            Up until recently, the
            <Anchor
              content="Invoice"
              href="https://bitpay.com/demos"
              spaceBefore
              spaceAfter
              bold
            />
            was a fairly robust but rigid interface. It only needed to handle 2
            currencies + a Payment Protocol link or QR code. Adding ETH and
            ERC20 token capability became the first time we had to support
            another payment method (Web3) where there was clear preference based
            on wallet.
          </p>
          <p>
            If the user is paying with a BitPay or Copay wallet, then the only
            way to pay is with a PayPro link. However, if the user is paying
            with MetaMask, then we need to connect to their wallet via Web3 to
            pay. Without any upfront selection, we initially handled this by
            detecting the presence of Web3 and providing a manual toggle (less
            than ideal).
          </p>
          <blockquote>
            It became clear after the launch of ETH that we needed a robust but
            elegant way to handle rapidly diverging feature sets.
          </blockquote>
          <p>
            In response to these problems, I created the Wallet Selection flow
            over the course of 2019, drawing inspiration from companies like
            <Anchor content="Plaid" href="https://plaid.com/" spaceBefore />,
            <Anchor
              content="Mollie"
              href="https://www.mollie.com/"
              spaceBefore
            />
            , and more. I finally had a chance to build and launch it in the
            beginning of 2020 as the company made P2P support a major
            initiative.
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
        <div className="lead begin-section pt-0 end-section">
          <p>
            The solution was a relatively obvious one because of the following
            requirements:
          </p>
          <ol className="list">
            <li className="list__item">
              <div className="list__item__number">1</div>
              <div>Use Payment Protocol if supported</div>
            </li>
            <li className="list__item">
              <div className="list__item__number">2</div>
              <div>Use Web3 for all other ETH wallets</div>
            </li>
            <li className="list__item">
              <div className="list__item__number">3</div>
              <div>Display Address + Amount for P2P payments</div>
            </li>
          </ol>
          <p>
            However, because we now could now display custom behavior for any
            particular payment method selected, the design ended up unlocking a
            lot more capability than we initially set out to solve.
          </p>
        </div>
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
