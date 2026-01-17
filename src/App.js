import React from "react"
import Navbar from "./components/Navbar"
import Home from "./pages/Home";
import Contact from "./pages/contact";
import Recipes from "./pages/recipes";
import About from "./pages/about";
import Footer from "./components/footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
<Router>
      <div className="App">
        <Navbar />
        <div className="main-content"> 
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/recipes" element={<Recipes />} />
            <Route path="/recipes/:id" element={<Recipes />} /> 
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />   
          </Routes>
        </div>

        <Footer />
      </div>
    </Router>
  );
}

export default App