
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ContactInformation from "./ContactInformation";
import ContactForm from "./ContactForm";

const ContactSection = () => (
  <section id="contactUs" className="py-5" >
    <Container>
      <div className="text-center mb-4 ">
        <h2>Get in Touch</h2>
        <p style={{ color: "var(--fg-default-0)" }}>Any questions or remarks? Just write us a message!</p>
      </div>
      <div className="container-bg-2 rounded-6 p-4">
        <Row>
          <Col lg={5} className="d-none d-lg-block">
            <ContactInformation />
          </Col>
          <Col lg={7} >
            <ContactForm />
          </Col>
        </Row>
      </div>
    </Container>
  </section>
);

export default ContactSection;
