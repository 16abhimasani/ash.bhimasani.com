import React from "react";
import HomeView from "../components/folio/home";
import { PageMeta } from "../components/seo-heads";
import { OG_ABOUT, SITE_TITLE } from "../utils/constants";

const description =
  "Ash Bhimasani is a product designer and software engineer in New York and Austin. Previously at Polymarket and Phantom. He builds his designs.";

const Home: React.FC = () => (
  <>
    <PageMeta
      title={SITE_TITLE}
      description={description}
      path="/"
      image={OG_ABOUT}
      imageAlt="Ash Bhimasani, product designer and software engineer"
    />
    <HomeView />
  </>
);

export default Home;
