import React from "react";
import Anchor from "../utils/anchor";

const Intro: React.FC = () => (
  <section className="end-section">
    <h2 className="begin-section pt-0">I'm Ash Bhimasani</h2>
    <div className="lead">
      <p>product designer & software engineer</p>
      <p>
        currently
        <Anchor
          content="@phantom"
          href="https://twitter.com/phantom"
          spaceBefore
        />
        <br />
        prev
        <Anchor
          content="@prrfbeauty"
          href="https://twitter.com/prrfbeauty"
          spaceBefore
          spaceAfter
        />
        |
        <Anchor
          content="@coinbase"
          href="https://twitter.com/coinbase"
          spaceBefore
          spaceAfter
        />
        |
        <Anchor
          content="@0xProject"
          href="https://twitter.com/0xProject"
          spaceBefore
          spaceAfter
        />
        {/* <span className="hide-mobile">
          /
          <Anchor
            content="@matchaxyz"
            href="https://twitter.com/matchaxyz"
            spaceBefore
            spaceAfter
          />
        </span> */}
        |
        <Anchor
          content="@bitpay"
          href="https://twitter.com/BitPay"
          spaceBefore
        />
      </p>
    </div>
  </section>
);

export default Intro;
