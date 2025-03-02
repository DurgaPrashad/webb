import React from "react";
import Navigation from "../Navigation";
import Hero from "../Hero";
import Animation from "../Animation";
import Services from "../Services"; 
import Plans from "../Plans";
import Whychoose from "../Whychoose";
import Stats from "../Stats";
import "./indexx.css";
import Testimonial from "../Testimonial";
import FAQ from "../FAQ";

const Home = () => {
   return (
  <div>
   <Navigation />
   <Animation />
   <Hero />
   <Services />
   <Plans />
   <Whychoose />
   <Stats />
   <Testimonial />
   <FAQ />
  </div>

   )
};

export default Home;