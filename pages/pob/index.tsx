import { motion } from "framer-motion";
import React from "react";
import { fadeInPage } from "../../animations/page";
import PostBox from "../../components/post-box/post-box";
import { POBHead } from "../../components/seo-heads";
import SideBar from "../../components/sidebar/sidebar";
import Anchor from "../../components/utils/anchor";

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
            icon="/imgs/pob/merge-vfx-1.svg"
            title="EPICS // MERGE  &nbsp;⚡️"
            caption="Advanced on-chain generative pixel art"
            link="https://merge.pob.studio/"
            date="Summer 2022"
            newTab
          />
          <PostBox
            icon="https://www.abf.dev/assets/logo-round.svg"
            title="Absolute Brain F**k  &nbsp;🧠"
            caption="On-chain rendering codepen. The future of NFT metadata architecture"
            link="https://abf.dev/app"
            date="2022"
            newTab
          />
          <PostBox
            icon="https://hash.pob.studio/assets/logos/hash.png"
            title="HASH &nbsp;#️⃣"
            caption="1 ETH TX = 1 NFT / Powered by on-chain metadata"
            link="https://hash.pob.studio/"
            date="2021 / 2022"
            newTab
          />
          <PostBox
            icon="/logos/london.png"
            title="LONDON &nbsp;🏙🌙💃🏻"
            caption="Celebrating EIP-1559"
            link="https://opensea.io/collection/london-gift-v2"
            date="Summer 2021"
            newTab
          />
          <PostBox
            icon="/logos/pob.svg"
            title="SHOP &nbsp;🛍️"
            caption="Homebrewed web3 print service / ecommerce site"
            link="https://shop.pob.studio/"
            date="Winter 2021"
            newTab
          />
          <PostBox
            icon="/logos/pob.svg"
            title="PUBLICO &nbsp;🎹"
            caption="Anthology series of crypto-art installations"
            link="https://publico.pob.studio/"
            date="Fall 2021"
            newTab
          />

          <h5 className="begin-section">Releases</h5>
          <PostBox
            icon="https://hash.pob.studio/assets/logos/hash.png"
            title="HASH S2 HUNT"
            caption="Happy hunting | 888 supply"
            link="https://hash.pob.studio"
            date="Spring 2022"
            newTab
          />
          <PostBox
            icon="/logos/london-embers.png"
            title="London Embers"
            caption="The party never ends | 2000+ minted"
            link="https://publico.pob.studio/piano"
            date="Winter 2021"
            newTab
          />
          <PostBox
            icon="/logos/pob.svg"
            title="Public Piano"
            caption="Enjoy the performance | 64 supply"
            link="https://publico.pob.studio/piano"
            date="Fall 2021"
            newTab
          />
          <PostBox
            icon="/logos/london-gifts.png"
            title="London Gift"
            caption="Ultra sound mementos | 8888 supply"
            link="https://london.pob.studio/shoppe"
            date="Summer 2021"
            newTab
          />
          <PostBox
            icon="/logos/pob.svg"
            title="HASH S1 SAGA"
            caption="Your history | 4037 minted"
            link="https://hash.pob.studio/"
            date="Summer 2021"
            newTab
          />
          <PostBox
            icon="/logos/pob.svg"
            title="HASH S0 GENESIS"
            caption="Our history | 2,555 supply"
            link="https://hash.pob.studio/"
            date="Spring 2021"
            newTab
          />
        </section>
      </motion.main>
    </>
  );
};

export default POB;
