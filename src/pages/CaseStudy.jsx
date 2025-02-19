
import React from 'react'
import { motion } from 'framer-motion'
import { LuCheckCircle } from "react-icons/lu";
import { TbSquareCheck } from "react-icons/tb";

const CaseStudy = () => {
    const selected_case = {
        id: 1,
        img: "https://images.pexels.com/photos/3992656/pexels-photo-3992656.png",
        name: "Jonas Winkler",
        desc: "Jonas is an influencer in the woodworking industry in Germany. Before working with us– he was stuck at 10,000 followers on Instagram, confused about who his audience was, and struggled to find his unique advantages/strengths.",
        services: ["Brand Strategy", "Brand Strategy & Identity", "Graphic Design"],
        results: [
            "$500,000/year revenue (5x growth within three years of working together)",
            "Grew her following to 30K+ on Instagram",
            "Established herself as a reputable coach in the beauty industry",
            "Launched business coaching/membership to help scale her lash business"
        ],
        links: [
            "Check out Infinite Gratitude's Instagram page",
            "One of her WHY posts went viral, and you can take a look at it here"
        ],
        details: []
    }
    return (
        <div>
            <div className='  py-10 px-10  md:py-[18vh] md:px-[20vw] bg-[#fdfdfd] font-Barlow'>
                <div className='grid grid-cols-1  md:grid-cols-1 items-end gap-5 mb-20'>
                    <motion.div initial={{ translateY: 30, opacity: 0 }} whileInView={{ translateY: 0, opacity: 1 }} transition={{ duration: 0.4, delay: 0.2 }} viewport={{ once: true }}>

                        <h1 className='text-4xl font-bold font-Barlow'>
                            {selected_case.name}

                        </h1>

                    </motion.div>

                    <motion.div initial={{ translateX: -20, opacity: 0 }} animate={{ translateX: 0, opacity: 1 }} transition={{ delay: 0.4 }}>
                        <p className='font-Mulish'>{selected_case.desc}
                        </p>

                    </motion.div>

                    <div className='grid gap-7 mt-5'>
                        <div className='grid grid-cols-1 md:grid-cols-4 items-center '>
                            <p className='text-lg text-gray-400'>Services</p>
                            <div className='md:col-span-3'>
                                <div className='flex flex-wrap    gap-3'>
                                    {
                                        selected_case.services.map((item, index) => <span className='border border-black  py-2 px-3' key={index}>{item}</span>)
                                    }
                                </div>
                            </div>
                        </div>

                        <div className='grid grid-cols-1 md:grid-cols-4 items-center'>
                            <p className='text-lg text-gray-400'>Results</p>
                            <div className='md:col-span-3'>
                                <ul>
                                    {
                                        selected_case.results.map((item, index) =>
                                            <li key={index} className='flex items-center gap-4 mb-2'><LuCheckCircle size={20} /> <span>{item}</span></li>)
                                    }

                                </ul>
                            </div>
                        </div>

                        <div className='grid grid-cols-1 md:grid-cols-4 items-center'>
                            <p className='text-lg text-gray-400'>Links</p>
                            <div className='md:col-span-3'>
                                <ul>
                                    {
                                        selected_case.links.map((item, index) =>
                                            <li key={index} className='flex items-center gap-4 mb-2'><TbSquareCheck size={20} /> <span>{item}</span></li>)
                                    }

                                </ul>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default CaseStudy
