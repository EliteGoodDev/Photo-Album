import React from "react";
import LandingPage from "./pages/LandingPage";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import initializeStore from "./utils/initializeStore";

function App() {
  initializeStore();
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
