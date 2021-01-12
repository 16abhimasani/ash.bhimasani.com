import React from "react";
import { motion } from "framer-motion";
import { fadeInPage } from "../../../animations/page";
import SideBar from "../../../components/sidebar/sidebar";
import WideScreen from "../../../components/wide-screen/wide-screen";
import InvoiceReceiptDemo from "../../../components/demos/invoice/receipt/invoice-receipt";
import { BitPayHead } from "..";

const BitPayInvoiceReceipt: React.FC = () => (
  <>
    {BitPayHead}
    <SideBar />
    <motion.main className="body" {...fadeInPage}>
      <section>
        <h1 className="begin-section pt-0">Payment Receipt</h1>
        <h5>Post-payment handling</h5>
        <div className="lead begin-section end-section">
          <p>
            One of my earlier design initiatives at BitPay was creating a
            "receipt" UI pattern that would help us globally show payment
            details in the Invoice, Dashboard, and emails. This pattern was
            heavily inspired by Cash App's receipt patterns. While initially
            very similar in my email designs, I slowly differentiated while
            adapting the system for Invoice.
          </p>
          <p>
            The result is an elegant representation of your blockchain payment.
            Cryptocurrency is the closest thing to electronic cash so I wanted
            this pattern to invoke the real-world counterpart.
          </p>
        </div>
      </section>

      <section>
        <h2 className="begin-section">Fully Paid</h2>
        <h5 className="end-section">The last state in a successful payment</h5>
        <WideScreen
          src={[
            "/imgs/invoice/receipt/fully-paid.png",
            "/imgs/invoice/receipt/leave-feedback.png",
          ]}
          carousel
        />
        <div className="lead begin-section">
          <p>
            As you can see here, the Invoice price takes the center stage as a
            big, bold number in the middle of the card. The BitPay Timestamp bar
            acts as minor mutation of the Details bar to keep a consistent look.
          </p>
          <p>
            Additionally, the light toast under the card acts as a non-intrusive
            way to prompt the user for an optional action. The process of
            designing the Success state was definitely the easiest; the green
            color is quick way to signify a positive state while the payment
            details are fixed top level.
          </p>
          <p>
            Previously, the Success state was just a small card with the details
            buried a level down in the Info icon.
          </p>
        </div>

        <h4 className="begin-section">V4 Reference Implementation</h4>
        <section className="begin-section end-section wrapper-center">
          <div style={{ marginBottom: 124 }}>
            <InvoiceReceiptDemo type="paid" />
          </div>
        </section>

        <h4>V3 (Old Design)</h4>
        <img
          className="h-align d-block end-section"
          width="350"
          height="100%"
          src="/imgs/invoice/v3/paid.svg"
          alt="V3 Paid State"
        />
      </section>

      <section className="begin-section">
        <h2 className="begin-section">Merchant Initiated Refund</h2>
        <h5 className="end-section">Intuitive refunds for ecommerce</h5>
        <WideScreen
          src={[
            "/imgs/invoice/receipt/refund.png",
            "/imgs/invoice/receipt/refund-address.png",
            "/imgs/invoice/receipt/refund-processing.png",
            "/imgs/invoice/receipt/refund-complete.png",
          ]}
          carousel
        />
        <div className="lead begin-section end-section">
          <p>
            One of the primary actions when receiving a crypto refund is
            cross-checking the amount you spent against the current exchange
            rate. Elevating payment details to the top level really makes the
            Refund flow more usable.
          </p>
          <p>
            You can already see that the "Post-Payment" part of Invoice is meant
            to be minor mutations of the receipt UI pattern. By modifying small
            details like the icon, color, and heading, we can create a
            consistent experience that feels familiar no matter what point you
            visit the Invoice.
          </p>
          <p>
            Here you can another usage of the Black Toast, this time serving as
            a primary action with content. The Toast pattern for Refunds was
            carefully chosen; because a user will typically cross-check their
            initial payment, we want to constantly keep that as the primary
            content. The refund process itself can take a backseat while still
            being highly accessible.
          </p>
        </div>

        <h4 className="begin-section">V4 Reference Implementation</h4>
        <section className="begin-section end-section wrapper-center">
          <div style={{ marginBottom: 124 }}>
            <InvoiceReceiptDemo type="refund" />
          </div>
        </section>
        <section className="begin-section end-section wrapper-center">
          <div style={{ marginBottom: 76 }}>
            <InvoiceReceiptDemo type="processing" />
          </div>
        </section>
      </section>

      <section className="begin-section">
        <h2 className="begin-section">Underpaid</h2>
        <h5 className="end-section">Payment failure handling</h5>
        <WideScreen
          src={[
            "/imgs/invoice/receipt/underpaid.png",
            "/imgs/invoice/receipt/refund-address.png",
            "/imgs/invoice/receipt/underpaid-complete.png",
          ]}
          carousel
        />
        <div className="lead begin-section">
          <p>
            The main idea I brought to the Underpaid state here is immediately
            signaling payment failure. With the launch of P2P, I knew payment
            errors would be something we would deal with more often. The V3
            configuration of this state provides lots of information but does
            not clearly communicate the status.
          </p>
          <p>
            The benefit to the receipt UI pattern is that it allows a user to
            easily see their own mistake. In this case, the user paid about $200
            less than they needed to. Underpayments can happen for all sorts of
            reasons but the most common is that some wallets and exchanges
            subtract the transaction fee from the amount you enter resulting in
            a less than intended amount of funds arriving on our end.
          </p>
        </div>

        <h4 className="begin-section">V4 Reference Implementation</h4>
        <section className="begin-section end-section wrapper-center">
          <div style={{ marginBottom: 124 }}>
            <InvoiceReceiptDemo type="underpaid" />
          </div>
        </section>

        <h4>V3 (Old Design)</h4>
        <img
          className="h-align d-block"
          width="350"
          height="100%"
          src="/imgs/invoice/v3/underpaid.svg"
          alt="V3 Underpaid State"
        />
      </section>

      <section className="begin-section">
        <h2 className="begin-section">Overpaid</h2>
        <h5 className="end-section">Payment change handling</h5>
        <WideScreen
          src={[
            "/imgs/invoice/receipt/overpaid.png",
            "/imgs/invoice/receipt/refund-address.png",
            "/imgs/invoice/receipt/overpaid-complete.png",
          ]}
          carousel
        />
        <div className="lead begin-section">
          <p>
            Because an Overpaid state is still a successful payment, I wanted
            the new state to reduce alarm as much as possible while still
            prompting the user for an address. The result is a duplication of
            the normal Refund state. With the details exposed, the user can
            easily see their mistake.
          </p>
        </div>

        <h4 className="begin-section">V4 Reference Implementation</h4>
        <section className="begin-section end-section wrapper-center">
          <div style={{ marginBottom: 124 }}>
            <InvoiceReceiptDemo type="overpaid" />
          </div>
        </section>

        <h4>V3 (Old Design)</h4>
        <img
          className="h-align d-block"
          width="350"
          height="100%"
          src="/imgs/invoice/v3/overpaid.svg"
          alt="V3 Overpaid State"
        />
      </section>

      <section className="begin-section">
        <h2 className="begin-section">Slow Payment</h2>
        <h5 className="end-section">Low miner fee handling</h5>
        <WideScreen src="/imgs/invoice/receipt/low-fee.png" />
        <div className="lead begin-section">
          <p>
            Lastly, for the Low Fee payment state, I wanted to reduce the heavy
            language while still providing some info to the user of the
            situation. Again, a simple mutation of the header, color, and icon
            is all that is needed to prompt a "Caution" state. Low fee payments
            can sometimes end up failing when the miner fee network spikes. With
            RBF, BTC users can bump the fee to speed it up if they hit this
            state.
          </p>
        </div>

        <h4 className="begin-section">V4 Reference Implementation</h4>
        <section className="begin-section end-section wrapper-center">
          <div style={{ marginBottom: 124 }}>
            <InvoiceReceiptDemo type="delayed" />
          </div>
        </section>

        <h4>V3 (Old Design)</h4>
        <img
          className="h-align d-block"
          width="350"
          height="100%"
          src="/imgs/invoice/v3/low-fee.svg"
          alt="V3 Low Fee"
        />
      </section>
    </motion.main>
  </>
);

export default BitPayInvoiceReceipt;
