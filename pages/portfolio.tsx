import React from "react";
import WorkIndex from "../components/folio/work-index";
import { PageMeta } from "../components/seo-heads";

const Portfolio: React.FC = () => (
  <>
    <PageMeta
      title="Work — Ash Bhimasani"
      description="Case studies and projects by Ash Bhimasani, including Phantom, BitPay, Matcha, and Proof of Beauty."
      path="/portfolio"
      image="/og/work.png"
      imageAlt="Work by Ash Bhimasani"
    />
    <WorkIndex />
  </>
);

export default Portfolio;
