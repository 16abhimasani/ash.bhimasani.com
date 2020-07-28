import React from "react";
import { motion } from "framer-motion";
import { fadeInPage } from "../../animations/page";
import Anchor from "../../components/utils/anchor";
import SideBar from "../../components/sidebar/sidebar";
import WideScreen from "../../components/wide-screen/wide-screen";

const BitPayHelpDesk: React.FC = () => (
  <>
    <SideBar />
    <motion.main className="body" {...fadeInPage}>
      <h1 className="begin-section pt-0">BitPay Help Wizard</h1>
      <h5 className="end-section">A streamlined customer service platform</h5>
      <WideScreen
        src={[
          "/imgs/support/home.svg",
          "/imgs/support/step-1.svg",
          "/imgs/support/step-2.svg",
          "/imgs/support/help-article.svg",
          "/imgs/support/forms-empty.svg",
          "/imgs/support/forms-full.svg",
        ]}
        carousel
      />
      <div className="lead begin-section end-section">
        <p>
          The BitPay
          <Anchor
            content="Support Desk"
            href="https://bitpay.com/request-help/wizard"
            spaceBefore
            spaceAfter
            bold
          />
          was actually my very first full design at the company. As part of my
          internship project over the summer of 2018, I was tasked with
          rebuilding the Support Desk from scratch in the latest Angular version
          (original was built in 1). Previously just a dropdown and a form, the
          idea for the new version was to guide the user and attempt to help
          them if possible while reducing tickets.
        </p>
        <p>
          Looking back from 2020, it is definitely fun to see the progress and
          reflect on how many mistakes I made. I am very grateful I had the
          chance to design and build this; it was a huge learning opportunity
          that helped me grow into the style I have today.
        </p>
        <p>
          This was definitely not the best idea in retrospect; we basically
          elongated the process of creating a support ticket. We are working
          towards another full upgrade to our Support Desk so I am pretty
          excited to see what we come up with.
        </p>
      </div>
    </motion.main>
  </>
);

export default BitPayHelpDesk;
