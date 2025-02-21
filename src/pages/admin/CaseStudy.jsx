import React, { useContext, useState } from 'react'
import { CiSquarePlus } from "react-icons/ci";
import { useMutation } from "convex/react";
import { api } from "../../../convex/_generated/api";
import { useRequest } from '../../hooks/requests';
import { FaSpinner } from 'react-icons/fa';
import { UserContext } from '../../context/user';

const Case_Study = () => {
    const generateUploadUrl = useMutation(api.messages.generateUploadUrl);

    const { Post, changeLoading, data: { loading, response } } = useRequest()
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
        // console.log(inputs.services.split(","))

        changeLoading(true);
        uploadImages(inputs.image).then(cover_image => {
            const uploadPromises = inputs.details.map(({ images }) => uploadImages(images));
            // Wait for all images to upload
            Promise.all(uploadPromises).then(section_images => {
                console.log(section_images)
                let data = {
                    name: inputs.name,
                    description: inputs.desc,
                    services: inputs.services.split(","),
                    results: inputs.results.split(","),
                    links: inputs.links.split(","),
                    image: cover_image[0],
                    details: inputs.details.map(item => ({ ...item, images: section_images.flat() }))
                }

                console.log(data)

                // Do something when all uploads are complete
                Post("/api/admin/casestudy", data)
            });
        })
    }

    return (
        <div className='flex justify-center items-center py-10 font-Barlow '>
            <form action="" className='w-[50%] flex flex-col gap-5' onSubmit={handleSubmit}>
                <div className='flex flex-col gap-1'>
                    <label htmlFor="">Brand Name</label>
                    <input required type="text" placeholder='Enter Name' className='outline-0 border w-[100%] border-black py-3 px-5' name='name' onChange={handleInputChange} value={inputs.name} />
                </div>
                <div className='flex flex-col gap-1'>
                    <label htmlFor="">Brand Description</label>
                    <textarea name="desc" id="" className='outline-0 border w-[100%] border-black py-3 px-5 resize-none' onChange={handleInputChange} value={inputs.desc}></textarea>

                </div>

                <div className='flex flex-col gap-1'>
                    <label htmlFor="">Services Offered</label>


                    <input required type="text" placeholder='Enter Services' className='outline-0 border w-[100%] border-black py-3 px-5' name='services' onChange={handleInputChange} value={inputs.services} />
                </div>

                <div className='flex flex-col gap-1'>
                    <label htmlFor="">Results Gained</label>


                    <textarea name="results" id="" className='outline-0 border w-[100%] border-black py-3 px-5 resize-none' onChange={handleInputChange} value={inputs.results}></textarea>
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
    )
}

export default Case_Study
