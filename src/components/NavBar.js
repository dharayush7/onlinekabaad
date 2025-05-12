import React from "react";
import { Nav } from "react-bootstrap";
import { useLocation } from "react-router-dom";

import { HashLink as Link } from "react-router-hash-link";
import "./styles/Navbar.css";

export default function NavBar({ isHome, isDark }) {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  const styles = {
    whiteTxt: { color: "#fff" },
    blackTxt: { color: "#000" },
  };

  return (
    <Nav className="mx-auto gap-3 ">
      <Nav.Link className="fs-5 custom-hover text-white">
        <Link
          to="/"
          smooth
          duration={500}
          style={isHomePage || isDark ? styles.whiteTxt : styles.blackTxt}
        >
          Home
        </Link>
      </Nav.Link>

      <Nav.Link className="fs-5 custom-hover text-white">
        <Link
          to={isHome ? "#aboutUs" : "/#aboutUs"}
          smooth={true}
          duration={500}
          style={isHomePage || isDark ? styles.whiteTxt : styles.blackTxt}
        >
          AboutUs
        </Link>
      </Nav.Link>

      <Nav.Link className="fs-5 custom-hover text-white">
        <Link
          to={isHome ? "#services" : "/#services"}
          smooth={true}
          duration={500}
          style={isHomePage || isDark ? styles.whiteTxt : styles.blackTxt}
        >
          Services
        </Link>
      </Nav.Link>

      <Nav.Link className="fs-5 custom-hover text-white">
        <Link
          to={isHome ? "#contactUs" : "/#contactUs"}
          smooth={true}
          duration={500}
          style={isHomePage || isDark ? styles.whiteTxt : styles.blackTxt}
        >
          ContactUs
        </Link>
      </Nav.Link>
    </Nav>
  );
}
