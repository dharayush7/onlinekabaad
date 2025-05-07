import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const partnersData = [
  { src: "/images/partners/1.png", alt: "partners-paytm" },
  { src: "/images/partners/2.png", alt: "partners-dominos" },
  { src: "/images/partners/3.png", alt: "partners-tetrapak" },
  { src: "/images/partners/4.png", alt: "partners-larsen_tourbo" },
  { src: "/images/partners/5.png", alt: "partners-icici-bank" },
  { src: "/images/partners/6.png", alt: "partners-decathlon" },
  // { src: "/images/partners/pa.png", alt: "partners-hersheys" },
  // { src: "/images/partners/.png", alt: "partners-godrej" },
  // { src: "/images/partners/pa.png", alt: "partners-reliance" },
];

const PartnerCard = ({ src, alt }) => (
  <div
    className="rounded-4  d-flex align-items-center"
    style={{
      backgroundColor: "#f4f4f4",
      maxWidth: "30vw",
      maxHeight: "30vw",
      width: "7rem",
      height: "7rem",
    }}
  >
    <img src={src} alt={alt} className="w-100 h-100"   style={{ mixBlendMode: "multiply",
       objectFit: "cover"
        }} />
  </div>
);

const PartnersSection = () => (
  <section>
    <Container className="d-flex align-items-center h-100">
      <Row className="align-items-center">
        {/* Partner Logos */}
        <Col lg={6} xs={12} className="order-2 order-lg-1 p-lg-12">
          <Row xs={3} className="g-lg-4 g-3">
            {partnersData.map((partner, index) => (
              <Col key={index}>
                <PartnerCard src={partner.src} alt={partner.alt} />
              </Col>
            ))}
          </Row>
        </Col>

        {/* Text Content */}
        <Col
          lg={6}
          xs={12}
          className="order-1 order-lg-2 border-start container-border-3 p-lg-12 p-6 pt-8 text-center text-lg-start"
        >
          <h3>
            Trusted by <span style={{ color: "#009c1a" }}>500+ </span> global partners
          </h3>
          <p className="body-lg py-5">
            The Kabadiwala is an official waste management partner with the
            world’s greatest organization.
          </p>
        </Col>
      </Row>
    </Container>
  </section>
);

export default PartnersSection;
