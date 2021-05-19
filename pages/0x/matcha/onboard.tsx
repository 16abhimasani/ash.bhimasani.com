import React from "react";
import { motion } from "framer-motion";
import { fadeInPage } from "../../../animations/page";
import Anchor from "../../../components/utils/anchor";
import WideScreen from "../../../components/wide-screen/wide-screen";
import SideBar from "../../../components/sidebar/sidebar";
import { MatchaHead } from "../../../components/seo-heads";

const MatchaOnboard: React.FC = () => (
  <>
    {MatchaHead}
    <SideBar />
    <motion.main className="body" {...fadeInPage}>
      <h2 className="begin-section pt-0">Matcha Onboarding V2</h2>
      <time>UI Engineering</time>
      <img
        className="begin-section"
        width="100%"
        src="/banners/hello-matcha.png"
        alt="Moolah Banner"
      />
      <h3 className="begin-section">Mission:</h3>
      <div className="lead end-section">
        <p>
          It’s critical that we design the best possible onboarding experience
          for anybody who is interested in entering the DeFi space. If last year
          is any indication, millions of new users will enter the space and we
          need to be the go-to-place for them to get up and running. Whether our
          new users are coming from Uniswap, a Centralized Exchange, or they’re
          brand new, we should guide them through the steps required to make
          their first trade on Matcha.
        </p>
        <p>
          This beautiful design is by
          <Anchor
            content="Patryk Adas"
            href="https://twitter.com/patrykadas"
            spaceBefore
          />
          .
        </p>
        <p>
          <Anchor
            content="matcha.xyz/onboard/start"
            href="https://matcha.xyz/onboard/start"
            spaceBefore
          />
        </p>
      </div>

      <section className="begin-section">
        <h2 className="begin-section">Get Started</h2>
        <h5 className="end-section">A walkthrough into self custody</h5>
        <WideScreen src="/imgs/matcha/onboarding/start.png" />
      </section>

      <section className="begin-section">
        <h2 className="begin-section">Direct linking</h2>
        <h5 className="end-section">Exchange specific landing pages</h5>
        <WideScreen
          src={[
            "/imgs/matcha/onboarding/exchange-coinbase.png",
            "/imgs/matcha/onboarding/exchange-gemini.png",
            "/imgs/matcha/onboarding/exchange-binance.png",
          ]}
          carousel
        />
        <div className="lead begin-section">
          <p>
            <Anchor
              content="matcha.xyz/onboard/exchange"
              href="https://matcha.xyz/onboard/exchange?exchange=gemini"
              spaceBefore
            />
          </p>
        </div>
      </section>

      <section className="begin-section">
        <h2 className="begin-section">Select Wallet</h2>
        <h5 className="end-section">Leveraging familiar brands and flows</h5>
        <WideScreen
          src={[
            "/imgs/matcha/onboarding/select-coinbase.png",
            "/imgs/matcha/onboarding/select-argent.png",
            "/imgs/matcha/onboarding/select-trust.png",
            "/imgs/matcha/onboarding/select-generic.png",
          ]}
          carousel
        />
      </section>

      <section className="begin-section">
        <h2 className="begin-section">Download Wallet</h2>
        <h5 className="end-section">Guiding you through setup</h5>
        <WideScreen
          src={[
            "/imgs/matcha/onboarding/download-coinbase.png",
            "/imgs/matcha/onboarding/download-argent.png",
            "/imgs/matcha/onboarding/download-trust.png",
            "/imgs/matcha/onboarding/download-metamask.png",
          ]}
          carousel
        />
        <div className="lead begin-section end-section">
          <p>
            Here you can really clearly see I was able to plug and play the
            <Anchor
              content="Pretty QRs"
              href="https://github.com/16abhimasani/pretty-qr-code"
              spaceBefore
              spaceAfter
            />
            from BitPay, originally developed by
            <Anchor
              content="Jason Dreyzehner"
              href="https://twitter.com/bitjson"
              spaceBefore
            />
            . They are quite remarkable looking and you can animate them as long
            as you have some way to detect scan. In this case we can add an
            animation when the user connects their wallet and then smoothly
            animate to the next state.
          </p>
        </div>
      </section>

      <section className="begin-section">
        <h2 className="begin-section">Connect Wallet</h2>
        <h5 className="end-section">Pairing made intuitive & native</h5>
        <WideScreen
          src={[
            "/imgs/matcha/onboarding/connect-coinbase.png",
            "/imgs/matcha/onboarding/connect-argent.png",
            "/imgs/matcha/onboarding/connect-trust.png",
            "/imgs/matcha/onboarding/connect-metamask.png",
          ]}
          carousel
        />
      </section>

      <section className="begin-section">
        <h2 className="begin-section">Wallet Connected</h2>
        <h5 className="end-section">Starting the next phase</h5>
        <WideScreen
          src={[
            "/imgs/matcha/onboarding/connected-coinbase.png",
            "/imgs/matcha/onboarding/connected-argent.png",
            "/imgs/matcha/onboarding/connected-trust.png",
            "/imgs/matcha/onboarding/connected-metamask.png",
          ]}
          carousel
        />
      </section>

      <img
        className="begin-section"
        width="100%"
        src="/banners/matcha-3.png"
        alt="Matcha Banner"
      />
    </motion.main>
  </>
);

export default MatchaOnboard;
