import React, { useState } from "react";
import Services from "../components/Services/services";
import TrackingSection from "../components/TrackingSection";
import Testimonials from "../components/Testimonials";
import HowItWorks from "../components/HowItWorks";
import PartnersSection from "../components/PartnersSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import WhoWeAre from "../components/Hero/whoWeAre";
import HeroMain from "../components/Hero/HeroMain";
import Facts from "../components/Facts";
import Marquee from "../components/Marquee/Marquee";

const Home = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => setIsNavOpen((prev) => !prev);
  const closeNav = () => setIsNavOpen(false);

  return (
    <div className=" bg-white dark:bg-zinc-900 transition-colors duration-500 min-h-screen">
      {/* <Hero /> */}
      <HeroMain />
      <WhoWeAre />
      <Facts />
      <Services />
      <TrackingSection />
      <Testimonials />
      {/* <HowItWorks /> */}
      {/* <Marquee /> */}
      {/* <PartnersSection /> */}
      <ContactSection />
    </div>
  );
};

export default Home;
