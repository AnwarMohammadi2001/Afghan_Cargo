import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./layout/Layout";
import WhyChooseUs from "./components/WhyChooseUs";
import Services from "./components/Services/services";
import TrackingSection from "./components/TrackingSection";
import Testimonials from "./components/Testimonials";
import ContactSection from "./components/ContactSection";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Gallary from "./pages/Gallary";
import Quote from "./pages/Quote";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/quote" element={<Quote />} />
          <Route path="/gallery" element={<Gallary />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
