import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import {
  FaLaptop,
  FaTruckPickup,
  FaShippingFast,
  FaMapMarkedAlt,
} from "react-icons/fa";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Step data
const steps = [
  {
    id: 1,
    title: "Book Online",
    description:
      "Easily schedule your shipment from our website or mobile app.",
    icon: <FaLaptop className="text-white text-2xl" />,
    bg: "bg-gradient-to-br from-green-400 to-green-600",
    image: "https://via.placeholder.com/400x200?text=Book+Online",
  },
  {
    id: 2,
    title: "We Pick Up",
    description: "Our team picks up the cargo from your doorstep or warehouse.",
    icon: <FaTruckPickup className="text-white text-2xl" />,
    bg: "bg-gradient-to-br from-blue-400 to-blue-600",
    image: "https://via.placeholder.com/400x200?text=Pick+Up",
  },
  {
    id: 3,
    title: "We Deliver",
    description: "We safely deliver your cargo to the destination on time.",
    icon: <FaShippingFast className="text-white text-2xl" />,
    bg: "bg-gradient-to-br from-yellow-400 to-yellow-600",
    image: "https://via.placeholder.com/400x200?text=Deliver",
  },
  {
    id: 4,
    title: "You Track It",
    description:
      "Track your shipment in real-time with our GPS-enabled system.",
    icon: <FaMapMarkedAlt className="text-white text-2xl" />,
    bg: "bg-gradient-to-br from-purple-400 to-purple-600",
    image: "https://via.placeholder.com/400x200?text=Track",
  },
];

const HowItWorks = () => {
  return (
    <section className="bg-white dark:bg-gray-900 py-20 px-4 sm:px-8 lg:px-24">
      {/* Section Header */}
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-primary dark:text-white">
          How It Works
        </h2>
        <p className="text-lg md:text-xl text-black dark:text-white mt-4">
          A simple and seamless cargo delivery process designed with you in
          mind.
        </p>
      </div>

      {/* Swiper Steps */}
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        loop={true}
        autoplay={{ delay: 3000 }}
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true }}
        navigation
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 2 },
        }}
        className="cursor-pointer"
      >
        {steps.map((step, index) => (
          <SwiperSlide key={step.id}>
            <div className="relative group rounded-2xl bg-white dark:bg-gray-800 p-8 shadow-xl transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl h-full flex flex-col justify-between">
              {/* Image */}
              <div className="overflow-hidden rounded-xl mb-6">
                <img
                  src={step.image}
                  alt={step.title}
                  className="w-full h-56 object-cover rounded-xl transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              {/* Icon + Title */}
              <div className="flex items-center gap-4 mb-4">
                <div
                  className={`w-14 h-14 flex items-center justify-center rounded-full shadow-md ${step.bg}`}
                >
                  {step.icon}
                </div>
                <h3 className="text-xl md:text-2xl font-semibold text-gray-800 dark:text-white">
                  {step.title}
                </h3>
              </div>

              {/* Description */}
              <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed">
                {step.description}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default HowItWorks;
