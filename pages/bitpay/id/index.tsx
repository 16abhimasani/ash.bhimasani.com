import { motion } from "framer-motion";
import React from "react";
import { fadeInPage } from "../../../animations/page";
import PostBox from "../../../components/post-box/post-box";
import { BitPayHead } from "../../../components/seo-heads";
import SideBar from "../../../components/sidebar/sidebar";
import Anchor from "../../../components/utils/anchor";
import WideScreen from "../../../components/wide-screen/wide-screen";

const BitPayID: React.FC = () => (
  <>
    {BitPayHead}
    <SideBar />
    <motion.main className="body" {...fadeInPage}>
      <h1 className="begin-section pt-0">BitPay ID</h1>
      <h5 className="end-section">Consumer onboarding and verification</h5>
      <WideScreen src="/imgs/id/mobile/verify/address-iso.png" />
      <h3 className="begin-section" id="breakdown">
        UI Breakdown
      </h3>
      <PostBox
        icon="/logos/bitpay-id.svg"
        title="Version 2.0"
        caption="Full refresh to onboarding & verification"
        link="/bitpay/id/v2"
      />
      <PostBox
        icon="/logos/bitpay-id.svg"
        title="Log In &nbsp;/&nbsp; Sign Up"
        caption="Account creation & authentication"
        link="/bitpay/id/auth"
      />
      <PostBox
        icon="/logos/bitpay-id.svg"
        title="Identity Verification"
        caption="KYC / AML compliance & document upload"
        link="/bitpay/id/verify"
      />

      <h3 className="begin-section">Overview</h3>
      <div className="lead mb-0 end-section">
        <p>
          <Anchor
            content="BitPay ID"
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
      <div className="breakdown end-section">
        <div className="col">
          <hgroup>
            <h5>Role</h5>
            Lead Product Designer
          </hgroup>

          <hgroup>
            <h5>Team</h5>2 Developers
          </hgroup>
        </div>
        <div className="col">
          <hgroup>
            <h5>Scope</h5>Apr - Aug 2019
          </hgroup>

          <hgroup>
            <h5>What I did</h5>
            UX Research, Interface Design
          </hgroup>
        </div>
        <div className="col">
          <hgroup>
            <h5>Stack</h5>
            Angular + TS, Redux, Sketch, InVision
          </hgroup>
        </div>
      </div>
      <WideScreen src="/imgs/id/desktop/verify/mac-pro.jpg" />
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

      <section style={{ overflow: "hidden" }}>
        <h4 className="begin-section">V2 Sneak Peak</h4>
        <video
          className="end-section"
          width="100%"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/vids/id/v2/awaiting-approval.mp4" type="video/mp4" />
        </video>
        <video
          className="end-section"
          width="100%"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/vids/id/v2/personal-info.mp4" type="video/mp4" />
        </video>
        <video
          className="end-section"
          width="100.5%"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/vids/id/v2/sign-up.mp4" type="video/mp4" />
        </video>
        <video
          className="end-section"
          width="100%"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/vids/id/v2/2fa.mp4" type="video/mp4" />
        </video>
        <video
          className="end-section"
          width="100%"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/vids/id/v2/verify-email.mp4" type="video/mp4" />
        </video>
        <video
          className="end-section"
          width="100%"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/vids/id/v2/login.mp4" type="video/mp4" />
        </video>
      </section>
    </motion.main>
  </>
);

export default BitPayID;
