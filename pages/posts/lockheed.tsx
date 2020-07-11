import React from "react";
import { motion } from "framer-motion";
import { fadeInPage } from "../../animations/page";
import Anchor from "../../components/utils/anchor";

const LockheedMartin: React.FC = () => (
  <motion.main className="body" {...fadeInPage}>
    <h2 className="begin-section pt-0">Lockheed Martin &nbsp;🛰</h2>
    <time>Nov 15 2015</time>
    <div className="lead begin-section">
      <p>
        Over the summer of 2015, I had the opportunity to intern at Lockheed
        Martin’s Space Systems division in King of Prussia. My internship
        coordinator and supervisor was Gregory Staszowski, a Systems Engineering
        Manager who was working directly on the
        <Anchor
          content="Air Force Reentry Program"
          href="https://news.lockheedmartin.com/2010-10-06-Lockheed-Martin-Receives-106-Million-Contract-for-Next-Generation-ICBM-Reentry-Field-Support-Equipment"
          spaceBefore
        />
        .
      </p>
      <img
        className="begin-section"
        width="100%"
        src="https://www.lockheedmartin.com/content/dam/lockheed-martin/space/photo/robotics/orex-robotics.jpg.pc-adaptive.full.medium.jpeg"
      />
      <p>
        During the time I was there, many of the projects discussed and
        presented during client meetings were of sensitive nature and very
        complicated so it was interesting witnessing the brainstorming process
        the engineering team went through to solve tough problems (tough being
        an understatement).
      </p>
      <p>
        I was also allowed to visit the engineers in every department and spend
        time shadowing them. One notable visit was touring the massive Thermal
        Vacuum Testing Chamber and talking with the Material Science engineers
        about what they do. Also, I had the chance to speak to some Computer
        Scientists there too and check out the ICBM trajectory calculations.
      </p>
      <p>
        The most amazing part of the experience was definitely witnessing the
        work being done on the Falcon Project by the engineering team. The
        Falcon team needed to design a communications system that was capable at
        Mach 20 which was a serious technical problem because bandwidth
        limitations and compressions issues are amplified at hypersonic speeds.
      </p>
      <p>
        The entire experience was very insightful and helped me understand the
        technical challenges that a massive engineering firm like Lockheed faces
        daily. Looking back, it was pretty cool to have been behind the scenes
        witnessing the development of future aircraft technology.
      </p>
    </div>
  </motion.main>
);

export default LockheedMartin;
