import React, { useContext, useEffect } from 'react'
import { Outlet, useNavigate, useLocation } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import { UserContext } from '../../context/user';

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
        <div className='md:p-[2vw]'>
            <ToastContainer />
            <Outlet />
        </div>
    )
}

export default Dashboard
