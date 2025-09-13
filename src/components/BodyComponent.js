// src/components/Layout.js
import React from "react";
import { Container, Navbar, Nav, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import html2canvas from "html2canvas";
import { FaDownload, FaFacebook, FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";

const Layout = ({ children, sidebarCard, setSidebarCard }) => {
  const downloadSidebarCard = async () => {
    const el = document.getElementById("sidebar-card");
    if (!el) return;
    // increase scale for better resolution
    const canvas = await html2canvas(el, { scale: 2 });
    const link = document.createElement("a");
    link.href = canvas.toDataURL("image/png");
    const name = (sidebarCard?.card?.name || "business-card").replace(/\s+/g, "-");
    link.download = `${name}.png`;
    link.click();
  };

  const downloadQrOnly = () => {
    if (!sidebarCard?.qrUrl) return;
    const link = document.createElement("a");
    link.href = sidebarCard.qrUrl;
    link.download = `${(sidebarCard?.card?.name || "qr")}-qr.png`;
    link.click();
  };

  const clearSidebar = () => {
    if (setSidebarCard) setSidebarCard(null);
  };

  return (
    <div className="d-flex flex-column min-vh-100">
      {/* Header */}
      

      {/* Body */}
      <div className="d-flex flex-grow-1">
        {/* Left Sidebar */}
        <aside style={{ width: 280, backgroundColor: "#1E293B", color: "#fff", minHeight: "100%" }} className="p-3">
          {sidebarCard ? (
            <>
              <div id="sidebar-card" style={{ background: "#fff", color: "#111827", borderRadius: 8, padding: 14 }}>
                <div style={{ textAlign: "center", marginBottom: 8 }}>
                  <strong style={{ fontSize: 16 }}>{sidebarCard.card?.name}</strong>
                </div>

                <div style={{ display: "flex", justifyContent: "center", marginBottom: 8 }}>
                  <img src={sidebarCard.qrUrl} alt="qr" style={{ width: 150, height: 150 }} />
                </div>

                <div style={{ fontSize: 13, lineHeight: 1.4 }}>
                  <div><strong>Company:</strong> {sidebarCard.card?.company || "-"}</div>
                  <div>📞 <a href={`tel:${sidebarCard.card?.phone}`} style={{ color: "#2563EB" }}>{sidebarCard.card?.phone}</a></div>
                  <div>✉️ <a href={`mailto:${sidebarCard.card?.email}`} style={{ color: "#2563EB" }}>{sidebarCard.card?.email}</a></div>
                  <div>🌐 <a href={sidebarCard.card?.website} target="_blank" rel="noreferrer" style={{ color: "#2563EB" }}>{sidebarCard.card?.website}</a></div>
                </div>
              </div>

              <div className="d-grid gap-2 mt-3">
                <button className="btn btn-success btn-sm" onClick={downloadSidebarCard}><FaDownload className="me-2" />Download Card</button>
                <button className="btn btn-outline-light btn-sm" onClick={downloadQrOnly}>Download QR Only</button>
                <button className="btn btn-outline-light btn-sm" onClick={clearSidebar}>Clear</button>
              </div>
            </>
          ) : (
            <>
              <div style={{ fontWeight: 700, marginBottom: 12, fontSize: 14 }}>Navigation</div>
              <Nav className="flex-column">
                <Nav.Link as={Link} to="/business-card" className="text-white">Business Card</Nav.Link>
                <Nav.Link as={Link} to="/links" className="text-white">Links</Nav.Link>
                <Nav.Link as={Link} to="/files" className="text-white">Files</Nav.Link>
                <Nav.Link as={Link} to="/images" className="text-white">Images</Nav.Link>
              </Nav>
            </>
          )}
        </aside>

        {/* Main */}
        <main style={{ flex: 1, background: "#F9FAFB", padding: 24 }}>
          <Container fluid>
            {children}
          </Container>
        </main>
      </div>

      {/* Footer */}
      
    </div>
  );
};

export default Layout;
