import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Header from "../components/Navbar/Header";
import Footer from "../components/Footer";
import { IoMdArrowRoundUp } from "react-icons/io";
import { FaWhatsapp } from "react-icons/fa";
import { RiArrowUpDoubleLine } from "react-icons/ri";

const Layout = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 200) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const toggleNav = () => setIsNavOpen((prev) => !prev);
  const closeNav = () => setIsNavOpen(false);

  return (
    <div className="relative dark:bg-zinc-900 transition-colors duration-500">
      <header className="w-full transition-colors duration-500">
        <Navbar isNavOpen={isNavOpen} toggleNav={toggleNav} />
      </header>
      <main>
        <Outlet />
      </main>
      <Footer />

      {isScrolled && (
        <div className="fixed bottom-10 z-50 right-10">
          <button
            onClick={scrollToTop}
            className="bg-[#ED8D1D] text-black dark:bg-gray-100 dark:text-slate-900 p-2 shadow-lg hover:text-white transition duration-300 cursor-pointer"
          >
            <RiArrowUpDoubleLine size={28} className="animate-pulse" />
          </button>
        </div>
      )}

      {/* WhatsApp Contact Button */}
      <div className="fixed bottom-10 z-50 left-10 bg-green-500 text-white p-3 rounded-full flex justify-center items-center shadow-lg hover:bg-green-600 transition duration-300">
        <a
          href="https://wa.me/93772387935" // Replace with your number
          target="_blank"
          rel="noopener noreferrer"
          className=""
        >
          <FaWhatsapp size={28} />
        </a>
      </div>
    </div>
  );
};

export default Layout;
