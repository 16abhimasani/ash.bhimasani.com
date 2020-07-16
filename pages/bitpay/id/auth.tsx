import React from "react";
import { motion } from "framer-motion";
import { fadeInPage } from "../../../animations/page";
import WideScreen from "../../../components/wide-screen/wide-screen";

const BitPayIDAuth: React.FC = () => (
  <motion.main className="body" {...fadeInPage}>
    <h1 className="begin-section pt-0">Log In & Sign Up Breakdown</h1>
    <h5 className="end-section">Modular, single-purpose states</h5>
    <WideScreen src="/imgs/id/desktop/auth/comp.png" />
    <div className="lead begin-section mb-0 end-section">
      <p>
        Here’s the desktop equivalent of the last 2 posts I made starting with
        Onboarding. More than a year ago, a lot of my attention was drawn to
        minimal interfaces. The wide whitespace and the centered grouping was an
        appealing idea; I wanted the fields in questions to be the main focal
        point of the whole experience.
      </p>
      <p>
        A large takeaway I think for form design and scalable interfaces in
        general is to assume you will probably need to scroll. As you can see
        here, we are pinning UI elements to corners and edges of the screen
        while centering all of our main content. Additionally, things not being
        in view when scrolling or typing seems to be an ever present problem
        that can be minimized by simply adding background and foreground.
      </p>
      <p>
        We have learned an incredible amount over the last year by listening to
        our user’s feedback. While people enjoyed looking at the minimum fields
        per step; they perceived the overall experience as longer. Simply
        optimizing for a browser’s autofill will do wonders to an experience (1
        click login / sign up seems pretty good 😎).
      </p>
    </div>

    <h2 className="begin-section">Create an Account</h2>
    <h5 className="end-section">A minimal, walkthrough-like experience</h5>
    <WideScreen
      src={[
        "/imgs/id/desktop/auth/enter-email.svg",
        "/imgs/id/desktop/auth/account-type.svg",
        "/imgs/id/desktop/auth/create-password.svg",
        "/imgs/id/desktop/auth/check-inbox.svg",
      ]}
      carousel
    />
    <div className="lead begin-section end-section">
      <p>
        The work to optimize the hop from crypto to store credit to redemption
        began several years ago in the BitPay Wallet where the emphasis was on
        in-app or in-store redemption.
      </p>
      <p>
        Now with a desktop browser extension, we had a chance to do something
        similar with directly integrated merchants.
      </p>
      <p>
        The Brand page for each supported site is the main entry point to the
        rest of the experience. In the collection above, you can see 3 types of
        directly integrated merchants:
      </p>
    </div>

    <h3 className="begin-section">Mobile</h3>
    <div className="d-flex">
      <img
        style={{ marginRight: 24 }}
        width="350"
        src="/imgs/id/mobile/auth/enter-email.png"
        alt="Mobile: Enter Email"
      />
      <img
        width="350"
        src="/imgs/id/mobile/auth/account-type.png"
        alt="Mobile: Account Selector"
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
        <span className="f-600">&nbsp;Payment Instructions</span> a first-class
        citizen. The details attempt to concisely describe how to find BitPay as
        a payment option on a given site without taking up too much space.
      </p>
    </div>
    <div className="d-flex">
      <img
        style={{ marginRight: 24 }}
        width="350"
        src="/imgs/id/mobile/auth/create-password.png"
        alt="Mobile: Enter Email"
      />
      <img
        width="350"
        src="/imgs/id/mobile/auth/check-inbox.png"
        alt="Mobile: Account Selector"
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
        <span className="f-600">&nbsp;Payment Instructions</span> a first-class
        citizen. The details attempt to concisely describe how to find BitPay as
        a payment option on a given site without taking up too much space.
      </p>
    </div>

    <h2 className="begin-section">Sign In</h2>
    <h5 className="end-section">A compact display of essential info</h5>
    <WideScreen
      src={[
        "/imgs/id/desktop/auth/enter-email.svg",
        "/imgs/id/desktop/auth/enter-password.svg",
        "/imgs/id/desktop/auth/enter-2fa.svg",
      ]}
      carousel
    />
    <div className="lead begin-section end-section">
      <p>
        The work to optimize the hop from crypto to store credit to redemption
        began several years ago in the BitPay Wallet where the emphasis was on
        in-app or in-store redemption.
      </p>
      <p>
        Now with a desktop browser extension, we had a chance to do something
        similar with directly integrated merchants.
      </p>
      <p>
        The Brand page for each supported site is the main entry point to the
        rest of the experience. In the collection above, you can see 3 types of
        directly integrated merchants:
      </p>
    </div>

    <h3 className="begin-section">Mobile</h3>
    <div className="d-flex">
      <img
        style={{ marginRight: 24 }}
        width="350"
        src="/imgs/id/mobile/auth/enter-password.png"
        alt="Mobile: Enter Email"
      />
      <img
        width="350"
        src="/imgs/id/mobile/auth/enter-2fa.png"
        alt="Mobile: Account Selector"
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
        <span className="f-600">&nbsp;Payment Instructions</span> a first-class
        citizen. The details attempt to concisely describe how to find BitPay as
        a payment option on a given site without taking up too much space.
      </p>
    </div>

    <h2 className="begin-section">Animation Examples</h2>
    <h5 className="end-section">The fun ones</h5>
    <WideScreen src="/vids/id/2fa-code-input.mp4" />
    <WideScreen src="/vids/id/check-inbox.mp4" />
  </motion.main>
);

export default BitPayIDAuth;
