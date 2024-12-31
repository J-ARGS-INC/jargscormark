import React from 'react'
import { RxArrowRight } from 'react-icons/rx'
import { NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'
import joshua from "@assets/Images/joshua.jpg"
import cheta from "@assets/Images/cheta.jpg"
import moyin from "@assets/Images/moyin.jpg"
import mbouty from "@assets/Images/mbouty.png"
import mena from "@assets/Images/mena.jpg"
import kenechi from "@assets/Images/kenechi.jpg"

const About = () => {
    let team = [
        {
            name: "Joshua",
            role: "Founder/lead consultant",
            image: joshua
        },
        {
            name: "Cheta",
            role: "Head of data & research (co-founder)",
            image: cheta
        },
        {
            name: "Moyin",
            role: "Financial Analyst",
            image: moyin
        },
        {
            name: "Mbuoty",
            role: "Head of Marketing",
            image: mbouty
        },
        {
            name: "Kenechi",
            role: "Head of IT",
            image: kenechi
        },
        {
            name: "Mena",
            role: "Content Writer",
            image: mena
        }
    ]
    return (
        <div>
            <div className=' py-10 px-5  md:py-[18vh] md:px-20   '>
                <div className='grid grid-cols-1  md:grid-cols-2  gap-20 mb-20'>
                    <motion.div initial={{ translateY: 30, opacity: 0 }} whileInView={{ translateY: 0, opacity: 1 }} transition={{ duration: 0.4, delay: 0.2 }}>
                        <h1 className='text-4xl font-bold font-Barlow'>
                            More Than Marketing: We're Your Trusted Business Growth Partner
                        </h1>

                    </motion.div>

                    <motion.div initial={{ translateX: -20, opacity: 0 }} animate={{ translateX: 0, opacity: 1 }} transition={{ delay: 0.4 }}>

                        <div>
                            <p className='font-Mulish mb-10'>At Jargs Cormark, we don't just offer digital marketing services— We become your trusted partner on the journey to business growth. With our tailored strategies and solutions, we help you move from From Invisible to Unmissable, From Frustrated to Empowered, and from Missing Opportunities to Winning New Markets.

                                Let’s build a future where your brand thrives and grows, together.</p>

                            <NavLink className={"md:w-[80%] flex items-center gap-3 justify-center bg-primary py-4 px-8  text-white rounded-full border hover:border-primary duration-500 "} to={"/book_a_call/paid"}>Schedule a Consultation<RxArrowRight size={20} className='' /></NavLink>
                        </div>
                    </motion.div>

                </div>

                <div className='h-[300px]  relative mb-20'>
                    <img src="https://images.pexels.com/photos/7008307/pexels-photo-7008307.jpeg" alt="" className='w-[100%] h-[100%] object-cover' />
                </div>

                <div className='grid grid-cols-1 md:grid-cols-3 mb-24 gap-20 items-center'>
                    <div className='overflow-hidden'>
                        <motion.div initial={{ x: -300, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true }}>
                            <div className='h-[300px] md:w-[300px]  rounded-full  '>
                                <img src={joshua} alt="" className='w-[100%] h-[100%] object-cover object-top  md:object-center rounded-3xl' />
                            </div>
                        </motion.div>
                    </div>
                    <div className='md:col-span-2 font-Barlow'>
                        <motion.div initial={{ y: 100, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }} viewport={{ once: true }}>
                            <h1 className='text-3xl mb-10'>A Story from Our <i className='text-primary'>Founder’s</i> Voice
                            </h1>
                            <p className='font-light mb-2'>
                                "A lot of people might wonder: Why run a digital marketing and branding agency? Why not something else? For me, it all started with a story—one that shaped my mission and continues to inspire the work we do at Jargs Cormark today.
                                Growing up, I always felt there was something bigger waiting for me. That belief was tested when my family’s stability was disrupted by unexpected government policies. Watching my father, once so active, forced into idleness, and my mother take on new responsibilities was a turning point. It was painful, but it gave me a purpose: to create a life where my family, my community, and anyone connected to me wouldn’t have to face such hardships.
                                Entrepreneurship became my path to this mission. I realized that the core of any successful business is marketing; which when done well, it generates one of the most essential drivers of business growth: ‘cash flow’. By empowering business owners, entrepreneurs, and companies with strategic marketing solutions, I could help prevent others from enduring the struggles I witnessed in my own life.
                                That’s why I founded Jargs Cormark and built a team of like-minded individuals who share my vision. Together, we’re on a mission to help our clients thrive and grow sustainably, increasing their online presence, and building loyal customers who believe in their brand. For us, success isn’t just about results; it’s about ensuring no one feels unsupported in their journey.

                            </p>
                            <p> – Joshua Oboh  </p>
                        </motion.div>
                    </div>
                </div>

                <div className='grid  grid-cols-1 md:grid-cols-3 mb-20 gap-10'>
                    <div className='md:col-span-2'>
                        <h1 className='text-4xl md:text-5xl font-Barlow capitalize font-medium mb-10'>With Over a Decade of  <span className='text-primary'>Experience</span></h1>

                        <div className='flex  items-center gap-5'>
                            <hr className='hidden md:block w-[25%] border-primary' />
                            <p className='font-Mulish'>At Jargs Cormark, we proudly bring over a decade of dedicated expertise in empowering businesses to not only survive but thrive in today’s highly competitive markets. Our journey has been marked by relentless innovation, meaningful collaboration, and an unwavering commitment to excellence in delivering impactful marketing solutions. Over the years, we have partnered with a diverse range of entrepreneurs and companies, understanding their unique challenges and crafting tailored strategies that drive measurable results. From building brand visibility to fostering meaningful connections with target audiences, our mission has always been to guide businesses toward achieving sustainable growth and long-term success. Through a combination of deep industry knowledge, creative problem-solving, and a passion for empowering our clients, Jargs Cormark continues to be a trusted partner for those looking to break barriers, create value, and leave a lasting mark in their industries.</p>
                        </div>

                    </div>

                    <div className='grid  gap-5'>
                        <div className='border border-primary h-fit rounded-2xl p-5'>
                            <h1 className='font-Barlow mb-2'>Projects Done</h1>
                            <h1 className='text-2xl font-Mulish text-primary'>120+</h1>
                        </div>

                        <div className='border border-primary h-fit rounded-2xl p-5'>
                            <h1 className='font-Barlow mb-2'>Satisfied Customers</h1>
                            <h1 className='text-2xl font-Mulish text-primary'>50+</h1>
                        </div>

                        <div className='border h-fit rounded-2xl p-5 shadow-2xl shadow-black/10'>
                            <h1 className='font-Barlow mb-2'>Trusted Partners</h1>
                            <h1 className='text-2xl font-Mulish text-primary'>20+</h1>
                        </div>
                    </div>

                </div>

                {/* Our Vision */}
                <div className='grid grid-cols-1 md:grid-cols-3 gap-12 mb-20'>
                    <div className='md:col-span-2'>
                        <h1 className='text-4xl font-Barlow mb-10'>Our Vision</h1>
                        <p className='font-Mulish'>To be the trusted and indispensable partner for ambitious entrepreneurs and forward-thinking companies, delivering innovative and data-driven marketing solutions that empower them to transcend limitations, overcome challenges, and achieve remarkable, sustainable growth. We are committed to helping our partners not only excel in competitive markets but also create a meaningful, lasting impact that drives progress, fosters innovation, and inspires future generations of business leaders. Through collaboration, creativity, and a relentless pursuit of excellence, we aim to be the catalyst that turns visionary ideas into extraordinary success stories.</p>
                    </div>

                    <div className='grid gap-3 '>
                        <div className=' h-[150px] '>
                            <img src="https://images.pexels.com/photos/28338137/pexels-photo-28338137/free-photo-of-a-woman-with-short-hair-and-a-black-top-is-smiling.jpeg" className='w-[100%] h-[100%] object-cover ' alt="" />
                        </div>
                        <div className=' h-[150px] '>
                            <img src="https://media.istockphoto.com/id/1432226243/photo/happy-young-woman-of-color-smiling-at-the-camera-in-a-studio.jpg?b=1&s=612x612&w=0&k=20&c=Kj3jyq1gGT6qciGM-3cPQTUtLyQeJgUOUYQXj64F-E8=" className='w-[100%] h-[100%] object-cover ' alt="" />
                        </div>
                    </div>
                </div>

                {/* Our Mission */}
                <div className='grid grid-cols-1  md:grid-cols-3 gap-12'>
                    <div className='md:col-span-2'>
                        <h1 className='text-4xl font-Barlow mb-10'>Our Mission</h1>
                        <p className='font-Mulish'>Our mission is to empower ambitious and high-performing entrepreneurs, as well as forward-thinking companies, by providing them with cutting-edge, innovative, and data-driven marketing solutions. These solutions are meticulously designed to enhance their visibility, build strong and meaningful connections with their audiences, and drive sustainable growth that aligns with their long-term objectives. We strive to equip our partners with the tools, strategies, and insights they need to not only navigate but excel in highly competitive markets. By fostering collaboration, creativity, and a results-oriented approach, we aim to be a driving force behind their success, helping them achieve their goals, transform their visions into reality, and make a lasting impact in their industries.</p>
                    </div>

                    <div className='grid gap-3 '>
                        <div className=' h-[150px] '>
                            <img src="https://images.pexels.com/photos/3184420/pexels-photo-3184420.jpeg" className='w-[100%] h-[100%] object-cover object-top' alt="" />
                        </div>
                        <div className=' h-[150px] '>
                            <img src="https://images.pexels.com/photos/3184634/pexels-photo-3184634.jpeg" className='w-[100%] h-[100%] object-cover object-' alt="" />
                        </div>
                    </div>
                </div>

                <div className='mt-28'>
                    <div className='flex justify-center  items-center flex-col'>
                        <h1 className='font-Barlow text-3xl mb-3'>Meet The <span className='text-primary'>Team</span></h1>

                        <p className='w-[100%] md:w-[70%] font-Mulish font-light text-center'>We bring a deep reservoir of expertise and skills, shaped by diverse experiences across various fields and industries. Our team is a blend of professionals with unique perspectives and talents, allowing us to approach challenges with creativity and adaptability. </p>
                    </div>

                    <div className='grid grid-cols-1 md:grid-cols-3 gap-10 mt-24'>
                        {
                            team.map(({ image, name, role }, index) => <div key={index}>
                                <div className='h-[300px] mb-4'>
                                    <img src={image} className='w-[100%] h-[100%] object-cover object-top' alt="" />
                                </div>
                                <h1 className='font-Barlow text-xl font-medium mb-1'>{name}</h1>
                                <p className='font-Barlow font-light text-sm capitalize'>{role}</p>
                            </div>)
                        }
                    </div>
                </div>
            </div>


        </div>
    )
}

export default About