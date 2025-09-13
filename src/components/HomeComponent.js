import { Link } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";

const HomeComponent = () => {
  return (
    <section
      style={{
        background: "radial-gradient(circle at top left, #1e3c72, #2a5298, #000)",
        minHeight: "85vh",
        color: "#fff",
        position: "relative",
        overflow: "hidden",
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

      {/* Moon (hidden on very small screens) */}
      <div
        className="moon"
        style={{
          position: "absolute",
          top: "40px",
          right: "60px",
          width: "120px",
          height: "120px",
          borderRadius: "50%",
          background: "radial-gradient(circle, #fff 70%, #ccc 100%)",
          boxShadow: "0 0 40px rgba(255,255,255,0.8)",
          zIndex: 0,
        }}
      ></div>

      {/* Content */}
      <Container
        className="h-100 d-flex align-items-center"
        style={{ paddingTop: "60px", paddingBottom: "60px" }}
      >
        <Row className="w-100">
          <Col md={7} lg={6} style={{ zIndex: 2 }}>
            <h1
              className="fw-bold mb-4"
              style={{
                fontSize: "2.5rem",
                lineHeight: "1.3",
              }}
            >
              Create & Share QR Codes Instantly
            </h1>
            <p
              className="mb-4"
              style={{
                fontSize: "1.2rem",
                lineHeight: "1.6",
              }}
            >
              Transform your business cards, links, and contact details into
              scannable QR codes in seconds. Share smarter, faster, and more
              effectively — whether online or offline.
            </p>
            <Button
              as={Link}
              to="/business-card"
              variant="light"
              size="lg"
              style={{
                padding: "12px 28px",
                fontSize: "1.1rem",
                borderRadius: "8px",
                color: "#1e3c72",
                fontWeight: "600",
                textDecoration: "none", // ensures it looks like a button, not a link
              }}
            >
              🚀 Generate Your QR Now
            </Button>
          </Col>
        </Row>
      </Container>

      {/* Responsive fixes */}
      <style>{`
        @media (max-width: 768px) {
          .moon {
            width: 70px !important;
            height: 70px !important;
            top: 20px !important;
            right: 20px !important;
          }
          h1 {
            font-size: 1.8rem !important;
          }
          p {
            font-size: 1rem !important;
          }
        }
        @media (max-width: 480px) {
          .moon {
            display: none; /* hide moon on very small screens */
          }
        }
      `}</style>
    </section>
  );
};

export default HomeComponent;
