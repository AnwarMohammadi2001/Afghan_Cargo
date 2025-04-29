import React, { useRef, useState } from "react";
import Masonry from "@mui/lab/Masonry";
import Box from "@mui/material/Box";
import GallaryHeader from "../components/Gallary/GallaryHeader";
import Testimonials from "../components/Testimonials";
import { HiOutlinePlusSm } from "react-icons/hi";
import { HiOutlineMinusSm } from "react-icons/hi";
import {
  contentContainer,
  contentItem,
  container,
  fadeeIn,
} from "../utils/framermotion/variants"; // Update this path as needed
import { motion } from "framer-motion";

const Gallary = () => {
  const videoRefs = useRef([]);
  const [expandedIndex, setExpandedIndex] = useState(null);
  const toggleDescription = (index) => {
    setExpandedIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const handlePlay = (index) => {
    videoRefs.current.forEach((video, i) => {
      if (video && i !== index) {
        video.pause();
        video.currentTime = 0;
      }
    });
  };

  const images = [
    "/gall/gal1.jpg",
    "/gall/gal2.jpg",
    "/gall/gal3.jpg",
    "/gall/gal7.avif",
    "/gall/gal4.jpg",
    "/gall/gal5.avif",
    "/gall/gal6.avif",
  ];

  const videos = ["cargo.mp4", "cargo.mp4", "cargo.mp4"];

  const reviews = [
    {
      name: "Ali Ahmad",
      rating: 5,
      comment:
        "Excellent service! My package arrived on time and in perfect condition.",
    },
    {
      name: "Zahra Wali",
      rating: 4,
      comment: "Very professional team and fast delivery. Highly recommended!",
    },
  ];

  const deliveredOrders = [
    {
      id: "#ORD12345",
      destination: "Kabul",
      date: "2025-04-15",
      description:
        "This package included electronics and was delivered safely.",
    },
    {
      id: "#ORD67890",
      destination: "Herat",
      date: "2025-04-18",
      description: "Documents and small parcels delivered on time.",
    },
  ];

  return (
    <section className="">
      <GallaryHeader />

      <div className="max-w-7xl mx-auto bg-white py-20 text-gray-800 dark:bg-zinc-900 transition-colors duration-500 px-6">
        {/* Image Gallery */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-6 text-primary text-center">
            Delivered Cargos & Parcels
          </h3>
          <motion.Box
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.2 }}
            sx={{ width: "100%", minHeight: 400 }}
          >
            <Masonry columns={{ xs: 1, sm: 2, md: 3 }} spacing={2}>
              {images.map((src, index) => (
                <motion.img
                  variants={fadeeIn("up", index * 0.3)}
                  whileInView="show"
                  initial="hidden"
                  viewport={{ once: false, amount: 0.2 }}
                  key={index}
                  src={src}
                  loading="lazy"
                  alt={`Cargo ${index + 1}`}
                  className="rounded-lg shadow-md w-full object-cover"
                />
              ))}
            </Masonry>
          </motion.Box>
        </div>

        {/* Video Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-6 text-primary text-center">
            What Our Users Say
          </h3>
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.2 }}
            className="flex flex-wrap gap-6 justify-center"
          >
            {videos.map((video, index) => (
              <motion.video
                variants={fadeeIn("up", index * 0.3)}
                whileInView="show"
                initial="hidden"
                viewport={{ once: false, amount: 0.2 }}
                key={index}
                ref={(el) => (videoRefs.current[index] = el)}
                src={video}
                controls
                onPlay={() => handlePlay(index)}
                preload="metadata" // or "none"
                className="w-full md:w-80 h-56 object-cover rounded-lg shadow-md"
              />
            ))}
          </motion.div>
        </div>

        {/* User Reviews */}
        <div className="mb-16">
          <Testimonials />
        </div>

        {/* Delivered Orders */}
        <motion.div variants={contentContainer} initial="hidden" animate="show">
          <motion.h3
            variants={contentItem}
            className="text-2xl font-bold mb-6 text-primary text-center"
          >
            Delivered Orders
          </motion.h3>
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.2 }}
            className="max-w-3xl mx-auto"
          >
            {deliveredOrders.map((order, index) => (
              <motion.div
                variants={fadeeIn("up", index * 0.3)}
                whileInView="show"
                initial="hidden"
                viewport={{ once: false, amount: 0.2 }}
                key={index}
                className="bg-gray-200 rounded-md dark:bg-zinc-700 transition-colors duration-500 px-4 py-6  mb-4 shadow-sm"
              >
                <div className="flex justify-between items-center">
                  <div>
                    <h5 className="font-medium dark:text-gray-300 transition-colors duration-500 ">Order ID: {order.id}</h5>
                    <p className="text-base text-gray-500 dark:text-gray-300 transition-colors duration-500 ">
                      Destination: {order.destination}
                    </p>
                  </div>
                  <div className="flex items-center gap-4 dark:text-gray-300 transition-colors duration-500 ">
                    <p className="text-base text-gray-600 dark:text-gray-300 transition-colors duration-500 ">{order.date}</p>
                    <button
                      onClick={() => toggleDescription(index)}
                      className="text-2xl font-bold text-primary cursor-pointer hover:text-blue-700"
                    >
                      {expandedIndex === index ? (
                        <HiOutlineMinusSm />
                      ) : (
                        <HiOutlinePlusSm />
                      )}
                    </button>
                  </div>
                </div>

                {/* Description with smooth animation */}
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    expandedIndex === index
                      ? "max-h-40 opacity-100 mt-3"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="text-base text-gray-700 dark:text-gray-300 transition-colors duration-500 ">{order.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Gallary;
