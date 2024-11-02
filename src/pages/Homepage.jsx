import React from 'react'
import { NavLink } from 'react-router-dom'
import { RxArrowRight } from "react-icons/rx";
import { TbLocation } from "react-icons/tb";
import { BsChat } from "react-icons/bs";
import { PiFunnel } from "react-icons/pi";
import { MdShowChart } from "react-icons/md";
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { SwiperSlide, Swiper } from 'swiper/react'


import Img1 from "../assets/Images/canva-white-brown-simple-restaurant-logo-koIA1HEug0Q-removebg-preview.png"
import Img2 from "../assets/Images/canva-yellow-and-white-minimalist-kitchen-logo-B0UKuTQPinA-removebg-preview.png"
import Img3 from "../assets/Images/attachment_150123703-removebg-preview.png"
import Img4 from "../assets/Images/images-removebg-preview (1).png"
import Img5 from "../assets/Images/pngtree-building-and-construction-logo-design-template-image_317780-removebg-preview.png"
import Img6 from "../assets/Images/images-removebg-preview.png"
import Img7 from "../assets/Images/canva-mauve-black-minimalist-aesthetic-cookie-biscuit-business-logo-4xgzbZfcvpU-removebg-preview.png"
const Homepage = () => {
    const numberOfCompanies = new Intl.NumberFormat("en-us", { style: "decimal" }).format(100000)
    return (
        <>
            {/* Landing page */}
            <header>
                <div className='md:min-h-[100vh] grid grid-cols-1  md:grid-cols-2 py-10 px-5  md:py-[18vh] md:px-20 bg-[#f5f5f5]'>
                    <div className='font-Mulish'>
                        <p className=''>Ready to ignite your business with <b className='text-primary'>JARGS?</b></p>
                        <div className='font-Barlow py-5'>
                            <h1 className='text-5xl md:text-6xl font-bold capitalize mb-3' >Crafting Brands,  that Inspire, Engage, and Transform.</h1>
                            <p className='text-xl mb-8'>Your brand is more than just a business—it’s a story that deserves to be told, and we’re here to make sure that story resonates, inspires, and drives action</p>
                            <div className='grid grid-cols-1 md:grid-cols-2 gap-[5vw]'>
                                <NavLink className={"flex items-center gap-3 justify-between bg-primary py-4 px-5 text-lg text-secondary rounded-full hover:bg-secondary hover:text-primary duration-500 hover:border-primary border border-transparent hover:shadow-lg "}>Let's Go <TbLocation size={20} /></NavLink>

                                <NavLink className={"flex items-center gap-3 justify-between bg-secondary py-4 px-5 text-lg text-primary rounded-full border hover:border-primary duration-500 "}>Elevate Your Brand<RxArrowRight size={20} className='' /></NavLink>
                            </div>
                        </div>
                    </div>

                    <div className='hidden md:grid grid-cols-2 gap-5 pl-32 h-[60vh]'>
                        <div className="border-primary border  rounded-md overflow-hidden">
                            <img src="https://images.pexels.com/photos/7959665/pexels-photo-7959665.jpeg" className='w-[100%] h-[100%] object-cover' alt="" />
                        </div>
                        <div className="border-primary border  rounded-md overflow-hidden relative top-14">
                            <img src="https://images.pexels.com/photos/2489295/pexels-photo-2489295.jpeg?auto=compress&cs=tinysrgb&w=600" className='w-[100%] h-[100%] object-cover' alt="" />
                        </div>
                        {/* <div className="border-black border"></div>
                <div className="border-black border"></div> */}
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
                        <p>Clarify your message</p>
                    </div>
                </div>

                <div className='flex gap-5 items-center'>
                    <PiFunnel className='text-primary' size={30} />
                    <div className=''>
                        <p>Step two: </p>
                        <p>Funnel a sales launch</p>
                    </div>

                </div>

                <div className='flex gap-5 items-center'>
                    <MdShowChart className='text-primary' size={30} />
                    <div className=''>
                        <p>Step three: </p>
                        <p>Watch revenue grow</p>
                    </div>
                </div>
            </section>

            {/* Trusted By */}
            <section className='py-5 px-5  md:py-5 md:px-20'>


                <div className='grid grid-cols-1 items-start md:grid-cols-2 font-Barlow py-24'>
                    <div className='text-lg flex items-center gap-x-3 '>
                        <div className='w-5 h-5 bg-purple rounded-xl'></div>
                        <p>About</p>
                    </div>

                    <div className=''>
                        <h1 className='text-4xl font-bold capitalize mb-5'> When you use <b className='text-primary'>JARGS</b>, Revenue Goes Up.</h1>
                        <p className='text-xl'>
                            You read Building a Jargs and then wondered… what’s next? Just understanding the Jargs Framework doesn’t help your bottom line. It’s time to implement Jargs in your business.
                        </p>


                    </div>


                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10 mb-20'>
                    <div className='bg-[#fafafa] p-10 rounded-3xl'>
                        <div className='flex justify-between'>
                            <h1 className='text-6xl font-Barlow opacity-30 text-primary'>01</h1>
                        </div>
                        <div className='mt-20 font-Mulish'>
                            <h1 className='text-xl mb-5'>Choose Your Path</h1>
                            <p className=''>
                                Are you overwhelmed trying to grow your marketing business? Struggling to align your team? Looking to inspire an audience with the power of story? Choose your path below.
                            </p>
                        </div>
                    </div>

                    <div className='bg-[#fafafa] p-10 rounded-3xl'>
                        <div className='flex justify-between'>
                            <h1 className='text-6xl font-Barlow opacity-30 text-primary'>02</h1>
                        </div>
                        <div className='mt-20 font-Mulish'>
                            <h1 className='text-xl mb-5'>Choose Your Path</h1>
                            <p className=''>
                                Are you overwhelmed trying to grow your marketing business? Struggling to align your team? Looking to inspire an audience with the power of story? Choose your path below.
                            </p>
                        </div>
                    </div>

                    <div className='bg-[#fafafa] p-10 rounded-3xl'>
                        <div className='flex justify-between'>
                            <h1 className='text-6xl font-Barlow opacity-30 text-primary'>03</h1>
                        </div>
                        <div className='mt-20 font-Mulish'>
                            <h1 className='text-xl mb-5'>Choose Your Path</h1>
                            <p className=''>
                                Are you overwhelmed trying to grow your marketing business? Struggling to align your team? Looking to inspire an audience with the power of story? Choose your path below.
                            </p>
                        </div>
                    </div>

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

                </div>

                <div>
                    <div className='flex justify-center'>
                        <h1 className='text-lg capitalize font-Mulish'>Trusted By Over <b className='text-purple'>{numberOfCompanies}+</b> top brands worldwide</h1>
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
                </div>
            </section>

            {/* Our services */}
            <section className='font-Mulish py-10 md:py-32 px-5 md:px-24 grid grid-cols-1 md:grid-cols-3 gap-20   capitalize'>
                <div>
                    <h1 className='text-3xl mb-3'>Our <br /> <b className='font-extrabold text-primary'>services</b> </h1>
                    <p className='mb-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta tempora officiis, mollitia facilis quis delectus voluptatibus illo tempore quo illum esse dolores rerum id ipsa dolore necessitatibus voluptatum soluta maiores veniam!</p>
                    <NavLink to={"/services"} className={"flex w-[50%] items-center gap-3 justify-center bg-primary py-3 px-5 text-sm text-secondary rounded-full hover:bg-secondary hover:text-primary duration-500 hover:border-primary border border-transparent hover:shadow-lg"}>Learn more</NavLink>
                </div>

                <div className='md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-5 md:pl-10'>
                    <div className='border border-primary rounded-2xl flex flex-col p-5 justify-end h-fit md:h-[250px]'>
                        <h1 className='text-2xl font-bold font-Barlow mb-5 text-primary'>Brand Strategy</h1>
                        <p>
                            Develop a comprehensive branding roadmap that aligns with your business goals.
                        </p>
                    </div>
                    <div className='border border-primary rounded-2xl flex flex-col p-5 justify-end  h-fit md:h-[250px]'>
                        <h1 className='text-2xl font-bold font-Barlow mb-5 text-primary'>Rebranding</h1>
                        <p>
                            redefine your brand for today’s market while keeping its core values intact.
                        </p>
                    </div>
                    <div className='border bg-primary text-white border-primary rounded-2xl flex flex-col p-5 justify-end h-fit md:h-[350px]'>
                        <h1 className='text-2xl font-bold font-Barlow mb-5 '>Digital Marketing</h1>
                        <p>
                            Amplify your brand’s reach through SEO, SEM, email marketing, and influencer campaigns, ensuring your brand gets noticed in the digital landscape.
                        </p>
                    </div>
                    <div className='border border-primary rounded-2xl flex flex-col p-5 justify-end h-fit'>
                        <h1 className='text-2xl font-bold font-Barlow mb-5 text-primary'> Content Creation</h1>
                        <p>
                            We deliver top-notch materials that convey your brand’s story and engage your target market.
                        </p>
                    </div>
                </div>
            </section>

            {/* Key Features */}

            <section className='font-Mulish py-10  px-5 md:px-24    capitalize'>
                <div className='grid grid-cols-1 md:grid-cols-2 mb-10'>
                    <div>
                        <h1 className='text-3xl mb-3'>How Can <i>JARGS</i> Help  <b className='font-extrabold text-primary'> You Make Money?</b> </h1>
                        <p className='mb-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta tempora officiis, mollitia facilis quis delectus voluptatibus illo tempore quo illum esse dolores rerum id ipsa dolore necessitatibus voluptatum soluta maiores veniam!</p>
                        {/* <NavLink to={"/services"} className={"flex w-[50%] items-center gap-3 justify-center bg-primary py-3 px-5 text-sm text-secondary rounded-full hover:bg-secondary hover:text-primary duration-500 hover:border-primary border border-transparent hover:shadow-lg"}>Learn more</NavLink> */}
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
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 items-center gap-10  border-primary md:p-10 rounded-3xl mb-14 md:mb-5'>
                    <div className='order-1 md:order-2'>
                        <img src="https://images.pexels.com/photos/2041627/pexels-photo-2041627.jpeg?auto=compress&cs=tinysrgb&w=600" className='rounded-xl' alt="" />
                    </div>
                    <div className='order-2 md:order-1'>
                        <h1 className='text-2xl font-bold mb-5'>Are you stretched thin running your marketing business?</h1>

                        <p className='italic'>
                            The StoryBrand Certified Guide Program can help you level up and scale your marketing business to 6 figures and beyond.
                            As a Certified Guide, you’ll get extensive training and exclusive rights to use the StoryBrand framework with your clients to get results every time. You’ll also receive ongoing education and support to generate more leads, automate your marketing, and steadily grow your business.
                        </p>
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
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 items-center gap-10  border-primary md:p-10 rounded-3xl mb-14 md:mb-5'>
                    <div className='order-1 md:order-2'>
                        <img src="https://images.pexels.com/photos/2041627/pexels-photo-2041627.jpeg?auto=compress&cs=tinysrgb&w=600" className='rounded-xl' alt="" />
                    </div>
                    <div className='order-2 md:order-1'>
                        <h1 className='text-2xl font-bold mb-5'>Are you stretched thin running your marketing business?</h1>

                        <p className='italic'>
                            The StoryBrand Certified Guide Program can help you level up and scale your marketing business to 6 figures and beyond.
                            As a Certified Guide, you’ll get extensive training and exclusive rights to use the StoryBrand framework with your clients to get results every time. You’ll also receive ongoing education and support to generate more leads, automate your marketing, and steadily grow your business.
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Homepage