import React from "react";
import Timeline from "../components/sections/timeline";
import Projects from "../components/sections/projects";

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

    <Timeline />

    <Projects />
  </div>
);

export default Home;
