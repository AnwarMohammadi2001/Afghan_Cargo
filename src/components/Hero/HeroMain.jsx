import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { MdArrowForwardIos, MdArrowBackIos } from "react-icons/md";
import {
  contentContainer,
  contentItem,
  container,
  fadeeIn,
} from "../../utils/framermotion/variants"; // Update this path as needed
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Link } from "react-router-dom";

const HeroMain = () => {
  const [prevEl, setPrevEl] = useState(null);
  const [nextEl, setNextEl] = useState(null);

  const sliders = [
    {
      id: 1,
      title: "Transport & Cargo Solution",
      desc: "Fast, safe, and efficient transportation for all your cargo needs around the globe.",
      image: "/slider/ab1.webp",
    },
    {
      id: 2,
      title: "Fast Delivery Service",
      desc: "Quick delivery services to ensure your packages arrive on time every time.",
      image: "/slider/ab1.webp",
    },
    {
      id: 3,
      title: "Trusted by Thousands",
      desc: "Our customers trust us with their valuable shipments and logistics every day.",
      image: "/slider/ab2.jpg",
    },
  ];

  return (
    <div className="w-full h-screen md:h-[400px] lg:h-[690px] relative group">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        slidesPerView={1}
        loop={true}
        spaceBetween={0}
        speed={1500}
        navigation={{
          prevEl,
          nextEl,
        }}
        grabCursor={true}
        className="overflow-visible shadow-lg cursor-pointer h-full relative"
      >
        {sliders.map((slide, index) => (
          <SwiperSlide key={index}>
            <motion.div
              variants={contentContainer}
              initial="hidden"
              animate="show"
              className="w-full min-h-screen md:h-[400px] lg:h-[690px] bg-cover bg-center relative flex pt-28 md:pt-0 md:items-center justify-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="absolute inset-0 bg-black/50"></div>
              <motion.div
                variants={contentContainer}
                initial="hidden"
                animate="show"
                className="relative z-10 px-6 md:px-16 text-white space-y-4 max-w-2xl"
              >
                <motion.h2
                  variants={contentItem}
                  className="text-2xl md:text-4xl mb-4 font-bold"
                >
                  {slide.title}
                </motion.h2>
                <motion.p
                  variants={contentItem}
                  className="text-sm md:text-base mb-4"
                >
                  {slide.desc}
                </motion.p>
                <motion.div
                  variants={contentItem}
                  className="flex flex-col md:flex-row gap-5 items-center "
                >
                  <Link
                    to="/quote"
                    className="bg-primary hover:bg-blue-600 text-lg font-bold text-center cursor-pointer text-white px-5 py-4 rounded-md transition duration-300 w-[220px]"
                  >
                    Track Your Cargo
                  </Link>
                  <Link
                    to="/contact"
                    className="bg-white text-primary cursor-pointer text-center text-lg font-bold hover:bg-gray-100 px-5 py-4 rounded-md transition duration-300 w-[220px]"
                  >
                    Get a Quote
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navigation buttons */}
      <div className="absolute bottom-[190px] md:top-2/3 right-1/2 translate-x-1/2 md:right-16 md:translate-x-0 z-20 flex md:flex-col gap-10 group">
        <button
          ref={(node) => setNextEl(node)}
          onMouseDown={(e) => e.preventDefault()}
          aria-label="Next Slide"
          className="w-[50px] h-[50px]  items-center justify-center rounded-full border border-white text-white shadow-md cursor-pointer hidden hover:bg-primary group-hover:flex transition"
        >
          <MdArrowForwardIos size={24} />
        </button>

        <button
          ref={(node) => setPrevEl(node)}
          onMouseDown={(e) => e.preventDefault()}
          aria-label="Previous Slide"
          className="w-[50px] h-[50px]  items-center justify-center rounded-full border border-white text-white shadow-md cursor-pointer hidden hover:bg-primary group-hover:flex transition"
        >
          <MdArrowBackIos size={24} />
        </button>
      </div>
    </div>
  );
};

export default HeroMain;
