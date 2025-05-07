import React from "react";
import "../../clientStyle/contentStylemain.css";
import "../../clientStyle/TKWWebsite.Client.styles.css";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
const SalesAndAssociates = () => {
  return (
    <div>
      <main className="content" b-xpiygqfdvj="">
        <div className="position-relative dark-theme">
          <img
            src="https://www.thekabadiwala.com/images/job-description/job-description-hero.webp"
            className="w-100"
            style={{ height: "60vh", objectFit: "cover" }}
            alt="erp service"
          />
          <div className="position-absolute bottom-0 w-100">
            <div className="container-fluid px-lg-11">
              <h2>EPR Service</h2>
            </div>
          </div>
        </div>
        <div className="container-fluid py-lg-10 pt-7 px-lg-11">
          <div className="row gx-lg-13">
            <div className="col-12">
              <div className="row">
                <div className="col-lg-8 mb-14 mt-lg-8 mb-lg-0">
                  <div className="body-lg d-lg-block d-none"></div>
                  <div className="body-lg pt-lg-8">
                    <h3 className=" mb-5">Solid Waste Management</h3>
                    <div className="row text-start ">
                      <div className="col-4">
                        <p>Duration: Full-time </p>
                      </div>
                      <div className="col-4">
                        <p>Type: Full-time</p>
                      </div>
                      <div className="col-sm-4">
                        <p>Location: Bhopal</p>
                      </div>
                    </div>
                  </div>
                  <div className="body-lg pt-lg-8 d-lg-block mb-5">
                    <h5 className=" mb-5">Job Description</h5>
                    <div className="row   ">
                      <div className="col ">
                        <div className="ml-5 " style={{ maxWidth: "900px" }}>
                          <p> Responsibility:-</p>
                          <p>
                            - Take responsibility for managing Solid waste for a
                            society.
                          </p>
                          <p>
                            - Auditing: Auditing the existing waste management
                            system of your society to understand what changes
                            need to be made & what infrastructural adjustments
                            need to be acquired for the successful
                            implementation of source segregation.
                          </p>
                          <p>
                            - Engagement: Engage volunteers within the society
                            are trained for monitoring if the source segregation
                            is properly executed by everyone & also asked to
                            share feedback/suggestions for any improvement.
                          </p>
                          <p>
                            - Training: Housekeeping staff and residents on
                            source segregation of waste
                          </p>
                          <p>
                            - Coordinate: with housekeeping staff and residents
                            for door-to-door collection of solid waste on
                            regular basis
                          </p>
                          <p>
                            - Set up: segregation unit in the society, bins,
                            signage, and other infrastructure required for
                            managing daily waste.
                          </p>
                          <p>
                            - Monitoring: Monitoring is done on a periodic
                            basis, to keep a check if the program is going in
                            the right direction and in the right manner. This is
                            done through proper reporting by the housekeeping
                            staff and gaining feedback from the volunteers.
                          </p>
                          <p>
                            - Recycling: Ensure The Kabadiwala team collects the
                            segregated waste on a weekly/monthly basis depending
                            upon the quantum of waste generated, and sends them
                            for recycling, composting and required treatment of
                            the hazardous waste.
                          </p>
                          <p>
                            - Certification: Certify the society as the Green
                            Society after the successful completion of a year.
                          </p>
                          <p className="mb-5">
                            - Reporting: Daily reporting of waste collected,
                            segregated and other key metrics.
                          </p>
                          <p>Qualification :-</p>
                          <p>
                            - Bachelor’s degree in areas related environment and
                            social change.
                          </p>
                          <p>
                            - Preferred knowledge of solid waste management with
                            minimum 1 years’ of experience
                          </p>
                          <p>- Flexible for travelling.</p>
                          <p>
                            - Team player with a commitment to meeting
                            deadlines, patience to manage housekeeping staff.
                          </p>
                          <p>
                            - Aptitude to thrive in fast paced multi-tasking
                            environment.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="col-lg-4 col-12 px-lg-10"
                  style={{ transform: "translate(0px, -180px)" }}
                >
                  {/* <SmallForm /> */}

                  <div
                    className="container-bg-2 p-lg-9 p-7 rounded-5 d-flex align-items-center "
                    style={{ minHeight: 450 }}
                  >
                    <div className="col-12">
                      <h5 className="text-center mb-5">Apply for this role</h5>
                   

                      <form>
                        <div className="row mb-4">
                          <Form>
                            <p className=" fg-inverse-3"> Name</p>
                            <FloatingLabel
                              controlId="floatingInput"
                              label="Name"
                              className="mb-3"
                            >
                              <Form.Control type="Name" placeholder="Name" />
                            </FloatingLabel>
                          </Form>
                        </div>
                        <div className="row mb-4">
                          <Form>
                            <p className=" fg-inverse-3"> Email</p>
                            <FloatingLabel
                              controlId="floatingInput"
                              label="Email"
                              className="mb-3"
                            >
                              <Form.Control type="Email" placeholder="Email" />
                            </FloatingLabel>
                          </Form>
                        </div>

                        <Row className="g-2 mb-4">
                          <Col md>
                            <p className=" fg-inverse-3"> Phone Number</p>

                            <FloatingLabel
                              controlId="floatingInputGrid"
                              label="Phone Number"
                            >
                              <Form.Control
                                type="Phone Number"
                                placeholder="Phone Number"
                              />
                            </FloatingLabel>
                          </Col>
                        </Row>

                        <div className="row mb-4">
                          <Form>
                            <Form.Group
                              className="mb-3"
                              controlId="exampleForm.ControlTextarea1"
                            >
                              <p className=" fg-inverse-3"> Message</p>
                              {/* <Form.Label></Form.Label> */}
                              <Form.Control as="textarea" rows={3} />
                            </Form.Group>
                          </Form>
                        </div>
                        <div className="row mb">
                          <p className=" fg-inverse-3"> File Upload</p>
                          <form>
                            <div className="mb-3">
                              <div
                                className="p-10 mt-3 d-flex align-items-center justify-contant-center rounded-4 fg-inverse-2 text-center drop-zone"
                                style={{
                                  cursor: "pointer",
                                  border: "1px dashed black",
                                }}
                              >
                                <span className="px-5"> <span style={{opacity:"0.0"}}>dkd</span> Click to upload file</span>
                                <input
                                  id="candidate-resume"
                                  type="file"
                                  className="position-absolute me-8"
                                  style={{ opacity: "0.0" ,left:"10"}}
                                />
                              </div>
                            </div>
                          </form>
                        </div>

                        <div className="text-center pt-4">
                          <button
                            style={{ border: "none" }}
                            className="btn-primary"
                            type="submit"
                          >
                            Send Message
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SalesAndAssociates;
