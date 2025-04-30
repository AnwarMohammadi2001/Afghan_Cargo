import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FaTimes, FaSearch } from "react-icons/fa";
import { motion } from "framer-motion";

const ResponsiveNavbar = ({
  isOpen,
  onClose,
  navItems,
  trackingId,
  setTrackingId,
  handleSearch,
}) => {
  const location = useLocation();

  return (
    <>
      {isOpen && (
        <motion.aside
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ duration: 0.4 }}
          className="fixed top-0 right-0 w-2/3 sm:w-1/2 h-screen bg-zinc-900 z-50 shadow-md flex flex-col px-6 py-6 space-y-6"
        >
          <div className="flex justify-end items-center">
            <FaTimes
              size={28}
              className="text-white cursor-pointer hover:bg-gray-400 rounded-full"
              onClick={onClose}
            />
          </div>

          <ul className="space-y-4 ">
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
        </motion.aside>
      )}
    </>
  );
};

export default ResponsiveNavbar;
