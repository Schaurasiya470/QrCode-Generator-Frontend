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
    <div className="d-flex justify-content-center my-4 flex-column align-items-center w-100 px-3">
      {/* Card container (only this will be exported) */}
      <div id="card-container" className="w-100">
        <Card
          id="business-card"
          className="business-card shadow-lg mx-auto"
          style={{
            width: "100%",          // Full width (responsive)
            maxWidth: "400px",      // Limit on large screens
            minHeight: "220px",     // Auto adjust on small screens
            borderRadius: "20px",
            overflow: "hidden",
            background: "linear-gradient(135deg, #6a11cb, #2575fc)",
            color: "white",
          }}
        >
          <Card.Body className="p-4 d-flex flex-column flex-md-row align-items-start align-items-md-center justify-content-between">
            {/* Left Section - Info */}
            <div style={{ flex: 2, width: "100%" }}>
              <h3 className="fw-bold mb-1">{data.name}</h3>
              <p className="mb-3">{data.position || ""}</p>

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
                        style={{ color: "#ffe082", fontWeight: "500", wordBreak: "break-word" }}
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
          </Card.Body>
        </Card>
      </div>

      {/* Download button OUTSIDE the card */}
      <Button
        onClick={downloadCard}
        className="fw-bold d-flex align-items-center mt-3"
        style={{
          background: "linear-gradient(135deg, #6a11cb, #2575fc)", // same gradient as card
          color: "white",
          border: "none",
          borderRadius: "20px",
          padding: "10px 20px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
        }}
      >
        <FaDownload className="me-2" /> Download
      </Button>

    </div>
  );


};

export default CardComponent;
