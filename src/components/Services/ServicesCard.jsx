import React from "react";
import { motion } from "framer-motion";
import { fadeeIn } from "../../utils/framermotion/variants";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const ServicesCard = ({ service, index }) => {
  return (
    <motion.div
      variants={fadeeIn("up", index * 0.3)}
      whileInView="show"
      initial="hidden"
      viewport={{ once: false, amount: 0.2 }}
      className="bg-white dark:bg-gray-800 p-6 group shadow-md overflow-hidden rounded-2xl h-[500px] border border-gray-100 dark:border-gray-700 cursor-pointer flex flex-col justify-between"
    >
      <div>
        <div className="h-[200px] w-full rounded-lg overflow-hidden ">
          <LazyLoadImage
            src={service.image}
            alt="services image"
            effect="blur"
            className="h-[200px] w-full object-cover group-hover:scale-110 transition-all duration-500"
          />
        </div>

        <div className="flex items-center gap-4 py-3 mb-4">
          <div className="text-4xl text-blue-600 dark:text-blue-400">
            {service.icon}
          </div>
          <h3 className="text-xl font-bold text-gray-800 dark:text-white">
            {service.title}
          </h3>
        </div>

        <p className="text-base text-gray-600 text-justify dark:text-gray-300 leading-relaxed h-[96px] overflow-hidden">
          {service.description}
        </p>
      </div>

      <div className="mt-5 flex justify-center transition-all group">
        <button className="cursor-pointer relative bg-white/10 py-2 rounded-full min-w-[8.5rem] min-h-[2.92rem] group max-w-full flex items-center justify-start hover:bg-green-400 transition-all duration-[0.8s] ease-[cubic-bezier(0.510,0.026,0.368,1.016)] shadow-[inset_1px_2px_5px_#00000080]">
          <div className="absolute flex px-1 py-0.5 justify-start items-center inset-0">
            <div className="w-[0%] group-hover:w-full transition-all duration-[1s] ease-[cubic-bezier(0.510,0.026,0.368,1.016)]"></div>
            <div className="rounded-full shrink-0 flex justify-center items-center shadow-[inset_1px_-1px_3px_0_black] h-full aspect-square bg-green-400 transition-all duration-[1s] ease-[cubic-bezier(0.510,0.026,0.368,1.016)] group-hover:bg-black">
              <div className="size-[0.8rem] text-black group-hover:text-white group-hover:-rotate-45 transition-all duration-[1s] ease-[cubic-bezier(0.510,0.026,0.368,1.016)]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 16 16"
                  height="100%"
                  width="100%"
                >
                  <path
                    fill="currentColor"
                    d="M12.175 9H0V7H12.175L6.575 1.4L8 0L16 8L8 16L6.575 14.6L12.175 9Z"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
          <div className="pl-[3.4rem] pr-[1.1rem] group-hover:pl-[1.1rem] group-hover:pr-[3.4rem] transition-all duration-[1s] ease-[cubic-bezier(0.510,0.026,0.368,1.016)] group-hover:text-black text-black">
            Read More
          </div>
        </button>
      </div>
    </motion.div>
  );
};

export default ServicesCard;
