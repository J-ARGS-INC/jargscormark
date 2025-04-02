import React from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const Offers = () => {
  const offers = [
    {
      title: "Social Media Marketing",
      link: "social-media-marketing",
    },
    {
      title: "Sponsored Ads",
      link: "meta-ads",
    },
    {
      title: "Branding & Website",
      link: "branding-website",
    },
  ];

  return (
    <div className="relative py-20 px-8 md:py-[15vh] md:px-32 bg-white text-black">
      {/* Header Section */}
      <div className="relative text-center">
        <motion.h1
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-5xl md:text-6xl font-extrabold font-Barlow text-[#0E28C3]"
        >
          JARGS CORMARK
        </motion.h1>
        <motion.h2
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5, ease: "easeOut" }}
          className="text-3xl md:text-4xl font-bold font-Barlow text-[#C0272D] mt-3"
        >
          Best Sellers
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5, ease: "easeOut" }}
          className="text-lg font-Mulish mt-6 max-w-3xl mx-auto"
        >
          Elevate your business with premium digital solutions. Unlock the power of targeted ads, branding, and online marketing today.
        </motion.p>
      </div>

      {/* Offers Section */}
      <div className="relative mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        {offers.map((offer, index) => (
          <motion.div
            key={index}
            initial={{ y: 30, opacity: 0, scale: 0.95 }}
            whileInView={{ y: 0, opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 * index, ease: "easeOut" }}
            whileHover={{ scale: 1.05, rotate: 1 }}
            className="relative group"
          >
            <NavLink to={offer.link} className="block">
              <motion.button
                className="relative w-full p-6 text-center rounded-xl bg-[#F9F9F9] text-[#0E28C3] font-Barlow text-2xl font-semibold border-2 border-[#0E28C3] shadow-md transition-all overflow-hidden group-hover:bg-[#0E28C3] group-hover:text-white"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0px 8px 30px rgba(0, 0, 0, 0.15)",
                }}
              >
                <span className="relative z-10">{offer.title}</span>
              </motion.button>
            </NavLink>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Offers;
