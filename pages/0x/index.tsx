import React from "react";
import PostBox from "../../components/post-box/post-box";
import { ZeroXHead } from "../../components/seo-heads";
import SideBar from "../../components/sidebar/sidebar";
import Anchor from "../../components/utils/anchor";
import Tweet from "../../components/utils/tweet";

const ZeroX: React.FC = () => {
  return (
    <>
      {ZeroXHead}
      <SideBar />
      <main id="content" className="body">
        <section className="end-section">
          <h1 className="begin-section pt-0">0x Labs &nbsp;🍵</h1>
          <div className="lead">
            <p>
              <Anchor content="0x" href="https://0x.org/" spaceAfter />
              is an liquidity aggregation API for decentralized exchange.
            </p>
            <p>
              The protocol is
              <Anchor
                content="governed"
                href="https://0x.org/zrx/staking"
                spaceBefore
                spaceAfter
              />
              by the
              <img
                style={{
                  marginLeft: 8,
                  width: 16,
                  transform: "translateY(1.5px)",
                }}
                src="icons/currencies/zrx.svg"
              />
              <Anchor
                content="ZRX token"
                href="https://www.coinbase.com/price/0x"
                spaceBefore
              />
              .
            </p>
            <p>
              To showcase the experience and redefine DEXs, the team launched
              their own trading platform in mid 2020.
            </p>
            <p>
              I worked on
              <Anchor
                content="matcha.xyz"
                href="https://matcha.xyz/"
                spaceBefore
                spaceAfter
              />
              ~
            </p>
          </div>
        </section>

        <section className="end-section">
          <h3 className="begin-section">Products</h3>
          <PostBox
            icon="/logos/matcha.png"
            title="Matcha &nbsp;🍵"
            caption="Decentralized crypto trading for the masses"
            link="https://matcha.xyz/"
            newTab
          />
          <div className="lead end-section">
            <p>
              If you take a look at the product, it's really incredible to see
              how far decentralized applications have come. This is what{" "}
              <Anchor
                content="DEXs looked like"
                href="https://files.gitter.im/etherdelta/etherdelta.github.io/V8n3/Screen-Shot-2017-12-16-at-9.59.59-AM.png"
                spaceBefore
                spaceAfter
              />
              when I first heard about them in 2017.
            </p>
          </div>

          <h5 className="begin-section">Contributions</h5>
          <PostBox
            icon="/imgs/matcha/onboarding/coinbase-matcha-avatar.png"
            title="Onboarding V2"
            caption="0-to-1 walkthrough into DeFi"
            link="/0x/matcha/onboard"
            date="Q1 2021"
          />
          <PostBox
            icon="/imgs/matcha/moolah/avatar.png"
            title="Matcha Moolah"
            caption="Referral contest giving away $50,000 in ETH"
            link="/0x/matcha/moolah"
            date="Dec 2020"
          />
        </section>

        <section className="begin-section wrapper-center v-align col">
          <Tweet src="https://twitter.com/0xProject/status/1278014784747659270" />
          <br />
          <br />
          <Tweet src="https://twitter.com/0xProject/status/1352752762740592641" />
          <br />
          <br />
          <Tweet src="https://twitter.com/BChillman/status/1354245209870098433" />
          <br />
          <br />
          <Tweet src="https://twitter.com/PanteraCapital/status/1357743064010289152" />
          <br />
          <br />
          <Tweet src="https://twitter.com/0xProject/status/1370484153251106817" />
          <br />
          <br />
          <Tweet src="https://twitter.com/0xProject/status/1372361470424489988" />
        </section>

        <section className="wrapper-center">
          <img
            className="theme-img theme-img--light"
            width={312}
            height={312}
            alt=""
            src="/imgs/matcha/0x-light.png"
          />
          <img
            className="theme-img theme-img--dark"
            width={312}
            height={312}
            alt=""
            src="/imgs/matcha/0x-dark.png"
          />
        </section>
      </main>
    </>
  );
};

export default ZeroX;
