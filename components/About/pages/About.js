import React from "react";
import Hero from "../../shared/UIComponents/Hero";
import AboutSection from "../components/AboutSection";
import Milestones from "../components/Milestones";
import Costomers from "../components/Costomers";
import OurTeam from "../components/OurTeam";

const About = () => {
  return (
    <>
      <Hero />
      <AboutSection />
      <Milestones />
      <Costomers />
      <OurTeam />
    </>
  );
};

export default About;
