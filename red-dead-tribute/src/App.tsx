import React from "react";
import Home from "./Components/General/Home";
import Navbar from "./Components/General/Navbar";

const App: React.FC = () => {
  return (
    <div className="app-container">
      <Navbar />
      <Home />
    </div>
  );
};

export default App;
