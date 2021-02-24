import React from "react";
import PostBox from "../post-box/post-box";

const Timeline: React.FC = () => (
  <section className="begin-section end-section">
    <h3 id="timeline">Timeline</h3>
    <PostBox
      icon="/logos/pob.svg"
      title="Proof of Beauty"
      caption="Co-Founder"
      date="2021"
      link="https://twitter.com/prrfbeauty"
      newTab
    />
    <PostBox
      icon="https://bitpay.com/img/wallet-logos/coinbase.svg"
      title="Coinbase"
      caption="Software Engineer"
      date="Summer 2021"
      link="https://www.coinbase.com/"
      newTab
    />
    <PostBox
      icon="/logos/0x.svg"
      title="0x Labs"
      caption="Software Engineer & Product Designer"
      date="Spring 2021"
      link="/0x"
    />
    <PostBox
      icon="https://bitpay.com/img/wallet-logos/bitpay-wallet.svg"
      title="BitPay"
      caption="Software Engineer & Lead Product Designer"
      date="2018 ~ 2020"
      link="/bitpay"
    />
    <PostBox
      icon="/logos/appsketiers.png"
      title="Appsketiers"
      caption="Director of Development & UX"
      date="2017 ~ 2018"
      link="/posts/appsketiers"
    />
    <PostBox
      icon="/logos/georgia-tech.svg"
      title="Georgia Institute of Technology"
      caption="Computer Science: Artificial Intelligence & HCI"
      date="2016 ~ 2022"
      link="https://www.gatech.edu/about/rankings#:~:text=Computer%20Science%20ranks%20%231%20by,Guardian's%20QS%20World%20University%20Rankings."
      newTab
    />
    <PostBox
      icon="/logos/drexel.png"
      title="Drexel ExCITe Center"
      caption="Music & Entertainment Technology Lab"
      date="Summer 2015"
      link="/posts/drexel"
    />
    <PostBox
      icon="/logos/lockheed-martin.svg"
      title="Lockheed Martin Space Systems"
      caption="Engineering Department"
      date="Summer 2015"
      link="/posts/lockheed"
    />
    <PostBox
      icon="/logos/dasd-stem.png"
      title="Downingtown STEM Academy"
      caption="IB Diploma: Engineering Pathway"
      date="2012 ~ 2016"
      link="https://en.wikipedia.org/wiki/Downingtown_STEM_Academy"
      newTab
    />
  </section>
);

export default Timeline;
