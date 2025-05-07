import React from "react";
import "./../../clientStyle/contentStylemain.css";
import "./../../clientStyle/TKWWebsite.Client.styles.css";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
// import Header from "../../components/Header";
// import 'bootstrap/dist/css/bootstrap.min.css';

const Contact = () => {
  return (
    <>
    {/* <Header/> */}

      <main className="content pt-13" b-sflvd4qzb0="">
        <div className="container">
          <div className="display-sm text-center">Get in touch with us</div>
          <div className="label-lg mt-6 text-center">
            <p className="d-inline fg-inverse-2">
              Any question or remarks? Just write us a
            </p>
            <p className="d-inline fg-success-2"> message!</p>
          </div>
          <div className="container-bg-1 m-5 mt-lg-10 rounded-6">
            <div className="row">
              <div className="col-lg-5 pe-lg-10 d-none d-lg-block">
                <div className="card card-media-top h-100  rounded-start-6" >
                  <div className="card-body m-7 pt-lg-10 ps-lg-10 pe-lg-10  rounded-6 h-100"style={{backgroundColor:"#01a1ff"}}>
                    <div className="headline-md fg-inverse-1">
                      Contact Information
                    </div>
                    <div className="body-lg mt-4 fg-inverse-1">
                      Fill up the form and our Team will get back to you within
                      24 hours
                    </div>
                    <br />
                    <div className="d-flex flex-row mt-6">
                      <div className="fg-inverse-1">
                        <svg
                          width={23}
                          height={23}
                          viewBox="0 0 23 23"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M14.0514 5C15.0281 5.19057 15.9258 5.66826 16.6295 6.37194C17.3331 7.07561 17.8108 7.97326 18.0014 8.95M14.0514 1C16.0807 1.22544 17.973 2.13417 19.4176 3.57701C20.8623 5.01984 21.7734 6.91101 22.0014 8.94M21.0014 16.92V19.92C21.0025 20.1985 20.9455 20.4742 20.8339 20.7293C20.7223 20.9845 20.5587 21.2136 20.3535 21.4019C20.1483 21.5901 19.906 21.7335 19.6421 21.8227C19.3783 21.9119 19.0988 21.9451 18.8214 21.92C15.7442 21.5856 12.7884 20.5341 10.1914 18.85C7.77523 17.3147 5.72673 15.2662 4.1914 12.85C2.50138 10.2412 1.44964 7.27099 1.1214 4.18C1.09641 3.90347 1.12927 3.62476 1.2179 3.36162C1.30652 3.09849 1.44897 2.85669 1.63616 2.65162C1.82336 2.44655 2.0512 2.28271 2.30519 2.17052C2.55917 2.05833 2.83374 2.00026 3.1114 2H6.1114C6.5967 1.99522 7.06719 2.16708 7.43516 2.48353C7.80313 2.79999 8.04348 3.23945 8.1114 3.72C8.23802 4.68007 8.47285 5.62273 8.8114 6.53C8.94594 6.88792 8.97506 7.27691 8.8953 7.65088C8.81555 8.02485 8.63026 8.36811 8.3614 8.64L7.0914 9.91C8.51495 12.4135 10.5879 14.4864 13.0914 15.91L14.3614 14.64C14.6333 14.3711 14.9766 14.1858 15.3505 14.1061C15.7245 14.0263 16.1135 14.0555 16.4714 14.19C17.3787 14.5286 18.3213 14.7634 19.2814 14.89C19.7672 14.9585 20.2108 15.2032 20.5279 15.5775C20.8451 15.9518 21.0136 16.4296 21.0014 16.92Z"
                            stroke="currentcolor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <div className="title-lg ms-5">
                        <a className="fg-inverse-1" href="tel:+919009775533">
                          +91-9009775533 
                        </a>
                      </div>
                    </div>
                    <br />
                    <div className="d-flex flex-row mt-6">
                      <div className="fg-inverse-1">
                        <svg
                          width={22}
                          height={18}
                          viewBox="0 0 22 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M3 1H19C20.1 1 21 1.9 21 3V15C21 16.1 20.1 17 19 17H3C1.9 17 1 16.1 1 15V3C1 1.9 1.9 1 3 1Z"
                            stroke="currentcolor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M21 3L11 10L1 3"
                            stroke="currentcolor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <div className="title-lg ms-5">
                        <a
                          className="fg-inverse-1"
                          href="mailto:contact@thekabadiwala.com"
                        >
                          info@goeasyservices.in
                        </a>
                      </div>
                    </div>
                    <br />
                    <div className="d-flex flex-row mt-6">
                      <div className="fg-inverse-1">
                        <svg
                          width={20}
                          height={24}
                          viewBox="0 0 20 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M19 10C19 17 10 23 10 23C10 23 1 17 1 10C1 7.61305 1.94821 5.32387 3.63604 3.63604C5.32387 1.94821 7.61305 1 10 1C12.3869 1 14.6761 1.94821 16.364 3.63604C18.0518 5.32387 19 7.61305 19 10Z"
                            stroke="currentcolor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M10 13C11.6569 13 13 11.6569 13 10C13 8.34315 11.6569 7 10 7C8.34315 7 7 8.34315 7 10C7 11.6569 8.34315 13 10 13Z"
                            stroke="currentcolor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <div className="ms-5 title-lg fg-inverse-1">
                      Address - B-nest incubation, Kalibadi Rd, Sector A, Berkheda, Bhopal, Madhya Pradesh 462001
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 p-9 pt-lg-0 ps-lg-0 pb-lg-0 col-lg-7 pe-lg-13">
              <form className=" p-1">
                  <div className="mt-lg-10 gap-2 d-flex-column align-content-between flex-wrap">
                   
                    <div className="row mb-2">
                      <Form>
                       <p  className=" fg-inverse-3"> Name</p>
                        <FloatingLabel
                          controlId="floatingInput"
                          label="Email address"
                          className="mb-3"
                        >
                          <Form.Control type="Name" placeholder="Name" />
                        </FloatingLabel>
                      </Form>
                    </div>


                

                    <Row className="g-2 mb-2">
                      <Col md>
                      <p  className=" fg-inverse-3">  Phone Number</p>
                       
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
                      <Col md>
                      <p  className=" fg-inverse-3">  Email</p>
                        
                        <FloatingLabel
                          controlId="floatingInputGrid"
                          label="Email"
                        >
                          <Form.Control type="Email " placeholder="Email " />
                        </FloatingLabel>
                      </Col>
                    </Row>
                   
                    <div className="row mb-2">
                      <Form>
                      <p  className=" fg-inverse-3"> Subject</p>
                        
                        <FloatingLabel
                          controlId="floatingInput"
                          label="Subject"
                          className="mb-3"
                        >
                          <Form.Control type="Subject" placeholder="Subject" />
                        </FloatingLabel>
                      </Form>
                    </div>

                    {/* </div> */}
                    <div className="row mb-2">
                      <Form>
                        <Form.Group
                          className="mb-3"
                          controlId="exampleForm.ControlTextarea1"
                        >
                          <p  className=" fg-inverse-3"> Message</p>
                          {/* <Form.Label></Form.Label> */}
                          <Form.Control as="textarea" rows={3} />
                        </Form.Group>
                      </Form>
                    </div>
                  </div>
                  <div className="mb-lg-5 me-lg-0 text-center float-lg-end">
                    <button className="btn-primary "style={{border:"none"}} type="submit">
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Contact;
