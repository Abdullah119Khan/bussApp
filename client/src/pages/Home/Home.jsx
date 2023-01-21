import React from "react";
import Anoucement from "../../components/Anoucement/Anoucement";
import BussCard from "../../components/BussCard/BussCard";
import Footer from "../../components/Footer/Footer";
import Hero from "../../components/Hero/Hero";
import Navbar from "../../components/Navbar/Navbar";
import OurAdvanctage from "../../components/OurAdvantages/OurAdvanctage";
import OurTour from "../../components/OurTour/OurTour";
import Services from "../../components/Services/Services";

const Home = () => {
  return (
    <div>
      <Anoucement />
      <Navbar />
      <Hero />
      <BussCard />
      <Services />
      <OurTour />
      <OurAdvanctage />
      <Footer />
    </div>
  );
};

export default Home;
