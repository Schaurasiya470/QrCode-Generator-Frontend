import React, { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    company: "",
    website: "",
  });

  const [qrUrl, setQrUrl] = useState(null);
  const [card, setCard] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post("https://web-qr-code-generator.onrender.com/api/generate", form);
    setQrUrl(res.data.qrUrl);
    setCard(res.data.card);
  };

  return (
    <div className="container py-4">
      <h2 className="text-center mb-4">📇 Business Card QR Generator</h2>

      {/* Form */}
      <div className="card shadow-sm p-4 mb-4">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Full Name</label>
            <input
              type="text"
              name="name"
              className="form-control"
              placeholder="Enter your full name"
              value={form.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Phone</label>
            <input
              type="text"
              name="phone"
              className="form-control"
              placeholder="Enter phone number"
              value={form.phone}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="Enter email address"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Company</label>
            <input
              type="text"
              name="company"
              className="form-control"
              placeholder="Enter company name"
              value={form.company}
              onChange={handleChange}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Website</label>
            <input
              type="url"
              name="website"
              className="form-control"
              placeholder="https://example.com"
              value={form.website}
              onChange={handleChange}
            />
          </div>

          <button type="submit" className="btn btn-primary w-100">
            Generate QR
          </button>
        </form>
      </div>

      {/* Result */}
      {qrUrl && card && (
        <div className="text-center">
          <h3>Your QR Code</h3>
          <img
            src={qrUrl}
            alt="QR Code"
            className="img-fluid mb-3"
            style={{ maxWidth: "250px" }}
          />

          <div className="card shadow-sm p-3">
            {console.log('card',card)}
            <h4>{card.name}</h4>
            <p><strong>Company:</strong> {card.company}</p>
            <p>
              📞 <a href={`tel:${card.phone}`}>{card.phone}</a><br />
              ✉️ <a href={`mailto:${card.email}`}>{card.email}</a><br />
              🌐 <a href={card.website} target="_blank" rel="noreferrer">{card.website}</a>
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;