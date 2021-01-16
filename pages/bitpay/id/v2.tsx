import React from "react";
import { motion } from "framer-motion";
import { fadeInPage } from "../../../animations/page";
import SideBar from "../../../components/sidebar/sidebar";
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
            Almost immediately after we launched BitPay ID, I got to work
            designing the next version, making sure to solve all the issues
            along the way. At first, I definitely like Material flat inputs but
            quickly realized that they are best suited for small containers or
            ideally for mobile. Encapsulated input fields are easier to skim,
            interact fit, and build patterns around.
          </p>
          <p>
            Here we can immediately see the clear benefit of an entire input's
            logic living inside a boxed capsulation. The "Forgot password"
            helper action is easily accessible and can handle error messaging.
          </p>
          <p>
            The card layout is also naturally extensible; here I added OAuth
            login options underneath the main body while retaining an elegant
            structure.
          </p>
        </div>
      </section>

      <section className="end-section">
        <h2 className="begin-section">Sign In</h2>
        <h5 className="end-section">Single state login</h5>
        <WideScreen
          src={["/imgs/id/v2/login-oauth.svg", "/imgs/id/v2/login.svg"]}
          carousel
        />
        <div className="lead begin-section end-section">
          <p>
            We created two huge issues for ourselves when we split the Email and
            Password fields into 2 separate states. To prevent email validation
            attacks, we had to employ strict reCAPTCHA. Normals users would
            encounter this and be forced into a brutal Login experience. Also,
            the split caused credential auto-filling to work less than ideal.
          </p>
          <p>
            The easy solution was to consolidate the forms; now no need for
            reCAPTCHA and browser auto-fill transforms the form into a 1-click
            experience.
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

      <section className="end-section">
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
            The two-step verification states were pretty straightforward,
            however I was determined to keep the V2 design system extremely
            simple with as few components as possible. Thus, I use the
            "optional" Header in the Auth flow to indicate state and status. The
            pending spinner adds to the feeling that the form is waiting for the
            user to take an action before we reach the finish line.
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

      <section className="end-section">
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
            Here we see an example of the sticky notification footer inspired by
            Adobe XD. I wanted to use an unconventional style for global
            notifications that was responsive but elegant. The tight grouping of
            the page aids the user's focus while remaining balanced with the
            screen. Any additional helper actions can be appended to the bottom
            of the card for simplicity.
          </p>
        </div>
      </section>

      <section className="end-section">
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
            Probably the coolest part of these new forms is the split-input. It
            was a bit tricky to build but when I got it working, the
            concatenation on blur just felt right. Here, I'm doing much of the
            same, focusing entirely on consolidation. A big reason for the
            split-input was to save 2-3 rows (first, middle, and last name).
          </p>
          <p>
            Nice thing about encapsulated inputs is that it makes it real easy
            to show error states, here I'm having fun with the colors to
            indicate password strength.
          </p>
        </div>
        <div
          className="end-section col wrapper-center"
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

      <section className="end-section">
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
            The consolidation with this form was quite an improvement over the
            original. Much less overwhelming and the split-input makes the
            experience fun.
          </p>
          <p>
            Also, date pickers served as an endless source of confusion and bugs
            so I decided to simplify things with a dropdown. Errorless and the
            order can be obviously switched based on locality.
          </p>
          <p>
            The flag icons by the country also adds a nice level of polish and
            makes the whole thing feel just a bit more personalized.
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
            Much of the same but here I focused on optimizing for browser
            autofill. I absolutely hate typing in addresses so its important to
            me that any Address form supports auto-fill entirely.
          </p>
          <p>
            On a technical note, Address forms really made us realize how hard
            it is to deal with international address formats. Ultimately, the
            best experience is actually freeform fields.
          </p>
        </div>
      </section>

      <section className="end-section">
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
            Here are the Onfido awaiting states that we use when verifying a
            user's ID. This pulse animation was inspired by Mollie, but I later
            heavily reuse this pattern in Invoice V4.
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
            Finally we have the End states of the verification process. Pretty
            straightforward, but this time I wanted the messaging to be much
            more obvious by encapsulating all the content.
          </p>
        </div>
      </section>
    </motion.main>
  </>
);

export default BitPayIDV2;
