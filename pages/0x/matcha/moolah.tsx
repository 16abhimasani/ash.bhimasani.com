import React from "react";
import { motion } from "framer-motion";
import { fadeInPage } from "../../../animations/page";
import Anchor from "../../../components/utils/anchor";
import Tweet from "../../../components/utils/tweet";
import WideScreen from "../../../components/wide-screen/wide-screen";
import SideBar from "../../../components/sidebar/sidebar";
import { MatchaHead } from "../../../components/seo-heads";

const MatchaMoolah: React.FC = () => (
  <>
    {MatchaHead}
    <SideBar />
    <motion.main className="body" {...fadeInPage}>
      <section>
        <h2 className="begin-section pt-0">Matcha Moolah</h2>
        <time>UI Engineering</time>
        <img
          className="begin-section"
          width="100%"
          src="/imgs/matcha/moolah/banner-3.png"
          alt="Moolah Banner"
        />
        <div className="lead begin-section end-section">
          <p>
            In order to further promote Matcha and get existing DEX users to
            switch over, the team designed a
            <Anchor
              content="Referral Contest"
              href="https://matcha.xyz/blog/refer-your-friends-and-win-eth"
              spaceBefore
              spaceAfter
            />
            with up to <span className="f-600">$50,000 in ETH</span> being given
            away.
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
              content="matcha.xyz/moolah"
              href="https://matcha.xyz/moolah"
              spaceBefore
            />
          </p>
        </div>
      </section>

      <section>
        <WideScreen
          src={[
            "/imgs/matcha/moolah/home-banner.png",
            "/imgs/matcha/moolah/leaderboard.png",
            "/imgs/matcha/moolah/twitter-card.png",
            "/imgs/matcha/moolah/referral.png",
          ]}
          carousel
        />
      </section>

      <section className="begin-section wrapper-center v-align col">
        <Tweet src="https://twitter.com/matchaxyz/status/1346253769282002944" />
        <br />
        <br />
        <Tweet src="https://twitter.com/matchaxyz/status/1360358206841626624" />
      </section>
    </motion.main>
  </>
);

export default MatchaMoolah;
