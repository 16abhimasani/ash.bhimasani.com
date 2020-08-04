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
          <Anchor
            content="BitPay Invoice"
            href="https://bitpay.com/id/verify?dest=fromWebsite"
            spaceAfter
            bold
          />
          was a major initiative that we launched in the summer of 2019. Up
          until then, we had a fully segmented account system. Businesses got
          business accounts and debit card users got card accounts. With BitPay
          ID, we wanted to consolidate and pave the way for an immersive
          consumer ecosystem. To do this, we needed a brand new onboarding
          system that funneled users accordingly and incorporated KYC when
          applicable.
        </p>
        <p>
          This was an extremely challenging and fun project that served as my
          first real confrontation with the balance of aesthetics and
          experience. At inception, the idea was to create a bare-bones, minimal
          login flow with single-purpose states. We were confident that by
          isolating users by their email, we could conveniently funnel users
          based on their status.
        </p>
      </div>
      <WideScreen src="/imgs/invoice/pay/universal-mode-desktop.jpg" />
      <div className="lead begin-section">
        <p>
          Stylistically, there were some key restraints: we wanted to definitely
          use a Material theme to stay consistent with the input fields in our
          Wallet; additionally I generally avoided graphics or illustrations to
          reduce dependencies. Avoiding graphics ended up being the right call
          for this iteration however, I believe flat material inputs are not
          well suited to a desktop experience; on mobile they feel great (like
          writing on lined paper).
        </p>
        <p>
          There was 1 distinct disadvantage to the single-purpose style that was
          not immediately obvious; we changed the optimal clicks for login from
          1 to 2 (assuming password manager in use). In retrospect, this style
          of login works best when managing multiple accounts (ex. Google).
          Looking forward, key lessons here is to keep things predictable. Forms
          don’t need to be smart; they just need to work. Version 2 will be a
          full design upgrade that addresses all usability issues.
        </p>
      </div>
    </motion.main>
  </>
);

export default BitPayInvoice;
