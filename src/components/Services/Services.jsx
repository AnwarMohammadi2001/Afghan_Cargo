import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";
import {
  fadeIn,
  container,
  contentContainer,
  contentItem,
} from "../../utils/framermotion/variants";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import ServicesCard from "./ServicesCard"; // ✅ Import the card component

import {
  FaTruckMoving,
  FaPlane,
  FaShip,
  FaWarehouse,
  FaBoxes,
  FaGlobe,
} from "react-icons/fa";

const services = [
  {
    id: 1,
    title: "Local Delivery",
    image: "/slider/ab1.webp",
    description:
      "Experience swift and dependable cargo delivery services within your city. We guarantee same-day pickups and drop-offs...",
    icon: <FaTruckMoving className="text-4xl text-[#02DB81]" />,
  },
  {
    id: 2,
    title: "Air Freight",
    image: "/slider/ab1.webp",
    description:
      "Our premium air freight solutions are tailored for time-sensitive shipments...",
    icon: <FaPlane className="text-4xl text-[#02DB81]" />,
  },
  {
    id: 3,
    title: "Sea Freight",
    image: "/slider/ab1.webp",
    description:
      "Ideal for bulk and heavy shipments, our sea freight service offers cost-effective international shipping...",
    icon: <FaShip className="text-4xl text-[#02DB81]" />,
  },
  {
    id: 4,
    title: "Warehousing",
    image: "/slider/ab1.webp",
    description:
      "Our warehousing facilities are designed for maximum security and flexibility...",
    icon: <FaWarehouse className="text-4xl text-[#02DB81]" />,
  },
  {
    id: 5,
    title: "Cargo Packaging",
    image: "/slider/ab1.webp",
    description:
      "We provide professional packaging solutions tailored to the nature of your cargo...",
    icon: <FaBoxes className="text-4xl text-[#02DB81]" />,
  },
  {
    id: 6,
    title: "Global Logistics",
    image: "/slider/ab1.webp",
    description:
      "Our global logistics services cover every step of the supply chain...",
    icon: <FaGlobe className="text-4xl text-[#02DB81]" />,
  },
];

const Services = () => {
  return (
    <div className="py-24 bg-amber-50 dark:bg-zinc-900  transition-colors duration-500 px-4 sm:px-6 lg:px-16">
      <motion.div
        variants={contentContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.3 }}
        className="text-center mb-16"
      >
        <motion.h2
          variants={contentItem}
          className="text-3xl md:text-2xl  font-bold text-primary dark:text-white"
        >
          Our Services
        </motion.h2>
        <motion.h2
          variants={contentItem}
          className="text-3xl md:text-4xl  font-bold text-black dark:text-white"
        >
          Explore Our Services
        </motion.h2>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.2 }}
        className="relative max-w-6xl mx-auto"
      >
        {/* Custom Arrows */}
        <div className="flex justify-between gap-5 mb-4">
          <div className="swiper-button-prev-custom cursor-pointer text-4xl   py-1 px-2 rounded-full flex items-center justify-center text-gray-600 dark:text-white  hover:text-green-500 transition">
            &#8592;
          </div>
          <div className="swiper-button-next-custom cursor-pointer text-4xl  py-1 px-2 rounded-full flex items-center justify-center text-gray-600 dark:text-white hover:text-green-500 transition">
            &#8594;
          </div>
        </div>

        <Swiper
          modules={[Navigation]}
          spaceBetween={30}
          slidesPerView={3}
          slidesPerGroup={1}
          loop={true}
          speed={1000}
          navigation={{
            nextEl: ".swiper-button-next-custom",
            prevEl: ".swiper-button-prev-custom",
          }}
          breakpoints={{
            0: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {services.map((service, index) => (
            <SwiperSlide key={service.id}>
              <ServicesCard service={service} index={index} />
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </div>
  );
};

export default Services;
