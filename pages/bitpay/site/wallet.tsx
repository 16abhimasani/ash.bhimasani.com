import { motion } from "framer-motion";
import React from "react";
import { fadeInPage } from "../../../animations/page";
import { BitPayHead } from "../../../components/seo-heads";
import SideBar from "../../../components/sidebar/sidebar";
import Anchor from "../../../components/utils/anchor";
import WideScreen from "../../../components/wide-screen/wide-screen";

const BitPayWalletSite: React.FC = () => (
  <>
    {BitPayHead}
    <SideBar />
    <motion.main className="body" {...fadeInPage}>
      <h1 className="begin-section pt-0">BitPay App Page</h1>
      <h5 className="end-section">
        <Anchor
          content="bitpay.com/wallet"
          href="https://bitpay.com/wallet"
          spaceBefore
          spaceAfter
          bold
        />
      </h5>
      <div className="breakdown end-section">
        <div className="col">
          <hgroup>
            <h5>Role</h5>
            Designer & Developer
          </hgroup>

          <hgroup>
            <h5>Team</h5>1 Developer
          </hgroup>
        </div>
        <div className="col">
          <hgroup>
            <h5>Scope</h5>Jan - Feb 2019
          </hgroup>

          <hgroup>
            <h5>What I did</h5>
            Web Design & Dev, Content, Branding
          </hgroup>
        </div>
        <div className="col">
          <hgroup>
            <h5>Stack</h5>
            Vue, Adobe XD
          </hgroup>
        </div>
      </div>
      <WideScreen src="/imgs/site/wallet-page.png" />
      <div className="lead begin-section end-section">
        <p>
          The Wallet page was definitely the most challenging page to create.
          Cryptocurrency wallets are already a non-intuitive concept so my focus
          was on figuring out simple ways to communicate the core ideas.
          Additionally, highlighting the unique features of our Wallet (gift
          cards and multi-sig) was a high priority.
        </p>
      </div>

      <h3 className="begin-section">Mobile App Page V1 (2013)</h3>
      <h5 className="end-section">BitPay's original mobile wallet page</h5>
      <WideScreen src="/imgs/site/old/wallet-page.png" />
      <div className="lead begin-section end-section">
        <p>
          As you can see here, the original design of the wallet page was very
          simple and opted to highlight the core states (Transaction View, Send
          Payment, etc). With the new page, the focus was instead shifted to the
          gift card purchasing capability because it transform the wallet into
          something that can be used in-store.
        </p>
        <p>
          Another key distinction was my choice to emphasize the open-source
          nature of the wallet. I think open source projects will be greatly
          appreciated as crypto adoption increases and users search for the
          safest way to store their funds.
        </p>
      </div>
    </motion.main>
  </>
);

export default BitPayWalletSite;
