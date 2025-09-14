import React, { useEffect, useState } from "react";
import { Card, Row, Col, Button, Spinner } from "react-bootstrap";
import html2canvas from "html2canvas";
import { FaBuilding, FaDownload, FaEnvelope, FaGlobe, FaPhone } from "react-icons/fa";
import { useParams } from "react-router-dom";

const CardComponent = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  // fetch business card from API
  useEffect(() => {
    const fetchCard = async () => {
      try {
        const res = await fetch(`https://web-qr-code-generator.onrender.com/get-card/${id}`);
        const json = await res.json();
        setData(json.data);
      } catch (err) {
        console.error("Failed to fetch card:", err);
      } finally {
        setLoading(false);
      }
    };
    if (id) fetchCard();
  }, [id]);

  const downloadCard = async () => {
    const el = document.getElementById("business-card");
    if (!el) return;
    const canvas = await html2canvas(el, { scale: 2 });
    const link = document.createElement("a");
    link.href = canvas.toDataURL("image/png");
    const name = (data?.name || "business-card").replace(/\s+/g, "-");
    link.download = `${name}.png`;
    link.click();
  };

  if (loading) {
    return (
      <div className="text-center my-5">
        <Spinner animation="border" role="status" />
        <p className="mt-2">Loading business card...</p>
      </div>
    );
  }

  if (!data) {
    return <p className="text-center text-danger">No card data found.</p>;
  }

  return (
  <div className="d-flex justify-content-center my-4">
    <Card
      id="business-card"
      className="business-card shadow-lg"
      style={{
        width: "700px",
        height: "280px",
        borderRadius: "20px",
        overflow: "hidden",
        background: "linear-gradient(135deg, #6a11cb, #2575fc)", // colorful bg
        color: "white"
      }}
    >
      <Card.Body className="p-4 d-flex flex-row align-items-center justify-content-between">
        
        {/* Left Section - Info */}
        <div style={{ flex: 2 }}>
          <h3 className="fw-bold mb-1">{data.name}</h3>
          <p className="mb-3">{data.position || "Software Engineer"}</p>

          <Row className="gy-2">
            <Col xs={12}>
              <p className="mb-1">
                <FaPhone className="me-2" />
                {"+91 " + data.mobile}
              </p>
            </Col>
            <Col xs={12}>
              <p className="mb-1 text-break">
                <FaEnvelope className="me-2" />
                {data.email}
              </p>
            </Col>
            {data.websiteLink && (
              <Col xs={12}>
                <p className="mb-1 text-break">
                  <FaGlobe className="me-2" />
                  <a
                    href={data.websiteLink}
                    target="_blank"
                    rel="noreferrer"
                    style={{ color: "#ffe082", fontWeight: "500" }}
                  >
                    {data.websiteLink}
                  </a>
                </p>
              </Col>
            )}
            {data.company && (
              <Col xs={12}>
                <p className="mb-1">
                  <FaBuilding className="me-2" />
                  {data.company}
                </p>
              </Col>
            )}
          </Row>
        </div>

        {/* Right Section - Logo + Button */}
        <div
          className="d-flex flex-column align-items-center justify-content-center"
          style={{ flex: 1 }}
        >
          <img
            src="/assets/logo.jpg"
            alt="logo"
            style={{
              borderRadius: "50%",
              width: "90px",
              height: "90px",
              border: "3px solid white",
              marginBottom: "20px"
            }}
          />

          <Button
            variant="light"
            onClick={downloadCard}
            className="fw-bold d-flex align-items-center"
          >
            <FaDownload className="me-2" /> Download
          </Button>
        </div>
      </Card.Body>
    </Card>
  </div>
);

};

export default CardComponent;
