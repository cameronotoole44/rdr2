import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/General/Home";
import Navbar from "./Components/General/Navbar";
import Locations from "./Components/Locations/Locations";
import Overview from "./Components/About/Overview";
import Gallery from "./Components/About/Gallery";
import WildlifeGrid from "./Components/Wildlife/Wildlife";
import FishGrid from "./Components/Wildlife/Fish";
import LegendaryGrid from "./Components/Wildlife/Legendary";
import Vanderlinde from "./Components/Gang/VanDerLinde";
import Weaponry from "./Components/Weaponry/Weaponry";
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
          <Route path="/wildlife" element={<WildlifeGrid />} />
          <Route path="/fish" element={<FishGrid />} />
          <Route path="/legendary" element={<LegendaryGrid />} />
          <Route path="/the-gang" element={<Vanderlinde />} />
          <Route path="/weaponry" element={<Weaponry />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
