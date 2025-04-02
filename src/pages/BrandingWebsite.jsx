import React from "react";
import { motion } from "framer-motion";
import basic from "../assets/Images/SMM-07.jpg";
import premium from "../assets/Images/SMM-09.jpg";
import legacy from "../assets/Images/SMM-08.jpg";
import { FiArrowDown, FiCheck } from "react-icons/fi";

const BrandingWebsite = () => {
  return (
    <div className="py-10 px-5 md:py-[18vh] md:px-20 bg-[#fafafa] flex flex-col font-Barlow">
      {/* Hero Section */}
      <div className="max-w-6xl mx-auto bg-white md:gap-10 lg:bg-[#fafafa] py-6 md:w-full md:pl-20 flex flex-col md:flex-row md:items-center">
        {/* Left Column (Heading) */}
        <motion.div
          initial={{ translateY: 30, opacity: 0 }}
          whileInView={{ translateY: 0, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          viewport={{ once: true }}
          className="md:w-1/2 text-center md:text-left"
        >
          <h1 className="text-[38px] font-extrabold leading-tight md:text-5xl md:mb-3 text-black">
            REBOOST YOUR BRAND, BUILD A COMMUNITY, &{" "}
            <span className="text-[#052DA8]">INCREASE SALES</span>
          </h1>
        </motion.div>

        {/* Right Column (Paragraph & Button) */}
        <motion.div
          initial={{ translateX: -20, opacity: 0 }}
          animate={{ translateX: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="md:w-1/2 mt-8 md:mt-0 text-center md:text-left px-4 md:px-0"
        >
          {/* Paragraph */}
          <p className="text-lg md:text-xl text-black">
            Attention, Founders & Business Owners! It’s time to revolutionize how
            your customers perceive, trust, and engage with your brand. Transform
            your brand identity, brand strategy, and messaging to help you thrive
            in 2025.
          </p>

          {/* Button */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.6 }}
            className="mt-10 md:w-1/3"
          >
            <button
              className="px-8 py-4 font-bold text-white text-2xl w-11/12 rounded-md transition-all duration-300 md:w-max"
              style={{ backgroundColor: "#0E28C3" }}
              onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#052DA8")}
              onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#0E28C3")}
            >
              BOOK A CALL
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* Video Section */}
      <div className="h-[450px] relative mt-14 bg-[#fafafa] md:w-2/3 self-center">
        <iframe
          src="https://youtu.be/GviXadNi0ug"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          className="w-[100%] h-[100%]"
        ></iframe>
      </div>

      {/* Banner Section */}
      <div className="bg-[#000] relative text-center bg-center -mx-5 py-4 px-10 text-[20px] font-bold md:-mx-20 md:py-6">
        <p className="text-white text-center md:text-4xl">
          You have <span className="text-orange-400 font-bold">too BIG</span> of a
          story to have a{" "}
          <span className="text-orange-400 font-bold">small brand</span>
        </p>
      </div>

      {/* 5-Step Process Section */}
      <div className="text-left py-8 md:flex md:justify-between md:px-32 md:py-28 md:items-center">
        <h2 className="text-[32px] font-extrabold text-black md:text-6xl md:w-2/5 leading-tight md:relative md:left-20">
          Our 5-Step Process to{" "}
          <span className="text-[#052DA8] block md:inline">Get You Results</span>
        </h2>

        <div className="relative md:w-2/5 md:left-20">
          <div className="absolute -top-5 -left-5 w-16 h-16 bg-[#052DA8] opacity-20 rounded-full blur-xl"></div>
          <ul className="text-lg md:text-2xl bg-white shadow-lg p-6 rounded-lg border-l-8 border-[#052DA8]">
            <li className="flex items-center gap-3">
              <span className="text-[#052DA8] text-3xl">1</span> Discovery Session
            </li>
            <li className="flex items-center gap-3">
              <span className="text-[#052DA8] text-3xl">2</span> Audit & Analysis
            </li>
            <li className="flex items-center gap-3">
              <span className="text-[#052DA8] text-3xl">3</span> Strategy Design
            </li>
            <li className="flex items-center gap-3">
              <span className="text-[#052DA8] text-3xl">4</span> Execution
            </li>
            <li className="flex items-center gap-3">
              <span className="text-[#052DA8] text-3xl">5</span> Refinement & Delivery
            </li>
          </ul>
        </div>
      </div>

      {/* Packages Section */}
      <div className="bg-black text-white text-center px-3 py-4 mb-6 md:-mx-20 md:py-6">
        <h3 className="text-[22px] font-extrabold pb-2 md:text-4xl">
          Our <span className="text-orange-400">Branding Solutions</span>
        </h3>
        <p className="text-base md:text-2xl md:pt-2">
          This is how you can Reboost Your Brand, build a community of loyal
          customers, and Increase sales
        </p>
      </div>

      {/* Basic Package */}
      <div className="basic md:my-8">
        <div className="flex flex-col justify-center md:flex-row bg-gradient-to-r from-gray-100 via-white to-gray-100 shadow-lg rounded-lg">
          {/* Image Section */}
          <div className="flex justify-center self-center md:w-2/4">
            <img src={basic} alt="Basic Plan" className="size-5/6 self-center md:size-96 md:gap-10" />
          </div>

          {/* Content Section */}
          <div className="flex flex-col justify-center md:w-2/4 p-6">
            <h3 className="text-[#052DA8] pt-4 text-xl font-extrabold font-Barlow md:text-[28px] leading-snug">
              BASIC REBOOST
            </h3>
            <p className="text-lg md:text-xl text-black">
              For businesses that want to start with a clean, professional visual
              for their brand:
            </p>

            <ul className="text-lg md:text-xl list-none space-y-4 bg-white shadow-md rounded-lg p-6 border-l-8 border-[#052DA8] mt-6">
              <li className="flex items-center gap-3">
                <span className="text-[#052DA8] text-3xl">✔</span> Logo
              </li>
              <li className="flex items-center gap-3">
                <span className="text-[#052DA8] text-3xl">✔</span> Brand Guidelines
              </li>
              <li className="flex items-center gap-3">
                <span className="text-[#052DA8] text-3xl">✔</span> Brand Identity Design or Revamp
              </li>
              <li className="flex items-center gap-3">
                <span className="text-[#052DA8] text-3xl">✔</span> Perfect For: A quick, professional visual upgrade
              </li>
            </ul>

            {/* CTA Button */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.6 }}
              className="mt-6 flex justify-center"
            >
              <button
                className="px-6 py-4 font-Barlow font-bold text-white text-lg md:text-xl rounded-lg transition-all duration-300 hover:bg-[#052DA8]"
                style={{ backgroundColor: "#0E28C3" }}
              >
                CLICK TO VIEW OUR PRICES AND AVAILABILITY
              </button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Premium Package */}
      <div className="premium mt-10">
        <div className="flex flex-col justify-center md:flex-row bg-gradient-to-r from-gray-100 via-white to-gray-100 shadow-lg rounded-lg">
          {/* Image Section */}
          <div className="flex justify-center self-center md:w-2/4">
            <img src={premium} alt="Premium Plan" className="size-5/6 self-center md:size-96 md:gap-10" />
          </div>

          {/* Content Section */}
          <div className="flex flex-col justify-center md:w-2/4 p-6">
            <h3 className="text-[#052DA8] pt-4 text-xl font-extrabold font-Barlow md:text-[28px] leading-snug">
              ESSENTIAL REBOOST
            </h3>
            <p className="text-lg md:text-xl text-black">
              For businesses ready to combine visuals and a sales funnel to look
              more professional and convert sales:
            </p>

            <ul className="text-lg md:text-xl list-none space-y-4 bg-white shadow-md rounded-lg p-6 border-l-8 border-[#052DA8] mt-6">
              <li className="flex items-center gap-3">
                <span className="text-[#052DA8] text-3xl">✔</span> Everything in Basic Reboot, plus:
              </li>
              <li className="flex items-center gap-3">
                <span className="text-[#052DA8] text-3xl">✔</span> Website & SEO
              </li>
              <li className="flex items-center gap-3">
                <span className="text-[#052DA8] text-3xl">✔</span> Sales Funnel
              </li>
              <li className="flex items-center gap-3">
                <span className="text-[#052DA8] text-3xl">✔</span> Recommended Automations
              </li>
              <li className="flex items-center gap-3">
                <span className="text-[#052DA8] text-3xl">✔</span> Website Copywriting
              </li>
            </ul>

            {/* CTA Button */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.6 }}
              className="mt-6 flex justify-center"
            >
              <button
                className="px-6 py-4 font-Barlow font-bold text-white text-lg md:text-xl rounded-lg transition-all duration-300 hover:bg-[#052DA8]"
                style={{ backgroundColor: "#0E28C3" }}
              >
                CLICK TO VIEW OUR PRICES AND AVAILABILITY
              </button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Legacy Package */}
      <div className="legacy mt-10 md:my-14">
        <div className="flex flex-col justify-center md:flex-row bg-gradient-to-r from-gray-100 via-white to-gray-100 shadow-lg rounded-lg">
          {/* Image Section */}
          <div className="flex justify-center self-center md:w-2/4">
            <img src={legacy} alt="Legacy Plan" className="size-5/6 self-center md:size-96 md:gap-10" />
          </div>

          {/* Content Section */}
          <div className="flex flex-col justify-center md:w-2/4 p-6">
            <h3 className="text-[#052DA8] pt-4 text-xl font-extrabold font-Barlow md:text-[28px] leading-snug">
              COMPLETE REBOOST
            </h3>
            <p className="text-lg md:text-xl text-black">
              For businesses aiming for complete market dominance and building an
              actual community behind their brand:
            </p>

            <ul className="text-lg md:text-xl list-none space-y-4 bg-white shadow-md rounded-lg p-6 border-l-8 border-[#052DA8] mt-6">
              <li className="flex items-center gap-3">
                <span className="text-[#052DA8] text-3xl">✔</span> Everything in Basic & Essential Reboot, plus:
              </li>
              <li className="flex items-center gap-3">
                <span className="text-[#052DA8] text-3xl">✔</span> Brand Strategy
              </li>
              <li className="flex items-center gap-3">
                <span className="text-[#052DA8] text-3xl">✔</span> Brand Messaging
              </li>
              <li className="flex items-center gap-3">
                <span className="text-[#052DA8] text-3xl">✔</span> Brand Positioning
              </li>
              <li className="flex items-center gap-3">
                <span className="text-[#052DA8] text-3xl">✔</span> 6 Weeks Brand Coaching and Implementation Guidelines
              </li>
            </ul>

            {/* CTA Button */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.6 }}
              className="mt-6 flex justify-center"
            >
              <button
                className="px-6 py-4 font-Barlow font-bold text-white text-lg md:text-xl rounded-lg transition-all duration-300 hover:bg-[#052DA8]"
                style={{ backgroundColor: "#0E28C3" }}
              >
                BOOK A CALL TO SEE IF LEGACY IS RIGHT FOR YOU
              </button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Risks Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-black text-white text-left px-6 py-10 mt-10 rounded-t-2xl md:w-6/12 md:self-center shadow-lg"
      >
        <h3 className="text-4xl text-balance font-extrabold pb-2 text-red-600 md:text-[40px] leading-tight">
          The Risks of Not Branding Properly
        </h3>
        <ul className="list-disc px-5 text-xl md:text-2xl space-y-3 text-gray-100">
          <li className="hover:text-red-500 transition-all">
            💸 Loss of revenue due to inconsistent or outdated branding
          </li>
          <li className="hover:text-red-500 transition-all">
            📈 Struggling with customer trust and loyalty
          </li>
          <li className="hover:text-red-500 transition-all">
            🚫 Missed opportunities in competitive markets
          </li>
          <li className="hover:text-red-500 transition-all">
            📉 Ineffective communication of your brand’s value and story
          </li>
          <li className="hover:text-red-500 transition-all">
            ⚠️ Difficulty attracting your ideal clients
          </li>
        </ul>
      </motion.div>

      {/* Final Banner Section */}
      <div className="bg-[#0E28C3] relative text-center bg-center -mx-5 py-4 px-12 text-[20px] font-normal md:-mx-20 md:py-8">
        <p className="text-white text-center md:text-3xl">
          You have <span className="text-orange-400 font-extrabold animate-pulse">too BIG</span> of a GOAL to
          let SOCIAL MEDIA hold{" "}
          <span className="text-orange-400 font-extrabold animate-pulse">you back</span>
        </p>
      </div>

      {/* Final CTA Button */}
      <button
        className="px-4 py-4 font-Barlow font-extrabold text-red-700 transition-all duration-300 text-[25px] w-11/12 mt-10 rounded-3xl self-center border border-red-600 md:w-1/3"
        style={{
          backgroundColor: "#fafafa",
          hover: { backgroundColor: "#0E28C3" },
        }}
      >
        BOOK A CALL TODAY !
      </button>

      {/* Special Offer Section */}
      <div className="md:w-2/3 md:flex md:flex-col md:self-center md:my-6">
        {/* Special Offer Box */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-black text-white text-left px-8 py-10 mt-10 -mx-4 rounded-[30px] shadow-lg relative z-50 md:rounded-[10px]"
        >
          <h3 className="text-4xl font-extrabold pb-2 text-red-700 text-center">
            🚀 Special Offer - Limited Time Only
          </h3>
          <p className="text-2xl my-3 text-center">
            Act before <span className="font-bold text-orange-400">March 28th, 2025</span>, and receive:
          </p>
          <ul className="list-disc px-6 text-2xl space-y-2">
            <li>Tailored Marketing and Brand Research</li>
            <li>Tailored Marketing and Brand Strategy</li>
          </ul>
          <p className="text-2xl mt-4 text-center font-semibold text-green-400">
            🎁 All as a Bonus!
          </p>
        </motion.div>

        {/* 60 Days Money-Back Guarantee */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center bg-gradient-to-r from-[#0E28C3] to-[#052DA8] text-white -mx-4 pt-14 pb-6 -mt-6 rounded-lg shadow-md"
        >
          <h3 className="text-3xl font-extrabold my-2">💰 60 Days Money-Back Guarantee!</h3>
          <p className="text-xl">If you don’t start getting results</p>
        </motion.div>
      </div>

      {/* Final Call to Action */}
      <div className="flex flex-col">
        <button
          className="px-4 py-3 mt-8 font-Barlow font-extrabold text-[#0E28C3] transition-all duration-300 text-[28px] w-11/12 rounded-3xl self-center border border-blue-800 hover:bg-[#052DA8] hover:text-[#fafafa] md:w-1/3 md:self-center"
        >
          BOOK A CALL NOW
        </button>

        <p className="text-[23px] px-4 pt-4 text-center text-[#05058E] font-medium">
          Limited spots available to ensure quality service
        </p>

        <p className="text-[18px] px-4 pt-4 text-center text-black font-medium">
          "The Year Is Already Moving Fast—Don’t Let Your Brand Fall Behind."
        </p>
      </div>
    </div>
  );
};

export default BrandingWebsite;