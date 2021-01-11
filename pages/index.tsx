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
      <p>
        I am a product designer & software engineer with special interests in
        user experience, growth, and strategy.
      </p>
      <p>
        {/* Incoming
        <Anchor
          content="@coinbase"
          href="https://twitter.com/coinbase"
          spaceBefore
        />
        . <br /> */}
        Designer & engineer
        <Anchor
          content="@0x"
          href="https://twitter.com/0xProject"
          spaceBefore
        />
        .
        <br />
        Ex designer & engineer
        <Anchor
          content="@bitpay"
          href="https://twitter.com/BitPay"
          spaceBefore
        />
        .
        <br />
        Computer science student
        <Anchor
          content="@gatech"
          href="https://twitter.com/gtcomputing"
          spaceBefore
        />
        .
      </p>
    </div>

    <Timeline />

    <Projects />
  </motion.main>
);

export default Home;
