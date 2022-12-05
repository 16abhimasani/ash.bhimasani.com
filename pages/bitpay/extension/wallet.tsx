import { motion } from "framer-motion";
import React from "react";
import { fadeInPage } from "../../../animations/page";
import { BitPayExtHead } from "../../../components/seo-heads";
import SideBar from "../../../components/sidebar/sidebar";
import WideScreen from "../../../components/wide-screen/wide-screen";

const BitPayExtensionWallet: React.FC = () => (
  <>
    {BitPayExtHead}
    <SideBar />
    <motion.main className="body" {...fadeInPage}>
      <section>
        <h1 className="begin-section pt-0">Wallet Experience Breakdown</h1>
        <h5>Privately Purchase & Securely Store</h5>
        <div className="lead begin-section mb-0 end-section">
          <p>
            The cool thing about gift card purchases is that the Claim Codes
            live entirely on the device and are not exposed via email or an
            account like many other services. Because of this unique property,
            we can treat gift cards as a sort of non-custodial, crypto-to-fiat
            conversion tool.
          </p>
          <p>
            In an effort to maximize the gift card purchasing experience, I
            focused heavily on the Wallet and Card Details views. The result is
            a compact configuration of everything you need while remaining
            highly branded.
          </p>
        </div>
      </section>

      <section>
        <h2 className="begin-section">Wallet View</h2>
        <h5 className="end-section">
          An Apple Wallet like experience in your browser
        </h5>
        <WideScreen
          src={[
            "/imgs/extension/desktop/wallet-apple.jpg",
            "/imgs/extension/desktop/wallet-nike.jpg",
            "/imgs/extension/desktop/wallet-amazon.jpg",
          ]}
          carousel
          zoom
        />
        <div className="lead begin-section end-section">
          <p>
            One of the major initiatives I brought to BitPay was a heavy
            emphasis on utilizing merchant branding wherever possible. Until
            recently, we never presented a merchant's logo on our payment
            gateway. The Directory project was the first instance of this idea
            so the branding work I did then laid the foundation for this
            project.
          </p>
          <p>
            I knew I wanted to use even more branding for this project;
            imitating the look of a physical gift card turned out to be the
            perfect way to do this. Luckily, the Wallet app had been doing a
            version of this for sometime so a lot of the heavy lifting in terms
            of mastering assets was already taken care of.
          </p>
        </div>

        <h4 className="begin-section">Available Credits + UI Tips</h4>
        <div className="d-flex">
          <img
            width="375"
            src="/imgs/extension/wallet/wallet-shop-toast.svg"
            alt="Wallet: Shop Toast"
          />
          <img
            width="375"
            src="/imgs/extension/wallet/wallet-tip-toast.svg"
            alt="Wallet: Tip Toast"
          />
        </div>
        <div className="lead begin-section end-section">
          <p>
            An important thing to first note is that the overall structure of
            the app is broken up into 3 parts: the Wallet, Shop, and Settings
            tabs at the bottom. Even though users will be spending the majority
            of their time in the Shop tab, I wanted to deliver an amazing wallet
            experience that felt on-par with any major finance app.
          </p>
          <p>
            The tip section at the top aims to be a centralized way to guide a
            user as they use the app. If the we detect that the user has
            multiple codes, then we can conveniently inform them about the
            Archival feature.
          </p>
          <p>
            Alternatively, the default Shop Toast serves as simple "mission
            statement" of the app; reminding users of the unique capability of
            the extension.
          </p>
        </div>

        <h4 className="begin-section">Prompt on Page Visit</h4>
        <div className="d-flex">
          <img
            width="375"
            src="/imgs/extension/wallet/wallet-brand-toast.svg"
            alt="Wallet: Brand Toast"
          />
          <img
            width="375"
            src="/imgs/extension/wallet/wallet-brand-toast-empty.svg"
            alt="Wallet: Empty State"
          />
        </div>
        <div className="lead begin-section end-section">
          <p>
            When you visit a supported site and then open the app, I needed a 2
            starting states. One would be utilized if the user had no available
            credits and the other would be the case above where we need to
            simply display a CTA above your available credits.
          </p>
          <p>
            The reasoning behind this is pretty simple; we can assume that
            viewing already available codes is a higher priority than viewing a
            "Buy Now" flow. For this reason, I kept the Availability Toast very
            compact, sitting just above the wallet so you don't miss anything.
          </p>
        </div>
      </section>

      <section>
        <h2 className="begin-section">Claim Code + Receipt</h2>
        <h5 className="end-section">
          A utilitarian interface for managing credit
        </h5>
        <WideScreen
          src={[
            "/imgs/extension/desktop/card-amazon.jpg",
            "/imgs/extension/desktop/card-delta.jpg",
            "/imgs/extension/desktop/card-amc.jpg",
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
            within a range; for example, you can purchase an Amazon gift card
            for any amount between $1 and $2000 without providing any personal
            info. The ideal use case here is that you always purchase a gift
            card for the exact amount as your total, spend it immediately, and
            archive the code in the extension.
          </p>
          <p>
            A another type of a gift card that is great but not as seamless as
            the above case, is the prepaid Mastercard which is denominated in
            $25, $50, $100, $250, $500, $1000 increments. This is really useful
            because you can spend this card with any merchant but requires you
            to enter more personal info than a normal gift card. I imagine that
            the average use case for these gift cards is that someone buys a
            large amount at once and uses it over time (Note: this requires
            keeping track of the balance).
          </p>
          <p>
            Finally, the worst possible type of gift cards are awkwardly
            denominated ones that require you either purchase over or under the
            exact amount you need. Delta is denominated in $50, $100, $200,
            $250, $300, $400, $500, $1000 increments. These types are especially
            annoying because if you want to cover your entire total with crypto,
            you must purchase more than you need and then have leftovers locked
            up with a company.
          </p>
          <p>
            Taking all this into mind, I crafted a compact interface with clear
            priorities of actions: allowing ease of redemption, archival, and
            editing.
          </p>
        </div>
        <video
          className="h-align d-block end-section"
          width="375"
          autoPlay
          muted
          loop
          playsInline
        >
          <source
            src="/vids/extension/gift-card-balance.mp4"
            type="video/mp4"
          />
        </video>

        <h4 className="begin-section">Redemption & Archival</h4>
        <div className="d-flex">
          <img
            width="375"
            src="/imgs/extension/wallet/card-amazon.svg"
            alt="Gift Card: Amazon"
          />
          <img
            width="375"
            src="/imgs/extension/settings/archive.svg"
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
            src="/imgs/extension/wallet/card-mastercard.svg"
            alt="Gift Card: Mastercard"
          />
          <img
            width="375"
            src="/imgs/extension/wallet/card-edit-balance.svg"
            alt="Gift Card: Edit Balance"
          />
        </div>
        <div className="lead begin-section end-section">
          <p>
            Like I mentioned previously, one of the expected use cases for gift
            cards is to slowly use it over time. To optimize for this behavior,
            we built-in a <span className="f-600">Edit Balance</span> function
            so a user can simply enter in the amount that they just spent and
            the app will automatically calculate the remaining balance.
          </p>
        </div>

        <h4 className="begin-section">Delay Handling</h4>
        <div className="d-flex">
          <img
            width="375"
            src="/imgs/extension/wallet/card-pending.svg"
            alt="Gift Card: Pending Confirmation"
          />
          <img
            width="375"
            src="/imgs/extension/wallet/card-pending-tip.svg"
            alt="Gift Card: Pending Confirmation Tooltip"
          />
        </div>
        <div className="lead begin-section end-section">
          <p>
            Sometimes when paying peer-to-peer with BTC, you can accidentally
            broadcast the transaction with too low of a miner fee, requiring us
            to wait for a confirmation before we mark the payment as complete.
            When this happens, its important to make the user feel comfortable
            that they have successfully completed everything on their end and
            are just waiting for finalization.
          </p>
        </div>

        <h4 className="begin-section">BitPay ID Perks</h4>
        <div className="d-flex">
          <img
            width="375"
            src="/imgs/extension/settings/settings.svg"
            alt="Settings"
          />
          <img
            width="375"
            src="/imgs/extension/settings/settings-connect-account.svg"
            alt="Settings: Connect Account"
          />
        </div>
        <div className="lead begin-section end-section">
          <p>
            Because we already had consumer accounts in place, I was looking for
            ways we could add deeper integration to create a cohesive ecosystem.
            Some of the ideas I had:
          </p>
          <ol className="list">
            <li className="list__item">
              <div className="list__item__number">1</div>
              <div>
                Sync gift cards across connected devices (mobile wallet)
              </div>
            </li>
            <li className="list__item">
              <div className="list__item__number">2</div>
              <div>Immediately push payment to wallet if connected</div>
            </li>
          </ol>
        </div>
        <div className="d-flex">
          <img
            width="375"
            src="/imgs/extension/settings/settings-awaiting-connection.svg"
            alt="Settings: Awaiting Connection"
          />
          <img
            width="375"
            src="/imgs/extension/settings/settings-account-connected.svg"
            alt="Settings: Account Connected"
          />
        </div>
        <div className="lead begin-section end-section">
          <p>
            In the past, I have always been wary of saving data within an
            extension because I was worried that I could lose something in the
            case of accidental error. For these types of users, syncing gift
            cards to an account can provide a degree of comfort.
          </p>
        </div>
      </section>
    </motion.main>
  </>
);

export default BitPayExtensionWallet;
