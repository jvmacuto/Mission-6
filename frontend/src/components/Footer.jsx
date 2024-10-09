import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaLinkedin, FaFacebook, FaGithub } from "react-icons/fa";
import MailchimpForm from "./MailchimpForm";
import cat from "../assets/cat.png";

function Footer() {
  return (
    <div>
      <footer className="footer">
        <Container>
          <Row className="align-items-center">
            <MailchimpForm />
            <Col size={12} sm={6} className="text-start">
              <img src={cat} alt="Logo" />
            </Col>
            <Col size={12} sm={6} className="text-center text-sm-end">
              <div className="d-flex justify-content-end">
                <div className="social-icon">
                  <a href="https://www.linkedin.com/in/">
                    <FaLinkedin size={20} className="icon-white" />
                  </a>
                  <a href="https://www.facebook.com/">
                    <FaFacebook size={20} className="icon-white" />
                  </a>
                  <a href="https://wwww.github.com/">
                    <FaGithub size={20} className="icon-white" />
                  </a>
                </div>
              </div>
              <p className="mt-2">Copyright 2024. All Rights Reserved</p>
            </Col>
          </Row>
        </Container>
      </footer>
    </div>
  );
}

export default Footer;
