import React from "react";
import { motion } from "framer-motion";
import basic from "../assets/Images/SMM-07.jpg";
import premium from "../assets/Images/SMM-09.jpg";
import legacy from "../assets/Images/SMM-08.jpg";
import { FiArrowDown, FiCheck } from "react-icons/fi";

const BrandingWebsite = () => {
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
            REBOOST YOUR BRAND,  {" "}
            {/* <br /> */}
            BUILD A COMMUNITY, &
            <br />
            <span style={{ color: "#052DA8" }}>INCREASE SALES </span>
            {/* <br /> */}
            {/* <span style={{ color: "#052DA8" }}>MARKETING</span> */}
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
            Attention, Founders & Business Owners! It’s time to revolutionize how your customers perceive, trust, and engage with your brand. Transform your brand identity, brand strategy, and messaging to help you thrive in 2025.
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
          You have <span className="text-orange-400 font-extrabold">too BIG</span> of a
          story to have a{" "}
          <span className="text-orange-400 font-extrabold">small brand</span>
        </p>
      </div>

      <div className="testimonials">

      </div>

      <div className="text-left py-8 md:flex md:justify-between md:px-72 md:py-32 md:items-center">
        <h2 className="text-3xl text-black font-extrabold pb-2 md:text-5xl md:w-2/4">Our 5-Step Process to <br /><span className="text-[#052DA8]">Get You Results</span></h2>
        <ul className="text-xl list-disc px-5 pt-2 md:text-2xl md:relative left-40">
          <li className="pb-1"><span className="font-extrabold">Discovery Session:</span> We Access & Understand your business, goals and market audience.</li>
          <li className="pb-1"><span className="font-extrabold">Audit & Analysis:</span> We Pinpoint gaps in your branding.</li>
          <li className="pb-1"><span className="font-extrabold">Strategy Design:</span>  We Craft a tailored branding roadmap.</li>
          <li className="pb-1"><span className="font-extrabold">Execution:</span> We Design and implement branding assets.</li>
          <li className=""><span className="font-extrabold">Refinement & Delivery:</span> We optimize the results for maximum impact.</li>
        </ul>
      </div>

      <div className="bg-black text-white text-center px-3 py-4 my-6 md:-mx-20 md:py-6">
        <h3 className="text-[22px] font-extrabold pb-2 md:text-4xl"><span className="text-orange-400">Our Solutions</span></h3>
        <p className="text-base md:text-2xl md:pt-2">This is how you can Reboost Your Brand, build a community of loyal customers, and Increase sales</p>
      </div>

      <div className="basic md:my-8">
        <div className="flex flex-col justify-center md:flex-row">
          <div className="flex justify-center self-center md:w-2/4">
            <img src={basic} alt="" className="size-5/6 self-center md:size-96 md:gap-10" />
          </div>
          <div className="flex flex-col justify-center md:w-2/4">
          <h2 className="text-[#052DA8] pt-4 text-center px-6 text-2xl font-extrabold font-Barlow md:text-[28px]">BASIC REBOOST</h2>
            <h3 className="text-[#052DA8] pt-4 px-2 text-xl font-extrabold font-Barlow md:text-[28px]">For businesses that wants to start with a clean professional visual for their brand:</h3>
            <FiArrowDown size={45} className="flex self-center md:text-[#fafafa] md:display" />
            <ul className="text-xl px-2 md:pb-4">
              <li><FiCheck size={45} className="inline mr-2" />Logo.</li>
              <li><FiCheck size={45} className="inline mr-2" />Brand guidelines</li>
              <li><FiCheck size={45} className="inline mr-2" />Brand identity design or revamp.</li>
              <li><FiCheck size={45} className="inline mr-2" />Perfect For: A quick, professional visual upgrade.</li>
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
                CLICK TO VIEW OUR PRICES AND AVAILABILITY
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
          <h2 className="text-[#052DA8] pt-4 text-center px-6 text-2xl font-extrabold font-Barlow md:text-[28px]">ESSENTIAL REBOOST</h2>
            <h3 className="text-[#052DA8] pt-4 px-6 text-xl font-extrabold font-Barlow md:text-[28px]">For businesses ready to combine visuals and a sales funnel to look more professional and covert sales:</h3>
            <FiArrowDown size={45} className="flex self-center md:text-[#fafafa]" />
            <ul className="text-xl px-2 md:pb-4">
              <li><FiCheck size={45} className="inline mr-2" />Everything in Basic Reboot, plus:</li>
              <li><FiCheck size={45} className="inline mr-2" />Website & SEO</li>
              <li><FiCheck size={45} className="inline mr-2" />Sales Funnel</li>
              <li><FiCheck size={45} className="inline mr-2" />Recommended Automations</li>
              <li><FiCheck size={45} className="inline mr-2" />Website Copywriting</li>
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
                CLICK TO VIEW OUR PRICES AND AVAILABILITY
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
            <h3 className="text-[#052DA8] pt-4 px-6 text-xl font-extrabold font-Barlow text-center md:text-left md:text-[28px]">Complete solution for market dominance</h3>
          <FiArrowDown size={45} className="flex self-center md:text-[#fafafa]" />
          <ul className="text-xl px-2 md:pb-4">
            <li><FiCheck size={45} className="inline mr-2" />Everything in Basic & Essential Reboot:</li>
            <li><FiCheck size={45} className="inline mr-2" />Brand Strategy</li>
            <li><FiCheck size={45} className="inline mr-2" />Brand Messaging</li>
            <li><FiCheck size={45} className="inline mr-2" />Brand Positioning</li>
            <li><FiCheck size={45} className="inline mr-2" />6 weeks Brand Coaching and implementation guidlines</li>
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

      

      <div className="bg-black text-white text-left px-6 py-5 mt-5 md:w-6/12 md:self-center">
      <h2 className="text-3xl font-extrabold pb-2 md:text-5xl md:text-center text-red-800">The Risks of Not <br /><span className="">Branding Properly</span></h2>
      <ul className="text-2xl list-disc px-5 pt-2 md:text-2xl ">
          <li className="pb-1">Loss of revenue due to inconsistent or outdated branding</li>
          <li className="pb-1">Struggling with customer trust and loyalty.</li>
          <li className="pb-1">Missed opportunities in competitive markets.</li>
          <li className="pb-1">Ineffective communication of your brand’s value and story.</li>
          <li className="pb-1">Difficulty attracting your ideal clients.</li>
        </ul>
      </div>

      <div className="bg-[#0E28C3] relative text-center bg-center -mx-5 py-4 px-12 text-[24px] font-normal md:-mx-20">
        <p className="text-white text-center">
          You have <span className="text-orange-400 font-bold">too BIG</span> of a GOAL to
          let SOCIAL MEDIA hold{" "}
          <span className="text-orange-400 font-bold">you back</span>
        </p>
      </div>

      <button
        className="px-4 py-4 font-Barlow font-extrabold text-red-700 transition-all duration-300 text-[25px] w-11/12 mt-10 rounded-3xl self-center border border-red-600 md:w-1/3"
        style={{
          backgroundColor: "#fafafa",
          hover: { backgroundColor: "#0E28C3" },
        }}
      >
        BOOK A CALL TODAY !
      </button>
      <div className="md:w-2/3 md:flex md:flex-col md:self-center md:my-6">
        <div className="bg-black text-white text-left px-8 py-10 mt-10 -mx-7 rounded-[70px] relative z-50 md:rounded-[0]">
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

export default BrandingWebsite;
