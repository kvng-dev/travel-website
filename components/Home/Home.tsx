"use client";

import { useEffect } from "react";
import Hero from "../Hero";
import WhyChoose from "./choose/WhyChoose";
import Destination from "./Destination/Destination";
import Footer from "./footer/Footer";
import Hotel from "./hotel/Hotel";
import News from "./news/News";
import NewsLetter from "./newsletter/NewsLetter";
import Review from "./review/Review";
import ScrollToTop from "./ScrollToTop";
import AOS from "aos";
import "aos/dist/aos.css";
const Home = () => {
  useEffect(() => {
    const initAOS = async () => {
      await import("aos");
      AOS.init({
        duration: 1000,
        once: true,
        easing: "ease",
        anchorPlacement: "top-bottom",
      });
    };
    initAOS();
  }, []);
  return (
    <div className="overflow-hidden">
      <Hero />
      <Destination />
      <Hotel />
      <WhyChoose />
      <Review />
      <News />
      <NewsLetter />
      <Footer />
      <ScrollToTop />
    </div>
  );
};
export default Home;
