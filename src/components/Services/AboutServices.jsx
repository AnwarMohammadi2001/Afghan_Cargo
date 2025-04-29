import React from "react";
import { Truck, Plane, Ship, Package } from "lucide-react"; // Or use your preferred icons
import Button from "../../utils/Button";
import { useNavigate } from "react-router-dom";
const servicesLeft = [
  {
    icon: "/about/service-dark-1.png",
    title: "Cargo Transportation",
    description:
      "Ut elit tellus, luctus nec magna mattis et, pulvinar dapibus lorem leo ultricies et vitae enim.",
  },
  {
    icon: "/about/service-dark-2.png",
    title: "Air Freight",
    description:
      "Ut elit tellus, luctus nec magna mattis et, pulvinar dapibus lorem leo ultricies et vitae enim.",
  },
];

const servicesRight = [
  {
    icon: "/about/service-dark-3.png",
    title: "Ocean Freight",
    description:
      "Ut elit tellus, luctus nec magna mattis et, pulvinar dapibus lorem leo ultricies et vitae enim.",
  },
  {
    icon: "/about/service-dark-4.png",
    title: "Packaging & Storage",
    description:
      "Ut elit tellus, luctus nec magna mattis et, pulvinar dapibus lorem leo ultricies et vitae enim.",
  },
];

const AboutServices = () => {
  const Navigate = useNavigate();
  return (
    <section className="py-20 bg-white text-gray-800 dark:bg-zinc-900 dark:text-white transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Header */}
        <h2 className="text-3xl font-bold flex justify-center items-center text-primary gap-2">
          Our Service
        </h2>
        <p className="text-gray-500 dark:text-gray-300 transition-colors duration-500 max-w-2xl mx-auto text-base mt-4">
          With reasonable transit times and services in almost all active ports
          in the world, we are there where you want us to be and will help you
          get your freight across from its origin to its destination.
        </p>

        {/* Service layout */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 items-center gap-10">
          {/* Left services */}
          <div className="space-y-10">
            {servicesLeft.map((service, i) => (
              <div
                key={i}
                className="text-left flex flex-col  items-center gap-4"
              >
                <img src={service.icon} alt="" />
                <div className="text-center">
                  <h4 className="font-bold text-lg text-primary">
                    {service.title}
                  </h4>
                  <p className=" text-gray-500 text-base dark:text-gray-300 transition-colors duration-500">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Middle circular image */}
          <div className="flex justify-center">
            <img
              src="/about/about-2.jpg" // Replace with your image path
              alt="Worker"
              className="w-72 h-72 rounded-full object-cover shadow-lg"
            />
          </div>

          {/* Right services */}
          <div className="space-y-10">
            {servicesRight.map((service, i) => (
              <div
                key={i}
                className="text-left flex  flex-col  items-center gap-4"
              >
                <img src={service.icon} alt="" />
                <div className="text-center">
                  <h4 className="font-bold text-lg text-primary">
                    {service.title}
                  </h4>
                  <p className=" text-gray-500 text-base dark:text-gray-300 transition-colors duration-500">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Show all button */}
        <div className="mt-14">
          <Button onClick={() => Navigate("/services")}>Show all →</Button>
        </div>
      </div>
    </section>
  );
};

export default AboutServices;
