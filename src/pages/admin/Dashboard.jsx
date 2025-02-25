import React, { useContext, useEffect } from 'react'
import { Outlet, useNavigate, useLocation, NavLink } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import { UserContext } from '../../context/user';
import logo from "@assets/images/logo.png"
const Dashboard = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { user } = useContext(UserContext)

    useEffect(() => {
        if (!user) {
            navigate("/admin")
        }
    }, [])
    return (
        <div className='md:p-[2vw] p-5'>
            <NavLink to={"/"}> <img src={logo} className="object-contain  w-10" alt="" /></NavLink>
            <ToastContainer />
            <Outlet />
        </div>
    )
}

export default Dashboard
