import React, { useState } from "react";
import axios from "axios";
import { Container, Row, Col, Card } from "react-bootstrap";
import html2canvas from "html2canvas";
import { FaDownload } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function BusinessCard() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    mobile: "",
    email: "",
    company: "",
    website: "",
  });
  const [loading, setLoading] = useState(false);
  const [qrData, setQrData] = useState(null);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axios.post(
        "https://web-qr-code-generator.onrender.com/generate-card",
        form
      );
      setQrData(res.data); // save API QR
    } catch (err) {
      console.error(err);
      alert("Failed to generate QR");
    } finally {
      setLoading(false);
    }
  };

  const isRealQr = qrData && qrData.qrUrl && !qrData.qrUrl.includes("Demo-QR");

  const downloadCard = async () => {
    const el = document.getElementById("preview-card");
    if (!el) return;
    const canvas = await html2canvas(el, { scale: 2 });
    const link = document.createElement("a");
    const name = (form.name || "business-card").replace(/\s+/g, "-");
    link.href = canvas.toDataURL("image/png");
    link.download = `${name}.png`;
    link.click();
  };

  const downloadQrOnly = () => {
    if (!qrData?.qrUrl) return;
    const link = document.createElement("a");
    link.href = qrData.qrUrl;
    link.download = `${(form.name || "qr")}-qr.png`;
    link.click();
  };

  const clearCard = () => {
    setQrData(null);
    setForm({ name: "", phone: "", email: "", company: "", website: "" });
  };

  return (
    <Container className="my-4">
     <Row className="g-4 align-items-start mx-1">
        <h2
          className="text-center mb-4 p-1 rounded"
          style={{
            background: "linear-gradient(90deg, #007bff, #6610f2)",
            color: "white",
            boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
            fontWeight: "bold",
            letterSpacing: "1px",
          }}
        >
          📇 Business Card QR Generator
        </h2>
      </Row>

      <Row className="g-4 align-items-start">
        <Col xs={12} md={8}>
          <Card className="shadow-sm p-4 h-100">
            <form onSubmit={handleSubmit}>
              <Row className="mb-3">
                <Col xs={12}>
                  <label className="form-label fw-semibold">Full Name</label>
                  <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="Enter full name"
                    required
                  />
                </Col>
              </Row>

              <Row className="mb-3">
                <Col xs={12} md={6}>
                  <label className="form-label fw-semibold">Mobile</label>
                  <input
                    name="mobile"
                    value={form.mobile}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="+91 98765 43210"
                    required
                  />
                </Col>
                <Col xs={12} md={6}>
                  <label className="form-label fw-semibold">Email</label>
                  <input
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="example@company.com"
                    required
                  />
                </Col>
              </Row>

              <Row className="mb-3">
                <Col xs={12} md={6}>
                  <label className="form-label fw-semibold">Company</label>
                  <input
                    name="company"
                    value={form.company}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="Your Company"
                  />
                </Col>
                <Col xs={12} md={6}>
                  <label className="form-label fw-semibold">Website</label>
                  <input
                    name="website"
                    value={form.website}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="https://example.com"
                  />
                </Col>
              </Row>

              <button
                type="submit"
                className="btn btn-primary w-100 mt-2"
                disabled={loading}
              >
                {loading ? "Generating..." : "Generate QR"}
              </button>
            </form>
          </Card>

        </Col>

        <Col xs={12} md={4}>
          <Card
            id="preview-card"
            className="shadow-sm text-center p-3 h-100 d-flex flex-column justify-content-center"
          >
            <img
              src={
                qrData
                  ? qrData.qrUrl
                  : "/assets/qr_sample.png"
              }
              alt="Generated QR"
              className="img-fluid mb-3"
              style={{ maxWidth: "200px", margin: "0 auto" }}
            />

            {qrData ? (
              <>
               <button
                className="btn btn-primary mt-3"
                onClick={() => navigate(`/get-card/${qrData.card._id}`)}
              >
                Show Your Business Card
              </button>
              </>
            ) : (
              <p className="text-muted">
                This is a demo QR. Fill the form & generate your own.
              </p>
            )}
          </Card>

          <div className="d-grid gap-2 mt-3">
            <button
              className="btn btn-success btn-sm"
              onClick={downloadCard}
              disabled={!isRealQr}
            >
              <FaDownload className="me-2" />
              Download Card
            </button>

            <button
              className="btn btn-outline-primary btn-sm"
              onClick={downloadQrOnly}
              disabled={!isRealQr}
            >
              Download QR Only
            </button>

            <button className="btn btn-outline-danger btn-sm" onClick={clearCard}>
              Clear
            </button>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default BusinessCard;
