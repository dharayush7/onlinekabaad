import React from "react";
import { Col, Row, Button } from "react-bootstrap";
import "./styles/FeatureCard.css";

const FeatureCard = ({
  title,
  heading,
  description,
  link,
  imgSrc,
  alt,
  reverse,
}) => {
  return (
    <Row
      className={`mb-5 d-flex align-items-center container-bg-1 rounded-5 mt-6 ${
        reverse ? "flex-lg-row-reverse" : "flex-lg-row"
      } flex-column`}
    >
      {/* className={`container-bg-3 px-9 d-none d-lg-block text-center ${reverse ? 'rounded-end-5' : 'rounded-start-5'}`} */}
      <Col
        lg="auto"
        className={`container-bg-3 px-9 d-none d-lg-block  text-center ${
          reverse ? "rounded-end-5" : "rounded-start-5"
        }`}
        style={{ minWidth: "18rem", backgroundColor: "#545454" }}
      >
        <img
          className="img-fluid"
          //  className={`img-fluid ${scale2 ? "zoom-effect" : ""}`}
          src={imgSrc}
          alt={alt}
          style={{ height: "20rem" }}
        />
      </Col>

      {/* <Col
        className="container-bg-3 px-9 d-block d-lg-none rounded-end-5 w-100 text-center"
      >
        <img
          className="mt-n6 w-auto"
          src={imgSrc}
          alt={alt}
          style={{ maxHeight: '18rem' }}
        />
      </Col> */}

      <Col
        className={`p-6 text-center ${
          reverse ? "text-lg-end" : "text-lg-start"
        }`}
      >
        <div
          className="title-sm fg-default-3 pb-2"
          style={{ color: "#545454" }}
        >
          {title}
        </div>
        <h3 style={{ color: "#01A1ff", fontSize: "4rem" }}>{heading}</h3>
        <div className="fg-default-2 blacktext">{description}</div>
        <div className="pb-3 pt-6">
          <Button
            href={link}
            variant="link"
            className="label-md text-decoration-none"
          >
            Learn more <i className="icon-arrow-right"></i>
          </Button>
        </div>
      </Col>
    </Row>
  );
};

export default FeatureCard;
