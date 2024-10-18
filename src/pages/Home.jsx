import React from "react";
import DesktopNavLinks from "../components/DesktopLinks";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import AboutMe from "../components/AboutMe";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <AboutMe />
      <Skills/>
      <Projects/>
      <Contact/>
    </div>
  );
};

export default Home;
