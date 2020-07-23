import React from "react";
import { motion } from "framer-motion";
import { fadeInPage } from "../../animations/page";
import SideBar from "../../components/sidebar/sidebar";
import WideScreen from "../../components/wide-screen/wide-screen";

const BitPayEmails: React.FC = () => (
  <>
    <SideBar />
    <motion.main className="body" {...fadeInPage}>
      <h1 className="begin-section pt-0">Emails V2</h1>
      <h5 className="end-section">A brand refresh for platform emails</h5>
      <WideScreen
        src={[
          "/imgs/emails/operational/verify-email.jpg",
          "/imgs/emails/operational/verify-login.jpg",
          "/imgs/emails/operational/start-verify.jpg",
          "/imgs/emails/operational/new-device.jpg",
          "/imgs/emails/operational/reset-password.jpg",
          "/imgs/emails/operational/new-refund.jpg",
          "/imgs/emails/operational/refund-processing.jpg",
        ]}
        carousel
      />
      <div className="lead begin-section end-section">
        <p>
          Here are some of the new email templates as part of BitPay's brand
          update to keep up with our evolving product line. This was one of my
          earliest personal projects when I joined BitPay. I am a heavy email
          user so our old email templates were one of the first things I noticed
          could be improved upon.
        </p>
        <p>
          This was a really fun solo project and allowed me to refine some early
          branding ideas that later critically influenced the design of other
          products.
        </p>
      </div>

      <h2 className="begin-section">Emails Receipts</h2>
      <h5 className="end-section">Making crypto feel more familiar</h5>
      <WideScreen
        src={[
          "/imgs/emails/receipt/gift-card-receipt.jpg",
          "/imgs/emails/receipt/refund-receipt.jpg",
          "/imgs/emails/receipt/payment-declined-receipt.jpg",
          "/imgs/emails/receipt/payment-detected-receipt.jpg",
          "/imgs/emails/receipt/card-order-receipt.jpg",
          "/imgs/emails/receipt/card-load-receipt.jpg",
        ]}
        carousel
      />
      <div className="lead begin-section end-section">
        <p>
          I was really inspired by Square Cash's email receipts because the
          parallel column style of line items works perfectly for bitcoin
          payments, especially in a payment processing context where the user is
          charged in one currency but pays in another.
        </p>
        <p>
          This V1 iteration essentially replicates Cash app's design but with a
          bitcoin specific context. Major goal for me was to introduce fiat
          symbols without sacrificing clarity of the pricing currency.
        </p>
        <p>
          Since the launch of this email style, I have brought this "receipt"
          style to both the Consumer Dashboard and the Invoice. Its interesting
          to see how low impact experimentation can lead a foundational shift
          somewhere else. With Invoice, I was heavily inspired by this parallel
          column style; I am looking forward to sharing this soon.
        </p>
      </div>

      <h3 className="begin-section">Emails V1 (2013)</h3>
      <h5 className="end-section">
        BitPay's original transactional email design
      </h5>
      <WideScreen
        src={[
          "/imgs/emails/old/refund-processing.png",
          "/imgs/emails/old/confirm-settlement.png",
          "/imgs/emails/old/gift-card-receipt.png",
          "/imgs/emails/old/new-bill.png",
        ]}
        maxWidth={1000}
        carousel
      />
      <div className="lead begin-section end-section">
        <p>
          When I first started my internship at BitPay, these were the emails
          that were being used in production. Once I went pro, I got tired
          pretty quickly of looking at them so I designed some new ones. I
          looked at the emails sent out by Robinhood, Cash App, Coinbase, and
          more to create a "modern" baseline.
        </p>
        <p>
          From here, I decided on a few strong elements to maintain consistency:
        </p>
        <ol className="list">
          <li className="list__item">
            <div className="list__item__number">1</div>
            <div>Round Centered Icon</div>
          </li>
          <li className="list__item">
            <div className="list__item__number">2</div>
            <div>Bold 1 Line Title</div>
          </li>
          <li className="list__item">
            <div className="list__item__number">3</div>
            <div>Bold Intro Text</div>
          </li>
        </ol>
      </div>
    </motion.main>
  </>
);

export default BitPayEmails;
