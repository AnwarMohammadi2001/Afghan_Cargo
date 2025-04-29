import React, { useState, useEffect } from "react";
import Button from "../utils/Button";
import { fadeIn } from "../utils/framermotion/variants";
import { SiCodefactor } from "react-icons/si";
import { motion } from "framer-motion";
import { FaHeadphones } from "react-icons/fa";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

import { FaUsers, FaBoxOpen, FaStar } from "react-icons/fa";

const Facts = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.5 });
  const [startCount, setStartCount] = useState(false);

  useEffect(() => {
    if (inView) {
      setStartCount(true);
    }
  }, [inView]);
  return (
    <div className="relative  bg-white dark:bg-zinc-900 transition-colors duration-500 overflow-hidden">
      {/* Background Pattern */}

      <div className="relative z-10 px-10 md:px-4 md:max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between min-h-[70vh]  backdrop-blur-md gap-8 transition-colors duration-500">
        {/* Text Section */}
        <motion.div
          variants={fadeIn("down", 0)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.7 }}
          className="md:w-1/2 space-y-4"
        >
          <div className="flex items-center gap-4 mb-4">
            <SiCodefactor size={40} className="text-primary" />
            <h2 className="text-xl font-bold text-primary">Some Facts</h2>
          </div>
          <h3 className="text-4xl font-semibold text-gray-700 dark:text-gray-300 transition-colors duration-500">
            Why people Want Us?
          </h3>
          <p className="text-gray-600 text-[14px] text-justify dark:text-gray-300 transition-colors duration-500">
            Its representatives think of themselves as logistics and supply
            chain problem solvers. Manufacturers contact them with their
            shipping problem and they solve it. The service is extremely
            personal and tailored to the needs of the customer.
          </p>
          <div className="flex items-center gap-5 mt-4">
            <div className="flex items-center justify-center w-16 h-16 bg-primary text-white  shadow-lg">
              <FaHeadphones size={40} className="" />
            </div>
            <div className="">
              <p className="text-xl font-semibold text-gray-700 dark:text-gray-300 transition-colors duration-500">
                Call for any query!
              </p>
              <p className="text-2xl text-primary font-semibold ">0772387935</p>
            </div>
          </div>
        </motion.div>

        {/* Image Section */}
        <motion.div
          variants={fadeIn("up")}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0 }}
          ref={ref}
          className="md:w-1/2 w-full flex flex-col md:flex-row h-auto md:h-[350px] gap-5"
        >
          {/* Left Column */}
          <div className="flex flex-col justify-between w-full md:w-1/2 gap-5">
            {/* Happy Clients */}
            <div className="flex flex-col items-center justify-center bg-primary text-secondary rounded-2xl shadow-lg h-[160px] p-4 text-center transition hover:scale-105">
              <FaUsers size={36} />
              <span className="text-3xl font-bold mt-2">
                {startCount && <CountUp end={938} duration={2} />}
              </span>
              <p className="text-lg font-semibold">Happy Clients</p>
            </div>

            {/* Completed Shipments */}
            <div className="flex flex-col items-center justify-center bg-primary text-secondary rounded-2xl shadow-lg h-[160px] p-4 text-center transition hover:scale-105">
              <FaBoxOpen size={36} />
              <span className="text-3xl font-bold mt-2">
                {startCount && (
                  <CountUp end={2530} duration={2.5} separator="," />
                )}
              </span>
              <p className="text-lg font-semibold">Completed Shipments</p>
            </div>
          </div>

          {/* Right Column */}
          <div className="flex items-center justify-center w-full md:w-1/2">
            <div className="flex flex-col items-center justify-center bg-primary text-secondary rounded-2xl shadow-lg h-full w-full p-4 text-center transition hover:scale-105">
              <FaStar size={36} />
              <span className="text-3xl font-bold mt-2">
                {startCount && (
                  <CountUp end={4.9} duration={1.5} decimals={1} />
                )}
                /5
              </span>
              <p className="text-lg font-semibold">Customer Reviews</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Facts;
