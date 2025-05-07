import React from 'react'
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
const SmallForm = () => {
  return (
    <div>
      <div
              className="container-bg-2 p-lg-9 p-7 rounded-5 d-flex align-items-center"
              style={{ minHeight: 450 }}
            >
              <div className="col-12">
                <h5 className="text-center">Get in touch with us</h5>
                <div className="label-sm mt-3 text-center pb-lg-8 pb-5">
                  <p className="d-inline fg-inverse-2">
                    Any question or remarks? Just write us a
                  </p>
                  <p className="d-inline fg-success-2">message!</p>
                </div>
                
                

                <form>
                <div className="row mb-5">
                      <Form>
                       <p  className=" fg-inverse-3"> Name</p>
                        <FloatingLabel
                          controlId="floatingInput"
                          label="Name"
                          className="mb-3"
                        >
                          <Form.Control type="Name" placeholder="Name" />
                        </FloatingLabel>
                      </Form>
                    </div>

                 
                    <Row className="g-2 mb-5">
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
                    
                    </Row>

                  <div className="row mb-5">
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

                  <div className="text-center pt-4">
                    <button style={{border:"none"}} className="btn-primary" type="submit">
                      Send Message
                    </button>
                  </div>
                </form>



              </div>
            </div>
    </div>
  )
}

export default SmallForm
