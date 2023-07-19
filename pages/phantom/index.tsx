import { motion } from "framer-motion";
import React from "react";
import { fadeInPage } from "../../animations/page";
import PostBox from "../../components/post-box/post-box";
import { PhantomHead } from "../../components/seo-heads";
import SideBar from "../../components/sidebar/sidebar";
import Anchor from "../../components/utils/anchor";
import Tweet from "../../components/utils/tweet";

const Phantom: React.FC = () => {
  return (
    <>
      {PhantomHead}
      <SideBar />
      <motion.main className="body" {...fadeInPage}>
        <section className="end-section">
          <h1 className="begin-section pt-0">Phantom &nbsp;👻</h1>
          <div className="lead">
            <p>
              <Anchor
                content="Phantom"
                href="https://phantom.app/"
                spaceAfter
              />
              is a friendly, multichain crypto wallet for Solana, Ethereum,
              Polygon, (& more).
            </p>
            <p>
              Phantom raised $109M at a $1.2 billion valuation in January 2022
              for their Series B via Andreessen Horowitz, Paradigm, & more.
            </p>
            <p>I work on the Identity & Onboarding team.</p>
          </div>
        </section>

        <section className="end-section">
          <h3 className="begin-section">Products</h3>
          <PostBox
            icon="/logos/phantom.svg"
            title="Phantom &nbsp;👻"
            caption="Multichain Self-Custody"
            link="https://phantom.app/"
            newTab
          />
          <div className="lead end-section">
            <p>
              If you take a look at the product, it's really incredible to see
              how one app can redefine and propel an entire ecosystem. Phantom
              has been critical to Solana's growth and continues to support the
              network as it scales.
            </p>
          </div>

          <h5 className="begin-section">Contributions</h5>
          {/* <PostBox
            icon="/imgs/phantom/phantom-badge.png"
            title="Onboarding V2"
            caption="Enhanced onboarding flow for new & existing web3 users"
            link=""
            date="Q4 2023"
            locked
          />
          <PostBox
            icon="/imgs/phantom/phantom-badge.png"
            title="Wallet Skins"
            caption="True black mode, customizable themes, & more"
            link=""
            date="Q4 2023"
            locked
          />
          <PostBox
            icon="/imgs/phantom/phantom-badge.png"
            title="Bitcoin & Ordinals Support"
            caption="Enhanced settings page for better discovery & user experience"
            link=""
            date="Q3 2023"
            locked
          />
          <PostBox
            icon="/imgs/phantom/phantom-badge.png"
            title="Settings V2"
            caption="Enhanced settings page for better discovery & user experience"
            link=""
            date="Q3 2023"
            locked
          /> */}
          <PostBox
            icon="/imgs/phantom/phantom-badge.png"
            title="Banners & Interstitials"
            caption="Dynamic & personalized CTAs for onboarding, on-chain actions, & more"
            link=""
            date="Q2 2023"
          />
          <PostBox
            icon="/imgs/phantom/phantom-badge.png"
            title="Import Multiple Seeds"
            caption="Import & upgrade your mnemonic from wallets like MetaMask"
            link=""
            date="Q1 2023"
          />
        </section>

        <section className="begin-section wrapper-center v-align col">
          <Tweet src="https://twitter.com/phantom/status/1674513272115175424" />
          <br />
          <br />
          <Tweet src="https://twitter.com/phantom/status/1664311554039517189" />
        </section>
      </motion.main>
    </>
  );
};

export default Phantom;
