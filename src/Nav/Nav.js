import React, { useState, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";

const Nav = () => {
  // const [greeting, setGreeting] = useState("Hello World");
  // useEffect(() => {});

  const navStyle = {
    color: "white",
    textDecoration: "none"
  };

  return (
    <nav>
      <h3>insert logo</h3>
      <ul className="nav-links">
        <Link style={navStyle} to="/">
          <li>Home</li>
        </Link>
        <Link style={navStyle} to="/contact">
          <li>Contact</li>
        </Link>
        <Link style={navStyle} to="/about">
          <li>About</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Nav;
