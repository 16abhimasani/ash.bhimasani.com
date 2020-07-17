import React from "react";
import { motion } from "framer-motion";
import { fadeInPage } from "../../../animations/page";
import WideScreen from "../../../components/wide-screen/wide-screen";

const BitPayIDVerification: React.FC = () => (
  <motion.main className="body" {...fadeInPage}>
    <h1 className="begin-section pt-0">Verify Flow Breakdown</h1>
    <h5 className="end-section">
      Platform-wide interface for KYC / AML compliance
    </h5>
    <WideScreen src="/imgs/id/desktop/verify/comp.png" />
    <div className="lead begin-section mb-0 end-section">
      <p>
        Here is the Verification flow that allows users to receive and make
        payments over $3000. Verification for high value transactions is a
        critical step in growing our platform and servicing more users. While
        KYC is generally a huge friction point; it can still be made convenient.
      </p>
      <p>
        To create a benchmark, we first looked at Airbnb’s host onboarding.
        Airbnb focused on allowing users to complete the form in chunks with
        major parts grouped together and progress saved continuously. When
        manual input is required, saving state continuously seemed like the most
        significant upgrade you could give a form.
      </p>
      <p>
        While a vital feature, saving form state was substituted with
        pre-filling for initial launch. We were able to mitigate errors and
        time-to-completion by using Onfido’s ID upload to parse as much
        information as possible from a user’s ID and pre-fill the forms.
      </p>
    </div>

    <h2 className="begin-section">Basic Verification</h2>
    <h5 className="end-section">A compact display of essential info</h5>
    <WideScreen
      src={[
        "/imgs/id/desktop/verify/start-verify.svg",
        "/imgs/id/desktop/verify/personal-info.svg",
        "/imgs/id/desktop/verify/enter-address.svg",
      ]}
      carousel
    />
    <div className="lead begin-section end-section">
      <p>
        The work to optimize the hop from crypto to store credit to redemption
        began several years ago in the BitPay Wallet where the emphasis was on
        in-app or in-store redemption.
      </p>
    </div>

    <h3 className="begin-section">Mobile</h3>
    <div className="d-flex">
      <img
        style={{ marginRight: 24 }}
        width="350"
        height="100%"
        src="/imgs/id/mobile/verify/start-verify.png"
        alt="Mobile: Enter Email"
      />
      <img
        width="350"
        height="100%"
        src="/imgs/id/mobile/verify/personal-info.png"
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

    <h2 className="begin-section">Advanced Verification</h2>
    <h5 className="end-section">A compact display of essential info</h5>
    <WideScreen
      src={[
        "/imgs/id/desktop/verify/enter-ssn.svg",
        "/imgs/id/desktop/verify/awaiting-approval.png",
        "/imgs/id/desktop/verify/approved.svg",
      ]}
      carousel
    />
    <div className="lead begin-section end-section">
      <p>
        The work to optimize the hop from crypto to store credit to redemption
        began several years ago in the BitPay Wallet where the emphasis was on
        in-app or in-store redemption.
      </p>
    </div>

    <h3 className="begin-section">Mobile</h3>
    <div className="d-flex">
      <img
        style={{ marginRight: 24 }}
        width="350"
        height="100%"
        src="/imgs/id/mobile/verify/enter-address.png"
        alt="Mobile: Enter Email"
      />
      <img
        width="350"
        height="100%"
        src="/imgs/id/mobile/verify/enter-ssn.png"
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
        height="100%"
        src="/imgs/id/mobile/verify/awaiting-approval.png"
        alt="Mobile: Enter Email"
      />
      <img
        width="350"
        height="100%"
        src="/imgs/id/mobile/verify/approved.png"
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
  </motion.main>
);

export default BitPayIDVerification;
