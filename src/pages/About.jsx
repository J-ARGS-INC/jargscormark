import React from 'react'
import { RxArrowRight } from 'react-icons/rx'
import { NavLink } from 'react-router-dom'

const About = () => {
    let team = [
        {
            name: "Joshua",
            role: "Founder/lead consultant",
            image: "https://images.pexels.com/photos/2216607/pexels-photo-2216607.jpeg?auto=compress&cs=tinysrgb&w=600"
        },
        {
            name: "Cheta",
            role: "Head of data & research (co-founder)",
            image: "https://images.pexels.com/photos/2216607/pexels-photo-2216607.jpeg?auto=compress&cs=tinysrgb&w=600"
        },
        {
            name: "Moyin",
            role: "Financial Analyst",
            image: "https://images.pexels.com/photos/2216607/pexels-photo-2216607.jpeg?auto=compress&cs=tinysrgb&w=600"
        },
        {
            name: "Mbuoty",
            role: "Head of Marketing",
            image: "https://images.pexels.com/photos/2216607/pexels-photo-2216607.jpeg?auto=compress&cs=tinysrgb&w=600"
        },
        {
            name: "Kenechi",
            role: "Head of IT",
            image: "https://images.pexels.com/photos/2216607/pexels-photo-2216607.jpeg?auto=compress&cs=tinysrgb&w=600"
        },
        {
            name: "Mena",
            role: "Content Writer",
            image: "https://images.pexels.com/photos/2216607/pexels-photo-2216607.jpeg?auto=compress&cs=tinysrgb&w=600"
        }
    ]
    return (
        <div>
            <div className=' py-10 px-5  md:py-[18vh] md:px-20   '>
                <div className='grid grid-cols-1  md:grid-cols-2  gap-20 mb-20'>
                    <h1 className='text-4xl font-bold font-Barlow'>
                        More Than Marketing: We're Your Trusted Business Growth Partner
                    </h1>

                    <div>
                        <p className='font-Mulish mb-10'>At Jargs Cormark, we don't just offer digital marketing services— We become your trusted partner on the journey to business growth. With our tailored strategies and solutions, we help you move from From Invisible to Unmissable, From Frustrated to Empowered, and from Missing Opportunities to Winning New Markets.

                            Let’s build a future where your brand thrives and grows, together.</p>

                        <NavLink className={"md:w-[80%] flex items-center gap-3 justify-center bg-primary py-4 px-8  text-white rounded-full border hover:border-primary duration-500 "} to={"/book_a_call/paid"}>Schedule a Consultation<RxArrowRight size={20} className='' /></NavLink>
                    </div>
                </div>

                <div className='h-[300px]  relative mb-20'>
                    <img src="https://images.pexels.com/photos/7008307/pexels-photo-7008307.jpeg" alt="" className='w-[100%] h-[100%] object-cover' />
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
                            <h1 className='text-2xl font-Mulish text-primary'>30+</h1>
                        </div>

                        <div className='border border-primary h-fit rounded-2xl p-5'>
                            <h1 className='font-Barlow mb-2'>Satisfied Customers</h1>
                            <h1 className='text-2xl font-Mulish text-primary'>1200</h1>
                        </div>

                        <div className='border h-fit rounded-2xl p-5 shadow-2xl shadow-black/10'>
                            <h1 className='font-Barlow mb-2'>Trusted Partners</h1>
                            <h1 className='text-2xl font-Mulish text-primary'>20k</h1>
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