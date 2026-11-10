import React from "react";
import Intro from "../components/sections/intro";
import Projects from "../components/sections/projects";
import Timeline from "../components/sections/timeline";
import { selectedWork } from "../components/work/catalog";
import WorkRows from "../components/work/rows";
import Link from "../components/utils/link";

const Home: React.FC = () => (
  <main id="content" className="body">
    <Intro />
    <section aria-labelledby="work">
      <div className="section-head">
        <h2 className="label" id="work">
          Work
        </h2>
        <Link href="/work" className="section-head__more">
          All work
        </Link>
      </div>
      <WorkRows items={selectedWork} />
    </section>
    <Timeline />
    <Projects />
  </main>
);

export default Home;
