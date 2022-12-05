import { motion } from "framer-motion";
import React from "react";
import { fadeInPage } from "../../animations/page";
import Anchor from "../../components/utils/anchor";

const Photography: React.FC = () => (
  <motion.main className="body" {...fadeInPage}>
    <h1 className="begin-section pt-0">Photography &nbsp;🍬</h1>
    <div className="lead end-section">
      <p>
        Around the summer of 2016, I began experimenting with digital
        photography using a Canon EOS 7D. My interest began with a deep
        admiration of the works by Refn and Deakins. I wanted to see if I could
        channel some of this energy and discover my own ideas.
      </p>
      <p>
        Interestingly enough, some of these photos got considerable organic
        discovery on
        <Anchor
          content="instagram"
          href="https://www.instagram.com/ash_bhimasani/"
          color="pink"
          spaceBefore
        />
        .
      </p>
    </div>
    <a
      href="https://www.instagram.com/p/BK17oIRAkxZ/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        className="end-section"
        width="100%"
        src="/photography/cig.jpg"
        alt="Cig"
      />
    </a>
    <a
      href="https://www.instagram.com/p/BI-8qZVjteB/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        className="end-section"
        width="100%"
        src="/photography/mask.jpg"
        alt="Mask"
      />
    </a>
    <a
      href="https://www.instagram.com/p/BgwmN_hFAP3/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        className="end-section"
        width="100%"
        src="/photography/blood.png"
        alt="Blood"
      />
    </a>
    <a
      href="https://www.instagram.com/p/BIxIgutDLWp/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        className="end-section"
        width="100%"
        src="/photography/net.jpg"
        alt="Net"
      />
    </a>
    <a
      href="https://www.instagram.com/p/BInm8Puj5xk/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        className="end-section"
        width="100%"
        src="/photography/beads.jpg"
        alt="Beads"
      />
    </a>
  </motion.main>
);

export default Photography;
