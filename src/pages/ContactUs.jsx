import React, { useState } from 'react'
import { motion } from 'framer-motion';
import { IoIosArrowDown } from "react-icons/io";
import { BsChat } from 'react-icons/bs';
import { PiFunnel } from 'react-icons/pi';
import { MdShowChart } from 'react-icons/md';
import { BsCardChecklist, BsClock } from "react-icons/bs";
import { MdFormatListNumbered } from "react-icons/md";
import { LuClock10 } from "react-icons/lu";
import { NavLink } from 'react-router-dom';
import { RxArrowRight } from 'react-icons/rx';
import { CgSpinnerTwoAlt } from "react-icons/cg";

import { send } from "@emailjs/browser"

const ContactUs = () => {

    let [faq, setFaq] = useState(
        [
            {
                question: "How can I be sure that my investment in digital marketing will yield results?",
                answer: "We use data-driven strategies tailored to your specific business needs, ensuring that our efforts are targeted for maximum impact. We'll provide regular performance reports to track progress and adjust our approach to optimize your ROI.",
                show: false
            },
            {
                question: "Am I locked into a long-term agreement?",
                answer: "We offer flexible agreements based on your comfort level. Our goal is to build a partnership based on trust and satisfaction, so we provide options for short-term contracts as well.",
                show: false
            },
            {
                question: "How involved will I be in the marketing strategy?",
                answer: "You will be an integral part of the process. We value your input and will collaborate closely with you to develop a marketing strategy and solutions that reflect your brand’s voice and objectives.",
                show: false
            },
            {
                question: "I'm not familiar with digital marketing. How will you communicate with me?",
                answer: "We pride ourselves on making digital marketing accessible. Our team will provide clear explanations, resources, and regular updates to ensure you feel informed and confident throughout the process.",
                show: false
            },
            {
                question: "What qualifications and experience does your team have?",
                answer: "Our team consists of experienced professionals with backgrounds in digital marketing, analytics, IT, and strategy. We stay updated on industry trends to provide you with the best practices that deliver results.",
                show: false
            },
            {
                question: "How long will it take to see results from my digital marketing efforts?",
                answer: "Digital marketing is often a gradual process. While some tactics can show results quickly, others build momentum over time. We commit to transparent reporting so you can see progress as it develops.",
                show: false
            },
            {
                question: "How will you ensure my business stands out in a competitive market?",
                answer: "Our strategies are tailored to highlight your unique value proposition. We conduct thorough market research to identify gaps and opportunities that will set your brand apart from competitors.",
                show: false
            },
            {
                question: "What if I’m not happy with the results or service?",
                answer: "Your satisfaction is our priority. We have a feedback mechanism in place to address any concerns and will work diligently to resolve issues. If you’re still not satisfied, we can discuss next steps, including adjustments or cancellation of services.",
                show: false
            },
            {
                question: "What metrics will you use to track the success of my campaigns?",
                answer: "We track key performance indicators (KPIs) relevant to your goals, such as website traffic, conversion rates, social media engagement, and more. We provide regular reports detailing our progress and results.",
                show: false
            },
            {
                question: "How do you protect my personal and business data?",
                answer: "We take data security seriously and comply with all relevant data protection regulations. Your information will be stored securely, and we will only use it to deliver the agreed-upon services.",
                show: false
            }
        ]

    )
    let [sendingMail, setSendingMail] = useState(false);
    let [emailData, setEmailData] = useState({
        from_email: "",
        message: ""
    })
    const handleChangeEmailData = (e) => {
        setEmailData(prev => ({ ...prev, [e.target.name]: e.target.value }))
    }
    const data = {
        service_id: 'service_w97qels',
        template_id: 'template_ihruyox',
        user_id: 'S9h_PgXnBQk0X3am8',
        template_params: emailData
    }
    const sendEmail = (e) => {
        e.preventDefault();
        if (!sendingMail) {
            setSendingMail(true);
            send("service_w97qels", "template_9swvl8x", emailData, { publicKey: "S9h_PgXnBQk0X3am8" }).then(res => res.status).then(res => {
                if (res == 200) {
                    alert("Email Sent")
                    setEmailData({
                        from_email: "",
                        message: ""
                    })
                }
            }).catch(err => {
                alert(err.text)
            }).finally(() => {
                setSendingMail(false);
            })

        } else {
            alert("Email is sending, please wait");
        }

    }
    return (
        <div className='font-Mulish'>
            <div className=' py-10 px-5  md:py-[18vh] md:px-20   text-xl '>
                <div className='grid grid-cols-1  md:grid-cols-2 items-end gap-20 mb-20 md:mb-32'>
                    <motion.div initial={{ translateY: 30, opacity: 0 }} whileInView={{ translateY: 0, opacity: 1 }} transition={{ duration: 0.4, delay: 0.2 }}>
                        <h1 className='text-4xl font-bold font-Barlow mb-3'>
                            Got Questions?
                            <span className='text-primary'>  Get in touch with us.</span>
                        </h1>
                        <p className='font-Barlow font-light'>
                            Contact us today, and let’s discuss how we can drive your brand forward.
                        </p>
                    </motion.div>

                    <motion.div initial={{ translateX: -20, opacity: 0 }} animate={{ translateX: 0, opacity: 1 }} transition={{ delay: 0.4 }}>

                        <p className='font-Mulish '>
                            Let’s collaborate to unlock your brand’s full potential. Whether it’s through email, a quick call, or a detailed consultation, we’re committed to understanding your goals and delivering results that exceed expectations. Reach out now, and let’s discuss how we can drive your brand forward!
                        </p>
                    </motion.div>


                </div>

                <motion.div initial={{ translateY: 30, opacity: 0 }} whileInView={{ translateY: 0, opacity: 1 }} transition={{ duration: 0.4, delay: 0.2 }} className='mb-20 md:mb-32'>
                    <h1 className='text-3xl mb-5 font-bold '>How It works</h1>
                    <div className='grid grid-cols-1 md:grid-cols-3 font-Mulish border p-5 rounded-2xl gap-10'>
                        <div className='flex gap-5 items-center'>
                            <MdFormatListNumbered className='text-primary' size={30} />
                            <div className=''>
                                <p>Step one: </p>
                                <p>Pick the option that best suits your needs.
                                </p>
                            </div>
                        </div>

                        <div className='flex gap-5 items-center'>
                            <BsCardChecklist className='text-primary' size={30} />
                            <div className=''>
                                <p>Step two: </p>
                                <p>Fill out the required details accurately.

                                </p>
                            </div>

                        </div>

                        <div className='flex gap-5 items-center'>
                            <BsClock className='text-primary' size={30} />
                            <div className=''>
                                <p>Step three: </p>
                                <p>Submit your request—we’ll get back to you within 24 hours.
                                </p>
                            </div>
                        </div>
                    </div>
                </motion.div>

                <div className=' border-b pb-20 grid grid-cols-1 md:grid-cols-3 items-center mb-20 md:mb-32'>
                    <motion.div initial={{ translateX: -30, opacity: 0 }} whileInView={{ translateX: 0, opacity: 1 }} transition={{ duration: 0.4, delay: 0.2 }}>
                        <h1 className="font-Barlow text-3xl md:text-3xl mb-5 capitalize">
                            Book a Free Discovery Call
                        </h1>
                    </motion.div>

                    <p></p>
                    <motion.div initial={{ translateX: 30, opacity: 0 }} whileInView={{ translateX: 0, opacity: 1 }} transition={{ duration: 0.4, delay: 0.2 }}>
                        <div>
                            <p className=' mb-4'>Take the first step toward growth with our free consultation. This call helps us understand your goals and challenges to determine if we’re the perfect fit for your business.
                            </p>

                            <p className='font-light mb-7'>
                                <b>
                                    Note: Free consultations are subject to qualification. If your request doesn’t align with our expertise, we may decline—but we’ll always provide transparent communication.
                                </b>
                            </p>


                            <NavLink className={"md:w-[80%] flex items-center gap-3 justify-center bg-primary py-4 px-8  text-white rounded-full border hover:border-primary duration-500 "}>Book Now<RxArrowRight size={20} className='' /></NavLink>
                        </div>
                    </motion.div>


                </div>

                <div className='border-b pb-20 grid grid-cols-1 md:grid-cols-3 items-center mb-20 md:mb-32'>
                    <motion.div initial={{ translateX: -30, opacity: 0 }} whileInView={{ translateX: 0, opacity: 1 }} transition={{ duration: 0.4, delay: 0.2 }}>
                        <h1 className="font-Barlow text-3xl md:text-3xl mb-5 capitalize">
                            Schedule a Paid Consultation

                        </h1>
                    </motion.div>

                    <p></p>
                    <motion.div initial={{ translateX: 30, opacity: 0 }} whileInView={{ translateX: 0, opacity: 1 }} transition={{ duration: 0.4, delay: 0.2 }}>
                        <div>
                            <p className='font-light mb-4'>
                                Ready for a deep dive into your marketing strategy? Our paid consultations deliver tailored, actionable insights to tackle your unique challenges and craft a roadmap for success.
                            </p>

                            <p className='font-light mb-7'>
                                With this session, you’ll receive our undivided attention and proven strategies to achieve measurable growth.

                            </p>


                            <NavLink className={"md:w-[80%] flex items-center gap-3 justify-center bg-primary py-4 px-8  text-white rounded-full border hover:border-primary duration-500 "}>Schedule a Consultation<RxArrowRight size={20} className='' /></NavLink>
                        </div>
                    </motion.div>


                </div>

                <div className='border-b pb-20 grid grid-cols-1 md:grid-cols-3 items-center mb-20 md:mb-32'>
                    <motion.div initial={{ translateX: -30, opacity: 0 }} whileInView={{ translateX: 0, opacity: 1 }} transition={{ duration: 0.4, delay: 0.2 }}>
                        <h1 className="font-Barlow text-3xl md:text-3xl mb-5 capitalize">
                            Already Know What You Need?
                        </h1>
                    </motion.div>

                    <p></p>
                    <motion.div initial={{ translateX: 30, opacity: 0 }} whileInView={{ translateX: 0, opacity: 1 }} transition={{ duration: 0.4, delay: 0.2 }}>
                        <div>
                            <p className='font-light mb-4'>
                                Skip the formalities and get straight to the point. Drop us a message with your specific requirements, and we’ll connect with you promptly.
                            </p>
                            <form action='' onSubmit={sendEmail}>
                                <input type="email" className='border py-3 px-5 outline-none text-sm w-[100%] rounded-xl font-light' placeholder='Enter Your Email' value={emailData.from_email} name='from_email' onChange={handleChangeEmailData} required />

                                <textarea name="message" onChange={handleChangeEmailData} id="" className='border outline-none resize-none w-[100%] h-[150px] my-5 p-5 text-sm  rounded-xl font-light' placeholder='Enter Message' required value={emailData.message}></textarea>

                                <button className={"md:w-[80%] flex items-center gap-3 justify-center bg-primary py-4 px-8  text-white rounded-full border hover:border-primary duration-500 "}>
                                    {!sendingMail ? <>
                                        Send Now
                                        <RxArrowRight size={20} className='' />
                                    </> : <>Sending <CgSpinnerTwoAlt size={20} className='animate-spin' /></>}
                                </button>
                            </form>



                        </div>
                    </motion.div>


                </div>
            </div>





            <div className='md:px-10 px-5'>
                <h1 className='mb-10 text-2xl font-semibold capitalize'>
                    Jargs Cormark <span className='text-primary'>
                        frequently asked questions
                    </span>
                </h1>
                <div className='bg-[#fafafafa] p-10 rounded-xl grid grid-cols-1 md:grid-cols-2 gap-10'>
                    {
                        faq.map(({ question, answer, show }, index) => <div key={index} className={`bg-white p-5 duration-150 rounded-2xl ${!show ? "h-32 md:h-24 border overflow-hidden" : "h-[350px] md:h-[250px] border border-primary shadow-lg"} cursor-pointer`} onClick={() => {
                            setFaq(prev => prev.map(faq => ({ ...faq, show: faq.question == question ? !faq.show : false })))
                        }}>
                            <div className='grid grid-cols-6 md:grid-cols-10 items-center justify-between mb-5'>
                                <h1 className='md:text-lg font-light col-span-5 md:col-span-9'>{question}</h1>
                                <IoIosArrowDown />
                            </div>
                            <p className={`${!show ? 'opacity-0' : 'opacity-100 '}`}>{answer}</p>
                        </div>)
                    }
                </div>
            </div>
        </div>
    )
}

export default ContactUs