
import { Link } from "react-router-dom";
import React, { useState } from 'react';
import LogoLink from "./LogoLink"
import DesktopNavLinks from "./DesktopLinks";
import MobileDrawer from "./MobileDrawer";
import MobileMenuButton from "./MobileMenuButton";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faBars } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const handleDrawerToggle = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };
  return (
    <>

      <div className="hidden relative py-3 sm:flex flex-col justify-center mx-8">
        <LogoLink />
        <DesktopNavLinks />
      </div>
      <div className="sm:hidden relative flex flex-row m-2 ">
        <LogoLink />
        <MobileMenuButton onClick={handleDrawerToggle} />
        <MobileDrawer isOpen={isDrawerOpen} onClose={handleDrawerToggle} />
      </div>
    </>
  );
};

export default Navbar;
