import React from "react";
import AboutHeader from "../components/about/AboutHeader";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import WhyChooseUs from "../components/WhyChooseUs";
import AboutServices from "../components/Services/AboutServices";

const About = () => {
  return (
    <div className="">
      <AboutHeader />
      <div className=" max-w-7xl mx-auto mt-10 px-4 md:px-10 lg:px-24 space-y-16 grid grid-cols-1 md:grid-cols-3 gap-10 p-5">
        {/* Section One: Story, Mission & Vision */}
        <div className="col-span-2 space-y-10 py-10">
          <div className="flex items-center gap-4 mb-4">
            <img src="/title-icon-1.png" alt="" />
            <h2 className="text-4xl font-bold text-primary">Who We Are ?</h2>
          </div>
          <h3 className="text-xl font-semibold text-gray-700">
            The carrier of your goods around the world
          </h3>
          <p className="text-gray-700 dark:text-gray-300 text-[17px] leading-7 text-justify">
            We have your commercial cargo needs covered. At Kabul Barko, we are
            committed to ensuring that we respect your business as it were our
            own. Let us help you succeed by making your supply chain and
            delivery processes a breeze from start to end. We operate in a
            number of challenging destinations where we recognize our clients’
            needs for reliable export services. No matter where the goods are
            travelling to, our goal is to provide complete customer satisfaction
            through consistent quality service.
          </p>

          <div className="space-y-6 text-gray-700 dark:text-gray-300 text-[17px] leading-7">
            <p className="text-justify">
              Easy Cargo is a reliable logistics and shipping service committed
              to simplifying global cargo transport. We pride ourselves on
              providing secure, fast, and efficient delivery services that
              connect businesses and people across borders.
            </p>

            <div>
              <h3 className="text-2xl font-semibold text-primary mb-2">
                Our Mission & Our Vision
              </h3>
              <p className="text-justify">
                To empower global trade by delivering innovative, dependable,
                and customer-focused logistics solutions that make international
                shipping effortless. To be the most trusted cargo service in the
                world, connecting lives through seamless logistics and
                exceptional service.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-primary mb-2">
                Why Choose Us?
              </h3>
              <ul className="list-disc pl-5 space-y-2">
                <li className="flex gap-x-2 items-center">
                  <IoMdCheckmarkCircleOutline className="text-primary" />
                  Fast and reliable delivery worldwide
                </li>
                <li className="flex gap-x-2 items-center">
                  <IoMdCheckmarkCircleOutline className="text-primary" />
                  Real-time tracking of your packages
                </li>
                <li className="flex gap-x-2 items-center">
                  <IoMdCheckmarkCircleOutline className="text-primary" />
                  Affordable pricing with quality service
                </li>
                <li className="flex gap-x-2 items-center">
                  <IoMdCheckmarkCircleOutline className="text-primary" />
                  Friendly and responsive customer support
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Section Two: Images */}
        <div className="col-span-1 gap-6">
          <img
            src="https://images.unsplash.com/photo-1505839673365-e3971f8d9184"
            alt="Cargo Ship at Sea"
            loading="lazy"
            className="w-full h-52 object-cover "
          />
          <img
            src="https://images.pexels.com/photos/4483610/pexels-photo-4483610.jpeg"
            alt="Logistics Warehouse"
            loading="lazy"
            className="w-full h-52 object-cover "
          />
          <img
            src="https://images.unsplash.com/photo-1505839673365-e3971f8d9184"
            alt="Container Yard"
            loading="lazy"
            className="w-full h-52 object-cover "
          />
        </div>
      </div>
      <WhyChooseUs />
      <AboutServices />
    </div>
  );
};

export default About;
