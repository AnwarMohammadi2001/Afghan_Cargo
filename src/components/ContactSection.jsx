import React from "react";
import Button from "../utils/Button"; // ✅ Import the button component
import { motion, useInView } from "framer-motion";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { useRef } from "react";
import {
  fadeIn,
  container,
  contentContainer,
  contentItem,
} from "../utils/framermotion/variants";
import { MdEmail, MdAddIcCall } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  return (
    <section className="bg-gray-100  dark:bg-zinc-900 transition-colors duration-500 min-h-screen pt-10">
      {/* Contact Information */}
      <motion.div
        variants={contentContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.3 }}
        className=" text-center"
      >
        <motion.div
          variants={contentContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.3 }}
          className="mb-10"
        >
          <motion.h2
            variants={contentItem}
            className="text-3xl md:text-2xl  font-bold text-primary dark:text-white"
          >
            Get In Touch
          </motion.h2>
          <motion.p
            variants={contentItem}
            className="text-base mt-2 md:text-2xl  font-bold text-black dark:text-white"
          >
            We’re here to assist with all your cargo needs. Contact us today!
          </motion.p>
        </motion.div>

        <motion.div
          variants={contentItem}
          className="max-w-[80%] mx-auto flex flex-col md:flex-row justify-around p-4 bg-white
         space-y-4 md:space-y-0 md:space-x-12  md:h-[100px] text-gray-800 dark:text-gray-200 dark:bg-zinc-700 transition-colors duration-500"
        >
          <div className="flex items-center gap-x-4">
            <FaLocationDot className="text-4xl text-[#F4A91A]" />
            <div className="flex flex-col items-start">
              <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                Locations:
              </span>
              <span className="text-lg font-semibold text-[#1C70BA]">
                123 Street, City, Country
              </span>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-center gap-x-4">
            <MdEmail className="text-4xl text-[#F4A91A]" />
            <div className="flex flex-col items-start">
              <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                Email:
              </span>
              <span className="text-lg font-semibold text-[#1C70BA]">
                info@easycargo.com
              </span>
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-center gap-x-4">
            <MdAddIcCall className="text-4xl text-[#F4A91A]" />
            <div className="flex flex-col items-start">
              <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                Phone:
              </span>
              <span className="text-lg font-semibold text-[#1C70BA]">
                +93 772 387 935
              </span>
            </div>
          </div>
        </motion.div>

        {/* Request a Quote Form */}
        <motion.div
          variants={contentItem}
          className="bg-white dark:bg-zinc-900 transition-colors duration-500 max-w-[80%] mt-5 mx-auto"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 h-full ">
            {" "}
            <motion.div
              ref={ref}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={isInView ? { scale: 1, opacity: 1 } : {}}
              transition={{ duration: 1.2, ease: "easeInOut" }}
              className="h-full w-full"
            >
              <LazyLoadImage
                src="slider/ab1.webp"
                alt=""
                effect="blur"
                className="h-[250px] md:h-[500px] w-full"
              />
            </motion.div>
            <div className="p-4 md:p-8">
              <form className="space-y-6">
                <h3 className="text-xl font-semibold mb-4 text-primary ">
                  Request a Quote
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="relative group">
                    <input
                      required
                      type="text"
                      id="name"
                      className="border-2 w-full text-gray-300 px-3 focus:text-primary text-lg py-1.5 focus:outline-none bg-transparent rounded-md focus:border-primary peer"
                    />
                    <span className="absolute left-3 top-3 px-2 text-md uppercase text-gray-600 dark:text-gray-300 peer-focus:text-primary pointer-events-none peer-focus:text-sm peer-focus:-translate-y-4 duration-200 bg-white dark:bg-zinc-900 peer-valid:text-sm peer-valid:-translate-y-5 mr-4">
                      Your Name
                    </span>
                  </div>
                  <div className="relative group">
                    <input
                      required
                      type="email"
                      id="email"
                      className="border-2 w-full text-gray-500 px-3  focus:text-primary text-lg py-1.5 focus:outline-none bg-transparent rounded-md focus:border-primary peer"
                    />
                    <span className="absolute left-3 top-3 px-2 text-md uppercase text-gray-600 dark:text-gray-300 transition-colors  peer-focus:text-primary pointer-events-none peer-focus:text-sm peer-focus:-translate-y-4 duration-200 bg-white dark:bg-zinc-900 peer-valid:text-sm peer-valid:-translate-y-5 mr-4">
                      Your Email
                    </span>
                  </div>
                </div>
                <div className="flex flex-col  gap-2 items-start">
                  <label
                    htmlFor="cargo"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    Cargo Type
                  </label>
                  <select
                    id="cargo"
                    className="w-full p-2 border-2 border-gray-300 text-gray-600 rounded-lg focus:border-primary focus:outline-none bg-transparent"
                    required
                  >
                    <option value="">Select Cargo Type</option>
                    <option value="air">Air Freight</option>
                    <option value="sea">Sea Freight</option>
                    <option value="land">Land Freight</option>
                  </select>
                </div>
                <div className="flex flex-col  gap-2 items-start">
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    className="w-full px-4 py-2 border-2 min-h-[100px] max-h-[150px] border-gray-300 text-gray-600 rounded-lg focus:border-primary focus:outline-none bg-transparent placeholder:text-base"
                    rows="6"
                    placeholder="Additional details or special requests"
                    required
                  ></textarea>
                </div>
                <div className="flex justify-center ">
                  <Button type="submit">Send</Button>
                </div>
              </form>
            </div>
          </div>
        </motion.div>

        {/* Office Location Map */}
        <motion.div variants={contentItem} className="mt-5">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13152.509721725968!2d69.10178689632572!3d34.49965354530851!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38d16907f0663131%3A0xd7b3b753bc22924f!2sMuhammad%20Ali%20Jinnah%20Hospital%20Kabul!5e0!3m2!1sen!2s!4v1745147310037!5m2!1sen!2s"
            width="100%"
            height="450"
            loading="lazy"
          ></iframe>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ContactSection;
