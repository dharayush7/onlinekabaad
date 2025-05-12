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

  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    setIsLoading(true);
    e.preventDefault();
    try {
      const body = `name - ${formData.name}, subject - ${formData.subject}, phone - ${formData.phone}, email - ${formData.email}, message - ${formData.message}`;
      const result = await sentMail({ body, subject: formData.subject });
      alert(result.msg);
      setFormData({ name: "", phone: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.log(error);
      alert("Reponse catrued failed.");
    } finally {
      setIsLoading(false);
    }
  };

  const sentMail = async ({ subject, body: bd }) => {
    const response = await fetch("https://api.tfptechnologies.in/mail", {
      method: "POST",
      headers: {
        Authorization: `Bearer 702dd5f9-4d2e-4f50-95e8-a86d22f7dce8`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        subject,
        body: bd,
        to: "isscraptraders@gmail.com",
      }),
    });

    return response.json();
  };

  return (
    <Form className="p-0 m-0" onSubmit={handleSubmit}>
      <Form.Group className="mb-4">
        <Form.Label style={{ color: "var(--fg-default-2)" }}>Name</Form.Label>
        <Form.Control
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter your name"
          className="container-bg-2 border"
          style={{
            backgroundColor: "#f8f9fa",
            borderRadius: "8px",
            padding: "10px",
            fontSize: "16px",
            color: "var(--fg-primary-1)",
          }}
          required
        />
      </Form.Group>
      <Row>
        <Col lg={6}>
          <Form.Group className="mb-4">
            <Form.Label style={{ color: "var(--fg-default-2)" }}>
              Phone Number
            </Form.Label>
            <Form.Control
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter your phone number"
              className="container-bg-2 border"
              style={{
                backgroundColor: "#f8f9fa",
                borderRadius: "8px",
                padding: "10px",
                fontSize: "16px",
                color: "var(--fg-primary-1)",
              }}
              required
            />
          </Form.Group>
        </Col>
        <Col lg={6}>
          <Form.Group className="mb-4">
            <Form.Label style={{ color: "var(--fg-default-2)" }}>
              Email Address
            </Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email address"
              className="container-bg-2 border"
              style={{
                backgroundColor: "#f8f9fa",
                borderRadius: "8px",
                padding: "10px",
                fontSize: "16px",
                color: "var(--fg-primary-1)",
              }}
              required
            />
          </Form.Group>
        </Col>
      </Row>
      <Form.Group className="mb-4">
        <Form.Label style={{ color: "var(--fg-default-2)" }}>
          Subject
        </Form.Label>
        <Form.Control
          type="text"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          placeholder="Enter the subject"
          className="container-bg-2 border"
          style={{
            backgroundColor: "#f8f9fa",
            borderRadius: "8px",
            padding: "10px",
            fontSize: "16px",
            color: "var(--fg-primary-1)",
          }}
          required
        />
      </Form.Group>
      <Form.Group className="mb-4">
        <Form.Label style={{ color: "var(--fg-default-2)" }}>
          Message
        </Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Enter your message"
          className="container-bg-2 border"
          style={{
            backgroundColor: "#f8f9fa",
            borderRadius: "8px",
            padding: "10px",
            fontSize: "16px",
            color: "var(--fg-primary-1)",
          }}
          required
        />
      </Form.Group>

      <button
        className="my-custom-button float-end"
        style={
          isLoading
            ? {
                backgroundColor: "#006400",
              }
            : {}
        }
        type="submit"
        disabled={isLoading}
      >
        {isLoading ? "Sending..." : "Send Message"}
      </button>
    </Form>
  );
};

export default ContactForm;
