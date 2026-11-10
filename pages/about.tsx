import { motion } from "framer-motion";
import React from "react";
import { fadeInPage } from "../animations/page";
import Anchor from "../components/utils/anchor";

const AboutMe: React.FC = () => (
  <motion.main className="body" {...fadeInPage}>
    <h2 className="begin-section pt-0">Konnichi wa, I'm Ash &nbsp;👋🏼</h2>
    <div className="lead end-section">
      <p>
        I am a product designer & software engineer in NYC. I design and build
        payments, wallets, and trading infrastructure, and I ship the interfaces
        myself.
      </p>
      <p>
        I am authoring an onchain money-movement SDK: KYC orchestration with
        consent-based replay, plugin-based provider and rails, and agent-native
        settlement (MPP / x402).
      </p>
      <p>
        I studied computer science at Georgia Tech, in artificial intelligence
        and human-computer interaction.
      </p>
      <p>My hobbies include BJJ, watching movies, and imagining the future.</p>
      <p>
        <Anchor content="Resume" href="/Ash_Bhimasani_Resume_2026_HTML.pdf" />
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
