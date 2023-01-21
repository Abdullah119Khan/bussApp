import React from "react";
import Home from "./pages/Home/Home";
import { Routes, Route } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Fleet from "./pages/Fleet/Fleet";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Sevenseater from "./pages/SevenSeater/Sevenseater";
import FourtheenSeater from "./pages/Fourtheenseater/FourtheenSeater";

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
        <Route path="/7seater" element={<Sevenseater />} />
        <Route path="/14seater" element={<FourtheenSeater />} />
      </Routes>
    </div>
  );
}

export default App;
