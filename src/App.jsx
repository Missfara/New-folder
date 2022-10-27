import React from "react";
import { Custom404 } from "./pages/Custom404";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { User } from "./pages/User";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<User />} />
        <Route path="*" element={<Custom404 />} />
      </Routes>
    </Router>
  );
}

export default App;
