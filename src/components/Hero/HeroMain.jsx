import React, { useRef, useState, useEffect, useMemo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { MdArrowForwardIos, MdArrowBackIos } from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import { FaPlane } from "react-icons/fa";

// Animation Variants (Memoized to avoid re-creation on each render)
const fadeIn = (direction, delay) => {
  return {
    hidden: {
      y: direction === "up" ? 40 : direction === "down" ? -40 : 0,
      x: direction === "left" ? 40 : direction === "right" ? -40 : 0,
      opacity: 0,
    },
    show: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        type: "tween",
        duration: 1.2,
        delay: delay,
        ease: [0.25, 0.25, 0.25, 0.75],
      },
    },
  };
};

const contentContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

// Slide Data
const SLIDES = [
  {
    id: 1,
    name: "Afgan Cargo",
    desc: "We bridge the gap between you and your cargo with our reliable transport solutions.",
    image1: "/slider/ser1.jpg",
    image2: "/slider/ser2.avif",
    alt: "Cargo transportation services",
    path: "/services",
    text: "Learn More",
  },
  {
    id: 2,
    name: "Afgan Cargo",
    desc: "Trained and professional team to handle your cargo with care.",
    image1: "/slider/about1.jpg",
    image2: "/slider/about2.webp",
    alt: "Professional cargo handling",
    path: "/about",
    text: "About Us",
  },
  {
    id: 3,
    name: "Afgan Cargo",
    desc: "Easy Steps for Deliver products to your destination.",
    image1: "/slider/contact.webp",
    image2: "/slider/contact2.avif",
    alt: "Easy cargo delivery process",
    path: "/contact",
    text: "Contact Us",
  },
];

// Plane Circle Component
const RotatingCircle = () => (
  <motion.div
    className="absolute left-[10%] top-[20%] z-20 h-[250px] w-[250px] border-[4px] border-dashed border-white rounded-full"
    animate={{ rotate: 360 }}
    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
    aria-hidden="true"
  >
    <motion.div className="absolute -top-5 left-1/2 -translate-x-1/2 text-white">
      <FaPlane size={40} />
    </motion.div>
    <motion.div className="absolute -bottom-5 left-1/2 -translate-x-1/2 text-white rotate-180">
      <FaPlane size={40} />
    </motion.div>
  </motion.div>
);

// Hero Main Component
const HeroMain = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [prevEl, setPrevEl] = useState(null);
  const [nextEl, setNextEl] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [animationKey, setAnimationKey] = useState(0);

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.realIndex);
    // Force re-animation by changing the key
    setAnimationKey((prev) => prev + 1);
  };

  return (
    <section
      className="bg-slate-900 relative w-full min-h-[600px] md:min-h-[500px] lg:min-h-screen overflow-hidden"
      aria-label="Main hero slider"
    >
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        // autoplay={{ delay: 5000, disableOnInteraction: false }}
        slidesPerView={1}
        loop={true}
        speed={2000}
        navigation={{
          prevEl,
          nextEl,
        }}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
        }}
        onSlideChange={handleSlideChange}
        grabCursor={true}
        className="h-full relative z-10"
      >
        {SLIDES.map((slide, index) => (
          <SwiperSlide key={slide.id}>
            <div className="w-full h-screen md:min-h-[500px] lg:h-screen relative flex pt-28 md:pt-0 px-[10%] md:items-center justify-start">
              {/* Rotating Plane Circle */}
              <RotatingCircle />

              {/* Slide Text with Animation */}
              <AnimatePresence>
                <motion.div
                  key={`text-${animationKey}`}
                  className="relative z-30 px-6 md:px-16 text-white space-y-4 max-w-4xl"
                  variants={contentContainer}
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                >
                  <motion.h2
                    className="text-2xl md:text-xl font-bold px-6 py-3 rounded-full"
                    variants={fadeIn("left", 0.1)}
                  >
                    {slide.name}
                  </motion.h2>
                  <motion.p
                    className="text-4xl md:text-6xl font-extrabold mb-4 leading-relaxed md:leading-snug"
                    variants={fadeIn("left", 0.3)}
                  >
                    {slide.desc}
                  </motion.p>
                  <motion.div
                    variants={fadeIn("left", 0.5)}
                    className="flex flex-col md:flex-row gap-5 items-center"
                  >
                    <Link
                      to={slide.path}
                      className="bg-blue-600 hover:bg-blue-700 text-lg font-bold text-center cursor-pointer text-white px-5 py-4 rounded-md transition duration-300 w-[220px] flex items-center justify-center"
                      aria-label="Track your cargo"
                    >
                      {slide.text}{" "}
                      <IoIosArrowForward size={24} className="ml-2" />
                    </Link>
                  </motion.div>
                </motion.div>
              </AnimatePresence>

              {/* Background Images with Animation */}
              <div className="absolute inset-0 z-0 overflow-hidden">
                <motion.img
                  key={`img1-${animationKey}`}
                  src={slide.image1}
                  alt={slide.alt}
                  className="absolute top-[10%] right-[5%] h-[600px] w-[600px] rounded-full object-cover opacity-80"
                  loading="lazy"
                  initial={{ x: 100, opacity: 0 }}
                  animate={{ x: 0, opacity: 0.8 }}
                  transition={{
                    duration: 1,
                    delay: 0.4,
                    ease: [0.25, 0.25, 0.25, 0.75],
                  }}
                />
               

                <motion.img
                  key={`img2-${animationKey}`}
                  src={slide.image2}
                  alt={slide.alt}
                  className="absolute bottom-[13%] right-[23%] h-[350px] w-[350px] rounded-full object-cover opacity-80"
                  loading="lazy"
                  initial={{ x: 100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{
                    duration: 1,
                    delay: 0.6,
                    ease: [0.25, 0.25, 0.25, 0.75],
                  }}
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navigation Buttons */}
      <div className="absolute bottom-[190px] md:bottom-[150px] right-1/2 translate-x-1/2 md:left-[15%] md:translate-x-0 z-20 flex gap-5 group">
        <button
          ref={(node) => setPrevEl(node)}
          onMouseDown={(e) => e.preventDefault()}
          aria-label="Previous Slide"
          className="w-[50px] h-[50px] flex items-center justify-center bg-gray-600   text-white shadow-md cursor-pointer hover:bg-gray-700 transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <MdArrowBackIos size={24} />
        </button>
        <button
          ref={(node) => setNextEl(node)}
          onMouseDown={(e) => e.preventDefault()}
          aria-label="Next Slide"
          className="w-[50px] h-[50px] flex items-center justify-center bg-gray-600   text-white shadow-md cursor-pointer hover:bg-gray-700 transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <MdArrowForwardIos size={24} />
        </button>
      </div>
    </section>
  );
};

export default HeroMain;
