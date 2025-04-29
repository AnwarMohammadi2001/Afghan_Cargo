import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaSearch, FaBars, FaTimes } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { toggleDarkMode } from "../../redux/darkModeSlice";
import { toggleLanguage } from "../../redux/languageSlice";
import { motion, AnimatePresence } from "framer-motion";
import "../../utils/ResToggleBtn.css";

const navItems = [
  { id: 1, name: "Home", path: "/" },
  { id: 2, name: "About Us", path: "/about" },
  { id: 3, name: "Services", path: "/services" },
  { id: 4, name: "Quote", path: "/quote" },
  { id: 5, name: "Image Gallery", path: "/gallery" },
  { id: 6, name: "Contact Us", path: "/contact" },
];

const Navbar = () => {
  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.darkMode.darkMode);
  const iconClass = darkMode ? "text-amber-500" : "text-amber-50";
  const [isScrolled, setIsScrolled] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [trackingId, setTrackingId] = useState("");
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSearch = () => {
    const trackingRegex = /^1Z[0-9A-Z]{16}$/i;
    if (trackingId.trim() === "") {
      alert("❌ Please enter a tracking number.");
    } else if (!trackingRegex.test(trackingId.trim())) {
      alert(
        "❌ Invalid Tracking Number! It must start with '1Z' and be 18 characters long."
      );
    } else {
      const upsUrl = `https://www.ups.com/track?loc=en_US&tracknum=${trackingId.trim()}`;
      window.open(upsUrl, "_blank");
      setTrackingId("");
    }
  };

  return (
    <nav
      className={`bg-zinc-800 w-full z-50 transition-all duration-500 h-[100px] flex items-center ${
        isScrolled ? "fixed top-0 left-0 shadow-md" : "relative"
      }`}
    >
      <div className="flex w-full items-center px-5 md:px-10 lg:px-24 justify-between py-2">
        {/* Logo */}
        <Link to="/">
          <img src="/new.png" alt="logo" className="h-[90px] w-auto" />
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex space-x-10 py-1.5 font-medium">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <li
                key={item.id}
                className={`relative group cursor-pointer text-[16px] ${
                  isActive ? "text-amber-400" : "text-amber-50"
                }`}
              >
                <Link
                  to={item.path}
                  className={`${
                    isActive ? "font-semibold" : ""
                  } hover:text-amber-400`}
                >
                  {item.name}
                </Link>
                <span
                  className={`absolute h-[2px] left-0 w-full -bottom-1 transition-transform duration-500 bg-amber-500 dark:bg-amber-500 ${
                    isActive
                      ? "scale-x-100"
                      : "scale-x-0 group-hover:scale-x-100 group-hover:origin-left origin-right"
                  }`}
                ></span>
              </li>
            );
          })}
        </ul>

        {/* Search + Mobile Menu Toggle */}
        <div className="flex items-center gap-4 md:gap-6">
          {/* Search */}
          <div className="hidden md:flex items-center border border-amber-400 rounded-full overflow-hidden">
            <input
              type="text"
              placeholder="Track ID"
              value={trackingId}
              onChange={(e) => setTrackingId(e.target.value)}
              className="px-3 py-1.5 text-sm bg-transparent text-white placeholder:text-amber-100 focus:outline-none"
            />
            <button
              onClick={handleSearch}
              className="bg-amber-400 px-3 py-2 border border-amber-500 hover:bg-amber-500 text-black"
            >
              <FaSearch size={14} />
            </button>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsNavOpen(true)}
          >
            <FaBars size={22} />
          </button>
        </div>
      </div>

      {/* Framer Motion Side Menu (Mobile) */}
      <AnimatePresence>
        {isNavOpen && (
          <motion.aside
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.4 }}
            className="fixed top-0 left-0 w-3/4 sm:w-1/2 h-screen bg-zinc-900 z-50 shadow-md flex flex-col px-6 py-6 space-y-6"
          >
            <div className="flex justify-between items-center">
              <img src="/new.png" alt="Logo" className="h-[60px] w-auto" />
              <FaTimes
                size={24}
                className="text-white cursor-pointer"
                onClick={() => setIsNavOpen(false)}
              />
            </div>

            <ul className="space-y-4 mt-4">
              {navItems.map((item) => {
                const isActive = location.pathname === item.path;
                return (
                  <li key={item.id}>
                    <Link
                      to={item.path}
                      onClick={() => setIsNavOpen(false)}
                      className={`block text-lg font-medium ${
                        isActive ? "text-amber-400" : "text-white"
                      } hover:text-amber-400`}
                    >
                      {item.name}
                    </Link>
                  </li>
                );
              })}
            </ul>

            {/* Mobile Search */}
            <div className="flex mt-auto items-center border border-amber-400 rounded-full overflow-hidden">
              <input
                type="text"
                placeholder="Track ID"
                value={trackingId}
                onChange={(e) => setTrackingId(e.target.value)}
                className="px-3 py-1.5 text-sm bg-transparent text-white placeholder:text-amber-100 focus:outline-none w-full"
              />
              <button
                onClick={handleSearch}
                className="bg-amber-400 px-3 py-2 border border-amber-500 hover:bg-amber-500 text-black"
              >
                <FaSearch size={14} />
              </button>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
