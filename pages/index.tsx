import React from "react";
import { motion } from "framer-motion";
import { fadeInPage } from "../animations/page";
import Intro from "../components/sections/intro";
import Projects from "../components/sections/projects";
import Timeline from "../components/sections/timeline";

const Home: React.FC = () => (
  <motion.main className="body" {...fadeInPage}>
    <Intro />
    <Timeline />
    <Projects />
  </motion.main>
);

export default Home;
