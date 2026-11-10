import React from "react";
import { WebsiteHead } from "../components/seo-heads";
import { caseStudies, openRoles, projects } from "../components/work/catalog";
import WorkRows from "../components/work/rows";
import { SITE_DESCRIPTION } from "../utils/constants";

const Work: React.FC = () => (
  <main id="content" className="body">
    <WebsiteHead title="Work — Ash Bhimasani" description={SITE_DESCRIPTION} />
    <header className="page-head">
      <h1>Work</h1>
      <p className="lead">{SITE_DESCRIPTION}</p>
    </header>
    <section aria-labelledby="case-studies">
      <h2 className="label" id="case-studies">
        Case studies
      </h2>
      <WorkRows items={caseStudies} />
    </section>
    <section aria-labelledby="projects">
      <h2 className="label" id="projects">
        Projects
      </h2>
      <WorkRows items={projects} />
    </section>
    <section aria-labelledby="open-roles">
      <h2 className="label" id="open-roles">
        Roles
      </h2>
      <WorkRows items={openRoles} />
    </section>
  </main>
);

export default Work;
