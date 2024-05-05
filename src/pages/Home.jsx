import React from "react";
import Navbar from "../components/Navbar";
import Slider from "../components/Slider";
import Hero from "../components/Hero";
import MaxBox from "../components/MaxBox";
import ClabSendvich from "../components/ClabSendvich";
import Lavash from "../components/Lavash";
import Shaurma from "../components/Shaurma";
import Panini from "../components/Panini";
import Burger from "../components/Burger";
import DonarKabab from "../components/DonarKabab";
import HotDog from "../components/HotDog";
import Gazaklar from "../components/Gazaklar";
import Tamaddilar from "../components/Tamaddilar";
import Desert from "../components/Desert";
import Ichimlik from "../components/Ichimlik";

const Home = () => {
  return (
    <div className="space-y-10">
      <Navbar />
      <Slider />
      {/* <Slider2 /> */}
      {/* <AdaptiveHeight /> */}
      <Hero />
      <MaxBox />
      <ClabSendvich />
      <Lavash />
      <Shaurma />
      <Panini />
      <Burger />
      <DonarKabab />
      <HotDog />
      <Gazaklar />
      <Tamaddilar />
      <Desert />
      <Ichimlik />
    </div>
  );
};

export default Home;
