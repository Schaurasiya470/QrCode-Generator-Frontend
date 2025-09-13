import { Container, Row, Col, Card } from "react-bootstrap";

const AboutComponent = () => {
  return (
    <section
      style={{
        background: "radial-gradient(circle at top left, #1e3c72, #2a5298, #000)",
        minHeight: "85vh",
        color: "#fff",
        position: "relative",
        overflow: "hidden",
        paddingTop: "60px",
        paddingBottom: "60px",
      }}
    >
      {/* Stars */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage:
            "radial-gradient(2px 2px at 20px 30px, #fff, transparent), radial-gradient(2px 2px at 50px 80px, #fff, transparent), radial-gradient(2px 2px at 120px 150px, #fff, transparent), radial-gradient(1.5px 1.5px at 200px 300px, #fff, transparent), radial-gradient(2px 2px at 400px 200px, #fff, transparent), radial-gradient(2px 2px at 600px 100px, #fff, transparent)",
          backgroundRepeat: "repeat",
          backgroundSize: "800px 800px",
          zIndex: 0,
        }}
      ></div>

      {/* Moon */}
      <div
        className="moon"
        style={{
          position: "absolute",
          top: "40px",
          right: "60px",
          width: "100px",
          height: "100px",
          borderRadius: "50%",
          background: "radial-gradient(circle, #fff 70%, #ccc 100%)",
          boxShadow: "0 0 40px rgba(255,255,255,0.8)",
          zIndex: 0,
        }}
      ></div>

      {/* Content */}
      <Container style={{ position: "relative", zIndex: 2 }}>
        <Row className="justify-content-center text-center mb-5">
          <Col md={8}>
            <h2 className="fw-bold mb-4" style={{ fontSize: "2.2rem" }}>
              🌌 About Us
            </h2>
            <p style={{ fontSize: "1.2rem", lineHeight: "1.6" }}>
              We believe in connecting the physical and digital world seamlessly.  
              Our mission is to make sharing information as easy as scanning a QR code —  
              no hassle, no barriers, just instant connections.
            </p>
          </Col>
        </Row>

        <Row className="g-4">
          <Col md={4}>
            <Card className="h-100 text-center bg-transparent border-light shadow-lg p-3 rounded-4">
              <Card.Body>
                <h4>🚀 Our Mission</h4>
                <p>
                  Empower businesses and individuals with easy-to-use QR code solutions
                  that save time and boost connectivity.
                </p>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="h-100 text-center bg-transparent border-light shadow-lg p-3 rounded-4">
              <Card.Body>
                <h4>🌍 Our Vision</h4>
                <p>
                  A world where information flows freely and instantly — where every
                  connection starts with a scan.
                </p>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="h-100 text-center bg-transparent border-light shadow-lg p-3 rounded-4">
              <Card.Body>
                <h4>💡 Why Choose Us</h4>
                <p>
                  We focus on simplicity, speed, and reliability. Our tools are designed
                  to be intuitive, secure, and future-ready.
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* Responsive tweaks */}
      <style>{`
        @media (max-width: 768px) {
          .moon {
            width: 70px !important;
            height: 70px !important;
            top: 20px !important;
            right: 20px !important;
          }
          h2 {
            font-size: 1.8rem !important;
          }
          p {
            font-size: 1rem !important;
          }
        }
        @media (max-width: 480px) {
          .moon {
            display: none;
          }
        }
      `}</style>
    </section>
  );
};

export default AboutComponent;
