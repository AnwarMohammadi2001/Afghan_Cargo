import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FaTimes, FaSearch } from "react-icons/fa";
import { motion } from "framer-motion";

const ResponsiveNavbar = ({ isOpen, onClose, navItems, trackingId, setTrackingId, handleSearch }) => {
  const location = useLocation();

  return (
    <>
      {isOpen && (
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
              onClick={onClose}
            />
          </div>

          <ul className="space-y-4 mt-4">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <li key={item.id}>
                  <Link
                    to={item.path}
                    onClick={onClose}
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
    </>
  );
};

export default ResponsiveNavbar;
