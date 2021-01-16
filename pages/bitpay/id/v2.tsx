import React from "react";
import { motion } from "framer-motion";
import { fadeInPage } from "../../../animations/page";
import SideBar from "../../../components/sidebar/sidebar";
import Anchor from "../../../components/utils/anchor";
import WideScreen from "../../../components/wide-screen/wide-screen";
import { BitPayHead } from "..";

const BitPayIDV2: React.FC = () => (
  <>
    {BitPayHead}
    <SideBar />
    <motion.main className="body" {...fadeInPage}>
      <section>
        <h1 className="begin-section pt-0">Onboarding V2</h1>
        <h5 className="end-section">A refreshed, consolidated design system</h5>
        <div className="begin-section end-section wrapper-center">
          <img src="/imgs/id/v2/cards/login-oauth.svg" />
        </div>
        <div className="lead begin-section mb-0 end-section">
          <p>
            In early 2019, I was wrapping up the
            <Anchor
              content="Directory"
              href="/bitpay/directory"
              spaceAfter
              spaceBefore
            />
            project and BitPay ID was just about to begin development work. The
            circumstances of this project left us on a extremely tight time
            frame to finalize requirements, create designs, and then build it
            all out.
          </p>
          <p>
            This project was also unique in its strategy for rollout. Instead of
            building out a full consumer dashboard experience, we opted to start
            small and only build the Authentication and Verification portion
            that could be dropped into our payment gateway (Invoice). This would
            allow us to meet our risk management for high value invoices while
            maintaining a minimally complex new system.
          </p>
        </div>
      </section>

      <section>
        <h2 className="begin-section">Sign In</h2>
        <h5 className="end-section">Single state login</h5>
        <WideScreen
          src={["/imgs/id/v2/login-oauth.svg", "/imgs/id/v2/login.svg"]}
          carousel
        />
        <div className="lead begin-section end-section">
          <p>
            Like I mentioned previously, this was the first time we would be
            trying a split state for Email and Password fields. The additional
            complexity here is doing it in way that prevents enumeration attacks
            without excessively utilizing reCAPTCHA.
          </p>
        </div>
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

      <section>
        <h2 className="begin-section">2-Step Verification</h2>
        <h5 className="end-section">Making security fun</h5>
        <WideScreen
          src={[
            "/imgs/id/v2/2fa-pin.svg",
            "/imgs/id/v2/2fa-email.svg",
            "/imgs/id/v2/2fa-backup.svg",
          ]}
          carousel
        />
        <div className="lead begin-section end-section">
          <p>
            Like I mentioned previously, this was the first time we would be
            trying a split state for Email and Password fields. The additional
            complexity here is doing it in way that prevents enumeration attacks
            without excessively utilizing reCAPTCHA.
          </p>
        </div>
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
      </section>

      <section>
        <h2 className="begin-section">Reset Password</h2>
        <h5 className="end-section">Simple actions & patterns</h5>
        <WideScreen
          src={[
            "/imgs/id/v2/recovery-link.svg",
            "/imgs/id/v2/reset-password.svg",
          ]}
          carousel
        />
        <div className="lead begin-section end-section">
          <p>
            Like I mentioned previously, this was the first time we would be
            trying a split state for Email and Password fields. The additional
            complexity here is doing it in way that prevents enumeration attacks
            without excessively utilizing reCAPTCHA.
          </p>
        </div>
      </section>

      <section>
        <h2 className="begin-section">Create an Account</h2>
        <h5 className="end-section">Consolidated forms optimized for speed</h5>
        <WideScreen
          src={[
            "/imgs/id/v2/register-type.svg",
            "/imgs/id/v2/register-personal.svg",
            "/imgs/id/v2/register-merchant.svg",
            "/imgs/id/v2/register-email-verify.svg",
            "/imgs/id/v2/register-errors.svg",
            "/imgs/id/v2/register-basic.svg",
          ]}
          carousel
        />
        <div className="lead begin-section end-section">
          <p>
            Obviously, the first part of any Authentication flow is the Account
            Creation flow. This would be utilized whenever a user visits our
            payment gateway when making a transaction over $3k USD.
          </p>
        </div>
        <div
          className="begin-section end-section col wrapper-center"
          style={{ overflow: "hidden" }}
        >
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
          <img src="/imgs/id/v2/cards/register-personal.svg" />
        </div>
      </section>

      <section>
        <h2 className="begin-section">Personal Info Verification</h2>
        <h5 className="end-section">Easy to fill forms</h5>
        <WideScreen
          src={[
            "/imgs/id/v2/verify-personal-us.svg",
            "/imgs/id/v2/verify-personal-int.svg",
            "/imgs/id/v2/verify-personal-na.svg",
            "/imgs/id/v2/verify-personal-error.svg",
          ]}
          carousel
        />
        <div className="lead begin-section end-section">
          <p>
            Like I mentioned previously, this was the first time we would be
            trying a split state for Email and Password fields. The additional
            complexity here is doing it in way that prevents enumeration attacks
            without excessively utilizing reCAPTCHA.
          </p>
        </div>
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
      </section>

      <section>
        <h2 className="begin-section">Address Verification</h2>
        <h5 className="end-section">Easy to fill forms</h5>
        <WideScreen
          src={[
            "/imgs/id/v2/verify-addr-us.svg",
            "/imgs/id/v2/verify-addr-int.svg",
          ]}
          carousel
        />
        <div className="lead begin-section end-section">
          <p>
            Like I mentioned previously, this was the first time we would be
            trying a split state for Email and Password fields. The additional
            complexity here is doing it in way that prevents enumeration attacks
            without excessively utilizing reCAPTCHA.
          </p>
        </div>
      </section>

      <section>
        <h2 className="begin-section">Document Verification</h2>
        <h5 className="end-section">Delightful awaiting states</h5>
        <WideScreen
          src={[
            "/imgs/id/v2/onfido-upload.jpg",
            "/imgs/id/v2/onfido-approval.jpg",
          ]}
          carousel
        />
        <div className="lead begin-section end-section">
          <p>
            Like I mentioned previously, this was the first time we would be
            trying a split state for Email and Password fields. The additional
            complexity here is doing it in way that prevents enumeration attacks
            without excessively utilizing reCAPTCHA.
          </p>
        </div>
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
      </section>

      <section>
        <h2 className="begin-section">Verification States</h2>
        <h5 className="end-section">Status notifications</h5>
        <WideScreen
          src={[
            "/imgs/id/v2/verify-good.svg",
            "/imgs/id/v2/verify-pending.svg",
            "/imgs/id/v2/verify-fail.svg",
          ]}
          carousel
        />
        <div className="lead begin-section end-section">
          <p>
            Like I mentioned previously, this was the first time we would be
            trying a split state for Email and Password fields. The additional
            complexity here is doing it in way that prevents enumeration attacks
            without excessively utilizing reCAPTCHA.
          </p>
        </div>
      </section>
    </motion.main>
  </>
);

export default BitPayIDV2;
