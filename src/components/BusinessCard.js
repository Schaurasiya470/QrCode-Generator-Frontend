import React, { useState } from "react";
import axios from "axios";

function BusinessCard({ onGenerate }) {
  const [form, setForm] = useState({ name: "", phone: "", email: "", company: "", website: ""});
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => setForm({...form, [e.target.name]: e.target.value});

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axios.post("https://web-qr-code-generator.onrender.com/api/generate", form);
      // res.data = { qrUrl, card }
      if (onGenerate) onGenerate(res.data);     // <-- send to parent (App)
    } catch (err) {
      console.error(err);
      alert("Failed to generate QR");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2 className="text-center mb-4">📇 Business Card QR Generator</h2>

      <div className="card shadow-sm p-4">
        <form onSubmit={handleSubmit}>
          <label className="form-label">Full Name</label>
          <input name="name" value={form.name} onChange={handleChange} className="form-control mb-3" required />

          <label className="form-label">Phone</label>
          <input name="phone" value={form.phone} onChange={handleChange} className="form-control mb-3" required />

          <label className="form-label">Email</label>
          <input name="email" type="email" value={form.email} onChange={handleChange} className="form-control mb-3" required />

          <label className="form-label">Company</label>
          <input name="company" value={form.company} onChange={handleChange} className="form-control mb-3" />

          <label className="form-label">Website</label>
          <input name="website" value={form.website} onChange={handleChange} className="form-control mb-3" />

          <button type="submit" className="btn btn-primary w-100" disabled={loading}>
            {loading ? "Generating..." : "Generate & Show in Sidebar"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default BusinessCard;
