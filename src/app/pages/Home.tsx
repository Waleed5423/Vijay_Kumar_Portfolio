import React from "react";
import AboutUs from "../components/AboutUs";
import BugHunterGame from "../components/BugHunter";
import ContactSection from "../components/ContactSection";
import Experience from "../components/Experience";
import Hero from "../components/Hero";
import Workflow from "../components/Workflow";
import Project2Section from "../components/Project2Section";
import SkillsSection from "../components/SkillsSection";
import Testimonials from "../components/Testimonials";

const Home = () => {
  return (
    <main>
      <Hero />
      <SkillsSection />
      <AboutUs />
      <Experience />
      <Project2Section />
      <Workflow />
      {/* <Testimonials /> */}
      <BugHunterGame />
      <ContactSection />
    </main>
  );
};

export default Home;
