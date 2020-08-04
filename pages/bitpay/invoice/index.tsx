import React from "react";
import { motion } from "framer-motion";
import { fadeInPage } from "../../../animations/page";
import Anchor from "../../../components/utils/anchor";
import PostBox from "../../../components/post-box/post-box";
import SideBar from "../../../components/sidebar/sidebar";
import WideScreen from "../../../components/wide-screen/wide-screen";

const BitPayInvoice: React.FC = () => (
  <>
    <SideBar />
    <motion.main className="body" {...fadeInPage}>
      <h1 className="begin-section pt-0">BitPay Invoice V4</h1>
      <h5 className="end-section">
        Flagship gateway powering the payment network
      </h5>
      <WideScreen src="/imgs/invoice/select/wallet-selection.png" />
      <h3 className="begin-section" id="breakdown">
        UI Breakdown
      </h3>
      <PostBox
        icon="https://bitpay.com/img/wallet-logos/bitpay-wallet.svg"
        title="Select Wallet"
        caption="User experience tailoring & analytics"
        link="/bitpay/invoice/select"
        locked
      />
      <PostBox
        icon="https://bitpay.com/img/wallet-logos/bitpay-wallet.svg"
        title="Pay with Crypto"
        caption="Utilitarian interface for acceptance"
        link="/bitpay/invoice/pay"
        locked
      />
      <PostBox
        icon="https://bitpay.com/img/wallet-logos/bitpay-wallet.svg"
        title="Payment Receipt"
        caption="Post-payment handling"
        link="/bitpay/invoice/receipt"
        locked
      />

      <h3 className="begin-section">Overview</h3>
      <div className="lead mb-0 end-section">
        <p>
          The
          <Anchor
            content="Invoice"
            href="https://bitpay.com/demos"
            spaceBefore
            spaceAfter
            bold
          />
          has really been the face of BitPay for a majority of the company's
          history. Both our
          <Anchor
            content="wallet"
            href="https://bitpay.com/wallet"
            spaceBefore
            spaceAfter
          />
          and
          <Anchor
            content="debit card"
            href="https://bitpay.com/card"
            spaceBefore
            spaceAfter
          />
          have a solid user base but we are still mostly known as a blockchain
          payment processing company.
        </p>
        <p>
          Throughout the years, the Invoice has remained as the keystone of the
          business, serving either as the main interface for businesses to
          receive crypto payments or as the underlying service for debit / gift
          cards.
        </p>
        <p>
          When are I first joined BitPay, the invoice was a simple utility,
          allowing a user to enter an email, select BTC or BCH, and then pay
          with a Payment Protocol compatible wallet. I was actually pretty
          surprised that we did not support P2P payments but quickly learned the
          history of the problem.
        </p>
        <p>
          Since then, things have definitely changed and luckily I have had the
          opportunity to be heavily involved in every major initiative. Below
          are some noteworthy upgrades since 2018.
        </p>
        <ol className="list">
          <li className="list__item">
            <div className="list__item__number">1</div>
            <div>Coinbase Connect Support (OAuth)</div>
          </li>
          <li className="list__item">
            <div className="list__item__number">2</div>
            <div>P2P Support (Pay to Address)</div>
          </li>
          <li className="list__item">
            <div className="list__item__number">3</div>
            <div>ETH, USDC, BUSD, PAX, GUSD (Web3) Support</div>
          </li>
          <li className="list__item">
            <div className="list__item__number">4</div>
            <div>BitPay Wallet Optimizations</div>
          </li>
          <li className="list__item">
            <div className="list__item__number">5</div>
            <div>Enhanced Branding (Logos)</div>
          </li>
          <li className="list__item">
            <div className="list__item__number">6</div>
            <div>XRP Support</div>
          </li>
        </ol>
      </div>
      <WideScreen src="/imgs/invoice/pay/universal-mode-desktop.jpg" />
      <div className="lead begin-section">
        <p>
          Above is a mild teaser of the V4 design system for Invoice as well
          some of the BitPay Wallet optimizations that are coming soon.
        </p>
        <p>
          The UI Breakdowns above aim to be detailed examinations into the
          unique challenges of designing a crypto payment experience.
        </p>
      </div>
    </motion.main>
  </>
);

export default BitPayInvoice;