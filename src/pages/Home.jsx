import React from "react";
import DesktopNavLinks from "../components/DesktopLinks";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import AboutMe from "../components/AboutMe";
import Skills from "../components/Skills";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <AboutMe />
      <Skills/>
    </div>
  );
};

export default Home;
