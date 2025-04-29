import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaTiktok } from "react-icons/fa";
import { MdCall, MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer
      style={{
        backgroundImage: "url('map.jpg')",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Overlay color */}
      <div className="bg-black/90 bg-opacity-50 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10">
          {/* Logo and Socials */}
          <div className="text-center sm:text-left">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-wide text-[#1C70BA]">
              Easy <span className="text-[#F4A91A]">Cargo</span>
            </h1>
            <p className="mt-4 text-sm text-gray-300">
              Since 2015, Easy Cargo has delivered reliable and efficient
              logistics solutions, ensuring smooth, stress-free shipping locally
              and globally.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center sm:text-left">
            <h2 className="text-lg font-semibold mb-4">Quick Links</h2>
            <ul className="space-y-2 text-sm text-gray-300">
              {["Home", "Services", "Destinations", "About Us"].map(
                (item, i) => (
                  <li key={i}>
                    <a href="#" className="hover:text-white">
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Support Links */}
          <div className="text-center sm:text-left">
            <h2 className="text-lg font-semibold mb-4">Support</h2>
            <ul className="space-y-2 text-sm text-gray-300">
              {["FAQ", "Terms & Conditions", "Privacy Policy", "Contact"].map(
                (item, i) => (
                  <li key={i}>
                    <a href="#" className="hover:text-white">
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="text-center sm:text-left">
            <h2 className="text-lg font-semibold mb-4">Contact</h2>
            <div className="space-y-2 text-sm text-gray-300">
              <p>455 West Orchard Street</p>
              <p>Kings Mountain, NC 280867</p>
              <div className="flex items-center justify-center sm:justify-start gap-2 mt-2">
                <MdCall className="text-primary" />
                <a href="tel:+93772387935" className="hover:text-white">
                  +93 (077) 238-79-35
                </a>
              </div>
              <div className="flex items-center justify-center sm:justify-start gap-2">
                <MdEmail className="text-primary" />
                <a href="mailto:example@gmail.com" className="hover:text-white">
                  info@easycargo.com
                </a>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div className="text-center sm:text-left">
            <h2 className="text-lg font-semibold mb-4">Newsletter</h2>
            <p className="text-sm text-gray-300 mb-3">
              Subscribe to our newsletter and stay updated.
            </p>
            <form className="flex flex-col  sm:items-center gap-2 w-full">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 w-full px-4 py-2 rounded-md text-gray-900 border bg-gray-100 focus:outline-none"
              />
              <button
                type="submit"
                className="w-full  bg-primary hover:bg-primary/90 text-white py-2 px-4 rounded-md text-sm transition"
              >
                Subscribe
              </button>
            </form>
            <div className="flex justify-center sm:justify-start gap-4 mt-4 text-primary">
              {[FaFacebook, FaTwitter, FaInstagram, FaTiktok].map((Icon, i) => (
                <a key={i} href="#" aria-label={`Social icon ${i + 1}`}>
                  <Icon
                    size={22}
                    className="hover:text-white transition-colors duration-300 cursor-pointer"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom line */}
        <div className="mt-12 border-t border-gray-700 pt-6 text-center text-sm text-gray-400 max-w-4xl mx-auto">
          <p>
            &copy; {new Date().getFullYear()} Adventure Aura. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
