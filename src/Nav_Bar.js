import React, { useState } from "react";
import "./Nav_Bar.css";
import Logo from "./Logo";

const Nav_Bar = (props) => {
  return (
    <div className="navbar">
      <Logo />
      <div className="nav-links">
        <a>Home</a>

        <a>
          About <span>Me</span>
        </a>

        <a>Projects</a>

        <a>Contact</a>

        
      </div>
    </div>
  );
};
export default Nav_Bar;
