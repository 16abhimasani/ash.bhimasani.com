import React from "react";
import Anchor from "../utils/anchor";

const Intro: React.FC = () => (
  <header className="intro">
    <h1>Ash Bhimasani</h1>
    <p className="intro__role">product designer & software engineer</p>
    <p className="intro__meta">NYC</p>
    <p className="intro__lead">
      I am a product designer & software engineer interested in building
      experiences people love.
    </p>
    <p className="intro__line">
      product
      <Anchor
        content="@polymarket"
        href="https://twitter.com/Polymarket"
        spaceBefore
      />
    </p>
    <p className="intro__line">
      prev
      <Anchor
        content="@phantom"
        href="https://twitter.com/phantom"
        spaceBefore
        spaceAfter
      />
      |
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
      |
      <Anchor content="@bitpay" href="https://twitter.com/BitPay" spaceBefore />
    </p>
  </header>
);

export default Intro;
