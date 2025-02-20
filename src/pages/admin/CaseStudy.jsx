import React, { useContext, useRef, useState } from 'react'
import { UserContext } from '../../context/user'
import { Editor } from "@tinymce/tinymce-react";
import { CiSquarePlus } from "react-icons/ci";
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { storage } from '../../config/firebase';

const Case_Study = () => {
    const [data, setData] = useState({
        name: "",
        desc: "",
        services: "",
        links: "",
        details: [
            {
                title: "",
                subtitle: "",
                images: [{ url: "" }]
            }
        ]
    })
    const [content, setContent] = useState("");
    const handleAddSection = () => {
        let details = [...data.details, {
            title: "",
            subtitle: "",
            images: [{ url: "" }]
        }]
        setData(prev => ({ ...prev, details }))

    }

    const handleAddImage = (searchIndex) => {
        // adding image to section state by getting the index of selected plus icon
        const details = data.details.map((item, index) => index == searchIndex ? (
            { ...item, images: [...item.images, { url: "" }] }) : item);

        setData(prev => ({ ...prev, details }))
    }

    const handleDetailsInput = (e, selected_index) => {
        let details = data.details.map((item, index) => index == selected_index ? { ...item, [e.target.name]: e.target.value } : item);
        setData(prev => ({ ...prev, details }))

    }

    const handleInputChange = (e) => {
        setData(prev => ({ ...prev, [e.target.name]: e.target.value }))
    }

    const uploadImages = async (e) => {
        const image = e.target.files[0]
        const storageRef = ref(storage, `images/${image.name}`);

        try {
            await uploadBytes(storageRef, image)
            const downloadURL = await getDownloadURL(storageRef)
            console.log(downloadURL)
        } catch (err) {
            console.error(err)
        }
    }
    return (
        <div className='flex justify-center items-center py-10 font-Barlow '>
            <form action="" className='w-[50%] flex flex-col gap-5'>
                <div className='flex flex-col gap-1'>
                    <label htmlFor="">Brand Name</label>
                    <input required type="text" placeholder='Enter Name' className='outline-0 border w-[100%] border-black py-3 px-5' name='name' onChange={handleInputChange} value={data.name} />
                </div>
                <div className='flex flex-col gap-1'>
                    <label htmlFor="">Brand Description</label>

                    <input required type="text" placeholder='Enter Description' className='outline-0 border w-[100%] border-black py-3 px-5' name='desc' onChange={handleInputChange} value={data.desc} />
                </div>

                <div className='flex flex-col gap-1'>
                    <label htmlFor="">Services Offered</label>


                    <input required type="text" placeholder='Enter Services' className='outline-0 border w-[100%] border-black py-3 px-5' name='services' onChange={handleInputChange} value={data.services} />
                </div>


                <div className='flex flex-col gap-1'>
                    <label htmlFor="">Cover Image</label>
                    <input required type="file" className='border p-3' name='cover_image' onChange={uploadImages} />
                </div>


                <div className='flex justify-end'>
                    <span className='text-xs border border-black py-2  px-5' onClick={handleAddSection}>Add New Section</span>
                </div>
                {
                    data.details.map(({ images, title, subtitle }, index) => <div className='flex flex-col gap-5' key={index}>

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
                                <CiSquarePlus size={30} onClick={() => handleAddImage(index)} className='cursor-pointer' />
                            </div>
                            {images.map((image, index) => <input required key={index} type="file" className='border p-3' name='url' />
                            )}
                        </div>

                    </div>)
                }

                <button className='p-3 bg-primary text-white'>Create Case</button>
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
