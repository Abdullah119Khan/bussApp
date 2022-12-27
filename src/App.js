import React from "react";
import Home from "./pages/Home/Home";
import { Routes, Route } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Fleet from "./pages/Fleet/Fleet";

function App() {
  AOS.init({
    duration: 2500,
    delay: 400,
  });

  return (
    <div>
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/fleet" element={<Fleet />} />
      </Routes>
    </div>
  );
}

export default App;
