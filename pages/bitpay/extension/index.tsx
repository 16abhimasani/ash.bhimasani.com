import { motion } from "framer-motion";
import React from "react";
import { fadeInPage } from "../../../animations/page";
import ExtensionAmountDemo from "../../../components/demos/extension/amount/ext-amount";
import ExtensionNavDemo from "../../../components/demos/extension/nav/ext-nav";
import ExtensionReceiptDemo from "../../../components/demos/extension/receipt/ext-receipt";
import PostBox from "../../../components/post-box/post-box";
import { BitPayExtHead } from "../../../components/seo-heads";
import SideBar from "../../../components/sidebar/sidebar";
import Anchor from "../../../components/utils/anchor";

const BitPayExtension: React.FC = () => (
  <>
    {BitPayExtHead}
    <SideBar />
    <motion.main className="body" {...fadeInPage}>
      <h1 className="begin-section pt-0">BitPay Extension</h1>
      <h5 className="end-section">Redefining the crypto payment experience</h5>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          overflow: "hidden",
          height: 233,
        }}
      >
        <video
          style={{ marginTop: 21 }}
          width="100%"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/vids/extension/pay-mode.mp4" type="video/mp4" />
        </video>
      </div>

      <h3 className="begin-section" id="breakdown">
        UI Breakdown
      </h3>
      <PostBox
        icon="/logos/bitpay-ext.svg"
        title="Shop"
        caption="Primary discovery & purchase flow experience"
        link="/bitpay/extension/shop"
      />
      <PostBox
        icon="/logos/bitpay-ext.svg"
        title="Wallet"
        caption="Store credit redemption & management"
        link="/bitpay/extension/wallet"
      />

      <section>
        <h3 className="begin-section">Overview</h3>
        <div className="lead mb-0 end-section">
          <p>
            I'm really excited to share the latest project we've been working
            on; this project was a concept brainstormed amongst engineers
            working on the gift card product about 3 years ago and we finally
            had a chance to build it.
          </p>
          <p>
            <Anchor
              content="Pay with BitPay"
              href="https://bitpay.com/extension"
              spaceAfter
              bold
            />
            is an open-source, privacy first approach to making crypto easier to
            use while you browse the web.
          </p>
        </div>
        <video
          className="h-align d-block"
          width="375"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/vids/extension/purchase-flow.mp4" type="video/mp4" />
        </video>
      </section>

      <div className="breakdown begin-section">
        <div className="col">
          <hgroup>
            <h5>Role</h5>
            Lead Product Designer, Developer
          </hgroup>

          <hgroup>
            <h5>Team</h5>2 Developers
          </hgroup>
        </div>
        <div className="col">
          <hgroup>
            <h5>Scope</h5>Mar - May 2020
          </hgroup>

          <hgroup>
            <h5>What I did</h5>
            UX Research, Interface Design, Animations, Branding, Marketing
          </hgroup>
        </div>
        <div className="col">
          <hgroup>
            <h5>Stack</h5>
            React + TS, Framer Motion, Sketch
          </hgroup>
        </div>
      </div>

      <section>
        <h3 className="begin-section">Checkout Seamlessly &nbsp;&nbsp;⚡️</h3>
        <div className="lead end-section">
          <p>
            We created a browser extension that seamlessly plugs into your
            checkout experience as you shop. Either alerting you of direct
            crypto acceptance or ability to purchase store credit.
          </p>
          <p>With a few clicks while on Amazon, you can:</p>
          <ol className="list">
            <li className="list__item">
              <div className="list__item__number">1</div>
              <div>Generate a payment for the exact amount as your Cart</div>
            </li>
            <li className="list__item">
              <div className="list__item__number">2</div>
              <div>
                Pay it with any crypto we support [BTC, BCH, ETH, USDC...]
              </div>
            </li>
            <li className="list__item">
              <div className="list__item__number">3</div>
              <div>Receive your store credit code in the app</div>
            </li>
            <li className="list__item mb-0">
              <div className="list__item__number">4</div>
              <div>Redeem it instantly & checkout</div>
            </li>
          </ol>
        </div>
      </section>

      <section>
        <h3 className="begin-section">
          Incognito Mode for Spending &nbsp;&nbsp;🕶
        </h3>
        <div className="lead end-section">
          <p>
            Security and privacy is our top priority so we made the extension
            codebase
            <Anchor
              content="open-source"
              href="https://github.com/bitpay/bitpay-browser-extension"
              spaceBefore
              spaceAfter
            />
            like our wallet. Your store credit codes live entirely in the app
            plus your personal information and transaction data is kept private
            from the merchant.
          </p>
          <p>
            We think growing adoption means creatively utilizing existing
            systems. With the possibility of fluid-denomination gift cards, we
            sensed an opportunity to redefine one of the most private forms of
            payment available with a slick interface that just works.
          </p>
          <p>
            <Anchor
              content="Download it for Chrome, Brave, Firefox, or Opera"
              href="https://bitpay.com/extension"
              bold
            />
          </p>
          <p>
            <a
              href="https://www.producthunt.com/posts/pay-with-bitpay?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-pay-with-bitpay"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=270485&theme=dark"
                alt="Pay with BitPay - Convert crypto to store credit seamlessly at checkout | Product Hunt"
                style={{ width: 250, height: 54 }}
                width="250"
                height="54"
              />
            </a>
          </p>
        </div>
      </section>

      <section>
        <h4 className="begin-section">Behind the Scenes</h4>
        <div className="lead end-section">
          <p>
            Like I mentioned previously, the idea for this app has been floated
            internally for quite some time. Last year I created BitPay's first
            <Anchor
              content="public directory"
              href="https://bitpay.com/directory"
              spaceBefore
              spaceAfter
            />
            of our partners and integrations. This was in effort to make it
            easier for people to discover brands and find out how to use crypto.
            Over the last year, the "Merchant Directory" has been gaining a lot
            more traction with our partners. Naturally we were looking for ways
            to take the concept to the next level.
          </p>
          <blockquote>
            What if you could be prompted automatically during checkout to use
            crypto?
          </blockquote>
          <p>
            An extension seemed like the next obvious step to supercharge our
            gift card service and promote brand discovery. We already sold gift
            cards in our mobile wallet for a few years now but we needed to
            bring this capability to the desktop. With the recent acquisition of
            <Anchor
              content="Honey"
              href="https://techcrunch.com/2019/11/20/paypal-to-acquire-shopping-and-rewards-platform-honey-for-4-billion/"
              spaceBefore
            />
            , we knew there was something here worth pursuing.
          </p>
          <p>
            After some initial discussion amongst the team, we were off to the
            races. Over the course of a month, I designed the entire experience
            end-to-end using a variety of principles we learned from previous
            projects. You can find extended breakdowns of the design process and
            app behaviors in the
            <Anchor
              content="UI Breakdown"
              href="#breakdown"
              spaceBefore
              spaceAfter
              newTab={false}
            />
            section.
          </p>
        </div>

        <h4 className="begin-section" id="demos">
          Interactive Demos
        </h4>
        <section className="begin-section end-section wrapper-center">
          <ExtensionNavDemo />
        </section>
        <section className="end-section wrapper-center">
          <ExtensionAmountDemo />
        </section>
        <section className="begin-section end-section wrapper-center">
          <ExtensionReceiptDemo />
        </section>
      </section>
    </motion.main>
  </>
);

export default BitPayExtension;
