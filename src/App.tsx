import React from "react";
import Features from "./pages/Home";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import PrivacyPolicy from "./pages/PrivacyPolicy";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<Navigate to="/" />} />
          <Route path="/" element={<Features />} />
          <Route path="/privacy" element={<PrivacyPolicy/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
