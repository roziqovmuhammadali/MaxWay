import React from "react";
import Navbar from "../components/Navbar";
import Slider from "../components/Slider";
import Slider2 from "../components/karusel";
import Hero from "../components/Hero";

const Home = () => {
  return (
    <div className="space-y-10">
      <Navbar />
      <Slider />
      <Slider2 />
      <Hero />
    </div>
  );
};

export default Home;
