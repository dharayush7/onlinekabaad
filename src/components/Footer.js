import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Footer = () => {
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

  return (
    <footer className="pt-5 bg-black ">
      <style>
        {`

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

      <Container fluid className="bg-dark text-white">
        <Row className="gy-5 px-5">
          {footerData.map((section, index) => (
            <Col xs={12} sm={6} md={2} lg={3} key={index}>
              <h5
                className="text-white"
                style={{
                  fontSize: "30px",
                }}
              >
                {section.title}
              </h5>
              <hr />
              <ul className="list-unstyled">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex} style={{ marginBottom: "0.4rem" }}>
                    <NavLink
                      to={link.url}
                      className="text-decoration-none text-white"
                      style={{
                        color: "white",
                        textDecoration: "none",
                      }}
                    >
                      {link.name}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </Col>
          ))}
          <Col xs={12} md={2} lg={6}>
            <div className="text-center text-lg-start">
              <img
                src="/images/logo.png"
                alt="onlinekabaad"
                className="mb-3"
                style={{ height: "80px" }}
              />

              {/* <div className="footer-image d-flex"></div> */}

              <div style={{ color: "red" }}>
                <a
                  href="tel: +91 8790331428"
                  className="d-block text-start text-white"
                >
                  +91 8790331428
                </a>
                <a
                  href="mailto:contact@onlinekabaad.com"
                  className="d-block text-white text-start"
                >
                  contact@onlinekabaad.com
                </a>
                <p className="d-block text-white text-start">
                  Plot No 174, Pasha Colony Puppalaguda Gandipet Ranga Reddy
                  Telangana - 500075
                </p>
              </div>
            </div>
          </Col>
        </Row>

        {/* Divider */}

        {/* Footer Bottom */}
        <Row
          className="text-center text-lg-start bg-black"
          style={{
            color: "var(--fg-default-0)",
            padding: "10px",
            marginTop: "10px",
            paddingLeft: "30px",
            paddingRight: "30px",
          }}
        >
          <Col xs={12} lg={6}>
            <p className="mb-0 text-white">
              &copy; All rights reserved by{" "}
              <span style={{ color: "green", fontWeight: "bolder" }}>
                onlinekabaad
              </span>
              .
            </p>
          </Col>
          <Col xs={12} lg={6} className="text-lg-end">
            <p className="mb-0 text-white">
              design by:{"  "}
              <span>
                <a
                  href="https://tfptechnologies.in/"
                  target="_blank"
                  rel="noreferrer"
                  className="fw-bold"
                  style={{
                    color: "green",
                  }}
                >
                  TFP Technologies
                </a>
              </span>
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
