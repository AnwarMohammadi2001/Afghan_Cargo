import React from "react";
import { motion } from "framer-motion";
import { FaTimes } from "react-icons/fa";

const TrackingSearchPanel = ({
  trackingId,
  setTrackingId,
  handleSearch,
  recentSearches,
  handleDeleteRecent,
  onClose,
}) => {
  return (
    <motion.div
      initial={{ y: "-100%" }}
      animate={{ y: 0 }}
      exit={{ y: "-100%" }}
      transition={{ duration: 0.4 }}
      className="fixed top-0 left-0 right-0 z-50  bg-zinc-900 text-white px-4 sm:px-6 md:px-10 py-6 sm:py-5 shadow-lg"
    >
      {/* Top for Mobile */}
      <div className="flex justify-between items-center mb-6 md:hidden">
        <h2 className="text-xl font-bold">Your Logo</h2>
        <button onClick={onClose}>
          <FaTimes size={28} className="text-white cursor-pointer" />
        </button>
      </div>

      {/* Desktop layout */}
      <div className="hidden md:flex justify-between items-center">
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
        <button onClick={onClose}>
          <FaTimes size={30} className="text-white cursor-pointer" />
        </button>
      </div>

      {/* Mobile input */}
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

      {/* Recent Searches */}
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
  );
};

export default TrackingSearchPanel;
