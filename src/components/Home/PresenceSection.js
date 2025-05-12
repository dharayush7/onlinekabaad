import React from "react";
import { Container, Row, Col } from "react-bootstrap";

<style>
  {`
  .text-default {
  color: var(--fg-inverse-0);
} 

.active{
padding:50px;
}
  `}
</style>;
const cities = [
  { name: "Hyderabad ", status: "active" },
  { name: "Rewa", status: "coming soon" },
  { name: "Satna", status: "coming soon" },
];

const PresenceSection = () => {
  return (
    <section>
      <Container className="h-100 d-flex flex-column justify-content-center">
        <h2 className="pt-10 d-block d-lg-none text-center">
          Our <span style={{ color: "#009c1a" }}>Presence</span> Across Nation
        </h2>
        <Row className="align-items-center">
          <Col xs={12} lg={6} className="order-lg-1 order-2">
            <h2 className="d-none d-lg-block">
              Our <span style={{ color: "#009c1a" }}>Presence</span> Across
              Nation
            </h2>
            <div
              className="py-6 body-lg text-center  text-lg-start"
              style={{ color: "var(--fg-inverse-0)" }}
            >
              <p
                className="text-default"
                style={{ color: "var(--fg-default-0)" }}
              >
                The Kabadiwala has established its services in
                <span style={{ color: "#009c1a" }}>
                  {" "}
                  5 major cities of India{" "}
                </span>
                and is now expanding its reach in other parts of the country.
              </p>
            </div>
            <div className="d-flex flex-wrap  align-items-center justify-content-center  justify-content-lg-start gap-3">
              {cities.map((city, index) =>
                city.status === "active" ? (
                  <div
                    key={index}
                    className={`label-md ${
                      city.status === "active  " ? "bgsky py-5 px-6 " : "citybg"
                    }  rounded-3  border border-radius-3`}
                    style={{ width: "auto" }}
                  >
                    <h6 className="label-md  text-white rounded-3 py-3 px-6  m-0">
                      {city.name}
                    </h6>
                  </div>
                ) : (
                  <div class=" container-bg-warning-2 rounded-3 text-center ">
                    <h6 class="label-md container-bg-2 rounded-3 py-2 px-6 m-0 ">
                      {" "}
                      {city.name}
                    </h6>
                    <div class="body-sm fg-warning-1 px-6 ">coming soon</div>
                  </div>
                )
              )}
            </div>
          </Col>
          <Col lg={5} offsetLg={1} xs={12} className="order-1 order-lg-2">
            <img
              src="/images/landing/india-map-locations.png"
              alt="india-map-with-markers"
              className="mw-100"
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default PresenceSection;
