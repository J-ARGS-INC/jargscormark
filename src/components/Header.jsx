import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <>
            {/* Large Screens */}
            <nav className='py-4  justify-between fixed  w-[100%] hidden md:flex'>
                <ul>
                    {/* <li>Hi</li> */}
                </ul>
                <ul className='flex gap-5 font-Barlow'>
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