import React from "react";
import AboutView from "../components/folio/about";
import { PageMeta } from "../components/seo-heads";

const About: React.FC = () => (
  <>
    <PageMeta
      title="About — Ash Bhimasani"
      description="Ash Bhimasani is a product designer and software engineer interested in building experiences people love. BJJ, movies, and imagining the future."
      path="/about"
      image="/og/about.png"
      imageAlt="About Ash Bhimasani"
    />
    <AboutView />
  </>
);

export default About;
