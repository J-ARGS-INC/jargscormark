import React, { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'

const Header = () => {
    const [isScroll, setIsScroll] = useState(false);
    const location = useLocation();
    useEffect(() => {

        window.onscroll = () => {
            if (scrollY > 0) {
                setIsScroll(true);
            } else {
                setIsScroll(false)
            }
        }

        return () => { }

    }, [])

    useEffect(() => {
        if (scrollY > 0) {
            window.scroll({ top: 0, behavior: "smooth" })
        }

    }, [location.pathname])



    return (
        <>
            {/* Large Screens */}
            <nav className={`  py-5 duration-300  justify-between fixed  w-[100%] hidden md:flex  z-10  ${isScroll ? 'shadow-sm border bg-white/80 backdrop-blur-md top-0' : '-top-1'}`}>
                <ul>
                    {/* <li>Hi</li> */}
                </ul>
                <ul className='flex justify-between gap-14 font-Barlow'>
                    <li><NavLink to={"/"}>Home</NavLink></li>
                    <li><NavLink to={"/services"}>Services</NavLink></li>
                    <li><NavLink to={"/about"}>About</NavLink></li>
                    <li><NavLink to={"/blog"}>Blog</NavLink></li>
                </ul>
                <ul></ul>
            </nav>
        </>
    )
}

export default Header