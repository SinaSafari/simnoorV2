import React from "react";
import Hero from "../../shared/UIComponents/Hero";
import Products from "../components/Products";
import Testemonials from "../components/Testemonials";
import VideoSection from "../components/VideoSection";
import ContactBanner from "../components/ContactBanner";

export const LandingPage = () => {
  return (
    <>
      <Hero
        ENtitle="And an even wittier subheading to boot. Jumpstart your marketing
            efforts with this example based on Apple's marketing pages."
        FAtitle=" لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
          "
      />
      <Products />
      <ContactBanner />
      <Testemonials />
      <VideoSection />
    </>
  );
};
