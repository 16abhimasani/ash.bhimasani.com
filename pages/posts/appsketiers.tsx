import React from "react";
import { motion } from "framer-motion";
import { fadeInPage } from "../../animations/page";
import Anchor from "../../components/utils/anchor";

const Appsketiers: React.FC = () => (
  <motion.main className="body" {...fadeInPage}>
    <h2 className="begin-section pt-0">Appsketiers &nbsp;⚔️</h2>
    <time>Director of Development & UX</time>
    <div className="lead begin-section">
      <p>
        During the very beginning of my sophomore year at Georgia Tech (Fall
        2017), I was able to meet a couple guys starting a boutique mobile
        development shop. I joined on as one of Appsketier's only UX designer,
        working with clients to mold their ideas into a usable experience.
      </p>
      <p>
        As we got further along as a company, the role eventually transformed
        into full development pipeline management. Each app needed to be built
        and shipped within a tight time frame so I was responsible for
        communicating with and managing the output of our offshore development
        team in India.
      </p>
      <p>
        The role was a lot of fun and incredibly demanding; personally managing
        clients on the phone was challenging but also incredibly insightful. The
        high volume of designs I churned out molded me into the fast designer I
        am today. Finally, communicating an engineering workflow and feature
        requirements to a team in an another country was difficult but granted
        me extremely valuable experience in leadership and management.
      </p>
      <p>I eventually left Appsketiers as I decided to focus more on BitPay.</p>
    </div>
  </motion.main>
);

export default Appsketiers;
