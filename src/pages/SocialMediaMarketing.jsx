import React from "react";
import { motion } from "framer-motion";
import basic from "../assets/Images/SMM-07.jpg";
import premium from "../assets/Images/SMM-09.jpg";
import legacy from "../assets/Images/SMM-08.jpg";
import { FiArrowDown, FiCheck } from "react-icons/fi";

const SocialMediaMarketing = () => {
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
            ELEVATE YOUR BUSINESS WITH <br />
            <span className="text-[#052DA8]">SOCIAL MEDIA MARKETING</span>
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
            At Jargs Cormark, we understand how frustrating it is when customers
            can't find you online or when you're stuck figuring out how to
            dominate the digital space. That's why we've developed proven
            solutions to help ambitious business owners like you succeed.
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
          src="https://youtu.be/Nc9P5e429DE?si=O_rWtQwkgzgX5Mtk"
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
          You have <span className="text-orange-400 font-bold">too BIG</span> of a GOAL to
          let SOCIAL MEDIA hold{" "}
          <span className="text-orange-400 font-bold">you back</span>
        </p>
      </div>

      {/* Offer Section */}
      <div className="relative bg-gray-50 py-16 md:px-32 md:py-28 md:flex md:items-center md:gap-20 shadow-md rounded-xl">
        <h2 className="text-4xl font-extrabold text-black md:text-6xl md:w-2/5 leading-tight md:relative md:left-20">
          This Offer is for if{" "}
          <span className="text-[#052DA8] block md:inline">You're in;</span>
        </h2>

        <div className="relative md:w-2/5 md:left-20">
          <div className="absolute -top-5 -left-5 w-16 h-16 bg-[#052DA8] opacity-20 rounded-full blur-xl"></div>
          <ul className="grid grid-cols-2 gap-4 text-lg md:text-2xl bg-white shadow-lg p-6 rounded-lg border-l-8 border-[#052DA8]">
            <li className="flex items-center gap-3">
              <span className="text-[#052DA8] text-3xl">🏢</span> Real Estate
            </li>
            <li className="flex items-center gap-3">
              <span className="text-[#052DA8] text-3xl">🍽</span> Hotel & Restaurants
            </li>
            <li className="flex items-center gap-3">
              <span className="text-[#052DA8] text-3xl">💼</span> Professional Services
            </li>
            <li className="flex items-center gap-3">
              <span className="text-[#052DA8] text-3xl">🛍</span> Retail
            </li>
            <li className="flex items-center gap-3">
              <span className="text-[#052DA8] text-3xl">📍</span> Local Businesses
            </li>
            <li className="flex items-center gap-3 text-lg italic text-gray-500">
              "Or if you're Ambitious & Impact-driven" 🚀
            </li>
          </ul>
        </div>
      </div>

      {/* Packages Section */}
      <div className="bg-black text-white text-center px-3 py-4 mb-6 md:-mx-20 md:py-6">
        <h3 className="text-[22px] font-extrabold pb-2 md:text-4xl">
          Our <span className="text-orange-400">Social Media Marketing</span> Packages
        </h3>
        <p className="text-base md:text-2xl md:pt-2">
          Here's how you can attract more customers online while you partner with us
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
              For businesses ready to build a strong online presence
            </h3>

            <ul className="text-lg md:text-xl list-none space-y-4 bg-white shadow-md rounded-lg p-6 border-l-8 border-[#052DA8] mt-6">
              <li className="flex items-center gap-3">
                <span className="text-[#052DA8] text-3xl">✔</span> Complete review of your social media presence
              </li>
              <li className="flex items-center gap-3">
                <span className="text-[#052DA8] text-3xl">✔</span> Content plan that connects you with customers
              </li>
              <li className="flex items-center gap-3">
                <span className="text-[#052DA8] text-3xl">✔</span> Social media setup and optimization
              </li>
              <li className="flex items-center gap-3">
                <span className="text-[#052DA8] text-3xl">✔</span> Clear performance tracking
              </li>
              <li className="flex items-center gap-3">
                <span className="text-[#052DA8] text-3xl">✔</span> Monthly planning sessions
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
                Let’s See If BASIC is Right for You – Book a Call
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
              Maximize Sales with Precision Targeting
            </h3>

            <ul className="text-lg md:text-xl list-none space-y-4 bg-white shadow-md rounded-lg p-6 border-l-8 border-[#052DA8] mt-6">
              <li className="flex items-center gap-3">
                <span className="text-[#052DA8] text-3xl">✔</span> Everything in Basic, plus:
              </li>
              <li className="flex items-center gap-3">
                <span className="text-[#052DA8] text-3xl">✔</span> Strategy for multiple social platforms
              </li>
              <li className="flex items-center gap-3">
                <span className="text-[#052DA8] text-3xl">✔</span> High-quality content creation
              </li>
              <li className="flex items-center gap-3">
                <span className="text-[#052DA8] text-3xl">✔</span> Analysis of your competitors
              </li>
              <li className="flex items-center gap-3">
                <span className="text-[#052DA8] text-3xl">✔</span> Managed Social media advertising
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
                Let’s See If PREMIUM is Right for You – Book a Call
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
              Achieve Market Dominance & Scale with Confidence
            </h3>

            <ul className="text-lg md:text-xl list-none space-y-4 bg-white shadow-md rounded-lg p-6 border-l-8 border-[#052DA8] mt-6">
              <li className="flex items-center gap-3">
                <span className="text-[#052DA8] text-3xl">✔</span> Everything in Premium, plus:
              </li>
              <li className="flex items-center gap-3">
                <span className="text-[#052DA8] text-3xl">✔</span> Reputation protection planning
              </li>
              <li className="flex items-center gap-3">
                <span className="text-[#052DA8] text-3xl">✔</span> In-depth market research
              </li>
              <li className="flex items-center gap-3">
                <span className="text-[#052DA8] text-3xl">✔</span> Priority support
              </li>
              <li className="flex items-center gap-3">
                <span className="text-[#052DA8] text-3xl">✔</span> Quarterly business reviews
              </li>
              <li className="flex items-center gap-3">
                <span className="text-[#052DA8] text-3xl">✔</span> Advanced marketing automation
              </li>
              <li className="flex items-center gap-3">
                <span className="text-[#052DA8] text-3xl">✔</span> Brand Management Support
              </li>
              <li className="flex items-center gap-3">
                <span className="text-[#052DA8] text-3xl">✔</span> Complete market leadership strategy
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
                Let’s See If LEGACY is Right for You – Book a Call
              </button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Don't Miss Out Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-black text-white text-left px-6 py-10 mt-10 rounded-t-2xl md:w-6/12 md:self-center shadow-lg"
      >
        <h3 className="text-4xl text-balance font-extrabold pb-2 text-red-600 md:text-[40px] leading-tight">
          Don't Keep Losing Money on Poor Social Media Strategies
        </h3>
        <p className="text-2xl my-4 text-gray-300">Everyday with underperforming social media means:</p>
        <ul className="list-disc px-5 text-xl md:text-2xl space-y-3 text-gray-100">
          <li className="hover:text-red-500 transition-all">💸 Lost customers</li>
          <li className="hover:text-red-500 transition-all">📈 Missed sales opportunities</li>
          <li className="hover:text-red-500 transition-all">🚫 Higher costs to get new customers</li>
          <li className="hover:text-red-500 transition-all">📉 Weaker brand reputation</li>
        </ul>

        {/* Optional Call-to-Action Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          className="mt-6 bg-red-600 text-white text-lg font-bold px-6 py-3 rounded-lg transition-all hover:bg-red-700"
        >
          Fix Your Social Media Now
        </motion.button>
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
          <p className="text-2xl my-3 text-center">Act before <span className="font-bold text-orange-400">March 28th, 2025</span>, and receive:</p>
          <ul className="list-disc px-6 text-2xl space-y-2">
            <li> Free Meta Ads Account Audit & Creation</li>
            <li> Free Custom Campaign Strategy</li>
            <li> Free Audience Building Strategy</li>
          </ul>
          <p className="text-2xl mt-4 text-center font-semibold text-green-400">🎁 All as a Bonus!</p>
        </motion.div>

        {/* 60 Days Money-Back Guarantee */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center bg-gradient-to-r from-[#0E28C3] to-[#052DA8] text-white -mx-4 pt-12 pb-6 -mt-6 rounded-lg shadow-md"
        >
          <h3 className="text-3xl font-extrabold my-2">💰 60 Days Money-Back Guarantee!</h3>
          <p className="text-xl">If you're not satisfied working with us, we’ll refund you!</p>
        </motion.div>
      </div>

      {/* Final Call to Action */}
      <div className="flex flex-col">
        <button
          className="px-4 py-3 font-Barlow font-extrabold text-[#0E28C3] transition-all duration-300 text-[28px] w-11/12 rounded-3xl self-center border border-blue-800 hover:bg-[#052DA8] hover:text-[#fafafa] md:w-1/3 md:self-center"
        >
          BOOK A CALL NOW
        </button>

        <p className="text-[23px] px-4 pt-4 text-center text-[#05058E] font-medium">
          Let&apos;s Get you More Customers, Increase your Brand Visibility & contribute to your Success.
        </p>
      </div>
    </div>
  );
};

export default SocialMediaMarketing;