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
            <p>I worked on the Money Movement team and the Identity & Onboarding team (Dec 2022 – April 2026).</p>
            <p>
              If you take a look at the product, it's really incredible to see
              how one app can redefine and propel an entire ecosystem. Phantom
              has been critical to Solana's growth and continues to support the
              network as it scales.
            </p>
            <p>
              <Anchor
                content="Phantom CASH"
                href="https://help.phantom.com/hc/en-us/articles/44799497237395-About-Phantom-Cash"
                newTab
              />
              &nbsp;is the wallet's first-party stablecoin — Bridge-issued, Stripe-onboarded, Apple Pay / Card / Bank funded. I led the integration end-to-end from partnership kickoff through public GA, with
              <Anchor
                content="live metrics on Dune"
                href="https://dune.com/phantom/cash"
                spaceBefore
                newTab
              />.
            </p>
          </div>
        </section>

        <section className="end-section">

          <h5 className="begin-section">Contributions</h5>
          <PostBox
            icon="/imgs/phantom/phantom-cash-brand/3%20CASH-AVATAR/SVG/CASH-AVATAR-CIRCLE.svg"
            title="Phantom CASH &mdash; Public GA"
            caption="Bridge stablecoin features go live to all users · Stripe-powered onboarding + native onramps & offramps"
            link="https://help.phantom.com/hc/en-us/articles/44799497237395-About-Phantom-Cash"
            date="Q1 2026"
          />
          <PostBox
            icon="/imgs/phantom/phantom-cash-brand/3%20CASH-AVATAR/SVG/CASH-AVATAR-CIRCLE.svg"
            title="Phantom CASH &mdash; Early Access"
            caption="Led Native Stripe KYC + Crypto Onramp from prototype to production launch · Bridge virtual accounts, ACH offramp, debit-card issuance"
            link="https://help.phantom.com/hc/en-us/articles/44799497237395-About-Phantom-Cash"
            date="Q3–Q4 2025"
          />
          <PostBox
            icon="/imgs/phantom/phantom-brand/Icons/Phantom-Icon_Circle.svg"
            title="Synced Settings"
            caption="Cross-device sync system (platform-agnostic storage wrapper + conflict resolution) unlocking Phantom's multi-platform vision"
            link=""
            date="Q2 2025"
          />
          <PostBox
            icon="/imgs/phantom/phantom-brand/Icons/Phantom-Icon_Circle.svg"
            title="Fiat Ramp Aggregator Revamp"
            caption="Rebuilt the entire aggregator UI for web + mobile in 2 weeks · deep-link handling, scalable patterns for future integrations"
            link="https://phantom.com/learn/blog/buying-crypto-in-phantom-just-got-faster-and-easier"
            date="Q2 2025"
          />
          <PostBox
            icon="/imgs/phantom/phantom-brand/Icons/Phantom-Icon_Circle.svg"
            title="Quick Claim Username"
            caption="Simplified username claim flow with platform-agnostic components · added sidebar-mode in Extension for a smoother post-onboarding experience"
            link=""
            date="Q1 2025"
          />
          <PostBox
            icon="/imgs/phantom/phantom-brand/Icons/Phantom-Icon_Circle.svg"
            title="Phantom Auth Management"
            caption="Manage User Profile: PrivacyState, PublicAddresses, LinkedWallets, AuthFactors · 100% design-system adoption, consolidated mobile/extension code"
            link="https://phantom.com/learn/blog/buying-crypto-in-phantom-just-got-faster-and-easier"
            date="Q4 2024"
          />
          <PostBox
            icon="/imgs/phantom/phantom-brand/Icons/Phantom-Icon_Circle.svg"
            title="Phantom Usernames"
            caption="Integrated Phantom Social onboarding into all surfaces"
            link="https://phantom.com/learn/blog/buying-crypto-in-phantom-just-got-faster-and-easier"
            date="Q3 2024"
          />
          <PostBox
            icon="/imgs/phantom/phantom-brand/Icons/Phantom-Icon_Circle.svg"
            title="Buy Crypto V2 &mdash; Meld Aggregator"
            caption="Fiat onramp scaled 0 → $134M peak monthly (Dec 2024), ~70% Solana · smarter quotes + default recommendations + global provider coverage"
            link="https://phantom.com/learn/blog/buying-crypto-in-phantom-just-got-faster-and-easier"
            date="Q2 2024"
          />
          <PostBox
            icon="/imgs/phantom/phantom-brand/Icons/Phantom-Icon_Circle.svg"
            title="Onboarding V2 + Wallet Hardening"
            caption="Expanded onboarding (PrivateKey + Ledger support) driving a 12% lift · SCrypt key-encryption upgrade · ForceUpgrade infra"
            link="https://phantom.com/learn/blog/phantom-acquires-bitski"
            date="Q1 2024"
          />
          <PostBox
            icon="/imgs/phantom/phantom-brand/Icons/Phantom-Icon_Circle.svg"
            title="Bitcoin & Ordinals"
            caption="Shipped full Ordinals stack: ChainSelector, AddressBook, Import/Export PrivateKey, AssetDetails, DepositFungible, BuyFungible"
            link="https://phantom.com/learn/blog/bitcoin-phantom"
            date="Q4 2023"
          />
          <PostBox
            icon="/imgs/phantom/phantom-brand/Icons/Phantom-Icon_Circle.svg"
            title="Settings V2"
            caption="Enhanced settings page for better discovery & user experience"
            link=""
            date="Q3 2023"
          />
          <PostBox
            icon="/imgs/phantom/phantom-brand/Icons/Phantom-Icon_Circle.svg"
            title="Action Banners"
            caption="Dynamic & personalized CTAs for onboarding, on-chain actions, & more · laid the CMS-targeting rails for the wallet"
            link=""
            date="Q2 2023"
          />
          <PostBox
            icon="/imgs/phantom/phantom-brand/Icons/Phantom-Icon_Circle.svg"
            title="Multi-Mnemonic"
            caption="Multi-seed import (MetaMask migration) across Extension + Mobile · ObfuscatedBytes refactor eliminating race conditions in cryptographic data handling"
            link="https://phantom.com/learn/blog/import-and-manage-multiple-wallets-with-phantom"
            date="Q1 2023"
          />
        </section>

        <section className="begin-section wrapper-center v-align col">
          <Tweet src="https://twitter.com/phantom/status/2047778104039682068" />
          <br />
          <br />
          <Tweet src="https://twitter.com/willums_/status/2042329476407730191" />
          <br />
          <br />
          <Tweet src="https://twitter.com/phantom/status/2047429213284860189" />
          <br />
          <br />
          <Tweet src="https://twitter.com/BChillman/status/2033913119756714298" />
          <br />
          <br />
          <Tweet src="https://twitter.com/Forbes/status/2025936375980474841" />
          <br />
          <br />
          <Tweet src="https://twitter.com/ShaneMac/status/2016221239510237255" />
          <br />
          <br />
          <Tweet src="https://twitter.com/krakenfx/status/2016151239487086767" />
          <br />
          <br />
          <Tweet src="https://twitter.com/phantom/status/1978934757410115885" />
          <br />
          <br />
          <Tweet src="https://twitter.com/phantom/status/1973742564139520464" />
          <br />
          <br />
          <Tweet src="https://twitter.com/phantom/status/1973035201950617617" />
          <br />
          <br />
          <Tweet src="https://twitter.com/toly/status/1973468830761623728" />
          <br />
          <br />
          <Tweet src="https://twitter.com/AriannaSimpson/status/1973096207397560633" />
          <br />
          <br />
          <Tweet src="https://twitter.com/BChillman/status/1973155549102723527" />
          <br />
          <br />
          <Tweet src="https://twitter.com/benhoneill/status/1973049072706588686" />
          <br />
          <br />
          <Tweet src="https://twitter.com/useCASH/status/1973035307139477561" />
          <br />
          <br />
          <Tweet src="https://twitter.com/kamino/status/1973055431690838141" />
          <br />
          <br />
          <Tweet src="https://twitter.com/phantom/status/1674513272115175424" />
          <br />
          <br />
          <Tweet src="https://twitter.com/phantom/status/1664311554039517189" />
          <br />
          <br />
          <Tweet src="https://twitter.com/phantom/status/1653030159245770752" />
          <br />
          <br />
          <Tweet src="https://twitter.com/phantom/status/1707419817345516012" />
          <br />
          <br />
          <Tweet src="https://twitter.com/phantom/status/1782471729928880340" />
        </section>
      </motion.main>
    </>
  );
};

export default Phantom;
