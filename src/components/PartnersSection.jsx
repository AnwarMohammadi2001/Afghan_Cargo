import React from "react";
import { motion } from "framer-motion";

const partners = [
  { id: 1, name: "FedEx", logo: "/logos/fedex.png" },
  { id: 2, name: "DHL", logo: "/logos/dhl.png" },
  { id: 3, name: "UPS", logo: "/logos/ups.png" },
  { id: 4, name: "TNT", logo: "/logos/tnt.png" },
  { id: 5, name: "Maersk", logo: "/logos/maersk.png" },
  { id: 6, name: "Amazon", logo: "/logos/amazon.png" },
];

const PartnersSection = () => {
  return (
    <section className="bg-white dark:bg-gray-900 py-20 px-4 sm:px-6 lg:px-16">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-gray-800 dark:text-white mb-8"
        >
          Trusted by Global Partners
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-gray-600 dark:text-gray-300 mb-12 max-w-xl mx-auto"
        >
          We are proud to collaborate with world-leading logistics and ecommerce
          brands.
        </motion.p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 items-center justify-items-center">
          {partners.map((partner, idx) => (
            <motion.div
              key={partner.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="opacity-80 hover:opacity-100 transition"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="max-h-12 object-contain grayscale hover:grayscale-0 transition duration-300"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
