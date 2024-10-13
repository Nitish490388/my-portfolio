import React from "react";
import DesktopNavLinks from "../components/DesktopLinks";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import AboutMe from "../components/AboutMe";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <AboutMe />
    </div>
  );
};

export default Home;
