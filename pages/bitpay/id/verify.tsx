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
        The utility of this app at its simplest form is to simply alert the user
        if BitPay is available as a payment option. So we have 3 major pieces
        from this premise:
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
