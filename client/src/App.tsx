import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BaC from "./pages/BaC/BaC";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BaC />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
