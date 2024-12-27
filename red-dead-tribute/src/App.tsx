import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/General/Home";
import Navbar from "./Components/General/Navbar";
import Locations from "./Components/Locations/Locations";
import Overview from "./Components/About/Overview";
import Gallery from "./Components/About/Gallery";
import Footer from "./Components/General/Footer";

const App: React.FC = () => {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/locations" element={<Locations />} />
          <Route path="/overview" element={<Overview />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
