// ContactForm.js
import React, { useState } from "react";
import { Form, Row, Col } from "react-bootstrap";


const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message sent successfully!');
    setFormData({ name: "", phone: "", email: "", subject: "", message: "" });
    // emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formData, 'YOUR_USER_ID')
    //   .then((response) => {
    //     alert('Message sent successfully!');
    //     setFormData({ name: "", phone: "", email: "", subject: "", message: "" });
    //   })
    //   .catch((error) => {
    //     console.error('EmailJS Error:', error);
    //     alert('Failed to send message. Please try again later.');
    //   });
  };

  return (
    <Form className="p-4" onSubmit={handleSubmit}>
      <Form.Group className="mb-4">
        <Form.Label style={{ color: "var(--fg-default-2)" }}>Name</Form.Label>
        <Form.Control
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter your name"
          className="container-bg-2 border"
          style={{ backgroundColor: "#f8f9fa", borderRadius: "8px", padding: "10px", fontSize: "16px", color: "var(--fg-primary-1)" }}
          required
        />
      </Form.Group>
      <Row>
        <Col lg={6}>
          <Form.Group className="mb-4">
            <Form.Label style={{ color: "var(--fg-default-2)" }}>Phone Number</Form.Label>
            <Form.Control
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter your phone number"
              className="container-bg-2 border"
              style={{ backgroundColor: "#f8f9fa", borderRadius: "8px", padding: "10px", fontSize: "16px", color: "var(--fg-primary-1)" }}
              required
            />
          </Form.Group>
        </Col>
        <Col lg={6}>
          <Form.Group className="mb-4">
            <Form.Label style={{ color: "var(--fg-default-2)" }}>Email Address</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email address"
              className="container-bg-2 border"
              style={{ backgroundColor: "#f8f9fa", borderRadius: "8px", padding: "10px", fontSize: "16px", color: "var(--fg-primary-1)" }}
              required
            />
          </Form.Group>
        </Col>
      </Row>
      <Form.Group className="mb-4">
        <Form.Label style={{ color: "var(--fg-default-2)" }}>Subject</Form.Label>
        <Form.Control
          type="text"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          placeholder="Enter the subject"
          className="container-bg-2 border"
          style={{ backgroundColor: "#f8f9fa", borderRadius: "8px", padding: "10px", fontSize: "16px", color: "var(--fg-primary-1)" }}
          required
        />
      </Form.Group>
      <Form.Group className="mb-4">
        <Form.Label style={{ color: "var(--fg-default-2)" }}>Message</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Enter your message"
          className="container-bg-2 border"
          style={{ backgroundColor: "#f8f9fa", borderRadius: "8px", padding: "10px", fontSize: "16px", color: "var(--fg-primary-1)" }}
          required
        />
      </Form.Group>

      <button className="my-custom-button float-end" type="submit">
        Send Message
      </button>
    </Form>
  );
};

export default ContactForm;