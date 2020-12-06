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
        UX, growth hacking, and business strategy.
      </p>
      <p>
        Incoming intern
        <Anchor
          content="@coinbase"
          href="https://coinbase.com/"
          spaceBefore
        />. <br />
        Designer & engineer
        <Anchor content="@0x" href="https://0x.org/" spaceBefore />.
        <br />
        Ex designer & engineer
        <Anchor content="@bitpay" href="https://bitpay.com/" spaceBefore />.
        <br />
        Computer science student
        <Anchor
          content="@gatech"
          href="https://twitter.com/georgiatech"
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
