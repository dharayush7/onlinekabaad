import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { NavLink, useLocation } from "react-router-dom";
import "./styles/themes.css";
import "./styles/Navbar.css";
import { Navbar } from "react-bootstrap";
import NavBar from "./NavBar";

export default function Header(props) {
  const location = useLocation();

  const [isNavOpen, setIsNavOpen] = useState(false);
  const isHomePage = location.pathname === "/";

  return (
    <>
      <style>
        {`
    @media (width < 990px) {
            .main-header {
              display: none;
            }
          }
  `}
      </style>
      <Navbar
        expand="lg"
        className={`py-3 ${isNavOpen ? "bg-black" : "bg-transparent"} header1 `}
        variant="dark"
      >
        <Container>
          <Navbar.Brand
            as={NavLink}
            to="/"
            className="d-none d-lg-flex mt-0 align-items-start"
            style={{ marginBottom: "15px" }}
          >
            <img src="./images/logo01.png" height={60} alt="logo" />
            <div className="rounded-circle " style={{ marginTop: "20px" }}>
              <span className="fw-bold fs-4" style={{ color: "#009c1a" }}>
                Online
              </span>
            </div>
            <span
              className="fw-semibold fs-4"
              style={{
                marginTop: "20px",
                color: isHomePage ? "#fff" : "#000",
              }}
            >
              Kabaad
            </span>
          </Navbar.Brand>

          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            onClick={() => setIsNavOpen(!isNavOpen)}
          />
          <Navbar.Collapse id="basic-navbar-nav">
            <NavBar
              textclassName="text-white"
              isHome={props.isHome}
              isDark={false}
            />

            <div className="d-flex gap-3 align-items-center">
              <Button
                variant="outline-light"
                as={NavLink}
                to="/scrap-rates"
                className="rate"
                style={{
                  fontWeight: "bold",
                  backgroundColor: "#fff",
                  color: "black",
                  borderRadius: "20px",
                }}
              >
                Check Rate List
              </Button>
              <Button
                variant="light"
                style={{
                  backgroundColor: "#01a1ff",
                  borderColor: "#01a1ff",
                  color: "#fff",
                  fontWeight: "bold",
                  borderRadius: "20px",
                  display: "none",
                }}
                className="app-download-modal-btn"
              >
                Sell Scrap
              </Button>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
