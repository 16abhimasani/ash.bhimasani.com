import React from "react";
import PostBox from "../post-box/post-box";

const Projects: React.FC = () => (
  <section>
    <h3>Projects &nbsp;/&nbsp; Portfolio</h3>
    <PostBox
      icon="/logos/dribbble.svg"
      title="Product Design"
      caption="My design highlights on Dribbble"
      link="https://dribbble.com/ash-bhimasani"
      newTab
    />
    <PostBox
      icon="/logos/github.svg"
      title="Open Source"
      caption="My public contributions on GitHub"
      link="https://github.com/16abhimasani"
      newTab
    />
    <PostBox
      icon="/logos/instagram.svg"
      title="Photography"
      caption="Experimenting with digital photography"
      link="/projects/photography"
    />
    <PostBox
      icon="/logos/cycle3d.svg"
      title="Cycle 3D"
      caption="Open source 3D printing project to recycle plastics"
      date="2015 ~ 2016"
      link="/projects/cycle-3d"
    />
  </section>
);

export default Projects;
