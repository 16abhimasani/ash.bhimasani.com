import React from "react";
import { motion } from "framer-motion";
import { fadeInPage } from "../../../animations/page";
import Anchor from "../../../components/utils/anchor";
import SideBar from "../../../components/sidebar/sidebar";
import WideScreen from "../../../components/wide-screen/wide-screen";
import InvoiceSelectWalletConnectDemo from "../../../components/demos/invoice/select/invoice-wallet-connect";
import InvoiceSelectWalletPairDemo from "../../../components/demos/invoice/select/invoice-wallet-pair";

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
        <h5 className="end-section">Instant, zero fee payments</h5>
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
            As soon as we enabled P2P payments via Wallet Selection, we finally
            had some insight into what was really going on with users' payment
            experiences. Pretty quickly, Coinbase rose to our 4th most popular
            payment method but with a ~30% error rate.
          </p>
          <p>
            Basically, around 30% of Coinbase users were making some kind of
            error when paying due to the decoupled nature of P2P payments (push
            vs. pull). Common errors included mistakenly entering in a USD
            amount when withdrawing or a delayed transfer.
          </p>
          <p>
            Coinbase's
            <Anchor
              content="Connect API"
              href="https://developers.coinbase.com/docs/wallet/coinbase-connect"
              spaceBefore
              spaceAfter
            />
            seemed like the perfect solution to address all our problems. By
            directly connecting to a user's account, we can initiate an exact
            withdrawal while still requiring manual authorization by the user
            (secure & precise).
          </p>
          <p>
            The end result is an instant, errorless payment experience that
            bypasses the usual issues of dealing with crypto addresses and exact
            decimal amounts.
          </p>
        </div>
        <a
          href="https://twitter.com/brian_armstrong/status/1293626788472475648"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="end-section"
            width="100%"
            src="/imgs/invoice/coinbase/brian-armstrong-bitpay-coinbase-tweet.png"
            alt="Brian Armstrong's Tweet about Coinbase support from BitPay"
          />
        </a>
      </section>

      <section className="begin-section">
        <h2 className="begin-section">Payment Tips</h2>
        <h5 className="end-section">
          Guiding the experience with helpful info
        </h5>
        <WideScreen
          src={[
            "/imgs/invoice/select/wallet-info--cash-app.png",
            "/imgs/invoice/select/wallet-info--bitcoin-core.png",
            "/imgs/invoice/select/wallet-info--coinbase-wallet.png",
            "/imgs/invoice/select/select-currency.png",
          ]}
          carousel
        />
        <div className="lead begin-section end-section">
          <p>
            To handle the common pitfalls with payments, the Info state is a
            simple way to chuck in helpful information. Even Payment Protocol
            enabled wallets like Bitcoin Core / ABC are a bit tricky to use when
            it comes to pasting in links.
          </p>
          <p>
            In the case of Coinbase Wallet, the best way to ensure an accurate
            P2P payment experience is to scan the BIP21 URI. We often saw users
            manually entering into the wallet's send flow rather than scanning
            the QR code.
          </p>
        </div>
        <WideScreen src="/imgs/invoice/select/cash-app-conversion-exception-graph.png" />
        <div className="lead begin-section end-section">
          <p>
            For other providers like Cash App, we use this state to prevent
            common errors we see. The graph above is demonstration of the
            effectiveness of this state. The inflection point around February
            2020 is when we implemented an enhanced Payment Instructions state
            for Cash App. You can clearly see the uptrend in conversions
            (actually paying the Invoice) and an overall downtrend in payment
            errors (sending less or more money than needed).
          </p>
          <p>
            Looking back on the data over the last year, it is definitely
            amazing what a simple change like this can do!
          </p>
        </div>
      </section>

      <section className="begin-section">
        <h2 className="begin-section">Feedback Loops</h2>
        <h5 className="end-section">Figuring out what users want</h5>
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
            As I mentioned previously, a large focus of ours was making sure we
            were capturing as much as we could about what our users wanted. If
            you can't find your wallet, I included a bailout option; clicking on
            "I don't see my wallet" let's the user submit a response.
          </p>
          <p>
            We also keep track of what people are searching so we can
            preemptively investigate a payment method before a request.
          </p>
        </div>
      </section>

      <section className="begin-section">
        <h2 className="begin-section">More Wallet Connections</h2>
        <h5 className="end-section">Bringing seamless payments to others</h5>
        <WideScreen
          src={[
            "/imgs/invoice/select/wallet-link.png",
            "/imgs/invoice/select/metamask-connect.png",
            "/imgs/invoice/select/wallet-connect.png",
            "/imgs/invoice/select/ledger-connect.png",
            "/imgs/invoice/select/trezor-connect.png",
          ]}
          carousel
        />
        <div className="lead begin-section end-section">
          <p>
            The screens above are a sneak peak of more direct integrations
            coming soon to the invoice. MetaMask is already a supported wallet
            but the above is an example of the in-browser "connection pending"
            UI.
          </p>
        </div>

        <h4 className="begin-section">V4 Reference Implementation</h4>
        <div className="begin-section wrapper-center">
          <InvoiceSelectWalletConnectDemo type="metamask" />
        </div>
        <div className="begin-section wrapper-center">
          <InvoiceSelectWalletPairDemo type="argent" />
        </div>
        <div className="begin-section wrapper-center">
          <InvoiceSelectWalletPairDemo type="coinbaseWallet" />
        </div>
        <div className="begin-section wrapper-center">
          <InvoiceSelectWalletConnectDemo type="ledger" />
        </div>
        <div className="begin-section wrapper-center">
          <InvoiceSelectWalletConnectDemo type="trezor" />
        </div>
      </section>
    </motion.main>
  </>
);

export default BitPayInvoiceWalletSelection;
