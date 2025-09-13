import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import BusinessCard from "./components/BusinessCard";
import Home from "./components/Home"; // optional homepage component

function App() {
  // This state will hold the latest generated card (for the sidebar)
  const [sidebarCard, setSidebarCard] = useState(null);

  // handler passed to BusinessCard so it can push generated data up
  const handleGenerated = (data) => {
    // data = { qrUrl, card }
    setSidebarCard(data);
  };

  return (
    <Router>
      <Layout sidebarCard={sidebarCard} setSidebarCard={setSidebarCard}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/business-card"
            element={<BusinessCard onGenerate={handleGenerated} />}
          />
          {/* add other routes as needed */}
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
