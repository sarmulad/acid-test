import React from "react";
import Header from "./components/header/Header";
import Features from "./pages/Home";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="*" element={<Navigate to="/" />} />
          <Route path="/" element={<Features />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
