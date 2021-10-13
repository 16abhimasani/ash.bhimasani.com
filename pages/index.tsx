import React from "react";
import { motion } from "framer-motion";
import { fadeInPage } from "../animations/page";
import Anchor from "../components/utils/anchor";
import Timeline from "../components/sections/timeline";
import Projects from "../components/sections/projects";

const Home: React.FC = () => (
  <motion.main className="body" {...fadeInPage}>
    <h2 className="begin-section pt-0">I'm Ash Bhimasani</h2>
    <div className="lead end-section">
      <p>product designer & software engineer</p>
      <p>
        co-creator
        <Anchor
          content="@prrfbeauty"
          href="https://twitter.com/prrfbeauty"
          spaceBefore
        />
        <br />
        prev
        <Anchor
          content="@coinbase"
          href="https://twitter.com/coinbase"
          spaceBefore
          spaceAfter
        />
        |
        <Anchor
          content="@0xProject"
          href="https://twitter.com/0xProject"
          spaceBefore
          spaceAfter
        />
        |
        <Anchor
          content="@bitpay"
          href="https://twitter.com/BitPay"
          spaceBefore
        />
      </p>
    </div>

    <Timeline />

    <Projects />
  </motion.main>
);

export default Home;
