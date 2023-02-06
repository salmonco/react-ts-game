import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BoC from "./pages/BoC";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BoC />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
