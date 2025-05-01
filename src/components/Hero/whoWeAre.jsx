import React from "react";
import Button from "../../utils/Button";
import { fadeIn } from "../../utils/framermotion/variants";
import { useNavigate } from "react-router-dom";
import { PiUserCheck } from "react-icons/pi";
import { FaRegClock } from "react-icons/fa6";
import { MdOutlineSettingsSuggest } from "react-icons/md";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

const WhoWeAre = () => {
  const data = [
    {
      title: "Market Share",
      icon: <PiUserCheck className="text-white" size={24} />,
      description:
        "Afghan Cargo leads the global market with fast, reliable shipping solutions.",
    },
    {
      title: "People Experience",
      icon: <FaRegClock className="text-white" size={24} />,
      description:
        "We deliver safely and fast 24/7 to get our customers satisfaction internationally.",
    },
    {
      title: "Brilliant Services",
      icon: <MdOutlineSettingsSuggest className="text-white" size={24} />,
      description:
        "We provide innovative logistics solutions for fast, safe delivery worldwide.",
    },
  ];

  // Mouse-tilt effect logic
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [5, -5]); // Tilt up/down
  const rotateY = useTransform(x, [-100, 100], [-5, 5]); // Tilt left/right

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set(e.clientX - centerX);
    y.set(e.clientY - centerY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const Navigate = useNavigate();

  return (
    <sevtion className=" bg-white dark:bg-zinc-900 transition-colors duration-500  min-h-screen overflow-hidden ">
      <div className="relative z-10 max-w-6xl mx-auto flex flex-col justify-center gap-8 px-8 py-10 md:py-24">
        {/* Text Section */}
        <div>
          <h1 className="text-xl text-blue-800 font-bold uppercase">
            About Us
          </h1>

          {/* Animated dashed line with icon */}
          {/* Animated dashed line with icon */}
          <motion.div
            className="relative h-4 my-2"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { duration: 1 },
              },
            }}
          >
            {/* Dashed line - fixed width 90px */}
            <div className="absolute top-1/2 -translate-y-1/2 w-[95px] left-0 h-px border-t-2 border border-blue-800"></div>

            {/* Arrow icon that moves exactly 90px and returns */}
            <motion.div
              className="absolute left-0 top-1/2 -translate-y-1/2 bg-white text-blue-800"
              animate={{
                x: [0, "95px", 0], // Moves from 0 to 90px and back
              }}
              transition={{
                duration: 6, // Total round trip time (1.5s each way)
                ease: "easeInOut",
                repeat: Infinity,
              }}
            >
              <MdKeyboardDoubleArrowRight size={24} />
            </motion.div>
          </motion.div>

          <p className="text-gray-700 dark:text-gray-300 text-base mt-2">
            At Afghan Cargo, we connect you to the world with speed and
            reliability. Our clients trust us to deliver their shipments quickly
            and securely, as we ensure the safe transportation of your valuable
            goods to any destination worldwide. With Afghan Cargo, your cargo is
            in expert hands—every step of the way.
          </p>
        </div>

        {/* Content Grid */}
        <div className="flex flex-col md:grid md:grid-cols-3 relative mt-5 gap-6">
          {/* Left Side */}
          <motion.div
            variants={fadeIn("right", 0)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.7 }}
            className="relative md:col-span-1 space-y-8"
          >
            {/* Vertical dashed line */}
            <div className="absolute left-6 top-0 bottom-0 w-px h-[300px] border-l-2 border-dashed border-gray-300 z-0 hidden md:block" />

            {/* Data Items */}
            {data.map((item, index) => (
              <div
                key={index}
                className="relative flex flex-col md:flex-row items-center md:items-start gap-4 md:pl-16 pl-0"
              >
                {/* Icon */}
                <span
                  className="
                    md:absolute left-0 top-0 w-12 h-12 rounded-full bg-blue-800
                    flex items-center justify-center text-white z-10
                    static md:w-12 md:h-12 md:shrink-0
                  "
                >
                  {item.icon}
                </span>

                {/* Text */}
                <div className="flex flex-col items-center md:items-start gap-2 md:gap-4">
                  <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                    {item.title}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300 text-base mt-1 text-center md:text-left">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Right Side - Image with Mouse Tilt Effect */}
          <motion.div
            variants={fadeIn("left", 0)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.7 }}
            className="md:col-span-2"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
              rotateX,
              rotateY,
              transformPerspective: 1000, // Adds 3D depth
            }}
          >
            <img
              src="/Home-image.png"
              alt="Who We Are"
              className="w-full h-auto object-cover rounded-md"
            />
          </motion.div>
        </div>
      </div>
    </sevtion>
  );
};

export default WhoWeAre;
