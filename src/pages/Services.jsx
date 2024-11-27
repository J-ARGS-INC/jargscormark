import React, { useRef, useState } from 'react'
import { PiPause, PiPlay } from 'react-icons/pi'
import { RiArrowDownSLine } from "react-icons/ri";
import { TbBrand4Chan } from 'react-icons/tb';

const Services = () => {
    const video = useRef()
    const [videoIsPlayed, setVIdeoIsPlayed] = useState(false);
    const services = [
        {
            header: "Brand Strategy & Positioning",
            subtext: "Stand out with strategies that build trust and highlight your unique value.",
            id: "brand_strategy",
            img: "https://images.pexels.com/photos/2421374/pexels-photo-2421374.jpeg",

        },
        {
            header: "Digital Marketing",
            subtext: "Reach your audience where they are with campaigns that drive results, from social media, email, website, or targeted ads. This is our full digital marketing package for you on a monthly basis. ",
            id: "digital_marketing",
            img: "https://images.pexels.com/photos/7243115/pexels-photo-7243115.jpeg",
        },

        {
            header: "Content Creation and Video Production",
            subtext: "Engage, inspire, and convert with high-quality, impactful Storytelling content. ",
            id: "content_creation",
            img: "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg",
        },
        {
            header: "Social Media Management",
            subtext: "Turn your social media channels into powerful tools for connection and growth. We create and manage tailored content strategies that resonate with your audience, drive engagement, and build a loyal community around your brand.",
            id: "social_media",
            img: "https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg",
        }
    ]
    const playVIdeo = () => {
        if (!videoIsPlayed) {
            video.current.play()
            setVIdeoIsPlayed(true);
        } else {
            video.current.pause()
            setVIdeoIsPlayed(false);
        }
    }

    return (

        <div className='  py-10 px-5  md:py-[18vh] md:px-20 bg-[#f5f5f5'>
            <div className='grid grid-cols-1  md:grid-cols-2 items-end gap-20 mb-20'>
                <h1 className='text-4xl font-bold font-Barlow'>
                    Crafting Powerful Strategies That Make Your Brand Unforgettable, Boost Engagement, and Drive Real Results
                </h1>

                <p className='font-Mulish'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat sunt quaerat rem doloremque animi exercitationem. Eligendi repellat quisquam iusto qui voluptates, architecto modi, tempore incidunt quos quod consectetur totam repellendus placeat eaque. A nihil soluta harum nisi maiores impedit libero.</p>
            </div>

            <div className='h-[300px]  relative'>
                <video src="https://videos.pexels.com/video-files/3205624/3205624-sd_640_360_25fps.mp4" className='w-[100%] h-[100%] object-cover' ref={video} loop></video>
                <div className='duration-500 absolute w-[100%] h-[100%] top-0 flex items-center justify-center' style={{ background: !videoIsPlayed ? 'linear-gradient(rgba(0,0,0,.3), rgba(0,0,0,.7))' : 'linear-gradient(rgba(0,0,0,.4), rgba(0,0,0,.3))' }}>
                    <div className={`duration-500 w-14 h-14 rounded-full bg-white outline outline-offset-8 outline-white flex items-center justify-center cursor-pointer ${!videoIsPlayed ? 'opacity-1' : 'opacity-60'}`} onClick={playVIdeo}>
                        {!videoIsPlayed ? <PiPlay /> : <PiPause />}
                    </div>
                </div>
            </div>

            <div className='my-10 '>

                <div className='text-lg flex items-center gap-x-3 font-Barlow mb-20'>
                    <div className='w-3 h-3 outline outline-offset-2 outline-1 outline-purple bg-purple rounded-xl'></div>
                    <p>Our Services</p>
                </div>


                {
                    services.map(({ header, subtext, img, id }, index) =>
                        <div className=' grid grid-cols-1 md:grid-cols-3 gap-y-10 md:gap-y-10 my-20  ' id={id} key={index}>
                            <div className='font-Barlow'>
                                <span className='text-lg py-2 px-4 rounded-full border-primary text-primary border'>{index + 1 < 10 ? `0${index + 1}` : index + 1}</span>
                            </div>
                            <div className='md:col-span-2' >
                                <h1 className='font-Barlow text-4xl font-semibold mb-5'>{header}</h1>
                                <p className='font-Mulish'>{subtext}</p>

                                <div className=''>
                                    <div className='mt-10'>
                                        <div className='h-[350px]'>
                                            <img src={img} alt="" className='w-[100%] h-[100%] object-cover' />
                                        </div>
                                        <div className='border'></div>
                                    </div>
                                </div>
                            </div>


                        </div>
                    )
                }

                {/* {
                    services.map(({ header, subtext, img }) => <div className='border-y py-10 px-5  cursor-pointer'>
                        <div className='grid md:grid-cols-6  gap-10'>
                            <h1 className='md:col-span-2 text-2xl font-semibold font-Barlow'>{header}</h1>
                            <p className='md:col-span-3 font-Mulish'>{subtext}</p>
                            <div className='flex items-center justify-center'>
                                <div className='w-10 h-10  rounded-full flex items-center justify-center bg-primary'>
                                    <Icon size={20} className='text-white' />
                                </div>
                            </div>
                        </div>




                    </div>)
                } */}

                <div className='mt-20 grid grid-cols-1 md:grid-cols-2 items-end gap-10'>
                    <h1 className='text-5xl font-Barlow font-semibold mb-5'>Let's make your business, <span className='text-purple'>sale better.</span></h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint molestias atque veniam! Laboriosam illum iste voluptatum tempora deserunt ab quis quasi doloremque non ut. Impedit nisi repellendus aut delectus atque voluptates accusantium eum dolor quia ipsa recusandae exercitationem, aspernatur totam obcaecati autem. Unde ullam perspiciatis dignissimos natus beatae molestias provident sit dolorem ut, dolores nulla maxime praesentium vel autem laboriosam, qui aliquid dolor illum tempora iure perferendis! Quisquam, fugiat asperiores.</p>
                </div>





            </div>
        </div>
    )
}

export default Services