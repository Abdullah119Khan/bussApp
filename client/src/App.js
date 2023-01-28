import React from "react";
import Home from "./pages/Home/Home";
import { Routes, Route } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import Sevenseater from "./pages/SevenSeater/Sevenseater";
import FourtheenSeater from "./pages/Fourtheenseater/FourtheenSeater";
import EitheenSeater from "./pages/Eitheenseater/EitheenSeater";
import TwentytwoSeater from "./pages/TwetytwoSeater/TwentytwoSeater";
import ThirtySeater from "./pages/ThirtySeater/ThirtySeater";
import ThirtyThreeSeater from "./pages/ThirtyThreeSeater/ThirtyThreeSeater";
import ThirtyFiveSeater from "./pages/ThirtyFiveSeater/ThirtyFiveSeater";
import FiftySeater from "./pages/FiftySeater/FiftySeater";
import Rates from "./pages/Rates/Rates";
import CityTour from "./pages/CityTour/CityTour";
import CorporateTranfer from "./pages/CorporationTransfor/CorporateTranfer";
import DubaiAirportTransfer from "./pages/DubaiAirportTransfer/DubaiAirportTransfer";
import AttractionDubai from "./pages/AttractionDubai/AttractionDubai";
import SchoolBus from "./pages/SchoolBus/SchoolBus";

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
        <Route path="/18seater" element={<EitheenSeater />} />
        <Route path="/22seater" element={<TwentytwoSeater />} />
        <Route path="/30seater" element={<ThirtySeater />} />
        <Route path="/33seater" element={<ThirtyThreeSeater />} />
        <Route path="/35seater" element={<ThirtyFiveSeater />} />
        <Route path="/50seater" element={<FiftySeater />} />
        <Route path="/rate" element={<Rates />} />
        <Route path="/citytour" element={<CityTour />} />
        <Route path="/corporate" element={<CorporateTranfer />} />
        <Route
          path="/dubaiairporttransfer"
          element={<DubaiAirportTransfer />}
        />
        <Route path="/attractionindubai" element={<AttractionDubai />} />
        <Route path="/schoolbus" element={<SchoolBus />} />
      </Routes>
    </div>
  );
}

export default App;
