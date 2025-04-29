import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaRocket, FaShieldAlt, FaDollarSign } from "react-icons/fa";

import {
  contentContainer,
  contentItem,
  container,
  fadeeIn,
} from "../../utils/framermotion/variants"; // Update this path as needed

const Hero = () => {
  const videoRef = useRef(null);

  const cards = [
    {
      id: 1,
      title: "Fast",
      description:
        "Experience rapid delivery with our efficient logistics network.",
      icon: <FaRocket className="text-4xl text-secondary" />,
    },
    {
      id: 2,
      title: "Secure",
      description:
        "Your cargo is in safe hands with our advanced security measures.",
      icon: <FaShieldAlt className="text-4xl text-secondary" />,
    },
    {
      id: 3,
      title: "Affordable",
      description:
        "Get the best value with our competitive pricing and quality service.",
      icon: <FaDollarSign className="text-4xl text-secondary" />,
    },
  ];

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 1.5;
    }
  }, []);

  return (
    <div className="relative w-full lg:h-[75vh]">
      {/* Background Video */}
      <video
        ref={videoRef}
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        aria-label="Cargo delivery in motion"
      >
        <source src="/hero.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark Overlay */}
      {/* <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-40  inset-0"></div> */}

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center justify-center text-center text-white h-full px-4">
        <motion.div
          variants={contentContainer}
          initial="hidden"
          animate="show"
          className="flex flex-col items-center justify-center"
        >
          <motion.h1
            variants={contentItem}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Move Your Goods, Anytime, Anywhere — With Easy Cargo
          </motion.h1>

          <motion.p
            variants={contentItem}
            className="text-lg md:text-xl mb-8 max-w-2xl"
          >
            We deliver your cargo quickly, safely, and affordably—across the
            city or around the world.
          </motion.p>

          <motion.div
            variants={contentItem}
            className="flex flex-wrap justify-center items-center gap-4"
          >
            <Link
              to="/services"
              className="px-7 py-3 bg-[#02DB81] hover:bg-[#2d9469] text-white rounded-full font-semibold transition shadow-md duration-200 hover:shadow-[1px_5px_20px_2px_rgba(2,219,129,0.5)]"
            >
              Explore Our Cargo Solutions
            </Link>

            <Link
              to="/quote"
              className="text-white underline font-medium hover:text-[#02DB81] transition"
            >
              Get Free Estimate →
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Feature Cards */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.2 }}
        className="absolute left-1/2 -translate-x-1/2 w-full flex justify-center transform -bottom-32 z-30 py-16"
      >
        <div className="px-4 sm:px-6 lg:px-8">
          <motion.div className="grid gap-10 md:grid-cols-3">
            {cards.map((card, index) => (
              <motion.div
                key={card.id}
                className="bg-primary dark:bg-gray-800 py-6 px-8 w-[350px] rounded-md shadow-md hover:shadow-xl transition duration-300"
                variants={fadeeIn("up", index * 0.3)}
                whileInView="show"
                initial="hidden"
                viewport={{ once: false, amount: 0.2 }}
              >
                <motion.div  variants={fadeeIn("up",  0.3)}  className="flex items-center space-x-5 mb-4">
                  {card.icon}
                  <h3 className="text-2xl font-semibold text-gray-200 dark:text-white">
                    {card.title}
                  </h3>
                </motion.div>
                <p className="mt-1 text-gray-300 dark:text-gray-300 text-sm">
                  {card.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
