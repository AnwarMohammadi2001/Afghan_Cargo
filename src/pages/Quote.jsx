import React from "react";
import TrackingSection from "../components/TrackingSection";
import ContactSection from "../components/ContactSection";

const Quote = () => {
  return (
    <div className=" bg-white dark:bg-zinc-900 transition-colors duration-500">
      <TrackingSection />
      <ContactSection />
    </div>
  );
};

export default Quote;
