import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'
const Container = () => {

    return (
        <>
            <Header />
            <div className='mt-10 md:mt-0'>
                <Outlet />
            </div>
            <Footer />
        </>
    )
}

export default Container