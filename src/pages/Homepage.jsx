import React from 'react'
import { NavLink } from 'react-router-dom'
import { RxArrowRight } from "react-icons/rx";
import { TbLocation } from "react-icons/tb";
import { BsChat } from "react-icons/bs";
import { PiFunnel } from "react-icons/pi";
import { MdShowChart } from "react-icons/md";
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { SwiperSlide, Swiper } from 'swiper/react'
import { motion } from 'framer-motion';

import Img1 from "../assets/Images/clientLogo.png"
import Img2 from "../assets/Images/clientLogo2.png"
import Img3 from "../assets/Images/clientLogo3.png"
import Img4 from "../assets/Images/clientLogo4.png"
import Img5 from "../assets/Images/clientLogo5.png"
import Img6 from "../assets/Images/clientLogo6.png"
import Img7 from "../assets/Images/clientLogo7.png"
import testimonial1 from "../assets/Images/testimonial1.jpg"
import testimonial2 from "../assets/Images/testimonial2.jpg"

const Homepage = () => {
    // let video = use
    const testimonials = [
        {
            text: "Jargs Cormark completely transformed our social media presence. Their strategic approach and creative ideas boosted our engagement by 300%! Their professionalism and dedication made the process enjoyable and stress-free",
            image: "https://images.pexels.com/photos/17243573/pexels-photo-17243573/free-photo-of-a-woman-in-white-pants-and-a-black-top.jpeg?auto=compress&cs=tinysrgb&w=600",
            name: "Sarah K.",
            role: "Canada"
        },
        {
            text: "The team at Jargs Cormark truly understands branding. They helped refine my business identity with precision and clarity. Their insights were not just theoretical but actionable. My brand has never felt this aligned and impactful!",
            image: "https://images.pexels.com/photos/2024901/pexels-photo-2024901.jpeg?auto=compress&cs=tinysrgb&w=600",
            name: "Daniel M.",
            role: "South Africa"
        },
        {
            text: "Jargs Cormark delivered a stunning video that exceeded my expectations. From concept to execution, their attention to detail and commitment to quality stood out. I was kept involved every step of the way, and the results speak for themselves",
            image: "https://images.pexels.com/photos/29515056/pexels-photo-29515056/free-photo-of-elegant-portrait-of-woman-in-black-hijab.jpeg?auto=compress&cs=tinysrgb&w=600",
            name: "Aisha R.",
            role: "United Kingdom"
        },
        {
            text: "Jargs Cormark’s content writing service is exceptional. They captured my brand’s voice perfectly and delivered compelling copy that resonated with my audience. The turnaround time was impressive, and the quality unmatched.",
            image: "https://images.pexels.com/photos/6584748/pexels-photo-6584748.jpeg?auto=compress&cs=tinysrgb&w=600",
            name: "James O.",
            role: "United Kingdom"
        },
        {
            text: "Jargs Cormark made a remarkable impact on my business with their professionalism and tailored support. From clear strategies to tangible outcomes, their dedication ensured seamless and productive results. Truly invaluable!",
            image: testimonial1,
            name: "Olalode R.",
            role: "Canada"
        },
        {
            text: "Working with Jargs Cormark was a seamless experience. From the well-thought-out video plan to their proactive follow-up and responsiveness to feedback, they ensured every detail was perfect. I’m thrilled with the final product!",
            image: testimonial2,
            name: "Blessing",
            role: " Nigeria"
        },
        {
            text: "From creative content to precise social media management, they’ve elevated our presence and driven consistent engagement. ",
            image: "https://images.pexels.com/photos/2921045/pexels-photo-2921045.jpeg?auto=compress&cs=tinysrgb&w=600",
            name: "Kouamé",
            role: "Ghana"
        },
        {
            text: "Our website looks amazing, since launching it with Jargs Cormark, we look more presentable and our sales have grown significantly",
            image: "https://images.pexels.com/photos/2327283/pexels-photo-2327283.jpeg?auto=compress&cs=tinysrgb&w=600",
            name: "Clinton",
            role: "Rwanda"
        }
    ]
    const services = [
        {
            header: "Brand Strategy & Positioning",
            subtext: "Stand out with strategies that build trust and highlight your unique value.",
            id: "brand_strategy",
            priceRange: "$999"
        },
        {
            header: "Digital Marketing",
            subtext: "Reach your audience where they are with campaigns that drive results, from social media, email, website, or targeted ads. This is our full digital marketing package for you on a monthly basis. ",
            id: "digital_marketing",
            priceRange: "$2299",
        },
        {
            header: "Content Creation and Video Production",
            subtext: "Engage, inspire, and convert with high-quality, impactful Storytelling content. ",
            id: "content_creation",
            priceRange: "$99",
        },
        {
            header: "Social Media Management",
            subtext: "Turn your social media channels into powerful tools for connection and growth. We create and manage tailored content strategies that resonate with your audience, drive engagement, and build a loyal community around your brand.",
            id: "social_media",
            priceRange: "Premium - $1299, Standard - $799,Basic - $499 ",
        },
    ]
    return (
        <>
            {/* Landing page */}
            <header>
                <div className='md:h-[95vh] grid grid-cols-1  md:grid-cols-2 py-10 px-5  md:py-[18vh] md:px-20 bg-[#f5f5f5] relative'>

                    <div className='font-Mulish relative z-10 text-white'>

                        {/* <motion.p initial={{ translateX: -200, opacity: 0 }} animate={{ translateX: 0, opacity: 1 }} className=''>Ready to ignite your business with <b className='text-purple'>JARGS?</b></motion.p> */}

                        <div className='font-Barlow py-5'>
                            <motion.div initial={{ translateY: 30, opacity: 0 }} animate={{ translateY: 0, opacity: 1 }} transition={{ duration: 0.4, delay: 0.2 }}>
                                <h1 className='text-5xl md:text-6xl font-bold capitalize mb-3' >Empower Your Brand & Sell More</h1>
                            </motion.div>
                            <motion.div initial={{ translateX: -20, opacity: 0 }} animate={{ translateX: 0, opacity: 1 }} transition={{ delay: 0.4 }}>
                                <p className='text-xl mb-8'>We’re a Digital Marketing and Branding Agency that wants Your business to stand out, dominate markets, and achieve lasting success with purpose-driven strategies.
                                </p>
                            </motion.div>
                            <div className='grid grid-cols-1 md:grid-cols-2 gap-[5vw]'>
                                <motion.div initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.5 }}>
                                    <NavLink className={"flex items-center gap-3 justify-between bg-primary py-4 px-5  text-secondary rounded-full hover:bg-secondary hover:text-primary duration-500 hover:border-primary border border-transparent hover:shadow-lg "}>Start now<TbLocation size={20} /></NavLink>
                                </motion.div>

                                <motion.div initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.6 }}>

                                    <NavLink className={"flex items-center gap-3 justify-between bg-secondary py-4 px-5  text-primary rounded-full border hover:border-primary duration-500 "}>Schedule a Consultation<RxArrowRight size={20} className='' /></NavLink>
                                </motion.div>

                            </div>
                        </div>

                    </div>

                    <div className='absolute w-[100%] h-[100%] top-0 left-0'>
                        <div className='absolute w-[100%] h-[100%] ' style={{ background: "linear-gradient(to right, rgba(0,0,0,.65) 40%, rgba(0,0,0,.45))" }}></div>
                        <video src="https://videos.pexels.com/video-files/9365552/9365552-sd_640_360_25fps.mp4" className='w-[100%] h-[100%] object-cover' autoPlay={true} muted={true} loop={true} playsInline></video>
                    </div>

                </div>
            </header>
            {/* Landing page ends*/}

            {/* Steps */}
            <section className='font-Mulish py-5 px-5 md:px-24 grid grid-cols-1 md:grid-cols-3 gap-10 border-b text-lg capitalize'>
                <div className='flex gap-5 items-center'>
                    <BsChat className='text-primary' size={30} />
                    <div className=''>
                        <p>Step one: </p>
                        <p>Contact us</p>
                    </div>
                </div>

                <div className='flex gap-5 items-center'>
                    <PiFunnel className='text-primary' size={30} />
                    <div className=''>
                        <p>Step two: </p>
                        <p>Build a Funnel That Converts
                        </p>
                    </div>

                </div>

                <div className='flex gap-5 items-center'>
                    <MdShowChart className='text-primary' size={30} />
                    <div className=''>
                        <p>Step three: </p>
                        <p>Scale Revenue, Watch Your Brand Thrive</p>
                    </div>
                </div>
            </section>

            {/* Trusted By */}
            <section className='py-5 px-5  md:py-5 md:px-20'>

                {/* Why we do what we do */}
                <div className='grid grid-cols-1 gap-10 items-start md:grid-cols-2 font-Barlow py-24'>
                    <div>
                        <motion.div initial={{ x: 50, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }}>
                            <div className='text-lg flex items-center gap-x-3 '>
                                <div className='w-5 h-5 bg-purple rounded-xl'></div>
                                {/* <p>About</p> */}
                            </div>
                        </motion.div>

                    </div>
                    <div>
                        <motion.div initial={{ y: 30, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ delay: 0.25 }} className=''>
                            <h1 className='text-3xl md:text-4xl font-bold capitalize mb-5'> Why We Do What We Do</h1>
                            <p className='text-xl'>
                                We’re here to help vision-driven entrepreneurs and businesses gain the recognition they deserve. Achieving greatness is no small feat—we understand the challenges, and that’s why we’re committed to being your trusted partner every step of the way.
                            </p>


                        </motion.div>

                    </div>

                </div>
                <hr className='mb-20' />
                {/* How jargs comark can help you succeed */}
                <motion.div initial={{ y: 50, opacity: 0 }} viewport={{ amount: 0.5, once: true }} whileInView={{ y: 0, opacity: 1 }} className='grid grid-cols-1 md:grid-cols-3  mb-20 items-center'>
                    <div>
                        <h1 className='font-Barlow text-3xl md:text-4xl mb-5 capitalize'>
                            The more visible your brand is, the more opportunities

                            <b className='text-primary'> you create to scale your revenue.</b>
                        </h1>

                    </div>
                    <div></div>
                    <div>
                        <h1 className='font-Barlow text-2xl mb-5'> How Can Jargs Cormark Help You Succeed?</h1>
                        <p className='font-Mulish mb-6'>Visibility drives growth. Jargs Cormark ensures you’re seen where it matters</p>
                        <ul className='font-Mulish list-disc flex flex-col gap-y-5 mb-10 px-5 md:px-0'>
                            <li><b className='font-semibold'>Boost Your Online Presence:</b> Increase visibility across platforms with tailored strategies
                            </li>

                            <li>
                                <b className='font-semibold'>Attract New Customers:</b>  Engage your ideal audience with compelling content and targeted ads.

                            </li>

                            <li>
                                <b className='font-semibold'>   Turn Visibility into Profit: </b>

                                Build trust, convert attention into sales, and scale sustainably.
                            </li>

                        </ul>


                        <NavLink to={"/services"} className={"flex w-[100%] items-center gap-3 justify-center bg-primary py-4 px-5 text-lg text-secondary rounded-full hover:bg-secondary hover:text-primary duration-500 hover:border-primary border border-transparent hover:shadow-lg"}>Get Started Today </NavLink>
                    </div>
                </motion.div>


                <motion.div className='mb-10' initial={{ y: 50, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ delay: 0.1, duration: 0.3 }}>
                    <div className='flex justify-center'>
                        <h1 className='text-lg capitalize font-Mulish mb-4'>Chosen by Entrepreneurs Who
                            <b className='text-purple'> Dare to Dream</b> Big</h1>
                    </div>
                    <div className='flex flex-wrap justify-between grayscale' id=''>

                        <>
                            <img src={Img1} alt="" className='w-24 h-24 object-contain' />
                        </>
                        <>
                            <img src={Img2} alt="" className='w-24 h-24 object-contain' /></>
                        <>
                            <img src={Img3} alt="" className='w-24 h-24 object-contain' />
                        </>

                        <>
                            <img src={Img4} alt="" className='w-24 h-24 object-contain' />

                        </>
                        <>
                            <img src={Img5} alt="" className='w-24 h-24 object-contain' />
                        </>
                        <>
                            <img src={Img6} alt="" className='w-24 h-24 object-contain' />
                        </>
                        <>
                            <img src={Img7} alt="" className='w-24 h-24 object-contain' />
                        </>






                    </div>
                </motion.div>

                {/* Testimonial */}
                <div className='grid gap-y-10 grid-cols-1 md:grid-cols-3 my-20 items-center'>
                    <div>
                        <h1 className='font-Barlow text-5xl mb-3'>From our <b>Community.</b></h1>
                        <p className='font-Mulish text-lg mb-6'>Here's what our client's have to say about our services</p>

                        <NavLink to={"/a"} className={"w-fit flex items-center gap-3 justify-between bg-secondary py-4 px-5 font-Mulish text-primary md:text-sm rounded-full border border-primary duration-500 capitalize"}>Boost your brand visibility</NavLink>
                    </div>

                    <div>
                        <Swiper className='w-[100%] h-[350px] ' slidesPerView={1} modules={[Autoplay]} autoplay direction='vertical' centeredSlides={true} loop>
                            {
                                testimonials.map(({ image, name, role, text }, index) => index + 1 <= 3 && <SwiperSlide>
                                    <div>
                                        <h1 className='font-Barlow text-xl mb-5'>
                                            {text}
                                        </h1>
                                        <div className='flex gap-5'>
                                            <div className='w-12 h-12'>
                                                <img src={image} className='rounded-full w-[100%] h-[100%] object-cover' alt="" />
                                            </div>
                                            <div>
                                                <h1 className='font-Barlow font-bold'>{name}</h1>
                                                <p className='md:text-sm font-Mulish'>{role}</p>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>)
                            }

                        </Swiper>
                    </div>
                </div>

                {/* Our services */}
                <section className='font-Mulish py-10 md:py-5 grid grid-cols-1 md:grid-cols-2 gap-20   capitalize'>
                    <motion.div initial={{ y: 50, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ amount: 0.5 }}>
                        <h1 className='text-3xl mb-3'>Our <br /> <b className='font-extrabold text-primary'>services</b> </h1>
                        <p className='mb-6'>At Jargs Cormark, we specialize in helping high performing businesses and entrepreneurs like you break barriers, build connections, and transform potential into profits. From creating compelling content to designing conversion-driven campaigns, we’re here to turn your vision into a thriving reality.
                        </p>

                    </motion.div>

                    <div className='md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-5 md:px-20'>
                        {
                            services.map(({ header, priceRange, subtext, id }, index) =>

                                <NavLink to={`/services#${id}`} className={'border border-primary rounded-2xl '}>
                                    <motion.div className='flex flex-col px-5 py-10 justify-between  h-[100%]' key={index} initial={{ x: index % 2 == 0 ? 20 : -20, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ amount: 0.5, once: true }}>
                                        <div className='mb-10'>
                                            <h1 className='text-2xl font-bold font-Barlow mb-5 text-primary'>{header}</h1>
                                            <p>
                                                {subtext}
                                            </p>
                                        </div>

                                        <p className='font-Mulish text-sm italic underline font-light'>Read more...</p>
                                    </motion.div>
                                </NavLink>
                            )
                        }


                        <div className='md:col-span-2 mt-10 flex justify-center'>

                            <NavLink to={"/services"} className={"flex w-[100%]  md:w-[50%] items-center gap-3 justify-center bg-primary py-4 px-5 text-lg text-secondary rounded-full hover:bg-secondary hover:text-primary duration-500 hover:border-primary border border-transparent hover:shadow-lg"}>Discover      </NavLink>
                        </div>
                    </div>

                </section>

                {/* The longer you wait */}
                <motion.div initial={{ y: 50, opacity: 0 }} viewport={{ amount: 0.5, once: true }} whileInView={{ y: 0, opacity: 1 }} className='grid grid-cols-1 md:grid-cols-3  mb-20 mt-20 items-center gap-10 '>
                    <div>
                        <h1 className='font-Barlow text-5xl mb-5 capitalize'>The Longer you wait, <b className='text-primary'>the harder it becomes.</b></h1>

                        <NavLink to={"/services"} className={"flex w-[100%] items-center gap-3 justify-center bg-primary py-4 px-5 text-lg text-secondary rounded-full hover:bg-secondary hover:text-primary duration-500 hover:border-primary border border-transparent hover:shadow-lg"}>Start Now </NavLink>
                    </div>
                    <div></div>
                    <div>
                        <h1 className='font-Barlow text-3xl md:text-4xl mb-5'> Take action now or Risk:</h1>
                        <ul className='font-Mulish list-disc flex flex-col gap-y-5 px-5 md:px-0'>
                            <li>Falling behind competitors stealing your customers.
                            </li>
                            <li>
                                Wasting time and resources on ineffective strategies.

                            </li>
                            <li>
                                Losing trust and credibility with a weak online presence.

                            </li>
                        </ul>
                    </div>
                </motion.div>


                {/* GET results in 3 steps */}
                <div>
                    <motion.div initial={{ x: 30, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ amount: 0.3, once: true }} className='mt-36 mb-10 grid grid-cols-2'>
                        <div>
                            <h1 className='font-Barlow text-3xl md:text-4xl mb-5 capitalize '>Get results in 3 steps:</h1>



                        </div>

                    </motion.div>


                    <div className='grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-10 mb-20'>
                        <motion.div initial={{ x: -30 }} viewport={{ amount: 0.3, once: true }} whileInView={{ x: 0 }} >
                            <div className='bg-[#fafafa] p-10 rounded-3xl'>
                                <div className='flex justify-between'>
                                    <h1 className='text-6xl font-Barlow opacity-30 text-primary'>01</h1>
                                </div>
                                <div className='mt-20 font-Mulish'>
                                    <h1 className='text-xl mb-5'>Contact Us</h1>
                                    <p className=''>
                                        Start your journey with a personalized conversation. We’ll understand your challenges and craft a strategy tailored for your goals.
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                        <motion.div initial={{ x: 50 }} viewport={{ amount: 0.2 }} whileInView={{ x: 0 }} transition={{ delay: 0.15 }}>
                            <div className='bg-[#fafafa] p-10 rounded-3xl'>
                                <div className='flex justify-between'>
                                    <h1 className='text-6xl font-Barlow opacity-30 text-primary'>02</h1>
                                </div>
                                <div className='mt-20 font-Mulish'>
                                    <h1 className='text-xl mb-5'>Build a Funnel That Converts</h1>
                                    <p className=''>
                                        Turn prospects into loyal customers. Our data-driven funnels deliver measurable engagement and results.
                                    </p>
                                </div>
                            </div>
                        </motion.div>


                        <motion.div initial={{ x: -30 }} viewport={{ amount: 0.3 }} whileInView={{ x: 0 }} transition={{ delay: 0.1 }}>
                            <div className='bg-[#fafafa] p-10 rounded-3xl'>
                                <div className='flex justify-between'>
                                    <h1 className='text-6xl font-Barlow opacity-30 text-primary'>03</h1>
                                </div>
                                <div className='mt-20 font-Mulish'>
                                    <h1 className='text-xl mb-5'>Scale Revenue, Watch Your Brand Thrive
                                    </h1>
                                    <p className=''>
                                        With the right strategy in place, see your efforts translate into sustainable growth and success.

                                    </p>
                                </div>
                            </div>
                        </motion.div>


                        <div className='md:col-span-3 '>
                            <div className='flex  justify-center'>
                                <NavLink to={"/services"} className={"flex w-[100%]  md:w-[50%] items-center gap-3 justify-center bg-secondary py-4 px-5 md:text-sm rounded-full hover:bg-secondary hover:text-primary duration-500 border-primary border  hover:shadow-lg"}>Boost your brand visibility  </NavLink>
                            </div>
                        </div>

                        {/* <motion.div initial={{ x: 50 }} viewport={{ amount: 0.2 }} whileInView={{ x: 0 }} transition={{ delay: 0.15 }}>
                        <div className='bg-[#fafafa] p-10 rounded-3xl'>
                            <div className='flex justify-between'>
                                <h1 className='text-6xl font-Barlow opacity-30 text-primary'>04</h1>
                            </div>
                            <div className='mt-20 font-Mulish'>
                                <h1 className='text-xl mb-5'>Choose Your Path</h1>
                                <p className=''>
                                    Are you overwhelmed trying to grow your marketing business? Struggling to align your team? Looking to inspire an audience with the power of story? Choose your path below.
                                </p>
                            </div>
                        </div>
                    </motion.div> */}

                    </div>

                </div>

                {/* Testimonial */}
                <div className='grid md:gap-32 grid-cols-1 md:grid-cols-3 md:mt-36 md:mb-20 items-center'>
                    <div>
                        <p className='font-Mulish mb-3'>Testimonial</p>
                        <h1 className='font-Barlow text-3xl md:text-4xl mb-3 font-semibold'>What People think about us</h1>
                        <p className='font-Mulish'>
                            Experiences shared by clients, showcasing how we've made a difference in their businesses.
                        </p>

                    </div>

                    <div className='md:col-span-2'>
                        <Swiper className='w-[100%] h-fit py-20' autoplay
                            breakpoints={{
                                640: {
                                    slidesPerView: 1,
                                    spaceBetween: 20,
                                },
                                768: {
                                    slidesPerView: 2,
                                    spaceBetween: 20,
                                },
                                1024: {
                                    slidesPerView: 2,
                                    spaceBetween: 20,
                                },
                            }}
                            modules={[Autoplay]}
                            direction='horizontal'
                            centeredSlides={false}
                            spaceBetween={30}
                            loop
                        >
                            {
                                testimonials.map(({ image, name, role, text }, index) => index + 1 > 3 && <SwiperSlide>
                                    <div className='border h-[350px] p-5 pt-10 relative rounded-3xl flex flex-col justify-between'>
                                        <div className="absolute top-[-10%] w-12 h-12 ">
                                            <img src={image} alt="" className='rounded-full w-[100%] h-[100%] object-cover object-top' />
                                        </div>
                                        {/* <div className='flex gap-5'>
                                            <div className='w-12 h-12'>
                                                <img src={image} className='rounded-full w-[100%] h-[100%] object-cover' alt="" />
                                            </div>
                                            <div>
                                                <h1 className='font-Barlow font-bold'>{name}</h1>
                                                <p className='md:text-sm font-Mulish'>{role}</p>
                                            </div>
                                        </div> */}
                                        <h1 className='font-Mulish md:text-sm mb-5'>
                                            {text}
                                        </h1>

                                        <p className='font-Mulish md:text-sm italic'> - {name}, {role}</p>

                                    </div>
                                </SwiperSlide>)
                            }

                        </Swiper>
                    </div>
                </div>

                {/* Does this sound like you? */}

                <div>

                    <motion.div initial={{ y: 50, opacity: 0 }} viewport={{ amount: 0.5, once: true }} whileInView={{ y: 0, opacity: 1 }} className='grid grid-cols-1 md:grid-cols-2  mb-20 items-center gap-10 '>
                        <div>
                            <h1 className='font-Barlow text-5xl mb-5 capitalize'>Does this Sound  <b className='text-primary'>Like You?</b></h1>


                        </div>
                        <div>

                            <ul className='font-Mulish list-disc flex flex-col gap-y-5 px-5 md:px-0 mb-10'>
                                <li>
                                    <span className='font-semibold'>"It feels like no matter how hard you work, your brand is still invisible in the crowded market?"</span>
                                    <p>Break through the noise with strategies that work.
                                    </p>
                                </li>
                                <li>
                                    <span className='font-semibold'>"You’re tired of putting in relentless effort, only to see minimal results?"</span>
                                    <p>
                                        Transform your efforts into measurable success with data-backed solutions.

                                    </p>

                                </li>
                                <li>
                                    <span className='font-semibold'> "You feel overwhelmed trying to connect with the right audience?"
                                    </span>
                                    <p>
                                        Transform your efforts into measurable success with data-backed solutions.

                                    </p>

                                </li>
                            </ul>

                            <NavLink to={"/services"} className={"flex w-[100%]  md:w-[50%] items-center gap-3 justify-center bg-secondary py-4 px-5 md:text-sm rounded-full hover:bg-secondary hover:text-primary duration-500 border-primary border  hover:shadow-lg"}>Schedule a Consultation Today</NavLink>
                        </div>
                    </motion.div>
                    {/* <motion.div initial={{ x: 30, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ amount: 0.3, once: true }} className='md:mt-36 mb-10 grid grid-cols-2'>
                        <div>
                            <h1 className='font-Barlow text-3xl md:text-4xl mb-5 capitalize '>Does this sound like you?</h1>



                        </div>

                    </motion.div>


                    <div className='grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-10 mb-20'>
                        <motion.div initial={{ x: -30 }} viewport={{ amount: 0.3, once: true }} whileInView={{ x: 0 }} >
                            <div className='bg-[#fafafa] p-10 rounded-3xl'>
                                <div className='flex justify-between'>
                                    <h1 className='text-6xl font-Barlow opacity-30 text-primary'>01</h1>
                                </div>
                                <div className='mt-20 font-Mulish'>
                                    <h1 className='text-xl mb-5'>It feel like no matter how hard you work, your brand is still invisible in the crowded market?</h1>
                                    <p className=''>
                                        Break through the noise with strategies that work.

                                    </p>
                                </div>
                            </div>
                        </motion.div>
                        <motion.div initial={{ x: 50 }} viewport={{ amount: 0.2 }} whileInView={{ x: 0 }} transition={{ delay: 0.15 }}>
                            <div className='bg-[#fafafa] p-10 rounded-3xl'>
                                <div className='flex justify-between'>
                                    <h1 className='text-6xl font-Barlow opacity-30 text-primary'>02</h1>
                                </div>
                                <div className='mt-20 font-Mulish'>
                                    <h1 className='text-xl mb-5'>You’re tired of putting in relentless effort, only to see minimal results?</h1>
                                    <p className=''>
                                        Transform your efforts into measurable success with data-backed solutions.

                                    </p>
                                </div>
                            </div>
                        </motion.div>


                        <motion.div initial={{ x: -30 }} viewport={{ amount: 0.3 }} whileInView={{ x: 0 }} transition={{ delay: 0.1 }}>
                            <div className='bg-[#fafafa] p-10 rounded-3xl'>
                                <div className='flex justify-between'>
                                    <h1 className='text-6xl font-Barlow opacity-30 text-primary'>03</h1>
                                </div>
                                <div className='mt-20 font-Mulish'>
                                    <h1 className='text-xl mb-5'>You feel overwhelmed trying to connect with the right audience?
                                    </h1>
                                    <p className=''>
                                        Let’s help you reach the customers who truly need your solutions.

                                    </p>
                                </div>
                            </div>
                        </motion.div>


                        <div className='md:col-span-3 '>
                            <div className='flex  justify-center'>
                                <NavLink to={"/services"} className={"flex w-[100%]  md:w-[50%] items-center gap-3 justify-center bg-secondary py-4 px-5 md:text-sm rounded-full hover:bg-secondary hover:text-primary duration-500 border-primary border  hover:shadow-lg"}>Schedule a Consultation Today</NavLink>
                            </div>
                        </div>

                    </div> */}

                </div>




            </section >



            {/* Key Features */}

            < section className='font-Mulish py-10  px-5 md:px-24    capitalize' >
                {/* <div className='grid grid-cols-1 md:grid-cols-2 mb-10'>
                    <div>
                        <h1 className='text-3xl mb-3'>How Can <i>JARGS</i> Help  <b className='font-extrabold text-primary'> You Make Money?</b> </h1>
                        <p className='mb-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta tempora officiis, mollitia facilis quis delectus voluptatibus illo tempore quo illum esse dolores rerum id ipsa dolore necessitatibus voluptatum soluta maiores veniam!</p>

                    </div>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 items-center gap-10  border-primary md:p-10 rounded-3xl mb-14 md:mb-5'>
                    <div className='order-1 md:order-1'>
                        <img src="https://images.pexels.com/photos/2041627/pexels-photo-2041627.jpeg?auto=compress&cs=tinysrgb&w=600" className='rounded-xl' alt="" />
                    </div>
                    <div className='order-2 md:order-2'>
                        <h1 className='text-2xl font-bold mb-5'>Are you stretched thin running your marketing business?</h1>

                        <p className='italic'>
                            The StoryBrand Certified Guide Program can help you level up and scale your marketing business to 6 figures and beyond.
                            As a Certified Guide, you’ll get extensive training and exclusive rights to use the StoryBrand framework with your clients to get results every time. You’ll also receive ongoing education and support to generate more leads, automate your marketing, and steadily grow your business.
                        </p>
                    </div>
                </div> */}

                < div className='grid grid-cols-1 md:grid-cols-2 mb-10' >
                    <div>
                        <h1 className='text-3xl mb-5 md:mb-3'>Looking to  <i>Improve</i> Your Marketing     <b className='font-extrabold text-primary'> Without a Long-Term Commitment?</b> </h1>
                        <p className='mb-4'>We understand that sometimes all you need is expert insight to steer your efforts in the right direction.

                        </p>
                        <p>At Jargs Cormark, we provide tailored marketing insights to help you:</p>

                    </div>
                </div >

                <div className='grid grid-cols-1 md:grid-cols-3 gap-10 mb-10'>
                    <div className='bg-[#fcfcfc] p-6 rounded-3xl border border-black flex flex-col justify-between'>
                        <div className='flex justify-between'>
                            <h1 className='text-3xl md:text-4xl font-Barlow  text-primary'>01</h1>
                        </div>
                        <div className=' font-Mulish'>
                            <h1 className='text-lg mb-5'>Identify gaps in your current strategy</h1>

                        </div>
                    </div>

                    <div className='bg-[#fcfcfc] p-6 rounded-3xl border border-black flex flex-col justify-between'>
                        <div className='flex justify-between'>
                            <h1 className='text-3xl md:text-4xl font-Barlow  text-primary'>02</h1>
                        </div>
                        <div className='mt-10 font-Mulish'>
                            <h1 className='text-lg mb-5'>Explore untapped opportunities to boost visibility and engagement</h1>

                        </div>
                    </div>

                    <div className='bg-[#fcfcfc] p-6 rounded-3xl border border-black flex flex-col justify-between'>
                        <div className='flex justify-between'>
                            <h1 className='text-3xl md:text-4xl font-Barlow  text-primary'>03</h1>
                        </div>
                        <div className='mt-10 font-Mulish'>
                            <h1 className='text-lg mb-5'>Craft actionable strategies designed to drive measurable results</h1>

                        </div>
                    </div>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 '>
                    <div>
                        <p className='mb-2'>Let’s work together to uncover what’s holding your business back and map out the steps to unlock its full potential.
                        </p>

                        <h1 className='text-3xl mb-8'>Ready to gain clarity and start winning ?
                        </h1>
                        <NavLink to={"/services"} className={"flex w-[100%]  md:w-[50%] items-center gap-3 justify-center bg-secondary py-4 px-5 md:text-sm rounded-full hover:bg-secondary hover:text-primary duration-500 border-primary border  hover:shadow-lg"}>Schedule a Consultation Today</NavLink>
                    </div>
                </div>

            </section >
        </>
    )
}

export default Homepage