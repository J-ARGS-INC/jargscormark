import React from 'react'
import { NavLink } from 'react-router-dom'
import { RxArrowRight } from "react-icons/rx";
import { TbLocation } from "react-icons/tb";

const Homepage = () => {
    return (
        <div className='h-[100vh] grid grid-cols-1 py-5 px-5  md:grid-cols-2 md:py-[18vh] md:px-14 bg-[#f0f0f0]'>
            <div className='font-Mulish'>
                <p className=''>Ready to ignite your business with <b>JARGS?</b></p>
                <div className='font-Barlow py-5'>
                    <h1 className='text-5xl md:text-6xl font-bold capitalize mb-3' >Crafting Brands,  that Inspire, Engage, and Transform.</h1>
                    <p className='text-xl mb-8'>Your brand is more than just a business—it’s a story that deserves to be told, and we’re here to make sure that story resonates, inspires, and drives action</p>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-[5vw]'>
                        <NavLink className={"flex items-center gap-3 justify-between bg-primary py-4 px-5 text-lg text-secondary rounded-full hover:bg-secondary hover:text-primary duration-500 hover:border-black border border-transparent hover:shadow-lg "}>Let's Go <TbLocation size={20} /></NavLink>

                        <NavLink className={"flex items-center gap-3 justify-between bg-secondary py-4 px-5 text-lg text-primary rounded-full border hover:border-primary duration-500 "}>Elevate Your Brand<RxArrowRight size={20} /></NavLink>
                    </div>
                </div>
            </div>

            <div className='grid grid-cols-2 gap-10 pl-32 h-[60vh]'>
                <div className="border-primary border  rounded-md overflow-hidden">
                    <img src="https://images.pexels.com/photos/5485890/pexels-photo-5485890.jpeg?auto=compress&cs=tinysrgb&w=600" className='w-[100%] h-[100%] object-cover' alt="" />
                </div>
                <div className="border-primary border  rounded-md overflow-hidden relative top-14">
                    <img src="https://images.pexels.com/photos/2489295/pexels-photo-2489295.jpeg?auto=compress&cs=tinysrgb&w=600" className='w-[100%] h-[100%] object-cover' alt="" />
                </div>
                {/* <div className="border-black border"></div>
                <div className="border-black border"></div> */}
            </div>
        </div>
    )
}

export default Homepage