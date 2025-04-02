import React, { useContext, useEffect, useState } from 'react'
import { useRequest } from '../../hooks/requests';
import { FaSpinner } from 'react-icons/fa';
import { AiOutlineDelete } from "react-icons/ai";
import { toast } from 'react-toastify';
import { FiEdit3 } from "react-icons/fi";
import { NavLink } from 'react-router-dom';

const Case_Study = () => {

    const [showYoutube, setShowYoutube] = useState(false);

    const { Post, Get, changeLoading, Delete, data: { loading, response } } = useRequest()
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
        changeLoading(true);
        const files = inputs.image ? [inputs.image, ...inputs.details.map(({ images }) => images)] : [...inputs.details.map(({ images }) => images)];
        const imagesUrl = await uploadImages(files); //uploading images

        let data = {
            name: inputs.name,
            description: inputs.desc,
            services: inputs.services.split(",,").filter(item => item != ""),
            results: inputs.results.split(",,").filter(item => item != ""),
            links: inputs.links.split(",,").filter(item => item != ""),
            youtubeVideo: inputs.youtubeVideo ? inputs.youtubeVideo.replace(/"/g, "'") : null,
            image: inputs.image ? imagesUrl[0] : null,
            details: inputs.details.map((item, index) => {
                let startIndex = index > 0 ? inputs.details[index].images.length : inputs.image ? index + 1 : index;
                let endIndex = index > 0 ? item.images.length + startIndex : inputs.image ? item.images.length + 1 : item.images.length;
                return { ...item, images: imagesUrl.flat().slice(startIndex, endIndex) }
            })
        }

        let saveToDb = await Post("/api/admin/casestudy", data, true);  // sending to database
        if (saveToDb) {
            console.log(saveToDb)
            setInputs({
                name: "",
                desc: "",
                services: "",
                links: "",
                results: "",
                image: {},
                youtubeVideo: "",
                details: [
                    {
                        title: "",
                        subtitle: "",
                        images: {}
                    }
                ]
            })
            Get("/api/admin/casestudy", true)
            toast(`${data.name} Created Successfully`, { position: "top-right", type: "success" });
        }


    }

    const deleteCase = async (id) => {
        const selectedCaseStudy = response.find(item => item._id == id);
        const deleteFromDB = await Delete(`/api/admin/casestudy/${id}`, true);
        if (deleteFromDB) {
            toast(`${selectedCaseStudy.name} Deleted Successfully`, { position: "top-right", type: "success" })
            Get("/api/admin/casestudy", true)
        }
    }

    const editCase = (id) => {
        let { name, description, details, links, results, } = response.find(item => item._id == id);

        setInputs(prev => ({ ...prev, name: name, desc: description, details, youtubeVideo }))

    }
    useEffect(() => {
        Get("/api/admin/casestudy", true)
    }, []);

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
                        <select name="" id="" className='outline-0 border w-[100%] border-black py-3 px-5 resize-none' onChange={e => setShowYoutube(e.target.value == "youtube" ? true : false)}>
                            <option value="image">Image</option>
                            <option value="youtube">Video</option>

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
                                <input required type="file" className='border p-3' name='image' onChange={e => setInputs(prev => ({ ...prev, image: e.target.files }))} />
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
                                <input required key={index} type="file" className='border p-3' name='url' multiple onChange={e => {
                                    let details = inputs.details.map((item, iten_index) => iten_index == index ? { ...item, images: e.target.files } : item);
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
                                <div className='flex justify-end gap-5'>
                                    <NavLink to={`/admin/dashboard/${_id}`}>
                                        <FiEdit3 size={20} className='text-green-500 cursor-pointer' />
                                    </NavLink>

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
