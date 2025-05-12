import React, { useState } from "react";
import { Navbar, Container, Offcanvas } from "react-bootstrap";
import { FaBars } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import Button from "react-bootstrap/Button";

const MobileHeader = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <style>
        {`
          .centered-offcanvas .offcanvas-end {
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 100%;
            height: auto; /* Ensures height adjusts to content */
            max-height: 100vh; /* Optional: Ensures offcanvas doesn't overflow vertically */
          }
           @media (width > 990px) {
            .mobile-header {
              display: none;
            }
          }
        `}
      </style>

      <Navbar bg="transparent" className="shadow-sm fixed-top mobile-header">
        <Container fluid>
          <Navbar.Brand
            as={NavLink}
            to="/"
            className="d-flex align-items-center"
          >
            <img src="./images/logo01.png" height={50} alt="logo" />
          </Navbar.Brand>
          <div className="d-flex align-items-center">
            <button
              onClick={handleShow}
              className="btn btn-link text-white p-1 bg-white"
            >
              <FaBars
                size={24}
                color="#fff"
                style={{
                  color: "white",
                }}
              />
            </button>
          </div>
        </Container>
      </Navbar>

      <Offcanvas
        show={show}
        onHide={handleClose}
        placement="end"
        className="centered-offcanvas"
      >
        <Offcanvas.Header className="border-bottom bg-black">
          <Offcanvas.Title>
            <img src="./images/logo01.png" height={50} alt="logo" />
          </Offcanvas.Title>
          <button
            type="button"
            className="btn-close "
            onClick={handleClose}
            aria-label="Close"
            style={{ color: "#fff", backgroundColor: "#fff" }}
          ></button>
        </Offcanvas.Header>
        <Offcanvas.Body
          className="bg-black"
          style={{
            display: "flex",
            flexDirection: "column",
            placeItems: "center",
            justifyContent: "center",
          }}
        >
          <a
            href="/#home"
            onClick={handleClose}
            style={{
              fontSize: "30px",
              color: "white",
              fontWeight: "bold",
              marginBottom: "30px",
            }}
          >
            Home
          </a>
          <a
            href="/#aboutUs"
            onClick={handleClose}
            style={{
              fontSize: "30px",
              color: "white",
              fontWeight: "bold",
              marginBottom: "30px",
            }}
          >
            About Us
          </a>
          <a
            href="/#services"
            onClick={handleClose}
            style={{
              fontSize: "30px",
              color: "white",
              fontWeight: "bold",
              marginBottom: "30px",
            }}
          >
            Services
          </a>
          <a
            href="/#contactUs"
            onClick={handleClose}
            style={{
              fontSize: "30px",
              color: "white",
              fontWeight: "bold",
              marginBottom: "30px",
            }}
          >
            Contact Us
          </a>
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
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default MobileHeader;
