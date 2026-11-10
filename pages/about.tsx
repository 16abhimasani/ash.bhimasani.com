import React from "react";
import { WebsiteHead } from "../components/seo-heads";

const AboutMe: React.FC = () => (
  <main id="content" className="body">
    <WebsiteHead
      title="About — Ash Bhimasani"
      description="I am a product designer & software engineer interested in building experiences people love."
    />
    <h1 className="begin-section pt-0">Konnichi wa, I'm Ash &nbsp;👋🏼</h1>
    <div className="lead end-section">
      <p>
        I am a product designer & software engineer interested in building
        experiences people love.
      </p>
      <p>My hobbies include BJJ, watching movies, and imagining the future.</p>
    </div>
    <img
      className="end-section"
      width={1334}
      height={750}
      src="/imgs/baby-ash.jpeg"
      alt="Baby Ash"
      style={{ width: "100%", height: "auto" }}
    />
  </main>
);

export default AboutMe;
