import React, { useContext } from "react";
import { motion } from "framer-motion";
import { ThemeContext } from "../_app";
import { fadeInPage } from "../../animations/page";
import Anchor from "../../components/utils/anchor";
import PostBox from "../../components/post-box/post-box";
import Tweet from "../../components/utils/tweet";
import SideBar from "../../components/sidebar/sidebar";
import { POBHead } from "../../components/seo-heads";

const POB: React.FC = () => {
  const theme = useContext(ThemeContext);
  return (
    <>
      {POBHead}
      <SideBar />
      <motion.main className="body" {...fadeInPage}>
        <section className="end-section">
          <h1 className="begin-section pt-0">Proof of Beauty &nbsp;💄</h1>
          <div className="lead">
            <p>
              We are a{" "}
              <Anchor
                content="digital experience studio"
                href="https://pob.studio/projects"
                spaceBefore
              />
              .
            </p>
            <p>
              Our first project archives Ethereum's units of history
              (transactions) with generative art.
            </p>
            <p>
              <Anchor
                content="opensea"
                href="https://opensea.io/collection/proof-of-beauty"
                spaceBefore
                spaceAfter
              />
              |
              <Anchor
                content="twitter"
                href="https://twitter.com/prrfbeauty"
                spaceBefore
                spaceAfter
              />
              |
              <Anchor
                content="pob.mirror.xyz"
                href="https://pob.mirror.xyz"
                spaceBefore
                spaceAfter
              />
              |
              <Anchor
                content="pob.studio"
                href="https://www.pob.studio"
                spaceBefore
              />
            </p>
          </div>
        </section>

        <section className="end-section">
          <h3 className="begin-section">Projects</h3>
          <PostBox
            icon="/logos/pob.svg"
            title="$HASH &nbsp;#️⃣"
            caption="1 ETH TX = 1 NFT / Powered by on-chain metadata"
            link="https://hash.pob.studio/"
            date="2021"
            newTab
          />
          <h5 className="begin-section">Releases</h5>
          <PostBox
            icon="/logos/pob.svg"
            title="S1: SAGA"
            caption="Your history | Only 10,312 will exist"
            link="https://hash.pob.studio/"
            date="Summer 2021"
            newTab
          />
          <PostBox
            icon="/logos/pob.svg"
            title="S0: GENESIS"
            caption="Our history | Only 2,555 will exist"
            link="https://hash.pob.studio/"
            date="Q1 2021"
            newTab
          />
        </section>

        <section className="begin-section wrapper-center v-align col">
          <Tweet src="https://twitter.com/prrfbeauty/status/1403061251748532227" />
          <br />
          <br />
          <Tweet src="https://twitter.com/prrfbeauty/status/1386713061332078593" />
          <br />
          <br />
          <Tweet src="https://twitter.com/rainbowdotme/status/1395810218731261959" />
          <br />
          <br />
          <Tweet src="https://twitter.com/prrfbeauty/status/1395172586330460162" />
          <br />
          <br />
          <Tweet src="https://twitter.com/viamirror/status/1395160909300084742" />
          <br />
          <br />
          <Tweet src="https://twitter.com/deanna_mosca/status/1392134299445436422" />
          <br />
          <br />
          <Tweet src="https://twitter.com/prrfbeauty/status/1388153968703025153" />
          <br />
          <br />
          <Tweet src="https://twitter.com/timrix/status/1386737614191947776" />
          <br />
          <br />
          <Tweet src="https://twitter.com/prrfbeauty/status/1366424062503882761" />
          <br />
          <br />
          <Tweet src="https://twitter.com/timrix/status/1365006217018400770" />
          <br />
          <br />
          <Tweet src="https://twitter.com/timrix/status/1364996681025024004" />
          <br />
          <br />
          <Tweet src="https://twitter.com/prrfbeauty/status/1376555470169772042" />
          <br />
          <br />
          <Tweet src="https://twitter.com/prrfbeauty/status/1379111650104647685" />
          <br />
          <br />
        </section>

        <img
          width="100%"
          src={`/banners/pob-${theme.dark ? "dark" : "light"}.jpg`}
        />
      </motion.main>
    </>
  );
};

export default POB;
