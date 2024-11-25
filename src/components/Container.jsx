import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'
const Container = () => {

    return (
        <div className='overflow-x-hidden md:overflow-x-auto'>
            <Header />
            <div className='mt-10 md:mt-0'>
                <Outlet />
            </div>
            <Footer />
        </div>
    )
}

export default Container