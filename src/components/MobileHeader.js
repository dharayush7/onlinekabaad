import React, { useState } from "react";
import { Navbar, Container, Nav, Offcanvas } from "react-bootstrap";
import {
  FaBars,
  FaTimes,
  FaHome,
  FaUser,
  FaCog,
  FaQuestionCircle,
} from "react-icons/fa";
import Header from "./Header";
import { NavLink } from "react-router-dom";

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
             <img src="./images/logo01.png" height={50} />
          </Navbar.Brand>
          <div className="d-flex align-items-center">
            <button
              onClick={handleShow}
              className="btn btn-link text-black p-1"
              style={{ border: "none" }}
            >
              <FaBars size={24} />
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
          <Offcanvas.Title><img src="./images/logo01.png" height={50} /></Offcanvas.Title>
          <button
            type="button"
            className="btn-close "
            onClick={handleClose}
            aria-label="Close"
            style={{color:"#fff",backgroundColor:"#fff"}}
          >
            
          </button>
        </Offcanvas.Header>
        <Offcanvas.Body className="bg-black">
          {/* <Nav className="flex-column gap-2">
            <NavBar />
          </Nav> */}
          <Header />
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default MobileHeader;
