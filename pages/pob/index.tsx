import React from "react";
import { motion } from "framer-motion";
import { fadeInPage } from "../../animations/page";
import Anchor from "../../components/utils/anchor";
import PostBox from "../../components/post-box/post-box";
import SideBar from "../../components/sidebar/sidebar";
import { POBHead } from "../../components/seo-heads";

const POB: React.FC = () => {
  return (
    <>
      {POBHead}
      <SideBar />
      <motion.main className="body" {...fadeInPage}>
        <section className="end-section">
          <h1 className="begin-section pt-0">Proof of Beauty &nbsp;💄</h1>
          <div className="lead">
            <p>
              We are an{" "}
              <Anchor
                content="experimental web3 / nft / token studio"
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
              Our second project celebrates the London network upgrade (EIP
              1559) with a social currency, generative art mementos, and a DAO.
            </p>
            <p>
              Our third project is a short series of experiments that explore
              NFT and smart contract standards.
            </p>
            <p>
              <Anchor
                content="twitter"
                href="https://twitter.com/prrfbeauty"
                spaceBefore
                spaceAfter
              />
              |
              <Anchor
                content="discord"
                href="https://discord.gg/pob"
                spaceBefore
                spaceAfter
              />
              |
              <Anchor
                content="opensea"
                href="https://app.singlelink.co/u/pob"
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
            title="PUBLICO &nbsp;🎹"
            caption="Anthology series of crypto-art installations"
            link="https://publico.pob.studio/"
            date="Fall 2021"
            newTab
          />
          <PostBox
            icon="/logos/pob.svg"
            title="LONDON &nbsp;🏙🌙💃🏻"
            caption="Celebrating EIP 1559"
            link="https://london.pob.studio/"
            date="Summer 2021"
            newTab
          />
          <PostBox
            icon="/logos/pob.svg"
            title="HASH &nbsp;#️⃣"
            caption="1 ETH TX = 1 NFT / Powered by on-chain metadata"
            link="https://hash.pob.studio/"
            date="2021"
            newTab
          />
          <h5 className="begin-section">Releases</h5>
          <PostBox
            icon="/logos/pob.svg"
            title="PUBLICO Open Piano"
            caption="Enjoy the performance"
            link="https://publico.pob.studio/piano"
            date="Oct 8 2021"
            newTab
          />
          <PostBox
            icon="/logos/pob.svg"
            title="LONDON Gift Shoppe"
            caption="8888 generative art mementos"
            link="https://london.pob.studio/shoppe"
            date="Aug 5 2021"
            newTab
          />
          <PostBox
            icon="/logos/pob.svg"
            title="HASH S1 SAGA"
            caption="Your history | Only 10,312 will exist"
            link="https://hash.pob.studio/"
            date="Summer 2021"
            newTab
          />
          <PostBox
            icon="/logos/pob.svg"
            title="HASH S0 GENESIS"
            caption="Our history | Only 2,555 will exist"
            link="https://hash.pob.studio/"
            date="Q1 2021"
            newTab
          />
        </section>
      </motion.main>
    </>
  );
};

export default POB;
