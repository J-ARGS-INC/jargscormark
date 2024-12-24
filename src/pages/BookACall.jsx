import React from 'react'
import { motion } from 'framer-motion'
import { useParams } from 'react-router-dom'
const BookACall = () => {
    const params = useParams();
    return (
        <div>
            <div className=' py-10 px-5  md:py-[18vh] md:px-20 text-xl font-Mulish bg-[#fafafa]'>
                <div className='flex justify-center items-end gap-20 mb-10 md:mb-20 md:px-32 '>


                    <motion.div initial={{ translateX: -20, opacity: 0 }} animate={{ translateX: 0, opacity: 1 }} transition={{ delay: 0.4 }} className='mb-20'>

                        <h1 className='font-Barlow capitalize text-6xl text-center font-semibold '>
                            It's time to take your brand to the <span className='text-purple underline underline-offset-8 '>next level!</span>
                        </h1>
                    </motion.div>



                </div>
                <div className='bg-white p-10 rounded-2xl shadow-sm border shadow-black/5'>
                    {
                        params?.type == "free" ? <>
                            <h1 className='mb-10'>Date & Time</h1>

                            <p className='text-sm mb-10'>Appointment</p>
                            <div className='my-3 border p-6 rounded-2xl'>
                                <h1 className='mb-1'>Free Discovery Call With Jargs</h1>
                                <p className='text-sm font-light'>30 Minutes</p>
                            </div>

                            <div>
                                <iframe src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ1_9J5Isvf-OUb6GI21z9Zt-DTOUVw7W6lciyZgfSHvriyltUFPkeAidUiDr1znMYCYxSbjHos7?gv=true" style={{ border: 0 }} width="100%" height="600" ></iframe>

                            </div>
                        </> : <>
                            <h1 className='mb-10'>Date & Time</h1>

                            <p className='text-sm mb-10'>Appointment</p>
                            <div className='my-3 border p-6 rounded-2xl'>
                                <h1 className='mb-1'>Schedule a Paid Consultation  Call With Jargs</h1>
                                <p className='text-sm font-light'>90 Minutes</p>
                            </div>


                            <div>
                                <iframe src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ0L6xaO8BLVZJdtkZS4ZRz85PjjHnmtRtVxjU3s6eh5uLrcKJ__UrPX4HOYN2YXCuksRlAOD0D8?gv=true" style={{ border: 0 }} width="100%" height="600" frameborder="0">

                                </iframe>

                            </div>
                        </>
                    }

                </div>


            </div>
        </div>
    )
}

export default BookACall