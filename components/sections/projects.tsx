import React from "react";
import PostBox from "../post-box/post-box";

const Projects: React.FC = () => (
  <section>
    <h3 className="begin-section">Projects</h3>
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
