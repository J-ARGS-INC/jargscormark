import React, { useContext, useEffect, useState } from 'react'
import { useRequest } from '../../hooks/requests';
import { FaSpinner } from 'react-icons/fa';
import { AiOutlineDelete } from "react-icons/ai";
import { toast } from 'react-toastify';
import { FiEdit3 } from "react-icons/fi";
import { useNavigate, useParams } from 'react-router-dom';

const EditCaseStudy = () => {
    const navigate = useNavigate()
    const [showYoutube, setShowYoutube] = useState(false);
    const { id } = useParams()
    const { Update, Get, data: { loading, response } } = useRequest()
    const [inputs, setInputs] = useState({
        name: "",
        desc: "",
        services: "",
        links: "",
        results: "",
        youtubeVideo: "",
        image: null,
        details: [
            {
                title: "",
                subtitle: "",
                images: null
            }
        ]
    })
    const handleAddSection = () => {
        let details = [...inputs.details, {
            title: "",
            subtitle: "",
            images: []
        }]
        setInputs(prev => ({ ...prev, details }))

    }


    const handleDetailsInput = (e, selected_index) => {
        let details = inputs.details.map((item, index) => index == selected_index ? { ...item, [e.target.name]: e.target.value } : item);
        setInputs(prev => ({ ...prev, details }))

    }

    const handleInputChange = (e) => {
        setInputs(prev => ({ ...prev, [e.target.name]: e.target.value }))
    }

    const uploadImages = async (files) => {
        const formData = new FormData();
        files.forEach(fileList => {
            Array.from(fileList).forEach(file => {
                formData.append("files", file)
            })
        })
        const imageUrls = await Post("/api/admin/upload", formData, true);
        return imageUrls
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        let data = {
            name: inputs.name,
            description: inputs.desc,
            services: inputs.services.split(",,").filter(item => item != ""),
            results: inputs.results.split(",,").filter(item => item != ""),
            links: inputs.links.split(",,").filter(item => item != ""),
            youtubeVideo: inputs.youtubeVideo ? inputs.youtubeVideo.replace(/"/g, "'") : null,
            image: inputs.image,
            details: inputs.details
        }

        // const formData = new FormData();
        // Object.entries(data).forEach(item => {
        //     formData.append(item[0], item[1])
        // })

        let updateDB = await Update(`/api/admin/casestudy/${id}`, data, true);
        console.log(updateDB);
        // changeLoading(true);
        // const files = inputs.image ? [inputs.image, ...inputs.details.map(({ images }) => images)] : [...inputs.details.map(({ images }) => images)];
        // const imagesUrl = await uploadImages(files); //uploading images
        // let data = {
        //     name: inputs.name,
        //     description: inputs.desc,
        //     services: inputs.services.split(",,").filter(item => item != ""),
        //     results: inputs.results.split(",,").filter(item => item != ""),
        //     links: inputs.links.split(",,").filter(item => item != ""),
        //     youtubeVideo: inputs.youtubeVideo ? inputs.youtubeVideo.replace(/"/g, "'") : null,
        //     image: inputs.image ? imagesUrl[0] : null,
        //     details: inputs.details.map((item, index) => {
        //         let startIndex = index > 0 ? inputs.details[index].images.length : inputs.image ? index + 1 : index;
        //         let endIndex = index > 0 ? item.images.length + startIndex : inputs.image ? item.images.length + 1 : item.images.length;
        //         return { ...item, images: imagesUrl.flat().slice(startIndex, endIndex) }
        //     })
        // }

        // let saveToDb = await Post("/api/admin/casestudy", data, true);  // sending to database
        // if (saveToDb) {
        //     console.log(saveToDb)
        //     setInputs({
        //         name: "",
        //         desc: "",
        //         services: "",
        //         links: "",
        //         results: "",
        //         image: {},
        //         youtubeVideo: "",
        //         details: [
        //             {
        //                 title: "",
        //                 subtitle: "",
        //                 images: {}
        //             }
        //         ]
        //     })
        //     Get("/api/admin/casestudy", true)
        //     toast(`${data.name} Created Successfully`, { position: "top-right", type: "success" });
        // }


    }



    useEffect(() => {
        Get("/api/admin/casestudy", true)
    }, []);

    useEffect(() => {
        if (response) {
            if (!response.find(item => item._id == id)) {
                navigate("/admin/dashboard");
                return
            }
            const { name, description, services, results, links, youtubeVideo, details } = response.find(item => item._id == id);

            setInputs(prev => ({
                ...prev,
                name,
                desc: description,
                services: services.join(",,"),
                results: results.join(",,"), links: links.join(",,"),
                youtubeVideo: youtubeVideo ?? "",
                details
            }))

            if (youtubeVideo) {
                setShowYoutube(true);
            }
        }
    }, [response])
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 py-10 font-Barlow'>
            <div>
                <form action="" className=' flex flex-col gap-5' onSubmit={handleSubmit}>
                    <div className='flex flex-col gap-1'>
                        <label htmlFor="">Brand Name</label>
                        <input required type="text" placeholder='Enter Name' className='outline-0 border w-[100%] border-black py-3 px-5' name='name' onChange={handleInputChange} value={inputs.name} />
                    </div>
                    <div className='flex flex-col gap-1'>
                        <label htmlFor="">Brand Description</label>
                        <textarea required name="desc" id="" className='outline-0 border w-[100%] border-black py-3 px-5 resize-none' onChange={handleInputChange} value={inputs.desc}></textarea>

                    </div>

                    <div className='flex flex-col gap-1'>
                        <label htmlFor="">Services Offered</label>

                        <textarea required name="services" id="" className='outline-0 border w-[100%] border-black py-3 px-5 resize-none' onChange={handleInputChange} value={inputs.services} placeholder='Item 1,, Item 2'></textarea>
                    </div>

                    <div className='flex flex-col gap-1'>
                        <label htmlFor="">Results Gained</label>


                        <textarea required name="results" id="" className='outline-0 border w-[100%] border-black py-3 px-5 resize-none' onChange={handleInputChange} value={inputs.results} placeholder='Item 1,, Item 2'></textarea>
                    </div>

                    <div className='flex flex-col gap-1'>
                        <label htmlFor="">Links</label>


                        <textarea required name="links" id="" className='outline-0 border w-[100%] border-black py-3 px-5 resize-none' onChange={handleInputChange} value={inputs.links} placeholder='Item 1,, Item 2'></textarea>
                    </div>

                    <div className='flex flex-col gap-1'>
                        <label htmlFor="">Choose Cover</label>
                        <select name="" id="" className='outline-0 border w-[100%] border-black py-3 px-5 resize-none' onChange={e => setShowYoutube(e.target.value == "youtube" ? true : false)} defaultValue={inputs.youtubeVideo ? "youtube" : "image"}>
                            <option value="image" >Image</option>
                            <option value="youtube" >Video</option>

                        </select>
                    </div>
                    {
                        showYoutube ?
                            <div className='flex flex-col gap-1'>
                                <label htmlFor="">Youtube Link</label>
                                <input required type="text" placeholder='Enter Youtube Embed' className='outline-0 border w-[100%] border-black py-3 px-5' name='youtubeVideo' onChange={handleInputChange} value={inputs.youtubeVideo} />
                            </div> :

                            <div className='flex flex-col gap-1'>
                                <label htmlFor="">Cover Image</label>
                                <input type="file" className='border p-3' name='image' onChange={e => setInputs(prev => ({ ...prev, image: e.target.files }))} />
                            </div>
                    }


                    <div className='flex justify-end'>
                        <span className='text-xs border border-black py-2  px-5' onClick={handleAddSection}>Add New Section</span>
                    </div>
                    {
                        inputs.details.map(({ images, title, subtitle }, index) => <div className='flex flex-col gap-5' key={index}>

                            <hr className='my-5' />


                            <div className='flex flex-col gap-1'>
                                <label htmlFor="">Section Title</label>
                                <input required type="text" placeholder='Enter Name' className='outline-0 border w-[100%] border-black py-3 px-5' name='title' onChange={e => handleDetailsInput(e, index)} value={title} />
                            </div>

                            <div className='flex flex-col gap-1'>
                                <label htmlFor="">Section Description</label>
                                <textarea name="subtitle" id="" className='outline-0 border w-[100%] border-black py-3 px-5 resize-none' onChange={e => handleDetailsInput(e, index)} value={subtitle}></textarea>
                            </div>

                            <div className='flex flex-col gap-1'>
                                <div className='flex justify-between items-center'>
                                    <label htmlFor="">Section Image</label>
                                </div>
                                <input key={index} type="file" className='border p-3' name='url' multiple onChange={e => {
                                    let details = inputs.details.map((item, iten_index) => iten_index == index ? { ...item, images: e.target.files } : item);
                                    setInputs(prev => ({ ...prev, details }))

                                }} />
                            </div>

                        </div>)
                    }

                    <button className='p-3 bg-primary text-white flex justify-center'>
                        {loading ? <FaSpinner size={25} className='animate-spin' /> : <span>Create Case</span>}
                    </button>

                </form>
            </div>


        </div>
    )
}

export default EditCaseStudy
