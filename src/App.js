import React from "react"
import Navbar from "./components/Navbar"
import Home from "./pages/Home";
import Footer from "./components/footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
    <div>
      <Navbar />
      <Home />
      <Footer />
    </div>
    </Router>
  );
}

export default App