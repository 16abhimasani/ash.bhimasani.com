import React from "react";
import { motion } from "framer-motion";
import { fadeInPage } from "../../../animations/page";
import Anchor from "../../../components/utils/anchor";
import Tweet from "../../../components/utils/tweet";
import WideScreen from "../../../components/wide-screen/wide-screen";

const MatchaMoolah: React.FC = () => (
  <motion.main className="body" {...fadeInPage}>
    <h2 className="begin-section pt-0">Matcha Moolah</h2>
    <time>UI Engineering</time>
    <img
      className="begin-section"
      width="100%"
      src="/imgs/matcha/moolah/banner.jpg"
      alt="Moolah Banner"
    />
    <div className="lead begin-section">
      <p>
        In order to further promote Matcha and get existing DEX users to switch
        over, the team designed a
        <Anchor
          content="Referral Contest"
          href="https://matcha.xyz/blog/refer-your-friends-and-win-eth"
          spaceBefore
          spaceAfter
        />
        with up to <span className="f-600">$50,000 in ETH</span> being given
        away.
      </p>
      <p>
        This beautiful design is by
        <Anchor
          content="Patryk Adas"
          href="https://patrykadas.com/"
          spaceBefore
        />
        .
      </p>
    </div>
    <WideScreen
      src={[
        "/imgs/matcha/moolah/home-banner.png",
        "/imgs/matcha/moolah/leaderboard.png",
        "/imgs/matcha/moolah/twitter-card.png",
        "/imgs/matcha/moolah/referral.png",
      ]}
      carousel
    />
    <div className="begin-section wrapper-center">
      <Tweet>
        <p lang="en" dir="ltr">
          Today we’re launching
          <a href="https://twitter.com/hashtag/MatchaMoolah?src=hash&amp;ref_src=twsrc%5Etfw">
            #MatchaMoolah
          </a>
          to ring in the New Year! 🎉
          <br />
          <br />
          Between now and the Chinese New Year (2/12)🧧...
          <br />
          <br />
          1⃣ Sign up:
          <a href="https://t.co/tlB43WEN5M">https://t.co/tlB43WEN5M</a>
          <br />
          2⃣ Share your link
          <br />
          3⃣ Track your place for over $50K in prizes on the public leaderboard
          <br />
          <br />
          Good luck! 🍵🙏
          <a href="https://t.co/JZfYDdZFFu">pic.twitter.com/JZfYDdZFFu</a>
        </p>
        &mdash; Matcha 🍵 (@matchaxyz)
        <a href="https://twitter.com/matchaxyz/status/1346253769282002944?ref_src=twsrc%5Etfw">
          January 5, 2021
        </a>
      </Tweet>
    </div>
  </motion.main>
);

export default MatchaMoolah;
