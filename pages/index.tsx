import React from "react";
import Anchor from "../components/utils/anchor";
import Timeline from "../components/sections/timeline";
import Projects from "../components/sections/projects";

const Home: React.FC = () => (
  <div className="body">
    <h2 className="begin-section pt-0">I'm Ash Bhimasani</h2>
    <div className="lead end-section">
      I am a product designer & software engineer with special interests in UX,
      growth hacking, and business strategy currently working
      <Anchor content="@bitpay" href="https://bitpay.com/" spaceBefore />.
    </div>

    <Timeline />

    <Projects />
  </div>
);

export default Home;
