import React, { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { GrHomeRounded } from "react-icons/gr";
import { GrServices } from "react-icons/gr";
import { FaUsersRays } from "react-icons/fa6";
import { FaRegNewspaper } from "react-icons/fa";
import logo from "../assets/Images/logo.png"
import logo1 from "../assets/Images/main_logo_1.png"
import { MdCancel } from "react-icons/md";

const Header = () => {
    const [isScroll, setIsScroll] = useState(false);
    const location = useLocation();
    const [showNav, setShowNav] = useState(false);
    const [showPopup, setShowPopup] = useState(false);
    const nav = [
        {
            text: "Home",
            Icon: GrHomeRounded,
            to: "/"
        },
        {
            text: "Grow Your Sales",
            Icon: GrServices,
            to: "/grow_your_sales"
        },
        {
            text: "About",
            Icon: FaUsersRays,
            to: "/about"
        },
        {
            text: "Case Studies",
            Icon: FaUsersRays,
            to: "/case_studies"
        },
        {
            text: "Contact Us",
            Icon: FaRegNewspaper,
            to: "/contact_us"
        }
    ]
    const handleShowNav = () => {
        setShowNav(!showNav)
    }

    useEffect(() => {

        window.onscroll = () => {
            if (scrollY > 0) {
                setIsScroll(true);
            } else {
                setIsScroll(false)
            }
        }
        // showing popup only on home page
        if (location.pathname == "/") {
            // Showing popup after 5 seconds
            setTimeout(() => {
                setShowPopup(true)
                document.body.style.overflow = "hidden"

                // Showing popup after 5 minutes
                setTimeout(() => {
                    setShowPopup(true)
                    document.body.style.overflow = "hidden"
                }, 300000)

            }, 5000);
        }

        return () => { }

    }, [])

    useEffect(() => {
        const hash = location.hash;
        if (hash) {
            const element = document.querySelector(hash);
            console.log(element)
            if (element) {
                // element.scrollIntoView({ behavior: "smooth" });
                window.scroll({ top: element.offsetTop - 100, behavior: "smooth" })
            }
        } else {
            if (scrollY > 0) {
                window.scroll({ top: 0, behavior: "smooth" })
            }
        }

        // closing nav when user goes to a different page
        setShowNav(false)
        if (location.pathname != "/") {
            setShowPopup(false)
        }
        // changing title based on current page
        nav.forEach(item => {
            if (item.to == location.pathname) {
                document.title = `Jargs Cormark - ${item.text}`
            }
        })


    }, [location.pathname])

    // disabling scrolling when nav is opened
    useEffect(() => {
        if (showNav) {
            document.body.style.overflow = "hidden"
        } else {
            document.body.style.overflow = "auto"
        }
    }, [showNav])
    return (
        <>
            {/* Large Screens */}
            <nav className={` md:px-20 py-3   justify-between items-center fixed  w-[100%] hidden md:flex  z-50  ${isScroll ? 'shadow-sm border bg-white/80 backdrop-blur-md top-0' : `-top-1 ${location.pathname == "/" && "text-white"}`} `}>
                <ul>
                    <NavLink to={"/"}> <img src={isScroll ? logo : location.pathname == "/" ? logo1 : logo} className="object-contain  w-10" alt="" /></NavLink>
                </ul>
                <ul className='flex justify-between gap-14 font-Barlow'>
                    {nav.map(({ text, Icon, to }, index) => <li key={index}  ><NavLink to={to} className={'flex items-center gap-3 font-light '}><Icon size={20} className='hidden' /> {text}</NavLink></li>)}
                </ul>
                <ul></ul>
            </nav>

            {/* Small Screens */}
            <nav className={` py-3 px-5 duration-300  justify-between fixed  w-[100%] flex items-center md:hidden  z-50  ${isScroll && !showNav ? 'shadow-sm border bg-white/80 backdrop-blur-md top-0' : '-top-1'} bg-white h-fit`}>
                <div onClick={handleShowNav} className=''>
                    <span className={`border block w-8 h-[3px] rounded-full  bg-black mb-[8px] ${showNav ? "rotate-45 translate-y-3" : "rotate-0 translate-y-0"} duration-150`}></span>
                    <span className={`border block w-8 h-[3px] rounded-full  bg-black mb-[5px] ${showNav ? "-rotate-45" : "rotate-0"} duration-150`}></span>

                </div>

                <NavLink to={"/"}> <img src={logo} className="object-contain  w-10" alt="" /></NavLink>

                <nav className={`fixed bg-white   left-0 w-[100%] px-5  font-Mulish text-lg list-none flex flex-col gap-7 duration-500  ${!showNav ? "h-0 py-0 top-[50px]" : "h-[100vh] top-[50px] py-10"} overflow-hidden`}>
                    {nav.map(({ text, Icon, to }, index) => <li key={index} style={{ opacity: !showNav ? 0 : 1, transition: `all 1s ` }} ><NavLink to={to} className={'flex items-center gap-3 hover:text-primary hover:translate-x-3 translate-x-0 relative duration-300 '}><Icon size={20} className='hidden' /> {text}</NavLink></li>)}
                </nav>
            </nav>


            {/* Popup */}
            <div className={`fixed z-[100] w-[100%] h-[100vh] bg-black/30 backdrop-blur-[3px] flex items-center justify-center ${showPopup ? "z-20" : "hidden"} top-0 left-0`}>
                <div className={`w-[95%] md:w-[40%] h-fit bg-white rounded-3xl outline outline-4 outline-white/40 p-10 delay-100 duration-300 ${showPopup ? "translate-y-0 bg-opacity-100" : "translate-y-10 opacity-0"}`}>
                    <div className='mb-4 flex justify-end text-[#ccc] '>
                        <MdCancel size={20} className='cursor-pointer' onClick={() => {
                            document.body.style.overflow = "auto"
                            setShowPopup(false)
                        }} />
                    </div>
                    <h1 className='text-xl font-bold font-Barlow mb-5'>Is Your Marketing Strategy Holding You Back?
                    </h1>

                    <p className='mb-8 font-Mulish'>
                        Struggling with low visibility, inconsistent results, or missed opportunities?
                        Gain expert insights to uncover gaps, seize untapped opportunities, and implement tailored solutions to help your business thrive.

                    </p>

                    <NavLink target='_blank' to={"https://forms.gle/469U4WEdYrPfJ8PcA"} className={"w-fit flex items-center gap-3 justify-between bg-secondary py-4 px-5 font-Mulish text-primary text-sm rounded-full border border-primary duration-500 text-center "}>Get Your Free Marketing Audit Today</NavLink>
                </div>
            </div>
        </>
    )
}

export default Header