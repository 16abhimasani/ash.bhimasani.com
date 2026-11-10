import React from "react";
import classes from "./folio.module.scss";

const AboutView: React.FC = () => (
  <main>
    <header className={classes.hero}>
      <p className={classes.kicker}>About</p>
      <h1 className={classes.pageTitle}>Konnichi wa, I&apos;m Ash</h1>
    </header>
    <div className={classes.prose}>
      <p>
        I am a product designer & software engineer interested in building
        experiences people love.
      </p>
      <p>My hobbies include BJJ, watching movies, and imagining the future.</p>
      <p>
        I live in New York, and also Austin. I studied computer science at
        Georgia Tech — artificial intelligence and human-computer interaction.
      </p>
    </div>
    <img
      className={classes.portrait}
      src="/imgs/baby-ash.jpeg"
      alt="Baby Ash"
      width={1334}
      height={750}
      loading="lazy"
      decoding="async"
    />
  </main>
);

export default AboutView;
