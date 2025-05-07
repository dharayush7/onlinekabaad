import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const statsData = [
  {
    bgclassName: "container-bg-flash-2",
    imgSrc: "/images/landing/impact-water.png",
    alt: "impact-water",
    value: "1,75,121",
    description: "Sevvices Delivered",
  },
  {
    bgclassName: "container-bg-danger-2",
    imgSrc: "/images/landing/impact-electricity.png",
    alt: "impact-electricity",
    value: "1,63,894",
    description: "Happy Clients",
  },
  {
    bgclassName: "container-bg-warning-2",
    imgSrc: "/images/landing/impact-fuel.png",
    alt: "impact-fuel",
    value: "2,700+ ",
    description: "trusted partners",
  },
  {
    bgclassName: "container-bg-success-2",
    imgSrc: "/images/landing/impact-trees.png",
    alt: "impact-trees",
    description: "B2B ",
    value: "80+",
  },
];

const ImpactCard = ({ bgclassName, imgSrc, alt, value, description }) => (
  <Col lg={3} xs={12}>
    <div className={`${bgclassName} px-7 py-5 rounded-4`}>
      <div className="d-flex align-items-center">
        <img src={imgSrc} alt={alt} />
        <div className="px-6 text-start">
          <h6 className="fg-default-1 ">{value}</h6>
          <p className="label-sm fg-default-1 ">{description}</p>
        </div>
      </div>
    </div>
  </Col>
);

const FarakPadtaHaiSection = () => (
  <section>
    {/* Background and Header */}
    <div className="overflow-hidden pt-lg-0 pt-8">
      <div className="position-relative dark-theme">
        <div>
          <img
            src="/images/landing/farak-padta-hai-background.webp"
            alt="farak-padta-hai-background"
            className="w-100"
            style={{ minHeight: "22rem" }}
          />
        </div>
        <div className="position-absolute top-0 w-100">
          <h3 className="pt-8 text-center fg-default-1">Farak Padta Hai</h3>
        </div>
        <div className="position-absolute bottom-0 w-100">
          <div className="d-flex justify-content-center position-relative">
            <img
              src="/images/landing/farak-padta-hai-children.png"
              alt="farak-padta-hai-children"
              className="w-100"
              style={{ maxWidth: "900px" }}
            />
            <div
              className="position-absolute w-100"
              style={{ bottom: "15%" }}
            >
              <div className="d-flex flex-column align-items-center pb-lg-8">
                <h2 className="m-0"><div  style={{color:"#009c1a"}}>2,05,426</div></h2>
                <span className="text-nowrap fg-inverse-1 body-lg">
                Services Delivered Trusted by thousands for reliable and professional home services
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Impact Stats */}
      <Container className="pt-10">
        <Row className="gy-5">
          {statsData.map((stat, index) => (
            <ImpactCard key={index} {...stat} />
          ))}
        </Row>
      </Container>
    </div>
  </section>
);

export default FarakPadtaHaiSection;
