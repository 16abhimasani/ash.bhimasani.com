import React from "react";
import { motion } from "framer-motion";
import { fadeInPage } from "../../../animations/page";
import Anchor from "../../../components/utils/anchor";
import SideBar from "../../../components/sidebar/sidebar";
import WideScreen from "../../../components/wide-screen/wide-screen";

const BitPayInvoicePay: React.FC = () => (
  <>
    <SideBar />
    <motion.main className="body" {...fadeInPage}>
      <section>
        <h1 className="begin-section pt-0">Pay with Crypto</h1>
        <h5>A compact utility for acceptance</h5>
        <div className="lead begin-section end-section">
          <p>
            Up until 2019, the BitPay
            <Anchor
              content="Invoice"
              href="https://bitpay.com/demos"
              spaceBefore
              spaceAfter
              bold
            />
            only had to support
            <Anchor
              content="Payment Protocol"
              href="https://support.bitpay.com/hc/en-us/articles/360015839672-Frequently-Asked-Questions-About-BitPay-and-Payment-Protocol-BIP70-"
              spaceBefore
              spaceAfter
              bold
            />
            for Bitcoin and Bitcoin Cash. Payment protocol essentially is a way
            for BitPay to communicate directly with a user's wallet and lock in
            the amount, address, fee, and expiration time. This allowed instant,
            error-free payments; the catch here is that only a handful of the
            most popular crypto platforms actually support the protocol.
          </p>
          <p>
            By the end of 2020, it became a company wide initiative to open the
            Invoice back up and accept peer-to-peer payment in addition to
            PayPro. With Wallet Selection opening the doors for custom payment
            flows, I immediately got to work leveraging and extending the
            Invoice's design system to address all the issues we faced over the
            last 2 years.
          </p>
        </div>
        <h3>Key Takeaways</h3>
        <div className="lead end-section">
          <ol className="list">
            <li className="list__item">
              <div className="list__item__number">1</div>
              <div>Launching / Triggering Wallet is ideal</div>
            </li>
            <p>
              Being able to directly launch an app or communicate with the
              wallet is ideal and a user may even change their behavior to
              achieve this. (MetaMask, Coinbase, BIP21, PayPro)
            </p>
            <li className="list__item">
              <div className="list__item__number">2</div>
              <div>Copying is highly used but error prone</div>
            </li>
            <p>
              Copying fields is the primary way to pay in 3/6 situations and is
              the fallback in the other 3. This means that copying can be 1
              layer deep when it is a secondary action but has to be immediately
              accessible otherwise. (Amount + Address, PayPro)
            </p>
            <li className="list__item">
              <div className="list__item__number">3</div>
              <div>Scanning is ideal but has narrow usage</div>
            </li>
            <p>
              Similar to Open in Wallet, scanning is an accurate way to populate
              payment details but is only available in 1/6 situations with 2
              degrees of precision. (Address, BIP21, PayPro)
            </p>
          </ol>
        </div>
      </section>

      <section className="begin-section">
        <h2 className="begin-section">From Exchanges</h2>
        <h5 className="end-section">
          Universal interface for blockchain payments
        </h5>
        <WideScreen
          src={[
            "/imgs/invoice/pay/exchange/collapsed.png",
            "/imgs/invoice/pay/exchange/details-open.png",
            "/imgs/invoice/pay/exchange/qr-open.png",
            "/imgs/invoice/pay/exchange/xrp.png",
          ]}
          carousel
        />
        <div className="lead begin-section end-section">
          <p>
            When paying using an app that cannot read BIP21 URIs, really all you
            want is the Address + Amount so you can copy and verify the strings.
            The previous incarnation of the invoice was QR optimized as it
            assumed Exchange users would not be able to pay without first
            transferring to a wallet.
          </p>
          <p>
            The simplest solution proved to be pulling the Copy Fields out of
            the Sheet and place them pinned to the bottom of the card. The
            BitPay Details bar is crucial element to completing the look of the
            Invoice and maintaining consistency across the other states.
          </p>
          <p>
            Additionally, based on the wallet selected, we can auto-toggle the
            QR code. For example. Cash App would have the Address QR
            automatically toggled open because mobile scanning ensures an
            accurate transmission of the address. In the case of desktop-first
            service like Kraken or Gemini for example, the QR would start out
            collapsed.
          </p>
        </div>
        <h3>3 Flows for Exchanges</h3>
        <div className="lead end-section">
          <ol className="list">
            <li className="list__item">
              <div className="list__item__number">1</div>
              <div>On Desktop paying with Exchange on Desktop</div>
            </li>
            <p>Primarily copying & pasting fields.</p>
            <li className="list__item">
              <div className="list__item__number">2</div>
              <div>On Desktop paying with Exchange on Mobile</div>
            </li>
            <p>Primarily copying & pasting amount, then scanning address.</p>
            <li className="list__item">
              <div className="list__item__number">3</div>
              <div>On Mobile paying with Exchange on Mobile</div>
            </li>
            <p>Primarily copying fields.</p>
          </ol>
        </div>
        <div className="d-flex begin-section">
          <img
            style={{ marginRight: 24 }}
            width="350"
            height="100%"
            src="/imgs/invoice/pay/exchange/mobile.png"
            alt="P2P No URI Mobile"
          />
          <img
            width="350"
            height="100%"
            src="/imgs/invoice/pay/exchange/mobile-toast.png"
            alt="P2P No URI Mobile Toast"
          />
        </div>
      </section>

      <section className="begin-section">
        <h2 className="begin-section">From Wallets</h2>
        <h5 className="end-section">Optimizing precision for P2P payments</h5>
        <WideScreen
          src={[
            "/imgs/invoice/pay/wallet/qr-open.png",
            "/imgs/invoice/pay/wallet/details-open.png",
            "/imgs/invoice/pay/wallet/copy-sheet.png",
            "/imgs/invoice/pay/wallet/collapsed.png",
            "/imgs/invoice/pay/wallet/info-toast.png",
            "/imgs/invoice/pay/wallet/tooltip.png",
          ]}
          carousel
        />
        <div className="lead begin-section">
          <p>
            The key advantage of using a non-custodial wallet is that these
            wallets often support URI decoding allowing us to pre-fill the
            amount and address. In this case, the way we do this is via "Open in
            Wallet" which manually triggers the respective BIP21 URI from the
            browser. The operating system then handles which application to
            actually launch. This is great if you 1 wallet installed on your
            device but quickly breaks down otherwise.
          </p>
          <p>
            Based on selection, we can optimize for either Scan or Launch by
            collapsing the QR if we can assume the user will be paying with a
            wallet on the same device. However, because Launching a wallet is a
            nondeterministic action, we have to keep the Copy functionality on
            par with Launch hence the linear "Pay Bar" design.
          </p>
        </div>
        <h3 className="begin-section">And 3 Flows for Wallets</h3>
        <div className="lead end-section">
          <ol className="list">
            <li className="list__item">
              <div className="list__item__number">4</div>
              <div>On Desktop paying with Wallet on Desktop</div>
            </li>
            <p>
              Ideally will try to launch wallet, falling back to copying fields
              or PayPro link.
            </p>
            <li className="list__item">
              <div className="list__item__number">5</div>
              <div>On Desktop paying with Wallet on Mobile</div>
            </li>
            <p>
              Ideally will try to scan QR, falling back to copying fields or
              PayPro link.
            </p>
            <li className="list__item">
              <div className="list__item__number">6</div>
              <div>On Mobile paying with Wallet on Mobile</div>
            </li>
            <p>
              Ideally will try to launch wallet, falling back to copying fields
              or PayPro Link.
            </p>
          </ol>
        </div>
        <div className="d-flex begin-section">
          <img
            style={{ marginRight: 24 }}
            width="350"
            height="100%"
            src="/imgs/invoice/pay/wallet/mobile.png"
            alt="P2P URI Mobile"
          />
          <img
            width="350"
            height="100%"
            src="/imgs/invoice/pay/wallet/mobile-toast.png"
            alt="P2P URI Mobile Toast"
          />
        </div>
      </section>

      <section className="begin-section">
        <h2 className="begin-section">With Payment Protocol</h2>
        <h5 className="end-section">Consistent experience for BIP72</h5>
        <WideScreen
          src={[
            "/imgs/invoice/pay/paypro/qr-open.png",
            "/imgs/invoice/pay/paypro/copy-toast.png",
            "/imgs/invoice/pay/paypro/details-open.png",
            "/imgs/invoice/pay/paypro/collapsed.png",
            "/imgs/invoice/pay/paypro/uri-fallback.png",
          ]}
          carousel
        />
        <div className="lead begin-section">
          <p>
            The consistency of the upgrade / downgrade experience between PayPro
            and P2P was essential so the main form the Invoice takes is largely
            identical. We can trim off certain layer however; in this case
            because only 1 string can be copied, the Copy Sheet is removed
            entirely in favor of a simple toast that displays the full string.
          </p>
          <p>
            On mobile, this transforms the experience into a compact interface
            that can be paid with a few taps. Additionally, we can also detect
            when a PayPro link is actually hit by the wallet; so in the case
            "Open in Wallet" does not work as expected, we can auto-trigger a
            Helper Toast to guide the user.
          </p>
        </div>
        <h4>V3 (Old Design)</h4>
        <video
          className="h-align d-block end-section"
          width="500"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/vids/invoice/v3-qr.mp4" type="video/mp4" />
        </video>

        <h3 className="begin-section">2 Types of Scanning</h3>
        <div className="lead end-section">
          <ol className="list">
            <li className="list__item">
              <div className="list__item__number">1</div>
              <div>Plain String: Address or Tag Only</div>
            </li>
            <p>
              Type 1 scanning must make clear to the user what exactly they are
              scanning in the case of 2 strings being scannable i.e Address &
              Destination Tag for XRP. Additionally, Type 1 scanning is
              typically optional so a toggle is required considering we should
              expect low usage of this capability. For example, the Gemini
              mobile app has the capability of scanning an address when
              withdrawing but on average, exchange mobile apps have a lower
              userbase than their desktop counterpart with notable exceptions
              like Cash App, Paxful, etc.
            </p>
            <li className="list__item">
              <div className="list__item__number">2</div>
              <div>URI: BIP21 / BIP72 / PayPro</div>
            </li>
            <p>
              Type 2 scanning is more functional and does not necessarily have a
              specific field that corresponds to it. For example, a BIP21 URI
              has a specific encoding that we wouldn’t display, we would instead
              show the Address & Amount separately with their own copy buttons.
              This is not true however for a BIP72 URI where the contents of the
              QR code is the same as the copy field.
            </p>
            <p>
              BIP72 URIs are unique because wallets have to generally optimize
              for PayPro’s behavior of locking the amount and address. Copay
              does this by reading the user’s clipboard and allowing them to
              open the payment. Other wallets simply have a “Open URI” button,
              allow the user to paste the link into the Address field if it is
              before Amount, or only work with “Open in Wallet” or scanning.
              Thus, the user usually has to be aware to some degree of their
              wallet’s flow for PayPro versus the universal support for Address
              & Amount. This theory leads me to believe that the contents of a
              PayPro link are not very important to the user.
            </p>
          </ol>
        </div>
        <div className="d-flex begin-section">
          <img
            style={{ marginRight: 24 }}
            width="350"
            height="100%"
            src="/imgs/invoice/pay/paypro/mobile.png"
            alt="PayPro Mobile"
          />
          <img
            width="350"
            height="100%"
            src="/imgs/invoice/pay/paypro/mobile-toast.png"
            alt="PayPro Mobile Toast"
          />
        </div>
      </section>

      <section className="begin-section">
        <h2 className="begin-section">Direct Connection</h2>
        <h5 className="end-section">Pull payments with account pairing</h5>
        <h3 className="begin-section">Web3 Wallets (MetaMask)</h3>
        <WideScreen
          src={[
            "/imgs/invoice/pay/direct/web3/pay.png",
            "/imgs/invoice/pay/direct/web3/balances.png",
            "/imgs/invoice/pay/direct/web3/details.png",
          ]}
          carousel
        />
        <div className="lead begin-section end-section">
          <p>
            Direct Connection payment experiences are essentially our custom
            integrations for specific wallets. In the case of Ethereum and ERC20
            payments, the connection itself is generalized allowing the Invoice
            to connect to any Web3 wallet.
          </p>
          <p>
            When I first created this design for ETH payments in 2019, I knew we
            needed the interface generalized enough to support any arbitrary
            feed of balances. The result is 0x-like UI for initiating
            "withdrawals". Definitely better than dealing with Addresses,
            Amount, and Miner Fees!
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
          <source src="/vids/invoice/oauth-details.mp4" type="video/mp4" />
        </video>

        <h3 className="begin-section">OAuth Exchanges (Coinbase)</h3>
        <WideScreen
          src={[
            "/imgs/invoice/pay/direct/oauth/pay.png",
            "/imgs/invoice/pay/direct/oauth/balances.png",
            "/imgs/invoice/pay/direct/oauth/details.png",
          ]}
          carousel
        />
        <div className="lead begin-section end-section">
          <p>
            OAuth was BitPay's first major shift from purely dealing with
            blockchain payments. These payments work by directly connecting
            BitPay's Coinbase account with the user's and initiating an
            account-to-account transfer between the two at time of payment
            (off-chain).
          </p>
          <p>
            The result is a feeless, instant payment that feels more like PayPal
            than crypto. You can read more about the Coinbase user experience I
            created
            <Anchor
              content="here"
              href="/bitpay/invoice/select"
              spaceBefore
              newTab={false}
            />
            .
          </p>
        </div>

        <h3 className="begin-section">Hardware Wallets (Ledger)</h3>
        <WideScreen src="/imgs/invoice/pay/direct/hardware/pay.png" />
        <div className="lead begin-section end-section">
          <p>
            We can take the same concept from Web3 and apply it to custom
            integrations for hardware wallets. See
            <Anchor
              content="compound.finance"
              href="https://app.compound.finance/"
              spaceBefore
              spaceAfter
            />
            for an example of how this would work.
          </p>
        </div>
      </section>

      <section className="begin-section">
        <h2 className="begin-section">From BitPay Wallet</h2>
        <h5 className="end-section">One-tap payments for our ecosystem</h5>
        <WideScreen
          src={[
            "/imgs/invoice/pay/universal/push-notify.png",
            "/imgs/invoice/pay/universal/details-open.png",
          ]}
          carousel
        />
        <div className="lead begin-section end-section">
          <p>
            Finally, the last configuration of the Invoice is what I call
            "Universal Mode". The purpose of Universal Mode is to provide a
            fully optimized payment experience for BitPay App users that
            bypasses authentication, email, and currency selection. We can take
            it step further by automatically sending a push notification with
            the payment details to a user's paired device. On mobile, we can
            skip the Invoice directly and bounce the user to their wallet as
            soon as they select it.
          </p>
          <p>
            This creates an extremely unique and seamless crypto payment
            experience that cannot easily be recreated with third-party wallets.
          </p>
        </div>
        <img
          className="h-align d-block begin-section"
          width="350"
          height="100%"
          src="/imgs/invoice/pay/universal/mobile.png"
          alt="Universal Mode Mobile Toast"
        />
      </section>
    </motion.main>
  </>
);

export default BitPayInvoicePay;
