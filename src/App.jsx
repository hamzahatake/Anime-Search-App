import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AnimeDetail from "./pages/AnimeDetail";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/anime/:id" element={<AnimeDetail />} />
        <Route
          path="*"
          element={
            <p className="text-white text-center mt-10">
              Page not found.
            </p>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
