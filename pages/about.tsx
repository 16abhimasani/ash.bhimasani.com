import React from "react";
import { motion } from "framer-motion";
import { fadeInPage } from "../animations/page";
import Anchor from "../components/utils/anchor";

const AboutMe: React.FC = () => (
  <motion.main className="body" {...fadeInPage}>
    <h2 className="begin-section pt-0">Konnichi wa, I'm Ash &nbsp;👋🏼</h2>
    <div className="lead end-section">
      <p>
        I am a product designer & software engineer with special interests in
        UX, growth hacking, and business strategy.
      </p>
      <p>
        I love Brazilian Jiu Jitsu, watching movies, and imagining the future.
      </p>
    </div>
    <img
      className="end-section"
      width="100%"
      src="/imgs/baby-ash.jpeg"
      alt="Baby Ash"
    />
  </motion.main>
);

export default AboutMe;
