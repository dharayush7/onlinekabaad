import React from "react";
import { Navbar, Nav, NavDropdown, Button, Container, Row, Col } from "react-bootstrap";

const CustomNavbar = () => {
  return (
    <Navbar expand="lg" className="navbar" style={{}} variant="dark">
      <Container>
      <Navbar.Brand href="#home" className="d-flex align-items-center">
          <div style={{ color: "#009c1a" }} className="rounded-circle">
            <span className="fw-bold fs-4" style={{ color: "#009c1a" }}>
              Go
            </span>
          </div>
          <span className="text-white fw-semibold fs-4">Easy</span>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbar-nav">
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            stroke="currentColor"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* <circle cx="16" cy="16" r="15.5"></circle> */}
            <path
              d="M11 14L15.5 18.5L20 14"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
        </Navbar.Toggle>
        <Navbar.Collapse id="navbar-nav">
          <Nav className="mx-auto justify-content-end gap-3">
            <NavDropdown title="Services" id="services-dropdown">
             <Row>

             <Col>
               <h1 style={{color:"black",fontSize:'2rem'}}>forIndividuals</h1>
              <NavDropdown.Item href="individual.html">Scrap Collection</NavDropdown.Item>
              <NavDropdown.Item href="individual.html">Scrap Collection</NavDropdown.Item>
              <NavDropdown.Item href="individual.html">Scrap Collection</NavDropdown.Item>
             </Col>

            
             <Col md={6}>
             <h2 style={{color:"black",fontSize:'2rem'}}>forBusinesses</h2>
             <Row >
              
              <Col md={4}>
              <NavDropdown.Item href="individual.html">Scrap Collection</NavDropdown.Item>
              <NavDropdown.Item href="individual.html">Scrap Collection</NavDropdown.Item>
              <NavDropdown.Item href="services/zero-waste-society.html">
                Zero Waste Society
              </NavDropdown.Item>
              </Col>
              <Col md={4}>
              <NavDropdown.Item href="individual.html">Scrap Collection</NavDropdown.Item>
              <NavDropdown.Item href="individual.html">Scrap Collection</NavDropdown.Item>
              <NavDropdown.Item href="services/zero-waste-society.html">
                Zero Waste Society
              </NavDropdown.Item>
              </Col>
              <Col md={4}>
              <NavDropdown.Item href="individual.html">Scrap Collection</NavDropdown.Item>
              <NavDropdown.Item href="individual.html">Scrap Collection</NavDropdown.Item>
              <NavDropdown.Item href="services/zero-waste-society.html">
                Zero Waste Society
              </NavDropdown.Item>
              </Col>

             </Row>
             </Col>

             <Col>
               <h1 style={{color:"black",fontSize:'2rem'}}>forGovernments</h1>
              <NavDropdown.Item href="individual.html">Scrap Collection</NavDropdown.Item>
              <NavDropdown.Item href="individual.html">Scrap Collection</NavDropdown.Item>
              <NavDropdown.Item href="individual.html">Scrap Collection</NavDropdown.Item>
             </Col>
             
             </Row>
              <NavDropdown.Item href="services/vehicle-scrapping-service.html">
                Vehicle Scrapping
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Company" id="company-dropdown">
              <NavDropdown.Item href="services/circular-economy-services.html">
                Circular Economy
              </NavDropdown.Item>
              <NavDropdown.Item href="services/csr-services.html">CSR Services</NavDropdown.Item>
              <NavDropdown.Item href="services/epr-service.html">EPR Services</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="careers.html">Careers</Nav.Link>
          </Nav>
          <div className="nav-buttons d-flex align-items-center">
            <a href="scrap-rates.html" className="btn btn-secondary me-2">
              Check Rate List
            </a>
            <Button variant="primary" className="app-download-modal-btn">
              Sell Scrap
            </Button>
            {/* <Button variant="light" className="theme-switcher light"></Button> */}
          </div>
        </Navbar.Collapse>
      </Container>
      <div className="dropdown-content d-none">
        <Container>
          <Row className="mt-lg-4 mt-3 justify-content-lg-center gx-8 px-lg-8">
            <Col lg={3}>
              <h5 className="pb-4 fg-success-2 border-bottom mb-5">For Individuals</h5>
              <Nav className="flex-column">
                <Nav.Link href="individual.html">Scrap Collection</Nav.Link>
                <Nav.Link href="services/zero-waste-society.html">Zero Waste Society</Nav.Link>
                <Nav.Link href="services/vehicle-scrapping-service.html">Vehicle Scrapping</Nav.Link>
              </Nav>
            </Col>
            <Col lg={6}>
              <h5 className="pb-4 fg-success-2 border-bottom mb-5">For Businesses</h5>
              <Row>
                <Col lg={4}>
                  <Nav.Link href="services/scrap-collection.html">Scrap Collection</Nav.Link>
                </Col>
                <Col lg={4}>
                  <Nav.Link href="services/circular-economy-services.html">
                    Circular Economy
                  </Nav.Link>
                </Col>
                <Col lg={4}>
                  <Nav.Link href="services/csr-services.html">CSR Services</Nav.Link>
                </Col>
              </Row>
            </Col>
            <Col lg={3}>
              <h5 className="pb-4 fg-success-2 border-bottom mb-5">For Governments</h5>
              <Nav className="flex-column">
                <Nav.Link href="services/material-recovery-facility.html">
                  Material Recovery Facility
                </Nav.Link>
                <Nav.Link href="services/iec-services.html">IEC</Nav.Link>
                <Nav.Link href="services/deposit-refund-system.html">
                  Deposit Refund System (DRS)
                </Nav.Link>
              </Nav>
            </Col>
          </Row>
        </Container>
      </div>
    </Navbar>
  );
};

export default CustomNavbar;
