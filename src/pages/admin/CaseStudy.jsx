import React, { useContext, useEffect, useState } from 'react'
import { CiSquarePlus } from "react-icons/ci";
import { useMutation } from "convex/react";
import { api } from "../../../convex/_generated/api";
import { useRequest } from '../../hooks/requests';
import { FaSpinner } from 'react-icons/fa';
import { AiOutlineDelete } from "react-icons/ai";
import { toast } from 'react-toastify';

const Case_Study = () => {
    const generateUploadUrl = useMutation(api.messages.generateUploadUrl);
    const deleteFiles = useMutation(api.messages.deleteFiles);

    const { Post, Get, changeLoading, Delete, data: { loading, response } } = useRequest()
    const [inputs, setInputs] = useState({
        name: "",
        desc: "",
        services: "",
        links: "",
        results: "",
        image: {},
        details: [
            {
                title: "",
                subtitle: "",
                images: {}
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

    const uploadImages = async (e) => {
        let addresses = []
        for (let i = 0; i < e.target.files.length; i++) {
            const image = e.target.files[i];


            const postUrl = await generateUploadUrl();
            const result = await fetch(postUrl, {
                method: "POST",
                headers: { "Content-Type": image.type },
                body: image,
            });
            const { storageId } = await result.json();
            addresses.push(storageId)
        }

        return addresses

    }

    const handleSubmit = (e) => {
        e.preventDefault()
        changeLoading(true);
        uploadImages(inputs.image).then(cover_image => {
            const uploadPromises = inputs.details.map(({ images }) => uploadImages(images));
            // Wait for all images to upload
            Promise.all(uploadPromises).then(async (section_images) => {
                let data = {
                    name: inputs.name,
                    description: inputs.desc,
                    services: !inputs.services ? [] : inputs.services.split(",,").map(item => item != ""),
                    results: !inputs.results ? [] : inputs.results.split(",,").map(item => item != ""),
                    links: !inputs.services ? [] : inputs.links.split(",,").map(item => item != ""),
                    image: cover_image[0],
                    details: inputs.details.map((item, index) => {
                        let startIndex = index > 0 ? inputs.details[index - 1].images.target.files.length : 0;
                        let endIndex = index > 0 ? item.images.target.files.length + startIndex : item.images.target.files.length;
                        return { ...item, images: section_images.flat().slice(startIndex, endIndex) }
                    })
                }

                try {

                    let POSTDB = await Post("/api/admin/casestudy", data)
                    if (POSTDB) {
                        setInputs({
                            name: "",
                            desc: "",
                            services: "",
                            links: "",
                            results: "",
                            image: {},
                            details: [
                                {
                                    title: "",
                                    subtitle: "",
                                    images: {}
                                }
                            ]
                        })
                        toast(`${data.name} Created Successfully`, { position: "top-right", type: "success" });
                        Get("/api/admin/casestudy", true)
                    }
                } catch (err) {

                }
            });
        })
    }

    const deleteCase = async (id) => {
        const selectedCaseStudy = response.find(item => item._id == id);
        if (selectedCaseStudy) {
            const images = [selectedCaseStudy.image, ...selectedCaseStudy.details.map(item => item.images).flat()]
            // deleting images from convex
            const deletImages = await deleteFiles({ storageIds: images });
            if (deletImages) {
                const deleteFromDB = await Delete("/api/admin/casestudy", true);
                if (deleteFromDB) {
                    toast(`${selectedCaseStudy.name} Deleted Successfully`, { position: "top-right", type: "success" })
                    Get("/api/admin/casestudy", true)

                }

            } else {
                toast(`Couldn't delete images`, { position: "top-right", type: "error" })
            }

        }
    }
    useEffect(() => {
        Get("/api/admin/casestudy", true)
    }, [])
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 md:gap-20 py-10 font-Barlow'>
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
                        <label htmlFor="">Cover Image</label>
                        <input required type="file" className='border p-3' name='cover_image' onChange={e => setInputs(prev => ({ ...prev, image: e }))} />
                    </div>


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
                                <input required key={index} type="file" className='border p-3' name='url' multiple onChange={e => {
                                    let details = inputs.details.map((item, iten_index) => iten_index == index ? { ...item, images: e } : item);
                                    setInputs(prev => ({ ...prev, details }))

                                }} />
                            </div>

                        </div>)
                    }

                    <button className='p-3 bg-primary text-white flex justify-center'>
                        {loading ? <FaSpinner size={25} className='animate-spin' /> : <span>Create Case</span>}
                    </button>
                    {/* <input required type="text" placeholder='Enter Results' className='outline-0 border w-[100%] border-black py-3 px-5' name='results' /> */}

                    {/* 
                <Editor
                    apiKey="sqv2eqk1gf12p0we96b3x46ym0i1vl9wr4oqvsysbaq0h105" // Get a free API key at https://www.tiny.cloud/
                    initialValue=""

                    init={{
                        height: 500,
                        menubar: false,
                        plugins: ["image", "lists", "link"],
                        toolbar: "undo redo | formatselect | bold italic | alignleft aligncenter alignright | bullist numlist outdent indent | image",
                    }}
                    onEditorChange={(newContent) => setContent(newContent)}
                /> */}
                </form>
            </div>

            <div>
                <table className='border w-[100%]'>
                    <thead>
                        <tr className='text-xs'>
                            <td className='border py-4 px-5'>Brand Name</td>
                            <td className='border px-5'></td>
                        </tr>
                    </thead>

                    <tbody>
                        {response?.length > 0 ? response.map(({ name, _id }, index) => <tr key={index}>
                            <td className='border py-5 px-5'>{name}</td>
                            <td className='border px-5'>
                                <div className='flex justify-end'>
                                    <AiOutlineDelete size={20} className='text-red-500 cursor-pointer' onClick={() => deleteCase(_id)} />
                                </div>
                            </td>
                        </tr>) : <tr>
                            <td colSpan={2}>
                                <div className='h-[100px] flex justify-center items-center'>No Case Study Created</div>
                            </td>
                        </tr>}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Case_Study
