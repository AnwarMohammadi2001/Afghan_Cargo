import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaSearch, FaBars, FaTimes } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { AnimatePresence, motion } from "framer-motion";
import ResponsiveNavbar from "./ResponsiveNavbar";
import "../../utils/ResToggleBtn.css";

const navItems = [
  { id: 1, name: "Home", path: "/" },
  { id: 2, name: "About Us", path: "/about" },
  { id: 3, name: "Services", path: "/services" },
  { id: 4, name: "Quote", path: "/quote" },
  { id: 5, name: "Image Gallery", path: "/gallery" },
  { id: 6, name: "Contact Us", path: "/contact" },
];

const LOCAL_STORAGE_KEY = "recentTrackingSearches";

const Navbar = () => {
  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.darkMode.darkMode);
  const location = useLocation();

  const [isScrolled, setIsScrolled] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [trackingId, setTrackingId] = useState("");
  const [recentSearches, setRecentSearches] = useState([]);

  // Load from localStorage on mount
  useEffect(() => {
    const savedSearches = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (savedSearches) {
      setRecentSearches(JSON.parse(savedSearches));
    }
  }, []);

  // Save to localStorage on change
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(recentSearches));
  }, [recentSearches]);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSearch = () => {
    const trackingRegex = /^1Z[0-9A-Z]{16}$/i;
    const trimmedId = trackingId.trim();

    if (trimmedId === "") {
      alert("❌ Please enter a tracking number.");
    } else if (!trackingRegex.test(trimmedId)) {
      alert(
        "❌ Invalid Tracking Number! It must start with '1Z' and be 18 characters long."
      );
    } else {
      const upsUrl = `https://www.ups.com/track?loc=en_US&tracknum=${trimmedId}`;
      window.open(upsUrl, "_blank");

      // Avoid duplicates and cap at 5 items
      setRecentSearches((prev) => {
        const filtered = prev.filter((item) => item !== trimmedId);
        return [trimmedId, ...filtered].slice(0, 5);
      });

      setTrackingId("");
      setIsSearchOpen(false);
    }
  };

  const handleDeleteRecent = (itemToDelete) => {
    setRecentSearches((prev) => prev.filter((item) => item !== itemToDelete));
  };

  return (
    <>
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

          {/* Desktop Navigation */}
          <ul className="hidden md:flex space-x-10 py-1.5 font-medium">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <li
                  key={item.id}
                  className={`relative group cursor-pointer text-[20px] ${
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

          {/* Search and Mobile Menu Toggle */}
          <div className="flex items-center gap-4 md:gap-6">
            <p>
              <span className="hidden md:block text-amber-400 font-semibold text-xl">
                Track Your Package
              </span>
            </p>
            <button
              onClick={() => setIsSearchOpen(true)}
              className="text-white"
              title="Search"
            >
              <FaSearch size={25} />
            </button>
            <button
              className="md:hidden text-white"
              onClick={() => setIsNavOpen(true)}
            >
              <FaBars size={22} />
            </button>
          </div>
        </div>
      </nav>

      {/* Responsive Navbar */}
      {isNavOpen && (
        <div
          className="fixed inset-0 bg-black opacity-70 z-40"
          onClick={() => setIsNavOpen(false)}
        ></div>
      )}
      <AnimatePresence>
        <ResponsiveNavbar
          isOpen={isNavOpen}
          onClose={() => setIsNavOpen(false)}
          navItems={navItems}
          trackingId={trackingId}
          setTrackingId={setTrackingId}
          handleSearch={handleSearch}
        />
      </AnimatePresence>

      {/* Search Backdrop */}
      {isSearchOpen && (
        <div
          className="fixed inset-0 bg-black opacity-70 z-40"
          onClick={() => setIsSearchOpen(false)}
        ></div>
      )}

      {/* Slide-down Search Panel */}
      <AnimatePresence>
        {isSearchOpen && (
          <motion.div
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.4 }}
            className="fixed top-0 left-0 right-0 z-50  bg-zinc-900 text-white px-4 sm:px-6 md:px-10 py-6 sm:py-5 shadow-lg"
          >
            {/* Top section: logo + close button */}
            <div className="flex justify-between items-center mb-6 md:hidden">
              <h2 className="text-xl font-bold">Your Logo</h2>
              <button onClick={() => setIsSearchOpen(false)}>
                <FaTimes size={28} className="text-white cursor-pointer" />
              </button>
            </div>

            {/* Tablet/Desktop layout */}
            <div className="hidden md:flex  justify-between items-center">
              <h2 className="text-2xl font-bold">Your Logo</h2>
              <div className="flex items-center gap-3">
                <input
                  type="text"
                  placeholder="Enter Tracking ID (e.g., 1Zxxxxxxxxxxxxxxxx)"
                  value={trackingId}
                  onChange={(e) => setTrackingId(e.target.value)}
                  className="px-4 py-3 rounded w-[400px] lg:w-[500px] bg-zinc-800 text-white placeholder:text-gray-400 border border-amber-400 focus:outline-none"
                />
                <button
                  onClick={handleSearch}
                  className="px-4 py-3 bg-amber-400 text-black rounded hover:bg-amber-500 transition"
                >
                  Search
                </button>
              </div>
              <button onClick={() => setIsSearchOpen(false)}>
                <FaTimes size={30} className="text-white cursor-pointer" />
              </button>
            </div>

            {/* Mobile layout for input & button */}
            <div className="flex md:hidden gap-3 mb-6">
              <input
                type="text"
                placeholder="Enter Tracking ID (e.g., 1Zxxxxxxxxxxxxxxxx)"
                value={trackingId}
                onChange={(e) => setTrackingId(e.target.value)}
                className="px-4 py-3 rounded w-full bg-zinc-800 text-white placeholder:text-gray-400 border border-amber-400 focus:outline-none"
              />
              <button
                onClick={handleSearch}
                className=" px-6 py-3 bg-amber-400 text-black rounded hover:bg-amber-500 transition"
              >
                Search
              </button>
            </div>

            {/* Recently Searched Section */}
            <div className="mt-4 sm:mt-6 flex flex-col items-center gap-4 sm:gap-2 max-w-4xl mx-auto py-3">
              <h3 className="text-base sm:text-lg font-medium text-amber-300">
                Recently Searched:
              </h3>

              {recentSearches.length === 0 ? (
                <p className="text-sm sm:text-base text-gray-400">
                  No recent searches found.
                </p>
              ) : (
                <ul className="flex flex-wrap justify-center gap-3 sm:gap-x-6 text-gray-300">
                  {recentSearches.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-center gap-2 bg-amber-500 py-1.5 px-4 rounded-full hover:bg-amber-400 transition duration-300"
                    >
                      <span className="text-zinc-900 text-sm">{item}</span>
                      <button
                        onClick={() => handleDeleteRecent(item)}
                        className="text-black"
                      >
                        <FaTimes />
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
