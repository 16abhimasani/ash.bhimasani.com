import React from "react";
import {
  experience,
  featuredProjects,
  otherProjects,
  writing,
} from "../../content/portfolio";
import classes from "./folio.module.scss";
import Section from "./section";

const HomeView: React.FC = () => (
  <main>
    <header className={classes.hero}>
      <h1 className={classes.title}>Ash Bhimasani</h1>
      <p className={classes.lede}>product designer & software engineer</p>
      <p className={classes.tag}>I build my designs.</p>
      <dl className={classes.facts}>
        <div>
          <dt>Now</dt>
          <dd>
            Composable exchange infrastructure
            <span className={classes.factNote}>Onchain money-movement SDK</span>
          </dd>
        </div>
        <div>
          <dt>Previously</dt>
          <dd>
            <a
              href="https://polymarket.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Polymarket
            </a>
            {" and "}
            <a href="/phantom">Phantom</a>
          </dd>
        </div>
        <div>
          <dt>Based</dt>
          <dd>New York and Austin</dd>
        </div>
        <div>
          <dt>Education</dt>
          <dd>
            <a
              href="https://www.gatech.edu/about/rankings#:~:text=Computer%20Science%20ranks%20%231%20by,Guardian's%20QS%20World%20University%20Rankings."
              target="_blank"
              rel="noopener noreferrer"
            >
              Georgia Tech, CS — AI & HCI
            </a>
          </dd>
        </div>
      </dl>
    </header>

    <Section id="work" title="Selected work" items={featuredProjects} />
    <Section id="experience" title="Experience" items={experience} />
    <Section id="writing" title="Writing" items={writing} />
    <Section id="also" title="Also" items={otherProjects} />
  </main>
);

export default HomeView;
