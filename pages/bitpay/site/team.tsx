import React from "react";
import { motion } from "framer-motion";
import { fadeInPage } from "../../../animations/page";
import Anchor from "../../../components/utils/anchor";
import SideBar from "../../../components/sidebar/sidebar";
import WideScreen from "../../../components/wide-screen/wide-screen";

const BitPayTeamSite: React.FC = () => (
  <>
    <SideBar />
    <motion.main className="body" {...fadeInPage}>
      <h1 className="begin-section pt-0">BitPay Careers Page</h1>
      <h5 className="end-section">
        <Anchor
          content="bitpay.com/careers"
          href="https://bitpay.com/careers"
          spaceBefore
          spaceAfter
          bold
        />
      </h5>
      <WideScreen src="/imgs/site/careers-page.svg" />
      <div className="lead begin-section end-section">
        <p>
          This page was definitely one of the more fun pages to design on the
          site. In terms of content, I had minimal demands (Benefits, Open
          Positions); so I could have a lot of fun playing with structure and
          commission contained illustrations by
          <Anchor
            content="Anna Sylvester"
            href="https://dribbble.com/sylvesteracat"
            spaceBefore
          />
          .
        </p>
      </div>

      <h3 className="begin-section">Careers Page V1 (2013)</h3>
      <h5 className="end-section">BitPay's original careers page</h5>
      <WideScreen src="/imgs/site/old/careers-page.png" />
      <div className="lead begin-section end-section">
        <p>
          Using this original page as reference, a critical part of the task was
          updating the page to reflect a modern brand. I personally like emojis
          a lot so this was a good excuse to throw some in there.
        </p>
      </div>
    </motion.main>
  </>
);

export default BitPayTeamSite;
