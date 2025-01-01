import React from 'react'
import { TbLocation } from 'react-icons/tb'
import { NavLink } from 'react-router-dom'
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { PiTwitterLogo } from 'react-icons/pi';

const Footer = () => {
    return (
        <div>
            {/* News Letter */}
            <div className='my-5 relative font-Mulish'>
                <div className='w-[100%] h-[70vh]'>
                    <img src="https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg" className='w-[100%] h-[100%] object-cover' alt="" />
                </div>
                <div className='text-white absolute w-[100%] h-[100%] top-0 left-0 grid md:grid-cols-2 items-center  px-5 md:px-24' style={{ background: "linear-gradient(to right,rgba(0,0,0,.9) 40%, rgba(0,0,0,.2))" }}>
                    <div>
                        <h1 className='text-4xl font-semibold mb-5'>Be part of <b className='text-primary '>Excellence</b></h1>
                        <p className='text-lg font-thin'>Join over 100 entrepreneurs and businesses who trust Jargs Cormark to deliver tailored strategies, measurable growth, and lasting impact. Let’s build your success story—together.</p>

                        <div className='grid grid-cols-1 md:grid-cols-2 mt-6'>
                            <NavLink className={"flex items-center gap-5 justify-center bg-primary py-3 px-5 text-lg text-secondary rounded-full hover:bg-secondary hover:text-primary duration-500 hover:border-primary border border-transparent hover:shadow-lg "}>Get Started <TbLocation size={20} /></NavLink>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer */}

            <footer className='px-5 md:px-24 py-5 font-Mulish'>
                <h1 className='text-2xl mb'>How can we help? <i>Contact us.</i></h1>
                <div className='grid grid-cols-2 md:grid-cols-4 gap-10 my-10'>
                    <ul className='flex flex-col gap-3 text-sm'>
                        <li className='text-lg font-medium mb-1'>Pages</li>
                        <li className='text-black/40'><NavLink to={"/"} className={'hover:underline'}>Home</NavLink></li>
                        <li className='text-black/40'><NavLink to={"/grow_your_sales"} className={'hover:underline'}>Services</NavLink></li>
                        <li className='text-black/40'><NavLink to={"/about"} className={'hover:underline'}>About</NavLink></li>
                        <li className='text-black/40'><NavLink to={"/blog"} className={'hover:underline'}>Blog</NavLink></li>
                    </ul>

                    <ul className='flex flex-col gap-3 text-sm'>
                        <li className='text-lg font-medium mb-1'>Quick Links</li>
                        <li className='text-black/40'><NavLink className={'hover:underline'}>Web development </NavLink></li>
                        <li className='text-black/40'><NavLink className={'hover:underline'}>Digital marketing </NavLink></li>
                        <li className='text-black/40'><NavLink className={'hover:underline'}>Rebranding</NavLink></li>
                        <li className='text-black/40'><NavLink className={'hover:underline'}>Content Creation</NavLink></li>
                    </ul>

                    <ul className='flex flex-col gap-3 text-sm'>
                        <li className='text-lg font-medium mb-1'>Company</li>
                        <li className='text-black/40'><NavLink to={"/contact_us#faq"} className={'hover:underline'}>FAQ </NavLink></li>
                        <li className='text-black/40'><NavLink className={'hover:underline'}>Terms </NavLink></li>
                        <li className='text-black/40'><NavLink className={'hover:underline'} to={"/contact_us"}>Contact Us</NavLink></li>
                    </ul>

                    <ul className='flex flex-col gap-3 text-sm'>
                        <li className='text-lg font-medium mb-1'>Resources</li>
                        <li className='text-black/40'><NavLink className={'hover:underline'}>Blog </NavLink></li>
                        <li className='text-black/40'><NavLink className={'hover:underline'}>Portfolio </NavLink></li>
                        <li className='text-black/40'><NavLink className={'hover:underline'}>Freebie</NavLink></li>
                    </ul>


                </div>

                <hr className='mb-5' />
                <div className='flex justify-between items-center font-Barlow'>
                    <p className='text-sm'>Copyright &copy; JARGS 2024</p>
                    <div className='flex gap-5'>
                        <NavLink>
                            <FaFacebook size={20} />
                        </NavLink>

                        <NavLink>
                            <PiTwitterLogo size={20} />
                        </NavLink>

                        <NavLink>
                            <FaLinkedin size={20} />
                        </NavLink>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer