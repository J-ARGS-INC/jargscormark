import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import { NavLink } from 'react-router-dom'
import { MdArrowOutward } from "react-icons/md";
import { useRequest } from '../hooks/requests';
import { globalUrl } from '../api/api';
const CaseStudies = () => {
    const { data: { loading, response }, Get } = useRequest();
    useEffect(() => {
        Get("/api/user/casestudy", false)
    }, [])

    return (
        <div>
            <div className='  py-10 px-5  md:py-[18vh] md:px-20 bg-[#fdfdfd]'>
                <div className='grid grid-cols-1  md:grid-cols-2 items-end gap-20 mb-20'>
                    <motion.div initial={{ translateY: 30, opacity: 0 }} whileInView={{ translateY: 0, opacity: 1 }} transition={{ duration: 0.4, delay: 0.2 }} viewport={{ once: true }}>

                        <h1 className='text-4xl font-bold font-Barlow'>
                            Real Results: Transforming Ideas into Impact – Our Case Studies

                        </h1>

                    </motion.div>

                    <motion.div initial={{ translateX: -20, opacity: 0 }} animate={{ translateX: 0, opacity: 1 }} transition={{ delay: 0.4 }}>
                        <p className='font-Mulish'>Behind every success is a story of innovation, strategy, and transformation. Our case studies highlight real-world challenges, the solutions we implement, and the measurable impact we deliver. From optimizing business processes to enhancing digital experiences, we turn ideas into results.

                            Explore our case studies to see how we help businesses grow, innovate, and thrive.
                        </p>

                    </motion.div>
                </div>


            </div>
            <div>

                {response ? (<div className='md:px-20 md:py-32 grid md:grid-cols-7 gap-5 font-Barlow'>
                    {
                        response.map(({ _id, name, services, description, youtubeVideo, image }, index) => {
                            return <div key={index}
                                className={`p-5 flex flex-col border border-primary rounded-sm h-[800px] ${(index + 1) % 2 == 0 ? "md:col-span-4"
                                    : (index + 1) % 3 == 0 ? "md:col-span-4"
                                        : "md:col-span-3"}`}>


                                {youtubeVideo ? <iframe src={youtubeVideo} height={1400}></iframe> : <img src={`${globalUrl}${image}`} className='w-[100%] h-[50%] object-cover rounded-sm' alt="" />}

                                <h1 className='mt-5 mb-3 font-Barlow text-xl font-semibold'>{name}</h1>
                                <p className='font-light'>{description}</p>
                                <div className='flex flex-wrap text-xs pt-6 gap-3 mb-6'>
                                    {
                                        services.map((item, index) => <span className='border border-black rounded-full py-2 px-3' key={index}>{item}</span>)
                                    }
                                </div>

                                <div className='h-[100%] flex items-end'>
                                    <NavLink to={`/case_studies/${_id}`} className={"flex gap-1 text-primary"}>
                                        <span>View Case Study</span>
                                        <MdArrowOutward size={20} />
                                    </NavLink>
                                </div>
                            </div>
                        })
                    }
                </div>) : ""}
            </div>


        </div>
    )
}

export default CaseStudies
