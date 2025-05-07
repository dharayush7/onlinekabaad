import React, { useEffect, useState } from "react";
import { Nav, NavDropdown, Row, Col } from "react-bootstrap";
import { NavLink, useLocation } from "react-router-dom";

import { HashLink as Link } from "react-router-hash-link";
import prize from "../assets/jsonData/prize.json";
import "./styles/Navbar.css";

export default function NavBar({textclassName,isHome,isDark}) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const location = useLocation();
  const [device, setDevice] = useState("desktop");
  const[isMobile ,setMobile] =useState(false);

  useEffect(() => {
    const updateDevice = () => {
      const width = window.innerWidth;
      if (width < 768) {
        setDevice("mobile");
        setMobile(true);
      } else if (width >= 768 && width < 992) {
        setDevice("tablet");
        setMobile(true);
      } else {
        setDevice("desktop");
        setMobile(false);
      }
    };

    updateDevice(); // Initial check
    window.addEventListener("resize", updateDevice);

    return () => window.removeEventListener("resize", updateDevice);
  }, []);

  const renderDropdownItems = (items) => {
    return items.map((item, index) => (
      <NavDropdown.Item
        key={index}
        as={NavLink}
        to={item.to}
        className="custom-dropdown-item text-white text-decoration-none"
      >
        {item.name}
      </NavDropdown.Item>
    ));
  };

  const isHomePage = location.pathname === "/";

  const { items } = prize.forIndividuals;

  const columnSize = Math.ceil(items.length / 3);
  const firstColumnItems = items.slice(0, columnSize);
  const secondColumnItems = items.slice(columnSize, columnSize * 2);
  const thirdColumnItems = items.slice(columnSize * 2);


  const styles = {
    whiteTxt: { color: "#fff" },
    blackTxt: { color: "#000" }
  };

  return (
    <Nav className="mx-auto gap-3 ">
      {/* Services Dropdown */}
      {/* <NavDropdown
        title={
          <span
          className={`fs-5 ${isDropdownOpen ? "fg-default-1" : isHomePage ? "text-white" : "bgred"} custom-hover`}
          >
            Services
        </span>
        }
        id="services-dropdown"
        className="custom-dropdown"
        // onToggle={(isOpen) => setIsDropdownOpen(isOpen)}
      >
        <div>
          <Row className="custom-row">
            <Col md={12} xs={12}>
              <strong className="d-block text-center fs-5" style={{ color: "#01A1ff",textAlign:"center" }}>
                {prize.forIndividuals.title}
              </strong>
                  <NavDropdown.Divider />
                  <Row>
                {/* First Column */}
                {/* <Col md={4} xs={12}>
                  {renderDropdownItems(firstColumnItems)}
                </Col> */}
                {/* Second Column */}
                {/* <Col md={4} xs={12}>
                  {renderDropdownItems(secondColumnItems)}
                </Col>
                {/* Third Column */}
                {/* <Col md={4} xs={12}>
                  {renderDropdownItems(thirdColumnItems)}
                </Col>
              </Row> */}
            {/* </Col> */} 

            {/* <Col md={7} xs={12}>
              <strong style={{color:"#01A1ff"}}>{prize.forBusinesses.title}</strong>
              <NavDropdown.Divider />
              <Row className="text-left text-white">
                {prize.forBusinesses.items.map((item, index) => (
                  <Col md={4} xs={12} key={index}>
                    <NavDropdown.Item
                      as={NavLink}
                      to={item.to}
                      className="custom-dropdown-item text-white text-decoration-none"
                    >
                      {item.name}
                    </NavDropdown.Item>
                  </Col>
                ))}
              </Row>
            </Col> */}

            {/* Governments */}
            {/* <Col md={2} xs={12}>
              <strong style={{color:"#01A1ff"}}>{prize.forGovernments.title}</strong>
              <NavDropdown.Divider  />
              {renderDropdownItems(prize.forGovernments.items)}
            </Col> */}
          {/* </Row>
        </div> 
      </NavDropdown>*/}

      {/* Company Dropdown */}
      {/* <NavDropdown
        title={
          <span
            className={`fs-5 ${isDropdownOpen ? "fg-default-1" : isHomePage ? "text-white" : "bgred"} custom-hover`}
            
            // onToggle={(isOpen) => setIsDropdownOpen(isOpen)}
          >
            Company
          </span>
        }
        id="company-dropdown"
        className="custom-dropdown2"
      >
        {/* <NavDropdown.Item as={NavLink} to="/AboutUs" className=" text-white bg-black">
          About Us
        </NavDropdown.Item>
        <NavDropdown.Item as={NavLink} to="/Franchise" className=" text-white bg-black">
          Franchise
        </NavDropdown.Item> */}
        {/*<NavDropdown.Item
          as={NavLink}
          to="/OurJourney"
          className=" text-white bg-black"
        >
          About Us
        </NavDropdown.Item>
        <NavDropdown.Item
          as={NavLink}
          to="/Contact"
          className=" text-white bg-black"
        >
          Contact
        </NavDropdown.Item>
      </NavDropdown> */}
     

      <Nav.Link  className="fs-5 custom-hover text-white" >
      <Link to="/" smooth duration={500} style={(isHomePage || isMobile || isDark) ? styles.whiteTxt : styles.blackTxt}>Home</Link> 
      </Nav.Link> 

      <Nav.Link className="fs-5 custom-hover text-white" >
      <Link to={isHome?"#aboutUs":"/#aboutUs"} smooth={true} duration={500} style={(isHomePage || isMobile || isDark) ? styles.whiteTxt : styles.blackTxt}>AboutUs</Link> 
      </Nav.Link> 

      <Nav.Link  className="fs-5 custom-hover text-white" >
      <Link to={isHome?"#services":"/#services"} smooth={true} duration={500} style={(isHomePage || isMobile || isDark) ? styles.whiteTxt : styles.blackTxt}>Services</Link> 
      </Nav.Link> 

    

      <Nav.Link className="fs-5 custom-hover text-white" >
      <Link to={isHome?"#contactUs":"/#contactUs"}  smooth={true} duration={500} style={(isHomePage || isMobile || isDark) ? styles.whiteTxt : styles.blackTxt}>ContactUs</Link> 
      </Nav.Link> 

     
    </Nav>
  );
}



