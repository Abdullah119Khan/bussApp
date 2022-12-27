import React from "react";
import About from "../../components/About/About";
import BussCard from "../../components/BussCard/BussCard";
import Footer from "../../components/Footer/Footer";
import Hero from "../../components/Hero/Hero";
import Navbar from "../../components/Navbar/Navbar";
import Services from "../../components/Services/Services";
import Slider from "../../components/Slider/Slider";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <BussCard />
      <Services />
      <Slider />
      <About />
      <Footer />
    </div>
  );
};

export default Home;
