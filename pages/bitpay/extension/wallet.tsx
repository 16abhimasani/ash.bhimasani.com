import React from "react";
import { motion } from "framer-motion";
import { ExtensionHead } from "./index";
import { fadeInPage } from "../../../animations/page";
import WideScreen from "../../../components/wide-screen/wide-screen";

const BitPayExtensionWallet: React.FC = () => (
  <>
    {ExtensionHead}
    <motion.main className="body" {...fadeInPage}>
      <h1 className="begin-section pt-0">Wallet Experience Breakdown</h1>
      <h5>Privately Purchase & Securely Store</h5>
      <div className="lead begin-section mb-0 end-section">
        <p>
          The cool thing about this form of gift card purchase is that Claim
          Code lives entirely on the device and is not exposed via email or
          account like many other gift card services. This means that this is
          the closest thing to non-custodial conversion of crypto to fiat.
        </p>
        <p>
          To highlight this, I designed a simple Wallet and Gift Card Details
          views that compactly display everything you need by remaining elegant
          and branded.
        </p>
      </div>

      <h2 className="begin-section">Wallet View</h2>
      <h5 className="end-section">
        An Apple Wallet like experience in your browser
      </h5>
      <WideScreen
        src={[
          "/imgs/extension/wallet-apple.jpg",
          "/imgs/extension/wallet-nike.jpg",
          "/imgs/extension/wallet-amazon.jpg",
        ]}
        carousel
        zoom
      />
      <div className="lead begin-section end-section">
        <p>
          One of the surprising but nonetheless interesting things I brought to
          BitPay was a heavy emphasis on utilizing merchant branding. Until
          recently, we never presented a merchant's logo on our payment gateway
          (our flagship product) until I rolled up my sleeves and manually added
          them. I wanted to take this to the next level with the extension with
          a beautifully crafted Gift Card Slot for every brand supported.
        </p>
      </div>

      <h4 className="begin-section">Available Credits + UI Tips</h4>
      <div className="d-flex">
        <img
          width="375"
          src="/imgs/extension/wallet-shop-toast.svg"
          alt="Wallet: Shop Toast"
        />
        <img
          width="375"
          src="/imgs/extension/wallet-tip-toast.svg"
          alt="Wallet: Tip Toast"
        />
      </div>
      <div className="lead begin-section end-section">
        <p>
          For this page, I placed an emphasis on keeping the user engaged and
          letting them organically explore. The first place I looked to for
          inspiration was the iOS App Store; you can see the heavy influence in
          the layout of the Title + Caption + Logo as well as the
          <span className="f-600">&nbsp;You Might Also Like</span> section
        </p>
        <p>
          We often get "I didn't know X accept bitcoin?" so for directly
          integrated merchants, I made
          <span className="f-600">&nbsp;Payment Instructions</span> a
          first-class citizen. The details attempt to concisely describe how to
          find BitPay as a payment option on a given site without taking up too
          much space.
        </p>
      </div>

      <h4 className="begin-section">Prompt on Page Visit</h4>
      <div className="d-flex">
        <img
          width="375"
          src="/imgs/extension/wallet-brand-toast.svg"
          alt="Wallet: Brand Toast"
        />
        <img
          width="375"
          src="/imgs/extension/wallet-brand-toast-empty.svg"
          alt="Wallet: Empty State"
        />
      </div>
      <div className="lead begin-section end-section">
        <p>
          For this page, I placed an emphasis on keeping the user engaged and
          letting them organically explore. The first place I looked to for
          inspiration was the iOS App Store; you can see the heavy influence in
          the layout of the Title + Caption + Logo as well as the
          <span className="f-600">&nbsp;You Might Also Like</span> section
        </p>
        <p>
          We often get "I didn't know X accept bitcoin?" so for directly
          integrated merchants, I made
          <span className="f-600">&nbsp;Payment Instructions</span> a
          first-class citizen. The details attempt to concisely describe how to
          find BitPay as a payment option on a given site without taking up too
          much space.
        </p>
      </div>

      <h2 className="begin-section">Claim Code + Receipt</h2>
      <h5 className="end-section">
        A utilitarian interface for managing credit
      </h5>
      <WideScreen
        src={[
          "/imgs/extension/card-amazon.jpg",
          "/imgs/extension/card-delta.jpg",
          "/imgs/extension/card-amc.jpg",
        ]}
        carousel
        zoom
      />
      <div className="lead begin-section end-section">
        <p>
          Gift cards can really be broken up into 3 tiers from best to worst:
        </p>
        <ol className="list">
          <li className="list__item">
            <div className="list__item__number">1</div>
            <div>Best: Fluid Value (Amazon)</div>
          </li>
          <li className="list__item">
            <div className="list__item__number">2</div>
            <div>Medium: Fixed Value Prepaid Card (Mastercard)</div>
          </li>
          <li className="list__item">
            <div className="list__item__number">3</div>
            <div>Blah: Fixed Value (Delta)</div>
          </li>
        </ol>
        <p>
          Fluid value gift cards basically mean that you can enter any amount
          within a range; for example, you can purchase an Amazon gift card for
          any amount between $1 and $2000 without providing any personal info.
          The ideal use case here is that you always purchase a gift card for
          the exact amount as your total, spend it immediately, and archive the
          code in the extension.
        </p>
        <p>
          A another type of a gift card that is great but not as seamless as the
          above case, is the prepaid Mastercard which is denominated in $25,
          $50, $100, $250, $500, $1000 increments. This is really useful because
          you can spend this card with any merchant but requires you to enter
          more personal info than a normal gift card. I imagine that the average
          use case for these gift cards is that someone buys a large amount at
          once and uses it over time (Note: this requires keeping track of the
          balance).
        </p>
        <p>
          Finally, the worst possible type of gift cards are awkwardly
          denominated ones that require you either purchase over or under the
          exact amount you need. Delta is denominated in $50, $100, $200, $250,
          $300, $400, $500, $1000 increments. These types are especially
          annoying because if you want to cover your entire total with crypto,
          you must purchase more than you need and then have leftovers locked up
          with a company.
        </p>
        <p>
          Taking all this into mind, I crafted a compact interface with clear
          priorities of actions: allowing ease of redemption, archival, and
          editing.
        </p>
      </div>
      <video
        className="h-align end-section"
        width="375"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/vids/extension/gift-card-balance.mp4" type="video/mp4" />
      </video>

      <h4 className="begin-section">Redemption & Archival</h4>
      <div className="d-flex">
        <img
          width="375"
          src="/imgs/extension/card-amazon.svg"
          alt="Gift Card: Amazon"
        />
        <img
          width="375"
          src="/imgs/extension/archive.svg"
          alt="Archived Gift Cards"
        />
      </div>
      <div className="lead begin-section end-section">
        <p>
          The idea behind the large the pad-like areas for the claim codes
          seemed like an obvious choice. They were large so you're eyes are
          immediately drawn to them and they easily stack. The
          <span className="f-600">&nbsp;Redeem Now</span> button is only
          available for brands where we can directly link the user to a
          redemption page. For Amazon, we actually pre-fill the code making it
          even easier. You can
          <span className="f-600">&nbsp;Archive</span> a card after it is
          completely spent via the 3 dot menu; you can find your old archived
          cards in Settings.
        </p>
      </div>

      <h4 className="begin-section">Highly Functional Management</h4>
      <div className="d-flex">
        <img
          width="375"
          src="/imgs/extension/card-mastercard.svg"
          alt="Gift Card: Mastercard"
        />
        <img
          width="375"
          src="/imgs/extension/card-edit-balance.svg"
          alt="Gift Card: Edit Balance"
        />
      </div>
      <div className="lead begin-section end-section">
        <p>
          Like I mentioned previously, one of the expected use cases for gift
          cards is to slowly use it over time. To optimize for this behavior, we
          built-in a <span className="f-600">Edit Balance</span> function so a
          user can simply enter in the amount that they just spent and the app
          will automatically calculate the remaining balance.
        </p>
      </div>

      <h4 className="begin-section">Delay Handling</h4>
      <div className="d-flex">
        <img
          width="375"
          src="/imgs/extension/card-pending.svg"
          alt="Gift Card: Pending Confirmation"
        />
        <img
          width="375"
          src="/imgs/extension/card-pending-tip.svg"
          alt="Gift Card: Pending Confirmation Tooltip"
        />
      </div>
      <div className="lead begin-section end-section">
        <p>
          Sometimes when paying peer-to-peer with BTC, you can accidentally
          broadcast the transaction with too low of a miner fee, requiring us to
          wait for a confirmation before we mark the payment as complete. When
          this happens, its important to make the user feel comfortable that
          they have successfully completed everything on their end and are just
          waiting for finalization.
        </p>
      </div>
    </motion.main>
  </>
);

export default BitPayExtensionWallet;
