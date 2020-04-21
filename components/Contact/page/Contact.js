import React from "react";

import Hero from "../../shared/UIComponents/Hero";
import Map from "../components/map";
import ContactForm from "../components/ContactForm";

const Contact = () => {
  return (
    <>
      <Hero ENtitle="Contact us" FAtitle="تماس با ما" />
      <Map />
      <ContactForm />
    </>
  );
};

export default Contact;
