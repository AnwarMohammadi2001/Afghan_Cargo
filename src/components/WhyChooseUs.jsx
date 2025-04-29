import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  FaHeadset,
  FaMapMarkedAlt,
  FaMoneyBillWave,
  FaClock,
  FaPause,
  FaPlay,
} from "react-icons/fa";
import { scaleFadeVariant, fadeeIn } from "../utils/framermotion/variants";

const WhyChooseUs = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  return (
    <section className="bg-white dark:bg-zinc-900 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 py-24 ">
        {/* Section Header */}
        <div className="text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white"
          >
            Why Choose Easy Cargo?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mt-4 text-gray-600 dark:text-gray-300 max-w-xl mx-auto text-base"
          >
            Discover the reasons our customers trust us for their cargo needs.
          </motion.p>
        </div>

        {/* Feature 1 */}
        <div className="grid md:grid-cols-2 items-center mt-10 bg-amber-100 dark:bg-zinc-800 transition-colors duration-500 overflow-hidden shadow-md">
          <div className="p-10">
            <div className="flex items-center gap-4 mb-4">
              <FaHeadset className="text-4xl text-[#02DB81]" />
              <h2 className="font-bold text-2xl text-gray-800 dark:text-primary transition-colors duration-500">
                24/7 Customer Support
              </h2>
            </div>
            <p className="text-gray-700 dark:text-gray-300 text-justify text-base">
              We understand that in the world of cargo and logistics, time is
              critical and support can’t wait. That’s why our dedicated customer
              support team is available 24 hours a day, 7 days a week, including
              holidays. Whether you're tracking a shipment, facing a
              customs-related inquiry, or need assistance with documentation and
              logistics planning, our knowledgeable team is always just a call
              or message away.
            </p>
          </div>
          <motion.img
            variants={scaleFadeVariant(0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            loading="lazy"
            src="/about/new.jpg"
            alt="Support"
            className="h-full w-full object-cover"
          />
        </div>

        {/* Feature 2 */}
        <motion.div className="grid md:grid-cols-2 mt-5 items-center bg-amber-100 dark:bg-zinc-800 transition-colors duration-500 overflow-hidden shadow-md relative">
          {/* Video Section */}
          <div className="relative overflow-hidden">
            <motion.video
              variants={scaleFadeVariant(0.3)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              ref={videoRef}
              src="cargo.mp4"
              autoPlay
              loop
              muted
              playsInline
              preload="metadata" // or "none"
              className="h-full w-full object-cover order-1 md:order-none"
            />

            {!isPlaying && (
              <div className="absolute inset-0 bg-black/80 bg-opacity-50 flex items-center justify-center z-10">
                <p className="text-white text-xl">Video Paused</p>
              </div>
            )}

            <button
              onClick={togglePlay}
              className="absolute bottom-4 right-4 z-20 p-3 bg-white bg-opacity-80 rounded-full shadow hover:bg-opacity-100 transition"
            >
              {isPlaying ? <FaPause /> : <FaPlay />}
            </button>
          </div>

          {/* Text Content */}
          <div className="p-10">
            <div className="flex items-center gap-4 mb-4">
              <FaMapMarkedAlt className="text-4xl text-[#02DB81]" />
              <h2 className="font-bold text-2xl text-gray-800 dark:text-primary transition-colors duration-500">
                Live GPS Tracking
              </h2>
            </div>
            <p className="text-gray-700 dark:text-gray-300 text-justify text-base transition-colors duration-500">
              Stay in control of your shipments with our advanced live GPS
              tracking system. We provide real-time visibility into your cargo’s
              location, movement, and delivery status across every stage of the
              journey. Whether it’s local or international shipping, you’ll have
              instant access to route updates, estimated arrival times, and any
              unexpected delays — all from your dashboard or mobile device.
            </p>
          </div>
        </motion.div>

        {/* Feature 3 and 4 */}
        <div className="grid md:grid-cols-2 gap-8 mt-10">
          {/* Affordable Rates */}
          <div className="bg-amber-100 dark:bg-zinc-800 transition-colors duration-500 shadow-md overflow-hidden">
            <motion.img
              variants={scaleFadeVariant(0.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              loading="lazy"
              src="/about/price.jpg"
              alt="Rates"
              className="h-[220px] w-full object-cover"
            />
            <div className="p-6">
              <div className="flex items-center gap-4 mb-4">
                <FaMoneyBillWave className="text-4xl text-[#02DB81]" />
                <h2 className="font-bold text-2xl text-gray-800 dark:text-primary transition-colors duration-500">
                  Affordable Rates
                </h2>
              </div>
              <p className="text-gray-700 dark:text-gray-300 text-justify text-base">
                We offer cost-effective shipping solutions tailored to your
                needs — without ever compromising on reliability or service
                quality. Whether you’re moving small parcels or large freight,
                our competitive pricing ensures that you get the best value for
                your money.
              </p>
            </div>
          </div>

          {/* On-Time Delivery */}
          <div className="bg-amber-100 dark:bg-zinc-800 transition-colors duration-500  shadow-md overflow-hidden">
            <motion.img
              variants={scaleFadeVariant(0.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              src="/about/ontime.jpg"
              loading="lazy"
              alt="On-Time"
              className="h-[220px] w-full object-cover"
            />
            <div className="p-6">
              <div className="flex items-center gap-4 mb-4">
                <FaClock className="text-4xl text-[#02DB81]" />
                <h2 className="font-bold text-2xl text-gray-800 dark:text-primary transition-colors duration-500">
                  On-Time Delivery
                </h2>
              </div>
              <p className="text-gray-700 dark:text-gray-300 text-justify text-base">
                Punctuality is at the heart of our logistics service. We
                understand that delays can disrupt your business, which is why
                we are committed to ensuring your cargo arrives on schedule —
                every time. Through our efficient planning, reliable
                transportation network, and real-time tracking, we minimize
                transit time and prevent unnecessary hold-ups.
              </p>
            </div>
          </div>
        </div>

        {/* Statistics Section */}
        <div className="bg-gray-200 dark:bg-zinc-700 transition-colors duration-500 py-14 rounded-2xl mt-10 shadow-inner">
          <div className="max-w-6xl mx-auto grid sm:grid-cols-2 md:grid-cols-4 gap-10 text-center">
            {[
              {
                label: "Deliveries Completed",
                value: "10K+",
                color: "#010302",
              },
              {
                label: "On-Time Delivery Rate",
                value: "99%",
                color: "#02DB81",
              },
              { label: "Customer Support", value: "24/7", color: "#02DB81" },
              { label: "Years of Experience", value: "15+", color: "#02DB81" },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeeIn("up", i * 0.3)}
                whileInView="show"
                initial="hidden"
                viewport={{ once: false, amount: 0.2 }}
              >
                <h3
                  className="text-4xl font-bold"
                  style={{ color: item.color }}
                >
                  {item.value}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 transition-colors duration-500 mt-2 text-sm">
                  {item.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
