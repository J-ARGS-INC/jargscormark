import React from "react";
import { motion } from "framer-motion";
import basic from "../assets/Images/SMM-07.jpg";
import premium from "../assets/Images/SMM-09.jpg";
import legacy from "../assets/Images/SMM-08.jpg";
import { FiArrowDown, FiCheck } from "react-icons/fi";

const SocialMediaMarketing = () => {
  return (
    <div className="py-10 px-5 md:py-[18vh] md:px-20 bg-[#fafafa] flex flex-col font-Barlow">
      <div className="max-w-6xl mx-auto bg-white md:gap-10 lg:bg-[#fafafa] py-4 md:w-full md:pl-20">
        {/* Left Column (Heading) */}
        <motion.div
          initial={{ translateY: 30, opacity: 0 }}
          whileInView={{ translateY: 0, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          viewport={{ once: true }}
          className="md:full text-center md:text-left"
        >
          <h1
            className="text-[38px] font-extrabold font-Barlow leading-tight md:text-5xl md:mb-2"
            style={{ color: "#000" }}
          >
            ELEVATE YOUR {" "}
            {/* <br /> */}
            BUSINESS WITH
            <br />
            <span style={{ color: "#052DA8" }}>SOCIAL MEDIA </span>
            {/* <br /> */}
            <span style={{ color: "#052DA8" }}>MARKETING</span>
          </h1>
        </motion.div>

        {/* Right Column (Paragraph and Button) */}
        <motion.div
          initial={{ translateX: -20, opacity: 0 }}
          animate={{ translateX: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="md:w-4/5 mt-8 md:mt-0 text-center"
        >
          {/* Paragraph */}
          <p
            className="font-Mulish text-lg text-center md:text-left md:mt-5 md:text-xl "
            style={{ color: "#000" }}
          >
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
              className="px-8 py-4 font-Barlow font-bold text-white transition-all duration-300 text-3xl w-11/12 md:w-full"
              style={{
                backgroundColor: "#0E28C3",
                hover: { backgroundColor: "#052DA8" },
              }}
              onMouseOver={(e) =>
                (e.currentTarget.style.backgroundColor = "#052DA8")
              }
              onMouseOut={(e) =>
                (e.currentTarget.style.backgroundColor = "#0E28C3")
              }
            >
              BOOK A CALL
            </button>
          </motion.div>
        </motion.div>
      </div>
      <div className="h-[450px]  relative mt-14 bg-[#fafafa] md:w-2/3 self-center">
        <iframe
          src="https://www.youtube.com/embed/HqR9pPD4THA?si=ZbYIuTNQLkyjlSMH"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          className="w-[100%] h-[100%]"
        ></iframe>
      </div>
      <div className="bg-[#000] relative text-center bg-center -mx-5 py-4 px-12 text-[23px] font-bold md:-mx-20 md:py-6">
        <p className="text-white text-center md:text-4xl">
          You have <span className="text-orange-400 font-bold">too BIG</span> of a GOAL to
          let SOCIAL MEDIA hold{" "}
          <span className="text-orange-400 font-bold">you back</span>
        </p>
      </div>
      <div className="text-left py-8 md:flex md:justify-between md:px-72 md:py-32 md:items-center">
        <h2 className="text-4xl text-black font-extrabold pb-2 md:text-5xl md:w-2/4">This Offer is for if <br /><span className="text-[#052DA8]">You're in;</span></h2>
        <ul className="text-xl list-disc px-5 pt-2 md:text-2xl md:relative left-20">
          <li className="pb-1">Real Estate</li>
          <li className="pb-1">Hotel & Restaurants</li>
          <li className="pb-1">E-commerce</li>
          <li className="pb-1">Professional services</li>
          <li className="pb-1">Local Businesses</li>
          <li >& if you're Ambitious & Impact driven</li>
        </ul>
      </div>

      <div className="bg-black text-white text-center px-3 py-4 mb-6 md:-mx-20 md:py-6">
        <h3 className="text-[22px] font-extrabold pb-2 md:text-4xl">Our <span className="text-orange-400">Social Media Marketing</span> Packages</h3>
        <p className="text-base md:text-2xl md:pt-2">Here's how you can attract more customers online whikle you partner with us</p>
      </div>

      <div className="basic md:my-8">
        <div className="flex flex-col justify-center md:flex-row">
          <div className="flex justify-center self-center md:w-2/4">
            <img src={basic} alt="" className="size-5/6 self-center md:size-96 md:gap-10" />
          </div>
          <div className="flex flex-col justify-center md:w-2/4">
            <h3 className="text-[#052DA8] pt-4 px-6 text-xl font-extrabold font-Barlow md:text-2xl">For businesses ready to build a srong online presence:</h3>
            <FiArrowDown size={45} className="flex self-center md:text-[#fafafa] md:display" />
            <ul className="text-xl px-2 md:pb-4">
              <li><FiCheck size={45} className="inline mr-2" />Complete review of your social media presence</li>
              <li><FiCheck size={45} className="inline mr-2" />Content plan that connects you with customers</li>
              <li><FiCheck size={45} className="inline mr-2" />Social media setup and optimization</li>
              <li><FiCheck size={45} className="inline mr-2" />Clear performance tracking</li>
              <li><FiCheck size={45} className="inline mr-2" />Monthly planning sessions</li>
            </ul>

            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.6 }}
              className="mt-5"
            >
              <button
                className="px-4 py-4 font-Barlow font-bold text-white transition-all duration-300 text-[23px] md:text-xl md:self-center"
                style={{
                  backgroundColor: "#0E28C3",
                  hover: { backgroundColor: "#052DA8" },
                }}
              >
                BOOK A CALL TO SEE IF BASIC IS THE RIGHT FOR YOU
              </button>
            </motion.div>
          </div>
        </div>


      </div>

      <div className="premium mt-10">
        <div className="flex flex-col justify-center md:flex-row">
          <div className="flex justify-center self-center md:w-2/4">
            <img src={premium} alt="" className="size-5/6 self-center md:size-96 md:gap-10" />
          </div>

          <div className="flex flex-col justify-center md:w-2/4">
            <h3 className="text-[#052DA8] pt-4 px-6 text-xl font-extrabold font-Barlow md:text-2xl">For businesses ready to build a srong online presence:</h3>
            <FiArrowDown size={45} className="flex self-center md:text-[#fafafa]" />
            <ul className="text-xl px-2 md:pb-4">
              <li><FiCheck size={45} className="inline mr-2" />Everything in Basic, plus:</li>
              <li><FiCheck size={45} className="inline mr-2" />Strategy for multiple social platforms</li>
              <li><FiCheck size={45} className="inline mr-2" />High-quality content creation</li>
              <li><FiCheck size={45} className="inline mr-2" />Analysis of your competitors</li>
              <li><FiCheck size={45} className="inline mr-2" />Managed Social media advertising</li>
            </ul>

            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.6 }}
              className="mt-5"
            >
              <button
                className="px-4 py-4 font-Barlow font-extrabold text-white transition-all duration-300 text-[18px] md:text-xl md:self-center"
                style={{
                  backgroundColor: "#0E28C3",
                  hover: { backgroundColor: "#052DA8" },
                }}
              >
                BOOK A CALL TO SEE IF PREMIUM IS THE RIGHT FOR YOU
              </button>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="legacy mt-10 md:my-14">
        <div className="flex flex-col justify-center md:flex-row">
          <div className="flex justify-center self-center md:w-2/4">
            <img src={legacy} alt="" className="size-5/6 self-center md:size-96 md:gap-10" />
          </div>

          <div className="flex flex-col justify-center md:w-2/4">
            <h3 className="text-[#052DA8] pt-4 px-6 text-xl font-extrabold font-Barlow text-center md:text-left">Complete solution for market dominance</h3>
          <FiArrowDown size={45} className="flex self-center md:text-[#fafafa]" />
          <ul className="text-xl px-2 md:pb-4">
            <li><FiCheck size={45} className="inline mr-2" />Everything in Premium, plus:</li>
            <li><FiCheck size={45} className="inline mr-2" />Reputaion protection planning</li>
            <li><FiCheck size={45} className="inline mr-2" />In-depth market research</li>
            <li><FiCheck size={45} className="inline mr-2" />Priority support</li>
            <li><FiCheck size={45} className="inline mr-2" />Quarterly business reviews</li>
            <li><FiCheck size={45} className="inline mr-2" />Advanced marketing automation</li>
            <li><FiCheck size={45} className="inline mr-2" />Brand Management Support</li>
            <li><FiCheck size={45} className="inline mr-2" />Complete market leadership strategy</li>
          </ul>

          <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.6 }}
          className="mt-5"
        >
          <button
            className="px-4 py-4 font-Barlow font-extrabold text-white transition-all duration-300 text-[19px] md:text-xl md:self-center"
            style={{
              backgroundColor: "#0E28C3",
              hover: { backgroundColor: "#052DA8" },
            }}
          >
            BOOK A CALL TO SEE IF LEGACY IS THE RIGHT FOR YOU
          </button>
        </motion.div>
          </div>
        </div>
      </div>

      <div className="bg-black text-white text-left px-6 py-5 mt-10">
        <h3 className="text-4xl font-extrabold pb-2 text-red-700">Don't Miss Out</h3>
        <p className="text-2xl my-2">Everyday without a strong social media strategy means:</p>
        <ul className="list-disc px-4 text-2xl">
          <li>Lost customers</li>
          <li>Missed sales oppurtunities</li>
          <li>Higher costs to get new customers</li>
          <li>Weaker brand repuation</li>
        </ul>
      </div>

      <div className="bg-[#0E28C3] relative text-center bg-center -mx-5 py-4 px-12 text-[24px] font-normal ">
        <p className="text-white text-center">
          You have <span className="text-orange-400 font-bold">too BIG</span> of a GOAL to
          let SOCIAL MEDIA hold{" "}
          <span className="text-orange-400 font-bold">you back</span>
        </p>
      </div>

      <button
        className="px-4 py-4 font-Barlow font-extrabold text-red-700 transition-all duration-300 text-[25px] w-11/12 mt-10 rounded-3xl self-center border border-red-600"
        style={{
          backgroundColor: "#fafafa",
          hover: { backgroundColor: "#0E28C3" },
        }}
      >
        BOOK A CALL TODAY !
      </button>
      <div className="">
        <div className="bg-black text-white text-left px-8 py-10 mt-10 -mx-7 rounded-[70px] relative z-50">
          <h3 className="text-4xl font-extrabold pb-2 text-red-700 text-center">Special Offer - Limited Time Only</h3>
          <p className="text-2xl my-3">Act before February 28th, 2025, and receive:</p>
          <ul className="list-disc px-4 text-2xl">
            <li>Tailored Marketing and Brand Research</li>
            <li>Tailored Marketing and Brand Strategy</li>
          </ul>
          <p className="text-2xl my-3">All to kick start your brand and online presence with full energy!</p>
        </div>

        <div className="text-center relative bg-[#0E28C3] text-white -mx-6 pt-14 pb-6 bottom-10 -z-0">
          <h3 className="text-3xl font-extrabold my-2">60 Days Money Back Guarantee !</h3>
          <p className="text-2xl">If you're not satisfied working with us</p>
        </div>
      </div>

      <div>
        <button
          className="px-4 py-3 font-Barlow font-extrabold text-[#0E28C3] transition-all duration-300 text-[28px] w-11/12 rounded-3xl self-center border border-blue-800 hover:bg-[#052DA8] hover:text-[#fafafa]"
        // style={{
        //   backgroundColor: "#fafafa",
        // }}
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
