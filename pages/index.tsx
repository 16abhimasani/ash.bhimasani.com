import React from "react";
import PostBox from "../components/post-box/post-box";

const Home: React.FC = () => (
  <div className="body">
    <h2>I'm Ash Bhimasani</h2>
    <div className="lead end-section">
      I am a product designer & software engineer with special interests in UX,
      growth hacking, and business strategy currently working
      <a
        className="link"
        href="https://bitpay.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        &nbsp;@bitpay
      </a>
      .
    </div>
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
      icon="http://ash.bhimasani.com/assets/images/ckLogo.svg"
      title="Appsketiers"
      caption="Director Of Development & UX"
      date="Aug 2017 ~ Aug 2018"
      link="/appsketiers"
    />
    <PostBox
      icon="/georgia-tech-seal.svg"
      title="Georgia Institute of Technology"
      caption="Computer Science: Artificial Intelligence & Media"
      date="Aug 2016"
      link="/ga-tech"
    />
  </div>
);

export default Home;
