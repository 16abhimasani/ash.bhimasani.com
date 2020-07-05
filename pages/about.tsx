import React from "react";

const AboutMe: React.FC = () => (
  <div className="body">
    <h2>Konnichi wa, I'm Ash 👋🏼</h2>
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
    <img className="end-section" width="100%" src="/baby-ash.jpeg" />
  </div>
);

export default AboutMe;
