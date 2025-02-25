
import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { LuCheckCircle } from "react-icons/lu";
import { TbSquareCheck } from "react-icons/tb";
import { useParams } from 'react-router-dom';
import { useRequest } from '../hooks/requests';
import { useQuery } from 'convex/react';
import { api } from "../../convex/_generated/api";
import { FaSpinner } from "react-icons/fa6";

const CaseStudy = () => {
    const { id } = useParams();
    const { data: { response, loading }, Get } = useRequest()
    const [storageIds, setStorageIds] = useState([]);
    const imageUrls = useQuery(api.messages.getImageUrls, { storageIds });
    const [loadedImages, setLoadedImages] = useState({
        isLoaded: false,
        images: 0
    });
    useEffect(() => {
        Get(`/api/user/casestudy/${id}`, false)
    }, [])

    useEffect(() => {
        if (response) {
            setStorageIds(response.details.map(({ images }) => images).flat())
            if (loadedImages.images == storageIds.length) setLoadedImages(prev => ({ ...prev, isLoaded: true }))
        }
    }, [response])
    return (
        <div>
            <div className='  py-10 px-10  md:py-[18vh] md:px-[10vw] bg-[#fdfdfd] font-Barlow'>
                {response && loadedImages.isLoaded ? (<div className='grid grid-cols-1  md:grid-cols-1 items-end gap-5 mb-20'>
                    <motion.div initial={{ translateY: 30, opacity: 0 }} whileInView={{ translateY: 0, opacity: 1 }} transition={{ duration: 0.4, delay: 0.2 }} viewport={{ once: true }}>

                        <h1 className='text-4xl font-bold font-Barlow'>
                            {response.name}

                        </h1>

                    </motion.div>

                    <motion.div initial={{ translateX: -20, opacity: 0 }} animate={{ translateX: 0, opacity: 1 }} transition={{ delay: 0.4 }}>
                        <p className='font-Mulish'>{response.description}
                        </p>

                    </motion.div>

                    <div className='grid gap-7 mt-5'>
                        <div className='grid grid-cols-1 md:grid-cols-4 items-center '>
                            <p className='text-lg text-gray-400'>Services</p>
                            <div className='md:col-span-3'>
                                <div className='flex flex-wrap    gap-3'>
                                    {
                                        response.services.map((item, index) => item.length > 0 && <span className='border border-black  py-2 px-3' key={index}>{item}</span>)
                                    }
                                </div>
                            </div>
                        </div>

                        <div className='grid grid-cols-1 md:grid-cols-4 items-center'>
                            <p className='text-lg text-gray-400'>Results</p>
                            <div className='md:col-span-3'>
                                <ul>
                                    {
                                        response.results.map((item, index) => item.length > 0 &&
                                            <li key={index} className='flex items-center gap-4 mb-2'><LuCheckCircle size={20} /> <span>{item}</span></li>)
                                    }

                                </ul>
                            </div>
                        </div>

                        <div className='grid grid-cols-1 md:grid-cols-4 items-center'>
                            <p className='text-lg text-gray-400'>Links</p>
                            <div className='md:col-span-3'>
                                <ul>
                                    {
                                        response.links.map((item, index) => item.length > 0 &&
                                            <li key={index} className='flex items-center gap-4 mb-2'><TbSquareCheck size={20} /> <span>{item}</span></li>)
                                    }

                                </ul>
                            </div>
                        </div>
                    </div>
                    <hr className='my-10' />
                    <div className=''>
                        {
                            response.details.map(({ title, subtitle, images }, index) => {
                                let startIndex = index > 0 ? response.details[index - 1].images.length : 0;
                                let endIndex = index > 0 ? images.length + startIndex : images.length;
                                return <div className='' key={index}>
                                    <h1 className='text-xl font-bold font-Barlow mb-5'>{title}</h1>
                                    <p>{subtitle}</p>
                                    <div className={`my-20 grid grid-cols-1 ${imageUrls ? imageUrls.length >= 3 ? "md:grid-cols-2" : "md:grid-cols-2" : ""} gap-10`}>
                                        {
                                            imageUrls && imageUrls.slice(startIndex, endIndex).map((item, index) => {
                                                console.log(item)
                                                return <div key={index} className={`${imageUrls.length >= 3 ? `${index % 3 == 0 ? "md:col-span-2" : index == imageUrls.length - 1 && index % 2 == 0 ? "md:col-span-2" : ""}` : index``}`}>
                                                    {/* <h1>{imag}</h1> */}
                                                    <img src={item} className={`w-[100%] h-[400px] object-cover rounded-sm `} alt="" onLoad={() => setLoadedImages(prev => ({ ...prev, images: prev.images + 1 }))} />
                                                </div>
                                            })
                                        }
                                    </div>
                                </div>
                            })
                        }
                    </div>
                </div>) : <div className='flex justify-center h-[30vh] items-center'>
                    <FaSpinner size={50} className='animate-spin' />
                </div>}


            </div>
        </div>
    )
}

export default CaseStudy
