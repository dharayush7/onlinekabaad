// ContactInformation.js
import React from "react";
import { Card } from "react-bootstrap";

const ContactInformation = () => (
  <>
    <style>
      {`
  .not-hover:hover{
     color: None !important;
  }
  `}
    </style>

    <Card className="h-100">
      <Card.Body
        className=""
        style={{ backgroundColor: "#0dc02b", padding: "40px" }}
      >
        <h3 className="headline-md fg-inverse-1">Contact Information</h3>
        <p className="body-lg mt-4 fg-inverse-1">
          Fill up the form and our Team will get back to you within 24 hours
        </p>
        <div className="mt-5 ">
          <div className="d-flex align-items-center mb-4">
            <i className="bi bi-telephone-fill text-white me-3"></i>
            <a
              href="tel: +918790331428"
              className="title-lg not-hover fg-inverse-1"
            >
              +91 8790331428
            </a>
          </div>
          <div className="d-flex align-items-center mb-4">
            <i className="bi bi-envelope-fill text-white me-3"></i>
            <a
              href="mailto:contact@onlinekabaad.com"
              className="title-lg  not-hover fg-inverse-1"
            >
              contact@onlinekabaad.com
            </a>
          </div>
          <div className="d-flex align-items-start ">
            <i className="bi bi-geo-alt-fill text-white me-3"></i>
            <p className="ms-1 title-lg fg-inverse-1 mt-4">
              Plot No 174, Pasha Colony Puppalaguda Gandipet Ranga Reddy
              Telangana - 500075
            </p>
          </div>
        </div>
      </Card.Body>
    </Card>
  </>
);

export default ContactInformation;
