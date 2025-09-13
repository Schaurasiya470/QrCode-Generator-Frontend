import { Col, Container, Row } from "react-bootstrap";
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const FooterComponent = () => {
  return (
    <footer
      style={{ backgroundColor: "#111827", color: "#F9FAFB" }}
      className="pt-5 pb-4 mt-auto"
    >
      <Container>
        <Row className="text-center text-md-start">
          <Col md={3} className="mb-4">
            <h5 className="fw-bold">About</h5>
            <p style={{ color: "#d1d5db", fontSize: "0.95rem" }}>
              QR Code Generator helps you create & share digital business cards,
              links, and more in seconds.
            </p>
          </Col>

          <Col md={3} className="mb-4">
            <h5 className="fw-bold">Docs</h5>
            <ul className="list-unstyled">
              <li>
                <a href="/about" className="text-light text-decoration-none">
                  Getting Started
                </a>
              </li>
              <li>
                <a href="/about" className="text-light text-decoration-none">
                  API Documentation
                </a>
              </li>
              <li>
                <a href="/about" className="text-light text-decoration-none">
                  Examples
                </a>
              </li>
            </ul>
          </Col>

          <Col md={3} className="mb-4">
            <h5 className="fw-bold">Resources</h5>
            <ul className="list-unstyled">
              <li>
                <a href="/about" className="text-light text-decoration-none">
                  Pricing
                </a>
              </li>
              <li>
                <a href="/about" className="text-light text-decoration-none">
                  Blog
                </a>
              </li>
              <li>
                <a href="/about" className="text-light text-decoration-none">
                  Support
                </a>
              </li>
            </ul>
          </Col>

          <Col md={3} className="mb-4">
            <h5 className="fw-bold">Follow Us</h5>
            <div className="d-flex justify-content-center justify-content-md-start gap-3 mt-2">
              <a href="https://facebook.com/sachin-chaurasiya" target="_blank" rel="noreferrer" className="text-light">
                <FaFacebook size={22} />
              </a>
              <a href="https://x.com/MrSachinCh" target="_blank" rel="noreferrer" className="text-light">
                <FaTwitter size={22} />
              </a>
              <a href="https://github.com/Schaurasiya470" target="_blank" rel="noreferrer" className="text-light">
                <FaGithub size={22} />
              </a>
              <a href="https://www.linkedin.com/in/mr-sachin-ch/" target="_blank" rel="noreferrer" className="text-light">
                <FaLinkedin size={22} />
              </a>
            </div>
          </Col>
        </Row>

        <hr className="border-secondary" />

        <div className="text-center small" style={{ color: "#9CA3AF" }}>
          © {new Date().getFullYear()} QR Code Generator. Built with ❤️ for sharing digital identities.
        </div>
      </Container>
    </footer>
  );
};

export default FooterComponent;
