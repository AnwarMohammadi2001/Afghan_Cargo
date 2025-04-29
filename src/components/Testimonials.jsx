import React, { useRef, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";
import {
  fadeIn,
  container,
  contentContainer,
  contentItem,
} from "../utils/framermotion/variants";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { FaStar, FaQuoteLeft } from "react-icons/fa";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../utils/Testimonials.css";

const CUSTOMERS = [
  {
    id: 1,
    image: "person3.png",
    message:
      "The food was absolutely delicious! I loved the variety of dishes, and the staff was incredibly friendly. Definitely my go-to place for a great meal!The food was absolutely delicious! I loved the variety of dishes, and the staff was incredibly friendly. Definitely my go-to place for a great meal!",
    name: "Mohammad",
    agend: "SEO & Offcer",
  },
  {
    id: 2,
    image: "person3.png",
    message:
      "The food was absolutely delicious! I loved the variety of dishes, and the staff was incredibly friendly. Definitely my go-to place for a great meal!",
    name: "Zahra Jan",
    agend: "SEO & Offcer",
  },
  {
    id: 3,
    image: "person3.png",
    message:
      "“An absolutely incredible experience! The attention to detail and personalized service made our Maldives trip unforgettable. Highly recommend!”",
    name: "Sabrena",
    agend: "SEO & Offcer",
  },
  {
    id: 4,
    image: "person3.png",
    message:
      "The food was absolutely delicious! I loved the variety of dishes, and the staff was incredibly friendly. Definitely my go-to place for a great meal!",
    name: "The Name",
    agend: "SEO & Offcer",
  },
];

const Testimonials = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const paginationRef = useRef(null);
  const swiperRef = useRef(null); // store swiper instance

  useEffect(() => {
    if (paginationRef.current) {
      paginationRef.current.classList.add("custom-pagination");
    }
  }, []);

  const handleMouseEnter = () => {
    if (swiperRef.current && swiperRef.current.autoplay) {
      swiperRef.current.autoplay.stop();
    }
  };

  const handleMouseLeave = () => {
    if (swiperRef.current && swiperRef.current.autoplay) {
      swiperRef.current.autoplay.start();
    }
  };

  return (
    <div
      className="max-w-[90%] lg:max-w-[60%] bg-white dark:bg-zinc-900  transition-colors duration-500  relative group py-14 mx-auto"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        variants={contentContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.3 }}
      >
        <motion.div
          variants={contentItem}
          className="text-center flex justify-center space-y-3 mb-2"
        >
          <motion.h1 className="text-3xl md:text-2xl  font-bold text-primary dark:text-white  transition-colors duration-500">
            TESTIMONIALS
          </motion.h1>
        </motion.div>
        <motion.h2
          variants={contentItem}
          className="text-3xl md:text-4xl  text-center  font-bold text-black dark:text-white  transition-colors duration-500"
        >
          Top Reviews
        </motion.h2>
      </motion.div>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        pagination={{
          clickable: true,
          el: paginationRef.current,
          bulletClass: "custom-bullet",
          bulletActiveClass: "custom-bullet-active",
        }}
        navigation={{
          nextEl: ".swiper-button-next-custom",
          prevEl: ".swiper-button-prev-custom",
        }}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
          swiper.params.pagination.el = paginationRef.current;
          swiper.pagination.init();
          swiper.pagination.update();
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
          swiper.navigation.init();
          swiper.navigation.update();
        }}
        autoplay={{ delay: 5000 }}
        loop={true}
        spaceBetween={100}
        slidesPerView={1}
        grabCursor={true}
        className="overflow-visible cursor-pointer relative"
      >
        {Array.isArray(CUSTOMERS) && CUSTOMERS.length > 0 ? (
          CUSTOMERS.map((customer, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col justify-center mt-7 space-y-3 items-center">
                <FaQuoteLeft
                  size={60}
                  className="text-xl text-red-700 dark:text-amber-500"
                />
                <p className="text-center flex dark:text-gray-300 items-center justify-center gap-2 text-base text-gray-700 max-w-2xl italic">
                  {customer.message}
                </p>
                <img
                  src={customer.image}
                  alt={customer.name}
                  loading="lazy"
                  className="w-[120px] rounded-full h-[120px] mt-5"
                />
                <h3 className="text-lg font-bold dark:text-gray-100">
                  {customer.name}
                </h3>
                <div className="flex space-x-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span key={i} className="text-yellow-500">
                      <FaStar size={20} />
                    </span>
                  ))}
                </div>
              </div>
            </SwiperSlide>
          ))
        ) : (
          <div className="w-full flex items-center justify-center text-gray-500">
            تصاویری در دسترس نیست
          </div>
        )}
      </Swiper>

      <div className="flex justify-between gap-5 mb-4">
        <div
          ref={prevRef}
          className="swiper-button-prev-custom cursor-pointer text-4xl py-1 px-2 rounded-full flex items-center justify-center text-gray-600 dark:text-white hover:text-green-500 transition"
        >
          &#8592;
        </div>
        <div
          ref={nextRef}
          className="swiper-button-next-custom cursor-pointer text-4xl py-1 px-2 rounded-full flex items-center justify-center text-gray-600 dark:text-white hover:text-green-500 transition"
        >
          &#8594;
        </div>
      </div>

      <div
        ref={paginationRef}
        className="custom-pagination flex justify-center mt-5 space-x-2"
      ></div>
    </div>
  );
};

export default Testimonials;
