import React from "react";
import PostBox from "../post-box/post-box";

const Timeline: React.FC = () => (
  <>
    <h3 className="begin-section" id="timeline">
      Timeline
    </h3>
    <PostBox
      icon="https://bitpay.com/img/wallet-logos/bitpay-wallet.svg"
      title="BitPay"
      caption="Product Designer & Frontend Engineer"
      date="Aug 2018 ~ Present"
      link="/bitpay"
    />
    <PostBox
      icon="/logos/appsketiers.png"
      title="Appsketiers"
      caption="Director of Development & UX"
      date="Aug 2017 ~ Aug 2018"
      link="/appsketiers"
    />
    <PostBox
      icon="/logos/georgia-tech.svg"
      title="Georgia Institute of Technology"
      caption="Computer Science: Artificial Intelligence & Media"
      date="2016 ~ 2019"
      link="/posts/gatech"
    />
    <PostBox
      icon="/logos/drexel.png"
      title="Drexel ExCITe Center"
      caption="Music & Entertainment Technology Lab Intern"
      date="Summer 2015"
      link="/posts/drexel"
    />
    <PostBox
      icon="/logos/lockheed-martin.svg"
      title="Lockheed Martin Space Systems"
      caption="Engineering Department Intern"
      date="Summer 2015"
      link="/posts/lockheed"
    />
    <PostBox
      icon="/logos/dasd-stem.jpg"
      title="Downingtown STEM Academy"
      caption="IB Diploma: Engineering Pathway"
      date="2012 ~ 2016"
      link="https://en.wikipedia.org/wiki/Downingtown_STEM_Academy"
      newTab
    />
  </>
);

export default Timeline;
