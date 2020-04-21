import React from "react";
import Hero from "../../shared/UIComponents/Hero";
import Products from "../components/Products";
import Testemonials from "../components/Testemonials";
import VideoSection from "../components/VideoSection";
import ContactBanner from "../components/ContactBanner";

export const LandingPage = () => {
  return (
    <>
      <Hero />
      <Products />
      <ContactBanner />
      <Testemonials />
      <VideoSection />
    </>
  );
};
