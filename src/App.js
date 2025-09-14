import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";
import HomeComponent from "./components/HomeComponent";
import BusinessCard from "./components/BusinessCardComponent";
import LinkComponent from "./components/LinkComponent";
import ImageComponent from "./components/ImageComponent";
import DocumentComponent from "./components/DocumentComponent";
import AboutComponent from "./components/AboutComponent";
import CardComponent from "./components/CardComponent";

function App() {
  const [sidebarCard, setSidebarCard] = useState(null);
  const handleGenerated = (data) => {
    setSidebarCard(data);
  };

  return (
    <Router>
      <HeaderComponent sidebarCard={sidebarCard} setSidebarCard={setSidebarCard}></HeaderComponent>
        <Routes>
          <Route path="/" element={<HomeComponent /> } />
          <Route path="/about" element={<AboutComponent /> } />
          <Route path="/link" element={<LinkComponent /> } />
          <Route path="/image" element={<ImageComponent /> } />
          <Route path="/document" element={<DocumentComponent /> } />
          <Route path="/get-card/:id" element={<CardComponent /> } />
          <Route path="/business-card" element={<BusinessCard onGenerate={handleGenerated} />}
          />
        </Routes>
        <FooterComponent></FooterComponent>
    </Router>
  );
}

export default App;
