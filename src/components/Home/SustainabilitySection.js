import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import data from "../../assets/jsonData/SustainabilitySection.json";
import "../styles/SustainabilitySection.css";

const SustainabilitySection = () => {
  const {
    title,
    heading,
    description,
    highlightedWords,
    buttonText,
    imageclassName,
  } = data;

  const renderDescription = () => {
    const parts = description.split(
      new RegExp(`(${highlightedWords.join("|")})`, "gi")
    );
    return parts.map((part, index) =>
      highlightedWords.some(
        (word) => word.toLowerCase() === part.toLowerCase()
      ) ? (
        <span
          key={index}
          className="fg-success-2"
          style={{ color: "var(--success)" }}
        >
          {part}
        </span>
      ) : (
        part
      )
    );
  };

  return (
    <section id="aboutUs">
      <Container fluid className="d-flex align-items-center h-100 mb-5">
        <Row className="align-items-center ">
          <Col lg={6} xs={12}>
            <div className={imageclassName}> </div>
          </Col>

          <Col lg={6} xs={12} className="text-lg-start text-center p-7 ">
            <div
              className="title-lg fg-inverse-3 pb-6"
              style={{
                color: "var(--fg-inverse-3)",
                fontSize: "1.125rem",
                fontWeight: "700",
                letterSpacing: "-.02rem",
                lineHeight: "120%",
              }}
            >
              {title}
            </div>
            <h3
              style={{
                fontSize: "calc(1.525rem + 2.0625vw)",
                fontWeight: "700",
                letterSpacing: "-.03rem",
                lineHeight: "105%",
              }}
            >
              {heading}
            </h3>
            <div className="body-lg fg-inverse-3 pb-4">
              {renderDescription()}
            </div>

            <div className="py-4">
              <button className="my-custom-button">{buttonText}</button>

              {/* <Button
                onClick={() => Navigate("business")}
                href={buttonLink}
                className="btn-primary d-inline-flex align-items-center"
              >
                {buttonText}{" "}
                <i className="icon-arrow-right ms-2" color="#fff"></i>
              </Button> */}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default SustainabilitySection;
