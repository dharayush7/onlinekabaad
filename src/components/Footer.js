import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import { useState, useEffect } from "react";
import prize from "../assets/jsonData/prize.json"

const Footer = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check if a theme is stored in localStorage
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      setIsDark(storedTheme === "dark");
    } else {
      // If no stored theme, default to system preference
      const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
      setIsDark(mediaQuery.matches);
    }

    // Handle theme changes from system preference
    const handleThemeChange = (e) => {
      setIsDark(e.matches);
    };
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    mediaQuery.addEventListener("change", handleThemeChange);

    // Cleanup listener on unmount
    return () => {
      mediaQuery.removeEventListener("change", handleThemeChange);
    };
  }, []);
  const footerData = [
          
    {
      title: "Company",
      links: [
        { name: "About Us", url: "#aboutUs" },
        { name: "Contact Us", url: "#contactUs" },
        { name: "Services", url: "#services" },
      ],
    },
    {
      title: "Help",
      links: [
        { name: "Contact Us", url: "#contactUs" },
        { name: "Privacy Policy", url: "" },
        { name: "Terms & Conditions", url: "" },
      ],
    },
  ];


  const { items } = prize.forIndividuals;

  const columnSize = Math.ceil(items.length / 4);

  const firstColumnItems = items.slice(0, columnSize); 
  const secondColumnItems = items.slice(columnSize, columnSize * 2); 
  const thirdColumnItems = items.slice(columnSize * 2); 

  return (
    <footer className="pt-5 bgblack ">
      <style>
        {`
          a:hover {
            // color: #009c1a !important;
          }

         @media (width < 990px) {
            .footer-image {
              display: flex;
              justify-content: center;
              align-items: center;
              margin: 0 auto;
            }
          }

        `}
      </style>

      <Container fluid>
        <Row className="gy-5">

        <Col xs={12} sm={12} md={4}>
            {prize.forIndividuals && (
              <div>
                <h5>{prize.forIndividuals.title}</h5>
                <hr />
                <Row>

                  <Col xs={12} sm={12} md={4}>
                    <ul className="list-unstyled">
                      {firstColumnItems.map((link, index) => (
                        <li key={index} style={{ marginBottom: "0.8rem" }}>
                          <NavLink to={link.to} className="text-decoration-none" style={{fontSize:".9rem"}}>
                            {link.name}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  </Col>

                  <Col xs={12} sm={12} md={4}>
                    <ul className="list-unstyled">
                      {secondColumnItems.map((link, index) => (
                        <li key={index} style={{ marginBottom: "0.8rem" }}>
                          <NavLink to={link.to} className="text-decoration-none" style={{fontSize:".9rem"}}>
                            {link.name}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  </Col>

                  <Col xs={12} sm={12} md={4}>
                    <ul className="list-unstyled">
                      {thirdColumnItems.map((link, index) => (
                        <li key={index} style={{ marginBottom: "0.8rem" }} >
                          <NavLink to={link.to} className="text-decoration-none" style={{fontSize:".9rem"}}>
                            {link.name}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  </Col>
                </Row>
              </div>
            )}
          </Col>


          {footerData.map((section, index) => (
            <Col xs={12} sm={6} md={2} lg={2} key={index}>
              <h5 className="text-primary">{section.title}</h5>
              <hr/>
              <ul className="list-unstyled">
                {section.links.map((link, linkIndex) => (
                  
                  <li key={linkIndex} style={{ marginBottom: "0.8rem" }}>
                    <NavLink to={link.url} className=" text-decoration-none ">
                      {link.name}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </Col>
          ))}
          <Col xs={12} md={2} lg={4}>
            <div className="text-center text-lg-start">
               <img
                src="/images/logo.png" 
                alt="Go Easy Logo"
                className="mb-3"
                style={{  height: "60px" }}
              />

              {/* <div className="footer-image d-flex"></div> */}
              
              <div style={{ color: "red" }}>
                <a href="tel: +91 8790331428" className="d-block ">
                +91 8790331428
                </a>
                <a href="mailto:contact@onlinekabaad.com" className="d-block ">
                contact@onlinekabaad.com
                </a>
                <a
                  href=""
                  target="_blank"
                  rel="noopener noreferrer"
                  className="d-block "
                >
                  Plot No 174, Pasha Colony Puppalaguda Gandipet Ranga Reddy Telangana - 500075
                </a>
              </div>
              <div className="d-flex justify-content-center justify-content-lg-start mt-3">
                <a
                  href="https://www.instagram.com/onlinekabaad/"
                  className="me-2"
                >
                  <img
                    src="/images/footer-instagram.png"
                    alt="Instagram"
                    width="24"
                  />
                </a>
                <a
                  href=""
                  className="me-2"
                >
                  <img
                    src="/images/footer-facebook.png"
                    alt="Facebook"
                    width="24"
                  />
                </a>
                <a href="" className="me-2">
                  <img
                    src="/images/footer-twitter.png"
                    alt="Twitter"
                    width="24"
                  />
                </a>
                <a href="">
                  <img
                    src="/images/footer-linkedin.png"
                    alt="LinkedIn"
                    width="24"
                  />
                </a>
              </div>
            </div>
          </Col>
        </Row>

        {/* Divider */}
        <hr className="my-4" />

        {/* Footer Bottom */}
        <Row
          className="text-center text-lg-start"
          style={{ color: "var(--fg-default-0)" }}
        >
          <Col xs={12} lg={6}>
            <p className="mb-0" >
              &copy; All rights reserved by  <span style={{color:"green", fontWeight:"bolder"}}>IS SCRAP Traders</span>.
            </p>
          </Col>
          <Col xs={12} lg={6} className="text-lg-end">
            <p className="mb-0">
              Made with <span style={{ color: "red" }}>&hearts;</span> in India,
              for the World
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
