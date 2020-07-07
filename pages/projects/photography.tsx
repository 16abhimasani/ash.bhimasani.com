import React from "react";

const Photography: React.FC = () => (
  <div className="body">
    <h1>Photography &nbsp;🍬</h1>
    <div className="lead end-section">
      Around the summer of 2016, I began experimenting with digital photography
      using a Canon EOS 7D. My interest began with a deep admiration of the
      works by Refn and Deakins. I wanted to see if I could channel some of this
      energy and discover my own ideas.
      <br />
      <br />
      Interestingly enough, some of these photos got considerable organic
      discovery on
      <a
        className="link link--pink"
        href="https://www.instagram.com/ash_bhimasani/"
        target="_blank"
        rel="noopener noreferrer"
      >
        &nbsp;instagram
      </a>
      .
    </div>

    <img className="end-section" width="100%" src="/photography/cig.jpg" />
    <img className="end-section" width="100%" src="/photography/mask.jpg" />
    <img className="end-section" width="100%" src="/photography/blood.png" />
    <img className="end-section" width="100%" src="/photography/net.jpg" />
    <img className="end-section" width="100%" src="/photography/beads.jpg" />
  </div>
);

export default Photography;
