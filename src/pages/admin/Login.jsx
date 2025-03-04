import React, { useContext, useEffect, useState } from 'react'
import { useRequest } from '../../hooks/requests'
import { FaSpinner } from "react-icons/fa6";
import { toast, ToastContainer } from 'react-toastify';
import { NavLink, useNavigate } from 'react-router-dom';
import { UserContext } from '../../context/user';
import logo from "@assets/Images/logo.png";
const Login = () => {
    const { data: { response, loading }, Post } = useRequest();
    const { setUser } = useContext(UserContext)
    const navigate = useNavigate();
    const [input, setInput] = useState({
        username: "",
        password: ""
    })

    const handleInput = (e) => {
        setInput(prev => ({ ...prev, [e.target.name]: e.target.value }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!loading) {
            let resp = await Post("/api/auth/admin", input, false);
            if (resp) {
                sessionStorage.setItem("admin", resp)
                setUser(resp);
                navigate("/admin/dashboard");
            }
        }


    }


    return (
        <div className='p-10 flex flex-col justify-between h-[80vh]'>
            <NavLink to={"/"}> <img src={logo} className="object-contain  w-10" alt="" /></NavLink>
            <div className='flex justify-center items-center  '>


                <div className='font-Barlow'>
                    <h1>Sign in with username</h1>
                    <p>Enter your correct details to login as an admin</p>
                    <form className='mt-10' onSubmit={handleSubmit}>
                        <input required type="text" className='outline-none border w-[100%] p-2 border-black mb-3' placeholder='Enter username' name='username' onChange={handleInput} />

                        <input required type="password" className='outline-none border w-[100%] p-2 border-black mb-9' placeholder='Enter Password' name='password' onChange={handleInput} />

                        <button className='bg-primary w-[100%] text-white py-3 flex justify-center'>
                            {loading ? <FaSpinner size={25} className='animate-spin' /> : <span>Sign In</span>}

                        </button>
                    </form>
                </div>
                <ToastContainer />
            </div>
        </div>
    )
}

export default Login
