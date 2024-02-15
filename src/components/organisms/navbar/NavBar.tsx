import "./NavBar.css";
import React from "react";

// REACT ICONS IMPORT
// import { GiMeal } from "react-icons/gi";

// REACT ROUTER

const NavBar = () => {
  return (
    <div className="NavBar">
      <div className="LOGO">
        {/* <GiMeal size={40} /> */}
        <span>
          Food<span className="bagde">Gallery</span>
        </span>
      </div>
      <div className="nav-links">
        <p>inspired by Ethos</p>
      </div>
    </div>
  );
};

export default NavBar;
