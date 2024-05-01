import React from "react";
import Navbar from "../components/Navbar";
import Slider from "../components/Slider";
import Slider2 from "../components/karusel";

const Home = () => {
  return (
    <div className="space-y-10">
      <Navbar />
      <Slider />
      <Slider2 />
    </div>
  );
};

export default Home;
