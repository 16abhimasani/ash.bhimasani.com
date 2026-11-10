import { motion } from "framer-motion";
import React from "react";
import { fadeInPage } from "../../animations/page";
import PostBox from "../../components/post-box/post-box";
import { PolymarketHead } from "../../components/seo-heads";
import SideBar from "../../components/sidebar/sidebar";
import Anchor from "../../components/utils/anchor";

const Polymarket: React.FC = () => {
  return (
    <>
      {PolymarketHead}
      <SideBar />
      <motion.main className="body" {...fadeInPage}>
        <section className="end-section">
          <h1 className="begin-section pt-0">Polymarket</h1>
          <div className="lead">
            <p>
              <Anchor
                content="Polymarket US"
                href="https://polymarket.us/"
                spaceAfter
                newTab
              />
              is the CFTC-regulated US exchange. I worked on launching the web
              app. It opened in beta in August 2026, and I use it every day.
            </p>
            <p>
              Accounts and funding were my scope (July 2026 ~): sign-up,
              sign-in, and moving money in and out.
            </p>
          </div>
        </section>

        <section className="end-section">
          <h5 className="begin-section">Contributions</h5>
          <PostBox
            icon="/logos/polymarket.svg"
            title="PayPal & Venmo on the web"
            caption="Deposit and withdraw with PayPal and Venmo on polymarket.us"
            link="https://docs.polymarket.us/learn/deposits/deposit-methods/overview"
            date="Oct 2026"
            newTab
          />
          <PostBox
            icon="/logos/polymarket.svg"
            title="Web sign-up polish"
            caption="Phone-code step, code autofill, resend cooldown, focus and error states"
            link="https://docs.polymarket.us/learn/get-started/signup"
            date="Aug–Oct 2026"
            newTab
          />
        </section>
      </motion.main>
    </>
  );
};

export default Polymarket;
